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

# 🎥 Module 8 Videos: Production at Scale

> **How to use:** Click any video card to search YouTube and watch the latest top result for that topic.

## ⭐ Essential watching (~65 min)

<div class="vg-grid">
  <a class="vg-card" data-video-id="2HsmNeT8TCg" href="https://www.youtube.com/results?search_query=anthropic+prompt+caching+walkthrough+tutorial" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Anthropic Prompt Caching, Full Tutorial</p>
      <p class="vg-creator">Anthropic Cookbook</p>
      <span class="vg-duration">⏱ 16 min · The biggest cost lever</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="kpqsLxhBxhU" href="https://www.youtube.com/results?search_query=LiteLLM+multi+provider+abstraction+tutorial" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">LiteLLM, The Cross-Provider Standard</p>
      <p class="vg-creator">BerriAI / LiteLLM</p>
      <span class="vg-duration">⏱ 18 min · Fallbacks, router, cost</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="ZkRB7WLSF7M" href="https://www.youtube.com/results?search_query=Langfuse+observability+LLM+open+source+tutorial" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Langfuse, Production LLM Observability</p>
      <p class="vg-creator">Langfuse</p>
      <span class="vg-duration">⏱ 14 min · Traces + prompts + costs</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="O8WBbwbDVyU" href="https://www.youtube.com/results?search_query=Eugene+Yan+patterns+for+building+LLM+systems+talk" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Patterns for Building LLM-Based Systems</p>
      <p class="vg-creator">Eugene Yan</p>
      <span class="vg-duration">⏱ 22 min · The production-engineering POV</span>
    </div>
  </a>
</div>

## 📚 Recommended (~45 min)

<div class="vg-grid">
  <a class="vg-card" data-video-id="Rgj_Kie0FEg" href="https://www.youtube.com/results?search_query=GPTCache+semantic+cache+tutorial+LLM" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Semantic Cache with GPTCache</p>
      <p class="vg-creator">Zilliz</p>
      <span class="vg-duration">⏱ 15 min · 30-70% extra cost cut</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="OSmSdBhSgEw" href="https://www.youtube.com/results?search_query=OpenAI+batch+API+50%25+discount+tutorial" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">OpenAI Batch API, 50% Discount</p>
      <p class="vg-creator">OpenAI</p>
      <span class="vg-duration">⏱ 14 min · Non-realtime work</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="3wAON0Lqviw" href="https://www.youtube.com/results?search_query=prompt+versioning+langsmith+promptlayer+walkthrough" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Prompt Versioning, LangSmith / PromptLayer</p>
      <p class="vg-creator">DeepLearning.AI</p>
      <span class="vg-duration">⏱ 16 min · Treat prompts like code</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" data-video-id="8N4FZEQ2HGA" href="https://www.youtube.com/results?search_query=OpenAI+Realtime+API+voice+websocket+tutorial" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">OpenAI Realtime API, Voice Apps</p>
      <p class="vg-creator">OpenAI / DevDay</p>
      <span class="vg-duration">⏱ 22 min · WebSocket streaming</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="n07f4uILhHE" href="https://www.youtube.com/results?search_query=OpenTelemetry+GenAI+semantic+conventions" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">OpenTelemetry GenAI, Vendor-Neutral Telemetry</p>
      <p class="vg-creator">OpenTelemetry</p>
      <span class="vg-duration">⏱ 18 min · The emerging standard</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="eLXF0VojuSs" href="https://www.youtube.com/results?search_query=Hamel+eval+driven+development+talk" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Eval-Driven Development, Hamel</p>
      <p class="vg-creator">Hamel Husain</p>
      <span class="vg-duration">⏱ 28 min · CI for prompts</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **Anthropic Cookbook** | Production patterns from the Claude team. |
| **OpenAI / DevDay** | API launches, batch, realtime, structured outputs. |
| **Eugene Yan** | Engineering depth on LLM systems. |
| **Hamel Husain** | Eval discipline. |
| **Langfuse / Helicone / LangSmith** | Observability platform tutorials. |
| **BerriAI / LiteLLM** | Multi-provider abstraction. |
| **Zilliz / Pinecone / Weaviate** | Vector DB + semantic cache. |

---

## ✅ After watching

Answer these in your notebook (without re-watching):

1. Two cache types, prompt cache vs semantic cache. When each?
2. Three reasons to use LiteLLM over hardcoded vendor SDK.
3. Three signals every production LLM observability stack must capture.
4. When does Batch API make sense, and what's the savings?
5. Sketch a CI pipeline for prompts that catches regressions.

If you can answer all 5, you're ready for the [Quiz](./Quiz.md). If not, re-watch the Anthropic + Eugene Yan videos.
