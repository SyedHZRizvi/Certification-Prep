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

# 🎥 Module 5 Videos: Network Services & Cloud Connectivity

> **How to use:** DNS and DHCP are fundamentals, watch both Professor Messer videos for those topics. The cloud videos are newer to the N10-009 blueprint.

## ⭐ Essential watching (~65 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Professor+Messer+N10-009+DNS+records" data-video-id="qAyVND44jaE" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">DNS Records Deep Dive</p>
      <p class="vg-creator">Professor Messer</p>
      <span class="vg-duration">⏱ 11 min · A, MX, TXT, etc.</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Professor+Messer+N10-009+DHCP+DORA" data-video-id="b7fiXM3vO18" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">DHCP DORA Walkthrough</p>
      <p class="vg-creator">Professor Messer</p>
      <span class="vg-duration">⏱ 9 min · Scope, reservation, relay</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Professor+Messer+N10-009+NTP+stratum" data-video-id="iBHRIu9MQr4" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">NTP &amp; Stratum Levels</p>
      <p class="vg-creator">Professor Messer</p>
      <span class="vg-duration">⏱ 6 min · Why time matters</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Professor+Messer+N10-009+ports+protocols" data-video-id="jX1pobYmZdE" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Common Ports &amp; Protocols</p>
      <p class="vg-creator">Professor Messer</p>
      <span class="vg-duration">⏱ 14 min · Memorization table</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Professor+Messer+N10-009+cloud+connectivity+SD-WAN" data-video-id="HzF7sg6Nx0c" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Cloud Connectivity &amp; SD-WAN</p>
      <p class="vg-creator">Professor Messer</p>
      <span class="vg-duration">⏱ 10 min · Direct Connect, ExpressRoute</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Professor+Messer+N10-009+SDN+SDN+controller" data-video-id="A6tPNGEfOzc" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">SDN Fundamentals</p>
      <p class="vg-creator">Professor Messer</p>
      <span class="vg-duration">⏱ 7 min · Control plane / data plane</span>
    </div>
  </a>
</div>

## 📚 Recommended (~30 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Network+Chuck+DNS+explained+nslookup+dig" data-video-id="OwieIla5NLE" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">DNS Demystified, with dig</p>
      <p class="vg-creator">NetworkChuck</p>
      <span class="vg-duration">⏱ 14 min · Hands-on lookups</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=SPF+DKIM+DMARC+email+authentication+explained" data-video-id="e3s9ExfEtPs" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">SPF, DKIM, DMARC Explained</p>
      <p class="vg-creator">Mailgun / Postmark</p>
      <span class="vg-duration">⏱ 10 min · Anti-spoofing trifecta</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=AWS+Direct+Connect+vs+VPN+comparison" data-video-id="eNxPhHTN8gY" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">AWS Direct Connect vs VPN</p>
      <p class="vg-creator">Stephane Maarek / Tech with Lucy</p>
      <span class="vg-duration">⏱ 8 min · When to use which</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Dyn+attack+2016+DNS+post+mortem+talk" data-video-id="2oDZ_nCdY2M" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">2016 Dyn Outage Post-Mortem</p>
      <p class="vg-creator">Black Hat / DEF CON</p>
      <span class="vg-duration">⏱ 30 min · DNS resilience lessons</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Gartner+SASE+explained+secure+access+service+edge" data-video-id="WAswx0uODDY" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">What Is SASE?</p>
      <p class="vg-creator">Gartner / Cloudflare</p>
      <span class="vg-duration">⏱ 12 min · The convergence vision</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=OpenFlow+SDN+demo+lab+walkthrough" data-video-id="f2qenNic7R4" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">OpenFlow SDN Lab</p>
      <p class="vg-creator">OpenDaylight / ONOS</p>
      <span class="vg-duration">⏱ 22 min · Hands-on SDN</span>
    </div>
  </a>
</div>

---

## ✅ After watching

Answer in your notebook (without re-watching):

1. Walk through resolving `www.example.com` step by step.
2. Walk through DHCP DORA, naming each message direction.
3. Why is NTP critical for Kerberos / TLS / token validation?
4. Compare a Site-to-Site VPN, AWS Direct Connect, and SD-WAN, when does each fit best?
5. What's the practical difference between SD-WAN and SASE?

If you can answer all 5, you're ready for the [Quiz](./Quiz.md).
