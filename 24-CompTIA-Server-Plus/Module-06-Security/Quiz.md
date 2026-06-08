# ✏️ Module 6 Quiz: Server Security & Hardening

> **Instructions:** Answer all 26 questions WITHOUT looking at the reading.
> Aim for 21/26 minimum.
>
> **Bloom distribution:** Remember 6 · Understand 7 · Apply 7 · Analyze/Evaluate 5 · Create 1.

---

## Questions

### Q1. An "access control vestibule" / mantrap is BEST described as: *(Remember)*
A. A single security door
B. Two-door entry where the second door opens only after the first closes, defeats tailgating
C. A keypad
D. A camera tower

---

### Q2. Secure Boot's primary purpose is: *(Understand)*
A. Speed up boot time
B. Verify that the bootloader is signed by a trusted key chained to the firmware's trust store
C. Encrypt the disk
D. Replace BIOS

---

### Q3. Without a **UEFI password**, the value of Secure Boot is: *(Analyze)*
A. Higher than ever
B. Largely negated, an attacker with physical access can disable Secure Boot in seconds
C. Doubled
D. Equal to having it

---

### Q4. TPM 2.0 is BEST described as: *(Remember)*
A. A network protocol
B. A tamper-resistant chip (or firmware) storing keys and boot-stage measurement hashes
C. A virtualization extension
D. A type of NIC

---

### Q5. A **service account** that runs SQL Server should be: *(Apply)*
A. Domain Admin so it can do anything it needs
B. The same account as the web server's account, for simplicity
C. A dedicated, least-privileged account; ideally a gMSA on Windows
D. The default `sa` account with a blank password

---

### Q6. The principle of least privilege says: *(Understand)*
A. Give every user maximum rights to avoid bottlenecks
B. Give each account only the rights it strictly needs to do its job
C. Share admin accounts to reduce password count
D. Disable all logging

---

### Q7. RBAC stands for: *(Remember)*
A. Role-Based Access Control
B. Resource-Based Access Control
C. Random-Based Access Control
D. Reverse-Based Access Control

---

### Q8. Just-in-Time (JIT) elevation, in a PAM tool, provides: *(Apply)*
A. Standing 24×7 admin rights
B. Time-boxed, approved, audited elevation with MFA on demand
C. Sharing of one admin account
D. Disabled MFA for convenience

---

### Q9. CIS Benchmarks are: *(Remember)*
A. Performance baselines for storage
B. Hardening guides for OSes, browsers, cloud services from the Center for Internet Security
C. Backup-rotation policies
D. PCI scanning tools

---

### Q10. The **highest-priority** patch list to act on every week is: *(Apply)*
A. Microsoft Office patches
B. CISA Known Exploited Vulnerabilities (KEV) catalog, actively exploited in the wild
C. Browser betas
D. Driver updates only

---

### Q11. HIPS differs from HIDS in that HIPS: *(Understand)*
A. Only logs to a SIEM
B. Can BLOCK suspicious activity, not just alert
C. Runs in the cloud only
D. Is older

---

### Q12. EDR adds what value over traditional antivirus? *(Analyze)*
A. Lower price
B. Behavioral analytics, threat-intel feeds, IR tooling, cloud-managed telemetry, well beyond signature scanning
C. No alerts
D. Slower performance

---

### Q13. Disabling SMB 1.0 mitigates: *(Apply)*
A. CPU overcommit
B. The EternalBlue exploit family used by WannaCry / NotPetya
C. DNS poisoning
D. Print spooler bugs

---

### Q14. Group Managed Service Accounts (gMSAs) on Windows are valuable because: *(Understand)*
A. They are easier to remember
B. Their passwords are automatically rotated by AD; admins never need to know the password
C. They have no permissions
D. They work across forests automatically

---

### Q15. A server in a colocation rack has Self-Encrypting Drives with BitLocker bound to the TPM. The drives are physically stolen. Data is: *(Apply)*
A. Trivially readable in another machine
B. Unreadable without the original TPM-bound key, encryption protects data at rest
C. Recovered by the SAS controller automatically
D. Sent to the cloud

---

### Q16. The Center for Internet Security's "Level 1" benchmark profile is BEST described as: *(Understand)*
A. The strictest setting; will break most production apps
B. Basic, broadly-applicable hardening most enterprises can deploy without breaking things
C. Performance tuning only
D. A red team's playbook

---

### Q17. A vulnerability scan finds 14 critical CVEs; a patch is available for all. Patch management policy says critical < 7 days. The next step is: *(Apply)*
A. Wait until the next quarterly window
B. Test in staging, schedule a maintenance window with a backout plan, deploy within the SLA
C. Ignore, there's been no breach yet
D. Disable the vuln scanner

---

### Q18. Default iDRAC / iLO credentials should be: *(Apply)*
A. Left as default for ease of administration
B. Posted on the rack so anyone can manage
C. Changed during commissioning; OOB mgmt network segmented; MFA enabled if supported
D. Shared via email

---

### Q19. A water-pipe sprinkler over an active server room is: *(Analyze)*
A. The recommended fire-suppression mechanism
B. An anti-pattern, use clean-agent (FM-200/Novec) or pre-action dry-pipe; wet-pipe overhead risks accidental discharge
C. Required by NFPA
D. Permanent

---

### Q20. The Linux SELinux mode that ENFORCES policy (denying unauthorized actions) is: *(Remember)*
A. Disabled
B. Permissive
C. Enforcing
D. Optional

---

### Q21. **LAPS** on Windows is used to: *(Understand)*
A. Recover lost passwords from cache
B. Manage unique, randomized local admin passwords per machine, stored securely in AD
C. Encrypt the SAM database
D. Set lock screens

---

### Q22. A vendor needs network access to a single billing portal. The vendor's account ends up able to reach the production database server. The architectural failure is: *(Analyze)*
A. Excessive logging
B. Missing **least-privilege scope + network segmentation** between vendor portal and production
C. Missing firewall license
D. Missing CCTV

---

### Q23. Credential Guard on Windows protects against: *(Understand)*
A. CPU overheating
B. Mimikatz / Pass-the-Hash by isolating LSA secrets in a virtualization-based container
C. Slow disks
D. RDP brute force

---

### Q24. The most-recent step in a hardening lifecycle is: *(Apply)*
A. Ship logs to SIEM and continuously monitor; verify with periodic CIS-CAT scans
B. Install the OS
C. Buy the server
D. Decommission

---

### Q25. SSH server best practice on Linux includes: *(Apply)*
A. `PermitRootLogin yes` and password authentication enabled
B. `PermitRootLogin no`, `PasswordAuthentication no`, key-only auth, optional MFA
C. Enable Telnet as fallback
D. Disable host firewall

---

### Q26. *Design exercise.* You're responsible for a single physical server in a small business with the following requirements: (a) prevent theft of data even if drives are removed, (b) prevent unauthorized boot from a USB stick, (c) detect malware behavior in real time and block it, (d) eliminate standing admin access, (e) keep patches current monthly. Pick the combination: *(Create)*

A. No encryption + boot from USB allowed + AV only + shared admin account + no patching
B. Self-Encrypting Drives + BitLocker (TPM) + UEFI password + Secure Boot + EDR + PAM with JIT + WSUS/MECM
C. RAID 5 only, with default settings
D. Telnet on for support, no firewall

---

## 🎯 Answers + Explanations

### Q1: **B. Two-door entry where the second door opens only after the first closes, defeats tailgating**
Mantrap / access control vestibule design.

### Q2: **B. Verify that the bootloader is signed by a trusted key chained to the firmware's trust store**
Secure Boot's job is to block bootkits and unsigned bootloaders.

### Q3: **B. Largely negated, an attacker with physical access can disable Secure Boot in seconds**
Without a UEFI password, anyone with console access can toggle Secure Boot off, change boot order, etc. Both are needed.

### Q4: **B. A tamper-resistant chip (or firmware) storing keys and boot-stage measurement hashes**
TPM 2.0 is the trust anchor for BitLocker, Windows Hello, measured boot attestation.

### Q5: **C. A dedicated, least-privileged account; ideally a gMSA on Windows**
Each service gets its own account with minimum rights. Cross-service sharing or Domain Admin = anti-pattern.

### Q6: **B. Give each account only the rights it strictly needs to do its job**
Foundational principle (Saltzer & Schroeder 1975).

### Q7: **A. Role-Based Access Control**
Roles grant permissions; users are assigned roles. Scales better than per-user ACLs.

### Q8: **B. Time-boxed, approved, audited elevation with MFA on demand**
JIT eliminates standing admin and forces deliberate elevation.

### Q9: **B. Hardening guides for OSes, browsers, cloud services from the Center for Internet Security**
Industry-standard secure configurations.

### Q10: **B. CISA Known Exploited Vulnerabilities (KEV) catalog, actively exploited in the wild**
KEV = the "patch this NOW" list. Federal agencies are mandated to remediate KEV per BOD 22-01 within tight timeframes.

### Q11: **B. Can BLOCK suspicious activity, not just alert**
HIDS detects only; HIPS detects AND blocks. Same engine class, different action level.

### Q12: **B. Behavioral analytics, threat-intel feeds, IR tooling, cloud-managed telemetry, well beyond signature scanning**
Modern EDR (CrowdStrike, Defender for Endpoint, SentinelOne) sees patterns AV misses.

### Q13: **B. The EternalBlue exploit family used by WannaCry / NotPetya**
SMB 1.0 is the protocol EternalBlue targets. Disable SMB1 in Windows Features.

### Q14: **B. Their passwords are automatically rotated by AD; admins never need to know the password**
gMSAs solve the "service account password rotation" pain point with AD-managed keys.

### Q15: **B. Unreadable without the original TPM-bound key, encryption protects data at rest**
SED + TPM-bound key = drives removed are useless. Encryption is the answer to physical theft.

### Q16: **B. Basic, broadly-applicable hardening most enterprises can deploy without breaking things**
Level 1 = mainstream. Level 2 = stricter, may break some functionality, typical of high-security envs.

### Q17: **B. Test in staging, schedule a maintenance window with a backout plan, deploy within the SLA**
Standard patch-management cadence; under no circumstances ignore critical CVEs.

### Q18: **C. Changed during commissioning; OOB mgmt network segmented; MFA enabled if supported**
Default vendor creds are publicly documented and are the #1 attack vector for BMC compromise.

### Q19: **B. An anti-pattern, use clean-agent (FM-200/Novec) or pre-action dry-pipe; wet-pipe overhead risks accidental discharge**
Server rooms should use clean-agent suppression to avoid water on energized equipment.

### Q20: **C. Enforcing**
SELinux modes: Enforcing (deny on violation), Permissive (log only), Disabled. Production = Enforcing.

### Q21: **B. Manage unique, randomized local admin passwords per machine, stored securely in AD**
LAPS prevents shared local admin password reuse, a Pass-the-Hash pivot vector.

### Q22: **B. Missing least-privilege scope + network segmentation between vendor portal and production**
The Target HVAC pattern. Segmentation + role scoping would have stopped the pivot.

### Q23: **B. Mimikatz / Pass-the-Hash by isolating LSA secrets in a virtualization-based container**
Credential Guard uses VBS (Virtualization-Based Security) to isolate LSA, so even SYSTEM cannot read NTLM hashes.

### Q24: **A. Ship logs to SIEM and continuously monitor; verify with periodic CIS-CAT scans**
Hardening is not one-time. Detection + audit close the loop.

### Q25: **B. `PermitRootLogin no`, `PasswordAuthentication no`, key-only auth, optional MFA**
Standard SSH hardening for Linux production servers.

### Q26: **B. Self-Encrypting Drives + BitLocker (TPM) + UEFI password + Secure Boot + EDR + PAM with JIT + WSUS/MECM**
Each control maps to a requirement: SED+BitLocker = data theft protection; UEFI pw + Secure Boot = boot integrity; EDR = real-time block; PAM + JIT = no standing admin; WSUS/MECM = monthly patching. A, C, D fail every requirement.

---

## 📊 Score Yourself

- 25–26/26 → 🏆 Module 6 mastered.
- 21–24/26 → ✅ Solid.
- 17–20/26 → ⚠️ Re-read firmware + RBAC sections.
- <17/26 → 🔁 Restart Reading.md.

---

## 🃏 Add To Your Flashcards

- 4 physical layers (perimeter / building / server room / component)
- UEFI + Secure Boot + Measured Boot + TPM + SED + BitLocker
- RBAC vs DAC vs MAC vs ABAC
- gMSA / LAPS / Credential Guard / Tiered Admin
- PAM + JIT
- HIDS / HIPS / EDR / FIM / AV
- CIS Benchmarks (L1 vs L2)
- CISA KEV catalog
- Default OOB credentials risk

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 7, Networking for Servers](../Module-07-Networking/Reading.md)
