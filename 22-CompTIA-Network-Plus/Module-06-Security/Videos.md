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

# 🎥 Module 6 Videos: Network Security Fundamentals

> **How to use:** This is the warm-up for Security+. Watch the firewall and IDS/IPS videos first. The Zero Trust video is increasingly important on the N10-009.

## ⭐ Essential watching (~60 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Professor+Messer+N10-009+firewall+stateful+stateless" data-video-id="roygo23ojEM" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Firewalls, Stateful vs NGFW</p>
      <p class="vg-creator">Professor Messer</p>
      <span class="vg-duration">⏱ 10 min · Generations explained</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Professor+Messer+N10-009+IDS+IPS+signature+anomaly" data-video-id="mmt4B60xSj0" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">IDS vs IPS Compared</p>
      <p class="vg-creator">Professor Messer</p>
      <span class="vg-duration">⏱ 9 min · Detect vs prevent</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Professor+Messer+N10-009+VPN+IPsec+SSL" data-video-id="tm7i0zEitPQ" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">VPNs, IPsec &amp; SSL/TLS</p>
      <p class="vg-creator">Professor Messer</p>
      <span class="vg-duration">⏱ 12 min · AH/ESP, tunnel mode</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Professor+Messer+N10-009+802.1X+RADIUS" data-video-id="enyRd-8m8SI" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">802.1X &amp; RADIUS</p>
      <p class="vg-creator">Professor Messer</p>
      <span class="vg-duration">⏱ 9 min · Port-based auth</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Professor+Messer+N10-009+Zero+Trust+architecture" data-video-id="jlMwWL4yalM" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Zero Trust Architecture</p>
      <p class="vg-creator">Professor Messer</p>
      <span class="vg-duration">⏱ 11 min · NIST 800-207</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Professor+Messer+N10-009+NAC+network+access+control" data-video-id="TZUh1qF6ypI" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">NAC Posture Checking</p>
      <p class="vg-creator">Professor Messer</p>
      <span class="vg-duration">⏱ 7 min · Quarantine VLAN</span>
    </div>
  </a>
</div>

## 📚 Recommended (~30 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Network+Chuck+Zero+Trust+vs+VPN+ZTNA" data-video-id="DLQAbJm4gFM" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">ZTNA vs VPN</p>
      <p class="vg-creator">NetworkChuck</p>
      <span class="vg-duration">⏱ 12 min · The architectural shift</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Wireguard+vs+IPsec+vs+OpenVPN+comparison" data-video-id="Q4zlrc0F4NU" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">WireGuard vs IPsec vs OpenVPN</p>
      <p class="vg-creator">Crosstalk Solutions</p>
      <span class="vg-duration">⏱ 14 min · Pick the right VPN</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Dion+Training+firewall+ACL+rules+order" data-video-id="vMshgkItW5g" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">ACL Rules &amp; Order</p>
      <p class="vg-creator">Dion Training</p>
      <span class="vg-duration">⏱ 8 min · Top-down, first match</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Target+2013+breach+post+mortem+HVAC+vendor" data-video-id="_5TetBQrAlY" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">2013 Target Breach Post-Mortem</p>
      <p class="vg-creator">SANS / Brian Krebs</p>
      <span class="vg-duration">⏱ 25 min · HVAC vendor pivot</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=NIST+800-207+Zero+Trust+architecture+walkthrough" data-video-id="rwPaBiQJqxY" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">NIST 800-207 Walkthrough</p>
      <p class="vg-creator">NIST / SANS</p>
      <span class="vg-duration">⏱ 22 min · Authoritative source</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Snort+Suricata+IDS+IPS+demo+lab" data-video-id="SapAcfHbQSE" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Snort / Suricata IDS Lab</p>
      <p class="vg-creator">HackerSploit</p>
      <span class="vg-duration">⏱ 20 min · Hands-on IDS demo</span>
    </div>
  </a>
</div>

---

## ✅ After watching

Answer in your notebook (without re-watching):

1. Compare stateful vs NGFW in one sentence each.
2. Explain when you'd choose IDS over IPS, give one scenario.
3. Walk through an 802.1X authentication, naming all three roles.
4. What does ZTNA grant the user that VPN doesn't (and vice versa)?
5. Why is microsegmentation more effective than a single perimeter firewall?

If you can answer all 5, you're ready for the [Quiz](./Quiz.md).
