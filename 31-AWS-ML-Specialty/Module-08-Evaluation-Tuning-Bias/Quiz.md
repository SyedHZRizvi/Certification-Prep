# ✏️ Module 8 Quiz: Evaluation, Tuning & Bias

> 24 questions. Aim 20+/24. 35 min.

---

## Questions

### Q1. A binary fraud classifier on 99.8% negatives shows 99.7% accuracy. The BEST metric to report instead is: *(Apply)*
A. Accuracy on a held-out test
B. PR-AUC + precision + recall + F1
C. R²
D. RMSE

---

### Q2. A regression model needs probabilistic forecasts at p10 / p50 / p90. The right loss is: *(Apply)*
A. MSE
B. MAE
C. Quantile (pinball) loss
D. Cross-entropy

---

### Q3. To pick hyperparameters with the FEWEST training jobs and learn from previous trials: *(Apply)*
A. Grid search
B. Random search
C. Bayesian optimisation (default SageMaker HPO)
D. Brute force

---

### Q4. To prune unpromising deep-learning trials early and focus compute on the best, the best HPO strategy is: *(Apply)*
A. Grid
B. Random
C. Bayesian
D. Hyperband

---

### Q5. To explain WHY a particular loan application was denied by an XGBoost model (to a regulator): *(Apply)*
A. SageMaker Model Monitor
B. SageMaker Debugger
C. SageMaker Clarify with SHAP (local explanation)
D. AWS Config

---

### Q6. Time-series cross-validation should use: *(Apply)*
A. Random K-fold
B. Walk-forward / expanding-window split
C. Leave-One-Out
D. Stratified K-fold

---

### Q7. The MOST appropriate metric to maximise when FALSE NEGATIVES are very costly (e.g. missing a cancer case): *(Apply)*
A. Specificity
B. Recall (or F-beta with β>1)
C. Accuracy
D. Precision

---

### Q8. A Clarify post-training bias metric that measures disparity in positive-prediction rates between facets is: *(Remember)*
A. RMSE
B. Disparate Impact (DI)
C. ROC AUC
D. BLEU

---

### Q9. The PRIMARY danger of using the test set repeatedly to retune hyperparameters is: *(Analyze)*
A. Faster training
B. Contaminated test metric — final evaluation is over-optimistic
C. Lower precision
D. None

---

### Q10. K-fold cross-validation with grouped records (e.g. multiple visits per patient) should use: *(Apply)*
A. Standard K-fold
B. Stratified K-fold
C. Group K-fold
D. LOO

---

### Q11. To compare three Bedrock models on a summarisation task with reference summaries: *(Apply)*
A. Bedrock Model Evaluation with ROUGE metrics (and optionally human eval)
B. Run a SageMaker training job
C. Use Polly
D. Use Translate

---

### Q12. The metric `2·P·R / (P + R)` is: *(Remember)*
A. Accuracy
B. F1 score
C. AUC
D. Cross-entropy

---

### Q13. A SageMaker Model Card primarily serves to: *(Understand)*
A. Train the model
B. Document intended use, training data, metrics, limitations, and approval status for governance
C. Replace SageMaker Pipelines
D. Encrypt model artifacts

---

### Q14. The PRIMARY trade-off between Random and Bayesian HPO is: *(Analyze)*
A. Bayesian always wins
B. Random is embarrassingly parallel and equally good at very small budgets; Bayesian uses prior trials and wins at moderate budgets
C. They are identical
D. Random uses more memory

---

### Q15. To document a model's intended use and out-of-scope use cases in a standard format: *(Apply)*
A. CloudWatch dashboard
B. SageMaker Model Card
C. SageMaker Pipeline
D. CloudTrail

---

### Q16. When ROUGE is the right LLM metric: *(Understand)*
A. Image classification
B. Summarisation
C. Time-series forecasting
D. Anomaly detection

---

### Q17. A regression model has a few extreme outliers that dominate RMSE. The BEST switch is: *(Apply)*
A. From RMSE to MAE or Huber loss
B. From MAE to RMSE
C. From RMSE to accuracy
D. Drop the loss function entirely

---

### Q18. When PR-AUC is preferred over ROC-AUC: *(Understand)*
A. On balanced classes
B. On highly imbalanced classes (positive class very rare)
C. Always
D. Never

---

### Q19. A model is deployed; over time, the approval rate for one demographic group rises while another falls — likely "bias drift". The MOST appropriate detection is: *(Apply)*
A. CloudTrail
B. SageMaker Model Monitor + Clarify (bias drift) — see Module 9
C. SageMaker Debugger
D. CloudWatch Logs

---

### Q20. SHAP TreeSHAP is BEST for: *(Apply)*
A. Random Forest / XGBoost / LightGBM
B. Deep neural networks
C. Linear regression
D. K-Means clustering

---

### Q21. SHAP DeepSHAP is BEST for: *(Apply)*
A. Tree ensembles
B. Deep neural networks
C. Linear regression
D. PCA

---

### Q22. The MAIN reason to add early stopping during HPO is: *(Understand)*
A. Save GPU memory
B. Stop unproductive trials before consuming the full budget
C. Improve accuracy
D. Encrypt models

---

### Q23. The MAIN reason a confusion matrix is more informative than accuracy alone is: *(Evaluate)*
A. It shows the FOUR underlying counts (TP / FP / TN / FN) so you can compute any metric and see *how* the model errs
B. It runs faster
C. It is encrypted
D. It is automatic in SageMaker

---

### Q24. To define an HPO search space with integer values from 50 to 500 for `num_round`: *(Apply)*
A. `ContinuousParameter(50, 500)`
B. `IntegerParameter(50, 500)`
C. `CategoricalParameter([50, 100, 500])`
D. `StringParameter("50-500")`

---

## 🎯 Answers + Explanations

### Q1: **B. PR-AUC + precision + recall + F1**
Accuracy is meaningless at 99.8% negatives. PR-AUC + class-specific metrics tell the real story.

### Q2: **C. Quantile (pinball) loss**
Used by DeepAR / Amazon Forecast / quantile regression for probabilistic intervals.

### Q3: **C. Bayesian optimisation**
Builds a surrogate model of the objective; chooses next trial based on previous results.

### Q4: **D. Hyperband**
Aggressively prunes unpromising trials by allocating more compute to promising ones.

### Q5: **C. Clarify SHAP**
Per-prediction feature attribution; the canonical regulator-acceptable explanation.

### Q6: **B. Walk-forward / expanding-window**
Time order must be preserved. Random K-fold leaks future into past.

### Q7: **B. Recall (or F-beta with β>1)**
Recall = TP / (TP + FN); maximising it minimises false negatives.

### Q8: **B. Disparate Impact (DI)**
Ratio of positive prediction rates between facets; a standard Clarify post-training metric.

### Q9: **B. Contaminated test metric**
Repeated reuse leaks information into hyperparameter choices.

### Q10: **C. Group K-fold**
Keep all of a group's records in one fold to avoid leakage.

### Q11: **A. Bedrock Model Evaluation with ROUGE**
ROUGE is the standard summarisation metric; Bedrock has a built-in evaluation job.

### Q12: **B. F1**
The harmonic mean of precision and recall.

### Q13: **B. Document intended use, data, metrics, limitations**
Governance and compliance documentation.

### Q14: **B. Random is parallel/competitive at small budgets; Bayesian wins at moderate budgets**
Both have valid use cases; Bayesian's learning-from-trials wins as budget grows.

### Q15: **B. SageMaker Model Card**
The standard structured documentation in the Model Registry.

### Q16: **B. Summarisation**
ROUGE measures n-gram recall vs reference summaries.

### Q17: **A. RMSE → MAE or Huber**
Both are outlier-robust. Huber is smooth like MSE for small errors, MAE for large.

### Q18: **B. Highly imbalanced classes**
PR-AUC remains informative on imbalanced data where ROC-AUC misleads.

### Q19: **B. Model Monitor + Clarify (bias drift)**
Module 9 deepens this — production bias monitoring is Clarify integrated with Model Monitor.

### Q20: **A. Tree ensembles**
TreeSHAP is exact and fast for trees.

### Q21: **B. Deep neural networks**
DeepSHAP / DeepLIFT-based approximation for DNNs.

### Q22: **B. Stop unproductive trials**
Early stopping (or Hyperband) saves compute on losing trials.

### Q23: **A. The four counts**
Confusion matrix is the foundation — any classification metric derives from it, and the *type* of error matters.

### Q24: **B. `IntegerParameter(50, 500)`**
SageMaker HPO has Integer / Continuous / Categorical parameter types.

---

## 📊 Score

- 22-24 → 🏆
- 19-21 → ✅
- 15-18 → ⚠️ Re-read metrics + Clarify
- <15 → 🔁 Restart Module 8

---

## 🃏 Add to flashcards

- Classification metric table (accuracy / precision / recall / F1 / ROC / PR / log loss)
- Regression metric table (RMSE / MAE / MAPE / R² / Huber / quantile)
- HPO strategies (Bayesian / Random / Grid / Hyperband)
- Pre- vs post-training Clarify bias metrics
- SHAP: global vs local; TreeSHAP / KernelSHAP / DeepSHAP
- Cross-validation variants (K-fold / stratified / group / walk-forward)
- Model Card sections and purpose
- "Lower threshold" trick for FN-costly problems

➡️ [Cheat-Sheet.md](./Cheat-Sheet.md) → [Module 9](../Module-09-MLOps-Pipelines-Deployment/Reading.md)
