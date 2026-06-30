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

# 🎥 Module 1 Videos: ML Foundations & The AWS ML Landscape

> **How to use:** Click any card to search YouTube for the topic, top result is usually the freshest take. Watch in order, pause to take notes, then come back to the Quiz.

## ⭐ Essential watching (~75 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=AWS+Machine+Learning+Engineer+Associate+MLA-C01+exam+overview" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>📝</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">AWS ML Engineer Associate (MLA-C01) Exam Overview</p>
      <p class="vg-creator">K21Academy</p>
      <span class="vg-duration">⏱ 18 min · Format, weights, study strategy</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="z-W5uR8mzsU" href="https://www.youtube.com/results?search_query=supervised+vs+unsupervised+vs+reinforcement+learning+StatQuest" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🧠</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Supervised vs Unsupervised vs Reinforcement Learning</p>
      <p class="vg-creator">StatQuest (Josh Starmer)</p>
      <span class="vg-duration">⏱ 14 min · The three families, intuition first</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="EuBBz3bI-aA" href="https://www.youtube.com/results?search_query=bias+variance+tradeoff+StatQuest+intuition" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎲</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Bias-Variance Trade-Off Explained</p>
      <p class="vg-creator">StatQuest</p>
      <span class="vg-duration">⏱ 12 min · Why overfit happens and how to spot it</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="mzkHGEyAPEw" href="https://www.youtube.com/results?search_query=AWS+SageMaker+overview+for+beginners+2024" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>☁️</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Amazon SageMaker Overview, What & Why</p>
      <p class="vg-creator">AWS Online Tech Talks</p>
      <span class="vg-duration">⏱ 16 min · Studio, training, hosting in one tour</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="ZZufmT_KIhQ" href="https://www.youtube.com/results?search_query=AWS+AI+ML+stack+overview+Comprehend+Rekognition+Bedrock" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🏛️</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">The Complete AWS AI / ML Service Stack</p>
      <p class="vg-creator">Be A Better Dev</p>
      <span class="vg-duration">⏱ 15 min · L5 managed services, Bedrock, SageMaker</span>
    </div>
  </a>
</div>

## 📚 Recommended (~40 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" data-video-id="MWT8VIj6oAU" href="https://www.youtube.com/results?search_query=Capital+One+SageMaker+fraud+detection+reinvent" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🏦</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Capital One Real-Time Fraud Detection on SageMaker</p>
      <p class="vg-creator">AWS Events</p>
      <span class="vg-duration">⏱ 50 min · The canonical reference architecture</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="4jRBRDbJemM" href="https://www.youtube.com/results?search_query=evaluation+metrics+precision+recall+F1+ROC+AUC+StatQuest" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎯</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Precision, Recall, F1, ROC AUC, All In One</p>
      <p class="vg-creator">StatQuest</p>
      <span class="vg-duration">⏱ 20 min · Read any confusion matrix in 30s</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="IHZwWFHWa-w" href="https://www.youtube.com/results?search_query=gradient+descent+intuition+3blue1brown" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>⛰️</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Gradient Descent, Visual Intuition</p>
      <p class="vg-creator">3Blue1Brown</p>
      <span class="vg-duration">⏱ 21 min · The math you actually need</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid" markdown="0">
  <a class="vg-card" data-video-id="XPD44Xqlo9s" href="https://www.youtube.com/results?search_query=AWS+Well-Architected+Machine+Learning+Lens" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🧭</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">AWS Well-Architected, The Machine Learning Lens</p>
      <p class="vg-creator">AWS Events</p>
      <span class="vg-duration">⏱ 38 min · Production ML best practice</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="6QRpDLj8huE" href="https://www.youtube.com/results?search_query=Andrew+Ng+machine+learning+basics+intuition" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎓</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Andrew Ng, Machine Learning Fundamentals</p>
      <p class="vg-creator">Machine Learning and AI</p>
      <span class="vg-duration">⏱ 60 min · The canonical intro lecture</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="r9vZzSka0mY" href="https://www.youtube.com/results?search_query=Netflix+recommendation+system+ML+architecture" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">How Netflix Builds Its Recommendation System</p>
      <p class="vg-creator">Sundog Education with Frank Kane</p>
      <span class="vg-duration">⏱ 45 min · Real production ML at planet scale</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="8_Xs8Ik0h1w" href="https://www.youtube.com/results?search_query=Werner+Vogels+reinvent+keynote+2024+AI+ML" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎤</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Werner Vogels re:Invent Keynote, ML Roadmap</p>
      <p class="vg-creator">AWS Events</p>
      <span class="vg-duration">⏱ 90 min · AWS's CTO on the year's ML strategy</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **StatQuest with Josh Starmer** | Best intuitive ML explainers on YouTube, every MLA-C01 topic in one place |
| **Stephane Maarek** | Best-selling Udemy AWS courses; YouTube has free MLS clips |
| **AWS Online Tech Talks / AWS Events** | Official source; deep technical content on every SageMaker / Bedrock feature |
| **Be A Better Dev** | Short, animated AWS service explainers |
| **3Blue1Brown** | The math behind ML, neural nets, gradient descent, linear algebra |
| **Two Minute Papers** | Cutting-edge ML / AI research distilled to 2-minute videos |
| **DeepLearningAI** | Andrew Ng's official YouTube, gold standard for fundamentals |

---

## ✅ After watching

Answer these in your notebook (without re-watching):

1. Name the three families of ML and one example algorithm in each.
2. What are the symptoms of overfitting vs underfitting? What is the canonical fix for each?
3. Sketch the 7-layer AWS ML stack and name one service per layer.
4. Why is accuracy the WRONG metric on imbalanced data? Name two better ones.
5. In the Capital One fraud architecture, why did they pick XGBoost over a deep neural network?

If you can answer all 5, you're ready for the [Quiz](./Quiz.md). If not, re-watch the "Three Families" and "AWS ML Stack" videos.
