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

## Detailed answer rationales

**Q1. Answer: C — Aurora Global Database**

**Why C is correct.** Aurora Global Database supports cross-region replication with <1 second lag and rapid managed failover (typically <1 min). Designed exactly for this use case.

**Why the others are wrong.**
- A: Cross-region read replica works but with higher lag and no managed failover orchestration.
- B: RDS Multi-AZ is single-region only.
- D: Nightly snapshots = hours of RPO, not "<1 second."

**Exam-takeaway.** "Global + <1 sec replication + rapid failover" = Aurora Global Database.

---

**Q2. Answer: C — Kinesis Data Streams**

**Why C is correct.** Kinesis Data Streams retains data (up to 365 days) and supports multiple independent consumers each tracking their own position — enabling replay.

**Why the others are wrong.**
- A: SQS Standard is delete-after-read; can't replay.
- B: SNS is fan-out pub/sub; no retention or replay.
- D: SQS FIFO has same delete-after-read limitation.

**Exam-takeaway.** Replay + multiple consumers = Kinesis Data Streams.

---

**Q3. Answer: A — S3 Glacier Deep Archive**

**Why A is correct.** Deep Archive is the cheapest tier (~$0.00099/GB-mo); 12-hour retrieval matches the requirement.

**Why the others are wrong.**
- B: Standard-IA ($0.0125/GB-mo) is ~12× more expensive.
- C: Standard is for frequent access; massive overspend.
- D: Intelligent-Tiering doesn't beat explicit Deep Archive on storage cost for truly cold data.

**Exam-takeaway.** Once-a-year access + 12hr OK = Deep Archive.

---

**Q4. Answer: C — CloudFront with signed URLs/cookies + OAC + private S3**

**Why C is correct.** Signed URLs/cookies restrict CloudFront access to authenticated users; OAC keeps S3 private. Standard subscription-content pattern.

**Why the others are wrong.**
- A: NAT is irrelevant.
- B: Public S3 defeats the access control.
- D: Direct Connect is hybrid networking.

**Exam-takeaway.** Restricted content + edge caching + private origin = CloudFront signed + OAC.

---

**Q5. Answer: B — S3 Transfer Acceleration**

**Why B is correct.** TA uses CloudFront's edge network for the upload path, dramatically accelerating long-distance uploads.

**Why the others are wrong.**
- A: Single PUT is limited to 5GB max and inefficient over long distances.
- C: Direct Connect requires weeks to provision.
- D: CloudFront is for downloads from S3, not uploads to S3.

**Exam-takeaway.** Long-distance upload to S3 = Transfer Acceleration.

---

**Q6. Answer: A — S3 event notification → Lambda**

**Why A is correct.** S3 Event Notifications natively trigger Lambda on object creation — zero infrastructure.

**Why the others are wrong.**
- B: CloudFront is delivery, not event source.
- C: Random-interval polling wastes Lambda invocations and adds latency.
- D: EC2 cron lacks auto-scaling and event-driven semantics.

**Exam-takeaway.** Process each S3 object on upload = S3 event → Lambda.

---

**Q7. Answer: A — EventBridge with rules and SaaS partner integration**

**Why A is correct.** EventBridge supports content-based routing (rules) and has native SaaS partner sources/targets including Datadog.

**Why the others are wrong.**
- B: SQS Standard has no routing rules.
- C: SNS has basic filter policies but lacks SaaS integration.
- D: Firehose delivers to S3/Redshift; not a routing service.

**Exam-takeaway.** Content routing + SaaS partner integration = EventBridge.

---

**Q8. Answer: B — EventBridge Scheduler (or scheduled rule)**

**Why B is correct.** EventBridge Scheduler is the modern AWS service for cron-style scheduled Lambda invocations.

**Why the others are wrong.**
- A: SQS delay queue loop is a hack with race conditions.
- C: CloudFront has no cron-like scheduler.
- D: NAT Gateway is networking.

**Exam-takeaway.** Lambda on cron = EventBridge Scheduler.

---

**Q9. Answer: B — Warm Standby**

**Why B is correct.** Warm Standby: scaled-down stack always running in DR region; scale up on failover. RTO/RPO of minutes is achievable.

**Why the others are wrong.**
- A: Backup & Restore = hours of RTO.
- C: Pilot Light = compute mostly off; RTO of 10s of minutes.
- D: Multi-Site Active-Active gives near-zero RTO but at much higher cost than the question implies.

**Exam-takeaway.** RTO/RPO of minutes = Warm Standby.

---

**Q10. Answer: A — Backup & Restore**

**Why A is correct.** Cheapest tier — only backups in DR region; rebuild from IaC on disaster.

**Why the others are wrong.**
- B-D: All more expensive (Pilot/Warm/Multi-Site).

**Exam-takeaway.** Hours-RTO acceptable + cheapest = Backup & Restore.

---

**Q11. Answer: A — Snowball Edge Storage Optimized**

**Why A is correct.** 500 TB over 200 Mbps = ~230 days online. Snowball ships in ~1 week.

**Why the others are wrong.**
- B: DataSync over internet would take months.
- C: Direct Connect provisioning takes weeks.
- D: SFTP is slow per-file.

**Exam-takeaway.** Math: if data ÷ link bandwidth > shipping time, use Snow.

---

**Q12. Answer: A — DMS + Schema Conversion Tool (SCT)**

**Why A is correct.** Heterogeneous migration (SQL Server → Aurora PostgreSQL) requires SCT for schema and DMS with CDC for data + ongoing replication.

**Why the others are wrong.**
- B: AWS Backup doesn't migrate between engines.
- C: Snowball is offline transfer; doesn't translate schemas.
- D: Storage Gateway is hybrid file/block storage.

**Exam-takeaway.** Heterogeneous DB migration = DMS + SCT.

---

**Q13. Answer: D — AWS Application Migration Service (MGN)**

**Why D is correct.** MGN replicates VMs block-by-block to EC2 with minimal cutover downtime — purpose-built for lift-and-shift.

**Why the others are wrong.**
- A: CloudFront is CDN.
- B: AWS Backup is backups, not migration.
- C: Direct Connect is a network link.

**Exam-takeaway.** Lift-and-shift VMs = MGN.

---

**Q14. Answer: D — Storage Gateway Tape Gateway (VTL)**

**Why D is correct.** Tape Gateway presents a Virtual Tape Library to existing backup software, storing data in S3 + Glacier. No software changes needed.

**Why the others are wrong.**
- A: CloudFront is CDN.
- B: AWS Backup requires changing the backup software.
- C: Snowball is one-time transfer, not ongoing tape replacement.

**Exam-takeaway.** Replace physical tape, keep software = Tape Gateway.

---

**Q15. Answer: C — AWS Backup**

**Why C is correct.** AWS Backup centralizes EBS, RDS, EFS, DynamoDB, FSx, S3 (and more) under one policy + vault lock + cross-region/account copies.

**Why the others are wrong.**
- A: CloudWatch is monitoring.
- B: CloudTrail is audit log.
- D: Snowball is data transfer.

**Exam-takeaway.** Centralized backups across services = AWS Backup.

---

**Q16. Answer: A — DAX**

**Why A is correct.** Same as PE-1 Q29 — sub-ms reads on DynamoDB hot keys with minimal code change = DAX.

**Why the others are wrong.**
- B: Memcached is ms-class.
- C: CloudFront is HTTP edge cache.
- D: Redshift is data warehouse.

**Exam-takeaway.** Sub-ms DynamoDB cache = DAX.

---

**Q17. Answer: C — GuardDuty**

**Why C is correct.** GuardDuty analyzes CloudTrail, VPC Flow Logs, and DNS logs with ML to detect crypto-mining and unusual IAM activity.

**Why the others are wrong.**
- A: Inspector is for vulnerability scanning of EC2/Lambda/containers.
- B: Macie discovers PII in S3.
- D: Detective is for incident investigation after findings.

**Exam-takeaway.** ML threat detection = GuardDuty.

---

**Q18. Answer: C — Macie**

**Why C is correct.** Macie's purpose is discovering and protecting sensitive data (PII, PHI, financial) in S3 buckets.

**Why the others are wrong.**
- A: Inspector is vulnerability scanning.
- B: GuardDuty is threat detection.
- D: WAF is web app firewall.

**Exam-takeaway.** PII in S3 = Macie.

---

**Q19. Answer: D — AWS Config rules with optional remediation**

**Why D is correct.** Config tracks resource state and rules check compliance ("all buckets encrypted"). SSM auto-remediation can fix drift.

**Why the others are wrong.**
- A: Macie is PII discovery.
- B: CloudTrail logs API calls but doesn't evaluate compliance state.
- C: GuardDuty is threat detection.

**Exam-takeaway.** Continuous compliance = Config rules.

---

**Q20. Answer: D — AWS X-Ray**

**Why D is correct.** X-Ray provides distributed tracing across API Gateway → Lambda → DynamoDB with latency breakdown and service maps.

**Why the others are wrong.**
- A: WAF is web firewall.
- B: CloudWatch alone has metrics but no end-to-end tracing.
- C: CloudTrail is API audit log.

**Exam-takeaway.** Trace requests through microservices = X-Ray.

---

**Q21. Answer: D — CloudWatch Billing alarm OR AWS Budgets**

**Why D is correct.** Both can alert on forecasted spend exceeding a threshold; AWS Budgets is the more flexible modern option.

**Why the others are wrong.**
- A: WAF is web firewall.
- B: Inspector is vuln scan.
- C: CloudFront is CDN.

**Exam-takeaway.** Spend alerts = Budgets (or CloudWatch billing).

---

**Q22. Answer: B — AWS Cost Anomaly Detection**

**Why B is correct.** ML-based; finds unusual spend without manual thresholds — exactly the use case.

**Why the others are wrong.**
- A: CloudWatch needs a manual threshold.
- C: Inspector is for security CVEs.
- D: WAF is web firewall.

**Exam-takeaway.** ML spend anomalies = Cost Anomaly Detection.

---

**Q23. Answer: A — AWS Compute Optimizer (free)**

**Why A is correct.** Free ML-based rightsizing for EC2, ASG, EBS, Lambda, Fargate.

**Why the others are wrong.**
- B: Trusted Advisor has cost checks but Compute Optimizer is more granular.
- C: CloudFront is CDN.
- D: SCT is schema conversion.

**Exam-takeaway.** Rightsizing recommendations = Compute Optimizer.

---

**Q24. Answer: B — DynamoDB Global Tables**

**Why B is correct.** Multi-region active-active for NoSQL; writes anywhere replicate to all replicas (eventually consistent globally).

**Why the others are wrong.**
- A: RDS Multi-AZ is single-region HA.
- C: Aurora Read Replicas in one region don't span regions actively.
- D: ElastiCache is cache, not primary store.

**Exam-takeaway.** Global multi-active NoSQL = DynamoDB Global Tables.

---

**Q25. Answer: D — AWS PrivateLink (Endpoint Service)**

**Why D is correct.** PrivateLink exposes one service across accounts/VPCs without VPC peering or public internet.

**Why the others are wrong.**
- A: Direct Connect is hybrid networking.
- B: NAT Gateway is outbound from VPC.
- C: CloudFront is CDN.

**Exam-takeaway.** Expose one service across accounts privately = PrivateLink.

---

**Q26. Answer: D — Failover routing with health checks**

**Why D is correct.** Failover routing returns primary while healthy, then secondary on health-check failure — canonical active-passive DR pattern.

**Why the others are wrong.**
- A: Simple routing has no failover.
- B: Weighted is for traffic splitting.
- C: Geolocation routes by user location.

**Exam-takeaway.** Active-passive DR DNS = Route 53 Failover routing + health checks.

---

**Q27. Answer: D — Cognito Identity Pools**

**Why D is correct.** Identity Pools issue temporary AWS credentials to end-users (authenticated via Cognito User Pools or external IdPs) for direct S3 uploads.

**Why the others are wrong.**
- A: Baking creds into apps is the textbook security failure.
- B: One IAM user per user doesn't scale.
- C: Public bucket exposes data.

**Exam-takeaway.** End-user temp AWS creds for mobile app = Cognito Identity Pools.

---

**Q28. Answer: B — Mixed instances policy with multiple instance types**

**Why B is correct.** Mixed-instances policy in the ASG launch template lets you specify a percentage Spot + diversified instance types for resilience against Spot interruption.

**Why the others are wrong.**
- A: One large RI doesn't mix with Spot.
- C: One instance type limits Spot pool resilience.
- D: Disabling ASG removes auto-scaling.

**Exam-takeaway.** Mixed Spot + On-Demand = ASG mixed-instances policy.

---

**Q29. Answer: C — Step Functions Express**

**Why C is correct.** Express workflows are designed for high-volume (tens of millions/day) short workflows — pay per invocation + duration; much cheaper than Standard for this scale.

**Why the others are wrong.**
- A: EC2 cron lacks orchestration.
- B: Standard workflows are designed for durability + audit; higher per-transition cost.
- D: CloudFront is CDN.

**Exam-takeaway.** High-volume short workflows = Step Functions Express.

---

**Q30. Answer: B — Origin Access Control (OAC)**

**Why B is correct.** OAC is the modern AWS-recommended way to lock an S3 origin to CloudFront. Supports SSE-KMS, all regions, and signed requests.

**Why the others are wrong.**
- A: Origin Access Identity (OAI) is the legacy predecessor; new designs should use OAC.
- C: Public bucket defeats the lockdown.
- D: IAM user with shared keys = textbook anti-pattern.

**Exam-takeaway.** Modern CloudFront → S3 = OAC.

---

**Q31. Answer: C — AWS WAF with managed rule groups**

**Why C is correct.** WAF + managed rule groups (e.g., AWS Managed SQL Injection Rule Set, OWASP Core) protect at layer 7 for SQLi/XSS.

**Why the others are wrong.**
- A: NAT is networking outbound.
- B: Direct Connect is hybrid networking.
- D: SCT is schema conversion.

**Exam-takeaway.** SQLi / XSS protection = WAF managed rule groups.

---

**Q32. Answer: D — Any of A, B, or C**

**Why D is correct.** Geo-restriction can be implemented at Route 53 (DNS), CloudFront (CDN), or WAF (request filter). All are valid depending on architecture.

**Why the others are individually correct but the question accepts all three.** This question tests recognition that geo-restriction is a layered concept.

**Exam-takeaway.** Geo-restriction layers: DNS (Route 53), edge (CloudFront), WAF.

---

**Q33. Answer: D — SNS FIFO + multiple SQS FIFO subscribers**

**Why D is correct.** Strict ordering and exactly-once with fan-out requires FIFO on both topic (SNS FIFO) and queues (SQS FIFO).

**Why the others are wrong.**
- A: EventBridge doesn't guarantee FIFO.
- B: Standard with manual dedup loses simplicity and ordering.
- C: Firehose buffers and isn't ordered/exactly-once.

**Exam-takeaway.** Ordered exactly-once + fan-out = SNS FIFO → SQS FIFO subscribers.

---

**Q34. Answer: D — Stop instances after-hours + Spot for tests**

**Why D is correct.** Idle 24/7 EC2 is the most common cost leak. Stopping after hours (or using Lambda for short workloads) plus Spot for non-critical tests minimizes cost.

**Why the others are wrong.**
- A: 3-year RI for dev/idle is over-commitment.
- B: 24/7 On-Demand is the leak.
- C: Active-active is for production criticality.

**Exam-takeaway.** Dev idle = stop after-hours + Spot for tests.

---

**Q35. Answer: B — Enable Versioning before deletions occur**

**Why B is correct.** Versioning keeps every version; a delete just creates a delete marker that can be removed.

**Why the others are wrong.**
- A: CloudFront doesn't prevent S3 deletions.
- C: Block Public Access is unrelated.
- D: More replication doesn't help if both are deleted.

**Exam-takeaway.** Accidental delete recovery = enable versioning (before the fact).

---

**Q36. Answer: A — AWS Network Firewall**

**Why A is correct.** Network Firewall provides stateful L3/L4/L7 IPS-style inspection inside the VPC.

**Why the others are wrong.**
- B: WAF is L7 HTTP only.
- C: NACL is L3/L4 stateless basic filtering.
- D: IAM is identity, not network.

**Exam-takeaway.** L3/L4/L7 IPS-style inspection in VPC = AWS Network Firewall.

---

**Q37. Answer: C — Scheduled scaling**

**Why C is correct.** Predictable weekday 9–6 pattern matches scheduled scaling — you set the schedule, ASG scales accordingly.

**Why the others are wrong.**
- A: Step scaling reacts to alarms; over-engineered for predictable patterns.
- B: Target tracking tries to maintain a metric; lags predictable surges.
- D: Predictive scaling is for ML forecasting of less-obvious patterns.

**Exam-takeaway.** Known cyclical pattern = scheduled scaling.

---

**Q38. Answer: C — Snowball Edge Compute Optimized**

**Why C is correct.** Compute Optimized adds CPU/memory + GPU options for local processing during transfer.

**Why the others are wrong.**
- A: DataSync alone is online — the question says "slow internet link."
- B: Storage Optimized lacks compute.
- D: Direct Connect provisioning takes weeks.

**Exam-takeaway.** Offline transfer + edge compute = Snowball Edge Compute Optimized.

---

**Q39. Answer: C — Spiky or idle workloads needing per-second scaling**

**Why C is correct.** Aurora Serverless v2 (GA April 2022) scales in 0.5 ACU increments per second. Designed for spiky/idle relational workloads.

**Why the others are wrong.**
- A: Steady 24/7 is better served by provisioned Aurora with RI.
- B: Petabyte analytics = Redshift.
- D: Mobile push = SNS.

**Exam-takeaway.** Spiky relational = Aurora Serverless v2.

---

**Q40. Answer: A — CloudFront in front of S3 with OAC**

**Why A is correct.** CloudFront's 600+ edge locations cache static images globally; OAC keeps S3 private. Cheapest global pattern.

**Why the others are wrong.**
- B: EC2 in each region is operationally expensive and slower.
- C: Direct Connect is hybrid networking.
- D: NAT Gateway is outbound.

**Exam-takeaway.** Global cached static = CloudFront + S3 + OAC.

---

**Q41. Answer: A — QLDB**

**Why A is correct.** QLDB (Quantum Ledger Database) provides cryptographically verifiable immutable ledger — purpose-built for financial audit.

**Why the others are wrong.**
- B: RDS isn't tamper-evident by default.
- C: DynamoDB lacks ledger semantics.
- D: Redshift is analytics, not transactional ledger.

**Exam-takeaway.** Tamper-evident ledger = QLDB.

---

**Q42. Answer: B — Amazon Keyspaces**

**Why B is correct.** Keyspaces is AWS's Apache-Cassandra-compatible serverless managed service.

**Why the others are wrong.**
- A: DynamoDB has its own API, not Cassandra-compatible.
- C: DocumentDB is Mongo-compatible.
- D: Aurora is relational.

**Exam-takeaway.** Cassandra-compatible serverless on AWS = Keyspaces.

---

**Q43. Answer: B — ElastiCache (Redis if HA/persistence)**

**Why B is correct.** Cache-aside reduces repeated identical reads on the RDS instance. Redis preferred for HA/persistence.

**Why the others are wrong.**
- A: Bigger DB doesn't solve the load shape.
- C: Redshift is OLAP.
- D: NACLs are network firewalls.

**Exam-takeaway.** Cache repeated reads = ElastiCache cache-aside.

---

**Q44. Answer: A — AWS Outposts**

**Why A is correct.** Outposts is an AWS-managed rack physically installed in your data center — local AWS services with consistent APIs.

**Why the others are wrong.**
- B: Direct Connect is connectivity.
- C: Local Zones are AWS-owned facilities, not on customer premises.
- D: CloudFront is CDN.

**Exam-takeaway.** AWS services on your premises = Outposts.

---

**Q45. Answer: B — AWS Local Zones**

**Why B is correct.** Local Zones are AWS-owned, in major metros (LA, Boston, etc.), providing sub-10ms latency for regional users.

**Why the others are wrong.**
- A: Outposts requires the customer's own data center.
- C: CloudFront is edge cache, not compute.
- D: Direct Connect is networking.

**Exam-takeaway.** Sub-10ms latency to specific metros = Local Zones.

---

**Q46. Answer: B — Bucket policy denying PUTs without `s3:x-amz-server-side-encryption: aws:kms`**

**Why B is correct.** Same as PE-1 Q23 — enforce KMS encryption via bucket policy denial pattern.

**Why the others are wrong.**
- A: BPA blocks public access, not encryption enforcement.
- C: CloudFront is delivery layer.
- D: Lifecycle rules transition/expire objects.

**Exam-takeaway.** Enforce KMS upload encryption = bucket policy.

---

**Q47. Answer: A — AWS Firewall Manager**

**Why A is correct.** Firewall Manager centralizes WAF, Shield Advanced, SG, and Network Firewall policies across an Org.

**Why the others are wrong.**
- B: Config is for resource compliance.
- C: CloudWatch is monitoring.
- D: CloudTrail is audit.

**Exam-takeaway.** Centralized WAF/Shield across accounts = Firewall Manager.

---

**Q48. Answer: C — DMS with CDC tasks**

**Why C is correct.** DMS Change Data Capture (CDC) replicates ongoing changes from source to target, enabling near-zero-downtime cutover.

**Why the others are wrong.**
- A: AWS Backup is point-in-time.
- B: Snowball is offline bulk.
- D: Storage Gateway is hybrid file/iSCSI.

**Exam-takeaway.** Ongoing DB replication with no-downtime cutover = DMS + CDC.

---

**Q49. Answer: B — RDS Proxy**

**Why B is correct.** RDS Proxy pools/multiplexes connections, eliminating connection storm failures from short-lived Lambda invocations.

**Why the others are wrong.**
- A: Bigger RDS doesn't address connection count.
- C: CloudFront is CDN.
- D: Disabling Multi-AZ reduces resilience.

**Exam-takeaway.** Lambda + RDS connection storm = RDS Proxy.

---

**Q50. Answer: D — S3 Select**

**Why D is correct.** S3 Select runs SQL queries server-side on CSV/JSON/Parquet, returning only matching rows — minimal data transfer.

**Why the others are wrong.**
- A: Streaming download transfers the whole file.
- B: Athena via Glue is overkill for a single file's few rows; though it works, S3 Select is more direct.
- C: CloudFront is CDN.

**Exam-takeaway.** Extract few rows from S3 file = S3 Select.

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
