# 🧪 Practice Exam 2, MD-102 (Second Half + Synthesis)

> **Conditions:** Set a 90-minute timer. 50 questions. Treat it like the real thing.
> **Pass mark:** 35/50 (≈ 70%, matching the real exam)
> Take this AFTER finishing Modules 5–8.

---

## 📝 Questions

### 1. The Intune Windows app type for packaged installers with detection/dependencies/supersedence is:
A. LOB
B. Microsoft Store app
C. Win32 app (.intunewin)
D. Web app

### 2. The tool that wraps an installer into `.intunewin` format is:
A. IntuneWinAppUtil.exe
B. msiexec.exe
C. AppWrapper.exe
D. MakeAppx.exe

### 3. The most common cause of "app stuck in Installing forever" is:
A. Insufficient disk space
B. The installer is corrupt
C. The detection rule never returns true
D. Conditional Access is blocking

### 4. Maximum supersedence depth for Win32 apps:
A. 1
B. 2
C. 5
D. Unlimited

### 5. Maximum dependencies per Win32 app:
A. 10
B. 25
C. 100
D. 1,000

### 6. Assignment intent "Required" means:
A. The app auto-installs on every targeted device
B. The app appears in Company Portal for user-pick install
C. The app is force-removed
D. The app shows only to compliant devices

### 7. The 4 detection rule types for Win32 apps:
A. MSI / file / registry / custom PowerShell
B. MSI / DLL / process / registry
C. EXE / DLL / file / network
D. URL / file / hash / signature

### 8. A custom PowerShell detection script reports "detected" only when:
A. exit 0 AND any stdout
B. exit 1 with empty stdout
C. exit 0 only
D. Stdout starts with "DETECTED:"

### 9. The MSIX format's primary advantage over MSI:
A. Smaller file size
B. Clean install/uninstall, side-by-side versioning, per-user install without admin
C. Built-in DRM
D. Faster installation

### 10. Android Enterprise apps deploy through:
A. Direct APK upload
B. Managed Google Play
C. Amazon Appstore
D. F-Droid

### 11. To push Outlook Mobile server URL to managed iOS devices:
A. Configuration profile (Templates → Email)
B. App Configuration Policy (managed devices channel)
C. App Protection Policy
D. Compliance policy

### 12. The Win32 install behavior options are:
A. System or User context
B. Foreground or Background
C. Visible or Hidden
D. Online or Offline

### 13. **Order these steps** to deploy a Win32 app:

1. Define detection rule
2. Run IntuneWinAppUtil to wrap source
3. Upload to Intune as Win32
4. Set install + uninstall commands and requirements
5. Assign to pilot user group

A. 2 → 3 → 4 → 1 → 5
B. 1 → 2 → 3 → 4 → 5
C. 3 → 2 → 1 → 4 → 5
D. 5 → 4 → 3 → 2 → 1

### 14. Which Defender for Endpoint plan includes EDR?
A. Plan 1
B. Plan 2
C. Both Plan 1 and Plan 2
D. Defender Antivirus standalone

### 15. The three ASR rule modes are:
A. On / Off / Monitor
B. Audit / Block / Warn
C. Allow / Deny / Audit
D. Pass / Fail / Skip

### 16. The recommended ASR rollout pattern is:
A. Block mode on day 1
B. Audit first, monitor 7–14 days, then Block
C. Warn mode permanently
D. Off mode until incident

### 17. BitLocker recovery keys for Intune-managed Entra-joined devices are escrowed to:
A. The user's Entra account
B. The device object in Microsoft Entra ID
C. A local file
D. Active Directory only

### 18. Silent BitLocker enablement:
A. Encrypts with user prompts for PIN
B. Encrypts automatically and escrows recovery key without user prompts
C. Requires manual recovery key paper backup
D. Only works on Surface devices

### 19. The ASR rule that blocks Office applications from creating child processes specifically stops:
A. Word launching PowerShell or cmd.exe (canonical macro-malware pattern)
B. Excel from opening other workbooks
C. Outlook from displaying emails
D. PowerPoint from saving files

### 20. "EDR in block mode" is correct when:
A. You have no AV installed
B. A third-party AV is primary, but you want Defender's response capabilities
C. You want to disable Defender entirely
D. You're using ConfigMgr only

### 21. Microsoft Defender for Cloud Apps is:
A. An endpoint antivirus
B. A Cloud Access Security Broker (CASB) for SaaS apps
C. A replacement for Conditional Access
D. An email gateway

### 22. Which feature prevents users + malware from disabling Defender locally?
A. SmartScreen
B. Tamper protection
C. Network protection
D. ASR

### 23. **Yes/No**, Defender plans.

**S1:** Plan 1 includes Attack Surface Reduction rules.
**S2:** Plan 2 includes Advanced Hunting with KQL.
**S3:** Plan 1 includes Automated Investigation & Response.

A. Yes / Yes / No
B. Yes / No / Yes
C. No / Yes / Yes
D. No / No / Yes

### 24. Windows LAPS rotates the local admin password and stores it (for Entra-joined) on:
A. Local TPM
B. Microsoft Entra device object
C. Active Directory
D. User's password manager

### 25. The canonical secure default for Windows Firewall is:
A. Allow all inbound
B. Block all inbound by default, allow specific apps
C. Disable firewall on managed devices
D. Allow inbound on Public profile only

### 26. Windows Update for Business (WUfB) controls three update categories:
A. Feature, Quality, Security
B. Feature, Quality, Driver
C. Cumulative, Optional, Critical
D. Daily, Weekly, Monthly

### 27. Quality updates ship:
A. Monthly on the 2nd Tuesday (Patch Tuesday)
B. Weekly
C. Annually
D. As needed

### 28. Feature updates ship:
A. Monthly
B. Quarterly
C. Annually (typically September/October)
D. Every 18 months

### 29. The canonical update ring topology:
A. All users in one ring
B. Pilot → Broad → Deferred
C. Random rolling
D. Per-OEM ring

### 30. Maximum pause duration for an update ring:
A. 7 days
B. 14 days
C. 35 days
D. Unlimited

### 31. An expedited update:
A. Respects ring deferrals
B. Overrides ring deferrals to force fast deployment of a specific KB
C. Is the same as a feature update
D. Requires WSUS

### 32. Delivery Optimization mode "LAN" (1) allows:
A. No P2P
B. Peer-to-peer with same NAT/subnet + Microsoft CDN
C. Internet peer-to-peer
D. Bypass DO entirely

### 33. Windows 11 Enterprise feature update end-of-servicing window:
A. 12 months
B. 24 months
C. 36 months
D. 60 months

### 34. Driver updates in WUfB are managed:
A. Bundled with quality updates
B. As a separate policy with Manual / Automatic / Frozen options
C. Bundled with feature updates
D. Only via OEM software

### 35. **Order these steps** to deploy an expedited zero-day patch:

1. Identify the specific KB number to push
2. Verify deployment via WUfB reports
3. Create an expedited update profile in Intune
4. Assign profile to All Windows devices (or appropriate scope)
5. Set deadline (e.g., 24 hours)

A. 1 → 3 → 5 → 4 → 2
B. 4 → 3 → 1 → 2 → 5
C. 1 → 2 → 3 → 4 → 5
D. 5 → 4 → 3 → 2 → 1

### 36. Endpoint Analytics scores fleet across how many categories?
A. 3
B. 5
C. 7
D. 10

### 37. Which is NOT an Endpoint Analytics category?
A. Startup performance
B. Application reliability
C. Compliance posture
D. Work-from-anywhere

### 38. Proactive remediations require:
A. An Intune Plan 2 / Suite add-on
B. A Windows Enterprise/Education/VDA subscription (e.g. via M365 E3) + Intune
C. Defender for Endpoint only
D. No license

### 39. A proactive remediation consists of:
A. One PowerShell script
B. A detection script + a remediation script
C. An MSI installer
D. A configuration profile

### 40. The MDM Diagnostics Report on Windows 11 is:
A. A separate tool you download
B. Built into Windows 11 (Settings → Accounts → Access work or school → Info → Export)
C. Only available with Intune Suite
D. Generated automatically every day

### 41. The Troubleshooting + Support blade in Intune is:
A. A tenant-wide dashboard
B. A per-user view of devices, policies, apps, compliance
C. The same as Endpoint Analytics
D. The Audit log

### 42. Intune Management Extension (IME) logs are at:
A. C:\Windows\Logs\IME
B. %ProgramData%\Microsoft\IntuneManagementExtension\Logs
C. %APPDATA%\IntuneLogs
D. C:\Logs\Intune

### 43. Advanced Hunting in Defender for Endpoint uses:
A. SQL Server queries
B. KQL (Kusto Query Language)
C. PowerShell scripts only
D. JSON paths

### 44. The Intune remote action that performs a factory reset is:
A. Restart
B. Sync
C. Wipe
D. Retire

### 45. The remote action that removes ONLY organizational data, leaving personal:
A. Wipe
B. Retire
C. Fresh start
D. Autopilot reset

### 46. **Order these steps** to diagnose "user blocked from SharePoint by CA":

1. Check the device compliance status
2. Check the Entra ID Sign-in log for the failed attempt
3. Identify the blocking CA policy in the sign-in log
4. Force a sync on the device after fixing compliance
5. Fix the failing compliance rule (e.g., enable BitLocker)

A. 2 → 3 → 1 → 5 → 4
B. 1 → 2 → 3 → 4 → 5
C. 5 → 4 → 3 → 2 → 1
D. 3 → 2 → 1 → 4 → 5

### 47. Which Defender for Endpoint table contains process creation events?
A. DeviceLogonEvents
B. DeviceProcessEvents
C. DeviceFileEvents
D. DeviceNetworkEvents

### 48. The "Sync" remote action:
A. Wipes the device
B. Forces the device to check in with Intune now
C. Re-applies all policies from scratch
D. Restarts the device

### 49. **Yes/No**, Final scenarios.

**S1:** Endpoint Analytics data flows from devices to Intune to Log Analytics.
**S2:** Proactive remediations run on a schedule per script.
**S3:** Wipe and Retire produce the same end state.

A. Yes / Yes / No
B. Yes / Yes / Yes
C. No / Yes / No
D. Yes / No / No

### 50. A 50,000-endpoint bank is currently on WSUS only. Modern recommendation:
A. Keep WSUS, it works
B. Migrate to WUfB + Intune update rings (cloud-managed)
C. Switch to ConfigMgr only
D. No updates

---

## 🎯 Answer Key (No Cheating!)

```
1.  C    11. B    21. B    31. B    41. B
2.  A    12. A    22. B    32. B    42. B
3.  C    13. A    23. A    33. C    43. B
4.  B    14. B    24. B    34. B    44. C
5.  C    15. B    25. B    35. A    45. B
6.  A    16. B    26. B    36. B    46. A
7.  A    17. B    27. A    37. C    47. B
8.  A    18. B    28. C    38. B    48. B
9.  B    19. A    29. B    39. B    49. A
10. B    20. B    30. C    40. B    50. B
```

---

## 📊 Scoring

| Score | Verdict |
|-------|---------|
| 47–50 | 🏆 Excellent, ready for Final Mock |
| 35–46 | ✅ On track. Review missed Qs, then Final Mock. |
| 25–34 | ⚠️ Re-study weak modules (use the table below) |
| <25   | 🔁 Re-take after intensive review |

---

## 🔍 Review Process

For EACH wrong answer:

1. Identify which module covered it
2. Re-read that module's Reading.md
3. Add an Anki flashcard for the concept
4. Try the question again 3 days later

### Wrong-answer → Module map

| Question # | Module |
|------------|--------|
| 1–13 | Module 5 (Application Deployment) |
| 14–25 | Module 6 (Endpoint Security) |
| 26–35 | Module 7 (Windows Update) |
| 36–49 | Module 8 (Monitoring & Troubleshooting) |
| 50 | Module 7 (synthesis) |

---

➡️ When ready: take the [Final Mock Exam](./Final-Mock-Exam.md) 2–3 days before your real exam.

---

## Detailed answer rationales

**Q1. Answer: C.** *Why C is correct.* Win32 app type wraps installers with `.intunewin` and supports detection/dependencies/supersedence. *Why others wrong.* **A**: LOB = raw MSI without extras. **B**: Microsoft Store app pulls from Store. **D**: Web app is just a URL. *Exam-takeaway.* Win32 = packaged + extras.

**Q2. Answer: A.** *Why A is correct.* IntuneWinAppUtil.exe is the Microsoft wrapper tool. *Why others wrong.* msiexec is the MSI install runner. AppWrapper/MakeAppx are unrelated. *Exam-takeaway.* Memorize the tool name.

**Q3. Answer: C.** *Why C is correct.* Detection rule misconfiguration is the #1 cause of "stuck Installing." *Why others wrong.* Disk space surfaces specific errors. Corrupt installer fails with codes. CA doesn't block app install. *Exam-takeaway.* Always test detection rules.

**Q4. Answer: B.** *Why B is correct.* Max supersedence depth = 2. *Why others wrong.* Other limits wrong. *Exam-takeaway.* Don't chain 3+ versions in supersedence.

**Q5. Answer: C.** *Why C is correct.* Max 100 dependencies. *Why others wrong.* Other limits wrong. *Exam-takeaway.* Plenty for any realistic app.

**Q6. Answer: A.** *Why A is correct.* Required = forced install. *Why others wrong.* Available = user-pick. Force-remove = Uninstall. Compliance-conditional doesn't exist as intent. *Exam-takeaway.* Required vs Available.

**Q7. Answer: A.** *Why A is correct.* The four detection types. *Why others wrong.* Other combinations made up. *Exam-takeaway.* Memorize the four.

**Q8. Answer: A.** *Why A is correct.* Both exit 0 AND stdout required. *Why others wrong.* exit 1 = not detected. exit 0 alone insufficient. No magic string format. *Exam-takeaway.* Exit + output.

**Q9. Answer: B.** *Why B is correct.* MSIX container advantages. *Why others wrong.* Other reasons not the primary advantage. *Exam-takeaway.* Modern Windows app format.

**Q10. Answer: B.** *Why B is correct.* All Android Enterprise apps via Managed Google Play. *Why others wrong.* Direct APK not allowed. Amazon/F-Droid unrelated. *Exam-takeaway.* Managed Google Play always.

**Q11. Answer: B.** *Why B is correct.* App Configuration Policy via MDM channel for enrolled devices. *Why others wrong.* Other surfaces don't push app-specific settings. *Exam-takeaway.* ACP is the per-app settings tool.

**Q12. Answer: A.** *Why A is correct.* System or User context for the installer. *Why others wrong.* Other dichotomies don't apply. *Exam-takeaway.* System = SYSTEM acct; User = user context.

**Q13. Answer: A.** *Why A is correct.* Wrap → upload → set commands + requirements → detection → assign. *Why others wrong.* Other sequences put detection too early or skip steps. *Exam-takeaway.* Detection comes after install command (you know what to look for after defining the install).

**Q14. Answer: B.** *Why B is correct.* EDR = Plan 2 feature. *Why others wrong.* Plan 1 = prevention. *Exam-takeaway.* Memorize the plan split.

**Q15. Answer: B.** *Why B is correct.* Audit/Block/Warn. *Why others wrong.* Other terms invented. *Exam-takeaway.* Warn = one-time bypass for user.

**Q16. Answer: B.** *Why B is correct.* Audit first, monitor, then Block. *Why others wrong.* Day-1 Block breaks things. Warn permanent = unenforced. Off = no protection. *Exam-takeaway.* Canonical rollout.

**Q17. Answer: B.** *Why B is correct.* Per device object in Entra. *Why others wrong.* Not user account. Not local file. AD-only is on-prem-only pattern. *Exam-takeaway.* Per-device, not per-user.

**Q18. Answer: B.** *Why B is correct.* Silent enablement = no user prompts + Entra escrow. *Why others wrong.* Other claims contradict the "silent" property. *Exam-takeaway.* Canonical Intune pattern.

**Q19. Answer: A.** *Why A is correct.* The macro-malware attack chain pattern. *Why others wrong.* Other "stops" are not what the rule does. *Exam-takeaway.* The most-tested ASR rule.

**Q20. Answer: B.** *Why B is correct.* Defender passive + EDR enforces when 3rd-party AV is primary. *Why others wrong.* Other scenarios miscast the mode. *Exam-takeaway.* The 3rd-party-AV bridging mode.

**Q21. Answer: B.** *Why B is correct.* CASB = Defender for Cloud Apps. *Why others wrong.* Not AV, not CA, not email gateway. *Exam-takeaway.* SaaS app discovery + control.

**Q22. Answer: B.** *Why B is correct.* Tamper protection prevents disabling Defender. *Why others wrong.* SmartScreen filters URLs. Network protection blocks URLs. ASR blocks behaviors. *Exam-takeaway.* Always on in production.

**Q23. Answer: A.** *Why A is correct.* ASR in Plan 1 (Yes). Advanced Hunting Plan 2 (Yes). AIR Plan 2, not Plan 1 (No). *Why others wrong.* Misreads. *Exam-takeaway.* Memorize the Plan 1 vs Plan 2 matrix.

**Q24. Answer: B.** *Why B is correct.* LAPS stores password on Entra device object for Entra-joined. *Why others wrong.* Local TPM doesn't store passwords. AD = on-prem hybrid scenario. User's PM = not enterprise. *Exam-takeaway.* Cloud LAPS = Entra device.

**Q25. Answer: B.** *Why B is correct.* Block inbound by default; allow specific. *Why others wrong.* Allow-all is the WRONG default. Disable = no protection. Selective profile only = inconsistent. *Exam-takeaway.* Block by default.

**Q26. Answer: B.** *Why B is correct.* Feature/Quality/Driver. *Why others wrong.* "Security" not a separate WUfB category. Other taxonomies invented. *Exam-takeaway.* Memorize the three.

**Q27. Answer: A.** *Why A is correct.* Patch Tuesday = 2nd Tuesday monthly. *Why others wrong.* Other cadences don't match Microsoft's pattern. *Exam-takeaway.* 2nd Tuesday monthly.

**Q28. Answer: C.** *Why C is correct.* Annual feature update cadence. *Why others wrong.* Other cadences too frequent. *Exam-takeaway.* Annually ~Sept/Oct.

**Q29. Answer: B.** *Why B is correct.* Pilot → Broad → Deferred. *Why others wrong.* One ring = no blast radius. Random = unmanageable. Per-OEM = unusual. *Exam-takeaway.* The canonical ring topology.

**Q30. Answer: C.** *Why C is correct.* Max 35 days. *Why others wrong.* Other durations wrong. *Exam-takeaway.* 35-day cap per ring per category.

**Q31. Answer: B.** *Why B is correct.* Expedited overrides ring deferrals. *Why others wrong.* Doesn't respect deferrals. Not a feature update. Doesn't need WSUS. *Exam-takeaway.* The zero-day escalation play.

**Q32. Answer: B.** *Why B is correct.* LAN = same subnet peers + CDN. *Why others wrong.* Other modes are different. *Exam-takeaway.* LAN = office default.

**Q33. Answer: C.** *Why C is correct.* Enterprise/Education = 36 months. *Why others wrong.* Home/Pro = 24 months. *Exam-takeaway.* Memorize the SKU split.

**Q34. Answer: B.** *Why B is correct.* Driver updates separate policy with Manual/Auto/Frozen. *Why others wrong.* Not bundled with quality or feature. *Exam-takeaway.* Separate policy as of 2023+.

**Q35. Answer: A.** *Why A is correct.* Identify KB → create profile → set deadline → assign → verify. *Why others wrong.* Other sequences invert steps. *Exam-takeaway.* Verify last via WUfB reports.

**Q36. Answer: B.** *Why B is correct.* 5 categories. *Why others wrong.* Other counts wrong. *Exam-takeaway.* Five categories.

**Q37. Answer: C.** *Why C is correct.* Compliance has its own reports, not in Endpoint Analytics. *Why others wrong.* The other three ARE Endpoint Analytics categories. *Exam-takeaway.* Compliance ≠ analytics.

**Q38. Answer: B.** *Why B is correct.* Remediations are gated by a Windows Enterprise/Education/VDA subscription (plus Intune); an M365 E3 user with only Intune Plan 1 can run them. *Why others wrong.* An Intune Plan 2 / Suite add-on gates **Advanced** Endpoint Analytics, not remediations; Defender doesn't deliver them; they aren't license-free. *Exam-takeaway.* Remediations = Windows-subscription gate, not an Intune-plan gate.

**Q39. Answer: B.** *Why B is correct.* Detect + remediate scripts. *Why others wrong.* Single script insufficient. Not an MSI. Not a config profile. *Exam-takeaway.* The pair-of-scripts pattern.

**Q40. Answer: B.** *Why B is correct.* Built into Windows 11. *Why others wrong.* Not separate, not Suite-only, not automatic. *Exam-takeaway.* Settings → Access work or school → Info → Export.

**Q41. Answer: B.** *Why B is correct.* Per-user diagnostic view. *Why others wrong.* Not tenant-wide. Not Endpoint Analytics. Not Audit log. *Exam-takeaway.* Helpdesk's #1 blade.

**Q42. Answer: B.** *Why B is correct.* The IME log path. *Why others wrong.* Other paths invented. *Exam-takeaway.* `%ProgramData%\Microsoft\IntuneManagementExtension\Logs`.

**Q43. Answer: B.** *Why B is correct.* KQL is Microsoft's query language for log/telemetry stores. *Why others wrong.* Not SQL, not PowerShell-only, not JSON paths. *Exam-takeaway.* KQL = the query language.

**Q44. Answer: C.** *Why C is correct.* Wipe = factory reset. *Why others wrong.* Restart = reboot. Sync = check-in. Retire = remove org only. *Exam-takeaway.* Memorize the four remote actions.

**Q45. Answer: B.** *Why B is correct.* Retire = org-only removal. *Why others wrong.* Wipe = full. Fresh start = preserve data. Autopilot reset = wipe + re-Autopilot. *Exam-takeaway.* Surgical for BYOD.

**Q46. Answer: A.** *Why A is correct.* Sign-in log → blocking policy → compliance check → fix → sync. *Why others wrong.* Other sequences invert. *Exam-takeaway.* Always start with Entra Sign-in log for CA.

**Q47. Answer: B.** *Why B is correct.* DeviceProcessEvents for process creates. *Why others wrong.* Other tables for other event types. *Exam-takeaway.* Memorize the table names.

**Q48. Answer: B.** *Why B is correct.* Sync = immediate check-in. *Why others wrong.* Not a wipe, not a re-apply, not a restart. *Exam-takeaway.* Force check-in.

**Q49. Answer: A.** *Why A is correct.* Analytics flows through to Log Analytics (Yes). Remediations on schedule (Yes). Wipe and Retire differ (No). *Why others wrong.* Misreads end state. *Exam-takeaway.* Memorize each remote action's end state.

**Q50. Answer: B.** *Why B is correct.* Modern WUfB + Intune for cloud-managed. *Why others wrong.* Keeping WSUS = legacy. ConfigMgr-only = wrong direction. No updates = breach next month. *Exam-takeaway.* The PrintNightmare-validated answer.
