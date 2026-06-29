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
| Compute | Serverless | Managed VM (Virtual Machine)/cluster you control |
| Billing | Per-token | Per compute-hour |
| Use for | Most apps | Custom hardware needs |

Catalog includes: Azure OpenAI, Llama, Mistral, Cohere, NVIDIA, Phi, Hugging Face, OSS.

---

## 🌊 Prompt Flow Building Blocks

| Node | Use |
|---|---|
| LLM (Large Language Model) | Call a connected model |
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

## 🧩 RAG (Retrieval-Augmented Generation) Quality Knobs

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

- **File Search**, RAG over uploaded files
- **Code Interpreter**, sandboxed Python
- **Function Calling**, your functions
- **Browser**, preview web browsing

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

## 🧩 Agent Reasoning Patterns

| Pattern | What it does | Source |
|---|---|---|
| **Chain-of-Thought (CoT)** | "Let's think step by step", single-shot reasoning | Wei et al., NeurIPS 2022 |
| **ReAct (Reason + Act)** | Alternates reasoning + tool call + observation | Yao et al., ICLR 2023 |
| **Plan-and-Execute** | Plan whole sequence, then execute each step | LangChain blog (2023) + academic variants |
| **Reflection** | Model critiques and revises its own answer | Shinn et al. (2023), "Reflexion" |
| **Multi-agent** | Specialised agents collaborate | Park et al. (2023), "Generative Agents" |

## 🏛️ Foundry → Capstone Mapping

| Capstone deliverable | Foundry feature |
|---|---|
| Target architecture | Hub + Project + Connections |
| RAG eval harness | Foundry Evaluation workflow |
| Citation provenance | On Your Data + `in_scope:true` |
| Content safety per RAI | Custom content filter config |
| Security review | Managed identity + Private Endpoint + CMK |
| Cost forecast | Deployment SKU (Stock Keeping Unit) mix (Standard / PTU / Global Batch) + token forecast |
| Observability dashboard | Foundry monitoring → Application Insights |
| Go/no-go gate | Foundry Evaluation thresholds before each upgrade |

## 📚 Citations

| Concept | Source |
|---|---|
| Transformer | Vaswani et al. (2017), NeurIPS |
| Chain-of-Thought | Wei et al. (2022), NeurIPS |
| ReAct | Yao et al. (2023), ICLR |
| RAI Standard v2 | Microsoft (June 2022) |
| NIST AI RMF 1.0 | NIST (January 2023) |
| EU AI Act | Reg (EU) 2024/1689 (June 2024) |
| GitHub Copilot evolution | GitHub blog 2021–2024; GitHub Universe 2024 keynote |

---

➡️ [Practice Exam 2](../Practice-Exams/Practice-Exam-2.md) then [Final Mock Exam](../Practice-Exams/Final-Mock-Exam.md) then [Capstone Project](../Capstone-Project.md)
