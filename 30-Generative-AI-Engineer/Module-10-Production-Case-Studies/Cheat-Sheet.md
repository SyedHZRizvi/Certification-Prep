# 📋 Module 10 Cheat Sheet: Production Case Studies

---

## 🏢 The Seven Architectures (Memorize)

| Product | Defining feature | Engineering moat |
|---------|------------------|-------------------|
| **GitHub Copilot** | Code autocomplete → agent | Acceptance-rate eval + multi-model routing + Workspace LangGraph |
| **Cursor** | AI-native IDE | Latency engineering (TTFT obsession), prompt cache, speculative |
| **Notion AI** | Workspace Q&A | Per-tenant index + hybrid + rerank + contextual + citation |
| **Klarna** | Customer-support assistant | Multi-model routing + caches + escalation + cost dashboard |
| **Khanmigo** | AI tutor for minors | Safety-first; Socratic prompt; transcript audit; educator dashboard |
| **Stripe Radar** | Fraud detection | LLM augments GBT classifier; HITL for high-value |
| **claude.ai** | Anthropic web client | Constitutional + MCP tools + Computer Use + web search |

---

## 🎯 Patterns That Repeat

1. Multi-model routing (cheap default + frontier for hard)
2. Aggressive caching (prompt + semantic)
3. Hybrid retrieval (dense + BM25)
4. Reranking
5. Cite-required generation
6. HITL for destructive actions
7. Eval-in-CI with goldens
8. Tracing every step
9. Cost dashboard with alerts
10. Streaming first-token

---

## 🚨 Anti-Patterns Synthesis

| Don't | Production cost |
|-------|------------------|
| Single-model deployment | 5-20× over-spend |
| Skip caches | 70-90% over-spend |
| No streaming | Bad UX |
| No observability | Blind in incidents |
| Skip eval-in-CI | Regressions ship |
| Trust LLM with destructive actions | Production incidents |
| No multi-tenant filtering | Data leakage |
| Skip safety in regulated domains | Lawsuits + brand damage |

---

## 📐 The Mental Diagram of Any Production GenAI System

```
[User] → [Gateway: auth, rate-limit, routing]
        ↓
        [Pre-process: PII redaction, guardrail in]
        ↓
        [Query transform: rewrite / decompose / route]
        ↓
        [Retrieval: dense + BM25 + filter pre-applied + rerank + compress]
        ↓
        [Generate: structured prompt, citation-required, refusal-licensed]
        ↓
        [Post-process: PII out, schema validate, toxic check, fact check]
        ↓
        [Action gate: HITL for destructive, allowlist for tools]
        ↓
        [Observe: trace, cost, latency, eval-sample]
```

If your design has all of these, you're production-shaped. If not, you have homework.

---

## 🏆 The Interview Whiteboard Drill

Given any AI product, in 45 minutes answer:

1. Product description (1 paragraph)
2. Model selection + reasoning
3. Retrieval architecture (sources / embedder / DB / chunking / reranker)
4. Orchestration (RAG vs agent vs multi-agent)
5. Guardrails (input + output + action + audit)
6. Eval (Layer 1, 2, 3)
7. Cost architecture (routing / caching)
8. Observability stack
9. Latency engineering
10. Trade-offs the team likely made

This is the skill the rest of the course was building toward.

---

## 🗓️ Memorize Cold

- The 7 case-study products + their distinguishing feature
- Klarna $0.30 → $0.04 cost engineering case
- Cursor <200ms p95 TTFT engineering case
- Notion's chunking + reranker fix case
- Stripe's "LLM augments GBT" pattern
- Khanmigo's "safety prevents *over-helping*" twist
- Anthropic's claude.ai as the reference product

---

## 🏁 End of the Course

➡️ [Practice Exam 1](../Practice-Exams/Practice-Exam-1.md)
➡️ [Practice Exam 2](../Practice-Exams/Practice-Exam-2.md)
➡️ [Final Mock Exam](../Practice-Exams/Final-Mock-Exam.md)
➡️ [Flashcards](../Flashcards.md)

Then: interviews. You're ready.
