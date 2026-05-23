# Module 3: Generative AI Fundamentals 🪄

> **Why this module matters:** Domains 2 & 3 of the AIF-C01 — together **52%** of the exam — assume you can fluently use the words *foundation model*, *token*, *embedding*, *context window*, *temperature*, and *hallucination*. This module gives you those words and the mental models behind them, without dragging you into the math.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - [Module 1: AI/ML Fundamentals](../Module-01-AI-ML-Fundamentals/Reading.md) — supervised learning, deep learning, neural networks at a vocabulary level
> - [Module 2: ML Workflow on SageMaker](../Module-02-ML-Workflow-SageMaker/Reading.md) — training vs inference distinction
> - Familiarity with the idea that a "model" can be served behind an API
>
> If you've used ChatGPT, Claude, or any LLM chat product even once, that's enough hands-on intuition. If you've not yet read the seminal "Attention Is All You Need" paper (Vaswani et al., NeurIPS 2017) at *any* level, the first 3 pages are highly worth skimming — but the exam never tests its math.

---

## 🍕 A Story: The Apprentice Who Read the Entire Library

Picture a young apprentice locked in the world's largest library for ten years. She's allowed to read *every book*, including duplicates, drafts, internet forums, code repositories, screenplays — everything. She isn't taught grammar rules. She just *reads, predicts the next word, checks if she was right, and adjusts.* Trillions of times.

After ten years she walks out. You ask her: *"Write a haiku about a thunderstorm."* She does. *"Explain quantum tunneling to a 12-year-old."* She does. *"Translate this to Japanese."* She does.

She didn't memorize specific facts about *your* company. She didn't learn how to look anything up live. But she internalized something powerful: **the statistical patterns of language and the structure of human knowledge**.

That apprentice is a **Large Language Model (LLM)**. The "ten years of reading" is **pre-training**. The trillions of "predict the next word, check, adjust" loops are **self-supervised learning**. The library is the **training corpus**. And the giant brain she walked out with is a **foundation model**.

Hold this story. We'll add organs to it for the rest of the module.

---

## 🧱 Foundation Models — The Big Idea

A **Foundation Model (FM)** is a very large model, pre-trained on broad data, that can be adapted (via prompting, fine-tuning, RAG, etc.) to many downstream tasks.

Key properties:

| Property | What it means |
|----------|---------------|
| **Pre-trained on broad data** | Internet-scale text, code, images — often trillions of tokens |
| **General-purpose** | One model handles summarization, translation, Q&A, code, etc. |
| **Adaptable** | You "post-train" it for your domain (prompt → RAG → fine-tune → continued pre-training) |
| **Very large** | Billions to trillions of parameters; expensive to train, cheap-ish to run |
| **Often multimodal** | Increasingly handles text + image + audio + video together |

Examples: **Anthropic Claude**, **Amazon Nova**, **Amazon Titan**, **Meta Llama**, **Mistral**, **Cohere Command**, **Stability AI Stable Diffusion**. (We'll learn which of these live on Amazon Bedrock in Module 4.)

🔥 **MEMORIZE:** A foundation model is *pre-trained on broad data, general-purpose, adaptable, and large*. The exam will paraphrase this definition.

---

## 🗣️ LLM = Foundation Model that does Language

A **Large Language Model (LLM)** is a foundation model specialized in **text**. Same underlying technology, focused application.

Most modern LLMs are **decoder-only Transformers**. You don't need to remember the math — but you should know:

- **Transformer** is the neural network architecture published by Google in 2017 (Vaswani et al., "Attention Is All You Need," *Advances in Neural Information Processing Systems* / NeurIPS 2017)
- Its key trick is **self-attention** — every token looks at every other token to figure out which ones matter
- It is the architectural backbone of essentially every modern LLM (GPT, Claude, Llama, Nova, Titan, Mistral, Gemini). The path from Transformer → GPT-3 (Brown et al., "Language Models are Few-Shot Learners," NeurIPS 2020) → ChatGPT (OpenAI, Nov 2022) → instruction-tuned and RLHF-aligned chat models (Ouyang et al., NeurIPS 2022) is the lineage worth recognizing.

That's the depth the AIF-C01 expects. You don't need to know the difference between an encoder and a decoder block.

---

## 🧩 Tokens — The Atoms of Text

LLMs don't see characters or words. They see **tokens** — chunks of text usually 3–4 characters long.

```
"Generative AI is amazing." → ["Gener", "ative", " AI", " is", " amazing", "."]
```

- For English text, **1 token ≈ 0.75 words**, or 1,000 tokens ≈ ~750 words ≈ ~4 paragraphs.
- The same model will tokenize "color" and "colour" differently, and tokenize code differently from prose.
- **Pricing for LLM APIs (including Amazon Bedrock) is per 1,000 input + output tokens.** This is the #1 cost driver.

🎯 **Trap on the exam:** A question will mention "the team wants to lower their Bedrock bill." The right move is often *shorter prompts*, *summarized context*, or *caching* — all of which reduce **tokens**.

---

## 🪟 Context Window — How Much It Can See At Once

The **context window** is the maximum number of tokens the model can process in one call — counting **both** the prompt **and** the response.

| Approx. context | What fits |
|-----------------|-----------|
| 4K tokens | ~3 pages |
| 32K tokens | ~25 pages (a long report) |
| 128K tokens | ~100 pages (a small book) |
| 200K tokens (Claude default on Bedrock) | ~500 pages |
| 1M+ tokens (newest models) | An entire codebase or several books |

Larger context windows are wonderful but **cost more, are slower, and don't perfectly replace good information retrieval (RAG)**. We'll see this trade-off in Module 5.

---

## 📐 Embeddings — Text Turned Into Geometry

An **embedding** is a high-dimensional vector (e.g. 768 or 1,536 numbers) that represents the *meaning* of a chunk of text. Embeddings are the bridge between language and search.

```
"The cat sat on the mat."     → [0.12, -0.04, 0.83, ..., 0.07]  (1,536 numbers)
"A feline rested on the rug." → [0.10, -0.05, 0.81, ..., 0.06]  (very close vector)
"How do I file my taxes?"     → [0.91,  0.43, -0.22, ..., 0.39] (very different vector)
```

If two pieces of text are about the *same thing*, their embedding vectors are **close** in vector space (small cosine distance). That's the core mechanism behind:

- **Semantic search** — find documents by meaning, not just keyword match
- **Recommendations** — similar embeddings → similar items
- **Clustering** — group documents in embedding space
- **RAG** — find the most relevant chunk to feed to an LLM (Module 5)

🎯 **Exam-grade definition:** An embedding is a numerical vector representation of text (or image / audio) that places semantically similar content close together in vector space.

**On AWS:** Amazon Titan Text Embeddings, Cohere Embed (both available on Bedrock).

---

## 🎚️ The 4 Knobs You Get To Tune at Inference Time

When you call an LLM, you usually set a few **inference parameters**. The AIF-C01 wants you to know what each one does.

| Parameter | What it controls | Higher = | Lower = |
|-----------|------------------|----------|---------|
| **Temperature** | Randomness / creativity | More creative & varied (riskier) | More deterministic & focused |
| **Top-p (nucleus sampling)** | Pool of candidate tokens by cumulative probability (e.g. 0.9 = top 90%) | Wider vocabulary | Narrower, safer vocabulary |
| **Top-k** | Pool of the *k* most likely next tokens | More variety | Fewer choices, more predictable |
| **Max tokens** | Maximum length of the response | Longer answer (more $) | Shorter answer |

Rules of thumb:
- **Factual / extraction / code** → low temperature (0.0–0.3)
- **Brainstorming / marketing copy / creative** → higher temperature (0.7–1.0)
- Usually tune **either** temperature **or** top-p, not both aggressively

🎯 **Trap on the exam:** "The model is producing slightly different answers every time for a customer ID lookup. How do you fix it?" → **Lower the temperature.**

---

## 👻 Hallucinations — The #1 Risk of LLMs

A **hallucination** is when the model generates text that *sounds* right but is factually wrong — invented citations, fake APIs, wrong numbers.

Why it happens: an LLM is a **pattern-completion** machine. If your prompt looks like a legal brief, it'll produce something that looks like a legal brief, including made-up case names that fit the pattern. It doesn't *know* what's true — it knows what's *probable*.

How to reduce hallucinations:

| Technique | How it helps | Where covered |
|-----------|--------------|---------------|
| **Better prompting** | Be specific, give examples (few-shot), instruct "say 'I don't know' if unsure" | Module 5 |
| **RAG (Retrieval-Augmented Generation)** | Inject *real* facts from your data so the model paraphrases them instead of inventing | Module 5 |
| **Fine-tuning** | Teach the model your domain so its base distribution is closer to your truth | Module 6 |
| **Guardrails** | Filter or block outputs that violate policy | Module 7 |
| **Lower temperature** | Less creative → less likely to invent | This module |
| **Human review** | The final safety net for high-stakes outputs | Module 7 |

🚨 **Exam pattern:** When a question describes an LLM making up facts or citing nonexistent sources, the keyword **hallucination** is the diagnosis, and **RAG** is the most common correct remedy.

---

## 🖼️ Multimodal & Other Generative Modalities

Generative AI isn't just text. The AIF-C01 expects you to recognize:

| Modality | What it does | AWS / Bedrock example |
|----------|--------------|-----------------------|
| **Text → Text** | Chat, summarize, classify, translate, code | Claude, Llama, Mistral, Titan Text, Amazon Nova (text) |
| **Text → Image** | Generate images from prompts | Stable Diffusion (Stability AI), Amazon Titan Image Generator, Amazon Nova Canvas |
| **Image → Text** | Describe / analyze an image | Claude vision, Amazon Nova multimodal |
| **Text → Embedding** | Encode meaning as a vector | Titan Text Embeddings, Cohere Embed |
| **Text → Speech** | Generate audio (TTS) | (Out of Bedrock — use Amazon Polly) |
| **Speech → Text** | Transcribe audio | Amazon Transcribe |
| **Text → Video** | Generate short video clips | Amazon Nova Reel |
| **Text → Code** | Generate / explain code | Amazon Q Developer; Claude in Bedrock |

A **multimodal model** is one that natively accepts and/or produces more than one modality (e.g. text + image). Amazon **Nova** and Anthropic **Claude** are multimodal.

---

## 💡 Where Generative AI Actually Helps (and Where It Hurts)

| Great fit | Poor fit |
|-----------|----------|
| Content drafting (marketing, code skeletons, emails) | Anything requiring guaranteed numeric accuracy |
| Summarizing long documents | Real-time low-latency lookups (use a database) |
| Conversational interfaces (chatbots, copilots) | Tasks needing fresh / proprietary facts without RAG |
| Translation, paraphrasing, tone adjustment | High-stakes decisions without human review |
| Code generation and explanation | Things with strict deterministic rules (tax math, accounting) |
| Image / video generation for assets | Anything regulated, where provenance matters |

🎯 **Trap on the exam:** "A team wants a foundation model to compute payroll." That's a non-starter. *Use traditional code.* The exam loves to test "Generative AI is the wrong tool when…"

---

## 🛡️ Pre-training, Fine-tuning, In-context Learning — A Preview

Let's lock the vocabulary now. You'll see it again in Modules 5 and 6.

| Term | What it is | Cost | When |
|------|------------|------|------|
| **Pre-training** | Building the foundation model from scratch on huge data | Millions of $$$ | Almost never — providers do this for you |
| **Continued pre-training** | Extending pre-training with your own *unlabeled* domain data | $$$ | Only for very large, very domain-specific corpora |
| **Fine-tuning** | Updating model weights with your *labeled* examples | $$ | Specific task / format / tone needs |
| **RAG** | Looking up relevant info and feeding it into the prompt at runtime — *no weight changes* | $ | Most enterprise "use my data" cases |
| **In-context learning (prompting)** | Just write a better prompt with examples in it | ¢ | First thing to try, every time |

We unpack this matrix carefully in Module 6. For now: **prompting < RAG < fine-tuning < continued pre-training** on both **cost** and **invasiveness**.

---

## 🧠 Why Generative AI Exploded in 2022–2024

A short timeline for context (not heavily tested but useful color):

| Year | What changed |
|------|--------------|
| 2017 | Transformer architecture published (Vaswani et al., NeurIPS) |
| 2018 | BERT (Devlin et al., 2018) — bidirectional pre-training; encoder-only |
| 2018–2020 | GPT-1 / GPT-2 / GPT-3 (Brown et al., NeurIPS 2020) — scaling laws, emergent abilities |
| 2022 | ChatGPT (OpenAI, Nov 2022). Stable Diffusion 1.4 (Stability AI, Aug 2022). "Generative AI" enters the boardroom. |
| 2023 | Amazon Bedrock GA (April → Sept). Anthropic Claude 1/2 on Bedrock. Italian DPA temporarily bans ChatGPT for GDPR (Mar 2023). Samsung bans internal ChatGPT use after a code-leak incident (Apr 2023). |
| 2024 | Anthropic Claude 3 family lands on Bedrock (Mar). Amazon Nova family launches at re:Invent (Dec). Multimodal becomes the norm. AIF-C01 exam released (Aug). EU AI Act enters into force (Aug). |
| 2025–2026 | Agentic systems with multi-step tool use go mainstream. Context windows reach 1M+ tokens at frontier. Claude 4 family becomes the Bedrock default (replacing the retired claude-3-7 / claude-3-5 / gpt-4-turbo era). On-device small models grow real. AI governance shifts from voluntary (NIST AI RMF, 2023) to mandatory (EU AI Act high-risk obligations, phased through 2026). |

---

## 🚨 Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "LLMs *know* facts" | They predict next tokens. They're *often* correct but not because they "know." |
| "Bigger context window means I don't need RAG" | Bigger windows help, but RAG is still cheaper, fresher, and more auditable. |
| "Temperature 0 = no hallucinations" | Lower temperature reduces creativity, but hallucinations can still occur — RAG and grounding matter more. |
| "Generative AI replaces all classical ML" | Tabular fraud / forecasting / recommendation is still better-served by XGBoost / Personalize / Forecast. |
| "All foundation models are LLMs" | LLMs are *text-only* FMs. FMs also include image (Stable Diffusion, Titan Image), audio, and multimodal. |
| "Embeddings and tokens are the same" | Tokens are pieces of text. Embeddings are vectors that *represent* meaning. |

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **Foundation Model** | Large pre-trained model adaptable to many tasks |
| **LLM** | A foundation model specialized for text |
| **Transformer** | The neural net architecture behind modern LLMs |
| **Token** | A small chunk of text (~3–4 chars) the model consumes |
| **Tokenization** | Splitting text into tokens |
| **Context window** | Max tokens (prompt + response) the model can handle per call |
| **Embedding** | Numerical vector representing meaning of text/image/audio |
| **Vector** / **vector store** | High-dimensional array / a DB that indexes embeddings for similarity search |
| **Temperature** | Randomness knob (0 = deterministic, 1+ = creative) |
| **Top-p / Top-k** | Limit which tokens the model can sample from |
| **Max tokens** | Cap on response length |
| **Hallucination** | Confidently wrong output |
| **Multimodal model** | Handles more than one input/output modality |
| **Pre-training** | Initial training on huge data |
| **Fine-tuning** | Updating model weights with task-specific labeled data |
| **RAG** | Retrieval-Augmented Generation — fetch relevant info, feed to LLM at runtime |
| **Inference parameters** | Settings that control generation (temperature, top-p, max tokens, etc.) |

---

## 📊 Case Study — The ChatGPT Moment + Claude 3 on Bedrock (Nov 2022 – Mar 2024)

**Situation.** Through 2022, foundation models were essentially a research curiosity. OpenAI's GPT-3 had been quietly available via API since 2020, but the API was technical, the outputs were rough, and most enterprises had no idea what to do with it. Anthropic, founded in 2021 by former OpenAI staff (Dario and Daniela Amodei and colleagues), had Claude in private beta. Then on **30 November 2022**, OpenAI shipped a chat wrapper around GPT-3.5 called **ChatGPT**, free, no signup gate beyond email.

**Decision.** OpenAI made three product calls that changed the industry:
1. **Conversational interface over raw API.** The same model power had been available for two years; the chat UI made it usable. Within five days, ChatGPT had **1 million users**. Within two months, **100 million** — fastest consumer app to that mark, ever (Reuters, Feb 2023; UBS analysis).
2. **Free tier with rate limits.** Free distribution at the speed of curiosity beat the per-token API economics of every competitor for adoption velocity.
3. **RLHF alignment on instructions, not just completions.** Building on the InstructGPT work (Ouyang et al., NeurIPS 2022), they shipped a model that *followed instructions* rather than autocompleting text — a UX leap that made the demo "work" for non-technical users.

In parallel, **Anthropic took a different bet**: smaller initial reach, deeper enterprise + safety positioning, alignment research via Constitutional AI (Bai et al., 2022) and later Responsible Scaling Policies (Anthropic, Sept 2023). Anthropic announced a partnership with AWS in Sept 2023 ($4B investment, expanded to $8B in 2024), making **Claude the flagship third-party model on Amazon Bedrock**. On **4 March 2024**, Anthropic released the **Claude 3 family** (Haiku / Sonnet / Opus) — multimodal, 200K-token context window, available on Bedrock day-one in multiple AWS Regions. Subsequent releases (Claude 3.5 family in 2024, Claude 4 family later) replaced the earlier `claude-3-7-sonnet-20250219` / `claude-3-5-sonnet` model IDs.

**Outcome.**
- ChatGPT reached **~300 million weekly active users** by late 2024 (Sam Altman, public statements / Reuters reporting), and OpenAI was valued at **$157 billion** in its Oct 2024 funding round.
- Anthropic by mid-2024 reported **~$1 billion in annualized revenue** and counted Bedrock customers including Pfizer, Bridgewater, LexisNexis, Lonely Planet, and the Snowflake Cortex platform among its enterprise wins.
- **Amazon Bedrock**, which made Claude available behind an AWS-style API with IAM and VPC-endpoint privacy, became the on-ramp for most "we're risk-averse and need Claude inside our AWS account" enterprises — exactly the audience the AIF-C01 exam targets.
- Public-policy reaction was swift: the EU AI Act passed in Mar 2024 (in force Aug 2024); the NIST AI Risk Management Framework had been released in Jan 2023 in part as a reaction to GPT-3.5; the Italian DPA temporarily banned ChatGPT under GDPR in Mar 2023; Samsung internally banned ChatGPT use in Apr 2023 after engineers pasted proprietary source code into the model.

**Lesson for the exam / for practitioners.** Two AIF-C01 talking points anchor here:
1. **The product moat is the API + alignment + safety stack, not the base model alone.** GPT-3 had existed since 2020; what shifted in 2022 was the *productized*, RLHF-aligned chat interface. On Bedrock, the same pattern: AWS's value is not the model — it's the IAM, VPC endpoints, Guardrails, Knowledge Bases, Model Evaluation, and *single API across providers*. The exam will sometimes phrase this as "what does Bedrock add over calling Claude's API directly?" — the answer is the AWS-native security, governance, and managed-RAG layer.
2. **2022–2024 is the inflection point your enterprise scenarios will assume.** Almost every exam scenario about "a company wants to deploy a generative AI assistant" implicitly dates to this 2-year window. The right reflex is: *managed FM behind an API + RAG over private data + Guardrails on top + invocation logging for audit.* Not: train a foundation model from scratch.

**Discussion (Socratic).**
- Q1: OpenAI shipped ChatGPT free, no gate; Anthropic shipped Claude initially through Slack and enterprise APIs only. Which strategy is *better* at the 5-year horizon — and what's the strongest counter-argument from the camp you reject? Tie your reasoning to specific 2024 numbers (revenue, user growth, regulatory exposure).
- Q2: When ChatGPT launched, internal "AI policies" at most Fortune 500 companies did not exist. By mid-2023, half had a draft policy; by 2024, banning, allowing-with-Bedrock, and allowing-with-Microsoft-Copilot were all common. What's the *right* policy posture for a regulated industry (pick one: bank, hospital, defense contractor), and how would you sequence its rollout over 12 months?
- Q3: Anthropic's Constitutional AI uses an *AI grader* against a written constitution to align model behavior, instead of (or alongside) human labelers. Build the strongest argument for AI-graded alignment AND the strongest argument against it. At what scale does each break down?
- Q4: The "Italian DPA bans ChatGPT under GDPR (Mar 2023)" episode was resolved within 4 weeks via additional disclosures and an age-gate. If the AIF-C01 asked you "what's the GDPR-relevant failure mode of running GPT-style models on EU user data?" — what's the answer, and how does running the *same* model through Amazon Bedrock in an EU Region change the risk picture? (Hint: data residency, no-train-on-customer-data default, customer-managed CMK encryption.)

---

## ✅ Module 3 Summary

You now know:
- 🧱 What a foundation model is and what makes it different from classical ML
- 🗣️ That LLMs are FMs specialized for text, built on the Transformer architecture
- 🧩 The role of tokens, the context window, and why they drive cost
- 📐 What embeddings are and why they enable search and RAG
- 🎚️ The four inference knobs (temperature, top-p, top-k, max tokens) and when to use each
- 👻 What hallucinations are and the techniques that mitigate them
- 🖼️ The major generative modalities (text, image, audio, video, code, embeddings)

**Next steps:**
1. 🎥 Watch the videos in [`Videos.md`](./Videos.md)
2. ✏️ Take [`Quiz.md`](./Quiz.md) — aim for 20/24
3. 📋 Review [`Cheat-Sheet.md`](./Cheat-Sheet.md)
4. ➡️ Move to [Module 4: AWS GenAI Stack](../Module-04-AWS-GenAI-Stack/Reading.md)

---

> **Where this leads.**
> - Inside this course: Module 4 puts all this vocabulary to work in the AWS GenAI stack (Bedrock, Q, PartyRock, JumpStart); Module 5 turns these primitives into a working RAG pipeline; Module 6 deepens fine-tuning and evaluation.
> - Cross-course: `08-Azure-AI-Engineer` Module 2 covers the same primitives in Azure OpenAI / Azure AI Foundry language; `14-AI-Marketing-Foundations` Module 2 hits the marketer-flavored version of the same concepts.
> - Practice: Practice Exam 1 has 8–10 questions on these primitives; the Final Mock Exam tests the same ideas in scenario form.

---

## 📚 Further Reading (Optional)

- 📖 [Amazon Bedrock — User Guide: Inference parameters](https://docs.aws.amazon.com/bedrock/latest/userguide/inference-parameters.html)
- 📖 [AWS — What is a Foundation Model?](https://aws.amazon.com/what-is/foundation-models/)
- 📖 [AWS — What is Generative AI?](https://aws.amazon.com/what-is/generative-ai/)
- 📖 [Andrej Karpathy — Intro to LLMs (1-hour talk)](https://www.youtube.com/results?search_query=Karpathy+intro+to+LLMs+1+hour) — the best free explainer of how LLMs work
- 📖 [Original Transformer paper — "Attention Is All You Need"](https://arxiv.org/abs/1706.03762) (skim only)
