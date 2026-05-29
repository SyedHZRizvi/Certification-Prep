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

# 🎥 Module 1 Videos: Foundations of Prompt Engineering

> **How to use:** Click any video card to search YouTube and watch the latest top result for that topic. Curated picks shown in the order to watch them. Pause and take notes after each one — don't binge.

## ⭐ Essential watching (~55 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Andrej+Karpathy+intro+to+large+language+models" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Intro to Large Language Models (1-hr definitive)</p>
      <p class="vg-creator">Andrej Karpathy</p>
      <span class="vg-duration">⏱ 60 min · Mental model for the whole field</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=3Blue1Brown+but+what+is+a+transformer+chapter+5" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">But what is a transformer? (visual intuition)</p>
      <p class="vg-creator">3Blue1Brown</p>
      <span class="vg-duration">⏱ 27 min · Why temperature/sampling exists at all</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Anthropic+prompt+engineering+overview+claude" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Anthropic — Prompt Engineering Overview</p>
      <p class="vg-creator">Anthropic</p>
      <span class="vg-duration">⏱ 18 min · The Claude team's official guide</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=OpenAI+prompt+engineering+best+practices+isa+fulford" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">OpenAI — A Survey of Techniques (Isa Fulford)</p>
      <p class="vg-creator">OpenAI / DevDay</p>
      <span class="vg-duration">⏱ 22 min · OpenAI's own playbook</span>
    </div>
  </a>
</div>

## 📚 Recommended (~40 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=temperature+top+p+top+k+explained+llm" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Temperature, top-p, top-k — visual explanation</p>
      <p class="vg-creator">AssemblyAI / Cohere</p>
      <span class="vg-duration">⏱ 12 min · Sampling parameters demystified</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=BPE+tokenization+andrej+karpathy" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Let's build the GPT Tokenizer</p>
      <p class="vg-creator">Andrej Karpathy</p>
      <span class="vg-duration">⏱ 2 hr · How BPE actually works</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Simon+Willison+prompt+engineering+talk" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Practical LLM Prompting (practitioner POV)</p>
      <p class="vg-creator">Simon Willison</p>
      <span class="vg-duration">⏱ 28 min · Field notes from real builds</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=lost+in+the+middle+paper+long+context+llm" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Lost in the Middle — long context paper walkthrough</p>
      <p class="vg-creator">Yannic Kilcher</p>
      <span class="vg-duration">⏱ 25 min · Why position matters</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=microsoft+tay+chatbot+failure+postmortem" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Microsoft Tay — 24 Hour Disaster Postmortem</p>
      <p class="vg-creator">Computerphile</p>
      <span class="vg-duration">⏱ 14 min · Case study from the reading</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=claude+vs+gpt+vs+gemini+vs+llama+2026+comparison" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Claude vs GPT vs Gemini vs Llama — head to head</p>
      <p class="vg-creator">AI Explained</p>
      <span class="vg-duration">⏱ 22 min · 2026 model landscape</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **Anthropic** | Engineering deep-dives from the Claude team. |
| **Andrej Karpathy** | The clearest teacher in modern AI. Zero-to-hero series, tokenizer build, LLM intro. |
| **3Blue1Brown** | The visual intuition for transformers, attention, and embeddings. |
| **AI Explained** | Frontier-model reviews, paper walkthroughs, benchmark commentary. |
| **Yannic Kilcher** | Rigorous paper reviews, often within 48 hours of release. |
| **Simon Willison (talks via various)** | Practitioner-grade LLM application advice. |
| **DeepLearning.AI** | Andrew Ng's polished short courses, many co-taught with vendors. |

---

## ✅ After watching

Answer these in your notebook (without re-watching):

1. Recite the four major model families and one strength + one weakness of each.
2. Explain what a token is to a smart 12-year-old. Why is `"antidisestablishmentarianism"` not 1 token?
3. When would you set `temperature=0`? When would you set `temperature=1.0`?
4. Why does the "lost in the middle" effect exist, and how do you defend against it?
5. Describe the instruction hierarchy and why it matters for safety.

If you can answer all 5, you're ready for the [Quiz](./Quiz.md). If not, re-watch the Anthropic and Karpathy videos.
