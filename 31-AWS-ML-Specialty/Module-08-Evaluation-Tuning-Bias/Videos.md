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

# 🎥 Module 8 Videos: Evaluation, Tuning & Bias

## ⭐ Essential (~75 min)

<div class="vg-grid">
  <a class="vg-card" data-video-id="Kdsp6soqA7o" href="https://www.youtube.com/results?search_query=ROC+AUC+precision+recall+F1+complete+intuition+StatQuest" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>📊</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Confusion Matrix → Precision / Recall / F1 / ROC AUC</p>
      <p class="vg-creator">StatQuest</p>
      <span class="vg-duration">⏱ 24 min · Read any metric in 30 s</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="P3F4sJGmJqo" href="https://www.youtube.com/results?search_query=SageMaker+Automatic+Model+Tuning+Bayesian+Hyperband" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎛️</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">SageMaker HPO — Bayesian + Hyperband</p>
      <p class="vg-creator">AWS Online Tech Talks</p>
      <span class="vg-duration">⏱ 20 min · Strategy decision</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="jvcPZmnXaxo" href="https://www.youtube.com/results?search_query=SageMaker+Clarify+SHAP+bias+demo" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🔬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">SageMaker Clarify — Bias + SHAP</p>
      <p class="vg-creator">AWS Events</p>
      <span class="vg-duration">⏱ 18 min · Pre + post training</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="fSytzGwwBVw" href="https://www.youtube.com/results?search_query=cross+validation+strategies+time+series+group+kfold" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🔁</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Cross-Validation Done Right</p>
      <p class="vg-creator">Andreas Mueller</p>
      <span class="vg-duration">⏱ 16 min · Stratified / Group / Time-series</span>
    </div>
  </a>
</div>

## 📚 Recommended (~50 min)

<div class="vg-grid">
  <a class="vg-card" data-video-id="d4PPMpdUCz8" href="https://www.youtube.com/results?search_query=SHAP+values+explained+visual+intuition" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>💡</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">SHAP Values — Visual Intuition</p>
      <p class="vg-creator">Christoph Molnar</p>
      <span class="vg-duration">⏱ 18 min · Per-prediction attribution</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="WYdcTChKeig" href="https://www.youtube.com/results?search_query=Bedrock+model+evaluation+job+demo" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🤖</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Bedrock Model Evaluation Jobs</p>
      <p class="vg-creator">AWS Online Tech Talks</p>
      <span class="vg-duration">⏱ 16 min · Automatic + human eval</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="lwCBXYZhJyc" href="https://www.youtube.com/results?search_query=SageMaker+Model+Cards+responsible+ML+governance" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🃏</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">SageMaker Model Cards</p>
      <p class="vg-creator">AWS Events</p>
      <span class="vg-duration">⏱ 14 min · Compliance documentation</span>
    </div>
  </a>
</div>

## 🍿 Optional

<div class="vg-grid">
  <a class="vg-card" data-video-id="qeMtVeRb1CY" href="https://www.youtube.com/results?search_query=fairness+ML+definitions+impossibility+result" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>⚖️</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Fairness in ML — Impossibility Theorems</p>
      <p class="vg-creator">DeepLearningAI</p>
      <span class="vg-duration">⏱ 24 min · Demographic parity vs equal opportunity</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="s203ScTy4xQ" href="https://www.youtube.com/results?search_query=quantile+regression+prediction+intervals+forecasting" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>📈</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Quantile Regression for Forecast Intervals</p>
      <p class="vg-creator">StatQuest</p>
      <span class="vg-duration">⏱ 15 min · p10/p50/p90</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="RTaZqGflrJ8" href="https://www.youtube.com/results?search_query=LLM+evaluation+benchmarks+MMLU+HellaSwag+HumanEval" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🧪</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">LLM Benchmarks Explained</p>
      <p class="vg-creator">AI Coffee Break</p>
      <span class="vg-duration">⏱ 17 min</span>
    </div>
  </a>
</div>

---

## ✅ After watching

1. Accuracy vs PR-AUC — when each?
2. Bayesian HPO vs Hyperband — when each?
3. Pre- vs post-training bias — examples?
4. SHAP global vs local — when each?
5. When is a model card mandatory in your workflow?

➡️ [Quiz.md](./Quiz.md)
