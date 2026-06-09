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

# 🎥 Module 4 Videos: Device Enrollment & Compliance

> **How to use:** Click any card to open a YouTube search. Pause and click through the Intune enrollment + CA portals.

## ⭐ Essential watching (~90 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Apple+Business+Manager+ABM+Intune+iOS+enrollment+ADE" data-video-id="GrSaEcbyGh8" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Apple Business Manager + ADE → Intune Enrollment</p>
      <p class="vg-creator">Andy Malone MVP</p>
      <span class="vg-duration">⏱ 24 min · The zero-touch iOS flow</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Android+Enterprise+four+enrollment+scenarios+Intune" data-video-id="Es8iMdSKL9M" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Android Enterprise, BYOD vs COPE vs Fully Managed vs Dedicated</p>
      <p class="vg-creator">Peter van der Woude</p>
      <span class="vg-duration">⏱ 22 min · All 4 scenarios demoed</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Intune+compliance+policy+Conditional+Access+device+state" data-video-id="jBjiy5niRlw" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Compliance + Conditional Access, How They Connect</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 26 min · The full enforcement chain</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Conditional+Access+report+only+mode+testing+policy" data-video-id="NZbPYfhb5Kc" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Conditional Access Report-Only Mode, Safe Rollout</p>
      <p class="vg-creator">Microsoft Security</p>
      <span class="vg-duration">⏱ 18 min · How to test before enforcing</span>
    </div>
  </a>
</div>

## 📚 Recommended (~55 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Intune+enrollment+restrictions+block+jailbroken+rooted" data-video-id="KPwJjSxCi3U" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Enrollment Restrictions, Blocking Bad Devices</p>
      <p class="vg-creator">Microsoft Mechanics</p>
      <span class="vg-duration">⏱ 16 min · Jailbreak, OS version, manufacturer</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=CA+filter+for+devices+device+attribute+targeting" data-video-id="HU9_JWUIAhs" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">CA Filter for Devices, Attribute-Based Targeting</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 20 min · When to use vs dynamic group</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Windows+11+device+health+attestation+TPM+compliance" data-video-id="EDBRoRh9EX4" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Windows 11 Device Health Attestation Explained</p>
      <p class="vg-creator">Microsoft Mechanics</p>
      <span class="vg-duration">⏱ 17 min · Hardware-rooted trust</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Knox+Mobile+Enrollment+Samsung+Intune+integration" data-video-id="M1yuzK-Q57g" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Knox Mobile Enrollment for Samsung Fleets</p>
      <p class="vg-creator">Andy Malone MVP</p>
      <span class="vg-duration">⏱ 18 min · Bulk Android corporate</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Apple+VPP+volume+purchase+program+Intune+iOS+apps" data-video-id="RkYNCj1foHg" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Apple VPP, Bulk iOS App Licensing via ABM</p>
      <p class="vg-creator">Peter van der Woude</p>
      <span class="vg-duration">⏱ 20 min · Device vs user token</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Conditional+Access+break+glass+account+best+practices" data-video-id="8kVcginLQiE" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">CA Break-Glass Accounts, The Lockout Insurance</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 16 min · Why you need at least two</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **John Savill's Technical Training** | Deep CA + Intune content. |
| **Microsoft Security** | Official source for CA + Identity Protection. |
| **Peter van der Woude** | Detailed enrollment + compliance walkthroughs. |
| **Andy Malone MVP** | Practical MD-102 prep. |
| **Microsoft Mechanics** | Official new-feature rollouts. |
| **Cloud Architects** | Real-world CA patterns. |

---

## ✅ After watching

Answer these in your notebook (without re-watching):

1. Walk through the ABM + ADE enrollment flow end to end.
2. Name the 4 Android Enterprise scenarios and one use case each.
3. Explain the difference between compliance flag and CA enforcement.
4. Why is report-only mode essential before enabling a CA policy?
5. Why must break-glass accounts be excluded from CA?

If you can answer all 5, you're ready for the [Quiz](./Quiz.md). If not, re-watch John Savill's compliance + CA video.
