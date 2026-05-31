<style>
.vg-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 18px; margin: 22px 0 30px; }
.vg-card { display: block; background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; text-decoration: none; color: inherit; transition: transform .2s, box-shadow .2s, border-color .2s; }
.vg-card:hover { transform: translateY(-3px); box-shadow: 0 12px 24px -8px rgba(0,0,0,.15); border-color: #4285f4; }
.vg-thumb { position: relative; aspect-ratio: 16 / 9; background: linear-gradient(135deg, #4285f4, #34a853); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 48px; }
.vg-thumb img { width: 100%; height: 100%; object-fit: cover; }
.vg-play { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,.35); color: #fff; font-size: 48px; opacity: 0; transition: opacity .2s; }
.vg-card:hover .vg-play { opacity: 1; }
.vg-meta { padding: 14px 16px; }
.vg-tag { display: inline-block; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: .08em; padding: 3px 8px; border-radius: 4px; margin-bottom: 8px; }
.vg-tag.essential { background: #d2e3fc; color: #1967d2; }
.vg-tag.recommended { background: #ceead6; color: #137333; }
.vg-tag.optional { background: #fef3c7; color: #92400e; }
.vg-title { font-weight: 700; font-size: 14px; line-height: 1.4; margin: 0 0 4px; color: #0f172a; }
.vg-creator { font-size: 12.5px; color: #64748b; margin: 0 0 6px; }
.vg-duration { font-size: 11px; color: #94a3b8; font-weight: 600; }
.vg-section-title { font-size: 18px; font-weight: 800; margin: 30px 0 8px; color: #0f172a; }
.vg-section-desc { font-size: 14px; color: #64748b; margin: 0 0 4px; }
</style>

# 🎥 Module 1 Videos: Google AI Landscape & Gemini Model Family

> **How to use:** Click any video card to search YouTube and watch the top result for that topic. Curated picks shown in the order to watch them. Pause and take notes after each one. The Google-channel videos (Google Cloud Tech, Google DeepMind, Google for Developers) are usually the most authoritative; prefer those when available.

## ⭐ Essential watching (~75 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Attention+Is+All+You+Need+Transformer+Vaswani+2017+explained" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">"Attention Is All You Need" — The Transformer Explained</p>
      <p class="vg-creator">Yannic Kilcher / Andrej Karpathy</p>
      <span class="vg-duration">⏱ 20 min · The foundational paper walkthrough</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Google+DeepMind+Gemini+launch+Demis+Hassabis" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Gemini Launch — Demis Hassabis Keynote</p>
      <p class="vg-creator">Google DeepMind</p>
      <span class="vg-duration">⏱ 18 min · The Dec 2023 unveiling</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Gemini+1.5+Pro+1+million+token+context+window+demo" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Gemini 1.5 Pro — 1M Token Context Demo</p>
      <p class="vg-creator">Google DeepMind</p>
      <span class="vg-duration">⏱ 12 min · Why 1M context changes things</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Gemini+model+family+Nano+Flash+Pro+Ultra+comparison" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Gemini Family — Nano vs Flash vs Pro vs Ultra</p>
      <p class="vg-creator">Google Cloud Tech</p>
      <span class="vg-duration">⏱ 10 min · Picking the right tier</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Google+AI+Principles+responsible+AI+overview" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Google AI Principles — The Governance Doc</p>
      <p class="vg-creator">Google AI</p>
      <span class="vg-duration">⏱ 15 min · 7 principles + 4 red lines</span>
    </div>
  </a>
</div>

## 📚 Recommended (~60 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Gemini+vs+GPT+vs+Claude+comparison+2026" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Gemini vs GPT vs Claude — Honest Comparison</p>
      <p class="vg-creator">AI Explained / Matt Wolfe</p>
      <span class="vg-duration">⏱ 15 min · Model bake-off</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Google+DeepMind+merger+April+2023+Demis+Hassabis+story" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">The Google Brain × DeepMind Merger Story</p>
      <p class="vg-creator">Lex Fridman / Hard Fork / The Verge</p>
      <span class="vg-duration">⏱ 25 min · The reorg that produced Gemini</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Karpathy+intro+large+language+models+LLM+1+hour" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Karpathy: Intro to Large Language Models</p>
      <p class="vg-creator">Andrej Karpathy</p>
      <span class="vg-duration">⏱ 60 min · Background fundamentals</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Gemini+2.5+Pro+thinking+mode+reasoning+benchmarks" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Gemini 2.5 Pro — Thinking Mode</p>
      <p class="vg-creator">Google DeepMind</p>
      <span class="vg-duration">⏱ 14 min · Extended reasoning on the latest tier</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=AlphaGo+documentary+Lee+Sedol+match+2016" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">AlphaGo — The Documentary</p>
      <p class="vg-creator">DeepMind / Greg Kohs</p>
      <span class="vg-duration">⏱ 90 min · DeepMind's defining moment</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=AlphaFold+2+protein+folding+Demis+Hassabis+Nobel" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">AlphaFold 2 — Nobel-Tier Protein Folding</p>
      <p class="vg-creator">Google DeepMind</p>
      <span class="vg-duration">⏱ 25 min · Science from the same lab</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Mercado+Libre+Vertex+AI+Search+seller+assistant+case+study" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Mercado Libre — Vertex AI Case Study</p>
      <p class="vg-creator">Google Cloud Next</p>
      <span class="vg-duration">⏱ 18 min · Real-world Vertex deployment</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Project+Astra+Google+I/O+real+time+multimodal+agent" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Project Astra — Real-Time Multimodal Agent</p>
      <p class="vg-creator">Google DeepMind</p>
      <span class="vg-duration">⏱ 12 min · The future of Gemini</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **Google Cloud Tech (official)** | Vertex AI deep dives, "AI Adventures" series, Google Cloud Next talks. The authoritative enterprise source. |
| **Google DeepMind (official)** | Research talks, Gemini launches, AlphaGo / AlphaFold history. The research source. |
| **Google for Developers (official)** | Gemini API tutorials, AI Studio walkthroughs. The developer source. |
| **Andrej Karpathy** | Deepest free LLM education on the internet. "Intro to LLMs" and "Zero to Hero" are required. |
| **AI Explained** | Honest, no-hype model comparisons. Calls out marketing nonsense. |
| **Dwarkesh Patel** | Long-form interviews with frontier-lab founders including Demis Hassabis. |
| **Lex Fridman** | Long-form interviews; Demis Hassabis and Sundar Pichai episodes are required listening. |
| **DeepLearning.AI** | Andrew Ng's structured short courses; many co-built with Google. |
| **Two Minute Papers** | Hungarian researcher Károly Zsolnai-Fehér; phenomenal paper-of-the-week summaries. |

---

## ✅ After watching

Answer these in your notebook (without re-watching):

1. Who are the eight authors of "Attention Is All You Need," and where did they work in 2017?
2. Name the five Gemini tiers and one use case where each is the right pick.
3. What is Vertex AI Search, and how does it differ from Vertex AI Vector Search?
4. Pick a real company. Defend its choice of Gemini over Claude or GPT in 4 sentences.
5. What is the difference between Google AI Studio and Vertex AI in one sentence?

If you can answer all 5, you're ready for the [Quiz](./Quiz.md). If not, re-watch the essential block.
