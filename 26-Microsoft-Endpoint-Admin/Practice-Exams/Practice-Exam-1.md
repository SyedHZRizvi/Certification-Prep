# 🧪 Practice Exam 1 — MD-102 (First Half)

> **Conditions:** Set a 70-minute timer. 40 questions. Treat it like the real thing.
> **Pass mark:** 28/40 (≈ 70%, matching the real exam)
> Take this AFTER finishing Modules 1–4.

---

## 📝 Questions

### 1. The three Microsoft Entra device join states are:
A. Domain joined / Workgroup / Entra joined
B. Entra registered / Entra joined / Microsoft Entra hybrid joined
C. Online / Offline / Hybrid
D. Personal / Corporate / Shared

### 2. The MDM vs MAM distinction:
A. MDM is for Windows; MAM is for mobile
B. MDM enrolls the device; MAM protects data inside specific apps
C. MDM is older technology being phased out
D. MAM requires Entra ID P2

### 3. A personally owned Android phone needing corporate email access — without device enrollment — should use:
A. Hybrid Azure AD join
B. App Protection Policy + Conditional Access requiring approved client app
C. Full MDM enrollment
D. Block all mobile access

### 4. The three Zero Trust principles are:
A. Trust but verify, Patch always, Audit
B. Verify explicitly, Least privilege, Assume breach
C. Identify, Protect, Detect
D. Authentication, Authorization, Audit

### 5. The canonical modern endpoint stack for a 1,000-device corporate Windows 11 fleet is:
A. AD domain join + GPO + WSUS
B. Entra joined + Intune + Conditional Access + Defender for Endpoint
C. Workgroup + manual config
D. ConfigMgr only

### 6. Co-management enables:
A. Two users to share a device
B. A Windows device managed by both Configuration Manager and Intune simultaneously
C. Defender managing Intune
D. Multi-tenant Intune access

### 7. The number of co-management workloads (sliders) is:
A. 3
B. 5
C. 7
D. 10

### 8. Which Autopilot mode requires NO user interaction at OOBE?
A. User-driven
B. Pre-provisioned
C. Self-deploying
D. Autopilot for existing devices

### 9. Self-deploying Autopilot mode requires:
A. TPM 1.2
B. TPM 2.0 with attestation
C. Secure Boot disabled
D. UEFI Class 2

### 10. **Order these steps** for direct-ship Autopilot user-driven setup:

1. Pilot with one user
2. OEM registers device hashes to your tenant
3. Create Autopilot dynamic device group
4. Create + assign Autopilot profile
5. Build the Enrollment Status Page

A. 1 → 2 → 3 → 4 → 5
B. 2 → 3 → 4 → 5 → 1
C. 3 → 2 → 4 → 5 → 1
D. 5 → 4 → 3 → 2 → 1

### 11. The default Enrollment Status Page (ESP) timeout is:
A. 30 minutes
B. 60 minutes
C. 120 minutes
D. 24 hours

### 12. A shop floor with NO internet at OOBE needs to enroll 50 devices. Best option:
A. Autopilot self-deploying
B. Provisioning packages on USB applied at OOBE
C. Autopilot user-driven
D. Hybrid Autopilot

### 13. Windows 11 system requirements include:
A. TPM 1.2 minimum
B. 2 GB RAM minimum
C. TPM 2.0, UEFI + Secure Boot, supported 64-bit CPU
D. BIOS-only firmware

### 14. The Microsoft Intune admin center URL is:
A. portal.azure.com
B. admin.microsoft.com
C. intune.microsoft.com
D. endpoint.contoso.com

### 15. iOS device management with Intune requires which Apple integration certificate?
A. Code Signing Cert
B. Apple Push Notification service (APNs) certificate
C. SSL EV Cert
D. None

### 16. Linux Intune management in 2024+ supports:
A. Full settings catalog parity with Windows
B. Compliance policies + Microsoft Edge configuration only
C. App deployment of any DEB/RPM
D. Full BitLocker equivalent

### 17. Intune assigns policies and apps to:
A. Individual users directly
B. Microsoft Entra ID groups
C. Active Directory OUs
D. Subscription IDs

### 18. When a user is in both an Include group AND an Exclude group for the same policy:
A. Include wins (user receives policy)
B. Exclude wins (user does NOT receive policy)
C. User receives a hybrid version
D. Conflict logged as sync error

### 19. **Yes/No** — Mark each statement.

**S1:** A device can be both Entra registered AND Entra joined simultaneously.
**S2:** A device can be Entra joined and Configuration Manager–managed simultaneously.
**S3:** A personally owned Android phone can be MDM-enrolled via Android Enterprise work profile.

A. Yes / Yes / Yes
B. No / Yes / Yes
C. Yes / Yes / No
D. No / No / Yes

### 20. Which Intune plan includes Endpoint Privilege Management (EPM)?
A. Plan 1
B. Plan 2
C. Microsoft Intune Suite
D. Free

### 21. The Microsoft 365 E3 license bundles Intune at what plan?
A. Plan 1
B. Plan 2
C. Suite
D. No Intune

### 22. Apple Business Manager (ABM) is used to:
A. Manage Apple Music subscriptions
B. Assign company-purchased Apple devices to MDM and bulk-buy apps via VPP
C. Replace Conditional Access for iOS
D. Manage user Apple IDs only

### 23. Supervised iOS / iPadOS devices require:
A. Manual enrollment via Company Portal
B. Apple Business Manager + Automated Device Enrollment (ADE)
C. Knox Mobile Enrollment
D. A configuration profile only

### 24. The four Android Enterprise enrollment scenarios are:
A. BYOD, COPE, Fully Managed, Dedicated
B. AOSP, Knox, BYOD, Carrier
C. Personal, Corporate, Family, Shared
D. Free, Pro, Enterprise, Ultimate

### 25. A barcode-scanner tablet shared across warehouse shifts is BEST enrolled as:
A. Personally owned with work profile
B. COPE
C. Fully Managed
D. Dedicated (COSU)

### 26. Android Enterprise requires which Google integration?
A. Google Workspace subscription
B. Managed Google Play account
C. Google Cloud Platform tenant
D. Android Device Manager only

### 27. Enrollment restrictions in Intune target:
A. Device groups
B. User groups
C. Subscription IDs
D. Conditional Access policies

### 28. A compliance policy returns:
A. Allow / Deny
B. Compliant / Not compliant / In grace period / Not evaluated
C. Pass / Fail
D. Audit / Block

### 29. Compliance is a flag. What actually BLOCKS sign-in based on it?
A. Microsoft Defender for Endpoint
B. Conditional Access "Require compliant device" grant control
C. Intune RBAC
D. The Company Portal

### 30. A Conditional Access policy in "Report-only" mode:
A. Blocks access but logs the attempt
B. Logs what the policy would have done without enforcing it
C. Is the same as disabled
D. Sends daily emails to admins

### 31. The "Filter for Devices" Conditional Access condition lets you:
A. Filter Defender alerts
B. Target or exclude devices by attribute without using groups
C. Block all non-Windows devices
D. Replace dynamic device groups

### 32. **Order these steps** to enforce "compliant device required" for SharePoint Online access:

1. Test the CA policy in Report-only mode
2. Build the compliance policy (Windows + iOS + Android variants)
3. Verify devices report compliant
4. Switch CA to On after Report-only validation
5. Create the CA policy (apps = SharePoint, grant = require compliant)

A. 2 → 3 → 5 → 1 → 4
B. 5 → 4 → 1 → 2 → 3
C. 1 → 2 → 3 → 4 → 5
D. 3 → 2 → 1 → 5 → 4

### 33. **Yes/No** — Enrollment & compliance.

**S1:** Supervised iOS devices can be locked to a single app via kiosk profile.
**S2:** Enrollment restrictions assign to device groups.
**S3:** Android Enterprise Dedicated devices commonly run a single app.

A. Yes / No / Yes
B. Yes / Yes / Yes
C. No / Yes / No
D. Yes / No / No

### 34. To exclude a single break-glass admin account from ALL CA enforcement:
A. Delete its CA-eligible groups
B. Use the Users → Exclude clause on every CA policy
C. Give it Global Administrator role only
D. Skip — break-glass should be subject to all policies

### 35. Apple's Volume Purchase Program (VPP) is used to:
A. Manage iCloud storage
B. Purchase + license iOS App Store apps in bulk and assign tokens
C. Bypass Conditional Access
D. Manage Apple software updates

### 36. To enforce "personal phones must use Outlook Mobile, not native Mail, for corporate email":
A. A configuration profile
B. CA with "Require approved client app" + "Require app protection policy" + block legacy/ActiveSync
C. A compliance policy with email rules
D. Enrollment restrictions

### 37. Selective wipe via APP removes:
A. The entire device
B. Only the work data in protected apps; personal data untouched
C. The work account only
D. Blocks sign-in

### 38. Which describes a hybrid Azure AD (Entra hybrid) joined device?
A. Joined to Entra ID only
B. Joined to on-prem AD only
C. Joined to both on-prem AD and Entra ID, with synced device objects
D. Joined to neither — workgroup

### 39. **Yes/No** — Per statement.

**S1:** Conditional Access requires Entra ID P1 minimum.
**S2:** Identity Protection (risk-based CA) requires Entra ID P2.
**S3:** Microsoft 365 E5 includes Intune Plan 2 by default.

A. Yes / Yes / Yes
B. Yes / Yes / No
C. No / Yes / Yes
D. Yes / No / No

### 40. The Unilever BYOD model uses:
A. Full MDM enrollment for all personal devices
B. MAM-only (no enrollment) + CA require approved client app + require APP + block legacy/ActiveSync
C. Trust the corporate network
D. No mobile email access

---

## 🎯 Answer Key (No Cheating!)

```
1.  B    11. B    21. A    31. B
2.  B    12. B    22. B    32. A
3.  B    13. C    23. B    33. A
4.  B    14. C    24. A    34. B
5.  B    15. B    25. D    35. B
6.  B    16. B    26. B    36. B
7.  C    17. B    27. B    37. B
8.  C    18. B    28. B    38. C
9.  B    19. B    29. B    39. B
10. B    20. C    30. B    40. B
```

---

## 📊 Scoring

| Score | Verdict |
|-------|---------|
| 38–40 | 🏆 Excellent — ready for Practice-Exam-2 |
| 28–37 | ✅ On track. Review missed Qs, then continue. |
| 20–27 | ⚠️ Re-study weak modules (use the table below) |
| <20   | 🔁 Restart from Module 1 |

---

## 🔍 Review Process

For EACH wrong answer:
1. Identify which module covered it (see map below)
2. Re-read that module's Reading.md
3. Add an Anki flashcard for the concept
4. Try the question again 3 days later

### Wrong-answer → Module map

| Question # | Module |
|------------|--------|
| 1, 2, 3, 4, 5, 6, 7, 38, 39 | Module 1 (Modern Workplace) |
| 8, 9, 10, 11, 12, 13 | Module 2 (Windows 11 Deployment) |
| 14, 15, 16, 17, 18, 19, 20, 21 | Module 3 (Intune Fundamentals) |
| 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 40 | Module 4 (Enrollment & Compliance) |

---

➡️ When ready: continue with [Module 5: App Deployment](../Module-05-App-Deployment/Reading.md), then [Practice Exam 2](./Practice-Exam-2.md).

---

## Detailed answer rationales

> Per the gold-standard spec, every option is explained. Use these to retire concepts you missed.

**Q1. Answer: B.** *Why B is correct.* The three Microsoft Entra device join states are Entra registered (BYOD), Entra joined (cloud-only corporate), and Microsoft Entra hybrid joined (both AD + Entra). *Why the other options are wrong.* **A**: Domain join is the legacy AD term — not modern Microsoft terminology. **C**: Online/Offline/Hybrid is not a join-state taxonomy. **D**: Personal/Corporate/Shared describes ownership, not join state. *Exam-takeaway.* Memorize the three join states.

**Q2. Answer: B.** *Why B is correct.* MDM enrolls the entire device; MAM protects corporate data inside specific apps. This is the single most important Intune distinction. *Why the other options are wrong.* **A**: Both work across Windows + mobile. **C**: MDM is not being phased out. **D**: Neither requires P2. *Exam-takeaway.* This distinction underlies dozens of MD-102 questions.

**Q3. Answer: B.** *Why B is correct.* MAM without enrollment via APP + CA require approved client app is the canonical BYOD pattern. *Why the other options are wrong.* **A**: Hybrid Azure AD join doesn't apply to phones. **C**: Forcing MDM on personal devices kills adoption. **D**: Blocking all access is overkill. *Exam-takeaway.* The Unilever-style answer for BYOD.

**Q4. Answer: B.** *Why B is correct.* Microsoft's three Zero Trust principles verbatim. *Why the other options are wrong.* **A**: "Trust but verify" is the OPPOSITE of Zero Trust. **C**: NIST CSF functions, not Zero Trust principles. **D**: AAA is a different security framework. *Exam-takeaway.* Memorize the three ZT principles word-for-word.

**Q5. Answer: B.** *Why B is correct.* The modern cloud-native endpoint stack per Microsoft's recommendation. *Why the other options are wrong.* **A**: The legacy AD/GPO/WSUS stack — wrong era. **C**: Workgroup = no management. **D**: ConfigMgr alone misses cloud capabilities. *Exam-takeaway.* This is the canonical 2024+ stack.

**Q6. Answer: B.** *Why B is correct.* Co-management = parallel ConfigMgr + Intune management of one device. *Why the other options are wrong.* **A**: Co-management isn't about users. **C**: Defender doesn't manage Intune. **D**: Multi-tenant is a different concept. *Exam-takeaway.* The bridge between legacy and modern.

**Q7. Answer: C.** *Why C is correct.* Seven co-management workloads: compliance, Windows Update, resource access, Endpoint Protection, device config, Office Click-to-Run, client apps. *Why the other options are wrong.* All other counts wrong. *Exam-takeaway.* Memorize the seven.

**Q8. Answer: C.** *Why C is correct.* Self-deploying has no user interaction. *Why the other options are wrong.* **A**: User-driven needs user sign-in. **B**: Pre-provisioned has user finish step. **D**: For-existing devices requires the device to already exist. *Exam-takeaway.* Self-deploying = kiosk/shared.

**Q9. Answer: B.** *Why B is correct.* TPM 2.0 attestation required for self-deploying. *Why the other options are wrong.* TPM 1.2, disabled Secure Boot, or UEFI Class 2 all insufficient. *Exam-takeaway.* TPM 2.0 attestation = the gating requirement.

**Q10. Answer: B.** *Why B is correct.* Hash registration → group → profile → ESP → pilot. *Why the other options are wrong.* Other sequences put pilot too early or skip setup. *Exam-takeaway.* Pilot is the LAST step before broad rollout.

**Q11. Answer: B.** *Why B is correct.* Default ESP timeout = 60 minutes. *Why the other options are wrong.* All wrong defaults. *Exam-takeaway.* Tune to your fleet.

**Q12. Answer: B.** *Why B is correct.* No internet at OOBE = .ppkg provisioning packages. *Why the other options are wrong.* All require internet. *Exam-takeaway.* "Low bandwidth / air-gapped" = .ppkg.

**Q13. Answer: C.** *Why C is correct.* Windows 11 hard requirements include TPM 2.0, UEFI + Secure Boot, supported 64-bit CPU. *Why the other options are wrong.* Other claims fall below requirements. *Exam-takeaway.* TPM 2.0 is non-negotiable.

**Q14. Answer: C.** *Why C is correct.* The current Intune admin center URL. *Why the other options are wrong.* Other URLs are different products. *Exam-takeaway.* `intune.microsoft.com` (replaces older `endpoint.microsoft.com`).

**Q15. Answer: B.** *Why B is correct.* Apple Push Notification service (APNs) cert is required for iOS/macOS MDM. *Why the other options are wrong.* Other certs are unrelated. *Exam-takeaway.* APNs annual renewal is operational reality.

**Q16. Answer: B.** *Why B is correct.* Linux Intune is compliance + Edge cfg only in 2024+. *Why the other options are wrong.* No full parity, no app deployment, no BitLocker equivalent. *Exam-takeaway.* Narrow Linux story.

**Q17. Answer: B.** *Why B is correct.* Intune assigns to Entra ID groups, never directly to users. *Why the other options are wrong.* AD OUs are on-prem. Subscription IDs are billing. *Exam-takeaway.* Groups always.

**Q18. Answer: B.** *Why B is correct.* Exclude beats Include in Intune assignments. *Why the other options are wrong.* No conflict log, no hybrid policy. *Exam-takeaway.* Memorize: Exclude wins.

**Q19. Answer: B.** *Why B is correct.* S1 No (can't be both join states). S2 Yes (co-management). S3 Yes (Android Enterprise BYOD work profile). *Why the other options are wrong.* Misreads one or more statements. *Exam-takeaway.* The three Entra join states are mutually exclusive.

**Q20. Answer: C.** *Why C is correct.* EPM is in the Microsoft Intune Suite (Suite-only feature). *Why the other options are wrong.* Plan 1 = core. Plan 2 = analytics + remote help. Free = no EPM. *Exam-takeaway.* Suite = EPM, Cloud PKI, Tunnel for MAM.

**Q21. Answer: A.** *Why A is correct.* M365 E3 includes Intune Plan 1. *Why the other options are wrong.* Plan 2 / Suite are add-ons. *Exam-takeaway.* M365 E3 = Plan 1; E5 also Plan 1 with Plan 2 features sold separately.

**Q22. Answer: B.** *Why B is correct.* ABM is Apple's enterprise device/app portal. *Why the other options are wrong.* All distractor descriptions. *Exam-takeaway.* ABM enables ADE + VPP.

**Q23. Answer: B.** *Why B is correct.* Supervision = ADE/ABM only. *Why the other options are wrong.* Manual enrollment can't supervise. Knox is for Android. Config profile alone insufficient. *Exam-takeaway.* Supervised = enrolled via ABM + ADE.

**Q24. Answer: A.** *Why A is correct.* BYOD work profile, COPE, Fully Managed, Dedicated (COSU). *Why the other options are wrong.* Other taxonomies invented. *Exam-takeaway.* Memorize the four scenarios.

**Q25. Answer: D.** *Why D is correct.* Shared single-purpose corporate device = Dedicated. *Why the other options are wrong.* BYOD = personal phone. COPE = personal allowed. Fully Managed = single user. *Exam-takeaway.* Dedicated/COSU = kiosk/shared.

**Q26. Answer: B.** *Why B is correct.* Managed Google Play required for all Android Enterprise. *Why the other options are wrong.* Workspace, GCP, Device Manager all unrelated. *Exam-takeaway.* Managed Google Play is the Android Enterprise prerequisite.

**Q27. Answer: B.** *Why B is correct.* Enrollment restrictions target user groups (device doesn't exist yet). *Why the other options are wrong.* No device records pre-enrollment. *Exam-takeaway.* User groups for enrollment restrictions.

**Q28. Answer: B.** *Why B is correct.* Compliance returns four states: Compliant, Not compliant, In grace period, Not evaluated. *Why the other options are wrong.* Allow/Deny is CA. Pass/Fail too simplistic. Audit/Block is for ASR. *Exam-takeaway.* Memorize four compliance states.

**Q29. Answer: B.** *Why B is correct.* CA "Require compliant device" grant control enforces the flag. *Why the other options are wrong.* MDE provides signals; Intune RBAC is admin permissions; Company Portal is end-user UX. *Exam-takeaway.* Compliance = flag; CA = enforcer.

**Q30. Answer: B.** *Why B is correct.* Report-only logs what the policy would have done without enforcing. *Why the other options are wrong.* Doesn't block, isn't disabled, no email by default. *Exam-takeaway.* Always Report-only before On.

**Q31. Answer: B.** *Why B is correct.* Filter for Devices targets/excludes by device attribute. *Why the other options are wrong.* Doesn't filter alerts, doesn't only block non-Windows, doesn't replace dynamic groups. *Exam-takeaway.* Use for attribute-based targeting.

**Q32. Answer: A.** *Why A is correct.* Compliance built → verify sync → CA created → Report-only → switch on. *Why the other options are wrong.* Other sequences skip or invert key steps. *Exam-takeaway.* This is the canonical compliance + CA rollout.

**Q33. Answer: A.** *Why A is correct.* Supervised iOS supports kiosk (Yes). Enrollment restrictions are USER groups (No). Dedicated = single app (Yes). *Why the other options are wrong.* Misreads. *Exam-takeaway.* Enrollment restrictions ALWAYS target users.

**Q34. Answer: B.** *Why B is correct.* Exclude break-glass from every CA — the standard pattern. *Why the other options are wrong.* Deleting groups loses break-glass. GA alone doesn't bypass CA. Including breaks the lockout-insurance principle. *Exam-takeaway.* Mandatory CA exclusion.

**Q35. Answer: B.** *Why B is correct.* VPP = enterprise iOS app bulk licensing via ABM. *Why the other options are wrong.* iCloud unrelated. CA unrelated. Software updates unrelated. *Exam-takeaway.* VPP requires ABM + token.

**Q36. Answer: B.** *Why B is correct.* The canonical Unilever-style BYOD answer. *Why the other options are wrong.* Config profile alone insufficient. Compliance policy doesn't gate app choice. Enrollment restrictions wrong scope. *Exam-takeaway.* CA + APP + block legacy = the answer.

**Q37. Answer: B.** *Why B is correct.* Selective wipe = app-data-only wipe via APP. *Why the other options are wrong.* Not full device. Not work account only. Not sign-in block. *Exam-takeaway.* MAM-only enables surgical wipe.

**Q38. Answer: C.** *Why C is correct.* Hybrid join = both AD + Entra. *Why the other options are wrong.* "Only" answers wrong. Workgroup is neither. *Exam-takeaway.* Hybrid = both.

**Q39. Answer: B.** *Why B is correct.* CA = P1 (Yes). Identity Protection = P2 (Yes). M365 E5 includes Intune Plan 1, not Plan 2 (No — Plan 2 sold separately). *Why the other options are wrong.* Misreads license bundling. *Exam-takeaway.* Memorize the licensing matrix.

**Q40. Answer: B.** *Why B is correct.* The Unilever-style BYOD model verbatim. *Why the other options are wrong.* Full MDM, network trust, no mobile email — all anti-modern. *Exam-takeaway.* MAM-only + CA + block legacy.
