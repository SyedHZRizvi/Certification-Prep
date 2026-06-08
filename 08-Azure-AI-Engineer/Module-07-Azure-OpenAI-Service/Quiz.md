# ✏️ Module 7 Quiz: Azure OpenAI Service

> **Instructions:** Answer all 30 questions WITHOUT looking at the reading.
> Then check your answers below. Aim for 25/30 minimum.
> Each question is **Bloom's-taxonomy** tagged.

---

## Questions

### Q1. Azure OpenAI is provisioned as which resource kind? *(Remember)*
A. `AIServices` (multi-service)
B. `OpenAI` (separate resource)
C. `Microsoft.OpenAI` only
D. Combined with Cognitive Services automatically

---

### Q2. When you call the chat completions API, the `model` parameter should be: *(Understand)*
A. The base model name (e.g. `gpt-4o`)
B. The deployment name you created
C. Always `chat`
D. A region code

---

### Q3. Which Python class is used for Azure OpenAI in the official OpenAI SDK? *(Remember)*
A. `OpenAIClient`
B. `AzureOpenAI`
C. `AzureGPTClient`
D. `LanguageClient`

---

### Q4. A team wants reserved capacity with predictable latency. Which deployment SKU? *(Apply)*
A. Standard
B. Global Standard
C. Provisioned Throughput Units (PTU)
D. Global Batch

---

### Q5. A team wants to process millions of completions overnight at lowest cost; latency doesn't matter. Best SKU? *(Apply)*
A. Standard
B. PTU
C. Global Batch
D. Premium

---

### Q6. Which is the embedding model with 3072 dimensions? *(Remember)*
A. `text-embedding-ada-002`
B. `text-embedding-3-small`
C. `text-embedding-3-large`
D. `whisper`

---

### Q7. Which line completes this chat call? *(Apply)*
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

### Q8. Which message role sets the persona / rules for a chat conversation? *(Remember)*
A. user
B. assistant
C. system
D. tool

---

### Q9. To force a model to think step-by-step, you would use: *(Understand)*
A. Higher temperature
B. Chain-of-Thought prompting ("Let's think step by step")
C. Lower max_tokens
D. JSON response format

---

### Q10. To keep responses deterministic for retrieval-grounded Q&A, set temperature: *(Apply)*
A. 0.0–0.3
B. 0.7
C. 1.5
D. 2.0

---

### Q11. Default Azure OpenAI content filter threshold for new deployments is: *(Remember)*
A. Off
B. Low
C. Medium
D. High

---

### Q12. To customize the content filter for one specific deployment, you: *(Apply)*
A. Disable filtering globally
B. Create a custom content filter configuration in Azure AI Foundry and assign it to the deployment
C. Modify the model weights
D. Pass `filter=off` in API call

---

### Q13. "On Your Data" in Azure OpenAI lets you: *(Understand)*
A. Train a new base model
B. Ground the model in your data sources (e.g. Azure AI Search) and return citations
C. Fine-tune embeddings
D. Disable content filters

---

### Q14. With On Your Data, setting `in_scope: true` causes the model to: *(Understand)*
A. Use any internet source
B. Refuse to answer outside the retrieved documents
C. Increase temperature
D. Skip the filter

---

### Q15. Fine-tuning is BEST suited for: *(Analyze)*
A. Adding new factual knowledge that changes daily
B. Teaching the model a specific style, tone, or output format
C. Replacing RAG entirely
D. Lowering API cost dynamically

---

### Q16. To add up-to-date company knowledge to a chat app, you should USUALLY: *(Apply)*
A. Fine-tune the model with the documents
B. Use RAG (e.g. On Your Data / Azure AI Search)
C. Retrain from scratch
D. Hardcode answers in the system prompt

---

### Q17. Fine-tuning training data file format is: *(Remember)*
A. CSV
B. JSONL with `{"messages":[{...},{...},{...}]}` per line
C. XML
D. Parquet

---

### Q18. A request returns HTTP 429. First step? *(Apply)*
A. Switch SKUs immediately
B. Check the deployment's TPM/RPM quota and add client-side backoff
C. Delete the resource
D. Increase temperature

---

### Q19. GPT-4o's context window is approximately: *(Remember)*
A. 4K tokens
B. 16K tokens
C. 128K tokens
D. 1M tokens

---

### Q20. Which Azure OpenAI model performs speech-to-text? *(Remember)*
A. dall-e-3
B. tts
C. whisper
D. embeddings

---

### Q21. Vision in GPT-4o is invoked by: *(Understand)*
A. A separate `vision` API
B. Passing an image_url part inside a user message's content array
C. Custom Vision SDK
D. Document Intelligence

---

### Q22. The recommended production auth for Azure OpenAI from code running in Azure is: *(Apply)*
A. Hardcoded subscription key
B. Microsoft Entra ID (e.g. managed identity) with Cognitive Services User role
C. Anonymous public access
D. Shared key via env variable in source

---

### Q23. Function/tool calling allows the model to: *(Understand)*
A. Call any HTTP endpoint directly
B. Decide to invoke a function you described, returning structured arguments
C. Replace prompt engineering
D. Disable content filtering

---

### Q24. Which is TRUE about Azure OpenAI vs OpenAI.com? *(Understand)*
A. They are unrelated services
B. Azure adds RBAC, private networking, region pinning, content filters, data residency
C. Azure OpenAI uses different models
D. OpenAI.com is cheaper in all cases

---

### Q25. Token billing on Azure OpenAI counts: *(Remember)*
A. Input tokens only
B. Output tokens only
C. Input + Output (often at different per-token rates)
D. Per request, not per token

---

### Q26. To deploy a fine-tuned model: *(Understand)*
A. It runs automatically once trained
B. Create a deployment pointing at the fine-tuned model ID
C. Convert to ONNX
D. Use Custom Vision

---

### Q27. Which is NOT a parameter you can tune on the chat completion API? *(Remember)*
A. `temperature`
B. `top_p`
C. `presence_penalty`
D. `bias_score`

---

### Q28. Best practice when a chat app must run inside a corporate VNet with no public internet? *(Apply)*
A. Public endpoint is fine
B. Configure private endpoint on the Azure OpenAI resource and disable public network access
C. Set firewall to allow 0.0.0.0/0
D. Use Whisper instead

---

### Q29. Coca-Cola's "Create Real Magic" (2023) deployed Azure OpenAI with custom content filters tighter than default, a locked brand-asset system prompt, low temperature, **PTU** during peak, **Standard** for tail, and Protected Material Detection ON. Evaluate the proposal to swap PTU → pure Standard at 10× normal traffic during the Times Square billboard window. The strongest critique is: *(Evaluate)*
A. "Standard is cheaper"
B. "Standard quota is rate-limited; under 10× spike you risk 429-driven user-facing failures during peak; the PTU's reserved capacity gives deterministic latency at the moment that's brand-critical, and Microsoft offers Global Batch / Standard mix for the non-peak tail, the case study composes all three for the reason"
C. "PTU is always wrong"
D. "Standard supports more models"

---

### Q30. **Design task.** You are designing the production deployment for the course Capstone (insurer claims-processing). Constraints: HIPAA-defensible (no key in code, no public network, no 30-day abuse log retention), deterministic latency for adjuster summaries, JSON-schema-enforced output, citation-grounded answers, evaluation pipeline before each model upgrade. Which option is *strongest*? *(Create)*
A. Hardcoded keys + public endpoint + default filter + free-form output
B. (1) **Managed identity** + `Cognitive Services OpenAI User` role; (2) **Private Endpoint** + disable public network; (3) **Customer-Managed Keys (CMK)** via Key Vault; (4) Approved **abuse-monitoring opt-out** for HIPAA; (5) **PTU** for the adjuster-summary flow + **Standard** for low-volume admin; (6) **`response_format`** (JSON schema) on the schema-bound output; (7) **On Your Data** with `in_scope: true` over Azure AI Search (hybrid + semantic); (8) **Custom content filter** with Groundedness + Prompt Shields enabled; (9) Pre-upgrade **Foundry Evaluation** runs (Module 8) with Groundedness + Relevance + Safety metrics
C. Default settings everywhere
D. Skip evaluation; ship and iterate

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
Persona, rules, constraints, set once at the top.

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
GPT-4o context window. (Some models, like o1, have similar or different, but 128K is the GPT-4o figure.)

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

### Q29: **B. Quota-driven peak risk + composed SKU rationale**
The Coca-Cola architecture composed PTU + Standard + (back-office) Global Batch because each SKU optimises for a different load profile. Swapping PTU → all-Standard on a 10× spike is the textbook way to introduce 429 outages at the worst possible moment. A and C are dogmatic. D is irrelevant.

### Q30: **B. Full layered HIPAA-defensible composition**
Each clause maps to a constraint in the prompt: identity, network, KMS, retention, latency, schema, grounding, safety, evaluation. A, C, D each drop one or more constraints and are not defensible under the Capstone scenario or under Microsoft RAI Standard v2.

---

## 📊 Score Yourself

- 29–30/30 → 🏆 Move on
- 25–28/30 → ✅ Strong
- 19–24/30 → ⚠️ Re-read deployments + On Your Data
- <19/30 → 🔁 Re-read Reading.md; re-quiz tomorrow

### Bloom's distribution check
| Level | Count | % | Target |
|---|---|---|---|
| Remember | 11 | 37% | ≤ 25%¹ |
| Understand | 9 | 30% | ~25% |
| Apply | 8 | 27% | ~25% |
| Analyze | 1 | 3% | ~20% |
| Evaluate | 1 | 3% | (combined) |
| Create | 1 | 3% | ~5% |

¹ Recall on model names, SKUs, defaults remains exam-critical. The harder reasoning is in the Socratic prompts + Q29/Q30 + the case study.

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
