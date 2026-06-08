# ✏️ Module 4 Quiz: SageMaker Studio & Built-In Algorithms

> 26 questions. Aim 21+/26. 40 minutes.

> **Bloom's distribution.** Remember 5 · Understand 5 · Apply 10 · Analyze/Evaluate 5 · Create 1.

---

## Questions

### Q1. The default tabular workhorse algorithm in SageMaker for classification on 10M rows / 500 features is: *(Remember)*
A. K-Means
B. XGBoost
C. PCA
D. Object2Vec

---

### Q2. To detect anomalies in tabular streaming data with NO labels available, the BEST built-in is: *(Apply)*
A. Linear Learner
B. Random Cut Forest
C. K-Means
D. seq2seq

---

### Q3. For an ad CTR prediction with millions of sparse one-hot features, the BEST built-in is: *(Apply)*
A. Image Classification
B. Factorization Machines
C. DeepAR
D. LDA

---

### Q4. To forecast 30 days ahead across 5,000 retail SKUs with probabilistic output (p10/p50/p90), the BEST built-in is: *(Apply)*
A. ARIMA (one per SKU)
B. DeepAR
C. K-Means
D. NTM

---

### Q5. Which XGBoost hyperparameter MOST directly controls tree depth (and thus model complexity)? *(Remember)*
A. `eta`
B. `subsample`
C. `max_depth`
D. `objective`

---

### Q6. To address overfitting in XGBoost, the BEST combination is: *(Apply)*
A. Increase `max_depth`, decrease `lambda`, increase `eta`
B. Decrease `max_depth`, increase `lambda`/`alpha`, lower `eta` with more `num_round` + early stopping, lower `subsample`
C. Use a larger instance only
D. Switch to Linear Learner

---

### Q7. The BEST input format for SageMaker built-in algorithms in pipe mode for huge datasets is: *(Remember)*
A. CSV
B. JSON Lines
C. RecordIO-protobuf
D. Parquet

---

### Q8. A business analyst with no Python skills needs to build a tabular churn model. The BEST AWS tool is: *(Apply)*
A. SageMaker Studio JupyterLab
B. SageMaker Canvas
C. AWS Glue ETL
D. Amazon Athena

---

### Q9. A data scientist wants AutoML on tabular data with the full generated training code available for inspection. The BEST AWS tool is: *(Apply)*
A. SageMaker Autopilot
B. SageMaker Canvas
C. SageMaker JumpStart
D. SageMaker Data Wrangler

---

### Q10. To reduce SageMaker training cost by up to 90% on a job that can resume from checkpoint: *(Apply)*
A. Use Reserved Instances
B. Use Spot training with `use_spot_instances=True` and checkpointing to S3
C. Use Compute Savings Plan
D. Use AWS Batch

---

### Q11. To stream a 5 TB training dataset to a SageMaker training container without copying it all to local disk first: *(Apply)*
A. File mode
B. Pipe mode (RecordIO-protobuf)
C. Increase EBS volume size
D. Copy to EFS first

---

### Q12. SageMaker BlazingText is BEST for: *(Apply)*
A. Image segmentation
B. Word embeddings (Word2Vec) AND text classification
C. Anomaly detection
D. Time-series forecasting

---

### Q13. The Object2Vec algorithm is BEST for: *(Remember)*
A. Reducing image dimensions
B. Learning embeddings for pairs (user-item, document-document, sentence-sentence)
C. Detecting outliers
D. Forecasting

---

### Q14. To classify 50,000 product images into 200 categories with limited training data, the BEST AWS approach is: *(Apply)*
A. Train Image Classification from scratch (`use_pretrained_model=0`)
B. Train Image Classification with transfer learning (`use_pretrained_model=1`)
C. Use Linear Learner
D. Use K-Means

---

### Q15. The MOST natural choice for "find unusual (user, IP-address) pairs for account-takeover detection" is: *(Apply)*
A. Linear Learner
B. IP Insights
C. Image Classification
D. Object2Vec

---

### Q16. To pick `k` in K-Means clustering, the standard methods are: *(Understand)*
A. Just choose `k=10`
B. Elbow method (SSE vs k) AND silhouette score
C. Use cross-entropy loss
D. ROC curve

---

### Q17. The PRIMARY reason DeepAR can forecast for a brand-new time series (cold start) is: *(Understand)*
A. It uses ARIMA internally
B. It learns a SHARED model across many series, transferring patterns to new series
C. It doesn't need data at all
D. It uses CloudFront caching

---

### Q18. To train a custom proprietary deep-learning algorithm with a Dockerfile of your own design, the SageMaker workflow is: *(Apply)*
A. Built-in algorithm container only
B. BYO container pushed to Amazon ECR, referenced in `Estimator(image_uri=...)`
C. Lambda function
D. Glue ETL job

---

### Q19. To write a `train.py` script and use a SageMaker-managed PyTorch container without building your own Docker image, the right mode is: *(Apply)*
A. Built-in algorithm
B. Script mode with the PyTorch framework container
C. BYO container
D. AWS Marketplace

---

### Q20. A typical Neural Topic Model (NTM) hyperparameter is: *(Remember)*
A. `learning_rate=0.5`
B. `num_topics`
C. `subsample=0.8`
D. `objective="binary:logistic"`

---

### Q21. Which of the following is the BEST description of SageMaker Studio Domains? *(Understand)*
A. An AWS organisation feature for billing
B. A tenant-scoped environment containing user profiles, spaces, and apps
C. A region-only construct
D. The legacy notebook product

---

### Q22. To reduce notebook costs from idle Studio notebooks, the standard mitigation is: *(Apply)*
A. Manually monitor users
B. Enable idle auto-shutdown via lifecycle configuration on the Studio space
C. Switch all to t2.nano
D. Move to EMR

---

### Q23. A team needs to host hundreds of small models that receive sparse traffic and wants to minimise idle cost. The BEST endpoint pattern is: *(Analyze)*
A. One real-time endpoint per model
B. Multi-Model Endpoint (MME), models loaded into one endpoint on demand
C. Lambda only
D. Batch transform

---

### Q24. To classify customer-support tickets into 12 categories using SageMaker's fastest text classifier: *(Apply)*
A. BlazingText text-classification mode
B. K-Means
C. NTM
D. seq2seq

---

### Q25. The SageMaker XGBoost built-in algorithm accepts which of the following formats for training data? *(Understand)*
A. Only RecordIO
B. Only Parquet
C. CSV, Parquet, libsvm, and RecordIO-protobuf
D. Only XML

---

### Q26. A team must reduce 5,000 features to ~50 components while preserving variance for a downstream XGBoost. The BEST built-in is: *(Apply)*
A. K-Means
B. SageMaker PCA
C. Random Cut Forest
D. Object2Vec

---

## 🎯 Answers + Explanations

### Q1: **B. XGBoost**
The canonical tabular workhorse. K-Means is unsupervised; PCA is dim. reduction; Object2Vec is embeddings.

### Q2: **B. Random Cut Forest**
RCF is the SageMaker built-in for unsupervised anomaly detection on tabular / time-series data.

### Q3: **B. Factorization Machines**
FM is designed for sparse high-dimensional features (CTR, ad clicks, sparse recommendation).

### Q4: **B. DeepAR**
Probabilistic multi-series forecasting with quantile output. ARIMA per SKU misses cross-series learning; K-Means is clustering; NTM is topics.

### Q5: **C. `max_depth`**
`max_depth` is the direct tree-depth control. `eta` is learning rate; `subsample` is row fraction; `objective` defines the task.

### Q6: **B. Decrease max_depth, increase lambda/alpha, lower eta + early stopping + lower subsample**
The classic overfitting remedy, reduce capacity and add regularisation.

### Q7: **C. RecordIO-protobuf**
Pipe mode requires RecordIO-protobuf for built-ins. CSV is fine for file mode; Parquet is great for analytics but not pipe mode.

### Q8: **B. SageMaker Canvas**
Canvas is the no-code ML tool for business analysts. Autopilot still requires data-science workflow knowledge.

### Q9: **A. SageMaker Autopilot**
Autopilot is "white-box AutoML", generates a notebook of all candidate models so a data scientist can inspect and modify.

### Q10: **B. Spot training with checkpointing**
`use_spot_instances=True` plus `checkpoint_s3_uri` gives up to 90% off. The checkpointing handles interruption recovery.

### Q11: **B. Pipe mode (RecordIO-protobuf)**
Pipe mode streams data via FIFO without disk staging. FastFile mode is an alternative for medium data.

### Q12: **B. Word embeddings (Word2Vec) AND text classification**
BlazingText has both Word2Vec mode (unsupervised embeddings) and text-classification mode (supervised FastText-style).

### Q13: **B. Learning embeddings for pairs**
Object2Vec uses Siamese-style networks to embed any pair of objects. Great for recommendations and similarity.

### Q14: **B. Transfer learning (`use_pretrained_model=1`)**
ImageNet pretrained weights → fine-tune on your 50K images. Much better than training from scratch on limited data.

### Q15: **B. IP Insights**
Built-in algo specifically for user-IP anomaly detection. Object2Vec could be adapted but IP Insights is purpose-built.

### Q16: **B. Elbow method AND silhouette score**
Both are standard. Just picking k=10 is arbitrary; cross-entropy/ROC are for supervised tasks.

### Q17: **B. Shared model across many series**
DeepAR learns one global model. New series benefit from patterns learned on others, the hallmark of "global" forecasting models.

### Q18: **B. BYO container in ECR**
For fully custom algorithms not in built-ins, build a Docker image, push to ECR, reference in the SDK.

### Q19: **B. Script mode**
Script mode uses an AWS-managed framework container plus your Python script. No Dockerfile needed.

### Q20: **B. `num_topics`**
The number of latent topics. (`learning_rate` and the others belong to different algos.)

### Q21: **B. Tenant-scoped environment with profiles, spaces, apps**
Studio Domain is the top-level isolation unit; one per AWS account/VPC (typically).

### Q22: **B. Idle auto-shutdown via lifecycle config**
The standard mechanism. Studio spaces can be configured to stop after N minutes idle.

### Q23: **B. Multi-Model Endpoint (MME)**
MME loads models on demand, sharing one endpoint across hundreds of models. Cost-optimal for sparse traffic per model.

### Q24: **A. BlazingText text-classification mode**
BlazingText classification is fast (FastText-style) on GPU. Comprehend Custom Classifier is the managed alternative.

### Q25: **C. CSV, Parquet, libsvm, and RecordIO-protobuf**
All four supported. (Note: for CSV, target must be first column with no header in built-in mode.)

### Q26: **B. SageMaker PCA**
PCA built-in projects to k components while preserving variance.

---

## 📊 Score

- 25–26 → 🏆 Mastery
- 21–24 → ✅ Solid
- 17–20 → ⚠️ Re-read the algorithm sections
- <17 → 🔁 Restart Module 4

---

## 🃏 Add to flashcards

- The 17 built-in algorithms and which task each solves
- XGBoost top hyperparameters (max_depth, eta, num_round, lambda, alpha, subsample, scale_pos_weight)
- Pipe mode vs File mode vs FastFile mode
- Script mode vs BYO container vs built-in
- Spot training + checkpointing for 90% off
- Canvas (no-code) vs Autopilot (white-box AutoML) vs JumpStart (foundation models)
- DeepAR is multi-series global model with quantile output

➡️ [Cheat-Sheet.md](./Cheat-Sheet.md) → [Module 5](../Module-05-Deep-Learning-AWS/Reading.md)
