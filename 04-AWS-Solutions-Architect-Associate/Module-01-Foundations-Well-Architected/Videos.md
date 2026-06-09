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

# 🎥 Module 1 Videos: AWS Foundations & Well-Architected

> **How to use:** Click any card to search YouTube for the topic, top result is usually the freshest take. Watch in order, pause to take notes, then come back to the Quiz.

## ⭐ Essential watching (~55 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" data-video-id="BxHaLBRZWyc" href="https://www.youtube.com/results?search_query=AWS+Global+Infrastructure+Stephane+Maarek" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🌍</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">AWS Global Infrastructure Explained</p>
      <p class="vg-creator">Stephane Maarek</p>
      <span class="vg-duration">⏱ 10 min · Regions, AZs, edge locations</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="o4NYjMPZPZE" href="https://www.youtube.com/results?search_query=AWS+Well-Architected+Framework+6+pillars+ExamPro" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🏛️</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Well-Architected Framework, 6 Pillars</p>
      <p class="vg-creator">ExamPro / Andrew Brown</p>
      <span class="vg-duration">⏱ 20 min · Pillar-by-pillar walk-through</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="ESPBBEK-cvo" href="https://www.youtube.com/results?search_query=AWS+Shared+Responsibility+Model+explained" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🤝</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">AWS Shared Responsibility Model</p>
      <p class="vg-creator">AWS Training and Certification</p>
      <span class="vg-duration">⏱ 12 min · Where the line moves</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="6kJ0JhnptlQ" href="https://www.youtube.com/results?search_query=SAA-C03+exam+overview+Tutorials+Dojo" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>📝</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">SAA-C03 Exam Format Walkthrough</p>
      <p class="vg-creator">Tutorials Dojo</p>
      <span class="vg-duration">⏱ 14 min · How questions are structured</span>
    </div>
  </a>
</div>

## 📚 Recommended (~35 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" data-video-id="Ia-UEYYR44s" href="https://www.youtube.com/results?search_query=AWS+regions+AZs+edge+locations+Be+A+Better+Dev" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🗺️</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">How to Pick an AWS Region</p>
      <p class="vg-creator">Be A Better Dev</p>
      <span class="vg-duration">⏱ 12 min · Cost, latency, compliance</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="_SbDJvHreLM" href="https://www.youtube.com/results?search_query=AWS+IaaS+PaaS+SaaS+Serverless+freeCodeCamp" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🧱</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">IaaS vs PaaS vs SaaS vs Serverless</p>
      <p class="vg-creator">freeCodeCamp</p>
      <span class="vg-duration">⏱ 13 min · Where AWS services fit</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="7ZNLIIhFflY" href="https://www.youtube.com/results?search_query=AWS+pricing+fundamentals+Stephane+Maarek" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>💵</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">AWS Pricing Fundamentals</p>
      <p class="vg-creator">Stephane Maarek</p>
      <span class="vg-duration">⏱ 10 min · Compute, storage, egress</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid" markdown="0">
  <a class="vg-card" data-video-id="UXtZCoE9qfQ" href="https://www.youtube.com/results?search_query=AWS+re%3AInvent+Well-Architected+Framework+session" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎤</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">re:Invent, Well-Architected Deep Dive</p>
      <p class="vg-creator">AWS Events</p>
      <span class="vg-duration">⏱ 60 min · Real customer architectures</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="pzSvcsduijM" href="https://www.youtube.com/results?search_query=AWS+sustainability+pillar+Graviton" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🌱</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Sustainability Pillar Deep Dive (Graviton)</p>
      <p class="vg-creator">AWS</p>
      <span class="vg-duration">⏱ 25 min · The newest pillar</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="FRQ9fE4fd5g" href="https://www.youtube.com/results?search_query=AWS+account+setup+best+practices+MFA+root" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🔐</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">New AWS Account Setup Best Practices</p>
      <p class="vg-creator">NetworkChuck / ExamPro</p>
      <span class="vg-duration">⏱ 18 min · Day-1 hardening</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **Stephane Maarek** | Best-selling Udemy AWS courses; YouTube extras are gold |
| **Tutorials Dojo (Jon Bonso)** | Best practice tests in the industry; YouTube clips reinforce them |
| **ExamPro (Andrew Brown)** | Long-form free SAA course on YouTube |
| **freeCodeCamp** | 10-hour AWS courses, completely free |
| **Be A Better Dev** | Short, animated explainers of single services |
| **AWS Training and Certification** | Official source, purest content |

---

## ✅ After watching

Answer these in your notebook (without re-watching):

1. What's the difference between an Availability Zone and a data center?
2. Name the 6 pillars of the Well-Architected Framework, and one keyword each.
3. On EC2, who is responsible for OS patching, you or AWS? What about on RDS?
4. Which is more resilient: Multi-AZ or Multi-Region? And which is more expensive?
5. What are the three main cost drivers on AWS?

If you can answer all 5, you're ready for the [Quiz](./Quiz.md). If not, re-watch the "Global Infrastructure" and "Well-Architected" videos.
