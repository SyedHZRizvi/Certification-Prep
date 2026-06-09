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

# 🎥 Module 7 Videos: Adversarial Prompts & Jailbreak Defense

> **How to use:** Click any video card to search YouTube and watch the latest top result for that topic.

## ⭐ Essential watching (~70 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" data-video-id="jrHRe9lSqqA" href="https://www.youtube.com/results?search_query=simon+willison+prompt+injection+talk+explained" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Prompt Injection, Simon Willison Talk</p>
      <p class="vg-creator">Simon Willison</p>
      <span class="vg-duration">⏱ 32 min · The clearest introduction</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="Bj5S1hORApk" href="https://www.youtube.com/results?search_query=DeepSeek+R1+jailbreak+vulnerability+january+2025" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">DeepSeek R1 Jailbreak Storm, Postmortem</p>
      <p class="vg-creator">AI Explained</p>
      <span class="vg-duration">⏱ 22 min · January 2025 incident</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="MppNtk31jNY" href="https://www.youtube.com/results?search_query=indirect+prompt+injection+greshake+paper+walkthrough" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Indirect Prompt Injection (Greshake et al. 2023)</p>
      <p class="vg-creator">Yannic Kilcher</p>
      <span class="vg-duration">⏱ 18 min · The foundational paper</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="Tjsox6vfsos" href="https://www.youtube.com/results?search_query=constitutional+AI+anthropic+bai+2022+walkthrough" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Constitutional AI (Bai et al. 2022), Anthropic</p>
      <p class="vg-creator">Anthropic</p>
      <span class="vg-duration">⏱ 24 min · Safety training paradigm</span>
    </div>
  </a>
</div>

## 📚 Recommended (~50 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" data-video-id="wVzuvf9D9BU" href="https://www.youtube.com/results?search_query=Bing+Sydney+chatbot+prompt+leak+kevin+liu" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Bing Sydney Prompt Leak, Postmortem</p>
      <p class="vg-creator">Computerphile / AI Explained</p>
      <span class="vg-duration">⏱ 18 min · The 2023 case study</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="L1NQoQivAbA" href="https://www.youtube.com/results?search_query=many-shot+jailbreaking+anthropic+long+context" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Many-Shot Jailbreaking (Anthropic 2024)</p>
      <p class="vg-creator">Anthropic Safety</p>
      <span class="vg-duration">⏱ 16 min · Long context as attack vector</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="6oJBTNLMvgk" href="https://www.youtube.com/results?search_query=OpenAI+instruction+hierarchy+wallace+2024+paper" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">The Instruction Hierarchy (Wallace et al. 2024)</p>
      <p class="vg-creator">AI Coffee Break</p>
      <span class="vg-duration">⏱ 14 min · System > User formalized</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid" markdown="0">
  <a class="vg-card" data-video-id="npAcymuDmeA" href="https://www.youtube.com/results?search_query=garak+LLM+vulnerability+scanner+red+team" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">garak, LLM Vulnerability Scanner</p>
      <p class="vg-creator">NVIDIA Research</p>
      <span class="vg-duration">⏱ 18 min · Open-source red-team tool</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="mDiglllKPwg" href="https://www.youtube.com/results?search_query=OWASP+LLM+top+10+security+risks" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">OWASP LLM Top 10, Walkthrough</p>
      <p class="vg-creator">OWASP</p>
      <span class="vg-duration">⏱ 22 min · The security framework</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="kCc8FmEb1nY" href="https://www.youtube.com/results?search_query=LlamaGuard+3+meta+input+output+safety" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">LlamaGuard 3, Input/Output Safety</p>
      <p class="vg-creator">Meta AI</p>
      <span class="vg-duration">⏱ 14 min · Open-source classifier</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **Simon Willison (various talks)** | The clearest writer/speaker on prompt injection. |
| **Anthropic Safety** | Constitutional AI, many-shot, official research. |
| **AI Explained** | Frontier-model incident coverage. |
| **Yannic Kilcher** | Adversarial paper reviews. |
| **OWASP** | LLM Top 10 + security framework deep dives. |
| **NVIDIA Research** | garak + red-team tooling. |

---

## ✅ After watching

Answer these in your notebook (without re-watching):

1. Define direct vs indirect vs multi-modal injection with one example each.
2. List 5 jailbreak families (DAN, encoding, multi-turn, ...).
3. State 5 defenses you'd layer on a customer-facing chatbot.
4. Why is "tool output = untrusted input" a critical principle?
5. What were the engineering lessons from the Sydney leak?

If you can answer all 5, you're ready for the [Quiz](./Quiz.md). If not, re-watch the Simon Willison + DeepSeek videos.
