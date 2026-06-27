<style>
.vg-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 18px; margin: 22px 0 30px; }
.vg-card { display: block; background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; text-decoration: none; color: inherit; transition: transform .2s, box-shadow .2s, border-color .2s; }
.vg-card:hover { transform: translateY(-3px); box-shadow: 0 12px 24px -8px rgba(0,0,0,.15); border-color: #4285f4; }
.vg-thumb { position: relative; aspect-ratio: 16 / 9; background: linear-gradient(135deg, #4285f4, #fbbc04); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 48px; }
.vg-play { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,.35); color: #fff; font-size: 48px; opacity: 0; transition: opacity .2s; }
.vg-card:hover .vg-play { opacity: 1; }
.vg-meta { padding: 14px 16px; }
.vg-tag { display: inline-block; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: .08em; padding: 3px 8px; border-radius: 4px; margin-bottom: 8px; }
.vg-tag.essential { background: #d2e3fc; color: #1967d2; }
.vg-tag.recommended { background: #ceead6; color: #137333; }
.vg-tag.optional { background: #fef3c7; color: #92400e; }
.vg-title { font-weight: 700; font-size: 14px; line-height: 1.4; margin: 0 0 4px; color: #0f172a; }
.vg-creator { font-size: 12.5px; color: #64748b; margin: 0 0 6px; }
.vg-duration { font-size: 11px; color: #94a3b8; font-weight: 600; }
</style>

# 🎥 Module 9 Videos: MLOps on Vertex AI

## ⭐ Essential (~80 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" data-video-id="gtVHw5YCRhE" href="https://www.youtube.com/results?search_query=Vertex+AI+pipelines+kubeflow+KFP+tutorial+walkthrough" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta"><span class="vg-tag essential">Essential</span>
      <p class="vg-title">Vertex AI Pipelines End-to-End</p><p class="vg-creator">Google Cloud Tech</p>
      <span class="vg-duration">⏱ 20 min · KFP v2 walkthrough</span></div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Vertex+AI+Model+Registry+version+lineage" data-video-id="N9ufw8uP_8s" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta"><span class="vg-tag essential">Essential</span>
      <p class="vg-title">Model Registry Deep Dive</p><p class="vg-creator">Google Cloud Tech</p>
      <span class="vg-duration">⏱ 14 min · Versions + lineage</span></div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Vertex+AI+endpoint+canary+traffic+split+deployment" data-video-id="_NlGk9Ao_oA" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta"><span class="vg-tag essential">Essential</span>
      <p class="vg-title">Canary Deploys + Traffic Split</p><p class="vg-creator">Google Cloud Tech</p>
      <span class="vg-duration">⏱ 12 min · The safe-deploy pattern</span></div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Vertex+AI+model+monitoring+drift+skew+detection" data-video-id="cIvtyD4KFfY" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta"><span class="vg-tag essential">Essential</span>
      <p class="vg-title">Model Monitoring, Drift + Skew</p><p class="vg-creator">PyLearn</p>
      <span class="vg-duration">⏱ 16 min · Catching silent failures</span></div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Vertex+AI+Feature+Store+online+offline+training+serving+skew" data-video-id="jXD8Sfx4hvQ" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta"><span class="vg-tag essential">Essential</span>
      <p class="vg-title">Feature Store + Skew Elimination</p><p class="vg-creator">Google Cloud Tech</p>
      <span class="vg-duration">⏱ 14 min · One source of truth</span></div>
  </a>
</div>

## 📚 Recommended (~55 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Vodafone+Vertex+AI+MLOps+case+study+platform" data-video-id="pr3z1lv63go" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta"><span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Vodafone MLOps Migration</p><p class="vg-creator">Google Cloud</p>
      <span class="vg-duration">⏱ 22 min · 12× shipping velocity</span></div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Vertex+AI+hyperparameter+tuning+Vizier+bayesian" data-video-id="8hZ_cBwNOss" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta"><span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Hyperparameter Tuning with Vizier</p><p class="vg-creator">Google Cloud Tech</p>
      <span class="vg-duration">⏱ 14 min · Bayesian search</span></div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Vertex+AI+AutoML+tabular+image+text+training" data-video-id="GbLQE2C181U" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta"><span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">AutoML on Vertex AI</p><p class="vg-creator">Google Cloud Tech</p>
      <span class="vg-duration">⏱ 13 min · Tabular/image/text</span></div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Cloud+Build+CI+CD+Vertex+AI+pipeline+trigger" data-video-id="p7GTsbSQWF4" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta"><span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">CI/CD for ML, Cloud Build + Vertex</p><p class="vg-creator">GitLab Unfiltered</p>
      <span class="vg-duration">⏱ 15 min · GitHub → Pipeline → Endpoint</span></div>
  </a>
</div>

## 🍿 Optional

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=continuous+training+MLOps+pipeline+retrain+trigger" data-video-id="dQZfw0poCLA" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta"><span class="vg-tag optional">Optional</span>
      <p class="vg-title">Continuous Training Patterns</p><p class="vg-creator">Uplatz</p>
      <span class="vg-duration">⏱ 18 min · Scheduled / drift / event</span></div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=cloud+trace+vertex+ai+gemini+agent+observability" data-video-id="XNfAj4oO7CU" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta"><span class="vg-tag optional">Optional</span>
      <p class="vg-title">Cloud Trace for Agentic Workloads</p><p class="vg-creator">George Alonge</p>
      <span class="vg-duration">⏱ 12 min · Multi-step tracing</span></div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=PMLE+google+professional+ML+engineer+exam+study+guide" data-video-id="9Uuix13NJ0Y" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta"><span class="vg-tag optional">Optional</span>
      <p class="vg-title">PMLE Exam Study Guide</p><p class="vg-creator">FlashGenius</p>
      <span class="vg-duration">⏱ 25 min · Blueprint walkthrough</span></div>
  </a>
  <a class="vg-card" data-video-id="6wWdNg0GMV4" href="https://www.youtube.com/results?search_query=Kubeflow+pipelines+v2+component+SDK+tutorial" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta"><span class="vg-tag optional">Optional</span>
      <p class="vg-title">Kubeflow Pipelines v2 SDK</p><p class="vg-creator">Google Cloud Tech</p>
      <span class="vg-duration">⏱ 22 min · Component patterns</span></div>
  </a>
</div>

---

## ✅ After watching

1. The 8 stages of the Vertex AI MLOps loop?
2. Pipelines vs Cloud Build, when each?
3. traffic_split, canary deploy syntax?
4. Three failure modes Model Monitoring detects?
5. When use Vertex AI Feature Store?
