# ✏️ Module 3 Quiz: Authentication — MFA & Passwordless

> **Instructions:** Answer all 25 questions WITHOUT looking at the reading. Aim for 21/25 minimum before moving on.

---

## Questions

### Q1. Which of the following is PHISHING-RESISTANT? *(Remember)*
A. SMS-based MFA
B. Microsoft Authenticator push with number matching
C. FIDO2 security key
D. Voice call MFA

---

### Q2. Microsoft enabled which feature tenant-wide in February 2023 to combat MFA-fatigue push-bombing? *(Remember)*
A. Geographic location matching
B. Number matching in Authenticator
C. Biometric registration
D. Phone-only sign-in

---

### Q3. Which is the MODERN unified place to configure authentication methods? *(Remember)*
A. Per-user MFA settings (legacy portal)
B. SSPR registration policy
C. Authentication methods policy
D. AD FS

---

### Q4. Security Defaults and Conditional Access can be enabled together: *(Remember)*
A. Yes — they complement each other
B. No — they are mutually exclusive
C. Only in P2 tenants
D. Only after AD FS retirement

---

### Q5. A new admin joins. You want them to register FIDO2 keys without ever typing a password. The right tool is: *(Apply)*
A. Generate a Temporary Access Pass
B. Send them their initial password by email
C. Use their personal Microsoft account
D. Enable Authenticator push first

---

### Q6. Which Microsoft published authentication strength is the STRONGEST? *(Remember)*
A. Multifactor authentication
B. Passwordless MFA
C. Phishing-resistant MFA
D. Combined registration

---

### Q7. FIDO2 sign-in to Windows requires: *(Remember)*
A. Windows 7 SP1 or later
B. Windows 10 version 1903 or later
C. Windows Server 2008
D. Active Directory only (no Entra)

---

### Q8. AAGUID restriction lets you: *(Apply)*
A. Restrict FIDO2 keys to specific approved key models
B. Restrict sign-in to specific geographies
C. Limit which apps can use MFA
D. Limit user enrollment in SSPR

---

### Q9. Microsoft Authenticator's "push with number matching" mode is: *(Understand)*
A. Passwordless
B. Phishing-resistant
C. Multifactor authentication (MFA)
D. Single factor

---

### Q10. Microsoft Authenticator's "phone sign-in / passkey" mode is: *(Understand)*
A. Multifactor authentication only
B. Single factor
C. Passwordless
D. Cannot be used for sign-in

---

### Q11. Which method is recommended for highly regulated environments (FedRAMP High, DoD)? *(Apply)*
A. SMS MFA
B. Email OTP
C. Certificate-based authentication (CBA) with smart cards
D. Voice call MFA

---

### Q12. Combined registration in 2026 is: *(Remember)*
A. Optional, opt-in only
B. The default; legacy single-purpose flows being retired
C. Only available in P2
D. Available only to admins

---

### Q13. The "My Security Info" portal URL is: *(Remember)*
A. `https://portal.azure.com`
B. `https://aka.ms/mysecurityinfo`
C. `https://account.microsoft.com`
D. `https://entra.microsoft.com`

---

### Q14. A user accepts a malicious Authenticator push from an attacker. The single most effective defense Microsoft ships is: *(Apply)*
A. Disable Authenticator
B. Require number matching (mandatory since Feb 2023)
C. Enable Security Defaults
D. Increase password complexity

---

### Q15. **Yes/No** — Methods comparison. *(Understand)*

**S1:** Windows Hello for Business is portable across devices.
**S2:** FIDO2 keys are portable across devices.
**S3:** Certificate-based authentication requires AD FS.

A. Yes / Yes / Yes
B. No / Yes / No
C. No / No / Yes
D. Yes / No / Yes

---

### Q16. The DEFAULT lifetime of a Temporary Access Pass: *(Remember)*
A. 10 minutes
B. 60 minutes
C. 8 hours
D. 30 days

---

### Q17. The CISO wants to enforce phishing-resistant MFA for the Azure portal for admins. The right artifact is: *(Apply)*
A. Security Defaults
B. A Conditional Access policy with "Authentication strength = Phishing-resistant MFA"
C. Disable password sign-in tenant-wide
D. Enable Identity Protection only

---

### Q18. Modern Windows Hello for Business deployment for hybrid scenarios uses: *(Apply)*
A. Certificate trust with AD CS
B. Cloud Kerberos trust (recommended in 2026)
C. Key trust
D. Federation only

---

### Q19. Microsoft's deadline for retiring the legacy per-user MFA management portal: *(Remember)*
A. September 2024
B. September 2025
C. December 2026
D. Already retired

---

### Q20. **Yes/No** — Defaults & policies. *(Understand)*

**S1:** Security Defaults are free and enforce MFA on admins + block legacy auth.
**S2:** Number matching is optional and can be turned off by tenant admins.
**S3:** TAP usability requires the method to be enabled in the Authentication methods policy.

A. Yes / No / Yes
B. Yes / Yes / Yes
C. No / No / Yes
D. Yes / No / No

---

### Q21. **Order these steps** to roll out FIDO2 to a pilot group of IT admins. *(Apply)*

1. Enable FIDO2 + TAP in Authentication methods policy targeting `Admins-Pilot`
2. Generate TAPs for pilot admins (multi-use, 1 week)
3. Procure FIDO2 keys (2 per admin)
4. Create CA policy requiring Phishing-resistant MFA for admins, start in report-only

A. 1 → 2 → 3 → 4
B. 3 → 1 → 2 → 4
C. 1 → 3 → 2 → 4
D. 4 → 3 → 2 → 1

---

### Q22. Block legacy authentication FIRST because: *(Analyze)*
A. Microsoft requires it as a prerequisite
B. ~97% of credential-stuffing targets legacy protocols (POP/IMAP/SMTP AUTH) that bypass MFA
C. Legacy protocols are slow
D. They prevent users from registering MFA

---

### Q23. Helpdesk Administrator role + the user's password reset experience: *(Understand)*
A. Helpdesk Admin can reset passwords for any user including Global Admins
B. Helpdesk Admin can reset MFA methods directly
C. Helpdesk Admin can reset passwords for non-admins; CANNOT reset admin passwords
D. Helpdesk Admin cannot reset passwords at all

---

### Q24. To enforce a CA grant control of "Phishing-resistant MFA," the policy uses: *(Apply)*
A. Custom regex on user agent
B. Built-in or custom Authentication Strength
C. Identity Protection user risk
D. SSPR registration check

---

### Q25. **Yes/No** — Modern auth landscape. *(Evaluate)*

**S1:** SMS-based MFA is acceptable for Global Admins per Microsoft guidance.
**S2:** Authenticator's passkey / phone sign-in is passwordless but not phishing-resistant.
**S3:** Block legacy auth + Number matching are the two highest-leverage MFA controls Microsoft recommends before adopting passwordless.

A. Yes / Yes / Yes
B. No / Yes / Yes
C. No / No / Yes
D. Yes / No / Yes

---

## 🎯 Answers + Explanations

### Q1: **C. FIDO2 security key**
Origin-bound credentials defeat phishing. SMS / voice / push are all phishable.

### Q2: **B. Number matching in Authenticator**
Microsoft enforced number matching tenant-wide in Feb 2023 to combat MFA fatigue.

### Q3: **C. Authentication methods policy**
The unified modern surface. Per-user MFA + SSPR registration are being retired.

### Q4: **B. No — they are mutually exclusive**
Enable one or the other. Microsoft will not let you have both active.

### Q5: **A. Generate a Temporary Access Pass**
Textbook TAP scenario: bootstrap passwordless without ever knowing a password.

### Q6: **C. Phishing-resistant MFA**
Strength hierarchy: Single-factor → MFA → Passwordless MFA → Phishing-resistant MFA.

### Q7: **B. Windows 10 version 1903 or later**
FIDO2 sign-in to Windows requires 1903+. Browser-only on older Windows.

### Q8: **A. Restrict FIDO2 keys to specific approved key models**
AAGUID is the FIDO2 model identifier; restriction = allowlist of approved keys.

### Q9: **C. Multifactor authentication (MFA)**
Push (even with number matching) is MFA, not passwordless. The user still has a password.

### Q10: **C. Passwordless**
Passkey / phone sign-in uses cryptographic auth, no password. But not phishing-resistant.

### Q11: **C. Certificate-based authentication (CBA) with smart cards**
CBA + smart cards is the gold standard for regulated environments.

### Q12: **B. The default; legacy single-purpose flows being retired**
Combined registration has been default for years; new tenants always use it.

### Q13: **B. `https://aka.ms/mysecurityinfo`**
Users self-register methods here.

### Q14: **B. Require number matching (mandatory since Feb 2023)**
Number matching is the silver bullet against push-bombing.

### Q15: **B. No / Yes / No**
S1 no (Hello is device-bound). S2 yes (FIDO2 keys are portable). S3 no (Entra-native CBA replaces AD FS).

### Q16: **B. 60 minutes**
Default TAP lifetime is 60 minutes; range 10 min to 30 days.

### Q17: **B. A Conditional Access policy with "Authentication strength = Phishing-resistant MFA"**
Authentication Strengths in CA policies are the modern way to require specific strength.

### Q18: **B. Cloud Kerberos trust (recommended in 2026)**
Cloud Kerberos trust is Microsoft's current recommended hybrid WHFB model.

### Q19: **B. September 2025**
Microsoft announced Sept 2025 as legacy per-user MFA retirement.

### Q20: **A. Yes / No / Yes**
S1 yes (Security Defaults free + enforces both). S2 no (mandatory tenant-wide since Feb 2023). S3 yes (TAP must be enabled in methods policy to use).

### Q21: **B. 3 → 1 → 2 → 4**
Keys first (procurement is long lead time), then enable methods, then TAP, then CA in report-only.

### Q22: **B. ~97% of credential-stuffing targets legacy protocols (POP/IMAP/SMTP AUTH) that bypass MFA**
Microsoft published this stat; blocking legacy auth is the single highest-leverage action.

### Q23: **C. Helpdesk Admin can reset passwords for non-admins; CANNOT reset admin passwords**
Helpdesk Admin scope = non-admins only. Privileged Auth Admin needed for admin reset.

### Q24: **B. Built-in or custom Authentication Strength**
Modern way to enforce specific auth strength via CA.

### Q25: **C. No / Yes / Yes**
S1 no (Microsoft discourages SMS for admins). S2 yes. S3 yes.

---

## 📊 Score Yourself

- 24–25/25 → 🏆 Auth foundations locked in.
- 21–23/25 → ✅ Solid. Note misses; move on.
- 17–20/25 → ⚠️ Re-read the Methods Policy + FIDO2 sections.
- <17/25 → 🔁 Re-read the entire module before continuing.

---

## 🃏 Add To Your Flashcards

- Phishing-resistant = FIDO2 / Hello for Business / CBA
- Number matching mandatory since Feb 2023
- TAP default 60 min; range 10 min to 30 days
- Authentication methods policy = modern; per-user MFA retiring Sept 2025
- Security Defaults vs CA = mutually exclusive
- Cloud Kerberos trust = current Hybrid WHFB model
- AAGUID = FIDO2 key model identifier

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md) for one-page review, then [Module 4](../Module-04-Conditional-Access/Reading.md)
