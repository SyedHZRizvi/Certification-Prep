# 📋 Module 9 Cheat Sheet: Software Troubleshooting

> One page. Print it.

---

## 🛠️ Repair Cascade (Memorize the Order)

```
1. bootrec /fixmbr  /fixboot  /scanos  /rebuildbcd
   (For UEFI: bcdboot C:\Windows /s S: /f UEFI)
2. sfc /scannow
3. dism /Online /Cleanup-Image /RestoreHealth
4. chkdsk C: /r
5. (If still broken) Reset this PC → keep files
6. (Last resort) Full reinstall
```

---

## 💙 Top BSOD Stop Codes

| Code | Likely cause |
|------|--------------|
| MEMORY_MANAGEMENT | RAM → MemTest86 |
| IRQL_NOT_LESS_OR_EQUAL | Driver |
| CRITICAL_PROCESS_DIED | Driver/system file/malware |
| INACCESSIBLE_BOOT_DEVICE | SATA mode, driver, corruption |
| KERNEL_SECURITY_CHECK_FAILURE | Driver/RAM |
| BAD_POOL_HEADER | Driver/RAM |
| NTFS_FILE_SYSTEM | Disk → chkdsk |
| SYSTEM_THREAD_EXCEPTION_NOT_HANDLED | Faulting module named — research it |

🎯 **Always note the faulting module on the BSOD or in Event Viewer.**

---

## 🚀 Boot to WinRE

- Settings → System → Recovery → Advanced startup → Restart now
- Or boot from install media → "Repair your computer"
- Inside: Startup Repair / Uninstall Updates / Command Prompt / System Restore / Reset this PC

---

## 🛡️ Safe Mode Options

| Option | Use |
|--------|-----|
| 4. Safe Mode | Minimal drivers, no network |
| 5. Safe Mode with Networking | + internet |
| 6. Safe Mode with Command Prompt | CLI-only |

---

## 🐌 Performance Triage

| Symptom | Tool |
|---------|------|
| Slow boot | Task Manager Startup tab / msconfig |
| High CPU at idle | Task Manager → Processes |
| High disk at idle | Resource Monitor → Disk tab |
| Memory leak | Task Manager → Memory |
| History of crashes | perfmon /rel (Reliability Monitor) |
| Boot-time persistence stealth | Autoruns (Sysinternals) |

---

## 🦠 Top Modern Malware Symptoms

| Symptom | Likely |
|---------|--------|
| Files with .locked/.crypted ext | Ransomware → isolate |
| CPU pegged at idle | Cryptominer |
| Browser redirect to ads | PUP / extension |
| Fake "Microsoft Support" pop-up | Browser hijack → close, scan |
| Unexpected outbound connections | Botnet → netstat -ano |
| New strange processes | Investigate before action |

---

## 🛠️ Repair Toolbox

```
sfc /scannow
dism /Online /Cleanup-Image /RestoreHealth
chkdsk C: /r
defrag C:           (HDD only — NEVER SSD)
optimize C:         (SSD-safe, runs TRIM)
ipconfig /flushdns
netsh winsock reset
netsh int ip reset
mbr2gpt /convert /allowFullOS
perfmon /rel
```

### Sysinternals essentials
- **Process Explorer** — Task Manager on steroids
- **Process Monitor** — file/registry trace
- **Autoruns** — all boot-time persistence
- **PsExec / PsKill** — remote admin

---

## 🏆 Exam Power Phrases

✅ Often **right**:

- "Check Event Viewer for clues"
- "Run sfc /scannow, then dism if needed"
- "Boot to WinRE and try Startup Repair"
- "Roll back the recent driver/update"
- "Test in Safe Mode to isolate"
- "Verify the user has data backup before reinstall"

❌ Often **wrong**:

- "Reinstall Windows as the first step"
- "Defragment the SSD"
- "Disable Windows Update for performance"
- "Ignore BSOD stop codes"
- "Reformat without backup"

---

## 🗓️ Memorize Cold

- Repair cascade: bootrec → sfc → dism → chkdsk
- BSOD: read the **faulting module**, not just the stop code
- Safe Mode option 5 = with Networking
- Reliability Monitor = perfmon /rel
- 7-step malware removal (Module 8 callback)
- Software Troubleshooting + Mobile = **22% of 220-1102**

---

## ✏️ Quick Self-Check

1. Order of the repair cascade? ___
2. Stop code for RAM issues? ___
3. Path to boot WinRE from a running Win 11 PC? ___
4. Tool that shows boot-time persistence? ___
5. Why never defrag an SSD? ___

---

➡️ [Module 10: Operational Procedures](../Module-10-Operational-Procedures/Reading.md)
