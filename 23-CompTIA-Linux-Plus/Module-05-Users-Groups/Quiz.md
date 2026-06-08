# ✏️ Module 5 Quiz: Users, Groups & sudo

> **Instructions:** Answer all 26 questions WITHOUT looking at the reading. Aim for 22/26 minimum.
>
> **Bloom distribution (this quiz):** Remember 6 · Understand 6 · Apply 7 · Analyze/Evaluate 6 · Create 1.

---

## Questions

### Q1. How many colon-separated fields does `/etc/passwd` have per line? *(Remember)*
A. 5
B. 7
C. 9
D. 4

---

### Q2. What does the `x` in the password field of `/etc/passwd` mean? *(Understand)*
A. The user is locked
B. The actual password hash is stored in `/etc/shadow`
C. The user has no password
D. The user is exempt from password aging

---

### Q3. To add user `dora` to the secondary group `devs` WITHOUT removing other secondary memberships, use: *(Apply)*
A. `usermod -G devs dora`
B. `usermod -aG devs dora`
C. `useradd -G devs dora`
D. `groupmod -a dora devs`

---

### Q4. The CORRECT way to edit `/etc/sudoers` is: *(Remember)*
A. `sudo vim /etc/sudoers`
B. `sudo visudo`
C. `sudo nano /etc/sudoers && sudo sudo-check`
D. `sudo cp /etc/sudoers /etc/sudoers && vim /etc/sudoers`

---

### Q5. Which `chage` command shows password aging info for user `alice`? *(Remember)*
A. `chage -l alice`
B. `chage alice`
C. `chage -i alice`
D. `passwd -S alice`

---

### Q6. A sudoers line `%wheel ALL=(ALL) NOPASSWD: ALL` means: *(Understand)*
A. Only root can use sudo
B. Members of the wheel group can run any command as any user without a password prompt
C. Everyone in /etc/passwd can use sudo
D. The wheel group cannot use sudo

---

### Q7. To create a user `svc-app` that CANNOT log in interactively, with a home dir at `/var/lib/svc-app`, the BEST command is: *(Apply)*
A. `useradd -m -d /var/lib/svc-app -s /sbin/nologin svc-app`
B. `useradd -m svc-app && passwd -d svc-app`
C. `adduser --no-shell svc-app`
D. `useradd svc-app && rm /home/svc-app`

---

### Q8. Where do password hashes ACTUALLY live? *(Remember)*
A. `/etc/passwd`
B. `/etc/shadow`
C. `/etc/gshadow`
D. `/var/lib/passwords/`

---

### Q9. Which command removes user `bob` AND his home directory? *(Apply)*
A. `userdel bob`
B. `userdel -r bob`
C. `usermod -L bob`
D. `passwd -d bob`

---

### Q10. The PAM control flag that DENIES IMMEDIATELY on failure (and skips remaining modules) is: *(Understand)*
A. `required`
B. `requisite`
C. `sufficient`
D. `optional`

---

### Q11. A user's `/etc/shadow` line starts with `!$6$...`. This means: *(Analyze)*
A. The hash is corrupted
B. The account is LOCKED (the `!` prefix disables login)
C. The user is a system account
D. The hash uses bcrypt

---

### Q12. To list ALL users including those from LDAP/SSSD (not just /etc/passwd), use: *(Apply)*
A. `cat /etc/passwd`
B. `getent passwd`
C. `awk -F: '{print $1}' /etc/passwd`
D. `ldapsearch -x`

---

### Q13. Which command forces `alice` to change her password at next login? *(Apply)*
A. `passwd -e alice`
B. `chage -d 0 alice` (or `passwd -e alice`)
C. `usermod -p alice`
D. Both A and B work

---

### Q14. The primary group of a user is determined by: *(Understand)*
A. Field 4 of `/etc/passwd` (the GID)
B. The first entry in `/etc/group`
C. Membership listing in `/etc/group`
D. The user's home directory permissions

---

### Q15. A sudoers line `bob ALL=(root) /usr/bin/systemctl restart nginx` lets bob: *(Understand)*
A. Run anything as root
B. Run specifically `systemctl restart nginx` as root (and nothing else)
C. Restart any service
D. Run nginx itself as root

---

### Q16. What does `passwd -S alice` show? *(Remember)*
A. The hash of alice's password
B. The password aging policy
C. The account status, locked (L), password set (P), or none (NP)
D. The shell

---

### Q17. The `setfacl -m u:juno:r /var/log/audit/audit.log` command grants juno: *(Apply)*
A. Write permission via ACL
B. Read permission via ACL (in addition to the regular owner/group/other bits)
C. Sudoers permission to view the log
D. Membership in the audit group

---

### Q18. Which file controls the DEFAULTS used by `useradd` (UID_MIN, PASS_MAX_DAYS, etc.) for new users? *(Remember)*
A. `/etc/passwd`
B. `/etc/login.defs`
C. `/etc/default/users`
D. `/etc/shadow.conf`

---

### Q19. A junior admin runs `usermod -G developers alice` (no `-a`). What's the consequence? *(Analyze)*
A. Alice is now in developers AND her previous groups
B. Alice is now ONLY in developers; her previous secondary groups are removed
C. Alice is locked out
D. Nothing changes

---

### Q20. To enforce a 60-day max password age on alice (existing user), use: *(Apply)*
A. Edit `/etc/login.defs` and set `PASS_MAX_DAYS 60`
B. `chage -M 60 alice`
C. `passwd -x 60 alice`
D. Both B and C work

---

### Q21. The conventional UID range for regular human user accounts (per most distro defaults) is: *(Understand)*
A. 0 – 99
B. 100 – 999
C. 1000 and above
D. 65534 and above

---

### Q22. Which command shows YOU what sudo rights you have on the current host? *(Remember)*
A. `sudo -h`
B. `sudo -l`
C. `id`
D. `getent passwd`

---

### Q23. PAM's `pam_faillock.so` module is typically used in which management group? *(Analyze)*
A. `password`
B. `session`
C. `auth`
D. `account`

---

### Q24. A drop-in sudoers file `/etc/sudoers.d/my-rules.bak` is on disk. Will sudo evaluate it? *(Evaluate)*
A. Yes, sudo reads everything in the directory
B. No, sudo ignores files containing `.` or ending with `~` (or `.bak` in many configurations); rename to `my-rules`
C. Yes, but only if owned by root
D. No, sudoers.d is disabled by default

---

### Q25. The CORRECT order to apply password aging to a newly-created user with `useradd` defaults you want enforced is: *(Evaluate)*
A. Edit `/etc/login.defs` first, then `useradd`, new user inherits the policy
B. Run `useradd` first, then `chage -M 60 -W 7` on the user
C. Edit `/etc/shadow` directly
D. Use `passwd -m 60` after creation

---

### Q26. **(Create-level)** Compose a sudoers drop-in (one line under `/etc/sudoers.d/web-team`) that lets ANY MEMBER of group `webadmins` (a) restart nginx, (b) reload nginx, and (c) run `tail -F /var/log/nginx/*.log`, ALL three without entering a password. No other commands. *(Create)*

> *Create-level note:* you're composing the safe path-restricted sudoers form using a group prefix and explicit commands.

A.
```
%webadmins ALL=(root) ALL
```
B.
```
%webadmins ALL=(root) NOPASSWD: /usr/bin/systemctl restart nginx, /usr/bin/systemctl reload nginx, /usr/bin/tail -F /var/log/nginx/*.log
```
C.
```
webadmins  ALL=(root) /usr/sbin/nginx
```
D.
```
@webadmins NOPASSWD: nginx, systemctl, tail
```

---

## 🎯 Answers + Explanations

### Q1: **B. 7**
username:x:UID:GID:GECOS:home:shell. Seven fields, colon-separated.

### Q2: **B. The actual password hash is stored in `/etc/shadow`**
The `x` is a placeholder dating back to when passwd was world-readable and shadow was introduced to hide hashes.

### Q3: **B. `usermod -aG devs dora`**
The `-a` (append) is CRITICAL. Without it, `-G` REPLACES the entire secondary group list. This is the most common usermod bug.

### Q4: **B. `sudo visudo`**
visudo locks the file, validates syntax on save, and offers re-edit on error. Directly editing sudoers risks an unparseable file that locks everyone out.

### Q5: **A. `chage -l alice`**
`-l` (list) shows current aging settings. `passwd -S alice` is also useful but shows only locked-status.

### Q6: **B. Members of wheel can run any command as any user without password**
`%wheel` = the wheel group. `ALL=(ALL)` = any host, as any user. `NOPASSWD: ALL` = no prompt, any command. (Classic RHEL admin group.)

### Q7: **A. `useradd -m -d /var/lib/svc-app -s /sbin/nologin svc-app`**
`-m` creates home, `-d` overrides default home path, `-s /sbin/nologin` makes interactive login impossible. The right pattern for service accounts.

### Q8: **B. `/etc/shadow`**
Hashes + aging info, root-only readable (mode 0640 or 0000).

### Q9: **B. `userdel -r bob`**
`-r` removes the home directory and mail spool too. Without it, /home/bob persists.

### Q10: **B. `requisite`**
- `required` continues running other modules then denies
- `requisite` denies IMMEDIATELY without running more modules
- `sufficient` allows immediately on success, continues on failure
- `optional` doesn't affect the outcome unless it's the only module

### Q11: **B. The account is locked**
Leading `!` (or `!!`) in the hash field disables login. The hash itself is preserved so the account can be unlocked with `passwd -u`.

### Q12: **B. `getent passwd`**
`getent` walks the Name Service Switch (NSS) chain: files, LDAP, SSSD, AD-joined sources. It's the only command that returns the unified view.

### Q13: **D. Both A and B work**
`passwd -e alice` and `chage -d 0 alice` both flag the account so the next login requires a password change.

### Q14: **A. Field 4 of /etc/passwd**
The primary group GID is in /etc/passwd field 4. Secondary groups come from /etc/group field 4 (the member list).

### Q15: **B. Run specifically `systemctl restart nginx` and nothing else**
The command is path-restricted. Bob cannot run `systemctl restart anything-else` because his rule lists the specific command.

### Q16: **C. Account status, L/P/NP/etc.**
`passwd -S` shows: username, status (L=locked, P=set, NP=no password), date last changed, min/max/warn/inactive days, full date of last change.

### Q17: **B. Read permission via ACL**
ACLs are additive, juno gets `r` on top of whatever the regular owner/group/other bits already grant. Doesn't affect sudo or group membership.

### Q18: **B. `/etc/login.defs`**
Settings: UID_MIN, UID_MAX, GID_MIN, PASS_MAX_DAYS, PASS_MIN_DAYS, PASS_WARN_AGE, ENCRYPT_METHOD. Only NEW accounts inherit; doesn't retroactively change existing.

### Q19: **B. Alice is now ONLY in developers**
The textbook `usermod -G` bug. Without `-a`, the existing secondary group list is REPLACED. Always use `-aG`.

### Q20: **D. Both B and C work**
`chage -M 60 alice` and `passwd -x 60 alice` both set the max-days field in /etc/shadow.

### Q21: **C. 1000 and above**
Default `UID_MIN` is 1000 on most modern distros. 0 = root. 1–999 = system accounts. 65534 = nobody.

### Q22: **B. `sudo -l`**
Lists every sudoers rule that matches you on this host. Run on every machine you operate.

### Q23: **C. `auth`**
faillock plugs into the auth stack to count failed authentications. (Counter increment happens at auth-time, decision in either auth or account depending on configuration.)

### Q24: **B. No, sudo ignores files with `.` or `~`**
By default, sudoers.d ignores files containing `.` (so `.bak`, `.orig`, `.old` are ignored) and files ending in `~`. This is deliberate, prevents accidental rule activation from temp files.

### Q25: **A. Edit `/etc/login.defs` first, then `useradd`**
login.defs only affects NEW accounts. If you want a baseline (e.g., PASS_MAX_DAYS=90), set it before creating users. For existing users, run `chage` explicitly.

### Q26: **B.**
- `%webadmins` = the group prefix
- `ALL=(root)` = on any host, as root
- `NOPASSWD:` = no prompt
- The three path-restricted commands are explicit (no wildcards)
- Choices A grant too much (ALL), C grants the wrong binary, D uses non-existent syntax (`@` is not a sudoers prefix).

---

## 📊 Score Yourself

- 25–26/26 → 🏆 Module 5 mastered.
- 22–24/26 → ✅ Solid. Note the gaps, then move on.
- 18–21/26 → ⚠️ Re-read the sudoers and PAM sections.
- <18/26 → 🔁 Restart the Reading.md and re-quiz tomorrow.

---

## 🃏 Add To Your Flashcards

- /etc/passwd 7 fields; /etc/shadow 9 fields; /etc/group 4 fields
- UID conventions: 0, 1–999, 1000+
- `useradd -m`, `usermod -aG`, `userdel -r`, `passwd -l`, `chage -M/-W/-E/-d`
- visudo, sudoers line format, NOPASSWD, %group, /etc/sudoers.d/
- PAM 4 mgmt groups: auth/account/password/session
- PAM 4 flags: required/requisite/sufficient/optional
- `pam_faillock`, `pam_pwquality`, `pam_unix`
- `getent passwd` for unified user lookup
- `/sbin/nologin` for service accounts

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 6, Networking, SSH & Firewalls](../Module-06-Networking-SSH/Reading.md)
