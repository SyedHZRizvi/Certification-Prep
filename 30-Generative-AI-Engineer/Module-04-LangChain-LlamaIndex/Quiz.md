# ✏️ Module 4 Quiz: LangChain, LlamaIndex & LangGraph

> 26 questions · aim for 22/26.

---

## Questions

### Q1. LCEL chains are composed with which operator? *(Remember)*
A. `+`
B. `|` (pipe)
C. `>>`
D. `.then()`

---

### Q2. The PRIMARY reason to use LangGraph over LCEL: *(Understand)*
A. LangGraph is faster
B. Loops, conditional branching, persistent state, and human-in-the-loop
C. LCEL doesn't support tools
D. LCEL is deprecated

---

### Q3. LlamaIndex's killer feature relative to LangChain is: *(Analyze)*
A. Better LLM wrappers
B. Index variety (DocumentSummary, Tree, KG, Pandas, Hierarchical) for data-first workflows
C. Lower cost
D. More integrations with Slack

---

### Q4. The CRAG-shaped pattern (retrieve → grade → maybe re-retrieve → generate) is BEST built in: *(Apply)*
A. LCEL
B. LangGraph (because of the cycle)
C. Raw provider SDK
D. SQL

---

### Q5. LlamaIndex's `SentenceWindowNodeParser` retrieves: *(Understand)*
A. Whole documents
B. Sentences, but passes the *surrounding window* of context to the LLM
C. Only the first sentence
D. Random spans

---

### Q6. The tool-calling pattern's universal steps are: *(Remember)*
A. (1) define tool (2) bind to model (3) model emits tool_call (4) execute (5) append ToolMessage and continue
B. (1) ask user (2) print (3) exit
C. (1) embed (2) retrieve (3) generate
D. (1) train (2) test (3) deploy

---

### Q7. MCP (Model Context Protocol) was introduced by: *(Remember)*
A. OpenAI
B. Anthropic
C. Google
D. Meta

---

### Q8. A team is building a 3-step linear pipeline (retrieve → rerank → generate). The MOST appropriate primitive: *(Apply)*
A. LangGraph
B. LCEL
C. AutoGen
D. CrewAI

---

### Q9. LlamaIndex's `AutoMergingRetriever` works by: *(Understand)*
A. Merging random chunks
B. Retrieving small leaf chunks; auto-merging back up to parent chunks when enough siblings are retrieved
C. Skipping retrieval
D. Using BM25 only

---

### Q10. LangChain Memory class for "recent buffer + older summary": *(Remember)*
A. ConversationBufferMemory
B. ConversationSummaryBufferMemory
C. VectorStoreRetrieverMemory
D. None

---

### Q11. LlamaIndex's `SubQuestionQueryEngine` automates: *(Understand)*
A. Embedding
B. Query decomposition into sub-queries, each routed to a query engine
C. Streaming
D. Tool calling

---

### Q12. The strongest reason to use BOTH LangChain and LlamaIndex in one codebase: *(Analyze)*
A. To impress reviewers
B. Use LlamaIndex for data ingestion/RAG, LangGraph for stateful agent orchestration
C. They are identical; pick either
D. To avoid lock-in

---

### Q13. LangGraph's `Checkpointer` provides: *(Remember)*
A. Better embeddings
B. Durable state persistence across runs (and resume)
C. Faster LLM calls
D. Free GPUs

---

### Q14. A production team needs human approval before any "write file" tool runs. The LangGraph mechanism: *(Apply)*
A. `interrupt_before` / `interrupt_after` plus checkpointing
B. Set temperature to 0
C. Remove the tool
D. Manual code

---

### Q15. Replit's "Agent" feature in 2024 chose LangGraph PRIMARILY for: *(Analyze)*
A. Cost
B. State + persistence + HITL + tracing out of the box
C. Marketing
D. Latency

---

### Q16. The legacy `RetrievalQA` chain in LangChain is: *(Understand)*
A. The recommended new pattern
B. Deprecated; new code should use LCEL with `{"context": retriever | format, "question": passthrough} | prompt | llm | parser`
C. Required for production
D. Faster than LCEL

---

### Q17. LangServe's role: *(Remember)*
A. Train models
B. Wrap any Runnable as a FastAPI endpoint with streaming + batching
C. Replace LangSmith
D. Provide GPUs

---

### Q18. LlamaIndex Workflows are PRIMARILY an alternative to: *(Understand)*
A. LCEL
B. LangGraph (event-driven async multi-step)
C. Pinecone
D. tiktoken

---

### Q19. Async-first patterns in modern LangChain mean methods like: *(Remember)*
A. `.invoke()` and `.batch()`
B. `.ainvoke()` and `.abatch()` and `.astream()`
C. `.execute()`
D. `.do()`

---

### Q20. The MOST common production reality across teams: *(Evaluate)*
A. Pure LangChain
B. Pure LlamaIndex
C. Mix of frameworks + direct SDKs, picked by problem shape
D. No frameworks

---

### Q21. LlamaIndex's `KnowledgeGraphIndex` differs from a vector index in that it: *(Understand)*
A. Has more vectors
B. Stores LLM-extracted entities + relations; supports subgraph retrieval
C. Uses BM25 only
D. Has no embeddings

---

### Q22. A team building a quick prototype on a 1000-doc corpus and wants first-query in < 30 lines. Most pragmatic: *(Evaluate)*
A. LlamaIndex `VectorStoreIndex` with `SimpleDirectoryReader`
B. Raw HNSWLib + custom prompts
C. AutoGen
D. CrewAI

---

### Q23. The `RunnablePassthrough` in LCEL: *(Understand)*
A. Drops the input
B. Forwards the input unchanged through that branch of the chain
C. Replaces the model
D. Performs reranking

---

### Q24. The framework decision is BEST driven by: *(Evaluate)*
A. Brand familiarity
B. Stack overflow popularity
C. Shape of the problem (linear DAG vs stateful loop vs data-heavy RAG)
D. GitHub stars

---

### Q25. LangGraph's `tools_condition` helper: *(Understand)*
A. Removes tools
B. Routes from the LLM node back to the tool-execution node when the LLM emits tool_calls, or to END otherwise
C. Caches tools
D. Logs tool calls only

---

### Q26. Design challenge: Build the system for a "talk to your codebase" feature (ingest repo → answer questions → can run shell commands with approval). Best architecture: *(Create)*
A. Single LCEL chain
B. LlamaIndex `CodeSplitter` + repository ingestion + Vector + KG indices + LangGraph state machine with tool-calling for shell commands + `interrupt_before` for approvals + LangSmith tracing
C. Raw Anthropic SDK only
D. AutoGen alone

---

## 🎯 Answers + Explanations

### Q1: **B. `|`**
The pipe operator composes Runnables in LCEL.

### Q2: **B. Loops + state + HITL**
LCEL is a DAG. LangGraph adds the cycles + state needed for agents + multi-step workflows.

### Q3: **B. Index variety**
LlamaIndex's identity is "data-first." VectorStoreIndex is just the headline; TreeIndex, KG, SubQuestion, Hierarchical are real differentiators.

### Q4: **B. LangGraph**
The grade-and-loop pattern needs cycles + conditional edges. LCEL can't loop natively.

### Q5: **B. Sentences, with surrounding window passed to LLM**
Retrieve narrowly (sentence-level precision); LLM sees more context.

### Q6: **A. Define / bind / emit / execute / append + continue**
Same across OpenAI, Anthropic, Gemini, open-source, and across frameworks.

### Q7: **B. Anthropic**
Announced November 2024; broadly adopted by 2025.

### Q8: **B. LCEL**
Three linear steps = simple DAG = LCEL is the right tool.

### Q9: **B. Leaf chunks merged to parent when enough siblings retrieved**
Best of both: precise retrieval, full-context generation.

### Q10: **B. ConversationSummaryBufferMemory**
Recent verbatim + older summary. The production default.

### Q11: **B. Decomposition + per-sub-query routing**
"Compare A and B" → ask A's engine, ask B's engine, synthesize.

### Q12: **B. LlamaIndex for data/RAG; LangGraph for orchestration**
The most common production hybrid.

### Q13: **B. Durable state persistence**
SQLite, Postgres, Redis backends; resumable graphs.

### Q14: **A. `interrupt_before` / `interrupt_after` with checkpointing**
The LangGraph human-in-the-loop primitive.

### Q15: **B. State + persistence + HITL + tracing**
From Replit's blog post, the boring infrastructure was the win.

### Q16: **B. Deprecated; use LCEL composition**
`RetrievalQA`, `LLMChain`, `ConversationChain` are legacy. New code uses LCEL.

### Q17: **B. FastAPI wrapper for any Runnable**
Streaming, batching, async, OpenAPI schema generated automatically.

### Q18: **B. LangGraph competitor**
Event-driven, async, multi-step. Different surface; similar capability.

### Q19: **B. `ainvoke`, `abatch`, `astream`**
The `a` prefix marks async. Use them; sync I/O is wasted time.

### Q20: **C. Mix of frameworks + direct SDKs**
Reality wins over purity. Pick by problem shape; rationalize integration.

### Q21: **B. LLM-extracted entities + relations + subgraph retrieval**
Aggregative ("all complaints about X") queries that pure vector can't answer.

### Q22: **A. LlamaIndex `VectorStoreIndex` with `SimpleDirectoryReader`**
~20 lines, first query in minutes.

### Q23: **B. Forwards input unchanged**
Useful when one branch of a parallel `{}` dict needs the raw input.

### Q24: **C. Shape of the problem**
Frameworks aren't religions; pick by fit.

### Q25: **B. Routes from LLM back to tool-execution node OR to END**
The standard agent-loop conditional edge.

### Q26: **B. LlamaIndex CodeSplitter + KG + LangGraph + HITL approvals + tracing**
Real production architecture: data layer in LlamaIndex; orchestration in LangGraph; safety in interrupts; visibility in LangSmith.

---

## 📊 Score Yourself

- 24–26 → 🏆 Framework fluency.
- 21–23 → ✅ Strong; revisit specific gaps.
- 17–20 → ⚠️ Build the lab; that's where the patterns stick.
- <17 → 🔁 Re-do the LCEL + LangGraph videos.

---

## 🃏 Add To Your Flashcards

- LCEL composition with `|`
- LangGraph: nodes / edges / state / checkpointers / interrupts
- LlamaIndex indices (Vector, Tree, KG, DocumentSummary, Pandas, SQL)
- SentenceWindow + AutoMerging + SubQuestion patterns
- Tool calling pattern (5 steps)
- MCP (Anthropic 2024)
- Sync/async method naming

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 5, Fine-Tuning, PEFT & LoRA](../Module-05-Fine-Tuning-PEFT-LoRA/Reading.md)
