# ✏️ Module 1 Quiz: Linux Boot, Init & systemd

> **Instructions:** Answer all 26 questions WITHOUT looking at the reading.
> Then check your answers below. Aim for 22/26 minimum.
>
> Every question is tagged with its **Bloom's taxonomy level** so you can self-diagnose: if you miss recall ("Remember") questions, you need more flashcards; if you miss application ("Apply") or evaluation ("Analyze") questions, you need more scenario practice.
>
> **Bloom distribution (this quiz):** Remember 6 · Understand 6 · Apply 7 · Analyze/Evaluate 6 · Create 1.

---

## Questions

### Q1. Which stage of the Linux boot process is responsible for loading kernel modules needed to mount the real root filesystem? *(Remember)*
A. UEFI firmware
B. GRUB2 bootloader
C. initramfs (initrd)
D. systemd PID 1

---

### Q2. On a modern Ubuntu 22.04 server, which command regenerates the GRUB configuration after editing `/etc/default/grub`? *(Remember)*
A. `grub2-mkconfig -o /boot/grub2/grub.cfg`
B. `update-grub`
C. `grub-install /dev/sda`
D. `grub2-set-default 0`

---

### Q3. Which systemd target is the modern equivalent of SysVinit runlevel 3? *(Understand)*
A. `graphical.target`
B. `multi-user.target`
C. `rescue.target`
D. `default.target`

---

### Q4. You edit `/etc/systemd/system/myapp.service`. Which command MUST you run before `systemctl restart myapp` takes the change? *(Apply)*
A. `systemctl reload-or-restart myapp`
B. `systemctl reset-failed myapp`
C. `systemctl daemon-reload`
D. `systemd-analyze verify myapp.service`

---

### Q5. Which boot stage runs BEFORE GRUB2 on a UEFI machine? *(Remember)*
A. The kernel
B. systemd
C. UEFI firmware reading the ESP
D. initramfs

---

### Q6. A custom unit declares `After=postgresql.service` but no `Requires=` or `Wants=`. If postgresql is not enabled or running at boot, what happens to the custom unit? *(Analyze)*
A. systemd refuses to load the unit file
B. systemd starts the unit anyway — `After=` is ordering only, not dependency
C. systemd starts postgresql first
D. systemd writes to `journalctl` then halts

---

### Q7. Which command shows ONLY kernel messages from the current boot? *(Remember)*
A. `journalctl -k -b`
B. `dmesg --clear`
C. `journalctl --all`
D. `journalctl -u kernel`

---

### Q8. The default target on a server should be text-mode multi-user. Which command sets it persistently? *(Apply)*
A. `systemctl isolate multi-user.target`
B. `systemctl set-default multi-user.target`
C. `init 3`
D. `systemctl enable multi-user.target`

---

### Q9. Which file does GRUB2 read on a RHEL 9 system to generate the boot menu? *(Remember)*
A. `/boot/grub2/grub.cfg`
B. `/etc/default/grub` is the source; the generated config is at `/boot/grub2/grub.cfg`
C. `/etc/grub2.cfg` directly
D. `/etc/sysconfig/grub-defaults`

---

### Q10. You want to add `vm.swappiness=10` so it persists across reboots and is loaded by systemd. Which approach is BEST? *(Apply)*
A. Edit `/proc/sys/vm/swappiness` directly
B. `echo 10 > /etc/swappiness`
C. Drop a file at `/etc/sysctl.d/99-swap.conf` with `vm.swappiness = 10`
D. Add it to `~/.bashrc`

---

### Q11. A user reports `myweb.service` keeps restarting then failing with `start-limit-hit`. Which unit-file directive can RELAX the start-limit policy? *(Analyze)*
A. `StartLimitBurst=` and `StartLimitIntervalSec=`
B. `Restart=never`
C. `Type=oneshot`
D. `After=network.target`

---

### Q12. The very first user-space process on a modern Linux system has PID 1. What is it usually? *(Remember)*
A. init from SysVinit
B. systemd
C. bash
D. kthreadd

---

### Q13. Which directive in a `.service` unit's `[Install]` section is used to declare the boot-time target a service belongs to? *(Understand)*
A. `Requires=`
B. `After=`
C. `WantedBy=`
D. `Type=`

---

### Q14. After updating `/etc/crypttab` to unlock a new LUKS volume at boot, what additional rebuild step is REQUIRED to make the change take effect? *(Apply)*
A. `systemctl daemon-reload`
B. Rebuild the initramfs (`dracut -f` on RHEL or `update-initramfs -u` on Debian)
C. `grub-install`
D. Nothing — `/etc/crypttab` is read live by systemd

---

### Q15. A unit file's `Type=` is `oneshot`. Without `RemainAfterExit=yes`, what state does the unit appear in to dependent units after a successful exit? *(Understand)*
A. Active
B. Inactive (dependents may not see it as "completed")
C. Failed
D. Reloading

---

### Q16. Which command lists all currently *failed* systemd units? *(Remember)*
A. `systemctl --failed`
B. `journalctl --failed`
C. `systemctl list-jobs`
D. `systemctl status --all`

---

### Q17. The boot drops to an emergency shell. Which target offers slightly more services (most filesystems mounted) than `emergency.target`? *(Understand)*
A. `multi-user.target`
B. `rescue.target`
C. `graphical.target`
D. `default.target`

---

### Q18. From the GRUB menu, which key edits the highlighted boot entry to add a one-shot kernel parameter? *(Remember)*
A. `c`
B. `e`
C. `Esc`
D. `F1`

---

### Q19. Which directive prevents a unit from being started at all (via mask)? *(Understand)*
A. `systemctl disable <unit>`
B. `systemctl stop <unit>`
C. `systemctl mask <unit>`
D. `systemctl reset-failed <unit>`

---

### Q20. A service runs as a single foreground process and never daemonizes. The correct `Type=` is: *(Apply)*
A. `simple`
B. `forking`
C. `oneshot`
D. `notify`

---

### Q21. After running `systemctl enable nginx`, what filesystem change occurred? *(Analyze)*
A. The nginx binary moved to `/usr/local/bin`
B. A `.wants/` symlink was created (e.g. `/etc/systemd/system/multi-user.target.wants/nginx.service`)
C. The unit file was copied to `/run/systemd/`
D. `/etc/init.d/nginx` was generated

---

### Q22. Which two `journalctl` flags would you combine to follow nginx logs live? *(Apply)*
A. `-u nginx -f`
B. `-x -e`
C. `-b -k`
D. `--vacuum-time=7d`

---

### Q23. A boot-time mount in `/etc/fstab` fails because the external storage is intermittently absent. Which mount option would let the system boot even if the mount fails? *(Analyze)*
A. `auto`
B. `defaults`
C. `nofail`
D. `ro`

---

### Q24. Which sequence of commands correctly creates an admin drop-in to raise `LimitNOFILE` for nginx without editing the distro-supplied unit? *(Evaluate)*
A. `vi /lib/systemd/system/nginx.service; systemctl daemon-reload`
B. `systemctl edit nginx.service` (creates `/etc/systemd/system/nginx.service.d/override.conf`); `systemctl daemon-reload; systemctl restart nginx`
C. `systemctl set-property nginx.service LimitNOFILE=65535`
D. `ulimit -n 65535; systemctl restart nginx`

---

### Q25. The default GRUB timeout is 5 seconds. Where do you change it so the change survives the next `grub2-mkconfig`? *(Apply)*
A. Edit `/boot/grub2/grub.cfg` directly and save
B. Set `GRUB_TIMEOUT=10` in `/etc/default/grub` then regenerate the config
C. `grub-set-default 10`
D. Boot a USB rescue image and re-install GRUB

---

### Q26. **(Create-level)** You are designing a `dataimport.service` unit that runs `python /opt/import.py --once` after the database is up and exits cleanly. The unit must (a) order itself after `postgresql.service`, (b) actually pull postgres in if not already started, (c) appear "active" to a downstream `report.service` that depends on it, (d) NOT auto-restart on success. Which combination is correct? *(Create)*

> *Create-level note:* you're composing several directives into a correct minimal unit.

A. `Type=simple`, `Requires=postgresql.service`, `Restart=always`
B. `Type=oneshot`, `RemainAfterExit=yes`, `After=postgresql.service`, `Wants=postgresql.service`
C. `Type=notify`, `After=postgresql.service`
D. `Type=forking`, `Wants=postgresql.service`, `Restart=on-failure`

---

## 🎯 Answers + Explanations

### Q1: **C. initramfs (initrd)**
The initramfs is a small in-memory root FS containing the modules (LVM, LUKS, RAID, FS drivers) needed to mount the *real* root. UEFI and GRUB run earlier; systemd runs after.

### Q2: **B. `update-grub`**
On Debian/Ubuntu, `update-grub` wraps `grub-mkconfig -o /boot/grub/grub.cfg`. Choice A is the RHEL syntax. `grub-install` reinstalls the bootloader binary (different operation). `grub2-set-default` only changes which entry is default.

### Q3: **B. `multi-user.target`**
Runlevel 3 = text multi-user. `graphical.target` = runlevel 5. `rescue.target` ≈ runlevel 1 (single-user).

### Q4: **C. `systemctl daemon-reload`**
After editing any unit file on disk, you MUST tell systemd to re-read it. `daemon-reload` is the verb. Without it, `restart` will use the cached (old) version.

### Q5: **C. UEFI firmware reading the ESP**
Firmware runs at power-on, reads the EFI System Partition (FAT32, mounted at `/boot/efi`), and launches the EFI binary that is GRUB2 (`grubx64.efi`). Then GRUB loads the kernel.

### Q6: **B. systemd starts the unit anyway**
`After=` is ordering-only. To require postgres to actually be present, add `Requires=postgresql.service` or `Wants=postgresql.service`. This is one of the most-confused systemd facts.

### Q7: **A. `journalctl -k -b`**
`-k` = kernel only (the `dmesg` equivalent in journald). `-b` = this boot. Combined, you get only kernel messages for the current boot.

### Q8: **B. `systemctl set-default multi-user.target`**
`set-default` updates the `/etc/systemd/system/default.target` symlink. `isolate` switches to it now without making it the boot default. `init 3` works on legacy systems via the systemd compatibility layer, but isn't the persistent fix. `enable` doesn't apply to targets in the same way.

### Q9: **B. `/etc/default/grub` (source) → `/boot/grub2/grub.cfg` (generated)**
Read carefully — the source you edit is `/etc/default/grub`; GRUB itself reads the generated `/boot/grub2/grub.cfg` (RHEL) or `/boot/grub/grub.cfg` (Debian). Choice A is technically what GRUB reads at boot, but the question asks where you make persistent edits.

### Q10: **C. `/etc/sysctl.d/99-swap.conf`**
Drop files under `/etc/sysctl.d/` are loaded by `systemd-sysctl.service` at boot. `/etc/sysctl.conf` works too but is conventionally for distro defaults. Writing directly to `/proc/sys/vm/swappiness` doesn't persist.

### Q11: **A. `StartLimitBurst=` and `StartLimitIntervalSec=`**
Defaults: 5 starts per 10s. Raising the burst or interval relaxes the limit. `Restart=never` would prevent restart entirely (different problem). `Type=oneshot` changes the lifecycle, not the rate limit.

### Q12: **B. systemd**
On every mainstream distro since ~2015, systemd is PID 1. Choice A (SysVinit) was retired; choice D (kthreadd) is a kernel thread parent, not user-space init.

### Q13: **C. `WantedBy=`**
`[Install] WantedBy=multi-user.target` is what `systemctl enable` reads to create the `.wants/` symlink. Without it, `enable` reports "no install information."

### Q14: **B. Rebuild the initramfs**
`/etc/crypttab` is consumed at very early boot from inside the initramfs. The initramfs must be rebuilt with the new entry baked in.

### Q15: **B. Inactive**
By default a `oneshot` service that exits cleanly is marked inactive. Downstream units that require it as a precondition may not see it as having completed unless you add `RemainAfterExit=yes`.

### Q16: **A. `systemctl --failed`**
This is the first command to type on any unhealthy system. It's a habit worth building.

### Q17: **B. `rescue.target`**
Rescue mounts most local filesystems and starts more services than emergency. Emergency runs basically nothing — root is mounted read-only and you have just a shell.

### Q18: **B. `e`**
`e` edits the highlighted entry. `c` drops to a GRUB command line. Then Ctrl-X (or F10) to boot the edited entry.

### Q19: **C. `systemctl mask <unit>`**
`mask` creates a symlink to `/dev/null` so the unit cannot be started by any means. `disable` only removes the boot-time symlink.

### Q20: **A. `simple`**
A foreground process that doesn't fork = `Type=simple`. `forking` is for daemons that double-fork. `notify` requires the program to call `sd_notify()`. `oneshot` is for run-and-exit jobs.

### Q21: **B. A `.wants/` symlink was created**
That's the entire mechanism of "enable" — a symlink at `/etc/systemd/system/<target>.wants/<unit>` pulled in when the target activates.

### Q22: **A. `-u nginx -f`**
`-u` filters by unit, `-f` follows live (like `tail -f`). The combination is the single most useful debugging incantation.

### Q23: **C. `nofail`**
`nofail` tells systemd not to fail the dependent `local-fs.target` if the mount can't happen. Combine with `x-systemd.device-timeout=<sec>` to bound the wait.

### Q24: **B. `systemctl edit nginx.service`**
The override file lives under `/etc/systemd/system/nginx.service.d/`. Distro-supplied unit files in `/lib/systemd/system/` are untouched and survive package upgrades. After saving, daemon-reload + restart.

### Q25: **B. Set `GRUB_TIMEOUT=10` in `/etc/default/grub` then regenerate**
`/boot/grub2/grub.cfg` is regenerated from this source. Editing the generated file is a textbook trap — the change is wiped the next time you regenerate.

### Q26: **B. `Type=oneshot`, `RemainAfterExit=yes`, `After=postgresql.service`, `Wants=postgresql.service`**
- `oneshot` is the right type for "do work and exit."
- `RemainAfterExit=yes` makes the unit appear active after a successful exit, so `report.service` (which depends on it) can know it succeeded.
- `After=` orders it after postgres; `Wants=` actually pulls postgres in. (`Requires=` would also work but is stricter — a failure of postgres would fail the whole chain.)

---

## 📊 Score Yourself

- 25–26/26 → 🏆 Module 1 mastered. Onward to the filesystem.
- 22–24/26 → ✅ Solid. Note the gaps, then move on.
- 18–21/26 → ⚠️ Re-read the unit-file and `journalctl` sections.
- <18/26 → 🔁 Restart the Reading.md, then re-quiz tomorrow.

---

## 🃏 Add To Your Flashcards

- The 6 boot stages, in order
- `systemctl` verbs: start / stop / restart / reload / enable / disable / mask / cat / edit / daemon-reload
- `Type=` values: simple / forking / oneshot / notify
- `[Unit]` ordering vs dependency: `After=` vs `Wants=` vs `Requires=`
- `journalctl` flags: `-u`, `-b`, `-f`, `-k`, `-p`, `-x`
- Where unit files live: `/lib/systemd/system/` (distro) vs `/etc/systemd/system/` (admin)

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 2 — Filesystem Layout & Permissions](../Module-02-Filesystem-Permissions/Reading.md)
