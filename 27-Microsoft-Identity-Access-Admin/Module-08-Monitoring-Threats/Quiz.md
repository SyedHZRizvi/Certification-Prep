# ✏️ Module 8 Quiz: Monitoring, Reporting & Threat Response

> **Instructions:** Answer all 25 questions WITHOUT looking at the reading. Aim for 21/25 minimum before moving on.

---

## Questions

### Q1. Default retention of Entra sign-in logs for a P1 tenant: *(Remember)*
A. 7 days
B. 30 days
C. 90 days
D. 1 year

---

### Q2. To retain Entra logs beyond 30 days for KQL querying, you should: *(Apply)*
A. Buy Entra ID P2
B. Configure Diagnostic Settings → forward to a Log Analytics workspace
C. Enable Security Defaults
D. Turn on Identity Protection

---

### Q3. Three primary Entra log sources are: *(Remember)*
A. Sign-in, Audit, Provisioning
B. Sign-in, Authorization, Permissions
C. Identity, Risk, Compliance
D. Auth, MFA, SSPR

---

### Q4. Identity Protection risk events are retained for: *(Remember)*
A. 7 days
B. 30 days
C. 90 days
D. 1 year

---

### Q5. KQL is used in: *(Understand)*
A. Only Sentinel
B. Log Analytics, Sentinel, Defender XDR advanced hunting, Resource Graph
C. Only SQL Server
D. Only PowerShell

---

### Q6. The right KQL table for "every interactive sign-in event" is: *(Remember)*
A. AuditLogs
B. SigninLogs
C. ProvisioningLogs
D. RiskEvents

---

### Q7. The right KQL table for "user consented to an app" is: *(Apply)*
A. SigninLogs
B. AuditLogs
C. ProvisioningLogs
D. RiskyUsers

---

### Q8. Microsoft Defender for Identity (formerly Azure ATP) detects: *(Understand)*
A. Cloud sign-in risk in Entra ID
B. On-prem AD attacks (Golden Ticket, DCSync, lateral movement) on DCs / AD FS / AD CS
C. Email phishing
D. Endpoint malware

---

### Q9. Microsoft Defender for Identity ≠ Identity Protection because: *(Understand)*
A. Identity Protection is on-prem; Defender for Identity is cloud
B. Defender for Identity is on-prem AD attack detection; Identity Protection is cloud Entra risk policies
C. They are the same product with different names
D. Identity Protection requires Defender for Identity

---

### Q10. Identity Secure Score is: *(Remember)*
A. A real-time threat alert
B. A 0–100% score with prescriptive identity hygiene improvements
C. The Defender for Identity dashboard
D. A SAML token

---

### Q11. Break-glass account monitoring should: *(Apply)*
A. Be reviewed monthly
B. Alert on EVERY sign-in (in addition to standard logging)
C. Be disabled to reduce noise
D. Only fire for failed sign-ins

---

### Q12. **Yes/No** — Logs & retention. *(Understand)*

**S1:** Free-tier Entra has 7-day sign-in log retention.
**S2:** Forwarding logs to Log Analytics costs nothing.
**S3:** NonInteractiveUserSignInLogs is its own diagnostic category.

A. Yes / Yes / Yes
B. Yes / No / Yes
C. No / No / Yes
D. Yes / No / No

---

### Q13. Token theft attack class is best defended against by: *(Apply)*
A. More frequent MFA prompts
B. Continuous Access Evaluation (CAE) + Token Protection (preview) + risk-based CA
C. Disabling Entra ID
D. Federated AD FS

---

### Q14. Microsoft Sentinel is best described as: *(Remember)*
A. An EDR product
B. A cloud-native SIEM + SOAR built on Log Analytics with KQL
C. A subset of Defender for Identity
D. The Entra portal

---

### Q15. The Microsoft Entra workbook in Sentinel is: *(Remember)*
A. A KQL query
B. A pre-built dashboard for identity overview
C. A SAML configuration
D. An access package

---

### Q16. **Order these steps** to stand up identity monitoring end-to-end. *(Apply)*

1. Configure Entra Diagnostic Settings → forward to LA workspace
2. Create a Log Analytics workspace
3. Enable Microsoft Sentinel on the workspace
4. Import the Microsoft Entra workbook + create analytics rules

A. 1 → 2 → 3 → 4
B. 2 → 3 → 1 → 4
C. 4 → 3 → 2 → 1
D. 3 → 2 → 4 → 1

---

### Q17. Which KQL operator selects rows where `ResultType` is not 0? *(Apply)*
A. `| where ResultType <> 0`
B. `| where ResultType != 0`
C. `| filter ResultType != 0`
D. `| select ResultType != 0`

---

### Q18. To group sign-in failures by user in KQL: *(Apply)*
A. `| group by UserPrincipalName`
B. `| summarize count() by UserPrincipalName`
C. `| aggregate UserPrincipalName`
D. `| pivot UserPrincipalName`

---

### Q19. Defender XDR is: *(Remember)*
A. A SAML IdP
B. The unified Microsoft Defender portal that surfaces Defender for Identity, Endpoint, Email, Cloud Apps alerts
C. An access review tool
D. A federation server

---

### Q20. **Yes/No** — Sentinel & detections. *(Understand)*

**S1:** Analytics rules in Sentinel are scheduled KQL queries that fire incidents.
**S2:** SOAR playbooks are Logic Apps that auto-respond to incidents.
**S3:** UEBA stands for User and Entity Behavior Analytics.

A. Yes / Yes / Yes
B. No / Yes / Yes
C. Yes / No / Yes
D. Yes / Yes / No

---

### Q21. A scenario: "Auditor asks for every PIM Global Admin activation in last 90 days." Right source: *(Apply)*
A. SigninLogs
B. AuditLogs filtered on PIM operations
C. RiskyUsers
D. Defender for Identity

---

### Q22. A scenario: "Detect SCIM provisioning failures to Workday." Right source: *(Apply)*
A. SigninLogs
B. AuditLogs
C. ProvisioningLogs
D. RiskEvents

---

### Q23. **Yes/No** — Monitoring fundamentals. *(Understand)*

**S1:** Audit logs include events for users, groups, roles, applications, and consent.
**S2:** Risk detections live in their own diagnostic category and feed Identity Protection.
**S3:** Service principal sign-ins have their own category (`ServicePrincipalSignInLogs`).

A. Yes / Yes / Yes
B. No / Yes / Yes
C. Yes / No / Yes
D. Yes / Yes / No

---

### Q24. The KQL operator for "join two tables on a common key" is: *(Remember)*
A. `join`
B. `merge`
C. `union`
D. `concat`

---

### Q25. **Yes/No** — Threat response. *(Evaluate)*

**S1:** MFA alone defends against token theft (post-MFA refresh-token replay).
**S2:** CAE shortens token revocation latency from ~1 hour to ~15 minutes.
**S3:** Continuous Access Evaluation is on by default for modern Microsoft 365 apps.

A. Yes / Yes / Yes
B. No / Yes / Yes
C. Yes / No / Yes
D. No / No / Yes

---

## 🎯 Answers + Explanations

### Q1: **B. 30 days**
7d Free, 30d P1+; longer requires forwarding.

### Q2: **B. Configure Diagnostic Settings → forward to a Log Analytics workspace**
The canonical retention extension path.

### Q3: **A. Sign-in, Audit, Provisioning**
The three primary log sources. Risk Detections is a fourth (P2).

### Q4: **C. 90 days**
P2 risk events retained 90 days.

### Q5: **B. Log Analytics, Sentinel, Defender XDR advanced hunting, Resource Graph**
KQL spans all Microsoft observability surfaces.

### Q6: **B. SigninLogs**
Sign-in events live in `SigninLogs`.

### Q7: **B. AuditLogs**
Consent + directory changes go to `AuditLogs`.

### Q8: **B. On-prem AD attacks (Golden Ticket, DCSync, lateral movement) on DCs / AD FS / AD CS**
Defender for Identity = on-prem AD threat detection.

### Q9: **B. Defender for Identity is on-prem AD attack detection; Identity Protection is cloud Entra risk policies**
Different products. Both useful. Both separately tested.

### Q10: **B. A 0–100% score with prescriptive identity hygiene improvements**
A guided backlog, not a real-time alert.

### Q11: **B. Alert on EVERY sign-in (in addition to standard logging)**
Break-glass use should be rare; every event must be visible.

### Q12: **B. Yes / No / Yes**
S1 yes. S2 no (LA ingestion has cost). S3 yes (NIUSIL is its own category).

### Q13: **B. Continuous Access Evaluation (CAE) + Token Protection (preview) + risk-based CA**
Token theft happens post-MFA; defense is at token level, not auth level.

### Q14: **B. A cloud-native SIEM + SOAR built on Log Analytics with KQL**
The canonical Sentinel definition.

### Q15: **B. A pre-built dashboard for identity overview**
Workbook = dashboard.

### Q16: **B. 2 → 3 → 1 → 4**
Workspace → enable Sentinel → wire logs → build content.

### Q17: **B. `| where ResultType != 0`**
KQL uses `!=` not `<>`.

### Q18: **B. `| summarize count() by UserPrincipalName`**
KQL grouping syntax.

### Q19: **B. The unified Microsoft Defender portal that surfaces Defender for Identity, Endpoint, Email, Cloud Apps alerts**
Defender XDR = unified portal.

### Q20: **A. Yes / Yes / Yes**
All three true.

### Q21: **B. AuditLogs filtered on PIM operations**
PIM activation events live in AuditLogs.

### Q22: **C. ProvisioningLogs**
SCIM provisioning events live in ProvisioningLogs.

### Q23: **A. Yes / Yes / Yes**
All three true.

### Q24: **A. `join`**
KQL's join operator.

### Q25: **B. No / Yes / Yes**
S1 no (MFA happens once; token replay bypasses it). S2 yes. S3 yes.

---

## 📊 Score Yourself

- 24–25/25 → 🏆 Monitoring + threat response locked in.
- 21–23/25 → ✅ Solid. Note misses; move on.
- 17–20/25 → ⚠️ Re-read KQL queries + Defender vs Identity Protection sections.
- <17/25 → 🔁 Re-read the entire module before continuing.

---

## 🃏 Add To Your Flashcards

- Sign-in / Audit / Provisioning + Risk Detections = 4 log sources
- Retention: 7d Free / 30d P1+ ; Risk = 90d
- Forward via Diagnostic Settings → LA / Event Hub / storage
- KQL operators: `where`, `summarize`, `project`, `extend`, `join`, `union`
- Sentinel = SIEM + SOAR on LA + KQL
- Defender for Identity = on-prem AD threats; Identity Protection = cloud risk
- Break-glass alert on every sign-in
- Token theft defense: CAE + Token Protection + risk-based CA

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Practice Exam 2](../Practice-Exams/Practice-Exam-2.md) → [Final Mock Exam](../Practice-Exams/Final-Mock-Exam.md)
