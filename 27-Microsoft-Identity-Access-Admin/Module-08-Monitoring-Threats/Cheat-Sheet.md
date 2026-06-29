# 📋 Module 8 Cheat Sheet: Monitoring, Reporting & Threat Response

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 📂 Log Sources

| Log | Contents | Retention |
|-----|----------|-----------|
| **SigninLogs** | Interactive + non-interactive + SP + MI sign-ins | 7d Free / 30d P1+ |
| **AuditLogs** | Directory changes (users, groups, roles, apps, consent) | 7d Free / 30d P1+ |
| **ProvisioningLogs** | SCIM + Cloud Sync events | 7d Free / 30d P1+ |
| **RiskyUsers / UserRiskEvents** | Identity Protection (P2) | 90 days |

🔥 Forward to LA / Event Hub / storage for longer.

---

## ⚙️ Diagnostic Settings → LA (THE setup)

```
Entra portal → Monitoring → Diagnostic settings → + Add
  Categories:
    ✓ SignInLogs
    ✓ AuditLogs
    ✓ NonInteractiveUserSignInLogs   ← don't forget!
    ✓ ServicePrincipalSignInLogs
    ✓ ManagedIdentitySignInLogs
    ✓ ProvisioningLogs
    ✓ RiskyUsers + UserRiskEvents (P2)
  Destination: Log Analytics workspace
```

---

## 🔍 KQL Essentials

```kql
TableName
| where col == "value"             // filter
| where TimeGenerated > ago(1h)    // time
| extend Foo = col1 + col2         // computed
| project col1, col2, Foo          // select
| summarize count() by col1        // group
| order by count_ desc             // sort
| take 10                          // limit
| join (Other) on col1             // join
```

---

## 🔝 10 Must-Know KQL Queries

| # | Use case | Table |
|---|----------|-------|
| 1 | Failed sign-ins by user | SigninLogs |
| 2 | Anonymous IP sign-ins | SigninLogs (RiskEventTypes_V2) |
| 3 | Brute-force survivors | SigninLogs |
| 4 | PIM (Product Information Management) activations | AuditLogs |
| 5 | Break-glass sign-ins | SigninLogs |
| 6 | OAuth consent to unverified | AuditLogs |
| 7 | CA policy hits | SigninLogs (mv-expand ConditionalAccessPolicies) |
| 8 | High-risk users not remediated | SigninLogs |
| 9 | Sign-ins not from trusted location | SigninLogs |
| 10 | Provisioning failures | AADProvisioningLogs |

---

## 🛡️ Microsoft Sentinel

| Component | What |
|-----------|------|
| Connectors | Ingest from Entra, Defender, AWS (Amazon Web Services), GCP (Google Cloud Platform), third-party |
| Analytics rules | Scheduled KQL → fires incidents |
| Workbooks | Dashboards (Microsoft Entra workbook) |
| Hunting queries | Pre-built + custom proactive queries |
| UEBA | Anomaly detection |
| SOAR playbooks | Logic Apps auto-respond (revoke session, block sign-in) |

---

## 🛡️ Defender for Identity ≠ Identity Protection

| | **Defender for Identity** | **Identity Protection** |
|---|---------------------------|-------------------------|
| Scope | On-prem AD (Active Directory) (DC / AD FS / AD CS) | Cloud Entra sign-ins |
| Agent | Yes (sensor) | No (cloud) |
| Detects | Golden Ticket, DCSync, lateral movement | Leaked creds, impossible travel, anonymous IP |
| Portal | Defender XDR (Extended Detection and Response) | Entra portal + Defender XDR |
| License | Defender for Identity SKU (Stock Keeping Unit) / M365 E5 | Entra ID P2 |

---

## 📈 Identity Secure Score

- 0–100% identity hygiene score
- Per-tenant + part of Microsoft Secure Score
- Prescriptive improvement actions
- Use as prioritized backlog

---

## 🪦 Break-Glass Alerts (CRITICAL)

```kql
// Every break-glass sign-in
SigninLogs
| where UserPrincipalName in (
    "breakglass1@contoso.com",
    "breakglass2@contoso.com")
```

Wire as Sentinel analytics rule → page on-call immediately.

---

## 🔐 Token Theft Defense

| Defense | What |
|---------|------|
| **CAE** | Token revocation in ~15 min (vs 1h default) |
| **Token Protection** (preview) | Binds token to device |
| **Identity Protection token-theft detection** | Risk signal |
| **Sentinel detection** | Same token from 2 IPs in short window |

---

## 🚦 Monitoring Stand-Up Checklist

```
1. LA workspace → enable Sentinel
2. Diagnostic Settings → ship all log categories
3. Microsoft Entra data connector + workbook
4. Tier-1 rules: break-glass / high-risk user / off-hours PIM /
   OAuth consent to unverified / impossible travel
5. Defender for Identity sensors (hybrid) + SOAR playbooks
6. Identity Secure Score monthly review
```

---

## 🏆 Exam Power Phrases

When you see these, they're often **correct**:

- ✅ "Forward to Log Analytics for >30-day retention"
- ✅ "Sentinel analytics rule with KQL"
- ✅ "Defender for Identity for on-prem AD attacks"
- ✅ "Identity Protection for cloud risk policies"
- ✅ "CAE for fast token revocation"
- ✅ "Break-glass sign-in → immediate alert"
- ✅ "Identity Secure Score for hygiene backlog"

When you see these, often **wrong**:

- ❌ "Sign-in logs retained 1 year by default"
- ❌ "Identity Protection = Defender for Identity"
- ❌ "MFA (Multi-Factor Authentication) stops token theft"
- ❌ "Forward only sign-in logs (skip audit + provisioning)"
- ❌ "Break-glass needs no monitoring"
- ❌ "KQL is SQL"

---

## ⚠️ Anti-Patterns

- ❌ Default retention only (no LA forwarding)
- ❌ No break-glass alert; Identity Secure Score ignored
- ❌ Sentinel content imported but not tuned (alert fatigue)
- ❌ Confusing Defender for Identity (on-prem) with Identity Protection (cloud)
- ❌ Skipping NonInteractiveUserSignInLogs category (miss programmatic attacks)

---

## ✏️ Quick Self-Check

Cover the answers, recite: (1) the 4 log sources; (2) retention Free/P1+/Risk; (3) KQL `!=` syntax; (4) Defender for Identity vs Identity Protection scope; (5) CAE latency; (6) break-glass alert frequency.

---

➡️ Take [Practice Exam 2](../Practice-Exams/Practice-Exam-2.md), then [Final Mock Exam](../Practice-Exams/Final-Mock-Exam.md)
