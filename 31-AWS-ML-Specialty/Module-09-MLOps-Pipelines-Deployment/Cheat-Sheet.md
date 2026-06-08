# 📋 Module 9 Cheat Sheet: MLOps & Deployment

> Print. Tape. Drill.

---

## 🚀 The 4 Inference Modes (MEMORIZE)

| Mode | Latency | Best For | Pay |
|------|---------|----------|-----|
| **Real-time** | <100 ms | Steady traffic | Per instance-hr |
| **Serverless** | 100ms-3s (cold) | Sparse / bursty | Per request |
| **Async** | seconds-hours | Large payload (≤1 GB), long jobs | Per instance-hr (scale to 0) |
| **Batch transform** | Job-time | Offline / one-time | Per job |

Plus:

- **Multi-Model Endpoint (MME)**, many models, one endpoint
- **Multi-Container Endpoint (MCE)**, multiple containers, one endpoint
- **Inference Components**, fine-grained scaling units

---

## 🎨 Deployment Strategies

| Strategy | Detail |
|----------|--------|
| **All-at-once** | No rollback safety |
| **Blue/Green** | Old + new in parallel; switch; rollback safe |
| **Canary** | Small % to new; ramp |
| **Linear** | +N% every X min |
| **Shadow** | Real traffic copy to new; users unaffected |

🎯 Auto-rollback: blue/green + CloudWatch alarm.

---

## 🔬 Model Monitor, 4 Types

| Type | Watches |
|------|---------|
| **Data Quality** | Input feature distribution vs baseline |
| **Model Quality** | Predictions vs ground truth (when labels available) |
| **Bias Drift** | Clarify post-training bias over time |
| **Feature Attribution Drift** | SHAP attribution over time |

Pipeline: baseline job → schedule → reports in S3 → CloudWatch alarms.

---

## 🔁 SageMaker Pipelines Step Types

- **ProcessingStep**, data preprocessing
- **TrainingStep**, train a model
- **TuningStep**, HPO
- **CreateModelStep / ModelStep**, package model
- **RegisterModel**, Model Registry
- **ConditionStep**, branch on metric
- **FailStep**, explicit failure
- **LambdaStep**, glue
- **ClarifyCheck** (Quality/Bias/Explainability), pre-deploy guards
- **EMRStep / CallbackStep / AutoMLStep**

---

## 📦 Model Registry

- Model Package Group → versions
- `PendingManualApproval` / `Approved` / `Rejected`
- Cross-account share via RAM
- Often gated by `ConditionStep` in Pipelines

---

## 🏗️ SageMaker Projects

= templated MLOps repo:

- CodeCommit / CodeBuild / CodePipeline (CI/CD)
- SageMaker Pipelines (training workflow)
- Model Registry
- Deploy to staging / production endpoints

Bootstrap with one click via Service Catalog.

---

## ♻️ Retrain-On-Drift Pattern

```
Model Monitor alarm
   ↓
EventBridge rule
   ↓
Lambda
   ↓
SageMaker Pipeline (retrain)
   ↓
Model Registry (PendingApproval)
   ↓
Human approves → CodePipeline deploys
```

---

## 🛡️ Endpoint Auto-Scaling

| Strategy | When |
|----------|------|
| Target tracking | Default; "keep avg X at target" |
| Step scaling | Alarm-triggered N-instance steps |
| Scheduled | Predictable business-hour patterns |

Metrics: `InvocationsPerInstance`, `CPUUtilization`, `GPUUtilization`, custom.

---

## 📊 Observability Map

| Tool | Use |
|------|-----|
| CloudWatch Metrics | Endpoint + Pipeline metrics |
| CloudWatch Logs | Endpoint / job logs |
| CloudWatch Alarms | Drift / errors / latency / cost |
| AWS X-Ray | Distributed trace |
| CloudTrail | API audit log |

---

## 🧪 A/B & Variants

Production variants on one endpoint with weighted traffic = built-in A/B.

`{"VariantName":"A","InitialVariantWeight":0.9}` + `{"VariantName":"B","InitialVariantWeight":0.1}`

---

## 🎁 Inference Recommender

Benchmarks model on different instance types; picks cost-optimal for your latency / throughput targets.

---

## 🚨 Module-9 Top Traps

| Phrase | Right answer |
|--------|-------------|
| "Conditional deploy on metric" | Pipelines + ConditionStep |
| "Approval before prod" | Model Registry approval |
| "Sparse traffic, pay per use" | **Serverless** |
| "Large payload, slow inference" | **Async** |
| "Offline scoring nightly" | **Batch transform** |
| "Hundreds of small models, sparse" | **MME** |
| "Multiple containers behind one endpoint" | **MCE** |
| "Test new model risk-free" | **Shadow** |
| "Auto rollback on error" | **Blue/Green + alarm** |
| "Detect input distribution shift" | **Data Quality Monitor** |
| "Detect prediction quality drift" | **Model Quality Monitor** |
| "Detect bias drift" | **Model Bias Monitor (Clarify)** |
| "Detect attribution drift" | **Feature Attribution Drift Monitor** |
| "Retrain on drift" | **Monitor → EventBridge → Lambda → Pipeline** |
| "Cost-optimal instance type" | **Inference Recommender** |
| "Distributed trace" | **AWS X-Ray** |
| "Templated MLOps repo" | **SageMaker Projects** |
| "Cross-account model share" | **RAM** or Model Hub |
| "ML-native orchestrator" | **SageMaker Pipelines** |

---

## ✏️ Self-Check

1. 4 inference modes, name each and when. ___
2. Detect input drift = ___ monitor.
3. Risk-free test on real traffic = ___ variant.
4. Many small models sparse traffic = ___ endpoint.
5. Long inference, large payload = ___ inference.
6. Retrain-on-drift trigger chain = ___.

➡️ [Module 10: Security, Cost & Production](../Module-10-Security-Cost-Production/Reading.md)
