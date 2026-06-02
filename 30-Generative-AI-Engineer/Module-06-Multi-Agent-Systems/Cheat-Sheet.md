# 📋 Module 6 Cheat Sheet: Multi-Agent Systems

---

## ⚖️ When to Multi-Agent

| Use multi-agent | Use single-agent |
|------------------|-------------------|
| Distinct roles + tools | Linear task |
| Naturally parallel | Latency-sensitive |
| Different personas needed (critic/reviewer) | Cost-sensitive |
| Complex multi-step (code gen, research) | Simple Q&A |
| Voting / ensemble worth the cost | One-shot answers |

🎯 **Always:** Build single-agent first. Add agents only when you can write down what each does.

---

## 🧱 Frameworks Side-By-Side

| Framework | Style | Strengths | When |
|-----------|-------|-----------|------|
| **LangGraph** | State graph + supervisor | Mature, observable, HITL | Production |
| **CrewAI** | Role + task | Easy to start | Prototype |
| **AutoGen** | Conversable + code-exec | Code generation | Code teams |
| **OpenAI Agents SDK** | Handoff | OpenAI-native, minimal | OpenAI-first |
| **Anthropic Computer Use** | Sensorimotor | GUI automation | Desktop tasks |
| **MetaGPT / OpenDevin** | SWE-team metaphor | Coding specialists | AI software engineer |

---

## 🤝 Communication Patterns

| Pattern | When |
|---------|------|
| **Supervisor** | Heterogeneous workers, central routing |
| **Hierarchical / Manager-Worker** | Decomposable parallel tasks |
| **Sequential pipeline** | Fixed-order multi-step |
| **Debate / Adversarial** | Contentious / high-stakes correctness |
| **Voting / Ensemble** | Diversity > cost |
| **Reflection / Self-critique** | Single-agent quality boost |

---

## 🛑 Stop Conditions (Mandatory in Prod)

- **max_iterations** (5-10 typical; up to ~30 for code)
- **Budget cap** ($1-$20 per task)
- **Wall-clock cap** (60s-10min)
- **Goal signal** (DONE token, empty tool_calls)
- **Confidence threshold** (supervisor judges)
- **HITL approval** before destructive/expensive actions

---

## 🔧 LangGraph Multi-Agent Skeleton

```python
def supervisor(state):
    decision = llm.invoke(...)  # picks next_agent or "DONE"
    state["next"] = decision
    return state

def researcher(state): ...
def coder(state): ...
def reviewer(state): ...

g.add_node("supervisor", supervisor)
g.add_node("researcher", researcher)
g.add_node("coder", coder)
g.add_node("reviewer", reviewer)
g.set_entry_point("supervisor")
g.add_conditional_edges("supervisor", lambda s: s["next"], {
    "researcher": "researcher",
    "coder": "coder",
    "reviewer": "reviewer",
    "DONE": END,
})
for n in ["researcher", "coder", "reviewer"]:
    g.add_edge(n, "supervisor")
app = g.compile(checkpointer=MemorySaver())
```

---

## 🧰 Tools & State

- **Tool catalog** — versioned registry (MCP or YAML)
- **Shared state** — scope tightly; private CoT
- **Inter-agent messages** — structured JSON envelopes preferred
- **Computer Use** — sandbox + allowlist + screen recording

---

## 🚨 Anti-Patterns

| Don't | Do |
|-------|-----|
| Add more agents to fix a bug | Diagnose first |
| Skip max_iterations | Always cap |
| Share global blob state | Scope tightly |
| "Researcher agent" wrapping a search call | Call it a function |
| No per-agent observability | LangSmith per-node |
| Wide tool access without HITL | `interrupt_before` destructive |
| Same model + temperature for every agent | Mix sizes/temperatures intentionally |

---

## 📊 SWE-bench Multi-Agent Result (Anthropic, 2024)

| Setup | SWE-bench Verified | Cost mult | Latency mult |
|-------|---------------------|------------|---------------|
| Single Claude + tools | ~49% | 1× | 1× |
| Planner + Coder + Reviewer | ~64% | 3-4× | 2-3× |

→ **15-point gap is real for difficult multi-step tasks; trade-off vs cost.**

---

## 🏆 Exam Power Phrases

✅ Often **right**:

- "Build single-agent first; add agents with intent"
- "Always set max_iterations + budget cap"
- "Per-agent tracing in LangSmith / Arize"
- "HITL approval before destructive tools"
- "Multi-agent reduces variance on hard tasks"

❌ Often **wrong**:

- "More agents are always better"
- "AutoGPT is the gold standard"
- "Agents figure out coordination on their own"
- "One observability for all agents is enough"
- "Skip stop conditions"

---

## 🗓️ Memorize Cold

- AutoGPT lesson: scoped > autonomous
- LangGraph supervisor + LangSmith = production multi-agent
- CrewAI: Agent / Task / Crew
- AutoGen: conversable agents + sandboxed code
- Computer Use = sensorimotor agents (Anthropic Oct 2024)
- SWE-bench multi-agent: ~15 pts gain, 3-4× cost
- max_iterations + budget cap is non-negotiable

---

➡️ [Module 7: Evaluation & RAGAS](../Module-07-Evaluation-RAGAS/Reading.md)
