# ✏️ Module 8 Quiz: Linux Security & Hardening

> **Instructions:** Answer all 26 questions WITHOUT looking at the reading. Aim for 22/26 minimum.
>
> **Bloom distribution (this quiz):** Remember 5 · Understand 6 · Apply 8 · Analyze/Evaluate 6 · Create 1.

---

## Questions

### Q1. Which command shows the current SELinux mode? *(Remember)*
A. `getenforce`
B. `selinux`
C. `sestate`
D. `cat /sys/selinux/mode`

---

### Q2. The runtime command to switch SELinux to permissive mode is: *(Remember)*
A. `setenforce 0`
B. `setenforce off`
C. `selinux --permissive`
D. `echo permissive > /etc/selinux/config`

---

### Q3. A nginx process (labeled `httpd_t`) is denied reading a file labeled `default_t`. The PERSISTENT fix is: *(Analyze)*
A. `chmod 777 file`
B. `setenforce 0`
C. `semanage fcontext -a -t httpd_sys_content_t '/path(/.*)?' && restorecon -Rv /path`
D. `chcon -t httpd_sys_content_t file` (chcon alone is temporary)

---

### Q4. SELinux denials are logged as which audit message type? *(Remember)*
A. SYSCALL
B. AVC
C. USER_LOGIN
D. PATH

---

### Q5. To query recent AVC denials, use: *(Apply)*
A. `journalctl -k`
B. `dmesg | grep AVC`
C. `ausearch -m AVC -ts recent`
D. `grep AVC /var/log/syslog`

---

### Q6. The SELinux `targeted` policy primarily confines: *(Understand)*
A. All processes including init
B. Network-facing daemons (sshd, httpd, named, etc.); leaves user shells largely unconfined
C. Only root processes
D. Only processes with SUID set

---

### Q7. On Ubuntu, which command lists loaded AppArmor profiles and their modes? *(Remember)*
A. `apparmor-status`
B. `aa-status`
C. `appctl list`
D. `apparmor list`

---

### Q8. AppArmor's `complain` mode is roughly equivalent to SELinux's: *(Understand)*
A. Enforcing
B. Permissive (log but don't block)
C. Disabled
D. Strict

---

### Q9. The command to create a LUKS-encrypted partition on `/dev/sdb1` (DESTROYING contents) is: *(Apply)*
A. `cryptsetup luksFormat /dev/sdb1`
B. `cryptsetup new /dev/sdb1`
C. `mkfs.luks /dev/sdb1`
D. `luks-create /dev/sdb1`

---

### Q10. After `cryptsetup luksOpen /dev/sdb1 mydata`, the unlocked volume appears at: *(Remember)*
A. `/dev/sdb1`
B. `/dev/luks/mydata`
C. `/dev/mapper/mydata`
D. `/dev/cryptsetup/mydata`

---

### Q11. After adding a new LUKS volume to `/etc/crypttab`, you MUST: *(Analyze)*
A. Reboot only
B. Rebuild the initramfs (`dracut -f` or `update-initramfs -u`) before reboot
C. Run `systemctl daemon-reload`
D. Restart cryptsetup

---

### Q12. To encrypt a file FOR a specific recipient using GPG: *(Apply)*
A. `gpg --encrypt file.txt`
B. `gpg --encrypt --recipient alice@corp.com file.txt`
C. `gpg --sign file.txt`
D. `gpg --symmetric file.txt`

---

### Q13. To VERIFY a detached signature on a tarball: *(Apply)*
A. `gpg --check file.tar.gz`
B. `gpg --verify file.tar.gz.asc file.tar.gz`
C. `gpg --decrypt file.tar.gz.asc`
D. `sha256sum file.tar.gz`

---

### Q14. Fail2ban primarily reacts to: *(Understand)*
A. Process syscalls
B. Failed authentication entries in log files (matched by regex filters)
C. Kernel uevents
D. SELinux denials

---

### Q15. The default `bantime` in `/etc/fail2ban/jail.local` is configured in seconds, but you can also write: *(Apply)*
A. `bantime = 1h` (and `bantime = 1d` for one day)
B. Only seconds are allowed
C. `bantime = forever`
D. `bantime = -1`

---

### Q16. To watch `/etc/sudoers` for any write or attribute change, tagged "sudo-watch": *(Apply)*
A. `auditctl -w /etc/sudoers -p wa -k sudo-watch`
B. `inotifywait /etc/sudoers`
C. `tail -f /etc/sudoers`
D. `chattr +a /etc/sudoers`

---

### Q17. To make `net.ipv4.ip_forward = 0` persist across reboots: *(Apply)*
A. `echo 0 > /proc/sys/net/ipv4/ip_forward`
B. `sysctl -w net.ipv4.ip_forward=0`
C. Add `net.ipv4.ip_forward = 0` to a file under `/etc/sysctl.d/` and run `sysctl --system`
D. Add to /etc/rc.local

---

### Q18. In SELinux, which command lists ALL booleans and their on/off states? *(Remember)*
A. `getsebool -a`
B. `setsebool -a`
C. `semanage boolean -l`
D. Both A and C work

---

### Q19. To allow sshd to listen on a non-standard port like 2222 with SELinux enforcing, you need: *(Evaluate)*
A. Edit /etc/ssh/sshd_config only
B. `semanage port -a -t ssh_port_t -p tcp 2222` IN ADDITION TO sshd_config + firewalld changes
C. Disable SELinux for the port range
D. Use `setenforce 0` permanently

---

### Q20. Which sshd_config directive forces key-based authentication only (no passwords)? *(Apply)*
A. `KeyOnly yes`
B. `PasswordAuthentication no`
C. `AuthMethod keyonly`
D. `PubkeyOnly yes`

---

### Q21. A user reports `setenforce 0` "fixes" their app. The correct interpretation is: *(Evaluate)*
A. SELinux is broken; disable it
B. SELinux is causing the block; investigate the AVC denials to find the right policy fix
C. The app is buggy
D. Reinstall SELinux

---

### Q22. The chattr `+a` flag does what to a file? *(Remember)*
A. Encrypts it
B. Makes it append-only (suitable for log files)
C. Makes it immutable
D. Sets the SUID bit

---

### Q23. Which security mechanism would BEST protect against a stolen laptop where data must remain unreadable to anyone without the passphrase? *(Evaluate)*
A. SELinux enforcing
B. fail2ban
C. LUKS full-disk encryption
D. SSH key authentication

---

### Q24. A custom audit rule `-w /etc/passwd -p wa -k passwd-watch` would trigger an audit event on: *(Understand)*
A. Read of /etc/passwd
B. Write to /etc/passwd OR change of its attributes (perms, ownership, timestamps)
C. Open of /etc/passwd
D. Execute of /etc/passwd

---

### Q25. The CORRECT fix for "the SELinux boolean exists, but the default is off, and I need it on persistently" is: *(Apply)*
A. `setsebool boolean_name on`
B. `setsebool -P boolean_name on` (the `-P` is critical for persistence)
C. `getsebool boolean_name on`
D. Edit /etc/selinux/booleans

---

### Q26. **(Create-level)** You're handed a new RHEL 9 server. Compose the MINIMUM sequence to (a) confirm SELinux is enforcing, (b) move sshd to port 2222 with SELinux + firewalld permitting it, (c) enable fail2ban with default sshd jail. *(Create)*

> *Create-level note:* you're combining SELinux, firewalld, sshd, and fail2ban.

A.
```
getenforce
sed -i 's/^#*Port .*/Port 2222/' /etc/ssh/sshd_config
semanage port -a -t ssh_port_t -p tcp 2222
firewall-cmd --add-port=2222/tcp --permanent && firewall-cmd --remove-service=ssh --permanent && firewall-cmd --reload
sshd -t && systemctl restart sshd
dnf install -y fail2ban && systemctl enable --now fail2ban
```
B.
```
setenforce 0
sed -i 's/^#*Port .*/Port 2222/' /etc/ssh/sshd_config
systemctl restart sshd
```
C.
```
firewall-cmd --add-port=2222
systemctl restart sshd
```
D.
```
semanage port -d -t ssh_port_t -p tcp 22
echo "Port 2222" >> /etc/ssh/sshd_config
firewall-cmd --remove-port=22
```

---

## 🎯 Answers + Explanations

### Q1: **A. `getenforce`**
Returns one of: `Enforcing`, `Permissive`, `Disabled`. `sestatus` gives more detail.

### Q2: **A. `setenforce 0`**
0 = Permissive, 1 = Enforcing. Runtime only, for persistence, edit /etc/selinux/config.

### Q3: **C. semanage fcontext + restorecon**
The PERSISTENT fix is to add a file-context rule AND apply it. `chcon` (D) works but is wiped by `restorecon` or any relabel, temporary fix. `chmod 777` doesn't bypass MAC. `setenforce 0` is the cowardly answer.

### Q4: **B. AVC**
Access Vector Cache. Look up SELinux denials with `ausearch -m AVC`.

### Q5: **C. `ausearch -m AVC -ts recent`**
`ausearch` is the structured audit-log query tool. AVC denials are in `/var/log/audit/audit.log` (not syslog or journalctl directly on RHEL).

### Q6: **B. Network-facing daemons**
The `targeted` policy (default on RHEL) confines processes that face untrusted input, sshd, httpd, named, postfix, etc. User shells and many other processes run as `unconfined_t`.

### Q7: **B. `aa-status`**
Shows loaded profiles, mode (enforce/complain), and processes confined.

### Q8: **B. Permissive**
Complain logs denials but doesn't enforce. Useful for developing or debugging a profile.

### Q9: **A. `cryptsetup luksFormat /dev/sdb1`**
Wipes the partition's contents, writes LUKS header, prompts for passphrase. After format, use `luksOpen` to unlock.

### Q10: **C. `/dev/mapper/mydata`**
LUKS uses the device mapper. The unlocked block device appears at `/dev/mapper/<name>`.

### Q11: **B. Rebuild the initramfs**
The boot path needs the new crypttab entry baked in. Without initramfs rebuild, the boot prompt won't ask for the new volume's passphrase. `dracut -f` (RHEL) or `update-initramfs -u` (Debian).

### Q12: **B. `gpg --encrypt --recipient alice@corp.com file.txt`**
You need the recipient's PUBLIC key already imported. Produces `file.txt.gpg`.

### Q13: **B. `gpg --verify file.tar.gz.asc file.tar.gz`**
Verifies the detached `.asc` (or `.sig`) signature against the data file. Choice A is not a real gpg command.

### Q14: **B. Failed auth entries matched by regex**
fail2ban uses "filters", regexes that match failed-login patterns in log files. When N matches in time T, the source IP is banned.

### Q15: **A. `bantime = 1h` (and 1d, 1w, etc.)**
Modern fail2ban accepts human time units: 1s, 1m, 1h, 1d, 1w. Also accepts plain seconds.

### Q16: **A. `auditctl -w /etc/sudoers -p wa -k sudo-watch`**
`-w` watch path, `-p wa` permissions Writes + Attribute changes, `-k` key. Persist via `/etc/audit/rules.d/`.

### Q17: **C. Drop a file in /etc/sysctl.d/ and run `sysctl --system`**
Only files under `/etc/sysctl.d/` (or `/etc/sysctl.conf`) persist. `-w` and direct /proc writes are runtime only.

### Q18: **D. Both A and C work**
`getsebool -a` and `semanage boolean -l` both list all booleans (with slightly different output formats). `setsebool` is for setting, not listing.

### Q19: **B. semanage port + sshd_config + firewalld**
THREE layers all need updating: SELinux (port type), sshd_config (Port directive), and firewalld (port open). The exam loves this multi-layer scenario.

### Q20: **B. `PasswordAuthentication no`**
Combined with `PubkeyAuthentication yes`, this disables password prompts entirely.

### Q21: **B. SELinux is causing the block; find the right fix**
`setenforce 0` PROVES SELinux is the cause but is NEVER the production fix. Run `ausearch -m AVC` and address the root cause (label, boolean, port type).

### Q22: **B. Append-only**
`+a` (append) is great for log files, opens for append only. `+i` (immutable) blocks all modifications. Only root can manage these.

### Q23: **C. LUKS full-disk encryption**
Encryption is the only mechanism that defeats physical possession. SELinux, fail2ban, and SSH keys all assume the OS is running normally, useless if the attacker boots their own OS off the disk.

### Q24: **B. Write or attribute change**
`-p wa` = write + attribute. Other perms: `r` (read), `x` (execute).

### Q25: **B. `setsebool -P boolean_name on`**
The `-P` (persistent) flag writes the change to disk. Without `-P`, the change is runtime only and reverts on reboot.

### Q26: **A.**
- Confirm enforcing (then leave it alone)
- sshd_config Port 2222
- semanage port for SELinux
- firewalld: open 2222, close 22 (`ssh` service)
- Test sshd, restart
- Install + enable fail2ban

Choice B disables SELinux (wrong). Choice C skips SELinux + firewalld remove. Choice D removes the SELinux ssh_port_t entry for port 22 (would lock you out if you wanted to fall back) and doesn't use --permanent.

---

## 📊 Score Yourself

- 25–26/26 → 🏆 Module 8 mastered. SELinux is no longer scary.
- 22–24/26 → ✅ Solid. Note the gaps, then move on.
- 18–21/26 → ⚠️ Re-read the SELinux + LUKS sections.
- <18/26 → 🔁 Restart the Reading.md and re-quiz tomorrow.

---

## 🃏 Add To Your Flashcards

- SELinux modes: enforcing / permissive / disabled
- `getenforce`, `setenforce 0/1`, /etc/selinux/config
- `ls -Z`, `ps -eZ`, `id -Z`
- `chcon` (temp) vs `semanage fcontext` + `restorecon` (persistent)
- `ausearch -m AVC`, `sealert`
- `getsebool -a`, `setsebool -P`
- `semanage port -a -t <type> -p tcp <port>`
- AppArmor: `aa-status`, enforce/complain modes
- LUKS: `cryptsetup luksFormat / luksOpen`, /etc/crypttab + initramfs rebuild
- GPG: `--encrypt -r`, `--decrypt`, `--detach-sign`, `--verify`
- fail2ban: jail.local, bantime, findtime, maxretry
- auditd: `-w path -p wa -k key`, `ausearch`, `aureport`
- sysctl: /etc/sysctl.d/ + `sysctl --system`
- SSH hardening core 10

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then start [Practice Exam 1](../Practice-Exams/Practice-Exam-1.md)
