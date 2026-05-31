# Module 9: MLOps on Vertex AI ⚙️

> **Why this module matters:** This is the heaviest-weight module of the **Professional Machine Learning Engineer (PMLE)** exam — roughly 35% of the blueprint touches the topics here. Even on the Generative AI Leader exam, MLOps fluency is what separates a "knows the API" engineer from a "ships in production" architect. By the end of this module you can describe, draw, and code the canonical Vertex AI MLOps loop: training → registry → deployment → monitoring → retrain.

> **Prerequisites for this module.** Modules 1–8 finished. Module 3 in particular — you should know what Workbench, Pipelines, Registry, Endpoints, and Monitoring are at a one-line level. This module gives you depth on each.

---

## 📖 A Story: Why Vodafone Stopped Editing Notebooks

It is January 2022. **Vodafone's** ML platform team in Newbury, UK, supports ~300 ML models across the company — from customer-churn predictors to network-anomaly detectors to call-quality forecasts. Their published case study (Google Cloud Next 2023) describes a pattern that will sound familiar to any ML team without MLOps: every model was a Jupyter notebook on someone's laptop or VM, trained by hand, copied to production via SSH, monitored via "wait for someone to complain."

The team's pre-MLOps process for shipping a model update:

1. Data scientist trains v2 of the model in their notebook
2. Manually evaluates against a holdout (mostly remembered from v1)
3. Pickle the model; SCP it to a prod VM
4. Restart the prediction service
5. Watch for support tickets
6. Hope

When they migrate to **Vertex AI Pipelines + Model Registry + Endpoints + Model Monitoring** through 2022–2024, the same model update is:

1. The pipeline runs nightly; reads fresh data from BigQuery
2. Trains v2 with versioned hyperparameters
3. Auto-evals against the holdout; gated registration if metrics regress
4. Registers v2 to Model Registry as a new version
5. Deploys v2 to the existing Endpoint with a `traffic_split` of {v1: 90%, v2: 10%}
6. Vertex AI Model Monitoring watches both versions; if v2 regresses on serving data, traffic rolls back automatically
7. After 48 hours of stable canary, the pipeline promotes v2 to 100%

The team's published numbers: pre-MLOps, they shipped ~2 model updates per month. Post-MLOps, ~25 per month. Same headcount. Each update has a full audit trail, automatic rollback, and the data scientists never SSH into prod again.

This story is the *point* of MLOps on Vertex AI. The exam tests every step of this loop: the registry, the pipelines, the canary, the monitoring, the rollback. Memorize the loop.

---

## ⚙️ The Vertex AI MLOps Loop (Memorize)

```
            ┌─────────────────────────┐
            │ 1. INGEST (BigQuery /   │
            │    GCS / Pub-Sub)       │
            └──────────┬──────────────┘
                       ↓
            ┌─────────────────────────┐
            │ 2. PREPROCESS + VALIDATE│
            │    (Pipelines step;     │
            │    schema check)        │
            └──────────┬──────────────┘
                       ↓
            ┌─────────────────────────┐
            │ 3. TRAIN                │
            │    (Pipelines step;     │
            │    logs → Experiments   │
            │    + TensorBoard)       │
            └──────────┬──────────────┘
                       ↓
            ┌─────────────────────────┐
            │ 4. EVAL vs HOLDOUT      │
            │    (gate: if metric     │
            │    below threshold,     │
            │    halt the run)        │
            └──────────┬──────────────┘
                       ↓
            ┌─────────────────────────┐
            │ 5. REGISTER             │
            │    (Model Registry      │
            │    new version)         │
            └──────────┬──────────────┘
                       ↓
            ┌─────────────────────────┐
            │ 6. DEPLOY (canary)      │
            │    traffic_split={      │
            │      v1: 90, v2: 10     │
            │    }                    │
            └──────────┬──────────────┘
                       ↓
            ┌─────────────────────────┐
            │ 7. MONITOR              │
            │    (skew, drift,        │
            │     quality, latency)   │
            └──────────┬──────────────┘
                       ↓
            ┌─────────────────────────┐
            │ 8. ROLLBACK or PROMOTE  │
            │    (auto on regression, │
            │     manual on success)  │
            └──────────┬──────────────┘
                       │
                       └─── back to step 1 (next cycle)
```

The PMLE exam tests every arrow on this diagram.

---

## 🛤️ Vertex AI Pipelines — Deep Dive

**Vertex AI Pipelines** orchestrates the loop. Built on **Kubeflow Pipelines v2 (KFP)** or **TensorFlow Extended (TFX)**, it gives you:

- **DAG of containerized steps** — each step is a reusable container
- **Artifact tracking** — outputs of each step are logged with lineage
- **ML Metadata (MLMD)** — backing store for "what produced this artifact, with what inputs"
- **Schedule** — cron-style or trigger-based
- **Retry + caching** — re-running an unchanged step uses cached output
- **Visualization** — pipeline graph in the Vertex AI UI

### Defining a pipeline in KFP

```python
from kfp import dsl
from kfp.compiler import Compiler

@dsl.component(base_image="python:3.11", packages_to_install=["google-cloud-bigquery"])
def ingest(table: str, output_path: dsl.OutputPath()):
    """Reads from BigQuery; writes to GCS."""
    from google.cloud import bigquery
    df = bigquery.Client().query(f"SELECT * FROM {table}").result().to_dataframe()
    df.to_csv(output_path, index=False)

@dsl.component(base_image="python:3.11")
def train(data_path: dsl.InputPath(), model_path: dsl.OutputPath(),
          learning_rate: float = 0.001, epochs: int = 10):
    import pandas as pd
    df = pd.read_csv(data_path)
    # … train your model …
    # save to model_path

@dsl.component
def evaluate(model_path: dsl.InputPath(), test_data_path: dsl.InputPath()) -> float:
    # returns metric (e.g., AUC)
    return 0.93

@dsl.pipeline(name="my-pipeline")
def my_pipeline(table: str = "myproj.mydataset.training_data"):
    data = ingest(table=table)
    model = train(data_path=data.outputs["output_path"], learning_rate=0.001, epochs=10)
    auc = evaluate(model_path=model.outputs["model_path"], test_data_path=data.outputs["output_path"])
    with dsl.If(auc.output > 0.9, name="auc_gate"):
        register_op(model=model.outputs["model_path"])  # custom component

Compiler().compile(my_pipeline, "pipeline.json")
```

### Submitting a run

```python
from google.cloud import aiplatform

aiplatform.init(project="my-proj", location="us-central1")
job = aiplatform.PipelineJob(
    display_name="my-pipeline-run-2026-05-30",
    template_path="pipeline.json",
    pipeline_root="gs://my-bucket/pipeline-root/",
    parameter_values={"table": "myproj.mydataset.training_data"},
    enable_caching=True,
)
job.run(sync=True)
```

### Scheduled pipelines

```python
from google.cloud.aiplatform import PipelineJobSchedule

PipelineJobSchedule(
    pipeline_job=job,
    display_name="nightly-retrain",
).create(cron="0 2 * * *")    # 2 AM daily
```

🎯 **Exam pattern:** *"A team wants reproducible nightly training with metric-gated registration and rollback."* → **Vertex AI Pipelines with eval-gate component + Model Registry + Endpoint canary + Model Monitoring rollback.**

---

## 📦 Model Registry Deep Dive

**Vertex AI Model Registry** is the central catalog. Each model has:
- **Display name** (`"customer-churn"`)
- **Versions** (`1`, `2`, `3` — semantic or sequential)
- **Artifacts** (the weights, in GCS or container)
- **Metadata** (training params, source dataset, evaluation metrics, lineage to pipeline run)
- **Labels** (key-value tags for filtering)

```python
from google.cloud import aiplatform
aiplatform.init(project="my-proj", location="us-central1")

# Upload a new model version
model_v2 = aiplatform.Model.upload(
    display_name="customer-churn",
    parent_model="customer-churn",   # link to the same model family
    artifact_uri="gs://my-bucket/models/churn-v2/",
    serving_container_image_uri="us-docker.pkg.dev/vertex-ai/prediction/tf2-cpu:latest",
    labels={"team": "growth", "env": "prod"},
    description="Trained 2026-05-30 with 10% more data",
)

# List versions
versions = aiplatform.Model.list(filter='display_name="customer-churn"')
for v in versions:
    print(v.name, v.version_id, v.labels)
```

**Lineage** — clicking a model in the UI shows you the pipeline run that produced it, the source dataset, the training params, and the evaluation metrics. Critical for "why was this prediction made" audits.

🎯 **Exam pattern:** *"A regulator asks 'when was this prediction made, by which model version, trained on what data?'"* → **Model Registry version + lineage** — every artifact traces back to a pipeline run + dataset.

---

## 🚀 Endpoints — Real-Time, Batch, Private

(Reprise from Module 3 with deployment depth.)

### Online Endpoint

```python
endpoint = aiplatform.Endpoint.create(display_name="churn-endpoint")
endpoint.deploy(
    model=model_v2,
    deployed_model_display_name="churn-v2",
    machine_type="n1-standard-4",
    min_replica_count=2,
    max_replica_count=20,
    traffic_split={"0": 100},
    enable_access_logging=True,
)

# Add canary
endpoint.deploy(model=model_v3, traffic_split={"0": 90, "1": 10})  # 90% v2 / 10% v3
```

**Auto-scaling**: based on CPU utilization, request rate, or custom metric. Set `min_replica_count` ≥ 2 for HA.

### Batch Prediction

```python
job = model.batch_predict(
    job_display_name="nightly-scoring",
    gcs_source=["gs://b/input/*.csv"],
    gcs_destination_prefix="gs://b/output/",
    instances_format="csv",
    predictions_format="jsonl",
)
```

Async; no scaling concerns; cheapest per prediction.

### Private Endpoint (VPC-SC)

```python
private_endpoint = aiplatform.PrivateEndpoint.create(
    display_name="churn-private",
    network="projects/my-proj/global/networks/my-vpc",
)
```

No public internet; reachable only from within the VPC. Required for VPC-SC compliance.

---

## 🎚️ Generative-AI Endpoints (Gemini)

For Gemini, you do NOT manage replicas — Google does. You either:

- **PAYG** — pay per token, subject to per-region quotas
- **Provisioned Throughput** — reserved GSCU capacity for steady high-volume workloads

Module 3 covered the breakeven. From an MLOps view:

- **Logging:** Cloud Logging captures every call (with `enable_access_logging=True` on Vertex)
- **Monitoring:** custom dashboards (Cloud Monitoring) on cost, latency, throughput, error rate
- **Tracing:** Cloud Trace for end-to-end span timing (especially with multi-step agent calls)
- **Quality monitoring:** offline LLM-as-judge eval against a fixed test set (Vertex AI Evaluation Service); plus production sampling for live quality checks

---

## 📈 Model Monitoring Deep Dive

**Vertex AI Model Monitoring** detects:

| Failure | What it is | Why it matters |
|---------|-----------|----------------|
| **Training/serving skew** | Features at serving differ from training distribution | The model's predictions on prod data are unreliable |
| **Prediction drift** | Distribution of predictions shifts over time | World is changing; model is stale |
| **Data drift** | Distribution of input features shifts over time | Upstream pipeline change or world change |
| **Quality drift** | Ground-truth accuracy drops (when labels arrive) | The real KPI |

### Configuration

```python
from google.cloud.aiplatform import model_monitoring as mm

mm.ModelDeploymentMonitoringJob.create(
    display_name="churn-monitoring",
    endpoint=endpoint,
    sample_rate=0.1,    # 10% of requests sampled
    monitor_interval=3600,   # check every hour
    schedule="0 * * * *",
    alert_config=mm.EmailAlertConfig(user_emails=["ml-oncall@acme.com"]),
    objective_config={
        "training_dataset": mm.TrainingDataset(bigquery_source="bq://proj.churn.training_v3"),
        "training_prediction_skew_detection_config": {
            "skew_thresholds": {"customer_age": 0.3, "purchase_count": 0.2},
        },
        "prediction_drift_detection_config": {
            "drift_thresholds": {"customer_age": 0.3},
        },
    },
)
```

**Output:** drift reports, Cloud Logging signals, Pub/Sub alerts, Cloud Monitoring dashboards.

### For generative models

GenAI-specific monitoring includes:
- **Response quality** sampled with LLM-as-judge
- **Safety triggers** rate (how often safety_settings or recitation fires)
- **Citation rate** (% of responses with grounding citations)
- **User-feedback signal** (thumbs-up/down captured by the application)

🎯 **Exam pattern:** *"A model's predictions look normal to the API but accuracy on live traffic is dropping over weeks."* → **Training/serving skew or data drift; turn on Model Monitoring with skew + drift detection.**

---

## 🏃 Training Patterns — Custom, AutoML, Hyperparameter Tuning

For PMLE, three training patterns matter:

### 1. Custom training jobs

```python
job = aiplatform.CustomContainerTrainingJob(
    display_name="train-churn",
    container_uri="gcr.io/my-proj/trainer:v1",
    model_serving_container_image_uri="gcr.io/my-proj/serve:v1",
)
model = job.run(
    args=["--lr=0.001", "--epochs=20"],
    machine_type="n1-standard-8",
    accelerator_type="NVIDIA_TESLA_T4",
    accelerator_count=1,
    base_output_dir="gs://my-bucket/training/",
)
```

### 2. AutoML

For tabular / image / text classification problems, Vertex AI AutoML trains state-of-the-art models from a dataset with minimal code:

```python
dataset = aiplatform.TabularDataset.create(
    display_name="churn-data",
    bq_source="bq://proj.dataset.training",
)
job = aiplatform.AutoMLTabularTrainingJob(
    display_name="automl-churn",
    optimization_prediction_type="classification",
    optimization_objective="maximize-au-roc",
)
model = job.run(dataset=dataset, target_column="churned")
```

### 3. Hyperparameter Tuning (Vizier)

```python
from google.cloud.aiplatform import hyperparameter_tuning as hpt

job = aiplatform.HyperparameterTuningJob(
    display_name="tune-lr",
    custom_job=base_custom_job,
    metric_spec={"val_loss": "minimize"},
    parameter_spec={
        "lr": hpt.DoubleParameterSpec(min=0.0001, max=0.01, scale="log"),
        "batch_size": hpt.IntegerParameterSpec(min=32, max=512, scale="log"),
    },
    max_trial_count=40,
    parallel_trial_count=4,
)
job.run()
```

Behind the scenes uses Google's **Vizier** Bayesian-optimization service.

🎯 **Exam pattern:** *"A team needs the best hyperparameters for a deep model without exhaustive grid search."* → **Hyperparameter Tuning Job with Vizier.**

---

## 🗄️ Feature Store

Already introduced in Module 3; full reference here for PMLE.

**Vertex AI Feature Store** is the *single source of truth* for features used in both training and serving. It solves the canonical training/serving skew problem.

```python
from google.cloud.aiplatform import FeatureGroup, Feature

fg = FeatureGroup.create(
    name="customer_features",
    source_uri="bq://proj.dataset.customers",
)
feat_age = Feature.create(name="age", feature_group=fg.name, value_type="INT64")
feat_purchase_count = Feature.create(name="purchase_count_30d", feature_group=fg.name, value_type="INT64")

# Online serving
client = aiplatform_v1.FeatureOnlineStoreServiceClient()
features = client.fetch_feature_values(
    feature_view="projects/x/locations/y/featureOnlineStores/z/featureViews/customer_features",
    data_key={"key": "user_id_12345"},
)
```

🎯 **Exam pattern:** *"Online predictions diverge from offline training metrics. Investigation shows different feature computations in the two pipelines."* → **Use Vertex AI Feature Store as single source of truth.**

---

## 🔁 Continuous Training (CT) Patterns

For PMLE, four CT triggers matter:

| Trigger | Why |
|---------|-----|
| **Scheduled (nightly / weekly)** | Standard for slowly-changing distributions |
| **Data-driven** (Pub/Sub event when new training data lands) | Stream-trained models |
| **Drift-driven** (Model Monitoring alerts trigger retrain) | Auto-recover from drift |
| **Performance-driven** (quality metric drops below threshold) | Closed-loop adaptation |

Implementation: a Vertex AI Pipeline that takes the trigger from Cloud Scheduler / Pub/Sub / Eventarc.

---

## 🛡️ Observability — Logging + Tracing + Cost

| Layer | Tool | What |
|-------|------|------|
| **Application logs** | Cloud Logging | Every API call, request/response metadata, error stack traces |
| **Latency / spans** | Cloud Trace | End-to-end distributed tracing for multi-step calls |
| **Metrics + dashboards** | Cloud Monitoring | Counters, gauges, histograms; alerts; SLO tracking |
| **Cost** | Cloud Billing reports + Vertex AI Pricing Calculator | Per-project, per-service spend |
| **GenAI quality** | Vertex AI Evaluation Service + custom LLM-as-judge | Sampled prod-call quality |

🎯 **Exam pattern:** *"A multi-step Gemini agent has unpredictable latency."* → **Cloud Trace** for per-span timing across function calls.

---

## ⚙️ CI/CD for ML

Standard pattern on Google Cloud:

1. Code lives in **GitHub** or **Cloud Source Repositories**
2. Push triggers **Cloud Build** (or GitHub Actions)
3. Cloud Build runs unit tests, builds containers, pushes to **Artifact Registry**
4. Vertex AI Pipelines submitted with the new container
5. Pipeline does ingest → train → eval → register → deploy

The PMLE exam tests this flow specifically; expect questions like "where does the model container live?" → **Artifact Registry** (formerly Container Registry).

---

## 📊 Vodafone Case Study — Numbers

From the Google Cloud Next 2023 presentation:

| Metric | Before Vertex AI MLOps | After |
|--------|------------------------|-------|
| Models in production | ~300 | ~300 (consolidated) |
| Model updates / month | 2 | 25 |
| Mean time to deploy (PR → prod) | 2 weeks | 4 hours |
| Production incidents from bad deploys | ~5/month | ~0.5/month |
| Data scientist time spent on "ops" | ~30% | ~5% |
| Audit-trail completeness | Partial (notebooks lost) | 100% (lineage in MLMD) |

The improvement is not magical — it is consistent application of: **pipeline orchestration + registry + canary + monitoring + auto-rollback**.

---

## ⚠️ MLOps Exam Traps

| Misconception | Reality |
|---------------|---------|
| "Pipelines = Cloud Build." | **Different.** Cloud Build is generic CI; Pipelines has ML metadata + lineage. |
| "Model Registry stores predictions." | **No.** It stores *models* with versions + metadata. Predictions go to BigQuery / Cloud Logging / GCS. |
| "Auto-scaling makes capacity infinite." | **No.** `max_replica_count` is a hard cap. Misconfigured = real outages. |
| "Vertex AI Feature Store is optional." | **It's optional but solves a real problem** — training/serving skew. Used by every mature ML team. |
| "Hyperparameter tuning is exhaustive grid search." | **No.** Vizier uses Bayesian optimization to find good params with far fewer trials. |
| "AutoML is for beginners only." | **No.** Strong production option for tabular / image / text classification. Mature teams use both. |
| "Endpoints scale independently of Model Registry." | **No.** Deployments reference Model Registry versions. Rollback = re-route traffic to an earlier version. |
| "Continuous Training means continuous online learning." | **No.** It means continuous *retraining* (batch). Online learning is a separate, harder pattern. |
| "Logging is free." | **No.** Cloud Logging has per-byte costs. Set retention + sampling appropriately. |
| "GenAI doesn't need monitoring." | **It does.** Quality drift, safety triggers, cost spikes, citation rates all need watching. |

---

## 🎓 Key Terms

| Term | Definition |
|------|------------|
| **MLOps** | Practices for shipping + operating ML in production |
| **Vertex AI Pipelines** | Kubeflow-based ML orchestration |
| **KFP** | Kubeflow Pipelines v2 |
| **TFX** | TensorFlow Extended |
| **MLMD** | ML Metadata — Pipelines' backing store for lineage |
| **Model Registry** | Central catalog of trained models with versions |
| **Endpoint** | Managed serving (online, batch, private) |
| **Canary** | Partial-traffic rollout for risk reduction |
| **traffic_split** | Per-version traffic distribution on an Endpoint |
| **Model Monitoring** | Skew, drift, quality detection |
| **Feature Store** | Online + offline feature serving for skew elimination |
| **Vizier** | Google's Bayesian hyperparameter-tuning service |
| **AutoML** | Vertex AI's automated model training |
| **HPT** | Hyperparameter Tuning |
| **CT** | Continuous Training |
| **CI/CD for ML** | Code → tests → containers → pipelines → deploy |
| **Cloud Build** | Google's generic CI service |
| **Artifact Registry** | Container + package storage |
| **Cloud Trace** | Distributed tracing |
| **Cloud Logging** | Logs |
| **Cloud Monitoring** | Metrics + alerts |

---

## ✅ Module 9 Summary

You now know:
- ⚙️ **The Vertex AI MLOps loop** — 8 stages
- 🛤️ **Pipelines** with KFP v2 + scheduling + caching
- 📦 **Model Registry** with versions + lineage
- 🚀 **Endpoints** — online, batch, private; canary via traffic_split
- 📈 **Model Monitoring** — skew, drift, quality
- 🏃 **Training patterns** — custom, AutoML, HPT with Vizier
- 🗄️ **Feature Store** for training/serving skew
- 🔁 **Continuous Training** triggers
- 🛡️ **Observability** — Logging + Trace + Monitoring + Cost
- ⚙️ **CI/CD for ML** with Cloud Build + Artifact Registry
- 📊 **Vodafone numbers** — the MLOps ROI

**Next:** [Module 10 — Production Patterns & Capstone](../Module-10-Production-Capstone/Reading.md)

---

## 📚 Further Reading

- 📖 [Vertex AI MLOps overview](https://cloud.google.com/vertex-ai/docs/start/cloud-environment)
- 📖 [Pipelines docs](https://cloud.google.com/vertex-ai/docs/pipelines)
- 📖 [Model Registry](https://cloud.google.com/vertex-ai/docs/model-registry)
- 📖 [Model Monitoring](https://cloud.google.com/vertex-ai/docs/model-monitoring/overview)
- 📖 [Feature Store](https://cloud.google.com/vertex-ai/docs/featurestore/latest/overview)
- 📖 [Vizier docs](https://cloud.google.com/vertex-ai/docs/vizier/overview)
- 📖 [Continuous Training architecture](https://cloud.google.com/architecture/mlops-continuous-delivery-and-automation-pipelines-in-machine-learning)
- 📖 Vodafone × Google Cloud Next 2023 case study
