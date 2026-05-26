# ✏️ Module 3 Quiz: Package Management

> **Instructions:** Answer all 26 questions WITHOUT looking at the reading. Aim for 22/26 minimum.
>
> **Bloom distribution (this quiz):** Remember 6 · Understand 6 · Apply 7 · Analyze/Evaluate 6 · Create 1.

---

## Questions

### Q1. Which command shows the package that owns `/usr/sbin/sshd` on a RHEL system? *(Remember)*
A. `dpkg -S /usr/sbin/sshd`
B. `rpm -qf /usr/sbin/sshd`
C. `dnf info openssh-server`
D. `which sshd`

---

### Q2. The Debian equivalent of `dnf provides /usr/bin/foo` is: *(Understand)*
A. `apt search foo`
B. `apt-file search /usr/bin/foo`
C. `dpkg -S /usr/bin/foo`
D. `dpkg --provides foo`

---

### Q3. After editing `/etc/apt/sources.list.d/internal.list`, which command refreshes apt's metadata? *(Apply)*
A. `apt upgrade`
B. `apt update`
C. `apt full-upgrade`
D. `apt-cache rebuild`

---

### Q4. Which command roll backs the LAST dnf transaction? *(Remember)*
A. `dnf undo`
B. `dnf rollback`
C. `dnf history undo last`
D. `dnf revert`

---

### Q5. The difference between `apt remove nginx` and `apt purge nginx` is: *(Understand)*
A. `purge` is faster
B. `purge` also deletes configuration files in `/etc/nginx/`
C. `remove` keeps the binary
D. `purge` upgrades nginx before removing it

---

### Q6. A dnf install fails with `Public key for foo-1.0.rpm is not installed`. The CORRECT fix is: *(Analyze)*
A. Edit the .repo file to set `gpgcheck=0`
B. Import the repository's GPG key with `rpm --import <url>`
C. Pass `--nogpgcheck` to dnf
D. Delete the package from `/var/cache/dnf/`

---

### Q7. On Ubuntu 22.04, which file is the modern, secure location for a third-party repo's GPG keyring? *(Apply)*
A. `/etc/apt/trusted.gpg`
B. `/etc/apt/keyrings/<vendor>.gpg` or `/usr/share/keyrings/<vendor>.gpg`, referenced via `signed-by=`
C. `/root/.gnupg/pubring.gpg`
D. `/etc/ssl/certs/`

---

### Q8. Which tool installs a single .deb file WITHOUT resolving dependencies? *(Remember)*
A. `apt install ./file.deb`
B. `dpkg -i file.deb`
C. `apt-get install -y file.deb`
D. `aptitude install file.deb`

---

### Q9. To list all files installed by the package `openssh-server` on Ubuntu, use: *(Apply)*
A. `dpkg -L openssh-server`
B. `dpkg -l openssh-server`
C. `apt show --files openssh-server`
D. `find / -name "*openssh*"`

---

### Q10. The classic 3-step source build is: *(Remember)*
A. `make && configure && install`
B. `./configure && make && make install`
C. `compile && link && install`
D. `gcc && ld && cp`

---

### Q11. A user compiled software from source with `./configure && make && sudo make install`. Why doesn't `apt list --installed | grep <name>` show it? *(Analyze)*
A. Because the package was installed under `/opt`
B. Because source installs are NOT tracked by the package manager
C. Because the user forgot `apt update`
D. Because the binary needs to be SUID

---

### Q12. The default install prefix for `./configure && make install` (no `--prefix`) is typically: *(Remember)*
A. `/usr/local`
B. `/usr/bin`
C. `/opt`
D. `/root`

---

### Q13. Which command pins (holds) a package against automatic upgrade on Debian/Ubuntu? *(Apply)*
A. `apt mark hold <pkg>`
B. `apt-mark hold <pkg>`
C. `dpkg --hold <pkg>`
D. `apt freeze <pkg>`

---

### Q14. Comparing universal package formats: which one is a SINGLE EXECUTABLE FILE with bundled deps and no daemon? *(Understand)*
A. Snap
B. Flatpak
C. AppImage
D. RPM

---

### Q15. Which Snap admin command shows the current installed snaps? *(Remember)*
A. `snap list`
B. `snap show`
C. `snap installed`
D. `snap query`

---

### Q16. EPEL on RHEL/Rocky/AlmaLinux stands for: *(Remember)*
A. Encrypted Packages for Enterprise Linux
B. Extra Packages for Enterprise Linux
C. Enterprise Plugin Engine Library
D. Extended Public Encryption Library

---

### Q17. A `.repo` file has `gpgcheck=1` and `gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-mykey`. The file at that path is missing. The most likely behavior is: *(Analyze)*
A. dnf installs and warns
B. dnf refuses to install signed packages from this repo until the key file exists
C. dnf disables the repo automatically
D. dnf rebuilds the missing key

---

### Q18. The `dnf module install nginx:1.22` command relies on which RHEL 8+ feature? *(Understand)*
A. Module streams
B. EPEL
C. yum-utils
D. snapd

---

### Q19. To force-resolve a half-installed Debian package after a failed install, use: *(Apply)*
A. `apt fix-broken`
B. `dpkg --configure -a`
C. `apt-get -f install` (or `apt --fix-broken install`)
D. Both B and C are valid and often used together

---

### Q20. Which command shows the install/remove history of every package transaction on Fedora? *(Remember)*
A. `dnf history`
B. `dnf log`
C. `cat /var/log/dnf.log`
D. `journalctl -u dnf`

---

### Q21. You import a key with `rpm --import key.asc`. To later verify the key was actually trusted by rpm, run: *(Apply)*
A. `rpm -qa gpg-pubkey`
B. `dnf verify`
C. `gpg --list-keys`
D. `rpm --check key.asc`

---

### Q22. A user wants to install Firefox on Ubuntu via Snap. Which command and prerequisite are correct? *(Apply)*
A. `apt install snap-firefox`
B. `snap install firefox` (and `snapd` must be installed and running)
C. `flatpak install firefox`
D. `dnf install firefox-snap`

---

### Q23. Which mount option, common on `/tmp`, would prevent installing or running a setuid binary if the system extracted a tarball there? *(Evaluate)*
A. `ro`
B. `noexec` combined with `nosuid`
C. `nodev`
D. `auto`

---

### Q24. A team mirrors upstream Ubuntu archives internally on Artifactory. The Artifactory mirror lists a higher version for `python3-distutils` than Ubuntu's archive. Without changes, what does apt do? *(Evaluate)*
A. Always picks the higher version (Artifactory wins)
B. Always picks Ubuntu's
C. Refuses to choose
D. Asks the user

---

### Q25. The `dnf-plugins-core` package adds which commonly-used subcommand? *(Remember)*
A. `dnf config-manager`
B. `dnf install`
C. `dnf history`
D. `dnf list`

---

### Q26. **(Create-level)** You must add a new RHEL 9 internal repository called `corp-tools` hosted at `https://repo.corp.com/rhel9/x86_64/`, with GPG signing on, using the key already present at `/etc/pki/rpm-gpg/RPM-GPG-KEY-corp`. Compose the MINIMUM correct `/etc/yum.repos.d/corp-tools.repo` file. *(Create)*

> *Create-level note:* you're composing the canonical 5 fields of a dnf repo definition.

A.
```
[corp-tools]
url=https://repo.corp.com/rhel9/x86_64/
trust=true
```
B.
```
[corp-tools]
name=Corp Tools - RHEL 9
baseurl=https://repo.corp.com/rhel9/x86_64/
enabled=1
gpgcheck=1
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-corp
```
C.
```
repo: corp-tools
mirror: https://repo.corp.com/rhel9/x86_64/
verify: yes
```
D.
```
[corp-tools]
baseurl=https://repo.corp.com
gpgcheck=0
```

---

## 🎯 Answers + Explanations

### Q1: **B. `rpm -qf /usr/sbin/sshd`**
`rpm -qf <path>` returns the installed package owning the file. `dpkg -S` is the Debian equivalent. `dnf info` shows package metadata, not file ownership. `which` resolves command paths.

### Q2: **B. `apt-file search /usr/bin/foo`**
`apt-file` searches the file contents of all available packages in the apt index (similar to `dnf provides`). Requires `apt install apt-file` and `apt-file update` first. `dpkg -S` only searches INSTALLED packages.

### Q3: **B. `apt update`**
`apt update` refreshes metadata from configured repos. `apt upgrade` then performs the actual package upgrade. Always update before installing from a newly-added repo.

### Q4: **C. `dnf history undo last`**
You can also undo by transaction ID: `dnf history undo 47`. `dnf history` lists transactions with IDs.

### Q5: **B. `purge` also deletes configuration files in `/etc/nginx/`**
`apt remove` deletes binaries but keeps configs (so reinstall picks them up). `apt purge` removes the configs too. Useful when you want a totally clean reinstall.

### Q6: **B. Import the GPG key**
The missing key is the actual problem; disabling gpgcheck makes the issue go away by lowering the security bar — that's a textbook bad answer on the exam. Always import the key (after verifying its fingerprint against IT documentation).

### Q7: **B. `/etc/apt/keyrings/<vendor>.gpg` or `/usr/share/keyrings/<vendor>.gpg`, with `signed-by=`**
The legacy `/etc/apt/trusted.gpg` is deprecated because it trusts the key for ALL repos. Modern practice scopes each key to a specific repo with `signed-by=`.

### Q8: **B. `dpkg -i file.deb`**
`dpkg` is the low-level tool with no dep resolution. `apt install ./file.deb` (choice A) DOES resolve deps — that's the difference.

### Q9: **A. `dpkg -L openssh-server`**
`dpkg -L <pkg>` lists files installed by the package. Lowercase `-l` (choice B) lists installed packages summary.

### Q10: **B. `./configure && make && make install`**
The 30-year-old GNU build convention. configure detects deps & generates a Makefile; make compiles; make install copies artifacts (usually under /usr/local).

### Q11: **B. Source installs are NOT tracked by the package manager**
Files copied by `make install` exist on disk but have no entry in the apt or rpm database. Removal is "delete the files yourself" or `make uninstall` if the project's Makefile supports it.

### Q12: **A. `/usr/local`**
GNU convention. To change: `./configure --prefix=/opt/myapp` for a self-contained install.

### Q13: **B. `apt-mark hold <pkg>`**
`apt-mark hold <pkg>` prevents the package from being upgraded. `apt-mark unhold <pkg>` releases. `apt mark` (with a space) is not a real subcommand on most apt versions.

### Q14: **C. AppImage**
A self-contained executable file, no install, no daemon, no per-distro repo. Snap and Flatpak require a daemon and a sandbox.

### Q15: **A. `snap list`**
Lists installed snaps with versions and channels.

### Q16: **B. Extra Packages for Enterprise Linux**
Fedora-community-maintained add-on repo for RHEL-family. Provides packages RHEL doesn't ship by default. Enable with `dnf install epel-release`.

### Q17: **B. dnf refuses to install signed packages**
With `gpgcheck=1`, dnf requires the key to verify signatures. Missing key = no install. The fix is to put the key at the configured path (or update the path).

### Q18: **A. Module streams**
RHEL 8+ introduced *modules* (sometimes called streams or AppStreams) so you can install multiple versions of a package (e.g., nginx:1.18, nginx:1.22) without conflicts. `dnf module list` shows what's available.

### Q19: **D. Both B and C are valid and often used together**
`dpkg --configure -a` finishes configuration of half-configured packages. `apt --fix-broken install` resolves missing deps. Combining them often clears a broken-package state.

### Q20: **A. `dnf history`**
The dnf transaction history is in `/var/lib/dnf/history.sqlite`; `dnf history` is the query CLI. `/var/log/dnf.log` exists but is unstructured.

### Q21: **A. `rpm -qa gpg-pubkey`**
Imported GPG keys appear as virtual "gpg-pubkey" packages in the rpm database. The query lists them with IDs.

### Q22: **B. `snap install firefox` (snapd must be installed & running)**
`snapd` is a systemd service; the snap CLI talks to it. On Ubuntu desktop it's preinstalled.

### Q23: **B. `noexec` combined with `nosuid`**
Together they block execution of binaries and disable SUID semantics on this mount. Common hardening for /tmp, /var/tmp, /dev/shm.

### Q24: **A. Always picks the higher version**
By default apt picks the highest available version regardless of source. To force preference, you need an `/etc/apt/preferences.d/` pinning file (the fix in Wei's story from the reading).

### Q25: **A. `dnf config-manager`**
`dnf-plugins-core` adds `dnf config-manager --add-repo <url>`, `--set-enabled`, `--set-disabled`. Standard install on Fedora; often needed on RHEL.

### Q26: **B.**
The minimum valid dnf repo definition has `[id]`, `name=`, `baseurl=` (or `mirrorlist=`), `enabled=1`, `gpgcheck=1`, `gpgkey=`. Choice B has all of them with correct syntax. A invents fields. C is YAML-like and not valid. D disables gpgcheck (insecure).

---

## 📊 Score Yourself

- 25–26/26 → 🏆 Module 3 mastered. apt and dnf are second nature.
- 22–24/26 → ✅ Solid. Note the gaps, then move on.
- 18–21/26 → ⚠️ Re-read the apt vs dnf side-by-side and GPG sections.
- <18/26 → 🔁 Restart the Reading.md and re-quiz tomorrow.

---

## 🃏 Add To Your Flashcards

- apt commands: update, upgrade, install, remove, purge, search, show, list --installed, autoremove
- dnf commands: check-update, upgrade, install, remove, info, provides, history, history undo, module install
- Low-level: `dpkg -i / -l / -L / -S / -P` and `rpm -i / -e / -q / -qa / -qf / -ql / -qi / -Uvh / --import`
- Repo file locations (apt vs dnf)
- GPG: `rpm --import`, `signed-by=` for apt
- Universal: snap, flatpak, AppImage characteristics
- Source build: `./configure && make && make install`, `--prefix=/usr/local`

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 4 — Bash Scripting & Automation](../Module-04-Bash-Scripting/Reading.md)
