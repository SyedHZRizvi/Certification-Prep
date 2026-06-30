# Module 5: Deep Learning on AWS 🧬

> **Why this module matters:** Deep learning is the dominant technology of 2026, every transformer, every diffusion model, every voice clone, every self-driving system runs on GPU or AI silicon. SageMaker is AWS's deep-learning gym; Trainium and Inferentia are its purpose-built chips; SMDDP and SMMP are its distributed-training libraries. The MLS-C01 exam tests *all* of this: when to bring your own PyTorch/TF container, what instance family to pick, how distributed training works, when to use mixed precision, when EFA matters, and how to make a multi-GPU job not bottleneck on data loading. This module makes you fluent.

> **Prerequisites for this module.** Modules 1–4 of this course. Helpful background:
> - Familiarity with PyTorch or TensorFlow at the level of writing a `Dataset`, a `nn.Module`, and a training loop
> - Understanding of forward / backward pass, gradient descent variants (Module 1 reviewed this)
> - Familiarity with CNNs (convolutions, pooling, batch norm), RNNs (LSTM, GRU), or Transformers (self-attention), Goodfellow's *Deep Learning* book chapters 6–10 are the canonical reference

---

## 🍕 A Story: Tesla's Dojo And Why AWS Built Trainium

Tesla famously built its own **Dojo** supercomputer in 2021 to train Autopilot perception models. The reason was simple economics: NVIDIA GPUs were both expensive *and* hard to procure. Many hyperscalers came to the same realisation. **Google** built **TPUs** (2016). **Apple** built **Neural Engine** silicon. **Microsoft** is building **Maia**. **Amazon** built **Trainium** for training and **Inferentia** for inference.

Why does this matter for MLS-C01? Because the exam will ask "**which is the MOST cost-effective compute for training a 7-billion parameter transformer on AWS?**" and the wrong answer is "p4d on demand". The right answer is some combination of **Trainium** + **Spot** + **SMDDP** + **FSx for Lustre**. This module gives you the vocabulary to recognise that.

This module is also where you graduate from "I picked a built-in algorithm and clicked train" (Module 4) to "I wrote a custom PyTorch model and trained it across 32 nodes with mixed precision and tensor parallelism." That is the level of fluency the exam expects on the modelling-heavy domains.

---

## 🏗️ Deep Learning Architectures, The Five Families

You need to recognise the five major DL families and know what each is best at:

| Family | Use cases | Canonical paper |
|--------|-----------|-----------------|
| **MLPs (Multi-Layer Perceptrons)** | Tabular (rare in DL era; XGBoost usually wins), simple regression/classification | Rumelhart et al. (1986) backprop |
| **CNNs (Convolutional Networks)** | Images, video, some audio (spectrograms), some genomics | LeCun et al. (1989) LeNet; Krizhevsky et al. (2012) AlexNet |
| **RNNs / LSTMs / GRUs** | Time series, language modelling (pre-2017), speech (pre-Conformer) | Hochreiter & Schmidhuber (1997) LSTM |
| **Transformers** | Language, vision (ViT), audio (Whisper), multimodal, foundation models | Vaswani et al. (2017) *Attention Is All You Need* |
| **Graph Neural Networks** | Social networks, molecules, knowledge graphs | Kipf & Welling (2017) GCN |
| **Diffusion / GANs** | Image / video / audio generation | Goodfellow et al. (2014) GAN; Ho et al. (2020) DDPM |

🎯 **Exam pattern.** Most MLS-C01 DL questions assume **CNNs** for vision and **Transformers** for NLP/multimodal. Older study guides over-index on RNNs; in 2026, transformers dominate.

---

## 🐍 SageMaker Framework Containers, TensorFlow, PyTorch, MXNet, Hugging Face

For deep learning, you almost always use a **pre-built framework container** in script mode.

| Framework | SDK class | Strength |
|-----------|-----------|----------|
| **PyTorch** | `sagemaker.pytorch.PyTorch` | Dominant for research and most new production work |
| **TensorFlow** | `sagemaker.tensorflow.TensorFlow` | Strong in production / mobile; Keras API |
| **MXNet** | `sagemaker.mxnet.MXNet` | Legacy AWS favourite; less common in 2026 |
| **Hugging Face** | `sagemaker.huggingface.HuggingFace` | Pre-built containers with `transformers`, `datasets` libraries |
| **scikit-learn** | `sagemaker.sklearn.SKLearn` | Tabular classical ML, not DL |
| **XGBoost** | `sagemaker.xgboost.XGBoost` | Tabular gradient boosting |

### Script mode example (PyTorch)

```python
from sagemaker.pytorch import PyTorch

estimator = PyTorch(
    entry_point="train.py",
    source_dir="src/",
    role=role,
    framework_version="2.1.0",
    py_version="py310",
    instance_count=4,
    instance_type="ml.p4d.24xlarge",
    distribution={"smdistributed": {"dataparallel": {"enabled": True}}},
    hyperparameters={"epochs": 20, "lr": 1e-4, "batch_size": 256},
)
estimator.fit({"train": "s3://my-bucket/train/", "val": "s3://my-bucket/val/"})
```

🎯 **Exam pattern.** Recognise the structure, `entry_point` script, `instance_count > 1` for distributed, `distribution` parameter for SMDDP / SMMP.

---

## 💻 GPU & AI Silicon On AWS, The Instance Families

| Family | Chip | Use case | When to pick |
|--------|------|----------|--------------|
| **P3** | NVIDIA V100 | DL training (older) | Legacy; rarely the cost-optimal choice in 2026 |
| **P4 (p4d, p4de)** | NVIDIA A100 (40/80 GB) | DL training (current) | Heavy DL training; medium-large models |
| **P5 (p5, p5e)** | NVIDIA H100 / H200 | Frontier-scale training | LLMs, vision-language models |
| **G4 (g4dn)** | NVIDIA T4 | DL inference, light training | Cost-effective inference |
| **G5 (g5)** | NVIDIA A10G | DL inference and small training | Best balance for many inference workloads |
| **G6 (g6, g6e)** | NVIDIA L4 / L40S | DL inference (newer) | Modern inference workhorse |
| **Inf1** | AWS Inferentia (v1) | Inference | Cost-optimised inference |
| **Inf2 (inf2)** | AWS Inferentia2 | Inference (LLM-class) | High-throughput LLM inference; **best $/inference for many models** |
| **Trn1 / Trn1n** | AWS Trainium | Training | Cost-optimal training for many models (~30-50% cheaper than P4 for equivalent throughput) |
| **Trn2** | AWS Trainium2 | Training (frontier) | Latest gen; LLM training |
| **DL1** | Habana Gaudi | Training (specialised) | Niche; legacy |

🎯 **Exam pattern, cost-optimal inference for LLM:** **Inferentia2 (inf2)**.

🎯 **Exam pattern, cost-optimal training:** **Trainium (trn1 / trn2)** with **SMDDP**.

🎯 **Exam pattern, train a 100B-parameter LLM:** **p5.48xlarge or trn1.32xlarge clusters** + **EFA networking** + **FSx for Lustre** + **SMMP (model parallel)**.

### EFA, Elastic Fabric Adapter

EFA is AWS's high-throughput, low-latency network interface for multi-node ML. Without EFA, multi-node training scales poorly because all-reduce gradients saturate normal Ethernet. With EFA (used by p4d, p5, trn1), you get GPU-direct RDMA-like networking.

🎯 **Exam pattern.** *"Multi-node DL training scales poorly past 4 nodes."* → likely missing **EFA**, or the data pipeline is bottlenecked (FSx, Pipe mode).

### FSx for Lustre

A high-performance parallel filesystem linked to S3 with lazy loading. Sub-millisecond access; used as `data_repository_associations` to keep data warm without copying.

```python
estimator = PyTorch(
    ...,
    fsx_lustre_file_system={
        "id": "fs-0abc1234",
        "directory_path": "/training-data",
    },
)
```

🎯 **Exam pattern.** *"Distributed DL training is bottlenecked on S3 reads."* → mount **FSx for Lustre** with S3 lazy load.

---

## 📦 SageMaker Distributed Training Libraries

SageMaker provides **two** distributed-training libraries for deep learning:

### SMDDP, SageMaker Distributed Data Parallel

| Property | Detail |
|----------|--------|
| **Type** | Data parallelism, same model replicated on every GPU; different data shards |
| **All-reduce** | Custom AWS-optimised collective (faster than NCCL on EFA networks) |
| **When** | Model fits in one GPU's memory; scale-out via more nodes |
| **Frameworks** | PyTorch, TensorFlow |
| **Enable via** | `distribution={"smdistributed": {"dataparallel": {"enabled": True}}}` |

🎯 **Exam pattern.** *"Speed up training a 1B-parameter model that fits on one GPU."* → **SMDDP** with `instance_count > 1`.

### SMMP, SageMaker Distributed Model Parallel

| Property | Detail |
|----------|--------|
| **Type** | Model parallelism, model split across GPUs (tensor, pipeline, sharded-data) |
| **When** | Model does NOT fit in one GPU's memory (large LLMs, vision transformers) |
| **Strategies** | Tensor parallel, pipeline parallel, sharded-data parallel (SDP, like ZeRO/FSDP) |
| **Frameworks** | PyTorch (primary), TensorFlow |
| **Enable via** | `distribution={"smdistributed": {"modelparallel": {...}}}` |

🎯 **Exam pattern.** *"Train a 70B-parameter LLM on AWS."* → **SMMP** with **tensor + pipeline + sharded-data parallel** on **trn1.32xlarge** or **p5.48xlarge** clusters.

### Comparison

| Method | When |
|--------|------|
| **Single GPU** | Model + batch fit on one card |
| **SMDDP (data parallel)** | Model fits on one GPU; want more throughput → more nodes |
| **SMMP (model parallel)** | Model itself is too large for one GPU |
| **Hybrid (SMMP + SMDDP)** | Frontier LLMs |
| **PyTorch FSDP / DeepSpeed ZeRO** | Open-source alternatives that work in SageMaker too |
| **Horovod** | Older OSS DDP library; sometimes seen in legacy answers |

---

## 🧮 Mixed Precision Training (FP16 / BF16)

Modern GPUs (V100+, A100, H100) and Trainium support reduced-precision arithmetic:

| Precision | Bits | Use |
|-----------|------|-----|
| **FP32** | 32 | Classic training; full accuracy |
| **FP16** (half) | 16 | 2× faster on Tensor Cores; risk of underflow |
| **BF16** | 16 | Same range as FP32, less precision; best for stability |
| **TF32** (NVIDIA) | 19 | Default since A100; "free" speedup |
| **FP8** (H100, B100) | 8 | Latest; great for inference, careful for training |
| **INT8 / INT4** | 8 / 4 | Quantised inference only |

🎯 **Exam pattern.** *"Cut training time and memory in half with minimal accuracy loss."* → **mixed precision (FP16 or BF16)** via `torch.cuda.amp` or TF's `mixed_precision.set_global_policy("mixed_float16")`.

---

## 🚀 Inferentia, Cost-Optimal Inference

| Generation | Chip | When |
|------------|------|------|
| **Inf1** | Inferentia v1 | Legacy; CV / NLP models |
| **Inf2 / inf2** | Inferentia2 | **Default 2026 choice** for cost-optimised inference, including LLMs |

To use Inferentia, you compile your model with **AWS Neuron SDK** (replaces NVIDIA CUDA toolchain). The Neuron SDK supports PyTorch, TensorFlow, Hugging Face Transformers, and JAX.

```python
# In your inference container
import torch_neuronx
neuron_model = torch_neuronx.trace(model, example_input)
neuron_model.save("model.neuron")
```

🎯 **Exam pattern.** *"Cut inference cost by ~50% on a high-traffic NLP service."* → **Compile model with Neuron and deploy on inf2 endpoints.**

### Trainium for inference?

Trainium is *primarily* a training chip but can serve high-throughput inference for very large models in some configurations. Inferentia2 is the more common inference answer.

---

## 🎛️ Hyperparameter Tuning For DL

DL hyperparameters that matter most:

| Hyperparameter | Typical range | Effect |
|----------------|--------------|--------|
| **Learning rate** | 1e-5 to 1e-2 | The single most impactful |
| **Batch size** | 16 – 4096 (or larger) | Bigger = more stable gradient, more memory |
| **Optimiser** | `Adam`, `AdamW`, `SGD+momentum`, `Lion`, `Adafactor` | AdamW default for most |
| **LR schedule** | Cosine, linear warmup + decay, OneCycle | Warmup avoids early instability |
| **Weight decay** | 1e-5 to 1e-2 | L2 reg |
| **Dropout** | 0.0 – 0.5 | Reg for FC layers |
| **Layer norm vs batch norm** | LN for transformers; BN for CNNs | Choice depends on architecture |
| **Gradient clipping** | norm 1.0 typical | Stabilises transformer training |
| **Number of epochs** | 1 (LLM finetune) – 200 (vision) | Watch for early stopping |

### SageMaker Automatic Model Tuning (HPO)

SageMaker's built-in HPO does **Bayesian optimisation** (default) or **random / grid search** across hyperparameter ranges in parallel jobs. We cover this deeply in Module 8.

---

## 🧪 Training Compiler & Profiler

| Tool | What it does |
|------|--------------|
| **SageMaker Training Compiler** | Just-in-time compiles TF/PyTorch graphs for faster training (10-50% speedup) |
| **SageMaker Debugger** | Captures tensors during training; rules detect vanishing gradients, overfitting, NaN |
| **SageMaker Profiler** | System + framework metric profiler; CPU/GPU util, GPU memory, time per step |

🎯 **Exam pattern.** *"Diagnose why a DL training job is GPU-underutilised."* → **SageMaker Profiler**.

🎯 **Exam pattern.** *"Detect vanishing gradients in a deep transformer."* → **SageMaker Debugger** with the vanishing-gradient built-in rule.

---

## 🏷️ Data Labelling, SageMaker Ground Truth

For DL projects without labels (the common case for vision and NLP), SageMaker Ground Truth provides:

- **Workforce options:** AWS Mechanical Turk (cheapest), private workforce (your team), vendor workforce (Amazon-vetted vendors)
- **Built-in tasks:** Image classification, bounding box, semantic segmentation, text classification, NER
- **Active learning (Ground Truth Plus is fully managed):** Auto-labels easy examples to reduce labelling cost
- **Custom workflows** via Lambda + UI templates

🎯 **Exam pattern.** *"Reduce labelling cost on a 1M-image classification project."* → **Ground Truth with active learning** (auto-labels ~70% of "easy" examples; humans only label the rest).

---

## 🔬 Domain Examples, When DL Wins

| Domain | DL win | Architecture |
|--------|--------|--------------|
| **Image classification** | DL crushes traditional CV | CNN (ResNet, EfficientNet) or ViT |
| **Object detection** | DL | YOLO, Faster R-CNN, DETR |
| **Semantic segmentation** | DL | U-Net, FCN, DeepLab |
| **Speech recognition** | DL | Conformer, Whisper, wav2vec2 |
| **Text understanding** | DL | Transformers (BERT, GPT-style) |
| **Image generation** | DL | Diffusion (DALL-E, Stable Diffusion), GANs |
| **Recommendation (deep)** | Sometimes | Two-tower, DCN, transformer ranker |
| **Tabular classification** | Often NOT | **XGBoost usually wins** |
| **Time-series forecasting** | Sometimes | DeepAR, Temporal Fusion Transformer; sometimes Prophet/ARIMA win |
| **Anomaly detection** | Sometimes | Autoencoders; sometimes Random Cut Forest wins |

---

## 📖 Case Study, Stable Diffusion Training on AWS

**Situation.** Stability AI trained Stable Diffusion 1.0 a 890M-parameter diffusion model for image generation on AWS in 2022.

**Architecture (publicly reported in talks and blog posts).**
- **Hardware:** **256 NVIDIA A100 GPUs** on `p4d.24xlarge` instances (32 nodes × 8 GPUs)
- **Networking:** **EFA** between nodes
- **Storage:** **FSx for Lustre** linked to S3 holding **5 billion image-caption pairs** (LAION-5B)
- **Distributed training:** Custom PyTorch DDP (similar to SMDDP) with mixed precision (FP16)
- **Duration:** **~150,000 GPU-hours** over ~4 weeks
- **Cost:** ~$600K in compute (would be ~$2-3M without Spot / volume discounts)

**Lesson for the exam.** The reference architecture for frontier-scale DL training on AWS is:

```
S3 (data) → FSx Lustre (warm)
     ↓
EFA-connected cluster of p4d / p5 / trn instances
     ↓
SMDDP (data parallel) or SMMP (model parallel)
     ↓
Mixed precision (BF16) + gradient accumulation
     ↓
Checkpoint to S3 (for Spot resumability)
     ↓
Model artifact → SageMaker Endpoint or Bedrock
```

You will see this pattern paraphrased in multiple exam scenarios.

**Discussion (Socratic).**
- Q1. Stable Diffusion fits on one A100 (40GB), so they used **data parallel**, not model parallel. At what model size do you cross the line into **needing** model parallel?
- Q2. Compute cost ~$600K. Could they have cut this to $100K with Spot + Trainium? What is the realistic vs the theoretical saving?
- Q3. Stable Diffusion is open-source. If you wanted to fine-tune it on AWS for a custom domain (e.g. medical imaging), what architecture would you pick?

---

## 🤖 SageMaker JumpStart, Pre-Built Models For Quick Wins

JumpStart hosts **300+ pre-trained models** (foundation and task-specific) plus **end-to-end solutions** for common use cases. We cover this in Module 7 alongside Bedrock; mentioning here because it can be the right "DL on AWS" answer.

🎯 **Exam pattern.** *"Quickly deploy Llama-3-8B on AWS without writing training code."* → **SageMaker JumpStart** → one-click deploy to a SageMaker endpoint.

---

## ⚠️ Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "Bigger is always better" | Larger models cost more to train AND infer. Right-size for the task. |
| "Always use GPUs" | For tabular XGBoost, CPU is often faster and cheaper. |
| "Trainium is harder than NVIDIA" | Neuron SDK abstracts most differences; PyTorch code usually compiles with minor changes. |
| "Inferentia is only for huge models" | inf2 is cost-effective even for medium-sized BERT/T5 models. |
| "Mixed precision always speeds up training" | Needs Tensor-Core-capable GPUs (V100+) and careful loss-scaling. |
| "SMMP is always slower than SMDDP" | Yes if your model fits on one GPU; required if it doesn't. |
| "Distributed training scales linearly" | Almost never. Communication overhead and data pipeline often bottleneck. |
| "All transformers are LLMs" | ViT (Vision Transformer), Whisper, BERT, T5 are all transformers but not LLMs in the chat sense. |

---

## 🚨 Top Exam Traps (Module 5 Themes)

1. **"Cost-optimal training of large model"** → Trainium (trn1/trn2) + Spot + SMDDP + FSx + EFA.
2. **"Cost-optimal inference for LLM"** → Inferentia2 (inf2) compiled via Neuron.
3. **"Train a 70B model"** → SMMP (model parallel), not SMDDP alone.
4. **"Distributed training scales poorly"** → check EFA networking, data loader, FSx vs S3 file mode.
5. **"Cut training time in half with minimal accuracy loss"** → mixed precision FP16/BF16.
6. **"Detect vanishing gradients"** → SageMaker Debugger.
7. **"GPU sitting idle during training"** → Profiler; likely data-loader bottleneck.
8. **"Reduce labelling cost on huge image dataset"** → Ground Truth + active learning.
9. **"Quickly deploy Llama-3"** → SageMaker JumpStart (or Bedrock if managed).
10. **"Bring your own DL framework"** → BYO container in ECR.

---

## 🎓 Key Terms To Know

| Term | Definition |
|------|------------|
| **CNN** | Convolutional Neural Network |
| **RNN / LSTM / GRU** | Recurrent / Long Short-Term Memory / Gated Recurrent Unit |
| **Transformer** | Attention-based sequence model (Vaswani 2017) |
| **ViT** | Vision Transformer |
| **U-Net** | CNN architecture for semantic segmentation (medical, satellite) |
| **EFA** | Elastic Fabric Adapter, AWS HPC-grade network |
| **SMDDP** | SageMaker Distributed Data Parallel |
| **SMMP** | SageMaker Distributed Model Parallel |
| **Tensor parallel** | Split a single layer across GPUs |
| **Pipeline parallel** | Split layers (vertical slabs) across GPUs |
| **Sharded-data parallel (SDP / ZeRO / FSDP)** | Split model state across data-parallel workers |
| **Mixed precision** | FP16 / BF16 arithmetic with FP32 master weights |
| **Tensor Core** | NVIDIA matrix-multiply unit (V100+) for FP16/BF16 |
| **Inferentia (inf1/inf2)** | AWS inference chip |
| **Trainium (trn1/trn2)** | AWS training chip |
| **Neuron SDK** | AWS compiler/runtime for Inferentia and Trainium |
| **FSx for Lustre** | High-throughput parallel filesystem on AWS |
| **Ground Truth** | SageMaker data-labelling service |
| **Training Compiler** | SageMaker JIT compiler for TF/PyTorch graphs |
| **Debugger** | SageMaker training-internals tensor introspection |
| **Profiler** | SageMaker performance / utilisation profiler |
| **JumpStart** | SageMaker library of pre-trained models and solutions |

---

## 💬 Discussion, Socratic Prompts

1. **"GPUs or Trainium?"** Trainium is cheaper per FLOP but the ecosystem (PyTorch ops, debugging tooling) is younger. At what team size and model criticality does Trainium make sense?
2. **The mixed-precision tax.** FP16 saves memory and speeds up Tensor Core ops but introduces NaN risks via underflow. BF16 has FP32's range but less precision. When pick which?
3. **Active learning vs full labelling.** Ground Truth's active learning can label ~70% automatically. Is the implicit bias of pseudo-labels acceptable for high-stakes domains (medical, legal)?
4. **The "frontier model" question.** Training a 70B-parameter LLM costs $5M+ in compute. Is this affordable for any team smaller than a hyperscaler? When does fine-tuning Llama-3 (Module 7) beat training from scratch?
5. **DL vs XGBoost for tabular.** Show your work: what is the largest tabular dataset where XGBoost still beats a deep MLP?

---

## ➡️ Where This Leads

> **Where this leads.**
> - **Inside this course:** Module 06 covers when to use managed AI services *instead* of training your own DL; Module 07 covers foundation models via Bedrock and JumpStart; Module 08 covers evaluation / tuning of DL models.
> - **Cross-course:** `07-AWS-AI-Practitioner` Module 03 introduces deep learning at a lighter level.
> - **Practice:** Practice Exam 1 has 4 questions, Practice Exam 2 has 5 questions, Final Mock has 8 questions on this material.
> - **Real world:** Run the SageMaker `pytorch-mnist` example on a `ml.g4dn.xlarge` for ~$0.50.

---

## ✅ Module 5 Summary

You now know:

- 🏗️ The **5 DL families** (MLP, CNN, RNN, Transformer, GNN, Diffusion/GAN) and where each wins
- 🐍 **SageMaker framework containers** (PyTorch, TF, MXNet, HF) in script mode
- 💻 **AWS DL silicon**, P/G families (NVIDIA), Inferentia2, Trainium2, when each is cost-optimal
- 📦 **SMDDP** (data parallel) vs **SMMP** (model parallel) and when to mix them
- 🌐 **EFA** networking and **FSx for Lustre** for multi-node throughput
- 🧮 **Mixed precision** (FP16, BF16) and its trade-offs
- 🚀 **Inferentia2** + **Neuron SDK** for cost-optimal inference
- 🎛️ The DL hyperparameters that actually matter (LR, batch size, optimiser, schedule, dropout)
- 🧪 **Training Compiler**, **Debugger**, **Profiler** for diagnosing training inefficiency
- 🏷️ **Ground Truth** + active learning for labelling
- 📖 The **Stable Diffusion** reference training architecture you will see paraphrased

**Next:**
1. 🎥 Watch [`Videos.md`](./Videos.md)
2. ✏️ Take [`Quiz.md`](./Quiz.md)
3. 📋 Review [`Cheat-Sheet.md`](./Cheat-Sheet.md)
4. ➡️ [Module 6: NLP & Computer Vision Workflows](../Module-06-NLP-Computer-Vision/Reading.md)

---

## 📚 Further Sources

**AWS official**
- 📖 **SageMaker Distributed Training docs**, `docs.aws.amazon.com/sagemaker/latest/dg/distributed-training.html`
- 📖 **AWS Neuron SDK docs**, `awsdocs-neuron.readthedocs-hosted.com`
- 📖 **AWS ML Blog: Trainium / Inferentia case studies**, `aws.amazon.com/blogs/machine-learning/category/artificial-intelligence/aws-trainium/`

**Textbooks**
- 📖 **Goodfellow, Bengio, Courville (2016).** *Deep Learning.* MIT Press, chapters 6-10 are the canonical reference
- 📖 **Zhang et al. (2023).** *Dive into Deep Learning.*, free, code-rich, modern
- 📖 **Bishop & Bishop (2024).** *Deep Learning: Foundations and Concepts.* Springer, modern academic text

**Academic foundations**
- 📄 **Krizhevsky, Sutskever, Hinton (2012).** *ImageNet Classification with Deep CNNs.* NIPS, AlexNet (CNN watershed)
- 📄 **Vaswani et al. (2017).** *Attention Is All You Need.* NeurIPS, Transformer
- 📄 **Ho, Jain, Abbeel (2020).** *Denoising Diffusion Probabilistic Models.* NeurIPS, diffusion
- 📄 **Brown et al. (2020).** *Language Models are Few-Shot Learners.*, GPT-3

---

## 🛠️ Appendix A, Worked Example: Distributed PyTorch Training With SMDDP + Spot

A worked example showing the full SDK pattern you would use in production.

```python
import sagemaker
from sagemaker.pytorch import PyTorch
from sagemaker.inputs import TrainingInput

sess = sagemaker.Session()
role = sagemaker.get_execution_role()

# 1. Configure distributed PyTorch training with SMDDP
estimator = PyTorch(
    entry_point="train.py",
    source_dir="src",
    role=role,
    framework_version="2.1.0",
    py_version="py310",

    # Multi-node distributed training
    instance_count=4,
    instance_type="ml.p4d.24xlarge",   # 8x A100 per node = 32 GPUs total

    # SMDDP data-parallel
    distribution={
        "smdistributed": {"dataparallel": {"enabled": True}}
    },

    # Cost optimisation: Spot + checkpointing
    use_spot_instances=True,
    max_run=86400,                     # 24 h max runtime
    max_wait=129600,                   # 36 h max wait incl. interruptions
    checkpoint_s3_uri="s3://my-bucket/checkpoints/",
    checkpoint_local_path="/opt/ml/checkpoints",

    # Mixed precision
    hyperparameters={
        "epochs": 30,
        "batch_size": 256,
        "lr": 1e-4,
        "weight_decay": 0.01,
        "warmup_steps": 1000,
        "gradient_clip_norm": 1.0,
        "use_amp": True,               # enables FP16/BF16 mixed precision
        "amp_dtype": "bf16",
    },

    # Faster data access via FSx Lustre
    # (Or use FastFile / Pipe mode if dataset is huge)

    # Security
    enable_network_isolation=False,    # set True for max isolation
    enable_inter_container_traffic_encryption=False,  # set True for HIPAA-class
    subnets=["subnet-...", "subnet-..."],
    security_group_ids=["sg-..."],
)

train_input = TrainingInput(
    "s3://my-bucket/train/",
    input_mode="FastFile",             # S3 streaming mount
)
val_input = TrainingInput(
    "s3://my-bucket/val/",
    input_mode="FastFile",
)

estimator.fit({"train": train_input, "val": val_input})
```

### Inside `train.py`, the key bits

```python
import torch
import torch.nn as nn
from torch.utils.data import DataLoader, DistributedSampler
import smdistributed.dataparallel.torch.torch_smddp  # registers SMDDP backend

# SMDDP-aware setup
torch.distributed.init_process_group(backend="smddp")
local_rank = int(os.environ["LOCAL_RANK"])
torch.cuda.set_device(local_rank)

# Model + DDP wrapping
model = MyModel().cuda(local_rank)
model = torch.nn.parallel.DistributedDataParallel(model, device_ids=[local_rank])

# Data loader with DistributedSampler
sampler = DistributedSampler(train_dataset)
loader = DataLoader(train_dataset, batch_size=BATCH_SIZE, sampler=sampler,
                    num_workers=8, pin_memory=True, prefetch_factor=4)

# Mixed precision
scaler = torch.cuda.amp.GradScaler()
amp_dtype = torch.bfloat16  # or torch.float16

# Training loop (sketch)
for epoch in range(EPOCHS):
    sampler.set_epoch(epoch)
    for batch in loader:
        with torch.cuda.amp.autocast(dtype=amp_dtype):
            loss = model(batch).loss
        scaler.scale(loss).backward()
        scaler.unscale_(optimizer)
        torch.nn.utils.clip_grad_norm_(model.parameters(), max_norm=1.0)
        scaler.step(optimizer)
        scaler.update()
        scheduler.step()
        optimizer.zero_grad()

    # Checkpoint to /opt/ml/checkpoints (synced to S3 on Spot interruption)
    if torch.distributed.get_rank() == 0:
        torch.save({
            "epoch": epoch,
            "model": model.state_dict(),
            "optimizer": optimizer.state_dict(),
        }, f"/opt/ml/checkpoints/checkpoint_{epoch}.pt")
```

🎯 **Exam pattern.** Recognise:

- `distribution={"smdistributed":{"dataparallel":{"enabled":True}}}` = SMDDP enabled
- `use_spot_instances=True` + `checkpoint_s3_uri` = Spot training
- `enable_network_isolation=True` = no outbound network
- `enable_inter_container_traffic_encryption=True` = TLS between nodes

---

## 🛠️ Appendix B, Worked Example: Inferentia2 Inference Container

```python
# In your training/serving container
import torch_neuronx
import torch

# Load your PyTorch model
model = MyModel()
model.load_state_dict(torch.load("model.pt"))
model.eval()

# Trace/compile for Inferentia2
example_input = torch.zeros(1, 3, 224, 224)
neuron_model = torch_neuronx.trace(
    model,
    example_input,
    compiler_workdir="/tmp/neuron-compile",
    compiler_args=[
        "--target=trn1",   # or trn2 / inf2
        "--auto-cast=all", # mixed precision
    ],
)
neuron_model.save("model.neuron")

# Deploy via SageMaker endpoint with the Neuron container
from sagemaker.pytorch import PyTorchModel
model = PyTorchModel(
    model_data="s3://my-bucket/neuron-model.tar.gz",
    role=role,
    image_uri="763104351884.dkr.ecr.us-east-1.amazonaws.com/pytorch-inference-neuronx:2.1.0-neuronx-py310",
    framework_version="2.1.0",
)
predictor = model.deploy(
    initial_instance_count=2,
    instance_type="ml.inf2.xlarge",
)
```

🎯 **Cost-comparison rule of thumb (2025-26):** for the same throughput, **inf2.xlarge** typically runs 30-60% cheaper than **g5.xlarge** for transformer inference (BERT, T5, smaller Llama variants).

---

## 🛠️ Appendix C, Common DL Hyperparameter Search Spaces

| Hyperparameter | Range for HPO |
|----------------|---------------|
| **Learning rate** | `ContinuousParameter(1e-5, 1e-2)` log-uniform |
| **Batch size** | `CategoricalParameter([16, 32, 64, 128, 256, 512])` |
| **Warmup steps** | `IntegerParameter(0, 5000)` |
| **Weight decay** | `ContinuousParameter(1e-5, 1e-1)` log-uniform |
| **Dropout (FC layers)** | `ContinuousParameter(0.0, 0.5)` |
| **Number of attention heads** | `CategoricalParameter([4, 8, 12, 16])` |
| **Number of layers** | `IntegerParameter(2, 24)` |
| **Hidden dim** | `CategoricalParameter([256, 512, 768, 1024])` |

🎯 **Exam pattern.** Match the HPO strategy:

- **Bayesian** when budget is moderate (~30-50 trials) and you want learning-from-trials
- **Hyperband** when individual trials are expensive (many epochs) and you want aggressive pruning
- **Random** when budget is tiny (<10 trials) and embarrassingly parallel is OK
- **Grid** rare, small discrete spaces only

---

## 🛠️ Appendix D, The 6 Most Common DL Training Issues And Their Fixes

| Issue | Symptom | Fix |
|-------|---------|-----|
| Vanishing gradients | Loss plateaus at high value early | Use ReLU/GELU; better init (Xavier/Kaiming); residual connections; layer norm; Debugger built-in rule |
| Exploding gradients | NaN losses; sudden divergence | Gradient clipping (norm 1.0); lower LR; check init |
| Overfitting | Train loss ↓, val loss ↑ after epoch N | Early stop; dropout; weight decay; data augmentation; more data |
| Underfitting | Both train and val high | Deeper/wider model; more features; less regularisation; longer training |
| GPU under-utilisation | Profiler shows <80% util | More data-loader workers; pin_memory=True; prefetch_factor>2; FSx Lustre; Pipe mode |
| Out of memory | CUDA OOM error | Smaller batch; gradient accumulation; mixed precision; SMMP (model parallel); gradient checkpointing |

🎯 **Pre-flight checklist** before launching a big distributed training job:

1. Verified model + batch fits on a single GPU at FP32?
2. Verified mixed precision works (BF16 first, then FP16) on a single GPU?
3. Verified data loader keeps GPU >80% utilised on a single GPU?
4. Verified distributed run scales to 2 nodes before scaling to 32?
5. Verified checkpointing path works on Spot interruption simulation?
6. Verified VPC + KMS + IAM passes a security review?
