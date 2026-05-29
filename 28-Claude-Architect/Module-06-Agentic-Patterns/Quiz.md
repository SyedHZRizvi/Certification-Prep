# ✏️ Module 6 Quiz: Agentic Patterns with Claude

> **Instructions:** Answer all 25 questions WITHOUT looking at the reading.
> Then check your answers below. Aim for 21/25 minimum.
>
> **Bloom distribution (this quiz):** Remember 5 · Understand 7 · Apply 7 · Analyze/Evaluate 5 · Create 1.

---

## Questions

### Q1. Anthropic's "Building Effective Agents" distinguishes between: *(Understand)*
A. Strong AI and weak AI
B. Workflows (fixed control flow with LLM nodes) and agents (model decides next action)
C. Cloud and on-prem
D. Python and TypeScript

---

### Q2. Which is NOT one of the five canonical workflow patterns? *(Remember)*
A. Prompt chaining
B. Routing
C. Parallelization
D. Recursive distillation

---

### Q3. A task: "Score a tweet, revise if score below threshold, repeat until acceptable." This is: *(Apply)*
A. Pure ReAct
B. Evaluator-optimizer
C. Routing
D. Prompt chaining

---

### Q4. A coding agent has 25 tools and is making bad tool choices. The MOST APPROPRIATE architectural fix is: *(Analyze)*
A. Switch to Opus
B. Split into hierarchical agents: top-level dispatcher (3-5 verbs) + specialized sub-agents (5-8 tools each)
C. Add 25 more tools
D. Increase temperature

---

### Q5. The "ReAct" pattern name stands for: *(Remember)*
A. Reactive Architecture
B. Reason + Act
C. Recursive Action
D. Real-time Activation

---

### Q6. A long agent trajectory (47 turns to answer a simple question) is USUALLY: *(Understand)*
A. A sign of deep reasoning
B. A sign of thrashing — bias for short, confident trajectories; investigate
C. Optimal
D. Unrelated to quality

---

### Q7. The "claude-agent-sdk" pattern (Anthropic's reference implementation) includes which built-in concerns? *(Apply)*
A. Step caps, cost caps, streaming, tool-use loop, MCP support, hooks for auth/logging
B. Only the API client
C. Only embeddings
D. Vector DB

---

### Q8. "LLM-as-judge" is BEST described as: *(Understand)*
A. A new model architecture
B. Using a second LLM (with a rubric) to score the first LLM's outputs as part of an eval suite
C. A legal compliance tool
D. A user-facing chat feature

---

### Q9. A team ships a prompt change. The Workbench output looks better. The missing step before rolling out is: *(Apply)*
A. Push to prod immediately
B. Run the holdout eval suite quantitatively and compare to baseline; if regressed, do not ship
C. Lower temperature
D. Switch hosts

---

### Q10. A REAL agent uses the canonical loop. The 6 hard parts (beyond the loop) include: *(Understand)*
A. Step cap, cost cap, tool timeout, confirmation gates for destructive actions, restart-from-checkpoint, observability
B. Choosing a logo
C. Picking colors
D. Marketing

---

### Q11. When NOT to use a framework like LangChain: *(Analyze)*
A. Always — never use frameworks
B. When your control flow is simple/unique and a 60-line custom loop would be more debuggable
C. When you already use Python
D. When you have <100 users

---

### Q12. Routing as a workflow pattern is BEST for: *(Apply)*
A. Always using Opus
B. Classifying input intent and dispatching to specialized prompts/models (e.g., cheap intents to Haiku, complex to Sonnet)
C. Random splitting
D. Disabling caching

---

### Q13. Parallelization-sectioning vs parallelization-voting differ in: *(Understand)*
A. Cost only
B. Sectioning = different aspects in parallel (security + perf + style); voting = same task by N prompts, pick best/majority
C. Voting is always better
D. They are the same

---

### Q14. The MAIN benefit of orchestrator-workers vs single-agent: *(Apply)*
A. Cheaper
B. The orchestrator dynamically plans subtasks while workers (with smaller tool surfaces) execute — better accuracy on complex tasks
C. No benefit
D. Requires fewer evals

---

### Q15. The CORRECT response to a user-facing destructive action (e.g., delete_file) in an agent is: *(Apply)*
A. Just execute it
B. Require explicit user confirmation (Replit's "are you sure?" pattern) + server-side auth + audit log
C. Skip silently
D. Use Opus

---

### Q16. A "holdout set" in evals is: *(Understand)*
A. Test data the model never saw
B. A curated set of "golden" tasks with known outcomes, re-run on every prompt change to detect regressions
C. The validation split
D. A backup model

---

### Q17. "Trace replay" means: *(Understand)*
A. Re-running ATC tower recordings
B. Recording prod agent traces; rerunning them on a new prompt; comparing outputs side-by-side
C. Live debugging
D. Logging to disk

---

### Q18. Cursor's Composer feature evolution went through pattern stages including: *(Analyze)*
A. Single call → single agent → orchestrator+workers → evaluator-optimizer → per-tier routing
B. All Opus, always
C. Random
D. Workflow only

---

### Q19. A "skill" in Anthropic's claude-code SDK is: *(Remember)*
A. A flashcard
B. A named sub-agent / specialized sub-flow with its own system prompt and tool subset
C. A user
D. A backup

---

### Q20. The PRIMARY reason to set a $ cost cap on an agent session: *(Understand)*
A. Aesthetics
B. Prevent catastrophic confused-agent runs (a looping Opus session can hit $400 in 15 min)
C. Reduce quality
D. Improve latency

---

### Q21. Pure evaluator-optimizer loops should have a: *(Apply)*
A. No cap — let the model decide
B. Hard MAX_ITERATIONS cap (and a cost cap) — to prevent infinite refinement
C. Single iteration always
D. Random cap

---

### Q22. The 4 levels of eval (per the module) are: *(Remember)*
A. Unit, component, agent, system
B. Cold, warm, hot, lava
C. A, B, C, D
D. Local, region, global, universe

---

### Q23. A 30-eval suite of "golden" tasks regresses 5% on a new prompt. The correct action is: *(Apply)*
A. Ship anyway — it's only 5%
B. Investigate the 5% regression cause; if cause-known and acceptable, ship with monitoring; if not, fix or abort the prompt change
C. Switch frameworks
D. Disable evals

---

### Q24. Which statement is FALSE? *(Evaluate)*
A. Most production "agents" are 80% workflow / 20% true agency
B. ReAct = Reason + Act
C. Evals are optional for any system above hobby scale
D. Hierarchical agents help with large tool surfaces

---

### Q25. Design challenge: An "incident summarizer" agent reads from Sentry, GitHub, and Slack to produce a 1-page postmortem. Sketch the architecture: *(Create)*

> *Create-level note:* compose multiple patterns.
A. One Opus call with all data crammed in
B. Routing (classify request) + Parallelization (fetch 3 sources) + Prompt chaining (timeline → root cause → recommendations) + optional Evaluator-optimizer on final draft + LLM-as-judge in evals + step/cost caps + Langfuse traces + human approval before publish
C. Random
D. Skip MCP

---

## 🎯 Answers + Explanations

### Q1: **B. Workflows vs agents**
Anthropic's canonical framing. Most "agents" are mostly workflows.

### Q2: **D. Recursive distillation**
Made up. The five are: prompt chaining, routing, parallelization, orchestrator-workers, evaluator-optimizer.

### Q3: **B. Evaluator-optimizer**
Generator + critic loop until criteria met. Classic pattern.

### Q4: **B. Split into hierarchical agents**
Standard fix for "too many tools, wrong choices." Sub-agents with focused surfaces.

### Q5: **B. Reason + Act**
ReAct paper (Yao et al. 2022).

### Q6: **B. Usually thrashing**
Long trajectories indicate confusion more often than depth. Investigate.

### Q7: **A. Step caps, cost caps, streaming, tool-use loop, MCP support, hooks**
The agent SDK packages production-grade defaults.

### Q8: **B. Second LLM scores with a rubric**
Surprisingly effective when the rubric is well-designed.

### Q9: **B. Run the holdout eval suite quantitatively**
Eyeballing is not engineering. Compare numbers to baseline.

### Q10: **A. Step cap, cost cap, tool timeout, confirmation gates, restart-from-checkpoint, observability**
The hard parts are not the loop; they're the discipline around it.

### Q11: **B. When your control flow is simple/unique**
Raw SDK + 60 lines often beats a framework for production agents.

### Q12: **B. Classifying intent and dispatching to specialized prompts/models**
The router itself is often Haiku for cost.

### Q13: **B. Sectioning ≠ voting**
Different sub-tasks in parallel vs same task with multiple raters.

### Q14: **B. Orchestrator plans, workers execute with focused surfaces**
Cursor v3 documented this transition.

### Q15: **B. Confirmation + auth + audit log**
Replit's hard-won lesson.

### Q16: **B. Curated golden tasks with known outcomes**
Re-run on every prompt change.

### Q17: **B. Record traces → rerun on new prompt → side-by-side compare**
Langfuse / Phoenix / OpenLLMetry all support this.

### Q18: **A. Single call → single agent → orchestrator+workers → evaluator-optimizer → per-tier routing**
Cursor's documented architecture progression — each stage applied a canonical pattern.

### Q19: **B. Named sub-agent with its own system prompt and tool subset**
Anthropic's primitive for hierarchical / specialized flows.

### Q20: **B. Prevent catastrophic confused-agent runs**
Cost caps are about *limiting blast radius*, not improving median quality.

### Q21: **B. Hard MAX_ITERATIONS + cost cap**
Without caps, evaluator-optimizer can loop indefinitely.

### Q22: **A. Unit, component, agent, system**
Per-call → per-tool → per-trajectory → end-to-end.

### Q23: **B. Investigate, decide, fix or abort**
Don't ship regressions on autopilot. Don't reject all regressions on autopilot. Investigate.

### Q24: **C. Evals are optional for any system above hobby scale**
FALSE. Mandatory at any non-trivial scale.

### Q25: **B. The composed pattern**
Realistic incident-summarizer architecture: multiple canonical patterns + production discipline + observability + human-in-the-loop for destructive (publish) action.

---

## 📊 Score Yourself

- 24–25/25 → 🏆 Module 6 mastered.
- 21–23/25 → ✅ Solid.
- 17–20/25 → ⚠️ Re-read the five canonical workflow patterns.
- <17/25 → 🔁 Restart the Reading.md.

---

## 🃏 Add To Your Flashcards

- 5 workflow patterns: prompt chaining / routing / parallelization / orchestrator-workers / evaluator-optimizer
- Workflow vs Agent — fixed flow vs model-decided flow
- ReAct = Reason + Act
- Step cap, cost cap, tool timeout, confirmation gate, restart-from-checkpoint, observability
- Eval levels: unit / component / agent / system
- LLM-as-judge — rubric-based scoring by a second LLM
- Hierarchical agent fix for too-many-tools problem
- Anthropic guidance: bias for simplest pattern that works
- Holdout sets prevent silent regression
- Replit lesson: confirmation gates for destructive actions

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 7 — RAG & Long-Context](../Module-07-RAG-Long-Context/Reading.md)
