# 📋 Module 1 Cheat Sheet: Foundations of Prompt Engineering

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 🤖 Model Families At A Glance

| Family | Top tier (2026) | Cheap tier | Killer feature |
|--------|-----------------|------------|----------------|
| **Claude** | Claude 4.7 Opus / Sonnet | Haiku 4.5 | Long context (1M Sonnet), Extended Thinking, instruction discipline |
| **GPT (OpenAI)** | GPT-5, o3 | GPT-5 mini, o4-mini | Function calling, structured outputs, voice |
| **Gemini (Google)** | Gemini 2.5 Pro | Gemini 2.5 Flash | 2M context, native multi-modal incl. video, cheapest mid-tier |
| **Llama (Meta)** | Llama 3.3 70B, Llama 3.2 90B Vision | Hosted Groq/Together | Open weights, on-prem, fine-tune base |
| **Other open** | DeepSeek V3/R1, Mistral Large 2, Qwen 2.5 |, | Cheap, frontier-competitive open |

🚨 *Output tokens cost 3–5× input tokens. Always do BOTH sides of the math.*

---

## 💰 Pricing Snapshot ($/MTok, Jan 2026)

| Model | Input | Output |
|-------|-------|--------|
| Claude 4.7 Opus | $15 | $75 |
| Claude 4.7 Sonnet | $3 | $15 |
| Claude Haiku 4.5 | $0.80 | $4 |
| GPT-5 | $10 | $30 |
| GPT-5 mini | $0.50 | $1.50 |
| o3 | $60 | $240 |
| Gemini 2.5 Pro | $1.25 | $5 |
| Gemini 2.5 Flash | $0.15 | $0.60 |
| Llama 3.3 70B (Groq) | $0.59 | $0.79 |
| DeepSeek V3 | $0.27 | $1.10 |

---

## 🔤 Token Rules of Thumb (English)

| Text | Tokens |
|------|--------|
| 1 token | ~4 chars / ~0.75 words |
| 100 tokens | ~75 words / 3 sentences |
| 1,000 tokens | ~750 words / 1.5 pages |
| 8,000 tokens | ~12 pages |
| 128,000 tokens | ~300-page novel |
| 1,000,000 tokens | ~2,000 pages |

🚨 *Non-English (CJK, Hindi, Arabic) = 2–3× more tokens.*

---

## 🎭 Role Architecture

| Role | Authority | Purpose |
|------|-----------|---------|
| **system** | Highest | Persona, persistent rules, tools, output format |
| **user** | Middle | What the human asked |
| **assistant** | History | What the model previously said |
| **tool** | Lowest | Tool/function call results |

**Instruction hierarchy:** system > user > assistant > tool

---

## 🎛️ Sampling Parameters, Decision Table

| Use case | T | top_p | max_tokens |
|----------|---|-------|------------|
| Classification | 0 | 1 | 10 |
| JSON extraction | 0 | 1 | 500 |
| Code completion | 0–0.2 | 0.95 | 1000 |
| Chat assistant | 0.3 | 0.95 | 1500 |
| Creative writing | 0.8 | 0.9 | 2000 |
| Brainstorm | 0.9 | 0.95 | 2000 |
| Translation | 0–0.2 | 1 | 2× source |
| Summarization | 0.2 | 0.95 | desired |

🎯 *T=0 → deterministic-ish. T=0.7 → balanced. T>1 → high risk of incoherence.*

---

## 🔌 Minimum Viable API Calls

```python
# Anthropic
client.messages.create(model="claude-sonnet-4-6", max_tokens=1024,
    system="...", messages=[{"role":"user","content":"..."}], temperature=0.2)

# OpenAI
client.chat.completions.create(model="gpt-5",
    messages=[{"role":"system","content":"..."},{"role":"user","content":"..."}],
    temperature=0.2)

# Gemini
client.models.generate_content(model="gemini-2.5-pro", contents="...",
    config={"temperature":0.2, "system_instruction":"..."})

# Llama via Groq
client.chat.completions.create(model="llama-3.3-70b-versatile",
    messages=[{"role":"user","content":"..."}], temperature=0.2)
```

🎯 *Anthropic = `system` is top-level. OpenAI/Llama = first message. Gemini = `config.system_instruction`.*

---

## 📐 Context Window Tips

- **Lost in the middle** (Liu et al. 2023), middle of long context is recalled worst
- Place critical instructions at **start of system** OR **end of user message**
- 1M context ≠ 1M perfect recall, always test
- Reasoning models burn 1K–25K thinking tokens before visible answer

---

## 🛠️ Common Quick Fixes

| Symptom | First check |
|---------|-------------|
| Output truncated mid-sentence | `stop_reason: "length"` → raise max_tokens |
| Same input gives wildly different answers | Lower temperature, set seed if supported |
| Model leaks system prompt | Strengthen system prompt; consider OpenAI/Anthropic flagship |
| Hallucinated JSON keys | Use structured-output mode (Module 4) |
| Costs are ballooning | Audit output tokens; consider cheaper tier |
| Latency P95 > target | Switch to Flash/Haiku/Groq tier |
| Model writes the user's next turn | Add `stop_sequences=["\nUser:"]` |

---

## 🏆 Exam Power Phrases

✅ Often **right**:

- "Place critical instructions at the start of the system prompt or end of the user message"
- "Use temperature=0 for extractive/transactional tasks"
- "System role > user role > assistant > tool"
- "Count tokens with the actual target model's tokenizer"
- "Output tokens cost 3–5× input tokens"

❌ Often **wrong**:

- "Temperature 0 guarantees identical output"
- "All models use the same tokenizer"
- "1M context = 1M perfect recall"
- "Higher temperature makes the model smarter"
- "JSON in the prompt produces JSON output" (no, JSON mode does)

---

## 🗓️ Key Facts To Memorize Cold

- Token: ~4 chars / 0.75 words (English)
- Role hierarchy: system > user > assistant > tool
- Temperature: 0 = extractive, 0.3 = default, 0.7–0.9 = creative
- Output tokens cost 3–5× input
- "Lost in the middle" = put critical info at edges
- Reasoning tokens are billed and metered
- BAA for HIPAA = Claude Enterprise, Azure OpenAI, Vertex Gemini (NOT public Groq)
- Foundations domain = **12% of the Final Mock**

---

## ✏️ Quick Self-Check

Cover the answers and recite:

1. What does each role do (system, user, assistant)? ___
2. Temperature 0 vs 0.7, when each? ___
3. Why is `"antidisestablishmentarianism"` not 1 token? ___
4. Three things you need for true reproducibility? ___
5. Why does "Lost in the middle" exist? ___

If you can answer all 5 in under 60 seconds, you own this module. ✅

---

## 🧮 Cost-Math Worksheet (Use For Every New Feature)

Fill in BEFORE writing the first prompt:

```
Feature name:          _______________________
Expected calls/month:  _______________________
Tokens per call:
  - System prompt:         ___
  - Examples (if few-shot): ___
  - Tool descriptions:     ___
  - User input (avg):      ___
  - Output (avg):          ___
  - Reasoning (if model):  ___

Provider + Model:      _______________________
Input price ($/MTok):  _______________________
Output price ($/MTok): _______________________

Monthly cost projection:
  Input: (calls/month) × (input tokens) ÷ 1M × $ ___
  Output: (calls/month) × (output tokens) ÷ 1M × $ ___
  Reasoning: (calls/month) × (reasoning tokens) ÷ 1M × $ ___
  Total: $ ___

With prompt caching (Module 8):
  Cached portion saves ~50-90%, see Module 8

With tier routing:
  Easy traffic (% ___) on Haiku/Flash/mini at $___
  Hard traffic (% ___) on flagship at $___
  Reasoning traffic (% ___) on o3/Extended Thinking at $___
```

🎯 *Do the math BEFORE you ship. Doing it after = pager.*

---

## 🚦 The "Pick a Model" Decision Tree

```
Is the task safety-critical (medical, legal, financial)?
├─ Yes → Flagship (Claude 4.7 Opus/Sonnet, GPT-5)
│         + Cross-family LLM-judge
│         + Mandatory human review
└─ No
   │
   Is the task hard reasoning (multi-step math, planning, code refactor)?
   ├─ Yes → Reasoning model (o3, Claude Extended Thinking, Gemini Deep Think)
   │         + Tight `budget_tokens` cap
   └─ No
      │
      Is latency critical (TTFT < 500ms required)?
      ├─ Yes → Groq Llama / Gemini Flash / Haiku 4.5 / GPT-5 mini
      └─ No
         │
         Is per-call cost critical (>100K calls/month)?
         ├─ Yes → Cheapest tier (Gemini Flash, GPT-5 mini, Haiku 4.5, DeepSeek V3)
         │         + Aggressive caching
         └─ No → Default to Claude Sonnet or GPT-5
```

---

➡️ [Module 2: Few-Shot & In-Context Learning](../Module-02-Few-Shot-In-Context/Reading.md)
