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

# 🎥 Module 9 Videos: Backup, Recovery & Migration

> **How to use:** Smaller domain (10–15% of exam). Focus on the Backup vs ASR distinction.

## ⭐ Essential watching (~70 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=John+Savill+Azure+Backup+RSV+policy" target="_blank" rel="noopener" data-video-id="PcJ6fMcrcrg">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Azure Backup Deep Dive</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 25 min · Vaults, policies, soft delete</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=John+Savill+Azure+Site+Recovery+ASR+overview" target="_blank" rel="noopener" data-video-id="8fvO3WArG-Y">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Azure Site Recovery, Complete Walkthrough</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 22 min · RPO/RTO, failover types</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Adam+Marczak+Azure+Migrate+tutorial" target="_blank" rel="noopener" data-video-id="x4MMNESP6lw">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Azure Migrate End-to-End Tutorial</p>
      <p class="vg-creator">Adam Marczak, Azure for Everyone</p>
      <span class="vg-duration">⏱ 14 min · Discover → Assess → Migrate</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+Backup+vs+Site+Recovery+comparison" target="_blank" rel="noopener" data-video-id="Tkhj06dqvzY">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Backup vs Site Recovery, Pick the Right One</p>
      <p class="vg-creator">Microsoft Mechanics</p>
      <span class="vg-duration">⏱ 12 min · Decision tree</span>
    </div>
  </a>
</div>

## 📚 Recommended (~30 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+Backup+MUA+multi+user+authorization+resource+guard" target="_blank" rel="noopener" data-video-id="BFhw7SvY0fs">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Multi-User Authorization (MUA) for Backup</p>
      <p class="vg-creator">Tim Warner</p>
      <span class="vg-duration">⏱ 11 min · Resource Guard pattern</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+Site+Recovery+test+failover+recovery+plan" target="_blank" rel="noopener" data-video-id="wjGY4E2DLaY">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">ASR Recovery Plans + Test Failover</p>
      <p class="vg-creator">Inside Cloud and Security</p>
      <span class="vg-duration">⏱ 14 min · Test without breaking prod</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+Backup+immutable+vault+ransomware" target="_blank" rel="noopener" data-video-id="TYvlCTY94ms">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Immutable Vault &amp; Ransomware Protection</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 16 min · Defense in depth</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+Migrate+VMware+migration+to+Azure" target="_blank" rel="noopener" data-video-id="_k0ahnQVCsw">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Migrate VMware → Azure with Azure Migrate</p>
      <p class="vg-creator">Travis Roberts</p>
      <span class="vg-duration">⏱ 16 min · Hands-on appliance</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+Backup+MARS+agent+on-prem+files" target="_blank" rel="noopener" data-video-id="KlDOi5Etu1I">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">MARS Agent for On-Prem Windows Backup</p>
      <p class="vg-creator">Microsoft Mechanics</p>
      <span class="vg-duration">⏱ 13 min · Per-file restore</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **John Savill's Technical Training** | Best Backup + ASR explainers. |
| **Adam Marczak, Azure for Everyone** | Clean Migrate walkthrough. |
| **Microsoft Mechanics** | DR + ransomware patterns. |
| **Tim Warner** | MUA + immutable vault. |
| **Travis Roberts** | Hands-on VMware migration. |

---

## ✅ After watching

1. Backup vs ASR, when to use each?
2. What does GRS give you for backups? What unlocks Cross Region Restore?
3. Three failover types in ASR?
4. Azure Migrate three phases?
5. What is MARS vs MABS?

Quiz → [Quiz](./Quiz.md)
