# ✏️ Module 7 Quiz: Azure OpenAI Service

> **Instructions:** Answer all 28 questions WITHOUT looking at the reading.
> Then check your answers below. Aim for 23/28 minimum.

---

## Questions

### Q1. Azure OpenAI is provisioned as which resource kind?
A. `AIServices` (multi-service)
B. `OpenAI` (separate resource)
C. `Microsoft.OpenAI` only
D. Combined with Cognitive Services automatically

---

### Q2. When you call the chat completions API, the `model` parameter should be:
A. The base model name (e.g. `gpt-4o`)
B. The deployment name you created
C. Always `chat`
D. A region code

---

### Q3. Which Python class is used for Azure OpenAI in the official OpenAI SDK?
A. `OpenAIClient`
B. `AzureOpenAI`
C. `AzureGPTClient`
D. `LanguageClient`

---

### Q4. A team wants reserved capacity with predictable latency. Which deployment SKU?
A. Standard
B. Global Standard
C. Provisioned Throughput Units (PTU)
D. Global Batch

---

### Q5. A team wants to process millions of completions overnight at lowest cost; latency doesn't matter. Best SKU?
A. Standard
B. PTU
C. Global Batch
D. Premium

---

### Q6. Which is the embedding model with 3072 dimensions?
A. `text-embedding-ada-002`
B. `text-embedding-3-small`
C. `text-embedding-3-large`
D. `whisper`

---

### Q7. Which line completes this chat call?
```python
from openai import AzureOpenAI
client = AzureOpenAI(azure_endpoint=ep, api_key=k, api_version="2024-08-01-preview")
resp = client.chat.completions.create(
    model="my-gpt4o-deployment",
    messages=______,
    temperature=0.2
)
```
A. `"explain rag"`
B. `[{"role":"system","content":"..."},{"role":"user","content":"..."}]`
C. `{"prompt":"..."}`
D. `("user", "explain rag")`

---

### Q8. Which message role sets the persona / rules for a chat conversation?
A. user
B. assistant
C. system
D. tool

---

### Q9. To force a model to think step-by-step, you would use:
A. Higher temperature
B. Chain-of-Thought prompting ("Let's think step by step")
C. Lower max_tokens
D. JSON response format

---

### Q10. To keep responses deterministic for retrieval-grounded Q&A, set temperature:
A. 0.0–0.3
B. 0.7
C. 1.5
D. 2.0

---

### Q11. Default Azure OpenAI content filter threshold for new deployments is:
A. Off
B. Low
C. Medium
D. High

---

### Q12. To customize the content filter for one specific deployment, you:
A. Disable filtering globally
B. Create a custom content filter configuration in Azure AI Foundry and assign it to the deployment
C. Modify the model weights
D. Pass `filter=off` in API call

---

### Q13. "On Your Data" in Azure OpenAI lets you:
A. Train a new base model
B. Ground the model in your data sources (e.g. Azure AI Search) and return citations
C. Fine-tune embeddings
D. Disable content filters

---

### Q14. With On Your Data, setting `in_scope: true` causes the model to:
A. Use any internet source
B. Refuse to answer outside the retrieved documents
C. Increase temperature
D. Skip the filter

---

### Q15. Fine-tuning is BEST suited for:
A. Adding new factual knowledge that changes daily
B. Teaching the model a specific style, tone, or output format
C. Replacing RAG entirely
D. Lowering API cost dynamically

---

### Q16. To add up-to-date company knowledge to a chat app, you should USUALLY:
A. Fine-tune the model with the documents
B. Use RAG (e.g. On Your Data / Azure AI Search)
C. Retrain from scratch
D. Hardcode answers in the system prompt

---

### Q17. Fine-tuning training data file format is:
A. CSV
B. JSONL with `{"messages":[{...},{...},{...}]}` per line
C. XML
D. Parquet

---

### Q18. A request returns HTTP 429. First step?
A. Switch SKUs immediately
B. Check the deployment's TPM/RPM quota and add client-side backoff
C. Delete the resource
D. Increase temperature

---

### Q19. GPT-4o's context window is approximately:
A. 4K tokens
B. 16K tokens
C. 128K tokens
D. 1M tokens

---

### Q20. Which Azure OpenAI model performs speech-to-text?
A. dall-e-3
B. tts
C. whisper
D. embeddings

---

### Q21. Vision in GPT-4o is invoked by:
A. A separate `vision` API
B. Passing an image_url part inside a user message's content array
C. Custom Vision SDK
D. Document Intelligence

---

### Q22. The recommended production auth for Azure OpenAI from code running in Azure is:
A. Hardcoded subscription key
B. Microsoft Entra ID (e.g. managed identity) with Cognitive Services User role
C. Anonymous public access
D. Shared key via env variable in source

---

### Q23. Function/tool calling allows the model to:
A. Call any HTTP endpoint directly
B. Decide to invoke a function you described, returning structured arguments
C. Replace prompt engineering
D. Disable content filtering

---

### Q24. Which is TRUE about Azure OpenAI vs OpenAI.com?
A. They are unrelated services
B. Azure adds RBAC, private networking, region pinning, content filters, data residency
C. Azure OpenAI uses different models
D. OpenAI.com is cheaper in all cases

---

### Q25. Token billing on Azure OpenAI counts:
A. Input tokens only
B. Output tokens only
C. Input + Output (often at different per-token rates)
D. Per request, not per token

---

### Q26. To deploy a fine-tuned model:
A. It runs automatically once trained
B. Create a deployment pointing at the fine-tuned model ID
C. Convert to ONNX
D. Use Custom Vision

---

### Q27. Which is NOT a parameter you can tune on the chat completion API?
A. `temperature`
B. `top_p`
C. `presence_penalty`
D. `bias_score`

---

### Q28. Best practice when a chat app must run inside a corporate VNet with no public internet?
A. Public endpoint is fine
B. Configure private endpoint on the Azure OpenAI resource and disable public network access
C. Set firewall to allow 0.0.0.0/0
D. Use Whisper instead

---

## 🎯 Answers + Explanations

### Q1: **B. `OpenAI` (separate resource)**
Not part of the multi-service `AIServices` kind.

### Q2: **B. The deployment name you created**
The deployment maps to a specific model + version.

### Q3: **B. `AzureOpenAI`**
From the `openai` package, distinct from the OpenAI.com `OpenAI` class.

### Q4: **C. PTU**
Provisioned Throughput Units = reserved capacity, predictable latency.

### Q5: **C. Global Batch**
Async, 24-hour SLA, roughly half-price.

### Q6: **C. `text-embedding-3-large`**
3072 dims. ada-002 and 3-small are 1536.

### Q7: **B. The messages list of role/content dicts**
Standard chat schema.

### Q8: **C. system**
Persona, rules, constraints — set once at the top.

### Q9: **B. Chain-of-Thought prompting**
Explicit "think step by step" prompt elicits reasoning.

### Q10: **A. 0.0–0.3**
Low temperature for factual, grounded responses.

### Q11: **C. Medium**
Default block threshold for new deployments.

### Q12: **B. Custom content filter configuration in Foundry**
Per-deployment overrides.

### Q13: **B. Ground the model in your data + return citations**
Native RAG built into Azure OpenAI.

### Q14: **B. Refuse to answer outside the retrieved documents**
Forces grounded responses.

### Q15: **B. Style / tone / output format**
Knowledge → RAG. Style → fine-tune.

### Q16: **B. Use RAG**
Knowledge that changes is best handled by retrieval, not fine-tuning.

### Q17: **B. JSONL with `messages` per line**
Each line is a complete chat example.

### Q18: **B. Check TPM/RPM quota + add backoff**
429s = throttling. Increase quota, add exponential backoff, then consider PTU.

### Q19: **C. 128K tokens**
GPT-4o context window. (Some models, like o1, have similar or different — but 128K is the GPT-4o figure.)

### Q20: **C. whisper**
Speech-to-text. (TTS = text-to-speech. DALL-E = images. Embeddings = vectors.)

### Q21: **B. Passing an image_url part inside the user message's content array**
Multimodal chat.

### Q22: **B. Entra ID (managed identity) + Cognitive Services User role**
No secrets in code.

### Q23: **B. Decide to invoke a function you described**
Returns name + JSON arguments; you execute and feed result back as `tool` message.

### Q24: **B. Azure adds RBAC, private networking, region pinning, content filters, data residency**
Same models, more enterprise plumbing.

### Q25: **C. Input + output (often different rates)**
Output tokens typically cost more than input.

### Q26: **B. Create a deployment pointing at the fine-tuned model ID**
Training produces a model artifact; deployment makes it callable.

### Q27: **D. `bias_score`**
Not a real parameter. Real ones include temperature, top_p, presence_penalty, frequency_penalty, max_tokens, stop, seed.

### Q28: **B. Private endpoint + disable public network access**
VNet isolation pattern.

---

## 📊 Score Yourself

- 27–28/28 → 🏆 Move on
- 23–26/28 → ✅ Strong
- 18–22/28 → ⚠️ Re-read deployments + On Your Data
- <18/28 → 🔁 Re-read Reading.md; re-quiz tomorrow

---

## 🃏 Add To Your Flashcards

- Resource / deployment / model relationship
- SKU options (Standard / Global Standard / PTU / Global Batch)
- Chat roles (system, user, assistant, tool)
- Temperature ranges
- On Your Data + `in_scope` + citations
- Fine-tune (style/format) vs RAG (knowledge)
- JSONL fine-tune format
- 429 → quota + backoff → PTU
- Embedding dimensions
- Default filter threshold = Medium

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 8: Build GenAI Apps](../Module-08-Build-GenAI-Apps/Reading.md)
