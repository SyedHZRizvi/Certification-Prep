# Module 5: S3 (Simple Storage Service) Deep Dive 🪣

> **Why this module matters:** S3 is the most-tested individual service on SAA. Storage classes, lifecycle, encryption, replication, durability, access controls, expect 7–10 questions purely on S3. The good news: it's all rules-based. Memorize the right facts and pick up easy points.

> **Prerequisites for this module.**
> - [Module 1](../Module-01-Foundations-Well-Architected/Reading.md), Region/AZ vocabulary
> - [Module 2](../Module-02-IAM (Identity and Access Management)-Organizations/Reading.md), bucket policies are resource-based IAM policies
> - [Module 4](../Module-04-VPC-Deep-Dive/Reading.md), Gateway VPC Endpoints are *S3-specific*
> - Familiarity with object storage concepts (S3 is the canonical example, but Azure Blob, Google Cloud Storage, MinIO all share the model)
> - Understanding of HTTPS (HTTP Secure) (HTTP (Hypertext Transfer Protocol) Secure) and signed URLs at a conceptual level

---

## ☕ A Story: The Self-Storage Empire

You own a self-storage business. Customers bring boxes (objects) and rent units (buckets). Different customers want different things:

- **Lawyer**, accesses files daily, wants instant retrieval. Premium climate-controlled unit on the ground floor. → **S3 Standard**
- **Tax accountant**, needs old returns rarely but instantly if needed. Slightly cheaper unit, accessed less often. → **S3 Standard-IA**
- **Family photos that may or may not be looked at this year**, let the system figure out which photos are hot vs cold. → **S3 Intelligent-Tiering**
- **20-year-old wedding video**, never look at it, but need to keep it. OK to wait minutes to hours to retrieve. → **S3 Glacier Instant** / **Flexible** / **Deep Archive**
- **Legal hold**, must NOT be deleted no matter what for 7 years. → **Object Lock (Compliance mode)**.

Your business also gives customers locked-key access (only they can unlock, **encryption**), copies units across two cities (**replication**), and lets visitors come in but only see specific boxes (**presigned URLs**). That's S3.

---

## 🪣 S3 Basics, The Essentials

| Item | Detail |
|------|--------|
| **Object** | The thing you store. Has key (filename), value (data), metadata, version ID |
| **Bucket** | Container of objects; **globally unique name**; tied to a region |
| **Max object size** | 5 TB |
| **Single PUT upload size** | 5 GB max, use **Multipart Upload** above 100 MB recommended |
| **Durability** | 11 nines (99.999999999%), design loses 1 object per 10,000 in 10 million years |
| **Availability** | Varies by class, 99.99% for Standard, 99.9% for IA, 99.5% for One-Zone IA |
| **Consistency** | Strong read-after-write consistency for all operations (since Dec 2020) |

🎯 **Exam pattern:** "Workload writes an object then immediately reads it, what consistency model?" → **Strongly consistent** (S3 doesn't have eventual consistency anymore).

---

## 📊 Storage Classes, The Heart Of S3 Questions

| Class | Designed for | Min storage duration | Retrieval | Cost (per GB-month, approx) |
|-------|--------------|----------------------|-----------|------------------------------|
| **S3 Standard** | Frequent access | None | Instant | ~$0.023 |
| **S3 Intelligent-Tiering** | Unknown / shifting access patterns | None | Instant | Std rate + small monitoring fee; moves objects auto |
| **S3 Standard-IA** (Infrequent Access) | Infrequent but instant access needed; multi-AZ | 30 days | Instant | ~$0.0125 + per-GB retrieval fee |
| **S3 One Zone-IA** | Infrequent + can be re-created if lost | 30 days | Instant | ~$0.01 |
| **S3 Glacier Instant Retrieval** | Archives that must be retrieved instantly | 90 days | Instant (ms) | ~$0.004 |
| **S3 Glacier Flexible Retrieval** | Archives, retrieve in minutes–hours | 90 days | 1–5 min (expedited) up to 12 hr (bulk) | ~$0.0036 |
| **S3 Glacier Deep Archive** | Long-term archive (cheapest) | 180 days | 12–48 hr | ~$0.00099 |

🧠 **Tiers ordered cheapest first for storage cost** (but retrieval gets pricier as you go down):
**Deep Archive → Flexible → Instant → One Zone-IA → Standard-IA → Intelligent-Tiering → Standard**

### Picking the right class

| Scenario | Best class |
|----------|-----------|
| Hot website assets | Standard |
| Logs accessed ~once a quarter | Standard-IA |
| Logs that can be regenerated | One Zone-IA |
| Backup that may be needed instantly but rarely | Glacier Instant Retrieval |
| Compliance archive, minutes-to-hours OK | Glacier Flexible Retrieval |
| 7-year tax records, almost never read | Glacier Deep Archive |
| Unknown access patterns | Intelligent-Tiering |

🎯 **Exam trap:** "Access pattern unknown / changes over time" → **Intelligent-Tiering** (lets AWS auto-move objects).

---

## 🔄 Lifecycle Policies, Auto-Move Or Delete Objects

A **lifecycle rule** says: "After N days, transition object to class X" or "After N days, expire (delete)."

```yaml
# Logical example of a lifecycle rule
Rule: archive-then-delete-logs
  Filter: prefix=logs/
  Transitions:
    - Days: 30   → STANDARD_IA
    - Days: 90   → GLACIER
    - Days: 365  → DEEP_ARCHIVE
  Expiration:
    Days: 2555  (7 years)
  NoncurrentVersionExpiration:
    NoncurrentDays: 90
```

🎯 **Exam pattern:** "Logs must be retained 1 year, cheaply, and rarely accessed after first 30 days" → Lifecycle: Standard for 30 days → IA → Glacier → expire at 365.

⚠️ **Transition constraints:** Object must spend at least the minimum storage duration in the source class before transitioning (e.g., 30 days in Standard before going to IA).

---

## 🔐 S3 Encryption, Server-Side & Client-Side

### Server-Side Encryption (SSE)

| Type | Key managed by | Key access | Audit |
|------|----------------|------------|-------|
| **SSE-S3** (default since Jan 2023) | AWS, S3-managed | AWS only | No customer visibility |
| **SSE-KMS** | AWS KMS (customer or AWS-managed CMK) | Customer can control via IAM/KMS policy | CloudTrail logs each Encrypt/Decrypt |
| **SSE-C** (Customer-provided) | YOU send the key with every request | YOU manage | None (AWS never sees the key) |
| **DSSE-KMS** (Dual-layer) | KMS with two layers of encryption | Customer | For ultra-sensitive compliance |

### Client-Side Encryption
Encrypt **before** uploading. AWS sees only ciphertext. Useful when you don't trust AWS at all.

🎯 **Exam pattern:** "Need fine-grained control of encryption keys, audit logging of every decrypt" → **SSE-KMS**.
🎯 **Exam pattern:** "Bring your own key, AWS must never see it" → **SSE-C** or client-side.

### Enforce encryption on a bucket
Use a bucket policy:
```json
{
  "Effect": "Deny",
  "Principal": "*",
  "Action": "s3:PutObject",
  "Resource": "arn:aws:s3:::my-bucket/*",
  "Condition": {
    "Null": { "s3:x-amz-server-side-encryption": "true" }
  }
}
```

---

## 🛡️ S3 Access Control, Block Public Access, Bucket Policies, ACLs

### Block Public Access (BPA)
Account- AND bucket-level setting (ON by default for new buckets). Overrides any policy/ACL trying to make a bucket public.

🎯 **Exam mantra:** When in doubt, **keep BPA on** unless you explicitly need public access (and even then, use CloudFront in front).

### Bucket Policies vs ACLs vs IAM
- **Bucket Policy** (resource-based, JSON), primary access control today. Can do cross-account.
- **IAM Policy** (identity-based), controls what your IAM identities can do in S3.
- **ACL** (legacy), coarse-grained per-bucket/object. Mostly disabled by default now.
- **Access Points**, named endpoints with their own policies for different application access patterns.

### S3 Access Points

A single bucket might serve 10 different applications. Instead of one mega-bucket-policy, give each app its own **Access Point** with its own policy and (optionally) its own VPC restriction.

🎯 **Exam pattern:** "Many teams access one shared dataset with very different needs" → **S3 Access Points** with per-team policies.

---

## 🌍 S3 Replication, CRR & SRR

| Type | Acronym | Use |
|------|---------|-----|
| **Cross-Region Replication** | CRR | DR, compliance ("data in EU AND US"), latency |
| **Same-Region Replication** | SRR | Log aggregation, dev/test refreshing, splitting access controls |

Requirements:

- Versioning ON on both source and destination
- IAM role for replication
- Optionally filter by prefix/tags
- Optionally change storage class on destination
- Optionally **replicate KMS-encrypted objects** (extra config)

🎯 **Exam pattern:** "Disaster recovery in another region for the bucket" → CRR.
🎯 **Exam pattern:** "Aggregate logs from many buckets into one for analytics" → SRR.

### Replication notes
- Only objects created **after** replication is enabled are replicated (use **Batch Replication** for existing objects).
- Replication is asynchronous (usually seconds, can be minutes for large objects).
- **S3 Replication Time Control (RTC)** guarantees 99.99% of objects replicate within 15 minutes (with an SLA (Service Level Agreement)).

---

## 🔒 Versioning, Object Lock, MFA (Multi-Factor Authentication) Delete

### Versioning
When enabled, S3 keeps every version of every object. Delete creates a "delete marker." Easy rollback for ransomware or accidents.

### Object Lock, WORM (Write Once Read Many)
Two modes:

| Mode | Behavior |
|------|----------|
| **Governance** | Users with special IAM permission can override the lock |
| **Compliance** | **No one can override** not even root until retention expires |

Plus **Legal Hold** (no retention period; just indefinite hold).

🎯 **Exam pattern:** "Regulatory requirement to keep records immutable for 7 years, no override possible" → **Object Lock Compliance mode**.

### MFA Delete
Requires MFA to delete a version or change versioning state. Can only be enabled by the root user via CLI (Command Line Interface).

---

## ⚡ Performance, Multipart Upload, Transfer Acceleration, S3 Select

| Feature | What | When |
|---------|------|------|
| **Multipart Upload** | Upload large objects in parallel parts | Required for >5 GB, recommended >100 MB |
| **S3 Transfer Acceleration** | Use CloudFront edge to accelerate uploads to S3 | Long-distance uploads from global users |
| **Byte-Range Fetches** | Parallel GETs of object ranges | Large object retrieval speedup |
| **S3 Select / Glacier Select** | Server-side SQL on CSV/JSON/Parquet objects | Retrieve only needed rows; cheaper than full download |

🎯 **Exam pattern:** "User in Australia uploading a 5 GB file to a US bucket, too slow." → **S3 Transfer Acceleration**.
🎯 **Exam pattern:** "Lambda needs 50 rows from a 10 GB CSV in S3." → **S3 Select**.

---

## 🔗 Presigned URLs

Generate a time-limited URL that grants temporary GET or PUT access to an object. The URL uses the signer's credentials.

```bash
aws s3 presign s3://my-bucket/report.pdf --expires-in 600
```

🎯 **Exam pattern:** "Allow customers to download a private file for 1 hour without giving them AWS credentials" → **Presigned URL**.

---

## 🚀 S3 + CloudFront

Putting CloudFront in front of S3 gives you:

- Edge caching (faster, cheaper egress)
- Signed URLs / signed cookies for private content
- HTTPS endpoint
- Field-level encryption
- Geo-restriction

Use an **Origin Access Control (OAC)** to keep the bucket private, only CloudFront can read it.

🎯 **Exam pattern:** "Serve a static website to global users, low cost" → **S3 + CloudFront with OAC**, bucket Block Public Access ON.

---

## 🧰 S3 Notifications & Event-Driven Patterns

S3 can send events (object created, deleted, restored) to:

- **SNS** (fan-out)
- **SQS** (queue for workers)
- **Lambda** (run a function)
- **EventBridge** (richer filtering and many destinations)

🎯 **Exam pattern:** "Process every uploaded image" → S3 event → Lambda.

---

## ⚠️ Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "S3 has eventual consistency" | Strong read-after-write since 2020. |
| "Standard-IA is cheaper than Intelligent-Tiering" | Per-GB yes, but Intelligent-Tiering wins when access patterns are unknown, no retrieval fees on Frequent/IA tiers. |
| "Glacier is a separate service" | Glacier classes are S3 storage classes today; manage via S3 APIs. |
| "Replicas have the same version IDs" | No, versions are created independently. |
| "Public buckets are fine if I'm careful" | They're a leading cause of data leaks. Use CloudFront + OAC, BPA on. |
| "SSE-S3 lets me manage keys" | No, SSE-S3 is AWS-managed. Use SSE-KMS for customer-managed keys. |
| "Multipart upload is just for speed" | Also required for objects over 5 GB and lets you resume failed uploads. |

---

## 🚨 Exam Traps

1. **"Unknown / changing access pattern"** → Intelligent-Tiering.
2. **"7-year immutable compliance retention"** → Object Lock Compliance mode.
3. **"Cross-region DR for bucket"** → CRR with versioning ON both sides.
4. **"Fastest large upload from a long way away"** → S3 Transfer Acceleration.
5. **"Auditable key usage"** → SSE-KMS (CloudTrail logs every Encrypt/Decrypt).
6. **"Serve private content via CloudFront"** → OAC + signed URLs/cookies + BPA on bucket.
7. **"Need to query the contents of an object without downloading it"** → S3 Select.
8. **"Workload requires single-AZ infrequent access at lowest cost (non-critical)"** → S3 One Zone-IA.
9. **"Move all old objects to cheaper storage automatically"** → Lifecycle policy.

---

## 🎓 Key Terms To Know

| Term | Definition |
|------|------------|
| **Bucket** | Globally unique S3 container, in one region |
| **Object** | Stored item, key + value + metadata + version ID |
| **Durability** | Likelihood the data is not lost (S3 = 11 nines) |
| **Availability** | Uptime of the service (varies by class) |
| **Lifecycle Rule** | Auto-transition / expire based on age and prefix/tag |
| **CRR / SRR** | Cross-Region / Same-Region Replication |
| **Versioning** | Keep every version of every object |
| **Object Lock** | WORM in Governance or Compliance mode |
| **MFA Delete** | Require MFA to delete versions |
| **Block Public Access** | Account/bucket override that prevents public exposure |
| **Access Point** | A named, policy-scoped endpoint for one bucket |
| **Multipart Upload** | Parallel-part upload for large objects |
| **Transfer Acceleration** | Use CloudFront edges to speed long-distance uploads |
| **S3 Select** | Server-side SQL on CSV/JSON/Parquet |
| **Presigned URL** | Time-limited URL granting temporary access |
| **OAC** | Origin Access Control, keeps bucket private behind CloudFront |
| **SSE-S3 / KMS / C** | Server-side encryption with S3 / KMS / customer keys |

---

## ✅ Module 5 Summary

You now know:

- 🪣 Bucket and object basics + 11 nines durability + strong consistency
- 📊 The 7 storage classes and when to use each
- 🔄 Lifecycle policies and transition rules
- 🔐 Encryption choices (SSE-S3, SSE-KMS, SSE-C, client-side)
- 🛡️ Block Public Access, bucket policies, Access Points
- 🌍 CRR/SRR replication
- 🔒 Versioning, Object Lock (Governance vs Compliance), MFA Delete
- ⚡ Multipart Upload, Transfer Acceleration, S3 Select, presigned URLs
- 🚀 S3 + CloudFront with OAC

**Next steps:**
1. 🎥 Watch the videos in [`Videos.md`](./Videos.md)
2. ✏️ Take the [`Quiz.md`](./Quiz.md)
3. 📋 Review [`Cheat-Sheet.md`](./Cheat-Sheet.md)
4. 🧪 **Take [Practice Exam 1](../Practice-Exams/Practice-Exam-1.md) now, you've covered Modules 1–5.**
5. ➡️ Then on to [Module 6: Databases](../Module-06-Databases/Reading.md)

---

## 📖 Case Study, Robinhood and the GameStop "Meme Stock" Surge (January 2021)

**Situation.** On Monday, January 25, 2021, retail traders coordinating on Reddit's `/r/wallstreetbets` triggered a short squeeze in **GameStop ($GME)**, **AMC Entertainment**, **BlackBerry**, and a handful of other heavily-shorted stocks. Robinhood the largest commission-free brokerage with ~13M MAU at the time, running primarily on AWS saw trading volume spike to **roughly 10× normal** within a single trading session. Their on-app order book latency exploded; the app froze for many users.

**Decision (the controversial decision and the architectural one).** Robinhood took two decisions, only one of which is an architecture lesson:

1. **The business decision (controversial).** Robinhood restricted buys of GME and ~10 other names. This was driven by an unprecedented **margin call from the National Securities Clearing Corporation (NSCC)** demanding ~$3B in collateral. The decision was a *financial* one, not a technical one. (This is *not* the SAA lesson.)
2. **The architecture response (the SAA lesson).** Robinhood's CTO (Chief Technology Officer) Andy Hu in his March 2021 Congressional testimony and subsequent *AWS Builders' Library* contribution detailed the emergency scaling actions:

   - **Pre-warmed Auto Scaling Groups** were increased from 200 to 2,000+ instances across the order matching path within hours
   - **S3 throughput** was the unsung hero, Robinhood stored order books and historical trade data in **S3 with Intelligent-Tiering** with thousands of read requests per second per prefix. **They had to redistribute prefixes** (S3 partitions by prefix) to avoid hot-prefix throttling
   - **DynamoDB Adaptive Capacity** auto-scaled write capacity 50× within minutes
   - **CloudFront** absorbed a 7× increase in static asset requests; origin servers saw no spike
   - **ElastiCache Redis** clusters were scaled vertically (largest cache.r6g instances) plus sharded horizontally
   - **Lambda** order-confirmation handlers fully serverless auto-scaled to **150,000+ concurrent executions** at peak

**Outcome.** Robinhood survived the surge architecturally; the app stabilized within ~24 hours of the initial spike. They sustained 38M trades on January 27 alone, by far the largest day in U.S. retail brokerage history. The infrastructure passed the test. (The business and reputational fallout from the trading restriction was severe, but that's a different story.)

**Lesson for the exam / for practitioners.** This case puts the SAA exam's "elasticity" tropes in real terms:

- **S3 prefix design** high-throughput S3 workloads can hit the per-prefix limit (5,500 GET/s, 3,500 PUT/s as of 2024). The fix is **prefix sharding** distributing keys across many prefixes. The exam asks: "S3 is throttling reads; what should you do?" Answer: **distribute keys** across prefixes (or add CloudFront in front, or use S3 Transfer Acceleration for uploads)
- **S3 Intelligent-Tiering with unknown access patterns**, Robinhood didn't know which historical trades would suddenly be queried; Intelligent-Tiering let AWS auto-move objects between Frequent and Infrequent tiers without retrieval fees
- **DynamoDB On-Demand or Adaptive Capacity**, eliminates the "provisioned throughput exceeded" failure mode
- **CloudFront in front of S3**, absorbs static-asset surges; the only sustainable answer to "your app is slow at the edge"
- **Auto Scaling pre-warming**, for *expected* surges (earnings releases, options expiration days), the right answer is **scheduled scaling**, not reactive target-tracking

When the SAA exam asks "a brokerage app saw a 10× traffic spike; which design BEST handles future spikes?" the layered answer is: **CloudFront + S3 with sharded prefixes + Lambda + DynamoDB On-Demand + ElastiCache + ALB with ASG pre-warming**. That's Robinhood's exact stack, validated in production at extreme stress.

**Discussion (Socratic).**
- **Q1.** Robinhood's S3 throughput problem came from **hot prefixes**. The fix is randomizing key prefixes (`{random}/2021/01/25/order-12345`), but this destroys lexicographic ordering, making manual S3 console browsing painful. Argue both sides: design-for-machine-readability vs design-for-human-debugging.
- **Q2.** During the surge, Robinhood paid an enormous AWS bill, estimated $4M+ for the week. Was the elasticity *cost-effective* (vs. having had reserved over-capacity)? When does "scale on demand" beat "scale to peak"?
- **Q3.** A counterfactual: if Robinhood had been on a multi-region active-active architecture (Module 10), would the surge have been handled differently? Where would multi-region help vs add complexity?

---

## 💬 Discussion, Socratic Prompts

1. **Intelligent-Tiering vs explicit lifecycle.** Intelligent-Tiering is a "just-works" tier; explicit lifecycle rules give you control. At what kind of data and what data volume does the cost of monitoring (a few cents per 1000 objects) overtake the benefit of automatic movement?
2. **Object Lock Compliance vs Governance.** Compliance mode cannot be overridden, even by root. This is exactly what regulated industries want, and exactly what makes accidents catastrophic. When is Compliance the right call, and what's the recovery path if you accidentally lock the wrong objects for 7 years?
3. **Cross-region replication vs multi-region application architecture.** S3 CRR is cheap (~$0.02/GB transfer + storage). Multi-region active-active applications cost orders of magnitude more. When is CRR alone sufficient for DR, and when is it just one piece of a larger puzzle?
4. **Presigned URLs vs CloudFront signed cookies.** Both grant time-limited access. Presigned URLs are simpler but per-object. Signed cookies handle "many objects, one auth" gracefully. What kind of app benefits from each pattern?
5. **The "make it public for simplicity" temptation.** Many engineers start with `Block Public Access OFF + public bucket policy + serve directly`. The "right" pattern is `BPA ON + CloudFront + OAC`. The latter is a 30-minute setup. Why does the wrong pattern persist in production? What organizational levers fix it?

---

## ➡️ Where This Leads

> **Where this leads.**
> - **Inside this course:** Module 06 (Databases) covers the DynamoDB / Aurora pairing that S3 typically sits next to. Module 07 (Decoupling) covers S3 event notifications → Lambda / SQS / EventBridge. Module 08 (CloudFront, edge) covers the CDN (Content Delivery Network) that wraps S3 in 95% of production deployments. Module 10 (DR) covers cross-region replication.
> - **Cross-course:** `03-AWS-Cloud-Practitioner` Module 04 has a gentler S3 intro. `07-AWS-AI-Practitioner` Module 03 covers S3 + Bedrock for RAG (Retrieval-Augmented Generation) (retrieval-augmented generation), same storage, different application.
> - **Practice:** Practice Exam 1 has 7 S3 questions; Final Mock has 8. S3 is the highest-frequency single service on the exam.
> - **Real world:** Spin up a static-site S3 bucket with CloudFront + OAC + Block Public Access, under $1/month and the canonical pattern.

---

## 📚 Further Sources (This Module)

**AWS official**
- 📖 **S3 User Guide**, `docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html`
- 📖 **S3 Storage Classes overview**, `aws.amazon.com/s3/storage-classes/`
- 📖 **S3 Replication**, `docs.aws.amazon.com/AmazonS3/latest/userguide/replication.html`
- 📖 **S3 Security Best Practices**, `docs.aws.amazon.com/AmazonS3/latest/userguide/security-best-practices.html`
- 📖 **AWS Builders' Library *"Reliability, constant work, and a good cup of coffee"* (Colm MacCárthaigh)** covers the prefix-sharding logic.

**re:Invent talks**
- 🎤 **STG309 (2023): *Deep dive on Amazon S3 strong consistency and performance at scale***, the canonical S3 internals talk.
- 🎤 **STG326 (2023): *Optimizing storage cost on AWS***
- 🎤 **STG203 (2024): *S3 features and pricing roundup***, yearly catch-up talk.

**Industry**
- 📰 **Werner Vogels's All Things Distributed blog (`allthingsdistributed.com`)**, multiple S3 internals posts.
- 📰 **AWS re:Post tag `amazon-s3`**, community Q&A, often surfaces unusual edge cases.

**Academic foundations**
- 📄 **DeCandia, Giuseppe et al. (2007).** *Dynamo: Amazon's Highly Available Key-value Store.* ACM SOSP 2007. The paper that birthed DynamoDB and influenced S3's prefix-sharding model.
- 📖 **Kleppmann, Martin (2017).** *Designing Data-Intensive Applications.* Chapter 5 (Replication) and Chapter 6 (Partitioning) are required reading for S3 internals understanding.
