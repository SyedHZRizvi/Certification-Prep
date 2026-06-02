# 📋 Module 2 Cheat Sheet: Few-Shot & In-Context Learning

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 📚 ICL Vocabulary

| Term | Meaning |
|------|---------|
| **Zero-shot** | No examples |
| **One-shot** | 1 example |
| **Few-shot** | 2–32 examples |
| **Many-shot** | 100+ examples (200K+ context needed) |
| **Shot** | One input-output pair |
| **Format learning** | Model picks up structure even from noisy labels |

---

## 🎯 Example Selection Strategies

| Strategy | Best for | Cost |
|----------|----------|------|
| **Diverse coverage** | Balanced classification, new task | Free |
| **kNN retrieval** | Production w/ labeled corpus | Embed + vector DB |
| **Hardest mining** | Boundary cases, fine-grained labels | Eval-discovered |
| **Recency bias** | Style transfer | Free |
| **Anchor-and-elaborate** | New prompt design | Free |

🎯 *Quality > quantity. 3 great > 10 mediocre.*

---

## 📐 Ordering Rules

| Rule | Why |
|------|-----|
| **Balance label counts** | Defeats majority-label bias |
| **Randomize order** | Reduces order-sensitivity (~30pt swing per Lu 2022) |
| **Interleave classes** | Avoid spurious position→class shortcuts |
| **Test order on held-out set** | Small lift, real |
| **Put critical example LAST** | Recency bias works for you when intentional |

---

## 🏷️ Vendor Format Preferences

| Model | Preferred format |
|-------|------------------|
| **Claude** | XML tags (`<example>...</example>`) |
| **GPT** | Agnostic — markdown, JSON, or XML all fine |
| **Gemini** | Agnostic — markdown often cleanest |
| **Llama** | Markdown / JSON; test individually |

---

## 📊 How Many Shots?

| Task | Typical N |
|------|-----------|
| Trivial classification | 0–3 |
| Standard classification | 3–5 |
| Many-class classification | 8–16 |
| Complex extraction | 5–10 |
| Style imitation | 3–5 (well-chosen) |
| High-stakes batch | 16–32 |
| Long-context fine-tune-alternative | 100s–1000s |

---

## 🚀 Production Few-Shot Anatomy

```
[1] System: persona + rules + format spec
[2] "Here are examples:"
[3] <example>
      <input>...</input>
      <reasoning>one sentence — optional but +5–15pt</reasoning>
      <output>...</output>
    </example>
    × N
[4] "Now classify the following using the same format:"
[5] <input>{new_input}</input>
    <output>
```

---

## 💰 Few-Shot vs Fine-Tune

| Dimension | Few-Shot | Fine-Tune |
|-----------|----------|-----------|
| Setup time | Hours | Weeks |
| Per-call cost | Higher (ships examples) | Lower |
| Iteration speed | Minutes | Days |
| Data needed | 10–100 examples | 1,000+ |
| Operational complexity | None | Training infra |
| Use when | Fast iteration, ≤1M calls/mo | High volume, latency-sensitive |

---

## 🧪 Many-Shot ICL Notes

- Requires 200K+ context model (Claude, Gemini, GPT-5)
- DeepMind 2024 (Agarwal et al.) — often matches fine-tune on narrow tasks
- **Combine with Anthropic prompt caching** — 10% cost on cached prefix
- Watch jailbreak vector — many-shot can erode safety training

---

## 🛠️ Common Quick Fixes

| Symptom | First check |
|---------|-------------|
| Same input, different outputs | Lower T, fix order, set seed |
| Accuracy crashes on new traffic | Examples too narrow → kNN retrieval |
| Model copies examples verbatim | Add explicit "classify NEW input" instruction; reduce T |
| Model writes the next example | Add `stop_sequences=["\n\n---"]` |
| Cost ballooning | Move to prompt caching or reduce shots after eval |
| Format drift | Switch to XML tags (Claude) or structured output (Module 4) |

---

## 🏆 Exam Power Phrases

✅ Often **right**:

- "Try zero-shot first to establish a baseline"
- "Use similarity-based (kNN) retrieval for production few-shot"
- "Balance label distribution and randomize example order"
- "Anthropic models prefer XML tags for examples"
- "Add a one-sentence reasoning line per example"

❌ Often **wrong**:

- "More examples always help" (diminishing returns + cost)
- "Order doesn't matter" (it does — 30pt swings)
- "Few-shot replaces fine-tuning in every case"
- "Random labels are useless" (Min 2022 disagrees)
- "All models prefer the same example format"

---

## 🗓️ Key Facts To Memorize Cold

- Brown et al. 2020 = the GPT-3 / ICL paper
- Lu et al. 2022 = order matters 30+ points
- Min et al. 2022 = random labels still help (format learning)
- Agarwal et al. 2024 = many-shot in-context learning (DeepMind)
- Anthropic XML tags for Claude few-shot
- Anthropic prompt caching = ~10% cost on cached prefix
- Few-shot domain = **12% of the Final Mock**

---

## ✏️ Quick Self-Check

Cover the answers and recite:

1. Define zero/one/few/many-shot? ___
2. Five example-selection strategies? ___
3. Why does ordering matter, and what's the size of the effect? ___
4. When does fine-tuning still beat few-shot? ___
5. Which vendor prefers XML tags, and why? ___

If you can answer all 5 in under 60 seconds, you own this module. ✅

---

## 🛠️ Production Few-Shot Template (Copy-Paste Ready)

### Claude (XML-tagged)
```xml
You are a {ROLE}. Classify each input into one of the following categories: {LIST}.

<examples>
<example>
<input>{example_1_input}</input>
<reasoning>{one sentence why}</reasoning>
<output>{example_1_label}</output>
</example>
<example>
<input>{example_2_input}</input>
<reasoning>{one sentence why}</reasoning>
<output>{example_2_label}</output>
</example>
... (3-8 total) ...
</examples>

Classify the following new input using the same format:
<input>{new_input}</input>
<reasoning>
```

### GPT-5 / Llama / Gemini (markdown-delimited)
```
You are a {ROLE}. Classify each input into one of: {LIST}.

### Example 1
Input: {example_1_input}
Reasoning: {one sentence why}
Output: {example_1_label}

### Example 2
Input: {example_2_input}
Reasoning: {one sentence why}
Output: {example_2_label}

... (3-8 total) ...

### Now classify
Input: {new_input}
Reasoning:
```

---

## 🧪 kNN Few-Shot — Pseudocode

```python
# At index time
for ex in training_examples:
    embeddings_index.add(embed(ex.input), payload=ex)

# At inference time
def classify(new_input):
    query_emb = embed(new_input)
    top_k = embeddings_index.search(query_emb, k=5)
    prompt = build_fewshot_prompt(examples=top_k, query=new_input)
    return call_llm(prompt, temperature=0)
```

Tools: FAISS, pgvector, Pinecone, Weaviate, Chroma, Qdrant, Milvus.

---

## 📐 Five Decision Heuristics

1. **Have a held-out eval set BEFORE you compare prompts.** (Module 6)
2. **Start zero-shot. Add examples only after measuring baseline.**
3. **Quality of examples > count of examples.** 3 great > 10 mediocre.
4. **Balance label distribution; randomize order; test ordering on held-out set.**
5. **Move to kNN retrieval when you have a labeled corpus of 1K+ examples.**

---

## 💸 Cost Math For Few-Shot

For a 12-shot prompt at ~150 tokens per example + 600-token system + 100-token user query:

- Total input: ~150*12 + 600 + 100 = ~2,500 tokens per call
- On Claude Sonnet ($3/MTok input): ~$0.0075 per call
- 100K calls/month: **~$750/month** (input alone)
- **With Anthropic prompt caching** on the system + examples: ~$75/month after first call (10% on cached portion)

🚨 *If your few-shot input costs are dominating, enable prompt caching (Module 8) before reducing shots.*

---

➡️ [Module 3: Chain-of-Thought & Reasoning](../Module-03-Chain-of-Thought-Reasoning/Reading.md)
