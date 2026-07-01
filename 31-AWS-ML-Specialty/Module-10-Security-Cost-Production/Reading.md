# Module 10: Security, Cost & Production Operations 🔐

> **Why this module matters:** The MLA-C01 exam concentrates security and operations in Domain 4 (ML Solution Monitoring, Maintenance & Security, 24%), with cost optimisation woven across all domains. The exam will ask things like "how do you secure training data with KMS and VPC?", "which Spot strategy cuts training cost 90%?", "which instance family minimises inference cost?", "how do you troubleshoot a slow endpoint?" and "what is the right way to enforce least-privilege on a SageMaker training role?". This module is the final knot that ties everything: IAM, KMS, VPC, PrivateLink, Spot, Savings Plans, Multi-Model Endpoints, Debugger / Profiler, and the production-debugging playbook.

> **Prerequisites for this module.** Modules 1–9 of this course. Helpful background:
> - SAA-C03's IAM, KMS, VPC chapters cover the underlying AWS identity / network primitives
> - Module 5's silicon and Module 9's deployment patterns set up the cost discussions here

---

## 🍕 A Story: The Healthcare Startup That Almost Leaked PHI

Meet Lena. She runs ML at a Series-B healthcare-AI startup. In 2023 her team built an EHR-NER model on SageMaker. The data millions of clinical notes sat in S3. Training jobs ran in the default VPC. The endpoint was public. The dev IAM role had `AmazonSageMakerFullAccess`.

Three weeks before their HIPAA audit, the security team did a deep review. They found:

- **Public endpoint** with no authentication beyond IAM SigV4 (anyone with internet access who had a leaked SigV4 key could call it)
- **No VPC isolation**, training data exfiltrated nowhere (yet), but no protection if it had been
- **No KMS customer-managed key** on the training data; encryption was AWS-managed SSE-S3 (insufficient for HIPAA audit logging)
- **Overly broad IAM**, the SageMaker execution role could read *any* S3 bucket
- **No CloudTrail data events** for S3, no record of what the training job read
- **No bias / fairness review** on the model
- **Notebook instances running 24/7**, $2,400/month wasted

The audit was a near miss. Lena and the security team did a hardening sprint:

- **VPC-only training**, moved jobs into a VPC with a NAT gateway-less private subnet, S3 VPC Gateway Endpoint, and KMS VPC Endpoint
- **Customer-managed KMS** keys with per-team key policies; KMS encrypts S3 data, EBS volumes, EFS, and model artifacts
- **PrivateLink** on the SageMaker endpoint, no public DNS at all
- **IAM least-privilege execution role**, scoped to a single S3 bucket prefix + KMS key + ECR image
- **CloudTrail S3 data events** enabled
- **AWS Macie** scanning S3 for PHI
- **SageMaker Lifecycle Configurations** to auto-stop idle notebooks
- **Spot training + Savings Plans** for steady workloads, saved ~$8K/month

They passed HIPAA. The cost-optimisation work alone paid for the security audit.

That is what this module teaches: **secure first, then optimise, then troubleshoot.**

---

## 🔐 IAM For SageMaker, Least Privilege

SageMaker uses **execution roles** (IAM roles assumed by training jobs, endpoints, notebooks).

### The three role types you must know

| Role | Used by |
|------|---------|
| **Studio user execution role** | Per-user notebook / job permissions |
| **Training/processing job role** | Assumed during a training or processing job |
| **Endpoint role** | Assumed by hosted endpoint to read S3 artifact / KMS key |
| **Pipeline role** | Used by SageMaker Pipelines to orchestrate sub-resources |

### Least-privilege patterns

A SageMaker execution role typically needs:

- `s3:GetObject` / `s3:PutObject` on **specific bucket prefixes only**
- `kms:Decrypt` / `kms:GenerateDataKey` on **specific KMS keys**
- `ecr:GetAuthorizationToken` + `ecr:BatchGetImage` on **specific repositories**
- `sagemaker:CreateTrainingJob` etc. on **specific resource ARNs**
- `logs:CreateLogStream` + `logs:PutLogEvents` on the relevant log group
- `cloudwatch:PutMetricData` for custom metrics
- For VPC: `ec2:CreateNetworkInterface` / `ec2:DeleteNetworkInterface` (auto-managed)

🚨 **Anti-pattern.** Granting `AmazonSageMakerFullAccess` plus `AdministratorAccess` for development. Strip down before production.

🎯 **Exam pattern.** *"Restrict a SageMaker training job to read ONLY from one S3 bucket prefix."* → **Custom IAM role with `s3:GetObject` on `bucket/prefix/*`** plus a **bucket policy** as defence in depth.

### IAM Access Analyzer for least-privilege

**IAM Access Analyzer** can review CloudTrail logs and *suggest* policies based on actual usage. Useful for tightening over-broad initial roles.

---

## 🔑 KMS Encryption Across The Stack

| Where | Encryption |
|-------|-----------|
| **S3** | SSE-S3 (AWS-managed) OR SSE-KMS (customer-managed), use SSE-KMS for audit trail |
| **EBS volumes** (training instances) | KMS encryption (default since 2023) |
| **EFS** | KMS encryption |
| **FSx for Lustre** | KMS encryption |
| **Training job inter-node traffic** | TLS plus optional **inter-container traffic encryption** (extra encryption between training nodes) |
| **Endpoint network traffic** | TLS at the API layer; KMS on EBS |
| **Model artifact** (`model.tar.gz` in S3) | SSE-KMS |
| **Snapshot of EBS, Studio EFS** | KMS encryption |
| **SageMaker Notebook lifecycle config** | Stored encrypted |

🎯 **Exam pattern.** *"Encrypt model artifacts in S3 with audit log on each key use."* → **SSE-KMS** with a customer-managed KMS key.

🎯 **Exam pattern.** *"Encrypt training traffic between distributed nodes."* → **Enable `enable_inter_container_traffic_encryption=True`** in the Estimator (note: adds latency).

🚨 **Trap.** *"Use SSE-C for HIPAA."* → While technically encrypted, SSE-C requires you to ship the key on each request, not the cleanest pattern. SSE-KMS is the standard.

---

## 🌐 VPC Isolation For SageMaker

By default, SageMaker training jobs and endpoints run in a **service-managed VPC**. For sensitive workloads, you launch them in **your own VPC**.

### Components

| Component | Detail |
|-----------|--------|
| **Subnets** | Private subnets (one or more AZs) |
| **Security Groups** | Stateful, control inbound/outbound by port + CIDR |
| **VPC Endpoints (Gateway)** | S3 + DynamoDB; routed via VPC route table; free |
| **VPC Endpoints (Interface / PrivateLink)** | SageMaker API, SageMaker Runtime, ECR, STS, KMS, CloudWatch, Bedrock, billed per ENI hour + GB |
| **No internet gateway / NAT** | For maximum isolation, no NAT, only VPC endpoints |
| **`enable_network_isolation=True`** | Strongest training-job isolation, disables outbound network from the container entirely |

🎯 **Exam pattern.** *"Train a model with NO traffic to the internet."* → **VPC-only training in private subnets with VPC endpoints for S3, ECR, STS, CloudWatch** AND `enable_network_isolation=True` on the Estimator.

🎯 **Exam pattern.** *"Endpoint accessible from on-prem via Direct Connect, never from the internet."* → **SageMaker endpoint behind PrivateLink (Interface VPC Endpoint for SageMaker Runtime)** + Direct Connect.

### Bedrock VPC isolation

Bedrock can also be invoked via VPC endpoints (PrivateLink). Traffic never traverses the public internet. Combine with **Guardrails** and **encryption** for regulated workloads.

---

## 🕵️ AWS Macie, PII Discovery In S3

**Macie** scans S3 buckets for sensitive data (PII, PHI, financial info) and produces findings.

| Use | Purpose |
|-----|---------|
| **Pre-training data discovery** | Find PII before training; redact / mask |
| **Compliance audit** | Catalog of sensitive data per bucket |
| **Continuous monitoring** | Alarms on new PII appearing |

🎯 **Exam pattern.** *"Auto-detect PII in your training-data S3 bucket before model training."* → **Amazon Macie**.

---

## 🛡️ CloudTrail, Config, GuardDuty For ML

| Service | ML-relevant role |
|---------|------------------|
| **CloudTrail** | Audit log of every SageMaker / Bedrock API call (who started a training job, who deployed an endpoint) |
| **CloudTrail data events** | Optional logging of S3 reads / writes (extra cost; useful for training-data audit) |
| **AWS Config** | Track resource configuration over time; rules for "SageMaker endpoints must be encrypted with KMS" |
| **GuardDuty** | Threat detection on accounts; can detect unusual SageMaker API patterns |
| **Security Hub** | Aggregates findings from GuardDuty, Macie, Inspector, Config |

🎯 **Exam pattern.** *"Track every API call against SageMaker for compliance."* → **CloudTrail** (always-on; data events optional).

🎯 **Exam pattern.** *"Continuously verify endpoints are encrypted with the company KMS key."* → **AWS Config managed or custom rule**.

---

## 🔬 SageMaker Model Monitor, The Four Monitors In Depth

Module 9 named the four monitors; here is the depth the exam tests. Every monitor follows the same three-phase pattern, **baseline → schedule → violations**, but each watches a different signal and each has a specific prerequisite.

| Monitor | Watches | Needs ground-truth labels? | Depends on Clarify? |
|---------|---------|---------------------------|---------------------|
| **Data Quality** | Input feature distributions & schema vs a baseline (mean, std, missingness, type) | ❌ | ❌ |
| **Model Quality** | Prediction accuracy/AUC/RMSE vs actual labels | ✅ (join predictions to labels) | ❌ |
| **Model Bias Drift** | Bias metrics (e.g. DPPL) on live traffic vs baseline | ⚠️ (for label-dependent metrics) | ✅ |
| **Feature Attribution Drift** | SHAP attribution ranking shift (NDCG) vs baseline | ❌ | ✅ |

### The Shared Machinery

1. **Data Capture** must be enabled on the endpoint (`DataCaptureConfig`, sampling %) so inputs and outputs land in S3.
2. A **baseline / suggest-baseline** job computes `statistics.json` + `constraints.json` from training data.
3. A **MonitoringSchedule** (hourly/daily cron) runs a processing job that compares captured data to the baseline.
4. Violations are written to S3 and surfaced as the CloudWatch metric group; wire an **alarm** on them.

```python
# Model QUALITY monitor also needs a ground-truth ingestion step:
from sagemaker.model_monitor import ModelQualityMonitor
mq = ModelQualityMonitor(role=role, instance_type="ml.m5.xlarge", instance_count=1)
mq.suggest_baseline(
    baseline_dataset="s3://bkt/val-with-labels.csv",
    problem_type="BinaryClassification",
    inference_attribute="prediction",
    ground_truth_attribute="label",
    dataset_format=DatasetFormat.csv(header=True),
)
```

🚨 **Trap.** **Data Quality** monitor needs *no labels* and catches input drift immediately. **Model Quality** needs labels, which usually arrive *late* (you learn the true outcome days later), so it can only report quality drift on a lag. Exam scenarios often hinge on "labels not available yet" → **Data Quality** (or Feature Attribution) is the only option that works *now*.

🎯 **Exam pattern.** *"Ground truth arrives weeks later; detect degradation as soon as possible."* → **Data Quality + Feature Attribution Drift** now; **Model Quality** once labels arrive.

---

## ⚖️ SageMaker Clarify, Bias & Explainability In Depth

Clarify does three jobs across the lifecycle: **pre-training bias**, **post-training bias**, and **explainability** (SHAP). Model Monitor's Bias and Feature-Attribution monitors are Clarify running on a schedule.

### Pre-Training Bias Metrics (Data, Before You Train)

| Metric | Measures |
|--------|----------|
| **Class Imbalance (CI)** | Under/over-representation of a facet |
| **Difference in Proportions of Labels (DPL)** | Gap in positive-label rate between facets |
| **KL / JS divergence** | Distribution divergence of labels between facets |
| **Kolmogorov-Smirnov (KS)** | Max divergence between facet label distributions |
| **Conditional Demographic Disparity in Labels (CDDL)** | Disparity after conditioning on a confounder |

### Post-Training Bias Metrics (Predictions, After You Train)

| Metric | Measures |
|--------|----------|
| **Difference in Positive Proportions in Predicted labels (DPPL)** | Predicted positive-rate gap between facets |
| **Disparate Impact (DI)** | Ratio of predicted positive rates |
| **Recall / Accuracy Difference (RD / AD)** | Performance gap between facets |
| **Treatment Equality (TE)** | Ratio of FN/FP across facets |
| **Counterfactual Flip (FT)** | Predictions that flip when only the facet changes |

### Explainability

- **SHAP** (Shapley additive explanations): per-feature contribution to each prediction, global + local.
- **Partial Dependence Plots (PDP)**: marginal effect of a feature.
- For **computer vision / NLP**, Clarify supports feature (pixel/token) attributions too.

🎯 **Exam pattern.** *"Explain why the model denied this specific applicant."* → **Clarify SHAP local explanation**.

🎯 **Exam pattern.** *"Loan approval rate differs by gender in the model's predictions."* → **Clarify post-training bias (DPPL / DI)**.

🚨 **Trap.** **Pre-training bias** is about the *data* (DPL, CI); **post-training bias** is about the *predictions* (DPPL, DI). The exam swaps these to test whether you know which stage you're at.

---

## 🧪 A/B Testing In Production (Deeper)

Beyond Module 9's weighted variants, the operational discipline is what the exam probes:

| Concept | Detail |
|---------|--------|
| **Production variants** | Multiple models on one endpoint; `InitialVariantWeight` splits traffic probabilistically |
| **`TargetVariant` header** | Force a specific variant per invocation (useful for deterministic testing / debugging) |
| **Per-variant metrics** | CloudWatch emits `Invocations`, latency, errors **per variant**, that's how you compare |
| **Statistical significance** | Don't promote on noise, run until the KPI difference is significant for your traffic |
| **Shadow vs A/B** | Shadow never returns challenger output to users; A/B does, to a weighted slice |

🎯 **Exam pattern.** *"Route 5% of traffic to a new model and compare conversion in CloudWatch, forcing specific variant for QA."* → **Production variants + `TargetVariant` for QA + per-variant CloudWatch metrics**.

---

## 🔭 Observability For ML In Depth

| Tool | ML-specific use | Signature exam cue |
|------|-----------------|--------------------|
| **CloudWatch Metrics** | Per-variant invocations, `ModelLatency`, `OverheadLatency`, `Invocation4XX/5XX`, custom | "alarm on p95 latency" |
| **CloudWatch Logs Insights** | Query endpoint/training logs with a SQL-like language for error patterns, latency percentiles | "search across logs for the error pattern / compute p99 from logs" |
| **AWS X-Ray** | Distributed trace across Lambda → endpoint → DynamoDB/RDS | "find which hop adds latency across services" |
| **CloudTrail** | Who called `CreateEndpoint`/`InvokeEndpoint`; can *trigger* automation | "audit API calls" / "trigger on a specific API call" |
| **Model Monitor** | Drift signals as CloudWatch metrics | "detect drift on live data" |

### Logs Insights, A Concrete Query

```
fields @timestamp, @message
| filter @message like /ModelError/
| stats count(*) as errors by bin(5m)
| sort errors desc
```

🎯 **Exam pattern.** *"Ad-hoc query across endpoint logs to compute p99 latency or find an error spike."* → **CloudWatch Logs Insights** (not raw log tailing, not Athena).

### CloudTrail-Triggered Retraining

CloudTrail management events can flow to **EventBridge**, so a governance action (e.g. a new dataset registered, a specific `PutObject`, or an approval API call) can **trigger a retraining pipeline**. This is the audit-driven cousin of the Model-Monitor-driven retrain from Module 9.

🎯 **Exam pattern.** *"Kick off retraining whenever a specific API action is recorded for compliance."* → **CloudTrail → EventBridge → Lambda/Pipeline**.

### Right-Sizing Tools

| Tool | Scope |
|------|-------|
| **SageMaker Inference Recommender** | Benchmarks a *model* across instance types → cost-optimal endpoint pick |
| **AWS Compute Optimizer** | Analyses *EC2/Auto Scaling/Lambda/EBS* utilisation → right-size recommendations (broader, not ML-specific) |

🚨 **Trap.** For picking the best **SageMaker endpoint instance type for a given model**, use **Inference Recommender**. **Compute Optimizer** is the general AWS right-sizing service for EC2/Lambda/EBS, not SageMaker endpoints. The exam contrasts these.

### Cost Allocation Tags

Tag SageMaker resources (endpoints, training jobs, notebooks) with keys like `team`, `project`, `env`. Once activated in the Billing console, **cost allocation tags** let Cost Explorer and AWS Budgets slice ML spend per team/project, the prerequisite for chargeback and per-model cost alarms.

🎯 **Exam pattern.** *"Attribute SageMaker spend to each team for chargeback."* → **Activate cost allocation tags**, then Cost Explorer / Budgets grouped by tag.

---

## 💰 Cost-Optimisation Levers, The Full Catalogue

### Training

| Lever | Saving |
|-------|--------|
| **Spot training** with checkpointing | Up to **90% off** |
| **Right-sized instance type** | Don't use `p4d` if `g5.xlarge` suffices |
| **Mixed precision** (FP16/BF16) | ~30-50% time + memory |
| **Pipe / FastFile mode** | Less idle waiting |
| **Distributed training** (SMDDP) | Faster wall clock, sometimes cheaper despite more nodes |
| **Early stopping** | Less wasted compute on plateau |
| **SageMaker Training Compiler** | 10-50% speedup |
| **Trainium (trn1/trn2)** | Often ~30-50% cheaper than NVIDIA equivalents |
| **Profiler-driven optimisation** | Find data-loader / GPU-underutilisation bottlenecks |

### Inference

| Lever | Saving |
|-------|--------|
| **Right-sized instance type** | Use Inference Recommender |
| **Inferentia2 (`inf2`)** | Often 50%+ cheaper than GPU equivalents |
| **Graviton-based (`m6g`, `c6g`)** | ARM CPUs for CPU inference |
| **Serverless inference** | Pay-per-request; scales to 0 |
| **Async inference** | Scales to 0 |
| **Multi-Model Endpoint** | Host many models per endpoint |
| **Multi-AZ vs single-AZ** | Single-AZ saves cost if HA not required |
| **Compute Savings Plan** | 1-yr / 3-yr commitment for steady inference traffic |
| **Auto-scaling** | Match capacity to demand |

### Notebooks / Studio

| Lever | Saving |
|-------|--------|
| **Lifecycle configurations** with idle auto-shutdown | Critical |
| **Right-sized notebook instance** | `t3.medium` for most EDA |
| **Studio spaces** (over notebook instances) | Pay only when kernel is running |
| **Tag-based cost allocation** | Per-team / per-project billing |
| **Budget alarms** | Catch surprises early |

### Data

| Lever | Saving |
|-------|--------|
| **S3 Intelligent-Tiering** | Auto-tiers between hot/cold |
| **Lifecycle policies** | Move old data to Glacier |
| **Parquet + partitioning** | Cuts Athena scan cost 10× |
| **Gateway VPC Endpoint for S3** | Avoid NAT egress charges |

### Bedrock

| Lever | Saving |
|-------|--------|
| **Batch Inference** | ~50% off On-Demand |
| **Provisioned Throughput** | Cheaper at sustained high volume |
| **Prompt caching** | Cache long system prompts |
| **Right-sized model** | Haiku < Sonnet < Opus by cost |
| **Distillation** | Train smaller model from larger teacher |

🎯 **Memorise these high-leverage answers:**
- **"Cost-optimise long training tolerating interruption"** → **Spot + checkpointing**
- **"Cost-optimal LLM inference"** → **Inferentia2 + Neuron**
- **"Cost-optimal high-volume Bedrock"** → **Provisioned Throughput / Batch / Prompt caching**
- **"Stop wasted notebook spend"** → **Idle auto-shutdown lifecycle config**

---

## 🐛 Production Troubleshooting Playbook

| Symptom | First-thing-to-check | Likely tools |
|---------|---------------------|--------------|
| Training job fails immediately | IAM permission / S3 path | CloudWatch Logs, CloudTrail |
| Training is GPU-underutilised | Data loader / I/O | SageMaker Profiler |
| Training NaN / vanishing gradients | Learning rate, init, mixed precision | SageMaker Debugger built-in rules |
| Training cost spike | Wrong instance type / no Spot | Cost Explorer, Inference Recommender |
| Endpoint slow / latency spike | Instance under-provisioned, data hop, network | CloudWatch metrics + X-Ray |
| Endpoint cost spike | Wrong instance, missing serverless / async option | Inference Recommender, Cost Explorer |
| Endpoint 5xx | Container crash, OOM | CloudWatch Logs |
| Drift detected | Distribution shift, upstream data change | Model Monitor + Clarify |
| Bias drift | Demographic shift in inputs | Model Bias Monitor |
| Endpoint can't read model artifact | KMS key policy, IAM | CloudTrail, KMS console |
| Distributed training won't scale past 4 nodes | EFA / data pipeline | Profiler, instance type |

🎯 **Exam pattern.** *"Diagnose GPU under-utilisation in distributed training."* → **SageMaker Profiler**, check **data loader workers** and **FSx/pipe mode**.

🎯 **Exam pattern.** *"NaN losses partway through training."* → **SageMaker Debugger** (built-in rule); typical fixes: **lower learning rate**, **add gradient clipping**, **switch FP16 to BF16**.

---

## 🌱 Sustainability (Well-Architected ML Lens)

| Move | Effect |
|------|--------|
| **Graviton processors** (`m6g`, `c6g`) | ~40% better perf/watt than equivalent x86 |
| **Inferentia2** | ~50% better energy/inference than GPU baseline |
| **Right-size and auto-scale** | Less idle waste |
| **Managed services** | AWS optimises the data centres for you |
| **Spot training** | Soaks up otherwise-idle capacity |
| **Multi-Model Endpoints** | Higher utilisation per endpoint |
| **Bedrock prompt caching** | Skip re-processing same prefix |
| **Distillation / quantisation** | Smaller models, less inference compute |

---

## 🎯 The Well-Architected ML Lens, Full Matrix

| Pillar | ML moves |
|--------|----------|
| **Operational Excellence** | Pipelines · Projects · Model Registry · Model Monitor |
| **Security** | IAM least-priv · VPC · KMS · PrivateLink · Macie · CloudTrail · Clarify bias · Guardrails |
| **Reliability** | Multi-AZ endpoints · Model Monitor · scheduled retrains · reproducible training (seed) |
| **Performance Efficiency** | Trainium / Inferentia · SMDDP / SMMP · mixed precision · Training Compiler · FSx Lustre + EFA |
| **Cost Optimization** | Spot · Savings Plans · MME · serverless / async inference · Intelligent-Tiering · Provisioned Throughput |
| **Sustainability** | Graviton · Inferentia2 · right-sizing · MME · managed services · distillation |

---

## 📖 Case Study, Pinterest's Cost & Security Hardening

**Situation.** Pinterest runs hundreds of ML models, visual search, recommendations, ad ranking. As scale grew, their AWS bill swelled and security audits found over-broad IAM roles across the ML stack.

**Architecture (publicly discussed at re:Invent 2022/2023).**
- **VPC-only training** with custom S3 + ECR endpoints
- **Per-team IAM execution roles** scoped to per-project buckets
- **Customer-managed KMS keys** per team, all auditable
- **Spot training** for ~70% of jobs (~80% saving)
- **Multi-Model Endpoints** for category-specific ranking models
- **Inferentia for high-traffic inference paths** (~60% cost reduction vs prior GPU baseline)
- **Compute Savings Plans** for steady-state inference

**Outcome.** ML cost as fraction of total cloud bill fell from 22% to 12%; security audit-finding count fell ~90%; same workload throughput.

**Lesson for the exam.** Pinterest's stack is the canonical "secure + cost-optimised" reference. **Spot + MME + Inferentia + Savings Plan + KMS + VPC = MLA-C01 happy path.**

---

## ⚠️ Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "AmazonSageMakerFullAccess is fine for prod" | NO, least privilege per team / project |
| "Default VPC is good enough" | For sensitive data, use a private VPC with VPC endpoints |
| "Spot is too risky for ML" | With checkpointing, Spot is the default for fault-tolerant training |
| "Auto-scaling solves all cost problems" | Only if scaling triggers and limits are tuned |
| "Reserved Instances are dead for ML" | Compute Savings Plans (RI's flexible cousin) are very much alive |
| "Inferentia is harder to use than GPUs" | Neuron SDK abstracts most differences |
| "Studio doesn't have idle issues" | Studio spaces can run forever if you don't configure auto-shutdown |
| "Encrypting in transit isn't needed inside AWS" | Inter-node training traffic should be encrypted for regulated workloads |
| "Macie replaces CloudTrail" | They serve different purposes, discovery vs audit |

---

## 🚨 Top Exam Traps (Module 10 Themes)

1. **"Restrict training to one S3 prefix"** → Custom IAM role + bucket policy.
2. **"No internet for training"** → VPC + VPC endpoints + `enable_network_isolation=True`.
3. **"Endpoint accessible only from on-prem"** → PrivateLink + Direct Connect.
4. **"Encrypt with auditable key"** → SSE-KMS customer-managed key.
5. **"Detect PII in S3 buckets"** → AWS Macie.
6. **"Continuous compliance check on endpoint encryption"** → AWS Config rule.
7. **"Cost-optimise long fault-tolerant training"** → Spot + checkpointing.
8. **"Cost-optimal LLM inference"** → Inferentia2 + Neuron.
9. **"Hundreds of small models, sparse traffic"** → MME.
10. **"Stop notebook idle spend"** → Studio lifecycle configuration / idle shutdown.
11. **"Steady inference, commit for discount"** → Compute Savings Plan.
12. **"Diagnose slow training"** → Profiler.
13. **"NaN gradients"** → Debugger built-in rules; lower LR / add clipping / BF16.
14. **"Audit every SageMaker API call"** → CloudTrail.
15. **"Distributed training scales poorly"** → EFA + FSx Lustre.

---

## 🎓 Key Terms To Know

| Term | Definition |
|------|------------|
| **Execution role** | IAM role assumed by SageMaker training / job / endpoint |
| **Network isolation** | `enable_network_isolation=True` disables all outbound traffic from training container |
| **VPC endpoint (Gateway)** | Free for S3 + DynamoDB |
| **VPC endpoint (Interface / PrivateLink)** | Per-ENI hour + GB; for SageMaker API, ECR, KMS, etc. |
| **SSE-KMS** | S3 encryption with KMS key |
| **CMK** | Customer-managed (master) key in KMS |
| **Inter-container traffic encryption** | Extra TLS between training nodes |
| **Macie** | S3 PII / sensitive-data discovery |
| **Config rule** | Continuous compliance check |
| **CloudTrail data events** | S3 data-plane audit (optional) |
| **Spot training** | Up to 90% off training with interruption tolerance |
| **Compute Savings Plan** | Flexible commitment-based discount |
| **Inferentia2 (`inf2`)** | AWS inference chip; cost-optimal |
| **Trainium (`trn1`, `trn2`)** | AWS training chip |
| **Graviton (`m6g`, `c6g`)** | AWS ARM CPU; better perf/watt |
| **Lifecycle configuration** | Shell script run on Studio/notebook start; idle-shutdown pattern |
| **Cost allocation tags** | Tag-based bill attribution |
| **AWS Budgets** | Threshold alarms on spend |

---

## 💬 Discussion, Socratic Prompts

1. **"Cost vs latency in inference."** Inferentia2 is cheaper but adds compilation complexity. At what monthly inference cost does it pay off vs sticking with G5 GPUs?
2. **"VPC-only training overhead."** Private VPC adds VPC-endpoint costs and engineering complexity. When does the security benefit outweigh the overhead?
3. **"Spot for training: when not?"** Spot interruptions can corrupt long-running jobs. Argue when not to use Spot.
4. **"Macie vs DIY"**, Macie costs ~$X / GB scanned. At what data volume is a DIY classifier on a Lambda cheaper?
5. **"The Savings Plan decision."** Compute Savings Plan vs Reserved Instances vs On-Demand. Argue at what predictability threshold each wins.

---

## ➡️ Where This Leads

> **Where this leads.**
> - **Course completion!** You have covered every MLA-C01 domain. Time to take the practice exams.
> - **Cross-course:** `04-AWS-Solutions-Architect-Associate` Modules 2 (IAM) and 9 (Monitoring/Cost) deepen the AWS security and cost basics if you want more.
> - **Practice:** Practice Exam 1 has 1 question, Practice Exam 2 has 3 questions, Final Mock has 5 questions on this material.
> - **Real world:** Audit your own AWS account: are notebooks auto-shutting? Is your training data KMS-encrypted? Is your SageMaker role least-privilege?

---

## ✅ Module 10 Summary

You now know:

- 🔐 **IAM execution roles** for SageMaker Studio, training, endpoint, pipeline and least-privilege patterns
- 🔑 **KMS encryption** across S3, EBS, EFS, FSx, model artifacts; inter-container training encryption
- 🌐 **VPC isolation** with private subnets + Gateway / Interface VPC endpoints + `enable_network_isolation`
- 🛡️ **CloudTrail / Config / GuardDuty / Macie / Security Hub** roles for ML compliance
- 💰 The full **cost-optimisation catalogue**, Spot, Savings Plans, Inferentia2, Trainium, MME, serverless, async, Graviton, lifecycle configs, Intelligent-Tiering, Bedrock cost modes
- 🐛 The **production troubleshooting playbook**, Profiler / Debugger / Logs / CloudTrail / X-Ray
- 🌱 **Sustainability moves**, Graviton + Inferentia + right-sizing + managed services + distillation
- 📖 The **Pinterest cost + security hardening** reference case study

**Next:**
1. 🎥 [`Videos.md`](./Videos.md)
2. ✏️ [`Quiz.md`](./Quiz.md)
3. 📋 [`Cheat-Sheet.md`](./Cheat-Sheet.md)
4. 🧪 **Practice Exams!** [Practice-Exam-1](../Practice-Exams/Practice-Exam-1.md) → [Practice-Exam-2](../Practice-Exams/Practice-Exam-2.md) → [Final Mock](../Practice-Exams/Final-Mock-Exam.md)

---

## 📚 Further Sources

**AWS official**
- 📖 **SageMaker Security docs**, `docs.aws.amazon.com/sagemaker/latest/dg/security.html`
- 📖 **SageMaker Cost docs**, `docs.aws.amazon.com/sagemaker/latest/dg/cost-optimization.html`
- 📖 **AWS Macie User Guide**, `docs.aws.amazon.com/macie/`
- 📖 **AWS Well-Architected ML Lens**, `docs.aws.amazon.com/wellarchitected/latest/machine-learning-lens/`

**re:Invent talks**
- 🎤 SEC301, *AWS security fundamentals* (re:Invent)
- 🎤 AIM303, *Choose the right SageMaker built-in algorithm* (touches cost)
- 🎤 ARC305, *Cost-optimising AWS at scale* (general; applies to ML)

**Industry**
- 📰 **Corey Quinn's *Last Week in AWS***, cost-engineering essays
- 📰 **AWS Builder Library Cost Section** patterns for cost engineering

---

## 🛠️ Appendix A, Least-Privilege SageMaker IAM Role Template

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "SageMakerCoreActions",
      "Effect": "Allow",
      "Action": [
        "sagemaker:CreateTrainingJob",
        "sagemaker:DescribeTrainingJob",
        "sagemaker:StopTrainingJob",
        "sagemaker:CreateProcessingJob",
        "sagemaker:DescribeProcessingJob",
        "sagemaker:CreateModel",
        "sagemaker:CreateEndpoint",
        "sagemaker:CreateEndpointConfig",
        "sagemaker:InvokeEndpoint"
      ],
      "Resource": [
        "arn:aws:sagemaker:us-east-1:123456789012:training-job/churn-*",
        "arn:aws:sagemaker:us-east-1:123456789012:processing-job/churn-*",
        "arn:aws:sagemaker:us-east-1:123456789012:model/churn-*",
        "arn:aws:sagemaker:us-east-1:123456789012:endpoint/churn-*",
        "arn:aws:sagemaker:us-east-1:123456789012:endpoint-config/churn-*"
      ]
    },
    {
      "Sid": "ScopedS3DataAccess",
      "Effect": "Allow",
      "Action": ["s3:GetObject", "s3:PutObject"],
      "Resource": [
        "arn:aws:s3:::my-ml-bucket/churn/raw/*",
        "arn:aws:s3:::my-ml-bucket/churn/curated/*",
        "arn:aws:s3:::my-ml-bucket/churn/models/*"
      ]
    },
    {
      "Sid": "ScopedKMS",
      "Effect": "Allow",
      "Action": [
        "kms:Decrypt",
        "kms:GenerateDataKey",
        "kms:DescribeKey"
      ],
      "Resource": "arn:aws:kms:us-east-1:123456789012:key/aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee"
    },
    {
      "Sid": "ScopedECR",
      "Effect": "Allow",
      "Action": [
        "ecr:GetAuthorizationToken",
        "ecr:BatchGetImage",
        "ecr:GetDownloadUrlForLayer"
      ],
      "Resource": "arn:aws:ecr:us-east-1:123456789012:repository/my-training-image"
    },
    {
      "Sid": "CloudWatchLogs",
      "Effect": "Allow",
      "Action": [
        "logs:CreateLogStream",
        "logs:PutLogEvents",
        "logs:CreateLogGroup"
      ],
      "Resource": "arn:aws:logs:us-east-1:123456789012:log-group:/aws/sagemaker/*"
    },
    {
      "Sid": "PassRoleToSubResources",
      "Effect": "Allow",
      "Action": "iam:PassRole",
      "Resource": "arn:aws:iam::123456789012:role/SageMakerTrainingRole",
      "Condition": {
        "StringEquals": {"iam:PassedToService": "sagemaker.amazonaws.com"}
      }
    }
  ]
}
```

🎯 **Exam pattern.** Every `Action` scoped; every `Resource` ARN-scoped; `iam:PassRole` restricted via `iam:PassedToService` condition.

---

## 🛠️ Appendix B, No-Internet Training Stack (Full Example)

```python
from sagemaker.pytorch import PyTorch

estimator = PyTorch(
    entry_point="train.py",
    role=role,
    framework_version="2.1.0",
    py_version="py310",
    instance_count=2,
    instance_type="ml.g5.2xlarge",

    # === Security hardening for HIPAA-class workloads ===

    # VPC isolation: training job runs in private subnets
    subnets=["subnet-0a1b2c3d", "subnet-0a1b2c3e"],   # private subnets
    security_group_ids=["sg-0123456789abcdef0"],

    # Block ALL outbound from training container
    # (Requires VPC endpoints for S3, ECR, KMS, STS, CloudWatch, see below)
    enable_network_isolation=True,

    # Encrypt inter-node training traffic
    enable_inter_container_traffic_encryption=True,

    # KMS for EBS volumes used by the training job
    volume_kms_key="arn:aws:kms:us-east-1:123456789012:key/aaaa-bbbb",
    output_kms_key="arn:aws:kms:us-east-1:123456789012:key/aaaa-bbbb",

    # Spot training + checkpointing
    use_spot_instances=True,
    max_wait=129600,
    checkpoint_s3_uri="s3://my-secure-bucket/checkpoints/",

    hyperparameters={"epochs": 10, "lr": 1e-4},
)

estimator.fit({"train": "s3://my-secure-bucket/train/"})
```

### Required VPC endpoints

For the above to work with `enable_network_isolation=True`, the VPC must have:

| Endpoint | Type | Purpose |
|----------|------|---------|
| `com.amazonaws.<region>.s3` | Gateway | Read training data, write artifact |
| `com.amazonaws.<region>.ecr.api` | Interface | ECR API |
| `com.amazonaws.<region>.ecr.dkr` | Interface | ECR Docker image pulls |
| `com.amazonaws.<region>.sts` | Interface | STS for role assumption |
| `com.amazonaws.<region>.kms` | Interface | KMS encryption |
| `com.amazonaws.<region>.logs` | Interface | CloudWatch Logs |
| `com.amazonaws.<region>.sagemaker.api` | Interface | SageMaker control plane |
| `com.amazonaws.<region>.sagemaker.runtime` | Interface | Endpoint inference |
| `com.amazonaws.<region>.bedrock-runtime` | Interface | Bedrock invocations (optional) |

🎯 **Cost note.** Interface endpoints cost ~$0.01/hour per ENI per AZ + ~$0.01/GB. For a multi-AZ deployment with 8 interface endpoints, that's ~$200/month in endpoint fixed cost, usually worth it for the security posture.

---

## 🛠️ Appendix C, Cost-Optimisation Worked Example (Before & After)

A real-style workload at a Series-B fintech, costs in USD/month.

| Line | Before | After | Move |
|------|--------|-------|------|
| Studio notebooks (10 users, 24/7) | $2,800 | $480 | Idle auto-shutdown lifecycle config |
| Training jobs (XGBoost, on-demand) | $4,200 | $620 | **Spot + checkpointing** (85% saving) |
| Inference endpoints (g5.xlarge, 4 always-on per model × 12 models) | $9,600 | $3,100 | Consolidate to MME + Compute Savings Plan |
| Inference (LLM, g5.12xlarge × 2) | $7,400 | $2,800 | Migrate to inf2.xlarge × 4 (Neuron-compiled) |
| S3 training data (5 TB Standard) | $115 | $42 | Intelligent-Tiering + lifecycle to IA after 60 days |
| Athena scans (mostly raw JSON) | $1,800 | $180 | Convert to Parquet + partition + projection |
| NAT Gateway egress (training data) | $1,400 | $0 | Replace with Gateway VPC Endpoint for S3 |
| Bedrock (Claude Sonnet, common 4K system prompt) | $5,200 | $1,900 | Prompt caching + smaller-model for routine traffic |
| **Total** | **$32,515 / mo** | **$9,122 / mo** | **72% reduction** |

🎯 **Each line is independently testable on the exam.** Pattern-match each cost-spike scenario to the corresponding lever.

---

## 🛠️ Appendix D, Runbook: NaN Losses Midway Through Training

When a transformer training job suddenly produces NaN losses (a common interview / exam-scenario question), the standard runbook:

1. **Reproduce on a single GPU first**, eliminate distributed-training factors.
2. **Check input data**, any all-zero batches? infinite values?
3. **Reduce learning rate** by 5-10× and restart from latest checkpoint.
4. **Add (or verify) gradient clipping**, `torch.nn.utils.clip_grad_norm_(model.parameters(), max_norm=1.0)`.
5. **Switch FP16 → BF16** if using mixed precision (BF16 has the same dynamic range as FP32).
6. **Add layer normalisation** before activations (transformers usually use LayerNorm; verify it's pre-norm not post-norm).
7. **Add learning-rate warmup**, start at 1e-7 and ramp up over 1000-10,000 steps.
8. **Inspect Debugger tensors**, `tensor_inf_or_nan` rule pinpoints which layer first sees NaN.
9. **Skip the bad batch** if isolated.
10. **If all else fails**, lower model capacity (fewer layers, smaller hidden dim), sometimes the model is too capable for the data and the loss surface is pathological.

🎯 **Exam pattern.** The expected single-best fix on the exam: **lower LR + add gradient clipping + use BF16 instead of FP16** (combined).
