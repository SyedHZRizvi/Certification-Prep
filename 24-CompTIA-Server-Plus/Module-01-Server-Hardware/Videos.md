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

# 🎥 Module 1 Videos: Server Hardware & Components

> **How to use:** Click any video card to search YouTube and watch the latest top result for that topic. Curated picks shown in the order to watch them. Pause and take notes after each one, don't binge.

## ⭐ Essential watching (~50 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Professor+Messer+SK0-005+Server+Form+Factors" data-video-id="ysye93kIZW4" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Server Form Factors, Tower, Rack, Blade</p>
      <p class="vg-creator">Professor Messer</p>
      <span class="vg-duration">⏱ 8 min · The 3 shapes</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Professor+Messer+SK0-005+ECC+memory+server" data-video-id="nMbGoiJo69c" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">ECC RAM and Why Servers Need It</p>
      <p class="vg-creator">Professor Messer</p>
      <span class="vg-duration">⏱ 9 min · Bit flips + RDIMM/LRDIMM</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=ServeTheHome+iDRAC+iLO+IPMI+walkthrough" data-video-id="zDJPAZj7QBc" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">iDRAC vs iLO vs IPMI Demo</p>
      <p class="vg-creator">ServeTheHome</p>
      <span class="vg-duration">⏱ 14 min · OOB hands-on tour</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Dion+Training+Server+Plus+redundant+power+supply" data-video-id="O65pcAWWhD0" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Redundant PSUs, N+1 vs 2N, and PDUs</p>
      <p class="vg-creator">Dion Training</p>
      <span class="vg-duration">⏱ 11 min · Power redundancy modes</span>
    </div>
  </a>
</div>

## 📚 Recommended (~30 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=ServeTheHome+rack+server+teardown+2U" data-video-id="9PLvt3WATMU" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">2U Rack Server Teardown</p>
      <p class="vg-creator">ServeTheHome</p>
      <span class="vg-duration">⏱ 13 min · See every component</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Professor+Messer+SK0-005+hardware+RAID+controller" data-video-id="N4Hu9GipM5k" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Hardware RAID Controllers and BBWC</p>
      <p class="vg-creator">Professor Messer</p>
      <span class="vg-duration">⏱ 9 min · Why batteries matter</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Linus+Tech+Tips+blade+server+chassis+explained" data-video-id="Oz33sc8RYxk" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Blade Server Chassis Explained</p>
      <p class="vg-creator">Linus Tech Tips</p>
      <span class="vg-duration">⏱ 12 min · Visual density story</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=ASHRAE+data+center+thermal+guidelines+inlet+temperature" data-video-id="KLy1yMWyQdM" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">ASHRAE Data-Center Thermal Guidelines</p>
      <p class="vg-creator">Data Center community</p>
      <span class="vg-duration">⏱ 22 min · Inlet temp deep dive</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Dell+EMC+PowerEdge+R750+overview" data-video-id="eDfgML5a2fI" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Dell PowerEdge R750 Overview</p>
      <p class="vg-creator">Dell EMC</p>
      <span class="vg-duration">⏱ 18 min · Real product walk-through</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=HPE+ProLiant+Gen11+iLO+6+features" data-video-id="21kiLA1DVSU" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">HPE ProLiant Gen11 + iLO 6</p>
      <p class="vg-creator">HPE</p>
      <span class="vg-duration">⏱ 15 min · Latest BMC feature set</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=OpenBMC+open+source+baseboard+management+controller" data-video-id="X5yVn_I8Thg" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">OpenBMC, Open-Source BMC Firmware</p>
      <p class="vg-creator">Linux Foundation</p>
      <span class="vg-duration">⏱ 25 min · How the BMC actually works</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **Professor Messer** | THE Server+ teacher. Free, comprehensive, exam-aligned. Start every module here. |
| **Dion Training (Jason Dion)** | Polished delivery, scenario-heavy explanations, great paid practice questions on his site |
| **ServeTheHome** | Patrick Kennedy's deep dives, vendor reviews, teardowns, BMC walk-throughs. Best server-hardware channel on YouTube. |
| **Linus Tech Tips** | Accessible explanations + entertaining server builds; good for visual learners |
| **Lawrence Systems** | Sysadmin-focused tutorials, networking + storage, real production environments |
| **NetworkChuck** | Fun, energetic intros to infrastructure topics |
| **Craft Computing** | Home-lab and budget-server hardware, lots of OOB management demos |

---

## ✅ After watching

Answer these in your notebook (without re-watching):

1. Name the 4 server form factors and one scenario where each is best.
2. What does ECC RAM correct, and what does it merely *detect*?
3. Why are two redundant PSUs only truly redundant if plugged into separate PDUs?
4. Name three things you can do via iDRAC/iLO that you cannot do via SSH/RDP.
5. What port and transport does IPMI use?
6. What does a BBWC/FBWC protect against, and what kind of card has one?

If you can answer all 6, you're ready for the [Quiz](./Quiz.md). If not, re-watch the Messer + ServeTheHome videos.
