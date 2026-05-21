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

# 🎥 Module 2 Videos: ML Workflow on Amazon SageMaker

> **How to use:** Take notes on every service's *one-line job*. The AIF-C01 leans heavily on "which service for this scenario?" — so you don't need depth, you need *recognition* across many services.

## ⭐ Essential watching (~60 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Amazon+SageMaker+overview+AWS" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Amazon SageMaker — End-to-End ML Overview</p>
      <p class="vg-creator">AWS Machine Learning</p>
      <span class="vg-duration">⏱ 15 min · Official tour of Studio + tools</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=AWS+AI+Services+Rekognition+Comprehend+Polly+overview" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">AWS AI Services Tour — Rekognition, Comprehend, Polly &amp; More</p>
      <p class="vg-creator">Be A Better Dev</p>
      <span class="vg-duration">⏱ 18 min · One-liner per service</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=AIF-C01+SageMaker+walkthrough+ExamPro" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">AIF-C01 — SageMaker for the AI Practitioner Exam</p>
      <p class="vg-creator">ExamPro</p>
      <span class="vg-duration">⏱ 20 min · Exam-targeted depth</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=SageMaker+Canvas+vs+Autopilot+vs+JumpStart" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Canvas vs Autopilot vs JumpStart — Which Should You Use?</p>
      <p class="vg-creator">AWS Online Tech Talks</p>
      <span class="vg-duration">⏱ 12 min · Removes the #1 confusion in this domain</span>
    </div>
  </a>
</div>

## 📚 Recommended (~30 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=SageMaker+Data+Wrangler+demo" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">SageMaker Data Wrangler in 10 Minutes</p>
      <p class="vg-creator">AWS Machine Learning</p>
      <span class="vg-duration">⏱ 10 min · Visual data prep</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=SageMaker+Model+Monitor+drift+detection" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">SageMaker Model Monitor — Detecting Drift in Production</p>
      <p class="vg-creator">AWS Machine Learning</p>
      <span class="vg-duration">⏱ 10 min · 4 drift types covered</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=SageMaker+Inference+endpoint+types+real-time+serverless+async+batch" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">SageMaker Inference: 4 Endpoint Types Compared</p>
      <p class="vg-creator">Stephane Maarek</p>
      <span class="vg-duration">⏱ 12 min · Picks the right mode by scenario</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=SageMaker+Pipelines+MLOps+demo" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">SageMaker Pipelines — CI/CD for ML</p>
      <p class="vg-creator">AWS re:Invent</p>
      <span class="vg-duration">⏱ 35 min · Conference talk on MLOps</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Amazon+Personalize+Forecast+Kendra+intro" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Personalize, Forecast &amp; Kendra Intro</p>
      <p class="vg-creator">AWS Machine Learning</p>
      <span class="vg-duration">⏱ 22 min · The "outer ring" AI services</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=SageMaker+Ground+Truth+labeling+workflow" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">SageMaker Ground Truth — Labeling at Scale</p>
      <p class="vg-creator">AWS Online Tech Talks</p>
      <span class="vg-duration">⏱ 28 min · Workforce choices &amp; active learning</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **AWS Machine Learning** | Official, deep, customer-story heavy |
| **Stephane Maarek** | Exam-tuned AWS content |
| **ExamPro** | Free AIF-C01 walkthroughs |
| **Be A Better Dev** | Practical "what is this service" videos |
| **AWS Online Tech Talks** | Service-by-service deep dives |
| **AWS re:Invent** | Annual conference talks (search by year + service) |

---

## ✅ After watching

1. List the 7 stages of the ML lifecycle and one SageMaker tool per stage.
2. When would you choose **Asynchronous** inference over Real-time?
3. What does **Model Monitor** detect, and what does **Clarify** add on top?
4. A business analyst with no Python wants to build a churn model on a CSV. What do you recommend?
5. Name 5 AWS managed AI services and the one-line job of each.

If all 5 land, you're ready for the [Quiz](./Quiz.md). If not, re-watch videos #1 and #3.
