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

# 🎥 Module 6 Videos: Conversational AI

> **How to use:** Click any video card. Filter videos to 2024+, older LUIS / QnA Maker tutorials are outdated.

## ⭐ Essential watching (~45 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+Bot+Service+overview+tutorial" target="_blank" rel="noopener" data-video-id="dAl9FsWOnlI">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Azure AI Bot Service, overview + first bot</p>
      <p class="vg-creator">Microsoft Learn</p>
      <span class="vg-duration">⏱ 14 min · Channels + hosting</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Bot+Framework+SDK+Python+tutorial" target="_blank" rel="noopener" data-video-id="ynG6Muox81o">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Bot Framework SDK, building a Python bot</p>
      <p class="vg-creator">Microsoft Reactor</p>
      <span class="vg-duration">⏱ 16 min · Dialogs + state</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=CLU+conversational+language+understanding+demo" target="_blank" rel="noopener" data-video-id="TNL2qiBv1sg">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">CLU, intent + entity in 10 minutes</p>
      <p class="vg-creator">Microsoft Learn</p>
      <span class="vg-duration">⏱ 10 min · Language Studio walkthrough</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Orchestration+workflow+Azure+AI+Language" target="_blank" rel="noopener" data-video-id="UCA7GUWweVE">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Orchestration workflow, CLU + Question Answering</p>
      <p class="vg-creator">Microsoft Reactor</p>
      <span class="vg-duration">⏱ 12 min · Single entry-point routing</span>
    </div>
  </a>
</div>

## 📚 Recommended (~30 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Adaptive+Cards+bot+framework+tutorial" target="_blank" rel="noopener" data-video-id="t6_x8Bpzxss">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Adaptive Cards, rich UI across channels</p>
      <p class="vg-creator">Microsoft Reactor</p>
      <span class="vg-duration">⏱ 10 min · Card JSON</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Direct+Line+Speech+voice+bot+tutorial" target="_blank" rel="noopener" data-video-id="gCwAqpWFY6U">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Direct Line Speech, voice bots</p>
      <p class="vg-creator">Microsoft Learn</p>
      <span class="vg-duration">⏱ 12 min · STT/TTS pipeline</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Question+Answering+Azure+AI+Language+knowledge+base" target="_blank" rel="noopener" data-video-id="1CBY6gXdpV0">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Question Answering, build a KB</p>
      <p class="vg-creator">Microsoft Learn</p>
      <span class="vg-duration">⏱ 10 min · Sources + active learning</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Copilot+Studio+vs+Bot+Framework" target="_blank" rel="noopener" data-video-id="sIUNK809qlc">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Copilot Studio vs Bot Framework</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 20 min · Where Microsoft is heading</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=bot+framework+composer+walkthrough" target="_blank" rel="noopener" data-video-id="lnTGFQH-dXQ">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Bot Framework Composer (legacy track)</p>
      <p class="vg-creator">Microsoft Reactor</p>
      <span class="vg-duration">⏱ 18 min · Visual designer basics</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---|---|
| **Microsoft Learn** | Canonical |
| **Microsoft Reactor** | Live walkthroughs |
| **John Savill** | Architectural context |
| **Adam Marczak** | Clear visuals |

---

## ✅ After watching

1. Name 4 channels Bot Service supports.
2. Difference between Direct Line and Direct Line Speech?
3. When do you use Orchestration workflow?
4. Where does production bot state typically live?
5. What's the relationship between Bot Service and the Bot Framework SDK?

If you can answer all 5, you're ready for the [Quiz](./Quiz.md).
