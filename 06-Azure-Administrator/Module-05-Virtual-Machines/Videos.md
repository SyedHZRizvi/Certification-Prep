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

# 🎥 Module 5 Videos: Virtual Machines

> **How to use:** This is the longest module's video set on purpose — 4 essential watches, 3 recommended, 3 optional. Replay the John Savill availability and disk videos until you can recite the SKUs cold.

## ⭐ Essential watching (~95 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=John+Savill+Azure+VM+sizes+families+suffix" target="_blank" rel="noopener" data-video-id="h5PyYtClt-c">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Azure VM Sizes &amp; Families — Decoded</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 25 min · Letter + suffix breakdown</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=John+Savill+availability+zones+sets+fault+update+domains" target="_blank" rel="noopener" data-video-id="iX87AomIqTw">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Availability Zones vs Sets vs FD/UD</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 22 min · SLA math + diagrams</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=John+Savill+Azure+managed+disks+Premium+SSD+v2+Ultra" target="_blank" rel="noopener" data-video-id="2nPZyLmciN4">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Managed Disks — Premium v2 &amp; Ultra Compared</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 24 min · IOPS / throughput math</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Adam+Marczak+VM+Scale+Sets+autoscale" target="_blank" rel="noopener" data-video-id="inaXkN2UrFE">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Virtual Machine Scale Sets &amp; Autoscale</p>
      <p class="vg-creator">Adam Marczak — Azure for Everyone</p>
      <span class="vg-duration">⏱ 20 min · Flexible vs Uniform</span>
    </div>
  </a>
</div>

## 📚 Recommended (~40 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+Compute+Gallery+shared+image+tutorial" target="_blank" rel="noopener" data-video-id="aR3u5oBsydM">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Azure Compute Gallery — Versioned Images</p>
      <p class="vg-creator">Tim Warner</p>
      <span class="vg-duration">⏱ 13 min · Capture + replicate</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+VM+extensions+custom+script+run+command" target="_blank" rel="noopener" data-video-id="BunAIDBhdUY">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">VM Extensions: Custom Script &amp; Run Command</p>
      <p class="vg-creator">Travis Roberts</p>
      <span class="vg-duration">⏱ 12 min · Real demos</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+disk+encryption+ADE+host+encryption+CMK" target="_blank" rel="noopener" data-video-id="EOXgzTqceok">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Disk Encryption Layers — ADE vs Host vs CMK</p>
      <p class="vg-creator">Inside Cloud and Security</p>
      <span class="vg-duration">⏱ 15 min · Each one demystified</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Spot+VMs+Azure+eviction+strategies" target="_blank" rel="noopener" data-video-id="LWA4SCALYCY">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Spot VMs — Eviction Strategies &amp; Cost Wins</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 14 min · Up to 90% off</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+Update+Manager+patch+management" target="_blank" rel="noopener" data-video-id="LVmNh5YgBOQ">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Azure Update Manager — Patch Strategy</p>
      <p class="vg-creator">Microsoft Mechanics</p>
      <span class="vg-duration">⏱ 12 min · Replaces legacy Update Mgmt</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+Bastion+RDP+SSH+secure+jump+host" target="_blank" rel="noopener" data-video-id="MbnWB_bAhPk">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Azure Bastion — Secure RDP/SSH Without Public IPs</p>
      <p class="vg-creator">Adam Marczak — Azure for Everyone</p>
      <span class="vg-duration">⏱ 11 min · Goodbye jump boxes</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **John Savill's Technical Training** | Best VM/availability/disk content. |
| **Adam Marczak — Azure for Everyone** | Clear visuals on scaling and gallery. |
| **Tim Warner** | Exam-pace walkthroughs. |
| **Travis Roberts** | Hands-on extensions and ops content. |
| **Inside Cloud and Security** | Encryption deep dives. |

---

## ✅ After watching

1. Name the SLAs for single VM, Availability Set, Availability Zone.
2. Maximum FDs and UDs in an Availability Set?
3. When would you pick Premium SSD v2 over Premium SSD?
4. VMSS Uniform vs Flexible — when does each apply?
5. Three reasons NOT to use a B-series VM in production?

Ready for the [Quiz](./Quiz.md)?
