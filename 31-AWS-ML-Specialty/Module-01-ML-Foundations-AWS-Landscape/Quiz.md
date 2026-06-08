# ✏️ Module 1 Quiz: ML Foundations & The AWS ML Landscape

> **Instructions:** Answer all 25 questions WITHOUT looking at the reading.
> Aim for 20/25 minimum. Time limit: 35 minutes.

> **Bloom's distribution.** Remember 4 (16%) · Understand 6 (24%) · Apply 8 (32%) · Analyze/Evaluate 6 (24%) · Create 1 (4%). MLS-C01 questions are heavily scenario-driven, only ~16% test pure recall.

---

## Questions

### Q1. Which ML family is BEST suited for "predict whether an incoming credit-card transaction is fraudulent (yes/no)"? *(Remember)*
A. Unsupervised clustering
B. Supervised classification
C. Reinforcement learning
D. Dimensionality reduction

---

### Q2. A model achieves 99.6% training accuracy and 71% validation accuracy. The MOST likely problem is: *(Understand)*
A. Underfitting (high bias)
B. Overfitting (high variance)
C. Data leakage between train and test
D. Imbalanced labels

---

### Q3. Which AWS service is BEST described as a *managed AI service for sentiment analysis* with no model training required? *(Remember)*
A. Amazon Comprehend
B. Amazon SageMaker
C. AWS Glue
D. Amazon Bedrock

---

### Q4. A team has 12 million labelled tabular records with 2,800 features and needs the highest accuracy. The MOST appropriate algorithm to try first is: *(Apply)*
A. A 50-layer convolutional neural network
B. K-Means clustering
C. XGBoost (gradient-boosted trees)
D. Linear regression with no regularisation

---

### Q5. Which Well-Architected ML Lens pillar is MOST directly improved by using **Multi-Model Endpoints** in SageMaker? *(Apply)*
A. Operational Excellence
B. Cost Optimization
C. Sustainability
D. Reliability

---

### Q6. A binary classifier on heavily imbalanced data (0.1% positive class) reports 99.9% accuracy. The BEST conclusion is: *(Analyze)*
A. The model is excellent and ready to deploy
B. Accuracy is misleading here, examine precision, recall, F1, and PR-AUC
C. The model needs more training data
D. The labels are wrong

---

### Q7. Which combination BEST matches the scenario "we need to explain *why* the model declined a specific credit application to a regulator"? *(Apply)*
A. SageMaker Model Monitor
B. SageMaker Debugger
C. SageMaker Clarify (SHAP values)
D. CloudWatch Logs Insights

---

### Q8. The "irreducible error" in the bias-variance decomposition refers to: *(Understand)*
A. Errors caused by overly complex models
B. Errors caused by overly simple models
C. Inherent noise in the label that no model can remove
D. Errors from incorrect hyperparameter tuning

---

### Q9. A 5-engineer startup wants to add language translation to its help-centre. The MOST cost-effective and lowest-effort approach is: *(Apply)*
A. Train a custom seq2seq model on SageMaker
B. Fine-tune a Bedrock foundation model
C. Use Amazon Translate (managed)
D. Self-host MarianMT on an EC2 GPU instance

---

### Q10. The cross-entropy loss is the standard choice for: *(Remember)*
A. Regression problems
B. Classification problems
C. Clustering problems
D. Reinforcement-learning policy gradient

---

### Q11. Which is NOT a valid regularisation technique to combat overfitting? *(Understand)*
A. L2 (Ridge) weight decay
B. Dropout
C. Early stopping
D. Increasing the learning rate

---

### Q12. A regression model has heavy-tailed errors with several extreme outliers. The MOST outlier-robust loss function to switch to is: *(Apply)*
A. MSE (mean squared error)
B. MAE (mean absolute error)
C. Cross-entropy
D. Hinge loss

---

### Q13. In the 7-step ML lifecycle, "training, tuning, and selecting the best model" is which step? *(Remember)*
A. Data engineering
B. EDA & feature engineering
C. Modeling
D. Monitoring

---

### Q14. A team's training loss oscillates wildly and never converges. The MOST likely cause is: *(Analyze)*
A. The learning rate is too low
B. The learning rate is too high
C. The training data is too clean
D. The batch size is too small

---

### Q15. Which AWS service is BEST for detecting *unknown* anomalies in streaming time-series data without labelled examples? *(Apply)*
A. SageMaker Linear Learner with class weights
B. SageMaker Random Cut Forest (RCF)
C. Amazon Personalize
D. SageMaker BlazingText

---

### Q16. The PRIMARY purpose of a *validation* set (distinct from train and test) is: *(Understand)*
A. To train the model's weights
B. To tune hyperparameters and select the best model without touching test
C. To deploy the model in production
D. To explain the model's predictions

---

### Q17. A team plans to migrate from monthly retrains to daily retrains and needs automated, versioned, repeatable ML pipelines. The BEST AWS service is: *(Apply)*
A. AWS Step Functions only
B. SageMaker Pipelines + Model Registry
C. CloudWatch Events
D. AWS CodePipeline only

---

### Q18. Which AWS service is BEST suited as a *foundation-model gateway* for building generative-AI applications without training a model? *(Remember)*
A. Amazon SageMaker
B. Amazon Comprehend
C. Amazon Bedrock
D. Amazon Lex

---

### Q19. Capital One's real-time fraud-detection architecture used Multi-Model Endpoints (MME). The PRIMARY benefit of MME over one endpoint per model is: *(Analyze)*
A. Higher per-request latency
B. Better explainability
C. Lower cost when hosting many models with sparse traffic
D. Stronger encryption

---

### Q20. Which inference mode is BEST for very sparse traffic (a few requests per hour) where you want to pay only when invoked? *(Apply)*
A. SageMaker real-time endpoint (always-on)
B. SageMaker serverless inference
C. SageMaker async inference
D. SageMaker batch transform

---

### Q21. The k-fold cross-validation procedure is MOST useful when: *(Apply)*
A. The dataset is so large that one train/val split is sufficient and CV is wasteful
B. The dataset is small and a single train/val split gives noisy estimates
C. The labels are missing
D. The task is reinforcement learning

---

### Q22. Which is the STRONGEST signal in an exam question that points you to a managed L5 service rather than a custom SageMaker model? *(Evaluate)*
A. "the team must own the trained weights"
B. "minimum operational overhead and fastest time to value"
C. "we need a model architecture not in the managed service"
D. "we have 500 GB of proprietary labelled data"

---

### Q23. A model exhibits *both* high training error and high validation error. The MOST likely diagnosis is: *(Analyze)*
A. High variance (overfitting)
B. High bias (underfitting)
C. Data leakage
D. Excellent generalisation

---

### Q24. Which AWS layer is BEST suited for running a custom proprietary foundation model behind your own VPC with PrivateLink? *(Analyze)*
A. Amazon Q in QuickSight (L7)
B. SageMaker JumpStart or Bedrock with VPC endpoints (L4 / L6)
C. Amazon Comprehend (L5)
D. AWS Glue (L1)

---

### Q25. A car-insurance company wants to *recommend* the optimal premium for each new applicant. The output is a continuous dollar amount. The BEST framing is: *(Create)*
A. Binary classification
B. Multi-class classification
C. Regression
D. Reinforcement learning

---

## 🎯 Answers + Explanations

### Q1: **B. Supervised classification**
Discrete two-class output (fraud / not fraud) with labelled history = supervised binary classification. RCF (anomaly detection) is a valid alternative *if* labels were sparse, but classification dominates when labels are available.

### Q2: **B. Overfitting (high variance)**
Huge gap between training and validation accuracy is the textbook overfit signature. Fix with regularisation, more data, simpler model, early stopping, or dropout (for neural nets).

### Q3: **A. Amazon Comprehend**
Comprehend is the managed NLP service that provides sentiment, entity, key-phrase, language detection, and custom classifiers as APIs. SageMaker is the platform; Bedrock is the generative-AI gateway; Glue is data ETL.

### Q4: **C. XGBoost**
Tabular data with millions of rows and thousands of features is the prototype XGBoost use case, beats deep nets on most tabular benchmarks. CNNs are for images, K-Means is unsupervised, and unregularised linear regression on 2,800 features will overfit instantly.

### Q5: **B. Cost Optimization**
MME hosts many models on one endpoint, reducing per-model hosting cost, directly cost-optimising. Reliability and sustainability benefit indirectly but cost is the primary headline.

### Q6: **B. Examine precision, recall, F1, and PR-AUC**
On 0.1% positive class, a "predict negative always" classifier achieves 99.9% accuracy. Accuracy is meaningless; precision / recall / F1 / PR-AUC tell the real story.

### Q7: **C. SageMaker Clarify (SHAP values)**
Clarify produces SHAP feature-importance per prediction, the standard for regulator-acceptable explanations. Model Monitor tracks drift; Debugger inspects training-time tensors; Logs Insights is for raw log queries.

### Q8: **C. Inherent noise in the label**
Irreducible error is the noise floor, no model can do better. Bias and variance can be traded off; noise cannot be removed without better labels.

### Q9: **C. Use Amazon Translate (managed)**
Managed service for translation = no model training, no infra, billed per character. SageMaker / Bedrock fine-tuning is overkill for a 5-engineer team's help centre.

### Q10: **B. Classification problems**
Cross-entropy is the canonical loss for probabilistic classification (binary and multi-class). Regression uses MSE/MAE; clustering minimises intra-cluster distance; RL uses policy-gradient or value-based losses.

### Q11: **D. Increasing the learning rate**
LR is not a regularisation tool, a higher LR can destabilise training and is not a principled way to reduce overfit. L2, dropout, and early stopping are all valid regularisers.

### Q12: **B. MAE**
MAE penalises all errors linearly so a few extreme outliers do not dominate. MSE squares errors and is dominated by outliers. (Huber loss is the in-between option for completeness.)

### Q13: **C. Modeling**
Step 4 in the 7-step lifecycle is modelling: train, tune, evaluate against validation. Steps 1-3 prepare data; step 5 is evaluation; step 6 is deployment.

### Q14: **B. The learning rate is too high**
Oscillating / diverging loss is the canonical too-high-LR symptom. Fix: lower LR, add LR warmup, add LR scheduler with decay.

### Q15: **B. SageMaker Random Cut Forest**
RCF is an unsupervised anomaly detector designed for streaming and time-series. Linear Learner needs labels; Personalize is for recommendations; BlazingText is for text.

### Q16: **B. To tune hyperparameters and select the best model without touching test**
Validation tunes hyperparameters; test gives the unbiased final estimate. If you tune on test, you leak.

### Q17: **B. SageMaker Pipelines + Model Registry**
SageMaker Pipelines is the native, ML-aware CI/CD; Model Registry versions trained models. Step Functions and CodePipeline can do generic orchestration but are not ML-aware out of the box.

### Q18: **C. Amazon Bedrock**
Bedrock is AWS's foundation-model gateway: Claude, Llama, Mistral, Titan, Cohere, all behind one API. SageMaker is the ML platform; Comprehend is NLP-as-a-service; Lex is chatbot intents.

### Q19: **C. Lower cost when hosting many models with sparse traffic**
MME loads models into memory on-demand, multiplexing many models on one endpoint. The trade-off: cold-start latency on first invocation. Each model still has its own weights, explainability is unaffected.

### Q20: **B. SageMaker serverless inference**
Serverless inference scales to zero and bills per request, ideal for sparse traffic. Real-time is always-on (costly when idle); async is for hours-long requests; batch is for offline batches.

### Q21: **B. The dataset is small and a single split is noisy**
K-fold CV averages out the split noise. With huge datasets, a single train/val split is sufficient and K-fold wastes compute.

### Q22: **B. "minimum operational overhead and fastest time to value"**
The "minimum operational overhead" keyword pattern always points to a managed service over a custom build. "Must own weights" or "custom architecture" point the other way.

### Q23: **B. High bias (underfitting)**
Both errors high = the model is too simple to capture the pattern. Fix: more features, deeper model, less regularisation, longer training.

### Q24: **B. SageMaker JumpStart or Bedrock with VPC endpoints**
SageMaker JumpStart lets you deploy foundation models inside your VPC; Bedrock supports VPC endpoints (PrivateLink) so traffic never crosses the public internet. Comprehend / Q in QuickSight are managed services that do not run "in your VPC" the same way.

### Q25: **C. Regression**
Continuous dollar output = regression. (You could discretise into bands and frame it as classification, but the question says "continuous dollar amount", regression.)

---

## 📊 Score Yourself

- 24–25/25 → 🏆 You've mastered Module 1. Move to Module 2!
- 20–23/25 → ✅ Solid. Note your wrong answers and move on.
- 16–19/25 → ⚠️ Re-read the sections you missed, then re-quiz tomorrow.
- <16/25 → 🔁 Re-read the entire Reading.md and re-watch the StatQuest "Three Families" + "Bias-Variance" videos.

---

## 🃏 Add To Your Flashcards

- The 3 families of ML (and one algorithm each)
- The 6 evaluation metrics (accuracy / precision / recall / F1 / ROC-AUC / PR-AUC) and when to use each
- The 7-step ML lifecycle (Business → Data → EDA → Model → Eval → Deploy → Monitor)
- The 7-layer AWS ML stack (L1 Data → L7 Q applications)
- Symptoms and fixes for over- and underfitting
- The 4 inference modes (real-time / serverless / async / batch) and when each is the right answer
- "Most cost-effective" = cheapest that still meets the requirements
- "Minimum operational overhead" = managed service signal

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md) for one-page review, then [Module 2: Data Engineering for ML](../Module-02-Data-Engineering-ML/Reading.md)
