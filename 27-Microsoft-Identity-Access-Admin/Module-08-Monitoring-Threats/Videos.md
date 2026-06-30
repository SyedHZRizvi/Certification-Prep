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

# 🎥 Module 8 Videos: Monitoring, Reporting & Threat Response

> **How to use:** Click any card to open a YouTube search, pick the top current result. Follow along by wiring your dev tenant's logs to a free Log Analytics workspace and running the 10 must-know KQL queries.

## ⭐ Essential watching (~80 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Entra+sign-in+logs+audit+logs+KQL+tutorial" data-video-id="j5Jzhi7s7gY" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Entra Sign-in & Audit Logs, KQL Walkthrough</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 25 min · Schema + key queries</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Sentinel+Entra+ID+data+connector+analytics+rule" data-video-id="qLJoIA8WnYc" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Microsoft Sentinel + Entra ID, Connector to Detection</p>
      <p class="vg-creator">Andy Malone MVP</p>
      <span class="vg-duration">⏱ 20 min · LA → connector → rule → incident</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Defender+for+Identity+overview+architecture" data-video-id="QyUEgiCwEjs" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Microsoft Defender for Identity, Architecture & Detections</p>
      <p class="vg-creator">Microsoft Mechanics</p>
      <span class="vg-duration">⏱ 17 min · DC sensors + lateral movement</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Entra+Identity+Secure+Score+improvement+actions" data-video-id="0nudNEaZc24" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Identity Secure Score, Building a Hygiene Backlog</p>
      <p class="vg-creator">Dean Cefola, Azure Academy</p>
      <span class="vg-duration">⏱ 15 min · Prescriptive prioritization</span>
    </div>
  </a>
</div>

## 📚 Recommended (~45 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=KQL+Kusto+Query+Language+beginners+tutorial" data-video-id="ImqRQJfnSHM" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">KQL for Beginners, Syntax in 30 Minutes</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 30 min · From zero to writing queries</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Entra+token+theft+detection+CAE" data-video-id="fhkCV9i698U" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Token Theft Detection + CAE Defense</p>
      <p class="vg-creator">Concepts Work</p>
      <span class="vg-duration">⏱ 16 min · Post-MFA attack class</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Sentinel+SOAR+playbook+logic+app+identity" data-video-id="fdqMRcCpDFk" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Sentinel SOAR Playbook for Identity Incidents</p>
      <p class="vg-creator">Microsoft Mechanics</p>
      <span class="vg-duration">⏱ 15 min · Auto-revoke session, disable user</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Entra+workbook+sentinel+identity+dashboard" data-video-id="0ZWufPqCSok" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Microsoft Entra Workbook Tour</p>
      <p class="vg-creator">Andy Malone MVP</p>
      <span class="vg-duration">⏱ 12 min · Pre-built identity dashboard</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Defender+XDR+unified+portal+overview" data-video-id="TeTPZeG0bss" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Defender XDR Unified Portal Tour</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 18 min · Identity + Endpoint + Email + Cloud Apps</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Entra+identity+protection+UEBA+anomaly" data-video-id="WPjQwZWbq-0" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">UEBA for Identity Anomalies</p>
      <p class="vg-creator">Dean Cefola, Azure Academy</p>
      <span class="vg-duration">⏱ 13 min · User & entity behavior analytics</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels

| Channel | Why |
|---------|-----|
| **John Savill** | Definitive KQL + Sentinel + Defender content. |
| **Andy Malone MVP** | M365 admin perspective on identity monitoring. |
| **Microsoft Mechanics** | Official launches; Defender XDR + Sentinel. |
| **Dean Cefola, Azure Academy** | Lab walkthroughs. |
| **Concepts Work** | Newer SC-300 channel. |

---

## ✅ After watching

Answer these in your notebook (without re-watching):

1. Write the KQL for "all break-glass account sign-ins."
2. Where do PIM activation events show up, and what's the filter?
3. Walk through ID Protection → Defender for Identity → Sentinel, what each does.
4. What's the right defense for token theft, and why isn't more MFA the answer?
5. Sketch the 5 Tier-1 analytics rules you'd build first.

If you can answer all 5, you're ready for the [Quiz](./Quiz.md) and then the [Practice Exams](../Practice-Exams/).
