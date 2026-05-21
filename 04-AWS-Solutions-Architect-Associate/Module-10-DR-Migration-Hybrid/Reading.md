# Module 10: Disaster Recovery, Migration & Hybrid ⛑️

> **Why this module matters:** DR strategy questions hide easy points if you know the 4-tier ladder cold. Migration services (DMS, Application Migration Service, Snow family, Storage Gateway, DataSync) get 4–6 questions and they're all "right tool for the right job" — easy if you know the table. This is the final module before the mocks.

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

## 📚 Further Reading

- 📖 **[Disaster Recovery on AWS Whitepaper](https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-workloads-on-aws.html)**
- 📖 **[AWS Backup](https://docs.aws.amazon.com/aws-backup/)**
- 📖 **[Database Migration Service](https://docs.aws.amazon.com/dms/)**
- 📖 **[Application Migration Service](https://docs.aws.amazon.com/mgn/)**
- 📖 **[Snow Family](https://docs.aws.amazon.com/snowball/)**
- 📖 **[Storage Gateway](https://docs.aws.amazon.com/storagegateway/)**
- 📖 **[AWS DataSync](https://docs.aws.amazon.com/datasync/)**
