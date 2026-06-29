# 📋 Module 6 Cheat Sheet: Fine-Tuning & Customization

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 🪜 The 4 Customization Approaches

| Approach | Weights? | Data | Cost | When |
|----------|----------|------|------|------|
| **Prompt engineering** | No | None | ¢ | First thing to try |
| **RAG (Retrieval-Augmented Generation)** | No | Your docs (any) | $ | Use private/fresh facts |
| **Fine-tuning** | Yes (small) | Labeled JSONL | $$ | Specific tone / format / niche task |
| **Continued pre-training** | Yes (deep) | Lots of unlabeled text | $$$$ | Whole new domain vocabulary |

🔥 **"RAG for facts, fine-tuning for behaviors."**

---

## 🎯 Decision Tree

```
Need private data?  → YES → RAG
                    │
                    └─ NO → Prompt engineering
                            │
                            └─ Still wrong tone/format?
                              → Fine-tuning
                                 │
                                 └─ Need a whole-domain
                                    vocab shift? → Continued
                                                  pre-training
```

---

## 🏋️ Bedrock Customization Mechanics

| Item | Detail |
|------|--------|
| **Data format** | JSONL in S3 (Simple Storage Service) |
| **Supported models** | Varies, Titan, Llama, Cohere Command, Nova (newer), Claude Haiku (limited) |
| **Output** | A custom model owned by you, encrypted by your KMS key |
| **Inference** | Requires **Provisioned Throughput** |
| **Continued pre-training** | Same flow with unlabeled domain text |

---

## 📏 Evaluation Metrics (memorize the pairings)

| Metric | Use |
|--------|-----|
| **BLEU** | Machine translation |
| **ROUGE** | Summarization |
| **METEOR** | Translation (with synonym matching) |
| **Perplexity** | Intrinsic LM quality (lower = better) |
| **BERTScore** | Semantic similarity (embedding-based) |
| **HumanEval / pass@k** | Code generation |
| **FID / CLIPScore** | Image generation |
| **Accuracy / F1** | Classification by LLM (Large Language Model) |

---

## 🧪 Bedrock Model Evaluation

- **Automatic**, built-in or custom metrics
- **Human (worker)**, your team or AWS-managed
- **Knowledge Base eval**, retrieval + faithfulness for RAG
- **LLM-as-judge**, strong LLM grades another

---

## 🧬 Alignment Vocab

- **Instruction tuning**, turn base into assistant
- **RLHF (Reinforcement Learning from Human Feedback)**, humans rank → reward model → policy update
- **DPO**, newer, simpler alignment with preference pairs
- **PEFT / LoRA**, train small adapters; the modern fine-tuning default

---

## 💸 Bedrock Cost-Optimization Moves

1. Smaller model (Haiku, Nova Micro, Titan Lite)
2. **Batch** inference (50% off)
3. Prompt caching
4. Shorter prompts, tighter context (RAG vs context-stuffing)
5. Provisioned Throughput **only** at steady high volume
6. Cache responses in DynamoDB / ElastiCache
7. Inferentia / serverless inference over GPUs where possible

---

## 🏆 Exam Power Phrases

Usually right:

- ✅ "**RAG** for use-my-docs scenarios"
- ✅ "**Fine-tuning** for specific tone / format"
- ✅ "**Provisioned Throughput** to invoke custom Bedrock models"
- ✅ "**BLEU = translation, ROUGE = summarization**"
- ✅ "**Lower perplexity is better**"
- ✅ "**Bedrock Batch** for offline cost savings"

Usually wrong:

- ❌ "Fine-tune to add the new pricing catalog" (use RAG)
- ❌ "BLEU is for summarization"
- ❌ "Higher perplexity is better"
- ❌ "All Bedrock models support fine-tuning"
- ❌ "Custom Bedrock models invoke on-demand like base models"

---

## ⚠️ Anti-Patterns

- ❌ Fine-tuning to bolt on a knowledge update
- ❌ Picking the most expensive frontier model when a small model would work
- ❌ Skipping evaluation entirely, "looks good" is not a metric
- ❌ Fine-tuning on tiny / low-quality data and expecting magic

---

## 📚 Reference case (high-signal recall)

| Case | What it proves |
|------|----------------|
| **BloombergGPT (Wu et al., 2023, arXiv:2303.17564)** | Continued-pre-training-style from-scratch on 363B finance-domain tokens; rare correct choice; usually a fine-tuned frontier FM beats it on cost/quality |

---

## ✏️ Quick Self-Check

1. 4 customization approaches + cost order? ___
2. "RAG for ___, fine-tuning for ___"? ___
3. BLEU → ___, ROUGE → ___, Perplexity → ___? ___
4. What does Provisioned Throughput unlock? ___
5. Two ways to cut Bedrock spend by ≥30%? ___

---

➡️ [Module 7: Responsible AI](../Module-07-Responsible-AI/Reading.md)
