# 🧪 Practice Exam 2 — AWS Cloud Practitioner (CLF-C02 Style)

> **Conditions:** Set a 70-minute timer. 50 questions. Treat it like the real thing.
> **Pass mark:** 35/50 (70%) — but aim for 40+ to feel confident for the final mock
> Take this AFTER finishing ALL 8 Modules.

---

## 📝 Questions

### 1. Per the AWS Shared Responsibility Model, who patches the guest OS of an EC2 instance?
A. AWS
B. Split 50/50
C. The customer
D. AWS Support

### 2. Per the AWS Shared Responsibility Model, who is responsible for the physical security of AWS data centers?
A. The local government
B. The customer
C. AWS
D. Cloud Security Alliance

### 3. Which AWS service provides intelligent threat detection by analyzing CloudTrail, VPC Flow Logs, and DNS logs?
A. Amazon GuardDuty
B. Amazon Macie
C. Amazon Inspector
D. AWS Trusted Advisor

### 4. Which service discovers PII (credit cards, SSNs) inside S3 buckets?
A. GuardDuty
B. Inspector
C. Macie
D. AWS Config

### 5. To centrally manage 30 AWS accounts with consolidated billing and guardrails, use:
A. IAM Identity Center alone
B. AWS Organizations + Service Control Policies
C. AWS Trusted Advisor
D. AWS Artifact

### 6. The IAM root user should:
A. Be MFA-protected and used only for a small set of account-level tasks
B. Be used for daily admin tasks
C. Be shared with all developers
D. Be assigned to a Lambda function

### 7. Which is TRUE about IAM policy evaluation?
A. Explicit Deny always wins
B. Allow always wins
C. Whichever rule was added most recently wins
D. Policies don't conflict

### 8. To allow an EC2 instance to read from an S3 bucket WITHOUT embedding access keys, use:
A. Long-lived IAM user credentials on the instance
B. An IAM Role attached to the instance
C. The root user's credentials
D. Make the S3 bucket public

### 9. Which service provides FREE public TLS/SSL certificates for AWS-integrated services?
A. AWS KMS
B. AWS Certificate Manager (ACM)
C. AWS CloudHSM
D. AWS Secrets Manager

### 10. AWS Shield Standard:
A. Is free and automatically enabled for ELB, CloudFront, Route 53
B. Costs $3,000/month
C. Is only available with Enterprise Support
D. Provides PII discovery

### 11. AWS Shield Advanced uniquely provides:
A. 24/7 DDoS Response Team (DRT) access + cost protection during attacks
B. Auto Scaling
C. Free EC2 instances
D. Multi-AZ deployments

### 12. To store database passwords with automatic rotation, use:
A. AWS Secrets Manager
B. S3 with no encryption
C. CloudTrail
D. AWS Health Dashboard

### 13. Which service is BEST for traditional SQL Multi-AZ HA?
A. Amazon DynamoDB
B. Amazon ElastiCache
C. Amazon Redshift
D. Amazon RDS Multi-AZ

### 14. RDS Read Replicas provide:
A. Synchronous HA
B. Cross-Region migration only
C. Free backups
D. Asynchronous read scaling

### 15. Which is BEST for serverless key-value lookups at any scale with single-digit-ms latency?
A. RDS for MySQL
B. Amazon Redshift
C. Amazon DynamoDB
D. Amazon Neptune

### 16. To run analytical OLAP queries over petabytes of structured data for BI, use:
A. Redshift
B. DynamoDB
C. ElastiCache
D. Lambda

### 17. Aurora is API-compatible with:
A. MongoDB and Cassandra
B. Oracle and SQL Server
C. MySQL and PostgreSQL
D. SQLite

### 18. Aurora's storage layer replicates data across:
A. 2 copies in 1 AZ
B. 4 copies in 4 Regions
C. 6 copies across 3 AZs
D. 1 copy with snapshots

### 19. Which is BEST for sub-millisecond in-memory caching in front of an RDS database?
A. Amazon S3
B. Amazon Redshift
C. AWS Glue
D. Amazon ElastiCache

### 20. Which is for "friend-of-friend" / graph relationship queries?
A. DynamoDB
B. Timestream
C. RDS PostgreSQL
D. Amazon Neptune

### 21. Which service migrates a database from on-prem Oracle to AWS Aurora with minimal downtime?
A. AWS MGN
B. AWS Snowball
C. AWS DataSync
D. AWS DMS (+ SCT for schema)

### 22. CloudTrail records:
A. CPU metrics
B. Every AWS API call made in your account
C. Resource configuration drift
D. Vulnerability scans

### 23. CloudWatch is BEST described as:
A. Metrics + logs + alarms
B. An API audit log
C. A DDoS protection service
D. A compliance reporting tool

### 24. AWS Config tracks:
A. CPU usage only
B. Resource configuration over time + evaluates against rules
C. Network bandwidth
D. CloudFront cache hit rates

### 25. To connect to an EC2 instance via the browser WITHOUT opening port 22, use:
A. AWS Direct Connect
B. A bastion host
C. A public IP only
D. AWS Systems Manager Session Manager

### 26. AWS Trusted Advisor's 5 categories include all EXCEPT:
A. Cost Optimization
B. Performance
C. Security
D. Migration

### 27. The Developer Support plan provides:
A. 24/7 phone support + dedicated TAM
B. Free TLS certs
C. All Trusted Advisor checks
D. Business-hours email support with one contact

### 28. Business Support has a response time of LESS THAN ___ for production-down issues:
A. 15 minutes
B. 1 hour
C. 30 minutes
D. 4 hours

### 29. A DEDICATED Technical Account Manager (TAM) is included in:
A. Developer
B. Business
C. Enterprise (dedicated)
D. Enterprise On-Ramp (pool of TAMs)

### 30. AWS Artifact is used to:
A. Build CI/CD pipelines
B. Download AWS compliance reports (SOC, ISO, PCI, etc.)
C. Provision EC2
D. Block DDoS

### 31. Which is FREE — you only pay for resources it creates?
A. EC2
B. RDS
C. AWS Elastic Beanstalk
D. NAT Gateway

### 32. AWS data transfer pricing:
A. Outbound is free; inbound is paid
B. All transfer costs the same
C. All transfer is free
D. Inbound to AWS is free; outbound to internet is paid

### 33. Which AWS Free Tier category does NOT exist?
A. 12-Months Free
B. Always Free
C. Trials
D. Lifetime Free

### 34. To right-size EC2 / EBS / Lambda using ML recommendations, use:
A. AWS Snow Family
B. AWS WAF
C. AWS Marketplace
D. AWS Compute Optimizer

### 35. AWS Budgets:
A. Block AWS spending when threshold is hit
B. Send alerts when spend or usage exceeds threshold
C. Automatically purchase Savings Plans
D. Replace CloudWatch

### 36. To categorize AWS spend by team / project, use:
A. Cost Allocation Tags
B. IAM Groups
C. VPCs
D. Security Groups

### 37. Which is NOT a Well-Architected pillar?
A. Reliability
B. Cost Optimization
C. Migration
D. Sustainability

### 38. The Sustainability pillar was added in:
A. 2010
B. 2017
C. 2021
D. 2024

### 39. Lift-and-shift (no code changes, just run on EC2) is which of the 6 Rs?
A. Refactor
B. Replatform
C. Rehost
D. Retire

### 40. Switching from an on-prem CRM to Salesforce SaaS is:
A. Repurchase
B. Replatform
C. Refactor
D. Retain

### 41. AWS Application Migration Service (MGN) is used for:
A. Lift-and-shift server migration
B. Database migration
C. Bulk file transfer
D. AI/ML training

### 42. To transfer bulk files from on-prem NFS to S3 with bandwidth control and scheduling, use:
A. AWS MGN
B. AWS DataSync
C. AWS Storage Gateway only
D. AWS Direct Connect alone

### 43. The AWS Well-Architected Tool is:
A. A paid service
B. A free service that helps you self-assess your workload against the Framework
C. A migration tool
D. A DDoS protection service

### 44. APN (AWS Partner Network) tiers, lowest to highest, are:
A. Select → Advanced → Premier
B. Bronze → Silver → Gold
C. Basic → Standard → Premium
D. Starter → Growth → Enterprise

### 45. The AWS Cloud Adoption Framework (CAF) is organized into HOW MANY perspectives?
A. 4
B. 6
C. 8
D. 12

### 46. Which is a customer responsibility for an RDS database?
A. Patching the underlying OS
B. Managing database users, schemas, and data
C. Hardware maintenance
D. Datacenter physical security

### 47. To send an SNS notification when EC2 CPU exceeds 80% for 5 minutes, use:
A. CloudWatch Alarm
B. AWS Config Rule
C. CloudTrail Event
D. Trusted Advisor

### 48. Which AWS service brings AWS compute INSIDE 5G carrier networks for ultra-low mobile latency?
A. AWS Outposts
B. AWS Local Zones
C. AWS Wavelength
D. AWS GovCloud

### 49. Which is TRUE about VPC Peering?
A. It is transitive (A↔B↔C means A↔C)
B. It is NON-transitive
C. It requires Direct Connect
D. It only works in `us-east-1`

### 50. To aggregate security findings from GuardDuty, Inspector, Macie, and partner tools, use:
A. AWS Config
B. AWS Trusted Advisor
C. CloudWatch Logs
D. AWS Security Hub

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
| 45–50 | 🏆 You're ready for the Final Mock! |
| 40–44 | ✅ Good — review wrong answers, then Final Mock |
| 35–39 | ⚠️ Pass-equivalent but tight; restudy weak modules |
| 28–34 | 🔁 Significant gaps; restudy + retake in 4 days |
| <28 | 🛑 Restart from Module 1 |

---

## 🔍 Review Process

For EACH wrong answer:
1. Note which module covered it (mapping below)
2. Re-read the section
3. Add to flashcards
4. Retake just the wrong subset 3 days later

---

## 🗺️ Question → Module Mapping

| Module | Questions |
|--------|-----------|
| 1 (Cloud Fundamentals) | 33, 48, 49 |
| 2 (Compute) | 47 |
| 3 (Storage) | 42 |
| 4 (Networking & CDN) | 49 |
| 5 (Databases) | 13, 14, 15, 16, 17, 18, 19, 20, 21, 46 |
| 6 (Security & IAM) | 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 50 |
| 7 (Mgmt, Monitoring, Pricing) | 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 34, 35, 36, 47 |
| 8 (Well-Architected & Migration) | 37, 38, 39, 40, 41, 42, 43, 44, 45 |

---

➡️ When ready: [Final Mock Exam](./Final-Mock-Exam.md) (real exam length: 65 Qs / 90 min)
