# ✏️ Module 1 Quiz: LLM Architecture & Tokenization

> **Instructions:** Answer all 26 questions WITHOUT looking at the reading. Then check your answers below. Aim for 22/26.
>
> **Bloom distribution:** Remember 6 · Understand 7 · Apply 7 · Analyze/Evaluate 5 · Create 1.

---

## Questions

### Q1. Which best describes the dominant architecture of modern generative LLMs (Claude, GPT, LLaMA, Mistral)? *(Remember)*
A. Encoder-only
B. Encoder-decoder
C. Decoder-only with causal self-attention
D. Recurrent neural network (LSTM)

---

### Q2. Tokenization algorithm used by GPT-4 and OpenAI's `tiktoken` library: *(Remember)*
A. WordPiece
B. Byte-Pair Encoding (BPE)
C. Unigram language model
D. Character-level

---

### Q3. The dominant reason a transformer's compute scales quadratically with sequence length is: *(Understand)*
A. The feedforward layer
B. The embedding lookup
C. The self-attention QKᵀ matrix is N×N
D. Tokenization overhead

---

### Q4. A developer switches from `cl100k_base` to GPT-2's tokenizer for a code-completion product. The MOST likely effect on latency: *(Analyze)*
A. Slightly faster
B. Roughly the same
C. Significantly slower because the same code now consumes more tokens and attention is quadratic
D. Slower only on the first call

---

### Q5. In self-attention, Q, K, and V stand for: *(Remember)*
A. Quantity, Kind, Volume
B. Query, Key, Value
C. Quadratic, Kernel, Vector
D. Query, Knowledge, Verification

---

### Q6. Grouped-Query Attention (GQA) saves memory mainly by reducing: *(Understand)*
A. The number of parameters in the FFN
B. The number of layers
C. The size of the KV cache (fewer K/V heads than Q heads)
D. The vocabulary size

---

### Q7. RoPE (Rotary Positional Embedding) encodes position by: *(Understand)*
A. Adding a sinusoidal vector at the input
B. Rotating Q and K vectors by an angle proportional to position
C. Learning a one-hot encoding per slot
D. Adding a bias to the FFN

---

### Q8. Which sampling parameter controls "include only tokens whose cumulative probability reaches p"? *(Remember)*
A. Temperature
B. Top-k
C. Top-p (nucleus)
D. Beam width

---

### Q9. A 7B-parameter LLaMA-2 model uses an FFN expansion factor of 4. The typical hidden-state dimension is 4096; what is the intermediate FFN dimension? *(Apply)*
A. 1024
B. 4096
C. 11008 (close to 4× with SwiGLU adjustment) — accept any "around 4× hidden"
D. 65536

---

### Q10. The PRIMARY benefit of FlashAttention is: *(Understand)*
A. It changes the math of attention
B. It implements attention in a fused kernel that never materializes the full N×N matrix
C. It removes the need for softmax
D. It allows running on CPUs only

---

### Q11. In a Mixture-of-Experts (MoE) model like Mixtral 8×7B, when a token is processed: *(Understand)*
A. All 8 experts run on every token
B. A router selects top-K experts per token (typically top-2); only those run
C. Only one expert ever runs
D. The router is hardcoded

---

### Q12. Why is the KV cache often the bottleneck of long-context inference? *(Analyze)*
A. Disk I/O speed
B. Its size scales with sequence length × layers × heads × dim — it dominates GPU VRAM
C. Network bandwidth
D. CPU cache misses

---

### Q13. A user issues the same 10K-token prompt twice in 30 seconds on Anthropic with prompt-caching enabled. The second call's input pricing is approximately: *(Apply)*
A. Same as the first (no discount)
B. Roughly 0.1×–0.25× of the uncached rate
C. Free
D. 10× more expensive

---

### Q14. Selective state-space models (Mamba, Mamba-2) replace attention with a recurrence whose compute scales: *(Remember)*
A. O(N²) like attention
B. O(N log N)
C. O(N) — linear in sequence length
D. O(1)

---

### Q15. Which is NOT typically a benefit of decoder-only architectures relative to encoder-decoder? *(Analyze)*
A. Simpler training objective (next-token prediction)
B. Easier to scale
C. Inherently bidirectional attention
D. Strong empirical performance across tasks at scale

---

### Q16. SentencePiece is most associated with: *(Remember)*
A. BERT
B. GPT-2 / GPT-3
C. LLaMA family (and T5, PaLM, Gemma)
D. ELMo

---

### Q17. Temperature in the sampler: *(Understand)*
A. Multiplies the logits before softmax
B. Divides the logits by T before softmax — T<1 sharpens, T>1 flattens
C. Adds noise to embeddings
D. Has no effect on output

---

### Q18. A team is choosing between MQA and GQA for a new model. The strongest argument for GQA over MQA is: *(Evaluate)*
A. MQA has more parameters
B. GQA preserves more attention diversity (more K/V heads) and stays closer to MHA quality
C. GQA is open-source and MQA isn't
D. MQA can't be combined with RoPE

---

### Q19. The total token count an English text of ~4000 characters is approximately: *(Apply)*
A. 100
B. 500
C. 1000
D. 4000

---

### Q20. Speculative decoding accelerates inference by: *(Understand)*
A. Skipping the softmax
B. Using a small draft model to propose K tokens, verified in parallel by the big model
C. Reducing the vocabulary
D. Quantizing the weights

---

### Q21. You see a prompt with `[10K-token system_prompt] + [user_message]` running 25× slower than `[10K-token system_prompt unchanged] + [different user_message]`. After eight cache hits on the same prefix, latency normalizes. The MOST likely cause: *(Apply)*
A. The model was retrained
B. The system prompt prefix was *modified by 1 byte mid-way* and the cache was missing repeatedly
C. The network had transient packet loss
D. The user message was too long

---

### Q22. A developer wants to add a "stop-on-`</response>`" sequence to a chat completion API call. Which of these is the right knob? *(Apply)*
A. Temperature
B. Stop sequences
C. Top-p
D. Frequency penalty

---

### Q23. Why does long-context retrieval often beat long-context-only (cramming all docs into a 1M-token window)? *(Analyze)*
A. Long context models always crash
B. "Lost in the middle" — attention dilutes; relevant tokens get drowned in irrelevant ones
C. Long context is free
D. They are equivalent

---

### Q24. The "LM head" in a decoder-only transformer is: *(Understand)*
A. A separate attention layer
B. A linear projection from hidden state to vocab logits, often weight-tied to the embedding matrix
C. The CPU controller
D. The tokenizer

---

### Q25. A 200K-token Claude prompt is run twice; the only change is *appending* a new user turn at the end (prefix unchanged). Cache-friendliness implications: *(Analyze)*
A. Cache misses (every byte changed)
B. Cache holds for the unchanged prefix; only the suffix needs fresh computation
C. Caches are random — undefined
D. The cache only works on prefixes ≤4K

---

### Q26. Design a context-budget calculator (Create-level). A user provides: model name, system prompt, conversation history, tool schemas, max completion tokens. Which of these BEST captures the minimum logic for a correct budget? *(Create)*
A. Sum the words in all components × 1.3
B. Use the *right tokenizer per model* (tiktoken `cl100k_base` for GPT-4o, Anthropic counter for Claude, etc.), sum all input components' token counts, add max-completion, compare to model's context limit, multiply by price-per-million
C. Use OpenAI's tiktoken for all providers
D. Estimate cost at $0.50/M tokens for every model

---

## 🎯 Answers + Explanations

### Q1: **C. Decoder-only with causal self-attention**
GPT, Claude, LLaMA, Mistral, Gemini, DeepSeek — all decoder-only. Encoder-decoder is mostly historical for new general-purpose LLMs (T5, BART remain for specialized seq2seq tasks).

### Q2: **B. Byte-Pair Encoding (BPE)**
tiktoken is OpenAI's BPE library. The vocab and merges are model-specific (`cl100k_base` for GPT-4 family; `o200k_base` for GPT-4o).

### Q3: **C. The self-attention QKᵀ matrix is N×N**
For each layer, computing attention requires an N×N matrix of similarities between every pair of positions. This is the fundamental scaling problem.

### Q4: **C. Significantly slower because the same code now consumes more tokens and attention is quadratic**
This is the Cursor story from the reading. GPT-2 tokenizer is brutal on code; same text = ~5× tokens = ~25× attention compute.

### Q5: **B. Query, Key, Value**
The three projections at each token position. Query asks; key offers; value carries the content.

### Q6: **C. The size of the KV cache (fewer K/V heads than Q heads)**
GQA groups query heads into G groups that share K/V. Llama-3 70B has 64 Q heads in 8 KV groups → 8× cache reduction.

### Q7: **B. Rotating Q and K vectors by an angle proportional to position**
RoPE makes the dot product Q·K depend on relative position naturally. Used in LLaMA, Mistral, Qwen, Claude family.

### Q8: **C. Top-p (nucleus)**
Smallest set of top tokens whose cumulative probability ≥ p (e.g., p=0.9). Sample from that set.

### Q9: **C. ~11008 (or any "about 4× hidden")**
LLaMA-2 7B uses 4096 hidden × ~2.7-3× with SwiGLU = 11008. The point: FFN is ~4× the hidden dim, the dominant param count per block.

### Q10: **B. It implements attention in a fused kernel that never materializes the full N×N matrix**
Same math, vastly better memory access pattern. Memory-efficient and faster.

### Q11: **B. Router selects top-K experts per token (typically top-2)**
Sparse activation is the entire point of MoE — vastly more parameters, only a fraction active per token.

### Q12: **B. KV cache size scales with sequence × layers × heads × dim**
For Llama-2-70B at 32K context, a single request's KV cache is ~84 GB. It dwarfs the model weights themselves on long contexts.

### Q13: **B. Roughly 0.1×–0.25× of the uncached rate**
Anthropic's ephemeral 5-min cache reads at 0.1× (or 0.25× depending on tier). The system saved your KV cache and reuses it.

### Q14: **C. O(N) — linear in sequence length**
The whole appeal of Mamba/SSMs: avoid the N² attention cost. State is fixed-size; processing is per-token linear.

### Q15: **C. Inherently bidirectional attention**
Decoder-only models use *causal* (masked) attention by design. Encoder-only (BERT) is bidirectional. So inherent bidirectionality is a feature of encoders, not decoders.

### Q16: **C. LLaMA family (and T5, PaLM, Gemma)**
SentencePiece is Google's library; LLaMA adopted it. BERT uses WordPiece; GPT uses BPE.

### Q17: **B. Divides logits by T before softmax — T<1 sharpens, T>1 flattens**
T=0 is greedy; T=0.7 is the common chat default; T>1.5 starts producing word-salad if you don't also tighten top-p.

### Q18: **B. GQA preserves more attention diversity → closer to MHA quality**
MQA collapses to 1 KV head; GQA keeps several. Better quality at most context lengths; smaller cache than MHA.

### Q19: **C. ~1000**
English averages ~4 chars/token in BPE tokenizers. Useful back-of-envelope.

### Q20: **B. Small draft model proposes K tokens; the big model verifies in parallel**
If the draft tokens are accepted, you got K tokens for the price of one decode step. 2-3× latency reduction is typical.

### Q21: **B. The system prompt prefix was modified by 1 byte and the cache was missing repeatedly**
Cache is *prefix-based*. Any change near the start invalidates everything after it. Append-only prompts are cache-friendly.

### Q22: **B. Stop sequences**
Stop sequences halt generation when the model emits the specified string. Common for structured outputs like XML/JSON.

### Q23: **B. "Lost in the middle"**
Liu et al. (2023) and follow-ups documented that long-context models attend disproportionately to the start and end. RAG retrieves only what's needed, sidestepping the problem.

### Q24: **B. A linear projection from hidden state to vocab logits, often weight-tied to the embedding matrix**
The "unembedding" step. Weight tying with the input embedding is a parameter-saving convention that also slightly improves quality.

### Q25: **B. Cache holds for the unchanged prefix; only the suffix needs fresh computation**
Caches are prefix-based. Appending is the canonical cache-friendly mutation. Prepending or middle-edits invalidate.

### Q26: **B. Right tokenizer per model + sum all inputs + add max completion + compare to context limit + multiply by price**
The single most common production bug is to use one tokenizer for cost estimation across all providers. Each model has its own tokenizer and its own price.

---

## 📊 Score Yourself

- 24–26/26 → 🏆 Architecture mastered. Move to Module 2.
- 21–23/26 → ✅ Strong. Note specific gaps; review them.
- 17–20/26 → ⚠️ Re-read Reading.md focusing on attention math + KV cache + tokenization.
- <17/26 → 🔁 Re-do the Karpathy videos before re-quizzing.

---

## 🃏 Add To Your Flashcards

- BPE vs SentencePiece vs WordPiece (which model uses which)
- Attention formula: softmax(QKᵀ/√dk)·V
- MHA / MQA / GQA — when to use each
- RoPE / ALiBi / sliding window — positional schemes
- KV cache math (for a Llama-2-70B at 32K: ~84 GB)
- MoE (Mixtral) — total vs active params
- Mamba — linear-time state-space alternative
- Sampling: temperature, top-p, top-k, beam, min-p
- Prompt caching: prefix-based, 0.1×–0.25× cost

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 2 — Embeddings & Vector Databases](../Module-02-Embeddings-Vector-Databases/Reading.md)
