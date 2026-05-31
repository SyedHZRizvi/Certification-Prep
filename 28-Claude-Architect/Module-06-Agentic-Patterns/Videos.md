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

# 🎥 Module 6 Videos: Agentic Patterns with Claude

> **How to use:** Read Anthropic's "Building Effective Agents" essay BEFORE this video block — many of these videos are walkthroughs of that essay. Then build a small agent loop alongside the videos.

## ⭐ Essential watching (~70 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Anthropic+Building+Effective+Agents+talk+walkthrough" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Building Effective Agents — Anthropic Talk</p>
      <p class="vg-creator">Anthropic</p>
      <span class="vg-duration">⏱ 25 min · The canonical reference</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="EcB0PiNmbFo" href="https://www.youtube.com/results?search_query=ReAct+agent+pattern+Claude+tutorial" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">ReAct Agent Pattern with Claude</p>
      <p class="vg-creator">Anthropic / community</p>
      <span class="vg-duration">⏱ 18 min · Reason + Act loop</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="eLXF0VojuSs" href="https://www.youtube.com/results?search_query=Hamel+Husain+evals+for+AI+products+talk" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Evals — Your AI Product Needs Them</p>
      <p class="vg-creator">Hamel Husain</p>
      <span class="vg-duration">⏱ 25 min · Must watch</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Anthropic+claude+agent+SDK+overview" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Claude Agent SDK — Overview</p>
      <p class="vg-creator">Anthropic</p>
      <span class="vg-duration">⏱ 15 min · Reference implementation</span>
    </div>
  </a>
</div>

## 📚 Recommended (~60 min)

<div class="vg-grid">
  <a class="vg-card" data-video-id="oFfVt3S51T4" href="https://www.youtube.com/results?search_query=Cursor+Composer+agent+architecture+orchestrator+workers" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Cursor Composer — Architecture Deep Dive</p>
      <p class="vg-creator">Cursor team</p>
      <span class="vg-duration">⏱ 25 min · Orchestrator-workers in production</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="fo16YPmuX9M" href="https://www.youtube.com/results?search_query=Replit+Agent+architecture+walkthrough" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Replit Agent — Architecture Walkthrough</p>
      <p class="vg-creator">Replit team</p>
      <span class="vg-duration">⏱ 20 min · Confirmation gates story</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="OedaaAa-Sjg" href="https://www.youtube.com/results?search_query=LLM+as+judge+evaluation+rubric+Anthropic" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">LLM-as-Judge — Rubrics and Patterns</p>
      <p class="vg-creator">community / Anthropic</p>
      <span class="vg-duration">⏱ 15 min · How to score outputs</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=extended+thinking+Claude+reasoning+budget" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Extended Thinking — Claude 4 Reasoning</p>
      <p class="vg-creator">Anthropic</p>
      <span class="vg-duration">⏱ 12 min · Deep reasoning mode</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" data-video-id="2E_On-TfOAU" href="https://www.youtube.com/results?search_query=Langfuse+tracing+LLM+agent+observability" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Langfuse — Agent Tracing & Observability</p>
      <p class="vg-creator">Langfuse</p>
      <span class="vg-duration">⏱ 20 min · Trace replay</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=LangChain+vs+raw+SDK+agent+debate" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">LangChain vs Raw SDK — The Debate</p>
      <p class="vg-creator">community / AI Engineer</p>
      <span class="vg-duration">⏱ 25 min · When to use frameworks</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=hierarchical+agent+orchestrator+pattern+LLM" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Hierarchical Agents — Orchestrator Patterns</p>
      <p class="vg-creator">community</p>
      <span class="vg-duration">⏱ 20 min · Sub-agent delegation</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Lindy+AI+production+agent+architecture" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Lindy — Production Agent Architecture</p>
      <p class="vg-creator">Lindy team</p>
      <span class="vg-duration">⏱ 25 min · Enterprise agents</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **Anthropic (official)** | Authoritative; Building Effective Agents authors. |
| **Hamel Husain** | Evals-first thinking; brutal honesty about what works. |
| **Cursor / Replit / Lindy** | Real production agent architecture stories. |
| **Latent Space podcast** | Frequent episodes with frontier agent builders. |
| **AI Engineer Conf** | Production agent talks. |
| **Langfuse / Phoenix** | Observability deep dives. |

---

## ✅ After watching

Answer these in your notebook (without re-watching):

1. Five canonical workflow patterns from "Building Effective Agents"?
2. The 6 hard parts of an agent loop (beyond the loop itself)?
3. When does evaluator-optimizer beat single-call generation?
4. LLM-as-judge — give a rubric for evaluating a customer-support response.
5. The "Replit lesson" — what changed when they added confirmation gates?

If you can answer all 5, you're ready for the [Quiz](./Quiz.md). If not, re-watch Building Effective Agents.
