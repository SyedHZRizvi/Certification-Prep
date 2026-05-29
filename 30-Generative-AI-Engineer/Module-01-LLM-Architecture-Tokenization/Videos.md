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

# 🎥 Module 1 Videos: LLM Architecture & Tokenization

> **How to use:** Click any video card to search YouTube and watch the latest top result for that topic. The Karpathy two-parter is the centerpiece — give it your full attention; it's the single best free transformer tutorial in existence.

## ⭐ Essential watching (~5–6 hrs, but it's worth it)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=karpathy+lets+build+gpt+from+scratch" data-video-id="kCc8FmEb1nY" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Let's build GPT: from scratch, in code, spelled out</p>
      <p class="vg-creator">Andrej Karpathy</p>
      <span class="vg-duration">⏱ 1h 56m · The single best transformer tutorial</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=karpathy+lets+build+the+gpt+tokenizer" data-video-id="zduSFxRajkE" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Let's build the GPT Tokenizer</p>
      <p class="vg-creator">Andrej Karpathy</p>
      <span class="vg-duration">⏱ 2h 13m · BPE from scratch, every gotcha</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=3blue1brown+but+what+is+a+gpt" data-video-id="wjZofJX0v4M" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">But what is a GPT? Visual intro to transformers</p>
      <p class="vg-creator">3Blue1Brown</p>
      <span class="vg-duration">⏱ 27m · Stunning visualizations</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=3blue1brown+attention+in+transformers" data-video-id="eMlx5fFNoYc" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Attention in transformers, visually explained</p>
      <p class="vg-creator">3Blue1Brown</p>
      <span class="vg-duration">⏱ 26m · Q, K, V intuition</span>
    </div>
  </a>
</div>

## 📚 Recommended (~2–3 hrs)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=stanford+cs25+transformers+united" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Stanford CS25 — Transformers United</p>
      <p class="vg-creator">Stanford Online</p>
      <span class="vg-duration">⏱ Lecture series · Frontier guest speakers</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=jay+alammar+illustrated+transformer" data-video-id="-QH8fRhqFHM" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">The Illustrated Transformer (walkthrough)</p>
      <p class="vg-creator">Jay Alammar</p>
      <span class="vg-duration">⏱ 20m · Companion to the blog</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=umar+jamil+attention+is+all+you+need+coded" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Attention Is All You Need — paper + code</p>
      <p class="vg-creator">Umar Jamil</p>
      <span class="vg-duration">⏱ 2h · Paper-walkthrough style</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=yannic+kilcher+mixture+of+experts+sparse" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Mixture of Experts — Sparse MoE explained</p>
      <p class="vg-creator">Yannic Kilcher</p>
      <span class="vg-duration">⏱ 45m · MoE deep-dive</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=tri+dao+flashattention+talk" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">FlashAttention — Tri Dao's talk</p>
      <p class="vg-creator">Tri Dao / Stanford MLSys</p>
      <span class="vg-duration">⏱ 40m · The kernel that made long context cheap</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=albert+gu+mamba+state+space+models" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Mamba — Linear-Time State Space Models</p>
      <p class="vg-creator">Albert Gu</p>
      <span class="vg-duration">⏱ 50m · The Mamba author</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=rope+rotary+positional+embedding+explained" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">RoPE — Rotary Positional Embeddings</p>
      <p class="vg-creator">Eleuther / community</p>
      <span class="vg-duration">⏱ 20m · The position scheme</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=anthropic+prompt+caching+explained" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Anthropic prompt caching — how it works</p>
      <p class="vg-creator">Anthropic / DevRel</p>
      <span class="vg-duration">⏱ 15m · KV-cache reuse</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **Andrej Karpathy** | The single best teacher of LLM internals on the open web. |
| **3Blue1Brown** | Visual intuition you literally cannot get from papers. |
| **Yannic Kilcher** | Frontier paper reviews; sometimes spicy, always rigorous. |
| **Umar Jamil** | Paper-implements-from-scratch style. |
| **Stanford Online (CS25)** | Lectures from frontier labs. |
| **Jay Alammar** | The "Illustrated Transformer" author; cleanest visual explanations. |
| **AI Coffee Break with Letitia** | German-accented PhD reviewing recent papers; high signal. |

---

## ✅ After watching

Answer these in your notebook (no peeking):

1. Sketch the data flow from raw text to a sampled token. Label each box.
2. Explain Q, K, V to a friend who knows linear algebra but not transformers.
3. Why is attention quadratic in sequence length?
4. What is the KV cache, and why is GQA an improvement over MHA?
5. Name three positional-encoding schemes and one strength of each.
6. What is BPE in 3 sentences?
7. Why do Mixtral and DeepSeek-V3 fit "more parameters" without proportionally more compute?

If you can answer all 7 without notes, you're ready for the [Quiz](./Quiz.md).
