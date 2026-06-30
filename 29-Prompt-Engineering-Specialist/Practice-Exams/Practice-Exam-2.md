# 🧪 Practice Exam 2, Prompt Engineering Specialist (Modules 5–8)

> **Conditions:** Set a 30-minute timer. 30 questions. Treat it like the real thing.
> **Pass mark:** 26/30 (~87%).
> Take this AFTER finishing Modules 5–8. Covers Multi-Modal, Evaluation & A/B, Adversarial Defense, Production at Scale.

---

## 📝 Questions

### 1. Among 2026 frontier families, native VIDEO file input is best supported by:
A. Claude
B. GPT-5
C. Gemini 2.5 Pro / Flash
D. Llama 3.2 Vision

### 2. A high-detail 1024×1024 image on most vision LLMs costs approximately:
A. ~1,500–2,500 tokens
B. ~10 tokens
C. ~50 tokens
D. ~50,000 tokens

### 3. EXIF rotation metadata in JPEG images sent to vision APIs:
A. Is always honored
B. Is OFTEN NOT honored, pre-rotate to upright before sending
C. Doesn't exist
D. Is the same as base64

### 4. The MOST robust defense against vision-LLM chart "confabulation" is:
A. Lower temperature
B. Bigger image
C. Ask for data points individually + run self-consistency (N samples; check agreement)
D. Switch to grayscale

### 5. When sending multiple images to one prompt, the best practice is:
A. Send them all with no labels
B. Only send one
C. Average them
D. Label each: `"Image 1: before, Image 2: after"`

### 6. Whisper is best described as:
A. OpenAI's transcription model (audio → text)
B. A vision model
C. A reasoning model
D. A vector DB

### 7. The three pillars of LLM evaluation are:
A. Train / validate / test
B. Speed / cost / quality
C. Free / Pro / Enterprise
D. Programmatic / LLM-as-judge / human review

### 8. G-Eval (Liu et al. 2023) improved LLM-judging by adding:
A. Lower temperature
B. A new model
C. Chain-of-thought reasoning + averaging across N judge samples
D. Vector embeddings

### 9. The MOST important defense against LLM-as-judge "self-preference" bias is:
A. Use a higher-tier model
B. Use a DIFFERENT model family for the judge than the model being judged
C. Lower temperature
D. Skip the judge

### 10. A reasonable MVP golden set size is approximately:
A. 70–150 examples spanning easy / edge / hard / adversarial
B. 3 examples
C. 10 examples
D. 100,000 examples

### 11. RAGAS provides RAG-specific metrics including:
A. Latency only
B. RAGAS is a vector DB, not a metrics library
C. Token count only
D. Faithfulness, answer relevance, context precision, context recall

### 12. "Faithfulness" in a RAG eval means:
A. The model speaks truthfully in general
B. Retrieval is fast
C. The answer is grounded ONLY in retrieved context, no hallucination beyond it
D. Citations are formatted

### 13. To detect a 5pt accuracy difference at ~80% statistical power, you need approximately:
A. 10 samples per arm
B. 1M per arm
C. 100 per arm
D. ~1,500 per arm

### 14. "Pre-registration" of a success metric in an A/B test:
A. Defines the metric and decision rule BEFORE looking at data, preventing p-hacking
B. Pre-pays the API bill
C. Registers a domain name
D. Trains the judge in advance

### 15. The 3 categories of prompt injection are:
A. Easy / medium / hard
B. Direct (user-message), indirect (document/tool result), multi-modal (image/audio/video)
C. Active / passive / hybrid
D. SQL / NoSQL / GraphQL

### 16. The seminal indirect-prompt-injection paper:
A. Brown 2020
B. Wei 2022
C. Greshake et al. 2023, *Not what you've signed up for*
D. Bai 2022

### 17. The MOST important architectural principle for tools:
A. Tool outputs are trusted
B. Tools should require temperature = 0
C. Tools must be open source
D. Tool outputs are ALWAYS untrusted input, wrap in delimiters, never as instructions

### 18. The DeepSeek R1 jailbreak storm of January 2025:
A. Demonstrated that even open-weights reasoning models can be jailbroken via role-play, encoding, multi-turn within 48 hours of release
B. Was a closed-model-only issue
C. Was a hardware bug
D. Affected only one user

### 19. "Defense in depth" means:
A. One very strong defense layer
B. Multiple independent layers (system prompt + input filter + output filter + sandboxing + judge + red-team), no single bypass fails everything
C. Hiring more engineers
D. Using bigger models

### 20. The Air Canada chatbot court ruling (Feb 2024) established:
A. Chatbots are exempt from law
B. AI replaces lawyers
C. A company can be held LIABLE for promises a chatbot makes to a customer
D. Pricing must be honest

### 21. Anthropic prompt caching is enabled by:
A. Auto for everything
B. Using a smaller model
C. Lowering temperature
D. Marking sections with `cache_control: {"type": "ephemeral"}` or `"persistent"`

### 22. OpenAI prompt caching is approximately:
A. Automatic for prompts ≥1024 tokens at ~50% discount on cached portion
B. Manual only
C. Always free
D. Disabled by default

### 23. A semantic cache stores:
A. Plain prompt text
B. Cached responses keyed by embedding-similarity of input, serve hit on close matches
C. API keys
D. The system prompt

### 24. The de facto multi-provider abstraction library in 2026 is:
A. requests
B. numpy
C. LiteLLM
D. pandas

### 25. TTFT (Time-To-First-Token) target for a "responsive" chat product is approximately:
A. <50 ms
B. <5 minutes
C. <30 seconds
D. <500 ms

### 26. OpenAI / Anthropic Batch APIs offer:
A. ~50% discount + relaxed rate limits for non-realtime workloads
B. Faster realtime
C. Higher quality
D. Smaller models only

### 27. Per-customer spend caps are the primary defense against:
A. Slow responses
B. Buggy customer integrations (e.g., retry loops) burning $50K+ overnight
C. Low output quality
D. Vendor outages

### 28. Anthropic's `cache_control: {"type": "ephemeral"}` TTL is approximately:
A. Forever
B. 1 hour+
C. 5 minutes
D. 24 hours

### 29. Vendor-neutral telemetry for LLM apps is emerging via:
A. OpenTelemetry GenAI Semantic Conventions (OTel GenAI semconv)
B. CSV log files
C. Bash scripts
D. Email

### 30. Design challenge: You're shipping a customer-facing AI travel-planning assistant that can search flights, hold reservations, send confirmations, and explain bookings. The MINIMUM viable production-grade architecture must include:
A. Free-form GPT-4o with no infra
B. Layered: (1) Hardened system prompt + instruction-hierarchy delimiters; (2) input validator (length, encoding, language, two safety classifiers); (3) tool whitelist scoped to context with user confirmation gates for `hold_reservation` and `send_confirmation`; (4) PII-aware output filter + cross-family LLM-judge safety check; (5) Anthropic prompt cache on the system+tool descriptions + Gemini 2.5 Pro for vision (boarding pass photos) + Haiku 4.5 for simple lookups; (6) LiteLLM with primary Anthropic + OpenAI/Gemini fallbacks; (7) Langfuse observability with per-customer cost dashboard + spend caps; (8) Pydantic + instructor for every structured output; (9) Pre-registered A/B + canary deploy via feature flag + auto-rollback on degradation; (10) Adversarial regression suite (HarmBench-style) blocking deploys
C. One model, no caching, no observability, no safety
D. Manual review of every output

---

## 🎯 Answer Key (No Cheating!)

```
1.  C    11. D    21. D
2.  A    12. C    22. A
3.  B    13. D    23. B
4.  C    14. A    24. C
5.  D    15. B    25. D
6.  A    16. C    26. A
7.  D    17. D    27. B
8.  C    18. A    28. C
9.  B    19. B    29. A
10. A    20. C    30. B
```

---

## 💡 Quick Rationales (one-liner per question)

1. **C**, Gemini 2.5 owns native video; up to ~1hr files directly.
2. **A** A high-detail 1024² image ≈ 1500–2500 tokens audit your bills.
3. **B**, EXIF rotation often not honored by vision APIs; pre-rotate.
4. **C**, Enumerate data points + self-consistency. Don't ask "what's the trend?" on novel data.
5. **D**, Always label multi-image: "Image 1: before, Image 2: after."
6. **A**, Whisper is audio-to-text only. Use chat models for understanding.
7. **D**, The three pillars: programmatic / LLM-judge / human.
8. **C**, G-Eval = CoT scoring + averaged samples (Liu 2023).
9. **B**, Self-preference bias: a family judging itself is lenient. Cross-family forces honesty.
10. **A**, MVP golden set: 70-150 spanning easy / edge / hard / adversarial.
11. **D**, RAGAS = faithfulness + answer relevance + context precision + context recall.
12. **C**, Faithfulness = answer uses ONLY retrieved context (no hallucination).
13. **D**, Power math: 5pt delta @ 80% power needs ~1,500 per arm.
14. **A**, Pre-registration prevents p-hacking after-the-fact.
15. **B**, Three injection categories: direct / indirect / multi-modal.
16. **C** Greshake et al. 2023 "Not what you've signed up for."
17. **D**, Tool outputs are ALWAYS untrusted input. The #1 production rule for agents.
18. **A**, DeepSeek R1 storm proved open-weights reasoning is jailbreakable in 48h.
19. **B**, Defense in depth: multiple independent layers, no single bypass wins.
20. **C**, Air Canada precedent: companies are liable for chatbot promises.
21. **D**, Anthropic `cache_control: {"type": "ephemeral"}` tags cacheable sections.
22. **A**, OpenAI auto-caches ≥1024-token prompts at ~50% off.
23. **B**, Semantic cache keys responses by input embedding similarity.
24. **C**, LiteLLM is the de facto multi-provider abstraction.
25. **D**, TTFT <500ms is the "responsive chat" bar.
26. **A**, Batch APIs: ~50% discount + relaxed limits for non-realtime.
27. **B**, Per-customer spend caps prevent the $50K overnight horror.
28. **C**, Anthropic ephemeral TTL is ~5 minutes.
29. **A**, OpenTelemetry GenAI semconv is the emerging vendor-neutral standard.
30. **B**, The full 10-layer production architecture. Anything less = future incident.

---

## 📊 Score Yourself

- **28–30 correct** → 🏆 Modules 5-8 mastered. Schedule the Final Mock.
- **24–27** → ✅ Strong. Note gaps; revisit modules.
- **20–23** → ⚠️ Re-quiz module weak spots.
- **<20** → 🔁 Restart modules; re-take in 1 week.

### Topic-by-topic breakdown
- **Multi-Modal** (Q1-6) → Module 5
- **Evaluation** (Q7-14) → Module 6
- **Adversarial** (Q15-20) → Module 7
- **Production** (Q21-29, 30) → Module 8
- **Integrated design** (Q30) → All 8 modules

---

➡️ When you're ready: [Final Mock Exam](./Final-Mock-Exam.md)
