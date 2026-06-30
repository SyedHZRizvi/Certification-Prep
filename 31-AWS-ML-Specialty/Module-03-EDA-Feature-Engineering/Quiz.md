# ✏️ Module 3 Quiz: EDA & Feature Engineering

> 25 questions. Aim 20+/25. 35 minutes. No notes.

> **Bloom's distribution.** Remember 3 · Understand 5 · Apply 10 · Analyze/Evaluate 6 · Create 1.

---

## Questions

### Q1. A dataset has `last_login_date` missing for 23% of rows in a churn-prediction task. The BEST approach is: *(Apply)*
A. Drop all rows with missing values
B. Impute with the median date
C. Treat missingness as informative: add `last_login_missing` indicator AND impute or sentinel-fill
D. Drop the `last_login_date` column

---

### Q2. An income column is heavily right-skewed (median $50K, max $5M). The BEST transformation before linear regression is: *(Apply)*
A. One-hot encode
B. Log1p transform, then StandardScaler
C. Drop the column
D. PCA

---

### Q3. Which scaler is MOST appropriate for sparse high-dimensional data? *(Apply)*
A. StandardScaler
B. MinMaxScaler
C. MaxAbsScaler
D. RobustScaler

---

### Q4. A team encodes US zip codes (40,000+ distinct) as features for an XGBoost model. The BEST encoding is: *(Apply)*
A. One-hot encoding (creates 40,000 columns)
B. Ordinal encoding (1, 2, 3 … 40000)
C. Target encoding with leakage-safe CV-fold computation OR a hashing trick OR frequency encoding
D. Drop the column

---

### Q5. PCA assumes which property of the data? *(Understand)*
A. Linear relationships between features
B. Categorical encoding
C. Class balance
D. Non-normality

---

### Q6. The IQR (interquartile range) outlier rule defines an outlier as a point: *(Remember)*
A. Above 3σ from the mean
B. Outside Q1 − 1.5·IQR to Q3 + 1.5·IQR
C. With Z-score above 0.1
D. With no missing values

---

### Q7. A binary classifier is trained on 99.5% / 0.5% imbalanced data. Which combination is BEST? *(Apply)*
A. Train as-is, report accuracy
B. SMOTE applied to the entire dataset before splitting
C. Stratified k-fold + class weights + SMOTE on training fold only + PR-AUC for evaluation
D. Drop the majority class

---

### Q8. Which AWS service is BEST for no-code visual data preparation with 300+ transformations and Pipelines export? *(Remember)*
A. AWS Glue ETL
B. SageMaker Data Wrangler
C. Amazon Athena
D. AWS DataBrew

---

### Q9. A 30-person team needs sub-100ms feature lookups during inference AND historical feature snapshots for training. The BEST design is: *(Apply)*
A. Custom Redis cluster
B. SageMaker Feature Store with online + offline stores
C. DynamoDB and Athena, separately
D. Recompute features on every inference

---

### Q10. Detecting anomalies in tabular streaming data WITHOUT labelled examples is BEST done with: *(Apply)*
A. XGBoost classifier with class weights
B. K-Means clustering
C. SageMaker Random Cut Forest
D. Linear Learner

---

### Q11. A correlation heatmap across 200 numeric features shows several pairs with |r| > 0.95. The MOST appropriate response is: *(Apply)*
A. Drop one of each highly correlated pair to reduce multicollinearity
B. Add interaction terms between them
C. Keep both and use as-is
D. Run t-SNE

---

### Q12. Which encoding option is MOST appropriate for a categorical feature with a natural order (e.g. T-shirt sizes S, M, L, XL)? *(Apply)*
A. One-hot encoding
B. Ordinal / label encoding preserving the order
C. Target encoding
D. Hashing trick

---

### Q13. SMOTE applied to the **entire dataset before** train/val split is: *(Analyze)*
A. Best practice
B. Data leakage, synthetic minority points spill into validation
C. Encryption
D. Required by AWS

---

### Q14. The PRIMARY purpose of pre-training bias detection (Clarify) is: *(Understand)*
A. Tune hyperparameters
B. Detect bias in the labelled dataset BEFORE training so the model doesn't learn discriminatory patterns
C. Detect data drift after deployment
D. Choose an algorithm

---

### Q15. A team wants to reduce 5,000 numeric features while preserving most of the variance for an XGBoost model. The BEST tool is: *(Apply)*
A. t-SNE
B. UMAP
C. PCA (keep enough PCs for 95% cumulative variance)
D. K-Means

---

### Q16. Which is NOT a valid AWS Clarify pre-training bias metric? *(Remember)*
A. Difference in Proportions of Labels (DPL)
B. Class Imbalance (CI)
C. Kullback-Leibler Divergence (KL)
D. Mean Squared Error (MSE)

---

### Q17. A tree-based model (XGBoost) is being trained on raw features (no scaling). The team is told to "scale numeric features for better performance". The MOST accurate response is: *(Analyze)*
A. Yes, always scale numeric features
B. Trees are scale-invariant; scaling doesn't hurt but typically doesn't help
C. Convert to one-hot first, then scale
D. Apply PCA instead

---

### Q18. To learn dense embeddings for tens of thousands of product IDs as features for a deep neural net, the BEST approach is: *(Apply)*
A. One-hot encoding
B. PCA on the IDs
C. Learned embedding layer (e.g. Keras Embedding, SageMaker Object2Vec)
D. Hash to 32 random buckets

---

### Q19. The standard AWS pattern to do natural-language ad-hoc EDA on a business dataset for non-technical users is: *(Apply)*
A. Athena workgroup
B. Amazon Q in QuickSight
C. SageMaker Data Wrangler
D. AWS Glue DataBrew

---

### Q20. A bank's loan dataset shows the **approval rate is 65% for one demographic group and 38% for another** before any model is built. The BEST way to surface this is: *(Apply)*
A. Train a model and inspect predictions
B. Run SageMaker Clarify pre-training bias report on the dataset
C. Wait for Model Monitor to flag it after deployment
D. Use SageMaker Debugger

---

### Q21. A dataset has duplicate rows that appear in both train and validation splits after shuffling. The result is: *(Analyze)*
A. Faster training
B. Data leakage, validation accuracy is inflated
C. Higher precision
D. Lower variance

---

### Q22. Which transformation is BEST for converting cyclical features (e.g. month_of_year, hour_of_day) so tree models can capture wrap-around? *(Apply)*
A. Z-score normalisation
B. One-hot encoding into 12 (or 24) columns
C. sin(2π·t/period) + cos(2π·t/period) (cyclical encoding)
D. PCA

---

### Q23. The MOST common cause of "the model is great on Kaggle but fails in production" is: *(Evaluate)*
A. Bigger production data
B. Different feature distributions and missing-value patterns in production vs training data (concept / data drift)
C. Cheaper hardware
D. Lower latency requirement

---

### Q24. A team uses target encoding for a categorical feature with no leakage protection. The MOST likely consequence is: *(Analyze)*
A. Faster training
B. Overly optimistic validation metrics because target leaks into the encoding
C. Smaller model size
D. Lower bias

---

### Q25. To remove features with near-zero variance from a dataset BEFORE training: *(Apply)*
A. PCA
B. Variance threshold filter (e.g. drop columns with variance < threshold)
C. SMOTE
D. RobustScaler

---

## 🎯 Answers + Explanations

### Q1: **C. Missingness as informative + indicator column**
Missing `last_login_date` likely correlates with churn (people who never logged in). Add an indicator `last_login_missing = 1`, then impute or sentinel-fill the date. Don't drop.

### Q2: **B. Log1p + StandardScaler**
Right-skewed → log1p shifts to roughly normal → StandardScaler standardises for linear models. RobustScaler is an alternative if outliers persist.

### Q3: **C. MaxAbsScaler**
MaxAbsScaler preserves sparsity (doesn't shift zeros). StandardScaler centres data and destroys sparsity. Sparse data = TF-IDF, one-hot, etc.

### Q4: **C. Target encoding (CV-safe) OR hashing OR frequency**
40,000 columns of one-hot is impractical. Ordinal encoding implies false ordering. Target encoding with CV-fold computation is best; hashing or frequency encoding are acceptable alternatives.

### Q5: **A. Linear relationships**
PCA finds orthogonal axes of max variance, a linear projection. Non-linear structure needs t-SNE / UMAP / autoencoders.

### Q6: **B. Outside Q1 − 1.5·IQR to Q3 + 1.5·IQR**
Standard Tukey IQR rule. 3σ is the Z-score rule.

### Q7: **C. Stratified k-fold + class weights + SMOTE on training fold only + PR-AUC**
The complete imbalance toolkit. Stratified preserves class proportions; class weights tune loss; SMOTE on the training fold avoids leakage; PR-AUC is the right metric for imbalanced data.

### Q8: **B. SageMaker Data Wrangler**
Data Wrangler is the no-code visual data-prep tool inside SageMaker Studio. DataBrew (Glue) is similar but separate from SageMaker Pipelines.

### Q9: **B. SageMaker Feature Store online + offline**
The dual-mode design, online for inference (low latency), offline (S3) for training. The MLA-C01 canonical answer.

### Q10: **C. Random Cut Forest**
RCF is unsupervised, designed for streaming, no labels needed. The standard SageMaker answer for tabular anomaly detection.

### Q11: **A. Drop one of each highly correlated pair**
Multicollinearity hurts linear models and inflates variance. Drop one of each pair with |r| > 0.95 or apply PCA.

### Q12: **B. Ordinal / label encoding preserving order**
T-shirt sizes have natural order; ordinal encoding (1, 2, 3, 4) preserves it. One-hot loses ordering.

### Q13: **B. Data leakage**
SMOTE before split = synthetic minority points scattered across train/val. Always SMOTE on training fold only.

### Q14: **B. Detect dataset bias before training**
Clarify pre-training bias surfaces label and feature disparities before any model is trained. (Clarify also has post-training bias and SHAP.)

### Q15: **C. PCA**
PCA is linear dim. reduction that preserves variance. t-SNE / UMAP are for visualisation, not as model inputs. K-Means is clustering.

### Q16: **D. MSE**
MSE is a regression loss, not a Clarify bias metric. DPL, CI, KL, JS, Lp, TVD, CDDL are valid Clarify pre-training bias metrics.

### Q17: **B. Trees are scale-invariant**
XGBoost / RF use threshold splits, feature scale doesn't change splits. Scaling is harmless but not helpful.

### Q18: **C. Learned embedding layer**
Embeddings compress IDs to dense vectors learned during training. One-hot gives 10,000+ sparse columns; PCA on IDs is meaningless.

### Q19: **B. Amazon Q in QuickSight**
Q in QuickSight provides natural-language EDA for business users. Athena requires SQL; Data Wrangler / DataBrew are ML-engineer-facing.

### Q20: **B. Clarify pre-training bias report**
Pre-training bias surfaces disparities before training. Model Monitor would catch this too late (post-deployment); Debugger is for training-internals introspection.

### Q21: **B. Data leakage; inflated validation accuracy**
Duplicates straddling train/val mean the model "remembers" validation examples. Always deduplicate before splitting.

### Q22: **C. Cyclical sin/cos encoding**
sin/cos encoding gives a 2-D representation where Dec → Jan smoothly wraps. Tree models can use both columns to learn the cycle.

### Q23: **B. Data / concept drift**
Real-world distribution shifts. The fix is Model Monitor + scheduled retraining (Module 9).

### Q24: **B. Inflated validation metrics due to leakage**
If you compute target encoding on the full dataset including validation rows, the encoding leaks the label.

### Q25: **B. Variance threshold filter**
sklearn's `VarianceThreshold` drops near-constant features cheaply.

---

## 📊 Score

- 24–25 → 🏆 Mastery. Module 4 awaits.
- 20–23 → ✅ Solid.
- 16–19 → ⚠️ Re-read the missing-values, encoding, and class-imbalance sections.
- <16 → 🔁 Re-read the full Reading.md.

---

## 🃏 Add to flashcards

- Missing values: drop / impute / indicator / informative-missing
- Outliers: IQR / Z / Isolation Forest / RCF
- Encoding: one-hot / ordinal / target (CV-safe!) / hashing / embedding
- Scaling: Standard / MinMax / MaxAbs / Robust / log / Box-Cox
- Dim. reduction: PCA (linear), t-SNE / UMAP (viz only), embeddings (learned)
- Class imbalance: weights / SMOTE on train only / threshold / class metrics
- Data Wrangler vs DataBrew vs QuickSight (and Q in QuickSight)
- Feature Store: online + offline pattern

➡️ [Cheat-Sheet.md](./Cheat-Sheet.md) → [Module 4](../Module-04-SageMaker-Studio-Algorithms/Reading.md)
