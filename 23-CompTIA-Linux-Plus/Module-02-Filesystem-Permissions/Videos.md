<style>
.vg-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 18px; margin: 22px 0 30px; }
.vg-card { display: block; background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; text-decoration: none; color: inherit; transition: transform .2s, box-shadow .2s, border-color .2s; }
.vg-card:hover { transform: translateY(-3px); box-shadow: 0 12px 24px -8px rgba(0,0,0,.15); border-color: #818cf8; }
.vg-thumb { position: relative; aspect-ratio: 16 / 9; background: linear-gradient(135deg, #4f46e5, #8b5cf6); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 48px; }
.vg-thumb img { width: 100%; height: 100%; object-fit: cover; }
.vg-play { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,.35); color: #fff; font-size: 48px; opacity: 0; transition: opacity .2s; }
.vg-card:hover .vg-play { opacity: 1; }
.vg-meta { padding: 14px 16px; }
.vg-tag { display: inline-block; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: .08em; padding: 3px 8px; border-radius: 4px; margin-bottom: 8px; }
.vg-tag.essential { background: #ddd6fe; color: #5b21b6; }
.vg-tag.recommended { background: #dbeafe; color: #1e40af; }
.vg-tag.optional { background: #fef3c7; color: #92400e; }
.vg-title { font-weight: 700; font-size: 14px; line-height: 1.4; margin: 0 0 4px; color: #0f172a; }
.vg-creator { font-size: 12.5px; color: #64748b; margin: 0 0 6px; }
.vg-duration { font-size: 11px; color: #94a3b8; font-weight: 600; }
.vg-section-title { font-size: 18px; font-weight: 800; margin: 30px 0 8px; color: #0f172a; }
.vg-section-desc { font-size: 14px; color: #64748b; margin: 0 0 4px; }
</style>

# 🎥 Module 2 Videos: Filesystem & Permissions

> **How to use:** Click any video card to search YouTube and watch the latest top result for that topic. Curated picks shown in the order to watch them. Pause and take notes after each one — don't binge.

## ⭐ Essential watching (~55 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Linux+Filesystem+Hierarchy+Standard+FHS+tour" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">FHS — A Tour of the Linux Tree</p>
      <p class="vg-creator">Learn Linux TV</p>
      <span class="vg-duration">⏱ 14 min · Every top-level dir explained</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Linux+permissions+chmod+chown+tutorial" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">chmod, chown & Octal Permissions</p>
      <p class="vg-creator">NetworkChuck</p>
      <span class="vg-duration">⏱ 13 min · Symbolic + numeric forms</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=SUID+SGID+sticky+bit+linux+tutorial" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">SUID, SGID & the Sticky Bit</p>
      <p class="vg-creator">DorianDotSlash</p>
      <span class="vg-duration">⏱ 12 min · The special bits in depth</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=fstab+linux+tutorial+mount+UUID" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">/etc/fstab and Persistent Mounts</p>
      <p class="vg-creator">Jay LaCroix / LearnLinuxTV</p>
      <span class="vg-duration">⏱ 16 min · UUID, options, nofail</span>
    </div>
  </a>
</div>

## 📚 Recommended (~30 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=ext4+vs+XFS+vs+Btrfs+vs+ZFS+comparison" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">ext4 vs XFS vs Btrfs vs ZFS</p>
      <p class="vg-creator">Lawrence Systems</p>
      <span class="vg-duration">⏱ 14 min · When to pick which</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=setfacl+getfacl+linux+ACL+tutorial" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">POSIX ACLs with setfacl / getfacl</p>
      <p class="vg-creator">tutoriaLinux</p>
      <span class="vg-duration">⏱ 11 min · Beyond rwx</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Linux+inodes+hard+link+vs+symlink" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Inodes, Hard Links & Symlinks</p>
      <p class="vg-creator">Veronica Explains</p>
      <span class="vg-duration">⏱ 9 min · The hidden file structure</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Linux+chattr+immutable+attributes+tutorial" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">chattr +i and File Attributes</p>
      <p class="vg-creator">Hak5 / Switched to Linux</p>
      <span class="vg-duration">⏱ 8 min · Lock files from root</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Btrfs+snapshot+subvolume+tutorial" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Btrfs Snapshots & Subvolumes</p>
      <p class="vg-creator">Level1Linux</p>
      <span class="vg-duration">⏱ 22 min · Time-travel filesystems</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=disk+inodes+full+troubleshooting+linux" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Disk Full but df -h Shows Free</p>
      <p class="vg-creator">Linuxhint / FlatpackTech</p>
      <span class="vg-duration">⏱ 10 min · Inode exhaustion drills</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **Learn Linux TV** | Distro-neutral, clear demos, comprehensive coverage |
| **Lawrence Systems** | Pragmatic sysadmin perspective — FS, networking, storage |
| **Level1Linux** | Deep technical content on filesystems, ZFS, Btrfs |
| **tutoriaLinux (Bryan Lunduke / contributors)** | Concise, focused tutorials |
| **DorianDotSlash** | Solid practical Linux walkthroughs |
| **Veronica Explains** | Modern Linux administration for sysadmins |

---

## ✅ After watching

Answer these in your notebook (without re-watching):

1. List 5 top-level FHS directories and what each holds.
2. Convert `rwxr-x---` to octal. Convert `750` to symbolic.
3. What does the sticky bit do, and where is it most famously set?
4. Show the fstab line to mount a USB drive (UUID `1234-abcd`) at `/mnt/usb` as vfat, world-writable, fail-safe at boot.
5. What command and what flag show the inode usage of every mounted filesystem?

If you can answer all 5, you're ready for the [Quiz](./Quiz.md). If not, re-watch the chmod + fstab videos.
