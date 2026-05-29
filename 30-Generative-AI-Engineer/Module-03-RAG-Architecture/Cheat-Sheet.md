# 📋 Module 3 Cheat Sheet: RAG Architecture

> One page. Reference during the lab and the practice exams.

---

## 🗺️ RAG Evolution

| Era | Defining feature |
|-----|------------------|
| **Naive RAG** | One-shot retrieve, one-shot generate |
| **Advanced RAG** | Pre-retrieval rewriting + retrieval + post-retrieval rerank/compress + structured generation |
| **Modular RAG** | Router + multiple retrievers + tools + loops + feedback |

---

## 🪄 Pre-Retrieval Techniques

| Technique | What it does | When |
|-----------|--------------|------|
| **Query expansion** | Add synonyms / domain terms | Sparse-retrieval boost |
| **Multi-query** | LLM generates K paraphrases; union the results | Ambiguous / vague queries |
| **HyDE** | LLM writes hypothetical answer; embed that | Technical/scientific corpora |
| **Decomposition** | Break multi-part queries into sub-queries | "Compare X and Y" |
| **Step-back** | Generate a more abstract version | When users ask narrow concrete things |
| **Routing** | LLM picks among retrievers | Heterogeneous data sources |

---

## 🎯 Retrieval Stack (Production Default)

```
hybrid = RRF(
  vector_db.search(embed(query), top_k=50, filter=meta_filters),
  bm25.search(query, top_k=50, filter=meta_filters)
)
reranked = reranker.rerank(query, hybrid, top_n=5–10)
```

**Filter dimensions:** tenant, time validity, source tier, doc type, language.

---

## 🪛 Post-Retrieval Techniques

| Technique | What it does |
|-----------|--------------|
| **Rerank** | Cross-encoder scores top-K; trim to top-N (Module 2) |
| **Contextual compression** | Extract only relevant sentences/spans |
| **Dedup** | Min-hash / Jaccard / diversity reranker |
| **Citation packing** | Annotate chunks with IDs; instruct LLM to cite by ID |

---

## 🤖 Production RAG Prompt Skeleton

```
SYSTEM:
You are a helpful assistant. Answer ONLY using the provided context.
- Cite claims by the bracketed source ID.
- If the context is insufficient, say "I don't know based on the provided sources."
- Do NOT invent information.
- Today's date is {TODAY}.

USER:
Context:
[1] (source: docs.example.com/x, valid 2024-2026) ...
[2] (source: blog.example.com/y, valid 2023) ...
[3] ...

Question: {USER_QUERY}
```

---

## 🧩 Modular RAG Patterns

| Pattern | When to use |
|---------|--------------|
| **Self-Querying** | Queries that mix natural text + structured constraints |
| **CRAG** | Need a web-search fallback when local corpus is weak |
| **Adaptive RAG** | High volume; some queries need no retrieval |
| **Self-RAG** | Research; requires fine-tuning |
| **Graph RAG** | Aggregative / global queries on relational data |
| **FLARE** | Long-form generation with mid-stream re-grounding |
| **Long-context only** | Tiny corpus (< 100K tokens); high-stakes one-shot |

---

## 📐 Full Production Anatomy

```
ingest → chunk → contextualize → embed → vector DB + BM25
                                            ↓
user query → preprocess → rewrite (MQ/HyDE) → retrieve hybrid → rerank → compress → 
generate (cite-required) → guardrails → return
                                            ↓
                                       observe (Langfuse) + eval (RAGAS sample)
```

---

## 🚨 Anti-Patterns

| Don't | Do |
|-------|-----|
| Skip pre-retrieval | Multi-query / HyDE / decomposition |
| Top-k=3 of raw retrieval | Top-50 → rerank → top-5 |
| Ignore source-trust | Tier and pre-filter |
| No "I don't know" path | Refusal license in system prompt |
| Stuff everything in 200K context | Retrieve + compress |
| Build modular before naive | Build naive first; instrument; layer |
| Skip CI eval | RAGAS in CI gating prod deploys |

---

## 📊 Confidence Gate (Klarna-style)

```
faith   = ragas_faithfulness(draft, retrieved_chunks)
rerank  = top1_reranker_score
logprob = avg_token_logprob(draft)

if faith < 0.7 OR rerank < 0.5 OR logprob < -1.5:
    escalate_to_human(draft, retrieved_chunks)
else:
    return draft
```

---

## 🏆 Exam Power Phrases

✅ Often **right**:
- "Hybrid retrieval (dense + BM25) with metadata pre-filter"
- "Reranker between retrieval and generation"
- "Citation-required prompt with refusal license"
- "RAGAS-in-CI on a golden set"
- "Source-trust tier + pre-filter"

❌ Often **wrong**:
- "Long context replaces RAG"
- "Top-k=3 of pure dense retrieval"
- "Skip pre-retrieval rewriting"
- "Confidence-blind generation"
- "No deduplication needed"

---

## 🗓️ Memorize Cold

- Gao 2024 taxonomy: Naive → Advanced → Modular
- HyDE = hypothetical answer embedded
- Multi-query, decomposition, step-back, routing
- Contextual retrieval (Anthropic Sep 2024) = -35% retrieval failure
- CRAG, Adaptive, Graph, FLARE, Self-RAG
- Lost-in-the-middle = real; design around it
- Refusal license = single highest-ROI prompt addition

---

➡️ [Module 4: LangChain & LlamaIndex](../Module-04-LangChain-LlamaIndex/Reading.md)
