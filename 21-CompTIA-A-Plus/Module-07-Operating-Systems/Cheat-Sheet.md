# 📋 Module 7 Cheat Sheet: Operating Systems

> One page. Print it.

---

## 🪟 Windows 11 Hardware Trifecta

✅ TPM 2.0
✅ UEFI
✅ Secure Boot
+ 8th-gen Intel / Ryzen 2000+ / equivalent ARM

---

## 📁 File System Picker

| Need | Use |
|------|-----|
| USB cross-platform, big files | **exFAT** |
| Windows boot/data | **NTFS** |
| Tiny USB / EFI partition | **FAT32** |
| Modern Mac SSD | **APFS** |
| Linux desktop default | **ext4** |
| Linux huge files / RHEL | **XFS** |

🚨 FAT32 max file = **4 GB**.

---

## 🥾 Boot Commands (WinRE Command Prompt)

```
bootrec /fixmbr
bootrec /fixboot
bootrec /scanos
bootrec /rebuildbcd
bcdboot C:\Windows /s S:   (S: = EFI System Partition)
mbr2gpt /convert /allowFullOS
sfc /scannow
dism /Online /Cleanup-Image /RestoreHealth
chkdsk C: /r
```

---

## ⌨️ Cross-OS Command Cheat

| Task | cmd | PowerShell | Linux/macOS |
|------|-----|------------|-------------|
| List | dir | Get-ChildItem | ls |
| Change dir | cd | cd | cd |
| Make dir | mkdir | New-Item -Type Directory | mkdir |
| Remove | del | Remove-Item | rm |
| IP info | ipconfig | Get-NetIPConfiguration | ip a |
| Process list | tasklist | Get-Process | ps -ef |
| Kill | taskkill /F /PID | Stop-Process -Id | kill -9 |
| Run as admin | runas | (elevated) | sudo |
| Restart | shutdown /r /t 0 | Restart-Computer | sudo reboot |

---

## 🐧 Linux Permissions Cheat

| Octal | Mode |
|-------|------|
| 7 | rwx |
| 6 | rw- |
| 5 | r-x |
| 4 | r-- |
| 0 | --- |

```
chmod 755 script.sh    # owner: rwx, group/other: r-x
chmod 644 doc.txt      # owner: rw-, group/other: r--
chown user:grp file
```

---

## 🍎 macOS Cheat

- File system: **APFS** (since 10.13)
- Encryption: **FileVault**
- Recovery: **Cmd+R** at boot (Intel) / hold power (Apple Silicon)
- Shell: **zsh** (since Catalina)
- Package: **brew** (Homebrew CLI), `.pkg`, `.dmg`, App Store
- Time Machine: built-in backup

---

## ⚙️ Windows Tool Hotkey/Path

| Tool | Open |
|------|------|
| Task Manager | Ctrl+Shift+Esc |
| Services | services.msc |
| Event Viewer | eventvwr.msc |
| Disk Management | diskmgmt.msc |
| Device Manager | devmgmt.msc |
| Registry Editor | regedit |
| System Info | msinfo32 |
| DirectX Diag | dxdiag |
| Resource Monitor | resmon |
| System Configuration | msconfig |

---

## 🛡️ Account Types

- **Standard**, run apps; UAC blocks system change
- **Administrator**, install + change; UAC prompts
- **Microsoft account**, cloud-linked
- **Local account**, on-device
- **Domain account**, AD-joined
- **UAC** = User Account Control (leave ON)

---

## 🏆 Exam Power Phrases

✅ Often **right**:

- "Run as administrator"
- "Use BitLocker / FileVault / LUKS"
- "Boot to WinRE for repair"
- "Run sfc /scannow then dism RestoreHealth"
- "Check Event Viewer for clues"
- "Use exFAT for cross-platform USB > 4 GB"

❌ Often **wrong**:

- "Disable UAC"
- "Defragment the SSD"
- "Reformat as first step"
- "Use FAT32 for a 10 GB file"
- "Run Linux commands in Windows cmd"

---

## 🗓️ Memorize Cold

- FAT32 max file = 4 GB
- Win 11 = TPM 2.0 + UEFI + Secure Boot
- bootrec / sfc / dism cascade
- chmod 7=rwx, 5=r-x, 4=r--
- Mac default shell = zsh
- macOS file system = APFS
- OS = **31% of 220-1102 (biggest domain across both exams)**

---

## ✏️ Quick Self-Check

1. Win 11 hardware trifecta? ___
2. FAT32 file size limit? ___
3. PowerShell vs Linux `ls`? ___
4. macOS file system? ___
5. Linux command to install on Ubuntu? ___

---

➡️ [Module 8: Security Fundamentals](../Module-08-Security/Reading.md)
