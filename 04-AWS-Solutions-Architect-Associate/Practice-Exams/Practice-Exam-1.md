# 🧪 Practice Exam 1, AWS Solutions Architect Associate (SAA-C03)

> **Conditions:** Set a 65-minute timer. 32 questions. Treat it like the real thing, no notes, no Google.
> **Pass mark:** 23/32 (72%)
> Take this AFTER finishing Modules 1–5.

---

## 📝 Questions

### 1. A company needs to host a static website that serves global users with low latency and HTTPS. The bucket must NOT be publicly accessible. What is the BEST solution?
A. Make the S3 bucket public; users access directly
B. Direct Connect from on-prem
C. EC2 instance hosting nginx in a public subnet
D. CloudFront in front of a private S3 bucket using Origin Access Control (OAC); Block Public Access on the bucket

### 2. An EC2 application running in a private subnet must read objects from an S3 bucket while minimizing data-transfer cost. What should the architect do?
A. Route via a NAT Gateway
B. Use Direct Connect
C. Make the bucket public
D. Create a Gateway VPC Endpoint for S3

### 3. A team needs strict order and exactly-once processing for financial transactions. Which service should they use?
A. SQS Standard
B. SNS
C. SQS FIFO
D. Kinesis Firehose

### 4. A workload runs steadily 24/7 for the next 3 years on a known instance type. The MOST cost-effective purchase option is:
A. On-Demand
B. Reserved Instance, Standard, 3-year, all upfront
C. Spot
D. Capacity Reservation

### 5. A company has 30 AWS accounts. Developers need SSO with role-based permissions across all of them. The BEST solution is:
A. IAM users in each account
B. IAM Identity Center federated to the corporate IdP
C. Sharing the root user
D. Multiple Direct Connect links

### 6. A company stores logs in S3. Logs are accessed daily for 30 days, weekly for 90 days, then almost never. To minimize cost while keeping logs available, the architect should:
A. Create a lifecycle policy: Standard → Standard-IA after 30 days → Glacier after 120 days
B. Use S3 Standard for all logs forever
C. Delete logs after 30 days
D. Use One Zone-IA only

### 7. An EC2 application needs an IAM role to write to a DynamoDB table. The BEST practice is to:
A. Bake long-term access keys into the AMI
B. Store keys in a Secrets Manager and fetch with no role
C. Pass keys via user-data
D. Attach an IAM role to the instance via an instance profile

### 8. A multi-account organization must prevent users from disabling CloudTrail in any account. The BEST mechanism is:
A. A bucket policy on the log bucket
B. An IAM policy in each account
C. A Service Control Policy denying `cloudtrail:StopLogging` and `cloudtrail:DeleteTrail`
D. Network firewall rules

### 9. A workload needs to survive an Availability Zone failure with automatic database failover. The simplest design uses:
A. Single-AZ RDS
B. RDS Multi-AZ
C. Cross-region Read Replica
D. EBS snapshots only

### 10. A workload needs to scale read traffic for a PostgreSQL database. The BEST approach is:
A. Multi-AZ deployment
B. Read Replicas
C. Larger instance
D. Add DynamoDB

### 11. A company runs Cassandra and wants to ensure that rack failure does not take down multiple replicas. EC2 instances should be placed in a:
A. Cluster placement group
B. Spread placement group
C. Default placement
D. Partition placement group

### 12. An app in VPC-A in Account 111 must privately call a partner microservice running on an NLB in VPC-B in Account 222 (different organization). The BEST approach is:
A. AWS PrivateLink (Endpoint Service + Interface Endpoint)
B. Site-to-Site VPN
C. VPC peering
D. Make it public

### 13. A 3rd-party SaaS vendor needs read-only access to specific S3 prefixes in a customer's account. The BEST design is:
A. Share the customer's root credentials
B. Create an IAM user for the vendor and share access keys
C. Make the bucket public
D. Create an IAM role with the vendor's AWS account as principal and an ExternalId condition

### 14. A company runs a fault-tolerant batch processing job. To minimize cost, the architect should use:
A. Spot Instances (with checkpointing)
B. Reserved Instances
C. On-Demand
D. Dedicated Hosts

### 15. A workload requires shared file storage accessible by EC2 instances in two AZs. The BEST option is:
A. EBS multi-attach
B. Instance Store
C. EFS
D. S3 mounted as a file system

### 16. To deliver content to users in 200 countries with the lowest latency and DDoS protection:
A. EC2 in one region
B. NAT Gateway
C. CloudFront with AWS Shield Standard (free) and optional WAF
D. Direct Connect

### 17. A company wants 7-year immutable retention on records, with no user (including root) able to override during retention. The BEST configuration is:
A. S3 Versioning only
B. S3 Object Lock in Governance mode
C. S3 Object Lock in Compliance mode
D. MFA Delete

### 18. To allow customers to download private S3 files for the next 60 minutes without giving them AWS credentials:
A. Make the object public
B. Generate a presigned URL with 1-hour expiry
C. Use Direct Connect
D. Add them to IAM

### 19. A company connects 12 VPCs and 2 on-prem data centers. The BEST routing solution is:
A. Mesh of VPC peerings
B. AWS Transit Gateway with VPN/DX attachments
C. Internet Gateway in each VPC
D. CloudFront

### 20. To allow only the application load balancer to reach the EC2 instances on port 80:
A. Disable IAM
B. Use a NACL deny rule for all other IPs
C. Place the LB in a private subnet
D. Add a Security Group on EC2 allowing port 80 from the LB's Security Group

### 21. Encrypting an existing UNENCRYPTED RDS instance is done by:
A. Creating a snapshot, copying it as encrypted, and restoring
B. Toggling encryption on the live instance
C. Migrating to DynamoDB
D. Using SSL only

### 22. A workload requires path-based routing (e.g., `/api/*` → service A, `/web/*` → service B). The BEST load balancer is:
A. Network Load Balancer
B. Application Load Balancer
C. Gateway Load Balancer
D. Classic LB

### 23. To enforce that all S3 PUT requests use server-side encryption with KMS:
A. CloudFront
B. Block Public Access
C. Bucket policy denying PUTs without `s3:x-amz-server-side-encryption: aws:kms`
D. NACL

### 24. The exam's MOST common cost-optimization pattern when private subnets are reading large volumes from S3 is:
A. Use a Gateway VPC Endpoint for S3 (free, bypasses NAT)
B. Add a NAT Gateway in every AZ
C. Use Direct Connect
D. Use Global Accelerator

### 25. A company wants to centrally apply a region restriction across all accounts in their Organization. The BEST mechanism is:
A. AWS WAF rule
B. An IAM policy applied per user
C. A Service Control Policy using `aws:RequestedRegion` condition
D. NACL

### 26. An ASG launches new instances but they take 3 minutes to be ready to receive traffic. To prevent the LB from sending traffic too early, configure:
A. A health check grace period and use ELB health checks on the ASG
B. Increase the desired count
C. Spot instances
D. Failover routing

### 27. A company wants to replicate an S3 bucket's contents to another region for disaster recovery. The required pre-conditions include:
A. NAT Gateway
B. CloudFront distribution
C. Direct Connect
D. Versioning enabled on both source and destination

### 28. A customer's bucket policy is set up correctly but a CloudFront distribution still returns 403 errors when accessing objects. The MOST likely fix is:
A. Configure Origin Access Control (OAC) on the distribution and update the bucket policy to allow the distribution
B. Make the bucket public
C. Use NAT Gateway
D. Disable Block Public Access

### 29. An application's read pattern is hot (~80% reads) on a few rows in DynamoDB and needs single-digit MICROSECOND read latency. The BEST addition is:
A. ElastiCache Redis
B. DAX (DynamoDB Accelerator)
C. CloudFront
D. Aurora Read Replicas

### 30. Static IPs for ingress whitelisting and ultra-low latency for a TCP service across multiple regions:
A. NLB with Global Accelerator
B. ALB
C. CloudFront
D. NAT Gateway

### 31. A company has IT compliance requiring that data stays only in EU regions. The BEST control is:
A. Use only us-east-1
B. Use Direct Connect
C. Apply an SCP that denies API calls where `aws:RequestedRegion` is not in `[eu-central-1, eu-west-1, ...]`
D. Add a CloudFront geo-restriction

### 32. A company wants to identify oversized EC2 instances that could be downsized. The BEST tool is:
A. CloudTrail
B. Detective
C. WAF
D. AWS Compute Optimizer (free, ML-based)

---

## 🎯 Answer Key (No Cheating!)

```
1.  D    9.  B    17. C    25. C
2.  D    10. B    18. B    26. A
3.  C    11. D    19. B    27. D
4.  B    12. A    20. D    28. A
5.  B    13. D    21. A    29. B
6.  A    14. A    22. B    30. A
7.  D    15. C    23. C    31. C
8.  C    16. C    24. A    32. D
```

---

## Detailed answer rationales

> Read this after you score. The discipline is to understand **why each wrong answer is a tempting distractor**, that's how the SAA exam is built.

**Q1. Answer: D, CloudFront in front of a private S3 bucket using OAC; Block Public Access on the bucket**

**Why D is correct.** CloudFront caches globally (low latency), terminates HTTPS, and OAC + Block Public Access keeps the bucket private. This is the canonical AWS pattern documented in the *CloudFront Developer Guide* (2023 OAC update).

**Why the other options are wrong.**
- A: Public S3 bypasses CloudFront's caching and DDoS protection. Public buckets are also the leading source of S3 data leaks (Verizon DBIR 2023 cited 22% of cloud breaches).
- B: Direct Connect is on-prem ↔ AWS private fiber, irrelevant for serving content to global *internet* users.
- C: EC2 + nginx in a public subnet adds operational overhead and provides no global edge caching. Costs more and serves slower.

**Exam-takeaway.** "Global users + static content + private origin" = CloudFront + OAC + BPA-on. Memorize this triplet.

---

**Q2. Answer: D, Gateway VPC Endpoint for S3**

**Why D is correct.** Gateway endpoints for S3 are **free**, keep traffic on the AWS internal network, and bypass NAT data-processing charges. This is the highest-frequency cost-cut question on SAA.

**Why the other options are wrong.**
- A: NAT Gateway costs $0.045/GB processed + $0.045/hour. For private-subnet → S3 traffic this is pure waste when a free Gateway Endpoint exists.
- B: Direct Connect is for on-prem ↔ AWS; it doesn't apply to VPC-internal traffic.
- C: Public buckets are a security anti-pattern.

**Exam-takeaway.** Private subnet + S3 + minimize cost = Gateway VPC Endpoint (free).

---

**Q3. Answer: C, SQS FIFO**

**Why C is correct.** Financial transactions need **strict ordering** and **exactly-once** delivery (within a 5-minute deduplication window). FIFO queues guarantee both. SQS Standard provides at-least-once; FIFO provides exactly-once.

**Why the other options are wrong.**
- A: SQS Standard delivers in best-effort order with at-least-once semantics, duplicates can occur, and order is not guaranteed.
- B: SNS is pub/sub; it doesn't provide ordering or exactly-once on the consumer side without additional infrastructure.
- D: Kinesis Firehose buffers and writes to S3/Redshift; it's not a transactional message queue.

**Exam-takeaway.** "Strict order + exactly-once" → SQS FIFO every time.

---

**Q4. Answer: B, Reserved Instance, Standard, 3-year, all upfront**

**Why B is correct.** 3-year Standard RI with all-upfront payment yields up to **72% off** On-Demand. For a steady-state 24/7 workload with a known instance type, this is the deepest discount.

**Why the other options are wrong.**
- A: On-Demand is full retail price, wrong for any predictable workload.
- C: Spot can be reclaimed; bad for a steady production workload.
- D: Capacity Reservation guarantees availability but provides no billing discount.

**Exam-takeaway.** 24/7 + 3 years + known type = 3-year Standard RI, all-upfront.

---

**Q5. Answer: B, IAM Identity Center federated to the corporate IdP**

**Why B is correct.** Identity Center (formerly AWS SSO) + IdP federation gives one login → many AWS accounts → role-based permission sets. AWS's recommended modern pattern.

**Why the other options are wrong.**
- A: IAM users per account = 30 accounts × N developers = hundreds of users with rotating keys. Operational nightmare.
- C: Sharing root is a security catastrophe.
- D: Direct Connect is a network link, not a permissions mechanism.

**Exam-takeaway.** Multi-account SSO + IdP federation = Identity Center.

---

**Q6. Answer: A, Standard → IA after 30 days → Glacier after 120 days**

**Why A is correct.** S3 lifecycle policies must respect minimum storage duration in source class (Standard has none, but Standard-IA requires 30 days before further transition). 30 days hot → IA → Glacier matches the cost-cliff stepping pattern.

**Why the other options are wrong.**
- B: Standard forever wastes money, IA is half the price for infrequent access.
- C: Deleting logs after 30 days violates compliance "log retention" implicit requirements.
- D: One Zone-IA loses an AZ-worth of resilience; bad default unless data is reproducible.

**Exam-takeaway.** Lifecycle = "Standard → IA (30d) → Glacier (90d+) → expire" is the canonical pattern.

---

**Q7. Answer: D, Attach an IAM role to the instance via an instance profile**

**Why D is correct.** Instance profiles give EC2 short-lived, auto-rotated credentials via the metadata service. This is least privilege without key management.

**Why the other options are wrong.**
- A: Baking long-term keys into AMIs is the Capital One 2019 breach pattern, explicitly bad.
- B: Secrets Manager works for app-level secrets but requires the app to call it; an IAM role is simpler and AWS's recommendation.
- C: User-data is logged and accessible via the EC2 metadata service, credentials in user-data leak.

**Exam-takeaway.** EC2 → AWS service = IAM role via instance profile. Never long-term keys.

---

**Q8. Answer: C, Service Control Policy denying `cloudtrail:StopLogging` and `cloudtrail:DeleteTrail`**

**Why C is correct.** SCPs are the only mechanism that caps permissions for *every* identity in *every* account in an Org, including each account's root user. The denial pattern is the standard answer to "prevent X across all accounts."

**Why the other options are wrong.**
- A: Bucket policies don't prevent disabling CloudTrail; they prevent log tampering.
- B: IAM policy per account requires manually applying to every user, drift inevitable.
- D: Network firewalls don't control IAM API calls.

**Exam-takeaway.** Org-wide guardrail = SCP. Always.

---

**Q9. Answer: B, RDS Multi-AZ**

**Why B is correct.** Multi-AZ provides synchronous standby + automatic CNAME failover within 60–120 seconds on AZ failure.

**Why the other options are wrong.**
- A: Single-AZ has no failover, full downtime on AZ outage.
- C: Cross-region Read Replica requires manual promotion; doesn't auto-failover for AZ failure.
- D: Snapshots are point-in-time backups; restoration takes minutes-to-hours.

**Exam-takeaway.** AZ failure + auto-failover = Multi-AZ.

---

**Q10. Answer: B, Read Replicas**

**Why B is correct.** Read Replicas scale read traffic by replicating asynchronously. Apps point reads at replica endpoints.

**Why the other options are wrong.**
- A: Multi-AZ standby is *invisible* to applications, does not serve reads (the newer Multi-AZ Cluster mode is an exception for MySQL/PostgreSQL, but the simpler answer here is read replicas).
- C: Bigger instance helps a little but doesn't horizontally scale.
- D: DynamoDB is the wrong data model for a PostgreSQL workload.

**Exam-takeaway.** Read scaling = Read Replicas. Multi-AZ = HA.

---

**Q11. Answer: D, Partition placement group**

**Why D is correct.** Partition groups put each partition on separate racks; Cassandra/Kafka/HDFS know how to map their replicas across partitions to survive rack failure.

**Why the other options are wrong.**
- A: Cluster places instances on the same rack, opposite of what's needed.
- B: Spread limits to 7 instances per AZ; insufficient for a large Cassandra cluster.
- C: Default placement provides no isolation guarantees.

**Exam-takeaway.** Cassandra / Kafka / HDFS = Partition placement group.

---

**Q12. Answer: A, AWS PrivateLink (Endpoint Service + Interface Endpoint)**

**Why A is correct.** PrivateLink exposes a single service across accounts/orgs via Interface Endpoints, no VPC peering or full network connectivity required. Most narrowly-scoped private access pattern.

**Why the other options are wrong.**
- B: Site-to-Site VPN traverses internet (or DX) and provides full network connectivity, overkill for one microservice.
- C: VPC peering creates full network connectivity between VPCs, including IP-overlap concerns.
- D: Public internet exposes the service to the world.

**Exam-takeaway.** Expose one service across accounts privately = PrivateLink.

---

**Q13. Answer: D, IAM Role with vendor's AWS account as principal + ExternalId condition**

**Why D is correct.** Cross-account access for third parties = role with `Principal: AWS: <vendor-account-arn>` + `Condition: sts:ExternalId`. The ExternalId solves the "confused deputy" problem from Hardy (1988).

**Why the other options are wrong.**
- A: Sharing root credentials is a security catastrophe.
- B: IAM user with shared keys = long-term credentials = exam wrong answer.
- C: Public S3 bucket exposes data globally.

**Exam-takeaway.** Third-party vendor access = role + ExternalId.

---

**Q14. Answer: A, Spot Instances (with checkpointing)**

**Why A is correct.** Spot is up to 90% off; fault-tolerant batch with checkpointing handles the 2-minute interruption notice gracefully.

**Why the other options are wrong.**
- B: Reserved Instances require commitment; the workload is described as "fault-tolerant", meaning it can use Spot.
- C: On-Demand is full retail, no discount for a workload that *can* tolerate Spot.
- D: Dedicated Hosts are for licensing/compliance isolation, irrelevant.

**Exam-takeaway.** Fault-tolerant batch = Spot Fleet with mixed instance types.

---

**Q15. Answer: C, EFS**

**Why C is correct.** EFS is shared NFS file storage with mount targets in each AZ, multi-AZ, multi-instance read-write.

**Why the other options are wrong.**
- A: EBS Multi-Attach is single-AZ only (same AZ, multiple instances).
- B: Instance Store is per-instance ephemeral.
- D: S3 mounted as FS (e.g., s3fs) lacks POSIX semantics and standard file-system performance.

**Exam-takeaway.** Shared FS across AZs = EFS.

---

**Q16. Answer: C, CloudFront with AWS Shield Standard (free) and optional WAF**

**Why C is correct.** CloudFront's 600+ edge locations + Shield Standard (free) + WAF for layer-7 attacks = the standard global-content + DDoS protection stack.

**Why the other options are wrong.**
- A: Single-region EC2 has no edge presence and no built-in DDoS protection.
- B: NAT Gateway is for outbound from private subnets, not user-facing.
- D: Direct Connect is for private hybrid networking, irrelevant for public users.

**Exam-takeaway.** Global low-latency + DDoS = CloudFront + Shield (+ WAF).

---

**Q17. Answer: C, S3 Object Lock in Compliance mode**

**Why C is correct.** Compliance mode prevents *any* user including root from deleting or modifying locked objects until retention expires.

**Why the other options are wrong.**
- A: Versioning alone doesn't prevent deletion; you can delete versions.
- B: Governance mode allows users with special permission to override, fails the "no one including root" requirement.
- D: MFA Delete requires MFA to delete; not the same as preventing deletion outright.

**Exam-takeaway.** Immutable, 7-year, no override = Object Lock Compliance.

---

**Q18. Answer: B, Presigned URL with 1-hour expiry**

**Why B is correct.** Presigned URLs grant time-bound access to private objects without distributing AWS credentials. The signer's IAM identity is encoded.

**Why the other options are wrong.**
- A: Public objects expose to the world.
- C: Direct Connect is a network link; irrelevant for end-user file download.
- D: Adding random customers to IAM doesn't scale.

**Exam-takeaway.** Time-limited private download = presigned URL.

---

**Q19. Answer: B, AWS Transit Gateway with VPN/DX attachments**

**Why B is correct.** TGW provides hub-and-spoke routing for 12 VPCs and 2 on-prem; replaces what would be 12×11/2 = 66 peering connections.

**Why the other options are wrong.**
- A: Mesh of peerings = 66 connections, unmanageable.
- C: IGWs in each VPC enable public internet, not VPC-to-VPC routing.
- D: CloudFront is a CDN, not a network router.

**Exam-takeaway.** Many VPCs + on-prem = Transit Gateway.

---

**Q20. Answer: D, Security Group on EC2 allowing port 80 from LB's Security Group**

**Why D is correct.** SG-as-source (referencing the LB's SG) is the AWS-native, dynamic way to allow only the LB. Adding/removing LBs doesn't require IP changes.

**Why the other options are wrong.**
- A: Disabling IAM is unrelated and catastrophic.
- B: NACLs are stateless and require return-traffic rules; SG is cleaner.
- C: LB in private subnet doesn't address SG/NACL.

**Exam-takeaway.** Allow-only-LB = SG referencing LB's SG.

---

**Q21. Answer: A, Snapshot → copy as encrypted → restore**

**Why A is correct.** RDS doesn't allow in-place encryption toggle. The standard pattern is: snapshot, copy snapshot with encryption enabled, restore from encrypted snapshot.

**Why the other options are wrong.**
- B: There's no console toggle to encrypt in place.
- C: DynamoDB is a different data model; not a workaround.
- D: SSL is in-transit encryption, not at-rest.

**Exam-takeaway.** Encrypt unencrypted RDS = snapshot-copy-encrypted-restore.

---

**Q22. Answer: B, Application Load Balancer**

**Why B is correct.** Path-based routing (e.g., `/api/*` vs `/web/*`) is an ALB layer-7 feature. NLB is layer-4 and has no concept of HTTP paths.

**Why the other options are wrong.**
- A: NLB routes TCP/UDP; no path awareness.
- C: GWLB is for inserting 3rd-party appliances at layer 3/4; not application routing.
- D: Classic LB is the legacy option; ALB is preferred for new designs.

**Exam-takeaway.** Path-based routing = ALB.

---

**Q23. Answer: C, Bucket policy denying PUTs without `s3:x-amz-server-side-encryption: aws:kms`**

**Why C is correct.** Bucket policies are the right enforcement layer for *every* PUT to the bucket regardless of caller identity. The `Null` condition on the SSE header pattern denies unencrypted uploads.

**Why the other options are wrong.**
- A: CloudFront is the delivery layer, not access policy.
- B: Block Public Access prevents public exposure, not encryption enforcement.
- D: NACLs are network-layer; they don't see HTTP headers.

**Exam-takeaway.** Enforce upload encryption = bucket policy with SSE-KMS condition.

---

**Q24. Answer: A, Gateway VPC Endpoint for S3 (free, bypasses NAT)**

**Why A is correct.** Same answer as Q2, eliminates NAT data-processing charges for private-subnet → S3 traffic. The single most-tested cost-optimization pattern on SAA.

**Why the other options are wrong.**
- B: More NAT Gateways = more cost, not less.
- C: Direct Connect is on-prem ↔ AWS, not VPC-internal.
- D: Global Accelerator is for ingress, not S3 reads from EC2.

**Exam-takeaway.** Private subnet + heavy S3 reads = Gateway VPC Endpoint.

---

**Q25. Answer: C, SCP using `aws:RequestedRegion` condition**

**Why C is correct.** Region restriction across many accounts = SCP. The `aws:RequestedRegion` condition denies API calls outside an allowed list.

**Why the other options are wrong.**
- A: WAF is layer-7 web filtering, not API region restriction.
- B: Per-user IAM policy doesn't scale or apply to roles/services.
- D: NACL is network-layer; doesn't filter by API region.

**Exam-takeaway.** Region lockdown across accounts = SCP with `aws:RequestedRegion`.

---

**Q26. Answer: A, Health check grace period + ELB health checks on the ASG**

**Why A is correct.** Grace period gives the instance time to come up before health checks start; ELB health checks ensure the LB isn't sending traffic to a not-yet-ready instance.

**Why the other options are wrong.**
- B: Increasing desired count doesn't fix the warm-up issue.
- C: Spot vs On-Demand is irrelevant.
- D: Failover routing is a Route 53 DNS pattern; not the ASG/LB level.

**Exam-takeaway.** Slow-starting app + ASG + LB = grace period + ELB health check on ASG.

---

**Q27. Answer: D, Versioning enabled on both source and destination**

**Why D is correct.** S3 Replication has versioning as a hard prerequisite on *both* buckets, AWS documentation explicitly requires it.

**Why the other options are wrong.**
- A: NAT Gateway is unrelated to replication.
- B: CloudFront is delivery, not replication.
- C: Direct Connect is hybrid networking, not S3 replication.

**Exam-takeaway.** S3 replication prerequisite = versioning on source + destination.

---

**Q28. Answer: A, OAC + updated bucket policy**

**Why A is correct.** Bucket policy correctness *and* OAC configuration are both required. CloudFront uses OAC to sign requests; the bucket policy must allow that specific OAC-signed principal.

**Why the other options are wrong.**
- B: Public bucket defeats the purpose of OAC.
- C: NAT Gateway is unrelated.
- D: Disabling Block Public Access opens the bucket, the opposite of what's safe.

**Exam-takeaway.** CloudFront 403 to private S3 = OAC + matching bucket policy.

---

**Q29. Answer: B, DAX (DynamoDB Accelerator)**

**Why B is correct.** DAX provides single-digit *microsecond* reads for cached DynamoDB items, purpose-built and transparent (same API).

**Why the other options are wrong.**
- A: ElastiCache Redis is millisecond-class, not microsecond.
- C: CloudFront is edge cache for HTTP; not DynamoDB.
- D: Aurora Read Replicas serve RDS, not DynamoDB.

**Exam-takeaway.** DynamoDB hot keys + microsecond reads = DAX.

---

**Q30. Answer: A, NLB with Global Accelerator**

**Why A is correct.** Global Accelerator provides 2 static Anycast IPs; NLB handles TCP at layer 4 with ultra-low latency; routing across regions handled via GA endpoint groups.

**Why the other options are wrong.**
- B: ALB has no static IPs of its own (always changing IP pool).
- C: CloudFront is layer-7 HTTP; can't handle arbitrary TCP.
- D: NAT Gateway is egress-only.

**Exam-takeaway.** Static IPs + multi-region TCP = NLB + Global Accelerator.

---

**Q31. Answer: C, SCP with `aws:RequestedRegion` not in EU list**

**Why C is correct.** Same SCP pattern as Q25, org-wide region restriction via the `aws:RequestedRegion` condition.

**Why the other options are wrong.**
- A: Using only us-east-1 is the opposite of EU residency.
- B: Direct Connect is a network link, not a permissions mechanism.
- D: CloudFront geo-restriction blocks users, not API calls.

**Exam-takeaway.** Data residency by region = SCP.

---

**Q32. Answer: D, AWS Compute Optimizer (free, ML-based)**

**Why D is correct.** Compute Optimizer provides ML-based right-sizing recommendations for EC2 (and ASGs, EBS, Lambda) at no cost.

**Why the other options are wrong.**
- A: CloudTrail audits API calls; doesn't recommend rightsizing.
- B: Detective is for security incident investigation.
- C: WAF is layer-7 web firewall.

**Exam-takeaway.** EC2 right-sizing recommendations = Compute Optimizer.

---

## 📊 Scoring

| Score | Verdict |
|-------|---------|
| 30–32 | 🏆 Excellent, ready for Practice Exam 2 |
| 23–29 | ✅ Pass; review wrong ones |
| 18–22 | ⚠️ Re-study weak modules; retake in a few days |
| <18 | 🔁 Restart from Module 1 |

---

## 🔍 Review Process

For EACH wrong answer:

1. Identify which module covered the topic
2. Re-read that module's Reading.md section
3. Add the concept to your Flashcards
4. Re-attempt the question in 3 days

---

➡️ When you're scoring 80%+: take [Practice Exam 2](./Practice-Exam-2.md) after finishing Modules 6–10.
