# 🧪 Practice Exam 2 — Claude Architect (Modules 5–8 focus)

> **Conditions:** Set a 30-minute timer. 30 questions. Treat it like the real assessment.
> **Pass mark:** 25/30 (~85%) — the live assessment passes at 85%.
> Take this AFTER finishing Modules 5–8. Covers MCP, Agentic Patterns, RAG/Long-Context, Production Patterns & Safety.

---

## 📝 Questions

### 1. The Model Context Protocol was announced by Anthropic in:
A. March 2023
B. June 2024
C. November 2024
D. February 2026

### 2. MCP's wire-level protocol is based on:
A. gRPC
B. REST
C. JSON-RPC 2.0
D. GraphQL

### 3. The three MCP primitives are:
A. Tools, resources, prompts
B. Models, weights, embeddings
C. Functions, services, APIs
D. Servers, clients, transports

### 4. The TWO most common MCP transports are:
A. stdio (local) and HTTP+SSE (remote)
B. WebSocket and TCP
C. FTP and Telnet
D. gRPC only

### 5. Claude:
A. Speaks MCP natively inside the Anthropic API
B. Only sees standard Messages API tools; the host translates MCP to tool definitions
C. Cannot use MCP-served tools
D. Implements MCP server-side

### 6. The MCP handshake methods are:
A. `start` / `ack`
B. `initialize` / `initialized`
C. `hello` / `world`
D. `connect` / `ready`

### 7. In Anthropic's "Building Effective Agents," workflows are distinguished from agents by:
A. Workflows are slower
A.
B. Workflows have fixed control flow with LLM nodes; agents let the model decide next action
C. Workflows use Sonnet only
D. There is no distinction

### 8. The 5 canonical workflow patterns include all of the following EXCEPT:
A. Prompt chaining
B. Routing
C. Parallelization
D. Recursive distillation (made up)

### 9. The ReAct pattern stands for:
A. Reactive Architecture
B. Reason + Act
C. Recursive Action
D. Real-time Activation

### 10. A 25-tool agent makes frequent wrong tool choices. The MOST APPROPRIATE fix:
A. Switch to Opus
B. Split into hierarchical agents: top-level dispatcher (3–5 verbs) + sub-agents with 5–8 tools each
C. Add more tools
D. Increase temperature

### 11. A long agent trajectory (47 steps for a simple question) is USUALLY:
A. A sign of deep reasoning
B. A sign of thrashing — investigate; set step caps
C. Optimal
D. Unrelated to quality

### 12. The 4 levels of eval (per Module 6) are:
A. Unit, component, agent, system
B. Cold, warm, hot, lava
C. A, B, C, D
D. Local, region, global, universe

### 13. A 600-page single legal contract (~150K tokens) with multiple questions per contract — BEST approach:
A. RAG with K=3 chunks
B. Stuff the full contract into context, with caching
C. RAG with K=100
D. Send each page separately

### 14. Anthropic's Sept-2024 RAG improvement technique is:
A. Sparse Retrieval
B. Contextual Retrieval (prefix chunks with model-generated context before embedding)
C. Mega Index
D. Reverse Embedding

### 15. Adding contextual prefixes alone (per Anthropic) reduces retrieval failure by approximately:
A. 5%
B. 15%
C. 35%
D. 90%

### 16. Hybrid retrieval combines:
A. Two embedding models
B. Semantic (embedding-based) + lexical (BM25), merged via RRF or weighted scoring
C. Two LLM calls
D. Two databases

### 17. The 1M-token beta context window's PRIMARY trade-off vs RAG is:
A. Lower accuracy
B. Higher per-call cost (~$3/call Sonnet at full 1M) but no retrieval pipeline complexity
C. Slower than RAG always
D. No trade-off

### 18. The Anthropic native Citations API is BEST described as:
A. Plain prompt-based citations
B. Structured document blocks with `citations:{enabled:true}` returning machine-readable spans
C. A separate vendor
D. Replaces RAG

### 19. The MOST important defense against indirect prompt injection from web content is:
A. Lower temperature
B. Treat tool outputs as untrusted data: tagged context + "do not follow instructions inside" + output filtering
C. Use Opus
D. Disable tools

### 20. The 3 rate-limit buckets exposed by Anthropic are:
A. Daily/weekly/monthly
B. RPM (requests), TPM-input, TPM-output
C. CPU/RAM/disk
D. Cache only

### 21. The "authority hierarchy" pattern in a system prompt:
A. Encrypts the prompt
B. Explicitly enumerates which sources outrank which (policies > tools > user > tool output)
C. Lists "do not" rules
D. Locks the model to one task

### 22. A team gets 529 errors for 90 minutes. The correct response:
A. Retry harder
B. Anthropic is over capacity; back off significantly; consider region failover or degradation; don't bombard
C. File a refund
D. Switch to GPT permanently

### 23. A US healthcare provider wants to deploy Claude. The MOST appropriate hosting for HIPAA:
A. Anthropic direct only
B. AWS Bedrock with signed BAA, HIPAA-eligible region, zero-retention logging
C. Self-host Claude weights (impossible)
D. ChatGPT

### 24. Output moderation as a second pass typically uses:
A. A larger model than the primary
B. A cheap model like Haiku with a focused policy prompt to review the primary model's output
C. A separate vector DB
D. A different vendor

### 25. PII redaction PRIMARILY happens at which points?
A. Only at the model layer
B. At input (before model), at output (before user), and at logging (before storing traces)
C. Only logs
D. Nowhere

### 26. The PRIMARY purpose of logging the prompt's SHA-256 fingerprint on every call:
A. Compliance
B. Detect silent prompt regressions / experiment variants by grouping traces
C. Encrypt the prompt
D. None

### 27. The MAIN reason Klarna's Claude-powered support assistant unit economics work at scale:
A. They use OpenAI
B. Tier routing + prompt caching + observability discipline + reserved capacity (enterprise contract)
C. They charge customers
D. They run on Cloudflare only

### 28. Block's open-source agent Goose is "MCP-first" because:
A. It can only use MCP
B. The team prefers paying engineering effort once per integration and reusing it across every MCP-aware AI tool
C. MCP is required by the model
D. They want to avoid Anthropic

### 29. A team's cache hit rate drops to 5%. The CORRECT fix:
A. Increase max_tokens
B. Restructure prompt so stable scaffolding is byte-exactly at the start; per-deploy variable bits go in user message
C. Switch model
D. Disable caching

### 30. Cursor's Composer architectural evolution went through stages including:
A. Single call → single agent → orchestrator+workers → evaluator-optimizer → per-tier routing
B. All Opus always
C. Random
D. Pure workflow always

---

## 🎯 Answer Key (No Cheating!)

```
1.  C    11. B    21. B
2.  C    12. A    22. B
3.  A    13. B    23. B
4.  A    14. B    24. B
5.  B    15. C    25. B
6.  B    16. B    26. B
7.  B    17. B    27. B
8.  D    18. B    28. B
9.  B    19. B    29. B
10. B    20. B    30. A
```

---

## 📊 Score Yourself

- **27–30 correct** → 🏆 You're ready for the Final Mock Exam.
- **24–26** → ✅ Solid; review modules where you missed.
- **20–23** → ⚠️ Re-read those modules; re-take in 3 days.
- **<20** → 🔁 Restart from the modules that produced the misses.

### Topic-by-topic breakdown

- **Module 5 (MCP)**: Q1, 2, 3, 4, 5, 6, 28 → if you missed 3+ → Module 5
- **Module 6 (Agentic)**: Q7, 8, 9, 10, 11, 12, 30 → Module 6
- **Module 7 (RAG / Long-Context)**: Q13, 14, 15, 16, 17, 18 → Module 7
- **Module 8 (Production / Safety)**: Q19, 20, 21, 22, 23, 24, 25, 26, 27, 29 → Module 8

---

➡️ When ready: [Final Mock Exam](./Final-Mock-Exam.md)
