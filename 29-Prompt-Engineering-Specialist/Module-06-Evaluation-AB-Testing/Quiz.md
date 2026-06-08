# ✏️ Module 6 Quiz: Evaluation & A/B Testing

> **Instructions:** Answer all 26 questions WITHOUT looking at the reading.
> Then check your answers below. Aim for 22/26 minimum.
>
> Every question is tagged with its **Bloom's taxonomy level**.
>
> **Bloom distribution (this quiz):** Remember 5 · Understand 7 · Apply 8 · Analyze/Evaluate 5 · Create 1.

---

## Questions

### Q1. The three pillars of LLM evaluation are: *(Remember)*
A. Speed / cost / latency
B. Programmatic / LLM-as-judge / human review
C. Claude / GPT / Gemini
D. Training / validation / test

---

### Q2. A "golden set" is: *(Remember)*
A. A premium API tier
B. A curated set of input + expected-output pairs used to measure prompt quality
C. A vector database
D. A model checkpoint

---

### Q3. The recommended MVP size for a production golden set is: *(Apply)*
A. 3 examples
B. 70–150 examples spanning easy, edge, hard, and adversarial
C. 10 examples
D. 100,000 examples

---

### Q4. G-Eval (Liu et al. 2023) improved LLM-judging by adding: *(Understand)*
A. Lower temperature only
B. Chain-of-thought reasoning + averaged samples across N judge runs
C. A new model
D. Vector retrieval

---

### Q5. "Position bias" in LLM-as-judge means: *(Understand)*
A. The judge prefers tall responses
B. The judge prefers whichever response comes FIRST in pairwise comparison
C. The judge prefers responses in caps
D. The judge prefers Anthropic over OpenAI

---

### Q6. "Self-preference" bias is mitigated by: *(Apply)*
A. Using a higher-tier model
B. Using a DIFFERENT model family as the judge than the one being judged
C. Lowering temperature
D. Removing the criteria

---

### Q7. Cohen's kappa above ~0.7 between two human raters indicates: *(Remember)*
A. Bad rubric
B. Substantial inter-annotator agreement, the task is well-defined and raters agree
C. Random scoring
D. Self-preference

---

### Q8. F1 score is best described as: *(Understand)*
A. The harmonic mean of precision and recall
B. The arithmetic average
C. The output length
D. The model accuracy

---

### Q9. Macro F1 vs Micro F1: *(Analyze)*
A. They are identical
B. Macro = per-class average (equal weight); Micro = pooled TP/FP/FN (weighted by class count)
C. Macro is bigger
D. Micro requires more data

---

### Q10. Bea's harness blocked Sam's "sharper-feeling" prompt because: *(Apply)*
A. Sam's prompt was longer
B. The regression check showed F1 dropped vs the production baseline, quantitative beat intuition
C. The team didn't like Sam
D. The prompt timed out

---

### Q11. RAGAS provides these RAG-specific metrics: *(Remember)*
A. Latency only
B. Faithfulness, answer relevance, context precision, context recall
C. Token count only
D. Cost only

---

### Q12. "Faithfulness" in RAG eval means: *(Understand)*
A. The model is honest
B. The answer uses ONLY the retrieved context, no hallucination beyond it
C. The retrieval is fast
D. The model is verbose

---

### Q13. To detect a 5pt accuracy difference at ~80% power, you need roughly: *(Apply)*
A. 10 samples per arm
B. ~1,500 samples per arm
C. 100 samples per arm
D. 1,000,000 per arm

---

### Q14. "Pre-registration" of an A/B success metric means: *(Apply)*
A. Pre-paying for the API
B. Defining the success metric and decision rule BEFORE looking at the data, to prevent p-hacking
C. Registering a domain
D. Pre-training the judge

---

### Q15. A team has a binary success metric and wants statistical significance. They should use: *(Apply)*
A. Cosine similarity
B. A proportion z-test or chi-square test (with appropriate sample size)
C. Levenshtein distance
D. The model's temperature

---

### Q16. BLEU and ROUGE measure: *(Understand)*
A. Semantic meaning
B. N-gram overlap with reference, useful as one signal but blind to semantics
C. Cost
D. Latency

---

### Q17. Promptfoo is best suited for: *(Apply)*
A. Vector indexing
B. Quick YAML-defined prompt A/B testing in CI
C. Image generation
D. Fine-tuning

---

### Q18. A multi-armed bandit (Thompson sampling) differs from a standard A/B test by: *(Analyze)*
A. Always running for less time
B. Dynamically allocating more traffic to currently-best arms rather than splitting 50/50
C. Requiring a new model
D. Using only embeddings

---

### Q19. Inspect (UK AISI) is most known for: *(Remember)*
A. Marketing copy
B. Capability and safety evals on frontier models
C. Vector databases
D. Tokenizers

---

### Q20. Anthropic's eval-driven model releases publish: *(Remember)*
A. Only the model weights
B. The exact eval prompts, system prompts, and parameters used to produce reported scores
C. Only marketing slides
D. Internal Slack messages

---

### Q21. A team's LLM judge consistently rates GPT-5 outputs higher than equivalent Claude outputs in a side-by-side. The MOST likely cause: *(Analyze)*
A. GPT-5 is universally better
B. Self-preference bias, the judge IS GPT-5 (or a sibling). Fix by using Claude as judge or averaging across judges
C. Position bias only
D. Verbosity bias only

---

### Q22. The MOST robust single metric for free-form generation is: *(Evaluate)*
A. BLEU
B. There is no single robust metric, combine LLM-judge + embedding similarity + human spot-check + safety classifier
C. Word count
D. Token count

---

### Q23. A regression suite should run: *(Apply)*
A. Once when the prompt is created
B. On EVERY change, before any deploy, block when metric drops beyond a threshold
C. Only weekly
D. Only when revenue drops

---

### Q24. "Distribution shift" in prompt eval means: *(Understand)*
A. Compression artifact
B. Production inputs diverge from the eval set, your eval becomes misleading; refresh from production samples regularly
C. The output is JSON
D. The model is updated

---

### Q25. Which is NOT a public capability benchmark? *(Analyze)*
A. MMLU
B. HumanEval
C. GSM8K
D. MyCustomTaskBenchmark42 (a fictitious internal evaluation only)

---

### Q26. Design challenge: A team is releasing v17 of their customer-service prompt. The MINIMUM viable eval architecture before deploy is: *(Create)*

> *Create-level note:* you are stacking eval layers in defense in depth.
A. Eyeball 3 examples and ship
B. (1) Run the regression suite on the 150-example golden set with programmatic + cross-family LLM-judge + safety classifier; (2) require ≥ baseline F1 and no safety regressions; (3) A/B test on 5% of traffic for 48h with a pre-registered success metric; (4) ramp up if winning, roll back if not
C. Only run latency tests
D. Just compare token costs

---

## 🎯 Answers + Explanations

### Q1: **B. Programmatic / LLM-as-judge / human review**
The textbook stack. Each compensates for the others' weaknesses.

### Q2: **B. Curated input + expected-output pairs**
The single most important artifact a prompt engineer owns.

### Q3: **B. 70–150 examples**
Enough to be statistically informative on multiple subgroups. Less = noise; more = diminishing returns at MVP stage.

### Q4: **B. CoT reasoning + averaged samples**
The G-Eval paper's two refinements. Both pulled from Module 3.

### Q5: **B. Judge prefers responses presented FIRST**
Documented bias. Defense: randomize order; run both orderings.

### Q6: **B. Different model family as judge**
Self-preference is real and measurable. Cross-family judges reduce it.

### Q7: **B. Substantial inter-annotator agreement**
κ > 0.7 = good. κ < 0.4 means the task is ambiguous.

### Q8: **A. Harmonic mean of precision and recall**
F1 = 2·P·R / (P+R). Penalizes imbalance between P and R.

### Q9: **B. Macro = per-class equal weight; Micro = pooled**
Macro for imbalanced classes; Micro for overall accuracy.

### Q10: **B. Regression check showed F1 dropped**
Data over intuition. The whole point of the harness.

### Q11: **B. Faithfulness, answer relevance, context precision, context recall**
The RAGAS metric family. RAG-specific.

### Q12: **B. Answer uses only retrieved context, no hallucination**
The faithfulness definition. Critical for grounded QA.

### Q13: **B. ~1,500 per arm**
Power calc rule of thumb. Smaller effects need quadratically more samples.

### Q14: **B. Define metric/decision rule before looking at data**
Prevents p-hacking. The cheap, powerful discipline.

### Q15: **B. Proportion z-test or chi-square**
Standard tests for binary outcomes. Welch's t for continuous.

### Q16: **B. N-gram overlap with reference, blind to semantics**
A shallow signal. Use only as one of many.

### Q17: **B. YAML-defined prompt A/B in CI**
Promptfoo's sweet spot. Simple, declarative, CI-friendly.

### Q18: **B. Dynamically allocates more to better arms**
Bandits learn online. A/B splits 50/50. Bandits trade clean p-values for faster learning.

### Q19: **B. Capability and safety evals on frontier models**
UK AISI's specialty. Third-party rigor.

### Q20: **B. Eval prompts, system prompts, and parameters**
The transparency norm. Other labs followed.

### Q21: **B. Self-preference bias, judge is the same family**
Most likely explanation. Fix with cross-family or averaged-judge.

### Q22: **B. No single metric, combine layers**
Defense in depth. The trap is hoping for a single magic number.

### Q23: **B. Every change, before deploy, with threshold-block**
The CI integration. Boring + critical.

### Q24: **B. Production inputs diverge from eval set**
The slow-killer. Refresh golden sets from production regularly.

### Q25: **D. MyCustomTaskBenchmark42 (fictitious)**
The other three are real public benchmarks.

### Q26: **B. Full stacked defense in depth**
The full mature flow: regression → safety → A/B → pre-registered metric → ramp/rollback.

---

## 📊 Score Yourself

- 25–26/26 → 🏆 Module 6 mastered. Onward to adversarial defense.
- 22–24/26 → ✅ Solid. Note the gaps, then move on.
- 18–21/26 → ⚠️ Re-read the LLM-judge biases and A/B testing sections.
- <18/26 → 🔁 Restart the Reading.md, then re-quiz tomorrow.

---

## 🃏 Add To Your Flashcards

- 3 pillars of eval
- G-Eval paper + refinements
- 4 LLM-judge biases + defenses
- F1, macro vs micro
- RAGAS metrics
- Pre-registration
- Sample-size rule of thumb
- Cross-family judges

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 7, Adversarial Prompts & Jailbreak Defense](../Module-07-Adversarial-Defense/Reading.md)
