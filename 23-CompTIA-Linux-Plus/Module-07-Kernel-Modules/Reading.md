# Module 7: Kernel Modules, Devices & LVM ⚙️

> **Why this module matters:** This is the "under the hood" module. The exam tests three converging topics: (1) kernel modules loading drivers, querying `lsmod`, blacklisting; (2) device discovery `/proc`, `/sys`, `udev`, `dmesg`, `lspci`/`lsusb`/`lsblk`; and (3) LVM, physical volumes, volume groups, logical volumes. LVM gets disproportionately tested (6+ questions on the real exam) because it's foundational to RHEL/CentOS installs. PBQs will show you a 4-disk system and ask you to assemble a 3-disk RAID-0 VG and carve a 100 GB LV.

> **Prerequisites for this module.** You should be comfortable with:
> - Module 1 (boot), initramfs has kernel modules baked in
> - Module 2 (filesystem), LVM sits between block devices and filesystems
> - Running `sudo` and reading `dmesg` output

---

## 🍕 A Story: The Disk That Wouldn't Show Up

Meet Amara. She's adding a 1 TB SSD to a Ubuntu Server she manages. She physically installs the drive, boots the system, and runs `lsblk`. The new disk isn't there.

```bash
$ lsblk
NAME   MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS
sda      8:0    0 100G  0 disk
├─sda1   8:1    0  1G   0 part /boot
└─sda2   8:2    0 99G   0 part /
```

She checks `dmesg | tail -40`:

```
[12.448] ata3: SATA link up 6.0 Gbps (SStatus 133 SControl 300)
[12.448] ata3.00: ATA-9: Samsung SSD 870 EVO 1TB, SVT01B6Q, max UDMA/133
[12.452] ata3.00: configured for UDMA/133
[12.454] sd 2:0:0:0: [sdb] 1953525168 512-byte logical blocks: (1.00 TB/931 GiB)
[12.454] sd 2:0:0:0: [sdb] Write cache: enabled, read cache: enabled
[12.454] sd 2:0:0:0: [sdb] Attached SCSI disk
```

The disk WAS detected by the kernel (it's `/dev/sdb`). But `lsblk` doesn't show it. She runs:

```bash
$ ls -l /dev/sd*
brw-rw---- 1 root disk 8,  0 May 26 09:14 /dev/sda
brw-rw---- 1 root disk 8,  1 May 26 09:14 /dev/sda1
brw-rw---- 1 root disk 8,  2 May 26 09:14 /dev/sda2
```

No `/dev/sdb`! The device node doesn't exist. The kernel saw the disk; udev hasn't created the node. She runs `udevadm trigger` to re-process pending events:

```bash
$ sudo udevadm trigger --action=add
$ ls /dev/sd*
brw-rw---- 1 root disk 8,  0 May 26 09:14 /dev/sda
brw-rw---- 1 root disk 8,  1 May 26 09:14 /dev/sda1
brw-rw---- 1 root disk 8,  2 May 26 09:14 /dev/sda2
brw-rw---- 1 root disk 8, 16 May 26 09:21 /dev/sdb
```

Now `lsblk` shows it. The original udev event got lost somewhere (suspected race during a recent kernel update). She partitions, formats, mounts.

The exam will test this chain at every layer: kernel saw it (`dmesg`) → device node should exist (`/dev`) → udev creates the node (`udevadm`) → `lsblk` finds it. We'll cover all of it.

---

## 🧱 The Kernel + Modules Mental Model

The Linux kernel is a single executable file (`/boot/vmlinuz-<version>`) but most drivers and many filesystems are loaded as **modules**, separate `.ko` files in `/lib/modules/<version>/`.

```
                ┌──────────────────────────────────────┐
                │            Linux Kernel              │
                │   (loaded into RAM at boot from      │
                │    /boot/vmlinuz-<version>)          │
                ├──────────────────────────────────────┤
                │  Always-resident core: scheduler,    │
                │  VM, syscalls, fundamental drivers   │
                └──────────────────────────────────────┘
                                ↑↓ load on demand
                ┌──────────────────────────────────────┐
                │  Loadable modules (`.ko` files)      │
                │  /lib/modules/<ver>/kernel/...       │
                │  drivers: nic, gpu, sound, fs, etc.  │
                └──────────────────────────────────────┘
```

🎯 **Exam pattern:** *"How do you check which kernel version is running?"* → `uname -r`. *"Where are modules?"* → `/lib/modules/$(uname -r)/`. *"What lists loaded modules?"* → `lsmod`.

---

## 🛠️ Module Commands

```bash
uname -r                                  # current kernel version
uname -a                                  # full system info

lsmod                                     # list loaded modules
lsmod | grep nvidia                       # is nvidia loaded?

modinfo <module>                          # describe module (params, deps, signed?)
modinfo i915                              # Intel graphics driver

modprobe <module>                         # LOAD (resolves deps)
modprobe -r <module>                      # UNLOAD (also resolves deps)
modprobe -v <module>                      # verbose

insmod /path/to/file.ko                   # load specific .ko (no dep resolution; rare)
rmmod <module>                            # unload (no dep resolution)

depmod -a                                 # rebuild module dependency database
                                          # (after adding new modules manually)
```

### Module configuration & blacklisting

Add to `/etc/modprobe.d/<file>.conf` (NOT `/lib/modprobe.d/` which is distro-owned):

```
# Blacklist nouveau (open-source NVIDIA) so nvidia binary driver loads instead
blacklist nouveau
options nouveau modeset=0

# Set parameters when a module is loaded
options snd-hda-intel power_save=1

# Alias (call this module by another name)
alias eth0 e1000e
```

After editing modprobe.d files OR adding new modules:

```bash
depmod -a                                 # rebuild dep DB
dracut -f                                 # rebuild initramfs (RHEL), needed if module is used at boot
update-initramfs -u                       # rebuild initramfs (Debian)
```

🚨 **Trap on the exam:** Blacklisting alone doesn't unload an already-loaded module. You either reboot or `modprobe -r` it first. AND if the module is needed by initramfs (storage/encryption), update the initramfs.

### Auto-load modules at boot

Files in `/etc/modules-load.d/*.conf` (one module name per line) get loaded at boot:

```
# /etc/modules-load.d/br-netfilter.conf
br_netfilter
```

---

## 🔌 Hardware Discovery

### `lspci`, PCI devices (NICs, GPUs, RAID controllers)

```bash
lspci                                     # one-line per device
lspci -v                                  # verbose (resources, kernel module)
lspci -vv                                 # more verbose
lspci -k                                  # show kernel module + driver in use
lspci -nn                                 # numeric IDs (vendor:device)
lspci -s 00:1f.2 -v                       # specific device by slot
```

🎯 **Exam pattern:** *"Which kernel driver is bound to PCI device 04:00.0?"* → `lspci -k -s 04:00.0`.

### `lsusb`, USB devices

```bash
lsusb                                     # one-line per USB device
lsusb -v                                  # verbose
lsusb -t                                  # tree (which port?)
```

### `lsblk`, block devices

```bash
lsblk                                     # interfaces, partitions, mountpoints
lsblk -f                                  # show fstype, UUID, label
lsblk -p                                  # full /dev paths
lsblk -d                                  # disks only (skip partitions)
lsblk -S                                  # SCSI/SATA topology
```

### `lshw`, the comprehensive superset

```bash
lshw                                      # all hardware (long)
lshw -short                               # one line per device
lshw -class disk                          # only disks
lshw -class network                       # only network adapters
```

### `dmidecode`, BIOS/firmware data (SMBIOS)

```bash
dmidecode -t bios                         # BIOS info
dmidecode -t memory                       # RAM slots, sizes
dmidecode -t system                       # manufacturer, model, serial
dmidecode -t processor                    # CPU info from SMBIOS
```

🎯 **Exam pattern:** *"How do I find the system's serial number from CLI?"* → `dmidecode -s system-serial-number`.

---

## 📜 dmesg, Kernel Ring Buffer

`dmesg` prints the kernel's ring buffer, messages about boot, drivers, hardware events, OOM kills, etc.

```bash
dmesg                                     # all kernel messages
dmesg -T                                  # human-readable timestamps
dmesg -l err                              # only error-level
dmesg -k                                  # kernel-only (filter syslog facility)
dmesg -w                                  # follow live (like tail -f)
dmesg --clear                             # erase the buffer (root)
```

On systemd, `journalctl -k` is the equivalent and is **persistent** if `Storage=persistent` is set.

🎯 **Exam pattern:** *"A new USB drive isn't visible. Where do I check that the kernel saw it?"* → `dmesg | tail -20` immediately after plugging it in.

---

## 📁 /proc and /sys

Two virtual filesystems exposing the kernel's view of the world:

### `/proc`, processes and runtime kernel info

```bash
cat /proc/cpuinfo                         # CPU details (flags, model)
cat /proc/meminfo                         # memory usage
cat /proc/version                         # full kernel version string
cat /proc/cmdline                         # kernel boot args
cat /proc/mounts                          # actually-mounted filesystems (more authoritative than /etc/mtab)
cat /proc/loadavg                         # 1, 5, 15 min load + procs running/total

ls /proc/<pid>/                           # everything about a process
cat /proc/<pid>/status                    # human-readable summary
cat /proc/<pid>/cmdline                   # the command
ls -l /proc/<pid>/fd/                     # open file descriptors
readlink /proc/<pid>/exe                  # the binary path

# Tunables under /proc/sys/, same hierarchy as sysctl
cat /proc/sys/net/ipv4/ip_forward         # is IP forwarding on?
echo 1 > /proc/sys/net/ipv4/ip_forward    # turn on (NOT persistent, use /etc/sysctl.d/)
```

### `/sys`, devices, drivers, kernel objects (sysfs)

```bash
ls /sys/class/net/                        # NICs
cat /sys/class/net/eth0/address           # MAC address
cat /sys/class/net/eth0/speed             # link speed
cat /sys/block/sda/size                   # disk size (in 512-byte sectors)
cat /sys/block/sda/queue/rotational       # 1 = HDD, 0 = SSD
ls /sys/firmware/efi/efivars              # UEFI variables (UEFI systems only)
```

🚨 **Trap on the exam:** /proc is **older** and largely about processes + runtime kernel; /sys is **newer** (since kernel 2.6) and is the modern device-tree interface. Don't confuse them.

---

## ⚙️ udev, Dynamic Device Management

When the kernel detects a device (boot or hot-plug), it emits a **uevent** to udev. udev reads rules in `/etc/udev/rules.d/` and `/lib/udev/rules.d/`, then:

- Creates the device node in `/dev` (with the right name/permissions)
- Triggers scripts (load modules, mount, set up firmware)
- Updates `/dev/disk/by-uuid/`, `/dev/disk/by-id/`, `/dev/disk/by-path/` symlinks

### Inspect a device

```bash
udevadm info -a -n /dev/sda               # full attribute chain (for writing rules)
udevadm info --query=property --name=/dev/sda    # just properties
udevadm monitor                           # watch uevents live (helpful for hot-plug)
udevadm trigger                           # re-emit uevents (use if devnode missing)
udevadm control --reload-rules            # after editing rules
```

### A simple udev rule

```
# /etc/udev/rules.d/99-usb-serial.rules
SUBSYSTEM=="tty", ATTRS{idVendor}=="0403", ATTRS{idProduct}=="6001", \
    SYMLINK+="ftdi-serial", GROUP="dialout", MODE="0660"
```

When an FTDI USB-serial dongle is plugged in, udev creates `/dev/ftdi-serial` (in addition to `/dev/ttyUSB0`), with mode 0660 and group `dialout`. Now a script can use the stable name regardless of which order USB devices were enumerated.

🎯 **Exam pattern:** *"How do I give a USB serial device a predictable name?"* → Write a udev rule with `SYMLINK+=`.

---

## 💾 LVM, The Layered Storage Model

LVM (Logical Volume Manager) sits between block devices and filesystems. It gives you:

- **Dynamic resize**, grow/shrink filesystems online
- **Pooling**, combine multiple disks into one logical pool
- **Snapshots**, point-in-time copies for backup or testing
- **Migration**, move data between physical disks without unmount

### The three layers

```
┌─────────────────────────────────────────────────────────────┐
│  LV  /dev/mapper/vg_data-lv_app    (mount as /srv/app)      │
│  LV  /dev/mapper/vg_data-lv_logs   (mount as /var/log)      │
├─────────────────────────────────────────────────────────────┤
│  VG  vg_data    (pool of 2 TB total)                        │
├─────────────────────────────────────────────────────────────┤
│  PV  /dev/sdb1   PV  /dev/sdc1   PV  /dev/sdd1              │
│  (700 GB)         (700 GB)         (700 GB)                 │
└─────────────────────────────────────────────────────────────┘
```

| Layer | Means | Command family |
|-------|-------|----------------|
| **PV** Physical Volume | A block device claimed by LVM | `pvcreate`, `pvremove`, `pvs`, `pvdisplay` |
| **VG** Volume Group | A pool of PVs (and their free extents) | `vgcreate`, `vgremove`, `vgs`, `vgdisplay`, `vgextend`, `vgreduce` |
| **LV** Logical Volume | A slice carved from a VG | `lvcreate`, `lvremove`, `lvs`, `lvdisplay`, `lvextend`, `lvreduce` |

### Build an LVM stack from scratch

```bash
# 1. Create PVs on raw block devices (label them as LVM)
sudo pvcreate /dev/sdb1 /dev/sdc1 /dev/sdd1

# 2. Create a VG aggregating those PVs
sudo vgcreate vg_data /dev/sdb1 /dev/sdc1 /dev/sdd1

# 3. Carve an LV
sudo lvcreate -L 500G -n lv_app vg_data
# Or, by percentage of VG free space:
sudo lvcreate -l 50%FREE -n lv_logs vg_data
# Or use all free space:
sudo lvcreate -l 100%FREE -n lv_bulk vg_data

# 4. Format the LV
sudo mkfs.ext4 /dev/vg_data/lv_app
# (LVs appear at /dev/<vg>/<lv> AND /dev/mapper/<vg>-<lv>)

# 5. Mount
sudo mkdir /srv/app
sudo mount /dev/vg_data/lv_app /srv/app
echo "/dev/vg_data/lv_app  /srv/app  ext4  defaults  0  2" >> /etc/fstab
```

### Inspect

```bash
pvs                                       # short PV summary
pvdisplay                                 # verbose PV
vgs
vgdisplay vg_data
lvs
lvdisplay /dev/vg_data/lv_app
```

### Grow an LV (and its filesystem)

This is the LVM superpower. Online resize, no unmount:

```bash
# Make sure the VG has free space
vgs
# If not, extend the VG first:
sudo pvcreate /dev/sde1
sudo vgextend vg_data /dev/sde1

# Now extend the LV by 100 GB
sudo lvextend -L +100G /dev/vg_data/lv_app
# Grow the filesystem (ext4)
sudo resize2fs /dev/vg_data/lv_app

# Or do both in one step:
sudo lvextend -r -L +100G /dev/vg_data/lv_app

# XFS requires xfs_growfs on the MOUNTPOINT
sudo xfs_growfs /srv/app
```

🚨 **Trap on the exam:** XFS can only GROW. ext4 can grow AND shrink. Btrfs can both. Reducing an XFS filesystem requires a backup, mkfs, and restore, not online resize.

### Shrink an LV (ext4 only, with care)

```bash
sudo umount /srv/app                      # unmount FIRST
sudo e2fsck -f /dev/vg_data/lv_app         # force check
sudo resize2fs /dev/vg_data/lv_app 400G    # shrink FS to 400G
sudo lvreduce -L 400G /dev/vg_data/lv_app  # shrink LV to match
sudo mount /srv/app
```

🚨 **Order matters:** shrink the FILESYSTEM first (to leave the data inside the new boundary), then shrink the LV. Wrong order = data loss.

### Snapshots

```bash
# Create a 10 GB snapshot of lv_app (CoW, uses space only as source changes)
sudo lvcreate -L 10G -s -n lv_app_snap /dev/vg_data/lv_app

# Mount snapshot read-only for backup
sudo mkdir /mnt/snap
sudo mount -o ro /dev/vg_data/lv_app_snap /mnt/snap

# Snapshot is a frozen view at creation time

# Discard when done
sudo umount /mnt/snap
sudo lvremove /dev/vg_data/lv_app_snap
```

🚨 **Trap on the exam:** If a snapshot fills up (the source LV churns more than the snapshot has room for), the snapshot is INVALIDATED, it can't be used. Size snapshots based on expected churn.

### Remove the whole stack

```bash
sudo umount /srv/app
sudo lvremove /dev/vg_data/lv_app
sudo vgremove vg_data
sudo pvremove /dev/sdb1 /dev/sdc1 /dev/sdd1
```

---

## 💿 Partitioning Tools (Outside LVM)

For setting up the underlying partitions (the `/dev/sdb1`s that PVs are built on):

```bash
fdisk /dev/sdb                            # interactive, MBR (and GPT in recent versions)
gdisk /dev/sdb                            # interactive, GPT-only
parted /dev/sdb                           # interactive OR scriptable, GPT+MBR
parted /dev/sdb mklabel gpt
parted /dev/sdb mkpart primary 1MiB 100%

# View partition layout
lsblk
fdisk -l /dev/sdb
parted /dev/sdb print
blkid /dev/sdb1                           # UUID, fstype
```

After partitioning, `partprobe` (or `kpartx`) tells the kernel to re-read the partition table.

---

## 🔬 Scenario Walkthrough (PBQ-style thinking)

> **Scenario:** A RHEL 9 server has four 1 TB disks: `/dev/sdb`, `/dev/sdc`, `/dev/sdd`, `/dev/sde` (all blank). You need to:
> (a) Create a VG `vg_data` aggregating all four disks
> (b) Allocate a 1 TB LV `lv_logs` formatted as XFS, mounted at `/var/log/app`
> (c) Make the mount persistent and resilient (boot doesn't fail if a disk is missing)
> (d) Leave room to add a 2 TB LV later
>
> Walk through the commands in order.

**Walkthrough:**

1. **Partition each disk** (single GPT partition spanning the whole disk, marked as LVM type):
```bash
for d in /dev/sdb /dev/sdc /dev/sdd /dev/sde; do
    sudo parted "$d" mklabel gpt mkpart primary 1MiB 100%
    sudo parted "$d" set 1 lvm on
done
sudo partprobe
```

2. **Create the four PVs:**
```bash
sudo pvcreate /dev/sdb1 /dev/sdc1 /dev/sdd1 /dev/sde1
```

3. **Aggregate into the VG:**
```bash
sudo vgcreate vg_data /dev/sdb1 /dev/sdc1 /dev/sdd1 /dev/sde1
sudo vgs   # confirms ~4 TB total
```

4. **Allocate the LV:**
```bash
sudo lvcreate -L 1T -n lv_logs vg_data
```

5. **Format XFS:**
```bash
sudo mkfs.xfs /dev/vg_data/lv_logs
```

6. **Mount and persist:**
```bash
sudo mkdir -p /var/log/app
sudo blkid /dev/vg_data/lv_logs
# Suppose UUID is abc-123:
sudo bash -c 'echo "UUID=abc-123  /var/log/app  xfs  defaults,nofail  0  2" >> /etc/fstab'
sudo mount -a
sudo findmnt /var/log/app                  # verify
```

7. **Leave room for future expansion:** the VG has ~3 TB free. Later you can:
```bash
sudo lvcreate -L 2T -n lv_archive vg_data
```

The `nofail` in fstab is what makes the boot resilient, if a disk in the LVM is somehow missing, the system won't drop to emergency mode (though LVM will likely refuse to activate the VG until the PV is back; `nofail` covers the corner case of the LV being temporarily unavailable).

This is a typical PBQ, given 4 blank disks, build a resilient LVM stack and a future-extensible layout.

---

## ⚠️ Exam Traps & Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "`insmod` resolves dependencies" | NO, only `modprobe` does. `insmod` is for one-off loading of a specific .ko. |
| "Blacklisting a loaded module unloads it" | NO, blacklist prevents FUTURE loading. To unload now: `modprobe -r`. |
| "`dmesg` is persistent across reboots" | NO, it's a RAM ring buffer. Use `journalctl -k` with persistent journal for history. |
| "/proc and /sys are on disk" | NO, both are virtual (procfs and sysfs). |
| "LVM and RAID are the same" | LVM is volume management; RAID is data redundancy. LVM CAN do RAID-like layouts but mdadm is the dedicated RAID tool. |
| "`lvreduce` is safe online" | NO, shrinking requires unmount + fsck + shrink FS + shrink LV (in that order). |
| "XFS supports shrink" | NO, XFS grows only. To shrink: backup, mkfs, restore. |
| "Snapshots are persistent backups" | NO, snapshots share blocks with source. Lose the source = lose the snapshot. Use for short-term consistency, not long-term backup. |
| "All PCI devices have a kernel driver loaded automatically" | Most do, but some need explicit `modprobe` (e.g., proprietary GPU drivers). `lspci -k` shows which. |
| "After installing a new kernel, modules from the old kernel work" | NO, modules are per-kernel-version. Each kernel install gets its own `/lib/modules/<version>/` tree. |

---

## 🎓 Key Terms To Know (Add to Flashcards!)

| Term | Definition |
|------|------------|
| **`uname -r`** | Current kernel version |
| **`/lib/modules/<ver>/`** | Where loadable modules live |
| **`lsmod`** | List loaded modules |
| **`modprobe` / `modprobe -r`** | Load / unload with dependency resolution |
| **`modinfo`** | Describe a module |
| **`depmod -a`** | Rebuild module dependency database |
| **`/etc/modprobe.d/`** | Admin module config (blacklist, options) |
| **`/etc/modules-load.d/`** | Auto-load at boot |
| **`dmesg`** | Kernel ring buffer |
| **`/proc`** | procfs, processes + runtime kernel info |
| **`/sys`** | sysfs, devices + drivers |
| **udev** | Dynamic device manager (creates /dev nodes) |
| **udev rules** | `/etc/udev/rules.d/*.rules` for custom device naming/permissions |
| **`udevadm trigger`** | Re-emit uevents |
| **`lspci -k`** | PCI devices + kernel driver bound |
| **`lsblk -f`** | Block devices + filesystems + UUIDs |
| **`dmidecode`** | SMBIOS/firmware data |
| **PV / VG / LV** | LVM's three layers |
| **`pvcreate` / `vgcreate` / `lvcreate`** | Create each layer |
| **`lvextend -r`** | Extend LV AND filesystem in one step |
| **Snapshot** | Copy-on-write point-in-time view (ephemeral) |

### Acronyms cheat-row (Module 7)
| Acronym | Meaning |
|---------|---------|
| LVM | Logical Volume Manager |
| PV / VG / LV | Physical Volume / Volume Group / Logical Volume |
| PE | Physical Extent (LVM allocation unit, default 4 MB) |
| LE | Logical Extent (LV's view of PE) |
| RAID | Redundant Array of Independent Disks |
| mdadm | Multiple Disk Administration (Linux software RAID) |
| SMART | Self-Monitoring, Analysis and Reporting Tech (disk health) |
| HBA | Host Bus Adapter (storage controller) |
| SCSI | Small Computer System Interface |
| SATA | Serial AT Attachment |
| NVMe | Non-Volatile Memory Express (modern SSDs) |
| UUID | Universally Unique Identifier |

---

## 📊 Case Study, The Heartbleed Initramfs Problem (Spring 2014)

**Situation.** On 7 April 2014, the [Heartbleed CVE-2014-0160](https://heartbleed.com/) bug in OpenSSL was disclosed. Every Linux system running OpenSSL 1.0.1–1.0.1f needed the OpenSSL library patched, restarted, AND every long-running TLS process (web, mail, VPN) restarted to actually load the patched library. Sysadmins worldwide began emergency `apt-get upgrade && systemctl restart nginx postfix dovecot ...` runs.

**Decision.** A subset of admins discovered an unexpected snag: their boot was breaking after the upgrade. The root cause was that their LUKS-encrypted root filesystem used a kernel module (`dm-crypt` + a specific cipher) that was provided by a package that depended on the *old* OpenSSL ABI. The upgrade pulled in a new OpenSSL, but the initramfs (which had been rebuilt at the moment of the original install months earlier) still referenced the old ABI. After reboot, the initramfs couldn't unlock the LUKS volume because libcrypto in the initramfs was inconsistent with the installed kernel modules.

**Outcome.** Affected admins had to boot into a rescue image, chroot into the broken system, run `dracut -f` (or `update-initramfs -u -k all`), and reboot. The downtime varied from minutes (admins who had remote console access) to days (admins who had to send someone to a colo facility). The community lesson: **after ANY upgrade that touches modules used at early boot (storage, encryption, RAID, FS drivers), rebuild the initramfs.**

**Lesson for the exam / for practitioners.** XK0-005 won't ask "tell me about Heartbleed." But it WILL test:

1. **When to rebuild the initramfs:** kernel update, `/etc/crypttab` change, LVM/RAID layout change, change to early-boot modules.
2. **Commands to rebuild:** `dracut -f` (RHEL family) or `update-initramfs -u` (Debian family).
3. **Symptom recognition:** boot drops to dracut emergency shell with "cannot find root device" or "failed to start LUKS volume", almost always an initramfs problem.
4. **Recovery workflow:** boot rescue image → mount target root → `chroot` → rebuild initramfs → reboot.

These all show up in PBQs as "after upgrading X, the system fails to boot, what command would have prevented it?"

**Discussion (Socratic).**
- **Q1:** Should distros automatically rebuild the initramfs on any package upgrade that touches early-boot dependencies? What's the cost (CPU, time, disk churn) vs the safety benefit?
- **Q2:** A common practice is to keep multiple kernels installed (the previous + current) for rollback. How does this interact with initramfs, is the OLD kernel's initramfs untouched by the upgrade?
- **Q3:** Argue for and against "all storage drivers should be built into the kernel as monolithic, not modules", eliminating the initramfs entirely. What does this cost? What does it save?

---

## ✅ Module 7 Summary

You now know:

- ⚙️ The **kernel + module** model: monolithic core + loadable `.ko` files
- 🛠️ **Module commands**: `lsmod`, `modinfo`, `modprobe`, `depmod`, blacklist via `/etc/modprobe.d/`
- 🔌 **Hardware discovery**: `lspci -k`, `lsusb`, `lsblk -f`, `lshw`, `dmidecode`
- 📜 **`dmesg`** for kernel ring buffer (and `journalctl -k` for persistence)
- 📁 **`/proc` vs `/sys`**, runtime kernel info vs the device tree
- ⚙️ **udev**, `/etc/udev/rules.d/`, `udevadm trigger`, `udevadm monitor`
- 💾 **LVM**, PV/VG/LV layers, create/extend/snapshot, online resize
- 💿 Partitioning with `parted`/`fdisk`/`gdisk`, then `partprobe`

**Next steps:**
1. 🎥 Watch the curated videos: [Videos.md](./Videos.md)
2. ✏️ Take the quiz: [Quiz.md](./Quiz.md), aim for 22/26
3. 📋 Review the [Cheat-Sheet.md](./Cheat-Sheet.md) before bed
4. ➡️ Move on: [Module 8, Linux Security & Hardening](../Module-08-Security/Reading.md)

> **Where this leads.**
> - Inside this course: [Module 1](../Module-01-Boot-Systemd/Reading.md) covered the initramfs; this module shows what's inside it; [Module 8](../Module-08-Security/Reading.md) covers LUKS (the encryption that's unlocked by initramfs modules).
> - Practice: Practice Exam 2 has ~7 questions drawing from this module; the Final Mock has ~9.

---

## 📚 Further Reading (Optional)

**Primary sources:**
- 📄 [The Linux Kernel Documentation, Modules](https://www.kernel.org/doc/html/latest/admin-guide/module-signing.html) and [kobject/sysfs](https://www.kernel.org/doc/html/latest/core-api/kobject.html).
- 📄 [Filesystem Hierarchy Standard §3 (/proc, /sys, /dev)](https://refspecs.linuxfoundation.org/FHS_3.0/fhs-3.0.html).
- 📄 [Greg Kroah-Hartman, *Writing udev rules*](http://www.reactivated.net/writing_udev_rules.html), the canonical reference.
- 📄 [Red Hat LVM Administration Guide](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html/configuring_and_managing_logical_volumes/index), authoritative LVM docs.
- 📄 [lvm(8), pvcreate(8), vgcreate(8), lvcreate(8), lvextend(8) man pages](https://man7.org/linux/man-pages/), the man pages are the truth.

**Practitioner / exam:**
- 📖 Sander van Vugt, *CompTIA Linux+ XK0-005 Cert Guide* (Pearson, 2023), Chapters 9 & 17.
- 📖 Brian Ward, *How Linux Works* (No Starch, 3rd ed., 2021), Chapter 3 (Devices) and Chapter 8 (Processes & Resource Utilization).
- 📖 Christopher Negus, *Linux Bible* (Wiley, 11th ed., 2020), Chapter 12 (LVM) + Chapter 13 (Drives & Filesystems).
- 📖 Evi Nemeth et al., *UNIX and Linux System Administration Handbook* (5th ed., 2017), the storage chapter is the most thorough in print.
