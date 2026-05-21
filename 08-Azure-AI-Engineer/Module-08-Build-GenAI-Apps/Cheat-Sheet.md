# 📋 Module 8 Cheat Sheet: Build GenAI Apps

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 🏢 Azure AI Foundry Structure

```
Hub  (shared infra, security, connections)
 └── Project  (one app's workspace)
       ├── Connections    → AOAI, AI Search, Storage, Fabric, ...
       ├── Deployments    → Azure OpenAI + catalog models
       ├── Prompt flows   → visual DAGs
       ├── Evaluations    → scored runs
       ├── Datasets
       ├── Indexes        → AI Search references
       └── Agents         → tool-using assistants
```

🚨 Foundry = AI Studio (rebrand).

---

## 📚 Model Catalog: MaaS vs MaaP

| | MaaS | MaaP |
|---|---|---|
| Compute | Serverless | Managed VM/cluster you control |
| Billing | Per-token | Per compute-hour |
| Use for | Most apps | Custom hardware needs |

Catalog includes: Azure OpenAI, Llama, Mistral, Cohere, NVIDIA, Phi, Hugging Face, OSS.

---

## 🌊 Prompt Flow Building Blocks

| Node | Use |
|---|---|
| LLM | Call a connected model |
| Prompt | Jinja2 template → string |
| Python | Pre/post-processing logic |
| Lookup / Retrieval | Query AI Search |
| Embedding | Vectorize text |

**Variants** = A/B versions of a node for comparison.

---

## 🧪 Evaluation Metrics

| Metric | What it measures |
|---|---|
| Groundedness | Sticks to sources |
| Relevance | Answers the question |
| Coherence | Logical flow |
| Fluency | Well-written |
| Similarity | Match to golden answer |
| Safety | Hate/Sexual/Violence/Self-Harm |
| Custom | Your Python scorer |

---

## 📈 Production Monitoring

- Token usage + cost
- Latency p50/p95/p99
- Content filter trigger counts
- Drift vs eval baseline → Application Insights

---

## 🧩 RAG Quality Knobs

```
Chunk size 200–800 tokens · Overlap 10–20%
Top-k 3–10 (hybrid + semantic)
Embedding: text-embedding-3-small (1536)
Temperature 0.0–0.3
in_scope: true · Citations enabled
Groundedness post-check (Content Safety)
```

---

## 🤖 Azure AI Agent Service

Tools:
- **File Search** — RAG over uploaded files
- **Code Interpreter** — sandboxed Python
- **Function Calling** — your functions
- **Browser** — preview web browsing

Primitives: **Assistant · Thread · Message · Run**.

```python
agent = project.agents.create_agent(model="gpt-4o", tools=[{"type":"file_search"}])
thread = project.agents.create_thread()
project.agents.create_message(thread.id, role="user", content="...")
run = project.agents.create_and_process_run(thread.id, agent.id)
```

---

## 🛠️ Semantic Kernel

| Concept | Meaning |
|---|---|
| Kernel | Orchestrator (holds services + plugins) |
| Plugin / Function | Native fn OR prompt template the kernel can call |
| Planner | Builds multi-step plans automatically |
| Memory | Vector store interface |
| Filters | Pre/post request hooks |

```python
from semantic_kernel import Kernel
from semantic_kernel.connectors.ai.open_ai import AzureChatCompletion
k = Kernel()
k.add_service(AzureChatCompletion(deployment_name="gpt-4o", endpoint=ep, api_key=key))
```

---

## ⚖️ Decision Matrix

| Goal | Build with |
|---|---|
| Prototype RAG over PDFs | AOAI **On Your Data** in Foundry |
| Production custom RAG | Foundry **Prompt Flow** |
| Tool-using assistant | Foundry **Agent Service** |
| Portable code-first orchestration | **Semantic Kernel** |
| Compare prompts | Foundry **Evaluation** |
| Add Llama / Mistral | Model catalog **MaaS** deployment |

---

## 🏆 Exam Power Phrases

**Usually right**:
- ✅ "Project under a Foundry Hub"
- ✅ "Hybrid + semantic + AOAI On Your Data"
- ✅ "Prompt flow variants for A/B testing"
- ✅ "Agent Service file_search + code_interpreter"
- ✅ "Managed identity for service auth"

**Usually wrong**:
- ❌ "AI Studio" (use Foundry)
- ❌ "Fine-tune to add knowledge"
- ❌ "Hardcode keys"
- ❌ "Skip evaluation; ship to prod"
- ❌ "Visual prompt flow IS Semantic Kernel"

---

## ⚠️ Anti-Patterns

- ❌ Production without evaluation
- ❌ Skipping content filters
- ❌ One giant prompt with everything inline (use Prompt Flow nodes)
- ❌ Vector-only retrieval (use hybrid + semantic)
- ❌ Hardcoded endpoint+key (use Foundry Connections)

---

## ✏️ Quick Self-Check

1. Hub vs Project? ___
2. MaaS vs MaaP? ___
3. Three Foundry evaluation metrics? ___
4. Prompt Flow vs Semantic Kernel? ___
5. Three Agent Service tools? ___

If you can answer all 5 in 60 seconds, you own Module 8. ✅

---

➡️ [Practice Exam 2](../Practice-Exams/Practice-Exam-2.md) — then [Final Mock Exam](../Practice-Exams/Final-Mock-Exam.md)
