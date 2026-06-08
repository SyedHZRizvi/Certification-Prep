# ✏️ Module 5 Quiz: Fine-Tuning, PEFT & LoRA

> 26 questions · aim 22/26.

---

## Questions

### Q1. The standard rule of thumb for "which lever to pull first": *(Remember)*
A. Fine-tune → RAG → Prompt
B. Prompt → RAG → Fine-tune
C. Train from scratch → Fine-tune → Prompt
D. Random

---

### Q2. LoRA's core hypothesis is that: *(Understand)*
A. Models are too small
B. The weight update ΔW during fine-tuning has low intrinsic rank, so a rank-r approximation captures most of it
C. Attention is broken
D. SGD doesn't work

---

### Q3. For a layer with d=4096 and LoRA rank r=8, the trainable parameter count is: *(Apply)*
A. 16M
B. ~65K (`4096·8 + 8·4096`)
C. 32M
D. 256

---

### Q4. QLoRA's three contributions are: *(Remember)*
A. 4-bit NormalFloat quantization, double quantization, paged optimizer states
B. New attention, new tokenizer, new sampler
C. Cloud GPUs, magic, free training
D. RLHF, DPO, KTO

---

### Q5. A team has 100 high-quality examples of the *exact behavior* they want. The Module 5 guidance for "is that enough?": *(Apply)*
A. Definitely insufficient
B. Possibly sufficient for behavior/style adjustment (per LIMA); insufficient for new factual knowledge
C. Definitely enough for any task
D. Quantity-only matters

---

### Q6. The PRIMARY failure mode of the "$84K legal-tech mistake" was: *(Analyze)*
A. Wrong GPU
B. Fine-tuning style/persona while the actual gap was factual knowledge, RAG would have solved it for ~$2K
C. Wrong tokenizer
D. Too few epochs

---

### Q7. DPO (Direct Preference Optimization) trains on: *(Remember)*
A. Single labeled examples
B. (chosen, rejected) preference pairs, without a separate reward model
C. Unlabeled text
D. Reinforcement-learning rollouts only

---

### Q8. The PRIMARY memory benefit of QLoRA is that: *(Understand)*
A. The base model is held in 4-bit, freeing VRAM for gradients + activations on LoRA
B. It quantizes the LoRA adapters
C. It doesn't use any GPU memory
D. It runs on CPU

---

### Q9. The most common modern LoRA `target_modules` setting: *(Remember)*
A. `["q_proj"]` only
B. `"all-linear"` (or Q/K/V/O + MLP projections)
C. Embeddings only
D. None

---

### Q10. A common starting learning rate for LoRA SFT on a 7B model: *(Apply)*
A. 2e-4
B. 0.5
C. 1e-8
D. 100

---

### Q11. "Catastrophic forgetting" in fine-tuning is: *(Understand)*
A. Forgetting where the model is saved
B. The fine-tuned model loses general capabilities while gaining the narrow target capability
C. A type of OOM error
D. Random

---

### Q12. The MOST common reason a 1000-example fine-tune fails to improve a model: *(Analyze)*
A. Too few epochs
B. Low data quality / inconsistency / leakage
C. Wrong GPU
D. Wrong tokenizer

---

### Q13. Vision/multimodal fine-tuning is supported on: *(Remember)*
A. Text-only models
B. GPT-4o family on OpenAI's API; some open-weight VLMs (LLaVA, Idefics) via PEFT
C. Nothing
D. Only Gemini

---

### Q14. The simplest way to serve a single fine-tuned LoRA in production with no inference overhead: *(Apply)*
A. Always-on adapter loading
B. Merge LoRA into the base weights (`W' = W + B·A`) and deploy as a regular model
C. Use a different model
D. Run on CPU

---

### Q15. Multi-tenant LoRA serving (different LoRAs per customer) is supported by: *(Remember)*
A. No serving stack
B. vLLM and TGI with PEFT adapter loading
C. Postgres
D. SQL

---

### Q16. A 70B model full-fine-tune requires approximately how much GPU VRAM (fp16, conservative): *(Apply)*
A. 24 GB
B. 80 GB
C. 600+ GB (multi-GPU)
D. 8 GB

---

### Q17. The PRIMARY argument against from-scratch domain LLMs (e.g., BloombergGPT-style) in 2026: *(Evaluate)*
A. Base + RAG + light FT routinely matches or exceeds them at 1–2 orders of magnitude lower cost
B. They are illegal
C. They don't work
D. They are too small

---

### Q18. RLHF's full pipeline is: *(Understand)*
A. SFT only
B. SFT → train a reward model → PPO (RL) against the reward
C. Embed only
D. Tokenize only

---

### Q19. ORPO (Hong et al. 2024) combines: *(Remember)*
A. SFT-like loss with a preference term, in one pass (no separate SFT and DPO stages)
B. Two unrelated models
C. Tokenization + sampling
D. Embeddings + retrieval

---

### Q20. The `alpha` hyperparameter in LoRA: *(Understand)*
A. Has no effect
B. Scales the LoRA contribution (`effective scale = alpha / r`); common default `alpha = 2·r`
C. Sets the temperature
D. Sets the learning rate

---

### Q21. Fine-tuning purely to "make the model sound more confident" is: *(Evaluate)*
A. Good practice
B. Dangerous in domains like legal/medical/finance, where confident-but-wrong is the worst failure mode
C. Free
D. Required

---

### Q22. The recommended evaluation protocol after fine-tuning includes: *(Apply)*
A. Vibes-check only
B. Held-out eval set (no leakage), domain-specific metrics, regression on general capabilities (LIMA-style), and human review
C. Train-set accuracy only
D. The model's own self-assessment

---

### Q23. The "data > model" lesson from LIMA (Zhou et al. 2023) is: *(Understand)*
A. More data always helps
B. 1,000 carefully-curated examples can produce a model competitive with much larger SFT runs
C. Models don't matter
D. Random data wins

---

### Q24. A team wants to fine-tune a 70B model on a single 80GB H100. Approach: *(Apply)*
A. Full fine-tune is impossible without sharding
B. QLoRA (NF4 base) + LoRA adapters fits comfortably; ~50 GB peak
C. Switch to Llama 3 8B and full FT
D. Switch to CPU

---

### Q25. The `print_trainable_parameters()` call in `peft`: *(Remember)*
A. Prints debugging info
B. Reports the count and percentage of trainable params (critical sanity check that LoRA was actually applied)
C. Prints weights
D. Is required for inference

---

### Q26. Design challenge: A startup with $20K budget needs a customer-service assistant that (a) answers from a 5,000-page product manual, (b) speaks in a consistent friendly tone unique to their brand, (c) refuses unsafe questions. Minimal viable approach: *(Create)*
A. Train BloombergGPT-style 50B from scratch
B. Production GPT-4o-mini (or Claude Haiku) with RAG over the manual + a ~500-example SFT for tone + a small DPO pass on safety preferences + guardrails
C. Random
D. Vibes alone

---

## 🎯 Answers + Explanations

### Q1: **B. Prompt → RAG → Fine-tune**
Cheapest first, expensive last. The decision tree of GenAI ops.

### Q2: **B. The weight update is low intrinsic rank**
LoRA's defining hypothesis. Empirically robust.

### Q3: **B. ~65K (`4096·8 + 8·4096`)**
A: rxd, B: dxr. ~250× reduction from full d² = 16M.

### Q4: **A. NF4 + double quantization + paged optimizers**
The three engineering tricks of QLoRA.

### Q5: **B. Possibly enough for behavior/style; insufficient for new facts**
LIMA showed 1K examples can produce strong instruction-following models *when data is high quality*. Facts need RAG.

### Q6: **B. Wrong tool for the gap (style FT, but factual gap)**
The single most common production fine-tuning mistake.

### Q7: **B. (chosen, rejected) preference pairs without a reward model**
DPO is the "skip the reward model" trick. Cheap to run; widely deployed.

### Q8: **A. 4-bit base frees VRAM for gradients/activations**
Adapters stay in fp16; flow gradients only through them.

### Q9: **B. `"all-linear"` (or Q/K/V/O + MLP)**
Modern default for capacity. Original paper used Q/V only; "all-linear" is the contemporary preference.

### Q10: **A. 2e-4**
Standard LoRA SFT starting point. Full FT is closer to 5e-5.

### Q11: **B. Loses general capability while gaining narrow capability**
The classic risk. Mitigations: smaller LR, fewer epochs, regularization, mix-in general-purpose data.

### Q12: **B. Low data quality / inconsistency / leakage**
Garbage in, garbage out. Quality beats quantity past a floor.

### Q13: **B. GPT-4o family + open VLMs**
OpenAI added vision FT in 2024. Open-weight VLMs (LLaVA, Idefics) support PEFT.

### Q14: **B. Merge LoRA into base; deploy as a single checkpoint**
Zero inference overhead.

### Q15: **B. vLLM and TGI with PEFT**
Modern serving stacks support runtime LoRA loading per request.

### Q16: **C. 600+ GB**
Weights + gradients + optimizer state + activations for a 70B add up fast. Multi-GPU + sharding (FSDP, DeepSpeed Zero) is required.

### Q17: **A. Base + RAG + light FT matches at 1-2 orders of magnitude less cost**
The 2024 retrospective on BloombergGPT vs RAG-on-Claude/GPT-4.

### Q18: **B. SFT → reward model → PPO**
The original RLHF pipeline. Expensive; mostly replaced by DPO in industry.

### Q19: **A. SFT + preference loss in one pass**
ORPO eliminates the separate SFT stage. Smaller compute, comparable quality.

### Q20: **B. Scales LoRA contribution; default alpha = 2r**
Effective scale is `alpha / r`. Doubles act as an "extra LR" for LoRA matrices.

### Q21: **B. Dangerous in legal/medical/finance**
The single most common cause of "confident hallucination" in fine-tuned models.

### Q22: **B. Held-out + domain metrics + general regression + human review**
Single-metric eval is incomplete. Module 7 details the eval architecture.

### Q23: **B. 1K well-curated examples is enough for many tasks**
The LIMA insight reshaped the post-2023 fine-tuning playbook.

### Q24: **B. QLoRA fits comfortably on one 80GB H100**
Without QLoRA, even one 80GB H100 cannot full-FT a 70B model.

### Q25: **B. Trainable params + percentage, the critical sanity check**
First thing you check after instantiating a PEFT model. Catches "I forgot to apply LoRA" and "I LoRA'd the wrong modules."

### Q26: **B. RAG + small SFT + DPO + guardrails**
Cheap, fast, ships in a quarter. From-scratch training is unjustifiable at this budget.

---

## 📊 Score Yourself

- 24–26 → 🏆 Fine-tune engineer.
- 21–23 → ✅ Strong.
- 17–20 → ⚠️ Re-read the decision tree + QLoRA sections.
- <17 → 🔁 Re-do Raschka + Dettmers videos.

---

## 🃏 Add To Your Flashcards

- Prompt → RAG → Fine-tune (in that order)
- LoRA: `ΔW = B·A`, rank r, alpha, dropout, target_modules
- QLoRA: NF4 + double quant + paged optimizers
- SFT / DPO / KTO / ORPO / PPO / RFT
- LIMA insight: 1K curated > 100K low-quality
- LoRA serving: merged vs runtime-adapter vs API
- Catastrophic forgetting + mitigations

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 6, Multi-Agent Systems](../Module-06-Multi-Agent-Systems/Reading.md)
