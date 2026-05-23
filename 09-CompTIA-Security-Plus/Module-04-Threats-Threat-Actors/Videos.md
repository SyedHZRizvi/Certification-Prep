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

# 🎥 Module 4 Videos: Threats & Threat Actors

> **How to use:** This material is more conceptual than technical — choose the videos with real-world case studies (APT breakdowns, SolarWinds, Conti ransomware) to make the actor matrix stick.

## ⭐ Essential watching (~45 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Professor+Messer+SY0-701+threat+actors" data-video-id="6xUH0t6ugIM" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Threat Actors Overview</p>
      <p class="vg-creator">Professor Messer</p>
      <span class="vg-duration">⏱ 8 min · The 6 actor categories</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Professor+Messer+SY0-701+threat+vectors" data-video-id="4lAbGpTDZ18" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Threat Vectors &amp; Attack Surfaces</p>
      <p class="vg-creator">Professor Messer</p>
      <span class="vg-duration">⏱ 10 min · Every entry path</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Professor+Messer+SY0-701+threat+intelligence" data-video-id="86fruE9jkKk" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Threat Intelligence Sources</p>
      <p class="vg-creator">Professor Messer</p>
      <span class="vg-duration">⏱ 9 min · OSINT, ISAC, dark web</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=MITRE+ATT%26CK+framework+explained" data-video-id="Wxww4d9zFrw" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">MITRE ATT&amp;CK Framework Explained</p>
      <p class="vg-creator">MITRE / community</p>
      <span class="vg-duration">⏱ 15 min · Tactics &amp; techniques</span>
    </div>
  </a>
</div>

## 📚 Recommended (~30 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=SolarWinds+supply+chain+attack+explained" data-video-id="Q_iAW9RNafA" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">SolarWinds Supply Chain Attack</p>
      <p class="vg-creator">Various security creators</p>
      <span class="vg-duration">⏱ 12 min · Nation-state APT case study</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Conti+ransomware+gang+explained" data-video-id="5ITP56cyQ20" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Inside a Ransomware Gang (Conti leaks)</p>
      <p class="vg-creator">Krebs / community</p>
      <span class="vg-duration">⏱ 14 min · Organized crime case study</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=insider+threat+real+case+study" data-video-id="nbnSSiVUSSw" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Insider Threat Real Cases</p>
      <p class="vg-creator">SANS / community</p>
      <span class="vg-duration">⏱ 10 min · Snowden, Tesla, etc.</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=John+Hammond+ransomware+as+a+service" data-video-id="9zEXov_L0os" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Ransomware-as-a-Service Walk-through</p>
      <p class="vg-creator">John Hammond</p>
      <span class="vg-duration">⏱ 20 min · Affiliate model</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=APT+nation+state+attack+timeline" data-video-id="88o-uifbJSE" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">APT Attack Timeline (Mandiant style)</p>
      <p class="vg-creator">Mandiant / SANS</p>
      <span class="vg-duration">⏱ 25 min · How a real APT operates</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=MyDFIR+threat+hunting+IOCs" data-video-id="wbV1u22ihBo" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Threat Hunting With IOCs</p>
      <p class="vg-creator">MyDFIR</p>
      <span class="vg-duration">⏱ 18 min · Hands-on</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **Professor Messer** | Sec+ exam alignment |
| **John Hammond** | Hands-on offensive demos & RaaS analysis |
| **MyDFIR** | DFIR + threat intel content |
| **The Cyber Mentor (TCM)** | Pentesting + threat actor analysis |
| **SANS** | Deep case studies and frameworks |
| **Mandiant** | APT-grade research reports |

---

## ✅ After watching

1. Name 6 threat actor categories and a defining example of each.
2. Match motivation → likely actor: revenge / espionage / financial / philosophical.
3. List 6 threat vectors.
4. What's the difference between IOC and IOA?
5. Why is a supply-chain attack particularly hard to defend against?

Ready? Take the [Quiz](./Quiz.md).
