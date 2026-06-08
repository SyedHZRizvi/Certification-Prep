# Module 6: Fine-Tuning & Model Customization on Vertex AI 🔧

> **Why this module matters:** Fine-tuning is the most-misunderstood lever in the GenAI toolbox. Half the time engineers reach for it, they should be using RAG or a better prompt. The other half, they reach for it but pick the wrong *kind* of fine-tuning, end up with a brittle model that costs 5x what it should, and conclude "fine-tuning doesn't work." This module is the practitioner's guide to fine-tuning Gemini on Vertex AI, what it actually does, when to use it, and the SFT/RLHF/distillation choices that determine whether your fine-tuned model ships.

> **Prerequisites for this module.** Modules 1–5 finished. Familiarity with the *concept* of supervised learning (input → label → loss → gradient update). Some experience labeling or curating a small dataset (~100 examples) helps.

---

## 📖 A Story: When Adore Me Discovered Fine-Tuning Was the Wrong Answer

It is early 2024. **Adore Me** (a Victoria's Secret-owned lingerie brand) wants to deploy Gemini-powered product descriptions across its ~3,000 SKUs in five languages. The brief: "Each description must use Adore Me's voice, body-positive, inclusive, casually friendly, no purple prose, no clinical terminology." The team's first instinct is to fine-tune Gemini on 500 Adore Me-authored descriptions.

The fine-tune produces a brittle model. It nails Adore Me's voice on products *similar* to the training set (bras, panties) but produces stilted, off-brand copy for sleepwear and swim, categories under-represented in the training data. Each new product category requires *adding to the training set and re-fine-tuning*. The team is shipping fine-tuned model versions monthly.

The team's published reflection (Google Cloud Customer Story 2024) describes a pivot. Instead of fine-tuning, they:

1. Wrote a precise **system_instruction**, 800 words specifying the voice, the do's, the don'ts, three exemplars
2. Built a **few-shot prompt template** with 8 hand-picked examples covering the full category spread
3. Indexed brand guidelines + competitor-don't-do examples in **Vertex AI Search**; grounded against them
4. Ran a **prompt eval** with LLM-as-judge scoring against a held-out test set every time the prompt changed

Result: better quality than the fine-tuned version, fully refreshable in minutes (vs days for a retrain), and the team's cost dropped by an order of magnitude. The first paragraph of Adore Me's case study is: *"We didn't need to fine-tune Gemini. We needed to give it better instructions."*

This story is the canonical lesson of Module 6. **Most workloads that reach for fine-tuning should use a better prompt + RAG first.** Fine-tuning is the right answer in roughly three scenarios, and we'll deconstruct each. The exam tests whether you can identify which lever a given workload actually needs.

---

## 🪜 The Customization Ladder (Pick the Right Rung)

There are five ways to customize an LLM's behavior on Vertex AI, in increasing order of cost, complexity, and lock-in:

| Rung | Technique | When |
|------|-----------|------|
| 1 | **Better prompt** (system_instruction + structured output schema) | Always try first |
| 2 | **Few-shot prompting** (exemplars in the prompt) | Need style/format consistency, ~3-10 examples enough |
| 3 | **RAG** (Module 5) | Knowledge updates, citation requirements, factual grounding |
| 4 | **Supervised fine-tuning (SFT)** | Distinct domain behavior, persistent output style, specialized vocabulary |
| 5 | **RLHF / DPO** | Subjective quality tuning where humans rank pairs of outputs |

**Climb only when the rung below is exhausted.** That is the practitioner's rule. The exam tests it as: *"A team wants better domain Q&A on tax law. They have not tried RAG. What's the next step?"* → **RAG first; consider fine-tuning only if RAG doesn't suffice.**

---

## 🎓 What Fine-Tuning Actually Does

Fine-tuning is **gradient descent on the model's weights using new training data**. It does *not* add new knowledge in the way a corpus does (RAG is better for that). It *shapes behavior*, what kinds of patterns the model produces, what vocabulary it favors, how it formats output, how it handles your domain's specific edge cases.

**Three things fine-tuning is excellent at:**

1. **Style and tone**, adopt a brand voice, a domain register (legal, medical), a fixed output format
2. **Task specialization**, make Gemini's classification labels match your taxonomy exactly
3. **Vocabulary adaptation**, internal jargon, product codes, proprietary terminology

**Three things fine-tuning is bad at:**

1. **Knowledge updates**, the model still doesn't know about facts it didn't see; RAG is for this
2. **Catastrophic forgetting**, over-fine-tune and the model forgets general capabilities
3. **Cost-efficiency**, fine-tuning runs are expensive; serving fine-tuned models is more expensive than the base

---

## 🛠️ Supervised Fine-Tuning (SFT) on Vertex AI

**Supervised fine-tuning** is the standard pattern: prepare (input, output) pairs; the model updates weights to minimize the difference between its prediction and the target output.

### Supported models for SFT

As of 2026-05, Vertex AI supports SFT on:

- **Gemini 2.5 Flash** (most common; cost-effective)
- **Gemini 2.0 Flash / Pro** (legacy; still supported)
- **Some Gemini 1.5 variants** (deprecating)
- **MedLM** (medical)
- Some **third-party Model Garden** open-weight models (Llama, Mistral) via custom training

🎯 **Exam note:** Gemini Pro 2.5 / Ultra fine-tuning is more restricted; Flash is the default workhorse for tuning.

### Dataset format

Vertex AI accepts JSONL (one example per line) in this shape:

```jsonl
{"contents":[{"role":"user","parts":[{"text":"Classify: 'I love your product, fast shipping!'"}]},{"role":"model","parts":[{"text":"positive"}]}]}
{"contents":[{"role":"user","parts":[{"text":"Classify: 'Took 3 weeks and arrived broken'"}]},{"role":"model","parts":[{"text":"negative"}]}]}
```

Each example is a multi-turn conversation. The model learns to produce the `model` role responses given the `user` role inputs.

### Minimum dataset size

| Task | Minimum | Recommended |
|------|---------|-------------|
| Style / tone | 100 examples | 500–1,000 |
| Classification | 100 per class | 500 per class |
| Structured extraction | 500 | 2,000+ |
| Long-form generation | 1,000 | 5,000+ |

🎯 **Exam pattern:** *"500 example fine-tune doesn't help on a 20-class task."* → **Need more data per class.** Trap: "Add a bigger model."

### Splitting and validation

Split your data: **80% train / 10% validation / 10% holdout**.
- Train: the model sees these and updates weights
- Validation: used during training to detect overfitting; the loss on validation guides hyperparameters
- Holdout: never seen during training; the final, honest benchmark

### Launching an SFT job (Python SDK)

```python
from vertexai.preview.tuning import sft

tuning_job = sft.train(
    source_model="gemini-2.5-flash",
    train_dataset="gs://my-bucket/train.jsonl",
    validation_dataset="gs://my-bucket/val.jsonl",
    tuned_model_display_name="adore-me-product-copy-v1",
    epochs=3,
    learning_rate_multiplier=1.0,
    adapter_size=4,            # LoRA rank
)
print(tuning_job.tuned_model_endpoint_name)
```

**Hyperparameters that matter:**
- `epochs`, how many passes over the data. Too few → underfit; too many → overfit. Start with 3-5.
- `learning_rate_multiplier`, relative to Google's default. Start with 1.0.
- `adapter_size`, for parameter-efficient methods (LoRA rank). Smaller = faster + less overfit risk; larger = more capacity.

### Cost & duration

A Gemini Flash SFT on ~1,000 examples typically:

- Runs in 2–4 hours
- Costs ~$10–50 per run (you pay for the training compute + the resulting tuned-model endpoint serving rate)
- Produces a tuned-model endpoint that costs slightly more per token than base Flash

🎯 **Exam pattern:** *"A team fine-tunes Gemini Flash and the validation loss flattens after epoch 1. Adding more epochs..."* → **Will overfit; check the holdout; consider more data or a smaller adapter.**

---

## ⚡ Parameter-Efficient Fine-Tuning (LoRA / Adapter Tuning)

Full-parameter fine-tuning of a Gemini Flash-sized model would be cost-prohibitive at scale (every fine-tune produces a giant new set of weights). Vertex AI uses **LoRA (Low-Rank Adaptation)** under the hood for Gemini SFT.

**How LoRA works:** Instead of updating all weights, LoRA inserts small "adapter" matrices into specific layers (typically attention layers). Only the adapter weights are updated. The original weights are frozen.

**Benefits:**
- 10-100× fewer parameters to train → cheaper, faster
- Multiple adapters can co-exist; you can swap adapters per workload
- Easy rollback (just discard the adapter)
- Smaller storage footprint per fine-tune

**The `adapter_size` hyperparameter** controls the rank of the LoRA matrices:

- `adapter_size=1`, very small adapter; minimal change
- `adapter_size=4`, typical default
- `adapter_size=8` or `16`, more capacity, more risk of overfit

🎯 **Exam pattern:** *"Why is Vertex AI's Gemini SFT much cheaper than full fine-tuning?"* → **LoRA / parameter-efficient adapters; only a small number of adapter parameters update.**

---

## 🎚️ RLHF on Vertex AI

**Reinforcement Learning from Human Feedback (RLHF)** pioneered by OpenAI in 2022 (Ouyang et al.), used for InstructGPT and ChatGPT is also available on Vertex AI for specialized customization. The training loop:

```
1. SFT first (per above)
2. Collect rankings: humans label pairs of model outputs (A vs B)
3. Train a reward model that predicts human preference
4. RL phase: use the reward model to update the model's behavior
```

**When to use RLHF on Vertex AI:**
- Subjective quality (e.g., "did the response sound helpful and on-brand?")
- Style preferences where SFT can't capture the nuance
- Safety / alignment tuning beyond Google's baseline

**Most teams will NOT need RLHF.** It is expensive (collecting human pairwise rankings is labor-intensive), slow (the loop takes weeks), and SFT or better prompting usually suffices.

### DPO as a simpler alternative

**Direct Preference Optimization (DPO)**, published by Rafailov et al. 2023, achieves RLHF-like behavior without the RL machinery, directly optimizes the model on pairwise preference data. Simpler and increasingly preferred.

🎯 **Exam pattern:** *"A team wants their model to give subjectively-better customer-service responses. The team has 5K pairs of (better, worse) example responses ranked by their CX leads. The fastest path is..."* → **DPO** (or RLHF) on Vertex AI. SFT alone misses the comparative signal.

---

## 🪞 Distillation, Smaller Student from Bigger Teacher

**Distillation** is training a small model (the *student*) to mimic the outputs of a large model (the *teacher*). On Vertex AI:

1. Teacher = Gemini 2.5 Pro or Ultra (or a fine-tuned variant)
2. Run the teacher on a representative prompt set
3. Train the student (Gemini 2.5 Flash) on (input, teacher-output) pairs via SFT
4. Deploy the student at Flash prices with closer-to-Pro quality on the targeted task

**When to use:** You need Pro-tier quality on a *narrow* task, but you have Flash-tier latency and cost budget. Distillation is great for "frequent narrow workloads."

```python
# Generate teacher outputs
teacher = GenerativeModel("gemini-2.5-pro")
teacher_data = []
for prompt in prompts:
    out = teacher.generate_content(prompt)
    teacher_data.append({"contents":[
      {"role":"user","parts":[{"text":prompt}]},
      {"role":"model","parts":[{"text":out.text}]},
    ]})

# Save as JSONL → upload → SFT a Flash student
```

🎯 **Exam pattern:** *"A team needs Pro-quality summaries at Flash-tier cost on a high-volume background job."* → **Distill Pro → Flash via SFT.** Trap: "Just use Flash" (won't match quality).

---

## 🧪 Evaluating a Fine-Tuned Model

After fine-tuning, evaluate on the **holdout**, data the model never saw during training. Vertex AI Evaluation Service handles this:

```python
from vertexai.evaluation import EvalTask, MetricPromptTemplateExamples

task = EvalTask(
    dataset=holdout_set,
    metrics=[
        MetricPromptTemplateExamples.Pointwise.FLUENCY,
        MetricPromptTemplateExamples.Pointwise.GROUNDEDNESS,
        MetricPromptTemplateExamples.Pointwise.SAFETY,
        "exact_match",
        "rouge",
    ],
    experiment="adore-me-tuning",
)
result = task.evaluate(model=tuned_model)
```

Compare:

1. Tuned model on the holdout
2. Base model on the holdout
3. Tuned vs base on **out-of-distribution** examples (catastrophic forgetting check)

🎯 **Exam pattern:** *"After fine-tuning, the model is better on the holdout but suddenly answers 'I don't know' to general questions it used to answer."* → **Catastrophic forgetting.** Solutions: more diverse training data (mix in general examples), smaller adapter, lower learning rate.

---

## 🤔 Fine-Tune vs Prompt vs RAG, The Decision Matrix

| Need | Tool |
|------|------|
| New knowledge, frequently changing | **RAG** |
| One-off behavior change | **Better prompt** |
| Repeated style / format / vocabulary | **Few-shot prompting** first; **SFT** if exemplars insufficient |
| Subjective quality grading by humans | **RLHF / DPO** |
| Pro quality at Flash cost on a narrow task | **Distillation** |
| Domain-specialized model (medical, legal) | **Domain-tuned model** (MedLM) or **SFT on domain data** |
| Multi-modal vision tuning | **SFT on vision pairs** (Flash supports) |

🎯 **Exam pattern repeated:** *"Tax-law Q&A. RAG, fine-tune, or both?"* → **RAG first; consider SFT only after RAG matures.**

---

## 🎯 Three Real Fine-Tune Use Cases That Worked

### 1. Adore Me, Eventually Decided Against
Discovered prompting + RAG was enough; case study in *what NOT to fine-tune*. Saved ~10× cost.

### 2. Vodafone, Network-Ticket Classification
Vodafone published a 2024 case study (Google Cloud Next) of SFT on Gemini Flash for classifying customer network tickets into 80+ technical categories with proprietary error codes. 12K labeled tickets → SFT → 35% accuracy improvement over base Flash with few-shot. Production deployment via Endpoint canary.

### 3. Mayo Clinic, MedLM Domain Specialization
Mayo Clinic uses MedLM (Med-PaLM 2 successor in Vertex AI Model Garden) already domain-tuned by Google *plus* lightweight SFT on Mayo-specific clinical-decision-support note templates. The two-step (domain tune + institutional tune) avoids catastrophic forgetting of medical knowledge.

---

## ⚠️ Fine-Tuning Exam Traps

| Misconception | Reality |
|---------------|---------|
| "Fine-tuning adds knowledge." | **No.** It changes behavior. Knowledge → RAG. |
| "More epochs = better." | **No.** Overfit shows as low train loss + rising val loss. |
| "100 examples is enough for any task." | **No.** Style: maybe. Classification of 20 classes: nowhere near. |
| "Fine-tuning replaces the base model." | **No.** It's an adapter on top (LoRA). Base weights are frozen. |
| "Tuned models are cheaper than base models." | **No.** They're more expensive per token (compute + endpoint serving). |
| "RLHF is always better than SFT." | **No.** RLHF is expensive and slow; SFT is usually the right first step. |
| "DPO needs reinforcement learning." | **No.** DPO is direct preference optimization without RL. |
| "Distillation = compress the model." | **Partly.** It trains a smaller model to mimic a larger one's outputs on a specific task. |
| "Catastrophic forgetting can't be prevented." | **It can.** Smaller adapter, more diverse data, lower LR. |
| "Fine-tuning Pro/Ultra is the default." | **No.** Flash is the most-tuned tier; Pro/Ultra tuning is more restricted. |

---

## 🎓 Key Terms

| Term | Definition |
|------|------------|
| **SFT** | Supervised Fine-Tuning |
| **RLHF** | Reinforcement Learning from Human Feedback |
| **DPO** | Direct Preference Optimization |
| **LoRA** | Low-Rank Adaptation (parameter-efficient FT) |
| **Adapter** | The small weight matrices added by LoRA |
| **adapter_size** | LoRA rank hyperparameter |
| **Distillation** | Train small student to mimic large teacher |
| **Teacher / Student** | Distillation roles |
| **Epoch** | One pass over the training dataset |
| **Learning rate multiplier** | Vertex AI's LR knob (relative to default) |
| **Catastrophic forgetting** | Tuned model forgets general capabilities |
| **Holdout** | Final unseen evaluation set |
| **JSONL** | JSON lines, one example per line; Vertex AI's tuning format |
| **MedLM** | Domain-tuned medical model on Vertex AI |
| **Vertex AI Evaluation Service** | Built-in eval framework |
| **Pointwise metric** | Score each example individually |
| **Pairwise metric** | Score pairs (A better than B) |

---

## ✅ Module 6 Summary

You now know:

- 🪜 **Customization ladder**, prompt → few-shot → RAG → SFT → RLHF
- 🎓 **What SFT actually does**, behavior, not knowledge
- ⚡ **LoRA** as Vertex AI's tuning mechanism
- 🎚️ **RLHF + DPO** for subjective quality
- 🪞 **Distillation** for cheap quality on narrow tasks
- 🧪 **Evaluation**, holdout, catastrophic forgetting checks
- 🤔 **Decision matrix** for fine-tune vs RAG vs prompt
- ⚠️ **Common traps**, knowledge updates ≠ fine-tune

**Next:** [Module 7, Agent Builder & Conversational AI](../Module-07-Agent-Builder-Conversational/Reading.md)

---

## 📚 Further Reading

- 📖 [Vertex AI Tuning docs](https://cloud.google.com/vertex-ai/generative-ai/docs/models/tune-models)
- 📖 [Tuning datasets format](https://cloud.google.com/vertex-ai/generative-ai/docs/models/tune-text-models-supervised#about-datasets)
- 📖 [Vertex AI Evaluation Service](https://cloud.google.com/vertex-ai/generative-ai/docs/evaluation/overview)
- 📖 [MedLM](https://cloud.google.com/medical-large-language-models)
- 📄 Hu et al. (2021) [*LoRA: Low-Rank Adaptation of Large Language Models*](https://arxiv.org/abs/2106.09685)
- 📄 Rafailov et al. (2023) [*Direct Preference Optimization*](https://arxiv.org/abs/2305.18290)
- 📄 Ouyang et al. (2022) [*InstructGPT, RLHF*](https://arxiv.org/abs/2203.02155)
