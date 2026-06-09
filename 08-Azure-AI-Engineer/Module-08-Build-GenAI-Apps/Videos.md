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

# 🎥 Module 8 Videos: Build GenAI Apps

> **How to use:** Click any video card. Foundry / Agent Service / prompt flow are evolving fast, pick the newest result.

## ⭐ Essential watching (~70 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+AI+Foundry+tour+walkthrough" target="_blank" rel="noopener" data-video-id="Sq8Cq7RZM2o">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Azure AI Foundry, full tour</p>
      <p class="vg-creator">Microsoft Reactor</p>
      <span class="vg-duration">⏱ 18 min · Hub, Project, Catalog</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+prompt+flow+tutorial+RAG" target="_blank" rel="noopener" data-video-id="hSF_E_FxGvc">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Build a RAG app with Prompt Flow</p>
      <p class="vg-creator">Microsoft Learn</p>
      <span class="vg-duration">⏱ 20 min · Visual DAG end-to-end</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+AI+Agent+Service+tutorial" target="_blank" rel="noopener" data-video-id="o1auJY8I34k">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Azure AI Agent Service, first agent</p>
      <p class="vg-creator">Microsoft Reactor</p>
      <span class="vg-duration">⏱ 15 min · Tools + threads</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+AI+Foundry+evaluation+metrics" target="_blank" rel="noopener" data-video-id="kafq_h2EmZs">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Evaluate LLM apps in Foundry</p>
      <p class="vg-creator">Microsoft Learn</p>
      <span class="vg-duration">⏱ 14 min · Groundedness, relevance, safety</span>
    </div>
  </a>
</div>

## 📚 Recommended (~40 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Semantic+Kernel+Microsoft+tutorial+python" target="_blank" rel="noopener" data-video-id="kCGZPhnTGHM">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Semantic Kernel, orchestration in code</p>
      <p class="vg-creator">Microsoft Reactor</p>
      <span class="vg-duration">⏱ 18 min · Kernel + plugins + planner</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+AI+Foundry+model+catalog+MaaS" target="_blank" rel="noopener" data-video-id="gvYO5d-6kfA">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Model Catalog, MaaS vs MaaP</p>
      <p class="vg-creator">Microsoft Learn</p>
      <span class="vg-duration">⏱ 12 min · Llama, Mistral, OSS</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+OpenAI+RAG+reference+architecture" target="_blank" rel="noopener" data-video-id="uDVkcZwB0EU">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">RAG Reference Architecture (end-to-end)</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 25 min · Production-ready</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=GenAI+evaluation+LLM+as+judge+best+practices" target="_blank" rel="noopener" data-video-id="4beZUMADQro">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">LLM-as-Judge, evaluation best practices</p>
      <p class="vg-creator">Microsoft Research</p>
      <span class="vg-duration">⏱ 25 min · Reliable scoring</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=agent+patterns+ReAct+plan+execute" target="_blank" rel="noopener" data-video-id="Y-VCZ_KTuzo">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Agent patterns: ReAct, Plan-Execute, Reflection</p>
      <p class="vg-creator">DeepLearning.AI</p>
      <span class="vg-duration">⏱ 30 min · Conceptual depth</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---|---|
| **Microsoft Learn** | Canon |
| **Microsoft Reactor** | Live builds |
| **John Savill** | Architecture |
| **DeepLearning.AI** | Agent + LLM concepts |
| **Microsoft Research** | Eval + RAI |

---

## ✅ After watching

1. Hub vs Project in Foundry, what does each hold?
2. MaaS vs MaaP from the model catalog?
3. What are 3 evaluation metrics for a RAG app?
4. Difference between Prompt Flow and Semantic Kernel?
5. What does Agent Service's `file_search` tool do?

If you can answer all 5, you're ready for the [Quiz](./Quiz.md).
