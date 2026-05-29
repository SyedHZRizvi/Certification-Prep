# Module 9: MLOps — Pipelines, Deployment & Monitoring 🚀

> **Why this module matters:** Domain 4 of MLS-C01 (ML Implementation & Operations) is **20%** of the exam. It tests the production side of ML: pipelines, deployment patterns, monitoring, retraining, A/B tests, blue-green releases, shadow deployments. This is also the area where most candidates lose points because their hands-on experience is heavier on training than on operating. This module makes you fluent in SageMaker Pipelines, the four endpoint types, Model Registry, Model Monitor, and the CI/CD glue (Projects, CodePipeline, EventBridge, Step Functions).

> **Prerequisites for this module.** Modules 1–8 of this course. Helpful background:
> - Familiarity with CI/CD concepts (build → test → deploy)
> - Module 4's SageMaker SDK structure
> - Module 8's metrics + Clarify

---

## 🍕 A Story: From 1 Model To 73 Models In Two Years

Meet Sara. She runs MLE at a 200-engineer SaaS company. In 2022 they had **one** production ML model — a churn predictor — that they retrained quarterly by running a Jupyter notebook by hand. Releases were "Sara commits a new model artifact to S3 and Slack-pings the platform team to redeploy the API." It worked. Until it didn't.

By mid-2023 they had **9** production models. Each one had a different deployment process. When the upstream Snowflake schema changed, **5 of the 9 models silently broke** for two weeks before anyone noticed. The CEO wrote a memo: "We are *operating* this thing like 1995 PHP."

In 2024 Sara rebuilt the ML platform on AWS:
- **SageMaker Pipelines** for every retraining workflow
- **Model Registry** with mandatory approval before deployment
- **SageMaker Projects** for templated CI/CD per model
- **Model Monitor** for data + bias drift
- **CloudWatch alarms** on drift + latency + cost anomalies
- **Blue-green and shadow** deployment patterns per model
- **EventBridge** to retrain on upstream data freshness signals

By end of 2024 they had **73** production models with **3** MLOps engineers. Each model retrained automatically and deployed via PR with code review. The CEO's next memo was about hiring more product engineers — not more ML platform staff.

That is the lesson of Module 9. The hard part of production ML is **operating** it, not training it.

---

## 🔁 SageMaker Pipelines — Native ML CI/CD

SageMaker Pipelines is a DAG (directed acyclic graph) of ML workflow steps, designed specifically for ML.

### Step types

| Step | Purpose |
|------|---------|
| **Processing** | Run a Processing job (Spark, scikit, custom container) — preprocess data |
| **Training** | Run a training job |
| **Tuning** | Run an HPO job |
| **Model** | Create a Model artifact |
| **RegisterModel** | Register in Model Registry |
| **Lambda** | Invoke a Lambda function (lightweight glue) |
| **Condition** | If/else branching on metrics |
| **CallbackStep** | External step (e.g. wait for Step Functions) |
| **EMR** | Run an EMR job |
| **Quality / Bias / Explainability** | Clarify or Model Monitor pre-deploy checks |
| **Fail** | Explicitly fail the pipeline (e.g. metric below threshold) |
| **AutoML** | Run an Autopilot job |

### Example pipeline structure

```
DataIngestion (Processing)
        ↓
DataValidation (Processing — Deequ / Great Expectations)
        ↓
Train (Training)
        ↓
Evaluate (Processing — compute metrics)
        ↓
ConditionStep: AUC > 0.85?
   YES → RegisterModel → DeployStep (Lambda triggers endpoint update)
   NO  → FailStep
```

🎯 **Exam pattern.** *"Build a repeatable ML workflow with conditional deployment if accuracy passes threshold."* → **SageMaker Pipelines** with `ConditionStep`.

### Pipelines vs Step Functions vs Airflow

| | SageMaker Pipelines | Step Functions | Airflow |
|-|---------------------|----------------|---------|
| **ML-aware** | ✅ Native | Generic | Generic |
| **Versioned** | ✅ | Partial | ✅ |
| **Integration with Model Registry** | ✅ | Manual | Manual |
| **Used by SageMaker Projects** | ✅ | — | — |
| **Best for ML** | ✅ | When you also orchestrate non-ML | If you already use Airflow |

🎯 **Exam pattern.** *"Choose ML-native orchestrator for SageMaker workflow."* → **SageMaker Pipelines**.

---

## 📦 Model Registry

A central catalogue of trained models with versioning and approval workflow.

| Concept | Detail |
|---------|--------|
| **Model package group** | A logical group (e.g. "customer-churn-models") |
| **Model package version** | A single trained model artifact + metadata |
| **Approval status** | `PendingManualApproval` / `Approved` / `Rejected` |
| **Inference specification** | Container image, instance type recommendation |
| **Model Card link** | Attached governance documentation |
| **Cross-account share** | Via RAM or Hub Pattern |

🎯 **Exam pattern.** *"Require human approval before deploying any new model version."* → **Model Registry approval workflow** + Lambda/EventBridge on `ApprovalStatus` change.

---

## 🏗️ SageMaker Projects

A **Project** is a templated end-to-end MLOps setup using:
- An AWS Service Catalog product
- **CodeCommit/CodeBuild/CodePipeline** for CI/CD of the model code
- **SageMaker Pipelines** for the training workflow
- **Model Registry** + automated deployment to staging / production

🎯 **Exam pattern.** *"Bootstrap a standard MLOps repo per team."* → **SageMaker Projects** with the MLOps template (CodePipeline + Pipelines + Registry + endpoints).

---

## 🚀 Inference / Deployment Patterns — The Four Endpoint Types

You MUST know this table cold. Many exam questions hinge on it.

| Endpoint type | Latency | Best for | Cost model |
|---------------|---------|----------|------------|
| **Real-time** | Sub-100 ms | Steady predictable traffic, low latency | Per instance-hour (always on) |
| **Serverless inference** | 100 ms - few seconds (cold start) | Sparse / unpredictable traffic | Per request |
| **Asynchronous inference** | Seconds to hours | Large payloads, long processing, queue OK | Per instance-hour (scales to 0 when idle) |
| **Batch transform** | Job-time | Offline scoring of large dataset | Per job; no endpoint |

### Real-time endpoints

- Always-on, multi-AZ
- Auto-scaling via CloudWatch metrics
- **Multi-Model Endpoint (MME)** — host many models on one endpoint, loaded on demand
- **Multi-Container Endpoint** — multiple containers behind one endpoint with routing
- **Inference Components** (2023+) — fine-grained component-level scaling

### Serverless inference

- Scales to **zero** between requests
- Pay per request + duration
- Cold-start ~1-3 seconds on first request after idle
- Memory size 1024 - 6144 MB
- Up to 200 concurrent invocations per endpoint

🎯 **Exam pattern.** *"Sparse traffic, occasional invocations, don't pay for idle."* → **Serverless inference**.

### Asynchronous inference

- Submit request → returns request ID
- Result delivered via S3 callback / SNS
- Supports payloads up to 1 GB
- Up to 1 hour processing per request
- Auto-scaling **including down to zero** when idle

🎯 **Exam pattern.** *"Process 500 MB document with a 10-minute inference job; not real-time critical."* → **Async inference**.

### Batch transform

- One-time or scheduled batch scoring of a dataset
- No long-lived endpoint
- Pay only for the job runtime
- Output to S3

🎯 **Exam pattern.** *"Score 50M records nightly."* → **Batch transform**.

### Multi-Model Endpoints (MME)

- Host hundreds-to-thousands of models on one endpoint
- Models loaded into memory on demand (some cold-start)
- Cost-optimal for many small models with sparse traffic per model

🎯 **Exam pattern.** *"500 per-customer fine-tuned XGBoost models with low traffic each."* → **MME** (Capital One pattern).

---

## 🎨 Deployment Strategies — Blue/Green, Canary, Shadow

| Strategy | How |
|----------|-----|
| **All-at-once (in-place)** | Replace old version with new; no rollback safety |
| **Blue/Green** | Deploy new (green) alongside old (blue); switch traffic; rollback by switching back |
| **Canary** | Route a small % to new; ramp up if healthy |
| **Linear** | Increase traffic to new in linear increments (e.g. +10% every 5 min) |
| **Shadow / dark launch** | Send a copy of production traffic to new model; compare results without affecting users |

SageMaker supports **blue/green with auto-rollback** based on CloudWatch alarms, **canary**, and **linear** out-of-the-box. **Shadow** is a deployment-time feature for endpoints.

🎯 **Exam pattern.** *"Test a new model on real traffic without risk to users."* → **Shadow variant**.

🎯 **Exam pattern.** *"Auto-rollback if 5xx rate exceeds 5%."* → **Blue/green with auto-rollback** on a CloudWatch alarm.

---

## 🔬 SageMaker Model Monitor

Detects drift in production after deployment. Four monitor types:

| Monitor | What it watches |
|---------|-----------------|
| **Data quality** | Distribution of input features vs baseline (statistics, missingness) |
| **Model quality** | Predictions vs ground truth labels (requires labels eventually) |
| **Bias drift** | Clarify-powered bias metrics over time |
| **Feature attribution drift** | SHAP-based attribution drift over time |

### Setup

1. **Baseline job** — compute baseline statistics on training data
2. **Schedule** — periodic comparison of production data to baseline
3. **Reports** — published to S3; CloudWatch alarms on violations

🎯 **Exam pattern.** *"Detect when a model's input feature distribution shifts in production."* → **Data Quality monitor** (one of four Model Monitor types).

🎯 **Exam pattern.** *"Detect when SHAP attribution shifts."* → **Feature Attribution Drift monitor**.

🎯 **Exam pattern.** *"Detect production bias drift on a deployed model."* → **Model Bias Monitor** (uses Clarify under the hood).

---

## ♻️ Automatic Retraining Patterns

| Trigger | Mechanism |
|---------|-----------|
| **Scheduled (cron-like)** | EventBridge schedule → Lambda → start Pipeline |
| **Drift-driven** | Model Monitor alarm → EventBridge → Lambda → Pipeline |
| **New data availability** | S3 EventBridge rule on new dataset → Pipeline |
| **Manual / on-demand** | Trigger via CodePipeline or SDK |

🎯 **Exam pattern.** *"Automatically retrain when data drift is detected."* → **Model Monitor alarm → EventBridge → Lambda → SageMaker Pipeline**.

---

## 🛡️ Endpoint Auto-Scaling

| Type | When |
|------|------|
| **Target tracking** | "Keep average requests per instance at X" — default |
| **Step scaling** | Scale by N instances when alarm threshold crossed |
| **Scheduled scaling** | Predictable patterns (e.g. business hours) |

Real-time endpoints can scale on `InvocationsPerInstance`, `CPUUtilization`, `GPUUtilization`, or custom CloudWatch metrics.

🎯 **Exam pattern.** *"Scale endpoint based on average requests/instance."* → **Target tracking** on `InvocationsPerInstance`.

---

## 📊 Observability — CloudWatch + X-Ray + CloudTrail

| Service | Use for ML |
|---------|------------|
| **CloudWatch Metrics** | Invocations, latency, errors, model-specific custom metrics |
| **CloudWatch Logs** | Endpoint inference logs, Pipeline step logs, training logs |
| **CloudWatch Alarms** | Trigger on drift, errors, latency, cost anomalies |
| **CloudWatch Synthetics** | Canary tests against endpoints |
| **AWS X-Ray** | Distributed trace through Lambda + endpoint + downstream services |
| **CloudTrail** | API audit — who called CreateEndpoint? |

🎯 **Exam pattern.** *"Identify root cause of inference latency spikes spanning Lambda, SageMaker endpoint, and DynamoDB."* → **AWS X-Ray** distributed traces.

---

## 🧪 A/B Testing & Multi-Variant Endpoints

A single SageMaker endpoint can host **multiple production variants** with traffic-splitting weights.

```python
predictor.update_endpoint(
    deployment_config={
        "BlueGreenUpdatePolicy": {...},
        "ProductionVariants": [
            {"VariantName": "ModelA", "InitialVariantWeight": 0.9},
            {"VariantName": "ModelB", "InitialVariantWeight": 0.1},
        ],
    },
)
```

🎯 **Exam pattern.** *"Compare two model versions on 10% / 90% traffic split."* → **Production variants** with weighted traffic.

---

## 🎁 Inference Recommender

SageMaker **Inference Recommender** automatically benchmarks your model on different instance types and recommends the cost-optimal one for your latency / throughput targets.

🎯 **Exam pattern.** *"Pick the cheapest endpoint instance type meeting <100 ms p95 latency."* → **Inference Recommender**.

---

## 📖 Case Study — Amazon Music's MLOps Stack

**Situation.** Amazon Music runs ~200 ML models in production (ranking, recommendations, query understanding, audio fingerprinting, content moderation). Per-model deployment was bespoke; on-call paged every week for some model misbehaving.

**Architecture (re:Invent 2023 — AIM403).**
- **SageMaker Pipelines** for every training workflow
- **Model Registry** with approval-required gates
- **SageMaker Projects** template per team
- **Model Monitor** on every endpoint with bias + data drift
- **Blue/green deployment** with CloudWatch-alarm-driven auto-rollback
- **EventBridge** for cross-pipeline triggers
- **Distributed tracing via X-Ray** for top-of-funnel latency tracing
- **CloudWatch dashboards** per model + per business KPI

**Outcome.** Page-out rate fell ~80%. New-model time-to-production fell from ~6 weeks to ~5 days. The team now ships 30+ model updates per week.

**Lesson for the exam.** This stack — **Pipelines + Registry + Projects + Monitor + Blue/Green + EventBridge** — is the *canonical* MLS-C01 reference architecture for production ML. Memorise the names and what each does.

---

## ⚠️ Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "Pipelines is just Step Functions for ML" | Pipelines is ML-aware (Registry integration, Quality steps, conditional deploys). Step Functions is generic. |
| "Real-time endpoints are always the right answer" | No. Sparse traffic → serverless; long jobs → async; one-off scoring → batch transform. |
| "Multi-Model Endpoint = Multi-Container Endpoint" | Different. MME loads many models in one container; MCE has multiple containers behind one endpoint. |
| "Blue/Green is automatic in SageMaker" | You configure it in the endpoint update; not automatic by default. |
| "Model Monitor handles bias too" | The Bias Monitor type does, via Clarify. There are 4 monitor types. |
| "Drift detection means you retrain immediately" | Drift alarm should trigger investigation; retraining decision depends on root cause. |
| "Inference Recommender picks the best model" | It picks the cost-optimal **instance type** for a given model. |
| "Async inference and serverless are the same" | Async is for long-running jobs; serverless is for sub-second sparse calls. |

---

## 🚨 Top Exam Traps (Module 9 Themes)

1. **"Repeatable ML workflow with conditional deploy"** → **SageMaker Pipelines** with `ConditionStep`.
2. **"Approval-gated deployment"** → **Model Registry** + approval workflow.
3. **"Bootstrap MLOps repo + CI/CD"** → **SageMaker Projects**.
4. **"Sparse traffic, pay-per-use"** → **Serverless inference**.
5. **"Long-running large-payload inference"** → **Async inference**.
6. **"Offline scoring of huge dataset"** → **Batch transform**.
7. **"Hundreds of per-customer models"** → **Multi-Model Endpoint**.
8. **"Test new model on real traffic risk-free"** → **Shadow variant**.
9. **"Auto-rollback on error"** → **Blue/green with CloudWatch alarm**.
10. **"Detect input distribution drift"** → **Data Quality monitor**.
11. **"Detect prediction quality drift"** → **Model Quality monitor**.
12. **"Detect bias drift"** → **Bias Monitor (Clarify)**.
13. **"Detect feature attribution drift"** → **Feature Attribution Drift monitor**.
14. **"Retrain on drift"** → **Monitor alarm → EventBridge → Lambda → Pipeline**.
15. **"Pick cost-optimal instance type"** → **Inference Recommender**.
16. **"A/B test two models"** → **Production variants with weighted traffic**.
17. **"Trace latency across Lambda → endpoint → DynamoDB"** → **AWS X-Ray**.

---

## 🎓 Key Terms To Know

| Term | Definition |
|------|------------|
| **SageMaker Pipelines** | ML-native DAG workflow |
| **Model Registry** | Versioned model catalogue with approval workflow |
| **Model Card** | Standard model documentation |
| **SageMaker Projects** | Templated MLOps repo + CI/CD |
| **Real-time endpoint** | Always-on, sub-100ms inference |
| **Serverless inference** | Scale-to-zero pay-per-request inference |
| **Async inference** | Long-running, large-payload inference with S3 callback |
| **Batch transform** | One-time offline scoring |
| **MME** | Multi-Model Endpoint |
| **MCE** | Multi-Container Endpoint |
| **Blue/Green** | Deploy new alongside old; switch traffic; rollback safe |
| **Canary / Linear** | Gradual traffic ramp |
| **Shadow variant** | Real traffic copy to new model without user impact |
| **Production variant** | Weighted-traffic A/B slot on one endpoint |
| **Model Monitor** | Production drift detection (data/model/bias/feature-attribution) |
| **Inference Recommender** | Auto-benchmarks instance types for cost/latency |
| **EventBridge** | Event bus for ML triggers |
| **X-Ray** | Distributed tracing |

---

## 💬 Discussion — Socratic Prompts

1. **"Real-time or serverless?"** A team has 3 models with very different traffic: 1000 QPS predictable; 5 QPS occasional; 10 QPS spiky. Pick the best endpoint per model and explain.
2. **The drift-to-retrain reflex.** Most "drift detected, retrain" workflows over-retrain. When would retraining make the model *worse*? (Hint: data quality degradation vs genuine distribution shift.)
3. **Shadow's hidden cost.** Shadow traffic doubles inference cost during the shadow period. Argue for and against shadow for a 50%-cost-sensitive team.
4. **MME vs MCE vs Inference Components.** Three patterns for many-model hosting. Sketch when each is best.
5. **A/B testing's statistical-power trap.** Production variants with 50/50 split sound clean; but tiny effect sizes need huge sample sizes. How long is "long enough" to make a deploy decision?

---

## ➡️ Where This Leads

> **Where this leads.**
> - **Inside this course:** Module 10 layers security, cost optimisation, and production troubleshooting on top of this MLOps foundation.
> - **Cross-course:** `04-AWS-Solutions-Architect-Associate` Modules 7 (Decoupling) and 9 (Monitoring) cover the underlying AWS services in more depth.
> - **Practice:** Practice Exam 1 has 5 questions, Practice Exam 2 has 6 questions, Final Mock has 10 questions on this material.
> - **Real world:** Run the `sagemaker-pipelines-examples` GitHub repo's *abalone-end-to-end* example in your own account; ~$5 in compute.

---

## ✅ Module 9 Summary

You now know:
- 🔁 **SageMaker Pipelines** step types and the `ConditionStep` deployment gate pattern
- 📦 **Model Registry** with approval workflow
- 🏗️ **SageMaker Projects** as the templated MLOps bootstrapper
- 🚀 The **four endpoint types** (real-time / serverless / async / batch) and when each wins
- 🎨 **Deployment strategies** — all-at-once / blue-green / canary / linear / shadow
- 🔬 **Model Monitor's four types** — data quality, model quality, bias drift, feature attribution drift
- ♻️ **Automatic retraining patterns** via EventBridge + Pipelines
- 🛡️ **Endpoint auto-scaling** — target tracking / step / scheduled
- 📊 **Observability** — CloudWatch / X-Ray / CloudTrail roles
- 🧪 **A/B testing** with production variants
- 🎁 **Inference Recommender** for cost-optimal instance picking
- 📖 The **Amazon Music MLOps reference architecture** you will see paraphrased

**Next:**
1. 🎥 [`Videos.md`](./Videos.md)
2. ✏️ [`Quiz.md`](./Quiz.md)
3. 📋 [`Cheat-Sheet.md`](./Cheat-Sheet.md)
4. ➡️ [Module 10: Security, Cost & Production](../Module-10-Security-Cost-Production/Reading.md)

---

## 📚 Further Sources

**AWS official**
- 📖 **SageMaker Pipelines docs** — `docs.aws.amazon.com/sagemaker/latest/dg/pipelines.html`
- 📖 **SageMaker Model Registry** — `docs.aws.amazon.com/sagemaker/latest/dg/model-registry.html`
- 📖 **SageMaker Model Monitor** — `docs.aws.amazon.com/sagemaker/latest/dg/model-monitor.html`
- 📖 **AWS Well-Architected ML Lens — Operational Excellence pillar**

**re:Invent talks**
- 🎤 AIM403 — *MLOps at Amazon Music*
- 🎤 AIM319 — *Capital One real-time fraud (MLOps side)*

**Academic foundations**
- 📄 **Sculley et al. (2015).** *Hidden Technical Debt in Machine Learning Systems.* NIPS — the foundational MLOps paper
- 📄 **Breck et al. (2017).** *The ML Test Score: A Rubric for ML Production Readiness.* IEEE Big Data

**Industry**
- 📰 **Google's MLOps maturity model** — public whitepaper
- 📰 **Eugene Yan's blog** — practical MLOps essays
- 📰 **Made With ML (Goku Mohandas)** — modern MLOps curriculum

---

## 🛠️ Appendix A — Worked Example: A Production SageMaker Pipeline

```python
from sagemaker.workflow.pipeline import Pipeline
from sagemaker.workflow.steps import ProcessingStep, TrainingStep, TuningStep
from sagemaker.workflow.condition_step import ConditionStep
from sagemaker.workflow.conditions import ConditionGreaterThan
from sagemaker.workflow.model_step import ModelStep
from sagemaker.workflow.functions import JsonGet
from sagemaker.workflow.parameters import ParameterInteger, ParameterString
from sagemaker.workflow.properties import PropertyFile
from sagemaker.workflow.fail_step import FailStep

# 1. Parameters (overridable per execution)
processing_instance_type = ParameterString("ProcessingInstanceType", default_value="ml.m5.xlarge")
training_instance_count = ParameterInteger("TrainingInstanceCount", default_value=1)
model_approval_status = ParameterString("ModelApprovalStatus", default_value="PendingManualApproval")

# 2. Processing step (data preprocessing)
preprocess_step = ProcessingStep(
    name="Preprocess",
    processor=ScriptProcessor(
        image_uri="...",
        instance_type=processing_instance_type,
        instance_count=1,
        role=role,
    ),
    inputs=[ProcessingInput(source="s3://my-bucket/raw/", destination="/opt/ml/processing/input")],
    outputs=[
        ProcessingOutput(output_name="train", source="/opt/ml/processing/train"),
        ProcessingOutput(output_name="val", source="/opt/ml/processing/val"),
        ProcessingOutput(output_name="test", source="/opt/ml/processing/test"),
    ],
    code="preprocess.py",
)

# 3. Training step
train_step = TrainingStep(
    name="Train",
    estimator=XGBoost(
        framework_version="1.7-1",
        instance_type="ml.m5.xlarge",
        instance_count=training_instance_count,
        role=role,
        use_spot_instances=True,
        max_wait=86400,
        checkpoint_s3_uri="s3://my-bucket/checkpoints/",
        hyperparameters={"max_depth": 5, "eta": 0.2, "num_round": 100},
    ),
    inputs={
        "train": TrainingInput(s3_data=preprocess_step.properties.ProcessingOutputConfig.Outputs["train"].S3Output.S3Uri),
        "validation": TrainingInput(s3_data=preprocess_step.properties.ProcessingOutputConfig.Outputs["val"].S3Output.S3Uri),
    },
)

# 4. Evaluation step
eval_step = ProcessingStep(
    name="Evaluate",
    processor=ScriptProcessor(...),
    inputs=[
        ProcessingInput(
            source=train_step.properties.ModelArtifacts.S3ModelArtifacts,
            destination="/opt/ml/processing/model"
        ),
        ProcessingInput(
            source=preprocess_step.properties.ProcessingOutputConfig.Outputs["test"].S3Output.S3Uri,
            destination="/opt/ml/processing/test",
        ),
    ],
    outputs=[ProcessingOutput(output_name="evaluation", source="/opt/ml/processing/evaluation")],
    code="evaluate.py",
    property_files=[PropertyFile(name="EvaluationReport", output_name="evaluation", path="evaluation.json")],
)

# 5. Conditional registration
register_step = ModelStep(
    name="Register",
    step_args=model.register(
        content_types=["text/csv"],
        response_types=["text/csv"],
        approval_status=model_approval_status,
        model_package_group_name="my-model-group",
    ),
)

fail_step = FailStep(
    name="MetricBelowThreshold",
    error_message="AUC below 0.85 — refusing to register.",
)

cond_step = ConditionStep(
    name="AUCCheck",
    conditions=[
        ConditionGreaterThan(
            left=JsonGet(step_name=eval_step.name, property_file="EvaluationReport", json_path="metrics.auc"),
            right=0.85,
        )
    ],
    if_steps=[register_step],
    else_steps=[fail_step],
)

# 6. Pipeline
pipeline = Pipeline(
    name="my-churn-pipeline",
    parameters=[processing_instance_type, training_instance_count, model_approval_status],
    steps=[preprocess_step, train_step, eval_step, cond_step],
)
pipeline.upsert(role_arn=role)
pipeline.start()
```

🎯 **Recognise on the exam:** `ConditionStep` for metric-gated registration, `PropertyFile` for passing metrics between steps, `ModelStep` for Registry registration with approval workflow, `FailStep` for explicit pipeline failure.

---

## 🛠️ Appendix B — Endpoint Auto-Scaling Configuration

```python
import boto3
client = boto3.client("application-autoscaling")

# 1. Register endpoint variant as a scalable target
client.register_scalable_target(
    ServiceNamespace="sagemaker",
    ResourceId="endpoint/my-endpoint/variant/AllTraffic",
    ScalableDimension="sagemaker:variant:DesiredInstanceCount",
    MinCapacity=2,
    MaxCapacity=20,
)

# 2. Target-tracking policy on InvocationsPerInstance
client.put_scaling_policy(
    PolicyName="invocations-per-instance",
    ServiceNamespace="sagemaker",
    ResourceId="endpoint/my-endpoint/variant/AllTraffic",
    ScalableDimension="sagemaker:variant:DesiredInstanceCount",
    PolicyType="TargetTrackingScaling",
    TargetTrackingScalingPolicyConfiguration={
        "TargetValue": 1000.0,   # 1000 invocations per instance per minute
        "PredefinedMetricSpecification": {
            "PredefinedMetricType": "SageMakerVariantInvocationsPerInstance"
        },
        "ScaleInCooldown": 600,
        "ScaleOutCooldown": 60,
    },
)
```

🎯 **Exam pattern.** `SageMakerVariantInvocationsPerInstance` is the standard metric. Cooldowns prevent flapping.

---

## 🛠️ Appendix C — Model Monitor Setup Sketch

```python
from sagemaker.model_monitor import DefaultModelMonitor

# 1. Compute the baseline statistics from training data
monitor = DefaultModelMonitor(
    role=role,
    instance_count=1,
    instance_type="ml.m5.xlarge",
    volume_size_in_gb=20,
    max_runtime_in_seconds=3600,
)
baseline_job = monitor.suggest_baseline(
    baseline_dataset="s3://my-bucket/training-data/train.csv",
    dataset_format=DatasetFormat.csv(header=True),
    output_s3_uri="s3://my-bucket/monitoring/baseline/",
)
baseline_job.wait()

# 2. Schedule a monitor against the live endpoint
from sagemaker.model_monitor import CronExpressionGenerator

monitor.create_monitoring_schedule(
    monitor_schedule_name="my-data-quality-schedule",
    endpoint_input=endpoint_name,
    output_s3_uri="s3://my-bucket/monitoring/reports/",
    statistics=monitor.baseline_statistics(),
    constraints=monitor.suggested_constraints(),
    schedule_cron_expression=CronExpressionGenerator.hourly(),  # every hour
)

# 3. Wire CloudWatch alarm on `feature_baseline_drift_check_violations` etc.
```

🎯 **Exam pattern.** Four Monitor types (Data Quality, Model Quality, Bias Drift, Feature Attribution Drift) all follow the same baseline → schedule → reports pattern.

---

## 🛠️ Appendix D — The Production Endpoint Checklist

Before any model goes to production, verify:

- [ ] Endpoint mode chosen with explicit justification (real-time / serverless / async / batch)
- [ ] Multi-AZ enabled (real-time endpoints; multi-AZ by default but verify)
- [ ] Auto-scaling policy with sensible min / max / target
- [ ] CloudWatch alarms on: 5xx rate, p95 latency, `InvocationsPerInstance` (capacity), cost anomaly
- [ ] Blue/Green deployment configured with alarm-based auto-rollback
- [ ] Endpoint encrypted with customer-managed KMS key
- [ ] VPC + Security Group + (optionally) PrivateLink for on-prem access
- [ ] Model Monitor: at least Data Quality + Model Quality (when labels available)
- [ ] Clarify post-training bias report attached as Model Card artefact
- [ ] Shadow variant deployed during initial rollout (cleanup after 2-4 weeks)
- [ ] Inference Recommender benchmark results filed in the Model Card
- [ ] Endpoint cost budget alarm at 80%, 100%, 150% of expected monthly spend
- [ ] Disaster recovery plan: if endpoint goes down, do we serve a fallback (rule-based, last model, queue)?
- [ ] Runbook for rolling back to previous Model Package version in under 5 minutes
