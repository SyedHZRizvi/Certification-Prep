# ✏️ Module 10 Quiz: DR, Migration & Hybrid

> **Instructions:** 24 questions, ~30 min. Target 20/24.

---

## Questions

### Q1. The cheapest DR strategy on AWS, with RTO measured in HOURS:
A. Backup & Restore
B. Pilot Light
C. Warm Standby
D. Multi-Site Active-Active

---

### Q2. A workload requires RPO and RTO of seconds. The BEST DR strategy is:
A. Backup & Restore
B. Pilot Light
C. Warm Standby
D. Multi-Site Active-Active

---

### Q3. In Pilot Light DR, what's typically running in the standby region?
A. Full production-sized stack
B. Nothing
C. Core data + DB replicating; application compute is OFF or minimal
D. Same as production with traffic

---

### Q4. To migrate an on-prem Oracle database to Aurora PostgreSQL with minimal downtime, use:
A. DMS + Schema Conversion Tool (SCT)
B. Snowball only
C. AWS Backup
D. Storage Gateway

---

### Q5. To lift-and-shift hundreds of VMware VMs to EC2:
A. AWS Application Migration Service (MGN)
B. AWS Backup
C. Snowball Edge
D. CloudFront

---

### Q6. 500 TB of data to move to AWS. The on-prem internet link is 100 Mbps. The BEST option is:
A. DataSync over the internet (will take weeks)
B. Snowball Edge (ship physical device)
C. Direct Connect (months to provision)
D. SFTP

---

### Q7. To replace a physical tape backup library while keeping the existing backup software:
A. Storage Gateway — Tape Gateway (VTL)
B. AWS Backup
C. DataSync
D. Glacier directly

---

### Q8. To sync 10 TB of files daily from on-prem NFS to S3 over a network connection:
A. AWS DataSync
B. Snowball Edge
C. Storage Gateway Volume Gateway
D. Site-to-Site VPN alone

---

### Q9. To run AWS services (EC2, EBS, S3) inside your own data center, managed by AWS:
A. Local Zone
B. Wavelength
C. Outposts
D. Direct Connect

---

### Q10. Aurora Global Database supports:
A. <1 second cross-region replication and fast failover
B. Only same-region replicas
C. Cross-region snapshots only
D. Manual failover only

---

### Q11. To centralize backups across EBS, RDS, EFS, DynamoDB, FSx with a single policy:
A. AWS Backup
B. CloudWatch
C. Snowball
D. DMS

---

### Q12. Storage Gateway Volume Gateway in CACHED mode:
A. Stores primary data on-prem with EBS snapshots in S3
B. Stores primary data in S3 with on-prem caching of frequently accessed data
C. Same as Tape Gateway
D. Is for SMB file shares

---

### Q13. To inventory on-prem servers and their dependencies before migrating:
A. AWS Application Discovery Service
B. CloudTrail
C. Inspector
D. Macie

---

### Q14. The Warm Standby pattern means:
A. Full prod-size stack running in standby
B. A scaled-DOWN but functional stack always running in standby
C. Nothing running
D. Only S3 backups

---

### Q15. To migrate an application running on Linux VMs (not refactoring) to AWS with minimal downtime:
A. Application Migration Service (MGN) with block-level replication
B. Database Migration Service
C. Rewrite for Lambda
D. Storage Gateway

---

### Q16. The Snowball Edge Compute Optimized model is BEST when:
A. You also need to run local compute/Lambda/EC2 at the edge during transfer
B. You only need cold storage shipping
C. Network is fast
D. Data is tiny

---

### Q17. To bridge an on-prem app to AWS via an iSCSI interface backed by S3:
A. Volume Gateway
B. File Gateway
C. Tape Gateway
D. DataSync

---

### Q18. The single most cost-effective DR option for a non-critical workload (rebuild on disaster, no live infra):
A. Backup & Restore
B. Pilot Light
C. Warm Standby
D. Multi-Site Active-Active

---

### Q19. To get cross-region, multi-active writes for a globally distributed NoSQL app with single-digit ms reads:
A. DynamoDB Global Tables
B. RDS Read Replicas
C. Aurora Multi-AZ
D. Single-region DynamoDB

---

### Q20. Application Migration Service replication uses:
A. Block-level continuous replication to AWS until cutover
B. Application-level export/import
C. Direct database dump
D. Manual snapshot copy

---

### Q21. AWS Local Zones are BEST for:
A. Sub-10ms latency to users in major metros (e.g., LA, Boston) outside main regions
B. On-prem server racks
C. Tape backup
D. 5G edge

---

### Q22. To copy backups to a separate AWS account for ransomware protection:
A. AWS Backup cross-account vault copy
B. Snowball
C. DataSync
D. S3 ACL

---

### Q23. Direct Connect Gateway:
A. Connects one DX connection to multiple VPCs across multiple regions
B. Provides DDoS protection
C. Is an IGW
D. Replaces a NAT

---

### Q24. A DR test should occur:
A. Never
B. Once during initial design
C. Regularly (Game Days) so failover actually works when needed
D. Only when a disaster happens

---

## 🎯 Answers + Explanations

### Q1: **A. Backup & Restore**
Just back up data + IaC; rebuild on disaster. Cheapest, longest RTO.

### Q2: **D. Multi-Site Active-Active**
Both regions serving — failover is just removing one. Lowest RPO/RTO, highest cost.

### Q3: **C. Core data live, compute OFF**
DB replicating; app servers off or minimal. Scale up on failover.

### Q4: **A. DMS + SCT**
Schema Conversion Tool converts Oracle → PG schema; DMS migrates the data with CDC.

### Q5: **A. Application Migration Service (MGN)**
Block-level replication of VMs to EC2 with minimal downtime.

### Q6: **B. Snowball Edge**
At 100 Mbps, 500 TB ≈ 460+ days online. Shipping a Snowball is ~1 week.

### Q7: **A. Tape Gateway (VTL)**
Replaces physical tape library; existing backup software sees a Virtual Tape Library.

### Q8: **A. DataSync**
Online transfer service for NFS/SMB/HDFS → S3/EFS/FSx, up to 10 Gbps.

### Q9: **C. Outposts**
AWS-managed rack in YOUR DC. Local Zones/Wavelength are AWS facilities (not in your DC).

### Q10: **A. <1s replication + fast failover**
Aurora Global Database is the gold standard for cross-region relational DR.

### Q11: **A. AWS Backup**
Central policy/vault for many AWS services.

### Q12: **B. Primary in S3, local cache**
Cached Volume Gateway = primary in S3, low-latency cache locally. Stored = opposite.

### Q13: **A. Application Discovery Service**
Inventories servers + dependencies for migration planning.

### Q14: **B. Scaled-down functional stack always running**
Warm Standby = always running, scaled down. Pilot Light = compute off.

### Q15: **A. MGN with block-level replication**
Lift-and-shift VMs to EC2 with minimal downtime.

### Q16: **A. Local compute needed at the edge**
Snowball Edge Compute Optimized has more CPU/RAM for processing.

### Q17: **A. Volume Gateway**
iSCSI block storage backed by S3.

### Q18: **A. Backup & Restore**
Lowest cost; nothing pre-provisioned in DR region beyond backups.

### Q19: **A. DynamoDB Global Tables**
Multi-region multi-active writes, single-digit ms.

### Q20: **A. Block-level continuous replication until cutover**
MGN replicates blocks continuously; small cutover window.

### Q21: **A. Sub-10ms latency to metros outside regions**
Local Zones = AWS infra in major metros.

### Q22: **A. AWS Backup cross-account vault copy**
Separate account isolates backups from a compromised production account.

### Q23: **A. One DX → many VPCs across regions**
DX Gateway extends DX reach.

### Q24: **C. Regular Game Days**
Untested DR is no DR. Schedule regular failover exercises.

---

## 📊 Score Yourself

- 23–24/24 → 🏆 Ready for Practice Exam 2
- 20–22/24 → ✅ Solid
- 16–19/24 → ⚠️ Re-read DR + migration sections
- <16/24 → 🔁 Re-watch all 4 essentials

---

## 🃏 Add To Your Flashcards

- 4 DR tiers (RPO/RTO/cost)
- DMS vs SCT
- MGN for lift-and-shift
- Snow family use cases
- Storage Gateway (File / Volume / Tape) modes
- DataSync vs Storage Gateway
- Aurora Global vs DynamoDB Global Tables
- Outposts / Local Zone / Wavelength

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then **take [Practice Exam 2](../Practice-Exams/Practice-Exam-2.md)**, and finally [Final Mock Exam](../Practice-Exams/Final-Mock-Exam.md).
