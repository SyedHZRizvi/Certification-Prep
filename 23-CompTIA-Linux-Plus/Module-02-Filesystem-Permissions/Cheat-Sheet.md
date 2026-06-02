# 📋 Module 2 Cheat Sheet: Filesystem & Permissions

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 🗺️ FHS Quick Reference

| Path | For |
|------|-----|
| `/etc` | Host-specific config |
| `/var/log` | Logs |
| `/var/spool` | Print, mail, cron spools |
| `/usr/bin` | Distro-packaged user binaries |
| `/usr/local/bin` | Locally compiled / admin scripts |
| `/opt/<vendor>` | Third-party app trees |
| `/srv` | Site-served data (web, NFS, FTP) |
| `/tmp` | World-writable + sticky; cleared on reboot |
| `/proc` | procfs — process & kernel info |
| `/sys` | sysfs — devices & drivers |
| `/run` | tmpfs — runtime data (PIDs, sockets) |
| `/boot` | Kernel + initramfs + GRUB |
| `/home` | User home dirs |
| `/root` | Root home (NOT under /home) |

---

## 🔢 chmod Octal Cheat

```
r=4   w=2   x=1
```

| Mode | Owner | Group | Other |
|------|-------|-------|-------|
| `600` | rw- | --- | --- |
| `644` | rw- | r-- | r-- |
| `700` | rwx | --- | --- |
| `755` | rwx | r-x | r-x |
| `775` | rwx | rwx | r-x |
| `2770` | rwx | rwx + SGID | --- |
| `1777` | rwx | rwx | rwx + sticky |

---

## ⚡ Special Bits

| Bit | Prefix | File effect | Directory effect |
|-----|--------|-------------|------------------|
| **SUID** | `4` | Exec as owner | (none) |
| **SGID** | `2` | Exec as group | New files inherit dir's group |
| **Sticky** | `1` | (none) | Only owner can delete |

🚨 **Capital `S`/`T` = bit set but missing execute → won't fire.**

```bash
chmod u+s file        # SUID
chmod g+s dir         # SGID inheritance
chmod +t /shared      # sticky on dir
chmod 4755 binary     # SUID + 755
chmod 2770 dir        # SGID + 770 (collab team dir)
chmod 1777 /tmp       # sticky + 777
```

---

## 🛡️ umask Quick Defaults

| umask | Files get | Dirs get | Use |
|-------|-----------|----------|-----|
| `022` | 644 | 755 | System default |
| `002` | 664 | 775 | Group collaboration |
| `077` | 600 | 700 | Paranoid / per-user |

Formula: `0666 & ~umask` (files), `0777 & ~umask` (dirs).

---

## 📋 ACLs — Beyond rwx

```bash
getfacl file                                # view
setfacl -m u:alice:rw file                  # grant user
setfacl -m g:devs:r-x file                  # grant group
setfacl -x u:alice file                     # remove one user
setfacl -b file                             # remove ALL ACLs
setfacl -d -m u:alice:rw dir                # DEFAULT (inherited)
setfacl -m m::rwx file                      # reset mask
```

🚨 **Watch the `mask::` line — caps named entries.** Plus sign `+` after mode in `ls -l` = ACL present.

---

## 🏷️ chattr / lsattr (ext only)

| Flag | Means |
|------|-------|
| `i` | Immutable — not even root can edit |
| `a` | Append-only |
| `s` | Secure delete (zeroing) |

```bash
chattr +i /etc/resolv.conf
lsattr /etc/resolv.conf
chattr -i /etc/resolv.conf
```

---

## 🔌 /etc/fstab One-Liner

```
<device>   <mountpoint>   <fstype>   <options>   <dump>   <pass>
```

| Option | Effect |
|--------|--------|
| `defaults` | rw, suid, dev, exec, auto, nouser, async |
| `nofail` | Don't fail boot if mount fails |
| `noexec` | Forbid running binaries |
| `nosuid` | Ignore SUID bits |
| `nodev` | No device files |
| `_netdev` | Wait for network (NFS, iSCSI) |
| `ro` / `rw` | Read-only / read-write |
| `x-systemd.device-timeout=10s` | Bound the wait |

```bash
mount -a                          # apply fstab
findmnt --verify                  # sanity-check fstab
mount -o remount,rw /             # remount root rw
umount /mnt/data                  # safe unmount
```

---

## 💽 Filesystems at a Glance

| FS | Shrink? | Snapshots? | Default On |
|----|---------|------------|------------|
| ext4 | ✅ | ❌ (LVM) | Ubuntu/Debian |
| XFS | ❌ | ❌ (LVM) | RHEL 7+ |
| Btrfs | ✅ | ✅ native | openSUSE |
| ZFS | partial | ✅ native | TrueNAS, Ubuntu (opt-in) |

```bash
mkfs.ext4 /dev/sdb1
mkfs.xfs  /dev/sdb1
fsck.ext4 -f /dev/sdb1          # MUST be unmounted
xfs_repair /dev/sdb1
tune2fs -l /dev/sdb1
xfs_info /mnt/data
```

---

## 🩺 Disk Diagnostics

```bash
df -h                          # block usage
df -i                          # inode usage (the "phantom full" check)
du -sh /var/log/*              # what's eating /var/log
lsof | grep deleted            # deleted-but-held files
ls -lh                         # human sizes
stat file                      # full file metadata
ls -i file                     # inode number
```

---

## 🏆 Exam Power Phrases

When you see these in answers, they're often **right**:

- ✅ "Check `df -i` for inode exhaustion"
- ✅ "`getfacl` reveals the extended ACL"
- ✅ "Add `nofail` to optional fstab entries"
- ✅ "Use `setfacl -d` for inheritance"
- ✅ "Find -type f and -type d separately for chmod"

When you see these, they're often **wrong**:

- ❌ "`chmod -R 777` fixes any permission issue"
- ❌ "Edit `/boot/grub.cfg` directly to add a mount"
- ❌ "`fsck` a mounted filesystem"
- ❌ "Skip `mount -a` after fstab edit"
- ❌ "Hard links can cross filesystems"

---

## 🗓️ Key Facts To Memorize Cold

- 4×Read, 2×Write, 1×Execute (octal mode bits)
- SUID = 4, SGID = 2, Sticky = 1 (special bits prefix)
- `1777` = sticky-bit world-writable (/tmp). `2770` = SGID team dir.
- ACLs use mask `::` line to cap named entries
- `nofail` saves you from emergency mode on missing devices
- XFS cannot shrink; ext4 and Btrfs can
- `chattr +i` blocks even root until removed
- The `+` after `ls -l` mode = ACL present; use `getfacl`

---

## ✏️ Quick Self-Check

Cover the answers and recite:

1. Convert `rwxr-x---` to octal. ___
2. Which directory does FHS say a third-party Oracle install goes? ___
3. SGID on a directory does what? ___
4. Three fstab options you'd combine for a USB backup drive that's sometimes missing? ___
5. Why does `getfacl` matter when `ls -l` already shows mode? ___

If you can answer all 5 in under 60 seconds, you own this module. ✅

---

➡️ [Module 3: Package Management](../Module-03-Package-Management/Reading.md)
