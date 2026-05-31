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

# 🎥 Module 7 Videos: Evaluation & RAGAS

## ⭐ Essential

<div class="vg-grid">
  <a class="vg-card" data-video-id="eLXF0VojuSs" href="https://www.youtube.com/results?search_query=hamel+husain+evaluating+llm+applications" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Evaluating LLM Applications — Hamel Husain</p>
      <p class="vg-creator">Hamel Husain</p>
      <span class="vg-duration">⏱ 1h · The eval-first philosophy</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="fWC4VxolWAk" href="https://www.youtube.com/results?search_query=ragas+evaluation+rag+pipeline+tutorial" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">RAGAS — RAG evaluation tutorial</p>
      <p class="vg-creator">community / RAGAS team</p>
      <span class="vg-duration">⏱ 45m · Faithfulness/relevancy/precision/recall</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="OedaaAa-Sjg" href="https://www.youtube.com/results?search_query=llm+as+judge+biases+mtbench" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">LLM-as-Judge — biases and mitigations</p>
      <p class="vg-creator">paper review</p>
      <span class="vg-duration">⏱ 30m · MT-Bench lessons</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="dHWzcEbb6V0" href="https://www.youtube.com/results?search_query=langsmith+evaluation+dataset+tutorial" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">LangSmith Evaluation walkthrough</p>
      <p class="vg-creator">LangChain DevRel</p>
      <span class="vg-duration">⏱ 35m · Dataset + eval + experiments</span>
    </div>
  </a>
</div>

## 📚 Recommended

<div class="vg-grid">
  <a class="vg-card" data-video-id="lARYS0c4Itk" href="https://www.youtube.com/results?search_query=promptfoo+ab+testing+prompts" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Promptfoo — A/B testing prompts</p>
      <p class="vg-creator">Promptfoo</p>
      <span class="vg-duration">⏱ 30m · YAML-driven experiments</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="aP1Sr7gKf38" href="https://www.youtube.com/results?search_query=arize+phoenix+rag+evaluation" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Arize Phoenix — open-source RAG eval</p>
      <p class="vg-creator">Arize</p>
      <span class="vg-duration">⏱ 40m · Trace + eval together</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="r-HiVE7Sm6c" href="https://www.youtube.com/results?search_query=geval+evaluation+rubric+chain+of+thought" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">G-Eval — rubric + CoT judge</p>
      <p class="vg-creator">paper review</p>
      <span class="vg-duration">⏱ 25m · Better than vanilla judge</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="V49aFGiqzfo" href="https://www.youtube.com/results?search_query=eugene+yan+eval+llm+production" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Production LLM evals — Eugene Yan</p>
      <p class="vg-creator">Eugene Yan</p>
      <span class="vg-duration">⏱ 40m · Practitioner deep dive</span>
    </div>
  </a>
</div>

## 🍿 Optional

<div class="vg-grid">
  <a class="vg-card" data-video-id="9YDfb2lyHcs" href="https://www.youtube.com/results?search_query=openai+evals+library+tutorial" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">OpenAI Evals — library tour</p>
      <p class="vg-creator">OpenAI DevRel</p>
      <span class="vg-duration">⏱ 30m · YAML + Python evals</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="LXKaiZsuJsk" href="https://www.youtube.com/results?search_query=anthropic+evals+harness+repository" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Anthropic Evals — open-source harness</p>
      <p class="vg-creator">Anthropic</p>
      <span class="vg-duration">⏱ 25m · Their internal-ish eval framework</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="bDcwbsjSPCM" href="https://www.youtube.com/results?search_query=inspect+ai+ukaisi+frontier+evals" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Inspect AI — frontier safety evals</p>
      <p class="vg-creator">UK AISI</p>
      <span class="vg-duration">⏱ 35m · Gold-standard rigor</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="YgEvojD_yMM" href="https://www.youtube.com/results?search_query=trulens+open+source+rag+evaluation" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">TruLens — open-source RAG eval</p>
      <p class="vg-creator">TruLens</p>
      <span class="vg-duration">⏱ 30m · Alternative to RAGAS</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels

| Channel | Why |
|---------|-----|
| **Hamel Husain** | Best public talks on the eval-first mindset |
| **Eugene Yan** | Production GenAI lessons; "Patterns for Building LLM-based Systems" |
| **LangChain DevRel** | LangSmith + LangGraph evals |
| **Arize / Phoenix** | Open-source eval + tracing |
| **AI Engineer Conference** | Production eval talks |

---

## ✅ After watching

1. Define the four core RAGAS metrics in your own words.
2. List 5 biases of LLM-as-judge.
3. Why is a golden dataset important?
4. What does it mean to "gate PRs on eval"?
5. CI eval workflow — sketch the YAML.

Then [Quiz](./Quiz.md).
