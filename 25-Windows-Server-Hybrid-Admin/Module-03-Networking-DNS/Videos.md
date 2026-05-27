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

# 🎥 Module 3 Videos: Networking, DNS & DHCP

> **How to use:** Click any card to search YouTube for the latest top result. DNS alone is 8% of the AZ-800 — DNS questions are guaranteed.

## ⭐ Essential watching (~100 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Andy+Malone+Windows+Server+DNS+complete+tutorial" data-video-id="trxOiK3XzpA" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Windows DNS — From Zero to Hero</p>
      <p class="vg-creator">Andy Malone MVP</p>
      <span class="vg-duration">⏱ 35 min · Zones, records, replication</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=John+Savill+DNSSEC+Windows+Server+deep+dive" data-video-id="WvKKFwcIegM" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">DNSSEC Deep Dive — Sign Your Zones</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 25 min · KSK, ZSK, DS, NSEC3</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=DHCP+failover+load+balance+hot+standby+Windows+Server" data-video-id="IZOMMbOUpDs" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">DHCP Failover Configuration</p>
      <p class="vg-creator">Server Academy</p>
      <span class="vg-duration">⏱ 22 min · Load balance + Hot standby</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Windows+Firewall+with+Advanced+Security+rules+profiles+tutorial" data-video-id="Llpd6zOtva8" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">WFAS — Profiles, Rules, IPsec</p>
      <p class="vg-creator">Practical Windows Server</p>
      <span class="vg-duration">⏱ 18 min · Defense in depth</span>
    </div>
  </a>
</div>

## 📚 Recommended (~55 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=IPAM+IP+address+management+Windows+Server+walkthrough" data-video-id="lZn88pypxrA" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">IPAM Installation and Configuration</p>
      <p class="vg-creator">ITProTV / ACI Learning</p>
      <span class="vg-duration">⏱ 18 min · GPO provisioning</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=DNS+policies+split+horizon+geographic+Windows+Server+2016" data-video-id="raYUq21VX74" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">DNS Policies — Split-Horizon & Geo-LB</p>
      <p class="vg-creator">Travis Roberts</p>
      <span class="vg-duration">⏱ 14 min · Zone scopes</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=NLB+Network+Load+Balancing+Windows+Server+cluster" data-video-id="QyN7fcpmIpg" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">NLB Cluster — Web Farm Tutorial</p>
      <p class="vg-creator">NetworkChuck Academy</p>
      <span class="vg-duration">⏱ 16 min · Unicast vs Multicast</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=DNS+conditional+forwarder+vs+stub+zone+explained" data-video-id="01sNVv-tgSs" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Conditional Forwarder vs Stub Zone</p>
      <p class="vg-creator">CBT Nuggets</p>
      <span class="vg-duration">⏱ 12 min · When to pick which</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=DNS+scavenging+aging+Windows+Server+stale+records" data-video-id="khqFIFYutO0" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">DNS Scavenging Setup</p>
      <p class="vg-creator">Practical Windows Server</p>
      <span class="vg-duration">⏱ 10 min · 7/7/7 explained</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=IPsec+connection+security+rule+domain+isolation+Windows" data-video-id="dNcntWPvucU" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">IPsec Domain Isolation via GPO</p>
      <p class="vg-creator">Inside Cloud and Security</p>
      <span class="vg-duration">⏱ 22 min · Connection Security Rules</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **Andy Malone MVP** | The canonical Windows Server DNS / DHCP educator |
| **John Savill's Technical Training** | DNSSEC and advanced topics in depth |
| **Server Academy** | Hands-on lab format, ideal for kinesthetic |
| **ITProTV / ACI Learning** | AZ-800 study-track structured |
| **Practical Windows Server** | Bite-size DNS/DHCP tutorials |

---

## ✅ After watching

Answer these in your notebook:

1. AD-integrated zone vs file-based primary — what changes when you choose AD-integrated?
2. DNSSEC: what's a KSK vs ZSK vs DS record?
3. Conditional forwarder vs stub zone — which has dynamic NS updates?
4. DHCP failover Hot Standby vs Load Balance — when each?
5. WFAS — three profiles and default inbound action on the Domain profile?
6. NLB modes — Unicast vs Multicast vs IGMP, and which to pick for typical web farms?

If you can answer all 6, you're ready for the [Quiz](./Quiz.md).
