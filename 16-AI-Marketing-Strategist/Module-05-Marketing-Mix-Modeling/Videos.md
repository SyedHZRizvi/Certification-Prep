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

# 🎥 Module 5 Videos: Marketing Mix Modeling

> **How to use:** This is the most technical module of the course. If you've never touched R or Bayesian inference, the StatQuest videos are essential prep. The Robyn and Meridian walkthroughs are mandatory.

## ⭐ Essential watching (~100 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" data-video-id="fGPnFpMGhWc" href="https://www.youtube.com/results?search_query=Robyn+Meta+MMM+open+source+tutorial" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Robyn Open-Source MMM, Meta Walkthrough</p>
      <p class="vg-creator">Meta Open Source</p>
      <span class="vg-duration">⏱ 28 min · The canonical Robyn intro</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="ZX6fCv0e9Ac" href="https://www.youtube.com/results?search_query=Google+Meridian+open+source+marketing+mix" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Google Meridian, Bayesian MMM in Python</p>
      <p class="vg-creator">Google Research / Google Ads</p>
      <span class="vg-duration">⏱ 25 min · 2024 launch + walkthrough</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="xUmC05-36F8" href="https://www.youtube.com/results?search_query=adstock+saturation+MMM+explained" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Ad-Stock and Saturation Curves Explained</p>
      <p class="vg-creator">Marketing Science Quarterly</p>
      <span class="vg-duration">⏱ 16 min · The two key transformations</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="lJ_qq_IVUgg" href="https://www.youtube.com/results?search_query=Bayesian+MMM+PyMC+tutorial" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Bayesian MMM with PyMC</p>
      <p class="vg-creator">PyMC Labs</p>
      <span class="vg-duration">⏱ 22 min · The open-source Bayesian path</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="eQPHRKZ94eA" href="https://www.youtube.com/results?search_query=marketing+mix+modeling+vs+MTA+explained" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">MMM vs MTA, When to Use Which</p>
      <p class="vg-creator">Avinash Kaushik</p>
      <span class="vg-duration">⏱ 18 min · The decision tree</span>
    </div>
  </a>
</div>

## 📚 Recommended (~60 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" data-video-id="ONCOkccpk3w" href="https://www.youtube.com/results?search_query=StatQuest+Bayesian+statistics+explained" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Bayesian Statistics, Clearly Explained</p>
      <p class="vg-creator">StatQuest with Josh Starmer</p>
      <span class="vg-duration">⏱ 18 min · The math behind Bayesian MMM</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="8d16VIq_oJo" href="https://www.youtube.com/results?search_query=Nielsen+marketing+mix+modeling+enterprise" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Nielsen Enterprise MMM Approach</p>
      <p class="vg-creator">Nielsen Marketing Science</p>
      <span class="vg-duration">⏱ 22 min · Enterprise perspective</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="h8fQlZa72Zc" href="https://www.youtube.com/results?search_query=Robyn+budget+allocator+optimization+walkthrough" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Robyn Budget Allocator Deep Dive</p>
      <p class="vg-creator">Meta Marketing Science</p>
      <span class="vg-duration">⏱ 20 min · Reallocation in action</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid" markdown="0">
  <a class="vg-card" data-video-id="LyrU7eD77wQ" href="https://www.youtube.com/results?search_query=Hanssens+marketing+mix+modeling+lecture" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Dominique Hanssens, MMM From The Author</p>
      <p class="vg-creator">UCLA Anderson</p>
      <span class="vg-duration">⏱ 45 min · Academic depth</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="Cwbzu8wSZLA" href="https://www.youtube.com/results?search_query=MMM+calibration+incrementality+experiments" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Calibrating MMM With Experiments</p>
      <p class="vg-creator">Meta Marketing Science</p>
      <span class="vg-duration">⏱ 28 min · How to combine the methods</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="vLNOjtWDvP4" href="https://www.youtube.com/results?search_query=Walmart+retail+media+marketing+mix" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Walmart's Retail-Media MMM Operating Cadence</p>
      <p class="vg-creator">IAB / Walmart Connect</p>
      <span class="vg-duration">⏱ 30 min · Real enterprise case</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **Meta Open Source** | Robyn updates + tutorials |
| **Google Research** | Meridian + measurement papers |
| **PyMC Labs** | Best open-source Bayesian MMM content |
| **StatQuest with Josh Starmer** | The math, made clear |
| **Marketing Science Quarterly** | Academic + practitioner mix |
| **Avinash Kaushik** | Strategic framing |

---

## ✅ After watching

1. Write the canonical MMM equation from memory.
2. Define ad-stock and half-life in one sentence each.
3. What does the Hill function model?
4. Robyn vs Meridian, name one specific difference.
5. When do you use MMM vs MTA?

If you can answer all 5 in under 8 minutes, you're ready for the [Quiz](./Quiz.md).
