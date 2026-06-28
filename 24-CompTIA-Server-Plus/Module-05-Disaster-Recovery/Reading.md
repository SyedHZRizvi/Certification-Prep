# Module 5: Disaster Recovery & Backup 🔁

> **Why this module matters:** Disaster recovery and backup carry the heaviest weight in CompTIA's "Security & DR" domain (~24% of SK0-005). The exam will hand you scenarios with two numbers an **RTO (Recovery Time Objective)** and an **RPO (Recovery Point Objective)** and ask you to pick a backup type, replication strategy, or site model. If you cannot match `RPO = 15 min` to "log shipping every 15 minutes" in your sleep, you will fail this domain.

> **Prerequisites for this module.** Before starting:
> - Modules 1–4 (especially storage replication from Module 3 and snapshots from Module 4)
> - Familiarity with what a database transaction log is
> - Basic understanding of off-site / on-site storage
>
> If those are shaky, pause and review before continuing.

---

## 🌊 A Story: The Hurricane That Tested Everything

Meet Diego. He runs IT for a regional hospital network in Florida. For years he's bought servers, storage, and backup software. He's run weekly fire drills. He's stored backup tapes in a fireproof safe across the street. He thought he was ready.

September brings Hurricane Camille II, a Category 4 that drops a tree on the colocation building's chiller and floods the data hall. The primary site is offline for 11 days. Diego's plan held up, except for three specific failures:

1. **The most-recent backup is 36 hours old.** Backups ran nightly at 1 a.m., but Camille hit Wednesday afternoon, a full business day of patient records, lab results, and pharmacy orders that never made it to tape. Lost.
2. **The DR site is "warm", not "hot."** It has hardware but no current data. Restoring 14 TB from off-site tapes takes 22 hours. The hospital diverts ambulances during that window.
3. **One critical application's backups had silently failed for 6 weeks.** The backup software logged "warnings" that nobody read. When Diego went to restore, there was nothing on the destination volume newer than August.

Camille was *not* the failure. The plan was. This module teaches you the framework Diego needed:

- **RTO and RPO**, the two numbers the business gives you
- **Backup types** full, incremental, differential, synthetic full and the tradeoffs
- **The 3-2-1 rule** (and modern 3-2-1-1-0 variant)
- **GFS rotation**, tape strategy
- **Cold / Warm / Hot sites**, DR site tiers
- **Replication strategies**, synchronous and asynchronous (revisit from Module 3)
- **BCP vs DR**, the broader business plan vs the technical IT subset
- **Backup verification**, because "running" doesn't mean "working"

---

## 🎯 RTO and RPO, The Two Numbers That Drive Everything

These two terms anchor every DR conversation. **MEMORIZE COLD.**

| Term | Stands for | Asks the question |
|---|---|---|
| **RTO** (Recovery Time Objective) | How long can we be down? | "If this system dies at 9:00 a.m., it MUST be back by ____." |
| **RPO** (Recovery Point Objective) | How much data can we lose? | "When we recover, our data will be at most ____ old." |

Pictorially:

```
        Disaster
          |
          v
Time:  ---|----------------|-------> recovery
          ^                ^
          |                |
   (last good             (system
    backup/replica)      operational)

       <-- RPO -->       <-- RTO -->
```

### Worked examples

| Business Need | RTO | RPO | Implication |
|---|---|---|---|
| Patient drug allergies (life-safety) | 5 min | 0 | Synchronous replication + hot site |
| E-commerce checkout | 1 hr | 5 min | Async replication + warm DR + log shipping |
| HR personnel records | 4 hr | 24 hr | Daily backup + warm DR |
| Marketing photo archive | 7 days | 24 hr | Daily backup to off-site cloud; cold site OK |
| Long-term tax records (regulatory) | 30 days | 7 days | Weekly archive to tape/cold storage |

🎯 **Exam pattern:** *"Database must lose no more than 15 minutes of transactions."* → **RPO = 15 min**, which means you need replication or log shipping every ≤ 15 min.

🎯 **Exam pattern:** *"Email must be back online within 1 hour of any outage."* → **RTO = 1 hr**, which means you need warm/hot DR + automated failover.

---

## 💼 BIA, Business Impact Analysis

A **BIA** assigns numbers to business processes:

| BIA Term | Means |
|---|---|
| **RTO / RPO** | As above |
| **MTD** (Maximum Tolerable Downtime) | Hard ceiling above which the business fails |
| **WRT** (Work Recovery Time) | Time after technical recovery to verify and resume business operations |
| **MTBF** (Mean Time Between Failures) | Reliability of a component |
| **MTTR** (Mean Time To Repair) | Average time to fix a broken component |

Relationship: **MTD ≈ RTO + WRT.** RTO is just the technical part; WRT is the people/process catch-up time.

🚨 **Trap on the exam:** Don't confuse MTBF (between failures bigger is better) with MTTR (to repair smaller is better).

---

## 📼 Backup Types, The Big Four

CompTIA tests these by name. You must know what each backs up, what it sets on the archive bit, and the restore implications.

| Type | Backs up | Archive bit | Backup size | Backup time | Restore complexity |
|---|---|---|---|---|---|
| **Full** | Every selected file | Cleared | Largest | Longest | Simplest, just restore the full |
| **Incremental** | Files changed since the LAST backup of ANY type | Cleared | Smallest | Fastest | Most complex, need full + every incremental, in order |
| **Differential** | Files changed since the last FULL | NOT cleared | Grows over time | Grows over time | Medium, full + most recent differential |
| **Synthetic Full** | Built on backup server from last real full + subsequent incrementals; no production read | n/a | Full-size on target | Fast (no production read) | Same as full |

### Worked timeline, week-on-week with each strategy

Assume Full = Sunday, daily backups Mon–Sat.

**Incremental schedule:**
```
Sun: F                      → backup ~all data
Mon: I (since Sun)          → tiny
Tue: I (since Mon)          → tiny
Wed: I (since Tue)          → tiny
...
Sat: I (since Fri)          → tiny
```
Restore on Thursday: Sun full + Mon I + Tue I + Wed I (in order). Slow.

**Differential schedule:**
```
Sun: F                      → backup ~all data
Mon: D (since Sun)          → small
Tue: D (since Sun)          → growing
Wed: D (since Sun)          → bigger
...
Sat: D (since Sun)          → biggest
```
Restore on Thursday: Sun full + Wed D. Fast. But Wed D is large.

**Synthetic full (modern enterprise):**
- Real Full on Sunday.
- Incremental Mon–Sat.
- Backup server periodically *synthesizes* a new "full" from last full + incrementals, without reading production.
- Production sees only incremental load; restore complexity stays low.

🎯 **Exam pattern:** *"We need short backup windows + fast restores; production database can't handle a full backup nightly."* → **Synthetic full** (or full once a week + incremental daily with occasional synthetic refresh).

### Snapshots, image backups, replicas, different from "backup type"

| | When to use |
|---|---|
| **Snapshot** | Point-in-time on the same array; short-term rollback (Module 4) |
| **Image / bare-metal backup** | Full system image for entire-server restore (boot drive included) |
| **File-level backup** | Granular file restore |
| **VM (Virtual Machine)-aware backup** | Veeam, Commvault, native, backs up entire VMs with application consistency |
| **Application-consistent backup** | Uses VSS (Windows) or pre/post scripts (Linux) to quiesce DBs before snap |

---

## 🛡️ The 3-2-1 Rule, The Universally Tested Backup Rule

Coined by photographer-turned-author Peter Krogh in *The DAM Book* (2005), the **3-2-1 rule** is the most-cited backup principle in IT.

| Number | What |
|---|---|
| **3** copies of the data | (production + 2 backups) |
| **2** different media types | Disk + tape, or disk + cloud, etc. |
| **1** copy off-site | Geographically separate from production |

**Modern variant: 3-2-1-1-0**

| Number | Adds |
|---|---|
| **1** copy immutable (or air-gapped) | Resistant to ransomware/insider deletion |
| **0** verified errors | Backups are tested-restorable |

🚨 **Trap on the exam:** "We back up to two RAID arrays in the same room" violates 3-2-1, there's no *off-site* copy. A hurricane / fire / ransomware-encrypted file server takes both arrays.

🎯 **Exam pattern:** *"Which best illustrates the 3-2-1 rule?"* → Production + on-site disk backup + off-site tape (or cloud). Three copies, two media types, one off-site.

---

## 🔄 Backup Rotation, GFS

**GFS (Grandfather-Father-Son)** is the classic tape rotation:

| Tape | Role | Retention |
|---|---|---|
| **Son** | Daily | Mon–Thu |
| **Father** | Weekly | One per week |
| **Grandfather** | Monthly | One per month for the year |

With one set per role, a 12-month GFS rotation needs ~22 tapes:

- 4 daily Son tapes (Mon–Thu)
- 5 weekly Father tapes (Fri end-of-week)
- 12 monthly Grandfather tapes (last Friday of each month)
- 1 yearly tape (year-end)

Gives ~13 months of recoverable history without storing every single daily forever.

Modern variants:

- **GFS + cloud archive**, Sons/Fathers on disk for fast restore; Grandfathers to cloud cold storage (S3 (Simple Storage Service) Glacier, Azure Archive)
- **Retention-policy-based**, backup software handles "retain dailies for 30 days, weeklies for 12 weeks, monthlies for 12 months" automatically

🎯 **Exam pattern:** *"How long can we restore data after a deletion under standard GFS?"* → Up to ~13 months (depending on the specific rotation set).

---

## 🏢 DR Sites, Cold, Warm, Hot

Three tiers, distinguished by how ready the DR site is at the moment of disaster.

| Tier | Hardware | Data | Power/HVAC | Recovery time | Cost |
|---|---|---|---|---|---|
| **Cold site** | None (or generic) | None | Yes | **Days to weeks** | Lowest |
| **Warm site** | Pre-staged, ready to use | Recent (hours–days old, restored from backups) | Yes | **Hours** | Medium |
| **Hot site** | Identical to production | Continuously replicated, current | Yes | **Minutes** | Highest |
| **Mobile site** | Trailer-mounted; deployable on demand | None | Self-powered | Days | Medium-high |
| **Cloud DR** | On-demand cloud resources | Pre-replicated to cloud | n/a | Minutes-hours | Varies (pay-per-use OR reserved) |

🎯 **Exam pattern:**

- *"We need < 5-minute recovery"* → **Hot** site
- *"We need < 4-hour recovery, budget moderate"* → **Warm** site
- *"We need < 7-day recovery, budget tight"* → **Cold** site
- *"We want on-demand DR without owning capacity"* → **Cloud** DR

🚨 **Trap:** A warm site without an *automated* failover and *practiced* runbook routinely overshoots its target RTO. Hot/warm site classification is meaningless without tested failover.

---

## 🔁 Replication, Revisit from Module 3

Brief recap (full table is in Module 3):

| | Synchronous | Asynchronous |
|---|---|---|
| Write returns when | Both local AND remote ack | Local ack only |
| RPO | **0** | > 0 |
| Distance | Metro (~ ≤ 100 km, ≤ ~5 ms RTT) | Continental |
| Cost | High | Lower |

Modern enterprise patterns:

- **Application-level replication**, database log shipping, AlwaysOn AGs, Oracle Data Guard
- **Storage-level replication**, array-to-array (NetApp SnapMirror, EMC SRDF)
- **Hypervisor-level replication**, Hyper-V Replica, VMware vSphere Replication, Zerto
- **Backup-level replication**, backups replicated from primary backup target to secondary (Veeam Backup Copy, Commvault aux copy)

🎯 **Exam pattern:** *"The DR plan calls for RPO ≤ 30 seconds for SQL (Structured Query Language) databases across two metro DCs."* → **Synchronous DB log shipping** (or AlwaysOn AG synchronous-commit) over metro fiber.

---

## 🛟 BCP vs DR, The Wider Picture

| | **BCP** (Business Continuity Plan) | **DR** (Disaster Recovery) |
|---|---|---|
| Scope | Entire business operation people, process, alt sites, comms, supply chain | Technical IT recovery systems, data, apps |
| Owner | Executive / COO (Chief Operating Officer) / BCM team | IT / CTO (Chief Technology Officer) |
| Includes | Crisis comms, alt staffing, supplier failover, customer comms, finance access | RTO/RPO/RTPO, runbooks, infra recovery |
| Tested by | Tabletop exercises, full-scale drills | DR exercises, restore tests |

**Truth:** DR is a *subset* of BCP. You can have great DR (your servers come back) and still fail BCP (your customer service line is unstaffed because no one knew the satellite-phone tree).

### Key BCP terms

| Term | Means |
|---|---|
| **BIA** | Business Impact Analysis (sets RTO/RPO/MTD) |
| **BCP** | Business Continuity Plan |
| **DRP (Distribution Requirements Planning)** | Disaster Recovery Plan (the IT subset) |
| **IRP** | Incident Response Plan (security event-driven) |
| **Crisis Communication Plan** | Who calls whom; press, regulators, customers |
| **Succession plan** | Who acts if key staff are unavailable |
| **Tabletop exercise** | Discussion-based walkthrough of a scenario |
| **Functional exercise** | Hands-on partial-system test |
| **Full-scale exercise** | Real failover, real users |

---

## 🧪 Backup Verification, Because "Running" ≠ "Restorable"

Diego's hospital learned this the hard way: a backup that runs without errors can still be unrestorable. Verification tests prove restorability.

| Test | What it does |
|---|---|
| **Full restore drill** | Restore a real VM or volume into an isolated lab; verify integrity |
| **File-level spot check** | Random sample restore of files; verify content |
| **Boot test** | Bring up the backup as a VM (Veeam's "SureBackup", Commvault's "VirtualizeMe") |
| **Checksum verification** | Compare hashes of source and restored data |
| **DR drill** | Annually or quarterly, fail over to DR site and verify business processes |

🚨 **Trap on the exam:** "Backups completed successfully every night for 6 months" is *not* the same as "We can restore the last 6 months of data." Without verification, the second is unknown.

🎯 **Exam pattern:** *"How do you ensure backups can actually be restored?"* → Periodic **restore tests** (file-level + full restore + DR failover drill).

---

## 🧊 Immutability and Ransomware Protection

Modern ransomware variants actively seek and destroy backups before encrypting production. Defenses:

| Defense | What it does |
|---|---|
| **Immutable backups** | Write-Once-Read-Many (WORM) on the backup target; cannot be deleted or modified for the retention period |
| **Air-gapped backups** | Physically disconnected media (offline tape, removed external drive) |
| **Separate credentials** | Backup admin account uses MFA (Multi-Factor Authentication), separate from domain admin |
| **Object lock in S3 / equivalents** | Cloud-side WORM (S3 Object Lock, Azure Blob immutable storage) |
| **Linux-based backup server** | Some ransomware targets only Windows; using Linux can blunt that |
| **Tested isolation** | Backup server not joined to production AD (Active Directory); backup network on its own VLAN (Virtual Local Area Network) |

🎯 **Exam pattern:** *"After a ransomware incident, the org found all backup files encrypted. How could this have been prevented?"* → **Immutable / air-gapped backups + separate backup credentials**.

---

## 📜 Recovery Process & Documentation

When disaster strikes, your team works the **runbook**:

| Step | What |
|---|---|
| 1. Declare disaster | A named person (CIO, on-call lead) formally declares, triggers BCP team |
| 2. Activate IR / DR plans | Crisis comms; status page; vendor escalations |
| 3. Failover | Promote DR site, redirect DNS (Domain Name System)/traffic |
| 4. Verify | Functional smoke tests, user comms |
| 5. Operate at DR | Standard run-book mode for as long as needed |
| 6. Plan failback | When primary returns, sync data back, schedule cutover |
| 7. Post-mortem | What went wrong, what worked, what to fix |

### Documentation that saves you

- **Runbooks**, step-by-step for each tested DR scenario
- **CMDB**, accurate inventory + dependencies (Module 2)
- **Contact tree**, vendors, staff, executives
- **Asset list with serial numbers**, for vendor support calls
- **Encryption keys / passwords**, escrowed in a secure vault (not on the encrypted system!)
- **Network diagrams**, current as of last change
- **Account credentials with break-glass procedure**, sealed envelope in vault

🚨 **Trap:** "The runbook is on the SharePoint that's encrypted right now", anti-pattern. Print critical runbooks; keep them off the systems they recover.

---

## 🔬 Scenario Walkthrough (PBQ-style thinking)

> **Scenario.** Diego's hospital network (from the opening story) has 4 sites: primary data center, a colo 25 km away with dark fiber, a cloud account, and an off-site tape vault 80 km away. The CFO (Chief Financial Officer) has allocated budget for one upgrade. Patient drug-allergy data needs RPO=0/RTO=5min. EMR/lab needs RPO=15min/RTO=2hr. Email needs RPO=1hr/RTO=4hr. Marketing photos need RPO=24hr/RTO=7days. Build the plan.

**Walkthrough.**

1. **Patient drug allergies (life safety)**, synchronous replication of the allergy DB to the 25-km colo (within metro RTT). Active-passive failover with auto-promote on health-check failure. Hot site for this DB. **RPO=0 / RTO ≈ minutes.**
2. **EMR / lab (RPO=15min / RTO=2hr)**, asynchronous SQL log shipping to the colo every 5 minutes. Warm site with the SQL instance pre-installed but normally cold-standby. Tested restore process. **Achieved RPO ≈ 5 min / RTO ≈ 1-2 hr.**
3. **Email (RPO=1hr / RTO=4hr)**, daily full backup + hourly transaction log backup to disk on-site, replicated to cloud nightly. Warm DR via cloud VM. **Achieved RPO ≈ 1 hr / RTO ≈ 4 hr.**
4. **Marketing photos (RPO=24hr / RTO=7days)** nightly backup to on-site disk + cloud cold storage (S3 Glacier / Azure Archive). No DR site needed restore on demand from cloud. **Achieved RPO ≈ 24 hr / RTO ≈ days.**
5. **3-2-1-1-0 across the board.**
   - 3 copies: production + on-site backup + off-site copy
   - 2 media types: disk + cloud (or disk + tape)
   - 1 off-site (colo + cloud + tape vault, multiple)
   - 1 immutable: S3 Object Lock for cloud copies; WORM tape for grandfathers
   - 0 verified errors: monthly file-level restore + quarterly DR drill
6. **Documentation.** Runbooks printed and stored in vault + colo. CMDB updated within 5 business days of any change. Contact tree quarterly verified.
7. **The lesson from Camille.** Hourly RPO for EMR means the Wednesday afternoon data is replicated to the colo every hour, not nightly to tape. Diego's 36-hour gap shrinks to ≤ 15 minutes.

This is the kind of integration question Server+ PBQs ask. Notice how every business tier got a different design.

---

## ⚠️ Exam Traps & Common Misconceptions

| Misconception | Reality |
|---|---|
| "Backups = DR plan." | Backups are *one component*. DR also includes runbooks, alt sites, comms, tested failover. |
| "RPO and RTO are the same thing." | RPO = data loss tolerance. RTO = downtime tolerance. Different axes. |
| "Differential backups always get smaller over time." | No, they *grow* each day because they're cumulative since the last full. Incrementals stay small. |
| "Synthetic full = full backup." | Synthetic full is *built* on the backup server from earlier full + incrementals, no production read. End result is restorable like a full. |
| "Snapshots are DR." | Same-storage snapshots die with the storage. Use snapshots for rollback; backups for DR. |
| "The 3-2-1 rule needs cloud." | Cloud is one way; off-site tape/colo also satisfies the "1 off-site" pillar. |
| "Successful backup = working backup." | Without periodic restore tests, you don't know if backups work. Test or you don't have DR. |
| "Cold site is cheap so always pick it." | Cold-site recovery measured in *days* may exceed the business's MTD. Match site tier to RTO. |
| "Sync replication works across continents." | Latency physics destroys app performance. Async + acceptable RPO is the realistic choice for transcontinental DR. |
| "Hot site doubles cost forever." | Yes. The question is whether the business value of < 5-min recovery justifies the spend. BIA-driven decision. |

---

## 🎓 Key Terms To Know (Add to Flashcards!)

| Term | Definition |
|------|------------|
| **RTO / RPO** | Recovery Time / Point Objective |
| **MTD / WRT** | Maximum Tolerable Downtime / Work Recovery Time |
| **MTBF / MTTR** | Mean Time Between Failures / To Repair |
| **BIA / BCP / DRP / IRP** | Business Impact Analysis / Business Continuity Plan / DR Plan / Incident Response Plan |
| **Full / Incremental / Differential / Synthetic full** | Backup types |
| **Archive bit** | File attribute that backup software toggles |
| **VSS** | Volume Shadow Copy Service (Windows), quiesces apps for consistent backup |
| **3-2-1 rule** | 3 copies, 2 media, 1 off-site |
| **3-2-1-1-0** | + 1 immutable + 0 verified errors |
| **GFS rotation** | Grandfather-Father-Son tape rotation |
| **Cold / Warm / Hot site** | DR site tiers by readiness |
| **Mobile site** | Trailer-mounted DR |
| **Cloud DR** | DR using on-demand cloud resources |
| **Synchronous / Asynchronous replication** | RPO 0 / RPO > 0 |
| **Log shipping** | Periodic ship of DB transaction logs to a replica |
| **Immutable / Air-gapped backups** | WORM or offline copies, ransomware-resistant |
| **Runbook** | Step-by-step procedure for a recovery scenario |
| **Tabletop exercise** | Discussion-based DR walkthrough |
| **Functional / Full-scale exercise** | Hands-on partial / full DR test |

### Acronyms cheat-row (Module 5)
| Acronym | Meaning |
|---|---|
| RTO / RPO | Recovery Time / Point Objective |
| MTD / WRT | Maximum Tolerable Downtime / Work Recovery Time |
| MTBF / MTTR | Mean Time Between Failures / To Repair |
| BIA | Business Impact Analysis |
| BCP / DRP / IRP | Business Continuity Plan / Disaster Recovery Plan / Incident Response Plan |
| GFS | Grandfather-Father-Son |
| 3-2-1 / 3-2-1-1-0 | Backup rules |
| VSS | Volume Shadow Copy Service |
| WORM | Write Once Read Many |
| AG | Always-On Availability Group (SQL Server) |
| SLA (Service Level Agreement) | Service Level Agreement |

---

## 📊 Case Study, Code Spaces (2014): The Day Backups Were the Same as Production

**Situation.** Code Spaces, a small UK-based source-code hosting company, ran its entire infrastructure production AND backups on a single AWS (Amazon Web Services) account. On 17 June 2014, an attacker gained access to that AWS account (root credentials, no MFA) and demanded ransom. When Code Spaces refused, the attacker began deleting EC2 (Elastic Compute Cloud) instances, S3 buckets, EBS volumes, and AMIs, including the backups. Within hours the company was *gone*. (Code Spaces public statement, 18 June 2014.)

**Outcome.** Code Spaces ceased operations entirely. Customers lost code. The company never recovered.

**Lesson for the exam / for practitioners.**

- **3-2-1 means *separation*.** Production and backups in the same AWS account, same credentials, same blast radius = effectively *one* copy.
- **Backup credentials must be separate**, different IAM (Identity and Access Management) role, different MFA, different control plane.
- **Immutability is a backstop.** S3 Object Lock didn't exist in 2014. It does now. Use it.
- **Air-gapped or offline copies survive credential compromise.** Tape doesn't care if you have root.
- **DR plans must include "what if attacker has all credentials?"** This is a "tabletop scenario" that didn't get run.
- **Single-cloud lock-in is a risk.** Modern practice: at least one off-cloud copy (different region, different cloud, on-prem) for the most-critical data.

This is the scenario Server+ tests when asking "how do you protect backups from a malicious admin?" The answer is **separation of administration, immutability, and at least one offline/air-gapped copy.**

**Discussion (Socratic).**
- **Q1:** Your company is 100% on AWS in one region. Argue both sides of "move backups to a different cloud" vs "use cross-account + S3 Object Lock within AWS."
- **Q2:** A ransomware actor compromises your backup admin's laptop. What controls would have detected this BEFORE backups were deleted, and at what cost?
- **Q3:** Tape was uncool in 2014, but Code Spaces would have survived with tape. Is tape's resurgence (LTO-9 = 18 TB native) a real DR option for a 100 TB modern SaaS (Software as a Service), or just nostalgia?

---

## ✅ Module 5 Summary

You now know:

- 🎯 **RTO and RPO**, definitions, how to read scenarios, how each drives architecture
- 💼 **BIA** terms: MTD, WRT, MTBF, MTTR
- 📼 The **four backup types**: full, incremental, differential, synthetic full, and the size/time/restore tradeoffs of each
- 🛡️ The **3-2-1 rule** and modern **3-2-1-1-0** variant
- 🔄 **GFS** tape rotation (Son/Father/Grandfather)
- 🏢 **Cold / warm / hot / mobile / cloud DR** site tiers
- 🔁 Replication recap: synchronous vs asynchronous, log shipping, AG
- 🛟 **BCP vs DR**, DR as a subset; BIA → BCP → DRP → IRP hierarchy
- 🧪 **Backup verification**, restore tests, DR drills
- 🧊 **Immutability and air-gapping** for ransomware resistance
- 📜 Recovery process + documentation hygiene

**Next steps:**
1. 🎥 Watch the curated videos: [Videos.md](./Videos.md)
2. ✏️ Take the quiz: [Quiz.md](./Quiz.md), aim for 21/26
3. 📋 Review the [Cheat-Sheet.md](./Cheat-Sheet.md) before bed
4. ➡️ Move on: [Module 6, Server Security & Hardening](../Module-06-Security/Reading.md)

> **Where this leads.**
> - Inside this course: [Module 6](../Module-06-Security/Reading.md) hardens the systems we just learned to back up; [Module 7](../Module-07-Networking/Reading.md) covers DNS failover / GSLB for site cutover; [Module 8](../Module-08-Troubleshooting/Reading.md) diagnoses recovery failures.
> - Cross-course: **AWS Solutions Architect** maps these concepts to AWS Backup, RDS (Relational Database Service) PITR, multi-AZ, multi-region. **Azure Administrator** maps to Azure Backup, Site Recovery, Geo-Redundant Storage. **Security+** covers BCP/DRP from the security-program perspective.
> - Practice: Practice Exam 2 has ~9 questions from this module; the Final Mock has ~13.

---

## 📚 Further Reading (Optional)

**Primary sources:**
- 📄 NIST SP 800-34 Rev 1 (2010). *Contingency Planning Guide for Federal Information Systems.* (The DR/BCP bible.)
- 📄 NIST SP 800-184 (2016). *Guide for Cybersecurity Event Recovery.* (Modern ransomware-aware recovery.)
- 📄 ISO 22301:2019. *Security and resilience, Business continuity management systems.*
- 📄 Krogh, P. (2005). *The DAM Book: Digital Asset Management for Photographers.* (Origin of the 3-2-1 rule.)
- 📄 BackBlaze annual hard drive reliability reports (public quarterly data)

**Case-study sources:**
- 📄 Code Spaces public statement, 18 June 2014; community post-mortem write-ups
- 📄 *Wired*, Andy Greenberg (2018). "The Untold Story of NotPetya, the Most Devastating Cyberattack in History." 22 August 2018.
- 📄 Sony Pictures hack post-mortems (2014), for "what if you have nothing left to restore from"

**Practitioner / exam:**
- 📖 *CompTIA Server+ SK0-005 Exam Objectives* (free PDF)
- 📖 [Professor Messer SK0-005 videos](https://www.professormesser.com/server-plus/sk0-005/sk0-005-video-training-course/)
- 📖 *Site Reliability Engineering* (Beyer et al., Google free online) chapters on disaster, postmortems, capacity
- 📖 *Backup & Recovery* (W. Curtis Preston, O'Reilly), exhaustive sysadmin reference
