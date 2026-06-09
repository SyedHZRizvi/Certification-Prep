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

# 🎥 Module 2 Videos: Entra ID & RBAC

> **How to use:** Click any card to search YouTube and watch the latest top result. The essentials are not optional for this module, identity questions are ~20% of the exam.

## ⭐ Essential watching (~90 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=John+Savill+Microsoft+Entra+ID+complete+overview" target="_blank" rel="noopener" data-video-id="cE3IiHGuHvs">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Microsoft Entra ID, Complete Overview</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 30 min · The definitive intro</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=John+Savill+Azure+RBAC+deep+dive" target="_blank" rel="noopener" data-video-id="qFoHDTxkQII">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Azure RBAC Deep Dive, Built-In vs Custom</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 25 min · Control vs data plane</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Adam+Marczak+Azure+Conditional+Access+tutorial" target="_blank" rel="noopener" data-video-id="zFyXTA7o7J4">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Conditional Access, Practical Walkthrough</p>
      <p class="vg-creator">Adam Marczak, Azure for Everyone</p>
      <span class="vg-duration">⏱ 18 min · Signals → controls</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=John+Savill+Privileged+Identity+Management+PIM" target="_blank" rel="noopener" data-video-id="OJZqgj68AnQ">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Privileged Identity Management, Just-In-Time Roles</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 22 min · Eligible vs Active</span>
    </div>
  </a>
</div>

## 📚 Recommended (~45 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Tim+Warner+Entra+ID+dynamic+groups+membership+rules" target="_blank" rel="noopener" data-video-id="qw4A82_bD-0">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Dynamic Groups & Membership Rules</p>
      <p class="vg-creator">Tim Warner</p>
      <span class="vg-duration">⏱ 12 min · Rule syntax</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Entra+ID+B2B+B2C+External+ID+explained" target="_blank" rel="noopener" data-video-id="EfVs5qurGBU">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">B2B vs B2C vs External ID, Which to Use</p>
      <p class="vg-creator">Microsoft Mechanics</p>
      <span class="vg-duration">⏱ 14 min · Customer vs partner</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Inside+Cloud+and+Security+managed+identity+vs+service+principal" target="_blank" rel="noopener" data-video-id="QP3ZH8d6q1Y">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Managed Identity vs Service Principal</p>
      <p class="vg-creator">Inside Cloud and Security</p>
      <span class="vg-duration">⏱ 15 min · When to use which</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=John+Savill+Entra+ID+Identity+Protection+risk+policies" target="_blank" rel="noopener" data-video-id="Nx2ych3xHl0">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Identity Protection, Sign-In & User Risk</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 20 min · P2 feature deep dive</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+RBAC+custom+role+definition+JSON+tutorial" target="_blank" rel="noopener" data-video-id="qLRFjLsNl7s">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Build a Custom RBAC Role From Scratch</p>
      <p class="vg-creator">Travis Roberts</p>
      <span class="vg-duration">⏱ 12 min · JSON walkthrough</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Entra+passwordless+FIDO2+Authenticator" target="_blank" rel="noopener" data-video-id="wTLB0Yh70_0">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Passwordless: FIDO2 & Microsoft Authenticator</p>
      <p class="vg-creator">Microsoft Mechanics</p>
      <span class="vg-duration">⏱ 16 min · The future of auth</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **John Savill's Technical Training** | Identity is his strongest topic, non-negotiable subscribe. |
| **Adam Marczak, Azure for Everyone** | Clear visuals on CA policy logic. |
| **Tim Warner** | Pragmatic AZ-104 / SC-300 angle. |
| **Inside Cloud and Security** | Enterprise identity patterns. |
| **Microsoft Mechanics** | Polished, vendor-tinted but useful for newest features. |

---

## ✅ After watching

Answer these in your notebook:

1. What's the difference between Entra ID Free, P1, and P2?
2. What does Conditional Access need vs Identity Protection?
3. Name the 4 fundamental RBAC built-in roles.
4. What's the difference between control plane and data plane access?
5. Why prefer a managed identity over a service principal for Azure workloads?
6. What does PIM mean by "eligible" vs "active"?

If you can answer all 6, you're ready for the [Quiz](./Quiz.md). Otherwise re-watch John Savill's Entra ID overview.
