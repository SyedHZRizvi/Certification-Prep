# 📋 Module 9 Cheat Sheet: MLOps on Vertex AI

> Memorize the loop. Drill the components.

---

## ⚙️ The MLOps Loop (8 stages)

```
Ingest → Preprocess → Train → Eval gate → Register → Deploy (canary) → Monitor → Promote/Rollback
                                                                                       ↑
                                                                                  ←──────
```

---

## 🛤️ Vertex AI Pipelines

- **Built on:** Kubeflow Pipelines v2 (KFP) — or TFX
- **DAG:** containerized steps
- **Tracking:** ML Metadata (MLMD) for artifacts + lineage
- **Schedule:** PipelineJobSchedule with cron
- **Caching:** unchanged steps reuse output

```python
from kfp import dsl
from kfp.compiler import Compiler

@dsl.pipeline(name="train-and-deploy")
def pipe():
    data = ingest_op()
    model = train_op(data=data.outputs["dataset"])
    auc = eval_op(model=model.outputs["model"])
    with dsl.If(auc.output > 0.9):
        register_op(model=model.outputs["model"])

Compiler().compile(pipe, "pipeline.json")
```

---

## 📦 Model Registry

- One registry, per-model versioning
- Lineage to pipeline run + dataset
- Labels for filtering
- Source of truth for deployment

```python
model_v2 = aiplatform.Model.upload(
    display_name="churn",
    parent_model="churn",
    artifact_uri="gs://b/churn-v2/",
    serving_container_image_uri="us-docker.pkg.dev/vertex-ai/prediction/tf2-cpu:latest",
)
```

---

## 🚀 Endpoints

| Type | Use |
|------|-----|
| **Online** | Real-time HTTPS/gRPC; autoscale; traffic_split for canary |
| **Batch** | Async GCS → GCS; cheapest |
| **Private** | VPC-only; required for VPC-SC |

```python
endpoint.deploy(
    model=v2,
    min_replica_count=2,
    max_replica_count=20,
    traffic_split={"0": 90, "1": 10},   # canary
)
```

---

## 📈 Model Monitoring

| Detects | Why |
|---------|-----|
| Training/serving skew | Features at serving ≠ training |
| Prediction drift | Predictions distribution shifts |
| Data drift | Input feature distribution shifts |
| Quality drift | Ground-truth accuracy drops |

```python
mm.ModelDeploymentMonitoringJob.create(
    endpoint=endpoint,
    sample_rate=0.1,
    schedule="0 * * * *",
    alert_config=mm.EmailAlertConfig(user_emails=["oncall@acme.com"]),
)
```

---

## 🏃 Training Patterns

| Pattern | Use |
|---------|-----|
| **Custom container** | Any model, any framework |
| **AutoML** | Tabular / image / text classification with min code |
| **Hyperparameter Tuning** | Vizier Bayesian search |

---

## 🗄️ Feature Store

Solves training/serving skew. One source of truth.

```python
fg = FeatureGroup.create(name="customer_features", source_uri="bq://proj.ds.customers")
# Online + offline serving from same definitions
```

---

## 🔁 Continuous Training Triggers

| Trigger | Source |
|---------|--------|
| Scheduled | Cloud Scheduler / cron |
| Data-driven | Pub/Sub events |
| Drift-driven | Model Monitoring alerts |
| Performance-driven | Metric below threshold |

---

## 🛡️ Observability Stack

| Layer | Tool |
|-------|------|
| Logs | Cloud Logging |
| Traces | Cloud Trace (distributed spans) |
| Metrics + alerts | Cloud Monitoring |
| Cost | Cloud Billing |
| GenAI quality | Vertex AI Evaluation Service |

---

## ⚙️ CI/CD for ML

```
GitHub / Source Repo
   ↓ push
Cloud Build (tests + container build)
   ↓
Artifact Registry (image storage)
   ↓
Vertex AI Pipelines (ingest+train+eval+register+canary)
   ↓
Model Monitoring (rollback on regression)
```

---

## 🎯 Power Phrases

✅ Often **right**:
- "Pipelines have ML Metadata + lineage; Cloud Build is generic CI"
- "Model Registry = versioned models + lineage to pipeline run"
- "traffic_split = canary deploy"
- "Feature Store eliminates training/serving skew"
- "Vizier = Bayesian hyperparameter tuning"
- "AutoML for tabular / image / text classification"
- "Continuous Training = scheduled / data / drift / performance"
- "Private Endpoint for VPC-SC"
- "Cloud Trace for multi-step agent latency"

❌ Often **wrong**:
- "Pipelines = Cloud Build" (different)
- "Model Registry stores predictions" (stores models)
- "AutoML is for beginners only" (strong production option)
- "Auto-scaling = infinite capacity" (max_replicas hard cap)
- "Continuous Training = online learning" (retraining, not online)
- "Cloud Logging is free" (per-byte cost)

---

## 📊 Vodafone Numbers (Memorize)

| Metric | Before | After |
|--------|--------|-------|
| Updates/month | 2 | 25 |
| Deploy time | 2 weeks | 4 hours |
| Bad-deploy incidents | 5/mo | 0.5/mo |
| Audit completeness | Partial | 100% |

---

## ✏️ Quick Self-Check

1. The 8 stages of the loop? ___
2. Pipelines vs Cloud Build? ___
3. traffic_split syntax for canary? ___
4. 3 Model Monitoring failure modes? ___
5. Vizier in one sentence? ___

If all 5 in <90s, you own this module. ✅

---

➡️ [Module 10: Production Patterns & Capstone](../Module-10-Production-Capstone/Reading.md)
