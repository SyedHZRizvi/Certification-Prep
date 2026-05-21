# ✏️ Module 7 Quiz: Management, Monitoring & Pricing

> **Instructions:** 25 questions. Aim for 21/25. Lock in Support plans and CW/CT/Config!

---

## Questions

### Q1. Which AWS service tracks resource configuration drift and evaluates against rules like "S3 buckets must not be public"?
A. CloudWatch
B. CloudTrail
C. AWS Config
D. AWS Health Dashboard

---

### Q2. Which service collects metrics, logs, and triggers alarms?
A. AWS Config
B. CloudWatch
C. CloudTrail
D. Trusted Advisor

---

### Q3. CloudTrail's primary purpose is:
A. Performance metrics
B. Recording every AWS API call made in your account
C. Cost forecasting
D. Threat detection

---

### Q4. Which AWS Support plan provides 24/7 access to engineers and a response time of LESS THAN 1 HOUR for production-down issues, plus ALL Trusted Advisor checks?
A. Basic
B. Developer
C. Business
D. Enterprise

---

### Q5. Which support tier provides a DEDICATED Technical Account Manager (TAM)?
A. Developer
B. Business
C. Enterprise On-Ramp (POOL of TAMs)
D. Enterprise

---

### Q6. AWS data transfer pricing:
A. Costs the same in all directions
B. Inbound to AWS is generally FREE; outbound to internet is paid
C. Outbound is free; inbound is paid
D. Is always free within AWS

---

### Q7. To estimate the cost of a workload BEFORE deploying, the BEST tool is:
A. AWS Cost Explorer
B. AWS Pricing Calculator
C. AWS Budgets
D. AWS Trusted Advisor

---

### Q8. Which is TRUE about the AWS Basic Support plan?
A. Provides 24/7 technical support
B. Is FREE — billing/account only, no tech support, 7 core Trusted Advisor checks
C. Includes a Technical Account Manager
D. Costs $29/mo

---

### Q9. Which service provides ML-based right-sizing recommendations for EC2, EBS, and Lambda?
A. Trusted Advisor
B. AWS Compute Optimizer
C. Cost Explorer
D. CloudWatch

---

### Q10. AWS Trusted Advisor checks fall into 5 categories. Which is NOT one of them?
A. Cost Optimization
B. Performance
C. Security
D. Migration

---

### Q11. To get an alert when AWS schedules maintenance on YOUR EC2 instance:
A. Subscribe to the AWS Public Status Dashboard
B. Use AWS Health Dashboard (Your Account Health)
C. Use AWS Config
D. Wait for an email from AWS Marketing

---

### Q12. CloudWatch Alarms can trigger which of the following?
A. SNS notifications
B. Auto Scaling actions
C. EC2 stop / terminate / recover
D. All of the above

---

### Q13. To SSH-lessly connect to an EC2 instance via the browser without opening port 22, use:
A. AWS Direct Connect
B. AWS Systems Manager Session Manager
C. Bastion host on a public subnet
D. CloudShell

---

### Q14. AWS Budgets:
A. Automatically prevent further spending when threshold is hit
B. Send alerts (email/SNS) when spend or usage approaches/exceeds threshold
C. Are only available with Enterprise Support
D. Cost $100/mo

---

### Q15. The MOST granular billing data export (down to per-resource per-hour) is:
A. Cost Explorer
B. AWS Cost & Usage Report (CUR)
C. Trusted Advisor
D. The monthly PDF invoice

---

### Q16. To categorize AWS spend by team or project, use:
A. Cost Allocation Tags
B. IAM Groups
C. Security Groups
D. VPCs

---

### Q17. The AWS Marketplace is BEST described as:
A. AWS's stock-photo library
B. A catalog of 3rd-party software (AMIs, containers, SaaS) you can buy through AWS billing
C. The AWS Free Tier
D. The AWS Job Board

---

### Q18. Amazon QuickSight is:
A. A serverless BI / dashboarding service
B. A search engine
C. A DDoS protection service
D. A container registry

---

### Q19. Which is TRUE about the AWS Free Tier?
A. It is only the 12-month tier
B. It has 3 categories: 12-Months, Always Free, and Trials
C. It is automatically Enterprise Support
D. It does not include S3

---

### Q20. To save money on a steady 24/7 workload running EC2 for the next 3 years, the BEST option is:
A. On-Demand Instances only
B. Reserved Instances or Savings Plans (1-yr or 3-yr commitment)
C. Spot Instances
D. AWS Outposts

---

### Q21. Which service centrally aggregates findings from multiple AWS security tools into one dashboard?
A. CloudWatch
B. AWS Security Hub
C. Trusted Advisor
D. AWS Config

---

### Q22. AWS Personal Health Dashboard / AWS Health Dashboard (Your Account Health):
A. Shows global AWS service status (public)
B. Shows events that affect YOUR resources (e.g., EC2 retirement notices, scheduled maintenance)
C. Provides DDoS protection
D. Generates compliance reports

---

### Q23. The Developer Support plan provides:
A. 24/7 phone support and TAMs
B. Business-hours email support with one contact
C. ALL Trusted Advisor checks
D. Free TLS certs

---

### Q24. Which is TRUE about IAM and VPC pricing?
A. Both are paid services
B. Both are free — you pay only for resources they create / use
C. Only IAM is free
D. Only VPC is free

---

### Q25. The Enterprise Support plan exclusively offers:
A. Multi-AZ deployments
B. Infrastructure Event Management (IEM) for large launches, dedicated TAM, AWS Concierge support
C. Free EC2
D. Free DynamoDB

---

## 🎯 Answers + Explanations

### Q1: **C. AWS Config**
Config tracks resource configurations and evaluates against rules. CloudTrail tracks API calls; Config tracks resource state.

### Q2: **B. CloudWatch**
CloudWatch = metrics + logs + alarms (and EventBridge for state-change routing).

### Q3: **B. Recording every AWS API call made in your account**
CloudTrail is the audit log. Default 90-day event history; create a Trail for long-term storage in S3.

### Q4: **C. Business**
Business: 24/7, <1 hour for prod-down, ALL Trusted Advisor checks. From $100/mo (or 3% of usage).

### Q5: **D. Enterprise**
Dedicated TAM only at Enterprise (~$15K/mo). Enterprise On-Ramp gives access to a POOL of TAMs.

### Q6: **B. Inbound to AWS is generally FREE; outbound to internet is paid**
Data in = free. Out and cross-AZ/Region = paid. The #1 cost surprise.

### Q7: **B. AWS Pricing Calculator**
The free public tool to estimate cost BEFORE building. Cost Explorer is for analyzing existing spend.

### Q8: **B. Is FREE — billing/account only, no tech support, 7 core Trusted Advisor checks**
Basic = the free tier of support. No technical help.

### Q9: **B. AWS Compute Optimizer**
ML-based right-sizing for EC2, EBS, Lambda, ASGs. Trusted Advisor checks best practices broadly.

### Q10: **D. Migration**
The 5 are: Cost Optimization, Performance, Security, Fault Tolerance, Service Limits.

### Q11: **B. Use AWS Health Dashboard (Your Account Health)**
Surfaces events scoped to your AWS resources (formerly "Personal Health Dashboard").

### Q12: **D. All of the above**
Alarms can notify (SNS), trigger Auto Scaling, and perform EC2 actions (stop/terminate/recover).

### Q13: **B. AWS Systems Manager Session Manager**
Session Manager opens a shell via the AWS Console — no SSH key, no inbound port, audit trail included.

### Q14: **B. Send alerts (email/SNS) when spend or usage approaches/exceeds threshold**
Budgets ALERT — they don't enforce. Combine with SCPs / Lambda for actual enforcement.

### Q15: **B. AWS Cost & Usage Report (CUR)**
CUR = the most-granular billing data, delivered to S3 in CSV/Parquet. Free (you pay for the S3 storage).

### Q16: **A. Cost Allocation Tags**
Tags + activation in Billing console → categorize spending in Cost Explorer / CUR.

### Q17: **B. A catalog of 3rd-party software (AMIs, containers, SaaS) you can buy through AWS billing**
Marketplace = consolidated billing for 3rd-party tools.

### Q18: **A. A serverless BI / dashboarding service**
QuickSight = pay-per-session BI; integrates with Redshift, RDS, S3, Athena.

### Q19: **B. It has 3 categories: 12-Months, Always Free, and Trials**
Memorize this — covered in Module 1, re-tested often.

### Q20: **B. Reserved Instances or Savings Plans (1-yr or 3-yr commitment)**
Up to 72% off. Spot is wrong for steady production workloads.

### Q21: **B. AWS Security Hub**
Aggregates findings from GuardDuty, Inspector, Macie, partner tools, and runs compliance benchmarks.

### Q22: **B. Shows events that affect YOUR resources**
Personal Health = your-account view. The public Service Health Dashboard shows global AWS service status.

### Q23: **B. Business-hours email support with one contact**
Developer (~$29/mo) is the cheapest paid tier. Email-only, business hours.

### Q24: **B. Both are free — you pay only for resources they create / use**
IAM and VPC themselves are free. You pay for NAT Gateways, ELBs, etc., that you run inside.

### Q25: **B. Infrastructure Event Management (IEM) for large launches, dedicated TAM, AWS Concierge support**
Enterprise (only) offers IEM, dedicated TAM, training credits, well-architected reviews on demand.

---

## 📊 Score Yourself

- 24–25 → 🏆 Operations master.
- 21–23 → ✅ Solid. Review Support-plan rows you missed.
- 17–20 → ⚠️ Re-memorize the 5 Support plans and CW/CT/Config.
- <17 → 🔁 Restart Module 7.

---

## 🃏 Add To Your Flashcards

- 5 Support plans + response times + TAM access
- CloudWatch (metrics/logs) vs CloudTrail (API audit) vs Config (resource state)
- Trusted Advisor's 5 categories
- Pricing Calculator (before) vs Cost Explorer (during/after)
- Data transfer IN = free, OUT = $
- Free services: IAM, VPC, CloudFormation, Beanstalk, Organizations

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 8: Well-Architected & Migration](../Module-08-Well-Architected-Migration/Reading.md)
