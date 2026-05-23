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

# 🎥 Module 3 Videos: Identity & Access Management

> **How to use:** IAM is protocol-heavy — visual flow diagrams help a LOT. Pause and sketch each flow once.

## ⭐ Essential watching (~55 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Professor+Messer+SY0-701+Authentication+factors" data-video-id="MpIzA4fNWew" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Authentication Factors &amp; MFA</p>
      <p class="vg-creator">Professor Messer</p>
      <span class="vg-duration">⏱ 9 min · The 5 factors</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Professor+Messer+SY0-701+SAML+OAuth+OpenID" data-video-id="R8Mw3XJ1dlA" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">SAML vs OAuth vs OpenID Connect</p>
      <p class="vg-creator">Professor Messer</p>
      <span class="vg-duration">⏱ 11 min · Protocol comparison</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Professor+Messer+SY0-701+Access+Control+DAC+MAC+RBAC+ABAC" data-video-id="9ANHcZwJfdQ" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Access Control: DAC, MAC, RBAC, ABAC</p>
      <p class="vg-creator">Professor Messer</p>
      <span class="vg-duration">⏱ 10 min · The 5 models</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Dion+Training+Kerberos+explained" data-video-id="5N242XcKAsM" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Kerberos Explained (KDC, TGT, Service Ticket)</p>
      <p class="vg-creator">Dion Training</p>
      <span class="vg-duration">⏱ 12 min · Windows domain auth</span>
    </div>
  </a>
</div>

## 📚 Recommended (~30 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Professor+Messer+SY0-701+RADIUS+TACACS" data-video-id="JynPMcC4XmI" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">RADIUS vs TACACS+</p>
      <p class="vg-creator">Professor Messer</p>
      <span class="vg-duration">⏱ 7 min · Network AAA</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=NetworkChuck+passkeys+FIDO2+webauthn" data-video-id="xYfiOnufBSk" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Passkeys / FIDO2 / WebAuthn Explained</p>
      <p class="vg-creator">NetworkChuck</p>
      <span class="vg-duration">⏱ 14 min · Future of passwords</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Privileged+Access+Management+PAM+explained" data-video-id="VBmpdzLYB5Q" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">PAM &amp; JIT Access Explained</p>
      <p class="vg-creator">CyberArk / BeyondTrust style</p>
      <span class="vg-duration">⏱ 12 min · Privileged account management</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=John+Hammond+kerberoasting+attack" data-video-id="tRCvagjqx3c" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Kerberoasting Attack Demo</p>
      <p class="vg-creator">John Hammond</p>
      <span class="vg-duration">⏱ 18 min · See an attack on AD</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=IppSec+active+directory+pass+the+hash" data-video-id="YVhlfUvsqYc" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Pass-the-Hash &amp; Lateral Movement</p>
      <p class="vg-creator">IppSec</p>
      <span class="vg-duration">⏱ 20 min · HackTheBox walkthrough</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=SCIM+provisioning+demo+SaaS" data-video-id="GMunhcCk418" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">SCIM Provisioning to SaaS</p>
      <p class="vg-creator">Okta / various IdP channels</p>
      <span class="vg-duration">⏱ 15 min · How real provisioning works</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **Professor Messer** | Domain-by-domain Sec+ coverage; protocol comparisons are crystal clear |
| **Dion Training** | Strong scenario explanations + practice questions |
| **NetworkChuck** | Energetic intros to modern auth (passkeys, FIDO2) |
| **John Hammond** | Hands-on offensive demos — see Kerberoasting, AS-REP roasting |
| **IppSec** | HackTheBox walkthroughs of AD attacks |
| **MyDFIR** | Identity-related incident response |

---

## ✅ After watching

1. Name the 5 authentication factors and give an example of each.
2. SAML vs OAuth vs OIDC — which is for what?
3. Walk through a Kerberos login from start to service access.
4. Give a real example each of DAC, MAC, RBAC, and ABAC.
5. What does JIT access protect against?

If you can answer all 5 from memory, you're ready for the [Quiz](./Quiz.md).
