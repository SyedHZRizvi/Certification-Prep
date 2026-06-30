# Module 6: Agentic Patterns with Claude 🧠

> **Why this module matters:** "Agent" is one of the most overloaded words in AI. The technical content of the word the actual *patterns* that make an LLM-driven loop useful in production is small, learnable, and stable. Anthropic published the canonical reference (["Building Effective Agents"](https://www.anthropic.com/research/building-effective-agents), late 2024). This module synthesizes that paper plus 18 months of production learnings into the patterns you must internalize before designing agentic Claude systems.

> **Prerequisites for this module.** You should be comfortable with:
> - Module 4 (tool use)
> - Module 5 (MCP)
> - The general LLM concept of "context" / "state across turns"
> - Some Python or TypeScript familiarity for the loop pseudocode

---

## 📖 A Story: Why Replit Agent Asks "Are You Sure?" 12 Times

Replit launched **Replit Agent** in September 2024. It was an immediate success: prompts like "build me a working Pomodoro timer with Postgres-backed history" produced runnable apps in <10 minutes. The agent ran on Claude (Sonnet, primarily). The product team learned three things very fast.

First: **agents that just keep going produce 8-step failures.** A Claude agent given the prompt "fix the failing tests" might (a) read the test file, (b) read the implementation, (c) edit the implementation incorrectly, (d) re-run tests, (e) see they still fail, (f) "fix" again, destructively, (g) re-run, (h) destroy more code, (i) declare victory while half the test suite is wrong. The model was confidently wrong at every step.

Second: **the fix was not a smarter model.** Sonnet 3.5 → Sonnet 4 made the loop better at *individual decisions*, but it did not change the structural problem: with no checkpoints, an agent compounds its own errors.

Third: **the answer was structured human-in-the-loop checkpoints.** Replit Agent now asks the user for confirmation before destructive actions, before installing dependencies, before running migrations, before deploying. It surfaces a diff and waits. The "Are you sure?" prompts that some users initially found annoying turned out to be the difference between an agent that ships and an agent that wrecks.

The Replit team's published learnings echo what Anthropic documented in "Building Effective Agents": **the smart move is to introduce structure, not to remove it**. This module is about that structure.

---

## 🪜 The Spectrum: Workflow → Agent

Anthropic's framing in "Building Effective Agents" draws a deliberate distinction:

```
Workflow                                       Agent
─────────────────────────────────────────────────────►
Fixed code paths;                              Model decides
human-defined branching;                       its own path;
LLM is just                                    LLM is in
a smart node                                   the loop
```

- **Workflows**, Human-authored DAG (directed acyclic graph) of LLM calls. Step 1 → Step 2 → Step 3, with optional branches. Predictable, easy to debug, easy to evaluate.
- **Agents**, The model decides *what to do next* based on intermediate results, possibly looping. More flexible, harder to debug, harder to evaluate.

Most successful production "agents" are 80% workflow and 20% true agency. Pure-agent loops are the exception (mostly coding agents like Cursor Composer, Replit Agent, Aider). Most business workflows are best served by structured workflows that *call* the model at well-defined points.

🎯 **Exam pattern:** *"A team wants to extract structured data from 10K invoices. Is this a workflow or an agent?"* → **Workflow** (the steps are known). *"A team wants the model to debug a failing integration test of unknown root cause."* → **Agent** (path is open-ended).

---

## 🏗️ The Five Canonical Workflow Patterns (per Anthropic)

The "Building Effective Agents" essay lists five reusable workflow patterns. Every production LLM system you have ever used is some composition of these.

### 1. Prompt chaining

Sequential LLM calls, each feeding the next. Optional gates between steps.

```
User input → LLM call 1 (extract entities)
           → LLM call 2 (validate against DB)
           → LLM call 3 (compose response)
```

Use when: a task decomposes naturally into sequential subtasks; reliability per step is high enough that compounded reliability remains acceptable.

### 2. Routing

A classifier routes input to specialized downstream prompts/models.

```
User input → Router LLM (classify intent)
                ├─ "refund" → Refund prompt/agent
                ├─ "shipping" → Shipping prompt/agent
                └─ "complaint" → Escalation prompt/agent
```

Use when: distinct sub-flows benefit from specialized prompts; you want to send cheap intents to Haiku and complex ones to Sonnet/Opus.

### 3. Parallelization

Multiple LLM calls run in parallel; outputs are aggregated. Two flavors:

- **Sectioning**, different aspects analyzed by different prompts (e.g., security + performance + style)
- **Voting**, same task by N independent prompts, then pick majority or best

Use when: latency matters; you can do work concurrently.

### 4. Orchestrator-workers

A "lead" LLM dynamically breaks a task into sub-tasks and dispatches them to "worker" LLM calls.

```
User input → Orchestrator LLM ("plan the work")
                                 ├─ Worker 1 → result
                                 ├─ Worker 2 → result
                                 └─ Worker 3 → result
              ← Orchestrator integrates results
```

Use when: the structure of subtasks is dynamic and depends on input; coding agents fit this pattern (orchestrator plans the refactor, workers do per-file edits).

### 5. Evaluator-optimizer

A generator LLM produces an output; an evaluator LLM critiques it; the generator revises. Loops until the evaluator approves or a max-iterations cap is hit.

```
Generator → output → Evaluator → "needs improvement: X, Y"
                                 → Generator revises → output → Evaluator → ...
```

Use when: the task has clear evaluation criteria; iterative improvement is feasible; small quality bumps justify multiple calls.

🎯 **Exam pattern:** *"A team builds a feature where the model writes a tweet, then a separate prompt scores it, and the model revises if the score is below a threshold."* → **Evaluator-optimizer.**

---

## 🤖 The True Agent Pattern: ReAct + Tools

Once you actually need a *real* agent (model in the loop, deciding next action), the canonical pattern is **ReAct**, Reason + Act.

```
User: "Find the top 5 GitHub issues mentioning 'memory leak' in our org's repos."

Turn 1, Claude:
  THOUGHT: I need to search GitHub. Let me use the search tool.
  ACTION: search_github(query="memory leak", org="our-org")
  → tool_use block returned

Your code executes: returns 47 results.

Turn 2, Claude (with results in context):
  THOUGHT: 47 results. I need to sort by relevance and pick top 5.
            Let me look at the first 10 in detail.
  ACTION: read_issues(ids=[3221, 3198, 3155, 3142, 3110, 3098, 3076, 3015, 2998, 2987])

Your code returns the issue bodies.

Turn 3, Claude:
  THOUGHT: Now I can synthesize. Issues 3221 and 3155 are the clearest leaks.
            3098 is a perf complaint that's not really a leak.
            Final top 5: [3221, 3198, 3155, 3142, 3076]
  RESPONSE: "Here are the top 5 issues mentioning memory leaks ..."
```

The pseudocode (from Module 4) is the entire loop. What makes it "ReAct" is the explicit *reasoning* before each *action*, typically encouraged via a `<thinking>` scratchpad or via the model's natural tendency to verbalize its plan.

### Implementing ReAct on Claude

You do not need a framework. Anthropic's own `claude-code` is ReAct in a `while` loop. The pattern:

```python
messages = [{"role": "user", "content": user_request}]
for step in range(MAX_STEPS):
    r = client.messages.create(model=..., tools=tools, messages=messages, max_tokens=...)
    messages.append({"role": "assistant", "content": r.content})

    if r.stop_reason == "end_turn":
        return r.content[-1].text          # final answer

    if r.stop_reason == "tool_use":
        tool_results = execute_in_parallel([
            {"type":"tool_result", "tool_use_id": b.id, "content": dispatch(b.name, b.input)}
            for b in r.content if b.type == "tool_use"
        ])
        messages.append({"role":"user", "content": tool_results})

raise RuntimeError(f"Agent did not finish in {MAX_STEPS} steps")
```

The hard parts are not the loop. They are:

1. **Step caps** (MAX_STEPS, e.g., 25) to prevent infinite loops
2. **Per-tool timeouts** so a hung API doesn't stall the whole agent
3. **Cost caps** ($ per session) so a confused agent doesn't run up a $400 invoice
4. **Confirmation gates** for destructive actions (Replit's "are you sure?")
5. **Restart-from-checkpoint** so failed runs don't redo work
6. **Observability** so when something goes wrong, you can replay the loop turn-by-turn

🚨 **Trap on the exam:** *"An agent that takes 47 steps is a sign of a smart agent."*, USUALLY FALSE. Long traces are usually a sign the agent is *thrashing*. Bias to short, high-confidence trajectories.

---

## 🪜 Scratchpad Reasoning

Closely related to ReAct: give the model an explicit space to think before acting. Claude 4 / Sonnet 4.6 supports an **extended thinking** mode (sometimes called "deep thinking" or "reasoning") that explicitly carves out token budget for internal reasoning that is not part of the user-visible response.

Prompting pattern:

```text
Before taking any action, think through your plan in <thinking> tags.
Then list 1-3 actions you will take in <plan> tags.
Then execute the first action.
```

Or, in the API, you may pass a budget hint (where the model exposes it):

```python
response = client.messages.create(
    model="claude-sonnet-4-6",
    max_tokens=4096,
    thinking={"type": "enabled", "budget_tokens": 2000},   # if supported in the API version you're using
    messages=[...]
)
```

The benefits compound on hard tasks (math, planning, complex coding). The cost is more tokens and more latency.

🎯 **Exam pattern:** *"What is the practical effect of enabling 'extended thinking' on Claude 4-series models for a hard math problem?"* → **Better accuracy at the cost of more tokens (latency + dollars). Use selectively.**

---

## 🧬 Hierarchical / Orchestrator Agents

For large open-ended tasks, a single agent loop with 30 tools and 200K of context is often *worse* than a dispatcher + specialists. Pattern:

```
TOP-LEVEL ORCHESTRATOR (Sonnet)
  Tools: spawn_planning_agent, spawn_research_agent, spawn_coding_agent, integrate_results
       │
       ├──► PLANNING SUB-AGENT
       │    Tools: read_brief, list_constraints, propose_milestones
       │
       ├──► RESEARCH SUB-AGENT
       │    Tools: web_search, fetch_url, summarize
       │
       └──► CODING SUB-AGENT
            Tools: read_file, edit_file, write_file, run_tests, bash
```

The orchestrator never directly reads a file. It dispatches the coding sub-agent. The coding sub-agent never web-searches. Each agent has a focused tool surface (3-8 tools) and a focused system prompt.

### Why this works

- **Smaller tool surface per agent** → higher tool-selection accuracy
- **Separated contexts** → the coding agent doesn't have to read research notes; the orchestrator doesn't have to read code
- **Specialized prompting** → each sub-agent's system prompt can be tuned for its job
- **Failure isolation** → a confused sub-agent can be retried without re-running the whole task

Anthropic's `claude-code` implements a version of this with the **Skill** primitive (Anthropic Skills), each skill is a sub-agent flow with its own system prompt and tool subset.

🎯 **Exam pattern:** *"A coding agent has 25 tools and is making bad tool choices. What is the most likely architectural fix?"* → **Split into a hierarchical agent: a top-level dispatcher with 3-5 verbs, and sub-agents with 5-8 tools each.**

---

## 🧪 Evals, The Foundation of Agent Trust

Without evals, "the agent works" is a folk belief. Evals are the structured measurement that turns vibe-based AI into engineered AI.

### Levels of evaluation

| Level | Object | Example |
|-------|--------|---------|
| **Unit (per-call)** | One LLM call | "Does the model extract the right JSON?" |
| **Component (per-tool)** | One tool's output given an input | "Does `search_codebase` return the expected paths?" |
| **Agent (per-trajectory)** | A full agent run | "Did the agent fix the bug correctly?" |
| **System (end-to-end)** | The full product flow | "Did the user accomplish their goal?" |

### Eval patterns

**1. Deterministic checks**, code-based assertions on the model's output (JSON schema validity, expected keywords, numerical comparisons).

**2. LLM-as-judge**, a second LLM scores the agent's output against rubric criteria. Surprisingly effective; well-documented in Anthropic's evals cookbook.

```python
judge_prompt = """
You are evaluating an agent's response to a customer-support query.
Rubric: [1] Did the agent correctly identify the issue? [2] Was the resolution policy-compliant? [3] Was the tone professional?

For each criterion, output: PASS / FAIL with one-sentence justification.

Customer query: {query}
Agent response: {agent_response}
"""
```

**3. Trace replay**, record agent traces in production; rerun them when you change the prompt and compare outputs side by side. Langfuse and Phoenix are common tools.

**4. Holdout sets**, a curated set of "golden" tasks with known good outcomes. Re-run on every prompt change. If pass-rate regresses, halt the rollout.

### Production evals discipline (the "shape-of-a-pyramid" rule)

- Hundreds of unit checks (cheap)
- Tens of component evals (medium)
- A handful of end-to-end agent evals (expensive but representative)
- Continuous: log every prod trace and sample for human review

🎯 **Exam pattern:** *"A team upgrades their agent from Sonnet 3.5 to Sonnet 4. The Workbench output looks better. What is the missing step before shipping?"* → **Run the eval suite on the holdout set; compare quantitatively, not by eyeballing.**

---

## 🔁 Anti-Patterns (Lessons from the Field)

### 1. The "more steps = better" fallacy

A model that takes 47 turns to answer a question is usually *thrashing*, not reasoning deeply. Bias for short, high-confidence trajectories. Set step caps. Investigate long runs.

### 2. The "we don't need evals; we read the chats" fallacy

You will spot-check 10 of 10,000 conversations. The 9,990 you don't read will hurt you. Evals are not optional at >100 daily conversations.

### 3. The "framework lock-in"

LangChain, LlamaIndex, AutoGen, CrewAI are libraries, they have opinions, abstractions, and learning curves. For 80% of production agents, a 60-line custom Python loop is more debuggable, more predictable, and easier to evolve. Use frameworks where they save you genuine effort (RAG plumbing, multi-vendor routing); avoid where they hide control flow.

### 4. The "let the agent retry on errors silently"

When a tool fails, the loop should *surface* the error to the orchestrator (or to a human). Silent retries hide bugs.

### 5. The "no cost cap"

A confused agent running on Opus can rack up $400 in 15 minutes if it loops on a long-context task. Always cap.

### 6. The "no human-in-the-loop for destructive actions"

Replit's lesson, hard-earned. Require confirmation for: file deletions, payments, sending emails to users, schema migrations, deletions of any kind.

---

## 🧰 Frameworks vs Raw SDK, A Pragmatic Take

| Framework | Strengths | When to skip |
|-----------|-----------|--------------|
| **Anthropic SDK** (raw) | Maximum control, easiest to debug, no learning curve | When you genuinely need RAG / vector / orchestration glue |
| **LangChain** | Multi-vendor abstraction, mature RAG bits, big ecosystem | When your control flow needs are simple or unique |
| **LlamaIndex** | RAG-first, structured indices | When you're not doing RAG |
| **AutoGen** (Microsoft) | Multi-agent conversation patterns | When you don't need its specific abstractions |
| **CrewAI** | Role-based "team" abstractions | When the abstractions don't match your domain |
| **Anthropic Agent SDK / claude-agent-sdk** | Direct, opinionated to Anthropic patterns | When you need multi-vendor or other-vendor primary |

**Anthropic's pragmatic recommendation in "Building Effective Agents":** start with the raw SDK + the five workflow patterns. Reach for a framework only when you have a *specific need* the framework solves. Most companies that wished they had used a framework actually wished they had used *less* of one.

---

## 🎬 The claude-agent-sdk Pattern

Anthropic publishes a **Claude Agent SDK** (npm: `@anthropic-ai/claude-agent-sdk`; Python: `claude-agent-sdk`) that wraps the canonical agent loop with sensible defaults:

- Step caps and cost caps built in
- Tool-use loop pre-implemented
- Streaming + observability hooks
- MCP server support out of the box
- "Hook" system to intercept tool calls (auth, logging, throttling)
- Sub-agent / "skill" delegation patterns

This is what powers `claude-code` (the Anthropic CLI). It's the closest thing to a "reference implementation" of Anthropic's agentic best practices.

```typescript
// Sketch, actual API varies; check current docs
import { Agent } from "@anthropic-ai/claude-agent-sdk";

const agent = new Agent({
  model: "claude-sonnet-4-6",
  system: "You are a helpful coding assistant.",
  tools: [readFileTool, editFileTool, bashTool, searchTool],
  mcpServers: [{ command: "npx", args: ["-y", "@modelcontextprotocol/server-github"] }],
  maxSteps: 25,
  maxCostUsd: 5.00,
});

const result = await agent.run({ prompt: "Fix the failing test in test_user_signup.py" });
```

---

## 🔬 Scenario Walkthrough

> **Scenario:** Your team is building "Postman for AI agents", a developer tool that lets engineers compose, test, and version agentic flows. The first product is an "incident summarizer agent" that pulls from Sentry, GitHub issues, and Slack to write a 1-page incident postmortem. Design the architecture.

**Walkthrough:**

1. **Workflow or agent?** Mostly workflow. Steps are known: fetch Sentry events → fetch GitHub issues → fetch Slack thread → synthesize. Add a small agent loop only for the "fetch related items" expansion (which can spider).

2. **Five-pattern composition:**
   - **Routing** at the top: identify whether the user's request is "summarize incident X" vs "compare incidents X and Y"
   - **Parallelization** for the three data-fetches (Sentry, GitHub, Slack in parallel)
   - **Prompt chaining** for the synthesis: timeline reconstruction → root cause analysis → recommendations
   - Optional **evaluator-optimizer** loop on the final draft for tone/length

3. **MCP servers:** sentry, github, slack, all official.

4. **Step caps:** 8 max steps for the fetch-expansion sub-agent; cost cap $0.50/incident.

5. **Eval suite:** Build 30 "golden" incidents (real, anonymized) with hand-written gold-standard postmortems. Run on every prompt change. LLM-as-judge on summary quality + deterministic checks on factual claims linking back to source citations.

6. **Production observability:** Langfuse for trace replay; cost reporting per session; per-user cost breakdown.

7. **Human-in-the-loop:** No destructive actions, but require user approval before "publish to Confluence."

This is a real architecture, many companies have built variants.

---

## ⚠️ Exam Traps & Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "All AI products are agents." | Most are workflows with LLM nodes. True open-loop agents are a minority. |
| "More agentic = better." | Bias for the *simplest pattern that works*. Anthropic's published guidance. |
| "Longer trajectories = smarter agent." | Usually thrashing. Bias for short, confident trajectories. |
| "Evals are optional." | Mandatory above trivial scale. |
| "LangChain is required to build agents." | Not at all. Raw SDK + 60 lines often beats it. |
| "Agents can't be safe." | Confirmation gates + auth + cost caps + observability + evals = production safety. |
| "Hierarchical agents are overengineering." | They are the standard fix for "too many tools / wrong tool choice." |
| "LLM-as-judge is too unreliable." | With a good rubric, it correlates well with human judgment on most tasks. |
| "Cost caps reduce quality." | They reduce *catastrophic* runs. Median quality unchanged. |

---

## 🎓 Key Terms To Know (Add to Flashcards!)

| Term | Definition |
|------|------------|
| **Workflow** | Human-authored DAG with LLM nodes, fixed control flow |
| **Agent** | LLM decides its own path, open control flow |
| **Prompt chaining** | Sequential LLM calls each feeding the next |
| **Routing** | Classifier directs input to specialized sub-flows |
| **Parallelization** | N concurrent LLM calls; aggregate outputs |
| **Orchestrator-workers** | Lead LLM plans, worker LLMs execute, lead integrates |
| **Evaluator-optimizer** | Generator + critic loop until criteria met |
| **ReAct** | Reason + Act loop, explicit thought before each tool call |
| **Scratchpad** | Explicit `<thinking>` block for model reasoning |
| **Extended thinking** | Claude 4-series capability for longer internal reasoning budget |
| **Step cap** | Max iterations of the agent loop |
| **Cost cap** | Max $ allowed per agent session |
| **Hierarchical agent** | Top-level dispatcher + specialized sub-agents |
| **Skill** | Anthropic's named sub-agent pattern in claude-code |
| **LLM-as-judge** | Using a second LLM to score the first's outputs |
| **Holdout set** | Curated golden tasks used to detect regressions |
| **Trace replay** | Recording prod traces and re-running them on prompt changes |

---

## 📊 Case Study, Cursor Composer's Architecture Evolution

**Situation.** Cursor's "Composer" feature lets a user describe a multi-file change in natural language; Composer plans + executes the edit across the codebase. Launched mid-2024. By 2026, it is one of the most-used AI coding features in the world.

**Architectural evolution (paraphrased from public Cursor blog posts and conference talks):**

1. **v0 (mid-2024):** Single-call to Claude with the whole repo context + the request. Worked for small repos; failed at scale.

2. **v1 (late 2024):** Single Claude agent with a flat tool surface (read_file, edit_file, search_codebase, run_command). Better; still confused on large multi-file refactors.

3. **v2 (early 2025):** Orchestrator + workers. Composer's "agent mode" splits the task: an orchestrator plans the edit (which files to touch, in what order, with what dependencies), then dispatches per-file workers with scoped context. Major quality jump.

4. **v3 (mid-2025):** Added evaluator-optimizer loop on test results. Worker edits; runs tests; if failing, the evaluator suggests revisions; the worker iterates. Up to MAX_ITERATIONS.

5. **v4 (2026):** Per-tier routing. Trivial single-file edits go to Sonnet; large multi-file refactors route to Opus via the orchestrator. Cost-aware.

**Each step was a textbook pattern from "Building Effective Agents."** No exotic research; just disciplined composition of the canonical patterns.

**Lesson for the architect.**
- **Iterate the architecture, not just the prompt.** Composer's accuracy improvements at each version came from architecture changes more than prompt changes.
- **Specialize sub-agents.** The orchestrator and the worker have different system prompts and tool surfaces.
- **Loop responsibly.** The evaluator-optimizer step has a hard MAX_ITERATIONS to prevent infinite loops.

**Discussion (Socratic).**
- **Q1:** Cursor's evaluator-optimizer revises code based on test failures. What is the failure mode if the tests themselves are buggy? Design a safeguard.
- **Q2:** Composer's per-tier routing uses Sonnet for cheap edits and Opus for expensive ones. Where do you put the routing decision, in the orchestrator's prompt, or as a separate model call? Trade-offs?
- **Q3:** Imagine v5. What pattern would you add next? Defend the choice.

---

## ✅ Module 6 Summary

You now know:

- 🪜 **The workflow-vs-agent spectrum** and when each fits
- 🏗️ **The five canonical workflow patterns** (chaining, routing, parallelization, orchestrator-workers, evaluator-optimizer)
- 🤖 **The ReAct agent loop** in 25 lines of pseudocode
- 🧬 **Hierarchical agents** for large tool surfaces / open tasks
- 🪜 **Scratchpad / extended thinking** for hard reasoning
- 🧪 **Evals**, unit / component / agent / system + LLM-as-judge + holdout sets
- 🔁 **Anti-patterns**, long trajectories, no evals, no caps, framework lock-in
- 🧰 **Frameworks**, when to use, when to skip; the claude-agent-sdk reference
- 📊 **Cursor Composer's** real-world architectural evolution

**Next steps:**
1. 🎥 Watch the curated videos: [Videos.md](./Videos.md)
2. ✏️ Take the quiz: [Quiz.md](./Quiz.md), aim for 21/25
3. 📋 Review the [Cheat-Sheet.md](./Cheat-Sheet.md)
4. 🛠️ **Hands-on:** Build a 3-tool ReAct agent (weather, news search, email-stub). Add step cap, cost cap, basic logging. Use it to answer "Should I bring an umbrella tomorrow given the news from Seattle?"
5. ➡️ Move on: [Module 7, RAG & Long-Context](../Module-07-RAG-Long-Context/Reading.md)

> **Where this leads.**
> - Inside this course: [Module 7](../Module-07-RAG-Long-Context/Reading.md) covers the data layer underneath agents. [Module 8](../Module-08-Production-Patterns-Safety/Reading.md) covers production ops in depth.
> - Cross-course: Generative AI Engineer (course 30) covers framework-specific implementations (LangChain, LlamaIndex, AutoGen, CrewAI).
> - Practice: Practice Exam 2 has ~5 questions from this module.

---

## 📚 Further Reading (Optional)

**Primary sources:**
- 📄 Anthropic. [*Building Effective Agents*](https://www.anthropic.com/research/building-effective-agents), REQUIRED reading.
- 📄 Anthropic. [*Claude Agent SDK*](https://github.com/anthropics/claude-agent-sdk-typescript) (or Python equivalent). Reference implementation.
- 📄 Anthropic Cookbook, [agents](https://github.com/anthropics/anthropic-cookbook/tree/main/skills) and skills sections.
- 📄 Yao et al. (2022). [*ReAct: Synergizing Reasoning and Acting in Language Models*](https://arxiv.org/abs/2210.03629). The original ReAct paper.

**Practitioner / case studies:**
- 📖 Cursor blog, agent architecture evolution posts
- 📖 Replit, Replit Agent engineering posts
- 📖 Hamel Husain, [Your AI Product Needs Evals](https://hamel.dev/blog/posts/evals/) (essential reading)
- 📖 Latent Space podcast, frequent episodes with Anthropic engineers on agent patterns
- 📖 Phoenix / Langfuse / OpenLLMetry docs, eval and trace tooling
