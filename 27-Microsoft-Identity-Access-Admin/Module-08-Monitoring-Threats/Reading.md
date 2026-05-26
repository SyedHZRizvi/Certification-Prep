# Module 8: Monitoring, Reporting & Threat Response 📊

> **Why this module matters:** Identity controls without telemetry are theater. Microsoft's customer data shows that orgs which forward Entra logs to Sentinel + write basic KQL detections **catch identity attacks an average of 17 days faster** than orgs relying on portal-only views. SC-300 closes with this domain because Microsoft expects the IAM admin (not just the SOC) to own the *visibility* layer over the access plane they built in Modules 1–7. The exam will absolutely test KQL basics, log retention, Defender for Identity, and break-glass alerting.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - License tiers + retention defaults — [Module 1](../Module-01-Entra-ID-Fundamentals/Reading.md).
> - Conditional Access logging fields — [Module 4](../Module-04-Conditional-Access/Reading.md).
> - PIM activation auditing — [Module 6](../Module-06-Governance-PIM/Reading.md).
> - Hybrid identity sync errors — [Module 7](../Module-07-Hybrid-Identity/Reading.md).
> - Basic SIEM concepts — [`09-CompTIA-Security-Plus` Module 7](../../09-CompTIA-Security-Plus/Module-07-Security-Operations/Reading.md).

---

## 🪪 A Story: The Identity Breach Detected By A Single KQL Query

It's 2024. A 3,200-person consultancy is two months into their SC-300-compliant identity stack — PIM eligible Global Admins, FIDO2 keys, Conditional Access with Identity Protection. Their CISO has been pushing the SOC to add identity to its monitoring stack. The SOC engineer pushes back: "We have Defender XDR alerts and Identity Protection, that's enough." The CISO insists. The engineer wires Entra sign-in + audit + provisioning logs to Sentinel and writes one KQL query as a starting point:

```kql
// Any sign-in by either break-glass account
SigninLogs
| where UserPrincipalName in ("breakglass1@firm.com", "breakglass2@firm.com")
| project TimeGenerated, UserPrincipalName, IPAddress, Location, ResultType
```

Three weeks later, the query fires. Tuesday, 3:14 AM PT. `breakglass1@firm.com` signed in successfully from an IP in Eastern Europe. The SOC engineer is paged. He opens Sign-in logs, sees the same event, plus the activation of Global Administrator role via PIM at 3:15 AM. By 3:17, the attacker has created a new federated domain pointing to an AD FS server they control. By 3:19, the SOC engineer has revoked all sessions for the break-glass account, disabled it, rotated `JWT_SECRET`-equivalent for the tenant, paged the CISO, and started incident response. Total time from attacker entry to containment: **5 minutes** — because of one KQL query.

Without that query, the attacker would have had hours, possibly days, to pivot. The breach would have made the news. The consultancy would have lost the contract that funded their security program.

This module is the visibility layer. The investment is small. The payoff is enormous.

---

## 📂 The Four Primary Entra Log Sources

| Log | Contents | Default retention |
|-----|----------|-------------------|
| **Sign-in logs** | Every interactive + non-interactive sign-in (user, service principal, managed identity) | 7d Free / 30d P1+ |
| **Audit logs** | Every directory-changing action (user created, group modified, app consented, role activated) | 7d Free / 30d P1+ |
| **Provisioning logs** | SCIM provisioning events (to/from SaaS) + Cloud Sync events | 7d Free / 30d P1+ |
| **Risk detections** (Identity Protection, P2) | Individual risk events + scores | 90 days |

🔥 **MEMORIZE:** For retention beyond the defaults, forward to **Log Analytics workspace** (KQL), **Event Hub** (streaming to a SIEM), or **storage account** (cheap archive). Configure via **Diagnostic Settings**.

---

## ⚙️ Wire Logs To Log Analytics (Diagnostic Settings)

Entra portal → Monitoring → Diagnostic settings → **+ Add diagnostic setting**:

```text
Name: ForwardToSentinel
Categories to ship:
  ✓ SignInLogs
  ✓ AuditLogs
  ✓ NonInteractiveUserSignInLogs
  ✓ ServicePrincipalSignInLogs
  ✓ ManagedIdentitySignInLogs
  ✓ ADFSSignInLogs (if federated)
  ✓ ProvisioningLogs
  ✓ RiskyUsers (P2)
  ✓ UserRiskEvents (P2)
Destinations:
  ✓ Send to Log Analytics workspace: contoso-sentinel
  (optionally) Send to Event Hub for cross-SIEM streaming
  (optionally) Archive to a storage account
```

🎯 **Exam tip:** **NonInteractiveUserSignInLogs** is its own category and is usually where attackers' programmatic abuse lives (refresh-token replay, headless OAuth). Don't forget to enable it.

---

## 📈 Identity Secure Score

Entra portal → Identity Secure Score: a 0–100% score Microsoft calculates based on your identity configuration. Each missing control has a prescriptive improvement action.

| Category (examples) | What it scores |
|---------------------|----------------|
| MFA registration coverage | % of users with MFA registered |
| Conditional Access on admins | Are MFA + risk policies on for admins? |
| Block legacy authentication | Is the policy active? |
| Number of standing Global Admins | <5 is the target |
| Authentication methods modernization | Are FIDO2 / passwordless enabled? |
| Identity Protection coverage | Are risk policies on? |

🎯 **Exam tip:** Identity Secure Score is **per-tenant + within Microsoft Secure Score** (Defender XDR). The Entra subset has its own page. Use it as your prioritized backlog.

---

## 🔍 Kusto Query Language (KQL) — The Essentials

KQL is the pipe-style query language used in:
- **Log Analytics** (Azure Monitor)
- **Microsoft Sentinel** (built on Log Analytics)
- **Microsoft Defender XDR** (advanced hunting)
- **Azure Resource Graph**

### The "must-know" syntax

```kql
// Comments start with //
TableName
| where ColumnA == "value"          // filter
| where TimeGenerated > ago(1h)     // last hour
| extend NewCol = ColumnB + ColumnC // computed column
| project Col1, Col2, NewCol        // select
| summarize count() by Col1         // group by
| order by count_ desc              // sort
| take 10                           // limit
```

### Top 10 KQL queries every IAM admin should know

```kql
// 1) All failed sign-ins by user in last 24h
SigninLogs
| where TimeGenerated > ago(24h)
| where ResultType != 0
| summarize FailCount = count() by UserPrincipalName, ResultType
| order by FailCount desc

// 2) Sign-ins from anonymous IPs (Tor) in last 7d
SigninLogs
| where TimeGenerated > ago(7d)
| where RiskEventTypes_V2 has "anonymizedIPAddress"
| project TimeGenerated, UserPrincipalName, IPAddress, Location

// 3) Successful sign-ins after multiple failures (brute-force survivors)
SigninLogs
| where TimeGenerated > ago(1d)
| summarize FailCount = countif(ResultType != 0),
            SuccessCount = countif(ResultType == 0)
            by UserPrincipalName
| where FailCount > 10 and SuccessCount > 0

// 4) PIM activations in last 30d
AuditLogs
| where TimeGenerated > ago(30d)
| where OperationName has "PIM"
| where OperationName has "activate"
| project TimeGenerated, InitiatedBy, TargetResources, Result

// 5) Break-glass account sign-ins (alert on EVERY one)
SigninLogs
| where UserPrincipalName in ("breakglass1@contoso.com", "breakglass2@contoso.com")
| project TimeGenerated, UserPrincipalName, IPAddress, Location, ResultType

// 6) Users consenting to apps from unverified publishers
AuditLogs
| where TimeGenerated > ago(7d)
| where OperationName == "Consent to application"
| extend Publisher = tostring(parse_json(tostring(parse_json(TargetResources[0].modifiedProperties[0].newValue)))[0].VerifiedPublisher)
| where isempty(Publisher)
| project TimeGenerated, InitiatedBy, TargetResources

// 7) Conditional Access policy hits — what fired today
SigninLogs
| where TimeGenerated > ago(1d)
| mv-expand ConditionalAccessPolicies
| extend PolicyName = tostring(ConditionalAccessPolicies.displayName)
| extend Result = tostring(ConditionalAccessPolicies.result)
| summarize Hits = count() by PolicyName, Result
| order by Hits desc

// 8) Identity Protection — high-risk users not yet remediated
SigninLogs
| where TimeGenerated > ago(7d)
| where RiskLevelDuringSignIn == "high" and RiskState == "atRisk"
| summarize SignIns = count() by UserPrincipalName

// 9) Sign-ins NOT from a trusted location
SigninLogs
| where TimeGenerated > ago(7d)
| where NetworkLocationDetails !contains "Trusted"
| project TimeGenerated, UserPrincipalName, Location, IPAddress

// 10) Entra Connect / Cloud Sync provisioning failures
AADRiskyUsers
| where TimeGenerated > ago(1d)
| where RiskState == "atRisk"

// (Provisioning failures live in AADProvisioningLogs)
AADProvisioningLogs
| where TimeGenerated > ago(1d)
| where ResultStatus != "Success"
| project TimeGenerated, JobId, SourceIdentity, TargetIdentity, ResultStatus, ResultDescription
```

🎯 **Exam tip:** **`SigninLogs` covers interactive + non-interactive (after schema unification)** — but historically there were separate tables. Modern queries should use the unified table.

---

## 🛡️ Microsoft Sentinel For Identity

**Microsoft Sentinel** is the cloud-native SIEM built on Log Analytics. It ingests Entra logs (via Diagnostic Settings → LA workspace + Sentinel connector), then layers:

| Capability | What it does |
|------------|--------------|
| **Connectors** | Ingest from Entra ID, Defender XDR, AWS, GCP, third-party |
| **Analytics rules** | Scheduled KQL queries that fire incidents |
| **Workbooks** | Pre-built dashboards (e.g. Microsoft Entra workbook) |
| **Hunting queries** | Pre-built and custom queries for proactive hunting |
| **UEBA** | User & Entity Behavior Analytics — anomaly detection |
| **SOAR playbooks** | Logic Apps that auto-respond to incidents (block sign-in, revoke session, page on-call) |

### Microsoft Entra workbook

Ships with Sentinel. Visualizes: sign-in volume + failures, CA policy hits, risk events, top users by sign-in, geo map of sign-ins, sign-in by app.

🎯 **Exam tip:** "Pre-built dashboard for identity overview" → Microsoft Entra **workbook** in Sentinel.

---

## 🛡️ Microsoft Defender For Identity (formerly Azure ATP)

**Defender for Identity** is agent-based detection on **on-prem Domain Controllers + AD FS servers + AD CS servers**. Detects on-prem attacks (Golden Ticket, DCSync, lateral movement, suspicious LDAP query, reconnaissance) and reports to the **Microsoft Defender XDR portal** (formerly the Microsoft 365 Defender portal).

| Spec | Detail |
|------|--------|
| Agent | Lightweight sensor on DC / AD FS / AD CS |
| Detection model | Behavioral analytics + known attack patterns |
| Where alerts surface | Defender XDR portal (integrates with Entra incidents) |
| License | Microsoft Defender for Identity (separate SKU) or part of Microsoft 365 E5 |
| Use case | "Did someone run Mimikatz on a DC?" |

🚨 **Exam trap:** **Defender for Identity ≠ Identity Protection.** Defender for Identity is **on-prem AD attack detection**; Identity Protection is **Entra cloud risk policies**. Different products. Both useful. Both tested separately on the exam.

---

## 🪦 Break-Glass Account Monitoring (CRITICAL)

The break-glass story from the intro is the textbook reason. Wire **at least these two alerts**:

```kql
// Alert 1: Break-glass sign-in
SigninLogs
| where UserPrincipalName in ("breakglass1@contoso.com", "breakglass2@contoso.com")
// Trigger immediately on every event
```

```kql
// Alert 2: Privileged role activation outside business hours
AuditLogs
| where OperationName has "PIM" and OperationName has "activate"
| where TargetResources has_any ("Global Administrator", "Privileged Role Administrator")
| extend Hour = datetime_part("Hour", TimeGenerated)
| where Hour < 8 or Hour > 18  // adjust for tenant timezone
```

🎯 **Exam tip:** "Every break-glass sign-in must trigger an alert" is a Microsoft-recommended best practice. The exam will test this.

---

## 🔐 Token Theft & Continuous Access Evaluation (CAE)

A 2023 attack class Microsoft tracks heavily is **token theft** — attacker exfiltrates a refresh token from a victim's browser/device, then replays it from their own machine. The victim's MFA doesn't help — the token is already issued.

| Defense | Detail |
|---------|--------|
| **CAE** | Token revocation propagates to apps within ~15 min (vs 1h default) |
| **Token Protection** (preview) | Binds the token to the device, making replay impossible |
| **Identity Protection token-theft detection** | Risk signal raised when token replay is suspected |
| **Sentinel detection** | KQL on `SigninLogs` for "Same refresh token used from two different IPs in short window" |

🚨 **Exam trap:** Token theft bypasses MFA. The right defenses are CAE + Token Protection + risk-based CA, NOT "require more MFA."

---

## 🚨 Common Exam Traps

| Trap | Reality |
|------|---------|
| "Sign-in logs are retained for 1 year by default" | ❌ 7d Free / 30d P1+; ship to LA for longer |
| "Identity Protection = Defender for Identity" | ❌ Different products. Cloud risk vs on-prem AD attack detection. |
| "Sentinel requires P2" | ❌ Sentinel itself doesn't; but Identity Protection signals require P2 |
| "Only sign-in logs need to be forwarded" | ❌ Audit + provisioning + risk events too |
| "Break-glass accounts don't need monitoring" | ❌ They need MORE monitoring (alert on every use) |
| "KQL is SQL" | ❌ Similar but different (pipe-style, different functions) |
| "Identity Secure Score replaces a security program" | ❌ It's a guided backlog, not a complete posture |
| "MFA stops token theft" | ❌ Token theft = post-MFA; CAE + Token Protection are the defense |
| "Defender XDR ≠ Defender for Identity" | ❌ Defender XDR is the unified portal; Defender for Identity is one of the products feeding it |
| "Logs in Log Analytics are searched via PowerShell" | ❌ KQL via Log Analytics / Sentinel UI (PowerShell can call the API but the language is KQL) |

---

## 🧪 Task-Sequencing Practice: Stand Up Identity Monitoring End-To-End

**Order these steps correctly to build a basic-but-effective identity monitoring layer.**

The correct order:

1. ✅ **Create a Log Analytics workspace** (region-aligned to tenant data residency).
2. ✅ **Enable Microsoft Sentinel** on that workspace.
3. ✅ **Configure Entra Diagnostic Settings** → forward SigninLogs + AuditLogs + ProvisioningLogs + RiskyUsers + UserRiskEvents to the LA workspace.
4. ✅ **Install the Microsoft Entra ID data connector** in Sentinel (auto-detects logs).
5. ✅ **Import the Microsoft Entra workbook** for a dashboard view.
6. ✅ **Create analytics rules**:
   - Break-glass sign-in (any time)
   - High-risk user sign-in
   - Privileged role activation outside business hours
   - Consent to unverified publisher app
   - Anomalous sign-in (impossible travel)
7. ✅ **Wire Defender for Identity** sensors to on-prem DCs (if hybrid); feed into Defender XDR portal.
8. ✅ **Configure SOAR playbooks** for top incidents (auto-revoke session on confirmed token theft, etc.).
9. ✅ **Review Identity Secure Score** monthly; assign owners to top 3 improvement actions.
10. ✅ **Document the runbook** — how to triage each alert, who to page, escalation path.

⚠️ Skipping step 3 (diagnostic settings) means everything else is hollow — no logs to query.

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **Sign-in logs** | Every sign-in event (interactive + non-interactive + SP + MI) |
| **Audit logs** | Every directory-changing action |
| **Provisioning logs** | SCIM provisioning + Cloud Sync events |
| **Risk detections** | Identity Protection signals (P2) |
| **Diagnostic settings** | Where to ship logs (LA / Event Hub / storage) |
| **Log Analytics workspace** | Where logs land for KQL querying |
| **KQL** | Kusto Query Language — Microsoft's pipe-style log query language |
| **Microsoft Sentinel** | Cloud-native SIEM built on Log Analytics |
| **Analytics rule** | Scheduled KQL query that fires Sentinel incidents |
| **Workbook** | Pre-built dashboard (Microsoft Entra workbook) |
| **UEBA** | User & Entity Behavior Analytics |
| **SOAR playbook** | Logic App that auto-responds to incidents |
| **Identity Secure Score** | Microsoft-calculated 0–100% identity posture score |
| **Microsoft Defender for Identity** | On-prem AD attack detection (formerly Azure ATP) |
| **Microsoft Defender XDR** | Unified Defender portal (Identity + Endpoint + Email + Cloud Apps) |
| **CAE** | Continuous Access Evaluation — token revocation in ~15 min |
| **Token theft** | Refresh token stolen post-MFA and replayed |
| **Token Protection** (preview) | Binds token to device to prevent replay |

---

## ✅ Module 8 Summary

You now know:
- 📂 The four log sources (Sign-in, Audit, Provisioning, Risk) + default retention
- ⚙️ Diagnostic Settings → LA / Event Hub / storage for long retention
- 📈 Identity Secure Score as the prioritized backlog
- 🔍 KQL essentials + 10 must-know queries
- 🛡️ Microsoft Sentinel for identity (connectors + rules + workbooks + UEBA + SOAR)
- 🛡️ Microsoft Defender for Identity vs Identity Protection (different products!)
- 🪦 Break-glass alerting as non-negotiable
- 🔐 Token theft defense: CAE + Token Protection + risk-based CA
- 🚨 The 10 most common traps at this layer

**Next steps:**
1. 🎥 Watch the videos in [Videos.md](./Videos.md)
2. ✏️ Take the [Quiz](./Quiz.md)
3. 📋 Review the [Cheat-Sheet](./Cheat-Sheet.md)
4. ➡️ Take [Practice Exam 2](../Practice-Exams/Practice-Exam-2.md) and then [Final Mock Exam](../Practice-Exams/Final-Mock-Exam.md)

---

## 📊 Case Study — Microsoft's Own SOC's KQL-Driven Identity Detections (2020–2024)

**Situation.** Microsoft's Cyber Defense Operations Center (CDOC) — the SOC behind microsoft.com — was an early Sentinel customer (Sentinel itself was developed partly to serve internal Microsoft needs). The CDOC team has published parts of their KQL detection library at conferences (Black Hat 2022, Defender Day 2023, RSA 2024). Their published "Top 50 identity hunting queries" library covers:
- Break-glass abuse
- Token theft signals (same token from multiple IPs)
- Suspicious OAuth consent patterns
- PIM activation anomalies (off-hours, repeated activations)
- Lateral movement from compromised identities

**Decision.** Microsoft's published guidance (and what the CDOC does internally) prescribes a tiered approach:
1. **Tier 1: Critical alerts** (every event). Break-glass sign-in. Privileged role activation outside business hours. New federated domain created. Authentication methods policy changed.
2. **Tier 2: Anomaly alerts** (suspicious patterns). Impossible travel. Token replay. OAuth consent to unverified publisher. Anomalous mass sign-ins.
3. **Tier 3: Hunting queries** (proactive). Inactive admin recently activated. Multiple failed PIM activations. CA policy in report-only for >60 days.

The KQL library is in the open-source Microsoft Sentinel content GitHub repo (`Azure/Azure-Sentinel`). New SC-300 candidates can adopt these queries directly.

**Outcome.** Per Microsoft Security Blog (2024-09):
- **Mean Time to Detect (MTTD)** for identity incidents inside Microsoft IT: dropped from 4.3 hours (2020) to 17 minutes (2024).
- **Number of customer incidents prevented** by detection rules contributed to the open-source Sentinel content: tens of thousands per quarter.
- **MITRE ATT&CK identity-related coverage** in Sentinel detection rules: ~85% of identity tactics covered in pre-built rules by 2024.

**Lesson for the exam / for practitioners.** Identity monitoring is not "configure Sentinel and walk away." It's an active, iterative practice of writing detections that match your tenant's threat model. SC-300 expects you to be able to write basic KQL, understand which log table answers which question, and integrate Identity Protection + Defender for Identity + Sentinel into a unified workflow. When you see a scenario about "how should this org detect X identity event," the answer involves: **diagnostic settings → LA → Sentinel analytics rule → KQL detection → SOAR playbook**.

**Discussion (Socratic).**
- **Q1.** Microsoft's CDOC has 24×7 staffing. A 200-person company can't afford that. What does the minimum-viable identity SOC look like with no dedicated staff — and what's the cost of NOT having it?
- **Q2.** The open-source Sentinel content library has ~300+ identity-related rules. How do you avoid alert fatigue when enabling them? What's the right tuning cadence?
- **Q3.** Microsoft Defender for Identity + Identity Protection cover on-prem and cloud separately. A truly Hybrid attack chain (compromise on-prem DC → pivot to cloud via PHS) is split across both portals. What's the right operational pattern to investigate end-to-end?

---

> **Where this leads.**
> - Inside this course: this is the last module. The Practice Exams follow.
> - Cross-course: [`09-CompTIA-Security-Plus` Module 7](../../09-CompTIA-Security-Plus/Module-07-Security-Operations/Reading.md) covers SIEM/SOAR at a broader level; [`08-Azure-AI-Engineer`](../../08-Azure-AI-Engineer/README.md) integrates with these same logs for AI service monitoring.
> - Practice: Practice Exam 2 + Final Mock have 7–9 questions from this module.

---

## 💬 Discussion — Socratic prompts

1. **Sentinel vs Splunk vs third-party SIEM.** Many orgs already pay for Splunk/QRadar/Elastic. Should they also use Sentinel? Make the case for and against; consider Microsoft-native integration vs vendor consolidation.
2. **Detection vs prevention.** A KQL alert is detection, not prevention. Walk through how Microsoft expects you to pair detections with **SOAR playbooks** for auto-response (block sign-in, revoke session, force password change). What's the trust-but-verify model?
3. **Identity Secure Score vs Microsoft Secure Score.** Microsoft ships both. How do they overlap, and which is the right metric to report to a board?
4. **Defender for Identity in 2026.** With most enterprises moving to cloud-only, does on-prem AD attack detection matter? Identify three scenarios where Defender for Identity still saves the day in 2026.
5. **The 17-minute MTTD claim.** Microsoft's internal CDOC has 17-min MTTD. What investments produce that number, and how does a 100-person company achieve something similar without a dedicated SOC?

---

## 📚 Further Reading (Optional)

- 📖 [Microsoft Entra monitoring overview](https://learn.microsoft.com/entra/identity/monitoring-health/overview-monitoring)
- 📖 [Sign-in logs schema](https://learn.microsoft.com/entra/identity/monitoring-health/concept-sign-ins)
- 📖 [Audit logs schema](https://learn.microsoft.com/entra/identity/monitoring-health/concept-audit-logs)
- 📖 [KQL quick reference](https://learn.microsoft.com/azure/data-explorer/kql-quick-reference)
- 📖 [Microsoft Sentinel documentation](https://learn.microsoft.com/azure/sentinel/)
- 📖 [Microsoft Sentinel content GitHub](https://github.com/Azure/Azure-Sentinel)
- 📖 [Microsoft Defender for Identity overview](https://learn.microsoft.com/defender-for-identity/what-is)
- 📖 [Identity Secure Score](https://learn.microsoft.com/entra/fundamentals/identity-secure-score)
- 📖 [Token theft detection and mitigation](https://learn.microsoft.com/entra/identity-platform/secure-least-privileged-access)
- 📖 Microsoft, *Microsoft Digital Defense Report 2024* — Microsoft's annual threat-data report.
