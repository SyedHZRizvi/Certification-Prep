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

# 🎥 Module 2 Videos: Azure Architecture

> **How to use:** Click any card to search YouTube for the latest top result. The "Essential" set covers everything you need for the exam.

## ⭐ Essential watching (~45 min)

<div class="vg-grid">
  <a class="vg-card" data-video-id="4nDRvZR2EjU" href="https://www.youtube.com/results?search_query=John+Savill+Azure+regions+availability+zones" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Azure Regions, AZs & Region Pairs Explained</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 15 min · Physical hierarchy</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="Ih2x3epVSxo" href="https://www.youtube.com/results?search_query=Adam+Marczak+Azure+resource+groups+management+groups" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Management Groups, Subscriptions & Resource Groups</p>
      <p class="vg-creator">Adam Marczak — Azure for Everyone</p>
      <span class="vg-duration">⏱ 12 min · Logical hierarchy</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="iaAr0Ic1-Vo" href="https://www.youtube.com/results?search_query=Microsoft+Learn+Azure+global+infrastructure" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Azure Global Infrastructure Tour</p>
      <p class="vg-creator">Microsoft Learn</p>
      <span class="vg-duration">⏱ 10 min · Map view</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="OrCEF3okWLM" href="https://www.youtube.com/results?search_query=Tim+Warner+AZ-900+resource+hierarchy" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">AZ-900 Resource Hierarchy Walkthrough</p>
      <p class="vg-creator">Tim Warner</p>
      <span class="vg-duration">⏱ 8 min · Exam-focused</span>
    </div>
  </a>
</div>

## 📚 Recommended (~25 min)

<div class="vg-grid">
  <a class="vg-card" data-video-id="0wuaXqPA53U" href="https://www.youtube.com/results?search_query=John+Savill+Azure+management+groups+deep+dive" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Management Groups Deep Dive</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 14 min · Inheritance + scale</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="PdAEPAnT2uI" href="https://www.youtube.com/results?search_query=Azure+sovereign+regions+government+cloud" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Azure Government & Sovereign Clouds</p>
      <p class="vg-creator">Microsoft / Various</p>
      <span class="vg-duration">⏱ 8 min · Compliance regions</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="C-nNw1mGwzE" href="https://www.youtube.com/results?search_query=Adam+Marczak+Azure+availability+zones+vs+availability+sets" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Availability Zones vs Availability Sets</p>
      <p class="vg-creator">Adam Marczak — Azure for Everyone</p>
      <span class="vg-duration">⏱ 10 min · Common confusion</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" data-video-id="yBkZYhL1wj4" href="https://www.youtube.com/results?search_query=Azure+region+pairs+GRS+geo+redundant" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Region Pairs & Geo-Redundant Storage</p>
      <p class="vg-creator">Various</p>
      <span class="vg-duration">⏱ 12 min · Cross-region replication</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="w7Unnvd7U-s" href="https://www.youtube.com/results?search_query=Cloud+Adoption+Framework+Azure+landing+zones" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Landing Zones — Enterprise Subscription Design</p>
      <p class="vg-creator">Microsoft Cloud Adoption Framework</p>
      <span class="vg-duration">⏱ 20 min · Beyond AZ-900 but useful</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="EDdygbBbEiM" href="https://www.youtube.com/results?search_query=Azure+resource+manager+ARM+architecture" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">How Azure Resource Manager Works</p>
      <p class="vg-creator">Microsoft Mechanics</p>
      <span class="vg-duration">⏱ 10 min · Under the hood</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **John Savill's Technical Training** | Deep, exam-aligned, current |
| **Adam Marczak — Azure for Everyone** | Cleanest visuals for hierarchies |
| **Microsoft Learn** | Authoritative source |
| **Tim Warner** | Practical AZ-900 deep dives |

---

## ✅ After watching

Answer these in your notebook:

1. What's the difference between a Region and an Availability Zone?
2. What's a region pair and what does GRS storage do with it?
3. Recite the 4-level resource hierarchy from top to bottom.
4. Can a resource group contain resources from multiple regions?
5. Why does Microsoft offer sovereign clouds?

If you can answer all 5, you're ready for the [Quiz](./Quiz.md).
