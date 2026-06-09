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

# 🎥 Module 3 Videos: Chain-of-Thought & Reasoning

> **How to use:** Click any video card to search YouTube and watch the latest top result for that topic. Curated picks shown in the order to watch them.

## ⭐ Essential watching (~75 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" data-video-id="AFE6x81AP4k" href="https://www.youtube.com/results?search_query=chain+of+thought+prompting+Wei+2022+paper+walkthrough" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Chain-of-Thought Paper Walkthrough (Wei et al. 2022)</p>
      <p class="vg-creator">Yannic Kilcher</p>
      <span class="vg-duration">⏱ 35 min · The foundational paper</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="wVzuvf9D9BU" href="https://www.youtube.com/results?search_query=zero+shot+chain+of+thought+kojima+let+us+think+step+by+step" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Zero-Shot CoT: "Let's think step by step"</p>
      <p class="vg-creator">AI Coffee Break</p>
      <span class="vg-duration">⏱ 12 min · The 7-word trick</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="5F0F4VYRqC4" href="https://www.youtube.com/results?search_query=OpenAI+o1+reasoning+model+walkthrough+explained" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">OpenAI o1, The Reasoning Era Begins</p>
      <p class="vg-creator">AI Explained</p>
      <span class="vg-duration">⏱ 24 min · System card + benchmarks</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="2HsmNeT8TCg" href="https://www.youtube.com/results?search_query=Anthropic+Claude+Extended+Thinking+tutorial" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Claude Extended Thinking, End-to-End</p>
      <p class="vg-creator">Anthropic</p>
      <span class="vg-duration">⏱ 18 min · budget_tokens, visible traces</span>
    </div>
  </a>
</div>

## 📚 Recommended (~50 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" data-video-id="6oJBTNLMvgk" href="https://www.youtube.com/results?search_query=self+consistency+chain+of+thought+wang+2022+majority+vote" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Self-Consistency (Wang et al. 2022)</p>
      <p class="vg-creator">Yannic Kilcher</p>
      <span class="vg-duration">⏱ 22 min · Majority-vote reasoning</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="EcB0PiNmbFo" href="https://www.youtube.com/results?search_query=ReAct+reason+act+agent+pattern+yao+2022" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">ReAct: Reason + Act (Agent Pattern)</p>
      <p class="vg-creator">DeepLearning.AI</p>
      <span class="vg-duration">⏱ 16 min · Thought → Action → Observation</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="lfV0MsGIU8o" href="https://www.youtube.com/results?search_query=tree+of+thoughts+yao+game+of+24+walkthrough" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Tree-of-Thought, Game of 24 Demo</p>
      <p class="vg-creator">AI Coffee Break</p>
      <span class="vg-duration">⏱ 14 min · Search-based reasoning</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid" markdown="0">
  <a class="vg-card" data-video-id="T0jLKmIzGoA" href="https://www.youtube.com/results?search_query=DeepSeek+R1+open+source+reasoning+model+explained" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">DeepSeek R1, Open-Source Reasoning</p>
      <p class="vg-creator">AI Explained</p>
      <span class="vg-duration">⏱ 28 min · January 2025 launch</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="L1NQoQivAbA" href="https://www.youtube.com/results?search_query=faithfulness+chain+of+thought+post+hoc+reasoning" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Are CoT Traces Actually Faithful?</p>
      <p class="vg-creator">Anthropic Interpretability</p>
      <span class="vg-duration">⏱ 22 min · Hard truth</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="c_nCjkM11S0" href="https://www.youtube.com/results?search_query=GSM8K+benchmark+math+reasoning+LLM" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">GSM8K, The Math Reasoning Benchmark</p>
      <p class="vg-creator">Sebastian Raschka</p>
      <span class="vg-duration">⏱ 18 min · What the benchmarks measure</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **Yannic Kilcher** | Rigorous paper walkthroughs. |
| **AI Explained** | Frontier-model commentary; reasoning-era coverage. |
| **AI Coffee Break with Letitia** | Quick, accurate paper summaries. |
| **Anthropic** | Extended Thinking deep-dives, faithfulness research. |
| **DeepLearning.AI** | Andrew Ng's polished agent/reasoning courses. |
| **Sebastian Raschka** | Benchmark explanations, evaluation craft. |

---

## ✅ After watching

Answer these in your notebook (without re-watching):

1. Why does CoT help so much on multi-step math but barely on sentiment?
2. State the self-consistency algorithm in 4 steps.
3. Describe ReAct's loop, what are the three role names per iteration?
4. When would you reach for a reasoning model (o3, Extended Thinking) vs a standard model + CoT?
5. Name two reasoning failure modes and a defense for each.

If you can answer all 5, you're ready for the [Quiz](./Quiz.md). If not, re-watch the Wei + o1 videos.
