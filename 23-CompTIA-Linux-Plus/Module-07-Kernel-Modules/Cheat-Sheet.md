# 📋 Module 7 Cheat Sheet: Kernel Modules, Devices & LVM

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## ⚙️ Kernel & Modules

```bash
uname -r                         # current kernel release
uname -a                         # everything

lsmod                            # loaded modules
modinfo <module>                 # describe (params, deps, signed)
modprobe <module>                # LOAD (resolves deps)
modprobe -r <module>             # UNLOAD
insmod /path/file.ko             # load specific .ko (no deps)
rmmod <module>                   # unload (no deps)
depmod -a                        # rebuild dep DB
```

Module paths:

- `/lib/modules/$(uname -r)/` — module files
- `/etc/modprobe.d/*.conf` — admin config (blacklist, options)
- `/etc/modules-load.d/*.conf` — auto-load at boot
- `/lib/modprobe.d/*.conf` — distro-owned (don't edit)

Blacklist example (`/etc/modprobe.d/blacklist-nouveau.conf`):
```
blacklist nouveau
options nouveau modeset=0
```

🚨 After blacklisting a boot-path module, rebuild initramfs:

- RHEL: `dracut -f`
- Debian: `update-initramfs -u`

---

## 🔌 Hardware Discovery

```bash
lspci                            # PCI devices
lspci -k                         # + kernel driver bound
lspci -v -s 04:00.0              # specific device

lsusb                            # USB
lsusb -t                         # tree

lsblk                            # block devices
lsblk -f                         # + fstype + UUID
lsblk -p                         # full paths
lsblk -d                         # disks only

lshw                             # everything
lshw -short
lshw -class disk / network

dmidecode -t bios                # firmware/BIOS
dmidecode -t memory              # RAM slots
dmidecode -t system              # vendor/model/serial
dmidecode -s system-serial-number
```

---

## 📜 dmesg & journalctl

```bash
dmesg                            # kernel ring buffer
dmesg -T                         # human timestamps
dmesg -l err                     # errors only
dmesg -w                         # follow live
dmesg --clear                    # clear (root)

journalctl -k                    # persistent kernel msgs
journalctl -k -b                 # this boot
journalctl -k -b -1              # previous boot
```

---

## 📁 /proc and /sys

```bash
# /proc — processes + runtime kernel
cat /proc/cpuinfo
cat /proc/meminfo
cat /proc/version
cat /proc/cmdline                # kernel boot args
cat /proc/mounts                 # actually-mounted FS
ls /proc/<pid>/                  # all about a process

# /sys — devices + drivers
cat /sys/class/net/eth0/address  # MAC
cat /sys/block/sda/queue/rotational  # 0=SSD 1=HDD
ls /sys/firmware/efi/efivars     # UEFI vars
```

---

## ⚙️ udev

```bash
udevadm info -a -n /dev/sda      # full attributes
udevadm info --query=property --name=/dev/sda
udevadm monitor                  # watch events live
udevadm trigger                  # re-emit events (fix missing nodes)
udevadm trigger --action=add
udevadm control --reload-rules   # after editing rules
```

Custom rule example (`/etc/udev/rules.d/99-ftdi.rules`):
```
SUBSYSTEM=="tty", ATTRS{idVendor}=="0403", ATTRS{idProduct}=="6001", \
    SYMLINK+="ftdi", GROUP="dialout", MODE="0660"
```

---

## 💾 LVM Quick Build

```bash
# Bottom-up: PV → VG → LV
pvcreate /dev/sdb1 /dev/sdc1 /dev/sdd1
vgcreate vg_data /dev/sdb1 /dev/sdc1 /dev/sdd1
lvcreate -L 500G -n lv_app vg_data
# Or by percentage
lvcreate -l 50%FREE -n lv_logs vg_data
lvcreate -l 100%FREE -n lv_bulk vg_data

# Format + mount
mkfs.ext4 /dev/vg_data/lv_app    # also at /dev/mapper/vg_data-lv_app
mkdir -p /srv/app
mount /dev/vg_data/lv_app /srv/app
```

### Inspect
```bash
pvs / pvdisplay
vgs / vgdisplay vg_data
lvs / lvdisplay /dev/vg_data/lv_app
```

### Extend (online)
```bash
# Add disk to existing VG
pvcreate /dev/sde1
vgextend vg_data /dev/sde1

# Grow LV + filesystem in ONE step
lvextend -r -L +100G /dev/vg_data/lv_app

# OR two-step
lvextend -L +100G /dev/vg_data/lv_app
resize2fs /dev/vg_data/lv_app          # ext4
xfs_growfs /srv/app                    # XFS (on mountpoint)
```

### Shrink (ext4 only, OFFLINE)
```bash
umount /srv/app
e2fsck -f /dev/vg_data/lv_app
resize2fs /dev/vg_data/lv_app 400G     # shrink FS FIRST
lvreduce -L 400G /dev/vg_data/lv_app   # then LV
mount /srv/app
```

🚨 XFS cannot shrink. Backup, mkfs, restore.

### Snapshot
```bash
lvcreate -L 10G -s -n lv_app_snap /dev/vg_data/lv_app
mount -o ro /dev/vg_data/lv_app_snap /mnt/snap
# When done:
umount /mnt/snap
lvremove /dev/vg_data/lv_app_snap
```

### Tear down
```bash
umount /srv/app
lvremove /dev/vg_data/lv_app
vgremove vg_data
pvremove /dev/sdb1 /dev/sdc1 /dev/sdd1
```

---

## 💿 Partitioning

```bash
parted /dev/sdb mklabel gpt
parted /dev/sdb mkpart primary 1MiB 100%
parted /dev/sdb set 1 lvm on
partprobe                              # re-read partition table

# OR interactive
fdisk /dev/sdb
gdisk /dev/sdb

# Inspect
blkid /dev/sdb1                        # UUID, fstype
lsblk -f
```

---

## 🏆 Exam Power Phrases

When you see these in answers, they're often **right**:

- ✅ "Rebuild initramfs after changing boot-path modules"
- ✅ "Use `udevadm trigger` to re-emit uevents"
- ✅ "`lvextend -r` extends LV AND filesystem"
- ✅ "Shrink filesystem FIRST, then LV"
- ✅ "`lspci -k` shows kernel driver bound"

When you see these, they're often **wrong**:

- ❌ "`insmod` resolves dependencies"
- ❌ "Blacklist immediately unloads the module"
- ❌ "XFS can shrink online"
- ❌ "Snapshots are persistent backups"
- ❌ "Shrink LV first, then filesystem"

---

## 🗓️ Key Facts To Memorize Cold

- Modules: `/lib/modules/$(uname -r)/`
- `modprobe` resolves deps; `insmod` does not
- Blacklist in `/etc/modprobe.d/*.conf`; auto-load in `/etc/modules-load.d/`
- After modprobe.d changes that affect boot: `dracut -f` or `update-initramfs -u`
- `dmesg` is ring buffer (volatile); `journalctl -k` for persistent
- LVM stack: PV → VG → LV (bottom up)
- `lvextend -r` for one-step grow
- Shrink order: umount → fsck → resize2fs smaller → lvreduce
- XFS: grow only

---

## ✏️ Quick Self-Check

Cover the answers and recite:

1. Where are modules for the running kernel? ___
2. Three commands for: load module, list loaded, blacklist persistently? ___
3. Order of LVM layers, bottom up? ___
4. One-command pattern to grow an LV and its FS by 100G? ___
5. Why blacklist alone doesn't help for boot-path modules? ___

If you can answer all 5 in under 60 seconds, you own this module. ✅

---

➡️ [Module 8: Linux Security & Hardening](../Module-08-Security/Reading.md)
