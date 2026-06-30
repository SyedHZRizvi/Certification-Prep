# 📋 Module 4 Cheat Sheet: LangChain, LlamaIndex & LangGraph

---

## 🆚 Pick-by-Shape Decision

| Problem shape | Pick |
|----------------|------|
| Linear DAG (3-5 steps) | **LCEL** |
| Stateful loops, agents, HITL | **LangGraph** |
| Data-first RAG with rich index types | **LlamaIndex** |
| Event-driven async pipelines | **LlamaIndex Workflows** or **LangGraph** |
| Quick prototype | **LlamaIndex** (fastest to first query) |
| Custom hot path | **Direct provider SDK** |

---

## 🦜 LCEL Quick Reference

```python
chain = prompt | model | parser
chain.invoke({"text": "..."})
chain.batch([{...}, {...}])
chain.stream({...})
await chain.ainvoke({...})
```

Parallel branches:
```python
{"context": retriever | format, "question": RunnablePassthrough()} | prompt | model | parser
```

---

## 🦙 LlamaIndex Quick Reference

```python
from llama_index.core import VectorStoreIndex, SimpleDirectoryReader
docs = SimpleDirectoryReader("./data").load_data()
index = VectorStoreIndex.from_documents(docs)
qe = index.as_query_engine(similarity_top_k=10)
resp = qe.query("...")
```

Indices:
| Index | What |
|-------|------|
| VectorStoreIndex | RAG default |
| DocumentSummaryIndex | Route to docs, then drill in |
| TreeIndex | Hierarchical summary |
| KeywordTableIndex | Keyword-based |
| KnowledgeGraphIndex | Entities + relations |
| PandasIndex / SQLStructStoreIndex | NL → structured queries |

---

## 🔀 LangGraph Quick Reference

```python
from langgraph.graph import StateGraph, END
g = StateGraph(State)
g.add_node("retrieve", retrieve_fn)
g.add_node("generate", generate_fn)
g.set_entry_point("retrieve")
g.add_edge("retrieve", "generate")
g.add_edge("generate", END)
app = g.compile(checkpointer=MemorySaver())
app.invoke({...}, config={"configurable": {"thread_id": "u1"}})
```

Conditional edges + cycles:
```python
g.add_conditional_edges(
    "grade",
    lambda s: "retry" if s["score"] < 0.6 else "done",
    {"retry": "retrieve", "done": "generate"}
)
```

HITL: `interrupt_before=["risky_tool"]` or `interrupt_after=["plan"]`.

---

## 🔧 Tool Calling (5 Steps)

```
1. def my_tool(x: str) -> str: """docstring matters""" ...
2. model = model.bind_tools([my_tool])
3. resp = model.invoke([HumanMessage(...)])
4. result = my_tool(**resp.tool_calls[0]["args"])
5. final = model.invoke([..., resp, ToolMessage(result, tool_call_id=resp.tool_calls[0]["id"])])
```

---

## 💾 LangChain Memory

| Memory | Use |
|--------|-----|
| `ConversationBufferMemory` | Short chats |
| `ConversationBufferWindowMemory` | Fixed N |
| `ConversationSummaryMemory` | Long, one user |
| `ConversationSummaryBufferMemory` | Recent + summary (prod default) |
| `VectorStoreRetrieverMemory` | Long-term episodic |

Modern preferred: LangGraph's `MemorySaver` / `PostgresSaver`.

---

## 🔌 MCP (Model Context Protocol)

- Anthropic, 2024-11. Cross-framework tool/resource/prompt standard.
- Transports: stdio, HTTP, WebSocket.
- LangChain & LlamaIndex both have MCP client integrations.
- Write tool once → all frameworks consume.

---

## 🚨 Anti-Patterns

| Don't | Do |
|-------|-----|
| Use legacy `RetrievalQA` / `LLMChain` | LCEL composition |
| Build a linear DAG with LangGraph | LCEL is simpler |
| Re-implement SentenceWindow | Use LlamaIndex's |
| Skip async (`.ainvoke`) on I/O-heavy pipelines | Use the `a*` methods |
| Ship without tracing | LangSmith / Phoenix / Arize from day 1 |
| Mix all-in on one framework | Pick the right tool per layer |

---

## 🏆 Exam Power Phrases

✅ Often **right**:

- "LCEL for linear, LangGraph for loops"
- "LlamaIndex for index variety / data ingestion"
- "Tool calling is the universal pattern across providers"
- "LangSmith / Phoenix tracing in production"
- "Use both frameworks where each is strongest"

❌ Often **wrong**:

- "LangChain is deprecated"
- "LlamaIndex doesn't support agents"
- "LangGraph is just LCEL with cycles" (it's also state + persistence + HITL)
- "Pick by GitHub stars"
- "Sync `.invoke()` everywhere"

---

## 🗓️ Memorize Cold

- LCEL `|` pipe / `.invoke / .batch / .stream / .a*`
- LangGraph = nodes + edges + state + checkpointer + interrupt
- LlamaIndex indices: Vector / Tree / KG / DocumentSummary / Pandas / SQL
- SentenceWindow / AutoMerging / SubQuestion / MetadataReplacement
- Tool calling: 5-step universal pattern
- MCP (Anthropic 2024-11)

---

➡️ [Module 5: Fine-Tuning, PEFT & LoRA](../Module-05-Fine-Tuning-PEFT-LoRA/Reading.md)
