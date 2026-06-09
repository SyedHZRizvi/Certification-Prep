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

# 🎥 Module 5 Videos: Application Deployment & Configuration

> **How to use:** Click any card to open a YouTube search. Follow along by packaging a test Win32 app yourself.

## ⭐ Essential watching (~85 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Intune+Win32+app+packaging+IntuneWinAppUtil+detection+rule" data-video-id="yILrSTjYQQs" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Win32 App Packaging End-to-End</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 28 min · The full packaging walkthrough</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Intune+detection+rule+PowerShell+script+Win32" data-video-id="RxjTYNd8gEk" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Detection Rules, File, Registry, PowerShell</p>
      <p class="vg-creator">Peter van der Woude</p>
      <span class="vg-duration">⏱ 22 min · The most failure-prone step</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Intune+Win32+app+dependencies+supersedence" data-video-id="uImOeXoa_Dw" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Dependencies vs Supersedence, When to Use Each</p>
      <p class="vg-creator">Andy Malone MVP</p>
      <span class="vg-duration">⏱ 18 min · Upgrade chains demystified</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=MSIX+modern+app+packaging+Microsoft+Windows" data-video-id="BfEsChXXht4" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">MSIX, The Modern Windows App Format</p>
      <p class="vg-creator">Microsoft Mechanics</p>
      <span class="vg-duration">⏱ 17 min · Why MSIX beats MSI</span>
    </div>
  </a>
</div>

## 📚 Recommended (~50 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Intune+app+configuration+policy+ACP+Outlook+mobile" data-video-id="6-RLhj2DlGU" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">App Configuration Policies, Pushing App Settings</p>
      <p class="vg-creator">Microsoft Mechanics</p>
      <span class="vg-duration">⏱ 16 min · Per-app config without users</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Managed+Google+Play+Android+Enterprise+Intune+apps" data-video-id="ziJGn2mH0rg" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Managed Google Play, Android App Deployment</p>
      <p class="vg-creator">Peter van der Woude</p>
      <span class="vg-duration">⏱ 18 min · The Android app channel</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Apple+VPP+volume+purchase+program+iOS+apps+Intune" data-video-id="RkYNCj1foHg" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Apple VPP, Bulk iOS App Licensing</p>
      <p class="vg-creator">Andy Malone MVP</p>
      <span class="vg-duration">⏱ 15 min · Device vs user token</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Intune+Microsoft+365+Apps+template+deployment+Outlook+Office" data-video-id="HuNyvP8Rmg8" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Microsoft 365 Apps Template Deployment</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 18 min · The Office Click-to-Run shortcut</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Intune+app+stuck+installing+troubleshooting+detection" data-video-id="M--0Qdk9oWQ" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">App Stuck Installing, Troubleshooting Detection</p>
      <p class="vg-creator">Peter van der Woude</p>
      <span class="vg-duration">⏱ 16 min · The helpdesk's #1 ticket</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Intune+macOS+app+deployment+PKG+DMG+shell+script" data-video-id="E3uLAQacE5s" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">macOS App Deployment, PKG, DMG, Shell Script</p>
      <p class="vg-creator">Microsoft Mechanics</p>
      <span class="vg-duration">⏱ 20 min · The Mac app story</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **John Savill's Technical Training** | Deep packaging + Win32 content. |
| **Peter van der Woude** | Detection + troubleshooting authority. |
| **Andy Malone MVP** | MD-102 prep focus. |
| **Microsoft Mechanics** | Official new feature rollouts. |
| **Niall Brady** | App + ConfigMgr legacy bridge. |

---

## ✅ After watching

Answer these in your notebook (without re-watching):

1. Walk through the IntuneWinAppUtil packaging flow.
2. Name the 4 detection rule types and when each applies.
3. Explain dependencies vs supersedence and their respective limits.
4. Why is MSIX better than MSI for in-house apps?
5. What's the difference between ACP managed devices and managed apps channel?

If you can answer all 5, you're ready for the [Quiz](./Quiz.md). If not, re-watch the John Savill Win32 video.
