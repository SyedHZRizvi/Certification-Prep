# Module 6: Multi-Agent Systems 🤖🤖🤖

> **Why this module matters:** "Multi-agent" is the most-hyped, most-misused term in applied GenAI 2024–2026. Half the time, the right answer is "one agent with good tools." The other half, a well-orchestrated team of specialized agents is the only thing that works. This module is how to tell which is which, and how to build it when the answer is multi-agent.

> **Prerequisites for this module.** You should be comfortable with:
> - Modules 1–5
> - Tool calling (Module 4)
> - LangGraph state machines (Module 4)
> - Async Python

---

## 🎬 A Story: The AutoGPT Year (2023–2024)

March 2023. AutoGPT exploded onto the scene: a GitHub repo claiming to be the "first autonomous AI agent." Within a month it had 150,000 stars. Tech Twitter declared the singularity was imminent. Within six months, the community had moved on. Why?

Because AutoGPT, in practice, was *spectacularly* bad at finishing tasks. It would spin in loops, repeat itself, run up API costs, and produce 200-line plans for "buy a domain and host a hello world site" before failing at step 8 because it couldn't authenticate to a service it had never been told about. A widely-circulated benchmark in mid-2023 showed AutoGPT successfully completed roughly **8%** of the tasks it attempted.

The 2024 takeaway, written in many post-mortems, was unsentimental: **autonomous open-ended agents don't work yet.** What does work is *scoped agents*, agents with a well-defined goal, a small set of tools, a limited budget of steps, and a clear stop condition. Most of "multi-agent systems" in 2026 is the engineering of *constrained collaboration*, not "let the AI figure it out."

This module is built on the post-AutoGPT consensus.

---

## 🤔 When Multi-Agent Is Actually The Right Answer

Multi-agent is *appropriate* when:

1. **The task naturally decomposes into roles** with different expertise and tools. Example: a coding assistant where a *planner* writes a spec, a *coder* implements, a *tester* runs tests, a *reviewer* critiques.
2. **Parallel processing helps.** Multiple agents researching different sub-topics simultaneously can compress wall-clock time for "summarize what's happening in 5 fields of ML."
3. **Different personas need separation.** A "red team" agent that tries to break a "blue team" agent's output, a structured form of self-critique that single-agent prompts can't easily reproduce.
4. **Tools belong to different domains.** One agent has SQL access; another has Python; another has web search. Routing tools by agent role can be cleaner than dumping them all on one agent.
5. **You need diversity.** Multiple agents with different personas / temperatures / models, voting on an answer, can outperform a single agent (LLM-as-judge-ensemble).

Multi-agent is *NOT appropriate* when:

1. **The task is linear.** One agent + tools is simpler, cheaper, more debuggable.
2. **You're using "agents" because the word sounds modern.** A "researcher agent" that just calls a search API is a *function*, not an agent.
3. **You're hoping agents will figure out coordination on their own.** They won't; they'll loop.
4. **Cost matters.** Each agent in a 3-agent team adds 2-5× the API spend. Often this dominates the system's economics.

🎯 **Rule of thumb:** Build a single agent first. Add a second only when you can write down *exactly* what it does that the first one can't.

---

## 🧱 Core Agent Frameworks (2026)

### LangGraph (Module 4)

Already covered. Multi-agent in LangGraph means defining each agent as a *subgraph*, and a supervisor/router that decides which subgraph runs next. The state of the conversation is shared across agents via the graph's state object.

**Strengths:** Most mature, best observability (LangSmith), production-ready, the standard for high-stakes work. The Replit Agent, GitHub's Copilot Chat, and most Anthropic-team internal demos are LangGraph-based.

**The supervisor pattern (most common):**
```
                    ┌──────────┐
                    │Supervisor│ (LLM picks next agent or "DONE")
                    └─────┬────┘
              ┌───────────┼──────────┐
        ┌─────▼───┐ ┌─────▼───┐ ┌────▼─────┐
        │Researcher│ │  Coder  │ │ Reviewer │
        └──────────┘ └─────────┘ └──────────┘
              │           │           │
              └───────────┼───────────┘
                          ▼
                     (back to Supervisor)
```

### CrewAI

CrewAI is a thin, opinionated multi-agent framework. Defines agents as `Agent(role, goal, backstory)` + tasks as `Task(description, expected_output, agent)` + workflows as `Crew(agents, tasks, process=sequential|hierarchical)`.

```python
from crewai import Agent, Task, Crew

researcher = Agent(
    role="Senior Researcher",
    goal="Find the latest trends in {topic}",
    backstory="You are a researcher at a top tech consultancy...",
    tools=[search_tool, browse_tool],
    llm=claude_sonnet
)

writer = Agent(
    role="Tech Writer",
    goal="Write a clear summary of the research",
    backstory="You write for a tech-savvy audience...",
    llm=claude_sonnet
)

research_task = Task(description="Research {topic}", expected_output="Bullet list of findings", agent=researcher)
write_task = Task(description="Write a 500-word post", expected_output="Markdown article", agent=writer)

crew = Crew(agents=[researcher, writer], tasks=[research_task, write_task], process="sequential")
result = crew.kickoff(inputs={"topic": "MoE architectures"})
```

**Strengths:** Lowest barrier to entry; opinionated defaults; nice for prototyping role-based teams; widely taught in DeepLearning.AI courses.

**Weaknesses:** Less control than LangGraph; abstraction sometimes leaks; harder to integrate with custom tools and frameworks.

### AutoGen (Microsoft Research)

AutoGen models agents as **conversable** entities that pass messages to each other. Two agents (or N) literally chat; the framework manages turn-taking and termination.

```python
from autogen import ConversableAgent

user = ConversableAgent("user", human_input_mode="NEVER", code_execution_config=False)
coder = ConversableAgent("coder", system_message="Write Python code to solve...", llm_config={...})
runner = ConversableAgent("runner", code_execution_config={"work_dir": "./sandbox"})

user.initiate_chat(coder, message="Compute the 1000th Fibonacci number.")
```

The killer feature: AutoGen agents can natively *execute code* in a sandboxed environment (Docker, Jupyter), making it ideal for code-generating teams.

**AutoGen v0.4** (late 2024) introduced an event-driven async architecture closer to LangGraph; it's the version you should target.

**Strengths:** Best code-execution story; flexible conversation patterns (two-agent, group, hierarchical); strong Microsoft Research community.

**Weaknesses:** Steeper learning curve; observability lighter than LangGraph.

### MetaGPT / OpenDevin / Devin-likes

These are *opinionated agent stacks* targeting "AI software engineer" specifically. MetaGPT defines a software-team metaphor (PM, architect, engineer, QA) and produces a project structure. OpenDevin/SWE-agent target the SWE-bench (real-world GitHub issue resolution) benchmark.

These are special-purpose, not general frameworks. Worth knowing exists; rarely the right pick for non-coding tasks.

### Anthropic's Computer Use / Claude as a desktop agent

Released October 2024. Claude controls a virtual desktop, sees screenshots, moves the mouse, types. Multi-step automation of GUI tasks. The "tools" are *primitives* (click_at, type, screenshot, key_press) rather than domain-specific APIs.

Computer Use is a *new shape* of agent, sensorimotor rather than text-tool. Production deployments in 2025–2026 wrap it with strict guardrails because the action space is enormous.

### OpenAI Swarm / OpenAI Agents SDK

OpenAI released the experimental "Swarm" framework in October 2024, then the production "Agents SDK" in 2025. Swarm models *handoffs*, one agent decides which other agent to transfer control to.

```python
from agents import Agent, Runner

planner = Agent(name="Planner", instructions="...")
coder = Agent(name="Coder", instructions="...", handoffs=[planner])
planner.handoffs = [coder]

result = await Runner.run(planner, "Build a Python script that scrapes X")
```

Minimalist; less opinionated than CrewAI; tightly tied to OpenAI's models (though configurable).

### Comparison

| Framework | Style | Strengths | Weak spots | When |
|-----------|-------|-----------|-------------|------|
| LangGraph | State graph + supervisor | Mature, observable, production | Verbose, learning curve | High-stakes, production |
| CrewAI | Role + task | Easy to start | Less control | Prototype, role demos |
| AutoGen | Conversable + code-exec | Code generation | Observability | Code-heavy teams |
| OpenAI Agents SDK | Handoff-based | OpenAI-native, minimal | OpenAI lock-in | OpenAI-first stacks |
| Anthropic Computer Use | Sensorimotor | GUI automation | Action space huge | Desktop automation |
| MetaGPT / OpenDevin | SWE-team metaphor | Opinionated for code | Narrow | AI software-engineer |

---

## 🤝 Agent Communication Patterns

### Supervisor / Router

One central agent receives the user request, decides which sub-agent runs next, and returns the result. The model used here is often the *biggest* (Claude Opus, GPT-5) because routing is a high-leverage decision.

### Hierarchical / Manager-Worker

A manager agent decomposes the task into sub-tasks and delegates each to worker agents (potentially in parallel). Manager synthesizes the workers' outputs. This is roughly the **CrewAI hierarchical process** and the **AutoGen GroupChat** pattern.

### Sequential pipeline

Agent 1 → Agent 2 → Agent 3 → output. Often modeled as LangGraph linear or CrewAI sequential. Simpler than supervisor; useful when the task pipeline is fixed.

### Debate / Adversarial

Two agents with opposing prompts argue; a judge agent decides. Often improves correctness on contentious questions (e.g., legal interpretation) at the cost of latency.

### Voting / Ensemble

Multiple agents (different prompts, models, temperatures) each answer; aggregate via majority vote, LLM-as-judge selection, or confidence-weighted average. Trades cost for quality.

### Reflection / Self-Critique

The same agent calls itself in a "critic" role on its own output, then "reviser" mode to incorporate the critique. Single-agent feedback loop, often classified as multi-agent for taxonomy reasons. The original ReAct + Reflexion + Self-Reflexion pattern.

### Tool-using agent (table stakes)

Not really "multi-agent" but worth mentioning: a single agent with a curated tool set is *usually* what people actually want.

---

## 🛑 The Stop-Condition Problem

Every agent system needs an answer to: *when do we stop?*

Common stop conditions:

- **Max iterations** (hard cap on agent loop count), the most important defense against infinite loops
- **Budget cap** ($1, $5, $20 per task), defense against runaway cost
- **Goal-completion signal** (agent emits a `DONE` token or empty tool list)
- **Confidence threshold** (the supervisor judges "we have an answer")
- **Time budget** (hard wall-clock cap)
- **Human intervention** (HITL approval before "expensive" or "destructive" actions)

🎯 **Production rule:** ALWAYS set max_iterations to a small number (5–10 for most tasks) and a budget cap. Costs of an unbounded loop in production are not theoretical.

---

## 🧰 Tools, MCP, and Inter-Agent Communication

### Tool catalogs

A central, versioned tool registry (in MCP, Pinecone-style "agent registry", or just YAML) lists every tool with a JSON-schema signature. Agents pick from the catalog at runtime.

### Memory (shared vs private)

- **Shared scratchpad**, all agents read/write a shared state object. Risk: contention; one bad write can poison everyone.
- **Private chains-of-thought**, each agent's reasoning stays local; only outputs are shared. Safer; more common in production.
- **Episodic memory**, vector store of past interactions; agents retrieve relevant precedents.

### Inter-agent message protocols

MCP (Module 4) handles agent-to-tool. Agent-to-agent is rougher, no universal standard. Common approaches: structured JSON envelopes; protobuf-style schemas; or simple "natural-language messages with role tags."

### Computer Use & Browser Automation

Anthropic Computer Use, OpenAI's o1-with-browser, Microsoft's UFO project, all give an agent direct control of a screen. Best paired with:

- Sandboxed VMs (never on production hosts)
- Action-level rate limiting + human approval for "destructive" actions
- Full screen-recording for audit
- Tight system prompts ("don't visit anything outside the allowed domain list")

---

## 🚨 Anti-patterns

| Anti-pattern | What goes wrong |
|--------------|------------------|
| "Let's add more agents to fix the bug" | Compounds confusion; the bug usually isn't structural |
| No max_iterations | Costs explode on edge cases |
| Sharing too much state across agents | Agents step on each other's work |
| Sharing too little state | Agents repeat each other; no benefit |
| Different agents pick different models for vague reasons | Reasoning model + cheap drafter is a good combo; random mixing isn't |
| No observability per agent | Can't tell which agent failed; the trace is a wall of text |
| Using a manager agent for a sequential task | Use a sequential pipeline; supervisor adds nothing |
| Letting agents write to disk / call destructive APIs without approval | Production incidents waiting to happen |

---

## 🏗️ Lab: Build a Research Crew + LangGraph Supervisor

Goal: build two flavors of the same task, "given a topic, produce a 1,000-word technical brief":

1. **CrewAI implementation:** roles for researcher, fact-checker, writer, editor. Sequential process. ~80 lines of code.
2. **LangGraph implementation:** supervisor agent + same four worker agents as graph nodes. Conditional edges: supervisor routes to the next agent or to END. Add a "needs more research" loop.

Then:

3. Measure cost, latency, quality on 10 topics.
4. Add observability via LangSmith (both can be traced).
5. Write a 1-page reflection: when is each architecture worth it?

---

## 📊 Case Study, Anthropic's "Claude as a Software Engineer" Internal Experiment (2024)

**Situation.** In late 2024, Anthropic published a research blog post about using Claude (specifically Claude 3.5 Sonnet) as a software-engineering assistant *internally* for their own codebases. They tried both single-agent and multi-agent configurations.

**Single-agent (Claude with tools):** Read file, edit file, run tests, search codebase. Achieved roughly 49% on SWE-bench Verified (a benchmark of real GitHub issues that need code changes to resolve).

**Multi-agent (planner + coder + reviewer):** A planner Claude reads the issue and writes a step-by-step plan; a coder Claude implements; a reviewer Claude critiques and the coder revises. Achieved roughly **64% on SWE-bench Verified**.

**The lessons (paraphrasing Anthropic's published commentary):**
1. **The 15-point gap is real**, multi-agent matters for genuinely difficult, multi-step tasks like code generation.
2. **Cost is 3-4× higher.** Each turn of the loop is multiple Claude calls.
3. **Latency is 2-3× higher.** The loop runs sequentially.
4. **Quality variance is much lower**, multi-agent reduces the "tail" of catastrophic failures, even when the median quality is similar.

**The honest take:** for *expensive*, *high-stakes*, *high-difficulty* tasks (like code generation against a real codebase), multi-agent earns its cost. For "summarize this email," it's overkill.

**Discussion (Socratic).**
- **Q1:** Anthropic's planner-coder-reviewer pattern resembles ReAct + reflection at a high level. What does the *role separation* add over single-agent reflection prompting?
- **Q2:** The 15-point benchmark gain came with 3-4× cost. Sketch a cost-benefit decision rule for when this trade-off is worth it.
- **Q3:** SWE-bench is *unit tests verifying solutions*. If your real-world task lacks unit tests, how do you replicate the "reviewer" agent's value?

---

## ✅ Module 6 Summary

You now know:

- 🚦 When multi-agent is actually right (and the much more common "use one agent" path)
- 🧱 The major frameworks: LangGraph, CrewAI, AutoGen, OpenAI Agents SDK, Computer Use
- 🤝 Communication patterns: supervisor, hierarchical, sequential, debate, voting, reflection
- 🛑 Stop conditions, every agent system must have them
- 🧰 Tools, MCP, shared vs private state
- 🚨 The anti-patterns that crash production multi-agent systems

**Next steps:**
1. 🎥 [Videos.md](./Videos.md)
2. ✏️ [Quiz.md](./Quiz.md)
3. 📋 [Cheat-Sheet.md](./Cheat-Sheet.md)
4. ➡️ Move on: [Module 7, Evaluation & RAGAS](../Module-07-Evaluation-RAGAS/Reading.md)

> **Where this leads.**
> - Module 7 covers eval of agent systems (which is much harder than eval of single LLM calls).
> - Module 8 covers guardrails on agent actions (essential for any agent that touches the world).
> - Module 9 covers observability of multi-step agents, the only way to debug them.

---

## 📚 Further Reading (Optional)

- 📄 Yao et al. (2023). *ReAct: Synergizing Reasoning and Acting in Language Models.* Foundational agent paper.
- 📄 Shinn et al. (2023). *Reflexion: Language Agents with Verbal Reinforcement Learning.*
- 📄 Hong et al. (2023). *MetaGPT: Meta Programming for a Multi-Agent Collaborative Framework.*
- 📄 Wu et al. (2023). *AutoGen: Enabling Next-Gen LLM Applications via Multi-Agent Conversation.*
- 📄 Jimenez et al. (2024). *SWE-bench: Can Language Models Resolve Real-World GitHub Issues?*
- 📖 [LangGraph Multi-Agent docs](https://langchain-ai.github.io/langgraph/concepts/multi_agent/)
- 📖 [CrewAI documentation](https://docs.crewai.com/)
- 📖 [AutoGen docs](https://microsoft.github.io/autogen/)
- 🎬 Andrew Ng's "What's next for AI agentic workflows", DeepLearning.AI
