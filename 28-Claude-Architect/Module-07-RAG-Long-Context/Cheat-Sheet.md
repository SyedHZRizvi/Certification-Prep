# 📋 Module 7 Cheat Sheet: RAG & Long-Context

> One page. Tape it next to your vector DB credentials.

---

## 🧭 RAG vs Stuff — Decision Rule

```
Per-query relevant corpus < ~150K tokens?
├── YES → STUFF (with caching, citations, careful question placement)
└── NO  → RAG (chunk + embed + hybrid retrieve + rerank + Claude)

Corpus < 300K total + slowly changing → STUFF
Corpus 300K – 5M, slowly changing → Simple RAG
Corpus > 5M or rapidly changing → Full RAG (re-indexing pipeline)
```

---

## 🧊 Stuffed-Context Recipe

```python
client.messages.create(
  model="claude-sonnet-4-6-...",
  max_tokens=...,
  system=[{
    "type":"text",
    "text":"You are an analyst. Answer using ONLY <document>. Cite section IDs.",
    "cache_control":{"type":"ephemeral"}
  }],
  messages=[{
    "role":"user",
    "content":[
      {"type":"text","text":f"<document>{full_doc_text}</document>",
       "cache_control":{"type":"ephemeral"}},        # ← cache the doc
      {"type":"text","text":f"QUESTION: {user_q}"}   # ← question at END
    ]
  }]
)
```

Place the **question at the end**. Cache the document. Use citations.

---

## 🔍 Classic RAG Pipeline

```
INGEST (offline):
  Docs → Chunker → (optional Contextual Prefix) → Embeddings → Vector DB + BM25 index

QUERY (online):
  User query → Embed → Vector top-K + BM25 top-K → Merge (RRF) → Rerank → top-N
            → Claude with retrieved chunks → Answer with citations
```

---

## 🧠 Contextual Retrieval (Anthropic, Sept 2024)

For each chunk during ingestion, generate a 50-100 token context prefix using Claude (Haiku is fine, with full doc cached). Prefix the chunk, then embed.

```text
[Context: This chunk is from ACME Corp Q2 2024 earnings filing,
 in the YoY financial performance section.]
The company's revenue grew 3% over the previous quarter.
```

**Headline numbers:**
| Setup | Failure rate reduction |
|-------|------------------------|
| Contextual prefix only | **35%** |
| + Hybrid retrieval (BM25) | **49%** |
| + Reranker | **67%** |

Ingestion cost (with full-doc caching): **~$1.02 per million tokens**.

---

## 📑 Citations — Two Patterns

### Inline (prompt-based)

```text
For every claim, cite [chunk_id]. If not in chunks, say so.
```

### Native Citations API

```python
messages=[{
  "role":"user",
  "content":[
    {"type":"document",
     "source":{"type":"text","media_type":"text/plain","data":FULL_DOC},
     "citations":{"enabled":True}},
    {"type":"text","text":"What is the refund policy?"}
  ]
}]
```

Returns response with citation blocks containing character-offset spans.

---

## 🧱 Chunking

| Strategy | When |
|----------|------|
| Naive split (N tokens) | Quick start; uniform docs |
| Recursive (`\n\n` → `\n` → `.` → N) | General-purpose default |
| Semantic boundary | When topics shift mid-doc |
| Document-structure-aware (headings) | Markdown / HTML / structured |

**Sweet spot:** 500–1000 tokens, **10–15% overlap**.

---

## 🔢 K (number of retrieved chunks)

| Question type | K |
|---------------|---|
| Narrow factual | 3–5 |
| Broad | 10–20 |
| High-precision (rerank) | 50–150 → top-20 |

---

## 🤝 Hybrid Retrieval Merge

| Method | Notes |
|--------|-------|
| **Reciprocal Rank Fusion (RRF)** | Combine multiple result lists by rank reciprocals — robust default |
| **Weighted score fusion** | Tune α × semantic_score + (1-α) × bm25_score |
| **Cross-encoder rerank** | Best precision; higher latency |

---

## 🧮 Embedding Models (Common Picks for Claude)

| Model | Use |
|-------|-----|
| **voyage-3-large / voyage-3.5** | Best general-purpose; Anthropic partner |
| **voyage-code-3** | Code |
| **voyage-finance-2** | Finance docs |
| **voyage-law-2** | Legal |
| **voyage-multilingual-2** | Multi-language |
| OpenAI `text-embedding-3-large` | Works fine; ecosystem inertia |
| Cohere `embed-v3` | Strong; multilingual |
| Open-source (nomic, jina) | When self-hosting required |

**Always eval on YOUR domain.** General benchmarks ≠ your data.

---

## 🗄️ Vector DBs (Choose Your Fighter)

| DB | Strength | When |
|----|----------|------|
| **Pinecone** | Managed, simple | <100M vectors, hate ops |
| **Weaviate** | Hybrid built-in | Want batteries-included |
| **Qdrant** | Open-source, fast | Self-host, control |
| **pgvector** | Postgres extension | <10M vectors, already on Postgres |
| **Chroma** | Python-first DX | Prototyping, small scale |
| **LanceDB** | Rust core, great DX | Modern stack |
| **Turbopuffer** | Cost-optimized | Massive scale, cost-sensitive |
| **Elasticsearch / OpenSearch** | Search + dense | Already have ES |

---

## 🪟 1M Context Beta

```python
extra_headers={"anthropic-beta":"long-context-1M-2025-01-01"}  # name varies
```

Cost: **~$3/call** Sonnet at full 1M. Use when:

- One coherent task needs >200K
- Engineering+ops cost of a RAG alternative would exceed the premium
- Caching can amortize the cost across many queries

---

## 🔬 Hybrid Patterns

| Pattern | When |
|---------|------|
| **RAG-then-stuff** | Retrieve top-5 large docs, stuff them all (~150K) |
| **Stuff-then-summarize** | Generate per-doc abstracts, RAG over abstracts |
| **Two-tier (cheap RAG + expensive stuff)** | Haiku RAG → top-5 → Sonnet stuffing |
| **Agentic RAG** | Claude agent iterates retrievals until sufficient |

---

## 🏆 Exam Power Phrases

✅ Often **right**:

- "Stuff if it fits; RAG when the corpus is too big"
- "Contextual prefixes reduce retrieval failure ~35%"
- "Hybrid (semantic + BM25) beats pure semantic on exact-match terms"
- "Reranker is the last-mile precision win"
- "Citations API gives machine-readable spans"
- "Voyage is the recommended embedding partner"

❌ Often **wrong**:

- "RAG is always better than long-context"
- "Bigger context = always better"
- "Citations API replaces RAG"
- "1M context is free"
- "K=3 is always enough"

---

## 🗓️ Key Facts To Memorize Cold

- Sonnet 4.6 standard: **200K** tokens; beta: **1M**
- Contextual Retrieval numbers: **35% / 49% / 67%** (contextual / + hybrid / + reranker)
- Chunk size sweet spot: **500-1000** tokens, **10-15%** overlap
- Embedding partner: **Voyage AI**
- Question goes **at the end** of long-context prompts
- Native Citations: `type:"document"` blocks with `citations:{enabled:true}`
- Cache the document; pay-once for ingestion-time context generation
- Module 7 domain: **10% of the assessment**

---

## ✏️ Quick Self-Check

1. Decision rule for RAG vs stuff? ___
2. Contextual Retrieval — what + headline number? ___
3. Hybrid retrieval merging algorithm name? ___
4. When does 1M-context beta justify its cost? ___
5. Native Citations field on document content blocks? ___

If you answer all 5 in 60 seconds, you own this module. ✅

---

➡️ [Module 8: Production Patterns & Safety](../Module-08-Production-Patterns-Safety/Reading.md)
