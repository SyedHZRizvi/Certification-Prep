# 📋 Module 7 Cheat Sheet: Azure Monitor & Hybrid Monitoring

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 🎯 The Stack

```
┌───────────────────────────────────────┐
│        AZURE MONITOR (UI (User Interface))             │
│  Workbooks / Alerts / Insights / Map  │
└───────────────────────────────────────┘
        │                       │
        ▼                       ▼
┌───────────────┐       ┌───────────────────┐
│   METRICS DB  │       │   LOG ANALYTICS   │
│   1-min res   │       │   KQL data store  │
│   93 day retn │       │   30d default     │
└───────────────┘       └───────────────────┘
        ▲                       ▲
        └────────┬──────────────┘
                 │
        ┌────────┴────────┐
        │   AMA + DCRs    │
        └─────────────────┘
                 │
        ┌────────┴───────────┐
        │ Azure VMs / Arc    │
        └────────────────────┘
```

---

## 🤖 AMA + DCR (MEMORIZE)

| Property | Detail |
|----------|--------|
| AMA replaces | MMA / OMS (Order Management System) / Log Analytics agent (retired Aug 2024) |
| Config model | **Data Collection Rules (DCRs)** centralized in Azure |
| One DCR → many machines | Yes (via DCR Associations) |
| Multi-home | Yes (multiple DCR associations per machine) |
| Cross-platform | Windows + Linux |
| Required for | Container Insights, VM (Virtual Machine) Insights, Defender for Servers telemetry |

🔥 **DCR design rule:** One DCR per **workload archetype** (web, SQL, DC, file).

---

## 🏢 Log Analytics Workspace

| Property | Default |
|----------|---------|
| Retention (interactive) | **30 days** |
| Max interactive retention | **730 days** |
| Archive tier max | Up to 12 years |
| Pricing | Pay-as-you-go (per GB) or **Commitment Tier** (100/200/500/.../5000 GB/day) |

### Three data plans

| Plan | Use |
|------|-----|
| **Analytics** | Full KQL, default |
| **Basic** | Cheaper; limited KQL features |
| **Auxiliary** | Ingest-only, eDiscovery / forensic recall |

---

## 🔤 KQL Top Operators

```kql
TableName
| where TimeGenerated > ago(1h)        // filter
| project Computer, CounterValue       // select cols
| extend SeverityCalc = case(...)      // add cols
| summarize avg(CounterValue) by Computer, bin(TimeGenerated, 5m)
| top 10 by avg_CounterValue desc      // limit
| order by Computer asc                // sort
| join kind=inner (Event) on Computer  // join tables
| union (OtherTable)                   // combine vertically
| render timechart                     // visualize
```

Plus `let`, `take`, `count()`, `percentile()`, `parse`.

---

## 🚨 Alert Types

| Type | Eval freq | Use |
|------|-----------|-----|
| **Metric alert** | ~1 min real-time | Simple thresholds |
| **Log alert** | KQL on schedule (5 min default) | Complex correlations |
| **Activity log alert** | Event-driven | Control-plane ARM events |

---

## 🛟 Action Groups Destinations

- Email / SMS / voice / push
- Webhook (HTTP (Hypertext Transfer Protocol) POST)
- Logic App (workflow)
- Azure Function (serverless code)
- Azure Automation runbook
- Event Hub (stream to SIEM (Security Information and Event Management))
- ITSM (ServiceNow, Cherwell)

---

## 📊 VM Insights

- Turnkey AMA + DCR + Dependency Agent
- Provides: perf trends, dependency map (process-to-process), health, inventory
- Enable via Azure Policy

---

## 🏆 Exam Power Phrases

When you see these, they're often **correct**:

- ✅ "Use AMA + DCR (MMA is retired)"
- ✅ "Create one DCR per workload archetype"
- ✅ "Apply DCR via Azure Policy DINE + remediation"
- ✅ "Metric alert for simple threshold; log alert for KQL correlation"
- ✅ "Action group → Event Hub for SIEM"
- ✅ "Cross-workspace query bills against the queried workspace"

Usually **wrong**:

- ❌ "Install MMA on new servers"
- ❌ "One DCR per individual machine"
- ❌ "Log alert for real-time CPU breach (5 min latency)"
- ❌ "Application Insights has its own data store" (merged into LA in 2023)

---

## ⚠️ Anti-Patterns To Recognize

- ❌ MMA in 2026 (retired)
- ❌ Per-machine DCRs (unmaintainable at scale)
- ❌ Log Analytics default retention for compliance use cases (need ≥365d)
- ❌ Action group emails-only for security alerts (need paging tier)
- ❌ No remediation task after DINE assignment

---

## 📐 One-Line Decision Matrix

| Need | Feature |
|------|---------|
| Replace MMA | AMA + DCR |
| Multi-home one machine to multiple workspaces | Multiple DCR associations |
| Apply DCRs at scale | Azure Policy DINE + remediation task |
| Aggregate KQL | `summarize ... by ...` |
| Time bucketing | `summarize ... by bin(TimeGenerated, 5m)` |
| Add a computed column | `extend` |
| Real-time CPU > 90% alert | Metric alert |
| "User added to Domain Admins" alert | Log alert on `Event | where EventID == 4732 and TargetGroupName has "Domain Admins"` |
| Track ARM resource changes | Activity log alert |
| Stream alerts to PagerDuty | Action group webhook |
| Stream all logs to a third-party SIEM | Action group → Event Hub → SIEM |
| Process-to-process map | VM Insights Dependency Map |
| Pre-built dashboard for VM perf | Workbook gallery |
| SIEM atop Log Analytics | Microsoft Sentinel |
| Cheapest plan for forensic recall | Auxiliary tier |

---

## ✏️ Quick Self-Check

1. AMA vs MMA, what changed? ___
2. DCR purpose + one-per-machine vs one-per-workload? ___
3. Top 5 KQL operators? ___
4. Metric alert vs log alert latency? ___
5. Application Insights stores where (since 2023)? ___
6. Auxiliary tier vs Analytics tier? ___

---

➡️ [Module 8: Server Security & Defender](../Module-08-Security-Defender/Reading.md)
