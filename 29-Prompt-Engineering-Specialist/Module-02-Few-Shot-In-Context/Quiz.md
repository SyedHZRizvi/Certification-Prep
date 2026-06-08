# ✏️ Module 2 Quiz: Few-Shot & In-Context Learning

> **Instructions:** Answer all 26 questions WITHOUT looking at the reading.
> Then check your answers below. Aim for 22/26 minimum.
>
> Every question is tagged with its **Bloom's taxonomy level**.
>
> **Bloom distribution (this quiz):** Remember 5 · Understand 7 · Apply 8 · Analyze/Evaluate 5 · Create 1.

---

## Questions

### Q1. "In-context learning" refers to: *(Remember)*
A. Fine-tuning the model with new training data
B. The model performing a new task from examples in the prompt, with NO weight updates
C. Adjusting the temperature parameter
D. Using a smaller context window

---

### Q2. The seminal paper that popularized in-context learning at scale is: *(Remember)*
A. Vaswani et al. 2017 (Attention Is All You Need)
B. Brown et al. 2020 (Language Models are Few-Shot Learners, the GPT-3 paper)
C. Wei et al. 2022 (Chain-of-Thought)
D. Bai et al. 2022 (Constitutional AI)

---

### Q3. A "3-shot prompt" means: *(Remember)*
A. The prompt costs 3× more
B. The model is allowed 3 retries
C. The prompt contains 3 input-output example pairs before the new input
D. The temperature is set to 0.3

---

### Q4. Lu et al. 2022 (*Fantastically Ordered Prompts*) showed that example **order** can change accuracy by approximately: *(Remember)*
A. <1 percentage point
B. 5 percentage points
C. 30+ percentage points
D. Order has no effect

---

### Q5. The MOST appropriate strategy when you have 22,000 labeled examples and want production accuracy on a new ticket is: *(Apply)*
A. Hardcode 50 random examples in the prompt
B. Use similarity-based (kNN) retrieval, embed each new ticket, retrieve top-k similar historical examples at runtime
C. Set temperature to 1.5
D. Skip examples and rely on the model's general knowledge

---

### Q6. Min et al. 2022 surprisingly showed that few-shot still helps even when: *(Understand)*
A. The model is small
B. The example labels are randomly assigned (format learning matters too)
C. The temperature is 2.0
D. The context window is 4K

---

### Q7. Recency bias in few-shot means: *(Understand)*
A. The model forgets older training data
B. The model attends more strongly to examples placed near the END of the prompt
C. The model prefers shorter examples
D. The model dislikes recent inputs

---

### Q8. Anthropic recommends which formatting convention for few-shot examples in Claude prompts? *(Remember)*
A. JSON only
B. XML tags (e.g., `<example>...</example>`)
C. Plain markdown only
D. CSV

---

### Q9. A team has 5 classes with imbalanced ratios (one class is 70% of traffic). The BEST few-shot example distribution is: *(Apply)*
A. 7 examples of the dominant class, 1 of each other class
B. Balanced, approximately equal counts per class, with maybe 1–2 extra for hard edge cases
C. Only examples of the rare classes
D. No examples at all

---

### Q10. "Many-shot in-context learning" generally requires: *(Understand)*
A. A model with at least 200K context window
B. Fine-tuning
C. Temperature = 1
D. A new vector database

---

### Q11. The PRIMARY reason to add a one-sentence "Reasoning:" line per few-shot example is: *(Apply)*
A. Style preference
B. It stabilizes the model's reasoning and often improves accuracy 5–15 points
C. It reduces cost
D. It defeats prompt injection

---

### Q12. A static set of 6 well-chosen examples that span the label space best describes which strategy? *(Apply)*
A. kNN retrieval
B. Hardest-example mining
C. Diverse coverage
D. Anchor-and-elaborate only

---

### Q13. "Hardest-example mining" picks examples that: *(Understand)*
A. Are the easiest to classify
B. The model currently gets WRONG in zero-shot, to push the decision boundary
C. Are randomly selected
D. Are the most recent

---

### Q14. Compared to fine-tuning, few-shot prompting trades off: *(Analyze)*
A. Lower per-call cost vs higher setup cost
B. Higher per-call cost (because you ship the examples every call) vs lower setup cost and faster iteration
C. Better accuracy always
D. Smaller model size

---

### Q15. Which is NOT a valid defense against few-shot order biases? *(Analyze)*
A. Randomize order per request
B. Balance label counts across positions
C. Use a held-out eval set to pick the best order
D. Always put the rare class first and the common class last

---

### Q16. Which model family is MOST agnostic to whether you use JSON, markdown, or XML for few-shot examples? *(Remember)*
A. Claude
B. GPT-5 / Gemini (both work well; XML is fine but not preferred)
C. Llama 2 (very old)
D. None, all require XML

---

### Q17. A new task with a small held-out eval, decent zero-shot baseline, and tight token budget. The BEST first move is: *(Apply)*
A. Jump straight to many-shot with 200 examples
B. Add 3–5 diverse examples and measure lift; iterate
C. Fine-tune
D. Use a smaller model with no examples

---

### Q18. The Yuki bank case study (Module 2 Reading) went from 61% accuracy zero-shot to 94.2% with: *(Apply)*
A. A bigger model and a hotter temperature
B. Static 12-shot, then similarity-retrieval (kNN) few-shot with top-5 retrievals
C. Fine-tuning a 7B model
D. Removing all instructions

---

### Q19. The PRIMARY downside of many-shot ICL (100+ examples) compared to few-shot is: *(Analyze)*
A. Worse accuracy
B. Much higher input-token cost per call (mitigated by prompt caching)
C. Loss of context window
D. Slower model speed (only)

---

### Q20. Anthropic's prompt caching reduces the cost of cached prompt prefixes to approximately: *(Remember)*
A. 0% (free)
B. 10% of normal input price
C. 50% of normal input price
D. 200% of normal input price

---

### Q21. A defender of in-context learning might say "even random labels help" because: *(Evaluate)*
A. The model is broken
B. Format / pattern learning is a real component of ICL, distinct from content learning (Min et al. 2022)
C. Random labels are always correct
D. Labels never matter

---

### Q22. When you have 5 classes and the test ticket is most similar (semantically) to a class-C training ticket, kNN few-shot will: *(Understand)*
A. Always avoid class-C
B. Surface mostly class-C similar examples, biasing the model toward (correctly) classifying as class-C
C. Pick random examples
D. Always return UNKNOWN

---

### Q23. A team observes accuracy crashes when input distribution shifts. The MOST likely cause and fix: *(Analyze)*
A. The model is broken, switch families
B. The few-shot examples were too narrow / unrepresentative; expand coverage or move to kNN retrieval
C. Lower the temperature to 0
D. Remove the system prompt

---

### Q24. The phrase "format learning" in ICL research refers to: *(Understand)*
A. CSS for the response
B. The model picking up structure and answer format from examples even when label content is noisy
C. The OpenAI JSON-mode flag
D. The Pydantic library

---

### Q25. Which is the strongest reason to STILL prefer fine-tuning over few-shot on a specific task? *(Analyze)*
A. You want fast iteration
B. You have a high-volume, latency-sensitive use case where the per-call savings of NOT shipping examples outweigh the operational complexity
C. You have no labeled data
D. You want to test multiple prompts in parallel

---

### Q26. Design challenge: You're building a code-review assistant. You have 5,000 past code reviews labeled with severity (LOW/MED/HIGH). You want production-quality suggestions per review type. The MINIMUM viable architecture is: *(Create)*

> *Create-level note:* you are choosing the *combination* of example strategy + per-vendor formatting + parameters that fits the goal.
A. Zero-shot on a tiny model with temperature=1
B. Embedding-based kNN retrieval of top-3 similar past reviews, Anthropic XML-tagged few-shot, temperature=0.2, with structured output for severity + suggestion
C. Random 50 examples each request
D. No examples, hot temperature, hope for the best

---

## 🎯 Answers + Explanations

### Q1: **B. Model performs a new task from examples in the prompt, no weight updates**
That's the definition. Brown 2020 was the landmark demonstration at scale.

### Q2: **B. Brown et al. 2020 (GPT-3 paper)**
*Language Models are Few-Shot Learners*, NeurIPS 2020. The paper that defined the field's vocabulary.

### Q3: **C. Prompt contains 3 input-output example pairs**
That's all "shot" means in this context, one demonstration pair.

### Q4: **C. 30+ percentage points**
Lu et al. 2022 demonstrated this on multiple benchmarks. One of the most under-appreciated empirical findings in prompt engineering.

### Q5: **B. Similarity-based (kNN) retrieval**
With a large labeled corpus, retrieve the most-relevant examples per request. This is Yuki's Week 3 approach.

### Q6: **B. Random labels still help, format learning matters**
Min et al. 2022 showed that even when labels are wrong, the model benefits from the *format* and *demonstration of task shape*. Content learning is one of several mechanisms.

### Q7: **B. Model attends more strongly to examples near the END**
Recency bias is well-documented. Defense: balance and randomize.

### Q8: **B. XML tags**
Anthropic explicitly recommends `<example>...</example>` and `<input>/<output>` tags. Claude's training data has these patterns.

### Q9: **B. Balanced examples + a few hard edge cases**
Imbalanced few-shot creates majority-label bias. Balance the demo distribution even if the real distribution is skewed.

### Q10: **A. ≥200K context window**
With hundreds of examples, you need the context room. Claude 4.7 (1M), Gemini 2.5 (2M), GPT-5 (400K) all qualify.

### Q11: **B. Stabilizes reasoning, often improves accuracy 5–15 points**
A bridge to chain-of-thought (Module 3). One sentence of explanation per example often pays for itself.

### Q12: **C. Diverse coverage**
That's the named strategy, span the label/input space with curated examples.

### Q13: **B. Examples the model currently gets WRONG in zero-shot**
The goal: push the boundary where the model fails. Easy cases were never the problem.

### Q14: **B. Higher per-call cost vs lower setup cost and faster iteration**
Few-shot ships the examples every call (cost). Fine-tuning bakes them in (lower per-call but higher setup).

### Q15: **D. Always put rare first / common last**
That's a SPECIFIC ordering, and it doesn't defend against bias, it creates one. Balance and randomize are the defenses.

### Q16: **B. GPT-5 / Gemini, both work well with multiple formats**
Claude prefers XML but works with anything; GPT and Gemini are agnostic. Llama varies.

### Q17: **B. Add 3–5 diverse examples and measure lift**
The standard iterative loop. Don't jump to many-shot or fine-tune without evidence.

### Q18: **B. Static 12-shot, then similarity-retrieval few-shot**
That's the case-study progression. Week 1 → 2 → 3.

### Q19: **B. Higher input-token cost (mitigated by prompt caching)**
Cached prefix mode cuts the cost of repeated examples by 90%. Without caching, many-shot is expensive.

### Q20: **B. ~10% of normal input price**
Anthropic prompt caching: ~10% read cost on cached portion (and ~125% write the first time). Big savings on repeated few-shot prefixes.

### Q21: **B. Format / pattern learning is real, distinct from content**
Min 2022's finding. Both mechanisms contribute to ICL.

### Q22: **B. Mostly class-C similar examples, biasing toward correct C classification**
That's the *point* of kNN, retrieve close neighbors so the in-context distribution matches the input distribution.

### Q23: **B. Examples were too narrow; expand or move to kNN**
Static few-shot is brittle to distribution shift. kNN retrieval inherits robustness from a larger corpus.

### Q24: **B. The model picks up structure/format from examples even when label content is noisy**
That's the named phenomenon from Min et al. 2022.

### Q25: **B. High-volume, latency-sensitive use case**
The cost-of-shipping-examples-every-call wins out. Plus fine-tuning can reduce token count per call.

### Q26: **B. kNN retrieval + Anthropic XML + temp=0.2 + structured output**
Production-grade combo: per-request relevant examples, model-preferred format, deterministic-ish output, parseable schema. All four pieces matter.

---

## 📊 Score Yourself

- 25–26/26 → 🏆 Module 2 mastered. Onward to reasoning.
- 22–24/26 → ✅ Solid. Note the gaps, then move on.
- 18–21/26 → ⚠️ Re-read the example-selection and ordering sections.
- <18/26 → 🔁 Restart the Reading.md, then re-quiz tomorrow.

---

## 🃏 Add To Your Flashcards

- Definitions: zero-shot / one-shot / few-shot / many-shot
- The five selection strategies: diverse / kNN / hardest / recency / anchor
- Key papers: Brown 2020, Lu 2022, Min 2022, Agarwal 2024
- Anthropic XML preference for Claude
- Recency bias + ordering defenses

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 3, Chain-of-Thought & Reasoning](../Module-03-Chain-of-Thought-Reasoning/Reading.md)
