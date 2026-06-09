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

# 🎥 Module 10 Videos: PowerShell, DSC & Automation

> **How to use:** Click any card to search YouTube for the latest top result. Automation is the thread through both exams, heavily tested via drag-drop "complete this command" items.

## ⭐ Essential watching (~95 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=PowerShell+7+vs+5.1+differences+migration" data-video-id="kWCqv0GKfaM" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">PowerShell 7 vs 5.1, Differences</p>
      <p class="vg-creator">Andy Malone MVP</p>
      <span class="vg-duration">⏱ 20 min · powershell.exe vs pwsh.exe</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=PowerShell+remoting+WinRM+Invoke-Command+tutorial" data-video-id="1vUs_EO1AN4" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">PowerShell Remoting, WinRM Deep Dive</p>
      <p class="vg-creator">Server Academy</p>
      <span class="vg-duration">⏱ 22 min · 5985/5986, sessions</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Just+Enough+Administration+JEA+walkthrough+PowerShell" data-video-id="MKzDUkshF0g" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">JEA, Constrained Admin Endpoints</p>
      <p class="vg-creator">Microsoft Mechanics</p>
      <span class="vg-duration">⏱ 25 min · psrc / pssc / virtual accounts</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Desired+State+Configuration+DSC+walkthrough+Windows" data-video-id="RPywQaSMtUo" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">DSC, Declarative Config</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 28 min · MOF, LCM, Push vs Pull</span>
    </div>
  </a>
</div>

## 📚 Recommended (~55 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+Machine+Configuration+guest+config+walkthrough" data-video-id="75MTIftSEfk" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Azure Machine Configuration (DSC v3)</p>
      <p class="vg-creator">Inside Cloud and Security</p>
      <span class="vg-duration">⏱ 22 min · Replaces Automation DSC</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+Automation+runbook+tutorial+managed+identity" data-video-id="kQFEFZyG-k8" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Azure Automation Runbooks</p>
      <p class="vg-creator">Travis Roberts</p>
      <span class="vg-duration">⏱ 18 min · Schedule + MI auth</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+Automanage+VM+best+practices+walkthrough" data-video-id="ciDCeX6i4_A" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Azure Automanage, One-Click Best Practices</p>
      <p class="vg-creator">Microsoft Mechanics</p>
      <span class="vg-duration">⏱ 14 min · Production vs Dev/Test</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Hybrid+Runbook+Worker+Azure+Automation+install" data-video-id="nlwoQBo8JTI" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Hybrid Runbook Worker, On-Prem Execution</p>
      <p class="vg-creator">Travis Roberts</p>
      <span class="vg-duration">⏱ 16 min · Arc-based modern path</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=PowerShell+SSH+remoting+Linux+cross+platform" data-video-id="DGRgTAAQe-k" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">PowerShell SSH Remoting, Cross-Platform</p>
      <p class="vg-creator">PSStudio</p>
      <span class="vg-duration">⏱ 14 min · PS 7 to Linux</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=infrastructure+as+code+terraform+DSC+windows+server" data-video-id="wU530ndka0c" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">IaC for Windows, Terraform + DSC</p>
      <p class="vg-creator">HashiCorp Channel</p>
      <span class="vg-duration">⏱ 22 min · Modern config-as-code</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **John Savill's Technical Training** | DSC + Automation deep dives |
| **Microsoft Mechanics** | Official PowerShell + JEA walkthroughs |
| **Andy Malone MVP** | Practical PS 7 vs 5.1 |
| **Inside Cloud and Security** | Machine Configuration / guest config |
| **PowerShell Team Channel** | Official feature announcements |

---

## ✅ After watching

Answer these in your notebook:

1. PowerShell 5.1 vs 7, pick three differences?
2. WinRM ports for PSRemoting?
3. JEA components Role Capability File, Session Configuration File, Virtual Account what does each do?
4. DSC Push vs Pull, when each?
5. What replaced Azure Automation DSC in 2023?
6. Azure Automanage profiles, Production vs Dev/Test?

If you can answer all 6, you're ready for the [Quiz](./Quiz.md) and then the [Practice Exams](../../../Practice-Exams/).
