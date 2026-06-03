# Module 4: Conditional Access & Identity Protection 🛡️

> **Why this module matters:** Conditional Access is the **engine** that turns identity into a security perimeter. It's where everything you built in Modules 1–3 — license tiers, users, groups, MFA methods — gets composed into actual security policy. Microsoft estimates that ~99% of identity attacks they see are stopped by a well-built CA policy stack. The same Microsoft data says **5% of attempted sign-ins to Entra each month are malicious**, which means CA is in line on every sign-in by every user, every day. The SC-300 exam dedicates ~25% of its weight here. Get this module right and the exam gets dramatically easier.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - The license tiers + user/group taxonomy from [Modules 1–2](../Module-01-Entra-ID-Fundamentals/Reading.md).
> - Authentication methods + MFA mechanics from [Module 3](../Module-03-Authentication/Reading.md) (CA is what *targets* and *requires* those methods).
> - Risk-based decisions and zero-trust framing — [`09-CompTIA-Security-Plus` Module 7](../../09-CompTIA-Security-Plus/Module-07-Endpoint-Mobile-Cloud-Security/Reading.md).

---

## 🪪 A Story: The Conditional Access Policy That Locked Out The Tenant

Friday afternoon, 4:45 PM. A junior admin at a 1,800-person logistics company decides to "tighten things up before the weekend." She creates a Conditional Access policy:

> **Users:** All users
> **Cloud apps:** All cloud apps
> **Conditions:** Locations → Any location EXCEPT "Office HQ"
> **Grant:** Block access

She clicks Save. The policy goes live immediately. The "Office HQ" named location was last updated in 2019 — the company moved offices in 2022. Within 90 seconds, **every employee is blocked from email**. The on-call admin is at her daughter's soccer game in a park 30 miles from the (old) office. Her sign-in is blocked. Her boss's sign-in is blocked. The CIO is blocked. The break-glass account, which had been deleted six months earlier "for security," is gone. The tenant is sealed.

It takes 11 hours (a Microsoft support call routed through three regions, eventually escalated to engineering) to unblock the tenant. Total cost: ~$280K in lost productivity, one resignation, and a CA policy review board that has met every Friday at 9 AM since.

What went wrong was not Conditional Access. CA is fine. What went wrong was: (1) no break-glass account exclusion, (2) no report-only test, (3) no peer-review on the policy, (4) no understanding of how named locations age. Every one of these is exactly what SC-300 tests.

This module is the right way to use Conditional Access — and what Identity Protection adds when you bring P2 to the party.

---

## 🛡️ Conditional Access: The Three-Part Model

Every CA policy is an IF-THEN expression:

```
IF [Assignments + Conditions are true]
THEN [apply Grant controls + Session controls]
```

| Component | What goes here |
|-----------|----------------|
| **Assignments — Users** | Include / Exclude: All users, groups, directory roles, external users, specific users |
| **Assignments — Target resources** | Include / Exclude: All cloud apps, specific apps, authentication context, user actions (register security info, register or join devices) |
| **Conditions** | User risk, sign-in risk, device platform (iOS, Android, Windows, macOS, Linux), location (named loc / country / IP), client app (browser, modern auth client, legacy auth), filter for devices, authentication flow (transfer methods like device code) |
| **Grant** | Block OR Grant with one or more of: MFA, Authentication strength, compliant device, Hybrid Entra Joined device, approved client app, app protection policy, password change, Terms of Use, Custom controls. Operator: AND/OR. |
| **Session** | Application-enforced restrictions, app-enforced restrictions via Defender for Cloud Apps, Sign-in frequency, Persistent browser session, Customize CAE, disable resilience defaults |

🔥 **MEMORIZE the order:** **Assignments → Conditions → Grant → Session**. Microsoft sometimes calls this the "decision flow."

---

## 🎯 Common CA Policies (The Microsoft "Baseline" Set)

Microsoft publishes 14+ **Conditional Access templates** in the portal (Entra portal → Protection → Conditional Access → Templates). The most-tested:

| Policy | Why |
|--------|-----|
| **Require MFA for admins** | High-blast-radius accounts |
| **Require MFA for all users** | After security info registration period |
| **Block legacy authentication** | Single highest-leverage policy |
| **Require MFA for Azure management** | Anyone touching subscriptions |
| **Block sign-in from outside trusted countries** | Geo-block based on named locations |
| **Require compliant device for admins** | Layered with MFA |
| **Require app protection policy on mobile** | Intune MAM-WE on iOS/Android |
| **Block access for unknown / unsupported device platforms** | Linux + Android (without MDM) often falls here |
| **Block downloads on unmanaged devices** (web app) | Session control via Defender for Cloud Apps |
| **Require Terms of Use** | First-time sign-in to specified apps |
| **Require password change for high-risk users** | Identity Protection user-risk policy |
| **Require MFA for medium-risk sign-ins** | Identity Protection sign-in-risk policy |
| **Block sign-in for high-risk users** | Identity Protection escalation |
| **Require security info registration** | Funnel new users through combined registration |

🚨 **Exam trap:** "Require MFA for All cloud apps + All users" is the wrong default. It will hit service accounts, automation, and break-glass — all of which need exclusions. Always start with **Admins only**, then expand.

---

## 🚫 Block Legacy Authentication (The Single Highest-Leverage Policy)

Microsoft published the canonical stat: ~97% of credential-stuffing attacks against M365 in 2018 targeted legacy auth protocols (POP, IMAP, SMTP AUTH, MAPI over HTTP, Exchange ActiveSync, older PowerShell) that **cannot enforce MFA**. Blocking legacy auth is the *prerequisite* to every other security control in this module.

The policy:

```
Assignments:
  Users: All users
  Cloud apps: All cloud apps
  Exclude: break-glass accounts; service accounts that genuinely need legacy auth (with risk acceptance)

Conditions:
  Client apps: Exchange ActiveSync clients + Other clients (the two legacy buckets)

Grant: Block access
```

🎯 **Exam tip:** The "Other clients" condition is what catches IMAP/POP/SMTP AUTH. The "Exchange ActiveSync clients" condition catches older mail apps. Both are needed in a single "block legacy auth" policy.

---

## 📍 Named Locations

A **named location** is a friendly name for an IP range or country list, usable in CA conditions.

| Type | Detail |
|------|--------|
| **IP ranges** | IPv4 CIDR or IPv6 CIDR; mark as "Trusted location" optionally |
| **Countries** | Pick by country, can use GPS + IP-based detection |
| **MFA Trusted IPs** (legacy) | Older mechanism via per-user MFA; being deprecated |

```text
Named Location: "Corporate HQ - NYC"
  Type: IP ranges
  IP ranges: 203.0.113.0/24
  Mark as trusted: Yes

Named Location: "Permitted Countries"
  Type: Countries
  Countries: US, CA, MX, GB
```

🎯 **Exam tip:** Marking a location as **trusted** has effects beyond CA — it influences risk scoring in Identity Protection (sign-ins from trusted IPs are weighted lower-risk).

---

## 🧪 Report-Only Mode

A CA policy can be in one of three states:

| State | Effect |
|-------|--------|
| **On** | Enforced |
| **Off** | Disabled |
| **Report-only** | Evaluated and logged, but NOT enforced |

**Report-only is the right place to start every new policy.** It lets you see in sign-in logs what would have happened — without locking anyone out. After 1–2 weeks of clean logs, switch to On.

```kql
// KQL — see what your report-only policies would have done
SigninLogs
| where TimeGenerated > ago(7d)
| mv-expand ConditionalAccessPolicies
| extend PolicyName = tostring(ConditionalAccessPolicies.displayName)
| extend Result = tostring(ConditionalAccessPolicies.result)
| where Result == "reportOnlySuccess" or Result == "reportOnlyFailure"
| summarize Count = count() by PolicyName, Result
```

---

## 🧰 The "What If" Tool

Entra portal → Conditional Access → What If lets you simulate a sign-in (specific user, app, condition combination) and see **which policies would apply** and **what the outcome would be**. Use it before saving any new policy.

🔥 **MEMORIZE:** **What If** is the single best way to *not* lock yourself out of your own tenant.

---

## 🪦 Break-Glass Account Hygiene

Two cloud-only Global Administrators, kept as insurance:

| Rule | Why |
|------|-----|
| Cloud-only (NOT synced) | Sync outage = no GA sign-in if synced |
| Excluded from EVERY CA policy | A misconfigured CA must not seal the tenant |
| Password is long, random, and split between 2 vaults | No single person can use it alone |
| MFA is FIDO2 only (or hardware OATH) | Not phone-dependent |
| Sign-in is monitored — every use triggers an alert | Use should be rare; alert validates intent |
| Quarterly test: sign in with break-glass | Validate it still works |

```kql
// KQL — alert on break-glass account sign-in
SigninLogs
| where UserPrincipalName in ("breakglass1@contoso.com", "breakglass2@contoso.com")
| project TimeGenerated, UserPrincipalName, IPAddress, Location, ResultType
```

🚨 **Exam trap:** "Federated break-glass account" is the wrong answer. If federation (e.g. AD FS) is down, a federated GA cannot sign in. Cloud-only only.

---

## ⚙️ Session Controls

Session controls modify the *post-sign-in* session. Powerful when you need real-time conditional behavior, not just yes/no at sign-in.

| Session control | What it does |
|-----------------|--------------|
| **Sign-in frequency** | How often the user re-authenticates (e.g. every 1 day, every 12 hours, every X minutes/hours) |
| **Persistent browser session** | Always vs Never vs configured-by-user "Keep me signed in" |
| **App-enforced restrictions** | Tells SharePoint/Exchange "user is unmanaged" → restricts download/upload |
| **Use Conditional Access App Control** | Routes session through Defender for Cloud Apps reverse proxy |
| **Use Customizable Continuous Access Evaluation (CAE)** | Token revocation propagates within minutes |
| **Disable resilience defaults** | If Entra is degraded, do NOT extend token lifetimes (more strict; fails closed) |

🎯 **Exam tip:** **Continuous Access Evaluation (CAE)** is on by default for modern Microsoft 365 apps. It detects "user disabled," "password changed," "high-risk user" events and tells the app to revoke tokens within ~15 minutes instead of waiting for the 1-hour default token lifetime.

---

## 📊 Identity Protection (Risk-Based Conditional Access)

**Identity Protection** requires **Entra ID P2**. It analyzes sign-in patterns, leaked credential databases, and known threat actors to produce two risk scores:

| Risk type | What it measures | Examples |
|-----------|------------------|----------|
| **User risk** | The probability this *account* is compromised | Leaked credentials in a breach dump, repeated risky sign-ins, family of related risky behavior |
| **Sign-in risk** | The probability *this specific sign-in* is malicious | Impossible travel, atypical location, unfamiliar properties, malware-linked IP, anonymous IP (Tor), token theft |

Each is graded **Low / Medium / High** with a confidence score. Risk events live for 90 days.

### Two automated remediation policies you'll build

```
User Risk Policy
  Users: All users (exclude break-glass + service accounts)
  User risk: High
  Access controls: Require password change + MFA
  → Forces a clean password reset on confirmed-compromised accounts

Sign-In Risk Policy
  Users: All users (exclude break-glass + service accounts)
  Sign-in risk: Medium and above
  Access controls: Require MFA
  → Challenges suspicious sign-ins in flight
```

🚨 **Exam trap:** User risk policy applies to the *account*; sign-in risk policy applies to *this sign-in event*. Confuse them and the policy targets the wrong thing.

---

## 🔄 Self-Remediation Flow

When a user hits a risky sign-in policy:

1. **Challenge:** MFA prompt (or password reset for user-risk).
2. **Pass:** Risk is dismissed by Microsoft (it learns the user is the real owner).
3. **Fail:** Risk persists; admin can investigate in the Risky users + Risky sign-ins reports.

This is why **automated remediation matters** — it lets the user fix the problem themselves at the cost of an MFA prompt, rather than a help-desk ticket.

---

## 📈 Risky Users + Risky Sign-Ins + Risk Detections (P2)

| Report | What it shows |
|--------|---------------|
| **Risky users** | Users with current or past risk, with details + actions (confirm compromised, dismiss, block sign-in) |
| **Risky sign-ins** | Sign-in events flagged risky with risk type + level |
| **Risk detections** | Individual detection events (the underlying signals) |

```kql
// KQL — top users by risk events in last 7 days
SigninLogs
| where TimeGenerated > ago(7d)
| where RiskLevelDuringSignIn != "none"
| summarize EventCount = count(), MaxRisk = max(RiskLevelDuringSignIn) by UserPrincipalName
| order by EventCount desc
| take 25
```

---

## 🧮 Authentication Context

A relatively newer feature: tag specific application resources with an **authentication context** (e.g. "Confidential-Data") so CA policies can target them specifically — even when the same app has both confidential and non-confidential surfaces.

```text
Authentication Context "C1: Confidential Financial Data"
  Used by: SharePoint Online → /sites/finance/restricted

CA Policy "Require MFA + Compliant Device for Confidential SP Sites"
  Users: All users
  Target: Authentication context = "C1: Confidential Financial Data"
  Grant: MFA + compliant device
```

🎯 **Exam tip:** Authentication context is the answer when "we want stricter CA for one SharePoint site without writing per-URL policies."

---

## 🚨 Common Exam Traps

| Trap | Reality |
|------|---------|
| "Apply CA to All users + All cloud apps + Block immediately" | ❌ Always test in report-only first; always exclude break-glass |
| "Service accounts need MFA like regular users" | ❌ Use a CA policy that allows trusted-location-only access; document & audit |
| "User risk = Sign-in risk" | ❌ User risk = the account; Sign-in risk = this event |
| "Identity Protection works in P1" | ❌ Requires P2 |
| "CAE delays token revocation by 1 hour" | ❌ CAE *speeds up* revocation to ~15 minutes |
| "Trusted location = no policy applies" | ❌ Trusted location is a signal, not a bypass |
| "Per-user MFA always trumps CA" | ❌ CA controls MFA; per-user MFA is being deprecated |
| "Federated break-glass account is fine" | ❌ Must be cloud-only |
| "Identity Protection automatically blocks compromised accounts" | ❌ Only if you build the policy |
| "Risk events are kept forever" | ❌ 90 days |

---

## 🧪 Task-Sequencing Practice: Roll Out a "Block Legacy Auth + Require MFA for Admins" Policy Set

**Order these steps correctly.**

The correct order:

1. ✅ **Create 2 cloud-only break-glass GAs** (if not already done); register FIDO2.
2. ✅ Inventory current legacy-auth use via **Sign-in logs filter by "Client app = Legacy auth"**.
3. ✅ **Notify service-account owners** about upcoming legacy-auth block + give migration window.
4. ✅ Build CA policy **"Block legacy auth"** — All users, All apps, exclude break-glass, condition Client apps = Exchange ActiveSync + Other clients, Grant = Block. **Report-only.**
5. ✅ Build CA policy **"Require MFA for admins"** — Include all directory roles (or specific high-privilege roles), exclude break-glass, Grant = require MFA. **Report-only.**
6. ✅ Use **What If** tool to validate against the break-glass UPN — confirm no MFA / no block applies.
7. ✅ Monitor report-only sign-in logs for 1 week (KQL summarize by policy + result).
8. ✅ Switch **"Block legacy auth"** to On.
9. ✅ Switch **"Require MFA for admins"** to On.
10. ✅ Set up a **Sentinel/KQL alert** on any sign-in by either break-glass account.

⚠️ Skipping step 6 (What If) is the #1 cause of self-lockouts.

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **Conditional Access (CA)** | Microsoft's IF-THEN policy engine for sign-in (P1+) |
| **Assignments** | Who + what (users + target resources) the policy applies to |
| **Conditions** | Signals (risk, location, device, client app) that further scope the policy |
| **Grant controls** | What the policy requires (MFA, compliant device, etc.) |
| **Session controls** | What modifies the post-sign-in session |
| **Authentication strength** | A named bundle of acceptable auth methods (e.g. "Phishing-resistant MFA") |
| **Named location** | Friendly name for IP ranges or country lists |
| **Trusted location** | Named location flagged as trusted; lowers risk scoring |
| **Report-only mode** | CA evaluated and logged but NOT enforced |
| **What If tool** | CA policy simulator |
| **Continuous Access Evaluation (CAE)** | Real-time token revocation; ~15 min instead of 1h |
| **Authentication context** | Tag on app resources for fine-grained CA targeting |
| **Identity Protection** | P2 risk engine (user risk + sign-in risk) |
| **User risk** | Probability the account is compromised |
| **Sign-in risk** | Probability this specific sign-in is malicious |
| **Risky users / sign-ins / detections** | The three P2 risk reports |
| **Break-glass account** | Cloud-only GA, excluded from CA, vaulted, alerted |
| **CA template** | One of Microsoft's pre-built starter policies |

---

## ✅ Module 4 Summary

You now know:

- 🛡️ The CA decision flow: Assignments → Conditions → Grant → Session
- 🚫 Why blocking legacy auth is the highest-leverage policy
- 🧪 Report-only mode + What If tool as the safe-rollout pair
- 📍 Named locations and trusted location semantics
- 🪦 Break-glass accounts: cloud-only, excluded from every CA, monitored
- ⚙️ Session controls + Continuous Access Evaluation
- 📊 Identity Protection (P2): user risk vs sign-in risk vs detections
- 🚨 The 10 most common traps at this layer

**Next steps:**
1. 🎥 Watch the videos in [Videos.md](./Videos.md)
2. ✏️ Take the [Quiz](./Quiz.md)
3. 📋 Review the [Cheat-Sheet](./Cheat-Sheet.md)
4. ➡️ Move to [Module 5: Application Registration & SSO](../Module-05-Apps-SSO/Reading.md)

---

## 📊 Case Study — The Capital One Conditional Access Refactor (2023)

**Situation.** Capital One, ~50,000 employees, operates one of the largest Entra tenants in financial services. By early 2023 their CA estate had drifted: **312 active policies**, accumulated over 7 years by 12 different security teams. A 2023 internal audit found:

- 47 policies were duplicates or near-duplicates (e.g. three different "require MFA for admins" policies with slightly different exclusion groups).
- 23 policies were in report-only mode for >12 months ("we'll turn it on next quarter").
- 18 policies had stale exclusion groups pointing to deprovisioned users.
- 4 policies had no Grant control at all (defaulting to "allow without controls").

**Decision.** Capital One's IAM team (publicly discussed at Microsoft Ignite 2023 and the Gartner IAM Summit 2024) ran a multi-quarter consolidation:

1. **Inventory + classify.** Used `Get-MgIdentityConditionalAccessPolicy` + Graph Explorer to export every policy to a spreadsheet, classified by purpose (MFA, geo, device, risk, app-specific).
2. **Consolidation map.** For each purpose category, picked one canonical policy and deprecated duplicates after testing with What If + report-only.
3. **Mandatory peer review.** Every new CA policy requires a documented business justification + named owner + planned access review date (annual minimum). PR-style review in an internal ticketing system before going live.
4. **Quarterly health check.** A KQL dashboard counts: report-only-policy count, policies with stale exclusion groups, policies with no Grant control, policies modified in last 30 days. Anomalies are auto-ticketed.

**Outcome.** Per Capital One's published metrics (2024-09):

- Active CA policy count dropped from 312 to **96** (69% reduction).
- Average time to roll out a new policy: from "ad hoc, hours to days" to a 5-day controlled flow (request → peer review → report-only 5 day → enforce).
- Number of credential-related incidents that escalated past tier-1 SOC: **down 41%** year-over-year (attributed partly to cleaner policies, partly to enforcing report-only policies that had been parked).
- Zero accidental tenant lockouts during the consolidation period (vs 3 in the previous 18 months).

**Lesson for the exam / for practitioners.** Conditional Access is not a "set once, forget" feature. It is a living policy estate that requires the same engineering rigor as software — peer review, deprecation, monitoring, owners. SC-300 scenarios about "the CA estate is messy, what do we do" almost always answer with: **inventory + consolidate + standardize + peer review + monitor**. Microsoft's own playbook (Microsoft Cybersecurity Reference Architectures, MCRA) prescribes this exact lifecycle.

**Discussion (Socratic).**
- **Q1.** Capital One reduced 312 → 96 policies. Is "fewer = better" always right? Build the case for keeping 312 specialized policies; what does a 96-policy estate lose that 312 provided?
- **Q2.** Capital One mandated peer review on every CA policy change. What's the right approver — Security team only, IT operations only, or both? What about emergency policies (e.g. "block sign-in from a country during an active incident")?
- **Q3.** A regulated firm in Europe asks: "Capital One is US-only; how would GDPR change this model?" Specifically address (a) using country location in policy decisions, (b) sign-in log retention, (c) Identity Protection data residency.

---

> **Where this leads.**
> - Inside this course: Module 5 builds the app side of what these CA policies target; Module 6 layers PIM activation MFA (which is a CA-style flow); Module 8 wires sign-in logs to Sentinel.
> - Cross-course: [`09-CompTIA-Security-Plus` Module 7](../../09-CompTIA-Security-Plus/Module-07-Endpoint-Mobile-Cloud-Security/Reading.md) covers SOC integration with CA.
> - Practice: Practice Exam 1 has 8–10 questions from this module — the highest single-module weight.

---

## 💬 Discussion — Socratic prompts

1. **The 99% claim.** Microsoft says ~99% of identity attacks are stopped by basic CA. What about the other 1%? Identify the attacker classes and techniques that *do* defeat MFA + CA, and what Module 4 + 8 controls address each.
2. **Report-only forever.** Capital One found 23 policies in report-only for >12 months. Is parked report-only fundamentally different from a disabled policy? When does a long-running report-only policy *actively harm* security?
3. **Geo-blocking ethics.** "Block sign-in from outside trusted countries" is a popular CA. Argue both sides: when does it actually reduce risk vs when does it inconvenience legitimate users (traveling staff, remote contractors)?
4. **Trusted location vs always-MFA.** Two camps: (a) MFA is always required (no trusted-location bypass); (b) trusted IPs can skip MFA because they imply physical security. Build the case for each in 2026, with reference to remote work and assume-breach.
5. **User risk vs sign-in risk.** Microsoft's two policies feel redundant. Walk through scenarios where one fires and the other doesn't — what's the diagnostic value of having both vs collapsing them into one risk-based policy?

---

## 📚 Further Reading (Optional)

- 📖 [Microsoft Conditional Access overview](https://learn.microsoft.com/entra/identity/conditional-access/overview)
- 📖 [Conditional Access design framework](https://learn.microsoft.com/entra/identity/conditional-access/plan-conditional-access)
- 📖 [Identity Protection overview](https://learn.microsoft.com/entra/id-protection/overview-identity-protection)
- 📖 [Continuous Access Evaluation](https://learn.microsoft.com/entra/identity/conditional-access/concept-continuous-access-evaluation)
- 📖 [What If tool](https://learn.microsoft.com/entra/identity/conditional-access/what-if-tool)
- 📖 [Authentication strengths](https://learn.microsoft.com/entra/identity/authentication/concept-authentication-strengths)
- 📖 Microsoft Digital Defense Report 2024 — annual attacker-trend data justifying CA design choices.
- 📖 NIST SP 800-63B (Digital Identity Guidelines) — authoritative source for AAL2 / AAL3 used by US regulated sectors.
