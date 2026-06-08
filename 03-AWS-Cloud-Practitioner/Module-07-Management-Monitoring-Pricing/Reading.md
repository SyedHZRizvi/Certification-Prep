# Module 7: Management, Monitoring & Pricing 📊

> **Why this module matters:** This is where you learn how to *operate* and *pay for* AWS. Billing/Pricing/Support is only 12% of the exam, but most students lose points here because they don't memorize the 4 Support plans. Don't be them.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - [Cloud Fundamentals](../Module-01-Cloud-Fundamentals/Reading.md), CapEx vs OpEx, the 6 benefits of cloud (this module operationalizes them)
> - [Core Compute](../Module-02-Core-Compute/Reading.md), Reserved Instances, Savings Plans, Spot (pricing models you'll right-size in this module)
> - [Security & Identity](../Module-06-Security-Identity-Compliance/Reading.md), CloudTrail and Config (the detective layer)
> - Basic accounting: knowing the difference between a budget, a forecast, and an alert
>
> If you've ever scolded yourself for a surprise SaaS subscription, you have the right intuition for this module.

---

## 🏪 A Story: Maria Gets A Surprise Bill

Maria's pizza empire is humming along on AWS. Then she gets the May bill: **$47,000.** Last month was $4,000.

What happened? A junior dev spun up a `p4d.24xlarge` GPU instance "just to test something" and forgot about it. Cost: ~$33/hour × 24 hours × 30 days = $24,000. Plus a misconfigured S3 lifecycle rule moved 200 TB into Standard from Deep Archive overnight $5,000 in transition fees. Plus CloudFront traffic from a viral marketing campaign $18,000.

Could this have been prevented? Yes, with **Budgets, Billing Alarms, Cost Explorer, and Trusted Advisor.** Cloud's pay-as-you-go is wonderful right up until you forget to watch it.

This module teaches you the tools to stay in control.

---

## 👁️ Amazon CloudWatch, Monitoring

CloudWatch implements the **"observability"** paradigm a term popularized by Charity Majors (Honeycomb) and Cindy Sridharan's *Distributed Systems Observability* (O'Reilly, 2018) but rooted in control-theory observability (Kalman, 1960). The "three pillars of observability" metrics, logs, traces, map directly to CloudWatch Metrics, CloudWatch Logs, and AWS X-Ray. Gene Kim, Patrick Debois, Jez Humble, and John Willis's *The DevOps Handbook* (2016) and Kim's *The Phoenix Project* (IT Revolution Press, 2013) frame monitoring as a core DevOps capability.

**CloudWatch = the universal "what's happening?" service for AWS.** It collects 3 things:

### 1️⃣ Metrics

Numerical time-series data. AWS publishes default metrics for almost every service (EC2 CPU%, S3 BucketSizeBytes, Lambda Invocations, etc.). You can also push **custom metrics** (your app's request latency, business KPIs).

### 2️⃣ Logs

Application or system logs. The **CloudWatch Agent** on EC2 ships logs in. Lambda automatically logs to CloudWatch Logs. You can search, set retention, export to S3.

### 3️⃣ Events / EventBridge

Rule-based reactions to AWS state changes. *Example:* "When a new EC2 instance is launched, run a Lambda to tag it." (EventBridge is the modern name; CloudWatch Events is legacy.)

### CloudWatch Alarms

Alarms watch a metric and trigger when a threshold is crossed.

- **Notify** (via SNS, email, SMS, Slack via Lambda)
- **Trigger Auto Scaling** ("CPU > 70% for 5 min → add EC2 instance")
- **Stop / Terminate / Recover** an EC2 instance

🎯 **Exam shortcut:** "Set a billing alarm at $100" → **CloudWatch Alarm on `EstimatedCharges` metric.**

---

## 📜 AWS CloudTrail, API Audit Log

(Already covered in Module 6, but it shows up here too.)

**CloudTrail = every AWS API call your account makes, recorded.** Enabled by default for 90 days of "Event history." Create a **Trail** to store events in S3 long-term and integrate with CloudWatch Logs.

🔑 Difference:

- **CloudWatch** = what's the metric / log saying?
- **CloudTrail** = who called this API and when?
- **Config** = what is the configuration state of resources?

---

## 🔍 AWS Config, Configuration Drift & Compliance

**Config tracks resource configurations over time + evaluates against rules.**

Examples of Config Rules:

- "EBS volumes must be encrypted"
- "S3 buckets must NOT be public"
- "IAM users must have MFA enabled"
- "All EC2 instances must be tagged with `CostCenter`"

When a resource goes out of compliance, Config flags it (and can auto-remediate via SSM).

🎯 **Exam pattern:** "How do you ensure all S3 buckets are encrypted on creation?" → **AWS Config Rule.** Or "Service Control Policies" if at the org-level.

---

## ⚙️ AWS Systems Manager (SSM), Operations At Scale

SSM is a Swiss Army knife of operations tools:

| Capability | What it does |
|------------|--------------|
| **Session Manager** | SSH-less shell access to EC2 via the console (no SSH keys, no bastion) |
| **Run Command** | Execute commands on many EC2 instances at once |
| **Patch Manager** | Automate OS patching on fleets of EC2 |
| **Parameter Store** | Hierarchical config / secret store (free tier) |
| **Automation** | Pre-built runbooks for ops tasks |
| **Inventory** | Track installed software across instances |

🎯 **Exam pattern:** "Connect to EC2 without opening SSH port 22" → **SSM Session Manager.**

---

## ✅ AWS Trusted Advisor

**Trusted Advisor scans your account against best practices** in 5 categories:

| Category | Example check |
|----------|---------------|
| **Cost optimization** | Idle EC2 instances, underused EBS volumes |
| **Performance** | Service limits, high-utilization instances |
| **Security** | MFA on root, open security groups, S3 public buckets |
| **Fault tolerance** | EBS snapshots, Multi-AZ usage |
| **Service limits** | Approaching account limits |

**Free tier checks:** 7 core checks (basics, MFA on root, service limits, etc.).
**Business / Enterprise Support:** ALL Trusted Advisor checks unlocked.

🎯 **Exam pattern:** "Identify idle EC2 instances to cut costs" → **Trusted Advisor** (or Compute Optimizer).

---

## 🩺 AWS Health Dashboards

| Tool | What |
|------|------|
| **AWS Health Dashboard, Service Health** (public) | Status of every AWS service, all Regions |
| **AWS Health Dashboard, Your Account Health** (private) | Events affecting YOUR resources (e.g., EC2 retirement notices) |
| **AWS Personal Health Dashboard** (old name) | = Your Account Health |

🎯 **Exam pattern:** "Get a notification when AWS schedules maintenance on YOUR EC2" → **AWS Health Dashboard / Personal Health Dashboard.**

---

## 💵 AWS Pricing Models, The Big Picture

AWS pricing follows 3 fundamental laws:

1. **Pay for what you use** (no upfront, except RIs / Savings Plans by choice)
2. **Pay less when you reserve** (commit for 1- or 3-year)
3. **Pay even less with volume tiering** (S3, data transfer)

### Free services / always-free aspects
- IAM, VPC (basic), CloudFormation, Elastic Beanstalk, Organizations, all FREE
- You only pay for the resources THEY create
- AWS Free Tier covers 12-month + Always Free + Trials (Module 1)

### Data Transfer (the #1 gotcha)

| Direction | Cost |
|-----------|------|
| Inbound to AWS (anywhere) | **Free** |
| Within same AZ | Free (private IP) |
| Between AZs (same Region) | $$ per GB |
| Between Regions | $$$ per GB |
| Out to internet | $$$$ per GB (after small free tier) |

🔥 **MEMORIZE:** "Data IN to AWS is FREE. Data OUT and cross-AZ/Region costs money."

---

## 🧮 Cost Management Tools

| Tool | What it does | Free? |
|------|--------------|-------|
| **AWS Pricing Calculator** | Estimate cost BEFORE deploying | ✅ Free public tool |
| **AWS Budgets** | Set spend or usage budgets with alerts | Free up to 2 budgets, then small fee |
| **AWS Cost Explorer** | Visualize past + forecast spending | ✅ |
| **AWS Cost & Usage Report (CUR)** | Most-granular CSV/Parquet export of every bill line | ✅ (S3 storage cost) |
| **AWS Billing Console** | View current bill, set up alerts | ✅ |
| **Cost Allocation Tags** | Categorize spending by team / project | ✅ |
| **AWS Compute Optimizer** | ML-based right-sizing recommendations | ✅ |
| **Savings Plans** | 1- or 3-year flexible compute commitment | Discount tool |
| **Reserved Instances** | 1- or 3-year specific-family commitment | Discount tool |

🎯 **Exam patterns:**
- "Estimate cost BEFORE building" → **Pricing Calculator**
- "Visualize and forecast past spend" → **Cost Explorer**
- "Get alerted when spend crosses $X" → **AWS Budgets** (and/or CloudWatch Billing Alarms)
- "Most-granular bill data for analysis" → **Cost & Usage Report**
- "Right-size my EC2 instances" → **Compute Optimizer**

---

## 🏷️ Cost Allocation Tags

Tags are key/value labels on resources (`Environment=Prod`, `Project=Pizza-Online`).

- **AWS-generated tags** (e.g. `aws:createdBy`), auto-generated
- **User-defined tags**, what you create
- Must be **activated** in the Billing console to show in Cost Explorer / CUR
- Combined with Cost Categories for chargeback / showback

🎯 **Exam pattern:** "Track AWS spend by department" → **Cost Allocation Tags.**

---

## 💼 AWS Support Plans (MEMORIZE, high-frequency exam topic)

There are **4 paid support tiers** (plus "Basic" which is free):

| Plan | Cost | Response time (production down) | Key features |
|------|------|--------------------------------|-------------|
| **Basic** | FREE | N/A | Account/billing only, no tech support, 7 core Trusted Advisor checks |
| **Developer** | from $29/mo | Business-hours email | One contact, general guidance, business-hours |
| **Business** | from $100/mo (3% of usage) | **< 1 hour** | 24/7, multiple contacts, ALL Trusted Advisor checks, AWS Support API |
| **Enterprise On-Ramp** | from $5,500/mo (10% of usage) | **< 30 min for business-critical** | Pool of Technical Account Managers (TAMs), Concierge for billing |
| **Enterprise** | from $15,000/mo (varies) | **< 15 min for business-critical** | Dedicated TAM, Concierge, IEM (Infrastructure Event Mgmt), well-architected reviews, training credits |

🔥 **MEMORIZE the response times:**
- Business: **< 1 hour** for production-down
- Enterprise On-Ramp: **< 30 min** for business-critical
- Enterprise: **< 15 min** for business-critical

🎯 **Exam shortcuts:**
- "Need 24/7 support + ALL Trusted Advisor + < 1 hr response" → **Business**
- "Need a Technical Account Manager (TAM)" → **Enterprise On-Ramp** (pool) or **Enterprise** (dedicated)
- "Need infrastructure event management for big launches" → **Enterprise**
- "Just need email-based dev help during business hours" → **Developer**

### Quick rules
- All paid plans give 24/7 chat/phone EXCEPT Developer (business hours only)
- TAM access starts at Enterprise On-Ramp (pool) / Enterprise (dedicated)
- AWS Support API requires Business and above

---

## 🏛️ AWS Marketplace

**Marketplace = software catalog for 3rd-party AMIs, SaaS, containers, ML models.**

- Pay via your AWS bill (consolidated billing)
- One-click deployment of pre-built solutions
- Pricing: hourly, monthly, BYOL, free, contract

🎯 **Exam pattern:** "Where do I buy a 3rd-party firewall AMI?" → **AWS Marketplace.**

---

## 📊 Amazon QuickSight

**QuickSight = serverless BI / dashboarding service.** Connects to Redshift, RDS, S3, Athena. Pay per session.

🎯 **Exam pattern:** "Build interactive dashboards on Redshift data for execs" → **QuickSight.**

---

## 🚨 Exam Traps

1. **Trusted Advisor's full check set requires Business Support or higher.** Free tier = 7 core checks only.
2. **Compute Optimizer ≠ Trusted Advisor.** Optimizer = ML right-sizing for EC2/EBS/Lambda; Trusted Advisor = best-practice scoring.
3. **Cost Explorer is free.** Budgets is free for the first 2 budgets.
4. **Data transfer IN is free, OUT costs $.** This is the most common surprise on bills.
5. **CloudWatch is per-Region.** Cross-region dashboards require setup.
6. **CloudTrail is enabled by default for 90 days** of Event history; a trail (custom) stores indefinitely in S3.
7. **AWS Health Dashboard ≠ Trusted Advisor.** Health = AWS service status; TA = your account's best practices.
8. **Support plans go: Basic, Developer, Business, Enterprise On-Ramp, Enterprise.** Don't forget On-Ramp.
9. **TAM access** starts at **Enterprise On-Ramp** (pool), dedicated at **Enterprise**.
10. **Personal Health Dashboard was renamed AWS Health Dashboard (Your Account Health)**, both names may appear on the exam.

---

## ⚠️ Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "CloudWatch and CloudTrail are the same" | Watch = metrics/logs; Trail = API audit |
| "Budgets prevent spend" | They ALERT, they don't stop spending (use SCPs / automation to actually stop) |
| "All Trusted Advisor checks are free" | Only 7 core checks are free; full set needs Business+ |
| "Enterprise Support is the cheapest paid tier" | No, Developer is cheapest at $29/mo |
| "TAMs come with Business" | TAMs start at Enterprise On-Ramp |
| "Data transfer IN to AWS costs money" | It's free in (mostly); OUT is what's expensive |

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **CloudWatch** | Metrics, logs, events for AWS resources |
| **CloudWatch Alarm** | Trigger an action when a metric crosses threshold |
| **CloudWatch Agent** | Installed on EC2 to ship custom metrics/logs |
| **EventBridge** | Event-driven routing (formerly CloudWatch Events) |
| **CloudTrail** | API call audit log |
| **Config** | Resource configuration tracking + compliance rules |
| **Systems Manager (SSM)** | Operations toolkit (Session Mgr, Patch Mgr, Param Store, etc.) |
| **Session Manager** | Browser-based shell to EC2 (no SSH/bastion) |
| **Trusted Advisor** | Best-practice scoring across 5 categories |
| **Compute Optimizer** | ML right-sizing for EC2/EBS/Lambda |
| **AWS Health Dashboard** | Service status + your account-specific events |
| **AWS Budgets** | Spend/usage budgets with alerts |
| **Cost Explorer** | Visualize and forecast costs |
| **Cost & Usage Report (CUR)** | Most-granular billing data export |
| **AWS Pricing Calculator** | Estimate cost before deploying |
| **Cost Allocation Tags** | Resource tags for chargeback/showback |
| **Reserved Instance (RI)** | 1- or 3-year commitment for compute discount |
| **Savings Plan** | Flexible 1/3-yr $/hr commitment |
| **AWS Marketplace** | 3rd-party software catalog |
| **QuickSight** | Serverless BI dashboards |
| **Basic / Developer / Business / Enterprise On-Ramp / Enterprise** | The 5 AWS Support plans |
| **TAM** | Technical Account Manager (Ent. plans) |
| **IEM** | Infrastructure Event Management (Ent. only) |

---

## 🏛️ Case Study, Pinterest's Multi-Year Cost-Optimization Program (2018–2022)

**Situation.** Pinterest had been all-in on AWS since 2011, scaling to ~450 million monthly active users by 2019. Their AWS bill reported publicly in their 2018 S-1 IPO filing as "a substantial portion of cost of revenue" was roughly $100M/year in 2018 and climbing fast as ad spend grew. The CFO and CTO both saw the same problem from different sides: "Are we spending efficiently, or are we paying AWS to host idle EC2?"

**Decision.** Pinterest's infrastructure team (under VP of Engineering Yashwanth Nelapati) launched a sustained cost-optimization program with five named workstreams (documented in Pinterest Engineering blog posts 2019–2022 and Pinterest's 2020 + 2021 10-K filings):

1. **Reserved Instance + Savings Plan portfolio management.** They moved baseline workloads (~60% of fleet) from On-Demand to 3-year Compute Savings Plans, locking in 50–60% discounts.
2. **Right-sizing via Compute Optimizer.** Identified ~$8M/year of EC2 instances running below 20% utilization; downsized or terminated.
3. **Spot Instance expansion.** Moved ~40% of non-latency-critical batch (ML training, log processing, image transcoding) to Spot, saving ~70% on those workloads.
4. **S3 storage class tiering.** Moved ~150 PB of historical user-generated images from S3 Standard to S3 Intelligent-Tiering and S3 Glacier Instant Retrieval. Documented in re:Invent 2020 STG324.
5. **FinOps culture change.** Made cost allocation tags mandatory; built internal dashboards on top of the Cost & Usage Report (CUR) so each engineering team could see "what is *my service* spending?"

**Outcome.** Pinterest reported in its 2021 10-K and various engineering blog posts that the program saved roughly **$4M per year by 2021, growing to ~$12M+/year by 2022** as the optimization compounded. In 2022 Pinterest signed a "long-term cloud purchase commitment" with AWS (reported as $3.2B over 5 years in the 2023 10-K), a multi-year deal that traded discount depth for capacity guarantee.

**Lesson for the exam / for practitioners.** Pinterest is the textbook case for the **Cost Optimization pillar** (one of the 6 Well-Architected pillars, covered in Module 8). For the exam, the lesson is the sequence of tools: **Cost Explorer to see, Trusted Advisor + Compute Optimizer to identify waste, Reserved Instances + Savings Plans for committed workloads, Spot for fault-tolerant batch, S3 lifecycle / intelligent tiering for storage, Cost Allocation Tags for chargeback.** Every CLF-C02 cost-optimization question maps to one of these steps.

**Discussion (Socratic).**
- Q1: Pinterest's $3.2B 5-year commit is essentially a Reserved Instance contract at company scale. What does Pinterest lose by signing it? At what stage of company growth does this kind of multi-year cloud commit become defensible vs reckless?
- Q2: Pinterest's biggest *cultural* change was making cost allocation tags mandatory. Why is tagging actually *the* most important FinOps practice? What breaks if tags are inconsistent or missing?
- Q3: The 5 workstreams have an implicit ordering. Which one would you do first at a startup with $200K/year AWS spend? Which one at a company with $20M/year spend? Argue your sequencing.

---

## ✅ Module 7 Summary

You now know:

- 👁️ CloudWatch (metrics + logs + alarms), EventBridge for state-change routing
- 📜 CloudTrail (API audit) vs Config (resource config drift)
- ⚙️ Systems Manager (Session Manager, Patch Manager, Parameter Store)
- ✅ Trusted Advisor (5 categories) + Compute Optimizer
- 🩺 AWS Health Dashboard (account + service)
- 💵 Data transfer pricing (in = free, out = $)
- 🧮 Pricing Calculator, Budgets, Cost Explorer, CUR, Cost Allocation Tags
- 💼 4 paid Support plans + Basic, response times, TAM access
- 🏛️ AWS Marketplace + QuickSight
- 📌 Pinterest's $4M+/year cost-optimization program as the canonical FinOps case

**Next steps:**
1. 🎥 [Videos](./Videos.md)
2. ✏️ [Quiz](./Quiz.md)
3. 📋 [Cheat-Sheet](./Cheat-Sheet.md)
4. ➡️ [Module 8: Well-Architected & Migration](../Module-08-Well-Architected-Migration/Reading.md)

---

> **Where this leads.**
> - Inside this course: Module 8 (Well-Architected) frames the same cost levers under the formal "Cost Optimization Pillar" and adds the Sustainability pillar (where the same right-sizing logic applies for carbon, not just dollars).
> - Cross-course: `04-AWS-Solutions-Architect-Associate` Module 7 deepens monitoring with X-Ray, CloudWatch Synthetics, Container Insights, and the SAA-C03 observability scenarios. The FinOps Foundation's free certification (FOCUS spec, 2023) builds on top of everything covered here.
> - Practice: Practice Exam 2 has ~15 questions on monitoring, pricing, and support (Qs 22–35, 47). Final Mock Exam has ~6 questions in the Billing/Pricing/Support domain (~12% by question count).

---

## 💬 Discussion, Socratic prompts

1. **Budgets vs SCPs as cost controls.** AWS Budgets *alerts* you when spending crosses a threshold. SCPs *prevent* spending from happening at all (e.g., "no EC2 outside us-east-1"). What's the right balance alerts vs hard prevention at a 50-engineer SaaS? When does each become more important?
2. **The Support-plan decision.** Business Support is $100/mo or 3% of usage, whichever is higher. At what monthly AWS spend does it actually pay off (in faster incident resolution, full Trusted Advisor checks)? Build the breakeven math.
3. **TAMs as a strategic resource.** Enterprise Support's dedicated TAM costs $15K+/mo. What does a good TAM actually do that engineering teams can't? When is the TAM *more* valuable than the support tier discount?
4. **CloudWatch alarms vs Config rules.** Both can detect "bad" states. When does a real-time CloudWatch metric beat a Config compliance check, and vice versa? Walk through 2 concrete scenarios.
5. **The "right-sizing" rabbit hole.** Compute Optimizer says you can downsize from `m5.2xlarge` to `m5.xlarge` and save $80/mo per instance. Across 200 instances that's $192K/year. What's the *risk* you take by doing this, and how do you mitigate it before pulling the trigger?

---

## 📚 Further Reading (Optional)

- 📖 [AWS Pricing Page](https://aws.amazon.com/pricing/)
- 📖 [AWS Support Plans Comparison](https://aws.amazon.com/premiumsupport/plans/)
- 📖 [AWS Pricing Calculator](https://calculator.aws/)
- 📖 [AWS Billing & Cost Management User Guide](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-what-is.html)
- 📖 [Cost Optimization Pillar (Well-Architected)](https://docs.aws.amazon.com/wellarchitected/latest/cost-optimization-pillar/welcome.html)

---

## 📚 Further sources (this module)

- 📰 **Pinterest Engineering *"How Pinterest Optimizes Its Cloud Infrastructure"* (Pinterest Eng blog series, 2019–2022)** primary-source posts on the cost-optimization program. Pair with Pinterest 10-K filings 2020 and 2021 for the dollar figures.
- 📖 **J.R. Storment & Mike Fuller *Cloud FinOps: Collaborative, Real-Time Cloud Financial Management* (O'Reilly, 2nd edition, 2023)** the canonical FinOps textbook. Chapters 1, 3, 6, 11 are most CLF-relevant.
- 🎓 **FinOps Foundation *FinOps Framework + Certified Practitioner exam* (free training, paid cert)** vendor-neutral cost-optimization discipline aligned with this module's content.
- 📖 **Kim, G., Debois, P., Willis, J., Humble, J. *The DevOps Handbook* (IT Revolution Press, 2016, 2nd edition 2021)** the canonical text on the cultural side of monitoring + operations. Part III is most CloudWatch-adjacent.
- 📖 **Kim, G. *The Phoenix Project* (IT Revolution Press, 2013)** the foundational novel that grounds why ops + monitoring + cost management are a strategic concern, not just a back-office function.
- 📖 **AWS Builders' Library *"Building dashboards for operational visibility"* by John O'Shea** the AWS-internal philosophy of CloudWatch dashboards. Free read.
- 📄 **Vogels, W. *"Eventually Consistent"* (CACM, January 2009)** Werner's classic on the philosophy of monitoring distributed systems. Pair with his Frugal Architect series of blog posts (allthingsdistributed.com, 2023–2024) for the cost-conscious-design angle.
