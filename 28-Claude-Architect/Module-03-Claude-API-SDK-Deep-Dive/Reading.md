# Module 3: Claude API & SDK Deep Dive 🔌

> **Why this module matters:** Anything you can do with Claude, you can do with a 30-line script — once you know the API. The Messages API is small (one endpoint, ten or so parameters), but the details — streaming semantics, batch economics, prompt caching, retries, error taxonomy — are what separate a junior engineer from one who can stand up a Claude-powered service that does not page anyone at 2 a.m.

> **Prerequisites for this module.** You should be comfortable with:
> - Modules 1 and 2 (model tiers + prompting conventions)
> - HTTP basics (status codes, headers, JSON, streaming responses, server-sent events)
> - Python OR TypeScript at intermediate level — the examples are language-equivalent
> - Async programming basics (async/await, futures, promises)
> - Environment variables and basic secret hygiene

---

## 📖 A Story: The 2 a.m. Page That Should Never Have Happened

It is March 2024, 2:13 a.m. Pacific. Wendy is the lone on-call SRE for Beacon, a 40-person startup whose entire product flow runs through Claude 3 Opus. PagerDuty fires. The dashboard shows 100% error rate to the Anthropic API. Sample error: `429 Too Many Requests — rate limit exceeded`.

Wendy's first instinct is to scale the workers. She doubles them. Errors double. She quadruples them. Errors quadruple. The product is down for 47 minutes before her engineering lead, Sam, wakes up and asks the question Wendy has not thought of: *"What does your retry logic look like?"*

The answer: there isn't one. The code does `client.messages.create(...)` and surfaces any exception straight to the user. When Anthropic returned 429, the code threw, the worker died, the supervisor restarted it, the new worker immediately retried, hit 429 again, and... well, it was a thundering herd of their own making.

The fix is 8 lines: exponential backoff with jitter on 429 and 5xx, surfaced from the SDK's built-in retry helper. The fix is also free; it ships in the Anthropic SDK out of the box and just needs to be *enabled*. Wendy ships it the next morning. The 2 a.m. page never repeats.

The lesson this module exists to teach: **the API call is the easy part. The discipline around the API call — retries, streaming, caching, batching, observability — is the engineering.**

---

## 🛣️ The Messages API in One Slide

```
POST https://api.anthropic.com/v1/messages

Headers:
  x-api-key: sk-ant-xxxxx
  anthropic-version: 2023-06-01
  content-type: application/json
  (optional) anthropic-beta: prompt-caching-2024-07-31, computer-use-2024-10-22, ...

Body:
{
  "model": "claude-sonnet-4-6-20260301",
  "max_tokens": 1024,
  "system": "You are a helpful assistant.",
  "messages": [
    {"role": "user", "content": "Hello!"}
  ],
  "temperature": 1.0,                  // 0.0 – 1.0
  "top_p": 0.999,                      // alternative to temperature
  "top_k": 0,                          // 0 = disabled
  "stop_sequences": ["\n\nHuman:"],
  "stream": false,
  "metadata": {"user_id": "abc123"}    // for abuse monitoring
}

Response (non-streaming):
{
  "id": "msg_01...",
  "type": "message",
  "role": "assistant",
  "model": "claude-sonnet-4-6-20260301",
  "content": [
    {"type": "text", "text": "Hi there! How can I help?"}
  ],
  "stop_reason": "end_turn",     // end_turn | max_tokens | stop_sequence | tool_use
  "stop_sequence": null,
  "usage": {
    "input_tokens": 12,
    "output_tokens": 8,
    "cache_creation_input_tokens": 0,
    "cache_read_input_tokens": 0
  }
}
```

That is the entire API surface for a basic call. Tool use (Module 4) adds `tools` and a different `content` shape; vision adds `image` content blocks; everything else is detail.

---

## 🐍 Python SDK — `anthropic`

### Install + initialize

```bash
pip install anthropic
```

```python
import os
from anthropic import Anthropic

client = Anthropic(
    api_key=os.environ["ANTHROPIC_API_KEY"],
    # Optional:
    # base_url="https://api.anthropic.com",  # override for proxies
    # timeout=60.0,
    # max_retries=2,
)

response = client.messages.create(
    model="claude-sonnet-4-6-20260301",
    max_tokens=1024,
    system="You are a senior Python engineer.",
    messages=[
        {"role": "user", "content": "Write a `dedup_preserving_order` function for a list of dicts."}
    ],
)

print(response.content[0].text)
print(f"Used {response.usage.input_tokens} input + {response.usage.output_tokens} output tokens")
```

### Async

```python
from anthropic import AsyncAnthropic

async_client = AsyncAnthropic()

async def main():
    response = await async_client.messages.create(
        model="claude-sonnet-4-6-20260301",
        max_tokens=512,
        messages=[{"role": "user", "content": "Hello!"}],
    )
    print(response.content[0].text)
```

### Streaming (server-sent events)

```python
with client.messages.stream(
    model="claude-sonnet-4-6-20260301",
    max_tokens=1024,
    messages=[{"role": "user", "content": "Stream a 300-word essay on persimmons."}],
) as stream:
    for text in stream.text_stream:   # iterates over text deltas
        print(text, end="", flush=True)
    final = stream.get_final_message()
    print(f"\n\nTotal: {final.usage.input_tokens}+{final.usage.output_tokens} tokens")
```

The SDK handles the SSE parsing for you. If you call the HTTP endpoint directly, you receive events like `message_start`, `content_block_start`, `content_block_delta`, `content_block_stop`, `message_delta`, `message_stop` — Anthropic's documented streaming protocol.

🎯 **Exam pattern:** *"What is the SDK helper that exposes a clean iterator over text deltas?"* → **`client.messages.stream(...)` with `stream.text_stream`**.

---

## 🟦 TypeScript SDK — `@anthropic-ai/sdk`

### Install + initialize

```bash
npm install @anthropic-ai/sdk
```

```typescript
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
  // Optional:
  // baseURL: "https://api.anthropic.com",
  // timeout: 60_000,
  // maxRetries: 2,
});

const response = await client.messages.create({
  model: "claude-sonnet-4-6-20260301",
  max_tokens: 1024,
  system: "You are a senior TypeScript engineer.",
  messages: [
    { role: "user", content: "Write a `dedupPreservingOrder` function for an array of objects." },
  ],
});

console.log(response.content[0].type === "text" ? response.content[0].text : "");
```

### Streaming

```typescript
const stream = client.messages.stream({
  model: "claude-sonnet-4-6-20260301",
  max_tokens: 1024,
  messages: [{ role: "user", content: "Stream a haiku about TCP/IP." }],
});

for await (const event of stream) {
  if (event.type === "content_block_delta" && event.delta.type === "text_delta") {
    process.stdout.write(event.delta.text);
  }
}

const final = await stream.finalMessage();
console.log("\n\nUsage:", final.usage);
```

The TS SDK exposes both an event-stream iterator and a `.finalMessage()` helper, plus a higher-level `stream.on('text', cb)` event emitter API.

---

## ⚡ Streaming — Why You (Almost) Always Want It

Without streaming, the user waits for the full response before seeing a single character. For a Sonnet response of ~600 tokens, that's typically **3–6 seconds of dead air**. With streaming, the first token arrives in 250–500 ms (the **time to first token**, TTFT) and the rest flows.

| Metric | Without streaming | With streaming |
|--------|-------------------|----------------|
| Time to first byte | ~3–6s (full response) | ~250–500 ms (first token) |
| Perceived latency | Bad | Good |
| Memory at client | Lower (one big chunk) | Lower (incremental) |
| Implementation complexity | Trivial | Slight — handle SSE / iterator |
| Use when | Background jobs, batches | Anywhere a human is waiting |

🎯 **Exam pattern:** *"A chat UI feels slow at 4 seconds. What is the single highest-impact engineering change?"* → **Stream the response** (TTFT drops to ~500 ms).

### Streaming gotchas

- **Always handle the close event.** A dropped connection mid-stream means an incomplete response; design your retry semantics.
- **`stop_reason` is on the final event**, not on early deltas. Don't try to assert from a partial stream.
- **Stream the right thing.** If your app needs the FULL response before processing (e.g., JSON parsing), streaming is still useful for time-to-first-byte, but you'll buffer to a string before parsing.
- **Tool use streaming has a different schema.** Tool calls arrive as `tool_use` content blocks; we cover this in Module 4.

---

## 🧊 Prompt Caching — The 90% Cost Cut

Anthropic shipped prompt caching in mid-2024. It works by hashing the prompt prefix and serving repeated requests against the same prefix from a server-side cache. Cached tokens are billed at roughly **10% of standard input price** (so ~90% off).

### How to enable

```python
response = client.messages.create(
    model="claude-sonnet-4-6-20260301",
    max_tokens=1024,
    system=[
        {
            "type": "text",
            "text": "[5K-token stable system prompt with full context and rules]",
            "cache_control": {"type": "ephemeral"}      # <-- the magic
        }
    ],
    messages=[
        {
            "role": "user",
            "content": [
                {
                    "type": "text",
                    "text": "[stable user-message context, e.g. workspace metadata]",
                    "cache_control": {"type": "ephemeral"}
                },
                {
                    "type": "text",
                    "text": "[per-request variable content — NOT cached]"
                }
            ]
        }
    ]
)

print(response.usage)
# CacheCreationUsage(input_tokens=X, cache_creation_input_tokens=5000, cache_read_input_tokens=0, output_tokens=Y)
# Next call within ~5 min:
# CacheCreationUsage(input_tokens=X, cache_creation_input_tokens=0, cache_read_input_tokens=5000, output_tokens=Y)
```

### Rules to internalize

1. **Cache attaches to a specific PREFIX**, ending at the `cache_control` marker. Everything BEFORE the marker is cacheable; everything after is not (for that cache point).
2. **You can mark multiple cache points** (up to ~4) — the API caches each prefix separately. Use this for layered structures.
3. **TTL is short** — ~5 minutes ephemeral. The cache "warms" on the first call and "hits" on subsequent calls within TTL. A *hit* renews the TTL.
4. **Minimum cacheable content** is ~1024 tokens for most models (smaller models may have lower thresholds). Marking a 300-token block does nothing.
5. **`cache_creation_input_tokens` are billed at a small markup** (typically ~25% MORE than standard input, one-time). Subsequent reads are 10% of standard. The break-even is usually 2 calls.
6. **Prompt MUST match byte-for-byte** — a single changed whitespace invalidates the cache.

### The economics

Take a 5K-token system prompt at $3/Mtok Sonnet input:

| Scenario | Cost |
|----------|------|
| No cache, 10 calls | 10 × 5K × $3/Mtok = $0.150 |
| With cache, 1 write + 9 reads | (5K × $3.75/Mtok) + (9 × 5K × $0.30/Mtok) ≈ $0.019 + $0.135/10 ≈ ~$0.032 |
| Savings | ~78% |

At 1,000 calls (within the TTL hit cycle, well-warmed):

| Scenario | Cost |
|----------|------|
| No cache | $1.50 |
| With cache | ~$0.16 |
| Savings | ~89% |

This is why Notion and Cursor talk about caching as a *make-or-break* economics decision.

🚨 **Trap on the exam:** *"Prompt caching reduces input cost by 50%."* — FALSE. The cached portion is reduced by ~90% (billed at ~10%).

---

## 📦 Batch API — When Latency Doesn't Matter

For workloads where you can wait minutes-to-hours for responses (overnight enrichment, classification of a corpus, dataset generation), Anthropic offers the **Message Batches API** at **50% discount** on both input and output tokens.

### Flow

```python
from anthropic.types.messages.batch_create_params import Request

batch = client.messages.batches.create(
    requests=[
        Request(
            custom_id="doc-001",
            params={
                "model": "claude-sonnet-4-6-20260301",
                "max_tokens": 512,
                "messages": [{"role": "user", "content": f"Summarize:\n{document_1}"}],
            }
        ),
        Request(
            custom_id="doc-002",
            params={
                "model": "claude-sonnet-4-6-20260301",
                "max_tokens": 512,
                "messages": [{"role": "user", "content": f"Summarize:\n{document_2}"}],
            }
        ),
        # ... up to 10,000 requests per batch ...
    ]
)

print(batch.id)
# Poll for completion (or use webhook):
while True:
    batch = client.messages.batches.retrieve(batch.id)
    if batch.processing_status == "ended":
        break
    time.sleep(30)

# Stream results
for result in client.messages.batches.results(batch.id):
    print(result.custom_id, result.result.message.content[0].text)
```

### When to use Batch

- ✅ Overnight RAG document enrichment (millions of docs, summarize each)
- ✅ Bulk classification (sentiment, intent, language detection)
- ✅ Synthetic data generation for fine-tuning
- ✅ Re-running an entire eval suite after a prompt change
- ❌ Anything user-facing (Batch SLA is hours, not seconds)
- ❌ Anything that needs to chain to another LLM call immediately

🎯 **Exam pattern:** *"A team wants to summarize 2M existing support tickets to enrich their knowledge base. The job can run overnight."* → **Batch API at 50% discount**.

---

## 🔢 Token Counting (Without an API Call)

Sometimes you want to know how many tokens a prompt is BEFORE you send it (to fit a context window, to estimate cost, to chunk a document). The SDK provides:

```python
# Approximate count using the SDK's built-in counter
token_count = client.messages.count_tokens(
    model="claude-sonnet-4-6-20260301",
    messages=[{"role": "user", "content": "How many tokens am I?"}],
    system="You are helpful.",
)
print(token_count.input_tokens)
```

This calls the **`/messages/count_tokens` endpoint**, which returns the same tokenization the model would use without charging for inference. It is the right way to count.

### Why not "len(text)/4"?

- Rough rule of thumb only — accurate to within ~20% for English prose
- *Bad* for code, JSON, non-Latin scripts, very long words
- Bad for tool-use payloads (tool definitions add hidden tokens)

🎯 **Exam pattern:** *"What is the correct, supported way to count tokens for a Claude prompt?"* → **`client.messages.count_tokens(...)`**.

---

## 🔁 Retries, Errors & The Error Taxonomy

The SDK ships with built-in retry logic. By default it retries 2 times on retryable errors with exponential backoff and jitter. You configure it at construction:

```python
client = Anthropic(max_retries=3, timeout=60.0)
```

### Retryable vs non-retryable errors

| Status | Class | Retry? | What it means |
|--------|-------|--------|---------------|
| **400** | `BadRequestError` | ❌ | Invalid request — bug on your side |
| **401** | `AuthenticationError` | ❌ | Bad API key |
| **403** | `PermissionDeniedError` | ❌ | API key valid but lacks scope |
| **404** | `NotFoundError` | ❌ | Bad model name, batch ID, etc. |
| **409** | `ConflictError` | ❌ | Resource state conflict |
| **413** | `RequestTooLargeError` | ❌ | Prompt exceeds limit — shrink it |
| **422** | `UnprocessableEntityError` | ❌ | Schema validation failed |
| **429** | `RateLimitError` | ✅ | Honor the `retry-after` header |
| **500** | `InternalServerError` | ✅ | Server issue; back off and retry |
| **502/503** | `APIConnectionError` / similar | ✅ | Upstream / gateway issue |
| **504** | Timeout | ✅ | Long inference; consider shorter `max_tokens` |
| **529** | `OverloadedError` | ✅ | Anthropic is over capacity; back off significantly |

### Retry strategy in production

```python
from anthropic import RateLimitError, APIConnectionError, InternalServerError
import time, random

def call_with_retry(max_attempts=5):
    for attempt in range(max_attempts):
        try:
            return client.messages.create(...)
        except RateLimitError as e:
            wait = float(e.response.headers.get("retry-after", 2 ** attempt))
            time.sleep(wait + random.uniform(0, 1))   # jitter
        except (APIConnectionError, InternalServerError) as e:
            wait = (2 ** attempt) + random.uniform(0, 1)
            if attempt == max_attempts - 1:
                raise
            time.sleep(wait)
```

The SDK does this for you — but if you wrap it in your own client (which you will, for observability), preserve the same shape.

### Rate limit headers (always log these)

| Header | What it tells you |
|--------|-------------------|
| `anthropic-ratelimit-requests-limit` | Your per-minute request cap |
| `anthropic-ratelimit-requests-remaining` | How many you have left this minute |
| `anthropic-ratelimit-requests-reset` | RFC3339 timestamp when the bucket resets |
| `anthropic-ratelimit-input-tokens-limit` | Per-minute input token cap |
| `anthropic-ratelimit-input-tokens-remaining` | Tokens left in current bucket |
| `anthropic-ratelimit-output-tokens-limit` | Per-minute output token cap |
| `retry-after` | On 429/529: seconds to wait |

Surface these in your dashboards. The 90th-percentile "tokens-remaining at end of minute" should never approach zero — if it does, you need to request a tier upgrade.

🎯 **Exam pattern:** *"Your service hits HTTP 429 repeatedly under load. The correct response is:"* → **Exponential backoff with jitter, honor `retry-after`, and consider requesting a tier upgrade.**

---

## 💸 Pricing Tiers & Rate Limit Tiers

Anthropic has multiple **rate limit tiers** (Tier 1 / 2 / 3 / 4) that gate your monthly spend, request rate, and per-minute token throughput. New accounts start at Tier 1. Tier-up by spending or by enterprise contract.

| Tier | Approx monthly spend ceiling | Approx Sonnet RPM | Approx Sonnet TPM |
|------|------------------------------|-------------------|-------------------|
| **Tier 1** | $100 | 50 | 20–50K |
| **Tier 2** | $500 | 1,000 | 40–80K |
| **Tier 3** | $1,000 | 2,000 | 80–160K |
| **Tier 4** | $5,000+ | 4,000+ | 200–400K+ |
| **Custom (Scale Plan)** | Negotiated | Negotiated | Negotiated |

These numbers vary by model and date — check the [console rate limits page](https://console.anthropic.com/settings/limits) for current values. The pattern matters more than the specific numbers.

### Practical implications

- **Capacity-plan in TPM, not RPM.** With Claude's variable output lengths, tokens-per-minute is the binding constraint more often than requests-per-minute.
- **Don't burn through your tier on Opus accidentally.** Opus output rate limits are much tighter and burn down your spend ceiling 5× faster.
- **For enterprise scale, talk to Anthropic Sales.** Scale Plan offers custom limits and reserved capacity.

---

## 🔐 Authentication & Secret Hygiene

### API key formats

- Anthropic direct: `sk-ant-api03-xxxxx` (or similar — version prefix changes)
- AWS Bedrock: standard AWS SigV4 — uses your IAM credentials
- GCP Vertex: Google service account auth

### Rules

- **Never commit API keys**. Use a `.env` file (gitignored) for local dev; use your platform's secret manager (AWS Secrets Manager, GCP Secret Manager, Vault, Doppler) in production.
- **One key per environment** at minimum (dev / staging / prod). Per-service if your scale warrants it.
- **Rotate periodically.** Anthropic exposes key creation/deletion in the console.
- **Tag keys by purpose** so the org-admin view shows who owns what.
- **Server-side only.** Never ship an API key to the browser. If you have a JS frontend, proxy through a backend that holds the key.
- **Tag requests with `metadata.user_id`** for abuse monitoring — Anthropic uses this to detect compromised keys.

---

## 🌐 Hosting Options Recap: Direct vs Bedrock vs Vertex

| Concern | Anthropic direct | AWS Bedrock | GCP Vertex |
|---------|------------------|-------------|------------|
| Bills routed via | Anthropic | AWS | GCP |
| Data residency | Anthropic infra | Your AWS account/region | Your GCP project/region |
| Latest model availability | First | Slight lag | Slight lag |
| Latest features (computer use, batch, beta headers) | First | Slight lag | Slight lag |
| Auth | API key | IAM (SigV4) | GCP service account |
| Rate limits | Anthropic tiers | AWS service quotas | GCP quotas |
| Best for | Startups, R&D, latest features | AWS-native enterprises | GCP-native enterprises |

The SDK on direct API:
```python
from anthropic import Anthropic
client = Anthropic(api_key="sk-ant-...")
```

The SDK on Bedrock (uses `anthropic` library with the bedrock client):
```python
from anthropic import AnthropicBedrock
client = AnthropicBedrock(
    aws_region="us-east-1",
    # aws_secret_key, aws_access_key — or implicit from environment
)
```

The SDK on Vertex:
```python
from anthropic import AnthropicVertex
client = AnthropicVertex(
    project_id="my-gcp-project",
    region="us-central1",
)
```

Same `client.messages.create(...)` interface across all three. **Code portability between hosts is excellent.** The model SKU naming differs slightly across platforms (Bedrock uses `anthropic.claude-sonnet-4-6-v1:0`-style IDs); check the per-platform docs.

---

## 🔬 Observability — What to Log

Production Claude services live or die on telemetry. The minimum logged set per call:

| Field | Why |
|-------|-----|
| Request ID (Anthropic's `request-id` response header) | Trace back to Anthropic support |
| Model used | Spot regressions when models update |
| Input tokens / output tokens / cache_read / cache_creation | Cost reporting |
| Latency (P50/P90/P99) | Detect slowdowns |
| `stop_reason` | Detect truncations (`max_tokens` hit) |
| HTTP status / error class | Error budgets |
| Prompt fingerprint (hash of system + first user) | Catch prompt regressions |
| User ID / tenant ID | Per-customer cost attribution |
| Tier / fallback used | Detect when routing logic is triggering |

Plug into **Langfuse**, **Helicone**, **OpenLLMetry**, **Datadog LLM Observability**, or roll your own. Module 8 covers the prod ops side in depth.

---

## 🔬 Scenario Walkthrough (Architect-Style)

> **Scenario:** Your team is building a customer-support copilot that handles 200K conversations/day. Each conversation has a 8K-token system prompt (product knowledge, policies) + ~4K average dynamic context + ~600 token responses. The product manager wants <1 second median time-to-first-token. Design the call path.

**Walkthrough:**
1. **Tier choice**: Sonnet 4.6 default; route truly trivial intents (greeting/closing) to Haiku 4.5 via a cheap intent classifier (also Haiku).
2. **Caching**: 8K system prompt — mark cache_control on the system block. Should hit cache > 95% of the time at 200K/day = ~2.3 req/sec, well within the 5-min TTL.
3. **Streaming**: REQUIRED for <1s TTFT. Use SDK `stream(...)`.
4. **Retries**: SDK `max_retries=3`. Wrap in your own retry loop only for application-level concerns (e.g., regenerate on `stop_reason=max_tokens`).
5. **Observability**: Log all 9 fields above to Langfuse. Alert on P99 TTFT > 2s, on `stop_reason=max_tokens` rate > 0.5%, on 429 rate > 0.1%.
6. **Rate-limit headroom**: 200K/day = ~140 req/min average, but peak is 5× that. Aim for Tier 3+ on Sonnet (≥2,000 RPM headroom).
7. **Cost ballpark**: 200K calls × ~$0.014/call (cached) = ~$2,800/day = ~$84K/month. Worth running a Haiku eval to see if some flows can be downgraded.
8. **Hosting**: If customer data residency is required (EU? Healthcare?), Bedrock with the right region. Otherwise direct API for feature freshness.

This is the layered answer expected of an architect.

---

## ⚠️ Exam Traps & Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "Prompt caching reduces cost by 50%." | ~90% off cached input. 50% off is Batch API (different feature). |
| "Anthropic SDK doesn't retry by default." | It does — 2 retries by default with backoff. |
| "Streaming reduces total tokens." | No, same tokens — improves *perceived* latency (TTFT). |
| "Batch API is for low-throughput jobs." | Opposite — Batch is for HIGH-volume async jobs; 50% discount, hours SLA. |
| "I should set max_tokens very high to be safe." | High `max_tokens` increases your billed ceiling and reduces concurrency; size it to actual need. |
| "Rate limit is just about RPM." | Often TPM (tokens/min) is the binding limit, especially on Opus. |
| "Token counting requires sending the prompt." | Use `messages.count_tokens(...)` — same tokenizer, no inference charge. |
| "I can use my API key in the browser." | NEVER — proxy through your backend. |
| "529 means I'm rate-limited." | 529 = Anthropic capacity overflow (different from 429 = your tier limit). |

---

## 🎓 Key Terms To Know (Add to Flashcards!)

| Term | Definition |
|------|------------|
| **Messages API** | The single Anthropic endpoint for chat-style completions |
| **anthropic-version header** | Required version pin (`2023-06-01` is canonical) |
| **anthropic-beta header** | Opt into preview features (prompt caching, computer use, etc.) |
| **Streaming** | Server-sent events delivering text deltas as the model generates |
| **TTFT** | Time To First Token — the latency-perception metric |
| **stop_reason** | `end_turn`, `max_tokens`, `stop_sequence`, `tool_use` |
| **usage** | Per-response counts of input/output/cache tokens |
| **cache_control** | The `{"type":"ephemeral"}` marker enabling prompt caching |
| **cache_creation_input_tokens** | Tokens billed at one-time write rate (~25% above input) |
| **cache_read_input_tokens** | Tokens billed at cached read rate (~10% of input) |
| **Batch API** | Async bulk endpoint with 50% discount and ~hours SLA |
| **Rate limit tier** | Account-level cap on RPM / TPM / spend |
| **Retry-after** | HTTP header on 429/529 indicating wait seconds |
| **count_tokens** | API endpoint that returns token count without inference |
| **AnthropicBedrock / AnthropicVertex** | SDK clients targeting AWS / GCP hosting |

---

## 📊 Case Study — Klarna's Customer Support Transformation

**Situation.** Klarna (Swedish fintech, ~150M customers) publicly announced in early 2024 that an AI assistant — built primarily on Claude — was handling roughly two-thirds of L1 customer-support interactions, equivalent to the work of ~700 full-time agents, with customer satisfaction scores matching human agents.

**The technical pattern (paraphrasing their public talks).**
- **Sonnet-class model** as primary; cheaper tier for trivial routing
- **Heavy use of prompt caching** for stable product/policy context — they did not disclose exact percentages but cited "transformative" unit economics impact
- **Streaming** for real-time agent UX
- **Tool use** for account lookups, refund processing, order status (Module 4)
- **Observability via internal stack** plus Anthropic's usage reporting
- **Tier 4+ rate limits** with reserved capacity through Anthropic Sales

**The reported business impact.** Klarna's earnings disclosure attributed ~$40M/year in operating efficiency to the AI agent. Their CEO Sebastian Siemiatkowski has repeatedly cited the AI assistant as a key margin lever.

**Lesson for the architect.**
- **Production scale changes the playbook.** At Klarna's volume, every architectural choice (tier, caching, batch vs sync, rate-limit headroom) compounds.
- **Reserved capacity matters.** Once you cannot afford a single 429, you're talking to Sales, not adjusting retries.
- **The "obvious" cost saves are real.** Caching + tier routing + streaming + Batch (for backfills) are the four levers; getting all four right is what makes the math work.

**Discussion (Socratic).**
- **Q1:** Klarna processes ~50 messages/sec at peak. Design a queuing / load-shedding strategy that respects Anthropic's TPM limits without dropping conversations.
- **Q2:** A regional spike of 3× normal load occurs. What automatic vs human-in-the-loop responses would your system take?
- **Q3:** A new prompt version goes out. Detect a regression on Day 1 — what telemetry must you have?

---

## ✅ Module 3 Summary

You now know:

- 🛣️ **The Messages API** — single endpoint, well-defined parameters, predictable response shape
- 🐍🟦 **Python and TypeScript SDKs** — install, init, streaming, async
- ⚡ **Streaming** — when to use, gotchas, TTFT improvement
- 🧊 **Prompt caching** — 90% cost cut, prefix-based, 5-min TTL, byte-exact match
- 📦 **Batch API** — 50% discount for async bulk workloads
- 🔢 **Token counting** — `messages.count_tokens` is the right way
- 🔁 **Retries + error taxonomy** — what's retryable, exponential backoff, `retry-after`
- 💸 **Rate limit tiers** — RPM, TPM, spend ceilings, tier-up paths
- 🌐 **Hosting options** — Anthropic direct, AWS Bedrock, GCP Vertex
- 🔬 **Observability** — what to log, where to send it

**Next steps:**
1. 🎥 Watch the curated videos: [Videos.md](./Videos.md)
2. ✏️ Take the quiz: [Quiz.md](./Quiz.md) — aim for 22/26
3. 📋 Review the [Cheat-Sheet.md](./Cheat-Sheet.md)
4. 🛠️ **Hands-on:** clone the [anthropic-cookbook](https://github.com/anthropics/anthropic-cookbook). Run the `streaming`, `prompt_caching`, and `batch` examples end-to-end on your own API key.
5. ➡️ Move on: [Module 4 — Tool Use & Function Calling](../Module-04-Tool-Use-Function-Calling/Reading.md)

> **Where this leads.**
> - Inside this course: [Module 4](../Module-04-Tool-Use-Function-Calling/Reading.md) extends the API with `tools`. [Module 8](../Module-08-Production-Patterns-Safety/Reading.md) goes deep on production observability.
> - Cross-course: Generative AI Engineer (course 30) covers eval frameworks; AWS AI Practitioner (course 07) covers Bedrock specifically.
> - Practice: Practice Exam 1 has ~6 questions from this module.

---

## 📚 Further Reading (Optional)

**Primary sources:**
- 📄 Anthropic. [*Messages API Reference*](https://docs.anthropic.com/claude/reference/messages_post). The authoritative source.
- 📄 Anthropic. [*Prompt Caching*](https://docs.anthropic.com/claude/docs/prompt-caching). Cache pricing and rules.
- 📄 Anthropic. [*Message Batches API*](https://docs.anthropic.com/claude/docs/batches). Bulk discount workflows.
- 📄 Anthropic. [*Rate Limits*](https://docs.anthropic.com/claude/docs/rate-limits). Tier system.
- 📄 Anthropic. [*SDKs*](https://docs.anthropic.com/claude/reference/client-sdks). Python and TS reference.
- 📄 Anthropic. [*Streaming Messages*](https://docs.anthropic.com/claude/reference/messages-streaming). SSE event spec.

**Practitioner:**
- 📖 [anthropic-cookbook](https://github.com/anthropics/anthropic-cookbook) — runnable recipes
- 📖 [Anthropic SDK Python source](https://github.com/anthropics/anthropic-sdk-python) — read the retry logic
- 📖 [Anthropic SDK TypeScript source](https://github.com/anthropics/anthropic-sdk-typescript) — same
- 📖 Klarna AI assistant — public earnings calls and CEO interviews
