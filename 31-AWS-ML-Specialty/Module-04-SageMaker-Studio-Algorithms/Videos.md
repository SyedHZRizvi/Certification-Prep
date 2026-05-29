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

# 🎥 Module 4 Videos: SageMaker Studio & Built-In Algorithms

## ⭐ Essential (~90 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=SageMaker+Studio+walkthrough+2024+complete+tour" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🖥️</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">SageMaker Studio — Complete Walkthrough</p>
      <p class="vg-creator">AWS Online Tech Talks</p>
      <span class="vg-duration">⏱ 22 min · Domains, profiles, apps</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=SageMaker+built+in+algorithms+choosing+the+right+one" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🧠</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Choosing the Right SageMaker Built-In Algorithm</p>
      <p class="vg-creator">AWS re:Invent (AIM303)</p>
      <span class="vg-duration">⏱ 55 min · Algorithm decision tree</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=XGBoost+explained+visually+gradient+boosting+intuition" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🌳</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">XGBoost — Visual Intuition</p>
      <p class="vg-creator">StatQuest</p>
      <span class="vg-duration">⏱ 16 min · Gradient boosting from scratch</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=SageMaker+XGBoost+hyperparameter+tuning+demo" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎛️</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">SageMaker XGBoost End-to-End Demo</p>
      <p class="vg-creator">Stephane Maarek</p>
      <span class="vg-duration">⏱ 20 min · Real notebook walk-through</span>
    </div>
  </a>
</div>

## 📚 Recommended (~80 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=SageMaker+Random+Cut+Forest+anomaly+detection+tutorial" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🌲</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">SageMaker Random Cut Forest Walk-Through</p>
      <p class="vg-creator">AWS Events</p>
      <span class="vg-duration">⏱ 18 min · Anomaly detection</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=SageMaker+DeepAR+time+series+forecasting+demo" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>⏰</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">DeepAR Probabilistic Forecasting</p>
      <p class="vg-creator">AWS re:Invent</p>
      <span class="vg-duration">⏱ 22 min · Multi-series forecasting</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=SageMaker+Autopilot+demo+autoML+tabular" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🚁</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">SageMaker Autopilot — AutoML in Action</p>
      <p class="vg-creator">AWS Events</p>
      <span class="vg-duration">⏱ 20 min · Tabular AutoML</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=SageMaker+Spot+training+checkpointing+cost+saving" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>💰</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Cost-Optimise SageMaker with Spot Training</p>
      <p class="vg-creator">AWS Online Tech Talks</p>
      <span class="vg-duration">⏱ 16 min · Up to 90% off training</span>
    </div>
  </a>
</div>

## 🍿 Optional

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=BlazingText+SageMaker+word2vec+text+classification" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>💬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">BlazingText — Word2Vec & Text Classification</p>
      <p class="vg-creator">AWS ML Blog talks</p>
      <span class="vg-duration">⏱ 14 min</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=SageMaker+Object2Vec+embedding+recommender" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🔗</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Object2Vec — Universal Embeddings</p>
      <p class="vg-creator">AWS Events</p>
      <span class="vg-duration">⏱ 16 min</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=SageMaker+pipe+mode+vs+file+mode+vs+fast+file" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🚰</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Pipe Mode vs File Mode vs FastFile</p>
      <p class="vg-creator">Be A Better Dev</p>
      <span class="vg-duration">⏱ 12 min</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=SageMaker+Canvas+no+code+business+analyst" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎨</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">SageMaker Canvas — No-Code ML</p>
      <p class="vg-creator">AWS Online Tech Talks</p>
      <span class="vg-duration">⏱ 18 min</span>
    </div>
  </a>
</div>

---

## ✅ After watching

1. Sketch the 5-step SageMaker SDK pattern from memory.
2. Pick the right algorithm: 5,000 sparse features for CTR — what?
3. Pick the right algorithm: detect anomalies in network traffic without labels — what?
4. When do you pick built-in vs script mode vs BYO container?
5. Three top XGBoost hyperparameters to control overfitting?

➡️ [Quiz.md](./Quiz.md)
