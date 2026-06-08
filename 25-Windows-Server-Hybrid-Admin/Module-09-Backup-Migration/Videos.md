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

# 🎥 Module 9 Videos: Backup, ASR & Migration

> **How to use:** Click any card to search YouTube for the latest top result. Backup/DR/Migration is ~40% of AZ-801, heaviest combined domain.

## ⭐ Essential watching (~110 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=John+Savill+Azure+Backup+complete+overview" data-video-id="iX87AomIqTw" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Azure Backup, Complete Overview</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 35 min · Vault, MARS, MABS, VM</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+Site+Recovery+ASR+walkthrough+Hyper-V" data-video-id="Ys0aZ3GNy3I" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Azure Site Recovery for Hyper-V</p>
      <p class="vg-creator">Microsoft Mechanics</p>
      <span class="vg-duration">⏱ 28 min · 30-sec RPO DR</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Storage+Migration+Service+Windows+Server+walkthrough" data-video-id="AbBrTe-YLdI" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Storage Migration Service, Cutover</p>
      <p class="vg-creator">Andy Malone MVP</p>
      <span class="vg-duration">⏱ 25 min · Modernize 2008→2022</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+Migrate+server+assessment+migration+complete" data-video-id="pl6jHyizeos" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Azure Migrate, Assess & Migrate</p>
      <p class="vg-creator">Microsoft Mechanics</p>
      <span class="vg-duration">⏱ 22 min · Hub for migration</span>
    </div>
  </a>
</div>

## 📚 Recommended (~55 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=MARS+agent+Azure+Backup+install+configure" data-video-id="KlDOi5Etu1I" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">MARS Agent, Install & Configure</p>
      <p class="vg-creator">Travis Roberts</p>
      <span class="vg-duration">⏱ 14 min · 3-per-day file backup</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=MABS+Microsoft+Azure+Backup+Server+walkthrough" data-video-id="5om2h08fwiE" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">MABS, On-Prem App-Aware Backup</p>
      <p class="vg-creator">Practical Windows Server</p>
      <span class="vg-duration">⏱ 18 min · SQL/SP/Exchange VSS</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Recovery+Services+Vault+immutable+soft+delete+ransomware" data-video-id="TYvlCTY94ms" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Immutable Vault, Ransomware Defense</p>
      <p class="vg-creator">Inside Cloud and Security</p>
      <span class="vg-duration">⏱ 18 min · Maersk lessons applied</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=ASR+recovery+plan+orchestration+failover" data-video-id="a4fM7Jma8KU" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">ASR Recovery Plans, Multi-VM Orchestration</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 22 min · Scripts + groups</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=ADMT+Active+Directory+Migration+Tool+SID+history" data-video-id="wXsLjzpb9ZA" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">ADMT, Legacy AD Migration</p>
      <p class="vg-creator">CBT Nuggets</p>
      <span class="vg-duration">⏱ 24 min · SID History migration</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+VM+backup+restore+managed+disk+walkthrough" data-video-id="wrUwKGAnOms" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Azure VM Backup & Restore</p>
      <p class="vg-creator">Microsoft Mechanics</p>
      <span class="vg-duration">⏱ 18 min · Managed disk restores</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **John Savill's Technical Training** | The clearest Backup/ASR educator |
| **Microsoft Mechanics** | Official walkthroughs |
| **Andy Malone MVP** | Storage Migration Service hands-on |
| **Inside Cloud and Security** | Immutable vault + ransomware patterns |
| **Travis Roberts** | MARS / MABS quick wins |

---

## ✅ After watching

Answer these in your notebook:

1. MARS vs MABS, when each?
2. Recovery Services Vault, what's locked at first backup, and what's the soft delete default?
3. ASR, typical RPO and RTO?
4. Storage Migration Service phases?
5. Azure Migrate vs ASR, relationship?
6. ADMT, what does SID History give you?

If you can answer all 6, you're ready for the [Quiz](./Quiz.md).
