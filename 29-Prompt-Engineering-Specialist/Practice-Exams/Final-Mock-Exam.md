# 🏆 Final Mock Exam, Prompt Engineering Specialist

> **Conditions:** Set a **60-minute timer**. **60 questions**. Closed-book. Treat it like the real thing.
> **Pass mark:** **51/60 (85%)**. This is the Cert-Hub bar.
> Take this 2–3 days BEFORE you declare yourself done. Mock-Final tests ALL 8 modules at exam-like intensity.

### Topic Weights (mirrors the published Cert-Hub objectives)

| Domain | Weight | Questions |
|--------|--------|-----------|
| 1.0 Foundations | 12% | ~7 |
| 2.0 Few-Shot & ICL | 12% | ~7 |
| 3.0 CoT & Reasoning | 15% | ~9 |
| 4.0 Structured Outputs | 13% | ~8 |
| 5.0 Multi-Modal | 10% | ~6 |
| 6.0 Evaluation & A/B | 13% | ~8 |
| 7.0 Adversarial Defense | 13% | ~8 |
| 8.0 Production at Scale | 12% | ~7 |

---

## 📝 Questions

### 1. The "instruction hierarchy" formalized by OpenAI (Wallace et al. 2024) orders authority as:
A. system > developer > user > tool
B. user > system > assistant > tool
C. assistant > tool > user
D. All roles equal

### 2. Setting `temperature=0` guarantees:
A. Byte-identical output forever
B. Disables the model
C. Greedy decoding, but absolute determinism also requires fixed seed + deterministic backend
D. Removes the bias

### 3. The most cost-efficient cheap-tier 2026 model for a high-volume English classification batch (Jan 2026 pricing) is roughly:
A. o3
B. Claude 4.7 Opus
C. GPT-5 Opus
D. Gemini 2.5 Flash ($0.15 input / $0.60 output per MTok)

### 4. The "Lost in the Middle" paper (Liu et al. 2023) suggests placing critical instructions:
A. In the exact middle
B. At the START of the system prompt or END of the user message
C. Randomly
D. In a separate file

### 5. Output tokens vs input tokens on Claude/GPT/Gemini flagships are typically:
A. Output 3–5× more expensive
B. Same price
C. Output free
D. Output 0.1× input

### 6. A reasoning model's hidden "thinking tokens" are:
A. Free
B. Discarded
C. Billed as output tokens, can drive 5–50× higher cost per query
D. Same as Whisper transcripts

### 7. The Microsoft Tay (2016) failure is a cautionary tale primarily about:
A. High temperature
B. Old GPUs
C. Cellular outage
D. The absence of a runtime system prompt, instruction hierarchy, and output filter

### 8. In-context learning was demonstrated at landmark scale in:
A. Vaswani et al. 2017
B. Brown et al. 2020 (GPT-3, *Language Models are Few-Shot Learners*)
C. Bai et al. 2022
D. Wei et al. 2022

### 9. Few-shot example ORDER can shift accuracy by up to (Lu et al. 2022):
A. <1pt
B. ~5pt
C. ~30+pt
D. None

### 10. "Many-shot" ICL is feasible primarily because:
A. 200K+ context windows + prompt caching make it economical
B. Models got smaller
C. Vector databases exist
D. Fine-tuning got easier

### 11. The strongest mitigation for "majority-label bias" in few-shot:
A. Use only one label
B. Use a smaller model
C. Balance example label counts across positions
D. Increase max_tokens

### 12. Min et al. 2022 showed that few-shot ICL helps even when:
A. The model is tiny
B. The temperature is 2
C. The context window is 4K
D. Example labels are RANDOMLY assigned (format learning matters)

### 13. kNN few-shot at runtime retrieves examples by:
A. Random selection
B. Embedding the new input and retrieving the k most-similar historical examples from a vector index
C. Asking the user to pick
D. Alphabetical order

### 14. Anthropic's preferred few-shot formatting convention is:
A. XML tags (`<example>...</example>`)
B. CSV
C. Plain markdown only
D. Base64

### 15. The seminal Chain-of-Thought paper:
A. Brown 2020
B. Bai 2022
C. Wei et al. 2022
D. Vaswani 2017

### 16. The zero-shot CoT trigger phrase from Kojima 2022 is:
A. "Be smart"
B. "Calculate"
C. "Solve quickly"
D. "Let's think step by step"

### 17. Self-consistency (Wang et al. 2022) algorithm:
A. Sample N reasoning paths with T>0; majority-vote the final answer
B. Set T=0 and sample once
C. Use a smaller model
D. Skip the answer

### 18. Self-consistency at N=40 multiplies cost by approximately:
A. 1×
B. 5×
C. 40×
D. Free

### 19. ReAct (Yao et al. 2022) interleaves:
A. system / user / assistant
B. Thought / Action / Observation
C. Prompt / Output / Token
D. Train / Val / Test

### 20. Tree-of-Thought (Yao et al. 2023) is BEST suited for:
A. Search-like problems (puzzles, planning, multi-step optimization)
B. Sentiment classification
C. Translation
D. Single-fact lookup

### 21. OpenAI o1 lifted AIME 2024 over GPT-4o by approximately:
A. +1pt
B. +200pt
C. +43pt (13.4% → 56.7%)
D. 0pt

### 22. Claude Extended Thinking exposes:
A. `temperature`
B. Nothing
C. `max_steps`
D. `budget_tokens` cap for thinking-token spend

### 23. The "router test" for when to use a reasoning model:
A. Random 50/50
B. "Would a smart human need to deliberate?"
C. "Is the input long?"
D. "Is the user a paying customer?"

### 24. DeepSeek R1 (January 2025) was significant because:
A. First open-weights reasoning model competitive with o1
B. Closed weights
C. Audio-only
D. 4K context

### 25. The progression L0 → L1 → L2 in structured outputs represents:
A. Pricing tiers
B. API tiers
C. Prompt-only → JSON Mode (valid JSON) → Schema-enforced (your JSON Schema)
D. Geographic regions

### 26. Anthropic schema-enforced output uses:
A. `response_format={"type": "json_object"}`
B. There is no equivalent
C. Server-side JSON repair
D. Forced tool use: `tool_choice={"type": "tool", "name": "<name>"}`

### 27. The popular cross-provider Pydantic wrapper for LLM structured outputs is:
A. requests
B. instructor
C. langchain
D. numpy

### 28. A Pydantic field `severity: Literal["LOW","HIGH"]` constrains the model to:
A. Output ONLY one of those two values for that field
B. Use lower temperature
C. Pick between two models
D. Wait 2 seconds

### 29. OpenAI JSON Mode requires the word "json" to appear:
A. In the API key
B. In the model name
C. Somewhere in the prompt (system or user message)
D. Nowhere

### 30. The retry-on-validation-error loop in `instructor`:
A. Drops the request
B. Switches models
C. Lowers temperature
D. Catches a Pydantic ValueError and re-prompts the model with the error context (up to `max_retries`)

### 31. Tool descriptions in a tool-use schema are:
A. Documentation only
B. A core part of the prompt, model uses them to choose and parameterize tool calls
C. Auto-generated
D. Hidden from the model

### 32. Among 2026 families, native VIDEO file input is best on:
A. Claude
B. GPT-5
C. Gemini 2.5 Pro / Flash
D. Llama 3.2 Vision

### 33. A high-detail 1024×1024 image typically costs approximately:
A. ~1,500–2,500 tokens
B. ~10 tokens
C. ~50 tokens
D. ~100K tokens

### 34. EXIF rotation metadata:
A. Always honored
B. Doesn't exist
C. OFTEN NOT honored, pre-rotate
D. Adds tokens

### 35. The MOST robust defense against chart-confabulation in vision LLMs:
A. Lower temperature
B. Grayscale
C. Bigger image
D. Enumerate data points individually + self-consistency

### 36. Image text in a photo (e.g., a sticky note saying "Ignore prior instructions"):
A. Always safe
B. Is a real prompt-injection vector, treat as untrusted input
C. Bills extra
D. Auto-OCR'd safely

### 37. The 3 pillars of LLM evaluation:
A. Programmatic / LLM-as-judge / human review
B. Train/val/test
C. Speed/cost/quality
D. Claude/GPT/Gemini

### 38. G-Eval (Liu et al. 2023) refinements over naïve LLM-judging:
A. Bigger judge model
B. Lower temperature
C. Chain-of-thought reasoning + averaging scores across N judge samples
D. Vector embeddings

### 39. The strongest defense against LLM-judge "self-preference" bias:
A. Higher-tier judge
B. Remove criteria
C. Lower temperature
D. Use a DIFFERENT model family for the judge

### 40. RAGAS provides these RAG metrics:
A. Latency only
B. Faithfulness, answer relevance, context precision, context recall
C. Token count
D. Cost only

### 41. To detect a 5pt accuracy delta at ~80% power, you need approximately:
A. ~1,500 per arm
B. 10 per arm
C. 100 per arm
D. 1M per arm

### 42. "Pre-registration" of an A/B success metric:
A. Pre-pays the API
B. Registers a domain
C. Defines metric and decision rule BEFORE looking at data, prevents p-hacking
D. Trains the judge

### 43. Inter-annotator agreement (Cohen's κ) above ~0.7 indicates:
A. Bad rubric
B. Bias
C. Random scoring
D. Substantial agreement, well-defined task

### 44. The 3 categories of prompt injection:
A. SQL / NoSQL / GraphQL
B. Direct / indirect / multi-modal
C. Active / passive / hybrid
D. Easy / medium / hard

### 45. The seminal indirect-prompt-injection paper:
A. Greshake et al. 2023
B. Brown 2020
C. Wei 2022
D. Bai 2022

### 46. The MOST important architectural principle for tool RESULTS:
A. Tool outputs are trusted
B. Tools must be open-source
C. Tool outputs are ALWAYS untrusted input, never instructions
D. Tools must require T=0

### 47. Anthropic Constitutional AI (Bai et al. 2022) trains the model by:
A. Adding parameters
B. Adding humans
C. Lowering temperature
D. Self-critique against a constitution; revisions become training data

### 48. "Defense in depth" against jailbreaks means:
A. One very strong layer
B. Multiple independent layers, system prompt + input/output filters + sandboxing + judge + red-team
C. Hiring more engineers
D. Bigger model

### 49. Air Canada chatbot ruling (Feb 2024) established:
A. A company can be HELD LIABLE for promises a chatbot makes
B. Chatbots are immune from law
C. AI replaces lawyers
D. Pricing must be honest

### 50. DeepSeek R1 jailbreak storm (Jan 2025) demonstrated:
A. Closed models only break
B. Hardware bugs
C. Even open-weights reasoning models can be jailbroken via role-play, encoding, multi-turn within 48h
D. Only one user issue

### 51. Anthropic prompt caching is enabled via:
A. Automatic on everything
B. Smaller model
C. Lowering temperature
D. Marking sections with `cache_control: {"type": "ephemeral"}` or `"persistent"`

### 52. OpenAI prompt caching:
A. Manual only
B. Automatic for prompts ≥1024 tokens at ~50% discount on cached portion
C. Free for all
D. Disabled by default

### 53. A semantic cache stores responses keyed by:
A. Embedding-similarity of input, serve hit when new input is semantically close
B. Plain prompt text
C. API key
D. System prompt

### 54. The dominant multi-provider abstraction in 2026:
A. requests
B. pandas
C. numpy
D. LiteLLM

### 55. TTFT target for "responsive" chat:
A. <50ms
B. <500ms
C. <30s
D. <5min

### 56. Batch APIs (OpenAI / Anthropic) offer:
A. ~50% discount + relaxed limits for non-realtime workloads
B. Faster realtime
C. Higher quality
D. Smaller models only

### 57. Per-customer spend caps primarily defend against:
A. Slow responses
B. Vendor outages
C. Low quality
D. Buggy customer integrations burning $50K+ overnight

### 58. Vendor-neutral LLM telemetry is converging on:
A. CSV logs
B. OpenTelemetry GenAI Semantic Conventions (OTel GenAI semconv)
C. Bash
D. Email

### 59. The MOST important reason to PIN model snapshots (not float on "latest"):
A. Lower cost
B. Faster startup
C. Smaller context
D. Vendor regressions on new snapshots can break your prompts, pinning forces explicit eval

### 60. Capstone design challenge: A regulated insurer is building an AI claims-triage assistant that ingests text + photos + voice memos, extracts structured claim data, reasons about coverage, calls internal tools for policy lookup, and produces a recommendation reviewed by a human adjuster. The MINIMUM viable production-grade architecture is:
A. One free-form GPT-4o call
B. Layered defense in depth: (1) Pydantic schemas for every structured artifact (Module 4); (2) Anthropic XML-tagged few-shot retrieval (kNN over historical claims, Module 2) with `reasoning` field before `answer` for CoT-in-schema; (3) Reasoning model (Claude Extended Thinking or o3) for coverage reasoning (Module 3); (4) Gemini 2.5 for any video, Claude/GPT for image OCR with confidence + null-allowed fields (Module 5); (5) Whisper for voice memo transcription (Module 5); (6) Hardened system prompt + instruction-hierarchy delimiters + input validator (PII, encoding, language, safety classifier) + output filter + cross-family LLM-judge safety pass + tool whitelist + confirmation gates for high-risk tools (Module 7); (7) Anthropic prompt caching on the system + tool descriptions + few-shot prefix; (8) LiteLLM with primary Anthropic + OpenAI/Gemini fallbacks; (9) Pre-registered A/B framework + Langfuse observability + per-customer + per-claim spend caps; (10) Eval harness (Module 6) golden set of 200+ claims with programmatic + LLM-judge + 2-rater human review + adversarial regression suite run on every prompt change with cost projection blocking deploys; (11) MANDATORY human adjuster review before any payment / settlement action; (12) Pinned model snapshots with quarterly bump + full eval cycle
C. Single LLM with no structure
D. Hardcoded regex over free-form outputs

---

## 🎯 Answer Key (No Cheating!)

```
1.  A    11. C    21. C    31. B    41. A    51. D
2.  C    12. D    22. D    32. C    42. C    52. B
3.  D    13. B    23. B    33. A    43. D    53. A
4.  B    14. A    24. A    34. C    44. B    54. D
5.  A    15. C    25. C    35. D    45. A    55. B
6.  C    16. D    26. D    36. B    46. C    56. A
7.  D    17. A    27. B    37. A    47. D    57. D
8.  B    18. C    28. A    38. C    48. B    58. B
9.  C    19. B    29. C    39. D    49. A    59. D
10. A    20. A    30. D    40. B    50. C    60. B
```

---

## 💡 Quick Rationales (one-liner per question)

### Foundations (Q1-7)
1. **A**, system > developer > user > tool (Wallace 2024 OpenAI Instruction Hierarchy).
2. **C**, T=0 is greedy; absolute determinism also needs `seed` + deterministic backend.
3. **D**, Gemini 2.5 Flash at $0.15/$0.60 per MTok is the cheapest mid-tier.
4. **B**, Critical info at edges of context per Liu 2023 "Lost in the Middle."
5. **A**, Output tokens cost 3-5× input on Claude/GPT/Gemini flagships.
6. **C**, o1/o3/Extended Thinking thinking tokens are billed as output; expensive.
7. **D** Tay lacked system prompt + hierarchy + filter the canonical 2016 lesson.

### Few-Shot (Q8-14)
8. **B**, Brown 2020 GPT-3 paper, *Language Models are Few-Shot Learners*.
9. **C**, Lu 2022 showed 30+pt swings from example reorder.
10. **A**, 200K+ context + prompt caching make many-shot economical.
11. **C**, Balance label counts defeats majority-label bias.
12. **D** Min 2022 random labels still help (format learning).
13. **B**, kNN retrieval at runtime against a vector index.
14. **A** Anthropic XML tags preferred convention for Claude few-shot.

### CoT / Reasoning (Q15-24)
15. **C** Wei 2022 *Chain-of-Thought Prompting Elicits Reasoning*.
16. **D**, Kojima 2022's "Let's think step by step."
17. **A**, Self-consistency = sample N with T>0, majority-vote.
18. **C**, N=40 means 40× cost. Use N=5 if eval allows.
19. **B**, ReAct = Thought / Action / Observation.
20. **A**, ToT is for search-like problems (puzzles, planning).
21. **C**, o1 lifted AIME from 13.4% to 56.7%, ~+43pt.
22. **D**, Claude Extended Thinking exposes `budget_tokens`.
23. **B** "Would a smart human need to deliberate?" the router test.
24. **A**, DeepSeek R1 was the first open-weights reasoning model competitive with o1.

### Structured Outputs (Q25-31)
25. **C**, L0 prompt-only → L1 JSON Mode → L2 schema-enforced.
26. **D**, Anthropic uses forced tool use as its structured-outputs mechanism.
27. **B**, `instructor` (Jason Liu) is the cross-provider Pydantic wrapper.
28. **A**, `Literal` constrains the field to its listed values only.
29. **C**, OpenAI JSON Mode requires "json" in the prompt.
30. **D**, `instructor` reprompts with validation error context, up to max_retries.
31. **B**, Tool descriptions are part of the prompt; model routes off them.

### Multi-Modal (Q32-36)
32. **C**, Gemini 2.5 has native video.
33. **A**, A high-detail 1024² image ≈ 1,500-2,500 tokens.
34. **C**, EXIF rotation often NOT honored. Pre-rotate.
35. **D**, Enumerate points + self-consistency defeats confabulation.
36. **B**, Image text is a real injection vector. Untrusted input.

### Evaluation (Q37-43)
37. **A**, Three pillars: programmatic / LLM-judge / human.
38. **C**, G-Eval adds CoT + averaged samples.
39. **D**, Cross-family judge defeats self-preference bias.
40. **B**, RAGAS = faithfulness + relevance + context precision + recall.
41. **A**, ~1,500 per arm for a 5pt difference at 80% power.
42. **C**, Pre-registration prevents p-hacking.
43. **D**, κ > 0.7 = substantial agreement; rubric is well-defined.

### Adversarial (Q44-50)
44. **B**, Direct / indirect / multi-modal injection categories.
45. **A**, Greshake 2023 indirect prompt injection paper.
46. **C**, Tool outputs are ALWAYS untrusted input.
47. **D**, Constitutional AI = self-critique against principles.
48. **B** Defense in depth multiple independent layers.
49. **A**, Air Canada chatbot liability ruling Feb 2024.
50. **C**, DeepSeek R1 January 2025 jailbreak storm.

### Production (Q51-59)
51. **D**, Anthropic `cache_control` ephemeral/persistent tags.
52. **B**, OpenAI auto-caches ≥1024 tokens at ~50% off.
53. **A**, Semantic cache keys on input embedding similarity.
54. **D**, LiteLLM is the multi-provider abstraction de facto.
55. **B**, TTFT <500ms = responsive chat bar.
56. **A**, Batch APIs: 50% off + relaxed limits for non-realtime.
57. **D**, Per-customer spend caps prevent runaway bills.
58. **B**, OpenTelemetry GenAI semconv = vendor-neutral telemetry standard.
59. **D** Pin snapshots vendor regressions break prompts silently.

### Capstone (Q60)
60. **B**, Full 12-layer production-grade architecture. Anything less = future incident, regulatory exposure, or unreliable product.

---

## 📊 Score Yourself

- **57–60 correct (95%+)** → 🏆 Distinguished. You can teach this. Ship the capstone.
- **51–56 (85–94%)** → ✅ Cert-Hub pass. Schedule a real-world capstone demo this week.
- **45–50 (75–84%)** → ⚠️ Almost. Revisit the modules where you missed clusters.
- **<45 (<75%)** → 🔁 Take 4–7 days to re-study, then re-take this mock.

### Topic-by-topic breakdown
- **Foundations** (Q1-7) → if you missed 2+ → Module 1
- **Few-Shot** (Q8-14) → Module 2
- **CoT / Reasoning** (Q15-24) → Module 3 (largest weight)
- **Structured Outputs** (Q25-31) → Module 4
- **Multi-Modal** (Q32-36) → Module 5
- **Evaluation** (Q37-43) → Module 6
- **Adversarial** (Q44-50) → Module 7
- **Production** (Q51-59) → Module 8
- **Capstone integration** (Q60) → All 8 modules

---

## 🎓 You're Ready When...

- You pass this Final Mock at ≥85% twice, in two different sittings
- You can build a 12-prompt portfolio that passes your own eval harness
- You can talk anyone through any of the case studies (Tay, Sydney, DeepSeek R1, Yuki bank, Aaliyah claims, Theo's $74K, Rashid cosmetics, Maya pizza, Bea legal-tech) from memory
- You can defend prompt choices in front of a hostile interviewer with citations

---

## 🧠 Final-Mock-Exam Strategy Tips

### Time allocation (60 questions in 60 minutes)
- **0-2 minutes per question average** is your ceiling. Most should take 30-45 seconds.
- **Pass 1 (0-40 min):** Answer every question you know cold. Flag uncertain ones with a star.
- **Pass 2 (40-55 min):** Return to flagged questions. Apply elimination + best-guess.
- **Pass 3 (55-60 min):** Sanity-check no answers are blank. Submit.

### Question pattern recognition
After 60 questions worth of practice across this course, recognize these patterns:

| Pattern | Likely correct |
|---------|----------------|
| "MOST common production..." | The boring, well-known answer (system prompts, structured outputs, eval harness, multi-provider abstraction) |
| "BEST defense against..." | Defense in depth, the multi-layer option |
| "MINIMUM viable architecture" | The comprehensive stack, NOT the minimal one, "minimum viable" in this course usually means "production-grade" |
| Numeric thresholds (sample size, cost) | Memorize from cheat sheets: 1500 samples for 5pt at 80% power; 1500-2500 tokens for high-detail 1K image; 5min ephemeral cache TTL; etc. |
| "Which paper defined X" | Memorize the paper list in the flashcards Section 9 |
| Vendor-specific syntax | Anthropic top-level system + XML; OpenAI messages[0] + response_format; Gemini config.system_instruction + response_schema |

### Cheap eliminations
For multi-choice on this exam:

- Any option that says "always" or "never" without nuance → usually wrong
- Any option that says "the model is broken" → almost always wrong
- Any option recommending temperature > 1.5 → almost always wrong
- Any option that ignores safety/eval → wrong on safety-related questions
- Any option that ignores cost → wrong on production-related questions

### What the design-challenge questions (Q26 of each Practice Exam, Q30 of Practice Exam 2, Q60 of this Mock) reward
The "right" answer is always the **comprehensive, defense-in-depth, eval-tied, multi-vendor-abstracted, observable, cost-capped architecture**. The wrong answers always shortcut at least one layer.

### After the exam
Whatever questions you missed, add a flashcard for each one to your Flashcards.md custom section. The pain of missing a question is the strongest memory aid in human learning. Use it.

---

## 🧾 The 9 Case Studies You Should Be Able To Recite

| Case | Module | Lesson |
|------|--------|--------|
| Microsoft Tay (2016) | 1 | Need runtime system prompts + hierarchy + filter |
| Maya's pizza shop ($84K loss) | 1 | Defense-in-depth on transactional bots |
| Yuki's bank classifier (€400K saved) | 2 | Zero-shot → static few-shot → kNN few-shot progression |
| GPT-3 paper (Brown 2020) | 2 | Birth of in-context learning industry |
| The 8th-grade math problem ($20B company embarrassed) | 3 | CoT unlocks reasoning |
| OpenAI o1 launch (Sept 2024) | 3 | Reasoning-model era |
| Rashid's cosmetics ($1.2M refunds) | 4 | L0 → L2 structured outputs migration |
| OpenAI Structured Outputs launch (Aug 2024) | 4 | Schema-enforced JSON as default |
| Aaliyah's auto-claims (6-day → 11-second triage) | 5 | Vision + Pydantic + iteration |
| GPT-4V launch (Sept 2023) | 5 | The vision-LLM era begins |
| Bea's legal-tech eval block | 6 | Eval discipline blocks "feels sharper" regressions |
| Anthropic's eval-driven releases | 6 | Public eval-prompt transparency norm |
| Microsoft Bing Sydney leak (Feb 2023) | 7 | Assume system prompts will leak |
| DeepSeek R1 jailbreak storm (Jan 2025) | 7 | Open reasoning models need extra hardening |
| Air Canada chatbot ruling (Feb 2024) | 7 | Legal liability for chatbot promises |
| Theo's startup ($74K → $4.2K bill) | 8 | Caching + tier routing + observability + spend caps |
| Anthropic prompt-caching launch (Aug 2024) | 8 | Biggest cost lever in 2026 prompt engineering |

If you can sketch the situation, the failure, and the fix for any of these in under 60 seconds, you're interview-ready.

You got this. 🧠
