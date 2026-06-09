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

# 🎥 Module 1 Videos: Linux Boot, Init & systemd

> **How to use:** Click any video card to search YouTube and watch the latest top result for that topic. Curated picks shown in the order to watch them. Pause and take notes after each one, don't binge.

## ⭐ Essential watching (~55 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Linux+boot+process+explained+BIOS+UEFI+GRUB+kernel+initramfs" data-video-id="Masm_ec0JiQ" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Linux Boot Process End-to-End</p>
      <p class="vg-creator">DorianDotSlash / LearnLinuxTV</p>
      <span class="vg-duration">⏱ 14 min · The 6-stage boot chain</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=GRUB2+configuration+tutorial+Linux" data-video-id="W9pOivEGCH0" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">GRUB2 Configuration Deep Dive</p>
      <p class="vg-creator">Learn Linux TV</p>
      <span class="vg-duration">⏱ 12 min · /etc/default/grub + mkconfig</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=systemd+tutorial+systemctl+unit+files+for+beginners" data-video-id="5JVBpXiYMKo" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">systemd & systemctl from Zero</p>
      <p class="vg-creator">NetworkChuck</p>
      <span class="vg-duration">⏱ 18 min · Units, targets, status</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=journalctl+tutorial+systemd+logs" data-video-id="1xX6D5goY0c" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">journalctl: The systemd Log Tour</p>
      <p class="vg-creator">Jay LaCroix / LearnLinuxTV</p>
      <span class="vg-duration">⏱ 11 min · -b, -u, -p, -f flags</span>
    </div>
  </a>
</div>

## 📚 Recommended (~30 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=writing+systemd+unit+files+from+scratch+tutorial" data-video-id="N1vgvhiyq0E" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Writing Your First Unit File</p>
      <p class="vg-creator">DistroTube</p>
      <span class="vg-duration">⏱ 13 min · simple, oneshot, notify types</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=initramfs+initrd+dracut+linux+explained" data-video-id="UBzkja634eo" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">initramfs Demystified</p>
      <p class="vg-creator">Eli the Computer Guy</p>
      <span class="vg-duration">⏱ 9 min · Why it exists, when to rebuild</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Linux+rescue+single+user+mode+grub+systemd" data-video-id="7zfd904U1oo" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Rescue / Emergency Mode Recovery</p>
      <p class="vg-creator">Tony Teaches Tech</p>
      <span class="vg-duration">⏱ 10 min · GRUB e-key, root password reset</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Lennart+Poettering+systemd+talk+rethinking+pid+1" data-video-id="orL57i-3Hpc" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Rethinking PID 1 (Original systemd Talk)</p>
      <p class="vg-creator">Lennart Poettering @ Linux.conf.au</p>
      <span class="vg-duration">⏱ 45 min · The history-of-systemd talk</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=UEFI+vs+BIOS+secure+boot+explained" data-video-id="R1EOEEbE_dQ" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">UEFI, Secure Boot & MOK</p>
      <p class="vg-creator">ExplainingComputers</p>
      <span class="vg-duration">⏱ 16 min · Modern firmware in depth</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=systemd+timers+vs+cron+tutorial" data-video-id="n6BuUgkZ5T0" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">systemd Timers vs cron</p>
      <p class="vg-creator">Veronica Explains</p>
      <span class="vg-duration">⏱ 12 min · Modern scheduling</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **Learn Linux TV (Jay LaCroix)** | The hands-on Linux teacher for the past decade. Distro-neutral, clear demos. |
| **NetworkChuck** | High-energy, intro-friendly. Great for warming up cold topics. |
| **DistroTube** | Power-user perspective, lots of init/system tooling content. |
| **The Linux Foundation** | Authoritative, occasionally too dry, perfect for the "is this Sander van Vugt right?" double-check. |
| **Veronica Explains** | Modern Linux administration with a sysadmin focus. |
| **DorianDotSlash** | Solid generalist Linux/security channel. |

---

## ✅ After watching

Answer these in your notebook (without re-watching):

1. List the 6 stages of the Linux boot process in order.
2. Where does GRUB2 store its main config on RHEL vs Debian, and how do you regenerate it?
3. What is the systemd target equivalent of SysVinit runlevel 3? Runlevel 5?
4. What's the difference between `systemctl enable nginx` and `systemctl start nginx`? When do you use `--now`?
5. Three `journalctl` invocations: (a) only kernel messages from this boot, (b) follow nginx live, (c) errors from the previous boot.

If you can answer all 5, you're ready for the [Quiz](./Quiz.md). If not, re-watch the Learn Linux TV systemd video.
