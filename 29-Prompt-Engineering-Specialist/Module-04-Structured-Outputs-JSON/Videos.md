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

# 🎥 Module 4 Videos: Structured Outputs & JSON

> **How to use:** Click any video card to search YouTube and watch the latest top result for that topic.

## ⭐ Essential watching (~60 min)

<div class="vg-grid">
  <a class="vg-card" data-video-id="7yMXs9TRvVI" href="https://www.youtube.com/results?search_query=OpenAI+structured+outputs+launch+tutorial" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">OpenAI Structured Outputs, Full Tutorial</p>
      <p class="vg-creator">OpenAI / DevDay</p>
      <span class="vg-duration">⏱ 20 min · The 2024 launch</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="2HsmNeT8TCg" href="https://www.youtube.com/results?search_query=Anthropic+tool+use+claude+function+calling+tutorial" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Anthropic Tool Use, End to End</p>
      <p class="vg-creator">Anthropic</p>
      <span class="vg-duration">⏱ 18 min · tool_choice + schemas</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="yj-wSRJwrrc" href="https://www.youtube.com/results?search_query=instructor+python+library+jason+liu+pydantic+llm" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">instructor + Pydantic, The 2026 Default</p>
      <p class="vg-creator">Jason Liu</p>
      <span class="vg-duration">⏱ 22 min · The cross-provider pattern</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="7edFjPiSsZs" href="https://www.youtube.com/results?search_query=pydantic+v2+tutorial+for+llm+structured+output" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Pydantic v2 for LLM Output</p>
      <p class="vg-creator">ArjanCodes</p>
      <span class="vg-duration">⏱ 15 min · Field, validators, enums</span>
    </div>
  </a>
</div>

## 📚 Recommended (~40 min)

<div class="vg-grid">
  <a class="vg-card" data-video-id="ltCMuRzHYH8" href="https://www.youtube.com/results?search_query=Gemini+structured+output+response+schema+tutorial" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Gemini Structured Output, Hands On</p>
      <p class="vg-creator">Google AI Developers</p>
      <span class="vg-duration">⏱ 14 min · response_schema</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="XpGGo_7YBNQ" href="https://www.youtube.com/results?search_query=outlines+library+constrained+generation+open+source" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Outlines, Constrained Generation for Open-Source</p>
      <p class="vg-creator">dottxt.ai</p>
      <span class="vg-duration">⏱ 16 min · Local-model structured output</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="EcB0PiNmbFo" href="https://www.youtube.com/results?search_query=function+calling+parallel+tool+calls+llm+agent" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Parallel Tool Calls in 2026 Agents</p>
      <p class="vg-creator">DeepLearning.AI</p>
      <span class="vg-duration">⏱ 12 min · Reduce agent latency</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" data-video-id="G_J_xByLGGc" href="https://www.youtube.com/results?search_query=json+schema+tutorial+for+beginners" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">JSON Schema Crash Course</p>
      <p class="vg-creator">JSON Schema Org</p>
      <span class="vg-duration">⏱ 20 min · Spec essentials</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="AFE6x81AP4k" href="https://www.youtube.com/results?search_query=context+free+grammar+masking+LLM+constrained+decoding" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">How Constrained Decoding Works</p>
      <p class="vg-creator">Yannic Kilcher</p>
      <span class="vg-duration">⏱ 25 min · Grammar masking explained</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="kCc8FmEb1nY" href="https://www.youtube.com/results?search_query=BAML+boundary+ml+schema+first+prompt+language" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">BAML, Schema-First Prompts</p>
      <p class="vg-creator">Boundary</p>
      <span class="vg-duration">⏱ 18 min · The new player in 2025</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **Jason Liu (instructor)** | The instructor library + structured-output patterns. |
| **Anthropic** | Tool use deep-dives. |
| **OpenAI / DevDay** | Structured outputs launch + updates. |
| **ArjanCodes** | Pydantic v2 craft. |
| **DeepLearning.AI** | Agent + tool-calling courses. |
| **Yannic Kilcher** | Constrained-decoding paper reviews. |

---

## ✅ After watching

Answer these in your notebook (without re-watching):

1. State the L0 → L1 → L2 progression and what each guarantees.
2. How does Anthropic achieve schema-enforced output without a `response_format` flag?
3. What does the `instructor` library give you that the raw OpenAI SDK doesn't?
4. When would you use an `Enum` / `Literal` field?
5. Describe the retry-on-validation-error loop in 3 sentences.

If you can answer all 5, you're ready for the [Quiz](./Quiz.md). If not, re-watch the OpenAI + Jason Liu videos.
