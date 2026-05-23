# 📋 Module 1 Cheat Sheet: Azure AI Services Overview

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 🏷️ Renames To Memorize

| Old | Current |
|---|---|
| Cognitive Services | **Azure AI services** |
| Form Recognizer | **Document Intelligence** |
| Text Analytics | **Azure AI Language** |
| LUIS | **CLU** (in Azure AI Language) |
| QnA Maker | **Question Answering** (in Azure AI Language) |
| Cognitive Search | **Azure AI Search** |
| Azure AI Studio | **Azure AI Foundry** |
| Computer Vision | **Azure AI Vision** |

---

## 🛠️ Multi-Service vs Single-Service

| | Multi (AIServices) | Single (per service) |
|---|---|---|
| Key | ONE for many services | One per service |
| Tier | S0 only | F0 + S0+ |
| Use when | Multiple AI services, one bill | Isolate cost/scale, or use free tier |
| ⚠️ Excludes | **Azure OpenAI** (always separate) | — |

```bash
az cognitiveservices account create \
  --name <n> -g <rg> --kind AIServices --sku S0 -l eastus --yes
```

---

## 🔐 Auth Decision Tree

```
Running in Azure?
├── YES → Managed Identity (system-assigned > user-assigned)
│         + role "Cognitive Services User"
└── NO  → Local dev? → AzureKeyCredential(key)
         CI/CD off Azure? → Service principal (client secret/cert)
```

| Method | Header | Code |
|---|---|---|
| Key | `Ocp-Apim-Subscription-Key: <key>` | `AzureKeyCredential(key)` |
| Entra ID | `Authorization: Bearer <token>` | `DefaultAzureCredential()` |
| Managed identity | (same as Entra) | `ManagedIdentityCredential()` |

🧠 Entra ID requires a **custom subdomain** endpoint.

---

## 🔑 Key Rotation (memorize the dance)

```
1. App uses key1
2. Switch app → key2
3. Regenerate key1
4. Switch app → key1
5. Regenerate key2
```

---

## 📦 SDK Packages Quick Reference

| Service | Package | Client |
|---|---|---|
| Vision (Image Analysis 4.0) | `azure-ai-vision-imageanalysis` | `ImageAnalysisClient` |
| Language | `azure-ai-textanalytics` | `TextAnalyticsClient` |
| Translator | `azure-ai-translation-text` | `TextTranslationClient` |
| Speech | `azure-cognitiveservices-speech` | `SpeechRecognizer` / `SpeechSynthesizer` |
| Doc Intelligence (new) | `azure-ai-documentintelligence` | `DocumentIntelligenceClient` |
| Content Safety | `azure-ai-contentsafety` | `ContentSafetyClient` |
| AI Search | `azure-search-documents` | `SearchClient` / `SearchIndexClient` |
| Azure OpenAI | `openai` | `AzureOpenAI` |
| Identity | `azure-identity` | `DefaultAzureCredential` |

---

## 🏆 Exam Power Phrases

**Usually right** when you see:
- ✅ "Use a system-assigned managed identity"
- ✅ "Assign the Cognitive Services User role"
- ✅ "Multi-service Azure AI services resource"
- ✅ "Custom subdomain endpoint"
- ✅ "Private endpoint to restrict network access"
- ✅ "Request quota increase, add exponential backoff"

**Usually wrong**:
- ❌ "Store the subscription key in source code"
- ❌ "Use the Owner role for data-plane calls"
- ❌ "F0 tier for production"
- ❌ "Azure OpenAI is part of the multi-service resource"
- ❌ "Rename the custom subdomain"

---

## ⚠️ Anti-Patterns

- ❌ Secrets hardcoded in `.py` files
- ❌ One F0 resource per service per subscription (limit) — used for prod
- ❌ Legacy regional endpoint + Entra ID auth (will fail)
- ❌ Sharing key1 with multiple apps (rotation chaos)
- ❌ Forgetting to assign RBAC role after enabling managed identity

---

## 🗓️ Key Facts

- 2 keys per resource (rotation)
- 1 F0 resource per kind per subscription
- Multi-service kind = `AIServices`
- Azure OpenAI kind = `OpenAI` (separate)
- Default auth chain order: env → MI → CLI → VS Code → interactive
- Header for key auth: `Ocp-Apim-Subscription-Key`

---

## ✏️ Quick Self-Check

Cover the answers and recite:
1. Old name → new name for Form Recognizer? ___
2. The 3 auth methods, in increasing security order? ___
3. Header for key-based REST calls? ___
4. Which resource kind is multi-service? ___
5. Why is Azure OpenAI not in the multi-service resource? ___

If you can answer all 5 in 30 seconds, you own Module 1. ✅

---

## 📐 Decision Matrix — One Glance

| Constraint | Pick |
|---|---|
| Need free tier (any kind) | Single-service F0 (one per kind per sub) |
| Need one bill + one key | Multi-service `AIServices` S0 |
| Need Azure OpenAI | Always separate `OpenAI` resource (gated) |
| Code in Azure (App Service / Func / AKS / VM) | System-assigned MI + `Cognitive Services User` role |
| Code on laptop (dev) | `AzureKeyCredential(key)` |
| CI/CD off Azure | Service principal w/ Federated Identity (preferred) or client secret |
| Traffic off public net | Private Endpoint + disable public network |
| Compliance KMS | CMK + Azure Key Vault |
| EU-only data residency | EU Data Zone (Azure OpenAI) or single-region S0 |
| HIPAA + no prompt retention | Azure OpenAI + approved abuse-monitoring opt-out form |

## 🧮 SLA + Throughput Cheats

| Symbol | Means | Where it shows up |
|---|---|---|
| **TPM** | Tokens per minute | Azure OpenAI deployment quota |
| **RPM** | Requests per minute | Azure OpenAI deployment quota |
| **PTU** | Provisioned Throughput Unit | Reserved capacity SKU |
| **Standard** | Pay-as-you-go, region-pinned | Default for most Azure OpenAI deployments |
| **Global Standard** | Cheaper PAYG, globally routed | Use when latency tolerance allows |
| **Global Batch** | Async batched, ~50% cheaper, 24h SLA | High-volume offline workloads |

## 🛡️ Citations On The Page

| Concept | Source | Year |
|---|---|---|
| Multi-tenant resource model | Microsoft Azure ARM docs | 2014→ |
| Least-privilege RBAC | Saltzer & Schroeder, *Communications of the ACM* | 1975 |
| Managed Identity | Microsoft Entra ID GA | 2018 (then renamed from Azure AD in 2023) |
| Responsible AI Standard v2 | Microsoft, *Responsible AI Standard* | June 2022 |
| Azure OpenAI Service GA | Microsoft Azure blog | January 2023 |
| NIST AI RMF 1.0 | NIST | January 2023 |

---

➡️ [Module 2: Responsible AI & Content Safety](../Module-02-Responsible-AI-Content-Safety/Reading.md)
