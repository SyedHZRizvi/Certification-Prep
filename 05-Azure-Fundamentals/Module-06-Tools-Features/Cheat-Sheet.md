# 📋 Module 6 Cheat Sheet: Tools & Features

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 🖱️ 5 Management Interfaces

| Tool | Best for |
|------|----------|
| **Azure Portal** | GUI, dashboards, discovery |
| **Azure CLI** (`az`) | Cross-platform scripting |
| **Azure PowerShell** (`Az`) | Windows-shop scripting |
| **Cloud Shell** | Browser shell, zero install (Bash or PowerShell) |
| **Azure Mobile App** | On-the-go monitoring + basic ops |

---

## 📜 Infrastructure as Code

| | Engine | Best for |
|---|--------|----------|
| **ARM templates** | ARM | Original Azure IaC (JSON) |
| **Bicep** | ARM (compiles to it) | Modern Azure-only IaC |
| **Terraform** | HashiCorp | Multi-cloud |

🎯 **Bicep and ARM use the SAME engine** — Bicep just compiles to ARM JSON.

---

## 👀 Monitoring & Health — The 3 M's

| Service | Watches... |
|---------|-----------|
| **Azure Monitor** | YOUR workload (metrics, logs, alerts) |
| **Azure Service Health** | AZURE platform issues affecting YOUR subs (personalized) |
| **Azure Status** | Public global Azure status page (no login) |

### Azure Monitor components
- **Metrics** — numeric over time
- **Logs** (Log Analytics, KQL queries)
- **Application Insights** — APM
- **Alerts**
- **Workbooks, Dashboards**

---

## 💡 Azure Advisor — 5 Pillars

1. **Cost**
2. **Security**
3. **Performance**
4. **Reliability**
5. **Operational Excellence**

⚠️ Advisor RECOMMENDS — it does not take action.

---

## 🌐 Azure Arc

Extends Azure management (Policy, Monitor, Defender, RBAC) to:
- On-prem servers
- AWS / GCP resources
- Kubernetes anywhere
- SQL Server anywhere

NOT a migration tool — it MANAGES things where they live.

---

## 🔄 Migration & Data Movement

| Tool | Purpose |
|------|---------|
| **Azure Migrate** | Hub for assessing + migrating servers, DBs, web apps |
| **Azure Site Recovery (ASR)** | Replication-based DR / VM migration |
| **Database Migration Service (DMS)** | Migrate SQL/MySQL/PostgreSQL/MongoDB |
| **Azure Data Box** | Mail in TB-PB of data on a physical appliance |

---

## 🛡️ Trust & Compliance

| Resource | What |
|----------|------|
| **Trust Center** | Microsoft's security/privacy/compliance overview |
| **Service Trust Portal** | Download audit reports (ISO, SOC, HIPAA, etc.) |
| **Compliance Manager** | Track YOUR org's compliance with frameworks |

---

## 🏆 Exam Power Phrases

**Usually CORRECT:**
- ✅ "Use Bicep for modern Azure IaC"
- ✅ "Cloud Shell — no install needed"
- ✅ "Service Health alert for Azure platform issues"
- ✅ "Azure Monitor for workload metrics + alerts"
- ✅ "Advisor for cost/security/performance recommendations"
- ✅ "Arc to manage non-Azure resources"

**Usually WRONG:**
- ❌ "ARM and Bicep are different engines"
- ❌ "Advisor takes action automatically"
- ❌ "Service Health is the public Azure status page"
- ❌ "PowerShell only runs on Windows"
- ❌ "Arc is a migration tool"

---

## ⚠️ Anti-Patterns

- ❌ Click-ops in the Portal for repeated/auditable deployments (use Bicep)
- ❌ Manually checking status.azure.com instead of Service Health alerts
- ❌ Ignoring Advisor recommendations for months
- ❌ Treating Azure Monitor alerts as optional in production

---

## 🎁 Quick Decoder

| Need | Tool |
|------|------|
| Browser GUI | Portal |
| Quick command, no install | Cloud Shell |
| Cross-platform script | CLI |
| Windows shop script | PowerShell |
| Phone monitoring | Mobile App |
| Modern Azure IaC | Bicep |
| Multi-cloud IaC | Terraform |
| Workload monitoring | Azure Monitor |
| Personalized Azure status | Service Health |
| Public global status | status.azure.com |
| Recommendations | Advisor |
| Manage non-Azure resources | Arc |
| Discover + migrate | Migrate |
| Replicate + DR VMs | Site Recovery |
| Mail in TB of data | Data Box |
| Download audit reports | Service Trust Portal |
| Track compliance | Compliance Manager |

---

## ✏️ Quick Self-Check

Cover the answers and recite:
1. 5 Azure management interfaces? ___
2. ARM vs Bicep — same engine? ___
3. Monitor vs Service Health vs Status — one-line each? ___
4. Azure Advisor's 5 pillars? ___
5. Difference between Azure Arc and Azure Migrate? ___

---

➡️ Take [Practice Exam 2](../Practice-Exams/Practice-Exam-2.md), then [Final Mock Exam](../Practice-Exams/Final-Mock-Exam.md). Drill the [Flashcards](../Flashcards.md) every day until exam day.
