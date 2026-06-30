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

# 🎥 Module 6 Videos: Tools & Features

> **How to use:** Monitor vs Service Health vs Status, the exam asks this. Drill the comparison videos.

## ⭐ Essential watching (~45 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" data-video-id="v68jL-l9Fww" href="https://www.youtube.com/results?search_query=John+Savill+Azure+monitor+log+analytics+overview" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Azure Monitor + Log Analytics Master Class</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 18 min · Full observability stack</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="wkQIyenVfxc" href="https://www.youtube.com/results?search_query=Adam+Marczak+Azure+Bicep+vs+ARM+templates" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Bicep vs ARM Templates Explained</p>
      <p class="vg-creator">Adam Marczak, Azure for Everyone</p>
      <span class="vg-duration">⏱ 12 min · Modern IaC</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="8JHY0xPssb8" href="https://www.youtube.com/results?search_query=Azure+CLI+vs+PowerShell+cloud+shell" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Azure CLI vs PowerShell vs Cloud Shell</p>
      <p class="vg-creator">Microsoft Learn</p>
      <span class="vg-duration">⏱ 8 min · Which tool when</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="M1xPK4T4Vls" href="https://www.youtube.com/results?search_query=Azure+Service+Health+vs+Azure+Status+vs+Monitor" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Service Health vs Status Page vs Monitor</p>
      <p class="vg-creator">Tim Warner / various</p>
      <span class="vg-duration">⏱ 10 min · The 3-way comparison</span>
    </div>
  </a>
</div>

## 📚 Recommended (~25 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" data-video-id="55lTTFACw-E" href="https://www.youtube.com/results?search_query=Azure+Advisor+recommendations+walkthrough" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Azure Advisor Walkthrough (5 pillars)</p>
      <p class="vg-creator">Microsoft / various</p>
      <span class="vg-duration">⏱ 8 min · Recommendations in action</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="rQBFAKJ-Ea8" href="https://www.youtube.com/results?search_query=John+Savill+Azure+Arc+overview" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Azure Arc Explained</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 12 min · Multi-cloud / hybrid mgmt</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="SAQwYb9F-_c" href="https://www.youtube.com/results?search_query=Azure+Migrate+walkthrough+demo" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Azure Migrate Walkthrough</p>
      <p class="vg-creator">Microsoft Mechanics</p>
      <span class="vg-duration">⏱ 10 min · Discovery to migration</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid" markdown="0">
  <a class="vg-card" data-video-id="17FI_KXQfMg" href="https://www.youtube.com/results?search_query=Bicep+language+tutorial+for+beginners" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Bicep Tutorial For Beginners</p>
      <p class="vg-creator">Various</p>
      <span class="vg-duration">⏱ 20 min · Hands-on deploy</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="trBZN7hVeOE" href="https://www.youtube.com/results?search_query=Azure+Data+Box+how+it+works" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Azure Data Box Walkthrough</p>
      <p class="vg-creator">Microsoft</p>
      <span class="vg-duration">⏱ 8 min · TB-PB offline transfer</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="ZMr0kp_cncA" href="https://www.youtube.com/results?search_query=Microsoft+Service+Trust+Portal+compliance+manager" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Service Trust Portal + Compliance Manager</p>
      <p class="vg-creator">Microsoft</p>
      <span class="vg-duration">⏱ 10 min · Compliance docs</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **John Savill's Technical Training** | Monitor, Arc, deep dives |
| **Adam Marczak, Azure for Everyone** | Bicep/ARM clean comparisons |
| **Microsoft Mechanics** | Migration tools, official content |
| **Microsoft Learn** | Authoritative tool walkthroughs |

---

## ✅ After watching

Answer these in your notebook:

1. Cloud Shell vs Azure CLI vs PowerShell, when each?
2. Bicep vs ARM, same engine or different?
3. Azure Monitor vs Service Health vs Azure Status, what does each watch?
4. Azure Advisor's 5 recommendation pillars?
5. What does Azure Arc DO?

If you can answer all 5, you're ready for the [Quiz](./Quiz.md) and the [Practice Exams](../Practice-Exams/).
