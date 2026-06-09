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

# 🎥 Module 8 Videos: Monitoring, Reporting & Troubleshooting

> **How to use:** Click any card to open a YouTube search. Follow along by exploring Endpoint Analytics + Troubleshooting blade in your test tenant.

## ⭐ Essential watching (~85 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Intune+Endpoint+Analytics+startup+performance+scoring" data-video-id="nSBC-a9gZ6g" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Endpoint Analytics, All 5 Categories Deep Dive</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 26 min · The fleet-performance lens</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Intune+proactive+remediations+detection+script+PowerShell" data-video-id="rvawYyVP3Lk" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Proactive Remediations, Auto-Fix at Scale</p>
      <p class="vg-creator">Peter van der Woude</p>
      <span class="vg-duration">⏱ 22 min · Detect + remediate pattern</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=MDM+diagnostics+report+Windows+11+export+troubleshooting" data-video-id="WKxlcjV4TNE" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">MDM Diagnostics Report, Your Troubleshooting First Step</p>
      <p class="vg-creator">Andy Malone MVP</p>
      <span class="vg-duration">⏱ 18 min · Built-in Windows tool</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Defender+for+Endpoint+Advanced+Hunting+KQL+queries" data-video-id="2RuZdCARUI8" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Advanced Hunting with KQL, Defender for Endpoint</p>
      <p class="vg-creator">Microsoft Security</p>
      <span class="vg-duration">⏱ 24 min · Proactive threat hunting</span>
    </div>
  </a>
</div>

## 📚 Recommended (~50 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Intune+troubleshooting+blade+helpdesk+per+user" data-video-id="PdNd-8QTC7E" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Troubleshooting + Support Blade, Helpdesk's Best Friend</p>
      <p class="vg-creator">Microsoft Mechanics</p>
      <span class="vg-duration">⏱ 16 min · Per-user diagnostic view</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Intune+remote+actions+wipe+retire+fresh+start+autopilot+reset" data-video-id="ZxodkX2Mrw0" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Wipe vs Retire vs Fresh Start vs Autopilot Reset</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 18 min · The remote action decision tree</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Intune+IME+log+troubleshooting+app+install" data-video-id="3Iou5GBdWAc" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">IME Log Diving, Win32 App Install Debugging</p>
      <p class="vg-creator">Peter van der Woude</p>
      <span class="vg-duration">⏱ 16 min · The IME log path</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Conditional+Access+sign+in+log+troubleshooting+Entra" data-video-id="YmXQcxY2RGE" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Debugging CA with the Entra Sign-In Log</p>
      <p class="vg-creator">Microsoft Security</p>
      <span class="vg-duration">⏱ 20 min · The forensic sign-in trail</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Bayer+endpoint+analytics+performance+optimization+Microsoft" data-video-id="o4RcNOf0WFQ" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Bayer, Data-Driven Endpoint Operations at Scale</p>
      <p class="vg-creator">Microsoft Mechanics</p>
      <span class="vg-duration">⏱ 18 min · The 80,000-device case study</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Autopilot+troubleshooting+enrollment+failed+error+codes" data-video-id="qsuBz1RR8to" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Autopilot Troubleshooting, Common Error Codes</p>
      <p class="vg-creator">Andy Malone MVP</p>
      <span class="vg-duration">⏱ 22 min · The error code decoder</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **John Savill's Technical Training** | Deep analytics + troubleshooting. |
| **Peter van der Woude** | Detailed Intune troubleshooting walkthroughs. |
| **Microsoft Mechanics** | Official new features + case studies. |
| **Microsoft Security** | Defender + Advanced Hunting authority. |
| **Andy Malone MVP** | Practical MD-102 prep + troubleshooting. |

---

## ✅ After watching

Answer these in your notebook (without re-watching):

1. Name the 5 Endpoint Analytics categories and what each measures.
2. Walk through the proactive remediation detect + remediate flow.
3. How do you generate an MDM Diagnostics Report on Windows 11?
4. Explain the difference between Wipe, Retire, Fresh Start, and Autopilot Reset.
5. Where would you look to debug a Conditional Access block?

If you can answer all 5, you're ready for the [Quiz](./Quiz.md). If not, re-watch the John Savill Endpoint Analytics video.

---

## 🎓 Course Complete!

You've finished all 8 modules. Next stop:

- 🧪 **[Practice-Exam-1](../Practice-Exams/Practice-Exam-1.md)**, take after Modules 1–4 (40 questions / 70 min)
- 🧪 **[Practice-Exam-2](../Practice-Exams/Practice-Exam-2.md)**, take after Modules 5–8 (50 questions / 90 min)
- 🏆 **[Final-Mock-Exam](../Practice-Exams/Final-Mock-Exam.md)**, take 2–3 days before the real exam (50 questions / 100 min)
