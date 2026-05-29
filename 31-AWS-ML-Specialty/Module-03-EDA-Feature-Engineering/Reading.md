# Module 3: Exploratory Data Analysis & Feature Engineering 🔬

> **Why this module matters:** Domain 2 of the MLS-C01 exam is **EDA — 24%** of every question. More exam weight than Data Engineering, more than MLOps. Feature engineering is also the single highest-leverage activity in production ML: in Kaggle competitions and real-world projects alike, a thoughtful feature set on a mediocre algorithm beats a brilliant algorithm on raw features. This module makes you fluent in the statistical reasoning, the cleaning techniques, the encoding strategies, the dimensionality-reduction tricks, and the AWS-specific tools (Data Wrangler, QuickSight, Clarify data bias) you need.

> **Prerequisites for this module.** Modules 1 and 2 of this course. Helpful background:
> - Comfort with pandas and NumPy at the level of `df.describe()`, `df.groupby()`, `df.merge()`
> - One semester of statistics (mean, median, variance, percentiles, normal distribution, hypothesis testing)
> - Basic linear algebra (vectors, dot product, eigenvectors) — 3Blue1Brown's *Essence of Linear Algebra* episode 14 (eigenvectors) is enough for PCA
> - If you've used scikit-learn's `StandardScaler` or `OneHotEncoder`, you're ahead

---

## 🍕 A Story: Airbnb's First Dynamic-Pricing Model That Failed

Meet Mei. She joined Airbnb's pricing team in 2017 and was tasked with building a model to recommend optimal listing prices. The data was magnificent: 100M+ bookings, 5M+ active hosts, 100+ raw fields per listing — distance to subway, number of bathrooms, host response rate, photos count, calendar availability.

Her first model — gradient boosting on raw features — predicted prices with **R² = 0.38** on holdout. Disappointing. She iterated for 3 weeks: more trees, deeper trees, tuned learning rate. The needle barely moved.

Then a senior engineer reviewed her data. He found:
- 47% of listings had `bathrooms = 0` (data entry default; truly missing)
- Photo count was log-skewed: 5 photos median, but power-law tail to 200 (some hosts dumped every shot)
- `host_response_rate` was a string ("87%" with NaN for new hosts)
- `latitude / longitude` were *raw* — model could not infer "near subway" without the engineering of a `distance_to_nearest_subway` feature
- Listings in tourist-dense neighbourhoods were 28× more abundant than rural — the model overfit cities and ignored rural pricing

Two weeks of feature engineering — proper imputation, log transforms, derived "distance to amenity" features, target encoding of neighbourhood, careful stratified splits — and R² climbed from 0.38 to 0.71. **No algorithm change.** Just better features and cleaner data.

That is what this module teaches. The hardest, slowest, and most leveraged part of ML is what happens between raw data and the `.fit()` call.

---

## 📈 The 5-Step EDA Workflow (Memorise)

Every dataset gets walked through these five steps before a single model is trained:

```
1. UNDERSTAND     → shape, dtypes, head/tail, basic counts
2. VISUALISE      → histograms, box plots, scatter matrix, correlation heatmap
3. CLEAN          → missing values, duplicates, outliers, type conversions
4. ENGINEER       → derive features, encode categoricals, scale numerics, reduce dimensions
5. SPLIT          → stratified train / validation / test (or k-fold)
```

🎯 **Exam pattern.** Many MLS-C01 questions test step 3 (cleaning) and step 4 (engineering). The other steps appear in scenario context.

---

## 1️⃣ Understanding The Data

Before any transformation, answer:

| Question | Pandas / SQL |
|----------|--------------|
| How many rows? Columns? | `df.shape` |
| Dtypes? | `df.dtypes` |
| Per-column missing-value count? | `df.isna().sum()` |
| Numeric summary? (min/q1/median/q3/max/mean/std) | `df.describe()` |
| Categorical cardinalities? | `df.select_dtypes('object').nunique()` |
| Class balance for classification? | `df['target'].value_counts(normalize=True)` |
| Memory usage? | `df.memory_usage(deep=True).sum()` |

🎯 **Exam pattern.** *"99.7% of records have label=0 and 0.3% have label=1. Which problem is this?"* → **Class imbalance**, addressable via stratified sampling, class weights, oversampling (SMOTE), or undersampling.

---

## 2️⃣ Visualising The Data — The Standard Plot Set

| Plot | When | What you learn |
|------|------|----------------|
| **Histogram** | Numeric column | Distribution shape, skew, multimodality, outlier bumps |
| **Box plot** | Numeric column or by category | Quartiles, IQR, outliers (whiskers) |
| **Density / KDE** | Numeric column | Smoother histogram |
| **Bar chart** | Categorical | Frequencies, balance |
| **Scatter plot** | Two numerics | Correlation, clusters, outliers |
| **Pair plot / scatter matrix** | Several numerics | All pairwise relationships |
| **Correlation heatmap** | All numerics | Linear pairwise correlation matrix |
| **Violin plot** | Numeric by category | Distribution per group + summary |
| **Q-Q plot** | Numeric | Compare to a theoretical (e.g. normal) distribution |
| **Time-series line plot** | Time + numeric | Trend, seasonality, change points |
| **Lag plot** | Time series | Autocorrelation |
| **PR / ROC curve** | Model scores + labels | Classifier ranking quality |

🎯 **AWS-specific tooling** for EDA:
- **SageMaker Data Wrangler** — UI-based EDA + transforms; produces a reproducible flow file
- **Amazon QuickSight** — BI / dashboard tool; can produce histograms, scatter, heatmaps without a notebook
- **Amazon Q in QuickSight** — natural-language EDA ("show me sales by region for last 30 days")
- **SageMaker Studio notebooks** — full pandas / matplotlib / seaborn / Plotly

🚨 **Trap.** *"Quickly check pairwise correlations across 200 numeric features."* → **Correlation heatmap**, then drop one of each pair with `|r| > 0.95` to reduce multicollinearity. Pair plots break at 200 features.

---

## 3️⃣ Cleaning — Missing Values, Outliers, Duplicates

### Missing values — the 4 strategies

| Strategy | When | Caveat |
|----------|------|--------|
| **Drop rows** (listwise deletion) | Few missing AND data is plentiful | Loses information; biases if missingness correlates with target |
| **Drop columns** | >70-80% of column is missing AND not crucial | Decide threshold up front; document |
| **Impute (mean / median / mode)** | Missing-at-random and moderate fraction | Use median for skewed; mode for categorical; degrades variance |
| **Predictive imputation** (KNN, MICE, model-based) | High-stakes / few features missing | Slower; better than naive imputation |
| **Sentinel value** (e.g. -1 or "Unknown") | Tree models can handle missing as a distinct category | DON'T do this for linear models — leaks weird signal |
| **Indicator column** | "is_missing" plus imputed value | Often the BEST for tree models — preserves the signal that *missingness itself* may be informative |

### When missingness IS the signal

Missing data is rarely random:
- **MCAR (missing completely at random)** — true random; drop or impute is fine
- **MAR (missing at random)** — depends on observed columns; impute conditional on those columns
- **MNAR (missing not at random)** — depends on the unobserved value itself (people who didn't share salary often have higher/lower salaries); imputation biases the model

🎯 **Exam pattern.** *"Customer churn data has `last_login_date = NULL` for 23% of records. Drop, impute, or treat as informative?"* → Treat as **informative** — NULL might mean "never logged in", which is itself a churn signal. Add `last_login_missing` indicator + impute date.

### Outlier detection — the canonical methods

| Method | How | When |
|--------|-----|------|
| **IQR rule** | `Q1 - 1.5·IQR` to `Q3 + 1.5·IQR`; outside = outlier | Univariate, quick |
| **Z-score** | `|z| > 3` is outlier | Assumes normal distribution |
| **Modified Z-score (MAD)** | Robust version using median absolute deviation | Non-normal distributions |
| **Isolation Forest** | Random partitioning — anomalies isolated quickly | Multivariate, scalable |
| **Local Outlier Factor (LOF)** | Density-based | Clusters of varying density |
| **One-Class SVM** | Boundary around "normal" | Small to medium data |
| **SageMaker Random Cut Forest** | AWS native; built for streaming + tabular | Production multivariate anomaly |
| **DBSCAN** | Density clustering with noise points | Spatial / 2D data |

🎯 **Exam pattern.** *"Detect anomalies in a stream of tabular sensor readings."* → **SageMaker Random Cut Forest** (built-in algo, streaming-friendly, no labels needed).

🚨 **Trap.** *"Always remove outliers."* → **WRONG**. Outliers can be the *signal* (fraud, equipment failure, viral content). Decide based on domain:
- Sensor glitches → remove
- Fraud transactions → keep, label, train on them
- Data-entry errors → remove or correct

### Duplicates

```python
# Detect duplicates
df.duplicated().sum()             # exact duplicates
df.duplicated(subset=['user_id', 'timestamp']).sum()  # near-duplicates by key

# Drop
df = df.drop_duplicates(subset=['user_id', 'timestamp'], keep='last')
```

🎯 **Always check for duplicates before splitting.** A row that appears in both train and validation = data leakage.

---

## 4️⃣ Feature Engineering — The Highest Leverage Step

Feature engineering = creating new columns from existing ones. This is where domain knowledge wins.

### Encoding categorical features

| Technique | When | Caveat |
|-----------|------|--------|
| **One-hot encoding** | Few distinct categories (<50), no ordinal relation | Explodes feature count; use sparse representation |
| **Label / ordinal encoding** | Categories have natural order (e.g. T-shirt: S/M/L/XL) | DON'T use on nominal data with linear models — implies ordering |
| **Binary / hash encoding** | High-cardinality (1000s of categories) | Some collisions; trades exactness for size |
| **Target / mean encoding** | High-cardinality with clear target relationship (e.g. zip code → mean income) | **Leakage risk** — encode inside CV folds! |
| **Frequency / count encoding** | High-cardinality | Captures only popularity, not relationship to target |
| **Embedding (learned)** | Tens of thousands of categories + neural model | Best quality; trained alongside the model |

🎯 **Exam pattern.** *"Encode US zip code as a feature for a deep neural network."* → **Learned embedding** (e.g. via Keras Embedding layer or SageMaker Object2Vec). One-hot would create 40,000 features.

🚨 **Trap.** *"Use one-hot encoding for ordinal data."* → loses ordering information. Use ordinal encoding or numeric mapping.

### Scaling numeric features

| Scaler | Formula | When |
|--------|---------|------|
| **StandardScaler (z-score)** | `(x − μ) / σ` | Most algorithms; assumes ~normal |
| **MinMaxScaler** | `(x − min) / (max − min)` to [0,1] | Neural nets (bounded activations); imaging |
| **MaxAbsScaler** | `x / max(|x|)` | Sparse data (preserves sparsity) |
| **RobustScaler** | `(x − median) / IQR` | Outlier-heavy data |
| **Quantile / RankGauss** | Maps to uniform / Gaussian via empirical CDF | Heavy-tailed distributions |
| **Log / Box-Cox / Yeo-Johnson** | Functional transforms | Right-skewed data |

🎯 **Exam pattern.** *"Income column is heavily right-skewed (median $50K, max $5M)."* → **log1p transform**, then `StandardScaler`. Or **RobustScaler**. Or **quantile transform**.

🚨 **Trap.** *"Always scale numeric features."* → **Not strictly true**. Tree-based models (XGBoost, Random Forest, LightGBM) are scale-invariant — scaling does no harm but also no good. Linear / DL / distance-based models (SVM, K-Means, KNN) require scaling.

### Time / date features (almost always derived)

From a raw timestamp, you can derive 10+ features:
- `year`, `quarter`, `month`, `week_of_year`, `day_of_month`, `day_of_week`
- `is_weekend`, `is_holiday`, `hours_since_last_event`, `time_of_day_bucket`
- `cyclical` encoding: `sin(2π·month/12), cos(2π·month/12)` for tree-models that miss the wrap-around

### Text features (preview — Module 6 deepens)

- **Bag-of-Words / TF-IDF** — sparse counts
- **Character / word n-grams** — capture sub-word patterns
- **Embeddings** — Word2Vec, GloVe, BlazingText, Sentence-BERT, OpenAI/Anthropic via Bedrock
- **Keyword extraction** — Amazon Comprehend key phrases

### Image features (preview — Module 5)

- **Resizing / cropping / padding** to a uniform size
- **Data augmentation** (rotate, flip, colour jitter, MixUp, CutMix)
- **Pre-trained embeddings** — extract last-layer features from ResNet50 / EfficientNet via SageMaker

### Interactions and aggregations

- **Polynomial features** — `x1 × x2`, `x1²` (sometimes useful for linear models)
- **Group aggregations** — `count`, `mean`, `std`, `min`, `max` of a numeric grouped by a categorical (e.g. mean order value per customer)
- **Time-windowed aggregations** — 7-day rolling mean (Feature Store's specialty)

### Domain-derived features (the real money)

In Airbnb's case:
- `distance_to_nearest_subway` from raw lat/lon
- `photos_per_bedroom`
- `host_tenure_days` from `host_since`
- `availability_rate_30d`

These cannot be auto-derived — they require domain knowledge.

---

## 5️⃣ Dimensionality Reduction — When Features Are TOO Many

When you have hundreds or thousands of features, model performance and training time both suffer. Three families:

### PCA — Principal Component Analysis

| Property | Detail |
|----------|--------|
| **Type** | Linear projection onto orthogonal axes of maximum variance |
| **Output** | k < n principal components (PCs) ordered by variance explained |
| **Use** | Compress features; remove multicollinearity; visualise high-dim data in 2D |
| **AWS support** | SageMaker built-in **PCA** algorithm |
| **Math** | Eigendecomposition of covariance matrix (or SVD) |

🎯 **Exam pattern.** *"5,000 numeric features and a slow XGBoost. Reduce features while preserving variance."* → **PCA**, keep enough PCs for 95% cumulative variance.

🚨 **Trap.** PCA assumes **linear** relationships. For non-linear structure, use t-SNE / UMAP.

### t-SNE and UMAP — Non-Linear Visualisation

| Tool | Strength | Caveat |
|------|----------|--------|
| **t-SNE** | Beautiful 2-D visualisations of clusters | Slow; not for >50k points; can mislead on distances |
| **UMAP** | Faster t-SNE alternative; better global structure | Newer; more hyperparameters |

🎯 **Use t-SNE / UMAP ONLY for visualisation**, NOT as a feature transform input to a model. They are stochastic and not deterministic enough.

### Autoencoders & embeddings — learned compression

For non-linear structure that you want to feed back into a model, use a neural autoencoder. SageMaker supports this through TensorFlow / PyTorch containers. **Object2Vec** is a SageMaker built-in for learning embeddings.

### Feature selection (different from PCA)

| Technique | How |
|-----------|-----|
| **Variance threshold** | Drop features with near-zero variance |
| **Correlation filter** | Drop one of each pair with `|r| > 0.95` |
| **Mutual information** | Rank by `MI(feature, target)` |
| **L1 regularisation (Lasso)** | Train and drop features with zero coefficients |
| **Tree-based importance** | Train XGBoost / RF; drop bottom-x% by importance |
| **Recursive feature elimination (RFE)** | Iteratively train and drop weakest feature |

PCA *transforms* features (loses interpretability); feature selection *keeps* original features.

---

## ⚖️ Class Imbalance — The Five Treatments

When the positive class is <10% (or <1%), models default to predicting the majority. Five fixes:

| Treatment | How | Caveat |
|-----------|-----|--------|
| **Class weighting** | Pass `class_weight={0:1, 1:99}` to the model | First thing to try; minimal data manipulation |
| **Random oversampling** | Duplicate minority class | Risk of overfitting on duplicates |
| **SMOTE / ADASYN** | Synthesise new minority examples by interpolating neighbours | Better than duplication |
| **Random undersampling** | Drop majority class | Loses information |
| **Threshold tuning** | Lower decision threshold (e.g. 0.3 not 0.5) | Doesn't change the model, just the decision |
| **Cost-sensitive learning** | Custom loss with FN-vs-FP costs | Requires real cost numbers |

🎯 **Exam pattern.** *"Train a binary classifier on a 99.5% / 0.5% imbalanced dataset."* → start with **class weighting** + **stratified k-fold CV**. If not enough, try **SMOTE on the training set only** (never on validation!), and tune **decision threshold** to hit the operating point you need.

🚨 **Trap.** *"Apply SMOTE to the whole dataset, then split into train / val."* → **DATA LEAKAGE**. SMOTE must run AFTER the split, on the training set only.

---

## 🤖 SageMaker Data Wrangler — The MLS-C01 Pet Tool

Data Wrangler is the visual data-prep tool inside SageMaker Studio. The exam will ask about it directly.

| Feature | Detail |
|---------|--------|
| **Data sources** | S3, Athena, Redshift, EMR, Snowflake, DataBricks, JDBC, Lake Formation |
| **300+ built-in transforms** | Drop columns, impute, encode, scale, vectorise, custom Python / SQL / PySpark |
| **Quick model** | One-click train of an XGBoost baseline to evaluate feature impact |
| **Data Quality and Insights Report** | Auto-detects skew, missingness, anomalies |
| **Bias Report (Clarify-powered)** | Pre-training bias detection |
| **Export targets** | SageMaker Pipelines step, Feature Store, Python notebook, training job |
| **Repeatable** | Saves a `.flow` file; can be re-run on new data |

🎯 **Exam pattern.** *"Data scientist wants a no-code way to clean a dataset and produce a reproducible pipeline for production."* → **SageMaker Data Wrangler** → export as a Pipelines step or Feature Store ingest job.

---

## 🏪 SageMaker Feature Store

The first centralised, dual-mode (online + offline) feature store in any major cloud. Used for serving features at inference time and reusing them at training time.

| Component | Purpose |
|-----------|---------|
| **Online store** | Low-latency key-value store (in-memory; DynamoDB-backed by default) for real-time inference |
| **Offline store** | S3 + Glue Catalogue for batch training and historical replay |
| **Feature group** | A named set of features sharing a record identifier + event time |
| **Ingest API** | `put_record` (online + offline) or batch ingest |
| **Time-travel queries** | Athena queries on offline store filtered by event time |

🎯 **Exam pattern.** *"Capital One needs sub-100ms feature lookups during a card-swipe AND wants the same features available for nightly retrains."* → **Feature Store: online + offline**. The feature definitions (event time, record ID) are the same; data is dual-written.

🚨 **Trap.** *"Use the offline store to serve real-time predictions."* → it's S3 with eventual consistency. Use the online store for low latency.

---

## 📊 Amazon QuickSight & Amazon Q in QuickSight

| Tool | When |
|------|------|
| **QuickSight Standard / Enterprise** | BI dashboards; can include scatter, histograms, KPI tiles |
| **SPICE engine** | QuickSight's in-memory cache; speeds up dashboards |
| **QuickSight ML Insights** | Auto-detected outliers + forecasts + narrative insights |
| **Amazon Q in QuickSight** | Natural-language Q&A on your data ("plot revenue by region last quarter") |

🎯 **Exam pattern.** *"Business users want to ask plain-English questions about ML feature dataset for exploratory analysis."* → **Amazon Q in QuickSight**.

---

## 🎲 Bias Detection in Data (Pre-Training)

Before training, check for **data bias** that could lead to unfair outcomes. SageMaker Clarify can run **pre-training bias** analysis on a dataset (we cover post-training bias in Module 8).

| Metric (Clarify pre-training) | What it measures |
|-------------------------------|------------------|
| **Class Imbalance (CI)** | Difference in proportion of positives between facets |
| **Difference in Proportions of Labels (DPL)** | Same as CI but in label space |
| **Kullback-Leibler Divergence (KL)** | Distribution divergence between facets |
| **Jensen-Shannon (JS)** | Symmetric divergence |
| **Lp norm** | Distance between probability distributions |
| **Total Variation Distance (TVD)** | Half the L1 distance |
| **Conditional Demographic Disparity (CDDL)** | Disparity adjusted for confounders |

🎯 **Exam pattern.** *"Loan dataset has 65% approval rate for one gender and 38% for another. Detect this BEFORE training."* → **SageMaker Clarify pre-training bias report** (DPL, CI, KL).

---

## 📖 Case Study — Stripe Radar's Feature Pipeline

**Situation.** Stripe processes hundreds of billions of payment events. Their Radar fraud-detection model relies on ~1,200 features derived from a transaction, the cardholder's history, the merchant's history, the device, and recent network behaviour. Some features must be computed in <10 ms for real-time scoring; others are batch-computed nightly.

**Architecture (publicly described in 2022/2023 talks).**
- **Raw data** lands in S3 + Snowflake equivalents
- **Feature definitions** are versioned in code (one source of truth)
- **Streaming features** (e.g. "transactions from this card in last 60 s") computed in Flink-like streaming jobs
- **Batch features** (e.g. "merchant chargeback rate last 90 days") computed nightly in Spark
- **Both writes** land in their feature store (predates SageMaker Feature Store; architecturally the same dual-mode online + offline)
- **Model training** reads the offline store with time-travel; **inference** reads the online store

**Key feature engineering tricks reported.**
- **Velocity features** — same card, same merchant, same IP within X seconds
- **Embedding features** — merchant and device embeddings learned via supervised loss
- **Network features** — graph features (shared device, shared IP)
- **Counterfactual features** — what would the average customer at this merchant spend?
- **Aggregations** at multiple time windows (1 min, 1 hour, 24 h, 7 days, 30 days)

**Outcome.** Radar block rate "improved by ~30%" with this feature engineering work alone (no model architecture change), per Stripe's 2023 reports.

**Lesson for the exam.** The vast majority of model lift came from **features**, not algorithms. MLS-C01 questions will paraphrase this: "**which is the BEST way to improve the model?**" — often the answer is feature engineering, not a fancier algorithm.

---

## ⚠️ Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "Always scale features" | Tree models don't need scaling. DL / distance-based / linear models do. |
| "Drop rows with any missing values" | Often loses 30-50% of the data. Impute or use missing-aware models. |
| "Always remove outliers" | Outliers can be the *signal* (fraud). Decide based on domain. |
| "One-hot encoding is fine for any categorical" | Explodes with high cardinality (zip codes, product IDs). Use hashing, target encoding, or embeddings. |
| "PCA preserves all information" | It preserves *variance*. Information important for prediction may be in low-variance directions. |
| "SMOTE on the whole dataset is fine" | NO — leakage. SMOTE only on training fold. |
| "Target encoding always helps" | Risks leakage if computed on the full dataset. Compute inside CV folds. |
| "Feature engineering is dead in the DL era" | DL helps less for tabular and time-series. Feature engineering still dominates Kaggle-style tabular wins. |

---

## 🚨 Top Exam Traps (Module 3 Themes)

1. **"99.9% of records are class A"** → class imbalance. Use class weighting / SMOTE on training only / PR-AUC metric.
2. **"Drop column with 70% missing"** vs **"impute with mean"** → ASK whether missingness is informative.
3. **"Convert zip code to a numerical feature for DNN"** → embedding, NOT one-hot or label-encoded.
4. **"Slow XGBoost on 5,000 features"** → PCA (linear) OR feature selection (importance-based).
5. **"Detect anomalies in tabular streaming data without labels"** → Random Cut Forest (built-in).
6. **"Pre-training bias detection by demographic group"** → Clarify pre-training bias report.
7. **"Reproducible, no-code data prep"** → Data Wrangler.
8. **"Same features for training and real-time inference"** → Feature Store online + offline.
9. **"Right-skewed numeric"** → log / Box-Cox / Yeo-Johnson transform.
10. **"Categorical with millions of values"** → hashing OR embedding (not one-hot).

---

## 🎓 Key Terms To Know

| Term | Definition |
|------|------------|
| **EDA** | Exploratory Data Analysis — pre-modelling inspection |
| **Imputation** | Filling in missing values |
| **MCAR / MAR / MNAR** | Missing completely at random / at random / not at random |
| **Outlier** | Observation far from the bulk of the distribution |
| **IQR** | Interquartile range = Q3 − Q1 |
| **Z-score** | (x − μ) / σ |
| **Isolation Forest** | Tree-based anomaly-detection algorithm |
| **One-hot encoding** | Categorical → binary indicator columns |
| **Target encoding** | Categorical → mean of target per category |
| **StandardScaler** | (x − μ) / σ |
| **MinMaxScaler** | (x − min) / (max − min) → [0,1] |
| **RobustScaler** | Median / IQR-based scaling |
| **PCA** | Principal Component Analysis — linear dim. reduction |
| **t-SNE / UMAP** | Non-linear visualisation tools |
| **Class imbalance** | Highly skewed class distribution |
| **SMOTE** | Synthetic Minority Over-sampling Technique |
| **Stratified split** | Train / val split preserving class proportions |
| **Data leakage** | Information from val / test sneaks into training |
| **Feature Store** | Centralised feature service (online + offline) |
| **Data Wrangler** | SageMaker visual data-prep tool |
| **Clarify pre-training bias** | Dataset-level bias detection |
| **QuickSight** | AWS BI / dashboard service |

---

## 💬 Discussion — Socratic Prompts (15 min)

1. **"Drop or impute?"** A health-insurance dataset has `last_doctor_visit_date` missing for 40% of customers. Why might missingness *itself* be the most predictive feature? How would you handle it?
2. **The over-feature-engineering trap.** Feature engineering yields diminishing returns. When does adding a 300th derived feature *hurt* (not help) a model? (Hint: think variance vs bias.)
3. **PCA's interpretability cost.** PCA produces orthogonal components with no semantic meaning. Regulators want explanations. Argue for and against PCA in a credit-scoring pipeline.
4. **The class-imbalance illusion.** SMOTE creates synthetic examples by interpolating in feature space. Is this *real* signal, or are we training on hallucinations? Defend or attack SMOTE in 200 words.
5. **Feature Store ROI.** A 30-person ML team is debating whether to set up SageMaker Feature Store (added ops cost) vs continuing to compute features inline per project. At what team size and reuse pattern does Feature Store start paying off?

---

## ➡️ Where This Leads

> **Where this leads.**
> - **Inside this course:** Module 04 picks algorithms; Module 08 evaluates them; Module 09 deploys the Feature Store you built here.
> - **Cross-course:** `07-AWS-AI-Practitioner` Module 02 covers SageMaker concepts; this module deepens the EDA side.
> - **Practice:** Practice Exam 1 has 5 questions, Practice Exam 2 has 4 questions, Final Mock has 8 questions on this material.
> - **Real world:** Run SageMaker Data Wrangler on the public Titanic / Boston Housing datasets in your AWS account; export a `.flow` file and a quick model.

---

## ✅ Module 3 Summary

You now know:
- 📈 The **5-step EDA workflow** and which tools to use at each step on AWS
- 🧹 The **4 strategies for missing values** plus when missingness is informative
- 🛑 The **outlier-detection methods** (IQR, Z-score, Isolation Forest, RCF) and when to remove vs keep
- 🔤 The **categorical encoding catalogue** (one-hot, ordinal, target, hashing, embeddings)
- 📐 The **numeric scaling catalogue** (StandardScaler, MinMax, Robust, log/Box-Cox)
- 📉 The **dimensionality-reduction toolbox** (PCA for linear, t-SNE / UMAP for viz, embeddings for learned)
- ⚖️ The **class-imbalance treatments** (weights, SMOTE, undersampling, threshold tuning)
- 🤖 **SageMaker Data Wrangler**, **Feature Store**, **QuickSight**, **Clarify pre-training bias**
- 📖 The **Stripe Radar feature-engineering pattern** that drove 30% lift through features alone

**Next steps:**
1. 🎥 Watch [`Videos.md`](./Videos.md)
2. ✏️ Take [`Quiz.md`](./Quiz.md)
3. 📋 Review [`Cheat-Sheet.md`](./Cheat-Sheet.md)
4. ➡️ Move on to [Module 4: SageMaker Studio & Algorithms](../Module-04-SageMaker-Studio-Algorithms/Reading.md)

---

## 📚 Further Sources

**AWS official**
- 📖 **SageMaker Data Wrangler docs** — `docs.aws.amazon.com/sagemaker/latest/dg/data-wrangler.html`
- 📖 **SageMaker Feature Store docs** — `docs.aws.amazon.com/sagemaker/latest/dg/feature-store.html`
- 📖 **SageMaker Clarify docs** (bias + explainability) — `docs.aws.amazon.com/sagemaker/latest/dg/clarify.html`

**Textbooks**
- 📖 **Géron, Aurélien (2022).** *Hands-On Machine Learning with Scikit-Learn, Keras & TensorFlow* (3rd ed.). O'Reilly — chapters 2 (end-to-end project), 3 (classification), 4 (training models). Single best companion text for this module.
- 📖 **Zheng & Casari (2018).** *Feature Engineering for Machine Learning.* O'Reilly — the canonical FE handbook.
- 📖 **Kuhn & Johnson (2019).** *Feature Engineering and Selection.* CRC Press — academic spine; FREE PDF online.

**Academic foundations**
- 📄 **Chawla et al. (2002).** *SMOTE: Synthetic Minority Over-sampling Technique.* JAIR — SMOTE origin.
- 📄 **van der Maaten & Hinton (2008).** *Visualizing Data using t-SNE.* JMLR — t-SNE origin.
- 📄 **McInnes, Healy, Melville (2018).** *UMAP: Uniform Manifold Approximation and Projection.* arXiv — UMAP origin.

**Industry**
- 📰 **Sebastian Raschka's blog** — feature-engineering essays
- 📰 **Kaggle "Grandmaster" interviews** — Hacker News-style transcripts of winning approaches; FE dominates
