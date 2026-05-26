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

# 🎥 Module 7 Videos: Windows Update for Business & Servicing

> **How to use:** Click any card to open a YouTube search. Follow along by building 3 rings in your test tenant.

## ⭐ Essential watching (~80 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Windows+Update+for+Business+WUfB+rings+Intune+complete" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Windows Update for Business — Complete Walkthrough</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 26 min · Rings end-to-end</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Intune+expedited+update+critical+patch+deployment" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Expedited Updates — Push a Zero-Day Patch in 24 Hours</p>
      <p class="vg-creator">Microsoft Mechanics</p>
      <span class="vg-duration">⏱ 16 min · The emergency play</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Delivery+Optimization+Windows+peer+caching+LAN+group" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Delivery Optimization — LAN vs Group vs Internet</p>
      <p class="vg-creator">Peter van der Woude</p>
      <span class="vg-duration">⏱ 20 min · P2P bandwidth saver</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Autopatch+overview+managed+Windows+updates" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Microsoft Autopatch — Managed Update Orchestration</p>
      <p class="vg-creator">Andy Malone MVP</p>
      <span class="vg-duration">⏱ 18 min · When MS owns your rings</span>
    </div>
  </a>
</div>

## 📚 Recommended (~45 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Intune+driver+updates+policy+manual+automatic" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Driver Updates as a Separate Policy</p>
      <p class="vg-creator">Microsoft Mechanics</p>
      <span class="vg-duration">⏱ 14 min · The 2023+ split</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=WUfB+reports+Log+Analytics+update+compliance" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">WUfB Reports via Log Analytics</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 17 min · Update deployment visibility</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Windows+11+feature+update+24H2+end+of+servicing" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Windows 11 Servicing Channels + End-of-Servicing</p>
      <p class="vg-creator">Peter van der Woude</p>
      <span class="vg-duration">⏱ 14 min · 24 vs 36-month windows</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Patch+Tuesday+zero+day+PrintNightmare+response+Intune" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">PrintNightmare — Zero-Day Response Playbook</p>
      <p class="vg-creator">Microsoft Security</p>
      <span class="vg-duration">⏱ 22 min · The expedited update use case</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Windows+update+rollback+uninstall+feature+quality" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Rolling Back Bad Windows Updates</p>
      <p class="vg-creator">Andy Malone MVP</p>
      <span class="vg-duration">⏱ 15 min · When updates go wrong</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=WSUS+deprecation+Microsoft+modern+update+management" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">WSUS Deprecation — Migrating to Cloud</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 20 min · The on-prem retirement story</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **John Savill's Technical Training** | Deep WUfB + servicing content. |
| **Microsoft Mechanics** | Official new-feature rollouts. |
| **Peter van der Woude** | Detailed Intune update walkthroughs. |
| **Andy Malone MVP** | Practical MD-102 prep. |
| **Microsoft Security** | Patch Tuesday context. |

---

## ✅ After watching

Answer these in your notebook (without re-watching):

1. Name the three WUfB update categories and their cadences.
2. Walk through the Pilot → Broad → Deferred ring topology.
3. When would you use an expedited update?
4. What does Delivery Optimization mode "Group" enable that "LAN" does not?
5. How does Microsoft Autopatch differ from self-managed WUfB?

If you can answer all 5, you're ready for the [Quiz](./Quiz.md). If not, re-watch John Savill's WUfB video.
