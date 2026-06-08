# ✏️ Module 9 Quiz: Monitoring & Cost Optimization

> **Instructions:** 25 questions, ~30 min. Target 20/25.

> **Bloom's distribution.** Remember 5 (20%) · Understand 6 (24%) · Apply 8 (32%) · Analyze/Evaluate 5 (20%) · Create 1 (4%).

---

## Questions

### Q1. To find WHO deleted an S3 bucket two days ago: *(Apply)*
A. CloudWatch Logs
B. CloudTrail
C. Config
D. GuardDuty

---

### Q2. To track an EC2 instance's MEMORY utilization in CloudWatch: *(Understand)*
A. Memory is a default metric, just look at it
B. Install the CloudWatch Agent (memory is not a default metric)
C. Enable Detailed Monitoring
D. Use CloudTrail

---

### Q3. To get ML-based rightsizing recommendations for EC2 / EBS / Lambda / ASG: *(Remember)*
A. AWS Compute Optimizer (free)
B. AWS Cost Explorer only
C. Trusted Advisor only
D. CloudWatch alarms

---

### Q4. To detect a sudden surge in NAT Gateway costs automatically: *(Apply)*
A. CloudWatch logs
B. AWS Cost Anomaly Detection (ML-based)
C. Config
D. X-Ray

---

### Q5. The right service to find PII in S3 buckets: *(Remember)*
A. GuardDuty
B. Macie
C. Inspector
D. CloudTrail

---

### Q6. To detect unusual API activity such as cryptocurrency mining or compromised IAM credentials: *(Apply)*
A. GuardDuty
B. Macie
C. Inspector
D. Config

---

### Q7. To check compliance like "all S3 buckets must have encryption enabled, all EBS volumes encrypted": *(Apply)*
A. CloudTrail
B. Config rules (with optional auto-remediation)
C. CloudWatch metrics
D. GuardDuty

---

### Q8. To trace a request through API Gateway → Lambda → DynamoDB and visualize latency: *(Apply)*
A. CloudTrail
B. X-Ray
C. Config
D. Inspector

---

### Q9. CloudWatch Logs Insights is used to: *(Understand)*
A. Train ML models on logs
B. Query logs interactively with a SQL-like language
C. Send logs to S3
D. Encrypt logs

---

### Q10. To auto-scale workers based on SQS backlog: *(Apply)*
A. CloudWatch alarm on `ApproximateNumberOfMessagesVisible` triggers ASG scale-out
B. Lambda checks SQS every minute
C. Manual scaling
D. Step Functions

---

### Q11. To centralize CloudTrail logs across all accounts in an Organization: *(Apply)*
A. Org Trail to a central S3 bucket
B. Separate trail per account, manual aggregation
C. Send to CloudWatch only
D. Use Macie

---

### Q12. Trusted Advisor's full set of checks (all 5 categories) is available: *(Remember)*
A. To all customers
B. Only to Business or Enterprise Support plans
C. Only via API
D. Only in us-east-1

---

### Q13. Which CloudTrail event type captures S3 object-level API calls (GetObject, PutObject)? *(Understand)*
A. Management Events
B. Data Events (opt-in)
C. Insight Events
D. None, S3 has its own log

---

### Q14. To send a notification when monthly forecasted spend exceeds $5,000: *(Apply)*
A. CloudWatch alarm on Billing metric OR AWS Budgets
B. Inspector
C. Macie
D. GuardDuty

---

### Q15. A team wants per-team cost reporting in Cost Explorer. The first step is: *(Analyze)*
A. Apply cost allocation tags and activate them in Billing
B. Run Compute Optimizer
C. Switch to Spot
D. Move all resources to one region

---

### Q16. Inspector is BEST suited for: *(Understand)*
A. Threat detection in CloudTrail
B. Vulnerability scans on EC2 instances, Lambda functions, and container images
C. PII discovery
D. Network analysis

---

### Q17. To consolidate findings from GuardDuty, Macie, Inspector, and partner tools: *(Apply)*
A. AWS Security Hub
B. CloudWatch
C. Config
D. CloudTrail

---

### Q18. CloudWatch Alarm states are: *(Remember)*
A. OK, ALARM, INSUFFICIENT_DATA
B. PASS, FAIL, PENDING
C. UP, DOWN
D. GREEN, YELLOW, RED

---

### Q19. To rotate EC2 instances showing as "over-provisioned" by Compute Optimizer: *(Create)*
A. Stop them all immediately
B. Review recommendations, then update launch template + recycle via ASG
C. Switch to Glacier
D. Buy more RIs

---

### Q20. Egress data costs from a private subnet's instances reading from S3 are high. The BEST fix is: *(Apply)*
A. NAT Gateway in another AZ
B. Gateway VPC Endpoint for S3 (free, bypasses NAT)
C. Direct Connect
D. CloudFront

---

### Q21. To investigate WHY a security incident happened across multiple services using graph analysis: *(Understand)*
A. Detective
B. Macie
C. Inspector
D. CloudTrail alone

---

### Q22. Spend alert from CloudWatch billing metric vs AWS Budgets, key difference: *(Evaluate)*
A. They are identical
B. Budgets supports forecasted-spend alerts and usage tracking; billing metric is single-threshold
C. Budgets is paid; metric is free
D. CloudWatch billing metric works only on Glacier

---

### Q23. A workload's RDS connection storms come from Lambda. The BEST cost-and-perf fix: *(Analyze)*
A. RDS Proxy (pool connections; avoid scaling DB to absorb storm)
B. Larger RDS instance
C. Switch to DynamoDB
D. Use NAT

---

### Q24. To get notified when an EBS volume becomes unattached for over 7 days: *(Analyze)*
A. Config rule + auto-remediation (or Trusted Advisor check)
B. WAF
C. Macie
D. X-Ray

---

### Q25. The MOST common cost mistake on the SAA exam scenarios is: *(Evaluate)*
A. Running too few EC2 instances
B. NAT Gateway charges for S3 access (should use Gateway Endpoint) and forgotten resources / oversized EC2
C. Over-using Lambda
D. Not enough WAF

---

## 🎯 Answers + Explanations

### Q1: **B. CloudTrail**
CloudTrail records every API call (DeleteBucket) with identity + time.

### Q2: **B. Install CloudWatch Agent**
Memory and disk are NOT default EC2 metrics. CW Agent publishes them.

### Q3: **A. Compute Optimizer**
ML rightsizing for EC2, ASG, EBS, Lambda, ECS Fargate. Free.

### Q4: **B. Cost Anomaly Detection**
ML alerts on anomalous spend. Budgets is for thresholds you set.

### Q5: **B. Macie**
Discovers and protects PII in S3.

### Q6: **A. GuardDuty**
ML threat detection on CloudTrail + VPC Flow + DNS.

### Q7: **B. Config rules + remediation**
Continuous compliance checks; can auto-remediate via SSM.

### Q8: **B. X-Ray**
Distributed tracing for latency/error analysis.

### Q9: **B. Query logs interactively (SQL-like)**
Logs Insights is the ad-hoc log analysis tool.

### Q10: **A. CW alarm + ASG**
Queue-driven scaling pattern.

### Q11: **A. Organization Trail to central S3**
Single trail across all org accounts; centralizes audit.

### Q12: **B. Business or Enterprise Support**
Free Basic gets only 7 core checks.

### Q13: **B. Data Events (opt-in)**
Object-level operations are Data Events, off by default to save cost.

### Q14: **A. CloudWatch billing metric OR AWS Budgets**
Both work; Budgets is more flexible (forecast, usage, savings plan).

### Q15: **A. Apply + activate cost allocation tags**
Tags must be both applied AND activated in the billing console.

### Q16: **B. Vulnerability scans (EC2/Lambda/ECR)**
Inspector = CVE / config-issue scanner.

### Q17: **A. Security Hub**
Aggregator of security findings from many sources.

### Q18: **A. OK / ALARM / INSUFFICIENT_DATA**
Three states for a CW alarm.

### Q19: **B. Update launch template + ASG recycle**
Apply the new instance type via template; let ASG roll instances.

### Q20: **B. Gateway VPC Endpoint for S3**
Free; bypasses NAT for S3 traffic.

### Q21: **A. Detective**
Graph analysis of CloudTrail + GuardDuty + VPC Flow for investigations.

### Q22: **B. Budgets supports forecast + usage; metric is single-threshold**
Budgets is richer and reports-friendly.

### Q23: **A. RDS Proxy**
Pools connections; cheaper than scaling the DB.

### Q24: **A. Config rule + remediation (or Trusted Advisor)**
Idle EBS check is one of TA's classic cost checks; Config can also do it.

### Q25: **B. NAT for S3 + forgotten resources + oversized EC2**
Three most common cost leaks the exam loves.

---

## 📊 Score Yourself

- 24–25/25 → 🏆 Move on
- 20–23/25 → ✅ Solid
- 16–19/25 → ⚠️ Re-read CloudTrail/Config/Cost sections
- <16/25 → 🔁 Re-watch all 4 essentials

---

## 🃏 Add To Your Flashcards

- CloudTrail vs CloudWatch Logs vs Config
- EC2 memory metric requires CW Agent
- Compute Optimizer is free and ML-based
- Macie / Inspector / GuardDuty / Detective / Security Hub roles
- Budgets vs Cost Anomaly Detection
- Tagging is the basis of cost allocation
- NAT vs Gateway Endpoint for S3 cost

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 10: DR, Migration & Hybrid](../Module-10-DR-Migration-Hybrid/Reading.md)
