# Module 8: Build Generative AI Apps 🛠️

> **Why this module matters:** This module is the apex. You'll tie together Azure AI Search, Azure OpenAI, Content Safety, and evaluation tools through **Azure AI Foundry** to ship a real GenAI app — including prompt flow, model catalog, evaluation, monitoring, RAG patterns, Semantic Kernel basics, and agent patterns.

---

## 🍕 A Story: Maya Ships v1.0

Maya needs to launch a production-ready help chatbot. She has all the pieces from Modules 1–7. Now she needs to:
1. **Stitch them together** into one app
2. **Iterate fast** on prompts and flows
3. **Evaluate** quality before each release
4. **Monitor** in production
5. **Add tool calling** so the bot can actually do things (create tickets, look up orders)

**Azure AI Foundry** is the workbench that wraps all of this. Let's walk through it.

---

## 🏢 Azure AI Foundry — The Workbench

Azure AI Foundry (formerly **Azure AI Studio**) is Microsoft's unified portal for building, evaluating, and deploying generative AI apps. Sits on top of Azure AI services, Azure OpenAI, Azure Machine Learning, and Azure AI Search.

### Foundry's resource model

```
Hub                       ← Azure resource; shared infra, security, connections
 ├── Project               ← Workspace for a specific app
 │    ├── Connections      ← Pre-auth handles to AOAI, AI Search, Storage, etc.
 │    ├── Deployments      ← Model deployments (Azure OpenAI, model catalog)
 │    ├── Prompt flows     ← Visual DAG orchestrations
 │    ├── Evaluations      ← Scored test runs
 │    ├── Datasets         ← Reusable test/training data
 │    ├── Indexes          ← Linked Azure AI Search indexes
 │    └── Agents           ← Tool-using assistants
 └── (Other Projects)
```

🎯 **Exam pattern:** *"What is the unit that groups model deployments, prompt flows, and evaluation runs for one app?"* → a **Project** under a **Hub**.

### Connections

Foundry **Connections** are reusable, RBAC-secured handles to external services:
- Azure OpenAI
- Azure AI Search
- Azure AI services
- Azure Blob Storage / Data Lake
- API Key endpoints
- Microsoft Fabric / OneLake

Use connections instead of hardcoding endpoints + keys in code.

---

## 📚 The Model Catalog

Foundry's **Model catalog** lists thousands of models:
- **Azure OpenAI models** (GPT-4o, etc.) — first-class deployments
- **Models as a Service (MaaS)** — pay-per-token serverless deployments of partner models (Llama, Mistral, Cohere, NVIDIA, etc.)
- **Models as a Platform (MaaP)** — deploy to a managed compute (you control the VM/cluster)
- **Open-source / Hugging Face** models

You can:
- **Try a model** in a playground without deploying
- **Deploy** it to your project
- **Compare** models side-by-side
- **Benchmark** them on your dataset

🎯 **Exam pattern:** *"Deploy a Mistral model pay-per-token without managing infrastructure"* → **MaaS deployment** from the model catalog.

---

## 🌊 Prompt Flow

**Prompt flow** is Foundry's visual DAG orchestrator for LLM apps. You define **nodes** (prompts, Python functions, LLM calls, tool calls), connect them, run them, and version them.

### Anatomy of a flow

```
[Input: user_question]
        │
        ▼
[Embed via Azure OpenAI embedding node]
        │
        ▼
[Retrieve via Azure AI Search node]
        │
        ▼
[Compose prompt: system + retrieved chunks + question]
        │
        ▼
[Call gpt-4o-chat deployment]
        │
        ▼
[Output: answer + citations]
```

### Node types

| Node | Purpose |
|---|---|
| LLM | Call an LLM via a connection (Azure OpenAI, model catalog) |
| Prompt | Static Jinja2 template producing a string |
| Python | Run arbitrary Python (preprocessing, post-processing) |
| Lookup / Retrieval | Search an Azure AI Search index |
| Embedding | Generate embeddings |

### Variant testing

A flow node can have **variants** — multiple prompt versions you run in parallel and compare metrics across. The basis of A/B prompt testing.

### Deployment

A finished flow becomes a **managed online endpoint** (with auth, autoscale, monitoring). You hit one HTTP URL; Foundry handles the orchestration.

---

## 🧪 Evaluation Workflows

Foundry's **Evaluation** runs your flow/model against a dataset and scores each response on:

| Metric | What it measures |
|---|---|
| **Groundedness** | Does the answer stick to the source docs? |
| **Relevance** | Does it answer the question? |
| **Coherence** | Does the text flow logically? |
| **Fluency** | Is it well-written? |
| **Similarity (GPT-similarity)** | Closeness to a golden reference answer |
| **Safety (Hate/Sexual/Violence/Self-Harm)** | Content Safety categories |
| **Custom metrics** | Your own Python-based scorer |

Two evaluation modes:
- **Built-in evaluators** — Foundry provides metric implementations (mostly LLM-as-judge)
- **Custom evaluators** — Your code, integrated into the eval runs

You bring a **dataset** (question + golden answer + grounding sources) and the eval produces a scored CSV/JSON + a UI dashboard.

🎯 **Exam pattern:** *"How do you compare two prompt variants on quality before deploying?"* → Run them through an **evaluation** with the same dataset and compare metrics.

---

## 📈 Monitoring In Production

Once deployed, Foundry can continuously monitor:
- **Token usage** + cost
- **Latency** (p50/p95/p99)
- **Content filter triggers** (and which categories)
- **Drift in user input** (vs your eval set)
- **Quality drift** (run a sample of prod traffic through evaluators)

Telemetry can flow to **Application Insights** and **Log Analytics**.

---

## 🧩 RAG Patterns (Production-Grade)

This is THE most common GenAI architecture and the AI-102 exam loves it.

### The reference pipeline

```
[User Q]
   │
   ▼
[Optional: rewrite / classify question]
   │
   ▼
[Embed Q]
   │
   ▼
[Hybrid + semantic search] → Azure AI Search index
   │ (top-k chunks + scores)
   ▼
[Compose prompt:
   system: "Answer ONLY from the context. Cite sources."
   context: <retrieved chunks>
   user: <question>]
   │
   ▼
[GPT-4o]
   │
   ▼
[Groundedness check (Content Safety)]
   │
   ▼
[Return answer + citations]
```

### Indexing side (covered in Module 5, recap here)

- **Chunking** — split docs into ~500-token overlapping chunks
- **Embedding** — vectorize each chunk
- **Index** — store chunks + vectors + metadata
- **Refresh** — indexer schedule or push API

### Quality knobs

| Knob | Effect |
|---|---|
| Chunk size | Smaller = sharper retrieval, more chunks |
| Chunk overlap | Avoids info splits at boundaries |
| Top-k | More context = better recall, higher cost |
| Hybrid + semantic | Best retrieval mix |
| Reranker (semantic) | Surface the most relevant chunks at the top |
| Citations + `in_scope` | Force grounding, return sources |
| Groundedness post-check | Catch ungrounded answers |
| `temperature` | Low (≤ 0.3) for grounded |

### When to use Azure OpenAI "On Your Data" vs custom RAG

| | On Your Data | Custom RAG |
|---|---|---|
| Setup time | Minutes | Days |
| Flexibility | Limited customization | Full control |
| Best for | Prototypes, simple apps | Complex flows, multi-step reasoning |
| Cost | Same model + Search costs | Same |
| Use Foundry | Yes, available in playground | Yes, via prompt flow |

---

## 🤖 Agents & Tool Calling

An **agent** is an LLM that can decide to invoke **tools** (functions, APIs, code interpreters, file search) to accomplish a task — then uses tool results in its reasoning.

### Azure AI Agent Service (in Foundry)

Provides:
- A persistent **assistant** with system instructions, tools, files, threads
- Built-in tools: **Code Interpreter**, **File Search** (RAG over uploaded files), **Function Calling** (your functions), **Browser** (preview)
- **Threads** = conversations with state
- **Runs** = one turn of the assistant processing messages

```python
from azure.ai.projects import AIProjectClient
from azure.identity import DefaultAzureCredential

project = AIProjectClient.from_connection_string(connection_string, credential=DefaultAzureCredential())

agent = project.agents.create_agent(
    model="gpt-4o-chat",
    name="support-bot",
    instructions="You are a helpful Azure AI support agent.",
    tools=[{"type":"file_search"}, {"type":"code_interpreter"}]
)

thread = project.agents.create_thread()
project.agents.create_message(thread.id, role="user", content="Summarize last week's tickets.")
run = project.agents.create_and_process_run(thread.id, agent.id)
```

### Patterns

| Pattern | What it does |
|---|---|
| **ReAct** (Reason+Act) | Model alternates between thinking and tool calls |
| **Plan-and-Execute** | Model writes a plan, then executes each step |
| **Reflection** | Model critiques and refines its own answer |
| **Multi-agent** | Multiple agents with specialized roles collaborate |

---

## 🛠️ Semantic Kernel (SK)

**Semantic Kernel** is Microsoft's open-source SDK (C#, Python, Java) for orchestrating LLM + plugins from your code (think: LangChain, by Microsoft).

| Concept | Meaning |
|---|---|
| **Kernel** | Central orchestrator; holds AI services + plugins |
| **Plugin / Function** | A native function OR a prompt template that the model can call |
| **Planner** | Builds multi-step plans automatically |
| **Memory** | Vector store interface for RAG |
| **Filters** | Pre/post request hooks (telemetry, guardrails) |

```python
from semantic_kernel import Kernel
from semantic_kernel.connectors.ai.open_ai import AzureChatCompletion

kernel = Kernel()
kernel.add_service(AzureChatCompletion(
    deployment_name="gpt-4o-chat",
    endpoint=ep, api_key=k
))

# Add a plugin (native function)
from semantic_kernel.functions import kernel_function
class WeatherPlugin:
    @kernel_function
    def get_temp(self, city: str) -> str:
        return "72F"

kernel.add_plugin(WeatherPlugin(), "Weather")
```

Use SK when you want **portable** orchestration code (run locally, multi-cloud, multiple LLM providers).

---

## 📋 Reference Architectures Microsoft Pushes

1. **Enterprise chat over Azure AI Search + Azure OpenAI** — Foundry chat, On Your Data, hybrid+semantic
2. **Document processing pipeline** — Document Intelligence → AI Search → OpenAI summaries
3. **Multilingual support agent** — Translator front + CLU + OpenAI back
4. **Voice-enabled copilot** — Speech → Bot → OpenAI → Speech
5. **Agentic workflow** — Foundry Agent Service with code interpreter + file search + function calling

---

## ⚖️ Decision Matrix: How to Build a GenAI App

| Goal | Build with |
|---|---|
| Quick prototype of a chatbot over my PDFs | Azure OpenAI **On Your Data** in Foundry playground |
| Production chatbot with custom logic | Foundry **prompt flow** + Azure AI Search + Content Safety + monitoring |
| Tool-using assistant | Foundry **Agent Service** |
| Multi-provider orchestration from app code | **Semantic Kernel** |
| Compare 3 prompt variants | **Evaluation** runs with built-in metrics |
| Add Llama or Mistral | **Model catalog** → MaaS deployment |
| Cheapest async batch processing | **Global Batch** SKU on Azure OpenAI |

---

## ⚠️ Common Misconceptions

| Misconception | Reality |
|---|---|
| "Foundry is a separate service from Azure" | It's a portal on top of multiple Azure resources |
| "Prompt flow IS Semantic Kernel" | Different things — prompt flow is visual; SK is code SDK |
| "Agents and bots are the same" | Bot Service hosts conversations; an Agent decides when to use tools/files |
| "Fine-tune the model before RAG" | RAG first; fine-tune only when style/format remains the gap |
| "Evaluation must use Microsoft metrics" | Built-in or fully custom |
| "Model catalog only has Microsoft models" | Llama, Mistral, Cohere, NVIDIA, plus open-source |

---

## 🚨 Exam Traps

1. **Hub vs Project** — Hub = shared infra. Project = app workspace.
2. **MaaS vs MaaP** — MaaS = serverless pay-per-token. MaaP = managed compute you scale.
3. **Prompt flow variants** = A/B testing prompts.
4. **Groundedness** is BOTH an evaluation metric AND a Content Safety API.
5. **Agent Service** is the modern path for tool-using assistants — be familiar with file_search + code_interpreter + function tools.
6. **Semantic Kernel** = code; **Prompt flow** = visual. Both can orchestrate the same building blocks.
7. **Monitoring + drift detection** in Foundry uses your eval dataset as the baseline.

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|---|---|
| **Azure AI Foundry** | Microsoft's GenAI workbench portal (formerly AI Studio) |
| **Hub** | Foundry's top-level shared infra resource |
| **Project** | Workspace inside a hub for one app |
| **Connection** | RBAC-secured handle to an external service (AOAI, Search, Storage) |
| **Model catalog** | Foundry library of deployable models (Azure OpenAI + partners + OSS) |
| **MaaS** | Models-as-a-Service — serverless pay-per-token |
| **MaaP** | Models-as-a-Platform — managed compute deployment |
| **Prompt flow** | Visual DAG orchestrator for LLM apps |
| **Variant** | Alternative version of a prompt node, used for A/B testing |
| **Evaluation** | Scored test runs (groundedness, relevance, coherence, fluency, similarity, safety, custom) |
| **Agent Service** | Foundry's assistants-style API with tools (code interp, file search, function calling) |
| **Thread / Run / Message** | Agent Service primitives |
| **Semantic Kernel** | Open-source orchestration SDK (C#/Python/Java) |
| **Plugin / Function (SK)** | A callable unit (native or prompt-based) the kernel orchestrates |
| **Planner** | SK component that builds multi-step plans |
| **On Your Data** | Native Azure OpenAI RAG over your data sources |
| **Hybrid + semantic** | The RAG retrieval gold standard for Azure AI Search |
| **Reflection / ReAct / Plan-Execute** | Agent reasoning patterns |

---

## ✅ Module 8 Summary

You now know:
- 🏢 Azure AI Foundry — hubs, projects, connections, model catalog
- 🌊 Prompt flow — visual orchestration with variants
- 🧪 Evaluation metrics + workflows
- 📈 Production monitoring + drift detection
- 🧩 The reference RAG architecture and its quality knobs
- 🤖 Agent Service — tools (file search, code interpreter, functions) + threads
- 🛠️ Semantic Kernel basics (kernel, plugin, planner)
- 🏗️ Decision matrix for building any GenAI app
- 🚨 Hub vs Project, MaaS vs MaaP, prompt flow vs SK

**Next steps:**
1. 🎥 Watch [Videos.md](./Videos.md)
2. ✏️ Take [Quiz.md](./Quiz.md)
3. 📋 Review [Cheat-Sheet.md](./Cheat-Sheet.md)
4. 🧪 Take [Practice Exam 2](../Practice-Exams/Practice-Exam-2.md)
5. 🧪 Then [Final Mock Exam](../Practice-Exams/Final-Mock-Exam.md)
6. 📅 Book AI-102. You're ready.

---

## 📚 Further Reading (Optional)

- 📖 [Azure AI Foundry docs](https://learn.microsoft.com/en-us/azure/ai-foundry/)
- 📖 [Prompt flow](https://learn.microsoft.com/en-us/azure/ai-studio/how-to/prompt-flow)
- 📖 [Evaluations](https://learn.microsoft.com/en-us/azure/ai-studio/concepts/evaluation-metrics-built-in)
- 📖 [Azure AI Agent Service](https://learn.microsoft.com/en-us/azure/ai-services/agents/overview)
- 📖 [Semantic Kernel](https://learn.microsoft.com/en-us/semantic-kernel/overview/)
- 📖 [Model catalog](https://learn.microsoft.com/en-us/azure/ai-studio/how-to/model-catalog-overview)
- 📖 [RAG reference architectures](https://learn.microsoft.com/en-us/azure/architecture/ai-ml/architecture/baseline-openai-e2e-chat)
