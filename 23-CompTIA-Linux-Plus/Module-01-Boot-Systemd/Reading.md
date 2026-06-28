# Module 1: Linux Boot, Init Systems & systemd 🚀

> **Why this module matters:** Two of the highest-failure XK0-005 question types are "the server hangs at boot, fix it" and "the service won't start, prove why." Both demand you understand the boot chain firmware to kernel to init to your service in order, with the right config files and the right diagnostic commands. Get this module right and you can debug almost anything Linux throws at you.

> **Prerequisites for this module.** You should be comfortable with:
> - Logging into a Linux shell as root and a normal user
> - Using `ls`, `cd`, and a text editor (vim, nano, or VS Code over SSH (Secure Shell))
> - General familiarity with what a "service" is on any operating system
>
> If those are shaky, install Ubuntu Server or AlmaLinux in a free VirtualBox/UTM VM (Virtual Machine) and live there for an evening before continuing.

---

## 🍕 A Story: The 3 a.m. Boot Loop

Meet Priya. She's the only sysadmin on call for a 200-person SaaS (Software as a Service) company. At 3:11 a.m. her phone screams: the primary database server in `us-east-1` is down. SSH connections time out. The cloud console shows the VM booted, then rebooted, then booted again. Five times in twelve minutes.

She pulls up the cloud serial console. The screen freezes on:

```
[ TIME ] Failed to mount /var.
Dependency failed for Local File Systems.
Welcome to emergency mode! After logging in, type "journalctl -xb" to view system logs.
```

She types the root password into the emergency shell and runs `journalctl -xb`. Three lines tell the whole story:

1. The previous week, a junior engineer had attached a new EBS volume for `/var/log/elastic` and added it to `/etc/fstab`.
2. The EBS volume failed to attach this boot (an AWS (Amazon Web Services) API (Application Programming Interface) issue).
3. `/etc/fstab` had no `nofail` option, so `Local File Systems` target failed, which broke `multi-user.target`, which is why the system kept dropping to emergency mode.

She edits `/etc/fstab`, adds `nofail,x-systemd.device-timeout=10s` to the line, runs `systemctl daemon-reload && systemctl reboot`. The system comes up in 41 seconds. She's back in bed at 3:34 a.m.

The exam will not give you a 3 a.m. fire to fight, but it WILL give you a boot or service scenario and ask you which file you'd edit, which command would surface the answer, or which systemd unit you'd reorder. This module gives you the mental model.

---

## 🔥 The Boot Chain, Stage by Stage

A modern Linux boot has six distinct stages. **MEMORIZE THIS.** Almost every boot-related exam question maps to a single stage.

```
1. Firmware (BIOS or UEFI)
       ↓
2. Bootloader (GRUB2)
       ↓
3. Kernel (vmlinuz) + initramfs
       ↓
4. Root filesystem pivot
       ↓
5. systemd (PID 1), the init system
       ↓
6. default.target (multi-user or graphical)
```

### Stage 1, Firmware: BIOS vs UEFI

| Trait | Legacy BIOS | UEFI (modern) |
|-------|-------------|---------------|
| Year introduced | 1981 (IBM PC) | 2005 (Intel EFI 2.0); UEFI 2.x standard |
| Partition scheme | MBR (Master Boot Record, 2 TiB max) | GPT (Generative Pre-trained Transformer) (GUID Partition Table, ZB-scale) |
| Boot location | 512-byte boot sector at LBA 0 | EFI System Partition (ESP), FAT32, ≥100 MiB, mounted at `/boot/efi` |
| Bootloaders | grub-pc, syslinux, lilo (legacy) | grub-efi, systemd-boot, rEFInd, shim (for Secure Boot) |
| Secure Boot | No | Yes (signed bootloaders via shim + MOK) |
| Where the OS looks for the EFI binary | N/A | `/boot/efi/EFI/<distro>/grubx64.efi` |

🎯 **Exam pattern:** A question shows a `efibootmgr -v` output and asks which entry boots Linux. Answer: the entry whose path ends in `/EFI/<distro>/grubx64.efi` (or `shimx64.efi` if Secure Boot is enabled).

### Stage 2, Bootloader: GRUB & GRUB2

**GRUB2** (GRand Unified Bootloader v2) is the dominant Linux bootloader. Three things to know:

- **Config is generated, not hand-edited.** The actual config (`grub.cfg`) is rebuilt from `/etc/default/grub` + scripts in `/etc/grub.d/`.
- **Two config locations:**
  - RHEL / CentOS / Fedora / AlmaLinux: `/boot/grub2/grub.cfg` (legacy) or `/boot/efi/EFI/<distro>/grub.cfg` (UEFI)
  - Debian / Ubuntu: `/boot/grub/grub.cfg`
- **Rebuild commands differ:**
  - RHEL family: `grub2-mkconfig -o /boot/grub2/grub.cfg`
  - Debian family: `update-grub` (a wrapper around `grub-mkconfig -o /boot/grub/grub.cfg`)

**The interactive menu** (press any key during boot to see it):

- `e` to edit the kernel line, add boot parameters for one-shot recovery
- `c` to drop to a GRUB shell
- `Ctrl-X` (or `F10`) to boot the edited entry

**The most useful one-shot recovery trick:** at the GRUB menu, press `e`, find the line that starts with `linux`, append `systemd.unit=rescue.target` (or `emergency.target` for an even more minimal shell), press Ctrl-X. You'll get a root shell with most of the filesystem mounted and the network down, perfect for editing fstab.

### Stage 3, Kernel + initramfs

The kernel binary (`/boot/vmlinuz-<version>`) is decompressed into RAM by GRUB, along with a companion **initramfs** image (`/boot/initramfs-<version>.img` on RHEL, `/boot/initrd.img-<version>` on Debian).

**Why initramfs exists:** the kernel can't mount the real root filesystem if that filesystem lives on LVM, LUKS-encrypted disks, software RAID, NFS, iSCSI, or any filesystem the kernel doesn't have a built-in driver for. The initramfs is a tiny in-memory root containing just enough modules and scripts to discover and mount the real root, then **pivot** to it.

**Rebuild commands (after a kernel update or an /etc/crypttab change):**
- RHEL family: `dracut -f` (or `dracut --regenerate-all -f`)
- Debian family: `update-initramfs -u` (or `-u -k all`)

🚨 **Trap on the exam:** if you change `/etc/crypttab` (the file that lists LUKS devices to unlock at boot) and DON'T rebuild the initramfs, the system will fail to boot. The exam loves to show a partially-correct setup and ask what's missing.

### Stage 4, Root pivot

The initramfs script (managed by `dracut` on RHEL or `initramfs-tools` on Debian) discovers the root filesystem, mounts it at `/sysroot`, then calls `switch_root` to make `/sysroot` the new `/` and exec `/sbin/init` (which is a symlink to `systemd` on modern distros).

### Stage 5, systemd as PID 1

```
$ ps -p 1
  PID TTY          TIME CMD
    1 ?        00:00:02 systemd
```

systemd is now in charge. It reads unit files, builds a dependency graph, and starts everything that the **default target** transitively requires.

### Stage 6, default.target

The "where do we end up" target. Almost always one of:

- `multi-user.target`, text-mode multi-user system (servers, CLI (Command Line Interface) workstations)
- `graphical.target`, multi-user + GUI display manager (desktops, workstations)

Set it with `systemctl set-default <target>`. View it with `systemctl get-default`.

---

## ⚙️ Init Systems: SysVinit → Upstart → systemd

You'll see SysVinit and Upstart referenced in legacy questions. Know the differences at a glance:

| Init system | Years dominant | Concept | Concurrency | State |
|-------------|----------------|---------|-------------|-------|
| **SysVinit** | 1983–2014 | `/etc/init.d/<script>` shell scripts launched per runlevel (0–6) | Sequential | Mostly historical; LFS, some embedded |
| **Upstart** | 2006–2014 (Ubuntu, RHEL 6) | Event-driven jobs in `/etc/init/` | Some parallel | Discontinued; replaced by systemd in Ubuntu 15.04 |
| **systemd** | 2010–present | Unit files, dependency graph, cgroups | Massively parallel | Default on all major distros (RHEL 7+, Ubuntu 15.04+, Debian 8+, SUSE) |

### SysVinit runlevels → systemd targets

| Runlevel | Meaning | systemd target |
|----------|---------|----------------|
| 0 | Halt | `poweroff.target` |
| 1 / S | Single-user (rescue) | `rescue.target` |
| 2 | Multi-user without network (Debian: full multi-user) | `multi-user.target` |
| 3 | Multi-user CLI with network | `multi-user.target` |
| 4 | Unused / user-defined | `multi-user.target` |
| 5 | Multi-user + GUI | `graphical.target` |
| 6 | Reboot | `reboot.target` |

🎯 **Exam pattern:** *"You need this server to boot to multi-user text mode by default."* → `systemctl set-default multi-user.target`.

---

## 🎛️ systemctl, The Tool You'll Live In

`systemctl` is to systemd what `kubectl` is to Kubernetes: every operation has a verb + a unit. Memorize these verbs:

| Verb | Effect |
|------|--------|
| `start <unit>` | Start now, do not change boot-time behavior |
| `stop <unit>` | Stop now |
| `restart <unit>` | Stop, then start |
| `reload <unit>` | Tell the running daemon to re-read config (if it supports SIGHUP) |
| `enable <unit>` | Start at boot (creates `.wants/` symlink) |
| `disable <unit>` | Don't start at boot |
| `enable --now <unit>` | Enable AND start (most common admin verb) |
| `mask <unit>` | Forbid starting entirely (symlink to /dev/null) |
| `unmask <unit>` | Undo mask |
| `status <unit>` | Show state + last 10 journal lines |
| `cat <unit>` | Show the effective unit file (with drop-ins merged) |
| `edit <unit>` | Create or edit a drop-in override (in `/etc/systemd/system/<unit>.d/`) |
| `daemon-reload` | Re-read all unit files from disk after edits |
| `list-units --type=service --state=failed` | Show failed services (your starting point when things break) |

### A real unit file (annotated)

```ini
# /etc/systemd/system/myapp.service
[Unit]
Description=My Web App
Documentation=https://docs.example.com/myapp
After=network-online.target postgresql.service
Wants=network-online.target
Requires=postgresql.service

[Service]
Type=simple
User=myapp
Group=myapp
WorkingDirectory=/opt/myapp
ExecStart=/opt/myapp/bin/server --port 8080
Restart=on-failure
RestartSec=5s
Environment=PYTHONUNBUFFERED=1
EnvironmentFile=/etc/myapp/env

[Install]
WantedBy=multi-user.target
```

**Three sections:**
- `[Unit]`, metadata and ordering (`After`, `Before`, `Wants`, `Requires`)
- `[Service]`, what to run and how (`Type`, `ExecStart`, restart policy, security sandbox)
- `[Install]`, what `systemctl enable` should do (`WantedBy` creates the symlink)

🚨 **Trap on the exam:** `After=` is **ordering only**, not dependency. To both order AND require, use `After= ... Requires=`. To require without strict ordering, use `Requires=` alone. Get this distinction or every dependency question will be a 50/50 guess.

### Drop-in overrides (the right way to customize)

Never edit `/lib/systemd/system/<unit>.service` directly, a package upgrade will overwrite it. Instead:

```bash
sudo systemctl edit nginx.service
```

This opens `$EDITOR` on a new file at `/etc/systemd/system/nginx.service.d/override.conf`. Put just the lines you want to change:

```ini
[Service]
LimitNOFILE=65535
```

Save, then `systemctl daemon-reload && systemctl restart nginx`. Verify the override is loaded with `systemctl cat nginx`.

---

## 📜 journalctl, The Centralized Log

`journalctl` queries the systemd journal, a binary, indexed, structured log that consolidates kernel messages, service stdout/stderr, and explicitly-sent syslog.

| Command | Use |
|---------|-----|
| `journalctl` | Everything since beginning of time (paginated) |
| `journalctl -b` | Just this boot |
| `journalctl -b -1` | The previous boot (if `Storage=persistent` in `journald.conf`) |
| `journalctl -k` | Kernel messages only (the `dmesg` replacement) |
| `journalctl -u sshd` | Only this unit's log |
| `journalctl -u sshd -f` | Follow live (tail -f style) |
| `journalctl -u sshd --since "10 minutes ago"` | Time-windowed |
| `journalctl -p err -b` | Only error-and-worse priority this boot |
| `journalctl -xe` | Last entries with explanations (what `systemctl status` hints at) |

**Persistence:** by default many distros store the journal in RAM only (`/run/log/journal/`). For persistence across reboots, edit `/etc/systemd/journald.conf` and set `Storage=persistent`, then `systemctl restart systemd-journald`. The journal then lives at `/var/log/journal/`.

🎯 **Exam pattern:** *"A user reports nginx died at 02:14 last night. Which command shows what happened?"* → `journalctl -u nginx --since "2025-XX-XX 02:00" --until "2025-XX-XX 02:30"` (or `-b -1` if the machine rebooted).

---

## 🛠️ Putting It Together, A Boot-Failure Playbook

When a system won't reach `multi-user.target`:

1. **Boot to rescue or emergency mode** (GRUB → `e` → append `systemd.unit=rescue.target`).
2. **Identify the failed unit:** `systemctl --failed`
3. **Get the story:** `journalctl -xb -p err` (errors-only for this boot)
4. **Inspect the unit:** `systemctl cat <failed-unit>`
5. **Check dependencies:** `systemctl list-dependencies <failed-unit>`
6. **Fix the underlying cause** (almost always: bad fstab line, missing mount, network not ready, wrong permissions on a referenced path)
7. **Reload and reboot:** `systemctl daemon-reload && systemctl reboot`

---

## 🔬 Scenario Walkthrough (PBQ-style thinking)

> **Scenario:** A web server boots, but a custom `dataloader.service` that should run once after `postgresql.service` is ready is reporting `start request repeated too quickly` and `Failed with result 'start-limit-hit'` in `systemctl status`. The unit file declares `After=postgresql.service` and `Type=simple` with `ExecStart=/usr/local/bin/dataloader --once`. The binary works fine when run manually. What's the most likely root cause, and what's the fix?

**Walkthrough:**
1. The `--once` flag implies the binary exits 0 after success. With `Type=simple`, systemd considers the service "running" as long as the process is alive; when it exits, systemd marks it "deactivated."
2. Without `Restart=` or `RestartSec=`, systemd uses the default, and the unit has `StartLimitIntervalSec=10s, StartLimitBurst=5` defaults. If anything later (or a misconfigured `Restart=always`) keeps relaunching it 5 times in 10 seconds, you hit `start-limit-hit`.
3. The right unit type for a "do work and exit cleanly" job is **`Type=oneshot`** with `RemainAfterExit=yes` (so dependent units see this as "active" after it succeeded). Add `Wants=postgresql.service` to actually pull postgres in (After= is ordering only).

**Corrected unit:**
```ini
[Unit]
Description=Initial data loader
After=postgresql.service
Wants=postgresql.service

[Service]
Type=oneshot
RemainAfterExit=yes
ExecStart=/usr/local/bin/dataloader --once
User=appuser

[Install]
WantedBy=multi-user.target
```

This is the exact shape of a typical PBQ, a half-correct unit file with a subtle type/dependency mismatch.

---

## ⚠️ Exam Traps & Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "GRUB and GRUB2 are interchangeable" | GRUB Legacy (0.97) and GRUB2 (1.x+) have different configs and commands. Every modern distro uses GRUB2. |
| "Edit grub.cfg directly" | NO, it's regenerated. Edit `/etc/default/grub` and run `grub2-mkconfig` / `update-grub`. |
| "Runlevel 4 means something specific" | It's distro-defined / unused. Don't memorize a meaning, just know targets replaced runlevels. |
| "`systemctl reload` and `restart` are the same" | `reload` re-reads config without dropping connections. `restart` stops & starts (kills sessions). |
| "`enable` starts the service" | No, `enable` only adds the boot-time symlink. Use `enable --now` to do both. |
| "After= means depends-on" | `After=` is ordering only. `Requires=`/`Wants=` is the dependency. They compose. |
| "`Type=simple` is always right" | `simple` is for foreground daemons. Use `forking` for daemons that double-fork, `notify` for sd_notify-aware services, `oneshot` for run-and-exit jobs. |
| "systemd is just an init replacement" | systemd is also: logind, journald, timesyncd, resolved, networkd, udevd. It's an ecosystem. |
| "rescue.target == single-user mode forever" | Both rescue and emergency are *single-user-like*, but rescue mounts most of the FS; emergency mounts only / read-only and starts almost nothing. Emergency is deeper. |

---

## 🎓 Key Terms To Know (Add to Flashcards!)

| Term | Definition |
|------|------------|
| **UEFI / ESP** | Modern firmware standard; EFI System Partition (FAT32) where bootloaders live |
| **GRUB2** | Default Linux bootloader; config generated from `/etc/default/grub` |
| **initramfs / initrd** | In-memory root FS with drivers to mount the real root |
| **dracut / update-initramfs** | Tools that build the initramfs (RHEL / Debian respectively) |
| **PID 1** | The first user-space process; systemd on modern Linux |
| **Unit file** | `.service`, `.target`, `.timer`, `.mount`, `.socket`, `.path` config |
| **Target** | A grouping of units; equivalent to a runlevel |
| **systemctl** | The CLI to manage units |
| **journalctl** | The CLI to query the systemd binary journal |
| **`After=` vs `Requires=`** | Ordering vs dependency, orthogonal axes |
| **Drop-in override** | Per-admin `.conf` in `/etc/systemd/system/<unit>.d/` |
| **rescue.target** | Single-user maintenance mode |
| **emergency.target** | Even more minimal, root mounted read-only |
| **`systemd.unit=...` kernel param** | One-shot target override at GRUB |
| **`daemon-reload`** | Tells systemd to re-read unit files (always run after edits) |

### Acronyms cheat-row (Module 1)
| Acronym | Meaning |
|---------|---------|
| BIOS | Basic Input/Output System (legacy firmware) |
| UEFI | Unified Extensible Firmware Interface |
| ESP | EFI System Partition |
| MBR / GPT | Master Boot Record / GUID Partition Table |
| GRUB | GRand Unified Bootloader |
| PID | Process ID |
| TTY | TeleTYpewriter (terminal device) |
| SIGHUP | Signal Hangup (signal #1, used to ask daemons to reload) |

---

## 📊 Case Study, The Ubuntu 15.04 systemd Cutover

**Situation.** Ubuntu, the world's most popular consumer Linux desktop and a top-three server distribution, used Upstart as its init system from 2006 through Ubuntu 14.10 (released October 2014). Mark Shuttleworth himself had championed Upstart's event-driven model. Debian Ubuntu's upstream announced in February 2014 that it would adopt systemd as default for Debian 8 "Jessie."

**Decision.** Canonical announced on 14 February 2014 that Ubuntu would follow Debian and switch to systemd. Ubuntu 15.04 "Vivid Vervet" (April 2015) shipped with systemd as PID 1. The decision required rewriting every Upstart job (`.conf` in `/etc/init/`) as a systemd unit (`.service` in `/lib/systemd/system/`), updating documentation, retraining sysadmins, and handling regressions across thousands of derived distros (Mint, Pop!_OS, Kubuntu, Ubuntu Server, etc.).

**Outcome.** Within 18 months, Upstart was effectively dead. By 2017, every actively maintained mainstream Linux distribution (RHEL/CentOS 7+, Ubuntu 15.04+, Debian 8+, openSUSE, Arch, Fedora 15+) had adopted systemd. The systemd unit file became the single portable artifact for shipping a service to "any Linux," which dramatically simplified container images, Ansible roles, and configuration-management modules.

**Lesson for the exam / for practitioners.** When the exam shows you a service file, it will be a systemd `.service` unit, not a SysVinit script and not an Upstart job. The XK0-005 objectives explicitly assume systemd. But: legacy systems still exist. If you walk into a RHEL 6 environment in 2026 (yes, they exist on hardware that can't be replaced), you will see `chkconfig`, `service`, and `/etc/init.d/` scripts. Knowing the mapping (target ↔ runlevel, `systemctl status` ↔ `service status`, `systemctl enable` ↔ `chkconfig on`) is what separates a Linux admin from a Linux script-runner.

**Discussion (Socratic).**
- **Q1:** Upstart's event-driven model was technically elegant, services started when their dependencies fired events, not when an arbitrary runlevel was entered. Why did systemd's dependency-graph model win in practice anyway? Consider documentation, predictability, debugging tooling, and ecosystem inertia.
- **Q2:** systemd absorbs functionality (login management, network config, DNS (Domain Name System) resolution, container management) that traditional Unix philosophy says should be separate small programs. Argue for and against this consolidation. What does the exam care about?
- **Q3:** If you were standing up a new distribution from scratch in 2026 say, for an embedded edge appliance with a 200 MB RAM budget would you pick systemd, OpenRC (Gentoo), s6 (Alpine alternative), or write your own? Defend the answer.

---

## ✅ Module 1 Summary

You now know:

- 🚀 The 6-stage **boot chain** end to end: firmware → bootloader → kernel + initramfs → root pivot → systemd → default target
- 🎛️ **BIOS vs UEFI**, MBR vs GPT, and where the bootloader lives on each
- 📜 How **GRUB2** is configured (`/etc/default/grub`) and rebuilt (`grub2-mkconfig` / `update-grub`)
- 💾 What **initramfs** is for and when to rebuild it (`dracut -f` / `update-initramfs -u`)
- ⚙️ The history of **SysVinit → Upstart → systemd** and the runlevel ↔ target mapping
- 🛠️ Every important **`systemctl`** verb (start / enable / status / cat / edit / daemon-reload)
- 📊 How to read and write a **unit file** with the right `Type=` and dependency directives
- 🔍 How to use **`journalctl`** to investigate boot and service problems

**Next steps:**
1. 🎥 Watch the curated videos: [Videos.md](./Videos.md)
2. ✏️ Take the quiz: [Quiz.md](./Quiz.md), aim for 22/26
3. 📋 Review the [Cheat-Sheet.md](./Cheat-Sheet.md) before bed
4. ➡️ Move on: [Module 2, Filesystem Layout & Permissions](../Module-02-Filesystem-Permissions/Reading.md)

> **Where this leads.**
> - Inside this course: [Module 2](../Module-02-Filesystem-Permissions/Reading.md) operationalizes the *what* of `/etc/fstab` you just touched in the boot story; [Module 5](../Module-05-Users-Groups/Reading.md) hooks PAM into the login flow that systemd-logind manages; [Module 7](../Module-07-Kernel-Modules/Reading.md) covers the kernel modules that the initramfs and udev rely on.
> - Practice: Practice Exam 1 has ~9 questions drawing from this module; the Final Mock has ~12.

---

## 📚 Further Reading (Optional)

**Primary sources:**
- 📄 Lennart Poettering & Kay Sievers (2010). [*Rethinking PID 1*](http://0pointer.de/blog/projects/systemd.html), the original systemd manifesto. Read at least the first half.
- 📄 systemd project documentation, [`systemd.unit(5)`, `systemd.service(5)`, `journalctl(1)`, `systemctl(1)`](https://www.freedesktop.org/software/systemd/man/) man pages.
- 📄 GRUB Manual, [GNU GRUB 2.x official docs](https://www.gnu.org/software/grub/manual/grub/grub.html).
- 📄 UEFI Forum, [Unified Extensible Firmware Interface (UEFI) Specification](https://uefi.org/specifications), §3 (Boot Manager) and §13 (Protocols).
- 📄 Linux Filesystem Hierarchy Standard 3.0 (2015), [pathname.com mirror](https://refspecs.linuxfoundation.org/FHS_3.0/fhs-3.0.html).

**Practitioner / exam:**
- 📖 [CompTIA Linux+ XK0-005 Exam Objectives (PDF)](https://www.comptia.org/certifications/linux), read the official objectives at least twice.
- 📖 Sander van Vugt, *CompTIA Linux+ XK0-005 Cert Guide* (Pearson, 2023), Chapters 4 & 5 cover this module's material in depth.
- 📖 Christopher Negus, *Linux Bible* (Wiley, 11th ed., 2020), Chapters 14–15 (booting and systemd).
- 📖 Brian Ward, *How Linux Works* (No Starch, 3rd ed., 2021), Chapters 5–6 (most readable boot-chain walkthrough in print).
