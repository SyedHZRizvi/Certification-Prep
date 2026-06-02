# 📋 Module 1 Cheat Sheet: LLM Architecture & Tokenization

> One page. Print it. Reference during labs and the practice exams.

---

## 🧠 Mental Model

```
text → [Tokenizer] → tokens → [Embedding] → vectors → [N × Transformer Block] → [LM Head] → logits → [Sampler] → token
```

Each Transformer Block:
```
hidden → Norm → MHA/GQA → +residual → Norm → FFN(SwiGLU/GeLU, 4× expansion) → +residual → hidden
```

---

## 🔤 Tokenization Quick Reference

| Tokenizer | Algorithm | Used by | Vocab Size |
|-----------|-----------|---------|------------|
| **cl100k_base** | BPE | GPT-4, GPT-4-Turbo, Claude 2 era | 100,277 |
| **o200k_base** | BPE | GPT-4o, GPT-4o-mini | 200,019 |
| **Anthropic** | BPE (proprietary) | Claude 3+ | ~128K |
| **SentencePiece** | BPE or unigram | LLaMA, Mistral, Gemma, T5 | 32K–128K |
| **WordPiece** | likelihood-merge | BERT, DistilBERT | 30K |

**Rules of thumb:**
- English: ~4 chars/token
- Code: ~2-3× worse than English
- Multilingual non-Latin scripts: 4-8× worse (improved in `o200k_base` + Claude)
- ALWAYS use the model-specific tokenizer for cost estimation

---

## ⚛️ Attention Formula

```
Attention(Q, K, V) = softmax( QKᵀ / √dk ) · V
```

- **Q (Query)** — what this position is looking for
- **K (Key)** — what each position offers
- **V (Value)** — what each position carries
- **Causal mask** — for decoder-only, zero out upper triangle so position i can't see j > i

---

## 🔄 Attention Variants

| Variant | Q heads | K/V heads | KV-cache size | Used by |
|---------|---------|-----------|---------------|---------|
| **MHA** | H | H | Full | GPT-2/3, original Transformer |
| **MQA** | H | 1 | 1/H × | Falcon, PaLM |
| **GQA** | H | G (groups) | G/H × | LLaMA-2/3/4, Mistral, Claude |

GQA with G=8 is the modern sweet spot.

---

## 🧭 Positional Encoding

| Scheme | Mechanism | Length extrapolation |
|--------|-----------|----------------------|
| Sinusoidal (absolute) | Add sine waves | Poor |
| Learned absolute | Trainable vector per slot | None beyond train length |
| **RoPE** | Rotate Q/K by position-dependent angle | Strong (+ YaRN scaling) |
| ALiBi | Linear bias to attention scores | Smooth |
| Sliding window | Restrict to local window | O(N·w) cost |

---

## 🚀 Frontier Architectures

| Type | Examples | Key trade-off |
|------|----------|----------------|
| **MoE** | Mixtral 8×7B, DeepSeek-V3, (likely) GPT-4 | More params, less compute, more VRAM |
| **SSM (Mamba)** | Mamba-2, Jamba, Zamba | Linear time, weaker long-distance recall |
| **Hybrid (Mamba+Attn)** | Jamba, Samba | Best of both |

---

## 💾 KV Cache Optimizations

| Tech | What it does | Win |
|------|--------------|-----|
| **FlashAttention** | Fused kernel, no N×N materialization | 2-4× speed, far less HBM |
| **PagedAttention** (vLLM) | Non-contiguous "pages" | 2-4× throughput |
| **Speculative decoding** | Draft model + parallel verify | 2-3× latency cut |
| **Prompt caching** | Reuse prefix KV across calls | Up to 90% cost cut |

---

## 🎲 Sampling Defaults

| Parameter | Common default | Effect |
|-----------|----------------|--------|
| Temperature | 0.7 | Lower = focused; 0 = greedy |
| Top-p | 0.9 | Trim long tail |
| Top-k | 40 | Hard cap |
| Frequency penalty | 0 | Discourage repetition |
| Presence penalty | 0 | Encourage new tokens |

🎯 **Tool calling / structured output → Temperature 0 + greedy.**

---

## 🏗️ Architecture Family Cheat-Lookup

| Architecture | Examples | Best at |
|--------------|----------|---------|
| Encoder-only | BERT, RoBERTa, DeBERTa | Classification, embeddings, NER |
| Encoder-decoder | T5, BART, FLAN-T5, mT5 | Translation, summarization |
| Decoder-only | GPT, Claude, LLaMA, Mistral, Gemini, DeepSeek | General-purpose generation |

---

## 💰 Token-Cost Math (2026 reference prices)

| Provider/Model | Input ($ / 1M tok) | Output ($ / 1M tok) | Notes |
|----------------|---------------------|----------------------|--------|
| Claude 4.7 Opus | $15 | $75 | Frontier flagship |
| Claude 4.7 Sonnet | $3 | $15 | Workhorse |
| Claude 4.7 Haiku | $1 | $5 | Cheap + fast |
| GPT-5 | $10 | $30 | (varies) |
| GPT-4o | $2.50 | $10 | |
| GPT-4o-mini | $0.15 | $0.60 | |
| Gemini 2.5 Pro | $1.25 | $5 | |
| DeepSeek-V3 | $0.27 | $1.10 | Open weights too |

**Always re-check current prices** — they change quarterly.

---

## 🎓 Key Terms to Memorize Cold

- **BPE** — Byte-Pair Encoding (tokenizer)
- **tiktoken** — OpenAI's BPE library (use for cost estimation)
- **MHA / MQA / GQA** — Multi-Head / Multi-Query / Grouped-Query attention
- **KV cache** — cached keys+values from previous tokens during generation
- **RoPE** — Rotary Positional Embedding
- **YaRN** — frequency-rescaling extension that lets RoPE go beyond train length
- **MoE** — Mixture-of-Experts (sparse activation)
- **SSM** — State-Space Model (Mamba family; alternative to attention)
- **FlashAttention** — fused kernel that makes long context cheap
- **PagedAttention** — vLLM's serving-layer KV-cache memory manager
- **Speculative decoding** — small-draft + big-model-verify acceleration
- **Prompt caching** — provider-side KV reuse (Anthropic, OpenAI, Gemini)

---

## ⚠️ Top Anti-Patterns

| Anti-pattern | What goes wrong |
|--------------|------------------|
| Estimating tokens at "1 token ≈ 4 chars" for all languages/models | Code and non-English bloat 2–4× |
| Using GPT-2 tokenizer for cost in a GPT-4 product | Cursor-style cost / latency surge |
| Editing the middle of a long system prompt | Kills the prompt-cache hit |
| Cramming everything into a 200K window instead of RAG | "Lost in the middle"; worse answers + higher cost |
| `temperature=1.5` without lowering `top_p` | Word-salad hallucinations |
| Forgetting to include tool schemas in your token budget | Surprise context overflows in production |

---

## 🏆 Exam Power Phrases

✅ Often **right**:

- "Use the model's own tokenizer for accurate token counts"
- "GQA balances cache size and quality"
- "RoPE + YaRN extends context without retraining"
- "Prompt caching reuses the KV state of unchanged prefixes"
- "FlashAttention is mathematically identical but vastly more memory-efficient"

❌ Often **wrong**:

- "1 token = 1 word"
- "Bigger context always means better answers"
- "MoE models use less VRAM"
- "Attention is bidirectional in GPT"
- "Tokenizer choice doesn't affect cost"

---

## 🗓️ Memorize Cold

- Attention: softmax(QKᵀ/√dk)·V
- Cost scales O(N²) with sequence length
- GQA = grouped-query attention; LLaMA-2/3/4, Mistral, Claude use it
- RoPE = rotary position encoding; the modern default
- BPE in 1 line: greedy frequency-based pair merging
- Mixtral 8×7B = 47B total / ~13B active params

---

➡️ [Module 2: Embeddings & Vector Databases](../Module-02-Embeddings-Vector-Databases/Reading.md)
