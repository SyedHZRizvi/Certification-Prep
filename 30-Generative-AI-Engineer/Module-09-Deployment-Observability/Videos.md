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
</style>

# 🎥 Module 9 Videos: Deployment, Observability & Cost

## ⭐ Essential

<div class="vg-grid">
  <a class="vg-card" data-video-id="5ZlavKF_98U" href="https://www.youtube.com/results?search_query=vllm+paged+attention+production+serving" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">vLLM + PagedAttention, production serving</p>
      <p class="vg-creator">vLLM authors</p>
      <span class="vg-duration">⏱ 50m · The serving standard</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=litellm+gateway+model+routing+tutorial" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">LiteLLM, gateway + routing tutorial</p>
      <p class="vg-creator">LiteLLM team</p>
      <span class="vg-duration">⏱ 40m · One API, all providers</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=langfuse+open+source+observability+tutorial" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Langfuse, open-source observability</p>
      <p class="vg-creator">Langfuse team</p>
      <span class="vg-duration">⏱ 45m · Traces + costs + evals</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=prompt+caching+anthropic+openai+cost" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Prompt caching, Anthropic + OpenAI</p>
      <p class="vg-creator">community / DevRel</p>
      <span class="vg-duration">⏱ 30m · Up to 90% cost saving</span>
    </div>
  </a>
</div>

## 📚 Recommended

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=modal+labs+gpu+serverless+inference" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Modal, serverless GPU inference</p>
      <p class="vg-creator">Modal Labs</p>
      <span class="vg-duration">⏱ 35m · "Lambda for GPUs"</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=helicone+llm+observability+proxy" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Helicone, proxy-based observability</p>
      <p class="vg-creator">Helicone</p>
      <span class="vg-duration">⏱ 30m · Cheapest path to visibility</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="S-8yr_RibJ4" href="https://www.youtube.com/results?search_query=speculative+decoding+llm+inference+acceleration" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Speculative decoding, latency 2-3× faster</p>
      <p class="vg-creator">community / paper review</p>
      <span class="vg-duration">⏱ 30m · Draft + verify</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=gptcache+semantic+cache+llm" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">GPTCache, semantic caching</p>
      <p class="vg-creator">Zilliz</p>
      <span class="vg-duration">⏱ 25m · 30-70% cost cut on hot queries</span>
    </div>
  </a>
</div>

## 🍿 Optional

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=tensorrt+llm+nvidia+inference+optimization" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">TensorRT-LLM, NVIDIA serving</p>
      <p class="vg-creator">NVIDIA</p>
      <span class="vg-duration">⏱ 40m · The fastest serving stack</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="UtSSMs6ObqY" href="https://www.youtube.com/results?search_query=ollama+local+llm+production" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Ollama, local LLM in 1 command</p>
      <p class="vg-creator">Ollama</p>
      <span class="vg-duration">⏱ 20m · Consumer-grade serving</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=groq+lpu+inference+fast+latency" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Groq LPU, lowest-latency serving</p>
      <p class="vg-creator">Groq</p>
      <span class="vg-duration">⏱ 25m · Custom inference hardware</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="oFfVt3S51T4" href="https://www.youtube.com/results?search_query=cursor+team+building+ai+ide" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Cursor team, building an AI IDE</p>
      <p class="vg-creator">Cursor / podcasts</p>
      <span class="vg-duration">⏱ 1h · The full latency war</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels

| Channel | Why |
|---------|-----|
| **vLLM Engineering** | The serving standard, from the source |
| **Modal Labs** | Best DevRel on serverless GPU |
| **Latent Space podcast** | Production GenAI engineer interviews |
| **AI Engineer Conference** | Production talks |
| **LiteLLM** | Gateway patterns |
| **Anthropic Cookbook** | Caching + observability official patterns |

---

## ✅ After watching

1. Three production techniques that reduced Cursor's latency below 200ms p95?
2. vLLM PagedAttention, what does it do?
3. List 5 things to track on a cost dashboard.
4. Streaming + early-cancel, sketch the architecture.
5. Hosted vs self-hosted, when does break-even happen?

Then [Quiz](./Quiz.md).
