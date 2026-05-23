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

# 🎥 Module 5 Videos: Attribution Model Walkthroughs

> **How to use:** Tutorials on attribution theory + how to actually build it in Sheets / Python. Watch Essential 4 BEFORE you open the spreadsheet.

## ⭐ Essential watching (~75 min)

<div class="vg-grid">
  <a class="vg-card" data-video-id="xCDAWmJBy9I" href="https://www.youtube.com/results?search_query=marketing+attribution+models+explained+last+click+linear+markov" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Marketing Attribution Models Explained</p>
      <p class="vg-creator">Avinash Kaushik / MarketingProfs</p>
      <span class="vg-duration">⏱ 25 min · The 7 models + when to use</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="b6YrTm-M58g" href="https://www.youtube.com/results?search_query=Markov+chain+attribution+tutorial+python+marketing" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Markov Chain Attribution In Python — Step By Step</p>
      <p class="vg-creator">Data Science marketing channels</p>
      <span class="vg-duration">⏱ 20 min · The math + the code</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="HbFTMhHRhmQ" href="https://www.youtube.com/results?search_query=Google+Sheets+attribution+model+tutorial" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Building Attribution In Google Sheets</p>
      <p class="vg-creator">Various analytics channels</p>
      <span class="vg-duration">⏱ 15 min · Sheets-only approach</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="vuFTrylVwno" href="https://www.youtube.com/results?search_query=Google+Colab+for+beginners+data+analysis+marketing" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Google Colab For Marketers — Crash Course</p>
      <p class="vg-creator">Various data channels</p>
      <span class="vg-duration">⏱ 15 min · If you're going Python route</span>
    </div>
  </a>
</div>

## 📚 Recommended (~55 min)

<div class="vg-grid">
  <a class="vg-card" data-video-id="m5kp86hI7uI" href="https://www.youtube.com/results?search_query=Shapley+value+attribution+marketing+explained" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Shapley Value Attribution Explained Simply</p>
      <p class="vg-creator">Various analytics channels</p>
      <span class="vg-duration">⏱ 14 min · Game theory for marketers</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="zbNwPoVVCoQ" href="https://www.youtube.com/results?search_query=GA4+attribution+report+walkthrough+2026" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">GA4 Attribution Reports Walkthrough</p>
      <p class="vg-creator">Measureschool / Google</p>
      <span class="vg-duration">⏱ 12 min · What GA4 gives you</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="zmHomw41p_c" href="https://www.youtube.com/results?search_query=customer+journey+visualization+sankey+chart" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Customer Journey Visualization — Sankey Charts</p>
      <p class="vg-creator">Data viz channels</p>
      <span class="vg-duration">⏱ 14 min · Make your chart memorable</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="eQPHRKZ94eA" href="https://www.youtube.com/results?search_query=media+mix+modeling+vs+multi+touch+attribution" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">MMM vs MTA — Which Should You Use?</p>
      <p class="vg-creator">Various analytics channels</p>
      <span class="vg-duration">⏱ 15 min · The bigger picture</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" data-video-id="tMs_wcXrmJA" href="https://www.youtube.com/results?search_query=Python+pandas+marketing+data+analysis+tutorial" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Pandas For Marketing Data Analysis</p>
      <p class="vg-creator">Data Science channels</p>
      <span class="vg-duration">⏱ 25 min · If you're new to Python</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="LbjhZUO2mqs" href="https://www.youtube.com/results?search_query=incrementality+testing+marketing+experiments" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Incrementality Testing — Beyond Attribution</p>
      <p class="vg-creator">Marketing science channels</p>
      <span class="vg-duration">⏱ 18 min · Where attribution falls short</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="qastDPgPVLU" href="https://www.youtube.com/results?search_query=BigQuery+attribution+analysis+tutorial" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Attribution In BigQuery SQL</p>
      <p class="vg-creator">Google Cloud / Various</p>
      <span class="vg-duration">⏱ 22 min · SQL-heavy approach</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **Avinash Kaushik** | The OG of marketing analytics |
| **Measureschool** | GA4 + GTM walkthroughs |
| **Cassie Kozyrkov** | Decision intelligence + marketing science |
| **Various Data Science marketing channels** | Markov / Shapley implementations |
| **Google Analytics (official)** | What GA4 actually does |

---

## ✅ After watching

Answer these in your notebook (without re-watching):

1. What's the difference between Last-Click, Linear, and Markov in plain English?
2. What's the "removal effect" in Markov attribution?
3. When would you use MMM instead of MTA?
4. What's the privacy rule when using real customer data?
5. What goes in the comparison chart vs the writeup?

If you can answer all 5, you're ready to build. Otherwise re-watch Essential #1 and #2.

