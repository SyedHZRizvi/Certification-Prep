# Module 1: ML Foundations & The AWS ML Landscape 🤖

> **Why this module matters:** The MLS-C01 exam does not ask "what is gradient descent" — it asks "given a dataset of 12 million transactions where 0.02% are fraudulent, what is the BEST algorithm, what is the BEST evaluation metric, and what is the BEST AWS service to deploy it?" To answer that, you need a mental model of (a) the *families* of ML problems and (b) the *seven layers* of the AWS ML stack. This module gives you both lenses. You will use them for the next 9 modules.

> **Prerequisites.** No AWS ML experience assumed; this is the on-ramp module. Helpful background:
> - Python at the level of being comfortable with NumPy / pandas (Wes McKinney's *Python for Data Analysis* is enough)
> - One semester of calculus (gradients, partial derivatives) — Khan Academy's *Multivariable Calculus* unit 4 is enough
> - One semester of linear algebra (matrix multiplication, eigenvectors) — 3Blue1Brown's *Essence of Linear Algebra* YouTube series is enough
> - High-school probability (Bayes' rule, conditional probability)
> - Familiarity with AWS console fundamentals (S3, IAM, basic EC2) — if you have **CLF-C02 (course 03)** or **AIF-C01 (course 07)** done, you are ahead
> - If you have done **SAA-C03 (course 04)**, the architecture vocabulary in §6 will feel like a refresher

---

## 🍕 A Story: The Coffee Roaster That Wanted To Predict Tomorrow's Orders

Meet Priya again. Last course she scaled *Sunrise Roasters* from a garage to multi-region on AWS. By 2026 she has a new problem: she roasts in 5-kg batches and Sunday-morning roasts pre-stage the week's wholesale orders. If she over-roasts, beans go stale and she loses 12% margin to waste. If she under-roasts, she runs out by Thursday and loses 6% margin to overnight FedEx.

For three years she eyeballed it: "looks like a busy week, do 60 kg." Then in 2025 she hired a data scientist who built a **time-series forecasting model**: input = last 90 days of orders + weather + university semester calendar + Google Trends "iced coffee" signal → output = Tuesday's, Wednesday's, ... predicted order volumes. Mean Absolute Percentage Error dropped from her gut-feel ~18% to a model's 6.4%. Waste plus stock-out cost fell from $84K/year to $29K/year. That gap pays the data scientist's salary three times over.

That model is what this course teaches you to **build, evaluate, deploy, and operate** on AWS. Every concept in the next 10 modules — from gradient boosting in Module 4 to SageMaker Pipelines in Module 9 — exists to take a Priya-shaped business problem and turn it into a predictive system that runs reliably at 3 AM with no human in the loop.

The MLS-C01 exam tests the same end-to-end journey. So that is how this course is sequenced.

---

## 🧠 The Three Families of Machine Learning (You Will Be Tested On This)

Every ML problem fits into one of three (some say four — we will treat semi-supervised as a hybrid) categories. **Memorise this taxonomy cold.**

```
                    MACHINE LEARNING
                          │
       ┌──────────────────┼──────────────────┐
   SUPERVISED       UNSUPERVISED         REINFORCEMENT
   (labels)         (no labels)          (reward signal)
       │                  │                    │
  ┌────┴────┐        ┌────┴────┐          ┌───┴───┐
CLASSIFY   REGRESS  CLUSTER  REDUCE    POLICY   VALUE
                            DIM/ANOM   (policy   (Q,
                                        grad)    DQN)
```

| Family | What you have | What you predict | AWS examples | Real-world example |
|--------|--------------|------------------|--------------|--------------------|
| **Supervised — Classification** | Labelled examples with discrete classes | A class (spam / not-spam, fraud / OK, cat / dog) | XGBoost, Linear Learner, BlazingText, Image Classification | Capital One fraud detection (fraud vs OK) |
| **Supervised — Regression** | Labelled examples with continuous targets | A number ($price, °temp, hours) | XGBoost, Linear Learner, DeepAR, K-NN | Airbnb dynamic pricing (next-night price) |
| **Unsupervised — Clustering** | Unlabelled examples | Group assignment | K-Means, KNN | Customer segmentation at Netflix |
| **Unsupervised — Dimensionality Reduction** | Unlabelled examples | A lower-dim representation | PCA, t-SNE (visualisation), UMAP, NTM (topic) | Pre-processing 5000-pixel images for an SVM |
| **Unsupervised — Anomaly Detection** | Mostly "normal" examples | Outlier / not | Random Cut Forest, IP Insights | Stripe Radar anomalous-charge flag |
| **Unsupervised — Association** | Transactions / baskets | Frequent itemsets | Custom Spark MLlib on EMR, Personalize | "Customers who bought X also bought Y" |
| **Semi-supervised** | Few labels, many unlabelled | Same as supervised | SageMaker Ground Truth + Active Learning, SimCLR via BYOC | Medical imaging when labelling is expensive |
| **Reinforcement Learning (RL)** | A simulator + reward signal | A policy / action | SageMaker RL (Ray, Coach, Stable Baselines), DeepRacer | AlphaGo, autonomous-vehicle path planning |

🎯 **Exam pattern.** Phrases that signal each family:
- *"predict the probability of churn"* → **Binary classification** (probability output, threshold to decide)
- *"forecast next 30 days of demand"* → **Regression / time series** (DeepAR, Forecast)
- *"group similar customers"* → **Clustering** (K-Means)
- *"detect fraud in real time"* → **Anomaly detection** (Random Cut Forest) or **classification** (XGBoost) — the question usually clarifies
- *"recommend products to users"* → **Personalize** (managed) or Factorization Machines / Object2Vec / Neural Collaborative Filtering (custom)
- *"learn a policy that maximises cumulative reward"* → **Reinforcement Learning**

🚨 **Exam trap.** *"Anomaly detection requires labelled examples."* → **WRONG**. Random Cut Forest and IP Insights are explicitly unsupervised — they learn the shape of "normal" and flag points that depart from it. Labels can be used post-hoc to evaluate.

---

## 🎲 Bias, Variance, And The Iron Trade-Off

You will see *"the model overfits on training data and underperforms on holdout"* in at least three exam questions. The vocabulary is non-negotiable:

| Term | Definition | Symptom | Fix |
|------|------------|---------|-----|
| **Bias** | Error from over-simplifying assumptions | High training error and high holdout error (underfit) | More features; bigger model; less regularisation |
| **Variance** | Error from over-sensitivity to training data | Very low training error, high holdout error (overfit) | More data; regularisation (L1/L2/dropout); simpler model; cross-validation; early stopping |
| **Irreducible noise** | Inherent randomness in the label | Can never go below this floor | Better labelling, more relevant features |
| **Bias–variance trade-off** | Reducing one usually increases the other | The U-shape of test error vs model complexity | Pick the model size / hyperparams that minimise holdout error |

### The U-curve diagram (sketch in your notes)

```
Test Error
  │
  │\        BIAS-DOMINATED            VARIANCE-DOMINATED
  │ \                                    ↓ overfit zone
  │  \         Underfit                /
  │   \         zone                  /
  │    \                             /
  │     \____________ _______________
  │                  \              /
  │                   \____________/         ← Sweet spot
  │
  └──────────────────────────────────────→ Model complexity
        small                 large
```

🎯 **Memory hook:** **"high bias → too dumb"**, **"high variance → too smart for its own good"**.

🎯 **Exam pattern.**
- *"Model has 99% training accuracy and 71% validation accuracy. What is the MOST likely problem?"* → **Overfitting / high variance**. Fixes (any of): more data, L2 regularisation, dropout, early stopping, simpler model, k-fold CV with better hyperparams.
- *"Model has 65% training accuracy and 64% validation accuracy. What is the MOST likely problem?"* → **Underfitting / high bias**. Fixes: more features, deeper / wider model, less regularisation, longer training.

### Regularisation (the most common exam tool)

| Technique | What it does | Built-in SageMaker support |
|-----------|--------------|----------------------------|
| **L1 (Lasso)** | Adds Σ\|w\| penalty → sparsity (forces some weights to 0) | XGBoost (`alpha`), Linear Learner (`l1`) |
| **L2 (Ridge / weight decay)** | Adds Σw² penalty → small but non-zero weights | XGBoost (`lambda`), Linear Learner (`wd`) |
| **Elastic Net** | L1 + L2 combined | scikit-learn BYOC |
| **Dropout** | Randomly zero out activations during training (DL only) | TF / PyTorch BYOC, all DL built-ins |
| **Early stopping** | Stop when validation loss stops improving | XGBoost `early_stopping_rounds`, SageMaker Automatic Model Tuning |
| **Data augmentation** | Generate "more" training data via transformations (rotate, crop, paraphrase) | Image Classification has built-in augmentation; CV pipelines |

---

## 🏋️ The 7-Step ML Lifecycle (The Spine Of This Course)

Every production ML system AWS asks you about follows seven steps. Each module of this course maps to one or two steps. **Memorise this.**

```
┌──────────────────────────────────────────────────────────────────────┐
│  1. Business Problem      → "predict fraud", "forecast demand"       │  (Module 1)
│  2. Data Engineering      → ingest, clean, store in S3 / Athena      │  (Module 2)
│  3. EDA & Feature Eng.    → visualise, impute, scale, encode         │  (Module 3)
│  4. Modeling              → choose algo, train, tune                 │  (Modules 4-7)
│  5. Evaluation            → metrics, CV, fairness, explainability    │  (Module 8)
│  6. Deployment            → endpoints, batch, Pipelines              │  (Module 9)
│  7. Monitoring & Retrain  → drift, alarms, scheduled retrains        │  (Modules 9-10)
└──────────────────────────────────────────────────────────────────────┘
```

🎯 **Exam pattern.** Many MLS-C01 questions describe a *step* and ask which AWS service is best. Knowing the lifecycle keeps you from picking a Module-4 answer when the question is actually about Module-2.

---

## ☁️ The AWS ML Stack — The 7 Layers You Must Know

AWS organises its ML services in a deliberate seven-layer stack. The exam tests every layer. **Build a mental map.**

```
┌─────────────────────────────────────────────────────────────────────┐
│  L7  AI APPLICATIONS                                                │
│      Amazon Q (Business, Developer, in QuickSight)                  │
│      CodeWhisperer (now part of Q Developer)                        │
├─────────────────────────────────────────────────────────────────────┤
│  L6  GENERATIVE AI MODEL GATEWAY                                    │
│      Amazon Bedrock (Claude, Llama, Mistral, Titan, Cohere, ...)    │
│      Knowledge Bases for RAG, Agents, Guardrails                    │
├─────────────────────────────────────────────────────────────────────┤
│  L5  MANAGED AI SERVICES (TASK-SPECIFIC, NO MODEL TRAINING)         │
│      Comprehend, Rekognition, Textract, Translate, Transcribe,      │
│      Polly, Lex, Kendra, Personalize, Forecast, Fraud Detector      │
├─────────────────────────────────────────────────────────────────────┤
│  L4  ML PLATFORM — AMAZON SAGEMAKER                                 │
│      Studio · Notebooks · Built-in algos · BYO containers ·         │
│      Pipelines · Model Registry · Endpoints · Clarify · Monitor     │
├─────────────────────────────────────────────────────────────────────┤
│  L3  FRAMEWORKS & INTERFACES                                        │
│      TensorFlow, PyTorch, MXNet, JAX, Hugging Face, XGBoost,        │
│      scikit-learn, Spark MLlib — all available as managed containers│
├─────────────────────────────────────────────────────────────────────┤
│  L2  ML INFRASTRUCTURE — SILICON & NETWORK                          │
│      EC2 P/G family (NVIDIA GPUs), Trn (Trainium), Inf (Inferentia),│
│      Elastic Fabric Adapter, FSx Lustre, S3, EFS                    │
├─────────────────────────────────────────────────────────────────────┤
│  L1  DATA & STORAGE                                                 │
│      S3, Glue, Lake Formation, Athena, Redshift, EMR, Kinesis       │
└─────────────────────────────────────────────────────────────────────┘
```

🎯 **Exam pattern.** Many questions are "managed vs. custom". The answer is usually:
- **If a managed AI service (L5) exists for the task → use it.** Less code, less ops, faster.
- **Use SageMaker (L4)** when the task is custom, the data is proprietary, or you need a model architecture not in L5.
- **Use Bedrock (L6)** when you need a generative model (text, image, embedding) and **do not** want to train one from scratch.
- **Train from scratch on L2 + L3** only when nothing else fits — usually a research workload.

### When To Use Which Layer (Decision Matrix)

| You need to... | Best layer | Specific service |
|----------------|------------|------------------|
| Add semantic search to a website | L5 / L6 | **Amazon Kendra** (managed) or **Bedrock + KB** (RAG) |
| Detect customer-support sentiment | L5 | **Amazon Comprehend** |
| Detect specific defect types in factory photos | L5 (custom) or L4 | **Rekognition Custom Labels** OR **SageMaker Image Classification** |
| Translate help-centre articles | L5 | **Amazon Translate** |
| Build a chatbot | L5 / L6 | **Lex** (intent-based) or **Bedrock Agent** (generative) |
| Predict next month's sales | L5 / L4 | **Amazon Forecast** (managed) or **DeepAR** in SageMaker |
| Recommend products to users | L5 / L4 | **Amazon Personalize** (managed) or **Factorization Machines** in SageMaker |
| Train a custom 1-billion-parameter LLM | L4 + L2 | **SageMaker training jobs on Trainium clusters** |
| Run a foundation model behind your VPC | L4 / L6 | **SageMaker JumpStart** or **Bedrock with PrivateLink** |
| Code-assist your devs | L7 | **Amazon Q Developer** |
| Let business users chat with their warehouse | L7 | **Amazon Q in QuickSight** |

🚨 **Exam trap.** *"The team needs to detect known faces. Should they train a CNN from scratch on SageMaker?"* → **No**. **Amazon Rekognition** already does this with a single API call. Use a managed service before you build.

---

## 📖 Case Study — Capital One's Real-Time Fraud Detection on SageMaker

**Situation.** Capital One processes ~600 million card transactions per day. Pre-2018, their fraud-detection stack ran on a 200-rack on-prem Hadoop cluster running custom Python and R. False-positive rates were high enough that legitimate cardholders frequently had transactions declined at the till; false negatives cost the company ~$200M per year in confirmed fraud losses.

**Decision (2018–2022).** Capital One went **all-in on AWS** (one of the most public enterprise migrations in history; CIO Rob Alexander spoke at re:Invent 2018 keynote and again 2022). The fraud-detection migration to **Amazon SageMaker** specifically used:
- **Data ingestion (L1):** Streaming card-swipe events into **Kinesis Data Streams**, batched into **S3** (Parquet), catalogued with **AWS Glue**, joined with cardholder profiles in **Redshift**
- **Feature engineering (L4):** **SageMaker Feature Store** for ~2,800 cardholder + transaction features, refreshed every few seconds
- **Modeling (L4):** Ensemble of **XGBoost** classifiers (one per merchant category) trained on 18 months of labelled fraud data
- **Real-time inference (L4):** **SageMaker real-time endpoints** with **multi-model endpoints (MME)** so one endpoint hosts hundreds of category-specific models — auto-scaled behind an internal API
- **Bias & explainability (L4):** **SageMaker Clarify** to surface SHAP values per declined transaction (regulatory requirement under ECOA in the US)
- **MLOps (L4):** **SageMaker Pipelines** for nightly retrains; **Model Registry** versioning; **Model Monitor** for data drift on credit-score features

**Outcome (publicly reported numbers).** False-positive rate fell **~50%**, false-negative rate fell **~26%**, model retrain cycle dropped from monthly to **daily**, and infra cost fell ~40% versus the old Hadoop cluster (no more 24/7 idle racks). Approval latency hit p99 < 100 ms.

**Lesson for the exam.** Capital One's stack is the prototype MLS-C01 reference architecture: **Kinesis → S3 → Glue → Feature Store → SageMaker Training → MME endpoint + Clarify + Monitor + Pipelines**. Memorise it. Half of the modelling and ops questions in this course are variations.

**Discussion (Socratic).**
- Q1. Why did Capital One pick **XGBoost** rather than a deep neural network for fraud? What does the bias-variance trade-off say about tabular data with ~2,800 features and tens of millions of labelled examples?
- Q2. They chose **Multi-Model Endpoints (MME)** over one endpoint per merchant category. What is the cost-versus-latency trade-off? When would a single shared endpoint be better?
- Q3. **SageMaker Clarify** added SHAP explanations to satisfy a *regulatory* requirement. Is regulator-driven explainability the *right* place to draw the line, or should every fraud decision be explained regardless of regulation?

---

## 🔬 The Math You Actually Need (Cornell-Grade But Tight)

Pure-math questions are rare on MLS-C01, but you must read and understand the math in scenario questions. Here is the minimum vocabulary, dense.

### Loss functions (the thing the optimiser is minimising)

| Task | Loss | Why |
|------|------|-----|
| Binary classification | **Binary cross-entropy / log loss** = −[y·log(ŷ) + (1−y)·log(1−ŷ)] | Probabilistic interpretation; standard for logistic regression, XGBoost binary, BlazingText classification |
| Multi-class classification | **Categorical cross-entropy** = −Σ yᵢ·log(ŷᵢ) | Generalises binary; softmax outputs |
| Regression | **MSE** = (1/n)·Σ(yᵢ − ŷᵢ)² | Penalises large errors heavily |
| Regression (outlier-robust) | **MAE** = (1/n)·Σ\|yᵢ − ŷᵢ\| | Equal weight to all errors |
| Forecasting (Forecast / DeepAR) | **Quantile loss / pinball loss** | Probabilistic forecast at p10 / p50 / p90 |
| Object detection | **Multi-task loss** = classification loss + bounding-box regression loss | Two heads in the model |
| Embeddings (Object2Vec, Word2Vec) | **Contrastive / triplet / negative sampling loss** | Pull similar pairs together |

### Gradient descent (the algorithm minimising the loss)

```
Weights at step t+1  =  Weights at step t  −  learning_rate × ∇Loss(Weights at step t)
```

Variants (you will see all on the exam):
- **SGD** — stochastic; one or a few samples per update; noisy but cheap
- **Mini-batch GD** — typical (batch size 32 / 64 / 128 / 256)
- **Adam** — adaptive learning rate per parameter; default for most DL training
- **AdamW** — Adam with decoupled weight decay; default in 2024-era LLM training
- **Momentum / Nesterov** — accelerates by using a moving average of gradients

🎯 **Exam trap.** *"Training loss oscillates wildly and never converges."* → **Learning rate too high**. Fix: lower the learning rate or add a learning-rate schedule (decay over epochs).

🎯 **Exam trap.** *"Training loss plateaus at a high value."* → **Learning rate too low** OR the model is underfit (high bias). Try a higher LR or a more capable model.

---

## 🎯 Evaluation Metrics — The 60-Second Cheat Sheet

We go *deep* in Module 8. Here is the read-the-question vocabulary you need from day one.

| Metric | What it measures | When you want it | When you DO NOT want it |
|--------|-----------------|------------------|-------------------------|
| **Accuracy** | (TP + TN) / all | Balanced classes | Imbalanced classes (e.g. fraud where 99.9% is negative — predicting "always negative" gives 99.9% accuracy) |
| **Precision** | TP / (TP + FP) | False positives are costly (spam filter; "is this email spam") | When you cannot tolerate missing positives |
| **Recall (sensitivity / TPR)** | TP / (TP + FN) | False negatives are costly (fraud, cancer) | When you cannot tolerate false positives |
| **F1** | 2·P·R / (P + R) | Balanced precision-recall on imbalanced data | When P vs R have different business costs |
| **ROC AUC** | Area under TPR vs FPR curve | Probabilistic ranking quality | Highly imbalanced classes (use PR-AUC) |
| **PR AUC** | Area under precision-recall curve | Imbalanced classes | Symmetric (balanced) problems |
| **Confusion matrix** | The 2×2 (or k×k) raw counts | Always look at first | — |
| **RMSE** | √MSE | Regression with comparable scale to target | Heavy-tailed target with outliers |
| **MAE** | Mean absolute error | Outlier-robust regression | When you want to penalise large errors more |
| **MAPE** | Mean abs percentage error | Forecasting interpretability | Targets near zero (divide-by-near-zero blows up) |

🚨 **Exam trap.** *"99.9% of transactions are non-fraud. The model has 99.9% accuracy. Is it any good?"* → **Probably useless** — a *constant* "never fraud" classifier achieves 99.9%. Look at **precision, recall, F1**, and (preferably) **PR AUC**.

---

## 🏗️ The 6 AWS Well-Architected Pillars + The ML Lens

The **AWS Well-Architected Framework** has 6 pillars (Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, Sustainability — see course 04 Module 1 for the full canon). AWS has published a **Machine Learning Lens** that maps ML-specific concerns to each pillar. The exam quotes it almost verbatim.

| Pillar | ML-Lens applied |
|--------|-----------------|
| **Operational Excellence** | Use SageMaker Pipelines + Projects + Model Registry; automate training and deployment with code |
| **Security** | IAM roles for SageMaker (least privilege); VPC isolation; KMS encryption of artifacts and EBS; data lineage; protected feature store; bias monitoring with Clarify |
| **Reliability** | Multi-AZ endpoints (default); endpoint auto-scaling; Model Monitor + retrain on drift; reproducible training (seed, versioned data) |
| **Performance Efficiency** | Right-sized compute (Trainium / Inferentia2 / Graviton); distributed training (SMDDP / SMMP); managed services beat custom |
| **Cost Optimization** | Spot training (up to 90% off); **multi-model endpoints** for sparse traffic models; **serverless** and **async** inference for spiky workloads; right-sized notebooks; lifecycle scripts that auto-stop idle notebooks |
| **Sustainability** | Inferentia2 (~50% better energy/inference than GPU baseline); Graviton notebooks; right-size and consolidate; managed services let AWS optimise the data centres for you |

🎯 **Memory hook for the ML Lens:** **Operate → Pipelines. Secure → IAM + KMS. Reliable → multi-AZ + monitor. Performance → Trainium / SMDDP. Cost → Spot + MME + serverless. Sustain → Inferentia + Graviton.**

---

## 🛠️ The Day-1 Setup Every MLS-C01 Engineer Does

| Task | Why |
|------|-----|
| 🔐 Create an **IAM execution role for SageMaker** with `AmazonSageMakerFullAccess` *plus* a least-privilege bucket policy on the data S3 bucket | SageMaker assumes this role to read/write data and write model artifacts |
| 📒 Launch **SageMaker Studio** (one-click; uses Studio domain in a VPC) | Studio = the IDE of choice; notebook instances are legacy |
| 🪣 Create dedicated S3 buckets for `<project>-data`, `<project>-models`, `<project>-logs` | Clean tagging for cost attribution + lifecycle policies |
| 🛡️ Turn on **CloudTrail** + **AWS Config** + **GuardDuty** | Audit, compliance, threat detection — same Day-1 trio as the SAA course |
| 💸 Set a **budget alarm** ($10 / $100 / $1000 thresholds) | GPU training jobs can rack up surprises fast |
| 🏷️ Define **tags**: `Project`, `Owner`, `CostCenter`, `Environment` | You will thank yourself in 6 months when chasing a $4K spike |
| 🔑 Store the OpenAI / Anthropic API keys (if any) in **Secrets Manager**, not env vars | KMS-encrypted; rotated; auditable |

---

## ⚠️ Common Misconceptions (Read This Twice)

| Misconception | Reality |
|---------------|---------|
| "More data always beats better algorithms" | Often true *but only* if the new data is relevant and high quality. Garbage-in, garbage-out is the iron law. |
| "Deep learning is always better than XGBoost" | **Wrong for tabular data**. Tree ensembles (XGBoost, LightGBM, CatBoost) routinely beat neural nets on tabular benchmarks. DL wins on images, audio, text, and graphs. |
| "Accuracy is the gold-standard metric" | Only on balanced binary problems. For imbalanced data use F1, PR-AUC, or domain-cost-weighted metrics. |
| "If training loss is low, the model is good" | Low training loss with high *validation* loss = overfitting. Always look at validation. |
| "SageMaker can do anything Bedrock does, just cheaper" | Bedrock gives you frontier foundation models you cannot reasonably train yourself (Claude, Llama, Titan). SageMaker is for *your* models. |
| "Comprehend Custom Classifier is worse than a SageMaker BlazingText model" | Often the opposite — Comprehend handles preprocessing, AutoML, and serving for you. Pick managed first unless you have a clear need to customise. |
| "Real-time endpoints are always the right choice" | They cost ~$0.05–$2 per hour per AZ even when idle. For sparse traffic use **serverless inference**; for batch use **batch transform**; for hours-long inference use **async**. |
| "Multi-AZ guarantees zero downtime" | Multi-AZ reduces single-AZ outage risk. For region-outage resilience you need **multi-region endpoints with Route 53 failover** — same pattern as SAA. |

---

## 🚨 Top Exam Traps (Module 1 Themes)

1. **"Best algorithm" is a function of (data shape, label availability, latency, explainability, team skills).** No single algorithm is universally best.
2. **"Most cost-effective"** ≠ cheapest possible. Means *cheapest that still meets requirements*. If latency must be <50 ms, a batch-transform answer is wrong.
3. **"Least operational overhead"** → managed service. Prefer Comprehend over a custom BlazingText model unless the question explicitly rules it out.
4. **"Explain the prediction to the regulator"** → SageMaker **Clarify** (SHAP). Not Model Monitor. Not Debugger.
5. **"Detect data drift after deployment"** → SageMaker **Model Monitor**. Not Clarify. Not CloudWatch alone.
6. **"Real-time, low latency, predictable traffic"** → real-time endpoint. **Sparse traffic** → serverless. **Hours-long inference** → async. **Many small models** → multi-model endpoint.
7. **"Train a model on millions of GPUs"** → use **SageMaker distributed training (SMDDP / SMMP)**, EC2 P5 or Trn1 instances, EFA networking, FSx Lustre for data.

---

## 🎓 Key Terms To Know (Add To Anki!)

| Term | Definition |
|------|------------|
| **Supervised learning** | Learning a mapping from labelled (X, y) pairs |
| **Unsupervised learning** | Learning structure in unlabelled X |
| **Reinforcement learning** | Learning a policy via reward signal in an environment |
| **Classification** | Discrete-label prediction |
| **Regression** | Continuous-value prediction |
| **Bias (statistical)** | Systematic error from over-simplification |
| **Variance (statistical)** | Error from over-sensitivity to training set |
| **Overfitting** | Low training loss, high validation loss; high variance |
| **Underfitting** | High training loss, high validation loss; high bias |
| **Regularisation** | Penalty term that discourages large model weights / complexity |
| **Train / validation / test split** | Three disjoint sets — train, tune, final evaluation |
| **K-fold cross-validation** | Split into K folds; train on K-1, validate on 1, rotate |
| **Loss function** | Scalar measure of model error to be minimised |
| **Gradient descent** | Iterative algorithm that updates weights against gradient direction |
| **Learning rate** | Step size for gradient descent |
| **Epoch** | One full pass over the training set |
| **Batch size** | Samples per gradient-descent update |
| **Hyperparameter** | Configuration value set before training (e.g. `max_depth`, `learning_rate`) |
| **Parameter** | Value the model learns during training (weights, biases) |
| **Model artifact** | The serialised trained model (e.g. `model.tar.gz` in S3 for SageMaker) |
| **Inference** | Using a trained model to make predictions |
| **Endpoint** | Hosted, callable model in SageMaker |
| **Feature** | An input column / variable in the model |
| **Label / target** | The thing the model is predicting |
| **Foundation model** | A large pre-trained model adaptable to many tasks (Claude, Llama, Titan) |

---

## 💬 Discussion — Socratic Prompts (15 min reflection)

1. **The "AI is just statistics" debate.** A computer-science professor argues that 80% of modern ML is just regularised linear regression dressed up in new clothes (logistic regression → SVM → XGBoost → transformer = all chained linear projections with a non-linearity between them). A philosopher argues that emergent capability in 100B-param LLMs is qualitatively new. Argue both sides. Which is the right *mental model* for an MLS-C01 engineer to adopt when picking algorithms?
2. **Managed vs custom — the eternal pendulum.** AWS's L5 managed services (Comprehend, Rekognition, etc.) reduce engineering cost but increase vendor lock-in and limit customisation. SageMaker (L4) is more work but you own the model. When does the lock-in cost exceed the engineering savings? Reason from a 5-person startup to a 5,000-engineer enterprise.
3. **The accuracy trap.** Why is **accuracy** the most reported metric in ML papers but often the worst metric to optimise in production? Pick a domain (fraud, medical diagnosis, content moderation) and design a *better* primary metric.
4. **Bias-variance in the LLM era.** Frontier LLMs have ~10^11 parameters and the classical bias-variance trade-off would predict catastrophic overfitting. Yet they generalise. Explain in your own words why (hint: scale, regularisation via pretraining objectives, double descent).
5. **The case-study pattern.** Look back at Capital One. If you were the head of Risk at a much smaller fintech (~10M transactions/year, 5-engineer team), would you still go SageMaker? Or would you start with a managed service like **Amazon Fraud Detector**? What changes the calculus?

---

## ➡️ Where This Leads

> **Where this leads.**
> - **Inside this course:** Module 02 (Data Engineering) implements step 2 of the lifecycle; Module 03 (EDA / FE) implements step 3; Modules 04-07 are step 4 (modelling); Module 08 is step 5 (evaluation, tuning, bias); Modules 09-10 are steps 6-7 (deployment, monitoring, security, cost).
> - **Cross-course:** `04-AWS-Solutions-Architect-Associate` is the spiritual prerequisite for the AWS architecture vocabulary (VPC, IAM, multi-AZ); `07-AWS-AI-Practitioner` is a gentler introduction to many L5 / L6 services discussed here.
> - **Practice:** Practice Exam 1 has 4 questions, Practice Exam 2 has 2 questions, and the Final Mock Exam has 5 questions directly drawn from this module's material.
> - **Real world:** Open a free SageMaker Studio in your AWS account; run the *"Hello SageMaker"* tutorial in 30 minutes; deploy your first XGBoost classifier on the public *Census Income* dataset.

---

## ✅ Module 1 Summary

You now know:
- 🧠 The **three families** of ML (supervised / unsupervised / RL) and the sub-families
- 🎲 The **bias-variance trade-off** vocabulary and how to recognise over- and underfitting
- 🏋️ The **7-step ML lifecycle** that structures the rest of this course
- ☁️ The **7-layer AWS ML stack** (L1 data → L7 Q applications) and when each layer is the right answer
- 🔬 The math you actually need (loss functions, gradient descent variants)
- 🎯 The **evaluation-metric** vocabulary needed to read any MLS-C01 question
- 🏗️ The **Well-Architected ML Lens** and its mapping to the 6 pillars
- 📖 The **Capital One** fraud-detection reference architecture you will see variations of in many questions

**Next steps:**
1. 🎥 Watch the videos in [`Videos.md`](./Videos.md)
2. ✏️ Take the [`Quiz.md`](./Quiz.md) (target: 20/24)
3. 📋 Review [`Cheat-Sheet.md`](./Cheat-Sheet.md)
4. ➡️ Move on to [Module 2: Data Engineering for ML](../Module-02-Data-Engineering-ML/Reading.md)

---

## 📚 Further Sources (This Module)

**AWS official**
- 📖 **AWS Certified Machine Learning – Specialty Exam Guide (PDF)** — the canonical 17-page blueprint
- 📖 **Amazon SageMaker Developer Guide (full docs)** — `docs.aws.amazon.com/sagemaker/` — every feature
- 📖 **AWS Well-Architected Machine Learning Lens (PDF)** — best practice for production ML
- 📖 **AWS ML Blog** — `aws.amazon.com/blogs/machine-learning/` — case studies + feature launches

**re:Invent talks (search via Videos.md cards)**
- 🎤 **AIM319 (2022): Capital One — Real-time fraud detection on SageMaker** — the canonical reference architecture
- 🎤 **AIM303 (2023): How to choose the right SageMaker built-in algorithm**
- 🎤 **Werner Vogels keynote 2023 / 2024** — annual ML / GenAI strategy update from AWS's CTO

**Textbooks**
- 📖 **Goodfellow, Bengio, Courville (2016).** *Deep Learning.* MIT Press — chapters 5, 6
- 📖 **Géron, Aurélien (2022).** *Hands-On Machine Learning…* (3rd ed.). O'Reilly — chapters 1-2
- 📖 **Bishop, Christopher (2006).** *Pattern Recognition and Machine Learning.* Springer — chapters 1, 3
- 📖 **Burkov, Andriy (2019).** *The Hundred-Page Machine Learning Book.* — entire book

**Academic foundations**
- 📄 **Rosenblatt, F. (1958).** *The perceptron.* Psychological Review — origin of the modern neural network
- 📄 **Breiman, L. (2001).** *Statistical Modeling: The Two Cultures.* Statistical Science — the data-modelling vs algorithmic-modelling debate; foundational for the ML mindset
- 📄 **Chen & Guestrin (2016).** *XGBoost: A Scalable Tree Boosting System.* KDD — the foundational paper for the algorithm you will use in Modules 4 and 8
- 📄 **Vaswani et al. (2017).** *Attention Is All You Need.* NeurIPS — the transformer paper

**Industry**
- 📰 **Andrej Karpathy's blog** — *The Unreasonable Effectiveness of Recurrent Neural Networks* / *Software 2.0* essays
- 📰 **Distill.pub** — visual explanations of core ML concepts (now archived but still gold)
- 📰 **The Gradient** — long-form ML essays
- 📰 **Sebastian Raschka's blog** — practical ML from a textbook author

---

## 🛠️ Appendix A — A 30-Minute "Hello SageMaker" Lab

If you have not yet touched SageMaker, do this lab end-to-end before Module 2. ~$2 in compute.

### Step 1 — Open Studio

1. Sign into the AWS Console as a user with `AmazonSageMakerFullAccess` (we'll fix least-privilege later).
2. Navigate to SageMaker → Studio.
3. Click "Create domain" → "Quick setup" with defaults.
4. Wait ~5 minutes; click "Open Studio".

### Step 2 — Train an XGBoost classifier on the public Census Income dataset

Open a new Python 3 notebook and paste:

```python
import sagemaker
from sagemaker.xgboost import XGBoost
from sagemaker.inputs import TrainingInput
import pandas as pd
from sklearn.datasets import fetch_openml
from sklearn.model_selection import train_test_split

# 1. Load + prepare data
df = fetch_openml("adult", version=2, as_frame=True).frame
df["income_high"] = (df["class"] == ">50K").astype(int)
df = df.drop(columns=["class"]).fillna("MISSING")
for col in df.select_dtypes("object").columns:
    df[col] = pd.factorize(df[col])[0]
y = df.pop("income_high")
df.insert(0, "label", y)   # XGBoost CSV: target = first column

train_df, val_df = train_test_split(df, test_size=0.2, random_state=42, stratify=df["label"])

# 2. Upload to S3
sess = sagemaker.Session()
bucket = sess.default_bucket()
train_df.to_csv("train.csv", index=False, header=False)
val_df.to_csv("validation.csv", index=False, header=False)
sess.upload_data("train.csv", bucket=bucket, key_prefix="hello-sagemaker/train")
sess.upload_data("validation.csv", bucket=bucket, key_prefix="hello-sagemaker/validation")

# 3. Train
role = sagemaker.get_execution_role()
xgb = XGBoost(
    entry_point="dummy.py",           # required but unused for built-in algo container
    role=role,
    instance_type="ml.m5.xlarge",
    instance_count=1,
    framework_version="1.7-1",
    output_path=f"s3://{bucket}/hello-sagemaker/output/",
    hyperparameters={
        "objective": "binary:logistic",
        "num_round": 100,
        "max_depth": 5,
        "eta": 0.2,
    },
)
xgb.fit({
    "train": TrainingInput(f"s3://{bucket}/hello-sagemaker/train/train.csv", content_type="text/csv"),
    "validation": TrainingInput(f"s3://{bucket}/hello-sagemaker/validation/validation.csv", content_type="text/csv"),
})

# 4. Deploy
predictor = xgb.deploy(initial_instance_count=1, instance_type="ml.m5.large")

# 5. Predict
sample = val_df.iloc[0:5, 1:].values
print(predictor.predict(sample))

# 6. CRITICAL: Clean up to avoid charges
predictor.delete_endpoint()
predictor.delete_model()
```

### Step 3 — Verify cleanup

- SageMaker → Endpoints → ensure list is empty
- SageMaker → Notebook instances → stop or delete Studio
- S3 → review the bucket; delete unneeded artifacts

Total cost for this lab: ~$1-3 USD if you delete the endpoint within an hour.

🎯 **What you should now appreciate.** Five lines of meaningful SDK code went from raw data to a trained, deployed binary classifier. This is the leverage SageMaker provides. The next 9 modules add depth, but the *shape* of every training and deployment workflow follows this 5-step pattern.
