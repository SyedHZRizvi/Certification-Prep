# Module 5: Users, Groups & sudo 👤

> **Why this module matters:** User and group management is bread-and-butter sysadmin work AND a Domain 2 (Security) exam favorite. The wrong line in `/etc/sudoers` can lock you out of root (or give an attacker the keys). The wrong UID can break NFS exports. The wrong PAM module ordering can disable password aging. PBQs will show you `/etc/passwd`, `/etc/shadow`, `/etc/group`, and a sudoers fragment and ask "what's the bug." This module makes the bugs visible.

> **Prerequisites for this module.** You should be comfortable with:
> - Module 2 (filesystem permissions), UIDs and GIDs are how file ownership works
> - Module 4 (bash), for scripting `useradd` operations
> - Running commands as root or via `sudo`

---

## 🍕 A Story: The Sudoers File That Locked Out Everyone

Meet Akua. Tuesday morning, she ssh's to her team's jump host to add a new junior admin to the `sudoers` group. She runs:

```bash
sudo vim /etc/sudoers
```

She adds a line at the bottom:

```
%sudo  ALL=(ALL:ALL) NOPASSWD: ALL
```

She saves with `:wq`. Then her shell connection drops because her laptop's WiFi flickered. She reconnects and tries `sudo systemctl restart nginx`, and gets:

```
>>> /etc/sudoers: syntax error near line 23 <<<
sudo: parse error in /etc/sudoers near line 23
sudo: no valid sudoers sources found, quitting
```

Nobody can sudo. She tries to fix it, but she's not root, and the only way to *become* root on this host is via sudo. The console login is via a Bastion ABAC system that itself requires sudo to bypass. She's locked out of her production jump host.

She spends 45 minutes raising a high-priority cloud-provider ticket to get console access via the rescue path. Three engineers wait. The fix: a stray space character before the `ALL=(ALL:ALL)` she pasted from a Stack Overflow snippet. `visudo` would have caught it at save time and refused to overwrite the file.

The exam tests this exact lesson: **always use `visudo` to edit sudoers; it validates syntax before saving**. We'll cover this and every other user-management trap.

---

## 🗂️ The Three Files: passwd, shadow, group

Every Linux user account is defined across three files. **MEMORIZE the structure.**

### `/etc/passwd`

```
alice:x:1001:1001:Alice Smith,Office 12,555-1234,,:/home/alice:/bin/bash
```

7 colon-separated fields:

| # | Field | Example | Notes |
|---|-------|---------|-------|
| 1 | Username | `alice` | Login name |
| 2 | Password | `x` | Placeholder; actual hash in /etc/shadow |
| 3 | UID | `1001` | User ID; 0 = root, 1–999 system, 1000+ regular |
| 4 | Primary GID | `1001` | Primary group ID |
| 5 | GECOS | `Alice Smith,Office 12,...` | Comment / full name / contact (originally General Electric Comprehensive OS field) |
| 6 | Home directory | `/home/alice` | $HOME |
| 7 | Login shell | `/bin/bash` | `/sbin/nologin` or `/bin/false` for no-login accounts |

Anyone can read /etc/passwd. The fact that the password column is `x` (not the hash) is what keeps it safe.

🎯 **Exam pattern:** *"How do I create a system account that cannot log in interactively?"* → Set the shell to `/sbin/nologin` (or `/bin/false`).

### `/etc/shadow`

```
alice:$6$abc...$xyz...:19500:0:99999:7:::
```

9 colon-separated fields. **Owned by root, mode 0640 (or 0000 on some distros), never world-readable.**

| # | Field | Example | Meaning |
|---|-------|---------|---------|
| 1 | Username | `alice` | Login name (same as passwd) |
| 2 | Password hash | `$6$salt$hash` | `$6$` = SHA-512; `$y$` = yescrypt; `*` = no password set; `!` = locked |
| 3 | Last change | `19500` | Days since 1970-01-01 of last password change |
| 4 | Min days | `0` | Days before password can be changed again |
| 5 | Max days | `99999` | Days password is valid (99999 = effectively never) |
| 6 | Warn days | `7` | Days before expiration to warn user |
| 7 | Inactive days | (blank) | Days after expiration before account is disabled |
| 8 | Expiration | (blank) | Days since 1970-01-01 when account expires |
| 9 | Reserved | (blank) | Future use |

🚨 **Trap on the exam:** A shadow entry beginning with `!` or `!!` = the account is locked (login disabled). A line with `*` = no password ever set (typical for system accounts). `*LK*` and other distro-specific prefixes also mean locked.

### `/etc/group`

```
devs:x:1500:alice,bob,carol
```

4 colon-separated fields:

| # | Field | Example | Notes |
|---|-------|---------|-------|
| 1 | Group name | `devs` | |
| 2 | Password | `x` | Group passwords are essentially never used |
| 3 | GID | `1500` | Group ID |
| 4 | Members | `alice,bob,carol` | Comma-separated, NO spaces. Users' primary group is NOT listed here (it's in /etc/passwd). |

### `/etc/gshadow` (rarely used)

Holds optional group password hashes and group administrators. Most environments leave it empty.

---

## 🔑 UID Conventions

| UID range | Purpose |
|-----------|---------|
| 0 | **root**, the all-powerful account |
| 1–99 (Debian/Ubuntu: 0–99) | Statically allocated system users (mail, daemon, bin) |
| 100–999 (RHEL: 200–999) | Dynamically allocated system users (created by package installs) |
| 1000+ | Regular user accounts (set by `UID_MIN` in `/etc/login.defs`) |
| 65534 | `nobody` / `nogroup`, used for unmapped NFS users |

🎯 **Exam pattern:** *"You want to see only regular users in `/etc/passwd`."* → `awk -F: '$3 >= 1000 { print $1 }' /etc/passwd`.

---

## 🛠️ User Management Commands

### `useradd`, the low-level user creator

```bash
useradd alice                            # creates user; may NOT create /home/alice
useradd -m alice                         # CREATE home dir (almost always what you want)
useradd -m -s /bin/bash alice            # specify shell
useradd -m -s /bin/bash -G devs,sudo alice  # secondary groups
useradd -m -u 2000 -g 2000 alice         # specific UID, GID
useradd -m -d /opt/alice alice           # custom home
useradd -r systemd-coredump              # SYSTEM account (low UID, no aging)
useradd -e 2026-12-31 contractor         # expiration date
```

After `useradd`, set a password:

```bash
passwd alice                             # interactive
echo "alice:NewPass!" | chpasswd         # batch (use openssl rand to generate)
```

Defaults that `useradd` reads:

- `/etc/default/useradd`, fallback shell, skeleton dir
- `/etc/login.defs`, UID_MIN, UID_MAX, PASS_MAX_DAYS, etc.
- `/etc/skel/`, files copied into every new home directory

### `adduser` (Debian-only Perl wrapper)

```bash
adduser alice                            # interactive: prompts for password, GECOS
```

`adduser` is friendlier (calls `useradd` under the hood with sane Debian defaults). RHEL family does NOT ship `adduser` as a separate command, `adduser` is a symlink to `useradd`.

🚨 **Trap on the exam:** "Which command creates a Debian user including home dir + password prompt?" → `adduser` on Debian; `useradd -m` + `passwd` on RHEL.

### `usermod`, modify an existing user

```bash
usermod -aG devs alice                   # add to secondary group ('-a' = append; CRITICAL)
usermod -G devs alice                    # WIPES other secondary groups, sets only 'devs'
usermod -L alice                         # lock (prepend ! to hash)
usermod -U alice                         # unlock
usermod -s /sbin/nologin alice           # change shell
usermod -l newname alice                 # rename login
usermod -d /opt/alice -m alice           # change home AND move files
usermod -e 2026-12-31 alice              # expire on date
usermod -e 1 alice                       # expire NOW (effectively disables)
```

🚨 **Trap on the exam:** `usermod -G group user` without `-a` WIPES the user's existing secondary groups. The exam loves to show a sysadmin "adding" a user to a group and accidentally removing them from 5 others. ALWAYS use `-aG`.

### `userdel`, remove a user

```bash
userdel alice                            # remove user (KEEP home dir)
userdel -r alice                         # remove user AND home dir
userdel -f alice                         # force (even if logged in)
```

### `passwd`, manage passwords

```bash
passwd alice                             # set/change alice's password (root or self)
passwd                                   # change own password
passwd -l alice                          # lock account (same as usermod -L)
passwd -u alice                          # unlock
passwd -e alice                          # force password change at next login
passwd -d alice                          # DELETE password (passwordless login, dangerous)
passwd -S alice                          # show status (L=locked, P=password set, NP=none)
```

### `chage`, change password aging

```bash
chage -l alice                           # list aging info
chage -M 60 alice                        # max days = 60
chage -m 7 alice                         # min days = 7 (cannot change again for 7 days)
chage -W 7 alice                         # warn 7 days before expiration
chage -I 30 alice                        # disable account 30 days after expiry
chage -E 2026-12-31 alice                # account expires 2026-12-31
chage -E -1 alice                        # remove expiration
chage -d 0 alice                         # force password change at next login
```

---

## 👥 Group Management Commands

```bash
groupadd devs                            # create group
groupadd -g 2500 finance                 # with specific GID
groupadd -r systemusers                  # system group (low GID)
groupmod -n developers devs              # rename
groupmod -g 2600 devs                    # change GID (won't update file ownership!)
groupdel devs                            # remove
gpasswd -a alice devs                    # add alice to devs (same as usermod -aG)
gpasswd -d alice devs                    # remove alice from devs
gpasswd -A bob devs                      # make bob a group admin (gshadow)
```

### Primary vs secondary groups

- **Primary** = the GID in `/etc/passwd` field 4. Used as the default group for new files.
- **Secondary** = listed in `/etc/group` field 4. User has all rights granted to any of these.

```bash
$ id alice
uid=1001(alice) gid=1001(alice) groups=1001(alice),27(sudo),1500(devs),1600(auditors)
                ^^^^^^^^^^^^^^                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                primary                       secondary (memberships in /etc/group)
```

`newgrp <group>` changes your active primary group for the current shell, new files will be created with that GID.

🎯 **Exam pattern:** *"How do you make all new files in a directory inherit the `devs` group regardless of who creates them?"* → SGID on the directory (`chmod g+s /srv/team`), as covered in Module 2.

---

## 🔓 sudo, Controlled Privilege Escalation

### How sudo works

When you run `sudo cmd`, sudo:

1. Checks `/etc/sudoers` (and `/etc/sudoers.d/*`) for a matching rule for your user/group
2. Optionally prompts for YOUR password (not root's)
3. If allowed, runs `cmd` as root (or as the target user specified)
4. Logs the invocation via syslog/journald

### `/etc/sudoers` line syntax

```
who  where = (as-whom)  what
```

Examples:

```
# User alice can run anything as anyone, on any host
alice    ALL=(ALL:ALL)  ALL

# Members of the wheel group (RHEL), can run anything
%wheel   ALL=(ALL:ALL)  ALL

# Members of sudo group (Debian), can run anything
%sudo    ALL=(ALL:ALL)  ALL

# Bob can restart nginx without a password
bob      ALL=(root)     NOPASSWD: /usr/bin/systemctl restart nginx

# Carol can run apt-get update as root but nothing else
carol    ALL=(root)     /usr/bin/apt-get update

# Wildcards (DANGEROUS, accepts ANY argument)
dave     ALL=(root)     /usr/bin/systemctl *
# Safer:
dave     ALL=(root)     /usr/bin/systemctl restart nginx, /usr/bin/systemctl status nginx
```

Each field:

- **who**, user (`alice`), group (`%groupname`), or `ALL`
- **where**, hostnames where rule applies (`ALL` = all hosts when sudoers is centralized via LDAP)
- **(as-whom)**, `(ALL:ALL)` means "as any user, as any group"; default `(root)` means as root
- **what**, full command path(s), or `ALL`

### sudoers special directives

```
# Aliases, define groups once, use many times
User_Alias  ADMINS = alice,bob,carol
Cmnd_Alias  REBOOTS = /sbin/reboot, /sbin/shutdown
Host_Alias  WEBSERVERS = web1.corp, web2.corp, web3.corp

ADMINS  WEBSERVERS = (root)  REBOOTS

# Defaults
Defaults   timestamp_timeout=15            # cache auth for 15 min
Defaults   passwd_tries=3
Defaults   requiretty
Defaults   env_reset
Defaults   secure_path="/sbin:/bin:/usr/sbin:/usr/bin"
Defaults   logfile="/var/log/sudo.log"
Defaults!REBOOTS log_input,log_output      # extra logging for reboots
```

### `/etc/sudoers.d/` drop-ins

Don't edit `/etc/sudoers` directly when you can avoid it. Create a file under `/etc/sudoers.d/`:

```bash
sudo visudo -f /etc/sudoers.d/web-admins
```

with content:

```
%webadmins  ALL=(root)  NOPASSWD: /usr/bin/systemctl restart nginx, /usr/bin/systemctl reload nginx
```

Drop-in files are parsed in lexical order. Filenames cannot contain `.` or end with `~` (sudoers ignores them).

### ALWAYS use `visudo`

```bash
sudo visudo                              # default: edit /etc/sudoers
sudo visudo -f /etc/sudoers.d/myfile     # edit a drop-in
sudo visudo -c                           # check syntax without editing
```

`visudo` locks the file (no concurrent edits), opens `$EDITOR` (defaults to vi/nano per distro), and validates syntax on save. If the syntax is broken, it warns you and offers to re-edit. **This is the entire reason you don't get locked out like Akua.**

🚨 **Trap on the exam:** `vim /etc/sudoers` is the wrong answer EVERY time. Use `visudo`.

### `sudo -l` (audit your own privileges)

```bash
sudo -l                                  # what can I run with sudo?
sudo -l -U alice                         # what can alice run? (as root)
```

The output lists every rule that matches you. Run this on any host you operate before you forget.

---

## 🔌 PAM, Pluggable Authentication Modules

PAM is the framework that login programs (sshd, login, su, sudo, passwd, gdm) use to authenticate users. It's modular: each service has a config file in `/etc/pam.d/<service>` that stacks small modules.

### A `/etc/pam.d/sshd` snippet (simplified)

```
#%PAM-1.0
auth       required     pam_env.so
auth       required     pam_unix.so          try_first_pass
auth       requisite    pam_succeed_if.so    uid >= 1000 quiet_success

account    required     pam_unix.so

password   required     pam_pwquality.so     retry=3
password   sufficient   pam_unix.so          sha512 shadow

session    required     pam_unix.so
session    optional     pam_motd.so
session    optional     pam_lastlog.so
```

### Four management groups

| Group | Purpose |
|-------|---------|
| **auth** | Authenticate the user (verify identity) |
| **account** | Check account validity (expiration, login-time restrictions) |
| **password** | Update authentication tokens (password changes) |
| **session** | Tasks at session start/end (mount homedir, MOTD, audit) |

### Control flags

| Flag | Effect |
|------|--------|
| `required` | Must succeed; if fails, continue (then deny), failure isn't visible to user immediately |
| `requisite` | Must succeed; if fails, deny IMMEDIATELY (don't run more modules) |
| `sufficient` | If succeeds, allow IMMEDIATELY (skip later modules); if fails, continue |
| `optional` | Outcome doesn't matter unless it's the only module |

### Common PAM modules

| Module | Purpose |
|--------|---------|
| `pam_unix.so` | Authenticate against /etc/shadow |
| `pam_pwquality.so` | Enforce password strength rules (replaces older pam_cracklib) |
| `pam_tally2.so` / `pam_faillock.so` | Lock account after N failed attempts |
| `pam_limits.so` | Enforce `/etc/security/limits.conf` (ulimit) |
| `pam_env.so` | Set environment vars from `/etc/security/pam_env.conf` |
| `pam_succeed_if.so` | Match conditions (UID range, hostname, time) |
| `pam_lastlog.so` | Show last login info |
| `pam_motd.so` | Display Message Of The Day |
| `pam_ssh.so` | Use SSH keys for authentication |

🎯 **Exam pattern:** *"After 5 failed logins, lock the account for 10 minutes."* → Edit `/etc/pam.d/system-auth` (RHEL) or `/etc/pam.d/common-auth` (Debian) to add `auth required pam_faillock.so preauth deny=5 unlock_time=600`.

### Password quality

`/etc/security/pwquality.conf` (used by `pam_pwquality.so`):

```ini
minlen = 12
minclass = 3
maxrepeat = 3
dcredit = -1    # require at least 1 digit
ucredit = -1    # require at least 1 uppercase
lcredit = -1    # require at least 1 lowercase
ocredit = -1    # require at least 1 special char
```

---

## 🔍 Auditing & Investigating

```bash
who                                      # who's logged in NOW
w                                        # who's logged in + what they're doing
last                                     # login history (reads /var/log/wtmp)
last -F                                  # full timestamps
lastlog                                  # last login per user
lastb                                    # FAILED logins (reads /var/log/btmp, root only)
faillog                                  # failure summary (older systems)
id                                       # YOUR uid, gid, groups
id alice                                 # alice's
groups alice                             # alice's groups
getent passwd                            # all users (including LDAP/SSSD-sourced)
getent group                             # all groups
finger alice                             # GECOS info (often not installed)
```

🎯 **Exam pattern:** *"List all users sourced from /etc/passwd AND any LDAP-backed directory."* → `getent passwd` (the unified resolver that respects nsswitch.conf).

---

## 🔬 Scenario Walkthrough (PBQ-style thinking)

> **Scenario:** You receive a ticket: "Junior admin `juno` should be able to (a) restart nginx without a password, (b) view but not modify `/var/log/audit/audit.log`, (c) NOT have shell access via SSH key, (d) be auto-disabled after 90 days. Implement all four."

**Walkthrough:**

1. **Restart nginx without password (a):**
```bash
sudo visudo -f /etc/sudoers.d/juno-nginx
```
Content:
```
juno  ALL=(root)  NOPASSWD: /usr/bin/systemctl restart nginx
```

2. **View audit.log (b):** The file is typically `-rw-------  root root`. Two approaches:

   - **ACL** (clean, scoped): `setfacl -m u:juno:r /var/log/audit/audit.log` plus ensure traversal: `setfacl -m u:juno:rx /var/log /var/log/audit`.
   - **Group membership** if a `audit` group exists with read on the file: `usermod -aG audit juno`.
   The ACL is cleaner because it doesn't grant juno any other audit-related rights.

3. **No SSH shell access (c):** Two equivalent paths:

   - **Shell-level:** `usermod -s /sbin/nologin juno`. Now SSH key auth still succeeds, but the session is immediately closed.
   - **sshd-level:** `Match User juno` block in `/etc/ssh/sshd_config`:
     ```
     Match User juno
         ForceCommand /usr/bin/systemctl restart nginx
         PermitTTY no
         X11Forwarding no
     ```
     This is BETTER, it forces a specific command on key login. But it's more complex and harder to audit. For this scenario, the `/sbin/nologin` route is simplest.

4. **Auto-disable after 90 days (d):**
```bash
chage -E $(date -d "+90 days" +%F) juno
# Or in absolute form:
chage -E 2026-08-24 juno
```
Verify with `chage -l juno`.

The PBQ might give you all four requirements and a sudoers fragment, and ask which combination of commands implements them. The pattern is: sudoers for `cmd`, ACL or group for `file`, shell change for `interactive lockout`, `chage -E` for time-bound access.

---

## ⚠️ Exam Traps & Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "Edit /etc/sudoers with vi" | NO, use `visudo`. It validates syntax and locks the file. |
| "`usermod -G` adds to a group" | NO, without `-a`, it REPLACES the user's secondary groups. Use `-aG`. |
| "`/etc/passwd` contains password hashes" | The `x` is a placeholder. Real hashes live in /etc/shadow. |
| "UIDs below 1000 are system, above are users" | Boundary is set by `UID_MIN` in `/etc/login.defs`. Default IS 1000 on most distros but verify. |
| "Locking with `passwd -l` deletes the password" | It PREPENDS `!` to the hash. The hash is still there. Unlock with `passwd -u`. |
| "Removing a user removes their files" | Only with `userdel -r`. Plain `userdel` leaves /home/alice. |
| "Primary group must appear in /etc/group's member list" | It's IMPLICIT (the GID in /etc/passwd). Listing it as a member of itself in /etc/group is redundant. |
| "`sudo -i` and `sudo su -` are identical" | Nearly equivalent in result (a root login shell) but invoke differently. `sudo -i` is the recommended form. |
| "PAM's `required` denies immediately" | `requisite` denies immediately. `required` continues then denies, the difference matters for what user sees and for chain logic. |
| "Password aging rules in /etc/login.defs apply to existing users" | NO, login.defs only seeds NEW accounts. For existing, use `chage`. |

---

## 🎓 Key Terms To Know (Add to Flashcards!)

| Term | Definition |
|------|------------|
| **/etc/passwd** | 7-field user database, world-readable |
| **/etc/shadow** | Password hashes + aging, root-only readable |
| **/etc/group** | 4-field group database |
| **UID / GID** | User / Group ID (0 = root, 1–999 system, 1000+ user) |
| **Primary group** | GID in /etc/passwd (used as default for new files) |
| **Secondary group** | Listed in /etc/group field 4 (additional rights) |
| **`useradd -m`** | Create user AND home directory |
| **`usermod -aG`** | APPEND to secondary groups (the `-a` is critical) |
| **`userdel -r`** | Delete user AND home |
| **`passwd -l` / `usermod -L`** | Lock account |
| **`chage`** | Manage password aging |
| **GECOS** | The full-name/comment field of /etc/passwd |
| **`/sbin/nologin`** | Shell that prints a message and exits, for system accounts |
| **`visudo`** | THE way to edit sudoers (validates syntax) |
| **NOPASSWD:** | sudoers directive, no password prompt |
| **`%groupname`** | sudoers prefix for group instead of user |
| **PAM** | Pluggable Authentication Modules, auth framework |
| **`/etc/pam.d/`** | Per-service PAM stacks |
| **`auth/account/password/session`** | The 4 PAM management groups |
| **`required/requisite/sufficient/optional`** | The 4 PAM control flags |
| **`pam_faillock.so`** | Modern lockout-on-failed-login module |

### Acronyms cheat-row (Module 5)
| Acronym | Meaning |
|---------|---------|
| UID / GID | User / Group ID |
| GECOS | General Electric Comprehensive OS (the comment field, historic) |
| PAM | Pluggable Authentication Modules |
| LDAP | Lightweight Directory Access Protocol (often the source of network users) |
| SSSD | System Security Services Daemon (modern LDAP/AD client) |
| NSS | Name Service Switch (decides where to look up users/groups) |
| MOTD | Message Of The Day |
| TTY | Terminal device |
| EUID | Effective UID |
| EGID | Effective GID |

---

## 📊 Case Study, The 2008 Debian OpenSSL Predictable Random Number Bug

**Situation.** In May 2008, security researcher Luciano Bello disclosed [CVE-2008-0166](https://nvd.nist.gov/vuln/detail/CVE-2008-0166) the Debian OpenSSL Predictable Random Number Generator vulnerability. A well-meaning patch applied to Debian's OpenSSL package in September 2006 had, in trying to silence Valgrind warnings about uninitialized memory, accidentally removed the code that mixed entropy into the OpenSSL PRNG (Pseudo-Random Number Generator). For ~20 months, every SSH key, every TLS cert, every GPG key, every random nonce generated on a Debian or Ubuntu system used a PRNG seeded entirely by the process PID a number with only 32,768 possible values.

**Decision.** The fix required regenerating every SSH host key, user SSH key, server TLS cert, and CA-signed cert generated on a Debian-family machine in that 20-month window. Debian and Ubuntu shipped a `ssh-vulnkey` tool to detect compromised keys. The OpenSSH package was patched to reject all known-bad keys in `authorized_keys`. Every CA had to revoke certs Debian users had submitted. Every sysadmin had to reissue tens or hundreds of keys.

**Outcome.** The blast radius was extraordinary. Estimates suggested 8% of all HTTPS keys in active use at the time were on the vulnerable list. Universities (notably Cambridge and Harvard) used this incident in cryptography curriculum for the next decade as "the most expensive line of code ever removed." The cleanup spanned 2008–2010.

**Lesson for the exam / for practitioners.** XK0-005 will not ask you to remember CVE-2008-0166 by ID. But it WILL test the *principles* this incident burned into the Linux community:

1. **SSH keys are bearer tokens.** A compromised private key = a compromised identity. Rotate when in doubt.
2. **System users (sshd, network daemons) should have `/sbin/nologin` shells.** The fewer ways into a host, the smaller the blast radius.
3. **Password aging is not optional for high-value accounts.** `chage -M 90 -W 14 root` is your friend.
4. **`AuthorizedKeysFile` and `~/.ssh/authorized_keys` permissions matter.** A loose ACL = key theft = re-Debian-OpenSSL situation for one user.
5. **Audit `who can sudo` regularly.** `sudo -l -U <user>` and `getent group sudo wheel`.

These all show up in PBQs as "what's wrong with this configuration" scenarios.

**Discussion (Socratic).**
- **Q1:** The Debian patch passed code review by an OpenSSL upstream maintainer who said "looks fine" without understanding what was being removed. Design a review process for security-sensitive open-source patches that would catch this. What's the trade-off vs maintainer fatigue?
- **Q2:** Should sysadmins have rotated SSH keys *every* N years even in the absence of CVE-2008-0166? Why or why not? What's the practical cost of mandatory key rotation?
- **Q3:** Modern Linux uses `/dev/urandom` + `getrandom(2)` syscalls + `haveged`/`rng-tools` to seed PRNGs. If you were teaching new sysadmins one principle from this incident, what would it be?

---

## ✅ Module 5 Summary

You now know:

- 🗂️ The **three files** (passwd, shadow, group), their fields and permissions
- 🔑 **UID conventions**, 0 = root, 1–999 system, 1000+ user
- 🛠️ **User lifecycle commands**, `useradd -m`, `usermod -aG`, `userdel -r`, `passwd`, `chage`
- 👥 **Primary vs secondary groups** and how `groupadd`/`gpasswd`/`newgrp` work
- 🔓 **sudo**, sudoers syntax, drop-ins, `visudo`, group-vs-user rules, NOPASSWD
- 🔌 **PAM**, the 4 management groups, the 4 control flags, common modules (`pam_faillock`, `pam_pwquality`)
- 🔍 **Auditing**, `who`, `w`, `last`, `lastb`, `id`, `getent`, `sudo -l`

**Next steps:**
1. 🎥 Watch the curated videos: [Videos.md](./Videos.md)
2. ✏️ Take the quiz: [Quiz.md](./Quiz.md), aim for 22/26
3. 📋 Review the [Cheat-Sheet.md](./Cheat-Sheet.md) before bed
4. ➡️ Move on: [Module 6, Networking, SSH & Firewalls](../Module-06-Networking-SSH/Reading.md)

> **Where this leads.**
> - Inside this course: [Module 6](../Module-06-Networking-SSH/Reading.md) sshd uses PAM and reads /etc/passwd; [Module 8](../Module-08-Security/Reading.md) auditd records every sudo invocation; ACLs from Module 2 + sudo from here = the layered access model.
> - Practice: Practice Exam 2 has ~8 questions drawing from this module; the Final Mock has ~11.

---

## 📚 Further Reading (Optional)

**Primary sources:**
- 📄 `man 5 passwd`, `man 5 shadow`, `man 5 group`, `man 5 sudoers`, `man 8 pam`, the canonical references.
- 📄 [The Linux Documentation Project Linux Administrator's Guide](https://tldp.org/LDP/sag/html/) old but the user-management chapters are timeless.
- 📄 [Sudo documentation](https://www.sudo.ws/docs/), Todd Miller's authoritative project site.
- 📄 [Linux-PAM Documentation](http://www.linux-pam.org/Linux-PAM-html/), the upstream PAM project docs.
- 📄 OpenSSH project, [sshd_config(5)](https://man.openbsd.org/sshd_config.5) man page (used in this module's case study scenario).

**Practitioner / exam:**
- 📖 Sander van Vugt, *CompTIA Linux+ XK0-005 Cert Guide* (Pearson, 2023), Chapters 6 & 14.
- 📖 Brian Ward, *How Linux Works* (No Starch, 3rd ed., 2021), Chapter 7 (System Configuration).
- 📖 Evi Nemeth et al., *UNIX and Linux System Administration Handbook* (Pearson, 5th ed., 2017), the user-management chapter is the most thorough in print.
