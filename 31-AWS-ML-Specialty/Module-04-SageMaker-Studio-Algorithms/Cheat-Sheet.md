# 📋 Module 4 Cheat Sheet: SageMaker Studio & Algorithms

> Print. Tape. Recite.

---

## 🖥️ Studio Anatomy

```
Studio Domain (per account/VPC)
   ├─ User profiles (one per data scientist)
   ├─ Spaces (JupyterLab, Code Editor, RStudio)
   ├─ Apps (Data Wrangler, Canvas, TensorBoard)
   └─ EFS-backed shared storage
```

🎯 Idle auto-shutdown via Lifecycle Configuration kills runaway notebooks.

---

## 🐍 SDK 5-Step Pattern

```
1. role = sagemaker.get_execution_role()
2. estimator = XGBoost(role=..., instance_type=..., hyperparameters=...)
3. inputs = TrainingInput("s3://.../train.csv", content_type="text/csv")
4. estimator.fit({"train": inputs})
5. predictor = estimator.deploy(initial_instance_count=1, instance_type=...)
```

---

## 🧠 The 17 Built-Ins (Memorize)

### Tabular / Supervised
- **XGBoost**, tabular workhorse (cls/reg/rank)
- **Linear Learner**, fast lin/log w/ HPO
- **k-NN**, lazy learner
- **Factorization Machines**, sparse CTR
- **PCA**, dim. reduction

### Unsupervised
- **K-Means**, clustering
- **Random Cut Forest**, anomalies
- **IP Insights**, user-IP anomaly
- **NTM / LDA**, topic modelling

### Text
- **BlazingText**, Word2Vec + text cls (GPU-fast)
- **Object2Vec**, pair embeddings (any pair)
- **seq2seq**, translation/summarisation (legacy)

### Vision
- **Image Classification**, CNN cls
- **Object Detection**, bounding boxes (SSD)
- **Semantic Segmentation**, per-pixel cls

### Time-series
- **DeepAR**, multi-series probabilistic forecast

---

## 🌳 XGBoost Hyperparameter Cheat-Card

| Param | Range | Effect |
|-------|-------|--------|
| `num_round` | 50-2000 | More = more variance |
| `max_depth` | 3-10 | Tree complexity |
| `eta` (LR) | 0.01-0.3 | Shrinks per tree |
| `subsample` | 0.5-1.0 | Stochastic rows |
| `colsample_bytree` | 0.5-1.0 | Stochastic cols |
| `alpha` (L1) | 0-10 | Sparsity |
| `lambda` (L2) | 1-10 | Weight decay |
| `scale_pos_weight` | neg/pos ratio | Imbalanced binary |
| `early_stopping_rounds` | 10-50 | Stop when val plateaus |
| `objective` | `binary:logistic`, `multi:softprob`, `reg:squarederror`, ... | Task |

🚨 Overfit fix: ↓depth · ↑lambda/alpha · ↓eta + early-stop · ↓subsample

---

## 🚀 Data-Delivery Modes

| Mode | Best For |
|------|----------|
| **File mode** (default) | <100 GB data, simple |
| **Pipe mode** | Huge data, RecordIO-protobuf, fast start |
| **FastFile mode** | S3 mount streaming; medium data |

---

## 🐳 Container Modes

| Mode | When |
|------|------|
| **Built-in algorithm** | One of the 17 |
| **Script mode** (framework container) | Custom script, AWS-managed container (TF/PyTorch/MX/HF/sklearn/XGB) |
| **BYO container** (ECR) | Fully custom |
| **Marketplace** | Third-party algo |

---

## 💰 Cost Levers

- **Spot training** (`use_spot_instances=True` + S3 checkpoints) → **up to 90% off**
- **Right-sized instance** (don't use p4d if g5 works)
- **Pipe/FastFile mode** (no idle waiting)
- **Early stopping** (HPO + XGBoost)
- **Notebook idle auto-shutdown**

---

## 🤖 AutoML & No-Code

| Tool | Audience |
|------|----------|
| **Canvas** | Business analyst, zero code |
| **Autopilot** | Data scientist; full code generated |
| **JumpStart** | Pre-built solutions + foundation models |

---

## 🚨 Module-4 Top Traps

| Question phrase | Right answer |
|------------------|--------------|
| "Tabular cls/reg, 10M rows" | **XGBoost** |
| "Sparse one-hot CTR" | **Factorization Machines** |
| "Unsup. tabular/streaming anomaly" | **Random Cut Forest** |
| "Unsup. user-IP anomaly" | **IP Insights** |
| "Multi-series probabilistic forecast" | **DeepAR** |
| "Cluster customers into 5" | **K-Means** |
| "Word2Vec on 1 TB text" | **BlazingText** |
| "Image classification, limited data" | **Image Classification + pretrained** |
| "No-code ML for analyst" | **Canvas** |
| "AutoML with code shown" | **Autopilot** |
| "Custom Docker image" | **BYO container in ECR** |
| "Custom script, no Dockerfile" | **Script mode** |
| "Streaming huge data into training" | **Pipe mode + RecordIO-protobuf** |
| "Cost cut on long training" | **Spot + checkpointing** |
| "Reduce 5,000 features" | **PCA** |

---

## ✏️ Self-Check (60 s)

1. Picking algorithm for: sparse CTR? ___
2. For tabular anomaly without labels? ___
3. To classify images with little data? ___
4. To embed user-item pairs? ___
5. To forecast 5,000 SKUs probabilistically? ___
6. To save 90% on training? ___
7. To use a custom training script with AWS PyTorch container? ___

➡️ [Module 5: Deep Learning on AWS](../Module-05-Deep-Learning-AWS/Reading.md)
