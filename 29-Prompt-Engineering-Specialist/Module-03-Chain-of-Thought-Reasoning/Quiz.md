# ✏️ Module 3 Quiz: Chain-of-Thought & Reasoning

> **Instructions:** Answer all 26 questions WITHOUT looking at the reading.
> Then check your answers below. Aim for 22/26 minimum.
>
> Every question is tagged with its **Bloom's taxonomy level**.
>
> **Bloom distribution (this quiz):** Remember 5 · Understand 7 · Apply 8 · Analyze/Evaluate 5 · Create 1.

---

## Questions

### Q1. Chain-of-Thought (CoT) prompting refers to: *(Remember)*
A. Increasing the temperature parameter
B. Having the model produce intermediate reasoning tokens before its final answer
C. Adding a vector database
D. Using a smaller model

---

### Q2. The seminal paper defining CoT is: *(Remember)*
A. Vaswani et al. 2017
B. Wei et al. 2022 (Chain-of-Thought Prompting Elicits Reasoning in Large Language Models)
C. Brown et al. 2020
D. Bai et al. 2022

---

### Q3. The zero-shot CoT trigger phrase from Kojima et al. 2022 is: *(Remember)*
A. "Be smart."
B. "Think harder."
C. "Let's think step by step."
D. "Calculate carefully."

---

### Q4. Self-consistency (Wang et al. 2022) works by: *(Understand)*
A. Setting temperature to 0
B. Sampling the reasoning N times with non-zero temperature and majority-voting the final answer
C. Using only one reasoning chain
D. Replacing the model

---

### Q5. The PRIMARY reason CoT helps on multi-step math but not on sentiment classification is: *(Analyze)*
A. Math is harder
B. CoT adds compute / deliberation that multi-step tasks need but trivial tasks don't
C. Sentiment models are broken
D. Math models reject CoT

---

### Q6. ReAct (Yao et al. 2022) extends CoT by adding: *(Understand)*
A. Tool calls / actions, interleaved with thoughts and observations
B. Higher temperature
C. JSON mode
D. Vector embeddings

---

### Q7. Tree-of-Thought (Yao et al. 2023) is BEST suited for: *(Apply)*
A. Sentiment classification
B. Single-fact lookup
C. Search-like problems (puzzles, planning, multi-step optimization)
D. Translation

---

### Q8. OpenAI o1 / o3 reasoning models hide their reasoning tokens by default and: *(Understand)*
A. Don't bill them
B. Bill them as output tokens, often 5–50× more expensive than non-reasoning siblings
C. Cap them at 10 tokens
D. Refuse to use them

---

### Q9. Claude Extended Thinking exposes a parameter called: *(Remember)*
A. `temperature`
B. `budget_tokens`
C. `max_thinking_steps`
D. `reasoning_level`

---

### Q10. A team wants to add CoT to a customer-support reply suggester. The MOST likely outcome is: *(Apply)*
A. Massive accuracy lift
B. Modest or no lift, plus higher cost and latency — CoT is overkill for trivial tasks
C. Cost goes to zero
D. The model refuses

---

### Q11. The "router test" for when to use a reasoning model is: *(Apply)*
A. Random 50/50
B. "Would a smart human need to deliberate?"
C. "Is the user asking nicely?"
D. "Is the input under 100 tokens?"

---

### Q12. Self-consistency at N=40 increases cost by approximately: *(Apply)*
A. 1×
B. 5×
C. 40×
D. 0× (free)

---

### Q13. The Wei 2022 result on GSM8K with PaLM 540B showed approximately what lift from standard prompting to CoT? *(Remember)*
A. +2pt
B. +10pt
C. +39pt (from ~18% to ~57%)
D. +90pt

---

### Q14. The CoT pattern can FAIL by producing: *(Analyze)*
A. A confident, fluent, but wrong reasoning chain
B. A vector database
C. A new model
D. A JSON parse error

---

### Q15. The Anthropic-recommended way to enable CoT on Claude 4.7 for hard problems is: *(Apply)*
A. Add "think harder" to every prompt
B. Enable Extended Thinking with a `thinking: {type: "enabled", budget_tokens: N}` config
C. Switch to GPT-5
D. Lower temperature to 0

---

### Q16. DeepSeek R1 (January 2025) is notable because: *(Remember)*
A. It's a closed-weights model
B. It's the first open-weights reasoning model competitive with o1
C. It only works for English
D. It has 4K context

---

### Q17. A correct ReAct loop usually has 3 alternating role-like tags: *(Remember)*
A. System / User / Assistant
B. Thought / Action / Observation
C. Input / Process / Output
D. Reason / Vote / Answer

---

### Q18. Self-consistency at N=5 vs N=40 typically: *(Understand)*
A. Gives 0% of the lift of N=40
B. Often captures most of the lift at much lower cost — eval to find the right N for your task
C. Is always identical
D. Is 8× the cost

---

### Q19. A multi-file code refactor across 8 modules is BEST suited for: *(Apply)*
A. A small/cheap model with no CoT
B. A reasoning model (o3, Claude Extended Thinking, Gemini Deep Think)
C. Self-consistency at N=100
D. A classification model

---

### Q20. The CoT "faithfulness" research from Anthropic and others suggests: *(Analyze)*
A. CoT traces are always causally faithful to the model's actual computation
B. CoT traces are often post-hoc rationalizations and not strictly faithful — but they still improve accuracy and aid debugging
C. CoT is meaningless
D. CoT traces are random

---

### Q21. The cheapest single change to boost a reasoning task's accuracy on a standard non-reasoning model is: *(Apply)*
A. Buy a bigger GPU
B. Add "Let's think step by step." to the prompt (zero-shot CoT)
C. Switch to Llama 2
D. Lower max_tokens

---

### Q22. A failure mode where the model spends 25K reasoning tokens on a trivial question is best mitigated by: *(Evaluate)*
A. Increase budget_tokens
B. Set a small budget_tokens cap OR route trivial tasks to a non-reasoning model
C. Increase temperature
D. Add more few-shot examples

---

### Q23. Tree-of-Thought (ToT) compared to self-consistency: *(Analyze)*
A. ToT is cheaper for most tasks
B. ToT explores multiple branching paths with search; self-consistency samples independent paths; ToT is usually higher-cost
C. ToT is the same as ReAct
D. ToT is always better

---

### Q24. The o1 system card showed approximately this lift on AIME 2024 vs GPT-4o: *(Remember)*
A. +1pt
B. +43pt (from ~13% to ~57%)
C. +200pt
D. 0pt

---

### Q25. CoT can make safety-critical outputs MORE problematic when: *(Analyze)*
A. Reasoning traces leak sensitive logic (PII, system prompt, security checks) if logged or cached
B. CoT is free
C. CoT bypasses model size
D. CoT eliminates the need for evals

---

### Q26. Design challenge: A startup is building a tax-form line-item calculator (mistakes are costly), a customer-support reply suggester (latency-sensitive), and a travel itinerary planner (multi-constraint). The MINIMUM viable architecture is: *(Create)*

> *Create-level note:* you are routing different work to different patterns/models.
A. All three on o3 with self-consistency N=40
B. Reply suggester → Haiku/Flash no CoT; Tax calculator → GPT-5 + CoT + self-consistency N=5; Itinerary → reasoning model (o3 or Claude Extended Thinking)
C. All three on Llama 2 with no CoT
D. All three on the same flagship at temperature 1.5

---

## 🎯 Answers + Explanations

### Q1: **B. Intermediate reasoning tokens before the final answer**
Definition of CoT. The intermediate reasoning IS the technique.

### Q2: **B. Wei et al. 2022**
*Chain-of-Thought Prompting Elicits Reasoning in Large Language Models* — NeurIPS 2022. Cite it correctly.

### Q3: **C. "Let's think step by step."**
Kojima et al. 2022's zero-shot CoT trigger. The most famous 7 words in prompt engineering.

### Q4: **B. Sample N times with T>0 and majority-vote**
That's the algorithm. Wang et al. 2022 on ICLR 2023.

### Q5: **B. CoT adds compute/deliberation; trivial tasks don't need it**
The token-budget-per-step theory. Multi-step tasks benefit; trivial ones eat tokens for no gain.

### Q6: **A. Tool calls / actions interleaved with thoughts and observations**
ReAct = Reason + Act. The agent loop pattern.

### Q7: **C. Search-like problems**
Game of 24, puzzles, planning. NOT for sentiment or classification.

### Q8: **B. Billed as output tokens, 5–50× more expensive**
o1/o3 thinking tokens are real and metered. Reasoning model cost discipline is critical.

### Q9: **B. `budget_tokens`**
Claude Extended Thinking parameter. Caps how many thinking tokens the model is allowed.

### Q10: **B. Modest/no lift + higher cost — overkill**
Reply suggestions are trivial. CoT is not free. Route by task complexity.

### Q11: **B. "Would a smart human need to deliberate?"**
The mental router. Simple lookup → standard model. Multi-step optimization → reasoning model.

### Q12: **C. 40× cost**
You're running the model N times. Plus parsing.

### Q13: **C. +39pt (18% → 57%)**
The headline GSM8K number from Wei 2022. Memorize the order of magnitude.

### Q14: **A. Confident, fluent, wrong reasoning**
The most dangerous failure mode. Catch with verifiers and self-consistency.

### Q15: **B. Extended Thinking config with budget_tokens**
The Anthropic API pattern. Not a prompt trick; a request parameter.

### Q16: **B. First open-weights reasoning model competitive with o1**
January 2025 release. Reproducible, downloadable, with visible reasoning traces.

### Q17: **B. Thought / Action / Observation**
The canonical ReAct triple. Each iteration.

### Q18: **B. Often most of the lift at lower N — eval to find right N**
The diminishing-returns curve flattens. N=5 captures a lot; eval for your task.

### Q19: **B. Reasoning model**
Multi-file refactor is exactly what reasoning models were designed for.

### Q20: **B. Often post-hoc rationalizations; still useful**
Anthropic interpretability + several follow-up papers. CoT helps accuracy regardless.

### Q21: **B. Zero-shot CoT trigger**
Cheapest change with the biggest lift on reasoning tasks. The 7-word trick.

### Q22: **B. Set budget_tokens cap OR route trivial tasks elsewhere**
Cost discipline. Don't pay for o3-level deliberation on a one-liner.

### Q23: **B. ToT explores branching with search; self-consistency samples independent; ToT usually higher cost**
The architectural difference. ToT for puzzle search; self-consistency for math reliability.

### Q24: **B. +43pt (13% → 57%)**
The headline o1 number on AIME 2024. Memorize for the exam.

### Q25: **A. Reasoning traces leak sensitive logic if logged or cached**
A real production concern. Strip or sanitize reasoning before logging.

### Q26: **B. Right tool for each job**
Routing by task complexity is the production pattern. The all-on-o3 option bankrupts you.

---

## 📊 Score Yourself

- 25–26/26 → 🏆 Module 3 mastered. Onward to structured outputs.
- 22–24/26 → ✅ Solid. Note the gaps, then move on.
- 18–21/26 → ⚠️ Re-read the CoT, self-consistency, and reasoning-model sections.
- <18/26 → 🔁 Restart the Reading.md, then re-quiz tomorrow.

---

## 🃏 Add To Your Flashcards

- Papers: Wei 2022 (CoT), Kojima 2022 (zero-shot CoT), Wang 2022 (self-consistency), Yao 2022 (ReAct), Yao 2023 (ToT)
- Reasoning models: o1/o3, Claude Extended Thinking (`budget_tokens`), Gemini Deep Think, DeepSeek R1
- Router test: "Would a smart human deliberate?"
- Self-consistency N tradeoffs (N=5 often most of the lift)
- ReAct triple: Thought / Action / Observation

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 4 — Structured Outputs & JSON](../Module-04-Structured-Outputs-JSON/Reading.md)
