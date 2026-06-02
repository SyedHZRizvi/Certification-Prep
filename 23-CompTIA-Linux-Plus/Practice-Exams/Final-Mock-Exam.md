# 🎓 Final Mock Exam — CompTIA Linux+ (XK0-005)

> **Conditions:** Set a 90-minute timer. **90 questions.** Real exam length, real exam time. No notes. No looking up.
> **Pass mark:** 720/900 (~80%). Aim for 85%+ here so you have margin on exam day.
> Take this 2–3 days before your scheduled real exam. Time-box strictly.

> **Coverage matches exam blueprint:**
> - System Management (Modules 1, 2, 3, 7): 32% → ~29 questions
> - Security (Modules 5, 8): 21% → ~19 questions
> - Scripting & Automation (Module 4): 19% → ~17 questions
> - Troubleshooting (Modules 1, 6, 7 — woven through all): 28% → ~25 questions
> - 4-5 multi-part scenario PBQs included

---

## 📝 Questions

### 1. Which stage of Linux boot loads kernel drivers needed to mount the real root?
A. UEFI firmware
B. GRUB2
C. initramfs (initrd)
D. systemd PID 1

### 2. After editing `/etc/default/grub` on Ubuntu, the regen command is:
A. `update-grub`
B. `grub2-mkconfig -o /boot/grub2/grub.cfg`
C. `grub-install /dev/sda`
D. `dracut -f`

### 3. The systemd target equivalent of SysVinit runlevel 3:
A. `graphical.target`
B. `multi-user.target`
C. `rescue.target`
D. `default.target`

### 4. After editing a unit file, the FIRST command before restart:
A. `systemctl reload-or-restart unit`
B. `systemctl daemon-reload`
C. `systemctl reset-failed unit`
D. `systemctl status unit`

### 5. Which sysctl-style directive in a `.timer` unit runs missed jobs at next boot?
A. `OnBoot=true`
B. `Restart=on-failure`
C. `Persistent=true`
D. `RemainAfterExit=yes`

### 6. The `journalctl` invocation showing ONLY kernel messages from this boot:
A. `journalctl -k -b`
B. `dmesg --clear`
C. `journalctl --all`
D. `journalctl -u kernel`

### 7. The unit type for a "run and exit cleanly, mark as active after success" job:
A. `simple`
B. `forking`
C. `oneshot` + `RemainAfterExit=yes`
D. `notify`

### 8. The default fstab option that lets the system boot when a device is missing:
A. `defaults`
B. `auto`
C. `nofail`
D. `noexec`

### 9. Per FHS, where do third-party app packages belong?
A. `/usr/local`
B. `/etc`
C. `/opt`
D. `/var`

### 10. `df -h` shows 60% free but writes fail. The most likely cause:
A. FS corruption
B. Inodes exhausted (`df -i`)
C. Disk encryption
D. Read-only mount

### 11. The mode `rwxr-x---` in octal:
A. 750
B. 755
C. 700
D. 740

### 12. To make all new files in `/srv/team` inherit group `devs`:
A. Sticky bit
B. SUID
C. SGID on directory
D. ACL default

### 13. The `+` in `ls -l` after the mode indicates:
A. Sparse file
B. Extended ACL present
C. Encrypted file
D. Symbolic link

### 14. The chattr flag that makes a file immutable (cannot edit, delete, rename):
A. `+a`
B. `+i`
C. `+c`
D. `+s`

### 15. To remove ALL ACL entries:
A. `setfacl -m b file`
B. `setfacl -b file`
C. `setfacl -d file`
D. `chmod -- file`

### 16. The Linux filesystem that CANNOT shrink:
A. ext4
B. XFS
C. Btrfs
D. ZFS

### 17. The package manager for RHEL 9:
A. `apt`
B. `dnf`
C. `pacman`
D. `pip`

### 18. The Debian command equivalent to `dnf provides /usr/bin/foo`:
A. `apt search foo`
B. `apt-file search /usr/bin/foo`
C. `dpkg -S /usr/bin/foo` (only installed)
D. `dpkg --provides foo`

### 19. After editing `/etc/apt/sources.list.d/internal.list`, refresh metadata:
A. `apt upgrade`
B. `apt update`
C. `apt full-upgrade`
D. `apt-cache rebuild`

### 20. The dnf command to roll back the LAST transaction:
A. `dnf undo`
B. `dnf rollback`
C. `dnf history undo last`
D. `dnf revert`

### 21. Difference between `apt remove` and `apt purge`:
A. Same
B. `purge` also deletes /etc/<pkg>/ configs
C. `purge` is faster
D. `remove` keeps the binary

### 22. dnf install fails with "Public key not installed". The CORRECT fix:
A. `gpgcheck=0`
B. `rpm --import <url>`
C. `--nogpgcheck`
D. Delete the .rpm

### 23. The classic source-build sequence:
A. `make && configure && install`
B. `./configure && make && make install`
C. `compile && link && install`
D. `gcc *.c`

### 24. Snap, Flatpak, AppImage are:
A. Three names for the same tool
B. Universal cross-distro app formats
C. Kernel modules
D. GUI installers only

### 25. The bash defensive header:
A. `#!/bin/sh`
B. `set -euo pipefail`
C. `export PATH=...`
D. `umask 077`

### 26. CORRECT way to read a file line-by-line in bash:
A. `for line in $(cat file); do ...; done`
B. `while IFS= read -r line; do ...; done < file`
C. `cat file | for line; do ...; done`
D. `tail -f file | xargs`

### 27. To redirect BOTH stdout and stderr to /var/log/job.log:
A. `cmd > /var/log/job.log`
B. `cmd > /var/log/job.log 2>&1`
C. `cmd 2>&1 > /var/log/job.log`
D. `cmd > log 2>log`

### 28. cron expression "every 15 minutes":
A. `0 */15 * * *`
B. `*/15 * * * *`
C. `15 * * * *`
D. `* 15 * * *`

### 29. The exit code conventionally meaning "command not found":
A. 0
B. 1
C. 126
D. 127

### 30. To print HOME directories from /etc/passwd:
A. `awk '{print $6}' /etc/passwd`
B. `awk -F: '{print $6}' /etc/passwd`
C. `cut -f6 /etc/passwd`
D. `grep ':' /etc/passwd | cut -d: -f6`

### 31. `${VAR:?err}` when VAR is unset:
A. Substitutes "err"
B. Sets VAR to "err"
C. Prints "err" to stderr and exits non-zero
D. Echoes nothing

### 32. `local` inside a bash function:
A. Read-only
B. Scopes the variable to the function
C. Persistent
D. Exported to subprocesses

### 33. The regex match operator inside `[[ ]]`:
A. `==`
B. `=~`
C. `=*`
D. `like`

### 34. cron's PATH at script execution:
A. The user's full PATH
B. Minimal (`/usr/bin:/bin`) — use absolute paths
C. `/`
D. Inherited from systemd

### 35. The defensive drop-in unit override pattern:
A. Edit `/lib/systemd/system/<unit>.service`
B. `systemctl edit <unit>` (creates `/etc/systemd/system/<unit>.service.d/override.conf`)
C. Copy unit to /tmp and edit
D. Use `crontab -e`

### 36. /etc/passwd has how many colon-separated fields?
A. 5
B. 7
C. 9
D. 4

### 37. The `x` in /etc/passwd's password field means:
A. Account locked
B. Hash is in /etc/shadow
C. No password
D. Aging exempt

### 38. Add user `dora` to `devs` WITHOUT removing other secondary groups:
A. `usermod -G devs dora`
B. `usermod -aG devs dora`
C. `useradd -G devs dora`
D. `groupmod -a dora devs`

### 39. The CORRECT way to edit /etc/sudoers:
A. `vi`
B. `visudo`
C. `nano`
D. `gedit`

### 40. `%wheel ALL=(ALL) NOPASSWD: ALL` means:
A. Only root sudoes
B. wheel group runs anything, no password
C. Everyone in passwd sudoes
D. wheel cannot sudo

### 41. Service-account creation that disables interactive login:
A. `useradd -m svc-app && passwd -d svc-app`
B. `useradd -m -d /var/lib/svc-app -s /sbin/nologin svc-app`
C. `adduser --no-shell svc-app`
D. `useradd svc-app && rm /home/svc-app`

### 42. Password hashes live in:
A. /etc/passwd
B. /etc/shadow
C. /etc/gshadow
D. /var/lib/passwords

### 43. To delete user `bob` AND home dir:
A. `userdel bob`
B. `userdel -r bob`
C. `usermod -L bob`
D. `passwd -d bob`

### 44. PAM control flag that DENIES IMMEDIATELY:
A. `required`
B. `requisite`
C. `sufficient`
D. `optional`

### 45. /etc/shadow line `!$6$...` means:
A. Corrupted
B. Account locked
C. System account
D. bcrypt hash

### 46. List ALL users (incl LDAP/SSSD):
A. `cat /etc/passwd`
B. `getent passwd`
C. `awk -F: '{print $1}' /etc/passwd`
D. `ldapsearch`

### 47. Force `alice` to change password at next login:
A. `passwd -e alice`
B. `chage -d 0 alice`
C. `usermod -e alice`
D. Both A and B

### 48. The modern `ifconfig` replacement:
A. `ip route`
B. `ip addr`
C. `ip neigh`
D. `ip link set`

### 49. The modern `netstat -tulpn` replacement:
A. `ss -tulpn`
B. `lsof -i`
C. `nmap localhost`
D. `tcpdump -l`

### 50. To open TCP 8080 permanently in firewalld:
A. `firewall-cmd --add-port=8080/tcp`
B. `firewall-cmd --add-port=8080/tcp --permanent && firewall-cmd --reload`
C. `firewall-cmd --add 8080`
D. `iptables -I INPUT -p tcp --dport 8080 -j ACCEPT`

### 51. SSH key auth falls back to password despite authorized_keys entry. Most likely cause:
A. NFS-mounted home
B. ~/.ssh perms too loose; StrictModes rejected
C. sshd down
D. Key too long

### 52. SSH tunnel: my 8080 → remote db:5432 via jump:
A. `ssh -L 8080:db:5432 jump`
B. `ssh -R 8080:db:5432 jump`
C. `ssh -D 8080 jump`
D. `ssh -J 5432:db:8080 jump`

### 53. `~/.ssh/` required mode:
A. 755
B. 700
C. 600
D. 770

### 54. Test TCP port 443 reachability to web.corp:
A. `ping web.corp`
B. `nc -vz web.corp 443`
C. `traceroute web.corp`
D. `host web.corp`

### 55. Persist DNS server on a NetworkManager-managed Ubuntu:
A. Edit /etc/resolv.conf directly
B. `nmcli connection modify <con> ipv4.dns "1.1.1.1"` + `nmcli connection up <con>`
C. Symlink resolv.conf
D. `dhclient -r`

### 56. firewalld zone that silently drops:
A. `block`
B. `drop`
C. `public`
D. `external`

### 57. Safest sequence after sshd_config edit:
A. `systemctl reload sshd`
B. `sshd -t && systemctl reload sshd`
C. `systemctl restart sshd && reboot`
D. `kill -HUP $(pidof sshd)`

### 58. `lspci -k` shows:
A. PCI devices + bound kernel driver
B. Loaded modules
C. CPU info
D. USB devices

### 59. The current kernel version:
A. `uname -v`
B. `uname -r`
C. `uname -m`
D. `cat /etc/os-release`

### 60. LOAD kernel module WITH dep resolution:
A. `insmod`
B. `modprobe`
C. `depmod`
D. `lsmod`

### 61. Persistent blacklist file location:
A. /etc/modules.conf
B. /etc/modprobe.d/<file>.conf
C. /etc/modules
D. /usr/lib/modules/conf.d/

### 62. After blacklisting a boot-path module:
A. `systemctl daemon-reload`
B. Rebuild initramfs
C. `grub-install`
D. Reinstall kernel

### 63. LVM hierarchy bottom-up:
A. LV → VG → PV
B. PV → VG → LV
C. PE → VG → LV
D. VG → PV → LV

### 64. Extend LV by 100 GB AND grow FS in ONE step:
A. `lvextend -L +100G /dev/vg/lv && resize2fs /dev/vg/lv`
B. `lvextend -r -L +100G /dev/vg/lv`
C. `lvresize +100G`
D. Both A and B work; B is one-step

### 65. CORRECT order to shrink an ext4 LV:
A. `lvreduce` then `resize2fs`
B. `umount && e2fsck -f && resize2fs <smaller> && lvreduce -L <smaller>`
C. Shrink LV first
D. Use `lvreduce -r`

### 66. LVM snapshot becomes invalid when:
A. Source unmounted
B. Snapshot fills up beyond its allocation
C. Kernel upgrade
D. Reboot

### 67. Re-read partition table without reboot:
A. `udevadm reload`
B. `partprobe`
C. `mount -a`
D. `kpartx -r`

### 68. Current SELinux mode:
A. `getenforce`
B. `selinux`
C. `sestate`
D. `cat /sys/selinux/mode`

### 69. Runtime switch SELinux to permissive:
A. `setenforce 0`
B. `setenforce off`
C. `selinux --permissive`
D. `echo permissive > /etc/selinux/config`

### 70. nginx denied reading default_t file. PERSISTENT fix:
A. `chmod 777`
B. `setenforce 0`
C. `semanage fcontext -a -t httpd_sys_content_t '/path(/.*)?' && restorecon -Rv /path`
D. `chcon -t httpd_sys_content_t file` (temporary)

### 71. Query recent SELinux AVC denials:
A. `journalctl -k`
B. `dmesg | grep AVC`
C. `ausearch -m AVC -ts recent`
D. `grep AVC /var/log/syslog`

### 72. AppArmor profile/mode list on Ubuntu:
A. `apparmor-status`
B. `aa-status`
C. `appctl list`
D. `apparmor list`

### 73. Create LUKS volume (DESTROYING contents):
A. `cryptsetup luksFormat /dev/sdb1`
B. `cryptsetup new /dev/sdb1`
C. `mkfs.luks /dev/sdb1`
D. `luks-create /dev/sdb1`

### 74. After `luksOpen /dev/sdb1 mydata`, unlocked volume at:
A. `/dev/sdb1`
B. `/dev/luks/mydata`
C. `/dev/mapper/mydata`
D. `/dev/cryptsetup/mydata`

### 75. After adding LUKS entry to crypttab:
A. Reboot only
B. Rebuild initramfs THEN reboot
C. `systemctl daemon-reload`
D. Restart cryptsetup

### 76. GPG: verify a detached signature:
A. `gpg --check file.tar.gz`
B. `gpg --verify file.tar.gz.asc file.tar.gz`
C. `gpg --decrypt file.tar.gz.asc`
D. `sha256sum file.tar.gz`

### 77. fail2ban reacts primarily to:
A. Process syscalls
B. Failed-auth log entries
C. Kernel uevents
D. SELinux denials

### 78. Auditd rule watching /etc/sudoers for write/attr changes, tagged "sudo-watch":
A. `auditctl -w /etc/sudoers -p wa -k sudo-watch`
B. `inotifywait /etc/sudoers`
C. `tail -f /etc/sudoers`
D. `chattr +a /etc/sudoers`

### 79. Persist `net.ipv4.ip_forward=0` across reboots:
A. `echo 0 > /proc/sys/net/ipv4/ip_forward`
B. `sysctl -w net.ipv4.ip_forward=0`
C. /etc/sysctl.d/*.conf entry + `sysctl --system`
D. /etc/rc.local

### 80. Enable a SELinux boolean PERSISTENTLY:
A. `setsebool boolean_name on`
B. `setsebool -P boolean_name on`
C. `getsebool boolean_name on`
D. Edit /etc/selinux/booleans

### 81. Allow sshd on port 2222 with SELinux enforcing requires:
A. sshd_config only
B. `semanage port -a -t ssh_port_t -p tcp 2222` plus sshd_config plus firewalld
C. Disable SELinux for port range
D. `setenforce 0` permanently

### 82 (Scenario PBQ). Match each symptom → root cause:

- (a) df -h shows 60% free; writes fail "No space left"
- (b) New disk visible in dmesg; no /dev/sdb
- (c) After kernel upgrade, LUKS root fails to mount
- (d) sshd prompts for password despite authorized_keys

A. (a) inodes exhausted, (b) udev event missed → `udevadm trigger`, (c) initramfs not rebuilt, (d) ~/.ssh perms loose → StrictModes
B. (a) FS corrupt, (b) reboot needed, (c) kernel bug, (d) wrong password
C. (a) read-only, (b) /dev unmounted, (c) GRUB misconfig, (d) wrong username
D. (a) quota, (b) BIOS issue, (c) crypttab corrupted, (d) key expired

### 83 (Scenario PBQ). A RHEL 9 web server returns 403 on static files in /srv/myapp/static/. Permissions are 644 nginx:nginx. SELinux is enforcing. The DEBUG sequence is:
A. `chmod 777`, `setenforce 0`, restart nginx
B. `ausearch -m AVC -ts recent` → identify wrong label → `semanage fcontext -a -t httpd_sys_content_t '/srv/myapp(/.*)?'` → `restorecon -Rv /srv/myapp`
C. Reinstall nginx
D. Reboot

### 84 (Scenario PBQ). A user's bash script must (a) take 1 directory arg, (b) fail-safe if missing/empty, (c) count regular files in the directory. Minimum correct script (excluding shebang):
A. `set -euo pipefail; DIR="${1:?usage: $0 <dir>}"; find "$DIR" -type f | wc -l`
B. `DIR=$1; ls $DIR | wc -l`
C. `[[ $1 ]] && echo $(ls $1 | wc -l)`
D. `DIR="$1"; find $DIR/*; echo $?`

### 85 (Scenario PBQ). 4 blank disks (/dev/sd[bcde], pre-partitioned with /dev/sd[bcde]1 lvm-flagged) → 2 TB XFS LV `lv_data` mounted at /srv/data. Minimum correct:
A.
```
pvcreate /dev/sd[bcde]1
vgcreate vg_data /dev/sd[bcde]1
lvcreate -L 2T -n lv_data vg_data
mkfs.xfs /dev/vg_data/lv_data
echo "/dev/vg_data/lv_data /srv/data xfs defaults,nofail 0 2" >> /etc/fstab
mkdir -p /srv/data && mount -a
```
B. `mkfs.xfs /dev/sd[bcde]; mount /dev/sdb /srv/data`
C. `lvcreate -L 2T -n lv_data; mkfs.ext4 /dev/lv_data; mount /dev/lv_data /srv/data`
D. `pvcreate /dev/sdb; mkfs.xfs /dev/sdb; mount /dev/sdb /srv/data`

### 86 (Scenario PBQ). A junior admin ran `usermod -G developers alice` (no `-a`). The IMPACT is:
A. Alice is now in developers AND her previous groups
B. Alice is now ONLY in developers; her previous secondary memberships are wiped
C. Alice is locked out
D. Nothing changes

### 87 (Scenario PBQ). The cron for "every weekday at 22:30":
A. `30 22 * * 1-5 /opt/run.sh`
B. `22 30 * * 1-5 /opt/run.sh`
C. `30 22 1-5 * * /opt/run.sh`
D. `*/30 22 * * 1-5 /opt/run.sh`

### 88. systemd timer directive that lets jobs missed during downtime run at next boot:
A. `OnBoot=true`
B. `Restart=on-failure`
C. `Persistent=true`
D. `RemainAfterExit=yes`

### 89. The chage flag to expire `alice` on 2026-12-31:
A. `chage -d 2026-12-31 alice`
B. `chage -E 2026-12-31 alice`
C. `chage -M 2026-12-31 alice`
D. `chage --expire alice`

### 90 (Scenario PBQ). A RHEL 9 server needs sshd moved from port 22 to 2222 with SELinux + firewalld active. Minimum correct sequence:
A. Edit sshd_config Port 2222; restart sshd
B. `sed -i 's/^#*Port .*/Port 2222/' /etc/ssh/sshd_config; semanage port -a -t ssh_port_t -p tcp 2222; firewall-cmd --add-port=2222/tcp --permanent && firewall-cmd --remove-service=ssh --permanent && firewall-cmd --reload; sshd -t && systemctl restart sshd`
C. `setenforce 0; sed -i ...; restart sshd`
D. `firewall-cmd --add-port=2222; restart sshd`

---

## 🎯 Answer Key (No Cheating!)

```
 1. C    19. B   37. B   55. B   73. A
 2. A    20. C   38. B   56. B   74. C
 3. B    21. B   39. B   57. B   75. B
 4. B    22. B   40. B   58. A   76. B
 5. C    23. B   41. B   59. B   77. B
 6. A    24. B   42. B   60. B   78. A
 7. C    25. B   43. B   61. B   79. C
 8. C    26. B   44. B   62. B   80. B
 9. C    27. B   45. B   63. B   81. B
10. B    28. B   46. B   64. D   82. A
11. A    29. D   47. D   65. B   83. B
12. C    30. B   48. B   66. B   84. A
13. B    31. C   49. A   67. B   85. A
14. B    32. B   50. B   68. A   86. B
15. B    33. B   51. B   69. A   87. A
16. B    34. B   52. A   70. C   88. C
17. B    35. B   53. B   71. C   89. B
18. B    36. B   54. B   72. B   90. B
```

### Why #82 = A
- (a) Inode exhaustion: most common "free but full" symptom
- (b) udev: kernel saw it (dmesg) but node missing → re-emit events
- (c) Kernel upgrade often regenerates initramfs, but if it doesn't (or the LUKS/crypttab changed), boot fails to unlock
- (d) StrictModes default yes — perm rejection

### Why #83 = B
The canonical SELinux fix pattern. `chmod 777` doesn't bypass MAC. `setenforce 0` is the wrong-answer pattern. Steps: ausearch → semanage fcontext → restorecon.

### Why #84 = A
Defensive header + `${1:?msg}` for required arg + `find -type f` correctly counts regular files. Other choices have unquoted vars, no error handling, or wrong behavior.

### Why #85 = A
Standard 5-command LVM build + format + mount. Other choices skip LVM or use wrong tools.

### Why #90 = B
SELinux + firewalld + sshd 3-layer port change. The exam's favorite multi-layer scenario.

---

## Detailed answer rationales

Refer to the relevant module's Quiz for full discussion. The key patterns to internalize:

### The 7 "exam pattern" wrong answers to recognize on sight:

1. **"`setenforce 0`"** as the SELinux fix — almost always wrong
2. **"`chmod 777`"** as the permission fix — almost always wrong
3. **"`for line in $(cat file)`"** for reading lines — wrong
4. **"`apt update`"** to upgrade packages — wrong (that REFRESHES metadata; `upgrade` upgrades)
5. **"`usermod -G`"** without `-a` to add to a group — wrong
6. **"`vi /etc/sudoers`"** instead of `visudo` — wrong
7. **"`gpgcheck=0`"** to bypass GPG errors — wrong

### The 7 "exam pattern" right answers:

1. **`set -euo pipefail`** at the top of any bash script
2. **`semanage fcontext` + `restorecon`** for SELinux label problems
3. **`--permanent` + `--reload`** for firewalld changes
4. **`systemctl daemon-reload`** after editing unit files
5. **`-aG`** for adding to a group
6. **`visudo`** for editing sudoers
7. **Rebuild initramfs** after crypttab/kernel/storage changes

---

## 📊 Final Scoring & Recommendation

| Score | Verdict | Action |
|-------|---------|--------|
| 81–90 | 🏆 90%+ — you're ready. Book the real exam. | Light review only, sleep well |
| 72–80 | ✅ 80–89% — passing-band performance | One more pass of weakest modules |
| 63–71 | ⚠️ 70–79% — borderline | Don't book yet; re-study weak areas, retake in 5 days |
| 54–62 | 🔁 60–69% — not ready | Restart 3 weakest modules; retake in 1 week |
| <54 | 🚨 <60% — at risk | Re-read all 8 modules; redo Practice Exams 1 & 2 first |

---

## 🔍 Final Review Process

For EACH wrong answer:

1. Identify the module
2. Re-read the relevant section of that Reading.md
3. Add a flashcard
4. Re-test only the wrong-answer subset in 48 hours

---

## 🎓 Day-Before-Exam Checklist

- [ ] You scored 80%+ on this Final Mock (preferably 85%+)
- [ ] Your Cheat-Sheets for all 8 modules fit on 8 pages and you've read each once
- [ ] You can recite the 7 "exam pattern" wrong answers above without looking
- [ ] You ran every command in Module 6 (networking) and Module 8 (security) on a live VM
- [ ] You've slept 7+ hours each of the last 2 nights
- [ ] Both forms of ID + voucher confirmation ready
- [ ] Exam center directions / online proctor environment tested

---

🎉 **You've put in the work. Go pass it.** 🐧
