# 📋 Module 3 Cheat Sheet: Authentication — MFA & Passwordless

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 🪜 Strength Hierarchy

```
WEAKEST                                            STRONGEST
─────────                                          ─────────
Single factor (password)
 → Multifactor (any MFA)
    → Passwordless MFA (Authenticator passkey, Hello)
       → Phishing-resistant MFA (FIDO2, Hello for Business, CBA)
```

---

## 🔐 Methods Comparison

| Method | MFA? | Passwordless? | Phishing-resistant? |
|--------|:----:|:-------------:|:-------------------:|
| Password | ❌ (1FA) | ❌ | ❌ |
| SMS / Voice | ✅ (weak) | ❌ | ❌ |
| Email OTP | ✅ (weak) | ❌ | ❌ |
| Authenticator push + number match | ✅ | ❌ | ❌ |
| Authenticator passkey / phone sign-in | ✅ | ✅ | ❌ |
| Hardware OATH token | ✅ | ❌ | ❌ |
| **FIDO2 security key** | ✅ | ✅ | ✅ |
| **Windows Hello for Business** | ✅ | ✅ | ✅ |
| **Certificate-based authentication** | ✅ | ✅ | ✅ |
| TAP | ✅ (time-bound) | ✅ (bootstrap) | ❌ |

---

## ⚙️ Where to Configure (THE Policy)

**Entra portal → Protection → Authentication methods → Policies**

Per method:

- Enable: On/Off
- Target: All users OR specific groups
- Configure: number matching, AAGUID restrictions, etc.

🚨 Per-user MFA portal & SSPR registration policy retiring **September 2025**.

---

## 🛡️ Security Defaults vs Conditional Access

| | Security Defaults | Conditional Access |
|---|------------------|--------------------|
| Cost | Free | **Requires P1** |
| Granularity | Tenant on/off | Per-user/app/condition |
| MFA on admins | ✅ | ✅ (you build) |
| Block legacy auth | ✅ | ✅ (you build) |
| Mutually exclusive | YES | YES |

---

## ⏱️ Temporary Access Pass (TAP)

| Setting | Default | Range |
|---------|---------|-------|
| Lifetime | 60 minutes | 10 min – 30 days |
| Length | 8 chars | 8–48 chars |
| Use type | One-time | One-time or multi-use |

**Use cases:**
- New hire bootstrap (no password ever set)
- Lost FIDO2 key replacement
- Re-registration after credential compromise

---

## 🔐 FIDO2 Quick Facts

- Hardware key (USB-A/C, NFC, BT, Lightning)
- WebAuthn / CTAP2 protocol
- Public-key crypto; origin-bound (phishing-resistant)
- AAGUID = key model identifier (allowlist for regulated)
- Windows sign-in needs **Windows 10 1903+**
- Browser support: Edge, Chrome, Firefox, Safari (modern)
- Per-user: register 2 keys (primary + backup) at `https://aka.ms/mysecurityinfo`

---

## 💻 Windows Hello for Business Deployment Models

| Model | When |
|-------|------|
| **Cloud Kerberos trust** | Modern hybrid (RECOMMENDED 2026) |
| Key trust | Older hybrid; needs Win Server 2016 KDC |
| Certificate trust | Legacy; needs AD CS |
| Cloud-only | Pure Entra-joined devices |

---

## 🪪 Combined Registration

- Single experience: register MFA + SSPR together
- DEFAULT for all new tenants
- Mandatory in 2026
- Surface: `https://aka.ms/mysecurityinfo`

---

## 🚦 Phishing-Resistant Rollout Checklist (Admin Pilot)

```
1. Inventory current admin MFA methods
2. Procure 2 FIDO2 keys per admin
3. Enable FIDO2 + TAP in Authentication methods policy
4. Generate TAPs (1 week, multi-use)
5. Ship keys + welcome packet
6. Combined-registration training
7. Admins register both keys
8. CA policy: Phishing-resistant MFA for Azure portal + Entra admin center
9. Report-only mode (1 week)
10. Enforce + disable SMS for admins
11. Exclude break-glass accounts
```

---

## 🏆 Exam Power Phrases

When you see these, they're often **correct**:

- ✅ "FIDO2 / Windows Hello / CBA = phishing-resistant"
- ✅ "Generate a Temporary Access Pass" (for passwordless bootstrap)
- ✅ "Number matching" (counter to push-bombing)
- ✅ "Authentication methods policy" (modern surface)
- ✅ "Block legacy auth first" (before MFA rollout)
- ✅ "Authentication strength = Phishing-resistant MFA" (in CA)

When you see these, often **wrong**:

- ❌ "SMS-based MFA is acceptable for admins"
- ❌ "Authenticator push is passwordless"
- ❌ "Security Defaults and CA both active"
- ❌ "Number matching is optional"
- ❌ "TAP works without enabling in methods policy"

---

## ⚠️ Anti-Patterns

- ❌ Enabling MFA without blocking legacy auth (attacker bypasses via IMAP)
- ❌ Mass rollout without TAP for users whose primary device isn't ready
- ❌ Mandatory FIDO2 with no backup key (one lost key = locked out)
- ❌ Long-lived multi-use TAP issued by unrestricted helpdesk role
- ❌ No CA exclusion for break-glass accounts → tenant lockout

---

## ✏️ Quick Self-Check

Cover the answers, recite:

1. Three phishing-resistant methods? ___
2. Default TAP lifetime? ___
3. Number matching mandatory since: ___
4. Legacy per-user MFA portal retired: ___
5. Combined registration URL: ___
6. Security Defaults + Conditional Access can both be on? Y/N ___

---

➡️ [Module 4: Conditional Access & Identity Protection](../Module-04-Conditional-Access/Reading.md)
