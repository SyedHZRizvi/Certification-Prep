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

# 🎥 Module 5 Videos: Prompt Engineering & RAG

> **How to use:** This module has the biggest payoff on the exam (Domain 3 = 28%). Watch the Bedrock Knowledge Bases demo *with the AWS Console open in another tab* if you have an account.

## ⭐ Essential watching (~75 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=DeepLearningAI+ChatGPT+prompt+engineering+for+developers" target="_blank" rel="noopener" data-video-id="tRvcAdqsJWo">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Prompt Engineering for Developers</p>
      <p class="vg-creator">DeepLearning.AI / Andrew Ng</p>
      <span class="vg-duration">⏱ 25 min (highlight reel) · Zero/few-shot, CoT, structure</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Knowledge+Bases+for+Amazon+Bedrock+demo" target="_blank" rel="noopener" data-video-id="NU3RGTPUMyI">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Knowledge Bases for Amazon Bedrock — End-to-End Demo</p>
      <p class="vg-creator">AWS Machine Learning</p>
      <span class="vg-duration">⏱ 18 min · The exam's reference RAG architecture</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Bedrock+Agents+walkthrough+AWS" target="_blank" rel="noopener" data-video-id="UcehCSSOMQA">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Bedrock Agents — Plan, Reason, and Call APIs</p>
      <p class="vg-creator">AWS Online Tech Talks</p>
      <span class="vg-duration">⏱ 20 min · Action groups, ReAct loop, KBs</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=prompt+injection+jailbreaking+LLM+security+OWASP" target="_blank" rel="noopener" data-video-id="jrHRe9lSqqA">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Prompt Injection &amp; Jailbreaking — LLM Security 101</p>
      <p class="vg-creator">IBM Technology / OWASP</p>
      <span class="vg-duration">⏱ 12 min · Direct, indirect, defenses</span>
    </div>
  </a>
</div>

## 📚 Recommended (~35 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=RAG+explained+retrieval+augmented+generation+IBM" target="_blank" rel="noopener" data-video-id="T-D1OfcDW1M">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Retrieval-Augmented Generation Explained</p>
      <p class="vg-creator">IBM Technology</p>
      <span class="vg-duration">⏱ 8 min · Best 8-minute RAG primer</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Chain+of+Thought+prompting+explained" target="_blank" rel="noopener" data-video-id="AFE6x81AP4k">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Chain-of-Thought Prompting Explained</p>
      <p class="vg-creator">DeepLearning.AI</p>
      <span class="vg-duration">⏱ 10 min · Why "think step-by-step" works</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=hybrid+search+vector+keyword+OpenSearch" target="_blank" rel="noopener" data-video-id="emKkoeFjH_M">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Hybrid Search — Vector + Keyword Together</p>
      <p class="vg-creator">AWS OpenSearch</p>
      <span class="vg-duration">⏱ 12 min · Why pure semantic isn't enough</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Aurora+pgvector+RAG+demo" target="_blank" rel="noopener" data-video-id="e9SHaO9RNzk">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Aurora pgvector for RAG</p>
      <p class="vg-creator">AWS Database</p>
      <span class="vg-duration">⏱ 22 min · Vector search inside Postgres</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=GraphRAG+knowledge+graph+RAG+Neptune" target="_blank" rel="noopener" data-video-id="HJAGy-PA2fY">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">GraphRAG with Amazon Neptune</p>
      <p class="vg-creator">AWS re:Invent</p>
      <span class="vg-duration">⏱ 30 min · Multi-hop reasoning over graphs</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=ReAct+prompting+agents+LangChain" target="_blank" rel="noopener" data-video-id="EcB0PiNmbFo">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">ReAct Prompting — Reason &amp; Act</p>
      <p class="vg-creator">DeepLearning.AI</p>
      <span class="vg-duration">⏱ 14 min · Agentic loops explained</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **DeepLearning.AI** | The best free prompting + RAG content |
| **AWS Machine Learning** | Bedrock KBs and Agents demos |
| **IBM Technology** | Short, clean explainers |
| **AWS Online Tech Talks** | Service deep dives |
| **AWS re:Invent** | Reference architectures (GraphRAG, KBs, Agents) |
| **OWASP Foundation** | LLM security best practices |

---

## ✅ After watching

1. List the 5 prompt-engineering techniques and one use case each.
2. What's the difference between direct and indirect prompt injection?
3. Walk through the 2 phases of RAG (index, query) end-to-end.
4. Name 4 vector stores supported by Bedrock Knowledge Bases.
5. When should you reach for a Bedrock Agent vs a Knowledge Base alone?

If you've got all 5, you're ready for the [Quiz](./Quiz.md).
