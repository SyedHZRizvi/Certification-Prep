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

# 🎥 Module 9 Videos: Monitoring & Cost Optimization

> **How to use:** Cost questions often turn on a single keyword (Compute Optimizer, NAT vs Endpoint, etc.). Drill the cost video.

## ⭐ Essential watching (~60 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=AWS+CloudWatch+complete+tutorial" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>📊</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">CloudWatch — Metrics, Logs, Alarms, Insights</p>
      <p class="vg-creator">Stephane Maarek</p>
      <span class="vg-duration">⏱ 22 min · The full picture</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=CloudTrail+CloudWatch+Config+differences" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🔭</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">CloudTrail vs CloudWatch vs Config</p>
      <p class="vg-creator">Be A Better Dev</p>
      <span class="vg-duration">⏱ 12 min · The audit triangle</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=AWS+Cost+Explorer+Budgets+tutorial" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>💸</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Cost Explorer, Budgets, Cost Anomaly Detection</p>
      <p class="vg-creator">Tutorials Dojo</p>
      <span class="vg-duration">⏱ 14 min · Cost management toolkit</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=AWS+Compute+Optimizer+Trusted+Advisor" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎯</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Compute Optimizer + Trusted Advisor</p>
      <p class="vg-creator">ExamPro</p>
      <span class="vg-duration">⏱ 12 min · Rightsizing & best practices</span>
    </div>
  </a>
</div>

## 📚 Recommended (~30 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=AWS+GuardDuty+Macie+Inspector+Security+Hub" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🛡️</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">GuardDuty, Macie, Inspector, Security Hub</p>
      <p class="vg-creator">Stephane Maarek</p>
      <span class="vg-duration">⏱ 14 min · Detection stack</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=AWS+X-Ray+distributed+tracing+demo" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🔬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">X-Ray Distributed Tracing</p>
      <p class="vg-creator">Be A Better Dev</p>
      <span class="vg-duration">⏱ 13 min · Find latency bottlenecks</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=AWS+Config+rules+remediation" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>⚙️</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">AWS Config Rules + Auto-Remediation</p>
      <p class="vg-creator">freeCodeCamp</p>
      <span class="vg-duration">⏱ 13 min · Compliance as code</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=AWS+cost+optimization+best+practices" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>📉</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Cost Optimization Patterns</p>
      <p class="vg-creator">AWS re:Invent</p>
      <span class="vg-duration">⏱ 45 min · Real customer stories</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=CloudWatch+agent+EC2+memory+disk" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🤖</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">CloudWatch Agent — Memory & Disk Metrics</p>
      <p class="vg-creator">AWS Training</p>
      <span class="vg-duration">⏱ 11 min · Common gotcha</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=AWS+tagging+strategy+cost+allocation" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🏷️</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Tagging Strategy for Cost Allocation</p>
      <p class="vg-creator">ExamPro</p>
      <span class="vg-duration">⏱ 12 min · Org-wide consistency</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels

| Channel | Why |
|---------|-----|
| **Stephane Maarek** | Best CloudWatch + Security services |
| **Be A Better Dev** | Audit triangle clarity |
| **Tutorials Dojo** | Cost management quizzes |
| **AWS re:Invent** | Real cost case studies |

---

## ✅ After watching

1. CloudTrail vs CloudWatch Logs vs Config?
2. Is EC2 memory a default CloudWatch metric?
3. Compute Optimizer pricing?
4. GuardDuty input sources?
5. Macie vs Inspector?

Ready? [Quiz](./Quiz.md).
