# ✏️ Module 3 Quiz: Identity & Access Management

> **Instructions:** Answer all 26 questions WITHOUT looking at the reading.
> Aim for 22/26 minimum.

---

## Questions

### Q1. A user logs in with a password and a fingerprint. This is:
A. Single-factor (both are "you know")
B. Two-factor (you know + you are)
C. Two-factor (both are "you have")
D. Not authentication, only identification

---

### Q2. Which of the following is NOT a standard authentication factor recognized by Sec+?
A. Something you know
B. Something you have
C. Something you are
D. Something you remember

---

### Q3. Which biometric metric do you want to be the LOWEST?
A. FAR (False Acceptance Rate)
B. FRR (False Rejection Rate)
C. CER (Crossover Error Rate)
D. All of the above

---

### Q4. TOTP differs from HOTP in that:
A. TOTP is counter-based; HOTP is time-based
B. TOTP rotates on a clock (typically 30 sec); HOTP increments per-use
C. TOTP requires a hardware token; HOTP does not
D. TOTP is symmetric; HOTP is asymmetric

---

### Q5. Which MFA method is considered PHISHING-RESISTANT?
A. SMS code
B. Push notification with simple Approve/Deny
C. FIDO2 / WebAuthn hardware token (passkey)
D. Email magic link

---

### Q6. SAML uses what data format for assertions?
A. JSON
B. JWT
C. XML
D. CBOR

---

### Q7. OAuth 2.0 is primarily used for:
A. Authentication (logging users in)
B. Authorization (delegating access to a resource)
C. Identity provisioning
D. Encrypting cookies

---

### Q8. "Log in with Google" buttons on a third-party site typically use:
A. Pure SAML
B. OAuth 2.0 with OIDC on top
C. LDAP
D. Kerberos

---

### Q9. Kerberos requires what infrastructure assumption to be true within ~5 minutes?
A. Single domain
B. Time synchronization across hosts
C. IPv6
D. Direct internet access

---

### Q10. Which protocol uses TCP 49 and separates authentication from authorization, common for network device admin?
A. RADIUS
B. TACACS+
C. LDAP
D. Kerberos

---

### Q11. RADIUS by default uses what transport and ports?
A. TCP 49
B. UDP 1812 (auth) and 1813 (accounting)
C. TCP 443
D. UDP 514

---

### Q12. The Ticket Granting Ticket (TGT) in Kerberos is issued by:
A. TGS
B. Service Provider
C. AS (Authentication Service) within the KDC
D. The end service

---

### Q13. A US military system requires Top Secret clearance to read a Top Secret document — owners CANNOT override. This describes:
A. DAC
B. MAC
C. RBAC
D. ABAC

---

### Q14. Maria owns a folder and can grant Tom read access. This is:
A. DAC
B. MAC
C. RBAC
D. Rule-Based

---

### Q15. An access decision based on user.department == "Finance" AND time IS business-hours AND device.compliant == true is:
A. DAC
B. MAC
C. RBAC
D. ABAC

---

### Q16. Which access control model is BEST for a typical enterprise where access is assigned by job function?
A. DAC
B. MAC
C. RBAC
D. Rule-Based only

---

### Q17. Just-In-Time (JIT) privileged access reduces risk MOST by:
A. Encrypting admin passwords
B. Limiting the time window during which standing privilege exists
C. Increasing audit log volume
D. Making admins use biometrics

---

### Q18. Which of these is a typical PAM capability?
A. Issuing TLS certificates to web servers
B. Vaulting privileged passwords, injecting them into sessions, and recording the session
C. Patching workstations on a schedule
D. Translating SAML to OAuth

---

### Q19. A shared admin account used by 5 sysadmins is a problem PRIMARILY because:
A. It violates encryption policies
B. It destroys accountability — you can't tell who did what
C. It cannot be MFA-protected
D. Vendor licenses prohibit it

---

### Q20. SCIM is used to:
A. Sign JWTs
B. Provision and deprovision identities across systems automatically
C. Replace SAML
D. Enforce RBAC at runtime

---

### Q21. Which is the MOST recommended action when an employee is terminated?
A. Wait 30 days then delete the account
B. Disable the account immediately, preserve data per retention policy, then deprovision per process
C. Email the password to HR
D. Convert to a shared account

---

### Q22. NIST 800-63B's current guidance on periodic password rotation is:
A. Force rotation every 30 days
B. Force rotation every 90 days
C. Do NOT force periodic rotation absent evidence of compromise
D. Force rotation weekly for admins

---

### Q23. An attacker is bombarding a user with login push prompts hoping they approve one by mistake. This attack is:
A. Pass-the-hash
B. MFA fatigue (push bombing)
C. Kerberoasting
D. Credential stuffing

---

### Q24. LDAPS uses what port?
A. 389
B. 443
C. 636
D. 1812

---

### Q25 (Scenario). A new SaaS app must integrate with the enterprise IdP. The app supports modern token-based login, mobile clients, and exposes APIs. The BEST protocol choice is:
A. LDAP
B. SAML 2.0 only
C. OIDC (on top of OAuth 2.0)
D. RADIUS

---

### Q26 (Scenario). A SOC sees a dormant account (disabled 6 months ago) successfully authenticate from a foreign IP. The MOST likely failed control is:
A. Encryption at rest
B. Deprovisioning / access review (the account should not be authenticatable)
C. CRL distribution
D. TLS cipher suite policy

---

## 🎯 Answers + Explanations

### Q1: **B. Two-factor (you know + you are)**
Password = know. Fingerprint = are. Two different categories → MFA/2FA.

### Q2: **D. Something you remember**
Sec+ recognizes: know, have, are, do, where you are. "Remember" is not a separate factor (it overlaps "know").

### Q3: **D. All of the above**
FAR low (don't accept wrong people), FRR low (don't reject right people), CER low (good biometric overall). All want to be low.

### Q4: **B. TOTP rotates on a clock**
Time-based vs HMAC-counter-based.

### Q5: **C. FIDO2 / WebAuthn**
Hardware tokens with origin binding don't release credentials to the wrong site. SMS/push/email are all phishable.

### Q6: **C. XML**
SAML = Security Assertion Markup Language. XML assertions.

### Q7: **B. Authorization**
OAuth = delegated access. Use OIDC on top for authentication.

### Q8: **B. OAuth 2.0 with OIDC on top**
OIDC provides the id_token for the actual login.

### Q9: **B. Time synchronization**
Kerberos tickets have time-limited validity; default skew tolerance is ~5 minutes. Clock drift → auth failure.

### Q10: **B. TACACS+**
TCP 49. Cisco-favored. Separates AuthN/AuthZ/Accounting — RADIUS combines them.

### Q11: **B. UDP 1812 and 1813**
1812 for authentication, 1813 for accounting. (Old ports 1645/1646 sometimes also seen.)

### Q12: **C. AS within the KDC**
Authentication Service issues the TGT. Then user presents TGT to TGS for service tickets.

### Q13: **B. MAC**
Mandatory — system enforces based on clearance vs classification labels. Owner cannot override.

### Q14: **A. DAC**
Discretionary — owner decides who can access. Classic Unix/Windows file permissions.

### Q15: **D. ABAC**
Decisions based on dynamic attributes of user, environment, resource.

### Q16: **C. RBAC**
Standard for enterprises — roles map to job functions.

### Q17: **B. Limiting the time window of standing privilege**
JIT collapses the window an attacker can use stolen privileged credentials.

### Q18: **B. Vaulting + injection + session recording**
The core PAM trio.

### Q19: **B. Destroys accountability**
No audit trail can identify "which sysadmin did the bad thing." Hence the universal "named accounts only" rule.

### Q20: **B. Provision/deprovision identities across systems**
SCIM = System for Cross-domain Identity Management — push user changes from IdP to apps.

### Q21: **B. Disable immediately + retention + deprovision**
Immediate disable stops authentication; preserve data for retention/legal; deprovision per process. Waiting or sharing is bad.

### Q22: **C. Do NOT force periodic rotation absent compromise**
NIST 800-63B retired calendar-based rotation in 2017. Force rotation on detected compromise instead.

### Q23: **B. MFA fatigue (push bombing)**
Attacker has the password, hopes user clicks Allow on a 3 a.m. push. Solution: number-matching push, FIDO2.

### Q24: **C. 636**
LDAPS = LDAP over TLS = TCP 636. (LDAP itself = 389.)

### Q25: **C. OIDC**
Modern token-based, mobile-friendly, JSON. SAML works for browser-only legacy; OIDC fits modern APIs/mobile.

### Q26: **B. Deprovisioning / access review**
A disabled account should not be able to authenticate. Either it was re-enabled in error or the deprovisioning process is incomplete. Periodic access reviews catch this.

---

## 📊 Score Yourself

- 25–26/26 → 🏆 IAM mastered.
- 22–24/26 → ✅ Note the gaps (probably protocol details), review, move on.
- 18–21/26 → ⚠️ Re-read the federation + access-control sections.
- <18/26 → 🔁 Restart Module 3.

---

## 🃏 Add To Your Flashcards

- 5 authentication factors (1 card each)
- TOTP vs HOTP
- FAR / FRR / CER definitions
- SAML vs OAuth vs OIDC (data format, purpose)
- RADIUS vs TACACS+ (transport, ports, encryption scope)
- DAC / MAC / RBAC / ABAC / Rule-Based with one example each
- PAM capabilities (vault, injection, session recording, JIT)
- Joiner-Mover-Leaver process

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 4 — Threats & Threat Actors](../Module-04-Threats-Threat-Actors/Reading.md)
