# Module 1: Azure AI Services Overview 🎯

> **Why this module matters:** Every other module in this course assumes you can spin up an Azure AI resource, find its key + endpoint, and call it from code. Nail this and the rest is downhill.

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

## ✅ Module 1 Summary

You now know:
- 🏷️ The current names of every major Azure AI service (and the old ones to recognize)
- 🛠️ When to use a multi-service resource vs a single-service resource
- 🔑 How keys, endpoints, regions, and custom subdomains relate
- 🔐 The three authentication methods and **when** to use each
- 📦 The Python SDK package names you'll see in code snippets
- 🌍 Data residency, CMK, private endpoints
- 🚨 The classic gotchas (custom subdomain, F0 limits, OpenAI not being multi-service)

**Next steps:**
1. 🎥 Watch [Videos.md](./Videos.md)
2. ✏️ Take [Quiz.md](./Quiz.md) — aim for 20/24
3. 📋 Review [Cheat-Sheet.md](./Cheat-Sheet.md)
4. ➡️ Move to [Module 2: Responsible AI & Content Safety](../Module-02-Responsible-AI-Content-Safety/Reading.md)

---

## 📚 Further Reading (Optional)

- 📖 [Azure AI services documentation hub](https://learn.microsoft.com/en-us/azure/ai-services/)
- 📖 [Authenticate requests to Azure AI services](https://learn.microsoft.com/en-us/azure/ai-services/authentication)
- 📖 [Use managed identities with Azure AI](https://learn.microsoft.com/en-us/azure/ai-services/authentication#authenticate-with-microsoft-entra-id)
- 📖 [Azure SDK for Python — AI packages](https://learn.microsoft.com/en-us/python/api/overview/azure/ai)
- 📖 [Azure AI services pricing](https://azure.microsoft.com/en-us/pricing/details/cognitive-services/)
- 📖 [AI-102 official study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-102)
