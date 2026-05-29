# 📋 Module 8 Cheat Sheet: Production at Scale

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 💾 Caching — Two Distinct Layers

| Layer | What | Tools |
|-------|------|-------|
| **Prompt cache** (provider) | Cached prefix; 50-90% discount | Anthropic `cache_control`, OpenAI auto, Gemini context cache |
| **Semantic cache** (yours) | Embedded-similarity hit | GPTCache, Redis Vector, FAISS, pgvector |

### Anthropic Cache Tags
```python
{"type": "text", "text": "<long prefix>",
 "cache_control": {"type": "ephemeral"}}  # 5-min TTL
```

| Provider | Cache type | Discount on hit |
|----------|------------|-----------------|
| Anthropic | Explicit (`cache_control`) | ~90% |
| OpenAI | Auto ≥1024 tokens | ~50% |
| Gemini | Explicit context cache | ~75% |
| DeepSeek | Automatic | very aggressive |

---

## 🧱 Multi-Provider Abstraction

```python
from litellm import completion

response = completion(
    model="claude-sonnet-4-7",
    messages=[...],
    fallbacks=["gpt-5", "gemini-2.5-pro"]
)
```

| Feature | Why |
|---------|-----|
| Fallbacks | Reliability when primary fails |
| Router | Load-balance keys/regions |
| Spend caps | Budget enforcement |
| Cost logging | Built-in attribution |
| Caching | Redis-backed |

---

## ⏱️ Rate Limits & Batch

| Limit | Common units |
|-------|--------------|
| TPM | 30K–2M tokens/min |
| RPM | 500–10K req/min |
| RPD | Free-tier limits |

Defenses:
- Token-bucket limiter
- Exponential backoff + jitter
- Spillover routing (Anthropic ↔ OpenAI ↔ Gemini)
- **Batch API → 50% discount** for non-realtime
- Queue + drain pattern

---

## 🔭 Observability Must-Capture

| Signal | Use |
|--------|-----|
| prompt_version, model, params | Attribution |
| input, output, tokens, cost | Eval + bill |
| latency P50/P95/P99 + TTFT | UX health |
| cache_hit (prompt + semantic) | Cost ROI |
| LLM-judge score | Quality regression |
| safety violations | Risk |

| Tool | Best for |
|------|----------|
| **Langfuse** | OSS, full-stack |
| **Helicone** | Proxy + cache |
| **LangSmith** | LangChain |
| **Phoenix (Arize)** | OTel native |
| **OpenTelemetry GenAI semconv** | Vendor-neutral standard |

---

## 📂 Prompt Versioning

| Practice | Tool |
|----------|------|
| Git for source | Git |
| Version in API request | Log `prompt_version: "v17"` |
| Eval suite keyed by version | Module 6 harness |
| Tagged release / rollback | Git tags + feature flags |
| Dedicated platforms | Langfuse, PromptLayer, LangSmith, Pezzo, Braintrust |

---

## 💰 Cost Discipline Levels

| L | Practice |
|---|----------|
| L0 | "We'll check the bill" |
| L1 | Daily dashboard + alert |
| L2 | Per-feature / per-customer roll-up |
| L3 | Pre-deploy cost projection on every change |

### Attribution dimensions
- prompt_version
- model
- customer_id
- feature
- cache_hit
- reasoning_tokens
- input vs output tokens

🚨 *Spend caps prevent the $50K-overnight horror.*

---

## 🚦 SLOs Quick Reference

| Metric | Typical target |
|--------|----------------|
| Uptime | 99.5% (consumer) – 99.9% (enterprise) |
| P95 latency (chat) | <2s |
| P95 latency (reasoning) | <30s |
| TTFT (streaming) | <500ms |
| LLM-judge quality | ≥4.2/5 rolling 24h |
| Safety violation rate | <0.1% |

---

## 🔁 CI Pipeline for Prompts

```
git push (prompt change)
  ↓
Regression suite (Module 6)
  ↓ block on F1 drop
Safety eval (Module 7)
  ↓ block on safety regression
Cost projection
  ↓ block on >20% cost rise
Shadow traffic on staging
  ↓
Canary 5% → 25% → 100%
  ↓ auto-rollback on degradation
Done
```

---

## 🌐 Streaming / Realtime

| Concern | Pattern |
|---------|---------|
| Chat streaming | SSE or WebSocket; `stream=True` |
| Voice apps | OpenAI Realtime, ElevenLabs, Cartesia |
| Edge inference | Cloudflare Workers AI, Groq |
| TTFT focus | Smaller tier (Haiku/Flash/mini); Groq |

---

## 🏆 Exam Power Phrases

✅ Often **right**:
- "Anthropic prompt caching is the single biggest cost lever"
- "Use LiteLLM for cross-provider fallbacks"
- "Wire observability on day 1"
- "Pin model snapshots; re-eval on bumps"
- "Per-customer spend caps prevent runaway bills"

❌ Often **wrong**:
- "Hardcode a vendor SDK and ship"
- "Caching is automatic on every provider"
- "Semantic cache is always safe"
- "Just use GPT-5 for everything"
- "Observability can wait"

---

## 🗓️ Key Facts To Memorize Cold

- Anthropic cache → `cache_control: {"type": "ephemeral"}` (5min) or `"persistent"` (1hr+)
- OpenAI auto-cache → ≥1024 tokens, ~50% discount
- Gemini → explicit context cache objects, ~75% off reads
- LiteLLM = multi-provider standard
- Langfuse = OSS observability
- OpenTelemetry GenAI semconv = vendor-neutral telemetry
- Batch API = 50% discount + relaxed limits
- TTFT bar = <500ms
- Production at scale domain = **12% of Final Mock**

---

## ✏️ Quick Self-Check

Cover the answers and recite:
1. Two cache types and when each? ___
2. LiteLLM's three killer features? ___
3. SLO targets — uptime, latency, quality? ___
4. CI pipeline steps in order? ___
5. Anthropic vs OpenAI vs Gemini cache tagging? ___

If you can answer all 5 in under 60 seconds, you own this module. ✅

---

🎉 **You finished Module 8 — and the entire Prompt Engineering Specialist syllabus.**

---

## 🛠️ Production Setup Templates (Copy-Paste Ready)

### LiteLLM with fallbacks
```python
from litellm import completion

response = completion(
    model="anthropic/claude-sonnet-4-7",
    messages=[...],
    fallbacks=["openai/gpt-5", "vertex_ai/gemini-2.5-pro"],
    max_retries=3,
    timeout=30,
)
```

### Anthropic prompt cache on long prefix
```python
client.messages.create(
    model="claude-sonnet-4-7",
    max_tokens=1024,
    system=[
        {"type": "text", "text": "<long system prompt + tool descriptions + few-shot>",
         "cache_control": {"type": "ephemeral"}}
    ],
    messages=[{"role": "user", "content": user_msg}]
)
```

### Spend cap pattern
```python
def call_with_cap(customer_id, prompt):
    today_spend = redis.get(f"spend:{customer_id}:{today}")
    if today_spend > customer.daily_cap:
        raise BudgetExceeded(customer_id)
    if today_spend > customer.daily_cap * 0.8:
        slack_warn(customer_id, today_spend)
    result = call_llm(prompt)
    redis.incrby(f"spend:{customer_id}:{today}", cost_of(result))
    return result
```

Next steps:

1. Take [Practice Exam 2](../Practice-Exams/Practice-Exam-2.md)
2. Take the [Final Mock Exam](../Practice-Exams/Final-Mock-Exam.md)
3. Drill the [Master Flashcards](../Flashcards.md)
4. Ship your capstone — 12 prompts, eval-tied, in version control
