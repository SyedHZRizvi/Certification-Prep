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

# 🎥 Module 7 Videos: Hybrid Identity (Entra Connect / Cloud Sync)

> **How to use:** Click any card to open a YouTube search, pick the top current result. Follow along by installing Cloud Sync agent in a lab AD forest.

## ⭐ Essential watching (~75 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Entra+Connect+vs+Cloud+Sync+comparison" data-video-id="EN23EvdwyPE" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Entra Connect vs Cloud Sync, Pick the Right One</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 22 min · Feature-by-feature comparison</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Entra+PHS+PTA+federation+comparison" data-video-id="DpqpGSI02M0" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">PHS vs PTA vs Federation, Picking Your Auth Topology</p>
      <p class="vg-creator">Andy Malone MVP</p>
      <span class="vg-duration">⏱ 20 min · Trade-offs + recommendation</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Entra+Cloud+Sync+installation+setup" data-video-id="Ptr6-eKbibg" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Cloud Sync Agent Install + Configuration</p>
      <p class="vg-creator">Dean Cefola, Azure Academy</p>
      <span class="vg-duration">⏱ 18 min · End-to-end agent setup</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Entra+migrate+AD+FS+federation+to+cloud+auth" data-video-id="edlN3MtSvA8" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Migrating From AD FS Federation to Cloud Auth</p>
      <p class="vg-creator">Microsoft Mechanics</p>
      <span class="vg-duration">⏱ 15 min · Lufthansa-style migration</span>
    </div>
  </a>
</div>

## 📚 Recommended (~40 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Entra+hybrid+entra+join+setup+windows" data-video-id="RFhpZQR_4E4" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Hybrid Entra Join, Setup End-to-End</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 18 min · GPO + Cloud Sync + Entra</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Entra+seamless+SSO+setup+kerberos" data-video-id="Zu6-ZS0oh74" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Seamless SSO, Kerberos Silent Sign-In</p>
      <p class="vg-creator">Andy Malone MVP</p>
      <span class="vg-duration">⏱ 12 min · Computer account + GPO</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Entra+Connect+staging+mode+failover" data-video-id="7NsKHgSzumY" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Connect Staging Mode + HA Strategy</p>
      <p class="vg-creator">Concepts Work</p>
      <span class="vg-duration">⏱ 13 min · How to fail over Connect</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Entra+Connect+OU+filtering+attribute+scope" data-video-id="jXYS2CJcZc8" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">OU Filtering + Attribute Filtering, Mistakes to Avoid</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 16 min · Soft-delete horror stories</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Entra+pass+through+authentication+PTA+agents" data-video-id="ZiuibUze54Y" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">PTA Agent Architecture + Multi-Agent HA</p>
      <p class="vg-creator">Dean Cefola, Azure Academy</p>
      <span class="vg-duration">⏱ 14 min · Avoiding SPOF</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Entra+Connect+Health+monitoring+sync+errors" data-video-id="MGWy2oAWP4Y" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Entra Connect Health, Sync Error Monitoring</p>
      <p class="vg-creator">Microsoft Mechanics</p>
      <span class="vg-duration">⏱ 12 min · Alerts + agent health</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels

| Channel | Why |
|---------|-----|
| **John Savill** | Definitive hybrid identity content. |
| **Andy Malone MVP** | Practical M365 admin perspective. |
| **Microsoft Mechanics** | Official launches; federation deprecation messaging. |
| **Dean Cefola, Azure Academy** | Lab walkthroughs. |
| **Concepts Work** | Newer SC-300 channel; well-organized. |

---

## ✅ After watching

Answer these in your notebook (without re-watching):

1. Cloud Sync vs Entra Connect, which features make you stay on Connect?
2. Why is PHS recommended even for federation customers?
3. Walk through Seamless SSO Kerberos flow against `AZUREADSSOACC$`.
4. What's the most common OU-filtering mistake and how does it manifest?
5. Difference between Hybrid Entra Join and Entra Joined, when each is right.

If you can answer all 5, you're ready for the [Quiz](./Quiz.md).
