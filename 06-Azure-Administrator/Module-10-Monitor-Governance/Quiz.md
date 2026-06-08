# ✏️ Module 10 Quiz: Monitor & Governance

> **Instructions:** Answer all 24 questions WITHOUT looking at the reading. Aim for 20/24 minimum.

---

## Questions

### Q1. Azure Monitor stores numeric time-series data in: *(Remember)*
A. Log Analytics workspace
B. Metrics time-series database (90-day retention)
C. Storage account
D. Event Hub

---

### Q2. Logs are queried with: *(Remember)*
A. SQL
B. KQL (Kusto Query Language)
C. SPL
D. PromQL

---

### Q3. Default Activity Log retention is: *(Remember)*
A. 30 days
B. 60 days
C. 90 days
D. Forever

---

### Q4. To retain Activity Log beyond default: *(Apply)*
A. Increase a slider in Monitor
B. Create a Diagnostic Setting that routes Activity Log to a Log Analytics workspace / storage / Event Hub
C. Enable Defender for Cloud
D. Change region

---

### Q5. The modern Azure Monitor data collection agent is: *(Remember)*
A. MMA (Microsoft Monitoring Agent)
B. AMA (Azure Monitor Agent) + Data Collection Rules
C. OMS Agent
D. Diagnostics Extension

---

### Q6. **Order these steps** to send VM performance counters to a Log Analytics workspace. *(Create)*

1. Install the Azure Monitor Agent extension on the VM
2. Create a Log Analytics workspace
3. Create a Data Collection Rule (DCR) referencing the workspace
4. Associate the DCR with the VM

A. 1 → 2 → 3 → 4
B. 2 → 1 → 3 → 4
C. 2 → 3 → 1 → 4
D. 2 → 1 → 3 → 4 (in either order for 1 and 3)

---

### Q7. An Action Group can include all of these EXCEPT: *(Analyze)*
A. Email / SMS / Voice
B. Logic App
C. Webhook
D. ARM template deployment directly

---

### Q8. Yes/No, Log Analytics. *(Evaluate)*

**S1:** A workspace is bound to one Azure region; data stays in that region.
**S2:** Default interactive retention is 30 days; you can extend up to 730 days.
**S3:** Archive tier lets you keep data cheaply for 12+ years.

A. Yes / Yes / Yes
B. Yes / No / Yes
C. No / Yes / Yes
D. Yes / Yes / No

---

### Q9. To audit & block non-compliant resources from being created, use: *(Apply)*
A. RBAC only
B. Azure Policy with `Audit` and `Deny` effects
C. Resource Locks
D. NSG rules

---

### Q10. Which Policy effect runs an embedded ARM deployment to remediate a non-compliant resource? *(Remember)*
A. Audit
B. Deny
C. DeployIfNotExists (DINE)
D. Disabled

---

### Q11. A DINE policy fires for new resources. To bring **existing** non-compliant resources into compliance, you: *(Apply)*
A. Wait, it's automatic
B. Create a remediation task on the policy assignment
C. Delete and re-create the resources
D. Apply an Audit policy alongside

---

### Q12. An Initiative (Policy Set) is: *(Remember)*
A. A single policy
B. A group of related policies (e.g. MCSB, NIST 800-53) assigned together
C. The same as a resource lock
D. A KQL query

---

### Q13. To resolve "Why is my VM not reaching the internet?" the BEST Network Watcher tool is: *(Apply)*
A. IP Flow Verify (per-packet rule trace) and/or Connection Troubleshoot
B. NSG Flow Logs only
C. Activity Log
D. App Insights

---

### Q14. NSG Flow Logs v2 are sent to: *(Understand)*
A. Log Analytics workspace
B. Storage account (and optionally analyzed by Traffic Analytics → Log Analytics)
C. Event Hub
D. Storage Sync Service

---

### Q15. Which is TRUE about Application Insights today? *(Understand)*
A. It's a separate product from Azure Monitor
B. Workspace-based Application Insights stores data in a Log Analytics workspace
C. Only supports .NET apps
D. Requires AMA agent

---

### Q16. The "Activity Log" records: *(Understand)*
A. Performance counters
B. Control-plane events (resource create/update/delete + RBAC operations)
C. App-level exceptions
D. Network flow logs

---

### Q17. Yes/No, KQL. *(Apply)*

**S1:** `where TimeGenerated > ago(1h)` filters to the last hour.
**S2:** `summarize count() by Url` aggregates rows.
**S3:** `top 10 by Count desc` is an invalid KQL operator.

A. Yes / Yes / No
B. Yes / No / Yes
C. No / Yes / Yes
D. Yes / Yes / Yes

---

### Q18. To alert on Service Health events affecting your subscription, you use: *(Apply)*
A. Metric alert
B. Activity Log alert (Service Health category)
C. Log alert
D. Smart detection

---

### Q19. Diagnostic Settings can route resource logs to which destinations? *(Remember)*
A. Log Analytics workspace only
B. Log Analytics workspace, Storage account, Event Hub, partner integration
C. SQL DB only
D. Cosmos DB only

---

### Q20. **Order these steps** to apply a compliance baseline using MCSB. *(Create)*

1. Identify the management group scope
2. Find the MCSB built-in initiative
3. Assign the initiative at the scope
4. Configure parameters (allowed locations, etc.)
5. Review compliance state and create remediation tasks

A. 1 → 2 → 3 → 4 → 5
B. 2 → 1 → 4 → 3 → 5
C. 1 → 2 → 4 → 3 → 5
D. 1 → 2 → 3 → 5 → 4

---

### Q21. Yes/No, Resource locks (recap). *(Evaluate)*

**S1:** A `ReadOnly` lock at the subscription affects every child resource.
**S2:** `CanNotDelete` is generally preferred over `ReadOnly` to avoid breaking operations.
**S3:** Only Owners and User Access Administrators can create or remove locks.

A. Yes / Yes / Yes
B. Yes / No / Yes
C. No / Yes / Yes
D. Yes / Yes / No

---

### Q22. Service Health alerts are categorized as: *(Remember)*
A. Service issues, Planned maintenance, Health advisories, Security advisories
B. Critical only
C. P1/P2/P3/P4
D. Severity 0–4

---

### Q23. To investigate "who deleted this VM last Tuesday at 3 AM": *(Apply)*
A. Activity Log filtered by resource + time + operation type
B. App Insights
C. NSG Flow Logs
D. Storage soft delete

---

### Q24. **Workbooks** are best for: *(Understand)*
A. Real-time queries with custom parameters and visualizations
B. SQL stored procedures
C. NSG rule editing
D. RBAC role definitions

---

## 🎯 Answers + Explanations

### Q1: **B. Metrics time-series database (90-day retention)**
Metrics and logs are stored in different backends.

### Q2: **B. KQL (Kusto Query Language)**
Same language as Azure Data Explorer / Microsoft Sentinel.

### Q3: **C. 90 days**
Default retention. Use diagnostic settings to keep longer.

### Q4: **B. Create a Diagnostic Setting that routes Activity Log to a Log Analytics workspace / storage / Event Hub**
The standard pattern.

### Q5: **B. AMA + DCRs**
MMA / Log Analytics Agent / OMS Agent are all legacy.

### Q6: **D. 2 → 1 → 3 → 4 (in either order for 1 and 3)**
Workspace first, then agent + DCR (parallel), then associate DCR with the VM. Any of A or D answers are acceptable depending on exact wording; the safest sequencing puts workspace creation first.

### Q7: **D. ARM template deployment directly**
Action groups invoke automation runbooks, Logic Apps, or Functions, they don't deploy ARM templates directly.

### Q8: **A. Yes / Yes / Yes**
All correct workspace facts.

### Q9: **B. Azure Policy with `Audit` and `Deny` effects**
Policy enforces compliance at the control plane.

### Q10: **C. DeployIfNotExists (DINE)**
DINE runs a remediation deployment.

### Q11: **B. Create a remediation task on the policy assignment**
DINE fires for new/updated resources; remediation tasks handle the existing ones.

### Q12: **B. A group of related policies**
Policy Set = Initiative.

### Q13: **A. IP Flow Verify (per-packet rule trace) and/or Connection Troubleshoot**
Direct diagnostic tools.

### Q14: **B. Storage account (and optionally analyzed by Traffic Analytics → Log Analytics)**
Raw NSG flow logs land in storage; Traffic Analytics is the optional layer on top.

### Q15: **B. Workspace-based Application Insights stores data in a Log Analytics workspace**
The modern default.

### Q16: **B. Control-plane events**
Audit log of who did what.

### Q17: **A. Yes / Yes / No**
`top N by X desc` is valid KQL.

### Q18: **B. Activity Log alert (Service Health category)**
Service Health alerts are a special kind of Activity Log alert.

### Q19: **B. Log Analytics workspace, Storage account, Event Hub, partner integration**
4 destination types.

### Q20: **C. 1 → 2 → 4 → 3 → 5**
Identify scope → find initiative → configure parameters → assign → review + remediate. (Parameters are picked at assignment time, so "configure parameters" is part of the assignment step in practice; the canonical flow is identify → find → configure-during-assign → review.)

### Q21: **A. Yes / Yes / Yes**
All true.

### Q22: **A. Service issues, Planned maintenance, Health advisories, Security advisories**
The 4 Service Health categories.

### Q23: **A. Activity Log filtered by resource + time + operation type**
Activity Log is the audit of control-plane actions.

### Q24: **A. Real-time queries with custom parameters and visualizations**
Workbooks = interactive parameterized KQL reports.

---

## 📊 Score Yourself

- 23–24/24 → 🏆 Monitoring + Governance mastered.
- 20–22/24 → ✅ Strong; review misses.
- 16–19/24 → ⚠️ Re-read Monitor architecture + Policy sections.
- <16/24 → 🔁 Re-read the module.

---

## 🃏 Add To Your Flashcards

- Metrics (90 days) vs Logs (LA workspace)
- Activity Log default retention (90 days)
- AMA + DCR replaces MMA
- DINE + remediation task
- Initiative = Policy Set
- Workbook = parameterized KQL report
- NSG Flow Logs → storage → Traffic Analytics
- 4 destinations for Diagnostic Settings

---

## 🧪 Halfway-To-Finished

🎉 **You've now covered the entire AZ-104 curriculum.**

➡️ **Take [Practice Exam 2](../Practice-Exams/Practice-Exam-2.md)** to test breadth across all modules.
➡️ **Then [Final Mock Exam](../Practice-Exams/Final-Mock-Exam.md)** under real exam conditions (55 Q · 100 min).

Then: [Cheat-Sheet.md](./Cheat-Sheet.md) and finally schedule the real exam.
