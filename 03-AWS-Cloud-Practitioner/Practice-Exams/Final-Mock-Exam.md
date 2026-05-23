# 🧪 Final Mock Exam — AWS Cloud Practitioner (CLF-C02)

> **Conditions:** Set a 90-minute timer. 65 questions. EXACT real-exam length and timing.
> **Pass mark:** 46/65 (≈ 70% = 700/1000 scaled)
> Take this 1 day before the real exam. No notes. No re-reading. Pretend it's the real thing.

> **Real exam domain weights:**
> - Cloud Concepts: 24% (~16 Qs)
> - Security & Compliance: 30% (~20 Qs)
> - Cloud Technology & Services: 34% (~22 Qs)
> - Billing, Pricing & Support: 12% (~8 Qs)

---

## 📝 Questions

### 1. AWS's official definition of cloud computing is:
A. Free unlimited compute over the internet
B. The on-demand delivery of IT resources over the internet with pay-as-you-go pricing
C. A network of physical servers in your data center
D. Dedicated single-tenant hardware

### 2. To deploy a web app for high availability within a single Region, distribute across:
A. Multiple Edge Locations
B. Multiple Availability Zones
C. Multiple AWS accounts
D. Multiple operating systems

### 3. Edge Locations are PRIMARILY used by:
A. EC2 and EBS
B. CloudFront and Route 53
C. RDS and DynamoDB
D. IAM and KMS

### 4. AWS Wavelength is BEST for:
A. Storing 100 TB of backups
B. Managing IAM users
C. Running on-prem databases
D. Single-digit-millisecond mobile latency on 5G networks

### 5. Which is TRUE about Regions and Availability Zones?
A. Every Region has exactly 2 AZs
B. Each Region has 3+ isolated AZs connected by low-latency private fiber
C. AZs span multiple Regions
D. Edge Locations are a type of AZ

### 6. Which is an example of trading CapEx for OpEx?
A. Paying per second for EC2 On-Demand
B. Buying physical servers and paying for them once
C. Signing a 10-year colocation lease
D. Building your own data center

### 7. Amazon EC2 instance type families optimized for in-memory databases are:
A. `t` and `m` (general)
B. `r`, `x`, `z` (memory optimized)
C. `c` (compute optimized)
D. `i` (storage optimized)

### 8. Spot Instances are BEST for:
A. Mission-critical 24/7 production databases
B. Workloads requiring stable IPs and uptime
C. Fault-tolerant batch workloads that can be interrupted
D. Compliance-sensitive financial transactions

### 9. The Lambda max execution time is:
A. 5 minutes
B. 24 hours
C. 1 hour
D. 15 minutes

### 10. To run containers without managing the underlying EC2 instances, use:
A. ECS or EKS with the EC2 launch type
B. ECS or EKS with the Fargate launch type
C. Lambda
D. AWS Outposts

### 11. A stopped EC2 instance:
A. Has zero charges
B. Bills compute but not storage
C. Stops compute charges but still bills for EBS volumes
D. Bills only network

### 12. Amazon S3 storage class with retrieval times of 12–48 hours and the lowest cost is:
A. S3 Standard-IA
B. S3 Glacier Instant Retrieval
C. S3 Glacier Flexible Retrieval
D. S3 Glacier Deep Archive

### 13. The maximum size of a single S3 object is:
A. 5 TB
B. 5 GB
C. 100 GB
D. Unlimited

### 14. A team needs to migrate 200 TB to AWS over a slow internet link. The BEST service is:
A. AWS Snowball Edge
B. AWS Direct Connect for one-time use
C. AWS DataSync over internet only
D. CloudFront

### 15. Amazon EFS is BEST described as:
A. Object storage
B. Block storage attached to one instance
C. Tape backup
D. Managed NFS shared file system for Linux

### 16. FSx for Windows File Server provides:
A. NFS for Linux
B. Time-series storage
C. Object storage
D. SMB shares with Active Directory integration

### 17. To privately access S3 from inside a VPC without traversing the internet, use:
A. VPC Gateway Endpoint for S3
B. NAT Gateway
C. CloudFront
D. Direct Connect only

### 18. Security Groups:
A. Are stateless and can have DENY rules
B. Are stateful and only have ALLOW rules
C. Operate at the subnet level
D. Cannot be applied to EC2

### 19. NACLs:
A. Are stateful
B. Apply to one instance only
C. Are stateless and support ALLOW + DENY rules at the subnet boundary
D. Are the same as Security Groups

### 20. Which Route 53 routing policy is BEST for routing EU users to the EU Region for GDPR?
A. Geolocation
B. Latency-based
C. Weighted
D. Multivalue

### 21. AWS Direct Connect provides:
A. A dedicated private fiber link to AWS (not encrypted by default)
B. Encryption by default
C. CDN caching
D. Free DDoS protection

### 22. Which load balancer is BEST for ultra-low-latency TCP/UDP at millions of requests per second?
A. ALB
B. CLB
C. GWLB
D. NLB

### 23. To globally distribute content with low latency, use:
A. CloudFront
B. AWS Direct Connect
C. EBS Multi-AZ
D. S3 Standard-IA

### 24. AWS Global Accelerator differs from CloudFront because:
A. They are identical
B. CloudFront caches HTTP content; Global Accelerator routes any TCP/UDP via AWS backbone
C. CloudFront is more expensive
D. Global Accelerator only works in `us-east-1`

### 25. RDS Multi-AZ provides:
A. Asynchronous read scaling
B. Free backups
C. Synchronous standby in another AZ + automatic failover for HA
D. Cross-Region replication

### 26. RDS Read Replicas are used to:
A. Provide HA via synchronous standby
B. Backup the database
C. Offload READ traffic from the primary (asynchronous)
D. Migrate between engines

### 27. Aurora is API-compatible with:
A. Cassandra
B. Oracle and SQL Server
C. MongoDB
D. MySQL and PostgreSQL

### 28. Aurora replicates storage across:
A. 6 copies across 3 AZs
B. 2 copies in 1 AZ
C. 4 copies in 4 Regions
D. 1 copy per node

### 29. DynamoDB is BEST for:
A. OLAP analytical workloads
B. Graph relationships
C. Serverless key-value/document lookups with single-digit ms latency at any scale
D. Time-series data

### 30. To run microsecond-latency reads on DynamoDB, add:
A. ElastiCache
B. RDS
C. DAX (DynamoDB Accelerator)
D. S3

### 31. ElastiCache is:
A. A migration tool
B. A managed graph database
C. An object storage service
D. A managed Redis or Memcached service

### 32. Which AWS database is BEST for petabyte-scale OLAP analytics for BI?
A. Aurora
B. DynamoDB
C. ElastiCache
D. Redshift

### 33. To migrate a database with continuous replication and minimal downtime, use:
A. AWS DataSync
B. AWS DMS (+ SCT for cross-engine)
C. AWS Snowball
D. CloudFront

### 34. Per Shared Responsibility, who patches the guest OS on EC2?
A. AWS
B. The customer
C. Both
D. AWS Support

### 35. Per Shared Responsibility, who patches the OS underlying RDS?
A. AWS
B. The customer
C. Both
D. The Database Admin

### 36. Which is the IAM best practice?
A. Use the root user for daily tasks
B. Apply least privilege and enable MFA
C. Share IAM credentials
D. Hard-code credentials into source code

### 37. To allow an EC2 instance to read from S3 without embedding keys, use:
A. Make the S3 bucket public
B. The root account's access keys
C. An IAM Role attached to the instance
D. Embedded long-lived IAM user keys

### 38. In IAM policy evaluation:
A. Allow always wins
B. Numerical priority
C. Random order
D. Explicit Deny always wins

### 39. AWS KMS is used to:
A. Manage encryption keys for AWS services and applications
B. Block DDoS
C. Provide DNS
D. Provide free TLS certs

### 40. For a FIPS 140-2 Level 3 dedicated HSM, use:
A. AWS CloudHSM
B. AWS KMS Customer Managed Keys
C. AWS Certificate Manager
D. AWS Secrets Manager

### 41. ACM (AWS Certificate Manager) provides:
A. Paid certificates only
B. Free public TLS/SSL certificates for use with ELB, CloudFront, API Gateway
C. SSH keys only
D. Code-signing certificates only

### 42. To detect anomalous account behavior (cryptocurrency-mining, port scans) using logs, use:
A. AWS Health Dashboard
B. AWS Trusted Advisor
C. Amazon GuardDuty
D. CloudWatch

### 43. To discover PII inside S3 buckets, use:
A. AWS Shield
B. Amazon Inspector
C. Amazon Macie
D. CloudFront

### 44. To scan EC2 / ECR images / Lambda for software vulnerabilities, use:
A. CloudTrail
B. GuardDuty
C. Amazon Inspector
D. AWS WAF

### 45. To block SQL injection at the HTTP layer in front of CloudFront / ALB, use:
A. AWS WAF
B. AWS Shield
C. NACLs
D. KMS

### 46. AWS Shield Standard is:
A. Free and automatically enabled for ELB, CloudFront, Route 53
B. A premium subscription
C. Only available with Enterprise Support
D. A compliance tool

### 47. AWS Shield Advanced uniquely provides:
A. Free CloudFront
B. Free EC2 instances
C. Multi-AZ deployments
D. 24/7 DDoS Response Team (DRT) + cost protection during attacks

### 48. AWS Organizations + SCPs:
A. Encrypt data at rest
B. Manage IAM users in one account
C. Provide DDoS protection
D. Set guardrails across multiple AWS accounts

### 49. AWS Artifact is used to:
A. Build CI/CD pipelines
B. Scan for vulnerabilities
C. Provision EC2
D. Download compliance reports (SOC, ISO, PCI, FedRAMP, etc.)

### 50. To centrally aggregate findings from multiple security services, use:
A. AWS Security Hub
B. AWS Trusted Advisor
C. CloudWatch Logs
D. AWS Marketplace

### 51. CloudTrail records:
A. CPU metrics
B. Resource config drift
C. Every AWS API call made in your account
D. Application performance

### 52. CloudWatch is for:
A. API audit logs
B. DDoS protection
C. Metrics + logs + alarms (+ EventBridge for state changes)
D. Compliance reports

### 53. AWS Config tracks:
A. CPU usage
B. Network bandwidth
C. Resource configuration over time + compliance rules
D. CloudFront cache hits

### 54. To connect to an EC2 instance via the browser without opening port 22, use:
A. AWS Direct Connect
B. Bastion host with SSH
C. AWS Systems Manager Session Manager
D. CloudShell

### 55. AWS Trusted Advisor's 5 check categories are:
A. Cost, AI, ML, Security, Backup
B. Cost, Migration, Security, Backup, Network
C. Speed, Reliability, Cost, Security, Compliance
D. Cost, Performance, Security, Fault Tolerance, Service Limits

### 56. The Business Support plan response time for production-down is:
A. < 1 hour
B. < 30 minutes
C. < 15 minutes
D. < 4 hours

### 57. A DEDICATED Technical Account Manager (TAM) is included in:
A. Developer Support
B. Enterprise Support
C. Enterprise On-Ramp (pool only)
D. Business Support

### 58. AWS Budgets:
A. Block AWS spending at threshold
B. Send alerts when spend or usage exceeds threshold
C. Automatically buy Savings Plans
D. Replace CloudWatch

### 59. Which is TRUE about AWS data transfer?
A. Inbound to AWS is generally free; outbound to internet is paid
B. All transfer is free
C. Inbound is paid; outbound is free
D. Outbound is free between AZs in the same Region

### 60. To estimate AWS cost BEFORE deploying a workload, use:
A. AWS Cost Explorer
B. AWS Pricing Calculator
C. AWS Budgets
D. AWS Trusted Advisor

### 61. How many pillars does the AWS Well-Architected Framework have?
A. 4
B. 6
C. 5
D. 7

### 62. The Sustainability pillar was added in:
A. 2021
B. 2015
C. 2010
D. 2024

### 63. Lift-and-shift (move VM to EC2 with no code changes) is which of the 6 Rs?
A. Refactor
B. Replatform
C. Rehost
D. Retire

### 64. Switching from on-prem CRM to Salesforce SaaS is:
A. Refactor
B. Replatform
C. Retain
D. Repurchase

### 65. The AWS Cloud Adoption Framework (CAF) is organized into how many perspectives?
A. 4
B. 12
C. 8
D. 6

---

## 🎯 Answer Key (No Cheating!)

```
1.  B    14. A    27. D    40. A    53. C
2.  B    15. D    28. A    41. B    54. C
3.  B    16. D    29. C    42. C    55. D
4.  D    17. A    30. C    43. C    56. A
5.  B    18. B    31. D    44. C    57. B
6.  A    19. C    32. D    45. A    58. B
7.  B    20. A    33. B    46. A    59. A
8.  C    21. A    34. B    47. D    60. B
9.  D    22. D    35. A    48. D    61. B
10. B    23. A    36. B    49. D    62. A
11. C    24. B    37. C    50. A    63. C
12. D    25. C    38. D    51. C    64. D
13. A    26. C    39. A    52. C    65. D
```

---

## 📚 Detailed answer rationales

**Q1. B.** AWS's verbatim definition: on-demand IT resources over the internet, pay-as-you-go. **A:** free unlimited isn't AWS's model. **C:** describes on-prem, not cloud. **D:** dedicated single-tenant is an *option* (Dedicated Hosts), not the definition. **Takeaway.** Memorize the AWS verbatim definition.

**Q2. B.** Multi-AZ inside a Region = HA. **A:** Edge Locations only cache content. **C:** Multiple accounts is organizational. **D:** Multiple OSes is irrelevant. **Takeaway.** HA = multi-AZ; DR = multi-Region.

**Q3. B.** CloudFront + Route 53 terminate at Edge Locations. **A:** EC2/EBS live in AZs. **C:** RDS/DynamoDB are Region-scoped. **D:** IAM/KMS are control-plane. **Takeaway.** Edge = CloudFront + Route 53 + Shield + WAF + Global Accelerator.

**Q4. D.** Wavelength = AWS compute inside 5G carrier networks for ultra-low mobile latency. **A:** S3 is for storage. **B:** IAM doesn't address latency. **C:** Wavelength is purpose-built for mobile-5G use, not on-prem databases. **Takeaway.** "Inside 5G" → Wavelength.

**Q5. B.** Each Region has 3+ AZs, low-latency private fiber between AZs. **A:** Most have 3+, not exactly 2. **C:** AZs are within a single Region. **D:** Edges are not AZs. **Takeaway.** 3+ AZs per Region, ~10–100 km apart, private fiber.

**Q6. A.** Per-second EC2 On-Demand = variable OpEx. **B:** Buying servers = CapEx. **C/D:** Long-term lease / build DC = CapEx. **Takeaway.** Pay-per-use = OpEx. Upfront = CapEx.

**Q7. B.** `r`/`x`/`z` family = memory-optimized (in-memory DBs). **A:** general purpose. **C:** compute-optimized. **D:** storage-optimized. **Takeaway.** Memorize family letters: T/M general, C compute, R/X/Z memory, I/D/H storage, P/G/Inf/Trn accelerated.

**Q8. C.** Spot = up to 90% off, can be reclaimed → only for fault-tolerant. **A:** 24/7 production needs On-Demand or RIs. **B:** Stable IPs/uptime ≠ Spot. **D:** Financial transactions can't tolerate interruption. **Takeaway.** Spot only for batch/CI/transcoding.

**Q9. D.** Lambda max = 15 minutes per invocation. **A:** 5 min was historical (pre-2018). **B/C:** wrong magnitude. **Takeaway.** Lambda 15 min; longer → Fargate / EC2 / Batch.

**Q10. B.** Fargate launch type = no host management. **A:** EC2 launch type still requires host management. **C:** Lambda isn't a container launch type. **D:** Outposts is on-prem hardware. **Takeaway.** "Containers + no host management" → Fargate.

**Q11. C.** Stopped = no compute, but EBS volumes still bill. **A:** Wrong (EBS still charges). **B:** Backwards. **D:** Network only — wrong. **Takeaway.** Stop = no compute, keep storage. Terminate = no compute, no storage (default).

**Q12. D.** Glacier Deep Archive = cheapest, 12–48 hr retrieval. **A:** Standard-IA has ms retrieval. **B:** Glacier Instant has ms retrieval. **C:** Glacier Flexible is minutes-hours, not 12-48 hr. **Takeaway.** Cheapest + slowest = Glacier Deep Archive.

**Q13. A.** S3 object max = 5 TB. **B:** 5 GB is single-PUT max. **C/D:** wrong. **Takeaway.** S3 object max 5 TB. Bucket size unlimited.

**Q14. A.** Snowball Edge for slow-internet bulk migration. **B:** DX is for one-time but takes weeks to provision. **C:** DataSync over internet would also be slow. **D:** CloudFront is a CDN. **Takeaway.** Petabyte-scale physical migration → Snow Family.

**Q15. D.** EFS = managed NFS for Linux. **A:** Object = S3. **B:** Block-single-attach = EBS. **C:** Tape = Tape Gateway. **Takeaway.** Linux + shared file = EFS.

**Q16. D.** FSx for Windows File Server = SMB + AD integration. **A:** EFS is NFS/Linux. **B:** Time-series = Timestream. **C:** Object = S3. **Takeaway.** Windows + AD-integrated shares → FSx for Windows.

**Q17. A.** VPC Gateway Endpoint for S3 = free private access. **B:** NAT routes outbound to internet. **C:** CloudFront is a CDN. **D:** Direct Connect connects on-prem, not VPC-to-S3. **Takeaway.** "VPC → S3 privately" → Gateway Endpoint.

**Q18. B.** SG = stateful, allow-only. **A:** Stateless + DENY = NACL. **C:** Subnet-level = NACL. **D:** SGs absolutely apply to EC2. **Takeaway.** Memorize SG vs NACL.

**Q19. C.** NACL = stateless, allow + deny, at subnet boundary. **A:** Stateful = SG. **B:** Per-instance = SG. **D:** Different from SG. **Takeaway.** NACL allows DENY; SG does not.

**Q20. A.** Geolocation routes by user country = GDPR pattern. **B:** Latency-based routes by network distance (might cross EU border). **C:** Weighted is for A/B. **D:** Multivalue is HA. **Takeaway.** Compliance / sovereignty → Geolocation.

**Q21. A.** DX = private fiber, NOT encrypted by default. **B:** Wrong (no encryption default). **C:** CDN is CloudFront. **D:** DDoS is Shield. **Takeaway.** DX is private but pair with VPN for encryption.

**Q22. D.** NLB = Layer 4 TCP/UDP, ultra-low latency. **A:** ALB is Layer 7. **B:** CLB is legacy. **C:** GWLB is Layer 3 for inserting security appliances. **Takeaway.** TCP/UDP + low-latency + static IP → NLB.

**Q23. A.** CloudFront caches at 400+ Edges for global delivery. **B:** DX is on-prem connectivity. **C:** EBS Multi-AZ is unrelated. **D:** S3 Standard-IA doesn't deliver content globally. **Takeaway.** Global content delivery → CloudFront.

**Q24. B.** CloudFront caches HTTP content; Global Accelerator routes any TCP/UDP via AWS backbone. **A:** Wrong (different products). **C:** Cost isn't the distinction. **D:** GA works in many regions. **Takeaway.** CloudFront = HTTP caching. GA = TCP/UDP routing.

**Q25. C.** RDS Multi-AZ = sync standby + auto failover for HA. **A:** Read scaling = Read Replicas. **B:** Free backups isn't accurate. **D:** Cross-Region is CRR / Global Database. **Takeaway.** Multi-AZ = HA only.

**Q26. C.** Read Replicas = async, used to offload reads. **A:** Sync HA = Multi-AZ. **B:** Backups are automated. **D:** Migration = DMS. **Takeaway.** Read Replicas ≠ Multi-AZ.

**Q27. D.** Aurora MySQL + Aurora PostgreSQL. **A:** Cassandra = Keyspaces. **B:** Oracle/SQL Server = RDS for those engines. **C:** MongoDB = DocumentDB. **Takeaway.** Aurora = MySQL OR PostgreSQL.

**Q28. A.** Aurora's 6 copies across 3 AZs. **B/C/D:** wrong replication models. **Takeaway.** Aurora storage = 6×3.

**Q29. C.** DynamoDB = serverless key-value, ms latency. **A:** OLAP = Redshift. **B:** Graph = Neptune. **D:** Time-series = Timestream. **Takeaway.** Serverless KV at scale → DynamoDB.

**Q30. C.** DAX = DynamoDB-specific in-memory cache for microsecond reads. **A:** ElastiCache is general-purpose, not DDB-native. **B:** RDS doesn't accelerate DDB. **D:** S3 isn't a cache. **Takeaway.** DDB + microseconds → DAX.

**Q31. D.** ElastiCache = managed Redis or Memcached. **A:** Migration = DMS. **B:** Graph = Neptune. **C:** Object = S3. **Takeaway.** In-memory cache = ElastiCache.

**Q32. D.** Redshift = petabyte OLAP. **A:** Aurora is OLTP. **B:** DynamoDB is OLTP key-value. **C:** ElastiCache is in-memory. **Takeaway.** BI + petabytes → Redshift.

**Q33. B.** DMS + SCT for cross-engine. **A:** DataSync is for files. **C:** Snowball is physical. **D:** CloudFront is CDN. **Takeaway.** DB migration → DMS (+ SCT cross-engine).

**Q34. B.** EC2 (IaaS) = customer patches OS. **A:** AWS patches the hypervisor, not the guest OS. **C/D:** wrong responsibility split. **Takeaway.** EC2 OS = customer.

**Q35. A.** RDS (PaaS) = AWS patches underlying OS. **B/C/D:** wrong. **Takeaway.** RDS OS = AWS.

**Q36. B.** Least privilege + MFA = IAM canonical best practice. **A:** Never use root daily. **C/D:** Never share or hard-code creds. **Takeaway.** Memorize the IAM Best Practices list.

**Q37. C.** IAM Role on the instance = temporary credentials, auto-rotated. **A:** Public bucket exposes data. **B:** Root creds = blast radius infinity. **D:** Long-lived keys are the Capital One pattern — avoid. **Takeaway.** EC2 → AWS service = IAM Role always.

**Q38. D.** Explicit Deny always wins. **A:** Allow loses. **B/C:** order doesn't matter. **Takeaway.** Single most-tested IAM rule.

**Q39. A.** KMS = managed encryption keys. **B:** DDoS = Shield. **C:** DNS = Route 53. **D:** Free TLS = ACM. **Takeaway.** "Encryption keys" → KMS.

**Q40. A.** CloudHSM = dedicated, single-tenant, FIPS 140-2 Level 3. **B:** KMS CMKs are FIPS 140-2 Level 2/3 multi-tenant. **C:** ACM = TLS certs. **D:** Secrets Manager stores secrets. **Takeaway.** "Dedicated HSM / FIPS L3" → CloudHSM.

**Q41. B.** ACM = free public TLS for AWS services. **A:** Paid-only is wrong. **C:** SSH keys are managed elsewhere. **D:** Code-signing is a separate ACM PCA feature. **Takeaway.** "Free public TLS" → ACM.

**Q42. C.** GuardDuty = log-based threat detection. **A:** Health Dashboard is operational events. **B:** Trusted Advisor is best-practice scoring. **D:** CloudWatch is metrics/logs. **Takeaway.** "Anomalies / crypto-mining / port scans" → GuardDuty.

**Q43. C.** Macie = S3 PII discovery. **A:** Shield = DDoS. **B:** Inspector = vulnerability scanning. **D:** CloudFront = CDN. **Takeaway.** "PII in S3" → Macie.

**Q44. C.** Inspector scans EC2 / ECR / Lambda for CVEs. **A:** CloudTrail = API audit. **B:** GuardDuty = behavior. **D:** WAF = HTTP-layer filtering. **Takeaway.** "Vulnerability scanning" → Inspector.

**Q45. A.** WAF blocks SQLi/XSS at HTTP layer. **B:** Shield = DDoS. **C:** NACLs are Layer 3/4. **D:** KMS is encryption. **Takeaway.** "Layer 7 / HTTP-aware filtering" → WAF.

**Q46. A.** Shield Standard is free + automatic. **B:** Not premium. **C:** Not tied to Enterprise Support. **D:** Not compliance. **Takeaway.** Shield Standard = free basic DDoS, automatic.

**Q47. D.** Shield Advanced = DRT + cost protection during attacks. **A:** Not free CloudFront. **B:** Not free EC2. **C:** Multi-AZ is unrelated. **Takeaway.** Shield Advanced (~$3K/mo) for tier-1 workloads.

**Q48. D.** Organizations + SCPs = multi-account guardrails. **A:** Encryption is KMS. **B:** IAM users are per-account. **C:** DDoS is Shield. **Takeaway.** Org-level "no-X-allowed" → SCP.

**Q49. D.** Artifact = self-service compliance reports. **A:** CI/CD = CodePipeline. **B:** Vuln scans = Inspector. **C:** Provision = console. **Takeaway.** "Download compliance reports" → Artifact.

**Q50. A.** Security Hub aggregates findings. **B:** Trusted Advisor is best-practice. **C:** CloudWatch Logs = operational. **D:** Marketplace = software catalog. **Takeaway.** "Single security dashboard" → Security Hub.

**Q51. C.** CloudTrail = every API call. **A:** CPU = CloudWatch. **B:** Drift = Config. **D:** App performance = X-Ray. **Takeaway.** WHO called WHICH API → CloudTrail.

**Q52. C.** CloudWatch = metrics + logs + alarms + EventBridge for state changes. **A:** API audit = CloudTrail. **B:** DDoS = Shield. **D:** Compliance = Artifact. **Takeaway.** Observability of resources → CloudWatch.

**Q53. C.** Config = resource configuration over time + rules. **A:** CPU = CloudWatch. **B:** Bandwidth = CloudWatch / VPC FL. **D:** Cache hits = CloudFront. **Takeaway.** "What does the resource look like, and is it compliant?" → Config.

**Q54. C.** Session Manager = browser-based SSH-less shell. **A:** DX is connectivity. **B:** Bastion still uses SSH. **D:** CloudShell is the AWS CLI shell, different feature. **Takeaway.** "No port 22 needed" → Session Manager.

**Q55. D.** Trusted Advisor 5: Cost, Performance, Security, Fault Tolerance, Service Limits. **A/B/C:** wrong sets. **Takeaway.** Memorize the 5 TA categories.

**Q56. A.** Business < 1 hr response. **B:** 30 min = Enterprise On-Ramp. **C:** 15 min = Enterprise. **D:** Below Business standard. **Takeaway.** Memorize the 4 paid plans' SLAs.

**Q57. B.** Enterprise = dedicated TAM. **A:** Developer has no TAM. **C:** On-Ramp = pool. **D:** Business has no TAM. **Takeaway.** Dedicated TAM = Enterprise. Pool = Enterprise On-Ramp.

**Q58. B.** Budgets = alert. **A:** Don't block spend. **C:** Don't auto-buy SP. **D:** Don't replace CloudWatch. **Takeaway.** Budgets alert; SCPs prevent.

**Q59. A.** Data IN generally free; OUT to internet $. **B:** Not all free. **C:** Backwards. **D:** Cross-AZ outbound costs per GB. **Takeaway.** Inbound free, outbound expensive.

**Q60. B.** Pricing Calculator estimates BEFORE deployment. **A:** Cost Explorer = past + forecast. **C:** Budgets = alerts. **D:** TA = recommendations. **Takeaway.** "Before deploying" → Pricing Calculator.

**Q61. B.** 6 pillars. **A:** 4 is too few. **C:** 5 is pre-2021. **D:** 7 is wrong. **Takeaway.** 6 pillars since 2021.

**Q62. A.** Sustainability added 2021 (re:Invent). **B/C:** too early. **D:** too late. **Takeaway.** Sustainability = 2021.

**Q63. C.** Rehost = lift-and-shift. **A:** Refactor = rewrite. **B:** Replatform = lift + tweak. **D:** Retire = decommission. **Takeaway.** Trigger phrases per R.

**Q64. D.** Repurchase = switch products (on-prem CRM → Salesforce). **A:** Refactor = rewrite. **B:** Replatform = optimize same. **C:** Retain = keep. **Takeaway.** "Switch products" → Repurchase.

**Q65. D.** CAF = 6 perspectives. **A/B/C:** wrong counts. **Takeaway.** CAF 6 perspectives, Well-Architected 6 pillars, different sets.

---

## 📊 Scoring

| Score | Verdict | Action |
|-------|---------|--------|
| 58–65 | 🏆 90%+ — you're ready | Sleep well, take the exam tomorrow |
| 52–57 | ✅ 80–88% — strong | Review wrong answers in your notes |
| 46–51 | ⚠️ 70–78% — pass-equivalent but tight | Re-study weak modules tonight |
| 39–45 | 🛑 60–69% — at risk of failing | Postpone the exam by 1 week; intensive review |
| <39 | 🔁 — significant gaps | Don't take the real exam yet; restudy ≥ 1 module |

---

## 🔍 Final Review Process

For EACH wrong answer:
1. Identify which domain it covered: Cloud Concepts / Security / Cloud Tech / Billing-Pricing-Support
2. Re-read that module's Cheat-Sheet (faster than full Reading)
3. If you got 3+ wrong in the same domain → re-read that module's Reading.md
4. Re-take wrong subset 12 hours later

---

## 🗺️ Domain Mapping

| Domain (Weight) | Question Numbers |
|-----------------|------------------|
| Cloud Concepts (24%) | 1, 2, 3, 4, 5, 6, 24, 61, 62, 63, 64, 65 |
| Security & Compliance (30%) | 18, 19, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50 |
| Cloud Technology & Services (34%) | 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 20, 21, 22, 23, 25, 26, 27, 28, 29, 30, 31, 32, 33, 51, 52, 53, 54 |
| Billing, Pricing & Support (12%) | 55, 56, 57, 58, 59, 60 |

---

## 🎯 Day-Of-Exam Tips

1. **Sleep 8 hours.** Cramming will hurt you more than it helps.
2. **Eat protein + carbs** ~2 hours before. No sugar crash.
3. **Don't second-guess** — your first instinct is usually right on the AWS exams.
4. **Mark and move on.** If you can't decide in 30 seconds, flag and come back.
5. **Watch the timer** — 90 min for 65 Qs = ~80 sec each.
6. **"BEST", "MOST", "LEAST"** — these words shift the answer. Underline them.
7. **Eliminate wrong answers first.** Usually 2 are obviously wrong; pick between the remaining 2.
8. **Trust the exam guide language** — if AWS says it, it's the answer.

---

## 🎓 After You Pass

- Add the AWS Certified Cloud Practitioner badge to LinkedIn (Credly)
- Get **50% off** your next AWS exam — book SAA-C03 (Solutions Architect Associate) within 12 months
- Tell a friend. The best way to retain knowledge is to teach it.

You got this. ☁️
