---
permalink: /29-Prompt-Engineering-Specialist/
title: Prompt Engineering Specialist (Cert Hub Original)
---

# 🧠 Prompt Engineering Specialist (Cert Hub Original)

**🤖 AI & Generative AI** › Prompt Engineering Specialist (Vendor-Neutral · Claude · GPT · Gemini · Llama)

> **Goal:** Become the person on the team who can ship a production-grade prompt the first time — across Claude, GPT, Gemini, and Llama — and defend it with evals, jailbreak resistance, structured outputs, multi-modal inputs, and a real cost/latency budget.
> **Duration:** 6–8 weeks part-time (8–12 hrs/week)
> **Cost:** $0 to enroll · $20–$50 in API credits across providers · No proctored exam — graded by the included Final Mock + capstone prompt portfolio
> **Difficulty:** Intermediate · Assumes you can read Python and JSON, and have called *any* LLM API at least once

---

## ✨ Why This Certification Matters

### 🎯 The promise

In 2023, "prompt engineer" was a meme job title. By 2026, it is the single most-listed competency on AI-engineering job postings across Anthropic, OpenAI, Google DeepMind, Meta, Cohere, Mistral, and every enterprise that touches an LLM. The reason is brutal economics: the difference between a naïve prompt and a well-engineered prompt on the same model is **2–10× quality** at **30–70% lower cost**, with **3–10× better safety**. Companies that ship LLM features without someone who owns the prompt layer either burn cash on the wrong model tier or ship hallucinations.

This Cert-Hub-original course teaches you **vendor-neutral** prompt engineering — the patterns that transfer across model families, not the trivia of any one vendor's console. You will leave with a portfolio of prompts that work on Claude 4.7, GPT-5, Gemini 2.5, and Llama 3.3, an eval harness you can rerun every model release, and the muscle memory to defend a prompt under adversarial pressure.

### 💼 Career outcomes after completing

- **Prompt Engineer** ($110K–$190K) — Anthropic, OpenAI, Cohere, Scale AI, enterprise AI teams
- **AI Application Engineer** ($130K–$220K) — design and ship LLM features in product
- **AI Solutions Architect (Generative AI specialty)** ($150K–$240K) — enterprise advisory
- **AI Red Teamer** ($140K–$230K) — adversarial prompting, jailbreak research, safety
- **LLM Evaluation Engineer** ($120K–$200K) — owner of the eval harness, A/B framework
- **Conversational AI / Chatbot Lead** ($110K–$180K) — front-line customer-facing LLM ownership
- **Solo founder / consultant** — $5K–$25K projects to fix a startup's broken prompts in 2 weeks

The Cert-Hub Prompt Engineering Specialist ladders directly into **Claude Architect (Cert Hub original)**, **Generative AI Engineer (Cert Hub original)**, **AWS AI Practitioner (course 07)**, **Azure AI Engineer (course 08)**, and **AWS ML Specialty (Cert Hub original)**. It is the right next step after AIF-C01 if you want to specialize in the application layer rather than infrastructure.

### 🏛️ Why The Cert Hub's version is different

- **Engineered to the Cornell · Harvard · Princeton · Stanford pedagogical standard** — every pattern justified with the underlying research paper (Brown et al. 2020 in-context learning, Wei et al. 2022 chain-of-thought, Yao et al. 2022 ReAct, Bai et al. 2022 Constitutional AI, the OpenAI System Card and Anthropic's Responsible Scaling Policy)
- **Vendor-neutral by design** — every concept demonstrated on Claude, GPT, Gemini, AND Llama, with explicit notes on where the patterns diverge
- **Story-driven, real-incident-grounded** — DeepSeek R1 jailbreak (Jan 2025), Bing's "Sydney" prompt leak (Feb 2023), the indirect-prompt-injection wave of 2024, the OpenAI o1/Anthropic Extended Thinking reasoning-model split, Microsoft Tay (2016) as the canonical adversarial cautionary tale
- **Original questions only** — every quiz and practice exam question written from first principles against the published research and vendor docs; no copyrighted dumps
- **Production-grade capstone** — by the end you ship a 12-prompt portfolio with an eval harness, a jailbreak defense write-up, and a cost-monitoring dashboard, all reproducible from your laptop
- **Updated for the 2026 model landscape** — Claude 4.7 (1M context, Extended Thinking), GPT-5, Gemini 2.5 Flash & Pro, Llama 3.3 70B, DeepSeek V3/R1, Mistral Large 2, Cohere Command R+

### 🚀 Ready to start?

Six to eight weeks. The cheapest possible lab is API keys from any two providers (Anthropic + OpenAI gives the broadest coverage; add Google AI Studio and Groq for free-tier Gemini and Llama access). Plan to sit the Final Mock around week 7.

Begin with [Module 1: Foundations →](./Module-01-Foundations/Reading.md)

---

## 🎯 What You'll Master

By the end of this track, you'll be able to:
- Pick the right model family (Claude vs GPT vs Gemini vs Llama vs open-source) for a given task, with a defensible cost/quality justification
- Tune **temperature**, **top-p**, **top-k**, **frequency/presence penalties**, **max tokens**, and **stop sequences** without guesswork
- Write zero-shot, one-shot, and few-shot prompts that beat baseline by a measurable margin on a held-out eval set
- Apply **chain-of-thought** (Wei et al. 2022), **self-consistency** (Wang et al. 2022), **ReAct** (Yao et al. 2022), and **Tree-of-Thought** (Yao et al. 2023) — and know when *not* to
- Force **structured outputs** (JSON Schema, Pydantic, instructor, Anthropic tool-use, OpenAI structured outputs, Gemini structured output) with validation + retry loops
- Prompt **vision** models (Claude 3.5/4, GPT-4V/5, Gemini 2.0/2.5) for OCR, document QA, chart reading, and multi-image reasoning
- Build an **eval harness** — golden set + LLM-as-judge + human spot-check — and run A/B tests in production with statistical significance
- Defend against **prompt injection** (direct, indirect, multi-modal), **jailbreaks** (DAN, role-play, encoding tricks, multi-turn priming), and **prompt leaking**
- Operate prompts at **production scale** — versioning, prompt caching, semantic caching, rate-limit handling, multi-provider abstraction (LiteLLM), observability (Langfuse, PromptLayer, Helicone), and cost monitoring

---

## 📚 The 8 Modules

| # | Module | Time | What You'll Master |
|---|--------|------|--------------------|
| 1 | [Foundations](./Module-01-Foundations/Reading.md) | 3 hrs | Model families, tokens, context windows, temp/top-p/top-k, system vs user vs assistant roles |
| 2 | [Few-Shot & In-Context Learning](./Module-02-Few-Shot-In-Context/Reading.md) | 3 hrs | Zero/one/few-shot, example selection, ordering, ICL research (Brown 2020) |
| 3 | [Chain-of-Thought & Reasoning](./Module-03-Chain-of-Thought-Reasoning/Reading.md) | 3 hrs | CoT (Wei 2022), self-consistency, ReAct, Tree-of-Thought, o1 / Extended Thinking reasoning models |
| 4 | [Structured Outputs & JSON](./Module-04-Structured-Outputs-JSON/Reading.md) | 3 hrs | JSON mode, tool-use schemas, Pydantic, instructor, retry-on-invalid |
| 5 | [Multi-Modal Prompting](./Module-05-Multi-Modal/Reading.md) | 3 hrs | Vision, OCR, document QA, audio (Whisper, Gemini), video |
| 6 | [Evaluation & A/B Testing](./Module-06-Evaluation-AB-Testing/Reading.md) | 3 hrs | Golden sets, LLM-as-judge (G-Eval), RAGAS, OpenAI Evals, statistical A/B testing |
| 7 | [Adversarial Prompts & Jailbreak Defense](./Module-07-Adversarial-Defense/Reading.md) | 3 hrs | Direct/indirect injection, jailbreak taxonomy, instruction hierarchy, sandboxing, output filtering |
| 8 | [Production at Scale](./Module-08-Production-Scale/Reading.md) | 3 hrs | Versioning, prompt caching, observability, multi-provider abstraction, cost monitoring |

**Total study time:** ~24 hrs reading + ~10 hrs videos + ~8 hrs quizzes/exams + ~8 hrs capstone = **~50 hours**

---

## 🧪 Practice Exams (in `Practice-Exams/`)

| Exam | When To Take It | Length | Difficulty |
|------|-----------------|--------|------------|
| [Practice-Exam-1](./Practice-Exams/Practice-Exam-1.md) | After Modules 1–4 | 30 Q / 30 min | ⭐⭐⭐ |
| [Practice-Exam-2](./Practice-Exams/Practice-Exam-2.md) | After Modules 5–8 | 30 Q / 30 min | ⭐⭐⭐⭐ |
| [Final-Mock-Exam](./Practice-Exams/Final-Mock-Exam.md) | 2–3 days before declaring yourself done | **60 Q / 60 min** | ⭐⭐⭐⭐⭐ |

**Plus:** Build your **prompt portfolio** — at least 3 prompts per module, version-controlled, with an eval-harness score. The portfolio is the real "exam" for this Cert-Hub original course.

---

## 📖 The Single Most Important Resource

🔗 **[Anthropic's Prompt Engineering Guide](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview)** + **[OpenAI's Prompt Engineering Guide](https://platform.openai.com/docs/guides/prompt-engineering)** — Read both end-to-end before week 3. The vendors are the primary source on what their models respond to.

Honorable mentions:
- 📘 *Prompt Engineering Guide* by DAIR.AI (free, open-source, comprehensive) — https://www.promptingguide.ai
- 📘 Lilian Weng's blog (*Prompt Engineering*, *LLM-Powered Autonomous Agents*) — the most rigorous engineering writeups on the internet
- 📘 Simon Willison's [llm.datasette.io](https://llm.datasette.io) and his weekly newsletter — practitioner gold
- 🎬 **Anthropic's YouTube channel** — engineering deep-dives from the Claude team
- 🎬 **3Blue1Brown's transformer series** — the visual intuition that makes everything else click
- 📄 The original papers: Brown et al. 2020 (GPT-3 / in-context learning), Wei et al. 2022 (CoT), Wang et al. 2022 (self-consistency), Yao et al. 2022 (ReAct), Yao et al. 2023 (Tree-of-Thought), Bai et al. 2022 (Constitutional AI), Perez & Ribeiro 2022 (prompt injection)

---

## 🎓 What Is The "Exam" For This Cert?

There is no vendor-issued certificate for Prompt Engineering Specialist — this is a **Cert-Hub-original** course. The "credential" is your portfolio.

| Detail | Cert Hub Prompt Engineering Specialist |
|--------|----------------------------------------|
| Provider | The Cert Hub |
| Cost | $0 enrollment · $20–$50 in API credits |
| Time to complete | 50 hours over 6–8 weeks |
| Assessment | 30+30+60 question practice exams + 12-prompt capstone portfolio |
| Pass mark | **85%** on the Final Mock + a working portfolio repository |
| Prerequisites | Basic Python + JSON literacy; AIF-C01 (course 07) or equivalent helps but isn't required |
| Recommended pairing | Claude Architect (Cert Hub) for the deep Anthropic-stack; Generative AI Engineer (Cert Hub) for RAG + fine-tuning |

### Topic Weights

| Topic | Weight | Modules |
|-------|--------|---------|
| 1.0 Foundations & sampling parameters | **12%** | Module 1 |
| 2.0 Few-shot & in-context learning | **12%** | Module 2 |
| 3.0 Chain-of-thought & reasoning | **15%** | Module 3 |
| 4.0 Structured outputs & tool use | **13%** | Module 4 |
| 5.0 Multi-modal prompting | **10%** | Module 5 |
| 6.0 Evaluation & A/B testing | **13%** | Module 6 |
| 7.0 Adversarial prompts & jailbreak defense | **13%** | Module 7 |
| 8.0 Production at scale | **12%** | Module 8 |

🎯 **Where to spend the most study time:** Module 3 (Chain-of-Thought) and Modules 6+7 (Eval + Adversarial). Reasoning and safety are the highest-leverage skills in 2026.

---

## 🚦 Recommended Path

### 6-Week Intensive Plan
```
Week 1: Modules 1, 2          → Quizzes + first 2 portfolio prompts
Week 2: Modules 3, 4          → Practice Exam 1 (after Module 4)
Week 3: Modules 5, 6          → Eval harness scaffolded
Week 4: Modules 7, 8          → Practice Exam 2 (after Module 8)
Week 5: Capstone — 12 prompts, eval harness, jailbreak writeup
Week 6: Flashcards drill + Final Mock → declare done
```

### 8-Week Relaxed Plan (recommended for working adults)
```
Weeks 1-2: Modules 1, 2 + Anthropic docs + Brown 2020 paper
Weeks 3-4: Modules 3, 4 + Wei 2022 CoT paper + tool-use API docs
Weeks 5-6: Modules 5, 6 + build the eval harness
Weeks 7-8: Modules 7, 8 + capstone portfolio + Final Mock
```

---

## ⚠️ The 7 Most Common Reasons People Fail This Course

1. ❌ **Tested only on one model family** — A prompt that wins on GPT-5 can lose on Claude 4.7 and embarrass you on Llama 3.3. Run every capstone prompt on ≥2 families.
2. ❌ **Skipped evals** — "It worked on my 3 examples" is not a prompt. Build the golden set in Module 6. Without it, every other skill collapses.
3. ❌ **Confused JSON mode with tool use** — They produce different guarantees. Module 4 separates them. Read carefully.
4. ❌ **Treated chain-of-thought as a magic incantation** — CoT helps reasoning tasks; it hurts trivial tasks (slower, more tokens, no quality gain). Wei 2022 quantifies the regime.
5. ❌ **Underestimated prompt injection** — "It's just a chat bot" is how the Bing/Sydney leak happened. Module 7 is non-optional.
6. ❌ **Hardcoded a vendor SDK** — `litellm` and `anthropic`/`openai`/`google-genai` clients abstract away. Module 8 covers the multi-provider pattern.
7. ❌ **No cost dashboard** — A naive few-shot prompt at 50K tokens × 1M calls/month at GPT-5 prices = your CFO calling. Module 8 covers monitoring.

---

## 🃏 Use the Flashcards

Prompt engineering is **acronym-, parameter-, and paper-citation-heavy**. The [Master Flashcards](./Flashcards.md) deck has 100+ cards covering every sampling parameter, reasoning pattern, evaluation metric, jailbreak taxonomy entry, and research paper. Drill daily — even 10 minutes/day for two weeks crushes the recall portion of the Final Mock.

---

## 📚 The Research-Paper Reading List (Optional but Recommended)

Every flagship technique in this course traces back to a specific paper. Reading these — at least the abstract + intro + conclusion of each — is the difference between a competent practitioner and someone who can defend their choices in front of a hostile reviewer.

| Paper | Year | Why it matters |
|-------|------|----------------|
| Vaswani et al. — *Attention Is All You Need* | 2017 | The transformer architecture every modern LLM is built on |
| Brown et al. — *Language Models are Few-Shot Learners* | 2020 | The GPT-3 paper; defined in-context learning at scale (Module 2) |
| Wei et al. — *Chain-of-Thought Prompting* | 2022 | The CoT paper (Module 3) |
| Kojima et al. — *LLMs are Zero-Shot Reasoners* | 2022 | "Let's think step by step" (Module 3) |
| Wang et al. — *Self-Consistency* | 2022 | Majority-vote reasoning (Module 3) |
| Yao et al. — *ReAct* | 2022 | Reason + Act agent pattern (Module 3) |
| Yao et al. — *Tree of Thoughts* | 2023 | Search over reasoning paths (Module 3) |
| Bai et al. — *Constitutional AI* | 2022 | Anthropic's safety-training paradigm (Module 7) |
| Liu et al. — *Lost in the Middle* | 2023 | Long-context recall (Module 1) |
| Lu et al. — *Fantastically Ordered Prompts* | 2022 | Few-shot order matters 30+pt (Module 2) |
| Min et al. — *Rethinking the Role of Demonstrations* | 2022 | Random labels still help (Module 2) |
| Greshake et al. — *Not what you've signed up for* | 2023 | Indirect prompt injection (Module 7) |
| Perez & Ribeiro — *Ignore Previous Prompt* | 2022 | Direct prompt injection (Module 7) |
| Wallace et al. — *The Instruction Hierarchy* | 2024 | OpenAI's hierarchy formalization (Modules 1, 7) |
| Agarwal et al. — *Many-Shot In-Context Learning* | 2024 | DeepMind many-shot paper (Module 2) |
| Liu et al. — *G-Eval* | 2023 | LLM-as-judge with CoT (Module 6) |
| OpenAI — *Learning to Reason with LLMs* (o1 system card) | 2024 | The reasoning-model era (Module 3) |
| DeepSeek — *DeepSeek-R1 Technical Report* | 2025 | Open-weights reasoning (Module 3) |

---

## 🗺️ Module → Topic Cross-Reference

If you have a specific topic in mind, here's where it lives:

| Topic | Primary module | Also referenced in |
|-------|----------------|---------------------|
| Tokens, BPE, tokenizers | Module 1 | Modules 2, 5, 8 |
| Temperature, top-p, top-k | Module 1 | Modules 3, 6 |
| System/user/assistant roles | Module 1 | Modules 4, 7 |
| Zero-shot / few-shot / many-shot | Module 2 | Module 3, 8 |
| Example selection (kNN, diverse) | Module 2 | Module 8 |
| Chain-of-Thought | Module 3 | Modules 4, 6 |
| Self-consistency | Module 3 | Module 6 |
| ReAct, Tree-of-Thought | Module 3 | Module 4 (tool use) |
| Reasoning models (o1/Extended Thinking) | Module 3 | Module 8 (cost) |
| JSON Schema, Pydantic, instructor | Module 4 | Modules 5, 6, 7 |
| Tool use / function calling | Module 4 | Module 7 (sandboxing) |
| Vision prompting | Module 5 | Module 7 (image injection) |
| OCR / chart reading | Module 5 | Module 6 (eval) |
| Audio (Whisper, Gemini), video | Module 5 | — |
| Golden sets, LLM-as-judge, G-Eval | Module 6 | Module 7 (safety eval), Module 8 (CI) |
| RAGAS, A/B testing | Module 6 | Module 8 |
| Prompt injection (direct, indirect, multi-modal) | Module 7 | Modules 4, 5 |
| Jailbreaks, Constitutional AI | Module 7 | Module 6 (eval) |
| Prompt caching, semantic cache | Module 8 | Module 2 (many-shot) |
| LiteLLM, observability, spend caps | Module 8 | — |

---

## 📊 Cert-Hub Capstone Portfolio Requirements

To call yourself "Prompt Engineering Specialist" certified by Cert Hub, ship a portfolio repository (private or public, your call) containing:

1. **12 production-grade prompts** — at least one per module's core technique
2. **Eval harness** with a ≥70-example golden set per prompt (Module 6)
3. **At least 2 model families tested** per prompt — confirmed comparable outputs (Module 1, 2)
4. **Pydantic schema** for every structured output (Module 4)
5. **Adversarial regression test** with at least 5 jailbreak attempts per safety-sensitive prompt (Module 7)
6. **Cost analysis** — projected monthly cost at 1K, 10K, 100K calls/month for each prompt (Module 8)
7. **Multi-provider abstraction** — use LiteLLM or equivalent (Module 8)
8. **Observability** — wire one of Langfuse/Helicone/Phoenix (Module 8)
9. **README** explaining your prompt-version-control + CI strategy
10. **Final Mock score** at ≥85% on two separate sittings

The portfolio IS the credential. Recruiters and hiring managers will respect a single working repo more than any printed certificate.

---

## 🌐 Where This Course Fits in the Cert-Hub AI Track

This is course **#29 — Prompt Engineering Specialist (Cert Hub Original)** in the AI & Generative AI track. The full sequence:

| # | Course | Best timing |
|---|--------|-------------|
| 07 | AWS AI Practitioner (AIF-C01) | First or in parallel — foundational AI vocabulary |
| 08 | Azure AI Engineer (AI-102) | After or in parallel — Azure-side equivalent |
| 28 | Claude Architect (Cert Hub Original) | After this course — deep Anthropic stack |
| 29 | **Prompt Engineering Specialist (this course)** | **You are here** |
| 30 | Generative AI Engineer (Cert Hub Original) | After this course — RAG + fine-tuning + deployment |
| 31 | AWS ML Specialty (MLS-C01) | Later — the rigorous ML-engineering depth |

A typical AI-engineering job interview will draw across all 6 of these. Doing this course first gives you the prompt-layer fluency to make sense of the others.

---

## 🎬 Start Here

👉 [**Module 1: Foundations**](./Module-01-Foundations/Reading.md)

---

## 📅 Suggested Daily Study Schedule (8-Week Plan)

| Week | Mon-Thu | Fri | Sat | Sun |
|------|---------|-----|-----|-----|
| 1 | Module 1 Reading + Videos | Quiz | Flashcards drill | Build first portfolio prompt |
| 2 | Module 2 Reading + Videos | Quiz | kNN few-shot exercise | Build second prompt |
| 3 | Module 3 Reading + Videos | Quiz | CoT + self-consistency lab | Practice Exam 1 |
| 4 | Module 4 Reading + Videos | Quiz | Pydantic + instructor lab | Build third prompt |
| 5 | Module 5 Reading + Videos | Quiz | Vision + multi-modal lab | Build fourth prompt |
| 6 | Module 6 Reading + Videos | Quiz | Build the eval harness | Practice Exam 2 |
| 7 | Module 7 Reading + Videos | Quiz | Adversarial regression suite | Build remaining prompts |
| 8 | Module 8 Reading + Videos | Final Mock Exam | Capstone polish | Declare done |

You got this. 🧠
