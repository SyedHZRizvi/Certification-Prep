# Module 9: Software Troubleshooting 🐛

> **Why this module matters:** Software Troubleshooting (combined with Module 11 Mobile) is **22% of the 220-1102 exam** — about 20 questions. This is where you debug everything *above* the hardware layer: a Windows that won't boot, a BSOD, a crashing app, a slow PC, ransomware that just popped up. The exam tests sequence — what's the next step? — and symptom-to-cause pattern recognition.

> **Prerequisites for this module.** You need:
> - Module 7 (OS basics, file systems, command line)
> - Module 8 (malware types, 7-step removal process)
> - Module 5 (general troubleshooting methodology)

---

## 🐛 A Story: The User Who Couldn't Open Excel for 4 Days

Meet Aanya. She's a tier-2 support engineer at a 600-person logistics firm. A user — Jeff, the head of operations — has been unable to open Excel for four days. He's been doing his work in Google Sheets, but he needs Excel for a vendor's macro-laden workbook by Monday. Tier-1 has tried: reinstalled Office (3 times), repaired the install, ran Windows Update, gave Jeff a loaner laptop (works fine), brought the laptop back to Jeff (broken again).

The pattern: Excel crashes 4 seconds after launch with "Excel has stopped working." Word, PowerPoint, Outlook — all fine.

Aanya pulls Jeff's laptop. She fires up **Event Viewer** (Windows Logs → Application). She filters by **Source: Application Error**. There it is — every Excel crash is a `STATUS_ACCESS_VIOLATION` exception with the faulting module: `EXCEL.EXE` *plus a path she doesn't recognize* — `C:\Users\jeff\AppData\Local\TaxAddin2024\XLAddin.dll`.

Jeff installed a tax-prep add-in last quarter. The add-in's DLL was incompatible with the latest Office update from two weeks ago. Tier-1 reinstalled Office but never removed the add-in.

Aanya disables the add-in (Excel → Options → Add-ins → COM Add-ins → uncheck), reopens Excel, opens Jeff's file. Works. Total time: 12 minutes.

What broke tier-1's flow? They were *reinstalling* — the most aggressive remediation — without first *diagnosing*. The Event Viewer log told the story instantly. This module teaches you to read those logs, to recognize symptom patterns, and to apply the right intervention at the right level.

---

## 💥 Windows Boot Failures

### Symptoms catalog

| Symptom | Likely cause |
|---------|--------------|
| **"BOOTMGR is missing"** | Corrupt or missing boot manager — repair via `bootrec` |
| **"NTLDR is missing"** | Legacy XP-era; pre-UEFI; repair from install media |
| **"BCD failure" / "Boot Configuration Data missing"** | BCD store corrupt — `bootrec /rebuildbcd` |
| **"Operating system not found"** | Boot order wrong, drive not detected, MBR/GPT mismatch |
| **Black screen, no cursor** | GPU driver, monitor cable, sometimes corrupt user profile |
| **Boot loops** | Updates failed mid-install; BSOD on boot; corrupt drivers |
| **Stuck on "Preparing automatic repair"** | Multiple failed boots — Windows enters WinRE |
| **No bootable media** | USB/DVD in boot order before disk |
| **"Inaccessible boot device" BSOD** | SATA driver, AHCI vs RAID mode change |

### The Windows Recovery Environment (WinRE) toolkit

| Tool | Purpose |
|------|---------|
| **Startup Repair** | Automated boot fix |
| **System Restore** | Roll back to previous restore point (if available) |
| **Reset this PC** | Reinstall Windows, optionally keeping files |
| **Command Prompt** | Manual repair — bootrec, sfc, dism, chkdsk, diskpart |
| **Uninstall Updates** | Roll back recent quality / feature update |
| **Startup Settings** | Boot to Safe Mode, disable driver signature enforcement |

### Standard boot-repair sequence

```
1. Boot to Windows installation media
2. Click "Repair your computer" → Troubleshoot → Advanced options
3. Startup Repair (automated; works ~30% of the time)
4. If fails → Command Prompt:
     bootrec /fixmbr
     bootrec /fixboot
     bootrec /scanos
     bootrec /rebuildbcd
   For UEFI:
     bcdboot C:\Windows /s S: /f UEFI    (S: is the EFI System Partition)
5. If still failing → System File Checker:
     sfc /scannow
6. If sfc can't fix → DISM:
     dism /Image:C:\ /Cleanup-Image /RestoreHealth
7. If still failing → consider Reset this PC (keeping files) → as a last resort, full reinstall
```

---

## 💙 Blue Screen of Death (BSOD)

A Windows kernel panic with a stop code. Modern Windows 10/11 shows a stop code as a string (e.g., `CRITICAL_PROCESS_DIED`) — older Windows showed `0x000000XX` hex codes.

### Common stop codes

| Stop code | Common cause |
|-----------|--------------|
| `CRITICAL_PROCESS_DIED` | A critical system process crashed — driver, file system, malware |
| `IRQL_NOT_LESS_OR_EQUAL` | Driver tried to access invalid memory |
| `MEMORY_MANAGEMENT` | RAM error — run MemTest86 |
| `KERNEL_SECURITY_CHECK_FAILURE` | Corrupt driver / system file / RAM |
| `SYSTEM_THREAD_EXCEPTION_NOT_HANDLED` | Driver crash (often the faulting driver is named) |
| `INACCESSIBLE_BOOT_DEVICE` | Boot drive can't be read — controller mode change, bad cable, driver |
| `NTFS_FILE_SYSTEM` | NTFS volume corruption — `chkdsk C: /r` |
| `BAD_POOL_HEADER` | Memory pool corruption — driver / RAM |
| `STOP 0x7B` | Boot device error (often controller mode) |

### BSOD diagnosis workflow

1. Note the stop code AND any **faulting module / driver** named on screen
2. Boot to WinRE → Command Prompt
3. Run `sfc /scannow`
4. If sfc OK, run `dism /Online /Cleanup-Image /RestoreHealth` from a working session
5. Run `chkdsk C: /r` for disk-related BSODs
6. Run MemTest86 (boot from USB) for memory-related BSODs — at least 1 full pass, ideally 24 hours
7. Check Event Viewer → System log for the preceding error chain
8. Roll back recent driver update via Device Manager → Driver tab → Roll Back Driver
9. Last resort: Reset this PC

---

## 🐌 Performance Issues

| Symptom | Likely cause | Tool |
|---------|--------------|------|
| **Slow boot** | Too many startup apps; mechanical HDD; corrupt user profile | `msconfig` / Task Manager Startup |
| **Slow general use** | High background CPU/disk/RAM; failing drive; bloated profile | Task Manager / Resource Monitor / Reliability Monitor |
| **High CPU at idle** | Background scan, Windows Update, malware, runaway process | Task Manager → Processes |
| **High disk usage at idle** | Antivirus scan, indexing, Windows Update, malware | Resource Monitor → Disk |
| **High memory** | Memory leak in an app, too little RAM, lots of browser tabs | Task Manager → Memory tab |
| **Slow internet** | Browser cache, malware, DNS, ISP, full disk | `netstat`, browser dev tools |
| **PC overheating + throttling** | Dust, dead fan, dried thermal paste | HWiNFO64 |

### Pagefile / virtual memory

- Windows can use a portion of disk as "virtual RAM" when physical RAM fills
- Default: Windows manages automatically
- Excessive paging = system slow ("thrashing") → add RAM
- Set manually: System Properties → Advanced → Performance → Settings → Advanced → Virtual Memory

---

## 🧹 Application Issues

### App won't install

| Cause | Fix |
|-------|-----|
| Insufficient privilege | Right-click → Run as administrator |
| Antivirus blocking | Temporarily allow / add exception |
| Corrupt installer | Re-download |
| Incompatible OS version | Check system requirements; use compatibility mode |
| Disk full | Free space |
| Conflicting previous install | Uninstall old version cleanly first |

### App crashes / won't open

| Cause | Fix |
|-------|-----|
| Corrupt user profile | Test with new local account |
| Corrupt cache | Clear cache (in-app or file system) |
| Conflicting add-in / plugin | Disable add-ins (Excel example above) |
| Corrupt OS files | `sfc /scannow` |
| Out-of-date | Update / patch |
| Recent Windows update | Roll back the Windows update |

### App is slow

- Too many tabs / windows open
- Background sync (OneDrive, iCloud, Dropbox)
- Antivirus scanning every read
- Disk free space critical (<10%)
- Outdated GPU drivers (for visual apps)

---

## 🦠 Modern Malware Symptoms (revisit + extend Module 8)

### Browser-based

- **Browser redirect to ads** — likely PUP / adware extension; clean via Settings → Extensions
- **Pop-ups even when browser closed** — malicious notifications enabled; revoke per site
- **Search engine changed** — search hijacker; reset browser
- **Fake "Microsoft Support" tech-scam page** — close tab (NOT call the number); clear cache

### System-level

- **Strange new processes in Task Manager** — research the name; if malicious, remediate
- **Unexpected USB activity** — possible exfil; isolate
- **CPU/GPU pegged at idle** — cryptominer
- **Files renamed with `.locked`, `.crypted`, vendor-specific extensions** — ransomware

### Network-level

- **Outbound connections to unknown IPs** — check with `netstat -ano`, then resolve PID in Task Manager
- **Slow internet for one user only** — possible botnet membership

### The 7-step removal (recap from Module 8)
1. Investigate + verify
2. Quarantine
3. Disable System Restore
4. Remediate
5. Schedule scans + run updates
6. Re-enable System Restore
7. Educate the user

---

## 🛠️ Windows Repair Toolbox

### Useful commands cheat

```
# System
sfc /scannow                              # Verify + repair system files
dism /Online /Cleanup-Image /RestoreHealth  # Repair component store

# Disk
chkdsk C: /f                              # Fix logical errors
chkdsk C: /r                              # Find + recover bad sectors (slow)
defrag C:                                 # NOT for SSD
optimize C:                               # SSD-aware optimization

# Network
ipconfig /all
ipconfig /flushdns
ipconfig /release && ipconfig /renew
netsh winsock reset                       # Reset Winsock catalog
netsh int ip reset                        # Reset TCP/IP stack

# Boot
bootrec /fixmbr / /fixboot / /scanos / /rebuildbcd
bcdboot C:\Windows /s S: /f UEFI
mbr2gpt /convert /allowFullOS

# Tasks
schtasks /query                           # List scheduled tasks
taskkill /F /IM notepad.exe              # Force kill by image name
tasklist                                  # List running processes
```

### Safe Mode

- Boot into Safe Mode: Settings → Recovery → Advanced startup → Restart → Startup Settings → 4 (Safe Mode) or 5 (with Networking)
- Loads minimal drivers; great for malware removal and driver issues
- If problem doesn't happen in Safe Mode → it's a third-party driver / app

### Reliability Monitor

- `perfmon /rel`
- Shows crash + failure history per day, with stability index
- Click events for details → faulting module
- Great for "this PC has been crashing for weeks — what's the pattern?"

---

## 🔬 Scenario Walkthrough (PBQ-style thinking)

> **Scenario:** A Windows 11 PC boots, then BSODs with `INACCESSIBLE_BOOT_DEVICE` after a Windows Update was installed last night.

**Walkthrough:**
1. **Identify** — BSOD after Windows Update; boot device issue.
2. **Theory** — Update may have changed disk controller mode, or installed a bad storage driver, or corrupted boot files.
3. **Test** — Boot to WinRE. First action: **Uninstall Updates** option (try the latest quality update). If that fails, check UEFI for AHCI vs RAID mode change.
4. **Plan** — Uninstall the offending update via WinRE; if PC boots, defer further updates and report; if not, restore from System Restore or reset.
5. **Verify** — Stable boot; user data intact.
6. **Document** — KB: "INACCESSIBLE_BOOT_DEVICE after Win Update KB######; rolled back via WinRE."

The Windows Update rollback path is one of the most valuable WinRE tricks for "everything broke after an update."

---

## ⚠️ Exam Traps & Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "Reinstall Windows whenever something breaks" | Almost always the wrong first step. Diagnose with Event Viewer + sfc + Reliability Monitor first. |
| "Safe Mode means no internet" | Safe Mode WITH Networking is option 5 — internet works. |
| "BSOD always means hardware" | Often software/driver. Note the faulting module before assuming hardware. |
| "Defragmenting an SSD helps" | NEVER. Use `optimize` for TRIM. |
| "ChkDsk fixes everything" | ChkDsk fixes file system errors. It doesn't fix BSODs unrelated to disk. |
| "DISM is the same as SFC" | DISM operates on the component store (the system image); SFC operates on running system files. Run DISM if SFC reports unfixable errors. |
| "WinRE always boots from the disk" | If boot is too broken, you need install media. Keep a USB ready. |
| "Restart fixes everything" | Sometimes a restart hides a real problem that returns later. Investigate before assuming "good." |

---

## 🎓 Key Terms To Know (Add to Flashcards!)

| Term | Definition |
|------|------------|
| **WinRE** | Windows Recovery Environment |
| **BCD** | Boot Configuration Data |
| **bootrec** | BCD repair tool |
| **sfc /scannow** | System File Checker |
| **dism /RestoreHealth** | Repair component store |
| **chkdsk** | Disk error check/repair |
| **MemTest86** | RAM testing utility |
| **Safe Mode** | Minimal-driver boot mode |
| **Reliability Monitor** | History of crashes |
| **Event Viewer** | System/Application/Security logs |
| **Pagefile** | Disk-backed virtual memory |
| **PUP** | Potentially Unwanted Program |
| **BSOD** | Blue Screen of Death |
| **Stop code** | The BSOD identifier |
| **Faulting module** | The DLL/driver named in BSOD/Event Viewer |
| **Roll back driver** | Device Manager option to revert a driver update |

### Acronyms cheat-row (Module 9)
| Acronym | Meaning |
|---------|---------|
| BSOD | Blue Screen of Death |
| WinRE | Windows Recovery Environment |
| BCD | Boot Configuration Data |
| SFC | System File Checker |
| DISM | Deployment Imaging Service Management |
| MBR / GPT | Master Boot Record / GUID Partition Table |
| ESP | EFI System Partition |
| PUP | Potentially Unwanted Program |
| RAM / ROM | Random/Read-Only Memory |
| HDD / SSD | Hard Disk Drive / Solid State Drive |
| GPO | Group Policy Object |

---

## 📊 Case Study — The CrowdStrike Falcon Update Outage (July 2024)

**Situation.** On 19 July 2024 at ~04:09 UTC, **CrowdStrike** pushed a faulty content-update channel file (`C-00000291*.sys`) to its Falcon Sensor running on Windows endpoints worldwide. The update caused an immediate kernel-mode null-pointer dereference, triggering a BSOD (`PAGE_FAULT_IN_NONPAGED_AREA`) on **8.5 million Windows devices** simultaneously. Affected sectors: airlines (Delta canceled ~7,000 flights), hospitals (surgeries delayed), banks (trading halted), retail POS systems, broadcasting (Sky News went dark).

**The technical detail.** CrowdStrike Falcon Sensor is a kernel-mode driver. Its content updates (Rapid Response Content) were pushed independently of the main driver code, ostensibly to deliver threat-intelligence updates without driver re-signing. The faulty content file contained data the parser couldn't handle, dereferencing a null pointer at kernel level → instant BSOD → reboot loop. Because the driver loaded at boot, affected machines BSOD'd on every restart.

**Decision and outcome.** Recovery required *physical access* to each machine — boot to WinRE / Safe Mode, navigate to `C:\Windows\System32\drivers\CrowdStrike`, delete the problematic file, reboot. Some BitLocker-encrypted machines required the recovery key (often stored in Azure AD / Entra ID) to access WinRE. Cloud-managed fleets could automate via Intune remediation scripts once initial recovery was done; but the first-boot recovery had to be hand-touched on millions of devices.

Estimated global economic impact: **$5.4 billion** (Parametrix Insurance estimate). Delta sued CrowdStrike for over $500M. CISA issued an emergency directive within hours. CrowdStrike published a [post-incident review](https://www.crowdstrike.com/blog/falcon-update-for-windows-hosts-technical-details/) on 24 July 2024 admitting test failures.

**Lesson for the exam / for practitioners.**
- **Kernel-mode software updates need staged rollout.** This is the most fundamental rule of safe deployment. CrowdStrike's content channel updates did not go through phased deployment.
- **BSOD on boot = WinRE / Safe Mode workflow.** The exact workflow A+ candidates are tested on rescued millions of devices that day.
- **BitLocker recovery keys must be escrowed and accessible.** Many organizations could not get to WinRE because they had no recovery-key store. The companies that DID have keys in Entra ID recovered fastest.

**Discussion (Socratic).**
- **Q1:** Imagine you are the IT lead at a 300-laptop firm on the morning of 19 July 2024. Walk through your first 4 hours: triage, communication, recovery sequencing.
- **Q2:** The incident triggered debate about whether kernel-mode security software should be allowed at all (vs userspace alternatives). Argue both sides — Linux uses eBPF for similar use cases; Microsoft is rumored to be redesigning Windows endpoint security APIs.
- **Q3:** A small-business owner asks if they should "uninstall their EDR" because of this incident. Make the argument that the right lesson is *better deployment* of EDR, not removal.

---

## ✅ Module 9 Summary

You now know:
- 💥 Windows boot failure symptoms and the **bootrec → sfc → dism → chkdsk** repair cascade
- 💙 BSOD stop codes and how to read the faulting module
- 🐌 Performance triage with Task Manager, Resource Monitor, Reliability Monitor
- 🧹 Application install/crash/perf playbook (always check add-ins, profile, cache)
- 🦠 Modern malware symptom catalog beyond the basics
- 🛠️ The Windows repair toolbox: WinRE, Safe Mode, sfc, dism, chkdsk, netsh

**Next steps:**
1. 🎥 [Videos.md](./Videos.md)
2. ✏️ [Quiz.md](./Quiz.md)
3. 📋 [Cheat-Sheet.md](./Cheat-Sheet.md)
4. ➡️ [Module 10 — Operational Procedures](../Module-10-Operational-Procedures/Reading.md)

> **Where this leads.**
> - Inside this course: [Module 10](../Module-10-Operational-Procedures/Reading.md) covers change management — the operational discipline that prevents many of these issues; [Module 12](../Module-12-Documentation-DR/Reading.md) covers DR and the documentation that enables fast recovery.
> - Cross-course: Windows Server Hybrid Admin (course 25) and Endpoint Admin (course 26) cover enterprise rollout patterns that would prevent the CrowdStrike-class blast radius.

---

## 📚 Further Reading (Optional)

**Primary sources:**
- 📄 Microsoft Docs — Windows boot process / WinRE reference
- 📄 Microsoft Docs — DISM Command-Line Options
- 📄 Sysinternals utilities (Mark Russinovich) — `Process Explorer`, `Process Monitor`, `Autoruns`

**Case-study sources:**
- 📄 CrowdStrike (July 2024). [*Falcon Content Update for Windows Hosts: Technical Details*](https://www.crowdstrike.com/blog/falcon-update-for-windows-hosts-technical-details/).
- 📄 CISA Emergency Directive 24-01 (July 2024).
- 📄 Parametrix Insurance (July 2024). *Cost Analysis of the CrowdStrike Outage*.

**Practitioner / exam:**
- 📖 [Professor Messer 220-1102 software troubleshooting](https://www.professormesser.com/free-a-plus-training/220-1102/220-1102-video-training-course/)
- 📖 Sysinternals Suite (free) — every Windows tech's secret weapon
