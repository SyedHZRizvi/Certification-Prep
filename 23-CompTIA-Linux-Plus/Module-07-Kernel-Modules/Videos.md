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

# 🎥 Module 7 Videos: Kernel Modules, Devices & LVM

> **How to use:** Click any card. Watch in order. The LVM ones are most directly exam-relevant, set up a VM with extra virtual disks first.

## ⭐ Essential watching (~60 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=LVM+linux+tutorial+complete+pvcreate+vgcreate+lvcreate" data-video-id="AyeLjD9Wa9I" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">LVM Complete Tutorial, PV, VG, LV</p>
      <p class="vg-creator">Learn Linux TV</p>
      <span class="vg-duration">⏱ 20 min · End-to-end stack build</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Linux+kernel+modules+modprobe+lsmod+tutorial" data-video-id="5YJia3BPuV0" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Kernel Modules: lsmod, modprobe, modinfo</p>
      <p class="vg-creator">Veronica Explains</p>
      <span class="vg-duration">⏱ 12 min · Load, unload, blacklist</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=dmesg+lspci+lsblk+lsusb+hardware+discovery+linux" data-video-id="XfqsAkAkTf8" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Hardware Discovery: dmesg, lspci, lsblk</p>
      <p class="vg-creator">Jay LaCroix / LearnLinuxTV</p>
      <span class="vg-duration">⏱ 13 min · The discovery toolkit</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=LVM+extend+resize+snapshot+linux+tutorial" data-video-id="EPiGbU7U2V4" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">LVM Extend, Resize & Snapshots</p>
      <p class="vg-creator">Red Hat Enterprise Linux Channel</p>
      <span class="vg-duration">⏱ 15 min · lvextend -r, snapshots</span>
    </div>
  </a>
</div>

## 📚 Recommended (~30 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=udev+rules+tutorial+linux+writing" data-video-id="BOxWrMNXKpU" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Writing udev Rules</p>
      <p class="vg-creator">tutoriaLinux</p>
      <span class="vg-duration">⏱ 11 min · SYMLINK, MODE, GROUP</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=proc+sysfs+filesystem+linux+explained" data-video-id="NbgIubl3aB4" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">/proc & /sys, The Virtual Filesystems</p>
      <p class="vg-creator">DorianDotSlash</p>
      <span class="vg-duration">⏱ 9 min · What's in there + why</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=parted+gdisk+linux+gpt+partition+tutorial" data-video-id="B8EatMRp0AA" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">parted, gdisk & GPT Partitioning</p>
      <p class="vg-creator">Learn Linux TV</p>
      <span class="vg-duration">⏱ 10 min · Beyond fdisk</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=initramfs+dracut+linux+rebuild+tutorial" data-video-id="S1WsIbxbd_k" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">initramfs / dracut Internals</p>
      <p class="vg-creator">Red Hat Enterprise Linux Channel</p>
      <span class="vg-duration">⏱ 18 min · When and why to rebuild</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=mdadm+software+RAID+linux+tutorial" data-video-id="dXAK_73qguw" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">mdadm Software RAID</p>
      <p class="vg-creator">Level1Linux</p>
      <span class="vg-duration">⏱ 20 min · RAID 0/1/5/10 on Linux</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=dmidecode+linux+tutorial+system+info" data-video-id="JxuM3nB4nq0" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">dmidecode for system inventory</p>
      <p class="vg-creator">DistroTube</p>
      <span class="vg-duration">⏱ 8 min · -t bios / memory / system</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **Learn Linux TV** | Best LVM and partitioning content |
| **Red Hat Enterprise Linux Channel** | Authoritative for dracut, LVM, storage on RHEL |
| **Level1Linux** | Deep technical storage + filesystem content |
| **Veronica Explains** | Modern Linux administration |
| **tutoriaLinux** | Concise udev and kernel module tutorials |
| **Jay LaCroix / LearnLinuxTV** | Hardware discovery walk-throughs |

---

## ✅ After watching

Answer these in your notebook (without re-watching):

1. The 3 layers of LVM, bottom-up.
2. Show the commands to create a VG `vg_data` from `/dev/sdb1` and `/dev/sdc1`, then carve a 100 GB LV `lv_app`.
3. When MUST you rebuild the initramfs after a change?
4. Which command lists kernel drivers bound to PCI devices?
5. Show a one-line udev rule that gives any FTDI USB-serial dongle a symlink at `/dev/ftdi`.

If you can answer all 5, you're ready for the [Quiz](./Quiz.md). If not, re-watch the LVM video.
