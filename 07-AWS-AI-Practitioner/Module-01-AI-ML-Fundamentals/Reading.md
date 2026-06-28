# Module 1: AI/ML Fundamentals 🧠

> **Why this module matters:** The whole exam including the Generative AI parts sits on top of classical ML vocabulary. If you can't tell supervised from unsupervised, or training from inference, every question in Domains 2 and 3 becomes harder than it has to be. Get this module right and the rest is mostly naming AWS services.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - Basic computing literacy: files, APIs, what a "model" is in software terms
> - Light statistics intuition: average, distribution, the idea that more data ≠ better data
> - Comfort reading a 4×4 markdown table without panicking
>
> If you've completed [`03-AWS-Cloud-Practitioner`](../../03-AWS-Cloud-Practitioner/README.md) (CLF-C02) or any introductory ML MOOC (Andrew Ng's Coursera *Machine Learning Specialization*, Google's *ML Crash Course*, Karpathy's *Neural Networks: Zero to Hero*) you can skim this module. Everyone else: read all of it. Domain 1 is 20% of AIF-C01 and *every* later module assumes the vocabulary lands here.

---

## 🍕 A Story: The Coffee Shop That Learned To Predict Drinks

Meet **Riya**. Riya runs a tiny coffee shop in Bangalore. She wants to predict how many oat-milk cappuccinos to prep each morning so she doesn't run out, or waste milk.

**Attempt 1, Rules (this is just programming, not AI):**
Riya writes a spreadsheet rule: *"If it's a weekday, prep 30. If it rains, prep 20."* It works… until a cricket match changes everything. Riya is constantly updating rules. The rules can't keep up.

**Attempt 2, Machine Learning:**
Riya keeps **6 months of data**: date, weather, day-of-week, holidays, who was on shift, how many cappuccinos sold. She feeds this to a model and says *"learn the pattern."* The model now predicts tomorrow's number, including weird cases the rules missed.

That's **machine learning** in one sentence: **the program learns the rules from data, instead of you writing them.**

**Attempt 3, Deep Learning:**
Now Riya wants to predict from **photos of the queue outside her shop**. Pixels are messy. A neural network with many layers (hence "deep") learns to look at images and output "expect 40 drinks." That's deep learning.

**Attempt 4, Generative AI:**
Riya wants her POS system to **write friendly receipts in customer slang**. She uses a large language model to generate text. That's generative AI, and it's just deep learning, scaled up, trained on the entire internet.

Hold onto this story. Every model in the AWS catalog fits somewhere in it.

---

## 🪆 AI ⊃ ML ⊃ DL ⊃ GenAI, The Russian Doll

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
| **AI (Artificial Intelligence)** | Any technique that lets a machine behave intelligently, *includes* hand-written rules | A chess program from the 1990s, a thermostat schedule |
| **ML (Machine Learning)** | A subset of AI where the program **learns patterns from data** instead of being explicitly programmed | Spam filter trained on millions of emails |
| **DL (Deep Learning)** | A subset of ML using **multi-layer (deep) neural networks**; great at images, audio, text | Image recognition, speech-to-text |
| **Generative AI** | A subset of DL that **generates new content** (text, image, audio, video, code) from a learned distribution | ChatGPT, Claude, Stable Diffusion, Amazon Nova |

🔥 **MEMORIZE THIS hierarchy.** The exam will say "Generative AI is a subset of ___" and the answer is *deep learning*. It'll also ask "ML is a subset of ___" → *AI*.

---

## 🧪 The 3 Types of Machine Learning

This is the single most-tested chunk of Domain 1. Get it cold.

### 1. Supervised Learning, "Labeled examples"
You give the model **inputs paired with the correct answer (label)**. It learns the mapping.

- **Classification** = predict a *category*. (Is this email spam or not? Is this image a cat, dog, or rabbit?)
- **Regression** = predict a *number*. (What will the house sell for? How many cappuccinos tomorrow?)

**AWS service example:** Amazon SageMaker built-in algorithms like XGBoost (regression + classification), Linear Learner, Image Classification.

### 2. Unsupervised Learning, "No labels, find structure"
You give the model **just the inputs**. It finds patterns on its own.

- **Clustering** = group similar things. (Segment customers into 5 personas without telling the model what a persona is.)
- **Dimensionality reduction** = compress many features into fewer. (PCA, t-SNE, embeddings.)
- **Anomaly detection** = flag the weird ones. (Fraud detection, network intrusion.)

**AWS service example:** Amazon SageMaker Random Cut Forest (anomaly detection), K-Means (clustering), Amazon Lookout for Equipment (industrial anomaly detection).

### 3. Reinforcement Learning (RL), "Trial, error, reward"
An **agent** takes actions in an **environment**, receives a **reward or penalty**, and learns the policy that maximizes long-term reward. Foundational formalism: Sutton & Barto, *Reinforcement Learning: An Introduction* (2nd ed., MIT Press, 2018, free online).

- Famous example: AlphaGo (Silver et al., *Nature*, 2016), robot locomotion, ad bidding, AWS DeepRacer (the toy car you train with RL).
- Variant on the exam: **RLHF (Reinforcement Learning from Human Feedback) Reinforcement Learning from Human Feedback** (Christiano et al., NeurIPS 2017; popularized for LLMs by Ouyang et al., "Training language models to follow instructions with human feedback," NeurIPS 2022 the *InstructGPT* paper). Used to fine-tune LLMs: humans rank responses, the model learns to prefer the higher-ranked ones. This is how Claude, GPT (Generative Pre-trained Transformer), and most modern chat LLMs are aligned. Anthropic's variant, **Constitutional AI / RLAIF** (Bai et al., 2022), substitutes a written constitution + an AI grader for some of the human labeling.

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
| **Linear Regression** | Supervised, regression | Predict a number from a straight-line relationship | Predict house price |
| **Logistic Regression** | Supervised, classification | Predict probability of a category (despite the name!) | Will this customer churn? |
| **Decision Tree / Random Forest** | Supervised, both | Tree of if/else splits | Credit scoring, churn prediction |
| **XGBoost** | Supervised, both | Boosted ensemble of trees; usually the strongest tabular algorithm | Default go-to on tabular data; SageMaker built-in |
| **K-Means** | Unsupervised, clustering | Group into K clusters by proximity | Customer segmentation |
| **K-Nearest Neighbors (KNN)** | Supervised, both | Classify by majority of K closest examples | Recommendation, simple classification |
| **Naive Bayes** | Supervised, classification | Probability based on feature independence | Text classification, spam |
| **Principal Component Analysis (PCA)** | Unsupervised, dimensionality reduction | Compress features into fewer dimensions | Pre-processing, visualization |
| **Neural network** | Supervised or unsupervised | Layered "neurons" that learn nonlinear patterns | Images, audio, language |

---

## 🏋️ How Training Actually Works (At Exam Depth)

You take a dataset and split it into **three sets**:

| Split | Typical % | Purpose |
|-------|-----------|---------|
| **Training set** | 70–80% | Model *learns* from this, it sees both inputs and labels |
| **Validation set** | 10–15% | Model is *tuned* on this, you adjust hyperparameters (learning rate, model size) based on how it performs here |
| **Test set** | 10–15% | Model is *finally evaluated* on this, the model never saw it before; this estimates real-world performance |

🚨 **The rule:** Never tune on the test set. Once you peek at the test set to make decisions, it stops being an honest estimate. That's "data leakage."

### Two big failure modes

| Failure | Symptom | Cause | Fix |
|---------|---------|-------|-----|
| **Overfitting** | Great training accuracy, poor validation/test accuracy | Model memorized the training data, including noise | More data, simpler model, regularization, dropout, early stopping |
| **Underfitting** | Poor accuracy on *both* training and test | Model is too simple (or trained too little) | Bigger model, more features, train longer |

### Bias vs Variance, the trade-off

- **High bias** (under-fitting), model assumes too little; oversimplified.
- **High variance** (overfitting), model assumes too much from the specific training data; doesn't generalize.

You want the sweet spot. This shows up on the exam as a phrase like *"the model performs 99% on training but only 60% on validation, what's the most likely cause?"* → **Overfitting.**

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

## 📏 Evaluating a Model, Metrics That Show Up

| Problem type | Key metrics | What they mean |
|--------------|-------------|----------------|
| **Classification** | Accuracy, Precision, Recall, F1, AUC-ROC, Confusion Matrix | Accuracy = % right overall. Precision = of those I called positive, how many were? Recall = of all true positives, how many did I catch? F1 = harmonic mean of the two. |
| **Regression** | MAE, MSE, RMSE, R² | MAE = mean absolute error. RMSE = root mean square error (penalizes big mistakes). R² = how much variance the model explains. |
| **Clustering** | Silhouette score, inertia | Are the clusters tight and well-separated? |
| **LLMs / text generation** | BLEU, ROUGE, perplexity, human eval | We cover these in detail in **Module 6**. |

🎯 **Trap on the exam:** Fraud detection has 99% non-fraud and 1% fraud. A model that *always* predicts "not fraud" is 99% **accurate** but useless, it catches zero fraud (recall = 0). So **accuracy alone is misleading on imbalanced data.** The right metric is usually **recall** or **F1**.

---

## 🧱 Structured vs Unstructured vs Semi-Structured Data

| Data shape | Examples | Typical models |
|------------|----------|----------------|
| **Structured** | Rows in a database, CSVs, tabular sales data | XGBoost, linear/logistic regression, random forest |
| **Semi-structured** | JSON, XML, logs | Often parsed → structured, then tabular models; or NLP (Natural Language Processing) if free text |
| **Unstructured** | Images, audio, video, free-form text | Deep learning, CNNs for images, RNNs/Transformers for text/audio |

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

🎯 **Trap on the exam:** "We want our payroll system to calculate net pay correctly." That is **not** an AI use case, it's deterministic math. Recognize that AI is the wrong tool for problems that demand exact, repeatable answers.

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

## 📊 Case Study, Google DeepMind AlphaFold (2020–2024)

**Situation.** Protein structure prediction had been an open problem in biology for 50 years. Given an amino-acid sequence, predicting the 3D folded shape (which determines what the protein *does*) had defeated chemists, statisticians, and earlier ML approaches. Every two years, the CASP (Critical Assessment of Structure Prediction) competition measured progress; through 2018 the best methods plateaued at roughly the same accuracy. Drug discovery, vaccine design, and rare-disease research all bottlenecked on this single missing capability.

**Decision.** DeepMind built **AlphaFold 2** as a *supervised deep-learning* system trained on the Protein Data Bank's ~170,000 known protein structures, augmented with self-distillation on millions of unlabeled sequences. The architecture combined a Transformer-style attention module (the "Evoformer") with a structure module that produced explicit 3D coordinates. They submitted it to CASP14 in late 2020. In July 2021, they open-sourced the code and published in *Nature* (Jumper et al., 2021). In July 2022, DeepMind released the **AlphaFold Protein Structure Database** with predicted structures for ~200 million proteins, essentially every catalogued protein on Earth. AlphaFold 3 (2024) extended this to protein-ligand, protein-DNA, and protein-RNA interactions.

**Outcome.** At CASP14, AlphaFold 2 achieved a median GDT score of 92.4 (out of 100), comparable to experimental methods. The 2022 database release was downloaded by ~1.8 million unique users in its first year. By 2024 the work was credited in 25,000+ academic papers. Demis Hassabis and John Jumper (DeepMind) and David Baker (University of Washington, for related computational protein design work) shared the **2024 Nobel Prize in Chemistry**, the first Nobel directly recognizing applied machine-learning work. Drug-discovery startups built entirely on AlphaFold outputs (Isomorphic Labs, spun out of DeepMind in 2021) attracted billions in capital.

**Lesson for the exam / for practitioners.** AlphaFold is the canonical example for two AIF-C01 talking points:

1. **Supervised deep learning unlocks problems classical ML can't reach.** AlphaFold uses *labeled* training data (sequence → known 3D structure) textbook supervised learning. The "deep" part is a multi-layer Transformer-based neural network. Classical ML (random forests, SVMs) had been tried for decades on this problem and topped out. The exam loves the phrase "deep learning wins on unstructured data" protein structures are about as unstructured as it gets.
2. **The bottleneck shifted from algorithm to data + compute, exactly as the *Deep Learning* textbook (Goodfellow, Bengio, Courville, MIT Press, 2016) predicted.** AlphaFold's breakthrough wasn't a wild new theory; it was a Transformer architecture (Vaswani et al., "Attention Is All You Need," NeurIPS 2017) plus the public PDB database plus Google's TPU compute. This is the same pattern behind LLMs, and it's why "data quality" and "compute access" recur in every Domain 1 and Domain 2 question.

**Discussion (Socratic).**
- Q1: AlphaFold's training data was a curated public archive (the PDB) reflecting decades of expensive wet-lab work. If you wanted to apply the AlphaFold *playbook* to a new domain (say, predicting weather-station microclimates from satellite imagery), what's the equivalent of "the PDB" for your domain, and how much money / time would building it require?
- Q2: Pre-AlphaFold, structural biology was a 20-year career. Now an undergraduate with internet access can predict any protein in seconds. Where on the *displacement vs augmentation* spectrum did AlphaFold actually land, and what does the evidence (Nobel awarded to *Hassabis and Jumper*, not "AI"; Baker still won for human-led design) suggest about how high-skill careers reshape rather than disappear?
- Q3: AlphaFold 2 was open-sourced; AlphaFold 3 (2024) was *initially* released only via a web server with usage limits and no commercial-use license, drawing pushback from academic biologists. What's the trade-off DeepMind implicitly accepted, and how does it parallel the *open-weights vs closed-API (Application Programming Interface)* tension you'll see between Meta's Llama (on Bedrock) and Anthropic's Claude (also on Bedrock)?

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
2. ✏️ Take [`Quiz.md`](./Quiz.md), aim for 20/24
3. 📋 Review [`Cheat-Sheet.md`](./Cheat-Sheet.md)
4. ➡️ Move to [Module 2: ML Workflow on SageMaker](../Module-02-ML-Workflow-SageMaker/Reading.md)

---

> **Where this leads.**
> - Inside this course: Module 2 maps every vocabulary word here onto a specific Amazon SageMaker tool; Module 3 extends *deep learning* into *generative AI*; Module 7 returns to *bias* and *fairness* as the responsible-AI lens on what you've just learned.
> - Cross-course: `08-Azure-AI-Engineer` Module 1 covers the same hierarchy in Azure language (Azure ML, Azure OpenAI). `03-AWS-Cloud-Practitioner` Module 5 introduces AWS AI/ML services at a higher level.
> - Practice: Practice Exam 1 has 8–10 questions drawing on this module. The Final Mock Exam revisits with scenario-style framings.

---

## 💬 Discussion, Socratic prompts

Use these as study-group questions, journal prompts, or interview drills. Each is open-ended; the strongest answers cite a specific framework or case from the reading.

1. **The "should we use AI here at all?" question.** A regional bank's CIO wants to "use AI" for three projects: (a) computing monthly mortgage interest accrued, (b) detecting credit-card fraud, (c) flagging unusual employee expense reports. For each, decide whether AI is the right tool *or* an anti-pattern, and what classical ML or non-ML approach you'd use instead. Defend your answer using the "Where AI Shines vs Where It Hurts" table from this module.
2. **Tabular data and the deep-learning trap.** You inherit a churn-prediction project where a previous team built a 12-layer neural network on 200,000 rows of customer-attribute data, with 71% accuracy on the test set. A peer suggests scrapping it and trying XGBoost. Build the strongest argument *for* and *against* their suggestion. Reference the AlphaFold case to articulate when deep learning actually wins versus when it's overkill.
3. **The label drift problem.** Your fraud-detection team has 18 months of historical labels but suspects that *what counts as fraud* has shifted (e.g., new attack patterns appeared in month 14). Re-training on the full 18 months may dilute signal from the recent shift. Argue both for and against: (a) retraining on the full set, (b) retraining on only the last 4 months, (c) using two models and ensembling. Which would you defend at a Chief Risk Officer review?
4. **Recall vs precision in healthcare.** A skin-cancer screening model is being deployed in a primary-care clinic. The product team wants to optimize accuracy; the clinician advisors want to optimize recall (catch every cancer, even if it means more false positives). The hospital's general counsel wants precision (don't scare healthy patients). Whose objective wins, and how would you structure the decision conversation? Tie your reasoning to the "accuracy lies on imbalanced data" lesson and a specific real-world consequence of each choice.
5. **AlphaFold and the "what's left for humans" question.** AlphaFold made one entire scientific specialty (X-ray crystallography for known proteins) substantially less valuable overnight. Imagine you teach an MBA strategy class. Construct a 5-minute argument that (a) takes the displacement seriously and (b) identifies which *adjacent* skills became *more* valuable because of AlphaFold (data curation, biology interpretation, drug-target validation, IP strategy). What's the general principle for predicting which jobs an AI breakthrough makes more not less valuable?

There are no "official" answers. Strong responses cite at least one named framework or case from the reading and one quantitative claim.

---

## 📚 Further Reading (Optional)

- 📖 [AWS, What is Machine Learning?](https://aws.amazon.com/what-is/machine-learning/)
- 📖 [AWS, What is Artificial Intelligence?](https://aws.amazon.com/what-is/artificial-intelligence/)
- 📖 [Google Machine Learning Crash Course](https://developers.google.com/machine-learning/crash-course) free, excellent intro
- 📖 [3Blue1Brown, But what is a neural network?](https://www.youtube.com/results?search_query=3blue1brown+neural+network) (the visual classic)
- 📖 [AIF-C01 Official Exam Guide](https://d1.awsstatic.com/training-and-certification/docs-ai-practitioner/AWS-Certified-AI-Practitioner_Exam-Guide.pdf), Domain 1 task statements
