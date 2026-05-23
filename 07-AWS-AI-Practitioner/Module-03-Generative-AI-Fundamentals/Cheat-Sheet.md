# 📋 Module 3 Cheat Sheet: Generative AI Fundamentals

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 🧱 The Core Definitions

| Term | One-liner |
|------|-----------|
| **Foundation Model** | Large, pre-trained, general-purpose, adaptable model |
| **LLM** | A foundation model for text |
| **Transformer** | The neural-net architecture behind modern LLMs |
| **Token** | A small chunk of text (~3–4 chars) the model consumes |
| **Embedding** | A vector that represents meaning of text/image/audio |
| **Context window** | Max tokens (prompt + response) per call |
| **Hallucination** | Confidently wrong / invented output |
| **Multimodal** | Handles >1 modality natively (text + image, etc.) |

---

## 🎚️ The 4 Inference Knobs

| Param | Higher | Lower | Sweet spot |
|-------|--------|-------|------------|
| **Temperature** | More creative | More deterministic | 0–0.3 factual, 0.7–1.0 creative |
| **Top-p** | Wider vocab | Narrower | 0.9 default |
| **Top-k** | More choices | Fewer choices | 40–50 default |
| **Max tokens** | Longer answer | Shorter answer | Match your need; longer = more $ |

---

## 👻 Hallucination Mitigations (memorize this list)

1. **RAG** — ground answers in real data (Module 5)
2. **Better prompting** — few-shot, system instructions, "say I don't know"
3. **Fine-tuning** — embed domain knowledge in weights (Module 6)
4. **Guardrails** — filter / block bad outputs (Module 7)
5. **Lower temperature** — less wandering
6. **Human review** — final safety net for high-stakes outputs

---

## 🪟 Context Window Cheat Reference

| Tokens | Approx pages | Common use |
|--------|--------------|------------|
| 4K | ~3 | Short prompts |
| 32K | ~25 | Long reports |
| 128K | ~100 | Small book |
| 200K | ~500 | Big book / many docs (Claude on Bedrock) |
| 1M+ | A whole codebase | Frontier models |

---

## 💰 Cost Rule

**You're billed per 1,000 input + output tokens.** To save money:
- Shorter, tighter prompts
- Summarize / cache repeated context
- Choose a smaller model for simple tasks
- Use RAG instead of stuffing huge context

---

## 🖼️ Generative Modalities

| Direction | Examples on Bedrock |
|-----------|---------------------|
| Text → Text | Claude, Llama, Mistral, Titan Text, Nova text |
| Text → Image | Stable Diffusion, Titan Image Generator, Nova Canvas |
| Image → Text | Claude vision, Nova multimodal |
| Text → Video | Amazon Nova Reel |
| Text → Embedding | Titan Text Embeddings, Cohere Embed |
| Speech → Text | Amazon Transcribe (outside Bedrock) |
| Text → Speech | Amazon Polly (outside Bedrock) |

---

## 🏆 Exam Power Phrases

Usually right:
- ✅ "Hallucination → use **RAG**"
- ✅ "Same answer every time → lower **temperature**"
- ✅ "Reduce cost → fewer **tokens**"
- ✅ "Foundation model = pre-trained, general, adaptable"
- ✅ "Embedding = semantic vector"
- ✅ "Multimodal = text + image + ..."

Usually wrong:
- ❌ "GenAI for exact financial math"
- ❌ "Bigger context window completely replaces RAG"
- ❌ "Temperature 0 eliminates hallucinations"
- ❌ "Tokens and embeddings are the same"
- ❌ "Customers pre-train foundation models from scratch"

---

## ⚠️ Anti-Patterns

- ❌ Crank temperature high and complain about inconsistency
- ❌ Stuff 500 pages into context every call (cost explodes)
- ❌ Trust LLM citations without verification
- ❌ Use a frontier LLM for a task XGBoost would solve
- ❌ Ignore tokens when budgeting Bedrock spend

---

## 📚 Reference cases (high-signal recall)

| Case | What it proves |
|------|----------------|
| **ChatGPT launch (Nov 2022)** | Productized conversational UI + RLHF alignment created the GenAI moment; 100M users in 2 months |
| **Anthropic Claude 3 on Bedrock (Mar 2024)** | Enterprise frontier model with AWS-native IAM/VPC/Guardrails wrapping |
| **Italian DPA temporary GDPR ban on ChatGPT (Mar 2023)** | Regulatory exposure for public LLMs without data-subject rights |

---

## ✏️ Quick Self-Check

1. Define foundation model in one sentence. ___
2. Difference between token and embedding? ___
3. Which knob makes outputs deterministic? ___
4. Three ways to reduce hallucinations? ___
5. Cost is mostly driven by? ___

---

➡️ [Module 4: AWS GenAI Stack](../Module-04-AWS-GenAI-Stack/Reading.md)
