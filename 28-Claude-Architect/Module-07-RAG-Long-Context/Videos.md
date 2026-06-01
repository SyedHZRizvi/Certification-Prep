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
.vg-section-title { font-size: 18px; font-weight: 800; margin: 30px 0 8px; color: #0f172a; }
.vg-section-desc { font-size: 14px; color: #64748b; margin: 0 0 4px; }
</style>

# 🎥 Module 7 Videos: RAG & Long-Context with Claude

> **How to use:** RAG is a deep topic with many opinions. Bias to Anthropic's "Contextual Retrieval" content first — it's the freshest authoritative take.

## ⭐ Essential watching (~60 min)

<div class="vg-grid">
  <a class="vg-card" data-video-id="6efwN_US-zk" href="https://www.youtube.com/results?search_query=Anthropic+contextual+retrieval+tutorial+RAG" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Anthropic Contextual Retrieval — Tutorial</p>
      <p class="vg-creator">Anthropic</p>
      <span class="vg-duration">⏱ 20 min · 49% failure reduction technique</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Claude+long+context+vs+RAG+200k+stuffing" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Long Context vs RAG — When to Pick Which</p>
      <p class="vg-creator">community / Anthropic</p>
      <span class="vg-duration">⏱ 15 min · The decision tree</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Anthropic+Citations+API+structured+document" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Citations API — Machine-Readable Grounding</p>
      <p class="vg-creator">Anthropic</p>
      <span class="vg-duration">⏱ 12 min · Audit-grade citations</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Voyage+AI+embeddings+RAG+Claude+tutorial" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Voyage AI Embeddings + Claude RAG</p>
      <p class="vg-creator">Voyage / community</p>
      <span class="vg-duration">⏱ 18 min · The recommended embedding partner</span>
    </div>
  </a>
</div>

## 📚 Recommended (~55 min)

<div class="vg-grid">
  <a class="vg-card" data-video-id="emKkoeFjH_M" href="https://www.youtube.com/results?search_query=hybrid+retrieval+BM25+vector+reciprocal+rank+fusion" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Hybrid Retrieval — BM25 + Vector + RRF</p>
      <p class="vg-creator">community</p>
      <span class="vg-duration">⏱ 15 min · Beyond pure semantic</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="8OJC21T2SL4" href="https://www.youtube.com/results?search_query=chunking+strategy+RAG+document+structure+aware" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Chunking Strategies that Matter</p>
      <p class="vg-creator">community / DAIR.AI</p>
      <span class="vg-duration">⏱ 12 min · Recursive, semantic, structure</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="Uh9bYiVrW_s" href="https://www.youtube.com/results?search_query=reranker+Cohere+Voyage+LLM+RAG+pipeline" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Rerankers — The Last-Mile Accuracy Win</p>
      <p class="vg-creator">Cohere / Voyage / community</p>
      <span class="vg-duration">⏱ 15 min · Cross-encoder vs bi-encoder</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Claude+1M+context+beta+stuffing+vs+RAG" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Claude 1M Context Window — When It's Worth It</p>
      <p class="vg-creator">Anthropic / community</p>
      <span class="vg-duration">⏱ 12 min · Cost-benefit at huge scale</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=needle+in+haystack+benchmark+LLM+long+context" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Needle-in-Haystack Benchmark Explained</p>
      <p class="vg-creator">community</p>
      <span class="vg-duration">⏱ 18 min · Long-context evals</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="ibzlEQmgPPY" href="https://www.youtube.com/results?search_query=pgvector+postgres+RAG+vector+search" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">pgvector — Postgres as a Vector DB</p>
      <p class="vg-creator">Supabase / community</p>
      <span class="vg-duration">⏱ 20 min · Simplest viable stack</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=LlamaIndex+RAG+Claude+production+pipeline" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">LlamaIndex — Production RAG with Claude</p>
      <p class="vg-creator">LlamaIndex</p>
      <span class="vg-duration">⏱ 25 min · Framework-flavored</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=agentic+RAG+iterative+retrieval+research" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Agentic RAG — Iterative Retrieval</p>
      <p class="vg-creator">community</p>
      <span class="vg-duration">⏱ 18 min · Agent-driven retrieval loops</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **Anthropic (official)** | Contextual Retrieval and Citations docs. |
| **Voyage AI** | Embedding model deep dives. |
| **LlamaIndex** | Pure-RAG framework with rich tutorials. |
| **Pinecone Learning Center** | Practical retrieval engineering. |
| **DAIR.AI** | Rigorous explainers. |
| **AI Engineer Conf** | Production RAG talks. |

---

## ✅ After watching

Answer these in your notebook (without re-watching):

1. The decision rule for "RAG vs stuff"?
2. What does Contextual Retrieval do, and what's the headline accuracy gain?
3. The 4-stage hybrid retrieval pipeline (per Anthropic's Sept-2024 post)?
4. When does the 1M-token beta context window justify its cost?
5. Difference between inline citations and the native Citations API?

If you can answer all 5, you're ready for the [Quiz](./Quiz.md). If not, re-watch contextual retrieval.
