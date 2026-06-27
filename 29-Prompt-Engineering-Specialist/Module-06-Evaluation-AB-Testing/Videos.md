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

# 🎥 Module 6 Videos: Evaluation & A/B Testing

> **How to use:** Click any video card to search YouTube and watch the latest top result for that topic.

## ⭐ Essential watching (~70 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" data-video-id="eLXF0VojuSs" href="https://www.youtube.com/results?search_query=Hamel+Husain+your+AI+product+needs+evals+talk" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Your AI Product Needs Evals</p>
      <p class="vg-creator">Hamel Husain</p>
      <span class="vg-duration">⏱ 35 min · The case for eval discipline</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="4beZUMADQro" href="https://www.youtube.com/results?search_query=LLM+as+judge+G-Eval+chain+of+thought+paper" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">G-Eval, LLM-as-Judge with CoT (Liu 2023)</p>
      <p class="vg-creator">Yannic Kilcher</p>
      <span class="vg-duration">⏱ 22 min · Why CoT in evals matters</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="KIGBsQqZcNA" href="https://www.youtube.com/results?search_query=Anthropic+building+evals+for+claude+tutorial" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Anthropic, Building Evals for Claude</p>
      <p class="vg-creator">Anthropic</p>
      <span class="vg-duration">⏱ 18 min · The official harness</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="fWC4VxolWAk" href="https://www.youtube.com/results?search_query=RAGAS+evaluation+framework+RAG+faithfulness" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">RAGAS, RAG Evaluation Framework</p>
      <p class="vg-creator">LlamaIndex</p>
      <span class="vg-duration">⏱ 14 min · Faithfulness + relevance</span>
    </div>
  </a>
</div>

## 📚 Recommended (~45 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" data-video-id="KhINc5XwhKs" href="https://www.youtube.com/results?search_query=Promptfoo+tutorial+prompt+A+B+testing" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Promptfoo, Quick A/B Testing</p>
      <p class="vg-creator">IndyDevDan</p>
      <span class="vg-duration">⏱ 14 min · YAML-driven evals</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="pgyhq-WagIg" href="https://www.youtube.com/results?search_query=OpenAI+Evals+framework+walkthrough" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">OpenAI Evals, Full Walkthrough</p>
      <p class="vg-creator">Manny Bernabe</p>
      <span class="vg-duration">⏱ 18 min · The open-source framework</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="7tQvyM7Chrg" href="https://www.youtube.com/results?search_query=judging+LLM+as+judge+MT+bench+chatbot+arena+paper" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Judging LLM-as-a-Judge (MT-Bench paper)</p>
      <p class="vg-creator">Sungkyunkwan University</p>
      <span class="vg-duration">⏱ 16 min · Position bias + defenses</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid" markdown="0">
  <a class="vg-card" data-video-id="3wAON0Lqviw" href="https://www.youtube.com/results?search_query=Braintrust+LLM+evals+platform+walkthrough" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Braintrust, Hosted Eval Platform</p>
      <p class="vg-creator">Braintrust</p>
      <span class="vg-duration">⏱ 18 min · Datasets + judges + dashboards</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="fLoYcXLG6ro" href="https://www.youtube.com/results?search_query=HELM+holistic+evaluation+language+models+stanford" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">HELM, Holistic Evaluation of LMs</p>
      <p class="vg-creator">PyTorch</p>
      <span class="vg-duration">⏱ 22 min · Academic benchmarking</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="Zgwfw3bzSmQ" href="https://www.youtube.com/results?search_query=multi+armed+bandit+thompson+sampling+production+ML" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Multi-Armed Bandits for Production Rollouts</p>
      <p class="vg-creator">Spotify Engineering</p>
      <span class="vg-duration">⏱ 18 min · Beyond A/B</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **Hamel Husain** | The eval-discipline evangelist; practitioner gold. |
| **Anthropic** | Official Claude eval harness. |
| **Yannic Kilcher** | G-Eval and judge-bias paper reviews. |
| **LlamaIndex** | RAG-specific eval workflows. |
| **Promptfoo** | A/B prompt testing tutorials. |
| **Stanford CRFM** | HELM and academic benchmark depth. |

---

## ✅ After watching

Answer these in your notebook (without re-watching):

1. List the 3 pillars of LLM eval and one strength/weakness of each.
2. State 4 biases of LLM-as-judge and a defense for each.
3. Why do most teams need 70-150 examples in their golden set, not 10?
4. What's the difference between A/B testing and a multi-armed bandit?
5. What does pre-registration prevent, and why?

If you can answer all 5, you're ready for the [Quiz](./Quiz.md). If not, re-watch the Hamel + G-Eval videos.
