# 📋 Module 3 Cheat Sheet: Identity & Access Management

> One page. Print it. Tape it to your monitor.

---

## 🔐 5 Authentication Factors

| Factor | Examples |
|--------|----------|
| **Know** | Password, PIN, security Q |
| **Have** | YubiKey, smartcard, TOTP app, RSA token |
| **Are** | Fingerprint, face, iris, voice |
| **Do** | Typing rhythm, signature dynamics |
| **Where** | GPS, IP geolocation |

**MFA = 2+ factors from DIFFERENT categories.** Password + PIN ≠ MFA.

---

## 📱 MFA Strength Ladder

```
SMS / email           ← weakest (phishable, SIM-swap)
TOTP app
Push notification     ← vulnerable to MFA fatigue
FIDO2 / Passkey       ← phishing-resistant 🏆
Hardware token + PIN  ← strongest
```

---

## 🧬 Biometric Metrics

| | Want |
|---|------|
| **FAR** (False Accept) | LOW |
| **FRR** (False Reject) | LOW |
| **CER** (Crossover) | LOW (overall quality) |

---

## 🤝 Federation Protocols (MEMORIZE)

| Protocol | Format | Purpose | Where |
|----------|--------|---------|-------|
| **SAML 2.0** | XML | Web SSO | Enterprise legacy web apps |
| **OAuth 2.0** | JSON tokens | **Authorization** | Delegated API (Application Programming Interface) access |
| **OIDC** | JWT id_token | **Authentication on OAuth** | Modern login (mobile/API) |
| **LDAP (Lightweight Directory Access Protocol) / LDAPS** | Binary | Directory lookup | 389 / 636 |
| **Kerberos** | Tickets | Mutual auth | Windows domain |
| **RADIUS** | UDP (User Datagram Protocol) 1812/1813 | Network AAA (combined) | Wi-Fi, VPN (Virtual Private Network) |
| **TACACS+** | TCP (Transmission Control Protocol) 49 | Device admin AAA (separated) | Cisco mgmt |

🧠 *SAML = XML web SSO. OAuth = ACCESS. OIDC = LOGIN.*

---

## 🎟️ Kerberos in 60 seconds

```
User → AS (in KDC) → TGT
User + TGT → TGS → Service Ticket
User + Service Ticket → Service ✅
```
Needs **time sync** (≤5 min skew). Tickets, not passwords, traverse the wire.

---

## 🛡️ Access Control Models

| Model | Decision-maker |
|-------|----------------|
| **DAC** | Object owner (Unix/Windows files) |
| **MAC** | System enforces labels (military) |
| **RBAC (Role-Based Access Control)** | Permissions per role → users get roles (enterprise default) |
| **Rule-Based** | If-then rules (time, IP, etc.) |
| **ABAC (Attribute-Based Access Control)** | Attributes of user + resource + env (cloud, dynamic) |

🧠 **D**iscretion. **M**andatory. **R**ole. **A**ttribute. **Rule.**

---

## 👑 PAM Core Capabilities

- Password vaulting + credential injection
- Session recording (video/keystroke)
- **JIT (Just-In-Time) access**, request → approved 60 min → auto-revoke
- Ephemeral credentials (AWS (Amazon Web Services) STS, SSH (Secure Shell) certs)
- Approval workflows
- Privileged account discovery

---

## 🧬 Account Lifecycle (Joiner-Mover-Leaver)

| Phase | Action |
|-------|--------|
| Joiner | Provision least-privilege role (SCIM) |
| Mover | Access review on role change; revoke old |
| Leaver | Disable on day of separation; deprovision per process |

🚨 **Orphan account = active account with no current owner**, major audit finding.

---

## 🔑 Password Best Practice (per NIST 800-63B)

- Length > complexity (14+ characters)
- DO NOT force calendar-based rotation
- Rotate ONLY on suspected compromise
- Lockout after N failures
- Use a password manager
- MFA on everything important

---

## 🏆 Exam Power Phrases

- ✅ "Phishing-resistant MFA (FIDO2/passkey)"
- ✅ "Least privilege"
- ✅ "Just-in-Time access"
- ✅ "Periodic access review"
- ✅ "Separate privileged from regular accounts"
- ❌ "Shared admin account"
- ❌ "Service account with interactive login"
- ❌ "SMS as a second factor for high-value systems"

---

## ✏️ Quick Self-Check

1. List the 5 auth factors with an example each. ___
2. SAML / OAuth / OIDC, purpose of each? ___
3. RADIUS port + transport vs TACACS+ port + transport? ___
4. Which access control model fits "labels enforced by system"? ___
5. What does JIT access protect against? ___

---

➡️ [Module 4: Threats & Threat Actors](../Module-04-Threats-Threat-Actors/Reading.md)
