# 🧪 Practice Exam 2 — SC-300 (Second Half)

> **Conditions:** Set a 95-minute timer. 50 questions. Treat it like the real thing.
> **Pass mark:** 35/50 (≈ 70%, matching the real exam)
> Take this AFTER finishing Modules 5–8.

---

## 📝 Questions

### 1. The App Registration object is BEST described as:
A. The local instance of an app in a tenant
B. The application's definition / manifest in the home tenant
C. The OAuth client secret
D. The reply URL

### 2. The Enterprise Application is BEST described as:
A. The application's manifest in the home tenant
B. The local instance / service principal of an app in this tenant
C. A SAML token
D. A user account

### 3. Which is TRUE about OAuth 2.0 and OIDC?
A. OAuth 2.0 is the modern sign-in protocol
B. OIDC is an authorization framework, not for sign-in
C. OAuth 2.0 is authorization; OIDC is sign-in built on top of OAuth 2.0
D. They are the same thing

### 4. Most legacy enterprise SaaS apps (Salesforce, Workday) use:
A. OIDC
B. SAML 2.0
C. WS-Federation
D. SCIM

### 5. Microsoft Entra Application Proxy:
A. Requires opening inbound firewall ports
B. Publishes on-prem web apps via an outbound-only connector
C. Provides network-level VPN access
D. Requires Entra ID Free

### 6. The single most-tested setting that defeats the "illicit consent" OAuth phishing attack is:
A. Enable Identity Protection
B. Set User consent settings to "Do not allow user consent" + enable Admin consent workflow
C. Disable SAML
D. Enable Security Defaults

### 7. Application permissions (vs delegated):
A. Act on behalf of a signed-in user
B. Act as the app itself, no user context, ALWAYS admin-consent-only
C. Are weaker than delegated
D. Are user-consentable

### 8. An app role declared in an App Registration's manifest surfaces in the user's token as:
A. `groups` claim
B. `roles` claim
C. `scp` claim
D. `aud` claim

### 9. Property "Assignment required = Yes" on an Enterprise App means:
A. Only users/groups explicitly assigned can sign in
B. All users in the tenant can sign in
C. The app is disabled
D. Only Global Admins can sign in

### 10. Which OAuth flow is RECOMMENDED for modern web/SPA apps in 2026?
A. Implicit grant
B. Resource Owner Password Credentials (ROPC)
C. Authorization Code + PKCE
D. SAML 2.0 Bearer Assertion

### 11. The admin consent workflow:
A. Automatically grants consent to all apps
B. Lets users request admin consent in-app; reviewers approve from the portal
C. Replaces SSO
D. Only works for SAML apps

### 12. A SAML SSO error "Audience URI mismatch" means:
A. The user's UPN is wrong
B. The SAML response Audience (Entity ID) doesn't match what the app expects
C. The token signing certificate expired
D. Identity Protection blocked the sign-in

### 13. Privileged Identity Management (PIM) requires:
A. Free
B. P1
C. P2
D. M365 Apps

### 14. An "eligible" PIM assignment means:
A. The role is always active
B. The user CAN activate the role JIT but it is inactive otherwise
C. The user is on a waitlist
D. The role is locked

### 15. A user cannot self-approve their own PIM activation because:
A. It's a Microsoft policy enforced server-side
B. The user must have written permission from HR
C. PIM only allows self-approval in P1
D. Self-approval is allowed if MFA passes

### 16. Default max PIM activation duration for an Entra role:
A. 1 hour
B. 8 hours
C. 24 hours
D. 72 hours

### 17. PIM for Groups requires the group to be:
A. A Microsoft 365 group
B. A dynamic membership group
C. A role-assignable group (set at creation)
D. An administrative unit

### 18. Lifecycle Workflows typically trigger from:
A. Real-time attribute change
B. User sign-in
C. Scheduled (daily) attribute evaluation (e.g. `employeeHireDate`)
D. Conditional Access policy

### 19. Break-glass GA accounts in a PIM-managed tenant should be:
A. PIM eligible like everyone else
B. Active permanent and EXCLUDED from PIM (separate insurance)
C. Time-bound active for 24h
D. Federated to AD FS

### 20. Microsoft's recommended max number of standing permanent Global Admins (excluding break-glass):
A. 0 (use PIM eligible-only)
B. 50
C. 100
D. 250

### 21. **Yes/No** — PIM mechanics.

**S1:** An eligible user must complete MFA before activating most Entra roles.
**S2:** PIM activation events are written to Entra audit logs.
**S3:** PIM for Groups is for managing security group ownership, not membership.

A. Yes / Yes / No
B. No / Yes / No
C. Yes / No / Yes
D. Yes / Yes / Yes

### 22. The MODERN, lighter-weight hybrid sync product Microsoft recommends for new deployments is:
A. Microsoft Entra Connect (Sync)
B. Microsoft Entra Cloud Sync
C. Active Directory Federation Services (AD FS)
D. Microsoft Identity Manager (MIM)

### 23. Which auth topology is Microsoft's preferred recommendation in 2026?
A. Federation with AD FS
B. Pass-Through Authentication only
C. Password Hash Sync (PHS) + Seamless SSO
D. SAML-only direct federation

### 24. Password Hash Sync (PHS) sends:
A. The plaintext password to Entra
B. A hash of a hash, salted, iterated 1,000 times (cannot be reversed)
C. An encrypted password with Microsoft's public key
D. Only the password's length

### 25. Pass-Through Authentication (PTA) requires at MINIMUM (for HA):
A. 1 agent
B. 2 agents
C. 3 agents
D. 5 agents

### 26. Cloud Sync does NOT support:
A. Password Hash Sync
B. Seamless SSO
C. Federation and Pass-Through Authentication
D. Multi-forest sync without trust

### 27. Seamless SSO uses which protocol against AD?
A. NTLM
B. Kerberos
C. SAML
D. OIDC

### 28. The computer account created in AD for Seamless SSO is named:
A. `EntraIDSSO`
B. `AZUREADSSOACC`
C. `SeamlessSSO`
D. `O365SSO`

### 29. A scenario: "Multi-forest M&A — newly acquired forest has no trust to existing forest." Best fit:
A. Entra Connect with forest trust
B. Cloud Sync (supports multi-forest without trust)
C. Federation
D. SCIM

### 30. **Federation** topology in 2026 is being:
A. Recommended for all new deployments
B. Deprecated; Microsoft is migrating federation customers to cloud auth
C. Now the only option for hybrid
D. Required for FIDO2

### 31. Hybrid Entra Joined (HEJ) device is:
A. Cloud-only (no AD)
B. AD-joined AND registered in Entra ID
C. AD-joined only
D. Entra-joined only

### 32. Changing Entra Connect OU filter to EXCLUDE an OU that previously included 4,200 users → those users:
A. Stay synced as before
B. Are marked as deleted (soft-delete) in Entra; permanent loss after 30 days
C. Are converted to Cloud Sync
D. Are converted to guests

### 33. Which write-back is supported by Cloud Sync?
A. Password write-back only
B. Password + group write-back
C. Password + group + device write-back
D. All four write-back types

### 34. Default retention of Entra sign-in logs for a P1 tenant:
A. 7 days
B. 30 days
C. 90 days
D. 1 year

### 35. To retain Entra logs beyond 30 days for KQL querying, you should:
A. Buy Entra ID P2
B. Configure Diagnostic Settings → forward to a Log Analytics workspace
C. Enable Security Defaults
D. Turn on Identity Protection

### 36. Identity Protection risk events are retained for:
A. 7 days
B. 30 days
C. 90 days
D. 1 year

### 37. The right KQL table for "every interactive sign-in event" is:
A. AuditLogs
B. SigninLogs
C. ProvisioningLogs
D. RiskEvents

### 38. The right KQL table for "user consented to an app" is:
A. SigninLogs
B. AuditLogs
C. ProvisioningLogs
D. RiskyUsers

### 39. Microsoft Defender for Identity (formerly Azure ATP) detects:
A. Cloud sign-in risk in Entra ID
B. On-prem AD attacks (Golden Ticket, DCSync, lateral movement)
C. Email phishing
D. Endpoint malware

### 40. Microsoft Defender for Identity ≠ Identity Protection because:
A. Identity Protection is on-prem; Defender for Identity is cloud
B. Defender for Identity is on-prem AD attack detection; Identity Protection is cloud Entra risk policies
C. They are the same product with different names
D. Identity Protection requires Defender for Identity

### 41. Identity Secure Score is:
A. A real-time threat alert
B. A 0–100% score with prescriptive identity hygiene improvements
C. The Defender for Identity dashboard
D. A SAML token

### 42. Break-glass account monitoring should:
A. Be reviewed monthly
B. Alert on EVERY sign-in (in addition to standard logging)
C. Be disabled to reduce noise
D. Only fire for failed sign-ins

### 43. Token theft attack class is best defended against by:
A. More frequent MFA prompts
B. Continuous Access Evaluation (CAE) + Token Protection + risk-based CA
C. Disabling Entra ID
D. Federated AD FS

### 44. Microsoft Sentinel is best described as:
A. An EDR product
B. A cloud-native SIEM + SOAR built on Log Analytics with KQL
C. A subset of Defender for Identity
D. The Entra portal

### 45. **Order these steps** to stand up identity monitoring end-to-end.

1. Configure Entra Diagnostic Settings → forward to LA workspace
2. Create a Log Analytics workspace
3. Enable Microsoft Sentinel on the workspace
4. Import the Microsoft Entra workbook + create analytics rules

A. 1 → 2 → 3 → 4
B. 2 → 3 → 1 → 4
C. 4 → 3 → 2 → 1
D. 3 → 2 → 4 → 1

### 46. **Yes/No** — Sentinel & detections.

**S1:** Analytics rules in Sentinel are scheduled KQL queries that fire incidents.
**S2:** SOAR playbooks are Logic Apps that auto-respond to incidents.
**S3:** UEBA stands for User and Entity Behavior Analytics.

A. Yes / Yes / Yes
B. No / Yes / Yes
C. Yes / No / Yes
D. Yes / Yes / No

### 47. **Order these steps** to onboard a Workday SAML SSO + provisioning integration.

1. Add Workday from App Gallery
2. Configure SAML SSO (Identifier, Reply URL, attributes)
3. Set Assignment required + assign users
4. Configure SCIM provisioning

A. 1 → 2 → 3 → 4
B. 4 → 3 → 2 → 1
C. 2 → 4 → 1 → 3
D. 1 → 3 → 4 → 2

### 48. A scenario: "Auditor asks for every PIM Global Admin activation in last 90 days." Right source:
A. SigninLogs
B. AuditLogs filtered on PIM operations
C. RiskyUsers
D. Defender for Identity

### 49. A scenario: "Detect SCIM provisioning failures to Workday." Right source:
A. SigninLogs
B. AuditLogs
C. ProvisioningLogs
D. RiskEvents

### 50. **Yes/No** — Threat response & monitoring.

**S1:** MFA alone defends against token theft (post-MFA refresh-token replay).
**S2:** CAE shortens token revocation latency from ~1 hour to ~15 minutes.
**S3:** Continuous Access Evaluation is on by default for modern Microsoft 365 apps.

A. Yes / Yes / Yes
B. No / Yes / Yes
C. Yes / No / Yes
D. No / No / Yes

---

## 🎯 Answer Key (No Cheating!)

```
1.  B    11. B    21. A    31. B    41. B
2.  B    12. B    22. B    32. B    42. B
3.  C    13. C    23. C    33. A    43. B
4.  B    14. B    24. B    34. B    44. B
5.  B    15. A    25. C    35. B    45. B
6.  B    16. B    26. C    36. C    46. A
7.  B    17. C    27. B    37. B    47. A
8.  B    18. C    28. B    38. B    48. B
9.  A    19. B    29. B    39. B    49. C
10. C    20. A    30. B    40. B    50. B
```

---

## 📊 Scoring

| Score | Verdict |
|-------|---------|
| 45–50 | 🏆 Excellent — ready for the Final Mock |
| 35–44 | ✅ On track. Review missed Qs, then take the Final Mock |
| 25–34 | ⚠️ Re-study weak modules; re-quiz before Final Mock |
| <25   | 🔁 Re-read Modules 5–8 carefully |

---

## 🔍 Review Process

For EACH wrong answer:

1. Identify which module covered it (see map below).
2. Re-read that module's Reading.md.
3. Add an Anki flashcard for the concept.
4. Try the question again 3 days later.

### Wrong-answer → Module map

| Question # | Module |
|------------|--------|
| 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 47 | Module 5 (App Registration & SSO) |
| 13, 14, 15, 16, 17, 18, 19, 20, 21 | Module 6 (Identity Governance & PIM) |
| 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33 | Module 7 (Hybrid Identity) |
| 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 48, 49, 50 | Module 8 (Monitoring & Threats) |

---

➡️ When ready: take the [Final Mock Exam](./Final-Mock-Exam.md).

---

## Detailed Answer Rationales

**Q1. Answer: B.** App Registration is the recipe — the application's manifest/definition in the home tenant. *Wrong options.* **A** That's the Enterprise App. **C/D** Components, not the object.

**Q2. Answer: B.** Enterprise App is the dish — local service principal in this tenant. *Wrong options.* **A** That's the App Registration. **C/D** Different concepts.

**Q3. Answer: C.** OAuth = authz; OIDC = sign-in built on OAuth. Precise SC-300 answer.

**Q4. Answer: B.** Most legacy enterprise SaaS still uses SAML 2.0 in 2026.

**Q5. Answer: B.** App Proxy = outbound-only connector. NOT a VPN. P1 required.

**Q6. Answer: B.** The two-setting fix for illicit OAuth consent attacks.

**Q7. Answer: B.** Application permissions = no user context, ALWAYS admin-consent-only.

**Q8. Answer: B.** App roles surface as `roles` claim in the token.

**Q9. Answer: A.** Assignment required = only explicitly assigned users can sign in.

**Q10. Answer: C.** Auth Code + PKCE is the modern recommended flow.

**Q11. Answer: B.** Admin consent workflow: in-portal request → reviewer approve.

**Q12. Answer: B.** Audience URI = Entity ID/Identifier mismatch on the Entra side.

**Q13. Answer: C.** PIM = P2.

**Q14. Answer: B.** Eligible = can JIT-activate; inactive otherwise.

**Q15. Answer: A.** Microsoft enforces approver ≠ activator server-side.

**Q16. Answer: B.** Default max 8h activation; configurable per role.

**Q17. Answer: C.** Role-assignable group (set at creation; can't retroactively flip).

**Q18. Answer: C.** Lifecycle Workflows are scheduled (daily) or on-demand.

**Q19. Answer: B.** Break-glass = active permanent + EXCLUDED from PIM (insurance against PIM outage).

**Q20. Answer: A.** 0 — use PIM eligible-only is Microsoft's guidance.

**Q21. Answer: A.** S1 yes / S2 yes / S3 no (PIM for Groups manages MEMBERSHIP, not ownership).

**Q22. Answer: B.** Cloud Sync = modern recommended product.

**Q23. Answer: C.** PHS + Seamless SSO is Microsoft's 2026 preferred topology.

**Q24. Answer: B.** PHS sends hash-of-hash, salted, 1,000 iterations — can't be reversed.

**Q25. Answer: C.** ≥3 PTA agents for HA.

**Q26. Answer: C.** Cloud Sync does NOT support federation or PTA.

**Q27. Answer: B.** Seamless SSO = Kerberos.

**Q28. Answer: B.** `AZUREADSSOACC` is the canonical name.

**Q29. Answer: B.** Cloud Sync supports multi-forest WITHOUT trust — the major architectural win.

**Q30. Answer: B.** Federation is being deprecated; PHS + Seamless SSO is the migration target.

**Q31. Answer: B.** HEJ = AD-joined AND Entra-registered (NOT same as Entra Joined).

**Q32. Answer: B.** Soft-delete + permanent loss after 30 days. The classic OU-filter mistake.

**Q33. Answer: A.** Cloud Sync supports password write-back only.

**Q34. Answer: B.** 30 days for P1+; 7 days for Free.

**Q35. Answer: B.** Diagnostic Settings → LA workspace.

**Q36. Answer: C.** Risk events = 90 days.

**Q37. Answer: B.** SigninLogs covers all sign-in events.

**Q38. Answer: B.** Consent + directory changes go to AuditLogs.

**Q39. Answer: B.** Defender for Identity = on-prem AD threat detection.

**Q40. Answer: B.** Different products. Cloud risk (Identity Protection) vs on-prem AD attacks (Defender for Identity).

**Q41. Answer: B.** Identity Secure Score = 0–100% guided backlog.

**Q42. Answer: B.** Every break-glass sign-in must alert.

**Q43. Answer: B.** Token theft = post-MFA; defense at token level (CAE + Token Protection + risk CA), not more MFA.

**Q44. Answer: B.** Sentinel = SIEM + SOAR built on LA + KQL.

**Q45. Answer: B.** 2 → 3 → 1 → 4. Workspace → enable Sentinel → ship logs → import content.

**Q46. Answer: A.** All three true.

**Q47. Answer: A.** Gallery → SAML → Assign users → SCIM provisioning.

**Q48. Answer: B.** PIM activation events live in AuditLogs.

**Q49. Answer: C.** Provisioning events live in ProvisioningLogs.

**Q50. Answer: B.** No (MFA happens once; token replay bypasses) / Yes / Yes.
