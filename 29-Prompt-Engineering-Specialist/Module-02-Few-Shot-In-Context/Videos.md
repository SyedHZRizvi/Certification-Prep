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

# 🎥 Module 2 Videos: Few-Shot & In-Context Learning

> **How to use:** Click any video card to search YouTube and watch the latest top result for that topic. Curated picks shown in the order to watch them. Pause and take notes after each one — don't binge.

## ⭐ Essential watching (~55 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=GPT-3+paper+Brown+2020+language+models+few+shot+learners+explained" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">GPT-3 Paper Walkthrough (Brown et al. 2020)</p>
      <p class="vg-creator">Yannic Kilcher</p>
      <span class="vg-duration">⏱ 50 min · The paper that defined ICL</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=few+shot+prompting+best+practices+anthropic+claude" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Few-Shot Prompting Best Practices (Anthropic)</p>
      <p class="vg-creator">Anthropic</p>
      <span class="vg-duration">⏱ 14 min · XML tags + example structure</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=in+context+learning+how+does+it+work+stanford" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">How Does In-Context Learning Actually Work?</p>
      <p class="vg-creator">Stanford CS25</p>
      <span class="vg-duration">⏱ 60 min · Theory + mechanistic interpretability</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=many+shot+in+context+learning+DeepMind+2024" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Many-Shot In-Context Learning (DeepMind 2024)</p>
      <p class="vg-creator">AI Coffee Break</p>
      <span class="vg-duration">⏱ 18 min · 100+ shots, long context era</span>
    </div>
  </a>
</div>

## 📚 Recommended (~35 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=fantastically+ordered+prompts+example+order+sensitivity" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Example Order Sensitivity (Lu et al. 2022)</p>
      <p class="vg-creator">AI Explained</p>
      <span class="vg-duration">⏱ 15 min · Why order matters 30+ points</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=retrieval+augmented+few+shot+prompting+kNN+embedding" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">kNN Few-Shot — retrieve examples per request</p>
      <p class="vg-creator">DeepLearning.AI</p>
      <span class="vg-duration">⏱ 12 min · The production pattern</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Karpathy+demonstration+based+learning+ICL" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Demonstration-Based Learning (intuition)</p>
      <p class="vg-creator">Andrej Karpathy</p>
      <span class="vg-duration">⏱ 11 min · Why a few examples work</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=rethinking+demonstrations+random+labels+ICL+Min+2022" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Rethinking Demonstrations (Min et al. 2022)</p>
      <p class="vg-creator">Yannic Kilcher</p>
      <span class="vg-duration">⏱ 22 min · Why even random labels help</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=anthropic+prompt+caching+walkthrough" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Anthropic Prompt Caching for Many-Shot</p>
      <p class="vg-creator">Anthropic Cookbook</p>
      <span class="vg-duration">⏱ 14 min · Slash cost on long few-shot</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=OpenAI+Evals+few+shot+prompt+benchmark" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Benchmarking Few-Shot Variants with Evals</p>
      <p class="vg-creator">OpenAI / DevDay</p>
      <span class="vg-duration">⏱ 20 min · How to actually measure lift</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **Anthropic** | XML-tag few-shot patterns, prompt caching deep dives. |
| **Yannic Kilcher** | Rigorous paper walkthroughs, often within 48 hours. |
| **AI Explained** | Frontier paper coverage with clear takeaways. |
| **DeepLearning.AI** | Andrew Ng's polished short courses. |
| **Stanford CS25** | Transformer lecture series — academic depth. |
| **AI Coffee Break** | Quick, accurate paper summaries. |

---

## ✅ After watching

Answer these in your notebook (without re-watching):

1. Why did GPT-3 in Brown 2020 matter so much to industry?
2. What are the 5 example-selection strategies and one use case each?
3. How can example ordering change accuracy by 30 points?
4. When does many-shot beat few-shot, and when does fine-tuning beat both?
5. Why does Anthropic recommend XML tags for Claude few-shot?

If you can answer all 5, you're ready for the [Quiz](./Quiz.md). If not, re-watch the Anthropic and Kilcher videos.
