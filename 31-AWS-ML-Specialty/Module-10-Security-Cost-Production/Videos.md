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

# 🎥 Module 10 Videos: Security, Cost & Production

## ⭐ Essential (~70 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=SageMaker+security+VPC+KMS+IAM+best+practices" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🔐</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">SageMaker Security Best Practices</p>
      <p class="vg-creator">AWS re:Invent</p>
      <span class="vg-duration">⏱ 22 min · IAM, VPC, KMS, network isolation</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="GFakkHD9aQY" href="https://www.youtube.com/results?search_query=SageMaker+cost+optimization+spot+savings+plans" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>💰</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">SageMaker Cost Optimisation, Full Playbook</p>
      <p class="vg-creator">AWS Online Tech Talks</p>
      <span class="vg-duration">⏱ 24 min · Spot, MME, Inferentia, Savings Plans</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="fAkr-4cZrSY" href="https://www.youtube.com/results?search_query=SageMaker+VPC+endpoint+network+isolation+tutorial" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🌐</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">SageMaker VPC + Endpoints + Network Isolation</p>
      <p class="vg-creator">AWS Events</p>
      <span class="vg-duration">⏱ 16 min · No-internet training</span>
    </div>
  </a>
</div>

## 📚 Recommended (~50 min)

<div class="vg-grid">
  <a class="vg-card" data-video-id="PVnFYotwqyo" href="https://www.youtube.com/results?search_query=AWS+Macie+PII+discovery+S3+demo" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🕵️</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">AWS Macie, PII Discovery</p>
      <p class="vg-creator">AWS Online Tech Talks</p>
      <span class="vg-duration">⏱ 18 min</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="Bteba8KLeGc" href="https://www.youtube.com/results?search_query=SageMaker+Inferentia2+cost+inference+demo" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🚀</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Inferentia2, Cut Inference Cost</p>
      <p class="vg-creator">AWS Events</p>
      <span class="vg-duration">⏱ 17 min</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="-t148tYgnJU" href="https://www.youtube.com/results?search_query=Compute+Savings+Plans+vs+Reserved+Instances+ML" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>💸</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Compute Savings Plans vs RI for ML</p>
      <p class="vg-creator">Be A Better Dev</p>
      <span class="vg-duration">⏱ 15 min</span>
    </div>
  </a>
</div>

## 🍿 Optional

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Pinterest+ML+infrastructure+reinvent+talk" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>📌</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Pinterest ML Infrastructure, re:Invent</p>
      <p class="vg-creator">AWS re:Invent</p>
      <span class="vg-duration">⏱ 45 min · Real cost + security war stories</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=SageMaker+Studio+lifecycle+config+idle+auto+shutdown" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>⏰</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Studio Lifecycle Configs, Idle Auto-Shutdown</p>
      <p class="vg-creator">AWS Events</p>
      <span class="vg-duration">⏱ 14 min</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="2Bdxh9WXDX8" href="https://www.youtube.com/results?search_query=AWS+Config+rule+SageMaker+endpoint+encryption" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🛡️</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">AWS Config Rules for ML Compliance</p>
      <p class="vg-creator">AWS Events</p>
      <span class="vg-duration">⏱ 13 min</span>
    </div>
  </a>
</div>

---

## ✅ After watching

1. Sketch the no-internet training architecture from memory.
2. Top 5 cost-optimisation moves for inference?
3. CloudTrail vs Macie vs Config, when each?
4. Why does `enable_network_isolation=True` strengthen security?
5. What does the Pinterest cost + security stack look like?

➡️ [Quiz.md](./Quiz.md) → [Practice Exam 1](../Practice-Exams/Practice-Exam-1.md)
