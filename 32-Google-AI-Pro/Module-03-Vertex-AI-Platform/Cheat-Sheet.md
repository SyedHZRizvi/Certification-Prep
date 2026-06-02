# 📋 Module 3 Cheat Sheet: Vertex AI Platform

> Vertex AI is an **umbrella** over ~25 sub-products. Memorize the umbrella.

---

## 🏢 The Vertex AI Map

```
┌── STUDIO ──── MODEL GARDEN ──── AGENT BUILDER ──┐
│                                                  │
├── WORKBENCH ─ PIPELINES ─── EXPERIMENTS ────────┤
│                                                  │
├── TRAINING ── FEATURE STORE ── TENSORBOARD ─────┤
│                                                  │
├── MODEL REGISTRY ─ ENDPOINTS ── MODEL MONITORING┤
│                                                  │
└── VECTOR SEARCH ─ SEARCH ──── EVALUATION ───────┘
```

---

## 🆚 Studio vs Studio (Memorize)

| | **Google AI Studio** | **Vertex AI Studio** |
|---|----------------------|------------------------|
| URL | aistudio.google.com | Google Cloud console |
| Auth | API key | IAM (ADC) |
| Audit | ❌ | ✅ |
| Region | Auto-picked | Explicit |
| Use | Prototyping, hobby | Enterprise prompting |

---

## 🛍️ Model Garden Highlights

**1st-party:** Gemini 2.5 Pro/Flash/Ultra · Imagen 3/4 · Veo · Chirp (speech) · MedLM · Gemma (open weights)
**3rd-party:** **Claude** (Sonnet/Haiku/Opus 4.6) · Llama 3/4 · Mistral · Cohere · AI21 · xAI Grok
**Embeddings:** text-embedding-004 / 005 · gemini-embedding-001 · multilingual-embedding-002

🎯 Claude IS available on Vertex AI alongside Gemini. Common exam trap.

---

## 🆚 Search vs Vector Search (CRITICAL)

| | **Vertex AI Search** | **Vertex AI Vector Search** |
|---|---------------------|------------------------------|
| Former name | Discovery Engine | Matching Engine |
| What | Managed RAG (chunk+embed+index+retrieve+ground) | Raw ANN index |
| Pick when | "I have docs/sites; build RAG fast" | "I have custom embeddings; need fast vector lookup" |
| Latency | 200–500ms full RAG | 10–50ms vectors only |

🎯 *Exam favorite confusion. Memorize.*

---

## 💰 Provisioned Throughput vs PAYG

| Workload | Pick |
|----------|------|
| < 1K RPM sustained | **PAYG** |
| 1K–5K RPM | Calculate |
| > 5K RPM steady | **Provisioned Throughput** (capacity guaranteed) |

**Unit:** GSCU (Generative AI Service Capacity Unit). Excess traffic falls back to PAYG.

---

## 🛡️ Enterprise Security Trio

| Primitive | Protects against | Use when |
|-----------|------------------|----------|
| **IAM** | Unauthorized API calls | Always |
| **VPC-SC** | Data exfiltration outside the perimeter | Regulated, sensitive |
| **CMEK** | Inability to control your own keys | Regulator-mandated key control |

🎯 *CMEK and VPC-SC are NOT substitutes — they protect different layers. Use both for HIPAA.*

---

## 🌍 Common Regions

| Region | Code | Use |
|--------|------|-----|
| Iowa | `us-central1` | US default |
| Belgium | `europe-west1` | EU default |
| Frankfurt | `europe-west3` | **German data residency** |
| London | `europe-west2` | UK |
| Tokyo | `asia-northeast1` | Japan |
| Mumbai | `asia-south1` | India |
| São Paulo | `southamerica-east1` | Brazil |
| Sydney | `australia-southeast1` | Australia |

---

## 🛤️ Pipelines + Registry + Endpoints + Monitoring (PMLE Core)

```
Workbench notebook
   ↓
Vertex AI Pipelines (KFP v2 / TFX)
   ↓
Model Registry (versioned models)
   ↓
Endpoint (online: replicas + traffic_split for canary)
       (batch: GCS in/out)
       (private: VPC endpoint)
   ↓
Model Monitoring (skew / drift / drift detection + alert)
```

---

## 📦 Endpoints

| Type | Use |
|------|-----|
| **Online** | Real-time HTTPS/gRPC, autoscaling, traffic_split for canary |
| **Batch** | Async GCS-in, GCS-out |
| **Private** | VPC-only (no public internet) |

---

## 🛟 HIPAA-Eligible Stack

- Vertex AI **in a HIPAA-eligible region**
- **Signed BAA** with Google Cloud
- **VPC-SC** perimeter
- **CMEK** keys
- **Cloud Audit Logs** on
- **Eligible service list** verified (not every Vertex service is HIPAA-eligible)

---

## 🎯 Power Phrases

✅ Often **right**:

- "Vertex AI is the enterprise platform; AI Studio is the consumer playground"
- "Claude is available on Vertex AI Model Garden alongside Gemini"
- "Search = managed RAG; Vector Search = ANN index"
- "CMEK + VPC-SC for HIPAA-eligible Gemini"
- "Provisioned Throughput at >5K RPM steady"
- "Pipelines for reproducible ML workflows with metadata + lineage"
- "Feature Store solves training/serving skew"
- "Traffic split on Endpoints for canary deploys"

❌ Often **wrong**:

- "Vertex AI is one API" (it's an umbrella)
- "Search and Vector Search are the same"
- "API keys work on Vertex AI" (they don't — use IAM)
- "VPC-SC encrypts at rest" (CMEK does that)
- "Workbench is just hosted Jupyter" (it's IAM/VPC-SC integrated)

---

## ✏️ Quick Self-Check

1. Three Vertex AI deployment surfaces? ___
2. Search vs Vector Search? ___
3. PAYG vs Provisioned Throughput breakeven? ___
4. CMEK vs VPC-SC? ___
5. Three things Model Monitoring detects? ___

If all 5 in under 90s, you own this module. ✅

---

➡️ [Module 4: Multi-Modal AI with Gemini](../Module-04-Multi-Modal-Gemini/Reading.md)
