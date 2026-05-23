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

# 🎥 Module 5 Videos: Cost Management & SLAs

> **How to use:** Pay extra attention to the composite SLA math video — that's where free points hide. The Cost Management walkthrough will visually cement the tag-based showback workflow.

## ⭐ Essential watching (~40 min)

<div class="vg-grid">
  <a class="vg-card" data-video-id="RjuTQvGm1zQ" href="https://www.youtube.com/results?search_query=John+Savill+Azure+cost+management+billing" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Azure Cost Management & Billing Master Class</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 18 min · Cost mgmt deep dive</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="ZV2bfoqFpZ8" href="https://www.youtube.com/results?search_query=Adam+Marczak+Azure+pricing+calculator+TCO" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Pricing Calculator vs TCO Calculator</p>
      <p class="vg-creator">Adam Marczak — Azure for Everyone</p>
      <span class="vg-duration">⏱ 10 min · Tell them apart</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="WuzpcMZ1UxI" href="https://www.youtube.com/results?search_query=Azure+SLA+composite+SLA+calculation" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Composite SLA Calculations Explained</p>
      <p class="vg-creator">Tim Warner / various</p>
      <span class="vg-duration">⏱ 8 min · The multiply trick</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="n5yqsjOIUfU" href="https://www.youtube.com/results?search_query=Azure+reservations+vs+savings+plans" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Azure Reservations vs Savings Plans</p>
      <p class="vg-creator">Microsoft Mechanics</p>
      <span class="vg-duration">⏱ 10 min · Which one to use</span>
    </div>
  </a>
</div>

## 📚 Recommended (~25 min)

<div class="vg-grid">
  <a class="vg-card" data-video-id="dt4LDm-ptQk" href="https://www.youtube.com/results?search_query=Azure+Hybrid+Benefit+Windows+SQL+licenses" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Azure Hybrid Benefit Walkthrough</p>
      <p class="vg-creator">Microsoft</p>
      <span class="vg-duration">⏱ 8 min · Discount with existing licenses</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="UfQgR-nLfno" href="https://www.youtube.com/results?search_query=Azure+spot+VMs+cost+savings" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Azure Spot VMs Explained</p>
      <p class="vg-creator">Adam Marczak — Azure for Everyone</p>
      <span class="vg-duration">⏱ 10 min · 90% off but evictable</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="_5N61IjdrkE" href="https://www.youtube.com/results?search_query=Azure+tags+cost+allocation+showback" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Tags + Cost Allocation Walkthrough</p>
      <p class="vg-creator">Microsoft</p>
      <span class="vg-duration">⏱ 8 min · Showback pattern</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" data-video-id="SZVcLkpjTto" href="https://www.youtube.com/results?search_query=Azure+free+account+sign+up+services" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Azure Free Account — What's Included</p>
      <p class="vg-creator">Various</p>
      <span class="vg-duration">⏱ 8 min · Free tier walkthrough</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="J4HzsmuClV0" href="https://www.youtube.com/results?search_query=Azure+service+lifecycle+preview+GA" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Azure Service Lifecycle (Preview → GA)</p>
      <p class="vg-creator">Microsoft</p>
      <span class="vg-duration">⏱ 6 min · Quick reference</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="0pwt8-J3t7U" href="https://www.youtube.com/results?search_query=Azure+budgets+alerts+cost+control" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Setting Up Azure Budgets & Alerts</p>
      <p class="vg-creator">Various</p>
      <span class="vg-duration">⏱ 10 min · Hands-on demo</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **John Savill's Technical Training** | Cost mgmt deep-dives |
| **Adam Marczak — Azure for Everyone** | Comparison videos (Pricing vs TCO etc.) |
| **Microsoft Mechanics** | Official Reservations / Savings Plans content |

---

## ✅ After watching

Answer these in your notebook:

1. Pricing Calculator vs TCO Calculator — what's each FOR?
2. What does a Budget actually do (and NOT do)?
3. Composite SLA formula for two dependent services?
4. Reservations vs Savings Plans — when each?
5. Why don't Preview services have an SLA?

If you can answer all 5, you're ready for the [Quiz](./Quiz.md).
