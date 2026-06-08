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
</style>

# 🎥 Module 3 Videos: MFA & Passwordless

> **How to use:** Click any card to open a YouTube search, pick the top current result. Watch in order; follow along by registering FIDO2 + Authenticator on your dev tenant.

## ⭐ Essential watching (~75 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Entra+authentication+methods+policy+migration" data-video-id="s9I4FjgEJnY" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Authentication Methods Policy, Migration From Legacy</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 20 min · Why the modern policy + migration steps</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Entra+FIDO2+security+key+setup+passwordless" data-video-id="FWlMTTVbBjs" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">FIDO2 Security Keys, Setup End-to-End</p>
      <p class="vg-creator">Andy Malone MVP</p>
      <span class="vg-duration">⏱ 18 min · Policy → register → sign in</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Entra+temporary+access+pass+TAP+demo" data-video-id="AqqvMqNcXRU" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Temporary Access Pass (TAP), Bootstrap Passwordless</p>
      <p class="vg-creator">Dean Cefola, Azure Academy</p>
      <span class="vg-duration">⏱ 12 min · Why TAP solves new-hire flows</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Authenticator+number+matching+push+bombing+defense" data-video-id="cjsViEclw1I" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Number Matching, Why Microsoft Mandated It</p>
      <p class="vg-creator">Microsoft Mechanics</p>
      <span class="vg-duration">⏱ 15 min · Push-bombing defense</span>
    </div>
  </a>
</div>

## 📚 Recommended (~40 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Windows+Hello+for+Business+cloud+kerberos+trust+hybrid" data-video-id="Cqn3INyjg5s" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Windows Hello for Business, Cloud Kerberos Trust</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 22 min · Modern hybrid WHFB</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Entra+certificate-based+authentication+CBA" data-video-id="gF8dtW67Wio" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Entra Certificate-Based Authentication Without AD FS</p>
      <p class="vg-creator">Concepts Work</p>
      <span class="vg-duration">⏱ 15 min · Smart cards in Entra-native CBA</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Entra+passwordless+rollout+plan+steps" data-video-id="g8DnPX2iPyI" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Passwordless Rollout Plan, Real-World Steps</p>
      <p class="vg-creator">Andy Malone MVP</p>
      <span class="vg-duration">⏱ 13 min · Pilot → expand → enforce</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Entra+security+defaults+vs+conditional+access" data-video-id="QOLXaQ-3vjE" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Security Defaults vs Conditional Access, Which When</p>
      <p class="vg-creator">Microsoft Mechanics</p>
      <span class="vg-duration">⏱ 14 min · Decision matrix</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Entra+authentication+strengths+policies" data-video-id="-w4YHCQIWz4" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Authentication Strengths in Conditional Access</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 16 min · Built-in + custom strengths</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Entra+FIDO2+AAGUID+restriction+regulated" data-video-id="61PuyaIvk54" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">FIDO2 AAGUID Restrictions for Regulated Environments</p>
      <p class="vg-creator">Concepts Work</p>
      <span class="vg-duration">⏱ 11 min · FIPS-validated key allowlists</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels

| Channel | Why |
|---------|-----|
| **John Savill** | Definitive walkthroughs of every method. |
| **Andy Malone MVP** | M365 admin + identity, exam-focused. |
| **Microsoft Mechanics** | Official launches; very current. |
| **Dean Cefola, Azure Academy** | Practical labs. |
| **Concepts Work** | New SC-300 channel with focused content. |

---

## ✅ After watching

Answer these in your notebook (without re-watching):

1. List the 3 phishing-resistant authentication methods.
2. Why is "Authenticator push with number matching" MFA but NOT passwordless?
3. Walk through the TAP issuance flow, when does an admin choose 60 min vs 8 hours vs 7 days?
4. What's the right WHFB deployment model in 2026 for a Hybrid Entra Joined fleet?
5. Why must you BLOCK LEGACY AUTH before enforcing MFA?

If you can answer all 5, you're ready for the [Quiz](./Quiz.md).
