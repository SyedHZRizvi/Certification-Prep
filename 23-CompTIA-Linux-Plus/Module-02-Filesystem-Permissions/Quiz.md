# ✏️ Module 2 Quiz: Filesystem & Permissions

> **Instructions:** Answer all 26 questions WITHOUT looking at the reading. Aim for 22/26 minimum.
>
> **Bloom distribution (this quiz):** Remember 5 · Understand 6 · Apply 8 · Analyze/Evaluate 6 · Create 1.

---

## Questions

### Q1. Per the FHS, which directory is intended for host-specific configuration? *(Remember)*
A. `/usr`
B. `/etc`
C. `/var`
D. `/opt`

---

### Q2. A user reports a write fails with `No space left on device` but `df -h` shows 60% free space. The most likely cause is: *(Analyze)*
A. The filesystem is corrupted
B. The disk is encrypted
C. Inodes are exhausted
D. The mount is read-only

---

### Q3. The mode `rwxr-xr--` in octal is: *(Apply)*
A. 755
B. 754
C. 644
D. 775

---

### Q4. You want all new files created in `/srv/team/shared` to inherit the group `devs`. What do you set on the directory? *(Apply)*
A. Sticky bit (`chmod +t`)
B. SUID (`chmod u+s`)
C. SGID (`chmod g+s`)
D. Immutable attribute (`chattr +i`)

---

### Q5. Which command shows whether a file has extended ACLs? *(Remember)*
A. `lsattr`
B. `stat`
C. `getfacl`
D. `getfattr`

---

### Q6. A line `ls -l` shows mode `-rwsr-xr-x`. What is set? *(Understand)*
A. SGID
B. Sticky bit
C. SUID
D. Immutable

---

### Q7. The default umask is `022`. What permissions does a newly created regular file get? *(Apply)*
A. 600
B. 640
C. 644
D. 755

---

### Q8. Which fstab option lets the system boot even if the specified device is missing? *(Remember)*
A. `defaults`
B. `auto`
C. `nofail`
D. `noexec`

---

### Q9. Which filesystem CANNOT be shrunk after creation? *(Understand)*
A. ext4
B. XFS
C. Btrfs
D. ZFS

---

### Q10. The sticky bit on `/tmp` (mode `1777`) ensures: *(Understand)*
A. Files inherit the directory's group
B. Only the file's owner (and root) can unlink files in that directory
C. Executables run with the file owner's privileges
D. Writes are journaled

---

### Q11. You see `ls -l` output: `drwxrwxr-x+ 2 alice devs 4096 file`. The `+` indicates: *(Remember)*
A. The file is encrypted
B. An ACL is present
C. The file is sparse
D. The file is a symbolic link

---

### Q12. To remove every ACL entry from a file, the correct command is: *(Apply)*
A. `setfacl -m b file`
B. `setfacl -b file`
C. `getfacl --delete file`
D. `chacl -d file`

---

### Q13. Which command applies the entries listed in `/etc/fstab` without rebooting? *(Remember)*
A. `mount -a`
B. `mount -F`
C. `mountall`
D. `mount --remount-all`

---

### Q14. After `chmod 4644 file`, the SUID-position character in `ls -l` will be: *(Analyze)*
A. lowercase `s` (SUID will fire)
B. uppercase `S` (SUID set but no execute, won't actually fire on execve)
C. `t` (sticky)
D. `x` (regular execute)

---

### Q15. The MOST FHS-correct location for a third-party Oracle DB installation is: *(Understand)*
A. `/usr/oracle`
B. `/etc/oracle`
C. `/opt/oracle`
D. `/var/oracle`

---

### Q16. Which mount option would you set on `/home` to PREVENT users from running setuid binaries there? *(Apply)*
A. `nodev`
B. `noexec`
C. `nosuid`
D. `ro`

---

### Q17. A user owns a file but cannot modify it. `lsattr` shows the `i` flag set. What command removes the immutability? *(Apply)*
A. `chmod -i file`
B. `chattr -i file` (as root)
C. `setfacl -b file`
D. `chown root file`

---

### Q18. Which is TRUE about hard links vs symlinks? *(Understand)*
A. Hard links can cross filesystems; symlinks cannot
B. Hard links cannot cross filesystems; symlinks can
C. Both create separate inodes
D. Both can point to nonexistent targets

---

### Q19. Which directory in the FHS is a virtual filesystem (procfs) presenting process and kernel info? *(Remember)*
A. `/dev`
B. `/sys`
C. `/proc`
D. `/run`

---

### Q20. The default ACL on a directory affects: *(Analyze)*
A. Existing files only
B. New files and subdirectories created in that directory
C. Only the immediate directory entry
D. Other directories with the same inode

---

### Q21. A user `bob` is denied access to `/srv/data/file` despite `getfacl` showing `user:bob:rwx`. The most likely reason is: *(Evaluate)*
A. `chattr +i` is set
B. The ACL `mask::` is more restrictive than `rwx` (e.g. `r-x`), capping the effective rights
C. Root has not run `daemon-reload`
D. The file is on a read-only mount

---

### Q22. Which command is the SAFE order to chmod a project tree so files become `644` and directories become `755`? *(Evaluate)*
A. `chmod -R 644 /project`
B. `chmod -R 755 /project`
C. `find /project -type f -exec chmod 644 {} +; find /project -type d -exec chmod 755 {} +`
D. `chmod 0644 /project && chmod 0755 /project`

---

### Q23. Which fstab entry would correctly mount an NFS export from `nas:/exports/data` at `/mnt/data` AND defer the attempt until the network is up? *(Apply)*
A. `nas:/exports/data /mnt/data nfs defaults 0 0`
B. `nas:/exports/data /mnt/data nfs defaults,_netdev 0 0`
C. `nas:/exports/data /mnt/data ext4 defaults 0 2`
D. `nas:/exports/data /mnt/data nfs ro,noauto 0 0`

---

### Q24. You're told `/var/log` is filling up with deleted-but-held log files. Which command surfaces processes holding deleted file descriptors? *(Apply)*
A. `du -sh /var/log`
B. `ls -la /var/log | grep deleted`
C. `lsof | grep deleted`
D. `find /var/log -type f -atime +30`

---

### Q25. Which Linux filesystem natively supports COPY-ON-WRITE, snapshots, and subvolumes in the mainline kernel? *(Understand)*
A. ext4
B. XFS
C. Btrfs
D. ReiserFS

---

### Q26. **(Create-level)** You need to set up `/srv/team` such that: (a) the `devs` group can read/write; (b) every file created inherits group `devs`; (c) only the file's owner can delete their own files; (d) auditors (separate user `auditor`) get persistent read access on new files. Which one-line setup achieves the *bit-level* goal of (a)+(b)+(c)? *(Create)*

> *Create-level note:* you're composing several permission mechanisms into one mode-and-ownership statement.

A. `chmod 0775 /srv/team && chgrp devs /srv/team`
B. `chmod 2770 /srv/team && chgrp devs /srv/team && chmod +t /srv/team`
C. `chmod 1777 /srv/team`
D. `setfacl -m u:auditor:r /srv/team`

---

## 🎯 Answers + Explanations

### Q1: **B. `/etc`**
Per FHS, `/etc` holds host-specific configuration. `/usr` is read-only sharable, `/var` is variable data (logs), `/opt` is third-party packages.

### Q2: **C. Inodes are exhausted**
Classic gotcha. `df -h` shows block usage; `df -i` shows inode usage. A directory of millions of tiny files (mail spool, cache) will exhaust inodes long before blocks fill.

### Q3: **B. 754**
rwx (7) for owner, r-x (5) for group, r-- (4) for other → 754. Choice A (`755`) is rwx for owner and r-x for both group and other.

### Q4: **C. SGID (`chmod g+s`)**
SGID on a directory makes new files inherit the directory's group. SUID on a file does the user-equivalent for executables; sticky restricts deletes; immutable locks the file.

### Q5: **C. `getfacl`**
`getfacl` shows the full ACL. The `+` in `ls -l` is the hint that an ACL exists. `lsattr` shows file *attributes* (`i`, `a`, etc.), not ACLs.

### Q6: **C. SUID**
`s` in the owner's execute position = SUID. SGID would be in the group's execute position. Sticky is in other's. Immutable is invisible to `ls -l`.

### Q7: **C. 644**
0666 (default for files) masked by umask 022 = 0644 (rw-r--r--). Files don't get the execute bit by default regardless of umask.

### Q8: **C. `nofail`**
`nofail` lets the system continue booting even if the mount fails. Without it, a missing device drops you into emergency mode. Pair with `x-systemd.device-timeout=` to bound the wait.

### Q9: **B. XFS**
XFS cannot shrink, only grow. This is a known XFS limitation; if you need to shrink, you reformat. ext4 and Btrfs can shrink; ZFS technically can shrink some volume types but not the pool.

### Q10: **B. Only the file's owner (and root) can unlink files**
Sticky on a directory restricts unlink/rename to the file's owner. Without it, anyone with write access to the directory could `rm` anyone else's file.

### Q11: **B. An ACL is present**
The `+` is the signal. Use `getfacl` to view the entries.

### Q12: **B. `setfacl -b file`**
`-b` removes all ACL entries (leaves only the regular owner/group/other base ACL).

### Q13: **A. `mount -a`**
`mount -a` mounts everything in fstab that isn't already mounted (and doesn't have `noauto`). Always run before reboot after editing fstab.

### Q14: **B. uppercase `S` (set but won't fire)**
4644 sets SUID but doesn't grant execute. The kernel needs the execute bit *and* SUID for the special semantic to fire. Capital S = "I tried but it's broken."

### Q15: **C. `/opt/oracle`**
FHS specifies `/opt/<vendor>` for third-party add-on packages. `/usr` is for distro-managed software.

### Q16: **C. `nosuid`**
`nosuid` causes the kernel to ignore SUID/SGID bits on files in this mount. `noexec` blocks executing binaries entirely (often too strict for /home). `nodev` blocks device files.

### Q17: **B. `chattr -i file` (as root)**
Only root can manage ext attributes. `chmod` doesn't touch the `i` flag.

### Q18: **B. Hard links cannot cross filesystems; symlinks can**
Hard links share an inode, and inodes are filesystem-local. Symlinks are independent files containing a path, so they can target anything (including nothing).

### Q19: **C. `/proc`**
`/proc` (procfs) is the kernel/process info virtual FS. `/sys` (sysfs) is the device tree. `/dev` is device nodes. `/run` is tmpfs runtime state.

### Q20: **B. New files and subdirectories**
Default ACLs apply to children CREATED in the directory afterward. Existing entries are unaffected unless you re-set them.

### Q21: **B. The ACL mask is more restrictive**
The `mask::` ACL entry caps the effective permissions of NAMED users, NAMED groups, and the OWNING group. Even `user:bob:rwx` is capped to the mask. Fix: `setfacl -m m::rwx file` (or fix the umask drift that lowered the mask).

### Q22: **C. Find files and dirs separately**
Recursively `chmod 644` would strip execute from directories (breaking traversal). Recursively `chmod 755` would make every file executable. The correct pattern is type-separated `find`.

### Q23: **B. `_netdev` option**
`_netdev` tells systemd this mount needs the network. Without it, systemd may try to mount before the network is up, then fail. NFS is the canonical use case.

### Q24: **C. `lsof | grep deleted`**
A deleted file held open by a running process still consumes blocks. `lsof` shows open file descriptors including those marked deleted. The fix: restart the holding process (or kill it).

### Q25: **C. Btrfs**
Btrfs is the CoW + snapshot + subvolume FS in the mainline kernel. ZFS does this too but is out-of-tree on Linux (CDDL license).

### Q26: **B. `chmod 2770 + chgrp devs + chmod +t`**
- `2770` = SGID (2) + rwx for owner + rwx for group + nothing for other
- `chgrp devs` sets the group
- `+t` adds sticky so users can only delete their own files
- `setfacl` (D) is needed for auditor part of the goal, but the question asks for the bit-level setup of (a)+(b)+(c).

Note: (d) requires a default ACL: `setfacl -d -m u:auditor:r /srv/team`, a separate command, not part of the chosen line.

---

## 📊 Score Yourself

- 25–26/26 → 🏆 Module 2 mastered. Permission denied no longer scares you.
- 22–24/26 → ✅ Solid. Note the gaps, then move on.
- 18–21/26 → ⚠️ Re-read the SUID/SGID/sticky and ACL sections.
- <18/26 → 🔁 Restart the Reading.md and re-quiz tomorrow.

---

## 🃏 Add To Your Flashcards

- FHS top-level directories (one card each for /etc, /var, /usr, /opt, /srv, /proc, /sys, /run, /tmp, /home)
- chmod octal: 4=r, 2=w, 1=x; combine per triad
- SUID (4), SGID (2), sticky (1), what each does on files vs dirs
- ACL commands: `getfacl`, `setfacl -m`, `setfacl -b`, `setfacl -d` (default)
- ACL mask trap, effective rights of named entries are capped
- fstab fields and options: nofail, noexec, nosuid, nodev, _netdev
- chattr: `+i` (immutable), `+a` (append-only)
- `df` vs `df -i`; `lsof | grep deleted`

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 3, Package Management](../Module-03-Package-Management/Reading.md)
