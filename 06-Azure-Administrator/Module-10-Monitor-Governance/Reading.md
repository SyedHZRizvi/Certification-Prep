# Module 10: Monitor & Governance 📡

> **Why this module matters:** You can't fix what you can't see, and you can't comply with what you can't enforce. Azure Monitor + Log Analytics give you visibility; Policy and Locks keep developers from drifting. The exam tests this domain as a wrap-up, knowing it earns you "easy" points and ties together everything before.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - All preceding modules, this one ties them together. Pay special attention to [Module 1](../Module-01-Subscriptions-Resource-Hierarchy/Reading.md) (Azure Policy basics) and [Module 8](../Module-08-Network-Security/Reading.md) (the security signals you'll alert on).
> - KQL fundamentals: at minimum recognize `where`, `summarize`, `project`, `extend`, `join`. If you've never written KQL, run the *KQL Mastery* tutorial on Microsoft Learn (free, 4 hours).
> - The NIST Cybersecurity Framework 2.0 (NIST, *Cybersecurity Framework 2.0*, February 2024) functions, *Identify, Protect, Detect, Respond, Recover, Govern*. This module is mainly *Detect* and *Govern*.
>
> If you're studying for AZ-104 *and* AZ-500 (Security Engineer), this module is the bridge. Most concepts here re-appear in AZ-500 with deeper Sentinel content.

---

## 🍕 A Story: The Restaurant That Could Hear Itself

Imagine a busy restaurant. The chef can taste each dish, the maitre d' watches the dining room, and the dishwasher hears every clatter in the kitchen. But the *owner* sits in the office. If anything goes wrong a long ticket time, a broken oven, a guest complaint the owner has to walk the floor and ask. Slow, reactive, often too late.

Now imagine the owner mounts a dashboard above her desk: a screen showing ticket times, food temperature alarms, table-turn rates, and a live feed of yelp reviews. Below the dashboard, a single button: "Page the manager on duty if any ticket exceeds 20 minutes." She sips coffee, glances at the screen, intervenes only when needed.

That's **Azure Monitor + Log Analytics + Alerts + Action Groups**. Visibility → automation → focus on the exceptions.

And next to the dashboard, taped to the wall: a one-page rulebook that prevents the kitchen from buying off-spec equipment, ensures every new hire goes through orientation, and locks the safe. That's **Azure Policy + Resource Locks**.

---

## 📡 Azure Monitor, The Umbrella

Azure Monitor is the **single pane of glass** for everything observability. Two main data types:

| Data type | Stored in | Query language |
|-----------|-----------|----------------|
| **Metrics** | Azure Monitor Metrics (TSDB) | Native UI (User Interface) / metric explorer |
| **Logs** | Log Analytics workspace | **KQL** (Kusto Query Language) |

### Architecture (memorize this picture)

```
RESOURCES                       INGESTION             STORAGE                 USE
─────────────                   ───────────           ─────────────────       ─────────
VMs, AKS, App Service           Azure Monitor         Metrics (90-day)        Charts
Storage, DBs, KV                Agent (AMA)           Log Analytics           Alerts
Activity Log                    Diagnostic            workspace (retain        Workbooks
NSG flow logs                   Settings              N days, archive 12y)    App Insights
                                                                              Sentinel
```

### Three "feeds" of data

| Source | What's in it |
|--------|--------------|
| **Activity Log** | Control-plane events (who did what to which resource, like an audit log) |
| **Resource logs (diagnostic settings)** | Data-plane / service-specific logs (e.g. NSG flow logs, storage transactions) |
| **Metrics** | Numeric time-series (CPU %, RPS, etc.) |
| **Custom logs / Tables** | Anything you ship via the agent or REST (Representational State Transfer) API (Application Programming Interface) |

🔥 **MEMORIZE:** Activity Log is automatically captured for 90 days. To **retain longer**, route it via a Diagnostic Setting to a Log Analytics workspace, storage account, or Event Hub.

---

## 📊 Log Analytics Workspace

A workspace is a region-scoped container for log data. Properties to know:

| Property | Detail |
|----------|--------|
| Region | Single region per workspace; data stays there |
| Retention | Interactive 30 days default (4–730 days configurable, longer with Archive) |
| Archive tier | Cheap storage for 12+ years; restore to interactive when needed |
| Pricing tier | Pay-as-you-go vs Commitment tiers (per-GB savings) |
| RBAC (Role-Based Access Control) | Workspace-context vs resource-context permissions |

### Send VM (Virtual Machine) logs to a workspace

```bash
# Install AMA via extension (replaces legacy Log Analytics Agent (MMA), which is retired)
az vm extension set \
    --resource-group rg-app \
    --vm-name vm-app-01 \
    --name AzureMonitorLinuxAgent \
    --publisher Microsoft.Azure.Monitor \
    --enable-auto-upgrade true

# Then create a Data Collection Rule (DCR) describing what to collect + send where
az monitor data-collection rule create \
    --resource-group rg-monitor \
    --name dcr-vm-perf \
    --location eastus \
    --rule-file dcr-perf.json
```

### KQL crash course

```kql
// Top 10 5xx requests in the last hour from AppRequests
AppRequests
| where TimeGenerated > ago(1h)
| where ResultCode startswith "5"
| summarize Count = count() by Url
| top 10 by Count desc

// Average CPU per VM in the last 24h
Perf
| where TimeGenerated > ago(24h)
| where CounterName == "% Processor Time" and ObjectName == "Processor"
| summarize AvgCPU = avg(CounterValue) by Computer
| order by AvgCPU desc

// Failed sign-ins in Entra ID (when SignInLogs are sent here)
SigninLogs
| where TimeGenerated > ago(7d)
| where ResultType != 0
| summarize FailedSignIns = count() by UserPrincipalName
| top 10 by FailedSignIns desc
```

---

## 🚨 Alerts & Action Groups

| Concept | Detail |
|---------|--------|
| **Alert rule** | A query (KQL) or metric threshold + condition + frequency |
| **Signal source** | Metric / Log / Activity Log / Application Insights / Smart detection |
| **Severity** | Sev 0 (critical) → Sev 4 (info) |
| **Action group** | A reusable bundle of notification + automation actions |
| **Action types** | Email, SMS, Voice, Push, Webhook, Logic App, Function, Automation Runbook, Event Hub, ITSM connector |

### Create a CPU > 80% metric alert

```bash
az monitor metrics alert create \
    --name "vm-cpu-high" \
    --resource-group rg-monitor \
    --scopes $(az vm show -g rg-app -n vm-app-01 --query id -o tsv) \
    --condition "avg Percentage CPU > 80" \
    --window-size 5m --evaluation-frequency 1m \
    --severity 2 \
    --action $(az monitor action-group show -g rg-monitor -n ag-ops --query id -o tsv)
```

### Common alert patterns

| Trigger | Why |
|---------|-----|
| Service Health alert: region outage | Page ops team |
| Activity Log: `Delete Resource` for a vault | Detect malicious deletion |
| Metric: VPN (Virtual Private Network) Gateway tunnel down | Connectivity issue |
| Log: SigninLogs ResultType >= 50000 | Auth failure spike |
| Cost alert at 80% of budget | Spend control |

---

## 🩺 Application Insights

A subset of Azure Monitor specifically for application-level telemetry (requests, dependencies, exceptions, custom events, distributed traces).

| Mode | Where to use |
|------|--------------|
| **Workspace-based App Insights** | Modern default, stores in Log Analytics workspace |
| Classic | Legacy standalone |

Auto-instrument options:

- **.NET / Java / Node / Python**: SDK (Software Development Kit) or auto-instrumentation in App Service "Application monitoring"
- **AKS**: enable via the Azure Monitor add-on
- **Browser JS**: small script for client-side telemetry

---

## 🗺️ Workbooks, Dashboards, Insights

| Tool | Use |
|------|-----|
| **Azure Dashboards** | Pinned tiles in the portal, simple |
| **Workbooks** | Parameterized, interactive reports with KQL + visualizations |
| **VM Insights / Container Insights / Network Insights** | Pre-built workbook packs for common workloads |

---

## 🌐 Network Watcher

A toolkit for diagnosing networking issues:

| Tool | Use |
|------|-----|
| **Connection Monitor** | Ongoing latency/connectivity from a VM to a target |
| **IP Flow Verify** | "Why is this packet being dropped?" by which NSG rule |
| **Next Hop** | Show what next-hop applies for a destination from a NIC |
| **Effective Security Rules** | Combined NSG view for a NIC |
| **NSG Flow Logs v2** | Sampled flow records → Storage → Traffic Analytics |
| **Packet Capture** | tcpdump-style capture on a VM |
| **VPN Diagnostics** | Run on a VPN connection |

---

## 📜 Azure Policy (Recap + Deeper)

We touched Policy in Module 1; here's the monitoring/governance angle.

| Feature | Detail |
|---------|--------|
| **Definition** | The rule (`if` condition + `then` effect) |
| **Initiative** | Set of related policies (e.g. NIST 800-53, CIS) |
| **Assignment** | Apply a definition/initiative at a scope (MG/sub/RG) |
| **Effects** | Audit, Deny, Append, Modify, DeployIfNotExists, AuditIfNotExists, Disabled, Manual |
| **Exemption** | Explicit opt-out at a smaller scope |
| **Compliance state** | Compliant / Non-Compliant / Conflict / Exempt |
| **Remediation task** | For `DeployIfNotExists` and `Modify` effects, run a remediation across existing resources |

### Assign a built-in initiative (e.g. Azure Security Benchmark / MCSB)

```bash
az policy set-definition list --query "[?contains(displayName, 'Microsoft cloud security benchmark')]"

az policy assignment create \
    --name "mcsb-assignment" \
    --display-name "Microsoft Cloud Security Benchmark" \
    --policy-set-definition <id-of-MCSB-set> \
    --scope "/providers/Microsoft.Management/managementGroups/landing-zones"
```

### Remediate non-compliant resources

```bash
# Get the policy assignment ID
ASSIGNMENT=$(az policy assignment show -n inherit-cost-tag --query id -o tsv)

az policy remediation create \
    --name remediate-cost-tag \
    --policy-assignment $ASSIGNMENT
```

---

## 🔒 Resource Locks (Recap)

| Lock type | Effect |
|-----------|--------|
| **CanNotDelete** | Can read & modify, can't delete |
| **ReadOnly** | Read only, careful, breaks many ops |

Inherit downward. Only Owner + UAA can create/remove. Apply to subs, RGs, or individual resources.

---

## ⚡ Action Workflow: Detect → Decide → Respond

A typical end-to-end Azure Monitor scenario:

```
[Resource] ──diagnostic setting──► [Log Analytics workspace]
                                          │
                                  [Alert rule (KQL)]
                                          │
                                  [Action Group]
                                          │
            ┌─────────────────┬───────────┴─────────┬─────────────┐
            ▼                 ▼                     ▼             ▼
       Email/SMS         Logic App              Function      Automation Runbook
       to on-call         (Teams msg)           (auto-remediate) (restart VM)
```

---

## 🧪 Task-Sequencing Practice: Build a Compliance + Monitoring Foundation

**Order these steps** to set up monitoring + governance for a new subscription.

1. ✅ Create a **Log Analytics workspace** in the primary region.
2. ✅ Apply **Azure Policy initiatives** (MCSB + custom tag-enforcement) at the management group.
3. ✅ Configure **Diagnostic Settings** on all resources to send to the workspace (use Policy `DeployIfNotExists` to auto-enable).
4. ✅ Enable **Defender for Cloud** to score security posture.
5. ✅ Configure the **Activity Log** export to the workspace.
6. ✅ Define **Action Groups** for: ops on-call, security on-call, and finance (budget alerts).
7. ✅ Create **alert rules** for: critical resource delete, budget breach, sign-in risk, NSG flow anomalies.
8. ✅ Build **Workbooks** for executive dashboards.
9. ✅ Apply **resource locks** (`CanNotDelete`) on prod RGs.

⚠️ Skipping step 3 = silent gaps in logging. Auditors will find them.

---

## 🚨 Common Exam Traps

| Trap | Reality |
|------|---------|
| "Activity Log retains forever" | ❌ 90 days unless you forward elsewhere |
| "Metrics and logs are stored together" | ❌ Different stores (Metrics TSDB vs Log Analytics) |
| "Workspace can be moved easily" | ❌ Region-bound; data doesn't migrate |
| "Application Insights is a separate product" | ❌ Now a subset of Azure Monitor |
| "DeployIfNotExists runs immediately on all resources" | ❌ Needs a remediation task for existing |
| "Resource Locks block reads" | ❌ Even ReadOnly allows reads |
| "Log Analytics Agent (MMA) is current" | ❌ MMA is retired, use Azure Monitor Agent (AMA) |
| "Diagnostic settings can target only Log Analytics" | ❌ Also storage account, Event Hub, partner integration |

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **Azure Monitor** | Umbrella for observability (metrics, logs, alerts, App Insights) |
| **Metrics store** | Time-series store (90-day retention by default) |
| **Log Analytics workspace** | Region-scoped log store, queried with KQL |
| **KQL** | Kusto Query Language |
| **Activity Log** | Control-plane events (audit log), 90-day retention |
| **Diagnostic setting** | Routes resource logs/metrics to a destination |
| **Azure Monitor Agent (AMA)** | Modern agent, replaces MMA/Log Analytics Agent |
| **DCR** | Data Collection Rule, what to collect, where to send |
| **Application Insights** | Application-level telemetry within Azure Monitor |
| **Action Group** | Reusable bundle of alert recipients/actions |
| **Workbook** | Interactive parameterized report |
| **Defender for Cloud** | Posture + workload protection |
| **MCSB** | Microsoft Cloud Security Benchmark, default initiative |
| **Network Watcher** | Network diag toolkit |
| **NSG Flow Logs v2** | Sampled flow records + Traffic Analytics |
| **Policy initiative** | Group of related policies |
| **Remediation task** | Apply `DeployIfNotExists`/`Modify` to existing resources |

---

## ✅ Module 10 Summary

You now know:

- 📡 Azure Monitor architecture: metrics + logs + diagnostic settings + alerts
- 📊 Log Analytics workspace mechanics + KQL basics
- 🚨 Alert rules + action groups + automation
- 🩺 Application Insights for app telemetry
- 🌐 Network Watcher tools (IP Flow Verify, NSG Flow Logs, Connection Monitor)
- 📜 Policy + initiatives + exemptions + remediation
- 🔒 Resource Locks (recap from Module 1)
- ⚠️ The 8 traps of the monitoring/governance domain

**Next steps:**
1. 🎥 Watch the videos in [Videos.md](./Videos.md)
2. ✏️ Take the [Quiz](./Quiz.md)
3. 📋 Review the [Cheat-Sheet](./Cheat-Sheet.md)
4. 🧪 **TAKE [Practice Exam 2](../Practice-Exams/Practice-Exam-2.md)**, you've now covered the full curriculum.
5. 🧪 **THEN [Final Mock Exam](../Practice-Exams/Final-Mock-Exam.md)**, full-length under real exam conditions.
6. 🎓 Schedule the exam!

---

## 📊 Case Study, The CrowdStrike Falcon Outage (July 19, 2024)

**Situation.** At 04:09 UTC on July 19, 2024, CrowdStrike pushed a routine configuration update to its **Falcon Sensor** endpoint-protection product. The update a "Channel File 291" supporting the Inter-Process Communication (IPC) detection engine contained a logic-defect parser that caused the Falcon kernel-mode driver to dereference an invalid memory address on Windows hosts. The Windows kernel responded with a `PAGE_FAULT_IN_NONPAGED_AREA` blue-screen-of-death. Within ~90 minutes, **~8.5 million Windows hosts globally** were stuck in a BSOD-and-reboot loop. Microsoft Azure-hosted Windows VMs that ran Falcon were among the affected, but the impact was substantially broader than Azure, every airline that used Falcon (Delta, United, Frontier), most major hospitals, banks, and government systems went dark for hours-to-days (CrowdStrike post-incident review, *Channel File 291 Incident Root Cause Analysis*, 2024-07-24; *Wall Street Journal*, *CrowdStrike's $5.4 billion outage*, 2024-07-25).

For Azure admins specifically, the relevant facts:

- **Microsoft Defender for Cloud / Sentinel** dashboards lit up red within minutes of the cascade.
- **Azure Monitor metric alerts** on VM uptime fired across affected subscriptions.
- **Azure Service Health** dashboard *did not* show an outage, because Microsoft's infrastructure was fine; the third-party EDR (Endpoint Detection and Response) agent was failing.
- **Azure Policy** had nothing to say about it, there is no policy that prevents a vendor-pushed bad config on an installed agent.

**Decision.** The remediation required physical or near-physical access to each affected machine: boot to Safe Mode, delete the bad Channel File 291 from `C:\Windows\System32\drivers\CrowdStrike\`, reboot. Cloud VMs were *easier* than physical machines because Azure Serial Console, Run Command, and (eventually) a Microsoft Recovery Tool published on July 21 could automate the fix at scale.

What this module's tooling does to detect and respond to incidents like this:

1. **Azure Monitor metric alert** on `VMAvailability` < 100% with a 5-minute window: page on-call within minutes of fleet-wide degradation.
2. **Log Analytics KQL** queries against `Heartbeat` table aggregating by `Computer` and `OperatingSystemName`: identify which VMs are silent in the last 10 minutes, sliceable by tag (`Environment=Prod`, `BusinessUnit=Trading`).
3. **Diagnostic settings** on every VM sending logs to a central workspace so post-incident root-cause is feasible (the BSOD loop prevented agent-based log shipping during the outage, but pre-outage logs still help).
4. **Workbook** "Fleet Health Snapshot", a one-page operational dashboard showing % up, % down, % unreachable, sliced by region and tag. The on-call team uses this as the first 5 seconds of the response.
5. **Action group** triggers an Azure Automation runbook that runs `az vm run-command invoke` to apply the Microsoft-published fix script across hundreds of affected VMs in parallel.

**Outcome.** The outage's direct global cost is estimated at **>$5.4 billion** (insurance broker Parametrix, 2024-08). Delta Air Lines alone reported $550M+ in losses and sued CrowdStrike. CrowdStrike's share price dropped ~30% over the following two weeks. The incident triggered industry-wide reviews of (a) the kernel-mode driver privilege model on Windows Microsoft announced reduced kernel-mode dependencies for security vendors in 2024-09, and (b) the maturity of *organization-wide observability* many affected organizations discovered they did not have a single dashboard showing fleet health, and could not query "how many of my Windows VMs are reachable?" in under an hour.

**Lesson for the exam / for practitioners.** Three AZ-104-tested controls would have shortened your particular response:

1. **A metric alert on VM availability** wired to an action group with both a page (PagerDuty/Teams) and an Azure Automation runbook, the on-call gets called *and* an auto-remediation script starts.
2. **A workbook-based operational dashboard** that doesn't require KQL fluency in the moment, your TOC fills in pre-built parameters and gets answers in seconds.
3. **An updated incident-response runbook** (in the *Govern* layer of NIST CSF 2.0) that names the action group, the workbook, the Run Command playbook, and the Defender for Cloud investigation flow. CrowdStrike's victims who recovered fastest were those whose IR runbooks already contemplated "third-party agent caused all our VMs to BSOD" as a generic incident class.

The exam tests this through alert/policy/workbook configuration questions. Real life tests it by demanding you be able to answer "how many of my VMs are unhealthy right now?" inside of 60 seconds on the worst day of the year.

**Discussion (Socratic).**
- **Q1.** CrowdStrike was a *third-party* failure. Microsoft Service Health reported "all systems operational" because the infrastructure was fine. How does this change the design of your alerting? Defend a posture where you trust your *own* metrics over the cloud provider's status page, when is the inverse the right default?
- **Q2.** Azure Monitor metric alerts are evaluated server-side and don't require an agent on the VM. The CrowdStrike outage broke agent-based logging on millions of hosts. Argue why this distinction matters in your alert design. Build the principled split: which signals must be "agentless" (metrics, Service Health, Activity Log) and which can be agent-based (Log Analytics queries, Application Insights)?
- **Q3.** The cost of running Azure Monitor at "production observability" maturity is non-trivial, Log Analytics data ingestion, App Insights sampling, alert rule evaluations, and Sentinel analytics all bill. Many small organizations underspend on observability and discover the gap during incidents. Construct the business case to an SMB CTO (Chief Technology Officer) for "the right level of Azure Monitor investment is X% of total Azure spend." What number do you defend, and why?

---

> **Where this leads.**
> - Inside this course: this is the closing module. Apply everything in the [Capstone Project](../Capstone-Project.md).
> - Cross-course: [`09-CompTIA-Security-Plus`](../../../09-CompTIA-Security-Plus/) Modules 5 and 6 cover the broader incident-response and security-operations discipline; AZ-500 (Security Engineer) deepens Sentinel and Defender for Cloud; [`08-Azure-AI-Engineer`](../../../08-Azure-AI-Engineer/) ML modules use the same Log Analytics + Application Insights pattern for model-monitoring.
> - Practice: PE (Private Equity)-2 has 7 questions on monitoring/governance; Final Mock revisits with cross-domain scenarios (Activity Log + Defender + Action Groups in one case study).

---

## 💬 Discussion, Socratic prompts

1. **Workspace centralization vs. per-team.** Microsoft documentation supports both "one workspace per Azure subscription" and "one workspace per team/business unit." Defend the centralized model for a 4,000-employee organization, and identify the *one scenario* where decentralized workspaces are still right. (Hint: think about data-sovereignty regulations.)
2. **KQL vs. portal-built alerts.** Portal-built metric alerts are quick; KQL log alerts are flexible but harder to maintain. Argue when each is right. Build a guideline a team can apply ("if X, use metric alert; if Y, use log alert") that minimizes both cost and the false-positive rate.
3. **Defender for Cloud secure-score gaming.** Defender for Cloud gives you a "Secure Score" that's roughly the percentage of best practices you follow. Some teams game the score by exempting findings rather than fixing them. Defend why aggressive exemption is sometimes the right move, and identify the *one* finding class that should *never* be exempted.
4. **Action Group hygiene.** Many tenants accumulate dozens of action groups over years, with overlapping recipients and stale runbooks. Construct an audit plan: how do you discover what's stale, what's misconfigured, and what's missing, without disrupting active alerts?
5. **Policy initiatives, MCSB vs. custom.** Microsoft Cloud Security Benchmark (MCSB) is the default initiative for new tenants. Some compliance regimes (HIPAA HITRUST, FedRAMP High, PCI DSS) require their own initiative. When do you maintain MCSB plus an industry initiative, and when does that double-control become unworkable? What's the principled merge?

---

## 📚 Further Reading (Optional)

- 📖 [Azure Monitor overview](https://learn.microsoft.com/azure/azure-monitor/overview)
- 📖 [Log Analytics workspace](https://learn.microsoft.com/azure/azure-monitor/logs/log-analytics-workspace-overview)
- 📖 [KQL tutorial](https://learn.microsoft.com/azure/data-explorer/kusto/query/tutorial)
- 📖 [Azure Policy effects](https://learn.microsoft.com/azure/governance/policy/concepts/effects)
- 📖 [Network Watcher overview](https://learn.microsoft.com/azure/network-watcher/network-watcher-monitoring-overview)
- 📖 NIST, *Cybersecurity Framework 2.0* (February 2024), the *Detect* and *Govern* functions guide observability priorities.
- 📖 *CrowdStrike Channel File 291 Incident Root Cause Analysis* (CrowdStrike, July 2024; updated August 2024), the canonical post-incident write-up.
- 📖 Mark Russinovich, *Inside Windows Debugging* (Microsoft Press), context for kernel-mode driver failures that observability tools must detect.
