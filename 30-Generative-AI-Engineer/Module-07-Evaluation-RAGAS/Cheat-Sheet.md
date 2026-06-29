# 📋 Module 7 Cheat Sheet: Evaluation & RAGAS

---

## 🎯 Three Layers of Eval

| Layer | Question | Tools |
|-------|----------|-------|
| **Capability** | Does this model know how to do X? | MMLU, HumanEval, GSM8K, MT-Bench, HELM |
| **System** | Does my app answer right? | RAGAS, golden sets, Promptfoo, LangSmith |
| **Production** | Are real users happy? | Thumbs, NPS (Net Promoter Score), replay, traces |

---

## 📐 RAGAS Four Core Metrics

| Metric | Measures | Low → |
|--------|----------|--------|
| **Faithfulness** | Answer claims supported by context? | Hallucination, stronger prompt, citations, smaller k |
| **Answer Relevancy** | Answer addresses the question? | Off-topic; fix generation |
| **Context Precision** | Retrieved chunks useful? | Junk retrieval; rerank, source-trust |
| **Context Recall** | All needed info retrieved? | Missed docs; hybrid + multi-query + larger k |

Plus: Answer Correctness, Aspect Critique (custom rubric), Noise Sensitivity, Entity Recall, Semantic Similarity.

---

## 🧑‍⚖️ LLM-as-Judge Biases

| Bias | What |
|------|------|
| **Position** | Prefers option 1 or 2 |
| **Length** | Prefers longer |
| **Self-enhancement** | Prefers own-family output |
| **Format** | Prefers markdown / bold |
| **Confidence** | Prefers confidently-worded (even when wrong) |

**Mitigations:** swap-and-judge / pairwise / rubric-driven / CoT / stronger judge / ensemble judges / G-Eval.

---

## 📋 Golden Dataset Rules

- ≥30 examples for measurable diffs; aim 100-500
- Mix synthetic + real-user
- Cover edge cases / hard cases / failure modes
- Version (v1, v2, v3), track drift
- Grow over time (every production bug → new example)
- Disjoint from any other set (no leakage)

---

## 🛠️ Eval Tool Quick Pick

| Tool | When |
|------|------|
| **RAGAS** | RAG-specific metrics |
| **Promptfoo** | Prompt A/B tests in YAML/JSON |
| **LangSmith** | LangChain-native, dataset + experiments |
| **Phoenix (Arize)** | Open-source trace + eval |
| **DeepEval** | pytest-style |
| **Anthropic Evals / OpenAI Evals** | Capability + behavior |
| **Inspect AI (UK AISI)** | Frontier safety/capability |

---

## 🏃 CI Eval Pattern

```yaml
on: pull_request
- pip install ragas promptfoo
- python evals/run.py --gold-set evals/v3.jsonl --out results.json
- python - << 'EOF'
  import json
  r = json.load(open('results.json'))
  assert r['faithfulness'] >= 0.80, "Faithfulness regression"
  assert r['answer_relevancy'] >= 0.85
  EOF
```

- **Hard gate**: >5% drop on core metric → block PR
- **Soft warn**: <5% drop → comment + reviewer approval
- **Confidence intervals**: bootstrap CI from the golden set sample

---

## 🧪 Eval-Driven Development

1. Define metrics → write golden set → build harness
2. Run eval before any prompt/model/retriever change
3. PR-gate on hard regressions
4. Add hard cases to golden set as bugs surface
5. Version + change-log the golden set

---

## 🚨 Anti-Patterns

| Don't | Do |
|-------|-----|
| Ship without evals | Build the harness with the system |
| Optimize a single metric | Track all four RAGAS + correctness |
| Same model as judge + evaluatee | Use stronger judge (or ensemble) |
| Synthetic-only golden | Mix with real user examples |
| Mean only, no CI | Bootstrap CIs |
| Frozen golden set | Grow with every production bug |
| Public benchmarks instead of own evals | Own evals are the only ones that matter |

---

## 🏆 Exam Power Phrases

✅ Often **right**:

- "Eval-in-CI with hard regression gates"
- "RAGAS faithfulness + answer relevancy + context precision + context recall"
- "Stronger judge model than evaluatee, with position swap"
- "Golden set versioned and growing"
- "Capability + system + production = three eval layers"

❌ Often **wrong**:

- "We'll add evals later"
- "Single metric is enough"
- "Public benchmarks tell us if our app works"
- "Same model judges its own outputs"
- "Synthetic-only golden set"

---

## 🗓️ Memorize Cold

- RAGAS 4: faithfulness / relevancy / precision / recall
- Position bias = pairwise + swap
- G-Eval = rubric + CoT + logprob
- MT-Bench = pairwise GPT-4 judge + swap
- Golden ≥ 30; grow over time
- Hard regression > 5% → block PR
- Capability ≠ System ≠ Production

---

➡️ [Module 8: Guardrails & Safety](../Module-08-Guardrails-Safety/Reading.md)
