# Module 1: AI/ML Fundamentals 🧠

> **Why this module matters:** The whole exam — including the Generative AI parts — sits on top of classical ML vocabulary. If you can't tell supervised from unsupervised, or training from inference, every question in Domains 2 and 3 becomes harder than it has to be. Get this module right and the rest is mostly naming AWS services.

---

## 🍕 A Story: The Coffee Shop That Learned To Predict Drinks

Meet **Riya**. Riya runs a tiny coffee shop in Bangalore. She wants to predict how many oat-milk cappuccinos to prep each morning so she doesn't run out — or waste milk.

**Attempt 1 — Rules (this is just programming, not AI):**
Riya writes a spreadsheet rule: *"If it's a weekday, prep 30. If it rains, prep 20."* It works… until a cricket match changes everything. Riya is constantly updating rules. The rules can't keep up.

**Attempt 2 — Machine Learning:**
Riya keeps **6 months of data**: date, weather, day-of-week, holidays, who was on shift, how many cappuccinos sold. She feeds this to a model and says *"learn the pattern."* The model now predicts tomorrow's number — including weird cases the rules missed.

That's **machine learning** in one sentence: **the program learns the rules from data, instead of you writing them.**

**Attempt 3 — Deep Learning:**
Now Riya wants to predict from **photos of the queue outside her shop**. Pixels are messy. A neural network with many layers (hence "deep") learns to look at images and output "expect 40 drinks." That's deep learning.

**Attempt 4 — Generative AI:**
Riya wants her POS system to **write friendly receipts in customer slang**. She uses a large language model to generate text. That's generative AI — and it's just deep learning, scaled up, trained on the entire internet.

Hold onto this story. Every model in the AWS catalog fits somewhere in it.

---

## 🪆 AI ⊃ ML ⊃ DL ⊃ GenAI — The Russian Doll

```
┌─────────────────────────────────────────────┐
│ AI: Any system that mimics intelligence     │
│                                             │
│   ┌─────────────────────────────────────┐   │
│   │ ML: Systems that learn from data    │   │
│   │                                     │   │
│   │   ┌──────────────────────────────┐  │   │
│   │   │ DL: ML using neural networks │  │   │
│   │   │                              │  │   │
│   │   │   ┌───────────────────────┐  │  │   │
│   │   │   │ Generative AI: DL     │  │  │   │
│   │   │   │ that creates content  │  │  │   │
│   │   │   └───────────────────────┘  │  │   │
│   │   └──────────────────────────────┘  │   │
│   └─────────────────────────────────────┘   │
└─────────────────────────────────────────────┘
```

| Layer | Definition | Example |
|-------|-----------|---------|
| **AI (Artificial Intelligence)** | Any technique that lets a machine behave intelligently — *includes* hand-written rules | A chess program from the 1990s, a thermostat schedule |
| **ML (Machine Learning)** | A subset of AI where the program **learns patterns from data** instead of being explicitly programmed | Spam filter trained on millions of emails |
| **DL (Deep Learning)** | A subset of ML using **multi-layer (deep) neural networks**; great at images, audio, text | Image recognition, speech-to-text |
| **Generative AI** | A subset of DL that **generates new content** (text, image, audio, video, code) from a learned distribution | ChatGPT, Claude, Stable Diffusion, Amazon Nova |

🔥 **MEMORIZE THIS hierarchy.** The exam will say "Generative AI is a subset of ___" and the answer is *deep learning*. It'll also ask "ML is a subset of ___" → *AI*.

---

## 🧪 The 3 Types of Machine Learning

This is the single most-tested chunk of Domain 1. Get it cold.

### 1. Supervised Learning — "Labeled examples"
You give the model **inputs paired with the correct answer (label)**. It learns the mapping.

- **Classification** = predict a *category*. (Is this email spam or not? Is this image a cat, dog, or rabbit?)
- **Regression** = predict a *number*. (What will the house sell for? How many cappuccinos tomorrow?)

**AWS service example:** Amazon SageMaker built-in algorithms like XGBoost (regression + classification), Linear Learner, Image Classification.

### 2. Unsupervised Learning — "No labels, find structure"
You give the model **just the inputs**. It finds patterns on its own.

- **Clustering** = group similar things. (Segment customers into 5 personas without telling the model what a persona is.)
- **Dimensionality reduction** = compress many features into fewer. (PCA, t-SNE, embeddings.)
- **Anomaly detection** = flag the weird ones. (Fraud detection, network intrusion.)

**AWS service example:** Amazon SageMaker Random Cut Forest (anomaly detection), K-Means (clustering), Amazon Lookout for Equipment (industrial anomaly detection).

### 3. Reinforcement Learning (RL) — "Trial, error, reward"
An **agent** takes actions in an **environment**, receives a **reward or penalty**, and learns the policy that maximizes long-term reward.

- Famous example: AlphaGo, robot locomotion, ad bidding, AWS DeepRacer (the toy car you train with RL).
- Variant on the exam: **RLHF — Reinforcement Learning from Human Feedback** — used to fine-tune LLMs (humans rank responses; the model learns to prefer the highly-ranked ones). This is how Claude, GPT, and most modern chat LLMs are aligned.

### Side-by-side

| Type | Inputs | Outputs | Goal | Real example |
|------|--------|---------|------|--------------|
| Supervised | Features + labels | A prediction | Learn input→label mapping | Email spam filter |
| Unsupervised | Features only | Groups / patterns / scores | Find structure | Customer segmentation |
| Reinforcement | State + reward signal | Action policy | Maximize cumulative reward | DeepRacer, game-playing agents |

🎯 **Trap on the exam:** "A team wants to group customers by behavior without predefined categories." → **Unsupervised / clustering**, *not* classification. The give-away word is *without predefined categories*.

🎯 **Trap on the exam:** "A robot learns to walk by trying and failing." → **Reinforcement learning.** If the question mentions *reward*, *agent*, or *trial-and-error*, it's RL.

---

## 🧰 Classical Algorithms You Should Recognize

You don't have to *implement* these. You just have to recognize the name and what kind of problem it solves.

| Algorithm | Type | What it does | When to use |
|-----------|------|--------------|-------------|
| **Linear Regression** | Supervised — regression | Predict a number from a straight-line relationship | Predict house price |
| **Logistic Regression** | Supervised — classification | Predict probability of a category (despite the name!) | Will this customer churn? |
| **Decision Tree / Random Forest** | Supervised — both | Tree of if/else splits | Credit scoring, churn prediction |
| **XGBoost** | Supervised — both | Boosted ensemble of trees; usually the strongest tabular algorithm | Default go-to on tabular data; SageMaker built-in |
| **K-Means** | Unsupervised — clustering | Group into K clusters by proximity | Customer segmentation |
| **K-Nearest Neighbors (KNN)** | Supervised — both | Classify by majority of K closest examples | Recommendation, simple classification |
| **Naive Bayes** | Supervised — classification | Probability based on feature independence | Text classification, spam |
| **Principal Component Analysis (PCA)** | Unsupervised — dimensionality reduction | Compress features into fewer dimensions | Pre-processing, visualization |
| **Neural network** | Supervised or unsupervised | Layered "neurons" that learn nonlinear patterns | Images, audio, language |

---

## 🏋️ How Training Actually Works (At Exam Depth)

You take a dataset and split it into **three sets**:

| Split | Typical % | Purpose |
|-------|-----------|---------|
| **Training set** | 70–80% | Model *learns* from this — it sees both inputs and labels |
| **Validation set** | 10–15% | Model is *tuned* on this — you adjust hyperparameters (learning rate, model size) based on how it performs here |
| **Test set** | 10–15% | Model is *finally evaluated* on this — the model never saw it before; this estimates real-world performance |

🚨 **The rule:** Never tune on the test set. Once you peek at the test set to make decisions, it stops being an honest estimate. That's "data leakage."

### Two big failure modes

| Failure | Symptom | Cause | Fix |
|---------|---------|-------|-----|
| **Overfitting** | Great training accuracy, poor validation/test accuracy | Model memorized the training data, including noise | More data, simpler model, regularization, dropout, early stopping |
| **Underfitting** | Poor accuracy on *both* training and test | Model is too simple (or trained too little) | Bigger model, more features, train longer |

### Bias vs Variance — the trade-off

- **High bias** (under-fitting) — model assumes too little; oversimplified.
- **High variance** (overfitting) — model assumes too much from the specific training data; doesn't generalize.

You want the sweet spot. This shows up on the exam as a phrase like *"the model performs 99% on training but only 60% on validation — what's the most likely cause?"* → **Overfitting.**

🎯 **Memory hook:** *Bias = consistent in the wrong place. Variance = scattered around the right place.*

---

## 🧮 ML Vocabulary You Will Be Tested On

Memorize the column on the left. These are the words the AIF-C01 expects you to know cold.

| Term | What it means |
|------|---------------|
| **Feature** | An input variable (a column). Age, weather, pixel value. |
| **Label / target** | The correct answer the model is trying to predict (supervised only). |
| **Sample / example** | One row of data (one customer, one image). |
| **Model** | The learned function that maps input → output. |
| **Parameter** | A value *learned during training* (the weights of the neural network). |
| **Hyperparameter** | A value *you set before training* (learning rate, batch size, number of layers, epochs). |
| **Epoch** | One full pass through the entire training dataset. |
| **Batch** | A subset of the dataset processed at once before updating weights. |
| **Learning rate** | How big a step the model takes when updating weights. Too high = unstable. Too low = slow. |
| **Loss function** | A number measuring how wrong the model is on a prediction. Training tries to minimize this. |
| **Gradient descent** | The optimization algorithm that nudges parameters in the direction that reduces loss. |
| **Inference** | Using a trained model to make a prediction on new data. (Also called "prediction" or "scoring.") |
| **Generalization** | How well the model performs on data it has never seen. |
| **Regularization** | Techniques (L1, L2, dropout) that prevent overfitting by penalizing complexity. |

---

## 📏 Evaluating a Model — Metrics That Show Up

| Problem type | Key metrics | What they mean |
|--------------|-------------|----------------|
| **Classification** | Accuracy, Precision, Recall, F1, AUC-ROC, Confusion Matrix | Accuracy = % right overall. Precision = of those I called positive, how many were? Recall = of all true positives, how many did I catch? F1 = harmonic mean of the two. |
| **Regression** | MAE, MSE, RMSE, R² | MAE = mean absolute error. RMSE = root mean square error (penalizes big mistakes). R² = how much variance the model explains. |
| **Clustering** | Silhouette score, inertia | Are the clusters tight and well-separated? |
| **LLMs / text generation** | BLEU, ROUGE, perplexity, human eval | We cover these in detail in **Module 6**. |

🎯 **Trap on the exam:** Fraud detection has 99% non-fraud and 1% fraud. A model that *always* predicts "not fraud" is 99% **accurate** but useless — it catches zero fraud (recall = 0). So **accuracy alone is misleading on imbalanced data.** The right metric is usually **recall** or **F1**.

---

## 🧱 Structured vs Unstructured vs Semi-Structured Data

| Data shape | Examples | Typical models |
|------------|----------|----------------|
| **Structured** | Rows in a database, CSVs, tabular sales data | XGBoost, linear/logistic regression, random forest |
| **Semi-structured** | JSON, XML, logs | Often parsed → structured, then tabular models; or NLP if free text |
| **Unstructured** | Images, audio, video, free-form text | Deep learning — CNNs for images, RNNs/Transformers for text/audio |

The exam likes to set up a scenario ("a hospital has 10 years of MRI scans and wants to detect tumors") and ask you which approach. *Images → deep learning, almost always.*

---

## 🌍 Where AI Shines vs Where It Hurts

| Great fit for AI | Poor fit for AI |
|------------------|-----------------|
| Lots of historical data is available | No data, or very little |
| Patterns are too complex to write rules for | Problem has clear, simple rules |
| Some errors are tolerable | Zero-error required (e.g. accounting math) |
| Decisions can be statistical / probabilistic | Decisions require deterministic, auditable logic |
| Recommendations, search, personalization, fraud, forecasting, vision, language | Compliance calculations, tax math, simple lookups |

🎯 **Trap on the exam:** "We want our payroll system to calculate net pay correctly." That is **not** an AI use case — it's deterministic math. Recognize that AI is the wrong tool for problems that demand exact, repeatable answers.

---

## 🚨 Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "More data always makes the model better" | Only true up to a point; *quality* matters more than quantity. Bad/biased data → bad model. |
| "Deep learning is always better than classical ML" | For **tabular** data, XGBoost / random forests usually beat deep learning. Deep learning wins on images, audio, language. |
| "ML models are objective because math" | Models inherit the biases in their training data. Garbage in, biased garbage out. |
| "If accuracy is 99% the model is great" | Not on imbalanced data. See the fraud example above. |
| "Training and inference are the same thing" | Training = expensive, batch, GPU-heavy. Inference = cheap (per call), low-latency, often CPU-only. |

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **AI** | Any system that mimics intelligent behavior |
| **ML** | AI where the program learns from data |
| **Deep Learning** | ML using multi-layer neural networks |
| **Generative AI** | DL that creates new content (text/image/audio/code) |
| **Supervised learning** | Learn from labeled examples |
| **Unsupervised learning** | Find structure in unlabeled data |
| **Reinforcement learning** | Agent learns via rewards in an environment |
| **Classification** | Predict a category |
| **Regression** | Predict a number |
| **Clustering** | Group similar items (unsupervised) |
| **Overfitting** | Memorizes training data, fails on new data |
| **Underfitting** | Too simple to capture the pattern |
| **Epoch** | One full pass through the training data |
| **Batch** | A chunk of data processed in one update |
| **Hyperparameter** | A value you set before training (e.g. learning rate) |
| **Parameter** | A value learned during training (e.g. weights) |
| **Inference** | Using a trained model to predict on new data |
| **Bias / Variance** | The trade-off between under- and over-fitting |
| **Feature** | An input variable / column |
| **Label** | The known correct answer (supervised only) |

---

## ✅ Module 1 Summary

You now know:
- 🪆 The AI ⊃ ML ⊃ DL ⊃ Generative AI hierarchy
- 🧪 The 3 ML paradigms (supervised, unsupervised, reinforcement) and what kind of problem each one solves
- 🧰 The classical algorithms (XGBoost, K-Means, etc.) by name
- 🏋️ How train/validation/test splits work and why test-set leakage is forbidden
- ⚖️ Overfitting vs underfitting, and bias vs variance
- 📏 Why accuracy is misleading on imbalanced data
- 🧮 Every key vocabulary word (epoch, batch, hyperparameter, inference, etc.)

**Next steps:**
1. 🎥 Watch the videos in [`Videos.md`](./Videos.md)
2. ✏️ Take [`Quiz.md`](./Quiz.md) — aim for 20/24
3. 📋 Review [`Cheat-Sheet.md`](./Cheat-Sheet.md)
4. ➡️ Move to [Module 2: ML Workflow on SageMaker](../Module-02-ML-Workflow-SageMaker/Reading.md)

---

## 📚 Further Reading (Optional)

- 📖 [AWS — What is Machine Learning?](https://aws.amazon.com/what-is/machine-learning/)
- 📖 [AWS — What is Artificial Intelligence?](https://aws.amazon.com/what-is/artificial-intelligence/)
- 📖 [Google — Machine Learning Crash Course](https://developers.google.com/machine-learning/crash-course) — free, excellent intro
- 📖 [3Blue1Brown — But what is a neural network?](https://www.youtube.com/results?search_query=3blue1brown+neural+network) (the visual classic)
- 📖 [AIF-C01 Official Exam Guide](https://d1.awsstatic.com/training-and-certification/docs-ai-practitioner/AWS-Certified-AI-Practitioner_Exam-Guide.pdf) — Domain 1 task statements
