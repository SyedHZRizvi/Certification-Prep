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

# 🎥 Module 3 Videos: Generative AI Fundamentals

> **How to use:** This is the most concept-dense module so far. Watch on 1.0× speed, pause, and try to redefine each new term out loud before un-pausing. Karpathy's intro is *gold*.

## ⭐ Essential watching (~75 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Karpathy+intro+to+large+language+models+1+hour" target="_blank" rel="noopener" data-video-id="zjkBMFhNj_g">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Intro to Large Language Models</p>
      <p class="vg-creator">Andrej Karpathy</p>
      <span class="vg-duration">⏱ 60 min · The single best free LLM explainer</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=what+are+tokens+embeddings+context+window+explained" target="_blank" rel="noopener" data-video-id="5sLYAQS9sWQ">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Tokens, Embeddings &amp; Context Windows Explained</p>
      <p class="vg-creator">IBM Technology</p>
      <span class="vg-duration">⏱ 10 min · The three concepts that anchor every LLM question</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=AIF-C01+generative+AI+fundamentals+ExamPro" target="_blank" rel="noopener" data-video-id="ME-7gs74g6c">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">AIF-C01, Generative AI Fundamentals Walkthrough</p>
      <p class="vg-creator">ExamPro / Stephane Maarek</p>
      <span class="vg-duration">⏱ 18 min · Domain 2 in one sitting</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=LLM+hallucinations+explained+DeepLearningAI" target="_blank" rel="noopener" data-video-id="cfqtFvWOfg0">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Why LLMs Hallucinate (and How To Reduce It)</p>
      <p class="vg-creator">DeepLearning.AI</p>
      <span class="vg-duration">⏱ 12 min · Sets up RAG &amp; fine-tuning</span>
    </div>
  </a>
</div>

## 📚 Recommended (~35 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=temperature+top+p+top+k+LLM+sampling+explained" target="_blank" rel="noopener" data-video-id="YMIQrH9BQK0">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Temperature, Top-p, Top-k, LLM Sampling Explained</p>
      <p class="vg-creator">DeepLearning.AI</p>
      <span class="vg-duration">⏱ 9 min · The 4 inference knobs visualized</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=3blue1brown+transformers+attention" target="_blank" rel="noopener" data-video-id="wjZofJX0v4M">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Transformers &amp; Attention Visualized</p>
      <p class="vg-creator">3Blue1Brown</p>
      <span class="vg-duration">⏱ 26 min · Optional depth; gorgeous animation</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=multimodal+AI+explained+Amazon+Nova+Claude" target="_blank" rel="noopener" data-video-id="KEzL6VywPBQ">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Multimodal AI, Text + Image + Audio + Video</p>
      <p class="vg-creator">AWS Machine Learning</p>
      <span class="vg-duration">⏱ 10 min · How Nova &amp; Claude handle multiple modalities</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Stephen+Wolfram+what+is+ChatGPT+doing" target="_blank" rel="noopener" data-video-id="flXrLGPY3SU">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">What Is ChatGPT Doing… and Why Does It Work?</p>
      <p class="vg-creator">Stephen Wolfram</p>
      <span class="vg-duration">⏱ 1 hr · Conceptual deep dive, long, rewarding</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=vector+embeddings+semantic+search+pinecone" target="_blank" rel="noopener" data-video-id="EpmIIDC2Xgg">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Vector Embeddings &amp; Semantic Search Explained</p>
      <p class="vg-creator">Pinecone / DeepLearning.AI</p>
      <span class="vg-duration">⏱ 15 min · Sets up RAG (Module 5)</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Stable+Diffusion+how+it+works+explained" target="_blank" rel="noopener" data-video-id="1CIpzeNxIhU">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">How Stable Diffusion Works</p>
      <p class="vg-creator">Two Minute Papers / Computerphile</p>
      <span class="vg-duration">⏱ 14 min · Text-to-image generation explained</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **Andrej Karpathy** | Co-founder OpenAI, ex-Tesla AI lead, clearest explainer alive |
| **DeepLearning.AI** | Andrew Ng's channel, high-quality, structured |
| **3Blue1Brown** | Visual deep-learning math, ideal for transformers |
| **AWS Machine Learning** | Official AWS GenAI demos and customer stories |
| **Two Minute Papers** | Bite-sized recent research highlights |
| **Computerphile** | Whiteboard explanations of AI concepts |
| **IBM Technology** | Surprisingly good short concept explainers |

---

## ✅ After watching

1. Define a foundation model in one sentence.
2. What's the difference between a token and an embedding?
3. Your LLM gives different answers each time for the same query, what knob do you change?
4. List three ways to reduce hallucinations.
5. Why is "context window" both a feature *and* a cost factor?

If all 5 are reflex, you're ready for the [Quiz](./Quiz.md).
