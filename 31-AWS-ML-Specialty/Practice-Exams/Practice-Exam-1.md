# 🧪 Practice Exam 1, AWS Certified Machine Learning Specialty (MLS-C01)

> **Conditions:** Set an 80-minute timer. 30 questions. No notes, no Google, no breaks.
> **Pass mark for this practice exam:** 22/30 (~73%)
> **When to take it:** After completing Modules 1–5.

---

## 📝 Questions

### 1. A bank wants to detect anomalies in real-time card-swipe data without labelled fraud examples. The BEST SageMaker built-in is:
A. XGBoost classifier
B. SageMaker Random Cut Forest
C. K-Means
D. seq2seq

### 2. To stream JSON clickstream events into S3 as Parquet with NO custom code:
A. Kinesis Data Streams + custom Lambda consumer
B. AWS Glue ETL job
C. Kinesis Data Firehose with format conversion (Glue table schema)
D. Amazon SQS

### 3. A tabular dataset has 99.8% negatives and 0.2% positives. The BEST evaluation metric to report:
A. Accuracy
B. PR-AUC (precision-recall) + recall + F1
C. ROC-AUC alone
D. RMSE

### 4. A team's XGBoost validation accuracy is 71% while training accuracy is 99.5%. The MOST likely problem and fix:
A. Underfitting; increase `max_depth`
B. Overfitting; reduce `max_depth`, increase `lambda`/`alpha`, lower `eta` + early stopping
C. Class imbalance; use SMOTE on validation
D. Wrong loss function; switch to RMSE

### 5. To reduce SageMaker training cost on a long fault-tolerant XGBoost job:
A. Reserved Instances 3-year
B. Spot training (`use_spot_instances=True`) with S3 checkpointing
C. Dedicated Hosts
D. Switch to CPU-only training

### 6. To stream a 5 TB training dataset to a SageMaker training container without copying it all to local disk:
A. File mode with EBS volume
B. Pipe mode with RecordIO-protobuf
C. Increase instance memory
D. Use Athena Federated Query

### 7. A team needs sub-100ms feature lookups during inference AND historical feature snapshots for training. The BEST design is:
A. Redis cluster
B. SageMaker Feature Store with online + offline stores
C. DynamoDB only
D. CSV files on EFS

### 8. A US bank's loan dataset shows 65% approval for one demographic and 38% for another. To surface this BEFORE training:
A. SageMaker Model Monitor
B. SageMaker Clarify pre-training bias report
C. CloudTrail
D. SageMaker Debugger

### 9. To train a 70-billion-parameter LLM whose weights do NOT fit on one GPU:
A. SMDDP (data parallel)
B. SMMP (tensor + pipeline + sharded-data parallel)
C. SageMaker Canvas
D. CPU instances

### 10. The MOST cost-effective inference choice for a high-traffic LLM on AWS is typically:
A. P4d A100
B. Inferentia2 (`inf2`) compiled via Neuron SDK
C. Trainium (trn1)
D. T3 burstable

### 11. To encrypt model artifacts in S3 with a key that produces per-request audit logs:
A. SSE-S3 (AWS-managed)
B. SSE-KMS with customer-managed key
C. SSE-C only
D. No encryption + bucket policy

### 12. To detect PII in your training-data S3 bucket before model training:
A. Amazon Macie
B. AWS Config
C. AWS X-Ray
D. CloudTrail

### 13. Multi-node distributed deep learning scales poorly past 4 nodes. The MOST likely fix:
A. Increase batch size to 1
B. Enable EFA (Elastic Fabric Adapter) networking
C. Disable mixed precision
D. Smaller instance type

### 14. For an ad CTR prediction with millions of sparse one-hot features, the BEST built-in is:
A. Image Classification
B. Factorization Machines
C. DeepAR
D. LDA

### 15. To pick hyperparameters with the FEWEST training jobs by learning from previous trials:
A. Grid search
B. Random search
C. Bayesian optimisation (default SageMaker HPO)
D. Manual

### 16. A team wants to find unusual (user, IP-address) pairs for account-takeover detection:
A. SageMaker IP Insights
B. Linear Learner
C. SageMaker Image Classification
D. Polly

### 17. A 30-engineer team needs a templated MLOps repo with CI/CD, Pipelines, and a Model Registry. The BEST starting point is:
A. SageMaker Projects (Service Catalog template)
B. SageMaker Canvas
C. Manual CodePipeline setup
D. Glue Workflows

### 18. To forecast 30-day demand across 5,000 SKUs probabilistically (p10/p50/p90):
A. ARIMA per SKU
B. DeepAR (or Amazon Forecast for managed AutoML)
C. K-Means
D. Linear Learner

### 19. The BEST file format default for ML training data on S3:
A. CSV with gzip
B. JSON Lines
C. Apache Parquet (columnar + Snappy + partitioned)
D. XML

### 20. To migrate 2 petabytes of historical archives from an on-prem datacentre to S3 within 8 weeks:
A. DataSync over the internet
B. AWS Snowball Edge cluster
C. DMS with CDC
D. CloudFront upload acceleration

### 21. To train a custom proprietary deep-learning algorithm with a Dockerfile of your own design:
A. SageMaker built-in algorithm only
B. BYO container pushed to Amazon ECR, referenced in `Estimator(image_uri=...)`
C. Lambda function
D. Glue ETL

### 22. A team's Athena bill is dominated by scanning raw JSON. The HIGHEST-impact change:
A. Move data to Glacier
B. Convert raw JSON to Parquet and partition by date
C. Increase Athena timeout
D. Use Athena Federated Query

### 23. To stream a custom PyTorch model on a SageMaker-managed container without building a Dockerfile:
A. BYO container
B. Script mode with the PyTorch framework container
C. Lambda
D. Built-in only

### 24. To learn dense embeddings for tens of thousands of product IDs as features for a DNN:
A. One-hot encoding
B. Ordinal encoding 1..N
C. Learned embedding layer (e.g. Keras Embedding, SageMaker Object2Vec)
D. PCA

### 25. SageMaker Data Wrangler is BEST described as:
A. A no-code visual data-prep tool with 300+ transforms and Pipelines export
B. A NoSQL database
C. The SageMaker training service
D. A SQL editor

### 26. The BEST approach for "minimum operational overhead" sentiment analysis on customer reviews:
A. Train BlazingText
B. Amazon Comprehend `DetectSentiment`
C. SageMaker XGBoost
D. Custom Bedrock model

### 27. To enable a Bedrock Knowledge Base over 50,000 internal documents with NO infrastructure to set up:
A. Self-managed Pinecone
B. OpenSearch Serverless (default vector store for Bedrock KBs)
C. DynamoDB
D. ElastiCache

### 28. To classify 50,000 product images into 200 categories with limited training data:
A. SageMaker Image Classification from scratch
B. SageMaker Image Classification with transfer learning (`use_pretrained_model=1`)
C. K-Means
D. RCF

### 29. A team wants Glue ETL jobs to process ONLY files added since the last run:
A. Glue job bookmarks
B. Manual diff each run
C. Athena partition projection
D. Lambda S3 event triggers only

### 30. The cardinal sin to AVOID when using a held-out test set is:
A. Reading the test set
B. Reporting accuracy on it
C. Re-tuning hyperparameters based on test-set metrics (contamination)
D. Storing it in S3

---

## 🎯 Answer Key (No Cheating!)

```
1.  B    7.  B    13. B    19. C    25. A
2.  C    8.  B    14. B    20. B    26. B
3.  B    9.  B    15. C    21. B    27. B
4.  B    10. B    16. A    22. B    28. B
5.  B    11. B    17. A    23. B    29. A
6.  B    12. A    18. B    24. C    30. C
```

---

## Detailed answer rationales

**Q1. Answer: B, Random Cut Forest.** Unsupervised anomaly detection, no labels needed. XGBoost requires labels; K-Means is clustering; seq2seq is for sequence translation.

**Q2. Answer: C, Firehose with format conversion.** Firehose has built-in JSON→Parquet conversion via Glue table schema. No code needed.

**Q3. Answer: B, PR-AUC + recall + F1.** On 0.2% positives, accuracy is meaningless. PR-AUC is preferred over ROC-AUC for imbalanced data.

**Q4. Answer: B, Overfitting.** The huge gap between train and val is the textbook overfit signature. Standard remedies: reduce capacity, add regularisation, early stopping.

**Q5. Answer: B, Spot + checkpointing.** Up to 90% off; checkpointing handles interruptions. RI's are inflexible; Dedicated Hosts are for licensing.

**Q6. Answer: B, Pipe mode + RecordIO-protobuf.** Pipe mode streams data via FIFO; no need to copy 5 TB to disk first.

**Q7. Answer: B, Feature Store online + offline.** Dual-mode store is the MLS-C01 canonical answer.

**Q8. Answer: B, Clarify pre-training bias.** Pre-training bias surfaces dataset disparities before any model is trained.

**Q9. Answer: B, SMMP.** A 70B model doesn't fit on one GPU; model parallelism required.

**Q10. Answer: B, Inferentia2.** The cost-optimal LLM inference accelerator. Trainium is for training.

**Q11. Answer: B, SSE-KMS with CMK.** Per-request CloudTrail audit happens with customer-managed KMS keys.

**Q12. Answer: A, Macie.** AWS's managed PII / sensitive-data discovery in S3.

**Q13. Answer: B, Enable EFA.** Multi-node DL scaling needs HPC-grade networking. Without EFA, all-reduce saturates standard networking.

**Q14. Answer: B, Factorization Machines.** Designed for sparse high-dimensional input (CTR / ad ranking).

**Q15. Answer: C, Bayesian.** Builds a surrogate model from prior trials; fewer total jobs vs random.

**Q16. Answer: A, IP Insights.** Purpose-built for user-IP anomaly detection.

**Q17. Answer: A, SageMaker Projects.** Templated MLOps repo with CodeCommit + CodePipeline + Pipelines + Registry + endpoints.

**Q18. Answer: B, DeepAR.** Probabilistic multi-series forecasting with quantile output. Or Amazon Forecast for managed AutoML.

**Q19. Answer: C, Parquet.** Columnar + compressed + splittable + schema-aware. Best default for ML.

**Q20. Answer: B, Snowball Edge cluster.** 2 PB over an internet connection is impractical in 8 weeks; Snowball ships disks.

**Q21. Answer: B, BYO container in ECR.** For custom Dockerfiles, push to ECR and reference in the Estimator.

**Q22. Answer: B, Convert to Parquet + partition.** 5-50× cost reduction is typical.

**Q23. Answer: B, Script mode with PyTorch container.** AWS-managed container + your `train.py`; no Dockerfile.

**Q24. Answer: C, Learned embedding layer.** Embeddings compress IDs to dense vectors; one-hot blows up.

**Q25. Answer: A, Visual data prep with 300+ transforms.** Data Wrangler is the SageMaker EDA + transform tool.

**Q26. Answer: B, Comprehend `DetectSentiment`.** Managed; no training; lowest operational overhead.

**Q27. Answer: B, OpenSearch Serverless.** The default and managed vector store for Bedrock KBs.

**Q28. Answer: B, Transfer learning.** Use pretrained ImageNet weights; fine-tune on your 50K images. Better than from scratch with limited data.

**Q29. Answer: A, Glue job bookmarks.** Built-in incremental processing.

**Q30. Answer: C, Re-tuning on test = contamination.** Test set is one-shot. Reuse contaminates the metric.

---

## 📊 Scoring

| Raw Score | Verdict |
|-----------|---------|
| 27-30 | 🏆 Ready for Practice Exam 2; consider booking the real exam in a few weeks |
| 22-26 | ✅ Pass; review weak spots, do Modules 6-10, then Practice Exam 2 |
| 18-21 | ⚠️ Borderline, re-read modules where you missed multiple questions |
| <18 | 🔁 Re-study Modules 1-5; retake this exam in a week |

---

## 🔍 Review Process

1. Score yourself; note module of each wrong answer.
2. Re-read the relevant Reading + Cheat-Sheet.
3. Add a flashcard for each wrong answer.
4. Continue with Modules 6-10.
5. Take Practice Exam 2 once you've finished Module 10.

---

➡️ Next: [Practice Exam 2](./Practice-Exam-2.md) after Modules 6-10.
