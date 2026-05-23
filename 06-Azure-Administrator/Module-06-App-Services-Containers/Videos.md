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

# 🎥 Module 6 Videos: App Services & Containers

> **How to use:** App Service slots + AKS node pools are the most-tested topics here. Don't skip the John Savill AKS overview.

## ⭐ Essential watching (~75 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=John+Savill+Azure+App+Service+architecture+plan+slots" target="_blank" rel="noopener" data-video-id="bMlkYLX4ZfQ">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Azure App Service — Architecture, Plans, Slots</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 24 min · Plan tiers compared</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Adam+Marczak+Azure+App+Service+deployment+slots" target="_blank" rel="noopener" data-video-id="LxfCMQBn9MQ">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Deployment Slots &amp; Zero-Downtime Swap</p>
      <p class="vg-creator">Adam Marczak — Azure for Everyone</p>
      <span class="vg-duration">⏱ 16 min · Sticky settings explained</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=John+Savill+AKS+Azure+Kubernetes+Service+overview" target="_blank" rel="noopener" data-video-id="NStiC50mhdc">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">AKS — Architecture Deep Dive</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 25 min · Node pools, networking, ingress</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+Container+Instances+ACI+tutorial" target="_blank" rel="noopener" data-video-id="qMzYRyHKydA">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Azure Container Instances — Tutorial</p>
      <p class="vg-creator">Tim Warner</p>
      <span class="vg-duration">⏱ 10 min · One-off containers</span>
    </div>
  </a>
</div>

## 📚 Recommended (~35 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+App+Service+VNet+integration+private+endpoint" target="_blank" rel="noopener" data-video-id="tC57bwBtkkU">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">App Service VNet Integration &amp; Private Endpoints</p>
      <p class="vg-creator">Inside Cloud and Security</p>
      <span class="vg-duration">⏱ 15 min · Standard+ vs Premium v3</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=AKS+cluster+autoscaler+horizontal+pod+autoscaler" target="_blank" rel="noopener" data-video-id="nkgqrwmvUj0">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">AKS Cluster Autoscaler vs HPA</p>
      <p class="vg-creator">Microsoft Mechanics</p>
      <span class="vg-duration">⏱ 12 min · Pods vs nodes</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+CNI+overlay+kubenet+comparison" target="_blank" rel="noopener" data-video-id="6TZsd4toIbg">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Azure CNI vs CNI Overlay vs Kubenet</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 14 min · IP address math</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+App+Service+Environment+ASE+v3+isolated" target="_blank" rel="noopener" data-video-id="mPkuKGA3lp0">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">App Service Environment v3 (Isolated)</p>
      <p class="vg-creator">Travis Roberts</p>
      <span class="vg-duration">⏱ 13 min · Single-tenant ASE</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Application+Gateway+for+Containers+AKS+ingress" target="_blank" rel="noopener" data-video-id="puPP4oNpJ-o">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Application Gateway for Containers — AGIC Successor</p>
      <p class="vg-creator">Microsoft Mechanics</p>
      <span class="vg-duration">⏱ 11 min · Modern ingress</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **John Savill's Technical Training** | AKS gold standard. |
| **Adam Marczak — Azure for Everyone** | App Service walkthroughs. |
| **Tim Warner** | ACI + exam pacing. |
| **Inside Cloud and Security** | Networking integration. |
| **Microsoft Mechanics** | Latest AKS / App Service features. |

---

## ✅ After watching

1. App Service Plan tier needed for slots? VNet integration? Private endpoint?
2. Difference between scale up and scale out?
3. ACI vs AKS — when to pick each?
4. AKS system pool vs user pool — what runs where?
5. HPA vs cluster autoscaler?

Quiz time → [Quiz](./Quiz.md)
