# Module 12: Documentation, Change & Disaster Recovery 📚

> **Why this module matters:** This module closes the course with the *meta-skills* that decide whether a tech becomes a senior engineer. Combined with Module 10, it's part of the **22% Operational Procedures domain** on 220-1102. Documentation determines whether the next person can solve the same problem in 5 minutes instead of 5 hours. DR determines whether the company survives the worst day in its history.

> **Prerequisites for this module.** Comfort with:
> - Module 10 (change management, CMDB, documentation types)
> - Module 5 (troubleshooting methodology)
> - Module 9 (recovery tools)

---

## 📚 A Story: The Backup That Saved a 53-Year-Old Manufacturing Company

Meet Aleksandra. She's the head of IT at a 53-year-old machine-tools manufacturer in Pittsburgh. The company makes precision parts for the aerospace industry. The CAD/CAM systems holding 50 years of proprietary tooling designs run on Windows Server 2019 with SQL Server. Backups go to a Veeam appliance in the same building, replicated nightly to AWS S3 in `us-east-2` (Ohio).

On a Friday evening in February, the production VLAN catches a ransomware infection, Lockbit 3.0. The variant encrypts files on attached drives, including the on-prem Veeam backups (Veeam's "Insider Protection" wasn't enabled). The company's production CAD/CAM data, plus 50 years of designs, are encrypted.

Saturday morning. Aleksandra activates her DR plan. She:

1. **Verifies the S3 backup is intact**, versioning enabled, MFA-delete required for deletion. The attacker couldn't reach it. Last full backup: Friday at 4:00 a.m., before infection.
2. **Spins up replacement infrastructure**, fresh Windows Server 2022 VMs on AWS EC2 (per her runbook). Restores SQL backups + file shares from S3.
3. **Validates**, runs the documented "smoke test" procedure: open 5 representative CAD files, query 10 representative SQL records, confirm checksums match.
4. **Rebuilds the on-prem environment**, reimage every desktop and server; restore from clean cloud baseline.
5. **Cutover**, production resumes Monday morning, ~60 hours after infection. Loss: roughly 14 hours of work (Friday afternoon between 4 a.m. backup and 6 p.m. detection).

She lost no orders. No customer was angry. The company's insurance covered the ~$45K of cloud infrastructure cost. The CEO ordered champagne for the team.

The reason this worked? **Documentation.** Aleksandra's DR plan written 9 months earlier, *tested in October* with a tabletop exercise, *partially tested in November* with a real S3-restore drill turned a catastrophic event into a 60-hour inconvenience.

This module teaches you to be Aleksandra. Documentation. Tested backups. DR planning. Ticketing discipline. These are the highest-leverage skills in IT.

---

## 🎫 Ticketing, The Backbone of Help Desk

Every IT interaction with a user should generate a ticket. The ticket is *the* communication artifact between IT, users, and management.

### Ticket lifecycle (ITIL-style)

```
1. NEW          , user creates / IT logs
2. ASSIGNED     , to a tech / queue
3. IN PROGRESS  , being worked
4. PENDING      , waiting on user / vendor
5. RESOLVED     , IT believes complete
6. CLOSED       , user confirms (or timer expires)
```

### Required fields

| Field | Purpose |
|-------|---------|
| **Requester** | Who reported it (name + email) |
| **Asset(s)** | Which hardware/software is involved |
| **Category** | Hardware / Software / Network / Account / Other |
| **Severity / Priority** | P1 (critical/down) → P5 (info) |
| **Description** | Symptom in user's words + verified |
| **Reproduction steps** | What user did to trigger |
| **Actions taken** | Chronological list |
| **Resolution** | What fixed it |
| **Time spent** | For SLA reporting |
| **Tags** | For knowledge-base searchability |

### Severity matrix (typical SMB)

| Sev | Impact | Example | Response time |
|-----|--------|---------|---------------|
| **P1** | Entire site down or business-critical | Email server down for all users | 15 minutes |
| **P2** | Single user can't work | User's laptop won't boot | 1 hour |
| **P3** | User impacted but workaround | Printer down (others work) | 4 hours |
| **P4** | Inconvenience | Slow PC | 1 business day |
| **P5** | Request / info | New software request | 3 business days |

### SLAs

- **Response time**, when IT acknowledges
- **Resolution time**, when issue is fixed
- Tracked per priority; usually contractual for managed-service providers

---

## 📖 Knowledge Base Best Practices

A KB article should answer one question end-to-end:

| Section | Content |
|---------|---------|
| **Title** | Symptom-based ("Outlook won't open after Windows Update") |
| **Symptoms** | What the user reports |
| **Cause** | Root cause if known |
| **Solution** | Step-by-step fix (numbered) |
| **Verification** | How to confirm fix worked |
| **Related articles** | Linked similar issues |
| **Last verified** | Date someone confirmed still accurate |

🎯 **The "stale KB" problem:** half of KB articles in most companies are obsolete. Always check the "last verified" date.

---

## 🗂️ Asset Management

### What to track per asset

- Asset tag (unique internal ID)
- Make / model / serial number
- Purchase date + warranty expiration
- Assigned user / location
- OS + software inventory
- Network info (MAC, IP)
- Maintenance history
- Disposal date / method (for retired assets)

### Asset lifecycle

```
Procurement → Receipt → Provisioning → Deployment → Use → Maintenance → Retirement → Disposal
```

### Disposal

- **Wipe** before disposing, DBAN, dd, vendor secure-erase, or per NIST SP 800-88
- **Physical destruction** for high-classification data (drill, shred, degauss for HDD)
- Recycle responsibly, R2 / e-Stewards certified recyclers
- Document the disposal (asset tag, date, method, certificate of destruction)

---

## 🔄 Change Management, Deep Dive

(Recap of Module 10, plus deeper detail.)

### Change request workflow

1. **Submit RFC** with required fields (impact, risk, rollback, test results)
2. **Technical review**, engineering / security weigh in
3. **CAB approval** (or pre-approval for Standard)
4. **Schedule**, assign maintenance window
5. **Communicate**, notify stakeholders (impacted users)
6. **Implement**, per documented procedure
7. **Verify**, post-change test
8. **Document**, update KB, CMDB, runbook
9. **PIR (Post-Implementation Review)**, for high-impact changes

### Backout plan must include

- Trigger criteria ("if test X fails, revert")
- Step-by-step rollback procedure
- Test of rollback (in non-prod ideally)
- Time-to-rollback estimate
- Who has authority to call "abort"

### Communication template (change announcement)

```
SUBJECT: [Change Notification] [Brief description], [date/time]

WHAT IS CHANGING: ...
WHY: ...
WHEN: [Start], [End], [Maintenance window]
IMPACT: Who/what is affected; expected downtime
WHO TO CONTACT: ...
REFERENCE: Change ticket #1234
```

---

## 💾 Backup Strategies

### Backup types

| Type | What it backs up | Restore speed | Backup speed |
|------|------------------|----------------|---------------|
| **Full** | All data | Fast (one set) | Slow + big |
| **Incremental** | Changes since *last backup of any type* | Slow (full + every incremental) | Fast + small |
| **Differential** | Changes since *last full backup* | Medium (full + last diff) | Medium |
| **Synthetic full** | Server combines a full + incrementals into a fresh full | Fast | Done offline |
| **Snapshot** | Point-in-time (VM, ZFS, BTRFS, APFS) | Very fast | Very fast |

### The 3-2-1 backup rule (memorize)

- **3** total copies of data
- on **2** different media types (local disk + cloud, or disk + tape)
- with **1** copy **off-site** (cloud, physically removed, or in a different building)

Modern variant: **3-2-1-1-0**
- 3 copies
- 2 media types
- 1 off-site
- **1 air-gapped or immutable** (ransomware can't reach it)
- **0** errors (test the restores)

### Backup media

| Medium | Cost | Speed | Capacity | Lifetime |
|--------|------|-------|----------|----------|
| **Disk (HDD/SSD)** | Mid | Fast | TBs–PBs | 5–10 yrs |
| **Tape (LTO-9)** | Low/GB | Slow | 18 TB native | 30+ yrs |
| **Cloud (S3, Azure, GCS)** | Pay-per-use | Network-bound | Unlimited | Provider durable |
| **Optical (M-Disc)** | Mid | Slow | 100 GB | 1000-yr claim |
| **NAS / SAN** | Mid | Fast | Many TBs | 5–10 yrs |

### Recovery objectives

- **RPO (Recovery Point Objective)**, maximum acceptable data loss. "We backup nightly" = 24-hour RPO.
- **RTO (Recovery Time Objective)**, maximum acceptable downtime. "Restore from tape" = 4–24 hr RTO; "Hot standby site" = minutes.
- **MTBF (Mean Time Between Failures)**, average lifetime of a component
- **MTTR (Mean Time To Recovery / Repair)**, how long to fix when it breaks

🎯 **Exam pattern:** *"Business requires RPO of 1 hour"* → backup every hour. *"RTO of 5 minutes"* → hot site / clustered failover.

---

## 🏔️ Disaster Recovery Site Types

| Site type | Description | Setup time | Cost | RTO |
|-----------|-------------|------------|------|-----|
| **Hot site** | Fully running duplicate, real-time data sync | Minutes | Highest | Minutes |
| **Warm site** | Hardware ready, data needs sync from backup | Hours | High | Hours |
| **Cold site** | Empty space; hardware delivered after disaster | Days | Lowest | Days |

### Cloud DR variants

- **Pilot light**, minimal core infra running in cloud; scale up on DR event
- **Warm standby**, scaled-down full environment in cloud
- **Multi-site active-active**, full traffic split, instant failover

### BCP vs DR

- **Business Continuity Plan (BCP)**, keep the business operating during disruption (broader; includes people, premises, IT)
- **Disaster Recovery (DR)**, restore IT systems specifically (subset of BCP)
- BCP includes manual workarounds if IT is down

---

## 🧪 Test Your Backups (the #1 lesson)

Untested backups are *unknown-good* backups. Many orgs find they can't restore until they try.

### Testing types

1. **Tabletop exercise**, discussion-only walkthrough of a scenario
2. **Walkthrough**, physically step through procedures (don't actually restore)
3. **Partial restore test**, restore a sample file or VM to a sandbox
4. **Full DR drill**, simulate disaster, restore the production-grade environment to a DR location
5. **Parallel run**, run DR site alongside production for a period

Best practice: **at least one tabletop per year + one partial restore per quarter + one full drill annually**.

---

## 🛡️ Ransomware-Resilient Backups

| Feature | Why |
|---------|-----|
| **Immutable storage** | Backup cannot be modified or deleted for retention period (S3 Object Lock, Azure Blob Immutable) |
| **Air-gapped** | Physically disconnected (tape rotated to vault) |
| **MFA-delete** | Removing requires hardware-token confirmation |
| **Versioning** | Multiple historical versions retained |
| **Separate auth domain** | Backup admin credentials NOT in production AD |

Modern ransomware specifically targets backups. The 2024 trend: attackers spend days inside the network deleting backups before encrypting production. **Test that your backups are not reachable from a compromised admin account.**

---

## 🔬 Scenario Walkthrough (PBQ-style thinking)

> **Scenario:** A small accounting firm has a Veeam backup appliance in their server room and replicates nightly to a Backblaze B2 cloud bucket. Their RPO is 24 hours; RTO is 8 hours. On Monday at 6 a.m. they discover ransomware encrypted the production file server overnight. The Veeam appliance was also encrypted (it was accessible from the file server's admin account).

**Walkthrough:**
1. **Identify**, Ransomware on file server. Local backup compromised. Cloud backup status unknown.
2. **Theory**, Cloud B2 with versioning enabled should be intact. Restore from there.
3. **Test**, Log into B2 console. Verify versions of the latest backup file exist before the infection timestamp. Confirm bucket-level Object Lock is enabled.
4. **Plan**
   - Wipe file server hard drives
   - Reinstall OS clean
   - Restore most recent pre-infection backup from B2
   - Rebuild Veeam appliance separately (and put it in a separate auth domain this time!)
   - Validate restored data
5. **Verify**, Sample 10 random files, open them, confirm checksums match. User acceptance test.
6. **Document**, Full incident report. Lessons learned: (a) backup server must use separate credentials, (b) immutability must be ON on local backups too, (c) consider air-gapped tape.

This is the modern ransomware reality, local backups are the *first target*. Without cloud immutability, this firm would be paying ransom or going out of business.

---

## ⚠️ Exam Traps & Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "RAID is backup" | NO. RAID is redundancy against hardware failure. Backup is recovery from ransomware, mistake, fire. |
| "Cloud backup is automatic and infallible" | Cloud backup needs configuration, testing, monitoring like any backup. |
| "If I never test, it's still backed up" | Untested backups are unknown-good. Test quarterly minimum. |
| "Incremental backup is always best" | Slow restore. Differential = compromise. Synthetic full = modern best of both. |
| "Hot site = warm site = cold site" | NO, minutes / hours / days RTO respectively. |
| "BCP and DR are the same" | BCP is broader (whole business); DR is IT-specific subset. |
| "Documentation slows down work" | Documentation prevents the same work being done twice (or wrong). |
| "Backup admin can use the same AD account as the file admin" | If file admin is compromised, backups go too. Separate auth domain. |

---

## 🎓 Key Terms To Know (Add to Flashcards!)

| Term | Definition |
|------|------------|
| **RPO / RTO** | Recovery Point / Time Objective |
| **MTBF / MTTR** | Mean Time Between Failures / To Repair |
| **Full / Incremental / Differential** | Backup types |
| **3-2-1 rule** | 3 copies, 2 media, 1 off-site |
| **3-2-1-1-0** | Modern variant adding immutable + tested |
| **Hot / Warm / Cold site** | DR site types by RTO |
| **BCP / DR** | Business Continuity Plan / Disaster Recovery |
| **Tabletop exercise** | Discussion-based DR test |
| **Immutable storage** | Backup that cannot be modified/deleted for retention |
| **Air-gapped** | Physically disconnected backup |
| **Veeam / Acronis / Commvault** | Backup software vendors |
| **S3 Object Lock** | AWS immutable storage feature |
| **KB / Runbook / SOP** | Documentation types (recap) |
| **Ticket lifecycle** | New → Assigned → In Progress → Resolved → Closed |

### Acronyms cheat-row (Module 12)
| Acronym | Meaning |
|---------|---------|
| BCP | Business Continuity Plan |
| DR | Disaster Recovery |
| RPO | Recovery Point Objective |
| RTO | Recovery Time Objective |
| MTBF | Mean Time Between Failures |
| MTTR | Mean Time To Recovery / Repair |
| SLA | Service Level Agreement |
| OLA | Operational Level Agreement |
| KPI | Key Performance Indicator |
| KB | Knowledge Base |
| SOP | Standard Operating Procedure |
| RFC | Request For Change |
| CAB | Change Advisory Board |
| LTO | Linear Tape-Open |
| WORM | Write Once Read Many (immutable) |

---

## 📊 Case Study, The Maersk NotPetya Wipeout (2017)

**Situation.** On June 27, 2017, the **NotPetya** wiper malware masquerading as ransomware, originating from a compromised Ukrainian tax-software update (ME-Doc) spread globally in hours. A.P. Møller-Maersk, the world's largest container shipping company, was hit hard. Within 7 minutes of the first infected machine connecting to Maersk's global network, **45,000 Windows PCs and 4,000 servers** were destroyed worldwide. Active Directory domain controllers across 130 countries gone. Every Maersk port terminal globally gone dark.

**The DR detail.** Maersk's backups existed but were *connected to Active Directory for authentication*. With AD destroyed, Maersk couldn't restore *anything*, the backup servers themselves needed AD to be reachable. They had no air-gapped or domain-independent backup of the AD forest itself.

Maersk's saving grace: **a single domain controller in Lagos, Nigeria** had been offline due to a regional power outage during the attack. That one DC, restored physically to HQ Copenhagen, contained the seed needed to rebuild the entire AD forest. Without that lucky power outage, Maersk would have lost everything.

**Decision and outcome.** Maersk took **10 days** to restore terminal operations (using manual workarounds paper, phone in between). Estimated cost: **$250–300M**. Maersk's response: rebuilt every domain controller, deployed segmented backups in cloud (Azure), implemented air-gapped backups of critical AD forest, partnered with [Microsoft Detection and Response Team (DART)](https://www.microsoft.com/en-us/security/blog/2019/03/27/dart-the-microsoft-incident-response-team/) for incident-response retainer.

**Lesson for the exam / for practitioners.**
- **Backups must survive the disaster they protect against.** If your backups need your production environment to restore, they're not backups, they're optimism.
- **Active Directory itself needs a recovery strategy.** AD forest recovery is its own discipline; assume it'll happen.
- **DR plans must consider scenarios where "everything" is gone.** The Maersk case is the modern worst-case.

**Discussion (Socratic).**
- **Q1:** A 150-person law firm runs Microsoft 365 plus an on-prem file server and a domain controller. Design their backup strategy to be NotPetya-resilient. Budget = $25K/year. Defend each line item.
- **Q2:** Maersk was lucky a Lagos DC was offline by accident. Engineer a *deliberate* version of that luck: how do you build "scheduled offline rotation" of a DC into a production environment?
- **Q3:** Cyber insurance pays for many recovery costs, but premiums are climbing. Is insurance a substitute for DR planning, complement, or distraction? Argue both.

---

## ✅ Module 12 Summary

You now know:

- 🎫 Ticket lifecycle, severity matrix, SLAs
- 📖 KB / Runbook / SOP best practices
- 🗂️ Asset lifecycle + secure disposal
- 🔄 Change-management deep dive + backout planning
- 💾 Backup types + the 3-2-1 (and 3-2-1-1-0) rule
- 📍 RPO / RTO + MTBF / MTTR
- 🏔️ Hot / Warm / Cold DR sites + cloud DR variants
- 🛡️ Ransomware-resilient backups: immutable, air-gapped, MFA-delete
- 🧪 Backup testing, tabletop, partial, full drill

**Next steps:**
1. 🎥 [Videos.md](./Videos.md)
2. ✏️ [Quiz.md](./Quiz.md)
3. 📋 [Cheat-Sheet.md](./Cheat-Sheet.md)
4. 🧪 Take **Practice Exam 2** in the [Practice-Exams/](../Practice-Exams/Practice-Exam-2.md) folder
5. 🏆 When ready: **[Final Mock Exam](../Practice-Exams/Final-Mock-Exam.md)**, 90 questions, 90 minutes, real format

> **Where this leads.**
> - You've now covered the entire A+ syllabus.
> - **Next certifications:** Network+ (course 22) deepens networking; Security+ (course 09) deepens security; Server+ (course 24) deepens hardware/storage; Linux+ (course 23) deepens OS.

---

## 📚 Further Reading (Optional)

**Primary sources:**
- 📄 NIST SP 800-34 Rev 1, Contingency Planning Guide for Federal Information Systems
- 📄 NIST SP 800-184, Guide for Cybersecurity Event Recovery
- 📄 ISO/IEC 22301:2019, Business continuity management systems
- 📄 ITIL 4, Service management practices

**Case-study sources:**
- 📄 Andy Greenberg, *Sandworm* (Doubleday, 2019), definitive book on NotPetya & Maersk
- 📄 [Maersk CISO Adam Banks, RSAC 2018 keynote](https://www.rsaconference.com/), first-hand recovery story

**Practitioner / exam:**
- 📖 [Professor Messer 220-1102 final review](https://www.professormesser.com/free-a-plus-training/220-1102/220-1102-video-training-course/)
- 📖 Veeam, Acronis, Commvault, vendor docs on backup best practices
- 📖 *The DevOps Handbook*, modern operational excellence
