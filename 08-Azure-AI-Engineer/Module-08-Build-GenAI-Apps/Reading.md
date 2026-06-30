# Module 8: Build Generative AI Apps 🛠️

> **Why this module matters:** This module is the apex. You'll tie together Azure AI Search, Azure OpenAI, Content Safety, and evaluation tools through **Azure AI Foundry** to ship a real GenAI app, including prompt flow, model catalog, evaluation, monitoring, RAG patterns, Semantic Kernel basics, and agent patterns.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - Modules 1, 2, 5, 7, Foundry assumes you can already provision resources, apply RAI controls, build a search index, and deploy a model.
> - The transformer + few-shot lineage (Vaswani et al. 2017; Brown et al. 2020).
> - Modern agent / tool-use patterns (ReAct family Yao et al., *ReAct: Synergizing Reasoning and Acting in Language Models*, ICLR 2023 is the canonical academic reference).
>
> If any of Modules 1, 2, 5, or 7 feel shaky, pause and revisit before this one, Foundry stitches them into one user interface but the underlying primitives are the same.

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

## 🏢 Azure AI Foundry, The Workbench

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

- **Azure OpenAI models** (GPT-4o, etc.), first-class deployments
- **Models as a Service (MaaS)**, pay-per-token serverless deployments of partner models (Llama, Mistral, Cohere, NVIDIA, etc.)
- **Models as a Platform (MaaP)**, deploy to a managed compute (you control the VM/cluster)
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

A flow node can have **variants**, multiple prompt versions you run in parallel and compare metrics across. The basis of A/B prompt testing.

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

- **Built-in evaluators**, Foundry provides metric implementations (mostly LLM-as-judge)
- **Custom evaluators**, Your code, integrated into the eval runs

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

This is THE most common GenAI architecture and the AI-103 exam loves it.

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

- **Chunking**, split docs into ~500-token overlapping chunks
- **Embedding**, vectorize each chunk
- **Index**, store chunks + vectors + metadata
- **Refresh**, indexer schedule or push API

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

An **agent** is an LLM that can decide to invoke **tools** (functions, APIs, code interpreters, file search) to accomplish a task, then uses tool results in its reasoning.

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

## 🧠 Implement Generative AI and Agentic Solutions (The 30–35% Domain)

> **Why this section is the spine of the exam.** On the AI-103 blueprint *"Implement generative AI and agentic solutions"* is the single heaviest domain at **30–35%**. Vision, language, and document intelligence are still examined (they carried over from AI-102), but *this* is where the questions cluster. If you only deeply master one domain, master this one. Everything below is built on **Azure AI Foundry Agent Service** and the **`azure-ai-projects`** / **`azure-ai-agents`** SDKs.

### 🍕 A Story: Maya's One Bot Becomes a Team

Maya's v1.0 support bot worked, but by v2.0 the ticket queue had three very different jobs tangled into one prompt: *triage* the customer's issue, *look up* their order and entitlements, and *draft* a policy-correct reply. One giant system prompt tried to do all three, and it kept doing two well and one badly on any given run. Her senior engineer said the line that reframed everything: *"Stop writing a smarter prompt. Start hiring a team."*

So Maya split the work the way a real support desk is organized: a **Triage agent** that classifies and routes, an **Order-Lookup agent** that calls internal APIs, and a **Reply-Drafting agent** that writes the final answer grounded in policy docs. An **orchestrator** hands the conversation between them. That is the leap from a *single agent* to a *multi-agent* system, and it is exactly the architecture AI-103 wants you to be able to design, build, and reason about.

### What "Agentic" Means on Azure

An **agent** in Foundry Agent Service is a server-side, stateful assistant defined by four things:

| Pillar | What it is | Where it lives |
|---|---|---|
| **Role / persona** | Who the agent *is* ("a senior claims adjuster") | `instructions` |
| **Goal** | What success looks like for this agent | `instructions` |
| **Instructions** | The behavioral contract: tone, constraints, refusal rules, output format | `instructions` |
| **Tools** | The actions it can take (functions, file search, code interpreter) | `tools` |

The agent runs inside the **thread / run** model: a **thread** is a persistent conversation, a **message** is one turn added to it, and a **run** is the agent processing the thread (reasoning, calling tools, appending its reply). The service persists threads server-side, so **memory** is durable across turns without you re-sending history.

🎯 **Exam tip:** When a question describes "persistent conversation state managed by the service, not by my app," the answer is **a Foundry Agent Service thread**, not "store the chat history in my database."

### The SDK Surface You're Tested On

Two packages, one clear division of labor:

| Package | What it gives you | You use it to… |
|---|---|---|
| **`azure-ai-projects`** | The `AIProjectClient` — your handle to the Foundry **project**, its connections, deployments, and the `.agents` operations | Connect to the project, create agents, open threads, start runs |
| **`azure-ai-agents`** | The agents data plane: tool definitions (`FunctionTool`, `FileSearchTool`, `CodeInterpreterTool`), thread/run/message models, run-step inspection | Define tool schemas, submit tool outputs, read run steps for observability |

Authentication is **`DefaultAzureCredential`** (managed identity in production, `az login` locally). You connect with the project **endpoint**, not hardcoded keys.

```python
from azure.ai.projects import AIProjectClient
from azure.identity import DefaultAzureCredential

project = AIProjectClient(
    endpoint="https://<your-foundry-project>.services.ai.azure.com/api/projects/<name>",
    credential=DefaultAzureCredential(),
)
```

🚨 **Trap on the exam:** Keys + connection strings still appear as distractors. The modern, exam-correct pattern is **`DefaultAzureCredential` + project endpoint + managed identity**. "Embed the API key in the agent definition" is always wrong.

### Single-Agent Anatomy: Roles, Goals, Instructions

A single agent is the unit you must be able to write cold. The `instructions` field is where role + goal + behavioral contract all live — treat it like a job description, not a greeting.

```python
agent = project.agents.create_agent(
    model="gpt-4o",                       # a deployment in your project
    name="claims-triage",
    instructions=(
        "ROLE: You are a senior insurance claims triage specialist.\n"
        "GOAL: Classify each incoming claim by type and urgency, and decide "
        "whether it can be auto-approved or must go to a human adjuster.\n"
        "RULES:\n"
        " - Never approve a claim over $10,000 yourself; route it to a human.\n"
        " - If required documents are missing, ask for them; do not guess.\n"
        " - Always return: claim_type, urgency (low/med/high), route (auto/human)."
    ),
)
```

The pattern to internalize: **ROLE** (persona) → **GOAL** (success criterion) → **RULES** (guardrails + output contract). The exam rewards instructions that encode *refusal conditions* and *escalation paths*, not just a friendly tone.

### Function Calling and Tool Schemas

Tools are how an agent *acts*. The most tested tool type is **function calling**: you describe a function with a **JSON schema**, the model decides when to call it, the service pauses the run in a `requires_action` state, your code executes the real function and submits the result, and the run resumes.

The schema is the contract. The model can only call what you describe accurately — vague descriptions produce wrong calls.

```python
from azure.ai.agents.models import FunctionTool

def lookup_order(order_id: str) -> str:
    """Return order status + entitlement for an order_id."""
    ...  # calls your internal API
    return '{"status": "shipped", "warranty": "active"}'

# The SDK can build the JSON schema from typed Python functions:
order_tool = FunctionTool(functions={lookup_order})

agent = project.agents.create_agent(
    model="gpt-4o",
    name="order-lookup",
    instructions="Look up orders using the lookup_order tool. Never invent order data.",
    tools=order_tool.definitions,
)
```

The raw tool schema the model actually sees looks like this — know its shape:

```json
{
  "type": "function",
  "function": {
    "name": "lookup_order",
    "description": "Return order status + entitlement for an order_id.",
    "parameters": {
      "type": "object",
      "properties": { "order_id": { "type": "string", "description": "The order identifier" } },
      "required": ["order_id"]
    }
  }
}
```

The run loop with function calling:

```python
thread = project.agents.threads.create()
project.agents.messages.create(thread.id, role="user", content="Where is order A-4471?")
run = project.agents.runs.create(thread.id, agent_id=agent.id)

while run.status in ("queued", "in_progress", "requires_action"):
    if run.status == "requires_action":
        outputs = []
        for call in run.required_action.submit_tool_outputs.tool_calls:
            if call.function.name == "lookup_order":
                args = json.loads(call.function.arguments)
                result = lookup_order(**args)               # YOU run the real function
                outputs.append({"tool_call_id": call.id, "output": result})
        run = project.agents.runs.submit_tool_outputs(thread.id, run.id, tool_outputs=outputs)
    else:
        run = project.agents.runs.get(thread.id, run.id)
```

🎯 **Exam tip:** The `requires_action` → `submit_tool_outputs` handshake is the single most-tested mechanic. The model never runs your code; it *requests* a call and waits for *you* to return the result. Built-in tools (Code Interpreter, File Search) run server-side and do **not** pause for `requires_action`.

| Tool type | Who executes it | Pauses the run? |
|---|---|---|
| **Function calling** | Your code | Yes (`requires_action`) |
| **Code Interpreter** | Foundry (sandboxed) | No |
| **File Search** | Foundry (RAG over uploads) | No |
| **OpenAPI / connected tools** | Foundry via connection | No |

### Memory and Threads

Memory in Agent Service is **the thread**. Each thread accumulates messages and the service handles context; you reuse a `thread.id` to continue a conversation, and you create a new thread to start fresh. There is no need to re-send prior turns.

- **Thread = durable memory** for one conversation (one user, one case).
- **Run = one processing pass** over the thread by an agent.
- **Run steps** = the granular record (each tool call, each model message) — your observability goldmine.

For longer-horizon memory (facts that should persist *across* threads — a customer's preferences, a policy summary), the pattern is to **persist a summary yourself** (e.g., to Cosmos DB or a vector store) and re-inject it into a new thread's first message, or expose it as a **File Search** tool. The exam distinguishes *conversation memory* (the thread, automatic) from *long-term knowledge* (your store, deliberate).

### Approval and Safety Guardrails

Agentic systems act, so guardrails are graded. Three layers AI-103 expects you to name:

1. **Instruction-level guardrails** — refusal rules and escalation paths baked into `instructions` ("never approve > $10k yourself").
2. **Human-in-the-loop approval** — for high-impact tool calls, *don't* auto-submit tool outputs. Surface the proposed call to a human, get approval, then call `submit_tool_outputs`. The `requires_action` pause is the natural approval gate.
3. **Platform safety** — **Azure AI Content Safety** (Prompt Shields against jailbreak/indirect-prompt-injection, harm categories) and **Foundry guardrails/RAI policy** on the model deployment. Indirect prompt injection through tool/RAG content is a specifically tested risk for agents.

🚨 **Trap on the exam:** "The agent auto-executes any tool it wants, including refunds and deletions." For irreversible/high-value actions the correct design is a **human approval gate at the `requires_action` boundary**, plus least-privilege on the tool's own credentials.

### Evaluation and Observability

You cannot ship an agent you can't measure. Two halves:

**Evaluation** — the **Azure AI Evaluation SDK (`azure-ai-evaluation`)** plus Foundry's evaluators score agent behavior, including agent-specific evaluators:

| Evaluator | What it checks |
|---|---|
| **Intent Resolution** | Did the agent correctly understand what the user wanted? |
| **Tool Call Accuracy** | Did it pick the right tool with the right arguments? |
| **Task Adherence** | Did it follow its instructions / stay in scope? |
| **Groundedness / Relevance / Coherence / Fluency** | The standard quality set (carry over from RAG) |
| **Safety (Hate/Sexual/Violence/Self-Harm, Jailbreak)** | Content Safety categories |

**Observability** — agent runs emit **OpenTelemetry traces** that flow to **Application Insights** (wired through the Foundry project). You inspect **run steps** to see every reasoning step and tool call, latency, and token cost per step. "Trace why the agent called the wrong tool" → read the **run steps** + the Application Insights trace.

🎯 **Exam tip:** Match the verb to the surface — *score quality* → **Evaluation SDK / Foundry evaluators**; *debug a live run* → **run steps + OpenTelemetry → Application Insights**.

### Single-Agent vs Multi-Agent Orchestration

When does one agent become a team? The heuristic the exam rewards:

| Signal | Lean single-agent | Lean multi-agent |
|---|---|---|
| Number of distinct skills | One coherent job | Several specialized jobs (triage / lookup / draft) |
| Tool count per turn | Few | Many, naturally grouped |
| Instruction length | Manageable | Bloated, contradictory |
| Need for separation of duties | Low | High (e.g., a "drafter" must not also approve) |
| Reusability | N/A | Agents reused across workflows |

Multi-agent orchestration in Foundry uses **connected agents** (one agent calls another agent as a tool) or an **orchestrator agent** that delegates to specialist agents and composes their outputs. Common topologies:

| Topology | Shape | Use when |
|---|---|---|
| **Orchestrator–worker** | A planner agent delegates sub-tasks to specialists | Clear decomposition (Maya's desk) |
| **Sequential (pipeline)** | Agent A → Agent B → Agent C | Each stage transforms the last (extract → reason → write) |
| **Hand-off / routing** | A router picks the right specialist | One of N specialists fits each request |
| **Group chat / collaborative** | Agents iterate together until done | Open-ended tasks needing debate/critique |

🚨 **Trap on the exam:** "More agents is always better." Multi-agent adds latency, cost, and failure surface. Use it when the work genuinely decomposes into separable roles — otherwise a single well-instructed agent is cheaper and more reliable.

### 🧩 Worked Example: A Three-Agent Claims Workflow

Maya's production design — the same scenario as the Capstone. An **orchestrator** owns the conversation and delegates to three connected specialists.

```python
from azure.ai.projects import AIProjectClient
from azure.ai.agents.models import FunctionTool, ConnectedAgentTool
from azure.identity import DefaultAzureCredential

project = AIProjectClient(endpoint=PROJECT_ENDPOINT, credential=DefaultAzureCredential())

# 1) Specialist: order/policy lookup (function tool)
lookup = FunctionTool(functions={lookup_policy, lookup_order})
order_agent = project.agents.create_agent(
    model="gpt-4o", name="lookup-specialist",
    instructions="ROLE: data retriever. Use the lookup tools. Never invent policy data.",
    tools=lookup.definitions,
)

# 2) Specialist: drafter (grounded on policy docs via File Search)
from azure.ai.agents.models import FileSearchTool
files = FileSearchTool(vector_store_ids=[POLICY_VECTOR_STORE_ID])
drafter = project.agents.create_agent(
    model="gpt-4o", name="reply-drafter",
    instructions=("ROLE: policy-correct writer. GOAL: draft the customer reply grounded "
                  "ONLY in retrieved policy text. Cite the clause. Do NOT promise approvals."),
    tools=files.definitions,
)

# 3) Orchestrator: delegates to the two specialists as connected-agent tools
order_conn  = ConnectedAgentTool(id=order_agent.id, name="lookup_specialist",
                                 description="Looks up order status and policy entitlements.")
draft_conn  = ConnectedAgentTool(id=drafter.id, name="reply_drafter",
                                 description="Writes the grounded customer reply.")

orchestrator = project.agents.create_agent(
    model="gpt-4o", name="claims-orchestrator",
    instructions=(
        "ROLE: claims desk supervisor. GOAL: resolve the customer's claim end to end.\n"
        "PLAN: (1) call lookup_specialist for order + entitlement; "
        "(2) if claim_value > 10000 OR entitlement is unclear, STOP and escalate to a human; "
        "(3) otherwise call reply_drafter to write the grounded reply; (4) return the draft.\n"
        "GUARDRAIL: never approve a payout yourself; you only triage and draft."
    ),
    tools=[*order_conn.definitions, *draft_conn.definitions],
)

# Run the whole team through ONE thread
thread = project.agents.threads.create()
project.agents.messages.create(thread.id, role="user",
    content="Claim on order A-4471: phone screen cracked, asking $480 repair.")
run = project.agents.runs.create_and_process(thread.id, agent_id=orchestrator.id)

# Observability: inspect what each agent did
for step in project.agents.run_steps.list(thread.id, run.id):
    print(step.type, step.status)   # tool_calls / message_creation, per delegated agent
```

What this example demonstrates, point by point, against the domain:

- **Single + multi-agent**: three single agents composed into a multi-agent system via `ConnectedAgentTool`.
- **Roles / goals / instructions**: each `instructions` block is ROLE → GOAL → RULES.
- **Function calling + tool schemas**: `lookup-specialist` uses `FunctionTool` (JSON-schema tools your code executes).
- **Memory / threads**: one shared `thread` carries state across the whole interaction.
- **Approval & safety guardrails**: the orchestrator's "STOP and escalate if > \$10k" is the human-in-the-loop gate; the drafter is grounded via File Search and forbidden from promising approvals.
- **Evaluation + observability**: `run_steps.list(...)` exposes each delegated agent's actions for tracing; pair with the Evaluation SDK's Tool Call Accuracy + Task Adherence evaluators and Application Insights traces.

🎯 **Exam tip:** A "connected agent" is just *an agent exposed to another agent as a tool*. If a question asks how one Foundry agent delegates to another without you writing custom orchestration glue, the answer is **`ConnectedAgentTool`**.

### Quick Reference: Agentic Domain at a Glance

| Need | Foundry / SDK answer |
|---|---|
| Create a stateful assistant | `project.agents.create_agent(...)` |
| Persistent conversation memory | a **thread** (`threads.create`, reuse `thread.id`) |
| Let the model call your code | **Function calling** (`FunctionTool` + `requires_action` → `submit_tool_outputs`) |
| Server-side RAG over files | **File Search** tool (vector store) |
| Server-side Python/data tasks | **Code Interpreter** tool |
| One agent delegates to another | **`ConnectedAgentTool`** (connected/multi-agent) |
| High-impact action approval | human gate at the `requires_action` pause |
| Block jailbreak / injection | **Content Safety Prompt Shields** + RAI policy on the deployment |
| Score agent quality | **`azure-ai-evaluation`** (Intent Resolution, Tool Call Accuracy, Task Adherence) |
| Debug a live agent run | **run steps** + **OpenTelemetry → Application Insights** |

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

1. **Enterprise chat over Azure AI Search + Azure OpenAI**, Foundry chat, On Your Data, hybrid+semantic
2. **Document processing pipeline**, Document Intelligence → AI Search → OpenAI summaries
3. **Multilingual support agent**, Translator front + CLU + OpenAI back
4. **Voice-enabled copilot**, Speech → Bot → OpenAI → Speech
5. **Agentic workflow**, Foundry Agent Service with code interpreter + file search + function calling

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
| "Prompt flow IS Semantic Kernel" | Different things, prompt flow is visual; SK is code SDK |
| "Agents and bots are the same" | Bot Service hosts conversations; an Agent decides when to use tools/files |
| "Fine-tune the model before RAG" | RAG first; fine-tune only when style/format remains the gap |
| "Evaluation must use Microsoft metrics" | Built-in or fully custom |
| "Model catalog only has Microsoft models" | Llama, Mistral, Cohere, NVIDIA, plus open-source |

---

## 🚨 Exam Traps

1. **Hub vs Project**, Hub = shared infra. Project = app workspace.
2. **MaaS vs MaaP**, MaaS = serverless pay-per-token. MaaP = managed compute you scale.
3. **Prompt flow variants** = A/B testing prompts.
4. **Groundedness** is BOTH an evaluation metric AND a Content Safety API.
5. **Agent Service** is the modern path for tool-using assistants, be familiar with file_search + code_interpreter + function tools.
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
| **MaaS** | Models-as-a-Service, serverless pay-per-token |
| **MaaP** | Models-as-a-Platform, managed compute deployment |
| **Prompt flow** | Visual DAG orchestrator for LLM apps |
| **Variant** | Alternative version of a prompt node, used for A/B testing |
| **Evaluation** | Scored test runs (groundedness, relevance, coherence, fluency, similarity, safety, custom) |
| **Agent Service** | Foundry's assistants-style API with tools (code interp, file search, function calling) |
| **Thread / Run / Message** | Agent Service primitives |
| **Run step** | Granular record of one action in a run (a tool call or model message); the observability unit |
| **`azure-ai-projects` / `azure-ai-agents`** | The SDKs for Foundry Agent Service (`AIProjectClient` + tool/thread/run models) |
| **Function calling** | Model requests a JSON-schema-described function; run pauses at `requires_action` for you to `submit_tool_outputs` |
| **Connected agent** | An agent exposed to another agent as a tool (`ConnectedAgentTool`); the basis of multi-agent orchestration |
| **Orchestrator–worker** | Multi-agent topology: a planner agent delegates sub-tasks to specialist agents |
| **Agent evaluators** | Intent Resolution, Tool Call Accuracy, Task Adherence (via `azure-ai-evaluation`) |
| **Semantic Kernel** | Open-source orchestration SDK (C#/Python/Java) |
| **Plugin / Function (SK)** | A callable unit (native or prompt-based) the kernel orchestrates |
| **Planner** | SK component that builds multi-step plans |
| **On Your Data** | Native Azure OpenAI RAG over your data sources |
| **Hybrid + semantic** | The RAG retrieval gold standard for Azure AI Search |
| **Reflection / ReAct / Plan-Execute** | Agent reasoning patterns |

---

## 📖 Case Study, GitHub Copilot's evolution on Azure (2021–2024)

**Situation.** GitHub Copilot first announced as a technical preview in June 2021, then GA for individuals in June 2022 and GA for Business in December 2022 (per the GitHub blog) runs on Azure OpenAI infrastructure as a flagship example of "build a real GenAI app at planetary scale." By 2024 (GitHub Universe 2024 keynote, October 2024), Copilot was used by tens of thousands of organizations and millions of individual developers; GitHub Copilot Workspace and Copilot Chat extended the surface from inline completions to multi-turn coding agents.

**Decision.** Across the 2021–2024 evolution, the engineering decisions map onto every primitive in this module:

- **Model choice** evolved from Codex → GPT-3.5 / GPT-4 → GPT-4o / o-series; each migration was de-risked with Foundry-style **evaluation** runs (large held-out coding datasets, multiple scorers).
- **Prompt flow** patterns (system message + few-shot + retrieved context + temperature tuning + stop sequences) were locked early; variants are A/B-tested behind feature flags.
- **Retrieval** for Copilot Chat layered repository file search, organization-level docs, and (in some product variants) web search, exactly the multi-source pattern Foundry's Agent Service codifies.
- **Tool calling** is central, Copilot Chat decides when to read a file, run a search, or propose a code edit; this is the **ReAct** pattern (Yao et al., ICLR 2023) implemented at production scale.
- **Evaluation** uses both automated metrics (functional correctness, BLEU-style code similarity, security-vulnerability detection) and large-scale human eval; this is what the **Foundry Evaluation** workflow lets enterprise customers do for their own GenAI apps.
- **Content Safety / RAI** controls (Prompt Shields, Protected Material on code, secret-scanning, IP-attribution filters) match the layered mitigation framework from Module 2, and the IP-attribution settlement that followed *Doe v. GitHub* (filed 2022) showed the cost of getting this wrong.

**Outcome.** GitHub Copilot is the most widely deployed AI-pair-programmer in the world by every public count. Studies (e.g., Microsoft Research, 2024) reported developer productivity lifts of 25–55% depending on task type; enterprise adoption included Fortune 500 companies and many regulated industries through Copilot Enterprise. The product remains a daily reference architecture for "GenAI app on Azure at scale", and the legal + safety + IP saga it created (2022 lawsuit, 2023 settlement direction, 2024 attribution improvements) is the cautionary tale every AI engineer should study.

**Lesson for the exam / for practitioners.** Foundry is not just a portal, it's the *architecture pattern* the GitHub Copilot team had to build from scratch in 2021 and that Microsoft has now productized. Every Foundry primitive (hub, project, connection, model catalog, prompt flow, variant, evaluation, agent service, monitoring) maps to a decision the Copilot team made the hard way. When you build with Foundry, you inherit those lessons.

**Discussion (Socratic).**
- Q1: GitHub Copilot's design favored *tool-using agents* (Copilot Chat) over pure auto-complete by 2023–2024. Build the argument for the *opposite* path "stay inline-completion-only, never agent" and walk through where each architecture is correct.
- Q2: Foundry's **Hub → Project** separation is intentional. Argue both sides at a Cornell systems-engineering review: when is the extra layer (Hub) worth its complexity, and when does it just slow down a small team?
- Q3: Copilot's IP-attribution filter (Protected Material on code) catches when a completion matches public source code. Argue both sides at a Stanford operations review: should *all* generative AI tools have a "this output matches a known source" filter on by default, or is that an undue burden? Cite Microsoft RAI Standard v2 (2022) and the EU AI Act (2024).

---

## 💬 Discussion, Socratic prompts

1. **Hub vs Project, when to split.** A startup launching one GenAI app: do they need a Hub? A 50-team enterprise: how many Hubs and how many Projects? Defend your topology, citing reuse, RBAC blast-radius, and connection sprawl.
2. **MaaS vs MaaP for non-Microsoft models.** A team wants to deploy Llama 3 for a specific RAG application. They consider MaaS (serverless pay-per-token), MaaP (managed compute they scale), and Azure OpenAI fine-tuned GPT-4o-mini. Walk through cost + latency + operational-burden + lock-in.
3. **Prompt flow vs Semantic Kernel.** Both can orchestrate the same LLM + tools. Argue both sides: when does the *visual DAG* of prompt flow beat the *code SDK* of Semantic Kernel, and vice versa? Where do you draw the line at a mature engineering org with strong CI/CD?
4. **Evaluation as the release gate.** Foundry's Evaluation workflow is "nice to have" for many teams. Argue the case that it should be a *gate*, no model upgrade ships without passing your eval set. Counter the case that it's wasteful. Where's the principled line?
5. **Agent ReAct vs Plan-and-Execute.** Yao et al. (2023)'s ReAct interleaves reasoning and tool calls. Wei et al. (2022)'s chain-of-thought is the precursor. Plan-and-Execute first builds a plan, then runs each step. For a complex insurer-claims workflow (the Capstone scenario), defend a choice. What does that choice cost you when the model's plan is wrong?

---

## ✅ Module 8 Summary

You now know:

- 🏢 Azure AI Foundry, hubs, projects, connections, model catalog
- 🌊 Prompt flow, visual orchestration with variants
- 🧪 Evaluation metrics + workflows
- 📈 Production monitoring + drift detection
- 🧩 The reference RAG architecture and its quality knobs
- 🤖 Agent Service, tools (file search, code interpreter, functions) + threads
- 🧠 The heaviest AI-103 domain: single- and multi-agent orchestration on Foundry Agent Service (roles/goals/instructions, function-calling + tool schemas, memory/threads, approval + safety guardrails, evaluation + observability) with `azure-ai-projects` / `azure-ai-agents`
- 🛠️ Semantic Kernel basics (kernel, plugin, planner)
- 🏗️ Decision matrix for building any GenAI app
- 🚨 Hub vs Project, MaaS vs MaaP, prompt flow vs SK
- 📖 GitHub Copilot's 2021–2024 evolution as the canonical "GenAI at scale" reference architecture

**Next steps:**
1. 🎥 Watch [Videos.md](./Videos.md)
2. ✏️ Take [Quiz.md](./Quiz.md)
3. 📋 Review [Cheat-Sheet.md](./Cheat-Sheet.md)
4. 🧪 Take [Practice Exam 2](../Practice-Exams/Practice-Exam-2.md)
5. 🧪 Then [Final Mock Exam](../Practice-Exams/Final-Mock-Exam.md)
6. 🏛️ Then attempt the **course [Capstone Project](../Capstone-Project.md)**, production-grade insurer claims workflow
7. 📅 Book AI-103. You're ready.

---

> **Where this leads.**
> - Inside this course: This module *is* the apex. The [Capstone Project](../Capstone-Project.md) at the course root applies Modules 1–8 to a real insurer-claims scenario.
> - Cross-course: [`07-AWS-AI-Practitioner`](../../07-AWS-AI-Practitioner/) Module 8 covers Bedrock Agents for cross-cloud; [`15-AI-Marketing-Practitioner`](../../15-AI-Marketing-Practitioner/) and [`17-AI-Marketing-Entrepreneur`](../../17-AI-Marketing-Entrepreneur/) cover GenAI-product strategy from the marketing/business angle.
> - Practice: Practice Exam 2 has ~8 questions from this module; Final Mock has full Foundry case studies that revisit every prior module.

---

## 📚 Citations & Named References

- **Vaswani et al. (2017).** *Attention Is All You Need.* NeurIPS, transformer foundation under every Foundry-deployed model.
- **Brown et al. (2020).** *Language Models are Few-Shot Learners.* NeurIPS (GPT-3), in-context-learning lineage.
- **Wei et al. (2022).** *Chain-of-Thought Prompting Elicits Reasoning in Large Language Models.* NeurIPS 2022.
- **Yao et al. (2023).** *ReAct: Synergizing Reasoning and Acting in Language Models.* ICLR 2023, the agent-loop pattern.
- **Bai et al. (2022).** *Constitutional AI: Harmlessness from AI Feedback.* (Anthropic), alternative alignment lineage worth knowing.
- **Microsoft Responsible AI Standard v2** (June 2022), drove the layered Foundry safety + evaluation surface.
- **NIST AI RMF 1.0** (January 2023), the framework Foundry's monitoring + evaluation aligns to.
- **EU AI Act** (Reg (EU) 2024/1689, June 2024), foundation-model and high-risk-system obligations.
- **GitHub blog announcements** (June 2021 preview, June 2022 GA, December 2022 GA Business; verified 2026-05).
- **GitHub Universe 2024** keynote (October 2024), Copilot evolution.
- **Microsoft Mechanics (2024).** *"Azure AI Foundry deep dive"* and *"Agent Service walkthrough"* episodes.
- **Sarah Bird (Microsoft, Responsible AI).** Build 2024 + RSA 2024 talks on layered mitigation.
- **Doe v. GitHub** (2022 lawsuit; 2023 settlement direction), the IP-attribution cautionary tale.

---

## 📚 Further Reading (Optional)

- 📖 [Azure AI Foundry docs](https://learn.microsoft.com/en-us/azure/ai-foundry/)
- 📖 [Prompt flow](https://learn.microsoft.com/en-us/azure/ai-studio/how-to/prompt-flow)
- 📖 [Evaluations](https://learn.microsoft.com/en-us/azure/ai-studio/concepts/evaluation-metrics-built-in)
- 📖 [Azure AI Agent Service](https://learn.microsoft.com/en-us/azure/ai-services/agents/overview)
- 📖 [Semantic Kernel](https://learn.microsoft.com/en-us/semantic-kernel/overview/)
- 📖 [Model catalog](https://learn.microsoft.com/en-us/azure/ai-studio/how-to/model-catalog-overview)
- 📖 [RAG reference architectures](https://learn.microsoft.com/en-us/azure/architecture/ai-ml/architecture/baseline-openai-e2e-chat)
