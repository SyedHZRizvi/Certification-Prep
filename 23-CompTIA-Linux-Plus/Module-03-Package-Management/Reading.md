# Module 3: Package Management 📦

> **Why this module matters:** XK0-005 is vendor-neutral, which means you need to be conversant in BOTH `apt` (Debian/Ubuntu) AND `dnf`/`rpm` (RHEL/Fedora/Rocky/AlmaLinux). The exam will test the same operation from both worlds in adjacent questions. PBQs frequently include "the user wants to install package X but can't, fix it" scenarios that hinge on knowing where repositories are configured, how GPG signing is verified, and what `dpkg -l` vs `rpm -qa` actually return.

> **Prerequisites for this module.** You should be comfortable with:
> - Module 1 (systemd), services often need a restart after a package upgrade
> - Module 2 (filesystem), package files land in `/usr/bin`, `/etc/`, `/var/lib/`, etc.
> - Running commands as root or via `sudo`

---

## 🍕 A Story: The Package Conflict at 2 a.m.

Meet Wei. She's pulled an emergency support ticket: a development cluster's CI runner started failing every build at midnight. The error: `python3-pip: command not found`. She SSH (Secure Shell)'s in. Indeed, `which pip3` returns nothing.

She runs `apt install python3-pip` on the first node:

```
The following packages have unmet dependencies:
 python3-pip : Depends: python3-distutils (>= 3.10.6-1~22.04) but 3.10.6-1~22.04 is to be installed
              Depends: python3-wheel but it is not going to be installed
E: Unable to correct problems, you have held broken packages.
```

She inspects `/etc/apt/sources.list.d/`. Three files. One `our-internal.list` points to an internal Artifactory mirror that someone changed yesterday to host a custom `python3-distutils` package with a different ABI than upstream Ubuntu's. Pinning is off; the mirror's package "wins" because it has a higher version number. That broke distutils, which broke pip's transitive deps.

She edits `/etc/apt/preferences.d/internal-pin` to *prefer* Ubuntu's archive for `python3-*` packages over Artifactory:

```
Package: python3-*
Pin: origin "us.archive.ubuntu.com"
Pin-Priority: 990
```

`apt update && apt install python3-pip` succeeds in 4 seconds. She rolls the fix out via Ansible to 47 nodes. CI is green by 02:38.

The exam will not ask you to write an apt preferences file from memory, but it WILL test the structure: which file each tool reads, where repos are configured, how to query "which package owns this file," and how to fix a broken-package state. We'll cover all of it.

---

## 🌍 The Two Package Worlds

| World | Distros | Low-level tool | High-level tool | Package format |
|-------|---------|----------------|------------------|----------------|
| **Debian** | Debian, Ubuntu, Linux Mint, Pop!_OS, Kali, Raspberry Pi OS | `dpkg` | `apt` / `apt-get` | `.deb` |
| **Red Hat** | RHEL, Fedora, Rocky, AlmaLinux, CentOS Stream, Amazon Linux | `rpm` | `dnf` / `yum` | `.rpm` |
| **Universal** | All distros | (varies) | `snap`, `flatpak`, `AppImage` | snap, flatpak, AppImage |

🎯 **Exam pattern:** Every package-management question is one of: (a) install/remove/upgrade, (b) query/inspect, (c) find which package owns a file, (d) configure a repo, (e) verify GPG signing.

---

## 🔵 Debian World: dpkg, apt-get, apt

### dpkg, the low-level tool

`dpkg` installs/removes a single `.deb` file with NO dependency resolution. It's the bedrock everything else is built on.

| Command | Use |
|---------|-----|
| `dpkg -i package.deb` | Install a single .deb (FAILS if deps unmet) |
| `dpkg -r packagename` | Remove (keep config) |
| `dpkg -P packagename` | Purge (remove + delete configs) |
| `dpkg -l` | List ALL installed packages (with state codes) |
| `dpkg -L packagename` | List FILES installed by package |
| `dpkg -S /path/to/file` | Which installed package owns this file? |
| `dpkg --info package.deb` | Show metadata from a .deb file |
| `dpkg --contents package.deb` | Show files inside a .deb without installing |
| `dpkg --configure -a` | Finish configuring half-installed packages |

State codes in `dpkg -l` output (the first two chars of each line):

- `ii` = installed, configured (normal)
- `rc` = removed but config remains
- `iU` = installed but unpacked, not configured (broken)

### apt-get / apt, the high-level resolver

`apt` (and the older `apt-get`) read a database of available packages, resolve dependencies, download from repos, and call `dpkg` to do the actual install.

| Command | Use |
|---------|-----|
| `apt update` | Refresh the package index from configured repos |
| `apt upgrade` | Install newer versions of installed packages (no removals) |
| `apt full-upgrade` | Like upgrade but allow removals to satisfy upgrades (≈`apt-get dist-upgrade`) |
| `apt install <pkg>` | Install package + dependencies |
| `apt install ./local.deb` | Install local .deb with dep resolution |
| `apt remove <pkg>` | Remove (keep config) |
| `apt purge <pkg>` | Remove + delete config files |
| `apt autoremove` | Remove no-longer-needed deps |
| `apt search <regex>` | Search package names + descriptions |
| `apt show <pkg>` | Show metadata of a package |
| `apt list --installed` | Modern `dpkg -l` |
| `apt list --upgradable` | What can be upgraded |
| `apt clean` / `apt autoclean` | Clear download cache |

🚨 **Trap on the exam:** `apt` and `apt-get` are not perfectly interchangeable on the *output* (apt has prettier output with progress bars; apt-get is more script-friendly). Functionally they cover the same operations; the subtle difference is `apt full-upgrade` ≈ `apt-get dist-upgrade`.

### Repository configuration

Two locations:

1. **Master list:** `/etc/apt/sources.list`
2. **Drop-ins:** `/etc/apt/sources.list.d/*.list` (one file per repo, easier to manage)

Each repo line looks like:

```
deb http://archive.ubuntu.com/ubuntu jammy main restricted universe multiverse
deb-src http://archive.ubuntu.com/ubuntu jammy main restricted
```

- `deb` = binary packages
- `deb-src` = source packages
- `http://...` = repo base URL
- `jammy` = distribution / release codename
- `main restricted universe multiverse` = components

### GPG signing for apt

Modern apt requires repo keys. Two patterns:

1. **Legacy (deprecated but exam-relevant):** keys in `/etc/apt/trusted.gpg` and `/etc/apt/trusted.gpg.d/*.gpg`
2. **Modern (Ubuntu 22.04+, Debian 12+):** signed-by per-repo:

```
deb [signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] \
    https://download.docker.com/linux/ubuntu jammy stable
```

When apt fails with `NO_PUBKEY <key-id>`, the repo's signing key isn't trusted. Fix:

```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | \
  sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
```

---

## 🔴 Red Hat World: rpm, dnf (yum), rpmbuild

### rpm, the low-level tool

Like `dpkg`, `rpm` operates on individual `.rpm` files with NO dependency resolution.

| Command | Use |
|---------|-----|
| `rpm -i package.rpm` | Install (legacy; use `-Uvh` instead) |
| `rpm -U package.rpm` | Upgrade-or-install (typically `rpm -Uvh`) |
| `rpm -e packagename` | Erase (remove) |
| `rpm -qa` | Query ALL installed packages |
| `rpm -q packagename` | Is this package installed? show version |
| `rpm -qi packagename` | Query info (metadata) |
| `rpm -ql packagename` | Query files installed by package |
| `rpm -qf /path/to/file` | Which package owns this file? |
| `rpm -qp --queryformat ... file.rpm` | Query a .rpm file before installing |
| `rpm -V packagename` | Verify package files (size, perms, MD5 vs original) |
| `rpm --import key.asc` | Import a GPG key |
| `rpm --checksig file.rpm` | Verify signature on a .rpm file |

Common flag mnemonics:

- `-v` verbose, `-h` hash progress bar → `-Uvh` for "Upgrade Verbose Hash"
- `-q` query mode toggle for ALL query subcommands

🎯 **Exam pattern:** *"Which package installed `/usr/sbin/sshd`?"* → `rpm -qf /usr/sbin/sshd` → `openssh-server-...`.

### dnf, the modern Red Hat resolver

`dnf` (Dandified YUM) replaced `yum` starting RHEL 8. On RHEL 7 and older Amazon Linux 2, you'll still see `yum`. Commands are nearly identical.

| Command | Use |
|---------|-----|
| `dnf check-update` | Refresh metadata + show available upgrades |
| `dnf upgrade` | Upgrade all packages (alias: `dnf update`) |
| `dnf install <pkg>` | Install + dependencies |
| `dnf install ./local.rpm` | Install local .rpm with deps |
| `dnf remove <pkg>` | Remove + unused deps |
| `dnf autoremove` | Clean up no-longer-needed deps |
| `dnf reinstall <pkg>` | Reinstall (fix corrupted files) |
| `dnf downgrade <pkg>` | Roll back to older version |
| `dnf search <term>` | Search names + summaries |
| `dnf info <pkg>` | Show metadata |
| `dnf list installed` | List installed |
| `dnf provides /path/to/file` | Which package PROVIDES this file (search repos)? |
| `dnf history` | Transaction history with rollback support |
| `dnf history undo <id>` | Roll back a specific transaction |
| `dnf grouplist` / `dnf groupinstall "Development Tools"` | Package groups |
| `dnf module list` / `dnf module install nginx:1.22` | Modular packages (RHEL 8+) |
| `dnf clean all` | Wipe cache |

### Repository configuration

Drop-in files in `/etc/yum.repos.d/*.repo`:

```ini
[docker-ce-stable]
name=Docker CE Stable - $basearch
baseurl=https://download.docker.com/linux/centos/$releasever/$basearch/stable
enabled=1
gpgcheck=1
gpgkey=https://download.docker.com/linux/centos/gpg
```

Each field:

- `[repo-id]`, short identifier
- `name=`, human-readable
- `baseurl=` OR `mirrorlist=`, where to fetch from
- `enabled=1`, is this repo active?
- `gpgcheck=1`, verify signatures (NEVER set to 0 in production)
- `gpgkey=`, public key to trust

🚨 **Trap on the exam:** A scenario shows `gpgcheck=0` in a repo file as the "fix" for a failing install. That's the WRONG answer, it disables verification entirely. The right answer is to import the key with `rpm --import https://...` and keep gpgcheck on.

### dnf transactions

Unlike apt, every dnf install/remove is logged as a *transaction* (kept in `/var/lib/dnf/history.sqlite`). You can roll back:

```bash
dnf history                    # see numbered list
dnf history info 47            # what happened in transaction 47
dnf history undo 47            # reverse it
```

This is invaluable when a package upgrade breaks something.

---

## 🆚 Side-by-Side Cheat

| Operation | Debian / Ubuntu | RHEL / Fedora |
|-----------|-----------------|---------------|
| Refresh metadata | `apt update` | `dnf check-update` |
| Install package | `apt install nginx` | `dnf install nginx` |
| Remove package (keep config) | `apt remove nginx` | `dnf remove nginx` |
| Purge (remove + config) | `apt purge nginx` | (no exact equivalent, `dnf remove` doesn't remove configs by default) |
| Upgrade all | `apt upgrade` | `dnf upgrade` |
| Search | `apt search nginx` | `dnf search nginx` |
| Show info | `apt show nginx` | `dnf info nginx` |
| List installed | `apt list --installed` / `dpkg -l` | `dnf list installed` / `rpm -qa` |
| List files of pkg | `dpkg -L nginx` | `rpm -ql nginx` |
| Which pkg owns file | `dpkg -S /usr/sbin/nginx` | `rpm -qf /usr/sbin/nginx` |
| Which pkg provides file (search repos) | `apt-file search /path` | `dnf provides /path` |
| Install local file | `apt install ./pkg.deb` | `dnf install ./pkg.rpm` |
| Transaction history | (limited; see `/var/log/apt/history.log`) | `dnf history` |
| Repo files | `/etc/apt/sources.list.d/*.list` | `/etc/yum.repos.d/*.repo` |
| Cache | `/var/cache/apt/archives/` | `/var/cache/dnf/` |

---

## 📦 Universal Packagers: Snap, Flatpak, AppImage

When you need to ship a desktop app or a service to "any modern Linux," distro-specific .deb/.rpm packaging is painful. Three solutions emerged in the 2010s.

| Format | Sponsor | Concept | Storage |
|--------|---------|---------|---------|
| **Snap** | Canonical | Sandboxed app bundles, daemon-managed updates, mounted as squashfs | `/var/lib/snapd/snaps/` |
| **Flatpak** | Red Hat + community | OCI-style runtime + app layers, sandboxed via bubblewrap | `/var/lib/flatpak/` and `~/.local/share/flatpak/` |
| **AppImage** | community | Single executable file with bundled deps, no install | wherever you put it |

### Snap basics

```bash
snap install firefox
snap list                            # what's installed
snap refresh                         # update all
snap remove firefox
snap services                        # services that snaps installed
```

🚨 **Trap on the exam:** snapd is a systemd service. If snap commands hang, check `systemctl status snapd`.

### Flatpak basics

```bash
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
flatpak install flathub org.gimp.GIMP
flatpak run org.gimp.GIMP
flatpak update
flatpak uninstall org.gimp.GIMP
```

### AppImage basics

Download the `.AppImage` file, `chmod +x`, run it. No install, no root, no daemon. Updates: the app has to opt in (most don't). Integration with menus via `AppImageLauncher`.

---

## 🔨 Building From Source

Some software ships only as source, or you need a custom build (specific kernel modules, security flags, custom prefix).

The classic 3-step:

```bash
tar xzf project-1.2.tar.gz
cd project-1.2/
./configure --prefix=/usr/local           # check deps + generate Makefile
make                                       # compile
sudo make install                          # install (default to /usr/local)
```

For C/C++ projects you typically need:

```bash
sudo dnf install gcc make autoconf automake
# or
sudo apt install build-essential autoconf automake
```

`build-essential` (Debian) or `gcc + make + glibc-devel` (RHEL) is the meta-package every Linux+ candidate should know.

🚨 **Trap on the exam:** Source-installed binaries do NOT show up in `dpkg -l` / `rpm -qa`. Untracked. Removal is "delete the files yourself" or `make uninstall` if the project supports it. Always use `--prefix=/opt/myapp` to make this easier.

### Configure / Make / Install, what each step does

| Step | What it does | Common issues |
|------|--------------|---------------|
| `./configure` | Detects dependencies, generates Makefile, picks compiler | Missing `-devel`/`-dev` headers → install matching `<lib>-dev` package |
| `make` | Compiles binaries from source | Out-of-memory, compiler errors |
| `make install` | Copies built artifacts to system paths (default `/usr/local`) | Needs sudo; pollutes system if not isolated |

---

## 🧰 Other Useful Tools

### `aptitude`

A TUI front-end on apt-get. Better for resolving complex dep conflicts interactively. Optional install: `apt install aptitude`.

### `apt-cache`

Older read-only query tool: `apt-cache search`, `apt-cache show`, `apt-cache policy`. Modern `apt` covers these but `apt-cache policy <pkg>` is still the cleanest way to see which repo a package version comes from.

### `apt-file`

Search the contents of all available packages (not just installed). `apt install apt-file`, then `apt-file update`, then `apt-file search /path/to/file`. The Debian equivalent of `dnf provides`.

### `dnf-plugins-core`

Adds `dnf config-manager`, `dnf copr enable`, etc. Often required for adding repos via CLI (Command Line Interface) on Fedora.

### `dpkg-reconfigure`

Re-runs the post-install configuration of a Debian package. Common for tzdata, keyboard-configuration, locales.

---

## 🔬 Scenario Walkthrough (PBQ-style thinking)

> **Scenario:** On a RHEL 9 system, a user reports `dnf install httpd-tools` fails with `Public key for httpd-tools-2.4.57-3.el9.x86_64.rpm is not installed`. The package URL in the error matches a repo file the admin recently added at `/etc/yum.repos.d/internal-rhel9.repo`. What's the correct sequence to fix this WITHOUT disabling GPG signature checking?

**Walkthrough:**
1. The repo is reachable (the URL resolved), but the GPG key listed in the `.repo` file isn't yet imported into the rpm keyring. dnf refuses to install unsigned-or-untrusted packages, this is the *correct* behavior; do not lower the bar.
2. Inspect the repo file:
```bash
cat /etc/yum.repos.d/internal-rhel9.repo
```
You'll see something like `gpgkey=https://repo.internal.corp/rpm-gpg-internal`.
3. Fetch and import the key into rpm's keyring:
```bash
rpm --import https://repo.internal.corp/rpm-gpg-internal
# or download first and inspect:
curl -O https://repo.internal.corp/rpm-gpg-internal
gpg --show-keys ./rpm-gpg-internal      # confirm fingerprint matches what IT documented
sudo rpm --import ./rpm-gpg-internal
```
4. Retry:
```bash
sudo dnf clean metadata
sudo dnf install httpd-tools
```
5. Verify the package is signed by the imported key:
```bash
rpm -qi httpd-tools | grep -i signature
```

The PBQ would test step 3 specifically, the answer is `rpm --import`, NOT `gpgcheck=0`.

---

## ⚠️ Exam Traps & Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "`apt remove` deletes the config too" | No, that's `apt purge`. `remove` keeps `/etc/<pkg>/` configs. |
| "`yum` and `dnf` are the same" | dnf replaced yum (RHEL 8+). On RHEL 7 you still use yum. Many commands look identical; `dnf history` is a real upgrade. |
| "Source-installed binaries show in `rpm -qa`" | No, only RPM-installed packages do. Source installs are invisible to the package manager. |
| "Disabling `gpgcheck` is fine for testing" | Even in dev, you should import the key. Disabling teaches you a bad habit and the exam loves to mark this wrong. |
| "Snap and Flatpak are interchangeable" | Different sponsors, different sandbox mechanics, different store models. They co-exist. |
| "AppImages auto-update" | Most don't, that's a feature the app has to add. |
| "`apt update` upgrades packages" | No, that REFRESHES the metadata. `apt upgrade` does the actual upgrade. |
| "`rpm -e` resolves dependencies" | No, rpm refuses to remove if other packages depend on it. Use `dnf remove`. |
| "Removing a package automatically removes its config files" | apt: no (`purge` does). dnf: usually no, configs labeled `%config(noreplace)` survive. |
| "Held packages are corrupted" | A "hold" is intentional, `apt-mark hold <pkg>` prevents upgrades. Unhold: `apt-mark unhold <pkg>`. |

---

## 🎓 Key Terms To Know (Add to Flashcards!)

| Term | Definition |
|------|------------|
| **dpkg** | Low-level Debian package tool (`.deb`), no dep resolution |
| **apt / apt-get** | High-level Debian resolver + downloader |
| **rpm** | Low-level Red Hat package tool (`.rpm`), no dep resolution |
| **dnf** | Modern Red Hat resolver (replaced yum in RHEL 8+) |
| **yum** | Older Red Hat resolver (RHEL 7 and prior) |
| **Repository** | A server hosting package metadata + files |
| **Repo file** | `/etc/yum.repos.d/*.repo` or `/etc/apt/sources.list[.d/]` |
| **GPG signing** | Cryptographic signature on packages; trust via public key |
| **Snap** | Canonical's sandboxed cross-distro app format |
| **Flatpak** | Red Hat / community sandboxed cross-distro app format |
| **AppImage** | Single-executable bundle, no install needed |
| **`./configure && make && make install`** | Source-build canonical 3-step |
| **`build-essential` / `gcc-make`** | Compiler toolchain meta-packages |
| **`dnf history undo`** | Roll back a transaction |
| **`apt-mark hold`** | Pin a package against upgrades |
| **`dpkg -S` / `rpm -qf`** | Which package owns this file? |
| **`apt-file search` / `dnf provides`** | Which package PROVIDES this file (search repos)? |

### Acronyms cheat-row (Module 3)
| Acronym | Meaning |
|---------|---------|
| GPG | GNU Privacy Guard |
| RPM | Red Hat Package Manager / .rpm file |
| DEB | Debian package (.deb) |
| DNF | Dandified YUM |
| YUM | Yellowdog Updater Modified |
| CoW | Copy-on-Write |
| FHS | Filesystem Hierarchy Standard |
| EPEL | Extra Packages for Enterprise Linux (popular RHEL/CentOS add-on repo) |
| PPA | Personal Package Archive (Ubuntu) |
| OSTree | Atomic update model used by some immutable distros (Fedora Silverblue) |

---

## 📊 Case Study, The 2016 Left-Pad Lesson Linux Already Knew

**Situation.** On 22 March 2016, a JavaScript developer (Azer Koçulu) unpublished his `left-pad` npm module after a name dispute with another company. `left-pad` was an 11-line function that padded strings on the left. Within an hour, npm's removal cascaded into broken builds at Facebook, Netflix, Slack, Spotify, Reddit, npm itself, and thousands of smaller projects whose dependency trees transitively required `left-pad`. The web buckled. npm partially reverted the unpublish.

**Decision.** The JavaScript ecosystem had to confront what Linux package management had known since the 1990s: a public, immutable, signed, mirrored, dependency-graph-aware package archive is a critical piece of infrastructure that cannot be entrusted to ad-hoc personal repositories. The npm policy team rewrote the unpublish rules, added 72-hour grace periods, and forbade re-publishing the same name+version.

**Outcome.** Linux package managers had effectively zero analogous catastrophic outages. Three architectural reasons:

1. **Distribution-curated repositories.** Debian's archive, Fedora's koji build system, RHEL's CDN (Content Delivery Network) don't let an individual maintainer "unpublish" a package atomically. Removal is a multi-person multi-step process with a `removed-from-stable` archive.
2. **GPG signing + content-addressable storage.** Every package is signed by the distro's key. Mirrors verify integrity. A bad mirror cannot inject a Trojan.
3. **Versioned dependency declarations + system snapshotting.** `apt` and `dnf` install specific versions; `dnf history undo` lets you roll back a single transaction. Even if a "bad" update lands, recovery is one command.

**Lesson for the exam / for practitioners.** XK0-005 will not ask "explain the left-pad incident." But it WILL ask:

- Why does dnf use `gpgcheck=1` by default? (Tampering prevention.)
- What does `dnf history undo 47` do? (Reverse a specific transaction.)
- Why do enterprises mirror upstream repos internally (Satellite, Foreman, Pulp, Artifactory)? (Reproducibility + air-gapped installs + version pinning.)
- Why is `gpgcheck=0` a bad answer? (See above.)

These all flow from the same underlying engineering choice: package management is critical infrastructure, treat it like it.

**Discussion (Socratic).**
- **Q1:** Compare and contrast the dependency-resolution failure modes of npm (unpublish, version churn) vs apt (held packages, broken-deps trees). Which set of failures is *easier* to recover from? Why?
- **Q2:** Snap and Flatpak deliberately bundle their dependencies inside the app package (similar to npm's `node_modules`). Does that make them more or less robust than .deb/.rpm? Trade-offs?
- **Q3:** A startup is choosing between an `apt`-based distro (Ubuntu Server) and a `dnf`-based distro (Rocky Linux) for production. List four operational differences (beyond syntax) that should inform the choice.

---

## ✅ Module 3 Summary

You now know:

- 📦 The **two package worlds** (Debian vs Red Hat) and which distros live in each
- 🔵 **dpkg / apt** commands for install, query, repo configuration on Debian/Ubuntu
- 🔴 **rpm / dnf** commands for install, query, repo configuration on RHEL/Fedora
- 🆚 The side-by-side **operation map** so any apt question has a dnf answer (and vice versa)
- 📦 **Snap, Flatpak, AppImage** as the universal cross-distro options
- 🔨 The classic **`./configure && make && make install`** source-build sequence
- ✅ Why **GPG signing** matters and how to import keys (the right way, not `gpgcheck=0`)
- 🕰️ How **dnf history** enables transaction rollback

**Next steps:**
1. 🎥 Watch the curated videos: [Videos.md](./Videos.md)
2. ✏️ Take the quiz: [Quiz.md](./Quiz.md), aim for 22/26
3. 📋 Review the [Cheat-Sheet.md](./Cheat-Sheet.md) before bed
4. ➡️ Move on: [Module 4, Bash Scripting & Automation](../Module-04-Bash-Scripting/Reading.md)

> **Where this leads.**
> - Inside this course: [Module 4](../Module-04-Bash-Scripting/Reading.md) automates apt/dnf operations in scripts; [Module 8](../Module-08-Security/Reading.md) covers GPG in depth (the same key system used by dnf/apt signing).
> - Practice: Practice Exam 1 has ~6 questions drawing from this module; the Final Mock has ~9.

---

## 📚 Further Reading (Optional)

**Primary sources:**
- 📄 Debian Project, [*Debian Policy Manual*](https://www.debian.org/doc/debian-policy/), especially §1, §3 (binary packages), and §10 (files in the FHS context).
- 📄 Fedora Project [*RPM Packaging Guide*](https://rpm-packaging-guide.github.io/) explains the rpm file format from the ground up.
- 📄 DNF Project, [`dnf(8)`](https://dnf.readthedocs.io/en/latest/command_ref.html) and [`dnf-history(8)`](https://dnf.readthedocs.io/en/latest/command_ref.html#history-command-label) man pages.
- 📄 APT [`apt(8)`, `apt-get(8)`, `apt-cache(8)`, `apt_preferences(5)`](https://manpages.debian.org/) the apt-preferences page especially explains pinning, which is the under-tested superpower of apt.
- 📄 Snap, [snapcraft.io documentation](https://snapcraft.io/docs).

**Practitioner / exam:**
- 📖 Sander van Vugt, *CompTIA Linux+ XK0-005 Cert Guide* (Pearson, 2023), Chapter 8.
- 📖 Christopher Negus, *Linux Bible* (Wiley, 11th ed., 2020), Chapters 9 & 10.
- 📖 Mark G. Sobell & Matthew Helmke, *A Practical Guide to Linux Commands, Editors, and Shell Programming* (Pearson, 4th ed., 2018), the reference book for Linux+ aspirants.
