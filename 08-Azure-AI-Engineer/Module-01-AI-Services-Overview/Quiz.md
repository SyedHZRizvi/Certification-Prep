# ✏️ Module 1 Quiz: Azure AI Services Overview

> **Instructions:** Answer all 26 questions WITHOUT looking at the reading.
> Then check your answers below. Aim for 22/26 minimum before moving on.

---

## Questions

### Q1. Which of the following is the **current** name for the umbrella of Microsoft pretrained AI APIs?
A. Cognitive Services
B. Azure AI services
C. Azure ML services
D. Azure Foundation Services

---

### Q2. Form Recognizer has been renamed to:
A. Azure AI Forms
B. Document Intelligence
C. Azure AI Parser
D. Smart Documents

---

### Q3. Your team wants ONE key, ONE endpoint, and access to multiple AI capabilities (Vision, Language, Translator) in a single resource. Which resource kind should you provision?
A. CognitiveServices (multi-service / AIServices)
B. Three separate single-service resources
C. Azure OpenAI
D. Azure AI Foundry hub

---

### Q4. Which authentication method is the **recommended** approach for a Python app running in Azure App Service that calls Azure AI Language?
A. Subscription key stored in app settings
B. Service principal with client secret
C. System-assigned managed identity + Cognitive Services User role
D. Anonymous access

---

### Q5. To use Microsoft Entra ID authentication against an Azure AI services resource, the resource must have:
A. The Free (F0) pricing tier
B. A custom subdomain endpoint
C. A user-assigned managed identity
D. A private endpoint

---

### Q6. What HTTP header carries the subscription key when calling an Azure AI service over REST?
A. `Authorization: Bearer <key>`
B. `X-API-Key`
C. `Ocp-Apim-Subscription-Key`
D. `Azure-Subscription-Key`

---

### Q7. Which line completes this Python snippet to authenticate to Azure AI Language using a key?
```python
from azure.ai.textanalytics import TextAnalyticsClient
from azure.core.credentials import AzureKeyCredential

client = TextAnalyticsClient(
    endpoint="https://maya.cognitiveservices.azure.com/",
    credential=______
)
```
A. `AzureKeyCredential(key)`
B. `DefaultAzureCredential(key)`
C. `key`
D. `SubscriptionKey(key)`

---

### Q8. Azure OpenAI is included in the multi-service Azure AI services resource. (True / False)
A. True — it's part of `AIServices` kind
B. True — but only in selected regions
C. False — Azure OpenAI is always a separate resource kind
D. False — only the Embeddings API is included

---

### Q9. Which RBAC role lets an identity *invoke* an Azure AI services data plane endpoint (without managing keys)?
A. Owner
B. Reader
C. Cognitive Services User
D. Cognitive Services Contributor

---

### Q10. Which of the following is NOT a current Azure AI service?
A. Azure AI Vision
B. Azure AI Language
C. Azure Cognitive Personalizer
D. Azure AI Content Safety

---

### Q11. The recommended key rotation pattern is:
A. Regenerate key1, switch app, regenerate key2
B. Switch app to key2, regenerate key1, switch back, regenerate key2
C. Regenerate both keys simultaneously
D. Never rotate keys

---

### Q12. A custom subdomain on an Azure AI services resource:
A. Can be renamed at any time
B. Is required for Entra ID authentication
C. Is set automatically by the F0 tier
D. Only applies to Azure OpenAI

---

### Q13. Which Python package contains the **current** Document Intelligence client?
A. `azure-ai-formrecognizer`
B. `azure-ai-documentintelligence`
C. `azure-cognitiveservices-forms`
D. `azure-ai-parsing`

---

### Q14. A developer creates an Azure AI Vision resource on the Free (F0) tier. They try to create a second F0 resource in the same subscription and get an error. Why?
A. F0 requires a credit card
B. Only one F0 resource per service kind is allowed per subscription
C. F0 is only available in West Europe
D. F0 was deprecated

---

### Q15. What does `DefaultAzureCredential` do?
A. Always uses the subscription key
B. Walks a chain of credential sources (env vars → managed identity → CLI → VS Code)
C. Generates a new service principal at runtime
D. Requires a `credentials.json` file

---

### Q16. The `Cognitive Services Contributor` role:
A. Lets the identity invoke the data plane only
B. Lets the identity manage the resource (create/delete/list keys) but not necessarily call the data plane
C. Is equivalent to Owner
D. Is required to read keys via the portal

---

### Q17. Which statement about Azure AI service keys is TRUE?
A. Keys expire after 90 days
B. There are two keys (key1 and key2) so you can rotate without downtime
C. Each resource has exactly one key
D. Keys are JWT tokens

---

### Q18. You need to call Azure AI services from a script on your laptop during local development. The simplest auth method is:
A. Managed identity
B. Subscription key with `AzureKeyCredential`
C. Federated credential
D. Workload identity

---

### Q19. Which CLI command creates a multi-service Azure AI services resource?
A. `az ai create --kind AIServices`
B. `az cognitiveservices account create --kind AIServices`
C. `az resource create --kind AIServices`
D. `az openai create --multi`

---

### Q20. The `Face` service identification API is:
A. Generally available to everyone
B. Behind a Limited Access gate — requires application/approval
C. Free for all customers
D. Part of Custom Vision

---

### Q21. Your AI workload requires that traffic between your app and Azure AI Language stay off the public internet. Which feature should you configure?
A. Customer-managed keys (CMK)
B. Private Endpoints + VNet integration
C. Service tags only
D. Public IP allowlist

---

### Q22. Azure OpenAI returns HTTP 429 ("Too many requests"). What is the FIRST thing to investigate?
A. The model has been retired
B. The Tokens-Per-Minute (TPM) quota for that deployment
C. The subscription key has expired
D. The resource has been deleted

---

### Q23. Which option pair correctly identifies the SDK package + client class for **Azure AI Vision Image Analysis 4.0**?
A. `azure-ai-vision` + `VisionClient`
B. `azure-ai-vision-imageanalysis` + `ImageAnalysisClient`
C. `azure-cognitiveservices-vision-computervision` + `ComputerVisionClient`
D. `azure-ai-cv` + `CV4Client`

---

### Q24. For at-rest encryption of training data and custom models with your own keys, you would configure:
A. TLS 1.3
B. Customer-managed keys (CMK) backed by Azure Key Vault
C. Private endpoints
D. Conditional Access

---

### Q25. Conversational Language Understanding (CLU) replaces which retired service?
A. QnA Maker
B. LUIS
C. Speech SDK
D. Bot Framework Composer

---

### Q26. A team builds a hackathon prototype using Azure AI services. They want to keep cost at zero and limit calls per second. Best resource configuration:
A. Multi-service AIServices on the S0 tier
B. Single-service resource on the F0 (free) tier
C. Azure OpenAI on the Pay-As-You-Go tier
D. Premium tier with reserved capacity

---

## 🎯 Answers + Explanations

### Q1: **B. Azure AI services**
Microsoft rebranded "Cognitive Services" to "Azure AI services" in 2023. The exam uses the new name.

### Q2: **B. Document Intelligence**
Azure AI Document Intelligence is the current name. The legacy SDK package `azure-ai-formrecognizer` still works, but `azure-ai-documentintelligence` is the new one.

### Q3: **A. CognitiveServices (multi-service / AIServices)**
One resource kind (`AIServices`) gives you one key + one endpoint for Vision, Language, Translator, Speech, Document Intelligence, and Content Safety. **Azure OpenAI is excluded.**

### Q4: **C. System-assigned managed identity + Cognitive Services User role**
For code running inside Azure, managed identity eliminates the need to store secrets. The "Cognitive Services User" role grants data-plane invocation rights.

### Q5: **B. A custom subdomain endpoint**
Entra ID token auth requires the subdomain endpoint (e.g. `maya.cognitiveservices.azure.com`), not the legacy regional endpoint.

### Q6: **C. `Ocp-Apim-Subscription-Key`**
Legacy naming from the Azure API Management gateway, but still the correct header.

### Q7: **A. `AzureKeyCredential(key)`**
The key-credential wrapper from `azure.core.credentials`.

### Q8: **C. False — Azure OpenAI is always a separate resource kind**
The `AIServices` multi-service resource excludes Azure OpenAI. Provision `Microsoft.CognitiveServices/accounts` with `kind=OpenAI` separately.

### Q9: **C. Cognitive Services User**
Grants data-plane invocation (and reading keys). Contributor manages the resource. Reader sees configuration only.

### Q10: **C. Azure Cognitive Personalizer**
Personalizer has been retired. The others are all current.

### Q11: **B. Switch app to key2, regenerate key1, switch back, regenerate key2**
Two-key rotation prevents downtime. You always have one valid key in use while the other is being rotated.

### Q12: **B. Is required for Entra ID authentication**
And it **cannot** be changed once set — pick carefully.

### Q13: **B. `azure-ai-documentintelligence`**
The current package. The legacy `azure-ai-formrecognizer` is still supported but considered older.

### Q14: **B. Only one F0 resource per service kind is allowed per subscription**
The free tier is one per kind, per subscription — a common gotcha.

### Q15: **B. Walks a chain of credential sources**
Order: environment variables → managed identity → Azure CLI → VS Code → interactive browser. The first that yields a token wins.

### Q16: **B. Lets the identity manage the resource but not necessarily call the data plane**
Contributor = control plane (create/delete/list keys). For data-plane API calls with Entra ID, you typically need Cognitive Services User as well.

### Q17: **B. Two keys so you can rotate without downtime**
key1 + key2. Neither expires, but rotation is a best practice.

### Q18: **B. Subscription key with `AzureKeyCredential`**
Perfectly fine for local dev. Don't commit the key to source control.

### Q19: **B. `az cognitiveservices account create --kind AIServices`**
The Azure CLI command for the multi-service resource. Same command with `--kind ComputerVision` makes a single-service Vision resource.

### Q20: **B. Behind a Limited Access gate**
Face identification, verification of unknown subjects, and emotion inference all require an approved application. Detection (without identification) is generally available.

### Q21: **B. Private Endpoints + VNet integration**
This places a private IP for the AI resource inside your VNet and disables public network access.

### Q22: **B. The Tokens-Per-Minute (TPM) quota**
429s on Azure OpenAI almost always mean you've blown through the TPM/RPM quota of your deployment. Either request a quota increase or add client-side backoff.

### Q23: **B. `azure-ai-vision-imageanalysis` + `ImageAnalysisClient`**
The 4.0 Image Analysis API uses this package. The older `ComputerVisionClient` from `azure-cognitiveservices-vision-computervision` calls the legacy 3.x API.

### Q24: **B. Customer-managed keys (CMK) backed by Azure Key Vault**
CMK lets you control the encryption key for at-rest data.

### Q25: **B. LUIS**
Language Understanding (LUIS) is retired. CLU in Azure AI Language is its successor. (QnA Maker is replaced by Question Answering — different question.)

### Q26: **B. Single-service resource on the F0 (free) tier**
F0 is free with strict throttling — ideal for a hackathon. Multi-service AIServices doesn't have an F0 tier for every sub-service.

---

## 📊 Score Yourself

- 25–26/26 → 🏆 You own this module. Move on.
- 22–24/26 → ✅ Strong. Note the misses and continue.
- 18–21/26 → ⚠️ Re-read the auth + resource-kind sections.
- <18/26 → 🔁 Re-read the entire Reading.md and re-quiz tomorrow.

---

## 🃏 Add To Your Flashcards

- Multi-service vs single-service trade-offs
- Three auth methods (key, Entra ID, managed identity) and when to use each
- The renaming table (Cognitive Services → Azure AI services, Form Recognizer → Document Intelligence, etc.)
- Required header for key auth (`Ocp-Apim-Subscription-Key`)
- Custom subdomain requirement for Entra ID
- F0 limit: one per kind per subscription
- DefaultAzureCredential chain order
- Cognitive Services User vs Contributor roles

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md) for one-page review, then [Module 2: Responsible AI](../Module-02-Responsible-AI-Content-Safety/Reading.md)
