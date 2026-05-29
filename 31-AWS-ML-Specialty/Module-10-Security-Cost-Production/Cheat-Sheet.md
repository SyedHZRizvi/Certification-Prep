# 📋 Module 10 Cheat Sheet: Security, Cost & Production

> Print. Tape. Drill.

---

## 🔐 IAM For SageMaker

```
Execution role types:
  ├─ Studio user role
  ├─ Training/processing role
  ├─ Endpoint role
  └─ Pipeline role
```

🚨 Never grant `AmazonSageMakerFullAccess` + admin in production.
✅ Scope to specific S3 prefixes, KMS keys, ECR repos.
✅ Use **IAM Access Analyzer** to right-size policies.

---

## 🔑 KMS Encryption Map

| Where | Use |
|-------|-----|
| **S3** | SSE-KMS with **customer-managed key** (per-request CloudTrail audit) |
| **EBS** | KMS (default since 2023) |
| **EFS / FSx** | KMS |
| **Model artifact** | SSE-KMS |
| **Inter-container** | `enable_inter_container_traffic_encryption=True` |

---

## 🌐 No-Internet Training Stack

```
Private VPC
   ├─ Private subnets (no NAT)
   ├─ Gateway VPC Endpoints: S3, DynamoDB (free)
   ├─ Interface VPC Endpoints (PrivateLink): SageMaker API + Runtime,
   │    ECR API + ECR DKR, STS, KMS, CloudWatch, Bedrock
   └─ Estimator: enable_network_isolation=True
```

---

## 🛡️ Compliance Stack

| Tool | Job |
|------|-----|
| **CloudTrail** | API audit (all SageMaker / Bedrock calls) |
| **CloudTrail data events** | Optional S3 read/write audit |
| **AWS Config** | Continuous compliance (e.g. "endpoint must be KMS-encrypted") |
| **GuardDuty** | Threat detection |
| **Macie** | PII discovery in S3 |
| **Security Hub** | Aggregate findings |
| **AWS Audit Manager** | Pre-built compliance frameworks (HIPAA, PCI, etc.) |

---

## 💰 Cost Levers — Training

- **Spot training** (`use_spot_instances=True` + checkpoints) — **up to 90% off**
- **Trainium** vs NVIDIA — ~30-50% cheaper for many models
- **Mixed precision** (FP16/BF16) — ~50% time + memory
- **Right-sized instance**
- **Pipe / FastFile mode** — less idle waiting
- **Training Compiler** — 10-50% speedup
- **Early stopping** — kill bad trials
- **Distributed (SMDDP)** — faster wall clock

---

## 💰 Cost Levers — Inference

- **Inferentia2** — often 50%+ cheaper than GPU
- **Multi-Model Endpoints** — many models per endpoint
- **Serverless inference** — scale to 0
- **Async inference** — scale to 0; large payloads
- **Compute Savings Plan** — 1-yr / 3-yr commitment discount
- **Right-size with Inference Recommender**
- **Graviton CPUs** for CPU inference

---

## 💰 Cost Levers — Studio & Data

- **Lifecycle config idle auto-shutdown** on Studio spaces
- **Cost allocation tags** + Budgets
- **S3 Intelligent-Tiering** for unknown access patterns
- **Lifecycle policies** to Glacier
- **Parquet + partition + projection** for Athena
- **Gateway endpoint for S3** = no NAT egress

---

## 💰 Cost Levers — Bedrock

- **Batch Inference** ~50% off
- **Provisioned Throughput** for steady high volume
- **Prompt caching** for shared system prompts
- **Right-sized model** (Haiku < Sonnet < Opus)
- **Distillation** to smaller models

---

## 🐛 Troubleshooting Playbook

| Symptom | First check | Tool |
|---------|-------------|------|
| Training fails on start | IAM + S3 path | CloudWatch Logs, CloudTrail |
| GPU under-utilised | Data loader I/O | **Profiler** |
| NaN / vanishing grads | LR + init + AMP | **Debugger** rules |
| Slow distributed scaling | EFA + FSx | Profiler |
| Endpoint latency | Instance size + network | CloudWatch + **X-Ray** |
| Endpoint 5xx | OOM / crash | CloudWatch Logs |
| Drift in production | Distribution shift | **Model Monitor** |
| Bias drift | Demographic shift | **Bias Monitor** (Clarify) |
| Endpoint can't read artifact | KMS / IAM | CloudTrail, KMS console |
| Cost spike | Wrong instance / no Spot | Cost Explorer, Inference Recommender |

---

## 🌱 Sustainability Stack

- **Inferentia2** (~50% better energy/inference vs GPU)
- **Graviton** (~40% better perf/watt)
- **Right-size + auto-scale**
- **Multi-Model Endpoints** (higher util)
- **Managed services** (AWS optimises DCs)
- **Distillation / quantisation**
- **Bedrock prompt caching**

---

## 🚨 Module-10 Top Traps

| Phrase | Right answer |
|--------|-------------|
| "Restrict to one S3 prefix" | Custom IAM role + bucket policy |
| "No internet training" | VPC + endpoints + `enable_network_isolation` |
| "Encrypt + audit per request" | SSE-KMS CMK |
| "Detect PII in S3" | **Macie** |
| "Endpoint from on-prem only" | **PrivateLink + Direct Connect** |
| "Continuous compliance check" | **AWS Config rule** |
| "Audit API calls" | **CloudTrail** |
| "Cost-optimal LLM inference" | **Inferentia2** |
| "Cost-optimal training" | **Trainium + Spot** |
| "Many sparse-traffic models" | **MME** |
| "Commit for steady inference discount" | **Compute Savings Plan** |
| "Stop notebook idle spend" | **Lifecycle config idle shutdown** |
| "GPU under-utilised" | **Profiler** |
| "NaN gradients" | **Debugger** + lower LR + clip + BF16 |
| "Distributed trace across services" | **X-Ray** |
| "Encrypt inter-node training traffic" | `enable_inter_container_traffic_encryption=True` |
| "Bedrock cost for offline LLM" | **Batch Inference** |
| "Shared 4K system prompt" | **Prompt caching** |

---

## ✏️ Self-Check (90 s)

1. No-internet training stack components → ___
2. Audit per-request key use → ___
3. PII discovery → ___
4. Cost-optimal LLM inference → ___
5. 500 sparse models → ___
6. Idle Studio cost → ___
7. NaN in training → ___ tool + ___ fix
8. Slow inference latency hop diagnose → ___

🎉 **You finished Module 10! On to the practice exams.**

➡️ [Practice Exam 1](../Practice-Exams/Practice-Exam-1.md) → [Practice Exam 2](../Practice-Exams/Practice-Exam-2.md) → [Final Mock (65 Q / 180 min)](../Practice-Exams/Final-Mock-Exam.md)
