# Module 8: Linux Security & Hardening 🔒

> **Why this module matters:** Domain 2 (Security) is 21% of XK0-005 about 19 questions and most of them live here. SELinux alone gets 4–6 questions. AppArmor, LUKS, GPG, fail2ban, auditd, sysctl, and SSH (Secure Shell) hardening fill the rest. PBQs are notorious for "SELinux blocked nginx from reading a custom path, fix it" scenarios. This module makes SELinux less mysterious and the rest of the hardening stack actionable.

> **Prerequisites for this module.** You should be comfortable with:
> - Module 2 (permissions), DAC is the foundation MAC extends
> - Module 5 (PAM, sudo), auth controls
> - Module 6 (SSH, firewalld), most hardening is at these boundaries

---

## 🍕 A Story: SELinux Is "Broken" (Spoiler, It's Working)

Meet Liam. He's deploying a custom Python web app on RHEL 9. He configures nginx to serve from `/srv/myapp/static/` and `systemctl restart nginx` works. But every web request to a static asset returns 403:

```bash
$ curl -I http://localhost/static/logo.png
HTTP (Hypertext Transfer Protocol)/1.1 403 Forbidden
```

He checks file permissions, all `644 nginx:nginx` and nginx can definitely `cat` the files via `sudo -u nginx cat /srv/myapp/static/logo.png`. He restarts nginx. He bounces SELinux. Same result.

He runs:

```bash
$ sudo ausearch -m AVC -ts recent
type=AVC msg=audit(1716...): avc:  denied  { read } for  pid=1234 comm="nginx"
  name="logo.png" dev="dm-0" ino=131073 scontext=system_u:system_r:httpd_t:s0
  tcontext=system_u:object_r:default_t:s0 tclass=file permissive=0
```

There it is. SELinux is blocking nginx (label `httpd_t`) from reading files labeled `default_t`. The web root SHOULD be labeled `httpd_sys_content_t`, the standard label for "files that web servers may read." But `/srv/myapp/` was created by an Ansible task that didn't apply any SELinux context, so it inherited `default_t` from `/srv/`.

He fixes it in two parts:

```bash
# 1. Add a persistent file-context rule for the whole directory tree
sudo semanage fcontext -a -t httpd_sys_content_t '/srv/myapp(/.*)?'

# 2. Apply the new label to existing files
sudo restorecon -Rv /srv/myapp
```

`curl -I` now returns `200 OK`. Total debugging time: 12 minutes once he ran `ausearch`. Without ausearch, hours of "why is this broken when permissions are fine."

This module gives you the mental model and the four commands that solve 90% of SELinux problems: `getenforce`, `ausearch -m AVC`, `semanage fcontext`, `restorecon`.

---

## 🧱 The Three-Layer Access Model

Linux+ tests **three layers** of access control that all apply simultaneously:

```
┌─────────────────────────────────────────────────────────────┐
│  Layer 3: MAC (Mandatory Access Control)                    │
│    SELinux or AppArmor                                       │
│    Set by policy; even root cannot easily bypass             │
├─────────────────────────────────────────────────────────────┤
│  Layer 2: ACL (POSIX Access Control Lists)                  │
│    setfacl / getfacl                                         │
│    Per-user / per-group extensions to DAC                    │
├─────────────────────────────────────────────────────────────┤
│  Layer 1: DAC (Discretionary Access Control)                │
│    chmod / chown, the rwx triad + SUID/SGID/sticky          │
│    Owner-controlled                                          │
└─────────────────────────────────────────────────────────────┘
```

A request must pass **all three** layers to succeed. A common debugging mistake is fixing DAC (`chmod 777`) when the real block is MAC (SELinux). The exam loves this.

---

## 🛡️ SELinux (RHEL/CentOS/Fedora default)

SELinux (Security-Enhanced Linux) was developed by the NSA and merged into the mainline kernel in 2003. It's **type-enforcement-based MAC**: every file and every process has a **label** (a security context). The policy says which labels can interact.

### Modes

| Mode | Behavior |
|------|----------|
| **enforcing** | Block disallowed actions AND log them. Production default. |
| **permissive** | LOG denials but ALLOW the action. Useful for debugging policy. |
| **disabled** | SELinux is off entirely. Cannot enable without reboot. |

```bash
getenforce                                 # current mode
sestatus                                   # detailed status
setenforce 0                               # set permissive (runtime, root)
setenforce 1                               # set enforcing
```

Persistent change: edit `/etc/selinux/config`:
```
SELINUX=enforcing                          # or permissive or disabled
SELINUXTYPE=targeted                       # the policy type (almost always targeted)
```

🚨 **Trap on the exam:** Switching from enforcing/permissive to **disabled** (or vice versa) requires a REBOOT, and a full filesystem relabel on next boot (touch `/.autorelabel`). Switching between enforcing and permissive is live via `setenforce`.

### Contexts (labels)

Every file and process has a context: `user:role:type:level`.

```bash
ls -Z /var/www/html/
# -rw-r--r--. root root system_u:object_r:httpd_sys_content_t:s0 index.html
#                       ^^^^^^^^^ ^^^^^^^^ ^^^^^^^^^^^^^^^^^^^^^ ^^
#                       user      role     TYPE (the part that matters most)  level

ps -eZ | grep nginx
# system_u:system_r:httpd_t:s0   1234 ?  00:00:01 nginx
```

The **type** is what's tested by policy. `httpd_t` (nginx process) is allowed to read `httpd_sys_content_t` (web content) but NOT `default_t` (random untyped files). That's why Liam's app was blocked.

### Useful types

| Type | Means |
|------|-------|
| `httpd_sys_content_t` | Files nginx/httpd can read |
| `httpd_sys_rw_content_t` | Files nginx/httpd can read AND write |
| `httpd_log_t` | Web server log files |
| `ssh_home_t` | Files in users' ~/.ssh/ |
| `etc_t` | Files under /etc |
| `bin_t` | Executable binaries |
| `tmp_t` | Files under /tmp |
| `default_t` | "untyped", usually means SELinux can't decide what this is |
| `unconfined_t` | Process running outside SELinux confinement (e.g. shells of users in unconfined role) |

### Common SELinux commands

```bash
ls -Z file                                 # show context
ps -eZ                                     # process contexts
id -Z                                      # YOUR context

chcon -t httpd_sys_content_t /srv/myapp    # set context (TEMPORARY, lost on relabel)
chcon -R -t httpd_sys_content_t /srv/myapp # recursive

# PERSISTENT, add a file-context rule:
semanage fcontext -a -t httpd_sys_content_t '/srv/myapp(/.*)?'
restorecon -Rv /srv/myapp                  # apply the rule

# Remove a custom file-context rule:
semanage fcontext -d '/srv/myapp(/.*)?'

# Booleans, quick policy toggles
getsebool -a                               # list all
getsebool httpd_can_network_connect
setsebool -P httpd_can_network_connect on  # -P = persistent

# Ports, let a service listen on a non-standard port
semanage port -a -t ssh_port_t -p tcp 2222 # allow sshd on 2222
semanage port -l | grep ssh                # what ssh ports are allowed?
```

### Debugging SELinux denials

When something is blocked, SELinux writes an **AVC** (Access Vector Cache) message to the audit log.

```bash
ausearch -m AVC -ts recent                 # AVC denials in the last few min
ausearch -m AVC -ts today
ausearch -m AVC --raw                      # unparsed format

# Friendlier tool:
sealert -a /var/log/audit/audit.log        # human-readable explanations + suggested fixes
                                            # (in setroubleshoot-server package)
```

🎯 **Exam pattern:** *"After running `setenforce 0`, the app works. What does this prove?"* → SELinux is the cause of the block. The fix is policy-level, not turning SELinux off in production.

### audit2allow, generate a custom module from denials

```bash
# Generate a module from recent denials
ausearch -m AVC -ts recent | audit2allow -M mymodule

# Install it
semodule -i mymodule.pp
```

🚨 **Use audit2allow with caution.** It generates a policy that grants whatever was denied, without thinking about whether that grant is *appropriate*. For Liam's case, the right fix was `semanage fcontext` (labeling the path correctly), not `audit2allow` (granting `httpd_t` access to `default_t`, which would weaken policy site-wide).

---

## 🛡️ AppArmor (Ubuntu/SUSE default)

AppArmor is the path-based MAC alternative to SELinux. Simpler model, easier to read profiles, less powerful than SELinux's full label system. Ubuntu, SUSE, and Debian use AppArmor by default.

### Modes & commands

```bash
aa-status                                  # what profiles are loaded and which mode?
sudo aa-enforce /etc/apparmor.d/usr.sbin.nginx   # set to enforce mode
sudo aa-complain /etc/apparmor.d/usr.sbin.nginx  # set to complain (≈ permissive)
sudo aa-disable /etc/apparmor.d/usr.sbin.nginx   # disable
sudo systemctl reload apparmor             # apply profile changes
```

### Profile structure

```
# /etc/apparmor.d/usr.sbin.nginx (simplified)
#include <tunables/global>

/usr/sbin/nginx {
  #include <abstractions/base>
  #include <abstractions/nameservice>

  capability dac_override,
  capability setgid,
  capability setuid,

  /etc/nginx/** r,
  /var/log/nginx/* w,
  /var/www/** r,
  /run/nginx.pid w,

  network inet stream,
  network inet6 stream,
}
```

| Permission | Means |
|------------|-------|
| `r` | read |
| `w` | write |
| `a` | append only |
| `x` | execute (with profile transitions) |
| `m` | memory-map |
| `k` | lock |

🎯 **Exam pattern:** *"On Ubuntu, what shows whether an AppArmor profile for nginx is in enforce mode?"* → `aa-status`.

### SELinux vs AppArmor at a glance

| Feature | SELinux | AppArmor |
|---------|---------|----------|
| Distros | RHEL family, Fedora | Ubuntu, SUSE, Debian |
| Model | Type enforcement (labels) | Path-based |
| Granularity | Very fine | Coarse-to-medium |
| Learning curve | Steep | Moderate |
| Config files | Policy modules (`.pp`), `semanage`, `semodule` | Text profiles in `/etc/apparmor.d/` |
| Default action when stuck | "Deny + log" | "Deny + log" |
| Modes | enforcing / permissive / disabled | enforce / complain / unconfined |

---

## 🔐 LUKS, Linux Unified Key Setup

LUKS is the standard Linux block-level encryption layer, used for full-disk-style encryption of partitions, LVM volumes, or files (via loop devices).

### Create a LUKS volume

```bash
sudo cryptsetup luksFormat /dev/sdb1       # WIPES the partition; sets up LUKS header
# Prompts: passphrase

sudo cryptsetup luksOpen /dev/sdb1 mydata  # unlock and map to /dev/mapper/mydata
# Now /dev/mapper/mydata is a usable block device

sudo mkfs.ext4 /dev/mapper/mydata
sudo mkdir -p /srv/encrypted
sudo mount /dev/mapper/mydata /srv/encrypted
```

### Persist via /etc/crypttab and /etc/fstab

```bash
# /etc/crypttab, opens at boot (prompts for passphrase or reads keyfile)
mydata  UUID=abc-123  none  luks
# (use a keyfile path instead of "none" for unattended boot, store the key on a separate USB!)

# /etc/fstab, mounts the resulting /dev/mapper/mydata
/dev/mapper/mydata  /srv/encrypted  ext4  defaults  0  2
```

🚨 **Trap on the exam:** After editing `/etc/crypttab` to add a new LUKS volume, you MUST rebuild the initramfs (`dracut -f` or `update-initramfs -u`) so the boot path can unlock it. This was the lesson from Module 1 and Module 7.

### Manage keys

```bash
sudo cryptsetup luksAddKey /dev/sdb1       # add a second passphrase
sudo cryptsetup luksRemoveKey /dev/sdb1    # remove a passphrase
sudo cryptsetup luksKillSlot /dev/sdb1 1   # kill specific slot
sudo cryptsetup luksHeaderBackup /dev/sdb1 --header-backup-file /root/luks-header.bin
```

🎯 **Exam pattern:** *"How do you unlock a LUKS volume?"* → `cryptsetup luksOpen <device> <mapper-name>`. *"How do you set it to auto-unlock at boot?"* → `/etc/crypttab` + initramfs rebuild.

---

## 🔑 GPG, File / Email Encryption & Signing

GPG (GNU Privacy Guard) is the file-level public-key crypto tool. Used for: signing tarballs, encrypting emails (PGP), verifying package signatures.

### Key management

```bash
gpg --gen-key                              # interactive: name, email, type, size
gpg --list-keys                            # public keys in your keyring
gpg --list-secret-keys                     # private keys you hold
gpg --export -a "Alice" > alice-public.asc # export public key (ASCII-armored)
gpg --import bob-public.asc                # import someone else's public key
gpg --delete-key "Bob"
```

### Encrypt / decrypt

```bash
# Encrypt FOR a recipient (using their public key)
gpg --encrypt --recipient alice@corp.com file.txt
# Produces file.txt.gpg

# Decrypt (using YOUR private key, only works if you're alice)
gpg --decrypt file.txt.gpg > file.txt

# Symmetric (passphrase-based, no keys)
gpg --symmetric file.txt
# Produces file.txt.gpg encrypted with the passphrase
gpg --decrypt file.txt.gpg
```

### Sign / verify

```bash
# Detached signature (separate .sig file, doesn't modify the original)
gpg --detach-sign --armor file.tar.gz      # produces file.tar.gz.asc
gpg --verify file.tar.gz.asc file.tar.gz

# Combined sign-and-encrypt
gpg --sign --encrypt --recipient alice@corp.com file.txt
```

🎯 **Exam pattern:** *"How do you verify a downloaded tarball was signed by the published key?"* → Import the publisher's public key, then `gpg --verify file.tar.gz.asc file.tar.gz`.

---

## 🚫 fail2ban, Brute-Force Defense

fail2ban watches log files (sshd, nginx, postfix, etc.), matches failed-auth regexes, and bans the source IP via iptables/firewalld for a configurable duration.

### Install & enable

```bash
sudo apt install fail2ban                  # Debian
sudo dnf install fail2ban                  # RHEL (EPEL)

sudo systemctl enable --now fail2ban
sudo fail2ban-client status                # see active jails
sudo fail2ban-client status sshd
```

### Configure a jail (`/etc/fail2ban/jail.local`)

```
[DEFAULT]
bantime  = 1h
findtime = 10m
maxretry = 5
backend  = systemd                         # use journald

[sshd]
enabled = true
port    = ssh
filter  = sshd
logpath = /var/log/auth.log

[nginx-http-auth]
enabled = true
filter  = nginx-http-auth
logpath = /var/log/nginx/error.log
```

```bash
sudo fail2ban-client reload
sudo fail2ban-client set sshd unbanip 1.2.3.4   # manually unban
```

🚨 **Trap on the exam:** fail2ban is a *defense in depth* tool. It's not a substitute for `PasswordAuthentication no` and key-based auth. The exam often pairs them, fail2ban handles password-protected services where you can't easily switch to keys (e.g., webmail).

---

## 🔍 auditd, Linux Audit Framework

auditd is the kernel-integrated audit subsystem. It records syscalls, file accesses, login events, and any rule you write, all to `/var/log/audit/audit.log`.

### Rules

```bash
# Watch a file for changes
sudo auditctl -w /etc/passwd -p wa -k passwd-changes
# Watch a directory
sudo auditctl -w /etc/ssh/ -p wa -k ssh-config

# Syscall-level rule
sudo auditctl -a always,exit -F arch=b64 -S execve -F uid>=1000 -k user-exec

# List active rules
sudo auditctl -l
```

Persist rules in `/etc/audit/rules.d/*.rules`:
```
-w /etc/passwd -p wa -k passwd-changes
-w /etc/ssh/sshd_config -p wa -k sshd-changes
-w /etc/sudoers -p wa -k sudo-changes
-w /etc/sudoers.d/ -p wa -k sudo-changes
```

Apply with `augenrules --load`.

### Query

```bash
ausearch -k passwd-changes                 # by key
ausearch -ts today -ui 1001                # by user
ausearch -m USER_LOGIN -sv no              # failed logins

aureport --summary                         # overall report
aureport --auth                            # authentication
aureport --login --summary                 # logins
```

`-p wa` = WATCH for Writes and Attribute-changes. `-k <key>` = tag for easy querying later.

---

## 🛡️ sysctl, Kernel Tunables (the Security Knobs)

sysctl exposes runtime kernel parameters under `/proc/sys/`. Critical for hardening.

```bash
sysctl -a                                  # list everything (huge)
sysctl net.ipv4.ip_forward                 # query one
sysctl -w net.ipv4.ip_forward=1            # runtime change

# Persistent: drop a file in /etc/sysctl.d/
echo 'net.ipv4.ip_forward = 0' > /etc/sysctl.d/99-no-forward.conf
sudo sysctl --system                       # apply all sysctl.d files
```

### Common hardening sysctls

```
# Disable IPv4 routing if this is not a router
net.ipv4.ip_forward = 0

# Disable IP source routing (defense against source-route attacks)
net.ipv4.conf.all.accept_source_route = 0

# Drop ICMP (Internet Control Message Protocol) redirects (defense against L2 MITM)
net.ipv4.conf.all.accept_redirects = 0
net.ipv4.conf.all.secure_redirects = 0

# Reverse-path filtering (anti-spoof)
net.ipv4.conf.all.rp_filter = 1

# Log packets with impossible addresses (martians)
net.ipv4.conf.all.log_martians = 1

# Disable ICMP broadcast responses (Smurf attack defense)
net.ipv4.icmp_echo_ignore_broadcasts = 1

# TCP (Transmission Control Protocol) SYN cookies (DDoS (Distributed Denial of Service) mitigation)
net.ipv4.tcp_syncookies = 1

# Address Space Layout Randomization
kernel.randomize_va_space = 2

# Prevent core dumps from SUID processes (info disclosure)
fs.suid_dumpable = 0
```

🎯 **Exam pattern:** *"This server is being used as a router but shouldn't be. Which sysctl disables IPv4 forwarding?"* → `net.ipv4.ip_forward = 0`.

---

## 🔐 SSH Hardening, The Core 10

Combine these in `/etc/ssh/sshd_config` for a hardened sshd:

```
Port 22                                    # (or non-standard)
Protocol 2                                 # never 1
PermitRootLogin no                         # or prohibit-password
PasswordAuthentication no                  # force keys
PubkeyAuthentication yes
ChallengeResponseAuthentication no
PermitEmptyPasswords no
MaxAuthTries 3
MaxSessions 5
LoginGraceTime 30
AllowGroups sshusers
ClientAliveInterval 300
ClientAliveCountMax 2
X11Forwarding no
UsePAM yes
LogLevel VERBOSE
Banner /etc/ssh/banner.txt                 # legal warning
```

Pair with:

- `firewall-cmd --add-service=ssh --permanent` (only the right zone)
- `fail2ban` watching `/var/log/secure` (RHEL) / `/var/log/auth.log` (Debian)
- Key-based auth + `~/.ssh/` permissions correct (Module 6)
- 2FA (Two-Factor Authentication) via PAM (e.g., `pam_google_authenticator.so`) for the truly paranoid

---

## 🔬 Scenario Walkthrough (PBQ-style thinking)

> **Scenario:** A RHEL 9 server runs an internal-tools API (Application Programming Interface). The CISO (Chief Information Security Officer) requires: (a) SELinux in enforcing mode; (b) only ssh on port 2222 (NOT 22) reachable; (c) only members of group `apiops` can SSH; (d) failed SSH logins must be banned for 1 hour after 5 attempts; (e) `/etc/passwd` modifications must be audit-logged with key "passwd-watch". You apply changes one at a time and verify. What's the minimum command set?

**Walkthrough:**

1. **SELinux enforcing:**
```bash
sudo setenforce 1
echo "SELINUX=enforcing" | sudo tee /etc/selinux/config  # (or edit, preserving SELINUXTYPE)
getenforce                                                 # confirm: Enforcing
```

2. **SSH on port 2222:**
```bash
sudo sed -i 's/^#*Port .*/Port 2222/' /etc/ssh/sshd_config
sudo semanage port -a -t ssh_port_t -p tcp 2222           # SELinux allow
sudo firewall-cmd --add-port=2222/tcp --permanent
sudo firewall-cmd --remove-service=ssh --permanent
sudo firewall-cmd --reload
sudo sshd -t && sudo systemctl restart sshd               # test then restart (we're moving the port)
```

3. **Only group `apiops` can SSH:**
```bash
sudo groupadd apiops 2>/dev/null
echo "AllowGroups apiops" | sudo tee -a /etc/ssh/sshd_config
sudo sshd -t && sudo systemctl reload sshd
```

4. **fail2ban with 5-retry / 1-hour ban:**
```bash
sudo dnf install -y epel-release && sudo dnf install -y fail2ban
sudo tee /etc/fail2ban/jail.d/sshd.local <<EOF
[sshd]
enabled  = true
port     = 2222
maxretry = 5
bantime  = 1h
logpath  = /var/log/secure
EOF
sudo systemctl enable --now fail2ban
sudo fail2ban-client status sshd
```

5. **Audit /etc/passwd changes:**
```bash
echo "-w /etc/passwd -p wa -k passwd-watch" | sudo tee /etc/audit/rules.d/passwd.rules
sudo augenrules --load
sudo auditctl -l | grep passwd-watch                       # confirm rule loaded
```

**Verify everything:**
```bash
getenforce                                                 # Enforcing
ss -tlnp | grep sshd                                       # listening on 2222 only
firewall-cmd --list-all                                    # 2222/tcp, no ssh service
ssh -p 2222 apiops_member@host                             # works
ssh -p 2222 other_user@host                                # rejected ("not allowed")
fail2ban-client status sshd                                # running
ausearch -k passwd-watch -ts today                         # any events
```

This is exactly the shape of a multi-part PBQ. Walk through systematically; verify each step.

---

## ⚠️ Exam Traps & Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "`chmod 777` fixes SELinux denials" | NO, DAC fix doesn't bypass MAC. Use `chcon`/`semanage fcontext` for the label, or `setsebool` for booleans. |
| "Switching SELinux from enforcing to permissive needs reboot" | NO, `setenforce 0` is live. Going to/from DISABLED needs reboot + relabel. |
| "Disabling SELinux is the production fix" | NEVER. Find the right label or boolean. |
| "`chcon` is persistent" | NO, `chcon` is overwritten by `restorecon` or any relabel. Use `semanage fcontext` for persistent. |
| "fail2ban replaces strong auth" | NO, it adds defense in depth. Keys-only SSH + fail2ban is the combo. |
| "LUKS decrypts the file system without a passphrase if you've added a keyfile" | True only if the keyfile is reachable at boot. Don't store the keyfile on the same encrypted disk. |
| "audit logs in syslog" | NO, auditd writes to `/var/log/audit/audit.log`, queryable with `ausearch`/`aureport`. |
| "AppArmor and SELinux can coexist" | They CAN coexist technically but are usually mutually exclusive in practice, one distro = one MAC system. |
| "`sysctl -w` persists" | NO, runtime only. Use files in `/etc/sysctl.d/`. |
| "`semanage port -a` is enough for a port change" | Combine with firewalld and sshd_config changes. SELinux is one of three layers. |

---

## 🎓 Key Terms To Know (Add to Flashcards!)

| Term | Definition |
|------|------------|
| **MAC vs DAC vs ACL** | The 3 access-control layers (MAC = SELinux/AppArmor; ACL extends DAC) |
| **SELinux modes** | enforcing / permissive / disabled |
| **`getenforce` / `setenforce`** | Runtime mode query / change |
| **Type (context)** | The label part SELinux policy enforces on (e.g., `httpd_t`, `httpd_sys_content_t`) |
| **`chcon`** | Change context (TEMPORARY) |
| **`semanage fcontext`** | Add a persistent file-context rule |
| **`restorecon -Rv`** | Apply persistent labels to disk |
| **SELinux boolean** | Quick policy toggle (e.g. `httpd_can_network_connect`) |
| **AVC denial** | The audit message when SELinux blocks something |
| **`ausearch -m AVC`** | Query AVC denials |
| **AppArmor modes** | enforce / complain / unconfined |
| **`aa-status`** | List loaded AppArmor profiles + modes |
| **LUKS** | Block-level disk encryption |
| **`cryptsetup luksFormat` / `luksOpen`** | Create / unlock LUKS volume |
| **`/etc/crypttab`** | Boot-time LUKS unlock map |
| **GPG** | File-level public-key crypto |
| **`gpg --encrypt -r`** | Encrypt for a recipient |
| **`gpg --verify`** | Verify a detached signature |
| **fail2ban** | Log-watching IP-banning daemon |
| **auditd** | Linux kernel audit framework |
| **`-w path -p wa -k key`** | auditd watch rule (writes + attr changes) |
| **sysctl** | Kernel runtime tunables |
| **`/etc/sysctl.d/`** | Persistent sysctl config |

### Acronyms cheat-row (Module 8)
| Acronym | Meaning |
|---------|---------|
| MAC | Mandatory Access Control |
| DAC | Discretionary Access Control |
| ACL | Access Control List |
| RBAC (Role-Based Access Control) | Role-Based Access Control |
| AVC | Access Vector Cache (SELinux denial message) |
| LUKS | Linux Unified Key Setup |
| LSM | Linux Security Module (SELinux/AppArmor framework) |
| GPG | GNU Privacy Guard |
| PKI (Public Key Infrastructure) | Public Key Infrastructure |
| SSH | Secure Shell |
| MFA (Multi-Factor Authentication) | Multi-Factor Authentication |
| TPM | Trusted Platform Module (hardware key store) |

---

## 📊 Case Study, Snowden, NSA, and Why You Have SELinux

**Situation.** In 1998, the United States National Security Agency (NSA) released the first public version of **SELinux** as a Linux kernel patch, drawing on decades of internal research into Mandatory Access Control models (Bell-LaPadula, Type Enforcement). Despite some initial community skepticism ("the NSA's hidden backdoor?"), SELinux underwent extensive academic review, Stephen Smalley (NSA, paper "Configuring the SELinux Policy"), Peter Loscocco (NSA, multiple foundational papers in *USENIX Security*), and external auditors (Red Hat, Tresys, Argonne National Lab). It was merged into the mainline Linux kernel in version 2.6.0 (December 2003).

**Decision.** Red Hat adopted SELinux as the default MAC layer in RHEL 4 (2005). For nearly two decades since, every RHEL/CentOS/Fedora server has SELinux *enforcing* by default. Despite engineer frustration ("disable SELinux" remained the top "fix" recommended in early Stack Overflow answers), the policy held, and over time, SELinux policy evolved to be remarkably comprehensive (default policy for nginx, apache, mariadb, postgresql, sshd, etc.). The exam-favored "first reflex on SELinux denial" went from "setenforce 0" to "ausearch + semanage".

**Outcome.** Edward Snowden's 2013 NSA document leaks accidentally validated SELinux. None of the leaked documents suggested SELinux contained a backdoor, even the most paranoid review confirmed the security model was sound. By 2024, SELinux confined Android (Google adopted it as **SEAndroid** in 2013, mandatory for all Android phones from 4.4), every modern RHEL deployment, every Fedora workstation, and a substantial subset of Ubuntu and Debian server installs.

**Lesson for the exam / for practitioners.** XK0-005 leans heavily on SELinux because it's *the* practical MAC layer in enterprise Linux. The exam pattern is always:

1. SELinux denied something.
2. The wrong fix is `setenforce 0` (the "I give up" answer).
3. The right fix is one of:

   - `setsebool -P <bool> on` (policy already has a toggle)
   - `semanage fcontext -a -t <type> 'path'` + `restorecon -R` (label correction)
   - `semanage port -a -t <type> -p tcp <port>` (non-standard port)
   - Generate a custom policy module with `audit2allow` (last resort)

Recognize this pattern and you'll answer almost every SELinux question on the exam in 30 seconds.

**Discussion (Socratic).**
- **Q1:** Many sysadmins still routinely run `setenforce 0` as the first response. Why is this culturally persistent despite the policy maturity? What's the educational fix?
- **Q2:** AppArmor's path-based model is "easier" but objectively less powerful than SELinux's label-based model. Why did Ubuntu choose AppArmor? Is there a market segment where this is the right choice?
- **Q3:** Should distro maintainers ship SELinux/AppArmor in *complain* mode for the first month after a major upgrade, then auto-switch to enforce? Argue both sides.

---

## ✅ Module 8 Summary

You now know:

- 🧱 The **three-layer access model**: DAC + ACL + MAC, all enforced simultaneously
- 🛡️ **SELinux**, modes, contexts, `chcon` vs `semanage fcontext`, booleans, AVC denials, `ausearch -m AVC`
- 🛡️ **AppArmor**, path-based MAC, `aa-status`, profile structure
- 🔐 **LUKS**, `cryptsetup luksFormat`/`luksOpen`, `/etc/crypttab`, initramfs rebuild
- 🔑 **GPG**, encrypt, decrypt, sign, verify, key management
- 🚫 **fail2ban**, jail config, ban times, integration with sshd
- 🔍 **auditd**, `-w path -p wa -k key`, `ausearch`, `aureport`
- 🛡️ **sysctl hardening**, common security sysctls + `/etc/sysctl.d/`
- 🔐 **SSH hardening**, the core 10 sshd_config directives

**Next steps:**
1. 🎥 Watch the curated videos: [Videos.md](./Videos.md)
2. ✏️ Take the quiz: [Quiz.md](./Quiz.md), aim for 22/26
3. 📋 Review the [Cheat-Sheet.md](./Cheat-Sheet.md) before bed
4. ➡️ **YOU'RE DONE WITH THE 8 MODULES.** Now take Practice Exam 1, then 2, then the Final Mock.

> **Where this leads.**
> - Inside this course: This is the capstone module, it interacts with EVERY previous module (Module 2's permissions, Module 5's sudo, Module 6's SSH, Module 7's LVM/LUKS).
> - Cross-course: CompTIA Security+ (course 09) extends every concept here with Zero Trust architecture, threat hunting, GRC/risk frameworks.
> - Practice: Practice Exam 2 has ~10 questions drawing from this module; the Final Mock has ~14.

---

## 📚 Further Reading (Optional)

**Primary sources:**
- 📄 [SELinux Project User Resources](http://selinuxproject.org/page/User_Resources) the canonical project page.
- 📄 [Red Hat SELinux User's and Administrator's Guide](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html/using_selinux/index), most authoritative free reference.
- 📄 Stephen Smalley & Peter Loscocco (2001). [*Integrating Flexible Support for Security Policies into the Linux Operating System*](https://www.nsa.gov/portals/75/documents/business/programs/SELinux-USENIX01.pdf). USENIX Annual Technical Conference. The foundational paper.
- 📄 [AppArmor wiki](https://gitlab.com/apparmor/apparmor/-/wikis/home).
- 📄 [cryptsetup man pages](https://man7.org/linux/man-pages/man8/cryptsetup.8.html), LUKS reference.
- 📄 [GnuPG documentation](https://gnupg.org/documentation/manuals.html).
- 📄 [Linux Audit Documentation (Red Hat)](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html/security_hardening/auditing-the-system_security-hardening).

**Practitioner / exam:**
- 📖 Sander van Vugt, *CompTIA Linux+ XK0-005 Cert Guide* (Pearson, 2023), Chapters 14 & 22.
- 📖 Sven Vermeulen, *SELinux System Administration* (Packt, 3rd ed., 2020), the most readable SELinux book.
- 📖 [CIS Linux Benchmarks](https://www.cisecurity.org/cis-benchmarks/), the industry-standard hardening checklist (free PDF after sign-up).
- 📖 [Lynis](https://cisofy.com/lynis/), open-source Linux audit/hardening tool; great for exploring what to harden.
