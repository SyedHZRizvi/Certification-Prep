# 🏆 Final Mock Exam, SC-300

> **Conditions:** Set a **100-minute timer**. **50 questions** (matches the real exam's typical mid-range count and time limit).
> **Pass mark:** 35/50 (700/1000 ≈ 70%, matching the real exam).
> Treat it like the real exam: no notes, no Google, no breaks.
> Take this 2–3 days before your scheduled exam.

---

## 📝 Questions

### 1. A 4,200-employee health system buys Microsoft 365 E5. What Entra ID tier do they have?
A. Free
B. P1 only
C. P2 (including Identity Protection + PIM + entitlement management)
D. External ID

### 2. Conditional Access requires which minimum license?
A. Free
B. P1
C. P2
D. M365 Apps

### 3. Identity Protection requires which minimum license?
A. Free
B. P1
C. P2
D. External ID

### 4. A B2B guest from `partner.com` invited into `contoso` has the UPN:
A. `alice@partner.com`
B. `alice_partner.com#EXT#@contoso.onmicrosoft.com`
C. `alice@contoso.com (guest)`
D. `partner.alice@contoso.com`

### 5. Which attribute MUST be set on a user before most M365/Entra licenses can be assigned?
A. JobTitle
B. Department
C. UsageLocation
D. MailNickname

### 6. Dynamic groups REQUIRE which minimum license?
A. Free
B. P1
C. P2
D. Entra ID Governance

### 7. Lifecycle Workflows require:
A. Free
B. P1
C. P2 (alone)
D. Microsoft Entra ID Governance (add-on SKU)

### 8. The right artifact for "every quarter, ask managers to confirm direct reports' group membership; auto-remove if no response":
A. PIM activation policy
B. Access review (quarterly, manager reviewer, auto-Remove)
C. Lifecycle Workflow
D. Custom Conditional Access

### 9. Which Microsoft-published authentication strength is the STRONGEST?
A. Multifactor authentication
B. Passwordless MFA
C. Phishing-resistant MFA
D. Combined registration

### 10. Microsoft enabled which feature tenant-wide in February 2023 to combat MFA-fatigue push-bombing?
A. Geographic location matching
B. Number matching in Authenticator
C. Biometric registration
D. Phone-only sign-in

### 11. The DEFAULT lifetime of a Temporary Access Pass:
A. 10 minutes
B. 60 minutes
C. 8 hours
D. 30 days

### 12. Security Defaults and Conditional Access can be enabled together:
A. Yes, they complement each other
B. No, they are mutually exclusive
C. Only in P2 tenants
D. Only after AD FS retirement

### 13. The single highest-leverage Conditional Access policy Microsoft recommends:
A. Require MFA for all users
B. Require compliant device for everyone
C. Block legacy authentication
D. Block sign-in from anonymous IPs

### 14. Break-glass accounts MUST be:
A. Federated to AD FS for HA
B. Cloud-only, excluded from every CA policy, monitored
C. Created automatically by Microsoft
D. Synced from on-prem

### 15. **User risk** in Identity Protection measures:
A. The probability THIS specific sign-in is malicious
B. The probability the account itself is compromised
C. The number of devices the user has
D. The MFA registration completeness

### 16. Continuous Access Evaluation (CAE) reduces token revocation latency from default 1 hour to:
A. Real-time (sub-second)
B. ~15 minutes
C. 30 minutes
D. 6 hours

### 17. The App Registration object is BEST described as:
A. The local instance of an app in a tenant
B. The application's definition / manifest in the home tenant
C. The OAuth client secret
D. The reply URL

### 18. The Enterprise Application is BEST described as:
A. The application's manifest in the home tenant
B. The local instance / service principal of an app in this tenant
C. A SAML token
D. A user account

### 19. Which is TRUE about OAuth 2.0 and OIDC?
A. OAuth 2.0 is the modern sign-in protocol
B. OIDC is an authorization framework, not for sign-in
C. OAuth 2.0 is authorization; OIDC is sign-in built on top of OAuth 2.0
D. They are the same thing

### 20. Most legacy enterprise SaaS apps (Salesforce, Workday) use:
A. OIDC
B. SAML 2.0
C. WS-Federation
D. SCIM

### 21. Microsoft Entra Application Proxy:
A. Requires opening inbound firewall ports
B. Publishes on-prem web apps via an outbound-only connector
C. Provides network-level VPN access
D. Requires Entra ID Free

### 22. The single most-tested setting that defeats the "illicit consent" OAuth phishing attack is:
A. Enable Identity Protection
B. Set User consent settings to "Do not allow user consent" + enable Admin consent workflow
C. Disable SAML
D. Enable Security Defaults

### 23. Application permissions (vs delegated):
A. Act on behalf of a signed-in user
B. Act as the app itself, no user context, ALWAYS admin-consent-only
C. Are weaker than delegated
D. Are user-consentable

### 24. Privileged Identity Management (PIM) requires:
A. Free
B. P1
C. P2
D. M365 Apps

### 25. An "eligible" PIM assignment means:
A. The role is always active
B. The user CAN activate the role JIT but it is inactive otherwise
C. The user is on a waitlist
D. The role is locked

### 26. A user cannot self-approve their own PIM activation because:
A. It's a Microsoft policy enforced server-side
B. The user must have written permission from HR
C. PIM only allows self-approval in P1
D. Self-approval is allowed if MFA passes

### 27. Default max PIM activation duration for an Entra role:
A. 1 hour
B. 8 hours
C. 24 hours
D. 72 hours

### 28. Break-glass GA accounts in a PIM-managed tenant should be:
A. PIM eligible like everyone else
B. Active permanent and EXCLUDED from PIM (separate insurance)
C. Time-bound active for 24h
D. Federated to AD FS

### 29. Microsoft's recommended max number of standing permanent Global Admins (excluding break-glass):
A. 0 (use PIM eligible-only)
B. 50
C. 100
D. 250

### 30. The MODERN, lighter-weight hybrid sync product Microsoft recommends for new deployments is:
A. Microsoft Entra Connect (Sync)
B. Microsoft Entra Cloud Sync
C. Active Directory Federation Services (AD FS)
D. Microsoft Identity Manager (MIM)

### 31. Which auth topology is Microsoft's preferred recommendation in 2026?
A. Federation with AD FS
B. Pass-Through Authentication only
C. Password Hash Sync (PHS) + Seamless SSO
D. SAML-only direct federation

### 32. Password Hash Sync (PHS) sends:
A. The plaintext password to Entra
B. A hash of a hash, salted, iterated 1,000 times (cannot be reversed)
C. An encrypted password with Microsoft's public key
D. Only the password's length

### 33. Cloud Sync does NOT support:
A. Password Hash Sync
B. Seamless SSO
C. Federation and Pass-Through Authentication
D. Multi-forest sync without trust

### 34. Hybrid Entra Joined (HEJ) device is:
A. Cloud-only (no AD)
B. AD-joined AND registered in Entra ID
C. AD-joined only
D. Entra-joined only

### 35. Default retention of Entra sign-in logs for a P1 tenant:
A. 7 days
B. 30 days
C. 90 days
D. 1 year

### 36. To retain Entra logs beyond 30 days for KQL querying, you should:
A. Buy Entra ID P2
B. Configure Diagnostic Settings → forward to a Log Analytics workspace
C. Enable Security Defaults
D. Turn on Identity Protection

### 37. The right KQL table for "user consented to an app" is:
A. SigninLogs
B. AuditLogs
C. ProvisioningLogs
D. RiskyUsers

### 38. Microsoft Defender for Identity (formerly Azure ATP) detects:
A. Cloud sign-in risk in Entra ID
B. On-prem AD attacks (Golden Ticket, DCSync, lateral movement)
C. Email phishing
D. Endpoint malware

### 39. Token theft attack class is best defended against by:
A. More frequent MFA prompts
B. Continuous Access Evaluation (CAE) + Token Protection + risk-based CA
C. Disabling Entra ID
D. Federated AD FS

### 40. **Yes/No**, Mark each statement.

**S1:** Conditional Access requires Entra ID P1.
**S2:** Identity Protection requires Entra ID P2.
**S3:** Lifecycle Workflows are included in Entra ID P2 by default.

A. Yes / Yes / Yes
B. Yes / Yes / No
C. No / Yes / No
D. Yes / No / No

### 41. **Yes/No**, Break-glass.

**S1:** Break-glass accounts should use phone-based MFA for portability.
**S2:** Break-glass accounts must be excluded from EVERY CA policy.
**S3:** Two break-glass accounts is the Microsoft-recommended minimum count.

A. Yes / Yes / Yes
B. No / Yes / Yes
C. No / No / Yes
D. Yes / No / No

### 42. **Yes/No**, PIM mechanics.

**S1:** An eligible user must complete MFA before activating most Entra roles.
**S2:** PIM activation events are written to Entra audit logs.
**S3:** PIM for Groups is for managing security group ownership, not membership.

A. Yes / Yes / No
B. No / Yes / No
C. Yes / No / Yes
D. Yes / Yes / Yes

### 43. **Yes/No**, Hybrid identity.

**S1:** Cloud Sync supports multi-forest without trust between forests.
**S2:** Federation is being deprecated in favor of PHS + Seamless SSO.
**S3:** Pass-Through Authentication (PTA) is supported by Cloud Sync.

A. Yes / Yes / Yes
B. Yes / Yes / No
C. No / Yes / Yes
D. Yes / No / No

### 44. **Order these steps** to roll out FIDO2 to a pilot group of IT admins.

1. Enable FIDO2 + TAP in Authentication methods policy targeting `Admins-Pilot`
2. Generate TAPs for pilot admins (multi-use, 1 week)
3. Procure FIDO2 keys (2 per admin)
4. Create CA policy requiring Phishing-resistant MFA for admins, start in report-only

A. 1 → 2 → 3 → 4
B. 3 → 1 → 2 → 4
C. 1 → 3 → 2 → 4
D. 4 → 3 → 2 → 1

### 45. **Order these steps** to onboard a Workday SAML SSO + provisioning integration.

1. Add Workday from App Gallery
2. Configure SAML SSO (Identifier, Reply URL, attributes)
3. Set Assignment required + assign users
4. Configure SCIM provisioning

A. 1 → 2 → 3 → 4
B. 4 → 3 → 2 → 1
C. 2 → 4 → 1 → 3
D. 1 → 3 → 4 → 2

### 46. **Order these steps** to convert standing Global Admins to PIM eligible.

1. Create cloud-only break-glass GA accounts (active permanent, excluded from PIM)
2. Configure PIM settings for GA role (MFA + approval + ticket)
3. Add each admin as Eligible for GA
4. Remove the admin's permanent active GA assignment

A. 1 → 2 → 3 → 4
B. 4 → 3 → 2 → 1
C. 2 → 1 → 3 → 4
D. 1 → 3 → 2 → 4

### 47. **Order these steps** to stand up identity monitoring end-to-end.

1. Configure Entra Diagnostic Settings → forward to LA workspace
2. Create a Log Analytics workspace
3. Enable Microsoft Sentinel on the workspace
4. Import the Microsoft Entra workbook + create analytics rules

A. 1 → 2 → 3 → 4
B. 2 → 3 → 1 → 4
C. 4 → 3 → 2 → 1
D. 3 → 2 → 4 → 1

### 48. **Case study, Single scenario, four questions** (Q48–Q50): A 6,500-person global manufacturing firm has Microsoft 365 E5 globally. They run Entra Connect with PHS + Seamless SSO. They have ~80 Global Administrators (acquired tenant inheritance) and 1,200 B2B guests, many over 2 years old. The CISO has 3 goals: (1) eliminate standing GA privilege, (2) clean up stale B2B, (3) detect token-theft attempts.

**Q48 (CASE):** Best approach to eliminate standing GA privilege:
A. Mass-revoke all GA assignments and re-assign on demand
B. Convert all 80 GAs to PIM Eligible; configure 4-hour max activation with MFA + approval + ticket; add 2 cloud-only break-glass GAs; quarterly access review on eligibility
C. Disable Entra ID
D. Migrate to federation

### 49. **Q49 (CASE):** Best approach to clean up stale B2B:
A. Bulk delete all 1,200 guests
B. Inventory via Graph + Power BI; create access packages with sponsor approval + 90-day expiry + quarterly access review; disable inactive guests >180 days
C. Block all guest access
D. Migrate to External ID tenant

### 50. **Q50 (CASE):** Best approach to detect token-theft attempts:
A. Just enable MFA on all users
B. Forward SigninLogs + AuditLogs to Sentinel; enable CAE on all M365 apps; enable Token Protection (preview); build KQL analytics rule for "same refresh token from two IPs"
C. Federation
D. Disable Identity Protection

---

## 🎯 Answer Key (No Cheating!)

```
1.  C    11. B    21. B    31. C    41. B
2.  B    12. B    22. B    32. B    42. A
3.  C    13. C    23. B    33. C    43. B
4.  B    14. B    24. C    34. B    44. B
5.  C    15. B    25. B    35. B    45. A
6.  B    16. B    26. A    36. B    46. A
7.  D    17. B    27. B    37. B    47. B
8.  B    18. B    28. B    38. B    48. B
9.  C    19. C    29. A    39. B    49. B
10. B    20. B    30. B    40. B    50. B
```

---

## 📊 Scoring

| Score | Verdict |
|-------|---------|
| 45–50 | 🏆 You're ready. Schedule the exam. |
| 35–44 | ✅ Likely to pass on first attempt. Spend 1–2 days on misses. |
| 25–34 | ⚠️ Re-study weak modules; re-take this exam in 5 days. |
| <25   | 🔁 Significant gaps. Re-read Modules 1–8 and re-take. |

---

## 🔍 Pre-Exam Final Review (1–2 days out)

1. **Re-read every Cheat Sheet**, should take ~30 minutes total.
2. **Re-read your Flashcards** filtered to "Try again" cards only.
3. **Re-read these critical lists:**
   - License matrix (Module 1 cheat sheet)
   - Phishing-resistant methods + TAP usage (Module 3)
   - Break-glass rules (Modules 4 + 6)
   - B2B vs B2B direct connect vs External ID (Modules 1 + 2)
   - PIM eligible vs active (Module 6)
   - Cloud Sync vs Entra Connect feature matrix (Module 7)
   - The 10 must-know KQL queries (Module 8)
4. **Sleep 8 hours the night before. Eat. Show up 15 minutes early. Bring two forms of ID.**

---

## 🧭 Day-Of Strategy

- **100 minutes for 40–60 questions** = ~90–150 seconds/question average.
- **Flag and move on** if any question takes >2 min, come back at the end.
- **Case studies have re-readable scenarios**, anchor on the explicit requirement phrases ("must be," "lowest cost," "phishing-resistant").
- **Drag-drop ordering questions** are slow but high-value. Don't skip.
- **Yes/No groups** look easy but punish overconfidence, read each statement twice.

---

## Detailed Answer Rationales

**Q1. Answer: C.** Microsoft 365 E5 includes Entra ID P2. E3 includes P1.

**Q2. Answer: B.** CA = P1 minimum.

**Q3. Answer: C.** Identity Protection = P2.

**Q4. Answer: B.** Canonical B2B UPN with `#EXT#`.

**Q5. Answer: C.** `UsageLocation` (ISO country code) required before licenses.

**Q6. Answer: B.** Dynamic groups = P1.

**Q7. Answer: D.** Lifecycle Workflows ship in the Entra ID Governance add-on SKU.

**Q8. Answer: B.** Access review with manager reviewer + auto-Remove on no response.

**Q9. Answer: C.** Phishing-resistant MFA is the peak strength rung.

**Q10. Answer: B.** Number matching mandated Feb 2023 to combat MFA fatigue.

**Q11. Answer: B.** TAP default lifetime = 60 minutes.

**Q12. Answer: B.** Security Defaults and CA are mutually exclusive.

**Q13. Answer: C.** Block legacy auth = highest-leverage single policy.

**Q14. Answer: B.** Break-glass: cloud-only + excluded + monitored.

**Q15. Answer: B.** User risk = account-level (compromised). Sign-in risk = event-level.

**Q16. Answer: B.** CAE = ~15 minutes vs 1h default.

**Q17. Answer: B.** App Registration = recipe in home tenant.

**Q18. Answer: B.** Enterprise App = dish (service principal) per tenant.

**Q19. Answer: C.** OAuth = authz; OIDC = sign-in on OAuth. Precise.

**Q20. Answer: B.** Legacy enterprise SaaS still mostly SAML 2.0.

**Q21. Answer: B.** App Proxy = outbound-only connector.

**Q22. Answer: B.** "Do not allow user consent" + admin consent workflow = illicit consent defense.

**Q23. Answer: B.** Application permissions = no user context, ALWAYS admin-consent-only.

**Q24. Answer: C.** PIM = P2.

**Q25. Answer: B.** Eligible = can JIT-activate, inactive otherwise.

**Q26. Answer: A.** Microsoft enforces approver ≠ activator server-side.

**Q27. Answer: B.** Default 8h.

**Q28. Answer: B.** Break-glass: active permanent + EXCLUDED from PIM (insurance).

**Q29. Answer: A.** 0, use PIM eligible-only is Microsoft's recommendation.

**Q30. Answer: B.** Cloud Sync = modern recommended.

**Q31. Answer: C.** PHS + Seamless SSO = Microsoft's 2026 preferred topology.

**Q32. Answer: B.** PHS = hash-of-hash, salted, 1,000 iterations.

**Q33. Answer: C.** Cloud Sync does NOT support federation or PTA.

**Q34. Answer: B.** HEJ = AD-joined AND Entra-registered.

**Q35. Answer: B.** P1 sign-in log retention = 30 days; Free = 7 days.

**Q36. Answer: B.** Diagnostic Settings → Log Analytics workspace.

**Q37. Answer: B.** Consent events → AuditLogs.

**Q38. Answer: B.** Defender for Identity = on-prem AD attack detection.

**Q39. Answer: B.** Token theft = post-MFA; defense at token level (CAE + Token Protection + risk CA).

**Q40. Answer: B.** Yes / Yes / No. Lifecycle Workflows = Governance SKU, not P2 alone.

**Q41. Answer: B.** No (FIDO2/hardware OATH for break-glass; phone too fragile) / Yes / Yes (2 minimum).

**Q42. Answer: A.** Yes / Yes / No. PIM for Groups manages MEMBERSHIP, not ownership.

**Q43. Answer: B.** Yes / Yes / No. PTA is NOT supported in Cloud Sync.

**Q44. Answer: B.** 3 → 1 → 2 → 4. Keys first (procurement), then enable methods + TAP, generate TAPs, build CA in report-only.

**Q45. Answer: A.** 1 → 2 → 3 → 4. Gallery → SAML → assign users → SCIM.

**Q46. Answer: A.** 1 → 2 → 3 → 4. Break-glass FIRST, then policy, then eligibility, then remove permanent.

**Q47. Answer: B.** 2 → 3 → 1 → 4. Workspace → enable Sentinel → ship logs → import content.

**Q48. Answer: B.** Textbook PIM conversion: eligible + 4h max + MFA + approval + ticket + break-glass + access review.

**Q49. Answer: B.** Inventory + access packages + sponsor + expiry + access review + inactive disablement. The Walmart pattern.

**Q50. Answer: B.** Sentinel + CAE + Token Protection + KQL detection rule for refresh-token replay.
