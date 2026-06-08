# 🏁 Final Mock Exam, Generative AI Engineer

> **Conditions:** Set a 90-minute timer. 65 questions, including 5 scenario-based PBQs.
> **Pass mark:** 55/65 (~85%), the bar for "interview-ready."
> Take this AFTER finishing all 10 modules AND Practice Exams 1 + 2.

---

## 📝 Questions

### 1. Modern generative LLMs use which attention pattern?
A. Bidirectional (BERT-style)
B. Causal self-attention (decoder-only)
C. No attention
D. SQL queries

### 2. Self-attention's compute complexity in sequence length:
A. O(N)
B. O(N log N)
C. O(N²)
D. O(1)

### 3. GQA (Grouped-Query Attention) primarily reduces:
A. Model parameters
B. KV cache memory
C. Tokenizer time
D. Embedding storage

### 4. The dominant 2026 positional-encoding scheme:
A. Sinusoidal absolute
B. RoPE (rotary)
C. ALiBi only
D. Learned absolute

### 5. tiktoken's `cl100k_base` tokenizer is the one for:
A. LLaMA
B. T5
C. GPT-4 / Claude-2 era
D. BERT

### 6. A 4000-character English document is approximately how many tokens?
A. 100
B. 1000
C. 4000
D. 10000

### 7. Mixtral 8×7B uses what activation pattern per token?
A. All 8 experts always
B. Top-2 of 8 experts (sparse MoE)
C. One fixed expert
D. None

### 8. Mamba / SSMs scale how in sequence length?
A. O(N²)
B. O(N log N)
C. O(N), linear
D. O(1)

### 9. The PRIMARY benefit of FlashAttention:
A. Changes the math
B. Fused kernel that avoids materializing the N×N matrix
C. Removes softmax
D. Runs on CPU only

### 10. Prompt caching (Anthropic Aug 2024) provides:
A. Zero impact
B. Up to 90% cost reduction on long unchanged prompt prefixes
C. Free generation
D. None

### 11. Cosine similarity on L2-normalized vectors is equivalent to:
A. Hamming
B. Dot product
C. Manhattan
D. Levenshtein

### 12. HNSW is what type of index?
A. Tree exact
B. Multi-layer navigable small-world graph for ANN
C. Linear scan
D. SQL

### 13. Multi-tenant vector retrieval should filter:
A. Post (after retrieval)
B. Pre, so the ANN index never considers other tenants' vectors
C. Random
D. Never

### 14. Matryoshka representations enable:
A. Hash collisions
B. Truncating a longer embedding to shorter prefixes while preserving quality
C. New tokens
D. None

### 15. The PRIMARY weakness of pure-dense retrieval:
A. None
B. Exact-term queries (part numbers, SKUs), BM25 wins these
C. Translation
D. Speed

### 16. RRF formula combines retrievers via:
A. Sum scores
B. Sum 1/(k + rank_i) across retrievers
C. Random
D. Maximum

### 17. Contextual retrieval (Anthropic Sep 2024) prepends what to chunks?
A. Random text
B. An LLM-generated 50-100 token contextualization
C. The current time
D. The user's name

### 18. The Gao et al. (2024) RAG taxonomy:
A. Old / New
B. Naive → Advanced → Modular
C. Basic / Pro / Enterprise
D. None

### 19. HyDE (Hypothetical Document Embeddings):
A. Embeds the user query directly
B. LLM writes a hypothetical answer; embed that; retrieve
C. Skips retrieval
D. Uses BM25 only

### 20. The "lost in the middle" finding (Liu 2023):
A. Cars in tunnels
B. LLMs attend disproportionately to start/end of long contexts
C. Lost vector DBs
D. None

### 21. CRAG (Corrective RAG) primarily adds:
A. A relevance classifier + web-search fallback when retrieval is weak
B. A bigger model
C. New embeddings
D. None

### 22. LCEL chains compose via:
A. `+`
B. `|` (pipe)
C. `>>`
D. None

### 23. The PRIMARY reason to choose LangGraph over LCEL:
A. Speed
B. Loops + state + checkpointing + HITL
C. LCEL is deprecated
D. None

### 24. LlamaIndex's `SentenceWindowNodeParser`:
A. Whole-doc retrieval
B. Sentence-level retrieval with surrounding window passed to LLM
C. Random
D. None

### 25. Tool calling universal pattern (5 steps):
A. (1) define (2) bind (3) emit (4) execute (5) append + continue
B. (1) hello (2) print (3) exit
C. (1) embed (2) retrieve (3) generate
D. None

### 26. MCP was introduced by:
A. OpenAI
B. Anthropic (Nov 2024)
C. Google
D. Meta

### 27. The Module 5 decision tree order:
A. Fine-tune → RAG → Prompt
B. Prompt → RAG → Fine-tune
C. Train → Fine-tune → Prompt
D. None

### 28. LoRA's update equation:
A. `ΔW = B · A` (B: d×r, A: r×d)
B. `ΔW = A · B` (both d×d)
C. ΔW is zero forever
D. None

### 29. A 70B model full-fine-tune requires approximately:
A. 24 GB VRAM
B. 80 GB VRAM
C. 600+ GB (multi-GPU + sharding)
D. 8 GB

### 30. QLoRA's three innovations:
A. NF4 quantization + double quantization + paged optimizer states
B. SQL, hash, sort
C. Embed, retrieve, generate
D. None

### 31. DPO (Direct Preference Optimization):
A. Single labeled
B. (chosen, rejected) preference pairs without a reward model
C. RL rollouts
D. None

### 32. The LIMA (Zhou 2023) takeaway:
A. More data always helps
B. 1,000 well-curated examples can be enough for strong instruction-following
C. Random
D. None

### 33. AutoGPT's ~8% completion rate showed:
A. Fully autonomous open-ended agents work great
B. Scoped agents with stop conditions are the production answer
C. Random
D. None

### 34. LangGraph supervisor pattern:
A. Replaces user
B. Routes between worker agents and decides when to stop
C. Embeds
D. Tokenizes

### 35. AutoGen's killer feature:
A. Tool calling only
B. Native sandboxed code execution + conversable-agent flexibility
C. None
D. Free hosting

### 36. Anthropic's planner+coder+reviewer on SWE-bench Verified:
A. Same as single-agent
B. ~15 points higher at 3-4× cost
C. Worse
D. None

### 37. The three layers of LLM evaluation:
A. Train/Test/Validate
B. Capability / System / Production
C. None
D. Pre/Mid/Post

### 38. RAGAS four core metrics:
A. Faithfulness / Answer Relevancy / Context Precision / Context Recall
B. Accuracy / Precision / Recall / F1
C. Loss / MSE / MAE / R²
D. None

### 39. Low Context Recall means:
A. Found everything
B. Missed relevant docs; expand retrieval (hybrid + multi-query + larger k)
C. Random
D. None

### 40. LLM-as-judge biases include:
A. Lightspeed bias
B. Position / length / self-enhancement / format / confidence
C. None
D. Tokenization bias

### 41. The OWASP LLM Top 10's #1:
A. Model Theft
B. Prompt Injection
C. Data Poisoning
D. Insecure Plugin Design

### 42. Indirect prompt injection comes from:
A. The user
B. Third-party content (page, PDF, tool output)
C. The model
D. None

### 43. Air Canada chatbot lawsuit (2024) established:
A. Chatbots can't be sued
B. Companies own their chatbot's mistakes legally
C. Users own them
D. None

### 44. Presidio is:
A. A vector DB
B. Microsoft's PII detection + anonymization library
C. A model
D. A tokenizer

### 45. NeMo Guardrails DSL:
A. YAML
B. Colang
C. JSON
D. SQL

### 46. Structured output (JSON schema) as a guardrail because:
A. Speed
B. The model can't say arbitrary harmful text when constrained to a typed schema
C. None
D. BM25

### 47. vLLM's PagedAttention does:
A. Stores weights on disk
B. KV cache in non-contiguous pages, eliminating fragmentation; 2-4× throughput
C. Compresses embeddings
D. Tokenizes

### 48. The Cursor latency moat is built from:
A. Switching to fp64
B. Two-model strategy + prompt cache + semantic cache + spec-decode + streaming
C. None
D. Random

### 49. LiteLLM is:
A. A vector DB
B. Provider-agnostic gateway for 100+ LLMs behind a unified API
C. A tokenizer
D. A model

### 50. Production latency metrics to monitor:
A. Average only
B. p50 / p95 / p99 / TTFT / TTLT / throughput
C. None
D. p100 only

### 51. Klarna's $0.30 → $0.04 cost-per-conversation came from:
A. One trick
B. Routing + cache + cache + brevity + early-cancel, compounding
C. Random
D. None

### 52. Notion AI's "missing memo" v1 root cause:
A. Bad model
B. Chunking + top-K + no reranker
C. Slow network
D. None

### 53. GitHub Copilot's primary eval metric historically:
A. MMLU
B. Acceptance rate
C. Latency
D. None

### 54. Stripe Radar's LLM is:
A. The whole classifier
B. An augmentation layer over the GBT classifier with HITL gates
C. None
D. Unrelated

### 55. Khanmigo's safety architecture:
A. Like Claude.ai
B. Designed to PREVENT direct answers (Socratic), plus minor-protection layers
C. No safety
D. Random

### 56. Anthropic's claude.ai pattern uses:
A. Naive RAG
B. Constitutional + MCP tools + Computer Use + web search + cite-required
C. None
D. SQL

### 57. The "infrastructure compounds" lesson is best shown by:
A. One big change
B. Klarna's quarterly cost grind
C. A single hire
D. None

### 58. The retrieval-bugs-are-64% Anthropic 2024 finding implies:
A. Models are the bottleneck
B. Most production "the AI got it wrong" tickets are retrieval bugs, not model bugs
C. Hardware is the bottleneck
D. None

### 59. Semantic caching returns cached answer when:
A. Strings match exactly
B. New query embedding cosine sim > threshold with cached query
C. Random
D. None

### 60. Streaming first-token quickly is important because:
A. Less work
B. Perceived latency dominates UX; first-token timing is what users feel
C. None
D. Cheaper

### 61. (Scenario PBQ, RAG diagnostics) A team's RAG shows: high Faithfulness (0.92), low Context Recall (0.61), medium Answer Relevancy (0.78). The MOST appropriate immediate fix:
A. Switch the LLM
B. Expand retrieval: hybrid (dense + BM25), multi-query expansion, larger k, contextual retrieval at index time
C. Lower temperature
D. Random

### 62. (Scenario PBQ, Multi-agent) An agent system is racking up $50/hour in OpenAI costs and looping on simple queries. First three fixes:
A. Bigger model
B. (1) max_iterations + budget cap (2) supervisor decides DONE more eagerly (3) per-agent observability to find loops
C. None
D. Random

### 63. (Scenario PBQ, Production architecture) A 200K-DAU enterprise search product, 100M docs, multi-tenant, multilingual (15 languages), p95 < 800ms. Minimum viable retrieval stack:
A. OpenAI embedding-3-large single index
B. Multilingual embedder (Cohere v3 multi) + Qdrant or Milvus sharded with pre-filter on tenant + RRF hybrid with BM25 + Cohere Rerank 3 + contextual retrieval at ingest
C. Random
D. SQL only

### 64. (Scenario PBQ, Safety) A health insurance chatbot. PII handling + jailbreak defense + factuality + audit. The MOST appropriate architecture:
A. Single LLM call
B. Presidio PII redact (in + out) + Claude/GPT with refusal-licensed prompt + RAG over policy + post-generation factuality + Llama Guard input filter + HITL for high-risk + Langfuse audit + OWASP review pre-launch
C. None
D. Random

### 65. (Scenario PBQ, End to end) Architect a "Linear Asks"-style AI feature: a user pastes a Slack permalink, the system reads the thread, identifies the right team based on past patterns, drafts a task, and creates it in Linear. Best architecture:
A. Single GPT-4 call
B. LiteLLM gateway → ingest pipeline (Slack permalink → thread fetch → Module-2 chunking + embed in pgvector per workspace) → query: classify intent, retrieve similar past tasks, route via team-skills KG → generate (cite-required, schema-validated draft) → Linear API tool with HITL approval → Langfuse traces → cost dashboard + safety guardrails (PII redaction on Slack)
C. SQL only
D. Random

---

## 🎯 Answer Key (No Cheating!)

```
1.  B    14. B    27. B    40. B    53. B
2.  C    15. B    28. A    41. B    54. B
3.  B    16. B    29. C    42. B    55. B
4.  B    17. B    30. A    43. B    56. B
5.  C    18. B    31. B    44. B    57. B
6.  B    19. B    32. B    45. B    58. B
7.  B    20. B    33. B    46. B    59. B
8.  C    21. A    34. B    47. B    60. B
9.  B    22. B    35. B    48. B    61. B
10. B    23. B    36. B    49. B    62. B
11. B    24. B    37. B    50. B    63. B
12. B    25. A    38. A    51. B    64. B
13. B    26. B    39. B    52. B    65. B
```

---

## 📊 Score Yourself

- **60-65 correct** → 🏆 Interview-ready. Schedule the loop.
- **55-59** → ✅ Strong margin. Note gaps; final brush-up on weak modules.
- **48-54** → ⚠️ Borderline. Re-take after a week's review.
- **<48** → 🔁 Pause. Re-do the labs; re-take the mock in 2 weeks.

### Topic-by-topic breakdown
- Module 1 (Architecture / Tokenization): Q1-10
- Module 2 (Embeddings / Vector DBs): Q11-17
- Module 3 (RAG): Q18-21
- Module 4 (Frameworks): Q22-26
- Module 5 (Fine-tuning): Q27-32
- Module 6 (Multi-agent): Q33-36
- Module 7 (Eval / RAGAS): Q37-40
- Module 8 (Guardrails / Safety): Q41-46
- Module 9 (Deployment / Cost): Q47-51
- Module 10 (Case Studies): Q52-58
- Integration: Q59-65 (PBQs)

---

## 🏁 Pre-Interview Checklist

✅ Read every Cheat-Sheet the night before
✅ Run through the Module 10 capstone lab, pick one product, architect it from memory
✅ Brush up on Anthropic / OpenAI API specifics for your target company
✅ Bring Polished examples of: a RAG you built, an eval harness, a cost optimization
✅ Sleep
✅ You've earned this

When you pass, return for [AWS ML Specialty](../../31-AWS-ML-Specialty/README.md), the natural next step for production AI engineers. Good luck. 🚀
