# Module 7: Azure Monitor & Hybrid Monitoring 📈

> **Why this module matters:** "You can't fix what you can't see" is the entire premise of monitoring, and Azure Monitor is now the unified telemetry plane for Azure VMs, Arc-enabled servers, on-prem services, and even SaaS like Microsoft 365. On AZ-801 expect 15% of the marks on this domain alone: Data Collection Rules, the AMA migration, KQL, alert types, and Workbooks. The exam loves "given these telemetry needs, design the DCR + workspace + alert combination."

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - Azure resource hierarchy (subscriptions, RGs), [`06-Azure-Administrator` Module 1](../../06-Azure-Administrator/Module-01-Subscriptions-Resource-Hierarchy/Reading.md)
> - Azure Arc fundamentals, [Module 6](../Module-06-Azure-Arc/Reading.md)
> - Basic SQL / data-query syntax (helps with KQL)
> - Windows Performance Counters and Event Log concepts
>
> If those are shaky, pause and review. This module assumes you know what "% Processor Time" looks like in Perfmon and what an Event Viewer EventID is.

---

## 🔍 A Story: The Black Box That Cost $4M

It's Q3 2024 at a regional bank. The mainframe-to-Windows-Server migration project 18 months, $4M went live on Saturday. Tuesday morning, customer-facing online banking is intermittently slow. Some users see 3-second page loads; some see 30-second timeouts. The new architecture is a Windows Server farm running IIS + Always-On AG SQL Server + Azure Front Door.

The legacy team comes back from retirement to consult. They open their old mainframe console: every metric is named, every log line is grep-friendly, three decades of muscle memory point to "check the I/O channel queue depth." But the new Windows farm? *"We have Sysmon on some servers. Other servers have the System Center Operations Manager (SCOM) agent. The web team uses Application Insights but only for the .NET app. Nobody centralized any of it."*

For two weeks, the post-mortem team plays detective across half a dozen tools, manually correlating timestamps. By Week 3 they find it: a single underlying disk on one SQL Always-On replica is throwing intermittent latency spikes, causing AG synchronization to stall, causing connection-string failover, causing a 30-second timeout to the client. **If the team had had AMA + a DCR shipping every server's disk-latency counter to one Log Analytics workspace, with a single KQL alert on the 95th-percentile latency, they would have found it in 90 seconds.**

That's the entire point of this module. The exam tests *how* to build the monitoring plane that prevents two-week postmortems.

---

## 🎯 Azure Monitor Architecture

Azure Monitor is the umbrella term for Microsoft's monitoring services. It sits on top of two data stores:

```
                ┌─────────────────────────────────────────┐
                │           AZURE MONITOR                 │
                │  (Workbooks · Alerts · Insights · Maps) │
                └─────────────────────────────────────────┘
                          │                       │
                          ▼                       ▼
                ┌────────────────────┐  ┌──────────────────────┐
                │  METRICS DB        │  │   LOG ANALYTICS      │
                │  (time-series,     │  │  (KQL-queryable,     │
                │   1-min res,       │  │   30-day default     │
                │   93 days retain)  │  │   retention)         │
                └────────────────────┘  └──────────────────────┘
                          ▲                       ▲
                          │                       │
                          │                       │
                ┌─────────┴───────────────────────┴─────────┐
                │   AZURE MONITOR AGENT (AMA) + DCRs        │
                │   (collects perf, events, syslog, custom) │
                └───────────────────────────────────────────┘
                          │
                ┌─────────┴───────────────────────────┐
                │  Azure VMs · Arc machines · IoT     │
                └─────────────────────────────────────┘
```

---

## 🤖 Azure Monitor Agent (AMA), Replaces Legacy MMA

In August 2024, Microsoft **retired** the legacy **Log Analytics agent (MMA / OMS)** for Windows. AMA is the replacement.

| | **Legacy MMA / OMS** (retired Aug 2024) | **AMA** (current) |
|---|----------------------------------------|-------------------|
| Configuration | Per-workspace (each agent → one or more workspaces) | **Data Collection Rules (DCRs)** centralized in Azure |
| Multi-homing | Yes (up to 4 workspaces) | Yes (via multiple DCR associations) |
| Linux + Windows | Yes | Yes |
| Solutions | Tied to legacy workspace Solutions concept | Decoupled, DCRs ship to any destination |
| Performance counter format | Fixed | Highly configurable |
| Containers / K8s | Container Insights had its own agent | Container Insights now uses AMA |
| Status | **Retired**, must migrate by now | **Required** going forward |

### Deploy AMA on Arc machines (the standard pattern)

```bash
# Via Azure Policy, applies to all matching machines in the scope
az policy assignment create \
    --name "deploy-ama-arc-windows" \
    --policy "/providers/Microsoft.Authorization/policyDefinitions/<def-id-for-AMA-on-Arc>" \
    --scope "/subscriptions/<sub-id>/resourceGroups/rg-arc-servers" \
    --mi-system-assigned \
    --identity-scope "/subscriptions/<sub-id>" \
    --location eastus

# Then create a remediation task for existing machines
az policy remediation create \
    --name "remediate-ama-deploy" \
    --policy-assignment "deploy-ama-arc-windows" \
    --resource-discovery-mode ReEvaluateCompliance
```

---

## 📜 Data Collection Rules (DCRs)

A DCR is the **JSON contract** that says *what* to collect and *where* to ship it. AMA evaluates one or more DCR associations and acts accordingly.

```jsonc
{
  "dataSources": {
    "performanceCounters": [{
      "name": "PerfCountersWindows",
      "streams": ["Microsoft-Perf"],
      "samplingFrequencyInSeconds": 60,
      "counterSpecifiers": [
        "\\Processor(_Total)\\% Processor Time",
        "\\Memory\\Available MBytes",
        "\\LogicalDisk(_Total)\\Disk Reads/sec",
        "\\LogicalDisk(_Total)\\Disk Writes/sec",
        "\\Network Interface(*)\\Bytes Total/sec"
      ]
    }],
    "windowsEventLogs": [{
      "name": "WindowsEvents",
      "streams": ["Microsoft-WindowsEvent"],
      "xPathQueries": [
        "Security!*[System[(EventID=4624 or EventID=4625 or EventID=4720 or EventID=4732)]]",
        "System!*[System[Level=1 or Level=2 or Level=3]]",
        "Application!*[System[Provider[@Name='MSExchange ADAccess']]]"
      ]
    }]
  },
  "destinations": {
    "logAnalytics": [{
      "name": "destinationLogAnalytics",
      "workspaceResourceId": "/subscriptions/.../workspaces/law-prod"
    }]
  },
  "dataFlows": [{
    "streams": ["Microsoft-Perf", "Microsoft-WindowsEvent"],
    "destinations": ["destinationLogAnalytics"]
  }]
}
```

### Deploy a DCR + association

```bash
# Create the DCR
az monitor data-collection rule create \
    --name "dcr-windows-baseline" \
    --resource-group "rg-monitoring" \
    --location "eastus" \
    --rule-file dcr.json

# Associate with each machine (or use Azure Policy for at-scale)
az monitor data-collection rule association create \
    --name "dcr-assoc-srv01" \
    --resource "/subscriptions/.../Microsoft.HybridCompute/machines/SRV01" \
    --rule-id "/subscriptions/.../dataCollectionRules/dcr-windows-baseline"
```

🔥 **DCR reuse pattern:** Create one DCR per *workload archetype* (web server, SQL, DC, file server) and assign it via Policy targeting matched tag values.

---

## 🏢 Log Analytics Workspace

The Log Analytics workspace is an Azure resource that stores logs and answers KQL queries.

| Property | Detail |
|----------|--------|
| Pricing tier | **Pay-as-you-go** (per GB) or **Commitment Tiers** (100 GB/200/...,/5000 GB/day, discount) |
| Default retention | **30 days** (free) for interactive |
| Max retention | **730 days** for interactive; up to **12 years** in Archive tier |
| Data plans (2024+) | **Analytics** (full KQL), **Basic** (cheaper, limited KQL), **Auxiliary** (ingestion-only, eDiscovery) |
| Cross-workspace queries | Yes, `workspace("law-other").Perf` |
| Sentinel | Adds SIEM capability to the workspace |
| Defender | Optional 500 MB/node/day free with Defender for Servers P2 |

### Workspace design

| Pattern | When |
|---------|------|
| **Single global workspace** | Single team owns ops; max data locality |
| **Per-region workspace** | Data sovereignty (EU vs US data must stay regional) |
| **Per-business-unit workspace** | RBAC isolation per BU |
| **Hub-and-spoke** | Operational telemetry centralized; security in a Sentinel-protected workspace |

🚨 **Trap:** Cross-workspace KQL queries are billed against the **queried** workspace, not the executing user's workspace. Plan tier accordingly.

---

## 🔤 KQL Basics (Memorize the Top 10 Operators)

KQL (Kusto Query Language) is SQL-like but pipe-based.

```kql
// Top 10 KQL operators you must know
Perf
| where ObjectName == "Processor" and CounterName == "% Processor Time"
| where TimeGenerated > ago(1h)
| summarize avg(CounterValue) by Computer, bin(TimeGenerated, 5m)
| where avg_CounterValue > 80
| order by TimeGenerated desc
| project Computer, TimeGenerated, avg_CounterValue
| take 100
```

| Operator | Purpose |
|----------|---------|
| `where` | Filter rows |
| `project` / `project-away` | Select / exclude columns |
| `extend` | Add a computed column |
| `summarize` | Aggregate (avg, count, percentile, ...) |
| `top` / `take` | Limit rows |
| `order by` / `sort` | Sort |
| `join` | Combine tables (inner, leftouter, etc.) |
| `union` | Combine results vertically |
| `render` | Visualize (timechart, piechart, ...) |
| `let` | Define a variable / sub-query |
| `parse` | Parse strings into columns |
| `bin()` | Time bucket helper for `summarize` |

### Common patterns

```kql
// Top 10 noisy events in last 24 hours
Event
| where TimeGenerated > ago(24h)
| summarize Count = count() by Computer, EventID, EventLog
| top 10 by Count

// Find machines with disk free < 10%
Perf
| where ObjectName == "LogicalDisk" and CounterName == "% Free Space"
| where InstanceName != "_Total"
| where TimeGenerated > ago(15m)
| summarize PercentFree = avg(CounterValue) by Computer, InstanceName
| where PercentFree < 10
| order by PercentFree asc

// Cross-table join: high CPU events correlated with errors
let high_cpu_machines =
    Perf
    | where ObjectName == "Processor" and CounterName == "% Processor Time"
    | where CounterValue > 90
    | summarize by Computer;
Event
| where TimeGenerated > ago(1h) and EventLevelName == "Error"
| where Computer in (high_cpu_machines)
```

---

## 📊 VM Insights

VM Insights is a turnkey Azure Monitor solution for VMs / Arc machines. Enable it on a workspace and it ships:

| What it shows | How |
|---------------|-----|
| Performance trends | CPU / RAM / disk / network per machine, side-by-side |
| **Dependency map** | Process-to-process connections (where TCP traffic flows) |
| Performance Analysis | Top consumers, find the noisy neighbors |
| Health view | Aggregated status across the fleet |
| Inventory | Processes, software, services per VM |

Under the hood: AMA + a **VM Insights DCR** + the Dependency Agent (small extension that maps process connections).

```bash
# Enable VM Insights via Azure Policy on a sub
az policy assignment create \
    --name "enable-vminsights" \
    --policy "/providers/Microsoft.Authorization/policyDefinitions/<vminsights-def-id>" \
    --scope "/subscriptions/<sub-id>"
```

---

## 📚 Azure Workbooks

Workbooks are interactive dashboards combining text, queries, charts, and parameters. Authored in the portal, saved to a workspace or shared template.

### Common workbook patterns

| Pattern | Use |
|---------|-----|
| Single-machine health | All counters for one VM in one view |
| Multi-machine compare | Same counter across many machines |
| KQL-driven heat map | `summarize | render barchart` style |
| Capacity planning | Trend lines + projection |
| Custom incident triage | Click-through from alert |

### Quick workbook structure

A workbook is a JSON document containing:

- **Text** (markdown)
- **Query** (KQL → table or chart)
- **Parameters** (dropdowns / time pickers)
- **Group** / **Tab** for organization

🎯 **Microsoft maintains a curated workbook gallery** in the portal, most common ops scenarios (VM perf, AD health, network telemetry) have a ready-made workbook.

---

## 🚨 Azure Monitor Alerts

Azure Monitor supports **three alert types**:

| Type | Evaluates | Frequency | Best for |
|------|-----------|-----------|----------|
| **Metric alert** | Platform / custom metrics | **Near-real-time** (1 min) | Threshold breaches like CPU >90% |
| **Log alert** | KQL query result | **5 min default** (scheduled) | Complex correlations across tables |
| **Activity log alert** | Subscription-level activity events | Event-driven | Resource created/deleted, RBAC changes, etc. |

### Create a metric alert (PowerShell)

```powershell
# Action group, where the alert routes (email, SMS, webhook, logic app, etc.)
$ag = New-AzActionGroup -Name "ops-pager" -ResourceGroupName "rg-monitoring" `
    -ShortName "ops" `
    -EmailReceiver (New-AzActionGroupReceiver -Name "ops" -EmailAddress "ops@contoso.com")

# Alert rule, CPU > 90% over 5 min on this VM
$criteria = New-AzMetricAlertRuleV2Criteria -MetricName "Percentage CPU" `
    -TimeAggregation Average -Operator GreaterThan -Threshold 90

Add-AzMetricAlertRuleV2 -Name "cpu-high-srv01" `
    -ResourceGroupName "rg-monitoring" `
    -WindowSize "00:05:00" `
    -Frequency "00:01:00" `
    -TargetResourceId "/subscriptions/.../virtualMachines/SRV01" `
    -Condition $criteria `
    -ActionGroupId $ag.Id `
    -Severity 2
```

### Action groups

Action groups define what *happens* when an alert fires:
| Action | Use |
|--------|-----|
| Email / SMS / Push | Human notification |
| Voice call | Critical paging |
| Webhook | Custom integration |
| Logic App | Workflow automation |
| Azure Function | Serverless remediation |
| Azure Automation runbook | Scripted remediation |
| Event Hub | Stream to SIEM |
| ITSM | ServiceNow / Cherwell incident creation |

🔥 **Auto-remediation pattern:** Alert → Action Group → Azure Automation runbook → restart service / scale out / page the on-call team only if scripted fix fails.

---

## 📡 Distributed Tracing & Application Insights

Application Insights is the **app-level** telemetry (covered more in dev-focused certs). For AZ-801, know:

- Application Insights instruments .NET, Java, Node, Python apps
- Sends to a Log Analytics workspace (since 2023, they merged)
- Provides Application Map (dependencies), failure trees, live metrics

---

## 🧪 Task-Sequencing Practice: Monitor 200 Arc-Enabled Servers with One Workspace + DCR + Alerts

**Scenario:** 200 Arc-enabled Windows Servers across 4 sites. Need: AMA + perf counters (CPU/disk/memory) + Windows Security event log (4624, 4625, 4720, 4732) + a critical alert when CPU > 90% for 10 min.

**Order these steps:**

1. ✅ Create a **single Log Analytics workspace** `law-arc-prod` in EastUS, with Commitment Tier 100 GB/day
2. ✅ Create a **DCR** `dcr-windows-baseline` collecting the required perf counters + event logs, with destination = `law-arc-prod`
3. ✅ Use **Azure Policy** to associate `dcr-windows-baseline` with all Arc machines (DINE effect): "Configure Windows machines to be associated with a Data Collection Rule"
4. ✅ Trigger the **remediation task** for the policy assignment
5. ✅ Verify in `law-arc-prod` Workspace → Logs: run `Heartbeat | summarize count() by Computer` → expect 200 rows
6. ✅ Author KQL query for CPU alert:
   ```kql
   Perf
   | where ObjectName == "Processor" and CounterName == "% Processor Time" and InstanceName == "_Total"
   | where TimeGenerated > ago(10m)
   | summarize avg(CounterValue) by Computer
   | where avg_CounterValue > 90
   ```
7. ✅ Create a **Log alert** with that query, evaluation frequency 5 min, threshold "result count > 0," severity 2
8. ✅ Create an **Action Group** `ag-ops-prod` with email to ops + webhook to PagerDuty
9. ✅ Tie the alert to the action group

⚠️ Skipping step 4 (remediation task) is the #1 mistake, DINE applies forward-only; existing machines stay non-compliant without a remediation run.

---

## 📊 Case Study, The 2019 Capital One Breach and the Role of Cloud Audit Logging

**Situation.** In July 2019, a former AWS engineer exploited a misconfigured Web Application Firewall on Capital One's customer-facing servers to extract data on ~106 million credit card applicants in the US and Canada (Capital One Disclosure, July 29 2019; US v. Thompson, criminal complaint No. 19-MJ-344, July 29 2019). The attacker used a Server-Side Request Forgery (SSRF) attack to extract temporary AWS IAM credentials from the EC2 Instance Metadata Service, then used those credentials to list and download S3 buckets containing the customer data including SSNs, bank account numbers, and applicant addresses. The attacker bragged about it on Slack and GitHub before being arrested, but Capital One's investigation later confirmed that **the entire attack lifecycle was visible in AWS CloudTrail and VPC Flow Logs** Capital One simply hadn't ingested those logs into a correlation engine.

**Decision.** Capital One's published incident response (testimony before the US Senate Banking Committee, October 17 2019) committed to:

1. **Centralize all cloud audit logs into a single SIEM workspace** (in their case, Splunk Cloud) with 365+ day retention.
2. **Use Azure Sentinel / Splunk / Chronicle to correlate logs** across compute, storage, identity, network, looking for cross-source patterns the human eye misses.
3. **KQL-style real-time hunting queries** for known TTPs (in their case, Splunk SPL; the Azure equivalent is KQL hunting queries).
4. **VM Insights / dependency maps** to catch unexpected process-to-process flows.
5. **Action Groups with webhook to PagerDuty** for security-relevant alerts (not just ops alerts).

**Outcome.** Capital One paid an **$80M** fine to the Office of the Comptroller of the Currency in August 2020 and a **$190M settlement** in class-action lawsuits in December 2021. The reputational damage and direct loss-recovery costs were estimated at $300M+. Most importantly, the breach reshaped how the financial-services industry approaches cloud telemetry, moving from "log what's cheap to keep" to "log everything that touches PII, with 365-day retention minimum."

**Lesson for the exam / for practitioners.** AZ-801 will not name Capital One, but it will test:

- *AMA + DCR design*, collect the right Windows Security events (4624 logon, 4625 failed logon, 4720 user creation, 4732 group membership change)
- *Log Analytics workspace retention*, choose Analytics (full KQL) vs Basic (cheaper) vs Auxiliary (eDiscovery) tier intentionally
- *KQL hunting queries*, write KQL to detect "credential dumping" or "lateral movement" patterns
- *Action Group routing*, security alerts go to a security team's pager, not the ops queue
- *Sentinel integration*, Sentinel sits atop a Log Analytics workspace and adds SIEM-grade correlation, hunting books, MITRE ATT&CK mapping

The exam will phrase this as: *"A SOC wants to detect when a non-admin user is added to the Domain Admins group across any of 500 Arc-enabled DCs. What's the minimum architecture?"* → **AMA + DCR collecting Security 4732 events + Log Analytics workspace + Scheduled query rule alert on `Event | where EventID == 4732 and TargetGroupName has "Domain Admins"`** → action group to security team.

**Discussion (Socratic).**
- **Q1.** Capital One had CloudTrail logs that would have shown the attack within hours. They simply weren't being analyzed. Build the case for **Sentinel-as-a-managed-detection-platform** vs a hand-rolled "we'll write our own KQL alerts" approach for a 5,000-employee bank. What's the operational cost of Sentinel vs the cost of a missed alert?
- **Q2.** Log Analytics retention defaults to 30 days. For PII-handling workloads, 365+ days is the realistic minimum. Architect the cost model: pay-as-you-go vs commitment tier vs basic-logs-with-archive vs Auxiliary tier. For a 100 GB/day ingestion rate, what's the monthly cost difference?
- **Q3.** VM Insights provides a process-to-process dependency map. Defend the case that this is a *security* feature (detecting unexpected lateral connections) as much as an *operations* feature. What KQL query would alert on a new TCP flow between two servers that have never previously communicated?

---

## 🚨 Common Exam Traps

| Trap | Reality |
|------|---------|
| "Use MMA for new deployments" | ❌ MMA was retired August 2024; AMA is required |
| "Each machine needs its own DCR" | ❌ One DCR can be associated with many machines; reuse by workload archetype |
| "Log Analytics retention defaults to 90 days" | ❌ 30 days default; up to 730 days interactive |
| "Metric alerts can do complex multi-table joins" | ❌ Use log alerts (KQL) for joins |
| "Activity log alerts work on data plane events" | ❌ Only on control plane (ARM operations) |
| "VM Insights needs SCOM" | ❌ Fully Azure-native, AMA-driven |
| "Sentinel is a separate workspace" | ❌ Sentinel runs on top of a Log Analytics workspace |
| "Cross-workspace queries are free" | ❌ Billed against the queried workspace |
| "Application Insights still uses its own data store" | ❌ Since 2023, it stores in a Log Analytics workspace |
| "Auxiliary tier supports full KQL" | ❌ Auxiliary is ingestion-only, eDiscovery / forensic recall scenarios |

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **AMA** | Azure Monitor Agent (replaces MMA, retired Aug 2024) |
| **MMA / OMS / Log Analytics agent** | Retired Aug 2024 |
| **DCR** | Data Collection Rule, what + where to ship |
| **DCRA** | Data Collection Rule Association, links DCR to a resource |
| **Log Analytics workspace** | The KQL data store |
| **KQL** | Kusto Query Language |
| **Heartbeat table** | The "is the agent alive" table |
| **Perf / Event / Syslog / Container tables** | Standard streams |
| **VM Insights** | Turnkey AMA + DCR + Dependency Agent solution |
| **Workbook** | Interactive dashboard combining KQL + text + viz |
| **Action group** | Routes alert to notification / automation |
| **Sentinel** | SIEM on top of Log Analytics |
| **Commitment Tier** | Discounted pre-purchase of Log Analytics ingestion |
| **Basic / Auxiliary / Analytics** | Three Log Analytics data plans |
| **Cross-workspace query** | `workspace("law-other").Perf` |

---

## ✅ Module 7 Summary

You now know:

- 🎯 The Azure Monitor architecture (Metrics + Log Analytics + AMA)
- 🤖 AMA + DCRs, the modern unified pattern (MMA is retired)
- 🏢 Log Analytics workspace design choices (single / regional / per-BU / hub-spoke)
- 🔤 KQL basics, the top 10 operators with worked examples
- 📊 VM Insights as a turnkey AMA+DCR+Dependency solution
- 📚 Workbooks for interactive dashboards
- 🚨 Three alert types (metric / log / activity log) and when each
- 🛟 Action groups and auto-remediation patterns
- 🚨 The 10 most common exam traps in this domain

**Next steps:**
1. 🎥 Watch the videos in [Videos.md](./Videos.md)
2. ✏️ Take the [Quiz](./Quiz.md)
3. 📋 Review the [Cheat-Sheet](./Cheat-Sheet.md)
4. ➡️ Move to [Module 8: Server Security & Defender](../Module-08-Security-Defender/Reading.md)

---

> **Where this leads.**
> - Inside this course: Module 8's Defender for Servers ingests its findings into the same Log Analytics workspace; Module 9's Azure Backup writes job results to the workspace; Module 10's Azure Automation runbooks are often triggered from Action Groups.
> - Cross-course: [`06-Azure-Administrator` Module 10](../../06-Azure-Administrator/Module-10-Monitor-Governance/Reading.md) covers the Azure-native side.
> - Practice: Practice Exam 1 has 1 question on monitoring; Practice Exam 2 has 10 (deep coverage); Final Mock has a DCR design case study.

---

## 💬 Discussion, Socratic prompts

1. **Single workspace vs many.** A 12,000-server multinational debates: one global workspace (easier KQL) vs per-region workspaces (data sovereignty) vs per-BU workspaces (RBAC isolation). Defend the hub-and-spoke model where security telemetry lives in a Sentinel-protected hub workspace and operations telemetry lives in regional spokes. What's the cost trade-off?
2. **DCR per workload vs per machine.** Microsoft's recommended pattern is "one DCR per workload archetype" (web server, SQL, DC). Defend this against the temptation to "make one big DCR and assign it everywhere." What's the gotcha with the big-DCR approach?
3. **AMA migration deadline.** MMA was retired August 2024. Build the migration plan for a 4,000-server enterprise: discovery (which servers still have MMA?), workspace inventory, DCR design, parallel operation period (run both for a week), cutover, decommission MMA.
4. **Log alert vs metric alert latency.** Metric alerts fire in ~1 min; log alerts evaluate every 5 min by default. For a "CPU > 90% for 10 min" condition, defend metric alert. For "user added to Domain Admins" defend log alert. What's the worst-case latency in each pattern?
5. **Sentinel vs in-house KQL.** Sentinel costs ~$2/GB ingestion on top of Log Analytics. Build the case for and against Sentinel at a 50-employee company (probably overkill) vs a 5,000-employee bank (likely essential). What's the inflection point?

---

## 📚 Further Reading (Optional)

- 📖 [Microsoft Learn, Azure Monitor overview](https://learn.microsoft.com/azure/azure-monitor/overview)
- 📖 [Azure Monitor Agent overview + migration](https://learn.microsoft.com/azure/azure-monitor/agents/azure-monitor-agent-overview)
- 📖 [Data Collection Rules deep dive](https://learn.microsoft.com/azure/azure-monitor/essentials/data-collection-rule-overview)
- 📖 [KQL quick reference](https://learn.microsoft.com/azure/data-explorer/kql-quick-reference)
- 📖 [VM Insights documentation](https://learn.microsoft.com/azure/azure-monitor/vm/vminsights-overview)
- 📖 [Azure Workbooks gallery](https://learn.microsoft.com/azure/azure-monitor/visualize/workbooks-overview)
- 📖 Capital One Senate Banking Committee testimony (October 17 2019), public source on the breach response architecture
- 📖 NIST SP 800-92 *Guide to Computer Security Log Management* (2006), foundational logging strategy still highly cited
- 📖 [KQL textbook by Rod Trent](https://rodtrent.com/), community resource for advanced KQL patterns
