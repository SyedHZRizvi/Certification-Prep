# 📋 Module 10 Cheat Sheet: DR, Migration & Hybrid

> One page. Print it. Tape to your monitor.

---

## ⛑️ The 4 DR Strategies

| Strategy | RPO | RTO | Cost | What's Running In DR Region |
|----------|-----|-----|------|-----------------------------|
| **Backup & Restore** | Hours | Hours | $ | Nothing — backups only |
| **Pilot Light** | Minutes | 10s of min | $$ | Core data + DB; compute off |
| **Warm Standby** | Sec–min | Minutes | $$$ | Scaled-down full stack always running |
| **Multi-Site Active-Active** | Near 0 | Near 0 | $$$$ | Both regions live and serving |

🧠 **"Backup, Pilot, Warm, Multi"** — hotter & pricier going down.

---

## 🚚 Migration Service Decision Table

| Need | Pick |
|------|------|
| Migrate DBs with minimal downtime | **DMS + SCT** |
| Lift-and-shift VMs to EC2 | **Application Migration Service (MGN)** |
| Inventory on-prem servers + deps | **Application Discovery Service** |
| Bulk offline transfer (TB-PB) | **Snowball Edge / Snowmobile** |
| Online file/object sync | **DataSync** |
| Replace physical tape library | **Tape Gateway (VTL)** |
| iSCSI volumes backed by S3 | **Volume Gateway** |
| NFS/SMB → S3 archive | **File Gateway** |
| Managed SFTP/FTPS → S3 | **AWS Transfer Family** |
| Containerize Java/.NET app | **App2Container** |
| Centralized cross-service backup | **AWS Backup** |

---

## 🌉 Hybrid Choices

| Need | Pick |
|------|------|
| Run AWS services in your DC | **Outposts** |
| Low latency to metro outside region | **Local Zone** |
| 5G mobile edge | **Wavelength** |
| Private fiber, lowest latency | **Direct Connect** |
| Quick IPSec from on-prem | **Site-to-Site VPN** |
| One DX → many VPCs | **DX Gateway** |

---

## 🌍 Cross-Region Replication Quick

| Source | Cross-region option |
|--------|---------------------|
| S3 | CRR |
| RDS | Snapshot copy / Read Replica in another region |
| Aurora | Aurora Global Database (<1s) |
| DynamoDB | Global Tables (multi-active) |
| EBS | Snapshot copy cross-region |
| AWS Backup | Cross-region vault copy |
| KMS | Multi-region keys |

---

## 🏆 Exam Power Phrases

✅ Usually right:
- "Aurora Global Database for cross-region RPO<1s"
- "DynamoDB Global Tables for multi-active NoSQL"
- "Route 53 failover for active-passive DR"
- "Snowball Edge for bulk offline transfer"
- "DMS + SCT for heterogeneous DB migration"
- "MGN for lift-and-shift VMs"
- "AWS Backup for centralized policy across services"

❌ Usually wrong:
- "Multi-AZ alone is regional DR"
- "Active-active is always best"
- "Just use FTP" (use Transfer Family)
- "DMS converts schemas" (no — SCT does)
- "Outposts is owned by AWS in their DC" (no — yours)

---

## ⚠️ Anti-Patterns

- ❌ Untested DR plan (always run Game Days)
- ❌ Active-active for cost-sensitive non-critical workloads
- ❌ Single-region for compliance-critical app
- ❌ Online transfer of PBs when Snowmobile would be faster
- ❌ Backups in same region/account as production (ransomware risk)

---

## ✏️ Quick Self-Check

1. 4 DR tiers from cheap → expensive? ___
2. DMS vs SCT? ___
3. Snowball vs DataSync? ___
4. Storage Gateway 3 variants? ___
5. Outposts vs Local Zones? ___

---

➡️ Take [Practice Exam 2](../Practice-Exams/Practice-Exam-2.md), then [Final Mock Exam](../Practice-Exams/Final-Mock-Exam.md).
