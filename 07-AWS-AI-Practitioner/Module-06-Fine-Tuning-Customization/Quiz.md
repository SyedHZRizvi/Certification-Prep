# ✏️ Module 6 Quiz: Fine-Tuning & Customization

> **Instructions:** Answer all 24 questions WITHOUT looking at the reading.
> Then check your answers below. Aim for 20/24 minimum.

---

## Questions

### Q1. A retailer wants its chatbot to know about THIS WEEK'S new product catalog. The BEST customization is: *(Apply)*
A. Prompt engineering only
B. RAG (Knowledge Bases for Bedrock)
C. Fine-tuning
D. Continued pre-training

---

### Q2. A bank wants the chatbot to ALWAYS reply in strict legalese with a specific JSON structure even when given casual prompts. The BEST approach is: *(Apply)*
A. Lower temperature
B. RAG
C. Fine-tuning
D. Continued pre-training

---

### Q3. Which approach is the CHEAPEST and FASTEST to try first? *(Remember)*
A. Prompt engineering
B. RAG
C. Fine-tuning
D. Continued pre-training

---

### Q4. Which approach uses the MOST data and is the MOST expensive? *(Understand)*
A. Prompt engineering
B. RAG
C. Fine-tuning
D. Continued pre-training

---

### Q5. Fine-tuning data for Bedrock customization is typically provided as: *(Remember)*
A. CSV in DynamoDB
B. A JSONL file in S3
C. Parquet in Athena
D. Raw images in EFS

---

### Q6. After fine-tuning a Bedrock model, to invoke it for inference you must: *(Apply)*
A. Re-upload to PartyRock
B. Purchase Provisioned Throughput
C. Use SageMaker JumpStart
D. Move it to EC2

---

### Q7. Which is the CORRECT pairing of metric to task? *(Analyze)*
A. BLEU → image generation
B. ROUGE → summarization
C. Perplexity → translation
D. BERTScore → object detection

---

### Q8. BLEU is the MOST traditional metric for: *(Remember)*
A. Machine translation
B. Summarization
C. Time-series forecasting
D. Reinforcement learning

---

### Q9. "Lower perplexity is better" is: *(Understand)*
A. False — higher is better
B. True — lower perplexity means the model is less surprised
C. Only true for image models
D. Irrelevant to LLMs

---

### Q10. RLHF stands for: *(Remember)*
A. Reinforcement Learning from Hidden Features
B. Reinforcement Learning from Human Feedback
C. Random Loss with Hyperparameter Filtering
D. Recurrent Learning High Fidelity

---

### Q11. PEFT and LoRA are techniques for: *(Understand)*
A. Pre-training from scratch
B. Parameter-efficient fine-tuning of large models
C. Database sharding
D. Replacing the tokenizer

---

### Q12. Continued pre-training (vs supervised fine-tuning) usually requires: *(Analyze)*
A. A small set of labeled examples
B. Large amounts of UNLABELED domain text
C. No data at all
D. Reinforcement signals

---

### Q13. "Instruction tuning" turns a base model into: *(Understand)*
A. An image generator
B. An instruction-following chat-style assistant
C. A vector database
D. A speech model

---

### Q14. The BEST heuristic for choosing RAG vs Fine-tuning is: *(Evaluate)*
A. Always fine-tune
B. RAG for facts, fine-tuning for behaviors
C. Always RAG
D. They're identical

---

### Q15. Which is a built-in evaluation type in Amazon Bedrock Model Evaluation? *(Apply)*
A. SQL benchmark
B. Automatic, Human, Knowledge Base, and LLM-as-judge evaluations
C. GPU benchmark
D. Network throughput tests

---

### Q16. Which metric is BEST for measuring SEMANTIC similarity using embedding models? *(Apply)*
A. BLEU
B. ROUGE
C. BERTScore
D. F1

---

### Q17. To use a custom (fine-tuned) Bedrock model, you generally need: *(Remember)*
A. Provisioned Throughput
B. Spot Instances
C. AWS Outposts
D. AWS Direct Connect

---

### Q18. A startup wants to make their chatbot 10× cheaper without losing too much quality. The FIRST move is: *(Evaluate)*
A. Switch to a smaller / cheaper model (Haiku, Nova Micro)
B. Hire more engineers
C. Move to AWS GovCloud
D. Delete the system prompt

---

### Q19. "DPO" (Direct Preference Optimization) is BEST described as: *(Understand)*
A. A vector store
B. An alternative to RLHF using preference pairs
C. A SageMaker endpoint type
D. An IAM policy

---

### Q20. To make a Bedrock workload 50% cheaper for an offline analysis job, use: *(Apply)*
A. Provisioned Throughput
B. Bedrock Batch inference
C. PartyRock
D. SageMaker Edge Manager

---

### Q21. Which is TRUE about RAG vs Fine-tuning costs? *(Analyze)*
A. Fine-tuning is cheaper than RAG every time
B. RAG is generally cheaper to add new information than re-fine-tuning, and updates instantly
C. They cost the same
D. Both require Provisioned Throughput

---

### Q22. Which approach BEST embeds a specialized vocabulary (e.g., medical or legal jargon) across an entire model's understanding? *(Create)*
A. Few-shot prompting
B. RAG
C. Fine-tuning
D. Continued pre-training

---

### Q23. "LLM-as-a-judge" is: *(Understand)*
A. A legal compliance feature
B. Using one LLM to evaluate another LLM's outputs at scale
C. A new Bedrock model
D. An IAM permission

---

### Q24. Which is NOT a typical generative AI evaluation metric? *(Analyze)*
A. BLEU
B. ROUGE
C. R² (R-squared)
D. Perplexity

---

## 🎯 Answers + Explanations

### Q1: **B. RAG**
Fresh data + need for citations + low cost + instant updates → RAG. Fine-tuning would require retraining every week.

### Q2: **C. Fine-tuning**
Strict style/format/behavior on a niche domain → fine-tuning. RAG can supply facts but not enforce tone consistently.

### Q3: **A. Prompt engineering**
Always start here. Often solves 80% of problems with no infra.

### Q4: **D. Continued pre-training**
Massive unlabeled corpus + huge compute → most expensive customization.

### Q5: **B. JSONL in S3**
Bedrock fine-tuning expects newline-delimited JSON in an S3 bucket.

### Q6: **B. Provisioned Throughput**
Customized Bedrock models require dedicated capacity (model units) to serve inference.

### Q7: **B. ROUGE → summarization**
BLEU = translation, ROUGE = summarization, perplexity = intrinsic LM quality, BERTScore = semantic similarity.

### Q8: **A. Machine translation**
BLEU has been the translation gold standard since 2002.

### Q9: **B. Lower is better**
Perplexity ≈ how surprised the model is by held-out text. Lower = better fit.

### Q10: **B. Reinforcement Learning from Human Feedback**
Standard alignment technique for Claude/GPT/Llama-chat.

### Q11: **B. Parameter-efficient fine-tuning**
Train small adapters (LoRA) instead of all weights — cheap and fast.

### Q12: **B. Large amounts of UNLABELED domain text**
Continued pre-training extends base pre-training; fine-tuning uses small labeled sets.

### Q13: **B. Instruction-following assistant**
Turns a raw text-prediction model into a chat-style helper.

### Q14: **B. RAG for facts, fine-tuning for behaviors**
The most-repeated heuristic on this exam.

### Q15: **B. Automatic, Human, KB, LLM-as-judge**
Bedrock Model Evaluation supports all four flavors.

### Q16: **C. BERTScore**
Embedding-based semantic similarity — closer to human judgment than n-gram overlap.

### Q17: **A. Provisioned Throughput**
Required to serve custom Bedrock models. Same answer as Q6 by design.

### Q18: **A. Smaller / cheaper model**
Switching from Opus / Premier to Haiku / Nova Micro can drop cost 10–30×. Try this before fancy infra changes.

### Q19: **B. Alternative to RLHF**
DPO uses preference pairs to align models directly, simpler than full RLHF.

### Q20: **B. Bedrock Batch inference**
~50% discount, async, ≤24 h SLA. Perfect for offline analysis.

### Q21: **B. RAG is cheaper for updates and is instant**
Re-indexing docs is far cheaper than re-fine-tuning + redeploying.

### Q22: **D. Continued pre-training**
Embedding a brand-new domain's vocabulary across a model's weights is exactly what continued pre-training is for.

### Q23: **B. Use one LLM to evaluate another at scale**
Replaces a lot of human eval; available in Bedrock Model Evaluation.

### Q24: **C. R² (R-squared)**
R² is a regression metric. Not used for generative text evaluation.

---

## 📊 Score Yourself

- 23–24/24 → 🏆 You've mastered the customization spectrum.
- 20–22/24 → ✅ Solid.
- 17–19/24 → ⚠️ Re-read the customization comparison table and metrics section.
- <17 → 🔁 Re-do this module — it carries heavy exam weight.

---

## 🃏 Add To Your Flashcards

- 4 customization approaches with cost ordering
- "RAG for facts, fine-tuning for behaviors"
- BLEU (translation), ROUGE (summarization), Perplexity (intrinsic), BERTScore (semantic)
- RLHF, DPO, instruction tuning, PEFT/LoRA — definitions
- Provisioned Throughput required for customized Bedrock models
- Bedrock Batch = 50% off offline workloads
- 4 evaluation types in Bedrock Model Evaluation

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 7: Responsible AI](../Module-07-Responsible-AI/Reading.md)
