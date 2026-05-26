# 📋 Module 5 Cheat Sheet: Users, Groups & sudo

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 🗂️ The Three Files

### `/etc/passwd` (7 fields, world-readable)
```
username : x : UID : GID : GECOS : home : shell
```

### `/etc/shadow` (9 fields, root-only)
```
user : hash : last_change : min : max : warn : inactive : expire : reserved
```

🚨 Hash leading `!` or `!!` = LOCKED. `*` = no password set.

### `/etc/group` (4 fields)
```
groupname : x : GID : member1,member2,member3
```

---

## 🔑 UID Conventions

| Range | Use |
|-------|-----|
| 0 | root |
| 1–999 | system accounts |
| 1000+ | regular users (per `UID_MIN` in /etc/login.defs) |
| 65534 | `nobody` |

---

## 🛠️ User Lifecycle

```bash
useradd -m -s /bin/bash alice              # create with home + bash shell
useradd -m -d /var/lib/svc -s /sbin/nologin svc-app   # service account
useradd -r systemuser                       # system account (no aging)
useradd -m -G devs,sudo alice               # secondary groups
useradd -m -u 2000 -g 2000 alice            # specific UID/GID
useradd -e 2026-12-31 contractor            # expiration

passwd alice                                # set password (interactive)
echo "alice:NewPass" | chpasswd             # batch

usermod -aG devs alice                      # ADD to group (the -a is critical)
usermod -L alice                            # lock
usermod -U alice                            # unlock
usermod -s /sbin/nologin alice              # change shell
usermod -l new old                          # rename
usermod -d /opt/x -m alice                  # change home + move files

userdel alice                               # remove user (keep home)
userdel -r alice                            # remove user AND home

passwd -l alice                             # lock (same as usermod -L)
passwd -u alice                             # unlock
passwd -e alice                             # force change at next login
passwd -d alice                             # DELETE password (dangerous)
passwd -S alice                             # status (L/P/NP)

chage -l alice                              # list aging
chage -M 60 alice                           # max age 60 days
chage -m 7 alice                            # min age 7 days
chage -W 7 alice                            # warn 7 days before
chage -I 30 alice                           # disable 30 days after expire
chage -E 2026-12-31 alice                   # account expires
chage -d 0 alice                            # force change at next login
```

🚨 **`usermod -G` without `-a` REPLACES the secondary groups.** Always `-aG`.

---

## 👥 Group Management

```bash
groupadd devs                               # create group
groupadd -g 2500 finance                    # specific GID
groupadd -r sysgroup                        # system group

groupmod -n developers devs                 # rename
groupmod -g 2600 devs                       # change GID

groupdel devs                               # remove

gpasswd -a alice devs                       # add alice (same as usermod -aG)
gpasswd -d alice devs                       # remove from group
gpasswd -A bob devs                         # bob is group admin

newgrp devs                                 # change current shell's primary group
id                                          # show MY UID/GID/groups
id alice                                    # show alice's
groups alice                                # alice's groups only
```

---

## 🔓 sudo & sudoers

### sudoers line syntax
```
who    where = (as-whom)    [options]   what
alice  ALL   = (ALL:ALL)                ALL
%wheel ALL   = (ALL:ALL)    NOPASSWD:   ALL
bob    ALL   = (root)       NOPASSWD:   /usr/bin/systemctl restart nginx
```

| Prefix | Means |
|--------|-------|
| (none) | user name |
| `%name` | group name |
| `User_Alias`, `Cmnd_Alias`, `Host_Alias` | sudoers aliases |
| `Defaults` | global settings |

### Editing
```bash
sudo visudo                                # main file (validates syntax)
sudo visudo -f /etc/sudoers.d/web-team     # drop-in
sudo visudo -c                             # syntax check only
```

🚨 **NEVER edit /etc/sudoers with plain vi.** Use visudo.

🚨 **/etc/sudoers.d/ filenames must not contain `.` or end with `~`** (sudo ignores them).

### Audit yourself
```bash
sudo -l                                    # what can I run?
sudo -l -U alice                           # what can alice run?
```

---

## 🔌 PAM Crash Course

### File location
```
/etc/pam.d/<service>                       # one file per service (sshd, sudo, login, etc.)
```

### Management groups
| Group | Purpose |
|-------|---------|
| **auth** | Verify identity |
| **account** | Account validity (expired? time-restricted?) |
| **password** | Change password |
| **session** | Setup/teardown (mount homedir, MOTD, audit) |

### Control flags
| Flag | Effect |
|------|--------|
| `required` | Must succeed; continue then deny if failed |
| `requisite` | Must succeed; deny IMMEDIATELY on failure |
| `sufficient` | Allow IMMEDIATELY on success; continue on failure |
| `optional` | Doesn't affect outcome |

### Useful modules
| Module | Use |
|--------|-----|
| `pam_unix.so` | /etc/shadow auth |
| `pam_pwquality.so` | Password strength |
| `pam_faillock.so` | Lock after N failed attempts |
| `pam_limits.so` | /etc/security/limits.conf |
| `pam_lastlog.so` | Show last login |
| `pam_motd.so` | Message of the day |

---

## 🔍 Audit Commands

```bash
who                                        # current logged-in users
w                                          # who + what they're doing
last                                       # login history (wtmp)
last -F                                    # full timestamps
lastlog                                    # last login per user
lastb                                      # FAILED logins (btmp, root only)
id                                         # uid/gid/groups
getent passwd                              # all users (incl LDAP/SSSD)
getent group                               # all groups
journalctl -u sshd                         # sshd login attempts
journalctl _COMM=sudo                      # all sudo invocations
```

---

## 🏆 Exam Power Phrases

When you see these in answers, they're often **right**:
- ✅ "Use `visudo` to edit /etc/sudoers"
- ✅ "Add `-a` when modifying group membership"
- ✅ "Set shell to `/sbin/nologin` for service accounts"
- ✅ "Use `chage -E` for time-bound access"
- ✅ "Use `/etc/sudoers.d/` for modular rules"

When you see these, they're often **wrong**:
- ❌ "Edit /etc/sudoers with vim"
- ❌ "`usermod -G` adds to a group" (without `-a`)
- ❌ "/etc/passwd contains the password hash"
- ❌ "`passwd -l` deletes the password"
- ❌ "Files in /etc/sudoers.d named `*.bak` are read by sudo"

---

## 🗓️ Key Facts To Memorize Cold

- 7 fields in /etc/passwd, 9 in /etc/shadow, 4 in /etc/group
- `usermod -aG` ALWAYS, never plain `-G`
- `visudo` for sudoers editing — validates on save
- `%groupname` in sudoers = group rule
- `NOPASSWD:` for password-free commands
- `/sbin/nologin` for accounts that shouldn't shell-in
- `chage -d 0` forces password change at next login
- `getent passwd` for the unified view
- 4 PAM groups + 4 flags

---

## ✏️ Quick Self-Check

Cover the answers and recite:
1. Why `visudo` and not `vim /etc/sudoers`? ___
2. Difference between `usermod -G` and `usermod -aG`? ___
3. Where do password hashes actually live, and who can read that file? ___
4. Sudoers syntax to let group `webops` restart nginx without password? ___
5. PAM 4 management groups? PAM 4 control flags? ___

If you can answer all 5 in under 60 seconds, you own this module. ✅

---

➡️ [Module 6: Networking, SSH & Firewalls](../Module-06-Networking-SSH/Reading.md)
