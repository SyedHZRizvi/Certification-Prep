# ✏️ Module 2 Quiz: Server Administration (Windows & Linux)

> **Instructions:** Answer all 26 questions WITHOUT looking at the reading.
> Aim for 21/26 minimum.
>
> **Bloom distribution:** Remember 6 · Understand 7 · Apply 7 · Analyze/Evaluate 5 · Create 1.

---

## Questions

### Q1. The default Linux command to start AND enable a service at boot in a single command is: *(Remember)*
A. `systemctl enable --now sshd`
B. `service sshd start && service sshd enable`
C. `chkconfig sshd on`
D. `init 5 sshd`

---

### Q2. Active Directory Domain Services depends MOST critically on which two infrastructure services? *(Apply)*
A. SNMP and TFTP
B. DNS and NTP
C. SMTP and POP3
D. RDP and Telnet

---

### Q3. RDP listens on which default TCP port? *(Remember)*
A. 22
B. 23
C. 3389
D. 5985

---

### Q4. WinRM HTTPS listens on which default TCP port? *(Remember)*
A. 5985
B. 5986
C. 443
D. 80

---

### Q5. Network Level Authentication (NLA) for RDP: *(Understand)*
A. Encrypts the keyboard only
B. Authenticates the user BEFORE a session is established
C. Replaces RDP with VNC
D. Is unsupported in Server 2019+

---

### Q6. To install AD DS via PowerShell, you would run: *(Apply)*
A. `Install-Service ADDS`
B. `Install-WindowsFeature -Name AD-Domain-Services -IncludeManagementTools`
C. `ad-install -force`
D. `Get-ADDS`

---

### Q7. The systemd command to view recent logs for the `nginx` service is: *(Apply)*
A. `journalctl -u nginx`
B. `cat /var/log/nginx.log`
C. `tail -f /var/messages`
D. `dmesg | grep nginx`

---

### Q8. A Linux file shows permissions `-rwxr-x---`. The octal equivalent is: *(Apply)*
A. 644
B. 750
C. 755
D. 777

---

### Q9. Kerberos authentication requires client and KDC clocks to be within: *(Understand)*
A. 30 seconds
B. 5 minutes by default
C. 30 minutes
D. 24 hours

---

### Q10. The Linux command to add user `alice` to the `wheel` group without removing her from existing groups is: *(Apply)*
A. `usermod -G wheel alice`
B. `usermod -aG wheel alice`
C. `groupadd alice wheel`
D. `gpasswd wheel alice`

---

### Q11. SSH listens on which default TCP port? *(Remember)*
A. 22
B. 23
C. 25
D. 53

---

### Q12. Telnet is unsafe for server administration because: *(Understand)*
A. It uses too much bandwidth
B. Credentials and session data are transmitted in cleartext
C. It is incompatible with IPv6
D. It requires a license

---

### Q13. Windows Server Core is BEST suited for: *(Analyze)*
A. Desktop kiosks
B. Production server roles where smaller attack surface and fewer patches are desired
C. Gaming workloads
D. Workstations for power users

---

### Q14. DHCP option 6 is used for: *(Remember)*
A. Subnet mask
B. Default gateway
C. DNS servers
D. Lease time

---

### Q15. A user reports they cannot log in to a domain-joined workstation; everything else works (ping, web). Other users on the same DC are fine. What should you check FIRST? *(Apply)*
A. AD password expiration / lockout for that specific user
B. Reboot the DC
C. Reinstall Windows
D. Disable DNS

---

### Q16. Which Windows Server role would you install to host a SAML identity-federation endpoint for cloud apps? *(Apply)*
A. AD DS
B. AD CS
C. AD FS
D. WSUS

---

### Q17. The Linux SUID bit on `/usr/bin/passwd` causes it to: *(Understand)*
A. Run as the user invoking it
B. Run as the file's owner (root) so it can update `/etc/shadow`
C. Run only at boot
D. Be deleted after one use

---

### Q18. Your team needs to remote-execute the same PowerShell command on 200 Windows servers in parallel. The correct cmdlet is: *(Apply)*
A. `Get-WmiObject`
B. `Invoke-Command -ComputerName ... -ScriptBlock { ... }`
C. `Start-Process`
D. `Add-Computer`

---

### Q19. WSUS is used to: *(Understand)*
A. Replace AD DS
B. Centrally manage Windows update approvals and deployments
C. Host websites
D. Implement DHCP

---

### Q20. An organization's policy requires that road-warrior laptops can RDP into desktops at HQ. The MOST secure exposure is: *(Analyze)*
A. NAT port 3389 directly to internal desktops on the firewall
B. Use an RD Gateway behind TLS on 443 with MFA, or a VPN
C. Disable NLA and allow blank passwords
D. Telnet on 23

---

### Q21. systemd unit files placed by an administrator typically live in: *(Remember)*
A. `/var/run/systemd/`
B. `/etc/systemd/system/`
C. `/proc/systemd/`
D. `/tmp/systemd/`

---

### Q22. After patching, a Linux daemon's binary has a new file but `systemctl status nginx` still shows the old version. The likely next step is: *(Apply)*
A. Reboot the entire server
B. `systemctl restart nginx` (or `reload` if supported)
C. Reinstall the OS
D. `chmod 777 nginx`

---

### Q23. Two DCs are running on the same Hyper-V host. This is BEST described as: *(Analyze)*
A. Best practice (DR-friendly)
B. Anti-pattern, host failure takes the entire directory down; use anti-affinity to spread DCs across hosts
C. Required for FSMO role placement
D. Required by AD DS

---

### Q24. DHCP option 66 + option 67 together support: *(Understand)*
A. IPv6 prefix delegation
B. PXE / network boot, TFTP server + boot file
C. DNSSEC signing
D. Time synchronization

---

### Q25. The Debian/Ubuntu command equivalent to RHEL's `dnf update` is: *(Understand)*
A. `yum update`
B. `apt update && apt upgrade`
C. `zypper update`
D. `pacman -Syu`

---

### Q26. *Design exercise.* You are designing a Windows admin model for a 500-user enterprise where domain-admin credential reuse on workstations has been a breach pattern. Which combination of measures BEST addresses this? *(Create)*

> *Create-level note:* you are choosing an architecture, not naming a single tool.

A. Give every workstation a Domain Admin account "for support purposes"
B. Apply a tiered administration model (Tier 0 / 1 / 2), separate admin accounts per tier, no Tier-0 logon on Tier-1/Tier-2 hosts, and JIT/PAM for elevation
C. Remove all admin accounts to remove the risk
D. Share one Domain Admin password rotated quarterly

---

## 🎯 Answers + Explanations

### Q1: **A. `systemctl enable --now sshd`**
The `--now` flag enables at boot AND starts the unit immediately, in one command.

### Q2: **B. DNS and NTP**
AD relies on SRV/PTR DNS records and Kerberos's 5-minute time-skew tolerance. Both are top breakage causes when they fail.

### Q3: **C. 3389**
RDP = TCP 3389 (and UDP 3389 for newer low-latency modes).

### Q4: **B. 5986**
WinRM HTTPS = 5986. HTTP listener = 5985 (prefer HTTPS in production).

### Q5: **B. Authenticates the user BEFORE a session is established**
NLA challenges credentials before consuming server resources or exposing the full RDP stack, significantly reducing pre-auth attack surface.

### Q6: **B. `Install-WindowsFeature -Name AD-Domain-Services -IncludeManagementTools`**
Standard cmdlet for adding Windows Server roles/features. Followed by `Install-ADDSForest` for first DC.

### Q7: **A. `journalctl -u nginx`**
journalctl is systemd's log query. `-u <unit>` filters to one service.

### Q8: **B. 750**
Owner rwx (7=4+2+1) + group r-x (5=4+1) + others --- (0) → 750.

### Q9: **B. 5 minutes by default**
Configurable, but 5 minutes is the default. Above that, AD authentication fails with cryptic errors.

### Q10: **B. `usermod -aG wheel alice`**
The `-a` (append) is critical, without it `-G` *replaces* group membership, removing all other supplementary groups.

### Q11: **A. 22**
SSH = TCP 22.

### Q12: **B. Credentials and session data are transmitted in cleartext**
Telnet has no encryption; any tap point reads passwords. Always use SSH (Linux) or WinRM/RDP+NLA (Windows).

### Q13: **B. Production server roles where smaller attack surface and fewer patches are desired**
Server Core has no GUI shell, fewer components, fewer monthly patches, less RAM/disk. Microsoft and CIS recommend it for production.

### Q14: **C. DNS servers**
Option 6 = DNS servers list. Option 1 = subnet mask. Option 3 = default gateway. Option 51 = lease time.

### Q15: **A. AD password expiration / lockout for that specific user**
Other users work, so DC and DNS are fine. Most likely cause is single-user state, expired password, lockout, disabled account.

### Q16: **C. AD FS**
Active Directory Federation Services is the SAML/WS-Fed identity-federation role.

### Q17: **B. Run as the file's owner (root) so it can update `/etc/shadow`**
SUID = run as file owner. Required for `passwd` because users need to update root-owned `/etc/shadow`.

### Q18: **B. `Invoke-Command -ComputerName ... -ScriptBlock { ... }`**
Invoke-Command is the canonical fan-out PowerShell remoting cmdlet.

### Q19: **B. Centrally manage Windows update approvals and deployments**
WSUS = Windows Server Update Services: download once, approve, deploy to client groups.

### Q20: **B. Use an RD Gateway behind TLS on 443 with MFA, or a VPN**
RD Gateway tunnels RDP over HTTPS to internal hosts; combined with MFA and conditional access, this is the modern secure pattern. Direct 3389 exposure is the BlueKeep / brute-force breach pattern.

### Q21: **B. `/etc/systemd/system/`**
Admin-defined unit files live here; they override `/lib/systemd/system/` or `/usr/lib/systemd/system/` defaults.

### Q22: **B. `systemctl restart nginx` (or `reload` if supported)**
A package upgrade replaces files on disk; you must restart the daemon to pick them up. Rebooting the whole server is overkill.

### Q23: **B. Anti-pattern, host failure takes the entire directory down; use anti-affinity to spread DCs across hosts**
DCs should be on different hosts (and ideally different sites/clusters) so a hypervisor failure doesn't wipe the directory. Anti-affinity rules in vSphere/Hyper-V enforce this.

### Q24: **B. PXE / network boot, TFTP server + boot file**
Option 66 = TFTP server name/IP. Option 67 = boot file name. Together they bootstrap PXE clients.

### Q25: **B. `apt update && apt upgrade`**
`apt update` refreshes package lists; `apt upgrade` installs updates. RHEL's `dnf update` does both in one step.

### Q26: **B. Apply a tiered administration model (Tier 0 / 1 / 2), separate admin accounts per tier, no Tier-0 logon on Tier-1/Tier-2 hosts, and JIT/PAM for elevation**
Tiered administration prevents domain-admin credential exposure on lower-tier hosts (the Mimikatz / NotPetya pattern). JIT/PAM ensures elevated rights are time-boxed and approved. Options A and D are precisely the anti-patterns this model exists to prevent.

---

## 📊 Score Yourself

- 25–26/26 → 🏆 Module 2 mastered.
- 21–24/26 → ✅ Solid.
- 17–20/26 → ⚠️ Re-read the AD + permissions sections.
- <17/26 → 🔁 Restart Reading.md.

---

## 🃏 Add To Your Flashcards

- Ports: SSH 22, RDP 3389, WinRM 5985/5986, DNS 53, DHCP 67/68, NTP 123
- `systemctl` verbs: start/stop/restart/reload/enable/disable/status
- DHCP options: 1, 3, 6, 15, 51, 66, 67
- AD: forest/domain/OU/GPO/GC/FSMO
- chmod octals: 644, 750, 755, 777
- NLA / RD Gateway / WinRM HTTPS, secure remote admin combos

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 3, Storage: RAID, SAN, NAS](../Module-03-Storage/Reading.md)
