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

# 🎥 Module 3 Videos: Core Azure Services

> **How to use:** This is the BIGGEST module. Watch the Essential set carefully, they'll save you on service-picker questions. Take notes per service.

## ⭐ Essential watching (~70 min)

<div class="vg-grid">
  <a class="vg-card" data-video-id="yKDSAYDLGrI" href="https://www.youtube.com/results?search_query=John+Savill+AZ-900+core+services+compute+networking+storage" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">AZ-900 Core Services Master Class</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 25 min · One-shot tour</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="inaXkN2UrFE" href="https://www.youtube.com/results?search_query=Adam+Marczak+Azure+compute+services+comparison" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Azure Compute Services Compared (VM, App Service, ACI, AKS, Functions)</p>
      <p class="vg-creator">Adam Marczak, Azure for Everyone</p>
      <span class="vg-duration">⏱ 15 min · The 5-way comparison you NEED</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="_Qlkvd4ZQuo" href="https://www.youtube.com/results?search_query=Adam+Marczak+Azure+storage+blob+files+queue+table" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Azure Storage Services, Blob, Files, Queue, Table</p>
      <p class="vg-creator">Adam Marczak, Azure for Everyone</p>
      <span class="vg-duration">⏱ 15 min · All four explained</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="aNK0C9Oj2sg" href="https://www.youtube.com/results?search_query=John+Savill+Azure+VNet+ExpressRoute+VPN" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">VNet, VPN Gateway & ExpressRoute Explained</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 15 min · Hybrid connectivity</span>
    </div>
  </a>
</div>

## 📚 Recommended (~40 min)

<div class="vg-grid">
  <a class="vg-card" data-video-id="RqD4nMyBazU" href="https://www.youtube.com/results?search_query=Adam+Marczak+Azure+SQL+vs+Cosmos+DB" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Azure SQL vs Cosmos DB, When To Use Each</p>
      <p class="vg-creator">Adam Marczak, Azure for Everyone</p>
      <span class="vg-duration">⏱ 12 min · Database picker</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="A8ALdExHub0" href="https://www.youtube.com/results?search_query=Microsoft+Mechanics+Azure+Front+Door+Application+Gateway+Load+Balancer" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Front Door vs App Gateway vs Load Balancer</p>
      <p class="vg-creator">Microsoft Mechanics</p>
      <span class="vg-duration">⏱ 14 min · Untangles L4 vs L7 + global</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="sxa8NihIi9M" href="https://www.youtube.com/results?search_query=Azure+blob+storage+access+tiers+hot+cool+archive" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Blob Storage Access Tiers (Hot/Cool/Cold/Archive)</p>
      <p class="vg-creator">Microsoft / various</p>
      <span class="vg-duration">⏱ 10 min · Pricing trap-avoidance</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" data-video-id="ba0reoJLIdA" href="https://www.youtube.com/results?search_query=Azure+Kubernetes+Service+AKS+for+beginners" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">AKS for Beginners</p>
      <p class="vg-creator">Microsoft Learn / NetworkChuck</p>
      <span class="vg-duration">⏱ 20 min · Containers at scale</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="aPEibGMvxZw" href="https://www.youtube.com/results?search_query=Azure+Virtual+Desktop+AVD+overview" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Azure Virtual Desktop Overview</p>
      <p class="vg-creator">Microsoft Mechanics</p>
      <span class="vg-duration">⏱ 12 min · DaaS in Azure</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="ansa4M7iTmg" href="https://www.youtube.com/results?search_query=Azure+Functions+serverless+tutorial" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Azure Functions Serverless Basics</p>
      <p class="vg-creator">Adam Marczak, Azure for Everyone</p>
      <span class="vg-duration">⏱ 15 min · Event-driven code</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **John Savill's Technical Training** | The deep-dive king |
| **Adam Marczak, Azure for Everyone** | Cleanest service comparisons |
| **Microsoft Mechanics** | Official, current, well-produced |
| **Microsoft Learn** | Authoritative |
| **NetworkChuck** | Fun intros for complex topics |

---

## ✅ After watching

Answer these in your notebook:

1. When would you pick App Service vs a VM?
2. What's the single biggest difference between AKS and ACI?
3. VPN Gateway vs ExpressRoute, give the one-sentence pick rule for each.
4. List the four blob access tiers in order of how often you'd access the data.
5. Cosmos DB vs Azure SQL Database, when would you pick each?
6. What does GRS do that ZRS doesn't?

If you can answer all 6, you're ready for the [Quiz](./Quiz.md) and [Practice Exam 1](../Practice-Exams/Practice-Exam-1.md).
