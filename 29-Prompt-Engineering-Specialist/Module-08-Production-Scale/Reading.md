# Module 8: Production at Scale 🚀

> **Why this module matters:** 12% of the Final Mock. Everything you've learned in Modules 1-7 was about the *prompt*. This module is about everything *around* the prompt, versioning, caching, observability, multi-provider abstraction, cost monitoring, and the operational discipline that turns a prompt into a production system. Without this, every other skill collapses under real-world traffic.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - Modules 1–7
> - Git basics
> - Basic CI/CD (Continuous Integration/Continuous Deployment) concepts (you've seen a GitHub Actions or similar pipeline)
> - The idea of an SLA (Service Level Agreement) / latency budget
>
> You do NOT need DevOps experience. We define the operational vocabulary.

---

## 🏃 A Story: The Startup Whose Bill Went From $400 to $74,000 In 11 Days

Meet Theo, an engineer at a 12-person dev-tools startup. They shipped an AI code-review feature in October 2024 powered by GPT-4o. Launch week traffic: 600 users, $400 bill, within projections. Launch +11 days: a Hacker News front-page article drove 28,000 signups overnight. Bill that week: **$74,000**.

Forensic analysis found four root causes:

1. **No prompt caching**, Their system prompt (3,800 tokens with rich examples) was sent fresh on every call. Cached: $3,800/day. Uncached: $38,000/day.
2. **No semantic cache**, The most-asked questions ("review my README", "explain this function") were processed independently every time. ~40% of traffic was effectively duplicate.
3. **No model tiering**, Every request used GPT-4o, including 10K/day requests for trivial tasks Haiku 4.5 / GPT-5 mini could handle at 1/20th the cost.
4. **No cost dashboard**, The bill was visible only in OpenAI's billing console, weekly. The CFO (Chief Financial Officer) found out by checking the credit card.

The fix took 8 days:

- Prompt caching → 60% reduction
- Semantic cache → another 30% reduction on cached portion
- Smart tier routing (Haiku 4.5 for "simple", GPT-5 for "complex", o3 for "hard refactor") → another 50% reduction
- LiteLLM abstraction layer → instant ability to fall over to cheaper provider if rate-limited
- Langfuse observability → real-time cost dashboard, alert at $1K/day

Post-fix November bill: $4,200 for the same traffic. **Cost discipline IS prompt engineering**, and Module 8 is the playbook.

---

## 📂 Prompt Versioning, Treat Prompts Like Code

Prompts are software. They change. They have releases. They have bugs. They have rollbacks. Treat them accordingly.

### Minimum-viable versioning

| Practice | Tool |
|----------|------|
| Store prompts in Git | Repo |
| Include version in the prompt itself or its filename | `prompts/v17_customer_support.md` |
| Reference version in API (Application Programming Interface) call | Log `prompt_version: "v17"` on every request |
| Tie eval results to versions | Module 6 regression harness keyed by version |
| Roll back via Git revert | Standard workflow |

### Dedicated prompt-versioning platforms

| Platform | What it adds |
|----------|--------------|
| **Langfuse** | Open-source; prompts + evals + traces in one |
| **PromptLayer** | Hosted prompt management + version diffs + analytics |
| **Helicone** | Prompts + cost tracking + cache |
| **LangSmith** | LangChain stack; prompts + traces + datasets |
| **Braintrust** | Eval-first; prompts as data |
| **Pezzo** | Open-source; CMS-style prompt management |
| **Vercel AI SDK (Software Development Kit) + Prompt Templates** | Lightweight, code-first |

🎯 **Memorize:** *The single biggest jump in prompt engineering maturity is moving prompts from inline strings to a versioned, tagged, eval-tied artifact.*

---

## 💾 Caching, The Single Biggest Cost Win

There are TWO distinct caches every production system should consider.

### Prompt cache (provider-side, exact-prefix)

A long, repeated prefix (system prompt + few-shot examples + tool descriptions) gets cached server-side. Subsequent calls with the same prefix pay ~10% of the input price for the cached portion.

| Provider | Cache details |
|----------|---------------|
| **Anthropic prompt caching** | Mark sections with `cache_control: {"type": "ephemeral"}` (5min TTL) or `"persistent"` (1hr+) |
| **OpenAI prompt caching** | Automatic for prompts ≥1024 tokens; ~50% discount on cached portion |
| **Google Gemini context caching** | Explicit cache objects; pay for storage; ~75% read discount |
| **DeepSeek context caching** | Automatic; very aggressive discount |

When prompt caching wins:

- Long system prompts with examples
- Few-shot prompts repeated across users
- Long-context RAG (Retrieval-Augmented Generation) where the doc set is stable
- Long tool-descriptions array

🎯 **Memorize:** *Prompt caching is the easiest 50-90% cost reduction available in 2026.* Use it.

### Semantic cache (yours, similarity-based)

Cache *responses* keyed by *input similarity*. If a new user asks something semantically close to a recent query, serve the cached response.

```python
# Pseudo-code
def query(user_msg):
    embedding = embed_model.embed(user_msg)
    hit = semantic_cache.search(embedding, threshold=0.95)
    if hit:
        return hit.cached_response
    response = call_llm(prompt + user_msg)
    semantic_cache.store(embedding, response)
    return response
```

Tools: **GPTCache** (Zilliz, open-source), Redis with vector module, Pinecone with semantic similarity, in-house with FAISS/pgvector.

| Pro | Con |
|-----|-----|
| 30-70% additional cost cut on hot queries | Risk of stale data; ambiguous similar-but-different intents |
| Sub-100ms response on hits | Cache invalidation is hard |
| Reduces load on the LLM | Adds infra (vector store + embedding model) |

🚨 **Trap:** Use semantic cache **conservatively**. A 0.95 similarity threshold for an extractive task can serve the wrong answer to a slightly-different question.

---

## ⏱️ Rate Limiting, The Inevitable

Every commercial API has limits:

| Limit type | Common units |
|------------|--------------|
| **Requests per minute (RPM)** | 500–10,000 depending on tier |
| **Tokens per minute (TPM)** | 30K–2M for input/output combined |
| **Requests per day (RPD)** | Some free tiers |
| **Concurrent connections** | Streaming APIs |

### Defenses

1. **Token-bucket rate limiter** in your service layer, never let your code blast past your tier
2. **Exponential backoff with jitter** on 429 errors, standard SDK pattern
3. **Spillover routing**, primary provider rate-limited → fall over to a backup (Anthropic → OpenAI → Gemini → Llama)
4. **Batching**, for non-realtime tasks, use Batch APIs (OpenAI Batch, Anthropic Messages Batch) at 50% discount + relaxed limits
5. **Queueing**, for non-realtime, push to a queue, drain at your rate-limit pace

### Tier elevation

Vendor tier promotion is largely **automatic and traffic-based**:

- OpenAI Tier 1 → Tier 5 as you spend
- Anthropic Tier 1 → Tier 4 similarly
- Google requires sales contact for high tiers in some products

🎯 **Memorize:** *Build for rate-limited reality from day one.* Don't assume "we'll never hit the limit."

---

## 🔭 Observability, Tracing, Logging, Dashboards

You cannot improve what you cannot see. Production LLM apps need:

| Signal | What to capture |
|--------|-----------------|
| **Request trace** | prompt_version, model, params, input, output, latency, tokens, cost |
| **Error trace** | HTTP (Hypertext Transfer Protocol) status, retries, fallback used, error message |
| **Quality signal** | LLM-judge score, user thumbs-up/down, downstream conversion |
| **Cost** | per-request and per-user roll-ups; alert thresholds |
| **Latency** | P50 / P95 / P99; TTFT for streaming |
| **Cache hit rate** | Prompt cache, semantic cache |
| **Safety violations** | From classifier, from LLM-judge, from incidents |

### Observability stacks

| Stack | Best for |
|-------|----------|
| **Langfuse** | Open-source; full traces + prompts + evals + costs |
| **Helicone** | Drop-in proxy; cache + cost + observability |
| **LangSmith** | LangChain native |
| **Phoenix (Arize)** | Open-source; OpenTelemetry-based |
| **DataDog + LLM Observability** | Enterprise-wide if already on DataDog |
| **OpenTelemetry + GenAI semconv** | Vendor-neutral standard |
| **Weights & Biases (W&B)** | Strong if your team already uses W&B for ML |

🎯 **Memorize:** *OpenTelemetry's GenAI semantic conventions (2024-2025)* are the emerging vendor-neutral standard for LLM telemetry. Anything that emits OTLP plays well with anything that consumes it.

---

## 🧱 Multi-Provider Abstraction (LiteLLM and friends)

Locking your code into one vendor's SDK is a future-cost. **LiteLLM** (the most popular) abstracts ~100 providers into the OpenAI message shape.

```python
from litellm import completion

# Identical interface across providers
response = completion(
    model="claude-sonnet-4-7",  # or "gpt-5", "gemini-2.5-pro", "groq/llama-3.3-70b-versatile"
    messages=[{"role": "user", "content": "Hello"}],
    temperature=0.2,
)
```

LiteLLM features that matter in production:

- **Fallbacks**, `fallbacks=["gpt-5", "claude-sonnet-4-7", "gemini-2.5-pro"]`
- **Router**, load-balance across keys/regions
- **Cost tracking**, built-in cost logging
- **Rate-limit handling**, automatic retries with backoff
- **Spend caps**, refuse calls when budget exceeded
- **Caching**, Redis-backed prompt response cache

### Alternatives

| Tool | Notes |
|------|-------|
| **OpenRouter** | Hosted multi-provider proxy; pay-per-token across providers |
| **Portkey** | Gateway with caching, fallbacks, observability |
| **AWS (Amazon Web Services) Bedrock** | First-party multi-provider via AWS |
| **Vercel AI SDK** | TypeScript / Node side; provider-agnostic |
| **LangChain ChatModels** | Multi-provider but heavy framework lock-in |

🎯 **Memorize:** *Hardcoding `from openai import OpenAI` everywhere is technical debt.* A LiteLLM-style abstraction layer is the modern default.

---

## 💰 Cost Monitoring, The Skill That Pays For Itself

The four levels of cost discipline:

| Level | What |
|-------|------|
| **L0** | "We'll check the bill next month" |
| **L1** | Daily cost dashboard with alert at $X/day |
| **L2** | Per-feature / per-customer cost roll-ups |
| **L3** | Pre-deploy cost projection on every prompt change (eval × expected volume) |

### A simple cost-attribution table

| Dimension | Why track |
|-----------|-----------|
| `prompt_version` | Did v17 cost more than v16? |
| `model` | Which models drive spend? |
| `customer_id` | Top-spend customers (and abuse detection) |
| `feature` | Which features are over budget? |
| `cache_hit` | Cache ROI (Return on Investment) |
| `input_tokens` / `output_tokens` | Input vs output skew |
| `reasoning_tokens` | Reasoning-model spend |

Tools: Langfuse, Helicone, Langsmith, Datadog, custom BigQuery + Looker.

### Budget alarms

```python
# Pseudo-code
daily_spend = get_today_spend(customer_id)
if daily_spend > customer.budget * 0.8:
    slack_alert(customer, daily_spend)
if daily_spend > customer.budget:
    block_further_requests(customer)
```

🚨 **Trap:** If you don't have spend caps, a buggy customer integration (infinite-retry loop) can burn $50K+ overnight.

---

## 🚦 SLOs and Reliability

Service Level Objectives for LLM apps usually look like:

| SLO (Service Level Objective) | Typical target |
|-----|----------------|
| Availability (uptime) | 99.5% (consumer) to 99.9% (enterprise) |
| P95 latency | 2s (chat) / 5s (RAG) / 30s (reasoning) |
| Quality (LLM-judge avg) | ≥ 4.2 / 5 on rolling 24h sample |
| Cost per request (P95) | < $X per business |
| Safety violation rate | < 0.1% |

### Failure modes to budget for

| Failure | Mitigation |
|---------|------------|
| Vendor outage | Multi-provider fallback (Anthropic ↔ OpenAI ↔ Gemini) |
| Vendor rate-limit | Backoff + queue; spillover routing |
| Vendor regression on a new model snapshot | Pin specific model versions; CI eval on snapshot bumps |
| Latency spike | Failover to faster tier (Haiku/Flash/mini) |
| Cost spike (abuse) | Per-user spend caps + anomaly detection |
| Bad prompt deploy | Rollback in <5 min; canary deploys; feature flags |

---

## 🔁 CI/CD for Prompts

Treat prompts in CI the same as code.

### Minimum pipeline

```
git push (prompt change)
  ↓
GitHub Actions / Buildkite / etc.
  ↓
Run regression suite (Module 6)
  ↓
Block if F1 drops > threshold
Block if safety violations rise
Block if estimated cost rises > threshold
  ↓
Run shadow traffic in staging
  ↓
Canary rollout (5% → 25% → 100%)
  ↓
Auto-rollback on degradation
```

### Feature flags for prompts

Use a flag service (LaunchDarkly, Statsig, Unleash, or built-in) to roll out prompt v17 to 5% of users, watch metrics, then ramp.

---

## 🌐 Edge / Realtime / Streaming Considerations

For chat UX (User Experience), **streaming** is non-negotiable. Users perceive TTFT (time-to-first-token) far more than total latency.

| Concern | Pattern |
|---------|---------|
| Streaming | Use SSE or WebSocket; OpenAI/Anthropic/Gemini all support `stream=True` |
| Voice (TTS + ASR) | OpenAI Realtime API, ElevenLabs, Cartesia, Deepgram |
| Edge inference | Cloudflare Workers AI, Vercel Edge, Groq for ultra-low TTFT |
| WebRTC streaming for voice | OpenAI Realtime, Vapi, Daily.co |

🎯 **Memorize:** *TTFT < 500ms* is the experiential bar for a chat product to feel "responsive."

---

## 🔬 Scenario Walkthrough (Theo's 8-day fix)

> **Scenario:** Theo's startup got the $74K bill. Walk through the 8-day rebuild.

**Day 1, Audit:** Pull all OpenAI usage logs. Discover: 3,800-token system prompt repeated, 40% input-cost dominance, model mix is 100% GPT-4o.

**Day 2, Prompt caching:** Migrate to Anthropic for the system-prompt-heavy paths (Anthropic caching is most generous). Tag prefix with `cache_control: {"type": "ephemeral"}`. Cost on cached portion: ~10%.

**Day 3, Semantic cache:** Stand up GPTCache + Redis Vector. Cache responses for "review my README"-class queries with 0.95 similarity threshold. Cache hit rate after warmup: 38%.

**Day 4, Tier routing:** Build a router that picks Haiku 4.5 for "simple" tasks (one file < 200 lines), GPT-5 for "standard", o3 for "hard refactor across 5+ files". Use a small classifier (could be regex or a tiny LLM call) to route.

**Day 5, LiteLLM abstraction:** Replace all direct vendor SDK calls with LiteLLM. Configure fallbacks: primary Anthropic → secondary OpenAI → tertiary Gemini.

**Day 6, Observability:** Stand up Langfuse (self-hosted on a tiny VM (Virtual Machine)). Pipe every request through it. Build a cost-per-customer dashboard.

**Day 7, Spend caps:** Per-customer daily budgets. Slack alert at 80%, block at 100%. Per-feature budgets for engineering oversight.

**Day 8, CI pipeline:** GitHub Actions runs the Module 6 regression suite on every prompt change. Cost-projection step compares estimated vs current spend; PR blocked if cost increase > 20% without justification.

**Result:** November bill drops to $4,200 for the same traffic. Hacker News crowd never noticed.

---

## ⚠️ Exam Traps & Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "Prompt caching is automatic" | Anthropic requires explicit `cache_control` tagging. OpenAI is auto only above a threshold. Gemini requires explicit cache objects. |
| "Semantic cache is always safe" | Threshold tuning matters; 0.95 can serve wrong-but-similar answers. |
| "Just use GPT-5 for everything" | Tier routing is often the biggest cost win after caching. |
| "Hardcoding a vendor SDK is fine" | Future-cost; LiteLLM-style abstraction is the modern default. |
| "Observability can wait until we have users" | By the time you have users, the incident has happened. Wire it day 1. |
| "Vendor will give me a refund if there's a bug" | Maybe partial; don't bank on it. Spend caps prevent this. |
| "Rate limits are for other startups" | Hit them once and you'll never forget. |
| "Streaming is a frontend concern" | Backend must support it end-to-end; TTFT is a backend metric. |
| "Batch APIs are inferior" | 50% discount + relaxed limits on non-realtime work, massive lever. |
| "We can always roll back later" | Without version control + feature flags, rollback takes hours not minutes. |

---

## 🎓 Key Terms To Know (Add to Flashcards!)

| Term | Definition |
|------|------------|
| **Prompt versioning** | Treating prompts as versioned, taggable, eval-tied artifacts |
| **Prompt cache (provider-side)** | Server-side cache of long prompt prefixes; 50-90% discount on cached portion |
| **Anthropic `cache_control`** | The tag to mark cacheable sections |
| **Ephemeral vs persistent cache** | 5min vs 1hr+ TTLs (Anthropic) |
| **Semantic cache** | Application-side cache keyed by input similarity |
| **GPTCache** | The popular open-source semantic cache |
| **TPM / RPM** | Tokens-Per-Minute / Requests-Per-Minute rate limits |
| **Exponential backoff** | Standard retry strategy with growing wait times |
| **Spillover routing** | Fall-over to backup provider when primary rate-limits |
| **Batch API** | Non-realtime path with 50% discount (OpenAI, Anthropic) |
| **TTFT** | Time-To-First-Token streaming metric |
| **Observability** | Tracing + logging + dashboards |
| **Langfuse / Helicone / LangSmith / Phoenix** | Observability platforms |
| **OpenTelemetry GenAI semconv** | Vendor-neutral LLM telemetry standard |
| **LiteLLM** | The dominant multi-provider abstraction library |
| **OpenRouter / Portkey / Bedrock** | Alternative multi-provider gateways |
| **SLO** | Service Level Objective (uptime, latency, quality) |
| **Canary deploy** | Rolling out to a small slice first |
| **Feature flag (LaunchDarkly, Statsig)** | Service for gradual rollout |
| **Shadow traffic** | Send real prod input to new prompt, don't serve to user, compare quality |
| **Cost dashboard** | Daily cost visualization with alerts |
| **Spend cap** | Per-customer / per-feature hard limit |
| **Realtime API (OpenAI)** | Streaming voice/multimodal API |

### Acronyms cheat-row (Module 8)
| Acronym | Meaning |
|---------|---------|
| TPM / RPM / RPD | Tokens / Requests Per Minute / Day |
| TTFT | Time To First Token |
| SLO | Service Level Objective |
| SLI | Service Level Indicator |
| SLA | Service Level Agreement |
| OTLP | OpenTelemetry Protocol |
| GenAI semconv | OTel GenAI semantic conventions |
| SSE | Server-Sent Events |
| KV | Key-Value (cache, or Cloudflare KV store) |
| LB | Load Balancer |

---

## 📊 Case Study, Anthropic Prompt Caching Launch (August 2024)

**Situation.** Anthropic launched **prompt caching** in beta on August 14, 2024, the first major commercial implementation. The feature allowed developers to mark sections of a prompt with `cache_control` tags; subsequent calls re-using that prefix paid ~10% of the normal input price for the cached portion (with a small write-time premium on the first call).

**The economics.** Anthropic published benchmarks:

- Multi-document Q&A (100K-token context): up to **85% cost reduction**, **2× latency improvement**
- Many-shot prompting (100+ examples): up to **90% cost reduction**
- Coding assistants with large codebases in context: up to **80% cost reduction**

**The competitive response.**
- OpenAI launched implicit prompt caching (no tagging needed) in October 2024, auto for prompts ≥1024 tokens, ~50% discount.
- Google launched Gemini context caching with explicit cache objects in 2024, pay for storage, ~75% discount on reads.
- DeepSeek launched aggressive automatic caching in early 2025.

**The downstream effect.** Production patterns changed industry-wide:

- **Long system prompts became economical**, teams that had pruned prompts for cost suddenly added detail back.
- **Many-shot ICL (Module 2) became practical at scale**, Agarwal et al. 2024's many-shot results moved from research to production overnight.
- **Long-context RAG patterns shifted**, instead of retrieving and inserting per-query, teams started caching large document sets and querying against them.

**Lesson for the exam / for practitioners.**
- Caching is the single highest-leverage cost lever. Wire it before optimizing anything else.
- Vendor-specific syntax matters, Anthropic explicit, OpenAI implicit, Gemini object-based, DeepSeek automatic.
- Cache invalidation is still hard. Test that your cache is actually working with a small benchmark before assuming the savings.

**Discussion (Socratic).**
- **Q1:** A team has a 6K-token system prompt and an average of 8 turns per conversation. Estimate the cost savings from enabling Anthropic prompt caching, given $3/MTok input and a 10% cached read rate.
- **Q2:** Semantic caching shares some risks with stale data (think CDN (Content Delivery Network)). Argue for / against using it for: (a) FAQ-class queries, (b) personalized recommendations, (c) financial advice.
- **Q3:** OpenAI's implicit auto-caching is "free" UX. Argue for / against the explicit-tagging approach Anthropic took. Which design surfaces better engineering discipline?

---

## ✅ Module 8 Summary

You now know:

- 📂 Prompt versioning, treating prompts like code, with Git + dedicated platforms
- 💾 Caching, prompt cache (provider-side) and semantic cache (yours)
- ⏱️ Rate limiting, token/request limits, backoff, batch APIs, spillover routing
- 🔭 Observability, Langfuse, Helicone, LangSmith, Phoenix, OpenTelemetry GenAI semconv
- 🧱 Multi-provider abstraction, LiteLLM, OpenRouter, Portkey, Bedrock
- 💰 Cost monitoring, per-prompt, per-customer, per-feature dashboards + spend caps
- 🚦 SLOs and reliability, multi-provider fallback, canary deploys, feature flags
- 🔁 CI/CD for prompts, regression suite + cost projection + canary
- 🌐 Streaming and TTFT, the realtime UX bar

**Next steps:**
1. 🎥 Watch the curated videos: [Videos.md](./Videos.md)
2. ✏️ Take the quiz: [Quiz.md](./Quiz.md), aim for 22/26
3. 📋 Review the [Cheat-Sheet.md](./Cheat-Sheet.md) before bed
4. 📝 Take Practice Exam 2 → Final Mock Exam → build your prompt portfolio
5. 🃏 Drill the [Master Flashcards](../Flashcards.md) daily

> **Where this leads.**
> - You are done with the modules. Now ship the capstone: 12 prompts in version control, all eval-tied, with cost-monitoring and at least one adversarial test per prompt.
> - Cross-course: Claude Architect (Cert Hub) goes deep on Anthropic-specific production patterns. Generative AI Engineer (Cert Hub) covers RAG-at-scale, fine-tuning, and evaluation. AWS AI Practitioner (course 07) covers Bedrock production patterns.
> - Practice: Final Mock Exam has ~7 questions from this module.

---

## 📚 Further Reading (Optional)

**Vendor docs:**
- 📖 [Anthropic, Prompt Caching](https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching)
- 📖 [OpenAI, Prompt Caching](https://platform.openai.com/docs/guides/prompt-caching)
- 📖 [Google, Gemini Context Caching](https://ai.google.dev/gemini-api/docs/caching)
- 📖 [OpenAI Batch API](https://platform.openai.com/docs/guides/batch)
- 📖 [Anthropic Messages Batch API](https://docs.anthropic.com/en/api/creating-message-batches)
- 📖 [OpenAI Realtime API](https://platform.openai.com/docs/guides/realtime)

**Frameworks / Tools:**
- 📖 [LiteLLM](https://docs.litellm.ai)
- 📖 [Langfuse](https://langfuse.com/docs)
- 📖 [Helicone](https://docs.helicone.ai)
- 📖 [LangSmith](https://docs.smith.langchain.com)
- 📖 [Phoenix (Arize)](https://docs.arize.com/phoenix)
- 📖 [OpenTelemetry GenAI Semantic Conventions](https://opentelemetry.io/docs/specs/semconv/gen-ai/)
- 📖 [GPTCache](https://github.com/zilliztech/GPTCache)
- 📖 [PromptLayer](https://docs.promptlayer.com)
- 📖 [Portkey AI Gateway](https://docs.portkey.ai)
- 📖 [OpenRouter](https://openrouter.ai/docs)

**Practitioner:**
- 📖 [Hamel Husain, "Eval-driven development"](https://hamel.dev/blog/posts/evals/)
- 📖 [Eugene Yan, "Patterns for Building LLM-based Systems"](https://eugeneyan.com/writing/llm-patterns/)
- 📖 [Chip Huyen, *Designing Machine Learning Systems*](https://www.oreilly.com/library/view/designing-machine-learning/9781098107956/) and AI-engineering blog posts
- 📖 [a16z, "Emerging Architectures for LLM Applications"](https://a16z.com/emerging-architectures-for-llm-applications/)
