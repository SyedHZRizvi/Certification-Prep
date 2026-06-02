# Module 3: Core Storage 💾

> **Why this module matters:** Storage is where data *lives*. Pick wrong and you'll either pay 10x too much or hit performance walls. The exam tests whether you know S3 vs EBS vs EFS vs FSx vs Storage Gateway vs Snow Family — at least 6 questions are guaranteed.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - [Cloud Fundamentals](../Module-01-Cloud-Fundamentals/Reading.md) — Regions, AZs, Multi-AZ vs cross-Region
> - [Core Compute](../Module-02-Core-Compute/Reading.md) — what an EC2 instance is, what an AZ-scoped resource means
> - Light filesystem mental model: the difference between "a hard drive" and "a network share"
>
> If you've never thought about block vs file vs object storage as distinct paradigms, that's exactly what this module teaches.

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

S3 was AWS's first public service, launched March 14, 2006 — making it older than EC2. The S3 design — object storage with key-value access over HTTP — was described in a foundational paper by AWS senior leadership (DeCandia et al., *"Dynamo: Amazon's Highly Available Key-value Store,"* SOSP 2007) and remains a reference design in distributed-systems courses (e.g., MIT 6.824, *Distributed Systems*, taught by Robert Morris and Frans Kaashoek). The CAP-theorem trade-offs S3 makes (eventual consistency historically, strong read-after-write since December 2020) are tested implicitly on the SAA-C03.

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

## 🏛️ Case Study — Dropbox Leaves AWS S3 ("Magic Pocket," 2015–2017)

**Situation.** Dropbox stored "over 90% of [its] data" on Amazon S3 from launch (2007) through ~2015. By 2015, the company had ~500 million users and was storing **exabytes** of customer data on S3. CFO Ajay Vashee told investors S3 was Dropbox's single largest line item — hundreds of millions of dollars per year. The team realized that at their scale and workload pattern (almost-immutable user files, predictable access, ~constant capacity growth) they were paying S3 margin on something they could potentially build for less.

**Decision.** In 2015, Dropbox started a project called **Magic Pocket** — a custom object-storage system built from open-source software (modified Linux + SMR HDDs) running in three new owned data centers in California, Texas, and Virginia. They invested two years and a few hundred engineers. Crucially, they did *not* move all workloads off AWS — they kept compute (EC2), edge / CDN, and some metadata workloads on AWS. The repatriation was *storage-only*, surgical.

**Outcome.** By March 2016, Dropbox completed the migration: ~90% of user data shifted from S3 to Magic Pocket. They publicly disclosed in their 2017 S-1 (IPO filing) that the move generated **$74.6M in gross-margin savings over 2 years (2016–2017 combined)**. Dropbox went public in March 2018 with a $9B valuation. Magic Pocket has since been described in detail in the Dropbox tech blog (Akhil Gupta, *"Inside the Magic Pocket,"* 2016) and is taught in distributed-systems courses as a case study in when cloud isn't the cheapest answer.

**Lesson for the exam / for practitioners.** Dropbox is the canonical counter-example to "always go to S3." For the *exam*, S3 is almost always the right answer — CLF-C02 tests cloud-native patterns. But for *practitioners*, the lesson is sharper: at exabyte scale with predictable access patterns and the engineering capacity to build storage infrastructure, S3's gross margin can be reclaimed by repatriation. This is also a textbook **Cost Optimization** pillar lesson (Well-Architected, 2015; revisited Module 8) — measure everything and re-evaluate periodically; the right answer at 10 TB is not the right answer at 10 EB.

**Discussion (Socratic).**
- Q1: Dropbox kept compute on AWS but moved storage off. Why is storage a more attractive repatriation target than compute? Compare the gross-margin profile of S3 vs EC2 — which is AWS more dependent on, and why does that matter to your decision?
- Q2: A startup CFO sees the Dropbox story and asks: "Should *we* build our own object storage to save the AWS bill?" Walk them through the breakeven math. At what scale (TB of storage? Number of engineers?) does Magic Pocket become defensible? Below that, what's the right answer?
- Q3: In 2024 Dropbox announced it was *adding back* some workloads to AWS (specifically the AI / ML tier on AWS GPUs). What does that tell you about cloud-vs-on-prem as a one-way decision vs an ongoing portfolio optimization?

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
- 🪤 Dropbox's Magic Pocket as the canonical "when *not* to use S3" case

**Next steps:**
1. 🎥 [Videos](./Videos.md)
2. ✏️ [Quiz](./Quiz.md)
3. 📋 [Cheat-Sheet](./Cheat-Sheet.md)
4. ➡️ [Module 4: Networking & CDN](../Module-04-Networking-CDN/Reading.md)

---

> **Where this leads.**
> - Inside this course: Module 4 (Networking) introduces CloudFront, which sits in front of S3 for global distribution. Module 6 (Security) covers S3 encryption, Block Public Access, Macie for PII discovery, and the most-tested S3 misconfigurations. Module 8 (Well-Architected) revisits storage class selection under the Cost Optimization pillar.
> - Cross-course: `04-AWS-Solutions-Architect-Associate` Module 3 deepens S3 (Transfer Acceleration, Multi-Region Access Points, S3 Object Lambda, durability-vs-availability math). `09-CompTIA-Security-Plus` Module 6 covers S3 misconfiguration as a top cloud-era data-breach vector.
> - Practice: Practice Exam 1 has 8 storage questions (Qs 7–11, 22, 27, 28). Final Mock Exam includes ~5 storage questions in the Cloud Tech & Services domain.

---

## 💬 Discussion — Socratic prompts

1. **The "Intelligent-Tiering is always the answer" trap.** Some study guides say "if you don't know the access pattern, pick Intelligent-Tiering." When is that the *wrong* default? (Hint: small objects, very low total storage.) What does the monitoring fee buy and when does it stop being worth it?
2. **S3 One Zone-IA economic question.** One Zone-IA is ~20% cheaper than Standard-IA. Imagine you're the architect for a CDN origin storing replicable image thumbnails. What's the *expected* dollar savings on a 100 TB workload, and what's the operational risk you accept? Defend the choice in front of a paranoid CTO.
3. **The Snowmobile question (2024 retirement).** AWS announced in early 2024 that Snowmobile (the 100 PB truck) is being retired in favor of multiple Snowball Edge shipments. What does that tell you about how customer demand for petabyte-physical-transfer has shifted? Is the underlying problem (slow internet pipes from on-prem) actually solved by something else?
4. **EFS vs FSx for ML.** A research lab will store ~30 TB of training data accessed by 100 GPU instances in parallel. EFS Standard is comfortable; FSx for Lustre is faster but pricier. How do you decide? What's the question you ask the data scientists first?
5. **The Magic Pocket question for startups.** A Series-B startup is approaching 5 PB of S3 storage. CTO is asking "should we be Dropbox?" Walk through the case for / against. What's the *one* signal that would tip you to "yes, build it"?

---

## 📚 Further Reading (Optional)

- 📖 [S3 Storage Classes](https://aws.amazon.com/s3/storage-classes/)
- 📖 [EBS Volume Types](https://docs.aws.amazon.com/ebs/latest/userguide/ebs-volume-types.html)
- 📖 [EFS vs FSx Decision Tree](https://aws.amazon.com/efs/when-to-choose-efs/)
- 📖 [Snow Family Overview](https://aws.amazon.com/snow/)
- 📖 [Storage Gateway Types](https://docs.aws.amazon.com/storagegateway/latest/userguide/StorageGatewayConcepts.html)

---

## 📚 Further sources (this module)

- 📰 **Gupta, A. — *"Inside the Magic Pocket"* (Dropbox tech blog, May 2016)** — primary-source design overview of Magic Pocket. Pair with the follow-up *"Scaling to Exabytes and Beyond"* (Dropbox, 2018).
- 📄 **DeCandia, G., et al. — *"Dynamo: Amazon's Highly Available Key-value Store"* (SOSP 2007)** — the foundational paper that informed S3's design. ~16 pages; the abstract + Section 4 are exam-relevant.
- 📚 **Brewer, E. — *"Towards Robust Distributed Systems"* (PODC keynote, 2000; the CAP theorem)** — Eric Brewer's original statement of CAP. Read alongside Lynch & Gilbert's 2002 formal proof (*ACM SIGACT News*). The exam doesn't test CAP by name but the durability/availability/partition trade-offs S3 makes are CAP-derived.
- 📖 **AWS Builders' Library — *"Building dashboards for operational visibility"* by John O'Shea** — the storage-monitoring section explains how S3 Storage Lens metrics work.
- 📄 **Dropbox S-1 (March 2018)** — primary-source disclosure of the $74.6M Magic Pocket savings.
- 🎓 **MIT 6.824 *Distributed Systems* (Robert Morris, free on MIT OCW)** — lectures 9 and 10 cover Dynamo and CAP as taught at the graduate level. Free PDFs and YouTube lecture videos.
