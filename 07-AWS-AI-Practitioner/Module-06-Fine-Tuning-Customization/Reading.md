# Module 6: Fine-Tuning & Customization 🛠️

> **Why this module matters:** Out of every question in Domain 3, the *single hardest* sub-topic is "RAG vs fine-tuning vs continued pre-training vs prompt engineering — which should the customer use?" If you can answer that scenario fluently and quote BLEU / ROUGE / perplexity by heart, you'll bank 4–6 marks that most candidates lose.

---

## 🍕 A Story: Four Ways To Make a New Apprentice

Back to that brilliant consultant from Module 5. Her name is **Maya**. Imagine your boss tells you: *"Make Maya useful for our legal-document review work."* You have four options:

1. **Just talk to her better.** Write clearer instructions. (Prompt engineering.) 🟢 Free. Fast.
2. **Hand her the right files before each question.** (RAG.) 🟢 Cheap. Updatable. Citable.
3. **Send her to a 2-week training course where she practices on hundreds of your real cases with worked answers.** (Fine-tuning.) 🟡 Real cost. Specialized behavior baked in.
4. **Have her spend a year reading every legal document you've ever produced and indexing the patterns.** (Continued pre-training.) 🔴 Expensive. Slow. Massive data needed.

When do you pick which? That's this module.

---

## 🪜 The Four Customization Approaches — A Side-by-Side

This is the single most important table in the whole course. **Memorize it.**

| Approach | Changes model weights? | Data needed | Cost | Time | Best for |
|----------|------------------------|-------------|------|------|----------|
| **Prompt engineering** | No | None (just craft prompts) | ¢ | Minutes | Quick wins, simple format/tone control |
| **RAG** | No | Your documents (any format) | $ | Hours to days to set up | Use your private/fresh data, with citations |
| **Fine-tuning** | Yes (small updates) | Hundreds–thousands of *labeled* examples | $$ | Hours–days of training | Specific tone, niche task, structured output |
| **Continued pre-training** | Yes (deep) | Huge volumes of *unlabeled* domain text | $$$$ | Days–weeks | Truly novel domain (medicine, law) at scale |

🎯 **The decision tree the exam tests:**

```
Need to use private data?  →  YES → RAG (start here)
                            │
                            └─ NO → Prompt engineering
                                    │
                                    └─ Still wrong tone / format
                                       after good prompting?
                                       → Fine-tuning
                                          │
                                          └─ Need to absorb
                                             a whole domain's
                                             vocabulary? → Continued
                                                            pre-training
```

🔥 **MEMORIZE the heuristic:** "**RAG for facts. Fine-tuning for behaviors.**"

---

## 🎯 Drilling Down: RAG vs Fine-Tuning (the most-tested comparison)

| Aspect | RAG | Fine-Tuning |
|--------|-----|-------------|
| **Updates** | Instant — change a doc, next query sees it | Re-train and re-deploy |
| **Cost to add new info** | $ — re-index | $$ — re-train |
| **Source citations** | Built-in | Not naturally |
| **Hallucination control** | Strong (grounded in retrieved chunks) | Weak (still confidently wrong) |
| **Behavior changes (tone, format)** | Limited | Strong |
| **Niche style/persona/structured output** | Possible but indirect | Direct |
| **Latency** | Slight added (retrieval step) | Same as base |
| **Auditability** | High (you see which chunks were used) | Low (weights are opaque) |
| **AWS service** | Knowledge Bases for Bedrock | Bedrock model customization |

🎯 **Trap on the exam:** "A retailer wants the chatbot to know about the new fall product catalog launched this week." → **RAG**, not fine-tuning. (Fresh data + low cost + citations.)

🎯 **Trap on the exam:** "A bank wants the model to always respond in a strict JSON schema with a specific legalese tone." → **Fine-tuning**. (Behavior, not facts.)

---

## 🏋️ Fine-Tuning on Amazon Bedrock — How It Actually Works

Bedrock offers **model customization** in two flavors:

### 1. Fine-tuning (supervised)

You provide a JSONL file of `{prompt, completion}` pairs (or `{messages: [...]}` for chat models). Bedrock trains a customized version of a supported base model on this data.

```
Example training records (simplified):

{"prompt":"Customer wants to cancel order #...","completion":"Cancellation processed. Refund in 5-7 days. Reference: ..."}
{"prompt":"Customer asks about delivery","completion":"Our standard delivery..."}
```

- Requires a **JSONL file in S3**
- Output is a **custom model** you own (encrypted with your KMS key)
- To use it for inference, you must purchase **Provisioned Throughput**

### 2. Continued Pre-Training

You provide a body of *unlabeled* domain text. Bedrock continues the model's pre-training on that corpus, extending its base statistical knowledge.

- Useful for: legal corpora, pharmaceutical, banking — where there's a huge specialized vocabulary
- Far more expensive than fine-tuning
- Requires much more data (typically GBs of text)

### Which Bedrock models support customization?

This list changes — but at AIF-C01 depth, just know:
- **Amazon Titan Text Lite/Express** — fine-tuning + continued pre-training
- **Meta Llama 3 family** — fine-tuning
- **Cohere Command (Light/R-class)** — fine-tuning
- **Amazon Nova Micro/Lite/Pro** — fine-tuning (newer)
- **Anthropic Claude** — fine-tuning (Haiku, in preview/limited access at various times)

🎯 **Trap on the exam:** "All Bedrock models can be fine-tuned." — **False.** Customization support varies per model and per region; check before promising it.

---

## 🪶 Parameter-Efficient Fine-Tuning (PEFT) — A Background Concept

Real fine-tuning a 70B-parameter model from scratch costs millions. To get around this, the industry uses **PEFT** techniques like:

- **LoRA (Low-Rank Adaptation)** — train a small "adapter" layer on top of frozen base weights
- **Prefix tuning / Prompt tuning** — train a small prefix vector

The AIF-C01 doesn't test the math. But you should recognize that:
- Fine-tuning today is *usually* a PEFT method (cheap, fast, no catastrophic forgetting)
- SageMaker JumpStart and Bedrock both expose PEFT-style customization

---

## 🧬 Instruction Tuning & RLHF — Vocabulary Recognition

You might see these terms on the exam:

| Term | What it is |
|------|------------|
| **Instruction tuning** | Fine-tuning on a curated set of *instructions + good responses* — turns a "raw" model into a chat-like assistant |
| **RLHF (Reinforcement Learning from Human Feedback)** | Humans rank multiple model outputs; the model learns to prefer the higher-ranked ones; standard alignment method for Claude/GPT |
| **Constitutional AI / RLAIF** | Variant where an AI evaluates outputs against a written "constitution" instead of/alongside humans |
| **DPO (Direct Preference Optimization)** | A newer, simpler alternative to RLHF using paired preferences |

You don't have to *do* any of these — just recognize them as alignment/finishing techniques applied by model providers (Anthropic, Amazon, Meta) before they release the model on Bedrock.

---

## 📏 Evaluating Generative Models

LLM evaluation is *harder* than classical ML evaluation — there's no single "correct" answer to a generated sentence. The exam expects you to recognize these metrics:

### Automated Metrics

| Metric | What it measures | Typical use |
|--------|------------------|-------------|
| **BLEU** | Overlap of n-grams between generated text and a reference | Machine translation |
| **ROUGE** (ROUGE-N, ROUGE-L) | Recall-oriented overlap | Summarization |
| **METEOR** | Like BLEU but accounts for synonyms / stemming | Translation, paraphrase |
| **BERTScore** | Semantic similarity using embedding models | Modern alternative to BLEU/ROUGE |
| **Perplexity** | How "surprised" the model is by a held-out text — lower is better | Intrinsic LM quality |
| **Exact match / F1** | For Q&A with short answers | Open-domain QA |

🎯 **Mnemonic:**
- **BLEU** = **B**est for translation
- **ROUGE** = **R**ecall, summarization
- **Perplexity** = how confused the model is (lower = better)

### Task-Specific Metrics

- **Code generation** → HumanEval, pass@k, compile/test pass rate
- **Multimodal / image** → FID (Fréchet Inception Distance), CLIPScore, human eval
- **Classification using LLM-as-judge** → Accuracy, Precision, Recall, F1 (the model is judged like a classifier)

### Human Evaluation

For high-stakes outputs (medical, legal, customer-facing), automated metrics aren't enough. You need **human evaluators** rating outputs on:

- **Helpfulness** — does it actually solve the user's task?
- **Faithfulness / groundedness** — does it stick to the source (for RAG)?
- **Safety** — does it avoid harmful content?
- **Style / tone** — does it match the brand voice?

### Amazon Bedrock Model Evaluation

Bedrock has a built-in **Model Evaluation** feature:

| Eval type | Description |
|-----------|-------------|
| **Automatic** | Provide a built-in or custom dataset; Bedrock scores models with metrics like accuracy, robustness, toxicity |
| **Human (worker)** | Set up human reviewers (your own team or AWS-managed) to rate outputs |
| **Knowledge Base evaluation** | Specifically for RAG — measures retrieval relevance and generation faithfulness |
| **LLM-as-a-judge** | Use one strong LLM (e.g., Claude) to grade another model's outputs at scale |

🎯 **Trap on the exam:** "Best metric for translation quality?" → **BLEU**. "Best for summarization?" → **ROUGE**.

---

## 💸 Cost Optimization for GenAI Workloads

The exam likes to test cost-awareness. Memorize these moves:

| Move | Why it helps |
|------|--------------|
| **Pick the smallest model that works** | Claude Haiku, Nova Micro, Titan Text Lite are often 10–30× cheaper than frontier siblings |
| **Use Bedrock Batch (50% off)** | For offline workloads up to ~24 h SLA |
| **Use Provisioned Throughput only when needed** | Reserved capacity is only cheaper than on-demand at high steady volume |
| **Prompt caching** | Avoid re-paying for the same prompt prefix on every call |
| **Smaller context** | Don't stuff irrelevant data — RAG retrieves *only what's needed* |
| **Cache responses** | DynamoDB / ElastiCache in front of Bedrock for hot Q&A pairs |
| **Use cheaper inference compute** | Inferentia / serverless inference can beat GPU instances |

---

## 🧪 The Customization-Choice Scenarios (Practice)

Match each scenario to the best customization approach. (Try first, then peek.)

| Scenario | Best approach |
|----------|---------------|
| Add this week's pricing changes to a Q&A bot | **RAG** |
| Make the chatbot always reply in 3 sentences or fewer | **Prompt engineering** (then fine-tune if it still drifts) |
| Make outputs match a strict legal-style tone for a niche firm | **Fine-tuning** |
| Build a chatbot over 100,000 internal Confluence pages | **RAG** |
| Teach the model the vocabulary of a brand-new scientific field with 50 GB of unlabeled papers | **Continued pre-training** |
| Get the model to call our refund and shipping APIs as needed | **Bedrock Agent** (Module 5, but worth recognizing here) |
| Make the model say "I don't know" instead of guessing when unsure | Prompt engineering, especially **system prompt instruction** |

---

## 🚨 Common Exam Misconceptions

| Misconception | Reality |
|---------------|---------|
| "Fine-tuning is the answer when you want the model to know about your data" | Almost always wrong — that's **RAG**. Fine-tuning is for *behavior*. |
| "Continued pre-training is similar to fine-tuning" | They overlap conceptually but continued pre-training uses *unlabeled* data, much more of it, and costs far more |
| "BLEU is for summarization" | BLEU = translation; ROUGE = summarization |
| "All Bedrock models support fine-tuning" | False; per-model |
| "After fine-tuning a Bedrock model you call it on-demand like any other" | False; you must purchase **Provisioned Throughput** to invoke a customized Bedrock model |
| "Lower perplexity is worse" | Lower = better; the model is less surprised |

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **Customization** | Any approach to adapt an FM (prompt, RAG, fine-tune, continued pre-train) |
| **Fine-tuning** | Updating model weights on labeled examples |
| **Continued pre-training** | Extending base pre-training on unlabeled domain text |
| **Instruction tuning** | Fine-tuning to follow instructions (turns base into assistant) |
| **RLHF** | Aligning a model with ranked human feedback |
| **DPO** | Newer alternative to RLHF using preference pairs |
| **PEFT / LoRA** | Parameter-efficient fine-tuning (train small adapters) |
| **BLEU** | Translation metric (n-gram overlap) |
| **ROUGE** | Summarization metric (recall-oriented overlap) |
| **Perplexity** | Intrinsic LM metric — lower is better |
| **BERTScore** | Embedding-based semantic similarity metric |
| **LLM-as-a-judge** | Use one LLM to evaluate another |
| **Bedrock Model Evaluation** | Built-in service to compare and rate FMs |
| **Provisioned Throughput** | Required to invoke customized Bedrock models |
| **Prompt caching** | Reusing a cached prompt prefix to reduce token cost |

---

## ✅ Module 6 Summary

You now know:
- 🪜 The four customization approaches (Prompt → RAG → Fine-tuning → Continued pre-training) and the decision tree to pick between them
- 🎯 RAG vs Fine-tuning side-by-side — *RAG for facts, fine-tuning for behaviors*
- 🏋️ How Bedrock model customization works (JSONL data, S3, Provisioned Throughput required)
- 🧬 The vocabulary: instruction tuning, RLHF, DPO, PEFT/LoRA
- 📏 Evaluation metrics: BLEU (translation), ROUGE (summarization), perplexity, BERTScore, plus human and LLM-as-judge evaluation
- 🧪 Bedrock Model Evaluation (automatic + human + KB + LLM-as-judge)
- 💸 The cost-optimization toolbox for production GenAI

**Next steps:**
1. 🎥 Watch the videos in [`Videos.md`](./Videos.md)
2. ✏️ Take [`Quiz.md`](./Quiz.md) — aim for 20/24
3. 📋 Review [`Cheat-Sheet.md`](./Cheat-Sheet.md)
4. ➡️ Move to [Module 7: Responsible AI](../Module-07-Responsible-AI/Reading.md)

---

## 📚 Further Reading (Optional)

- 📖 [Amazon Bedrock — Custom models](https://docs.aws.amazon.com/bedrock/latest/userguide/custom-models.html)
- 📖 [Amazon Bedrock — Model Evaluation](https://docs.aws.amazon.com/bedrock/latest/userguide/model-evaluation.html)
- 📖 [SageMaker JumpStart — Fine-tuning foundation models](https://docs.aws.amazon.com/sagemaker/latest/dg/jumpstart-fine-tune.html)
- 📖 [Hugging Face — PEFT library](https://huggingface.co/docs/peft) (background depth, optional)
- 📖 [BLEU paper (Papineni et al., 2002)](https://aclanthology.org/P02-1040/) (historic context)
