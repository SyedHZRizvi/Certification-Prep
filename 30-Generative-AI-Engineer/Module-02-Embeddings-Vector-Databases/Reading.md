# Module 2: Embeddings & Vector Databases 📐

> **Why this module matters:** Retrieval is the single most production-critical skill in applied GenAI. The model is rented from a frontier lab; the *retrieval* is your competitive moat. A team that picks the wrong embedding model or vector DB doesn't just have a "slow" system — they have a *wrong* system, producing the wrong context, leading the LLM to produce the wrong answer with high confidence. This module is the engineering of finding the right needle in the right haystack.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - Module 1 (tokenization, vectors, basic attention)
> - Linear algebra: dot products and cosine similarity
> - Python data plumbing (`numpy`, basic SQL, REST APIs)
>
> If you can compute the cosine similarity between two vectors by hand on a 3-dimensional example, you are ready.

---

## 🎬 A Story: The Notion AI Q&A That Couldn't Find Its Own Memo

January 2024. Notion's AI team had just shipped "Q&A" — ask your workspace anything, get an answer grounded in your own documents. Closed beta. Then: a steady stream of bug reports that all looked the same.

> *"I asked Q&A about the offsite agenda. It said 'I don't see any information about the offsite.' But I wrote the memo last week, it's pinned to my home page, and search finds it instantly."*

Internal investigation. The pinned memo was in the index. The embedding lookup correctly returned the memo as the *fifth* most similar chunk. Q&A only fed the top three. Why was a perfectly relevant 600-word memo ranked fifth?

The cause turned out to be the **chunking strategy**. Notion's first chunker split documents at fixed token boundaries (every 512 tokens, no overlap). The memo's *agenda* section started 460 tokens into the document — and the chunker had split right *across* the agenda, so the heading was in one chunk and the bullet points were in the next. The embedding of the chunk that contained "Q4 offsite" plus a dozen paragraphs of unrelated CRM strategy was, in cosine-similarity space, dominated by "CRM" — so it ranked below three retrieval-poisoning blog drafts.

The fix wasn't a model upgrade. It was *chunking with overlap*, *header-aware splitting*, and a *small reranker* on top of the dense retriever. The embedding model — `text-embedding-3-small` — never changed.

In a survey of production GenAI postmortems Anthropic published in 2024, retrieval bugs accounted for **64% of "the AI got it wrong" tickets** at customers running RAG in production. Almost none were the LLM's fault. The LLM only knows what you give it. This module is how you give it the right thing.

---

## 📐 What Is an Embedding, Really?

An embedding is a **dense vector representation of text** (or any modality — image, audio, code) such that *semantically similar inputs produce nearby vectors* in some high-dimensional space.

"Nearby" is measured by:

- **Cosine similarity** — angle between vectors (1 = identical direction, 0 = orthogonal, -1 = opposite). Almost always the production default.
- **Dot product** — magnitude-aware; many embedding models are L2-normalized so dot product ≡ cosine.
- **Euclidean (L2) distance** — straight-line distance; rarely preferred for normalized embeddings.

Most production embeddings live in 384–3072 dimensions. The numbers themselves are uninterpretable — what matters is the *geometric structure* of the space the embeddings inhabit.

### Why this even works

A modern embedding model is itself a transformer (usually encoder-only, BERT-style) trained on contrastive learning: given pairs of (anchor, positive) and (anchor, negative), pull the anchor and positive together while pushing the anchor and negative apart. After billions of such pairs, the model learns a space where "semantic similarity" is captured by geometric proximity.

The most common contrastive frameworks:

- **InfoNCE** (Oord et al. 2018) — minimize the temperature-scaled negative log-likelihood of picking the positive among a batch of negatives.
- **Triplet loss** — minimize d(anchor, positive) − d(anchor, negative) + margin.
- **MultipleNegativesRankingLoss** — same family; widely used in sentence-transformers.

---

## 🏆 The Embedding Models Worth Knowing (2026)

The MTEB (Massive Text Embedding Benchmark) leaderboard at HuggingFace is the score that matters. The ranking moves; here is the current landscape of *production-relevant* models you should be ready to choose between.

| Model | Provider | Dim | Cost / 1M tok | Strengths |
|-------|----------|-----|----------------|-----------|
| **text-embedding-3-large** | OpenAI | 3072 (configurable 256–3072 via Matryoshka) | $0.13 | Strong general-purpose; very fast; widely supported |
| **text-embedding-3-small** | OpenAI | 1536 (configurable) | $0.02 | Cheapest reasonable choice; great default |
| **embed-v3** (English / Multilingual / Light) | Cohere | 1024 (light: 384) | $0.10 | Multilingual sweet spot; supports per-query `search_query` vs `search_document` separation |
| **voyage-3-large** | Voyage AI | 1024 (configurable) | $0.18 | Often top of MTEB; financial/legal/medical specialty variants |
| **voyage-code-3** | Voyage AI | 1024 | $0.18 | Code-specific; consistently top of CodeSearchNet |
| **BGE-large-en-v1.5 / m3** | BAAI | 1024 | self-hosted | Open-weight; m3 is multilingual+multilingual+multifunctional (dense + sparse + ColBERT in one model) |
| **e5-large-v2 / mistral-7b-instruct-embed** | Microsoft | 1024 / 4096 | self-hosted | E5: prefix queries with `query: ` and docs with `passage: `; Mistral-based variant is on top of MTEB |
| **jina-embeddings-v3** | Jina AI | 1024 (Matryoshka) | $0.05 | Task-conditioned LoRA adapters; very long context (8K input) |
| **nomic-embed-text-v1.5** | Nomic | 768 (Matryoshka 64–768) | self-hosted / cheap | Fully open (incl. training data); strong Matryoshka |
| **gte-large** | Alibaba DAMO | 1024 | self-hosted | Strong open-weight English |
| **all-MiniLM-L6-v2** | sentence-transformers | 384 | self-hosted | Tiny, blazing-fast, classic baseline |

### Asymmetric vs symmetric embedders

Modern retrieval-tuned embedders **distinguish queries from documents**. They have been contrastively trained on the actual asymmetry of search (short query, long document). Use the right "side":

- Cohere `embed-v3`: pass `input_type="search_query"` for the user query, `input_type="search_document"` for stored chunks
- E5: prepend `query: ` to queries, `passage: ` to documents
- BGE: prepend `Represent this sentence for searching relevant passages: ` to queries (or use the `bge-m3` API that handles it)

Forgetting the asymmetric prefix is *the* most common first-day bug. Quality can drop 5–15 points of MRR.

### Matryoshka representations

Open Matryoshka models (OpenAI text-embedding-3, Nomic, Jina v3) let you *truncate* the vector to a shorter prefix and still get usable similarity. A 3072-dim vector can be reduced to 256-dim with ~95% of the quality retained. This is critical for scale — storing 100M chunks at 3072 dims is 1.2 TB; at 256 dims, 100 GB.

---

## 🗄️ Vector Databases — The Landscape

A vector DB indexes vectors for **approximate nearest neighbor (ANN) search**. Exact nearest-neighbor on 100M vectors is too slow; ANN trades ~1–2% recall for 10–100× speed.

| DB | Hosted? | Open Source | Index | Sweet spot |
|----|---------|--------------|-------|------------|
| **Pinecone** | Managed only | No | Proprietary (likely HNSW + IVF hybrids) | Fastest path to production; serverless tier; biggest ecosystem |
| **Weaviate** | Managed + self-host | Apache 2.0 | HNSW | Strong hybrid search, GraphQL API, schema-typed |
| **Qdrant** | Managed + self-host | Apache 2.0 | HNSW (with optional disk-backed) | Rust-fast; rich filter pushdown; on-disk option for big data |
| **Chroma** | Managed (beta) + self-host | Apache 2.0 | HNSW | Dev/prototype-friendly; LangChain default; embedded mode |
| **pgvector** (Postgres) | Anywhere Postgres runs | OSS | HNSW / IVFFlat | When you already have Postgres and want one less moving part |
| **Milvus / Zilliz Cloud** | Managed + self-host | Apache 2.0 | HNSW, IVF-PQ, DiskANN, GPU indexes | Largest scale (billions of vectors); Kubernetes-native |
| **OpenSearch / Elasticsearch** | Managed + self-host | Apache 2.0 / Elastic License | HNSW | Already have ES for BM25? Add vectors. Hybrid lives natively here. |
| **Vespa** | Managed + self-host | Apache 2.0 | HNSW | Yahoo's serving engine; very fast hybrid + structured filters |
| **Redis (RediSearch)** | Anywhere Redis runs | Permissive | HNSW, FLAT | Low-latency lookup; small-to-medium scale |
| **LanceDB** | Embedded | Apache 2.0 | IVF-PQ on disk | Embedded "DuckDB-for-vectors"; popular in notebooks |
| **Turbopuffer** | Managed | No | Disk-first with S3-backed storage | Optimized for cost at scale; LangChain integration |

### The "what should I use" answer

There is no single right answer, but here's the production decision tree:

1. **Already running Postgres? Under ~10M vectors? Mostly text + structured filters?** → **pgvector**. The operational simplicity dominates.
2. **Need a managed service, don't want to think about it?** → **Pinecone serverless**. Lowest friction, highest unit cost at scale.
3. **Self-hosting, single team, mostly-text workloads, hybrid search?** → **Qdrant** or **Weaviate**. Both excellent; Qdrant is faster, Weaviate is more feature-rich (modules, schema, GraphQL).
4. **Billions of vectors, k8s shop?** → **Milvus** or **Zilliz Cloud**.
5. **Already have OpenSearch for logs?** → **OpenSearch vector** is the path of least resistance for hybrid search.
6. **Prototyping in a notebook?** → **Chroma** or **LanceDB**. Don't worry about scale yet.

🚨 **The classic mistake**: choosing a vector DB *first*, then designing retrieval around its limitations. You design retrieval around the *query patterns* (hybrid? metadata filters? per-tenant?), then pick the DB that matches.

---

## 🌲 ANN Indexes — Inside the Black Box

You don't have to implement these, but you have to *reason about them* when tuning.

### HNSW (Hierarchical Navigable Small World)

The dominant index in 2026. A multi-layer graph: top layer is a tiny "sparse highway" of long-distance shortcuts; bottom layer is dense and locally-connected. Search starts at the top layer, descends greedily.

**Key parameters:**
- **M** — number of bidirectional links per node. Higher M = higher recall + larger index. Typical: 16–48.
- **efConstruction** — search width at build time. Higher = better recall, slower build. Typical: 100–500.
- **efSearch** — search width at query time. Higher = better recall, slower query. Typical: 50–500.

**Trade-offs:** Excellent recall (often >99% with reasonable params); fast queries; **memory-hungry** (graph + vectors live in RAM); slow at insertion when M and efConstruction are large.

### IVF-PQ (Inverted File + Product Quantization)

Faiss's classic. Split the vector space into *nlist* clusters via k-means. At query time, search only the *nprobe* closest clusters (the "inverted file"). Then, compress vectors with *product quantization* — split each vector into M sub-vectors and quantize each into one of 256 codes (1 byte). 768-dim float32 vector (3072 bytes) → 96 bytes.

**Trade-offs:** Compact (10–30× smaller on disk than HNSW); great for billion-scale; recall is tunable but ceiling lower than HNSW; needs a training step.

### ScaNN (Google)

Anisotropic quantization + tree pruning. Top of recall@latency benchmarks for some workloads. Less common in OSS DBs.

### Annoy (Spotify)

Random projection forests. Easy to mmap. Falling out of fashion; HNSW is generally better.

### DiskANN

A graph index designed for SSDs, not RAM. Used in OpenAI's internal infra and increasingly in Milvus / Zilliz. The win: 100B vectors on a single machine.

### Recall vs latency trade-off

The single most important plot in your benchmarking spreadsheet:

```
Recall (e.g., recall@10)
     ▲
1.0  │ ┌────────────────────── HNSW (high M, high efSearch)
0.95 │ │
     │ │       ┌─────────────── IVF-PQ (high nprobe)
0.90 │ │       │
     │ │       │      ┌───── Flat (linear scan)
0.85 │ │       │      │
     └─┴───────┴──────┴────────► Latency (ms)
     0.5     5      50
```

Every config trades recall for latency. The right answer depends on your downstream LLM tolerance for missing-context: a chat assistant that synthesizes answers from 5 chunks can survive recall=0.92; an "exact lookup" tool cannot.

---

## ✂️ Chunking — The Most Underrated Skill

If you remember nothing else, remember **chunking is half the battle**.

### Fixed-size chunking

Split every N tokens (or characters). Cheap, lossy, often catastrophic.

```python
def chunk(text, size=512, overlap=64):
    tokens = tokenizer.encode(text)
    return [tokens[i:i+size] for i in range(0, len(tokens), size - overlap)]
```

**Pros:** Trivially simple. Predictable lengths.
**Cons:** Splits mid-sentence, mid-paragraph, mid-table. Headings get separated from body. Code gets split across function definitions.

### Recursive character splitting (LangChain default)

Try splitting at `\n\n` first; if a chunk is still too big, try `\n`, then `. `, then ` `, then character-by-character. Far better than fixed-size for prose.

### Structure-aware chunking

- **Markdown-aware**: respect heading hierarchy, preserve heading + body together
- **HTML-aware**: split at semantic tags
- **Code-aware**: split at function/class boundaries (tree-sitter)
- **Slide / table aware**: keep tables atomic; split slides at slide boundaries

### Semantic chunking

Embed each sentence, find natural "breakpoints" where consecutive-sentence similarity drops below a threshold. Slow but produces semantically-coherent chunks. Practical in offline batch indexing; less so in real-time.

### Late chunking (Jina, 2024)

A 2024 innovation: embed the *entire long document* with a long-context embedder, *then* pool over chunk-spans afterwards. The chunk embeddings inherit the document's full-context signal. ~10–20% retrieval quality gain on long-doc benchmarks.

### Contextual retrieval (Anthropic, Sep 2024)

Before embedding each chunk, prepend a 50-100 token *context summary* generated by an LLM ("This chunk is part of a Q4 2024 earnings call discussing data center capex"). Anthropic reported a **35% reduction in retrieval failure rate** on their internal benchmarks. The cost: one cheap-model call per chunk at index time. We will revisit this in Module 3.

### Chunk size rule-of-thumb

| Document type | Chunk size | Overlap |
|---------------|------------|---------|
| Q&A from FAQs | 200–400 tokens | 50 tokens |
| Long-form articles | 500–800 tokens | 100 tokens |
| Code | function-level (variable) | 1 line |
| Slides / PDFs | 1 slide / 1 page each | none |

🎯 **Default sane setting**: 512 tokens with 128-token overlap, header-aware splitting, contextual retrieval if budget allows. You will iterate from here.

---

## 🔀 Hybrid Search — Why Pure Vector Loses

Dense retrieval (embedding similarity) is *semantic* — it captures meaning. Sparse retrieval (BM25, TF-IDF) is *lexical* — it captures exact term matching. **They fail in different ways and complement each other beautifully.**

- A user types a part number (`A37B-9921-EX`). BM25 nails it; embedding gives random adjacent chunks.
- A user asks "how do I refund a customer who paid with crypto?" Embedding shines; BM25 misses because the docs say "process a chargeback to a digital-asset wallet."

**Hybrid retrieval** runs both, then **fuses** the results.

### Reciprocal Rank Fusion (RRF)

The default. For each document, sum 1/(k + rank) across all retrievers. k=60 is standard. Robust, parameter-free, works on heterogeneous score distributions.

```
RRF_score(d) = Σ over retrievers (1 / (60 + rank_in_that_retriever(d)))
```

### Weighted score combination

Convex combination: `score = α · dense_score + (1 − α) · sparse_score`. Requires careful score normalization. RRF is easier; use it unless you have a specific reason not to.

### Sparse embeddings: SPLADE, BGE-M3 sparse

SPLADE (Sparse Lexical and Expansion model, Naver Labs) and BGE-M3's sparse-vector head produce *learned-sparse* representations — high-dimensional, mostly-zero vectors keyed by vocabulary terms. They fuse with dense embeddings better than BM25 because the score distributions are closer.

---

## 🎯 Reranking — The 80% Win for 5% More Latency

After your retriever returns the top-K (say K=50), a **reranker** scores each (query, document) pair *individually* with a cross-encoder. Then keep the top-N (say N=5) for the LLM.

Why this works: the bi-encoder (your embedding model) had to encode the query and doc *independently*; cross-encoders see them *together* and can capture interaction signals that bi-encoders miss.

**The 80/5 rule:** the right reranker often closes 80% of the gap to ideal retrieval at the cost of ~5% extra latency.

| Reranker | Provider | Notes |
|----------|----------|-------|
| **Cohere Rerank 3** | Cohere | Best general-purpose API rerank. Multilingual. |
| **Voyage rerank-2** | Voyage AI | Strong; financial / legal variants |
| **bge-reranker-v2-m3** | BAAI | Open-weight; runs on a single GPU |
| **ColBERT v2 / PLAID** | Stanford / Vespa | Late-interaction; sometimes used as retriever-and-reranker |
| **MS MARCO cross-encoders** | sentence-transformers | Classic baselines; small + fast |

### ColBERT — late-interaction retrieval

ColBERT encodes the query as N token vectors and the document as M token vectors. The similarity is MaxSim over token pairs. More expressive than bi-encoder (single-vector), more efficient than full cross-encoder. Vespa has the most production-grade ColBERT implementation; PLAID is the optimized successor.

---

## 🔍 Filter Pushdown and Metadata

Vector DBs let you attach metadata (tenant, document type, date, ACL) and *filter* during retrieval. Critical for:

- **Multi-tenant systems** — must filter by `tenant_id` BEFORE the ANN search, not after (filtering after defeats the speed of ANN).
- **Time-bounded queries** — "knowledge from the last 90 days only."
- **Access control** — users only see chunks they're authorized for.

**Pre-filter vs post-filter** is a real DB-engineering distinction. Pre-filter integrates with the index (Qdrant, Weaviate are strong here); post-filter trims after retrieval (cheap to implement, dangerous at scale). Ask your vendor.

---

## 🚨 Anti-patterns

| Anti-pattern | What goes wrong |
|--------------|------------------|
| Embedding queries and docs with the same `input_type` on an asymmetric model | -5 to -15 points MRR; common day-1 bug |
| Re-embedding everything when you upgrade the model | Forces dual-write or downtime; instead version-tag embeddings and migrate gradually |
| Hardcoding `top_k=3` everywhere | One bad chunk now poisons every answer; pull 20–50, rerank, take 3–5 |
| Skipping hybrid + reranking | Pure vector loses ~10–25% recall on exact-match queries |
| Storing 3072-dim float32 vectors at scale | Pure cost waste; use Matryoshka truncation or PQ |
| Indexing without metadata | Multi-tenant data leakage on first incident |
| Using cosine similarity on non-normalized vectors | Score distributions get weird; normalize first |

---

## 🏗️ Lab: Embedding-Model Benchmark + Pinecone vs pgvector

Goal: index a 5,000-document corpus (use the MS MARCO mini split or the BEIR `scifact` set) into both Pinecone (serverless) and pgvector (a managed Postgres instance — Neon, Supabase, or local). Run 200 queries through each, measure latency p50/p95/p99, retrieval recall@10 with three embedding models (`text-embedding-3-small`, `bge-large-en-v1.5`, `cohere/embed-v3`), and produce a single table comparing recall and dollar-cost-per-1K-queries.

Stretch: add a BM25 retriever and demonstrate RRF hybrid + Cohere reranker. Report the recall gain.

You will not get a single "winner." You will get a *decision matrix* — which is what production architecture looks like.

---

## 📊 Case Study — Anthropic's Contextual Retrieval (September 2024)

**Situation.** Anthropic announced "contextual retrieval" in a blog post on September 19, 2024. The setup: standard RAG was failing on their own internal documentation because chunks lost meaning when separated from their parent document. A chunk that said "the function returns 200 on success" gave no signal about *which* function in *which* API.

**The technique.** At index time, for each chunk, ask Claude Haiku to generate a 50–100 token *contextualization* — "this chunk is from the Authentication section of the v3 API docs and describes the response of POST /token." Prepend this to the chunk before embedding. Apply the same contextualization at sparse-retrieval (BM25) time.

**Results, on Anthropic's eval set:**
- Embedding-only retrieval failure rate: 5.7%
- Embedding + BM25 hybrid failure rate: 4.1%
- Embedding + BM25 + **contextual retrieval**: 2.9% failure
- Embedding + BM25 + contextual retrieval + Cohere reranking: **1.9% failure** — a **67% reduction** vs baseline

**The cost.** Each chunk needs one Haiku call. With prompt caching (the same parent document is used to contextualize every chunk inside it), the cost is roughly $1 per million chunks contextualized. Negligible compared to inference cost.

**The lesson.** Retrieval quality has been the bottleneck of RAG for two years. Contextual retrieval, hybrid search, and reranking *each* close ~30-50% of the failure-rate gap. Combine them and you've often solved the problem without touching the LLM.

**Discussion (Socratic).**
- **Q1:** Contextual retrieval requires writing to the index. What happens if your corpus changes daily and you have 1B chunks? Is there a streaming-friendly variant?
- **Q2:** Why does contextualizing help BM25 (a lexical retriever) and not just dense embeddings? Walk through the mechanism.
- **Q3:** Estimate the *embedding storage cost* of running contextual retrieval on a 10M-chunk corpus with `text-embedding-3-large` at full 3072-dim. Then estimate it at 256-dim via Matryoshka. Where does the trade-off start to break down?

---

## ✅ Module 2 Summary

You now know:

- 📐 What an embedding is, how it's trained (contrastive), and how to measure similarity (cosine)
- 🏆 The 2026 lineup: OpenAI text-embedding-3, Cohere embed-v3, Voyage, BGE, E5, Jina, Nomic
- 🗄️ The vector-DB decision tree: Pinecone, Weaviate, Qdrant, Chroma, pgvector, Milvus, OpenSearch, Vespa, Redis, LanceDB, Turbopuffer
- 🌲 ANN indexes: HNSW (the default), IVF-PQ (compact), ScaNN, DiskANN
- ✂️ Chunking strategies: fixed, recursive, structure-aware, semantic, late, **contextual**
- 🔀 Hybrid search: dense + BM25 fused with RRF; SPLADE / BGE-M3 sparse
- 🎯 Reranking: Cohere rerank, Voyage rerank, ColBERT, bge-reranker — the 80/5 rule
- 🔍 Metadata filtering: pre-filter vs post-filter, multi-tenancy

**Next steps:**
1. 🎥 Watch [Videos.md](./Videos.md) — start with the contextual-retrieval Anthropic post + Pinecone deep dive
2. ✏️ Take the [Quiz.md](./Quiz.md)
3. 📋 Review the [Cheat-Sheet.md](./Cheat-Sheet.md)
4. ➡️ Move on: [Module 3 — RAG Architecture](../Module-03-RAG-Architecture/Reading.md)

> **Where this leads.**
> - **Inside this course:** Module 3 builds end-to-end RAG on top of this — the embeddings + DB are the *retrieval* layer of every RAG pipeline. Module 9 covers semantic caching, which is yet another use of embeddings.
> - **Cross-course:** Course 07 (AWS AI Practitioner) covers Bedrock Knowledge Bases at a higher level; this module is the engineer's view of the same primitives.

---

## 📚 Further Reading (Optional)

**Foundational papers:**
- 📄 Karpukhin et al. (2020). *Dense Passage Retrieval for Open-Domain Question Answering.* DPR.
- 📄 Reimers & Gurevych (2019). *Sentence-BERT.* sentence-transformers.
- 📄 Khattab & Zaharia (2020). *ColBERT.*
- 📄 Malkov & Yashunin (2018). *Efficient and robust approximate nearest neighbor search using HNSW.*
- 📄 Formal et al. (2021). *SPLADE: Sparse Lexical and Expansion Model.*
- 📄 BAAI BGE & m3 papers (2023–2024).
- 📄 Anthropic (Sep 2024). *Contextual Retrieval* blog post + benchmark code.

**Tutorials:**
- 📖 *Hands-On Large Language Models* (Alammar & Grootendorst, O'Reilly 2024) — Chapters 5–7
- 📖 LangChain's "Retrieval" docs
- 📖 LlamaIndex's "Retrieval-Augmented Generation" guide
- 🎬 Greg Kamradt's chunking strategies playlist
- 🌐 [MTEB Leaderboard](https://huggingface.co/spaces/mteb/leaderboard) — bookmark it; check quarterly

**Open-source labs to clone:**
- 💻 Anthropic's `contextual-retrieval` recipe (GitHub)
- 💻 Pinecone's `text-embedding-3` cookbook
- 💻 `pgvector/pgvector` repo + Supabase's pgvector tutorial
