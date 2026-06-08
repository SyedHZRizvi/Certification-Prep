# ✏️ Module 9 Quiz: MLOps on Vertex AI

> Aim for 21/25.

---

## Questions

### Q1. The canonical Vertex AI MLOps loop includes (in order): *(Remember)*
A. Ingest → train → register → deploy → monitor → retrain
B. Train → eval → deploy → forget
C. Code → ship → pray
D. Lab → notebook → SSH

---

### Q2. Vertex AI Pipelines is built on: *(Remember)*
A. Apache Airflow
B. Kubeflow Pipelines v2 (KFP), also supports TFX
C. Jenkins
D. Cloud Composer

---

### Q3. Vertex AI Pipelines differs from Cloud Build in that: *(Understand)*
A. Same product
B. Pipelines has ML-specific metadata (MLMD) + artifact lineage; Cloud Build is generic CI
C. Pipelines is deprecated
D. Cloud Build is for ML only

---

### Q4. Vertex AI Model Registry stores: *(Remember)*
A. Predictions
B. Trained models with versions + metadata + lineage to training pipeline
C. Source datasets only
D. API keys

---

### Q5. `traffic_split={"0": 90, "1": 10}` on a Vertex AI Endpoint represents: *(Apply)*
A. 90% errors
B. 90% to deployed model 0 (v1), 10% canary to deployed model 1 (v2)
C. 90% CPU, 10% memory
D. Invalid

---

### Q6. The three primary failure modes Vertex AI Model Monitoring detects: *(Remember)*
A. Training/serving skew, prediction drift, data drift
B. CPU, memory, disk
C. Auth failures
D. Cost overruns

---

### Q7. Vertex AI Feature Store solves: *(Understand)*
A. Model registration
B. Training/serving skew by being the single source of truth for features in both training and serving
C. Auth
D. Pricing

---

### Q8. Vertex AI's Bayesian hyperparameter tuning service is called: *(Remember)*
A. AutoML
B. Vizier
C. Optuna
D. Hyperopt

---

### Q9. The MOST appropriate Vertex AI training option for "we have a tabular dataset and want best classification model with minimal code": *(Apply)*
A. Custom training only
B. AutoML Tabular
C. Hyperparameter Tuning only
D. Pipelines only

---

### Q10. A bank wants reproducible nightly training with metric-gated registration and automatic canary deploy with rollback. The CORRECT architecture: *(Apply)*
A. Cloud Functions + Cron
B. Vertex AI Pipelines (scheduled) → eval-gate component → Model Registry → Endpoint canary → Model Monitoring → automated rollback
C. Manual deploys
D. Pure Cloud Build

---

### Q11. To re-route 100% traffic to a previous model version (rollback): *(Apply)*
A. Delete the current model
B. Update the Endpoint's `traffic_split` to send 100% to the older deployed model
C. Restart Cloud Run
D. Open a support ticket

---

### Q12. Models containerized for serving on Vertex AI live in: *(Remember)*
A. GitHub
B. Artifact Registry (formerly Container Registry)
C. Cloud Storage only
D. Cloud SQL

---

### Q13. Continuous Training (CT) triggers include: *(Understand)*
A. Only scheduled cron
B. Scheduled, data-driven (Pub/Sub events), drift-driven (Monitoring alerts), performance-driven (metric below threshold)
C. Manual only
D. None, CT is online learning

---

### Q14. Vodafone's MLOps migration on Vertex AI improved their model-update velocity from ~2/month to: *(Analyze)*
A. ~2/month (no change)
B. ~25/month
C. ~1000/month
D. None, they stopped shipping

---

### Q15. A model's prediction accuracy drops 10% over 3 weeks on production traffic. The MOST LIKELY cause: *(Apply)*
A. Auth misconfiguration
B. Data or prediction drift; Model Monitoring should have alerted
C. Quota exhausted
D. CMEK expired

---

### Q16. The MOST APPROPRIATE deployment for a public-internet-accessible online predictor: *(Apply)*
A. Public Endpoint with autoscaling + monitoring
B. Private Endpoint (no public reach)
C. Batch Prediction
D. Cloud Run only

---

### Q17. The MOST APPROPRIATE deployment for a VPC-SC-compliant predictor: *(Apply)*
A. Public Endpoint
B. Private Endpoint (VPC-only)
C. Cloud Functions
D. GitHub Pages

---

### Q18. ML Metadata (MLMD) in Vertex AI Pipelines: *(Understand)*
A. Stores user passwords
B. Tracks every artifact, parameter, metric per pipeline run + lineage
C. Logs only
D. Replaces Model Registry

---

### Q19. The CORRECT way to set up a regression-tested ML CI/CD: *(Apply)*
A. Push to main; SSH to prod
B. GitHub/Source Repo → Cloud Build (unit tests + container build) → Artifact Registry → Vertex AI Pipelines (ingest+train+eval+register+canary) → Monitoring → auto-rollback
C. Notebook + SCP
D. Trust the model

---

### Q20. The MAIN advantage of caching enabled in Vertex AI Pipelines: *(Understand)*
A. Smaller models
B. Unchanged steps reuse cached output; reproducibility + faster reruns + lower cost
C. Encryption
D. None

---

### Q21. For an ML team with 100+ data scientists and 300+ models, the BEST platform choice: *(Apply)*
A. Local notebooks per scientist (chaos)
B. Vertex AI consolidated (Workbench + Pipelines + Registry + Monitoring + Feature Store)
C. SageMaker (different cloud)
D. Pure GitHub

---

### Q22. The KEY benefit of `min_replica_count >= 2` on an Endpoint: *(Understand)*
A. Cost reduction
B. High availability (no single replica failure causes downtime)
C. Faster training
D. None

---

### Q23. Cloud Trace is BEST for: *(Apply)*
A. Counting tokens
B. Distributed tracing across multi-step calls (e.g., Gemini agent making 5 function calls); per-span timing
C. Backups
D. Auth

---

### Q24. Which is FALSE? *(Evaluate)*
A. Pipelines tracks artifact lineage via MLMD
B. Vizier uses Bayesian optimization for hyperparameter tuning
C. Model Registry stores predictions
D. Feature Store eliminates training/serving skew

---

### Q25. Design challenge: A fintech wants a Vertex AI MLOps stack for 50 ML models, EU residency, daily retrain, audit trail for regulators. MINIMUM stack: *(Create)*
A. Local Jupyter
B. Workbench (EU region) + Pipelines (scheduled daily, eval-gated registration) + Feature Store (training/serving skew) + Model Registry (versions + lineage) + Endpoints (canary via traffic_split + autoscale) + Model Monitoring (drift + skew + alerts + auto-rollback) + Cloud Build CI → Artifact Registry → Pipelines + Cloud Logging + VPC-SC + CMEK
C. SageMaker
D. Self-host Kubeflow

---

## 🎯 Answers + Explanations

### Q1: **A. Ingest → train → register → deploy → monitor → retrain**
### Q2: **B. Kubeflow Pipelines v2 (KFP) + TFX**
### Q3: **B. Pipelines has ML metadata + lineage**
### Q4: **B. Trained models with versions + metadata + lineage**
### Q5: **B. 90% v1 / 10% v2 canary**
### Q6: **A. Skew, prediction drift, data drift**
### Q7: **B. Single source of truth for features → eliminates skew**
### Q8: **B. Vizier**
### Q9: **B. AutoML Tabular**
### Q10: **B. Pipelines + eval-gate + Registry + Endpoint canary + Monitoring + rollback**
### Q11: **B. Update traffic_split to 100% on older model**
### Q12: **B. Artifact Registry**
### Q13: **B. Scheduled, data-driven, drift-driven, performance-driven**
### Q14: **B. ~25/month (12× improvement)**
### Q15: **B. Data/prediction drift; Model Monitoring**
### Q16: **A. Public Endpoint with autoscaling + monitoring**
### Q17: **B. Private Endpoint (VPC-only)**
### Q18: **B. Artifact + parameter + metric tracking + lineage**
### Q19: **B. Git → Cloud Build → Artifact Registry → Pipelines → Monitoring → rollback**
### Q20: **B. Reuse + reproducibility + speed + cost**
### Q21: **B. Vertex AI consolidated**
### Q22: **B. High availability**
### Q23: **B. Distributed tracing + per-span timing**
### Q24: **C. Model Registry stores predictions, FALSE**
It stores models, not predictions.
### Q25: **B. The full MLOps stack**

---

## 📊 Score Yourself

- 24–25/25 → 🏆 Module 9 mastered.
- 21–23/25 → ✅ Solid.
- <21/25 → Re-read the MLOps loop + monitoring sections.

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 10, Production Patterns & Capstone](../Module-10-Production-Capstone/Reading.md)
