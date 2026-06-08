# 🧪 Final Mock Exam, AWS Certified Machine Learning Specialty (MLS-C01)

> **Conditions:** Set a **180-minute** timer. **65 questions.** **REAL exam length & time.** No notes, no Google, no breaks. This is your dress rehearsal.
> **Pass mark:** 49/65 (~75%), mirrors the real 750/1000 scaled score.
> **When to take it:** 1–2 days before the real exam.

---

## 📝 Questions

### 1. A bank wants to detect anomalies in real-time card-swipe data without labelled fraud examples. The BEST SageMaker built-in is:
A. XGBoost classifier
B. SageMaker Random Cut Forest
C. K-Means
D. seq2seq

### 2. To stream JSON clickstream events into S3 as Parquet with NO custom code:
A. Kinesis Data Streams + custom Lambda
B. Glue ETL job
C. Kinesis Data Firehose with format conversion (Glue table schema)
D. Amazon SQS

### 3. A tabular dataset has 99.8% negatives. The BEST evaluation metrics:
A. Accuracy
B. PR-AUC, recall, F1
C. ROC-AUC alone
D. RMSE

### 4. To reduce SageMaker training cost on a long fault-tolerant XGBoost job:
A. RI 3-year
B. Spot training + S3 checkpointing
C. Dedicated Hosts
D. CPU-only

### 5. To stream a 5 TB training dataset to a training container WITHOUT copying to disk first:
A. File mode
B. Pipe mode + RecordIO-protobuf
C. Increase memory
D. Athena Federated

### 6. Sub-100ms feature lookups AND historical training snapshots, best design:
A. Redis cluster
B. SageMaker Feature Store online + offline
C. DynamoDB only
D. CSV on EFS

### 7. To surface a 65% vs 38% approval-rate disparity BEFORE training:
A. SageMaker Model Monitor
B. SageMaker Clarify pre-training bias report
C. CloudTrail
D. SageMaker Debugger

### 8. To train a 70B-parameter LLM whose weights do NOT fit on one GPU:
A. SMDDP
B. SMMP (tensor + pipeline + sharded-data)
C. Canvas
D. CPU

### 9. The MOST cost-effective inference for a high-traffic LLM on AWS:
A. P4d A100
B. Inferentia2 + Neuron
C. Trainium
D. T3

### 10. To encrypt S3 model artifacts with a key whose use is audited per-request in CloudTrail:
A. SSE-S3
B. SSE-KMS with customer-managed key
C. SSE-C
D. No encryption + bucket policy

### 11. To detect PII in your training-data S3 bucket:
A. Amazon Macie
B. AWS Config
C. AWS X-Ray
D. CloudTrail

### 12. Multi-node DL training scales poorly past 4 nodes. MOST likely fix:
A. Batch size = 1
B. Enable EFA networking
C. Disable mixed precision
D. Smaller instance

### 13. For ad CTR prediction with millions of sparse one-hot features:
A. Image Classification
B. Factorization Machines
C. DeepAR
D. LDA

### 14. To pick hyperparameters with the FEWEST training jobs:
A. Grid
B. Random
C. Bayesian
D. Manual

### 15. To find unusual (user, IP) pairs for account takeover:
A. SageMaker IP Insights
B. Linear Learner
C. Image Classification
D. Polly

### 16. To bootstrap a templated MLOps repo with CodePipeline + Pipelines + Registry:
A. SageMaker Projects
B. SageMaker Canvas
C. Manual CodePipeline
D. Glue Workflows

### 17. To forecast 5,000 SKUs probabilistically (p10/p50/p90):
A. ARIMA per SKU
B. DeepAR (or Amazon Forecast managed)
C. K-Means
D. Linear Learner

### 18. The BEST default file format for ML training data on S3:
A. CSV + gzip
B. JSON Lines
C. Apache Parquet (columnar, Snappy, partitioned)
D. XML

### 19. To migrate 2 PB from on-prem to S3 in 8 weeks:
A. DataSync over internet
B. Snowball Edge cluster
C. DMS with CDC
D. CloudFront upload

### 20. To train with a custom Dockerfile of your own design:
A. Built-in only
B. BYO container in ECR
C. Lambda
D. Glue ETL

### 21. The HIGHEST-impact Athena cost-reduction move on raw JSON:
A. Move to Glacier
B. Convert to Parquet + partition + project
C. Increase Athena timeout
D. Federated Query

### 22. To use a custom PyTorch model with AWS-managed container (no Dockerfile):
A. BYO container
B. Script mode with PyTorch container
C. Lambda
D. Built-in only

### 23. To learn dense embeddings for 40,000 zip codes as features for a DNN:
A. One-hot
B. Ordinal 1..40000
C. Learned embedding layer or Object2Vec
D. PCA

### 24. SageMaker Data Wrangler is BEST described as:
A. No-code visual data prep with 300+ transforms; Pipelines export
B. A NoSQL DB
C. SageMaker training service
D. SQL editor

### 25. "Minimum operational overhead" sentiment analysis on customer reviews:
A. Train BlazingText
B. Comprehend `DetectSentiment`
C. SageMaker XGBoost
D. Bedrock custom

### 26. Default vector store for Amazon Bedrock Knowledge Bases:
A. Aurora pgvector
B. Pinecone
C. OpenSearch Serverless
D. DynamoDB

### 27. To detect bias drift in a deployed model over time:
A. CloudTrail
B. SageMaker Model Bias monitor (Clarify-powered)
C. SageMaker Debugger
D. AWS Config

### 28. The MOST appropriate cross-validation method for time series:
A. Random K-fold
B. Stratified K-fold
C. Walk-forward / expanding window
D. Leave-One-Out

### 29. To test a new model on REAL traffic without user impact:
A. Shadow variant
B. Blue/Green
C. Production variants 50/50
D. Lambda routing

### 30. To host 500 customer-specific XGBoost models with sparse traffic:
A. 500 real-time endpoints
B. Multi-Model Endpoint (MME)
C. Lambda + S3 per call
D. Batch transform

### 31. Auto-retrain trigger when Model Monitor detects drift:
A. Monitor alarm → EventBridge → Lambda → Pipeline
B. Manual notebook
C. Glue Workflow
D. CloudFront invalidation

### 32. To pick DL hyperparameters with many trials, pruning unpromising early:
A. Bayesian
B. Grid
C. Hyperband
D. Random

### 33. The MOST appropriate metric when MISSING a fraud case is far more costly than a false alarm:
A. Specificity
B. Recall (or F-beta β>1)
C. Accuracy
D. Precision

### 34. To compare three Bedrock models on summarisation with reference summaries:
A. Bedrock Model Evaluation + ROUGE
B. SageMaker training job
C. Macie scan
D. Glue ETL

### 35. To restrict a SageMaker training job to read ONLY one S3 prefix:
A. AmazonSageMakerFullAccess
B. Custom IAM role with `s3:GetObject` on `bucket/prefix/*` + bucket policy
C. CloudFront origin
D. NAT Gateway

### 36. To block ALL outbound network calls from a training container:
A. Disable CloudWatch
B. `enable_network_isolation=True` + private subnets no NAT
C. Use Lex
D. Stop endpoint

### 37. Cost-effective storage class for ML training data accessed several times per week:
A. S3 Standard
B. Glacier Deep Archive
C. One Zone-IA
D. Glacier Flexible

### 38. To expose a SageMaker endpoint to on-prem clients only (no public internet):
A. Public endpoint + SigV4
B. PrivateLink (Interface Endpoint for SageMaker Runtime) + Direct Connect
C. CloudFront
D. Route 53 alias

### 39. To stop wasted Studio idle spend:
A. Manually monitor users
B. Lifecycle Configuration with idle auto-shutdown
C. Switch to `ml.t2.nano`
D. Disable IAM

### 40. Continuous compliance verification that endpoints are KMS-encrypted:
A. AWS Config rule
B. CloudWatch Synthetics
C. Macie
D. CloudTrail data events

### 41. To process 500 MB documents through 10-minute inference jobs:
A. Real-time endpoint
B. Serverless inference
C. Async inference
D. Lex

### 42. To trace inference latency across Lambda + endpoint + DynamoDB:
A. CloudWatch Logs only
B. AWS X-Ray distributed traces
C. Macie
D. Config

### 43. Why is "GPU at 25% utilisation during training" typically NOT a GPU issue?
A. Too much GPU memory
B. Network oversupply
C. Data loader / I/O bottleneck, fix with FSx Lustre, Pipe mode, more loader workers
D. Model too small

### 44. Target encoding applied to the ENTIRE dataset before train/val split:
A. Faster training
B. Inflated validation metrics due to target leakage
C. Smaller model
D. Lower bias

### 45. To classify 1M support tickets into 12 categories with minimal MLOps:
A. SageMaker BlazingText
B. Comprehend Custom Classifier
C. Amazon Forecast
D. Polly

### 46. To extract drug names + dosages from clinical notes (HIPAA-eligible):
A. Comprehend
B. Comprehend Medical
C. Translate
D. Textract

### 47. To translate product descriptions to 12 languages keeping brand names:
A. Translate + Custom Terminology
B. Polly
C. Lex
D. Translate ACT alone

### 48. To extract line items + totals from PDF invoices:
A. Textract `AnalyzeExpense`
B. Comprehend
C. Translate
D. Athena

### 49. To build a chatbot with intents and slots (BookFlight, departure, date):
A. Bedrock Agent
B. Amazon Lex
C. Polly
D. Q in QuickSight

### 50. To build an open-ended Q&A bot grounded in 50K internal docs:
A. Lex with hundreds of intents
B. Bedrock KB + Claude + RetrieveAndGenerate
C. Self-managed RAG
D. Glue ETL

### 51. To build an assistant that answers AND calls internal APIs for actions:
A. Lex
B. Bedrock Agent + action groups + KB
C. BlazingText
D. Glue

### 52. To cost-optimise Bedrock for offline batch LLM workloads:
A. On-Demand
B. Provisioned Throughput
C. Batch Inference (~50% off)
D. Lex

### 53. The Bedrock guardrail that ensures output is supported by KB:
A. Topic filter
B. PII filter
C. Contextual grounding
D. Word filter

### 54. To document a model's intended use + metrics for compliance:
A. Pipelines
B. SageMaker Model Card
C. AWS Config
D. CloudWatch dashboard

### 55. To explain a specific declined loan decision to a regulator:
A. Model Monitor
B. Debugger
C. Clarify SHAP local
D. CloudTrail

### 56. To detect input feature distribution shift in production:
A. Model Quality monitor
B. Data Quality monitor
C. CloudTrail
D. AWS Config

### 57. The MAIN reason multi-node DL training needs EFA:
A. Encryption at rest
B. Sub-microsecond OS-bypass HPC-grade networking for fast all-reduce
C. Easier IAM
D. Cheaper internet egress

### 58. Cost-optimal AWS chip for training a 7B-param model:
A. NVIDIA V100
B. Trainium (trn1/trn2)
C. T3
D. Inferentia (inference, not training)

### 59. To reduce labelling cost on a 1M-image classification project:
A. Mechanical Turk only
B. SageMaker Ground Truth + active learning (auto-labels easy examples)
C. Glue ETL
D. Canvas

### 60. The PRIMARY reason a Bedrock Knowledge Base reduces LLM hallucination:
A. It fine-tunes the model
B. It retrieves source documents at query time so the LLM grounds answers in those passages
C. It encrypts data
D. It blocks long prompts

### 61. To deploy a model with auto-rollback if 5xx rate exceeds 5%:
A. All-at-once
B. Blue/Green with CloudWatch alarm rollback
C. Disable auto-scaling
D. Lambda triggers only

### 62. The Pipelines step that registers a model in Model Registry:
A. ConditionStep
B. LambdaStep
C. RegisterModel
D. FailStep

### 63. To enable cross-account sharing of a SageMaker Model Package:
A. Copy artifact manually
B. AWS Resource Access Manager (RAM) sharing of the Model Package
C. CloudTrail
D. Glue Crawler

### 64. A common cause of NaN losses partway through transformer training:
A. Bigger batch size
B. Learning rate too high or no gradient clipping (norm 1.0)
C. Too small a model
D. Mixed precision disabled

### 65. To select the cost-optimal inference instance type for a given latency target:
A. AWS Cost Explorer
B. SageMaker Inference Recommender
C. Compute Optimizer
D. CloudWatch Metrics

---

## 🎯 Answer Key (No Cheating!)

```
1.  B    14. C    27. B    40. A    53. C
2.  C    15. A    28. C    41. C    54. B
3.  B    16. A    29. A    42. B    55. C
4.  B    17. B    30. B    43. C    56. B
5.  B    18. C    31. A    44. B    57. B
6.  B    19. B    32. C    45. B    58. B
7.  B    20. B    33. B    46. B    59. B
8.  B    21. B    34. A    47. A    60. B
9.  B    22. B    35. B    48. A    61. B
10. B    23. C    36. B    49. B    62. C
11. A    24. A    37. A    50. B    63. B
12. B    25. B    38. B    51. B    64. B
13. B    26. C    39. B    52. C    65. B
```

---

## Detailed answer rationales (selected, full set inferable from Modules)

**Q1. B, Random Cut Forest.** Unsupervised anomaly detection on tabular/streaming data. Same answer as Module 4.

**Q2. C, Firehose with format conversion.** Built-in JSON→Parquet via Glue table schema; no code.

**Q3. B, PR-AUC, recall, F1.** On 0.2% positives, accuracy/ROC-AUC mislead.

**Q4. B, Spot + checkpointing.** Up to 90% off; the standard cost lever.

**Q5. B, Pipe mode + RecordIO-protobuf.** Streams data via FIFO; no upfront disk copy.

**Q6. B, Feature Store online + offline.** Dual-mode store; the MLS-C01 canonical answer.

**Q7. B, Clarify pre-training bias.** Surfaces dataset disparities before any training.

**Q8. B SMMP.** 70B model needs model parallelism tensor + pipeline + sharded-data.

**Q9. B, Inferentia2.** Cost-optimal LLM inference chip; compiled with Neuron.

**Q10. B, SSE-KMS customer-managed key.** Per-request CloudTrail audit only with KMS + customer-managed.

**Q11. A, Macie.** PII discovery in S3.

**Q12. B, Enable EFA.** HPC-grade networking for fast all-reduce.

**Q13. B, Factorization Machines.** Sparse high-dim CTR built-in.

**Q14. C, Bayesian.** Learns from prior trials; fewest jobs to reach good HPs.

**Q15. A, IP Insights.** Purpose-built for user-IP anomaly detection.

**Q16. A, SageMaker Projects.** Templated MLOps repo with CodeCommit + CodePipeline + Pipelines + Registry + endpoints.

**Q17. B, DeepAR.** Multi-series probabilistic forecasting (or Amazon Forecast managed).

**Q18. C, Parquet.** Columnar + compressed + splittable + schema-aware = ML default.

**Q19. B, Snowball Edge cluster.** 2 PB / 8 weeks impractical online; ship disks.

**Q20. B, BYO container in ECR.** Custom Dockerfile path.

**Q21. B, Parquet + partition + project.** 5-50× Athena cost reduction.

**Q22. B, Script mode with PyTorch container.** AWS-managed container + your `train.py`; no Dockerfile.

**Q23. C, Learned embedding (or Object2Vec).** Dense vectors; 40K one-hot would blow up.

**Q24. A, Visual data prep w/ 300+ transforms; Pipelines export.** Data Wrangler's defining capabilities.

**Q25. B, Comprehend `DetectSentiment`.** Managed; lowest overhead.

**Q26. C, OpenSearch Serverless.** Default Bedrock KB vector store.

**Q27. B, Model Bias monitor (Clarify).** Production bias drift detection.

**Q28. C, Walk-forward / expanding-window.** Time order preserved; no future leakage.

**Q29. A, Shadow variant.** Real traffic mirrored to new model without user impact.

**Q30. B, Multi-Model Endpoint.** Many models per endpoint, loaded on demand.

**Q31. A, Monitor → EventBridge → Lambda → Pipeline.** Standard retrain-on-drift chain.

**Q32. C, Hyperband.** Prunes losing DL trials early.

**Q33. B, Recall (or F-beta β>1).** Recall = TP / (TP+FN); maximising it minimises FN.

**Q34. A, Bedrock Model Evaluation + ROUGE.** ROUGE for summarisation; built-in eval job.

**Q35. B, Custom IAM role + bucket policy.** Defence in depth.

**Q36. B, `enable_network_isolation=True` + no-NAT subnets.** Strongest training-job isolation.

**Q37. A, S3 Standard.** Active multi-times-per-week data is hot.

**Q38. B, PrivateLink + Direct Connect.** On-prem-only endpoint pattern.

**Q39. B, Lifecycle config idle shutdown.** Standard Studio cost-control.

**Q40. A, AWS Config rule.** Continuous compliance check.

**Q41. C, Async inference.** 1 GB payload + up to 1 h.

**Q42. B, X-Ray.** Distributed tracing across services.

**Q43. C, Data loader / I/O bottleneck.** Almost always the GPU-underutilisation root cause.

**Q44. B, Target leakage.** Inflates validation metrics; compute target encoding inside CV folds.

**Q45. B, Comprehend Custom Classifier.** Managed; minimal MLOps.

**Q46. B, Comprehend Medical.** Medical NER + HIPAA-eligible.

**Q47. A, Translate + Custom Terminology.** Force specific brand terms.

**Q48. A, Textract `AnalyzeExpense`.** Purpose-built for invoices.

**Q49. B, Lex.** Intent+slot for predetermined flows.

**Q50. B, Bedrock KB + Claude + RetrieveAndGenerate.** Open-ended Q&A grounded in docs.

**Q51. B, Bedrock Agent.** Multi-step tools + KB.

**Q52. C, Batch Inference.** ~50% off for offline.

**Q53. C, Contextual grounding.** Verifies output supported by retrieved docs.

**Q54. B, SageMaker Model Card.** Standard governance documentation.

**Q55. C, Clarify SHAP local.** Per-prediction feature attribution.

**Q56. B, Data Quality monitor.** Input distribution drift.

**Q57. B, HPC-grade networking for fast all-reduce.** EFA's defining feature.

**Q58. B, Trainium.** Cost-optimal AWS training chip.

**Q59. B, Ground Truth + active learning.** Auto-labels easy examples; humans focus on hard ones.

**Q60. B, Retrieves source docs at query time.** RAG grounds answers in retrieved passages.

**Q61. B, Blue/Green + CloudWatch alarm rollback.** Built-in SageMaker auto-rollback pattern.

**Q62. C, RegisterModel.** Dedicated Pipelines step for Model Registry.

**Q63. B, AWS RAM.** Cross-account Model Package sharing.

**Q64. B, LR too high or no gradient clipping.** Classic transformer training instability.

**Q65. B, SageMaker Inference Recommender.** Auto-benchmarks instance types for cost/latency targets.

---

## 📊 Scoring (mirror MLS-C01 scaled-score logic)

| Raw Score | Approx. Scaled | Verdict |
|-----------|----------------|---------|
| 60-65 | 900+ | 🏆 You're more than ready, go book the exam |
| 49-59 | 750-890 | ✅ Pass; review weak spots; book the exam this week |
| 39-48 | 600-740 | ⚠️ Borderline, wait a few days, drill flashcards, retest |
| <39 | <600 | 🔁 Re-study weak modules; don't book yet |

---

## 🔍 Review Process

1. Take the exam under realistic conditions: 180-minute timer, no notes, no breaks.
2. Score yourself.
3. For each wrong answer:

   - Note the module
   - Re-read the Reading + Cheat-Sheet
   - Add a flashcard
4. Wait 3+ days, then retake. Goal: **49+/65** before booking.

---

## 🏁 The Day Before The Real Exam

- 📋 Re-read every module's Cheat-Sheet (10 docs, ~15 min)
- 🃏 Run through Flashcards once (15-20 min)
- 🛌 Sleep 8+ hours
- ☕ Light breakfast, hydrate
- 🪪 Bring two forms of ID (test centre) OR clear room + good lighting (online proctored)
- ⏰ Arrive / log in 30 min early
- 🧘 Trust your prep. You've covered every domain.

---

➡️ Good luck. After you pass, share your story so others can learn from it. 🚀
