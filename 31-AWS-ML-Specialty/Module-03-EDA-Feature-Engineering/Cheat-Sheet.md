# 📋 Module 3 Cheat Sheet: EDA & Feature Engineering

> Print. Tape. Review.

---

## 📈 5-Step EDA Workflow

```
1. UNDERSTAND  → shape, dtypes, head, describe, nulls
2. VISUALISE   → hist, box, scatter, corr heatmap
3. CLEAN       → impute, outliers, duplicates, type fixes
4. ENGINEER    → encode cat, scale num, derive, reduce dim
5. SPLIT       → stratified train/val/test (or k-fold)
```

---

## 🧹 Missing Values

| Strategy | When |
|----------|------|
| **Drop rows** | Few missing + plentiful data |
| **Drop columns** | >70-80% missing AND not crucial |
| **Mean / median / mode impute** | MCAR or MAR + moderate fraction |
| **KNN / MICE predictive impute** | High-stakes |
| **Sentinel + indicator** | **Trees + missing-is-signal** ← OFTEN BEST |

🚨 MNAR (missing-not-at-random) requires care; imputation biases the model.

---

## 🛑 Outlier Detection

| Method | Use |
|--------|-----|
| **IQR** (Q1-1.5·IQR, Q3+1.5·IQR) | Univariate, quick |
| **Z-score** (\|z\|>3) | Normal data |
| **Isolation Forest** | Multivariate, scalable |
| **Random Cut Forest** (AWS) | Streaming/tabular |
| **DBSCAN / LOF** | Density-based |

🚨 Outliers can be the *signal* (fraud, equipment failure). Don't blindly remove.

---

## 🔤 Categorical Encoding

| Type | When |
|------|------|
| **One-hot** | Few categories (<50), no order |
| **Ordinal / label** | Natural order (S/M/L) |
| **Target encoding (CV-safe!)** | High-card + target relation |
| **Hashing trick** | Very high-card, OK with collisions |
| **Frequency / count** | High-card popularity feature |
| **Embedding (learned)** | Many categories + DL model |

🚨 Target encoding without CV folds = LEAKAGE.

---

## 📐 Scaling

| Scaler | Use |
|--------|-----|
| **StandardScaler** | Default; ~normal data |
| **MinMaxScaler** | Bounded [0,1]; DL inputs |
| **MaxAbsScaler** | Sparse data (preserves zeros) |
| **RobustScaler** | Outlier-heavy |
| **log / Box-Cox / Yeo-Johnson** | Right-skewed |

🚨 Trees (XGBoost / RF) are scale-invariant. DL / linear / KNN / SVM need scaling.

---

## 📉 Dimensionality Reduction

| Tool | Use |
|------|-----|
| **PCA** | Linear; preserve variance |
| **t-SNE** | **Viz only**; slow on >50K points |
| **UMAP** | **Viz only**; faster + better global |
| **Autoencoder / Object2Vec** | Learned non-linear |

🚨 t-SNE / UMAP outputs are NOT good features, they're for plots.

---

## ⚖️ Class Imbalance

1. **Stratified split / k-fold**
2. **Class weights** in the model
3. **SMOTE / ADASYN** on TRAINING fold only
4. **Threshold tuning** (e.g. 0.3 instead of 0.5)
5. **PR-AUC** as metric, NOT accuracy

🚨 SMOTE before train/val split = leakage. ALWAYS after.

---

## 🤖 AWS Tools (Memorize)

| Tool | Use |
|------|-----|
| **SageMaker Data Wrangler** | Visual prep, 300+ transforms, exports to Pipelines / Feature Store |
| **SageMaker Feature Store** | Online + offline dual store |
| **SageMaker Clarify** (pre-training) | Bias detection on the DATASET |
| **Amazon QuickSight** | BI dashboards |
| **Amazon Q in QuickSight** | NL EDA for business users |
| **Glue DataBrew** | No-code analyst prep (outside SageMaker) |

---

## 🎲 Clarify Pre-Training Bias Metrics

- **CI** (Class Imbalance)
- **DPL** (Difference in Proportions of Labels)
- **KL** (Kullback-Leibler divergence)
- **JS** (Jensen-Shannon)
- **Lp norm**
- **TVD** (Total Variation Distance)
- **CDDL** (Conditional Demographic Disparity)

---

## 🏪 Feature Store, Online vs Offline

| Store | Backed by | Use |
|-------|-----------|-----|
| **Online** | In-memory + DynamoDB | <100 ms inference lookups |
| **Offline** | S3 (Simple Storage Service) + Glue Catalogue | Training + historical replay |

Same feature definitions; data dual-written.

---

## 🚨 Top Module-3 Traps

| Phrase | Trap |
|--------|------|
| "drop rows with missing values" | Often the wrong default; add indicator |
| "always scale numerics" | Not for tree models |
| "one-hot encode zip code" | Cardinality blowup; use embedding/hash |
| "SMOTE before split" | Leakage |
| "use t-SNE features in model" | t-SNE for VIZ only |
| "accuracy on imbalanced data" | Use PR-AUC, F1 |
| "remove all outliers" | Check if they're the signal |

---

## ✏️ Self-Check

1. Best handling for `last_login_date` missing 23%? ___
2. PCA assumes what about relationships? ___
3. Scaler for sparse data? ___
4. Cyclical encoding formula? ___
5. SMOTE goes BEFORE or AFTER the split? ___
6. Tool for natural-language EDA for business users? ___

➡️ [Module 4: SageMaker Studio & Algorithms](../Module-04-SageMaker-Studio-Algorithms/Reading.md)
