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

# 🎥 Module 3 Videos: EDA & Feature Engineering

> Click any card to search YouTube for the topic.

## ⭐ Essential (~70 min)

<div class="vg-grid">
  <a class="vg-card" data-video-id="xi0vhXFPegw" href="https://www.youtube.com/results?search_query=Exploratory+Data+Analysis+pandas+tutorial+complete" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>📈</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">EDA in pandas — Complete Walkthrough</p>
      <p class="vg-creator">Ken Jee / Data Professor</p>
      <span class="vg-duration">⏱ 20 min · The standard 5-step playbook</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="YpqUbirqFxQ" href="https://www.youtube.com/results?search_query=missing+data+imputation+strategies+machine+learning" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🧹</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Missing-Data Imputation — Beyond Mean/Median</p>
      <p class="vg-creator">StatQuest</p>
      <span class="vg-duration">⏱ 15 min · MCAR / MAR / MNAR explained</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="b5ElDVPOmO4" href="https://www.youtube.com/results?search_query=SageMaker+Data+Wrangler+tutorial+visual+data+prep" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🤖</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">SageMaker Data Wrangler — Hands-On Tour</p>
      <p class="vg-creator">AWS Online Tech Talks</p>
      <span class="vg-duration">⏱ 18 min · Visual prep + Feature Store export</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="FgakZw6K1QQ" href="https://www.youtube.com/results?search_query=PCA+principal+component+analysis+visual+explanation+StatQuest" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>📉</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">PCA — Visual Intuition + Math</p>
      <p class="vg-creator">StatQuest</p>
      <span class="vg-duration">⏱ 22 min · Best PCA explainer on YouTube</span>
    </div>
  </a>
</div>

## 📚 Recommended (~55 min)

<div class="vg-grid">
  <a class="vg-card" data-video-id="589nCGeWG1w" href="https://www.youtube.com/results?search_query=feature+engineering+categorical+encoding+target+vs+onehot" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🔤</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Categorical Encoding — Target vs One-Hot vs Embedding</p>
      <p class="vg-creator">Krish Naik</p>
      <span class="vg-duration">⏱ 18 min · Avoid the leakage trap</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="dkXB8HH_4-k" href="https://www.youtube.com/results?search_query=class+imbalance+SMOTE+stratified+kfold+sklearn" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>⚖️</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Class Imbalance — SMOTE, Class Weights, Thresholds</p>
      <p class="vg-creator">Andreas Mueller (sklearn maintainer)</p>
      <span class="vg-duration">⏱ 22 min · The whole toolbox</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="pgWj0nrhKHo" href="https://www.youtube.com/results?search_query=SageMaker+Feature+Store+walkthrough+online+offline" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🏪</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">SageMaker Feature Store — Online + Offline</p>
      <p class="vg-creator">AWS re:Invent</p>
      <span class="vg-duration">⏱ 15 min · The dual-mode pattern</span>
    </div>
  </a>
</div>

## 🍿 Optional

<div class="vg-grid">
  <a class="vg-card" data-video-id="NEaUSP4YerM" href="https://www.youtube.com/results?search_query=t-SNE+UMAP+comparison+dimensionality+reduction" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🌌</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">t-SNE vs UMAP — Picking The Right Tool</p>
      <p class="vg-creator">StatQuest</p>
      <span class="vg-duration">⏱ 17 min · Non-linear viz</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="uBG7lFXV6II" href="https://www.youtube.com/results?search_query=Amazon+QuickSight+ML+Insights+anomaly+forecast" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>📊</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">QuickSight ML Insights + Amazon Q</p>
      <p class="vg-creator">AWS Events</p>
      <span class="vg-duration">⏱ 20 min · NL Q&A on BI data</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="3p7G6X2YzfQ" href="https://www.youtube.com/results?search_query=Stripe+Radar+fraud+machine+learning+features" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>💳</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Stripe Radar — Real-World Feature Engineering</p>
      <p class="vg-creator">Stripe Engineering talks</p>
      <span class="vg-duration">⏱ 35 min · Velocity, embeddings, network features</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="jvcPZmnXaxo" href="https://www.youtube.com/results?search_query=SageMaker+Clarify+pre+training+bias+report" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎯</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">SageMaker Clarify Pre-Training Bias Report</p>
      <p class="vg-creator">AWS Events</p>
      <span class="vg-duration">⏱ 17 min · DPL, KL, JS metrics</span>
    </div>
  </a>
</div>

---

## ✅ After watching

1. Sketch the 5-step EDA workflow from memory.
2. When do you scale numerics? When do you NOT scale?
3. Why is target encoding leakage-prone, and how do you prevent it?
4. PCA vs t-SNE vs UMAP — which for visualisation, which for feature input?
5. Three class-imbalance treatments — pros and cons of each.

Then go to the [Quiz](./Quiz.md).
