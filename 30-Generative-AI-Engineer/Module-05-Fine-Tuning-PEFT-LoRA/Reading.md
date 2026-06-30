# Module 5: Fine-Tuning, PEFT & LoRA 🔧

> **Why this module matters:** Most teams that *think* they need fine-tuning actually need better prompts or better retrieval. But for the cases where fine-tuning *is* the right answer, getting it wrong is expensive and slow, a wasted month, a wasted GPU budget, and a model that's worse than the base. This module is how to (a) reliably decide *when* to fine-tune, (b) pick the right method (full vs PEFT vs LoRA vs QLoRA), (c) actually do it on consumer-grade hardware, and (d) ship and serve it without breaking your inference stack.

> **Prerequisites for this module.** You should be comfortable with:
> - Modules 1–4
> - Basic PyTorch (you don't need to write training loops, but you should understand `.backward()` and what an optimizer step does)
> - Hugging Face `transformers` and `datasets` libraries
> - The concept of a learning rate

---

## 🎬 A Story: The $84,000 Fine-Tuning Mistake

January 2025. A 30-person legal-tech startup decides they need a fine-tuned LLM. The reasoning: GPT-4 gives "generic" answers; clients want "lawyer-y" answers; the team's CTO has convinced the board that "fine-tuning will fix this."

They spend three months building a 12,000-example training set of (user_question, attorney_answer) pairs, gathered by paying paralegals $30/hr to write answers. Total dataset cost: ~$28,000. They QLoRA-fine-tune LLaMA-3-70B on 8×A100s on RunPod for two weeks. Compute cost: ~$56,000.

Total spent: **$84,000**. The result: the fine-tuned model's answers are *more confidently wrong* than the base. Hallucinations on jurisdiction-specific edge cases got worse, not better. They couldn't update the model when laws changed without re-tuning. Customer NPS dropped 12 points.

The retrospective conclusion (from the engineering blog the team published afterward): they should have built a **RAG system over a curated case-law corpus + careful prompt engineering** for ~$2,000. The fine-tuning didn't teach the model new facts; it just biased its *style* toward sounding more authoritative, which is the worst possible failure mode in legal advice.

This is the single most common production GenAI mistake of 2024–2025. This module's first job is to keep you from making it.

---

## ⚖️ The Decision Tree: Fine-Tune vs RAG vs Prompt

The simple rule, repeated by every GenAI lead at every conference:

> **Prompt → RAG → Fine-tune.** In that order. Each step is 10–100× the effort of the previous.

| Need | Best tool |
|------|----------|
| Change model's **persona / tone / format** | Fine-tune (or prompt with strong examples) |
| Teach **new factual knowledge** | RAG (almost always) |
| Adapt to a **domain vocabulary** (medical, legal, financial) | RAG + glossary in prompt; fine-tune as a polish |
| Get a model to **follow a specific output schema** consistently | JSON mode / structured outputs / fine-tune |
| **Bake in a complex task** the base model fails on | Fine-tune (after exhausting prompts) |
| **Reduce cost / latency** by distilling a large model into a small one | Fine-tune (knowledge distillation) |
| **Add reasoning ability** to a small model | Reasoning-trace fine-tune (RFT-style) |
| **Brand voice** / consistent style | Fine-tune is the cleanest |
| **Privacy**, keep data off third-party APIs | Self-host + fine-tune open weights |

🎯 **The 80/20 of "should I fine-tune?":**
1. Can a strong prompt with 5–10 well-chosen examples get me 80% of the way? (Usually yes.)
2. Does the remaining gap come from *factual* knowledge the model doesn't have? (Use RAG.)
3. Does the gap come from *behavior* the model isn't producing reliably even with good prompts? (Fine-tune.)

If you skip steps 1 and 2, you'll fine-tune a problem that didn't need fine-tuning.

---

## 🧠 The Full-Fine-Tune Reality Check

Full fine-tuning means updating *every parameter* of the model. For a 70B model:

- ~140 GB of weights (fp16)
- ~140 GB of gradients (fp16)
- ~280 GB of optimizer state (Adam: 2× weights in fp32)
- ~10–40 GB of activations per layer

Total: **600+ GB of VRAM**. That's 8× H100s minimum, often more. Cost: $30–60K per training run on cloud GPUs.

For 95% of teams, full fine-tuning is not the path. **Parameter-Efficient Fine-Tuning (PEFT)** is.

---

## 🎯 PEFT, The Family of Methods

PEFT is the umbrella term for techniques that update only a *small fraction* (often <1%) of model parameters while freezing the rest. Hugging Face's `peft` library implements them all.

| Method | What it does | Parameters trained | When to use |
|--------|--------------|---------------------|-------------|
| **LoRA** | Adds low-rank update matrices to attention | 0.1–1% | The default |
| **QLoRA** | LoRA on top of 4-bit quantized base | 0.1–1% (plus 4-bit base) | Memory-constrained |
| **DoRA** | Decomposes LoRA into magnitude + direction | 0.1–1% | When LoRA underperforms |
| **Prefix tuning** | Prepend learnable vectors to each layer's KV | ~0.1% | Older; rarely preferred over LoRA today |
| **Prompt tuning** | Learn soft prompt tokens | ~0.01% | Tiny adapters; classification |
| **P-tuning v2** | Like prefix tuning + deeper | ~0.1% | Mostly historical |
| **IA3** | Scale K/V/FFN with learned vectors | ~0.01% | Multi-task efficiency |
| **Adapter layers** | Insert small MLPs between transformer blocks | ~1% | Houlsby 2019 original PEFT |

LoRA dominates. The rest exist; you'll occasionally use one of the others.

---

## 🧪 LoRA in Depth (Hu et al. 2021)

**The intuition.** During fine-tuning, the weight update ΔW you'd apply to a layer is *almost certainly low-rank*, the task-specific adjustments to a giant pre-trained matrix live in a small subspace. So instead of training the full ΔW (which is huge), train a low-rank approximation: `ΔW = B · A`, where `B ∈ ℝ^(d×r)` and `A ∈ ℝ^(r×d)`, with `r` (the rank) typically 8, 16, or 64.

```
Original linear layer:         y = W · x        (W is d × d, frozen)
LoRA-augmented layer:          y = W · x + B · A · x      (B, A are trainable)
                                                          (initialized so B·A = 0 at start)
```

For a layer with `d=4096`, full fine-tuning requires updating 16M parameters. LoRA with `r=8` updates `4096·8 + 8·4096 = 65,536` parameters, a **250× reduction**.

Apply LoRA to attention's Q, K, V, and output projections (most common); optionally add FFN. Each tunable matrix gets its own (A, B) pair.

**Trainable percentage:** typical LoRA on a 7B model trains 0.1–0.5% of parameters. The base model is frozen.

**At inference:** you can either keep LoRA as a separate adapter applied at runtime, OR *merge* the LoRA into the base weights (`W' = W + B·A`) to get a single model with no inference overhead.

### Key LoRA hyperparameters

- **r (rank)**, 8, 16, 32, 64 are common. Higher = more capacity; more params; usually helps up to a domain-dependent ceiling.
- **alpha**, a scaling factor; effective LoRA scale = `alpha / r`. Common default: `alpha = 2·r`.
- **dropout**, 0.05–0.1 on LoRA layers helps regularization.
- **target_modules**, which layers get LoRA. Q/V is the original recommendation; Q/K/V/O is common; "all-linear" is a modern default for capacity.

---

## 💰 QLoRA, How to Fine-Tune a 70B Model on a Single GPU (Dettmers et al. 2023)

QLoRA is *the* paper that opened fine-tuning to consumer hardware. Three contributions:

1. **4-bit NormalFloat (NF4) quantization** of the base model weights. Custom data type that's information-theoretically optimal for normally-distributed weights (which transformer weights approximately are after training).
2. **Double quantization**, quantize the *quantization constants* themselves. Saves an extra 0.4 bits/param.
3. **Paged optimizer states**, use NVIDIA's unified memory to spill optimizer state to CPU when VRAM is tight.

The combined trick: train a 70B model on a *single* 48GB-A100 (or even 24GB consumer cards for 7B models). The base is held in 4-bit; LoRA adapters in fp16; gradients only flow through the LoRA params.

```python
# Pseudo-code; bitsandbytes does the heavy lifting
from peft import LoraConfig, get_peft_model
from transformers import AutoModelForCausalLM, BitsAndBytesConfig

bnb = BitsAndBytesConfig(
    load_in_4bit=True,
    bnb_4bit_quant_type="nf4",
    bnb_4bit_use_double_quant=True,
    bnb_4bit_compute_dtype=torch.bfloat16,
)
base = AutoModelForCausalLM.from_pretrained("meta-llama/Llama-3.1-8B", quantization_config=bnb)

lora_config = LoraConfig(
    r=16, lora_alpha=32, lora_dropout=0.05,
    target_modules="all-linear", task_type="CAUSAL_LM"
)
model = get_peft_model(base, lora_config)
model.print_trainable_parameters()
# trainable params: 41,943,040 || all params: 8,072,777,728 || trainable%: 0.52
```

### Memory math (8B model, batch 4, seqlen 2048)

| Component | fp16 (full FT) | LoRA (r=16) | QLoRA (4-bit base) |
|-----------|----------------|--------------|----------------------|
| Base weights | 16 GB | 16 GB | 4 GB |
| Gradients | 16 GB | 0.08 GB | 0.08 GB |
| Optimizer state | 32 GB | 0.16 GB | 0.16 GB |
| Activations | ~10 GB | ~10 GB | ~10 GB |
| **Total** | **~74 GB** | **~26 GB** | **~14 GB** |

QLoRA an 8B model on a 16GB consumer GPU. The whole post-2023 fine-tuning ecosystem rests on this.

---

## 📊 Training Data, The 90% of the Effort

Garbage in, garbage model. The training set is where most fine-tunes succeed or fail.

### Format

Conversational SFT (supervised fine-tuning) data is typically:

```json
[{"role": "system", "content": "..."},
 {"role": "user", "content": "..."},
 {"role": "assistant", "content": "..."}]
```

For instruction tuning:
```json
{"instruction": "...", "input": "...", "output": "..."}
```

### Quantity

Modern guidance, much-evolved:

- **Behavioral / style adjustment:** 100–1,000 examples often enough
- **Domain adaptation:** 1,000–10,000 examples
- **New capability:** 10,000+ examples, often 100K+

LIMA (Zhou et al. 2023) showed *high-quality* 1,000-example fine-tunes can produce strong instruction-following models. Quality dominates quantity past a certain floor.

### Quality bar

- **Consistency**, every example should reflect the behavior you want
- **Diversity**, cover the spectrum of inputs you expect
- **Difficulty distribution**, include hard cases, not just easy ones
- **No leakage**, eval set strictly disjoint from train

### Tools

- **HuggingFace `datasets`**, load, transform, version
- **Argilla / Labelbox**, human labeling pipelines
- **DSPy / Weave**, programmatic dataset construction from production logs
- **Synthetic data**, let a stronger model generate training data for a smaller one (with verification)

---

## 🌅 The Full Training Recipe (TRL / Unsloth)

Hugging Face's `trl` library is the standard. Unsloth is a popular 2x-faster wrapper for QLoRA specifically.

### Three training paradigms

| Paradigm | What it does | Library |
|----------|--------------|---------|
| **SFT** (Supervised Fine-Tuning) | Minimize next-token loss on `(input, target)` pairs | `trl.SFTTrainer` |
| **DPO** (Direct Preference Optimization) | Train on (chosen, rejected) preference pairs without a reward model | `trl.DPOTrainer` |
| **RLHF / PPO** | Train a reward model, then RL the policy against it | `trl.PPOTrainer`; rare outside frontier labs |
| **KTO** (Kahneman-Tversky Optimization) | Like DPO but doesn't need pairs, just thumbs-up/down labels | `trl.KTOTrainer` |
| **ORPO / SimPO** | Variants that combine SFT + preference learning | `trl.ORPOTrainer` |
| **RFT / Reasoning Fine-Tuning** | Train on chain-of-thought traces; rewards correct final answers | New OpenAI method; community implementations |

For most teams in 2026: **SFT for the first pass; DPO if you have preference data.** Skip PPO unless you have a frontier-lab compute budget.

### Hyperparameter starting points

| Hyperparameter | LoRA recipe (typical) |
|----------------|------------------------|
| Learning rate | 2e-4 (LoRA), 5e-5 (full FT) |
| Batch size | 16–32 (with grad accumulation if needed) |
| Epochs | 1–3 |
| Warmup | 10% of steps |
| Scheduler | Cosine |
| Weight decay | 0.01 |
| Max grad norm | 1.0 |
| Sequence length | 2048–4096 |
| LoRA r | 16 |
| LoRA alpha | 32 |
| LoRA dropout | 0.05 |

These are starting points, not gospel. Always tune on a small held-out set first.

---

## 🌐 The OpenAI / Anthropic / Gemini Fine-Tuning APIs

Major API-only providers have managed fine-tuning offerings.

### OpenAI (GA since 2023; updated continuously)

- Models eligible: GPT-4o-mini, GPT-4o, GPT-4.1, GPT-5 (when enabled)
- Format: JSONL of chat messages
- Methods: SFT and DPO (DPO added in late 2024)
- Pricing: ~$8 / 1M training tokens for GPT-4o; inference at ~2× base
- Vision / multimodal fine-tuning supported on GPT-4o family

### Anthropic (Claude fine-tuning, in beta as of 2025)

- Initially available for Claude 3 Haiku via Amazon Bedrock
- SFT + DPO
- Bedrock-managed inference

### Google (Gemini)

- Vertex AI hosts SFT for Gemini Flash / Pro
- ~$5/1M training tokens

🎯 **API fine-tuning trade-off:** you trade *control* for *operational simplicity*. You can't see the training loss; you can't tune the learning rate; you can't merge LoRAs across runs. But you don't operate a GPU cluster.

---

## 🚢 Serving a Fine-Tuned Model

Three deployment patterns:

### 1. Merged LoRA into a single model checkpoint

Apply `W' = W + B·A` once; export. No runtime overhead vs base. Standard for production serving where the LoRA won't change frequently.

### 2. LoRA adapter at runtime (multi-tenant)

Hold the base model in VRAM; swap LoRAs per request. vLLM and TGI support this via PEFT integration. Lets one base model serve dozens of customers' tuned adapters.

### 3. API provider hosts it

OpenAI / Bedrock / Vertex hold the fine-tuned weights; you hit a regular API endpoint with a slightly different model name. Zero ops; full vendor lock-in.

---

## 🚨 Anti-patterns

| Anti-pattern | What goes wrong |
|--------------|------------------|
| Fine-tuning before exhausting prompt engineering + RAG | Wasted weeks; problem returns next quarter |
| Training on a few hundred low-quality examples | Catastrophic forgetting + drift |
| Not holding out an eval set | You're optimizing your perception, not the model |
| Mixing eval and train (leakage) | Numbers look great; production is broken |
| Tuning learning rate before having a working baseline | You're optimizing in the dark |
| Using full fine-tuning when LoRA would have worked | Wasted compute, often worse generalization |
| Fine-tuning Q/V only on a domain that needs FFN learning | Ceiling lower than necessary |
| Skipping `print_trainable_parameters()` | Easy to miss that no params are actually trainable |
| Distilling without verifying the *teacher* is correct | Garbage propagates |

---

## 🏗️ Lab: QLoRA Fine-Tune a 7–8B Model on a Single 24 GB GPU

Goal: fine-tune Llama-3.1-8B (or Mistral-7B-v0.3) on the [tatsu-lab/alpaca](https://huggingface.co/datasets/tatsu-lab/alpaca) instruction-following dataset, using QLoRA on a single A10G / RTX 4090 / similar consumer GPU.

Steps:

1. Load the base in 4-bit (NF4 + double quant)
2. Inject LoRA (r=16, alpha=32, target=`all-linear`)
3. Use `trl.SFTTrainer` for 1 epoch (~1.5h on a 4090)
4. Evaluate on held-out alpaca-eval prompts
5. Merge LoRA + base, push to Hugging Face Hub
6. Test inference with `transformers` and with vLLM
7. *Bonus:* tune the same model with DPO on `argilla/distilabel-intel-orca-dpo-pairs`

You'll learn the practical realities, out-of-memory errors, learning-rate sensitivity, what a healthy loss curve looks like, what overfitting looks like at LoRA scale.

---

## 📊 Case Study, Bloomberg's BloombergGPT vs OpenAI-Fine-Tuned Approach (2024 retrospective)

**Situation.** In March 2023, Bloomberg published *BloombergGPT*, a 50B-parameter LLM trained from scratch on their 363B-token financial corpus. It outperformed GPT-3 on financial NLP tasks and was widely cited as a vindication of "domain-specific from-scratch training."

**The 2024 retrospective.** A year later, multiple teams reported that **GPT-4 with a well-engineered RAG + light fine-tuning** matched or exceeded BloombergGPT on the same Bloomberg-published benchmarks. Anthropic published a Claude 3.5 Sonnet result that exceeded BloombergGPT *zero-shot*. The cost: BloombergGPT was estimated at $5–10M to train; the RAG-plus-FT alternatives cost <$50K.

**The lesson** isn't "BloombergGPT was a mistake", it had real privacy and ops benefits. The lesson is: in 2026, **base model strength + retrieval + selective fine-tuning beats domain-specific from-scratch training** for almost everyone. The exceptions are:

- Hard data-residency requirements that forbid third-party APIs
- Truly proprietary patterns (proprietary trading signals) that you can't expose to a third party even via RAG
- Frontier labs themselves

**For you, the engineer:** the question "should we train our own model?" should be answered *very* skeptically. Defer it as long as possible. Almost always, you don't need to.

**Discussion (Socratic).**
- **Q1:** Bloomberg's training data was proprietary. Could a RAG-based competitor have replicated the bench score *without* access to that data? What's the role of *training data* vs *model weights* in domain adaptation?
- **Q2:** A team comes to you saying "we want to be like BloombergGPT for the legal industry." Walk them through the prompt → RAG → fine-tune decision tree. When would you *actually* recommend training from scratch?
- **Q3:** Estimate the QLoRA-fine-tune cost of Llama-3-8B on 10K legal-Q&A pairs. Compare to the API cost of running 1M GPT-4o queries against a strong RAG system. Where does the break-even lie?

---

## ✅ Module 5 Summary

You now know:

- ⚖️ The prompt → RAG → fine-tune ordering and how to *actually* decide
- 🧠 Why full fine-tuning is rarely the right answer
- 🎯 PEFT family: LoRA, QLoRA, DoRA, prefix tuning, prompt tuning, IA3, adapters
- 🧪 LoRA math: `ΔW = B · A`, r, alpha, target_modules
- 💰 QLoRA: 4-bit NF4 + double quant + paged optimizers → consumer-GPU fine-tunes
- 📊 Training paradigms: SFT, DPO, KTO, ORPO, PPO, RFT
- 🌐 Managed fine-tuning APIs: OpenAI, Anthropic (Bedrock), Vertex (Gemini)
- 🚢 Serving merged LoRA, dynamic LoRA, API-hosted

**Next steps:**
1. 🎥 [Videos.md](./Videos.md)
2. ✏️ [Quiz.md](./Quiz.md)
3. 📋 [Cheat-Sheet.md](./Cheat-Sheet.md)
4. ➡️ Move on: [Module 6, Multi-Agent Systems](../Module-06-Multi-Agent-Systems/Reading.md)

> **Where this leads.**
> - Module 7 covers eval, you'll evaluate the QLoRA model from your lab against the base.
> - Module 9 covers serving the fine-tuned model with vLLM, including LoRA adapter swapping.

---

## 📚 Further Reading (Optional)

- 📄 Hu et al. (2021). *LoRA: Low-Rank Adaptation of Large Language Models.*
- 📄 Dettmers et al. (2023). *QLoRA: Efficient Finetuning of Quantized LLMs.*
- 📄 Liu et al. (2024). *DoRA: Weight-Decomposed Low-Rank Adaptation.*
- 📄 Rafailov et al. (2023). *Direct Preference Optimization.*
- 📄 Zhou et al. (2023). *LIMA: Less Is More for Alignment.*
- 📖 [HuggingFace PEFT documentation](https://huggingface.co/docs/peft)
- 📖 [TRL documentation](https://huggingface.co/docs/trl)
- 📖 [Unsloth GitHub](https://github.com/unslothai/unsloth), 2× faster QLoRA
- 🎬 Sebastian Raschka, *LoRA from Scratch* series
- 🎬 Tim Dettmers (QLoRA author) talks
