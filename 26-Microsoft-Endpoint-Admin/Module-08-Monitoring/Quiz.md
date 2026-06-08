# ✏️ Module 8 Quiz: Monitoring, Reporting & Troubleshooting

> **Instructions:** Answer all 25 questions WITHOUT looking at the reading. Aim for 21/25 minimum before moving on.

---

## Questions

### Q1. Endpoint Analytics scores your fleet across how many categories? *(Remember)*
A. 3
B. 5
C. 7
D. 10

---

### Q2. Which is NOT an Endpoint Analytics category? *(Remember)*
A. Startup performance
B. Application reliability
C. Compliance posture
D. Work-from-anywhere

---

### Q3. Proactive remediations require: *(Remember)*
A. Intune Plan 1
B. Intune Plan 2 or Suite
C. Defender for Endpoint only
D. No license, free for all

---

### Q4. A proactive remediation consists of: *(Understand)*
A. One PowerShell script
B. A detection script + a remediation script
C. An MSI installer
D. A configuration profile

---

### Q5. The MDM Diagnostics Report on Windows 11 is: *(Remember)*
A. A separate tool you download
B. Built into Windows 11 (Settings → Accounts → Access work or school → Info → Export)
C. Only available with Intune Suite
D. Generated automatically every day

---

### Q6. The Troubleshooting + Support blade in Intune is: *(Understand)*
A. A tenant-wide dashboard
B. A per-user view of devices, policies, apps, compliance
C. The same as Endpoint Analytics
D. The Audit log

---

### Q7. Intune Management Extension (IME) logs are located at: *(Remember)*
A. C:\Windows\Logs\IME
B. %ProgramData%\Microsoft\IntuneManagementExtension\Logs
C. %APPDATA%\IntuneLogs
D. C:\Logs\Intune

---

### Q8. Advanced Hunting in Defender for Endpoint uses: *(Remember)*
A. SQL Server queries
B. KQL (Kusto Query Language)
C. PowerShell scripts only
D. JSON paths

---

### Q9. The Intune remote action that performs a factory reset is: *(Remember)*
A. Restart
B. Sync
C. Wipe
D. Retire

---

### Q10. The Intune remote action that removes ONLY organizational data, leaving personal data: *(Remember)*
A. Wipe
B. Retire
C. Fresh start
D. Autopilot reset

---

### Q11. **Order these steps** to diagnose "user blocked from SharePoint by Conditional Access": *(Apply)*

1. Check the device compliance status
2. Check the Entra ID Sign-in log for the failed attempt
3. Identify the blocking CA policy in the sign-in log
4. Force a sync on the device after fixing compliance
5. Fix the failing compliance rule (e.g., enable BitLocker)

A. 2 → 3 → 1 → 5 → 4
B. 1 → 2 → 3 → 4 → 5
C. 5 → 4 → 3 → 2 → 1
D. 3 → 2 → 1 → 4 → 5

---

### Q12. The "Fresh Start" remote action: *(Understand)*
A. Wipes the device and re-Autopilots
B. Resets the PC while preserving user data
C. Removes the user account only
D. Performs a Windows Update

---

### Q13. Which log shows Conditional Access policy evaluation details for a specific sign-in? *(Apply)*
A. Intune audit log
B. Entra ID Sign-in log (with CA tab)
C. Defender for Endpoint timeline
D. MDM Diagnostics report

---

### Q14. The Application Reliability category in Endpoint Analytics measures: *(Understand)*
A. App install success
B. App crashes per device per week
C. App compliance posture
D. App version freshness

---

### Q15. Yes/No, For each statement, mark Yes or No. *(Understand)*

**S1:** Endpoint Analytics requires at least Intune Plan 1.
**S2:** Advanced Endpoint Analytics requires Plan 2 or Suite.
**S3:** Proactive remediations are bundled in Plan 1.

A. Yes / Yes / No
B. Yes / No / Yes
C. No / Yes / Yes
D. Yes / Yes / Yes

---

### Q16. A user reports an app shows "Failed" in Company Portal. Best first step: *(Apply)*
A. Reinstall Windows
B. Open Troubleshooting + Support, find the user, drill into app install report
C. Wipe the device
D. Disable the app

---

### Q17. The Windows command to show Entra join state on a device is: *(Remember)*
A. `whoami`
B. `dsregcmd /status`
C. `net config`
D. `Get-MDMInfo`

---

### Q18. The "Collect diagnostics" remote action: *(Understand)*
A. Wipes the device
B. Pulls MDM Diagnostics report from the device to the Intune portal for admin download
C. Forces Windows Update
D. Renews BitLocker recovery key

---

### Q19. Yes/No, For each statement, mark Yes or No. *(Understand)*

**S1:** The Microsoft baseline score for Endpoint Analytics is approximately 80+.
**S2:** Advanced Hunting includes 30 days of telemetry by default.
**S3:** BitLocker key rotation can be triggered remotely from Intune.

A. Yes / Yes / Yes
B. Yes / Yes / No
C. No / Yes / Yes
D. Yes / No / Yes

---

### Q20. The Defender for Endpoint table for process creation events is: *(Remember)*
A. DeviceLogonEvents
B. DeviceProcessEvents
C. DeviceFileEvents
D. DeviceNetworkEvents

---

### Q21. To find devices that ran PowerShell from Word in the last 24 hours, you'd query: *(Apply)*
A. DeviceFileEvents
B. DeviceProcessEvents with InitiatingProcessFileName = "winword.exe" and FileName = "powershell.exe"
C. DeviceImageLoadEvents
D. DeviceEvents

---

### Q22. The "Sync" remote action: *(Understand)*
A. Wipes the device
B. Forces the device to check in with Intune now (instead of waiting for next scheduled sync)
C. Re-applies all policies from scratch
D. Restarts the device

---

### Q23. An app stuck "Installing" troubleshooting starts with: *(Apply)*
A. Check the detection rule on the app
B. Reboot the device
C. Unenroll and re-enroll
D. Increase ESP timeout

---

### Q24. Yes/No, For each statement, mark Yes or No. *(Evaluate)*

**S1:** Endpoint Analytics data flows from devices to Intune to Log Analytics.
**S2:** Proactive remediations run on a schedule defined per script.
**S3:** Wipe and Retire produce the same end state.

A. Yes / Yes / No
B. Yes / Yes / Yes
C. No / Yes / No
D. Yes / No / No

---

### Q25. The Bayer-style endpoint operations model uses: *(Evaluate)*
A. Manual ticket triage with no automation
B. Endpoint Analytics + Proactive Remediations + data-driven hardware refresh decisions
C. WSUS only
D. No central monitoring

---

## 🎯 Answers + Explanations

### Q1: **B. 5**
Startup, Application reliability, Work-from-anywhere, Resource performance, Battery health.

### Q2: **C. Compliance posture**
Compliance has its own reports, not in Endpoint Analytics.

### Q3: **B. Intune Plan 2 or Suite**
Proactive remediations require Plan 2 minimum.

### Q4: **B. A detection script + a remediation script**
Detection returns exit 0/1; remediation runs on exit 1.

### Q5: **B. Built into Windows 11 (Settings → Accounts → Access work or school → Info → Export)**
Native Windows 11 feature.

### Q6: **B. A per-user view of devices, policies, apps, compliance**
Helpdesk's most-used blade for per-user investigation.

### Q7: **B. %ProgramData%\Microsoft\IntuneManagementExtension\Logs**
The IME log path.

### Q8: **B. KQL (Kusto Query Language)**
Microsoft's query language for telemetry stores.

### Q9: **C. Wipe**
Wipe = factory reset, full device wipe.

### Q10: **B. Retire**
Retire removes org management + data, keeps personal.

### Q11: **A. 2 → 3 → 1 → 5 → 4**
Sign-in log → blocking policy → compliance check → fix → sync.

### Q12: **B. Resets the PC while preserving user data**
Fresh start = reset with user data preserved.

### Q13: **B. Entra ID Sign-in log (with CA tab)**
CA evaluation details show in the Entra Sign-in log.

### Q14: **B. App crashes per device per week**
Application Reliability tracks crash rate.

### Q15: **A. Yes / Yes / No**
Plan 1 needed for basic Endpoint Analytics (Yes). Plan 2 for advanced (Yes). Proactive remediations are Plan 2 (No, not Plan 1).

### Q16: **B. Open Troubleshooting + Support, find the user, drill into app install report**
The canonical helpdesk start.

### Q17: **B. dsregcmd /status**
The Windows command for Entra join state.

### Q18: **B. Pulls MDM Diagnostics report from the device to the Intune portal for admin download**
Collect diagnostics = remote MDM Diagnostics pull.

### Q19: **A. Yes / Yes / Yes**
80+ baseline (Yes). 30 days telemetry (Yes). BitLocker key rotation remote action exists (Yes).

### Q20: **B. DeviceProcessEvents**
Process creation telemetry table.

### Q21: **B. DeviceProcessEvents with InitiatingProcessFileName = "winword.exe" and FileName = "powershell.exe"**
The Office → PowerShell hunt pattern.

### Q22: **B. Forces the device to check in with Intune now**
Sync triggers immediate check-in.

### Q23: **A. Check the detection rule on the app**
Most common cause of "stuck Installing."

### Q24: **A. Yes / Yes / No**
Analytics flows device → Intune → Log Analytics (Yes). Proactive remediations run on a schedule (Yes). Wipe = factory; Retire = org-only, different end states (No).

### Q25: **B. Endpoint Analytics + Proactive Remediations + data-driven hardware refresh decisions**
The Bayer-style operating discipline.

---

## 📊 Score Yourself

- 24–25/25 → 🏆 Monitoring + troubleshooting mastered. Ready for practice exams.
- 21–23/25 → ✅ Solid. Note your misses; review.
- 17–20/25 → ⚠️ Re-read Endpoint Analytics + remote actions sections.
- <17/25 → 🔁 Re-read the entire module before continuing.

---

## 🃏 Add To Your Flashcards

- 5 Endpoint Analytics categories
- Proactive remediations = detect + remediate scripts (Plan 2)
- MDM Diagnostics report = built-in Windows 11
- IME logs path: `%ProgramData%\Microsoft\IntuneManagementExtension\Logs`
- KQL for Advanced Hunting (Plan 2)
- Wipe vs Retire vs Fresh Start vs Autopilot Reset
- dsregcmd /status for Entra join state
- Sign-in log = CA evaluation forensics

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then **Practice-Exam-1** (after Modules 1–4), **Practice-Exam-2** (after 5–8), and **Final-Mock-Exam** before the real exam.
