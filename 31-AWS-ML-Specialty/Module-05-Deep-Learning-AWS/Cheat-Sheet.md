# 📋 Module 5 Cheat Sheet: Deep Learning on AWS

> Print. Tape. Drill.

---

## 💻 Instance Family Map

| Family | Chip | Use |
|--------|------|-----|
| **P3 (V100)** | NVIDIA V100 | Legacy DL training |
| **P4 (A100)** | NVIDIA A100 | DL training workhorse |
| **P5 (H100/H200)** | NVIDIA H100/H200 | Frontier training |
| **G4dn (T4)** | NVIDIA T4 | Inference / small training |
| **G5 (A10G)** | NVIDIA A10G | Balanced inference |
| **G6 (L4/L40S)** | NVIDIA L4 | Modern inference |
| **Inf1** | Inferentia v1 | Inference (legacy) |
| **Inf2** | Inferentia2 | ⭐ Cost-optimal inference (LLM-class) |
| **Trn1 / Trn2** | Trainium | ⭐ Cost-optimal training |

---

## 📦 Distributed Training Decision

```
Model fits on one GPU?
  YES → Single GPU, then SMDDP for more throughput
  NO  → SMMP (tensor + pipeline + sharded-data parallel)

Frontier LLMs → SMMP + SMDDP hybrid
```

| Method | Key idea |
|--------|----------|
| **SMDDP** | Replicate model; shard data |
| **SMMP tensor parallel** | Split single layer across GPUs |
| **SMMP pipeline parallel** | Split layers (vertical) across GPUs |
| **SMMP sharded-data (SDP/ZeRO/FSDP)** | Shard optimiser state, grads, params |

---

## 🌐 Networking & Storage

| Component | Why |
|-----------|-----|
| **EFA** | HPC-grade networking for fast all-reduce; on p4d/p5/trn |
| **FSx for Lustre + S3 lazy-load** | Sub-ms file access; multi-node training data |
| **S3 Pipe mode** | Stream RecordIO-protobuf without disk staging |
| **FastFile mode** | S3 mount streaming |

---

## 🧮 Mixed Precision

| Type | Use |
|------|-----|
| **FP32** | Default; reference |
| **TF32** | "Free" speedup on A100+ |
| **BF16** | ⭐ Best stability; same range as FP32 |
| **FP16** | ⭐ Fastest on Tensor Cores; needs loss scaling |
| **FP8** | H100+; latest |
| **INT8/INT4** | Quantised inference only |

🚀 Expect ~2× speedup, ~50% memory savings.

---

## 🐍 SDK Script-Mode Skeleton

```python
estimator = PyTorch(
  entry_point="train.py",
  role=role,
  framework_version="2.1.0",
  instance_count=4,
  instance_type="ml.p4d.24xlarge",
  distribution={"smdistributed":{"dataparallel":{"enabled":True}}},
  use_spot_instances=True,
  max_wait=86400,
  hyperparameters={"lr":1e-4, "batch_size":256, "epochs":20},
)
estimator.fit({"train":"s3://.../train/"})
```

---

## 🔬 Diagnose Training Issues

| Symptom | Tool / Fix |
|---------|------------|
| Vanishing/exploding gradients | **Debugger** with built-in rules |
| GPU under-utilisation | **Profiler**; fix data loader / batch size |
| Slow multi-node scaling | Enable **EFA**; mount **FSx Lustre** |
| Loss spikes / NaN | **Gradient clipping** (norm 1.0); lower LR; switch to BF16 |
| Out of memory | Smaller batch, gradient accumulation, mixed precision, SMMP |

---

## 💰 Cost-Optimal Choices (Memorize)

| Task | Best |
|------|------|
| **Training (large model)** | Trainium + Spot + SMDDP + FSx |
| **Training (medium)** | P4 / P5 Spot + SMDDP |
| **Inference (LLM)** | Inferentia2 + Neuron |
| **Inference (small DL)** | G5 / G6 |
| **Labelling** | Ground Truth + active learning |
| **Quick deploy of foundation model** | JumpStart one-click |

---

## 🏷️ DL Hyperparameters That Matter

| Param | Typical |
|-------|---------|
| Learning rate | 1e-5 to 1e-3 (lower for fine-tune) |
| Batch size | 32-512 (fits memory) |
| Optimiser | AdamW (default) |
| LR schedule | Linear warmup + cosine decay |
| Weight decay | 1e-4 to 1e-2 |
| Dropout | 0.0 – 0.3 |
| Grad clip | norm 1.0 (transformers) |
| Epochs | 1-3 (LLM fine-tune) to 100+ (CV) |

---

## 🚨 Module-5 Top Traps

| Phrase | Right answer |
|--------|-------------|
| "70B-parameter LLM training" | SMMP (model parallel) |
| "Multi-node scaling poor" | Enable EFA |
| "GPU under-utilised" | Profiler; data-loader fix |
| "Vanishing gradients" | Debugger built-in rule |
| "Cost-optimal LLM inference" | Inferentia2 + Neuron |
| "Cost-optimal training" | Trainium + Spot |
| "Cut labelling cost" | Ground Truth + active learning |
| "Quickly deploy Llama-3" | SageMaker JumpStart |
| "Custom DL framework" | BYO container |
| "Custom script w/ AWS PyTorch container" | Script mode |
| "Sub-ms file access for training" | FSx Lustre + S3 lazy |
| "Speedup + half memory" | Mixed precision (BF16 / FP16) |

---

## ✏️ Self-Check

1. Model fits on one GPU; need more throughput → ___ ?
2. Model 50× larger than one GPU → ___ ?
3. Cost-optimal training chip → ___ ?
4. Cost-optimal inference chip → ___ ?
5. Multi-node networking → ___ ?
6. Cut labelling cost → ___ ?

➡️ [Module 6: NLP & CV Workflows](../Module-06-NLP-Computer-Vision/Reading.md)
