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

# 🎥 Module 4 Videos: Conditional Access & Identity Protection

> **How to use:** Click any card to open a YouTube search — pick the top current result. Pause to follow along by building a report-only CA policy in your dev tenant.

## ⭐ Essential watching (~90 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=John+Savill+Conditional+Access+deep+dive+SC-300" data-video-id="kwMWwRohe38" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Conditional Access Deep Dive — Every Setting</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 35 min · The definitive walkthrough</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Entra+block+legacy+authentication+conditional+access" data-video-id="mb7At6B_8p0" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Block Legacy Auth — End-to-End</p>
      <p class="vg-creator">Andy Malone MVP</p>
      <span class="vg-duration">⏱ 18 min · Why it's the #1 policy + how to roll out</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Entra+Identity+Protection+risk+policies" data-video-id="KLIJZhuiv9A" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Identity Protection — User Risk vs Sign-in Risk</p>
      <p class="vg-creator">Dean Cefola — Azure Academy</p>
      <span class="vg-duration">⏱ 22 min · Building risk policies safely</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Entra+break+glass+account+best+practices" data-video-id="H_hdJQY3dxA" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Break-Glass Accounts — Right Way & Wrong Way</p>
      <p class="vg-creator">Microsoft Mechanics</p>
      <span class="vg-duration">⏱ 15 min · Cloud-only + exclusions + monitoring</span>
    </div>
  </a>
</div>

## 📚 Recommended (~45 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Entra+continuous+access+evaluation+CAE" data-video-id="m3309aUKET8" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Continuous Access Evaluation (CAE) Explained</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 18 min · Real-time token revocation</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Entra+conditional+access+what+if+tool" data-video-id="M_iQVM-3C3E" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">CA What If Tool — Avoid Tenant Lockouts</p>
      <p class="vg-creator">Andy Malone MVP</p>
      <span class="vg-duration">⏱ 12 min · Simulate before you save</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Entra+authentication+context+SharePoint" data-video-id="o-AxF_4uXKs" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Authentication Context for SharePoint Sites</p>
      <p class="vg-creator">Concepts Work</p>
      <span class="vg-duration">⏱ 13 min · Per-resource CA targeting</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Defender+for+Cloud+Apps+session+policy+download" data-video-id="L-EKqbse2cs" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Defender for Cloud Apps — Session Policies</p>
      <p class="vg-creator">Microsoft Mechanics</p>
      <span class="vg-duration">⏱ 16 min · Block downloads on unmanaged devices</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Entra+sign-in+frequency+session+control" data-video-id="mIbzO4I_SOA" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Sign-in Frequency Session Control — Tuning</p>
      <p class="vg-creator">Dean Cefola — Azure Academy</p>
      <span class="vg-duration">⏱ 11 min · Stop the over-prompting tickets</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Entra+conditional+access+troubleshoot+KQL" data-video-id="V9uEm7rIW2s" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Troubleshoot CA With KQL Queries</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 17 min · Sign-in log queries that actually help</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels

| Channel | Why |
|---------|-----|
| **John Savill** | Definitive CA + Identity Protection content. |
| **Andy Malone MVP** | Exam-focused walkthroughs. |
| **Microsoft Mechanics** | Official launches; current features. |
| **Dean Cefola — Azure Academy** | Lab-friendly demos. |
| **Concepts Work** | Newer SC-300 channel; well-organized. |

---

## ✅ After watching

Answer these in your notebook (without re-watching):

1. List the four components of a CA policy in decision-flow order.
2. Walk through the safe-rollout pattern for a new CA policy from creation to enforcement.
3. Why are break-glass accounts cloud-only (not synced or federated)?
4. Write the difference between user risk and sign-in risk in one sentence.
5. What's CAE doing for token revocation, and why is it important post-incident?

If you can answer all 5, you're ready for the [Quiz](./Quiz.md).
