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

# 🎥 Module 2 Videos: Windows 11 Deployment & Imaging

> **How to use:** Click any card to open a YouTube search for that topic, pick the top current result. Watch in order; follow along in the Intune admin center if you can.

## ⭐ Essential watching (~90 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Windows+Autopilot+deep+dive+all+modes+explained" data-video-id="FJzdwiAjmG4" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Windows Autopilot Deep Dive, All 4 Modes</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 30 min · The definitive Autopilot walkthrough</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Autopilot+self+deploying+pre+provisioned+white+glove" data-video-id="hTviS9amB7I" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Self-Deploying vs Pre-Provisioned vs User-Driven</p>
      <p class="vg-creator">Microsoft Mechanics</p>
      <span class="vg-duration">⏱ 18 min · The decision matrix</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Enrollment+Status+Page+ESP+Intune+configuration" data-video-id="KVLS_zExBV0" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">ESP Configuration & Troubleshooting</p>
      <p class="vg-creator">Peter van der Woude</p>
      <span class="vg-duration">⏱ 22 min · When the ESP screen breaks</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Get-WindowsAutopilotInfo+hardware+hash+CSV+upload" data-video-id="7d62B5wobGo" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Hardware Hash Collection, Manual + OEM</p>
      <p class="vg-creator">Andy Malone MVP</p>
      <span class="vg-duration">⏱ 20 min · The on-ramp to Autopilot</span>
    </div>
  </a>
</div>

## 📚 Recommended (~50 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=provisioning+packages+Windows+Configuration+Designer" data-video-id="L3N0Qb_89Fw" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Provisioning Packages with Windows Configuration Designer</p>
      <p class="vg-creator">Microsoft Mechanics</p>
      <span class="vg-duration">⏱ 16 min · When .ppkg still beats Autopilot</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Configuration+Manager+OSD+task+sequence+Windows+11" data-video-id="Yw7g_-IiwzQ" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">ConfigMgr OSD Task Sequences for Windows 11</p>
      <p class="vg-creator">Niall Brady</p>
      <span class="vg-duration">⏱ 18 min · The on-prem deployment story</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Windows+10+to+Windows+11+in+place+upgrade+Intune" data-video-id="RIS95CrSKTo" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Windows 10 → 11 In-Place Upgrade at Scale</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 16 min · Preserve apps + data</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Autopilot+for+existing+devices+ConfigMgr+task+sequence" data-video-id="mJwS-A5EQiw" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Autopilot for Existing Devices, Migration Path</p>
      <p class="vg-creator">Peter van der Woude</p>
      <span class="vg-duration">⏱ 22 min · Rebuild old fleet into Autopilot</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=hybrid+Azure+AD+Autopilot+Intune+Connector+for+AD" data-video-id="846qK4c2AyY" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Hybrid Autopilot, The Intune Connector for AD</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 25 min · Domain join over the internet</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=MDT+Microsoft+Deployment+Toolkit+task+sequence+tutorial" data-video-id="eUIfM5RiXnQ" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">MDT Task Sequence Tutorial, Reference Image</p>
      <p class="vg-creator">Andy Malone MVP</p>
      <span class="vg-duration">⏱ 20 min · Classic on-prem imaging</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **John Savill's Technical Training** | Deep, exam-focused Microsoft cloud content. |
| **Microsoft Mechanics** | Official Microsoft channel for new features. |
| **Andy Malone MVP** | Practical MD-102 / MS-100 prep. |
| **Peter van der Woude** | Long-running Intune blog with video walkthroughs. |
| **Niall Brady** | Deep ConfigMgr + integration content. |
| **Christiaan Brinkhoff** (Microsoft) | Direct from the Microsoft engineering team. |

---

## ✅ After watching

Answer these in your notebook (without re-watching):

1. Name the four Autopilot deployment modes and one canonical use case for each.
2. What does the ESP do, and what's its default timeout?
3. Walk through the OEM Autopilot registration flow end to end.
4. When is a provisioning package the right answer over Autopilot?
5. What's the difference between Autopilot reset and in-place upgrade?

If you can answer all 5, you're ready for the [Quiz](./Quiz.md). If not, re-watch the John Savill Autopilot deep dive.
