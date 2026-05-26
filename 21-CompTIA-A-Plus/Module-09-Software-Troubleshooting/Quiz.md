# ✏️ Module 9 Quiz: Software Troubleshooting

> Answer all 26 questions WITHOUT looking at the reading. Aim for 22/26.
>
> **Bloom distribution:** Remember 6 · Understand 6 · Apply 8 · Analyze/Evaluate 5 · Create 1.

---

## Questions

### Q1. The Windows utility that verifies and replaces corrupt system files is: *(Remember)*
A. chkdsk
B. sfc
C. dism
D. taskmgr

---

### Q2. After `sfc /scannow` reports unfixable errors, the next escalation is: *(Apply)*
A. Reformat
B. `dism /Online /Cleanup-Image /RestoreHealth`
C. Replace the SSD
D. Roll back BIOS

---

### Q3. A user's PC BSODs with `MEMORY_MANAGEMENT`. The MOST appropriate first test: *(Apply)*
A. Replace the motherboard
B. Run MemTest86 (at least one full pass)
C. Reformat
D. Disable UAC

---

### Q4. "BOOTMGR is missing" on a Windows PC is BEST repaired by: *(Apply)*
A. Reformat C:
B. Boot from install media → Repair → Command Prompt → `bootrec /fixmbr /fixboot /scanos /rebuildbcd`
C. Replace the CPU
D. Disable Secure Boot

---

### Q5. The PRIMARY reason to disable System Restore before remediating malware: *(Understand)*
A. Restore is slow
B. Infected files in restore points can re-infect after rollback
C. Microsoft removed it
D. It uses too much RAM

---

### Q6. A user reports their Windows 11 PC takes 5 minutes to boot. The MOST appropriate first tool: *(Apply)*
A. Task Manager → Startup tab to identify boot-time programs
B. Replace the PSU
C. Reformat
D. Reinstall Office

---

### Q7. A user reports their browser keeps opening pop-up ads even when no website is open. The MOST likely cause: *(Analyze)*
A. The browser is broken
B. Malicious browser notifications enabled OR PUP / adware extension installed
C. The PC has too much RAM
D. The monitor is failing

---

### Q8. Safe Mode with Networking is appropriate when: *(Understand)*
A. You need internet access while troubleshooting drivers/OS issues
B. You want to play games
C. You're flashing BIOS
D. You're testing the printer

---

### Q9. The `chkdsk C: /r` command does what? *(Remember)*
A. Defrags the drive
B. Checks file system AND scans for/recovers bad sectors (slow)
C. Encrypts the drive
D. Removes Windows

---

### Q10. After a recent Windows Update, a PC BSODs at boot. The BEST WinRE option to try FIRST: *(Apply)*
A. Reset this PC (lose everything)
B. Uninstall Updates → Uninstall latest quality update
C. Reformat C:
D. Replace the SSD

---

### Q11. Reliability Monitor in Windows shows: *(Understand)*
A. Hardware temperatures
B. History of system crashes, app failures, and the days they occurred — with a stability index
C. Just running processes
D. The Wi-Fi signal

---

### Q12. A user reports that Excel crashes on launch after a recent Windows Update. Word, PowerPoint work fine. The MOST appropriate diagnostic: *(Apply)*
A. Reinstall Windows
B. Check Event Viewer → Application for the faulting module, then disable suspect Excel COM Add-ins
C. Replace the keyboard
D. Roll back BIOS

---

### Q13. A symptom of a cryptominer running on a PC is: *(Analyze)*
A. Low CPU at all times
B. CPU/GPU pegged at near 100% with no user activity, system warm/fans loud
C. The mouse is faster
D. The PSU is louder

---

### Q14. The DIFFERENCE between sfc and dism: *(Understand)*
A. sfc is older; dism is the same
B. sfc verifies running system files; dism repairs the component store (image) and can supply files sfc needs
C. dism only works on macOS
D. They are exactly the same tool

---

### Q15. `netsh winsock reset` is used to: *(Apply)*
A. Reformat the disk
B. Reset the Winsock catalog when network connectivity is corrupted (e.g. after a malware removal or a bad firewall app)
C. Disable Wi-Fi
D. Reset the BIOS

---

### Q16. A user's PC shows a fake "Microsoft Support" pop-up demanding they call a phone number. The CORRECT user response: *(Apply)*
A. Call the number
B. Close the tab (or end browser via Task Manager), clear browser cache, run AV scan
C. Pay the fee
D. Disable the firewall

---

### Q17. A common cause of slow internet on ONE user's PC (but fine for everyone else): *(Analyze)*
A. ISP outage
B. Browser cache, malicious browser extension, DNS hijack, or malware/botnet on that PC
C. The router needs replacement
D. The cable in the wall is broken (would affect L1, not just one PC's speed)

---

### Q18. The Windows tool that lists every program/driver that starts at boot — including stealth entries — is: *(Apply)*
A. msconfig
B. Autoruns (Sysinternals)
C. taskmgr
D. cmd

---

### Q19. The MOST appropriate Windows command to recover a network stack that's not handing out IP addresses: *(Apply)*
A. `ipconfig /release && ipconfig /renew`
B. `chkdsk C: /r`
C. `format C:`
D. Reformat

---

### Q20. A user reports OneDrive constantly syncing and high disk usage. The MOST appropriate fix: *(Apply)*
A. Reformat the laptop
B. Investigate which folder is over-syncing; pause sync; check disk space; use Files On-Demand if needed
C. Disable Windows Update
D. Replace the SSD

---

### Q21. The standard sequence to boot to Windows Recovery from a running Win 11 PC: *(Remember)*
A. Press F8 at boot
B. Settings → System → Recovery → Advanced startup → Restart now
C. Power button hold
D. Open Notepad

---

### Q22. A BSOD names the faulting module as `nvlddmkm.sys`. The MOST appropriate next step: *(Analyze)*
A. Reinstall Windows
B. Roll back or update the NVIDIA display driver (the module is the NVIDIA driver)
C. Replace the PSU
D. Reformat

---

### Q23. The Sysinternals tool that gives a far better Task Manager (with process tree, DLL view, network connections per process) is: *(Remember)*
A. Process Explorer
B. Notepad
C. Calculator
D. Defrag

---

### Q24. Why should you NEVER defragment an SSD? *(Evaluate)*
A. SSDs have no rotating platters; defrag causes unnecessary write wear without speed gain. Windows uses TRIM/Optimize for SSDs instead.
B. Defrag is illegal on SSDs
C. SSDs auto-defrag on their own
D. Defrag is slower on SSDs

---

### Q25. The single biggest lesson IT departments learned from the CrowdStrike outage (July 2024): *(Evaluate)*
A. Avoid all endpoint security software
B. Kernel-mode updates need staged rollout, BitLocker recovery keys must be escrowed and accessible
C. Disable Windows entirely
D. Use Macs only

---

### Q26. Design challenge: A 250-PC company wants to be able to roll back a faulty Windows update across the fleet within 30 minutes. The MINIMUM viable architecture: *(Create)*

> *Create-level note:* you are picking the *combination* of tools + practices.
A. Manual touch on each PC
B. **Intune Update Rings with staged deployment** (pilot first, then broad), Intune remediation scripts to uninstall a specific KB, BitLocker recovery keys escrowed in Entra ID
C. No central management
D. Reinstall Windows on each PC

---

## 🎯 Answers + Explanations

### Q1: **B. sfc**
System File Checker. `sfc /scannow` verifies system files and replaces from cached good copies.

### Q2: **B. dism /Online /Cleanup-Image /RestoreHealth**
DISM repairs the component store that sfc reads from. If sfc fails, run dism first, then sfc again.

### Q3: **B. Run MemTest86**
MEMORY_MANAGEMENT strongly suggests RAM. Test before replacing.

### Q4: **B. bootrec from install media**
The canonical "boot manager broken" repair sequence.

### Q5: **B. Restore points can re-infect**
Step 3 of the 7-step removal exists exactly for this reason.

### Q6: **A. Task Manager → Startup tab**
First check what's running at boot. Disable unneeded items.

### Q7: **B. Notifications OR PUP / adware**
Two common causes. Revoke browser notifications; remove unknown extensions.

### Q8: **A. Internet needed while troubleshooting**
Option 5 at Startup Settings = Safe Mode with Networking.

### Q9: **B. Check file system + scan/recover bad sectors**
The `/r` switch enables bad-sector recovery — much slower than `/f` alone.

### Q10: **B. Uninstall latest update**
Quickest first try when the timing points to the update.

### Q11: **B. History of crashes with stability index**
`perfmon /rel`. Great for "this has been crashing for weeks — what's the pattern?"

### Q12: **B. Event Viewer + disable Add-ins**
Per the module's opening story. Diagnose before reinstalling.

### Q13: **B. CPU/GPU pegged with no user activity**
Cryptominers steal compute. Look for unexpected resource use at idle.

### Q14: **B. sfc verifies; dism repairs the image**
sfc is the lighter tool. dism is the heavier repair (component store) needed when sfc reports unfixable errors.

### Q15: **B. Reset Winsock catalog**
Used after malware removal damaged networking, or after a third-party firewall left orphan entries.

### Q16: **B. Close tab + clear cache + AV scan**
Never call the number. The pop-up is a scam. Close via Task Manager if the browser is hijacked.

### Q17: **B. Browser cache / extension / DNS / botnet on that PC**
Per-user symptom = per-user cause. Network/ISP would affect everyone.

### Q18: **B. Autoruns**
Sysinternals Autoruns shows everything that auto-starts, including registry stealth.

### Q19: **A. ipconfig /release && /renew**
Force a new DHCP lease. Cheap, fast fix.

### Q20: **B. Investigate + pause + Files On-Demand**
Don't reformat. Look at what's syncing; offer the user File On-Demand to save local disk.

### Q21: **B. Settings → Recovery → Advanced startup → Restart now**
Modern WinRE entry path (F8 is unreliable on UEFI fast boot).

### Q22: **B. Roll back / update NVIDIA driver**
`nvlddmkm.sys` is NVIDIA's display driver. Roll back is the first try (recent update broke it), then update or clean reinstall.

### Q23: **A. Process Explorer**
Sysinternals Process Explorer — the Task Manager that should have been built in.

### Q24: **A. No platters; defrag wears flash without gain — use TRIM/Optimize**
The fundamental SSD rule. Never defrag an SSD.

### Q25: **B. Staged kernel rollout + escrowed BitLocker keys**
The two big lessons. Phased deployment AND ability to access WinRE on BitLocker'd machines.

### Q26: **B. Intune Update Rings + remediation scripts + escrowed keys**
The modern enterprise pattern that lets you roll back fast at fleet scale.

---

## 📊 Score Yourself

- 25–26/26 → 🏆 Software troubleshooting solid.
- 22–24/26 → ✅ Good. Drill the sfc/dism cascade.
- 18–21/26 → ⚠️ Re-read the boot-repair + BSOD sections.
- <18/26 → 🔁 Restart with the Reading.md.

---

## 🃏 Add To Your Flashcards

- bootrec → sfc → dism → chkdsk cascade
- BSOD stop codes (MEMORY_MANAGEMENT, INACCESSIBLE_BOOT_DEVICE, CRITICAL_PROCESS_DIED)
- 7-step malware removal (recap from Module 8)
- Reliability Monitor (perfmon /rel)
- Sysinternals: Process Explorer, Autoruns, Process Monitor
- Safe Mode (5 = with Networking)
- Event Viewer location of clues
- "Disable add-ins" pattern when Excel/Word crash

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 10 — Operational Procedures](../Module-10-Operational-Procedures/Reading.md)
