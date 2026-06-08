# 🧪 Practice Exam 2, Generative AI Engineer (Modules 6–10)

> **Conditions:** Set a 40-minute timer. 30 questions. Treat it like the real thing.
> **Pass mark:** 25/30 (~83%).
> Take this AFTER finishing Modules 6–10. Covers multi-agent, evaluation/RAGAS, guardrails, deployment/observability, and production case studies.

---

## 📝 Questions

### 1. The 2024 community consensus on autonomous open-ended agents like AutoGPT:
A. They are the gold standard
B. They mostly don't work; scoped agents with stop conditions do
C. They are required for any AI app
D. They are illegal

### 2. The PRIMARY reason to use multi-agent over single-agent:
A. Smaller code
B. Natural mapping of tasks with distinct roles + tools; variance reduction via reflection/critique
C. Always cheaper
D. Less compute

### 3. LangGraph's supervisor pattern uses one agent to:
A. Replace the user
B. Route between worker agents and decide when to stop
C. Embed
D. Tokenize

### 4. AutoGen's killer feature relative to LangGraph:
A. Tool calling only
B. Native sandboxed code execution + conversable-agent flexibility
C. Free hosting
D. Better embeddings

### 5. Anthropic's planner + coder + reviewer multi-agent vs single-agent on SWE-bench Verified:
A. About the same
B. ~15 points higher (~64% vs ~49%) at 3-4× cost
C. Worse
D. Identical

### 6. Production agents MUST have:
A. Larger models
B. max_iterations + budget cap + wall-clock cap + HITL on destructive actions
C. SQL
D. None

### 7. The three layers of LLM evaluation are:
A. Train / Test / Validate
B. Capability / System / Production
C. Pre / Mid / Post
D. None

### 8. RAGAS' four core metrics:
A. Accuracy, precision, recall, F1
B. Faithfulness, Answer Relevancy, Context Precision, Context Recall
C. Loss, MSE, MAE, R²
D. ROUGE, BLEU, METEOR, BERTScore

### 9. A team's RAG has low Faithfulness, high Answer Relevancy. Diagnosis:
A. Off-topic answers
B. Hallucination, the answer addresses the question but makes up facts; tighten prompt + reduce k
C. The DB is offline
D. None

### 10. The classic LLM-as-judge biases include:
A. Lightspeed bias
B. Position, length, self-enhancement, format, confidence biases
C. None
D. Tokenization bias

### 11. The standard mitigation for LLM-as-judge position bias in pairwise comparison:
A. Use one ordering only
B. Run both orderings (A vs B AND B vs A); count only agreements
C. Use BM25
D. Random

### 12. G-Eval improves LLM-as-judge by:
A. Replacing the judge with humans
B. Structured rubric + chain-of-thought reasoning + logprob-weighted scoring
C. Skipping the rubric
D. Random sampling

### 13. OWASP LLM Top 10's #1 (2024):
A. Model Theft
B. Prompt Injection
C. Training Data Poisoning
D. Insecure Plugin Design

### 14. Indirect prompt injection means:
A. The user types an attack
B. A third party (page, PDF, email, tool output) embeds instructions the LLM follows
C. The model has a typo
D. No such thing

### 15. The Air Canada chatbot (2024) lawsuit established that:
A. Chatbots can't be sued
B. Companies are responsible for the answers their chatbots give, including wrong ones
C. The user is liable
D. None

### 16. Presidio is BEST characterized as:
A. A vector DB
B. Microsoft's open-source PII detection + anonymization library
C. A model
D. A tokenizer

### 17. NeMo Guardrails uses what DSL for flows?
A. YAML
B. Colang
C. JSON
D. SQL

### 18. Structured output (strict JSON schema) is a guardrail because:
A. It's faster
B. The model can't say arbitrary harmful text when constrained to a typed schema
C. It uses BM25
D. None

### 19. vLLM's PagedAttention does what?
A. Stores model weights on disk
B. Stores KV cache in non-contiguous "pages" eliminating fragmentation; 2-4× throughput
C. Compresses embeddings
D. Tokenizes faster

### 20. The Cursor team achieved <200ms p95 first-token latency PARTLY by:
A. Switching to fp64
B. Two-model strategy + prompt caching + semantic caching + speculative decoding + streaming
C. Smaller embeddings
D. Random

### 21. LiteLLM is BEST characterized as:
A. A vector DB
B. Provider-agnostic gateway supporting 100+ LLM providers behind one OpenAI-compatible API
C. A tokenizer
D. A model

### 22. The PRIMARY benefit of prompt caching (Anthropic / OpenAI):
A. Faster tokenization
B. Up to ~90% cost reduction on long unchanged prefixes by reusing provider-side KV cache
C. Better tokenizers
D. Free GPUs

### 23. Production latency metrics to monitor:
A. Average only
B. p50, p95, p99, TTFT, TTLT, throughput
C. p100 only
D. None

### 24. Klarna's cost-per-conversation dropped $0.30 → $0.04 (6 months) PRIMARILY via:
A. One trick
B. Multi-model routing + prompt cache + semantic cache + output brevity + streaming early-cancel
C. Random
D. None

### 25. Notion AI's "missing memo" v1 bug (Module 2 story) was MOST attributable to:
A. The embedding model
B. Chunking + top-K + no reranker, header separated from body
C. Slow network
D. Wrong DB

### 26. GitHub Copilot's single most important eval metric historically:
A. MMLU
B. Acceptance rate, fraction of suggestions developers keep
C. Latency
D. None

### 27. Stripe Radar's LLM augmentation is BEST described as:
A. The LLM replaces fraud classifiers
B. The LLM augments gradient-boosted-tree classifiers, explanations, adjudication, edge cases, HITL gated
C. The LLM is the entire system
D. None

### 28. Khanmigo's safety architecture is unusual because:
A. It's the same as Claude.ai
B. Safety means preventing too much help (Socratic) plus protecting minors via opt-in, transcripts, educator dashboard
C. It's open source
D. None

### 29. The "infrastructure compounds" lesson is BEST illustrated by:
A. One big change
B. Klarna's quarterly $0.30 → $0.04 grind, many small optimizations
C. A single hire
D. None

### 30. (Scenario PBQ) Architect a 50K-DAU customer-support app, p95 TTFT < 600ms, Anthropic preferred + OpenAI fallback. Minimum viable:
A. Direct Anthropic call only
B. LiteLLM gateway → Anthropic with prompt cache + streaming, OpenAI fallback → Langfuse traces → semantic cache (pgvector) → multi-model classifier (Haiku for easy) → Grafana cost dashboard + PagerDuty
C. Random
D. CPU only

---

## 🎯 Answer Key (No Cheating!)

```
1.  B    7.  B    13. B    19. B    25. B
2.  B    8.  B    14. B    20. B    26. B
3.  B    9.  B    15. B    21. B    27. B
4.  B    10. B    16. B    22. B    28. B
5.  B    11. B    17. B    23. B    29. B
6.  B    12. B    18. B    24. B    30. B
```

---

## 📊 Score Yourself

- **28-30** → 🏆 Production-grade. Take the Final Mock Exam.
- **25-27** → ✅ Strong. Note specific gaps; review those modules.
- **20-24** → ⚠️ Re-read the relevant modules.
- **<20** → 🔁 Re-do the labs in Modules 7-10.

### Topic-by-topic breakdown

- Module 6 (Multi-agent): Q1-6
- Module 7 (Eval / RAGAS): Q7-12
- Module 8 (Guardrails / Safety): Q13-18
- Module 9 (Deployment / Observability / Cost): Q19-24
- Module 10 (Case Studies): Q25-29
- Integration PBQ: Q30

---

➡️ When ready for the full mock: [Final Mock Exam](./Final-Mock-Exam.md)
