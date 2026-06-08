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

# 🎥 Module 6 Videos: Server Security & Hardening

> **How to use:** Sec+ resources also apply. Many of these are Sec+ content because Server+ security borrows directly from it.

## ⭐ Essential watching (~55 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Professor+Messer+SY0-701+RBAC+DAC+MAC+ABAC" data-video-id="qddF3O1wcTU" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">RBAC vs DAC vs MAC vs ABAC</p>
      <p class="vg-creator">Professor Messer</p>
      <span class="vg-duration">⏱ 10 min · Access models</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Secure+Boot+UEFI+TPM+explained" data-video-id="WRFnOh_pqX8" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Secure Boot + UEFI + TPM</p>
      <p class="vg-creator">NetworkChuck</p>
      <span class="vg-duration">⏱ 12 min · Firmware trust chain</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=CIS+benchmark+hardening+walkthrough" data-video-id="kN6ATyzjNGA" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">CIS Benchmarks Hands-On</p>
      <p class="vg-creator">CIS / community</p>
      <span class="vg-duration">⏱ 14 min · Apply L1 / L2</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=patch+management+best+practices+server" data-video-id="nyg5aXbX2Hk" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Patch Management Best Practices</p>
      <p class="vg-creator">Lawrence Systems</p>
      <span class="vg-duration">⏱ 14 min · Lifecycle + tools</span>
    </div>
  </a>
</div>

## 📚 Recommended (~40 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=privileged+access+management+PAM+overview" data-video-id="Lv09C4JYtnM" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">PAM + JIT Elevation</p>
      <p class="vg-creator">CyberArk / community</p>
      <span class="vg-duration">⏱ 12 min · Why standing access kills</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=EDR+vs+antivirus+vs+HIDS+HIPS+comparison" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">EDR vs AV vs HIDS/HIPS</p>
      <p class="vg-creator">community</p>
      <span class="vg-duration">⏱ 12 min · Modern endpoint defense</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=BitLocker+TPM+pre+boot+authentication" data-video-id="N5QSVvDm9io" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">BitLocker + TPM + Pre-Boot Auth</p>
      <p class="vg-creator">Microsoft community</p>
      <span class="vg-duration">⏱ 14 min · Drive encryption end-to-end</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Tiered+administration+Active+Directory+Tier+0+1+2" data-video-id="K4EOaJOxDdI" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">AD Tier 0/1/2 Admin Model</p>
      <p class="vg-creator">Microsoft / community</p>
      <span class="vg-duration">⏱ 18 min · Reduce lateral movement</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Target+2013+breach+HVAC+vendor+lessons" data-video-id="_5TetBQrAlY" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Target 2013 Breach, Lessons</p>
      <p class="vg-creator">community case study</p>
      <span class="vg-duration">⏱ 22 min · Vendor access + segmentation</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=SELinux+vs+AppArmor+linux+security+modules" data-video-id="8lGK80UYeSY" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">SELinux vs AppArmor</p>
      <p class="vg-creator">Learn Linux TV</p>
      <span class="vg-duration">⏱ 20 min · Linux MAC frameworks</span>
    </div>
  </a>
</div>

---

## ✅ After watching

Answer these in your notebook:

1. Name 3 physical security controls + 3 firmware security controls.
2. RBAC vs ABAC, what's the difference?
3. Why is a UEFI password meaningless without Secure Boot enabled (and vice versa)?
4. What does JIT in PAM stand for and why does it matter?
5. Name 2 tools each for Windows and Linux patch management.
6. EDR vs antivirus, what's the differentiator?

If you can answer all 6, you're ready for the [Quiz](./Quiz.md).
