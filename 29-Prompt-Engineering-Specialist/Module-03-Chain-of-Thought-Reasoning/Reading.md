# Module 3: Chain-of-Thought & Reasoning 🧮

> **Why this module matters:** 15% of the Final Mock, the largest single weight. Reasoning is the most consequential capability gap between novice and expert prompt engineers. The same model, prompted naively, scores 17% on GSM8K. Prompted with chain-of-thought (Wei et al. 2022), it scores 57%. With self-consistency, 74%. The technique is the dial.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - Modules 1 and 2
> - Basic algebra word problems (the canonical CoT benchmark)
> - Reading research-paper notation (loose familiarity)

---

## 🚂 A Story: The 8th-Grade Math Problem That Embarrassed a $20B Company

In November 2021, a competitive-intelligence team at a major US tech firm prepared a slide for their CEO (Chief Executive Officer). The pitch: "Our internal LLM beats GPT-3 on 84% of business writing tasks." A board member, after looking at the demo, asked one question: *"How does it do on the arithmetic problem my 8th-grade daughter brought home last night?"*

> "Roger has 5 tennis balls. He buys 2 more cans of tennis balls. Each can has 3 tennis balls. How many tennis balls does he have now?"

The internal LLM answered **27**. (The correct answer is 11.)

The CEO killed the launch. Q1 strategy was pulled and rewritten. A team spent the next quarter reading three papers, and the first one was *Chain-of-Thought Prompting Elicits Reasoning in Large Language Models* (Wei et al., January 2022). When they tried the *exact same model* with the prompt:

> "Roger has 5 tennis balls. He buys 2 more cans of tennis balls. Each can has 3 tennis balls. How many tennis balls does he have now?
>
> **A:** Let's think step by step. Roger started with 5 balls. 2 cans of 3 tennis balls each is 6 tennis balls. 5 + 6 = 11. The answer is 11."

…it answered correctly. The model hadn't changed. The team had finally understood what they were holding.

Chain-of-thought is the discovery that **the same weights, prompted to externalize reasoning step-by-step, become dramatically smarter on multi-step problems.** This module is how to ride that effect, and when *not* to.

---

## 🧠 What Chain-of-Thought Actually Is

Chain-of-thought (CoT) is the prompting pattern where the model produces **intermediate reasoning tokens** before its final answer, rather than jumping straight to a one-token output.

The Wei et al. 2022 paper measured this across math (GSM8K, MultiArith, SVAMP), commonsense (StrategyQA), and symbolic reasoning benchmarks. The headline result:

| Model | Task | Standard prompting | CoT prompting | Lift |
|-------|------|--------------------|----|------|
| PaLM 540B | GSM8K | 18% | 57% | **+39pt** |
| GPT-3 175B | GSM8K | 15% | 47% | **+32pt** |
| LaMDA 137B | GSM8K | 14% | 49% | **+35pt** |
| Codex (GPT-3) | MultiArith | 22% | 92% | **+70pt** |
| PaLM 540B | StrategyQA | 68% | 78% | **+10pt** |

These are not incremental gains. They are the difference between "interesting research" and "shippable product."

### The two flavors

| Flavor | How |
|--------|-----|
| **Few-shot CoT (Wei 2022)** | Show examples that include reasoning, then ask the model to follow the same pattern |
| **Zero-shot CoT (Kojima 2022)** | Just add `"Let's think step by step."`, no examples needed |

Both work. Zero-shot CoT is the cheaper, simpler default; few-shot CoT is more controllable and often higher-ceiling.

### Why CoT works (one theory)

A language model's next-token computation budget per step is fixed by the architecture. By emitting reasoning tokens, the model effectively gets **more compute** to bring to bear on the problem, each intermediate token is conditioned on the previous ones, allowing a kind of "deliberation" the one-token-answer pattern doesn't permit.

The Kojima zero-shot paper also identified that the magic phrase doesn't have to be exactly *"Let's think step by step."*, variants like *"Let's work this out in a step by step way to be sure we have the right answer."* sometimes worked even better. The cleaner the trigger, the more reliable the activation.

---

## 0️⃣ Zero-Shot Chain-of-Thought

The cheapest, easiest, most powerful single trick in prompt engineering.

```python
# Standard prompt, often wrong
prompt = "If a train leaves Boston at 3pm traveling 60mph and another leaves NYC at 4pm traveling 75mph, when do they meet? Cities are 200 miles apart. Answer with just the time."

# Zero-shot CoT, often right
prompt = "If a train leaves Boston at 3pm traveling 60mph and another leaves NYC at 4pm traveling 75mph, when do they meet? Cities are 200 miles apart.\n\nLet's think step by step."
```

### When zero-shot CoT helps the most

| Task type | Lift you can expect |
|-----------|---------------------|
| Multi-step arithmetic | Massive (20–70pt) |
| Algebraic word problems | Large (20–40pt) |
| Multi-hop QA (StrategyQA) | Moderate (5–15pt) |
| Code debugging | Moderate (10–20pt) |
| Common sense reasoning | Small (3–10pt) |
| Translation | None or negative |
| Sentiment classification | None or negative |
| Single-fact lookup | None or negative |

### Reasoning models, the new default

In late 2024 and through 2025, frontier labs began shipping models with **built-in** chain-of-thought:

| Model family | Reasoning mode | Notes |
|--------------|----------------|-------|
| OpenAI o1 / o3 / o4 | Always-on reasoning; user doesn't see thinking by default | Hidden thinking tokens metered separately |
| Claude 4.7 Extended Thinking | Toggleable via `thinking: {type: "enabled", budget_tokens: N}` | Visible thinking blocks in API (Application Programming Interface) response |
| Gemini 2.5 Pro Deep Think | Toggleable on Pro tier | Visible reasoning trace |
| DeepSeek R1 | Open-weights reasoning model | Open thinking traces, fully reproducible |

🎯 **Memorize:** On reasoning models, you do NOT need `"Let's think step by step"`, the model is doing it internally. Adding it can actually waste tokens or trigger meta-reasoning.

🚨 **Trap:** Reasoning models are 5–50× more expensive than their non-reasoning siblings. Use them for hard problems, not trivial ones.

---

## 1️⃣ Few-Shot Chain-of-Thought

The Wei 2022 pattern: examples include explicit reasoning between question and answer.

```python
prompt = """Q: Natalia sold clips to 48 of her friends in April, and then she sold half as many clips in May. How many clips did Natalia sell altogether in April and May?
A: Natalia sold 48 clips in April. She sold half as many in May, so she sold 48/2 = 24 clips in May. Altogether she sold 48 + 24 = 72 clips. The answer is 72.

Q: Weng earns $12 an hour for babysitting. Yesterday, she just did 50 minutes of babysitting. How much did she earn?
A: Weng earns $12 per hour. 50 minutes is 50/60 of an hour. She earned 12 * (50/60) = $10. The answer is 10.

Q: {user_question}
A:"""
```

### Best practices from Wei et al. 2022 and follow-ups

1. **Use 4–8 examples** for most reasoning tasks (the paper used 8)
2. **Match example structure to your target output**, if you want a clean final answer, say "The answer is X" in each example
3. **Cover the reasoning patterns you expect**, arithmetic examples for math; lookup-style for QA
4. **Keep reasoning steps short and explicit**, the model imitates the granularity you show
5. **Use the same domain language as the target**, financial examples for financial questions

### CoT + format learning combo

```python
# Combine reasoning examples + structured output
prompt = """Solve each problem step by step. Output ONLY valid JSON with keys "reasoning" and "answer".

Q: Roger has 5 tennis balls. He buys 2 cans of 3 balls each. How many now?
A: {"reasoning": "5 + (2 * 3) = 11", "answer": 11}

Q: A pizza costs $8. With a 20% discount, how much do you pay?
A: {"reasoning": "Discount = 8 * 0.20 = 1.60. Final = 8 - 1.60 = 6.40", "answer": 6.40}

Q: {user_question}
A:"""
```

This pattern combines CoT (Module 3) with structured outputs (Module 4) and few-shot (Module 2). It is the modern production default for math-heavy or extraction-heavy reasoning tasks.

---

## 🎲 Self-Consistency (Wang et al. 2022)

If CoT externalizes reasoning, self-consistency asks: *what if we sample the reasoning multiple times and take the majority answer?*

### The algorithm

1. Run the same CoT prompt N times with non-zero temperature (e.g., T=0.7)
2. Extract the final answer from each run
3. Take the majority vote

### Why it works

CoT reasoning paths can branch, sometimes the model takes the right path, sometimes wrong. The *right* path tends to be the modal answer because it's the path most "supported" by the model's distribution. Wrong paths are diverse (many ways to be wrong, fewer ways to be right).

### Results (Wang et al. 2022)

| Benchmark | CoT alone | Self-consistency (N=40) | Lift |
|-----------|-----------|-------------------------|------|
| GSM8K | 56.5% | 74.4% | +17.9pt |
| MultiArith | 91.7% | 99.3% | +7.6pt |
| AQuA | 31.9% | 48.3% | +16.4pt |
| StrategyQA | 65.4% | 76.9% | +11.5pt |

### The cost reality

Self-consistency multiplies your inference cost by **N**. At N=40 on a reasoning model, you're paying 40× per query. Use when:

- The query is high-stakes (financial, medical, legal)
- Latency budget allows parallelism
- Eval shows the lift is worth it on YOUR task

🎯 **Trick:** You can run self-consistency with **N=5** and still get most of the lift on many benchmarks. Always eval on your specific task, sometimes N=3 is sufficient.

---

## 🛠️ ReAct, Reason + Act (Yao et al. 2022)

ReAct extends CoT to **agent** settings where the model can call tools (search, calculator, code execution, API). The pattern interleaves reasoning steps with action steps:

```
Thought: I need to find out when the iPhone 15 was released.
Action: Search["iPhone 15 release date"]
Observation: September 22, 2023.

Thought: Now I need to calculate how many days ago that was.
Action: Calculator["today - 2023-09-22"]
Observation: 1162 days

Thought: I have the answer.
Final Answer: The iPhone 15 was released 1162 days ago.
```

### Why ReAct matters

- Modern LLM agents (LangChain, LangGraph, AutoGen, OpenAI Assistants, Anthropic Computer Use, Cursor, Aider) all use ReAct or a close variant
- It cleanly separates *what to think* from *what to do*, making errors easier to diagnose
- The "Observation" step grounds reasoning in real data, dramatically reducing hallucination

### Implementation patterns

| Pattern | When to use |
|---------|-------------|
| Manual ReAct (write the loop yourself) | Simple agents, full control, debuggable |
| LangChain `create_react_agent` | Quick prototyping |
| LangGraph | Multi-agent, complex flows, production |
| OpenAI Assistants API | OpenAI-only stack, server-side state |
| Anthropic tool use | Claude-native function calling (Module 4 covers schemas) |

🚨 **Trap:** ReAct loops can spin forever. Always set a `max_iterations` cap.

---

## 🌳 Tree-of-Thought (Yao et al. 2023)

Tree-of-Thought (ToT) generalizes CoT by **exploring multiple reasoning paths** and using a **search algorithm** (BFS or DFS) to pick the best.

### The pattern

1. At each reasoning step, generate K candidate continuations
2. Evaluate each candidate (model self-rates, or external scorer)
3. Expand the most-promising
4. Backtrack on dead ends
5. Return the best path to the answer

### Where ToT wins

| Task | CoT | ToT | Lift |
|------|-----|-----|------|
| Game of 24 (math puzzle) | 4% | 74% | +70pt |
| Creative writing (consistency rating) | 6.93/10 | 7.56/10 | +0.63 |
| Mini crosswords | 16% | 60% | +44pt |

### Where ToT is overkill

- Most production prompts don't need ToT. The cost is ~5–20× CoT.
- ToT shines on **search-like problems** (puzzles, planning, multi-step optimization).
- For most classification/extraction/writing tasks, self-consistency is cheaper and good enough.

---

## 🧮 Reasoning Models, A New Architecture for an Old Problem

OpenAI's o1 (released September 2024) was the first commercial model to ship with **reasoning as a first-class feature** rather than a prompt hack. The trade-offs:

| Dimension | Standard model + CoT | Reasoning model (o1/o3/Extended Thinking) |
|-----------|----------------------|-----|
| Reasoning visible? | Yes, in your prompt's output | Hidden (o-series) or visible (Claude/Gemini/DeepSeek) |
| Cost | Normal | 5–50× more |
| Latency | Normal | 3–30× slower |
| Lift on hard reasoning | +20–40pt | +30–60pt over CoT |
| Lift on trivial tasks | Same | Same or worse |
| Best for | Most production use | Math, coding, planning, multi-step research |

### When to reach for a reasoning model

- Hard math (GSM8K levels, AMC/AIME)
- Multi-file code refactoring
- Complex planning (travel itineraries, project plans with constraints)
- Multi-hop research where each hop conditions the next
- Safety-critical decisions where you want maximum deliberation

### When NOT to use a reasoning model

- Classification, extraction, summarization (use Haiku/Flash/mini)
- Conversational chat (latency tanks UX (User Experience))
- High-volume batch jobs (cost explodes)
- Trivial questions ("What's the capital of France?", you don't need o3 for this)

🎯 **Memorize the test:** *"Would a smart human need to deliberate?"* If yes → reasoning model. If no → standard model + maybe CoT.

---

## 🔬 Scenario Walkthrough (When to use what)

> **Scenario:** Your team is building three features:
> 1. Customer support reply suggestions (FAQ-grade)
> 2. Tax-form line-item calculator (mistakes are expensive)
> 3. Travel itinerary generator (must satisfy budget, dates, preferences, and avoid contradictions)

**Walkthrough:**

| Feature | Recommendation | Why |
|---------|----------------|-----|
| Reply suggestions | Claude Haiku 4.5, **no CoT** | Trivial task, low stakes, latency matters, cost matters |
| Tax calculator | GPT-5 + CoT + **self-consistency N=5** | Multi-step math, mistakes costly, latency tolerable |
| Itinerary | **o3** or Claude Extended Thinking | Multi-constraint planning, exactly what reasoning models excel at |

This is the kind of routing decision a Module-3-grade prompt engineer makes daily.

---

## 🛡️ Common Reasoning Failures (and how to catch them)

### Failure 1: Inconsistent intermediate steps

The model says one thing in step 2 and contradicts it in step 4. **Defense:** Run self-consistency or use a verifier (LLM-as-judge, Module 6).

### Failure 2: Arithmetic in the model's head

Even with CoT, models can miscalculate. **Defense:** Force the model to **use a calculator tool** (ReAct), or run the answer through a verifier.

### Failure 3: Reasoning is fluent but wrong

A confident wrong answer is the most dangerous failure mode. **Defense:** Ask the model to **rate its own confidence** (calibration is imperfect but better than nothing), and reject answers below threshold.

### Failure 4: Reasoning that leaks PII or system prompt

If your CoT exposes internal logic in `assistant` turns, downstream caching or logging can leak it. **Defense:** Use Claude Extended Thinking with private thinking blocks, or post-process to strip reasoning before logging.

### Failure 5: Over-thinking

Reasoning models can spend 25K tokens on a trivial question. **Defense:** Set `budget_tokens` (Claude) or use a non-reasoning model when the task is simple.

---

## ⚠️ Exam Traps & Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "CoT always helps" | It hurts on trivial tasks (slower, more tokens, no quality gain). |
| "Reasoning models eliminate the need for prompt engineering" | They reduce the need for CoT but everything else still matters. |
| "Self-consistency is free" | It costs N× per query. Use only when accuracy gain justifies it. |
| "Add 'Let's think step by step' everywhere" | Trigger phrases on reasoning models can waste tokens. |
| "ReAct is the same as CoT" | ReAct adds tools/observations; CoT is internal reasoning only. |
| "ToT is the next default" | ToT is for search-like problems; most apps don't need it. |
| "Thinking tokens are free" | They're billed. Hard o3 problems can cost $5+ per query. |
| "More steps = better reasoning" | Forced verbosity can hurt; the right number of steps depends on the task. |
| "CoT exposes the model's true reasoning" | The visible chain is post-hoc and not always causally faithful. |
| "Reasoning model output is always correct" | They hallucinate less but still hallucinate. Eval them. |

---

## 🎓 Key Terms To Know (Add to Flashcards!)

| Term | Definition |
|------|------------|
| **Chain-of-Thought (CoT)** | Prompting pattern that elicits intermediate reasoning before the answer |
| **Wei et al. 2022** | The paper that defined CoT prompting |
| **Kojima et al. 2022** | The zero-shot CoT paper ("Let's think step by step") |
| **Self-consistency** | Sampling reasoning paths N times and majority-voting the answer |
| **Wang et al. 2022** | The self-consistency paper |
| **ReAct** | Reason + Act, interleave thought with tool use (Yao et al. 2022) |
| **Tree-of-Thought (ToT)** | Search over multiple reasoning paths (Yao et al. 2023) |
| **Reasoning model** | Model with first-class extended-thinking capability (o1/o3, Claude Extended Thinking, Gemini Deep Think, DeepSeek R1) |
| **Thinking tokens / reasoning tokens** | Hidden or visible deliberation tokens billed by reasoning models |
| **budget_tokens** | Claude Extended Thinking parameter capping thinking-token spend |
| **Calibration** | The degree to which the model's stated confidence matches actual accuracy |
| **Faithfulness** | The degree to which a CoT trace reflects the model's actual causal reasoning |
| **GSM8K** | The standard grade-school math benchmark |
| **MultiArith** | Multi-step arithmetic benchmark |
| **StrategyQA** | Multi-hop commonsense QA benchmark |
| **AIME / AMC** | High-school math olympiad benchmarks used to stress-test reasoning models |

### Acronyms cheat-row (Module 3)
| Acronym | Meaning |
|---------|---------|
| CoT | Chain-of-Thought |
| SC | Self-Consistency |
| ToT | Tree-of-Thought |
| ReAct | Reason + Act |
| GoT | Graph-of-Thought (less-used variant) |
| GSM8K | Grade School Math 8K problems benchmark |
| AIME | American Invitational Mathematics Examination |

---

## 📊 Case Study, OpenAI o1 (September 2024) & the Reasoning-Model Era

**Situation.** On September 12, 2024, OpenAI released **o1-preview** (and `o1-mini`), the first commercial model marketed primarily on its **reasoning** capability. Unlike GPT-4o, which optimized for speed and breadth, o1 was trained with reinforcement learning specifically to deliberate longer before responding. Benchmarks showed dramatic gains on AIME (math olympiad), Codeforces (competitive programming), and GPQA (PhD-level science questions).

**The headline numbers.**

| Benchmark | GPT-4o | o1-preview | Lift |
|-----------|--------|------------|------|
| AIME 2024 | 13.4% | 56.7% | +43pt |
| Codeforces percentile | 11th | 89th | +78pt |
| GPQA Diamond (PhD science) | 50.6% | 78.0% | +27pt |
| MATH (high school competition) | 60.3% | 94.8% | +35pt |

**The architecture insight.** OpenAI did not publish the full method, but described training o1 to produce hidden reasoning tokens before the visible answer. The lift looked similar to CoT + self-consistency + verifier, but baked into the model.

**The trade-off they shipped with.**
- 5–50× cost vs GPT-4o per visible token (because of hidden reasoning)
- 3–30× latency
- No streaming during the reasoning phase
- Limited tool use (initially); broader by o3 release
- Reasoning tokens are NOT shown to the user (only OpenAI sees them)

**The industry response.** Within 6 months: Claude Extended Thinking (December 2024), Gemini Deep Think (March 2025), DeepSeek R1 open-source reasoning model (January 2025). The category became standard.

**Lesson for the exam / for practitioners.**
- The CoT pattern from Wei 2022 is now BUILT IN to flagship reasoning models, you don't need to prompt for it on those models.
- For standard models (Sonnet, GPT-5, Flash, Llama), CoT prompting still matters.
- Cost discipline matters more than ever. A naive routing of every query to o3 will bankrupt your project.

**Discussion (Socratic).**
- **Q1:** A team routes 100% of traffic to o3 "to be safe." Calculate the cost on 1M queries/month averaging 200 input + 500 visible output + 5K reasoning tokens. Compare to Claude Sonnet + CoT.
- **Q2:** Argue for and against the OpenAI design choice of hiding reasoning tokens from users. What are the safety implications? The product implications?
- **Q3:** DeepSeek R1 (open-weights, January 2025) was widely seen as a Sputnik moment. What does the existence of open-weights reasoning models change for prompt engineering as a practice?

---

## ✅ Module 3 Summary

You now know:

- 🚂 What chain-of-thought is and why Wei et al. 2022 was a watershed
- 0️⃣ Zero-shot CoT (`"Let's think step by step"`), the cheapest, most powerful trick
- 1️⃣ Few-shot CoT, control + ceiling for reasoning tasks
- 🎲 Self-consistency, N-sample majority vote; massive lifts on math at N× cost
- 🛠️ ReAct, interleaving thought + action for tool-using agents
- 🌳 Tree-of-Thought, search over reasoning paths for puzzle-like problems
- 🧮 Reasoning models, o1/o3, Claude Extended Thinking, Gemini Deep Think, DeepSeek R1
- 🛡️ The five common reasoning failures and how to catch them
- 🎯 The router test: *"Would a smart human need to deliberate?"*

**Next steps:**
1. 🎥 Watch the curated videos: [Videos.md](./Videos.md)
2. ✏️ Take the quiz: [Quiz.md](./Quiz.md), aim for 22/26
3. 📋 Review the [Cheat-Sheet.md](./Cheat-Sheet.md) before bed
4. ➡️ Move on: [Module 4, Structured Outputs & JSON](../Module-04-Structured-Outputs-JSON/Reading.md)

> **Where this leads.**
> - Inside this course: [Module 4](../Module-04-Structured-Outputs-JSON/Reading.md) combines CoT with structured outputs. [Module 6](../Module-06-Evaluation-AB-Testing/Reading.md) is how you prove CoT actually helps on your task. [Module 8](../Module-08-Production-Scale/Reading.md) covers cost discipline for reasoning models.
> - Cross-course: Claude Architect (Cert Hub) covers Extended Thinking in depth. AWS (Amazon Web Services) AI Practitioner (course 07) covers Bedrock-hosted reasoning models.
> - Practice: Practice Exam 1 has ~5 questions from this module, the largest single-module weight.

---

## 📚 Further Reading (Optional)

**Primary sources (the originals):**
- 📄 Wei et al. (2022). *Chain-of-Thought Prompting Elicits Reasoning in Large Language Models*. NeurIPS 2022.
- 📄 Kojima et al. (2022). *Large Language Models are Zero-Shot Reasoners*. NeurIPS 2022.
- 📄 Wang et al. (2022). *Self-Consistency Improves Chain of Thought Reasoning in Language Models*. ICLR 2023.
- 📄 Yao et al. (2022). *ReAct: Synergizing Reasoning and Acting in Language Models*.
- 📄 Yao et al. (2023). *Tree of Thoughts: Deliberate Problem Solving with Large Language Models*. NeurIPS 2023.
- 📄 OpenAI (2024). *Learning to Reason with LLMs*, the o1 system card.

**Vendor docs:**
- 📖 [Anthropic, Extended Thinking](https://docs.anthropic.com/en/docs/build-with-claude/extended-thinking)
- 📖 [OpenAI, Reasoning Models](https://platform.openai.com/docs/guides/reasoning)
- 📖 [Google, Gemini 2.5 Pro Deep Think](https://ai.google.dev/gemini-api/docs/thinking)
- 📖 [DeepSeek, R1 Technical Report](https://arxiv.org/abs/2501.12948)

**Practitioner:**
- 📖 [DAIR.AI, Chain-of-Thought chapter](https://www.promptingguide.ai/techniques/cot)
- 📖 [Lilian Weng LLM Agents](https://lilianweng.github.io/posts/2023-06-23-agent/) ReAct + planning patterns
- 📖 [Simon Willison, o1 hands-on](https://simonwillison.net/tags/o1/)
