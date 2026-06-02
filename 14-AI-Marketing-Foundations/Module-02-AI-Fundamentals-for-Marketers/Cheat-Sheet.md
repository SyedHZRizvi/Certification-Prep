# 📋 Module 2 Cheat Sheet: AI Fundamentals for Marketers

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 🧠 The Taxonomy (umbrella to specific)

```
   AI  (umbrella)
    └── ML  (learn from data)
        └── Deep Learning  (multi-layer neural nets)
            └── Generative AI  (creates new content)
                └── LLM  (text-based GenAI)
                    └── Foundation Model  (a pretrained, adaptable LLM)
```

---

## 🔬 The Five LLM Mechanics

| Term | Plain English |
|---|---|
| **Token** | A small text fragment (~¾ word). Costs are per token. |
| **Context window** | How much text the model can see at once (128K–1M+ tokens) |
| **Embedding** | A numerical vector representing meaning |
| **Inference** | Running the model on a prompt (cheap) |
| **Training / Pretraining** | Building the model from scratch (very expensive — labs do it, not you) |

---

## 🎯 The Five Foundation-Model Families

| Family | Maker | Best For |
|---|---|---|
| **GPT** | OpenAI | General use; reasoning; ecosystem |
| **Claude** | Anthropic | Long-form writing; large context; safety |
| **Gemini** | Google | Multimodal; Google Workspace integration |
| **Llama** | Meta | Open-source; self-hosting |
| **Mistral** | Mistral AI | Open-source; EU-friendly |

---

## 🍰 Prompting vs RAG vs Fine-Tuning

| Approach | When to use |
|---|---|
| **Prompting** | One-off drafts, brainstorms, summaries (90% of use cases) |
| **RAG** | "Use my docs" — knowledge-base chat, customer-support AI |
| **Fine-Tuning** | Permanent voice/style shift; specialized domain language |

🚨 80% of "we want AI on our data" problems are solved by RAG, not fine-tuning.

---

## 🛠️ The ROLE / CONTEXT / TASK Prompt Template

```
ROLE:         [Specific role + experience]
CONTEXT:      [Brand, audience, voice]
TASK:         [Exactly what to produce]
CONSTRAINTS:  [Word count, format, must-avoid]
EXAMPLES:     [1–3 sample outputs]
OUTPUT:       [Format — markdown, table, etc.]
```

---

## 👻 Hallucination Mitigation

1. **Verify** every fact, stat, and citation
2. **Lower temperature** for factual tasks
3. **Use RAG** to ground in your real docs
4. **Human review** before publishing anything

---

## 📜 Key Historical Dates

| Year | Event |
|---|---|
| 2012 | AlexNet — deep-learning era begins |
| 2017 | "Attention Is All You Need" — Transformer paper |
| 2018 | Google BERT |
| 2020 | GPT-3 |
| Nov 30, 2022 | ChatGPT public launch |
| 2023 | GPT-4, Claude, Bard / Gemini, Midjourney v5 |
| 2024 | Google AI Overviews broad rollout |
| 2025–2026 | Agentic AI, 1M+ token context |

---

## 🚨 Common Traps

- ❌ Calling all AI "GenAI"
- ❌ Treating 1 token = 1 word
- ❌ Confusing context window with training data
- ❌ Choosing fine-tuning when RAG would do
- ❌ Trusting first model output without verification
- ❌ Sending customer PII to a public LLM tier

---

## 🏆 Exam Power Phrases

When you see these, often correct:

- ✅ "Use RAG to ground..."
- ✅ "Lower temperature for factual..."
- ✅ "Human-in-the-loop review..."
- ✅ "First-party data input only..."

When you see these, often wrong:

- ❌ "Fine-tune for every use case..."
- ❌ "Trust the first model output..."
- ❌ "Increase temperature for accuracy..."
- ❌ "Send raw customer PII to a public model..."

---

## ✏️ Quick Self-Check

Cover answers, recite:

1. AI > ML > Deep Learning > GenAI > LLM in order? ___
2. Define token, context window, embedding ___
3. RAG vs fine-tuning use cases? ___
4. Define hallucination + 4 mitigations ___
5. ROLE/CONTEXT/TASK/CONSTRAINTS/EXAMPLES/OUTPUT? ___

If you can do all 5 in under 90 seconds, you own this module. ✅

---

➡️ [Module 3: SEO in the AI Era](../Module-03-SEO-in-the-AI-Era/Reading.md)
