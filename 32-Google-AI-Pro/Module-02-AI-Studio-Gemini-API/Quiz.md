# ✏️ Module 2 Quiz: Google AI Studio & Gemini API

> **Instructions:** Answer all 25 questions WITHOUT looking at the reading.
> Aim for 21/25 minimum.

---

## Questions

### Q1. Google AI Studio is BEST described as: *(Remember)*
A. Google Cloud's enterprise AI platform with IAM and VPC-SC
B. A free, browser-based playground at aistudio.google.com for prototyping with Gemini
C. A paid replacement for Vertex AI
D. Google's open-weight model release

---

### Q2. The Python SDK package for the Gemini API (NOT Vertex AI) is: *(Remember)*
A. `vertexai`
B. `google-cloud-aiplatform`
C. `google-generativeai`
D. `tensorflow-hub`

---

### Q3. The Python SDK package for Vertex AI Gemini is: *(Remember)*
A. `google-cloud-aiplatform` (which exposes `vertexai.generative_models`)
B. `openai`
C. `google-generativeai`
D. `transformers`

---

### Q4. The Gemini API uses which auth method? *(Remember)*
A. API key
B. Application Default Credentials (ADC) only
C. SAML SSO
D. OAuth client credentials

---

### Q5. Vertex AI uses which auth method? *(Remember)*
A. API key
B. Application Default Credentials / IAM (NOT API keys)
C. AWS IAM
D. Basic auth

---

### Q6. To force Gemini output to conform to a JSON Schema, you set: *(Understand)*
A. Lower temperature only
B. `response_mime_type="application/json"` AND `response_schema=<schema>`
C. Add "OUTPUT JSON" to the user message
D. Wrap the answer in markdown fences

---

### Q7. The four `safety_settings` harm categories are: *(Remember)*
A. Harassment, Hate Speech, Sexually Explicit, Dangerous Content
B. Spam, Phishing, Malware, Crime
C. Bias, Toxicity, Privacy, Copyright
D. PII, PHI, PCI, PII-2

---

### Q8. The four `safety_settings` thresholds are (strict → permissive): *(Remember)*
A. STRICT, NORMAL, LOOSE, OFF
B. BLOCK_LOW_AND_ABOVE, BLOCK_MEDIUM_AND_ABOVE, BLOCK_ONLY_HIGH, BLOCK_NONE
C. 1, 2, 3, 4
D. RED, ORANGE, YELLOW, GREEN

---

### Q9. The MOST appropriate temperature for code-completion / classification tasks: *(Apply)*
A. 0.0 – 0.3 (deterministic / focused)
B. 0.6 – 0.7
C. 0.9 – 1.0
D. 1.5+

---

### Q10. To estimate token cost BEFORE running inference, you should: *(Apply)*
A. Call `model.count_tokens(prompt)` — free endpoint
B. Divide character count by 4 and trust it
C. Make a real call with `max_tokens=1`
D. There is no way to count tokens

---

### Q11. The Batch API on Vertex AI provides approximately what discount? *(Remember)*
A. 10%
B. ~50% on input AND output tokens
C. 90%
D. No discount

---

### Q12. Streaming a Gemini response primarily reduces: *(Understand)*
A. Total token count
B. Time-to-first-token (perceived latency)
C. Total cost
D. Number of cache misses

---

### Q13. Explicit context caching on Vertex AI reduces the cost of cached input tokens by approximately: *(Remember)*
A. 25%
B. 50%
C. ~75%
D. 99%

---

### Q14. A team's chatbot starts going off-script and discussing competitors. The SINGLE most impactful fix: *(Apply)*
A. Lower temperature to 0
B. Specific, rule-based `system_instruction` with explicit refusal cases
C. Switch to Gemini Nano
D. Disable safety_settings

---

### Q15. To FORCE Gemini to invoke Python code execution during reasoning, you set: *(Apply)*
A. `tools="code_execution"`
B. `code: true` in generation_config
C. Wrap the prompt in `<code>` tags
D. Not possible

---

### Q16. The `finish_reason` returned when Gemini's response is blocked by safety_settings: *(Remember)*
A. `STOP`
B. `MAX_TOKENS`
C. `SAFETY`
D. `END`

---

### Q17. A junior engineer hardcodes a Google API key into a React frontend committed to GitHub. The CORRECT fix: *(Apply)*
A. Base64-obfuscate the key
B. Move the Gemini call server-side; the frontend talks to YOUR backend, which holds the key
C. Use a "limited" key
D. Leave it; API keys are fine in frontend

---

### Q18. The HTTP status code typically indicating quota exhaustion / rate limit: *(Remember)*
A. 200
B. 401
C. 404
D. 429

---

### Q19. Which is RETRYABLE? *(Apply)*
A. 400 Bad Request
B. 401 Unauthorized
C. 403 Permission Denied
D. 429 Resource Exhausted (with exponential backoff)

---

### Q20. A team runs a nightly summary generation job on 5M articles. They are over budget. The BEST architectural change: *(Apply)*
A. Switch to Gemini Ultra
B. Switch to Batch API on Flash Lite (~50% off PAYG + cheaper tier)
C. Add 10x more workers
D. Switch to AWS

---

### Q21. The `usage_metadata` object on a Gemini response contains: *(Understand)*
A. Latency only
B. `prompt_token_count`, `candidates_token_count`, `total_token_count`
C. User ID
D. Cache hit ratio

---

### Q22. The KEY reason Snap migrated MyAI multi-modal features to Gemini on Vertex AI: *(Analyze)*
A. Lower cost only
B. Native multi-modal (image/audio in one call) + per-region residency + scale economics on Flash
C. Required by EU law
D. OpenAI deprecated GPT-4o

---

### Q23. To loosen safety blocking ONLY for the `DANGEROUS_CONTENT` category (medical workload), you should: *(Apply)*
A. Set `BLOCK_NONE` on all four categories
B. Loosen only that category to `BLOCK_ONLY_HIGH`; document and monitor
C. Disable safety_settings entirely
D. Switch to Gemini Nano

---

### Q24. Which of these statements is FALSE? *(Evaluate)*
A. Streaming reduces perceived latency but not total cost
B. Batch API is real-time inference at a lower price
C. `count_tokens()` is a free endpoint
D. Vertex AI uses IAM/ADC, not API keys

---

### Q25. Design challenge: You want to take a working AI Studio prototype to production for 200K users/day with EU residency, audit logging, and key management. The MINIMUM viable upgrade: *(Create)*
A. Keep AI Studio + API key
B. Migrate to Vertex AI in `europe-west1`; replace API key with ADC/service account; enable VPC-SC + CMEK; turn on Cloud Logging + Cloud Trace; enable context caching for stable prefixes; set explicit safety_settings; budget alerts
C. Self-host Gemini (not possible — closed weights)
D. Move to AWS Bedrock

---

## 🎯 Answers + Explanations

### Q1: **B. A free, browser-based playground for prototyping with Gemini**
AI Studio at aistudio.google.com is the prototyping surface; no GCP project required.

### Q2: **C. `google-generativeai`**
This is the Gemini API Python SDK. Different from Vertex AI's SDK.

### Q3: **A. `google-cloud-aiplatform`** (with `vertexai.generative_models` import)
The Vertex AI Python SDK exposes Gemini via the `vertexai` namespace.

### Q4: **A. API key**
Gemini API uses an API key generated in AI Studio. Easy to start, not enterprise-grade.

### Q5: **B. Application Default Credentials / IAM**
Vertex AI uses Google's enterprise auth pattern. No API keys.

### Q6: **B. `response_mime_type="application/json"` AND `response_schema=<schema>`**
Both fields together enforce strict JSON-Schema-conformant output. Lower temperature alone helps but doesn't guarantee.

### Q7: **A. Harassment, Hate Speech, Sexually Explicit, Dangerous Content**
These are the four canonical categories. Memorize verbatim.

### Q8: **B. BLOCK_LOW_AND_ABOVE → BLOCK_MEDIUM_AND_ABOVE → BLOCK_ONLY_HIGH → BLOCK_NONE**
Strict to permissive. `BLOCK_NONE` is gated and not available on all surfaces.

### Q9: **A. 0.0 – 0.3**
Low temperature for tasks where consistency matters (classification, code, extraction).

### Q10: **A. `model.count_tokens(prompt)`**
Free endpoint. Don't trust the char/4 approximation for billing decisions.

### Q11: **B. ~50% discount on input AND output tokens**
Batch is asynchronous (within ~24 hours typically) and halves the rate.

### Q12: **B. Time-to-first-token (perceived latency)**
Total cost and total tokens are unchanged. Streaming is a UX trick.

### Q13: **C. ~75%**
Vertex AI's explicit context caching gives roughly 75% off cached input on Gemini 2.5 Pro/Flash.

### Q14: **B. Specific, rule-based system_instruction**
The system prompt is the highest-authority lever Gemini exposes. Use it.

### Q15: **A. `tools="code_execution"`**
The built-in Python sandbox tool. Gemini writes Python, runs it, sees the result.

### Q16: **C. `SAFETY`**
The candidate's `finish_reason` indicates why generation stopped. SAFETY means blocked by safety_settings.

### Q17: **B. Move the call server-side**
API keys belong nowhere near a browser. The frontend talks to your backend; your backend holds the key.

### Q18: **D. 429**
Resource exhausted / rate limited. Retry with exponential backoff + jitter.

### Q19: **D. 429 (with exponential backoff)**
4xx (other than 429) are your fault — fix the request. 5xx and 429 are retryable transient errors.

### Q20: **B. Batch API on Flash Lite**
Async batch (~50% off) stacks with the cheaper Flash Lite tier for compound savings.

### Q21: **B. prompt_token_count, candidates_token_count, total_token_count**
The per-response token accounting. Use this to track cost in real time.

### Q22: **B. Native multi-modal + per-region residency + Flash economics at scale**
Snap's published rationale combines all three. The trap is "lower cost only" — the multi-modal native is the actual differentiator.

### Q23: **B. Loosen only that category to BLOCK_ONLY_HIGH**
Document and monitor. Never blanket-disable.

### Q24: **B. Batch API is real-time inference at a lower price — FALSE**
Batch is *async*, not real-time. The discount comes from the async SLA.

### Q25: **B. Vertex AI in EU + ADC + VPC-SC + CMEK + Logging/Trace + caching + safety + budget alerts**
The canonical Studio-to-Vertex-AI migration. Each component addresses a real concern: region for residency, ADC for auth, VPC-SC for perimeter, CMEK for key control, Cloud Logging for audit, caching for cost, safety_settings for policy, budget alerts for finops.

---

## 📊 Score Yourself

- 24–25/25 → 🏆 Module 2 mastered. Onward to Vertex AI deep dive.
- 21–23/25 → ✅ Solid. Note the gaps.
- 17–20/25 → ⚠️ Re-read SDK + auth + safety sections.
- <17/25 → 🔁 Restart Reading.md.

---

## 🃏 Add To Your Flashcards

- `google-generativeai` (Gemini API) vs `google-cloud-aiplatform` / `vertexai` (Vertex AI)
- API key auth (Gemini API) vs ADC/IAM (Vertex AI)
- `response_mime_type="application/json"` + `response_schema` = guaranteed JSON
- 4 harm categories: Harassment, Hate Speech, Sexually Explicit, Dangerous Content
- 4 thresholds: BLOCK_LOW_AND_ABOVE → BLOCK_MEDIUM_AND_ABOVE → BLOCK_ONLY_HIGH → BLOCK_NONE
- `count_tokens()` = free endpoint
- Batch API = ~50% discount, async (within 24h)
- Streaming = lower TTFT, same cost
- Explicit context caching = ~75% off
- 429 + 5xx retryable; 400/401/403 not

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 3 — Vertex AI Platform Deep Dive](../Module-03-Vertex-AI-Platform/Reading.md)
