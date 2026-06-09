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

# 🎥 Module 5 Videos: Application Registration & SSO

> **How to use:** Click any card to open a YouTube search, pick the top current result. Follow along by registering one OIDC app and one SAML gallery app in your dev tenant.

## ⭐ Essential watching (~75 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Entra+app+registration+vs+enterprise+application+explained" data-video-id="4ljbruQOOiI" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">App Registrations vs Enterprise Applications</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 22 min · The recipe vs the dish</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Entra+SAML+SSO+configuration+gallery+app" data-video-id="EG55Th1oFNE" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">SAML SSO Configuration End-to-End</p>
      <p class="vg-creator">Dean Cefola, Azure Academy</p>
      <span class="vg-duration">⏱ 18 min · Identifier, Reply URL, attributes</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Entra+illicit+consent+grant+attack+mitigation" data-video-id="8UIWEeTxaO0" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Illicit OAuth Consent Attack, Mitigation</p>
      <p class="vg-creator">Microsoft Mechanics</p>
      <span class="vg-duration">⏱ 16 min · The CFO-wire-fraud attack pattern</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Entra+application+proxy+setup+on-prem+app" data-video-id="_2kWq5H4NhY" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Microsoft Entra Application Proxy Setup</p>
      <p class="vg-creator">Andy Malone MVP</p>
      <span class="vg-duration">⏱ 19 min · Connector → on-prem app</span>
    </div>
  </a>
</div>

## 📚 Recommended (~40 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=OAuth+2+OpenID+Connect+OIDC+explained+Microsoft" data-video-id="wfqjGi92SBc" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">OAuth 2.0 + OIDC for Microsoft Identity</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 25 min · Tokens, claims, flows</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Entra+admin+consent+workflow+configure" data-video-id="f5iXXi0prbA" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Admin Consent Workflow Setup</p>
      <p class="vg-creator">Concepts Work</p>
      <span class="vg-duration">⏱ 12 min · Reviewer config + approval flow</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Entra+SCIM+provisioning+SaaS+tutorial" data-video-id="24-ZxmTeEBU" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">SCIM Provisioning to SaaS Apps</p>
      <p class="vg-creator">Microsoft Mechanics</p>
      <span class="vg-duration">⏱ 14 min · Joiner/leaver sync via SCIM</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Entra+app+roles+manifest+token+claims" data-video-id="Sc1y4WBHP2k" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">App Roles in Manifest + Token Claims</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 16 min · "roles" claim in JWT</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Entra+SAML+troubleshoot+audience+mismatch" data-video-id="poQCJK0WPUk" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">SAML Troubleshooting Common Errors</p>
      <p class="vg-creator">Dean Cefola, Azure Academy</p>
      <span class="vg-duration">⏱ 13 min · Audience URI, cert, reply URL</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Defender+for+Cloud+Apps+OAuth+app+governance" data-video-id="6GouFtEeSoY" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Defender for Cloud Apps, OAuth App Governance</p>
      <p class="vg-creator">Microsoft Mechanics</p>
      <span class="vg-duration">⏱ 15 min · Risky-app detection</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels

| Channel | Why |
|---------|-----|
| **John Savill** | Deep, technically rigorous app + OAuth content. |
| **Andy Malone MVP** | M365 admin perspective. |
| **Dean Cefola, Azure Academy** | Practical SSO labs. |
| **Microsoft Mechanics** | Official launches; current features. |
| **Concepts Work** | Newer SC-300 channel. |

---

## ✅ After watching

Answer these in your notebook (without re-watching):

1. Explain App Registration vs Enterprise App to a colleague in 60 seconds.
2. Walk through SAML SSO config: which 4 fields are non-negotiable?
3. Describe the illicit consent attack and the two settings that defeat it.
4. When is App Proxy the right answer vs a private endpoint vs a VPN?
5. Why is `Mail.Send` as application permission different from `Mail.Send` as delegated?

If you can answer all 5, you're ready for the [Quiz](./Quiz.md).
