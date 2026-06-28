# Module 4: SageMaker Studio & Built-In Algorithms 🧠

> **Why this module matters:** Domain 3 of the MLS-C01 exam is **Modeling 36%** of every question by far the biggest block. About half of that is *"given a problem, pick the right SageMaker algorithm and the right hyperparameters."* SageMaker has **17 built-in algorithms**, and you need to know which one solves which problem, what input format it needs, what the key hyperparameters do, and what the gotchas are. This module makes you fluent in the SageMaker model layer.

> **Prerequisites for this module.** Modules 1, 2, 3 of this course. Helpful background:
> - Comfort with scikit-learn-style `fit() / predict()` patterns
> - Some exposure to XGBoost, Random Forest, K-Means
> - Familiarity with Jupyter notebooks
> - If you have used SageMaker Studio for the AIF-C01 course or the AWS Free Tier "Hello SageMaker" tutorial, you are ahead

---

## 🍕 A Story: One IDE, One API (Application Programming Interface), Seventeen Algorithms

Meet Aditi. She is a data scientist at JPMorgan's COiN ("Contract Intelligence") team. In 2017 she built a model to triage commercial-loan documents that previously took 360,000 attorney-hours per year to review. The model used a custom Spark MLlib pipeline, custom feature extraction, and a self-hosted CPU cluster. The model worked beautifully, but every new project required reinventing the wheel.

In 2020 her team moved to **Amazon SageMaker**. Where Aditi used to write 800 lines of orchestration glue, she now writes 8. The same `estimator.fit()` API works for XGBoost, Linear Learner, Object2Vec, BlazingText, and the team's own PyTorch container. Training data comes from S3 (Simple Storage Service); the model artifact goes back to S3; an endpoint is one `model.deploy()` call. Hyperparameter tuning, distributed training, model monitoring, all become a checkbox.

In 2024 the team retrains 14 models nightly across three lines of business. The data scientists ship 5× more experiments per quarter. JPMorgan's per-model cost-to-build fell ~70%.

That is the promise of SageMaker. This module teaches you the **IDE (Studio)**, the **API (training jobs)**, the **17 built-ins**, and the **trade-offs that decide which algorithm you pick**.

---

## 🖥️ SageMaker Studio, The IDE

SageMaker Studio is a fully-managed, web-based ML IDE. It is the default place to do ML work on AWS in 2026.

### Components

| Component | What it does |
|-----------|--------------|
| **Studio domain** | Tenant-scoped environment (one per AWS account / VPC (Virtual Private Cloud)) |
| **User profile** | One per data scientist; tied to IAM (Identity and Access Management) execution role |
| **Spaces** | Per-user / shared workspace running JupyterLab, Code Editor (VS Code), RStudio |
| **Notebooks** | Managed Jupyter notebooks with auto-shutdown, kernel selection |
| **Code Editor** | VS Code in the browser |
| **Apps** | TensorBoard, JupyterLab, Code Editor, RStudio, Canvas, Data Wrangler |
| **Studio Classic** | The 2019-era Studio; new Studio (2023+) is the current default |
| **Pipelines view** | DAG visualisation of SageMaker Pipelines |
| **Experiments** | Tracking of training runs, metrics, parameters |
| **Model Registry** | Versioned models with approval workflow |
| **Jobs** | Training jobs, Processing jobs, Tuning jobs, Batch transforms |

### Notebook instances (legacy) vs Studio (current)

| Property | Notebook instance | Studio |
|----------|-------------------|--------|
| Launch time | Minutes | Seconds (in domain) |
| Shutdown | Manual or lifecycle script | Auto-shutdown |
| Cost | Pay per instance hour | Pay per kernel session |
| Persistent storage | EBS volume | EFS (shared across users) |
| Best for | Long-running EC2 (Elastic Compute Cloud)-style work | Modern data science |
| Recommended? | Legacy; new projects use Studio | ✅ Default |

🎯 **Exam pattern.** *"Reduce notebook costs from idle notebooks left running overnight."* → **Studio lifecycle config / auto-shutdown** OR **Studio idle-shutdown** OR a lifecycle script that stops notebook instances after N minutes idle.

### Instance types for notebooks / training

| Family | Description | Use |
|--------|-------------|-----|
| `ml.t3` | Burstable CPU; cheap | Quick notebooks, light EDA |
| `ml.m5 / ml.m6i` | General purpose CPU | Tabular training, light EDA |
| `ml.c5 / ml.c6i` | Compute optimised | XGBoost training |
| `ml.r5` | Memory optimised | Large in-memory pandas / Spark in notebook |
| `ml.p3 / ml.p4 / ml.p5` | NVIDIA GPU (V100 / A100 / H100) | DL training, large language models |
| `ml.g4 / ml.g5` | NVIDIA T4 / A10G | DL inference, smaller training |
| `ml.trn1 / ml.trn2` | AWS Trainium | Large model training (LLMs) |
| `ml.inf1 / ml.inf2` | AWS Inferentia | Cost-optimised inference |
| `ml.graviton (m7g, c7g)` | ARM-based | Cheaper notebooks for general work |

🎯 **Exam pattern.** *"Cost-optimise inference for a high-traffic NLP (Natural Language Processing) model."* → **Inferentia2 (inf2)** instances; ~50% cheaper than equivalent GPU instances.

---

## 🐍 The SageMaker Python SDK (Software Development Kit), The Five-Line Pattern

The exam will show you SDK code snippets. **Recognise this pattern.**

```python
import sagemaker
from sagemaker.xgboost import XGBoost
from sagemaker.inputs import TrainingInput

# 1. Session and role
sess = sagemaker.Session()
role = sagemaker.get_execution_role()

# 2. Configure the estimator
estimator = XGBoost(
    entry_point="train.py",
    framework_version="1.7-1",
    role=role,
    instance_count=1,
    instance_type="ml.m5.xlarge",
    output_path="s3://my-bucket/output/",
    hyperparameters={"max_depth": 5, "eta": 0.2, "num_round": 100}
)

# 3. Define data inputs
train_input = TrainingInput("s3://my-bucket/train.csv", content_type="text/csv")

# 4. Fit
estimator.fit({"train": train_input})

# 5. Deploy
predictor = estimator.deploy(initial_instance_count=1, instance_type="ml.m5.large")
```

🎯 **Memorise the structure.** Every SageMaker training job follows: **role → estimator → inputs → fit → deploy**.

### Container types

SageMaker supports four flavours of training image:

| Flavour | When |
|---------|------|
| **Built-in algorithm container** | One of the 17 built-ins (XGBoost, Linear Learner, etc.) |
| **Pre-built framework container** | TensorFlow, PyTorch, MXNet, Hugging Face, scikit-learn, XGBoost |
| **Bring-your-own (BYO) container** | Custom Docker image with your training code |
| **Marketplace container** | Third-party algorithm from AWS Marketplace |

🎯 **Exam pattern.** *"Use a custom PyTorch model architecture not in built-ins."* → SageMaker **PyTorch estimator with pre-built container** + your script (script mode), OR a **fully custom Docker container**.

---

## 🧠 The 17 SageMaker Built-In Algorithms (Memorize This Table)

These are the algorithms the exam expects you to recognise. We will deepen each one below.

| # | Algorithm | Task | Input format | One-line use |
|---|-----------|------|--------------|--------------|
| 1 | **XGBoost** | Classify / Regress / Ranking | CSV, Parquet, libsvm, RecordIO-protobuf | Tabular workhorse; gradient-boosted trees |
| 2 | **Linear Learner** | Classify / Regress | RecordIO-protobuf, CSV | Linear / logistic with built-in HPO; supports L1/L2 |
| 3 | **K-Means** | Clustering | RecordIO-protobuf, CSV | Unsupervised grouping |
| 4 | **K-Nearest Neighbors (k-NN)** | Classify / Regress | RecordIO-protobuf, CSV | Lazy learner; scales to billions of points |
| 5 | **Factorization Machines** | Classify / Regress (sparse) | RecordIO-protobuf | Recommendation / click-through; sparse features |
| 6 | **Random Cut Forest (RCF)** | Unsupervised anomaly detection | RecordIO-protobuf, CSV | Tabular / time-series anomalies |
| 7 | **Object2Vec** | Embedding | JSON Lines | Learn dense embeddings of any pair (user-item, doc-doc) |
| 8 | **IP Insights** | Anomaly detection | CSV | Detect unusual user-IP pairs (fraud / cyber) |
| 9 | **PCA** | Dim. reduction | RecordIO-protobuf, CSV | Linear projection to k components |
| 10 | **Neural Topic Model (NTM)** | Topic modelling | RecordIO-protobuf | Discover latent topics in document collection |
| 11 | **LDA (Latent Dirichlet Allocation)** | Topic modelling | RecordIO-protobuf | Classical topic model |
| 12 | **BlazingText** | Word embeddings + text classification | Text | Fast Word2Vec / FastText on GPU |
| 13 | **Sequence-to-Sequence (seq2seq)** | Machine translation, summarisation | RecordIO-protobuf | Encoder-decoder RNN/attention (legacy; Bedrock often better) |
| 14 | **Image Classification (built-in)** | Image classification | RecordIO, ImageNet format | Transfer-learning ResNet; supports >1000 classes |
| 15 | **Object Detection (built-in)** | Object detection | RecordIO, image+JSON | SSD-based; outputs bounding boxes |
| 16 | **Semantic Segmentation (built-in)** | Per-pixel classification | Image + mask pairs | FCN / PSP / DeepLab v3 |
| 17 | **DeepAR** | Time-series forecasting | JSON Lines | Probabilistic multi-series forecasting |

🎯 **Memory hook for the table:** **6 are tabular** (XGBoost, Linear Learner, K-Means, k-NN, Factorization Machines, RCF). **3 are NLP / embedding** (Object2Vec, NTM, LDA, BlazingText, seq2seq, well, 5 if we count seq2seq + Object2Vec; depends on how you slice). **3 are vision** (Image Classification, Object Detection, Semantic Segmentation). **1 is time-series** (DeepAR). **1 is anomaly** (IP Insights / RCF). **1 is dim. reduction** (PCA).

### Drilling in: the algorithms you MUST know cold

We'll cover XGBoost, Linear Learner, K-Means, RCF, BlazingText, DeepAR, and Image Classification deeply because they appear in almost every exam.

---

## 🌳 XGBoost, The Tabular Workhorse

**XGBoost** = eXtreme Gradient Boosting. Created by Tianqi Chen (2014). The single most-used algorithm on Kaggle for tabular problems. SageMaker offers XGBoost as both a built-in algorithm AND a framework container (`framework_version="1.7-1"` or similar).

### Key hyperparameters (you WILL see these)

| Hyperparameter | What it does | Typical range |
|----------------|--------------|---------------|
| `num_round` (= `n_estimators`) | Number of boosting rounds (trees) | 50 – 2000 |
| `max_depth` | Max tree depth | 3 – 10 (larger = more variance) |
| `eta` (= learning rate) | Shrinks each tree's contribution | 0.01 – 0.3 |
| `min_child_weight` | Min weighted samples per leaf | 1 – 10 |
| `subsample` | Row fraction per tree (stochastic) | 0.5 – 1.0 |
| `colsample_bytree` | Column fraction per tree | 0.5 – 1.0 |
| `alpha` | L1 regularisation | 0 – 10 |
| `lambda` | L2 regularisation | 1 – 10 |
| `objective` | `reg:squarederror`, `binary:logistic`, `multi:softprob`, `rank:pairwise`, ... | Depends on task |
| `eval_metric` | `rmse`, `mae`, `logloss`, `auc`, `error`, `merror`, `mlogloss` | Match objective |
| `early_stopping_rounds` | Stop when validation metric doesn't improve | 10 – 50 |
| `scale_pos_weight` | For binary classification with class imbalance | ratio_negatives / ratio_positives |

🎯 **Exam pattern.** *"XGBoost overfits."* → **Reduce `max_depth`, increase `lambda`/`alpha`, lower `eta` with more `num_round` + early stopping, lower `subsample`/`colsample_bytree`.**

🎯 **Exam pattern.** *"XGBoost underfits."* → **Increase `max_depth`, increase `num_round`, raise `eta` (with care), reduce regularisation.**

🎯 **Exam pattern.** *"XGBoost on highly imbalanced binary data."* → set `scale_pos_weight = N_neg / N_pos`, use `eval_metric=aucpr`.

### Input formats

XGBoost (built-in) accepts CSV, Parquet, libsvm, and RecordIO-protobuf. **Header conventions:**
- For CSV: **target = first column**, no header
- For libsvm: standard sparse format (`label idx1:val1 idx2:val2 ...`)
- For Parquet: explicit column mapping via hyperparameters

### XGBoost on SageMaker, script vs algorithm mode

| Mode | When |
|------|------|
| **Built-in algorithm** | Use the AWS-managed XGBoost container with no custom code; pass hyperparameters and data |
| **Framework / script mode** | Write a `train.py` with custom logic; use the SageMaker XGBoost container; flexible |
| **BYO container** | Fully custom; rare |

---

## 📈 Linear Learner, Multiple Linear/Logistic Models in Parallel

Built-in algorithm that fits multiple linear / logistic regression models in parallel and returns the best one (essentially built-in HPO inside the algorithm itself).

| Property | Detail |
|----------|--------|
| **Tasks** | Binary classification, multi-class classification, regression |
| **Loss** | Logistic (classification), squared (regression), absolute, hinge, etc. |
| **Key hyperparameter** | `predictor_type` = `binary_classifier` / `multiclass_classifier` / `regressor` |
| **Regularisation** | `l1` (Lasso) and `wd` (weight decay = L2) |
| **Sparse support** | Yes, RecordIO-protobuf is the recommended format |
| **Built-in calibration** | `binary_classifier_model_selection_criteria` chooses the best model by metric like `accuracy`, `f_beta`, `precision_at_target_recall` |

🎯 **Exam pattern.** *"Need a fast, interpretable linear model with built-in regularisation tuning."* → **Linear Learner**.

---

## 🟣 K-Means, Unsupervised Clustering

| Property | Detail |
|----------|--------|
| **Task** | Cluster points into `k` groups |
| **Key hyperparameter** | `k` (number of clusters), pick via elbow method or silhouette score |
| **Distance metric** | Euclidean (built-in only supports this, for cosine, use BYO) |
| **Initialisation** | `random` or `kmeans++` (default) |
| **Output** | Cluster assignments + cluster centroids |

🎯 **Exam pattern.** *"Segment customers into 5 buckets based on purchase patterns."* → **K-Means with k=5**.

🎯 **Pick `k`:**
- **Elbow method**, plot SSE vs k, pick the inflection
- **Silhouette score**, measure cluster cohesion/separation

---

## 🌲 Random Cut Forest, Unsupervised Anomaly

| Property | Detail |
|----------|--------|
| **Task** | Detect anomalies in tabular / time-series data |
| **Labels needed** | None, unsupervised |
| **Output** | Anomaly score per point (higher = more anomalous) |
| **Key hyperparameter** | `num_trees`, `num_samples_per_tree`, `feature_dim` |
| **Best for** | Streaming, low-feature anomalies (e.g. sensor data, network traffic) |

🎯 **Exam pattern.** *"Detect anomalies in a stream of credit-card transactions without labels."* → **Random Cut Forest** (or **IP Insights** if specifically user-IP pair).

---

## 🔮 IP Insights, User-IP Anomaly

| Property | Detail |
|----------|--------|
| **Task** | Detect unusual (user, IP) pairs |
| **Use case** | Account takeover, fraud, cybersecurity |
| **Input** | CSV of (user_id, IP) tuples |
| **Output** | Anomaly score; high = unusual pairing |

🎯 **Exam pattern.** *"Flag suspicious logins where a user signs in from an IP unlike their historical pattern."* → **IP Insights**.

---

## 🤝 Factorization Machines, Sparse Recommendation

| Property | Detail |
|----------|--------|
| **Task** | Classification or regression on **sparse high-dimensional** input |
| **Use case** | Click-through-rate, ad recommendation, sparse rating matrices |
| **Input** | RecordIO-protobuf (sparse) |
| **Key hyperparameter** | `num_factors` (dimension of latent factors), `predictor_type` |

🎯 **Exam pattern.** *"Predict click-through-rate on ads with millions of sparse one-hot features."* → **Factorization Machines** (or Personalize if managed-service answer).

---

## 🧭 K-Nearest Neighbors, Lazy Learner

| Property | Detail |
|----------|--------|
| **Task** | Classification or regression |
| **Idea** | Predict label as majority vote (cls) / mean (reg) of K nearest neighbors in feature space |
| **Key hyperparameter** | `k` (neighbours), `predictor_type`, `sample_size`, `dimension_reduction_target` (built-in PCA) |
| **Best for** | High-quality embeddings or low-dim feature spaces |

🎯 **Exam pattern.** *"Visualise embeddings via k-NN with built-in dimension reduction."* → SageMaker **k-NN with dimension_reduction_target**.

---

## 📊 PCA, Dimensionality Reduction (Built-In)

Same PCA as Module 3 but accessible as a SageMaker training job. Key hyperparameter: `num_components`.

---

## 💬 BlazingText, Word Embeddings + Text Classification

| Property | Detail |
|----------|--------|
| **Task** | (a) Word2Vec (skip-gram, CBOW) word embeddings, (b) text classification (FastText-style) |
| **Key strength** | Trains *fast* on GPU; the "BLAZING" is real |
| **Input** | One sentence per line, words space-separated |
| **Output** | Word vectors (txt) for Word2Vec mode; classifier model for classification mode |
| **Modes** | `Word2Vec` (unsupervised) or `Text Classification` (supervised) |
| **Use case** | Embed words for downstream models; text categorisation |

🎯 **Exam pattern.** *"Train Word2Vec embeddings on 1 TB of news articles."* → **BlazingText Word2Vec mode on multi-GPU**.

🎯 **Exam pattern.** *"Classify customer-support tickets into one of 12 categories."* → **BlazingText text-classification mode** (or Comprehend Custom Classifier as a managed alternative).

---

## 🔗 Object2Vec, General Embedding

| Property | Detail |
|----------|--------|
| **Task** | Learn dense embeddings of any pair (user-item, doc-doc, sentence-sentence) |
| **Architecture** | Twin neural nets (Siamese) with shared loss |
| **Use case** | Recommendation, document similarity, sentence similarity |
| **Input** | JSON Lines of (label, pair) |

🎯 **Exam pattern.** *"Learn user-item embeddings for a recommender."* → **Object2Vec** (or Personalize for managed).

---

## 📚 Neural Topic Model (NTM) and LDA, Topic Modelling

Both find latent topics in document collections.

| Algorithm | Engine | Use |
|-----------|--------|-----|
| **NTM** | Neural network (variational autoencoder) | Modern; faster on GPU |
| **LDA** | Classical Bayesian probabilistic model | Older but interpretable |

Hyperparameter for both: `num_topics`.

🎯 **Exam pattern.** *"Discover 20 latent topics in a corpus of 10M product reviews."* → **NTM** (GPU-fast) or **LDA** (classical).

---

## 🌐 Sequence-to-Sequence, Encoder-Decoder

Older AWS algorithm. For new seq2seq work (translation, summarisation), **Bedrock or Hugging Face containers** are usually preferred. Still tested.

| Property | Detail |
|----------|--------|
| **Task** | Translation, summarisation, Q&A |
| **Architecture** | RNN encoder + RNN decoder + attention |
| **Input** | RecordIO-protobuf or text |

---

## 🖼️ Image Classification (Built-In)

| Property | Detail |
|----------|--------|
| **Architecture** | ResNet via Apache MXNet (older built-in) or PyTorch (newer "Image Classification - TensorFlow / PyTorch") |
| **Modes** | **Train from scratch** OR **transfer learning** (pre-trained ImageNet weights) |
| **Input** | RecordIO or directly from S3 with manifest (.lst file) |
| **Key hyperparameter** | `num_classes`, `num_training_samples`, `use_pretrained_model`, `epochs`, `learning_rate`, `image_shape` |

🎯 **Exam pattern.** *"Classify 50,000 product images into 200 categories."* → **Image Classification with transfer learning from ImageNet** (`use_pretrained_model=1`).

🎯 **Augmentation hyperparameters**, built-in supports `augmentation_type=crop,color,crop_color,crop_color_transform` to combat overfitting on small image sets.

---

## 📦 Object Detection (Built-In)

| Property | Detail |
|----------|--------|
| **Architecture** | SSD (Single-Shot Multibox Detector) with VGG / ResNet backbone |
| **Output** | Bounding boxes + class labels + confidence per box |
| **Input** | Image + JSON label files |
| **Use case** | Find multiple objects in an image |

🎯 **Exam pattern.** *"Detect cars, pedestrians, and bicycles in dash-cam footage."* → **Object Detection** (or **Rekognition Custom Labels** for the managed alternative).

---

## 🎨 Semantic Segmentation (Built-In)

| Property | Detail |
|----------|--------|
| **Architecture** | FCN, PSP, DeepLab v3 (selectable) |
| **Output** | Per-pixel class label |
| **Input** | Image + per-pixel mask (PNG) |
| **Use case** | Self-driving (road / sidewalk / car pixels), medical imaging (tumor pixels) |

---

## ⏰ DeepAR, Probabilistic Time-Series Forecasting

| Property | Detail |
|----------|--------|
| **Task** | Forecast future values for many related time series |
| **Strength** | **Multi-series**, learns one model across many series (cold start for new series works!) |
| **Architecture** | RNN (LSTM) with quantile loss |
| **Output** | Quantile forecasts (p10, p50, p90), probabilistic |
| **Key hyperparameter** | `context_length` (input window), `prediction_length` (forecast horizon), `num_layers`, `num_cells` |
| **Input** | JSON Lines: `{"start": "...", "target": [...]}` per series |
| **Use case** | Forecast demand across thousands of SKUs |

🎯 **Exam pattern.** *"Forecast next 30 days of demand for 5,000 SKUs at a retailer."* → **DeepAR** (built-in) OR **Amazon Forecast** (managed).

🚨 **Trap.** A single ARIMA model per SKU (Stock Keeping Unit) does not benefit from cross-series patterns. DeepAR's whole point is sharing parameters across series.

---

## 🤖 SageMaker AutoML, Autopilot & Canvas

When you don't want to pick an algorithm at all:

| Tool | What it does |
|------|--------------|
| **SageMaker Autopilot** | Reads tabular CSV / Parquet, runs AutoML across multiple algorithms + HPO, surfaces best model and full code (white-box AutoML) |
| **SageMaker Canvas** | No-code ML for business analysts; tabular forecasting / classification / regression via a UI (User Interface) |
| **SageMaker JumpStart** | Pre-built solutions and foundation models (covered in Module 7) |

🎯 **Exam pattern.** *"Business analyst with no Python wants to build a churn-prediction model."* → **SageMaker Canvas**.

🎯 **Exam pattern.** *"Data scientist wants AutoML on tabular data with full code generated."* → **SageMaker Autopilot**.

---

## 🐳 Bring-Your-Own (BYO), Custom Containers

When none of the 17 built-ins fits, write your own training image.

### Script mode (lighter weight)

Use a pre-built framework container (PyTorch, TF, MXNet, HF, scikit, XGBoost) and just supply a `train.py` script. The SDK handles container building.

### Full BYO container

Build a Docker image with:

- `train` executable at root
- `serve` executable for inference
- conform to SageMaker's directory layout: `/opt/ml/input/data/<channel>/`, `/opt/ml/model`, `/opt/ml/output`

Push to Amazon ECR; reference in `Estimator(image_uri=...)`.

🎯 **Exam pattern.** *"Train using a custom proprietary deep-learning framework."* → **BYO container in ECR**.

---

## 🎛️ Training Job Anatomy

A SageMaker training job involves these moving parts:

```
┌─────────────────────────────────────────────────────────────┐
│ 1. Training data on S3                                      │
│    (CSV / Parquet / RecordIO / image manifest / JSONL)      │
└────────────────────┬────────────────────────────────────────┘
                     ↓
┌─────────────────────────────────────────────────────────────┐
│ 2. SageMaker spins up training instance(s)                  │
│    Pulls container from ECR                                 │
│    Mounts /opt/ml/input/data/<channel>/                     │
└────────────────────┬────────────────────────────────────────┘
                     ↓
┌─────────────────────────────────────────────────────────────┐
│ 3. Train mode for data delivery                             │
│    File mode (full copy to disk)                            │
│    Pipe mode (stream via FIFO (First In, First Out); RecordIO-protobuf)           │
│    FastFile mode (S3 streaming via mount)                   │
└────────────────────┬────────────────────────────────────────┘
                     ↓
┌─────────────────────────────────────────────────────────────┐
│ 4. Training runs                                            │
│    Hyperparameters from JSON in /opt/ml/input/config        │
│    Writes model to /opt/ml/model                            │
└────────────────────┬────────────────────────────────────────┘
                     ↓
┌─────────────────────────────────────────────────────────────┐
│ 5. SageMaker tar's /opt/ml/model → model.tar.gz to S3       │
│    Logs to CloudWatch                                       │
│    Metrics to SageMaker Experiments                         │
└─────────────────────────────────────────────────────────────┘
```

### File mode vs Pipe mode vs FastFile mode

| Mode | How | When |
|------|-----|------|
| **File mode** (default) | Full dataset copied to local EBS before training starts | Small data (<100 GB) |
| **Pipe mode** | Streams data via FIFO using RecordIO-protobuf | Huge datasets; faster start; less local disk |
| **FastFile mode** | S3 streaming via SageMaker mount | Medium data, random access, less waiting than file mode |

🎯 **Exam pattern.** *"Reduce training start time on a 5 TB dataset."* → **Pipe mode** (or FastFile) so training starts immediately instead of waiting for full copy.

---

## 🧪 Local Mode for Faster Iteration

```python
estimator.fit({"train": train_input}, local_mode=True)
```

Runs the same training script on a local Docker daemon, no spin-up time, no AWS bill until you flip the switch. Standard development pattern.

---

## 💰 Cost Levers for Training

| Lever | Effect |
|-------|--------|
| **Spot training** (`use_spot_instances=True`, `max_wait`) | Up to **90% off** with checkpointing |
| **Right-sized instance** | Don't use `ml.p3.16xlarge` if `ml.g5.xlarge` is enough |
| **Distributed training** (Module 5) | Faster wall clock, sometimes cheaper despite more nodes |
| **Pipe / FastFile mode** | Less idle waiting |
| **Early stopping** | Stop unproductive trials |
| **Checkpointing to S3** | Resume Spot interruptions |

🎯 **Exam pattern.** *"Cost-optimise long XGBoost training jobs that can tolerate interruptions."* → **`use_spot_instances=True` with checkpointing**.

---

## 📖 Case Study, Netflix's Recommendation Stack at Algorithmic Layer

**Problem.** Recommend the next video to ~250M subscribers in real time, personalised per user across 700+ models (different ranking models for thumbnails, autoplay, search, kids profiles, etc.).

**Algorithms in use (public, 2022-2024 talks).**
- **Matrix Factorisation** (classic collaborative filtering): user × item embeddings via implicit ALS, historically Spark MLlib on EMR; equivalent on SageMaker = **Factorization Machines**
- **Neural Collaborative Filtering**: deep two-tower model with user side + item side embeddings; equivalent = **Object2Vec**
- **Sequence models**: transformer ranking on viewing history; equivalent = custom PyTorch on SageMaker
- **Tree ensembles**: XGBoost on tabular session features for re-ranking
- **Bandit / contextual bandit**: explore-exploit at serving time

**Lesson for the exam.** Netflix uses both classical (XGBoost, FM, ALS) AND deep (transformer, two-tower) models depending on the sub-problem. MLS-C01 questions often resolve to "**which built-in algorithm matches this scenario?**", the right answer almost always exists in SageMaker's catalogue.

---

## ⚠️ Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "XGBoost is always the best for tabular" | Usually a good baseline. Sometimes Linear Learner / Factorization Machines wins on sparse data. |
| "Deep learning beats tree models" | Not for tabular. Often the opposite. |
| "Built-ins are slower than custom code" | Built-ins are heavily optimised C++ / CUDA; usually faster than naive Python. |
| "K-Means works for any clustering" | Assumes spherical clusters and Euclidean distance. For other shapes use DBSCAN or hierarchical. |
| "DeepAR is just LSTM" | It learns from MANY series jointly, that's the special sauce. |
| "Random Cut Forest needs labels" | No, fully unsupervised. |
| "BlazingText is only for embeddings" | It has a classification mode too. |
| "Canvas can replace SageMaker" | Canvas is no-code AutoML for tabular; not a full replacement. |

---

## 🚨 Top Exam Traps (Module 4 Themes)

1. **"Tabular workhorse"** → XGBoost first; Linear Learner if simpler/interpretable; Factorization Machines if sparse.
2. **"Many sparse one-hot features for CTR (Click-Through Rate)"** → Factorization Machines.
3. **"Unsupervised tabular anomaly detection"** → Random Cut Forest.
4. **"User-IP pair anomaly"** → IP Insights.
5. **"Probabilistic forecast across many SKUs"** → DeepAR (or Amazon Forecast for managed).
6. **"Image classification with transfer learning"** → Built-in Image Classification with `use_pretrained_model=1`.
7. **"Word embeddings on 1 TB"** → BlazingText.
8. **"No-code ML for business analyst"** → SageMaker Canvas.
9. **"AutoML with full generated code"** → SageMaker Autopilot.
10. **"Reduce training start time on huge dataset"** → Pipe mode / FastFile.
11. **"Cost-optimise long training with restart support"** → Spot training + checkpointing.
12. **"Custom algorithm not in built-ins"** → script mode (preferred) OR BYO container.

---

## 🎓 Key Terms To Know

| Term | Definition |
|------|------------|
| **SageMaker Studio** | Web-based ML IDE |
| **SageMaker Domain** | Tenant-scoped Studio environment |
| **User profile** | Per-user identity in a Studio domain |
| **Training job** | Managed run of a training container |
| **Estimator** | SDK class that configures a training job |
| **Built-in algorithm** | One of the 17 AWS-managed algorithm containers |
| **Script mode** | Custom script in a pre-built framework container |
| **BYO container** | Fully custom Docker image |
| **Pipe mode** | Streaming data delivery via FIFO |
| **FastFile mode** | S3 streaming mount |
| **Spot training** | Train on Spot instances (up to 90% off) with checkpointing |
| **Local mode** | Run training locally via Docker for iteration |
| **Autopilot** | AWS AutoML for tabular data |
| **Canvas** | No-code ML for analysts |
| **JumpStart** | Pre-built solutions + foundation models |
| **Model artifact** | `model.tar.gz` written to S3 |
| **Inference instance type** | `ml.m / c / r / p / g / inf / trn` family |

---

## 💬 Discussion, Socratic Prompts

1. **"XGBoost or DL?"** On tabular data, XGBoost typically wins. Argue when a DL model BECOMES competitive on tabular (hint: very large rows, high-cardinality categoricals, or learned embeddings).
2. **The built-in vs script-mode trade-off.** Built-ins are turnkey; script mode is flexible. At what team size does flexibility win? At what size does turnkey win?
3. **DeepAR vs ARIMA vs Forecast (managed).** All three solve forecasting. Pick a SaaS (Software as a Service) retailer with 5,000 SKUs and argue which to choose; what changes the answer if the team has 1 ML engineer vs 50?
4. **The "everything is a transformer" critique.** As of 2026, transformer-based foundation models can sometimes outperform XGBoost on small tabular tasks via in-context learning (TabPFN, etc.). Is this real, or a benchmark artefact?
5. **AutoML's compounding cost.** Autopilot trains *many* candidate models. At what dataset size does AutoML become wasteful versus a single well-chosen baseline?

---

## ➡️ Where This Leads

> **Where this leads.**
> - **Inside this course:** Module 05 covers deep learning (the algorithms not in the built-in set); Module 06 covers when to use managed AI services *instead*; Module 08 evaluates everything trained here.
> - **Cross-course:** `07-AWS-AI-Practitioner` Module 04 introduces SageMaker at a lighter depth.
> - **Practice:** Practice Exam 1 has 7 questions, Practice Exam 2 has 5 questions, Final Mock has 12 questions on this material.
> - **Real world:** Run the `sagemaker-examples` GitHub repo's *Census XGBoost* tutorial in your own account; ~$2 in compute.

---

## ✅ Module 4 Summary

You now know:

- 🖥️ **Studio** architecture (domains, profiles, spaces, apps) and when to use it vs Notebook instances
- 🐍 The **SageMaker Python SDK 5-step pattern** (role → estimator → inputs → fit → deploy)
- 🧠 The **17 built-in algorithms** and which task each solves
- 🌳 **XGBoost** hyperparameters cold (max_depth, eta, num_round, alpha, lambda, subsample, scale_pos_weight)
- 📈 **Linear Learner** for fast linear/logistic with built-in HPO
- 🟣 **K-Means** for clustering, including how to pick `k`
- 🌲 **Random Cut Forest** and **IP Insights** for unsupervised anomaly detection
- 🤝 **Factorization Machines** for sparse recommendation/CTR
- 💬 **BlazingText**, **Object2Vec**, **NTM/LDA** for text & embeddings
- 🖼️ **Image Classification / Object Detection / Semantic Segmentation** for vision
- ⏰ **DeepAR** for multi-series probabilistic forecasting
- 🤖 **Autopilot** / **Canvas** / **JumpStart** for no-code and AutoML
- 🐳 **Script mode** and **BYO container** for custom work
- 💰 **Spot + checkpointing** for cost-optimised training; **Pipe/FastFile mode** for fast start

**Next steps:**
1. 🎥 Watch [`Videos.md`](./Videos.md)
2. ✏️ Take [`Quiz.md`](./Quiz.md)
3. 📋 Review [`Cheat-Sheet.md`](./Cheat-Sheet.md)
4. ➡️ Move on to [Module 5: Deep Learning on AWS](../Module-05-Deep-Learning-AWS/Reading.md)

---

## 📚 Further Sources

**AWS official**
- 📖 **SageMaker Developer Guide Built-in algorithms** `docs.aws.amazon.com/sagemaker/latest/dg/algos.html`
- 📖 **SageMaker Python SDK docs**, `sagemaker.readthedocs.io`
- 📖 **AWS ML Blog**, `aws.amazon.com/blogs/machine-learning/`

**Textbooks**
- 📖 **Géron, Aurélien (2022).** *Hands-On Machine Learning…* (3rd ed.). O'Reilly, chapters 6-7 (decision trees, ensembles)
- 📖 **Burkov (2019).** *The Hundred-Page ML Book.*, chapters 3-4

**Academic foundations**
- 📄 **Chen & Guestrin (2016).** *XGBoost: A Scalable Tree Boosting System.* KDD, the XGBoost paper
- 📄 **Liu, Ting & Zhou (2008).** *Isolation Forest.* ICDM, Isolation Forest foundation
- 📄 **Salinas et al. (2020).** *DeepAR: Probabilistic forecasting with autoregressive recurrent networks.* International Journal of Forecasting, the DeepAR paper

**Industry**
- 📰 **Netflix Tech Blog**, recommendation system posts
- 📰 **Kaggle solutions write-ups**, XGBoost mastery in the wild
