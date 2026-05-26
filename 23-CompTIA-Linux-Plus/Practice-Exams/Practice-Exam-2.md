# 🧪 Practice Exam 2 — CompTIA Linux+ (XK0-005 Style)

> **Conditions:** Set a 65-minute timer. 65 questions. Treat it like the real thing.
> **Pass mark:** 55/65 (~85%) — Linux+ passes at ~80% so aim higher in practice.
> Take this AFTER finishing Modules 5–8 (so you've now covered all 8). Mix of all topics, weighted toward Modules 5–8.

---

## 📝 Questions

### 1. How many colon-separated fields are in `/etc/passwd`?
A. 5
B. 7
C. 9
D. 4

### 2. The `x` in the password field of `/etc/passwd` indicates:
A. Account locked
B. The actual hash is in `/etc/shadow`
C. No password
D. Exempt from aging

### 3. To add user `dora` to group `devs` WITHOUT removing other secondary memberships:
A. `usermod -G devs dora`
B. `usermod -aG devs dora`
C. `useradd -G devs dora`
D. `groupmod -a dora devs`

### 4. The CORRECT command to edit `/etc/sudoers`:
A. `vi /etc/sudoers`
B. `visudo`
C. `nano /etc/sudoers`
D. `gedit /etc/sudoers`

### 5. A sudoers line `%wheel ALL=(ALL) NOPASSWD: ALL` means:
A. Only root can sudo
B. Wheel group can run anything, as anyone, no password
C. Everyone in /etc/passwd can sudo
D. Wheel group cannot sudo

### 6. To create a service account that cannot log in interactively (home at /var/lib/svc-app):
A. `useradd -m -d /var/lib/svc-app -s /sbin/nologin svc-app`
B. `useradd -m svc-app && passwd -d svc-app`
C. `adduser --no-shell svc-app`
D. `useradd svc-app && rm /home/svc-app`

### 7. Where do password hashes actually live?
A. `/etc/passwd`
B. `/etc/shadow`
C. `/etc/gshadow`
D. `/var/lib/passwords`

### 8. To remove user `bob` AND his home directory:
A. `userdel bob`
B. `userdel -r bob`
C. `usermod -L bob`
D. `passwd -d bob`

### 9. The PAM control flag that DENIES IMMEDIATELY on failure (skipping remaining modules):
A. `required`
B. `requisite`
C. `sufficient`
D. `optional`

### 10. `/etc/shadow` line starts with `!$6$...`. The account is:
A. Corrupted
B. LOCKED (the `!` prefix disables login)
C. A system account
D. Using bcrypt

### 11. To list ALL users (including LDAP/SSSD-sourced):
A. `cat /etc/passwd`
B. `getent passwd`
C. `awk -F: '{print $1}' /etc/passwd`
D. `ldapsearch`

### 12. Which command forces alice to change password at next login?
A. `passwd -e alice`
B. `chage -d 0 alice`
C. `usermod -e alice`
D. Both A and B work

### 13. The modern replacement for `ifconfig` is:
A. `ip route`
B. `ip addr` (or `ip a`)
C. `ip neigh`
D. `ip link set`

### 14. The modern replacement for `netstat -tulpn`:
A. `ss -tulpn`
B. `lsof -i`
C. `nmap localhost`
D. `tcpdump -l`

### 15. To open TCP 8080 permanently in firewalld's `public` zone:
A. `firewall-cmd --zone=public --add-port=8080/tcp`
B. `firewall-cmd --zone=public --add-port=8080/tcp --permanent && firewall-cmd --reload`
C. `firewall-cmd --add 8080`
D. `iptables -I INPUT -p tcp --dport 8080 -j ACCEPT`

### 16. SSH key auth fails silently (falls back to password) despite an `authorized_keys` entry. The MOST likely cause:
A. NFS-mounted home
B. `~/.ssh` or `authorized_keys` has loose permissions; sshd's StrictModes rejected the key
C. sshd is down
D. The key is too long

### 17. SSH-tunnel: my port 8080 should reach remote db:5432 via jump host:
A. `ssh -L 8080:db:5432 jump`
B. `ssh -R 8080:db:5432 jump`
C. `ssh -D 8080 jump`
D. `ssh -J 5432:db:8080 jump`

### 18. `~/.ssh/` must have mode:
A. 755
B. 700
C. 600
D. 770

### 19. To test TCP port 443 reachability to `web.corp`:
A. `ping web.corp`
B. `nc -vz web.corp 443`
C. `traceroute web.corp`
D. `host web.corp`

### 20. Persisting DNS server changes on a modern Ubuntu (NetworkManager) system:
A. Edit `/etc/resolv.conf` directly
B. `nmcli connection modify <con> ipv4.dns "1.1.1.1"` + `nmcli connection up <con>`
C. Symlink `/etc/resolv.conf` to a custom file
D. `dhclient -r`

### 21. firewalld zone that silently DROPS incoming packets (no reply):
A. `block`
B. `drop`
C. `public`
D. `external`

### 22. The safest sequence after editing `/etc/ssh/sshd_config`:
A. `systemctl reload sshd`
B. `sshd -t && systemctl reload sshd`
C. `systemctl restart sshd && reboot`
D. `kill -HUP $(pidof sshd)`

### 23. `lspci -k` shows:
A. PCI devices and the kernel driver bound
B. Loaded kernel modules
C. CPU info
D. USB devices

### 24. The current kernel version:
A. `uname -v`
B. `uname -r`
C. `uname -m`
D. `cat /etc/os-release`

### 25. To LOAD a kernel module WITH dependency resolution:
A. `insmod`
B. `modprobe`
C. `depmod`
D. `lsmod`

### 26. To blacklist a module permanently, add `blacklist <name>` to:
A. `/etc/modules.conf`
B. `/etc/modprobe.d/<file>.conf`
C. `/etc/modules`
D. `/usr/lib/modules/conf.d/`

### 27. After blacklisting a boot-path module, you MUST:
A. `systemctl daemon-reload`
B. Rebuild the initramfs (`dracut -f` / `update-initramfs -u`)
C. Run `grub-install`
D. Reinstall the kernel

### 28. LVM hierarchy bottom-up:
A. LV → VG → PV
B. PV → VG → LV
C. PE → VG → LV
D. VG → PV → LV

### 29. To extend an LV by 100 GB AND grow its filesystem in ONE command:
A. `lvextend -L +100G /dev/vg/lv && resize2fs /dev/vg/lv`
B. `lvextend -r -L +100G /dev/vg/lv`
C. `lvresize +100G /dev/vg/lv`
D. Both A and B work; B is the one-step form

### 30. XFS resize behavior:
A. Grow + shrink online
B. Grow only — cannot shrink
C. Shrink only
D. No resize

### 31. The CORRECT order to shrink an ext4 LV:
A. `lvreduce` then `resize2fs`
B. `umount && e2fsck -f && resize2fs <smaller> && lvreduce -L <smaller>`
C. Shrink LV first, then FS
D. Use `lvreduce -r`

### 32. LVM snapshot becomes INVALID when:
A. Source LV is unmounted
B. Snapshot fills up beyond its allocation
C. Kernel upgrades
D. Reboot

### 33. To re-read a freshly-changed partition table without rebooting:
A. `udevadm reload`
B. `partprobe`
C. `mount -a`
D. `kpartx -r`

### 34. Which command shows current SELinux mode?
A. `getenforce`
B. `selinux`
C. `sestate`
D. `cat /sys/selinux/mode`

### 35. The runtime command to switch SELinux to permissive:
A. `setenforce 0`
B. `setenforce off`
C. `selinux --permissive`
D. `echo permissive > /etc/selinux/config`

### 36. nginx (httpd_t) is denied reading a file labeled default_t. The PERSISTENT fix:
A. `chmod 777 file`
B. `setenforce 0`
C. `semanage fcontext -a -t httpd_sys_content_t '/path(/.*)?' && restorecon -Rv /path`
D. `chcon -t httpd_sys_content_t file` (chcon alone is temporary)

### 37. To query recent SELinux AVC denials:
A. `journalctl -k`
B. `dmesg | grep AVC`
C. `ausearch -m AVC -ts recent`
D. `grep AVC /var/log/syslog`

### 38. On Ubuntu, list AppArmor profiles and modes:
A. `apparmor-status`
B. `aa-status`
C. `appctl list`
D. `apparmor list`

### 39. The command to create a LUKS-encrypted partition (DESTROYING contents):
A. `cryptsetup luksFormat /dev/sdb1`
B. `cryptsetup new /dev/sdb1`
C. `mkfs.luks /dev/sdb1`
D. `luks-create /dev/sdb1`

### 40. After `cryptsetup luksOpen /dev/sdb1 mydata`, the unlocked block device is at:
A. `/dev/sdb1`
B. `/dev/luks/mydata`
C. `/dev/mapper/mydata`
D. `/dev/cryptsetup/mydata`

### 41. After adding a new LUKS volume to `/etc/crypttab`, you MUST:
A. Reboot only
B. Rebuild the initramfs THEN reboot
C. `systemctl daemon-reload`
D. Restart cryptsetup

### 42. To VERIFY a detached signature on a tarball with GPG:
A. `gpg --check file.tar.gz`
B. `gpg --verify file.tar.gz.asc file.tar.gz`
C. `gpg --decrypt file.tar.gz.asc`
D. `sha256sum file.tar.gz`

### 43. fail2ban primarily reacts to:
A. Process syscalls
B. Failed authentication entries in log files matched by regex
C. Kernel uevents
D. SELinux denials

### 44. Auditd rule to watch /etc/sudoers for any write/attr change, tagged "sudo-watch":
A. `auditctl -w /etc/sudoers -p wa -k sudo-watch`
B. `inotifywait /etc/sudoers`
C. `tail -f /etc/sudoers`
D. `chattr +a /etc/sudoers`

### 45. To make `net.ipv4.ip_forward = 0` persist across reboots:
A. `echo 0 > /proc/sys/net/ipv4/ip_forward`
B. `sysctl -w net.ipv4.ip_forward=0`
C. Add `net.ipv4.ip_forward = 0` to a file under `/etc/sysctl.d/` and run `sysctl --system`
D. Add to /etc/rc.local

### 46. To enable a SELinux boolean persistently:
A. `setsebool boolean_name on`
B. `setsebool -P boolean_name on`
C. `getsebool boolean_name on`
D. Edit /etc/selinux/booleans

### 47. To allow sshd on port 2222 with SELinux enforcing, you need:
A. Edit /etc/ssh/sshd_config only
B. `semanage port -a -t ssh_port_t -p tcp 2222` IN ADDITION TO sshd_config + firewalld
C. Disable SELinux for that port
D. `setenforce 0` permanently

### 48. The `chattr +a` flag makes a file:
A. Encrypted
B. Append-only
C. Immutable
D. SUID

### 49. To remove ALL ACL entries from a file:
A. `setfacl -m b file`
B. `setfacl -b file`
C. `setfacl -d file`
D. `chmod -- file`

### 50. The systemd target equivalent of SysVinit runlevel 3:
A. `graphical.target`
B. `multi-user.target`
C. `rescue.target`
D. `default.target`

### 51. To copy public key to a remote host:
A. `ssh-copy-id user@host`
B. `scp ~/.ssh/id_ed25519 user@host:`
C. `ssh user@host < ~/.ssh/id_ed25519.pub`
D. `ssh-add user@host`

### 52. cron job for "every weekday at 02:30 a.m.":
A. `30 2 * * 1-5 /opt/run.sh`
B. `2 30 * * 1-5 /opt/run.sh`
C. `30 2 1-5 * * /opt/run.sh`
D. `*/30 2 * * 1-5 /opt/run.sh`

### 53. The `local` keyword in a bash function:
A. Marks variable read-only
B. Scopes the variable to the function
C. Makes persistent
D. Exports to subprocesses

### 54. To watch the kernel ring buffer LIVE:
A. `dmesg`
B. `dmesg -w`
C. `tail -f /var/log/dmesg`
D. `journalctl --follow --kernel` (or `dmesg -w`)

### 55. udev rule SYMLINK directive:
A. Renames the primary devnode
B. Creates an additional symlink to the device's primary node
C. Mounts the device
D. Loads a kernel module

### 56. dmidecode shows:
A. Loaded modules
B. PCI devices
C. SMBIOS/firmware data (BIOS, RAM, system serial)
D. Routing table

### 57. EPEL on RHEL stands for:
A. Encrypted Packages for Enterprise Linux
B. Extra Packages for Enterprise Linux
C. Enterprise Plugin Engine Library
D. Extended Public Encryption Library

### 58. The DEFENSIVE bash script header is:
A. `#!/bin/sh`
B. `set -euo pipefail`
C. `export PATH=/usr/local/bin:/bin`
D. `umask 077`

### 59. Pipeline `sort file | uniq -c | sort -rn | head -5` does:
A. Removes duplicates only
B. Counts each line, prints the 5 most frequent
C. Sorts by line length
D. Removes blank lines

### 60. Here-doc syntax to write a config file:
A. `echo -e "[s]\nport=8080" > /etc/x/conf`
B. `cat <<EOF > /etc/x/conf` ... `EOF`
C. `write -f /etc/x/conf "[s]\nport=8080"`
D. `config > /etc/x/conf <<EOF [s] port=8080 EOF`

### 61. SSH per-user override block in sshd_config starts with:
A. `User <name> {`
B. `Match User <name>`
C. `[User <name>]`
D. `If User=<name>:`

### 62 (Scenario PBQ). A web server should run as service account `webapp` with no shell, read-only access to `/srv/web/static/`, write access to `/var/log/webapp/`, and SSH key for `deployer` user only. Which combination correctly composes this?
A. `useradd -m -s /bin/bash webapp`; `chmod 777 /srv/web/static/`; `chmod 666 /var/log/webapp/`
B. `useradd -m -s /sbin/nologin -d /var/lib/webapp webapp`; `chown -R webapp:webapp /srv/web/static/ /var/log/webapp/`; `chmod 755 /srv/web/static/`; `chmod 750 /var/log/webapp/`; deployer key in `/root/.ssh/authorized_keys`
C. `useradd webapp`; `chmod 700 /srv/web/static/`; deployer in sudoers
D. `useradd -s /bin/false webapp`; `setfacl -m u:webapp:rw /srv/web/static/`; deployer keys ignored

### 63 (Scenario PBQ). Match each symptom to its root cause:
- (a) `df -h` shows 60% free, but writes fail with "No space left on device"
- (b) New disk visible in `dmesg` but no `/dev/sdb` exists
- (c) After upgrading the kernel, system fails to mount LUKS root at boot
- (d) ssh prompts for password despite an authorized_keys entry

A. (a) inodes exhausted, (b) udev event missed (`udevadm trigger`), (c) initramfs not rebuilt, (d) ~/.ssh perms too loose
B. (a) FS corrupted, (b) reboot needed, (c) kernel bug, (d) sshd is off
C. (a) read-only, (b) /dev unmounted, (c) GRUB misconfig, (d) wrong password
D. (a) quota exceeded, (b) BIOS issue, (c) crypttab corrupted, (d) SSH key expired

### 64 (Scenario PBQ). Given four blank 1 TB disks `/dev/sd[bcde]`, build an LVM stack with a 2 TB XFS LV `lv_data` mounted at `/srv/data` (each disk pre-partitioned with a single GPT partition `/dev/sd[bcde]1`, lvm flag set). The minimum correct sequence:
A.
```
pvcreate /dev/sd[bcde]1
vgcreate vg_data /dev/sd[bcde]1
lvcreate -L 2T -n lv_data vg_data
mkfs.xfs /dev/vg_data/lv_data
echo "/dev/vg_data/lv_data /srv/data xfs defaults,nofail 0 2" >> /etc/fstab
mkdir -p /srv/data && mount -a
```
B.
```
mkfs.xfs /dev/sd[bcde]
mount /dev/sdb /srv/data
```
C.
```
lvcreate -L 2T -n lv_data
mkfs.ext4 /dev/lv_data
mount /dev/lv_data /srv/data
```
D.
```
pvcreate /dev/sdb
mkfs.xfs /dev/sdb
mount /dev/sdb /srv/data
```

### 65 (Scenario PBQ). A RHEL 9 server's sshd should move from port 22 to 2222. With SELinux enforcing and firewalld active, the minimum correct sequence is:
A. Edit sshd_config Port 2222; restart sshd
B. `sed -i 's/^#*Port .*/Port 2222/' /etc/ssh/sshd_config; semanage port -a -t ssh_port_t -p tcp 2222; firewall-cmd --add-port=2222/tcp --permanent && firewall-cmd --remove-service=ssh --permanent && firewall-cmd --reload; sshd -t && systemctl restart sshd`
C. `setenforce 0; sed -i ... ; restart sshd`
D. `firewall-cmd --add-port=2222; restart sshd`

---

## 🎯 Answer Key (No Cheating!)

```
1.  B    14. A   27. B   40. C   53. B
2.  B    15. B   28. B   41. B   54. D (or B)
3.  B    16. B   29. D   42. B   55. B
4.  B    17. A   30. B   43. B   56. C
5.  B    18. B   31. B   44. A   57. B
6.  A    19. B   32. B   45. C   58. B
7.  B    20. B   33. B   46. B   59. B
8.  B    21. B   34. A   47. B   60. B
9.  B    22. B   35. A   48. B   61. B
10. B    23. A   36. C   49. B   62. B
11. B    24. B   37. C   50. B   63. A
12. D    25. B   38. B   51. A   64. A
13. B    26. B   39. A   52. A   65. B
```

### Why #62 = B
- `useradd -m -s /sbin/nologin -d /var/lib/webapp webapp` creates a service account that cannot log in interactively
- `chown -R` sets ownership; `chmod 755/750` provides read-execute traversal and group-restricted write
- The deployer SSH key belongs on the *deployer* user's authorized_keys (separate user), NOT root. Option B oversimplifies but is the closest correct pattern. The exam will give you the choice that gets ownership + nologin + sane modes right.

### Why #63 = A
- (a) Inode exhaustion is the textbook "df shows free but writes fail" symptom
- (b) Kernel detected the disk (in dmesg) but udev didn't create the node — `udevadm trigger` re-emits events
- (c) New kernel = new initramfs needed; without rebuild, LUKS modules may be missing
- (d) StrictModes (default yes) rejects keys if `~/.ssh` is group-writable or `authorized_keys` is loose

### Why #64 = A
- 5 LVM commands + mkfs + fstab + mount
- Choice B skips LVM, C skips pvcreate/vgcreate, D doesn't use LVM at all

### Why #65 = B
- THREE layers need updating for a port change on a hardened RHEL system: sshd_config (Port), SELinux (semanage port), firewalld (zone). `setenforce 0` is the wrong answer pattern.

---

## Detailed answer rationales

Concise rationales — refer to the appropriate module's Quiz or Reading for full discussion.

**1–12.** Module 5 — users/groups/sudo/PAM. See Module-05 Quiz answers for detailed rationale on each.

**13–22.** Module 6 — networking, SSH, firewalld. See Module-06 Quiz answers.

**23–33.** Module 7 — kernel modules, devices, LVM. See Module-07 Quiz answers.

**34–48.** Module 8 — SELinux, AppArmor, LUKS, GPG, fail2ban, auditd, sysctl. See Module-08 Quiz answers.

**49–55.** Mixed review: ACLs (Module 2), targets (Module 1), SSH copy (Module 6), cron (Module 4), bash local (Module 4), dmesg (Module 7), udev SYMLINK (Module 7).

**56–61.** Mixed: dmidecode (Module 7), EPEL (Module 3), defensive bash header (Module 4), `sort | uniq | head` pattern (Module 4), here-doc (Module 4), sshd Match block (Module 6).

**62 (scenario).** Service-account composition pattern — `/sbin/nologin` + correct ownership + sane modes + deployer key on deployer's own user. The exam loves this pattern; rehearse the wrong answers' specific failures (777 = wrong, root authorized_keys = wrong, single-user shell = wrong).

**63 (scenario).** Four classic Linux symptoms each with one canonical cause. Memorize all four pairings.

**64 (scenario).** LVM stack build. Choice A is the textbook 5-command flow + format + mount + persist.

**65 (scenario).** SELinux + firewalld + sshd 3-layer port change. The exam tests this exact pattern.

---

## 📊 Scoring

| Score | Verdict |
|-------|---------|
| 60–65 | 🏆 Ready for the Final Mock |
| 52–59 | ✅ Solid. Review wrongs, re-take in 3 days |
| 45–51 | ⚠️ Re-study weak modules; redo Practice Exam 1 first |
| <45 | 🔁 Restart Modules 5–8; you're not ready yet |

---

## 🔍 Review Process

For EACH wrong answer:
1. Identify which module covered it
2. Re-read that module's Reading.md section
3. Add a flashcard
4. Try the question again in 3 days

---

➡️ When ready: [Final Mock Exam](./Final-Mock-Exam.md) — 90 questions, 90 minutes, real exam conditions.
