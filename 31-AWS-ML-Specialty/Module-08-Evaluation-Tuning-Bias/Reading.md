# Module 8: Evaluation, Hyperparameter Tuning & Bias 🎯

> **Why this module matters:** Domain 3 of MLS-C01 (Modeling) is 36% of the exam, and a big chunk of it perhaps a third is *evaluation*: confusion matrices, ROC vs PR-AUC, RMSE vs MAE, cross-validation, hyperparameter tuning strategies, and the operational side of fairness (Clarify SHAP, model cards, A2I). This module makes you fluent in the *measurement* side of ML: how do you *know* a model is good?

> **Prerequisites for this module.** Modules 1–7 of this course. Helpful background:
> - High-school statistics (confidence intervals, hypothesis testing)
> - Module 1's metric overview
> - Module 4's hyperparameter coverage
> - Module 3's pre-training bias section (Clarify), we now layer post-training bias

---

## 🍕 A Story: An "Accurate" Loan Model That Was Quietly Discriminatory

Meet Daniel. He led the ML team at a regional US bank in 2023, building a loan-default predictor. He trained an XGBoost classifier on 18 months of data and reported the standard metrics:

- Accuracy: **88%**
- AUC: **0.92**
- F1: **0.79**

The model was launched. Three months later, the compliance team flagged it. The model approved 71% of loan applications from one demographic group and 41% from another, even when applicants had similar credit scores and incomes. The bank was investigated by federal regulators and ultimately fined.

Daniel had never run a **post-training bias report**. He had never produced **SHAP explanations** for declined applications. He had never set up **A2I** human review for low-confidence outcomes. The model's headline accuracy was real, but the failure mode was systemic.

After the incident, Daniel rebuilt the workflow with **SageMaker Clarify** (post-training bias + SHAP), **SageMaker Model Monitor** (data + bias drift in production), **A2I** (human review on low-confidence and borderline decisions), and a **model card** documenting limitations and use restrictions. The new model is *less* accurate (0.85 AUC) but *more* approvable by regulators and the legal team.

That is the lesson of this module. Accuracy alone is not enough. You must measure right.

---

## 📐 Train, Validation, Test, The Sacred Split

This is the foundation that everything else builds on. **Memorise this.**

| Split | Purpose | Touch it? |
|-------|---------|-----------|
| **Train** | Fit the model's parameters (weights) | Yes, heavily |
| **Validation** | Tune hyperparameters; pick best model; early stopping | Yes, repeatedly |
| **Test** | Final unbiased estimate of generalisation | **TOUCH ONCE**, at the very end |

🚨 **Cardinal sin:** *using the test set to tune hyperparameters*. Then your reported test metric is biased upward. The test set is a one-shot resource.

### Typical split ratios

| Dataset size | Suggested split |
|--------------|-----------------|
| Small (<10K) | 60 / 20 / 20 |
| Medium (10K – 1M) | 70 / 15 / 15 or 80 / 10 / 10 |
| Large (>1M) | 98 / 1 / 1 (just need enough samples in val/test for statistical significance) |
| Time-series | Sequential split, train on past, val on near future, test on far future |

🚨 **Trap.** Random splitting of time series leaks future into past. Always use **time-based / chronological** splits for time-series.

---

## 🔁 Cross-Validation

When the dataset is small, a single train/val split is noisy. **K-fold cross-validation** averages estimates across multiple splits.

| Method | Use |
|--------|-----|
| **K-fold CV** | Standard; K=5 or K=10 typical |
| **Stratified K-fold** | Classification with imbalanced classes, preserves class proportions in folds |
| **Leave-One-Out (LOO)** | Tiny datasets only (K = N) |
| **Time-series CV (walk-forward / expanding window)** | Time-series data, never train on future |
| **Group K-fold** | Records share an identifier (e.g. patient_id), keep groups intact in each fold |
| **Repeated K-fold** | Run K-fold multiple times with different splits |

🎯 **Exam pattern.** *"Cross-validate a churn model on 5,000 customers where each customer has multiple records."* → **Group K-fold** by customer_id (otherwise data leaks across folds).

---

## 📊 Classification Metrics, The Confusion Matrix Foundation

Every classification metric derives from the **confusion matrix**:

```
                Predicted Positive   Predicted Negative
Actual Positive       TP                    FN
Actual Negative       FP                    TN
```

### The metrics in two minutes

| Metric | Formula | Read it as... |
|--------|---------|---------------|
| **Accuracy** | (TP + TN) / N | "How often is the model right overall?" |
| **Precision** (P) | TP / (TP + FP) | "When the model says 'positive', how often is it right?" |
| **Recall / Sensitivity / TPR** (R) | TP / (TP + FN) | "Of all true positives, how many did we catch?" |
| **Specificity / TNR** | TN / (TN + FP) | "Of all true negatives, how many did we correctly skip?" |
| **F1 score** | 2·P·R / (P + R) | Harmonic mean of P and R |
| **F-beta** | (1+β²)·P·R / (β²·P + R) | F1 weighted; β>1 → favour recall; β<1 → favour precision |
| **False Positive Rate (FPR)** | FP / (FP + TN) | "How often do we falsely alarm?" |
| **False Negative Rate (FNR)** | FN / (FN + TP) | "How often do we miss?" |

### Threshold-dependent vs threshold-free

All of the above depend on a chosen decision threshold (default 0.5). For threshold-free evaluation:

| Metric | Detail |
|--------|--------|
| **ROC curve** | TPR vs FPR across thresholds |
| **ROC AUC** | Area under ROC; 1.0 = perfect, 0.5 = random |
| **PR curve** | Precision vs Recall across thresholds |
| **PR AUC** | Area under PR; better for imbalanced data |
| **Log loss / cross-entropy** | Penalises confident wrong predictions; threshold-free |

🎯 **Exam pattern.** *"Evaluate a fraud detector on a 99.5% / 0.5% imbalanced dataset."* → **PR-AUC** + **precision-recall curve**, NOT ROC-AUC and NOT accuracy.

🎯 **Exam pattern.** *"FN costs $100k, FP costs $50."* → use **recall** (or **F-beta with β>1**), minimise FN.

🎯 **Exam pattern.** *"Cost-sensitive learning."* → Weight losses by class costs; equivalent to threshold tuning at inference time.

### The threshold-tuning move

```python
# Default: predict positive if proba >= 0.5
# Imbalanced data: lower threshold to catch more positives
threshold = 0.3   # catches more positives, accepts more FPs
predictions = (model.predict_proba(X)[:, 1] >= threshold).astype(int)
```

For an MLS-C01 question, "**lower the decision threshold**" usually pairs with "**imbalanced data**" or "**FN is costly**".

---

## 📈 Regression Metrics

| Metric | Formula | Use |
|--------|---------|-----|
| **MSE** | mean((y − ŷ)²) | Penalises big errors; default |
| **RMSE** | √MSE | Same units as y; interpretable |
| **MAE** | mean(\|y − ŷ\|) | Outlier-robust |
| **MAPE** | mean(\|y − ŷ\| / \|y\|) × 100% | "% off"; interpretable; blows up near y=0 |
| **R²** | 1 − SS_res / SS_tot | Fraction of variance explained |
| **Adjusted R²** | R² with feature penalty | Penalises model complexity |
| **Huber loss** | MSE for small errors, MAE for big | Outlier-robust + smooth |
| **Quantile loss / pinball loss** | Quantile regression objective | Forecast intervals (p10, p50, p90) |

🎯 **Exam pattern.** *"Forecast model needs to produce p10 / p50 / p90 intervals, not point estimates."* → **Quantile loss** (used by DeepAR / Forecast).

🎯 **Exam pattern.** *"RMSE is dominated by a few huge outliers."* → switch to **MAE** OR **Huber** OR **quantile loss**.

---

## 🎯 Hyperparameter Tuning, SageMaker Automatic Model Tuning (HPO)

SageMaker's built-in HPO is **Bayesian optimisation** with optional random and grid search.

### Job anatomy

```python
from sagemaker.tuner import HyperparameterTuner, ContinuousParameter, IntegerParameter, CategoricalParameter

hyperparameter_ranges = {
    "eta": ContinuousParameter(0.01, 0.3),
    "max_depth": IntegerParameter(3, 10),
    "subsample": ContinuousParameter(0.5, 1.0),
    "num_round": IntegerParameter(50, 1000),
}

tuner = HyperparameterTuner(
    estimator=xgb_estimator,
    objective_metric_name="validation:auc",
    objective_type="Maximize",
    hyperparameter_ranges=hyperparameter_ranges,
    max_jobs=50,
    max_parallel_jobs=5,
    strategy="Bayesian",   # or "Random", "Grid", "Hyperband"
)

tuner.fit({"train": train_input, "validation": val_input})
```

### Strategies

| Strategy | When |
|----------|------|
| **Random** | Quick; baseline; embarrassingly parallel |
| **Grid** | Small discrete spaces only |
| **Bayesian** | Default; learns from previous trials; fewer jobs needed |
| **Hyperband** | Aggressively prunes unpromising trials; great for DL with many epochs |

### Warm start

You can warm-start a new tuning job from a previous one (resume / re-fine).

🎯 **Exam pattern.** *"Tune a DL model's many hyperparameters quickly by killing unpromising trials early."* → **Hyperband**.

🎯 **Exam pattern.** *"Tune XGBoost with the fewest training jobs."* → **Bayesian** (default).

---

## 🤖 LLM Evaluation Metrics

Foundation models need their own metric family.

| Metric | What it measures | When |
|--------|------------------|------|
| **BLEU** | N-gram precision vs reference (translation) | Translation |
| **ROUGE** | N-gram recall vs reference (summarisation) | Summarisation; ROUGE-L for sequence similarity |
| **METEOR** | Weighted F-measure with synonyms | Translation |
| **BERTScore** | Embedding-similarity vs reference | More semantic than BLEU |
| **Perplexity** | exp(cross-entropy) on held-out text | Language-model quality |
| **MMLU / ARC / HellaSwag / GSM8K / HumanEval / MT-Bench** | Benchmark suites | General LLM evals |
| **LLM-as-judge** | Use a larger LLM to score outputs | Subjective tasks |
| **Faithfulness** (RAG (Retrieval-Augmented Generation)) | Output supported by retrieved docs | RAG; Bedrock contextual grounding checks this |
| **Answer relevance** (RAG) | Output addresses the question | RAG |
| **Context precision/recall** (RAG) | Retrieved docs relevance | RAG |

### Bedrock Evaluations

Bedrock has built-in **model evaluation jobs**:

| Type | What it does |
|------|--------------|
| **Automatic evaluation** | Built-in / custom metrics on a labelled dataset |
| **Human evaluation** | Workforce-based scoring |
| **Model-as-judge** | Use one LLM to score another's outputs |

🎯 **Exam pattern.** *"Compare three Bedrock models on a summarisation task."* → **Bedrock Model Evaluation** (automatic + ROUGE) and/or **LLM-as-judge**.

---

## 🔬 SageMaker Clarify, Post-Training Bias & SHAP

We saw pre-training bias in Module 3. Now we cover **post-training** (after the model is trained).

### Post-training bias metrics

| Metric | Measures |
|--------|----------|
| **Disparate Impact (DI)** | Ratio of positive prediction rates between facets |
| **Difference in Positive Proportions of Predicted Labels (DPPL)** | Like DPL but on predictions |
| **Difference in Acceptance Rates (DAR)** | Acceptance rate difference |
| **Difference in Rejection Rates (DRR)** | Rejection rate difference |
| **Accuracy Difference (AD (Active Directory))** | Model accuracy across facets |
| **Recall Difference (RD)** | Recall across facets |
| **Specificity Difference (SD)** | Specificity across facets |
| **Counterfactual Fliptest (FT)** | Predictions flip when facet changes |
| **Treatment Equality (TE)** | Ratio of FP/FN across facets |

🎯 **Exam pattern.** *"After deployment, the model approves 65% of one group and 41% of another."* → **Disparate Impact (DI) or DPPL via Clarify post-training bias job**.

### SHAP, Per-Prediction Explainability

**SHAP (SHapley Additive exPlanations)** uses cooperative game theory to attribute a prediction to its feature contributions. SageMaker Clarify produces SHAP explanations as part of the bias workflow.

| Concept | Detail |
|---------|--------|
| **Global SHAP** | Average feature importance across the dataset |
| **Local SHAP** | Per-prediction feature contributions |
| **SHAP plot types** | Beeswarm, summary, force, dependence |
| **Baseline** | Reference value (mean / median) against which contributions are measured |
| **KernelSHAP** | Model-agnostic; slower |
| **TreeSHAP** | Optimised for tree ensembles; fast |
| **DeepSHAP** | For deep networks |

🎯 **Exam pattern.** *"Explain a denied loan application to a regulator."* → **SageMaker Clarify SHAP** (local explanation).

🎯 **Exam pattern.** *"Detect *which* feature is causing model drift."* → **Clarify SHAP + Model Monitor's feature attribution drift**.

---

## 🃏 Model Cards

A **model card** is a structured document describing a model's intended use, performance, limitations, fairness considerations, and recommended monitoring. AWS supports this via **SageMaker Model Cards** in the Model Registry.

| Section | Content |
|---------|---------|
| Intended use | What the model is for |
| Out-of-scope use | What it should NOT be used for |
| Training data | Datasets, time ranges, known limitations |
| Metrics | Reported accuracy / fairness numbers |
| Risk rating | High / Medium / Low |
| Approval status | Pending / Approved / Rejected |

🎯 **Exam pattern.** *"Document a model's intended use and limitations for compliance."* → **SageMaker Model Card** in the Model Registry.

---

## 🤝 A2I, Human Review (Recap)

Already covered in Module 6, applies here as a fairness/quality tool: route low-confidence predictions OR predictions with detected bias to humans for review and labelling.

---

## ⚖️ The Operational Fairness Toolkit

| Step | AWS tool |
|------|----------|
| Pre-training bias detection | **Clarify pre-training bias** |
| Post-training bias detection | **Clarify post-training bias** |
| Per-prediction explanations | **Clarify SHAP** |
| Documentation | **SageMaker Model Card** |
| Human review on low-confidence | **A2I** |
| Production monitoring | **Model Monitor + Clarify bias drift** (Module 9) |
| Approvals | **Model Registry** (Module 9) |

---

## 📖 Case Study, Amazon's Internal "Model Reviews"

**Situation.** Amazon (the retailer) operates 700+ production ML models across Search, Personalization, Pricing, Fraud, Logistics. By 2019, model proliferation outpaced review, questionable models occasionally shipped to production.

**Solution (internal program, partially public via re:Invent 2022 talks).**
- **Mandatory pre-launch review** for every customer-impacting model
- **Standard metric reporting**, calibration, fairness, drift readiness
- **Mandatory model card** in a centralised registry
- **Tiered review**, Tier 1 (high-impact, like Search ranking) gets executive review; Tier 3 (internal-only) gets peer review
- **Quarterly Clarify-style bias audit**
- **Human-in-the-loop** for any model classified as "high stakes" (fraud declines, account suspensions)

**Outcome.** Two-year reduction in production incidents related to model failures; significant decrease in customer-facing fairness complaints.

**Lesson for the exam.** AWS's *whole bias + governance suite* (Clarify, Model Cards, A2I, Model Registry approval workflows) mirrors Amazon's internal practice. If a question asks "how do you operationalise fairness?", reach for these services.

---

## ⚠️ Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "Accuracy is always the best metric" | Not on imbalanced data. F1 / PR-AUC / cost-weighted. |
| "ROC-AUC is the gold standard" | For imbalanced data, **PR-AUC** is better. |
| "Cross-validation works on any data" | Time-series needs walk-forward; grouped data needs Group K-fold. |
| "Bayesian HPO is always better than random search" | At small budgets (<20 trials), random is competitive. |
| "Clarify only does bias detection" | It also produces SHAP explanations. |
| "Model Monitor handles bias drift" | Yes, pair with Clarify (Module 9). |
| "Fine-tuning eliminates bias" | Often amplifies bias from training data. |
| "More data fixes all fairness issues" | Only if the new data is representative. |
| "ROC-AUC and PR-AUC always agree" | They diverge sharply on imbalanced data. |
| "Test set can be reused for re-evaluation after small tweaks" | NO. If you used test to inform any decision, it is contaminated. |

---

## 🚨 Top Exam Traps (Module 8 Themes)

1. **"Imbalanced classes; evaluate the model"** → **PR-AUC, F1, recall**, NOT accuracy / ROC-AUC alone.
2. **"FN very costly"** → maximise **recall** (or F-beta with β>1); **lower threshold**.
3. **"Time-series CV"** → walk-forward / chronological split; never random.
4. **"Per-prediction explanation for regulators"** → **Clarify SHAP**.
5. **"Compare three Bedrock models"** → **Bedrock Model Evaluation** with BLEU / ROUGE / LLM-judge.
6. **"Tune DL model with many trials, prune early"** → **Hyperband**.
7. **"Tune XGBoost with fewest jobs"** → **Bayesian**.
8. **"Document model use for compliance"** → **SageMaker Model Card**.
9. **"Detect post-training bias on demographic facet"** → **Clarify post-training bias** (DI, DPPL).
10. **"Detect bias drift in production"** → Module 9, **Model Monitor + Clarify**.

---

## 🎓 Key Terms To Know

| Term | Definition |
|------|------------|
| **Train / val / test split** | Three disjoint sets, fit / tune / final evaluate |
| **K-fold CV** | Split into K folds, average results |
| **Stratified K-fold** | Preserves class proportions |
| **Group K-fold** | Keeps grouped records together |
| **Walk-forward CV** | Time-series sequential CV |
| **Confusion matrix** | TP/FP/TN/FN counts |
| **Precision** | TP / (TP + FP) |
| **Recall** | TP / (TP + FN) |
| **F1** | Harmonic mean of P and R |
| **F-beta** | F1 weighted toward P (β<1) or R (β>1) |
| **ROC AUC** | Area under TPR vs FPR |
| **PR AUC** | Area under precision vs recall |
| **RMSE / MAE / MAPE** | Regression error metrics |
| **R²** | Variance explained |
| **Quantile loss** | Probabilistic forecast loss |
| **Hyperband** | DL-friendly HPO strategy |
| **Bayesian HPO** | Default SageMaker HPO; learns from trials |
| **SHAP** | Shapley-value-based per-prediction feature attribution |
| **Disparate Impact** | Ratio of positive prediction rates across facets |
| **Model Card** | Standard model documentation |
| **A2I** | Human-in-the-loop for low-confidence outputs |

---

## 💬 Discussion, Socratic Prompts

1. **The "fair model" definition wars.** Demographic parity, equal opportunity, equalised odds all defensible definitions of fairness but **provably mutually incompatible** in most realistic settings. Pick a use case (lending, hiring, parole) and argue which definition is best and what you give up.
2. **Cross-validation's hidden trap on time-series.** Random K-fold leaks future into past. Yet many beginner notebooks do this. Sketch a thought experiment showing how bad this can be on a stock-price forecaster.
3. **Hyperparameter tuning's diminishing returns.** Beyond a point, more HPO trials yield no benefit. How would you estimate the right budget?
4. **SHAP's limitations.** SHAP attributes contributions assuming feature independence. In a model with strongly correlated features, SHAP can be misleading. How would you mitigate?
5. **Test-set contamination via "soft" reuse.** If you look at test-set metrics, get sad, and re-tune, have you contaminated test? Argue yes, then argue no.

---

## ➡️ Where This Leads

> **Where this leads.**
> - **Inside this course:** Module 09 deploys + monitors what you've evaluated; Module 10 governs the operational fairness in production.
> - **Cross-course:** `07-AWS-AI-Practitioner` Module 07 (Responsible AI) is the lighter version of this module. `09-CompTIA-Security-Plus` Module 1 covers the security side that complements fairness.
> - **Practice:** Practice Exam 1 has 4 questions, Practice Exam 2 has 4 questions, Final Mock has 7 questions on this material.
> - **Real world:** Run SageMaker Clarify on the UCI Adult dataset (free, ships in samples) to see SHAP and bias metrics in action.

---

## ✅ Module 8 Summary

You now know:

- 📐 The **train / validation / test** split discipline and CV variants (K-fold, stratified, group, walk-forward)
- 📊 **Classification metrics** accuracy, precision, recall, F1, F-beta, ROC AUC, PR AUC and when each is the right one
- 📈 **Regression metrics**, RMSE, MAE, MAPE, R², quantile loss
- 🎯 **SageMaker HPO**, Bayesian (default), Random, Grid, **Hyperband**
- 🤖 **LLM evaluation**, BLEU / ROUGE / BERTScore / MMLU / LLM-as-judge / Bedrock Evaluations
- 🔬 **SageMaker Clarify post-training bias**, DI, DPPL, DAR, DRR, AD, RD, SD, FT, TE
- 💡 **SHAP**, global and local feature attribution; TreeSHAP / KernelSHAP / DeepSHAP
- 🃏 **SageMaker Model Cards** for documentation
- 🤝 **A2I** as the human-review safety net
- 📖 **Amazon's internal model-review program**, the operational template

**Next:**
1. 🎥 [`Videos.md`](./Videos.md)
2. ✏️ [`Quiz.md`](./Quiz.md)
3. 📋 [`Cheat-Sheet.md`](./Cheat-Sheet.md)
4. ➡️ [Module 9: MLOps Pipelines & Deployment](../Module-09-MLOps-Pipelines-Deployment/Reading.md)

---

## 📚 Further Sources

**AWS official**
- 📖 **SageMaker Clarify**, `docs.aws.amazon.com/sagemaker/latest/dg/clarify.html`
- 📖 **SageMaker Model Cards**, `docs.aws.amazon.com/sagemaker/latest/dg/model-cards.html`
- 📖 **SageMaker Automatic Model Tuning**, `docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning.html`

**Textbooks**
- 📖 **Géron (2022).** *Hands-On ML…* (3rd ed.), chapters 3 (classification metrics), 4 (training)
- 📖 **Bishop (2006).** *PRML.*, chapter 1 (decision theory), 2 (probability)

**Academic foundations**
- 📄 **Lundberg & Lee (2017).** *A Unified Approach to Interpreting Model Predictions.* NIPS, SHAP origin
- 📄 **Hardt, Price, Srebro (2016).** *Equality of Opportunity in Supervised Learning.* NeurIPS, fairness definitions
- 📄 **Mitchell et al. (2019).** *Model Cards for Model Reporting.* FAT*

**Industry**
- 📰 **Christoph Molnar's *Interpretable Machine Learning* (free online book)**, best ML interpretability text
- 📰 **Fairlearn / IBM AIF360 documentation**, open-source fairness toolkits

---

## 🛠️ Appendix A, Worked Example: SageMaker Automatic Model Tuning

```python
from sagemaker.tuner import (
    HyperparameterTuner,
    ContinuousParameter,
    IntegerParameter,
    CategoricalParameter,
)
from sagemaker.xgboost import XGBoost

# 1. Base estimator
xgb = XGBoost(
    entry_point="train.py",
    framework_version="1.7-1",
    role=role,
    instance_count=1,
    instance_type="ml.m5.xlarge",
    use_spot_instances=True,
    max_wait=86400,
    hyperparameters={"objective": "binary:logistic", "eval_metric": "auc"},
)

# 2. Search space
ranges = {
    "eta": ContinuousParameter(0.01, 0.3, scaling_type="Logarithmic"),
    "max_depth": IntegerParameter(3, 10),
    "min_child_weight": IntegerParameter(1, 10),
    "subsample": ContinuousParameter(0.5, 1.0),
    "colsample_bytree": ContinuousParameter(0.5, 1.0),
    "lambda": ContinuousParameter(0.1, 10.0, scaling_type="Logarithmic"),
    "alpha": ContinuousParameter(0.0, 5.0),
    "num_round": IntegerParameter(100, 1000),
}

# 3. Tuning configuration
tuner = HyperparameterTuner(
    estimator=xgb,
    objective_metric_name="validation:auc",
    objective_type="Maximize",
    hyperparameter_ranges=ranges,
    metric_definitions=[
        {"Name": "validation:auc", "Regex": r"validation-auc:(\S+)"}
    ],
    max_jobs=50,
    max_parallel_jobs=5,
    strategy="Bayesian",        # or "Random", "Grid", "Hyperband"
    early_stopping_type="Auto", # SageMaker decides when to early-stop a trial
)

# 4. Fit
tuner.fit({"train": train_input, "validation": val_input})

# 5. Inspect best trial
best_job = tuner.best_training_job()
best_estimator = tuner.best_estimator()
```

🎯 **Exam pattern.** Recognise:

- `objective_metric_name` + `objective_type` = what you're optimising
- `metric_definitions` regex = how SageMaker parses metrics from container logs
- `strategy="Bayesian"` (default) vs `"Hyperband"` (DL) vs `"Random"` (parallel) vs `"Grid"` (discrete)
- `max_parallel_jobs` controls concurrency (higher = faster wall clock but less learning-from-trials for Bayesian)
- `early_stopping_type="Auto"` kills losing trials early

---

## 🛠️ Appendix B, Worked Example: SageMaker Clarify Bias & SHAP

```python
from sagemaker.clarify import (
    SageMakerClarifyProcessor,
    BiasConfig,
    DataConfig,
    ModelConfig,
    ModelPredictedLabelConfig,
    SHAPConfig,
)

clarify = SageMakerClarifyProcessor(
    role=role,
    instance_count=1,
    instance_type="ml.m5.xlarge",
    sagemaker_session=sess,
)

# 1. Data and bias config
data_config = DataConfig(
    s3_data_input_path="s3://my-bucket/test.csv",
    s3_output_path="s3://my-bucket/clarify-output/",
    label="approved",
    headers=["age", "income", "credit_score", "gender", "race", "approved"],
    dataset_type="text/csv",
)
bias_config = BiasConfig(
    label_values_or_threshold=[1],
    facet_name=["gender", "race"],
    facet_values_or_threshold=[["F"], ["minority_group"]],
    group_name="age",
)

# 2. Model + predictions config
model_config = ModelConfig(
    model_name=model.name,
    instance_type="ml.m5.xlarge",
    instance_count=1,
    accept_type="text/csv",
    content_type="text/csv",
)
preds_config = ModelPredictedLabelConfig(
    probability=0,
    label_headers=["approved"],
)

# 3. Run pre-training bias job (dataset bias)
clarify.run_pre_training_bias(
    data_config=data_config,
    data_bias_config=bias_config,
)

# 4. Run post-training bias job (model bias)
clarify.run_post_training_bias(
    data_config=data_config,
    data_bias_config=bias_config,
    model_config=model_config,
    model_predicted_label_config=preds_config,
)

# 5. Run SHAP explainability
shap_config = SHAPConfig(
    baseline=[[35, 60000, 700, "M", "majority_group"]],
    num_samples=100,
    agg_method="mean_abs",
)
clarify.run_explainability(
    data_config=data_config,
    model_config=model_config,
    explainability_config=shap_config,
)
```

🎯 **Exam pattern.** Recognise the **three methods** on `SageMakerClarifyProcessor`:

- `run_pre_training_bias`, Module 3 territory (data-level)
- `run_post_training_bias`, this module (model-level: DI, DPPL, DAR, ...)
- `run_explainability`, SHAP, both global and local

The outputs land as JSON / HTML reports in S3 (Simple Storage Service); can be attached to a Model Card or referenced by Model Monitor's bias-drift schedule.

---

## 🛠️ Appendix C, Bedrock Model Evaluation Example

```python
import boto3
bedrock = boto3.client("bedrock", region_name="us-east-1")

# Create an automatic evaluation job
bedrock.create_evaluation_job(
    jobName="claude-vs-titan-summarization",
    roleArn=role_arn,
    evaluationConfig={
        "automated": {
            "datasetMetricConfigs": [
                {
                    "taskType": "Summarization",
                    "dataset": {
                        "name": "BuiltInDataset/CNNDailyMail",
                    },
                    "metricNames": ["Toxicity", "Accuracy", "Robustness"],
                }
            ]
        }
    },
    inferenceConfig={
        "models": [
            {"bedrockModel": {"modelIdentifier": "anthropic.claude-3-5-sonnet-..."}},
            {"bedrockModel": {"modelIdentifier": "amazon.titan-text-express-v1"}},
        ]
    },
    outputDataConfig={"s3Uri": "s3://my-bucket/bedrock-eval/"},
)
```

For **human evaluation**, the same API (Application Programming Interface) supports a `human` config with a workforce ARN and rubric.

🎯 **Exam pattern.** Bedrock Model Evaluation = the canonical answer for "compare two Bedrock models on a task with reference labels". Pair with **ROUGE / BLEU** for summarisation / translation, or with **human / LLM-as-judge** for subjective tasks.

---

## 🛠️ Appendix D Choosing The Right Metric Decision Tree

```
What is the task?
├─ CLASSIFICATION
│   ├─ Balanced classes
│   │   ├─ Need single number → Accuracy
│   │   └─ Need threshold-free → ROC AUC
│   └─ Imbalanced classes
│       ├─ FN costly → Recall / F-beta (β>1) / lower threshold
│       ├─ FP costly → Precision
│       ├─ Want one number → F1
│       └─ Threshold-free → PR AUC (NOT ROC AUC)
│
├─ REGRESSION
│   ├─ Outliers manageable → RMSE
│   ├─ Outlier-robust needed → MAE OR Huber
│   ├─ % error wanted → MAPE (beware near-zero targets)
│   ├─ Variance-explained needed → R² (or Adjusted R²)
│   └─ Probabilistic forecast → Quantile / pinball loss
│
├─ MULTI-CLASS
│   ├─ Single label per record → Categorical cross-entropy + macro F1
│   └─ Multi-label → Hamming loss / per-class F1 averaged
│
├─ RANKING / RECOMMENDATION
│   ├─ Top-k matters → Precision@k, Recall@k, MAP (Minimum Advertised Price), NDCG
│   └─ Pairwise rank quality → Kendall's tau, Spearman
│
├─ FORECASTING
│   ├─ Point forecast → RMSE / MAE / MAPE
│   └─ Probabilistic → Quantile loss / CRPS
│
├─ LLM (CLASSICAL NLP (Natural Language Processing))
│   ├─ Summarisation → ROUGE-1 / ROUGE-2 / ROUGE-L + BERTScore
│   ├─ Translation → BLEU + METEOR + BERTScore
│   ├─ Q&A → Exact match + F1 (token-level) + faithfulness
│   └─ Code → HumanEval pass@k
│
├─ LLM (MODERN)
│   ├─ Reasoning → MMLU, ARC, HellaSwag, GSM8K
│   ├─ Subjective quality → LLM-as-judge OR human eval
│   └─ RAG → Faithfulness + Answer relevance + Context precision/recall
│
└─ FAIRNESS
    ├─ Pre-training → CI, DPL, KL, JS, Lp, TVD, CDDL
    └─ Post-training → DI, DPPL, DAR, DRR, AD, RD, SD, FT, TE
```

🎯 **Memorise this decision tree.** Many MLS-C01 scenario questions resolve to "which metric?", the wrong choice trips many candidates.
