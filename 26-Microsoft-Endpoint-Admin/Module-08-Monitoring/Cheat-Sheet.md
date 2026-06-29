# 📋 Module 8 Cheat Sheet: Monitoring, Reporting & Troubleshooting

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 📊 Intune Report Surfaces

| Area | Shows |
|------|-------|
| Devices → Monitor | Enrollment failures, sync, updates |
| Endpoint security → Reports | Defender, ASR, BitLocker, baselines |
| Apps → Monitor | App install status + errors |
| **Endpoint analytics** | 5-category performance score |
| Reports (top-level) | Custom + operational analytics |
| **Troubleshooting + Support** | Per-user view (helpdesk's #1) |

---

## 🎯 Endpoint Analytics, 5 Categories

| Category | Measures |
|----------|----------|
| **Startup performance** | Boot + sign-in time |
| **Application reliability** | App crashes/week |
| **Work-from-anywhere** | Cloud-readiness signals |
| **Resource performance** | CPU + RAM + disk |
| **Battery health** | Mobile only |

Baseline: 80+ across all (Microsoft recommended).

🔥 Plan 1 = basic. **Plan 2** = Advanced Endpoint Analytics.

---

## 🛠️ Proactive Remediations (Plan 2)

Pair of PowerShell scripts:

- **Detect**, exit 0 (compliant) or exit 1 (issue)
- **Remediate**, runs only on exit 1

Microsoft-published + custom.

🚨 Plan 2 or Suite required.

---

## 📋 MDM (Mobile Device Management) Diagnostics Report (Windows 11)

```
Settings → Accounts → Access work or school → 
  [work account] → Info → 
  Export your management log files
```

Contains:

- MDMDiagReport.html (human readable)
- MDMDiagReport.xml
- Event Viewer logs (Device Management Enterprise)
- Autopilot ETW traces
- Cert provider logs

🔥 Canonical first step in Windows-side troubleshooting.

---

## 🔍 Key Log Locations

| Source | Path |
|--------|------|
| **IME logs** | `%ProgramData%\Microsoft\IntuneManagementExtension\Logs\` |
| MDM events | Event Viewer → Apps and Services → Microsoft → Windows → DeviceManagement-Enterprise-Diagnostics-Provider |
| Autopilot ETW | In MDM Diagnostics zip |
| Defender | Event Viewer → Microsoft → Windows → Windows Defender |
| BitLocker | Event Viewer → Microsoft → Windows → BitLocker-API (Application Programming Interface) |
| **Entra Sign-in log** | Entra admin center → Sign-ins |
| Audit log | Entra → Audit logs / Intune → Tenant admin → Audit logs |

---

## 🤖 Intune Remote Actions

| Action | Effect |
|--------|--------|
| **Sync** | Force check-in now |
| **Restart** | Reboot device |
| Remote lock | Lock immediately |
| Reset passcode | Reset PIN |
| **Wipe** | Factory reset (full) |
| **Retire** | Remove org only |
| **Fresh start** | Reset, preserve user data |
| **Autopilot reset** | Wipe + re-Autopilot |
| BitLocker key rotation | New recovery key |
| **Collect diagnostics** | Pull MDM Diagnostics zip |
| Defender scan | Quick / Full |

🚨 **Wipe** vs **Retire** vs **Fresh Start** vs **Autopilot Reset** = different!

---

## 🔎 Advanced Hunting (Plan 2), KQL

Common tables:

- `DeviceProcessEvents`, process creates
- `DeviceFileEvents`, file ops
- `DeviceLogonEvents`, logons
- `DeviceNetworkEvents`, connections
- `DeviceRegistryEvents`, registry
- `DeviceImageLoadEvents`, DLL loads
- `DeviceEvents`, Defender alerts
- `DeviceInfo`, inventory

Example:
```kusto
DeviceProcessEvents
| where InitiatingProcessFileName in~ ("winword.exe","excel.exe")
| where FileName =~ "powershell.exe"
| project Timestamp, DeviceName, ProcessCommandLine
```

---

## 🛠️ Troubleshooting Cheat Codes

| Issue | First step |
|-------|------------|
| Device won't sync | Sync from Settings or Intune → Sync remote action |
| App stuck Installing | Check **detection rule** |
| Compliance not applying | Check group membership + sync status |
| Autopilot enrollment failed | Verify hash registered + profile assigned |
| CA blocking legitimate user | Check **Entra Sign-in log → CA tab** |

---

## 🏆 Exam Power Phrases

When you see these, they're often **correct**:

- ✅ "Endpoint Analytics for fleet performance scoring"
- ✅ "Proactive remediations for known recurring issues"
- ✅ "MDM Diagnostics Report for policy troubleshooting"
- ✅ "Entra Sign-in log for CA debugging"
- ✅ "dsregcmd /status for join state"
- ✅ "IME logs for app install troubleshooting"

When you see these, often **wrong**:

- ❌ "Wipe and Retire are the same"
- ❌ "Endpoint Analytics is Plan 1 fully"
- ❌ "Proactive remediations free in Plan 1"
- ❌ "Restart action factory-resets"
- ❌ "MDM Diagnostics is a third-party tool"

---

## ⚠️ Anti-Patterns To Recognize

- ❌ Manual log-hunting instead of MDM Diagnostics
- ❌ Reactive helpdesk with no proactive remediations
- ❌ Confusing Wipe/Retire/Fresh Start/Autopilot Reset
- ❌ No Endpoint Analytics baseline tracking
- ❌ Ignoring Sign-in logs when debugging CA

---

## ✏️ Quick Self-Check

Cover the answers, recite:

1. 5 Endpoint Analytics categories? ___
2. Proactive remediation = ? + ? scripts (which plan?) ___
3. MDM Diagnostics report, where to generate? ___
4. Wipe vs Retire vs Fresh Start vs Autopilot Reset? ___
5. Tool to debug "user blocked by Conditional Access"? ___

---

➡️ Take **Practice-Exam-1** after Modules 1–4, **Practice-Exam-2** after 5–8, **Final-Mock-Exam** 2–3 days before the real exam.
