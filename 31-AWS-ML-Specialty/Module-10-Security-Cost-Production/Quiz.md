# ✏️ Module 10 Quiz: Security, Cost & Production

> 24 questions. Aim 20+/24. 35 min.

---

## Questions

### Q1. To restrict a SageMaker training job to read ONLY one S3 bucket prefix: *(Apply)*
A. Grant `AmazonSageMakerFullAccess`
B. Custom IAM execution role with `s3:GetObject` on `bucket/prefix/*` plus bucket policy
C. CloudFront origin
D. Use VPC peering

---

### Q2. To prevent a training container from making ANY outbound network calls: *(Apply)*
A. Disable CloudWatch
B. Set `enable_network_isolation=True` on the Estimator AND run in private subnets with no NAT
C. Use Glue
D. Stop the endpoint

---

### Q3. To encrypt S3 model artifacts with a key whose usage is logged in CloudTrail per request: *(Apply)*
A. SSE-S3
B. SSE-KMS with a customer-managed KMS key
C. No encryption (use bucket policy)
D. SSE-C only

---

### Q4. To detect PII in S3 buckets before training: *(Apply)*
A. AWS Macie
B. AWS Config
C. AWS Backup
D. Amazon Polly

---

### Q5. To expose a SageMaker endpoint to on-prem clients without traversing the public internet: *(Apply)*
A. Public endpoint with IAM SigV4
B. PrivateLink (Interface VPC Endpoint for SageMaker Runtime) + Direct Connect
C. CloudFront only
D. Route 53 alias

---

### Q6. Cost-optimise a long fault-tolerant SageMaker training job that can resume from checkpoints: *(Apply)*
A. On-Demand only
B. Spot training with `use_spot_instances=True`, `max_wait`, and S3 checkpointing
C. Reserved Instances
D. Dedicated Hosts

---

### Q7. The MOST cost-effective inference compute for a large language model on AWS: *(Apply)*
A. P3 V100
B. P4d A100
C. Inferentia2 (`inf2`) compiled via Neuron
D. T3 CPU

---

### Q8. To host 500 customer-specific XGBoost models with sparse traffic each, cost-optimally: *(Apply)*
A. 500 real-time endpoints
B. Multi-Model Endpoint (MME)
C. Glue ETL
D. Lambda only

---

### Q9. Idle SageMaker Studio spaces are racking up cost. The MOST appropriate mitigation is: *(Apply)*
A. Manually monitor users
B. Lifecycle Configuration with idle auto-shutdown
C. Switch to ml.t2.nano
D. Disable IAM

---

### Q10. To audit every SageMaker API call (who started a training job): *(Apply)*
A. CloudTrail
B. Macie
C. Polly
D. CloudFront Logs

---

### Q11. To continuously verify SageMaker endpoints are encrypted with KMS: *(Apply)*
A. AWS Config rule
B. CloudWatch Synthetics
C. AWS Glue
D. CloudTrail data events

---

### Q12. The PRIMARY reason to enable `enable_inter_container_traffic_encryption=True` on a distributed training job is: *(Understand)*
A. Speed up training
B. Encrypt traffic between training nodes (defence in depth for regulated workloads)
C. Save cost
D. Reduce latency

---

### Q13. To commit to steady inference spend for 1-3 years in exchange for a discount: *(Apply)*
A. Spot
B. Compute Savings Plan
C. On-Demand
D. Reserved Notebook Instances

---

### Q14. Cost-optimal storage class for training data accessed daily that may go cold after 90 days: *(Apply)*
A. S3 Standard with lifecycle to Standard-IA / Glacier Instant after 90 days
B. S3 Glacier Deep Archive only
C. EFS only
D. EBS gp3

---

### Q15. To diagnose why a SageMaker training job's GPU sits at 25% utilisation: *(Apply)*
A. SageMaker Profiler
B. CloudTrail
C. AWS Backup
D. Glue Crawler

---

### Q16. Recovering from NaN losses partway through training is typically achieved by: *(Apply)*
A. Increasing batch size 10×
B. Reducing learning rate, adding gradient clipping (norm ≈ 1), switching FP16 → BF16
C. Disabling Spot
D. Using Lambda

---

### Q17. To trace inference latency across Lambda + SageMaker endpoint + DynamoDB to find the slow hop: *(Apply)*
A. CloudWatch Logs only
B. AWS X-Ray distributed traces
C. AWS Macie
D. Config

---

### Q18. The MOST common cost-saving Bedrock mode for offline / async LLM workloads: *(Remember)*
A. On-Demand
B. Provisioned Throughput
C. Batch Inference (~50% off)
D. Lex

---

### Q19. To enable a SageMaker Pipeline to assume a role with minimum permissions for orchestrating sub-jobs: *(Apply)*
A. AmazonSageMakerFullAccess only
B. A dedicated Pipeline execution role with explicit `sagemaker:*` actions and PassRole limited to specific sub-roles
C. Anonymous role
D. Root credentials

---

### Q20. The MOST appropriate AWS service to track resource configuration changes across SageMaker endpoints over time: *(Apply)*
A. AWS Config
B. CloudWatch
C. CloudTrail
D. Polly

---

### Q21. A team's monthly Bedrock bill is dominated by a 4,000-token shared system prompt repeated across every request. The BEST cost lever is: *(Apply)*
A. Switch to Lex
B. Bedrock prompt caching (cache the shared prefix)
C. Disable Guardrails
D. Use a smaller embedding

---

### Q22. AWS Macie + SageMaker Clarify together provide: *(Analyze)*
A. Image generation
B. Data-level PII discovery (Macie) AND model-level bias / explainability (Clarify) — both feed compliance posture
C. Identical functionality
D. Replace IAM

---

### Q23. To enable a SageMaker endpoint hosted in your VPC to download container images from ECR with no internet: *(Apply)*
A. NAT Gateway with public route
B. Interface VPC Endpoints for ECR API + ECR DKR + S3 Gateway Endpoint
C. CloudFront
D. Route 53 only

---

### Q24. Sustainability moves with the LARGEST ML footprint reduction typically include: *(Evaluate)*
A. More large idle endpoints
B. Inferentia2 + Graviton + right-sizing + multi-model endpoints + managed services
C. Disable encryption
D. Switch to on-prem

---

## 🎯 Answers + Explanations

### Q1: **B. Custom IAM role + bucket policy**
Defence in depth — both identity-side and resource-side controls.

### Q2: **B. `enable_network_isolation=True` + no NAT**
Network isolation is the explicit Estimator flag; private subnets + VPC endpoints (no NAT) seal the deal.

### Q3: **B. SSE-KMS with customer-managed key**
Per-request CloudTrail audit only happens with KMS (and the key must be customer-managed for full key-policy + audit control).

### Q4: **A. Macie**
S3 PII / sensitive-data discovery. Config tracks resource configs; Backup is for backups; Polly is TTS.

### Q5: **B. PrivateLink + Direct Connect**
Standard pattern for on-prem-only access without public DNS.

### Q6: **B. Spot training with checkpointing**
Up to 90% off; checkpointing handles interruptions.

### Q7: **C. Inferentia2**
The cost-optimal LLM inference accelerator. Trainium is for training; P-family is expensive for inference.

### Q8: **B. Multi-Model Endpoint**
MME loads models on demand into one endpoint — cost-optimal for many sparse-traffic models.

### Q9: **B. Lifecycle Configuration with idle auto-shutdown**
The standard mechanism for Studio spaces / notebook instances.

### Q10: **A. CloudTrail**
Records all SageMaker API calls (control plane).

### Q11: **A. AWS Config rule**
Config has managed/custom rules to enforce continuous compliance.

### Q12: **B. Encrypt inter-node traffic**
Useful for regulated workloads (HIPAA / FedRAMP). Note: it adds latency.

### Q13: **B. Compute Savings Plan**
Flexible commitment-based discount across compute families.

### Q14: **A. Standard → lifecycle**
Common pattern: hot in Standard; transition to IA / Glacier classes as access cools.

### Q15: **A. SageMaker Profiler**
Profiler is the system + framework metric tool. Low GPU util usually = data loader / I/O bottleneck.

### Q16: **B. Lower LR + clip gradients + FP16→BF16**
The standard NaN recovery cocktail.

### Q17: **B. AWS X-Ray**
End-to-end distributed tracing across services.

### Q18: **C. Batch Inference**
Bedrock Batch is ~50% cheaper than On-Demand for offline workloads.

### Q19: **B. Dedicated Pipeline execution role with explicit + PassRole limits**
Least-privilege Pipeline role separate from training/processing roles.

### Q20: **A. AWS Config**
Tracks configuration over time and can detect drift.

### Q21: **B. Prompt caching**
Caches the shared system-prompt prefix; cuts per-call token cost.

### Q22: **B. Data-level PII + model-level bias / explainability**
Macie and Clarify together cover both data and model compliance.

### Q23: **B. Interface endpoints for ECR + S3 Gateway endpoint**
ECR has both API and DKR (image data) endpoints; S3 Gateway provides backing object access without internet.

### Q24: **B. Inferentia2 + Graviton + right-sizing + MME + managed services**
Highest-impact sustainability moves; managed services have AWS-optimised data centres.

---

## 📊 Score

- 22-24 → 🏆 Course complete!
- 19-21 → ✅ Take Final Mock soon
- 15-18 → ⚠️ Re-read security + cost sections
- <15 → 🔁 Restart Module 10

---

## 🃏 Add to flashcards

- VPC-only training: private subnets + Gateway/Interface endpoints + `enable_network_isolation`
- SSE-KMS with CMK = encrypted + auditable
- Spot training + checkpointing = up to 90% off
- Inferentia2 = cost-optimal LLM inference
- MME = cost-optimal many-model hosting
- Compute Savings Plan = flexible commitment discount
- Macie = PII discovery; Config = compliance; CloudTrail = audit log
- Profiler diagnoses GPU under-utilisation; Debugger diagnoses training math
- Bedrock cost: On-Demand vs Provisioned vs Batch + prompt caching

➡️ [Cheat-Sheet.md](./Cheat-Sheet.md) → **🎉 [Practice Exam 1](../Practice-Exams/Practice-Exam-1.md)**
