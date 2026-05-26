# 🧪 Practice Exam 1 — CompTIA Linux+ (XK0-005 Style)

> **Conditions:** Set a 45-minute timer. 45 questions. Treat it like the real thing.
> **Pass mark:** 38/45 (~85%) — Linux+ passes at ~80% so aim higher in practice.
> Take this AFTER finishing Modules 1–4. Covers Boot/systemd, Filesystem, Packages, Bash.

---

## 📝 Questions

### 1. The Linux boot process stage that loads the kernel modules needed to mount the real root filesystem is:
A. UEFI firmware
B. GRUB2
C. initramfs (initrd)
D. systemd

### 2. On a RHEL 9 system, after editing `/etc/default/grub`, the command to regenerate the boot configuration is:
A. `update-grub`
B. `grub2-mkconfig -o /boot/grub2/grub.cfg`
C. `grub-install /dev/sda`
D. `dracut -f`

### 3. The systemd target replacing SysVinit runlevel 5 is:
A. `multi-user.target`
B. `graphical.target`
C. `rescue.target`
D. `default.target`

### 4. After editing a unit file in `/etc/systemd/system/`, the FIRST command before restart is:
A. `systemctl reload-or-restart myapp`
B. `systemctl daemon-reload`
C. `systemctl reset-failed`
D. `systemctl status myapp`

### 5. Which `journalctl` invocation shows ONLY kernel messages from this boot?
A. `journalctl -k -b`
B. `dmesg --clear`
C. `journalctl --all`
D. `journalctl -u kernel`

### 6. `Wants=` vs `After=` in a systemd unit:
A. They are synonyms
B. `After=` orders only; `Wants=` is a weak dependency
C. `Wants=` orders only; `After=` is a strong dependency
D. Both order AND require

### 7. Per the FHS, which directory holds third-party application packages?
A. `/usr/local`
B. `/etc`
C. `/opt`
D. `/var`

### 8. `df -h` shows free space but writes fail with `No space left on device`. The most likely cause is:
A. The filesystem is corrupt
B. Inodes are exhausted (check `df -i`)
C. The disk is encrypted
D. The mount is read-only

### 9. Convert `rwxr-x---` to octal:
A. 750
B. 755
C. 700
D. 740

### 10. To make all new files in `/srv/team` inherit the group `devs`, set:
A. Sticky bit
B. SUID
C. SGID on the directory
D. ACL default

### 11. The `+` after the mode in `ls -l` indicates:
A. The file is sparse
B. An ACL is present
C. The file is encrypted
D. The file is a symbolic link

### 12. To remove ALL ACLs from a file:
A. `setfacl -m b file`
B. `setfacl -b file`
C. `setfacl -d file`
D. `chmod -- file`

### 13. The fstab option that prevents the boot from failing if a device is missing:
A. `defaults`
B. `auto`
C. `nofail`
D. `noexec`

### 14. Which filesystem CANNOT be shrunk?
A. ext4
B. XFS
C. Btrfs
D. (all can be shrunk)

### 15. `chmod 4644 file` sets:
A. SUID; the indicator will be lowercase `s` (it will fire)
B. SUID; the indicator will be UPPERCASE `S` (no execute, so it won't fire)
C. Sticky bit
D. SGID

### 16. The package manager for RHEL 9 is:
A. `apt`
B. `dnf`
C. `pacman`
D. `yum` (deprecated; dnf is the modern equivalent)

### 17. To find which package owns `/usr/sbin/sshd` on Debian:
A. `rpm -qf /usr/sbin/sshd`
B. `dpkg -S /usr/sbin/sshd`
C. `apt show sshd`
D. `which sshd`

### 18. `apt remove nginx` vs `apt purge nginx`:
A. Identical
B. `purge` also deletes config files in /etc/nginx/
C. `purge` is faster
D. `remove` keeps the binaries

### 19. A dnf install fails with `Public key for foo-1.0.rpm is not installed`. The correct fix:
A. Set `gpgcheck=0`
B. `rpm --import <url-of-key>`
C. `--nogpgcheck` on the install
D. Delete the .rpm

### 20. The classic 3-step source build is:
A. `make && configure && install`
B. `./configure && make && make install`
C. `compile && link && install`
D. `gcc *.c && cp a.out /usr/bin/`

### 21. Snap, Flatpak, and AppImage are:
A. Different names for the same thing
B. Universal cross-distro app formats (with different sponsors and sandboxes)
C. Kernel modules
D. Only for desktop GUI apps

### 22. After source-installing via `./configure && make && sudo make install`, why doesn't `dpkg -l | grep <name>` show it?
A. The script was wrong
B. Source installs are NOT tracked by the package manager
C. It was installed in /opt
D. apt needs `apt update`

### 23. The first line of a bash script `#!/bin/bash` is called:
A. Comment
B. Shebang
C. Header
D. Import

### 24. `set -euo pipefail` makes a script:
A. Faster
B. Exit on any command failure, undefined-variable use, or pipeline failure
C. Print every command before running
D. Suppress all errors

### 25. The CORRECT pattern to read a file line-by-line in bash:
A. `for line in $(cat file); do ...; done`
B. `while IFS= read -r line; do ...; done < file`
C. `cat file | for line; do ...; done`
D. `tail -f file | xargs`

### 26. Difference between `'single'` and `"double"` quotes:
A. Same
B. Single = literal; double = variable + command substitution
C. Single splits, double doesn't
D. Only double quotes work in bash

### 27. To redirect BOTH stdout and stderr to `/var/log/job.log`:
A. `cmd > /var/log/job.log`
B. `cmd > /var/log/job.log 2>&1`
C. `cmd 2>&1 > /var/log/job.log`
D. `cmd > log 2>log`

### 28. The cron expression for "every 15 minutes" is:
A. `0 */15 * * *`
B. `*/15 * * * *`
C. `15 * * * *`
D. `* 15 * * *`

### 29. `sed -i 's/old/new/g' file.txt`:
A. Prints substitutions to stdout
B. Edits in place, replacing every occurrence of `old` per line
C. Edits in place, replacing first occurrence per line
D. Creates a `.bak` file by default

### 30. Print the home directory (6th field) for every user in /etc/passwd:
A. `awk '{print $6}' /etc/passwd`
B. `awk -F: '{print $6}' /etc/passwd`
C. `cut -f6 /etc/passwd`
D. `grep ':' /etc/passwd | cut -d: -f6`

### 31. A systemd timer ensures missed jobs run at next boot via:
A. `OnBoot=true`
B. `Restart=on-failure`
C. `Persistent=true`
D. `RemainAfterExit=yes`

### 32. The exit code convention "command not found" is:
A. 0
B. 1
C. 126
D. 127

### 33. In bash, `${VAR:?error msg}` does what when VAR is unset?
A. Substitutes "error msg"
B. Sets VAR to "error msg"
C. Prints "error msg" to stderr and exits non-zero
D. Echoes nothing

### 34. The `local` keyword inside a bash function:
A. Marks the variable read-only
B. Scopes the variable to the function only
C. Makes it persistent
D. Exports it to subprocesses

### 35. Inside `[[ ... ]]`, the regex match operator is:
A. `==`
B. `=~`
C. `=*`
D. `like`

### 36. A cron job doesn't find `aws` even though it's in `/usr/local/bin/`. The cause is most likely:
A. AWS CLI isn't installed
B. cron uses a minimal PATH; use absolute paths or export PATH
C. AWS region isn't set
D. cron only runs as root

### 37. A bad `/etc/fstab` line drops the system to emergency mode at boot. The recovery step is:
A. Reinstall the OS
B. Boot to rescue.target, fix the fstab line, reboot
C. `mkfs.ext4 /`
D. `grub-install --force`

### 38. The drop-in pattern for customizing a distro-supplied systemd unit:
A. Edit `/lib/systemd/system/<unit>.service` directly
B. `systemctl edit <unit>` creates an override in `/etc/systemd/system/<unit>.service.d/`
C. Copy the unit to /tmp and edit it
D. Use `crontab -e`

### 39. To list all packages providing `/usr/bin/foo` on RHEL (search repos, not just installed):
A. `rpm -qf /usr/bin/foo`
B. `dnf provides /usr/bin/foo`
C. `which foo`
D. `dnf search foo`

### 40. The XFS filesystem's resize behavior is:
A. Grow + shrink online
B. Grow only — cannot shrink
C. Shrink only
D. Neither

### 41 (Scenario PBQ). A user complains an nginx-served file returns 404 despite the file existing and being world-readable. You confirm `/srv/site/index.html` exists with 644 perms. SELinux is enforcing. What's the FIRST diagnostic command?
A. `chmod 777 /srv/site/index.html`
B. `setenforce 0`
C. `ausearch -m AVC -ts recent`
D. `systemctl restart nginx`

### 42 (Scenario PBQ). Match each command to the file it would edit (or read) to make a CHANGE PERSISTENT:
- (a) Set DNS server to 1.1.1.1
- (b) Change default systemd target to multi-user.target
- (c) Add a permanent firewalld port
- (d) Set a kernel parameter at boot

A. (a) `nmcli con mod ipv4.dns 1.1.1.1`, (b) `systemctl set-default multi-user.target`, (c) `firewall-cmd --add-port=... --permanent`, (d) drop a file in `/etc/sysctl.d/`
B. (a) edit /etc/resolv.conf directly, (b) `init 3`, (c) `iptables -I INPUT`, (d) `sysctl -w`
C. (a) `nmcli con mod ipv4.dns 1.1.1.1`, (b) `runlevel 3`, (c) `firewall-cmd --add-port=...`, (d) `/etc/rc.local`
D. (a) `echo nameserver 1.1.1.1 > /etc/resolv.conf`, (b) `systemctl isolate multi-user.target`, (c) `firewall-cmd --add-service=...`, (d) `/proc/sys/...`

### 43. A junior admin ran `usermod -G developers alice` (no `-a`). What happened?
A. Alice is now in developers AND her previous groups
B. Alice is now ONLY in developers; her previous secondary groups are gone
C. Alice is locked out
D. Nothing changes

### 44. Which command FORCES `alice` to change her password at next login?
A. `passwd -e alice` (or `chage -d 0 alice`)
B. `usermod -p alice`
C. `chage -m 0 alice`
D. `passwd -d alice`

### 45 (Scenario PBQ). A team needs to spec the right cron line for "every weekday (Mon-Fri) at 22:30". Which is correct?
A. `30 22 * * 1-5 /opt/run.sh`
B. `22 30 * * 1-5 /opt/run.sh`
C. `30 22 1-5 * * /opt/run.sh`
D. `*/30 22 * * 1-5 /opt/run.sh`

---

## 🎯 Answer Key (No Cheating!)

```
1. C    11. B   21. B   31. C   41. C
2. B    12. B   22. B   32. D   42. A
3. B    13. C   23. B   33. C   43. B
4. B    14. B   24. B   34. B   44. A
5. A    15. B   25. B   35. B   45. A
6. B    16. B   26. B   36. B
7. C    17. B   27. B   37. B
8. B    18. B   28. B   38. B
9. A    19. B   29. B   39. B
10. C   20. B   30. B   40. B
```

### Why #41 = C
SELinux is the most-likely culprit when permissions are fine but access fails on RHEL. `ausearch -m AVC -ts recent` surfaces the denial. `setenforce 0` is the "I give up" answer — the exam marks it wrong.

### Why #42 = A
- (a) nmcli persists DNS across reboots via the connection profile
- (b) `set-default` (NOT `isolate`) persists the boot target
- (c) `--permanent` plus `--reload` is the firewalld persistent pattern
- (d) /etc/sysctl.d/ is read by systemd-sysctl at boot

---

## Detailed answer rationales

**Q1. Answer: C — initramfs.** The initramfs is the in-memory root with kernel modules (storage, encryption, RAID, FS drivers) needed to mount the real root. UEFI runs first, GRUB loads the kernel + initramfs, then systemd takes over after root pivot.

**Q2. Answer: B — `grub2-mkconfig -o /boot/grub2/grub.cfg`.** On RHEL/CentOS/Fedora. Debian uses `update-grub` (which wraps `grub-mkconfig -o /boot/grub/grub.cfg`). `grub-install` reinstalls the bootloader; `dracut -f` rebuilds the initramfs.

**Q3. Answer: B — `graphical.target`.** Runlevel 5 = multi-user with GUI. Runlevel 3 = `multi-user.target` (text). Runlevel 1/S = `rescue.target`.

**Q4. Answer: B — `systemctl daemon-reload`.** Always run after editing unit files. Without it, systemd uses the cached old version.

**Q5. Answer: A — `journalctl -k -b`.** `-k` kernel only; `-b` this boot.

**Q6. Answer: B — `After=` orders only; `Wants=` is dep.** Critical distinction. To both order AND require: combine `After=` with `Wants=` (weak) or `Requires=` (strong).

**Q7. Answer: C — `/opt`.** FHS specifies `/opt/<vendor>/` for third-party packages. /usr/local for locally compiled.

**Q8. Answer: B — Inodes exhausted.** Classic gotcha. `df -i` shows inode usage. Common with millions of tiny files.

**Q9. Answer: A — 750.** rwx (7) + r-x (5) + --- (0) = 750.

**Q10. Answer: C — SGID on directory.** `chmod g+s /srv/team` plus `chgrp devs /srv/team`. Files created inside inherit group `devs`.

**Q11. Answer: B — ACL is present.** Use `getfacl` to view.

**Q12. Answer: B — `setfacl -b file`.** `-b` (--remove-all) removes all extended ACLs, leaving just the base owner/group/other.

**Q13. Answer: C — `nofail`.** Without it, a missing device drops you to emergency mode. Pair with `x-systemd.device-timeout=` to bound the wait.

**Q14. Answer: B — XFS.** XFS grows but doesn't shrink. ext4 and Btrfs both shrink. ZFS partial.

**Q15. Answer: B — UPPERCASE S.** 4644 sets SUID but doesn't include execute, so the bit shows as `S` (set but won't fire). For working SUID: 4755.

**Q16. Answer: B — `dnf`.** Modern Red Hat. `yum` is the predecessor (still in RHEL 7, Amazon Linux 2). `apt` is Debian. `pacman` is Arch.

**Q17. Answer: B — `dpkg -S /usr/sbin/sshd`.** Debian low-level reverse lookup. RHEL equivalent: `rpm -qf`.

**Q18. Answer: B — `purge` also deletes configs.** `apt remove` keeps `/etc/<pkg>/`. `apt purge` removes them too.

**Q19. Answer: B — `rpm --import <key>`.** The correct fix. `gpgcheck=0` lowers security and is the exam-favorite wrong answer.

**Q20. Answer: B — `./configure && make && make install`.** The 30-year GNU convention.

**Q21. Answer: B — Universal cross-distro formats.** Snap (Canonical, snapd daemon), Flatpak (Red Hat/community, no daemon), AppImage (single file).

**Q22. Answer: B — Source installs aren't tracked.** Files copied by `make install` exist on disk but have no apt/rpm entry. Use `--prefix=/opt/<name>` so removal is `rm -rf /opt/<name>`.

**Q23. Answer: B — Shebang.** `#!` plus interpreter path. The kernel uses this to choose what interprets the script.

**Q24. Answer: B — Exit on errors, unset vars, pipe failures.** The defensive script header. Saves you from Steam-style `rm -rf "$EMPTY/"*` accidents.

**Q25. Answer: B — `while IFS= read -r line; do ...; done < file`.** `for line in $(cat file)` word-splits on whitespace.

**Q26. Answer: B — Single literal; double expands.** Most-tested bash fact.

**Q27. Answer: B — `cmd > file 2>&1`.** Order matters: redirect stdout first, then duplicate stderr to it. Reverse order sends stderr to original stdout (terminal).

**Q28. Answer: B — `*/15 * * * *`.** Every 15 min. `*/N` in any field = every N units.

**Q29. Answer: B — In-place, every occurrence per line.** `-i` in-place, `g` global. Without `g`, only first match per line.

**Q30. Answer: B — `awk -F: '{print $6}'`.** `-F:` sets the colon field separator. `$6` is the 6th field (home dir).

**Q31. Answer: C — `Persistent=true`.** systemd timer directive. Critical for laptops or servers that may be off when the trigger fires.

**Q32. Answer: D — 127.** 126 = found but not executable. 130 = killed by SIGINT (Ctrl-C).

**Q33. Answer: C — Print to stderr and exit.** Combined with `set -u`, double safety on unset vars.

**Q34. Answer: B — Scopes to function.** Without `local`, every var in a function is global — silent pollution. Always use `local`.

**Q35. Answer: B — `=~`.** Only inside `[[ ]]` (bash-only). Example: `[[ "$email" =~ @ ]]`.

**Q36. Answer: B — cron's minimal PATH.** cron's PATH is `/usr/bin:/bin`. Fix: absolute path or `export PATH=...` at script start.

**Q37. Answer: B — Boot to rescue.target, fix fstab, reboot.** At GRUB menu press `e`, append `systemd.unit=rescue.target`, Ctrl-X. Log in as root, fix fstab, reboot.

**Q38. Answer: B — `systemctl edit <unit>`.** Creates `/etc/systemd/system/<unit>.service.d/override.conf`. Distro file in `/lib/systemd/system/` stays untouched (survives package upgrades).

**Q39. Answer: B — `dnf provides /usr/bin/foo`.** Searches all configured repos. Debian equivalent: `apt-file search`.

**Q40. Answer: B — Grow only.** XFS has no online shrink. To shrink: backup + mkfs.xfs + restore.

**Q41. Answer: C — `ausearch -m AVC -ts recent`.** SELinux is the most-likely cause when DAC permissions are fine. The AVC denial will name the source/target contexts. Fix with `semanage fcontext` (NOT `setenforce 0`).

**Q42. Answer: A.** See above.

**Q43. Answer: B — Alice is now ONLY in developers.** Without `-a`, `usermod -G` REPLACES the secondary group list. Always use `-aG`.

**Q44. Answer: A — `passwd -e alice` (or `chage -d 0 alice`).** Both expire the password and force change at next login.

**Q45. Answer: A — `30 22 * * 1-5`.** Fields: minute=30, hour=22, dom=*, month=*, dow=1-5 (Mon-Fri). Minute comes first.

---

## 📊 Scoring

| Score | Verdict |
|-------|---------|
| 43–45 | 🏆 Excellent — proceed to Practice Exam 2 |
| 38–42 | ✅ On track. Review wrong answers, then continue Modules 5–8 |
| 32–37 | ⚠️ Re-study weak modules; redo this exam in 3 days |
| <32 | 🔁 Revisit Modules 1–4 in full |

---

## 🔍 Review Process

For EACH wrong answer:
1. Identify which module covered it
2. Re-read that module's Reading.md section
3. Add an Anki/flashcard for the concept
4. Try the question again in 3 days

---

➡️ When ready: Continue to Modules 5–8, then [Practice Exam 2](./Practice-Exam-2.md).
