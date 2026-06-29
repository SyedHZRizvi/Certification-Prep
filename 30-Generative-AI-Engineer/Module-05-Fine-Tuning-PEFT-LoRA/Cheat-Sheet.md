# 📋 Module 5 Cheat Sheet: Fine-Tuning, PEFT & LoRA

---

## ⚖️ Decision Tree

```
1. Did a strong prompt with 5-10 examples solve it?     → Done.
2. Is the gap factual knowledge?                         → RAG.
3. Is the gap behavior / format / persona?              → SFT (LoRA).
4. Do we have preference data (chosen/rejected)?         → SFT + DPO.
5. Need privacy / proprietary patterns?                  → QLoRA self-host.
6. Latency / cost reduction?                             → Distill (small model FT'd on large).
7. Hard ROI (Return on Investment) question?                                    → DON'T fine-tune yet.
```

---

## 🧪 LoRA Math

```
ΔW = B · A                            # B: d×r, A: r×d
y = W · x + (B · A) · x · (alpha / r)
```

**Effective rank** = r. Choose r = 8 / 16 / 32 / 64 by domain complexity.

---

## ⚙️ LoRA Hyperparameter Defaults

| Param | Typical |
|-------|---------|
| `r` | 16 |
| `alpha` | 32 |
| `dropout` | 0.05 |
| `target_modules` | `"all-linear"` (or Q/K/V/O + MLP) |
| `learning_rate` | 2e-4 (LoRA), 5e-5 (full FT) |
| `epochs` | 1–3 |
| `batch_size` | 16–32 |
| `warmup_ratio` | 0.1 |
| `scheduler` | cosine |

---

## 💾 QLoRA Memory Math (8B model, batch 4, seqlen 2048)

| Component | fp16 FT | LoRA r=16 | QLoRA (4-bit base) |
|-----------|---------|------------|----------------------|
| Base weights | 16 GB | 16 GB | 4 GB |
| Gradients | 16 GB | 0.08 GB | 0.08 GB |
| Optimizer | 32 GB | 0.16 GB | 0.16 GB |
| Activations | ~10 GB | ~10 GB | ~10 GB |
| **Total** | ~74 GB | ~26 GB | ~14 GB |

→ QLoRA on a single 16 GB consumer GPU is achievable for 8B models.

---

## 🧬 PEFT Methods

| Method | Trained % | Use case |
|--------|-----------|----------|
| **LoRA** | 0.1–1% | The default |
| **QLoRA** | 0.1–1% + 4-bit base | Memory-constrained |
| **DoRA** | 0.1–1% | LoRA underperforming |
| **Prefix tuning** | ~0.1% | Older |
| **Prompt tuning** | ~0.01% | Tiny adapter |
| **IA3** | ~0.01% | Multi-task |
| **Adapter layers** | ~1% | Original Houlsby |

---

## 🥋 Training Paradigms

| Paradigm | What it does | Library |
|----------|--------------|---------|
| **SFT** | Next-token loss on (input, target) | `trl.SFTTrainer` |
| **DPO** | Preference pairs without reward model | `trl.DPOTrainer` |
| **KTO** | Thumbs-up/down labels | `trl.KTOTrainer` |
| **ORPO/SimPO** | SFT + preference in one pass | `trl.ORPOTrainer` |
| **PPO (RLHF (Reinforcement Learning from Human Feedback))** | RL against reward model | `trl.PPOTrainer` (rare) |
| **RFT** | Reasoning-trace fine-tune (OpenAI 2024+) | OpenAI API (Application Programming Interface) |

---

## 🌐 Managed Fine-Tuning APIs

| Provider | Models | Methods | Notes |
|----------|--------|---------|-------|
| OpenAI | GPT-4o-mini / 4o / 4.1 / 5 | SFT + DPO + Vision | $$$, no LR control |
| Anthropic (Bedrock) | Claude Haiku 3+ | SFT + DPO | AWS (Amazon Web Services)-only path |
| Google Vertex | Gemini Flash / Pro | SFT | $$ |
| HuggingFace AutoTrain | Open weights | SFT | Wraps `trl` |

---

## 🚢 Serving Patterns

| Pattern | When |
|---------|------|
| **Merged LoRA** (W' = W + B·A) | Single LoRA, stable |
| **Runtime adapter (vLLM/TGI)** | Multi-tenant LoRA |
| **API-hosted** | Lock-in OK; zero ops |
| **Local (Ollama, llama.cpp)** | Edge / on-device |

---

## 📊 Data Rules

- **Quantity** floors: 100–1K (style), 1K–10K (domain), 10K+ (new capability)
- **LIMA**: 1K high-quality > 100K low-quality
- **Disjoint** train/eval, leakage kills measurement
- **Diversity** + **difficulty distribution**, not just easy cases
- **Consistency** of the desired behavior across examples

---

## 🚨 Anti-Patterns

| Don't | Do |
|-------|-----|
| Fine-tune for factual knowledge | RAG instead |
| Fine-tune persona/confidence in legal/medical | RAG + careful prompts |
| Skip held-out eval | Always disjoint eval set |
| Use full FT on consumer GPU | QLoRA |
| Forget `print_trainable_parameters()` | Sanity-check the LoRA application |
| Re-tune weekly for fresh data | RAG handles fresh data better |
| Distill from an unreliable teacher | Garbage propagates |

---

## 🏆 Exam Power Phrases

✅ Often **right**:

- "Prompt → RAG → Fine-tune, in that order"
- "QLoRA: NF4 + double quant + paged optimizers"
- "LoRA: low-rank approximation of ΔW"
- "DPO replaces PPO+reward-model for most teams"
- "Merge LoRA into base for production serving"
- "Hold out an eval set; never train on it"

❌ Often **wrong**:

- "Always fine-tune"
- "Train from scratch for a domain LLM"
- "More data is always better"
- "Fine-tuning fixes hallucinations"
- "Full fine-tune fits on a single consumer GPU"

---

## 🗓️ Memorize Cold

- LoRA: `ΔW = B·A`; r = 8/16/32; alpha typically 2r
- QLoRA: NF4 + double quant + paged
- SFT > DPO > KTO > ORPO > PPO (for industry use; left = simplest)
- LIMA: data quality dominates
- Catastrophic forgetting: real; mitigations matter
- LoRA serving: merge or runtime-swap

---

➡️ [Module 6: Multi-Agent Systems](../Module-06-Multi-Agent-Systems/Reading.md)
