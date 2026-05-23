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

# 🎥 Module 9 Videos: Privacy-First Measurement

> **How to use:** Simo Ahava is the canonical source on Consent Mode v2 + sGTM. Watch the IAB Tech Lab + Apple WWDC talks for context on the standards layer.

## ⭐ Essential watching (~95 min)

<div class="vg-grid">
  <a class="vg-card" data-video-id="KVXnCdImOSk" href="https://www.youtube.com/results?search_query=Simo+Ahava+consent+mode+v2+GTM" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Consent Mode v2 — Complete Walkthrough</p>
      <p class="vg-creator">Simo Ahava</p>
      <span class="vg-duration">⏱ 28 min · The canonical guide</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="GNCRVI2qs3c" href="https://www.youtube.com/results?search_query=Meta+CAPI+conversions+API+server+side+setup" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Meta Conversions API End-to-End Setup</p>
      <p class="vg-creator">Meta Blueprint</p>
      <span class="vg-duration">⏱ 22 min · Implementation reference</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="lOuQW19A5xQ" href="https://www.youtube.com/results?search_query=SKAdNetwork+4+ad+attribution+kit+iOS" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">SKAdNetwork 4 + AdAttributionKit</p>
      <p class="vg-creator">Apple WWDC</p>
      <span class="vg-duration">⏱ 25 min · Official from Apple</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="wkxyOAK7hQM" href="https://www.youtube.com/results?search_query=Privacy+Sandbox+Topics+API+Protected+Audience+explained" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Privacy Sandbox — Topics + Protected Audience</p>
      <p class="vg-creator">Google Chrome Developers</p>
      <span class="vg-duration">⏱ 20 min · The 7 APIs explained</span>
    </div>
  </a>
</div>

## 📚 Recommended (~55 min)

<div class="vg-grid">
  <a class="vg-card" data-video-id="0Ud_YzYtrVc" href="https://www.youtube.com/results?search_query=data+clean+rooms+marketing+measurement+IAB" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Data Clean Rooms for Marketing</p>
      <p class="vg-creator">IAB Tech Lab</p>
      <span class="vg-duration">⏱ 22 min · Industry view</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="X7FPcdepv4M" href="https://www.youtube.com/results?search_query=GDPR+CCPA+CPRA+marketer+compliance" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">GDPR / CCPA / CPRA — What Marketers Need</p>
      <p class="vg-creator">Future of Privacy Forum</p>
      <span class="vg-duration">⏱ 18 min · Compliance overview</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="eRRvcyaSfFs" href="https://www.youtube.com/results?search_query=Snowflake+data+clean+room+walkthrough" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Snowflake Data Clean Room Walkthrough</p>
      <p class="vg-creator">Snowflake</p>
      <span class="vg-duration">⏱ 16 min · Snowflake-native pattern</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" data-video-id="lg-VhHlztqo" href="https://www.youtube.com/results?search_query=differential+privacy+marketing+explained" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Differential Privacy For Marketers</p>
      <p class="vg-creator">Harvard / Cynthia Dwork</p>
      <span class="vg-duration">⏱ 28 min · The math + intuition</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="l9JQ6KY96Mg" href="https://www.youtube.com/results?search_query=Sephora+CCPA+settlement+marketing+implications" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Lessons From The Sephora CCPA Settlement</p>
      <p class="vg-creator">IAPP / Privacy Lawyer Network</p>
      <span class="vg-duration">⏱ 25 min · Case study</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="0phuqAsbJIU" href="https://www.youtube.com/results?search_query=Apple+ATT+iOS+measurement+impact+marketers" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">iOS ATT — 4 Years Later</p>
      <p class="vg-creator">AppsFlyer Research</p>
      <span class="vg-duration">⏱ 22 min · Empirical impact</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **Simo Ahava** | THE Consent Mode + sGTM source |
| **Meta Blueprint** | CAPI implementation reference |
| **Apple Developer / WWDC** | SKAdNetwork + AdAttributionKit official |
| **Google Chrome Developers** | Privacy Sandbox |
| **IAB Tech Lab** | Industry standards |
| **Future of Privacy Forum** | Compliance + regulatory analysis |

---

## ✅ After watching

1. Name the 4 Consent Mode v2 parameters.
2. Difference between Basic and Advanced Consent Mode?
3. Why does Pixel + CAPI deduplicate better than Pixel alone?
4. SKAdNetwork conversion value — how many bits?
5. List 3 of the 7 Privacy Sandbox APIs.

If you can answer all 5 in under 8 minutes, you're ready for the [Quiz](./Quiz.md).
