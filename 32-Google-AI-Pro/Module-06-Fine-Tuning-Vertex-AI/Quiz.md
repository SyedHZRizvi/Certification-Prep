# ✏️ Module 6 Quiz: Fine-Tuning on Vertex AI

> Aim for 21/25.

---

## Questions

### Q1. Fine-tuning is BEST described as: *(Remember)*
A. Adding new knowledge to a model
B. Gradient descent on model weights to shape behavior (style, format, vocabulary)
C. Compressing the model
D. Replacing the base model entirely

---

### Q2. For "new knowledge that changes frequently," the BEST tool is: *(Apply)*
A. Supervised fine-tuning
B. RAG
C. RLHF
D. Distillation

---

### Q3. The 5 rungs of the customization ladder, from simplest to most complex: *(Understand)*
A. SFT → RLHF → prompt → RAG → DPO
B. Better prompt → few-shot → RAG → SFT → RLHF/DPO
C. Distillation → SFT → prompt → RAG → RLHF
D. Random

---

### Q4. Adore Me discovered that for product copy across 3K SKUs, the right answer was NOT fine-tuning. The actual solution: *(Analyze)*
A. Switch to OpenAI
B. Precise system_instruction + few-shot prompt + RAG over brand guidelines
C. Fine-tune Gemini Ultra
D. Build their own model

---

### Q5. The MOST common Gemini tier for SFT on Vertex AI: *(Remember)*
A. Nano
B. Flash
C. Ultra
D. Not supported

---

### Q6. Vertex AI's SFT under the hood uses: *(Understand)*
A. Full-parameter fine-tuning
B. LoRA (Low-Rank Adaptation) / parameter-efficient adapters
C. Random weight reset
D. Distillation only

---

### Q7. The hyperparameter controlling LoRA rank on Vertex AI is: *(Remember)*
A. `epochs`
B. `learning_rate_multiplier`
C. `adapter_size`
D. `batch_size`

---

### Q8. The MAIN advantage of LoRA over full-parameter fine-tuning: *(Understand)*
A. Better accuracy guaranteed
B. 10-100× fewer parameters to train; faster; cheaper; multiple adapters can coexist
C. Bigger model
D. Smaller dataset works

---

### Q9. The Vertex AI tuning dataset format is: *(Remember)*
A. CSV
B. JSONL with conversation-shaped examples (`contents` with `user`/`model` roles)
C. XML
D. Parquet

---

### Q10. Minimum recommended data for a "style/tone" fine-tune: *(Apply)*
A. 5 examples
B. 100 minimum; 500–1000 recommended
C. 1M
D. Examples not needed

---

### Q11. Catastrophic forgetting after fine-tuning manifests as: *(Understand)*
A. Lower training loss
B. The model loses general capabilities (answers "I don't know" to general questions)
C. The training crashes
D. The model becomes faster

---

### Q12. RLHF on Vertex AI is MOST appropriate when: *(Apply)*
A. You have new knowledge to add
B. You have human pairwise preference rankings (better vs worse) and need subjective quality tuning beyond SFT
C. You need cheaper inference
D. You need faster training

---

### Q13. DPO (Direct Preference Optimization) differs from RLHF in that: *(Understand)*
A. DPO requires more humans
B. DPO directly optimizes on preference pairs WITHOUT the RL phase + reward model, simpler pipeline
C. DPO is older
D. They are identical

---

### Q14. Distillation on Vertex AI: *(Understand)*
A. Compresses the base model
B. Trains a small "student" (e.g. Gemini Flash) to mimic a large "teacher" (e.g. Gemini Pro) on a target task
C. Removes safety_settings
D. Replaces RAG

---

### Q15. A team wants Pro-quality summaries at Flash-tier cost on a high-volume background job. BEST approach: *(Apply)*
A. Just use Flash with better prompts (often insufficient on hard tasks)
B. Distill Pro → Flash via SFT on Pro's outputs
C. Use Ultra
D. Skip the summaries

---

### Q16. A 500-example fine-tune for a 20-class classification task underperforms. MOST LIKELY cause: *(Apply)*
A. Need bigger model
B. Insufficient data per class (25 each is too few)
C. Wrong region
D. CMEK expired

---

### Q17. After fine-tuning, the validation loss flattens at epoch 1. Doubling epochs will MOST LIKELY: *(Analyze)*
A. Improve quality
B. Overfit (memorize training, degrade on holdout)
C. Save money
D. Nothing

---

### Q18. The CORRECT data split for fine-tuning: *(Apply)*
A. 100% train
B. 80% train / 10% validation / 10% holdout (untouched until final eval)
C. 50/50
D. Random shuffle each epoch

---

### Q19. Mayo Clinic's MedLM deployment combines: *(Analyze)*
A. Pure base Gemini
B. Pre-domain-tuned MedLM + lightweight institutional SFT for Mayo-specific note templates
C. Self-hosted Llama
D. No customization

---

### Q20. Tuned models on Vertex AI typically cost: *(Remember)*
A. Less per token than base
B. Slightly more per token than the base model (additional adapter serving + training cost amortization)
C. Free
D. Same

---

### Q21. To rollback a bad fine-tune on Vertex AI: *(Apply)*
A. Wait for next release
B. Discard the tuned-model endpoint; the base model remains untouched
C. Reinstall the platform
D. Not possible

---

### Q22. A team fine-tunes for medical Q&A. They want Gemini to never recommend specific drug dosages. The BEST mechanism: *(Apply)*
A. Add a constraint to fine-tuning data + system_instruction + safety_settings + monitoring + human-in-loop review
B. Fine-tuning alone
C. Just system_instruction
D. Disable safety_settings

---

### Q23. To evaluate a fine-tuned model fairly: *(Apply)*
A. Evaluate on training data
B. Evaluate on holdout (never seen) + compare base vs tuned + check out-of-distribution for forgetting
C. Trust the training loss
D. Skip evaluation

---

### Q24. Which is FALSE? *(Evaluate)*
A. Fine-tuning shapes behavior, not knowledge
B. RLHF is always better than SFT for production tuning
C. LoRA freezes base weights and trains adapters
D. Distillation can give Pro quality at Flash cost on narrow tasks

---

### Q25. Design challenge: A bank wants Gemini to classify customer-service tickets into 80 proprietary categories. They have 50K labeled tickets. The MINIMUM viable approach: *(Create)*
A. Random model
B. Splits: 80/10/10 → SFT on Gemini Flash with adapter_size=4 → eval on holdout against base Flash → register to Model Registry → deploy via Endpoint canary with traffic_split → monitor → rollback if drift; consider monthly retrain
C. Pure prompting
D. Self-host a 70B model

---

## 🎯 Answers + Explanations

### Q1: **B. Gradient descent on weights to shape behavior**

### Q2: **B. RAG**
Knowledge updates = RAG, not FT.

### Q3: **B. Prompt → few-shot → RAG → SFT → RLHF/DPO**

### Q4: **B. system_instruction + few-shot + RAG**
The canonical Adore Me lesson.

### Q5: **B. Flash**
Most-tuned tier; cost-effective and well-supported.

### Q6: **B. LoRA / parameter-efficient adapters**

### Q7: **C. `adapter_size`**
Controls LoRA rank.

### Q8: **B. 10-100× fewer parameters; faster; cheaper; multi-adapter**

### Q9: **B. JSONL with conversation-shaped examples**

### Q10: **B. 100 minimum; 500–1000 recommended**

### Q11: **B. Lost general capabilities**

### Q12: **B. Have pairwise preferences; need subjective tuning**

### Q13: **B. DPO has no RL phase / no reward model**

### Q14: **B. Small student mimics large teacher on target task**

### Q15: **B. Distill Pro → Flash**

### Q16: **B. Insufficient data per class (25 each)**

### Q17: **B. Overfit**
Val loss flat = signal to stop, not double down.

### Q18: **B. 80/10/10 holdout untouched**

### Q19: **B. MedLM (pre-tuned) + lightweight institutional SFT**
Two-step avoids catastrophic forgetting of medical knowledge.

### Q20: **B. Slightly more per token**

### Q21: **B. Discard tuned-model endpoint; base remains**

### Q22: **A. Constraint in data + system_instruction + safety_settings + monitoring + HIL**
Defense in depth, not single layer.

### Q23: **B. Holdout + base/tuned compare + OOD check**

### Q24: **B. RLHF is always better, FALSE**
SFT is usually the right first step.

### Q25: **B. Splits + SFT Flash + eval + Registry + Endpoint canary + monitoring + rollback**

---

## 📊 Score Yourself

- 24–25/25 → 🏆 Module 6 mastered.
- 21–23/25 → ✅ Solid.
- <21/25 → Re-read the customization ladder + decision matrix.

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 7, Agent Builder & Conversational AI](../Module-07-Agent-Builder-Conversational/Reading.md)
