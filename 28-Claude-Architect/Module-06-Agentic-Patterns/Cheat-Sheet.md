# 📋 Module 6 Cheat Sheet: Agentic Patterns with Claude

> One page. Tape it next to your loop code. Reference before every "let's add an agent" meeting.

---

## 🪜 Spectrum

```
Workflow ─────────────────────────────────► Agent
Fixed code path; LLM is a node              Model decides next action
Predictable, easy to evaluate               Flexible, hard to evaluate
80% of production "agents"                  20% of production "agents"
```

Bias toward **simplest pattern that works** (Anthropic's published guidance).

---

## 🏗️ The 5 Canonical Workflow Patterns

| Pattern | What | Use when |
|---------|------|----------|
| **Prompt chaining** | Sequential LLM calls feeding next | Task decomposes naturally |
| **Routing** | Classifier dispatches to specialized sub-flows | Distinct intents; cost-tier mix |
| **Parallelization** | N concurrent calls; aggregate | Latency matters; work parallel |
| **Orchestrator-workers** | Lead LLM plans, workers execute, lead integrates | Dynamic sub-task structure |
| **Evaluator-optimizer** | Generator + critic loop | Clear eval criteria; iterative quality |

---

## 🤖 The ReAct Loop (Pseudocode)

```python
messages = [{"role":"user", "content":user_request}]
for step in range(MAX_STEPS):
    r = client.messages.create(model=..., tools=tools, messages=messages, max_tokens=...)
    messages.append({"role":"assistant", "content":r.content})

    if r.stop_reason == "end_turn":
        return r.content[-1].text                       # final

    if r.stop_reason == "tool_use":
        results = execute_in_parallel([...])            # async
        messages.append({"role":"user", "content":results})

raise RuntimeError(f"Did not finish in {MAX_STEPS} steps")
```

---

## 🚧 The 6 Hard Parts (Beyond the Loop)

1. **Step cap**, `MAX_STEPS = 25`
2. **Cost cap**, `MAX_COST_USD = 5.00`
3. **Per-tool timeout**, `tool_timeout = 10s`
4. **Confirmation gates** for destructive actions
5. **Restart-from-checkpoint** for failed runs
6. **Observability**, every step logged

---

## 🧬 Hierarchical Agent (When Tool Surface > 15)

```
ORCHESTRATOR (Sonnet, 3-5 verbs)
  ├── PLANNING SUB-AGENT (focused tools)
  ├── RESEARCH SUB-AGENT (focused tools)
  └── CODING SUB-AGENT (focused tools)
```

Each sub-agent: 5-8 tools max, dedicated system prompt.

---

## 🪜 Scratchpad / Extended Thinking

```text
Before any action, think in <thinking> tags.
List actions in <plan>.
Execute first action.
```

For Claude 4-series: enable `thinking={"type":"enabled", "budget_tokens":2000}` if available.
Cost: more tokens, more latency. Benefit: better hard-reasoning accuracy.

---

## 🧪 Evals, The 4 Levels

| Level | Cheap → Costly | Tools |
|-------|---------------|-------|
| **Unit (per-call)** | Cheap | Deterministic asserts, JSON schema validation |
| **Component (per-tool)** | Medium | Tool-output snapshot tests |
| **Agent (per-trajectory)** | Costly | Full agent runs on golden tasks |
| **System (end-to-end)** | Most costly | Product-flow tests |

Pyramid shape: many unit, few system.

---

## 🧑‍⚖️ LLM-as-Judge Pattern

```text
You evaluate an agent's response.
Rubric:
[1] Correctness? PASS / FAIL with justification.
[2] Policy compliance? PASS / FAIL ...
[3] Tone? PASS / FAIL ...

Customer query: {query}
Agent response: {agent_response}
```

Cheaper than human review, surprisingly well-correlated.

---

## 🧰 Frameworks, Pragmatic Take

| Framework | Use when |
|-----------|----------|
| **Raw Anthropic SDK + 60 lines** | Most cases, maximum control |
| **claude-agent-sdk** | When you want Anthropic-opinionated defaults (step caps, MCP, hooks) |
| **LangChain** | Multi-vendor abstraction; mature RAG bits |
| **LlamaIndex** | RAG-first systems |
| **AutoGen / CrewAI** | Specific multi-agent abstractions |

Anthropic's guidance: **start with raw SDK; reach for a framework only with a specific need**.

---

## ❌ Anti-Patterns

| Anti-pattern | Fix |
|--------------|-----|
| Long trajectories (47 turns) | Step cap; investigate |
| No evals | Build a 30-task holdout set |
| No cost cap | Set $1-5/session max |
| Framework lock-in | Use frameworks only where they earn it |
| Silent retries on tool failure | Surface errors to orchestrator/human |
| No human-in-the-loop for destructive | Confirmation gate + audit log |

---

## 📊 Production Agent Architecture Checklist

```
[ ] MAX_STEPS cap (e.g., 25)
[ ] MAX_COST_USD cap (e.g., $5)
[ ] Per-tool timeout (e.g., 10s)
[ ] Confirmation gates on destructive tools
[ ] Tool-call audit log
[ ] Trace logging (Langfuse / Phoenix / OpenLLMetry)
[ ] Eval suite: 30+ holdout tasks
[ ] LLM-as-judge for quality metrics
[ ] Per-session cost reporting
[ ] Restart-from-checkpoint capability
[ ] Tier routing (Haiku/Sonnet/Opus based on task class)
[ ] System prompts versioned in source control
```

---

## 🏆 Exam Power Phrases

✅ Often **right**:

- "Bias for the simplest pattern that works"
- "Long trajectories are usually thrashing"
- "Hierarchical agents fix too-many-tools problems"
- "Evals are mandatory above hobby scale"
- "Confirmation gates for destructive actions"
- "LLM-as-judge with a clear rubric"

❌ Often **wrong**:

- "More agentic = better"
- "Frameworks are required"
- "Long trajectories = deep reasoning"
- "Evals are optional"
- "Cost caps reduce quality"

---

## 🗓️ Key Facts To Memorize Cold

- 5 patterns: chaining / routing / parallelization / orchestrator-workers / evaluator-optimizer
- ReAct = Reason + Act
- 6 hard parts beyond the loop: step cap / cost cap / tool timeout / confirmation / restart / observability
- Eval levels: unit / component / agent / system
- LLM-as-judge with rubric
- Hierarchical agent rule: split if >15 tools
- claude-agent-sdk = Anthropic's reference implementation
- Module 6 domain: **12% of the assessment**

---

## ✏️ Quick Self-Check

1. 5 canonical workflow patterns? ___
2. The 6 hard parts of an agent loop? ___
3. The 4 levels of evals? ___
4. When to split into hierarchical agents? ___
5. The "Replit lesson"? ___

If you answer all 5 in 60 seconds, you own this module. ✅

---

➡️ [Module 7: RAG & Long-Context](../Module-07-RAG-Long-Context/Reading.md)
