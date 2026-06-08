# 📋 Module 10 Cheat Sheet: Monitor & Governance

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 📡 Azure Monitor Data Pipeline

```
RESOURCES ─► AMA + DCR ─► Log Analytics workspace ──► KQL queries / Alerts / Workbooks
              │
              └─► Metrics TSDB (90-day)
              └─► Activity Log (90-day default)
```

Diagnostic Setting destinations: **Log Analytics · Storage · Event Hub · Partner**

---

## 📊 Log Analytics Quick Facts

- One workspace = one region (data stays there)
- Default retention 30 d (extend 4–730), Archive 12+ y
- KQL: `where` → `summarize` → `top` / `project`

```kql
Perf
| where TimeGenerated > ago(1h)
| where CounterName == "% Processor Time"
| summarize Avg = avg(CounterValue) by Computer
| order by Avg desc
```

---

## 🚨 Alert Anatomy

```
[Signal] (Metric / Log / Activity Log) → [Condition] → [Action Group]
                                                          ├─ Email/SMS/Voice/Push
                                                          ├─ Webhook
                                                          ├─ Logic App
                                                          ├─ Function
                                                          ├─ Automation Runbook
                                                          └─ ITSM
```

Severities: Sev0 (critical) → Sev4 (info)

---

## 📜 Azure Policy Recap

| Effect | When |
|--------|------|
| **Audit** | Flag non-compliance |
| **Deny** | Block create/update |
| **Append / Modify** | Add/update properties or tags |
| **DeployIfNotExists** | Auto-remediate via embedded ARM |
| **AuditIfNotExists** | Audit when a related resource is missing |

Initiative = bundle of policies (e.g. MCSB, NIST 800-53). Remediation Task brings *existing* resources into compliance for DINE/Modify.

---

## 🔒 Resource Locks Recap

| Type | Effect |
|------|--------|
| CanNotDelete | Read + modify OK, no delete |
| ReadOnly | Read only, breaks many ops |

Inherits down. Only Owner / UAA can create.

---

## 🌐 Network Watcher Tools

| Tool | Use |
|------|-----|
| IP Flow Verify | Which NSG rule dropped the packet? |
| Next Hop | What's the next-hop for a destination? |
| Effective Security Rules | Combined NSG view on a NIC |
| Connection Monitor | Ongoing latency/connectivity |
| NSG Flow Logs v2 → Traffic Analytics | Flow-level analytics |
| Packet Capture | tcpdump-like capture |

---

## 🏆 Exam Power Phrases

Often **correct**:

- ✅ "Send Activity Log to Log Analytics via Diagnostic Setting"
- ✅ "Use AMA + DCR (not MMA)"
- ✅ "Workspace-based Application Insights"
- ✅ "Initiative for compliance baseline + remediation task"
- ✅ "Action Group with Logic App for automation"

Often **wrong**:

- ❌ "Activity Log retains forever"
- ❌ "Resource lock blocks reads"
- ❌ "DINE remediates existing resources automatically"
- ❌ "MMA is the current agent"
- ❌ "Workbook is read-only static"

---

## ⚠️ Anti-Patterns

- ❌ No central Log Analytics workspace
- ❌ Manual diagnostic settings per resource (use Policy DINE)
- ❌ Alerts without action groups
- ❌ MMA in 2026
- ❌ Policy assigned at RG when MG would do

---

## ✏️ Quick Self-Check

1. Metrics retention vs default Log Analytics retention? ___
2. AMA vs MMA, which is current? ___
3. KQL keywords for filtering + grouping + sorting? ___
4. Effect that triggers an embedded ARM deployment? ___
5. Where do NSG Flow Logs v2 land natively? ___

---

🎓 **You've finished the curriculum. Now:**
- 🧪 [Practice Exam 2](../Practice-Exams/Practice-Exam-2.md)
- 🧪 [Final Mock Exam](../Practice-Exams/Final-Mock-Exam.md)
- 📅 Schedule the real AZ-104!
