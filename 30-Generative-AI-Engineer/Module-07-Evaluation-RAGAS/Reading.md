# Module 7: Evaluation & RAGAS 📊

> **Why this module matters:** If you remember nothing else from this entire course, remember this: **you cannot improve what you cannot measure.** Most production GenAI systems fail not at model selection or framework choice but at the eval layer — the team doesn't know whether their changes help or hurt, so they ship vibes. The first thing any serious team builds isn't the agent, the RAG, or the fine-tune. It's the eval harness. This module is how.

> **Prerequisites for this module.** You should be comfortable with:
> - Modules 1–6
> - Python data manipulation (pandas, basic stats)
> - The concept of a "test set" / "held-out data"

---

## 🎬 A Story: Why Anthropic Built Its Own Evals (And Why You Should Too)

In 2023, an Anthropic blog post quietly mentioned that for every product release, every model upgrade, and every "small" prompt tweak, they ran *thousands* of internal evaluations. The team had over a hundred custom eval sets — some only 50 examples, some 50,000 — covering helpfulness, harmlessness, accuracy, format compliance, tone, refusal calibration, and dozens of narrower behaviors. Some evals were *behavioral* (does the model use the right markdown table syntax?); some were *capability* (can the model solve this leetcode problem?); some were *safety* (does the model help write malware when asked?).

Most teams reading that blog had two reactions: "wow" and "we'll do that later." Two years later, the teams that did "do it later" are the ones that ship inconsistent quality, can't roll back regressions, and have CTOs who can't sleep before a model upgrade.

The teams that built the eval harness early can:

- Catch regressions in CI before shipping
- Compare model versions objectively
- Tune RAG retrieval pipelines empirically
- Have a numerical answer to "did this prompt change help?"
- Talk to leadership in metrics, not vibes

This module is the engineering of that harness. Build it before you scale your application.

---

## 🎯 Three Layers of LLM Evaluation

The full evaluation stack has three layers, each answering a different question.

### Layer 1: Capability evaluation

*Does this model know how to do X?* Public benchmarks:

- **MMLU** — broad knowledge multiple-choice
- **HumanEval / MBPP / SWE-bench** — coding capability
- **GSM8K / MATH** — mathematical reasoning
- **TruthfulQA** — propensity to confidently confabulate
- **HELM / BIG-bench** — diverse academic benchmark suites
- **MT-Bench / Chatbot Arena** — open-ended chat quality (human judged)

These tell you about *the model*. They're useful for model selection ("Claude vs GPT vs Llama for our use case") but don't tell you about *your application*.

### Layer 2: System evaluation (the one that matters)

*Does my system answer my users' questions correctly?* This is where RAGAS, golden datasets, and LLM-as-judge live. Layer 2 is the daily-driver eval for any production app.

### Layer 3: Production / online evaluation

*Are my real users happy?* Implicit signals (thumbs up/down, regenerate clicks, response time before next message), explicit signals (NPS, surveys), and offline replays of production traffic.

🎯 **You need all three.** Layer 1 picks the model; Layer 2 catches regressions in CI; Layer 3 closes the feedback loop with reality.

---

## 📐 The RAGAS Framework (Es et al. 2023, current as of 2026)

RAGAS — "Retrieval-Augmented Generation Assessment" — is the de facto standard for RAG-system evaluation. It defines four core metrics, computed *automatically using an LLM-as-judge*, without ground-truth answers (in its newer "reference-free" mode).

### The four core metrics

**1. Faithfulness** — Does the answer stick to the retrieved context?

Computed by: extract each claim from the generated answer; for each claim, check if it's supported by the retrieved context (via an LLM judge). Faithfulness = supported_claims / total_claims.

> Low faithfulness = hallucination, the #1 RAG failure mode.

**2. Answer Relevancy** — Does the answer actually address the question?

Computed by: ask an LLM to generate N hypothetical questions for which the given answer would be appropriate; measure cosine similarity to the original question; average.

> Low answer relevancy = "talks around the question" — verbose non-answers.

**3. Context Precision** — Are the retrieved chunks relevant to the question?

Computed by: for each retrieved chunk in order, ask an LLM if it was useful for answering. Compute the *mean-reciprocal-rank* style score.

> Low context precision = retrieving too much noise; rerank harder, retrieve fewer.

**4. Context Recall** — Did retrieval find everything needed?

Requires a ground-truth answer. Decompose the ground truth into claims; for each, check if the *retrieved context* could support it. Recall = supported / total.

> Low context recall = missing relevant docs; expand retrieval (k↑, hybrid, multi-query).

### Additional RAGAS metrics

- **Answer Correctness** — semantic + factual similarity to ground truth answer
- **Answer Semantic Similarity** — embedding similarity to ground truth
- **Aspect Critique** — judge against a freeform rubric ("does this respect privacy?")
- **Context Entity Recall** — entities in ground truth that appear in retrieved context
- **Noise Sensitivity** — quality drop when irrelevant context is added

### The matrix in practice

| Symptom | RAGAS metric to inspect | Likely fix |
|---------|---------------------------|--------------|
| Hallucinates | Faithfulness low | Stronger prompt, citation requirement, smaller k |
| Talks around the question | Answer Relevancy low | Better generation prompt, smaller model temp |
| Retrieves junk | Context Precision low | Reranker, hybrid, source-trust filter |
| Misses things | Context Recall low | Hybrid + multi-query + larger k + chunking |
| Wrong on the answer | Answer Correctness low | Look for retrieval failure first, model failure second |

```python
# Pseudo-code, real APIs vary slightly
from ragas import evaluate
from ragas.metrics import faithfulness, answer_relevancy, context_precision, context_recall

dataset = Dataset.from_dict({
    "question": [...],
    "answer": [...],          # generated
    "contexts": [...],        # retrieved chunks
    "ground_truth": [...],    # for recall + correctness
})

result = evaluate(
    dataset,
    metrics=[faithfulness, answer_relevancy, context_precision, context_recall],
    llm=ChatOpenAI(model="gpt-4o-mini"),  # the judge
)
print(result)  # {faithfulness: 0.84, answer_relevancy: 0.91, ...}
```

---

## 🧑‍⚖️ LLM-as-Judge: Power Tool, Sharp Edges

LLM-as-judge means using an LLM to score the output of another LLM (or system). It's how RAGAS computes faithfulness; it's how MT-Bench scores chat quality; it's how most teams measure subjective qualities (helpfulness, tone, format compliance).

### Why LLM-as-judge works

- Cheaper than humans (~$0.001-$0.01 per judgment vs $5+)
- Faster (seconds vs days)
- Reproducible (deterministic at temperature=0)
- Reasonably correlated with human judgment on most tasks

### Why LLM-as-judge can betray you

| Bias | What it does |
|------|---------------|
| **Position bias** | When given (A, B), the judge prefers position 1 (or 2) consistently |
| **Length bias** | Prefers longer answers irrespective of quality |
| **Self-enhancement bias** | An LLM judge rates outputs from its own family higher |
| **Format bias** | Prefers markdown lists, bolded headers, etc. |
| **Confidence bias** | Prefers confidently-worded answers — including wrong ones |

### Mitigations

- **Pairwise + swap** — judge (A vs B) then (B vs A); only count agreement
- **Reference-based** — give the judge a reference; ask it to score similarity, not pick a "better"
- **Rubric-driven** — explicit criteria, not "which is better overall"
- **Chain-of-thought** — ask the judge to reason before scoring; often improves accuracy
- **Stronger judge model** — use Claude Opus / GPT-5 as judge; cheap model as evaluatee
- **Ensemble judges** — average across multiple models

### G-Eval (Liu et al. 2023)

A specific LLM-as-judge protocol: define dimensions (coherence, consistency, fluency, relevance) in a structured rubric; ask the model to fill out the rubric with CoT reasoning; use logprob-weighted scores. G-Eval correlates better with human judgment than vanilla LLM-as-judge.

---

## 📋 Golden Datasets

The single most important asset in any GenAI eval is your **golden dataset** — a labeled set of (input, expected_output) pairs that *you* curated for *your* use case.

### How to build one

1. **Start with 30 examples.** That's enough to measure differences > ~5%.
2. **Use real user queries** if you have them. Sample from production logs.
3. **Cover the diversity of inputs** — short, long, ambiguous, multi-hop, edge cases.
4. **Label with care.** One annotator can do it; have a second sanity check.
5. **Version it.** Golden v1, v2, v3 — track drift.
6. **Add hard cases over time.** Every production bug becomes a golden example.

### The "synthetic golden" — RAGAS test set generation

RAGAS can *generate* a synthetic test set from your corpus:

- Sample chunks from the corpus
- Generate plausible questions that would be answered by those chunks (using an LLM)
- Classify each question by type (simple, reasoning, multi-context, conditional)
- Output (question, ground_truth, ground_truth_context) tuples

Pros: cheap, scales fast, covers your corpus.
Cons: distribution may not match real users; the LLM may generate questions that are too easy.

Best practice: **synthetic test set for breadth, real-user-derived for depth**.

---

## 🔬 Eval Harnesses & Tools (2026)

| Tool | Best at |
|------|---------|
| **RAGAS** | RAG-specific metrics |
| **DeepEval** | General-purpose; pytest-style integration |
| **OpenAI Evals** | Capability + behavioral evals; YAML or Python |
| **Anthropic Evals** | Anthropic's open-source eval harness |
| **Promptfoo** | Config-driven prompt A/B testing; CLI + UI |
| **Braintrust** | Hosted experiments + traces |
| **TruLens** | Open-source RAG eval + tracing |
| **LangSmith** | LangChain-native eval + dataset management |
| **Phoenix Arize / Arize AI** | OSS + commercial; great trace + eval integration |
| **Patronus / Humanloop / W&B Weave** | Hosted experiment trackers |
| **Inspect AI (UK AISI)** | Frontier safety/capability evals; gold-standard rigor |

For most teams in 2026: **RAGAS for RAG metrics + Promptfoo for prompt experiments + LangSmith or Phoenix for tracing**. The combination covers most needs.

---

## 🏃 Building an Eval Loop in CI

The discipline most teams skip: run your eval harness in CI for every PR. The basic shape:

```yaml
# .github/workflows/eval.yml (sketch)
on: pull_request
jobs:
  eval:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
      - run: pip install -e . ragas promptfoo
      - run: python evals/run_all.py --gold-set evals/v3.jsonl
      - run: |
          python -c "
          import json
          metrics = json.load(open('evals/results.json'))
          assert metrics['faithfulness'] >= 0.80
          assert metrics['answer_relevancy'] >= 0.85
          assert metrics['context_precision'] >= 0.75
          "
```

The thresholds matter. They're either set from baseline (current main branch) or from a target you committed to.

🎯 **Soft regression vs hard regression.** Block PRs on *hard* regressions (>5% drop on any core metric); only warn on soft (<5%) drops. Allow override with explicit reviewer approval.

---

## 🧪 Eval-Driven Development

The discipline:

1. Define the metrics that matter *before* writing the system
2. Build the eval harness *with* the system, not after
3. Every prompt change, model change, retriever change → re-run eval
4. Promotes "did this help?" from opinion to fact

This is the eval analog of test-driven development. Same emotional difficulty (eval feels slow); same payoff (you actually know what works).

---

## 🚨 Anti-patterns

| Anti-pattern | What goes wrong |
|--------------|------------------|
| "We'll add evals later" | Later never comes; regressions ship |
| Single-metric eval | Optimizing answer_relevancy crashes faithfulness |
| LLM-as-judge with the same model as evaluatee | Self-enhancement bias inflates scores |
| Golden set never updated | Drift; eval becomes irrelevant |
| Synthetic-only eval | Misses real user diversity |
| Comparing means without confidence intervals | Random noise looks like wins |
| No "hard regression" gate in CI | Bad prompts ship to prod |
| Public benchmark scores instead of own eval | "MMLU went up" doesn't mean *your* app got better |

---

## 🏗️ Lab: RAGAS Eval Harness in CI With LLM-as-Judge

Goal: take the RAG system you built in Module 3 and add a full eval harness.

Steps:

1. Build a golden dataset of 50 (question, ground_truth_answer, ground_truth_chunks) tuples — half synthetic via RAGAS test-set generation, half hand-labeled from your test queries.
2. Run RAGAS' four core metrics + answer_correctness using GPT-4o-mini as the judge.
3. Add a Promptfoo config that A/B-tests two prompt templates.
4. Wire the whole thing into a GitHub Actions workflow that fails the PR on a >5% drop in faithfulness or answer_correctness.
5. *Stretch:* add a "swap and re-judge" mitigation for position bias.

Deliverable: a CI run that completes in <5 minutes and gates PRs on real metric thresholds. This is the harness that distinguishes professional GenAI teams.

---

## 📊 Case Study — Anthropic's Constitutional AI Eval Pipeline

**Situation.** Anthropic's Constitutional AI training (Bai et al. 2022, expanded 2023-2024) is a process where the model critiques and revises its own outputs against a written *constitution* — a set of principles like "the response should not encourage illegal activity" or "the response should be helpful and concise."

**The eval challenge.** How do you measure adherence to a *vague natural-language constitution* across thousands of nuanced scenarios?

**The pipeline (as described in Anthropic's publications):**
1. Hand-curate thousands of "red team" prompts designed to elicit unsafe behavior
2. For each prompt, sample model responses
3. **LLM-as-judge** scores each response against each constitutional principle on a 1-5 scale
4. Aggregate scores by principle, scenario type, model version
5. Compare across training checkpoints to detect drift
6. Human reviewers spot-check 5-10% of judgments

**The 2024 numbers (from Anthropic's published research):**
- Constitutional AI training improved harmlessness scores by ~20 points on Anthropic's internal evals
- LLM-as-judge agreement with human judges was ~75-85% across most dimensions
- Position bias on pairwise judgments was the largest source of error; mitigated by always running A-vs-B *and* B-vs-A

**The lesson for you, the engineer.** Anthropic's actual numbers are out of reach for most teams, but the *shape* of the pipeline is replicable. Hand-curate hard cases, automate scoring with LLM-as-judge, sanity-check with humans on a sample, and treat the eval as a system that itself needs evals.

**Discussion (Socratic).**
- **Q1:** Anthropic's pipeline relies heavily on LLM-as-judge. What kind of question is *most* prone to LLM-judge error, and how would you detect that in your own eval?
- **Q2:** "Constitutional AI" assumes a written constitution. What's your equivalent for a customer-service chatbot? Sketch 10 principles.
- **Q3:** Suppose you find your eval scores plateau but production complaints keep coming. What's the gap and how do you close it?

---

## ✅ Module 7 Summary

You now know:

- 🎯 The three layers: capability / system / production eval
- 📐 RAGAS' four core metrics: faithfulness, answer relevancy, context precision, context recall
- 🧑‍⚖️ LLM-as-judge — the power tool and its biases (position, length, self-enhancement, format, confidence)
- 📋 Golden datasets — how to build, version, grow
- 🔬 The eval harness ecosystem: RAGAS, Promptfoo, LangSmith, Phoenix, Inspect AI
- 🏃 Eval-driven development in CI
- 🚨 The anti-patterns that make your evals useless

**Next steps:**
1. 🎥 [Videos.md](./Videos.md)
2. ✏️ [Quiz.md](./Quiz.md)
3. 📋 [Cheat-Sheet.md](./Cheat-Sheet.md)
4. ➡️ Move on: [Module 8 — Guardrails & Safety](../Module-08-Guardrails-Safety/Reading.md)

> **Where this leads.**
> - Module 8 covers guardrails — and evals tell you whether they work.
> - Module 9 covers observability — production telemetry + Layer 3 eval.
> - Module 10's case studies all hinge on the eval discipline of the team.

---

## 📚 Further Reading (Optional)

- 📄 Es et al. (2023). *RAGAS: Automated Evaluation of RAG.*
- 📄 Liu et al. (2023). *G-Eval: NLG Evaluation Using GPT-4 with Better Human Alignment.*
- 📄 Zheng et al. (2023). *Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena.*
- 📄 Bai et al. (2022). *Constitutional AI: Harmlessness from AI Feedback.*
- 📖 [RAGAS docs](https://docs.ragas.io/)
- 📖 [Promptfoo docs](https://www.promptfoo.dev/)
- 📖 [OpenAI Evals repo](https://github.com/openai/evals)
- 📖 [Anthropic's eval harness](https://github.com/anthropics/evals)
- 📖 [Inspect AI by UK AISI](https://inspect.ai-safety-institute.org.uk/)
- 🎬 Hamel Husain's "evals" series on YouTube — exceptional practitioner content
- 🎬 Eugene Yan's blog and talks — best public writing on production GenAI evals
