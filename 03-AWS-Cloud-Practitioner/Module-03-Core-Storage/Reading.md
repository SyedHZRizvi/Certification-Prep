# Module 3: Core Storage 💾

> **Why this module matters:** Storage is where data *lives*. Pick wrong and you'll either pay 10x too much or hit performance walls. The exam tests whether you know S3 vs EBS vs EFS vs FSx vs Storage Gateway vs Snow Family — at least 6 questions are guaranteed.

---

## 📦 A Story: Maria's File Cabinets

Back to Maria's pizza shop, now expanded to 12 locations. She has 4 kinds of "stuff" to store:

1. **Today's order tickets** — fast access, frequently updated, attached to ONE shop's POS terminal.
   → That's like **EBS**: a hard drive attached to a single server.
2. **Shared training videos** — every shop streams the same training files; multiple readers at once.
   → That's like **EFS**: shared network file system, accessible by many machines.
3. **Photos of every pizza ever made for marketing** — billions of files, accessed occasionally, durably stored forever.
   → That's like **S3**: object storage in the cloud.
4. **Old, archived tax documents from 2008** — must keep for 7 years, retrieved maybe once.
   → That's like **S3 Glacier**: cheap, deep archive.

**EBS = one-server disk. EFS = shared filesystem. S3 = limitless object store. Glacier = cold archive.**

Once you get this taxonomy, every storage question on the exam takes 5 seconds to answer.

---

## 📚 The 3 Storage Types

| Type | Granularity | AWS examples | Real-world analogy |
|------|-------------|--------------|-------------------|
| **Block** | Disk blocks | EBS, EC2 Instance Store | Physical hard drive |
| **File** | Files & folders | EFS, FSx | Shared network drive (SMB/NFS) |
| **Object** | Whole objects + metadata | S3, S3 Glacier | Web-accessible "buckets" of files |

🔥 **MEMORIZE this trichotomy.** Block vs File vs Object is the foundation of every storage answer.

---

## ☁️ Amazon S3 — The Star Service

**S3 = Simple Storage Service.** Unlimited object storage, accessed via HTTP(S) API. Each object lives in a **bucket** (globally unique name) and has a **key** (the path).

### Headline facts (MEMORIZE)

- Max object size: **5 TB** (single PUT max = 5 GB; multipart upload required above)
- Bucket names are **globally unique across all AWS accounts**
- 11 nines of durability (**99.999999999%**) for Standard
- Designed for **99.99% availability** (Standard)
- Region-scoped (data lives in a Region; not auto-replicated globally)

### The S3 Storage Classes (HIGH-FREQUENCY EXAM TOPIC)

| Class | Use case | Retrieval | Min duration | Notes |
|-------|----------|-----------|--------------|-------|
| **S3 Standard** | Frequent access | ms | None | Default; 3 AZs |
| **S3 Intelligent-Tiering** | Unknown / changing access | ms | None | Auto-moves objects between tiers; small monitoring fee |
| **S3 Standard-IA** (Infrequent Access) | Infrequent but rapid when needed | ms | 30 days | 3 AZs, cheaper storage / per-GB retrieval fee |
| **S3 One Zone-IA** | Infrequent + recreatable | ms | 30 days | 1 AZ only (less durable) — 20% cheaper than Standard-IA |
| **S3 Glacier Instant Retrieval** | Archive, fast retrieval | ms | 90 days | Lowest-cost ms-retrieval archive |
| **S3 Glacier Flexible Retrieval** (was just "Glacier") | Archive | minutes → hours | 90 days | 3 retrieval tiers: Expedited, Standard, Bulk |
| **S3 Glacier Deep Archive** | Long-term archive | 12 → 48 hours | 180 days | Cheapest. Tax docs, compliance |

🎯 **Exam pattern → answer:**
- "Frequently accessed images" → **Standard**
- "I don't know the access pattern" → **Intelligent-Tiering**
- "Infrequent but might need fast" → **Standard-IA**
- "Backup data I can recreate" → **One Zone-IA** (cheaper, less durable)
- "Compliance archive, occasional ms access" → **Glacier Instant Retrieval**
- "Backups retrieved within hours" → **Glacier Flexible Retrieval**
- "7-year tax retention, basically never read" → **Glacier Deep Archive**

### S3 Features To Know

| Feature | What it does |
|---------|--------------|
| **Lifecycle Rules** | Auto-transition or expire objects (e.g., Standard → IA at 30 days → Glacier at 90) |
| **Versioning** | Keep every version of an object; protects against deletion |
| **Encryption** | SSE-S3 (AWS-managed), SSE-KMS (KMS keys), SSE-C (customer keys), Client-side |
| **Replication** | CRR (Cross-Region) for DR; SRR (Same-Region) for compliance/aggregation |
| **Object Lock** | WORM (Write Once Read Many) for compliance — even root can't delete |
| **Static Website Hosting** | Serve a website directly from a bucket |
| **Presigned URLs** | Temporary signed URL to share a private object |
| **Transfer Acceleration** | Upload to nearest Edge Location, route over AWS backbone |
| **S3 Storage Lens** | Org-wide storage insights / cost optimization |
| **Bucket Policies / Block Public Access** | Permissions; Block Public Access is ON by default |

---

## 💽 Amazon EBS (Elastic Block Store)

**EBS = network-attached block storage for EC2.** Think "virtual hard drive." One EBS volume attaches to ONE EC2 instance at a time (with the exception of `io1`/`io2` Multi-Attach for clustered apps).

### EBS Volume Types

| Type | Use case | Notes |
|------|----------|-------|
| **gp3** (general SSD) | Default for most workloads | 3,000 IOPS baseline, scalable, cheapest SSD |
| **gp2** (general SSD, older) | Legacy default | IOPS tied to volume size |
| **io2 / io2 Block Express** (provisioned IOPS SSD) | High-perf DBs (SAP HANA, big Oracle) | Up to 256K IOPS, 4 KB latency |
| **st1** (throughput HDD) | Big sequential workloads — data warehouse, log processing | Cheaper, throughput-optimized |
| **sc1** (cold HDD) | Infrequent access, low cost | Cheapest EBS option |

### EBS Snapshots

- Point-in-time backups → stored in S3 (behind the scenes; you don't see the bucket)
- Incremental (only changed blocks)
- Restore: snapshot → new EBS volume (in same or different AZ/Region)
- Snapshots can be copied across Regions for DR

🎯 **Exam pattern:** "Move an EBS volume to another AZ?" → **Snapshot → restore in target AZ.**

### EC2 Instance Store

Different from EBS! **Instance Store = ephemeral block storage physically attached to the host.**
- Lost when instance stops or terminates
- Very high I/O (NVMe local SSD)
- Use for caches, scratch space — NEVER for primary data

---

## 📁 Amazon EFS (Elastic File System)

**EFS = managed NFS file system shared by many EC2 instances simultaneously.** Linux only.

- Scales automatically (pay per GB stored, no provisioning)
- Multi-AZ by default (or One Zone variant for lower cost)
- Storage classes: Standard, Standard-IA, One Zone, One Zone-IA
- Use cases: shared web content, big-data workspaces, container persistent volumes

🎯 **Exam shortcut:** "Multiple EC2 instances need to read/write the same file" → **EFS** (not EBS!).

---

## 📁 Amazon FSx — Specialized Managed File Systems

For when EFS isn't the right protocol or feature set:

| FSx variant | Best for | Protocol |
|-------------|----------|----------|
| **FSx for Windows File Server** | Windows shares, AD-integrated | SMB |
| **FSx for Lustre** | High-performance computing (HPC), ML training | Custom (POSIX) |
| **FSx for NetApp ONTAP** | Lift & shift NetApp workloads | NFS, SMB, iSCSI |
| **FSx for OpenZFS** | ZFS workloads on AWS | NFS |

🎯 **Exam pattern:** "Windows file shares with Active Directory integration" → **FSx for Windows File Server.**

---

## 🔄 Hybrid Storage: AWS Storage Gateway

**Storage Gateway = software that lets your on-prem servers talk to AWS storage as if it were local.**

| Gateway type | What it presents on-prem | Where data ends up |
|--------------|--------------------------|--------------------|
| **S3 File Gateway** | NFS/SMB share | S3 |
| **FSx File Gateway** | SMB share (cached) | FSx for Windows |
| **Volume Gateway** | iSCSI block volumes | S3 (snapshots as EBS) |
| **Tape Gateway** | Virtual Tape Library (VTL) | S3 / Glacier |

🎯 **Exam pattern:** "Replace physical tape backups with a cloud-based VTL?" → **Tape Gateway.**

---

## 📦 AWS Snow Family — Petabyte-Scale Data Transfer

When your internet pipe would take *months* to upload 100 TB to S3, AWS will physically ship you a rugged box.

| Device | Capacity | Use case |
|--------|----------|----------|
| **Snowcone** | 8 TB (SSD) | Edge collection in tight spaces; can run Lambda |
| **Snowball Edge Storage Optimized** | 80 TB usable | Bulk data transfer |
| **Snowball Edge Compute Optimized** | 42 TB + EC2/Lambda compute | Edge processing (oil rigs, ships) |
| **Snowmobile** | 100 PB (a literal shipping container truck) | Datacenter migrations *(being phased out — confirm at exam time)* |

You order via the AWS console → AWS ships the device → you copy data → ship it back → AWS uploads to S3.

🎯 **Exam pattern:** "Need to migrate 200 TB to AWS but only have a slow internet link" → **Snowball Edge**.

---

## 🧮 Storage Service Comparison

| Service | Type | Attached to | Multi-instance access? | Use case |
|---------|------|-------------|------------------------|----------|
| **S3** | Object | N/A (HTTP API) | ∞ (it's the internet) | Backups, web assets, data lake |
| **EBS** | Block | 1 EC2 at a time | No (mostly) | Boot disks, DBs on EC2 |
| **EC2 Instance Store** | Block (ephemeral) | The EC2 host | No | Scratch / cache only |
| **EFS** | File (NFS) | Many Linux EC2 / Fargate | ✅ Many | Shared file system |
| **FSx for Windows** | File (SMB) | Many Windows EC2 | ✅ Many | Windows shares |
| **FSx for Lustre** | File (POSIX) | Many EC2 | ✅ Many | HPC / ML training |
| **Storage Gateway** | Hybrid | On-prem servers | ✅ | Bridge on-prem ↔ AWS |
| **Snow Family** | Physical transport | N/A | N/A | Petabyte data migration |

---

## 🚨 Exam Traps

1. **S3 bucket names are globally unique** — even if some other AWS account in the world used the name, you can't.
2. **S3 Standard-IA has a 30-day minimum storage charge**, IA classes have per-GB retrieval fees. Don't put hot data in IA.
3. **S3 One Zone-IA stores in ONE AZ** — if that AZ dies, your data dies. Only use for *recreatable* data.
4. **EBS volumes are AZ-scoped** — to use one in another AZ, snapshot it and restore.
5. **EBS attaches to ONE EC2 at a time** (Multi-Attach is the rare exception, only for `io1`/`io2`).
6. **EFS is Linux only.** For Windows, use **FSx for Windows File Server**.
7. **Instance Store is ephemeral** — it disappears when you stop or terminate. Don't store primary data there.
8. **Block Public Access is ON by default for new S3 buckets** since 2023. To make a bucket public, you have to explicitly turn it off (and you'd better have a reason).
9. **CRR (Cross-Region Replication) is opt-in** — S3 does not magically replicate cross-region.
10. **Glacier Deep Archive retrieval = up to 48 hours.** "Cheapest" answer always has the longest retrieval.

---

## ⚠️ Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "S3 is a file system" | S3 is *object* storage. No real folders — keys with `/` are just naming convention. |
| "EBS is shared like EFS" | EBS attaches to one EC2; EFS is the shared one |
| "Glacier is a separate service" | Glacier is now a *storage class within S3* (since 2021 rebranding) |
| "More expensive = more durable" | Not necessarily — One Zone-IA is cheaper than Standard-IA but less durable |
| "S3 has folders" | Just key prefixes that look like folders in the UI |
| "Snowmobile is bigger than Snowball" | Yes — but Snowmobile (the truck) is being phased out, confirm before exam |

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **S3** | Simple Storage Service — unlimited object storage in buckets |
| **Bucket** | Globally-unique S3 container for objects |
| **Object** | A file in S3 (up to 5 TB) |
| **Key** | The "path" of an object inside a bucket |
| **Storage Class** | S3 tier with different cost/access trade-offs |
| **Lifecycle Policy** | Auto-transition or expire objects |
| **Versioning** | Keep historical versions of S3 objects |
| **CRR / SRR** | Cross-Region / Same-Region Replication |
| **EBS** | Block storage attached to a single EC2 |
| **Snapshot** | Point-in-time EBS backup stored in S3 |
| **Instance Store** | Ephemeral block storage on the EC2 host |
| **EFS** | Managed NFS file system (Linux) |
| **FSx** | Managed file system family (Windows, Lustre, NetApp, OpenZFS) |
| **Storage Gateway** | Hybrid service exposing AWS storage on-prem |
| **Snow Family** | Physical devices for petabyte data transfer |
| **Glacier** | S3 archive storage classes |
| **Multi-AZ** | Replicated across multiple AZs in a Region |
| **Durability** | Probability data won't be lost (S3 = 11 nines) |
| **Availability** | Probability data can be accessed (S3 Std = 4 nines) |

---

## ✅ Module 3 Summary

You now know:
- 📦 Block (EBS), File (EFS/FSx), Object (S3) — the 3 storage paradigms
- ☁️ S3 storage classes (Standard, IA, One Zone-IA, Intelligent-Tiering, 3 Glacier tiers)
- 💽 EBS volume types (gp3, gp2, io2, st1, sc1) and the AZ-scoping rule
- 📁 EFS for Linux shared file; FSx for Windows / HPC / NetApp / ZFS
- 🔄 Storage Gateway for hybrid (S3, FSx, Volume, Tape gateways)
- 📦 Snow Family for petabyte physical transfer
- 🚨 S3 buckets globally unique, default Block Public Access ON

**Next steps:**
1. 🎥 [Videos](./Videos.md)
2. ✏️ [Quiz](./Quiz.md)
3. 📋 [Cheat-Sheet](./Cheat-Sheet.md)
4. ➡️ [Module 4: Networking & CDN](../Module-04-Networking-CDN/Reading.md)

---

## 📚 Further Reading (Optional)

- 📖 [S3 Storage Classes](https://aws.amazon.com/s3/storage-classes/)
- 📖 [EBS Volume Types](https://docs.aws.amazon.com/ebs/latest/userguide/ebs-volume-types.html)
- 📖 [EFS vs FSx Decision Tree](https://aws.amazon.com/efs/when-to-choose-efs/)
- 📖 [Snow Family Overview](https://aws.amazon.com/snow/)
- 📖 [Storage Gateway Types](https://docs.aws.amazon.com/storagegateway/latest/userguide/StorageGatewayConcepts.html)
