# 📋 Module 1 Cheat Sheet: ML Foundations & AWS ML Landscape

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 🧠 The 3 Families of ML (Memorize)

| Family | Example task | One algorithm |
|--------|--------------|---------------|
| **Supervised — classification** | Fraud / not fraud | XGBoost, Linear Learner, BlazingText |
| **Supervised — regression** | Predict house price | XGBoost-regressor, Linear Learner, K-NN |
| **Unsupervised — clustering** | Customer segments | K-Means |
| **Unsupervised — dim. reduction** | Visualise embeddings | PCA, t-SNE, UMAP |
| **Unsupervised — anomaly** | Detect fraud w/o labels | Random Cut Forest, IP Insights |
| **Reinforcement learning** | Game-playing, robotics | SageMaker RL (Ray, Coach) |

---

## ☁️ The AWS ML Stack — 7 Layers

```
L7  AI APPS:     Amazon Q (Business / Developer / QuickSight)
L6  GenAI GW:    Amazon Bedrock + KBs + Agents + Guardrails
L5  MANAGED:     Comprehend · Rekognition · Textract · Translate · Transcribe
                 · Polly · Lex · Kendra · Personalize · Forecast · Fraud Detector
L4  PLATFORM:    SageMaker (Studio · Pipelines · Endpoints · Clarify · Monitor)
L3  FRAMEWORKS:  TF · PyTorch · MXNet · HF · XGBoost · scikit · Spark MLlib
L2  SILICON:     EC2 P/G (GPUs) · Trn (Trainium) · Inf (Inferentia) · EFA · FSx
L1  DATA:        S3 · Glue · Lake Formation · Athena · Redshift · EMR · Kinesis
```

**Rule of thumb:** *Managed (L5) > Bedrock (L6) > SageMaker (L4) > Custom EC2 (L2/L3)* — pick highest layer that meets requirements.

---

## 🏋️ The 7-Step ML Lifecycle

1. **Business problem** — frame as classification / regression / cluster / RL
2. **Data engineering** — ingest → S3 → catalogue with Glue
3. **EDA & feature engineering** — impute, scale, encode, reduce dimensions
4. **Modeling** — choose algorithm, train, hyperparameter-tune
5. **Evaluation** — metrics, CV, fairness (Clarify), explainability (SHAP)
6. **Deployment** — real-time / async / serverless / batch endpoint
7. **Monitoring & retrain** — Model Monitor, drift alarms, scheduled retrains

---

## 🎲 Bias-Variance (MEMORIZE)

| Signature | Diagnosis | Fix |
|-----------|-----------|-----|
| High train err + high val err | **Underfit (high bias)** | More features, deeper model, less regularisation |
| Low train err + high val err | **Overfit (high variance)** | More data, regularise (L2/dropout), simpler model, early stopping |
| Low train + low val | **Just right** | Ship it |

---

## 🎯 Metrics — One-Liner Recall

| Metric | Use when… |
|--------|-----------|
| **Accuracy** | Classes are balanced |
| **Precision** | False positives are costly (spam, churn outreach) |
| **Recall** | False negatives are costly (fraud, cancer) |
| **F1** | Imbalanced data; want one number |
| **ROC AUC** | Probabilistic ranking, balanced data |
| **PR AUC** | Probabilistic ranking, **imbalanced data** |
| **RMSE** | Regression, penalise big errors |
| **MAE** | Regression, outlier-robust |
| **MAPE** | Forecasting; interpretable as a % |

🚨 *Never report only accuracy on imbalanced data.*

---

## 🔧 Loss Functions (Pick The Right One)

| Task | Loss |
|------|------|
| Binary classification | **Cross-entropy** (log loss) |
| Multi-class classification | **Categorical cross-entropy** |
| Regression | **MSE** or **MAE** |
| Forecasting | **Quantile / pinball loss** |
| Object detection | **Multi-task** (cls + bbox regression) |
| Embeddings | **Contrastive / triplet** |

---

## 📈 Gradient-Descent Quick Fixes

| Symptom | Fix |
|---------|-----|
| Loss oscillates wildly | **Lower learning rate** |
| Loss stuck flat from epoch 0 | **Higher learning rate** OR bigger model |
| Validation rises while train falls | **Add regularisation / early stop** |
| Out-of-memory | **Smaller batch size** OR mixed precision |

---

## 🚀 Inference Modes (Read This Twice)

| Mode | When | Cost shape |
|------|------|-----------|
| **Real-time endpoint** | Predictable steady traffic, <100 ms | Per-instance-hour (always on) |
| **Serverless inference** | Sparse traffic, occasional spikes | Per-request (scales to 0) |
| **Async inference** | Large payloads, processing > 60 s | Per-instance + queue |
| **Batch transform** | Offline scoring of large dataset | Per-job (no endpoint) |
| **Multi-model endpoint** | Hundreds of small models w/ sparse demand | Per-instance, models load on demand |

---

## 🏗️ The Capital One Reference Architecture (Drill This)

```
Card-swipe events
       ↓
  Kinesis Data Streams
       ↓
   S3 (Parquet) + Glue Catalogue
       ↓
  SageMaker Feature Store
       ↓
 SageMaker XGBoost training (ensemble per merchant category)
       ↓
  Model Registry → Approve
       ↓
Multi-Model Endpoint (auto-scaled, multi-AZ)
       ↓
Clarify (SHAP) + Model Monitor (drift) + Pipelines (nightly retrain)
```

**MLS-C01 will paraphrase this architecture 5+ times across the exam.**

---

## 🏗️ Well-Architected ML Lens — One Word Per Pillar

| Pillar | The ML Move |
|--------|-------------|
| Operational Excellence | **SageMaker Pipelines + Projects + Model Registry** |
| Security | **IAM least-priv + VPC + KMS + Clarify bias** |
| Reliability | **Multi-AZ endpoints + Model Monitor + retrain** |
| Performance Efficiency | **Trainium / Inferentia2 + SMDDP** |
| Cost Optimization | **Spot training + MME + serverless inference** |
| Sustainability | **Inferentia2 + Graviton notebooks** |

---

## 🏆 Exam Power Phrases

✅ Usually right:

- "Use a managed service to reduce operational overhead"
- "Use Multi-Model Endpoints for many sparse-traffic models"
- "Use Spot for fault-tolerant training jobs"
- "Use SageMaker Clarify for bias detection and SHAP explanations"
- "Use Model Monitor for data and model drift"
- "Use SageMaker Pipelines for repeatable ML workflows"

❌ Usually wrong:

- "Train a model from scratch when a managed service exists"
- "Use accuracy on imbalanced data"
- "Always use Real-Time endpoints"
- "Use Glue Crawler for streaming data" (it's batch)
- "Use Comprehend for image labels" (use Rekognition)
- "Use Clarify for drift" (use Model Monitor)

---

## 🗓️ Exam Facts (MLS-C01)

| Item | Value |
|------|-------|
| Questions | 65 (50 scored) |
| Time | **180 min** |
| Pass | **750/1000** (~75%) |
| Cost | $300 USD |
| Validity | 3 years |
| Domain mix | DataEng 20 / EDA 24 / Modeling 36 / Ops 20 |

---

## ✏️ Quick Self-Check

Cover the answers and recite:

1. Sketch the 7-layer AWS ML stack from L1 to L7. ___
2. List the 7 steps of the ML lifecycle. ___
3. Symptoms of overfitting vs underfitting? ___
4. When to use serverless vs async vs real-time inference? ___
5. Why is accuracy a bad metric on imbalanced data? ___
6. What does SageMaker Clarify do, and how is it different from Model Monitor? ___

If you can answer all 6 in under 90 seconds, you own this module. ✅

---

➡️ [Module 2: Data Engineering for ML](../Module-02-Data-Engineering-ML/Reading.md)
