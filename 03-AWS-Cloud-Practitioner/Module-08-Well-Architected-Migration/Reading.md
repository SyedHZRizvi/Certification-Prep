# Module 8: Well-Architected & Migration 🏛️

> **Why this module matters:** This is the synthesis module. The Well-Architected Framework's 6 pillars are AWS's "philosophy" — they appear on the exam directly AND as the underlying reason behind many other questions. The 6 Rs of migration round out your final 5–7% of exam material.

---

## 🏛️ A Story: The 6 Pillars of Maria's Pizza Empire

Now that Maria's pizza empire spans 50 cities, she sits down with an AWS architect to "audit" her design. The architect doesn't ask "is your code good?" — they ask 6 questions:

1. **Operational Excellence:** Can you deploy a menu change in 1 hour, or does it take 3 weeks?
2. **Security:** Can a hacker dump your customer database? Is it encrypted?
3. **Reliability:** When AZ `us-east-1a` goes down, do you keep serving pizza?
4. **Performance Efficiency:** Are you using the right tools for each workload (RDS vs DynamoDB vs Redshift)?
5. **Cost Optimization:** Are you running idle resources? Are you on On-Demand when RIs would save 60%?
6. **Sustainability:** Are you minimizing the carbon footprint of your AWS usage?

That's the **AWS Well-Architected Framework**. Six lenses to evaluate any cloud workload. It's not optional reading — it's an exam topic.

---

## 🏛️ The AWS Well-Architected Framework (6 Pillars)

🔥 **MEMORIZE the 6 pillars in order. They will be tested directly.**

```
1. Operational Excellence   →  Run + monitor systems to deliver business value
2. Security                 →  Protect info, systems, assets through risk + mitigations
3. Reliability              →  Recover from failures, dynamically adapt to demand
4. Performance Efficiency   →  Use computing resources EFFICIENTLY as demand changes
5. Cost Optimization        →  Avoid unnecessary cost; right-size
6. Sustainability           →  Minimize environmental impact (added in 2021)
```

🧠 Mnemonic: **"Old Sea Rats Pop Cool Sodas"** (Operational, Security, Reliability, Performance, Cost, Sustainability)

### Pillar 1: Operational Excellence

Design principles:
- Perform operations as code (IaC, automate)
- Make frequent, small, reversible changes
- Refine operations procedures frequently
- Anticipate failure (chaos engineering)
- Learn from operational events

Services: CloudFormation, Systems Manager, CloudWatch, CodePipeline

### Pillar 2: Security

Design principles:
- Implement a strong identity foundation (least privilege, MFA)
- Enable traceability (CloudTrail, Config)
- Apply security at all layers (defense in depth)
- Automate security best practices
- Protect data in transit and at rest
- Keep people away from data (no direct access; programmatic only)
- Prepare for security events

Services: IAM, KMS, GuardDuty, Macie, WAF, Shield

### Pillar 3: Reliability

Design principles:
- Test recovery procedures
- Automatically recover from failure (Auto Scaling, Multi-AZ)
- Scale horizontally to increase aggregate availability
- Stop guessing capacity (use Auto Scaling)
- Manage change in automation

Services: Auto Scaling, Multi-AZ RDS, S3 CRR, Route 53 failover, Backup

### Pillar 4: Performance Efficiency

Design principles:
- Democratize advanced tech (use managed services)
- Go global in minutes (multi-Region with low effort)
- Use serverless architectures (no servers to manage)
- Experiment more often (cloud makes experimentation cheap)
- Consider mechanical sympathy (pick the right tool for the workload)

Services: Lambda, Fargate, DynamoDB DAX, CloudFront, ElastiCache

### Pillar 5: Cost Optimization

Design principles:
- Adopt a consumption model (pay only for what you use)
- Measure overall efficiency
- Stop spending on undifferentiated heavy lifting (use managed services)
- Analyze and attribute expenditure (Cost Allocation Tags)
- Use managed services to reduce TCO

Services: Cost Explorer, Budgets, Compute Optimizer, Savings Plans, RIs, Spot

### Pillar 6: Sustainability (added 2021)

Design principles:
- Understand your impact
- Establish sustainability goals
- Maximize utilization (don't waste compute)
- Anticipate and adopt new, more efficient hardware/services
- Use managed services (AWS optimizes for efficiency at scale)
- Reduce downstream impact of your workloads

Services: Right-sizing tools, Graviton processors, Spot, Lambda

---

## 🛠️ The AWS Well-Architected Tool

**WA Tool = free service that walks you through a self-assessment** against the 6 pillars and gives you a remediation roadmap.

🎯 **Exam pattern:** "How do you evaluate your architecture against AWS best practices?" → **AWS Well-Architected Tool.**

---

## 🚛 Cloud Migration: The 6 Rs (formerly 5 Rs / 7 Rs)

AWS's framework for migrating an on-prem app to the cloud. There are several variations — CLF-C02 focuses on these **6 strategies (sometimes called 7 Rs if you add "Retain on cloud")**:

| # | R | Description | Effort |
|---|---|-------------|--------|
| 1 | **Rehost** | "Lift and shift" — pick up VM, drop on EC2 | Low |
| 2 | **Replatform** | "Lift, tinker, and shift" — minor optimizations (e.g., move DB to RDS) | Low–Med |
| 3 | **Repurchase** | Switch to a different product (e.g., on-prem CRM → Salesforce) | Med |
| 4 | **Refactor / Re-architect** | Rewrite using cloud-native services | High |
| 5 | **Retire** | Decommission — you don't need this app any more | Trivial |
| 6 | **Retain** | Keep on-prem (for now); revisit later | Trivial |

🧠 Mnemonic: **"Rehost, Replatform, Repurchase, Refactor, Retire, Retain"** → "**RRRRRR**" (the 6 Rs)

🎯 **Exam shortcuts:**
- "Move VMs to EC2 with no code changes" → **Rehost**
- "Move and switch from MySQL on EC2 to RDS Aurora" → **Replatform**
- "Cancel Oracle EBS and adopt Salesforce" → **Repurchase**
- "Rewrite monolith as serverless microservices" → **Refactor**
- "Old app no longer needed" → **Retire**
- "Compliance blocks moving this one; keep on-prem" → **Retain**

---

## 🚛 AWS Migration Services

| Service | What it does |
|---------|--------------|
| **AWS Application Migration Service (MGN)** | Lift-and-shift servers (replaces older SMS / CloudEndure) |
| **AWS Database Migration Service (DMS)** | Migrate / replicate databases (+ SCT for cross-engine) |
| **AWS DataSync** | Bulk data transfer (NFS/SMB/S3/EFS) over internet/DX, automated |
| **AWS Transfer Family** | Managed SFTP / FTPS / FTP → S3 or EFS |
| **AWS Snow Family** | Petabyte physical transfer (Module 3) |
| **AWS Migration Hub** | Central console to track migration progress across services |
| **Application Discovery Service** | Discover on-prem apps and dependencies (agent or agentless) |

🎯 **Exam patterns:**
- "Lift-and-shift VMware → AWS" → **Application Migration Service (MGN)**
- "Migrate 50 TB of on-prem files to S3 over the internet" → **DataSync**
- "Continuous DB replication during migration" → **DMS**
- "Need to scan on-prem to inventory what to move" → **Application Discovery Service**

---

## ☁️ AWS Cloud Adoption Framework (CAF)

**CAF = AWS's playbook for an enterprise's cloud transformation journey.** Organized into **6 perspectives**:

| Perspective | Who owns it |
|-------------|-------------|
| **Business** | Business stakeholders |
| **People** | HR, leadership, change mgmt |
| **Governance** | Finance, audit, compliance |
| **Platform** | IT architecture, dev teams |
| **Security** | InfoSec |
| **Operations** | DevOps / SRE |

🎯 **Exam pattern:** "Holistic enterprise cloud transformation framework" → **AWS CAF.** The 6 perspectives align loosely with the 6 Well-Architected pillars.

---

## 🤝 AWS Partner Network (APN)

**APN = AWS's ecosystem of consulting and software partners.**

Two main types:
- **Consulting Partners** — professional services firms (Accenture, Deloitte, etc.) that help you deploy AWS
- **Technology / ISV Partners** — software vendors with AWS-integrated products (Snowflake, Datadog, etc.)

Partner levels: Select → Advanced → Premier. Specializations / Competencies indicate expertise.

🎯 **Exam pattern:** "Need help architecting a complex migration" → **find an APN Consulting Partner.**

---

## 🛠️ AWS Professional Services & Programs

| Program | What it is |
|---------|------------|
| **AWS Professional Services** | AWS's own consulting team |
| **AWS Managed Services (AMS)** | AWS operates your cloud for you |
| **AWS IQ** | On-demand contractors for small projects |
| **AWS re:Post** | Free community Q&A (replaces old AWS Forums) |
| **AWS Skill Builder** | Free + paid training & labs |
| **AWS Knowledge Center** | Free articles answering common questions |

---

## 🎓 AWS Training & Certifications

The certification ladder (CLF-C02 is the entry point):

```
Foundational:    Cloud Practitioner (you!)
Associate:       Solutions Architect / Developer / SysOps Admin / Data Engineer
Professional:    Solutions Architect Pro / DevOps Engineer Pro
Specialty:       Security, Advanced Networking, Machine Learning, ML Engineer, Database, Data Analytics, SAP
```

🎯 **Exam pattern:** "Validate basic cloud knowledge for non-tech roles" → **Cloud Practitioner.** (You're reading the answer.)

---

## 🚨 Exam Traps

1. **6 pillars, not 5.** Sustainability was added in 2021. Don't pick "5 pillars" as the answer.
2. **Well-Architected Framework ≠ Well-Architected Tool.** Framework = the principles. Tool = the free service that scores you.
3. **CAF has 6 PERSPECTIVES** (different from the 6 pillars).
4. **Refactor is the HIGHEST-effort R.** Rehost is the lowest.
5. **AWS Application Migration Service (MGN)** has replaced **SMS** (Server Migration Service) and **CloudEndure Migration**. Don't pick the old names.
6. **APN Partner Tiers**: Select → Advanced → Premier (lowest to highest).
7. **AWS Managed Services (AMS)** is different from "managed services" generally — AMS is AWS *operating* your account for you (Enterprise-only).
8. **AWS Activate** = startup credits/program (often mentioned alongside APN).

---

## ⚠️ Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "The 6 Rs are all required" | No — choose the right R per app; many apps Retire or Retain |
| "Well-Architected Framework is a tool" | The Framework is principles; the Tool is the self-assessment service |
| "Refactor is always best" | It's the most expensive — only use when business value justifies |
| "Sustainability is optional" | It's one of the 6 pillars — same status as Security |
| "DMS handles servers" | DMS handles DATABASES. For servers, use MGN. |

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **AWS Well-Architected Framework** | 6-pillar guide to evaluating cloud workloads |
| **Operational Excellence** | Run + monitor + improve systems |
| **Security** | Protect info, systems, assets |
| **Reliability** | Recover from failure; adapt to demand |
| **Performance Efficiency** | Use resources efficiently as demand changes |
| **Cost Optimization** | Avoid unnecessary cost; right-size |
| **Sustainability** | Minimize environmental impact |
| **Well-Architected Tool** | Free service to self-assess against the Framework |
| **6 Rs (Migration)** | Rehost, Replatform, Repurchase, Refactor, Retire, Retain |
| **Rehost** | Lift-and-shift (no code changes) |
| **Replatform** | Lift + minor cloud optimizations |
| **Repurchase** | Switch to a different product |
| **Refactor** | Rewrite for cloud-native |
| **Retire** | Decommission |
| **Retain** | Keep on-prem |
| **MGN** | Application Migration Service (lift-and-shift servers) |
| **DMS** | Database Migration Service |
| **DataSync** | Bulk file transfer |
| **Migration Hub** | Central console for migration tracking |
| **Application Discovery Service** | Inventory on-prem apps and dependencies |
| **CAF** | Cloud Adoption Framework (6 perspectives) |
| **APN** | AWS Partner Network (Consulting + Technology partners) |
| **AMS** | AWS Managed Services (AWS runs your AWS account) |
| **AWS Professional Services** | AWS's consulting arm |
| **AWS Activate** | Startup credits program |
| **AWS re:Post** | Community Q&A (free) |

---

## ✅ Module 8 Summary

You now know:
- 🏛️ The 6 pillars of the Well-Architected Framework + the free Well-Architected Tool
- 🚛 The 6 Rs of migration (Rehost, Replatform, Repurchase, Refactor, Retire, Retain)
- 🛠️ Migration services: MGN (servers), DMS (DBs), DataSync (files), Snow Family (petabytes)
- ☁️ AWS Cloud Adoption Framework (CAF) — 6 perspectives
- 🤝 AWS Partner Network (APN): Consulting + Technology partners; Select / Advanced / Premier
- 🛠️ AWS Professional Services, AMS, IQ, re:Post, Skill Builder, Knowledge Center
- 🎓 AWS certification path: Foundational → Associate → Professional → Specialty

**Next steps:**
1. 🎥 [Videos](./Videos.md)
2. ✏️ [Quiz](./Quiz.md)
3. 📋 [Cheat-Sheet](./Cheat-Sheet.md)
4. 🧪 Take [Practice Exam 2](../Practice-Exams/Practice-Exam-2.md)
5. 🧪 Then [Final Mock Exam](../Practice-Exams/Final-Mock-Exam.md) the day before the real exam
6. 🎯 BOOK THE EXAM

---

## 📚 Further Reading (Optional)

- 📖 [AWS Well-Architected Framework](https://aws.amazon.com/architecture/well-architected/)
- 📖 [AWS Migration Hub](https://aws.amazon.com/migration-hub/)
- 📖 [AWS Cloud Adoption Framework](https://aws.amazon.com/cloud-adoption-framework/)
- 📖 [AWS Partner Network](https://aws.amazon.com/partners/)
- 📖 [Migration Strategies (6 Rs)](https://docs.aws.amazon.com/prescriptive-guidance/latest/large-migration-guide/migration-strategies.html)
