# ✏️ Module 6 Quiz: Tools & Features

> **Instructions:** Answer all 26 questions WITHOUT looking at the reading.
> Then check your answers below. Aim for 22/26 minimum.

---

## Questions

### Q1. Which Azure tool is a browser-based shell that requires NO local installation? *(Remember)*
A. Azure CLI
B. Azure PowerShell
C. Azure Cloud Shell
D. Visual Studio Code

---

### Q2. Which is the modern Azure-native IaC language that compiles to ARM templates? *(Remember)*
A. Terraform
B. Bicep
C. YAML
D. Pulumi

---

### Q3. Which service collects metrics and logs from YOUR resources and lets you build alerts? *(Understand)*
A. Azure Service Health
B. Azure Status
C. Azure Monitor
D. Azure Advisor

---

### Q4. Which service provides a PERSONALIZED view of Azure platform issues affecting your subscriptions? *(Apply)*
A. Azure Monitor
B. Azure Service Health
C. Azure Status (status.azure.com)
D. Azure Advisor

---

### Q5. Where do you go to see Azure's PUBLIC global service status? *(Remember)*
A. Azure Monitor
B. Azure Service Health
C. status.azure.com (Azure Status)
D. Azure Advisor

---

### Q6. Azure Advisor provides recommendations in how many pillars? *(Remember)*
A. 3
B. 4
C. 5
D. 7

---

### Q7. Yes/No: ARM templates and Bicep deploy to the same Azure Resource Manager engine. *(Analyze)*
A. Yes
B. No

---

### Q8. To project on-premises servers and AWS resources into Azure for unified management, use: *(Apply)*
A. Azure Migrate
B. Azure Site Recovery
C. Azure Arc
D. Azure CLI

---

### Q9. Which tool would you use to discover and assess on-prem servers, databases, and web apps before migrating to Azure? *(Apply)*
A. Azure Arc
B. Azure Migrate
C. Azure Monitor
D. Azure Advisor

---

### Q10. To physically ship terabytes of data to Microsoft on a managed appliance for ingestion, use: *(Apply)*
A. ExpressRoute
B. Azure Data Box
C. Azure Site Recovery
D. Storage Account

---

### Q11. Where can you download Microsoft's ISO 27001, SOC 2, and HIPAA audit reports? *(Remember)*
A. Azure Portal Dashboard
B. Service Trust Portal
C. Azure Monitor
D. Defender for Cloud

---

### Q12. Which is TRUE about Azure CLI vs Azure PowerShell? *(Analyze)*
A. PowerShell only runs on Windows
B. Both are cross-platform and can manage Azure
C. CLI only runs on Linux
D. They are the same tool

---

### Q13. To create a personalized notification when Azure has a planned maintenance event affecting your region, set up: *(Apply)*
A. Azure Monitor metric alert
B. Azure Service Health alert
C. Azure Status RSS feed
D. Azure Advisor alert

---

### Q14. The Azure Mobile App is BEST for: *(Understand)*
A. Writing ARM templates
B. Quick monitoring, alerts, and on-the-go operations from a phone
C. Heavy automation scripts
D. Bulk VM deployment

---

### Q15. Which is the MOST appropriate tool to deploy infrastructure as code across Azure, AWS, AND GCP from one codebase? *(Apply)*
A. ARM templates
B. Bicep
C. Terraform
D. PowerShell DSC

---

### Q16. Yes/No: Azure Advisor automatically applies its recommendations. *(Analyze)*
A. Yes
B. No (read-only recommendations)

---

### Q17. Application Insights is BEST described as: *(Remember)*
A. A SIEM
B. APM (Application Performance Monitoring) feature of Azure Monitor
C. A firewall
D. A subscription type

---

### Q18. Which language is used to query Azure Monitor logs in Log Analytics? *(Remember)*
A. SQL
B. KQL (Kusto Query Language)
C. PromQL
D. PowerShell

---

### Q19. To migrate VMs into Azure (or between regions) with continuous replication and failover, use: *(Apply)*
A. Azure Data Box
B. Azure Site Recovery
C. Azure Backup
D. Azure Migrate's web-app tool

---

### Q20. Yes/No: Cloud Shell requires a backing storage account for persistent files. *(Understand)*
A. Yes
B. No

---

### Q21. Which is TRUE about Bicep? *(Analyze)*
A. Multi-cloud
B. JSON-based with strict syntax
C. Azure-only DSL that compiles to ARM JSON
D. Replaces RBAC

---

### Q22. The MOST appropriate tool to track an org's compliance status across frameworks (ISO, NIST, HIPAA) is: *(Apply)*
A. Compliance Manager
B. Azure Monitor
C. Azure Advisor
D. Azure CLI

---

### Q23. Yes/No: status.azure.com requires you to log in with your Azure credentials to view region health. *(Understand)*
A. Yes
B. No (it's public)

---

### Q24. Which scenario fits Azure Arc BEST? *(Evaluate)*
A. Migrate Hyper-V VMs to Azure
B. Apply Azure Policy to on-prem Linux servers without moving them
C. Stream desktops to remote users
D. Auto-scale App Service

---

### Q25. The 5 pillars of Azure Advisor are: *(Remember)*
A. Cost, Security, Performance, Reliability, Operational Excellence
B. Compute, Network, Storage, Identity, Apps
C. Speed, Quality, Cost, Scope, Risk
D. IaaS, PaaS, SaaS, FaaS, DaaS

---

### Q26. To deploy a VM from a script that will run from a developer's MacBook AND in a Linux CI pipeline, the MOST appropriate tool is: *(Apply)*
A. Azure CLI
B. Azure Portal
C. Cloud Shell only
D. ARM REST API directly

---

## 🎯 Answers + Explanations

### Q1: **C. Azure Cloud Shell**
Browser-based, no install needed. Bash or PowerShell flavor.

### Q2: **B. Bicep**
Modern DSL that compiles to ARM JSON. Microsoft's recommended IaC for Azure today.

### Q3: **C. Azure Monitor**
YOUR workload metrics, logs, alerts. Service Health watches AZURE.

### Q4: **B. Azure Service Health**
Personalized to your subscriptions; covers outages, planned maintenance, advisories.

### Q5: **C. status.azure.com**
Public global Azure status page. No login required.

### Q6: **C. 5**
Cost, Security, Performance, Reliability, Operational Excellence.

### Q7: **A. Yes**
Bicep is just nicer syntax that compiles down to ARM JSON, same engine.

### Q8: **C. Azure Arc**
Arc extends Azure management to anywhere (on-prem, multi-cloud, edge).

### Q9: **B. Azure Migrate**
Hub for discovery, assessment, and migration of servers/DBs/web apps.

### Q10: **B. Azure Data Box**
Physical appliance for offline bulk transfer (TB to PB).

### Q11: **B. Service Trust Portal**
Downloadable audit reports + compliance docs.

### Q12: **B. Both are cross-platform**
PowerShell Core + Az module runs on macOS/Linux. CLI runs everywhere.

### Q13: **B. Azure Service Health alert**
Service Health alerts cover service issues, planned maintenance, advisories.

### Q14: **B. On-the-go monitoring + basic ops**
Mobile app is for incident response and dashboards, not heavy automation.

### Q15: **C. Terraform**
HashiCorp's multi-cloud IaC. Bicep and ARM are Azure-only.

### Q16: **B. No (read-only recommendations)**
Advisor surfaces; you act. (Some Defender for Cloud rec'd remediation tasks can be auto-applied.)

### Q17: **B. APM feature of Azure Monitor**
Application Insights = APM for web apps; part of Azure Monitor family.

### Q18: **B. KQL**
Kusto Query Language — same as Sentinel and Log Analytics.

### Q19: **B. Azure Site Recovery**
ASR provides replication-based migration + DR for VMs.

### Q20: **A. Yes**
Cloud Shell needs a backing storage account (Azure Files share) for persistent home directory.

### Q21: **C. Azure-only DSL compiling to ARM JSON**
Bicep is Azure-only; Terraform is multi-cloud.

### Q22: **A. Compliance Manager**
Tracks your org's compliance status against frameworks.

### Q23: **B. No — it's public**
Anyone can view status.azure.com without logging in. Service Health (personalized) needs the portal.

### Q24: **B. Apply Azure Policy to on-prem Linux servers without moving them**
Classic Arc use case — extend Azure governance to non-Azure resources.

### Q25: **A. Cost, Security, Performance, Reliability, Operational Excellence**
The 5 Advisor pillars.

### Q26: **A. Azure CLI**
Cross-platform, scriptable, works in any CI/CD. PowerShell could also work but CLI is more common in mixed environments.

---

## 📊 Score Yourself

- 25–26/26 → 🏆 Ready for Practice Exam 2 + Final Mock
- 22–24/26 → ✅ Solid
- 18–21/26 → ⚠️ Re-do Monitor/Service Health/Status comparison
- <18/26 → 🔁 Re-read Reading

---

## 🃏 Add To Your Flashcards

- 5 management interfaces (Portal, CLI, PowerShell, Cloud Shell, Mobile App)
- ARM vs Bicep vs Terraform
- Monitor vs Service Health vs Status (one-liner each)
- Advisor 5 pillars
- Azure Arc one-liner
- Azure Migrate vs Site Recovery vs Data Box

---

➡️ Take [Practice Exam 2](../Practice-Exams/Practice-Exam-2.md), then [Final Mock Exam](../Practice-Exams/Final-Mock-Exam.md)
