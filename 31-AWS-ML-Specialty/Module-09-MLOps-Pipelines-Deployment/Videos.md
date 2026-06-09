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

# 🎥 Module 9 Videos: MLOps, Pipelines, Deployment

## ⭐ Essential (~80 min)

<div class="vg-grid">
  <a class="vg-card" data-video-id="Hvz2GGU3Z8g" href="https://www.youtube.com/results?search_query=SageMaker+Pipelines+demo+end+to+end" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🔁</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">SageMaker Pipelines, End-to-End</p>
      <p class="vg-creator">AWS re:Invent (AIM403)</p>
      <span class="vg-duration">⏱ 28 min · Processing → Train → Eval → Conditional Deploy</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="FRbcb7CtIOw" href="https://www.youtube.com/results?search_query=SageMaker+real+time+serverless+async+batch+inference+comparison" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🚀</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">The Four SageMaker Inference Modes</p>
      <p class="vg-creator">AWS Online Tech Talks</p>
      <span class="vg-duration">⏱ 18 min · Pick the right endpoint</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="J9T0X9Jxl_w" href="https://www.youtube.com/results?search_query=SageMaker+Model+Monitor+drift+detection+tutorial" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🔬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">SageMaker Model Monitor, All 4 Types</p>
      <p class="vg-creator">AWS Events</p>
      <span class="vg-duration">⏱ 20 min · Data / Model / Bias / Attribution</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="cpWbhx3nBqw" href="https://www.youtube.com/results?search_query=SageMaker+Model+Registry+approval+workflow" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>📦</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Model Registry + Approval Workflow</p>
      <p class="vg-creator">AWS Online Tech Talks</p>
      <span class="vg-duration">⏱ 14 min</span>
    </div>
  </a>
</div>

## 📚 Recommended (~55 min)

<div class="vg-grid">
  <a class="vg-card" data-video-id="8LkTCiHpwrE" href="https://www.youtube.com/results?search_query=SageMaker+Projects+templated+MLOps+CI+CD" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🏗️</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">SageMaker Projects, Templated MLOps</p>
      <p class="vg-creator">AWS Events</p>
      <span class="vg-duration">⏱ 22 min</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="0Fo-lOxNkDU" href="https://www.youtube.com/results?search_query=Multi+Model+Endpoint+SageMaker+demo" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>📚</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Multi-Model Endpoints Walk-Through</p>
      <p class="vg-creator">AWS Online Tech Talks</p>
      <span class="vg-duration">⏱ 17 min · Capital One pattern</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="iXC-XYZEKEY" href="https://www.youtube.com/results?search_query=SageMaker+blue+green+canary+shadow+deployment" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎨</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Blue/Green, Canary, Shadow on SageMaker</p>
      <p class="vg-creator">AWS Events</p>
      <span class="vg-duration">⏱ 16 min</span>
    </div>
  </a>
</div>

## 🍿 Optional

<div class="vg-grid">
  <a class="vg-card" data-video-id="P1_hQvFVGYQ" href="https://www.youtube.com/results?search_query=Amazon+Music+MLOps+reinvent" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎵</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Amazon Music MLOps Stack, re:Invent</p>
      <p class="vg-creator">AWS re:Invent</p>
      <span class="vg-duration">⏱ 50 min</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="Gr3GsHxZvtw" href="https://www.youtube.com/results?search_query=SageMaker+Inference+Recommender+demo" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎁</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">SageMaker Inference Recommender</p>
      <p class="vg-creator">AWS Online Tech Talks</p>
      <span class="vg-duration">⏱ 13 min</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="CCDA4PvgpjY" href="https://www.youtube.com/results?search_query=AWS+EventBridge+SageMaker+pipeline+retrain+automation" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>♻️</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">EventBridge → SageMaker Retrain Automation</p>
      <p class="vg-creator">AWS Events</p>
      <span class="vg-duration">⏱ 18 min</span>
    </div>
  </a>
</div>

---

## ✅ After watching

1. The 4 inference modes, pick each from a scenario.
2. Shadow vs blue-green vs canary, when each?
3. The 4 Model Monitor types, what each watches?
4. Pipelines vs Step Functions vs Airflow, when each?
5. How does Inference Recommender cut endpoint cost?

➡️ [Quiz.md](./Quiz.md)
