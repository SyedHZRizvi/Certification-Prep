# 🧪 Final Mock Exam — AWS Solutions Architect Associate (SAA-C03)

> **Conditions:** Set a 130-minute timer. 65 questions. **REAL exam length & time.** No notes, no Google, no breaks. This is your dress rehearsal.
> **Pass mark:** 47/65 (72%)
> Take this 1–2 days before the real exam.

---

## 📝 Questions

### 1. A company runs a web application on EC2 behind an Application Load Balancer in two AZs. The team needs the application to auto-scale based on average CPU usage. The MOST appropriate scaling policy is:
A. Step scaling
B. Target tracking on average CPU
C. Scheduled scaling
D. Manual

### 2. A company has unpredictable end-of-quarter traffic spikes. They want a fault-tolerant batch system that costs the least. The BEST approach is:
A. On-Demand 24/7
B. Spot Instances with checkpointing
C. 3-year Reserved Instances
D. Dedicated Hosts

### 3. To allow EC2 instances in a private subnet to make outbound calls to S3 while minimizing data transfer cost:
A. NAT Gateway
B. Gateway VPC Endpoint for S3
C. Public subnet placement
D. CloudFront

### 4. A SaaS company hosts a 3-tier web app for global users. To reduce origin load and improve global latency, the BEST addition is:
A. Direct Connect
B. NAT Gateway in every AZ
C. Site-to-Site VPN
D. CloudFront in front of the ALB and S3 origins

### 5. The company in Q4 also wants to protect the app from SQL-injection and XSS. The BEST AWS service is:
A. NACL
B. AWS WAF (managed rule groups attached to CloudFront / ALB)
C. NAT Gateway
D. Inspector

### 6. To survive a regional outage with near-zero RPO and RTO for a stateful relational workload:
A. Multi-Site Active-Active using Aurora Global Database write-forwarding
B. Single Multi-AZ deployment
C. Daily snapshots
D. EBS multi-attach

### 7. A workload requires shared storage accessible from EC2 in multiple AZs and from on-prem clients via NFS. The BEST service is:
A. EBS gp3
B. Amazon EFS (with mount targets in each AZ)
C. Instance Store
D. S3 mounted as file system

### 8. An application in private subnets must call DynamoDB privately, without an internet route:
A. CloudFront
B. NAT Gateway
C. Gateway VPC Endpoint for DynamoDB
D. Direct Connect

### 9. A company collects clickstream data from a website and needs to deliver it to S3 and Redshift in near real time with minimal management:
A. Step Functions
B. SQS Standard
C. Kinesis Data Streams (managed shards)
D. Kinesis Data Firehose

### 10. To enforce that ALL S3 PUT requests are encrypted with a customer-managed KMS key:
A. Block Public Access
B. Bucket policy denying PUTs missing the `s3:x-amz-server-side-encryption: aws:kms` header
C. CloudFront origin restriction
D. Tag-based IAM policy

### 11. A company runs a 24/7 production OLTP workload that needs HA across an AZ failure:
A. RDS Single-AZ
B. Read Replicas in same AZ
C. RDS Multi-AZ (synchronous standby with auto-failover)
D. Snapshots only

### 12. To scale a heavy reporting workload reading from an Aurora PostgreSQL database:
A. Add NACLs
B. Use Multi-AZ standby only
C. Switch to RDS PostgreSQL
D. Use Aurora Read Replicas (up to 15)

### 13. To migrate an on-prem Oracle DB to Aurora PostgreSQL with continuous replication and minimal downtime:
A. DMS with CDC + Schema Conversion Tool (SCT)
B. AWS Backup
C. Snowball
D. Storage Gateway Volume

### 14. To lift-and-shift 200 on-prem VMware VMs to EC2:
A. AWS Application Migration Service (MGN)
B. AWS Backup
C. AWS Snowball Edge
D. Direct Connect

### 15. A vendor must access a customer's AWS account in a read-only fashion. The BEST design is:
A. Email files daily
B. IAM user shared with the vendor
C. Public S3 bucket
D. Cross-account IAM Role with ExternalId condition

### 16. To centrally apply guardrails (e.g., deny all CloudTrail stop calls) to every account in an AWS Organization:
A. SCP on the management account only
B. Per-account IAM policy
C. NACL on each VPC
D. Service Control Policy (SCP) at the OU/root

### 17. To give end-users of a mobile app temporary AWS credentials to upload to S3:
A. Cognito Identity Pools
B. IAM users created at runtime
C. Public bucket
D. Shared root credentials

### 18. To provide static IPs for ingress and route TCP traffic at L4 with health-checked failover across regions:
A. CloudFront
B. AWS Global Accelerator
C. Route 53 Simple routing
D. NAT Gateway

### 19. A workload requires lowest-latency private connectivity from on-prem to AWS with predictable throughput:
A. Client VPN
B. Site-to-Site VPN
C. AWS Direct Connect
D. CloudFront

### 20. An ASG should add instances when SQS backlog exceeds 100 messages:
A. CloudWatch Alarm on `ApproximateNumberOfMessagesVisible` triggering ASG scale-out
B. Manual scaling
C. EC2 cron job
D. Lambda timer

### 21. To detect ML-based threats in CloudTrail, VPC Flow Logs, and DNS without installing agents:
A. Amazon GuardDuty
B. AWS Macie
C. AWS Inspector
D. AWS Config

### 22. A company needs to find and protect PII data accidentally placed in S3 buckets:
A. CloudTrail
B. GuardDuty
C. WAF
D. Amazon Macie

### 23. To trace requests across API Gateway → Lambda → DynamoDB and visualize latency hotspots:
A. AWS X-Ray
B. CloudWatch alarms
C. CloudTrail
D. Inspector

### 24. The CHEAPEST DR for a non-critical workload (RTO of hours acceptable):
A. Pilot Light
B. Backup & Restore
C. Warm Standby
D. Multi-Site Active-Active

### 25. To replace an aging physical tape backup system while keeping existing software:
A. Snowball
B. AWS Backup
C. Storage Gateway — Tape Gateway (VTL)
D. CloudFront

### 26. A workload requires immutable retention of records for 7 years with zero ability to override:
A. Versioning only
B. S3 Object Lock in Governance mode
C. S3 Object Lock in Compliance mode
D. MFA Delete

### 27. To transfer 500 TB to AWS when the on-prem internet link is 100 Mbps:
A. SFTP
B. DataSync online
C. Direct Connect (months to set up)
D. Snowball Edge Storage Optimized

### 28. Multiple independent consumer apps need to replay events from a stream within the last 7 days:
A. Kinesis Data Streams with 7-day retention
B. SQS Standard (max 14 days, single consumer)
C. SNS
D. Step Functions

### 29. To run a Lambda every 10 minutes on a schedule:
A. CloudFront
B. SQS delay queue loop
C. EventBridge Scheduler / scheduled rule
D. NACL

### 30. The 4 DR strategies from cheapest to most expensive (and from worst to best RTO/RPO) are:
A. Pilot Light → Warm Standby → Multi-Site → Backup & Restore
B. Multi-Site Active-Active → Warm Standby → Pilot Light → Backup & Restore
C. Backup & Restore → Pilot Light → Warm Standby → Multi-Site Active-Active
D. Backup & Restore → Multi-Site → Pilot Light → Warm Standby

### 31. To give an EC2 application access to read S3 without using long-term keys:
A. Use SCT
B. Bake an access key into the AMI
C. Use user-data to inject keys
D. Attach an IAM Role via instance profile

### 32. Which combination provides ordered, exactly-once message processing with fan-out to multiple subscribers?
A. EventBridge
B. SQS Standard with manual dedup
C. Kinesis Firehose
D. SNS FIFO with multiple SQS FIFO subscribers

### 33. To restrict S3 buckets from being accessed outside specific AWS Regions:
A. Bucket policy with `s3:RegionRestriction` (does not exist)
B. SCP using `aws:RequestedRegion` condition
C. NACL
D. CloudFront geo-restriction

### 34. A workload requires sub-millisecond reads to DynamoDB hot keys:
A. ElastiCache Memcached
B. DAX
C. CloudFront
D. Redshift

### 35. To configure path-based routing (e.g., `/api/*` → Service A, `/web/*` → Service B):
A. Application Load Balancer
B. Network Load Balancer
C. Gateway Load Balancer
D. NAT Gateway

### 36. To ensure that an instance in an Auto Scaling Group is replaced if it fails an ELB health check:
A. Use only EC2 status checks
B. Enable ELB health check on the ASG
C. Disable ASG
D. Spot only

### 37. The MOST appropriate routing policy in Route 53 for active-passive disaster recovery:
A. Geolocation
B. Latency-based
C. Failover routing with health checks
D. Weighted

### 38. A company wants to deploy serverless containerized microservices with no servers to manage. The BEST compute is:
A. Outposts
B. EC2 with Kubernetes
C. Lambda only
D. AWS Fargate (ECS or EKS)

### 39. To minimize cost of always-on idle EC2 dev instances:
A. Schedule stop/start; use Lambda or Spot for tests
B. Buy 3-year RIs
C. Use Dedicated Hosts
D. Use NAT

### 40. Which S3 storage class is BEST for unknown / shifting access patterns?
A. Intelligent-Tiering
B. Standard
C. Glacier Deep Archive
D. One Zone-IA

### 41. To privately serve an S3 site through CloudFront with the bucket NOT public:
A. Make the bucket public
B. CloudFront + OAC + Block Public Access ON
C. Use NAT Gateway
D. Use Direct Connect

### 42. The MOST appropriate caching strategy when a few items are read many times and rarely change:
A. Replicate the DB into the cache continuously
B. Disable caching
C. Cache-aside (lazy load) with TTL
D. Use S3 Glacier

### 43. To pre-aggregate analytics in Redshift for repeated dashboard queries:
A. WAF
B. NACL rules
C. Materialized Views in Redshift
D. Inspector

### 44. A workload with predictable EC2 usage 24/7 for 3 years that doesn't need flexibility:
A. Spot
B. On-Demand
C. RI Standard 3-year all-upfront
D. Capacity Reservation only

### 45. To get flexibility to change EC2 family/size and also discount Lambda and Fargate hours:
A. Compute Savings Plan
B. RI Standard
C. RI Convertible
D. Spot Block

### 46. To enable cross-region replication for an S3 bucket the architect must FIRST:
A. Enable Versioning on both buckets and create an IAM role
B. Enable Multi-AZ
C. Use a VPC endpoint
D. Disable Block Public Access

### 47. The simplest way to share a single Aurora MySQL DB across multiple accounts in an Organization is:
A. Direct Connect
B. Make the DB public
C. Snapshot copy daily
D. Use Resource Access Manager (RAM) with an Aurora cluster shared, or expose via API

### 48. To detect unusual cost spikes automatically with no manual thresholds:
A. WAF
B. AWS Budgets only
C. CloudWatch billing alarm
D. AWS Cost Anomaly Detection (ML-based)

### 49. To centralize backups across services with one policy:
A. CloudTrail
B. CloudWatch
C. Snowball
D. AWS Backup

### 50. To send the same event to multiple SQS queues:
A. SNS topic → multiple SQS subscriptions (fan-out)
B. Producer loops through queues
C. Kinesis Firehose
D. Step Functions

### 51. To enforce least-privilege per microservice running in ECS Fargate:
A. Run as root
B. Share a single IAM user across tasks
C. Use task IAM roles with narrow permissions
D. Hard-code keys

### 52. A workload needs to inspect all VPC ingress traffic with a 3rd-party Palo Alto firewall fleet:
A. NLB only
B. ALB
C. Gateway Load Balancer (GWLB) in front of the appliance fleet
D. NAT Gateway

### 53. The MAX object size in S3 is:
A. 5 GB
B. 50 GB
C. 5 TB
D. 5 PB

### 54. An ASG launches new instances behind an ALB. The application takes 2 minutes to be ready. To prevent the ASG from killing new instances:
A. Increase the desired count
B. Use Spot instances
C. Set a health check grace period and use ELB health checks on the ASG
D. Disable ELB

### 55. A workload's compliance requirement says data must reside ONLY in Frankfurt. The BEST control is:
A. Direct Connect
B. Use us-east-1
C. CloudFront alone
D. Use eu-central-1 region; SCP to deny actions in other regions

### 56. A workload uses Lambda fronted by API Gateway. To rate-limit and add caching at the API layer:
A. API Gateway usage plans + caching
B. WAF only
C. NACL
D. CloudFront only

### 57. To centrally manage WAF and Shield policies across many accounts in an Organization:
A. CloudTrail
B. AWS Firewall Manager
C. Config
D. CloudWatch

### 58. To migrate an on-prem NFS share to S3 nightly with secure online transfer:
A. Snowball
B. AWS DataSync (scheduled tasks)
C. Storage Gateway Tape
D. FTP

### 59. A workload needs ultra-low latency for users on 5G mobile networks in specific metros:
A. AWS Wavelength
B. AWS Outposts
C. Local Zones
D. CloudFront only

### 60. To consolidate security findings from GuardDuty, Inspector, Macie, and partner tools:
A. AWS Config
B. AWS Security Hub
C. CloudWatch
D. WAF

### 61. To track WHO deleted a critical resource yesterday:
A. CloudWatch metrics
B. CloudTrail
C. Config
D. Macie

### 62. A workload has spiky traffic. To match capacity with demand and pay only for usage:
A. Lambda (or Fargate / Aurora Serverless v2) — pay per use
B. EC2 reserved for max capacity
C. Dedicated Hosts
D. Outposts

### 63. To detect public S3 buckets and cross-account access risks proactively:
A. Snowball
B. WAF
C. IAM Access Analyzer
D. SCT

### 64. The BEST way to connect 12 VPCs and 2 on-prem data centers in a hub-and-spoke topology:
A. NAT Gateways everywhere
B. Mesh of VPC peerings
C. CloudFront
D. AWS Transit Gateway with VPN/DX attachments

### 65. To audit configuration drift on EBS volume encryption with automated remediation:
A. WAF
B. CloudTrail only
C. Inspector
D. AWS Config rule + SSM auto-remediation

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

## 📊 Scoring (mirror SAA-C03 scaled-score logic)

| Raw Score | Approx. Scaled | Verdict |
|-----------|----------------|---------|
| 60–65 | 900+ | 🏆 You're more than ready — go book the exam |
| 47–59 | 720–890 | ✅ Pass; review your weak spots once more |
| 39–46 | 600–710 | ⚠️ Border — wait a few days, drill flashcards, retest |
| <39 | <600 | 🔁 Re-study weak modules; don't book yet |

---

## 🔍 Review Process

1. Take the exam under realistic conditions: 130 minutes timer, no notes, no breaks.
2. After finishing — score yourself.
3. For each wrong answer:
   - Note the module
   - Re-read the relevant Reading + Cheat-Sheet
   - Add a flashcard
4. Wait 3+ days, then retake. Goal: 80%+ before booking.

---

## 🏁 The Day Before The Real Exam

- 📋 Re-read every module's Cheat-Sheet
- 🃏 Run through Flashcards once
- 🛌 Sleep 8+ hours
- ☕ Light breakfast, hydrate
- 🪪 Bring two forms of ID (test center) OR clear room + good lighting (online proctored)
- ⏰ Arrive / log in 30 min early
- 🧘 You've got this. Trust your prep.

---

➡️ Good luck. After you pass, share your story so others can learn from it. 🚀
