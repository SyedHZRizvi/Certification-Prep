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

# 🎥 Module 7 Videos: Management, Monitoring & Pricing

> **How to use:** Pay extra attention to the Support Plans video — it's the single hardest thing to memorize in CLF-C02, and it shows up 3-4 times on the exam.

## ⭐ Essential watching (~45 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=AWS+Support+Plans+Basic+Developer+Business+Enterprise+comparison" data-video-id="QMpuhdzMF9E" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">AWS Support Plans — The Memorization Drill</p>
      <p class="vg-creator">Stephane Maarek</p>
      <span class="vg-duration">⏱ 10 min · MUST KNOW for exam</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=CloudWatch+vs+CloudTrail+vs+Config+AWS" data-video-id="4LQYpp9bmKk" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">CloudWatch vs CloudTrail vs Config — Don't Confuse Them</p>
      <p class="vg-creator">Be A Better Dev</p>
      <span class="vg-duration">⏱ 11 min · The classic trio</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=AWS+Budgets+Cost+Explorer+Pricing+Calculator+tutorial" data-video-id="QT9dyU8BWcY" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Budgets, Cost Explorer, Pricing Calculator — Cost Tools</p>
      <p class="vg-creator">ExamPro</p>
      <span class="vg-duration">⏱ 13 min · Don't get a surprise bill</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=AWS+Trusted+Advisor+5+categories+demo" data-video-id="QEsBN9X2DKU" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Trusted Advisor — All 5 Categories Explained</p>
      <p class="vg-creator">Tutorials Dojo</p>
      <span class="vg-duration">⏱ 9 min · Best-practice scoring</span>
    </div>
  </a>
</div>

## 📚 Recommended (~25 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=AWS+Systems+Manager+Session+Manager+Parameter+Store" data-video-id="SDvpLBDoXkc" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Systems Manager — Session Manager, Parameter Store, Patch Mgr</p>
      <p class="vg-creator">Be A Better Dev</p>
      <span class="vg-duration">⏱ 12 min · Ops Swiss Army knife</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=AWS+data+transfer+costs+explained" data-video-id="YpmUwaqKT9E" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">AWS Data Transfer Costs — The Hidden Bill</p>
      <p class="vg-creator">freeCodeCamp.org</p>
      <span class="vg-duration">⏱ 10 min · #1 cost surprise</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=AWS+Compute+Optimizer+right-sizing+demo" data-video-id="r4yor_KFiXc" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Compute Optimizer — ML Right-Sizing</p>
      <p class="vg-creator">AWS Training and Certification</p>
      <span class="vg-duration">⏱ 8 min · Saves real money</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=AWS+Cost+and+Usage+Report+CUR+S3+Athena+analysis" data-video-id="KEeJEZTYE8E" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Analyzing CUR with Athena — Finops Workflow</p>
      <p class="vg-creator">AWS re:Invent</p>
      <span class="vg-duration">⏱ 30 min · Power users</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=AWS+QuickSight+dashboards+for+executives" data-video-id="rxyLC247h6E" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">QuickSight — Serverless BI for AWS</p>
      <p class="vg-creator">Tutorials Dojo</p>
      <span class="vg-duration">⏱ 12 min · BI dashboards</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **Stephane Maarek** | Cleanest Support-plan explainer anywhere |
| **Be A Better Dev** | CW/CT/Config disambiguation gold |
| **ExamPro** | Free CLF course; great pricing chapters |
| **Tutorials Dojo** | Cheat-sheet style coverage |
| **freeCodeCamp.org** | Long-form finops + cost content |

---

## ✅ After watching

1. The 5 Support plans + their headline response times?
2. CloudWatch vs CloudTrail vs Config — one line each.
3. Trusted Advisor's 5 categories?
4. When do you use Pricing Calculator vs Cost Explorer?
5. Why is data transfer OUT expensive but IN free?

If you can answer all 5, you're ready for the [Quiz](./Quiz.md).
