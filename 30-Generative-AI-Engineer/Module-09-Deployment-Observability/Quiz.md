# ✏️ Module 9 Quiz: Deployment, Observability & Cost

> 26 questions · aim 22/26.

---

## Questions

### Q1. vLLM's PagedAttention does what? *(Understand)*
A. Stores model weights on disk
B. Stores KV cache in non-contiguous "pages" like virtual memory, eliminating fragmentation; 2-4× throughput
C. Compresses embeddings
D. Tokenizes faster

---

### Q2. Continuous batching means: *(Understand)*
A. Always batch size of 1
B. New requests join an in-flight batch; no waiting for batch boundaries
C. CPU batching only
D. None

---

### Q3. The PRIMARY benefit of Anthropic/OpenAI prompt caching: *(Remember)*
A. Faster tokenization
B. Up to ~90% cost reduction on long unchanged prompt prefixes by reusing provider-side KV cache
C. Better tokenizers
D. Free GPUs

---

### Q4. A semantic cache returns a cached answer when: *(Understand)*
A. Strings match exactly
B. The new query's embedding has cosine similarity > threshold with a cached query
C. Random
D. Hash matches

---

### Q5. The Cursor team achieved <200ms p95 first-token latency PARTLY by: *(Analyze)*
A. Switching to fp64
B. Two-model strategy + prompt caching + semantic caching + speculative decoding + streaming
C. Smaller embeddings
D. Random

---

### Q6. Speculative decoding accelerates by: *(Understand)*
A. Skipping softmax
B. Small draft model proposes K tokens; big model verifies in parallel
C. Quantization
D. None

---

### Q7. The hybrid deployment (hosted + self-hosted) is favored because: *(Analyze)*
A. Always cheaper
B. Frontier closed models for hardest queries; cheap hosted for default; self-host for cost/privacy-sensitive
C. Vendors require it
D. None

---

### Q8. LiteLLM is BEST characterized as: *(Remember)*
A. A vector DB
B. Provider-agnostic gateway supporting 100+ LLM providers behind one OpenAI-compatible API
C. A tokenizer
D. A model

---

### Q9. The CORRECT production latency metrics to monitor: *(Apply)*
A. Average only
B. p50, p95, p99, TTFT (time to first token), TTLT, throughput
C. p100 only
D. Just total

---

### Q10. The "streaming + early-cancel" cost optimization works by: *(Understand)*
A. Skipping generation
B. Canceling in-flight generation when user navigates away; saves remaining tokens
C. Caching
D. Smaller model

---

### Q11. A multi-model routing classifier sends ~5% hardest queries to Claude Opus, ~60% to mid-tier, ~35% to cheap. Probable cost saving: *(Analyze)*
A. Negligible
B. ~50% cost cut vs uniform routing on a frontier model
C. 100×
D. None

---

### Q12. The PRIMARY hidden cost in multi-region deployments: *(Analyze)*
A. Latency
B. Cross-region data transfer (egress) when vector DB and inference are in different regions
C. CPU
D. RAM

---

### Q13. NVIDIA's NIM provides: *(Remember)*
A. A new tokenizer
B. Pre-packaged optimized Docker images of common models with TensorRT-LLM under the hood
C. Free GPUs
D. None

---

### Q14. The MOST important first instrumentation in production: *(Apply)*
A. CPU monitoring
B. Per-request traces with prompt, model, output, cost, latency, errors
C. Disk monitoring
D. None

---

### Q15. Groq's "LPU" is: *(Remember)*
A. A standard GPU
B. Custom inference hardware optimized for very low latency
C. A vector DB
D. A model

---

### Q16. The "model gateway" pattern's PRIMARY benefit: *(Understand)*
A. Performance
B. Abstraction over providers, switch/failover/cache/observe/limit without changing app code
C. None
D. Faster training

---

### Q17. Time-to-first-token (TTFT) latency is dominated by: *(Understand)*
A. Output token generation
B. Prompt processing (KV cache build) + first-token compute
C. Network only
D. Tokenization only

---

### Q18. A production cost spike alert should fire on: *(Apply)*
A. CPU
B. Spend / hour exceeding a defined threshold (with tenant breakdown)
C. Disk space
D. None

---

### Q19. The largest economic risk of single-provider lock-in: *(Evaluate)*
A. Latency
B. Full outage / pricing change / capacity loss with no fallback path
C. Embeddings
D. None

---

### Q20. Klarna's cost-per-conversation drop ($0.30 → $0.04) came primarily from: *(Analyze)*
A. Bigger model
B. Multi-model routing + prompt cache + semantic cache + output brevity + early-cancel
C. Random
D. None

---

### Q21. vLLM's multi-LoRA serving allows: *(Understand)*
A. Random adapters
B. Holding the base model in VRAM and hot-swapping per-customer LoRA adapters per request
C. Only one LoRA
D. None

---

### Q22. AWS Bedrock provides: *(Remember)*
A. A single model
B. Enterprise inference for Anthropic + Mistral + Llama + Cohere + AI21 + Stability with AWS integration
C. Embeddings only
D. SQL

---

### Q23. The "perceived latency" trick for chat UX: *(Understand)*
A. Lying
B. Streaming responses so first token arrives quickly, even if total generation is slower
C. Caching only
D. Bigger context

---

### Q24. Tail latency (p99) spikes most commonly come from: *(Analyze)*
A. Cold starts, cache misses, long-input batch fragmentation, downstream tool latency
B. CPU only
C. Network only
D. Tokenization only

---

### Q25. The cost dashboard MINIMUM panels: *(Apply)*
A. Total spend
B. Total + spend/hour + per-tenant top-10 + per-model breakdown + cache hit rate + tokens/req p95
C. CPU only
D. None

---

### Q26. Design challenge: a 50K-DAU customer support app, with strict SLOs (p95 TTFT < 600ms), Anthropic preferred, OpenAI fallback. Minimal architecture: *(Create)*
A. Direct Anthropic call only
B. LiteLLM gateway → Anthropic primary (prompt cache + streaming) with OpenAI fallback → Langfuse traces → semantic cache (pgvector) → multi-model classifier sending easy queries to Claude Haiku → Grafana cost dashboard + PagerDuty
C. Random
D. CPU only

---

## 🎯 Answers + Explanations

### Q1: **B. Non-contiguous KV cache pages**
PagedAttention treats KV cache like OS virtual memory. Throughput gain comes from eliminating fragmentation that wastes GPU memory in naive serving.

### Q2: **B. New requests join in-flight batches**
Versus static batching, which waits for whole batches to complete. Continuous batching is vLLM/TGI default.

### Q3: **B. Reuse provider-side KV cache for long unchanged prefixes**
Anthropic charges 0.1-0.25× for cached reads, 1.25× for cache writes. Net savings up to 90% on long static prompts.

### Q4: **B. Cosine sim > threshold**
Standard semantic-cache logic. Threshold typically ≥ 0.97 to avoid false positives.

### Q5: **B. Combined techniques**
The Cursor moat, no single trick, the combination.

### Q6: **B. Draft model + parallel verify**
Verify K draft tokens in one big-model step. If accepted, K tokens for the cost of 1.

### Q7: **B. Right tool per query type**
Hybrid is the production reality for most teams. Pure-hosted is too expensive at scale; pure-self-host hits quality ceilings.

### Q8: **B. Provider-agnostic gateway**
~100+ providers behind a single OpenAI-compatible interface.

### Q9: **B. p50/p95/p99 + TTFT + TTLT + throughput**
Average lies. Tail matters.

### Q10: **B. Cancel in-flight when user leaves**
Saves the cost of the remaining tokens. Requires async streaming + cancellation token plumbing.

### Q11: **B. ~50% cost cut**
The empirical Klarna number; depends on workload mix.

### Q12: **B. Cross-region egress**
The most-overlooked cost driver. Keep vector DB and inference co-resident.

### Q13: **B. Optimized Docker images**
TensorRT-LLM optimization, ready-to-run; enterprise licensing.

### Q14: **B. Per-request traces**
Without traces, debugging is impossible.

### Q15: **B. Custom inference hardware**
Groq LPU = Language Processing Unit; designed for low-latency serving.

### Q16: **B. Provider abstraction**
The architectural win is the *abstraction*, not the gateway itself.

### Q17: **B. Prompt processing + first-token compute**
TTFT is what users feel; prompt caching dramatically improves it.

### Q18: **B. $/hr with tenant breakdown**
You need to know *which tenant* spiked the cost in real time.

### Q19: **B. Full-outage / capacity / pricing risk**
The single biggest non-functional risk of single-provider deployment.

### Q20: **B. Routing + cache + cache + brevity + cancel**
The compound of small wins is the story.

### Q21: **B. Hot-swap LoRA per request**
vLLM and TGI both support this; the path to multi-tenant fine-tuned products.

### Q22: **B. Multi-vendor enterprise hosted inference**
The AWS-customer path to GenAI without leaving the AWS perimeter.

### Q23: **B. Stream first token quickly**
Even if generation is 3 seconds total, 200ms TTFT feels fast.

### Q24: **A. Cold starts + cache misses + long-input + downstream**
The four common tail-spike causes. Each has a different mitigation.

### Q25: **B. Total + hourly + tenant + model + cache + tokens**
The minimum panels for finance + engineering to share a view.

### Q26: **B. Full hybrid with caching, observability, multi-model, alerting**
The other answers omit one or more essentials.

---

## 📊 Score Yourself

- 24-26 → 🏆 Production engineer.
- 21-23 → ✅ Strong.
- 17-20 → ⚠️ Re-read cost engineering + caching sections.
- <17 → 🔁 Re-watch vLLM + LiteLLM + Langfuse videos.

---

## 🃏 Add To Your Flashcards

- vLLM (PagedAttention + continuous batching + multi-LoRA)
- LiteLLM as the gateway abstraction
- Langfuse / LangSmith / Phoenix / Helicone for tracing
- Prompt caching (Anthropic / OpenAI / Gemini)
- Semantic cache (GPTCache / pgvector)
- Speculative decoding
- p50/p95/p99 + TTFT
- Streaming + early-cancel
- Multi-model routing
- Cost dashboard panels
- OpenRouter / Together / Fireworks / Groq aggregators

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 10, Production Case Studies](../Module-10-Production-Case-Studies/Reading.md)
