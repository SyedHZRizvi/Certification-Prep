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

# 🎥 Module 4 Videos: Natural Language Processing

> **How to use:** Click any video card to search YouTube and watch the latest top result. Filter for videos dated 2024+, LUIS / QnA Maker content is outdated.

## ⭐ Essential watching (~60 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+AI+Language+service+overview" target="_blank" rel="noopener" data-video-id="anu8kPVt5PA">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Azure AI Language, full overview</p>
      <p class="vg-creator">Microsoft Learn</p>
      <span class="vg-duration">⏱ 18 min · Every feature</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+Translator+tutorial+Python+SDK" target="_blank" rel="noopener" data-video-id="IHJ2CwhVDhs">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Azure Translator, Python SDK in action</p>
      <p class="vg-creator">Microsoft Reactor</p>
      <span class="vg-duration">⏱ 12 min · Text + Document</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+Speech+SDK+tutorial+STT+TTS" target="_blank" rel="noopener" data-video-id="_oBotkrgZQk">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Azure Speech SDK, STT + TTS walkthrough</p>
      <p class="vg-creator">Microsoft Learn</p>
      <span class="vg-duration">⏱ 16 min · SDK + SSML</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Conversational+Language+Understanding+CLU+tutorial" target="_blank" rel="noopener" data-video-id="-52GQLl8p-4">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">CLU, replacing LUIS with Azure AI Language</p>
      <p class="vg-creator">Microsoft Reactor</p>
      <span class="vg-duration">⏱ 14 min · Intents + entities</span>
    </div>
  </a>
</div>

## 📚 Recommended (~35 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+Question+Answering+knowledge+base+tutorial" target="_blank" rel="noopener" data-video-id="NYiRAMbK8Zw">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Question Answering, KB-driven Q&amp;A</p>
      <p class="vg-creator">Microsoft Learn</p>
      <span class="vg-duration">⏱ 10 min · Replaces QnA Maker</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Custom+Translator+tutorial+training" target="_blank" rel="noopener" data-video-id="2_xfoI9HV9U">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Build a Custom Translator model</p>
      <p class="vg-creator">Microsoft Reactor</p>
      <span class="vg-duration">⏱ 12 min · Parallel data + tuning</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=SSML+Azure+Speech+synthesis+markup" target="_blank" rel="noopener" data-video-id="dl0amatX5zs">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">SSML, tuning voice output</p>
      <p class="vg-creator">Microsoft Learn</p>
      <span class="vg-duration">⏱ 13 min · Rate, pitch, styles</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+PII+detection+Language+service" target="_blank" rel="noopener" data-video-id="WNAFa5TkV3k">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">PII Detection in Azure AI Language</p>
      <p class="vg-creator">Microsoft Reactor</p>
      <span class="vg-duration">⏱ 9 min · Redact &amp; protect</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+Text+Analytics+for+Health" target="_blank" rel="noopener" data-video-id="SvCIXcGGcCU">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Text Analytics for Health</p>
      <p class="vg-creator">Microsoft Learn</p>
      <span class="vg-duration">⏱ 11 min · Medical entity extraction</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---|---|
| **Microsoft Learn** | Canonical examples |
| **Microsoft Reactor** | Coding walkthroughs |
| **Tim Warner** | Azure AI Engineer focus |
| **Adam Marczak** | Animated explainers |
| **John Savill** | Azure depth |

---

## ✅ After watching

1. Which Language feature replaces LUIS? Which replaces QnA Maker?
2. What header must Translator requests include for a global resource?
3. SSML, name 3 things you can control with it.
4. When would you pick abstractive over extractive summarization?
5. Real-time vs batch transcription, when is each best?

If you can answer all 5, you're ready for the [Quiz](./Quiz.md).
