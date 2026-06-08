# ✏️ Module 2 Quiz: Embeddings & Vector Databases

> 26 questions. Aim for 22/26. **Bloom distribution:** Remember 6 · Understand 7 · Apply 7 · Analyze/Evaluate 5 · Create 1.

---

## Questions

### Q1. The primary similarity metric used in production retrieval is: *(Remember)*
A. Hamming distance
B. Cosine similarity (or equivalently, dot product on L2-normalized vectors)
C. Manhattan distance
D. Levenshtein distance

---

### Q2. An "asymmetric" embedder like Cohere embed-v3 requires the caller to: *(Understand)*
A. Submit only the query
B. Submit identical strings for query and document
C. Pass `input_type="search_query"` for queries and `input_type="search_document"` for indexed chunks
D. Use a different model for retrieval

---

### Q3. HNSW is best characterized as: *(Remember)*
A. A tree-based exact-search index
B. A multi-layer navigable small-world graph for approximate nearest neighbor
C. A linear-scan brute-force algorithm
D. A SQL-on-vectors engine

---

### Q4. A 768-dim vector stored as float32 occupies how many bytes? *(Apply)*
A. 768
B. 1536
C. 3072
D. 6144

---

### Q5. Pre-filter vs post-filter in vector search: in a multi-tenant SaaS with millions of vectors per tenant, which is correct? *(Analyze)*
A. Always post-filter for speed
B. Always pre-filter so the ANN index never has to consider out-of-tenant vectors
C. Filter doesn't matter
D. Random sampling

---

### Q6. Matryoshka representations allow a 3072-dim embedding to be: *(Understand)*
A. Used as-is only at full dim
B. Truncated to a shorter prefix (e.g., 256) while preserving most quality
C. Compressed to a single float
D. Stored only in binary form

---

### Q7. A vector index with M=32 and efSearch=200 (HNSW) is being tuned. Increasing efSearch will MOST likely: *(Apply)*
A. Decrease memory usage
B. Improve recall at the cost of higher query latency
C. Make insertion faster
D. Reduce dimensionality

---

### Q8. The PRIMARY trade-off of IVF-PQ vs HNSW is: *(Analyze)*
A. IVF-PQ has higher recall ceiling than HNSW
B. IVF-PQ is dramatically more memory-efficient (10–30×) at the cost of a slightly lower recall ceiling
C. HNSW only works on small datasets
D. They are identical

---

### Q9. Reciprocal Rank Fusion (RRF) combines rankers via: *(Remember)*
A. Average of normalized scores
B. Sum of 1/(k + rank_i(d)) across retrievers
C. Multiply scores
D. Random selection

---

### Q10. The Notion AI Q&A "missing memo" bug from the reading was MOST attributable to: *(Analyze)*
A. The embedding model
B. Chunking strategy splitting a heading from its body, plus too-aggressive top-K and no reranker
C. Slow network
D. Wrong vector DB

---

### Q11. Why does a reranker close most of the retrieval-quality gap to a "perfect" retriever for ~5% extra latency? *(Understand)*
A. Rerankers re-embed at higher dim
B. Cross-encoders see (query, doc) together and capture interaction signals that bi-encoders miss
C. Rerankers cache aggressively
D. Rerankers ignore the query

---

### Q12. ColBERT differs from a standard bi-encoder by: *(Understand)*
A. Encoding query as N token vectors and doc as M token vectors; scoring via MaxSim
B. Using only a single vector per document
C. Running on CPU only
D. Skipping the encoder

---

### Q13. A user runs a search for the part number `A37B-9921-EX`. The pure-vector retriever returns nothing relevant. The MOST likely cause: *(Apply)*
A. The embedding model is broken
B. Exact-match lookups are the failure mode of dense retrieval; a BM25 (sparse) component is needed
C. Wrong DB
D. The part doesn't exist

---

### Q14. The recommended *default* chunking baseline if you have no other constraints: *(Apply)*
A. Fixed 200 tokens, no overlap
B. Recursive character splitter, ~512 tokens, 128-token overlap, header-aware
C. Random splits at every paragraph
D. One chunk per document, no splitting

---

### Q15. Anthropic's contextual retrieval improves retrieval by: *(Understand)*
A. Re-training the embedding model
B. Prepending an LLM-generated context summary to each chunk before embedding (and BM25)
C. Using a bigger model
D. Removing chunking entirely

---

### Q16. A team is choosing a vector DB and they (a) already run Postgres, (b) have <5M chunks, (c) need rich metadata filters. The MOST pragmatic choice: *(Evaluate)*
A. Pinecone serverless
B. pgvector
C. Milvus on Kubernetes
D. Build one from scratch

---

### Q17. Late chunking (Jina, 2024) works by: *(Understand)*
A. Chunking later in the pipeline
B. Embedding the entire long document, *then* pooling per-chunk over the contextualized token embeddings
C. Doing nothing
D. Caching chunks

---

### Q18. The product of the embedding dimension and the corpus size dominates: *(Analyze)*
A. Query latency
B. Storage cost and memory footprint of the index
C. Tokenization speed
D. Model training time

---

### Q19. SPLADE produces: *(Remember)*
A. Dense float vectors only
B. Learned-sparse high-dimensional vectors keyed by vocabulary terms
C. Audio embeddings
D. Image segmentations

---

### Q20. A team upgrades from `text-embedding-3-small` to `text-embedding-3-large` (different dimensionality and trained differently). The CORRECT migration approach: *(Apply)*
A. Do nothing, vectors are interchangeable
B. Re-embed the corpus into a new index; route traffic gradually; tag embeddings with model version
C. Truncate the new vectors to match the old dimensions
D. Average the two

---

### Q21. Pure vector retrieval recall on exact-term queries (part numbers, SKUs, IDs) is typically: *(Analyze)*
A. Higher than BM25
B. Roughly the same as BM25
C. Lower than BM25, exact-token matches are sparse-retrieval's strength
D. Identical to BM25

---

### Q22. The MOST important reason to limit `top_k` retrieved chunks (not just memory): *(Analyze)*
A. Cost of the vector DB
B. Each extra chunk consumes the LLM context window and risks "lost in the middle"
C. Network latency
D. There's no good reason

---

### Q23. A production team wants the highest open-source MTEB score for English retrieval. Plausible candidates today: *(Evaluate)*
A. word2vec
B. Mistral-7B-Instruct-embed, BGE-M3, or voyage-3-large (closed)
C. Random vectors
D. GPT-2 hidden states

---

### Q24. Cross-encoders (rerankers) are slower than bi-encoders BECAUSE: *(Understand)*
A. They run on CPU only
B. They must run a full transformer pass on every (query, candidate) pair, instead of pre-computing document embeddings
C. They have more parameters
D. They are not slower

---

### Q25. A 1B-document corpus needs vector search with <10 ms p95 latency. The MOST plausible architecture: *(Evaluate)*
A. Flat brute-force search
B. DiskANN or IVF-PQ on a horizontally sharded vector DB (Milvus / Zilliz / Vespa), with pre-filtering by metadata
C. Single-node Chroma
D. SQLite

---

### Q26. Design challenge: a customer-support knowledge base of 2M articles, multilingual (10 languages), needs <300ms p95 retrieval, must filter by `product`, `language`, and `region`. Design the MINIMUM viable retrieval stack. *(Create)*
A. Single OpenAI embedding-3-large index in pure vector search
B. Cohere embed-v3 multilingual + Qdrant with pre-filter on metadata + RRF hybrid with BM25 + Cohere Rerank 3
C. BERT base + brute-force scan
D. GPT-4 to embed each chunk one at a time on every query

---

## 🎯 Answers + Explanations

### Q1: **B. Cosine similarity (or dot product on normalized vectors)**
Cosine measures angle, normalizing out magnitude. Most modern embedders L2-normalize their output, making cosine ≡ dot product.

### Q2: **C. `input_type` separates queries from documents**
Cohere's embed-v3 was trained asymmetrically, queries and documents land in different spots of the space. Get the prefix wrong and you lose 5–15 MRR points.

### Q3: **B. Multi-layer navigable small-world graph for ANN**
Hierarchical layers; top is sparse highway, bottom is locally dense. Search descends greedily.

### Q4: **C. 3072 bytes**
768 × 4 bytes (float32). Quantization (int8, fp16) cuts this proportionally.

### Q5: **B. Pre-filter so the ANN index doesn't waste work on irrelevant vectors**
Post-filtering after retrieving top-K wastes K candidates and may return zero results for a tenant if all top-K were other tenants'.

### Q6: **B. Truncated to a shorter prefix and still retain quality**
The Matryoshka training objective encourages the first K dims to be a competent embedding on their own. 256 of 3072 dims = ~95% quality, ~12× storage savings.

### Q7: **B. Improve recall, increase query latency**
efSearch is the search beam width. Wider = more recall, more compute per query.

### Q8: **B. IVF-PQ is far more memory-efficient at slightly lower recall ceiling**
HNSW lives in RAM and gives the best recall. IVF-PQ quantizes to ~1 byte per sub-vector for billion-scale at-cost.

### Q9: **B. Sum 1/(k + rank_i(d))**
Score-free, robust to heterogeneous retrievers. k=60 is the default.

### Q10: **B. Chunking strategy + top-K too small + no reranker**
The chunk that contained the agenda's heading was split from the bullet points; the resulting embedding was dominated by adjacent CRM content. Header-aware chunking + overlap + reranker fixed it.

### Q11: **B. Cross-encoders see (query, doc) together**
Bi-encoders must commit to a single vector per document before seeing the query. Cross-encoders run a full transformer over the pair, far more expressive.

### Q12: **A. N×M token-level MaxSim**
Late interaction, query and document keep multiple token vectors; final score is the max-similarity over token pairs.

### Q13: **B. BM25 is needed**
Exact identifiers, part numbers, and rare strings are *sparse* signal, exactly what BM25 captures and dense embeddings smooth away.

### Q14: **B. Recursive splitter, ~512 tokens, 128 overlap, header-aware**
Production-grade default. Iterate from here.

### Q15: **B. Prepend an LLM-generated context summary**
50–100 tokens of context ("this chunk is from the Authentication section of the v3 API docs") before embedding. 35% retrieval-failure reduction in Anthropic's eval.

### Q16: **B. pgvector**
Already-running Postgres + small/medium scale + need for SQL metadata filters = pgvector. Run the same backups, use the same drivers, audit the same way.

### Q17: **B. Embed entire document, then pool per-chunk**
Per-chunk embeddings inherit the document's full context without you having to prepend anything. 10–20% retrieval gain on long docs.

### Q18: **B. Storage and memory footprint**
For HNSW, vectors + graph live in RAM. For PQ-quantized indexes, on disk. Either way, dim × N dominates.

### Q19: **B. Learned-sparse vectors with vocab-keyed dimensions**
SPLADE outputs are mostly-zero high-dimensional vectors where active dims correspond to expansion terms, pairs nicely with dense via hybrid.

### Q20: **B. Re-embed corpus, route gradually, tag with model version**
Embedding spaces don't transfer. Different model = new index. Tag with version metadata so you can A/B test and roll back.

### Q21: **C. Lower than BM25**
Identifier-style queries are BM25's strength because exact-term matching is what BM25 is *for*.

### Q22: **B. Context window + "lost in the middle"**
Every extra chunk fights for attention budget and dilutes relevance.

### Q23: **B. Mistral-7B-embed, BGE-M3, voyage-3-large**
These cycle through the MTEB top spots. Plain word2vec or GPT-2 hidden states are 5+ years behind.

### Q24: **B. They run a full transformer pass per (query, candidate) pair**
Bi-encoders pre-compute doc embeddings once. Cross-encoders can't, they must see the query and the doc together every time.

### Q25: **B. DiskANN/IVF-PQ + horizontal sharding + pre-filter**
1B vectors won't fit in one HNSW RAM index. Disk-based graph + partitioning + pre-filter is the modern playbook.

### Q26: **B. Multilingual embedder + filter-aware vector DB + hybrid + reranker**
Multilingual (10 languages) → Cohere v3 or BGE-M3. Filters → Qdrant or Weaviate. Hybrid + rerank → quality + latency budget. The minimum viable production stack.

---

## 📊 Score Yourself

- 24–26/26 → 🏆 Retrieval engineer. Onward.
- 21–23/26 → ✅ Strong; revisit specific gaps.
- 17–20/26 → ⚠️ Re-read chunking + hybrid + reranking.
- <17/26 → 🔁 Re-do the Kamradt + Anthropic-contextual-retrieval videos before re-quizzing.

---

## 🃏 Add To Your Flashcards

- HNSW (M, efConstruction, efSearch)
- IVF-PQ, DiskANN, ScaNN, when each is right
- BM25 vs dense vs SPLADE, failure modes
- RRF formula
- Contextual retrieval, what + why
- Reranker, Cohere / Voyage / bge-reranker-v2-m3 / ColBERT
- Asymmetric embedder prefixes (E5, BGE) / `input_type` (Cohere)
- Matryoshka, truncate to 256 / 512 / 1024

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 3, RAG Architecture](../Module-03-RAG-Architecture/Reading.md)
