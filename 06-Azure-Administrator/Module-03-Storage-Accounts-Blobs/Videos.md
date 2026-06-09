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

# 🎥 Module 3 Videos: Storage Accounts & Blobs

> **How to use:** Click any card to search YouTube. Watch in order. The redundancy + SAS questions appear on every AZ-104 exam, don't skip those videos.

## ⭐ Essential watching (~80 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=John+Savill+Azure+storage+redundancy+LRS+ZRS+GRS+GZRS" target="_blank" rel="noopener" data-video-id="E1t-x0T2bn0">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Azure Storage Redundancy, LRS vs ZRS vs GRS vs GZRS</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 22 min · The definitive comparison</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Adam+Marczak+Azure+storage+accounts+tutorial" target="_blank" rel="noopener" data-video-id="_Qlkvd4ZQuo">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Azure Storage Accounts, Tutorial</p>
      <p class="vg-creator">Adam Marczak, Azure for Everyone</p>
      <span class="vg-duration">⏱ 18 min · Kinds + creation walkthrough</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=John+Savill+blob+access+tiers+lifecycle+management" target="_blank" rel="noopener" data-video-id="ZNuzmUKt6IE">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Blob Access Tiers + Lifecycle Management</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 20 min · Hot/Cool/Cold/Archive + JSON rules</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Tim+Warner+Azure+SAS+shared+access+signature+tutorial" target="_blank" rel="noopener" data-video-id="lFFYcNbDvdo">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">SAS Tokens Explained (Account / Service / User Delegation)</p>
      <p class="vg-creator">Tim Warner</p>
      <span class="vg-duration">⏱ 16 min · Including stored access policies</span>
    </div>
  </a>
</div>

## 📚 Recommended (~40 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=AzCopy+v10+tutorial+azure+storage" target="_blank" rel="noopener" data-video-id="K_2yUH2FqaY">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">AzCopy v10 Hands-On Tutorial</p>
      <p class="vg-creator">Travis Roberts</p>
      <span class="vg-duration">⏱ 14 min · sync, copy, resume</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Inside+Cloud+and+Security+Azure+storage+private+endpoint" target="_blank" rel="noopener" data-video-id="X319wzJOSSA">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Storage Account Private Endpoints, End to End</p>
      <p class="vg-creator">Inside Cloud and Security</p>
      <span class="vg-duration">⏱ 18 min · vs service endpoints</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+storage+CMK+customer+managed+key+vault" target="_blank" rel="noopener" data-video-id="JlkCnTD4pcU">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Customer-Managed Keys for Storage</p>
      <p class="vg-creator">Microsoft Mechanics</p>
      <span class="vg-duration">⏱ 12 min · Key Vault wiring</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+blob+immutable+storage+WORM+legal+hold" target="_blank" rel="noopener" data-video-id="59IQEPAF7nA">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Immutable Blob Storage (WORM + Legal Hold)</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 15 min · Compliance workloads</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+storage+explorer+tutorial+upload+download" target="_blank" rel="noopener" data-video-id="aaDM130tGr4">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Azure Storage Explorer Tour</p>
      <p class="vg-creator">Tim Warner</p>
      <span class="vg-duration">⏱ 10 min · GUI walkthrough</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+Data+Box+offline+transfer+petabytes" target="_blank" rel="noopener" data-video-id="trBZN7hVeOE">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Azure Data Box for Offline TB/PB Transfer</p>
      <p class="vg-creator">Microsoft Mechanics</p>
      <span class="vg-duration">⏱ 14 min · The "FedEx a hard drive" service</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **John Savill's Technical Training** | Best Azure storage deep dives, period. |
| **Adam Marczak, Azure for Everyone** | Clean intros to each service. |
| **Tim Warner** | AZ-104 exam-focused. |
| **Inside Cloud and Security** | Networking + storage interplay. |
| **Microsoft Mechanics** | Newest features (Cold tier, etc.). |

---

## ✅ After watching

1. From cheapest to most expensive, list the redundancy SKUs.
2. Which redundancy survives an Availability Zone failure but not a region failure?
3. What's the minimum storage duration for Cool and Archive tiers?
4. Why is User Delegation SAS preferred over Account SAS?
5. What's the difference between a service endpoint and a private endpoint?

Ready for the [Quiz](./Quiz.md) once you can answer all 5.
