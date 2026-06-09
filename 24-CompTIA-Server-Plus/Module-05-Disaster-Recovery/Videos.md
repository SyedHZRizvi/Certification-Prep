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

# 🎥 Module 5 Videos: Disaster Recovery & Backup

> **How to use:** Sketch the timeline for each backup type as the video plays, see when each backup happens and what each restore needs.

## ⭐ Essential watching (~55 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Professor+Messer+SK0-005+RTO+RPO+disaster+recovery" data-video-id="YIZfARjB4Eo" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">RTO vs RPO Explained</p>
      <p class="vg-creator">Professor Messer</p>
      <span class="vg-duration">⏱ 9 min · The two numbers</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=full+incremental+differential+backup+explained" data-video-id="k6dosJ9phWY" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Full / Incremental / Differential Backups</p>
      <p class="vg-creator">Eli the Computer Guy</p>
      <span class="vg-duration">⏱ 14 min · Timeline + restore</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=3-2-1+backup+rule+explained" data-video-id="97vxkZ-xX2g" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">The 3-2-1 Backup Rule</p>
      <p class="vg-creator">Veeam community</p>
      <span class="vg-duration">⏱ 8 min · Universal principle</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=hot+warm+cold+disaster+recovery+site" data-video-id="NiHBz5jOs4o" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Hot / Warm / Cold DR Sites</p>
      <p class="vg-creator">Dion Training</p>
      <span class="vg-duration">⏱ 11 min · Cost vs recovery time</span>
    </div>
  </a>
</div>

## 📚 Recommended (~40 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=synthetic+full+backup+explained+Veeam" data-video-id="bvSWYwhMeAY" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Synthetic Full Backups</p>
      <p class="vg-creator">Veeam community</p>
      <span class="vg-duration">⏱ 12 min · Build-on-server full</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=GFS+grandfather+father+son+tape+rotation" data-video-id="wAvj90bYnPc" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">GFS Tape Rotation Explained</p>
      <p class="vg-creator">backup community</p>
      <span class="vg-duration">⏱ 10 min · Classic retention design</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=immutable+backups+ransomware+protection" data-video-id="p9pgDwrtp_A" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Immutable Backups for Ransomware</p>
      <p class="vg-creator">community / vendor</p>
      <span class="vg-duration">⏱ 14 min · WORM + air-gap</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=business+continuity+plan+BCP+overview" data-video-id="7VhDqXLFhSI" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">BCP vs DR, Wider Picture</p>
      <p class="vg-creator">CISSP / community</p>
      <span class="vg-duration">⏱ 18 min · BCP = business, DR = IT</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=SQL+Server+AlwaysOn+availability+group+walkthrough" data-video-id="76EQ0jNW3cM" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">SQL AlwaysOn AG Overview</p>
      <p class="vg-creator">Microsoft / community</p>
      <span class="vg-duration">⏱ 20 min · App-level replication</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Code+Spaces+AWS+disaster+2014+post+mortem" data-video-id="4fPVPBJvmzQ" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Code Spaces 2014, Backup Lessons</p>
      <p class="vg-creator">community case study</p>
      <span class="vg-duration">⏱ 22 min · Backups in the blast radius</span>
    </div>
  </a>
</div>

---

## ✅ After watching

Answer these in your notebook:

1. Define RTO and RPO and write a sentence with each.
2. Compare incremental vs differential, which backs up *less* per night? Which restores *faster*?
3. State the 3-2-1 rule + what the extra "-1-0" adds in 3-2-1-1-0.
4. Cold / warm / hot site, match each to a recovery window.
5. Why are synchronous replication and asynchronous replication a function of *distance*?
6. Why are immutable backups important post-Code-Spaces?

If you can answer all 6, you're ready for the [Quiz](./Quiz.md).
