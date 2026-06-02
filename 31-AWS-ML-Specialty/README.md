---
permalink: /31-AWS-ML-Specialty/
title: AWS Certified Machine Learning Specialty Track (MLS-C01)
---

# 🤖 AWS Certified Machine Learning Specialty Track (MLS-C01)

**🤖 AI & ML · AWS** › Machine Learning — Specialty (MLS-C01)

> **Goal:** Pass the AWS Certified Machine Learning – Specialty exam (MLS-C01) on the first attempt with a 750+ scaled score.
> **Duration:** 10 weeks part-time (or 5 weeks full-tilt for ML engineers with prior SageMaker experience).
> **Cost:** $300 USD (specialty-tier; cert valid 3 years; renewal via recert or higher cert).
> **Difficulty:** Specialty · 1–2 years AWS ML experience strongly recommended · SAA-C03 or AIF-C01 helpful pre-requisite.

---

## ✨ Why This Certification Matters

### 🎯 The promise

The AWS Certified Machine Learning Specialty (MLS-C01) is the most respected ML-engineering credential in the cloud world. It separates engineers who can *call a model API* from those who can **build, train, evaluate, deploy, and govern** an end-to-end production ML system on the dominant cloud platform — from raw S3 data to a fault-tolerant real-time endpoint with bias monitoring, cost guardrails, and continuous retraining. Where AIF-C01 says "I understand AI"; MLS-C01 says "I ship ML in production at scale."

It is the hardest of the AWS ML ladder rungs precisely because every domain — data engineering, EDA, modelling, MLOps — is tested with the depth a hiring manager actually cares about. Passing it puts you in the top 3% of AWS-certified professionals worldwide.

### 💼 Career outcomes after passing

- **Machine Learning Engineer (MLE)** ($140K–$210K) — the headline role; designs, trains, and operates production ML systems
- **MLOps Engineer / ML Platform Engineer** ($150K–$220K) — builds the SageMaker / Kubeflow / step-function infrastructure other ML teams ride on
- **Applied Scientist / Senior Data Scientist** ($160K–$240K + equity) — Amazon, Meta, Stripe, Capital One, and most FAANG-adjacent shops list MLS-C01 as a preferred credential for ML-leaning DS roles
- **Senior AI Solutions Architect / Specialty SA** ($175K–$260K) — pre-sales role at AWS, AWS Premier Partners (Slalom, Onica, Quantiphi), or any SaaS vendor selling ML features
- **Director / Principal MLE** ($230K–$420K total comp) — MLS-C01 is the floor; deep production scars layer on top
- **Founder / Technical co-founder (AI-native startup)** — VC pattern-matching favours founders who can demonstrate end-to-end production ML chops

Average compensation uplift after passing: **18–28%** in the 6–12 months following certification, per Robert Half, Levels.fyi, and Hired's 2024–2025 ML compensation reports. MLS-C01 sits at the top of AWS's coherent ML ladder: **AIF-C01 (course 07) → MLA-C01 (Machine Learning Engineer Associate, planned) → MLS-C01 (this course, the apex)**.

### 🏛️ Why The Cert Hub's version is different

- **Engineered to the Cornell · Harvard · Princeton · Stanford pedagogical standard** — gradient descent, attention, bias-variance, ROC AUC, and SHAP all taught from first principles with the source papers cited (LeCun, Hinton, Vaswani, Lundberg) — not glossed over
- **Story-driven lessons (not flashcard punishment)** — every module is anchored in a real production case study: **Netflix's recommendation engine**, **Capital One's real-time fraud detection on SageMaker**, **Airbnb's dynamic-pricing models**, **Toyota's computer-vision factory inspection**, **JPMorgan's COiN document AI**, **Stripe Radar**, and **NASA JPL's anomaly detection** all appear in worked-example form
- **Original questions only** — every quiz, practice exam, and final mock is written from the published MLS-C01 Exam Guide; no copyrighted dumps
- **Real-world code** — Python + Boto3 + SageMaker Python SDK snippets at the level you'd write in production, not pseudocode
- **One author, one voice** — coherent ML vocabulary across all 10 modules, all 3 practice exams, and the final mock
- **Updated for the 2026 MLS-C01 blueprint** — including the **Bedrock-on-SageMaker integration**, **Amazon Q in QuickSight**, **SageMaker JumpStart foundation models**, **Trainium / Inferentia2**, **SMDDP / SMMP distributed training**, and **Clarify SHAP** that older study guides miss

### 🚀 Ready to start?

Ten weeks of focused study, real Python + SageMaker work in your own AWS account, and three practice exams that feel like the real thing. That's the program.

Begin with [Module 1: ML Foundations & AWS Landscape →](./Module-01-ML-Foundations-AWS-Landscape/Reading.md)

---

## 🎯 What You'll Learn

By the end of this track, you'll be able to:

- **Engineer ML-ready data pipelines** — ingest from S3 / Kinesis / DynamoDB, transform with Glue / EMR / DataBrew / Lambda, version with Lake Formation governance
- **Perform rigorous EDA & feature engineering** — handle missingness, outliers, scaling, encoding, PCA / t-SNE / UMAP dimensionality reduction in Data Wrangler and QuickSight
- **Pick the right algorithm** in SageMaker's 17 built-ins and 100+ JumpStart foundation models — XGBoost vs Linear Learner vs Random Cut Forest vs K-Means vs BlazingText vs Object2Vec, and when to bring your own container
- **Train deep models efficiently** — TensorFlow / PyTorch / MXNet containers, distributed data parallel (SMDDP), model parallel (SMMP), AWS Trainium and Inferentia2 silicon, mixed precision, EFA networking
- **Use managed AI services correctly** — Comprehend, Rekognition, Textract, Translate, Transcribe, Polly, Lex, Kendra, Personalize, Forecast — and know when each beats a custom SageMaker model
- **Build generative AI in Bedrock** — model gateway, Knowledge Bases for RAG, Agents, Guardrails, fine-tuning; integrate Amazon Q (Business / Developer / QuickSight); deploy foundation models with JumpStart
- **Evaluate models rigorously** — train/val/test discipline, k-fold CV, confusion matrix, precision/recall/F1/AUC/RMSE, hyperparameter tuning (HPO), Clarify bias and SHAP explainability, A2I human review
- **Operate ML in production** — SageMaker Pipelines, Projects, Model Registry, Model Monitor (data drift + model drift), real-time / async / serverless / multi-model endpoints, blue-green and shadow deployments
- **Secure & cost-optimize ML** — IAM least privilege, VPC isolation, KMS, PrivateLink, Spot training, Savings Plans, multi-model endpoints, Debugger / Profiler for root-causing inefficiency
- **Read a 6-line MLS-C01 scenario in 60 seconds** and pick the most accurate, most cost-effective, or most operationally efficient answer

---

## 📚 The 10 Modules

| # | Module | Time | What You'll Master |
|---|--------|------|--------------------|
| 1 | [ML Foundations & AWS Landscape](./Module-01-ML-Foundations-AWS-Landscape/Reading.md) | 3 hrs | Supervised / unsupervised / RL, bias-variance, AWS ML stack overview |
| 2 | [Data Engineering for ML](./Module-02-Data-Engineering-ML/Reading.md) | 4 hrs | S3 classes, Glue, Kinesis, EMR, Athena, Lake Formation, file formats |
| 3 | [EDA & Feature Engineering](./Module-03-EDA-Feature-Engineering/Reading.md) | 4 hrs | Imputation, outliers, scaling, encoding, PCA / t-SNE, Data Wrangler |
| 4 | [SageMaker Studio & Algorithms](./Module-04-SageMaker-Studio-Algorithms/Reading.md) | 4.5 hrs | Studio IDE, XGBoost, Linear Learner, K-Means, RCF, BlazingText, etc. |
| 5 | [Deep Learning on AWS](./Module-05-Deep-Learning-AWS/Reading.md) | 4 hrs | TF/PyTorch containers, Trainium/Inferentia, SMDDP, distributed training |
| 6 | [NLP & Computer Vision Workflows](./Module-06-NLP-Computer-Vision/Reading.md) | 4 hrs | Comprehend, Rekognition, Textract, Translate, Transcribe, Polly, Lex |
| 7 | [Bedrock & GenAI Services](./Module-07-Bedrock-GenAI-Services/Reading.md) | 4 hrs | Bedrock, Knowledge Bases, Agents, Guardrails, Amazon Q, JumpStart |
| 8 | [Evaluation, Tuning & Bias](./Module-08-Evaluation-Tuning-Bias/Reading.md) | 4 hrs | CV, metrics, HPO, SageMaker Clarify, SHAP, Amazon A2I |
| 9 | [MLOps — Pipelines, Deployment, Monitoring](./Module-09-MLOps-Pipelines-Deployment/Reading.md) | 4.5 hrs | Pipelines, Projects, Model Registry, endpoints, Model Monitor |
| 10 | [Security, Cost & Production](./Module-10-Security-Cost-Production/Reading.md) | 3.5 hrs | IAM, VPC, KMS, Spot training, Savings Plans, Debugger, Profiler |

**Total study time:** ~40 hours of reading + 14 hours of videos + 12 hours of quizzes/exams = **~66 hours**.

---

## 🧪 Practice Exams (Located in `Practice-Exams/`)

| Exam | When To Take It | Questions | Time | Difficulty |
|------|-----------------|-----------|------|------------|
| [Practice-Exam-1](./Practice-Exams/Practice-Exam-1.md) | After Modules 1–5 | 30 | 80 min | ⭐⭐⭐ |
| [Practice-Exam-2](./Practice-Exams/Practice-Exam-2.md) | After Modules 6–10 | 30 | 80 min | ⭐⭐⭐⭐ |
| [Final-Mock-Exam](./Practice-Exams/Final-Mock-Exam.md) | 1–2 days before real exam | 65 | 180 min | ⭐⭐⭐⭐⭐ |

**Plus:** Take the [AWS Official MLS-C01 Sample Questions](https://d1.awsstatic.com/training-and-certification/docs-ml/AWS-Certified-Machine-Learning-Specialty_Sample-Questions.pdf) (10 questions, free). Hit 9/10 before booking.

---

## 📖 The Single Most Important Resource

🔗 **[AWS MLS-C01 Exam Guide (official PDF)](https://d1.awsstatic.com/training-and-certification/docs-ml/AWS-Certified-Machine-Learning-Specialty_Exam-Guide.pdf)** — 17 pages. Read it twice. The blueprint lists every domain, every objective, and every in-scope service. If our content contradicts the official guide, the official guide wins.

Also pin these:

- 🔗 **[Amazon SageMaker Developer Guide](https://docs.aws.amazon.com/sagemaker/)** — the definitive reference for every SageMaker feature
- 🔗 **[Amazon Bedrock User Guide](https://docs.aws.amazon.com/bedrock/)** — Bedrock, Knowledge Bases, Agents, Guardrails
- 🔗 **[AWS ML Lens (Well-Architected)](https://docs.aws.amazon.com/wellarchitected/latest/machine-learning-lens/machine-learning-lens.html)** — Well-Architected, applied to ML workloads
- 🔗 **[AWS Machine Learning Blog](https://aws.amazon.com/blogs/machine-learning/)** — case studies and feature launches

---

## 🎓 What Is The MLS-C01 Exam?

| Detail | Specification |
|--------|---------------|
| Provider | AWS (via Pearson VUE or PSI online proctor) |
| Cost | $300 USD |
| Time | **180 minutes** |
| Questions | **65** (50 scored + 15 unscored — you don't know which) |
| Format | Multiple-choice (single answer) and multiple-response (2+ answers) |
| Pass mark | **750 / 1000** (≈ 75%) — scaled score, not raw % |
| Languages | English, Japanese, Korean, Simplified Chinese, French |
| Delivery | Online proctored or in-person test center |
| Validity | 3 years; renew with any current AWS associate/pro/specialty cert or recert exam |
| Retake | 14-day wait between attempts; no annual cap |

### 📊 Domain Weights (Memorize These — They Tell You Where to Spend Study Time)

| Domain | Weight | Modules |
|--------|--------|---------|
| **Domain 1: Data Engineering** | **20%** | Module 2 |
| **Domain 2: Exploratory Data Analysis** | **24%** | Module 3 |
| **Domain 3: Modeling** | **36%** | Modules 4, 5, 6, 7, 8 |
| **Domain 4: ML Implementation & Operations** | **20%** | Modules 9, 10 |

🧠 **Memory hook:** **M**odeling > **E**DA > **D**ata-Eng = **O**ps (36 / 24 / 20 / 20). **Modeling is biggest** — over a third of the exam. Never skimp on Modules 4 through 8.

---

## 🚦 Recommended Path

### 10-Week Plan (Recommended — Sustainable)

```
Week 1:  Module 1 (Foundations)              + Set up SageMaker Studio
Week 2:  Module 2 (Data Engineering)
Week 3:  Module 3 (EDA & FE)                  + Practice Exam 1 prep
Week 4:  Module 4 (SageMaker Algorithms)      + Practice Exam 1
Week 5:  Module 5 (Deep Learning)
Week 6:  Module 6 (NLP & CV)
Week 7:  Module 7 (Bedrock & GenAI)
Week 8:  Module 8 (Evaluation & Bias)         + Practice Exam 2
Week 9:  Module 9 (MLOps)                     + Module 10 (Security & Cost)
Week 10: Re-watch weak topics + Flashcards    + Final Mock Exam + REAL EXAM
```

### 5-Week Sprint (if You're Already an ML Engineer)

```
Week 1: Modules 1-3
Week 2: Modules 4-6                           + Practice Exam 1
Week 3: Modules 7-8                           + Practice Exam 2
Week 4: Modules 9-10
Week 5: Flashcards + Final Mock + REAL EXAM
```

---

## ⚠️ The 7 Most Common Reasons People Fail MLS-C01

1. ❌ **Memorising algorithms instead of comparing them.** Exam asks "which is the BEST algorithm" — you must rank XGBoost vs Linear Learner vs K-Means vs Random Cut Forest by use case (tabular / linear / clustering / anomaly).
2. ❌ **Skipping EDA & Feature Engineering.** 24% of the exam — and the place ML engineers from Kaggle backgrounds *think* they know but get tripped up on the AWS-specific Data Wrangler / QuickSight UI details.
3. ❌ **Ignoring SageMaker's built-in algorithms' hyperparameters.** XGBoost `num_round` / `eta` / `max_depth`, Linear Learner `predictor_type`, K-Means `k` — these *will* be asked.
4. ❌ **Confusing real-time vs async vs serverless vs multi-model endpoints.** Each solves a specific cost/latency profile. Memorise the trade-off table in Module 9.
5. ❌ **Not practising scenario reading.** MLS-C01 questions are long — 6 to 10 lines. Train yourself to find the keyword ("imbalanced classes", "millions of features", "low-latency inference", "explainability required") that decides the answer.
6. ❌ **Treating Comprehend / Rekognition / Textract / SageMaker as interchangeable.** Managed AI service vs custom SageMaker model is a frequent comparison question. Module 6 covers the decision tree.
7. ❌ **Booking the exam before all 3 practice exams.** If you can't hit 80% on Practice-Exam-2 and the Final Mock, you're not ready.

---

## 🃏 Flashcards

🔗 **[Master Flashcards](./Flashcards.md)** — 120+ cards covering every module. Use the interactive widget (mark "Got it" to skip in future sessions).

---

## 🏗️ Capstone Project

🔗 **[Capstone Project — Atlas Health Pre-Authorization Triage Platform](./Capstone-Project.md)** — Once you've finished all 10 modules, the capstone is the Cornell/Harvard/Princeton/Stanford-grade synthesis exercise: a 7-deliverable production-ML design for a Series-C health-tech company (~$1.8M Year 1 budget, 9-month timeline, HIPAA + SOC 2 + bias controls + 2-second p95 latency). Rubric scored out of 100. This is the difference between "I passed MLS-C01" and "I could lead this at a real company on Monday."

---

## 📚 Recommended Readings

🔗 **[Recommended Readings — full bibliography](./Recommended-Readings.md)** — 65+ curated sources: canonical textbooks (Goodfellow's *Deep Learning*, Géron's *Hands-On ML*, Bishop's PRML, Kleppmann's *DDIA*, Huyen's *Designing ML Systems*, Burkov's *MLE*), seminal academic papers (Rosenblatt 1958, Backprop, LeNet, ResNet, Transformer, BERT, GPT-3, Diffusion, XGBoost, SHAP, RAG), the AWS Builders' Library essays (Brooker, Weiss, Cockcroft), re:Invent talks 2018–2024, industry blogs (Netflix, Pinterest, Stripe, Capital One, JPMorgan), and 10 free academic courses (Andrew Ng, Stanford CS229/CS231n/CS224n, MIT 6.S191, fast.ai, Hugging Face). Sequenced by where in the course to engage with each.

Short top-5 if you want to read only five things:

- 📖 AWS MLS-C01 Exam Guide (PDF, 17 pages) — the blueprint
- 📖 **Géron, Aurélien (2022).** *Hands-On Machine Learning with Scikit-Learn, Keras & TensorFlow* (3rd ed.). O'Reilly
- 📖 **Goodfellow, Bengio, Courville (2016).** *Deep Learning.* MIT Press — Chapters 5, 6, 9, 10, 12
- 📖 **Sculley et al. (2015).** *Hidden Technical Debt in Machine Learning Systems.* NIPS — foundational MLOps
- 📖 **AWS Well-Architected Machine Learning Lens** — AWS's own ML best-practice document

**re:Invent talks** (always free on YouTube — search via the Videos.md cards in each module):

- 🎤 AIM303 — *How to choose the right SageMaker built-in algorithm* (Module 4)
- 🎤 AIM402 — *Distributed training at scale on SageMaker* (Module 5)
- 🎤 AIM319 — *Capital One Real-Time Fraud Detection on SageMaker* (Modules 4, 9)
- 🎤 AIM403 — *MLOps at Amazon Music* (Module 9)
- 🎤 AIM404 — *Bedrock Knowledge Bases and Agents* (Module 7)

---

## 🧪 Sample Exam Questions From AWS

🔗 **[AWS Official MLS-C01 Sample Questions](https://d1.awsstatic.com/training-and-certification/docs-ml/AWS-Certified-Machine-Learning-Specialty_Sample-Questions.pdf)** — 10 questions, free, official. Take these *after* Practice Exam 1 and *before* the Final Mock. Aim for 9/10. If you hit 6/10 or below, do NOT book the real exam yet — review weakest modules and retry the Final Mock first.

---

## 📊 What Sets MLS-C01 Apart From Other AWS Certifications

The Machine Learning Specialty is unusually demanding among AWS certifications for three structural reasons:

1. **Scenario length.** Each question averages 6-10 lines of business context — a healthcare scenario, a financial-services scenario, a retail-recommendations scenario. You must train yourself to read for **keywords** ("imbalanced", "near-real-time", "explainability required", "minimum operational overhead", "must reside in eu-central-1") and ignore filler. Standard reading speed will not finish the exam.

2. **Cross-domain integration.** Unlike SAA-C03 where most questions are siloed (one VPC question, one S3 question), MLS-C01 questions routinely braid data engineering + modelling + MLOps + security into a single 6-line question. You cannot pass by mastering modules in isolation.

3. **Math + service knowledge + judgement.** The exam requires (a) recall of math concepts (precision vs recall on imbalanced data, PR-AUC vs ROC-AUC, bias-variance, gradient descent stability), (b) recall of ~40 AWS services across all 7 stack layers, and (c) the *judgement* to pick the BEST option when 2-3 options look defensible. Pure memorisation is insufficient.

The MLS-C01 pass rate is publicly reported around 50% — lower than SAA-C03 (~65%) or AIF-C01 (~75%). This course is designed to put you in the ~25% who pass on the first attempt with a comfortable margin.

---

## 🎯 Final Pre-Exam Checklist

Before you book:

- [ ] All 10 module Quizzes scored ≥20/24 or equivalent
- [ ] Practice Exam 1: ≥22/30
- [ ] Practice Exam 2: ≥23/30
- [ ] Final Mock Exam: ≥49/65 (real exam pass mark equivalent), ideally ≥55/65
- [ ] AWS Official Sample Questions: 9/10
- [ ] Flashcards: ≥80% marked "Got it" on at least one full pass
- [ ] All 10 Cheat-Sheets re-read in the past week
- [ ] (Optional but recommended) Capstone Project: self-graded ≥75/100
- [ ] You can sketch the **Capital One reference architecture** and the **standard 2026 RAG architecture** from memory in under 90 seconds each
- [ ] You can name and place all **17 SageMaker built-in algorithms** in under 5 minutes

If you hit all checkboxes, you are ready. Book the exam, sleep 8 hours, hydrate, trust your prep.

---

## 🎬 Start Here

👉 [**Module 1: ML Foundations & AWS Landscape**](./Module-01-ML-Foundations-AWS-Landscape/Reading.md)

You got this. 🤖💪
