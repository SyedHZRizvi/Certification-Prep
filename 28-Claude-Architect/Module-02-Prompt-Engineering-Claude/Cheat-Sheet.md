# 📋 Module 2 Cheat Sheet: Prompt Engineering with Claude

> One page. Print it. Tape it next to your laptop. Refer before every prompt rewrite.

---

## 🧱 The Four Prompt Parts

| Part | Where in API (Application Programming Interface) | Purpose |
|------|--------------|---------|
| **System** | `system="..."` | Role + format + constraints; stable; cacheable |
| **User message(s)** | `messages: [{role:"user", content:"..."}]` | Per-turn variable input/payload |
| **Assistant prefill** | Last item in messages: `{role:"assistant", content:"{"}` | First chars of response; forces structure |
| **Stop sequences** | `stop_sequences=["```"]` | Strings that terminate generation; NOT in output |

---

## 🏷️ XML Tag Cheat (Community-Converged)

| Tag | Use |
|-----|-----|
| `<instructions>` | Task directive |
| `<context>` | Background |
| `<document>` `<document_content>` | A document to read |
| `<examples>` `<example>` | In-context examples |
| `<input>` `<output>` | I/O pairs in examples |
| `<thinking>` | Scratchpad reasoning |
| `<answer>` | Final answer block |
| `<schema>` | JSON / output spec |

Style: **lower_snake_case** is what the training data overwhelmingly uses.

---

## ⏪ Prefill Patterns (Memorize)

| Goal | Prefill |
|------|---------|
| JSON output | `{` |
| XML output | `<analysis>` |
| Code only | ` ```python\n` |
| One-line answer | `Answer: ` |
| Yes/No | `Answer: ` |
| Skip preamble | `Summary: ` |
| Force thinking-first | `<thinking>\n` |

🚨 Prefill counts as **output tokens** (billed).

---

## 🛑 Stop Sequence Gotchas

- Up to ~4 strings per call
- Case-sensitive
- Stop string is **NOT** in the output
- Triggers `stop_reason = "stop_sequence"`

---

## 📚 Few-Shot Rules

1. **3–5 examples** is the sweet spot (diminishing returns past 5)
2. Cover **edge cases**, not just the happy path
3. Match input format **exactly** (messy in / messy in)
4. Match desired output format **exactly**
5. For classification with abstention, include an **"unknown" example**
6. Order matters, most canonical first

---

## 🆚 Claude vs OpenAI Quick Diff

| Need | OpenAI | Claude |
|------|--------|--------|
| Structured output | `response_format` flag | XML schema + prefill |
| Examples | Inline | `<examples>` tags |
| System auth | Strong | Stronger (trained to outrank user) |
| Stop param | `stop` | `stop_sequences` (plural) |
| "Reason out loud" | "Let's think step by step" | `<thinking>` + prefill |
| "Human:/Assistant:" markers | N/A | **Retired with Completions API, do not use** |

---

## 🧪 Anthropic's 10 Official Tips

1. Be clear, direct, detailed
2. Use XML tags
3. Give Claude a role (in system)
4. Use examples (few-shot)
5. Let Claude think (chain of thought)
6. **Prefill** the response
7. Chain prompts for complex flows
8. Long-context: question AT THE END
9. Avoid hallucination, "if unknown, say so"
10. Iterate with Workbench prompt generator

---

## 🧬 Long-Context Rules of Thumb

- Question **AFTER** the documents (recency bias)
- Each document in its own `<document>` tag with `id` attribute
- Explicit citation format: `[doc:N, line:M]` or similar
- Tell Claude "only use information in `<document>` tags"
- 200K is *working memory*, not *corporate memory*, still use RAG for big corpora

---

## 💰 Caching Mental Math

| Prompt size | No cache (Sonnet) | Cached (~90% off) |
|-------------|-------------------|-------------------|
| 1K stable | $0.003/call | $0.0003/call |
| 5K stable | $0.015/call | $0.0015/call |
| 50K stable | $0.150/call | $0.015/call |

Cache TTL: **~5 minutes** (Anthropic-managed; renews on hit). For low-traffic prompts, you may rarely hit cache, design accordingly.

---

## 🏆 Exam Power Phrases

✅ Often **right**:

- "Wrap inputs in XML tags"
- "Prefill the assistant role to force structure"
- "Put role + format + constraints in the system prompt"
- "Use `<thinking>` scratchpad for multi-step reasoning"
- "Put the question AFTER documents in long context"
- "Cache attaches to the prompt prefix; stable content first"

❌ Often **wrong**:

- "Use 'Human:/Assistant:' markers" (retired)
- "Set `response_format={'type':'json_object'}`" (OpenAI parameter, not Claude)
- "Markdown delimiters are as good as XML for Claude"
- "Few-shot examples don't help frontier models"
- "Stop sequences appear in the output"
- "Prefill is a hack"

---

## 🗓️ Key Facts To Memorize Cold

- Messages API has **3 roles**: system, user, assistant (prefill via the assistant role as the last message)
- Stop sequences: **NOT** in output; case-sensitive; ~4 per call
- XML tags: snake_case; place inputs in `<document>` / `<context>` / `<examples>`
- Long context: question goes **at the end**
- Prompt caching: ~**90%** off cached input; cache attaches to **prefix**
- Prefill is **counted as output tokens** (billed)
- Module 2 domain: **15% of the assessment**

---

## ✏️ Quick Self-Check

Cover the answers and recite:

1. Three prompt parts and what each holds? ___
2. Single most reliable technique for JSON-only output? ___
3. Where does the question go in a long-context prompt? ___
4. How do you wrap a few-shot example? ___
5. What is the cache prefix rule? ___

If you can answer all 5 in under 60 seconds, you own this module. ✅

---

➡️ [Module 3: Claude API & SDK (Software Development Kit) Deep Dive](../Module-03-Claude-API-SDK-Deep-Dive/Reading.md)
