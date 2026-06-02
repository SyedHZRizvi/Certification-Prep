# 📋 Module 1 Cheat Sheet: Boot, Init & systemd

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 🚀 The 6-Stage Boot Chain (Memorize the Order)

```
UEFI/BIOS  →  GRUB2  →  Kernel+initramfs  →  Root pivot  →  systemd PID 1  →  default.target
```

🚨 *Almost every boot-failure question maps to one of these stages.*

---

## 🔥 Firmware & Bootloader

| Trait | BIOS | UEFI |
|-------|------|------|
| Partition table | MBR (2 TiB max) | GPT (huge) |
| Boot location | 512-byte sector LBA 0 | EFI System Partition (FAT32, `/boot/efi`) |
| Secure Boot | No | Yes (via shim + MOK) |

| Distro | grub config (read) | Edit source | Rebuild |
|--------|--------------------|-------------|---------|
| RHEL/CentOS/Fedora | `/boot/grub2/grub.cfg` | `/etc/default/grub` | `grub2-mkconfig -o /boot/grub2/grub.cfg` |
| Debian/Ubuntu | `/boot/grub/grub.cfg` | `/etc/default/grub` | `update-grub` |

🎯 **GRUB menu keys:** `e` = edit entry · `c` = GRUB shell · `Ctrl-X` (or `F10`) = boot

---

## 💾 initramfs Rebuild Triggers

After ANY of: new kernel · new LUKS device · `/etc/crypttab` change · root FS layout change · LVM rework.

| Distro | Command |
|--------|---------|
| RHEL family | `dracut -f` |
| Debian family | `update-initramfs -u` |

---

## ⚙️ Runlevel ↔ Target Map

| Runlevel | systemd target |
|----------|----------------|
| 0 | `poweroff.target` |
| 1 / S | `rescue.target` |
| 3 | `multi-user.target` |
| 5 | `graphical.target` |
| 6 | `reboot.target` |

`systemctl get-default` · `systemctl set-default multi-user.target` · `systemctl isolate <target>`

---

## 🎛️ systemctl Verbs Cheat Block

| Verb | What it does |
|------|--------------|
| `start` / `stop` / `restart` | Now-only, no persistence |
| `enable` / `disable` | Boot-time symlink only |
| `enable --now` | Both — most-used admin verb |
| `reload` | Re-read config without dropping connections (SIGHUP) |
| `status` | State + last 10 log lines |
| `cat` | Effective unit file (drop-ins merged) |
| `edit` | Create drop-in at `/etc/systemd/system/<unit>.d/override.conf` |
| `daemon-reload` | After ANY unit-file edit (ALWAYS) |
| `mask` / `unmask` | Forbid / re-allow starting |
| `--failed` | List failed units (first thing to type) |

---

## 📜 Unit File Skeleton (Memorize the 3 Sections)

```ini
[Unit]
Description=...
After=network-online.target          # ordering only
Wants=network-online.target          # weak dep (don't fail us)
Requires=postgresql.service          # strong dep (fail if missing)

[Service]
Type=simple                          # simple / forking / oneshot / notify
ExecStart=/path/to/bin
Restart=on-failure
RestartSec=5s
User=myapp
Group=myapp
EnvironmentFile=/etc/myapp/env

[Install]
WantedBy=multi-user.target           # what `enable` hooks into
```

| `Type=` | When to use |
|---------|-------------|
| `simple` | Foreground daemon, no fork (most common) |
| `forking` | Classic Unix daemon that double-forks |
| `oneshot` (+ `RemainAfterExit=yes`) | Run-and-exit job |
| `notify` | App calls `sd_notify()` when ready |
| `dbus` | Service registers a DBus name when ready |

🚨 **After= is ordering, NOT dependency.** Use `Wants=` or `Requires=` for "must be there."

---

## 📜 journalctl Cheat Block

| Command | Use |
|---------|-----|
| `journalctl -u nginx -f` | Follow one unit live |
| `journalctl -b` | This boot |
| `journalctl -b -1` | Previous boot (needs persistent journal) |
| `journalctl -k` | Kernel only (dmesg replacement) |
| `journalctl -p err -b` | Errors+ this boot |
| `journalctl --since "10 min ago"` | Time-windowed |
| `journalctl -xe` | Last entries + hints |
| `journalctl --vacuum-time=7d` | Trim old logs |

**Persistence:** `Storage=persistent` in `/etc/systemd/journald.conf` → logs survive reboot at `/var/log/journal/`.

---

## 🛠️ Boot-Failure Playbook (1-Pager)

1. GRUB menu → `e` → append `systemd.unit=rescue.target` → Ctrl-X
2. `systemctl --failed`
3. `journalctl -xb -p err`
4. `systemctl cat <unit>` · `systemctl list-dependencies <unit>`
5. Fix fstab / unit file / permissions
6. `systemctl daemon-reload && systemctl reboot`

---

## 🏆 Exam Power Phrases

When you see these in answers, they're often **right**:

- ✅ "Run `systemctl daemon-reload` after editing unit files"
- ✅ "Use `systemctl edit <unit>` to create a drop-in"
- ✅ "Add `nofail` to fstab for optional mounts"
- ✅ "`journalctl -u <unit>` to scope logs to one service"
- ✅ "`Wants=` for weak dependency, `Requires=` for strong"

When you see these, they're often **wrong**:

- ❌ "Edit `/boot/grub2/grub.cfg` directly"
- ❌ "Edit `/lib/systemd/system/<unit>.service`"
- ❌ "`After=` means depends-on"
- ❌ "`enable` also starts the service"
- ❌ "`Type=simple` works for a script that just exits"

---

## 🗓️ Key Facts To Memorize Cold

- PID 1 is **systemd** on every modern distro
- GRUB2 config is **generated**, not hand-edited
- initramfs lives in `/boot/`; rebuild with `dracut -f` (RHEL) or `update-initramfs -u` (Debian)
- `systemctl enable --now` is the most-used systemd admin verb
- `journalctl -u <unit> -f` is the most-used systemd debug verb
- Unit-file precedence: `/etc/systemd/system/` > `/run/systemd/system/` > `/lib/systemd/system/`

---

## ✏️ Quick Self-Check

Cover the answers and recite:

1. Order the 6 boot stages from power-on to login prompt. ___
2. Where do you persistently edit GRUB on Ubuntu, and what command rebuilds it? ___
3. Difference between `After=` and `Requires=`? ___
4. How do you make a drop-in override for nginx without touching the distro file? ___
5. Three `journalctl` flags you'd use to debug a service that died last night? ___

If you can answer all 5 in under 60 seconds, you own this module. ✅

---

➡️ [Module 2: Filesystem Layout & Permissions](../Module-02-Filesystem-Permissions/Reading.md)
