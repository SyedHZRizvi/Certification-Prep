# 📋 Module 7 Cheat Sheet: Azure OpenAI Service

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 🏗️ Resource → Deployment → Model

```
Azure OpenAI Resource  (kind=OpenAI; gated; separate from multi-service)
   └── Deployment "gpt-4o-chat"  → model: gpt-4o, version 2024-08-06
                                   quota: TPM/RPM,  filter: custom-config
   └── Deployment "embeddings"   → model: text-embedding-3-small (1536)
   └── Deployment "dalle-prod"   → model: dall-e-3
```

🚨 You call by **deployment name**, not model name.

---

## 💰 Deployment SKUs

| SKU (Stock Keeping Unit) | When |
|---|---|
| **Standard** | PAYG per token |
| **Global Standard** | PAYG, no regional pin |
| **PTU** (Provisioned Throughput Unit) | Reserved capacity, predictable latency |
| **Global Batch** | ~50% cheaper async, 24-hr SLA (Service Level Agreement) |

---

## 🤖 Model Quick Map

| Model | Use |
|---|---|
| gpt-4o / gpt-4o-mini | Chat, reasoning, vision |
| o1 / o3-mini | Step-by-step reasoning |
| text-embedding-3-small (1536) | Embeddings (default) |
| text-embedding-3-large (3072) | Higher-quality embeddings |
| text-embedding-ada-002 (1536) | Legacy embeddings |
| dall-e-3 | Text→image |
| whisper | Speech→text |
| tts / tts-hd | Text→speech |

---

## 🐍 Chat Call Skeleton

```python
from openai import AzureOpenAI
client = AzureOpenAI(azure_endpoint=ep, api_key=k, api_version="2024-08-01-preview")
resp = client.chat.completions.create(
    model="gpt-4o-chat",   # ← DEPLOYMENT name
    messages=[
        {"role":"system","content":"You are..."},
        {"role":"user","content":"..."}
    ],
    temperature=0.2, max_tokens=500
)
```

| Role | Purpose |
|---|---|
| system | Persona + rules |
| user | Human input |
| assistant | Model reply / few-shot |
| tool | Function-call result |

| Param | Note |
|---|---|
| temperature | 0.0 for grounded; 0.7+ for creative |
| top_p | Alternative to temperature |
| max_tokens | Output cap |
| presence_penalty / frequency_penalty | Discourage repetition |
| response_format | JSON / JSON Schema |
| seed | (Some models) reproducibility |

---

## 📚 On Your Data (Native RAG (Retrieval-Augmented Generation))

```python
extra_body={
  "data_sources":[{
    "type":"azure_search",
    "parameters":{
      "endpoint":"https://...","index_name":"...",
      "authentication":{"type":"system_assigned_managed_identity"},
      "query_type":"vector_semantic_hybrid",
      "embedding_dependency":{"type":"deployment_name","deployment_name":"embeddings"},
      "in_scope": true,
      "top_n_documents": 5
    }
  }]
}
```

`in_scope: true` ⇒ refuse to answer outside retrieved docs. Citations returned in `message.context.citations`.

---

## 🛡️ Content Filters

- Default: ON, **Medium** threshold for Hate/Sexual/Violence/Self-Harm, both prompt + completion
- Customize via Azure AI Foundry → custom filter configuration → apply to deployment
- Add Prompt Shields, Protected Material, Groundedness on supported models
- Can't fully disable without approved exemption

---

## 🎓 RAG vs Fine-Tuning

| | RAG (On Your Data) | Fine-tuning |
|---|---|---|
| Adds | Knowledge | Style / tone / output format |
| Update freq | Real-time (re-index) | Static (re-train to change) |
| Cost | Low | Higher (training + inference) |
| Best when | Knowledge changes / verifiable | Domain output format consistency |

Fine-tune file = JSONL, one `{"messages":[...]}` per line.

---

## 📊 Quotas

| | |
|---|---|
| TPM | Tokens per minute per deployment |
| RPM | Requests per minute per deployment |
| 429 mitigation | Backoff → quota increase → PTU |

---

## 🏆 Exam Power Phrases

**Usually right**:

- ✅ "Deployment name, not model name"
- ✅ "Use On Your Data with Azure AI Search for citations"
- ✅ "Managed identity + Cognitive Services User"
- ✅ "RAG for knowledge, fine-tune for style"
- ✅ "PTU for reserved capacity"
- ✅ "Global Batch for cheapest async"

**Usually wrong**:

- ❌ "Use the multi-service resource for Azure OpenAI"
- ❌ "Fine-tune to add facts"
- ❌ "Disable content filters by API (Application Programming Interface) parameter"
- ❌ "Higher temperature = more accurate"

---

## ⚠️ Anti-Patterns

- ❌ Keys hardcoded in source
- ❌ High temperature for grounded Q&A
- ❌ Fine-tuning for changing facts
- ❌ Forgetting `in_scope: true` and getting off-topic answers
- ❌ Public endpoint when corporate VNet requires private

---

## ✏️ Quick Self-Check

1. Resource vs deployment vs model? ___
2. SKU for reserved capacity? ___
3. RAG or fine-tune for company knowledge updates? ___
4. Default filter threshold? ___
5. Whisper vs TTS vs DALL-E, what does each do? ___

If you can answer all 5 in 60 seconds, you own Module 7. ✅

---

## 🧮 Prompt Pattern → Parameter Recipe

| Pattern | Temperature | top_p | Other |
|---|---|---|---|
| Grounded RAG | 0.0–0.3 | 1.0 | `response_format` if schema-bound |
| Creative copy | 0.7–1.2 | 1.0 | `frequency_penalty: 0.5` |
| Code generation | 0.0–0.4 | 1.0 | Stop sequences for fence closure |
| Few-shot tuning | 0.0–0.3 | 1.0 | Examples in `assistant` messages |
| Reasoning (o1) | n/a | n/a | Model controls its own internal cot |

## 🛡️ Per-Deployment Filter Recipe (Foundry)

```
Per deployment, you can set:
  - Per-category threshold (Hate / Sexual / Violence / Self-Harm)
  - Per-direction (prompt | completion) toggle
  - Prompt Shields (User Attack | Document Attack)
  - Protected Material, Text | Code
  - Groundedness Detection (where supported)
Cannot fully disable filtering without approved exemption.
```

## 📚 Regulatory Pattern (2024–2026)

| Constraint | Lever |
|---|---|
| GDPR (General Data Protection Regulation) data residency (EU) | EU Data Zone / region-pinned deployment |
| HIPAA-defensible | Abuse-monitoring opt-out (approved) + Private Endpoints + CMK |
| EU AI Act foundation model | Disclose synthetic content; document fine-tuning provenance |
| Brand safety (consumer) | Tightened custom content filter + Protected Material |
| Audit | Diagnostic settings → Log Analytics + per-call MI identity |

## 📖 Citations

| Concept | Source |
|---|---|
| Transformer | Vaswani et al. (2017), NeurIPS |
| Few-shot / in-context learning | Brown et al. (2020), NeurIPS (GPT (Generative Pre-trained Transformer)-3) |
| Constitutional AI alignment (background) | Bai et al. (2022), Anthropic |
| Azure OpenAI GA | Microsoft blog (January 2023) |
| Microsoft RAI Standard v2 | Microsoft (June 2022) |
| EU AI Act | Reg (EU) 2024/1689 (June 2024) |
| Coca-Cola "Create Real Magic" | Coca-Cola Co. press release (March 2023) |

---

➡️ [Module 8: Build GenAI Apps](../Module-08-Build-GenAI-Apps/Reading.md)
