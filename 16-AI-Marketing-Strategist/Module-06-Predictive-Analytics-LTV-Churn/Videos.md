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

# 🎥 Module 6 Videos: Predictive Analytics, CLV, Churn & Propensity

> **How to use:** Watch the Peter Fader CLV lecture twice. It's the single best marketing-analytics lecture on YouTube and gives you the conceptual basis for everything in this module.

## ⭐ Essential watching (~95 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" data-video-id="PmXLFTYIzRg" href="https://www.youtube.com/results?search_query=Peter+Fader+customer+lifetime+value+Wharton" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">CLV From The Author, Peter Fader</p>
      <p class="vg-creator">Wharton / Peter Fader</p>
      <span class="vg-duration">⏱ 28 min · BG/NBD explained</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="hpyuE0nCcVA" href="https://www.youtube.com/results?search_query=BG+NBD+model+lifetimes+python+tutorial" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">BG/NBD with the `lifetimes` library in Python</p>
      <p class="vg-creator">Cameron Davidson-Pilon</p>
      <span class="vg-duration">⏱ 20 min · Library walkthrough</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="QlWYS5UN0Vg" href="https://www.youtube.com/results?search_query=LightGBM+churn+prediction+tutorial" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Churn Prediction With LightGBM</p>
      <p class="vg-creator">Krish Naik</p>
      <span class="vg-duration">⏱ 25 min · Full pipeline</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="2J9j7peWQgI" href="https://www.youtube.com/results?search_query=uplift+modeling+causal+machine+learning" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Uplift Modeling: Persuadables vs Sure Things</p>
      <p class="vg-creator">Uber Engineering</p>
      <span class="vg-duration">⏱ 22 min · The strategist's secret weapon</span>
    </div>
  </a>
</div>

## 📚 Recommended (~55 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" data-video-id="6ER1QPQeB9E" href="https://www.youtube.com/results?search_query=RFM+analysis+segmentation+ecommerce+tutorial" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">RFM Analysis Walkthrough</p>
      <p class="vg-creator">StatQuest with Josh Starmer</p>
      <span class="vg-duration">⏱ 16 min · The classic technique</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="M0CkOuWk2Ko" href="https://www.youtube.com/results?search_query=DataRobot+churn+prediction+walkthrough" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">No-Code Churn Modeling in DataRobot</p>
      <p class="vg-creator">DataRobot</p>
      <span class="vg-duration">⏱ 18 min · No-code workflow</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="qdpNYn110Bo" href="https://www.youtube.com/results?search_query=Amazon+Personalize+recommendation+service" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Amazon Personalize Service</p>
      <p class="vg-creator">AWS</p>
      <span class="vg-duration">⏱ 22 min · Managed recsys</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid" markdown="0">
  <a class="vg-card" data-video-id="IyBpisiayD0" href="https://www.youtube.com/results?search_query=Stitch+Fix+data+science+talk+algorithms" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Stitch Fix Data-Science Architecture</p>
      <p class="vg-creator">Eric Colson / Strata</p>
      <span class="vg-duration">⏱ 35 min · The canonical case study</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="MQ6fFDwjuco" href="https://www.youtube.com/results?search_query=SHAP+values+model+interpretation+tutorial" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">SHAP for Marketing Model Interpretation</p>
      <p class="vg-creator">DeepLearning.AI</p>
      <span class="vg-duration">⏱ 18 min · SHAP applied</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="aETMUW_TWV0" href="https://www.youtube.com/results?search_query=survival+analysis+churn+Cox+proportional+hazards" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Survival Analysis for Subscription Churn</p>
      <p class="vg-creator">StatQuest with Josh Starmer</p>
      <span class="vg-duration">⏱ 20 min · Time-to-event models</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **Peter Fader / Wharton Customer Analytics** | THE CLV source |
| **StatQuest with Josh Starmer** | Clearest ML math on YouTube |
| **Krish Naik** | Practical ML pipelines |
| **DataRobot** | No-code AutoML content |
| **Uber Engineering** | Open-source ML (causalml) |
| **ChartMogul** | Subscription-business retention content |

---

## ✅ After watching

1. State the BG/NBD model assumptions.
2. AUC bar for an operationally useful churn model?
3. Define Persuadables vs Sure Things in uplift modeling.
4. Why is calibration important for marketing-action models?
5. What's the strategist's six-step predictive playbook?

If you can answer all 5 in under 10 minutes, you're ready for the [Quiz](./Quiz.md).
