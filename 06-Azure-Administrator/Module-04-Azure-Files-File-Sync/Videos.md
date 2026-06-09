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

# 🎥 Module 4 Videos: Azure Files & File Sync

> **How to use:** Smaller module, 4 essentials + 3 recommended + 2 optional is enough. Pay close attention to identity-based auth modes.

## ⭐ Essential watching (~60 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=John+Savill+Azure+Files+SMB+NFS+overview" target="_blank" rel="noopener" data-video-id="MXXS4n-Tk4o">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Azure Files Deep Dive, SMB & NFS</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 24 min · Tiers + identity</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Adam+Marczak+Azure+Files+tutorial" target="_blank" rel="noopener" data-video-id="UzTtastcBsk">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Azure Files Tutorial, Quickstart</p>
      <p class="vg-creator">Adam Marczak, Azure for Everyone</p>
      <span class="vg-duration">⏱ 14 min · Create + mount</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=John+Savill+Azure+File+Sync+cloud+tiering" target="_blank" rel="noopener" data-video-id="uH1iDOt9A9c">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Azure File Sync + Cloud Tiering</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 20 min · Hybrid file server</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+Files+Entra+Kerberos+identity+auth+SMB" target="_blank" rel="noopener" data-video-id="LWKkva4ksdg">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Identity-Based Auth for Azure Files (AD DS / Entra Kerberos)</p>
      <p class="vg-creator">Microsoft Mechanics</p>
      <span class="vg-duration">⏱ 14 min · The auth maze decoded</span>
    </div>
  </a>
</div>

## 📚 Recommended (~30 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Travis+Roberts+Azure+File+Sync+deployment" target="_blank" rel="noopener" data-video-id="moY9CcPkNNQ">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Azure File Sync, Step-by-Step Deployment</p>
      <p class="vg-creator">Travis Roberts</p>
      <span class="vg-duration">⏱ 12 min · Hands-on lab</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+Files+NFS+4.1+Linux+premium" target="_blank" rel="noopener" data-video-id="44qVRZg-bMA">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">NFS 4.1 Shares on Azure Files</p>
      <p class="vg-creator">Inside Cloud and Security</p>
      <span class="vg-duration">⏱ 10 min · Premium-only gotchas</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+Files+share+snapshot+restore+backup" target="_blank" rel="noopener" data-video-id="_ngGRpM3BAQ">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Snapshots & Backup for Azure Files</p>
      <p class="vg-creator">Tim Warner</p>
      <span class="vg-duration">⏱ 11 min · Previous Versions UX</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+Files+performance+tuning+premium+vs+standard" target="_blank" rel="noopener" data-video-id="TFWph81tueY">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Premium vs Standard Files, Performance &amp; Cost</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 16 min · IOPS math</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=migrate+on-prem+file+server+Azure+Files+robocopy+Storage+Migration+Service" target="_blank" rel="noopener" data-video-id="dogfMUOztdQ">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Migrate On-Prem File Server → Azure Files</p>
      <p class="vg-creator">Microsoft Mechanics</p>
      <span class="vg-duration">⏱ 18 min · Robocopy + SMS</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **John Savill's Technical Training** | Best Azure Files explainers. |
| **Adam Marczak, Azure for Everyone** | Quickstart-friendly. |
| **Travis Roberts** | Real-world File Sync labs. |
| **Inside Cloud and Security** | Niche topics like NFS gotchas. |
| **Microsoft Mechanics** | Latest feature announcements. |

---

## ✅ After watching

1. SMB vs NFS, when do you pick each?
2. Three SMB authentication options (key, Entra Kerberos, AD DS)?
3. What does cloud tiering replace files with locally?
4. Premium share bills you for ___ size; standard bills for ___ size?
5. Why is sync ≠ backup?

If all 5 are easy, you're ready for the [Quiz](./Quiz.md).
