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

# 🎥 Module 6 Videos: AI Agent Build Walkthroughs

> **How to use:** Tutorials on Claude API, Cursor, Replit Agent, and structured prompting. Watch Essential 4 BEFORE you start. Build, then re-watch as reference.

## ⭐ Essential watching (~90 min)

<div class="vg-grid">
  <a class="vg-card" data-video-id="VxhrGyZJPPY" href="https://www.youtube.com/results?search_query=Claude+API+tutorial+for+beginners+Python+2026" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Claude API Tutorial — Build Your First Agent</p>
      <p class="vg-creator">Anthropic / AI dev channels</p>
      <span class="vg-duration">⏱ 25 min · Python + messages.create</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="cE84Q5IRR6U" href="https://www.youtube.com/results?search_query=Cursor+tutorial+for+beginners+complete+2026" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Cursor Full Tutorial — AI Pair Programming</p>
      <p class="vg-creator">Various dev channels</p>
      <span class="vg-duration">⏱ 20 min · How to vibe-code as a marketer</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="fo16YPmuX9M" href="https://www.youtube.com/results?search_query=Replit+Agent+build+app+tutorial+2026" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Build A Web App In 30 Min With Replit Agent</p>
      <p class="vg-creator">Replit / Various</p>
      <span class="vg-duration">⏱ 18 min · No-code-ish path</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="ysPbXH0LpIE" href="https://www.youtube.com/results?search_query=prompt+engineering+system+prompts+structured+output" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Prompt Engineering — System Prompts + Structured Output</p>
      <p class="vg-creator">Anthropic / Various</p>
      <span class="vg-duration">⏱ 22 min · The skill that makes agents reliable</span>
    </div>
  </a>
</div>

## 📚 Recommended (~60 min)

<div class="vg-grid">
  <a class="vg-card" data-video-id="2HsmNeT8TCg" href="https://www.youtube.com/results?search_query=Claude+tool+use+function+calling+tutorial" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Claude Tool Use / Function Calling</p>
      <p class="vg-creator">Anthropic</p>
      <span class="vg-duration">⏱ 15 min · The upgrade from chat to agent</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="3FJF88hF3no" href="https://www.youtube.com/results?search_query=Python+web+scraping+BeautifulSoup+tutorial+2026" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Web Scraping With BeautifulSoup For Marketers</p>
      <p class="vg-creator">Python channels</p>
      <span class="vg-duration">⏱ 14 min · For competitor research agents</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="bksK2mdaLNs" href="https://www.youtube.com/results?search_query=GitHub+for+beginners+how+to+push+repo+2026" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">GitHub For Beginners — Push Your First Repo</p>
      <p class="vg-creator">Various</p>
      <span class="vg-duration">⏱ 12 min · Required for the portfolio</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="qHPonmSX4Ms" href="https://www.youtube.com/results?search_query=OpenAI+Assistants+API+tutorial+2026" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">OpenAI Assistants API Tutorial</p>
      <p class="vg-creator">OpenAI / Various</p>
      <span class="vg-duration">⏱ 18 min · Alternative to Claude</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" data-video-id="C1g4_YQJEg8" href="https://www.youtube.com/results?search_query=Continue.dev+VS+Code+free+AI+coding" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Continue.dev — Free Cursor Alternative</p>
      <p class="vg-creator">Continue / Various</p>
      <span class="vg-duration">⏱ 15 min · If you want free</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="sVcwVQRHIc8" href="https://www.youtube.com/results?search_query=RAG+retrieval+augmented+generation+marketing+tutorial" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">RAG Tutorial For Marketing Use Cases</p>
      <p class="vg-creator">Various</p>
      <span class="vg-duration">⏱ 20 min · For document-aware agents</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="VRDNyFj-xeE" href="https://www.youtube.com/results?search_query=Anthropic+cookbook+agent+examples+code" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Anthropic Cookbook — Real Agent Examples</p>
      <p class="vg-creator">Anthropic</p>
      <span class="vg-duration">⏱ 25 min · Reference implementations</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **Anthropic (official)** | Claude API tutorials + best practices |
| **OpenAI (official)** | Same for OpenAI |
| **Greg Isenberg** | AI + indie product use cases |
| **AI Jason** | Building AI agents with code |
| **David Ondrej** | Replit Agent + no-code AI builds |
| **Pierre de Wulf** | AI in marketing engineering |
| **Riley Brown** | AI tutorials for non-engineers |

---

## ✅ After watching

Answer these in your notebook (without re-watching):

1. What's the difference between a "chat" with Claude and an "agent" using Claude?
2. What's a system prompt vs a user message?
3. What's tool use / function calling?
4. What's the difference between Cursor, Continue.dev, and Replit Agent?
5. What goes in `.env` and why should it never be committed?

If you can answer all 5, you're ready to build. Otherwise re-watch Essential #1 and #4.
