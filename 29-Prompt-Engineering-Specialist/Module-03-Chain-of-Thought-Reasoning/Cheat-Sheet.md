# 📋 Module 3 Cheat Sheet: Chain-of-Thought & Reasoning

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 🧠 The Patterns

| Pattern | Paper | When |
|---------|-------|------|
| **Zero-shot CoT** | Kojima 2022 | Add "Let's think step by step." Free, always try first on reasoning tasks |
| **Few-shot CoT** | Wei 2022 | Reasoning examples in prompt; higher ceiling than zero-shot |
| **Self-consistency** | Wang 2022 | Sample N reasoning paths, majority-vote (N=5–40) |
| **ReAct** | Yao 2022 | Thought → Action → Observation loop, tool use |
| **Tree-of-Thought** | Yao 2023 | Search across reasoning branches (puzzles, planning) |
| **Reasoning model** | o1 sys card 2024 | Built-in deliberation, 5–50× more expensive |

---

## 🎯 When CoT Helps (Lift on Wei 2022 / similar)

| Task | Lift |
|------|------|
| Multi-step arithmetic (GSM8K, MultiArith) | +20–70pt |
| Algebra word problems | +20–40pt |
| Multi-hop QA (StrategyQA) | +5–15pt |
| Code debugging | +10–20pt |
| Common sense reasoning | +3–10pt |
| Translation | None / negative |
| Sentiment classification | None / negative |
| Single-fact lookup | None / negative |

---

## 🧮 Reasoning Models (2026)

| Model | Provider | Visibility | Note |
|-------|----------|------------|------|
| o1 / o3 / o4 | OpenAI | Hidden | Most expensive; sets the bar on AIME/Codeforces |
| Claude 4.7 Extended Thinking | Anthropic | Visible (`thinking_blocks`) | `budget_tokens` cap, fine-grained control |
| Gemini 2.5 Pro Deep Think | Google | Visible | Cheapest of the flagships |
| DeepSeek R1 | DeepSeek | Visible, open-weights | Reproducible; January 2025 breakthrough |

🎯 *On reasoning models: DON'T add "Let's think step by step" — it's already doing it.*

---

## 🎲 Self-Consistency Recipe

```python
answers = []
for _ in range(N):
    resp = call_llm(prompt, temperature=0.7)
    answers.append(extract_final_answer(resp))
final = max(set(answers), key=answers.count)  # majority vote
```

| N | Typical lift over CoT | Cost vs CoT |
|---|-----------------------|-------------|
| 3 | Modest | 3× |
| 5 | Often most of N=40's lift | 5× |
| 10 | Robust | 10× |
| 40 | Diminishing returns | 40× |

---

## 🛠️ ReAct Loop Template

```
Thought: <reasoning about next step>
Action: <tool_name>[<args>]
Observation: <tool result>

Thought: <next reasoning step>
Action: ...
Observation: ...

Thought: I have the answer.
Final Answer: <result>
```

🚨 *Always set `max_iterations` to prevent runaway loops.*

---

## 🌳 ToT — When to Use

| Task | CoT | ToT |
|------|-----|-----|
| Game of 24 | 4% | 74% |
| Mini crosswords | 16% | 60% |
| Creative writing consistency | 6.93 | 7.56 |

🎯 *ToT is for search-like problems. Most apps don't need it.*

---

## 🚦 The Router Test

> *"Would a smart human need to deliberate?"*

| Answer | Choice |
|--------|--------|
| No (lookup, classification, simple summary) | Standard model, NO CoT |
| Yes (multi-step math, code, planning) | Standard model + CoT, or reasoning model |
| Yes AND high stakes | Reasoning model + self-consistency |
| Yes AND tool calls needed | ReAct loop with reasoning or strong model |

---

## 💰 Cost Discipline

| Approach | Relative cost |
|----------|---------------|
| Zero-shot, no CoT | 1× |
| Zero-shot CoT (longer output) | 1.5–3× |
| Few-shot CoT | 2–5× |
| Self-consistency N=5 | 7–15× |
| Self-consistency N=40 | 50–100× |
| Reasoning model | 5–50× per call |
| Reasoning model + SC | 50–500× |

---

## 🛡️ Common Failure Defenses

| Failure | Defense |
|---------|---------|
| Confident but wrong | Self-consistency or LLM-as-judge verifier |
| Arithmetic mistake | Use calculator tool (ReAct) |
| Reasoning leak (PII / system prompt) | Strip thinking blocks before log; Extended Thinking private mode |
| Over-thinking | Cap `budget_tokens`; route trivial elsewhere |
| Inconsistent steps | Self-consistency or step-by-step verifier |

---

## 🏆 Exam Power Phrases

✅ Often **right**:

- "CoT helps multi-step reasoning, not trivial tasks"
- "Self-consistency at N=5 often captures most of N=40's lift"
- "Reasoning models bake in CoT — don't add the trigger phrase"
- "ReAct loops need a max_iterations cap"
- "Reasoning tokens are billed and metered"

❌ Often **wrong**:

- "CoT always helps"
- "Self-consistency is free"
- "More steps = better reasoning"
- "CoT traces are causally faithful"
- "Tree-of-Thought is the default for all reasoning"

---

## 🗓️ Key Facts To Memorize Cold

- Wei 2022 GSM8K lift: ~18% → ~57% (+39pt)
- o1 AIME 2024 lift over GPT-4o: ~13% → ~57% (+43pt)
- Zero-shot CoT trigger: "Let's think step by step."
- ReAct: Thought / Action / Observation
- Reasoning domain = **15% of the Final Mock** (largest single module)
- DeepSeek R1 = first open-source reasoning model (Jan 2025)

---

## ✏️ Quick Self-Check

Cover the answers and recite:

1. When does CoT NOT help? ___
2. Self-consistency in 4 lines? ___
3. ReAct's three role tags? ___
4. Two reasoning failure modes + defenses? ___
5. The router test in one sentence? ___

If you can answer all 5 in under 60 seconds, you own this module. ✅

---

## 🛠️ Production CoT Templates

### Zero-shot CoT (cheap & powerful)
```
{user_question}

Let's think step by step.
```

### Few-shot CoT (controllable)
```
Q: {example_1_question}
A: {step-by-step reasoning}. The answer is {example_1_answer}.

Q: {example_2_question}
A: {step-by-step reasoning}. The answer is {example_2_answer}.

Q: {user_question}
A:
```

### CoT + structured output (Module 4 combo)
```json
{
  "reasoning": "<step-by-step before the answer>",
  "answer": "<final answer>"
}
```

### Self-consistency (Wang 2022) pseudocode
```python
from collections import Counter

answers = []
for _ in range(N):
    out = call_llm(cot_prompt, temperature=0.7)
    answers.append(extract_answer(out))
final = Counter(answers).most_common(1)[0][0]
```

### ReAct loop (simplified)
```python
state = {"messages": [system_prompt, user_question]}
for _ in range(MAX_ITERATIONS):
    response = call_llm_with_tools(state["messages"], tools=tools)
    if response.is_final_answer:
        return response.text
    tool_result = execute(response.tool_call)
    state["messages"].append(response)
    state["messages"].append({"role": "tool", "content": tool_result})
raise RuntimeError("Hit max iterations")
```

### Claude Extended Thinking call
```python
client.messages.create(
    model="claude-sonnet-4-7",
    max_tokens=4096,
    thinking={"type": "enabled", "budget_tokens": 8000},
    messages=[{"role": "user", "content": question}]
)
```

---

## 📊 Reasoning Method Comparison (When to Use Each)

| Method | Best for | Cost |
|--------|----------|------|
| **Zero-shot CoT** | Multi-step reasoning, math, logic | 1.5× baseline |
| **Few-shot CoT** | Domain-specific reasoning, exact answer format | 2-5× baseline |
| **Self-consistency** | High-stakes math, calibration matters | N× baseline |
| **ReAct** | Tool-using agents | Per-tool-call overhead |
| **Tree-of-Thought** | Puzzles, planning, search | 5-20× baseline |
| **Reasoning model** | Hard reasoning where deliberation pays | 5-50× baseline |
| **Reasoning model + SC** | Critical decisions (financial, medical, legal) | 50-500× baseline |

🎯 *Pick the cheapest pattern that wins your eval. Don't reach for a sledgehammer when a wrench works.*

---

➡️ [Module 4: Structured Outputs & JSON](../Module-04-Structured-Outputs-JSON/Reading.md)
