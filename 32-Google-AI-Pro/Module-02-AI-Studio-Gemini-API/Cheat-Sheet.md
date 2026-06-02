# 📋 Module 2 Cheat Sheet: AI Studio & Gemini API

> One page. Print it. Tape it to your monitor.

---

## 🛠️ Two Surfaces, Two SDKs, Two Auth Methods

| | **Google AI Studio / Gemini API** | **Vertex AI** |
|---|-----------------------------------|----------------|
| URL | `aistudio.google.com` | Google Cloud Console |
| Python SDK | `google-generativeai` | `google-cloud-aiplatform` (`vertexai.*`) |
| Node SDK | `@google/generative-ai` | `@google-cloud/vertexai` |
| Auth | **API key** | **ADC / IAM** (service account, gcloud) |
| Cost | Free tier + paid Gemini API | PAYG, Provisioned Throughput |
| Best for | Prototyping, hobby, learning | Production, regulated, enterprise |
| IAM / VPC-SC / CMEK | ❌ | ✅ |
| Signed BAA (HIPAA) | ❌ | ✅ |

---

## 📞 Three Ways to Call Gemini

```python
# Python (Gemini API)
import google.generativeai as genai
genai.configure(api_key=os.environ["GOOGLE_API_KEY"])
model = genai.GenerativeModel("gemini-2.5-flash")
print(model.generate_content("hi").text)

# Python (Vertex AI)
from vertexai.generative_models import GenerativeModel
import vertexai
vertexai.init(project="myproj", location="us-central1")
model = GenerativeModel("gemini-2.5-flash")
print(model.generate_content("hi").text)
```

```bash
# cURL
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=$KEY" \
 -H 'Content-Type: application/json' -d '{"contents":[{"parts":[{"text":"hi"}]}]}'
```

---

## ⚙️ generation_config Knobs

| Knob | Default | Use |
|------|---------|-----|
| `temperature` | 1.0 | 0.0–0.3 deterministic; 0.5–0.7 chat; 0.8–1.0 creative |
| `top_p` | 0.95 | Nucleus sampling |
| `top_k` | 40 | Top-k sampling |
| `max_output_tokens` | varies | **Always set deliberately** |
| `stop_sequences` | [] | Up to 5; not included in output |
| `response_mime_type` | "text/plain" | `"application/json"` for JSON mode |
| `response_schema` | — | JSON Schema for guaranteed conformant output |
| `seed` | random | For reproducibility |

---

## 📝 JSON Schema Mode (Killer Feature)

```python
schema = {"type":"object","properties":{
  "sentiment":{"type":"string","enum":["positive","neutral","negative"]}
},"required":["sentiment"]}

model = genai.GenerativeModel("gemini-2.5-flash",
  generation_config={
    "response_mime_type":"application/json",
    "response_schema": schema,
    "temperature": 0.2,
  })
```

🚨 *MUST set BOTH `response_mime_type` AND `response_schema`.*

---

## 🛡️ safety_settings Matrix

**Categories (4):**
- `HARM_CATEGORY_HARASSMENT`
- `HARM_CATEGORY_HATE_SPEECH`
- `HARM_CATEGORY_SEXUALLY_EXPLICIT`
- `HARM_CATEGORY_DANGEROUS_CONTENT`

**Thresholds (4):**
| Threshold | Effect |
|-----------|--------|
| `BLOCK_LOW_AND_ABOVE` | Most strict |
| `BLOCK_MEDIUM_AND_ABOVE` | Default |
| `BLOCK_ONLY_HIGH` | Permissive |
| `BLOCK_NONE` | Gated (Vertex AI only; not all categories) |

🚨 *Loosen only the category you have a documented need to loosen. Document. Alert.*

---

## 🚦 finish_reason Decoder

| Value | Meaning |
|-------|---------|
| `STOP` | Normal completion |
| `MAX_TOKENS` | Output truncated at max_output_tokens |
| `SAFETY` | Blocked by safety_settings |
| `RECITATION` | Blocked — training-data verbatim |
| `OTHER` | Other (rare) |

Always check `finish_reason` AND `safety_ratings` AND `usage_metadata`.

---

## 💰 Cost-Saving Stack

| Lever | Savings | Tradeoff |
|-------|---------|----------|
| **Streaming** | 0% (UX only) | None |
| **Smaller tier** (Flash Lite, Flash) | 5–50× | Quality on hard tasks |
| **Context caching** (explicit) | ~75% on cached prefix | Cache TTL management |
| **Batch API** | ~50% on input + output | Async (~24h SLA) |
| **Provisioned Throughput** | 2–4× at scale | Fixed monthly commitment |

**Stack them:** Batch + Flash + cached prefix → 10× cheaper than baseline Pro.

---

## 🔢 Token Counting (Free)

```python
n = model.count_tokens(prompt).total_tokens   # FREE endpoint
# After call:
r.usage_metadata.prompt_token_count
r.usage_metadata.candidates_token_count
r.usage_metadata.total_token_count
```

---

## 🚨 Retryability Matrix

| Status | Retry? |
|--------|--------|
| 400 Bad Request | ❌ Fix the request |
| 401 Unauthorized | ❌ Fix auth |
| 403 Permission Denied | ❌ Fix IAM |
| 404 Not Found | ❌ Fix model name / region |
| **429 Rate Limit** | ✅ Exponential backoff + jitter |
| **500 / 503 / 504** | ✅ Retry transient |

---

## 🎯 Power Phrases

✅ Often **right**:

- "Gemini API uses API keys; Vertex AI uses ADC/IAM"
- "`response_mime_type`=application/json + `response_schema`"
- "`count_tokens()` is a free endpoint"
- "Streaming reduces TTFT, not total cost"
- "Batch API is ~50% off for async workloads"
- "Context caching is ~75% off on cached prefixes >32K tokens"
- "Loosen only the safety category with a documented need; never blanket-disable"

❌ Often **wrong**:

- "Lower temperature guarantees JSON" (it helps; doesn't guarantee)
- "Streaming saves money" (it doesn't)
- "Batch API is real-time" (it's async)
- "API keys are safe in a frontend" (they're not — server-side only)
- "Retry 400 errors" (don't — fix the request)
- "`BLOCK_NONE` is fine for any workload" (rarely the right answer)

---

## 🗺️ Staged Migration Path

```
AI Studio playground → "Get code" → local Python (Gemini API key)
   ↓
Gemini API paid tier (1K–10K req/day, internal users)
   ↓
Vertex AI (production: IAM, VPC-SC, CMEK, region, audit, monitoring)
```

---

## ✏️ Quick Self-Check

1. Two SDK package names? ___
2. Two auth methods? ___
3. Force JSON schema — what two fields? ___
4. 4 safety categories? ___
5. Which status codes retry? ___

If all 5 in under 90s, you own this module. ✅

---

➡️ [Module 3: Vertex AI Platform Deep Dive](../Module-03-Vertex-AI-Platform/Reading.md)
