# 🧪 Practice Exam 2 — AWS Solutions Architect Associate (SAA-C03)

> **Conditions:** Set a 100-minute timer. 50 questions. Treat it like the real thing.
> **Pass mark:** 36/50 (72%)
> Take this AFTER finishing all 10 modules.

---

## 📝 Questions

### 1. A company runs Aurora MySQL globally and requires <1 second cross-region replication with rapid failover. The architect should use:
A. Cross-region read replica only
B. RDS Multi-AZ
C. Aurora Global Database
D. Snapshot copies nightly

### 2. To enable multiple independent consumer applications to replay events from the last 24 hours:
A. SQS Standard
B. SNS
C. Kinesis Data Streams
D. SQS FIFO

### 3. The MOST cost-effective storage class for archival data accessed once a year with 12-hour retrieval tolerance:
A. S3 Glacier Deep Archive
B. S3 Standard-IA
C. S3 Standard
D. S3 Intelligent-Tiering

### 4. To restrict CloudFront access to authenticated paying users while keeping S3 private:
A. NAT Gateway
B. Public S3 bucket
C. CloudFront with signed URLs/cookies + OAC + private S3
D. Direct Connect

### 5. To accelerate uploads of a 5 GB file from users in Sydney to a bucket in us-east-1:
A. Single PUT
B. S3 Transfer Acceleration
C. Direct Connect
D. CloudFront

### 6. A company needs to process every uploaded image with a Lambda function. The BEST setup is:
A. S3 event notification → Lambda
B. CloudFront → Lambda
C. SQS → Lambda polling at random intervals
D. EC2 cron job

### 7. A new microservice publishes events; many services AND Datadog (a SaaS) need to consume them with content-based routing. The BEST tool is:
A. EventBridge with rules and SaaS partner integration
B. SQS Standard
C. SNS only
D. Kinesis Firehose

### 8. To run a Lambda function every 15 minutes on a schedule:
A. SQS delay queue loop
B. EventBridge Scheduler (or scheduled rule)
C. CloudFront
D. NAT Gateway

### 9. A 24/7 web app needs to survive a regional outage with RTO and RPO of minutes. The MOST appropriate DR strategy is:
A. Backup & Restore
B. Warm Standby
C. Pilot Light
D. Multi-Site Active-Active

### 10. The CHEAPEST DR strategy when RTO of hours is acceptable:
A. Backup & Restore (IaC + S3/EBS snapshot copies)
B. Pilot Light
C. Warm Standby
D. Multi-Site Active-Active

### 11. A 500 TB on-prem dataset must be transferred to S3. The on-prem internet link is 200 Mbps. The BEST method is:
A. Snowball Edge Storage Optimized
B. DataSync over the internet
C. Direct Connect (months to provision)
D. SFTP

### 12. To migrate a Microsoft SQL Server database to Aurora PostgreSQL with minimal downtime:
A. DMS + Schema Conversion Tool (SCT)
B. AWS Backup
C. Snowball
D. Storage Gateway

### 13. To lift-and-shift 200 VMware VMs to EC2:
A. CloudFront
B. AWS Backup
C. Direct Connect
D. AWS Application Migration Service (MGN)

### 14. To replace a physical tape backup library while preserving the existing on-prem backup software:
A. CloudFront
B. AWS Backup
C. Snowball
D. Storage Gateway — Tape Gateway (VTL)

### 15. To centrally back up EBS, RDS, EFS, DynamoDB, and FSx under one policy:
A. CloudWatch
B. CloudTrail
C. AWS Backup
D. Snowball

### 16. A workload requires sub-millisecond reads against hot DynamoDB keys with minimal code changes:
A. DAX
B. ElastiCache Memcached
C. CloudFront
D. Redshift

### 17. A company needs to detect cryptocurrency mining and unusual IAM activity. The BEST service is:
A. Inspector
B. Macie
C. GuardDuty
D. Detective

### 18. To discover PII (credit cards, SSNs) accidentally placed in S3 buckets:
A. Inspector
B. GuardDuty
C. Macie
D. WAF

### 19. To audit configuration drift on AWS resources (e.g., "all S3 buckets must be encrypted"):
A. Macie
B. CloudTrail
C. GuardDuty
D. AWS Config rules with optional remediation

### 20. To trace latency through API Gateway → Lambda → DynamoDB in a request:
A. WAF
B. CloudWatch alone
C. CloudTrail
D. AWS X-Ray

### 21. To get notified when monthly forecasted AWS spend exceeds $5,000:
A. WAF
B. Inspector
C. CloudFront
D. CloudWatch alarm on Billing metric OR AWS Budgets

### 22. To get ML-based detection of unusual spend patterns (no manual threshold):
A. CloudWatch
B. AWS Cost Anomaly Detection
C. Inspector
D. WAF

### 23. To rightsize EC2 instances and ASGs with ML recommendations:
A. AWS Compute Optimizer (free)
B. Trusted Advisor only
C. CloudFront
D. SCT

### 24. To enable global multi-active writes for a NoSQL serverless application:
A. RDS Multi-AZ
B. DynamoDB Global Tables
C. Aurora Read Replicas in one region
D. ElastiCache

### 25. To privately expose a microservice (running on an NLB) to other VPCs/accounts WITHOUT VPC peering:
A. Direct Connect
B. NAT Gateway
C. CloudFront
D. AWS PrivateLink (Endpoint Service)

### 26. Which Route 53 routing policy is MOST appropriate for active-passive disaster recovery?
A. Simple routing
B. Weighted routing
C. Geolocation routing
D. Failover routing with health checks

### 27. The BEST way to give end-users of a mobile app temporary AWS credentials to upload to S3:
A. Bake creds into the app
B. Create an IAM user per user
C. Public S3 bucket
D. Cognito Identity Pools

### 28. A company runs Spot instances mixed with On-Demand in an ASG using a single launch template:
A. Use one large RI
B. Use a mixed instances policy with multiple instance types
C. Use one instance type only
D. Disable ASG

### 29. To process tens of millions of short event-driven workflows daily with the LOWEST cost per workflow:
A. EC2 cron
B. Step Functions Standard
C. Step Functions Express
D. CloudFront

### 30. The recommended way to lock an S3 origin to ONLY CloudFront access today is:
A. Origin Access Identity (OAI, legacy)
B. Origin Access Control (OAC)
C. Public bucket
D. IAM user

### 31. A company's site needs SQL-injection and XSS protection at the edge:
A. NAT
B. Direct Connect
C. AWS WAF with managed rule groups
D. SCT

### 32. To allow only EU users to access an application for residency compliance:
A. Route 53 Geolocation routing
B. CloudFront geo restriction (and/or Geolocation routing)
C. WAF country-block rule
D. Any of A, B, or C — depending on layer

### 33. A workload requires ordered, exactly-once message processing with fan-out to multiple SQS queues. The BEST design is:
A. EventBridge
B. SQS Standard with manual dedup
C. Kinesis Firehose
D. SNS FIFO + multiple SQS FIFO subscribers

### 34. Which combination provides the LOWEST cost for a non-critical, idle-overnight dev EC2 workload?
A. 3-year RI all-upfront
B. On-Demand 24/7
C. Multi-Site Active-Active
D. Stop instances after-hours + Spot for tests

### 35. To recover from accidental DELETE operations on objects in a bucket:
A. Use CloudFront
B. Enable Versioning before deletions occur
C. Disable Block Public Access
D. Increase replication

### 36. To inspect requested traffic at L3/L4/L7 for malicious patterns inside a VPC (IPS-style):
A. AWS Network Firewall
B. WAF only
C. NACL only
D. IAM

### 37. A workload with predictable cyclical traffic (every weekday 9–6) should use which ASG scaling policy:
A. Step scaling
B. Target tracking
C. Scheduled scaling
D. Predictive scaling

### 38. To migrate ~100 TB to AWS quickly, mostly over a slow internet link, while also doing local processing during transfer:
A. DataSync only
B. Snowball Edge Storage Optimized
C. Snowball Edge Compute Optimized
D. Direct Connect

### 39. Aurora Serverless v2 is BEST suited to:
A. Steady 24/7 workload at maximum capacity
B. Petabyte-scale analytics
C. Spiky or idle workloads needing per-second scaling
D. Mobile push notifications

### 40. The MOST cost-effective way to enable global users to read static images cached at the edge:
A. CloudFront in front of S3 with OAC
B. EC2 in each region serving images
C. Direct Connect
D. NAT Gateway

### 41. The MOST appropriate database service for a tamper-evident, cryptographically verifiable ledger of financial transactions:
A. QLDB
B. RDS
C. DynamoDB
D. Redshift

### 42. A workload requires Cassandra-compatible NoSQL but with serverless billing:
A. DynamoDB
B. Amazon Keyspaces
C. DocumentDB
D. Aurora

### 43. To reduce RDS database load from many repeated identical SELECT queries:
A. Make the DB bigger
B. Add ElastiCache (Redis if HA/persistence) for cache-aside
C. Move to Redshift
D. Use NACLs

### 44. To run AWS-managed compute and storage inside the customer's own data center:
A. AWS Outposts
B. Direct Connect
C. Local Zones
D. CloudFront

### 45. To get sub-10ms latency to users in major metros outside main regions (e.g., LA, Boston):
A. AWS Outposts
B. AWS Local Zones
C. CloudFront only
D. Direct Connect

### 46. To enforce that all uploads to a bucket are encrypted with KMS:
A. Block Public Access
B. Bucket policy denying PUTs without `s3:x-amz-server-side-encryption: aws:kms`
C. CloudFront
D. Lifecycle rule

### 47. The right service to centralize WAF and Shield rules across many accounts:
A. AWS Firewall Manager
B. Config
C. CloudWatch
D. CloudTrail

### 48. To migrate ongoing DB changes from on-prem to AWS with no downtime cutover:
A. AWS Backup
B. Snowball
C. DMS with CDC tasks
D. Storage Gateway

### 49. A company runs Lambda that creates many short-lived RDS connections, causing connection storms. The BEST fix is:
A. Larger RDS instance
B. RDS Proxy
C. CloudFront
D. Disable Multi-AZ

### 50. To extract a few rows from a 10 GB CSV in S3 without downloading the whole file:
A. Lambda streaming download
B. Athena via Glue
C. CloudFront
D. S3 Select

---

## 🎯 Answer Key (No Cheating!)

```
1.  C    11. A    21. D    31. C    41. A
2.  C    12. A    22. B    32. D    42. B
3.  A    13. D    23. A    33. D    43. B
4.  C    14. D    24. B    34. D    44. A
5.  B    15. C    25. D    35. B    45. B
6.  A    16. A    26. D    36. A    46. B
7.  A    17. C    27. D    37. C    47. A
8.  B    18. C    28. B    38. C    48. C
9.  B    19. D    29. C    39. C    49. B
10. A    20. D    30. B    40. A    50. D
```

---

## 📊 Scoring

| Score | Verdict |
|-------|---------|
| 45–50 | 🏆 Ready for the Final Mock |
| 36–44 | ✅ Pass; review wrong ones |
| 28–35 | ⚠️ Re-study weak modules; retake in a week |
| <28 | 🔁 Re-read 2–3 modules + flashcards |

---

## 🔍 Review Process

1. For every wrong answer, identify the module and re-read the relevant section
2. Add the concept to your Flashcards
3. Note any "blind spot" services and re-quiz on them

---

➡️ When you're scoring 80%+ on this exam: take the [Final Mock Exam](./Final-Mock-Exam.md) under real exam conditions.
