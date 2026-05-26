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

# 🎥 Module 7 Videos: Networking for Servers

> **How to use:** Pause when MTU, LACP, or trunk port configuration is shown — sketch the topology. Server networking clicks when you draw it.

## ⭐ Essential watching (~55 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=NIC+teaming+LACP+explained+server" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">NIC Teaming + LACP Walkthrough</p>
      <p class="vg-creator">Lawrence Systems</p>
      <span class="vg-duration">⏱ 14 min · Modes + switch config</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=VLAN+802.1Q+trunk+access+port+explained" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">VLAN Tagging on Servers</p>
      <p class="vg-creator">Professor Messer</p>
      <span class="vg-duration">⏱ 11 min · Trunks + access</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=jumbo+frames+MTU+9000+storage+network" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Jumbo Frames Done Right</p>
      <p class="vg-creator">NetworkChuck</p>
      <span class="vg-duration">⏱ 12 min · End-to-end matters</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=layer+4+vs+layer+7+load+balancer+difference" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">L4 vs L7 Load Balancers</p>
      <p class="vg-creator">NGINX / community</p>
      <span class="vg-duration">⏱ 14 min · Pick the right LB</span>
    </div>
  </a>
</div>

## 📚 Recommended (~35 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=IPv6+dual+stack+server+walkthrough" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">IPv6 Dual-Stack on Servers</p>
      <p class="vg-creator">community</p>
      <span class="vg-duration">⏱ 14 min · A + AAAA + firewalls</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=HAProxy+vs+nginx+load+balancing" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">HAProxy + NGINX Hands-On</p>
      <p class="vg-creator">Lawrence Systems</p>
      <span class="vg-duration">⏱ 13 min · Real LB config</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=spanning+tree+portfast+server+facing+port" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">PortFast / Edge Port Settings</p>
      <p class="vg-creator">community</p>
      <span class="vg-duration">⏱ 10 min · 30-second STP delay fix</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=GSLB+global+server+load+balancing+explained" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">GSLB — Geo-Aware Load Balancing</p>
      <p class="vg-creator">F5 / community</p>
      <span class="vg-duration">⏱ 18 min · DNS-level routing</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=QoS+DSCP+server+network+explained" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">QoS / DSCP on Converged Networks</p>
      <p class="vg-creator">Cisco community</p>
      <span class="vg-duration">⏱ 16 min · When storage shares the fabric</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=microsegmentation+NSX+ACI+overview" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Microsegmentation — Beyond VLANs</p>
      <p class="vg-creator">VMware / Cisco community</p>
      <span class="vg-duration">⏱ 20 min · Per-VM L4 policy</span>
    </div>
  </a>
</div>

---

## ✅ After watching

Answer these in your notebook:

1. NIC teaming with LACP requires what on the switch side?
2. Trunk port vs access port — one-line distinction?
3. Jumbo frames MTU value + a 1-sentence rule for deployment?
4. L4 vs L7 load balancer — give one scenario where each is right.
5. Why must IPv6 firewall rules be written separately from IPv4 rules?
6. What does PortFast do?

If you can answer all 6, you're ready for the [Quiz](./Quiz.md).
