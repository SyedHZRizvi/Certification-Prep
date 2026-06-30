# 📋 Module 9 Cheat Sheet: Deployment, Observability & Cost

---

## 🚦 Hosted vs Self-Hosted

| Use hosted | Use self-host |
|------------|----------------|
| < 10M tokens/day | > 100M tokens/day |
| Need frontier model | Open-weight is enough |
| Zero ops desired | Have GPU + ops talent |
| Compliance OK with 3rd party | Strict data residency |

**Hybrid is the production reality**, frontier hosted for hard queries; cheap hosted for default; self-host for cost/privacy.

---

## ⚡ Self-Hosted Serving

| Tool | When |
|------|------|
| **vLLM** | Production default; PagedAttention + continuous batching + multi-LoRA |
| **TGI** | HuggingFace ecosystem |
| **TensorRT-LLM / NIM** | NVIDIA hardware, max speed |
| **SGLang** | Newer; strong structured-output |
| **llama.cpp + Ollama** | Consumer / edge / offline |

```bash
vllm serve meta-llama/Llama-3.1-8B-Instruct \
  --tensor-parallel-size 2 \
  --gpu-memory-utilization 0.95 \
  --enable-lora
```

---

## 🌐 Hosted Providers

| Provider | Strength |
|----------|----------|
| Anthropic / OpenAI / Gemini | Frontier closed models |
| AWS Bedrock | Enterprise, multi-vendor |
| Azure OpenAI | Microsoft enterprise + compliance |
| Vertex AI (GCP) | Gemini + open weights |
| Together / Fireworks | Open-weight inference; cheap+fast |
| Groq | Lowest latency (LPU) |
| Modal | Serverless GPU |
| Replicate / RunPod / Lambda / CoreWeave | Various GPU rental |
| OpenRouter | Aggregator API |

---

## 🚪 Model Gateway (LiteLLM Skeleton)

```python
from litellm import completion

resp = completion(
    model="anthropic/claude-3-5-sonnet-20241022",
    messages=[...],
    fallbacks=["openai/gpt-4o", "azure/gpt-4"],
    caching=True,
)
```

Gateway gives you: routing / retries / fallback / cache / observability / rate limit / auth, all in one layer.

---

## 👁️ Observability Stack

| Tool | Best at |
|------|---------|
| **LangSmith** | LangChain native |
| **Langfuse** | Open-source self-host |
| **Phoenix (Arize)** | Open-source; RAG tracing |
| **Helicone** | Proxy-based; cheapest |
| **Honeycomb / Datadog / New Relic** | General APM |
| **W&B Weave** | Experiments + production |

**Minimum trace fields:** trace_id, prompt, retrieved chunks, model, params, output, tools, latency per step, tokens, cost, errors.

---

## 📊 Cost Dashboard MINIMUM Panels

1. Total spend today + spend / hour
2. Spend per tenant (top-10)
3. Per-model breakdown
4. Cache hit rate (prompt + semantic)
5. Tokens per request p50/p95
6. Cost per route / endpoint

---

## 💰 Cost Reduction Levers

| Lever | Savings |
|-------|---------|
| Multi-model routing | 5-20× cheaper |
| Prompt caching | up to 90% on long static prompts |
| Semantic caching | 30-70% on hot queries |
| Reduce context | 2-5× |
| Output brevity / max_tokens | 1.5-3× |
| Batch (offline) | 2-4× |
| Streaming + early-cancel | 1.5-3× saved |
| Self-host at scale | depends; break-even ≈ 100M tok/day |

---

## 🚄 Latency Engineering

- **Stream first token**; perceived speed dominates
- **Speculative decoding** (small draft + parallel big verify) → 2-3× speedup
- **PagedAttention** (vLLM) + FlashAttention → memory-efficient + fast
- **Quantization** (W4A16, INT8, FP8)
- **Prompt cache** for TTFT improvements
- **Tail (p99) tracking**, cold starts, cache misses, long inputs

---

## 🚨 Anti-Patterns

| Don't | Do |
|-------|-----|
| Single-provider | Gateway + fallback |
| No semantic cache | Cache near-duplicates |
| No prompt cache | Reuse provider KV |
| No streaming | ALWAYS stream |
| Avg latency only | p50/p95/p99 |
| No cost dashboard | Build day 1 |
| Same model for all queries | Route by difficulty |
| Skip observability | Always trace |

---

## 🏆 Exam Power Phrases

✅ Often **right**:

- "vLLM + PagedAttention for self-hosting"
- "LiteLLM gateway with fallback chains"
- "Prompt caching on long static prefixes"
- "Semantic cache + multi-model routing"
- "Stream first token; track p95/p99"
- "Cost dashboard with per-tenant alerting"

❌ Often **wrong**:

- "Single provider is fine"
- "Average latency is enough"
- "Cost will be cheap"
- "Skip observability in v1"
- "Top-tier model for every query"

---

## 🗓️ Memorize Cold

- vLLM = PagedAttention + continuous batching + multi-LoRA
- LiteLLM = gateway abstraction
- Langfuse / LangSmith / Phoenix / Helicone
- Prompt cache: Anthropic / OpenAI / Gemini, up to 90%
- Semantic cache: GPTCache / pgvector
- Speculative decoding: 2-3× speed
- TTFT > Total latency for perceived UX
- Klarna optimization: $0.30 → $0.04 per conversation in 6 months

---

➡️ [Module 10: Production Case Studies](../Module-10-Production-Case-Studies/Reading.md)
