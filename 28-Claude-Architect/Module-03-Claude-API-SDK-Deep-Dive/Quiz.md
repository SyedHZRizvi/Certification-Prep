# ✏️ Module 3 Quiz: Claude API & SDK Deep Dive

> **Instructions:** Answer all 26 questions WITHOUT looking at the reading.
> Then check your answers below. Aim for 22/26 minimum.
>
> **Bloom distribution (this quiz):** Remember 6 · Understand 6 · Apply 8 · Analyze/Evaluate 5 · Create 1.

---

## Questions

### Q1. The single HTTP endpoint for all chat-style Claude completions is: *(Remember)*
A. `POST /v1/completions`
B. `POST /v1/messages`
C. `POST /chat/completions`
D. `POST /v1/generate`

---

### Q2. The required HTTP header that pins the API contract version is: *(Remember)*
A. `anthropic-key`
B. `anthropic-version`
C. `x-claude-version`
D. `accept-version`

---

### Q3. Anthropic prompt caching typically reduces the cost of CACHED input tokens by approximately: *(Remember)*
A. 25%
B. 50%
C. 75%
D. 90% (cached tokens billed at ~10% of standard)

---

### Q4. The Batch API discount on input AND output tokens is approximately: *(Remember)*
A. 10%
B. 50%
C. 75%
D. 90%

---

### Q5. Which `stop_reason` value indicates the model hit the `max_tokens` cap? *(Remember)*
A. `end_turn`
B. `max_tokens`
C. `stop_sequence`
D. `tool_use`

---

### Q6. A 5K-token stable system prompt is sent 100 times in 4 minutes. Cache TTL is ~5 min. Approximate cache hit rate: *(Understand)*
A. 0% (cache never hits)
B. ~99% (1 write + 99 reads; all within TTL)
C. 50%
D. Unknowable

---

### Q7. The MOST appropriate response to repeated HTTP 429 errors under load is: *(Apply)*
A. Increase worker count
B. Implement exponential backoff with jitter, honor `retry-after`, and consider tier upgrade
C. Switch to a different API key
D. Reduce `max_tokens` to 1

---

### Q8. Which of these errors is RETRYABLE? *(Understand)*
A. 400 BadRequestError
B. 401 AuthenticationError
C. 422 UnprocessableEntityError
D. 529 OverloadedError

---

### Q9. A user-facing chat UI feels slow at 4 seconds. The single highest-impact engineering change is: *(Apply)*
A. Switch from Opus to Haiku
B. Enable streaming so TTFT drops to ~500ms
C. Reduce temperature
D. Use Batch API

---

### Q10. To count tokens of a prompt WITHOUT charging for inference, the correct call is: *(Remember)*
A. `len(prompt) / 4` heuristic
B. `client.messages.count_tokens(...)` endpoint
C. Make a `max_tokens=1` call and inspect usage
D. There is no supported way

---

### Q11. The Python SDK default retry count (without overriding) is approximately: *(Remember)*
A. 0 (no retries)
B. 2
C. 10
D. Unlimited

---

### Q12. To use Claude on AWS Bedrock with the official Anthropic SDK, you instantiate: *(Apply)*
A. `Anthropic(api_key=...)`
B. `AnthropicBedrock(aws_region=...)`
C. `BedrockClient(model=...)`
D. There is no Anthropic SDK for Bedrock

---

### Q13. The MOST appropriate scenario for the Batch API is: *(Apply)*
A. A user-facing real-time chat
B. Summarizing 2M existing support tickets to enrich a knowledge base overnight
C. A latency-sensitive autocomplete in an IDE
D. A single one-off question

---

### Q14. To enable prompt caching on a system block, you set on that block: *(Remember)*
A. `cache: true`
B. `cache_control: {"type": "ephemeral"}`
C. `useCache: True`
D. `?cache=1` query parameter

---

### Q15. Reading the `usage` object on a response with cache hit, the relevant cache field is: *(Understand)*
A. `cache_hit: true`
B. `cache_read_input_tokens: N`
C. `cached_tokens: N`
D. `prompt_cache_count: N`

---

### Q16. The PRIMARY binding constraint at scale on Anthropic rate limits is OFTEN: *(Analyze)*
A. Requests per minute (RPM)
B. Tokens per minute (TPM), output lengths vary widely; TPM saturates first
C. Concurrent connections
D. Number of API keys

---

### Q17. A 7-day workload generates 50M Claude calls. Each has 4K input + 800 output tokens, with 3K of the input cacheable. Comparing no-cache vs cache, the cost differential is: *(Analyze)*
A. Negligible
B. Substantial, likely >50% reduction on input portion of the bill
C. Cache makes it more expensive
D. Cannot be calculated

---

### Q18. The MOST important reason to set `metadata={"user_id": "..."}` on Anthropic calls is: *(Understand)*
A. Performance
B. Abuse monitoring + per-user attribution
C. Compliance
D. None, the field is decorative

---

### Q19. A junior engineer hardcodes `sk-ant-...` into a React app's frontend code. The CORRECT fix is: *(Apply)*
A. Obfuscate the key with base64
B. Move the call server-side; the frontend talks to YOUR backend, which holds the key
C. Use a "limited" API key
D. Leave it; the key is fine in frontend code

---

### Q20. A team plans for 200K calls/day on Sonnet at 4K in / 600 out and full cache hit. Approximate daily cost: *(Analyze)*
A. ~$1
B. ~$2,800 (4K cached @ $0.30/Mtok + 600 out @ $15/Mtok × 200K calls)
C. ~$30,000
D. Cannot be calculated

---

### Q21. The `anthropic-beta` header is used to: *(Understand)*
A. Mark a request as test/dev
B. Opt into preview features (prompt caching when in beta, computer use, MCP beta, extended thinking, etc.)
C. Reduce rate limits
D. Enable retries

---

### Q22. The Anthropic SDK `messages.stream(...)` context manager exposes a CONVENIENT helper for iterating text deltas via: *(Apply)*
A. `stream.text_stream`
B. `stream.deltas`
C. `stream.tokens`
D. `stream.events_text`

---

### Q23. A team gets 529 OverloadedError responses. The correct interpretation is: *(Understand)*
A. The team has exceeded their tier limit
B. Anthropic's overall capacity is overloaded; back off significantly and consider regional failover
C. The model is permanently unavailable
D. The API key is invalid

---

### Q24. The PRIMARY trade-off when using `AnthropicBedrock` over the direct API is: *(Evaluate)*
A. Better latency
B. Data stays in your AWS account; AWS billing/IAM; slight lag on newest models/features
C. Lower price
D. No trade-offs

---

### Q25. Which statement about prompt caching is FALSE? *(Evaluate)*
A. The cache attaches to the prompt prefix
B. A single changed character invalidates the cache
C. Caching applies to output tokens
D. TTL is approximately 5 minutes

---

### Q26. Design challenge: Architect a 200K-call/day customer-support copilot that streams responses with sub-1s TTFT, hits cache >95% on a 8K-token system prompt, falls back gracefully on rate limits, and reports per-tenant cost. The MINIMUM viable architecture includes: *(Create)*

> *Create-level note:* multiple subsystems must compose.
A. One Python script calling the API in a loop with no retries
B. (a) Tier-routed model selection (Sonnet/Haiku) (b) `cache_control` on 8K system block (c) Streaming via SDK (d) SDK retries + circuit breaker (e) Langfuse/Helicone observability with `metadata.user_id` per call (f) Tier 3+ rate-limit headroom (g) Optional Batch lane for non-realtime work
C. Opus on every call, no caching, no streaming, no retries
D. Self-hosted Claude weights (not possible)

---

## 🎯 Answers + Explanations

### Q1: **B. `POST /v1/messages`**
Single endpoint for all chat-style work. Completions endpoint (`/v1/complete`) is deprecated.

### Q2: **B. `anthropic-version`**
Required on every request; pins the API contract version. `2023-06-01` has been the canonical pin.

### Q3: **D. 90%**
Cached tokens are billed at ~10% of standard input price.

### Q4: **B. 50%**
Batch API: 50% off both input and output. Combine with caching for compound savings on overnight workloads.

### Q5: **B. `max_tokens`**
The four `stop_reason` values: `end_turn`, `max_tokens`, `stop_sequence`, `tool_use`.

### Q6: **B. ~99% (1 write + 99 reads)**
First call writes; subsequent calls within TTL hit the cache. Each hit renews TTL.

### Q7: **B. Exponential backoff with jitter, honor `retry-after`, and consider tier upgrade**
Increasing workers under 429 creates thundering herd. Backoff is the right answer.

### Q8: **D. 529 OverloadedError**
429, 500, 502/503/504, and 529 are retryable. 4xx other than 429 are bugs in your request.

### Q9: **B. Enable streaming so TTFT drops to ~500ms**
Streaming improves *perceived* latency dramatically (TTFT goes from 3-6s to ~500ms).

### Q10: **B. `client.messages.count_tokens(...)` endpoint**
Returns the same tokenization the model would use, without billing for inference.

### Q11: **B. 2**
SDK default is 2 retries with backoff. Configure via `max_retries=N`.

### Q12: **B. `AnthropicBedrock(aws_region=...)`**
Same SDK, different client class. The `messages.create(...)` interface is identical.

### Q13: **B. Summarizing 2M existing tickets overnight**
Batch is for high-volume async; hours SLA is fine, 50% discount makes the economics work.

### Q14: **B. `cache_control: {"type": "ephemeral"}`**
The marker on the content block enables caching of the prefix ending at that block.

### Q15: **B. `cache_read_input_tokens: N`**
This is the field that confirms a cache hit and tells you how many tokens were served at the discount rate.

### Q16: **B. TPM, tokens per minute**
With Claude's variable output lengths, TPM is more often the binding constraint than RPM, especially on Opus.

### Q17: **B. Substantial, likely >50% reduction on the input portion**
3K of 4K input cached → ~90% off on 3K × 50M calls. Run the math; this is the bill-paying decision.

### Q18: **B. Abuse monitoring + per-user attribution**
Anthropic uses `metadata.user_id` for abuse detection; you also benefit from per-user cost attribution.

### Q19: **B. Move the call server-side; the frontend talks to YOUR backend**
NEVER ship the key to the browser. Proxy through your backend.

### Q20: **B. ~$2,800**
Cached input ≈ 4K × $0.30/Mtok = $0.0012; output 600 × $15/Mtok = $0.009 → $0.0102 × 200K = ~$2,040, plus per-call overheads → ~$2,800/day range. (Numbers approximate.)

### Q21: **B. Opt into preview features**
Cache, computer use, MCP, extended thinking, features in preview gate behind specific beta headers.

### Q22: **A. `stream.text_stream`**
The Python SDK's text-only iterator over deltas. The events iterator is `stream` itself.

### Q23: **B. Anthropic's overall capacity is overloaded**
Different from 429 (your tier limit). Back off more aggressively; consider failover to another region/host.

### Q24: **B. Data stays in your AWS account; slight lag on newest models/features**
The data-residency win is the main reason; the lag is the cost.

### Q25: **C. Caching applies to output tokens**
False. Caching is on INPUT (prompt prefix). Output is always freshly generated and freshly billed.

### Q26: **B. The composed architecture**
Tier routing + caching + streaming + retries + observability + headroom + optional batch lane. This is production.

---

## 📊 Score Yourself

- 25–26/26 → 🏆 Module 3 mastered.
- 22–24/26 → ✅ Solid. Note the gaps.
- 18–21/26 → ⚠️ Re-read caching and retries sections.
- <18/26 → 🔁 Restart the Reading.md.

---

## 🃏 Add To Your Flashcards

- Single endpoint: `POST /v1/messages`
- Required header: `anthropic-version`
- Beta header for previews: `anthropic-beta`
- Caching: `cache_control: {"type":"ephemeral"}`; ~90% off cached input; ~5 min TTL
- Batch: 50% off; hours SLA; async
- Stop reasons: `end_turn` / `max_tokens` / `stop_sequence` / `tool_use`
- Retryable: 429, 500, 502, 503, 504, 529
- TTFT improvement: streaming
- Count tokens without inference: `messages.count_tokens`
- AnthropicBedrock / AnthropicVertex SDK clients
- Never expose API key to frontend

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 4, Tool Use & Function Calling](../Module-04-Tool-Use-Function-Calling/Reading.md)
