# 🧪 Practice Exam 2 — CompTIA A+ Core 2 (220-1102 Style)

> **Conditions:** Set a 60-minute timer. 60 questions. Treat it like the real thing.
> **Pass mark:** 51/60 (~85%) — Core 2 passes at ~78% so aim higher in practice.
> Take this AFTER finishing Modules 7–12. Covers OS, Security, Software Troubleshooting, Operational Procedures, Mobile Troubleshooting, Documentation/DR.

---

## 📝 Questions

### 1. The maximum single-file size on a FAT32 volume is:
A. 2 GB
B. 4 GB
C. 32 GB
D. Unlimited

### 2. Windows 11 requires which set of hardware features?
A. Legacy BIOS only
B. UEFI + Secure Boot + TPM 2.0 + 8th-gen Intel or equivalent
C. MBR disk
D. Just 4 GB RAM and a 32-bit CPU

### 3. The Windows utility that converts MBR to GPT without losing data:
A. diskpart
B. mbr2gpt
C. format
D. bootrec

### 4. The 7-step malware removal process begins with:
A. Quarantine the system
B. Investigate and verify malware symptoms
C. Disable System Restore
D. Educate the user

### 5. A user receives a text claiming to be their bank asking them to click a link. This is:
A. Phishing
B. Smishing
C. Vishing
D. Whaling

### 6. WPA3's improvement over WPA2 is primarily:
A. Wider channels
B. SAE handshake (resists offline brute-force on captured handshakes)
C. Removes AES
D. Disables 5 GHz

### 7. To protect data on a stolen Windows laptop, the appropriate control is:
A. BitLocker (full-disk encryption) tied to TPM 2.0
B. EFS only
C. NTFS without encryption
D. Strong password only

### 8. Linux equivalent of BitLocker for full-disk encryption:
A. EFS
B. LUKS
C. APFS
D. BitDefender

### 9. A user reports their files have a `.locked` extension and a ransom note appeared. The IMMEDIATE first action:
A. Pay the ransom
B. Disconnect from network (isolate); do not reboot; notify SOC/IR
C. Reboot the system
D. Wait

### 10. The 3 categories of authentication factors are:
A. Strong, medium, weak
B. Know, have, are
C. User, admin, guest
D. AES, RSA, ECC

### 11. Password + TOTP code from an authenticator app is:
A. NOT MFA (both same factor)
B. TRUE multi-factor authentication
C. Single sign-on
D. Phishing

### 12. The Windows command that verifies and repairs system files:
A. chkdsk
B. sfc /scannow
C. dism
D. taskmgr

### 13. A user's PC BSODs with `MEMORY_MANAGEMENT`. The MOST appropriate first test:
A. Replace the motherboard
B. Run MemTest86 (at least one full pass, ideally 24 hr)
C. Reformat
D. Disable UAC

### 14. "BOOTMGR is missing" on Windows is BEST repaired by:
A. Reformat C:
B. Boot from install media → Repair → Command Prompt → bootrec
C. Replace CPU
D. Disable Secure Boot

### 15. After `sfc /scannow` reports unfixable errors, the next escalation is:
A. Reformat
B. `dism /Online /Cleanup-Image /RestoreHealth`
C. Replace SSD
D. Roll back BIOS

### 16. macOS's modern file system (since 10.13):
A. HFS+
B. APFS
C. FAT32
D. NTFS

### 17. To install a package on Ubuntu, you use:
A. yum install pkg
B. apt install pkg
C. pacman -S pkg
D. brew install pkg

### 18. The default macOS shell since Catalina:
A. bash
B. zsh
C. csh
D. fish

### 19. `chmod 755` gives the OWNER:
A. Read + execute only
B. Read + write + execute (full)
C. Execute only
D. None

### 20. A "Selective Wipe" via MDM removes:
A. Everything on the device
B. Only the corporate container, leaving personal data
C. The OS
D. Nothing

### 21. A user's BitLocker recovery key would be needed when:
A. Forget their daily password
B. Reset BIOS/UEFI (TPM mismatch) OR fail authentication too many times
C. Power off
D. Display broken

### 22. The step in malware removal where System Restore is disabled exists BECAUSE:
A. Restore is slow
B. Restore points can contain infected files; rollback can re-infect
C. Microsoft removed it
D. Uses too much RAM

### 23. Which control prevents tailgating into a secure data-center area?
A. Camera
B. Mantrap / access control vestibule
C. Privacy filter
D. UAC

### 24. The principle of LEAST PRIVILEGE means:
A. Give every user admin for convenience
B. Grant the minimum permissions required for the role/task
C. Disable all access
D. Share admin accounts

### 25. The body that typically approves a high-risk production change:
A. SOC analyst
B. Change Advisory Board (CAB)
C. CFO
D. Marketing

### 26. A "Standard change" is BEST described as:
A. Production-down emergency
B. Pre-approved low-risk change with template (e.g., adding user to group)
C. Banned change
D. Same as emergency

### 27. The 3-2-1 backup rule states:
A. 3 copies, 2 media, 1 off-site
B. 3 backups, 2 weeks, 1 server
C. 3 sites, 2 admins, 1 vendor
D. 3 days RTO

### 28. RPO stands for:
A. Recovery Process Order
B. Recovery Point Objective
C. Restoration Procedure Output
D. Resilient Procedural Operation

### 29. A hot site differs from a warm site in:
A. Hot has full real-time replication; immediate failover (minutes)
B. Hot is unstaffed
C. Warm has no equipment
D. They are identical

### 30. RAID is NOT a substitute for backup because:
A. RAID is too slow
B. RAID protects against hardware failure; backup protects against deletion, ransomware, mistake
C. RAID is illegal
D. RAID is expensive

### 31. The MOST appropriate first action when ransomware has destroyed local Veeam backups but cloud immutable storage is intact:
A. Pay ransom
B. Restore production from cloud immutable backup; rebuild local environment clean
C. Reformat the cloud
D. Disable cloud backups

### 32. An incremental backup contains:
A. Everything
B. Changes since last backup of any type (small, fast)
C. Changes since last full only
D. Just the OS

### 33. A differential backup contains:
A. Changes since last full backup (grows daily)
B. Changes since last backup of any type
C. Just user files
D. Nothing

### 34. A user's PC takes 5 minutes to boot. The MOST appropriate first tool:
A. Task Manager → Startup tab (or msconfig) to identify boot-time programs
B. Replace PSU
C. Reformat
D. Reinstall Office

### 35. A user reports their browser keeps opening pop-ups even when no website is open. The MOST likely cause:
A. Browser is broken
B. Malicious browser notifications enabled OR PUP / adware extension installed
C. Too much RAM
D. Monitor failing

### 36. A USB stick "auto-runs" software when inserted. The MOST appropriate response:
A. Allow it
B. Disable AutoRun via Group Policy; scan USB with AV
C. Reformat PC
D. Replace USB controller

### 37. Anti-static (ESD) protection during hardware handling — the FIRST equipment item to use:
A. Hammer
B. ESD wrist strap (grounded)
C. Magnetic screwdriver
D. Plastic gloves

### 38. A UPS type that runs the inverter continuously (zero switch gap):
A. Standby
B. Line-interactive
C. Online (double conversion)
D. Surge-only

### 39. PII includes (per most US state laws + GDPR):
A. Just an email address
B. Combinations like name + SSN, name + DOB, name + address
C. Just username
D. IP addresses only

### 40. A swollen lithium-ion battery in a phone should be:
A. Punctured carefully
B. Stopped using immediately and replaced (fire risk)
C. Recharged hot
D. Microwaved

### 41. iPhone shows "No Service" but Wi-Fi works. First 3 checks (in order):
A. Replace SIM, replace battery, replace phone
B. Airplane mode off, SIM seated, account active with carrier
C. Reformat
D. Disable Wi-Fi

### 42. A user reports company iPhone stopped receiving email overnight; MDM dashboard shows "out of compliance." Likely cause:
A. The phone is broken
B. OS update raised the minimum required version; phone needs to update
C. The carrier blocked email
D. iCloud is full

### 43. Jailbreak (iOS) / root (Android) detected by MDM typically triggers:
A. Free upgrade
B. Auto-quarantine — block corporate resources, notify user/admin
C. Bigger data plan
D. Nothing

### 44. "Juice jacking" refers to:
A. A drink
B. Malicious USB charging stations that deliver malware or harvest data
C. Battery type
D. Wi-Fi attack

### 45. The SIM swap attack works by:
A. Physical theft of SIM
B. Social-engineering the carrier into porting victim's number to attacker-controlled SIM, bypassing SMS MFA
C. SIM hardware failure
D. iOS bug

### 46. A user's Microsoft Authenticator shows a sign-in attempt from a foreign country — the user is at home. CORRECT response:
A. Approve to dismiss
B. **Deny**; reset password; notify IT
C. Ignore
D. Turn off authenticator

### 47. RDP (Windows Remote Desktop) uses which port?
A. 22
B. 3389
C. 5900
D. 23

### 48. SMB uses which port?
A. 137
B. 139
C. 445
D. 80

### 49. The Windows tool that shows real-time per-process CPU/memory/disk/network:
A. Disk Management
B. Task Manager
C. Device Manager
D. Event Viewer

### 50. The MOST appropriate command sequence to recover Windows boot store after corruption:
A. format C:
B. bootrec /fixmbr /fixboot /scanos /rebuildbcd
C. chkdsk C: /r
D. Replace SSD

### 51. The Capital One breach (2019) highlighted that an open security ticket can:
A. Self-resolve
B. Sit in a queue for weeks while exploitable in production — change-management SLAs must include security urgency
C. Be ignored
D. Be marked complete without action

### 52. A help-desk tech sees a folder labeled "HR Personnel Files" during a service call. They didn't open any files. They should:
A. Read it carefully
B. Notify supervisor + privacy team; document factually; do not discuss with user
C. Email it
D. Browse it

### 53. The MAERSK NotPetya recovery in 2017 was possible because:
A. They paid ransom
B. A single domain controller in Lagos happened to be offline; it became the seed for AD recovery
C. They had no backups
D. They moved to Macs

### 54. A tech is asked to install pirated software on a user's PC because "the user asked." The MOST significant risk:
A. None
B. Legal/financial liability + security risk + termination of the tech
C. PC slower
D. Mouse confusion

### 55. Why must you NEVER defragment an SSD?
A. SSDs have no platters; defrag wears flash without speed gain — use TRIM/Optimize
B. Illegal
C. SSDs auto-defrag
D. Slower than HDD

### 56. The MOST common reason a Windows app installer requires "Run as administrator":
A. UAC prevents privileged operations from running by default in standard processes
B. Apps are heavier
C. Drivers don't work otherwise
D. Mouse needs admin

### 57. Linux command to give elevated privilege temporarily:
A. firewall-cmd
B. sudo
C. ipconfig
D. format

### 58 (Scenario PBQ). A user reports their Windows 11 PC BSODs at boot after last night's Windows Update. WinRE access works. Best FIRST option to try:
A. Reset this PC (lose everything)
B. Uninstall Updates → uninstall latest quality update
C. Reformat
D. Replace SSD

### 59 (Scenario PBQ). Match the symptom to the cause:
- (a) Files renamed with `.locked` extension
- (b) Browser redirects to ads
- (c) BSOD MEMORY_MANAGEMENT
- (d) CPU pegged at 100% with no user activity

A. (a) Ransomware, (b) PUP/adware, (c) RAM (MemTest86), (d) Cryptominer
B. (a) Cryptominer, (b) Ransomware, (c) Adware, (d) DNS
C. (a) PUP, (b) RAM, (c) Ransomware, (d) Adware
D. (a) Adware, (b) Cryptominer, (c) PUP, (d) Ransomware

### 60 (Scenario PBQ). A 60-person consulting firm wants laptops to (a) protect data if stolen, (b) allow remote wipe of corporate data only when employee leaves, (c) ensure backups survive ransomware that encrypts production. The MINIMUM viable architecture:
A. Strong passwords + nightly backup to a same-room NAS
B. **BitLocker** + **MDM (Intune) selective wipe** + **3-2-1-1-0 backup** with cloud immutable storage
C. Disable Windows Defender to speed PCs up
D. No DR — buy insurance

---

## 🎯 Answer Key (No Cheating!)

```
1.  B    11. B    21. B    31. B    41. B    51. B
2.  B    12. B    22. B    32. B    42. B    52. B
3.  B    13. B    23. B    33. A    43. B    53. B
4.  B    14. B    24. B    34. A    44. B    54. B
5.  B    15. B    25. B    35. B    45. B    55. A
6.  B    16. B    26. B    36. B    46. B    56. A
7.  A    17. B    27. A    37. B    47. B    57. B
8.  B    18. B    28. B    38. C    48. C    58. B
9.  B    19. B    29. A    39. B    49. B    59. A
10. B    20. B    30. B    40. B    50. B    60. B
```

---

## 📊 Score Yourself

- **55–60 correct** → 🏆 Core 2 ready. Schedule the real exam.
- **51–54** → ✅ Strong. Note gaps; review those modules.
- **42–50** → ⚠️ Solid but more study needed.
- **<42** → 🔁 Review related modules; re-take this exam in 1 week.

### Topic-by-topic breakdown
- OS (Q1-3, 12-19, 47-49, 50, 55-57) → if you missed 4+ → Module 7
- Security (Q4-11, 20-24, 39, 44-46) → Module 8
- Software Troubleshooting (Q13-15, 34-36, 50, 55, 58-59) → Module 9
- Operational Procedures (Q25-26, 37-39, 51-52, 54) → Module 10
- Mobile (Q41-45) → Module 11
- Documentation / DR (Q27-33, 53, 60) → Module 12
- Multi-domain PBQs (Q58-60) → integrated review

---

➡️ When you're ready for the final test: [Final Mock Exam — 90 Q / 90 min](./Final-Mock-Exam.md)
