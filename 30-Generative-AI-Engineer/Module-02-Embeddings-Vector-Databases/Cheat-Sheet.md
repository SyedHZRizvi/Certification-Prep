# 📋 Module 2 Cheat Sheet: Embeddings & Vector Databases

> One page. Tape this to your monitor before any RAG sprint.

---

## 📐 Embedding Models (2026)

| Model | Dim | $ / 1M tok | Best at |
|-------|-----|-------------|---------|
| OpenAI text-embedding-3-small | 1536 (Matryoshka) | $0.02 | Cheap general-purpose |
| OpenAI text-embedding-3-large | 3072 (Matryoshka) | $0.13 | Stronger; widely supported |
| Cohere embed-v3 (Eng/Multi) | 1024 (light: 384) | $0.10 | Multilingual; asymmetric |
| Voyage voyage-3-large | 1024 | $0.18 | Top MTEB; legal/medical variants |
| Voyage voyage-code-3 | 1024 | $0.18 | Code |
| BGE-large-en-v1.5 / m3 | 1024 | self-host | Open-weight; m3 is unified dense/sparse/ColBERT |
| E5-large-v2 | 1024 | self-host | Strong; use `query: ` / `passage: ` prefixes |
| Mistral-7B-Instruct-embed | 4096 | self-host | Top MTEB open-weight |
| Jina embeddings v3 | 1024 | $0.05 | Task LoRA adapters, 8K input |
| Nomic embed v1.5 | 768 | self-host | Fully open + Matryoshka |
| all-MiniLM-L6-v2 | 384 | self-host | Tiny + fast baseline |

🚨 **Asymmetric models — get the prefix right** (`input_type` for Cohere, `query: `/`passage: ` for E5, BGE has its own prompt).

---

## 🗄️ Vector DB Decision Tree

| Situation | Pick |
|-----------|------|
| Already on Postgres, < 10M vectors | **pgvector** |
| Managed, fast time-to-market | **Pinecone serverless** |
| Self-host, single team, hybrid + filters | **Qdrant** or **Weaviate** |
| Billions of vectors, k8s | **Milvus** / **Zilliz Cloud** |
| Already on OpenSearch | **OpenSearch vectors** |
| Notebook / prototype | **Chroma** or **LanceDB** |
| Optimized for low-cost at scale | **Turbopuffer** |
| Yahoo / Vespa-style serving | **Vespa** |

---

## 🌲 ANN Index Cheat Sheet

| Index | Memory | Recall ceiling | Insertion | Best at |
|-------|--------|----------------|-----------|---------|
| **HNSW** | High (RAM) | Highest | Slow at high M | Default |
| **IVF-PQ** | Low (disk-friendly, quantized) | Medium-high | Needs training | Billion-scale |
| **DiskANN** | Disk + small RAM | High | Slow | Cost-sensitive scale |
| **Flat** | Linear | 100% | Trivial | Small data, exact |
| **Annoy** | Low | Medium | Build-once | Legacy |

**HNSW tuning:**
- `M` = 16–48 (links per node)
- `efConstruction` = 100–500 (build width)
- `efSearch` = 50–500 (query width — recall ↑ but latency ↑)

---

## ✂️ Chunking Cheatsheet

| Strategy | When |
|----------|------|
| Fixed N tokens | Avoid in prod |
| Recursive char split (LC default) | Sane prose default |
| Header-aware (Markdown/HTML) | Structured docs |
| Code-aware (tree-sitter) | Codebases |
| Semantic (sentence-level breakpoints) | Offline indexing |
| **Late chunking** (Jina 2024) | Long docs; +10–20% retrieval |
| **Contextual retrieval** (Anthropic 2024) | -35% retrieval failure |

**Default**: 512 tokens, 128 overlap, header-aware splitting.

---

## 🔀 Hybrid Search Recipe

```
results = RRF(
  dense_retriever.search(query, k=50),
  bm25_retriever.search(query, k=50),
  k=60
)
reranked = reranker.rerank(query, results, top_n=5)
```

**Fusion choices:** Reciprocal Rank Fusion (default), weighted score (needs normalization).

---

## 🎯 Rerankers

| Reranker | Provider | Notes |
|----------|----------|-------|
| Cohere Rerank 3 | API | Best general-purpose; multilingual |
| Voyage rerank-2 | API | Domain variants |
| bge-reranker-v2-m3 | Open weight | Single-GPU friendly |
| ColBERT v2 / PLAID | Open weight | Late-interaction; Vespa-native |
| MS MARCO cross-encoders | Open weight | Tiny + fast |

**Rule of thumb:** Retrieve 30–100 candidates; rerank to 5–10. ~5% latency for 80% of the quality gap.

---

## 📐 Similarity Math

```
cosine_sim(a, b) = (a · b) / (||a|| · ||b||)
                 = a · b      if both L2-normalized
```

- 1 = identical direction
- 0 = orthogonal
- -1 = opposite

**Always L2-normalize before storing.**

---

## 💾 Storage Math

- float32: 4 bytes/dim
- fp16 / bf16: 2 bytes/dim
- int8: 1 byte/dim (with calibration)
- PQ (Product Quantization): ~0.1–0.3 bytes/dim
- Binary embedding: 1 bit/dim

**Example:** 1B vectors × 1024 dim × 4 bytes = **4 TB float32**. Same in PQ: ~100 GB.

---

## 🚨 Anti-Patterns

| Don't | Do |
|-------|-----|
| Use the same `input_type` for queries and docs | Pass the asymmetric prefix |
| Re-embed corpus to roll out new model | Dual-index; tag with model version |
| Hardcode `top_k=3` | Pull 30–100, rerank, take 5–10 |
| Skip BM25 + reranker | Hybrid + rerank is the production baseline |
| Post-filter on multi-tenant data | Pre-filter via metadata at the index |
| Store 3072-dim float32 at 100M scale | Matryoshka truncate or PQ-quantize |

---

## 🏆 Exam Power Phrases

✅ Often **right**:

- "Hybrid retrieval (dense + BM25) plus a reranker"
- "Pre-filter on tenant metadata at the index level"
- "Header-aware chunking with overlap and contextualization"
- "Cosine similarity on L2-normalized vectors"
- "Tag embeddings with model version for migrations"

❌ Often **wrong**:

- "Pure vector search is always best"
- "Top-K=3 of raw dense retrieval is enough"
- "Re-embed when upgrading a model" (without versioning)
- "Filter after retrieval" (in multi-tenant)
- "One chunking strategy fits all corpora"

---

## 🗓️ Memorize Cold

- HNSW = default ANN index in HNSWlib, Faiss, pgvector, Qdrant, Weaviate, Milvus, Pinecone
- BM25 ≈ TF-IDF with length normalization; sparse, exact-term
- RRF = Σ 1/(60 + rank_i)
- Cohere/Voyage/BGE rerankers; Cohere is the API default
- Anthropic contextual retrieval = 67% failure reduction when combined
- Matryoshka = same-vector-different-dim trick; OpenAI text-embedding-3, Nomic, Jina

---

➡️ [Module 3: RAG Architecture](../Module-03-RAG-Architecture/Reading.md)
