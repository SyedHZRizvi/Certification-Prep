# ✏️ Module 3 Quiz: Microsoft Intune Fundamentals

> **Instructions:** Answer all 25 questions WITHOUT looking at the reading. Aim for 21/25 minimum before moving on.

---

## Questions

### Q1. The Microsoft Intune admin center URL is: *(Remember)*
A. portal.azure.com
B. admin.microsoft.com
C. intune.microsoft.com
D. endpoint.contoso.com

---

### Q2. MAM stands for: *(Remember)*
A. Microsoft App Manager
B. Mobile Application Management
C. Managed Account Module
D. Multi-tenant Access Mode

---

### Q3. The core distinction between MDM and MAM is: *(Understand)*
A. MDM is for Windows; MAM is for mobile
B. MDM enrolls the device; MAM protects corporate data inside specific apps
C. MDM is more secure than MAM
D. MAM is more expensive than MDM

---

### Q4. Which Intune license tier includes Endpoint Privilege Management (EPM)? *(Remember)*
A. Plan 1
B. Plan 2
C. Microsoft Intune Suite
D. Free

---

### Q5. iOS / iPadOS Intune management requires which Microsoft Apple integration cert? *(Remember)*
A. Code Signing Cert
B. Apple Push Notification service (APNs) certificate
C. SSL EV Cert
D. None, it's automatic

---

### Q6. Linux Intune management in 2024+ supports: *(Understand)*
A. Full settings catalog parity with Windows
B. Compliance policies + Microsoft Edge configuration
C. App deployment of any DEB/RPM package
D. Full BitLocker equivalent disk encryption

---

### Q7. When a user is in both an Include group and an Exclude group for the same policy, the user: *(Apply)*
A. Receives the policy (Include wins)
B. Does NOT receive the policy (Exclude wins)
C. Receives a hybrid version
D. Has the conflict surfaced as a sync error

---

### Q8. Intune assigns policies and apps to: *(Remember)*
A. Individual users directly
B. Microsoft Entra ID groups
C. Active Directory OUs
D. Subscription IDs

---

### Q9. App Protection Policies (APP) are MOST effective for: *(Analyze)*
A. Corporate-owned, fully managed iPhones
B. Personally owned Android phones that should not be enrolled
C. Windows Server hosts
D. Linux containers

---

### Q10. Which group type's membership is rule-driven and updates automatically? *(Understand)*
A. Static security group
B. Distribution list
C. Dynamic device or dynamic user group
D. Microsoft 365 group

---

### Q11. The Company Portal app is REQUIRED for self-service enrollment on which platforms? *(Apply)*
A. Windows only
B. macOS only
C. iOS and Android
D. Linux

---

### Q12. **Order these steps** to deploy a configuration profile to a regional subset of devices: *(Apply)*

1. Create a dynamic device group with the regional rule
2. Build the configuration profile in Settings Catalog
3. Test on one pilot device
4. Assign the profile to the group
5. Monitor for conflicts and compliance

A. 1 → 2 → 4 → 3 → 5
B. 2 → 1 → 4 → 3 → 5
C. 1 → 2 → 3 → 4 → 5
D. 4 → 3 → 2 → 1 → 5

---

### Q13. The Intune RBAC role that lets a help-desk operator view + run remote actions but NOT change configuration is: *(Remember)*
A. Intune Administrator
B. Policy and Profile Manager
C. Help Desk Operator
D. Application Manager

---

### Q14. Scope tags in Intune do what? *(Understand)*
A. Restrict which devices an admin can see and manage
B. Categorize apps by business function
C. Tag resources for cost reporting
D. Override compliance policy results

---

### Q15. Microsoft 365 E3 includes Intune at which plan? *(Remember)*
A. Plan 1
B. Plan 2
C. Suite
D. No Intune included

---

### Q16. The modern preferred surface for applying Windows / iOS / Android settings is: *(Apply)*
A. Custom OMA-URI
B. Administrative templates (ADMX)
C. Settings catalog
D. Group Policy preferences

---

### Q17. To allow Outlook Mobile users to copy/paste only to other managed apps (not WhatsApp), you'd configure: *(Apply)*
A. A compliance policy
B. An App Protection Policy with "Cut, copy, paste with other apps" = Policy managed apps
C. A Conditional Access policy
D. A configuration profile

---

### Q18. A user reports that a configuration profile assigned to "All devices" isn't applying. Likely cause: *(Apply)*
A. The device is offline
B. The device is in an Exclude group
C. The profile hasn't been published yet
D. The user's license is missing

---

### Q19. Yes/No, For each statement, mark Yes or No. *(Understand)*

**S1:** Intune can manage Linux devices' BitLocker equivalent disk encryption.
**S2:** APP can encrypt corporate data inside Outlook Mobile.
**S3:** Settings Catalog supports thousands of settings across multiple platforms.

A. Yes / Yes / Yes
B. No / Yes / Yes
C. Yes / No / No
D. No / No / Yes

---

### Q20. The Intune RBAC role for managing security baselines, Defender, and ASR is: *(Remember)*
A. Intune Administrator
B. Endpoint Security Manager
C. Application Manager
D. Cloud PKI Administrator

---

### Q21. A new admin in EMEA should be limited to seeing only EMEA-tagged devices. The cleanest mechanism is: *(Analyze)*
A. Create a custom Intune role with scope tags assigning EMEA
B. Give them Global Administrator
C. Use a Conditional Access policy
D. Block them from Intune admin center

---

### Q22. Android (Enterprise) Intune enrollment requires which Google integration? *(Remember)*
A. Google Workspace subscription
B. Managed Google Play account
C. Google Cloud Platform tenant
D. Android Device Manager only

---

### Q23. The Company Portal lets users do which of the following? *(Understand)*
A. Self-enroll, install apps from the catalog, see compliance status, request help
B. Reset another user's password
C. Approve other users' enrollment requests
D. Manage Conditional Access policies

---

### Q24. Yes/No, For each statement, mark Yes or No. *(Evaluate)*

**S1:** Microsoft Intune Suite includes Endpoint Privilege Management.
**S2:** Intune Plan 2 requires Plan 1 as a prerequisite license.
**S3:** Microsoft 365 Business Premium includes the full Intune Plan 1 with no limitations.

A. Yes / Yes / No
B. Yes / Yes / Yes
C. Yes / No / Yes
D. No / Yes / No

---

### Q25. A new Heineken-style scenario: 1 tenant with 5 regional admins. Each must manage only their region. The right approach is: *(Evaluate)*
A. 5 separate Intune tenants
B. 1 tenant + scope tags per region + custom RBAC roles
C. 1 tenant + Global Administrator for everyone
D. 1 tenant + shared Help Desk Operator role for all 5

---

## 🎯 Answers + Explanations

### Q1: **C. intune.microsoft.com**
The official admin URL. (Older `endpoint.microsoft.com` redirects to it.)

### Q2: **B. Mobile Application Management**
MAM = the app-data-protection counterpart to MDM.

### Q3: **B. MDM enrolls the device; MAM protects corporate data inside specific apps**
The single most important Intune distinction.

### Q4: **C. Microsoft Intune Suite**
EPM is a Suite-only feature. Plan 2 has analytics + remote help base; Suite adds EPM, Cloud PKI, Tunnel for MAM, Enterprise App Management.

### Q5: **B. Apple Push Notification service (APNs) certificate**
Apple requires APNs for MDM. The cert must be renewed annually.

### Q6: **B. Compliance policies + Microsoft Edge configuration**
Linux Intune in 2024+ is intentionally narrow, compliance + Edge cfg only.

### Q7: **B. Does NOT receive the policy (Exclude wins)**
Memorize: Exclude beats Include.

### Q8: **B. Microsoft Entra ID groups**
Policies and apps never target individual users, always Entra groups.

### Q9: **B. Personally owned Android phones that should not be enrolled**
APP shines for BYOD without enrollment.

### Q10: **C. Dynamic device or dynamic user group**
Dynamic groups have rule-driven, auto-updating membership.

### Q11: **C. iOS and Android**
Self-service iOS/Android enrollment requires Company Portal.

### Q12: **A. 1 → 2 → 4 → 3 → 5**
Group → profile → assign → pilot test → monitor. (Or build profile first if you prefer order B both defensible but `1→2→4→3→5` is the most-common canonical sequence.)

### Q13: **C. Help Desk Operator**
Read + remote actions, no config. Intune Administrator is full control.

### Q14: **A. Restrict which devices an admin can see and manage**
Scope tags partition admin visibility, devices, policies, apps inherit tags.

### Q15: **A. Plan 1**
M365 E3 = Intune Plan 1. Plan 2 features are separately licensed.

### Q16: **C. Settings catalog**
The modern preferred surface for nearly all settings as of 2024+.

### Q17: **B. An App Protection Policy with "Cut, copy, paste with other apps" = Policy managed apps**
APP controls data movement. "Policy managed apps" lets Outlook copy only to other managed apps.

### Q18: **B. The device is in an Exclude group**
Exclude beats Include in Intune assignments.

### Q19: **B. No / Yes / Yes**
Linux Intune cannot manage disk encryption (No). APP encrypts work data in protected apps (Yes). Settings Catalog covers thousands of settings (Yes).

### Q20: **B. Endpoint Security Manager**
The role focused on Defender + baselines + ASR.

### Q21: **A. Create a custom Intune role with scope tags assigning EMEA**
Scope tags + custom role = regional admin pattern.

### Q22: **B. Managed Google Play account**
Android Enterprise requires Managed Google Play; Google Workspace is unrelated.

### Q23: **A. Self-enroll, install apps from the catalog, see compliance status, request help**
The Company Portal's core user-facing functions.

### Q24: **A. Yes / Yes / No**
Suite includes EPM (Yes). Plan 2 requires Plan 1 (Yes). Business Premium includes Intune Plan 1 but with some limitations on apps and config (No, not full unrestricted Plan 1).

### Q25: **B. 1 tenant + scope tags per region + custom RBAC roles**
The Heineken model. Separate tenants would mean 5× admin overhead and migration friction.

---

## 📊 Score Yourself

- 24–25/25 → 🏆 Intune fundamentals mastered.
- 21–23/25 → ✅ Solid. Note your misses; move on.
- 17–20/25 → ⚠️ Re-read MDM/MAM and licensing matrix sections.
- <17/25 → 🔁 Re-read the entire module before continuing.

---

## 🃏 Add To Your Flashcards

- MDM vs MAM (verbatim one-line definitions)
- Plan 1 / Plan 2 / Suite features table
- 6 platforms Intune manages + their quirks (Linux narrow, iOS needs APNs, Android needs Managed Google Play)
- Exclude beats Include
- Scope tags = admin visibility partition
- APP cut/copy/paste settings
- Settings Catalog as modern default
- Intune admin center URL: intune.microsoft.com

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md) for one-page review, then [Module 4](../Module-04-Enrollment-Compliance/Reading.md)
