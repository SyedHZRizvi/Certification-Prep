# 📋 Module 8 Cheat Sheet: Linux Security & Hardening

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 🧱 The 3-Layer Access Model

```
MAC (SELinux / AppArmor)     ← highest authority, even root struggles to bypass
ACL (setfacl / getfacl)       ← per-user / per-group extensions
DAC (chmod / chown)           ← the rwx base
```

All three must permit the action.

---

## 🛡️ SELinux Quick Reference

### Modes
```bash
getenforce                                 # Enforcing / Permissive / Disabled
setenforce 0                               # → Permissive (runtime)
setenforce 1                               # → Enforcing (runtime)

# Persistent: /etc/selinux/config
SELINUX=enforcing
SELINUXTYPE=targeted
```

🚨 Disabled ↔ enforcing/permissive requires REBOOT (and relabel).

### Contexts
```bash
ls -Z file                                 # show context
ps -eZ                                     # process contexts
id -Z                                      # YOUR context
```

Context = `user:role:type:level`, `type` is what policy cares about.

### Persistent label fix (the right way)
```bash
semanage fcontext -a -t httpd_sys_content_t '/srv/myapp(/.*)?'
restorecon -Rv /srv/myapp
```

Temporary (lost on relabel):
```bash
chcon -R -t httpd_sys_content_t /srv/myapp
```

### Booleans
```bash
getsebool -a                               # list all
getsebool httpd_can_network_connect
setsebool -P httpd_can_network_connect on  # -P = persistent
```

### Ports
```bash
semanage port -a -t ssh_port_t -p tcp 2222
semanage port -l | grep ssh
```

### Debug denials
```bash
ausearch -m AVC -ts recent                 # AVC denials
sealert -a /var/log/audit/audit.log        # human explanation (setroubleshoot-server)

# Last resort: generate custom policy
ausearch -m AVC -ts recent | audit2allow -M mymodule
semodule -i mymodule.pp
```

---

## 🛡️ AppArmor Quick Reference

```bash
aa-status                                  # loaded profiles + modes
sudo aa-enforce /etc/apparmor.d/usr.sbin.nginx
sudo aa-complain /etc/apparmor.d/usr.sbin.nginx
sudo aa-disable /etc/apparmor.d/usr.sbin.nginx
sudo systemctl reload apparmor
```

| AppArmor mode | ≈ SELinux mode |
|---------------|---------------|
| enforce | enforcing |
| complain | permissive |
| unconfined | (no enforcement) |

---

## 🔐 LUKS Quick Reference

```bash
# Create
cryptsetup luksFormat /dev/sdb1            # WIPES disk; prompts passphrase

# Unlock
cryptsetup luksOpen /dev/sdb1 mydata       # → /dev/mapper/mydata

# Format + mount
mkfs.ext4 /dev/mapper/mydata
mount /dev/mapper/mydata /srv/encrypted

# Persist
echo "mydata UUID=abc-123 none luks" >> /etc/crypttab
echo "/dev/mapper/mydata /srv/encrypted ext4 defaults 0 2" >> /etc/fstab
dracut -f       # RHEL, REBUILD INITRAMFS
# OR
update-initramfs -u    # Debian

# Key management
cryptsetup luksAddKey /dev/sdb1
cryptsetup luksRemoveKey /dev/sdb1
cryptsetup luksHeaderBackup /dev/sdb1 --header-backup-file /root/luks-header.bin
```

---

## 🔑 GPG Quick Reference

```bash
gpg --gen-key
gpg --list-keys
gpg --export -a "Alice" > alice.pub
gpg --import bob.pub

gpg --encrypt -r alice@corp.com file.txt          # → file.txt.gpg
gpg --decrypt file.txt.gpg > file.txt

gpg --symmetric file.txt                          # passphrase-based

gpg --detach-sign --armor file.tar.gz             # → file.tar.gz.asc
gpg --verify file.tar.gz.asc file.tar.gz

gpg --sign --encrypt -r alice@corp.com file.txt   # combined
```

---

## 🚫 fail2ban Quick Reference

`/etc/fail2ban/jail.local`:
```
[DEFAULT]
bantime  = 1h
findtime = 10m
maxretry = 5

[sshd]
enabled = true
port    = ssh
logpath = /var/log/auth.log   # Debian
# logpath = /var/log/secure   # RHEL
```

```bash
systemctl enable --now fail2ban
fail2ban-client status
fail2ban-client status sshd
fail2ban-client set sshd unbanip 1.2.3.4
fail2ban-client reload
```

---

## 🔍 auditd Quick Reference

```bash
# Watch files
auditctl -w /etc/passwd -p wa -k passwd-watch
auditctl -w /etc/sudoers -p wa -k sudo-watch

# Syscall rules
auditctl -a always,exit -F arch=b64 -S execve -F uid>=1000 -k user-exec

# Persist
cat >> /etc/audit/rules.d/00-base.rules <<EOF
-w /etc/passwd -p wa -k passwd-watch
-w /etc/sudoers -p wa -k sudo-watch
EOF
augenrules --load

# Query
ausearch -k passwd-watch                   # by key
ausearch -ts today -ui 1001                # by user/time
ausearch -m USER_LOGIN -sv no              # failed logins

aureport --summary
aureport --auth
aureport --login --summary
```

`-p wa` = Write + Attribute change. `-k` = tag.

---

## 🛡️ sysctl Hardening Cheat

```bash
sysctl -a                                  # everything
sysctl -w net.ipv4.ip_forward=0            # runtime
# Persistent:
echo 'net.ipv4.ip_forward = 0' > /etc/sysctl.d/99-no-forward.conf
sysctl --system
```

Common hardening:
```
net.ipv4.ip_forward = 0
net.ipv4.conf.all.accept_source_route = 0
net.ipv4.conf.all.accept_redirects = 0
net.ipv4.conf.all.rp_filter = 1
net.ipv4.conf.all.log_martians = 1
net.ipv4.icmp_echo_ignore_broadcasts = 1
net.ipv4.tcp_syncookies = 1
kernel.randomize_va_space = 2
fs.suid_dumpable = 0
```

---

## 🔐 SSH (Secure Shell) Hardening, The Core 10

```
Port 22                                    # or non-standard
Protocol 2                                 # never 1
PermitRootLogin no                         # or prohibit-password
PasswordAuthentication no                  # force keys
PubkeyAuthentication yes
PermitEmptyPasswords no
MaxAuthTries 3
AllowGroups sshusers
ClientAliveInterval 300
LogLevel VERBOSE
```

Pair with: firewalld zone, fail2ban, key-based auth, `~/.ssh/` mode 700.

---

## 🏆 Exam Power Phrases

When you see these in answers, they're often **right**:

- ✅ "Use `ausearch -m AVC` to debug SELinux denials"
- ✅ "Use `semanage fcontext` for persistent labels"
- ✅ "Use `setsebool -P` for persistent boolean changes"
- ✅ "Rebuild initramfs after /etc/crypttab change"
- ✅ "Combine SELinux + firewalld + sshd_config for port change"

When you see these, they're often **wrong**:

- ❌ "`setenforce 0` is the production fix"
- ❌ "`chmod 777` resolves SELinux denials"
- ❌ "`chcon` is persistent"
- ❌ "fail2ban replaces strong auth"
- ❌ "Skip initramfs rebuild after crypttab change"

---

## 🗓️ Key Facts To Memorize Cold

- SELinux modes: enforcing / permissive / disabled
- `getenforce` / `setenforce 0|1`
- Persistent SELinux: `semanage fcontext` + `restorecon`
- AVC denials → `ausearch -m AVC`
- AppArmor on Ubuntu: `aa-status`
- LUKS: format → open → mkfs → mount → /etc/crypttab + initramfs rebuild
- GPG verify: `gpg --verify file.asc file`
- fail2ban: jail.local with bantime/findtime/maxretry
- auditd: `-w PATH -p wa -k KEY`
- sysctl persistent: `/etc/sysctl.d/*.conf`

---

## ✏️ Quick Self-Check

Cover the answers and recite:

1. SELinux denial → which 3 things to try (in order)? ___
2. 3 commands to create + unlock + format a LUKS volume? ___
3. Verify a signed tarball with gpg? ___
4. fail2ban directives for "ban for 1h after 5 attempts in 10m"? ___
5. Persistent sysctl change procedure? ___

If you can answer all 5 in under 60 seconds, you own this module. ✅

---

🎉 **YOU FINISHED THE 8 MODULES.** 

➡️ Next: [Practice Exam 1](../Practice-Exams/Practice-Exam-1.md)
