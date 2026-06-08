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

# 🎥 Module 6 Videos: Identity Governance & PIM

> **How to use:** Click any card to open a YouTube search, pick the top current result. Follow along by configuring a PIM eligible Reports Reader assignment in your dev tenant and activating it.

## ⭐ Essential watching (~80 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Entra+PIM+privileged+identity+management+walkthrough" data-video-id="DkJzfKt-RU4" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">PIM End-to-End, Eligible Roles & Activation</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 28 min · Configure + activate + audit</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Entra+access+reviews+governance+walkthrough" data-video-id="buHZMvOrXL0" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Access Reviews, Recurring Review Setup</p>
      <p class="vg-creator">Andy Malone MVP</p>
      <span class="vg-duration">⏱ 18 min · Group + role + package reviews</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Entra+entitlement+management+access+packages+SC-300" data-video-id="ByASV0pfyRc" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Entitlement Management, Build a Real Access Package</p>
      <p class="vg-creator">Dean Cefola, Azure Academy</p>
      <span class="vg-duration">⏱ 22 min · Catalog → package → assign</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Entra+lifecycle+workflows+joiner+mover+leaver" data-video-id="mX-j7lC2L3A" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Lifecycle Workflows for HR-Driven Onboarding</p>
      <p class="vg-creator">Microsoft Mechanics</p>
      <span class="vg-duration">⏱ 14 min · Triggers + tasks + scheduling</span>
    </div>
  </a>
</div>

## 📚 Recommended (~40 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Entra+PIM+for+Azure+resources+demo" data-video-id="3ix2aTP5LCA" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">PIM for Azure Resources Demo</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 16 min · Eligible Owner on prod sub</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Entra+PIM+for+groups+role+assignable" data-video-id="xDCegd2G0i0" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">PIM for Groups, Role-Assignable Group Membership</p>
      <p class="vg-creator">Concepts Work</p>
      <span class="vg-duration">⏱ 13 min · Setup + activation flow</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Entra+ID+Governance+custom+extensions+logic+apps" data-video-id="iEFhrwSmjxI" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Entra ID Governance Custom Extensions</p>
      <p class="vg-creator">Andy Malone MVP</p>
      <span class="vg-duration">⏱ 14 min · Logic Apps on access events</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Entra+verified+ID+access+packages+credentials" data-video-id="0LfYrRd7Qzs" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Verified ID + Access Packages</p>
      <p class="vg-creator">Microsoft Mechanics</p>
      <span class="vg-duration">⏱ 15 min · Decentralized identity prereq</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Entra+privileged+access+workstation+PAW+setup" data-video-id="6gHzKX3cnCY" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Privileged Access Workstations (PAW) + PIM</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 22 min · Tier-0 admin hardening</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Entra+inactive+user+policy+governance" data-video-id="fNSnZY5c1bA" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Inactive User Cleanup with Governance</p>
      <p class="vg-creator">Dean Cefola, Azure Academy</p>
      <span class="vg-duration">⏱ 11 min · Auto-disable stale accounts</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels

| Channel | Why |
|---------|-----|
| **John Savill** | The reference for PIM and governance. |
| **Andy Malone MVP** | M365 admin perspective on access reviews. |
| **Microsoft Mechanics** | Official launches; Lifecycle Workflows + Verified ID. |
| **Dean Cefola, Azure Academy** | Lab walkthroughs. |
| **Concepts Work** | Newer SC-300 channel; well-organized. |

---

## ✅ After watching

Answer these in your notebook (without re-watching):

1. Walk through a PIM activation from eligible → active → expiration.
2. List the 6 access-review target types.
3. Sketch a "Pre-Hire" lifecycle workflow firing 7 days before `employeeHireDate`.
4. Why is break-glass NOT in PIM?
5. Where do you configure custom extensions (Logic Apps) on access package events?

If you can answer all 5, you're ready for the [Quiz](./Quiz.md).
