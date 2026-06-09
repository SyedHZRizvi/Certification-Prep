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

# 🎥 Module 1 Videos: Active Directory Domain Services

> **How to use:** Click any card to search YouTube and watch the latest top result. AD DS is 30–35% of AZ-800, these are not optional.

## ⭐ Essential watching (~2 hours)

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=John+Savill+Active+Directory+complete+overview" data-video-id="4qC7H-y7oKI" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Active Directory, The Definitive Overview</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 45 min · Forest, domain, sites, GPOs</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=ITProTV+FSMO+roles+explained+Windows+Server" data-video-id="tUoSwjTwXpc" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">FSMO Roles Explained, All 5</p>
      <p class="vg-creator">ITProTV / ACI Learning</p>
      <span class="vg-duration">⏱ 25 min · Memorize cold</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Andy+Malone+Group+Policy+precedence+LSDOU+tutorial" data-video-id="cWraXsgOJ7U" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Group Policy, Precedence, Block, Enforced</p>
      <p class="vg-creator">Andy Malone MVP</p>
      <span class="vg-duration">⏱ 30 min · LSDOU mastered</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Server+Academy+AD+sites+and+services+replication" data-video-id="sRyPgUekXdE" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">AD Sites & Services, Replication Deep Dive</p>
      <p class="vg-creator">Server Academy</p>
      <span class="vg-duration">⏱ 20 min · Site links + KCC</span>
    </div>
  </a>
</div>

## 📚 Recommended (~75 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Mechanics+gMSA+group+managed+service+accounts" data-video-id="Q46SDMstaDo" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Group Managed Service Accounts (gMSA)</p>
      <p class="vg-creator">Microsoft Mechanics</p>
      <span class="vg-duration">⏱ 12 min · Replace standard SAs</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Read+Only+Domain+Controller+RODC+walkthrough+deployment" data-video-id="Bur7XxUYq4A" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Read-Only Domain Controller, Walkthrough</p>
      <p class="vg-creator">TechNet Channel</p>
      <span class="vg-duration">⏱ 18 min · Branch deployments</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=AD+Recycle+Bin+restore+deleted+objects+Windows+Server" data-video-id="lBB6JSvkVl8" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">AD Recycle Bin, Enable & Restore</p>
      <p class="vg-creator">CBT Nuggets</p>
      <span class="vg-duration">⏱ 15 min · Lifesaver tutorial</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Fine+Grained+Password+Policy+PSO+Windows+Server" data-video-id="MuVMqPn_MqY" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Fine-Grained Password Policies (PSOs)</p>
      <p class="vg-creator">Practical Windows Server</p>
      <span class="vg-duration">⏱ 14 min · Per-group rules</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Sean+Metcalf+Active+Directory+security+attack+paths" data-video-id="Lz6haohGAMc" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">AD Attack Paths & Tier Model</p>
      <p class="vg-creator">Sean Metcalf, adsecurity.org</p>
      <span class="vg-duration">⏱ 50 min · Defender perspective</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Windows+Server+forest+trust+netdom+transitivity+tutorial" data-video-id="F7DgXAXNnC8" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Forest Trusts, Direction & Transitivity</p>
      <p class="vg-creator">NetworkChuck Academy</p>
      <span class="vg-duration">⏱ 22 min · Merger scenarios</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=krbtgt+password+reset+procedure+golden+ticket+mitigation" data-video-id="DQV74D4tKCQ" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">krbtgt Reset & Golden Ticket Mitigation</p>
      <p class="vg-creator">13Cubed</p>
      <span class="vg-duration">⏱ 18 min · Sunburst lessons</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **John Savill's Technical Training** | The single best Windows Server channel; AD is his bread and butter |
| **Andy Malone MVP** | Clear, no-nonsense AD/Entra walkthroughs at AZ-800 depth |
| **Server Academy** | Hands-on lab format, ideal for kinesthetic learners |
| **Sean Metcalf (adsecurity.org)** | The authority on AD security; required if you ever touch Defender |
| **ITProTV / ACI Learning** | AZ-800/AZ-801 study path coverage |

---

## ✅ After watching

Answer these in your notebook:

1. Name all 5 FSMO roles and which scope each lives at.
2. What's the GPO precedence order, and what changes when Enforced is set?
3. How long is the default intra-site vs inter-site replication interval?
4. What's the one-way operation that enables the AD Recycle Bin?
5. Why must RODCs use the Allowed RODC Password Replication Group?
6. Why does Microsoft recommend gMSAs over standard user service accounts?

If you can answer all 6, you're ready for the [Quiz](./Quiz.md). Otherwise re-watch John Savill's overview and the FSMO roles video.
