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

# 🎥 Module 8 Videos: Network Security

> **How to use:** NSG rule precedence + LB vs AGW vs Front Door = the two highest-yield topics here.

## ⭐ Essential watching (~90 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=John+Savill+Azure+NSG+rule+priority+effective+rules" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">NSG Rules &amp; Effective Security Rules</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 24 min · Priority + subnet vs NIC</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=John+Savill+Azure+Firewall+SKU+premium+IDPS+TLS+inspection" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Azure Firewall SKUs — Standard vs Premium</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 22 min · DNAT/Network/App rules</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Adam+Marczak+Azure+Load+Balancer+Application+Gateway+Front+Door" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Load Balancer vs Application Gateway vs Front Door</p>
      <p class="vg-creator">Adam Marczak — Azure for Everyone</p>
      <span class="vg-duration">⏱ 22 min · Which to pick when</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+Front+Door+WAF+private+link+origin" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Front Door Premium + WAF + Private Link Origins</p>
      <p class="vg-creator">Inside Cloud and Security</p>
      <span class="vg-duration">⏱ 22 min · Modern secure pattern</span>
    </div>
  </a>
</div>

## 📚 Recommended (~35 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+Application+Security+Groups+ASG+segmentation" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">ASGs — IP-Free Segmentation</p>
      <p class="vg-creator">Tim Warner</p>
      <span class="vg-duration">⏱ 10 min · NSG with ASG sources</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+DDoS+Protection+Network+IP+plans" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">DDoS Protection — Network vs IP Plans</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 14 min · Basic vs Standard vs IP</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+Traffic+Manager+vs+Front+Door+vs+cross+region+load+balancer" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Global Routing: Traffic Manager vs Front Door vs xRegion LB</p>
      <p class="vg-creator">Microsoft Mechanics</p>
      <span class="vg-duration">⏱ 14 min · L4 vs L7 vs DNS</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+WAF+OWASP+CRS+rule+sets+tuning" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Azure WAF — Tuning OWASP Core Rule Sets</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 18 min · Detection → Prevention</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+Bastion+jump+host+RDP+SSH" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Azure Bastion as a Security Tool</p>
      <p class="vg-creator">Travis Roberts</p>
      <span class="vg-duration">⏱ 11 min · Eliminate public RDP/SSH</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **John Savill's Technical Training** | NSG + Firewall + WAF gold standard. |
| **Adam Marczak — Azure for Everyone** | Service-comparison videos. |
| **Inside Cloud and Security** | Front Door + private link patterns. |
| **Tim Warner** | Quick ASG + Bastion intros. |
| **Microsoft Mechanics** | DDoS + product launches. |

---

## ✅ After watching

1. NSG default rules — what's the bottom-priority rule in both directions?
2. NSG priority order — lower or higher number first?
3. Subnet NSG + NIC NSG together — how is the effective rule computed?
4. Azure Firewall rule order — DNAT, Network, Application?
5. LB vs AGW vs Front Door — quick pick for global WAF?

Quiz → [Quiz](./Quiz.md)
