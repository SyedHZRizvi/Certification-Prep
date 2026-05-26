# ✏️ Module 7 Quiz: Operating Systems

> Answer all 28 questions WITHOUT looking at the reading. Aim for 24/28.
>
> **Bloom distribution:** Remember 7 · Understand 7 · Apply 8 · Analyze/Evaluate 5 · Create 1.

---

## Questions

### Q1. The maximum single-file size on a FAT32 volume is: *(Remember)*
A. 2 GB
B. 4 GB
C. 32 GB
D. Unlimited

---

### Q2. Windows 11 requires which set of features? *(Apply)*
A. Legacy BIOS only
B. UEFI + Secure Boot + TPM 2.0 + 8th-gen Intel or equivalent
C. MBR disk
D. Just 4 GB RAM and a 32-bit CPU

---

### Q3. The Windows command that rebuilds the boot store from WinRE is: *(Remember)*
A. chkdsk
B. bootrec /rebuildbcd
C. sfc /scannow
D. format C:

---

### Q4. macOS's modern file system (since 10.13) is: *(Remember)*
A. HFS+
B. FAT32
C. APFS
D. NTFS

---

### Q5. The Linux command to install a package on a Debian/Ubuntu system is: *(Remember)*
A. yum install pkg
B. apt install pkg
C. pacman -S pkg
D. brew install pkg

---

### Q6. A user wants to format a USB stick to copy files larger than 4 GB to both Windows and macOS. The BEST choice is: *(Apply)*
A. FAT32
B. exFAT
C. NTFS only
D. ext4

---

### Q7. The Windows utility that converts MBR to GPT without losing data is: *(Remember)*
A. diskpart
B. mbr2gpt
C. format
D. bootrec

---

### Q8. PowerShell's `Get-Process` is the equivalent of which Linux command? *(Understand)*
A. ls
B. ps
C. cd
D. cp

---

### Q9. The default macOS shell since Catalina (10.15) is: *(Remember)*
A. bash
B. zsh
C. csh
D. fish

---

### Q10. `chmod 755` gives the owner: *(Apply)*
A. Read + execute only
B. Read + write + execute (full)
C. Execute only
D. No permission

---

### Q11. The MOST appropriate first action when Windows can't boot and shows "BOOTMGR is missing": *(Apply)*
A. Reformat the drive
B. Boot from install media → Repair → bootrec / bcdboot
C. Replace the motherboard
D. Reinstall all applications

---

### Q12. UAC stands for: *(Remember)*
A. User Activity Control
B. User Account Control
C. Universal Access Code
D. User Authentication Console

---

### Q13. A user complains they cannot install a printer driver — UAC keeps prompting. The correct response: *(Apply)*
A. Disable UAC system-wide
B. Provide administrator credentials at the prompt (or run installer as administrator)
C. Reformat Windows
D. Switch to Linux

---

### Q14. Which Windows tool shows real-time CPU, memory, disk, network usage per process? *(Remember)*
A. Disk Management
B. Task Manager
C. Device Manager
D. Event Viewer

---

### Q15. A Mac with FileVault enabled is fully encrypted. To DECRYPT and recover files from outside the OS, you need: *(Apply)*
A. Nothing — files are always readable
B. The user's password OR the recovery key generated during FileVault setup
C. The serial number of the Mac
D. Apple Support's permission

---

### Q16. The Linux filesystem most commonly used for very large files and modern enterprise (RHEL default): *(Remember)*
A. ext4
B. XFS
C. NTFS
D. FAT32

---

### Q17. A user reports their Win 11 laptop won't sleep, draining the battery overnight. The MOST appropriate troubleshooting tool: *(Apply)*
A. `powercfg /sleepstudy` (HTML report on what kept the system awake)
B. Reformat the drive
C. Replace battery immediately
D. Reset the BIOS

---

### Q18. APFS supports which feature that HFS+ does not? *(Understand)*
A. Snapshots, cloning, native encryption, container-based volumes
B. Network sharing
C. Password protection
D. Spotlight search

---

### Q19. The Windows Recovery Environment is invoked from a running Windows machine via: *(Apply)*
A. Pressing F8 at boot (legacy)
B. Settings → Recovery → Advanced startup → Restart now
C. The print spooler
D. UAC prompt

---

### Q20. The `ipconfig /flushdns` command does what? *(Understand)*
A. Releases DHCP lease
B. Clears the local DNS resolver cache
C. Renews IP address
D. Tests connectivity

---

### Q21. A user reports the C: drive is full. The MOST appropriate cleanup tool: *(Apply)*
A. `cleanmgr` (Disk Cleanup) OR Settings → Storage → Cleanup recommendations
B. Reformat the drive
C. Replace the SSD
D. Disable Windows Defender

---

### Q22. The MOST common reason to use `sfc /scannow`: *(Analyze)*
A. Format a drive
B. Verify and repair corrupt Windows system files
C. Install a printer driver
D. Update Windows

---

### Q23. A user's PC takes 4 minutes to boot. The Windows tool to control which programs start with Windows is: *(Apply)*
A. Task Manager → Startup tab (or `msconfig`)
B. Notepad
C. Calculator
D. Paint

---

### Q24. The PRIMARY reason NOT to defragment an SSD is: *(Analyze)*
A. It takes too long
B. SSDs have no rotating platters; defrag wears flash without performance gain. Use TRIM instead.
C. Defragmentation is illegal
D. Microsoft disabled it

---

### Q25. A Linux user types `sudo` in front of a command. What does it do? *(Understand)*
A. Disables the firewall
B. Temporarily runs the command with elevated (root) privileges, prompting for password
C. Shuts down the system
D. Creates a new user

---

### Q26. A Windows tool that shows hardware + OS info (model, BIOS version, drivers, services): *(Remember)*
A. msinfo32
B. dxdiag
C. winver
D. taskmgr

---

### Q27. A user reports a Windows 11 PC reboots automatically into a "Stop code: CRITICAL_PROCESS_DIED" BSOD. The MOST appropriate first action: *(Apply)*
A. Replace the motherboard
B. Boot to WinRE → "Startup Repair" → if that fails, check `sfc /scannow` and `dism /Online /Cleanup-Image /RestoreHealth`
C. Reformat
D. Disable UAC

---

### Q28. Design challenge: A 30-person law firm uses Windows 11 Pro joined to Active Directory. They want to ensure that lost or stolen laptops cannot expose client data. The MINIMUM viable architecture is: *(Create)*

> *Create-level note:* you are picking the *combination* of OS features + management.
A. Just a strong password policy
B. **BitLocker drive encryption** (TPM-backed) + group-policy enforced strong PIN + remote wipe via MDM (Intune)
C. Disable Windows Defender
D. FAT32 the drive

---

## 🎯 Answers + Explanations

### Q1: **B. 4 GB**
FAT32's single-file limit is 4 GB. Volume limit on Windows is 32 GB (though it can be larger on other tools). exFAT/NTFS for larger.

### Q2: **B. UEFI + Secure Boot + TPM 2.0 + 8th-gen Intel+**
The Win 11 trifecta + a modern CPU. Without all four, Win 11 install will refuse (officially).

### Q3: **B. bootrec /rebuildbcd**
Rebuilds the Boot Configuration Data. Used in WinRE Command Prompt.

### Q4: **C. APFS**
Apple File System replaced HFS+ in macOS 10.13 High Sierra (2017).

### Q5: **B. apt install pkg**
apt is Debian/Ubuntu. yum/dnf is RHEL. pacman is Arch. brew is macOS Homebrew.

### Q6: **B. exFAT**
Cross-platform read/write on Mac+Windows+Linux, no 4 GB file limit. The right choice for a portable drive that's not a boot volume.

### Q7: **B. mbr2gpt**
`mbr2gpt /validate /allowFullOS` then `/convert` — used to enable UEFI on a Win 10 → Win 11 upgrade.

### Q8: **B. ps**
PowerShell's `Get-Process` lists running processes — Linux equivalent is `ps` (or `top`/`htop`).

### Q9: **B. zsh**
zsh became default in macOS 10.15 Catalina (was bash before).

### Q10: **B. Read + write + execute (full)**
755 = rwx (owner) + r-x (group) + r-x (other). The "7" gives full permission to the owner.

### Q11: **B. bootrec / bcdboot from install media**
The standard repair sequence for missing/corrupt boot manager.

### Q12: **B. User Account Control**
Windows' privilege-escalation prompt mechanism.

### Q13: **B. Provide admin credentials at the prompt**
UAC is *protecting* the user. Don't disable it; just authenticate when prompted.

### Q14: **B. Task Manager**
Ctrl+Shift+Esc. Real-time per-process metrics.

### Q15: **B. User password OR recovery key**
FileVault encrypts with the user's account password (and a recovery key generated at setup). Without one of these, the data is unrecoverable.

### Q16: **B. XFS**
RHEL/CentOS default. Excellent for large files and heavy I/O.

### Q17: **A. powercfg /sleepstudy**
Generates an HTML report showing what device/process kept the system awake. Essential tool.

### Q18: **A. Snapshots, cloning, encryption, containers**
APFS adds modern features HFS+ never had.

### Q19: **B. Settings → Recovery → Advanced startup → Restart now**
Modern path. (Old F8 is unreliable on UEFI fast-boot systems.)

### Q20: **B. Clears the local DNS resolver cache**
Use after fixing a DNS issue to drop stale cached entries.

### Q21: **A. cleanmgr (Disk Cleanup) OR Settings → Storage**
Built-in cleanup before drastic action. Often clears 5–20 GB.

### Q22: **B. Verify and repair corrupt Windows system files**
System File Checker. If `sfc` can't fix, escalate to `dism /Online /Cleanup-Image /RestoreHealth`.

### Q23: **A. Task Manager → Startup tab (or msconfig)**
Disable unneeded startup items to speed boot.

### Q24: **B. SSDs have no platters; defrag causes wear without gain**
SSDs are random-access. Use TRIM (built into Windows / macOS / Linux SSD support).

### Q25: **B. Temporarily run with elevated privileges**
sudo (super-user do) executes the command as root, prompting for the user's password (must be in `sudoers` file).

### Q26: **A. msinfo32**
System Information shows the kitchen sink. dxdiag is GPU-focused; winver shows just OS version.

### Q27: **B. Boot to WinRE → Startup Repair → sfc / dism**
The standard cascade. Startup Repair first; if that doesn't fix it, the offline `sfc` / `dism` from WinRE.

### Q28: **B. BitLocker + strong PIN + Intune remote wipe**
The modern stack for laptop encryption + lost-device response. The minimum viable enterprise architecture.

---

## 📊 Score Yourself

- 27–28/28 → 🏆 OS mastered. Onward to security.
- 24–26/28 → ✅ Solid. Drill the command-line equivalence table.
- 19–23/28 → ⚠️ Re-read the Windows + Linux commands sections.
- <19/28 → 🔁 Restart with the Reading.md. OS is 31% — it must be locked in.

---

## 🃏 Add To Your Flashcards

- File systems: NTFS/FAT32/exFAT/APFS/ext4 with use cases
- Win 11 requirements (TPM 2.0 + UEFI + Secure Boot + CPU gen)
- Top 20 Windows commands
- Top 20 Linux commands + Windows equivalents
- bootrec, sfc, dism, chkdsk
- chmod octal numbers (7=rwx, 5=r-x, 4=r--)
- macOS recovery + FileVault
- mbr2gpt for Win 11 upgrades

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 8 — Security Fundamentals](../Module-08-Security/Reading.md)
