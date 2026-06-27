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

# 🎥 Module 3 Videos: RAG Architecture

> **How to use:** The Lance Martin "RAG from Scratch" series is the canonical free RAG course in existence. Block out a long weekend for it.

## ⭐ Essential watching

<div class="vg-grid" markdown="0">
  <a class="vg-card" data-video-id="wd7TZ4w1mSw" href="https://www.youtube.com/results?search_query=lance+martin+rag+from+scratch+langchain" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">RAG from Scratch, full 14-part series</p>
      <p class="vg-creator">Lance Martin / LangChain</p>
      <span class="vg-duration">⏱ ~5h total · The canonical free RAG course</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=llama+index+advanced+rag+pipelines" data-video-id="WL7V9JUy2sE" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">LlamaIndex, Advanced RAG Pipelines</p>
      <p class="vg-creator">LlamaIndex / Jerry Liu</p>
      <span class="vg-duration">⏱ 1h 20m · Production patterns</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="SaDzIVkYqyY" href="https://www.youtube.com/results?search_query=hyde+hypothetical+document+embeddings+retrieval" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">HyDE, Hypothetical Document Embeddings explained</p>
      <p class="vg-creator">community / paper-author talk</p>
      <span class="vg-duration">⏱ 25m · Counterintuitive query rewriting</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="0nA5QG3087g" href="https://www.youtube.com/results?search_query=anthropic+contextual+retrieval+cookbook" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Contextual Retrieval, Anthropic cookbook walkthrough</p>
      <p class="vg-creator">Anthropic / DevRel</p>
      <span class="vg-duration">⏱ 30m · Most impactful 2024 RAG advance</span>
    </div>
  </a>
</div>

## 📚 Recommended

<div class="vg-grid" markdown="0">
  <a class="vg-card" data-video-id="bmduzd1oY7U" href="https://www.youtube.com/results?search_query=greg+kamradt+5+levels+of+RAG" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">5 Levels of RAG, Greg Kamradt</p>
      <p class="vg-creator">Greg Kamradt</p>
      <span class="vg-duration">⏱ 1h · Practical progression</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="vX3A96_F3FU" href="https://www.youtube.com/results?search_query=microsoft+graph+rag+global+summarization" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Graph RAG, Microsoft Research walkthrough</p>
      <p class="vg-creator">Microsoft / community</p>
      <span class="vg-duration">⏱ 45m · Subgraph retrieval</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="E2shqsYwxck" href="https://www.youtube.com/results?search_query=corrective+rag+CRAG+paper+explained" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">CRAG (Corrective RAG), paper explained</p>
      <p class="vg-creator">paper-walkthrough channels</p>
      <span class="vg-duration">⏱ 25m · Fallback design</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="04ighIjMcAI" href="https://www.youtube.com/results?search_query=adaptive+RAG+query+routing+complexity+classifier" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Adaptive RAG, complexity-routed retrieval</p>
      <p class="vg-creator">community</p>
      <span class="vg-duration">⏱ 20m · Cost-saving on easy queries</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid" markdown="0">
  <a class="vg-card" data-video-id="pNcQ5XXMgH4" href="https://www.youtube.com/results?search_query=self-rag+adaptive+retrieval+critique" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Self-RAG, Asai et al. walkthrough</p>
      <p class="vg-creator">paper review</p>
      <span class="vg-duration">⏱ 35m · Retrieval tokens learned</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=lost+in+the+middle+long+context+attention" data-video-id="Kf3LeaUGwlg" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">"Lost in the Middle", Liu et al. explained</p>
      <p class="vg-creator">Weaviate vector database</p>
      <span class="vg-duration">⏱ 20m · Why long context isn't a panacea</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="kEgeegk9iqo" href="https://www.youtube.com/results?search_query=ragatouille+colbert+local+production" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">RAGatouille, ColBERT for production RAG</p>
      <p class="vg-creator">Benjamin Clavié</p>
      <span class="vg-duration">⏱ 40m · Late-interaction in practice</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="-mQPOrRhRws" href="https://www.youtube.com/results?search_query=perplexity+ai+architecture+RAG+search" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Perplexity AI, architecture deep dive</p>
      <p class="vg-creator">Perplexity engineering</p>
      <span class="vg-duration">⏱ 40m · A real production modular RAG</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels

| Channel | Why |
|---------|-----|
| **LangChain (Lance Martin)** | The RAG from Scratch series; weekly office hours; pattern library. |
| **LlamaIndex (Jerry Liu)** | Equally rigorous; complementary perspective on the same problems. |
| **Greg Kamradt** | Practitioner; the "5 Levels" framing across many topics. |
| **AI Engineer (Swyx)** | Conference talks from production teams; great signal-to-noise. |
| **Underfitted / DataIndependent** | Practical RAG demos with live coding. |

---

## ✅ After watching

Answer these (no notes):

1. Naive vs Advanced vs Modular RAG, what defines each?
2. HyDE in 3 sentences. When does it shine?
3. Multi-query vs query decomposition, pick one for "What companies have raised >$100M Series B in healthcare AI since 2023?" and justify.
4. Why is reranking the "80% win for 5% latency"?
5. Name 5 elements of a good RAG prompt.
6. CRAG, Adaptive RAG, Graph RAG, when would you use each?

Crisp answers? On to the [Quiz](./Quiz.md).
