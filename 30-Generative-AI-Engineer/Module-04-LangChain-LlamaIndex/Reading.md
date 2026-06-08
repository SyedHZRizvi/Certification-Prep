# Module 4: LangChain, LlamaIndex & LangGraph 🦜🦙

> **Why this module matters:** In 2026, almost every production GenAI system that isn't built directly on raw API SDKs is built on one of these three frameworks. They are the SQLAlchemy, Django, and Kubernetes of GenAI, opinionated, occasionally annoying, and absolutely essential to learn before you build anything serious. This module is the engineering of choosing one (or several), and not regretting it 6 months later.

> **Prerequisites for this module.** You should be comfortable with:
> - Modules 1–3
> - Python decorators, context managers, and async/await
> - At least basic LangChain or LlamaIndex exposure (a "hello world" tutorial)

---

## 🎬 A Story: Why a 4-person Startup Migrated From LangChain to LlamaIndex (and Back)

April 2024. A four-person YC startup shipping an AI-powered legal-document assistant. The engineering lead let's call her Priya built v1 on LangChain because that's what the rest of the team had already used in side projects. Six weeks in, with a working demo, Priya started fielding complaints from the team: "LangChain is too magic." "I can't tell what's happening inside a Chain." "Our retrieval pipeline has fifteen wrapper objects and I can't debug any of them."

Priya spent a weekend rewriting the core retrieval pipeline in LlamaIndex. The code became *visibly* simpler. The query engines had clearer composition. The team cheered.

Then they tried to add a tool-calling agent that booked court-appearance scheduling, and discovered LlamaIndex's agent abstractions, while perfectly good, were *less mature* than LangChain's at that moment for the multi-step tool-calling-with-stateful-memory pattern they needed.

Final architecture (still in production at the time of writing): **LlamaIndex for the RAG / data layer**, **LangChain (specifically LangGraph) for the agent / orchestration layer**, **direct provider SDKs for the parts that needed fine control**. Three frameworks coexisting in one codebase, each used where it's strongest.

This is the real lesson of Module 4. There is no "right" framework. There are tools with overlapping strengths, and the engineer who can articulate *when each is right* is the one who ships.

---

## 🦜 LangChain (and LCEL, LangGraph)

LangChain is the **most-deployed** GenAI framework as of 2026. It started in 2022 as a way to chain LLM calls together; today it's a sprawling ecosystem with three layers you need to know:

### Layer 1, LangChain Core (the abstractions)

The building blocks: `Runnable`, `PromptTemplate`, `OutputParser`, `Embeddings`, `VectorStore`, `Retriever`, `Tool`, `BaseChatModel`. Everything implements `Runnable`, which defines `.invoke()`, `.batch()`, `.stream()`, `.ainvoke()`, etc. The composition glue is `|` (pipe).

### Layer 2, LCEL (LangChain Expression Language)

LCEL is *the* way to compose chains in modern LangChain. A chain looks like Unix pipes:

```python
from langchain_core.prompts import ChatPromptTemplate
from langchain_anthropic import ChatAnthropic
from langchain_core.output_parsers import StrOutputParser

prompt = ChatPromptTemplate.from_template(
    "Translate this to Korean: {text}"
)
model = ChatAnthropic(model="claude-3-5-sonnet-20241022")
parser = StrOutputParser()

chain = prompt | model | parser

chain.invoke({"text": "Hello, world!"})
```

The pipe is **structural composition**, the output of the left side becomes the input of the right. Every chain is a Runnable; every Runnable supports streaming, batching, async, and tracing for free.

The RAG chain from Module 3, in LCEL:

```python
from langchain_core.runnables import RunnablePassthrough
from langchain_core.prompts import ChatPromptTemplate

prompt = ChatPromptTemplate.from_template("""
Answer using only the context.

Context:
{context}

Question: {question}
""")

rag_chain = (
    {"context": retriever | format_docs, "question": RunnablePassthrough()}
    | prompt
    | model
    | parser
)

rag_chain.invoke("How do I refund a partial subscription charge?")
```

The `{}` dictionary on the left is *parallel*: `retriever | format_docs` runs concurrently with `RunnablePassthrough()`, and both feed into the prompt.

### Layer 3, LangGraph (stateful, looping, multi-actor)

LCEL is a directed acyclic graph (DAG), great for linear pipelines, no good for *loops*. LangGraph adds cycles, conditional branching, persistent state, and human-in-the-loop pause/resume. It's the framework most modern LangChain agents are built on.

```python
from langgraph.graph import StateGraph, END
from typing import TypedDict

class State(TypedDict):
    query: str
    retrieved: list[str]
    answer: str
    grade: float

def retrieve_node(state: State) -> State:
    state["retrieved"] = retriever.invoke(state["query"])
    return state

def generate_node(state: State) -> State:
    state["answer"] = llm.invoke(format_prompt(state))
    return state

def grade_node(state: State) -> State:
    state["grade"] = grade_relevance(state["query"], state["retrieved"])
    return state

def should_continue(state: State) -> str:
    return "regenerate" if state["grade"] < 0.6 else "done"

g = StateGraph(State)
g.add_node("retrieve", retrieve_node)
g.add_node("grade", grade_node)
g.add_node("generate", generate_node)
g.set_entry_point("retrieve")
g.add_edge("retrieve", "grade")
g.add_conditional_edges("grade", should_continue, {
    "regenerate": "retrieve",
    "done": "generate",
})
g.add_edge("generate", END)
app = g.compile()

app.invoke({"query": "..."})
```

This is **CRAG-shaped**, retrieve, grade, regenerate if weak, generate if good. LangGraph makes this kind of control flow first-class.

### LangChain Agents

Three lineages:

- **Legacy AgentExecutor** (the original; widely deprecated for new work)
- **LangGraph agents**, `create_react_agent`, `create_tool_calling_agent`, custom graphs
- **Pre-built LangGraph templates**, `langgraph.prebuilt` includes ReAct, SQL-agent, etc.

The agent loop in pseudo-code:

```
while not done:
  llm_response = llm.invoke([system, user_msg, *history])
  if llm_response.tool_calls:
    for tc in llm_response.tool_calls:
      result = tool_registry[tc.name](**tc.args)
      history.append(ToolMessage(content=result, tool_call_id=tc.id))
  else:
    return llm_response.content
```

This loop is built into LangGraph's `tools_condition`. Setting it up by hand is good practice; using the helper in production is good engineering.

### LangChain Memory

| Memory class | What it stores | When to use |
|--------------|----------------|-------------|
| `ConversationBufferMemory` | Full transcript | Short chats (< 8K tokens) |
| `ConversationBufferWindowMemory` | Last N turns | Fixed-window chat |
| `ConversationSummaryMemory` | LLM summary | Long chats, single user |
| `ConversationSummaryBufferMemory` | Recent buffer + older summary | Production default |
| `VectorStoreRetrieverMemory` | Vector-indexed turns; semantic recall | Long-term assistant with episodic memory |

LangGraph's `MemorySaver` (and `PostgresSaver` for prod) persists the entire graph state across runs, usually better than the older Memory classes for any serious agent.

### LangSmith, the eyes

The LangChain-team observability product. Free for hobby use; usage-based for teams. Drop-in tracing for every LCEL chain and LangGraph run; supports prompt playgrounds, dataset-based evals, A/B prompt rollouts. We cover observability in Module 9; LangSmith is the LangChain-default choice.

### LangServe and LangGraph Cloud

Production deployment: `LangServe` wraps any Runnable as a FastAPI endpoint; `LangGraph Cloud` hosts graphs with managed state stores. Useful, opinionated, optional.

---

## 🦙 LlamaIndex

LlamaIndex started as "GPT Index" in late 2022, focused specifically on **connecting LLMs to your data**. Today it's the most-mature framework for *data ingestion and RAG*.

### Core primitives

| Primitive | What it does |
|-----------|--------------|
| `Document` | A unit of input (file, web page, DB row) |
| `Node` | A chunk with metadata |
| `NodeParser` | Chunking strategy (sentence-window, semantic, hierarchical, etc.) |
| `Index` | Structure over Nodes, Vector, Tree, KG, List, Document Summary |
| `Retriever` | Strategy over an Index, vector, BM25, hybrid, recursive |
| `QueryEngine` | Retriever + response synthesis |
| `ChatEngine` | Query engine + conversation memory |
| `Agent` | LLM-driven controller over tools (including QueryEngines as tools) |

### A typical LlamaIndex RAG

```python
from llama_index.core import VectorStoreIndex, SimpleDirectoryReader
from llama_index.core.node_parser import SentenceSplitter

documents = SimpleDirectoryReader("./docs").load_data()
parser = SentenceSplitter(chunk_size=512, chunk_overlap=128)
nodes = parser.get_nodes_from_documents(documents)

index = VectorStoreIndex(nodes)
query_engine = index.as_query_engine(similarity_top_k=10)
response = query_engine.query("How do I refund a partial charge?")
print(response)
print(response.source_nodes)  # the chunks that grounded the answer
```

LlamaIndex's *killer feature* is **index variety**. Beyond the standard vector index, it natively supports:

| Index type | What it's good at |
|------------|--------------------|
| **VectorStoreIndex** | The standard RAG default |
| **DocumentSummaryIndex** | Stores per-doc summaries; route to docs first, then drill in |
| **TreeIndex** | Hierarchical summarization; great for very long docs |
| **KeywordTableIndex** | Keyword-driven; complements vector |
| **KnowledgeGraphIndex** | Auto-extracts entities + relations; subgraph retrieval |
| **PandasIndex / SQLStructStoreIndex** | Natural-language queries over structured data |
| **Composable Graph** | Multiple indices stacked; query engines compose |

### Advanced retrieval in LlamaIndex

- **SentenceWindowNodeParser**, embed each sentence; retrieve sentences but pass the *surrounding window* to the LLM (better than chunk-only)
- **HierarchicalNodeParser** + **AutoMergingRetriever**, small chunks for retrieval; auto-merge to parent chunks for the LLM
- **Recursive Retrieval**, chunks point to other chunks (or external sources); retrieve hops
- **MetadataReplacement**, replace retrieved-chunk content with full-context for the LLM, leaving the retrieval index small
- **SubQuestionQueryEngine**, automatic decomposition into sub-queries

### LlamaIndex Agents

Two lineages:

- **FunctionCallingAgentWorker** + `AgentRunner`, modern, async, tool-calling, often the right pick
- **ReActAgent**, older ReAct-pattern; still maintained
- **WorkflowAgent / Workflows**, the LlamaIndex equivalent of LangGraph (event-driven, async, multi-step)

### LlamaIndex Workflows

The 2024 addition that competes with LangGraph. Event-driven; you write *step* functions that emit events; the runtime routes events to the next step.

```python
from llama_index.core.workflow import Workflow, step, Event, StartEvent, StopEvent

class Retrieved(Event):
    chunks: list

class GenerateFlow(Workflow):
    @step
    async def retrieve(self, ev: StartEvent) -> Retrieved:
        return Retrieved(chunks=retriever.retrieve(ev.query))

    @step
    async def generate(self, ev: Retrieved) -> StopEvent:
        ans = await llm.acomplete(format_prompt(ev.chunks))
        return StopEvent(result=ans)
```

Async-first; intuitive; less mature than LangGraph but moving fast.

---

## 🆚 LangChain vs LlamaIndex: When to Use Which

| Need | Pick |
|------|------|
| Data ingestion + chunking + index variety | **LlamaIndex** |
| Stateful multi-step agent workflows | **LangChain (LangGraph)** |
| Production-grade observability out of the box | **LangSmith** (LangChain), LlamaIndex integrates Arize/Phoenix |
| Quick RAG prototype with minimal code | Either; LlamaIndex slightly faster to first query |
| Multi-tool agents with conditional branches | LangGraph (more mature) |
| Knowledge graph + structured + unstructured | LlamaIndex (richer indices) |
| Cookbooks for non-LLM tools (Slack, Confluence, GH) | LangChain (huge ecosystem) |
| Workflow/event-driven async pipeline | LlamaIndex Workflows or LangGraph (close to even) |

**The honest answer**: they substantially overlap. Many production teams use **both**, LlamaIndex for the data/index layer, LangGraph for orchestration. Both teams ship updates weekly; what's true today may be different in 6 months.

---

## 🛠️ Tool Calling (the Universal Pattern)

Both frameworks expose tool calling as a first-class primitive. The pattern (modern OpenAI / Anthropic / Gemini / open-source) is the same:

```python
# 1. Define the tool
def get_weather(city: str) -> str:
    """Get the current weather for a city."""
    return weather_api.fetch(city)

# 2. Bind to the model
model = model.bind_tools([get_weather])

# 3. The model emits a structured tool_call
resp = model.invoke([HumanMessage("What's the weather in Seoul?")])
# resp.tool_calls = [{"name": "get_weather", "args": {"city": "Seoul"}, "id": "call_123"}]

# 4. Execute the tool
result = get_weather(**resp.tool_calls[0]["args"])

# 5. Append the result and continue
final = model.invoke([
    HumanMessage("..."), resp,
    ToolMessage(content=result, tool_call_id="call_123")
])
```

This is *the* universal pattern every provider supports it; every framework wraps it. Modular RAG, agents, MCP they all sit on top of tool calling.

### MCP (Model Context Protocol)

Anthropic introduced MCP in November 2024, a standardized server protocol for exposing tools, resources, and prompts to LLM clients. By mid-2025 OpenAI, Google, and most open-source clients had adopted it. The promise: write a tool *once*, every model framework can use it. LangChain and LlamaIndex both have MCP client integrations.

```python
# Tool definitions don't change; the transport does. MCP gives you:
# - stdio, HTTP, WebSocket transports
# - capability negotiation
# - resource discovery
# - prompt templates exposed by the server
```

We cover MCP in Module 6 (multi-agent) and Module 9 (deployment).

---

## 🧱 Direct-SDK vs Framework, When Frameworks Get in the Way

Frameworks add abstractions. Abstractions leak.

**Use direct SDKs when:**
- You need *exact* control over prompt structure, retry logic, or streaming behavior
- Your pipeline is so simple that the framework is more code than the logic itself
- You're hitting framework-level bugs that are faster to bypass than to debug

**Use frameworks when:**
- You're composing 3+ steps
- You need streaming, batching, tracing, caching, retry-with-backoff out of the box
- Your team needs a *shared vocabulary* (LCEL chains, LlamaIndex query engines)
- You'll benefit from the community of cookbooks and integrations

The hybrid is the most common production reality: a thin direct-SDK call for the hot path, a framework for orchestration, both feeding the same observability layer.

---

## 🚨 Anti-patterns

| Anti-pattern | What goes wrong |
|--------------|------------------|
| Pinning to LangChain 0.0.x | The API has been overhauled twice; modern LCEL is the right target |
| Mixing legacy `Chain` (e.g., `RetrievalQA`) with LCEL | Inconsistent debug + tracing |
| Re-implementing what LlamaIndex's SentenceWindow already does | Duplication; you'll get it wrong |
| Building all-in-LangGraph for a 3-step DAG | Use LCEL; reserve graph for cycles |
| Skipping LangSmith/Arize tracing in production | You'll fly blind |
| Stuffing 6 frameworks into one repo | Pick two; rationalize the others |
| Ignoring async support | Both frameworks are async-first; sync calls block on I/O wait |

---

## 🏗️ Lab: Build the Same RAG Twice

Goal: ingest the same 500-document corpus (use the BEIR `nfcorpus` set), build the same RAG end-to-end *twice*:

1. **LangChain (LCEL)**, recursive char split, OpenAI embedding-3-small, FAISS, Cohere Rerank, GPT-4o-mini, LangSmith tracing.
2. **LlamaIndex**, SentenceSplitter, OpenAI embedding-3-small, FAISS, Cohere Rerank as a post-processor, GPT-4o-mini, Arize Phoenix tracing.

Then add a stateful agent loop in **LangGraph** that grades each answer (CRAG-style) and re-retrieves on low confidence.

Deliverables:

- Two complete RAG pipelines, ~150 lines each
- One LangGraph agent loop
- A 1-page reflection: *what was easier in each framework, what was harder, what I'd pick for my next project and why*

---

## 📊 Case Study, Why Replit Built On LangGraph for "Agent" (2024)

**Situation.** Replit's "Agent" their AI tool that scaffolds entire applications from a natural-language spec launched in 2024 to viral acclaim. Internally, the team had built v0 directly on raw API SDKs (Claude + GPT-4 fallback) and quickly hit complexity walls:

- Multi-step workflows (read file → plan → write file → run code → debug) needed *state*
- Long-running tasks needed *persistence*, *resume*, and *human-in-the-loop* approval
- Iteration on the pipeline (which model? which prompt? which tool?) needed *tracing*

**The choice.** They migrated to LangGraph in mid-2024. Why? Because the alternative building a state machine + persistence + tracing + checkpointing from scratch was a multi-month engineering effort, and LangGraph had it day-one.

**The lessons (from their post-mortem blog):**
1. **State is the hardest part.** Every transition needs durable storage; LangGraph's `Checkpointer` handles it.
2. **Human-in-the-loop is essential** for high-stakes code generation. LangGraph's `interrupt_before` and `interrupt_after` patterns made this trivial.
3. **Observability matters more than feature richness.** LangSmith's tracing was the deciding factor, they could see *every* tool call, retry, prompt revision in flight.
4. **Performance is not a framework problem.** The bottleneck was always model latency, never the framework overhead.

**What this means for you, the engineer.** When a problem maps cleanly to a state machine (long-running workflows, agents, multi-step approvals), LangGraph is hard to beat. When it's a linear pipeline, LCEL or LlamaIndex are simpler. Pick by the *shape* of your problem.

---

## ✅ Module 4 Summary

You now know:

- 🦜 LangChain's three layers: Core / LCEL / LangGraph
- 🦙 LlamaIndex's data-first design: Documents / Nodes / Indices / QueryEngines / Agents
- 🆚 When to pick which (and when to use both)
- 🔧 Tool calling, the universal pattern
- 🔌 MCP, the cross-framework tool protocol
- 🧱 Direct-SDK vs framework trade-offs
- 🏗️ LangGraph for stateful, looping, human-in-the-loop workflows
- 🚨 Anti-patterns and the migration path from legacy chains

**Next steps:**
1. 🎥 [Videos.md](./Videos.md)
2. ✏️ [Quiz.md](./Quiz.md)
3. 📋 [Cheat-Sheet.md](./Cheat-Sheet.md)
4. ➡️ Move on: [Module 5, Fine-Tuning, PEFT & LoRA](../Module-05-Fine-Tuning-PEFT-LoRA/Reading.md)

> **Where this leads.**
> - Module 6 uses LangGraph and AutoGen for multi-agent orchestration.
> - Module 7 wires RAGAS into LangSmith/Phoenix.
> - Module 9 covers LangServe, LangGraph Cloud, and self-hosting both frameworks.

---

## 📚 Further Reading (Optional)

- 📖 [LangChain Academy](https://academy.langchain.com/), free, official courses on LCEL, LangGraph, Evals
- 📖 [LlamaIndex Documentation](https://docs.llamaindex.ai/), arguably the best framework docs in the AI ecosystem
- 📖 [LangGraph Documentation](https://langchain-ai.github.io/langgraph/), concepts + how-to guides
- 📖 [MCP Specification](https://modelcontextprotocol.io/), the Anthropic-introduced protocol
- 🎬 LangChain weekly office hours (YouTube)
- 🎬 Jerry Liu's "RAG in production" talks
