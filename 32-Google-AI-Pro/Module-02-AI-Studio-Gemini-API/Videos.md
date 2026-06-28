<style>
.vg-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 18px; margin: 22px 0 30px; }
.vg-card { display: block; background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; text-decoration: none; color: inherit; transition: transform .2s, box-shadow .2s, border-color .2s; }
.vg-card:hover { transform: translateY(-3px); box-shadow: 0 12px 24px -8px rgba(0,0,0,.15); border-color: #4285f4; }
.vg-thumb { position: relative; aspect-ratio: 16 / 9; background: linear-gradient(135deg, #4285f4, #fbbc04); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 48px; }
.vg-thumb img { width: 100%; height: 100%; object-fit: cover; }
.vg-play { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,.35); color: #fff; font-size: 48px; opacity: 0; transition: opacity .2s; }
.vg-card:hover .vg-play { opacity: 1; }
.vg-meta { padding: 14px 16px; }
.vg-tag { display: inline-block; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: .08em; padding: 3px 8px; border-radius: 4px; margin-bottom: 8px; }
.vg-tag.essential { background: #d2e3fc; color: #1967d2; }
.vg-tag.recommended { background: #ceead6; color: #137333; }
.vg-tag.optional { background: #fef3c7; color: #92400e; }
.vg-title { font-weight: 700; font-size: 14px; line-height: 1.4; margin: 0 0 4px; color: #0f172a; }
.vg-creator { font-size: 12.5px; color: #64748b; margin: 0 0 6px; }
.vg-duration { font-size: 11px; color: #94a3b8; font-weight: 600; }
</style>

# 🎥 Module 2 Videos: Google AI Studio & Gemini API

> **How to use:** Click any card to search YouTube for the topic. The Google for Developers and Google Cloud Tech channels are usually the most authoritative; prefer those when available.

## ⭐ Essential watching (~70 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Google+AI+Studio+quickstart+gemini+API+key+tutorial" data-video-id="JdKcFCLotZY" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Google AI Studio Quickstart</p>
      <p class="vg-creator">Google Cloud</p>
      <span class="vg-duration">⏱ 12 min · From browser tab to running code</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="qfWpPEgea2A" href="https://www.youtube.com/results?search_query=Gemini+API+Python+google+generativeai+SDK+tutorial" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Gemini API in Python, SDK Tutorial</p>
      <p class="vg-creator">Google for Developers</p>
      <span class="vg-duration">⏱ 15 min · generate_content + generation_config</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Gemini+API+structured+output+response+schema+JSON" data-video-id="c8DOxMnigWE" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Structured Output with response_schema</p>
      <p class="vg-creator">AI Demos</p>
      <span class="vg-duration">⏱ 10 min · JSON-Schema-conformant output</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Gemini+API+safety+settings+harm+thresholds+tutorial" data-video-id="Qf6Tgi6BuE4" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">safety_settings, Configure with Care</p>
      <p class="vg-creator">Google Cloud Tech</p>
      <span class="vg-duration">⏱ 13 min · 4 categories, 4 thresholds</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Gemini+context+caching+Vertex+AI+explicit+cache" data-video-id="WgN9giaqic4" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Context Caching for ~75% Cost Cut</p>
      <p class="vg-creator">Victor Dantas</p>
      <span class="vg-duration">⏱ 12 min · CachedContent + TTL</span>
    </div>
  </a>
</div>

## 📚 Recommended (~55 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Gemini+API+streaming+token+TTFT+example" data-video-id="Y5KnYQcxga0" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Streaming for Better Perceived Latency</p>
      <p class="vg-creator">Mohit Code</p>
      <span class="vg-duration">⏱ 8 min · stream=True walkthrough</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Gemini+code+execution+tool+python+sandbox" data-video-id="r3-x0GtOmmc" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Code Execution, Built-in Python Sandbox</p>
      <p class="vg-creator">Google for Developers</p>
      <span class="vg-duration">⏱ 14 min · tools=code_execution</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Vertex+AI+batch+prediction+gemini+discount" data-video-id="EbEZLp4Dzy8" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Batch API, 50% Discount for Async</p>
      <p class="vg-creator">little five flower starfish</p>
      <span class="vg-duration">⏱ 13 min · BatchPredictionJob</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Gemini+API+vs+Vertex+AI+SDK+difference+migration" data-video-id="tuWtMz6mCPA" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Gemini API vs Vertex AI, When To Switch</p>
      <p class="vg-creator">RankYa</p>
      <span class="vg-duration">⏱ 18 min · Migration path</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Snap+MyAI+Gemini+Vertex+AI+case+study+multimodal" data-video-id="lG6MZGYMN_M" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Snap MyAI on Gemini, Case Study</p>
      <p class="vg-creator">Google Cloud</p>
      <span class="vg-duration">⏱ 22 min · The prototype-to-prod path</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Gemini+system+instruction+prompt+engineering+best+practices" data-video-id="dOxUroR57xs" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Gemini Prompt Engineering Best Practices</p>
      <p class="vg-creator">DeepLearning.AI</p>
      <span class="vg-duration">⏱ 30 min · System instruction patterns</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Gemini+count+tokens+API+pricing+cost+estimation" data-video-id="xSCM9C6NwgA" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">count_tokens, Cost Estimation Before Spend</p>
      <p class="vg-creator">3CodeCamp</p>
      <span class="vg-duration">⏱ 8 min · Free token count endpoint</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="YMIQrH9BQK0" href="https://www.youtube.com/results?search_query=Gemini+temperature+top+p+top+k+sampling+explained" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Temperature, top_p, top_k, Sampling Demystified</p>
      <p class="vg-creator">Jay Alammar / DeepLearning.AI</p>
      <span class="vg-duration">⏱ 18 min · The decoding parameters</span>
    </div>
  </a>
</div>

---

## ✅ After watching

Answer in your notebook:

1. Name the two Python SDK package names, Gemini API vs Vertex AI.
2. What's the difference between API-key auth and ADC?
3. The two fields that together force JSON-Schema-conformant output?
4. The four safety_setting harm categories?
5. When would you use Batch API instead of synchronous calls?

If you can answer all 5, you're ready for the [Quiz](./Quiz.md).
