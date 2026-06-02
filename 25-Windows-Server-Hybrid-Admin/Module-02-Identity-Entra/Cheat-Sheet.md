# 📋 Module 2 Cheat Sheet: Identity & Entra ID Hybrid Integration

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 🌉 Sync Engine Decision Matrix

| Need | Use |
|------|-----|
| Hybrid Entra Join (device writeback) | **Entra Connect Sync** |
| PTA, Federation, complex attribute rules | **Entra Connect Sync** |
| Multi-disconnected-forest M&A scenario | **Entra Cloud Sync** |
| Lightweight HA on 2+ servers without SQL | **Entra Cloud Sync** |
| Pure cloud-first PHS deployment | **Entra Cloud Sync** |

🧠 **Default in 2026:** Cloud Sync unless you need a Connect-only feature.

---

## 🔐 Sign-in Method Comparison

| Method | On-prem dependency at sign-in | Best for | Notes |
|--------|-------------------------------|----------|-------|
| **PHS** ⭐ | None | New tenants, simplicity | Microsoft's recommended default |
| **PTA** | PTA Agents (need 3 min) | "Password never leaves on-prem" requirement | Outbound 443 only |
| **Federation (AD FS)** | AD FS farm + WAP | Custom MFA, third-party IdP | Being deprecated — migrate off |

🔥 PHS and PTA **can coexist** — PHS as fallback for PTA agent outages.

---

## 🚪 Seamless SSO (SSSO)

- Works with **PHS or PTA** (NOT federation)
- Backed by `AZUREADSSOACC$` computer account
- Domain-joined devices only — rotate the SSSO account password every **30 days**
- Browser must have `autologon.microsoftazuread-sso.com` in Intranet Zone

🧠 **Entra Joined devices** use **Primary Refresh Token (PRT)** for SSO, not SSSO.

---

## 🪪 Device Join States

| State | Where the identity lives | Use case |
|-------|--------------------------|----------|
| **Entra Registered** | Entra ID only (BYOD) | Personal devices, light management |
| **Entra Joined** | Entra ID only (cloud-native) | Cloud-first / remote-first orgs |
| **Hybrid Entra Joined** | AD **and** Entra ID | Org has on-prem investments |

Check state: `dsregcmd /status` (Windows 10/11).

---

## 🔑 Authentication Methods (Strongest → Weakest)

```
FIDO2 / Windows Hello / Passkeys  >  Authenticator push + number match  >  CBA  >  TAP  >  SMS / Voice  >  Password alone
```

🔥 Microsoft 2026 push: **passwordless** (FIDO2 + Hello + passkeys).

---

## 🏢 Entra DS vs Entra ID vs AD DS

| Property | AD DS | Entra DS | Entra ID |
|----------|-------|----------|----------|
| Protocols | LDAP, Kerberos, NTLM | LDAP, Kerberos, NTLM | OAuth, OIDC, SAML |
| DCs you manage | Yes | No (Microsoft) | None |
| Schema editable | Yes | No | No |
| Group Policy | Yes | Limited | No |
| Best for | On-prem everything | Legacy apps lifted to Azure | Cloud-native apps |

---

## 🌐 Cross-Tenant Access Settings (replaces legacy B2B)

- **Inbound** — what other tenants can do in yours
- **Outbound** — what yours can do in theirs
- **Tenant Restrictions** — block your users from signing into other tenants from corporate devices

---

## 🏆 Exam Power Phrases

When you see these, they're often **correct**:

- ✅ "Use Entra Cloud Sync for the disconnected forest M&A scenario"
- ✅ "PHS + Seamless SSO is Microsoft's recommended default"
- ✅ "Use Hybrid Entra Join for on-prem-investments orgs"
- ✅ "Continuous Access Evaluation revokes tokens near-real-time"
- ✅ "FIDO2 + Windows Hello for passwordless"
- ✅ "Migrate off AD FS"

Usually **wrong**:

- ❌ "Use Cloud Sync for Hybrid Entra Join"
- ❌ "PHS sends the plaintext password"
- ❌ "Federation is the best UX"
- ❌ "Entra Joined and Hybrid Entra Joined are the same"
- ❌ "Entra DS replaces Entra Connect"

---

## ⚠️ Anti-Patterns To Recognize

- ❌ One PTA agent (need 3 for HA)
- ❌ Federation when you have no genuine reason for it
- ❌ Not enabling PHS as fallback for PTA
- ❌ Mixing up Entra Joined vs Hybrid Entra Joined when the org still has on-prem GPOs
- ❌ Trying Hybrid Entra Join with Cloud Sync (use Connect Sync)

---

## 📐 One-Line Decision Matrix

| Need | Feature |
|------|---------|
| "Just got acquired; sync our forest into the parent tenant fast" | Cloud Sync (separate connector) |
| "Password never leaves on-prem (compliance)" | PTA (with PHS fallback) |
| "Smart-card / third-party MFA at sign-in" | Federation (or modern auth methods + CBA) |
| "Block users from personal Entra tenants on corp devices" | Cross-tenant access — Tenant Restrictions |
| "Legacy app needs LDAP in Azure, no DCs" | Entra Domain Services |
| "Need Conditional Access to react instantly to risk" | CAE (now default-on) |
| "Make sign-in 'click-free' on AD-joined laptops" | Seamless SSO with PHS or PTA |
| "BYOD with app-level SSO" | Entra Registered |
| "Cloud-only corporate laptop" | Entra Joined |
| "Org with on-prem AD apps + cloud apps on same device" | Hybrid Entra Joined |

---

## ✏️ Quick Self-Check

1. Cloud Sync vs Connect Sync — when each? ___
2. PHS hash chain (algorithm)? ___
3. SSSO computer account name + rotation cadence? ___
4. Three device join states and when each applies? ___
5. Why is CAE the key post-Storm-0558 control? ___

---

➡️ [Module 3: Networking, DNS & DHCP](../Module-03-Networking-DNS/Reading.md)
