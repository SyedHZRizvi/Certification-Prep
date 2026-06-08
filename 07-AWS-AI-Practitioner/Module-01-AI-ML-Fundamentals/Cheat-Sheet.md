# 📋 Module 1 Cheat Sheet: AI/ML Fundamentals

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 🪆 The Hierarchy (MEMORIZE)

```
AI  ⊃  ML  ⊃  Deep Learning  ⊃  Generative AI
```

- **AI**, any system that mimics intelligence
- **ML**, learns from data
- **DL**, ML using deep neural networks
- **GenAI**, DL that *creates* new content

---

## 🧪 The 3 ML Paradigms

| Paradigm | Data | Goal | Example |
|----------|------|------|---------|
| **Supervised** | Labeled | Predict label | Spam filter, price prediction |
| **Unsupervised** | Unlabeled | Find structure | Customer segmentation, anomaly detection |
| **Reinforcement** | State + reward | Maximize reward | DeepRacer, game-playing agents |

**Sub-types of supervised:** Classification (categories) vs Regression (numbers)

---

## ⚖️ Overfitting vs Underfitting

| Symptom | Diagnosis | Fix |
|---------|-----------|-----|
| High training acc, low test acc | **Overfitting** (high variance) | More data, regularization, dropout, simpler model |
| Low training AND low test acc | **Underfitting** (high bias) | Bigger model, more features, train longer |

---

## 🧮 Parameter vs Hyperparameter

| Type | Set when? | Examples |
|------|-----------|----------|
| **Parameter** | *Learned during training* | Neural net weights, biases |
| **Hyperparameter** | *You set before training* | Learning rate, batch size, # layers, # epochs |

---

## 📏 Metrics To Recognize

| Problem | Metric | Watch out for |
|---------|--------|---------------|
| Classification | Accuracy, Precision, Recall, F1, AUC-ROC | Accuracy lies on imbalanced data → use Recall/F1 |
| Regression | MAE, MSE, RMSE, R² | RMSE penalizes big errors more |
| Generative text (preview Mod 6) | BLEU, ROUGE, perplexity, human eval |, |

---

## 🧰 Algorithms To Recognize By Sight

| Algorithm | Type | Best for |
|-----------|------|----------|
| Linear / Logistic Regression | Supervised | Simple regression / classification |
| Decision Tree / Random Forest | Supervised | Tabular, interpretable |
| **XGBoost** | Supervised | Default for tabular; SageMaker built-in |
| K-Means | Unsupervised | Clustering |
| KNN | Supervised | Quick classifier |
| PCA | Unsupervised | Dimensionality reduction |
| Neural network | Supervised/Unsupervised | Images, audio, language |

---

## 📊 Train / Validation / Test

```
[----- 70-80% TRAIN -----][-- 10-15% VAL --][-- 10-15% TEST --]
        |                       |                     |
        Model learns      Tune hyperparams      Final honest score
                                                (never peek!)
```

---

## 🏆 Exam Power Phrases

Look for these, they're usually right:

- ✅ "Use **unsupervised** learning when there are no labels"
- ✅ "**Overfitting**" when training acc >> test acc
- ✅ "**XGBoost** on tabular data"
- ✅ "Use **recall / F1** for imbalanced classification"
- ✅ "**Reinforcement learning** when an agent learns from rewards"
- ✅ "**Inference** = using a trained model on new data"

Usually wrong:

- ❌ "Use deep learning for everything"
- ❌ "Accuracy is always the best metric"
- ❌ "ML is the right tool for deterministic math"
- ❌ "More data is always better than better data"

---

## ⚠️ Anti-Patterns

- ❌ Tuning on the **test set** (= data leakage)
- ❌ Trusting **accuracy** on imbalanced data
- ❌ Calling a system "AI" when it's just **if/else rules**
- ❌ Throwing a deep neural network at tabular data when XGBoost would crush it
- ❌ Re-training from scratch when fine-tuning or RAG would do (preview: Module 6)

---

## 📚 Reference case (high-signal recall)

| Case | What it proves |
|------|----------------|
| **Google DeepMind AlphaFold 2 (2020–2024)** | Supervised deep learning + Transformer architecture + scale → 50-year-open biology problem solved; 2024 Nobel Prize in Chemistry |

---

## ✏️ Quick Self-Check

Cover the answers and recite:

1. Define overfitting in one sentence. ___
2. Difference between parameter and hyperparameter? ___
3. Best metric for a fraud detector on 99% non-fraud data? ___
4. One ML paradigm that needs *no labels*? ___
5. One epoch is…? ___

If you can answer all 5 under 30 seconds, you own this module. ✅

---

➡️ [Module 2: ML Workflow on SageMaker](../Module-02-ML-Workflow-SageMaker/Reading.md)
