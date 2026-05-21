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

# 🎥 Module 5 Videos: Document Intelligence & Knowledge Mining

> **How to use:** Click any video card to search YouTube. Vector search content was added rapidly through 2023–2024 — pick the most recent video.

## ⭐ Essential watching (~65 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+Document+Intelligence+tutorial+prebuilt+custom" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Document Intelligence — full walkthrough</p>
      <p class="vg-creator">Microsoft Learn</p>
      <span class="vg-duration">⏱ 18 min · Prebuilt + custom models</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+AI+Search+indexer+skillset+tutorial" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Azure AI Search — Index, Indexer, Skillset</p>
      <p class="vg-creator">Microsoft Reactor</p>
      <span class="vg-duration">⏱ 20 min · The DISKS model</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+AI+Search+vector+search+embeddings" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Vector Search in Azure AI Search</p>
      <p class="vg-creator">Microsoft Reactor</p>
      <span class="vg-duration">⏱ 15 min · HNSW + embeddings</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+AI+Search+semantic+ranker+hybrid+search" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Semantic Ranker + Hybrid Search</p>
      <p class="vg-creator">Microsoft Learn</p>
      <span class="vg-duration">⏱ 12 min · Why hybrid+semantic wins for RAG</span>
    </div>
  </a>
</div>

## 📚 Recommended (~30 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Document+Intelligence+custom+neural+vs+template" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Custom Template vs Custom Neural — which to pick</p>
      <p class="vg-creator">Microsoft Reactor</p>
      <span class="vg-duration">⏱ 10 min · Decision criteria</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+AI+Search+integrated+vectorization" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Integrated Vectorization — zero-code RAG</p>
      <p class="vg-creator">Microsoft Reactor</p>
      <span class="vg-duration">⏱ 10 min · Embedding skill in skillsets</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+AI+Search+Knowledge+Store+enrichment" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Knowledge Store — projecting enriched data</p>
      <p class="vg-creator">Microsoft Learn</p>
      <span class="vg-duration">⏱ 12 min · Tables + objects in Storage</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Document+Intelligence+invoice+receipt+ID+prebuilt" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Prebuilt Models — Invoice, Receipt, ID</p>
      <p class="vg-creator">Microsoft Reactor</p>
      <span class="vg-duration">⏱ 20 min · Field-by-field</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+AI+Search+RAG+on+your+data+OpenAI" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">RAG with Azure AI Search + OpenAI</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 30 min · End-to-end demo</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---|---|
| **Microsoft Learn** | Canonical API examples |
| **Microsoft Reactor** | Live RAG walkthroughs |
| **John Savill's Technical Training** | Architectural depth |
| **Adam Marczak — Azure for Everyone** | Clear visuals |

---

## ✅ After watching

1. Name the five parts of DISKS.
2. Custom Template vs Custom Neural — when do you pick each?
3. What dimensions does `text-embedding-3-small` produce? `ada-002`?
4. Why does hybrid + semantic beat pure vector for RAG?
5. Which Azure AI Search SKU is the minimum for semantic ranker?

If you can answer all 5, you're ready for the [Quiz](./Quiz.md).
