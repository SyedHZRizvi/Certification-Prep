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

# 🎥 Module 3 Videos: Storage — RAID, SAN, NAS

> **How to use:** Pause and draw the array on paper as the speaker explains. Storage clicks when you sketch the disks and the parity blocks yourself.

## ⭐ Essential watching (~55 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Professor+Messer+SK0-005+RAID+levels+explained" data-video-id="A_UXW9lUCxY" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">RAID Levels 0/1/5/6/10 Walkthrough</p>
      <p class="vg-creator">Professor Messer</p>
      <span class="vg-duration">⏱ 14 min · The core 5 visually</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=SAN+vs+NAS+explained+block+vs+file" data-video-id="3r9RGJ0_Bls" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">SAN vs NAS — Block vs File</p>
      <p class="vg-creator">Lawrence Systems</p>
      <span class="vg-duration">⏱ 14 min · The categorical split</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=iSCSI+setup+initiator+target+walkthrough" data-video-id="nhUy_owTw0o" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">iSCSI Initiator + Target Setup</p>
      <p class="vg-creator">NetworkChuck</p>
      <span class="vg-duration">⏱ 13 min · Hands-on demo</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=multipath+IO+MPIO+storage+demo" data-video-id="GrX_6Y9deD0" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">MPIO Multipathing in Action</p>
      <p class="vg-creator">ServeTheHome</p>
      <span class="vg-duration">⏱ 12 min · Why one disk became four</span>
    </div>
  </a>
</div>

## 📚 Recommended (~35 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=thin+vs+thick+provisioning+VMware+explained" data-video-id="Ks6XgT69ZLc" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Thin vs Thick Provisioning</p>
      <p class="vg-creator">VMware community</p>
      <span class="vg-duration">⏱ 11 min · Capacity tradeoffs</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=NFS+vs+SMB+protocols+server" data-video-id="bZUP5YGeowM" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">NFS vs SMB Side-by-Side</p>
      <p class="vg-creator">Learn Linux TV</p>
      <span class="vg-duration">⏱ 12 min · Pick the right one</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=storage+deduplication+how+it+works" data-video-id="ytP89DVumYY" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">How Storage Deduplication Works</p>
      <p class="vg-creator">Cisco / Dell EMC community</p>
      <span class="vg-duration">⏱ 12 min · Chunks + hashes</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=fibre+channel+SAN+zoning+demo" data-video-id="QFx2CFgNnuE" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">FC Zoning on a Real Switch</p>
      <p class="vg-creator">Brocade community</p>
      <span class="vg-duration">⏱ 18 min · WWPN + zoning</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=ZFS+filesystem+overview+sysadmin" data-video-id="Hj4lCqQckZM" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">ZFS for Sysadmins</p>
      <p class="vg-creator">Lawrence Systems</p>
      <span class="vg-duration">⏱ 25 min · CoW + snapshots + zpool</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=NVMe+over+Fabrics+RoCE+TCP+overview" data-video-id="9KGBtTFyI9A" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">NVMe-oF — RoCE vs TCP</p>
      <p class="vg-creator">SNIA community</p>
      <span class="vg-duration">⏱ 20 min · Next-gen block transport</span>
    </div>
  </a>
</div>

---

## ✅ After watching

Answer these in your notebook:

1. Compute usable capacity for: 6×4 TB RAID 5, 8×2 TB RAID 6, 8×4 TB RAID 10.
2. Pick: VM datastore for a SQL Server → SAN or NAS? Marketing's photo library → SAN or NAS?
3. iSCSI port + transport?
4. What does multipathing protect against, and what does it NOT protect against?
5. Zoning vs LUN masking — at what layer is each enforced?
6. Synchronous vs asynchronous replication — RPO impact of each?

If you can answer all 6, you're ready for the [Quiz](./Quiz.md).
