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

# 🎥 Module 8 Videos: Server Security & Defender

> **How to use:** Click any card to search YouTube for the latest top result. Security is 25–30% of AZ-801, by far the heaviest domain on the second exam.

## ⭐ Essential watching (~110 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=John+Savill+Defender+for+Servers+P1+P2+walkthrough" data-video-id="Wvl8CrUjc_8" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Defender for Servers, P1 vs P2 Deep Dive</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 30 min · Pick the right SKU</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Defender+for+Endpoint+overview+EDR+walkthrough" data-video-id="EoMJ81-pclY" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Microsoft Defender for Endpoint (MDE) Overview</p>
      <p class="vg-creator">Microsoft Mechanics</p>
      <span class="vg-duration">⏱ 25 min · EDR + ASR + MDVM</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=WDAC+Windows+Defender+Application+Control+tutorial" data-video-id="Nj5vBloAWy0" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">WDAC, Kernel-Level App Allowlisting</p>
      <p class="vg-creator">Andy Malone MVP</p>
      <span class="vg-duration">⏱ 22 min · Audit + Enforce</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Credential+Guard+VBS+HVCI+Windows+Server+tutorial" data-video-id="xnhW6fjwa8c" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Credential Guard + VBS, Defeat Mimikatz</p>
      <p class="vg-creator">Sean Metcalf (adsecurity)</p>
      <span class="vg-duration">⏱ 30 min · Tier-0 protection</span>
    </div>
  </a>
</div>

## 📚 Recommended (~50 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Just+In+Time+VM+access+Defender+for+Cloud" data-video-id="vsaABCFGx3A" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">JIT VM Access, Close RDP by Default</p>
      <p class="vg-creator">Travis Roberts</p>
      <span class="vg-duration">⏱ 14 min · Time-bound port opening</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Secured+Core+Server+Windows+Server+2022+walkthrough" data-video-id="0lwwM-qhXMQ" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Secured-Core Server 2022</p>
      <p class="vg-creator">Microsoft Mechanics</p>
      <span class="vg-duration">⏱ 18 min · Hardware-rooted trust</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Attack+Surface+Reduction+ASR+rules+Microsoft+Defender" data-video-id="BFr0RJuA0vk" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">ASR Rules, Block Common Attacks</p>
      <p class="vg-creator">Inside Cloud and Security</p>
      <span class="vg-duration">⏱ 18 min · 17 named rules</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Tier+0+1+2+administrative+model+PAW" data-video-id="K4EOaJOxDdI" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Tier 0/1/2 Model + PAW</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 28 min · Admin segregation</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Protected+Users+group+Active+Directory+Kerberos+NTLM" data-video-id="eenW8ZPVAGw" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Protected Users Group, Effects</p>
      <p class="vg-creator">Sean Metcalf (adsecurity)</p>
      <span class="vg-duration">⏱ 20 min · Tier-0 admin hardening</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Defender+for+Cloud+regulatory+compliance+secure+score" data-video-id="Y8iz9invZHo" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Defender for Cloud, Secure Score</p>
      <p class="vg-creator">Microsoft Mechanics</p>
      <span class="vg-duration">⏱ 16 min · PCI/HIPAA/ISO views</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **John Savill's Technical Training** | The clearest Defender educator |
| **Sean Metcalf (adsecurity.org)** | The AD security authority |
| **Microsoft Mechanics** | Official Defender / WDAC / VBS deep dives |
| **Andy Malone MVP** | Practical WDAC walkthroughs |
| **Inside Cloud and Security** | Enterprise security patterns |

---

## ✅ After watching

Answer these in your notebook:

1. Defender for Servers P1 vs P2, what's the headline difference?
2. JIT VM access, what tier is it in, and what's the default max duration?
3. WDAC vs AppLocker, which does Microsoft recommend in 2026?
4. Credential Guard prerequisites?
5. Protected Users group effects (3 of them)?
6. Secured-core server, what hardware + firmware does it require?

If you can answer all 6, you're ready for the [Quiz](./Quiz.md).
