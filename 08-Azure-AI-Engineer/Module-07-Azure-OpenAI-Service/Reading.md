# Module 7: Azure OpenAI Service 🧠

> **Why this module matters:** Generative AI is 10–15% of AI-102 on paper, but it's the area that grows every exam refresh. Master deployments, prompts, content filters, fine-tuning, and "On Your Data" for RAG.

---

## 🍕 A Story: Maya Plugs In GPT-4o

Maya's app needs a help system that answers in natural language. She decides to use Azure OpenAI. Five things she has to get right:
1. **Provision** an Azure OpenAI resource and **deploy** a model (different from regular Azure AI services)
2. **Pick the right model** — GPT-4o for chat, ada/text-embedding-3-* for search, DALL-E for images, Whisper for transcription
3. **Author prompts** with a system message + few-shot examples
4. **Apply content filters** at the right level
5. **Wire up "On Your Data"** to ground answers in her PDF library

By the end of this module, you should be able to do all five with eyes closed.

---

## 🚪 Getting Access to Azure OpenAI

Azure OpenAI is **gated** — not automatically available in every subscription.

1. Submit the access request form at **<https://aka.ms/oai/access>**
2. Approval typically takes 1–2 business days
3. Once approved, you can create resources of kind `OpenAI`

🚨 **Trap on the exam:** Azure OpenAI is **NOT** part of the multi-service `AIServices` resource. It's always its own `Microsoft.CognitiveServices/accounts` with `kind=OpenAI`.

Some features (e.g. abuse-monitoring opt-out, custom content filtering at strict levels) require additional approval forms.

---

## 🏗️ Resource → Deployment → Model

A common confusion: "Azure OpenAI resource" vs "deployment" vs "model".

```
Azure OpenAI Resource (the gateway, keys, endpoint, region, quota)
  └── Deployments (named instance of a model)
        ├── gpt-4o-chat        → base model: gpt-4o   (version 2024-08-06)
        ├── embeddings         → base model: text-embedding-3-small
        └── dalle-prod         → base model: dall-e-3
```

When you call the API, you target a **deployment name** (not the model name). The deployment maps to a specific model + version, with its own **TPM/RPM quota** and **content filter** configuration.

```bash
az cognitiveservices account deployment create \
  --resource-group rg-maya \
  --name maya-openai \
  --deployment-name gpt-4o-chat \
  --model-name gpt-4o \
  --model-version "2024-08-06" \
  --model-format OpenAI \
  --sku-capacity 30 \
  --sku-name "Standard"
```

### Deployment SKUs / pricing models

| SKU | Description |
|---|---|
| **Standard** | Pay-as-you-go per token |
| **Global Standard** | Cheaper PAYG, routes globally (no regional pinning) |
| **Provisioned Throughput Units (PTU)** | Reserve dedicated capacity; predictable latency + cost |
| **Global Batch** | Async batched completions, ~50% cheaper, 24-hr SLA |

🎯 **Exam pattern:** "Need predictable latency + reserved capacity" → **PTUs**. "Need cheapest async processing of millions of items" → **Global Batch**. "Standard chat app" → **Standard / Global Standard**.

---

## 🤖 The Model Catalog (as of 2024–2025)

| Family | Models | Use for |
|---|---|---|
| **GPT-4o** | gpt-4o, gpt-4o-mini | General chat + reasoning + vision (multimodal) |
| **GPT-4 Turbo** | gpt-4 / gpt-4-turbo | Older but capable chat |
| **GPT-3.5 Turbo** | gpt-35-turbo | Cheap chat |
| **o1 / o3-mini** | reasoning models | Step-by-step reasoning, math |
| **Embeddings** | text-embedding-3-small (1536), text-embedding-3-large (3072), text-embedding-ada-002 (1536) | Vector search, semantic similarity |
| **DALL-E** | dall-e-3 | Text-to-image |
| **Whisper** | whisper | Speech-to-text |
| **Text-to-Speech** | tts, tts-hd | Synthesized voice |
| **Fine-tunable** | gpt-4o-mini, gpt-35-turbo, others (region-specific) | Custom fine-tuning |

🚨 **Model + region availability changes monthly.** The official model availability page is what the exam will defer to.

---

## 📡 Calling Azure OpenAI from Python

The OpenAI SDK 1.x speaks both OpenAI.com and Azure OpenAI — for Azure, use `AzureOpenAI`.

### Chat completion

```python
from openai import AzureOpenAI

client = AzureOpenAI(
    azure_endpoint="https://maya-openai.openai.azure.com/",
    api_key="<KEY>",
    api_version="2024-08-01-preview"
)

resp = client.chat.completions.create(
    model="gpt-4o-chat",   # DEPLOYMENT name, not model name!
    messages=[
        {"role": "system", "content": "You are a helpful Azure AI tutor."},
        {"role": "user", "content": "Explain RAG in one paragraph."}
    ],
    temperature=0.3,
    max_tokens=300
)
print(resp.choices[0].message.content)
```

### Embeddings

```python
resp = client.embeddings.create(
    model="embeddings",   # deployment name
    input=["lightweight laptop for travel"]
)
vector = resp.data[0].embedding   # list of floats
```

### Image generation

```python
from openai import AzureOpenAI
img = client.images.generate(model="dalle-prod", prompt="A friendly pizza chef robot", size="1024x1024", n=1)
print(img.data[0].url)
```

### Auth options
- **Key** (`api_key=...`)
- **Entra ID** via `azure_ad_token_provider` (using `DefaultAzureCredential` and an Entra scope) — production preferred

---

## 🗣️ Prompt Engineering (Azure-Style)

The chat schema has three message roles you should know:

| Role | Purpose |
|---|---|
| `system` | Persona, rules, constraints — set ONCE at top |
| `user` | The human's input |
| `assistant` | The model's reply (also used for few-shot examples) |
| `tool` | (for tool/function calling) function result |

### Patterns to recognize

| Pattern | Description |
|---|---|
| **Zero-shot** | Just a user prompt, no examples |
| **Few-shot** | Provide N example pairs before the real user input |
| **Chain-of-Thought** | Ask the model to think step-by-step ("Let's think this through…") |
| **Persona** | Set role in system message ("You are a witty travel guide…") |
| **Grounding** | Provide source text in the prompt, instruct to answer ONLY from it |
| **Constraint** | "Answer in JSON conforming to schema X" |
| **Self-critique** | Ask the model to evaluate / improve its own answer |

### Key parameters

| Parameter | Effect |
|---|---|
| `temperature` (0–2) | Higher = more random. 0 = deterministic-ish |
| `top_p` (0–1) | Nucleus sampling alternative to temperature |
| `max_tokens` | Cap output length |
| `stop` | Sequences that end the completion |
| `presence_penalty` / `frequency_penalty` | Discourage repetition or encourage novelty |
| `seed` | (some models) reproducibility |
| `response_format` | Force JSON, JSON Schema |

🎯 **Trap:** Setting temperature high (1.5+) for factual Q&A increases hallucinations. Set **low** (0.0–0.3) for retrieval-grounded answers.

---

## 🔧 Tool / Function Calling

GPT-4o and similar models can decide to **call functions** you describe. You pass a list of `tools`; the model returns a tool call request; you execute it and feed the result back as a `tool` role message.

```python
tools = [{
    "type": "function",
    "function": {
        "name": "get_weather",
        "description": "Get current weather",
        "parameters": {
            "type": "object",
            "properties": {"city": {"type": "string"}},
            "required": ["city"]
        }
    }
}]

resp = client.chat.completions.create(model="gpt-4o-chat", messages=[...], tools=tools, tool_choice="auto")
# resp.choices[0].message.tool_calls → list of {"name", "arguments"}
```

This is the foundation of **agents** (Module 8).

---

## 🛡️ Content Filtering In Azure OpenAI

Built-in filters apply to every deployment by default at **Medium** thresholds for Hate / Sexual / Violence / Self-Harm in both **prompt** and **completion**.

You can:
- Create **custom content filter configurations** in Azure AI Foundry
- Adjust per-category, per-direction thresholds
- Enable **Prompt Shields** (jailbreak + indirect attack detection)
- Enable **Protected Material** detection (text + code)
- Enable **Groundedness** detection (on supported models)
- Apply different configurations to different deployments

You CANNOT fully disable filters without an approved exemption form.

---

## 📚 "On Your Data" — Native RAG

Azure OpenAI offers a feature called **"On Your Data"** that wires your model to a data source (Azure AI Search index, Blob storage, URLs, etc.) and handles retrieval + grounding automatically.

```python
resp = client.chat.completions.create(
    model="gpt-4o-chat",
    messages=[{"role":"user","content":"Summarize last quarter's revenue from our reports."}],
    extra_body={
        "data_sources": [{
            "type": "azure_search",
            "parameters": {
                "endpoint": "https://maya-search.search.windows.net",
                "index_name": "reports",
                "authentication": {"type": "system_assigned_managed_identity"},
                "query_type": "vector_semantic_hybrid",
                "embedding_dependency": {"type":"deployment_name","deployment_name":"embeddings"},
                "semantic_configuration": "default",
                "in_scope": true,
                "top_n_documents": 5
            }
        }]
    }
)
```

When `in_scope: true`, the model will refuse to answer from outside the retrieved documents. The response includes **citations** in `message.context.citations`.

🎯 **Exam pattern:** *"Build a chatbot that answers from internal PDFs with citations"* → Azure OpenAI **On Your Data** + Azure AI Search (hybrid + semantic).

---

## 🎓 Fine-Tuning on Azure OpenAI

Fine-tuning customizes a base model with your own examples. Use it when:
- You need a specific output style/format
- You have lots of high-quality input → output pairs
- RAG isn't enough (e.g. you're teaching domain-specific tone)

### Workflow

```
1. Prepare JSONL data:
   {"messages": [{"role":"system","content":"..."},{"role":"user","content":"..."},{"role":"assistant","content":"..."}]}
2. Upload to Azure OpenAI Files
3. Create a fine-tuning job (choose base model)
4. Wait for training (hours)
5. Deploy the fine-tuned model as a new deployment
6. Call it by its new deployment name
```

Eligible base models: `gpt-4o-mini`, `gpt-35-turbo`, others (regional).

### When NOT to fine-tune
- Knowledge problem → **use RAG instead**
- Need to update info often → fine-tuning is static
- Tiny dataset (< 50 examples) → few-shot prompts will likely do better

---

## 📊 Token Economics & Quotas

| Concept | Meaning |
|---|---|
| **Token** | ~4 characters of English; the unit of billing + quota |
| **Context window** | Max tokens the model can hold per request (input + output) — GPT-4o = 128K |
| **TPM** (Tokens Per Minute) | Per-deployment quota |
| **RPM** (Requests Per Minute) | Per-deployment quota |
| **PTU** | Provisioned Throughput Unit — reserves capacity |

When a request exceeds quota you get **HTTP 429**. Mitigate with:
1. Client-side retries with exponential backoff
2. Request a quota increase via Azure portal
3. Move to PTU
4. Split prompts / use batch / use cheaper model

---

## 🖼️ Vision With Azure OpenAI

GPT-4o is multimodal. Pass an image URL or base64 in the `content` of a user message:

```python
resp = client.chat.completions.create(
    model="gpt-4o-chat",
    messages=[{
        "role": "user",
        "content": [
            {"type": "text", "text": "What's in this image?"},
            {"type": "image_url", "image_url": {"url": "https://example.com/cat.jpg"}}
        ]
    }]
)
```

This overlaps with Azure AI Vision but is more "describe what you see" / "reason about images" rather than structured tagging.

---

## 🔒 Security & Privacy

- **Customer data is NOT used to train Microsoft's foundation models.**
- Default **abuse-monitoring logging** retains prompts + completions for 30 days. Regulated customers can apply to disable.
- **Customer-managed keys (CMK)** for at-rest encryption available.
- **Private endpoints + disable public network access** for VNet isolation.
- **Managed identity** is the recommended auth (no key in code).
- Azure OpenAI has **data zones** (e.g. EU Data Zone) for stricter residency.

---

## ⚠️ Common Misconceptions

| Misconception | Reality |
|---|---|
| "Model name = deployment name" | Deployment name is what you choose. You call the deployment, which maps to a model+version |
| "Higher temperature is always better" | For RAG / grounded answers, keep it low (0.0–0.3) |
| "Fine-tune to add knowledge" | RAG is for knowledge; fine-tune for style/format |
| "Content filters can be turned off" | Only via approved exemption |
| "Azure OpenAI is the same as OpenAI.com" | Same models, but Azure adds RBAC, private networking, region pinning, content filters, BYO data |
| "DALL-E is in every region" | No — model availability varies; check the docs |

---

## 🚨 Exam Traps

1. **Deployment vs model name.** API calls use the deployment name string YOU chose.
2. **Multi-service resource excludes OpenAI** — always a separate resource.
3. **Embedding model dimensions** must match index field config.
4. **"On Your Data"** uses Azure AI Search (or Blob/etc.) with citations + `in_scope`.
5. **PTU** = reserved capacity. **Global Batch** = cheapest async at scale.
6. **Default filter threshold is Medium** — exam may ask the default.
7. **Whisper / DALL-E / TTS** are Azure OpenAI models too — exam will test that.

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|---|---|
| **Azure OpenAI** | Microsoft-hosted OpenAI models with Azure RBAC, networking, content filters |
| **Deployment** | Named instance of a model with its own quota + filters |
| **Standard / Global Standard / PTU / Global Batch** | Pricing/capacity SKUs |
| **Token** | ~4 chars; billing + quota unit |
| **Context window** | Max tokens per request |
| **System / User / Assistant / Tool** | Chat message roles |
| **Few-shot prompting** | Examples in the prompt |
| **Chain-of-Thought** | Encourage step-by-step reasoning |
| **Tool / function calling** | Model requests external function execution |
| **On Your Data** | Native RAG over Azure AI Search / Blob / URLs |
| **Citations + `in_scope`** | Return source citations; restrict answers to retrieved docs |
| **Fine-tuning** | Customize a base model with your JSONL examples |
| **Embedding dims** | ada-002=1536, 3-small=1536, 3-large=3072 |
| **TPM / RPM** | Per-deployment token / request quotas |
| **Content filter config** | Custom Foundry config applied to a deployment |
| **Whisper / DALL-E / TTS** | Other Azure OpenAI model families |

---

## ✅ Module 7 Summary

You now know:
- 🚪 Azure OpenAI access (separate resource, separate approval)
- 🏗️ Resource / deployment / model relationship
- 🤖 The model catalog (GPT-4o, embeddings, DALL-E, Whisper, TTS, reasoning models)
- 📡 SDK call shapes (chat, embeddings, image, vision)
- 🗣️ Prompt patterns + parameters (temperature, top_p, max_tokens)
- 🔧 Tool / function calling
- 🛡️ Content filtering layers
- 📚 "On Your Data" for native RAG with citations
- 🎓 When (and when not) to fine-tune
- 📊 Quotas, TPM/RPM, PTU vs Standard vs Batch

**Next steps:**
1. 🎥 Watch [Videos.md](./Videos.md)
2. ✏️ Take [Quiz.md](./Quiz.md)
3. 📋 Review [Cheat-Sheet.md](./Cheat-Sheet.md)
4. ➡️ Move to [Module 8: Build GenAI Apps](../Module-08-Build-GenAI-Apps/Reading.md)

---

## 📚 Further Reading (Optional)

- 📖 [Azure OpenAI docs](https://learn.microsoft.com/en-us/azure/ai-services/openai/)
- 📖 [Models + regions](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models)
- 📖 [On Your Data](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/use-your-data)
- 📖 [Content filtering](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/content-filter)
- 📖 [Fine-tuning](https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/fine-tuning)
- 📖 [Quotas & limits](https://learn.microsoft.com/en-us/azure/ai-services/openai/quotas-limits)
- 📖 [Azure OpenAI access request](https://aka.ms/oai/access)
