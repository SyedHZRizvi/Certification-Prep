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

## 📚 Detailed answer rationales

**Q1. Answer: C** — **The customer.** EC2 is IaaS; customer owns OS patching and up. **Wrong:** A (AWS only patches hypervisor + hardware); B (no 50/50 split per Shared Responsibility); D (AWS Support advises but doesn't run your patches). **Takeaway.** EC2 = customer patches OS. RDS / Lambda = AWS patches OS. Memorize the boundary.

**Q2. Answer: C** — **AWS.** Physical security is security OF the cloud, always AWS's job. **Wrong:** A (local government doesn't run AWS data centers); B (customer never has DC physical access); D (CSA publishes standards, doesn't operate DCs). **Takeaway.** Physical → always AWS.

**Q3. Answer: A** — **GuardDuty.** Analyzes CloudTrail + VPC Flow Logs + DNS + EKS audit logs for threats via ML. **Wrong:** B (Macie = S3 PII discovery, different signal); C (Inspector = vulnerability scanning, not behavior anomalies); D (Trusted Advisor = best-practice checks, not threat detection). **Takeaway.** "Anomalous account behavior" → GuardDuty.

**Q4. Answer: C** — **Macie.** Macie uses ML to find PII inside S3. **Wrong:** A (GuardDuty looks at logs not bucket contents); B (Inspector scans EC2/ECR/Lambda for CVEs); D (Config tracks resource state). **Takeaway.** "PII in S3" → Macie, always.

**Q5. Answer: B** — **AWS Organizations + SCPs.** Organizations provides multi-account management + consolidated billing; SCPs are the guardrails. **Wrong:** A (IAM Identity Center is for user SSO, not account guardrails); C (Trusted Advisor recommends, doesn't enforce); D (Artifact downloads compliance reports). **Takeaway.** Multi-account guardrails = Organizations + SCPs.

**Q6. Answer: A** — **MFA + small set of tasks.** Root is for account-level operations only; MFA required. **Wrong:** B (daily admin = create an IAM admin user, never root); C (NEVER share root); D (Lambda uses IAM Roles, not root). **Takeaway.** Root = lock down + MFA + use only for billing / account closure.

**Q7. Answer: A** — **Explicit Deny always wins.** Fundamental IAM rule from the IAM policy evaluation logic. **Wrong:** B (Allow loses to explicit Deny); C (order doesn't matter); D (policies absolutely can conflict). **Takeaway.** Explicit Deny > anything. Memorize this single rule.

**Q8. Answer: B** — **IAM Role on the instance.** Roles deliver temporary, auto-rotating credentials via instance metadata. **Wrong:** A (long-lived keys are a Capital One-breach-style risk); C (root credentials = blast radius infinity); D (public S3 fixes the wrong problem). **Takeaway.** EC2 → AWS service = always an IAM Role, never embedded keys.

**Q9. Answer: B** — **ACM.** AWS Certificate Manager provides free public TLS certs for use with ALB / CloudFront / API Gateway. **Wrong:** A (KMS is for symmetric/asymmetric encryption keys, not TLS certs); C (CloudHSM is FIPS-140-2 L3 HSM hardware); D (Secrets Manager stores secrets, doesn't issue certs). **Takeaway.** Free TLS for AWS services → ACM.

**Q10. Answer: A** — **Free + automatic.** Shield Standard is on by default for ELB / CloudFront / Route 53, no setup, no cost. **Wrong:** B ($3K/mo is Shield Advanced); C (Shield Standard isn't tied to support); D (PII discovery is Macie). **Takeaway.** Shield Standard = free, automatic, basic DDoS.

**Q11. Answer: A** — **DRT + cost protection.** Shield Advanced uniquely gives DDoS Response Team access + bill credits for autoscaling/data transfer during attacks. **Wrong:** B (Auto Scaling is unrelated); C (free EC2 isn't a Shield benefit); D (Multi-AZ is a deployment pattern). **Takeaway.** Shield Advanced (~$3K/mo) = DRT + cost protection + enhanced detection.

**Q12. Answer: A** — **Secrets Manager.** Built-in rotation for RDS / Redshift / DocumentDB. **Wrong:** B (S3 isn't a secret store); C (CloudTrail is audit); D (Health Dashboard is operational events). **Takeaway.** "Secrets + auto-rotate" → Secrets Manager. Parameter Store is similar but no built-in rotation.

**Q13. Answer: D** — **RDS Multi-AZ.** Synchronous standby + auto failover = textbook HA for relational. **Wrong:** A (DynamoDB is NoSQL, not relational); B (ElastiCache is in-memory cache, not OLTP DB); C (Redshift is OLAP). **Takeaway.** "Relational + HA" → RDS Multi-AZ.

**Q14. Answer: D** — **Asynchronous read scaling.** Read Replicas exist to offload reads from the primary; async replication. **Wrong:** A (sync HA = Multi-AZ); B (cross-region is a use case but not the only one); C (backups are separate). **Takeaway.** Multi-AZ = HA. Read Replicas = read scaling. Different.

**Q15. Answer: C** — **DynamoDB.** Serverless NoSQL, single-digit ms. **Wrong:** A (RDS is provisioned + relational); B (Redshift is OLAP analytics); D (Neptune is graph). **Takeaway.** "Serverless + key-value + ms at any scale" → DynamoDB.

**Q16. Answer: A** — **Redshift.** Petabyte OLAP for BI. **Wrong:** B (DynamoDB is OLTP key-value); C (ElastiCache is in-memory); D (Lambda doesn't do analytics scans). **Takeaway.** "BI + petabytes + analytical" → Redshift.

**Q17. Answer: C** — **MySQL + PostgreSQL.** Aurora's two editions. **Wrong:** A (MongoDB = DocumentDB; Cassandra = Keyspaces); B (Oracle/SQL Server have their own RDS editions, not Aurora); D (SQLite is local-file). **Takeaway.** Aurora = MySQL OR PostgreSQL compatible. Memorize.

**Q18. Answer: C** — **6 copies across 3 AZs.** Aurora's signature storage architecture. **Wrong:** A (single-AZ would defeat HA); B (4-region is unrealistic); D (snapshot model is for RDS). **Takeaway.** Aurora storage = 6×3. Tested directly.

**Q19. Answer: D** — **ElastiCache.** Sub-ms in-memory cache (Redis or Memcached). **Wrong:** A (S3 is object, ~tens of ms); B (Redshift is OLAP); C (Glue is ETL). **Takeaway.** "Sub-ms cache in front of RDS" → ElastiCache.

**Q20. Answer: D** — **Neptune.** Graph DB for relationship queries. **Wrong:** A (DynamoDB is key-value); B (Timestream is time-series); C (RDS PostgreSQL can do recursive CTEs but doesn't scale to graph workloads). **Takeaway.** "Friend-of-friend / relationship" → Neptune.

**Q21. Answer: D** — **DMS + SCT.** DMS migrates data; SCT converts cross-engine schemas (Oracle → Aurora PG). **Wrong:** A (MGN is for servers, not databases); B (Snowball is physical disk transfer); C (DataSync is for files, not databases). **Takeaway.** "Cross-engine DB migration" → DMS + SCT.

**Q22. Answer: B** — **Every API call.** CloudTrail = audit log of who/what/when. **Wrong:** A (CPU metrics = CloudWatch); C (resource state = Config); D (vuln scans = Inspector). **Takeaway.** CloudTrail = WHO did the API call. Config = WHAT does the resource look like.

**Q23. Answer: A** — **Metrics + logs + alarms.** CloudWatch's three pillars. **Wrong:** B (API audit = CloudTrail); C (DDoS = Shield); D (compliance = Artifact). **Takeaway.** CloudWatch = M+L+A for AWS resources.

**Q24. Answer: B** — **Config over time + rules.** Tracks resource config and evaluates against compliance rules. **Wrong:** A (CPU = CloudWatch); C (bandwidth = CloudWatch / VPC Flow Logs); D (cache hits = CloudFront metrics). **Takeaway.** Config = resource state drift + compliance.

**Q25. Answer: D** — **Session Manager.** Browser-based SSH-less access to EC2 via Systems Manager. **Wrong:** A (Direct Connect = on-prem connectivity); B (bastion still requires SSH); C (public IP = exposed to internet). **Takeaway.** "Connect to EC2, no port 22" → Session Manager. No more bastion hosts.

**Q26. Answer: D** — **Migration.** Migration is NOT a Trusted Advisor category. The 5 are: Cost Optimization, Performance, Security, Fault Tolerance, Service Limits. **Wrong:** A, B, C are all valid categories. **Takeaway.** Memorize the 5 Trusted Advisor categories.

**Q27. Answer: D** — **Email + one contact + business hours.** Developer Support's defining limits. **Wrong:** A (24/7 phone + TAM = Enterprise); B (TLS certs are ACM); C (full Trusted Advisor = Business+). **Takeaway.** Developer = cheap, email-only, business hours.

**Q28. Answer: B** — **< 1 hour.** Business Support's production-down SLA. **Wrong:** A (15 min = Enterprise); C (30 min = Enterprise On-Ramp); D (4 hours is below Business standard). **Takeaway.** Memorize Business < 1 hr, Enterprise On-Ramp < 30 min, Enterprise < 15 min.

**Q29. Answer: C** — **Enterprise (dedicated).** Only Enterprise tier has a *dedicated* TAM. **Wrong:** A (Developer has no TAM); B (Business has no TAM); D (Enterprise On-Ramp has *pool* of TAMs, not dedicated). **Takeaway.** Dedicated TAM = Enterprise. Pool of TAMs = Enterprise On-Ramp.

**Q30. Answer: B** — **Compliance reports.** Artifact is the self-service portal for SOC 2 / ISO / PCI / FedRAMP reports. **Wrong:** A (CI/CD = CodePipeline); C (provision EC2 = console/CFN); D (DDoS = Shield). **Takeaway.** "Download compliance reports" → Artifact.

**Q31. Answer: C** — **Elastic Beanstalk.** Beanstalk service itself is free; you pay for EC2/ELB/RDS it spins up. **Wrong:** A (EC2 charges hourly); B (RDS charges hourly); D (NAT Gateway is per-hour + per-GB). **Takeaway.** Free services include IAM, VPC (basic), CloudFormation, Beanstalk, Organizations — you only pay for the resources they create.

**Q32. Answer: D** — **In free, out paid.** Data IN is generally free; data OUT to internet costs $. **Wrong:** A reverses it; B (not all transfer is the same); C (all-free is wrong). **Takeaway.** "Data IN free, data OUT $$$" — the #1 surprise on AWS bills.

**Q33. Answer: D** — **"Lifetime Free" doesn't exist.** The 3 categories are 12-Months Free, Always Free, Trials. **Wrong:** A, B, C are all valid categories. **Takeaway.** Memorize the 3 Free Tier categories.

**Q34. Answer: D** — **Compute Optimizer.** ML-based right-sizing for EC2 / EBS / Lambda. **Wrong:** A (Snow = physical migration); B (WAF = web firewall); C (Marketplace = software catalog). **Takeaway.** "ML right-sizing" → Compute Optimizer.

**Q35. Answer: B** — **Alerts, not enforcement.** Budgets sends alerts; doesn't block spend. **Wrong:** A (Budgets cannot prevent spending — common misconception); C (Budgets don't auto-purchase SP); D (CloudWatch is unrelated). **Takeaway.** Budgets = alert; SCP = prevent.

**Q36. Answer: A** — **Cost Allocation Tags.** Tag resources, activate in Billing Console, see breakdown in Cost Explorer / CUR. **Wrong:** B (IAM Groups = permissions); C (VPCs = network); D (Security Groups = firewall). **Takeaway.** "Chargeback by team" → Cost Allocation Tags.

**Q37. Answer: C** — **Migration is NOT a pillar.** The 6 pillars are Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, Sustainability. **Wrong:** A, B, D are valid pillars. **Takeaway.** Memorize the 6 pillars. Sustainability was added in 2021.

**Q38. Answer: C** — **2021.** Sustainability pillar was added at re:Invent 2021. **Wrong:** A, B (too early); D (too late). **Takeaway.** Sustainability = 2021. Original 5 pillars = 2015.

**Q39. Answer: C** — **Rehost.** "Lift-and-shift" with no code changes = Rehost. **Wrong:** A (Refactor = rewrite); B (Replatform = lift + minor optimization); D (Retire = decommission). **Takeaway.** Memorize the 6 Rs trigger phrases.

**Q40. Answer: A** — **Repurchase.** Switching to a different SaaS product = Repurchase. **Wrong:** B (Replatform = same product, cloud-optimized); C (Refactor = rewrite for cloud-native); D (Retain = keep on-prem). **Takeaway.** "Switch products" → Repurchase.

**Q41. Answer: A** — **Lift-and-shift servers.** MGN (replaces older SMS / CloudEndure) is the modern server migration tool. **Wrong:** B (DBs = DMS); C (files = DataSync); D (AI training = SageMaker). **Takeaway.** MGN = server lift-and-shift. Modern, post-2021.

**Q42. Answer: B** — **DataSync.** Bulk file transfer over internet / DX, with bandwidth control + scheduling. **Wrong:** A (MGN = servers); C (Storage Gateway = ongoing hybrid); D (Direct Connect alone provides the pipe but not the orchestration). **Takeaway.** "Bulk file transfer + scheduling" → DataSync.

**Q43. Answer: B** — **Free self-assessment.** Well-Architected Tool is free; walks you through the 6-pillar checklist. **Wrong:** A (not paid); C (not a migration tool); D (not DDoS). **Takeaway.** WA Framework = principles. WA Tool = free self-assessment service.

**Q44. Answer: A** — **Select → Advanced → Premier.** APN tier order, lowest to highest. **Wrong:** B, C, D are made-up tier names. **Takeaway.** Memorize Select → Advanced → Premier.

**Q45. Answer: B** — **6 perspectives.** CAF perspectives: Business, People, Governance, Platform, Security, Operations. **Wrong:** A (4 is wrong), C, D (too many). **Takeaway.** CAF = 6 perspectives. Well-Architected = 6 pillars. Two different "sixes."

**Q46. Answer: B** — **DB users + data.** On RDS (PaaS), AWS handles OS / engine / hardware; customer handles users, schema, and data access. **Wrong:** A (OS patching = AWS on RDS); C (HW = AWS); D (DC security = AWS). **Takeaway.** RDS boundary: AWS owns the engine; you own the data inside.

**Q47. Answer: A** — **CloudWatch Alarm.** Watches a metric, fires on threshold, can SNS-notify or trigger Auto Scaling. **Wrong:** B (Config Rule evaluates config state); C (CloudTrail Event is API call log); D (Trusted Advisor is best-practice scoring). **Takeaway.** "Threshold + alert" → CloudWatch Alarm.

**Q48. Answer: C** — **Wavelength.** AWS compute *inside* 5G carrier networks for ultra-low mobile latency. **Wrong:** A (Outposts = your DC); B (Local Zones = metros); D (GovCloud = isolated regions). **Takeaway.** "Inside 5G" → Wavelength.

**Q49. Answer: B** — **Non-transitive.** VPC Peering does not transit through intermediate VPCs. **Wrong:** A (would be transitive — wrong); C (no DX dependency); D (works in all regions). **Takeaway.** VPC Peering non-transitive → use Transit Gateway for hub topology.

**Q50. Answer: D** — **Security Hub.** Aggregates findings from GuardDuty / Inspector / Macie / partners + runs benchmarks. **Wrong:** A (Config tracks state); B (Trusted Advisor is best-practice); C (CloudWatch Logs is operational). **Takeaway.** "Single security dashboard" → Security Hub.

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
