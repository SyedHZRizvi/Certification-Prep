# Module 1: Claude Foundations & Constitutional AI 🧬

> **Why this module matters:** Claude is not "another GPT." It was built by people who *left OpenAI in 2021 precisely because they thought the safety story was being shortcut*. Every quirk of the model — its refusal patterns, its high IQ score on long-context reasoning, its willingness to push back on a prompt — flows from a specific intellectual lineage you cannot understand by reading an API reference. This module is the lineage.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - Basic ML vocabulary (model, weights, training, inference)
> - General LLM literacy (you've used ChatGPT, Gemini, or any chatbot for ≥3 months as a user)
> - A modern programming language (Python or TypeScript) at intermediate level
>
> If those are shaky, spend an evening on Andrej Karpathy's "Intro to Large Language Models" YouTube talk and come back. The technical depth in later modules assumes you understand what an LLM token is and why context windows have limits.

---

## 📖 A Story: The Day Seven OpenAI Researchers Walked Out

It is May 2021. In a converted brick warehouse in San Francisco's Mission Bay neighborhood, Dario Amodei — VP of Research at OpenAI, lead author of the GPT-3 paper — is having a quiet conversation with his sister Daniela. Around them, six senior OpenAI colleagues are working through a similar conversation with their own families. By the end of the month, all seven will have resigned. The official statement, when it comes, is corporate-bland. The real reason is not.

The Amodeis and their colleagues — Tom Brown (lead author of GPT-3), Jared Kaplan (who would later publish the Scaling Laws paper), Sam McCandlish, Jack Clark, Jared Mueller, and Chris Olah — believed that **the field was racing past safety**. They had watched GPT-3 ship and seen its capabilities; they had run experiments on what would later become GPT-4; they had read the same internal docs as everyone else. And they had concluded that the gap between "what these models can do" and "what we can prove about how they behave" was widening, not closing.

By September 2021, they had founded **Anthropic** — incorporated as a Public Benefit Corporation, structurally bound to consider broader societal impact, not just shareholder return. The thesis was three sentences: *AI will be the most consequential technology of our generation. The way it is built will determine whether that consequence is net positive or net negative. We will try to be the company that bends the trajectory.*

Eighteen months later, in December 2022, Anthropic published the paper that gave their entire approach its name: **"Constitutional AI: Harmlessness from AI Feedback"** by Bai et al. The technique it described — using a written "constitution" of principles and an AI critic to train models to be helpful and harmless without requiring tens of thousands of human safety-labels for every output — became the seed of every Claude model since. **Every interaction you will ever have with Claude is shaped by that paper.** This module explains why, what it means, and how to think with it.

The story matters because the *product* matters. Claude refuses things GPT does not refuse. Claude pushes back when you ask it to roleplay something it considers harmful. Claude sometimes opens with a clarifying question instead of doing what you asked. These are not bugs. They are the direct, traceable consequence of seven researchers walking out of a San Francisco warehouse in 2021 and writing a paper in 2022.

---

## 🏛️ The Anthropic Origin Story (You Will Be Asked About This)

| Year | Event | Why it matters |
|------|-------|----------------|
| **2015** | OpenAI founded by Sam Altman, Elon Musk, Ilya Sutskever, Greg Brockman + others as a nonprofit. | Setting the stage. |
| **May 2020** | OpenAI ships GPT-3 (175B parameters). Dario Amodei is lead author of the paper. | First "wow" moment for general-purpose LLMs. |
| **May 2021** | Dario, Daniela Amodei, and 5 senior OpenAI researchers resign together. | The split that becomes Anthropic. |
| **Sept 2021** | **Anthropic founded** as a Public Benefit Corporation in San Francisco. | Structurally different from OpenAI: PBC charter, not a capped-profit. |
| **Dec 2022** | **Constitutional AI paper** (Bai et al. 2022). | The founding technical idea. |
| **Mar 2023** | **Claude 1.0** launched (initially private API, then Slack integration). | First commercial product. |
| **Jul 2023** | Claude 2 — 100K token context window (industry-leading at the time). | The "long-context" identity is born. |
| **Mar 2024** | Claude 3 family (Haiku, Sonnet, Opus). | The Haiku/Sonnet/Opus naming convention starts here. |
| **Jun 2024** | Claude 3.5 Sonnet — outperforms Claude 3 Opus at a fraction of the cost. | Establishes the "Sonnet is the workhorse" pattern. |
| **Oct 2024** | Computer use beta (Sonnet 3.5 can take screenshots, click, type). | First-of-kind in a commercial model. |
| **Nov 2024** | **Model Context Protocol (MCP)** announced as open standard. | The "USB-C for AI tools" moment (Module 5). |
| **Oct 2024–Feb 2025** | Claude 3.5 Sonnet (new), Claude 3.7 Sonnet, Claude 3.5 Haiku. | Rapid mid-version updates. |
| **2025** | Claude 4 family: Opus 4, Sonnet 4, Haiku 4 — extended thinking, agentic improvements, longer context (~500K tokens for Opus 4.5+). | Current generation as of 2026. |
| **2026** | Claude 4.6 / 4.7 series mid-version refreshes; revenue reportedly surpasses $5B run-rate. | Anthropic now firmly in the top tier of model providers. |

🎯 **Exam pattern:** *"In what year was Anthropic founded?"* → **2021**. *"What model family introduced the Haiku/Sonnet/Opus naming?"* → **Claude 3** (March 2024).

---

## 🧠 What "Constitutional AI" Actually Means

This is the hardest section. Slow down.

There are two ways to teach a language model to behave well. The original way — **Reinforcement Learning from Human Feedback (RLHF)** — was pioneered by OpenAI and used to make ChatGPT pleasant. Anthropic's way — **Constitutional AI (CAI)**, sometimes called RLAIF (Reinforcement Learning from AI Feedback) — uses the model to teach itself.

### The RLHF pipeline (the OpenAI / pre-Claude approach)

```
1. Pre-train on a large text corpus.
2. Supervised fine-tune on human demonstrations of good answers.
3. Collect tens of thousands of "comparison labels" — humans rank
   pairs of model outputs (A better than B).
4. Train a reward model that predicts the human preference.
5. Use Proximal Policy Optimization (PPO) or DPO to fine-tune the
   base model against the reward model.
```

The bottleneck is step 3: **humans have to read and rate outputs**. For safety labels especially, you need humans willing to read potentially harmful content and rate it. That is expensive, slow, and psychologically taxing.

### The Constitutional AI pipeline (the Anthropic approach)

```
1. Pre-train on a large text corpus.
2. Supervised fine-tune on demonstrations.
3. ----- this is where it diverges -----
   For harmlessness:
   a. The model generates a response to a prompt.
   b. A *critic* (often the same model) is asked: "Identify ways
      the response violates [principle from constitution]."
   c. The model is asked to *revise* its response to address
      the critique.
   d. The (prompt, revised response) pair is used as training data.
4. RL phase, but the preference signal comes from an AI labeler
   ("which of these two responses better follows the constitution?")
   instead of a human labeler. This is the "AI feedback" of RLAIF.
```

The result is a model whose harm-avoidance behavior is shaped by a written, auditable set of principles — the **constitution** — rather than by the implicit aggregate preferences of however many crowd-workers happened to rate the outputs.

### What is in the constitution?

Anthropic has published versions of the constitution. It is not a single document; it is a set of guiding principles. Categories include:

- **Helpfulness** — "Choose the response that is most helpful to the user."
- **Harmlessness** — "Choose the response that is least harmful, least toxic, least biased."
- **Honesty** — "Choose the response that is most honest, including being honest about uncertainty."
- **Values from documents** — principles drawn from the UN Universal Declaration of Human Rights, Apple's terms of service, DeepMind's Sparrow guidelines, and others.
- **Anti-manipulation** — "Choose the response least likely to be manipulative or coercive."

**This is not a list of rules Claude follows at runtime.** It is a list of principles used to *train* Claude. At runtime, the trained weights are what enforce the behavior — and they do so somewhat probabilistically, with the same fuzziness any neural network has.

🎯 **MEMORIZE THIS.** Constitutional AI ≠ runtime rule-checking. The constitution shapes *training*. The trained model is what *runs*.

### Why it matters in practice

You will be asked to defend a model choice in front of a CISO or a privacy officer. The defensible answer is:

> "Claude is trained using Constitutional AI — a process in which the model's harmlessness behavior is shaped by an auditable set of principles rather than by ad-hoc human preference labels. This gives us a more reviewable safety story for regulated workloads."

This is the kind of one-paragraph executive answer this module exists to make natural to you.

---

## 👥 RLHF vs CAI vs RLAIF — One Table

| Property | RLHF | Constitutional AI / RLAIF |
|----------|------|---------------------------|
| **Human labels required** | Tens to hundreds of thousands | Far fewer (mostly for helpfulness) |
| **Preference signal source** | Human raters | AI critic guided by constitution |
| **Auditability** | Hard (preferences are implicit) | Easier (principles are written down) |
| **Scalability** | Bounded by human labor | Bounded by compute |
| **Worker harm risk** | High (humans read harmful content) | Lower (AI critic does most of the reading) |
| **Pioneering org** | OpenAI (InstructGPT, 2022) | Anthropic (Bai et al., 2022) |
| **Used by** | OpenAI, most LLM vendors | Anthropic primarily; aspects adopted elsewhere |

🚨 **Trap on the exam:** *"Anthropic uses RLHF exclusively."* — FALSE. Anthropic uses *both*: RLHF for helpfulness signals where human preference is the right ground truth, and Constitutional AI / RLAIF specifically for the harm-avoidance side.

---

## 🎴 The Claude Model Family: Haiku, Sonnet, Opus

Anthropic names model tiers after Japanese poetic forms — small to large. The convention has been stable since Claude 3 (March 2024).

| Tier | Mental model | Use when | Avoid when |
|------|--------------|----------|------------|
| **Haiku** | "Smart intern. Fast. Cheap." | High volume, low complexity (classification, summarization, simple extraction, conversational routing) | Anything requiring multi-step reasoning, long planning, or complex tool use |
| **Sonnet** | "Senior engineer. Solid. Default." | Most production work — RAG over docs, agentic tool use, coding tasks, structured extraction, customer-facing chat | Cutting-edge math, novel research-grade reasoning |
| **Opus** | "Distinguished engineer. Slow. Expensive. The smartest." | Frontier reasoning, complex code refactors, novel agentic planning, math, science, hard analytical work | High-throughput cheap inference; latency-sensitive UIs |

### Approximate pricing tiers (as of 2026-05, illustrative — check console.anthropic.com)

| Tier | Input $/Mtok | Output $/Mtok | Latency P50 | Context |
|------|--------------|---------------|-------------|---------|
| **Haiku 4.5** | ~$1 | ~$5 | ~250 ms | 200K |
| **Sonnet 4.6** | ~$3 | ~$15 | ~600 ms | 200K (1M with beta header) |
| **Opus 4.6** | ~$15 | ~$75 | ~1.5 s | 500K |

Prompt caching cuts the *cached* portion of input cost by **~90%**, so a 50K-token system prompt that costs $0.15 uncached costs about $0.015 cached. We will deconstruct this in Module 3.

### Choosing the tier — the routing matrix

```
Question to ask                        → Tier
─────────────────────────────────────────────
"Will the user wait > 1 second?"       → Haiku
"Is the task primarily classification
  or extraction?"                      → Haiku
"Is this a high-volume background job?"→ Haiku
"Is it general chat or agentic work
  with 1-3 tools?"                     → Sonnet  ← default
"Is this a hard reasoning task
  (math, code refactor, science)?"     → Opus
"Will the answer go straight into a
  production deployment without
  human review?"                       → Opus (or Sonnet with strong evals)
```

🎯 **Exam pattern:** *"A customer support bot handles 50K conversations/day with simple intent classification."* → **Haiku**. *"A code-review agent that ingests 30 files and rewrites them."* → **Opus** (or Sonnet if cost-constrained, with explicit eval gates).

---

## 🔍 Claude vs GPT vs Gemini — How They Actually Differ

You will be asked to defend a Claude pick over GPT-4o/5 or Gemini 2.5 / 3 Pro. Here is the honest comparison.

| Dimension | Claude | GPT (OpenAI) | Gemini (Google) |
|-----------|--------|--------------|-----------------|
| **Best at (2026)** | Long-context reasoning, agentic coding, structured output | General-purpose chat, code, multi-modal, real-time voice | Multi-modal vision, very long context (2M+ tokens), Google integration |
| **Context window** | 200K (Haiku/Sonnet), 500K+ (Opus 4.6) | 128K standard, 1M extended | 1M–2M (Pro), 10M experimental (Flash) |
| **Native modalities** | Text + images (vision) | Text + images + audio + video (omni) | Text + images + audio + video |
| **Safety profile** | Constitutional AI, often more refusal-prone but more interpretable | RLHF, generally permissive, occasional alignment drift | Mixed; some Google-internal safety overlays |
| **Pricing position** | Mid-tier (Sonnet is the standard) | Slightly cheaper at GPT-4o-mini / 5-nano tier | Lowest of the three at Flash tier |
| **Tool use API shape** | Native JSON Schema, multi-tool parallel by default | Native JSON Schema, parallel tools, function calling | Function calling, ADK |
| **Hosted on** | Anthropic direct API, AWS Bedrock, GCP Vertex | OpenAI direct API, Azure OpenAI | Google AI Studio, GCP Vertex |
| **Open weights?** | No | No | No (Gemma is the open-weight sibling) |
| **Strongest customer case studies** | Cursor, Notion, Klarna, GitLab, Replit, Vercel | ChatGPT consumer, Microsoft Copilot, Stripe, Morgan Stanley | Google Workspace, Vertex AI Search, large GCP customers |

### When to pick Claude

- You need **agentic coding** — Cursor, Sourcegraph Cody, Replit Agent, Windsurf all default to Claude for a reason
- You need **structured extraction** from messy documents — Claude's adherence to schemas is consistently very strong
- You're processing **long documents** (legal contracts, codebases, research papers) — 200K-token context is huge
- You need a **defensible safety story** for regulated industries (healthcare, finance, government)
- You prefer **prompt caching** economics — 90% cost cut on repeated prompts changes the deployment math

### When to pick GPT

- You need **real-time voice** (GPT-4o / 5 Realtime is best-in-class as of 2026)
- You need the **broadest tool ecosystem** (Custom GPTs, Assistants API, code interpreter sandbox)
- You're already on **Azure** and want a single-cloud bill

### When to pick Gemini

- You need **truly massive context** (2M+ tokens — entire codebases, hundreds of PDFs at once)
- You're already on **Google Workspace / Google Cloud** and want native integration
- You need **video understanding** at scale (Gemini is strongest here)

🎯 **Exam pattern:** *"A legal-tech startup ingests 600-page contracts and needs structured extraction with citations to the source page."* → **Claude** (long context + structured output + Anthropic's strong citation support).

---

## 🛡️ Safety, the Responsible Scaling Policy, and ASL Levels

Anthropic publishes a **Responsible Scaling Policy (RSP)** — a public document committing the company to safety capability thresholds before deploying more capable models. It mirrors the BSL (BioSafety Level) framework from biology research.

| ASL Level | Description | What Anthropic commits to |
|-----------|-------------|---------------------------|
| **ASL-1** | Smaller systems with low autonomous risk (e.g., a 2018-era LLM). | Standard responsible AI practices. |
| **ASL-2** | Models that may give limited uplift on bio/chem/cyber risks (current frontier as of late 2024 was here). | Red-teaming, evaluations, weight security commensurate with the risk. |
| **ASL-3** | Models that could provide meaningful uplift to bio/chem/cyber bad actors, OR show early autonomous AI R&D capability. | Significantly hardened security; pre-deployment evals from independent third parties; targeted safety mitigations. |
| **ASL-4** | Higher autonomous capability; models that could meaningfully accelerate bio/chem/cyber attacks. | Yet-to-be-finalized; will require commitments analogous to "BSL-4 lab"-grade controls. |
| **ASL-5** | Hypothetical; superintelligence territory. | Open question; the RSP commits Anthropic to *publishing* what would be required before approaching this. |

Claude 4 family operates in the **ASL-2 to ASL-3** band, depending on capability. The exact assignment is published with each model card.

🎯 **Exam pattern:** *"Anthropic's Responsible Scaling Policy is most analogous to which framework from biology?"* → **BSL (BioSafety Levels)**.

🚨 **Common confusion:** ASL levels are about *capability and risk class*, not absolute safety. ASL-3 does not mean "unsafe." It means "capable enough that we apply stronger safeguards before deployment."

---

## 💰 The Pricing-vs-Capability Decision (CFO-Defensible)

A CFO does not care about constitutional AI. A CFO cares about $/conversation and the unit economics of your AI feature. Here is the math you must be ready to do live.

### Unit-cost example: a customer-support assistant

Assume:

- 30K daily conversations
- Median conversation: 4K input tokens (history + system prompt) + 600 output tokens
- System prompt: 3K tokens, identical across all conversations

**Without prompt caching, Sonnet 4.6:**
- Input: 4K × $3/Mtok = $0.012 per convo
- Output: 0.6K × $15/Mtok = $0.009 per convo
- Per convo: **$0.021**
- Daily: 30K × $0.021 = **$630/day = $19K/month**

**With prompt caching (3K cached at 90% off, 1K dynamic):**
- Cached input: 3K × $0.3/Mtok = $0.0009
- Dynamic input: 1K × $3/Mtok = $0.003
- Output: 0.6K × $15/Mtok = $0.009
- Per convo: **~$0.013**
- Daily: 30K × $0.013 = **~$390/day = $11.7K/month**

**Same workload, Haiku 4.5 (no caching):**
- Input: 4K × $1/Mtok = $0.004
- Output: 0.6K × $5/Mtok = $0.003
- Per convo: **$0.007**
- Daily: **~$210/day = $6.3K/month**

**With caching on Haiku:**
- About **$120/day = $3.6K/month**

The 5x cost differential between Haiku and Sonnet is real. The question is whether Haiku gives you the quality you need for the routing logic / intent classification / response generation in that support flow. We will cover **how to evaluate** that in Module 6; for now, internalize that **tier choice is a quality-vs-cost optimization, not a brand preference**.

---

## 🔬 Scenario Walkthrough (Architect-Style)

> **Scenario:** Your CTO asks: "We want to build a coding assistant for our 800-engineer fleet. Internal-only. No PII, but proprietary source code. Recommend the model and the deployment topology."

**Walkthrough:**
1. **Modality / capability**: Code understanding + multi-step refactoring → **Sonnet 4.6 default; Opus 4.6 for hard refactors** (with a router that promotes to Opus when the task is flagged as "deep refactor").
2. **Deployment topology**: Source code is proprietary. Three real options — Anthropic direct, AWS Bedrock, GCP Vertex. Pick **AWS Bedrock** if AWS is the company standard (data stays in your AWS account; no Anthropic-side egress; same model weights). Pick **Anthropic direct** if you want the freshest features (computer use, MCP, latest models often land here first).
3. **Throughput sizing**: 800 engineers × ~30 requests/day each = 24K requests/day. Well under Anthropic's standard tier. No need for batch.
4. **Caching**: A coding assistant has a large stable system prompt + reusable per-repo context. Strong fit for prompt caching → 80–90% cost savings on the cached portion.
5. **Safety**: Internal-only changes the threat model — prompt injection is still a real concern (someone could paste a malicious README into the chat). Use system prompt to scope behavior; defense covered in Module 8.
6. **Observability**: Langfuse or Helicone for cost + latency telemetry. Anthropic's own Workbench for prompt iteration.

This is the kind of end-to-end answer the architect role expects from you.

---

## ⚠️ Exam Traps & Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "Anthropic and OpenAI are competitors with the same approach." | Different founding thesis (Constitutional AI vs RLHF), different corporate structure (PBC vs capped-profit). |
| "Constitutional AI removes the need for human labels." | It dramatically reduces the labels needed *for harm avoidance*; helpful-vs-unhelpful still uses human preference. |
| "Opus is always better than Sonnet." | Opus is smarter but slower and 5× more expensive. Sonnet is the *default* workhorse for production. |
| "Claude has a 200K context, GPT only 128K — Claude wins." | Context size is one dimension. GPT's 1M-token mode and Gemini's 2M+ contexts blow past Claude when you really need raw context length. |
| "MCP and tool use are the same thing." | MCP is a discovery/transport spec; tool use is the runtime mechanism. Composed, not equivalent. |
| "Claude has no safety mechanism beyond refusing prompts." | Constitutional AI training, RSP/ASL governance, Trust & Safety team, prompt-injection mitigations, content moderation flags. |
| "Anthropic is funded only by VCs." | Significant strategic investment from Google and Amazon ($4B+ from Amazon alone, multiple tranches). |
| "ASL-3 means the model is dangerous." | ASL-3 means the model has *capabilities* warranting stronger pre-deployment controls. Capability ≠ deployed harm. |

---

## 🎓 Key Terms To Know (Add to Flashcards!)

| Term | Definition |
|------|------------|
| **Anthropic** | AI safety lab founded 2021 in San Francisco; makes Claude |
| **Constitutional AI (CAI)** | Training technique using a written constitution + AI critic to shape harm-avoidance behavior |
| **RLAIF** | Reinforcement Learning from AI Feedback — the RL phase of CAI |
| **RLHF** | Reinforcement Learning from Human Feedback — the OpenAI-pioneered alternative |
| **Constitution** | The written set of principles used during CAI training (helpfulness, harmlessness, honesty, anti-manipulation) |
| **Haiku / Sonnet / Opus** | The three Claude model tiers (small / medium / large) since Claude 3 (Mar 2024) |
| **Responsible Scaling Policy (RSP)** | Anthropic's published commitment to safety thresholds before deploying more capable models |
| **ASL-1 / 2 / 3 / 4 / 5** | AI Safety Levels — capability+risk classes analogous to BSL in biology |
| **Public Benefit Corporation (PBC)** | Corporate structure that legally requires considering broader societal impact |
| **Prompt caching** | Anthropic feature that drops cost of repeated prompt prefixes by ~90% |
| **Workbench** | Anthropic's web UI for prompt iteration (console.anthropic.com) |
| **Model card** | Per-model document published by Anthropic with intended use, evals, known limits |
| **Trust & Safety** | Anthropic team responsible for content moderation, abuse monitoring, RSP enforcement |
| **Amazon Bedrock** | AWS-managed inference endpoint for Claude (data stays in your AWS account) |
| **GCP Vertex AI** | Google Cloud-managed inference endpoint for Claude |

### Acronyms cheat-row (Module 1)
| Acronym | Meaning |
|---------|---------|
| CAI | Constitutional AI |
| RLAIF | Reinforcement Learning from AI Feedback |
| RLHF | Reinforcement Learning from Human Feedback |
| RSP | Responsible Scaling Policy |
| ASL | AI Safety Level |
| PBC | Public Benefit Corporation |
| PPO | Proximal Policy Optimization (an RL algorithm) |
| DPO | Direct Preference Optimization (an alternative RL technique) |
| MCP | Model Context Protocol (Module 5) |
| API | Application Programming Interface |
| SDK | Software Development Kit |

---

## 📊 Case Study — Cursor and the "Claude as Coding Default" Pivot

**Situation.** Cursor (Anysphere, Inc.) launched in 2023 as a fork of VS Code with an "AI native" editor. The early product supported GPT-4 and Claude both. By 2024 they had hundreds of thousands of paying users, and by 2025 they had become one of the fastest-growing developer products in history — reportedly crossing $100M ARR by mid-2024 and $500M ARR by Q1 2026.

**The Claude decision.** Cursor's published model evaluations (and their public blog posts through 2024–2025) repeatedly identified Claude — first 3.5 Sonnet, then Sonnet 4, then Sonnet 4.6 — as the **best model for agentic coding tasks**: multi-file refactors, "compose"-style requests, agentic test-then-fix workflows. By late 2024 the default model in the Cursor "Composer" agent flow was Claude Sonnet, with Opus available for hard tasks and GPT-4o/5 available as an alternative.

**Why Claude won the bake-off.**
- **Instruction following over long context** — Cursor needs the model to read 5–30 files and follow precise editing instructions. Claude's 200K context + adherence to multi-step instructions was best-in-class.
- **Tool use semantics** — Cursor implements custom tools (file_read, file_write, run_command, search_codebase). Claude's parallel tool use and clean multi-turn semantics made the agent loop simpler to build.
- **Refusal profile** — for coding work, false-positive refusals are catastrophic. Anthropic shipped repeated improvements (3.5 → 3.7 → 4) reducing false refusals on code.
- **Prompt caching economics** — Cursor sends a large stable system prompt + repo context on every turn. Prompt caching turned what would have been catastrophic unit economics into a viable business.

**Decision and outcome.** Cursor's reliance on Claude is now a publicly disclosed dependency. The company has been an early customer for every major Anthropic feature (computer use, prompt caching, batch, MCP). Their growth helped establish Claude's reputation as the "coding model of record" in 2024–2026.

**Lesson for the architect.**
- **Bake off the models on your real workload before defaulting.** Cursor did not pick Claude on vibes; they ran evals.
- **Model choice is a path-dependent business decision.** Once your prompt library + tool definitions + caching profile are tuned for Claude, switching costs are real.
- **Tier-routing matters at scale.** Cursor uses different tiers (and different providers!) depending on task class. Build the routing matrix into your architecture from day 1.

**Discussion (Socratic).**
- **Q1:** If you were Anysphere's VP Engineering in early 2024, what specific evals would you have run to decide between Claude 3.5 Sonnet and GPT-4o for the Composer agent? Be precise about the eval set.
- **Q2:** A board member argues for switching the default to Gemini 2.5 Pro because its 2M-token context "obviously wins" for codebase work. What is the *honest* counter-argument that does not reduce to "we already integrated with Claude"?
- **Q3:** Cursor disclosed in a 2025 blog post that prompt caching saved them an order of magnitude in serving costs. If a competitor without caching launched at half the price, how would Cursor's unit economics survive — and is the answer "switch to that competitor" or "stay with Claude and cut elsewhere"?

---

## ✅ Module 1 Summary

You now know:

- 📖 **Why Anthropic exists** — the 2021 OpenAI walk-out, the founding as a Public Benefit Corporation, the Constitutional AI thesis
- 🧠 **What Constitutional AI is** — and why it differs from pure RLHF
- 🎴 **The Claude model family** — Haiku / Sonnet / Opus, when to pick each, pricing tiers
- 🔍 **Claude vs GPT vs Gemini** — honest trade-offs across context, tool use, safety, pricing
- 🛡️ **Responsible Scaling Policy + ASL levels** — Anthropic's governance commitment
- 💰 **The unit economics** of an AI feature — and why caching changes the math
- 📊 **The Cursor case study** — a real, dollarized example of model selection paying off

**Next steps:**
1. 🎥 Watch the curated videos: [Videos.md](./Videos.md)
2. ✏️ Take the quiz: [Quiz.md](./Quiz.md) — aim for 21/25
3. 📋 Review the [Cheat-Sheet.md](./Cheat-Sheet.md) before bed
4. ➡️ Move on: [Module 2 — Prompt Engineering with Claude](../Module-02-Prompt-Engineering-Claude/Reading.md)

> **Where this leads.**
> - Inside this course: [Module 2](../Module-02-Prompt-Engineering-Claude/Reading.md) takes the Constitutional-AI-shaped model and shows how to *prompt* it well. [Module 3](../Module-03-Claude-API-SDK-Deep-Dive/Reading.md) shows how to call it from code. [Module 8](../Module-08-Production-Patterns-Safety/Reading.md) returns to safety in operational depth.
> - Cross-course: Prompt Engineering Specialist (course 29) builds vendor-neutral prompt skills. Generative AI Engineer (course 30) goes deeper into evals, fine-tuning, MLOps.
> - Practice: Practice Exam 1 has ~5 questions from this module.

---

## 📚 Further Reading (Optional)

**Primary sources (the originals):**
- 📄 Bai et al. (2022). [*Constitutional AI: Harmlessness from AI Feedback*](https://arxiv.org/abs/2212.08073). The founding paper.
- 📄 Anthropic. [*Responsible Scaling Policy*](https://www.anthropic.com/responsible-scaling-policy). Read v1 and the most recent v2.
- 📄 Anthropic. [*Claude Model Cards*](https://www.anthropic.com/news) (per model release).
- 📄 Bai et al. (2022). [*Training a Helpful and Harmless Assistant with RLHF*](https://arxiv.org/abs/2204.05862). Companion to the CAI paper.
- 📄 Ouyang et al. (2022). [*Training language models to follow instructions with human feedback*](https://arxiv.org/abs/2203.02155). OpenAI's InstructGPT paper — the canonical RLHF reference.
- 📄 Anthropic (2024). [*Building Effective Agents*](https://www.anthropic.com/research/building-effective-agents). Required reading for Module 6.

**Case-study and historical sources:**
- 📄 The New Yorker (Nov 2023). *Anthropic's Dario Amodei on the AI Inflection Point*.
- 📄 Time magazine (2023). *The 100 Most Influential People in AI* (Amodei profile).
- 📄 Wired (Mar 2023). *Inside Anthropic, the Startup that Has Avoided the Spotlight*.
- 📄 Reuters (Feb 2026). *Anthropic Annualized Revenue Hits $5B Mark* (revenue context).

**Practitioner / exam:**
- 📖 [Anthropic Documentation](https://docs.anthropic.com/) — primary source; read the "Overview" and "Models" sections at minimum
- 📖 [Anthropic Cookbook](https://github.com/anthropics/anthropic-cookbook) — runnable examples
- 📖 [Anthropic Workbench](https://console.anthropic.com/workbench) — get hands-on
