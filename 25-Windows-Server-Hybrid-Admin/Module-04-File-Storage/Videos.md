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

# 🎥 Module 4 Videos: File Servers, Storage & Storage Spaces

> **How to use:** Click any card to search YouTube for the latest top result. Storage is 15–20% of AZ-800, and the questions are dense (combination scenarios).

## ⭐ Essential watching (~115 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=John+Savill+Storage+Spaces+Direct+S2D+deep+dive" data-video-id="oa-JSXvcyhI" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Storage Spaces Direct (S2D), Deep Dive</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 40 min · Architecture + prerequisites</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Mechanics+Storage+Replica+Windows+Server+sync+async" data-video-id="W_t7G7-5ufs" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Storage Replica, Sync vs Async</p>
      <p class="vg-creator">Microsoft Mechanics</p>
      <span class="vg-duration">⏱ 25 min · Cross-site DR</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=DFS+Namespaces+DFS+Replication+walkthrough+Windows+Server" data-video-id="7Md7689n1Us" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">DFS-N + DFS-R Together</p>
      <p class="vg-creator">Andy Malone MVP</p>
      <span class="vg-duration">⏱ 30 min · The classic combination</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=ReFS+vs+NTFS+comparison+Windows+Server" data-video-id="wvwuf0liD_8" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">ReFS vs NTFS, Pick the Right One</p>
      <p class="vg-creator">Travis Roberts</p>
      <span class="vg-duration">⏱ 20 min · Block cloning, integrity</span>
    </div>
  </a>
</div>

## 📚 Recommended (~60 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=FSRM+File+Server+Resource+Manager+quotas+file+screens" data-video-id="WwWMCZST3oo" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">FSRM, Quotas, Screens, Classification</p>
      <p class="vg-creator">Server Academy</p>
      <span class="vg-duration">⏱ 20 min · Block ransomware extensions</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=iSCSI+target+server+Windows+Server+walkthrough" data-video-id="LTkPpdDcdGk" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">iSCSI Target, VHDX as LUN</p>
      <p class="vg-creator">ITProTV / ACI Learning</p>
      <span class="vg-duration">⏱ 18 min · CHAP authentication</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Work+Folders+Windows+Server+setup+sync+share" data-video-id="ulCFx_A_gtU" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Work Folders, Self-Managed File Sync</p>
      <p class="vg-creator">Practical Windows Server</p>
      <span class="vg-duration">⏱ 14 min · OneDrive alternative</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=BranchCache+hosted+distributed+cache+Windows+Server+tutorial" data-video-id="nTL6iHSuHlI" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">BranchCache, Hosted vs Distributed</p>
      <p class="vg-creator">CBT Nuggets</p>
      <span class="vg-duration">⏱ 16 min · WAN optimization</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Scale+Out+File+Server+SOFS+CSV+walkthrough" data-video-id="aig32E_0VQY" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Scale-Out File Server (SOFS) Deep Dive</p>
      <p class="vg-creator">Inside Cloud and Security</p>
      <span class="vg-duration">⏱ 22 min · Active-active shares</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Storage+Spaces+Direct+resiliency+modes+mirror+parity" data-video-id="i8znxUZHItw" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">S2D Resiliency, Mirror vs Parity vs MAP</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 18 min · Match resiliency to node count</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **John Savill's Technical Training** | The definitive S2D and storage educator |
| **Microsoft Mechanics** | Official feature walkthroughs |
| **Andy Malone MVP** | DFS / FSRM at AZ-800 depth |
| **Server Academy** | Hands-on labs |
| **Travis Roberts** | ReFS, fast, no-fluff |

---

## ✅ After watching

Answer these in your notebook:

1. S2D node range and edition requirement?
2. Storage Replica sync mode latency budget?
3. DFS-N vs DFS-R, what does each do, and how do they pair?
4. ReFS use cases vs NTFS use cases?
5. FSRM file screen, active vs passive mode?
6. iSCSI Target Server, what authentication options exist?

If you can answer all 6, you're ready for the [Quiz](./Quiz.md).
