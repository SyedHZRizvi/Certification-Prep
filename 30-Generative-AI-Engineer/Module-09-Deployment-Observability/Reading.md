# Module 9: Deployment, Observability & Cost 🚀

> **Why this module matters:** Code that works on your laptop and code that serves a million users have *almost nothing in common.* This module is the engineering of the gap — how to choose serving infrastructure, instrument every layer of the pipeline, monitor cost in real time, cache aggressively, and ship a model gateway that the rest of the engineering org actually trusts. The teams that win in production are the ones whose runbooks are crisp.

> **Prerequisites for this module.** You should be comfortable with:
> - Modules 1–8
> - Docker basics, FastAPI, HTTP basics
> - Cloud-shaped concepts (autoscaling, load balancers, observability)

---

## 🎬 A Story: How Cursor Beat GPT-4 Latency at GPT-4 Quality

Late 2024. Cursor's autocomplete and inline-edit features needed to feel *instant* — anything over 400ms of perceived latency would lose to local-IDE autocomplete. But the team relied on Claude 3.5 Sonnet and GPT-4o for the heavy lifting, both of which had p95 first-token latencies of 1-2 seconds.

The team's solution was a stack of techniques that, individually, are well-known — but the *combination* was the moat:

1. **Two-model strategy.** A small fast model (Claude Haiku, GPT-4o-mini) drafted the autocomplete; the big model verified only on uncertain cases. Latency followed the small model.
2. **Speculative decoding** between the two models for the verification step — the big model checked the small model's draft in parallel.
3. **Prompt caching.** A 100K-token codebase context was the *same* for every query in a session — cache once, reuse N times. ~74% cost reduction in their own reporting.
4. **Semantic caching.** If a user's query was semantically similar to a recent one, return the cached answer directly.
5. **Edge serving.** Inference servers in regions close to the user; routing by latency, not just availability.
6. **vLLM with PagedAttention** for their self-hosted models.
7. **Streaming everything.** First-token in 80ms even when total generation took 3 seconds; perceived speed dominated by first-token.
8. **Background observability** in Helicone, with cost alerts wired to PagerDuty.

The result, after a quarter of work: median p95 to first token under 200ms, total cost per active user 4× lower than naive deployment. Cursor became one of the highest-revenue developer tools of 2024-2025.

This module is the engineering toolkit that combination drew from.

---

## 🚦 The Deployment Decision: Hosted vs Self-Hosted

The big upfront question.

### Hosted (Anthropic, OpenAI, Google, Cohere, Mistral, Bedrock)

**Use when:**
- You want zero infrastructure to operate
- You're using frontier models (Claude Opus, GPT-5)
- Your scale is < ~10M tokens/day
- You can absorb vendor pricing
- Your workload tolerates third-party data flow

**Trade-offs:**
- Per-token pricing — predictable cost per call, but no economies of scale
- API rate limits — your tier matters
- Latency depends on the provider; can be inconsistent
- Data goes to the provider (most have enterprise no-train terms)

### Self-Hosted (vLLM, TGI, llama.cpp, Ollama on your own hardware or rented GPUs)

**Use when:**
- Privacy / data residency requirements forbid third-party APIs
- You have specialized fine-tuned models
- Your token volume justifies the fixed cost (often > 100M tokens/day)
- You need full control over latency, batching, version
- You want to avoid lock-in

**Trade-offs:**
- GPU procurement, autoscaling, observability, redundancy — all on you
- Quality ceiling: open-weight models, while excellent, lag frontier closed models on hardest benchmarks
- Operational expertise required (CUDA, kernel pinning, KV-cache management)

### The hybrid (the right answer for most production teams)

- Frontier closed models (Anthropic / OpenAI) for hardest queries
- Mid-tier hosted (Claude Haiku, GPT-4o-mini) for high-volume default
- Self-hosted Llama 4 / Mistral for cost-sensitive or privacy-sensitive routes
- Model gateway (LiteLLM, Portkey, custom) routes requests

---

## ⚡ Self-Hosted Serving — The Stack

### vLLM

The de facto standard for production self-hosting in 2026. Created by Berkeley researchers (Kwon et al., 2023). Key innovations:

- **PagedAttention** — KV cache in non-contiguous pages, virtual-memory style; eliminates fragmentation; 2-4× throughput vs naive serving
- **Continuous batching** — new requests can join an in-flight batch; no waiting for batch boundaries
- **FlashAttention** kernels under the hood
- **Speculative decoding** support
- **OpenAI-compatible API** — drop-in replacement
- **Multi-LoRA serving** — hot-swap adapters per request

```bash
vllm serve meta-llama/Llama-3.1-8B-Instruct \
  --tensor-parallel-size 2 \
  --gpu-memory-utilization 0.95 \
  --max-model-len 16384 \
  --enable-lora \
  --lora-modules myorg/finance-lora=path/to/lora
```

### TGI (Text Generation Inference, HuggingFace)

HuggingFace's serving framework. Strong feature parity with vLLM; slightly different optimization choices; tight HF model hub integration.

### llama.cpp / Ollama / LMStudio

For *consumer-grade* serving — your laptop, edge devices, offline applications.

- **llama.cpp** — GGUF quantized models; runs on CPU + GPU + Apple Silicon; the foundation of the local-LLM ecosystem
- **Ollama** — opinionated CLI wrapper around llama.cpp; one-line model serving
- **LMStudio** — GUI wrapper

### TensorRT-LLM (NVIDIA)

NVIDIA's optimized inference framework. Faster than vLLM in many benchmarks; tighter integration with NVIDIA hardware (H100, B200); steeper learning curve. Used in serving at the largest scale (Cohere, NVIDIA NIM).

### NVIDIA NIM

Pre-packaged container images of optimized models. The "I want a Docker image of Llama 3 70B that just works" path. Production-ready; expensive licensing.

### SGLang

Newer serving framework with strong support for structured generation and RAG patterns. Increasingly adopted.

---

## 🌐 Hosted Inference Providers (Beyond OpenAI/Anthropic)

| Provider | Strength | Models |
|----------|----------|--------|
| **AWS Bedrock** | Enterprise integration, Anthropic + Mistral + Llama + Cohere + AI21 | Wide |
| **Azure OpenAI** | Enterprise + Azure stack + compliance | OpenAI family |
| **Google Vertex AI** | Gemini + open weights + Anthropic + Mistral | Wide |
| **Together AI** | Open-weight inference; cheap; fast | Llama, Mistral, DeepSeek, Qwen |
| **Fireworks** | Open-weight; speed-focused | Llama, Mixtral, DeepSeek |
| **Groq** | LPU hardware; lowest latency in industry | Llama, Mistral, Qwen |
| **Modal** | Serverless GPU; "Lambda for GPUs" | Anything you bring |
| **Replicate** | Hosted model marketplace; easy demos | Wide |
| **RunPod** | Cheap GPU rental | Anything |
| **Lambda Labs / CoreWeave** | GPU clusters for training/serving | Anything |
| **Perplexity** | API access to Llama/Mistral + their own | Wide |
| **DeepInfra / OpenRouter** | Aggregators of multiple models behind one API | Wide |

🎯 **The aggregators (OpenRouter, LiteLLM-cloud)** are increasingly the right starting point — one API key, drop-in switching between providers, easier comparison.

---

## 🚪 Model Gateway Pattern

A *model gateway* is a layer between your application code and any LLM provider, abstracting:

- Provider selection (route to cheapest available for this call type)
- Retry + circuit breakers
- Fallback (Anthropic outage? Failover to OpenAI)
- Caching (semantic + prompt-prefix)
- Observability (traces, metrics, cost)
- Rate limiting per tenant
- Auth / API key rotation

Tools:
- **LiteLLM** — open-source; supports 100+ providers; drop-in OpenAI API
- **Portkey** — gateway + observability; hosted + OSS
- **Helicone** — observability-first; lighter gateway features
- **Custom FastAPI** — when you have specific routing needs

```python
# LiteLLM example — provider-agnostic
from litellm import completion

response = completion(
    model="anthropic/claude-3-5-sonnet-20241022",  # or "openai/gpt-4o", etc.
    messages=[{"role": "user", "content": "..."}],
    fallbacks=["openai/gpt-4o", "azure/gpt-4"],  # automatic failover
    caching=True,
)
```

🎯 **Build the gateway early.** Switching providers six months in is much easier when there's a clean abstraction layer.

---

## 👁️ Observability — The Eyes of Production

You cannot debug what you cannot trace. Production LLM apps require:

### Tracing

A *trace* records: the user request, the prompt template, the rendered prompt, retrieved chunks, model name + version, parameters (temperature, max_tokens), generated output, tool calls + results, latency per step, token counts, cost, errors. Each *step* of an LCEL chain or LangGraph node becomes a *span*.

Tools:
- **LangSmith** — LangChain's first-party. Best LangChain/LangGraph integration. Free hobbyist; paid for teams.
- **Langfuse** — Open source; self-hostable; growing fast.
- **Phoenix (Arize)** — Open source; tight RAG integration.
- **Helicone** — Lightweight proxy-based observability; supports any provider.
- **Honeycomb / Datadog / New Relic** — General-purpose APM with LLM extensions.
- **W&B Weave** — Strong for experiments + production.

### Metrics

Production dashboards should track:
- **Latency** — p50, p95, p99, time-to-first-token, time-to-last-token, total
- **Throughput** — RPS, tokens/sec
- **Cost** — $/request, $/user/day, by model, by tenant
- **Quality** — % satisfaction (thumbs), regeneration rate, fallback rate
- **Errors** — 5xx, timeout, guardrail blocks
- **Cache hit rate** — both prompt-prefix and semantic
- **Tail behaviors** — what happens to the slowest 1% of requests?

### Alerts

- p99 latency > SLO
- Cost / hour > budget
- 5xx rate > threshold
- Guardrail-block rate spike (under attack? broken classifier?)
- Cache hit rate drop (cache invalidation issue?)

---

## 💰 Cost Engineering

LLM applications die from cost more often than from quality. The discipline:

### Cost drivers

- Input tokens (×N requests) at $X/1M
- Output tokens at $Y/1M (output is typically 3-5× input)
- Number of LLM calls per user request (RAG = 1, agent = 5-30+)
- Re-tries on failures

### Cost reductions, ranked by impact

| Lever | Typical savings |
|-------|------------------|
| **Use smaller models for routable easy queries** | 5–20× cheaper |
| **Prompt caching (Anthropic, OpenAI, Gemini)** | Up to 90% on long static prompts |
| **Semantic caching (return cached answer if query is similar)** | 30–70% depending on workload |
| **Reduce context** — shorter system prompts, fewer chunks, compression | 2–5× |
| **Output structure / brevity** — JSON instead of prose, max_tokens caps | 1.5–3× |
| **Batch inference** for offline workloads | 2–4× |
| **Self-host at scale** | depends; break-even varies |
| **Streaming + early-cancel** when user clicks away | 1.5-3× saved |

### Semantic cache

Embed each query. Maintain a vector store of (query_embedding → cached_answer). On new query, if cosine_sim > 0.97 with a previous query, return the cached answer. Trade-off: false-positive cache hits (returning the wrong cached answer).

Tools: **GPTCache** (Zilliz), **LangChain's RedisSemanticCache**, **custom on pgvector**.

### Cost dashboard

A minimum production dashboard:

```
                                              cost
[ Total spend today ]   [ Spend / hour ]   [ Spend per tenant top-10 ]

                       ┌─────────────────────┐
[ Model breakdown ]    │ haiku  : $42 (38%)  │   [ Cache hit rate ]
                       │ sonnet : $58 (53%)  │
                       │ opus   : $10  (9%)  │
                       └─────────────────────┘
[ Cost per route ]                            [ Tokens per request p95 ]
```

Build this on day one. Every conversation about cost is a vibes-conversation without it.

---

## 🚄 Latency Engineering

Latency = (time to first token) + (token generation time × tokens generated) + (network). Each piece has different levers.

### First-token latency

Dominated by: model load + KV cache build for the prompt. Reduce by:
- Smaller model
- Prompt caching (reuse KV cache)
- Lower batch contention (priority lanes for latency-sensitive traffic)
- Speculative decoding (overlaps draft + verify)
- Co-locate inference and application

### Token generation rate

Dominated by: model size, decode-step compute, batch fill. Reduce by:
- Smaller model
- Speculative decoding
- Quantization (W4A16, INT8, FP8)
- vLLM / TGI / TensorRT-LLM optimized kernels

### Streaming

ALWAYS stream the output to the user. Even when total latency is 3 seconds, streaming the first token at 200ms transforms perceived speed.

### Tail latency

p99 is what your power users feel. Tail spikes come from:
- Cold starts (especially in serverless)
- Cache misses
- Long inputs that didn't fit in the optimal batch
- Slow downstream tools

Track p50, p95, p99 separately. The average lies.

---

## 🌍 Geographic + Multi-Region

For global users:
- **Regional inference endpoints** (Anthropic and OpenAI both have multi-region; Azure / Bedrock especially)
- **Cache replication** to all regions
- **Provider failover** when one region degrades
- **Egress cost** when vector DB and inference are in different regions

The biggest hidden cost: cross-region data transfer between your vector DB and the inference endpoint. Keep them in the same region.

---

## 🚨 Anti-patterns

| Anti-pattern | What goes wrong |
|--------------|------------------|
| Single-provider lock-in | One outage = full downtime |
| No semantic cache | Pay full price for near-duplicate queries |
| No prompt cache | 5-10× more cost on long-prompt workloads |
| Non-streamed responses | Perceived latency wrecks UX |
| Avg latency only (no p95/p99) | Power users get the worst experience and you don't know |
| No cost dashboard | Bill surprise at end of month |
| Same model for every query | 5-20× more expensive than route-by-difficulty |
| Skip observability layer in v1 | Fly blind in production |
| No fallback / failover | Provider outage = downtime |

---

## 🏗️ Lab: vLLM Behind a FastAPI Gateway With Langfuse Traces

Goal: take the RAG from Modules 3+5+7+8 and deploy it as a production service.

Steps:
1. **Self-host Llama-3.1-8B-Instruct with vLLM** on a RunPod / Modal / local GPU
2. **FastAPI gateway** that:
   - Auth (API key)
   - Rate limit (per-tenant via Redis)
   - Route to vLLM (cheap path) or Anthropic Claude (premium path)
   - Semantic cache via pgvector / GPTCache
3. **Langfuse tracing** instrumented at each step (retrieve, rerank, generate)
4. **Prompt caching** for repeated system prompts
5. **Streaming** responses
6. **Cost dashboard** (simple Grafana over Langfuse data)
7. **Alerting** (cost / latency)
8. **Failover** Anthropic → OpenAI on failure

Deliverable: a real production-shaped service. You will have hit OOMs, observed cold-start tails, watched cost dashboards stabilize. This is the muscle that distinguishes a GenAI engineer from a notebook prototyper.

---

## 📊 Case Study — Klarna's Cost-Per-Conversation Optimization (2024)

**Situation.** After the launch in February 2024 (covered in Module 3), Klarna's AI assistant was handling ~700 FTEs of customer-support traffic. The team then optimized aggressively for cost-per-conversation through Q2–Q3 2024.

**Reported optimizations (from their tech blog + a Hacker News AMA):**
- **Multi-model routing**: GPT-4-class for the hardest 5% of conversations; mid-tier for 60%; small-model classifier for the easiest 35%. ~50% cost reduction.
- **Aggressive prompt-caching**: the long policy-document context was cached. ~70% reduction in input-token cost.
- **Semantic caching**: ~30% cache-hit rate on common questions. Free wins.
- **Output-length capping**: enforced concise responses via prompt + max_tokens. ~20% output-token reduction.
- **Streaming + early-cancel**: when a user navigates away, generation is canceled. ~5% saved.

**Combined effect:** Klarna's cost-per-handled-conversation reportedly dropped from ~$0.30 to ~$0.04 in 6 months, while satisfaction scores held. That kind of cost gradient is what turns "AI deployment that works" into "AI deployment that scales economically."

**The infrastructure (as disclosed):**
- Azure OpenAI as the primary provider (existing enterprise relationship)
- Custom gateway for routing + caching
- Langfuse for observability
- Cost dashboards in Datadog with PagerDuty alerts

**The lesson for you, the engineer.** Cost optimization is *its own engineering discipline*. The headline-grabbing "AI agent" replaces 700 FTEs is *less* impressive than the boring quarterly grind from $0.30 to $0.04 — and that grind is what made the project sustainable.

**Discussion (Socratic).**
- **Q1:** Klarna's 5% / 60% / 35% routing — how would you build the classifier that decides? What's the cost of a wrong route?
- **Q2:** Semantic cache hit rate is highly workload-dependent. What kinds of customer-support questions have *high* semantic-cache hit rate, and which kinds have *low*?
- **Q3:** "Streaming + early-cancel" sounds modest (5% savings) but requires real engineering. Walk through the architecture for canceling an in-flight OpenAI call when the user leaves the page.

---

## ✅ Module 9 Summary

You now know:
- 🚦 Hosted vs self-hosted decision (and why hybrid wins)
- ⚡ vLLM, TGI, TensorRT-LLM, NIM, llama.cpp/Ollama
- 🚪 Model gateway pattern (LiteLLM, Portkey, custom)
- 👁️ Observability stack: LangSmith, Langfuse, Phoenix, Helicone
- 💰 Cost engineering: caching, routing, brevity, batch, self-host break-even
- 🚄 Latency engineering: TTFT, generation rate, streaming, tail
- 🌍 Multi-region considerations
- 🚨 The anti-patterns that destroy production economics

**Next steps:**
1. 🎥 [Videos.md](./Videos.md)
2. ✏️ [Quiz.md](./Quiz.md)
3. 📋 [Cheat-Sheet.md](./Cheat-Sheet.md)
4. ➡️ Move on: [Module 10 — Production Case Studies](../Module-10-Production-Case-Studies/Reading.md)

> **Where this leads.**
> - Module 10 walks through real production architectures that use everything in this module.

---

## 📚 Further Reading (Optional)

- 📄 Kwon et al. (2023). *vLLM: Efficient Memory Management for LLM Serving with PagedAttention.*
- 📄 Leviathan et al. (2023). *Fast Inference from Transformers via Speculative Decoding.*
- 📖 [vLLM documentation](https://docs.vllm.ai/)
- 📖 [LiteLLM docs](https://docs.litellm.ai/)
- 📖 [Langfuse documentation](https://langfuse.com/docs)
- 📖 [Helicone](https://helicone.ai/)
- 📖 [GPTCache documentation](https://gptcache.readthedocs.io/)
- 📖 Anthropic's [Prompt Caching guide](https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching)
- 🎬 Cursor team's "Building Cursor" talks (2024-2025)
- 🎬 vLLM authors' presentations
