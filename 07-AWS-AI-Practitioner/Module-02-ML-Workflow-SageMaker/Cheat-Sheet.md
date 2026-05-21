# 📋 Module 2 Cheat Sheet: ML Workflow on SageMaker

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 🔁 The 7 ML Lifecycle Stages

```
1. Business problem  →  Frame the question
2. Data collection   →  S3, Kinesis, Glue
3. Data prep         →  Data Wrangler, Processing Jobs
4. Train             →  Training Jobs, Autopilot, JumpStart
5. Evaluate          →  Clarify, metrics
6. Deploy            →  Endpoints (4 modes)
7. Monitor           →  Model Monitor, Pipelines
```

---

## 🏛️ SageMaker Tools (recognize on sight)

| Tool | Stage | One-line |
|------|-------|----------|
| Studio | All | Browser IDE for ML |
| Canvas | Train (no-code) | Visual ML for analysts |
| Data Wrangler | Prep | 300+ visual transforms |
| Feature Store | Prep | Online + offline feature mgmt |
| Ground Truth | Prep | Managed labeling (public/private/vendor) |
| Processing Jobs | Prep / Eval | Container-based data jobs |
| Training Jobs | Train | Managed training on GPUs |
| Automatic Model Tuning | Train | HPO (Bayesian / random / grid) |
| Autopilot | Train | AutoML on tabular |
| JumpStart | Train | One-click pretrained models / FMs |
| Experiments | Track | Runs, params, metrics |
| Model Registry | Deploy | Versioned model catalog |
| Endpoints | Deploy | Real-time / Serverless / Async / Batch |
| Pipelines | MLOps | CI/CD for ML |
| Model Monitor | Monitor | Data / model / bias / attribution drift |
| Clarify | Eval / Monitor | Bias + explainability |
| Neo | Deploy | Compile for target hardware |
| Edge Manager | Deploy (edge) | Deploy to edge devices |

---

## 🚪 4 Inference Endpoint Modes

| Mode | Latency | Use when… |
|------|---------|-----------|
| **Real-time** | ms | Live API, chatbots, recos |
| **Serverless** | ms (cold starts) | Spiky / idle traffic |
| **Asynchronous** | sec–min | Large payloads (~1 GB), longer processing |
| **Batch transform** | min–hr | One-off scoring of large dataset |

---

## 🆚 Canvas vs Autopilot vs JumpStart

| Tool | Audience | Input | Output |
|------|----------|-------|--------|
| Canvas | Business analyst | CSV | Model + predictions, no code |
| Autopilot | Data scientist | CSV + target | Best model + notebook |
| JumpStart | Anyone | Catalog selection | Pretrained model / solution |

---

## 🤖 AWS AI Services (one-liner each)

| Service | Job |
|---------|-----|
| Rekognition | Vision (images + video) |
| Textract | OCR + form/table extraction |
| Comprehend | NLP (sentiment, entities, topics); Medical for PHI |
| Translate | Neural machine translation |
| Polly | Text → Speech |
| Transcribe | Speech → Text (Medical + Call Analytics flavors) |
| Lex | Conversational chatbots (Alexa engine) |
| Personalize | Real-time recommendations |
| Forecast | Time-series forecasting |
| Kendra | Enterprise intelligent search |
| Fraud Detector | Online fraud detection |
| Lookout (Equipment/Vision/Metrics) | Anomaly detection |

---

## 📊 Model Monitor — 4 Drift Types

1. **Data quality drift** — input distribution shifted
2. **Model quality drift** — accuracy fell (needs labels)
3. **Bias drift** — fairness metrics shifted
4. **Feature attribution drift** — feature importance changed

---

## 🏆 Exam Power Phrases

Usually right:
- ✅ "Pre-built AI service" when the task matches one cleanly (Comprehend for sentiment, Textract for forms, Polly for TTS, etc.)
- ✅ "Batch transform" for one-off bulk scoring
- ✅ "Asynchronous" for big payloads
- ✅ "Serverless" for spiky / idle workloads
- ✅ "Canvas" for no-code business users
- ✅ "JumpStart" for one-click pretrained models
- ✅ "Private workforce in Ground Truth" for confidential data

Usually wrong:
- ❌ "Build a custom model in SageMaker" when a managed AI service already does it
- ❌ "Real-time endpoint" for overnight batch jobs
- ❌ "Mechanical Turk" for sensitive data
- ❌ "Model Monitor" for GPU utilization

---

## ⚠️ Anti-Patterns

- ❌ Custom SageMaker model for **OCR** when **Textract** exists
- ❌ Real-time endpoint to score 100 GB once a week (use **Batch Transform**)
- ❌ Training from scratch when **JumpStart** has the same model pretrained
- ❌ Public workforce labeling for **regulated data** (HIPAA, PCI)

---

## ✏️ Quick Self-Check

1. List the 7 lifecycle stages. ___
2. Which endpoint type for spiky idle traffic? ___
3. What service does OCR + form extraction? ___
4. What does Clarify add on top of Model Monitor? ___
5. Canvas vs Autopilot — one sentence each. ___

---

➡️ [Module 3: Generative AI Fundamentals](../Module-03-Generative-AI-Fundamentals/Reading.md)
