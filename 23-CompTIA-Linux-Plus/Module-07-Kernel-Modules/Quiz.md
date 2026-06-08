# ✏️ Module 7 Quiz: Kernel Modules, Devices & LVM

> **Instructions:** Answer all 26 questions WITHOUT looking at the reading. Aim for 22/26 minimum.
>
> **Bloom distribution (this quiz):** Remember 6 · Understand 6 · Apply 7 · Analyze/Evaluate 6 · Create 1.

---

## Questions

### Q1. Which command shows the version of the CURRENTLY RUNNING kernel? *(Remember)*
A. `cat /etc/os-release`
B. `uname -r`
C. `lsb_release -a`
D. `cat /proc/uptime`

---

### Q2. Where do loadable kernel modules for the running kernel live? *(Remember)*
A. `/usr/lib/modules/$(uname -r)/`
B. `/lib/modules/$(uname -r)/`
C. `/boot/modules/`
D. `/etc/modules/`

---

### Q3. To LOAD a module AND its dependencies, use: *(Apply)*
A. `insmod`
B. `modprobe`
C. `depmod`
D. `lsmod`

---

### Q4. Where do you place a custom `blacklist nouveau` directive so it persists? *(Apply)*
A. `/etc/modules.conf`
B. `/etc/modprobe.d/blacklist-nouveau.conf`
C. `/etc/modules`
D. `/usr/lib/modules/conf.d/`

---

### Q5. After blacklisting a module that's part of the boot path (e.g., a storage driver), what additional step is REQUIRED before reboot? *(Analyze)*
A. `systemctl daemon-reload`
B. Rebuild the initramfs (`dracut -f` or `update-initramfs -u`)
C. Run `grub-install`
D. Reinstall the kernel

---

### Q6. Which command shows PCI devices AND the kernel driver bound to each? *(Remember)*
A. `lspci`
B. `lspci -v`
C. `lspci -k`
D. `lshw -class pci`

---

### Q7. The kernel detected a new disk but `/dev/sdb` doesn't exist. The most likely fix is: *(Analyze)*
A. Reboot
B. Run `udevadm trigger` to re-emit uevents
C. `mkdir /dev/sdb`
D. `mknod /dev/sdb b 8 16`

---

### Q8. Which filesystem exposes the kernel's process and runtime info? *(Remember)*
A. `/dev`
B. `/proc` (procfs)
C. `/sys` (sysfs)
D. `/run` (tmpfs)

---

### Q9. The LVM hierarchy bottom-up is: *(Remember)*
A. LV → VG → PV
B. PV → VG → LV
C. PE → VG → LV
D. VG → PV → LV

---

### Q10. To extend the LV `/dev/vg_data/lv_app` by 100 GB AND grow its filesystem in ONE command, use: *(Apply)*
A. `lvextend -L +100G /dev/vg_data/lv_app && resize2fs /dev/vg_data/lv_app`
B. `lvextend -r -L +100G /dev/vg_data/lv_app`
C. `lvresize +100G /dev/vg_data/lv_app`
D. Both A and B work (A is 2 commands, B is 1)

---

### Q11. Which LVM operation requires you to UNMOUNT the filesystem first? *(Understand)*
A. Extending an LV
B. Reducing/shrinking an LV
C. Taking a snapshot
D. Renaming an LV

---

### Q12. The CORRECT sequence to shrink an ext4 LV (with the new size in mind) is: *(Evaluate)*
A. `lvreduce -L 400G ... && resize2fs ... 400G`
B. `resize2fs ... 400G && lvreduce -L 400G ...` (shrink FS first, then LV)
C. `umount ... && resize2fs ... 400G && lvreduce -L 400G ...`
D. `lvreduce -r -L 400G ...` (lvreduce with -r doesn't do this safely)

---

### Q13. Which command shows block devices in tree form, with mountpoints? *(Remember)*
A. `lsblk`
B. `df -h`
C. `mount`
D. `parted /dev/sda print`

---

### Q14. A `Snapshot` LV's value goes to ZERO (becomes invalid) when: *(Understand)*
A. The source LV is unmounted
B. The snapshot LV fills up beyond its allocation (source changes more than the snapshot can track)
C. The kernel is upgraded
D. A reboot occurs

---

### Q15. To re-read a freshly-changed partition table without rebooting, use: *(Apply)*
A. `udevadm reload`
B. `partprobe` (or `partx -u`)
C. `mount -a`
D. `kpartx -r`

---

### Q16. The MAJOR difference between `/proc` and `/sys` is: *(Understand)*
A. /proc is on disk, /sys is virtual
B. /sys is older, /proc is newer
C. /proc shows processes + runtime kernel info; /sys is the modern device-driver tree
D. They are aliases of each other

---

### Q17. A udev rule's `SYMLINK+="ftdi"` directive does what? *(Understand)*
A. Renames /dev/ttyUSB0 to /dev/ftdi (replacing it)
B. Creates an additional symlink at /dev/ftdi pointing to the device's primary node
C. Mounts the device at /ftdi
D. Loads the FTDI driver

---

### Q18. Which kernel command-line tool displays the system's BIOS info from SMBIOS? *(Remember)*
A. `lspci`
B. `lscpu`
C. `dmidecode -t bios`
D. `cat /proc/bios`

---

### Q19. After editing `/etc/udev/rules.d/99-mine.rules`, the activation command is: *(Apply)*
A. `udevadm control --reload-rules` (then trigger the device's uevent)
B. `systemctl restart udev`
C. `service udev reload`
D. Reboot

---

### Q20. Which LVM tool shows the FREE space remaining in a VG? *(Apply)*
A. `pvs`
B. `vgs` (its "VFree" column)
C. `lvs`
D. `df -h`

---

### Q21. A user reports `dmesg` is empty on a normally-running server. The MOST likely cause is: *(Analyze)*
A. The kernel is broken
B. The ring buffer was cleared (`dmesg --clear` was run) or has wrapped, use `journalctl -k` for persistence
C. The user lacks permissions
D. dmesg is disabled

---

### Q22. Which command lists USB devices in TREE form? *(Apply)*
A. `lsusb`
B. `lsusb -t`
C. `lsusb -v`
D. `lspci -t`

---

### Q23. Which is TRUE about XFS resize behavior? *(Evaluate)*
A. XFS can grow AND shrink online
B. XFS can grow (with `xfs_growfs`) but CANNOT shrink, only backup-mkfs-restore
C. XFS can only shrink
D. XFS supports no online resize at all

---

### Q24. After installing a new kernel (e.g., via `dnf upgrade kernel`), what happens to modules from the old kernel? *(Analyze)*
A. They are deleted automatically
B. They remain in `/lib/modules/<old-version>/` and are still usable when booting the old kernel
C. They are converted to the new format
D. They become unusable everywhere

---

### Q25. To make a kernel parameter (e.g., `net.ipv4.ip_forward=1`) persistent and loaded by systemd at boot, you should: *(Apply)*
A. `echo 1 > /proc/sys/net/ipv4/ip_forward`
B. Drop a file at `/etc/sysctl.d/99-forwarding.conf` with `net.ipv4.ip_forward = 1`
C. Add it to `~/.bashrc`
D. Run `sysctl -w net.ipv4.ip_forward=1` (runtime only)

---

### Q26. **(Create-level)** You have three blank 1 TB disks `/dev/sdb`, `/dev/sdc`, `/dev/sdd`. Compose the MINIMUM sequence (assume parted has created a GPT partition spanning each whole disk with LVM type flag set on `/dev/sd[bcd]1`) to (a) create a VG `vg_archive`, (b) carve an XFS LV `lv_data` of 2 TB, (c) mount at `/srv/archive` persistently, with `nofail`. *(Create)*

> *Create-level note:* you're composing the 5 fundamental LVM steps + format + fstab.

A.
```
pvcreate /dev/sd[bcd]1
vgcreate vg_archive /dev/sd[bcd]1
lvcreate -L 2T -n lv_data vg_archive
mkfs.xfs /dev/vg_archive/lv_data
echo "/dev/vg_archive/lv_data /srv/archive xfs defaults,nofail 0 2" >> /etc/fstab
mkdir -p /srv/archive && mount -a
```
B.
```
mkfs.xfs /dev/sdb /dev/sdc /dev/sdd
mount -a
```
C.
```
lvcreate vg_archive -L 2T -n lv_data
mkfs.xfs /dev/vg_archive/lv_data
mount /dev/vg_archive/lv_data /srv/archive
```
D.
```
pvcreate /dev/sdb /dev/sdc /dev/sdd
mkfs.xfs /dev/sdb
mount /dev/sdb /srv/archive
```

---

## 🎯 Answers + Explanations

### Q1: **B. `uname -r`**
`uname -r` prints the kernel release (e.g. `5.15.0-89-generic`). `-a` prints everything; `-s` just OS name. `/etc/os-release` describes the distro, not the kernel.

### Q2: **B. `/lib/modules/$(uname -r)/`**
Each installed kernel has its own modules tree at `/lib/modules/<version>/`. Some distros symlink `/lib` to `/usr/lib` (and choice A is then technically also valid via the symlink) but the canonical path is `/lib/modules/`.

### Q3: **B. `modprobe`**
`modprobe` resolves module dependencies (reads /lib/modules/.../modules.dep) and loads them in order. `insmod` loads a specific `.ko` with no dep resolution. `depmod` rebuilds the dep database. `lsmod` lists what's loaded.

### Q4: **B. `/etc/modprobe.d/blacklist-nouveau.conf`**
`/etc/modprobe.d/` is the admin-owned directory for modprobe config. `/lib/modprobe.d/` is distro-owned (don't put admin changes there). `/etc/modules` is the legacy auto-load list (now `/etc/modules-load.d/`).

### Q5: **B. Rebuild the initramfs**
Boot-path modules (storage, encryption, RAID) are baked into the initramfs. Blacklisting in /etc/modprobe.d/ alone doesn't affect the initramfs. Use `dracut -f` (RHEL) or `update-initramfs -u` (Debian).

### Q6: **C. `lspci -k`**
`-k` shows the kernel module providing the driver and the actual driver in use. `lspci -v` shows resources but not always driver.

### Q7: **B. `udevadm trigger`**
If kernel detected the device (visible in `dmesg`) but the /dev node is missing, the udev uevent likely failed or didn't fire. `udevadm trigger` re-emits events.

### Q8: **B. `/proc`**
`/proc` (procfs) holds process info (`/proc/<pid>/`), kernel runtime info (`/proc/cpuinfo`, `/proc/meminfo`), and sysctl tunables (`/proc/sys/`). `/sys` (sysfs) is the device tree.

### Q9: **B. PV → VG → LV**
Physical Volume (a disk/partition) → Volume Group (pool) → Logical Volume (carved from the pool).

### Q10: **D. Both A and B work**
`lvextend -r` (the `-r` is `--resizefs`) does both in one command. The two-step (A) is the explicit form; both produce the same result.

### Q11: **B. Reducing/shrinking an LV**
Shrinking requires unmount + fsck + resize FS smaller + then lvreduce. Extending (live), snapshots, and renaming can all happen mounted.

### Q12: **C. `umount && resize2fs ... 400G && lvreduce -L 400G ...`**
You MUST shrink the FILESYSTEM FIRST (to move data within the new boundary), then shrink the LV. Reverse order = lose data. Also requires unmount + e2fsck -f.

### Q13: **A. `lsblk`**
Tree form by default, with mount points. `lsblk -f` adds fstype + UUID.

### Q14: **B. The snapshot LV fills up**
LVM snapshots are CoW, they store changed blocks. If the source LV changes more than the snapshot can hold, the snapshot is invalidated.

### Q15: **B. `partprobe` (or `partx -u`)**
Tells the kernel to re-read partition tables. Especially useful after `parted` changes when the device is in use.

### Q16: **C. /proc = process + runtime; /sys = device tree (newer)**
/proc has been around since the 90s for process info. /sys (sysfs) was introduced in kernel 2.6 specifically to expose devices and drivers in a structured tree.

### Q17: **B. Creates an additional symlink**
`SYMLINK+="ftdi"` creates `/dev/ftdi` pointing to the primary devnode (e.g., `/dev/ttyUSB0`). The primary node is untouched.

### Q18: **C. `dmidecode -t bios`**
dmidecode reads SMBIOS tables. `-t bios`, `-t memory`, `-t system`, `-t processor` are the most common filters.

### Q19: **A. `udevadm control --reload-rules`**
After editing rules.d files, reload the rules. Then either `udevadm trigger` the device or unplug/replug.

### Q20: **B. `vgs`**
The `vgs` output includes a `VFree` column, free space available for new LV allocation.

### Q21: **B. Buffer cleared or wrapped, use `journalctl -k`**
The kernel ring buffer is finite in RAM. Heavy boot output or `dmesg --clear` can leave it empty. `journalctl -k` is persistent if journald is configured for `Storage=persistent`.

### Q22: **B. `lsusb -t`**
Tree form shows the USB topology (host controllers, hubs, devices). Useful for figuring out which physical port a device is on.

### Q23: **B. Grow only, no shrink**
XFS deliberately doesn't support shrink. To shrink: backup, mkfs.xfs smaller, restore.

### Q24: **B. They remain in `/lib/modules/<old-version>/`**
Each kernel install gets its own modules tree. The old one stays as long as the old kernel package is installed. You can boot the old kernel from GRUB and it has working modules.

### Q25: **B. `/etc/sysctl.d/99-forwarding.conf`**
Files in `/etc/sysctl.d/` are loaded by `systemd-sysctl.service` at boot. `/etc/sysctl.conf` works too but conventionally is for distro defaults. Direct echo to /proc/sys/ is runtime-only.

### Q26: **A.**
- `pvcreate` claims the partitions for LVM
- `vgcreate` aggregates them into a VG
- `lvcreate -L 2T -n lv_data vg_archive` carves the LV
- `mkfs.xfs` formats it
- fstab + `mount -a` mounts persistently with `nofail`

Choice B skips LVM entirely (and uses raw disks, missing partitions). Choice C skips pvcreate/vgcreate. Choice D doesn't use LVM at all.

---

## 📊 Score Yourself

- 25–26/26 → 🏆 Module 7 mastered. LVM and kernel modules are second nature.
- 22–24/26 → ✅ Solid. Note the gaps, then move on.
- 18–21/26 → ⚠️ Re-read the LVM sections.
- <18/26 → 🔁 Restart the Reading.md and re-quiz tomorrow.

---

## 🃏 Add To Your Flashcards

- `uname -r`, `/lib/modules/<ver>/`
- Module verbs: `lsmod`, `modinfo`, `modprobe`/`-r`, `depmod -a`, `insmod`/`rmmod`
- Blacklist in `/etc/modprobe.d/`, auto-load in `/etc/modules-load.d/`
- Hardware: `lspci -k`, `lsusb -t`, `lsblk -f`, `lshw -short`, `dmidecode -t`
- `dmesg` (ring buffer) vs `journalctl -k` (persistent)
- /proc (process + runtime) vs /sys (device tree)
- udev: `/etc/udev/rules.d/`, `udevadm trigger`, `--reload-rules`
- LVM 3 layers: PV → VG → LV
- LVM commands: pv/vg/lv + create / display / s / extend / reduce / remove
- `lvextend -r` for one-step LV + FS grow
- XFS = grow only; ext4 = grow AND shrink; Btrfs = both
- Snapshot = CoW, can invalidate when full

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 8, Linux Security & Hardening](../Module-08-Security/Reading.md)
