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

# 🎥 Module 7 Videos: Virtual Networks

> **How to use:** This is THE most failed exam domain. John Savill's hub-spoke and private endpoint videos are mandatory.

## ⭐ Essential watching (~100 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=John+Savill+Azure+VNet+fundamentals+subnets" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Azure VNet Fundamentals — Subnets, CIDRs, Reserved IPs</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 28 min · Start here</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=John+Savill+hub+spoke+topology+Azure+VNet+peering" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Hub-Spoke Topology &amp; VNet Peering</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 25 min · Non-transitivity, UDRs</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=John+Savill+private+endpoint+vs+service+endpoint" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Private Endpoints vs Service Endpoints</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 24 min · DNS gotcha included</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Adam+Marczak+Azure+VPN+gateway+ExpressRoute" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">VPN Gateway &amp; ExpressRoute — Hybrid Connectivity</p>
      <p class="vg-creator">Adam Marczak — Azure for Everyone</p>
      <span class="vg-duration">⏱ 22 min · P2S, S2S, ER</span>
    </div>
  </a>
</div>

## 📚 Recommended (~45 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+ExpressRoute+SKU+local+standard+premium+global+reach" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">ExpressRoute SKUs — Local vs Standard vs Premium</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 18 min · Global Reach + Direct</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+private+DNS+zone+resolver+hybrid" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Azure Private DNS &amp; Private Resolver</p>
      <p class="vg-creator">Tim Warner</p>
      <span class="vg-duration">⏱ 14 min · Hybrid DNS done right</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+UDR+route+table+forced+tunneling" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">User-Defined Routes &amp; Forced Tunneling</p>
      <p class="vg-creator">Inside Cloud and Security</p>
      <span class="vg-duration">⏱ 13 min · Force traffic through firewall</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+Virtual+WAN+overview" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Azure Virtual WAN — When to Use Instead of Hub-Spoke</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 20 min · Global SD-WAN as a service</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+Network+Watcher+troubleshoot+connectivity" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Azure Network Watcher — Troubleshooting</p>
      <p class="vg-creator">Travis Roberts</p>
      <span class="vg-duration">⏱ 14 min · Connection Monitor, IP flow verify</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **John Savill's Technical Training** | THE Azure networking channel. |
| **Adam Marczak — Azure for Everyone** | Clean hybrid connectivity intros. |
| **Tim Warner** | Exam-paced DNS / private endpoint content. |
| **Inside Cloud and Security** | UDR and forced tunneling deep dives. |
| **Microsoft Mechanics** | New networking SKUs. |

---

## ✅ After watching

1. How many IPs does Azure reserve per subnet?
2. Are VNet peerings transitive?
3. Service endpoint vs private endpoint — what's the IP difference?
4. Why does a private endpoint NEED a Private DNS Zone?
5. Route-based vs policy-based VPN — pick which?

[Quiz](./Quiz.md) time.
