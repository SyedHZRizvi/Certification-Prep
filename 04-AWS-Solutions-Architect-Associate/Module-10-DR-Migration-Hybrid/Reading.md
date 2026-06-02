# Module 10: Disaster Recovery, Migration & Hybrid ⛑️

> **Why this module matters:** DR strategy questions hide easy points if you know the 4-tier ladder cold. Migration services (DMS, Application Migration Service, Snow family, Storage Gateway, DataSync) get 4–6 questions and they're all "right tool for the right job" — easy if you know the table. This is the final module before the mocks.

> **Prerequisites for this module.**
> - All prior modules — DR is the culmination
> - [Module 1](../Module-01-Foundations-Well-Architected/Reading.md) — Reliability pillar
> - [Module 6](../Module-06-Databases/Reading.md) — Aurora Global, DynamoDB Global Tables, RDS cross-region
> - [Module 8](../Module-08-Caching-CDN-Edge/Reading.md) — Route 53 routing policies for failover
> - Conceptual familiarity with **RPO / RTO / MTTR** — covered in any business continuity textbook; the ISO 22301 standard is the formal reference
> - Understanding of homogeneous vs heterogeneous database migration (you'll see DMS + SCT pair)

---

## 🚒 A Story: The Fire Drill At Two Banks

Two banks share a city block. They both have HQs in old buildings.

Bank A's "disaster plan" is a binder titled "Call IT support." When the building burns down, they're closed for 3 weeks. Customers leave.

Bank B has a hot standby data center across town. Every transaction is mirrored in real time. When the fire hits, branches keep operating; the slowest customer notices a few seconds of slowness. They lose zero customers.

The difference is **DR strategy + practice**. The same applies to cloud workloads. SAA-C03 expects you to know the 4 tiers AWS officially defines (with the catchy names).

---

## 🛡️ The 4 DR Strategies — MEMORIZE The Tiers

Ordered cheapest → most expensive (and worst RPO/RTO → best):

| Strategy | RPO | RTO | Cost | Description |
|----------|-----|-----|------|-------------|
| **Backup & Restore** | Hours | Hours | $ | Just back up to S3/Glacier; rebuild infra from IaC on disaster |
| **Pilot Light** | Minutes | 10s of minutes | $$ | Core data already replicated; minimal compute on standby (e.g., DB running, app servers off) |
| **Warm Standby** | Seconds–minutes | Minutes | $$$ | Scaled-down full stack always running; scale up on failover |
| **Multi-Site Active-Active** | Near zero | Near zero | $$$$ | Both regions serving traffic; failover is just removing one from rotation |

🧠 **Memory hook:** **"Backup, Pilot, Warm, Multi"** — getting hotter and pricier.

### Concrete AWS implementations

| Strategy | Common AWS pattern |
|----------|---------------------|
| Backup & Restore | EBS snapshots cross-region, AMI copy, RDS snapshot copy, S3 CRR, AWS Backup |
| Pilot Light | Aurora Global Database (secondary region read-only), Lambda deployed but cold, ASG min=0 |
| Warm Standby | ASG min=1 in DR region, Aurora replica, Route 53 health check failover |
| Active-Active | DynamoDB Global Tables, Aurora Global write forwarding, Route 53 latency routing, Global Accelerator |

🎯 **Exam pattern:**
- "RTO/RPO < 1 minute, near zero data loss" → **Multi-Site Active-Active**.
- "Cheapest DR for non-critical workload" → **Backup & Restore**.
- "Standby DB always running, app servers off" → **Pilot Light**.
- "Smaller fleet always running in DR region, scaled up on failover" → **Warm Standby**.

---

## 🔁 AWS Backup

Centralized backup service that supports EBS, EC2 AMI, RDS, Aurora, DynamoDB, EFS, FSx, Storage Gateway, S3 (preview-graduating), and more.

- **Backup plans** (frequency, retention, lifecycle to cold storage)
- **Backup vaults** with vault lock (WORM for backups)
- **Cross-region copy** for DR
- **Cross-account copy** for ransomware isolation
- **Audit reports** for compliance

🎯 **Exam pattern:** "Centralize backups across many services with one policy" → **AWS Backup**.

---

## 🚚 Migration Services — Pick The Right Tool

### Online vs Offline Data Transfer

| Service | Mode | Throughput / Capacity | Use |
|---------|------|----------------------|-----|
| **AWS DataSync** | Online (encrypted) | Up to 10 Gbps; tens of TB/day | NFS/SMB/HDFS → S3, EFS, FSx, Object storage |
| **Storage Gateway** | Online (hybrid persistence) | Throughput depends | Bridge on-prem to AWS storage |
| **AWS Direct Connect** | Online | 1/10/100 Gbps | Dedicated link |
| **Snowcone** | Offline | 8 TB usable | Edge / 1–2 person field |
| **Snowball Edge Storage Optimized** | Offline | 80 TB | Bulk transfer up to PBs |
| **Snowball Edge Compute Optimized** | Offline | 42 TB + compute | Edge processing |
| **Snowmobile** | Offline | 100 PB per truck | Exabyte scale |

🎯 **Decision rule of thumb:** If transfer would take longer over the internet than physically shipping a Snow device — ship it. Math: 100 TB over 1 Gbps takes ~10 days. A Snowball comes in ~1 week.

### Storage Gateway Variants

| Variant | What |
|---------|------|
| **S3 File Gateway** | NFS/SMB front-end → stores files as S3 objects |
| **FSx File Gateway** | SMB front-end → caches files from FSx for Windows |
| **Volume Gateway** | iSCSI → backed by S3 (Cached vol = primary in S3 with local cache; Stored vol = primary on-prem with EBS snapshot backup) |
| **Tape Gateway** | iSCSI VTL (Virtual Tape Library) → S3 + Glacier replaces physical tape |

🎯 **Exam pattern:**
- "Replace physical tape backup library" → **Tape Gateway**.
- "Mount AWS as a local NFS share for archival" → **S3 File Gateway**.
- "iSCSI volumes backed by S3 with low-latency local access" → **Volume Gateway (Cached)**.

---

## 🛢️ AWS Database Migration Service (DMS)

Migrate databases with minimal downtime. Source = on-prem or AWS; target = AWS database.

| Concept | What |
|---------|------|
| **Replication Instance** | EC2 in your VPC that runs the migration |
| **Source / Target endpoints** | The DBs |
| **Tasks** | Full load + change data capture (CDC) for ongoing replication |
| **AWS Schema Conversion Tool (SCT)** | Converts schema between different engines (e.g., Oracle → PostgreSQL) |

Supports homogeneous (Oracle→Oracle) and heterogeneous (Oracle→Aurora-PG) migrations.

🎯 **Exam pattern:**
- "Migrate on-prem Oracle to Aurora PostgreSQL with minimal downtime" → **DMS + SCT**.
- "Continuous replication from prod to a read replica/another region" → **DMS with CDC**.

---

## 💻 AWS Application Migration Service (MGN)

The successor to "Server Migration Service / CloudEndure Migration." Replicates source servers (physical, VM, or cloud) block-by-block into AWS. Lift-and-shift entire VMs to EC2 with minimal downtime.

🎯 **Exam pattern:** "Lift-and-shift hundreds of VMs from VMware to EC2" → **MGN (Application Migration Service)**.

### Related migration tooling

| Service | What |
|---------|------|
| **AWS Migration Hub** | Dashboard tracking all migrations |
| **AWS Application Discovery Service** | Inventories on-prem servers + dependencies |
| **AWS App2Container** | Containerize Java/.NET apps to ECS/EKS |
| **AWS Mainframe Modernization** | Migrate mainframe apps |
| **AWS Transfer Family** | Managed SFTP/FTPS/FTP into S3/EFS |

---

## 🌉 Hybrid Architectures — On-Prem ↔ AWS

| Pattern | Use |
|---------|-----|
| **Direct Connect** | Private fiber to AWS (1/10/100 Gbps) |
| **Site-to-Site VPN** | IPSec tunnel over internet (quick to set up, backup for DX) |
| **AWS Outposts** | AWS-managed rack in your DC; consume AWS services locally |
| **AWS Local Zones / Wavelength** | Compute in metro / 5G edge close to users |
| **Storage Gateway** | Local file/iSCSI/tape backed by AWS |
| **DataSync** | Bulk file/object data sync |
| **Direct Connect Gateway** | One DX → many VPCs across regions |

🎯 **Exam pattern:**
- "Run AWS services on-prem for low-latency local workloads" → **Outposts**.
- "Ultra-low latency for users on 5G mobile" → **Wavelength**.
- "Move 500 TB to AWS, network too slow" → **Snowball Edge**.
- "Hourly NFS sync from on-prem to S3" → **DataSync**.

---

## 🧰 Putting It Together — Sample DR Architecture

### Warm Standby DR for a 3-tier web app

```
PRIMARY: us-east-1                            STANDBY (warm): us-west-2
 ├── ALB → ASG (10 instances)                 ├── ALB → ASG (min=1)
 ├── Aurora Global Database (writer)          ├── Aurora Global (reader, fast promote)
 ├── ElastiCache Redis                        ├── ElastiCache Redis (warm)
 └── S3 with CRR ────────────────────────────►└── S3 replica

Route 53 — Failover routing
  PRIMARY  → us-east-1 ALB (health check)
  SECONDARY → us-west-2 ALB

On failover:
  1. Promote Aurora Global reader → writer in us-west-2
  2. Scale ASG up to production size
  3. Route 53 fails over automatically
RPO: seconds, RTO: ~5 minutes
```

---

## ⚠️ Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "Multi-AZ alone is DR" | Multi-AZ handles AZ failure, not regional disaster. |
| "Active-active is always best" | Most expensive; only when business demands near-zero RTO/RPO. |
| "Snowball is faster than the internet for any size" | Only when network is the bottleneck. A few TB over 10 Gbps DX is faster than waiting for a Snowball. |
| "DMS does schema conversion" | NO — DMS migrates data. **SCT** converts schemas. They pair. |
| "Storage Gateway replaces S3" | NO — it's a bridge. Data still lands in S3. |
| "Outposts means AWS owns my data center" | NO — you host the rack; AWS manages it remotely. |
| "Application Migration Service requires you to refactor apps" | NO — block-level replication, lift-and-shift. |

---

## 🚨 Exam Traps

1. **Cheapest DR for non-critical workload** → Backup & Restore.
2. **RPO/RTO < 1 minute** → Multi-site active-active (or warm standby on the cusp).
3. **Lift-and-shift VMs** → Application Migration Service (MGN).
4. **Heterogeneous DB migration** → DMS + SCT.
5. **Replace tape library** → Tape Gateway.
6. **Bulk offline transfer (PBs)** → Snow family (Snowball for TBs, Snowmobile for PBs).
7. **Hourly file sync on-prem ↔ S3** → DataSync.
8. **Run AWS services on customer hardware** → Outposts.
9. **DR with continuous replication and quick failover** → Aurora Global Database / DynamoDB Global Tables + Route 53 failover.

---

## 🎓 Key Terms To Know

| Term | Definition |
|------|------------|
| **RPO** | Max acceptable data loss (in time) |
| **RTO** | Max acceptable downtime |
| **Backup & Restore** | Cheapest DR — backups in another region |
| **Pilot Light** | Core data live, compute minimal |
| **Warm Standby** | Scaled-down live stack always running |
| **Multi-Site Active-Active** | Both regions live |
| **AWS Backup** | Centralized backup service |
| **DataSync** | Online file/object sync |
| **Snowball Edge / Snowmobile** | Offline bulk transfer |
| **Storage Gateway** | Hybrid storage bridge |
| **DMS** | Database Migration Service (data) |
| **SCT** | Schema Conversion Tool (schema) |
| **MGN / Application Migration Service** | Lift-and-shift servers/VMs |
| **Outposts / Local Zone / Wavelength** | AWS infrastructure outside main regions |
| **Direct Connect Gateway** | Connect one DX to multiple VPCs |

---

## ✅ Module 10 Summary

You now know:

- 🛡️ The 4 DR strategies (Backup&Restore → Pilot Light → Warm Standby → Multi-Site)
- 🔁 AWS Backup for centralized policy
- 🚚 Snow family + DataSync + Storage Gateway for migrations
- 🛢️ DMS + SCT for database migration
- 💻 Application Migration Service (MGN) for lift-and-shift
- 🌉 Hybrid: Outposts, Local Zones, Wavelength
- 🚨 9 most-tested DR/migration exam traps

**Next steps:**
1. 🎥 [`Videos.md`](./Videos.md)
2. ✏️ [`Quiz.md`](./Quiz.md)
3. 📋 [`Cheat-Sheet.md`](./Cheat-Sheet.md)
4. 🧪 **Take [Practice Exam 2](../Practice-Exams/Practice-Exam-2.md)** — all modules now done!
5. 🏆 Then [Final Mock Exam](../Practice-Exams/Final-Mock-Exam.md) when you're scoring 80%+ on Exam 2.

---

## 📖 Case Study — Sony PlayStation Network's 23-Day Outage (April–May 2011)

**Situation.** On **April 20, 2011**, Sony Computer Entertainment's PlayStation Network (PSN) — then 77 million accounts — was breached by attackers who exploited an outdated Apache web server with known vulnerabilities. Personal data (names, addresses, birth dates, login credentials, and an unknown number of credit-card numbers) was stolen. Sony took PSN entirely offline for forensic investigation and remediation. The network was off for **23 days** (offline April 20 – partial restore May 14, full restore by end of May). Estimated direct cost: **$171M** in 2011, per Sony's own Q1 FY2012 earnings release. The class-action settlement (Sony Gamers Class Action, 2014) added another $15M. Total reputation and customer-trust impact was widely estimated at >$1B in lifetime customer value.

**Decision — what failed:**

1. **No DR plan that included "we are breached."** Sony's continuity plan covered *infrastructure failure*, not *security compromise*. Their DR runbook said "fail over to the secondary site" — but the secondary site was *also* compromised by the same intrusion
2. **The standby site was logically connected to production** — not isolated. Attackers had access to both
3. **Backups had not been tested for restorability** — when Sony needed to restore from clean backups, the restoration took weeks of manual work
4. **No "immutable" backup tier** — the equivalent of S3 Object Lock didn't exist in 2011 in their stack; backups *could* have been tampered with
5. **No segmentation** between gaming and identity / billing data — a compromise of the gaming front-end gave attackers paths into customer credit data
6. **No GuardDuty-equivalent anomaly detection** — the intrusion went undetected for an unknown but multi-day period before Sony noticed
7. **No multi-region active-active** — the network was effectively single-site

**Outcome.** PSN's 23-day outage became the canonical "your DR plan must include security" case in enterprise architecture circles. Sony rebuilt with:

- Multi-region active-active topology
- Hardware-isolated backup vaults (AWS would later commercialize this with Backup vault lock and cross-account vault copy)
- WAF, intrusion detection, and behavioral anomaly monitoring (equivalents of WAF + GuardDuty + Inspector + Macie)
- Per-tier network segmentation (the modern AWS equivalent: separate VPCs / accounts per environment, SCPs to enforce)
- Mandatory quarterly DR Game Days

**Lesson for the exam / for practitioners.** Sony PSN is *why* the SAA-C03 exam includes questions like:

- "Records must be **immutable** for 7 years, no one (including root) can delete" → **S3 Object Lock in Compliance mode**
- "Backups must survive a compromise of the source account" → **AWS Backup with cross-account vault copy**
- "Detect unusual API activity automatically" → **GuardDuty**
- "Encrypt backups at rest with a separate KMS key" → **AWS Backup with customer-managed KMS keys**
- "Continuous compliance check that backups exist" → **AWS Config rules**

The 4-tier DR ladder (Backup&Restore → Pilot Light → Warm Standby → Multi-Site Active-Active) only protects against **infrastructure failure**. Sony's lesson is that you must layer on:

- **Immutable backups** (Object Lock, vault lock) — survives ransomware / insider attacks
- **Cross-account isolation** for backups — survives account compromise
- **GuardDuty / Macie / Inspector** — detects the threat before you need DR
- **Multi-region** — survives regional service failure *and* regional security incident

When the SAA exam asks "company suffered ransomware that encrypted production data; which architecture would have allowed full recovery?" the chain is **S3 Object Lock + cross-account AWS Backup + KMS with separate key + multi-region** — all backed by **GuardDuty + Security Hub** for detection.

**Discussion (Socratic).**
- **Q1.** Sony's DR plan covered *infrastructure failure* but not *security breach*. The exam tests both kinds of resilience. Argue: should DR (RTO/RPO) and security incident response be the same plan, or separate plans?
- **Q2.** S3 Object Lock in Compliance mode prevents even root from deleting. This is exactly what you want against ransomware. But it's also a 7-year operational commitment that's impossible to back out of. Where should the *authority* to enable Compliance-mode locks live in an organization?
- **Q3.** Sony's secondary site was logically connected to production and got compromised too. The fix is to make backups *air-gapped or cross-account*. What's the trade-off between strict isolation (slow restore) and easy access (vulnerable backups)?

---

## 💬 Discussion — Socratic Prompts

1. **Backup & Restore vs Pilot Light — break-even.** Pilot Light costs more (DB running in DR) but recovers faster. For a workload with RTO of 4 hours and 200 GB of data, build the cost-vs-RTO comparison.
2. **DMS + SCT for heterogeneous migration.** SCT converts 70–90% of schemas automatically; the rest is manual. At what schema complexity does the manual conversion overhead make DMS+SCT a *worse* answer than rewriting the app?
3. **Snowball Edge vs DataSync over 10 Gbps Direct Connect.** Both can move 100 TB. DX is faster *once provisioned* (weeks); Snowball is offline (days end-to-end). Build the decision tree.
4. **AWS Outposts vs full repatriation.** Outposts is "AWS in your data center." If you'd repatriate anyway, why Outposts vs. just running your own infrastructure? Where does the AWS API consistency pay for itself?
5. **Multi-Site active-active for SaaS — is it worth it?** Most SaaS apps run active-passive. Active-active triples the infrastructure cost (and operational complexity). What kind of business / SLA / customer commitment justifies it?

---

## ➡️ Where This Leads

> **Where this leads.**
> - **Inside this course:** The **Capstone Project** at the course root pulls everything together. You're designing a full migration with DR built in. Practice Exam 2 has 8 DR/migration questions; Final Mock has 10.
> - **Cross-course:** `02-PMP` Module 10 covers risk management and BCM at the project level. `09-CompTIA-Security-Plus` Module 10 covers incident response and BCDR at the security level. The intersection — security-aware DR — is exactly this module.
> - **Real world:** Run an actual **Game Day** in a personal AWS account: simulate an AZ outage by terminating instances in one AZ via Fault Injection Service. Confirm Route 53 failover and ASG replacement.

---

## 📚 Further Sources (This Module)

**AWS official**
- 📖 **Disaster Recovery on AWS Whitepaper** — `docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/`
- 📖 **AWS Backup** — `docs.aws.amazon.com/aws-backup/`
- 📖 **Database Migration Service** — `docs.aws.amazon.com/dms/`
- 📖 **Application Migration Service (MGN)** — `docs.aws.amazon.com/mgn/`
- 📖 **Snow Family** — `docs.aws.amazon.com/snowball/`
- 📖 **Storage Gateway** — `docs.aws.amazon.com/storagegateway/`
- 📖 **AWS DataSync** — `docs.aws.amazon.com/datasync/`
- 📖 **AWS Fault Injection Service** — for Game Day automation; `docs.aws.amazon.com/fis/`

**re:Invent talks**
- 🎤 **ARC301 (2023): *Resilience patterns at AWS scale***
- 🎤 **ARC404 (2023): *Multi-region active-active and the trade-offs***
- 🎤 **STG315 (2023): *AWS Backup deep dive***
- 🎤 **NET407 (2024): *Direct Connect at scale and hybrid networking***

**Academic foundations**
- 📖 **ISO 22301:2019.** *Business Continuity Management Systems — Requirements.* The international standard for BCM; available through ISO and national standards bodies. The source of the formal RPO/RTO/MTTR definitions.
- 📖 **NIST SP 800-34 Rev 1 (2010).** *Contingency Planning Guide for Federal Information Systems.* Free PDF — the U.S. government's canonical DR/BCM framework, mirrored in many private-sector standards.

**Industry / incident references**
- 📄 **U.S. House of Representatives hearing (June 2011).** *"The Threat of Data Theft to American Consumers"* — formal Congressional testimony on the Sony PSN breach.
- 📰 **Krebs on Security archive** — multi-part deep-dive on Sony PSN and subsequent industry response.
- 📰 **Werner Vogels — *"Recovery Time and Recovery Point Objectives: Plan, Don't React"*** — AWS CTO blog post that frames the 4-tier DR ladder.

**Books**
- 📖 **Kim, Behr, Spafford (2013).** *The Phoenix Project.* IT Revolution Press. Novelized but pedagogically rigorous; chapter 35 on DR is required reading.
- 📖 **Limoncelli, Hogan, Chalup (2014).** *The Practice of Cloud System Administration.* Addison-Wesley. The canonical operational reference for hybrid environments.
