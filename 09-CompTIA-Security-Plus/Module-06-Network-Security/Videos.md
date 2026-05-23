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

# 🎥 Module 6 Videos: Network Security

## ⭐ Essential watching (~55 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Professor+Messer+SY0-701+firewall+types" data-video-id="VgNyh4HEqSU" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Firewall Types (NGFW / WAF / UTM)</p>
      <p class="vg-creator">Professor Messer</p>
      <span class="vg-duration">⏱ 10 min</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Professor+Messer+SY0-701+IDS+IPS" data-video-id="7QuYupuic3Q" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">IDS vs IPS Explained</p>
      <p class="vg-creator">Professor Messer</p>
      <span class="vg-duration">⏱ 8 min</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Professor+Messer+SY0-701+VPN+IPSec" data-video-id="uU3e_ntg-3g" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">VPN &amp; IPSec (Tunnel/Transport, IKE)</p>
      <p class="vg-creator">Professor Messer</p>
      <span class="vg-duration">⏱ 12 min</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Professor+Messer+SY0-701+secure+protocols+ports" data-video-id="9NAKCyOtFH0" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Secure Protocols &amp; Ports</p>
      <p class="vg-creator">Professor Messer</p>
      <span class="vg-duration">⏱ 12 min</span>
    </div>
  </a>
</div>

## 📚 Recommended (~35 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=NetworkChuck+VPN+IPSec+tunnel+vs+transport" data-video-id="mJxSKIRDpPQ" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">IPSec Tunnel vs Transport Mode</p>
      <p class="vg-creator">NetworkChuck</p>
      <span class="vg-duration">⏱ 12 min</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=DMARC+SPF+DKIM+email+security+explained" data-video-id="qA-MVF2ve10" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">SPF + DKIM + DMARC Explained</p>
      <p class="vg-creator">Various</p>
      <span class="vg-duration">⏱ 11 min</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=David+Bombal+802.1X+RADIUS+wifi" data-video-id="tewrii8bsic" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">802.1X Wireless Authentication</p>
      <p class="vg-creator">David Bombal</p>
      <span class="vg-duration">⏱ 14 min</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=microsegmentation+zero+trust+network" data-video-id="BHC7z6YQH94" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Microsegmentation in Zero Trust</p>
      <p class="vg-creator">VMware / Cisco</p>
      <span class="vg-duration">⏱ 18 min</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=John+Hammond+pcap+analysis+wireshark" data-video-id="A4_DOr7Eiqo" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Wireshark / PCAP Analysis</p>
      <p class="vg-creator">John Hammond</p>
      <span class="vg-duration">⏱ 25 min</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=WireGuard+VPN+how+it+works" data-video-id="KzcCrW0J61A" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">WireGuard VPN Explained</p>
      <p class="vg-creator">Various</p>
      <span class="vg-duration">⏱ 14 min</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **Professor Messer** | Network appliance + protocol overviews tailored to Sec+ |
| **NetworkChuck** | VPN/HTTPS/firewall energy |
| **David Bombal** | Deep networking content + interviews |
| **PracticalNetworking.net** | Excellent IPSec / TCP-IP deep dives |
| **John Hammond** | Wireshark hands-on |

---

## ✅ After watching

1. SFTP vs FTPS — protocol + ports.
2. Place a web server, DB, jump server, WAF in a typical network diagram.
3. Signature-based vs anomaly-based detection — pro/con of each.
4. IPSec Tunnel vs Transport mode — which for site-to-site?
5. What does DMARC add beyond SPF and DKIM?
