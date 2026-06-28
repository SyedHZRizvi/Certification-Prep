# Module 2: Filesystem Layout & Permissions 📁

> **Why this module matters:** Filesystem questions dominate Domain 1 (System Management) and feature in every troubleshooting PBQ. You'll be asked which directory holds what under the FHS, how chmod's octal really decomposes, what SUID/SGID/sticky each *do* (and when they break), and how an ACL line composes with the regular mode bits. Get this module right and the words "permission denied" will never mystify you again.

> **Prerequisites for this module.** You should be comfortable with:
> - Running basic shell commands and navigating with `cd`, `ls`, `pwd`
> - Having root or `sudo` access on a practice VM (Virtual Machine)
> - Module 1, you'll see fstab and systemd mount units referenced repeatedly

---

## 🍕 A Story: The Permission Denied That Wasn't

Meet Tomás. He just deployed a new analytics service `analytics.service` on his Ubuntu 22.04 server. The service runs as a dedicated `analytics` user, reads CSV files from `/srv/data/imports/`, and writes results to `/srv/data/reports/`. The directory tree looks fine:

```bash
$ ls -ld /srv/data /srv/data/imports /srv/data/reports
drwxr-xr-x  4 analytics analytics 4096 Mar 10 09:14 /srv/data
drwxr-xr-x  2 analytics analytics 4096 Mar 10 09:14 /srv/data/imports
drwxrwxr-x  2 analytics analytics 4096 Mar 10 09:14 /srv/data/reports
```

The service starts. Then immediately fails:

```
analytics[1924]: PermissionError: [Errno 13] Permission denied: '/srv/data/reports/run-2025-03-10.json'
```

Tomás runs:

```bash
$ ls -la /srv/data/reports/
total 8
drwxrwxr-x 2 analytics analytics 4096 Mar 10 09:14 .
drwxr-xr-x 4 analytics analytics 4096 Mar 10 09:14 ..
```

The directory is owned by `analytics`, mode 775. The service runs as `analytics`. This should work. He even tries `sudo -u analytics touch /srv/data/reports/test`, works. So why doesn't the service?

Forty minutes later he finds it: `getfacl /srv/data/reports/` shows a **default ACL** inherited from `/srv/data/` that grants `group:auditors:r-x` and a **mask** of `r-x`, which means even though the analytics user has `rwx` on paper, the effective rights are masked down to `r-x`. Someone in a previous project set the ACL and forgot.

He runs `setfacl -b /srv/data/reports/` (removes all ACLs), restarts the service, and it writes the file. Total time lost: 47 minutes.

This is the exam-favorite scenario: the answer is *not* in `ls -l`; it requires `getfacl` AND understanding that ACL masks can silently downgrade group rights. We'll cover all of that in this module.

---

## 🗺️ The Filesystem Hierarchy Standard (FHS)

The **Filesystem Hierarchy Standard 3.0** (Linux Foundation, 2015) is the rulebook for what goes where. **MEMORIZE THIS TABLE.** PBQs will ask "where does config go" / "where do logs go" / "what mounts read-only."

| Directory | Purpose | Notes |
|-----------|---------|-------|
| `/` | Root of the FS | Should be small and self-contained for rescue boots |
| `/boot` | Kernel, initramfs, GRUB | On UEFI, ESP mounts at `/boot/efi` (FAT32) |
| `/etc` | Host-specific config | No binaries; static files |
| `/home` | User home directories | Often a separate mount |
| `/root` | Root user's home | NOT under `/home` (must be available even if `/home` isn't mounted) |
| `/var` | Variable data | Logs (`/var/log`), mail spools, package cache, container images |
| `/usr` | Read-only, shareable user programs | Historically network-mountable; binaries, libs, docs |
| `/usr/local` | Locally installed software | Survives package upgrades; `/usr/local/bin` for sysadmin scripts |
| `/opt` | Third-party / add-on packages | Each app gets its own `/opt/<vendor>/` subtree |
| `/srv` | Site-specific data served | Web roots, FTP (File Transfer Protocol) roots, exported NFS shares |
| `/tmp` | Temporary files | World-writable + sticky bit; cleared on reboot (or by `tmpfiles.d`) |
| `/dev` | Device nodes | Populated dynamically by `devtmpfs` + udev |
| `/proc` | Process & kernel info (procfs) | Virtual FS; not on disk |
| `/sys` | Devices & kernel objects (sysfs) | Virtual FS; modern hardware/driver tree |
| `/run` | Runtime data (PID files, sockets) | tmpfs; cleared on reboot; replaces older `/var/run` |
| `/mnt` | Temporary admin mounts | "Hey root, mount this CDROM here" |
| `/media` | Removable-media auto-mounts | USB drives, optical disks |
| `/lib`, `/lib64` | Essential shared libraries | Now usually symlinks to `/usr/lib`, `/usr/lib64` |
| `/sbin`, `/bin` | Essential binaries | Now usually symlinks to `/usr/sbin`, `/usr/bin` |

🎯 **Exam pattern:** *"Where should a third-party vendor place its app, by FHS convention?"* → `/opt/<vendor>/`. *"Where do log files belong?"* → `/var/log/`. *"What contains process info?"* → `/proc`. *"What contains hardware/driver info?"* → `/sys`.

### Why `/usr` matters

Historically `/usr` was a remote-mountable, read-only "user files" tree separated from the minimal local `/`. Today most distros merge `/bin` → `/usr/bin`, `/lib` → `/usr/lib`, etc. The "User System Resources" interpretation is the modern one. Anything you `apt install` or `dnf install` lands here; anything you compile from source goes to `/usr/local`.

### The split: persistent vs runtime

```
PERSISTENT (on disk, survives reboot)
  /etc, /var, /usr, /opt, /home, /srv, /boot

VIRTUAL / RUNTIME (in memory, regenerated each boot)
  /proc (procfs)
  /sys  (sysfs)
  /run  (tmpfs)
  /dev  (devtmpfs)
  /tmp  (tmpfs on most modern distros)
```

---

## 🗃️ Inodes, The Real File

Every file in a POSIX filesystem has an **inode** (index node). The inode stores everything *about* the file except the data: permissions, owner UID, group GID, size, timestamps, link count, and pointers to data blocks. The **filename** is *not* in the inode, it's in the parent directory's data, mapping name → inode number.

```bash
$ ls -i /etc/passwd
393222 /etc/passwd

$ stat /etc/passwd
  File: /etc/passwd
  Size: 2754      	Blocks: 8          IO Block: 4096   regular file
Device: 805h/2053d	Inode: 393222      Links: 1
Access: (0644/-rw-r--r--)  Uid: (    0/    root)   Gid: (    0/    root)
Access: 2025-03-10 09:00:00.000000000 +0000
Modify: 2025-03-08 14:22:13.000000000 +0000
Change: 2025-03-08 14:22:13.000000000 +0000
 Birth: 2025-01-01 00:00:00.000000000 +0000
```

### Implications

1. **Hard links** are multiple directory entries pointing to the same inode. `ln src dst`. They share permissions, owner, size, there's only one file.
2. **Symbolic links** (`ln -s src dst`) are separate inodes whose data is the path to the target. They can point across filesystems and to non-existent targets.
3. **`rm file` decrements the link count.** When count reaches 0 AND no process holds it open, the inode is freed. Until then, `lsof | grep deleted` shows "ghost" files holding disk space.
4. **You can run out of inodes** even when disk has free space. Common with millions of tiny files (mail spool, npm node_modules, image thumbnails). `df -i` shows inode usage; the fix is to mkfs with more inodes (`mkfs.ext4 -N <count>` or larger inode density).

🚨 **Trap on the exam:** A scenario shows `df -h` with 60% free and a write fails with `No space left on device`. The answer is `df -i`, inodes are exhausted.

---

## 💽 Filesystems: ext4 vs XFS vs Btrfs vs ZFS

| FS | Year | Strengths | Weaknesses | Default on |
|----|------|-----------|------------|------------|
| **ext4** | 2008 | Mature, journaled, well-tooled, shrinkable | No native snapshots, no CoW | Debian, Ubuntu |
| **XFS** | 1993 (SGI), Linux 2001 | High performance, parallel I/O, very large FS support | Cannot shrink, weaker fsck | RHEL/CentOS 7+ |
| **Btrfs** | 2007 | Copy-on-write, snapshots, subvolumes, RAID 0/1/10, checksums | RAID 5/6 historically risky; complex | openSUSE |
| **ZFS** | 2005 (Sun) | Enterprise CoW, RAID-Z, dedup, compression, ARC cache | CDDL license → not in mainline kernel; high RAM | Ubuntu installer (opt-in), TrueNAS |

### Make + check filesystems

```bash
mkfs.ext4 /dev/sdb1                       # create ext4
mkfs.xfs  /dev/sdb1                       # create XFS
fsck.ext4 -f /dev/sdb1                    # force fsck (FS must be unmounted)
xfs_repair /dev/sdb1                      # XFS equivalent of fsck
tune2fs -l /dev/sdb1                      # show ext4 superblock info
xfs_info /mnt/data                        # show XFS metadata
```

🚨 **Trap on the exam:** Never `fsck` a mounted filesystem. Unmount first, OR boot into rescue with the FS unmounted.

---

## 🔌 Mounting: `mount`, `umount`, and `/etc/fstab`

### `mount` syntax

```bash
mount /dev/sdb1 /mnt/data                 # mount with auto-detect
mount -t ext4 /dev/sdb1 /mnt/data         # specify type
mount -o ro,noexec /dev/sdb1 /mnt/data    # mount options
mount -a                                  # mount everything in fstab
mount | column -t                         # show current mounts
```

### `/etc/fstab`, the boot-time mount table

```
# <device>             <mountpoint>     <fstype>  <options>            <dump> <pass>
UUID=abcd-1234         /                ext4      defaults             0      1
UUID=ef56-7890         /home            ext4      defaults             0      2
UUID=swap-uuid         none             swap      sw                   0      0
/dev/mapper/vg-data    /srv/data        xfs       defaults             0      2
nas.local:/exports/x   /mnt/x           nfs       defaults,_netdev     0      0
tmpfs                  /tmp             tmpfs     defaults,size=2G     0      0
```

Six fields per line:

1. **Device** by `UUID=...` (preferred survives /dev renumbering), `LABEL=...`, or `/dev/sdX`
2. **Mountpoint**, must exist
3. **Filesystem type**, ext4, xfs, btrfs, nfs, swap, tmpfs, etc.
4. **Options**, comma-separated:

   - `defaults` = `rw,suid,dev,exec,auto,nouser,async`
   - `noexec` (cannot run binaries from this mount)
   - `nosuid` (ignore SUID bits, common for /home, /tmp)
   - `nodev` (no device files allowed)
   - `ro` / `rw`, read-only / read-write
   - `nofail` (don't fail boot if mount fails, CRITICAL for optional drives)
   - `_netdev` (don't try until network is up; for NFS/iSCSI)
   - `x-systemd.device-timeout=10s` (give up after 10s)
5. **dump** 0 (don't back up via `dump`), 1 (back up) legacy
6. **pass**, fsck order at boot: 0 = no check, 1 = root, 2 = others

### Always test fstab BEFORE rebooting

```bash
mount -a                                  # tries every fstab entry
findmnt --verify                          # checks the fstab for sanity
```

🚨 **Trap on the exam:** A bad fstab line drops the system into emergency mode. Every fstab edit demands `mount -a` + `findmnt --verify` first.

---

## 🔐 Permissions, The DAC Layer

POSIX permissions (Discretionary Access Control) are three sets of three bits: **rwx for owner, rwx for group, rwx for other**, plus three special bits (SUID, SGID, sticky).

```
   d rwx r-x r-x  3 alice devs  4096 Mar 10 09:14 myproject
   ^  ^   ^   ^   ^   ^    ^      ^         ^         ^
   |  |   |   |   |   |    |      |         |         file name
   |  |   |   |   |   |    |      |         mtime
   |  |   |   |   |   |    |      size (bytes)
   |  |   |   |   |   |    group
   |  |   |   |   |   owner
   |  |   |   |   hard link count
   |  |   |   other = r-x
   |  |   group = r-x
   |  owner = rwx
   type: d=dir, -=file, l=symlink, b=block, c=char, p=pipe, s=socket
```

### Octal mode

| Symbol | Bits | Value |
|--------|------|-------|
| `r` | 100 | 4 |
| `w` | 010 | 2 |
| `x` | 001 | 1 |

Add per triad. `rwxr-xr-x` = `7 5 5`. Common modes:

| Octal | Symbolic | Used for |
|-------|----------|----------|
| `644` | `rw-r--r--` | Regular files (default with umask 022) |
| `755` | `rwxr-xr-x` | Scripts, public binaries, dirs |
| `600` | `rw-------` | SSH (Secure Shell) private keys, /etc/shadow-style secrets |
| `700` | `rwx------` | `~/.ssh/` directory |
| `666` | `rw-rw-rw-` | World-writable file (usually wrong) |
| `777` | `rwxrwxrwx` | World-writable + executable (almost ALWAYS wrong) |

### chmod, symbolic vs octal

```bash
chmod 755 script.sh                       # absolute (replaces)
chmod u=rwx,g=rx,o=rx script.sh           # symbolic equivalent
chmod +x script.sh                        # add x for all
chmod o-r,o-w,o-x secret.key              # remove all "other" rights
chmod -R g+w shared/                      # recursive, add group write
```

### chown, ownership

```bash
chown alice file                          # change owner
chown alice:devs file                     # change owner AND group
chown :devs file                          # only group
chown -R alice:devs /srv/app              # recursive
```

`chgrp` is a shortcut for "change group only" (same as `chown :group`).

### umask, default permission mask

When a file is created, the kernel applies `mode & ~umask`. With `umask 022`:

- Files: `0666 & ~022 = 0644` (rw-r--r--), files never get execute by default
- Dirs: `0777 & ~022 = 0755` (rwxr-xr-x)

Common umasks:

- `022`, system default; everyone can read
- `002`, group-collaborative (Debian per-user-group convention)
- `077`, paranoid (only owner)

Set persistently in `/etc/profile` or `/etc/login.defs` (PAM-based).

---

## ⚡ Special Permission Bits

Beyond rwx, three more bits sit on top:

| Bit | Octal prefix | On file | On dir |
|-----|--------------|---------|--------|
| **SUID** | 4 | Execute AS the file's owner | (no effect) |
| **SGID** | 2 | Execute AS the file's group | New files inherit the directory's group |
| **Sticky** | 1 | (no effect on modern Linux) | Only the owner of a file can delete it from this dir |

### SUID example, `/usr/bin/passwd`

```
$ ls -l /usr/bin/passwd
-rwsr-xr-x 1 root root 68208 Mar 10 09:14 /usr/bin/passwd
   ^s here = SUID is set; when a normal user runs passwd, the process runs as root
   (so it can write to /etc/shadow which is mode 0640 root:shadow)
```

To set: `chmod u+s file` or `chmod 4755 file`.

🚨 **Trap on the exam:** A *capital* `S` (instead of lowercase `s`) in the SUID position means SUID is set but execute is NOT, the bit is configured but won't fire. Same for SGID. Always verify by trying `chmod 4755` (lowercase s implied because x is on) vs `chmod 4644` (uppercase S because no x).

### SGID on a directory (collaborative team scratch space)

```bash
mkdir /srv/shared
chgrp devs /srv/shared
chmod 2770 /srv/shared                    # SGID + rwx for owner+group, 0 for other
```

Now any file created inside `/srv/shared` automatically gets group `devs`, even if the creator's primary group is different. This is the foundation of shared-team directories.

### Sticky on `/tmp`

```bash
$ ls -ld /tmp
drwxrwxrwt 14 root root 4096 Mar 10 09:14 /tmp
```

The `t` at the end = sticky. Everyone can write to /tmp, but only the *owner* of a file can delete it. Without the sticky bit, any user could `rm` anyone else's tmp file. This is a critical defense.

Set: `chmod +t dir` or `chmod 1777 dir`.

---

## 📋 ACLs, Beyond rwx

POSIX ACLs (Access Control Lists) let you grant per-user / per-group permissions beyond the single-owner / single-group model.

```bash
getfacl /srv/data/reports/                # show ACL
setfacl -m u:alice:rw /srv/data/reports/  # grant alice rw
setfacl -m g:auditors:r /srv/data/reports # grant group auditors r
setfacl -x u:alice /srv/data/reports/     # remove alice's ACL
setfacl -b /srv/data/reports/             # remove ALL ACLs
setfacl -d -m u:alice:rw /srv/data/reports # DEFAULT ACL on dir (inherited by children)
```

### Reading getfacl output

```
# file: reports
# owner: analytics
# group: analytics
user::rwx
user:alice:rw-
group::r-x
group:auditors:r-x
mask::r-x                                 ← this caps effective group/named-user rights!
other::r-x
```

🚨 **Trap on the exam (Tomás's story):** The **mask** entry is the upper bound on *effective* rights for named users and named/regular groups (NOT the owner, NOT `other`). If the mask is `r-x`, even a `u:alice:rwx` ACL grants only `r-x`. Watch the mask. `setfacl -m m::rwx file` resets the mask.

### The `+` indicator

```
$ ls -l reports
drwxrwxr-x+ 2 analytics analytics 4096 Mar 10 reports
            ^ the plus = an ACL is present
```

🎯 **Exam pattern:** *"`ls -l` shows a `+` after the mode. Which command shows the extended permissions?"* → `getfacl`.

---

## 🏷️ Special File Attributes (chattr / lsattr)

Beyond POSIX bits and ACLs, ext-family filesystems support **file attributes** managed by `chattr` and viewed with `lsattr`.

| Attribute | Effect |
|-----------|--------|
| `i` (immutable) | File cannot be modified, deleted, renamed, or even linked to. Not even root can change it without first removing the `i` bit. |
| `a` (append-only) | File can only be opened in append mode (great for audit logs) |
| `s` (secure delete) | Blocks are zeroed on delete (rarely effective on modern SSDs/CoW FS) |
| `j` (data journaling) | Force data + metadata journaling on ext3/4 |

```bash
chattr +i /etc/resolv.conf                # lock the file
lsattr /etc/resolv.conf                   # see the i flag
chattr -i /etc/resolv.conf                # unlock
```

🎯 **Exam pattern:** *"Even as root, you cannot edit a file. What command would reveal why?"* → `lsattr`.

---

## 🔬 Scenario Walkthrough (PBQ-style thinking)

> **Scenario:** A web app must write log files into `/srv/web/logs/`. The app runs as user `web` (UID 600), and a separate `auditor` user (UID 700) must be able to read every log file the app creates, even though the app's umask is 022 (creating files mode 644 owned by `web:web`). The auditor must NOT be able to write or delete. You may set up ACLs once. What setup achieves this?

**Walkthrough:**
1. Owner is `web`; group is `web`; other = r--. Auditor (different user, not in `web` group) gets only "other" → r--. That actually already works for read! But the issue is *future files*: each new file is `web:web` 0644, and without a default ACL on the directory, the auditor will continue to get only the `other` 4-bit.

2. To make it durable AND grant the auditor *explicit* `r` (independent of umask drift to e.g. 027 which would drop the `other` read):

```bash
setfacl -m u:auditor:r /srv/web/logs                     # immediate, on the dir
setfacl -d -m u:auditor:r /srv/web/logs                  # DEFAULT inherited by new files
```

3. Verify:
```bash
getfacl /srv/web/logs                                    # both ACLs should appear
# Touch a file as web, then as auditor try cat, read should work, write should fail.
```

4. **The mask matters.** If the directory's mask is too restrictive (e.g. r--), even the explicit `u:auditor:r` is capped to r. Confirm mask is at least `r-x`. If you want auditor read on future files without group-write contamination, ALSO ensure the file `other` doesn't drift to 0 (don't change the app's umask to 077 without considering this).

This is exactly the level of two-step reasoning a PBQ tests, the answer involves *both* an active ACL and a *default* ACL.

---

## ⚠️ Exam Traps & Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "777 fixes any permission problem" | 777 is almost always the wrong answer. PBQ distractors love this. Find the real problem (group, ACL, ancestor dir traversal). |
| "Owner means UID 0 (root)" | Owner is whoever the file's UID points to. Root just bypasses normal DAC checks. |
| "`chmod -R 755 dir` on a tree of files is safe" | `755` makes every file executable! Use `find … -type f -exec chmod 644 {} +` and `-type d -exec chmod 755 {} +` separately. |
| "Capital S in mode means SUID is working" | Capital S = SUID set but no execute = doesn't actually fire. |
| "ACLs override regular permissions" | ACLs *extend* DAC; the mask caps named-user/group entries. The owner's rwx still applies via the owning user entry. |
| "df shows full when it's full" | `df` (blocks) AND `df -i` (inodes), both can fill independently. |
| "rm releases disk space immediately" | Only if no process holds an open FD. `lsof | grep deleted` reveals "deleted-but-held" files. |
| "Hard links and symlinks are the same" | Hard link = same inode, can't cross FS, target deletion doesn't dangle. Symlink = new inode, can cross FS, dangles if target gone. |
| "Sticky bit affects files" | Modern Linux ignores sticky on files; it's a directory-only protection. |

---

## 🎓 Key Terms To Know (Add to Flashcards!)

| Term | Definition |
|------|------------|
| **FHS** | Filesystem Hierarchy Standard 3.0, the directory-purpose rulebook |
| **inode** | The structure holding file metadata + data-block pointers |
| **Hard link** | A second directory entry to the same inode |
| **Symlink** | A separate inode whose data is a path to the target |
| **Umask** | Mask subtracted from default mode at file creation |
| **SUID** | Run executable as the file's owner |
| **SGID** | Run as group (file); inherit group (dir) |
| **Sticky bit** | Only file owner can unlink (used on /tmp) |
| **DAC** | Discretionary Access Control, the rwx model |
| **ACL** | Access Control List, per-user/per-group extension to DAC |
| **getfacl / setfacl** | Read / write ACL entries |
| **mask** (ACL) | Upper bound on effective rights for named entries |
| **chattr / lsattr** | Manage / view ext file attributes (`i`, `a`, etc.) |
| **fstab** | `/etc/fstab`, persistent boot-time mounts |
| **nofail** | fstab option: don't fail boot if mount fails |
| **noexec / nosuid / nodev** | Hardening mount options |

### Acronyms cheat-row (Module 2)
| Acronym | Meaning |
|---------|---------|
| FHS | Filesystem Hierarchy Standard |
| ACL | Access Control List |
| DAC | Discretionary Access Control |
| MAC | Mandatory Access Control (covered Module 8) |
| UID / GID | User ID / Group ID |
| ESP | EFI System Partition |
| FS | Filesystem |
| CoW | Copy-on-Write |
| XFS | Extents Filesystem (SGI, 1993) |
| LVM | Logical Volume Manager (covered Module 7) |

---

## 📊 Case Study, The Healthcare Backup Wipeout (2018)

**Situation.** A mid-sized US regional hospital network ran a nightly Postgres backup to a 4 TB external USB drive mounted at `/mnt/backup`. The fstab line was:

```
/dev/sdb1  /mnt/backup  ext4  defaults  0  2
```

The backup script ran as root via cron at 02:00, dumped Postgres into a date-stamped directory, then ran an aggressive `rm -rf /mnt/backup/old-*` to enforce a 30-day retention.

**Decision.** A junior admin replaced the failing USB enclosure. The OS booted before the new drive was plugged in. `/dev/sdb1` did not exist; the mount silently failed (the entry lacked `nofail`, so the boot continued to emergency-then-recovery without anyone noticing because the cloud monitoring didn't watch mount targets). The `/mnt/backup` mountpoint still existed as a normal empty directory on `/`. At 02:00, the cron script ran. It wrote 80 GB of backup data to `/mnt/backup/...`, which now meant the **root filesystem**. Then it ran `rm -rf /mnt/backup/old-*`.

**Outcome.** `/` filled up at 02:14. The OOM killer terminated postgres and the EHR service. Patient charts became unavailable for 7 hours. When recovery began, the team discovered they had no working backup older than 7 days, because the failing USB drive's last successful backup was a week prior. Total HIPAA-reportable downtime: 7 hours. Cost (audit, attorneys, internal IR): >$200,000.

**Lesson for the exam / for practitioners.** Three concrete lessons map directly to XK0-005 objectives:

1. **Always use `nofail` (and `x-systemd.device-timeout`) on removable/optional storage.** Without `nofail`, a missing device drops the system to emergency mode at boot. With `nofail`, a missing device leaves the mountpoint empty, which is its own danger.
2. **Always verify a mount is the expected device before writing to it.** Production backup scripts should `findmnt /mnt/backup` and abort if the source device isn't the expected UUID, or write to `/mnt/backup/EXPECTED_DEVICE_PRESENT.sentinel` and refuse to run if the sentinel is missing.
3. **A mountpoint is just a directory.** When the mount isn't there, writes to that path go to the underlying FS. This is the most-painful filesystem lesson in production Linux. The exam tests this concept via "what would have prevented the data loss" questions.

**Discussion (Socratic).**
- **Q1:** Design a 3-line check that a backup script can put at the top to fail-safe when the destination mount isn't the expected device. What's the trade-off if the check is too strict?
- **Q2:** Why does adding `nofail` to fstab not by itself prevent the scenario? What additional fstab option could you combine with `nofail` to refuse writes when the mount didn't succeed?
- **Q3:** The team's monitoring missed the failed mount. Should infrastructure monitoring own this, or should the backup tooling? Argue both positions and propose a contract between them.

---

## ✅ Module 2 Summary

You now know:

- 🗺️ Every top-level directory in the **FHS** and what it's for
- 🗃️ What an **inode** is, the difference between hard and symbolic links, and the inode-exhaustion failure mode
- 💽 The strengths and trade-offs of **ext4, XFS, Btrfs, ZFS**
- 🔌 How to safely edit **`/etc/fstab`** with `mount -a` and `findmnt --verify`, and the meaning of `nofail`, `noexec`, `nosuid`
- 🔐 **DAC permissions** in symbolic and octal form, with umask
- ⚡ **SUID, SGID, and sticky**, what they do on files vs directories
- 📋 **ACLs** with `getfacl`/`setfacl`, default ACLs for inheritance, and the mask trap
- 🏷️ **chattr** attributes like immutable (`i`) and append-only (`a`)

**Next steps:**
1. 🎥 Watch the curated videos: [Videos.md](./Videos.md)
2. ✏️ Take the quiz: [Quiz.md](./Quiz.md), aim for 22/26
3. 📋 Review the [Cheat-Sheet.md](./Cheat-Sheet.md) before bed
4. ➡️ Move on: [Module 3, Package Management](../Module-03-Package-Management/Reading.md)

> **Where this leads.**
> - Inside this course: [Module 5](../Module-05-Users-Groups/Reading.md) shows how user/group IDs map to file ownership; [Module 7](../Module-07-Kernel-Modules/Reading.md) covers LVM (a layer between block devices and the filesystem); [Module 8](../Module-08-Security/Reading.md) adds MAC (SELinux/AppArmor) on top of the DAC model in this module.
> - Practice: Practice Exam 1 has ~7 questions drawing from this module; the Final Mock has ~10.

---

## 📚 Further Reading (Optional)

**Primary sources:**
- 📄 Linux Foundation (2015). [*Filesystem Hierarchy Standard 3.0*](https://refspecs.linuxfoundation.org/FHS_3.0/fhs-3.0.html). The authoritative reference. Read §3 (the directory tree).
- 📄 POSIX.1-2017 (IEEE Std 1003.1-2017), the standard underlying file permissions and most of what this module covers.
- 📄 `man 7 inode`, `man 1 chmod`, `man 1 chattr`, `man 5 acl`, `man 5 fstab`, the canonical references; treat the man pages as the truth.
- 📄 Theodore Ts'o, [*Ext4 Filesystem Design*](https://www.kernel.org/doc/html/latest/filesystems/ext4/index.html), the Linux kernel ext4 docs.

**Practitioner / exam:**
- 📖 Sander van Vugt, *CompTIA Linux+ XK0-005 Cert Guide* (Pearson, 2023), Chapters 7 & 16.
- 📖 Daniel Barrett, *Linux Pocket Guide* (O'Reilly, 4th ed., 2024), the permissions and filesystem chapters are exam-perfect length.
- 📖 Brian Ward, *How Linux Works* (No Starch, 3rd ed., 2021), Chapter 4 (Disks, Filesystems, Boot) is the best single chapter on this material.
