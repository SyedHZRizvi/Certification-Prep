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

# 🎥 Module 2 Videos: Prompt Engineering with Claude

> **How to use:** Open the cards in the order shown. The Anthropic-channel and DeepLearning.AI videos are particularly authoritative — Anthropic engineers themselves teach these. After watching, open the Workbench and *try* what you saw before moving on.

## ⭐ Essential watching (~70 min)

<div class="vg-grid">
  <a class="vg-card" data-video-id="T9aRN5JkmL8" href="https://www.youtube.com/results?search_query=Anthropic+prompt+engineering+tutorial+Claude" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Anthropic Prompt Engineering Tutorial</p>
      <p class="vg-creator">Anthropic (official)</p>
      <span class="vg-duration">⏱ 25 min · Best first watch</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=DeepLearning+AI+prompt+engineering+with+Claude+short+course" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Prompt Engineering with Claude — Short Course</p>
      <p class="vg-creator">DeepLearning.AI × Anthropic</p>
      <span class="vg-duration">⏱ 60 min total · Chapters work standalone</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Anthropic+XML+tags+prompt+structure" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Why XML Tags Work So Well With Claude</p>
      <p class="vg-creator">Anthropic / community</p>
      <span class="vg-duration">⏱ 10 min · Structural delimiters</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Claude+prefill+assistant+response+technique" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Prefill — The Underused Claude Superpower</p>
      <p class="vg-creator">Anthropic / Matt Pocock</p>
      <span class="vg-duration">⏱ 12 min · Force output discipline</span>
    </div>
  </a>
</div>

## 📚 Recommended (~60 min)

<div class="vg-grid">
  <a class="vg-card" data-video-id="AFE6x81AP4k" href="https://www.youtube.com/results?search_query=Claude+chain+of+thought+thinking+tags+prompt" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Chain-of-Thought & Thinking Tags</p>
      <p class="vg-creator">Anthropic / DAIR.AI</p>
      <span class="vg-duration">⏱ 15 min · Scratchpad reasoning</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Anthropic+Workbench+console+walkthrough" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Anthropic Workbench Walkthrough</p>
      <p class="vg-creator">Anthropic</p>
      <span class="vg-duration">⏱ 15 min · Get hands-on</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=few+shot+prompting+best+practices+examples" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Few-Shot Prompting Best Practices</p>
      <p class="vg-creator">DAIR.AI / PromptingGuide</p>
      <span class="vg-duration">⏱ 12 min · Edge case coverage</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Claude+long+context+200k+prompting+tips" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Long-Context Prompting Tips (200K window)</p>
      <p class="vg-creator">Anthropic / various</p>
      <span class="vg-duration">⏱ 18 min · Needle-in-haystack done right</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Claude+structured+output+JSON+extraction+prompt" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Structured Output / JSON Extraction Patterns</p>
      <p class="vg-creator">community / Hamel Husain</p>
      <span class="vg-duration">⏱ 25 min · Schema-first prompting</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=prompt+caching+Anthropic+Claude+how+it+works" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Prompt Caching Deep Dive</p>
      <p class="vg-creator">Anthropic / Notion case study</p>
      <span class="vg-duration">⏱ 20 min · 90% cost cut</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="eLXF0VojuSs" href="https://www.youtube.com/results?search_query=Hamel+Husain+evals+for+prompts+LLM" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Writing Evals for Your Prompts</p>
      <p class="vg-creator">Hamel Husain</p>
      <span class="vg-duration">⏱ 35 min · How pros measure prompt quality</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=anti+pattern+prompt+engineering+Claude+mistakes" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Prompt Engineering Anti-Patterns</p>
      <p class="vg-creator">AI Engineer / community</p>
      <span class="vg-duration">⏱ 18 min · What NOT to do</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **Anthropic (official)** | Authoritative; cookbook walkthroughs, prompt engineering, model launches. |
| **DeepLearning.AI** | Andrew Ng's short-course series; the Anthropic-collab courses are gold. |
| **DAIR.AI** | Maintainers of PromptingGuide; rigorous explainers. |
| **Matt Pocock** | TypeScript-flavored prompt engineering; tight, practical. |
| **AI Engineer Conf** | Talks from production teams (Notion, Cursor, Sourcegraph, Klarna). |
| **Hamel Husain** | Eval-first thinking; brutally practical. |
| **Mike Bird (Anthropic dev rel)** | Excellent live-coding sessions. |

---

## ✅ After watching

Answer these in your notebook (without re-watching):

1. Where do you put a JSON schema the model must always conform to?
2. What is the *single* most reliable technique to force Claude to output JSON without preamble?
3. What does "wrap examples in `<examples>` tags" buy you over Markdown bullet points?
4. Why does Anthropic's long-context guidance say to put the question *after* the documents?
5. What is the cache TTL on Anthropic prompt caching (approximately), and what does that mean for your traffic patterns?

If you can answer all 5, you're ready for the [Quiz](./Quiz.md). If not, re-watch the essential block.
