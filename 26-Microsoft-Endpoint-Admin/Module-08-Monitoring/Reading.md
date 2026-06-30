# Module 8: Monitoring, Reporting & Troubleshooting 📊

> **Why this module matters:** Every other module assumed things worked. Module 8 is what you do when they don't. Endpoint analytics, Intune reports, the MDM diagnostics report, log collection, these are the tools that turn 4-hour helpdesk tickets into 4-minute fixes. MD-102 weights monitoring and troubleshooting at ~10–15% and the exam loves "device sync stuck" and "Autopilot failed" scenarios.

> **Prerequisites for this module.** Before starting:
> - Modules 1–7, this module references all of them.
> - Comfort reading Windows Event Viewer entries.
> - Awareness of KQL syntax basics (Module 6 introduced Advanced Hunting).

---

## 🍕 A Story: The Day Endpoint Analytics Saved the Rollout

Maria's Surface Laptop 5 rollout to the EMEA finance team is in week 2. Tickets start trickling in:

- *"My laptop is slow."*
- *"Outlook freezes after I sign in."*
- *"My machine takes 3 minutes to log in."*

She has 87 devices and 47 tickets. Random sampling? Not enough signal. She opens **Intune → Reports → Endpoint analytics**:

- **Startup performance score: 42/100**, far below the Microsoft baseline of 80. Specifically, *Sign-in time* averages **187 seconds** vs. baseline 65.
- **Application reliability score: 38/100**, Outlook is the top crasher with 122 crashes/week across the fleet.
- **Work-from-anywhere score: 71/100**, Defender for Endpoint configuration is missing for 22 devices.
- **Resource performance: 65/100**, CPU at 80%+ during business hours on 33 devices.
- **Battery health: 91/100**, fine.

Proactive remediations show a known issue with the Surface firmware version 3.1.7 causing the sign-in time problem. There's an existing **detection + remediation script** from Microsoft that patches the registry workaround. She assigns the remediation to the affected device group; within 24 hours every Surface in the fleet has the fix; sign-in time drops to 71 seconds; tickets stop.

**Without endpoint analytics**, Maria would have spent 2 weeks correlating logs across 87 devices manually. With it, she had the root cause in 12 minutes. This module is everything that makes 12-minute root-causing possible.

---

## 📊 Intune Reports, The Map

The Intune admin center has multiple report surfaces. Memorize what each is for:

| Report area | What it shows |
|-------------|---------------|
| **Devices → Monitor** | Enrollment failures, devices not synced, Windows update status |
| **Endpoint security → Reports** | Defender, ASR, BitLocker, security baseline compliance |
| **Apps → Monitor** | App install status, error reports per app |
| **Endpoint analytics** | Performance score across 5 categories (see below) |
| **Reports** (top-level) | Operational + organizational analytics including custom reports |
| **Troubleshooting + support** | Per-user view: their devices, policies, apps, compliance history |

🔥 **MEMORIZE:** Each report area answers different questions. Don't go to "Apps → Monitor" looking for compliance details.

---

## 🎯 Endpoint Analytics (MEMORIZE THIS)

Endpoint Analytics is the headline monitoring feature. It scores your fleet across 5 categories:

| Category | What it measures |
|----------|------------------|
| **Startup performance** | Boot + sign-in time |
| **Application reliability** | App crashes per device per week |
| **Work-from-anywhere** | Cloud-readiness signals, Entra join, Intune enrollment, Autopilot ready, Cloud-managed identity, OS version |
| **Resource performance** | CPU + RAM + disk performance during business hours |
| **Battery health** | Mobile device battery health (if applicable) |

Each gives a 0–100 score. Microsoft's recommended baseline is **80+** across all categories.

### Microsoft baseline scores

Microsoft publishes baseline scores derived from the Endpoint Analytics public dataset. Your score is compared to:

- Microsoft's recommended baseline
- Your own historical trend
- Optionally, a custom baseline for your org

🎯 **Exam tip:** Endpoint analytics requires Intune Plan 1 minimum. **Advanced** Endpoint Analytics (more detailed insights) requires Intune Plan 2.

---

## 🛠️ Proactive Remediations

Proactive remediations are pairs of PowerShell scripts a **detection script** and a **remediation script** that automatically detect and fix problems across your fleet.

### How they work

1. Detection script runs on the device on a schedule (e.g., daily)
2. Detection returns exit code:

   - **Exit 0** with no output = compliant, no action
   - **Exit 1** = issue detected, run remediation
3. Remediation script runs to fix the issue
4. Results aggregated in Intune reports

### Microsoft-published remediations

Microsoft ships pre-built remediations for common problems:

- "Restart Office Click-to-Run service if hung"
- "Re-apply Win11 update if servicing stack failed"
- "Clear sign-in cache if PRT broken"
- "Reset Outlook profile if stuck"

### Custom remediations

You can write your own. Example pattern:

```powershell
# detect.ps1, returns exit 1 if the user has too many open Outlook profiles
$profileCount = (Get-ChildItem "HKCU:\Software\Microsoft\Office\16.0\Outlook\Profiles").Count
if ($profileCount -gt 3) {
    Write-Output "Found $profileCount Outlook profiles (threshold: 3)"
    exit 1
}
exit 0
```

```powershell
# remediate.ps1, clears Outlook cached profiles older than 90 days
Get-ChildItem "HKCU:\Software\Microsoft\Office\16.0\Outlook\Profiles" |
    Where-Object { $_.LastWriteTime -lt (Get-Date).AddDays(-90) } |
    Remove-Item -Recurse -Force
```

🔥 **MEMORIZE:** Remediations (proactive remediations) require a **Windows Enterprise E3/E5, Education A3/A5, or Windows VDA** subscription on the device (plus Intune). They are *not* gated by an Intune Plan 2 / Suite add-on, an M365 E3 user (Windows Enterprise E3 + Intune Plan 1) can run them. (Intune Plan 2 / Suite is what unlocks **Advanced** Endpoint Analytics, a separate feature.)

---

## 🐛 Troubleshooting Blade

The Troubleshooting + Support blade is a per-user view that shows everything Intune knows about one user's devices, policies, apps, and compliance. The single most useful blade for helpdesk:

| Section | What |
|---------|------|
| **Devices** | All enrolled devices for this user |
| **App installs** | Which apps installed, failed, in progress |
| **Compliance** | Current compliance state per device |
| **Configuration** | Policies applied and their status |
| **Group memberships** | Entra ID groups this user is in |
| **Assignments** | What's targeted at this user |

🎯 **Exam tip:** "User reports their app didn't install" → start in Troubleshooting + Support, find the user, drill into the device, see the app install status.

---

## 📋 MDM Diagnostics Report (Windows 11)

A built-in Windows 11 feature that dumps EVERY MDM policy applied + its source + the result. The single most useful tool for "why is this policy applying or not?"

### How to generate

```
Settings → Accounts → Access work or school → 
   [select your work account] → Info → 
   Export your management log files → Save MDMDiagnostics.zip
```

The zip contains:

- `MDMDiagReport.html`, the human-readable report
- `MDMDiagReport.xml`, machine-readable version
- Event Viewer logs for the Device Management Enterprise diagnostic provider
- Autopilot ETW traces
- Certificate provider logs

🔥 **MEMORIZE:** The MDM diagnostics report is the canonical first step in Windows-side troubleshooting. The exam will reference it.

---

## 🛠️ Common Troubleshooting Scenarios

### Scenario 1: Device won't sync with Intune

| Step | Action |
|------|--------|
| 1 | Verify network connectivity to Microsoft endpoints |
| 2 | Settings → Accounts → Access work or school → click work account → Info → **Sync** |
| 3 | Check the MDM Diagnostics Report for error codes |
| 4 | Run `dsregcmd /status` (Windows) to confirm Entra join state |
| 5 | Check Intune Troubleshooting blade for the user/device |
| 6 | Last resort: unenroll + re-enroll |

### Scenario 2: Compliance policy not applying

| Step | Action |
|------|--------|
| 1 | Verify the user is in the assigned group |
| 2 | Check device sync status (sync if stale) |
| 3 | Check Troubleshooting blade → Compliance → see which setting failed |
| 4 | Check for conflicting policies (multiple compliance assignments) |
| 5 | Generate MDM Diagnostics report for detailed evaluation |

### Scenario 3: App stuck "Installing"

| Step | Action |
|------|--------|
| 1 | Check the detection rule on the app |
| 2 | Verify the install command runs successfully on a test device |
| 3 | Check Apps → Monitor → App install report for the device |
| 4 | Pull the IME (Intune Management Extension) logs from `%ProgramData%\Microsoft\IntuneManagementExtension\Logs` |
| 5 | Run the install manually with the install command in an elevated cmd to validate |

### Scenario 4: Autopilot enrollment failed

| Step | Action |
|------|--------|
| 1 | Verify hardware hash is registered in Intune |
| 2 | Confirm an Autopilot profile is assigned to the device's group |
| 3 | Check the Autopilot device's enrollment status in Intune |
| 4 | Pull Autopilot ETW traces via MDM Diagnostics |
| 5 | If hybrid: verify Intune Connector for AD is healthy |

### Scenario 5: Conditional Access blocking a legitimate user

| Step | Action |
|------|--------|
| 1 | Check the Entra ID Sign-in log for the specific failed attempt |
| 2 | Look at "Conditional Access" tab, which policy blocked it? |
| 3 | Verify the user's device compliance state |
| 4 | Confirm the user isn't in an Exclude group inadvertently |
| 5 | Verify the policy isn't in Report-only mode if you expected enforcement |

---

## 🔍 Key Log Locations

| Source | Path |
|--------|------|
| **Intune Management Extension logs (Windows)** | `%ProgramData%\Microsoft\IntuneManagementExtension\Logs\` |
| **MDM Diagnostics report** | `Settings → ... → Export your management log files` |
| **Event Viewer, MDM events** | Apps and Services Logs → Microsoft → Windows → DeviceManagement-Enterprise-Diagnostics-Provider |
| **Autopilot ETW** | Included in MDM Diagnostics zip |
| **Defender for Endpoint logs** | Apps and Services Logs → Microsoft → Windows → Windows Defender |
| **BitLocker logs** | Apps and Services Logs → Microsoft → Windows → BitLocker-API |
| **Sign-in logs (Entra ID)** | Microsoft Entra admin center → Sign-ins |
| **Audit logs (Entra ID)** | Microsoft Entra admin center → Audit logs |
| **Intune Audit logs** | Tenant administration → Audit logs |

---

## 📊 Advanced Hunting (Plan 2)

Defender for Endpoint Plan 2 provides Advanced Hunting, a KQL (Kusto Query Language) query interface over 30 days of endpoint telemetry.

### Common tables

| Table | Contains |
|-------|----------|
| `DeviceProcessEvents` | Process creation events |
| `DeviceFileEvents` | File create/modify/delete |
| `DeviceLogonEvents` | Logon successes + failures |
| `DeviceNetworkEvents` | Network connections |
| `DeviceRegistryEvents` | Registry changes |
| `DeviceImageLoadEvents` | DLL load events |
| `DeviceEvents` | Defender behavioral events + alerts |
| `DeviceInfo` | Device inventory |

### Example KQL hunt

```kusto
// Find devices where Office launched PowerShell in last 24 hours
DeviceProcessEvents
| where Timestamp > ago(24h)
| where InitiatingProcessFileName in~ ("winword.exe", "excel.exe", "powerpnt.exe", "outlook.exe")
| where FileName =~ "powershell.exe"
| project Timestamp, DeviceName, AccountName, InitiatingProcessFileName, ProcessCommandLine
| order by Timestamp desc
```

🎯 **Exam tip:** Advanced Hunting is the canonical tool for "find devices with this specific behavior." Required for incident investigation at scale.

---

## 🤖 Intune Remote Actions

Per-device remote actions you can trigger from the Intune portal:

| Action | What | Persistence |
|--------|------|-------------|
| **Sync** | Force a policy sync now | None |
| **Remote lock** | Lock the device immediately | Device stays locked |
| **Reset passcode** | Reset device PIN | Persists |
| **Wipe** | Factory reset (full device wipe) | Permanent |
| **Retire** | Remove org data + Intune management | Personal data retained |
| **Fresh start** | Reset PC preserving user data | Persists |
| **Autopilot reset** | Wipe and re-Autopilot | Re-enrolls into Autopilot |
| **Restart** | Force restart | Restart only |
| **Quick scan / Full scan (Defender)** | Trigger Defender scan | One-time |
| **Update Defender signatures** | Force signature update | One-time |
| **BitLocker key rotation** | Generate new recovery key | New key escrowed |
| **Collect diagnostics** | Pull MDM Diagnostics zip into Intune for download | One-time |

🚨 **Trap on the exam:** **Wipe** = factory reset (full). **Retire** = remove org only. **Fresh start** = reset preserving user data. **Autopilot reset** = wipe + re-enroll. These are NOT interchangeable.

---

## 🚨 Common Exam Traps

| Trap | Reality |
|------|---------|
| "Wipe and Retire do the same thing" | ❌ Wipe = factory reset; Retire = remove org only |
| "Endpoint Analytics works in Plan 1 with all features" | ❌ Plan 1 = basic; Plan 2 = advanced |
| "Proactive remediations need an Intune Plan 2 / Suite add-on" | ❌ They need a Windows Enterprise/Education/VDA subscription (e.g. via M365 E3) + Intune, not Intune Plan 2 |
| "MDM Diagnostics report is a separate tool" | ❌ Built into Windows 11 |
| "Troubleshooting blade shows tenant-wide" | ❌ Per-user view |
| "Advanced Hunting works in Plan 1" | ❌ Plan 2 only |
| "Restart action factory-resets the device" | ❌ Restart only, Wipe is the factory reset |

---

## 🧪 Task-Sequencing Practice: Troubleshoot "User can't access SharePoint"

**Order these steps to diagnose a Conditional Access block on SharePoint.**

The correct sequence:

1. ✅ **Check Entra ID Sign-in log** for the user's failed attempt
2. ✅ **Identify the blocking CA policy** (in the sign-in log's CA tab)
3. ✅ **Check the device compliance status** for that device
4. ✅ **If non-compliant, check which compliance rule failed** (Troubleshooting blade or device blade)
5. ✅ **Fix the underlying compliance failure** (e.g., enable BitLocker, update OS)
6. ✅ **Force a sync** on the device (or wait for next scheduled sync)
7. ✅ **Verify compliance now reports Compliant**
8. ✅ **Test sign-in to SharePoint again**

⚠️ Skipping step 1 = chasing the wrong policy. Skipping step 6 = device still reports stale state.

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **Endpoint Analytics** | Intune feature scoring fleet on 5 performance categories |
| **Startup performance** | Endpoint Analytics category for boot + sign-in time |
| **Application reliability** | Endpoint Analytics category for app crash rate |
| **Work-from-anywhere** | Endpoint Analytics cloud-readiness score |
| **Proactive remediations** | Detection + remediation script pairs (need a Windows Enterprise/Education/VDA subscription + Intune) |
| **Troubleshooting + Support blade** | Per-user view of devices + policies + compliance |
| **MDM Diagnostics report** | Built-in Windows 11 dump of all MDM policies + sources |
| **IME logs** | Intune Management Extension logs at `%ProgramData%\Microsoft\IntuneManagementExtension\Logs` |
| **Advanced Hunting** | KQL query interface over 30 days of endpoint telemetry (Plan 2) |
| **Sync** (remote action) | Force device to check in with Intune now |
| **Wipe** | Factory reset the device |
| **Retire** | Remove org data + management, keep personal |
| **Fresh start** | Reset preserving user data |
| **Autopilot reset** | Wipe and re-Autopilot |
| **Collect diagnostics** | Remote pull of MDM Diagnostics zip |
| **BitLocker key rotation** | Generate new recovery key + re-escrow |
| **dsregcmd /status** | Windows command showing Entra join state |
| **CA sign-in log** | Entra ID sign-in log with CA policy evaluation details |
| **Audit log** | Tenant/Intune log of admin actions |

---

## ✅ Module 8 Summary

You now know:

- 📊 The Intune report surfaces and what each is for
- 🎯 Endpoint Analytics, 5 categories + scoring + baselines
- 🛠️ Proactive remediations (need a Windows Enterprise/Education/VDA subscription + Intune), detect + fix pattern
- 🐛 Troubleshooting + Support blade, per-user diagnostic view
- 📋 MDM Diagnostics report, built-in Windows policy dump
- 🛠️ The 5 most common troubleshooting scenarios + step-by-step approach
- 🔍 Key log locations on Windows
- 📊 Advanced Hunting (Plan 2) with KQL examples
- 🤖 Intune remote actions and their distinct effects
- ⚠️ The 7 most common monitoring/troubleshooting traps

**Next steps:**
1. 🎥 Watch the videos in [Videos.md](./Videos.md)
2. ✏️ Take the [Quiz](./Quiz.md)
3. 📋 Review the [Cheat-Sheet](./Cheat-Sheet.md)
4. ➡️ Take Practice Exam 1 (after Modules 1–4), Practice Exam 2 (after Modules 5–8), and Final Mock Exam 2–3 days before the real exam.

---

## 📊 Case Study, Bayer's Endpoint Analytics-Driven Performance Initiative (2022–2024)

**Situation.** Bayer AG (the global pharmaceutical and life sciences company, ~95,000 employees in 80+ countries) had a long-standing complaint about endpoint performance: knowledge workers reported slow logon, frequent Outlook crashes, and unpredictable Wi-Fi reconnects. Helpdesk tickets averaged 1,200/week with "device slow" or "app crash" categories. Bayer had no systematic way to measure or compare endpoint performance across its global fleet of ~80,000 corporate Windows devices (Microsoft customer story, *Bayer, Endpoint Performance at Scale*, 2023).

**Decision.** In early 2022, Bayer's central IT enabled Microsoft Intune Endpoint Analytics across the fleet and standardized on the following operating discipline (Microsoft customer story + Microsoft Mechanics episode *Bayer at Endpoint Performance*, 2023):

1. **Endpoint Analytics enabled** for every Windows endpoint at Intune Plan 2 (later upgraded to the Intune Suite for Advanced Analytics).
2. **Microsoft baseline scores** as the initial target, get every category to 80+.
3. **Proactive remediations** for the top 10 common helpdesk patterns (Outlook profile bloat, sign-in cache corruption, Edge profile reset, Defender signature update failures, etc.).
4. **Weekly performance review** where the central IT team reviews scores trending down + cohorts of devices with low scores.
5. **Hardware refresh decisions** driven by Endpoint Analytics, devices with poor Resource Performance and Battery Health get prioritized for refresh.
6. **Custom remediations** for Bayer-specific apps (a few in-house LOB tools with known issues).

**Outcome.** Bayer reported (Microsoft customer story update, 2024):

- **Helpdesk tickets in "device slow" / "app crash" categories**: dropped ~57% within 12 months of Endpoint Analytics + proactive remediations enablement.
- **Median sign-in time**: improved from 89 seconds to 41 seconds.
- **Outlook crash rate**: dropped 84% after proactive remediation for cached profile bloat went live.
- **Hardware refresh ROI**: refresh decisions are now data-driven; the fleet refresh cycle stretched from 36 to 48 months because high-performing devices are kept longer.
- **Microsoft baseline achievement**: 92% of fleet now at 80+ across all 5 Endpoint Analytics categories (up from 31% baseline).
- **IT staff productivity**: helpdesk team reduced from 47 FTEs to 38 FTEs while ticket volume per device dropped substantially.

**Lesson for the exam / for practitioners.** This is the textbook case for *why* MD-102 weighs Endpoint Analytics + Proactive Remediations heavily and *why* the exam expects you to know what each of the 5 categories measures. The economic case is overwhelming: data-driven endpoint operations replaced reactive helpdesk firefighting, and the ROI showed up in both ticket counts and hardware refresh extensions. When the exam describes "diagnose why devices are slow at scale" or "automatically fix a known recurring issue," the answer is **Endpoint Analytics + Proactive Remediations**, every time. The Bayer story is why.

**Discussion (Socratic).**
- **Q1.** Bayer extended hardware refresh from 36 to 48 months on the strength of Endpoint Analytics data. Argue both sides: when is Endpoint Analytics a reliable refresh-decision signal, and when does it miss something (hint: think about silent hardware-degradation patterns like battery, SSD wear, motherboard intermittent faults)?
- **Q2.** Bayer wrote custom proactive remediations for in-house apps. A smaller org argues "we'll stick with Microsoft's pre-built remediations." Defend custom remediations by naming the operational scenario where custom is the only answer.
- **Q3.** Bayer reduced helpdesk FTEs from 47 to 38. A change-management consultant warns "automation that reduces headcount is a hard sell internally." Defend the automation initiative by naming the operational benefit that *isn't* headcount reduction, what other value does it create?

---

> **Where this leads.**
> - Inside this course: This is the last module. Next stop is the practice exams. Each of the three exams revisits all 8 modules with progressive difficulty.
> - Cross-course: [`06-Azure-Administrator` Module 10](../../06-Azure-Administrator/Module-10-Monitor-Governance/Reading.md) covers Azure Monitor + Log Analytics, useful since many Intune reports route through Log Analytics.
> - Practice: Practice Exam 2 has roughly 5–7 questions from this module (analytics, remediations, troubleshooting blade, MDM diagnostics, remote actions). Final Mock Exam revisits with incident-response scenarios.

---

## 💬 Discussion, Socratic prompts

1. **Endpoint Analytics in small orgs.** A 30-device startup has Intune Plan 1. They argue "Endpoint Analytics is for enterprises, we don't need it." Defend the small-org use case by naming the operational scenario where Analytics is worth the Plan 2 upgrade.
2. **Proactive remediations vs help-desk tickets.** Build the ROI case: at what fleet size does a proactive remediation pay for itself vs. just having helpdesk handle each instance manually?
3. **Wipe vs Retire vs Fresh Start vs Autopilot Reset.** These four actions are tested constantly. Defend a decision tree for picking the right action given the scenario (departing employee, lost device, repurposing for new user, suspected compromise, demoted from corporate to personal).
4. **Advanced Hunting vs Defender alerts.** Defender alerts are reactive. Advanced Hunting is proactive. Defend the balance, when do you investigate with KQL hunting vs. rely on alerts?
5. **The diminishing returns of monitoring.** Endpoint Analytics adds Plan 2 cost. Advanced Hunting adds investigative time. Proactive remediations require maintenance. Where does an org reach the point of "monitoring tax exceeds monitoring value"?

---

## 📚 Further Reading (Optional)

- 📖 [Endpoint Analytics documentation](https://learn.microsoft.com/mem/analytics/) (Microsoft, current)
- 📖 [Proactive remediations overview](https://learn.microsoft.com/mem/analytics/proactive-remediations)
- 📖 [Troubleshooting + Support blade in Intune](https://learn.microsoft.com/mem/intune/fundamentals/help-desk-operators)
- 📖 [Generate the MDM Diagnostics Report on Windows](https://learn.microsoft.com/mem/intune/remote-actions/collect-diagnostics)
- 📖 [Advanced Hunting + KQL in Defender for Endpoint](https://learn.microsoft.com/defender-endpoint/advanced-hunting-overview)
- 📖 [Intune Management Extension log reference](https://learn.microsoft.com/mem/intune/apps/intune-management-extension)
- 📖 Microsoft *Endpoint Analytics public dataset baselines* (refreshed quarterly), what Microsoft compares your scores against
