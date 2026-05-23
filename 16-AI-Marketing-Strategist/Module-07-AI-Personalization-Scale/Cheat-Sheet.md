# 📋 Module 7 Cheat Sheet: AI Personalization at Scale

> One page. Print it. Tape it to your monitor.

---

## 🎰 The 3 Bandit Algorithms

| Algorithm | Rule | When to use |
|-----------|------|-------------|
| ε-greedy | ε random, (1-ε) best mean | Simple, low-stakes |
| UCB | mean + sqrt(log(N)/n) bonus | When you want bounded regret guarantees |
| Thompson Sampling | sample from posterior, pick max | **Production default** in 2026 |

### Trade-off

```
Explore (try new variants) ↔ Exploit (commit to current best)
```

### Contextual bandit

= Bandit + user/context features. The Netflix production engine.

---

## 🔧 Recsys Families

| Family | Idea | Examples |
|--------|------|----------|
| Collaborative Filtering | "Users who liked X also liked Y" | Amazon Item-Item (2003) |
| Matrix Factorization | Factor user × item matrix into latent vectors | Netflix Prize winner (2009) |
| Content-Based | Item-feature similarity | Cold-start fallback |
| Deep Learning | Wide & Deep, Two-Tower, DLRM, Transformer | Modern default |

### The MF decomposition

```
R [users × items]  ≈  U [users × k]  ×  V^T [k × items]
predicted_rating(u, i)  =  U[u] @ V[i]
```

### Production training algorithm

**ALS** (Hu/Koren/Volinsky 2008) — handles implicit feedback (clicks, views) at scale.

---

## 🏭 Modern Architectures

| Architecture | Where used |
|--------------|-----------|
| Wide & Deep (Google 2016) | Memorization + generalization |
| Two-Tower (Google, Pinterest) | Embedding retrieval at scale |
| DLRM (Meta 2019) | Meta production |
| BERT4Rec / SASRec | Sequence-aware (transformer) |
| PinSage (Pinterest 2018) | Graph-based |

### Embeddings + ANN search

Train model → produce user/item embeddings → store in **FAISS / ScaNN / Pinecone** → query at runtime.

---

## 🎯 Recsys Metrics

| Metric | Measures |
|--------|----------|
| Precision @ K | Hit rate in top-K |
| Recall @ K | Coverage of relevant items |
| NDCG @ K | Ranking quality (position-weighted) |
| MAP @ K | Mean average precision |
| Coverage | % of catalog ever recommended |
| Diversity | Variety in top-K |
| Serendipity | Relevant + unexpected |

> **Optimizing only NDCG → filter bubble + popularity bias.** Tune for diversity + serendipity.

---

## 🏪 Personalization Vendors (2026)

| Vendor | Sweet spot |
|--------|-----------|
| Dynamic Yield (Mastercard) | Retail / e-com |
| Optimizely Personalization | Hybrid experimentation + personalization |
| Bloomreach Engagement | Composable commerce |
| BlueShift | B2B + B2C lifecycle |
| Adobe Target | Adobe enterprise |
| Algolia Recommend | Search-derived recsys |
| Constructor.io | E-com search + recsys |
| Salesforce Personalization | Salesforce stack |
| Amazon Personalize | AWS-native |
| TensorFlow Recommenders | Build-your-own |

---

## 🎨 GenAI Dynamic Creative

```
User profile (CDP) → GenAI image (SD/Flux/MJ) + GenAI copy (LLM)
                  ↓
            Bandit picks top variant
                  ↓
            Render at impression time
```

Meta **Advantage+ Creative** and Google **Demand Gen** automate this for paid social / display ads.

---

## 🚨 The 5 Pitfalls

1. Optimizing wrong metric (CTR up, retention down)
2. Filter bubble (catalog narrows)
3. Cold start (new users / new items)
4. Popularity bias (long tail starves)
5. Privacy compliance (GDPR right to explanation)

---

## 🏆 Exam Power Phrases

✅ Often correct:
- "Thompson Sampling is the production default..."
- "Contextual bandits add user features to MAB..."
- "Two-tower for retrieval at scale..."
- "Optimize downstream business metric, not surface engagement..."
- "Measurement before personalization..."

❌ Often wrong:
- "Bandits replace all A/B tests..."
- "Deep learning always beats MF..."
- "More recommendations = better..."
- "Recsys is just for retail..."

---

## ⚠️ Anti-Patterns

- ❌ Buying a personalization engine without measurement infrastructure
- ❌ Optimizing only NDCG (filter bubble)
- ❌ Recommending 50 items instead of 5 well-ranked
- ❌ Ignoring cold-start for new items
- ❌ Treating bandits as one-time A/B substitutes

---

## ✏️ Quick Self-Check

1. 3 bandit algorithms + which is default? ___
2. MF decomposes what into what? ___
3. Two-tower model — purpose? ___
4. 3 metrics beyond NDCG? ___
5. 5 personalization pitfalls? ___

---

➡️ [Module 8: Audience Intelligence & Cohorts](../Module-08-Audience-Intelligence-Cohorts/Reading.md)
