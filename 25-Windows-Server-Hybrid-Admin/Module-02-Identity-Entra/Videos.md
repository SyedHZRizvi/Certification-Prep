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

# 🎥 Module 2 Videos: Identity & Entra ID Hybrid Integration

> **How to use:** Click any card to search YouTube for the latest top result. Hybrid identity bridges AZ-800 and AZ-801 — at least 10% of total exam weight.

## ⭐ Essential watching (~90 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=John+Savill+Entra+Connect+vs+Cloud+Sync+comparison" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Entra Connect vs Cloud Sync — Which to Choose</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 28 min · The definitive comparison</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Mechanics+Password+Hash+Sync+PHS+PTA+Federation" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">PHS vs PTA vs Federation Explained</p>
      <p class="vg-creator">Microsoft Mechanics</p>
      <span class="vg-duration">⏱ 20 min · Sign-in methods deep dive</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Andy+Malone+Hybrid+Azure+AD+Join+device+walkthrough" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Hybrid Entra Join — End to End</p>
      <p class="vg-creator">Andy Malone MVP</p>
      <span class="vg-duration">⏱ 25 min · Device join states</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Seamless+SSO+Azure+AD+SSSO+tutorial+walkthrough" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Seamless SSO — How Kerberos Powers It</p>
      <p class="vg-creator">Travis Roberts</p>
      <span class="vg-duration">⏱ 18 min · AZUREADSSOACC account</span>
    </div>
  </a>
</div>

## 📚 Recommended (~55 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Entra+Domain+Services+managed+domain+Azure+walkthrough" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Entra Domain Services — Managed AD in Azure</p>
      <p class="vg-creator">Inside Cloud and Security</p>
      <span class="vg-duration">⏱ 15 min · Legacy app lift-and-shift</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+passwordless+FIDO2+Authenticator+passkey+rollout" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Passwordless Rollout — FIDO2 & Passkeys</p>
      <p class="vg-creator">Microsoft Mechanics</p>
      <span class="vg-duration">⏱ 18 min · 2024+ recommended</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Continuous+Access+Evaluation+CAE+Entra+ID+how+it+works" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Continuous Access Evaluation (CAE)</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 16 min · Post-Storm-0558 control</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=AD+FS+migration+to+cloud+authentication+staged+rollout" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Migrating Off AD FS to Cloud Auth</p>
      <p class="vg-creator">ITProTV / ACI Learning</p>
      <span class="vg-duration">⏱ 22 min · Staged migration</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Storm-0558+Microsoft+token+signing+key+post+mortem" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Storm-0558 Breach Analysis</p>
      <p class="vg-creator">SANS Internet Storm Center</p>
      <span class="vg-duration">⏱ 30 min · CSRB review walk-through</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Cross-Tenant+Access+Settings+B2B+B2C+tenant+restrictions" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Cross-Tenant Access Settings — Modern B2B</p>
      <p class="vg-creator">Tim Warner</p>
      <span class="vg-duration">⏱ 14 min · Tenant restrictions</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **John Savill's Technical Training** | The single best Entra/AD educator on YouTube |
| **Microsoft Mechanics** | Polished official deep dives on new features |
| **Andy Malone MVP** | Clear walkthroughs at AZ-800/801 depth |
| **Inside Cloud and Security** | Enterprise hybrid patterns |
| **Travis Roberts** | Practical, no-nonsense Microsoft 365 + Entra |

---

## ✅ After watching

Answer these in your notebook:

1. When would you use Entra Cloud Sync instead of Connect Sync?
2. PHS, PTA, Federation — which does Microsoft recommend as the 2026 default?
3. What's the difference between Entra Joined and Hybrid Entra Joined?
4. What does Seamless SSO use under the hood, and which devices does it work on?
5. What is Continuous Access Evaluation (CAE) and which 2023 incident accelerated its adoption?
6. What's the difference between Entra ID and Entra Domain Services?

If you can answer all 6, you're ready for the [Quiz](./Quiz.md). Otherwise re-watch the Entra Connect vs Cloud Sync video.
