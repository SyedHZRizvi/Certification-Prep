# 📋 Module 6 Cheat Sheet: Endpoint Security & Defender for Endpoint

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 🛡️ MDE Plan 1 vs Plan 2

| | Plan 1 | Plan 2 |
|---|--------|--------|
| NGAV (Defender Antivirus) | ✅ | ✅ |
| ASR rules | ✅ | ✅ |
| Device control | ✅ | ✅ |
| Network protection / SmartScreen | ✅ | ✅ |
| Manual response actions | ✅ | ✅ |
| **EDR** | ❌ | ✅ |
| **AIR (auto investigation)** | ❌ | ✅ |
| **TVM (vuln mgmt)** | ❌ | ✅ |
| **Advanced Hunting (KQL)** | ❌ | ✅ |
| **Sandbox / detonation** | ❌ | ✅ |
| **Web content filtering** | ❌ | ✅ |

Bundles:

- M365 E3 → MDE Plan 1
- M365 E5 → MDE Plan 2

🔥 Plan 2 = +EDR + +investigation + +hunting + +vuln + +web filter.

---

## 🦠 Defender Antivirus Features

| Feature | What |
|---------|------|
| Real-time protection | Always-on scan |
| Cloud-delivered protection | Real-time cloud lookups |
| **Tamper protection** | Prevents disabling Defender (always on) |
| **BAFS** | Block at First Sight cloud sandbox |
| NIS | Network inspection |
| Behavior monitoring | Pattern-based detection |
| PUA protection | Block Potentially Unwanted Apps |
| **CFA** | Controlled Folder Access (anti-ransomware) |

---

## 🛑 Most-Tested ASR Rules

| Rule | Stops |
|------|-------|
| **Block Office child process** | Word → PowerShell |
| Block Office executable content | Office writing EXEs |
| Block Office code injection | Office injecting code |
| Block JS/VBScript launching exe | Scripting-engine droppers |
| Block obfuscated scripts | Anti-obfuscation engine |
| Block Win32 API from Office macros | Macros calling Win32 |
| **Block LSASS credential theft** | Mimikatz-style dumping |
| Block PSExec / WMI process creation | Lateral movement |
| Block USB unsigned processes | USB malware |
| Use advanced ransomware protection | Behavior-based ransomware |
| Block Adobe Reader child process | PDF exploits |
| Block persistence via WMI | Fileless persistence |
| Block BYOVD signed drivers | Vulnerable-driver attacks |

3 modes: **Audit / Block / Warn**

🚨 Always **Audit → monitor 7–14 days → Block**.

---

## 🔐 BitLocker via Intune

| Setting | Recommended |
|---------|-------------|
| Encryption | XTS-AES 256 |
| Type | Used Space Only (new devices) |
| Recovery key | Escrow to **Microsoft Entra ID device object** |
| Silent enablement | Yes (no user prompts) |
| Removable drives | Block writes to unencrypted |

🔥 Recovery key per device, not per user.

---

## 🔍 EDR (Plan 2)

| Capability | What |
|------------|------|
| Behavioral detection | Pattern-based, not signatures |
| Process tree | Parent-child analysis |
| Live response | Remote shell + script execution |
| **Device isolation** | Cut network, keep MDE conn |
| Advanced Hunting | KQL queries on telemetry |
| **AIR** | Auto-triage + remediate |
| **EDR in block mode** | Defender passive, EDR enforces (with 3rd-party AV) |

---

## 🌐 Network + Web Protection

| Feature | Plan |
|---------|------|
| SmartScreen (Edge + shell) | Plan 1 |
| Network protection (OS-level URL block) | Plan 1 |
| **Web content filtering** (categories) | **Plan 2** |

---

## 🔒 Other Defender Tooling

| Tool | What |
|------|------|
| **Defender for Cloud Apps** | CASB — discover/control SaaS |
| **Defender Firewall** | Built-in Windows Firewall, Intune-managed |
| **WDAC** | Windows Defender Application Control — code integrity |
| **Smart App Control** | Cloud-driven AppLocker successor (Windows 11) |
| **AppLocker** | Legacy GPO app whitelisting |
| **Windows LAPS** | Rotates + escrows local admin password (Entra device object) |
| **Security baselines** | Microsoft-published pre-configured settings |

---

## 🏆 Exam Power Phrases

When you see these, they're often **correct**:

- ✅ "Defender for Endpoint Plan 2 for EDR + AIR + Hunting"
- ✅ "Audit then Block for ASR rules"
- ✅ "BitLocker silent enablement + Entra key escrow"
- ✅ "Block Office child process to stop macro malware"
- ✅ "EDR in block mode with third-party AV"
- ✅ "Tamper protection always on"
- ✅ "Security baselines as the starting point"

When you see these, often **wrong**:

- ❌ "Plan 1 includes EDR"
- ❌ "ASR Block mode on day 1"
- ❌ "BitLocker keys stored per user"
- ❌ "Defender for Cloud Apps protects endpoints"
- ❌ "Tamper protection optional in production"

---

## ⚠️ Anti-Patterns To Recognize

- ❌ Disabling tamper protection for "easier troubleshooting"
- ❌ Skipping Audit phase on ASR rules
- ❌ No BitLocker on laptops
- ❌ Plan 1 for security-conscious organizations
- ❌ Using AppLocker on Windows 11 instead of WDAC / Smart App Control

---

## ✏️ Quick Self-Check

Cover the answers, recite:

1. Plan 1 vs Plan 2 — what does Plan 2 add? ___
2. 3 ASR modes? ___ Rollout pattern? ___
3. BitLocker recovery key escrow target? ___
4. Tamper protection — what does it prevent? ___
5. EDR in block mode — when? ___

---

➡️ [Module 7: Windows Update for Business & Servicing](../Module-07-Windows-Update/Reading.md)
