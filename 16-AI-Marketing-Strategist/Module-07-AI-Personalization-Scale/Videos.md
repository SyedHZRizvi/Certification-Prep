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

# 🎥 Module 7 Videos: AI Personalization at Scale

> **How to use:** The Netflix engineering talks are gold. They are the most cited industry source for production recsys.

## ⭐ Essential watching (~90 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" data-video-id="4aNfPe-pQqI" href="https://www.youtube.com/results?search_query=Netflix+recommendation+system+talk+engineering" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Netflix Recommendation System Talk</p>
      <p class="vg-creator">Netflix Research</p>
      <span class="vg-duration">⏱ 25 min · Production recsys</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="Zgwfw3bzSmQ" href="https://www.youtube.com/results?search_query=multi+armed+bandit+thompson+sampling+explained" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Multi-Armed Bandits + Thompson Sampling</p>
      <p class="vg-creator">DeepMind / Berkeley</p>
      <span class="vg-duration">⏱ 22 min · The math</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="ZspR5PZemcs" href="https://www.youtube.com/results?search_query=matrix+factorization+recommendation+netflix+prize" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Matrix Factorization for Recsys</p>
      <p class="vg-creator">Andrew Ng / Stanford</p>
      <span class="vg-duration">⏱ 18 min · The Netflix Prize foundation</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="o-pZk5R0TZg" href="https://www.youtube.com/results?search_query=two+tower+model+recommendation+systems+TFRS" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Two-Tower Models, Modern Recsys</p>
      <p class="vg-creator">Google TFRS</p>
      <span class="vg-duration">⏱ 25 min · Embeddings + ANN</span>
    </div>
  </a>
</div>

## 📚 Recommended (~55 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" data-video-id="PUtYNjInopA" href="https://www.youtube.com/results?search_query=Spotify+Discover+Weekly+how+it+works" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">How Spotify Discover Weekly Works</p>
      <p class="vg-creator">Spotify Engineering</p>
      <span class="vg-duration">⏱ 18 min · Behind the algorithm</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="n2T_z_hMNKA" href="https://www.youtube.com/results?search_query=Pinterest+PinSage+graph+neural+network+recsys" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Pinterest PinSage (GNN Recsys)</p>
      <p class="vg-creator">Pinterest Engineering</p>
      <span class="vg-duration">⏱ 22 min · Graph-based recsys</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="6r2UFiCr38I" href="https://www.youtube.com/results?search_query=dynamic+yield+optimizely+personalization+demo" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Dynamic Yield Platform Walkthrough</p>
      <p class="vg-creator">Dynamic Yield / Mastercard</p>
      <span class="vg-duration">⏱ 15 min · Enterprise personalization</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid" markdown="0">
  <a class="vg-card" data-video-id="4pYHEzwTa78" href="https://www.youtube.com/results?search_query=BERT4Rec+SASRec+sequential+recommendation" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Sequential Recsys: BERT4Rec &amp; SASRec</p>
      <p class="vg-creator">ACM Recsys Conference</p>
      <span class="vg-duration">⏱ 35 min · Transformer-based recsys</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="PmVv2i1UUWY" href="https://www.youtube.com/results?search_query=Meta+Advantage+Plus+creative+AI" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Meta Advantage+ Creative</p>
      <p class="vg-creator">Meta Blueprint</p>
      <span class="vg-duration">⏱ 18 min · GenAI for ads</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="r9J3UZmddC4" href="https://www.youtube.com/results?search_query=DLRM+meta+deep+learning+recommendation+model" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Meta DLRM Architecture</p>
      <p class="vg-creator">Meta AI Research</p>
      <span class="vg-duration">⏱ 30 min · Production at billions of users</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **Netflix Research** | THE production recsys source |
| **Spotify R&D** | Discover Weekly + audio recsys |
| **Pinterest Engineering** | Graph + visual recsys |
| **Google TFRS** | TensorFlow Recommenders library |
| **DeepLearning.AI** | Math + practice |
| **Reforge** | Strategic frame on personalization |

---

## ✅ After watching

1. What is the cost-of-churn estimate for Netflix's recommendation system?
2. Name the 3 bandit algorithms, which is the production default?
3. What does matrix factorization decompose?
4. Two-tower model, what are the two towers?
5. List 3 recsys metrics that matter beyond NDCG.

If you can answer all 5 in under 8 minutes, you're ready for the [Quiz](./Quiz.md).
