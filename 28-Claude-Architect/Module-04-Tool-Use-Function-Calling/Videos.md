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

# 🎥 Module 4 Videos: Tool Use & Function Calling

> **How to use:** Tool use is best learned by *doing*. After each video, open the Anthropic Cookbook's `tool_use` folder and run that exact pattern locally. The 3-tool weather example takes <30 minutes to spin up.

## ⭐ Essential watching (~65 min)

<div class="vg-grid">
  <a class="vg-card" data-video-id="2HsmNeT8TCg" href="https://www.youtube.com/results?search_query=Anthropic+tool+use+tutorial+Claude" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Tool Use With Claude — Official Tutorial</p>
      <p class="vg-creator">Anthropic</p>
      <span class="vg-duration">⏱ 18 min · End-to-end</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Anthropic+parallel+tool+use+disable+tool_choice" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Parallel Tool Use and tool_choice</p>
      <p class="vg-creator">Anthropic / community</p>
      <span class="vg-duration">⏱ 12 min · Concurrency semantics</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="ODaHJzOyVCQ" href="https://www.youtube.com/results?search_query=Claude+computer+use+demo+screenshot+click" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Computer Use Demo — Screenshots & Clicks</p>
      <p class="vg-creator">Anthropic (Oct 2024 launch)</p>
      <span class="vg-duration">⏱ 15 min · The beta in action</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Claude+structured+output+forced+tool+use+JSON+schema" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Structured Output Via Forced Tool Use</p>
      <p class="vg-creator">community / Anthropic Cookbook</p>
      <span class="vg-duration">⏱ 20 min · Schema-strict pattern</span>
    </div>
  </a>
</div>

## 📚 Recommended (~50 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Claude+tool+use+best+practices+description+JSON+schema" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Tool Description Best Practices</p>
      <p class="vg-creator">Anthropic DevRel</p>
      <span class="vg-duration">⏱ 12 min · Writing the description</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Claude+multi+turn+tool+loop+agent+Python" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">The Multi-Turn Tool Loop — Python Walkthrough</p>
      <p class="vg-creator">community</p>
      <span class="vg-duration">⏱ 15 min · while-loop pattern</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Sourcegraph+Cody+agentic+mode+tools+architecture" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Sourcegraph Cody Agentic Mode — Architecture</p>
      <p class="vg-creator">Sourcegraph</p>
      <span class="vg-duration">⏱ 20 min · Enterprise tool design</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="HpVnExE5cgI" href="https://www.youtube.com/results?search_query=Anthropic+tool+use+vs+OpenAI+function+calling" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Anthropic Tool Use vs OpenAI Function Calling</p>
      <p class="vg-creator">community</p>
      <span class="vg-duration">⏱ 12 min · Differences</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Claude+computer+use+docker+sandbox+setup" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Computer Use — Docker Sandbox Setup</p>
      <p class="vg-creator">Anthropic / community</p>
      <span class="vg-duration">⏱ 25 min · Self-host the executor</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Claude+tool+use+JSON+schema+enum+pattern+validation" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">JSON Schema Features in Tool Definitions</p>
      <p class="vg-creator">community</p>
      <span class="vg-duration">⏱ 15 min · enum, pattern, format</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="fo16YPmuX9M" href="https://www.youtube.com/results?search_query=Replit+Agent+architecture+claude+tools" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Replit Agent — Architecture Deep Dive</p>
      <p class="vg-creator">Replit team</p>
      <span class="vg-duration">⏱ 30 min · Production agent</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="jrHRe9lSqqA" href="https://www.youtube.com/results?search_query=Anthropic+tool+use+prompt+injection+defense+tools" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Defending Tool-Using Agents Against Injection</p>
      <p class="vg-creator">Simon Willison / community</p>
      <span class="vg-duration">⏱ 25 min · Module 8 preview</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **Anthropic (official)** | Authoritative; tool use, computer use, agent patterns. |
| **Sourcegraph** | Enterprise agentic-coding architecture. |
| **Cursor team** | The bake-off and tool design story. |
| **Replit team** | Production agent architecture (Replit Agent). |
| **Simon Willison** | Smart, skeptical takes on agentic AI, prompt injection. |
| **AI Engineer Conf** | Production tool-use talks. |

---

## ✅ After watching

Answer these in your notebook (without re-watching):

1. What role do you use to send tool results back to Claude?
2. The four values of `tool_choice` and what each does?
3. Parallel tool use — how does Claude communicate it?
4. What does computer use give you and what beta header opts you in?
5. Three rules for designing a safe tool suite?

If you can answer all 5, you're ready for the [Quiz](./Quiz.md). If not, re-watch the essential block.
