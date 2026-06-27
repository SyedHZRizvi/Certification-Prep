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

# 🎥 Module 5 Videos: Model Context Protocol (MCP)

> **How to use:** MCP is newest and shifts most. Bias to Anthropic-channel videos and watch in publication order, the spec evolved through 2025. Build something after the essential block.

## ⭐ Essential watching (~60 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" data-video-id="CQywdSdi5iA" href="https://www.youtube.com/results?search_query=Anthropic+Model+Context+Protocol+announcement+introduction" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Introducing the Model Context Protocol</p>
      <p class="vg-creator">Anthropic</p>
      <span class="vg-duration">⏱ 18 min · The official intro</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=MCP+server+build+tutorial+Python" data-video-id="RhTiAOGwbYE" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Build Your First MCP Server (Python)</p>
      <p class="vg-creator">KodeKloud</p>
      <span class="vg-duration">⏱ 20 min · Walkthrough</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Claude+Desktop+MCP+filesystem+github+setup" data-video-id="0-0BR3H28ic" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Claude Desktop + MCP Servers Setup</p>
      <p class="vg-creator">Harshit Tyagi</p>
      <span class="vg-duration">⏱ 15 min · Configuration walkthrough</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=MCP+tools+resources+prompts+three+primitives" data-video-id="kQmXtrmQ5Zg" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Tools / Resources / Prompts, The Three MCP Primitives</p>
      <p class="vg-creator">community / Matt Pocock</p>
      <span class="vg-duration">⏱ 12 min · Spec primitives</span>
    </div>
  </a>
</div>

## 📚 Recommended (~55 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=MCP+TypeScript+SDK+tutorial+build+server" data-video-id="XC49e0pliEE" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">MCP TypeScript SDK, Build a Server</p>
      <p class="vg-creator">logicBase Labs</p>
      <span class="vg-duration">⏱ 18 min · TS-flavored</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=MCP+stdio+vs+SSE+transport+differences" data-video-id="SDOHGfR5abM" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">stdio vs SSE Transports, Trade-offs</p>
      <p class="vg-creator">Kreate Kloud</p>
      <span class="vg-duration">⏱ 12 min · Local vs remote</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Cursor+MCP+server+integration+tutorial" data-video-id="RkPU7eCG_FM" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Cursor + MCP Server Integration</p>
      <p class="vg-creator">DSwithBappy</p>
      <span class="vg-duration">⏱ 15 min · Editor-side flow</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Block+Goose+open+source+Claude+agent+MCP" data-video-id="hFFwgyQeEQc" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Goose, Block's Open-Source MCP-First Agent</p>
      <p class="vg-creator">goose OSS</p>
      <span class="vg-duration">⏱ 10 min · Production MCP at scale</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=MCP+server+registry+mcphub+browse+install" data-video-id="W19jh6nbFwY" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">MCP Server Registries (mcp.so, mcphub)</p>
      <p class="vg-creator">AI Anytime</p>
      <span class="vg-duration">⏱ 15 min · Ecosystem tour</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=MCP+security+remote+server+OAuth+best+practices" data-video-id="gl6U8s3zStI" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Securing Remote MCP Servers</p>
      <p class="vg-creator">Alejandro AO</p>
      <span class="vg-duration">⏱ 25 min · OAuth + mTLS patterns</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=MCP+JSON-RPC+spec+protocol+walkthrough" data-video-id="yscqs6Ks9fk" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">MCP JSON-RPC Spec Walkthrough</p>
      <p class="vg-creator">Dallas Software Developers</p>
      <span class="vg-duration">⏱ 30 min · The wire protocol</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=MCP+vs+OpenAI+function+calling+vs+LangChain+tools" data-video-id="TlIOk8VuEBU" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">MCP vs Function Calling vs LangChain Tools</p>
      <p class="vg-creator">Piyush Garg</p>
      <span class="vg-duration">⏱ 18 min · Where each fits</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **Anthropic (official)** | Authoritative; spec updates, reference servers. |
| **Matt Pocock** | Excellent TS-flavored MCP server tutorials. |
| **Block (Goose team)** | Production-scale MCP architecture. |
| **Cursor team** | Editor-side MCP integration. |
| **AI Engineer Conf** | MCP talks from production teams. |

---

## ✅ After watching

Answer these in your notebook (without re-watching):

1. Three MCP primitives?
2. Two main transports and when to use each?
3. The handshake methods (what client and server exchange first)?
4. Why is MCP "not the same as" Anthropic tool_use?
5. Where do you configure MCP servers for Claude Desktop?

If you can answer all 5, you're ready for the [Quiz](./Quiz.md). If not, re-watch the essentials and build the hello-world server.
