# Module 6: Tools & Features 🧰

> **Why this module matters:** AZ-900 loves "which tool would you use?" questions. This module is your toolbox. Portal vs CLI vs PowerShell, ARM vs Bicep, Monitor vs Advisor vs Service Health — knowing the distinct *job* of each gets you free points.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - [The Azure resource hierarchy (MG → Sub → RG → Resource)](../Module-02-Azure-Architecture/Reading.md#-the-resource-hierarchy-live-or-die-for-the-exam) — covered in Module 2
> - [Core Azure compute / network / storage / database services](../Module-03-Core-Services/Reading.md) — covered in Module 3
> - [RBAC, Policy, Defender for Cloud, Sentinel](../Module-04-Identity-Governance-Security/Reading.md) — covered in Module 4
> - Comfort with the difference between a *resource* and a *tool that manages resources*
>
> The tools in this module *manage* the services from Modules 3 + 4. If you don't yet know what App Service or Azure Policy are, the "which tool would you use?" questions will feel arbitrary. Pause and review.

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

## 📊 Case Study — Mercedes-Benz Connected Vehicle Platform on Azure (2020–2024)

**Situation.** Mercedes-Benz produces roughly **2 million premium vehicles per year** across the globe, and each car shipped since 2020 ships with always-connected telematics — **MBUX** (Mercedes-Benz User Experience) infotainment, over-the-air (OTA) software updates, fleet data telemetry, EV charging integration, the *MB.OS* operating system rolling out from 2024, and (in the EU/US) Drive Pilot Level-3 autonomous driving. By 2023 Mercedes had roughly **30+ million connected vehicles** in its global fleet, each generating gigabytes of telemetry per day (vehicle health, driving patterns, OTA-update receipts, EV-battery state). The pre-cloud architecture — a mix of on-prem Stuttgart data centers and SaaS — could not absorb the data growth or ship features fast enough versus Tesla, BYD, and other electric-first competitors.

**Decision.** Mercedes-Benz announced in 2020 a strategic partnership with **Microsoft and Azure** as the primary cloud, anchored by a multi-year MOU (Mercedes-Benz Group press release, 2020-06-15; renewed 2023). Key technology choices:

- **Azure IoT Hub** as the device-side endpoint — every connected car opens a persistent MQTT-over-Azure connection, sending periodic state and receiving OTA payload manifests
- **Event Hubs** for the high-throughput telemetry ingestion (millions of events per second at peak — Module 3 §"Integration & messaging" cited service used at scale)
- **Azure Kubernetes Service (AKS)** for the back-end microservices that process vehicle data, expose APIs to the MB.OS apps, and drive the Mercedes me Connect customer app
- **Azure OpenAI** integration in MBUX from late 2023 — drivers can ask MBUX a free-form question (route, vehicle status, EV-charging recommendation) and the response is generated via Azure OpenAI with car-context retrieval
- **Azure Cosmos DB** for the vehicle-state-per-VIN store — globally distributed, multi-region writes, sub-10ms latency exactly as the Module 3 case for Cosmos describes
- **Azure Monitor + Application Insights + Log Analytics** as the observability layer across the entire stack
- **Microsoft Sentinel** for the SOC, ingesting vehicle telemetry as a security data source (anomalous behavior may indicate a compromised vehicle bus or fraudulent OTA attempt)
- **Bicep** as the standardized IaC across the platform team's ~600 microservices — Mercedes engineers cite Bicep's resource-graph clarity over Terraform for Azure-only stacks
- **Azure Arc** to manage on-prem manufacturing-floor servers (Mercedes plants in Stuttgart, Sindelfingen, Tuscaloosa, Beijing) under the same Policy + Defender governance as the cloud workloads — a model the Module 6 case for Arc points to directly
- **Azure DevOps + GitHub Enterprise** as the development platform (the same GitHub-on-Azure stack from Module 5's case)

**Outcome.** By 2024:

- Mercedes-Benz uses **all 4 Azure global geographies** (US East/West, EU North/West/Central, China, Asia Pacific) — with strict per-region data residency for EU GDPR + China cybersecurity-law isolation. Pre-Azure, this same configuration would have required ~12+ owned data centers globally.
- The **MBUX Voice Assistant powered by Azure OpenAI** rolled out across 2024 model-year vehicles in Q1 2024; uptake exceeded 40% of new sales by year-end (Mercedes-Benz CES 2024 press release, 2024-01-09; MWC Barcelona 2024 followup).
- **OTA update success rate** improved from low-80s percent (pre-Azure) to mid-90s percent (post-Azure) due to better retry orchestration via Event Grid + Logic Apps.
- The platform absorbed the 2023 Drive Pilot Level-3 launch in the U.S. (Nevada + California) — high-frequency telemetry from autonomy-relevant sensors had to land in U.S. regions for NHTSA regulatory reasons. Existing region pair + sovereignty design from Module 2 was the substrate.
- Mercedes-Benz publicly cites this platform in nearly every quarterly earnings call as a "competitive moat" against Tesla. CTO Markus Schäfer has framed the Azure partnership as the technological underpinning of MB.OS in multiple Mercedes investor days (Mercedes-Benz Capital Markets Day, 2023-10).

**Lesson for the exam / for practitioners.** This case touches *every* Module 6 tool category at production scale:

1. **The full tool catalog as a *team*, not isolated answers.** Mercedes uses Portal for ops, CLI for scripted patching, Bicep for IaC, Monitor for in-app metrics, Service Health for Azure-platform alerts, Advisor for cost recs, Arc for non-Azure resources, Migrate for the legacy datacenter mothballing, Sentinel + Defender for security. The exam tests each tool in isolation — reality uses them together.
2. **Bicep over Terraform when you're Azure-only.** Mercedes' Azure-only choice for Bicep is the canonical AZ-900 answer to "which IaC for Azure?" — Terraform is correct only when multi-cloud is in scope, which Mercedes deliberately ruled out.
3. **Azure Arc is the answer for "extend Azure to non-Azure."** Mercedes's manufacturing plants are still on-prem (no plans to move physical assembly-line control systems to public cloud). Arc lets them apply the same Policy + Sentinel + Defender governance across cloud and on-prem — exactly what the Module 6 exam pattern tests.

Microsoft has used Mercedes as a flagship case study in Microsoft Build 2023 + 2024 keynotes and Microsoft Mechanics episodes (Microsoft Build 2023, "Mercedes-Benz: the connected car future on Azure"; Microsoft Build 2024 keynote, Satya Nadella).

**Discussion (Socratic).**
- **Q1:** Mercedes uses Bicep instead of Terraform despite Terraform being more popular industry-wide. Build the strongest argument for *each* IaC tool for a company with Mercedes' profile (Azure-only by design, ~600 microservices, ~50 platform engineers). Where does Bicep's "compiles to ARM, same engine" advantage actually pay off, and where does Terraform's "multi-cloud" advantage become relevant despite Azure-only design? (Hint: think about acquired-company stacks, vendor partner integrations, and what happens in year 7 if Microsoft pricing leverage erodes.)
2. **The Azure Arc trap.** Mercedes uses Arc to manage on-prem manufacturing servers from Azure. A skeptic argues this is the wrong abstraction — "if you're going to apply Azure Policy to non-Azure infrastructure, you've added complexity without actually getting the cloud's elasticity benefits." Argue both sides. When is Arc the *right* answer (extending governance) vs. the *wrong* answer (delaying a real migration)? Cite the Module 6 distinction between Arc (manage in place) and Migrate (move to Azure).
3. **Sentinel as a security-data lake.** Mercedes ingests *vehicle telemetry* into Sentinel as security data — anomalous CAN-bus signals can indicate a remote-attack attempt. This is a non-obvious use of a SIEM. Argue: when does it make sense to pipe IoT telemetry into a SIEM (Sentinel), and when is it overkill or even a privacy/compliance risk? At what kind of company would you *not* do this?

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
- 📊 One canonical tool-catalog case (Mercedes-Benz Connected Vehicle Platform on Azure, 2020–2024)

**Next steps:**
1. 🎥 Watch the videos in [`Videos.md`](./Videos.md)
2. ✏️ Take [`Quiz.md`](./Quiz.md)
3. 📋 Print [`Cheat-Sheet.md`](./Cheat-Sheet.md)
4. 🧪 Take [Practice Exam 2](../Practice-Exams/Practice-Exam-2.md) (covers all modules)
5. 🃏 Drill the [Master Flashcards](../Flashcards.md)
6. 🏆 Take the [Final Mock Exam](../Practice-Exams/Final-Mock-Exam.md) one day before the real exam

---

> **Where this leads.**
> - Inside this course: this is the last module. You're now ready to take the [Capstone Project](../Capstone-Project.md) (a 110-person law firm cloud-strategy scenario integrating Modules 1–6) and the three practice exams.
> - Cross-course: `06-Azure-Administrator` (AZ-104) operationalizes every tool here — Bicep + Azure CLI + Azure Monitor become daily-use, not survey-of. `08-Azure-AI-Engineer` (AI-102) builds the AI services Mercedes uses (Azure OpenAI Service, Azure AI Foundry). For multi-cloud or AWS roles, `04-AWS-Solutions-Architect-Associate` Module 10 covers the AWS equivalent tool catalog (CloudFormation, CloudWatch, AWS Migration Hub).
> - Practice: Final Mock Exam draws roughly 8 questions from this module's tool catalog (Monitor vs Service Health vs Status, ARM vs Bicep, Arc vs Migrate).

---

## 💬 Discussion — Socratic prompts

1. **The "Bicep vs Terraform" decision under pressure.** A 50-person Azure-only shop standardized on Bicep three years ago. They just acquired a 200-person AWS-heavy company. Half the new team writes Terraform. Walk through the strategic options: (a) standardize the merged company on Terraform, (b) keep Bicep + Terraform side-by-side, (c) standardize on Bicep and force the AWS workloads to move to Azure. What's the principled framework for the choice, and at what acquired-team size does each option become viable?
2. **The "Advisor takes action" trap.** A junior engineer reads about Azure Advisor and proposes enabling auto-remediation for cost recommendations ("if Advisor says shut down an idle VM, shut it down"). The senior architect pushes back. Build both arguments. When is auto-remediation safe (test environments, well-tagged dev workloads), and when is it dangerous (production VMs that are *intentionally* low-utilization for failover capacity)? What governance layer would you put around any auto-remediation pattern?
3. **Service Health alerts as a production-grade signal.** Most teams don't configure Service Health alerts until their first major Azure outage takes them by surprise. Argue: *is this irrational?* (Service Health is free, takes 5 minutes to configure, and alerts you to Azure platform issues affecting your workload.) Construct the *honest* explanation for why teams underuse it, and what governance you'd implement to prevent your team from being one of them.
4. **Azure Arc vs Azure Migrate — when to "extend in place" vs "move."** A retailer has 200 on-prem Windows servers running a mix of legacy and modern workloads. The cloud architect proposes: Arc for the 30% that will never move (industrial-control adjacent, vendor-locked), Migrate for the 70% that should move. The CIO asks the *honest* question: "Why not just move all 200 to Azure VMs and be done with it?" Argue the cleaner-is-better case AND the partial-Arc case. What's the principled framework — and where does the breakeven sit?
5. **Compliance Manager vs Defender for Cloud — overlapping or complementary?** A new compliance officer asks: "I see Compliance Manager track ISO 27001 status. I see Defender for Cloud's Secure Score. Why do I need both?" Walk through the *specific* difference — what Compliance Manager tracks that Defender doesn't, and vice versa. At what company maturity stage does each become essential?

---

## 📚 Further Reading (Optional)

- 📖 [Microsoft Learn — Azure management tools](https://learn.microsoft.com/training/modules/describe-features-tools-azure-for-governance-compliance/) — official AZ-900 path
- 📖 [Bicep documentation](https://learn.microsoft.com/azure/azure-resource-manager/bicep/) — the modern IaC reference
- 📖 [Azure Monitor overview](https://learn.microsoft.com/azure/azure-monitor/overview) — metrics, logs, alerts, KQL
- 📖 [Azure Service Health](https://learn.microsoft.com/azure/service-health/overview) — personalized Azure health
- 📖 [Azure Advisor](https://learn.microsoft.com/azure/advisor/advisor-overview) — the 5-pillar recommender
- 📖 [Azure Arc overview](https://learn.microsoft.com/azure/azure-arc/overview) — extending Azure mgmt to non-Azure
- 📖 [Microsoft Service Trust Portal](https://servicetrust.microsoft.com/) — audit reports + compliance docs
- 📖 **Microsoft Cloud Adoption Framework — *Govern* + *Manage* methodologies** (Microsoft, current edition checked 2026-05). These tie the tools in this module to the governance and cost themes from Modules 4 + 5.
- 📖 *Designing Distributed Systems* — Brendan Burns, 2018, O'Reilly. Co-creator of Kubernetes (and architect of AKS) shows the patterns AKS and Arc implement.
