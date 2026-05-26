# 📋 Module 3 Cheat Sheet: Package Management

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 🆚 apt vs dnf — Side-by-Side

| Operation | Debian / Ubuntu (apt) | RHEL / Fedora (dnf) |
|-----------|------------------------|----------------------|
| Refresh index | `apt update` | `dnf check-update` |
| Install | `apt install <pkg>` | `dnf install <pkg>` |
| Install local file | `apt install ./file.deb` | `dnf install ./file.rpm` |
| Remove (keep config) | `apt remove <pkg>` | `dnf remove <pkg>` |
| Remove + config | `apt purge <pkg>` | (no clean equivalent) |
| Upgrade all | `apt upgrade` | `dnf upgrade` |
| Search | `apt search <term>` | `dnf search <term>` |
| Show info | `apt show <pkg>` | `dnf info <pkg>` |
| List installed | `apt list --installed` | `dnf list installed` |
| Pkg owning file | `dpkg -S <path>` | `rpm -qf <path>` |
| Pkg providing file (repo search) | `apt-file search <path>` | `dnf provides <path>` |
| Auto-clean deps | `apt autoremove` | `dnf autoremove` |
| Hold/pin | `apt-mark hold <pkg>` | `dnf versionlock add <pkg>` |
| Transaction history | `/var/log/apt/history.log` | `dnf history` |
| Rollback | (manual) | `dnf history undo <id>` |

---

## 🔵 dpkg Quick Verbs

```bash
dpkg -i pkg.deb                # install (no deps!)
dpkg -r <pkg>                  # remove
dpkg -P <pkg>                  # purge
dpkg -l                        # list installed
dpkg -L <pkg>                  # files in package
dpkg -S /path                  # which pkg owns file
dpkg --info pkg.deb            # metadata
dpkg --contents pkg.deb        # files inside .deb
dpkg --configure -a            # finish half-installs
```

State codes in `dpkg -l`: `ii` = installed OK; `rc` = removed, config remains; `iU` = installed but unconfigured (broken).

---

## 🔴 rpm Quick Verbs

```bash
rpm -Uvh pkg.rpm               # Upgrade Verbose Hash
rpm -e <pkg>                   # erase (remove)
rpm -qa                        # query all
rpm -q <pkg>                   # is installed?
rpm -qi <pkg>                  # info
rpm -ql <pkg>                  # files
rpm -qf /path                  # which pkg owns
rpm -V <pkg>                   # verify integrity
rpm --import key.asc           # trust GPG key
rpm --checksig pkg.rpm         # verify signature
rpm -qa gpg-pubkey             # list trusted keys
```

---

## 📂 Repository Files

### apt
```
/etc/apt/sources.list                    (legacy single file)
/etc/apt/sources.list.d/*.list           (drop-ins, preferred)
/etc/apt/preferences.d/*                 (pinning)
/etc/apt/keyrings/*.gpg                  (modern key store)
```

Modern repo line:
```
deb [signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu jammy stable
```

### dnf
```
/etc/yum.repos.d/*.repo                  (one per repo)
/etc/pki/rpm-gpg/*                       (GPG keys)
/var/lib/dnf/history.sqlite              (transaction log)
```

Minimum repo file:
```ini
[repo-id]
name=Human Name
baseurl=https://example.com/path
enabled=1
gpgcheck=1
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-mykey
```

---

## 📦 Universal Packagers

| Format | Sponsor | Install cmd | Sandbox | Daemon? |
|--------|---------|-------------|---------|---------|
| **Snap** | Canonical | `snap install <name>` | Yes | snapd (systemd) |
| **Flatpak** | Red Hat + community | `flatpak install flathub <id>` | Yes (bubblewrap) | No |
| **AppImage** | community | `chmod +x app.AppImage && ./app.AppImage` | Per-app | No |

```bash
# Snap
snap list
snap refresh
snap remove <name>

# Flatpak
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
flatpak install flathub <id>
flatpak run <id>
flatpak update
```

---

## 🔨 Build From Source

```bash
tar xzf project-1.2.tar.gz && cd project-1.2
./configure --prefix=/usr/local        # detect deps, gen Makefile
make                                    # compile
sudo make install                       # copy artifacts
```

Toolchain meta-packages:
- Debian/Ubuntu: `apt install build-essential autoconf automake`
- RHEL/Fedora: `dnf groupinstall "Development Tools"`

🚨 **Source installs aren't tracked** by apt/dnf. Use `--prefix=/opt/myapp` for easy removal (`rm -rf /opt/myapp`).

---

## 🏆 Exam Power Phrases

When you see these in answers, they're often **right**:
- ✅ "Import the GPG key with `rpm --import`"
- ✅ "Use `dnf history undo` to roll back"
- ✅ "Run `apt update` after editing sources.list.d/"
- ✅ "Use `apt purge` to remove the config files"
- ✅ "Pin packages with `apt-mark hold`"

When you see these, they're often **wrong**:
- ❌ "Set `gpgcheck=0` in the .repo file"
- ❌ "Use `dpkg -i` to satisfy missing dependencies"
- ❌ "Source installs appear in `rpm -qa`"
- ❌ "`apt update` upgrades all packages"
- ❌ "Removing a snap also removes flatpak versions"

---

## 🗓️ Key Facts To Memorize Cold

- `apt update` = refresh metadata · `apt upgrade` = install upgrades
- `apt remove` keeps config · `apt purge` deletes it
- `dnf history undo <id>` rolls back ANY past transaction
- `rpm --import key.asc` registers a GPG public key
- Modern apt repos use `signed-by=` to scope a key to one repo
- `./configure --prefix=/usr/local` is the GNU default
- Snap → daemon (snapd) · Flatpak → no daemon · AppImage → single file
- EPEL = Extra Packages for Enterprise Linux (RHEL/Rocky/AlmaLinux add-on)
- `dpkg -S` and `rpm -qf` answer "which package owns this file?"

---

## ✏️ Quick Self-Check

Cover the answers and recite:
1. apt and dnf equivalents for: install, remove, search, show, list installed, file ownership query. ___
2. Where do `.repo` and `.list` files live? ___
3. Right way to add a third-party repo with GPG signing on Ubuntu 22.04? ___
4. What 3 commands compose the source-build sequence? ___
5. One command that rolls back the most recent dnf transaction? ___

If you can answer all 5 in under 60 seconds, you own this module. ✅

---

➡️ [Module 4: Bash Scripting & Automation](../Module-04-Bash-Scripting/Reading.md)
