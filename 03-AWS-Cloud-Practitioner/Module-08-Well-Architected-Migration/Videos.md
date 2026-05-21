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

# 🎥 Module 8 Videos: Well-Architected & Migration

> **How to use:** Drill the 6 pillars and 6 Rs until you can recite them in order. After watching, write the pillars on a sticky note before your exam day.

## ⭐ Essential watching (~40 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=AWS+Well-Architected+Framework+6+pillars+explained" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Well-Architected Framework — All 6 Pillars Explained</p>
      <p class="vg-creator">Stephane Maarek</p>
      <span class="vg-duration">⏱ 12 min · MEMORIZE the pillars</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=6+Rs+of+migration+AWS+Rehost+Replatform+Refactor" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">The 6 Rs of Cloud Migration</p>
      <p class="vg-creator">ExamPro</p>
      <span class="vg-duration">⏱ 10 min · MEMORIZE</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=AWS+Cloud+Adoption+Framework+CAF+perspectives" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">AWS Cloud Adoption Framework — 6 Perspectives</p>
      <p class="vg-creator">AWS Training and Certification</p>
      <span class="vg-duration">⏱ 9 min · Enterprise transformation</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=AWS+migration+services+MGN+DMS+DataSync+overview" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">MGN vs DMS vs DataSync — Migration Services</p>
      <p class="vg-creator">Be A Better Dev</p>
      <span class="vg-duration">⏱ 11 min · Tool selection</span>
    </div>
  </a>
</div>

## 📚 Recommended (~25 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=AWS+Well+Architected+Tool+demo+self+assessment" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Well-Architected Tool — Live Self-Assessment</p>
      <p class="vg-creator">AWS Training and Certification</p>
      <span class="vg-duration">⏱ 12 min · Hands-on</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=AWS+Partner+Network+APN+tiers+competencies" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">AWS Partner Network — Tiers + Competencies</p>
      <p class="vg-creator">Tutorials Dojo</p>
      <span class="vg-duration">⏱ 7 min · Lightly tested</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=AWS+sustainability+pillar+well+architected" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">The Sustainability Pillar Deep Dive</p>
      <p class="vg-creator">AWS re:Invent</p>
      <span class="vg-duration">⏱ 18 min · The newest pillar</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=AWS+enterprise+cloud+migration+case+study" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Enterprise Migration Case Study — Lessons Learned</p>
      <p class="vg-creator">AWS re:Invent</p>
      <span class="vg-duration">⏱ 50 min · Real-world story</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=AWS+certification+path+roadmap+2025" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">After CLF — Your AWS Certification Roadmap</p>
      <p class="vg-creator">Stephane Maarek</p>
      <span class="vg-duration">⏱ 8 min · What's next?</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **Stephane Maarek** | Best Well-Architected coverage |
| **ExamPro** | Strong 6 Rs explainer |
| **Be A Better Dev** | Migration services disambiguation |
| **AWS Training and Certification** | Official CAF/Well-Architected |
| **AWS re:Invent** | Real-world stories |

---

## ✅ After watching

1. Name the 6 pillars of Well-Architected in order.
2. The 6 Rs of migration — match each to a one-sentence scenario.
3. CAF's 6 perspectives — list them.
4. MGN vs DMS vs DataSync — when to use each?
5. What's the difference between APN Consulting and Technology partners?

If you can answer all 5, you're ready for the [Quiz](./Quiz.md) and the Practice Exams!
