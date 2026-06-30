# 🧪 Practice Exam 1, Google AI Pro (Modules 1–5 focus)

> **Conditions:** Set a 45-minute timer. 30 questions. Treat it like the real assessment.
> **Pass mark:** 24/30 (~80%), Generative AI Leader uses scaled scoring; this practice mark is rigorous.
> Take this AFTER finishing Modules 1–5. Covers Google AI Landscape, AI Studio + Gemini API, Vertex AI Platform, Multi-modal Gemini, and RAG on Google Cloud.

---

## 📝 Questions

### 1. The 2017 paper that introduced the Transformer architecture was authored by:
A. Vaswani et al. at Google Brain
B. Researchers at OpenAI
C. Anthropic founders
D. Meta AI Research

### 2. Google Brain and DeepMind merged in:
A. December 2022
B. They have never merged
C. May 2024
D. April 2023 (into Google DeepMind, with Demis Hassabis as CEO)

### 3. The five tiers of the Gemini family (smallest to largest):
A. Nano / Flash Lite / Flash / Pro / Ultra
B. Mini / Standard / Pro / Max / Ultra
C. Bronze / Silver / Gold / Platinum / Diamond
D. Small / Medium / Heavy / Heavyweight / Frontier

### 4. The MAXIMUM context window on Gemini 2.5 Pro is:
A. 32K tokens
B. 200K tokens
C. 1M tokens
D. 2M tokens

### 5. Gemini's vision is BEST described as:
A. CLIP-adapter bolted onto a text model
B. Outsourced to Anthropic
C. Natively multi-modal, trained on text + image + audio + video jointly from scratch
D. Not available

### 6. The Google AI Principles (2018) document includes:
A. Seven principles + four red lines
B. Three commandments
C. None, Google has no AI principles
D. Twelve rules

### 7. For high-volume intent classification on millions of messages/day, the BEST default Gemini tier:
A. Gemini 2.5 Flash
B. Gemini Nano
C. Gemini 2.5 Pro
D. Gemini 2.5 Ultra

### 8. Google AI Studio vs Vertex AI, the KEY difference:
A. Same product, different branding
B. AI Studio runs only on Android
C. Vertex is free; AI Studio paid
D. AI Studio = consumer-grade playground (API keys, hobby); Vertex AI = enterprise platform (IAM, VPC-SC, billing, residency)

### 9. The Python SDK for the Gemini API (NOT Vertex AI) is:
A. `vertexai.generative_models`
B. `openai`
C. `google-generativeai`
D. `tensorflow-hub`

### 10. The Python SDK module path for Gemini on Vertex AI:
A. `vertexai.generative_models` (in `google-cloud-aiplatform`)
B. `google-generativeai`
C. `openai`
D. `transformers`

### 11. To force Gemini output to conform to a JSON Schema, you set:
A. `response_mime_type="application/json"` AND `response_schema=<schema>`
B. Lower temperature only
C. "OUTPUT JSON" in user message
D. Markdown fences

### 12. The four `safety_settings` harm categories are:
A. Spam, Phishing, Malware, Crime
B. Bias, Toxicity, Privacy, Copyright
C. PII, PHI, PCI, IP
D. Harassment, Hate Speech, Sexually Explicit, Dangerous Content

### 13. To estimate token cost before paying for inference:
A. Call `model.count_tokens(prompt)`, free endpoint
B. Divide character count by 4 and trust
C. Make a `max_tokens=1` call
D. Not possible

### 14. The Batch API on Vertex AI provides approximately:
A. 10% discount
B. ~50% discount on input AND output, async (~24h SLA)
C. 90% discount, real-time
D. No discount

### 15. Vertex AI's explicit context caching reduces cost of cached input tokens by approximately:
A. 25%
B. 50%
C. ~75%
D. 99%

### 16. Vertex AI is BEST described as:
A. A single API
B. Google Cloud's enterprise ML/AI umbrella over ~25 sub-products
C. The consumer-grade Gemini playground
D. An open-source framework

### 17. Vertex AI Model Garden hosts:
A. Gemini + Claude + Llama + Mistral + Cohere + AI21 + Gemma + …
B. Only Google's Gemini models
C. Only third-party models
D. Only open-weight models

### 18. The MOST appropriate sub-product for "I have 100K PDFs and want managed RAG fast":
A. Vertex AI Vector Search
B. BigQuery ML only
C. Vertex AI Search (formerly Discovery Engine)
D. Cloud Functions

### 19. The MOST appropriate sub-product for "I have 30M custom CLIP-style image embeddings":
A. Vertex AI Search
B. AlloyDB
C. Cloud SQL
D. Vertex AI Vector Search (formerly Matching Engine)

### 20. The reserved-capacity pricing tier for Gemini on Vertex AI is called:
A. Reserved Instances
B. Provisioned Throughput (measured in GSCUs)
C. Spot Pricing
D. Free Tier

### 21. Provisioned Throughput is MOST appropriate when:
A. Unpredictable low-volume requests
B. Steady-state high-volume (>5K RPM) with capacity guarantees
C. Prototyping
D. Using Claude

### 22. VPC Service Controls primarily protects against:
A. Encryption at rest
B. CPU starvation
C. Data exfiltration outside a configured perimeter
D. Cost overruns

### 23. CMEK on Vertex AI provides:
A. Free encryption
B. Self-hosting
C. Per-request encryption only
D. Customer-Managed Encryption Keys, you can rotate / revoke

### 24. For a German bank requiring data residency in Germany, the appropriate Vertex AI region:
A. `us-central1`
B. `europe-west3` (Frankfurt)
C. `europe-west1` (Belgium, EU but not German)
D. `asia-northeast1`

### 25. Gemini's default video sampling rate is:
A. 30 fps
B. 24 fps
C. 1 fps + audio track
D. 0 fps

### 26. A 5-minute video at default fps + audio bills approximately how many tokens:
A. ~500
B. ~5,000
C. ~87,000
D. ~10M

### 27. For files >20MB used across multiple Gemini calls, the BEST pattern is:
A. Inline base64 in every prompt
B. Files API, upload once, reference URI on subsequent calls
C. Don't use multi-modal
D. Email to Google

### 28. The MOST appropriate Google embedding model for Spanish + Portuguese e-commerce:
A. text-embedding-004 (English-focused)
B. Llama embedding
C. multilingual-embedding-002 (100+ languages)
D. OpenAI text-embedding-3

### 29. The TWO native grounding modes on Gemini in Vertex AI:
A. None
B. SQL only
C. Same product
D. Public web (Google Search) and private corpus (Vertex AI Search)

### 30. Claude on Google Cloud is available via:
A. Not available
B. Vertex AI Model Garden alongside Gemini
C. Only AWS Bedrock
D. Only direct Anthropic API

---

## 🎯 Answer Key (No Cheating!)

```
1.  A    11. A    21. B
2.  D    12. D    22. C
3.  A    13. A    23. D
4.  C    14. B    24. B
5.  C    15. C    25. C
6.  A    16. B    26. C
7.  A    17. A    27. B
8.  D    18. C    28. C
9.  C    19. D    29. D
10. A    20. B    30. B
```

---

## 📊 Score Yourself

- **27–30 correct** → 🏆 Ready for Practice Exam 2
- **24–26** → ✅ Solid; review missed modules
- **20–23** → ⚠️ Re-read weak modules; re-take in 3 days
- **<20** → 🔁 Restart from weak modules

### Topic-by-topic breakdown

- **Module 1 (Google AI Landscape & Gemini Family):** Q1, 2, 3, 4, 5, 6 → if 3+ missed, re-read Module 1
- **Module 2 (AI Studio & Gemini API):** Q7, 9, 11, 12, 13, 14, 15 → Module 2 if 3+ missed
- **Module 3 (Vertex AI Platform):** Q8, 10, 16, 17, 20, 21, 22, 23, 24, 30 → Module 3 if 3+ missed
- **Module 4 (Multi-modal Gemini):** Q25, 26, 27 → Module 4 if 2+ missed
- **Module 5 (RAG on Google Cloud):** Q18, 19, 28, 29 → Module 5 if 2+ missed

---

➡️ When ready: [Practice Exam 2](./Practice-Exam-2.md)
