# 🧪 Practice Exam 2 — AWS Certified Machine Learning Specialty (MLS-C01)

> **Conditions:** Set an 80-minute timer. 30 questions. No notes.
> **Pass mark for this practice exam:** 23/30 (~76%) — exam-realistic difficulty.
> **When to take it:** After completing Modules 6–10.

---

## 📝 Questions

### 1. To classify 1M customer-support tickets into 12 categories with minimum MLOps:
A. SageMaker BlazingText with custom code
B. Amazon Comprehend Custom Classifier
C. Amazon Forecast
D. Amazon Polly

### 2. To extract drug names and dosages from clinical notes for a HIPAA-eligible workflow:
A. Amazon Comprehend
B. Amazon Comprehend Medical
C. Amazon Translate
D. Amazon Textract

### 3. To translate product descriptions to 12 languages while preserving brand names exactly:
A. Translate with Custom Terminology
B. Polly
C. Lex
D. Translate Active Custom Translation only

### 4. To extract line items and totals from PDF invoices:
A. Textract `AnalyzeExpense`
B. Comprehend
C. Translate
D. Athena

### 5. To build a chatbot that handles intents (BookFlight) with slots (departure, date) for predetermined flows:
A. Bedrock Agent
B. Amazon Lex
C. Amazon Polly
D. Amazon Q in QuickSight

### 6. For an open-ended Q&A assistant grounded in 50,000 internal documents:
A. Lex with hundreds of intents
B. Bedrock Knowledge Base + Claude/Llama + RetrieveAndGenerate
C. Self-managed RAG on EC2
D. Glue ETL

### 7. The DEFAULT vector store for Amazon Bedrock Knowledge Bases:
A. Aurora pgvector
B. Pinecone
C. Amazon OpenSearch Serverless
D. DynamoDB

### 8. To build an assistant that answers policy questions AND calls internal APIs to perform actions:
A. Amazon Lex
B. Amazon Bedrock Agent with action groups + KB
C. SageMaker BlazingText
D. Glue Workflows

### 9. To cost-optimise Bedrock for very large offline batch workloads:
A. On-Demand
B. Provisioned Throughput
C. Batch Inference (~50% cheaper)
D. Switch to Lex

### 10. The Bedrock guardrail feature that verifies the model says only what KB documents support:
A. Topic filter
B. PII filter
C. Contextual grounding check
D. Word filter

### 11. To document a deployed model's intended use, training data, and metrics for compliance:
A. SageMaker Pipelines
B. SageMaker Model Card
C. AWS Config
D. CloudWatch dashboard

### 12. To explain WHY an XGBoost loan model declined a specific application (for a regulator):
A. SageMaker Model Monitor
B. SageMaker Debugger
C. SageMaker Clarify with SHAP (local)
D. CloudTrail

### 13. The MOST appropriate cross-validation method for time-series data:
A. Random K-fold
B. Stratified K-fold
C. Walk-forward / expanding-window
D. Leave-One-Out

### 14. To detect input feature distribution shift after a model is deployed:
A. SageMaker Model Quality monitor
B. SageMaker Data Quality monitor
C. CloudTrail
D. AWS Config

### 15. To test a new model on REAL traffic without affecting users:
A. Shadow variant on the endpoint
B. Blue/Green deployment
C. Production variants at 50/50
D. Lambda routing

### 16. To host 500 customer-specific XGBoost models with sparse traffic each:
A. 500 real-time endpoints
B. Multi-Model Endpoint (MME)
C. Lambda + S3 per call
D. Batch transform

### 17. To trigger automatic retraining when Model Monitor detects drift:
A. Monitor alarm → EventBridge → Lambda → SageMaker Pipeline
B. Manually re-run notebook
C. Glue Workflow
D. CloudFront invalidation

### 18. To pick hyperparameters for a deep-learning job with many trials, pruning unpromising ones early:
A. Bayesian
B. Grid
C. Hyperband
D. Random

### 19. The MOST appropriate metric to maximise when missing a fraud case is far more costly than a false alarm:
A. Specificity
B. Recall (or F-beta with β>1)
C. Accuracy
D. Precision

### 20. To compare three Bedrock models on a summarisation task with reference summaries:
A. Bedrock Model Evaluation with ROUGE metrics
B. SageMaker training job
C. AWS Macie scan
D. AWS Glue ETL

### 21. To restrict a SageMaker training job to read ONLY one S3 bucket prefix:
A. Grant `AmazonSageMakerFullAccess`
B. Custom IAM execution role with `s3:GetObject` on `bucket/prefix/*` plus bucket policy
C. CloudFront origin
D. NAT Gateway

### 22. To prevent a training container from making ANY outbound network calls:
A. Disable CloudWatch
B. `enable_network_isolation=True` AND private subnets with no NAT
C. Use Lex
D. Stop the endpoint

### 23. The MOST cost-effective storage class for ML training data accessed multiple times per week:
A. S3 Standard
B. S3 Glacier Deep Archive
C. S3 One Zone-IA
D. S3 Glacier Flexible Retrieval

### 24. To expose a SageMaker endpoint to on-prem clients without public internet:
A. Public endpoint with IAM SigV4
B. PrivateLink (Interface VPC Endpoint for SageMaker Runtime) + Direct Connect
C. CloudFront
D. Route 53 alias

### 25. To stop wasted SageMaker Studio spend on idle notebooks:
A. Manually monitor users
B. Lifecycle Configuration with idle auto-shutdown
C. Switch to `ml.t2.nano`
D. Disable IAM

### 26. The MOST appropriate AWS service to check continuously whether all endpoints are KMS-encrypted:
A. AWS Config rule
B. CloudWatch Synthetics
C. Macie
D. CloudTrail data events

### 27. To process 500 MB documents through a 10-minute inference job each (not real-time):
A. Real-time endpoint
B. Serverless inference
C. Async inference
D. Lex

### 28. To trace inference latency across Lambda + SageMaker endpoint + DynamoDB:
A. CloudWatch Logs only
B. AWS X-Ray distributed traces
C. AWS Macie
D. AWS Config

### 29. The MOST common cause of "GPU sitting at 25% utilisation during training":
A. Too much GPU memory
B. Network bandwidth oversupply
C. Data loader / I/O bottleneck — fix with more loader workers, FSx Lustre, Pipe mode
D. Too small a model

### 30. A team uses target encoding on a categorical feature applied to the ENTIRE dataset BEFORE splitting train/val. The MOST likely consequence:
A. Faster training
B. Inflated validation metrics due to target leakage
C. Smaller model size
D. Lower bias

---

## 🎯 Answer Key (No Cheating!)

```
1.  B    7.  C    13. C    19. B    25. B
2.  B    8.  B    14. B    20. A    26. A
3.  A    9.  C    15. A    21. B    27. C
4.  A    10. C    16. B    22. B    28. B
5.  B    11. B    17. A    23. A    29. C
6.  B    12. C    18. C    24. B    30. B
```

---

## Detailed answer rationales

**Q1. Answer: B — Comprehend Custom Classifier.** Managed AutoML for document classification; no MLOps overhead.

**Q2. Answer: B — Comprehend Medical.** Medical NER (RxNorm, ICD-10) with HIPAA eligibility.

**Q3. Answer: A — Translate + Custom Terminology.** Custom Terminology forces specific term translations for brand names.

**Q4. Answer: A — Textract `AnalyzeExpense`.** Purpose-built for invoices/receipts.

**Q5. Answer: B — Lex.** Intent + slot model is canonical Lex; for tight predetermined flows.

**Q6. Answer: B — Bedrock KB + RetrieveAndGenerate.** Managed RAG for open-ended Q&A grounded in docs.

**Q7. Answer: C — OpenSearch Serverless.** Default Bedrock KB vector store.

**Q8. Answer: B — Bedrock Agent with action groups + KB.** Multi-step with tools requires Agent.

**Q9. Answer: C — Batch Inference (~50% cheaper).** Cheapest mode for offline LLM workloads.

**Q10. Answer: C — Contextual grounding check.** Verifies output is supported by retrieved KB content.

**Q11. Answer: B — SageMaker Model Card.** Standard structured governance documentation.

**Q12. Answer: C — Clarify SHAP local.** Per-prediction feature attribution for regulatory explanations.

**Q13. Answer: C — Walk-forward / expanding-window.** Never random K-fold on time series; future leakage.

**Q14. Answer: B — Data Quality monitor.** Watches input feature distributions against baseline.

**Q15. Answer: A — Shadow variant.** Mirrors traffic to new model without affecting user response.

**Q16. Answer: B — MME.** Many models per endpoint, loaded on demand.

**Q17. Answer: A — Monitor → EventBridge → Lambda → Pipeline.** Standard retrain-on-drift architecture.

**Q18. Answer: C — Hyperband.** Prunes losing trials early — best for DL with many epochs.

**Q19. Answer: B — Recall (or F-beta β>1).** Recall = TP / (TP+FN); maximising it minimises FN.

**Q20. Answer: A — Bedrock Model Evaluation + ROUGE.** ROUGE is the canonical summarisation metric; Bedrock has built-in eval jobs.

**Q21. Answer: B — Custom IAM role + bucket policy.** Defence in depth — least privilege on both identity and resource.

**Q22. Answer: B — `enable_network_isolation=True` + private no-NAT subnet.** The strongest isolation pattern.

**Q23. Answer: A — S3 Standard.** Hot training data accessed weekly = Standard. Glacier classes have retrieval delays.

**Q24. Answer: B — PrivateLink + Direct Connect.** Standard pattern for on-prem-only endpoint access.

**Q25. Answer: B — Lifecycle Configuration + idle shutdown.** The built-in mechanism for Studio spaces.

**Q26. Answer: A — AWS Config rule.** Continuous compliance check across resources.

**Q27. Answer: C — Async inference.** Designed for large payloads (1 GB) and long jobs (up to 1 h).

**Q28. Answer: B — AWS X-Ray.** Distributed tracing across multiple services.

**Q29. Answer: C — Data loader I/O bottleneck.** GPU starved by slow data delivery. Fix with workers, FSx, Pipe mode.

**Q30. Answer: B — Target leakage; inflated metrics.** Target encoding must be computed inside CV folds to avoid leakage.

---

## 📊 Scoring

| Raw Score | Verdict |
|-----------|---------|
| 27-30 | 🏆 Ready for the Final Mock Exam |
| 23-26 | ✅ Pass; review weak spots; do Final Mock in 3-5 days |
| 19-22 | ⚠️ Borderline; re-read weak modules; retake in a week |
| <19 | 🔁 Re-study Modules 6-10; do not book the real exam yet |

---

## 🔍 Review Process

1. Score; note module of each wrong answer.
2. Re-read the module's Reading + Cheat-Sheet.
3. Flashcard each miss.
4. Wait 3-5 days, then take the Final Mock Exam.

---

➡️ Next: [Final Mock Exam (65 Q / 180 min)](./Final-Mock-Exam.md)
