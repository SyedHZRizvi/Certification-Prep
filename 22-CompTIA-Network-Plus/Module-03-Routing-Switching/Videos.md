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
</style>

# 🎥 Module 3 Videos: Routing & Switching

> **How to use:** This module covers two huge subjects — routing protocols and switching. Watch the routing essentials first, then the switching essentials. Don't skip STP — it's one of the most-tested topics on Network+.

## ⭐ Essential watching (~80 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Professor+Messer+N10-009+static+vs+dynamic+routing" data-video-id="23a6_qexTvs" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Static vs Dynamic Routing</p>
      <p class="vg-creator">Professor Messer</p>
      <span class="vg-duration">⏱ 8 min · AD &amp; metrics</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Professor+Messer+N10-009+OSPF+EIGRP+BGP" data-video-id="hU9bbmFhKxk" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Routing Protocols (OSPF, EIGRP, BGP)</p>
      <p class="vg-creator">Professor Messer</p>
      <span class="vg-duration">⏱ 11 min · Compare the big four</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Professor+Messer+N10-009+VLAN+802.1Q" data-video-id="ATbzbST_OIw" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">VLANs &amp; 802.1Q Tagging</p>
      <p class="vg-creator">Professor Messer</p>
      <span class="vg-duration">⏱ 10 min · Access vs trunk</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Professor+Messer+N10-009+spanning+tree+protocol" data-video-id="Jm0BOz1Ur28" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Spanning Tree (STP &amp; RSTP)</p>
      <p class="vg-creator">Professor Messer</p>
      <span class="vg-duration">⏱ 12 min · Root election, port roles</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Professor+Messer+N10-009+link+aggregation+LACP" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Link Aggregation / LACP</p>
      <p class="vg-creator">Professor Messer</p>
      <span class="vg-duration">⏱ 7 min · Bonding multiple links</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Professor+Messer+N10-009+switch+port+security" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Switch Port Security</p>
      <p class="vg-creator">Professor Messer</p>
      <span class="vg-duration">⏱ 9 min · Sticky MAC, DAI</span>
    </div>
  </a>
</div>

## 📚 Recommended (~30 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Practical+Networking+OSPF+deep+dive" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">OSPF Areas Explained</p>
      <p class="vg-creator">Practical Networking</p>
      <span class="vg-duration">⏱ 12 min · ABRs, ASBRs, area 0</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Network+Chuck+BGP+explained" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">BGP — The Glue of the Internet</p>
      <p class="vg-creator">NetworkChuck</p>
      <span class="vg-duration">⏱ 14 min · Inter-AS routing</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Dion+Training+inter+VLAN+routing+SVI" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Inter-VLAN Routing with SVIs</p>
      <p class="vg-creator">Dion Training</p>
      <span class="vg-duration">⏱ 8 min · L3 switch magic</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Pakistan+YouTube+BGP+hijack+2008+post+mortem" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">2008 Pakistan/YouTube BGP Hijack</p>
      <p class="vg-creator">RIPE NCC</p>
      <span class="vg-duration">⏱ 22 min · Case study</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=David+Bombal+STP+lab+packet+tracer" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">STP Lab in Packet Tracer</p>
      <p class="vg-creator">David Bombal</p>
      <span class="vg-duration">⏱ 25 min · Watch loops form &amp; break</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=VLAN+hopping+attack+demonstration+lab" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">VLAN Hopping Demo</p>
      <p class="vg-creator">Hackersploit / IppSec</p>
      <span class="vg-duration">⏱ 15 min · Why change native VLAN</span>
    </div>
  </a>
</div>

---

## ✅ After watching

Answer in your notebook (without re-watching):

1. State the AD of static, OSPF, RIP, EIGRP internal, eBGP, iBGP.
2. Explain in one paragraph how STP elects the root bridge.
3. Why is PortFast safe on access ports but dangerous on trunks?
4. Describe an LACP bundle's behavior when one of its links fails.
5. What is the difference between an SVI and a router-on-a-stick sub-interface?

If you can answer all 5, you're ready for the [Quiz](./Quiz.md). If not, re-watch the Messer Routing-Protocols and STP videos.
