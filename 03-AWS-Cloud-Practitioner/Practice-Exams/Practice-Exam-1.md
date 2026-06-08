# 🧪 Practice Exam 1, AWS Cloud Practitioner (CLF-C02 Style)

> **Conditions:** Set a 45-minute timer. 32 questions. Treat it like the real thing.
> **Pass mark:** 22/32 (≈ 70%)
> Take this AFTER finishing Modules 1–4.

---

## 📝 Questions

### 1. The AWS definition of cloud computing emphasizes:
A. On-demand delivery of dedicated hardware
B. Free unlimited compute
C. Long-term capacity reservations only
D. On-demand delivery of IT resources over the internet with pay-as-you-go pricing

### 2. To achieve high availability INSIDE a single Region, you should deploy across:
A. Multiple operating systems
B. Multiple Edge Locations
C. Multiple AWS accounts
D. Multiple Availability Zones

### 3. Which of the following is the BEST example of trading capital expense (CapEx) for variable expense (OpEx)?
A. Pre-paying 3 years of EC2 Reserved Instances
B. Buying physical servers
C. Pay-per-second EC2 On-Demand billing
D. Multi-year colocation contract

### 4. Amazon EC2 Lambda functions have a maximum execution time of:
A. 5 minutes
B. 15 minutes
C. 1 hour
D. Unlimited

### 5. Which is BEST for fault-tolerant batch workloads that can be interrupted, at up to 90% off?
A. On-Demand
B. Spot Instances
C. Reserved Instances
D. Dedicated Hosts

### 6. Stopped EC2 instances still incur charges for:
A. Attached EBS volumes
B. Compute time
C. Nothing
D. Both compute and storage

### 7. Which S3 storage class is BEST for unpredictable access patterns where you want automatic tiering?
A. Standard
B. Standard-IA
C. Glacier Deep Archive
D. Intelligent-Tiering

### 8. Maximum single-object size in S3 is:
A. 5 GB
B. 100 GB
C. 5 TB
D. Unlimited

### 9. To migrate 100 TB to AWS when internet upload would take months, use:
A. AWS DataSync
B. AWS Snowball Edge
C. CloudFront
D. AWS Storage Gateway

### 10. Which shared file system is for LINUX EC2 instances over NFS?
A. EBS
B. EFS
C. FSx for Windows
D. S3

### 11. To attach a single block volume to one EC2 instance for the boot drive, use:
A. S3
B. CloudFront
C. EFS
D. EBS

### 12. Which is TRUE about Security Groups vs NACLs?
A. SGs are stateful and only have ALLOW rules; NACLs are stateless and have ALLOW + DENY
B. SGs are stateless; NACLs are stateful
C. SGs operate at the subnet level
D. NACLs operate per instance

### 13. To privately access S3 from inside a VPC without using the internet, use:
A. NAT Gateway
B. Direct Connect only
C. Internet Gateway
D. VPC Gateway Endpoint for S3

### 14. Which Route 53 routing policy is BEST for sending users to the lowest-latency Region?
A. Latency-based
B. Failover
C. Geolocation
D. Weighted

### 15. AWS Direct Connect provides:
A. Encryption by default
B. CDN caching
C. A dedicated private fiber link to AWS (not encrypted by default)
D. Free DDoS protection

### 16. Which load balancer is BEST for HTTP routing by URL path?
A. NLB
B. GWLB
C. ALB
D. CLB

### 17. CloudFront caches content at:
A. Availability Zones
B. AWS Outposts
C. Edge Locations
D. VPC Endpoints

### 18. Which AWS service brings AWS hardware physically into your own data center?
A. AWS Wavelength
B. AWS Outposts
C. AWS Local Zones
D. AWS GovCloud

### 19. The Lambda billing model charges you for:
A. Per-minute EC2 time only
B. Requests + duration (per ms) + memory allocated
C. Per-day flat fee
D. Bandwidth only

### 20. Which service is BEST for serverless container workloads with no host management?
A. EC2
B. AWS Batch
C. Lightsail
D. ECS or EKS on Fargate

### 21. Auto Scaling Groups + Elastic Load Balancers + Multi-AZ deployment provide:
A. High availability and elasticity
B. Cost optimization only
C. Encryption at rest
D. Database backups

### 22. Which S3 storage class stores data in ONE Availability Zone (less durable but cheaper)?
A. Standard
B. One Zone-IA
C. Standard-IA
D. Glacier Deep Archive

### 23. AWS Outposts is BEST described as:
A. The AWS billing portal
B. A type of S3 storage class
C. AWS hardware racks deployed in YOUR data center
D. AWS free educational program

### 24. To estimate AWS cost BEFORE deploying, use:
A. AWS Pricing Calculator
B. AWS Cost Explorer
C. AWS Budgets
D. AWS Trusted Advisor

### 25. NAT Gateway provides:
A. Inbound internet access from internet to private subnet
B. CDN caching
C. Outbound-only internet access for private subnet instances
D. Free unlimited bandwidth

### 26. Which is TRUE about VPC Peering?
A. It is non-transitive
B. It is transitive
C. It works only across Regions
D. It requires Direct Connect

### 27. Snowcone, Snowball Edge, and Snowmobile are part of:
A. AWS GovCloud
B. AWS Glacier
C. AWS Direct Connect
D. AWS Snow Family (physical data transfer)

### 28. Which is the BEST AWS option for archival data with retrieval times up to 12–48 hours, lowest cost?
A. S3 Glacier Deep Archive
B. S3 Glacier Instant Retrieval
C. S3 Standard-IA
D. EBS gp3

### 29. Edge Locations are PRIMARILY used by:
A. EC2 and EBS
B. CloudFront and Route 53
C. RDS and DynamoDB
D. IAM and KMS

### 30. Which is a managed service for repeatable, version-controlled infrastructure?
A. AWS CloudFormation (or CDK)
B. AWS Management Console
C. AWS Trusted Advisor
D. AWS Marketplace

### 31. The 6 benefits of cloud computing per AWS include all EXCEPT:
A. Trade fixed expense for variable expense
B. Go global in minutes
C. Guarantee 100% uptime
D. Stop guessing capacity

### 32. To globally distribute static + dynamic web content with low latency and DDoS protection, use:
A. EC2 in one Region
B. EFS
C. Direct Connect only
D. CloudFront + Shield + WAF

---

## 🎯 Answer Key (No Cheating!)

```
1. D    9. B    17. C    25. C
2. D    10. B   18. B    26. A
3. C    11. D   19. B    27. D
4. B    12. A   20. D    28. A
5. B    13. D   21. A    29. B
6. A    14. A   22. B    30. A
7. D    15. C   23. C    31. C
8. C    16. C   24. A    32. D
```

---

## 📚 Detailed answer rationales

Treat these as a teaching pass, in case-method style: every question gets a why-right + why-each-wrong + exam-takeaway.

**Q1. Answer: D**

**Why D is correct.** AWS's published definition (in *What is Cloud Computing?* and the AWS Overview whitepaper) is: "the on-demand delivery of IT resources over the internet with pay-as-you-go pricing." Verbatim from AWS's own training material.

**Why the other options are wrong.**
- A: "Dedicated hardware" is the opposite of multi-tenant cloud, Dedicated Hosts are an *option*, not the definition.
- B: "Free unlimited compute", AWS is pay-as-you-go, not free.
- C: "Long-term capacity reservations", those are RIs / Savings Plans, an *option*, not the cloud definition.

**Exam-takeaway.** AWS's three-part definition (on-demand / over internet / pay-as-you-go) is verbatim test material. Memorize it word-for-word.

---

**Q2. Answer: D**

**Why D is correct.** A Region contains multiple Availability Zones (3+ in most Regions). Deploying across multiple AZs gives you fault isolation against datacenter-level failures while keeping low-latency private fiber between AZs.

**Why the other options are wrong.**
- A: Multiple OSes don't address infrastructure failure.
- B: Edge Locations only cache CDN content; you can't run application workloads there.
- C: Multiple AWS accounts is an organizational pattern, not a high-availability mechanism.

**Exam-takeaway.** "HA inside one Region = multi-AZ." Memorize this. "DR / Region failure = multi-Region." Memorize this too. They are *different* patterns and AWS tests them constantly.

---

**Q3. Answer: C**

**Why C is correct.** EC2 On-Demand billed per second is the textbook variable expense, no upfront, scale up/down freely, billed only for what you use. That's OpEx.

**Why the other options are wrong.**
- A: 3-year Reserved Instances commit you upfront, that's more CapEx-like.
- B: Buying servers is the definition of CapEx, exactly what cloud lets you trade *away*.
- D: A multi-year colocation lease is fixed expense, the opposite of variable.

**Exam-takeaway.** When the exam says "trade CapEx for OpEx," look for the answer that is *pay-only-when-using*. Long commitments and upfront purchases are the trap distractors.

---

**Q4. Answer: B**

**Why B is correct.** Lambda's hard per-invocation execution limit is 15 minutes. AWS published this limit when extending it from 5 to 15 minutes in October 2018.

**Why the other options are wrong.**
- A: 5 minutes was the *historical* limit (pre-2018); they're testing whether you know the current one.
- C: 1 hour is a common confusion with the Fargate task lifecycle, not Lambda.
- D: Unlimited is wrong, there is a hard limit.

**Exam-takeaway.** Lambda = 15-minute max. For anything longer, the answer is Fargate, EC2, or AWS Batch. Memorize "15."

---

**Q5. Answer: B**

**Why B is correct.** Spot Instances offer up to 90% off On-Demand because AWS can reclaim them with 2 minutes notice. Perfect for *fault-tolerant* workloads that can checkpoint and resume, CI builds, batch transcoding, ML training.

**Why the other options are wrong.**
- A: On-Demand is the baseline price; no discount.
- C: Reserved Instances give discount but require commitment; not the "deepest" discount.
- D: Dedicated Hosts cost *more* than On-Demand (for license / compliance reasons), not less.

**Exam-takeaway.** "Up to 90% off + fault-tolerant + can be interrupted" → Spot, always. This phrase combination appears 2-3 times per exam.

---

**Q6. Answer: A**

**Why A is correct.** When you stop an EC2 instance, compute charges stop, but the attached EBS volumes (root + any data volumes) keep billing because the data persists. To stop all charges, you must terminate (which by default deletes the root volume).

**Why the other options are wrong.**
- B: Compute charges DO stop on stopped instances.
- C: No charges at all is the trap, EBS keeps billing.
- D: "Both compute and storage" overstates, compute halts.

**Exam-takeaway.** Stopped EC2 = no compute, still pay EBS. Terminate = no compute, no EBS (with default settings). The exam loves this distinction.

---

**Q7. Answer: D**

**Why D is correct.** S3 Intelligent-Tiering monitors access patterns on each object and automatically moves objects between Frequent / Infrequent / Archive tiers for cost optimization. No retrieval fees. Best for "unknown access pattern."

**Why the other options are wrong.**
- A: Standard is the most-expensive frequent-access tier; not cost-optimized for unpredictable patterns.
- B: Standard-IA has per-GB retrieval fees, bad for objects you might access more than expected.
- C: Glacier Deep Archive has 12–48 hr retrieval; only for never-accessed data.

**Exam-takeaway.** "Unknown / unpredictable access pattern" → Intelligent-Tiering. Memorize the trigger phrase.

---

**Q8. Answer: C**

**Why C is correct.** S3's per-object max is 5 TB. Single PUT max is 5 GB; above that requires multipart upload (which can go to 5 TB).

**Why the other options are wrong.**
- A: 5 GB is the single-PUT max, not the object max, a classic trap.
- B: 100 GB has no relationship to S3 limits, pure distractor.
- D: Unlimited is wrong; S3 *bucket* size is essentially unlimited, but per *object* it's 5 TB.

**Exam-takeaway.** S3 object max = 5 TB. Single PUT max = 5 GB. Different numbers, both tested.

---

**Q9. Answer: B**

**Why B is correct.** Snowball Edge is purpose-built for petabyte-scale physical data transfer when the internet would take months. AWS ships the rugged device, you copy data locally, ship it back, AWS uploads to S3.

**Why the other options are wrong.**
- A: DataSync is for online transfer over internet / Direct Connect; it's slow for 100 TB.
- C: CloudFront is a CDN, not a migration tool.
- D: Storage Gateway is for ongoing hybrid storage, not one-time migration.

**Exam-takeaway.** "TB or PB to AWS + slow internet" → Snow Family (Snowcone 8 TB, Snowball Edge 80 TB, Snowmobile being phased out).

---

**Q10. Answer: B**

**Why B is correct.** EFS = Elastic File System = managed NFS for Linux EC2. Many instances can mount the same file system simultaneously and read/write concurrently.

**Why the other options are wrong.**
- A: EBS attaches to a single instance (almost always; Multi-Attach is the rare io1/io2 exception).
- C: FSx for Windows uses SMB, not NFS, wrong protocol for Linux.
- D: S3 is object storage, not a file system.

**Exam-takeaway.** "Multiple Linux EC2 sharing files" → EFS. Always.

---

**Q11. Answer: D**

**Why D is correct.** EBS = block storage attached to an EC2 instance, including as the boot (root) volume.

**Why the other options are wrong.**
- A: S3 is object storage; you can't boot from S3 directly.
- B: CloudFront is a CDN.
- C: EFS is multi-attach file storage; not typical for a boot volume.

**Exam-takeaway.** "Single EC2, single block volume, boot drive" → EBS. "Many EC2, shared filesystem" → EFS.

---

**Q12. Answer: A**

**Why A is correct.** Security Groups: stateful (return traffic auto-allowed), allow-only. NACLs: stateless, allow + deny rules, operate at subnet level.

**Why the other options are wrong.**
- B: Reverses the stateful/stateless distinction.
- C: SGs operate at the instance/ENI level, not subnet.
- D: NACLs operate at subnet level, not per-instance.

**Exam-takeaway.** Memorize: SG = stateful, allow-only, ENI. NACL = stateless, allow+deny, subnet. This appears 2+ times per exam.

---

**Q13. Answer: D**

**Why D is correct.** VPC Gateway Endpoint for S3 (and DynamoDB) provides free, private access from VPC to S3 via the AWS network, no internet, no NAT, no Direct Connect needed.

**Why the other options are wrong.**
- A: NAT Gateway gives outbound internet, not private.
- B: Direct Connect is for on-prem-to-AWS, not VPC-to-S3.
- C: Internet Gateway routes through the public internet.

**Exam-takeaway.** "Private S3 access from VPC" → Gateway Endpoint. Free, no charge. Often paired with "without using the internet" trigger phrase.

---

**Q14. Answer: A**

**Why A is correct.** Latency-based routing measures the network latency between users and AWS endpoints, then directs users to the lowest-latency Region. Perfect for "fastest" / "lowest latency" globally.

**Why the other options are wrong.**
- B: Failover is active/passive for DR.
- C: Geolocation routes by user's country, not necessarily lowest latency.
- D: Weighted is for A/B testing or gradual rollouts.

**Exam-takeaway.** Read the trigger word: "lowest latency" → Latency. "country/compliance" → Geolocation. "A/B test" → Weighted. "primary/standby" → Failover.

---

**Q15. Answer: C**

**Why C is correct.** Direct Connect is dedicated 1/10/100 Gbps private fiber, not over the internet. It is NOT encrypted by default, for encryption pair with a VPN or use MACsec on DX.

**Why the other options are wrong.**
- A: Direct Connect is NOT encrypted by default, a top exam trap.
- B: CDN caching is CloudFront.
- D: Free DDoS protection is Shield Standard.

**Exam-takeaway.** Direct Connect = private + fast + NOT encrypted. If encryption matters, layer on VPN.

---

**Q16. Answer: C**

**Why C is correct.** ALB (Application Load Balancer) operates at Layer 7, it can route by URL path, host header, HTTP method, etc.

**Why the other options are wrong.**
- A: NLB is Layer 4 (TCP/UDP), no awareness of URLs.
- B: GWLB is Layer 3 for inserting security appliances.
- D: CLB is the legacy Classic Load Balancer, being deprecated.

**Exam-takeaway.** "Path-based routing" / "URL routing" / "Host-based routing" / "WebSockets" → ALB. "TCP/UDP" / "static IP" / "lowest latency" → NLB.

---

**Q17. Answer: C**

**Why C is correct.** CloudFront caches content at 400+ Edge Locations worldwide, the geographically distributed PoP layer.

**Why the other options are wrong.**
- A: AZs are inside Regions, not edge-of-network.
- B: Outposts are on-prem AWS racks.
- D: VPC Endpoints provide private service access, not caching.

**Exam-takeaway.** CDN = Edge Locations = CloudFront. This pattern is foundational.

---

**Q18. Answer: B**

**Why B is correct.** AWS Outposts physically delivers AWS hardware racks (compute + storage) into your data center. Same APIs as the public cloud, hybrid pattern.

**Why the other options are wrong.**
- A: Wavelength puts AWS *inside 5G carrier networks*, not your DC.
- C: Local Zones are AWS extensions in major metros, not your building.
- D: GovCloud is isolated AWS Regions, not on-prem hardware.

**Exam-takeaway.** "AWS hardware in YOUR data center" → Outposts. "AWS inside 5G" → Wavelength. "AWS extension in a metro for low latency" → Local Zones.

---

**Q19. Answer: B**

**Why B is correct.** Lambda's billing model: number of *requests* + *duration* in ms (rounded up) × *memory allocated* (in GB). The "GB-seconds" pricing model.

**Why the other options are wrong.**
- A: Per-minute EC2 billing is for EC2, not Lambda.
- C: Flat fee misses the per-invocation aspect.
- D: Bandwidth-only billing isn't how Lambda works.

**Exam-takeaway.** Lambda = pay per invocation + pay per GB-second of compute. No idle charges. Memorize.

---

**Q20. Answer: D**

**Why D is correct.** Fargate is the serverless container *launch type* for ECS or EKS, you bring the container, Fargate provisions the host. Zero EC2 management.

**Why the other options are wrong.**
- A: EC2 means you manage hosts.
- B: AWS Batch is for batch jobs, not general containers.
- C: Lightsail is a bundled VPS, not container-native.

**Exam-takeaway.** "Containers + no host management" → Fargate. "Containers + you control the EC2 fleet" → ECS/EKS on EC2 launch type.

---

**Q21. Answer: A**

**Why A is correct.** ASG (capacity) + ELB (traffic distribution) + Multi-AZ (fault isolation) = the textbook HA + elastic pattern.

**Why the other options are wrong.**
- B: Cost optimization is a side effect, not the primary purpose.
- C: Encryption at rest is unrelated.
- D: Database backups are unrelated.

**Exam-takeaway.** ASG + ELB + Multi-AZ is the canonical HA architecture pattern. Whenever the exam describes this combination, the answer involves "high availability."

---

**Q22. Answer: B**

**Why B is correct.** S3 One Zone-IA stores data in exactly one Availability Zone (vs three for Standard / Standard-IA), saving 20% but losing AZ-failure protection.

**Why the other options are wrong.**
- A: Standard is multi-AZ (3 AZs).
- C: Standard-IA is multi-AZ.
- D: Glacier Deep Archive is multi-AZ.

**Exam-takeaway.** "One Zone-IA = 1 AZ, cheaper, less durable, use for recreatable data." Memorize.

---

**Q23. Answer: C**

**Why C is correct.** Outposts is the literal AWS hardware delivered to your data center. Hybrid cloud pattern.

**Why the other options are wrong.**
- A: AWS billing portal is the Billing Console.
- B: Not an S3 storage class.
- D: Not an educational program.

**Exam-takeaway.** Outposts is for hybrid cloud (AWS hardware on-prem). Confirms patterns from Module 1.

---

**Q24. Answer: A**

**Why A is correct.** AWS Pricing Calculator (calculator.aws) lets you estimate AWS spend BEFORE you deploy, input services, regions, usage, get a forecast.

**Why the other options are wrong.**
- B: Cost Explorer is for past spend visualization + forecasting *based on historical data*.
- C: Budgets sets alerts on actual spend, after-the-fact.
- D: Trusted Advisor recommends best practices but doesn't estimate cost from scratch.

**Exam-takeaway.** "Estimate BEFORE deploying" → Pricing Calculator. "Visualize past + forecast" → Cost Explorer. "Alert when threshold crossed" → Budgets.

---

**Q25. Answer: C**

**Why C is correct.** NAT Gateway provides outbound-only internet for instances in private subnets, they can reach internet (for OS updates, API calls) but can't be reached from internet.

**Why the other options are wrong.**
- A: Inbound from internet to private subnet is what an IGW + public IP does.
- B: CDN caching is CloudFront.
- D: Free + unlimited is wrong, NAT Gateway is per-hour + per-GB.

**Exam-takeaway.** "Private subnet needs outbound internet" → NAT Gateway. Per-AZ for HA. Not free.

---

**Q26. Answer: A**

**Why A is correct.** VPC Peering is explicitly non-transitive: A↔B + B↔C does NOT give A access to C. You'd need a separate peering A↔C, or Transit Gateway.

**Why the other options are wrong.**
- B: It is NOT transitive, opposite of correct.
- C: Works within and across Regions.
- D: Doesn't require Direct Connect.

**Exam-takeaway.** VPC Peering = non-transitive. For multi-VPC connectivity at scale → Transit Gateway. Memorize.

---

**Q27. Answer: D**

**Why D is correct.** Snowcone, Snowball Edge (Storage + Compute variants), and Snowmobile are all part of the AWS Snow Family, physical petabyte data transfer.

**Why the other options are wrong.**
- A: GovCloud is isolated regions, not migration devices.
- B: Glacier is an S3 storage class, not a physical device.
- C: Direct Connect is private fiber connectivity.

**Exam-takeaway.** "Snow" name → Snow Family. Snowcone (8 TB) / Snowball Edge (80 TB) / Snowmobile (100 PB, being phased out).

---

**Q28. Answer: A**

**Why A is correct.** S3 Glacier Deep Archive is the cheapest S3 tier, with 12–48 hour retrieval times. Designed for "must keep, almost never read."

**Why the other options are wrong.**
- B: Glacier Instant Retrieval is ms retrieval, more expensive.
- C: Standard-IA is ms retrieval, more expensive.
- D: EBS gp3 is block storage, not archive.

**Exam-takeaway.** "Cheapest archive, hours-long retrieval OK" → Glacier Deep Archive. "Cheapest archive, ms retrieval needed" → Glacier Instant Retrieval.

---

**Q29. Answer: B**

**Why B is correct.** CloudFront (CDN) and Route 53 (DNS) both terminate at Edge Locations so they're physically close to users.

**Why the other options are wrong.**
- A: EC2 and EBS run inside AZs/Regions, not edges.
- C: RDS and DynamoDB are Region-scoped data services.
- D: IAM and KMS are control-plane services.

**Exam-takeaway.** "Edge Locations" → CloudFront + Route 53 + Global Accelerator + WAF/Shield. Always the same answer pattern.

---

**Q30. Answer: A**

**Why A is correct.** CloudFormation (or its higher-level cousin CDK) lets you describe infrastructure as code, repeatable, version-controlled, auditable.

**Why the other options are wrong.**
- B: Management Console is point-and-click; not version-controlled.
- C: Trusted Advisor recommends, doesn't provision.
- D: Marketplace is a software catalog, not a provisioning tool.

**Exam-takeaway.** "Repeatable / version-controlled / IaC" → CloudFormation. Sometimes the answer is CDK or Terraform but in the AWS exam universe it's CloudFormation.

---

**Q31. Answer: C**

**Why C is correct.** "Guarantee 100% uptime" is NOT a listed cloud benefit, no service guarantees 100%, and AWS's published 6 benefits don't claim it. The 6 benefits are: variable expense, economies of scale, stop guessing capacity, speed/agility, stop running DCs, go global in minutes.

**Why the other options are wrong.**
- A: "Trade fixed for variable expense", first listed benefit.
- B: "Go global in minutes", sixth listed benefit.
- D: "Stop guessing capacity", third listed benefit.

**Exam-takeaway.** Memorize the 6 cloud benefits *literally*. Any answer that claims "100%" is almost always wrong.

---

**Q32. Answer: D**

**Why D is correct.** CloudFront (global distribution) + Shield (DDoS) + WAF (web-app firewall) is the canonical defense-in-depth pattern for a global, secure web app.

**Why the other options are wrong.**
- A: EC2 in one Region has no global distribution and no DDoS protection.
- B: EFS is file storage, not content delivery.
- C: Direct Connect is for on-prem-to-AWS, not user-to-app.

**Exam-takeaway.** "Global low latency + DDoS + filtering" → CloudFront + Shield + WAF. This trio appears together repeatedly on the exam.

---

## 📊 Scoring

| Score | Verdict |
|-------|---------|
| 30–32 | 🏆 Ready for Practice Exam 2 |
| 26–29 | ✅ Good foundation; review wrong answers |
| 22–25 | ⚠️ Pass-equivalent but tight, re-study weak modules |
| <22 | 🔁 Re-study Modules 1–4; retake in 2–3 days |

---

## 🔍 Review Process

For EACH wrong answer:

1. Identify which module covered it (use the question topic to map back)
2. Re-read that module's Reading.md (the relevant section)
3. Add an Anki flashcard for the concept
4. Retry the question 3 days later

---

## 🗺️ Question → Module Mapping

| Qs | Module |
|----|--------|
| 1, 2, 3, 18, 23, 29, 31 | 1 (Cloud Fundamentals) |
| 4, 5, 6, 19, 20, 21, 30 | 2 (Compute) |
| 7, 8, 9, 10, 11, 22, 27, 28 | 3 (Storage) |
| 12, 13, 14, 15, 16, 17, 25, 26, 32 | 4 (Networking & CDN) |
| 24 | 7 (preview, Pricing Calculator) |

---

➡️ When ready: [Practice Exam 2](./Practice-Exam-2.md) (after finishing Modules 5–8)
