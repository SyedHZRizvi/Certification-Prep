# 🏆 Final Mock Exam — MD-102 (Real Format Simulation)

> **Conditions:** **100 minutes. 50 questions.** Match the real MD-102 conditions exactly.
> **Pass mark:** 35/50 (≈ 70%, matching the real exam's 700/1000 cut)
> Take this 2–3 days before your real exam, NOT the day before. Use the gap to fix weak areas.

> **Mode for this exam:** Treat it as a closed-book final. Print or load on a second monitor. Do not look at your modules.

---

## 📝 Questions

### 1. The three Microsoft Entra device join states are:
A. Domain joined / Workgroup / Entra joined
B. Entra registered / Entra joined / Microsoft Entra hybrid joined
C. Online / Offline / Hybrid
D. Personal / Corporate / Shared

### 2. The three Zero Trust principles are:
A. Trust but verify, Patch always, Audit
B. Verify explicitly, Least privilege, Assume breach
C. Identify, Protect, Detect
D. Authentication, Authorization, Audit

### 3. The number of co-management workloads is:
A. 3
B. 5
C. 7
D. 10

### 4. Which Autopilot mode requires NO user interaction at OOBE?
A. User-driven
B. Pre-provisioned
C. Self-deploying
D. Autopilot for existing devices

### 5. Self-deploying Autopilot mode requires:
A. TPM 1.2
B. TPM 2.0 with attestation
C. Secure Boot disabled
D. UEFI Class 2

### 6. The default Enrollment Status Page (ESP) timeout is:
A. 30 minutes
B. 60 minutes
C. 120 minutes
D. 24 hours

### 7. A shop floor with NO internet at OOBE needs to enroll 50 devices. Best:
A. Autopilot self-deploying
B. Provisioning packages on USB
C. Autopilot user-driven
D. Hybrid Autopilot

### 8. The Microsoft Intune admin center URL is:
A. portal.azure.com
B. admin.microsoft.com
C. intune.microsoft.com
D. endpoint.contoso.com

### 9. The MDM vs MAM distinction:
A. MDM is for Windows; MAM for mobile
B. MDM enrolls the device; MAM protects data inside specific apps
C. MDM is older technology being phased out
D. MAM requires Entra ID P2

### 10. iOS management with Intune requires which cert?
A. Code Signing
B. Apple Push Notification service (APNs)
C. SSL EV
D. None

### 11. Which Intune plan includes Endpoint Privilege Management (EPM)?
A. Plan 1
B. Plan 2
C. Microsoft Intune Suite
D. Free

### 12. The Microsoft 365 E3 license bundles Intune at what plan?
A. Plan 1
B. Plan 2
C. Suite
D. No Intune

### 13. When a user is in both Include AND Exclude groups for the same policy:
A. Include wins
B. Exclude wins
C. Hybrid policy
D. Sync error

### 14. Apple Business Manager (ABM) is used to:
A. Manage Apple Music subscriptions
B. Assign company-purchased Apple devices to MDM and bulk-buy apps via VPP
C. Replace Conditional Access for iOS
D. Manage user Apple IDs only

### 15. The four Android Enterprise enrollment scenarios are:
A. BYOD, COPE, Fully Managed, Dedicated
B. AOSP, Knox, BYOD, Carrier
C. Personal, Corporate, Family, Shared
D. Free, Pro, Enterprise, Ultimate

### 16. A barcode-scanner tablet shared across warehouse shifts is BEST enrolled as:
A. Personally owned with work profile
B. COPE
C. Fully Managed
D. Dedicated (COSU)

### 17. Enrollment restrictions in Intune target:
A. Device groups
B. User groups
C. Subscription IDs
D. Conditional Access policies

### 18. A compliance policy returns:
A. Allow / Deny
B. Compliant / Not compliant / In grace / Not evaluated
C. Pass / Fail
D. Audit / Block

### 19. What actually BLOCKS sign-in based on compliance flag?
A. Microsoft Defender for Endpoint
B. Conditional Access "Require compliant device" grant control
C. Intune RBAC
D. The Company Portal

### 20. A Conditional Access policy in "Report-only" mode:
A. Blocks but logs
B. Logs what the policy would have done without enforcing
C. Same as disabled
D. Sends daily emails

### 21. To exclude break-glass admins from ALL CA enforcement:
A. Delete CA-eligible groups
B. Use Users → Exclude on every CA policy
C. Give Global Administrator role only
D. Don't — break-glass must be subject to all policies

### 22. **Order these steps** to enforce "compliant device required" for SharePoint:

1. Test the CA policy in Report-only mode
2. Build the compliance policy (Windows + iOS + Android variants)
3. Verify devices report compliant
4. Switch CA to On after Report-only validation
5. Create the CA policy (apps = SharePoint, grant = require compliant)

A. 2 → 3 → 5 → 1 → 4
B. 5 → 4 → 1 → 2 → 3
C. 1 → 2 → 3 → 4 → 5
D. 3 → 2 → 1 → 5 → 4

### 23. The Intune Windows app type for packaged installers is:
A. LOB
B. Microsoft Store app
C. Win32 app (.intunewin)
D. Web app

### 24. The tool that wraps an installer into `.intunewin` is:
A. IntuneWinAppUtil.exe
B. msiexec.exe
C. AppWrapper.exe
D. MakeAppx.exe

### 25. The most common cause of "app stuck in Installing forever":
A. Insufficient disk space
B. Corrupt installer
C. The detection rule never returns true
D. Conditional Access blocking

### 26. Maximum supersedence depth for Win32 apps:
A. 1
B. 2
C. 5
D. Unlimited

### 27. Assignment intent "Required" means:
A. Auto-installs on every targeted device
B. Appears in Company Portal for user-pick install
C. Force-removed
D. Shows only to compliant devices

### 28. The 4 detection rule types for Win32 apps:
A. MSI / file / registry / custom PowerShell
B. MSI / DLL / process / registry
C. EXE / DLL / file / network
D. URL / file / hash / signature

### 29. Android Enterprise apps deploy through:
A. Direct APK upload
B. Managed Google Play
C. Amazon Appstore
D. F-Droid

### 30. Which Defender for Endpoint plan includes EDR?
A. Plan 1
B. Plan 2
C. Both
D. Defender Antivirus standalone

### 31. The three ASR rule modes are:
A. On / Off / Monitor
B. Audit / Block / Warn
C. Allow / Deny / Audit
D. Pass / Fail / Skip

### 32. The recommended ASR rollout pattern is:
A. Block on day 1
B. Audit first, monitor 7–14 days, then Block
C. Warn permanently
D. Off until incident

### 33. BitLocker recovery keys for Intune-managed Entra-joined devices are escrowed to:
A. The user's Entra account
B. The device object in Microsoft Entra ID
C. A local file
D. Active Directory only

### 34. The ASR rule blocking Office applications from creating child processes stops:
A. Word launching PowerShell or cmd.exe
B. Excel from opening other workbooks
C. Outlook from displaying emails
D. PowerPoint from saving files

### 35. "EDR in block mode" is correct when:
A. You have no AV installed
B. A third-party AV is primary, but you want Defender's response capabilities
C. You want to disable Defender entirely
D. You're using ConfigMgr only

### 36. Microsoft Defender for Cloud Apps is:
A. An endpoint antivirus
B. A Cloud Access Security Broker (CASB) for SaaS apps
C. A replacement for Conditional Access
D. An email gateway

### 37. Tamper protection:
A. Filters URLs
B. Prevents users + malware from disabling Defender locally
C. Blocks USB
D. Encrypts the disk

### 38. Windows Update for Business controls three update categories:
A. Feature, Quality, Security
B. Feature, Quality, Driver
C. Cumulative, Optional, Critical
D. Daily, Weekly, Monthly

### 39. The canonical update ring topology is:
A. All users in one ring
B. Pilot → Broad → Deferred
C. Random rolling
D. Per-OEM ring

### 40. Maximum pause duration for an update ring:
A. 7 days
B. 14 days
C. 35 days
D. Unlimited

### 41. An expedited update:
A. Respects ring deferrals
B. Overrides ring deferrals to force fast deployment of a specific KB
C. Same as feature update
D. Requires WSUS

### 42. Windows 11 Enterprise feature update end-of-servicing:
A. 12 months
B. 24 months
C. 36 months
D. 60 months

### 43. Endpoint Analytics scores fleet across how many categories?
A. 3
B. 5
C. 7
D. 10

### 44. Proactive remediations require:
A. Intune Plan 1
B. Intune Plan 2 or Suite
C. Defender for Endpoint only
D. No license

### 45. The MDM Diagnostics Report on Windows 11 is:
A. A separate download
B. Built into Windows 11 (Settings → Accounts → Access work or school → Info → Export)
C. Only with Intune Suite
D. Generated automatically daily

### 46. Intune Management Extension logs are at:
A. C:\Windows\Logs\IME
B. %ProgramData%\Microsoft\IntuneManagementExtension\Logs
C. %APPDATA%\IntuneLogs
D. C:\Logs\Intune

### 47. The remote action that performs a factory reset:
A. Restart
B. Sync
C. Wipe
D. Retire

### 48. The remote action that removes ONLY organizational data:
A. Wipe
B. Retire
C. Fresh start
D. Autopilot reset

### 49. **Yes/No** — Final synthesis.

**S1:** A device can be both Entra registered AND Entra joined simultaneously.
**S2:** Plan 1 of Defender for Endpoint includes EDR.
**S3:** Microsoft Autopatch hands ring orchestration to Microsoft.

A. Yes / Yes / Yes
B. No / No / Yes
C. Yes / No / Yes
D. No / Yes / No

### 50. The Unilever-style BYOD architecture uses:
A. Full MDM enrollment for all personal devices
B. MAM-only (no enrollment) + CA require approved client app + require APP + block legacy/ActiveSync
C. Trust the corporate network
D. No mobile email access

---

## 🎯 Answer Key (No Cheating!)

```
1.  B    11. C    21. B    31. B    41. B
2.  B    12. A    22. A    32. B    42. C
3.  C    13. B    23. C    33. B    43. B
4.  C    14. B    24. A    34. A    44. B
5.  B    15. A    25. C    35. B    45. B
6.  B    16. D    26. B    36. B    46. B
7.  B    17. B    27. A    37. B    47. C
8.  C    18. B    28. A    38. B    48. B
9.  B    19. B    29. B    39. B    49. B
10. B    20. B    30. B    40. C    50. B
```

---

## 📊 Scoring

| Score | Verdict | Action |
|-------|---------|--------|
| 47–50 | 🏆 Crushing it — schedule exam this week | Light review of weak Qs only |
| 40–46 | ✅ Comfortable pass | Review missed Qs + retake weakest module quiz |
| 35–39 | ⚠️ Will pass but tight | 2–3 days of targeted review before exam |
| 28–34 | 🟡 Borderline — don't sit yet | Re-read 2–3 weakest modules, retake in 7 days |
| <28 | 🔁 Not ready | Restart problematic modules + re-take Practice 1 and 2 |

---

## 🔍 Final Prep Checklist

Before exam day:

- [ ] Have you actually enrolled a real Windows + iOS + Android device into Intune?
- [ ] Have you packaged at least one Win32 app with IntuneWinAppUtil?
- [ ] Can you draw the compliance + CA flow on paper without notes?
- [ ] Can you recite the 4 Autopilot modes and one use case each?
- [ ] Have you generated an MDM Diagnostics Report on your own device?
- [ ] Have you built 3 update rings (Pilot/Broad/Deferred)?
- [ ] Can you explain Plan 1 vs Plan 2 differences for MDE and Intune?

**The day before exam:**
- Light review only (cheat sheets, not full readings)
- 8 hours of sleep
- Test the Pearson VUE OnVUE setup or arrive 30 minutes early to test center

**Day of exam:**
- 100 minutes / 50 questions = ~2 minutes per question
- Flag and skip anything > 90 seconds — return later
- Read the question stem TWICE before reading the options
- Eliminate obviously wrong options first
- When two answers seem right, look for the qualifier ("BEST", "MOST EFFICIENT", "FIRST step")

Good luck! 💪

---

## Detailed answer rationales

**Q1. Answer: B.** Three Entra join states: registered (BYOD), joined (cloud-only), hybrid joined (AD + Entra).

**Q2. Answer: B.** Microsoft's three Zero Trust principles verbatim.

**Q3. Answer: C.** Seven co-management workloads.

**Q4. Answer: C.** Self-deploying = no user interaction.

**Q5. Answer: B.** TPM 2.0 attestation required.

**Q6. Answer: B.** 60-minute default ESP timeout.

**Q7. Answer: B.** No internet at OOBE = .ppkg.

**Q8. Answer: C.** intune.microsoft.com.

**Q9. Answer: B.** MDM enrolls device; MAM protects app data.

**Q10. Answer: B.** APNs cert required for iOS.

**Q11. Answer: C.** EPM is Suite-only.

**Q12. Answer: A.** M365 E3 = Intune Plan 1.

**Q13. Answer: B.** Exclude beats Include.

**Q14. Answer: B.** ABM = Apple's enterprise portal for device assignment + VPP.

**Q15. Answer: A.** BYOD work profile, COPE, Fully Managed, Dedicated.

**Q16. Answer: D.** Shared single-purpose corporate = Dedicated (COSU).

**Q17. Answer: B.** Enrollment restrictions target user groups (no device record yet).

**Q18. Answer: B.** Four compliance states.

**Q19. Answer: B.** CA "Require compliant device" is the enforcer.

**Q20. Answer: B.** Report-only logs what would have happened.

**Q21. Answer: B.** Standard pattern — exclude break-glass from every CA policy.

**Q22. Answer: A.** Compliance built → verify sync → CA created → Report-only → switch on.

**Q23. Answer: C.** Win32 app type for packaged installers.

**Q24. Answer: A.** IntuneWinAppUtil.exe is the Microsoft wrapper.

**Q25. Answer: C.** Detection rule misconfiguration is the #1 cause.

**Q26. Answer: B.** Max supersedence depth = 2.

**Q27. Answer: A.** Required = forced install.

**Q28. Answer: A.** MSI / file / registry / custom PowerShell.

**Q29. Answer: B.** Managed Google Play for all Android Enterprise apps.

**Q30. Answer: B.** EDR is Plan 2 differentiator.

**Q31. Answer: B.** Audit / Block / Warn.

**Q32. Answer: B.** Audit first, monitor, then Block.

**Q33. Answer: B.** Per device object in Entra ID.

**Q34. Answer: A.** Word/Excel launching PowerShell/cmd.exe — the canonical macro attack chain.

**Q35. Answer: B.** EDR enforces while Defender stays passive when 3rd-party AV is primary.

**Q36. Answer: B.** Defender for Cloud Apps = CASB.

**Q37. Answer: B.** Prevents disabling Defender locally.

**Q38. Answer: B.** Feature / Quality / Driver — the three WUfB categories.

**Q39. Answer: B.** Pilot → Broad → Deferred is the canonical topology.

**Q40. Answer: C.** Max 35 days pause.

**Q41. Answer: B.** Expedited overrides ring deferrals.

**Q42. Answer: C.** Enterprise/Education feature update = 36 months servicing.

**Q43. Answer: B.** 5 Endpoint Analytics categories.

**Q44. Answer: B.** Plan 2 or Suite for proactive remediations.

**Q45. Answer: B.** Built into Windows 11.

**Q46. Answer: B.** IME logs at `%ProgramData%\Microsoft\IntuneManagementExtension\Logs`.

**Q47. Answer: C.** Wipe = factory reset.

**Q48. Answer: B.** Retire = remove org-only.

**Q49. Answer: B.** S1 No (mutually exclusive). S2 No (EDR is Plan 2 only). S3 Yes (Microsoft Autopatch hands rings to Microsoft).

**Q50. Answer: B.** MAM-only + CA require approved client app + require APP + block legacy/ActiveSync — the Unilever model.
