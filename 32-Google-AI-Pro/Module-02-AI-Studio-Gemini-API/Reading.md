# Module 2: Google AI Studio & Gemini API 🛠️

> **Why this module matters:** Knowing what Gemini *is* is not enough. The exam will ask you, in scenario form, *how* to call it — which SDK, which endpoint, which auth pattern, which generation_config knobs, how to constrain output to a JSON schema, how to set safety_settings without breaking your assistant, how to count tokens before you spend them. This module turns Module 1's knowledge into running code.

> **Prerequisites for this module.** Module 1 finished. Python 3.10+ installed locally (or use a Colab / Vertex AI Workbench notebook). A free Google AI Studio account at `aistudio.google.com` (no credit card required for prototyping). For Vertex AI sections, a Google Cloud project with billing enabled — Google offers $300 free credit for new sign-ups.

---

## 📖 A Story: From "Pasta Recipe" to "Production Endpoint" in 90 Seconds

It is May 2024. A solo developer named Logan opens a browser tab to `aistudio.google.com`, types "Suggest a pasta sauce I can make from things I already have," and gets a Gemini-generated response in three seconds. He hits **"Get code"** in the corner of the AI Studio UI. The site emits a Python snippet:

```python
import google.generativeai as genai

genai.configure(api_key="GOOGLE_API_KEY")
model = genai.GenerativeModel("gemini-2.5-flash")
response = model.generate_content("Suggest a pasta sauce I can make from things I already have")
print(response.text)
```

Logan copies that into VS Code, pastes his API key, runs it. The same response, in his terminal. Total time from "I want to try Gemini" to "I have a working program calling it" — **under 90 seconds**, with no Google Cloud project, no IAM dance, no billing setup.

That 90-second on-ramp is the *entire point* of **Google AI Studio**. It is Google's bet that *prototyping should be free and frictionless*. Once Logan is ready to put that pasta-recommender into a real customer-facing product — with auth, with rate limits, with audit logging, with data-residency, with team management — the same code with a one-line change can target **Vertex AI** instead, where all those enterprise concerns are first-class.

This module deconstructs both surfaces. By the end you will be able to call Gemini from Python, Node, and raw `curl`; configure every meaningful generation parameter; reliably get JSON-schema-conformant output; configure safety_settings without surprises; count tokens before you spend them; use the Batch API to save money on async workloads; and know exactly when to switch from AI Studio to Vertex AI for a real product. You will know the difference between the `google-generativeai` SDK (Gemini API) and the `google-cloud-aiplatform` SDK (Vertex AI), and *when* each is right.

---

## 🛠️ Google AI Studio — The Free Prototyping Playground

**URL:** `aistudio.google.com`
**Cost:** Free for prototyping (rate-limited; ~60 requests/minute on the free tier as of 2026-05). Paid tier (Google AI for Developers / Gemini API paid) unlocks production rates.
**Auth:** API key (one click in the UI).
**Best for:** Demos, hobby projects, "can Gemini do X" experiments, generating sample code, learning.
**NOT for:** Production traffic against customer data, regulated workloads (no IAM, no VPC-SC, no CMEK, no signed BAA), workloads requiring residency or fine-grained access control.

### What AI Studio gives you

1. **The chat playground** — interactive, multi-turn, with system instructions, temperature, top-p, max output tokens, safety_settings, stop sequences all configurable in the side panel
2. **Multi-modal input** — drag-and-drop images, audio, video, PDFs straight into the prompt
3. **Function calling preview** — define a tool, see Gemini call it, inspect the JSON
4. **Structured output mode** — paste a JSON schema, Gemini conforms
5. **Code execution** — Gemini writes + runs Python inside the chat (sandbox)
6. **"Get code"** button — emits a working Python / Node / Go / cURL snippet for whatever you just did
7. **Prompt gallery** — Google-curated examples for common tasks
8. **System instructions field** — a separate, distinct text box for the system prompt (analogous to OpenAI's `system` role)
9. **Free Gemini API key generation** — one click, copy the key

### Anatomy of an AI Studio session

```
┌─────────────────────────────────────────────────────────────┐
│ Model: gemini-2.5-pro ▼     Temperature: 0.9               │
├─────────────────────────────────────────────────────────────┤
│ SYSTEM INSTRUCTIONS                                         │
│ "You are a helpful chef. Suggest recipes from a              │
│  pantry list. Cite measurements in metric only."             │
├─────────────────────────────────────────────────────────────┤
│ CHAT                                                        │
│ User: I have spaghetti, garlic, olive oil, parmesan.        │
│ Gemini: Aglio e olio — classic Roman. Boil 200g pasta…       │
│                                                             │
│ User: [drags photo of pantry] What else can I add?          │
│ Gemini: I see anchovies and red pepper flakes — perfect      │
│ for puttanesca tomorrow…                                     │
├─────────────────────────────────────────────────────────────┤
│ < / > Get code   ↓ Save prompt   ⚙ Advanced settings        │
└─────────────────────────────────────────────────────────────┘
```

---

## 🔑 API Keys & Authentication

### Gemini API (AI Studio surface)

```python
import google.generativeai as genai

genai.configure(api_key="AIza...your-key...")  # Get from aistudio.google.com
model = genai.GenerativeModel("gemini-2.5-flash")
print(model.generate_content("Hello, Gemini").text)
```

The Gemini API uses **API keys** — string secrets you generate in AI Studio. One-click creation; copy and use. Best practice: store in `GOOGLE_API_KEY` env var; never commit to git; rotate on team-member offboarding.

### Vertex AI surface (production)

```python
from google.cloud import aiplatform
from vertexai.generative_models import GenerativeModel
import vertexai

vertexai.init(project="my-gcp-project", location="us-central1")
model = GenerativeModel("gemini-2.5-flash")
print(model.generate_content("Hello, Gemini").text)
```

Vertex AI uses **Application Default Credentials (ADC)** — your normal Google Cloud auth (`gcloud auth application-default login` on dev; service account on prod). No API key. Auth is enforced by IAM, with the typical `roles/aiplatform.user` role granting access. This is the enterprise pattern.

🎯 **Exam pattern:** *"Which auth method does Vertex AI use?"* → **IAM via ADC, NOT API keys.** *"A junior engineer hardcodes a `sk-Goog-...`-shaped API key into a React frontend. Correct fix?"* → **Move the call server-side; the frontend talks to your backend, which holds the key.** (API keys belong nowhere near a browser.)

---

## 📞 The Three Ways to Call Gemini

### 1. Python SDK (`google-generativeai`)

```python
# pip install google-generativeai
import google.generativeai as genai
import os

genai.configure(api_key=os.environ["GOOGLE_API_KEY"])

model = genai.GenerativeModel(
    "gemini-2.5-flash",
    system_instruction="You are a senior Python engineer.",
    generation_config={
        "temperature": 0.7,
        "top_p": 0.95,
        "max_output_tokens": 1024,
        "response_mime_type": "text/plain",
    },
)

response = model.generate_content("Write a fibonacci function.")
print(response.text)
print(response.usage_metadata)   # prompt_token_count, candidates_token_count, total_token_count
```

### 2. Node SDK (`@google/generative-ai`)

```js
// npm install @google/generative-ai
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
  systemInstruction: "You are a senior Python engineer.",
  generationConfig: {
    temperature: 0.7,
    topP: 0.95,
    maxOutputTokens: 1024,
  },
});

const result = await model.generateContent("Write a fibonacci function.");
console.log(result.response.text());
```

### 3. REST (cURL — useful for any-language, server-side)

```bash
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GOOGLE_API_KEY}" \
  -H "Content-Type: application/json" \
  -d '{
    "contents": [{"parts":[{"text":"Write a fibonacci function."}]}],
    "systemInstruction": {"parts":[{"text":"You are a senior Python engineer."}]},
    "generationConfig": {
      "temperature": 0.7,
      "topP": 0.95,
      "maxOutputTokens": 1024
    }
  }'
```

🎯 **Exam pattern:** Know the SDK names. The Gemini API uses `google-generativeai` (Python) and `@google/generative-ai` (Node). Vertex AI uses `google-cloud-aiplatform` (Python) and `@google-cloud/vertexai` (Node). Mixing them up is a common trap.

---

## ⚙️ generation_config — Every Knob You Will Touch

| Knob | Default | What it does |
|------|---------|--------------|
| **temperature** | 1.0 (Gemini 2.5); 0.0 deterministic, 2.0 very creative | Sampling temperature. Lower = focused; higher = creative/random. |
| **top_p** | 0.95 | Nucleus sampling. Consider only tokens summing to `top_p` probability mass. |
| **top_k** | 40 (Pro), 64 (Flash) | Sample from top-k tokens only. Smaller = more focused. |
| **candidate_count** | 1 | Number of completion candidates per call. Higher = more variety, more cost. |
| **max_output_tokens** | model-default (1024 typical) | Cap on output length. Set deliberately; don't leave at default for short workloads. |
| **stop_sequences** | [] | Up to 5 strings; generation stops before any of them. Not included in output. |
| **response_mime_type** | "text/plain" | Set to `"application/json"` to force JSON output. |
| **response_schema** | none | Pass a JSON Schema; Gemini will conform to it (when `response_mime_type=application/json`). |
| **presence_penalty** | 0.0 | Penalize tokens already used; encourages variety. |
| **frequency_penalty** | 0.0 | Stronger penalty proportional to use frequency. |
| **seed** | random | Set for reproducible outputs (within the same model version). |
| **response_logprobs** | false | Return log-probabilities for output tokens (debugging). |

### Temperature in practice

| Use case | Temperature |
|----------|-------------|
| Code completion / fact extraction / classification | 0.0 – 0.3 |
| General assistant / agentic tool use | 0.5 – 0.7 |
| Creative writing / brainstorm | 0.8 – 1.0 |
| "Surprise me" / poetry / divergent thinking | 1.0 – 1.5 (rarely above) |

🎯 **Exam pattern:** *"A classification task is producing inconsistent labels."* → Lower temperature (toward 0). *"Code completion for a deterministic test."* → temperature=0 + seed. *"User asks Gemini to generate startup name ideas."* → temperature 0.9–1.2.

---

## 📜 System Instructions — The Single Most Powerful Prompt Lever

Gemini supports a **system_instruction** field separate from the chat history. Everything you put there has the highest training-time authority Gemini assigns to instructions. Practical conventions:

✅ Good system prompt:
```
You are a customer-support agent for Acme Cloud Storage.
Your job is to answer questions about Acme's products and policies.

Rules you MUST follow:
1. Only answer questions about Acme's published products.
2. If a question is outside that scope, politely redirect.
3. NEVER fabricate product features or prices. If unsure, say so.
4. Cite the specific Acme document for any factual claim.
5. Refuse to discuss competitors' products.

Format: clear, friendly, 3-5 sentences. Bullets for lists of >2 items.
```

❌ Bad system prompt (common beginner mistake):
```
Be helpful.
```

The exam tests this directly: *"A team's chatbot is going off-script and discussing competitors. The SINGLE most impactful fix?"* → A specific, rule-based system_instruction with explicit refusal cases. (Lower temperature or smaller model rarely is the right answer.)

---

## 📝 Structured Output (JSON-Schema-Conformant)

A killer Gemini feature: pass a JSON Schema and Gemini guarantees the output conforms. As of 2026, this is reliable on Flash and Pro.

```python
import google.generativeai as genai
import json

genai.configure(api_key=os.environ["GOOGLE_API_KEY"])

schema = {
    "type": "object",
    "properties": {
        "title": {"type": "string"},
        "category": {"type": "string", "enum": ["news", "blog", "ad", "research"]},
        "summary": {"type": "string"},
        "topics": {"type": "array", "items": {"type": "string"}},
        "sentiment": {"type": "string", "enum": ["positive", "neutral", "negative"]},
    },
    "required": ["title", "category", "summary", "sentiment"],
}

model = genai.GenerativeModel(
    "gemini-2.5-flash",
    generation_config={
        "response_mime_type": "application/json",
        "response_schema": schema,
        "temperature": 0.2,
    },
)

result = model.generate_content("Classify this article: …")
parsed = json.loads(result.text)
assert parsed["sentiment"] in ("positive", "neutral", "negative")
```

🎯 **Exam pattern:** *"MOST reliable way to get strict JSON conformant to a schema from Gemini?"* → **Set `response_mime_type=application/json` and pass a `response_schema`.** Trap answers: "Lower temperature" (helps but not strict), "Add 'output JSON' to user message" (unreliable), "Use markdown fences" (worse).

---

## 🛡️ safety_settings — Configure With Care

Gemini's safety system blocks four harm categories. Each can be set per call to one of four thresholds.

**Categories:**
- `HARM_CATEGORY_HARASSMENT`
- `HARM_CATEGORY_HATE_SPEECH`
- `HARM_CATEGORY_SEXUALLY_EXPLICIT`
- `HARM_CATEGORY_DANGEROUS_CONTENT`

**Thresholds (strict → permissive):**
- `BLOCK_LOW_AND_ABOVE` — block content rated low harm or higher (most strict; most blocks)
- `BLOCK_MEDIUM_AND_ABOVE` — default for many surfaces
- `BLOCK_ONLY_HIGH` — only block high-confidence harms
- `BLOCK_NONE` — return the content; no automatic blocking (only available on Vertex AI, gated; not all categories)

```python
safety_settings = [
    {"category": "HARM_CATEGORY_HARASSMENT", "threshold": "BLOCK_MEDIUM_AND_ABOVE"},
    {"category": "HARM_CATEGORY_HATE_SPEECH",  "threshold": "BLOCK_MEDIUM_AND_ABOVE"},
    {"category": "HARM_CATEGORY_SEXUALLY_EXPLICIT", "threshold": "BLOCK_MEDIUM_AND_ABOVE"},
    {"category": "HARM_CATEGORY_DANGEROUS_CONTENT", "threshold": "BLOCK_MEDIUM_AND_ABOVE"},
]

model = genai.GenerativeModel("gemini-2.5-flash", safety_settings=safety_settings)
```

Check **`response.candidates[0].finish_reason`** and **`response.candidates[0].safety_ratings`** on every call. Common `finish_reason` values:

| `finish_reason` | Meaning |
|------------------|---------|
| `STOP` | Normal completion |
| `MAX_TOKENS` | Hit `max_output_tokens` cap; output truncated |
| `SAFETY` | Blocked by safety_settings; no text returned |
| `RECITATION` | Blocked by recitation checker (training-data verbatim recitation detected) |
| `OTHER` | Other reason (rare) |

🎯 **Exam pattern:** *"A safety_settings configuration repeatedly blocks legitimate medical-content queries."* → Loosen to `BLOCK_ONLY_HIGH` for `HARM_CATEGORY_DANGEROUS_CONTENT` and `HARM_CATEGORY_SEXUALLY_EXPLICIT` for the medical workload, while keeping `BLOCK_MEDIUM_AND_ABOVE` on others. Document the rationale; alert on the change.

🚨 **Trap:** Setting `BLOCK_NONE` everywhere is the wrong answer 95% of the time. Loosen only the category you have a documented business need to loosen.

---

## 🔢 Counting Tokens (Don't Spend Blind)

```python
model = genai.GenerativeModel("gemini-2.5-flash")
prompt = "Some long document..."
count = model.count_tokens(prompt)
print(count.total_tokens)  # e.g. 1842

# After generation:
response = model.generate_content(prompt)
print(response.usage_metadata.prompt_token_count)       # 1842
print(response.usage_metadata.candidates_token_count)   # 256
print(response.usage_metadata.total_token_count)        # 2098
```

`count_tokens()` is a **separate, free** endpoint. Use it to size context before submitting, especially if approaching the 1M/2M limits.

🎯 **Exam pattern:** *"To estimate cost before submitting a 200K-token prompt, you should:"* → **Call `count_tokens()` first.** Trap: "Divide character count by 4" (approximation, not exact; never trust for billing predictions).

---

## 📦 Batch API — Half-Price for Async Workloads

Vertex AI's **Batch Prediction** lets you submit prompts asynchronously for a **~50% discount** on input and output tokens. Best for:

- Backfill / catch-up workloads
- Nightly summary generation
- Offline analytics
- Anything that can wait minutes to hours

```python
from vertexai.preview.batch_prediction import BatchPredictionJob

job = BatchPredictionJob.submit(
    source_model="gemini-2.5-flash",
    input_dataset="gs://mybucket/inputs.jsonl",   # one prompt per line
    output_uri_prefix="gs://mybucket/outputs/",
)
job.refresh()   # poll for status
```

**SLA:** Within 24 hours typically. Often much faster.

🎯 **Exam pattern:** *"A team summarizes 5M articles nightly and is over budget."* → **Switch to Batch API; save ~50%.** Trap: "Switch to Flash Lite" (helps but Batch + Flash Lite stacks even better).

---

## 🛠️ Code Execution — Built-In Python Sandbox

Gemini can execute Python natively as a tool. Pass `tools=["code_execution"]` and the model emits Python code, runs it in Google's sandbox, sees the result, and continues reasoning.

```python
model = genai.GenerativeModel(
    "gemini-2.5-pro",
    tools="code_execution",
)
r = model.generate_content("What's the 100th Fibonacci number? Show your work.")
print(r.text)
# Gemini writes Python, executes it, captures the result, and explains.
```

**Use when:** Math, exact computation, data manipulation, plotting (returns matplotlib output as image), any case where "the model just writes wrong arithmetic" is unacceptable.

**Don't use when:** You can pre-compute; you don't want sandbox-time latency (~2-5s per execution); your system prompt forbids code generation.

---

## 🔄 Streaming — Better Perceived Latency

```python
response_stream = model.generate_content("Write a long article.", stream=True)
for chunk in response_stream:
    print(chunk.text, end="", flush=True)
```

Streaming reduces **time-to-first-token (TTFT)** dramatically. Total tokens, total cost, total wall-clock — all unchanged. Use whenever the user is watching a UI render.

🎯 **Exam pattern:** *"User complains the chatbot 'feels slow' even though latency is 1.5s."* → Stream the response; TTFT drops to ~250ms even though total time is unchanged. Perceived latency is the metric users feel.

---

## 🔁 Multi-Turn Chat

```python
chat = model.start_chat(history=[])
print(chat.send_message("Hi!").text)
print(chat.send_message("What did I just say?").text)
# History is automatically maintained; the model sees prior turns.
```

Under the hood, multi-turn chat is just sending the full conversation history on each call. You pay tokens for the *whole* history on every turn — which is why context caching matters.

---

## 💾 Context Caching (Vertex AI Explicit Cache)

Gemini supports **explicit context caching** on Vertex AI for prefixes >32K tokens that you intend to reuse. The cache lives for a TTL you set (typically minutes to an hour).

```python
from vertexai.preview import caching

cached_content = caching.CachedContent.create(
    model_name="gemini-2.5-flash",
    contents=[long_document_part1, long_document_part2],   # >32K tokens
    ttl=3600,                                              # seconds
)

model = GenerativeModel.from_cached_content(cached_content=cached_content)
result = model.generate_content("Question about the document...")
# Cached portion billed at ~25% of standard input rate (~75% discount).
```

Use when:
- A 100K-token product catalog reused across thousands of queries
- A long system prompt + tool definitions stable across users
- A multi-megabyte PDF analyzed in dozens of question-answer sessions

🎯 **Exam pattern:** *"Cache hit rate drops from 90% to 10% overnight."* → The cached prefix was edited (even whitespace). Restore byte-identical prefix.

---

## 🚦 Error Handling & Retries

| Status | Meaning | Action |
|--------|---------|--------|
| 200 | Success | Continue |
| 400 | Bad request (malformed) | **Do not retry; fix the request** |
| 401 | Auth (bad API key or no auth) | **Do not retry; fix auth** |
| 403 | Permission denied (IAM, quota project) | **Do not retry; fix permissions** |
| 404 | Model not found / wrong region | Fix model name or location |
| 429 | Quota exceeded / rate limit | **Retry with exponential backoff + jitter** |
| 500 | Server error | Retry once or twice |
| 503 | Service unavailable | Retry with backoff |
| 504 | Gateway timeout | Retry; consider smaller request |

Idiomatic retry loop:

```python
import time, random
from google.api_core import exceptions as gex

def call_with_retry(model, prompt, max_attempts=5):
    for attempt in range(max_attempts):
        try:
            return model.generate_content(prompt)
        except (gex.ResourceExhausted, gex.ServiceUnavailable, gex.DeadlineExceeded) as e:
            if attempt == max_attempts - 1:
                raise
            sleep = min(2 ** attempt + random.random(), 30)
            time.sleep(sleep)
```

🎯 **Exam pattern:** *"A team gets sporadic 429s under load. Best response?"* → **Exponential backoff with jitter; consider Provisioned Throughput; rebalance request distribution; quota increase if needed.** Trap: "Add more workers" (makes it worse).

---

## 🏗️ Reference Architecture: From AI Studio Prototype to Vertex Production

```
Phase 1 (Prototype): AI Studio playground → "Get code" → local Python
  - Iterate on system_instruction, generation_config, schema
  - Run evals manually
  - Cost: free (within free tier)

Phase 2 (Internal beta): Gemini API + paid tier
  - Same SDK, key from AI Studio with billing enabled
  - 1K-10K req/day, internal users only
  - Cost: PAYG; budget alert at $X/day

Phase 3 (Production): Vertex AI
  - Switch import to vertexai SDK; one-line diff in code
  - GCP project + IAM + VPC-SC + CMEK + region pinned
  - Cloud Logging + Cloud Trace + Model Monitoring
  - Context caching for stable prefixes
  - Provisioned Throughput if >5K req/min steady
```

This staged path is *the* canonical Google-recommended pattern. AI Studio gets you from idea to working code fast; Vertex AI gets you from working code to enterprise production.

---

## ⚠️ Exam Traps & Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "AI Studio and Vertex AI use the same Python SDK." | **No.** Gemini API uses `google-generativeai`. Vertex AI uses `google-cloud-aiplatform` / `vertexai`. Different imports; same model. |
| "API keys work in Vertex AI." | **No.** Vertex AI uses ADC (IAM). API keys are AI Studio / Gemini API only. |
| "Lower temperature guarantees JSON-conformant output." | **No.** Lower temperature *helps* but doesn't guarantee. Use `response_mime_type=application/json` + `response_schema`. |
| "Setting `BLOCK_NONE` on safety is fine for any workload." | **No.** Only loosen the category you have a documented need to loosen. Document and alert. |
| "Streaming reduces total cost." | **No.** Streaming only reduces *perceived* latency (TTFT). Total tokens, total cost unchanged. |
| "Batch API is real-time but cheaper." | **No.** Batch is *async* (within 24 hours) and ~50% cheaper. Not for real-time. |
| "Context caching is automatic." | **No (on Vertex).** It's *explicit* — you create a `CachedContent` object with a TTL. Some implicit caching exists; the cost saving is on explicit cache. |
| "You should retry 400 errors." | **No.** 400 is your request's fault. Fix it. Only retry transient errors (429, 500, 503, 504). |
| "Token counting requires a generation call." | **No.** `model.count_tokens()` is a separate, free endpoint. |
| "All Gemini features land on AI Studio first." | **Mixed.** Many do; some enterprise-only features (CMEK, Provisioned Throughput, Vertex AI Agent Builder, signed BAA) are Vertex-only. |

---

## 🎓 Key Terms To Know

| Term | Definition |
|------|------------|
| **Google AI Studio** | Free, browser-based playground for Gemini at aistudio.google.com |
| **Gemini API** | The non-Vertex inference surface; auth via API key |
| **Vertex AI** | Google Cloud's enterprise platform; auth via IAM/ADC |
| **`google-generativeai`** | Python SDK for the Gemini API |
| **`google-cloud-aiplatform`** | Python SDK for Vertex AI (incl. Vertex's Gemini wrapper `vertexai`) |
| **`@google/generative-ai`** | Node SDK for the Gemini API |
| **API key** | Bearer-style secret for AI Studio / Gemini API access |
| **Application Default Credentials (ADC)** | Google Cloud's standard auth mechanism (used by Vertex AI) |
| **`generate_content()`** | Core inference method on the SDK |
| **`system_instruction`** | Separate field for system prompt content |
| **`generation_config`** | Object holding temperature, top_p, max_output_tokens, etc. |
| **`response_mime_type`** | Set to `"application/json"` to force JSON output |
| **`response_schema`** | JSON Schema for guaranteed-conformant structured output |
| **`safety_settings`** | Per-call configuration of harm thresholds (4 categories, 4 thresholds) |
| **`count_tokens()`** | Free endpoint to count tokens before paying for inference |
| **Code execution tool** | Built-in Python sandbox tool for math / computation |
| **Streaming** | Token-by-token response delivery for low TTFT |
| **Batch API** | Async inference at ~50% discount |
| **Explicit context caching** | Cache long stable prefixes (>32K tokens) for ~75% off |
| **`finish_reason`** | Field on response candidate (STOP, MAX_TOKENS, SAFETY, RECITATION, OTHER) |
| **`usage_metadata`** | Per-response token counts (prompt, candidates, total) |

### Acronyms cheat-row (Module 2)

| Acronym | Meaning |
|---------|---------|
| API | Application Programming Interface |
| SDK | Software Development Kit |
| ADC | Application Default Credentials |
| REST | REpresentational State Transfer |
| JSON | JavaScript Object Notation |
| TTFT | Time-To-First-Token |
| PAYG | Pay-As-You-Go |
| TTL | Time-To-Live |
| IAM | Identity and Access Management |
| VPC-SC | VPC Service Controls |
| CMEK | Customer-Managed Encryption Keys |
| BAA | Business Associate Agreement |
| GCP | Google Cloud Platform |
| SLA | Service Level Agreement |

---

## 📊 Case Study — Snap MyAI and the Free-Tier-to-Production Path

**Situation.** Snap Inc. (Snapchat) launched **MyAI** in 2023 as a built-in AI chatbot for its ~750M monthly active users. Originally built on OpenAI's GPT, in 2024 Snap announced (Google Cloud blog + Snap Q3 2024 earnings) that MyAI's multi-modal features (image understanding, recipe generation from a photo of ingredients, AR-lens prompts) would run on Gemini on Vertex AI.

**The decision.**
- **Multi-modal native.** Snap's user base sends ~5 billion image/video snaps per day. Adding "describe this photo" or "what can I cook with what's in this fridge pic" requires *native* multi-modal — the bolted-on-vision pattern was too slow and lossy.
- **Scale economics.** At Snap's scale (hundreds of millions of MyAI interactions per week), Gemini Flash's pricing beats GPT-4o-mini and Claude Haiku at similar quality on the routing layer.
- **Regional residency.** EU users → EU region. APAC users → Tokyo/Sydney. Vertex AI's per-region deployment supports the privacy story Snap promises EU regulators.

**The migration path Snap publicly described:**
1. Prototyped multi-modal experiences in AI Studio (free tier).
2. Validated with internal users via Gemini API (paid tier).
3. Production rollout via Vertex AI with `europe-west1`, `us-central1`, and `asia-northeast1` deployments; CMEK + VPC-SC enforced.
4. Monitoring via Cloud Logging + Cloud Trace; Vertex AI Model Monitoring for drift; custom dashboards for content-safety category triggers.

**Why this case is a Module-2 lesson:** The Studio → Gemini API → Vertex AI path Snap walked is *the* canonical path for any team. Each phase has its own tradeoffs (cost, controls, latency), and the SDK choice mirrors the phase. The exam tests whether you can articulate which phase a workload belongs in.

**Discussion (Socratic).**
- **Q1:** Snap claims they kept the same prompts across the migration but changed SDK. What is the *minimum* code change to go from `google-generativeai` (Studio) to `vertexai` (production), and what enterprise concerns does that one-line change unlock?
- **Q2:** Snap's content-safety bar is higher than the Gemini defaults (children's content). Would they set `safety_settings` to `BLOCK_LOW_AND_ABOVE` across all four categories, or take a different approach? Justify.
- **Q3:** If MyAI suddenly sees 10× growth in the EU, what Vertex AI features should Snap activate, and in what order?

---

## ✅ Module 2 Summary

You now know:
- 🛠️ **Google AI Studio** as a free prototyping surface and *how it differs* from Vertex AI
- 🔑 **Two auth surfaces** — API keys (AI Studio / Gemini API) vs ADC/IAM (Vertex AI)
- 📞 **Three call interfaces** — Python `google-generativeai`, Node `@google/generative-ai`, REST cURL
- ⚙️ **generation_config** — every knob you'll touch (temperature, top_p, max_output_tokens, stop_sequences, response_mime_type, response_schema)
- 📜 **System instructions** as the single most powerful prompt lever
- 📝 **Structured output** with `response_schema` for guaranteed JSON-conformant output
- 🛡️ **safety_settings** — four categories, four thresholds, when to loosen vs not
- 🔢 **Token counting** with the free `count_tokens()` endpoint
- 📦 **Batch API** at ~50% discount for async workloads
- 🛠️ **Code execution** built-in Python sandbox
- 🔄 **Streaming** for low TTFT (perceived latency)
- 💾 **Explicit context caching** for ~75% off cached input
- 🚦 **Retryability matrix** — which status codes to retry and which to fix

**Next steps:**
1. 🎥 Watch the curated videos: [Videos.md](./Videos.md)
2. ✏️ Take the quiz: [Quiz.md](./Quiz.md)
3. 📋 Review the [Cheat-Sheet.md](./Cheat-Sheet.md)
4. ➡️ Move on: [Module 3 — Vertex AI Platform Deep Dive](../Module-03-Vertex-AI-Platform/Reading.md)

---

## 📚 Further Reading

**Primary:**
- 📖 [Gemini API Quickstart](https://ai.google.dev/gemini-api/docs/quickstart)
- 📖 [Vertex AI Gemini API reference](https://cloud.google.com/vertex-ai/generative-ai/docs/model-reference/gemini)
- 📖 [Prompt engineering strategies](https://ai.google.dev/gemini-api/docs/prompting-strategies)
- 📖 [safety_settings reference](https://ai.google.dev/gemini-api/docs/safety-settings)
- 📖 [Structured output guide](https://ai.google.dev/gemini-api/docs/structured-output)
- 📖 [Batch prediction docs](https://cloud.google.com/vertex-ai/generative-ai/docs/multimodal/batch-prediction-api)
- 📖 [Context caching guide](https://cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-overview)

**Cookbook & examples:**
- 📘 [Gemini Cookbook](https://github.com/google-gemini/cookbook)
- 📘 [Google Cloud GenAI samples](https://github.com/GoogleCloudPlatform/generative-ai)
