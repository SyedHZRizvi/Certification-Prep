# ✏️ Module 7 Quiz: Evaluation & RAGAS

> 26 questions · aim 22/26.

---

## Questions

### Q1. The three layers of LLM evaluation are: *(Remember)*
A. Train / test / validate
B. Capability (public benchmarks) / System (RAGAS, golden) / Production (online signals)
C. Pre / mid / post
D. None

---

### Q2. RAGAS' four core metrics: *(Remember)*
A. Accuracy, precision, recall, F1
B. Faithfulness, Answer Relevancy, Context Precision, Context Recall
C. Loss, MSE, MAE, R²
D. ROUGE, BLEU, METEOR, BERTScore

---

### Q3. Faithfulness measures: *(Understand)*
A. Speed of generation
B. Whether each claim in the answer is supported by the retrieved context
C. Cost
D. Latency

---

### Q4. Low Context Recall suggests: *(Analyze)*
A. The retriever found everything
B. Relevant docs were MISSED — fix by hybrid + multi-query + larger k + better chunking
C. The model is too small
D. Random

---

### Q5. LLM-as-judge "position bias" is: *(Understand)*
A. Bias toward whichever option appears first/second
B. Bias toward shorter answers
C. Bias toward the user
D. Random

---

### Q6. The standard mitigation for position bias in pairwise judgment: *(Apply)*
A. Use one ordering only
B. Run (A vs B) AND (B vs A); count only agreements
C. Use BM25
D. Remove the judge

---

### Q7. G-Eval (Liu et al. 2023) improves LLM-as-judge by: *(Understand)*
A. Replacing the judge with humans
B. Structured rubric + CoT reasoning + logprob-weighted scoring
C. Skipping the rubric
D. Random sampling

---

### Q8. The minimum useful size of a golden dataset to measure ~5% differences: *(Apply)*
A. 5
B. ~30 examples (with reasonable variance)
C. 1
D. None

---

### Q9. "Synthetic test set" generation in RAGAS produces: *(Remember)*
A. Random text
B. (question, ground_truth, ground_truth_context) tuples from your corpus via LLM
C. Embeddings only
D. SQL queries

---

### Q10. The PRIMARY reason to combine synthetic and real-user golden examples: *(Analyze)*
A. Convenience
B. Synthetic covers breadth; real-user examples cover the distribution that actually matters
C. They are identical
D. None

---

### Q11. Why is "single-metric optimization" dangerous? *(Understand)*
A. It's faster
B. Pushing one metric up often pushes another down (e.g., answer_relevancy up → faithfulness down)
C. It always wins
D. No reason

---

### Q12. A team uses GPT-4o to judge GPT-4o outputs. Risk: *(Analyze)*
A. None
B. Self-enhancement bias — the judge prefers outputs from its own family
C. Cost
D. Tokens

---

### Q13. Promptfoo's role: *(Remember)*
A. Embedding generation
B. YAML/JSON-driven A/B testing of prompts, with assertions and reports
C. Vector DB
D. Tokenizer

---

### Q14. Hard regression vs soft regression: *(Apply)*
A. Same thing
B. Hard (>5% drop on core metric) blocks PR; soft (<5%) warns
C. Both warn only
D. Both block always

---

### Q15. MT-Bench measures: *(Remember)*
A. RAG quality
B. Open-ended chat quality via human judgment + LLM-as-judge
C. Embedding quality
D. Tokenization

---

### Q16. Inspect AI is associated with: *(Remember)*
A. OpenAI
B. UK AI Safety Institute — frontier safety/capability evals
C. Microsoft
D. Google

---

### Q17. The MOST important property of a production eval: *(Evaluate)*
A. Public benchmark coverage
B. It runs in CI on every PR and gates merges on hard regressions
C. It uses the biggest LLM
D. It has 100 dimensions

---

### Q18. Phoenix (Arize) is BEST characterized as: *(Remember)*
A. A vector DB
B. Open-source observability + evals for LLM apps; complements LangSmith
C. A tokenizer
D. A model

---

### Q19. A team sees high faithfulness, low answer relevancy. Diagnosis: *(Analyze)*
A. The retriever is broken
B. The model is grounded but talks around the question — fix the generation prompt / examples / model
C. The DB is offline
D. Wrong tokenizer

---

### Q20. The "Aspect Critique" RAGAS metric: *(Understand)*
A. Built-in fixed criteria
B. Judges output against a freeform rubric you define (e.g., "is this response respectful?")
C. Embedding similarity
D. None

---

### Q21. Anthropic's Constitutional AI eval at high level: *(Apply)*
A. Hand-curated red-team prompts + LLM-as-judge against constitutional principles + human spot-checks
B. Random sampling
C. SQL queries
D. None

---

### Q22. Length bias of LLM judges manifests as: *(Understand)*
A. No effect
B. Judge preferring longer answers regardless of quality
C. Faster scoring
D. None

---

### Q23. Evidence that your golden set has *drifted from reality*: *(Evaluate)*
A. No way to tell
B. Production complaints increase even while eval scores improve
C. The set is too small
D. Random

---

### Q24. Confidence-interval reporting alongside means: *(Apply)*
A. Pointless
B. Critical — small golden sets can show "wins" that are just noise; report 95% CI
C. Unnecessary in CI
D. Only for academic papers

---

### Q25. The standard MT-Bench protocol uses: *(Remember)*
A. Single model A/B
B. Pairwise comparisons judged by GPT-4 (or stronger), with position swapping
C. Random
D. None

---

### Q26. Design challenge: a customer-support RAG, you need a CI eval that catches regressions, supports A/B prompt experiments, and integrates with LangSmith for tracing. Minimal viable stack: *(Create)*
A. No eval
B. Golden set (≥50 examples) + RAGAS (faithfulness, answer_relevancy, context_precision, context_recall) + Promptfoo for A/B + LangSmith for traces, all wired into CI with hard-regression gates
C. Single MMLU score
D. Vibes

---

## 🎯 Answers + Explanations

### Q1: **B. Capability / System / Production**
Each layer answers a different question. You need all three.

### Q2: **B. Faithfulness, Answer Relevancy, Context Precision, Context Recall**
The RAGAS four. Memorize them.

### Q3: **B. Whether each claim is supported by retrieved context**
The anti-hallucination metric. Computed by claim extraction + LLM-as-judge support check.

### Q4: **B. Relevant docs were missed — expand retrieval**
Hybrid + multi-query + larger k + better chunking.

### Q5: **A. Prefer position 1 (or 2) consistently**
Most documented bias in pairwise LLM-as-judge.

### Q6: **B. Run both orderings; count agreements**
The standard fix; halves the position-bias variance.

### Q7: **B. Rubric + CoT + logprob-weighted**
G-Eval is the more rigorous LLM-as-judge protocol.

### Q8: **B. ~30 examples**
Below 30, noise > signal for most differences worth detecting.

### Q9: **B. (question, ground_truth, context) tuples from your corpus**
RAGAS test-set generator uses an LLM to author plausible questions.

### Q10: **B. Synthetic for breadth; real for distribution**
Synthetic alone overfits to model-generated styles; real alone misses corner cases.

### Q11: **B. Optimizing one often degrades another**
The faithfulness/relevancy trade-off is the canonical example.

### Q12: **B. Self-enhancement bias**
The judge tends to rate same-family outputs higher.

### Q13: **B. YAML/JSON-driven prompt A/B**
The standard prompt-experiments tool.

### Q14: **B. Hard blocks; soft warns**
Hard = >5% drop on core metric; soft = <5%.

### Q15: **B. Open-ended chat via LLM-as-judge + humans**
MT-Bench is the canonical chat benchmark.

### Q16: **B. UK AISI**
Inspect AI is open source, designed for frontier safety/capability evals.

### Q17: **B. Runs in CI on every PR**
Without this, the eval is theater.

### Q18: **B. OSS observability + evals**
Phoenix complements LangSmith; both are widely used.

### Q19: **B. Grounded but off-topic — fix generation**
The answer cites context but doesn't address the question. Prompt issue, not retrieval.

### Q20: **B. Freeform rubric you define**
The flexible "judge against my criteria" metric.

### Q21: **A. Curated prompts + LLM judge + human spot-checks**
Anthropic's eval pipeline shape.

### Q22: **B. Prefer longer answers**
Documented bias; mitigations include length normalization.

### Q23: **B. Production complaints increase while eval scores improve**
The single clearest signal of golden-set drift.

### Q24: **B. Critical — without CIs, you mistake noise for wins**
Especially on small golden sets.

### Q25: **B. Pairwise + position-swap with GPT-4 judge**
The MT-Bench protocol; the most-cited LLM-as-judge benchmark.

### Q26: **B. Golden + RAGAS + Promptfoo + LangSmith + CI**
A real production eval stack. Everything else has fatal omissions.

---

## 📊 Score Yourself

- 24-26 → 🏆 Eval engineer.
- 21-23 → ✅ Strong.
- 17-20 → ⚠️ Re-read RAGAS metrics + LLM-as-judge biases.
- <17 → 🔁 Rewatch Hamel Husain + RAGAS tutorials.

---

## 🃏 Add To Your Flashcards

- 3 layers: capability / system / production
- RAGAS 4: faithfulness, answer_relevancy, context_precision, context_recall
- LLM-as-judge biases (5): position / length / self-enhancement / format / confidence
- G-Eval = rubric + CoT + logprob
- MT-Bench = pairwise + GPT-4 judge + swap
- Golden set: ≥30, versioned, grows over time
- Hard vs soft regression gates
- Promptfoo / LangSmith / Phoenix / Inspect AI

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 8 — Guardrails & Safety](../Module-08-Guardrails-Safety/Reading.md)
