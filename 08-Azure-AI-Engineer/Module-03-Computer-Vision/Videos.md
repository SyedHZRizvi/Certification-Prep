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

# 🎥 Module 3 Videos: Computer Vision

> **How to use:** Click any video card to search YouTube and watch the latest top result. For Image Analysis 4.0 content, pick videos dated 2024 or later — the 3.x API has different methods.

## ⭐ Essential watching (~55 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+AI+Vision+Image+Analysis+4.0+tutorial" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Azure AI Vision — Image Analysis 4.0 walkthrough</p>
      <p class="vg-creator">Microsoft Learn</p>
      <span class="vg-duration">⏱ 15 min · Visual features + SDK</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+Custom+Vision+tutorial+classification" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Custom Vision — train a classifier end-to-end</p>
      <p class="vg-creator">Microsoft Reactor</p>
      <span class="vg-duration">⏱ 12 min · Training → Prediction</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+Face+API+detection+attributes+tutorial" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Azure Face Service — Detect, Verify, Identify</p>
      <p class="vg-creator">Microsoft Learn</p>
      <span class="vg-duration">⏱ 14 min · Limited access too</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+OCR+Read+API+printed+handwritten" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">OCR with the Read API</p>
      <p class="vg-creator">Microsoft Reactor</p>
      <span class="vg-duration">⏱ 12 min · Pages → blocks → lines → words</span>
    </div>
  </a>
</div>

## 📚 Recommended (~30 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Custom+Vision+export+ONNX+edge+device" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Export Custom Vision to ONNX for edge inference</p>
      <p class="vg-creator">Microsoft Learn</p>
      <span class="vg-duration">⏱ 10 min · Compact domain</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+Video+Indexer+walkthrough+insights" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Azure AI Video Indexer overview</p>
      <p class="vg-creator">Adam Marczak — Azure for Everyone</p>
      <span class="vg-duration">⏱ 12 min · Portal + insights</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+computer+vision+object+detection+bounding+box" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Object detection in Custom Vision</p>
      <p class="vg-creator">Microsoft Reactor</p>
      <span class="vg-duration">⏱ 14 min · Bounding boxes + mAP</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+AI+Vision+spatial+analysis" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Spatial Analysis with Azure AI Vision</p>
      <p class="vg-creator">Microsoft Learn</p>
      <span class="vg-duration">⏱ 18 min · People counting, region monitoring</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=responsible+face+API+Azure+deprecation+emotion" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Why Microsoft retired Face emotion / age</p>
      <p class="vg-creator">Microsoft Research</p>
      <span class="vg-duration">⏱ 10 min · The RAI rationale</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---|---|
| **Microsoft Learn** | API canon |
| **Microsoft Reactor** | Live coding |
| **Adam Marczak — Azure for Everyone** | Clear explainers |
| **Cloud Academy** | Lab-style walkthroughs |
| **Tim Warner** | AI-102 exam focus |

---

## ✅ After watching

1. Which visual feature would you pass to get text from a photo?
2. What's the difference between Image Analysis Read and Document Intelligence?
3. What two resources does Custom Vision use?
4. Name 3 Face attributes that are still available, and one that was removed.
5. Which Custom Vision domain do you choose for edge export?

If you can answer all 5, you're ready for the [Quiz](./Quiz.md).
