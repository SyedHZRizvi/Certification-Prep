# 📋 Module 4 Cheat Sheet: Conditional Access & Identity Protection

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 🛡️ The CA Decision Flow

```
ASSIGNMENTS                    CONDITIONS                  GRANT                       SESSION
───────────                    ──────────                  ─────                       ───────
Users (incl/excl)              User risk                   Block OR                    Sign-in frequency
Target resources               Sign-in risk                Grant + controls:           Persistent browser
  (apps / actions / auth ctx)  Device platform               MFA                       App-enforced restr.
                               Location                      Auth strength              CAS proxy (DCA)
                               Client app                    Compliant device          CAE
                               Filter for devices            Hybrid Entra join         Resilience defaults
                               Authentication flow           Approved client app
                                                             App protection policy
                                                             Password change
                                                             Terms of Use
```

---

## 🏆 The "Always Have These" Policies

| Policy | Why |
|--------|-----|
| **Block legacy auth** | Highest-leverage single policy |
| **Require MFA for all admins** | High-blast-radius accounts |
| **Require security info registration** | Funnel new users to combined registration |
| **Block sign-in for high-risk users** | Identity Protection P2 |
| **Require MFA for medium+ sign-in risk** | Identity Protection P2 |
| **Require password change for high user risk** | Identity Protection P2 |

---

## 📍 Named Locations

- **IP ranges** (IPv4/IPv6 CIDR), mark trusted to lower risk weight
- **Countries**, pick by ISO country code
- **MFA Trusted IPs** (legacy), being deprecated

---

## 🧪 Safe Rollout Pattern

```
1. Build policy in REPORT-ONLY mode
2. Validate with WHAT IF tool (use break-glass UPN!)
3. Monitor sign-in logs 1 week (KQL by policy/result)
4. Switch to ON
5. Continue monitoring
```

---

## 🪦 Break-Glass Accounts (CRITICAL)

| Rule | Why |
|------|-----|
| Cloud-only (NOT synced) | Sync outage protection |
| Excluded from EVERY CA policy | Misconfigured CA can't seal tenant |
| FIDO2 (or hardware OATH) MFA | No phone dependency |
| Password split between 2 vaults | No single person can use alone |
| Sign-in alert in Sentinel/KQL | Use is rare; alert validates |
| Quarterly test sign-in | Validate it still works |
| EXACTLY 2 accounts (Microsoft recommendation) | One can fail safely |

---

## ⚙️ Session Controls

| Control | When |
|---------|------|
| **Sign-in frequency** | Re-authentication cadence (hours/days) |
| **Persistent browser session** | "Keep me signed in" behavior |
| **App-enforced restrictions** | SharePoint/Exchange unmanaged-device download block |
| **Conditional Access App Control** | Defender for Cloud Apps reverse proxy |
| **Continuous Access Evaluation (CAE)** | ~15 min token revocation (default ON for modern apps) |
| **Resilience defaults** | Extend token TTL during Entra degradation (leave ON) |

---

## 📊 Identity Protection (P2)

| Concept | Detail |
|---------|--------|
| **User risk** | Account is compromised? (leaked creds, repeated risky behavior) |
| **Sign-in risk** | THIS sign-in is malicious? (impossible travel, anonymous IP, atypical) |
| **Risk levels** | Low / Medium / High |
| **Retention** | 90 days |
| **Self-remediation** | User passes MFA → risk dismissed; admin can intervene via Risky users report |

**Two canonical policies:**

```
USER RISK POLICY: High → Require password change + MFA
SIGN-IN RISK POLICY: Medium and above → Require MFA
```

---

## 🚨 Block Legacy Auth, The Policy

```
Users: All users
Exclude: break-glass + audited service-acct exemptions
Target resources: All cloud apps
Conditions → Client apps:
  Exchange ActiveSync clients ✅
  Other clients ✅
Grant: Block access
State: Report-only → On
```

---

## 🧮 Authentication Context

Use when **fine-grained per-resource policy** is needed:

```
Auth Context "C1" → Tag SharePoint Finance site
CA Policy: Auth Context = C1 → Require MFA + compliant device
```

---

## 🏆 Exam Power Phrases

When you see these, they're often **correct**:

- ✅ "Start in Report-only"
- ✅ "Validate with What If tool"
- ✅ "Exclude break-glass accounts"
- ✅ "Authentication strength = Phishing-resistant MFA"
- ✅ "Identity Protection user-risk policy with password change"
- ✅ "Block legacy auth as prerequisite"

When you see these, often **wrong**:

- ❌ "Security Defaults + CA together"
- ❌ "Federated break-glass account"
- ❌ "Apply to All users + All apps immediately"
- ❌ "Per-user MFA overrides CA"
- ❌ "Trusted location bypasses all CA"
- ❌ "Identity Protection auto-blocks without policy"

---

## ⚠️ Anti-Patterns

- ❌ Zero break-glass accounts in the tenant
- ❌ Break-glass account using phone-based MFA
- ❌ CA policy with no Grant control (silently allows)
- ❌ Long-running report-only policies (never enforced)
- ❌ Geo-block with stale country list
- ❌ Skipping What If on every new policy

---

## ✏️ Quick Self-Check

Cover the answers, recite:

1. CA = which license? ___ Identity Protection = ___?
2. The three CA states: ___, ___, ___
3. Break-glass MUST be: ___, ___, ___
4. User risk vs sign-in risk: ___ vs ___
5. CAE latency: ___ minutes
6. Risk event retention: ___ days

---

➡️ [Module 5: Application Registration & SSO](../Module-05-Apps-SSO/Reading.md)
