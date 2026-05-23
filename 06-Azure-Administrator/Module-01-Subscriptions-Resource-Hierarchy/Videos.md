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

# 🎥 Module 1 Videos: Subscriptions & Resource Hierarchy

> **How to use:** Click any card to open a YouTube search for that topic — pick the top current result. Watch in order; pause to follow along in the Azure portal if you can.

## ⭐ Essential watching (~70 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=John+Savill+Azure+management+groups+subscriptions+hierarchy" target="_blank" rel="noopener" data-video-id="t-i4XrygWCc">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Azure Management Groups & Subscription Hierarchy Deep Dive</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 25 min · The definitive walkthrough</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Adam+Marczak+Azure+resource+groups+tutorial" target="_blank" rel="noopener" data-video-id="gIhf-S7BCdo">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Azure Resource Groups Explained</p>
      <p class="vg-creator">Adam Marczak — Azure for Everyone</p>
      <span class="vg-duration">⏱ 12 min · Clear, beginner-friendly</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=John+Savill+Azure+Policy+initiatives+governance" target="_blank" rel="noopener" data-video-id="eLSjnF6Crlw">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Azure Policy & Initiatives — Practical Examples</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 20 min · Inheritance + exemptions</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Tim+Warner+Azure+Cost+Management+budgets+tutorial" target="_blank" rel="noopener" data-video-id="LXLD5R1Y4Og">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Azure Cost Management + Budgets End-to-End</p>
      <p class="vg-creator">Tim Warner</p>
      <span class="vg-duration">⏱ 15 min · Budget thresholds & exports</span>
    </div>
  </a>
</div>

## 📚 Recommended (~35 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Travis+Roberts+Azure+tags+inheritance+policy" target="_blank" rel="noopener" data-video-id="wwL6VDyeftc">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Azure Tags — Inheritance, Policy & Best Practices</p>
      <p class="vg-creator">Travis Roberts</p>
      <span class="vg-duration">⏱ 10 min · Why tags don't inherit</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Inside+Cloud+and+Security+Azure+landing+zone+CAF" target="_blank" rel="noopener" data-video-id="VeqEvXwcFeo">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Azure Landing Zones (CAF Enterprise-Scale)</p>
      <p class="vg-creator">Inside Cloud and Security</p>
      <span class="vg-duration">⏱ 15 min · The reference topology</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+move+resources+between+subscriptions+tutorial" target="_blank" rel="noopener" data-video-id="6FslxGE9YJM">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">How to Move Resources Between Subscriptions</p>
      <p class="vg-creator">Microsoft Learn</p>
      <span class="vg-duration">⏱ 10 min · The validation step matters</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=John+Savill+Azure+resource+locks+CanNotDelete+ReadOnly" target="_blank" rel="noopener" data-video-id="6XVF0u9JCro">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Resource Locks Deep Dive — When ReadOnly Breaks Things</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 18 min · Gotchas you'll hit in prod</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+Reserved+Instances+Savings+Plan+comparison" target="_blank" rel="noopener" data-video-id="v8UmbdQJJ7M">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Reserved Instances vs Savings Plan vs Spot</p>
      <p class="vg-creator">Microsoft Mechanics</p>
      <span class="vg-duration">⏱ 14 min · Which to pick when</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+blueprints+deprecated+template+specs" target="_blank" rel="noopener" data-video-id="i4dEN0o1PHo">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Azure Blueprints Deprecated — What Replaces Them?</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 12 min · Template specs + Bicep</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **John Savill's Technical Training** | THE Azure channel. Long-form, technically rigorous. |
| **Adam Marczak — Azure for Everyone** | Beginner-friendly, polished animations. |
| **Tim Warner** | Practical exam-prep angle for AZ-104/AZ-305. |
| **Inside Cloud and Security** | Real-world enterprise patterns. |
| **Travis Roberts** | Short, focused how-to videos. |
| **Microsoft Mechanics** | Official Microsoft channel — high production, vendor-tinted. |

---

## ✅ After watching

Answer these in your notebook (without re-watching):

1. List the 4 levels of the Azure resource hierarchy from top to bottom.
2. What's the difference between a management group and a subscription?
3. Do tags inherit automatically from RG to resource? How do you make them inherit?
4. When would you pick `ReadOnly` vs `CanNotDelete` lock — and what breaks with ReadOnly?
5. Name three things you must check before moving a resource across subscriptions.

If you can answer all 5, you're ready for the [Quiz](./Quiz.md). If not, re-watch the John Savill hierarchy video.
