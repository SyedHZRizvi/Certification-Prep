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

# 🎥 Module 6 Videos: Inventory Management

> **How to use:** Inventory is heavy on formulas. Pause every video that shows a calculation and re-derive on paper. Don't skip EOQ derivation — many CPIM questions probe assumptions.

## ⭐ Essential watching (~60 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=EOQ+Economic+Order+Quantity+derivation" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">EOQ Derivation &amp; Worked Example</p>
      <p class="vg-creator">MIT OCW Operations Management</p>
      <span class="vg-duration">⏱ 16 min · The classic derivation</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Reorder+Point+Safety+Stock+service+level" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Reorder Point &amp; Safety Stock</p>
      <p class="vg-creator">Education Edge</p>
      <span class="vg-duration">⏱ 14 min · z-values and σ_LT</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=ABC+analysis+inventory+Pareto" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">ABC Analysis &amp; Pareto in Inventory</p>
      <p class="vg-creator">GreyCampus</p>
      <span class="vg-duration">⏱ 12 min · 80/20 in inventory</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Cycle+counting+IRA+inventory+accuracy" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Cycle Counting &amp; Inventory Accuracy</p>
      <p class="vg-creator">ASCM</p>
      <span class="vg-duration">⏱ 18 min · The IRA target</span>
    </div>
  </a>
</div>

## 📚 Recommended (~32 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=EPQ+Economic+Production+Quantity+formula" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">EPQ — Economic Production Quantity</p>
      <p class="vg-creator">Education Edge</p>
      <span class="vg-duration">⏱ 10 min · Production vs purchase</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Inventory+Turnover+Days+Supply+calculation" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Inventory Turnover &amp; Days of Supply</p>
      <p class="vg-creator">Caltech</p>
      <span class="vg-duration">⏱ 10 min · KPI math</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Vendor+Managed+Inventory+VMI+supply+chain" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">VMI &amp; Consignment Inventory</p>
      <p class="vg-creator">freeCodeCamp Manufacturing</p>
      <span class="vg-duration">⏱ 12 min · Who owns what?</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Quantity+Discount+EOQ+model" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">EOQ With Quantity Discounts</p>
      <p class="vg-creator">MIT OCW</p>
      <span class="vg-duration">⏱ 22 min · Price-break model</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=ABC+XYZ+matrix+inventory+classification" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">ABC × XYZ Matrix for Inventory Strategy</p>
      <p class="vg-creator">Caltech</p>
      <span class="vg-duration">⏱ 16 min · The 9-cell view</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=FIFO+LIFO+weighted+average+inventory+valuation" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">FIFO vs LIFO vs Weighted Avg</p>
      <p class="vg-creator">Education Edge</p>
      <span class="vg-duration">⏱ 14 min · Valuation methods</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **ASCM** | Official |
| **Education Edge** | Best CPIM-style walkthroughs |
| **GreyCampus** | ABC + EOQ practice |
| **MIT OCW Operations Management** | Theory + derivations |
| **Caltech** | Quantitative depth |
| **freeCodeCamp Manufacturing** | Beginner-friendly |

---

## ✅ After watching

1. Compute EOQ: D = 5,000, S = $40, H = $4/unit/yr → ?
2. Compute ROP: d = 100/day, LT = 5 days, SS = 200 → ?
3. Compute SS: σ = 20/day, LT = 16 days, 95% service → ?
4. What's the cycle-count frequency for an A item?
5. Inventory turnover = 10. Days of supply = ?
