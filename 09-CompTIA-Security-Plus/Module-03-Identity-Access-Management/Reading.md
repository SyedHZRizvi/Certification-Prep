# Module 3: Identity & Access Management 🪪

> **Why this module matters:** Identity is the new perimeter. The Verizon DBIR consistently finds that ~80% of breaches involve credentials. Sec+ tests every authentication factor, federation protocol (SAML/OAuth/OIDC), access-control model (DAC/MAC/RBAC/ABAC), and privileged-access concept. This is one of the most heavily tested modules — about 12–15% of exam questions touch IAM directly.

---

## 🍕 A Story: The Hotel With Too Many Keys

Imagine you arrive at the Grand Hotel.

At the front desk you say "I'm Alex Patel, room 412." That's **identification** — just a claim.
The clerk asks for your ID *and* a credit card with the same name. You produce both. That's **authentication** — proving the claim with multiple factors.
Now the clerk programs your room key: it opens **412**, the **gym**, and the **pool deck**. It does NOT open the safe in the manager's office. That's **authorization** — what you can do once authenticated.
Every door has an electronic log: "Key 412 opened gym at 14:02." That's **accounting**.

Now imagine the hotel chain has 600 properties. Would you want to register at the front desk of every single one? No — you sign up with the loyalty program once, get a digital ID, and **every hotel in the chain trusts that ID**. That's **federation**.

Even better: you log into the hotel chain's website once, and from there you also get into the airline partner, the rental-car partner, and the dining-rewards portal — all without re-entering passwords. That's **SSO** (single sign-on).

Welcome to IAM. The rest of this module is exactly which protocol implements each piece.

---

## 🔐 Authentication Factors — The 5 (Yes, 5)

Sec+ recognizes **five** factors. Most people remember 3 — you need all 5.

| Factor | Means | Examples |
|--------|-------|----------|
| **Something you know** | Knowledge | Password, PIN, security questions |
| **Something you have** | Possession | Smartcard, hardware token (YubiKey), phone with TOTP app, RSA SecurID |
| **Something you are** | Inherence (biometric) | Fingerprint, face, iris, voice |
| **Something you do** | Behavior | Typing rhythm, signature dynamics, gait |
| **Somewhere you are** | Location | GPS, IP geolocation, network segment |

**MFA = Multi-Factor Authentication** = using **factors from different categories**. Password + PIN is NOT MFA (both are "know"). Password + YubiKey IS MFA (know + have).

🚨 **Trap on the exam:** Two passwords, or password + security question, are *not* MFA — same factor type. You need at least two *different* categories.

### Biometric quality metrics
| Metric | What | Want it... |
|--------|------|------------|
| **FAR** (False Acceptance Rate) | Wrong person accepted | LOW |
| **FRR** (False Rejection Rate) | Right person rejected | LOW |
| **CER** (Crossover Error Rate) | FAR = FRR sweet spot | LOW — the lower, the better the biometric |

---

## 📱 MFA Implementations

| Mechanism | What | Notes |
|-----------|------|-------|
| **TOTP** (Time-based OTP) | 6-digit code rotates every 30 sec | Google Authenticator, Authy — uses shared secret + time |
| **HOTP** (HMAC-based OTP) | Counter-based code | Older; codes don't expire on a clock |
| **SMS code** | Text message OTP | ⚠️ Phishable, SIM-swap-able. Avoid if possible. |
| **Push notification** | "Allow login?" on phone | Better, but vulnerable to **MFA fatigue / push bombing** |
| **Hardware token** | YubiKey, RSA SecurID | Strongest — physical possession; FIDO2 versions are phishing-resistant |
| **Smartcard + PIN** | CAC/PIV cards | Common in govt/military |
| **Biometric** | Touch ID, Windows Hello | Convenient + factor combination |
| **Passkeys** (FIDO2/WebAuthn) | Cryptographic key on device | Modern phishing-resistant — replaces passwords entirely |

🎯 **MFA Power phrase:** "Phishing-resistant MFA" = hardware tokens (FIDO2) or passkeys. SMS and push are *not* phishing-resistant.

---

## 🔑 Passwords — Policies & Managers

### Password Policy elements
- **Length** — most important factor (longer beats complex; 14+ recommended)
- **Complexity** — character classes (deprioritized in newer NIST guidance)
- **History** — can't reuse last N passwords
- **Reuse** — block reuse across systems (hard without a manager)
- **Expiration** — NIST 800-63B says **don't force periodic rotation** unless there's evidence of compromise
- **Lockout threshold** — N failed attempts → lock account
- **Lockout duration** — temporary vs admin reset

### Password Managers (1Password, Bitwarden, KeePass, LastPass)
- Generate + store unique strong passwords per site
- Auto-fill (reduces phishing — the manager checks the URL)
- Master password unlocks the vault; vault encrypted with AES-256 + key derived via PBKDF2/Argon2
- Org-tier: shared vaults, recovery codes, audit logs

🚨 **Common exam trap:** "Users should memorize 30 unique 16-character passwords" — wrong; the realistic answer is "deploy a password manager."

---

## 🤝 Federation — One Identity, Many Services

Federation = your identity from one trusted Identity Provider (IdP) is accepted by many Service Providers (SPs).

### Key Protocols

| Protocol | Purpose | Format | Where you see it |
|----------|---------|--------|------------------|
| **SAML 2.0** | Web SSO (older enterprise) | XML assertions | Okta → Salesforce, Workday |
| **OAuth 2.0** | **Authorization** (give app access to your data) | JSON, tokens | "Allow LinkedIn to access your Google Contacts" |
| **OIDC** (OpenID Connect) | **Authentication** layer on top of OAuth 2.0 | JWT id_token | "Log in with Google" buttons |
| **LDAP / LDAPS** | Directory lookup + bind auth | Binary on TCP 389 / 636 | Active Directory backend |
| **Kerberos** | Ticket-based mutual auth | Tickets (TGT, ST) | Windows domain logins |
| **RADIUS** | AAA for network access | UDP 1812/1813 | Wi-Fi 802.1X, VPN |
| **TACACS+** | AAA for device admin | TCP 49 | Cisco device login, separates AuthN/AuthZ |

### Important distinctions
- **SAML** = web SSO; XML-heavy; enterprise legacy
- **OAuth 2.0** = **AUTHORIZATION** (delegated access). NOT a login protocol on its own.
- **OIDC** = adds the AUTHENTICATION (id_token) on top of OAuth → modern "social login"
- **RADIUS** uses UDP and encrypts only the password
- **TACACS+** uses TCP and encrypts the whole payload — and **separates** AuthN from AuthZ

🎯 **Exam trap:** "Which protocol authenticates users for a web SSO?" — SAML *or* OIDC depending on context. If the question says "JWT" or "modern API/mobile," answer **OIDC**. If the question says "XML assertion" or "enterprise web app," answer **SAML**.

### Kerberos quick anatomy (Windows domain)
1. User logs in → sends request to **KDC** (Key Distribution Center)
2. KDC's **AS** (Authentication Service) issues a **TGT** (Ticket Granting Ticket)
3. To access a service, user presents TGT to **TGS** (Ticket Granting Service)
4. TGS issues a **Service Ticket** for that specific service
5. User presents Service Ticket to the service → access granted

**Kerberos depends on time sync** (5-minute default skew) — if a workstation's clock drifts, logins fail.

---

## 🌐 SSO vs Federation vs Just IdP

| Term | Means |
|------|-------|
| **SSO** | Log in once, access many systems within the same trust domain |
| **Federation** | Trust extends *across* organizations/domains |
| **IdP** | Identity Provider (Okta, Azure AD/Entra, Google Workspace) |
| **SP** | Service Provider (Salesforce, Slack, AWS) |
| **JIT Provisioning** | First-time login auto-creates the account |
| **SCIM** | Standard for provisioning/deprovisioning across systems |

---

## 🛡️ Access Control Models

You authenticate. Now what can you do? Five canonical models:

| Model | Acronym | Who decides | Best for |
|-------|---------|-------------|----------|
| **Discretionary** | DAC | **Object owner** assigns permissions | Windows file shares, classic Unix files |
| **Mandatory** | MAC | **System enforces** based on labels (clearance vs classification) | Military, classified data |
| **Role-Based** | RBAC | Permissions assigned to **roles**; users get roles | Most enterprises |
| **Rule-Based** | (rule-based) | If-then rules ("no SSH after 6pm") | Firewalls, time-based ACLs |
| **Attribute-Based** | ABAC | Decisions based on **attributes** of user, resource, environment | Cloud, dynamic policies (e.g., AWS IAM with conditions) |

🧠 **Memory hooks:**
- **DAC** = "Discretion of the owner"
- **MAC** = "Mandatory — system says so" (military)
- **RBAC** = "Role"
- **ABAC** = "Attributes" — most flexible, most complex
- **Rule-Based** = "Rules" (often time/IP/condition based)

### Worked example
> A US Government system requires Top Secret clearance to read a Top Secret document, regardless of who owns it. → **MAC**.
> A corporate file share where Maria can grant Tom access to her project folder. → **DAC**.
> A SaaS app where "Finance Manager" role automatically grants payroll access to new hires in that role. → **RBAC**.
> An AWS policy saying "allow S3 read only if MFA was used AND IP is in 10.0.0.0/8 AND object tag = `dept=eng`." → **ABAC**.

---

## 👑 Privileged Access Management (PAM)

Privileged accounts (domain admin, root, AWS root, DB sa) are the crown jewels — attackers focus here. PAM tools control and audit them.

### Core PAM capabilities
| Capability | What |
|-----------|------|
| **Password vaulting** | Privileged credentials stored encrypted; never given directly to humans |
| **Credential injection** | Vault logs the admin into the target without exposing the password |
| **Session recording** | Video/keystroke recording of every privileged session |
| **Just-in-Time (JIT) access** | Grant privilege on request, for a limited time window |
| **Ephemeral credentials** | Generate one-use, short-lived creds (AWS STS, SSH certs) |
| **Approval workflow** | Manager must approve each elevation |
| **Privileged account discovery** | Continuously find shadow admin accounts |
| **Behavior analytics** | Alert on anomalous admin behavior |

### Just-in-Time (JIT) vs Standing Privilege

```
Standing privilege:  [User has admin 24/7]  ← BAD (long blast radius)
JIT access:          [User requests]→[approved 60 min]→[auto-revoke]  ← GOOD
```

🎯 **Exam pattern:** *"Reduce blast radius of compromised admin credentials"* → answer includes **JIT, ephemeral credentials, session recording, MFA on elevation**.

---

## 🧬 Account Types & Lifecycle

| Account type | Notes |
|--------------|-------|
| **User account** | Day-to-day individual |
| **Privileged / admin account** | Elevated rights; separate from daily account |
| **Service account** | Used by apps/scripts; usually no human, no interactive login |
| **Shared / generic** | ⚠️ Discouraged — destroys accountability |
| **Guest** | Limited; often disabled by default |
| **Default** | Vendor accounts (root/admin) — must be renamed/disabled |

### Lifecycle (Joiner-Mover-Leaver)
1. **Provisioning** — create account, assign least-privilege role
2. **Moving** — role change → access review, revoke old, grant new
3. **Deprovisioning** — disable on day of separation; delete after retention window

🚨 **Top control failure:** Orphan accounts (left enabled after termination) — common cause of breach. **Mandatory periodic access reviews** catch them.

---

## 📊 Authorization & Authentication Reference Comparison

| Use case | Best protocol/model |
|----------|---------------------|
| Modern API/mobile login (Google sign-in) | **OIDC** (on top of OAuth 2.0) |
| Enterprise web SSO to legacy app | **SAML 2.0** |
| Cisco router admin login with central server | **TACACS+** |
| Corporate Wi-Fi 802.1X | **RADIUS / EAP** |
| Windows domain user logon | **Kerberos** |
| Look up "is user X in group Y?" | **LDAP/LDAPS** |
| "Allow this app to read my GitHub repos" | **OAuth 2.0** |
| Access a file based on document classification | **MAC** |
| HR hires a new Finance Manager → instant payroll access | **RBAC** |
| Engineer needs DB admin for 30 min to debug | **JIT via PAM** |

---

## 🔬 Scenario Walkthrough (PBQ-style)

> **Scenario:** A SOC analyst sees an account that was disabled 6 months ago suddenly authenticate successfully from a foreign IP, then immediately fail to access several internal apps. What identity controls failed and which would have prevented this?

**Walkthrough:**
1. **Failure 1 — Deprovisioning:** "Disabled" should mean *cannot* authenticate. The account was re-enabled somehow (admin mistake, automated re-sync from HR, or compromised admin tool). **Control needed:** automated, immediate deprovisioning via SCIM tied to HR system; periodic access review to catch reactivated/orphan accounts.
2. **Failure 2 — Conditional access / Adaptive Identity:** A login from a foreign IP for an account that hasn't authenticated in months should have triggered step-up MFA or block. **Control needed:** conditional access policies (geo, device posture, impossible travel).
3. **Failure 3 — Lateral movement:** Failing into other internal apps suggests the attacker has the credentials and is attempting to find what they have access to. **Control needed:** account-lockout policies + alerting on rapid sequential auth failures.
4. **PAM angle:** If this was a privileged account, PAM session recording would capture every keystroke; JIT would mean the credential was only valid for 60 minutes anyway.

A PBQ might present an event log and ask you to drag controls into the order they should have stopped the attack.

---

## ⚠️ Exam Traps & Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "MFA means at least 3 factors" | MFA = ≥2 factors from *different* categories. 2-factor (2FA) counts. |
| "Password + PIN is MFA" | NO — both are "something you know." |
| "OAuth is for login" | OAuth is for *authorization* (delegated access). OIDC is for login. |
| "SAML uses JWT" | SAML uses XML assertions. JWT is OIDC. |
| "Kerberos uses passwords on the wire" | Kerberos uses tickets; passwords never traverse the network after initial setup. |
| "RBAC is dynamic" | RBAC roles are pre-defined and static. **ABAC** is dynamic/attribute-driven. |
| "Service accounts should have interactive login" | NO — service accounts should be non-interactive, locked-down. |
| "Privileged users should always have admin" | NO — JIT + ephemeral credentials limit standing privilege. |
| "Annual access reviews are enough" | Most frameworks now expect quarterly; sensitive systems monthly. |
| "Biometric data is impossible to steal" | Biometrics CAN be spoofed/stolen — and you cannot rotate your fingerprint. |

---

## 🎓 Key Terms To Know (Add to Flashcards!)

| Term | Definition |
|------|------------|
| **MFA** | Multi-Factor Auth — 2+ factors from different categories |
| **2FA** | Two-Factor Auth (subset of MFA) |
| **TOTP / HOTP** | Time/HMAC-based one-time passwords |
| **FIDO2 / WebAuthn / Passkeys** | Modern phishing-resistant auth |
| **FAR / FRR / CER** | Biometric error metrics |
| **SAML** | XML-based web SSO |
| **OAuth 2.0** | Authorization (delegated access) |
| **OIDC** | Authentication on top of OAuth (id_token JWT) |
| **JWT** | JSON Web Token |
| **LDAP / LDAPS** | Directory protocol (389 / 636) |
| **Kerberos** | Ticket-based authentication (KDC, AS, TGS, TGT) |
| **RADIUS** | UDP 1812/1813 — network access AAA |
| **TACACS+** | TCP 49 — device admin AAA; separates AuthN/AuthZ |
| **IdP / SP** | Identity Provider / Service Provider |
| **SCIM** | System for Cross-domain Identity Management — provisioning standard |
| **JIT** | Just-in-Time access |
| **DAC / MAC / RBAC / ABAC / Rule-Based** | Access control models |
| **PAM** | Privileged Access Management |
| **Joiner-Mover-Leaver** | Account lifecycle |
| **Orphan account** | Active account with no current owner |

### Acronyms cheat-row (Module 3)
| Acronym | Meaning |
|---------|---------|
| AAA | Authentication, Authorization, Accounting |
| MFA / 2FA | Multi/Two Factor Authentication |
| TOTP / HOTP | Time/HMAC One-Time Password |
| FIDO2 / WebAuthn | Phishing-resistant standards |
| FAR / FRR / CER | Biometric metrics |
| SSO | Single Sign-On |
| SAML | Security Assertion Markup Language |
| OIDC | OpenID Connect |
| JWT | JSON Web Token |
| LDAP / LDAPS | Lightweight Directory Access (Secure) |
| KDC / AS / TGS / TGT | Kerberos components |
| RADIUS / TACACS+ | Network AAA protocols |
| SCIM | SCIM provisioning |
| IdP / SP | Identity/Service Provider |
| DAC / MAC / RBAC / ABAC | Access control models |
| PAM | Privileged Access Management |
| JIT | Just-In-Time |
| CAC / PIV | Common Access / Personal Identity Verification cards |

---

## ✅ Module 3 Summary

You now know:
- 🔐 The **5 authentication factors** and what makes MFA truly MFA
- 📱 Modern MFA implementations — TOTP, push, FIDO2, passkeys — and which are phishing-resistant
- 🤝 The federation protocol soup: **SAML, OAuth, OIDC, LDAP, Kerberos, RADIUS, TACACS+** and when each is used
- 🛡️ The 5 **access control models** (DAC, MAC, RBAC, ABAC, Rule-Based) with examples
- 👑 **PAM** — what it does, plus JIT and ephemeral credentials
- 🧬 Account types and the **Joiner-Mover-Leaver** lifecycle that prevents orphan accounts

**Next steps:**
1. 🎥 [Videos.md](./Videos.md) — Messer on SAML/OAuth is gold
2. ✏️ [Quiz.md](./Quiz.md) — 26 questions
3. 📋 [Cheat-Sheet.md](./Cheat-Sheet.md)
4. ➡️ [Module 4 — Threats & Threat Actors](../Module-04-Threats-Threat-Actors/Reading.md)

---

## 📚 Further Reading (Optional)

- 📖 [NIST SP 800-63B Digital Identity Guidelines — Authentication](https://pages.nist.gov/800-63-3/sp800-63b.html) — the authoritative password/MFA guidance
- 📖 [OWASP Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html)
- 📖 [Auth0: SAML vs OAuth vs OIDC](https://auth0.com/intro-to-iam/saml-vs-oauth-vs-oidc) — clear explainer
- 📖 [Microsoft Learn: Zero Trust + Conditional Access](https://learn.microsoft.com/en-us/azure/active-directory/conditional-access/overview)
