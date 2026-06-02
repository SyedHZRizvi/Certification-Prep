# 📋 Module 6 Cheat Sheet: Fine-Tuning on Vertex AI

> Climb the ladder. Don't fine-tune what a prompt or RAG can fix.

---

## 🪜 Customization Ladder (climb only when below is exhausted)

```
1. Better prompt (system_instruction + schema)
2. Few-shot prompting (3–10 exemplars)
3. RAG (Module 5)
4. Supervised Fine-Tuning (SFT)
5. RLHF / DPO
```

🎯 *Most "I should fine-tune" instincts are wrong. Try 1–3 first.*

---

## 🎓 What Fine-Tuning Does (and Doesn't)

| ✅ Good for | ❌ Bad for |
|------------|-----------|
| Style, tone, brand voice | New knowledge / facts |
| Output format adherence | Catastrophic forgetting (over-tune) |
| Domain vocabulary | Cost-efficiency at scale |
| Task specialization (classification taxonomy) | Frequent updates |

---

## 🛠️ SFT on Vertex AI

```python
from vertexai.preview.tuning import sft

job = sft.train(
    source_model="gemini-2.5-flash",   # Flash is the default tuned tier
    train_dataset="gs://b/train.jsonl",
    validation_dataset="gs://b/val.jsonl",
    tuned_model_display_name="my-tuned-v1",
    epochs=3,
    learning_rate_multiplier=1.0,
    adapter_size=4,                    # LoRA rank
)
```

**Dataset format (JSONL):**
```json
{"contents":[{"role":"user","parts":[{"text":"..."}]},{"role":"model","parts":[{"text":"..."}]}]}
```

**Splits:** 80% train / 10% validation / 10% holdout (untouched until final).

**Sizes:** style ~100–1K; classification 100/class; structured 500+; long-form 1K+.

---

## ⚡ LoRA — What & Why

- **L**ow-**R**ank **A**daptation: insert small adapter matrices on attention layers; only adapters update
- Base weights frozen → no catastrophic damage
- 10-100× fewer params to train → cheap, fast
- Multiple adapters can coexist for different workloads
- `adapter_size` = LoRA rank (1, 4 default, 8, 16)

---

## 🎚️ RLHF vs DPO

| | RLHF | DPO |
|---|------|-----|
| Pipeline | SFT → reward model → RL (PPO) | SFT → direct preference optimization |
| Complexity | Higher | Lower |
| Resource cost | Higher | Lower |
| When | Subjective quality, mature team | Same goal, simpler path |
| Paper | Ouyang 2022 | Rafailov 2023 |

---

## 🪞 Distillation

```
Teacher (Pro/Ultra) → run on prompt set
       ↓
Generate (input, teacher_output) pairs
       ↓
SFT a Student (Flash) on those pairs
       ↓
Deploy Student at Flash price + closer-to-Pro quality on the target task
```

---

## 🧪 Evaluation

```python
from vertexai.evaluation import EvalTask, MetricPromptTemplateExamples

task = EvalTask(
  dataset=holdout,
  metrics=[
    MetricPromptTemplateExamples.Pointwise.FLUENCY,
    MetricPromptTemplateExamples.Pointwise.GROUNDEDNESS,
    "exact_match",
    "rouge",
  ],
)
result = task.evaluate(model=tuned_model)
```

**Always compare:**
- Tuned model on holdout
- Base model on holdout
- Tuned model on OOD → catastrophic-forgetting check

---

## 🎯 Decision Matrix

| Need | Tool |
|------|------|
| Knowledge updates | **RAG** |
| One-off behavior change | Better prompt |
| Style / format / vocab | Few-shot → SFT |
| Subjective quality | RLHF / DPO |
| Pro quality at Flash cost | Distillation |
| Medical / legal specialty | MedLM / domain SFT |

---

## 🚦 Power Phrases

✅ Often **right**:

- "Fine-tune shapes behavior, not knowledge"
- "Knowledge updates → RAG; style/voice → SFT"
- "LoRA = parameter-efficient; base weights frozen"
- "Adore Me concluded prompt + RAG > fine-tune"
- "Distill Pro → Flash for cheap quality on narrow tasks"
- "Always test holdout + OOD after SFT"
- "RLHF for subjective quality; DPO is the simpler modern path"

❌ Often **wrong**:

- "Fine-tune to add knowledge" (no — RAG)
- "More epochs = better" (overfit)
- "100 examples works for any task"
- "Fine-tuned models are cheaper than base"
- "RLHF is always better than SFT"

---

## ✏️ Quick Self-Check

1. Customization ladder (5 rungs)? ___
2. Three things SFT is good at? ___
3. LoRA in one sentence? ___
4. When use distillation? ___
5. How to detect catastrophic forgetting? ___

If all 5 in <90s, you own this module. ✅

---

➡️ [Module 7: Agent Builder](../Module-07-Agent-Builder-Conversational/Reading.md)
