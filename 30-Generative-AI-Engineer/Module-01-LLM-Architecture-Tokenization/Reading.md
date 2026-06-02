# Module 1: LLM Architecture & Tokenization 🧠

> **Why this module matters:** Every other module in this course is downstream of one truth — an LLM is a *next-token predictor* implemented as a stack of attention layers. If you can sketch the data flow from raw text to a sampled token, you can debug 80% of the problems you will ever see in production. If you can't, you'll spend your career copy-pasting fixes from blog posts.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - Python (lists, dicts, list comprehensions, basic NumPy)
> - High-school linear algebra (matrices, dot products, "what is a vector")
> - The shape of a neural network at the "fully connected layers + activation" level
>
> If those are shaky, pause and watch [3Blue1Brown's "But what is a Neural Network?"](https://www.youtube.com/results?search_query=3blue1brown+but+what+is+a+neural+network) and then [Karpathy's "Let's build GPT from scratch"](https://www.youtube.com/results?search_query=karpathy+lets+build+gpt+from+scratch). This module assumes you know what a matrix multiplication is, not what backpropagation does.

---

## 🎬 A Story: The Day Cursor Broke the Tokenizer

It's October 2024. Cursor — the AI-native IDE built on top of Claude and GPT-4 — pushes an update to their inline-edit feature. Within 90 minutes, the on-call engineer is paged. Latency on the autocomplete endpoint has tripled. Tail-p99 is at 4.2 seconds. Users are tweeting screenshots of the spinning cursor and unsubscribing.

The team's first instinct, naturally: model regression. Did Anthropic ship a slower variant? Did OpenAI's API degrade? They check both. Both clean. Next theory: vector DB. Latency normal. Next: their own retrieval layer. Normal.

Eight hours into the incident, a junior engineer notices something in the trace logs: the **input token count** on the slow requests is roughly 5× what it should be. The team digs in. The culprit is a one-line change to how they assembled the prompt — a developer had switched a code-context renderer from `tiktoken.cl100k_base` to a generic `transformers.AutoTokenizer.from_pretrained("gpt2")` because the latter was "easier to install in CI." The GPT-2 tokenizer is *brutal* on code — it splits `function`, `return`, and `=>` into multiple tokens each, while `cl100k_base` (the GPT-4 / GPT-4o tokenizer) treats them efficiently. The same code snippet that was 800 tokens in the old tokenizer was now 4,000 in the new one. Five times the input. Five times the cost. And, because attention is **quadratic** in sequence length, twenty-five times the compute.

The fix took 11 minutes to deploy. The lesson — tokenization is not an afterthought; it's a first-class engineering decision — took the team a quarter of design-review cycles to internalize.

This is module 1. By the end of it, you will know why that bug was possible, why it was so brutally expensive, and what data structures and design decisions a transformer-based model imposes on every system you will ever build with it.

---

## 🧮 The 30-Second Mental Model of an LLM

If you remember nothing else from this module, remember this picture:

```
text                                                           text
 │                                                              ▲
 ▼                                                              │
[ Tokenizer ] → tokens → [ Embedding ] → vectors → [ Transformer ] → vectors → [ LM Head ] → logits → [ Sampler ] → token
                                                       (N layers)                                                  │
                                                          ▲                                                        │
                                                          └────────────────────  autoregressive loop  ─────────────┘
```

Every modern LLM — Claude 4.7, GPT-5, Gemini 2.x, Llama 4, Mistral, DeepSeek-V3, Qwen2.5 — is some variation of this same diagram. The pieces that change between models:

| Piece | What it does | Variants you'll meet |
|-------|--------------|----------------------|
| **Tokenizer** | Maps text to integer IDs (and back) | BPE, SentencePiece, tiktoken, WordPiece |
| **Embedding** | Maps each token ID to a dense vector | Learned lookup table (≈50K × 4096 floats for a 7B model) |
| **Transformer block** | Self-attention + feedforward + normalization | Decoder-only, encoder-only, encoder-decoder; standard MHA, GQA, MQA, MoE, SSM |
| **LM head** | Projects final hidden state to vocabulary logits | Usually tied to the embedding matrix |
| **Sampler** | Picks the next token from logits | Greedy, top-k, top-p (nucleus), temperature, beam |

The training story is even simpler: feed the model billions of next-token-prediction tasks ("given these tokens, what comes next?"), update weights with stochastic gradient descent for months on tens of thousands of GPUs. The model that emerges is, mathematically, a *very* high-dimensional conditional probability distribution over a fixed vocabulary.

Everything else — instruction tuning, RLHF, constitutional AI, agents, RAG, tool use — is post-hoc surgery on this same predictor.

---

## 🔤 Tokenization, in Depth

### Why tokens at all?

A model can't operate on raw bytes efficiently, and it can't operate on whole words efficiently either (vocabulary size explodes; the model can't generalize across morphology). The middle ground is **subword tokenization**: break text into chunks that are *sometimes* full words ("hello"), sometimes prefixes/suffixes ("run", "##ning"), sometimes single characters ("☃").

This gives a fixed-size vocabulary (typically 32K–200K tokens) that can encode any string in any language, while keeping common words as single tokens for efficiency.

### Byte-Pair Encoding (BPE)

The dominant algorithm. It's almost embarrassingly simple:

1. Start with a vocabulary of every byte (256 entries).
2. Tokenize the training corpus into bytes.
3. Find the most-frequent adjacent pair (e.g., `t` + `h` → `th`). Merge it. Add the merged token to the vocabulary.
4. Repeat until you hit your target vocab size (50,257 for GPT-2; 100,277 for GPT-4's `cl100k_base`; 200,019 for GPT-4o's `o200k_base`).

The result is a learned ordered list of *merges*. To tokenize new text, apply the merges in order. This is why BPE is **deterministic** but **vocabulary-specific** — Claude's BPE merges are different from GPT-4's, so the same text yields different token counts.

```python
# Quick demo with OpenAI's tiktoken
import tiktoken
enc = tiktoken.get_encoding("cl100k_base")
print(enc.encode("Hello, world!"))      # [9906, 11, 1917, 0]
print(enc.encode("    function foo()"))  # [262, 734, 8323, 368]  -- 4 tokens
print(enc.decode([9906]))               # 'Hello'
```

A few practical implications:

- **English is ~4 chars/token.** A 4,000-character document is ~1,000 tokens.
- **Code, JSON, and other languages can be 2–3× worse.** Whitespace-heavy code in particular bloats fast.
- **Non-English languages vary wildly.** Cyrillic, Devanagari, and CJK historically tokenized 4–8× worse than English in early BPE tokenizers. GPT-4o's `o200k_base` and Claude's tokenizer added explicit multilingual merges that closed most of this gap.
- **Special tokens** (`<|endoftext|>`, `<|im_start|>`, `<|im_end|>`, etc.) are reserved IDs the model is trained to interpret as control signals. You can't include them in user input — frontend libraries strip them.

### SentencePiece

Google's tokenizer of choice (T5, mT5, LLaMA 1/2, PaLM, Gemma). Two key differences from raw BPE:

- **Language-agnostic preprocessing**: treats the input as a raw Unicode stream. No whitespace splitting; spaces become `▁` (U+2581).
- **Unigram language model option**: an alternative to BPE that picks the most likely segmentation given a learned probability distribution. Slower to tokenize, slightly better quality on some tasks.

LLaMA-family models (including Mistral and most of their derivatives) use SentencePiece BPE with a 32,000-token vocabulary. This is *small* by modern standards — and is one reason LLaMA struggles on heavily non-English text relative to Claude or GPT-4.

### WordPiece

Used by BERT and friends. Similar to BPE in spirit but the merge-selection criterion differs (maximize likelihood rather than frequency). Mostly historical for the encoder-decoder era; you'll only encounter it if you're working with BERT-style retrievers (sentence-transformers, ColBERT).

### tiktoken

OpenAI's open-source BPE library. The de facto standard for *cost estimation* even when you're not calling OpenAI, because it's the fastest BPE in Python.

```python
import tiktoken
enc = tiktoken.encoding_for_model("gpt-4o")
tokens = enc.encode(your_text)
estimated_cost = (len(tokens) / 1_000_000) * 2.50  # $2.50 / M input tokens at 2026 prices
```

### What the exam tests

- Given a text snippet and a tokenizer, **estimate the token count**.
- Identify why **token efficiency varies across languages and domains** (code, math, multilingual).
- Recognize the major tokenizer families (BPE, SentencePiece, WordPiece) and which models use which.
- Know that **prompt cost is proportional to tokens**, not characters or words.

### Anti-patterns

- Hardcoding "1 token ≈ 4 characters" in production code that bills users.
- Switching tokenizers without re-running cost models — see the Cursor story above.
- Using GPT-2's tokenizer for anything other than nostalgia.
- Forgetting to count *system prompts* + *function definitions* + *tool schemas* against the context window. Many production outages trace to "the system prompt grew over six months and we never re-measured."

---

## ⚛️ The Transformer Block

A transformer is built from a stack of identical blocks. Each block contains, in order:

1. **Layer normalization** (or RMSNorm in modern variants)
2. **Multi-head self-attention** (the magic)
3. **Residual add**
4. **Layer normalization**
5. **Feedforward network (FFN)** — typically a 2-layer MLP with a 4× expansion (so 4096-dim → 16,384-dim → 4096-dim) and a GeLU / SwiGLU activation
6. **Residual add**

Stack N of these (Claude 4.7 Opus has ~96 layers; Llama 4 Behemoth has more). The input flows through; each block refines the hidden state. At the top, project to vocabulary logits and sample.

### Self-attention, demystified

For each token position, attention computes three vectors from the hidden state via learned linear projections:

- **Query (Q)** — "what am I looking for?"
- **Key (K)** — "what do I offer?"
- **Value (V)** — "what content do I carry?"

Then it computes the **attention weights** between every pair of positions:

```
Attention(Q, K, V) = softmax(QKᵀ / √dk) · V
```

In English: for each query, take the dot product with every key (similarity scores), divide by √(head dimension) to keep gradients sane, softmax to turn the scores into a probability distribution, then take a weighted sum of the values. The result is a new hidden state that has *mixed information from every position* in proportion to learned relevance.

**Multi-head**: do this in parallel with H independent (Q, K, V) projections (heads), then concatenate. Different heads learn different "attention patterns" — one might attend to syntactic dependencies, another to coreference, another to long-range topical context.

**Causal mask** (decoder-only): mask the upper triangle of the attention matrix to prevent each position from attending to future positions. This is what makes GPT-style models *autoregressive*.

### Why attention is quadratic

The attention matrix is N × N where N = sequence length. At N = 10K tokens, that's 100M entries per head per layer. At 200K tokens, 40 billion. This is the **fundamental scaling problem** of transformers and the reason every context-length innovation since 2020 has been about avoiding the full N² computation.

### GQA, MQA, and the KV-cache problem

When you generate token-by-token, each new token needs to attend to the keys and values of *every previous token*. Re-computing them every step is wasteful. The standard fix: cache the K and V matrices for previous positions. This is the **KV cache**.

The KV cache is *the* dominant cost of long-context inference. For Llama-2-70B at 32K context:

- 80 layers × 64 heads × 128 dim × 32K positions × 2 (K and V) × 2 bytes (fp16) ≈ **84 GB of KV cache per request**

That doesn't fit on a single H100 (80 GB). It's why people obsess over KV cache compression.

| Attention Variant | Heads (Q vs K/V) | KV-cache size | Quality | Models |
|-------------------|------------------|---------------|---------|--------|
| **MHA** (Multi-Head) | Same | Full | Best | Original Transformer, GPT-2/3 |
| **MQA** (Multi-Query) | Q has H heads; K/V has 1 head | 1/H × MHA | Slightly worse | Falcon, PaLM |
| **GQA** (Grouped-Query) | Q has H heads; K/V has G groups | G/H × MHA | Near-MHA | LLaMA-2/3/4, Mistral, Claude 3+ |

GQA with G=8 is the modern sweet spot. Llama 3 70B uses 64 query heads grouped into 8 KV heads, cutting cache by 8× with negligible quality loss.

### Positional encoding: RoPE, ALiBi, sliding windows

Attention is *permutation-invariant* — without positional information, a transformer can't tell "the cat sat on the mat" from "the mat sat on the cat." Positional encoding fixes this.

| Scheme | How it works | Long-context behavior |
|--------|--------------|------------------------|
| **Absolute (sinusoidal)** | Add a fixed sinusoid based on position. | Generalizes poorly beyond training length. GPT-2 era. |
| **Learned absolute** | Learn a position vector for each slot. | Hard limit; can't go beyond max-train length. |
| **RoPE** (Rotary) | Rotate Q and K vectors by an angle proportional to position; dot product becomes a function of *relative* position. | Strong; with positional interpolation or YaRN, scales to 100K+ tokens. Used in LLaMA, Mistral, Qwen, Claude, GPT-4-class. |
| **ALiBi** | Add a linear bias to attention scores penalizing distance. | Smooth length extrapolation; simpler but slightly less accurate at long context. MPT, BLOOM. |
| **Sliding window** | Restrict each token to attend to a fixed window of recent tokens. | O(N·w) instead of O(N²). Mistral 7B used 4K windows on top of full 8K. |

**RoPE + YaRN** is the most common production combination today: train on 8K-16K, then use YaRN to *extend* the effective context window at inference time with a small frequency-rescaling trick, hitting 128K+ context with minimal quality loss.

### Decoder-only vs encoder-decoder vs encoder-only

| Architecture | Examples | What it's good at | Mask |
|--------------|----------|-------------------|------|
| **Encoder-only** | BERT, RoBERTa, DeBERTa | Classification, embeddings, NER | None (bidirectional) |
| **Encoder-decoder** | T5, BART, FLAN-T5, mT5 | Translation, summarization (anything seq2seq) | None on encoder; causal on decoder; cross-attn between them |
| **Decoder-only** | GPT-family, Claude, LLaMA, Mistral, Gemini | General text generation; the dominant modern design | Causal (lower triangle) |

The field has consolidated around **decoder-only** for general-purpose generative LLMs because it's simpler to scale, trains efficiently on next-token prediction, and at scale matches or beats encoder-decoder on translation/summarization too. Encoder-only models remain dominant for **embeddings and retrievers** (sentence-transformers, ColBERT, BGE, E5 — Module 2).

---

## 🚀 Frontier Architectures (2024–2026)

### Mixture-of-Experts (MoE)

Instead of one big FFN per layer, have N "experts" (each a smaller FFN) and a learned **router** that sends each token to the top-K experts. Only the routed experts run, so compute is much smaller than a dense model of the same parameter count.

- **Mixtral 8×7B / 8×22B** — 8 experts per FFN, routes top-2. ~12.9B active params from 47B total. The first widely-adopted open-weight MoE.
- **DeepSeek-V3** — 256 experts per layer with extreme sparsity (top-8 of 256). ~37B active from 671B total.
- **GPT-4 / GPT-5** — widely believed to be MoE; OpenAI doesn't confirm specifics.
- **Mixtral 8×7B Instruct** — the workhorse open-weight MoE for production self-hosting in 2024–2025.

MoE wins on the quality/compute trade-off but loses on memory — you have to hold *all* experts in VRAM even if you only use 2 per token.

### Mamba / SSMs (State-Space Models)

A 2023–2024 alternative to attention. Selective state-space models (Mamba, Mamba-2, Jamba) replace attention with a *linear-time* recurrence that maintains a compressed "state" instead of a full KV cache.

- **Linear scaling** instead of quadratic — 1M+ tokens become tractable.
- **Constant-size state** — no KV cache explosion.
- **Trade-offs** — slightly worse at "needle-in-a-haystack" recall over very long contexts; can struggle with copying-task accuracy.

Hybrid designs (Jamba = Mamba + attention; Zamba; Samba) are gaining traction for ultra-long-context applications. As of 2026, attention is still dominant for most production work, but SSMs are creeping in for cost-sensitive long-context use cases.

### KV-cache optimizations

- **PagedAttention** (vLLM, 2023) — store KV cache in non-contiguous "pages" like a virtual memory system; eliminates fragmentation; 2-4× throughput gain.
- **FlashAttention** (Dao 2022; FlashAttention-2 2023; FlashAttention-3 2024) — fuse attention into a single CUDA kernel that never materializes the full N×N matrix. Memory-efficient and faster.
- **Speculative decoding** — use a small draft model to propose K tokens; verify with the big model in parallel. 2-3× latency reduction without quality loss.
- **Prompt caching** (Anthropic, Aug 2024; OpenAI, Oct 2024; Gemini, Sep 2024) — cache the prompt prefix at the provider; reuse the KV cache across requests. **Up to 90% cost reduction** on long static prompts.

---

## 🎲 Sampling: how the model actually picks a token

After the final layer projects to a vocabulary-sized vector of logits, you need to pick one token. The sampler controls the model's "personality."

| Strategy | What it does | When to use |
|----------|--------------|-------------|
| **Greedy** | Always pick argmax | Deterministic, dry. Tool calling, classification. |
| **Temperature** | Divide logits by T before softmax. T<1 sharpens; T>1 flattens. | T=0 ≈ greedy. T=0.7 is the default vibe. T=1.5+ gets weird. |
| **Top-k** | Sample only from top K most-probable tokens | K=40 is a common default. Blunt but effective. |
| **Top-p (nucleus)** | Sample from smallest set of tokens whose cumulative prob ≥ p | p=0.9 is the default. Best general-purpose. |
| **Beam search** | Explore K parallel candidate sequences | Translation, summarization. Rarely used for chat (boring outputs). |
| **Min-p** | Sample from tokens with prob ≥ p · max_prob | Newer; robust across temperatures. |

**Why your "creative writing" prompt sometimes outputs garbage:** very low-probability tokens are sampled when temperature is high. Top-p clips them. Most APIs default to top-p=1.0 (no clipping) when you set temperature > 0, which is why setting `temperature=1.5` alone is a recipe for hallucination.

---

## 🚨 Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "Tokens are words" | Tokens are subword chunks. "tokenization" might be 4 tokens. |
| "Bigger context = better answers" | Bigger context = more attention dilution + cost. RAG often beats long-context. |
| "1 token ≈ 4 chars universally" | True for English. Code, math, multilingual text can be 2–3× worse. |
| "Temperature = randomness" | Temperature reshapes the *distribution shape*; combine with top-p for real control. |
| "MoE models are smaller" | MoE active params < total params, but VRAM holds all experts. |
| "Long context replaces RAG" | Even 1M-context models suffer "lost in the middle." RAG + 128K is usually best. |
| "Attention is bidirectional in GPT" | GPT-family is causal/decoder-only; only encoders are bidirectional. |
| "The tokenizer doesn't matter for cost" | The Cursor story exists because it absolutely does. |

---

## 🏗️ Lab: Build a Context-Budget Calculator

Goal: build a Python tool that takes (system_prompt, conversation_history, tool_schemas, requested_max_completion) and tells you (a) total input tokens, (b) cost in USD at current provider prices, (c) whether you'll exceed the model's context window, (d) which tokenizer to use.

Stretch: support multiple providers (OpenAI, Anthropic, Cohere) and account for prompt caching (Anthropic charges 0.25× / 1.25× cached vs uncached).

You'll write this in <100 lines. Putting it in a `pre-deploy-check` step of your CI catches the Cursor-style bug before it ships.

---

## 📊 Case Study — Anthropic's Prompt Caching Launch (August 2024)

**Situation.** Anthropic launched prompt caching for Claude 3.5 Sonnet on August 14, 2024. The feature lets you mark a portion of the prompt as cacheable; subsequent requests within 5 minutes that share that exact prefix get the KV cache reused, charged at **0.10× the normal input rate** (later refined to 0.25× for "ephemeral" 5-min cache and 1.25× write cost).

**The architectural implication.** Caching is *not* a billing trick. The provider literally stores the post-attention KV state of the cached prefix on hot GPUs and reuses it. The K and V tensors of every layer for every token in the prefix are persisted. Combined with the quadratic cost of attention, this is the difference between a $2 query and a $0.20 query for a long-system-prompt application like a coding assistant or a structured retrieval pipeline.

**The deployment win.** Within three weeks of launch, Replit, Cursor, GitHub Copilot Chat, and Cody had all integrated prompt caching for their codebase-context prompts (which are often 100K+ tokens). Replit publicly reported a **74% cost reduction** on their AI agent's context-loading step.

**What this means for you, the engineer.** Architecture decisions now have *cache-friendliness* as a first-class concern. If you change the system prompt by one byte in the middle, the cache misses. If you append to the prompt instead of prepending, the cache holds. Designing prompts for caching is a Module-9 deployment skill, but the *reason* it works is sitting right here in Module 1's attention math.

**Discussion (Socratic).**
- **Q1:** Why is prompt caching ~10× cheaper per token than uncached input? Walk through what computation is being *avoided*. Bonus: what computation is *still* being done?
- **Q2:** A prompt has structure `[10K-token system prompt] + [user message]`. If you reorder it as `[user message] + [10K-token system prompt]`, does caching still help? Why or why not?
- **Q3:** Suggest one production scenario where prompt caching *hurts* — i.e., introduces a bug or surprising cost. (Hint: think about determinism.)

---

## ✅ Module 1 Summary

You now know:

- 🧠 The mental model: LLM = tokenizer + embedding + N transformer blocks + LM head + sampler
- 🔤 Tokenization is BPE/SentencePiece/WordPiece; tiktoken is the cost-estimation standard
- ⚛️ The transformer block: norm → attention (Q/K/V) → residual → norm → FFN → residual
- 🔄 GQA cuts KV cache 8× with negligible quality loss; MHA, MQA are the alternatives
- 🧭 RoPE is the dominant positional scheme; YaRN extends it to 100K+ tokens
- 🚀 MoE (Mixtral, DeepSeek-V3) and SSMs (Mamba, Jamba) are the 2024–2026 frontier architectures
- 💾 KV cache dominates inference cost; PagedAttention, FlashAttention, speculative decoding, prompt caching are the tools
- 🎲 Sampling = temperature + top-p + top-k; defaults matter

**Next steps:**
1. 🎥 Watch the curated videos: [Videos.md](./Videos.md)
2. ✏️ Take the quiz: [Quiz.md](./Quiz.md) — aim for 21/26
3. 📋 Review the [Cheat-Sheet.md](./Cheat-Sheet.md)
4. ➡️ Move on: [Module 2 — Embeddings & Vector Databases](../Module-02-Embeddings-Vector-Databases/Reading.md)

> **Where this leads.**
> - **Inside this course:** Module 2 covers embeddings — the *exact same* "vector-from-text" idea, except optimized for similarity rather than next-token prediction. Module 5 (fine-tuning) bolts on top of the same architecture. Module 9 (deployment) is where attention-cost decisions become production decisions.
> - **Cross-course:** Course 29 (Prompt Engineering Specialist) drills the *user-facing* side of context windows; this module is the engineer's view of the same constraint.
> - **Practice:** Practice Exam 1 has ~6 questions from this module.

---

## 📚 Further Reading (Optional)

**Foundational papers (read at least the first three):**
- 📄 Vaswani et al. (2017). *Attention Is All You Need.* The transformer. ~12 pages. Read it.
- 📄 Radford et al. (2018, 2019). *Improving Language Understanding by Generative Pre-Training* (GPT-1); *Language Models are Unsupervised Multitask Learners* (GPT-2). The decoder-only thesis.
- 📄 Su et al. (2021). *RoFormer: Enhanced Transformer with Rotary Position Embedding.* The RoPE paper.
- 📄 Press et al. (2022). *Train Short, Test Long: Attention with Linear Biases Enables Input Length Extrapolation.* ALiBi.
- 📄 Dao et al. (2022, 2023, 2024). *FlashAttention* v1/v2/v3 — kernel-level attention optimization.
- 📄 Gu & Dao (2023, 2024). *Mamba* and *Mamba-2.* Selective SSMs.
- 📄 Jiang et al. (2024). *Mixtral of Experts.* The open-weight MoE that mattered.

**Tutorials (better than the papers for learning):**
- 🎬 Karpathy, *Let's build GPT from scratch.* The single best free explainer in existence.
- 🎬 Karpathy, *Let's build the GPT Tokenizer.* The companion video; covers BPE soup-to-nuts.
- 🎬 3Blue1Brown, *But what is a GPT?* and *Attention in Transformers*. Beautiful visualizations.
- 📖 Lilian Weng's blog (*lilianweng.github.io*) — *The Transformer Family* and *Large Transformer Model Inference Optimization*.
- 📖 *Hands-On Large Language Models* (Alammar & Grootendorst, O'Reilly 2024) — Chapters 2–4 cover all of this beautifully.

**Tools to install before Module 2:**
- 📦 `tiktoken`, `transformers`, `sentencepiece`
- 🌐 An OpenAI **OR** Anthropic API key (you'll switch back and forth)
- 🤗 A Hugging Face account (free tier)
