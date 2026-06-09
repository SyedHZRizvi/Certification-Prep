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
</style>

# 🎥 Module 4 Videos: LangChain, LlamaIndex & LangGraph

## ⭐ Essential watching

<div class="vg-grid" markdown="0">
  <a class="vg-card" data-video-id="9M8x485j_lU" href="https://www.youtube.com/results?search_query=langchain+lcel+expression+language+tutorial" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">LCEL, LangChain Expression Language deep dive</p>
      <p class="vg-creator">LangChain DevRel</p>
      <span class="vg-duration">⏱ 45m · The modern composition primitive</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="5h-JBkySK34" href="https://www.youtube.com/results?search_query=langgraph+harrison+chase+stateful+agents" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">LangGraph, Building Stateful Agents</p>
      <p class="vg-creator">Harrison Chase</p>
      <span class="vg-duration">⏱ 1h · From the LangChain CEO</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="WL7V9JUy2sE" href="https://www.youtube.com/results?search_query=llama+index+jerry+liu+building+RAG+apps" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">LlamaIndex, Building Production RAG</p>
      <p class="vg-creator">Jerry Liu (LlamaIndex CEO)</p>
      <span class="vg-duration">⏱ 50m · From the source</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="7j_NE6Pjv-E" href="https://www.youtube.com/results?search_query=anthropic+mcp+model+context+protocol+tutorial" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">MCP, Model Context Protocol explained</p>
      <p class="vg-creator">Anthropic / community</p>
      <span class="vg-duration">⏱ 30m · The universal tool protocol</span>
    </div>
  </a>
</div>

## 📚 Recommended

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=langchain+vs+llamaindex+which+to+choose" data-video-id="P7_agAiUdXw" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">LangChain vs LlamaIndex, head-to-head</p>
      <p class="vg-creator">community comparisons</p>
      <span class="vg-duration">⏱ 30m · Honest pros and cons</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=llama+index+workflows+event+driven" data-video-id="VNvOuEb4-0Y" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">LlamaIndex Workflows, event-driven async</p>
      <p class="vg-creator">LlamaIndex DevRel</p>
      <span class="vg-duration">⏱ 35m · The LangGraph competitor</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="3wAON0Lqviw" href="https://www.youtube.com/results?search_query=langsmith+tracing+evaluation+walkthrough" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">LangSmith, tracing + evaluation walkthrough</p>
      <p class="vg-creator">LangChain DevRel</p>
      <span class="vg-duration">⏱ 40m · The observability story</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=tool+calling+function+calling+anthropic+openai" data-video-id="pRybm9lXW2c" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Tool calling, the universal pattern</p>
      <p class="vg-creator">Anthropic / OpenAI cookbooks</p>
      <span class="vg-duration">⏱ 25m · How it works under the hood</span>
    </div>
  </a>
</div>

## 🍿 Optional

<div class="vg-grid" markdown="0">
  <a class="vg-card" data-video-id="ViykMqljjxU" href="https://www.youtube.com/results?search_query=replit+langgraph+agent+production" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Replit Agent on LangGraph, production lessons</p>
      <p class="vg-creator">Replit engineering</p>
      <span class="vg-duration">⏱ 40m · Real-world architecture</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=langchain+langserve+production+deployment" data-video-id="X-AWdfSFCHQ" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">LangServe production deployment</p>
      <p class="vg-creator">LangChain DevRel</p>
      <span class="vg-duration">⏱ 30m · FastAPI for Runnables</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="9BPCV5TYPmg" href="https://www.youtube.com/results?search_query=langgraph+human+in+the+loop+interrupt" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">LangGraph human-in-the-loop patterns</p>
      <p class="vg-creator">LangChain DevRel</p>
      <span class="vg-duration">⏱ 35m · Interrupt + resume</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="bPoNCkjDmco" href="https://www.youtube.com/results?search_query=llama+index+knowledge+graph+rag" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">LlamaIndex KnowledgeGraphIndex</p>
      <p class="vg-creator">LlamaIndex DevRel</p>
      <span class="vg-duration">⏱ 30m · KG construction</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels

| Channel | Why |
|---------|-----|
| **LangChain (Harrison Chase, Lance Martin)** | The source for LCEL + LangGraph |
| **LlamaIndex (Jerry Liu)** | Equally rigorous; complementary perspective |
| **AI Engineer Conference** | Production-engineer talks |
| **Greg Kamradt** | Practical comparisons + RAG patterns |

---

## ✅ After watching

1. Write the LCEL chain for a basic RAG in 5 lines.
2. When does LangGraph beat LCEL? Give 2 scenarios.
3. List 4 LlamaIndex index types and what each is good at.
4. Tool calling, describe the 5-step universal pattern.
5. MCP, what problem does it solve?

Crisp? On to the [Quiz](./Quiz.md).
