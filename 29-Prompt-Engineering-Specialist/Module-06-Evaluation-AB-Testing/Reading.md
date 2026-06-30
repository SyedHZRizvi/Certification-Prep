# Module 6: Evaluation & A/B Testing 📊

> **Why this module matters:** 13% of the Final Mock. *"It worked on my three examples"* is not a prompt, it's a hunch. The single most important capability separating senior from junior prompt engineers is the discipline to build, run, and iterate on a real evaluation harness. Without evals, every other skill in this course produces over-confident garbage.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - Modules 1–5
> - Basic statistics (mean, percentile, confidence interval intuition)
> - Reading a CSV / JSONL file
> - Running a small Python script
>
> You do NOT need a statistics degree. We define every metric we use.

---

## 📈 A Story: The Startup That Almost Shipped a Worse Prompt

Meet Bea, head of AI at a Series B legal-tech startup. Her team built a contract-clause classifier using Claude 3 Sonnet. They iterated for 3 weeks. The team lead, Sam, was convinced his latest prompt was better "it just *feels* sharper" and pushed for a Friday-afternoon deploy.

Bea blocked it. *"Let's run it through the eval harness first."*

Sam's new prompt scored **0.82 F1** on the 247-example golden set. The current production prompt scored **0.86 F1**. Sam's prompt was *worse*. The "sharper feel" was confirmation bias on the 8 examples he'd been hand-testing.

The team would have shipped a regression to 14,000 daily contract analyses. Estimated bad classifications: ~560/day. Estimated user churn: significant. Bea's two-hour Friday eval-harness investment saved a quarter's worth of work.

This module is how Bea's harness is built. Every prompt-engineering team needs one. By the end you'll have built one yourself.

---

## 🧱 The Three Pillars of LLM Evaluation

Real LLM evaluation requires THREE complementary signals. No one of them is sufficient.

| Pillar | What it measures | Pros | Cons |
|--------|------------------|------|------|
| **Programmatic / exact match** | Does output equal expected? | Cheap, fast, repeatable | Brittle on free-form output |
| **LLM-as-judge** | Does another LLM rate the output as correct/good? | Handles free-form text well | Bias, inconsistency, cost |
| **Human review** | Does a human (often expert) approve? | Ground truth | Slow, expensive, doesn't scale |

The mature stack: programmatic for the cheap obvious checks → LLM-judge for nuance at scale → human spot-check on a sample.

---

## 📦 Building Your First Golden Set

The **golden set** (a.k.a. eval set, regression set, benchmark set) is your sample of inputs + expected outputs. It is the SINGLE most important artifact a prompt engineer owns.

### What goes in a good golden set

| Component | Count for an MVP |
|-----------|------------------|
| Easy, typical cases | 30–50 |
| Common edge cases | 20–30 |
| Hard cases | 10–20 |
| Adversarial / known-failure cases | 10–20 |
| Known-good outputs (with rationale) | All of the above |
| **Total** | **70–150 examples** |

### Sources for examples

1. **Real production traffic** (best, if you can use it, beware PII)
2. **Synthetic generation** (prompt a frontier model to generate edge cases)
3. **Bug reports** (every failure becomes a regression test)
4. **Expert curation** (SMEs hand-design hard cases)
5. **Public benchmarks** (GSM8K, MMLU, HumanEval, HELM), for capability tracking, not application eval

### JSONL is the standard format

```jsonl
{"input": "Charge me $5 for the burger", "expected": {"intent": "purchase", "amount": 5.0, "currency": "USD"}, "tags": ["easy", "payment"]}
{"input": "Could you possibly transfer like maybe a hundred bucks to checking", "expected": {"intent": "transfer", "amount": 100.0, "currency": "USD"}, "tags": ["edge", "ambiguous"]}
```

JSONL plays nicely with every eval framework and is diff-friendly in git.

---

## ✅ Programmatic / Deterministic Evaluators

These are the cheapest and most reliable. Run them first.

| Evaluator | What it checks | Use when |
|-----------|----------------|----------|
| **Exact match** | `output == expected` | Classification, structured fields |
| **Regex match** | Pattern in output | Format compliance, currency, dates |
| **JSON Schema validation** | Output parses against schema | Structured outputs (Module 4) |
| **Numeric tolerance** | `abs(out - exp) < tol` | Calculator, percentages, ranges |
| **Set membership** | `output in allowed_set` | Enum / categorical answers |
| **Levenshtein / fuzzy match** | Edit distance | Near-matches in spelling, OCR |
| **BLEU / ROUGE / METEOR** | N-gram overlap with reference | Translation, summarization (rough) |
| **Embedding similarity** | Cosine similarity to reference | Free-form answers with semantic equivalence |
| **Length / token count** | Output within bounds | Brevity / verbosity constraints |
| **Custom heuristics** | Domain-specific rules | Anything your business cares about |

🎯 **Memorize:** *BLEU/ROUGE are SHALLOW.* They reward exact word overlap, not meaning. Use them as one signal among many, never alone.

---

## 🤖 LLM-as-Judge, The Eval That Scales

LLM-as-judge uses another (often more powerful) LLM to evaluate outputs against criteria. Originated in *G-Eval* (Liu et al. 2023) and has become the production standard.

### A minimal LLM-judge prompt

```python
judge_prompt = """You are evaluating a response against criteria.

CRITERIA:
- The response correctly identifies the customer's primary intent.
- The response uses ONLY the allowed labels: [billing, technical, shipping, other].
- The response is concise (≤30 words).
- The response does NOT make up information.

INPUT:
{input}

EXPECTED INTENT:
{expected}

ACTUAL RESPONSE:
{response}

Rate the response on a 1–5 scale and explain in 1 sentence.

Output JSON:
{"score": <int 1-5>, "reasoning": "<one sentence>"}
"""
```

### G-Eval (Liu et al. 2023) refinements

The G-Eval paper added two key ideas:

1. **Chain-of-thought scoring**, judge explains BEFORE rating (CoT principle from Module 3)
2. **Probability-weighted scores**, average the scores across N judge samples for stability (self-consistency from Module 3)

```python
def g_eval_score(input, expected, response):
    scores = []
    for _ in range(5):
        result = judge_llm.call(prompt=g_eval_prompt(input, expected, response), temperature=0.7)
        scores.append(result["score"])
    return sum(scores) / len(scores)
```

### Known biases of LLM judges (memorize these)

| Bias | Description | Defense |
|------|-------------|---------|
| **Position bias** | Judge prefers whichever response comes FIRST in a pair-wise comparison | Randomize order; run both orders, average |
| **Verbosity bias** | Judge prefers longer responses | Constrain length in criteria; penalize verbosity explicitly |
| **Self-preference** | A judge tends to favor outputs from the same model family | Use a DIFFERENT family as judge (Claude judging GPT, etc.) |
| **Sycophancy** | Judge agrees with framing implied in the prompt | Make criteria explicit and neutral |
| **Format / fluency bias** | Judge favors confident, well-formatted output even when wrong | Add "factual correctness" as the highest-weighted criterion |
| **Calibration drift** | Scores are not stable across runs | Use averages across N samples; track over time |

🎯 **Memorize:** *Always use a DIFFERENT model family for the judge than the model under test.* GPT-5 judging GPT-5 has self-preference baked in.

---

## 👥 Human Evaluation

The ground truth, when you can afford it. Best for:

- Calibrating your LLM-judge (does human agreement match LLM-judge agreement?)
- High-stakes outputs (medical, legal, financial recommendations)
- Final acceptance testing before launch

### Inter-annotator agreement (IAA)

When two humans rate the same output, do they agree? Standard metrics:

| Metric | Use | Threshold for "good" |
|--------|-----|----------------------|
| **Cohen's kappa** | 2 raters, categorical | κ > 0.7 |
| **Fleiss' kappa** | 3+ raters, categorical | κ > 0.6 |
| **Pearson / Spearman correlation** | Continuous scores | r > 0.7 |
| **Krippendorff's alpha** | Any number of raters, missing data ok | α > 0.67 |

🚨 **Trap:** If your human raters disagree (low IAA), the task is ambiguous and no automatic eval will save you. Fix the rubric first.

---

## 🛠️ Eval Frameworks Worth Knowing

| Framework | Best for | Notes |
|-----------|----------|-------|
| **Anthropic evals harness** | Cross-Claude evals | Used internally; partially open-sourced |
| **OpenAI Evals** | General-purpose, large community | YAML/JSON-defined evals, runs against any provider |
| **DeepEval** (confident-ai) | Pytest-style, RAG-focused | Good developer ergonomics |
| **RAGAS** | RAG pipelines specifically | Faithfulness, answer relevance, context precision |
| **LangSmith Evaluations** | LangChain stack | UI for human review, dataset versioning |
| **Promptfoo** | Quick prompt A/B testing | YAML config, great for CI |
| **LlamaIndex Evals** | LlamaIndex pipelines | Tightly integrated |
| **Inspect (UK AI Safety Institute)** | Capability and safety evals | Used by AISI for frontier model testing |
| **lm-evaluation-harness** | Academic benchmarks (HELM, MMLU) | Reproducible academic eval |
| **Braintrust** | SaaS-hosted eval platform | Dataset, judge, dashboards |
| **Phoenix (Arize)** | Tracing + eval, open-source | Observability + evals together |

### Picking a framework

| If you want... | Pick |
|----------------|------|
| Quickest setup for prompt A/B | Promptfoo |
| Pytest-native dev workflow | DeepEval |
| RAG-specific metrics | RAGAS |
| Cross-provider, academic-grade | OpenAI Evals or lm-eval-harness |
| Hosted dashboards + collaboration | Braintrust or LangSmith |
| Open-source observability | Phoenix |

---

## 📐 The Metrics You Will Actually Use

### Classification

| Metric | Formula | Use |
|--------|---------|-----|
| **Accuracy** | correct / total | Balanced classes |
| **Precision** | TP / (TP + FP) | "Of what I flagged, how much was right?" |
| **Recall** | TP / (TP + FN) | "Of what should've been flagged, how much did I catch?" |
| **F1** | 2·P·R / (P+R) | Harmonic mean of P and R; good single number |
| **Macro F1** | Average F1 across classes | Imbalanced classes; treat each equally |
| **Micro F1** | F1 of pooled TP/FP/FN | Imbalanced; weighted by class count |
| **Confusion matrix** | Rows: actual; Cols: predicted | Diagnostic, see WHERE you fail |

### Free-form generation

| Metric | Notes |
|--------|-------|
| **LLM-judge score (1-5)** | Most common production metric |
| **Embedding similarity to reference** | Cheap semantic check |
| **Length / token compliance** | Brittle but cheap |
| **Safety violation rate** | From a safety classifier (e.g., LlamaGuard, Anthropic's classifier) |
| **Latency P50/P95/P99** | Engineering health |
| **Cost per request (mean / P95)** | Business health |

### RAG-specific (RAGAS metrics)

| Metric | Question it answers |
|--------|---------------------|
| **Faithfulness** | Does the answer ONLY use retrieved context? (no hallucination) |
| **Answer relevance** | Does the answer address the question? |
| **Context precision** | Of retrieved chunks, how many were relevant? |
| **Context recall** | Of relevant chunks that exist, how many were retrieved? |

---

## 🧪 A/B Testing in Production

You have a candidate prompt that beats the current one on the golden set. Should you ship it to 100% of users? **No**, ship it to a slice and measure.

### The basic A/B harness

1. Pick a randomization key (user ID, request ID, session ID)
2. Hash → bucket → assign A or B
3. Log: bucket, input, output, downstream signals (CTR, conversion, satisfaction)
4. After N requests per arm OR T days, compare metrics with statistical significance
5. Ramp up the winner; document the loser

### Statistical significance, the basics

For a binary success metric (correct vs not):

- **Proportion z-test** or **chi-square test**, what you'll use
- **p-value < 0.05** is the textbook bar (but pre-register your test to avoid p-hacking)
- **Sample size needed** grows quadratically as the effect shrinks
  - Detecting 5pt difference at 80% power needs ~1500 per arm
  - Detecting 1pt difference at 80% power needs ~40,000 per arm

For continuous metrics (latency, cost):

- **Welch's t-test** or **Mann-Whitney U** (non-parametric)
- Report **mean ± 95% CI** and **median**, distributions are usually skewed

### Multi-armed bandits

If you have several candidates and want to allocate traffic dynamically:

- **Thompson sampling**, Bayesian, traffic flows to currently-best arm
- **UCB1 (Upper Confidence Bound)**, frequentist counterpart
- Good when continuous learning matters more than clean p-values

🎯 **Memorize:** *In a production prompt rollout, define your success metric BEFORE you look at the data. Otherwise you'll find a metric that says "ship it."*

---

## 🔁 Regression Testing, Your Safety Net

Every prompt that ever reached production goes into a regression suite. Every change runs the suite before deploy.

```python
# Pseudocode for a regression harness
def run_regression_suite(prompt_version):
    results = []
    for example in load_golden_set():
        output = call_llm(prompt_version, example.input)
        passed = evaluator(output, example.expected)
        results.append({"example_id": example.id, "passed": passed, ...})
    return summarize(results)

# Run before any deploy
new_metrics = run_regression_suite("v17")
old_metrics = run_regression_suite("v16")  # baseline from CI cache

if new_metrics.f1 < old_metrics.f1 - 0.01:
    raise RegressionError("F1 dropped >1pt")
```

This is what Bea's harness does on every PR. It is the most boring and most valuable code in the company.

---

## 🔬 Scenario Walkthrough (Bea's harness build)

> **Scenario:** Bea's team needs an eval harness for their contract-clause classifier (12 classes). Walk through the 1-week build.

**Day 1, Golden set assembly:**
- 60 production samples (anonymized, manually labeled by 2 legal SMEs)
- 30 SME-curated hard cases
- 20 known-failure cases from past bug reports
- 20 adversarial cases (deliberately ambiguous wording)
- 17 from public CUAD benchmark for cross-reference
- Total: **147 examples** stored as JSONL with `input`, `expected_class`, `tags`, `notes_from_smes`

**Day 2, Programmatic evaluators:**
- Exact-match on class label
- JSON Schema validation on full structured output
- Confidence-score plausibility check (rejects 0.95+ confidence on adversarial set)

**Day 3, LLM-judge for free-form rationale:**
- GPT-5 as judge of Claude's rationale (cross-family to avoid self-preference)
- 5-criterion rubric (relevant, specific, cites contract section, no hallucinations, professional tone)
- G-Eval-style: 5 samples, average

**Day 4, Human spot-check protocol:**
- 10% of test runs auto-routed to a queue
- 2 legal SMEs review independently, Cohen's kappa tracked over time

**Day 5, A/B harness:**
- Promptfoo config for local A/B
- Production: feature-flag based bucketing, log to BigQuery, daily dashboard
- Pre-registered success metric: macro-F1 lift ≥ 1.5pt with p<0.05 OR no harm + 20% cost reduction

**Result:** Sam's "sharper" prompt fails the regression check (F1 -4pt). Production is safe.

---

## ⚠️ Exam Traps & Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "BLEU score = quality" | BLEU is n-gram overlap; semantic equivalence is invisible to it. |
| "LLM-judge is objective" | LLM-judges have measurable biases (position, verbosity, self-preference). |
| "Same model can judge itself" | Self-preference bias. Use a different family. |
| "10 examples is enough" | For a real prompt? No. 70–150 for an MVP. |
| "If it works in my console, it works in prod" | Distribution shift kills prompts. Eval on real traffic samples. |
| "Accuracy is the only metric" | Imbalanced classes need precision/recall/F1, not just accuracy. |
| "I'll write the eval after I ship" | Then you've shipped without knowing what you shipped. |
| "p < 0.05 means it's better" | Only if you defined the metric BEFORE looking. p-hacking is real. |
| "All examples are equally important" | Hard / adversarial cases should be weighted higher in your final score. |
| "RAGAS is for any LLM eval" | RAGAS is RAG-specific (faithfulness, retrieval metrics). |

---

## 🎓 Key Terms To Know (Add to Flashcards!)

| Term | Definition |
|------|------------|
| **Golden set / eval set / regression set** | Curated input + expected output pairs used to measure prompt quality |
| **Programmatic eval** | Deterministic check (exact match, regex, schema) |
| **LLM-as-judge** | Use an LLM to grade outputs against criteria |
| **G-Eval** | LLM-as-judge with CoT scoring + averaged samples (Liu et al. 2023) |
| **Position bias** | Judge prefers responses presented first in pairwise |
| **Verbosity bias** | Judge prefers longer responses |
| **Self-preference bias** | Judge prefers outputs from its own model family |
| **Inter-annotator agreement (IAA)** | How much human raters agree (Cohen's/Fleiss' kappa) |
| **F1 score** | Harmonic mean of precision and recall |
| **Macro vs Micro F1** | Per-class average vs pooled |
| **Confusion matrix** | Rows actual × cols predicted |
| **RAGAS** | RAG-specific eval framework (faithfulness, relevance, context precision/recall) |
| **Faithfulness (RAG)** | Answer uses only retrieved context, no hallucination |
| **Regression suite** | Eval set re-run on every change to detect quality drops |
| **A/B test** | Split traffic; compare metrics; declare winner |
| **Pre-registration** | Define metric BEFORE looking at data (anti p-hacking) |
| **Power analysis** | Sample size calculation for detecting a given effect |
| **Multi-armed bandit** | Dynamic traffic allocation favoring better arms |
| **Promptfoo / DeepEval / Braintrust / LangSmith** | Popular eval frameworks |
| **HELM / MMLU / GSM8K / HumanEval / BIG-Bench** | Public capability benchmarks |
| **LlamaGuard / safety classifier** | Tools to score outputs for safety violations |

### Acronyms cheat-row (Module 6)
| Acronym | Meaning |
|---------|---------|
| F1 | Harmonic mean of precision + recall |
| IAA | Inter-Annotator Agreement |
| TP/FP/FN/TN | True / False Positives / Negatives |
| RAGAS | Retrieval-Augmented Generation Assessment |
| MMLU | Massive Multitask Language Understanding (benchmark) |
| GSM8K | Grade School Math 8K |
| HELM | Holistic Evaluation of Language Models |
| CTR | Click-Through Rate |

---

## 📊 Case Study, Anthropic's Eval-Driven Model Releases (2023-2026)

**Situation.** Since Claude 2 in 2023, Anthropic has anchored its model releases on **public eval reports**. The Claude 3.5 Sonnet release (June 2024) included scores on MMLU, GSM8K, MATH, HumanEval, MGSM, GPQA, and a half-dozen others, with side-by-side comparisons to GPT-4o and Gemini 1.5 Pro. Claude 4.7 Sonnet's release continued this pattern, adding new long-context, agentic, and safety benchmarks.

**Why it matters for prompt engineers.** The releases include the **exact eval prompts** Anthropic used, the **system prompts**, and the **temperature settings**. This is engineering-grade transparency. A prompt engineer building on Claude can study these to understand what the model is tuned to expect.

**The downstream effect.** OpenAI, Google, Mistral, Meta, and DeepSeek all now publish detailed eval cards. The model-card-as-eval-report norm is now industry standard. Independent evaluators (LMSYS Chatbot Arena, ScaleAI's SEAL, METR, Apollo Research, UK AI Safety Institute) provide third-party comparison.

**The hidden lesson.** Anthropic's internal eval harness reportedly runs every model snapshot against ~1000 internal evals on every training step. Most of those evals are application-specific and NEVER PUBLISHED. The lesson for application teams: **your evals don't need to be Anthropic-scale, but they do need to be Anthropic-disciplined.** Run them on every change. Track them over time. Block regressions.

**Lesson for the exam / for practitioners.**
- Eval discipline distinguishes hobbyist from professional prompt engineering.
- Public benchmarks measure capability. Your golden set measures product fitness.
- LLM-as-judge has biases, defuse with cross-family judges and averaged samples.
- Pre-registration of metrics is a cheap, powerful anti-bias practice.

**Discussion (Socratic).**
- **Q1:** A team's LLM-judge consistently rates GPT-5 outputs 0.4 points higher than equivalent Claude outputs. Diagnose the most likely cause and propose a fix.
- **Q2:** Anthropic publishes their evals but not their golden sets for application use. Why? Argue for / against open-sourcing curated golden sets.
- **Q3:** Sam's prompt "felt sharper" but scored worse on eval. Bea blocked it. Make the case for both perspectives. When SHOULD intuition override eval scores, if ever?

---

## ✅ Module 6 Summary

You now know:

- 🧱 The three pillars of LLM eval, programmatic, LLM-as-judge, human
- 📦 How to assemble a 70-150 example golden set, what goes in it
- ✅ The programmatic evaluators worth running
- 🤖 LLM-as-judge with G-Eval refinements and known biases
- 👥 Human eval + inter-annotator agreement metrics
- 🛠️ The eval frameworks landscape (Promptfoo, DeepEval, RAGAS, LangSmith, Braintrust, OpenAI Evals)
- 📐 The metrics, F1, precision/recall, RAGAS, latency, cost
- 🧪 A/B testing with statistical significance and pre-registration
- 🔁 Regression suites that block bad deploys

**Next steps:**
1. 🎥 Watch the curated videos: [Videos.md](./Videos.md)
2. ✏️ Take the quiz: [Quiz.md](./Quiz.md), aim for 22/26
3. 📋 Review the [Cheat-Sheet.md](./Cheat-Sheet.md) before bed
4. ➡️ Move on: [Module 7, Adversarial Prompts & Jailbreak Defense](../Module-07-Adversarial-Defense/Reading.md)

> **Where this leads.**
> - Inside this course: [Module 7](../Module-07-Adversarial-Defense/Reading.md) extends evals to safety/red-team work. [Module 8](../Module-08-Production-Scale/Reading.md) integrates evals into CI and observability.
> - Cross-course: AWS AI Practitioner (course 07) covers Bedrock Evaluations. Azure AI Engineer (course 08) covers Azure Prompt Flow Evals.
> - Practice: Practice Exam 2 has ~4 questions from this module.

---

## 📚 Further Reading (Optional)

**Primary sources:**
- 📄 Liu et al. (2023). *G-Eval: NLG Evaluation using GPT-4 with Better Human Alignment*. EMNLP.
- 📄 Zheng et al. (2023). *Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena*. NeurIPS.
- 📄 Liang et al. (2022). *Holistic Evaluation of Language Models (HELM)*. Stanford.
- 📄 Chiang et al. (2023). *LMSYS Chatbot Arena methodology*.

**Vendor docs:**
- 📖 [Anthropic, Building Evals](https://docs.anthropic.com/en/docs/test-and-evaluate/define-success)
- 📖 [OpenAI Evals (GitHub)](https://github.com/openai/evals)
- 📖 [Google, Vertex AI Eval Service](https://cloud.google.com/vertex-ai/generative-ai/docs/models/evaluation-overview)

**Frameworks:**
- 📖 [Promptfoo](https://promptfoo.dev)
- 📖 [DeepEval](https://docs.confident-ai.com)
- 📖 [RAGAS](https://docs.ragas.io)
- 📖 [Braintrust](https://braintrust.dev)
- 📖 [LangSmith Evaluations](https://docs.smith.langchain.com/evaluation)
- 📖 [Phoenix (Arize)](https://phoenix.arize.com)
- 📖 [Inspect (UK AISI)](https://inspect.aisi.org.uk)

**Practitioner:**
- 📖 [Hamel Husain, "Your AI Product Needs Evals"](https://hamel.dev/blog/posts/evals/)
- 📖 [Eugene Yan, Evaluating ML/LLM Systems](https://eugeneyan.com/writing/evals/)
- 📖 [Jason Liu, "Why Most Evals Are Wrong"](https://jxnl.co/writing/2024/12/24/everything-i-know-about-good-systems-design/)
