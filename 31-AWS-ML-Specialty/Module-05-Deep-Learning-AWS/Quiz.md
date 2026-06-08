# ✏️ Module 5 Quiz: Deep Learning on AWS

> 24 questions. Aim 19+/24. 35 min.

---

## Questions

### Q1. To train a 70-billion-parameter LLM whose weights do NOT fit on one GPU, the appropriate AWS approach is: *(Apply)*
A. SMDDP (data parallel)
B. SMMP (model parallel), tensor + pipeline + sharded-data parallel
C. SageMaker Canvas
D. Lambda

---

### Q2. The MOST cost-optimal inference choice for a high-traffic LLM on AWS is typically: *(Apply)*
A. Trainium (trn1)
B. P4 (NVIDIA A100)
C. Inferentia2 (inf2) compiled via Neuron SDK
D. T3 CPU instances

---

### Q3. Multi-node DL training scales poorly past 4 nodes, gradient all-reduce is the bottleneck. The MOST likely fix is: *(Analyze)*
A. Use cheaper instances
B. Enable EFA (Elastic Fabric Adapter) networking
C. Increase batch size to 1
D. Add a NAT Gateway

---

### Q4. To bring data into a multi-node training job with sub-millisecond access for billions of small files: *(Apply)*
A. Direct from S3 in file mode
B. FSx for Lustre linked to S3 (lazy load)
C. EFS
D. SQS

---

### Q5. The SageMaker PyTorch `Estimator` runs your custom `train.py`. This mode is called: *(Remember)*
A. Built-in algorithm mode
B. Script mode with the framework container
C. BYO container
D. Lambda mode

---

### Q6. The PRIMARY reason to use mixed precision (FP16/BF16) for DL training is: *(Understand)*
A. Encrypt the model weights
B. ~2× speedup and ~50% memory reduction on Tensor Core GPUs with minimal accuracy loss
C. Reduce network egress
D. Improve interpretability

---

### Q7. SMDDP (SageMaker Distributed Data Parallel) is BEST when: *(Apply)*
A. The model is too large for one GPU
B. The model fits on one GPU but you want more throughput across many nodes
C. You are doing batch transform
D. The model is a tree ensemble

---

### Q8. To detect vanishing gradients in a deep transformer during training: *(Apply)*
A. SageMaker Model Monitor
B. SageMaker Profiler
C. SageMaker Debugger (vanishing-gradient built-in rule)
D. CloudWatch Logs Insights

---

### Q9. The team observes that GPU utilisation is only 30% during a DL training job. The MOST likely cause is: *(Analyze)*
A. Network bandwidth oversupply
B. Data loader / I/O bottleneck, GPU is starved
C. Too much memory
D. Not enough storage

---

### Q10. SageMaker Profiler is the BEST tool to: *(Remember)*
A. Diagnose system + framework metrics (GPU util, time per step, memory) of a training job
B. Detect data drift in production
C. Apply SHAP explanations
D. Convert models to ONNX

---

### Q11. To reduce labelling cost on a 1M-image classification project, the BEST AWS approach is: *(Apply)*
A. Hire interns
B. SageMaker Ground Truth with active learning (auto-labels easy examples)
C. SageMaker Canvas
D. Glue ETL

---

### Q12. The PyTorch estimator's `distribution={"smdistributed": {"dataparallel": {"enabled": True}}}` enables: *(Understand)*
A. Model parallelism only
B. SageMaker Distributed Data Parallel
C. SageMaker Pipelines
D. Mixed precision

---

### Q13. To compile a model for Inferentia2, the BEST tool is: *(Remember)*
A. NVIDIA CUDA toolkit
B. AWS Neuron SDK (e.g. `torch_neuronx.trace`)
C. AWS Glue
D. PyTorch native CPU export

---

### Q14. AWS Trainium (trn1, trn2) is PRIMARILY designed for: *(Remember)*
A. Cost-optimal training of large models
B. SQL queries
C. Email delivery
D. Object detection inference only

---

### Q15. To quickly deploy Llama-3-8B on AWS with no custom training code: *(Apply)*
A. SageMaker JumpStart one-click deploy
B. Glue Crawler
C. Athena Federated Query
D. Lambda

---

### Q16. The Stable Diffusion training reference architecture on AWS uses (multi-select likely): *(Analyze)*
A. P4d / P5 clusters + EFA + FSx Lustre + SMDDP + mixed precision
B. Single T3 instance
C. Lambda + DynamoDB
D. ELB + Route 53

---

### Q17. Which Tensor-Core-capable GPU family is currently AWS's most common choice for cost-effective DL inference? *(Apply)*
A. P3 (V100)
B. G5 (A10G) / G6 (L4)
C. M5
D. C5

---

### Q18. To dramatically cut the cost of long DL training jobs that tolerate interruption: *(Apply)*
A. Reserved Instances
B. Use Spot training (`use_spot_instances=True`) with checkpointing to S3
C. Use larger instances
D. Use Lambda

---

### Q19. A transformer LLM is training and the loss spikes intermittently. A common mitigation is: *(Analyze)*
A. Add gradient clipping (typical norm ≈ 1.0)
B. Increase learning rate 10×
C. Disable mixed precision
D. Use SGD with momentum 0.99

---

### Q20. The default optimiser for most modern LLM training is: *(Remember)*
A. SGD
B. AdamW
C. RMSProp
D. K-Means

---

### Q21. Sharded-data parallelism (a.k.a. ZeRO / FSDP) is BEST described as: *(Understand)*
A. Splitting layers across GPUs (pipeline parallel)
B. Splitting a single matrix-multiplication across GPUs (tensor parallel)
C. Sharding the optimiser state, gradients, and parameters across data-parallel workers so each holds only its slice
D. Replicating the full model on every GPU

---

### Q22. To track per-step GPU utilisation, memory, and step time of a training job: *(Apply)*
A. SageMaker Model Monitor
B. SageMaker Profiler
C. CloudWatch Logs
D. AWS X-Ray

---

### Q23. The MAIN reason for using EFA in multi-node DL training is: *(Understand)*
A. Encryption at rest
B. Sub-microsecond, OS-bypass, HPC-grade networking for fast all-reduce
C. Easier IAM
D. Cheaper data transfer to internet

---

### Q24. To fine-tune a Hugging Face transformer on SageMaker with minimal code change: *(Apply)*
A. Use the Hugging Face framework container (script mode)
B. Build a BYO container from scratch
C. Use SageMaker Canvas
D. Use Lambda

---

## 🎯 Answers + Explanations

### Q1: **B. SMMP (tensor + pipeline + sharded-data)**
70B-parameter models do not fit on one GPU; model parallelism is required, usually combined.

### Q2: **C. Inferentia2 via Neuron**
inf2 is the cost-optimal LLM inference accelerator. Trainium is primarily a training chip; P4 is expensive for inference.

### Q3: **B. Enable EFA**
Without EFA, all-reduce gradients saturate standard networking. EFA gives HPC-grade RDMA-like throughput.

### Q4: **B. FSx for Lustre linked to S3**
Sub-millisecond file access for billions of small files; S3 lazy-load avoids upfront copy.

### Q5: **B. Script mode**
Script mode = AWS-managed framework container + your `train.py`.

### Q6: **B. ~2× speedup and ~50% memory on Tensor Cores**
Modern mixed precision uses FP16/BF16 ops with FP32 master copies, minimal accuracy loss on most workloads.

### Q7: **B. Model fits on one GPU; more throughput via more nodes**
SMDDP replicates the model and shards data. SMMP is when the model itself doesn't fit.

### Q8: **C. SageMaker Debugger (vanishing-gradient rule)**
Debugger has built-in rules for vanishing/exploding gradients, overfitting, etc.

### Q9: **B. Data loader / I/O bottleneck**
Most "GPU underutilised" symptoms come from data pipeline starvation. Solutions: more loader workers, prefetch, FSx, Pipe mode.

### Q10: **A. Diagnose system + framework metrics**
Profiler is the right tool for utilisation/timing introspection.

### Q11: **B. Ground Truth + active learning**
Active learning auto-labels easy examples; humans focus on the difficult ~30%.

### Q12: **B. SageMaker Distributed Data Parallel**
That distribution dict enables SMDDP.

### Q13: **B. AWS Neuron SDK**
Neuron replaces NVIDIA CUDA for Trainium / Inferentia.

### Q14: **A. Cost-optimal training of large models**
Trainium is purpose-built for training; Inferentia for inference.

### Q15: **A. SageMaker JumpStart**
JumpStart has one-click deploy for foundation models including Llama.

### Q16: **A. P4d/P5 + EFA + FSx + SMDDP + mixed precision**
The canonical frontier-DL training stack on AWS.

### Q17: **B. G5 / G6**
G5 (A10G) and G6 (L4) are the cost-effective inference workhorses. P3 is expensive and older; M5/C5 lack GPUs.

### Q18: **B. Spot + checkpointing**
Spot training cuts up to 90%. Checkpointing handles interruptions.

### Q19: **A. Gradient clipping (norm ≈ 1)**
The standard transformer training-stability move. (Higher LR or no AMP would worsen instability.)

### Q20: **B. AdamW**
Adam with decoupled weight decay, default in nearly every modern LLM training script.

### Q21: **C. Sharded state across data-parallel workers**
ZeRO / FSDP shards optimiser state, gradients, and parameters so each worker only holds its slice, enabling much larger models than pure data parallel.

### Q22: **B. SageMaker Profiler**
Profiler is the per-step performance monitor; Model Monitor is for production drift.

### Q23: **B. HPC-grade networking for fast all-reduce**
EFA bypasses kernel networking stack for ultra-low-latency collective communication.

### Q24: **A. Hugging Face framework container**
SageMaker has a dedicated HF container with `transformers`, `datasets`, `accelerate` pre-installed.

---

## 📊 Score

- 22-24 → 🏆 Mastery
- 19-21 → ✅ Solid
- 15-18 → ⚠️ Re-read distributed-training + silicon sections
- <15 → 🔁 Restart Module 5

---

## 🃏 Add to flashcards

- SMDDP (data parallel) vs SMMP (model parallel)
- Inferentia2 vs Trainium2 vs G5 vs P5
- EFA + FSx Lustre = multi-node training stack
- FP16 vs BF16 (BF16 for stability; FP16 for max speed on V100/A100)
- Spot + checkpointing = up to 90% off training
- Ground Truth + active learning = ~70% labelling reduction
- Debugger = training-internals; Profiler = system metrics; Model Monitor = production drift

➡️ [Cheat-Sheet.md](./Cheat-Sheet.md) → [Module 6](../Module-06-NLP-Computer-Vision/Reading.md)
