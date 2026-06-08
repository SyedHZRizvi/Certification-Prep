# 🧪 Practice Exam 1, Generative AI Engineer (Modules 1–5)

> **Conditions:** Set a 40-minute timer. 30 questions. Treat it like the real thing.
> **Pass mark:** 25/30 (~83%).
> Take this AFTER finishing Modules 1–5. Covers LLM architecture, embeddings + vector DBs, RAG, frameworks (LangChain / LlamaIndex / LangGraph), fine-tuning.

---

## 📝 Questions

### 1. The dominant architecture of generative LLMs (Claude, GPT, LLaMA, Gemini) in 2026 is:
A. Encoder-only (BERT-family)
B. Encoder-decoder (T5-family)
C. Decoder-only with causal self-attention
D. Recurrent (LSTM)

### 2. Self-attention has compute complexity:
A. O(N)
B. O(N log N)
C. O(N²) in sequence length
D. O(1)

### 3. Grouped-Query Attention (GQA) saves:
A. Model parameters
B. KV cache memory (fewer K/V heads than Q heads)
C. Tokenizer time
D. Embedding storage

### 4. RoPE encodes position by:
A. Adding sinusoidal vectors at input
B. Rotating Q and K vectors by an angle proportional to position
C. Learned absolute embeddings
D. Adding bias to the FFN

### 5. The PRIMARY reason for QLoRA's memory savings vs LoRA:
A. Quantizes the LoRA adapters
B. Holds the base model in 4-bit (NF4) and only the LoRA adapters in fp16
C. Runs on CPU
D. Smaller batches

### 6. tiktoken's `cl100k_base` is the tokenizer for which model family?
A. LLaMA
B. T5
C. GPT-4 / Claude-2 era
D. BERT

### 7. Cosine similarity on L2-normalized vectors is equivalent to:
A. Hamming distance
B. Dot product
C. Manhattan distance
D. Levenshtein

### 8. A 768-dim float32 vector occupies how many bytes?
A. 768
B. 1536
C. 3072
D. 6144

### 9. HNSW is best characterized as:
A. Tree-based exact-search
B. Multi-layer navigable small-world graph for ANN
C. Brute-force linear scan
D. SQL index

### 10. Pre-filter vs post-filter in vector search for multi-tenant data:
A. Always post-filter
B. Pre-filter, the ANN index should never consider other tenants' vectors
C. Filter doesn't matter
D. Random

### 11. Reciprocal Rank Fusion (RRF) of dense + BM25 results computes per document:
A. The average score
B. Sum of 1/(k + rank_i) across retrievers
C. Maximum score
D. Random

### 12. Contextual retrieval (Anthropic Sep 2024) prepends what to each chunk before embedding?
A. The user's name
B. A 50-100 token LLM-generated contextualization summarizing the chunk's surrounding doc
C. Random text
D. The current timestamp

### 13. The "Naive → Advanced → Modular" RAG taxonomy is from:
A. Lewis et al. 2020
B. Gao et al. 2024 RAG survey
C. OpenAI cookbook
D. LangChain docs

### 14. HyDE (Hypothetical Document Embeddings):
A. Embeds the literal user query
B. Generates a hypothetical answer with an LLM, then embeds that and retrieves
C. Skips retrieval
D. Uses only BM25

### 15. Query decomposition is MOST appropriate for:
A. "Compare Q3 revenue of Stripe and Adyen and explain the gap"
B. "Hello"
C. "What is the date today?"
D. "Translate this"

### 16. A user's RAG hallucinates. The MOST important missing prompt instruction:
A. The model name
B. "If the context is insufficient, say 'I don't know'"
C. Temperature
D. Cost cap

### 17. CRAG (Corrective RAG) primarily adds:
A. Web-search fallback when retrieved chunks are low quality
B. Better embeddings
C. Bigger model
D. SQL

### 18. LCEL chains compose with the operator:
A. `+`
B. `|` (pipe)
C. `>>`
D. `.then()`

### 19. The PRIMARY reason to use LangGraph over LCEL:
A. LangGraph is faster
B. Loops + conditional branches + state + checkpointing + HITL
C. LCEL is deprecated
D. None

### 20. LlamaIndex's `SentenceWindowNodeParser`:
A. Retrieves whole documents
B. Embeds individual sentences but passes the surrounding window to the LLM
C. Random spans
D. None

### 21. The tool-calling universal pattern:
A. (1) define (2) bind (3) model emits tool_call (4) execute (5) append ToolMessage and continue
B. (1) ask user (2) print (3) exit
C. (1) embed (2) retrieve (3) generate
D. None

### 22. MCP (Model Context Protocol) was introduced by:
A. OpenAI
B. Anthropic (Nov 2024)
C. Google
D. Meta

### 23. The Module 5 decision-tree for the GenAI lever order is:
A. Fine-tune → RAG → Prompt
B. Prompt → RAG → Fine-tune
C. Train-from-scratch → Fine-tune → Prompt
D. Random

### 24. LoRA's update equation is:
A. `ΔW = B · A`, with B: d×r, A: r×d
B. `ΔW = A · B`, with both d×d
C. ΔW is unchanged
D. `ΔW = W`

### 25. A 70B model full-fine-tune requires approximately:
A. 24 GB VRAM
B. 80 GB VRAM
C. 600+ GB VRAM (multi-GPU + sharding)
D. 8 GB VRAM

### 26. DPO (Direct Preference Optimization) trains on:
A. Single labeled examples
B. (chosen, rejected) preference pairs without a separate reward model
C. Unlabeled text
D. RL rollouts

### 27. The LIMA (Zhou 2023) insight:
A. More data always helps
B. 1,000 carefully-curated examples can produce strong instruction-following
C. Random is fine
D. None

### 28. Anthropic's prompt caching reduces input-token cost by approximately:
A. 0%
B. 10-25% (cached read tier)  → about 75-90% savings vs uncached at the per-token level
C. 200% more expensive
D. None

### 29. The PRIMARY reason a "70B from-scratch domain LLM" (BloombergGPT-style) is rarely justified in 2026:
A. They are illegal
B. Base + RAG + light FT matches or exceeds them at 1-2 orders of magnitude less cost
C. They don't work
D. They are too small

### 30. (Scenario PBQ) Design a minimum viable architecture for a healthcare customer-support assistant that must (a) answer from 5K policy pages, (b) maintain HIPAA-compliant PII handling, (c) refuse out-of-scope, (d) speak in a brand-consistent tone. Budget: $20K. Best:
A. Train BloombergGPT-style 50B from scratch
B. Claude Haiku or GPT-4o-mini + RAG over policy corpus + Presidio PII redaction + ~500-example SFT for tone + DPO for safety preferences + guardrails + audit logs
C. Random
D. Vibes alone

---

## 🎯 Answer Key (No Cheating!)

```
1.  C    7.  B    13. B    19. B    25. C
2.  C    8.  C    14. B    20. B    26. B
3.  B    9.  B    15. A    21. A    27. B
4.  B    10. B    16. B    22. B    28. B
5.  B    11. B    17. A    23. B    29. B
6.  C    12. B    18. B    24. A    30. B
```

---

## 📊 Score Yourself

- **28-30** → 🏆 First half mastered. Take Practice Exam 2 after Module 10.
- **25-27** → ✅ Strong. Review weak modules.
- **20-24** → ⚠️ Re-read flagged modules before continuing.
- **<20** → 🔁 Don't proceed yet; re-do the lab labs in Modules 1-5.

### Topic-by-topic breakdown

- Module 1 (Architecture / Tokenization): Q1-6 → if you missed 2+, re-read Module 1
- Module 2 (Embeddings / Vector DBs): Q7-12 → if you missed 2+, re-read Module 2
- Module 3 (RAG): Q13-17 → if you missed 2+, re-read Module 3
- Module 4 (LangChain / LlamaIndex): Q18-22 → if you missed 2+, re-read Module 4
- Module 5 (Fine-tuning / PEFT / LoRA): Q23-29 → if you missed 2+, re-read Module 5
- PBQ (Q30): integration across modules

---

➡️ When ready for the back half: [Practice Exam 2](./Practice-Exam-2.md)
