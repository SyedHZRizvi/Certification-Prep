# ✏️ Module 8 Quiz: Production at Scale

> **Instructions:** Answer all 26 questions WITHOUT looking at the reading.
> Then check your answers below. Aim for 22/26 minimum.
>
> Every question is tagged with its **Bloom's taxonomy level**.
>
> **Bloom distribution (this quiz):** Remember 5 · Understand 7 · Apply 8 · Analyze/Evaluate 5 · Create 1.

---

## Questions

### Q1. Anthropic prompt caching is enabled by: *(Remember)*
A. Setting temperature to 0
B. Marking sections with `cache_control: {"type": "ephemeral"}` or `"persistent"`
C. Using a smaller model
D. It is automatic for everything

---

### Q2. OpenAI prompt caching is: *(Remember)*
A. Always manual
B. Automatic for prompts ≥1024 tokens with ~50% discount on cached portion
C. Free for all prompts
D. Disabled by default

---

### Q3. A semantic cache stores: *(Understand)*
A. The prompt's plain text
B. Cached responses keyed by embedding-similarity of the input, serve hit when new input is semantically close
C. The system prompt
D. API keys

---

### Q4. The MOST common library for multi-provider LLM abstraction in 2026 is: *(Remember)*
A. requests
B. LiteLLM
C. numpy
D. pandas

---

### Q5. TTFT stands for: *(Remember)*
A. Total Tokens For Throughput
B. Time-To-First-Token, streaming latency metric
C. Tokens-To-File-Transfer
D. Truncated Tail Format Test

---

### Q6. The TTFT bar for a chat product to feel "responsive" is typically: *(Apply)*
A. <50 ms
B. <500 ms
C. <5 seconds
D. <30 seconds

---

### Q7. Theo's startup went from $74K to $4.2K monthly by: *(Apply)*
A. Switching to a smaller model
B. Layered: prompt caching + semantic cache + tier routing + LiteLLM + observability + spend caps + CI cost projection
C. Lowering temperature
D. Removing all prompts

---

### Q8. The PRIMARY reason to wire observability on day 1: *(Apply)*
A. Marketing
B. By the time you have users, the incident has happened, observability is preventive
C. Lower model cost
D. Vendor requirement

---

### Q9. Batch APIs (OpenAI, Anthropic) offer: *(Remember)*
A. The same price, faster
B. ~50% discount + relaxed rate limits, for non-realtime workloads
C. Lower quality
D. Smaller models only

---

### Q10. A spend cap is: *(Understand)*
A. A speed limit
B. A hard limit (per-customer, per-feature, per-day) that blocks calls when budget is exceeded
C. A vendor restriction
D. A model property

---

### Q11. The PRIMARY reason to use LiteLLM in production: *(Apply)*
A. It bypasses rate limits
B. Provider-agnostic interface + built-in fallbacks + cost tracking + spillover routing
C. It's faster than vendor SDKs
D. It's the only option for Claude

---

### Q12. OpenTelemetry GenAI semantic conventions are: *(Remember)*
A. A vendor lock-in
B. A vendor-neutral standard for LLM telemetry (traces, spans, attributes)
C. Only for Python
D. A reasoning model

---

### Q13. The MOST important reason to pin specific model SNAPSHOTS rather than the floating "latest" alias: *(Analyze)*
A. Lower cost
B. Vendor regressions on a new snapshot can break your prompts, pinning forces explicit upgrade with eval
C. Smaller context
D. Faster startup

---

### Q14. A canary deploy of a new prompt typically: *(Apply)*
A. Always goes to 100% of users
B. Goes to 1-5% first with metric monitoring before ramping
C. Replaces the old prompt instantly
D. Requires a new model

---

### Q15. Shadow traffic refers to: *(Understand)*
A. Hidden traffic from the vendor
B. Running real production input through a candidate prompt without serving the output to the user, to compare quality offline
C. Free tier traffic
D. Streaming output

---

### Q16. Per-customer spend caps are needed to defend against: *(Apply)*
A. Slow responses
B. Buggy customer integrations (e.g., infinite-retry loop) that can burn $50K+ overnight
C. Low quality output
D. Vendor outages

---

### Q17. Anthropic's `cache_control` "ephemeral" TTL is approximately: *(Remember)*
A. Forever
B. 5 minutes
C. 1 hour+
D. 24 hours

---

### Q18. A semantic cache threshold of 0.95 (cosine similarity) is risky for: *(Analyze)*
A. FAQ-style queries
B. Tasks where similar-but-different inputs (e.g., "transfer $100 to checking" vs "transfer $100 to savings") need DIFFERENT answers
C. Brainstorming
D. Translations

---

### Q19. The simplest signal that proves prompt caching is actually working: *(Apply)*
A. Lower temperature
B. Compare actual billed input tokens (or `cache_read_input_tokens` in the response) vs expected uncached cost
C. Faster outputs
D. More creative responses

---

### Q20. Spillover routing means: *(Understand)*
A. Sending requests to multiple providers in parallel
B. When primary provider rate-limits, fall over to a backup (Anthropic → OpenAI → Gemini, etc.)
C. Streaming to multiple endpoints
D. Splitting context

---

### Q21. The SLO target for P95 latency on a standard chat product is typically: *(Remember)*
A. <50 ms
B. <2 seconds (chat); reasoning models more like 30s
C. <10 minutes
D. <1 hour

---

### Q22. A team has a feature where most queries are very similar but a small minority require fresh answers. The BEST approach is: *(Evaluate)*
A. Always cache
B. Semantic cache for the high-similarity majority, with a "freshness" allowlist that bypasses the cache for query categories that need it
C. Never cache
D. Increase max_tokens

---

### Q23. The MOST robust CI pipeline for a prompt change includes: *(Apply)*
A. Push to main, hope for the best
B. Regression suite (Module 6) + safety eval + cost projection + canary rollout + auto-rollback
C. Only manual review
D. Only latency tests

---

### Q24. The relationship between Anthropic prompt caching and many-shot ICL (Module 2) is: *(Analyze)*
A. Unrelated
B. Caching makes many-shot economically viable, the prefix containing 100+ examples is paid for once, then ~10% per re-use
C. They are mutually exclusive
D. Caching breaks ICL

---

### Q25. Which is NOT a recommended production discipline? *(Analyze)*
A. Pin model snapshots
B. Per-customer spend caps
C. Multi-provider fallbacks
D. Push prompt changes directly to production with no eval

---

### Q26. Design challenge: Theo's startup is rebuilding. Design the MINIMUM viable production architecture for an AI code-review feature serving 50K developers/day. *(Create)*

> *Create-level note:* you're stacking every Module 8 lever.
A. Single GPT-4o endpoint, no caching, no observability, no spend caps
B. (1) Prompts in Git + Langfuse versioning; (2) LiteLLM with primary Anthropic + OpenAI/Gemini fallbacks; (3) Anthropic prompt caching on the system+example prefix; (4) Semantic cache for high-similarity queries with conservative threshold; (5) Tier routing, Haiku for simple, GPT-5 for standard, o3 for hard refactor; (6) Batch API for nightly bulk reviews (50% discount); (7) Langfuse observability with per-customer dashboards; (8) Per-customer + per-feature spend caps with Slack alerts; (9) CI pipeline running regression + safety + cost projection + canary deploy + auto-rollback; (10) Multi-provider snapshot pinning with quarterly eval cadence on snapshot bumps
C. Just use a single model with no infrastructure
D. Hand-write a wrapper around `requests.post`

---

## 🎯 Answers + Explanations

### Q1: **B. `cache_control: {"type": "ephemeral"|"persistent"}`**
Anthropic requires explicit tagging. Other providers vary.

### Q2: **B. Automatic ≥1024 tokens, ~50% discount**
OpenAI's implicit auto-cache. No tagging needed.

### Q3: **B. Cached responses keyed by embedding similarity**
The application-side cache. Different from provider prompt cache.

### Q4: **B. LiteLLM**
The de facto multi-provider abstraction. ~100 providers normalized.

### Q5: **B. Time-To-First-Token**
The streaming latency metric. Critical for chat UX.

### Q6: **B. <500 ms**
The experiential bar. Below this, chat feels live.

### Q7: **B. Layered: caching + tier routing + LiteLLM + observability + caps + CI**
The case-study fix. All layers matter.

### Q8: **B. By the time you have users, the incident happened**
Observability is preventive infrastructure. Wire it day 1.

### Q9: **B. ~50% discount + relaxed limits, non-realtime**
The pricing reality. Use it for any batch work.

### Q10: **B. Hard limit per-customer/per-feature/per-day**
The defense against runaway bills.

### Q11: **B. Provider-agnostic + fallbacks + cost + spillover**
The full feature set. Lock-in avoidance is the killer feature.

### Q12: **B. Vendor-neutral telemetry standard**
The emerging norm. Anything emitting OTLP plays well with anything consuming it.

### Q13: **B. Vendor regressions can break prompts**
Pin → explicit eval → controlled upgrade. The opposite is silent regressions.

### Q14: **B. 1-5% first with monitoring**
The canary pattern. Limit blast radius.

### Q15: **B. Real input through candidate, compare offline**
The pre-launch validation pattern. Cheap, powerful.

### Q16: **B. Buggy integrations burning $50K+ overnight**
The horror story every CTO wants to prevent.

### Q17: **B. ~5 minutes**
Anthropic's ephemeral TTL. Persistent is much longer (1hr+).

### Q18: **B. Similar-but-different inputs needing DIFFERENT answers**
The classic cache-correctness trap. Tune threshold per domain.

### Q19: **B. `cache_read_input_tokens` vs expected uncached cost**
The metric that proves the cache works. Watch it.

### Q20: **B. Primary rate-limit → fall over to backup**
The multi-provider reliability pattern.

### Q21: **B. <2s chat; ~30s reasoning**
The mainstream SLO. Tailor per product.

### Q22: **B. Semantic cache + freshness allowlist**
The mature approach. Cache the cacheable; bypass when it matters.

### Q23: **B. Regression + safety + cost + canary + rollback**
The full CI for prompts. Each layer prevents a different incident class.

### Q24: **B. Caching makes many-shot economically viable**
The Module 2 ↔ Module 8 connection. Caching changed the math.

### Q25: **D. Push directly to prod with no eval**
The anti-pattern. Every other option is recommended.

### Q26: **B. The 10-layer architecture**
The full Module 8 stack. Anything less is technical debt or a future $74K bill.

---

## 📊 Score Yourself

- 25–26/26 → 🏆 Module 8 mastered. You're ready for the Final Mock.
- 22–24/26 → ✅ Solid. Note the gaps, then move on.
- 18–21/26 → ⚠️ Re-read the caching and LiteLLM sections.
- <18/26 → 🔁 Restart the Reading.md, then re-quiz tomorrow.

---

## 🃏 Add To Your Flashcards

- Prompt cache vs semantic cache
- Anthropic `cache_control` (ephemeral vs persistent)
- OpenAI auto-cache ≥1024 tokens
- LiteLLM, OpenRouter, Portkey
- Langfuse, Helicone, LangSmith, Phoenix
- OpenTelemetry GenAI semconv
- TTFT < 500ms
- Batch API 50% discount
- Spend caps + canary + rollback

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then Practice-Exam-2 → Final-Mock-Exam.
