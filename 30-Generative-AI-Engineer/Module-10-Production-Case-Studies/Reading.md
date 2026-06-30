# Module 10: Production Case Studies 🏢

> **Why this module matters:** Every previous module gave you a tool. This module is the *integration test*, seven real production GenAI systems shipped by teams who had to make every architectural decision you've learned about. By the end, you can read an AI product launch announcement and reverse-engineer the team's stack. That's the skill that gets you hired into a senior IC or staff role.

> **Prerequisites for this module.** You should have completed Modules 1–9.

---

## 🎬 A Story: How to Read a GenAI Product Like an Engineer

When a product manager forwards you a blog post titled "How Notion Built AI Q&A," 80% of engineers skim for the cool feature. The other 20% the ones who get the senior offers read it as an *architectural decisions document*:

- What model did they pick, and why?
- What's their retrieval strategy?
- How do they handle multilingual?
- What's the eval harness?
- Where are the guardrails?
- What did they get wrong and rebuild?
- What's the cost economics?

This module is seven such case studies, each read as an engineering document. Pick any one and you should be able to sketch the system on a whiteboard from memory.

---

## 📚 Case Study 1: GitHub Copilot, From "Autocomplete" to "Agent" (2021–2026)

**The product.** Copilot started in 2021 as a Codex-powered (GPT-3 fine-tuned for code) autocomplete inside VSCode. By 2024 it was an "AI assistant" with chat, multi-file edits, and a backend rewrite. By 2026 ("Copilot Workspace") it's an agentic system that takes an issue and produces a PR.

**Key architectural evolutions (per GitHub engineering posts):**

| Era | Architecture |
|-----|--------------|
| 2021, Codex autocomplete | Single model, token streaming, codebase context = current file only |
| 2022, Multi-file context | "Folding" of nearby file snippets into the prompt |
| 2023, Chat | Tool calling, retrieval over repo embeddings, multi-turn |
| 2024, Copilot Workspace beta | Agentic plan-then-edit; multi-step; PR drafts |
| 2025-26, Copilot Workspace GA | Full LangGraph-style state machine; multi-model routing; observability |

**Lessons disclosed by GitHub:**
- **Acceptance rate** (the fraction of suggestions developers keep) was the eval north star from day one, a single metric that aligned product and engineering
- **Embedding latency mattered** at autocomplete tier; they bias toward cheaper/smaller embedders here
- **Hallucinated APIs** were the dominant failure mode; mitigated by *constrained retrieval over the actual installed packages*, not the model's training data
- **Cost reductions** from multi-model routing were ~3× since 2023; the fanciest model only fires on multi-file edits

**What you'd build.**
- VSCode extension → backend gateway
- Two prompt paths: inline-completion (latency-sensitive) and chat (quality-sensitive)
- Repository-scoped vector index per user, refreshed on push
- Tree-sitter for code-aware chunking
- Cohere Rerank or BGE-reranker
- Function-calling for "edit file" / "run tests" actions
- LangGraph state machine for the Workspace flow
- Langfuse traces + cost dashboard

---

## 📚 Case Study 2: Cursor, Latency, Latency, Latency (2023–2026)

**The product.** Cursor is the AI-native IDE. It is, in functionality terms, a VSCode fork with deep AI integration; in user experience, it's *faster* and *smarter* at every interaction than Copilot at the same task.

**The architectural moats:**
1. **Speculative edits.** Predict the next edit *before* the user asks; show as a ghost typewriter; commit on tab.
2. **Codebase context at scale.** Long-context (100K+) Claude Sonnet, prompt-cached per session, refreshed incrementally.
3. **Latency obsession.** Cursor's engineering blog is full of TTFT optimization stories, they ship the same model as Copilot but feel 2× faster.
4. **Multi-provider routing.** Claude 3.5 / 4.x Sonnet for heavy reasoning; GPT-4o-mini for trivial completions; OpenAI o-series for "reasoning mode."
5. **Inline edit + chat unified UI**, the user doesn't pick "this is a question" vs "this is an edit"; the system decides.

**The retrieval architecture** (as disclosed in their public engineering content):

- Custom embedder fine-tuned on code (not vanilla OpenAI embedding-3)
- Indexing every file on every commit, with edit-history awareness
- Per-call retrieval is "low-confidence-when-RAG-is-best, high-confidence-when-current-file-is-enough"

**What you'd build.**
- The Module-3 modular RAG stack, but with code-specific everything (tree-sitter chunker, code embedder, code-task reranker)
- Aggressive prompt caching (100K codebase context is mostly stable)
- Streaming everything; perceived latency is the product
- Per-customer cost dashboards

---

## 📚 Case Study 3: Notion AI Q&A, The Index Beneath The Surface (2023–2026)

**The product.** Q&A inside Notion: "Ask anything about my workspace and get an answer with citations." Launched October 2023; rebuilt 2024-2025.

**v1 (2023).** Straightforward RAG. Embed pages, retrieve, generate. Quality was uneven; the "missing memo" story from Module 2 came from this era.

**v2 (2024).** Major rebuild:

- Header-aware chunking
- Hybrid retrieval (dense + BM25)
- Cohere Rerank
- Confidence-thresholded "I'm not sure" fallback
- Citation enforcement
- Per-workspace ACL filter at retrieval (multi-tenant)

**v3 (2025-26).** Modular RAG:

- Router decides between QA, web search, "draft for me," and "edit current page"
- Long-context for small workspaces; RAG for large
- Anthropic contextual retrieval at index time
- Tools: schedule, link other pages, create databases

**Disclosed metrics:**
- 200M+ users; thousands of workspaces with >100K pages
- Workspace embeddings are *per-tenant indexes* (not one shared), critical for performance and ACL
- Retrieval p95 < 300 ms; LLM response p95 < 2 s; first token p95 < 600 ms

**What you'd build.**
- pgvector (existing Postgres for Notion's metadata) → migrate to dedicated vector DB at the per-workspace scale
- LangGraph state machine for the multi-tool flow
- Strict ACL pre-filter (Module 2)
- Modular RAG layer (Module 3)
- RAGAS in CI on a workspace-diverse golden set
- Multi-region serving for global Notion

---

## 📚 Case Study 4: Klarna, Customer Support AI at Scale (2024)

(Covered in Module 3's case study + Module 9's case study; treated here as a *unified architectural recap*.)

**Combined architecture:**
- Multi-model routing (~5% / 60% / 35% by complexity)
- Multilingual embeddings (Cohere embed-v3 multi)
- Hybrid retrieval over policy + ticket-history corpus
- Strict escalation rules, regulated topics → humans
- Tool calling for refund, payment-plan changes
- Confidence-gated handoff (RAGAS faithfulness + reranker + logprob)
- Aggressive prompt + semantic cache
- Streaming + early-cancel
- Langfuse + Datadog cost dashboard + PagerDuty

**Outcome (per Klarna's Q2 2024 earnings):**
- 700 FTE workload handled
- $40M projected operating profit improvement
- $0.30 → $0.04 cost per conversation in 6 months
- CSAT held flat

**The lesson:** *Boring infrastructure compounds.* The headline win was AI; the actual value was the operational discipline.

---

## 📚 Case Study 5: Khan Academy's Khanmigo, Safety-First Tutoring (2023–2026)

**The product.** Khanmigo is Khan Academy's AI tutor, a chatbot that helps students learn, NOT one that gives them answers.

**The architectural distinction:** every prompt is designed to *avoid* directly answering. Instead, it asks Socratic questions, redirects to relevant Khan content, and gently corrects misconceptions.

**Safety architecture (as disclosed):**
- Mandatory parent / educator opt-in
- Conversation transcripts fully logged + reviewable
- Strict content filters (in addition to the model's safety training)
- A "teacher dashboard" exposing every Khanmigo conversation
- Banned topics (self-harm, dating, etc.) with hard refusal + crisis-resource redirect
- Strong system prompt with explicit "do not give the answer" framing

**The infrastructure** (per Khan engineering posts + press):

- GPT-4 (then GPT-4o, then GPT-5) backbone, via OpenAI API
- Custom retrieval over Khan Academy's structured curriculum (skill trees, prerequisite graphs)
- Multi-modal in 2024+ (math notation via vision)
- District-scale telemetry pipelines for educator oversight

**Numbers (publicly reported):**
- Hundreds of thousands of students by 2024; millions by 2025
- Per-conversation cost was a closely-guarded number; estimated at $0.20-$0.50/student/month
- Bill Gates publicly cited Khanmigo as a poster child for "AI for good"

**What you'd build.**
- Module 8's defense-in-depth, but *aimed at preventing too much help* rather than blocking harmful content
- Audit-grade observability (every conversation re-readable; immutable transcripts)
- Educational-content retriever (DocumentSummaryIndex on Khan structure)
- Module 9's serving with strict cost caps per user

---

## 📚 Case Study 6: Stripe Radar (LLM-Augmented Fraud Detection, 2023+)

**The product.** Stripe Radar is Stripe's fraud-detection system. Historically driven by gradient-boosted-trees over thousands of features. Starting in 2023, Stripe added LLM-driven *explanations* and *adjudication* on borderline cases.

**Why LLMs in fraud?** Not for classification, the ML models are far better. For:

- *Explaining* the model's decision in human-readable language for the merchant
- *Adjudicating* edge cases that human review queues sit on
- *Generating* new heuristic rules from textual transaction context
- *Investigating* fraud-ring patterns that emerge in the data

**The architecture (per Stripe engineering blog):**
- Multi-model: gradient-boosted-trees on numerical features (the workhorse) + LLM (Claude / GPT-4 family) for the textual/explanatory layer
- Custom embedding model on transaction descriptions
- Tool-use: LLM can query other internal Stripe APIs to gather context
- Strict guardrails, the LLM never makes the final approve/decline call autonomously on high-value transactions
- HITL for all transactions above thresholds
- Aggressive eval: backtests against labeled fraud cases; the LLM layer is gated on *consistent improvement* over the GBT-only baseline

**What you'd learn:** LLMs are best *augmenting* deterministic systems, not replacing them. The clearest production pattern in regulated industries.

---

## 📚 Case Study 7: Anthropic's Own claude.ai (2023–2026)

**The product.** Claude.ai is Anthropic's web client, the place customers chat with Claude.

**The architecture (Anthropic-disclosed + reverse-engineered from the product):**
- Claude (multiple model variants, Opus/Sonnet/Haiku 4.x as of 2026)
- File / image inputs
- Web search (introduced 2024; powered by their own retrieval stack)
- Tool use via MCP (Module 4)
- Computer Use (Module 6; the demo for the API)
- Projects feature, persistent conversation context per project, with files
- Artifact rendering, code, HTML/SVG, markdown rendered in-line
- Citations on web-search results

**Engineering principles (from Anthropic's public design philosophy):**
- *Steerability*, the user is in charge; Claude's job is to do what was asked
- *Honesty*, refuses gracefully when uncertain or constrained
- *Safety*, Constitutional AI training + classifiers + guardrails + audit
- *Calibration*, confidence expressed in language; not "I'm 78% sure"

**The retrieval-augmentation pattern** (web search):

- A query-rewriter Claude generates search queries
- Independent search-tool runs
- Source extraction + chunking + reranking
- Generation with strict citation requirement
- Output linkified for transparency

**Cost discipline** (per Anthropic's published business notes):

- Prompt caching default for system prompts
- Speculative decoding internal to the serving stack
- Multi-region inference; sub-second TTFT in most markets

**What you'd build.**
- Everything in this course, applied at frontier scale, with frontier safety standards. This is the platonic ideal of a 2026 generative AI engineering team.

---

## 📊 Comparative Architecture Matrix

| | Copilot | Cursor | Notion AI | Klarna | Khanmigo | Stripe Radar | Claude.ai |
|--|--------|--------|------------|--------|-----------|---------------|-----------|
| **Primary model** | GPT-4 family | Claude + GPT + OpenAI o-series | Claude + GPT | GPT-4 (Azure) | GPT-4 / 5 | Claude + GPT | Anthropic in-house |
| **Self-hosted any?** | Yes (per GitHub) | Yes | Some | Mostly hosted | No | Some | Yes (entirely) |
| **RAG?** | Yes (code) | Yes (code) | Yes (workspace) | Yes (policy + ticket) | Yes (curriculum) | Hybrid (GBT + LLM) | Yes (web) |
| **Multi-agent?** | Workspace = yes | Limited | Limited | Limited | No | No | No (single-agent + tools) |
| **Fine-tuning?** | Yes (Codex era) | Yes (custom code embedder) | No (disclosed) | Some | No (disclosed) | Yes (heuristic-rules generation) | Yes (frontier training) |
| **Safety severity** | Medium | Medium | Medium | High (financial) | Very high (minors) | Very high (financial) | Frontier |
| **Latency criticality** | High (autocomplete) | Extreme (autocomplete) | Medium | Medium | Medium | Low | Medium |
| **Eval depth** | Acceptance-rate KPI | A/B everywhere | RAGAS-style | Faithfulness gate | Educator review | GBT-baseline regression | Frontier-research |

The matrix is the deliverable: any GenAI product you encounter can be slotted into something like this. Use it.

---

## 🎯 Architectural Lessons That Repeat

After reading all seven case studies, the patterns:

1. **Latency obsession beats model selection.** The teams that optimized for TTFT (Cursor, Copilot) outperform teams with same-or-better models that didn't (early Notion v1).

2. **Multi-model routing is the cost moat.** Every team listed does this in 2026. Single-model architectures are economically dead at scale.

3. **The infrastructure compounds.** Klarna's $0.30→$0.04, Cursor's <200ms p95, Notion's per-tenant index, none came from one breakthrough; all from quarterly grind on caching, routing, observability.

4. **Safety is a system, not a model.** Khanmigo's safety architecture is more elaborate than its model architecture. Stripe Radar's LLM is gated by HITL.

5. **Eval-driven development is the differentiator.** Copilot's acceptance rate, GitHub's offline eval set, Klarna's faithfulness gate, Stripe's GBT-baseline regression, every winning team built eval before it shipped.

6. **Observability is non-negotiable.** All seven have per-request traces. None ship without it.

7. **Retrieval > raw model power, every time.** Better chunking + better hybrid + better reranker + contextual retrieval > switching from Sonnet to Opus.

---

## 🚨 Anti-patterns (Synthesized From All 7 Case Studies)

| Anti-pattern | Which case study illustrates it |
|--------------|----------------------------------|
| Trust the model to know your data | Notion v1 missing memo |
| Skip latency engineering | Anyone competing with Cursor |
| Skip multi-model routing | Anyone competing with Klarna's economics |
| Skip safety architecture in regulated domains | Air Canada (Module 8) |
| Treat tools as guarantees | Stripe Radar's HITL gates |
| Skip cost monitoring | Most startups that died |
| Skip eval in CI | Every team that shipped a regression they couldn't roll back |

---

## 🏗️ Lab: Pick a Real Production AI Product. Architect It Yourself.

This is the capstone lab. Pick one of:

- Perplexity Pro
- Glean Enterprise Search
- Replit Agent
- Devin AI
- ChatGPT search
- Linear Asks (AI-assisted task assignment)
- Slack AI summaries
- Microsoft Copilot for Microsoft 365

For your pick, write a 3-5 page architectural document:

1. **What does the product do?** (1 paragraph)
2. **What model(s) do you think they use, and why?**
3. **What is the retrieval architecture?** (data sources, embedder, vector DB, chunking, reranker, contextual retrieval?)
4. **What is the orchestration?** (agent? RAG? multi-step?)
5. **What guardrails are in place?**
6. **What is the eval discipline?**
7. **What is the cost architecture?** (multi-model? caching?)
8. **What is the observability stack?**
9. **What are the engineering trade-offs you'd guess they made?**

This document is your portfolio piece. Senior+ interviewers in AI shops will ask you to do exactly this, verbally, on a whiteboard, in 45 minutes.

---

## ✅ Module 10 Summary

You now know:

- 🏢 Seven production GenAI systems' architectures end-to-end
- 🎯 The patterns that repeat across them
- 🚨 The anti-patterns to flag in your own designs
- 🏗️ How to read any AI product launch announcement as an engineering document

**This is the end of the course's reading material. Next:**
1. 🎥 [Videos.md](./Videos.md), production deep-dives
2. ✏️ [Quiz.md](./Quiz.md), last module quiz
3. 📋 [Cheat-Sheet.md](./Cheat-Sheet.md)
4. ➡️ Take the Practice Exams + Final Mock

> **Where this leads.**
> - **Outside this course:** the interviews. You're now equipped for the Anthropic, OpenAI, Cohere, Databricks, and AI-first-startup applied-AI-engineer loops. The system-design questions you'll face are *almost exactly* the case studies in this module.

---

## 📚 Further Reading (Optional)

- 🏢 GitHub Copilot Engineering blog (especially the 2023-2025 architecture posts)
- 🏢 Cursor engineering blog
- 🏢 Notion AI engineering posts
- 🏢 Klarna AI assistant, Q2 2024 earnings + Hacker News AMA
- 🏢 Khan Academy Khanmigo announcements + Bill Gates' coverage
- 🏢 Stripe Engineering, Radar and LLM-augmented adjudication
- 🏢 Anthropic claude.ai blog + design notes
- 📖 *Designing Machine Learning Systems* (Chip Huyen, O'Reilly 2022), pre-LLM but the design discipline is the same
- 📖 *AI Engineering* (Chip Huyen, O'Reilly 2024), the post-LLM update; companion text for this entire course
- 🎬 AI Engineer Conference (annual, San Francisco), every production talk on YouTube
