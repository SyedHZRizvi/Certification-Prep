# Module 3: Vertex AI Platform Deep Dive 🏢

> **Why this module matters:** Vertex AI is the answer to the question both Google certification exams ask most often: *"You have an enterprise GenAI workload — where do you run it, what are the components, and how do you wire them together?"* If Module 1 told you what Gemini is and Module 2 told you how to call it, this module tells you *where it lives in production* — and that "where" turns out to be an umbrella over roughly 25 Google Cloud products. Memorize the umbrella; the exam is testing whether you can navigate it.

> **Prerequisites for this module.** Modules 1–2 finished. A Google Cloud project with billing enabled and the Vertex AI API enabled (`gcloud services enable aiplatform.googleapis.com`). $300 free credits if new.

---

## 📖 A Story: How Spotify's ML Team Moved From "Custom Cluster" to Vertex AI

It is 2019. Spotify's ML platform team is running ~3,000 ML models across discovery, recommendations, ads, and trust & safety. Each model has its own training notebook, its own feature store hack, its own monitoring dashboard, its own deployment story. The team's biggest engineer pain isn't training new models — it's that an L4 engineer can spend three weeks shipping a model another engineer trained, because "production" was a different person every time.

Spotify's published case study (Google Cloud Next 2020, Spotify Engineering blog) describes the next two years as a deliberate consolidation onto **Vertex AI**. Training notebooks moved to **Vertex AI Workbench**. Features moved to **Vertex AI Feature Store**. Pipelines moved to **Vertex AI Pipelines** (Kubeflow under the hood). Models registered to **Vertex AI Model Registry**. Deployments via **Vertex AI Endpoints**. Drift detection via **Vertex AI Model Monitoring**. The before-state was 3,000 bespoke pipelines; the after-state was one platform.

By 2024 — with GenAI now a first-class workload — Spotify's GenAI team built on the same platform. Vertex AI added a *Studio* (web UI for Gemini prompting), a *Model Garden* (catalog of 200+ models, including Gemini, Claude, Llama, Mistral, Cohere), a *Vector Search* (the rebranded Matching Engine ANN index), a *Search* (the rebranded Discovery Engine), and an *Agent Builder* (no-code agent framework). Each piece existed because somebody at Google's biggest customer asked for it.

This module is the *map* of that platform. You will not write much code in this module; you will memorize what each Vertex AI sub-product does, when to pick it, and how it composes with the others. That map is the single most testable artifact of the Generative AI Leader and PMLE exams.

---

## 🏢 Vertex AI: The Umbrella

**Vertex AI is not one product.** It is an umbrella over ~25 sub-products. The Generative AI Leader exam tests three things about each: *what it does, when you'd pick it, and what it costs.*

```
┌────────────────────────────────────────────────────────────────────┐
│                          VERTEX AI                                 │
│                                                                    │
│  ┌─────────────┐  ┌────────────────┐  ┌──────────────────────┐    │
│  │   STUDIO    │  │  MODEL GARDEN  │  │  AGENT BUILDER       │    │
│  │ (web UI for │  │ Gemini, Claude,│  │ No-code agents +     │    │
│  │  prompts +  │  │ Llama, Mistral,│  │ Conversational Agents│    │
│  │  models)    │  │ Cohere, …      │  │ (formerly DF CX)     │    │
│  └─────────────┘  └────────────────┘  └──────────────────────┘    │
│                                                                    │
│  ┌─────────────┐  ┌────────────────┐  ┌──────────────────────┐    │
│  │  WORKBENCH  │  │   PIPELINES    │  │  EXPERIMENTS         │    │
│  │ (Notebooks: │  │ (Kubeflow-based│  │ (Training run        │    │
│  │ Jupyter +   │  │  workflow      │  │  comparison)         │    │
│  │ Colab Ent)  │  │  orchestration)│  │                      │    │
│  └─────────────┘  └────────────────┘  └──────────────────────┘    │
│                                                                    │
│  ┌─────────────┐  ┌────────────────┐  ┌──────────────────────┐    │
│  │  TRAINING   │  │ FEATURE STORE  │  │  TENSORBOARD         │    │
│  │ (custom +   │  │ (online+offline│  │ (visualization)      │    │
│  │  AutoML +   │  │  feature       │  │                      │    │
│  │  hyperparam │  │  serving)      │  │                      │    │
│  │  tuning)    │  │                │  │                      │    │
│  └─────────────┘  └────────────────┘  └──────────────────────┘    │
│                                                                    │
│  ┌─────────────┐  ┌────────────────┐  ┌──────────────────────┐    │
│  │   MODEL     │  │   ENDPOINTS    │  │  MODEL MONITORING    │    │
│  │  REGISTRY   │  │ (real-time +   │  │ (drift, skew,        │    │
│  │             │  │  batch +       │  │  quality, latency)   │    │
│  │             │  │  private)      │  │                      │    │
│  └─────────────┘  └────────────────┘  └──────────────────────┘    │
│                                                                    │
│  ┌─────────────┐  ┌────────────────┐  ┌──────────────────────┐    │
│  │ VECTOR      │  │   SEARCH       │  │  EVALUATION          │    │
│  │ SEARCH      │  │ (formerly      │  │ (online + offline)   │    │
│  │ (formerly   │  │  Discovery     │  │                      │    │
│  │  Matching   │  │  Engine; RAG)  │  │                      │    │
│  │  Engine ANN)│  │                │  │                      │    │
│  └─────────────┘  └────────────────┘  └──────────────────────┘    │
└────────────────────────────────────────────────────────────────────┘
```

The Generative AI Leader exam draws heavily from the bold-italic pieces: Studio, Model Garden, Agent Builder, Search, Vector Search. The PMLE exam draws heavily from Workbench, Pipelines, Training, Feature Store, Model Registry, Endpoints, Model Monitoring.

---

## 🆚 Vertex AI vs Google AI Studio (Reprise)

Already covered in Module 2; consolidating here for the exam.

| Concern | Google AI Studio | Vertex AI |
|---------|------------------|-----------|
| Surface | `aistudio.google.com` | Google Cloud Console |
| Auth | API key | IAM via ADC |
| IAM granularity | None (single key) | Full GCP IAM (per-resource, per-role) |
| VPC Service Controls (perimeter) | ❌ | ✅ |
| Customer-Managed Encryption Keys (CMEK) | ❌ | ✅ |
| Regional deployment | Limited (US, automatically chosen) | 30+ regions; explicit choice |
| Audit logs (Cloud Logging) | ❌ | ✅ |
| Signed BAA (HIPAA) | ❌ | ✅ |
| Provisioned Throughput | ❌ | ✅ |
| Context caching (explicit) | ❌ (in Gemini API as implicit) | ✅ |
| Batch prediction | Limited | ✅ |
| Model Garden (200+ models) | Gemini only | ✅ (Gemini + Claude + Llama + Mistral + …) |
| Agent Builder | ❌ | ✅ |
| Pipelines / Monitoring / Feature Store | ❌ | ✅ |

🎯 **Exam pattern:** *"A healthcare provider needs HIPAA-eligible Gemini deployment."* → **Vertex AI** (signed BAA + HIPAA-eligible regions). AI Studio cannot serve HIPAA.

---

## 🛍️ Vertex AI Model Garden — The 200-Model Catalog

**Model Garden** is Vertex AI's catalog of models. Three categories:

### 1. First-party Google models
- **Gemini** family (2.5 Pro/Flash/Flash Lite/Ultra; legacy 1.5, 1.0)
- **Imagen** family (text-to-image — Imagen 3, Imagen 4)
- **Veo** (text-to-video)
- **Chirp** family (speech-to-text, text-to-speech)
- **MedLM** (Med-PaLM 2 successor — healthcare)
- **CodeChat-Bison / Code-Bison** (legacy code models)
- **Embeddings** (text-embedding-004, text-embedding-005, gemini-embedding-001, multilingual-embedding-002)

### 2. Third-party partner models
- **Anthropic Claude** — Claude Sonnet 4.6, Claude Haiku 4.5, Claude Opus 4.6 on Vertex AI
- **Meta Llama** — Llama 3, Llama 3.1, Llama 4 series
- **Mistral** — Mistral Large, Codestral, Mixtral 8x22B
- **Cohere** — Command R+, Embed v3
- **AI21 Labs** — Jamba (long-context Mamba-style)
- **xAI Grok** (recently added)

### 3. Open-weight models (deploy your own)
- **Gemma** (Google's open-weight family — 2B, 7B, 9B, 27B)
- Hugging Face's Open LLM Leaderboard top models
- Stable Diffusion variants
- Custom HF Spaces deployments

**The deal:** Model Garden gives you one billing surface, one IAM model, one regional deployment story, one observability stack — across models from competing vendors. That is genuinely useful and a reason teams pick Vertex AI.

🎯 **Exam pattern:** *"A team wants Claude on Google Cloud."* → **Vertex AI Model Garden** — Claude is published there alongside Gemini.

---

## 🧑‍💻 Vertex AI Workbench — Managed Notebooks

**Workbench** is Vertex AI's Jupyter / Colab Enterprise notebook environment. Two flavors:

| Flavor | Use |
|--------|-----|
| **Workbench Instances** | Dedicated VM, persistent, your own kernel libraries, your own GPUs/TPUs |
| **Colab Enterprise** | Browser-only managed Colab, persistent, IAM-integrated, BigQuery + Vertex AI client pre-installed |

**Why Workbench (not local Jupyter):**
- IAM-integrated — your service-account auth is automatic
- Pre-installed: `google-cloud-aiplatform`, `bigquery`, `pandas`, etc.
- Direct connectivity to BigQuery datasets in your project (no auth dance)
- Can attach GPU / TPU instances for training
- VPC-SC perimeter compliance

🎯 **Exam pattern:** *"A data scientist needs to prototype a Vertex AI fine-tune with internal data that cannot leave the GCP project."* → **Workbench Instance in the VPC-SC perimeter** (NOT local Jupyter, NOT Colab.research.google.com consumer).

---

## 🧪 Vertex AI Experiments + TensorBoard + Feature Store

For PMLE, these three matter:

### Experiments

Tracks every training run: parameters, metrics, artifacts. Lets you compare runs side-by-side. Backed by MLMD (ML Metadata).

```python
from google.cloud import aiplatform

aiplatform.init(project="my-project", location="us-central1",
                experiment="customer-churn-v2")
aiplatform.start_run(run="run-2026-05-30")
aiplatform.log_params({"lr": 0.001, "batch_size": 64})
aiplatform.log_metrics({"val_auc": 0.91})
aiplatform.end_run()
```

### TensorBoard

Vertex AI's managed TensorBoard for visualizing training-run scalars, images, model graphs. Auto-syncs with Experiments.

### Feature Store

**Vertex AI Feature Store** stores features once and serves them for both training (offline, batch) and serving (online, low-latency lookups). Eliminates training/serving skew.

```python
# Define feature group
from google.cloud.aiplatform import FeatureGroup
fg = FeatureGroup.create(name="customer_features", source_uri="bq://proj.dataset.customers")
```

🎯 **Exam pattern:** *"A team's online predictions drift from training metrics; investigation shows different feature definitions in the training notebook vs the serving service."* → **Use Vertex AI Feature Store as the single source of truth** for both training and serving.

---

## 🛤️ Vertex AI Pipelines — Kubeflow on Google Cloud

**Vertex AI Pipelines** orchestrates ML workflows. The DAG is defined in **Kubeflow Pipelines (KFP) v2** or **TensorFlow Extended (TFX)**. Steps are containerized; the platform schedules, runs, retries, and tracks artifacts.

Typical pipeline DAG:

```
[ingest data from BigQuery]
       ↓
[preprocess + validate]
       ↓
[train model] ─ (logs to Experiments, TensorBoard)
       ↓
[evaluate vs holdout] ──┐
       ↓                │
[register to            │ (if metric below threshold → halt)
 Model Registry]        │
       ↓                │
[deploy canary          │
 to Endpoint]           │
       ↓                │
[wait for monitoring    │
 signal]                │
       ↓                │
[promote to 100% or rollback]
```

**Defined in Python:**

```python
from kfp import dsl
from kfp.compiler import Compiler

@dsl.pipeline(name="train-and-deploy")
def my_pipeline(project: str):
    ingest = ingest_op()
    train = train_op(data=ingest.outputs["dataset"])
    eval = eval_op(model=train.outputs["model"], threshold=0.85)
    register = register_op(model=train.outputs["model"]).after(eval)
    deploy = deploy_op(model=register.outputs["model_name"], project=project)

Compiler().compile(my_pipeline, "pipeline.json")
```

```python
from google.cloud import aiplatform
job = aiplatform.PipelineJob(
  display_name="train-and-deploy",
  template_path="pipeline.json",
  parameter_values={"project": "my-project"},
)
job.run()
```

🎯 **Exam pattern:** *"A team wants a reproducible nightly training run that registers new models when they beat the holdout."* → **Vertex AI Pipelines** with eval-gated registration. Trap: "Cloud Build" (works for CI but not ML metadata).

---

## 📦 Vertex AI Model Registry

Central registry for trained models. Each model has versions; each version has metadata (training run, dataset, eval metrics), artifacts (the weights), and lineage.

```python
from google.cloud import aiplatform
model = aiplatform.Model.upload(
  display_name="churn-v3",
  artifact_uri="gs://my-models/churn/v3/",
  serving_container_image_uri="us-docker.pkg.dev/vertex-ai/prediction/tf2-cpu:latest",
)
```

The Registry is the *source of truth*. From it, you deploy to Endpoints, run Batch Predictions, run evaluation jobs, or hand off to other teams.

---

## 🚀 Vertex AI Endpoints — Serving

An **Endpoint** is a managed serving instance. Three kinds:

### 1. Online (real-time) endpoint
- HTTPS REST + gRPC
- Auto-scaling (min/max replicas, traffic-split per model version for canary)
- ~50–300ms latency P50 depending on model + region
- Per-replica machine type (CPU, GPU, TPU)

### 2. Batch prediction
- Async; reads from BigQuery/GCS, writes back
- Cheaper per-request than online; no auto-scaling
- For nightly scoring, backfill, analytics

### 3. Private endpoint
- Private VPC endpoint (no public internet)
- Required for VPC-SC compliance

```python
endpoint = model.deploy(
  machine_type="n1-standard-4",
  min_replica_count=1,
  max_replica_count=10,
  traffic_split={"0": 100},  # 100% to this version
)

# Canary: 90% v1, 10% v2
endpoint.deploy(model=v2_model, traffic_split={"0": 90, "1": 10})
```

### Generative endpoints (Gemini)

For Gemini you don't manage replicas — Google does. You either:

- **PAYG**: pay per token; rate-limited by quotas
- **Provisioned Throughput**: reserved Gemini capacity for a fixed monthly fee

---

## 💰 Provisioned Throughput vs PAYG — The Breakeven Math

This is one of the highest-yield exam topics. Memorize the logic.

**PAYG (Pay-As-You-Go):** $X per million input tokens, $Y per million output tokens. Variable cost. Subject to per-region capacity (you can get 429s under load if you exceed quota or region capacity).

**Provisioned Throughput:** You reserve **Generative AI Service Capacity Units (GSCUs)** for a fixed monthly fee. Each GSCU guarantees a certain throughput (tokens-per-second) and replaces PAYG metering for that capacity. Excess traffic falls back to PAYG.

### The breakeven

A single GSCU on Gemini Flash, for example, might equate to ~1,000 RPM continuously. If your peak workload hits 5,000 RPM steady-state, you'd reserve 5 GSCUs. The fixed fee may be $X/month × 5; if PAYG would have cost $1.5X to $4X for the same usage at scale, you save.

**Rule of thumb (verify in your specific region/model):**
- < ~1,000 req/min sustained → PAYG
- 1,000–5,000 req/min → calculate both
- > 5,000 req/min sustained → Provisioned Throughput almost always wins; capacity is guaranteed

🎯 **Exam pattern:** *"A team runs 10,000 RPM steady-state on Gemini Pro and hits 429s under peaks."* → **Provisioned Throughput** with overflow to PAYG. Trap: "Add quota request" (helps but doesn't solve unit economics).

---

## 🌍 Regions, Residency, and Data Sovereignty

Vertex AI runs in 30+ Google Cloud regions. **You explicitly choose the region** on model init:

```python
vertexai.init(project="my-project", location="europe-west1")
```

Regional choices matter for:

- **Data residency** (EU GDPR, German BDSG, Singapore PDPA, Brazil LGPD)
- **Latency** (deploy near your users)
- **Model availability** (not every model is in every region — exam favorite)
- **Quotas** (per-region)
- **Pricing** (some regions cost more)

Common Gemini regions:
| Region | Code | Use |
|--------|------|-----|
| Iowa | `us-central1` | Default US |
| South Carolina | `us-east1` | US East |
| Oregon | `us-west1` | US West |
| Belgium | `europe-west1` | EU default |
| Frankfurt | `europe-west3` | German data residency |
| London | `europe-west2` | UK |
| Tokyo | `asia-northeast1` | Japan |
| Mumbai | `asia-south1` | India |
| São Paulo | `southamerica-east1` | Brazil |
| Sydney | `australia-southeast1` | Australia |

🎯 **Exam pattern:** *"A German bank requires data stays in Germany."* → **`europe-west3` (Frankfurt) with VPC-SC + CMEK.**

---

## 🛡️ Enterprise Security: IAM, VPC-SC, CMEK

The three enterprise-security primitives the exam tests heaviest:

### IAM (Identity and Access Management)

Standard GCP IAM. Predefined roles:

- `roles/aiplatform.user` — call Vertex AI APIs
- `roles/aiplatform.admin` — full admin
- `roles/aiplatform.modelUser` — invoke specific models
- `roles/aiplatform.viewer` — read-only

**Principle of least privilege:** give each service account exactly the roles it needs, never `roles/owner` or `roles/editor` on production projects.

### VPC Service Controls (VPC-SC)

A *perimeter* around Vertex AI resources. Traffic in/out crosses the perimeter only via specifically-allowed services and identities. Blocks:

- Service-account credential theft → exfiltration to public Gemini
- A compromised laptop trying to push data to an external bucket
- Insider-threat scenarios

**Configuration:** define a Service Perimeter; add Vertex AI, BigQuery, GCS, etc. to the perimeter; configure ingress/egress rules.

### CMEK (Customer-Managed Encryption Keys)

By default, Vertex AI encrypts data at rest with Google-managed keys (you can't see, rotate, or revoke them). **CMEK** lets you use *your own* KMS keys (`projects/.../keyRings/.../cryptoKeys/...`). You can rotate, disable, or destroy them; doing so makes the data unreadable.

```python
model = aiplatform.Model.upload(
  display_name="my-model",
  artifact_uri="gs://my-models/model/",
  encryption_spec_key_name="projects/my-proj/locations/us-central1/keyRings/my-ring/cryptoKeys/my-key",
)
```

🎯 **Exam pattern:** *"Regulator requires we control the encryption keys for all training data and model artifacts."* → **CMEK.** *"Regulator requires data cannot leak outside our project."* → **VPC-SC.** *"Both?"* → **Both** — they protect different layers.

---

## 📈 Vertex AI Model Monitoring

Detects three failure modes in deployed models:

1. **Training/serving skew** — features at serving differ from training distribution
2. **Prediction drift** — predictions distribution shifts over time
3. **Data drift** — input feature distribution shifts over time

```python
from google.cloud.aiplatform import model_monitoring

monitoring_job = model_monitoring.ModelDeploymentMonitoringJob.create(
  display_name="churn-monitoring",
  endpoint=endpoint,
  schedule="0 * * * *",   # hourly
  alert_config={"email_alert_config": {"user_emails": ["ml-oncall@acme.com"]}},
  objective_config={"training_dataset": "bq://proj.churn.training_v3"},
)
```

Outputs: drift reports, Cloud Logging signals, Pub/Sub alerts. For GenAI workloads, the analog is **prompt-level quality monitoring** (logged response samples + LLM-as-judge eval).

🎯 **Exam pattern:** *"A model's accuracy on live traffic is dropping month-over-month."* → **Vertex AI Model Monitoring with skew/drift detection** plus an alert + rollback policy.

---

## 🆚 Vertex AI Search vs Vertex AI Vector Search (Critical Exam Distinction)

These are *different products* and the exam loves to test the confusion.

| | **Vertex AI Search** | **Vertex AI Vector Search** |
|---|---------------------|------------------------------|
| Former name | Discovery Engine, Enterprise Search, GenAI App Builder | Matching Engine |
| What it is | A managed retrieval-augmented search service (RAG-in-a-box) | A low-level approximate-nearest-neighbor index (the "vector DB") |
| Input | Documents, websites, GCS paths, BigQuery tables, structured data | Embedding vectors you generate |
| What it manages | Chunking, embedding, indexing, hybrid retrieval (BM25 + dense), reranking, citations | Just the ANN index — you handle chunking, embedding, retrieval orchestration |
| Best for | "I have a corpus; build me search + grounding fast" | "I have my own embedding pipeline and need a vector index" |
| Latency P50 | ~200–500ms full RAG | ~10–50ms vector retrieval only |
| Plug into Gemini | Native grounding tool (one API call) | Manual retrieve-then-generate |

🎯 **Exam pattern:** *"A team needs RAG over 100K product manual PDFs."* → **Vertex AI Search**. *"A team has a custom embedding model trained on chemical-formula data and needs an ANN index."* → **Vertex AI Vector Search**.

---

## 🏪 Vertex AI Studio (the playground inside Vertex AI)

Confusingly, Vertex AI has its *own* Studio: a web UI for prompting Gemini (and other Model Garden models) under your GCP project's IAM and billing.

- Different from Google AI Studio (which is consumer)
- Same prompts, but enterprise auth + audit + region pinning
- "Save prompt → deploy as endpoint" path
- Multi-modal upload (images, PDFs, video)

🎯 **Exam pattern:** *"A team needs an interactive prompting UI under their GCP project."* → **Vertex AI Studio** (not Google AI Studio).

---

## 🤖 Vertex AI Agent Builder (Module 7 deep-dive)

Vertex AI Agent Builder is the umbrella for:

- **Conversational Agents** (formerly Dialogflow CX) — structured-flow conversational AI
- **Search Agents** — Vertex AI Search wrapped as a conversational front
- **Custom Agents** — code-defined agents (often via ADK)
- **Vertex AI Search apps** — search + summaries built on a corpus

Module 7 deconstructs each.

---

## 🔬 Scenario Walkthrough (Architect-Style)

> **Scenario:** Your CTO asks: "Build us a Gemini-powered internal-document assistant for our 5,000-person engineering org. Source documents are in Google Drive + Confluence + GitHub Enterprise. EU residency required. We need audit logging, the ability to know which user asked what, and a quarterly retrain cadence."

**Walkthrough:**
1. **Model**: Gemini 2.5 Pro on Vertex AI in `europe-west1`. (Pro for quality, EU region for residency.)
2. **Retrieval**: **Vertex AI Search** indexed over Drive + Confluence + GitHub (Search supports all three as connectors). Use grounding tool in Gemini call.
3. **Orchestration**: Vertex AI Agent Builder → a Search Agent. Quick to ship, no custom code.
4. **Caching**: Explicit context caching for stable system prompt + per-team policy blocks.
5. **Security**: VPC-SC perimeter around Vertex AI + the GCS buckets + Search index. CMEK on the Search index. IAM: read-access to the index limited to the assistant's service account.
6. **Audit**: Cloud Audit Logs on every Vertex AI call. Each call tagged with the authenticated user's email (via the calling service) and indexed in BigQuery for compliance queries.
7. **Quarterly retrain**: Vertex AI Pipelines — re-index Drive/Confluence/GitHub corpus weekly. Quarterly evaluation gate on a held-out QA set.
8. **Cost controls**: Budget alert at $X/day; Provisioned Throughput once traffic stabilizes.

This is the canonical end-to-end architecture answer the PMLE exam wants from you.

---

## ⚠️ Exam Traps & Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "Vertex AI is one product." | It's an umbrella over ~25 sub-products. Memorize the umbrella. |
| "Vertex AI Search and Vertex AI Vector Search are the same." | Different products. Search = managed RAG. Vector Search = ANN index. |
| "Google AI Studio and Vertex AI Studio are the same." | Different. Consumer (free, API key) vs enterprise (GCP project, IAM). |
| "All Gemini features are in every region." | No. Some features (e.g. tools, batch, certain models) are region-gated. Check the docs. |
| "Provisioned Throughput is always cheaper." | Below ~1K req/min sustained, PAYG wins. Calculate. |
| "Model Garden only has Google models." | Claude, Llama, Mistral, Cohere, AI21 are all there. |
| "Workbench is just a hosted Jupyter." | It's IAM-integrated, VPC-SC-compliant, BigQuery-connected — significantly more than vanilla Jupyter. |
| "CMEK and VPC-SC do the same thing." | CMEK = encryption keys; VPC-SC = perimeter. Different layers. Often deployed together. |
| "Endpoints scale infinitely." | They have min/max replicas. Misconfigured caps cause real outages. |
| "Pipelines and Cloud Build are the same." | Cloud Build = generic CI/CD; Pipelines = ML metadata + artifacts + lineage. |

---

## 🎓 Key Terms To Know

| Term | Definition |
|------|------------|
| **Vertex AI** | Google Cloud's enterprise ML/AI umbrella platform |
| **Vertex AI Studio** | Web UI for prompting (enterprise version of AI Studio) |
| **Model Garden** | Catalog of 200+ models on Vertex AI |
| **Workbench** | Managed Jupyter / Colab Enterprise notebooks |
| **Pipelines** | Kubeflow-based ML workflow orchestration |
| **Experiments** | Training-run tracking |
| **TensorBoard** | Managed TensorBoard for visualization |
| **Feature Store** | Online + offline feature serving |
| **Model Registry** | Central registry for trained models |
| **Endpoints** | Managed serving (online, batch, private) |
| **Model Monitoring** | Drift + skew + quality detection |
| **Vertex AI Search** | Managed RAG over your documents |
| **Vertex AI Vector Search** | ANN index (formerly Matching Engine) |
| **Agent Builder** | No-code agent platform |
| **Conversational Agents** | Structured-flow conversational AI (formerly Dialogflow CX) |
| **Evaluation** | Built-in eval framework |
| **GSCU** | Generative AI Service Capacity Unit (Provisioned Throughput) |
| **PAYG** | Pay-As-You-Go pricing |
| **Provisioned Throughput** | Reserved-capacity pricing |
| **IAM** | Identity and Access Management |
| **VPC-SC** | VPC Service Controls (perimeter) |
| **CMEK** | Customer-Managed Encryption Keys |
| **BAA** | Business Associate Agreement (HIPAA) |
| **MLMD** | ML Metadata (Pipelines backend) |
| **KFP** | Kubeflow Pipelines |
| **TFX** | TensorFlow Extended |

### Acronyms cheat-row

| Acronym | Meaning |
|---------|---------|
| GSCU | Generative AI Service Capacity Unit |
| KFP | Kubeflow Pipelines |
| TFX | TensorFlow Extended |
| MLMD | ML Metadata |
| VPC-SC | VPC Service Controls |
| CMEK | Customer-Managed Encryption Keys |
| BAA | Business Associate Agreement |
| ANN | Approximate Nearest Neighbor |
| ADC | Application Default Credentials |
| RAG | Retrieval-Augmented Generation |
| PAYG | Pay-As-You-Go |

---

## 📊 Case Study — Wayfair and the Vertex AI Generative Shopping Pivot

**Situation.** Wayfair operates one of the largest home-goods e-commerce catalogs (~30 million SKUs). In 2023 the company began rolling out generative-AI shopping experiences built on Vertex AI: image-search-driven discovery ("upload a photo of a room — find matching furniture"), conversational discovery ("I want a Scandinavian living room under $5K"), and personalized email content.

**Why Vertex AI (multiple Wayfair Google Cloud Next 2024 talks + Wayfair engineering blog):**
- **Model Garden** for one-IAM access to Gemini *and* Imagen (image generation for personalized email) *and* embedding models — no vendor sprawl
- **Vertex AI Vector Search** for product-embedding retrieval at scale (30M products × dense embedding) — they need ANN performance, not full managed RAG
- **Workbench** for the ML team's prototyping; **Pipelines** for production retrain cadence on the embedding model
- **CMEK** because customer browsing data + payment data sits in the same project
- **Provisioned Throughput** on Gemini Pro for the steady traffic; PAYG overflow for Black Friday peaks
- **Cloud Audit Logs** + Model Monitoring for compliance and quality

**What didn't work:**
- Started with Vertex AI Search expecting managed RAG to be plug-and-play. Discovered that for *visual* product search at 30M-product scale with image embeddings they needed lower-level Vector Search. (Vertex AI Search excels at text RAG; for high-volume custom-embedding retrieval, Vector Search is the right primitive.) Migrated.

**Lesson for the architect.**
- Pick the *right* sub-product. Search vs Vector Search is one of the highest-stakes Vertex decisions.
- Visualize the umbrella — most production Vertex deployments use 5–8 sub-products together, not just one.
- Plan Provisioned Throughput around your *peak* traffic, with PAYG overflow as the safety valve.

**Discussion (Socratic).**
- **Q1:** Wayfair's image-search uses a custom CLIP-style embedding fine-tuned on their product catalog. Which Vertex sub-products handle (a) fine-tuning, (b) the index, (c) the serving endpoint? Be precise.
- **Q2:** If Wayfair wanted to add a "ask Gemini why this rug fits your room" feature on top of the existing Vector Search, which additional product(s) do they enable?
- **Q3:** A new VP argues for moving the entire stack to a self-managed Pinecone cluster + Hugging Face Inference Endpoints. What's the most credible counter-argument?

---

## ✅ Module 3 Summary

You now know:

- 🏢 **Vertex AI as an umbrella** over ~25 sub-products
- 🛍️ **Model Garden** — Gemini, Claude, Llama, Mistral, Cohere, AI21 under one IAM
- 🧑‍💻 **Workbench / Pipelines / Experiments / Feature Store** — the ML core
- 📦 **Model Registry / Endpoints / Monitoring** — the deployment core
- 🆚 **Vertex AI Search vs Vector Search** — different products, different use cases
- 💰 **Provisioned Throughput vs PAYG** — breakeven math
- 🌍 **30+ regions** and residency choices
- 🛡️ **IAM + VPC-SC + CMEK** — enterprise security primitives
- 🏪 **Vertex AI Studio** (enterprise) vs Google AI Studio (consumer)
- 🤖 **Agent Builder** — covered deeper in Module 7

**Next:** [Module 4 — Multi-Modal AI with Gemini](../Module-04-Multi-Modal-Gemini/Reading.md)

---

## 📚 Further Reading

- 📖 [Vertex AI Overview](https://cloud.google.com/vertex-ai/docs/start/introduction-unified-platform)
- 📖 [Model Garden](https://cloud.google.com/model-garden)
- 📖 [Pipelines](https://cloud.google.com/vertex-ai/docs/pipelines/introduction)
- 📖 [Model Registry](https://cloud.google.com/vertex-ai/docs/model-registry/introduction)
- 📖 [Endpoints](https://cloud.google.com/vertex-ai/docs/predictions/get-online-predictions)
- 📖 [VPC-SC for Vertex AI](https://cloud.google.com/vertex-ai/docs/general/vpc-service-controls)
- 📖 [Vertex AI Pricing](https://cloud.google.com/vertex-ai/pricing)
- 📖 [Vertex AI Search vs Vector Search](https://cloud.google.com/blog/products/ai-machine-learning/comparing-vertex-ai-search-and-vector-search)
