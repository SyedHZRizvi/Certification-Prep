# ✏️ Module 10 Quiz: Production Case Studies

> 26 questions · aim 22/26. This is the integration test.

---

## Questions

### Q1. GitHub Copilot's single most important eval metric historically: *(Remember)*
A. MMLU
B. Acceptance rate — fraction of suggestions developers keep
C. Latency
D. Tokens

---

### Q2. Cursor's perceived-speed advantage over Copilot comes PRIMARILY from: *(Analyze)*
A. Bigger model
B. Latency engineering — two-model strategy, prompt caching, speculative decoding, streaming, edge serving
C. Better embeddings only
D. Random

---

### Q3. Notion AI Q&A v1's "missing memo" bug was MOST attributable to: *(Analyze)*
A. Wrong model
B. Chunking + reranker + top-K issues — the system was fixed by header-aware chunking, hybrid + reranker, and citation enforcement
C. Wrong vector DB
D. Network outage

---

### Q4. Klarna AI assistant cost-per-conversation went from ~$0.30 to ~$0.04 via: *(Apply)*
A. One trick
B. Multi-model routing + prompt cache + semantic cache + output brevity + streaming early-cancel — compounding wins
C. Random
D. None

---

### Q5. Khanmigo's safety architecture is unusual because: *(Understand)*
A. It's the same as Claude.ai
B. It's designed to PREVENT direct answers (Socratic tutoring) — guardrails aim at *too much help*, not just harmful content
C. It's open source
D. It has no safety

---

### Q6. Stripe Radar's LLM augmentation is BEST described as: *(Understand)*
A. The LLM replaces fraud classifiers
B. The LLM *augments* gradient-boosted-tree classifiers — explanations, adjudication, edge cases, with HITL gates
C. The LLM is the entire system
D. The LLM is unrelated

---

### Q7. Anthropic claude.ai web search adds: *(Apply)*
A. Just a search bar
B. Query rewriter + search tool + retrieval reranker + cite-required generation + linkified output
C. None
D. SQL

---

### Q8. The architecture pattern that REPEATS across all 7 case studies: *(Evaluate)*
A. Single-model deployment
B. Multi-model routing + tracing + caching + RAG + eval-in-CI
C. No safety
D. Random

---

### Q9. The "latency obsession beats model selection" lesson is BEST illustrated by: *(Analyze)*
A. A team using a small model and worse latency
B. Cursor — same provider models as competitors but feels 2× faster via TTFT engineering
C. A model with no API
D. None

---

### Q10. The infrastructure-compounds lesson is BEST illustrated by: *(Analyze)*
A. One big change
B. Klarna's quarterly $0.30 → $0.04 grind — many small optimizations
C. A single hire
D. None

---

### Q11. A production "AI tutor for kids" should have, AT MINIMUM: *(Apply)*
A. A model
B. Parent opt-in + content filters + transcript audit + crisis-resource redirect + educator dashboard
C. SQL
D. Random

---

### Q12. Per-tenant retrieval indexes (Notion-style) matter for: *(Understand)*
A. Aesthetics
B. Per-workspace ACL + performance + per-tenant relevance
C. Tokenization
D. None

---

### Q13. A team that ships GenAI features without observability is: *(Evaluate)*
A. Faster
B. Flying blind — debugging is impossible; cost surprises are inevitable
C. Cheaper
D. None

---

### Q14. The MOST common cause of production "the AI got it wrong" tickets (Anthropic 2024 survey, Module 2 footnote): *(Remember)*
A. Wrong tokenizer
B. Retrieval bugs (~64%)
C. CPU
D. None

---

### Q15. The capstone lab in this module asks you to: *(Remember)*
A. Pick a real production AI product and architect it yourself
B. Train a new model
C. Build a tokenizer
D. None

---

### Q16. A safety-critical product (Khanmigo / Klarna / Stripe) MUST have: *(Apply)*
A. No guardrails
B. HITL for high-stakes actions + audit logs + escalation rules + regulated-topic handling
C. Single guardrail
D. Random

---

### Q17. Eval-driven development at companies like Anthropic, Klarna, GitHub means: *(Understand)*
A. Eval-as-an-afterthought
B. Eval-in-CI gating PRs + RAGAS-style metrics + held-out goldens + production monitoring
C. Quarterly review
D. None

---

### Q18. The MOST important non-functional requirement for "ChatGPT-style" web apps: *(Evaluate)*
A. Tokens per second
B. Streaming first-token latency
C. Vector DB
D. None

---

### Q19. The "agent" buzzword in Copilot Workspace / Replit Agent / Devin actually means: *(Understand)*
A. The same as autocomplete
B. Multi-step LangGraph-style state machines with tools, HITL gates, persistence, observability
C. SQL
D. Random

---

### Q20. The reason Stripe Radar's LLM is *augmenting* not *replacing* the gradient-boosted tree: *(Analyze)*
A. The GBT is a worse classifier
B. The GBT is far better at the *numerical fraud-classification* task; LLM adds layers (explanations, adjudication, ring detection) the GBT can't
C. The LLM is unreliable
D. None

---

### Q21. The MOST common architecture mistake in case studies: *(Evaluate)*
A. Too much safety
B. Skipping eval-in-CI; shipping regressions you can't roll back
C. Random
D. None

---

### Q22. A retrieval team consistently reports +35% retrieval-failure reduction. Likely cause: *(Apply)*
A. Random
B. Anthropic-style contextual retrieval (the Module 2/3 pattern)
C. Wrong tokenizer
D. None

---

### Q23. The MOST important transferable skill in this entire course: *(Evaluate)*
A. Knowing every framework
B. The ability to read a production AI product launch and reverse-engineer the team's architectural decisions
C. Memorizing model names
D. None

---

### Q24. A staff/senior IC AI engineer interview will ask you to: *(Apply)*
A. Memorize hyperparameters
B. Architect a production GenAI system end-to-end, on a whiteboard, in 45 minutes
C. Train a new model from scratch
D. Random

---

### Q25. The bridge between "demo-ware" and "production-ware" is: *(Evaluate)*
A. Better model
B. Eval + observability + cost + safety + multi-model routing + retrieval engineering — the boring infrastructure
C. Marketing
D. None

---

### Q26. Design challenge: a Linear-style task-routing tool that ingests a Slack thread, identifies the right team to assign, drafts a task, and creates it. Architect it. *(Create)*
A. Single GPT-4 call
B. LiteLLM gateway → Anthropic Sonnet → ingest pipeline (Slack permalink → thread fetch via API → Module-2 chunking + embed in pgvector per workspace) → query: classify intent, retrieve similar past tasks, route via team-skills KG → generate (cite-required, schema-validated draft) → Linear API tool with HITL approval → Langfuse traces → cost dashboard + safety guardrails (PII redaction on Slack content)
C. SQL only
D. Random

---

## 🎯 Answers + Explanations

### Q1: **B. Acceptance rate**
The metric that aligned product and engineering from day one.

### Q2: **B. Layered latency engineering**
Two-model + caching + spec-decode + streaming + edge — the combination.

### Q3: **B. Chunking + reranker + top-K**
The compounding production-RAG failure pattern.

### Q4: **B. Compounding optimizations**
The boring grind. Each small win multiplied.

### Q5: **B. Prevents direct answers (Socratic)**
Unusual: safety means "less help," not "less harm."

### Q6: **B. Augments GBT classifier with HITL gates**
LLM is the layer that adds explanations + edge-case adjudication, not the main classifier.

### Q7: **B. Query rewriter + search + reranker + cite-required + linkified**
The standard pattern for any "talk to the web" feature.

### Q8: **B. Routing + tracing + caching + RAG + eval**
The common infrastructure underneath all 7 case studies.

### Q9: **B. Cursor — same models, faster perception**
The defining example of latency engineering as moat.

### Q10: **B. Klarna grind**
$0.30 → $0.04 isn't one breakthrough; it's many small ones.

### Q11: **B. Multi-layer safety for minors**
Khanmigo's stance: bias toward protective by default.

### Q12: **B. ACL + performance + relevance**
Multi-tenant data requires per-tenant indexes for all three reasons.

### Q13: **B. Flying blind**
Production-engineering 101.

### Q14: **B. Retrieval bugs (~64%)**
The Anthropic 2024 finding referenced in Module 2. Retrieval is where most "the AI got it wrong" tickets come from.

### Q15: **A. Pick a real product, architect it yourself**
The portfolio exercise.

### Q16: **B. HITL + audit + escalation + regulated topics**
Module 8 layered defenses applied to high-stakes domains.

### Q17: **B. Eval-in-CI + RAGAS + goldens + monitoring**
The end-to-end eval discipline.

### Q18: **B. Streaming first-token latency**
Perceived speed dominates.

### Q19: **B. Multi-step state machines with tools and persistence**
The 2024-2026 production meaning of "agent."

### Q20: **B. GBT better at classification; LLM adds layers it can't**
The right pattern: LLM augments, doesn't replace, deterministic systems.

### Q21: **B. Skipping eval-in-CI**
The most common production-engineering mistake.

### Q22: **B. Contextual retrieval**
The Anthropic 2024 technique with reported reductions in that range.

### Q23: **B. Reading a product as architectural decisions**
The transferable skill, period.

### Q24: **B. End-to-end whiteboard architecture in 45 min**
The actual interview format at senior+ levels.

### Q25: **B. The boring infrastructure**
This is the thesis of the course.

### Q26: **B. Full production architecture**
The other options have fatal omissions.

---

## 📊 Score Yourself

- 24-26 → 🏆 Course mastered. On to the practice exams.
- 21-23 → ✅ Strong.
- 17-20 → ⚠️ Re-read the case studies; sketch each architecture.
- <17 → 🔁 Take Modules 2/3/7/9 again; re-do the labs.

---

## 🃏 Add To Your Flashcards

- The 7 case studies + their distinguishing architecture
- The repeating patterns (routing / tracing / caching / RAG / eval)
- The anti-patterns synthesized
- The capstone-lab template

---

## 🏁 End of Course Modules

You've completed all 10 modules. Now apply the knowledge:

- ✏️ [Practice Exam 1](../Practice-Exams/Practice-Exam-1.md) — Modules 1–5
- ✏️ [Practice Exam 2](../Practice-Exams/Practice-Exam-2.md) — Modules 6–10
- 🧪 [Final Mock Exam](../Practice-Exams/Final-Mock-Exam.md) — Full course, 65 Q / 90 min
- 🃏 [Flashcards](../Flashcards.md) — Master the vocabulary

Then go interview. 🚀
