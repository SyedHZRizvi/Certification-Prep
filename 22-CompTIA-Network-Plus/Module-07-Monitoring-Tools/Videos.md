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

# 🎥 Module 7 Videos: Monitoring, Performance & Tools

> **How to use:** This module is *tool-heavy*. Watch the CLI utilities video first, then Wireshark — both are hands-on skills.

## ⭐ Essential watching (~60 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Professor+Messer+N10-009+network+tools+ping+tracert" data-video-id="iYojIK1173k" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Network CLI Tools — ping, tracert, etc.</p>
      <p class="vg-creator">Professor Messer</p>
      <span class="vg-duration">⏱ 11 min · Every command</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Professor+Messer+N10-009+SNMP+syslog" data-video-id="We5MkaEJOs0" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">SNMP &amp; Syslog</p>
      <p class="vg-creator">Professor Messer</p>
      <span class="vg-duration">⏱ 10 min · v3 + severity 0-7</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Professor+Messer+N10-009+NetFlow+performance+metrics" data-video-id="ieqSi5Aicxc" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">NetFlow &amp; Performance Metrics</p>
      <p class="vg-creator">Professor Messer</p>
      <span class="vg-duration">⏱ 9 min · Latency, jitter, throughput</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Chris+Greer+Wireshark+basics+tutorial" data-video-id="OU-A2EmVrKQ" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Wireshark for Beginners</p>
      <p class="vg-creator">Chris Greer</p>
      <span class="vg-duration">⏱ 15 min · Filters + analysis</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Professor+Messer+N10-009+baselines+SLA" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Baselines &amp; SLAs</p>
      <p class="vg-creator">Professor Messer</p>
      <span class="vg-duration">⏱ 7 min · MTBF, MTTR, RTO, RPO</span>
    </div>
  </a>
</div>

## 📚 Recommended (~30 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Network+Chuck+dig+nslookup+DNS+lookups" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">dig &amp; nslookup Hands-On</p>
      <p class="vg-creator">NetworkChuck</p>
      <span class="vg-duration">⏱ 10 min · DNS deep query</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Chris+Greer+Wireshark+TCP+retransmissions+troubleshooting" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">TCP Retransmissions in Wireshark</p>
      <p class="vg-creator">Chris Greer</p>
      <span class="vg-duration">⏱ 14 min · Diagnose packet loss</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=LibreNMS+demo+install+SNMP+monitoring" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">LibreNMS Free SNMP Monitoring</p>
      <p class="vg-creator">Lawrence Systems</p>
      <span class="vg-duration">⏱ 18 min · Real SNMP install</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Cloudflare+1.1.1.1+outage+post+mortem+talk" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Cloudflare 1.1.1.1 Post-Mortem</p>
      <p class="vg-creator">Cloudflare engineering talk</p>
      <span class="vg-duration">⏱ 22 min · Telemetry done right</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=iperf3+bandwidth+test+tutorial+demo" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">iperf3 Bandwidth Testing</p>
      <p class="vg-creator">Lawrence Systems</p>
      <span class="vg-duration">⏱ 12 min · LAN throughput check</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=nmap+full+tutorial+port+scanning" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">nmap Full Tutorial</p>
      <p class="vg-creator">HackerSploit</p>
      <span class="vg-duration">⏱ 25 min · Discovery + scanning</span>
    </div>
  </a>
</div>

---

## ✅ After watching

Answer in your notebook (without re-watching):

1. List 6 commands you'd run from a Windows PC to diagnose a "slow Internet" ticket.
2. What ports do SNMP and syslog use? Which version of SNMP would you deploy in production?
3. List the 8 syslog severity levels in order.
4. Show one Wireshark display filter to find TCP retransmissions.
5. Compare NetFlow and Wireshark — when do you use each?

If you can answer all 5, you're ready for the [Quiz](./Quiz.md).
