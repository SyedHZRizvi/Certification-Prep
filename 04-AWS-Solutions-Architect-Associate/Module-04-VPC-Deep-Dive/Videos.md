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

# 🎥 Module 4 Videos: VPC Deep Dive

> **How to use:** Networking is the densest SAA module. Watch in order. Draw the topology as you go — diagramming = memory.

## ⭐ Essential watching (~85 min)

<div class="vg-grid">
  <a class="vg-card" data-video-id="zWBmr7kfmi8" href="https://www.youtube.com/results?search_query=AWS+VPC+full+tutorial+Stephane+Maarek" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🌐</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">VPC From Scratch — Subnets, Routes, IGW, NAT</p>
      <p class="vg-creator">Stephane Maarek</p>
      <span class="vg-duration">⏱ 25 min · The foundation</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="tPqqC_L5dOM" href="https://www.youtube.com/results?search_query=AWS+VPC+endpoint+gateway+interface+PrivateLink" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🚦</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">VPC Endpoints & PrivateLink Explained</p>
      <p class="vg-creator">Be A Better Dev</p>
      <span class="vg-duration">⏱ 18 min · Gateway vs Interface</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="-bbAXe9NS4c" href="https://www.youtube.com/results?search_query=AWS+Transit+Gateway+demo" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🔄</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Transit Gateway: Hub-and-Spoke for Many VPCs</p>
      <p class="vg-creator">ExamPro</p>
      <span class="vg-duration">⏱ 22 min · TGW vs peering</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="r99PVi4Tujk" href="https://www.youtube.com/results?search_query=AWS+Security+Groups+vs+NACL+explained" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🛡️</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Security Groups vs NACLs (Stateful vs Stateless)</p>
      <p class="vg-creator">Tutorials Dojo</p>
      <span class="vg-duration">⏱ 14 min · The classic confusion</span>
    </div>
  </a>
</div>

## 📚 Recommended (~50 min)

<div class="vg-grid">
  <a class="vg-card" data-video-id="G6oiD5FnY44" href="https://www.youtube.com/results?search_query=AWS+Direct+Connect+vs+VPN+comparison" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🔌</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Direct Connect vs Site-to-Site VPN</p>
      <p class="vg-creator">Stephane Maarek</p>
      <span class="vg-duration">⏱ 18 min · When each fits</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="hFGXq66mcqM" href="https://www.youtube.com/results?search_query=NAT+Gateway+vs+NAT+Instance+AWS" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🚪</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">NAT Gateway vs NAT Instance</p>
      <p class="vg-creator">Be A Better Dev</p>
      <span class="vg-duration">⏱ 12 min · Cost & HA</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="5CHAEnJVOsw" href="https://www.youtube.com/results?search_query=AWS+VPC+peering+tutorial" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🔗</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">VPC Peering & The Non-Transitive Trap</p>
      <p class="vg-creator">ExamPro</p>
      <span class="vg-duration">⏱ 14 min · A↔B, B↔C ≠ A↔C</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" data-video-id="j4ab0R_XPTA" href="https://www.youtube.com/results?search_query=AWS+VPC+Flow+Logs+troubleshooting" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>📊</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">VPC Flow Logs for Troubleshooting</p>
      <p class="vg-creator">AWS Online Tech Talks</p>
      <span class="vg-duration">⏱ 25 min · Real diagnostics</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="kGHNOxr_o7M" href="https://www.youtube.com/results?search_query=AWS+Client+VPN+demo" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>👨‍💻</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">AWS Client VPN for Remote Workforce</p>
      <p class="vg-creator">freeCodeCamp</p>
      <span class="vg-duration">⏱ 22 min · Laptop-to-VPC</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="CHsgqbTHSCo" href="https://www.youtube.com/results?search_query=AWS+IPv6+VPC+egress+only+IGW" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>6️⃣</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">IPv6 in VPC + Egress-Only IGW</p>
      <p class="vg-creator">AWS</p>
      <span class="vg-duration">⏱ 18 min · Modern addressing</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels

| Channel | Why |
|---------|-----|
| **Stephane Maarek** | Best VPC step-by-steps |
| **Be A Better Dev** | Endpoint and NAT clarity |
| **ExamPro** | Long-form free SAA |
| **AWS Online Tech Talks** | Real architectural decisions |

---

## ✅ After watching

1. What makes a subnet "public" vs "private"?
2. Difference between Gateway endpoint and Interface endpoint?
3. Is VPC peering transitive? What's the alternative for 10 VPCs?
4. Direct Connect vs VPN — when each?
5. Why use NAT GW one per AZ?

Ready? Take the [Quiz](./Quiz.md).
