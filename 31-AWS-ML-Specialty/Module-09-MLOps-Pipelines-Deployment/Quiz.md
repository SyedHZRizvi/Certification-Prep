# ✏️ Module 9 Quiz: MLOps, Pipelines, Deployment

> 25 questions. Aim 20+/25. 35 min.

---

## Questions

### Q1. To build a repeatable ML workflow with conditional model registration if AUC > 0.85: *(Apply)*
A. SageMaker Pipelines with `ConditionStep`
B. CloudFormation
C. SQS only
D. Glue ETL only

---

### Q2. To require human approval before any new model version is deployed to production: *(Apply)*
A. SageMaker Model Registry with approval workflow
B. CloudTrail
C. S3 versioning
D. Lambda only

---

### Q3. Sparse inference traffic with occasional bursts, paying only when invoked, requires: *(Apply)*
A. Real-time endpoint
B. Serverless inference
C. Async inference
D. Batch transform

---

### Q4. To process 500 MB documents through a 10-minute inference job each, NOT real-time: *(Apply)*
A. Real-time endpoint
B. Serverless inference (6 GB max)
C. Async inference (1 GB payload, up to 1 h)
D. Lex

---

### Q5. To score 50 million records offline nightly: *(Apply)*
A. Real-time endpoint with auto-scaling
B. Batch transform
C. Serverless inference
D. SageMaker Studio interactive

---

### Q6. To detect input feature distribution shift in production: *(Apply)*
A. CloudTrail
B. SageMaker Model Quality monitor
C. SageMaker Data Quality monitor
D. AWS X-Ray

---

### Q7. To detect drift in SHAP feature attribution after deployment: *(Apply)*
A. SageMaker Model Bias monitor
B. SageMaker Feature Attribution Drift monitor
C. CloudWatch Logs Insights
D. SageMaker Debugger

---

### Q8. To send real production traffic to a new model copy WITHOUT impacting users: *(Apply)*
A. Shadow variant
B. Blue/Green
C. Canary
D. Auto-scaling

---

### Q9. To host 500 per-customer small models with sparse per-model traffic, the COST-OPTIMAL pattern is: *(Apply)*
A. 500 real-time endpoints
B. Multi-Model Endpoint (MME)
C. 500 batch transforms
D. Serverless x 500

---

### Q10. To trigger automatic retraining when Model Monitor detects drift: *(Apply)*
A. Lambda polling Monitor
B. Model Monitor alarm → EventBridge → Lambda → SageMaker Pipeline
C. SQS only
D. CloudFormation

---

### Q11. To auto-rollback an endpoint update if 5xx error rate spikes: *(Apply)*
A. Set up Blue/Green deployment with CloudWatch alarm on 5xx
B. Manual rollback via console
C. Disable auto-scaling
D. Use Glue

---

### Q12. SageMaker Pipelines vs Step Functions for an ML workflow that integrates with Model Registry: *(Analyze)*
A. Identical
B. Step Functions is ML-aware; Pipelines is generic
C. Pipelines is ML-aware (Registry, Quality steps, conditional deploy); Step Functions is generic
D. Both require manual approval

---

### Q13. To auto-scale an endpoint based on average invocations per instance: *(Apply)*
A. Target tracking
B. Step scaling
C. Scheduled scaling
D. Manual scaling

---

### Q14. SageMaker Inference Recommender's PRIMARY purpose is: *(Understand)*
A. Pick the best model
B. Benchmark and recommend the cost-optimal instance type meeting your latency / throughput targets
C. Train a new model
D. Tune hyperparameters

---

### Q15. To A/B test two model versions on 90% / 10% traffic split: *(Apply)*
A. Two separate endpoints behind ALB
B. Production variants on one endpoint with weighted traffic
C. Lex routing
D. CloudFront

---

### Q16. To trace inference latency across Lambda + SageMaker endpoint + DynamoDB: *(Apply)*
A. CloudWatch Logs only
B. AWS X-Ray distributed traces
C. AWS Config
D. AWS Backup

---

### Q17. Which AWS Pipelines step type runs Clarify pre-deployment for bias check? *(Remember)*
A. RegisterModel
B. ClarifyCheck / Bias step
C. EMR step
D. Lambda step

---

### Q18. The PRIMARY advantage of SageMaker Projects over manual setup is: *(Understand)*
A. Lower cost
B. Templated end-to-end MLOps repo (CodeCommit + CodePipeline + Pipelines + Registry + endpoints)
C. Faster training
D. Encryption at rest

---

### Q19. To register a new model version programmatically in a SageMaker Pipeline: *(Apply)*
A. `RegisterModel` step
B. `Lambda` step
C. `EMR` step
D. `ConditionStep`

---

### Q20. To detect production-time bias drift on a deployed model: *(Apply)*
A. CloudTrail
B. SageMaker Model Bias monitor (Clarify-powered)
C. SageMaker Debugger
D. AWS Config

---

### Q21. The MAIN reason to use Multi-Container Endpoints (MCE) over MME: *(Understand)*
A. Cheaper for sparse traffic
B. Different container images can co-exist behind one endpoint with traffic routing
C. Identical to MME
D. Required by IAM

---

### Q22. The Pipelines step that runs a Lambda function for lightweight orchestration is: *(Remember)*
A. `LambdaStep`
B. `EMRStep`
C. `ProcessingStep`
D. `TuningStep`

---

### Q23. To deploy a model with auto-rollback based on multiple CloudWatch alarms (latency + error rate): *(Apply)*
A. All-at-once
B. Blue/Green with alarm-based rollback
C. Disable auto-scaling
D. Lambda triggers only

---

### Q24. To enable a Pipeline to fail explicitly when a metric is below threshold: *(Apply)*
A. `FailStep`
B. `RegisterModel`
C. `EMRStep`
D. `AutoMLStep`

---

### Q25. Cross-account sharing of a SageMaker model from a central account to a consumer account is BEST done with: *(Apply)*
A. Manual copy of model artifact to consumer account's S3
B. AWS Resource Access Manager (RAM) to share the Model Package, OR Model Hub pattern
C. CloudTrail
D. Glue Crawler

---

## 🎯 Answers + Explanations

### Q1: **A. Pipelines + `ConditionStep`**
Conditional deploy is the canonical use of `ConditionStep`.

### Q2: **A. Model Registry approval**
Approval workflow is built into the Registry. Promote-to-production gates on `ApprovalStatus = Approved`.

### Q3: **B. Serverless inference**
Scale-to-zero pay-per-request — perfect for sparse traffic.

### Q4: **C. Async inference**
Designed for large payloads (1 GB) and long processing (up to 1 h). Serverless caps at 6 GB memory but typically lower payload limit and 60s.

### Q5: **B. Batch transform**
One-time / scheduled offline scoring; no endpoint.

### Q6: **C. Data Quality monitor**
Watches feature distribution against baseline statistics.

### Q7: **B. Feature Attribution Drift monitor**
SHAP-attribution-based drift — one of the four Model Monitor types.

### Q8: **A. Shadow variant**
Real traffic mirrored to a new variant without affecting user response.

### Q9: **B. Multi-Model Endpoint (MME)**
Many models hosted on one endpoint, loaded on demand — cost-optimal for sparse-per-model traffic.

### Q10: **B. Monitor → EventBridge → Lambda → Pipeline**
Standard retrain-on-drift architecture.

### Q11: **A. Blue/Green with CloudWatch alarm**
SageMaker supports auto-rollback if a CloudWatch alarm breaches during deployment.

### Q12: **C. Pipelines is ML-aware**
Pipelines integrates with Registry / Quality steps / conditional deploy natively. Step Functions is generic orchestration.

### Q13: **A. Target tracking**
"Keep avg X at target value" — the default and simplest.

### Q14: **B. Benchmark + recommend cost-optimal instance type**
Tries multiple instance families and reports cost / latency / throughput.

### Q15: **B. Production variants with weighted traffic**
Built-in canonical A/B testing pattern.

### Q16: **B. X-Ray distributed traces**
End-to-end trace across Lambda + SageMaker + DynamoDB.

### Q17: **B. ClarifyCheck / Bias step**
Pipelines includes Quality / Bias / Explainability check steps that wrap Clarify.

### Q18: **B. Templated end-to-end repo**
Projects bootstraps CodeCommit + CodePipeline + Pipelines + Registry + endpoints from a Service Catalog product.

### Q19: **A. `RegisterModel` step**
The dedicated Pipelines step for Model Registry registration.

### Q20: **B. Model Bias monitor (Clarify)**
The fourth Monitor type uses Clarify under the hood.

### Q21: **B. Different containers behind one endpoint with routing**
MCE hosts multiple distinct containers (different images / runtimes); MME hosts many models in one shared container.

### Q22: **A. `LambdaStep`**
Lightweight orchestration / glue.

### Q23: **B. Blue/Green with alarm rollback**
Built-in SageMaker deployment with auto-rollback if CloudWatch alarms breach.

### Q24: **A. `FailStep`**
Explicitly fail the pipeline (e.g. when evaluation metric is below threshold).

### Q25: **B. RAM share OR Model Hub**
RAM shares the Model Package across accounts; Model Hub pattern enables federated access.

---

## 📊 Score

- 23-25 → 🏆 Mastery
- 19-22 → ✅ Solid
- 15-18 → ⚠️ Re-read Pipelines / endpoint sections
- <15 → 🔁 Restart Module 9

---

## 🃏 Add to flashcards

- The 4 inference modes (real-time / serverless / async / batch) — picking by scenario
- MME vs MCE vs Inference Components
- Blue-green vs canary vs linear vs shadow
- The 4 Model Monitor types
- Retrain on drift = Monitor → EventBridge → Lambda → Pipeline
- Pipelines key step types
- Registry approval workflow
- SageMaker Projects = templated CI/CD
- Inference Recommender = cost-optimal instance picker

➡️ [Cheat-Sheet.md](./Cheat-Sheet.md) → [Module 10](../Module-10-Security-Cost-Production/Reading.md)
