<style>
.vg-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 18px; margin: 22px 0 30px; }
.vg-card { display: block; background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; text-decoration: none; color: inherit; transition: transform .2s, box-shadow .2s, border-color .2s; }
.vg-card:hover { transform: translateY(-3px); box-shadow: 0 12px 24px -8px rgba(0,0,0,.15); border-color: #818cf8; }
.vg-thumb { position: relative; aspect-ratio: 16 / 9; background: linear-gradient(135deg, #4f46e5, #8b5cf6); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 48px; }
.vg-thumb img { width: 100%; height: 100%; object-fit: cover; }
.vg-play { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,.35); color: #fff; font-size: 48px; opacity: 0; transition: opacity .2s; }
.vg-card:hover .vg-play { opacity: 1; }
.vg-meta { padding: 14px 16px; }
.vg-tag { display: inline-block; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: .08em; padding: 3px 8px; border-radius: 4px; margin-bottom: 8px; }
.vg-tag.essential { background: #ddd6fe; color: #5b21b6; }
.vg-tag.recommended { background: #dbeafe; color: #1e40af; }
.vg-tag.optional { background: #fef3c7; color: #92400e; }
.vg-title { font-weight: 700; font-size: 14px; line-height: 1.4; margin: 0 0 4px; color: #0f172a; }
.vg-creator { font-size: 12.5px; color: #64748b; margin: 0 0 6px; }
.vg-duration { font-size: 11px; color: #94a3b8; font-weight: 600; }
</style>

# 🎥 Module 2 Videos: Embeddings & Vector Databases

> **How to use:** This module benefits enormously from seeing the geometry — start with the visual intuition videos, then go practitioner.

## ⭐ Essential watching

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=jay+alammar+illustrated+word2vec" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">The Illustrated Word2vec / Embeddings</p>
      <p class="vg-creator">Jay Alammar</p>
      <span class="vg-duration">⏱ 20m · The geometric intuition</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=greg+kamradt+chunking+strategies+RAG" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">5 Levels of Text Splitting for Retrieval</p>
      <p class="vg-creator">Greg Kamradt</p>
      <span class="vg-duration">⏱ 1h 5m · The chunking masterclass</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=james+briggs+pinecone+vector+database+tutorial" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Pinecone Vector Database — Full Tutorial</p>
      <p class="vg-creator">James Briggs</p>
      <span class="vg-duration">⏱ 1h · End-to-end Pinecone</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=anthropic+contextual+retrieval+explained" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Anthropic Contextual Retrieval explained</p>
      <p class="vg-creator">Anthropic / community</p>
      <span class="vg-duration">⏱ 25m · 67% failure-rate reduction</span>
    </div>
  </a>
</div>

## 📚 Recommended

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=cohere+embed+v3+rerank+walkthrough" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Cohere Embed v3 + Rerank walkthrough</p>
      <p class="vg-creator">Cohere</p>
      <span class="vg-duration">⏱ 30m · The asymmetric pattern</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=qdrant+vector+search+tutorial+rust" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Qdrant Vector Search — practical tutorial</p>
      <p class="vg-creator">Qdrant team</p>
      <span class="vg-duration">⏱ 45m · Filter pushdown deep-dive</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=pgvector+postgres+vector+search+supabase" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">pgvector + Postgres — full tutorial</p>
      <p class="vg-creator">Supabase</p>
      <span class="vg-duration">⏱ 40m · Postgres-native vectors</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=hnsw+graph+visualization+vector+search" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">HNSW visualized — how graph ANN works</p>
      <p class="vg-creator">Pinecone / community</p>
      <span class="vg-duration">⏱ 20m · The default ANN index</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=colbert+late+interaction+retrieval+omar+khattab" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">ColBERT — Late-Interaction Retrieval</p>
      <p class="vg-creator">Omar Khattab</p>
      <span class="vg-duration">⏱ 50m · The PhD-level take</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=matryoshka+representation+learning+openai" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Matryoshka Representations — why text-embedding-3 truncates</p>
      <p class="vg-creator">community</p>
      <span class="vg-duration">⏱ 30m · 3072 → 256 dim trick</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=milvus+vector+database+billion+scale" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Milvus at billion-vector scale</p>
      <p class="vg-creator">Zilliz</p>
      <span class="vg-duration">⏱ 40m · DiskANN, IVF-PQ in production</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=splade+sparse+vector+search+naver" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">SPLADE — learned-sparse retrieval</p>
      <p class="vg-creator">Naver Labs</p>
      <span class="vg-duration">⏱ 35m · The hybrid future</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels

| Channel | Why |
|---------|-----|
| **James Briggs** | The go-to practitioner for vector-DB tutorials. |
| **Greg Kamradt** | RAG-pipeline architect; the chunking masterclass alone is worth it. |
| **Jay Alammar** | Visual intuition for embeddings — irreplaceable. |
| **Pinecone Engineering** | Deep dives on HNSW, sparse, hybrid. |
| **Qdrant Engineering** | Rust-fast vector search; great filter-pushdown content. |
| **Cohere DevRel** | Best public material on rerankers. |

---

## ✅ After watching

Answer these in your notebook:

1. Cosine similarity vs dot product vs Euclidean — when does each match?
2. What is HNSW in 3 sentences? What are M and efSearch?
3. Asymmetric embedders — what's the API trap?
4. Hybrid search vs pure vector — give a query where each wins.
5. Contextual retrieval — how does it differ from "just embedding the chunk"?
6. ColBERT vs bi-encoder vs cross-encoder — order them by speed and by accuracy.

If all 6 are crisp, take the [Quiz](./Quiz.md).
