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

# 🎥 Module 8 Videos: Caching, CDN & Edge

> **How to use:** CloudFront and Route 53 questions are everywhere. Watch the "vs Global Accelerator" video carefully, easy trap.

## ⭐ Essential watching (~65 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" data-video-id="cZ7PhGCCZDA" href="https://www.youtube.com/results?search_query=AWS+CloudFront+complete+tutorial" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>☁️</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">CloudFront Complete Tutorial</p>
      <p class="vg-creator">Stephane Maarek</p>
      <span class="vg-duration">⏱ 22 min · Origins, behaviors, OAC</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="shayltziZSI" href="https://www.youtube.com/results?search_query=CloudFront+vs+Global+Accelerator" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🚀</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">CloudFront vs Global Accelerator</p>
      <p class="vg-creator">Tutorials Dojo</p>
      <span class="vg-duration">⏱ 14 min · The big trap</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="jXgIRPjXv3Y" href="https://www.youtube.com/results?search_query=Route+53+routing+policies+demo" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🌍</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Route 53 Routing Policies (all 8)</p>
      <p class="vg-creator">ExamPro</p>
      <span class="vg-duration">⏱ 18 min · Latency, failover, geo</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="pT0xvs3Dueg" href="https://www.youtube.com/results?search_query=AWS+WAF+Shield+CloudFront" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🛡️</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">WAF + Shield + CloudFront DDoS Pattern</p>
      <p class="vg-creator">Be A Better Dev</p>
      <span class="vg-duration">⏱ 13 min · Edge security</span>
    </div>
  </a>
</div>

## 📚 Recommended (~35 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" data-video-id="owVVykBJ0RI" href="https://www.youtube.com/results?search_query=Lambda+at+Edge+vs+CloudFront+Functions" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>⚡</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Lambda@Edge vs CloudFront Functions</p>
      <p class="vg-creator">ExamPro</p>
      <span class="vg-duration">⏱ 13 min · Decision tree</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="JIW_pV3zau8" href="https://www.youtube.com/results?search_query=CloudFront+signed+URL+signed+cookie" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🔐</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Signed URLs & Cookies in CloudFront</p>
      <p class="vg-creator">Stephane Maarek</p>
      <span class="vg-duration">⏱ 11 min · Private content</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="EgjM6CHob8o" href="https://www.youtube.com/results?search_query=ElastiCache+caching+strategies" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🔥</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Caching Strategies, Cache-Aside, Write-Through</p>
      <p class="vg-creator">Be A Better Dev</p>
      <span class="vg-duration">⏱ 11 min · Patterns</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid" markdown="0">
  <a class="vg-card" data-video-id="Kxpl0ICzQV0" href="https://www.youtube.com/results?search_query=Route+53+failover+health+check+demo" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🩺</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Route 53 Failover + Health Checks</p>
      <p class="vg-creator">freeCodeCamp</p>
      <span class="vg-duration">⏱ 18 min · Active-passive DR</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="GB_R9S6XJqs" href="https://www.youtube.com/results?search_query=CloudFront+origin+access+control+OAC" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🔒</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">CloudFront OAC vs OAI</p>
      <p class="vg-creator">AWS</p>
      <span class="vg-duration">⏱ 11 min · Newer = better</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="IjYk8lkNf9o" href="https://www.youtube.com/results?search_query=Global+Accelerator+gaming+demo" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎮</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Global Accelerator for Gaming</p>
      <p class="vg-creator">AWS</p>
      <span class="vg-duration">⏱ 16 min · UDP, low latency</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels

| Channel | Why |
|---------|-----|
| **Stephane Maarek** | CloudFront end-to-end |
| **Tutorials Dojo** | Practice-exam framing |
| **ExamPro** | Edge & routing depth |
| **Be A Better Dev** | Concise patterns |

---

## ✅ After watching

1. CloudFront vs Global Accelerator?
2. Lambda@Edge vs CloudFront Functions?
3. Name 4 Route 53 routing policies and a use case.
4. OAC purpose?
5. What does AWS Shield Standard cost?

Ready? [Quiz](./Quiz.md).
