# 📋 Module 8 Cheat Sheet: Evaluation, Tuning & Bias

> Print. Tape. Drill.

---

## 📊 Classification Metrics — One-Liner

| Metric | Use |
|--------|-----|
| **Accuracy** | Balanced classes only |
| **Precision** | FP costly (spam) |
| **Recall** | FN costly (fraud / cancer) |
| **F1** | Imbalanced; need one number |
| **F-beta (β>1)** | Recall-biased |
| **ROC AUC** | Balanced; threshold-free |
| **PR AUC** | ⭐ Imbalanced; threshold-free |
| **Log loss** | Probabilistic; threshold-free |

🚨 Never report only accuracy on imbalanced data.

---

## 📈 Regression Metrics

| Metric | Use |
|--------|-----|
| **MSE / RMSE** | Default; penalise big errors |
| **MAE** | Outlier-robust |
| **MAPE** | % error; interpretable |
| **R²** | % variance explained |
| **Huber** | Outlier-robust + smooth |
| **Quantile / pinball** | Probabilistic intervals (p10/p50/p90) |

---

## 🔁 Cross-Validation Picker

| Data | Method |
|------|--------|
| Standard tabular | K-fold (K=5 or 10) |
| Imbalanced classification | Stratified K-fold |
| Grouped records (patient, customer) | Group K-fold |
| Time series | Walk-forward / expanding window |
| Very tiny | Leave-One-Out |

---

## 🎛️ HPO Strategy

| Strategy | When |
|----------|------|
| **Random** | Small budget; embarrassingly parallel |
| **Grid** | Tiny discrete spaces |
| **Bayesian** (default) | Most cases; learns from trials |
| **Hyperband** | DL with many epochs; prunes early |

`HyperparameterTuner(strategy="Bayesian", max_jobs=50, max_parallel_jobs=5, ...)`

Parameter types: `ContinuousParameter`, `IntegerParameter`, `CategoricalParameter`.

---

## 🔬 Clarify — Bias & SHAP

### Pre-training (Module 3): CI, DPL, KL, JS, Lp, TVD, CDDL
### Post-training (this module):

- **DI** (Disparate Impact) — ratio of positive prediction rates
- **DPPL** — diff in positive prediction rates
- **DAR / DRR** — acceptance / rejection diffs
- **AD / RD / SD** — accuracy / recall / specificity diffs
- **FT** — counterfactual flip test
- **TE** — treatment equality (FP/FN ratio)

### SHAP types

- **TreeSHAP** — exact + fast for XGBoost / RF / LightGBM
- **KernelSHAP** — model-agnostic; slower
- **DeepSHAP** — deep nets

---

## 🤖 LLM Eval

| Metric | For |
|--------|-----|
| **BLEU** | Translation |
| **ROUGE** | Summarisation |
| **BERTScore** | Semantic similarity |
| **Perplexity** | LM quality |
| **MMLU / GSM8K / HumanEval** | Benchmark suites |
| **LLM-as-judge** | Subjective tasks |

**Bedrock Model Evaluation**: automatic / human / model-as-judge.

---

## 🃏 SageMaker Model Card

Sections: Intended use · Out-of-scope use · Training data · Metrics · Risk · Approval status.

Pairs with **Model Registry** approval workflow.

---

## 🚨 Module-8 Top Traps

| Phrase | Right answer |
|--------|-------------|
| "Imbalanced classes, evaluate" | PR-AUC + F1 + precision + recall |
| "FN costly" | Recall / F-beta (β>1) / lower threshold |
| "Time-series CV" | Walk-forward |
| "Explain a denied loan" | Clarify SHAP local |
| "Detect bias across demographic" | Clarify post-training DI/DPPL |
| "Compare 3 Bedrock models" | Bedrock Model Evaluation + ROUGE |
| "Tune DL with many trials, prune" | Hyperband |
| "Tune XGBoost few jobs" | Bayesian |
| "Document model use for regulators" | SageMaker Model Card |
| "Forecast probabilistic intervals" | Quantile loss |
| "Outliers dominate RMSE" | Switch to MAE or Huber |
| "Re-tune on test" | Don't — contamination |

---

## ✏️ Self-Check

1. Imbalanced fraud detector — best metric? ___
2. HPO with smart trials, default = ___
3. HPO for DL with many epochs = ___
4. Per-prediction explanation = ___
5. Post-training bias by demographic = ___
6. Time-series CV method = ___

➡️ [Module 9: MLOps Pipelines & Deployment](../Module-09-MLOps-Pipelines-Deployment/Reading.md)
