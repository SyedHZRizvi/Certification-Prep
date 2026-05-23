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

# 🎥 Module 2 Videos: Responsible AI & Content Safety

> **How to use:** Click any video card to search YouTube and watch the latest top result. The Microsoft Responsible AI talks change frequently — pick the most recent one (within the last 12 months) when results show.

## ⭐ Essential watching (~45 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Responsible+AI+principles+overview" target="_blank" rel="noopener" data-video-id="UYjj0yJZrwM">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Microsoft's 6 Responsible AI Principles Explained</p>
      <p class="vg-creator">Microsoft Learn</p>
      <span class="vg-duration">⏱ 10 min · The six pillars</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+AI+Content+Safety+demo+walkthrough" target="_blank" rel="noopener" data-video-id="T0eygrQ3cYQ">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Azure AI Content Safety — full walkthrough</p>
      <p class="vg-creator">Microsoft Reactor</p>
      <span class="vg-duration">⏱ 15 min · Text + image + Prompt Shields</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+OpenAI+content+filter+configuration+tutorial" target="_blank" rel="noopener" data-video-id="DR9l8gJPfPY">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Azure OpenAI Content Filters — custom configurations</p>
      <p class="vg-creator">Microsoft Learn</p>
      <span class="vg-duration">⏱ 12 min · Foundry filter UI</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Prompt+injection+attacks+LLM+defenses+Azure" target="_blank" rel="noopener" data-video-id="MppNtk31jNY">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Prompt Injection — Attacks & Azure Defenses</p>
      <p class="vg-creator">Microsoft Security</p>
      <span class="vg-duration">⏱ 14 min · Direct + indirect injection</span>
    </div>
  </a>
</div>

## 📚 Recommended (~25 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=groundedness+detection+RAG+Azure+AI" target="_blank" rel="noopener" data-video-id="odxAPb0uf34">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Groundedness Detection for RAG apps</p>
      <p class="vg-creator">Microsoft Reactor</p>
      <span class="vg-duration">⏱ 10 min · Detect ungrounded LLM answers</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Responsible+AI+dashboard+Azure+Machine+Learning" target="_blank" rel="noopener" data-video-id="hXq-KHHkJvk">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">The Responsible AI Dashboard (Azure ML)</p>
      <p class="vg-creator">Microsoft Learn</p>
      <span class="vg-duration">⏱ 15 min · Error analysis + interpretability</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=PyRIT+Microsoft+red+team+generative+AI" target="_blank" rel="noopener" data-video-id="oAttV-5rFsI">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">PyRIT — Red-team your GenAI app</p>
      <p class="vg-creator">Microsoft Security</p>
      <span class="vg-duration">⏱ 12 min · Open-source toolkit</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Fairlearn+bias+mitigation+tutorial" target="_blank" rel="noopener" data-video-id="1Au1z9CtLq4">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Fairlearn — assessing model bias</p>
      <p class="vg-creator">Microsoft Research</p>
      <span class="vg-duration">⏱ 25 min · Hands-on</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+transparency+note+Azure+AI" target="_blank" rel="noopener" data-video-id="q5CbK0Hs1pg">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">What's in a Transparency Note?</p>
      <p class="vg-creator">Microsoft Learn</p>
      <span class="vg-duration">⏱ 8 min · Reading the docs</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---|---|
| **Microsoft Learn** | Official; exam-aligned phrasing |
| **Microsoft Reactor** | Live coding from product teams |
| **Microsoft Security** | RAI + security crossover content |
| **John Savill's Technical Training** | Azure deep dives |
| **Microsoft Research** | Underlying tools (Fairlearn, InterpretML) |

---

## ✅ After watching

Answer these in your notebook:

1. List Microsoft's 6 Responsible AI principles.
2. What are the 4 harm categories Content Safety detects, and what severity values can each have?
3. How does a Prompt Shield differ from a content filter?
4. What does groundedness detection require as inputs?
5. What's the 4-step Identify → Measure → Mitigate → Operate workflow?

If you can answer all 5, you're ready for the [Quiz](./Quiz.md).
