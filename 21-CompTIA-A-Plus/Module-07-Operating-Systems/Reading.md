# Module 7: Operating Systems (Windows / macOS / Linux) 💻

> **Why this module matters:** OS is **31% of the 220-1102 (Core 2) exam**, the *single largest domain* across both A+ exams. About 28 questions. Every help-desk role tests OS judgment in the interview. You will install, configure, command-line, and debug Windows for the rest of your career; macOS for a meaningful fraction; Linux if you go into server, cloud, or DevOps.

> **Prerequisites for this module.** You need:
> - Module 2 (networking, ports)
> - Module 3 (hardware basics, boot devices, TPM, UEFI)
> - Module 5 (troubleshooting methodology)
>
> Hands-on suggestion: spin up a Windows 11 VM (Virtual Machine), a Linux Ubuntu VM, and (if you have a Mac) explore Terminal. 30 minutes in each = an enormous payoff for this module.

---

## 💻 A Story: The Migration That Almost Failed at 11:55 p.m.

Meet Wei. She's a junior sysadmin at a mid-size manufacturing firm. The company is replacing 380 Windows 10 PCs with Windows 11 over a long weekend. The plan: image each PC from a USB stick, restore user files from a cloud-managed user-profile redirect, validate, ship to the next floor. Estimated 24-person tech team, 60 hours of work.

Saturday afternoon they're on track. Sunday afternoon slowing down. **Sunday at 11:55 p.m.**, Wei runs the imaging tool against PC #312 and gets:

> *"This PC does not meet the minimum requirements to install Windows 11."*

She checks the spec. 8th-gen i5, 16 GB RAM, 512 GB SSD. Should be fine. She runs Microsoft's `PC Health Check`. Two failures: **TPM 2.0 missing** and **Secure Boot disabled**.

The PC has TPM 2.0 on its motherboard (Wei verifies in the spec sheet), but it's *disabled in BIOS*. She enters UEFI setup, flips TPM from "Disabled" to "Enabled", flips Boot mode from "Legacy + UEFI" to "UEFI only", enables Secure Boot. Saves. Reboots. The old Windows 10 install won't boot (MBR doesn't work with UEFI-only).

11:58 p.m. She has to convert the disk from MBR to GPT (Generative Pre-trained Transformer). `mbr2gpt.exe /convert /allowFullOS` from a Windows 10 recovery console runs in 4 minutes without data loss. Reboots. Windows 10 starts. She runs the Windows 11 installer. **It works.** Done by 1:14 a.m.

The 380-PC migration finished on schedule. But Wei learned the hard way: the **Windows 11 requirements stack is real** TPM 2.0, UEFI, Secure Boot, GPT and you have to enable all of them coherently.

This module gives you the OS-layer vocabulary and the troubleshooting muscle to handle that scenario fast.

---

## 🪟 Windows, Editions, Install, File Systems

### Current Windows desktop editions

| Edition | Use | Domain join? | Encryption | Notes |
|---------|-----|--------------|------------|-------|
| **Home** | Consumer | No | Device Encryption (limited BitLocker) | Cheapest |
| **Pro** | Small business / pro user | Yes | BitLocker | The most common business edition |
| **Pro for Workstations** | High-end workstation | Yes | BitLocker | Up to 4 CPUs, 6 TB RAM, ReFS |
| **Enterprise** | Volume-licensed enterprise | Yes | BitLocker | LTSC available for long-term stability |
| **Education** | Schools | Yes | BitLocker | Like Enterprise without enterprise features |

### Windows install types

| Type | Use | Side effect |
|------|-----|-------------|
| **Clean install** | Wipe + install | All data lost; cleanest result |
| **In-place upgrade** | Upgrade keeping apps/settings | Risky if old machine has cruft |
| **Repair install** | Reinstall keeping files | "Reset this PC" → "Keep my files" option |
| **Network install (PXE)** | Image from a network deployment server | Common for fleet rollouts |
| **Image deployment (MDT/SCCM)** | Captured WIM/FFU image | Enterprise standard |
| **Recovery partition** | Vendor's factory reset | Fastest "back to baseline" |
| **Multiboot** | Two OSes side-by-side | Choose at boot |

### Boot modes & disk formats

| Mode | Disk format | Notes |
|------|-------------|-------|
| **Legacy BIOS** | MBR (≤2 TB, ≤4 primary partitions) | Old PCs |
| **UEFI** | GPT (no practical size limit) | Win 11 requires UEFI |
| **UEFI + Secure Boot** | GPT | Required for Win 11 |
| **UEFI + Secure Boot + TPM 2.0** | GPT | Full Win 11 stack |

🎯 **Exam pattern:** *"User can't upgrade to Win 11; PC Health Check says missing TPM and Secure Boot."* → **Enable TPM in BIOS, switch to UEFI mode, enable Secure Boot. Convert MBR→GPT if necessary (`mbr2gpt`).**

### File systems

| Filesystem | OS | Use | Notes |
|------------|-----|-----|-------|
| **FAT32** | Windows + most others | Small USB drives, EFI System Partition | Max file 4 GB, max volume 32 GB on Windows |
| **exFAT** | Windows + macOS + Linux | Large USB drives, SD cards | No 4 GB file limit; no journaling |
| **NTFS** | Windows | Default Windows volume | Journaling, ACLs, encryption (EFS), compression |
| **ReFS** | Windows Server / Pro WS | Servers, large data sets | Resilient, no compression |
| **APFS** | macOS 10.13+ | Default for SSDs | Snapshots, cloning, encryption |
| **HFS+** | macOS legacy | Older Macs | Predecessor to APFS |
| **ext4** | Linux | Default many distros | Journaling, mature |
| **XFS** | Linux | RHEL/CentOS default | Excellent for very large files |
| **Btrfs** | Linux | OpenSUSE default, optional | Snapshots, COW (copy-on-write) |
| **ZFS** | Linux / FreeBSD / TrueNAS | NAS / enterprise | Best-in-class data integrity |

🚨 **Trap on the exam:** *"User can't copy a 5 GB ISO file to their USB stick."* → USB likely FAT32 (4 GB file limit). **Reformat as exFAT or NTFS.**

### Boot files & locations (Windows)

- UEFI boot manager: `\EFI\Microsoft\Boot\bootmgfw.efi` on the EFI System Partition (ESP)
- BCD (Boot Configuration Data): `\EFI\Microsoft\Boot\BCD`
- `bootrec` utility (from WinRE) to repair BCD: `bootrec /fixmbr`, `/fixboot`, `/scanos`, `/rebuildbcd`
- `sfc /scannow`, System File Checker
- `dism /Online /Cleanup-Image /RestoreHealth`, image-level repair

---

## 🍎 macOS, What You Need to Know

| Concept | Details |
|---------|---------|
| **Versions** | Big Sur (11) → Monterey (12) → Ventura (13) → Sonoma (14) → Sequoia (15) → 26 (2026) |
| **Architecture** | Intel x86 (legacy) and Apple Silicon (M1/M2/M3/M4, ARM) |
| **File system** | APFS (since 10.13 High Sierra) |
| **Encryption** | FileVault (full-disk) |
| **Recovery** | Cmd+R at boot → macOS Recovery; or Cmd+Option+R for internet recovery |
| **Package management** | App Store, .pkg installer, .dmg disk image, Homebrew (`brew`) |
| **Default shell** | zsh since macOS 10.15 Catalina (was bash) |
| **Built-in remote** | Screen Sharing (VNC-based, port 5900), SSH (Secure Shell) (port 22) |

### Common macOS keyboard shortcuts

| Shortcut | Action |
|----------|--------|
| Cmd+Space | Spotlight search |
| Cmd+Tab | App switcher |
| Cmd+Q | Quit app |
| Cmd+W | Close window |
| Cmd+Shift+3 | Full screen screenshot |
| Cmd+Shift+4 | Region screenshot |
| Cmd+Shift+5 | Screenshot toolbar (+ video) |

### macOS troubleshooting essentials

- **Safe Mode**, hold Shift at boot (Intel) or hold power button until Options appears (Apple Silicon)
- **NVRAM/PRAM reset**, (Intel) Cmd+Option+P+R at boot. (Apple Silicon: not needed/applicable.)
- **SMC reset**, (Intel laptop) Shift+Ctrl+Option+Power for 10 sec. (Apple Silicon: just shut down.)
- **Disk Utility**, repair APFS volumes
- **Activity Monitor**, like Windows Task Manager
- **Console**, system log viewer

---

## 🐧 Linux, A+ Scope

A+ tests *basic familiarity*, not Linux+ depth. Know:

### Major distributions

| Family | Examples | Package manager |
|--------|----------|-----------------|
| **Debian-based** | Debian, Ubuntu, Linux Mint | apt, dpkg |
| **RHEL-based** | RHEL, CentOS Stream, Rocky, AlmaLinux, Fedora | dnf, yum, rpm |
| **Arch-based** | Arch, Manjaro | pacman |
| **SUSE** | openSUSE, SUSE Enterprise | zypper |

### Basic commands

| Command | What it does |
|---------|--------------|
| `ls` | List files |
| `cd <dir>` | Change directory |
| `pwd` | Print working directory |
| `cp src dst` | Copy file |
| `mv src dst` | Move/rename |
| `rm` | Remove file (-r for recursive) |
| `cat`, `less`, `head`, `tail` | View files |
| `grep <pattern> <file>` | Search text |
| `find . -name "*.log"` | Find files |
| `sudo <cmd>` | Run as root |
| `chmod 755 file` | Change permissions |
| `chown user:grp file` | Change owner |
| `ps -ef`, `top`, `htop` | Process list |
| `kill <pid>` | Terminate process |
| `systemctl status nginx` | Service status (systemd) |
| `apt install pkg` / `dnf install pkg` | Install package |
| `ip a` / `ifconfig` | Show interfaces |
| `df -h` | Disk usage |
| `du -sh dir` | Size of directory |

### Permissions

Linux uses **owner / group / other** with **read (r=4) / write (w=2) / execute (x=1)** = octal modes.

```
chmod 755 script.sh
# rwx for owner, r-x for group, r-x for other
```

| Octal | Meaning |
|-------|---------|
| 7 | rwx (full) |
| 5 | r-x (read + execute) |
| 4 | r-- (read only) |
| 0 | --- (none) |

---

## ⌨️ Command-Line Comparison Cheat

| Task | Windows cmd | PowerShell | Linux/macOS |
|------|-------------|------------|-------------|
| List files | `dir` | `Get-ChildItem` (ls) | `ls` |
| Change dir | `cd` | `cd` | `cd` |
| Make dir | `mkdir` | `New-Item -Type Directory` | `mkdir` |
| Remove file | `del` | `Remove-Item` | `rm` |
| Copy | `copy` | `Copy-Item` | `cp` |
| Move | `move` | `Move-Item` | `mv` |
| IP info | `ipconfig` | `Get-NetIPConfiguration` | `ip a` |
| Ping | `ping` | `Test-Connection` | `ping` |
| List processes | `tasklist` | `Get-Process` | `ps aux` |
| Kill process | `taskkill /F /PID 1234` | `Stop-Process -Id 1234` | `kill -9 1234` |
| Restart computer | `shutdown /r /t 0` | `Restart-Computer` | `sudo reboot` |
| Run as admin | `runas` | (elevated PS) | `sudo` |
| Format disk | `format C:` | `Format-Volume` | `mkfs.ext4 /dev/sdb1` |

---

## ⚙️ Windows Tools You Must Know

| Tool | Path | Purpose |
|------|------|---------|
| **Task Manager** | Ctrl+Shift+Esc | Processes, performance, startup |
| **Resource Monitor** | resmon.exe | Deeper than Task Manager |
| **Services.msc** | services.msc | Manage Windows services |
| **Event Viewer** | eventvwr.msc | Logs (System, Application, Security) |
| **Disk Management** | diskmgmt.msc | Partitions, volumes |
| **Device Manager** | devmgmt.msc | Hardware + drivers |
| **Local Users and Groups** | lusrmgr.msc | (Pro+) local accounts |
| **Group Policy Editor** | gpedit.msc | (Pro+) policy management |
| **Performance Monitor** | perfmon.exe | Counters, baselines |
| **System Configuration** | msconfig.exe | Boot options, services, startup |
| **Registry Editor** | regedit.exe | Edit registry (dangerous) |
| **Computer Management** | compmgmt.msc | Everything-in-one console |
| **Reliability Monitor** | perfmon /rel | History of crashes/failures |
| **DirectX Diag** | dxdiag | GPU/driver info |
| **System Info** | msinfo32 | Hardware + OS summary |

### Control Panel vs Settings

- **Control Panel** (classic), User Accounts, Programs and Features, Device Manager, Power Options
- **Settings** (modern UWP), most things gradually moving here in Windows 10/11
- Both exist; the exam tests both.

---

## 🛡️ Account Types & Privileges (Windows)

| Account | Privilege |
|---------|-----------|
| **Standard User** | Run apps; can't install or change system |
| **Administrator** | Can install, change system, but UAC prompts |
| **Guest** (deprecated) | Very limited; mostly disabled |
| **Microsoft account** | Cloud-linked, MFA (Multi-Factor Authentication), OneDrive integration |
| **Local account** | On-device only |
| **Domain account** | Joined to Active Directory |
| **Built-in Administrator** (disabled by default) | True elevated; bypass UAC |

### UAC (User Account Control)

- Default in Windows since Vista
- Prompts before privileged operations
- Configurable from "Never notify" (insecure) to "Always notify"
- Right-click → "Run as administrator" elevates an app

---

## 🔬 Scenario Walkthrough (PBQ-style thinking)

> **Scenario:** A user reports their Windows 11 PC won't boot, black screen with `BOOTMGR is missing` after a power outage.

**Walkthrough:**
1. **Identify**, Boot loader can't find its files. Power outage may have corrupted the EFI System Partition (ESP) or BCD.
2. **Theory**, BCD corruption, ESP partition damaged.
3. **Test**, Boot from Windows 11 install media → "Repair your computer" → Advanced → Command Prompt.
4. **Plan**, Run:
   ```
   bootrec /fixmbr
   bootrec /fixboot
   bootrec /scanos
   bootrec /rebuildbcd
   ```
   (Note: on UEFI systems, the commands differ slightly; sometimes you need `bcdboot C:\Windows /s S:` where S: is the ESP.)
5. **Verify**, Reboot; Windows starts normally.
6. **Document**, KB: "Power outage corrupted BCD; bootrec rebuild restored. Recommend UPS for affected PC."

---

## ⚠️ Exam Traps & Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "FAT32 can hold any file" | Max single file is **4 GB** on FAT32. exFAT or NTFS for larger. |
| "Windows 11 works on any 8th-gen CPU" | Officially requires Intel 8th gen+ AND TPM 2.0 + Secure Boot + UEFI. |
| "Linux requires command line for everything" | Modern distros (Ubuntu, Fedora) are fully GUI-driven for most tasks. |
| "Defragmentation helps SSDs" | NO, never defrag SSDs. Use TRIM/Optimize instead. |
| "Reformatting fixes ransomware" | Reformatting helps for clean reinstall but only after confirming clean restore source. |
| "macOS has no command line" | macOS Terminal runs zsh; very similar to Linux. |
| "Always use NTFS for USB drives" | If the drive moves between Mac+Windows+Linux, **exFAT** is the best choice. |
| "Disabling UAC speeds up Windows" | It opens a huge security hole. Leave UAC on. |

---

## 🎓 Key Terms To Know (Add to Flashcards!)

| Term | Definition |
|------|------------|
| **NTFS / FAT32 / exFAT / APFS / ext4** | File systems by OS |
| **MBR / GPT** | Disk partition schemes |
| **UEFI / Secure Boot / TPM 2.0** | Modern boot trio (Win 11 required) |
| **BCD / bootrec** | Windows boot store + repair tool |
| **WinRE** | Windows Recovery Environment |
| **PowerShell / cmd** | Windows shells |
| **zsh / bash** | macOS / Linux default shells |
| **sudo / Run as administrator** | Privilege elevation |
| **UAC** | User Account Control |
| **Group Policy (gpedit/gpo)** | Windows policy management |
| **systemctl** | Linux service manager (systemd) |
| **APFS snapshot** | Point-in-time file system state |
| **Time Machine** | macOS backup tool |

### Acronyms cheat-row (Module 7)
| Acronym | Meaning |
|---------|---------|
| OS | Operating System |
| GUI / CLI (Command Line Interface) | Graphical / Command Line Interface |
| BIOS / UEFI | Basic IO System / Unified Extensible Firmware Interface |
| TPM | Trusted Platform Module |
| MBR / GPT | Master Boot Record / GUID Partition Table |
| NTFS | New Technology File System |
| APFS | Apple File System |
| BCD | Boot Configuration Data |
| WSL | Windows Subsystem for Linux |
| RDP / VNC / SSH | Remote Desktop Protocol / Virtual Network Computing / Secure Shell |
| UAC | User Account Control |
| WinRE | Windows Recovery Environment |
| ACL | Access Control List |

---

## 📊 Case Study, Windows 10 → Windows 11 Migration at a US Federal Agency (2023–2024)

**Situation.** A US federal agency with ~14,000 endpoints had to migrate from Windows 10 to Windows 11 before Microsoft's end-of-support date (October 14, 2025). They used Microsoft Endpoint Manager (Intune) + Autopilot + ConfigMgr in co-management mode. The agency had ~22% of its fleet running on hardware that did not meet Win 11 requirements (mostly missing TPM 2.0 or 7th-gen CPUs).

**The migration playbook.** They categorized hardware in 3 tranches:

1. **Tranche 1 (52%)**, Hardware fully Win 11-capable, already enrolled in Autopilot. Pushed feature update via Intune Update Rings. ~6 weeks.
2. **Tranche 2 (26%)**, Hardware with TPM disabled in BIOS but otherwise capable. Used a BIOS-update + TPM-enable PowerShell script via SCCM Task Sequence. Tested on 200 endpoints, then expanded. ~10 weeks.
3. **Tranche 3 (22%)**, Hardware truly not capable (older Intel, no TPM 2.0). Procured 3,100 replacement laptops (Dell Latitude, HP EliteBook with TPM 2.0). Used Autopilot Pre-Provisioned Deployment. ~16 weeks.

**Decision and outcome.** The agency completed all three tranches by September 2025, 30 days before EOL. Total per-device cost: $42 for tranches 1 + 2 (mostly labor), $1,250 for tranche 3 (hardware + labor). Lessons documented in an internal post-mortem.

**Lesson for the exam / for practitioners.**
- **Win 11 hardware requirements are a real, expensive constraint**, plan upgrade cycles around them.
- **Co-management (Intune + ConfigMgr) is the modern enterprise approach**, pure on-prem ConfigMgr is shrinking; pure-cloud Intune is gaining.
- **Tranche-based deployment beats big-bang.** Test on 200, then 2,000, then 14,000.

**Discussion (Socratic).**
- **Q1:** A 200-person law firm has 60 PCs with TPM 1.2 (not 2.0). What 3-option roadmap do you present to the partners, buy new, run unsupported Win 11, stay on Win 10 ESU?
- **Q2:** The agency used SCCM + Intune in co-management. A pure-cloud start-up uses only Intune. What does each lose by their choice? When does each make sense?
- **Q3:** Windows 10 reaches end-of-support October 14, 2025. After that, Microsoft offers Extended Security Updates (ESU) at increasing annual cost. Argue both: (a) buy ESU and delay migration vs (b) bite the bullet and migrate now.

---

## ✅ Module 7 Summary

You now know:

- 🪟 Windows editions, install types, and the UEFI/Secure Boot/TPM 2.0 stack required for Win 11
- 📁 File systems by OS: NTFS, exFAT, FAT32, APFS, ext4
- 🍎 macOS basics: APFS, FileVault, Recovery, brew, zsh
- 🐧 Linux basics: distro families, top 20 commands, octal permissions, systemctl
- ⌨️ The Windows vs PowerShell vs Linux command equivalence table
- ⚙️ Windows admin tools: Task Manager, Services, Event Viewer, Disk Management, Device Manager
- 🛡️ Account types, UAC, and the "Run as Administrator" pattern

**Next steps:**
1. 🎥 [Videos.md](./Videos.md)
2. ✏️ [Quiz.md](./Quiz.md)
3. 📋 [Cheat-Sheet.md](./Cheat-Sheet.md)
4. ➡️ [Module 8, Security Fundamentals](../Module-08-Security/Reading.md)

> **Where this leads.**
> - Inside this course: [Module 8](../Module-08-Security/Reading.md) covers OS-level security (UAC, BitLocker, FileVault, LUKS); [Module 9](../Module-09-Software-Troubleshooting/Reading.md) drills into OS troubleshooting (BSOD, boot loops, repair).
> - Cross-course: Linux+ (course 23), Microsoft Endpoint Administrator (course 26), Windows Server Hybrid Admin (course 25) all expand from this OS foundation.

---

## 📚 Further Reading (Optional)

**Primary sources:**
- 📄 Microsoft Docs, Windows 11 system requirements
- 📄 Apple Platform Deployment Guide, macOS management reference
- 📄 The Linux Documentation Project (TLDP), basic command and tutorial collection
- 📄 POSIX.1-2017, the Unix command-line standard

**Practitioner / exam:**
- 📖 [Professor Messer 220-1102 OS module](https://www.professormesser.com/free-a-plus-training/220-1102/220-1102-video-training-course/)
- 📖 *The Linux Command Line* (William Shotts), free PDF online, essential reading
- 📖 Microsoft Learn, Windows 11 deployment learning paths
