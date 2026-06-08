# 🧪 Practice Exam 1, Prompt Engineering Specialist (Modules 1–4)

> **Conditions:** Set a 30-minute timer. 30 questions. Treat it like the real thing.
> **Pass mark:** 26/30 (~87%), Cert-Hub mocks are tougher than the real bar so aim high.
> Take this AFTER finishing Modules 1–4. Covers Foundations, Few-Shot, Chain-of-Thought, Structured Outputs.

---

## 📝 Questions

### 1. The system role in modern chat APIs is the HIGHEST authority because:
A. It costs less to bill
B. Frontier models are RLHF-trained to prefer system instructions when they conflict with user/tool messages (the instruction hierarchy)
C. It uses fewer tokens
D. It cannot be overridden by code

### 2. Setting `temperature=0`:
A. Guarantees byte-identical output forever
B. Produces near-deterministic / greedy decoding, but absolute determinism also requires a fixed seed and deterministic backend kernels
C. Disables the model
D. Has the same effect as `top_p=0`

### 3. A 600-word English customer email is approximately how many tokens (BPE)?
A. ~80
B. ~300
C. ~800
D. ~3,000

### 4. The "Lost in the Middle" finding (Liu et al. 2023) tells you to:
A. Place critical instructions in the exact middle of the context
B. Place critical instructions at the START of the system prompt OR the END of the user message
C. Avoid context windows
D. Always use 4K context

### 5. OpenAI o-series (o1/o3/o4) reasoning models produce hidden "thinking tokens" that:
A. Are free
B. Are billed as output tokens; can be 5–50× more expensive than non-reasoning siblings
C. Replace the visible answer
D. Are open source

### 6. Anthropic Claude exposes its system prompt as:
A. A regular `messages[0]` with role=system
B. A top-level `system` parameter on the Messages API
C. Inside `config.system_instruction`
D. Only available on Pro plans

### 7. Output tokens are typically billed at what multiple of input tokens on Claude/GPT/Gemini flagships?
A. 0.1×
B. Same as input
C. 3–5× more expensive
D. 100× more expensive

### 8. The seminal in-context learning paper is:
A. Vaswani et al. 2017 (Attention)
B. Brown et al. 2020 (GPT-3, Language Models are Few-Shot Learners)
C. Bai et al. 2022 (Constitutional AI)
D. Liu et al. 2023 (G-Eval)

### 9. Lu et al. 2022 (*Fantastically Ordered Prompts*) showed example ORDER can swing few-shot accuracy by:
A. <1pt
B. ~5pt
C. ~30+pt
D. 0pt

### 10. The cheapest single change to boost reasoning accuracy on a standard (non-reasoning) model is:
A. Upgrade the GPU
B. Add `"Let's think step by step."` (zero-shot CoT, Kojima 2022)
C. Switch to Llama 2
D. Add 100 random examples

### 11. Self-consistency (Wang et al. 2022) cost relative to single-pass CoT at N=40 is approximately:
A. 1×
B. 5×
C. 40×
D. Free

### 12. ReAct (Yao et al. 2022) interleaves:
A. system / user / assistant
B. Thought / Action / Observation
C. Token / Prompt / Output
D. Train / Val / Test

### 13. OpenAI o1's headline lift over GPT-4o on AIME 2024 was approximately:
A. +1pt
B. +43pt (13.4% → 56.7%)
C. +200pt
D. -10pt

### 14. The L0/L1/L2 progression of structured output guarantees is:
A. Cheap / Medium / Expensive
B. Prompt-only → JSON Mode (valid JSON) → Schema-enforced Structured Outputs (your schema)
C. Free / Pro / Enterprise tiers
D. Fast / Medium / Slow

### 15. Anthropic achieves schema-enforced output via:
A. `response_format={"type": "json_object"}`
B. Forced tool use: `tool_choice={"type": "tool", "name": "<your_tool>"}`
C. There is no Anthropic equivalent
D. Server-side JSON repair

### 16. The most popular cross-provider library that wraps OpenAI/Anthropic/Gemini/Mistral with Pydantic schemas and validation retries is:
A. langchain
B. instructor
C. requests
D. numpy

### 17. `Literal["LOW", "MEDIUM", "HIGH"]` in Pydantic + structured outputs means:
A. The model bills at one of three rates
B. The model is constrained, that field can ONLY take one of those three values
C. The temperature is set
D. Three retries are allowed

### 18. The PRIMARY reason to put a `reasoning` field BEFORE the `answer` field in a Pydantic schema:
A. Aesthetic preference
B. Structured outputs generate fields in declared order, `reasoning` first conditions the model's answer (CoT inside the schema)
C. Pydantic requires alphabetical order
D. Cost reduction

### 19. OpenAI's JSON mode requires:
A. The word `"json"` to appear in the prompt
B. A specific API tier
C. Temperature ≥ 0.7
D. A custom tokenizer

### 20. Anthropic prompt caching reduces the cost of cached prompt prefixes to approximately:
A. 0% (free)
B. ~10% of the normal input price
C. Same as normal price
D. 200%

### 21. A team has a transactional pricing bot. The CORRECT parameter set for the LLM call is:
A. temperature=1.5, top_p=0.5
B. temperature=0, structured outputs / JSON mode, schema validation on the downstream pipeline
C. temperature=0.7, free-form output
D. No system prompt, no structure

### 22. "Many-shot ICL" (Agarwal et al. 2024) generally requires a model with at least:
A. 1B parameters
B. 200K context window
C. T=0
D. Audio input

### 23. The PRIMARY cost win from Anthropic prompt caching when combined with many-shot ICL is:
A. Faster training
B. The expensive few-shot prefix is paid for once; subsequent calls reuse it at ~10% of normal input cost
C. Lower output tokens
D. Bigger context

### 24. A reasoning model is over-spending on trivial queries. The fix:
A. Increase budget_tokens
B. Set a tight `budget_tokens` cap OR route trivial tasks to a non-reasoning model (Haiku, Flash, mini)
C. Increase temperature
D. Add more few-shot examples

### 25. Tool descriptions in a tool-use schema are best described as:
A. Internal documentation, ignored by the model
B. A core part of the prompt, the model uses descriptions to decide when and how to call each tool
C. JSON Schema metadata only
D. Auto-generated by the API

### 26. A team observes 0% parse failures with structured outputs but the model invents product names not in the catalog. The MOST appropriate fix:
A. Switch to L0
B. Add a Pydantic `@field_validator` that checks against the catalog; `instructor` retries with the error context
C. Lower temperature to -1
D. Switch tokenizers

### 27. The instruction hierarchy on modern chat models (OpenAI Wallace et al. 2024 formalization) is:
A. tool > user > system
B. system > developer > user > tool
C. assistant > user > system
D. All roles equal

### 28. Few-shot example order is most strongly defended against bias by:
A. Always putting common labels last
B. Balancing label counts across positions AND randomizing per request (or testing order on a held-out set)
C. Always putting rare labels first
D. Using only one example

### 29. The "router test" for whether to use a reasoning model is:
A. "Is the input long?"
B. "Would a smart human need to deliberate?"
C. "Is the input in JSON?"
D. "Is the user a paying customer?"

### 30. Design challenge: A bank wants to ship a transactional support classifier (47 categories) with high accuracy AND tight cost. The MINIMUM viable architecture is:
A. Free-form GPT-4o at temperature 1
B. Zero-shot prompt with a tiny model
C. Similarity-based (kNN) few-shot retrieval from historical labeled tickets + structured output (Pydantic + instructor + Literal[47-class enum] + validator + retry) + cross-family LLM-judge for safety on a sample + Anthropic prompt caching on the system + few-shot prefix to control cost + per-customer spend caps
D. Hardcode regex on free-form output

---

## 🎯 Answer Key (No Cheating!)

```
1.  B    11. C    21. B
2.  B    12. B    22. B
3.  C    13. B    23. B
4.  B    14. B    24. B
5.  B    15. B    25. B
6.  B    16. B    26. B
7.  C    17. B    27. B
8.  B    18. B    28. B
9.  C    19. A    29. B
10. B    20. B    30. C
```

---

## 💡 Quick Rationales (one-liner per question)

1. **B**, system is highest-authority per the RLHF-trained instruction hierarchy (OpenAI Wallace 2024).
2. **B**, T=0 is greedy; absolute determinism also needs seed + deterministic backend.
3. **C**, ~0.75 words/token × 600 words ≈ 800 tokens.
4. **B**, "Lost in the Middle" finding. Critical info → edges.
5. **B**, reasoning tokens billed as output; o3 is 5–50× the cost of GPT-5 per visible token.
6. **B**, Anthropic puts `system` top-level; OpenAI/Llama put it in `messages[0]`; Gemini in `config.system_instruction`.
7. **C**, output is typically 3–5× input cost on Claude/GPT/Gemini flagships.
8. **B**, Brown et al. 2020 (the GPT-3 paper) defined ICL at scale.
9. **C**, Lu et al. 2022 quantified ~30+pt swings from example reordering.
10. **B** Kojima 2022's "Let's think step by step" the cheapest reasoning lift.
11. **C**, N=40 samples → 40× cost. Use lower N when eval allows.
12. **B**, ReAct interleaves Thought / Action / Observation per Yao 2022.
13. **B**, o1-preview's headline AIME 2024 lift over GPT-4o (~13% → 57%).
14. **B**, L0 (prompt-only) → L1 (JSON Mode) → L2 (Schema-enforced).
15. **B**, Anthropic's structured-output idiom is forced tool use.
16. **B**, `instructor` is the cross-provider Pydantic wrapper de facto standard.
17. **B**, `Literal["LOW","MEDIUM","HIGH"]` constrains the field to those three values only.
18. **B**, Pydantic field order = generation order; reasoning-first conditions the answer.
19. **A**, OpenAI's safeguard: JSON mode requires "json" in the prompt.
20. **B**, Anthropic cache-hit price is ~10% of normal input cost.
21. **B**, Transactional pricing demands deterministic-ish output + structure + validation.
22. **B**, Many-shot is feasible with 200K+ context (Claude/Gemini/GPT-5).
23. **B**, Cache the expensive few-shot prefix once; reuse cheaply per call.
24. **B**, Cap `budget_tokens` OR route trivial work to a non-reasoning model.
25. **B**, Tool descriptions are part of the prompt; model routes off them.
26. **B**, Pydantic `@field_validator` + instructor retry = closed-loop self-correction.
27. **B**, Wallace et al. 2024 OpenAI Instruction Hierarchy paper.
28. **B**, Balance + randomize beats positional shortcuts.
29. **B**, The "would a smart human deliberate?" router test.
30. **C**, The full production-grade stack: kNN + Pydantic + cross-family judge + cache + spend caps.

---

## 📊 Score Yourself

- **28–30 correct** → 🏆 Module-1-through-4 mastery. Onward to Practice Exam 2.
- **24–27** → ✅ Strong. Note your gaps; revisit those modules.
- **20–23** → ⚠️ Solid but more study needed. Re-quiz module weak spots.
- **<20** → 🔁 Restart the relevant modules; re-take this exam in 1 week.

### Topic-by-topic breakdown
- **Foundations** (Q1-7) → if you missed 2+ → Module 1
- **Few-Shot** (Q8-9, 22-23, 28) → Module 2
- **CoT & Reasoning** (Q10-13, 24, 29) → Module 3
- **Structured Outputs** (Q14-21, 25-27, 30) → Module 4

---

➡️ When you're ready for Modules 5-8: [Practice Exam 2](./Practice-Exam-2.md)
