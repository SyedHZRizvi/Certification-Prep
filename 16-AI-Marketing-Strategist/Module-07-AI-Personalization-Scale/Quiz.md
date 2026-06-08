# ✏️ Module 7 Quiz: AI Personalization at Scale

> **Instructions:** 26 questions. No notes. Aim for 22/26 (85%).

---

## Questions

### Q1. Netflix Research's published estimate for the annual value of its recommendation system is approximately: *(Remember)*
A. $10M / year
B. $100M / year
C. $1B+ / year (in retained revenue)
D. $10B / year

---

### Q2. The fundamental trade-off in multi-armed bandit algorithms is: *(Understand)*
A. Exploration vs Exploitation
B. Precision vs Recall
C. Bias vs Variance
D. Speed vs Accuracy

---

### Q3. ε-greedy bandits allocate: *(Understand)*
A. ε to exploration (random), 1-ε to exploitation (best)
B. Equal across all variants
C. Only to the best variant
D. Based on Bayesian posterior

---

### Q4. Upper Confidence Bound (UCB) bandits pick the variant with the highest: *(Understand)*
A. Mean reward only
B. Mean + confidence bonus (more bonus = less explored)
C. Variance
D. Posterior median

---

### Q5. Thompson Sampling at decision time: *(Understand)*
A. Picks the variant with the highest empirical mean
B. Samples a reward from each variant's posterior distribution, then picks the max
C. Allocates equally
D. Uses UCB

---

### Q6. A contextual bandit decision uses: *(Understand)*
A. No information
B. User / context features in addition to the variant
C. Only past rewards
D. Random

---

### Q7. Amazon's foundational recsys paper (Linden, Smith & York 2003) introduced: *(Remember)*
A. Deep learning recsys
B. Item-to-item collaborative filtering
C. Matrix factorization
D. Bandits

---

### Q8. Matrix factorization decomposes: *(Understand)*
A. The user × item rating matrix into two lower-dimensional latent factor matrices
B. Time-series data
C. The transition graph
D. The customer journey

---

### Q9. The dot product `U[u] @ V[i]` represents: *(Apply)*
A. The user's age
B. The predicted rating / preference of user u for item i
C. The item's price
D. Random noise

---

### Q10. The Netflix Prize ($1M, 2006–2009) was won using: *(Remember)*
A. A single deep neural network
B. An ensemble dominated by matrix factorization
C. Item-item CF only
D. K-means clustering

---

### Q11. The production-default algorithm for implicit-feedback CF in 2026 is: *(Remember)*
A. Naive Bayes
B. ALS (Alternating Least Squares, Hu/Koren/Volinsky 2008)
C. SVM
D. Random forest

---

### Q12. The Wide & Deep architecture (Google 2016) combines: *(Understand)*
A. Memorization (wide) + generalization (deep)
B. CNN + RNN
C. Encoder + decoder
D. Linear + logistic

---

### Q13. A Two-Tower recsys model has: *(Understand)*
A. Two attention heads
B. Separate user and item neural networks producing embeddings that are scored by similarity
C. One head per item category
D. Two copies of the same model

---

### Q14. FAISS, ScaNN, and Pinecone are: *(Remember)*
A. Recsys vendors
B. Approximate Nearest Neighbor (ANN) search libraries / services
C. BI tools
D. CDPs

---

### Q15. Meta's open-source production recsys architecture is called: *(Remember)*
A. PinSage
B. DLRM (Deep Learning Recommendation Model)
C. RecBole
D. BERT4Rec

---

### Q16. Pinterest's PinSage is built on: *(Remember)*
A. Recurrent neural networks
B. Graph Neural Networks (GNN)
C. Matrix factorization
D. Bandits

---

### Q17. BERT4Rec and SASRec are: *(Remember)*
A. Image-classification models
B. Sequence-aware (transformer-based) recsys models
C. Language models
D. Bandits

---

### Q18. NDCG @ K measures: *(Understand)*
A. CTR
B. Normalized Discounted Cumulative Gain, ranking quality weighted by relevance and position
C. Coverage
D. Diversity

---

### Q19. Optimizing only for NDCG / precision tends to cause: *(Analyze)*
A. Higher diversity
B. Popularity bias and filter-bubble pathology
C. Improved cold start
D. Better serendipity

---

### Q20. "Serendipity" in recsys means: *(Understand)*
A. Random recommendations
B. Recommendations that are relevant AND unexpected
C. Items the user has already seen
D. Trending items

---

### Q21. Dynamic Yield was acquired by: *(Remember)*
A. Adobe (2024)
B. Mastercard (2022)
C. Microsoft (2023)
D. Salesforce (2021)

---

### Q22. Meta Advantage+ Creative is best described as: *(Remember)*
A. A bandit on landing pages
B. A GenAI-driven feature that auto-generates and tests ad-variant creative
C. A CDP
D. A pixel

---

### Q23. The "cold start" problem refers to: *(Understand)*
A. Slow site load
B. Recommending for new users or new items with no interaction history
C. Server outage
D. Hot weather

---

### Q24. A bandit replacing an A/B test is MOST appropriate when: *(Apply)*
A. The test is strategic (a clear hypothesis)
B. The test is long-running over many equivalent options where you want to minimize regret during the test
C. The test is one-time
D. You have a strong prior

---

### Q25. The 5 personalization pitfalls include all EXCEPT: *(Analyze)*
A. Optimizing surface engagement instead of downstream business outcomes
B. Filter bubbles
C. Cold start
D. Server cost

---

### Q26. A strategist's first check when buying a personalization engine is: *(Analyze)*
A. The vendor's logo
B. Whether measurement infrastructure (incrementality test capability) exists to validate the platform
C. The price
D. The UI design

---

## 🎯 Answers + Explanations

### Q1: **C. $1B+ / year**
Gomez-Uribe & Hunt 2015, the canonical Netflix paper.

### Q2: **A. Exploration vs Exploitation**
The defining bandit trade-off, keep trying new variants vs commit to the current best.

### Q3: **A. ε exploration, 1-ε exploitation**
Simplest bandit. ε is usually fixed (e.g., 10%) or decayed over time.

### Q4: **B. Mean + confidence bonus**
UCB's "optimism under uncertainty", variants tried less get a larger bonus.

### Q5: **B. Samples from posterior, picks max**
Thompson Sampling. Bayesian and near-optimal in regret. Production default in 2026.

### Q6: **B. Context features in addition to variant**
Contextual bandits, the production-grade personalization algorithm.

### Q7: **B. Item-to-item collaborative filtering**
Amazon's choice for scalability, item similarity is computed offline, allowing real-time serving.

### Q8: **A. User × item rating matrix → two latent factor matrices**
The MF decomposition. Latent dimension typically 20–200.

### Q9: **B. Predicted rating/preference**
Standard MF prediction: dot product of the user vector and the item vector.

### Q10: **B. Ensemble dominated by MF**
BellKor's Pragmatic Chaos in 2009. The ensemble included MF, RBMs, and gradient-boosted models.

### Q11: **B. ALS**
Hu/Koren/Volinsky 2008, the production-default algorithm for implicit feedback (clicks, plays, views).

### Q12: **A. Memorization (wide) + generalization (deep)**
Wide = linear model with cross features. Deep = embeddings + MLP. Combined for the best of both.

### Q13: **B. Separate user/item NNs → embedding similarity**
The Two-Tower pattern is the production default for large-scale retrieval (Google, Pinterest, YouTube).

### Q14: **B. ANN search libraries / services**
FAISS (Meta), ScaNN (Google), Pinecone (managed), used to serve embeddings at scale.

### Q15: **B. DLRM**
Meta's production architecture, paper released 2019.

### Q16: **B. Graph Neural Networks (GNN)**
PinSage uses GNNs over the pin-board-user graph at Pinterest scale.

### Q17: **B. Sequence-aware transformer recsys**
BERT4Rec adapts BERT to sequences of user interactions. SASRec is self-attentive sequential recsys.

### Q18: **B. Ranking quality weighted by relevance + position**
NDCG = sum of relevances discounted by log position, normalized to [0,1].

### Q19: **B. Popularity bias and filter bubbles**
Pure NDCG optimization rewards "obvious good" recommendations, narrowing the catalog over time.

### Q20: **B. Relevant and unexpected**
Spotify's Discover Weekly tunes explicitly for serendipity.

### Q21: **B. Mastercard (2022)**
Dynamic Yield was acquired by Mastercard in March 2022 from McDonald's (which had owned it briefly).

### Q22: **B. GenAI auto-generates and tests ad creative**
Advantage+ Creative is Meta's GenAI ad creative layer.

### Q23: **B. New users / new items with no history**
Solved via content-based methods, hybrid recommenders, or onboarding signals.

### Q24: **B. Long-running with equivalent options**
Bandits dominate when you'd otherwise burn half your traffic on a loser for months. A/B still right for strategic decisions.

### Q25: **D. Server cost**
The five pitfalls are: wrong-metric optimization, filter bubble, cold start, popularity bias, privacy compliance. Server cost is operational, not strategic.

### Q26: **B. Measurement infrastructure**
The strategist's bar, buy measurement before personalization. Otherwise you can't defend the $400K/year platform.

---

## 📊 Score Yourself

- 24–26/26 → 🏆 Personalization architecture fluency.
- 22–23/26 → ✅ Solid.
- 18–21/26 → ⚠️ Re-read bandits + recsys sections.
- <18/26 → 🔁 Re-read the module.

---

## 🃏 Add To Your Flashcards

- 3 bandit algorithms (ε-greedy, UCB, Thompson)
- Thompson Sampling = production default
- Contextual bandit = bandit + user context
- MF decomposes user × item rating matrix
- Netflix Prize winner, MF ensemble
- ALS = production CF algorithm (implicit feedback)
- Two-tower architecture
- DLRM (Meta), PinSage (Pinterest), Wide & Deep (Google)
- NDCG, MAP, Hit Rate, Coverage, Serendipity
- Cold start problem

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 8](../Module-08-Audience-Intelligence-Cohorts/Reading.md)
