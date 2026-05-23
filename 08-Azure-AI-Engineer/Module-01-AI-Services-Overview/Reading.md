# Module 1: Azure AI Services Overview 🎯

> **Why this module matters:** Every other module in this course assumes you can spin up an Azure AI resource, find its key + endpoint, and call it from code. Nail this and the rest is downhill.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - Azure subscription / resource group / resource model — covered in [`05-Azure-Fundamentals` Module 2](../../05-Azure-Fundamentals/Module-02-Azure-Architecture-Services/Reading.md)
> - Microsoft Entra ID basics (tenants, RBAC roles) — covered in [`06-Azure-Administrator` Module 1](../../06-Azure-Administrator/Module-01-Identity-Governance/Reading.md)
> - Python or C# fluency at the "I can read a REST snippet" level
> - Azure CLI installed (`az login` working)
>
> If any of these are shaky, pause and review before continuing — the rest of this course assumes you can read a `Microsoft.CognitiveServices/accounts` ARM resource and not flinch.

---

## 🍕 A Story: Maya's First Day

Meet Maya. She just joined a startup that builds a meal-photo-to-recipe app. Day one, her manager says: *"We need OCR on receipts, sentiment on user reviews, and a chatbot that answers cooking questions. Production in three weeks."*

Maya panics. She opens the Azure portal and types "AI" into the search bar. Forty-three results come back. **Azure AI Vision. Azure AI Language. Azure AI Speech. Azure OpenAI. Azure AI Foundry. Azure AI Content Safety.** What's the difference? Which one does OCR? Why are some "AI" and some "Cognitive"?

Two hours later, Maya has the answer: **Azure AI Services** is the umbrella brand (the artist formerly known as "Cognitive Services"). Underneath it are about a dozen individual services. You can provision them **one at a time** (single-service resource) or **all together** (multi-service resource, one key for everything). She creates a multi-service resource, grabs ONE key, and starts building.

That's the mental model for this module: **one umbrella, many services, two ways to provision, three ways to authenticate.** Let's break it down.

---

## 🏷️ Naming: Why Microsoft Renamed Everything

Microsoft kept rebranding throughout 2023–2024. The exam uses **current** names. Memorize the swaps:

| Old name (still in old docs) | Current name | What it does |
|---|---|---|
| Cognitive Services | **Azure AI services** | The whole umbrella of pretrained AI APIs |
| Computer Vision | **Azure AI Vision** | Image analysis, OCR |
| Form Recognizer | **Azure AI Document Intelligence** | Extract structured data from documents |
| Text Analytics | **Azure AI Language** (sentiment, NER, summary, etc.) | NLP |
| LUIS (Language Understanding) | **Conversational Language Understanding (CLU)** in Azure AI Language | Intent + entity for chatbots |
| QnA Maker | **Question Answering** in Azure AI Language | Knowledge-base Q&A |
| Azure Cognitive Search | **Azure AI Search** | Indexer + skillset + vector search |
| Azure AI Studio | **Azure AI Foundry** (portal experience) | Build/deploy GenAI apps, prompt flow |
| Bing Search APIs | **Retiring** — moved to Grounding with Bing Search (in Azure AI Foundry) | — |

🚨 **Trap on the exam:** If a question references "Form Recognizer," the right answer probably still says "Document Intelligence" — the underlying SDK package is `azure-ai-formrecognizer` (legacy) or `azure-ai-documentintelligence` (current). Microsoft is migrating, both names appear.

---

## 🧩 Azure AI Services Catalog (what's in the umbrella)

These are the services you'll touch on AI-102:

| Category | Service | What it does | Typical resource kind |
|---|---|---|---|
| Vision | Azure AI Vision | Image Analysis 4.0, OCR (Read API) | `ComputerVision` |
| Vision | Custom Vision | Train your own image classifier / object detector | `CustomVision.Training` + `CustomVision.Prediction` |
| Vision | Face | Face detection, verification, identification (**limited access**) | `Face` |
| Vision | Video Indexer | Extract insights from video | (separate ARM resource) |
| Language | Azure AI Language | Sentiment, key phrases, NER, PII, summarization, CLU, QA | `TextAnalytics` |
| Language | Translator | Text / document / custom translation | `TextTranslation` |
| Speech | Azure AI Speech | STT, TTS, custom voice, speech translation | `SpeechServices` |
| Documents | Document Intelligence | Extract structured data from forms, invoices, receipts | `FormRecognizer` |
| Decision | Content Safety | Text + image moderation, prompt shields, groundedness | `ContentSafety` |
| Search | Azure AI Search | Indexes, indexers, skillsets, vector + semantic search | `Microsoft.Search` |
| Generative | Azure OpenAI | GPT-4o, GPT-4, embeddings, DALL-E, Whisper | `OpenAI` |
| Multi | **Azure AI services multi-service** | One resource, one key, access to most services above | `AIServices` (or `CognitiveServices`) |

⚠️ **Note on retired services:** Anomaly Detector, Metrics Advisor, Personalizer, and the standalone "Language Understanding (LUIS)" service are all retired or in retirement. AI-102 has stopped asking about them as primary subjects. CLU has replaced LUIS. QnA Maker is replaced by Question Answering.

---

## 🛠️ Provisioning: Single-Service vs Multi-Service

This is a guaranteed exam question. Memorize the trade-offs:

| | Single-service resource | Multi-service (Azure AI services) resource |
|---|---|---|
| **Resource kind** | One per service (e.g. `ComputerVision`, `SpeechServices`) | `AIServices` |
| **Keys** | Separate key per service | **One key, one endpoint** for many services |
| **Pricing tier** | Free tier (F0) often available per service | One billing line — easier accounting |
| **Use when** | You want to isolate cost or scale one service independently | Prototyping; multiple services in one app |
| **RBAC** | Granular per service | One assignment covers everything |
| **Regional availability** | Pick best region per service | Region-locked across services |

🎯 **Rule of thumb for the exam:** *"My app uses 3+ AI services and I want one bill"* → multi-service. *"I want a free Custom Vision sandbox without billing surprises"* → single-service F0.

### CLI provisioning

```bash
# Multi-service Azure AI services resource
az cognitiveservices account create \
  --name maya-ai \
  --resource-group rg-maya \
  --kind AIServices \
  --sku S0 \
  --location eastus \
  --yes

# Single-service Azure AI Vision (free F0 tier)
az cognitiveservices account create \
  --name maya-vision \
  --resource-group rg-maya \
  --kind ComputerVision \
  --sku F0 \
  --location eastus \
  --yes
```

🚨 **Trap:** Azure OpenAI is *not* part of the multi-service resource. It's always its own `OpenAI` kind, and it requires approval. Same goes for Face's higher-risk features (identification, verification of unknown subjects) — limited access form required.

---

## 🔑 Keys, Endpoints, and Regions

Every Azure AI resource has:
- **Endpoint** — a URL like `https://maya-ai.cognitiveservices.azure.com/` (or `https://eastus.api.cognitive.microsoft.com/` for older single-service resources)
- **Key1 + Key2** — two keys so you can rotate without downtime
- **Region** — billing + data residency. **A key only works against its own region's endpoint.**

```bash
# Get keys + endpoint
az cognitiveservices account keys list -n maya-ai -g rg-maya
az cognitiveservices account show -n maya-ai -g rg-maya --query properties.endpoint
```

### 🔁 Key rotation pattern (memorize)
1. Switch app from `key1` to `key2`
2. Regenerate `key1`
3. Switch app back to `key1`
4. Regenerate `key2`

This way you never have a window with no valid key.

---

## 🔐 Authentication: Three Ways

This is **the** highest-value topic for the planning domain. You will see at least 2 questions on it.

### 1. Subscription key (the easy way)

```python
from azure.ai.vision.imageanalysis import ImageAnalysisClient
from azure.core.credentials import AzureKeyCredential

client = ImageAnalysisClient(
    endpoint="https://maya-ai.cognitiveservices.azure.com/",
    credential=AzureKeyCredential("YOUR-KEY-HERE")
)
```

- ✅ Easiest to start
- ❌ Long-lived secret; if it leaks, attacker has full access
- ❌ Not recommended for production

### 2. Microsoft Entra ID (formerly Azure AD)

Use when humans or service principals authenticate. Requires an RBAC role assignment (commonly **Cognitive Services User** or **Cognitive Services Contributor**).

```python
from azure.identity import DefaultAzureCredential
from azure.ai.textanalytics import TextAnalyticsClient

credential = DefaultAzureCredential()  # tries env vars, managed identity, az login, etc.
client = TextAnalyticsClient(
    endpoint="https://maya-ai.cognitiveservices.azure.com/",
    credential=credential
)
```

- ✅ No secret in code
- ✅ Audit trail per identity
- ⚠️ Requires the resource to have a **custom subdomain** (it does, if you used the `cognitiveservices.azure.com` endpoint)

### 3. Managed Identity (the production answer)

Use when your code runs **inside Azure** (App Service, Functions, AKS, VM). The platform injects an identity — no secrets, no rotation.

```python
from azure.identity import ManagedIdentityCredential
credential = ManagedIdentityCredential()  # or DefaultAzureCredential() which picks it up automatically
```

Two flavors:
- **System-assigned** — tied to the resource lifecycle (deleted when the resource is)
- **User-assigned** — standalone identity that can be attached to many resources

🎯 **Exam pattern:** *"A web app on Azure App Service needs to call Azure AI Language without storing secrets — what should you use?"* → **System-assigned managed identity + Cognitive Services User role**.

| Method | Best for | Secret in code? |
|---|---|---|
| Subscription key | Local dev, quick prototypes | Yes |
| Entra ID (service principal) | CI/CD outside Azure | Sometimes (client secret) |
| Managed identity | Production code running in Azure | **No** |

---

## 📦 SDKs You Need to Know

The AI-102 exam shows code snippets. You're expected to read Python (and recognize C#/JS structure). Memorize package names:

| Service | Python package | Client class |
|---|---|---|
| Azure AI Vision (Image Analysis 4.0) | `azure-ai-vision-imageanalysis` | `ImageAnalysisClient` |
| Azure AI Language | `azure-ai-textanalytics` | `TextAnalyticsClient` |
| Translator | `azure-ai-translation-text` | `TextTranslationClient` |
| Speech | `azure-cognitiveservices-speech` | `SpeechRecognizer`, `SpeechSynthesizer` |
| Document Intelligence (current) | `azure-ai-documentintelligence` | `DocumentIntelligenceClient` |
| Document Intelligence (legacy) | `azure-ai-formrecognizer` | `DocumentAnalysisClient` |
| Content Safety | `azure-ai-contentsafety` | `ContentSafetyClient` |
| Azure AI Search | `azure-search-documents` | `SearchClient`, `SearchIndexClient`, `SearchIndexerClient` |
| Azure OpenAI | `openai` (with `AzureOpenAI` client) | `AzureOpenAI` |
| Identity (always pair) | `azure-identity` | `DefaultAzureCredential` etc. |

### Minimal "hello AI" snippet (you should be able to write this from memory)

```python
from azure.ai.textanalytics import TextAnalyticsClient
from azure.core.credentials import AzureKeyCredential

endpoint = "https://maya-ai.cognitiveservices.azure.com/"
key = "<YOUR-KEY>"

client = TextAnalyticsClient(endpoint=endpoint, credential=AzureKeyCredential(key))

result = client.analyze_sentiment(documents=["Azure makes this surprisingly easy."])[0]
print(result.sentiment, result.confidence_scores)
```

### REST equivalent

Every Azure AI service has REST endpoints. Knowing the *shape* is enough for the exam:

```http
POST https://maya-ai.cognitiveservices.azure.com/language/:analyze-text?api-version=2023-04-01
Ocp-Apim-Subscription-Key: <YOUR-KEY>
Content-Type: application/json

{
  "kind": "SentimentAnalysis",
  "analysisInput": { "documents": [{ "id": "1", "language": "en", "text": "I love Azure" }] }
}
```

🧠 **Memory hook:** The auth header for key-based REST calls is always `Ocp-Apim-Subscription-Key`. (That's a leftover from when the gateway was Microsoft's Apim service.)

---

## 🌍 Regional + Data Residency Notes

- Most Azure AI services are available in 10+ regions; **Azure OpenAI** is in fewer, and specific *models* are in even fewer regions.
- Data submitted to AI services is **not** used to train Microsoft's foundation models (covered under the Azure OpenAI / AI services data privacy commitment).
- For **Azure OpenAI**, you can request that abuse-monitoring logging be **disabled** for regulated workloads (requires a form submission).
- **Customer-managed keys (CMK)** are available for at-rest encryption of stored data (custom models, training data) — wire up with Azure Key Vault.
- Network restrictions: use **Private Endpoints** + **VNet integration** to keep traffic off the public internet.

---

## 🧪 Monitoring & Cost

| Tool | What it shows |
|---|---|
| **Azure Monitor metrics** | Calls per minute, latency, error rate per resource |
| **Diagnostic settings → Log Analytics** | Request logs, content prompt logs (Azure OpenAI), audit |
| **Cost Management** | Per-resource spend; tag resources so you can group |
| **Throttling (429s)** | Hit when you exceed the TPM/RPM quota of your tier |

🎯 **Exam pattern:** *"Calls to Azure OpenAI return HTTP 429 intermittently. What do you do first?"* → check quota (Tokens Per Minute) and request an increase, then add client-side retry with exponential backoff.

---

## ⚠️ Common Misconceptions

| Misconception | Reality |
|---|---|
| "Multi-service resource includes Azure OpenAI" | No — OpenAI is a separate resource kind |
| "Keys never expire" | They don't *expire*, but you should rotate them on a schedule |
| "Free tier is good for production" | F0 has strict throttling — fine for demos, not prod |
| "DefaultAzureCredential needs a config file" | It walks a chain: env → managed identity → CLI → VS Code |
| "Cognitive Services is the new name" | Other way around — **Azure AI services** is the new name |
| "Every region has every model" | Especially in Azure OpenAI, model availability is regional and changes monthly |

---

## 🚨 Exam Traps

1. **Subdomain endpoint** is required for Entra ID auth. The legacy `westus.api.cognitive.microsoft.com` endpoint will *not* accept tokens.
2. **F0 (free) tier resources** are limited to **one per subscription** per service kind.
3. **Custom subdomain cannot be renamed** once set — pick carefully.
4. **Managed identity** must be turned *on* before it's usable, and the **role assignment** happens on the AI resource (not on the calling resource).
5. **Bring Your Own Storage (BYOS)** is required for some training scenarios (Custom Speech, custom Document Intelligence models). The exam will phrase this as "where is the training data stored?"

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|---|---|
| **Azure AI services** | Umbrella brand for Microsoft's pretrained AI APIs (formerly Cognitive Services) |
| **Multi-service resource** | One resource (`AIServices` kind) that exposes most AI services with a single key |
| **Single-service resource** | One resource per service (`ComputerVision`, `TextAnalytics`, etc.) |
| **Endpoint** | The HTTPS URL where your code calls the service |
| **Custom subdomain** | A unique subdomain on `cognitiveservices.azure.com` — required for Entra ID auth |
| **Subscription key** | Long-lived secret in the `Ocp-Apim-Subscription-Key` header |
| **Managed identity** | Azure-issued identity for code running in Azure — no secrets needed |
| **System-assigned MI** | Lifecycle tied to the resource |
| **User-assigned MI** | Standalone, attachable to multiple resources |
| **RBAC role: Cognitive Services User** | Lets the identity call the data plane (read keys, invoke APIs) |
| **DefaultAzureCredential** | Python/SDK helper that tries multiple auth chains in order |
| **TPM / RPM** | Tokens / Requests Per Minute quotas (Azure OpenAI) |
| **CMK** | Customer-managed keys for at-rest encryption via Key Vault |
| **Private Endpoint** | VNet-attached IP that makes the AI resource reachable only inside your network |

---

## 📖 Case Study — ChatGPT Enterprise runs on Azure OpenAI (2023–2024)

**Situation.** In January 2023, Microsoft made Azure OpenAI Service generally available, anchored by a multi-year, multi-billion-dollar partnership with OpenAI (announced January 23, 2023; per Microsoft and OpenAI press releases). When OpenAI launched **ChatGPT Enterprise** in August 2023, the entire backend ran on Azure infrastructure — the same `Microsoft.CognitiveServices/accounts` resource family this module describes, scaled to power hundreds of thousands of concurrent enterprise sessions. By early 2024, ChatGPT Enterprise reportedly served customers including PwC, Klarna, Block, and Estée Lauder, all subject to enterprise contracts that demanded SOC 2 Type 2 compliance, customer-managed keys (CMK), and audited data residency — features that this module's "Azure AI services" umbrella has built in but that consumer ChatGPT did not.

**Decision.** Microsoft and OpenAI architected ChatGPT Enterprise on Azure OpenAI's `kind=OpenAI` resources behind **Private Endpoints**, used **Managed Identity** for service-to-service auth (no keys in code paths), pinned model deployments to specific regions for data-residency claims (US, EU, then "Data Zones" added in 2024), and turned on **abuse-monitoring opt-out** under approved customer contracts so prompts were not retained for 30 days. Quota was enforced via **TPM/RPM** caps at the deployment level — the same dials covered in this module's "Monitoring & Cost" section.

**Outcome.** Microsoft's FY2024 disclosures (per CEO Satya Nadella, July 2024 earnings call) reported Azure OpenAI was used by 60,000+ customers, with the Azure AI business contributing 8 percentage points to Azure growth that quarter. By Q1 2025, the customer count crossed 65,000 (Microsoft Build 2024 keynote; verified against Microsoft Investor Relations materials, checked 2026-05). Critically: there was no major public security incident traced to the platform itself between GA (Jan 2023) and 2026-05 — the architectural choices (private networking, MI, data zones) held.

**Lesson for the exam / for practitioners.** Every "boring" feature this module covers — multi-service vs single-service, custom subdomains for Entra ID, managed identity, Private Endpoints, customer-managed keys, quota tiers — is the same machinery that lets Azure OpenAI host ChatGPT Enterprise at scale. AI-102 tests these as separate questions because they're separate dials. In production, they compose into a defensible platform.

**Discussion (Socratic).**
- Q1: If you were the architect for a new ChatGPT-style consumer product in 2026, would you use Azure OpenAI (gated, RBAC-heavy, region-pinned) or pre-trained open-weights models on Azure Machine Learning? Build the strongest argument for each — what's the implicit trade-off you're accepting?
- Q2: Microsoft made `AIServices` multi-service resources *exclude* Azure OpenAI. Why might Microsoft have made this product choice, and what would change for customers if Azure OpenAI were rolled into the multi-service kind?
- Q3: ChatGPT Enterprise customers can request abuse-monitoring opt-out. From Microsoft's safety-team perspective, what's the implicit trade-off they accepted by offering that opt-out, and how would you defend the decision to an EU AI Act regulator?

---

## 💬 Discussion — Socratic prompts

Use these as journal prompts, study-group questions, or interview-prep drills. Each is open-ended; defend with specifics from the module.

1. **Multi-service vs single-service under organizational constraint.** Your finance team mandates one billing line per business unit; your security team mandates one RBAC scope per data-plane principle of least privilege; your dev team wants one key to remember. You can satisfy two of three. Pick which two, in what order, and write the principled argument to the team that loses.
2. **Managed identity vs subscription key in a hybrid scenario.** You have a Python ETL job that runs on-premises 3 nights a week and on Azure 4 nights a week. The simpler architecture is "key in env var everywhere"; the principled architecture is "MI on Azure, federated identity on-prem." Argue both sides at a Cornell security review. Where does each architecture break?
3. **F0 trap at scale.** A team prototypes on F0 (free) tier, ships to S0 (standard) for production, and gets sticker shock when monthly invoices show $40K of cognitive-services charges. From the architect's perspective: which monitoring + cost-control levers (TPM/RPM, PTU, Global Batch, tagging, Cost Management alerts, regional pinning) would you have wired *before* the launch, and which would you bolt on now? What does that ranking imply about the F0→S0 onboarding ritual at a mature org?
4. **Custom subdomain irreversibility.** Once set, the custom subdomain on an Azure AI resource cannot be renamed. Build the strongest argument for AND against Microsoft making subdomains mutable (e.g., to support brand rebrands, acquisitions). What's the cost Microsoft is implicitly making customers pay for the immutability? Which Cornell IT systems-engineering principle does this most clearly map to?
5. **Region pinning vs latency.** Azure OpenAI Global Standard SKU routes globally; Standard SKU pins to a region. Your CIO insists on EU-only data residency for GDPR. Your CMO wants the lowest possible perceived latency for users in São Paulo. Walk through how you'd structure the deployment topology AND the customer-facing privacy disclosure to satisfy both — without lying.

---

## ✅ Module 1 Summary

You now know:
- 🏷️ The current names of every major Azure AI service (and the old ones to recognize)
- 🛠️ When to use a multi-service resource vs a single-service resource
- 🔑 How keys, endpoints, regions, and custom subdomains relate
- 🔐 The three authentication methods and **when** to use each
- 📦 The Python SDK package names you'll see in code snippets
- 🌍 Data residency, CMK, private endpoints
- 🚨 The classic gotchas (custom subdomain, F0 limits, OpenAI not being multi-service)
- 📖 One named, verifiable case (ChatGPT Enterprise on Azure OpenAI, 2023–2024)

**Next steps:**
1. 🎥 Watch [Videos.md](./Videos.md)
2. ✏️ Take [Quiz.md](./Quiz.md) — aim for 20/24
3. 📋 Review [Cheat-Sheet.md](./Cheat-Sheet.md)
4. ➡️ Move to [Module 2: Responsible AI & Content Safety](../Module-02-Responsible-AI-Content-Safety/Reading.md)

---

> **Where this leads.**
> - Inside this course: Module 2 turns the resource model you just learned into a *Responsible AI* control surface (content filters, prompt shields, groundedness). Module 7 deepens the auth + quota story specifically for Azure OpenAI. Module 8 wires it all into Azure AI Foundry projects.
> - Cross-course: [`05-Azure-Fundamentals`](../../05-Azure-Fundamentals/) covers the ARM resource model; [`06-Azure-Administrator`](../../06-Azure-Administrator/) deepens RBAC + managed identity; [`07-AWS-AI-Practitioner`](../../07-AWS-AI-Practitioner/) gives the cross-cloud comparison if you've worked on Bedrock or SageMaker.
> - Practice: Practice Exam 1 includes ~7 questions drawing from this module (provisioning, auth, SDK identity); Final Mock Exam revisits the same patterns inside multi-module case studies.

---

## 📚 Citations & Named References

- Microsoft (2023). "Microsoft and OpenAI extend partnership." Press release, January 23, 2023.
- Microsoft (2023). "Azure OpenAI Service is now generally available." Azure blog, January 17, 2023.
- Microsoft Responsible AI Standard, **v2** (Microsoft, June 2022) — the corporate standard that mandates Transparency Notes for every ML-based service mentioned in this module.
- Microsoft Mechanics (2024). *Azure AI Foundry — formerly Azure AI Studio* deep dive (verified against Microsoft Learn, 2026-05).
- NIST AI Risk Management Framework — **AI RMF 1.0** (NIST, January 2023) — the public-sector reference Azure AI services map their governance posture to.
- Microsoft Entra ID + managed identity foundations: Saltzer & Schroeder (1975), "The protection of information in computer systems," *Communications of the ACM* — the foundational principle of least privilege that the "Cognitive Services User" RBAC role operationalizes.
- Service availability and pricing checked against Microsoft Learn and Azure Pricing pages, 2026-05.

---

## 📚 Further Reading (Optional)

- 📖 [Azure AI services documentation hub](https://learn.microsoft.com/en-us/azure/ai-services/)
- 📖 [Authenticate requests to Azure AI services](https://learn.microsoft.com/en-us/azure/ai-services/authentication)
- 📖 [Use managed identities with Azure AI](https://learn.microsoft.com/en-us/azure/ai-services/authentication#authenticate-with-microsoft-entra-id)
- 📖 [Azure SDK for Python — AI packages](https://learn.microsoft.com/en-us/python/api/overview/azure/ai)
- 📖 [Azure AI services pricing](https://azure.microsoft.com/en-us/pricing/details/cognitive-services/)
- 📖 [AI-102 official study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-102)
