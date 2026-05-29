# ✏️ Module 6 Quiz: Multi-Agent Systems

> 26 questions · aim 22/26.

---

## Questions

### Q1. The 2024 community consensus on AutoGPT-style autonomous open-ended agents: *(Remember)*
A. They are the production gold standard
B. They mostly don't work; scoped agents with stop conditions do
C. They are required for any AI app
D. They are illegal

---

### Q2. The PRIMARY production benefit of multi-agent over single-agent: *(Understand)*
A. Smaller code
B. Naturally maps tasks with distinct roles + tools; reduces variance via reflection/critique
C. Always cheaper
D. Less compute

---

### Q3. A "supervisor pattern" multi-agent system uses one agent to: *(Remember)*
A. Replace the user
B. Route between worker agents and decide when to stop
C. Embed
D. Tokenize

---

### Q4. CrewAI's defining abstractions: *(Remember)*
A. Documents and Indices
B. Agent(role, goal, backstory), Task(description, expected_output, agent), Crew(agents, tasks, process)
C. Embeddings only
D. SQL only

---

### Q5. AutoGen's killer feature relative to LangGraph: *(Understand)*
A. Tool calling
B. Native sandboxed code execution + conversable-agent flexibility
C. Free hosting
D. Better embeddings

---

### Q6. Anthropic Computer Use (Oct 2024) introduced what new agent shape: *(Remember)*
A. None — same as before
B. Sensorimotor — agent controls a virtual desktop via screenshots + mouse + keyboard
C. RAG only
D. SQL agent

---

### Q7. Anthropic's internal multi-agent (planner + coder + reviewer) vs single-agent on SWE-bench Verified: *(Analyze)*
A. Roughly the same
B. ~15 points higher (e.g., ~64% vs ~49%), at 3-4× cost
C. Worse than single-agent
D. Identical

---

### Q8. The most important defense against runaway costs in agent loops: *(Apply)*
A. Better embeddings
B. max_iterations + budget cap + wall-clock cap
C. Larger context
D. Smaller model

---

### Q9. Debate / adversarial multi-agent uses: *(Understand)*
A. Random agents
B. Two opposing-prompt agents arguing; a judge agent picks
C. SQL
D. None

---

### Q10. A team has a "summarize my email" feature. Multi-agent overhead: *(Evaluate)*
A. Worth it
B. Overkill — single agent + tool is the right answer
C. Required
D. Illegal

---

### Q11. The Replit Agent (2024) was built on: *(Remember)*
A. Pure raw API SDKs
B. LangGraph (for state + HITL + persistence + tracing)
C. CrewAI
D. AutoGen

---

### Q12. Reflection / self-critique patterns produce: *(Understand)*
A. Random text
B. Quality gains by separating "generate" and "critique" roles, even with the same model
C. Always worse outputs
D. Same as baseline

---

### Q13. Voting / ensemble agents help MOST when: *(Apply)*
A. Latency-sensitive chat
B. High-stakes correctness; willing to pay 3-5× cost
C. Embedding generation
D. Tokenization

---

### Q14. OpenAI's Swarm / Agents SDK is best characterized as: *(Understand)*
A. A non-deterministic chat bot
B. A minimalist multi-agent framework based on agent-to-agent handoffs
C. A tokenizer
D. A vector DB

---

### Q15. The maximum iteration count in production agent loops should typically be: *(Apply)*
A. 1000+
B. 5-10 for most tasks; up to ~30 for code-generation tasks
C. Unlimited
D. 1

---

### Q16. "MetaGPT" structures agents into: *(Remember)*
A. Random roles
B. A software-team metaphor (PM, architect, engineer, QA)
C. SQL queries
D. No structure

---

### Q17. Inter-agent shared state is BEST kept: *(Apply)*
A. As a giant global blob
B. Scoped — only the data needed for the next agent's job, with private chains-of-thought
C. In environment variables
D. In Git

---

### Q18. The "researcher agent" that just calls a search API is: *(Evaluate)*
A. A multi-agent system
B. Actually a function masquerading as an agent
C. Required for agents
D. The same as a supervisor

---

### Q19. Computer Use agents (Anthropic) need MOST OF ALL: *(Apply)*
A. Smaller context
B. Sandboxing + action-level rate limiting + screen recording + restrictive allowlists
C. Free models
D. More tokens

---

### Q20. LangSmith's role in multi-agent debugging: *(Understand)*
A. Embeddings
B. Per-agent traces, conversation graphs, prompt evaluation — making the "wall of text" debuggable
C. Replacement for guardrails
D. None

---

### Q21. The most common reason a CrewAI demo doesn't ship to production: *(Analyze)*
A. CrewAI is bad
B. Lack of observability + custom-tool integration friction + cost-control needed for real prod
C. Wrong language
D. No reason

---

### Q22. Anthropic's multi-agent SWE-bench gain came partly from: *(Analyze)*
A. Magic
B. Role separation reducing variance, plus a "reviewer" critique improving correctness
C. More compute only
D. Random sampling

---

### Q23. A production AI software engineer (Devin-style) requires CRITICALLY: *(Evaluate)*
A. Random tools
B. Sandboxed execution + ability to read/write/run code + tests as ground truth + human approval gates
C. No tests
D. No sandbox

---

### Q24. Hierarchical / manager-worker pattern decomposes via: *(Understand)*
A. A central manager agent that splits the task and delegates to workers, then synthesizes
B. No structure
C. SQL queries
D. The user

---

### Q25. The 2024 take on "agentic AI" — Andrew Ng's framing: *(Evaluate)*
A. Agentic workflows (plan, tool-use, reflect, multi-agent) can elevate small models above non-agentic large models on many tasks
B. Agents don't work
C. Single-pass prompting is always better
D. No improvement possible

---

### Q26. Design challenge: a brand wants an AI agent that researches competitor pricing, drafts a comparison blog post, and posts to a CMS. Best architecture: *(Create)*
A. AutoGPT
B. LangGraph with researcher (with web-search tool) → writer → editor (with reflection loop) → cms-poster (with `interrupt_before` for human approval) → DONE, with max_iterations=8 + $5 budget cap
C. Single GPT-4 call
D. No agent
   
---

## 🎯 Answers + Explanations

### Q1: **B. They mostly don't work; scoped agents do**
~8% completion in 2023 benchmarks. Industry moved to scoped agents with hard stop conditions.

### Q2: **B. Role + variance reduction**
Roles split work and improve reliability; cost goes up too.

### Q3: **B. Route + decide stop**
Supervisor is the high-leverage decision-maker. Often the biggest model.

### Q4: **B. Agent / Task / Crew**
The CrewAI primitives. Process = sequential or hierarchical.

### Q5: **B. Native code execution + conversable flexibility**
Two-agent chat with code-execution is AutoGen's signature pattern.

### Q6: **B. Sensorimotor — screenshots + mouse + keyboard**
A new agent surface (October 2024).

### Q7: **B. ~15 points higher at 3-4× cost**
Anthropic's published number: ~49% → ~64% on SWE-bench Verified.

### Q8: **B. max_iterations + budget cap + wall-clock cap**
Triple defense. Unbounded loops are the most common production incident.

### Q9: **B. Adversarial agents + judge**
Two-against-one critique; useful on contentious questions.

### Q10: **B. Overkill**
Simple tasks don't benefit from multi-agent overhead.

### Q11: **B. LangGraph**
State + HITL + persistence + LangSmith tracing.

### Q12: **B. Quality gains via role separation**
The same model often does better when explicitly cast in different roles in sequence.

### Q13: **B. High-stakes correctness; 3-5× cost OK**
Useful for legal/medical/financial decisions where wrong is expensive.

### Q14: **B. Handoff-based**
Minimalist. Each agent transfers control to the next via a "handoff" decision.

### Q15: **B. 5-10 typical; ~30 for code tasks**
Code generation can legitimately need more steps; chat tasks rarely should.

### Q16: **B. PM/architect/engineer/QA**
MetaGPT's software-team metaphor. Opinionated structure.

### Q17: **B. Scoped state + private CoT**
Shared everything creates contention; private CoT keeps reasoning local.

### Q18: **B. A function, not an agent**
"Agent" without LLM-driven decision-making isn't an agent.

### Q19: **B. Sandbox + rate limit + recording + allowlist**
The action space is enormous; the blast radius is real.

### Q20: **B. Per-agent traces + conversation graphs**
Without observability, debugging a 4-agent loop is impossible.

### Q21: **B. Observability + tool friction + cost control**
The boring infrastructure determines what ships, not the framework.

### Q22: **B. Role separation + reviewer critique**
The "review and revise" loop catches errors single-pass agents miss.

### Q23: **B. Sandbox + read/write/run + tests + HITL**
Every successful coding agent has these. Anything less is a demo.

### Q24: **A. Central manager splits + delegates + synthesizes**
Manager-worker decomposition. CrewAI hierarchical process is the prebuilt version.

### Q25: **A. Agentic workflows lift smaller models above non-agentic larger ones**
Ng's widely-quoted framing — Claude/GPT-3.5-class models with good agentic workflows often beat one-shot GPT-4.

### Q26: **B. LangGraph + roles + reflection + HITL approval + caps**
A real production-shaped architecture; everything else has fatal omissions.

---

## 📊 Score Yourself

- 24-26 → 🏆 Agent architect.
- 21-23 → ✅ Solid.
- 17-20 → ⚠️ Re-read framework comparison + stop conditions.
- <17 → 🔁 Rewatch Andrew Ng + LangGraph multi-agent videos.

---

## 🃏 Add To Your Flashcards

- When to multi-agent vs not
- Supervisor / hierarchical / sequential / debate / voting / reflection patterns
- LangGraph / CrewAI / AutoGen / OpenAI Agents SDK / Computer Use
- max_iterations + budget cap + wall-clock cap
- Anthropic SWE-bench multi-agent gain
- Per-agent observability
- MCP for tools; no agent-to-agent universal standard yet

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 7 — Evaluation & RAGAS](../Module-07-Evaluation-RAGAS/Reading.md)
