# 🧪 Practice Exam 1, SC-300 (First Half)

> **Conditions:** Set an 80-minute timer. 40 questions. Treat it like the real thing.
> **Pass mark:** 28/40 (≈ 70%, matching the real exam)
> Take this AFTER finishing Modules 1–4.

---

## 📝 Questions

### 1. Microsoft Entra ID was previously known as:
A. Microsoft Identity Manager
B. Azure Active Directory
C. Active Directory Domain Services
D. Microsoft Account

### 2. Which Entra ID edition is the MINIMUM required for Conditional Access?
A. Free
B. P1
C. P2
D. External ID

### 3. Privileged Identity Management (PIM) requires which edition?
A. Free
B. P1
C. P2
D. Microsoft Entra ID Governance

### 4. The default DNS name of a tenant has the format:
A. `<tenant>.entra.com`
B. `<tenant>.microsoft.com`
C. `<tenant>.onmicrosoft.com`
D. `<tenant>.azure.com`

### 5. The MAXIMUM number of verified custom DNS domains per tenant is:
A. 1
B. 25
C. 500
D. 5,000

### 6. A B2B guest user from `partner.com` invited into `contoso` has the UPN:
A. `alice@partner.com`
B. `alice_partner.com#EXT#@contoso.onmicrosoft.com`
C. `alice@contoso.com (guest)`
D. `partner.alice@contoso.com`

### 7. Which attribute MUST be set on a user before most M365/Entra licenses can be assigned?
A. JobTitle
B. Department
C. UsageLocation
D. MailNickname

### 8. The right artifact for "every quarter, ask managers to confirm direct reports' group membership; auto-remove if no response" is:
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

### 12. Which method is recommended for highly regulated environments (FedRAMP High, DoD)?
A. SMS MFA
B. Email OTP
C. Certificate-based authentication (CBA) with smart cards
D. Voice call MFA

### 13. Security Defaults and Conditional Access can be enabled together:
A. Yes, they complement each other
B. No, they are mutually exclusive
C. Only in P2 tenants
D. Only after AD FS retirement

### 14. The single highest-leverage Conditional Access policy Microsoft recommends:
A. Require MFA for all users
B. Require compliant device for everyone
C. Block legacy authentication
D. Block sign-in from anonymous IPs

### 15. Break-glass accounts MUST be:
A. Federated to AD FS for HA
B. Cloud-only, excluded from every CA policy, monitored
C. Created automatically by Microsoft
D. Synced from on-prem

### 16. **User risk** in Identity Protection measures:
A. The probability THIS specific sign-in is malicious
B. The probability the account itself is compromised
C. The number of devices the user has
D. The MFA registration completeness

### 17. **Sign-in risk** in Identity Protection measures:
A. The probability the account itself is compromised
B. The probability THIS specific sign-in is malicious
C. Whether the user is in a trusted location
D. Whether the user has completed combined registration

### 18. The recommended starting state for any new CA policy is:
A. On (immediate enforcement)
B. Off
C. Report-only
D. Delete it after creation

### 19. Continuous Access Evaluation (CAE) reduces token revocation latency from default 1 hour to:
A. Real-time (sub-second)
B. ~15 minutes
C. 30 minutes
D. 6 hours

### 20. **Yes/No**, Mark each statement.

**S1:** Conditional Access requires Entra ID P1.
**S2:** Identity Protection requires Entra ID P2.
**S3:** Lifecycle Workflows are included in Entra ID P2.

A. Yes / Yes / Yes
B. Yes / Yes / No
C. No / Yes / No
D. Yes / No / No

### 21. Dynamic groups REQUIRE which minimum license?
A. Free
B. P1
C. P2
D. Entra ID Governance

### 22. Which role can reset MFA for ANY user, including Global Admins?
A. Helpdesk Administrator
B. Authentication Administrator
C. Privileged Authentication Administrator
D. User Administrator

### 23. Which is TRUE about the default `<tenant>.onmicrosoft.com` name?
A. It can be renamed once after tenant creation
B. It can be deleted after a custom domain is verified
C. It is permanent and cannot be renamed or deleted
D. It is optional, many tenants don't have one

### 24. **Order these steps** to roll out FIDO2 to a pilot group of IT admins.

1. Enable FIDO2 + TAP in Authentication methods policy targeting `Admins-Pilot`
2. Generate TAPs for pilot admins (multi-use, 1 week)
3. Procure FIDO2 keys (2 per admin)
4. Create CA policy requiring Phishing-resistant MFA for admins, start in report-only

A. 1 → 2 → 3 → 4
B. 3 → 1 → 2 → 4
C. 1 → 3 → 2 → 4
D. 4 → 3 → 2 → 1

### 25. Which is the MODERN unified place to configure authentication methods?
A. Per-user MFA settings (legacy portal)
B. SSPR registration policy
C. Authentication methods policy
D. AD FS

### 26. A "connected organization" in entitlement management is:
A. A federated AD forest
B. An external Entra tenant that access packages can grant access to (auto-provisions guests)
C. A SCIM partner
D. A multi-tenant App Registration

### 27. Administrative Units (AUs) support which scoping model?
A. Nested hierarchy with 6 levels
B. Flat (non-nested) containers of users/groups/devices
C. RBAC at resource group scope
D. Per-app role scoping

### 28. Default retention of Entra sign-in logs for a P1 tenant:
A. 7 days
B. 30 days
C. 90 days
D. 1 year

### 29. The two client-app conditions you'd add to a "block legacy auth" CA policy are:
A. Browser + Mobile apps & desktop clients
B. Exchange ActiveSync clients + Other clients
C. Modern auth clients + Browser
D. SAML clients + OIDC clients

### 30. The What If tool in Conditional Access:
A. Tests connectivity to Entra ID
B. Simulates a sign-in to show which CA policies would apply and the outcome
C. Sends a test MFA prompt
D. Resets a user's MFA

### 31. **Yes/No**, Break-glass.

**S1:** Break-glass accounts should use phone-based MFA for portability.
**S2:** Break-glass accounts must be excluded from EVERY CA policy.
**S3:** Two break-glass accounts is the Microsoft-recommended minimum count.

A. Yes / Yes / Yes
B. No / Yes / Yes
C. No / No / Yes
D. Yes / No / No

### 32. B2B direct connect differs from B2B collaboration in that:
A. B2B direct connect creates a guest user object; collaboration does not
B. B2B direct connect does NOT create a guest user object; both parties trust each other for Teams shared channels
C. B2B direct connect is a synonym for B2B collaboration
D. B2B direct connect is for consumers; collaboration is for partners

### 33. **Yes/No**, Methods comparison.

**S1:** Windows Hello for Business is portable across devices.
**S2:** FIDO2 keys are portable across devices.
**S3:** Certificate-based authentication requires AD FS.

A. Yes / Yes / Yes
B. No / Yes / No
C. No / No / Yes
D. Yes / No / Yes

### 34. The right artifact to allow Engineering employees to request access to Project-X with manager approval, 90-day expiry, and quarterly access review is:
A. A security group with assigned membership
B. A dynamic group rule on `department`
C. An access package in entitlement management
D. A custom Entra role

### 35. Per-partner inbound/outbound B2B rules live in:
A. External collaboration settings
B. Cross-tenant access settings
C. Conditional Access named locations
D. Entitlement management

### 36. Risk events in Identity Protection are retained for:
A. 7 days
B. 30 days
C. 90 days
D. 1 year

### 37. A scenario: "Block downloads on unmanaged devices when accessing SharePoint via browser." The right control is:
A. Block access entirely
B. Require compliant device
C. Session control: app-enforced restrictions OR Defender for Cloud Apps proxy
D. Identity Protection user-risk policy

### 38. The user encounters a sign-in risk MFA challenge and completes it successfully. What happens?
A. Risk persists; an admin must dismiss it manually
B. The risk is automatically dismissed (Microsoft learns the user is the real owner)
C. The account is permanently flagged
D. A Sentinel alert fires

### 39. **Yes/No**, Policy mechanics.

**S1:** Security Defaults and Conditional Access can be enabled together.
**S2:** Per-user MFA settings override Conditional Access policies.
**S3:** A single CA policy can include multiple Grant controls combined with AND or OR.

A. Yes / Yes / Yes
B. No / No / Yes
C. No / Yes / Yes
D. Yes / No / Yes

### 40. Microsoft's recommended count and protection for break-glass accounts:
A. 1 account, federated, no MFA
B. 2 accounts, cloud-only, excluded from all CA, FIDO2 MFA, vaulted credentials
C. 5 accounts, synced from on-prem
D. 0 accounts (rely on Microsoft support)

---

## 🎯 Answer Key (No Cheating!)

```
1.  B    11. B    21. B    31. B
2.  B    12. C    22. C    32. B
3.  C    13. B    23. C    33. B
4.  C    14. C    24. B    34. C
5.  D    15. B    25. C    35. B
6.  B    16. B    26. B    36. C
7.  C    17. B    27. B    37. C
8.  B    18. C    28. B    38. B
9.  C    19. B    29. B    39. B
10. B    20. B    30. B    40. B
```

---

## 📊 Scoring

| Score | Verdict |
|-------|---------|
| 36–40 | 🏆 Excellent, Modules 5–8 next |
| 28–35 | ✅ On track. Review missed Qs, then continue. |
| 20–27 | ⚠️ Re-study weak modules (use the table below) |
| <20   | 🔁 Restart from Module 1 |

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
| 1, 2, 3, 4, 5, 22, 23, 28 | Module 1 (Entra ID Fundamentals) |
| 6, 7, 8, 21, 26, 27, 32, 34, 35 | Module 2 (Users, Groups, External Identities) |
| 9, 10, 11, 12, 13, 24, 25, 33 | Module 3 (Authentication) |
| 14, 15, 16, 17, 18, 19, 20, 29, 30, 31, 36, 37, 38, 39, 40 | Module 4 (CA + Identity Protection) |

---

➡️ When ready: continue with [Module 5: Application Registration & SSO](../Module-05-Apps-SSO/Reading.md), then [Practice Exam 2](./Practice-Exam-2.md).

---

## Detailed Answer Rationales

> Every wrong option is explained to graduate-level professional standard. Use these to retire concepts you missed, not just to "see what's correct."

**Q1. Answer: B.** *Why B is correct.* Microsoft Entra ID is the post-2023 brand of Azure Active Directory; SC-300 uses both interchangeably. *Why the other options are wrong.* **A** MIM is the legacy hybrid identity manager. **C** AD DS is on-prem. **D** Microsoft Account is the consumer identity (formerly Live ID). *Exam-takeaway.* Old name = Azure AD; new name = Microsoft Entra ID.

**Q2. Answer: B.** *Why B is correct.* CA ships from Entra ID P1. *Why the others are wrong.* **A** Free has only Security Defaults. **C** P2 includes CA but isn't the minimum. **D** External ID is the consumer SKU. *Exam-takeaway.* CA = P1, Identity Protection = P2.

**Q3. Answer: C.** *Why C is correct.* PIM is part of P2. *Why the others are wrong.* **A/B** Lower tiers lack PIM. **D** Governance adds Lifecycle Workflows on top, but PIM itself is P2. *Exam-takeaway.* PIM = P2.

**Q4. Answer: C.** *Why C is correct.* Permanent `*.onmicrosoft.com` name. *Why the others are wrong.* **A/B/D** Not real Microsoft naming. *Exam-takeaway.* Default name is permanent.

**Q5. Answer: D.** *Why D is correct.* 5,000 verified custom domains per tenant. *Why the others are wrong.* All too low for the documented limit. *Exam-takeaway.* 5K, memorize.

**Q6. Answer: B.** *Why B is correct.* Canonical B2B UPN with `#EXT#`. *Why the others are wrong.* **A** Their original UPN, not their identity in your tenant. **C/D** Made up. *Exam-takeaway.* `#EXT#` is what dynamic group rules and CA conditions look for.

**Q7. Answer: C.** *Why C is correct.* `UsageLocation` (two-letter ISO country code) is required before most license assignments. *Why the others are wrong.* Useful but not licensing prerequisites. *Exam-takeaway.* Common day-1 trap.

**Q8. Answer: B.** *Why B is correct.* Textbook access review. *Why the others are wrong.* **A** PIM is about activation, not periodic review. **C** Lifecycle Workflows fire on attribute change, not periodic. **D** CA doesn't review group membership. *Exam-takeaway.* "Periodic + auto-apply" = access review.

**Q9. Answer: C.** *Why C is correct.* Strength hierarchy peaks at Phishing-resistant MFA. *Why the others are wrong.* **A/B** Weaker rungs. **D** Combined registration is the registration experience, not a strength. *Exam-takeaway.* Memorize: Single → MFA → Passwordless → Phishing-resistant.

**Q10. Answer: B.** *Why B is correct.* Number matching mandated tenant-wide in Feb 2023. *Why the others are wrong.* Not Microsoft-mandated controls in that period. *Exam-takeaway.* Defeats MFA fatigue / push bombing.

**Q11. Answer: B.** *Why B is correct.* TAP default lifetime is 60 minutes (configurable 10 min – 30 days). *Exam-takeaway.* Default 60 min.

**Q12. Answer: C.** *Why C is correct.* CBA + smart cards is the regulated-environment gold standard. *Why the others are wrong.* SMS/email/voice are phishable. *Exam-takeaway.* CBA for FedRAMP High / DoD.

**Q13. Answer: B.** *Why B is correct.* Microsoft makes them mutually exclusive. *Why the others are wrong.* No "both" mode exists. *Exam-takeaway.* Pick one.

**Q14. Answer: C.** *Why C is correct.* ~97% of credential-stuffing targets legacy protocols; blocking them yields the largest single security gain. *Why the others are wrong.* All valuable but not the highest single-leverage policy. *Exam-takeaway.* Block legacy auth first.

**Q15. Answer: B.** *Why B is correct.* Cloud-only + excluded + monitored is the canonical pattern. *Why the others are wrong.* **A** Federation = single point of failure. **C** Microsoft doesn't auto-create. **D** Sync = dependency. *Exam-takeaway.* Insurance, not a primary identity.

**Q16. Answer: B.** User risk = the account is compromised.

**Q17. Answer: B.** Sign-in risk = THIS event is suspicious.

**Q18. Answer: C.** Report-only is the canonical safe-start state.

**Q19. Answer: B.** CAE reduces token revocation latency to ~15 minutes vs the 1-hour default.

**Q20. Answer: B.** Yes / Yes / No. CA = P1; Identity Protection = P2; Lifecycle Workflows = Entra ID Governance SKU (NOT P2 alone).

**Q21. Answer: B.** Dynamic groups = P1.

**Q22. Answer: C.** Privileged Authentication Administrator targets all users, including GAs. Authentication Administrator targets non-admins only.

**Q23. Answer: C.** The default `.onmicrosoft.com` is permanent, plan accordingly.

**Q24. Answer: B.** 3 → 1 → 2 → 4. Keys first (procurement lead time), then enable methods + TAP, generate TAPs, build CA in report-only.

**Q25. Answer: C.** Authentication methods policy is the modern unified surface; per-user MFA + SSPR registration retiring Sept 2025.

**Q26. Answer: B.** Connected organization = external Entra tenant that access packages can target, auto-provisioning B2B guests.

**Q27. Answer: B.** AUs are FLAT (no nesting). Plan accordingly.

**Q28. Answer: B.** 30 days for P1+; 7 days for Free. Longer = forward to LA.

**Q29. Answer: B.** Exchange ActiveSync + Other clients are the two legacy buckets.

**Q30. Answer: B.** What If simulates a sign-in to surface which policies would apply.

**Q31. Answer: B.** No (phone too fragile, use FIDO2/hardware OATH) / Yes / Yes (2 minimum).

**Q32. Answer: B.** B2B direct connect = NO guest object; mutual trust for Teams shared channels. B2B collaboration = guest object in your tenant.

**Q33. Answer: B.** No (Hello is device-bound) / Yes (FIDO2 portable) / No (CBA is now Entra-native; no AD FS needed).

**Q34. Answer: C.** Self-service + approval + time-bound + review = access package.

**Q35. Answer: B.** Cross-Tenant Access Settings = per-partner rules. External Collaboration Settings = tenant defaults.

**Q36. Answer: C.** Risk events retained 90 days.

**Q37. Answer: C.** Session control via Defender for Cloud Apps proxy or app-enforced restrictions.

**Q38. Answer: B.** Self-remediation: passing MFA dismisses the risk automatically (Microsoft learns user is real).

**Q39. Answer: B.** No (mutually exclusive) / No (per-user MFA is legacy; CA wins) / Yes (multiple grant controls with AND/OR).

**Q40. Answer: B.** Microsoft-recommended: 2 cloud-only accounts, excluded from CA, FIDO2 MFA, credentials vaulted.
