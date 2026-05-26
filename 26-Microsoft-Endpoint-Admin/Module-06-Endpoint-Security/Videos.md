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

# 🎥 Module 6 Videos: Endpoint Security & Defender for Endpoint

> **How to use:** Click any card to open a YouTube search. Pause and click through the Defender for Endpoint admin portal.

## ⭐ Essential watching (~95 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Defender+for+Endpoint+Plan+1+vs+Plan+2+features" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">MDE Plan 1 vs Plan 2 — Feature Walkthrough</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 28 min · The full plan matrix</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Attack+Surface+Reduction+ASR+rules+Microsoft+Defender" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">ASR Rules — All Rules Explained + Rollout Pattern</p>
      <p class="vg-creator">Andy Malone MVP</p>
      <span class="vg-duration">⏱ 25 min · Audit → Block in practice</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=BitLocker+Intune+silent+enablement+Entra+recovery+key" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">BitLocker Silent Enablement + Entra Key Escrow</p>
      <p class="vg-creator">Peter van der Woude</p>
      <span class="vg-duration">⏱ 20 min · The canonical Intune pattern</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Defender+for+Endpoint+EDR+investigation+process+tree" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">EDR Investigation — Process Trees, Live Response</p>
      <p class="vg-creator">Microsoft Security</p>
      <span class="vg-duration">⏱ 22 min · Plan 2's killer feature</span>
    </div>
  </a>
</div>

## 📚 Recommended (~55 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Intune+security+baselines+Windows+11+Defender" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Intune Security Baselines — Microsoft's Recommended Settings</p>
      <p class="vg-creator">Microsoft Mechanics</p>
      <span class="vg-duration">⏱ 17 min · Baselines as a starting point</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Defender+for+Cloud+Apps+MCAS+CASB+shadow+IT" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Defender for Cloud Apps — CASB Overview</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 22 min · Discover + control SaaS</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Windows+LAPS+local+admin+password+rotation+Entra" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Windows LAPS — Rotating Local Admin Password</p>
      <p class="vg-creator">Andy Malone MVP</p>
      <span class="vg-duration">⏱ 16 min · The cloud LAPS replacement</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Defender+for+Endpoint+EDR+block+mode+third+party+AV" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">EDR in Block Mode with Third-Party AV</p>
      <p class="vg-creator">Microsoft Security</p>
      <span class="vg-duration">⏱ 18 min · When passive Defender helps</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Smart+App+Control+Windows+11+code+integrity" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Smart App Control on Windows 11</p>
      <p class="vg-creator">Microsoft Mechanics</p>
      <span class="vg-duration">⏱ 15 min · The AppLocker successor</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Norsk+Hydro+LockerGoga+ransomware+recovery+lessons" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Norsk Hydro LockerGoga — Lessons Learned</p>
      <p class="vg-creator">Microsoft Security Case Studies</p>
      <span class="vg-duration">⏱ 28 min · Real-world ransomware recovery</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **John Savill's Technical Training** | Deep Defender + security content. |
| **Microsoft Security** | Official channel for Defender. |
| **Andy Malone MVP** | Practical security exam prep. |
| **Peter van der Woude** | Intune + Defender integration. |
| **Microsoft Mechanics** | Official new-feature rollouts. |

---

## ✅ After watching

Answer these in your notebook (without re-watching):

1. What features does MDE Plan 2 add over Plan 1?
2. Walk through the canonical ASR rollout pattern.
3. Where is the BitLocker recovery key escrowed for Intune-managed Entra-joined devices?
4. What does EDR in block mode do, and when is it the right choice?
5. Why does Norsk Hydro publicly recommend MDE Plan 2 as the foundation?

If you can answer all 5, you're ready for the [Quiz](./Quiz.md). If not, re-watch the John Savill plan video.
