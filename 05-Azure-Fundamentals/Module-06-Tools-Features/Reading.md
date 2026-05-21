# Module 6: Tools & Features 🧰

> **Why this module matters:** AZ-900 loves "which tool would you use?" questions. This module is your toolbox. Portal vs CLI vs PowerShell, ARM vs Bicep, Monitor vs Advisor vs Service Health — knowing the distinct *job* of each gets you free points.

---

## 🍕 A Story: Anna Opens Her Toolkit

By now Anna runs *PizzaTracker.io* on Azure across two regions. She wakes up Monday and her day looks like:

1. Phone buzzes — **Azure Mobile App** alert: a kitchen oven controller VM in West US went unhealthy
2. She opens **Azure Portal** on her laptop and checks the dashboard
3. **Service Health** shows West US has a planned maintenance window in 3 hours — she's not the only one
4. She needs to restart 5 VMs across 2 regions — instead of clicking 50 times, she opens **Cloud Shell** and runs an **Azure CLI** loop
5. New website launching tomorrow: she defines the infrastructure (App Service, SQL DB, Storage) in **Bicep** and deploys via `az deployment group create`
6. **Azure Advisor** tells her three idle VMs are wasting $80/month — she shuts them down
7. **Azure Monitor** dashboard shows API latency rose 15% — she clicks into Log Analytics queries to investigate

Every one of those steps used a different Azure tool, and the exam wants you to know which is which. Here we go.

---

## 🖱️ Azure Management Interfaces

### Azure Portal
The browser-based GUI at **portal.azure.com**. Everything Azure can do is reachable here.

- Customizable dashboards
- Resource explorer
- Built-in **Cloud Shell** (top bar)
- Multi-tenant switching (top right)

🎯 Best for: Discovery, ad-hoc tasks, dashboards, learning.

### Azure CLI
Cross-platform command-line tool. Runs on Windows, macOS, Linux, Cloud Shell.

```bash
az login
az group create --name rg-pizza --location eastus
az vm create --resource-group rg-pizza --name web1 --image UbuntuLTS
```

🎯 Best for: Scripting on Linux/macOS, CI/CD pipelines, anything cross-platform.

### Azure PowerShell
Cmdlets running on PowerShell Core (cross-platform) or Windows PowerShell.

```powershell
Connect-AzAccount
New-AzResourceGroup -Name rg-pizza -Location eastus
New-AzVM -ResourceGroupName rg-pizza -Name web1 -Image UbuntuLTS
```

🎯 Best for: Windows-heavy automation, Microsoft 365 / Exchange / Active Directory admins.

### Azure Cloud Shell
A **browser-based shell** baked into the Portal. Two flavors: **Bash** (with CLI pre-installed) or **PowerShell** (with Az module pre-installed). Backed by an Azure File Share for persistent storage.

🎯 Best for: Run commands without installing anything locally — works from any browser.

### Azure Mobile App
iOS / Android app. Monitor resources, check alerts, start/stop VMs, run Cloud Shell on your phone.

🎯 Best for: On-call response and quick status checks while away from a laptop.

### Comparison

| Tool | Where it runs | Strength |
|------|---------------|----------|
| Azure Portal | Browser | GUI, dashboards, discovery |
| Azure CLI | Windows/macOS/Linux | Cross-platform scripts |
| Azure PowerShell | Windows/Linux/macOS | Windows-shop automation |
| Cloud Shell | Browser (no install) | Quick CLI/PS from anywhere |
| Azure Mobile App | iOS/Android | On-the-go monitoring & basic ops |

🎯 **Exam pattern:**
- *"Linux admin wants to script Azure"* → **Azure CLI** (or PowerShell — both work)
- *"Run a quick command from any computer without installing anything"* → **Cloud Shell**
- *"Get alerted on phone when a VM goes down"* → **Azure Mobile App** (+ Monitor alerts)

---

## 📜 Infrastructure as Code (IaC) on Azure

### ARM Templates (Azure Resource Manager)
JSON-based declarative templates. **The original** IaC for Azure. Deeply integrated with Azure Resource Manager.

```json
{
  "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
  "contentVersion": "1.0.0.0",
  "resources": [
    { "type": "Microsoft.Storage/storageAccounts", "name": "..." }
  ]
}
```

### Bicep
A friendlier DSL that compiles **to** ARM. Same engine, much cleaner syntax. Microsoft's recommended IaC language for Azure today.

```bicep
resource storage 'Microsoft.Storage/storageAccounts@2023-01-01' = {
  name: 'sapizzaprod'
  location: 'eastus'
  sku: { name: 'Standard_LRS' }
  kind: 'StorageV2'
}
```

🎯 **Exam pattern:** "Microsoft-recommended modern IaC language for Azure" → **Bicep**.

### Terraform
HashiCorp's multi-cloud IaC. Works with Azure (and AWS, GCP, etc.) via the AzureRM provider. Popular in multi-cloud shops.

### Comparison

| Tool | Native to | Best for |
|------|-----------|----------|
| **ARM Templates** | Azure | Direct ARM control; long-standing tooling |
| **Bicep** | Azure | Modern Azure-only IaC, cleaner syntax |
| **Terraform** | Multi-cloud | Mixed-cloud orgs |

⚠️ **Trap:** ARM and Bicep deploy to the SAME engine (Azure Resource Manager). Bicep is just nicer syntax that compiles to ARM JSON.

---

## 👀 Monitoring & Health: The "Three M's"

Three services often confused on the exam:

| Service | Answers the question... |
|---------|--------------------------|
| **Azure Monitor** | "How is MY workload performing?" (metrics, logs, alerts) |
| **Azure Service Health** | "Is AZURE (the platform) having issues that affect ME?" |
| **Azure Status (status.azure.com)** | "Is Azure having a global outage?" (public dashboard) |

### Azure Monitor — Your Full-Stack Observability

Azure Monitor collects:
- **Metrics** — numeric data over time (CPU, latency, requests/sec)
- **Logs** — text events, traces, query-able in **Log Analytics** (Kusto/KQL)
- **Application Insights** — APM for web apps (deep .NET, Java, Node, Python, Go support)
- **Alerts** — fire on metric thresholds or log queries
- **Workbooks** & **Dashboards** — visualizations
- **Autoscale** — driven by Monitor metrics

🎯 **Exam pattern:** "Detect when API response time exceeds 500 ms and notify the team" → **Azure Monitor alert**.

### Azure Service Health
Personalized view of Azure platform issues affecting *your resources*. Covers:
- **Service issues** (active outages)
- **Planned maintenance**
- **Health advisories**
- **Security advisories**

You can set up alerts here too (e.g., "email me if Storage in East US has an outage").

🎯 **Exam pattern:** "We want a personalized notification when Azure has an incident affecting our subscriptions" → **Service Health alert**.

### Azure Status
Public, anonymous global status page at **status.azure.com**. Anyone can view, no login required.

🎯 **Exam pattern:** "Public global status page for Azure regions" → **Azure Status page**.

---

## 💡 Azure Advisor

Personalized recommendations across five pillars:

| Pillar | Example recommendation |
|--------|------------------------|
| **Reliability** | Enable Azure Backup for VMs |
| **Security** | Enable MFA on admin accounts |
| **Performance** | Resize underperforming SQL DB |
| **Cost** | Buy Reservations / shut down idle VM |
| **Operational Excellence** | Set up Service Health alerts |

🎯 **Exam pattern:** "Get actionable recommendations to improve cost, security, and reliability" → **Azure Advisor**.

⚠️ **Trap:** Advisor is **read-only recommendations**. Defender for Cloud's Secure Score is similar but security-focused. Monitor tells you what *is happening*; Advisor tells you what you *should change*.

---

## 🌐 Azure Arc — Manage Everything From Azure

**Azure Arc** projects on-premises servers, Kubernetes clusters, and even AWS/GCP resources into Azure so you can manage them with Azure tools (Policy, Monitor, Defender, etc.).

🎯 **Exam pattern:** "Apply Azure Policy and Defender to on-prem and AWS Kubernetes from one pane" → **Azure Arc**.

---

## 🔄 Migration Tools

| Tool | What it migrates |
|------|------------------|
| **Azure Migrate** | Discovery + assessment + migration hub for servers, databases, web apps, VDI |
| **Azure Site Recovery (ASR)** | Replication-based DR and migration of VMs |
| **Database Migration Service (DMS)** | Migrate SQL Server, MySQL, PostgreSQL, MongoDB to Azure |
| **Data Box** | Physical appliance for moving TB-PB of data offline (mail it in) |

🎯 **Exam pattern:** "Mail Microsoft a 100 TB hard drive to ingest our archive" → **Azure Data Box**.

---

## 🛡️ Trust Center & Compliance

| Resource | What |
|----------|------|
| **Microsoft Trust Center** | Overview of Microsoft's security/privacy/compliance practices |
| **Service Trust Portal** | Audit reports, compliance docs, security assessments downloads |
| **Compliance Manager** | Track your org's compliance with frameworks (ISO 27001, HIPAA, NIST, GDPR) |

🎯 **Exam pattern:** "Download Microsoft's ISO 27001 audit report" → **Service Trust Portal**.

---

## 🎁 Mini-Map: Quick Tool Decoder

| If the question says... | Pick... |
|------------------------|---------|
| "Browser-based GUI" | **Azure Portal** |
| "Run commands without installing anything" | **Cloud Shell** |
| "Cross-platform CLI scripting" | **Azure CLI** |
| "Windows-shop scripting" | **Azure PowerShell** |
| "Manage Azure from phone" | **Azure Mobile App** |
| "Modern IaC for Azure" | **Bicep** |
| "JSON declarative Azure IaC" | **ARM templates** |
| "Multi-cloud IaC" | **Terraform** |
| "Workload metrics + alerts + logs" | **Azure Monitor** |
| "Azure platform issues affecting my resources" | **Azure Service Health** |
| "Public global Azure status" | **Azure Status (status.azure.com)** |
| "Recommendations for cost/perf/security/reliability/ops" | **Azure Advisor** |
| "Manage on-prem + AWS resources from Azure" | **Azure Arc** |
| "Discover + plan + migrate servers/DBs to Azure" | **Azure Migrate** |
| "DR + replication-based migration of VMs" | **Azure Site Recovery** |
| "Mail in TB of data to ingest" | **Azure Data Box** |
| "Download Microsoft audit reports" | **Service Trust Portal** |
| "Track our compliance with frameworks" | **Compliance Manager** |

---

## 🚨 Exam Traps & Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "ARM and Bicep are different engines" | They aren't — Bicep compiles to ARM JSON. Same engine. |
| "PowerShell only runs on Windows" | False since PowerShell Core — cross-platform. Az module works on macOS/Linux. |
| "Azure Monitor and Service Health are the same" | No — Monitor watches YOUR workload; Service Health watches AZURE'S platform |
| "Azure Advisor takes action" | No — Advisor only recommends. You take action. |
| "Cloud Shell needs an install" | No — it's browser-based. (But it does need a backing storage account.) |
| "Status.azure.com is personalized" | No — that's the public global page. Personalized = Service Health in the portal. |
| "Azure Arc is for migration" | No — Arc EXTENDS Azure management to non-Azure resources, not migrates them. |

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **Azure Portal** | Browser-based GUI |
| **Azure CLI** | Cross-platform `az` command-line tool |
| **Azure PowerShell** | `Az` module cmdlets in PowerShell |
| **Cloud Shell** | Browser-based shell (Bash or PowerShell) |
| **Azure Mobile App** | iOS/Android Azure management |
| **ARM templates** | JSON declarative IaC for Azure |
| **Bicep** | Cleaner DSL that compiles to ARM |
| **Terraform** | HashiCorp multi-cloud IaC |
| **Azure Monitor** | Your-workload metrics/logs/alerts |
| **Application Insights** | APM (part of Azure Monitor) |
| **Log Analytics / KQL** | Query language for Monitor logs |
| **Azure Service Health** | Personalized Azure platform health |
| **Azure Status** | Public global status page |
| **Azure Advisor** | Personalized recommendations (5 pillars) |
| **Azure Arc** | Extend Azure mgmt to non-Azure resources |
| **Azure Migrate** | Hub for discovering + migrating to Azure |
| **Azure Site Recovery** | DR + replication-based migration of VMs |
| **Data Box** | Physical offline data transfer appliance |
| **Trust Center** | Microsoft security/privacy overview |
| **Service Trust Portal** | Downloadable audit reports |
| **Compliance Manager** | Track org compliance with frameworks |

---

## ✅ Module 6 Summary

You now know:
- 🖱️ The 5 Azure management interfaces (Portal, CLI, PowerShell, Cloud Shell, Mobile App)
- 📜 ARM vs Bicep vs Terraform
- 👀 Azure Monitor vs Service Health vs Status page
- 💡 Azure Advisor's 5 pillars
- 🌐 Azure Arc for non-Azure resources
- 🔄 Migration tools (Migrate, Site Recovery, Data Box)
- 🛡️ Trust Center vs Service Trust Portal vs Compliance Manager

**Next steps:**
1. 🎥 Watch the videos in [`Videos.md`](./Videos.md)
2. ✏️ Take [`Quiz.md`](./Quiz.md)
3. 📋 Print [`Cheat-Sheet.md`](./Cheat-Sheet.md)
4. 🧪 Take [Practice Exam 2](../Practice-Exams/Practice-Exam-2.md) (covers all modules)
5. 🃏 Drill the [Master Flashcards](../Flashcards.md)
6. 🏆 Take the [Final Mock Exam](../Practice-Exams/Final-Mock-Exam.md) one day before the real exam

---

## 📚 Further Reading (Optional)

- 📖 [Microsoft Learn — Azure management tools](https://learn.microsoft.com/training/modules/describe-features-tools-azure-for-governance-compliance/)
- 📖 [Bicep documentation](https://learn.microsoft.com/azure/azure-resource-manager/bicep/)
- 📖 [Azure Monitor overview](https://learn.microsoft.com/azure/azure-monitor/overview)
- 📖 [Azure Service Health](https://learn.microsoft.com/azure/service-health/overview)
- 📖 [Azure Advisor](https://learn.microsoft.com/azure/advisor/advisor-overview)
- 📖 [Azure Arc overview](https://learn.microsoft.com/azure/azure-arc/overview)
- 📖 [Microsoft Service Trust Portal](https://servicetrust.microsoft.com/)
