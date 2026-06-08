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

# 🎥 Module 7 Videos: Azure OpenAI Service

> **How to use:** Click any video card. Pick videos dated 2024+, model catalogs, pricing SKUs, and API versions have changed substantially.

## ⭐ Essential watching (~60 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+OpenAI+Service+overview+John+Savill" target="_blank" rel="noopener" data-video-id="NARe_yKaDsY">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Azure OpenAI Service, complete overview</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 25 min · Architecture deep dive</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+OpenAI+deployment+tutorial+Python" target="_blank" rel="noopener" data-video-id="H_1Ge6wxaaE">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Deploy GPT-4o and call from Python</p>
      <p class="vg-creator">Microsoft Reactor</p>
      <span class="vg-duration">⏱ 15 min · Resource → deployment → call</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+OpenAI+on+your+data+RAG+tutorial" target="_blank" rel="noopener" data-video-id="B4yG9ZttON0">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">On Your Data, native RAG with citations</p>
      <p class="vg-creator">Microsoft Learn</p>
      <span class="vg-duration">⏱ 12 min · Azure AI Search wiring</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+OpenAI+content+filter+configuration" target="_blank" rel="noopener" data-video-id="ObeM9vm1TEE">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Configure content filters per deployment</p>
      <p class="vg-creator">Microsoft Reactor</p>
      <span class="vg-duration">⏱ 10 min · Foundry filter UI</span>
    </div>
  </a>
</div>

## 📚 Recommended (~40 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+OpenAI+fine+tuning+tutorial" target="_blank" rel="noopener" data-video-id="7LzNwsQVTZ8">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Fine-tuning on Azure OpenAI</p>
      <p class="vg-creator">Microsoft Reactor</p>
      <span class="vg-duration">⏱ 15 min · JSONL → deploy</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+OpenAI+function+calling+tools" target="_blank" rel="noopener" data-video-id="rzJERWSa_G8">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Function / Tool Calling</p>
      <p class="vg-creator">Microsoft Learn</p>
      <span class="vg-duration">⏱ 13 min · The agent foundation</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+OpenAI+PTU+provisioned+throughput" target="_blank" rel="noopener" data-video-id="HnUNi1RMMTA">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">PTU vs Standard vs Batch</p>
      <p class="vg-creator">John Savill</p>
      <span class="vg-duration">⏱ 12 min · Cost + capacity choices</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=prompt+engineering+best+practices+Azure+OpenAI" target="_blank" rel="noopener" data-video-id="MdrpVG7lZXo">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Prompt Engineering Patterns</p>
      <p class="vg-creator">Microsoft Reactor</p>
      <span class="vg-duration">⏱ 25 min · Few-shot, CoT, persona</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+OpenAI+managed+identity+entra+ID" target="_blank" rel="noopener" data-video-id="auDYXaGSiE0">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Auth Azure OpenAI with Entra ID + MI</p>
      <p class="vg-creator">Microsoft Learn</p>
      <span class="vg-duration">⏱ 14 min · No-secrets pattern</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---|---|
| **Microsoft Learn** | Canonical |
| **Microsoft Reactor** | Live coding |
| **John Savill** | Architecture + cost |
| **DeepLearning.AI** | LLM fundamentals |

---

## ✅ After watching

1. Difference between resource, deployment, and model?
2. When PTU? When Global Batch? When Standard?
3. How does `in_scope: true` in On Your Data affect responses?
4. Fine-tune vs RAG, when is each the right call?
5. Default content filter threshold for new deployments?

If you can answer all 5, you're ready for the [Quiz](./Quiz.md).
