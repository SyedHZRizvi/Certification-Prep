# ✏️ Module 7 Quiz: Azure Monitor & Hybrid Monitoring

> **Instructions:** Answer all 26 questions WITHOUT looking at the reading. Aim for 22/26 minimum.

---

## Questions

### Q1. Which agent REPLACED the legacy Microsoft Monitoring Agent (MMA) in August 2024? *(Remember)*
A. SCOM agent
B. AMA (Azure Monitor Agent)
C. OMS Linux Agent
D. Defender for Endpoint agent

---

### Q2. A Data Collection Rule (DCR) specifies: *(Remember)*
A. The on-prem AD password policy
B. What data to collect and where to ship it
C. The Log Analytics workspace billing tier
D. The Azure region for backups

---

### Q3. The query language used in Log Analytics is: *(Remember)*
A. T-SQL
B. KQL (Kusto Query Language)
C. PowerShell
D. JMESPath

---

### Q4. Log Analytics default interactive retention is: *(Remember)*
A. 7 days
B. 30 days
C. 90 days
D. 730 days

---

### Q5. The MAX interactive retention for a Log Analytics workspace is: *(Remember)*
A. 30 days
B. 90 days
C. 365 days
D. 730 days (with up to 12 years via Archive)

---

### Q6. Which alert type evaluates KQL queries on a schedule? *(Remember)*
A. Metric alert
B. Log alert (scheduled query rule)
C. Activity log alert
D. Service health alert

---

### Q7. Which alert type has near-real-time (~1 min) evaluation? *(Remember)*
A. Metric alert
B. Log alert
C. Activity log alert
D. Workbook alert

---

### Q8. To install AMA on 200 Arc-enabled servers at scale, the BEST approach is: *(Apply)*
A. Manually run an installer on each server
B. Azure Policy with DINE effect + remediation task
C. Group Policy startup script
D. RDP into each one

---

### Q9. VM Insights provides: *(Understand)*
A. Patch management
B. Pre-built performance trends + dependency map + health
C. SQL Server replication
D. AD replication monitoring

---

### Q10. **Yes/No** — Mark each statement. *(Evaluate)*

**S1:** MMA was retired in August 2024.
**S2:** A single DCR can be associated with many machines.
**S3:** Log Analytics workspace default retention is 90 days.

A. Yes / Yes / No
B. Yes / No / Yes
C. No / Yes / No
D. Yes / Yes / Yes

---

### Q11. The KQL operator to aggregate (e.g., average per machine) is: *(Remember)*
A. `summarize`
B. `project`
C. `extend`
D. `union`

---

### Q12. The KQL operator to add a computed column is: *(Remember)*
A. `summarize`
B. `extend`
C. `take`
D. `top`

---

### Q13. A workbook can combine which data sources? *(Understand)*
A. KQL log query, KQL metric query, Resource Graph, ARM, custom REST endpoint
B. SQL queries only
C. PowerShell output
D. Static images only

---

### Q14. Which is TRUE about Cross-Workspace KQL queries? *(Understand)*
A. They are free
B. Billing applies against the QUERIED workspace, not the executing user's workspace
C. They cannot span subscriptions
D. They only work for metrics

---

### Q15. An action group in Azure Monitor routes alerts to: *(Remember)*
A. Email/SMS/voice/push, webhook, Logic App, Azure Function, Automation runbook, Event Hub, ITSM
B. Email only
C. Slack only
D. PagerDuty only

---

### Q16. **Order these steps** to monitor 100 Arc machines with one workspace + DCR + log alert. *(Create)*

1. Create Log Analytics workspace
2. Create DCR `dcr-windows-baseline`
3. Use Azure Policy DINE to associate DCR with all Arc machines
4. Trigger remediation task
5. Author KQL query and create the log alert
6. Create action group and link to alert

A. 1 → 2 → 3 → 4 → 5 → 6
B. 2 → 1 → 3 → 4 → 5 → 6
C. 1 → 3 → 2 → 4 → 5 → 6
D. 3 → 1 → 2 → 4 → 5 → 6

---

### Q17. Application Insights data is stored in: *(Understand)*
A. A separate Application Insights store
B. A Log Analytics workspace (since 2023 — they merged)
C. Cosmos DB
D. Storage account

---

### Q18. The KQL operator to filter rows is: *(Remember)*
A. `where`
B. `filter`
C. `having`
D. `select`

---

### Q19. **Yes/No** — Mark each statement. *(Analyze)*

**S1:** A metric alert can do a multi-table KQL JOIN.
**S2:** Activity log alerts fire on data-plane events.
**S3:** Sentinel adds SIEM capabilities to a Log Analytics workspace.

A. No / No / Yes
B. Yes / Yes / Yes
C. No / Yes / Yes
D. Yes / No / No

---

### Q20. The Log Analytics data plan suitable for ingest-only / forensic-recall use cases is: *(Remember)*
A. Analytics
B. Basic
C. Auxiliary
D. Standard

---

### Q21. The Heartbeat table tells you: *(Remember)*
A. AD replication status
B. Whether AMA is alive on the machine
C. CPU utilization
D. Network throughput

---

### Q22. **Yes/No** — Mark each statement. *(Apply)*

**S1:** AMA can multi-home to multiple Log Analytics workspaces via multiple DCRs.
**S2:** DCRs apply only to Azure VMs, not Arc machines.
**S3:** AMA supports both Windows and Linux.

A. Yes / No / Yes
B. Yes / Yes / Yes
C. No / Yes / Yes
D. Yes / No / No

---

### Q23. Which is the BEST KQL query to find machines with CPU > 90% over the last 10 minutes? *(Apply)*
A. `Perf | where ObjectName == "Processor" and CounterName == "% Processor Time" | where TimeGenerated > ago(10m) | summarize avg(CounterValue) by Computer | where avg_CounterValue > 90`
B. `SELECT * FROM Perf WHERE CPU > 90`
C. `Get-Counter "Processor(_Total)\% Processor Time"`
D. `metric.cpu > 90`

---

### Q24. The Action Group action that calls an HTTP endpoint with the alert payload is: *(Remember)*
A. Email
B. Webhook
C. Voice call
D. ITSM

---

### Q25. The recommended pattern for ONE DCR design is: *(Understand)*
A. One DCR per individual machine
B. One DCR per workload archetype (web server, SQL, DC, file server)
C. One DCR per subscription
D. One DCR per region

---

### Q26. To stream Log Analytics data to a third-party SIEM in real time, use: *(Apply)*
A. Manually export each day
B. Action group → Event Hub → SIEM
C. Manually copy via PowerShell
D. Email attachments

---

## 🎯 Answers + Explanations

### Q1: **B. AMA (Azure Monitor Agent)**
MMA was retired August 2024. AMA is the required successor.

### Q2: **B. What data to collect and where to ship it**
DCRs are the modern centralized telemetry config. JSON document, reusable.

### Q3: **B. KQL (Kusto Query Language)**
KQL is SQL-like, pipe-based. Standard across Log Analytics, Sentinel, Defender XDR.

### Q4: **B. 30 days**
30-day interactive default. Then up to 730 with paid retention, then archive.

### Q5: **D. 730 days (with up to 12 years via Archive)**
Interactive max is 730 days. Archive tier extends to 12 years.

### Q6: **B. Log alert (scheduled query rule)**
Log alerts run KQL on schedule (5 min default).

### Q7: **A. Metric alert**
~1 min evaluation. Best for known-numeric thresholds.

### Q8: **B. Azure Policy with DINE effect + remediation task**
The scale answer. DINE auto-installs; remediation cleans up existing.

### Q9: **B. Pre-built performance trends + dependency map + health**
VM Insights is the turnkey monitoring solution for VMs / Arc.

### Q10: **A. Yes / Yes / No**
S1 and S2 correct. S3 wrong (default is 30 days, not 90).

### Q11: **A. `summarize`**
The aggregation operator. Usually paired with `by` and `bin()`.

### Q12: **B. `extend`**
Adds a computed column. `project` selects/excludes; `extend` adds.

### Q13: **A. KQL log + metric, Resource Graph, ARM, custom REST**
Workbooks are versatile — combine many sources.

### Q14: **B. Billing applies against the QUERIED workspace**
Cross-workspace queries are billed against the data's home workspace.

### Q15: **A. Email/SMS/voice/push, webhook, Logic App, Azure Function, Automation runbook, Event Hub, ITSM**
Action groups support many destinations.

### Q16: **A. 1 → 2 → 3 → 4 → 5 → 6**
Workspace → DCR → policy assoc → remediate → alert → action group.

### Q17: **B. A Log Analytics workspace (since 2023 — they merged)**
App Insights and Log Analytics merged. One data store, one query engine.

### Q18: **A. `where`**
Filter operator. Different from `having` (SQL) or `filter`.

### Q19: **A. No / No / Yes**
S1 wrong (metric alerts are simple thresholds, no joins). S2 wrong (activity log = control plane only). S3 correct.

### Q20: **C. Auxiliary**
Auxiliary tier is ingestion-only — eDiscovery / forensic recall (cheap; can't query interactively).

### Q21: **B. Whether AMA is alive on the machine**
Heartbeat is the canonical "is the agent reporting" signal.

### Q22: **A. Yes / No / Yes**
S1 correct (multi-DCR to multi-workspace). S2 wrong (DCRs work for both Azure VMs and Arc). S3 correct.

### Q23: **A. KQL query**
Standard CPU-alert pattern.

### Q24: **B. Webhook**
Webhook calls an HTTP endpoint with the alert payload.

### Q25: **B. One DCR per workload archetype**
Microsoft's pattern for maintainability. One-per-machine doesn't scale; one-mega-DCR loses targeted control.

### Q26: **B. Action group → Event Hub → SIEM**
The standard pattern. Event Hub buffers and streams to any SIEM.

---

## 📊 Score Yourself

- 25–26/26 → 🏆 Monitor domain mastered. Move on.
- 22–24/26 → ✅ Strong. Note misses, then continue.
- 18–21/26 → ⚠️ Re-read DCR + KQL + Alert sections.
- <18/26 → 🔁 Re-read the entire module before continuing.

---

## 🃏 Add To Your Flashcards

- AMA replaced MMA in Aug 2024
- DCR = what + where for telemetry; reuse one per workload type
- KQL top operators: where, summarize, project, extend, take, order by, join, union, render, let, parse
- Log Analytics default 30d, max 730d interactive, up to 12y archive
- Metric alert ~1 min real-time; Log alert KQL on 5 min schedule
- VM Insights = turnkey AMA + DCR + Dependency Agent
- Action group: many destinations (email, webhook, Logic App, Function, ITSM, Event Hub)
- Heartbeat table = AMA alive signal
- Application Insights stores in Log Analytics (since 2023)
- Cross-workspace query bills against QUERIED workspace

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md) for one-page review, then [Module 8](../Module-08-Security-Defender/Reading.md)
