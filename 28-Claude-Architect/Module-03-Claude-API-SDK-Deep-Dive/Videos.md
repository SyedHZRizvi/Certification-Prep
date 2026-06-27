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

# 🎥 Module 3 Videos: Claude API & SDK Deep Dive

> **How to use:** Pair each video with a runnable example from the Anthropic Cookbook. Watch → run → tweak. The fastest way to absorb the API is to *break* it intentionally and read the resulting error.

## ⭐ Essential watching (~70 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" data-video-id="VxhrGyZJPPY" href="https://www.youtube.com/results?search_query=Anthropic+Messages+API+tutorial+getting+started" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Anthropic Messages API, Getting Started</p>
      <p class="vg-creator">Andrei Dumitrescu</p>
      <span class="vg-duration">⏱ 15 min · End-to-end first call</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Anthropic+prompt+caching+tutorial+90+percent+cost+cut" data-video-id="D8LqbR0mJ4M" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Prompt Caching, 90% Cost Reduction Tutorial</p>
      <p class="vg-creator">AI Made Simple</p>
      <span class="vg-duration">⏱ 20 min · The economics deep dive</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Anthropic+SDK+Python+streaming+messages" data-video-id="qfh_q7bWz2g" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Streaming Responses with the Python SDK</p>
      <p class="vg-creator">echohive</p>
      <span class="vg-duration">⏱ 15 min · TTFT and SSE</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Anthropic+Message+Batches+API+bulk+50+percent" data-video-id="gmT-4jSjpA0" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Message Batches, 50% Off for Bulk Workloads</p>
      <p class="vg-creator">Stevan Freeborn</p>
      <span class="vg-duration">⏱ 18 min · Async at scale</span>
    </div>
  </a>
</div>

## 📚 Recommended (~50 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Anthropic+rate+limits+429+retry+backoff" data-video-id="zq97PFCftNA" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Rate Limits, 429s, and Production Retries</p>
      <p class="vg-creator">SystemDR - Scalable System Design</p>
      <span class="vg-duration">⏱ 15 min · Production-grade resilience</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="ZLEm-cLTXEo" href="https://www.youtube.com/results?search_query=Claude+AWS+Bedrock+tutorial+SDK" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Claude on AWS Bedrock</p>
      <p class="vg-creator">AWS / community</p>
      <span class="vg-duration">⏱ 18 min · Direct vs Bedrock comparison</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Anthropic+TypeScript+SDK+Node+tutorial" data-video-id="uqLnih0gczM" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">TypeScript SDK End-to-End</p>
      <p class="vg-creator">AI Coding Tutorials</p>
      <span class="vg-duration">⏱ 20 min · Node + browser-safe patterns</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Anthropic+token+counting+API+endpoint" data-video-id="q4YfW0zjjQQ" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Token Counting Without Inference</p>
      <p class="vg-creator">Yaron Been</p>
      <span class="vg-duration">⏱ 8 min · count_tokens endpoint</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Claude+API+observability+Langfuse+Helicone" data-video-id="GyDAY3WkqRg" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">LLM Observability, Langfuse vs Helicone</p>
      <p class="vg-creator">HowToLiterally</p>
      <span class="vg-duration">⏱ 25 min · Production telemetry</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Claude+GCP+Vertex+AI+tutorial" data-video-id="PAm8Kj8uqVg" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Claude on GCP Vertex AI</p>
      <p class="vg-creator">Google Cloud</p>
      <span class="vg-duration">⏱ 15 min · Vertex integration</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="VRDNyFj-xeE" href="https://www.youtube.com/results?search_query=Anthropic+cookbook+repo+walkthrough" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Anthropic Cookbook Repo Walkthrough</p>
      <p class="vg-creator">community</p>
      <span class="vg-duration">⏱ 30 min · Production patterns</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Klarna+AI+assistant+Claude+production+scale" data-video-id="m3niSE-8ZvE" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Klarna at Production Scale, Claude Case Study</p>
      <p class="vg-creator">Sequoia Capital</p>
      <span class="vg-duration">⏱ 25 min · The 700-agents-of-work story</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **Anthropic (official)** | Authoritative tutorials and feature launches. |
| **Mike Bird (Anthropic DevRel)** | Live coding sessions with the API. |
| **Matt Pocock** | TypeScript-flavored deep dives. |
| **AI Engineer Conf** | Production talks; rate limits, observability, scale. |
| **Langfuse** | LLM observability deep-dives. |
| **AWS / GCP cloud channels** | Hosting-specific tutorials. |

---

## ✅ After watching

Answer these in your notebook (without re-watching):

1. What two HTTP headers should you always log from Anthropic responses?
2. Difference between Batch API and streaming, when do you use each?
3. The four `stop_reason` values and what each means?
4. Mark a multi-block prompt for caching, what does `cache_control` look like in code?
5. Three retryable error classes and the right backoff strategy?

If you can answer all 5, you're ready for the [Quiz](./Quiz.md). If not, re-watch the essential block.
