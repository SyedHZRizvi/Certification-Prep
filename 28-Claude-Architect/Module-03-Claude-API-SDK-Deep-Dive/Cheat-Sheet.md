# 📋 Module 3 Cheat Sheet: Claude API & SDK Deep Dive

> One page. Tape it next to your terminal. Reference during every coding session.

---

## 🛣️ The Messages API at a Glance

```
POST https://api.anthropic.com/v1/messages

Headers:
  x-api-key: sk-ant-xxxxx
  anthropic-version: 2023-06-01           ← REQUIRED
  content-type: application/json
  anthropic-beta: prompt-caching-2024-07-31, ...  ← opt-ins

Body:
{
  "model":            "claude-sonnet-4-6-20260301",
  "max_tokens":       1024,
  "system":           "...",                 // or [{type:"text",...}]
  "messages":         [{role, content}, ...],
  "temperature":      0.0-1.0,
  "top_p":            0.0-1.0,
  "top_k":            int >= 0,
  "stop_sequences":   ["...", "..."],        // up to ~4
  "stream":           false,
  "metadata":         {"user_id": "..."},
  "tools":            [...]                  // Module 4
}
```

---

## 📥 Response Shape

```
{
  "id":         "msg_01...",
  "type":       "message",
  "role":       "assistant",
  "model":      "claude-sonnet-4-6-...",
  "content":    [{type:"text", text:"..."}, ...],
  "stop_reason":"end_turn|max_tokens|stop_sequence|tool_use",
  "stop_sequence": "..." | null,
  "usage": {
    "input_tokens":  N,
    "output_tokens": M,
    "cache_creation_input_tokens": K1,
    "cache_read_input_tokens":     K2
  }
}
```

---

## 🐍 Python SDK Quick Ref

```python
from anthropic import Anthropic, AsyncAnthropic, AnthropicBedrock, AnthropicVertex

client = Anthropic(api_key=..., max_retries=3, timeout=60.0)

# Basic
r = client.messages.create(model=..., max_tokens=..., system=..., messages=[...])

# Streaming
with client.messages.stream(...) as stream:
    for t in stream.text_stream:
        print(t, end="")
    final = stream.get_final_message()

# Count tokens
client.messages.count_tokens(model=..., messages=[...], system=...)

# Batch
batch = client.messages.batches.create(requests=[Request(custom_id=..., params={...}), ...])
client.messages.batches.retrieve(batch.id)
client.messages.batches.results(batch.id)
```

---

## 🟦 TypeScript SDK Quick Ref

```typescript
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({ apiKey: ..., maxRetries: 3, timeout: 60_000 });

// Basic
const r = await client.messages.create({ model, max_tokens, system, messages });

// Streaming (async iterator)
const stream = client.messages.stream({...});
for await (const event of stream) {
  if (event.type === "content_block_delta" && event.delta.type === "text_delta") {
    process.stdout.write(event.delta.text);
  }
}
const final = await stream.finalMessage();
```

---

## 🧊 Prompt Caching Recipe

```python
client.messages.create(
  model=...,
  system=[{
    "type": "text",
    "text": "[≥1024 stable tokens]",
    "cache_control": {"type": "ephemeral"}     # ← cache up to here
  }],
  messages=[{
    "role": "user",
    "content": [
      {"type":"text", "text":"[stable user context]", "cache_control":{"type":"ephemeral"}},
      {"type":"text", "text":"[per-call variable text]"}
    ]
  }]
)
```

Rules:
- Cache attaches to the **PREFIX** ending at `cache_control`
- Min cacheable size: ~**1024 tokens**
- TTL: **~5 min** ephemeral (renews on hit)
- Cached read: **~10%** of standard input price (**~90% off**)
- Cache write: **~25% MORE** than standard input (one-time)
- Byte-exact match required (a single whitespace change = miss)

---

## 📦 Batch API Recipe

```python
batch = client.messages.batches.create(requests=[
  Request(custom_id="doc-1", params={"model":..., "max_tokens":..., "messages":[...]}),
  # up to 10,000 requests per batch
])
# Poll: client.messages.batches.retrieve(batch.id)
# Stream results: client.messages.batches.results(batch.id)
```

- **50% off** input AND output
- Hours SLA (NOT real-time)
- Up to 10,000 requests per batch
- Combine with caching for compound savings

---

## 🔁 Error Taxonomy

| Status | Class | Retry? |
|--------|-------|--------|
| 400 | BadRequestError | ❌ |
| 401 | AuthenticationError | ❌ |
| 403 | PermissionDeniedError | ❌ |
| 404 | NotFoundError | ❌ |
| 413 | RequestTooLargeError | ❌ |
| 422 | UnprocessableEntityError | ❌ |
| 429 | RateLimitError | ✅ honor `retry-after` |
| 500 | InternalServerError | ✅ |
| 502/503 | APIConnectionError | ✅ |
| 504 | Timeout | ✅ |
| 529 | OverloadedError | ✅ back off MORE |

---

## 📊 Rate-Limit Headers (Always Log)

| Header | Use |
|--------|-----|
| `request-id` | Anthropic support trace |
| `anthropic-ratelimit-requests-limit/remaining/reset` | RPM budget |
| `anthropic-ratelimit-input-tokens-limit/remaining` | Input TPM |
| `anthropic-ratelimit-output-tokens-limit/remaining` | Output TPM |
| `retry-after` | On 429/529 — wait seconds |

---

## 💸 Pricing Reference (Sonnet 4.6, illustrative)

| Token type | Price ($/Mtok) |
|------------|----------------|
| Input (standard) | $3.00 |
| Input (cache write) | ~$3.75 |
| Input (cache read) | ~$0.30 |
| Output | $15.00 |
| Input via Batch | $1.50 |
| Output via Batch | $7.50 |

Multiply by ~0.33 for Haiku, ~5× for Opus.

---

## 🌐 Hosting Options

| Path | Client class | Best for |
|------|--------------|----------|
| Anthropic direct | `Anthropic(api_key=...)` | Startups, R&D, latest features |
| AWS Bedrock | `AnthropicBedrock(aws_region=...)` | AWS-native enterprises, data residency |
| GCP Vertex | `AnthropicVertex(project_id=..., region=...)` | GCP-native enterprises |

---

## 🔒 Secret Hygiene Rules

- Never commit `sk-ant-...`
- Use platform secret manager in prod
- One key per environment minimum
- Rotate periodically; revoke unused
- Tag `metadata.user_id` for abuse monitoring
- Never expose key to browser — proxy through your backend

---

## 🏆 Exam Power Phrases

✅ Often **right**:
- "Streaming reduces TTFT, not total tokens"
- "Cache attaches to the prefix"
- "Batch is 50% off; hours SLA; async only"
- "Cached input billed at ~10% of standard (~90% off)"
- "SDK retries by default; 2 attempts with backoff"
- "Use `count_tokens` to estimate cost without inference"

❌ Often **wrong**:
- "Cache reduces output cost" (input only)
- "Batch is for real-time" (async only)
- "Streaming reduces total tokens" (TTFT only)
- "Expose API key client-side" (NEVER)
- "Increase workers when getting 429" (creates thundering herd)
- "529 = your rate limit" (Anthropic's overall capacity)

---

## 🗓️ Key Facts To Memorize Cold

- One endpoint: `POST /v1/messages`
- Required header: `anthropic-version: 2023-06-01`
- Caching: **~90%** off cached input; **~5 min** TTL; ≥**1024** tokens min
- Batch: **50%** off; **hours** SLA; up to **10,000** per batch
- Default SDK retries: **2** with backoff
- Stop reasons: `end_turn | max_tokens | stop_sequence | tool_use`
- Retryable errors: **429, 500, 502, 503, 504, 529**
- Module 3 domain: **15% of the assessment**

---

## ✏️ Quick Self-Check

1. Three things you should log on every Anthropic call? ___
2. Two parameters to enable both streaming and prompt caching together? ___
3. When NOT to use Batch API? ___
4. Difference between 429 and 529? ___
5. The single fix for "API key in frontend code"? ___

If you answer all 5 in 60 seconds, you own this module. ✅

---

➡️ [Module 4: Tool Use & Function Calling](../Module-04-Tool-Use-Function-Calling/Reading.md)
