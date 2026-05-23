# ✏️ Module 3 Quiz: Core Storage

> **Instructions:** 25 questions. Aim for 21/25 minimum. No peeking!

---

## Questions

### Q1. Which S3 storage class is BEST for data with unpredictable access patterns where automatic cost optimization is desired? *(Apply)*
A. S3 Standard
B. S3 Intelligent-Tiering
C. S3 Glacier Deep Archive
D. S3 One Zone-IA

---

### Q2. The maximum size of a single S3 object is: *(Remember)*
A. 5 GB
B. 100 GB
C. 5 TB
D. Unlimited

---

### Q3. S3 buckets are scoped: *(Understand)*
A. Per Availability Zone
B. Per Region (the bucket lives in a Region, but the name is global)
C. Globally — bucket names must be unique across all AWS accounts in the world
D. Both B and C

---

### Q4. Which AWS storage service is BEST for a shared file system that many Linux EC2 instances can read/write simultaneously? *(Apply)*
A. Amazon S3
B. Amazon EBS
C. Amazon EFS
D. EC2 Instance Store

---

### Q5. Which S3 storage class is CHEAPEST but has retrieval times of up to 12–48 hours? *(Remember)*
A. S3 Glacier Instant Retrieval
B. S3 Glacier Flexible Retrieval
C. S3 Glacier Deep Archive
D. S3 One Zone-IA

---

### Q6. Which EBS volume type is the default general-purpose SSD for most workloads as of 2026? *(Remember)*
A. gp2
B. gp3
C. io2
D. sc1

---

### Q7. A company needs to migrate 200 TB to AWS but their internet link would take 6 months. What service should they use? *(Apply)*
A. AWS DataSync over the internet
B. AWS Snowball Edge
C. AWS Storage Gateway
D. AWS Direct Connect for a single transfer

---

### Q8. Which S3 storage class stores data in only ONE Availability Zone for lower cost (but lower durability)? *(Remember)*
A. S3 Standard
B. S3 Standard-IA
C. S3 One Zone-IA
D. S3 Glacier Deep Archive

---

### Q9. Amazon EC2 Instance Store provides: *(Understand)*
A. Persistent storage that survives instance termination
B. High-performance ephemeral storage on the host that is LOST on stop/terminate
C. Object storage
D. Shared file system access

---

### Q10. Which Storage Gateway type presents a virtual tape library (VTL) on-prem and stores tapes in S3 / Glacier? *(Apply)*
A. S3 File Gateway
B. Volume Gateway
C. Tape Gateway
D. FSx File Gateway

---

### Q11. To replicate an S3 bucket's contents to another Region for disaster recovery, you must enable: *(Apply)*
A. S3 Versioning only
B. Cross-Region Replication (which requires versioning)
C. Lifecycle policies
D. Object Lock

---

### Q12. Which AWS storage durability guarantee applies to S3 Standard? *(Remember)*
A. 99% (2 nines)
B. 99.9% (3 nines)
C. 99.999999999% (11 nines)
D. 100% guaranteed

---

### Q13. A team must store data that legally cannot be deleted for 7 years. Which S3 feature enforces this immutability? *(Apply)*
A. Versioning
B. Lifecycle Rules
C. S3 Object Lock (in compliance mode)
D. Encryption

---

### Q14. Which best describes EBS volumes? *(Understand)*
A. Block storage attached to one EC2 instance at a time
B. Shared object storage
C. Tape archive storage
D. Hybrid on-prem appliance

---

### Q15. To move an EBS volume's data to another Availability Zone, you should: *(Apply)*
A. Detach and re-attach in the new AZ (EBS is multi-AZ by default)
B. Create a snapshot, then restore the snapshot as a new EBS volume in the target AZ
C. Use EFS to migrate
D. It's impossible

---

### Q16. Which is TRUE about S3 default settings since 2023? *(Understand)*
A. Buckets are public by default
B. Block Public Access is ON by default; you must explicitly turn it off
C. Versioning is on by default
D. All objects use SSE-KMS encryption

---

### Q17. A Windows application needs file shares accessible over SMB with Active Directory integration. The BEST service is: *(Apply)*
A. Amazon EFS
B. FSx for Windows File Server
C. FSx for Lustre
D. S3 with Storage Gateway

---

### Q18. Which is an example of OBJECT storage? *(Remember)*
A. EBS
B. EFS
C. S3
D. FSx for Lustre

---

### Q19. A high-performance ML training workflow needs a parallel POSIX file system tightly integrated with S3. The BEST choice is: *(Apply)*
A. EFS Standard
B. FSx for Lustre
C. EBS gp3
D. Glacier Instant Retrieval

---

### Q20. S3 Standard-IA has a minimum storage duration of: *(Remember)*
A. 0 days
B. 30 days
C. 90 days
D. 180 days

---

### Q21. Which workload is BEST for the S3 One Zone-IA class? *(Evaluate)*
A. Primary customer-facing data
B. Easily-recreatable derived data (e.g., transcoded thumbnails) where cost matters
C. Compliance archives
D. Real-time application logs

---

### Q22. The Snowcone device is BEST for: *(Understand)*
A. 100 PB datacenter migration
B. Small (~8 TB) edge data collection in tight spaces
C. Storing tax records for 10 years
D. CDN edge caching

---

### Q23. Which feature lets you generate a temporary URL to share access to a private S3 object? *(Understand)*
A. CloudFront origin access
B. S3 Presigned URL
C. Bucket policy
D. IAM role

---

### Q24. A Volume Gateway in CACHED mode keeps: *(Analyze)*
A. All data on-prem; backups in S3
B. Primary data in S3 with frequently-accessed data cached on-prem
C. Only metadata in AWS
D. Only encryption keys in AWS

---

### Q25. Which is FALSE about S3 versioning? *(Analyze)*
A. It can be enabled at the bucket level
B. It protects against accidental deletion / overwrite
C. It is required for Cross-Region Replication
D. It reduces storage costs by deduplicating

---

## 🎯 Answers + Explanations

### Q1: **B. S3 Intelligent-Tiering**
Intelligent-Tiering monitors access patterns and moves objects between frequent / infrequent / archive tiers automatically. Small per-object monitoring fee.

### Q2: **C. 5 TB**
Per-object max is 5 TB. Single PUT max is 5 GB; above that requires multipart upload.

### Q3: **D. Both B and C**
Buckets live in one Region (data sovereignty), but bucket *names* are globally unique across all AWS accounts.

### Q4: **C. Amazon EFS**
EFS is the managed NFS shared file system for Linux. EBS attaches to one instance. S3 is not a file system.

### Q5: **C. S3 Glacier Deep Archive**
Cheapest tier. Retrieval is 12 hours (Standard) up to 48 hours (Bulk). Perfect for "must keep, almost never read."

### Q6: **B. gp3**
gp3 became the recommended general-purpose default — fixed baseline 3,000 IOPS, configurable, cheaper than gp2.

### Q7: **B. AWS Snowball Edge**
Petabyte-scale migration over physical hardware. AWS ships a rugged box, you copy data, ship it back.

### Q8: **C. S3 One Zone-IA**
Stores in 1 AZ only — 20% cheaper than Standard-IA but loses data if that AZ is destroyed. Use only for recreatable data.

### Q9: **B. High-performance ephemeral storage on the host that is LOST on stop/terminate**
Instance Store is NVMe SSD physically on the EC2 host — very fast, but ephemeral. Use for cache/scratch.

### Q10: **C. Tape Gateway**
Replaces physical tape backups with a VTL interface. Tapes stored in S3 / S3 Glacier.

### Q11: **B. Cross-Region Replication (which requires versioning)**
CRR replicates objects to another Region. Versioning must be enabled on both source and destination buckets.

### Q12: **C. 99.999999999% (11 nines)**
Famous "11 nines" durability. Availability is lower (99.99% for Standard).

### Q13: **C. S3 Object Lock (in compliance mode)**
WORM compliance — in Compliance mode, even the AWS root account cannot delete the locked object before retention expires.

### Q14: **A. Block storage attached to one EC2 instance at a time**
Standard EBS = single-attach block storage. (Multi-Attach is a special io1/io2 feature for clustered apps.)

### Q15: **B. Create a snapshot, then restore the snapshot as a new EBS volume in the target AZ**
EBS volumes are AZ-scoped. Snapshots are Region-scoped (and can be copied cross-Region).

### Q16: **B. Block Public Access is ON by default; you must explicitly turn it off**
Since 2023, all new buckets ship with Block Public Access enabled to prevent accidental exposure.

### Q17: **B. FSx for Windows File Server**
SMB + AD integration = FSx for Windows. EFS is Linux/NFS only.

### Q18: **C. S3**
EBS = block, EFS = file, S3 = object. FSx = file (specialized).

### Q19: **B. FSx for Lustre**
Lustre is the standard HPC parallel file system. AWS integrates it with S3 for ML training pipelines.

### Q20: **B. 30 days**
Standard-IA, One Zone-IA both have a 30-day minimum charge per object. Glacier classes have 90 (or 180 for Deep Archive).

### Q21: **B. Easily-recreatable derived data (e.g., transcoded thumbnails) where cost matters**
One Zone-IA's lower durability is fine if you can regenerate the data from the original.

### Q22: **B. Small (~8 TB) edge data collection in tight spaces**
Snowcone is the smallest device — battery-powered, fits in a backpack, can also run Lambda or EC2 at the edge.

### Q23: **B. S3 Presigned URL**
Presigned URLs give temporary, signed access to a private object — without changing bucket permissions.

### Q24: **B. Primary data in S3 with frequently-accessed data cached on-prem**
Cached Volume Gateway = S3 is the source of truth; local cache for hot data. Stored Volume Gateway = local is primary, snapshots to S3.

### Q25: **D. It reduces storage costs by deduplicating**
Versioning INCREASES storage costs (you keep every version). It's a data-protection feature, not a cost-savings feature.

---

## 📊 Score Yourself

- 24–25 → 🏆 Storage master.
- 21–23 → ✅ Solid. Review wrong answers.
- 17–20 → ⚠️ Re-read S3 storage classes + EBS volume types.
- <17 → 🔁 Restart Module 3.

---

## 🃏 Add To Your Flashcards

- The 7 S3 storage classes + min duration + use case
- S3 = 11 nines durability, 4 nines availability
- EBS = AZ-scoped block; EFS = multi-instance NFS; S3 = objects
- Snowcone (8 TB) vs Snowball Edge (80 TB) vs Snowmobile (100 PB)
- Block Public Access ON by default since 2023
- 5 TB max object size

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 4: Networking & CDN](../Module-04-Networking-CDN/Reading.md)
