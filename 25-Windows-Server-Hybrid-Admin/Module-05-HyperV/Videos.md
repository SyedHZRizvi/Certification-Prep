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

# 🎥 Module 5 Videos: Hyper-V & Virtualization

> **How to use:** Click any card to search YouTube for the latest top result. Hyper-V is 15–20% of AZ-800 — and the lab-style "click these in order" questions are unforgiving.

## ⭐ Essential watching (~105 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=John+Savill+Hyper-V+complete+overview+Windows+Server" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Hyper-V — The Complete Overview</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 40 min · Architecture + features</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Hyper-V+live+migration+tutorial+Windows+Server+Kerberos" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Live Migration — Step by Step</p>
      <p class="vg-creator">Server Academy</p>
      <span class="vg-duration">⏱ 22 min · Constrained delegation</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Mechanics+Hyper-V+Replica+disaster+recovery" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Hyper-V Replica for DR</p>
      <p class="vg-creator">Microsoft Mechanics</p>
      <span class="vg-duration">⏱ 18 min · 30s / 5m / 15m</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Hyper-V+Gen+1+vs+Gen+2+virtual+machine+comparison" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Gen 1 vs Gen 2 — Which to Pick</p>
      <p class="vg-creator">Andy Malone MVP</p>
      <span class="vg-duration">⏱ 12 min · UEFI + vTPM</span>
    </div>
  </a>
</div>

## 📚 Recommended (~60 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Shielded+VMs+Host+Guardian+Service+walkthrough" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Shielded VMs + Host Guardian Service</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 25 min · TPM vs Host Key attestation</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Hyper-V+virtual+switch+external+internal+private" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">vSwitch Types & SET Teaming</p>
      <p class="vg-creator">Practical Windows Server</p>
      <span class="vg-duration">⏱ 18 min · External, Internal, Private</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Hyper-V+nested+virtualization+enable+VM+lab" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Nested Virtualization Setup</p>
      <p class="vg-creator">NetworkChuck Academy</p>
      <span class="vg-duration">⏱ 14 min · Hyper-V in Hyper-V</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Hyper-V+VMQ+vRSS+SR-IOV+performance" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">VMQ, vRSS, SR-IOV Performance</p>
      <p class="vg-creator">Inside Cloud and Security</p>
      <span class="vg-duration">⏱ 22 min · When to use each</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Hyper-V+Windows+Containers+vs+Hyper-V+isolation+mode" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Windows Containers vs Hyper-V Isolation</p>
      <p class="vg-creator">Travis Roberts</p>
      <span class="vg-duration">⏱ 16 min · Process vs VM isolation</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+Stack+HCI+overview+Hyper-V+S2D" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Azure Stack HCI Overview</p>
      <p class="vg-creator">Microsoft Mechanics</p>
      <span class="vg-duration">⏱ 18 min · HCI evolution</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **John Savill's Technical Training** | The Hyper-V authority |
| **Microsoft Mechanics** | Official feature walkthroughs |
| **Server Academy** | Step-by-step labs |
| **Andy Malone MVP** | Practical, exam-aligned |
| **Inside Cloud and Security** | Deep enterprise patterns |

---

## ✅ After watching

Answer these in your notebook:

1. Gen 1 vs Gen 2 — when each, and which supports vTPM?
2. Live Migration prerequisites (auth, network, storage)?
3. Hyper-V Replica intervals and the difference vs sync replication?
4. Shielded VM — TPM-trusted vs Host Key attestation difference?
5. SR-IOV trade-off vs the vSwitch features?
6. VHD vs VHDX — when does the difference matter (hint: Azure)?

If you can answer all 6, you're ready for the [Quiz](./Quiz.md).
