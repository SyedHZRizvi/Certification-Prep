# Module 2: Few-Shot & In-Context Learning 📚

> **Why this module matters:** 12% of the Final Mock. In-context learning is the single most important capability the GPT-3 paper (Brown et al. 2020) demonstrated, it's why we have an industry. Knowing when to add examples, which examples to pick, and how to order them often beats fine-tuning at a fraction of the cost and operational headache.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - Module 1 (tokens, roles, sampling parameters)
> - Reading a JSON-formatted chat conversation
> - The notion of a "shot" being one input-output pair shown to the model
>
> If Module 1 is shaky, go back. This module assumes you already speak its vocabulary.

---

## 📖 A Story: The Compliance Team That Saved a Bank $4.6M

Meet Yuki, a senior risk analyst at a mid-tier European bank. Her team's job: classify every incoming customer support ticket into one of 47 regulatory categories (GDPR (General Data Protection Regulation)-Data, AML (Anti-Money Laundering)-Suspicious, MIFID-Investment, Complaint-Hardship, etc.). Two human analysts, working full-time, hit ~89% accuracy and a 14-day backlog.

In Q3 2024, leadership greenlit an AI pilot. The first proposal: **fine-tune a small classifier** on 18 months of labeled tickets. Cost estimate: €420K and 4 months. Yuki proposed a different path:

1. **Week 1:** A zero-shot prompt with the 47 category names and 1-line definitions. Baseline accuracy: 61%.
2. **Week 2:** A 12-shot prompt, 12 carefully curated examples (one per high-volume category plus 5 hard edge cases). Accuracy: **88%**.
3. **Week 3:** A retrieval-augmented few-shot prompt that pulls the **5 most-similar historical tickets** at runtime from a vector index. Accuracy: **94.2%**.

Total cost of Yuki's solution: €11K in API (Application Programming Interface) spend + ~3 weeks of engineering. Total cost avoided: ~€400K and 16 weeks. The compliance team redeployed two analysts to a higher-value triage role; the bank's regulator audit pass rate jumped from 91% to 99%.

The point isn't that few-shot beats fine-tuning every time (it doesn't, Module 8 covers when fine-tuning wins). The point is that **in-context learning is so powerful that you should always try it first**, and that the *quality* of your examples often matters more than the *quantity*. This module is how Yuki picked those 12 examples.

---

## 🧠 What Is In-Context Learning?

In-context learning (ICL) is the phenomenon first demonstrated at scale by Brown et al. 2020 in the GPT-3 paper where a sufficiently large language model can perform a new task **just by being shown a few input-output examples in its prompt**, with no parameter updates.

This was the unlock that made LLMs commercially viable. Before ICL, every new task required fine-tuning. With ICL, you can pivot a model to a new domain in 20 minutes.

### The terminology

| Term | Definition |
|------|------------|
| **Shot** | One input-output example provided in the prompt |
| **Zero-shot** | No examples; just the task description |
| **One-shot** | Exactly one example |
| **Few-shot** | 2–N examples (typically 3–20) |
| **Many-shot** | Hundreds or thousands of examples (only viable with 200K+ context models) |
| **In-context learning (ICL)** | The umbrella name for all of the above |
| **Episodic prompt** | A prompt that includes examples as if they're "episodes" the model can learn from |

### When ICL works and when it doesn't

ICL works astonishingly well when:

- The task can be **demonstrated** through input-output pairs (classification, extraction, translation, formatting)
- The pattern is **regular**, the relationship between input and output is stable across examples
- The model is **large enough**, ICL improves dramatically with model scale (Brown 2020 showed it emerged around 6B parameters and grew strongly through 175B)

ICL underperforms when:

- The task requires **specialized knowledge** the model lacks (no amount of examples teaches it your internal API)
- Examples **conflict** with each other (the model picks an incoherent middle)
- The task is **trivial** and the examples just bloat the prompt (zero-shot beats few-shot for simple instructions)

---

## 0️⃣ Zero-Shot Prompting

Zero-shot is the simplest pattern: tell the model what to do, in plain language, with no examples.

```python
prompt = """Classify the sentiment of this customer review as POSITIVE, NEGATIVE, or NEUTRAL.

Review: "The shipping was fast but the product itself was disappointing, color didn't match the photo."

Sentiment:"""
```

### When zero-shot is the right answer

- The task is universally understood (sentiment classification, summarization, translation)
- The model is large and recent (GPT-5, Claude 4.7, Gemini 2.5 are extremely strong zero-shot)
- You're early in iteration and want a baseline
- Token budget is tight
- The output is short and unambiguous

### Zero-shot tricks that punch above their weight

| Trick | Example | Why it works |
|-------|---------|--------------|
| **Role assignment** | `"You are an expert linguist..."` | Activates relevant training data; helps on domain tasks |
| **Output format spec** | `"Respond with exactly one word: POSITIVE, NEGATIVE, or NEUTRAL."` | Reduces hallucinated formats |
| **Chain-of-thought trigger** | `"Let's think step by step."` (Module 3) | Improves reasoning even zero-shot |
| **Constraints first** | `"You will be given X. You must return Y. Do not Z."` | Modern instruction-tuned models attend strongly to leading constraints |
| **Forbidden behaviors** | `"Never make up information. If unsure, respond with 'UNKNOWN'."` | Reduces confabulation on long-tail inputs |

🎯 **Exam pattern:** *"Which technique often improves zero-shot accuracy on a reasoning task with no examples added?"* → Chain-of-thought trigger (`"Let's think step by step"`). Wei et al. 2022 showed this works zero-shot too.

---

## 1️⃣ One-Shot & Few-Shot Prompting

The few-shot pattern: show the model N input-output pairs, then ask it to produce the output for a new input.

```python
prompt = """Classify the sentiment of customer reviews as POSITIVE, NEGATIVE, or NEUTRAL.

Review: "Absolutely love this, works exactly as described."
Sentiment: POSITIVE

Review: "Item arrived but stopped working after 2 days. Returning."
Sentiment: NEGATIVE

Review: "It's okay I guess. Does what it says."
Sentiment: NEUTRAL

Review: "The shipping was fast but the product itself was disappointing, color didn't match the photo."
Sentiment:"""
```

### Brown et al. 2020, the in-context learning paper

The GPT-3 paper measured zero-shot vs one-shot vs few-shot (typically 32 shots) across 42 benchmarks. Key findings:

1. **Few-shot beats one-shot beats zero-shot** in most cases, often by 10–30 percentage points
2. **The gap grows with model scale**, ICL is a capability that emerges and strengthens at large parameter counts
3. **Some tasks benefit far more from examples than others**, extraction and structured output are big winners; basic reasoning is sometimes a wash
4. **The model is genuinely "learning" the pattern, not just retrieving**, random label assignments still help, suggesting format learning matters too

This is the paper to cite when leadership asks why you didn't fine-tune.

### How many shots?

| # of shots | Use when |
|------------|----------|
| **0** | Task is trivial; or you want a baseline; or your model is huge and well-trained |
| **1** | You want to show output format without conditioning too much on content |
| **3–5** | The sweet spot for most classification + extraction tasks |
| **8–16** | Hard tasks with many label classes; subtle distinctions; rare label coverage |
| **32–100** | Diminishing returns past ~20 for most tasks; reserve for high-stakes batch jobs |
| **100s–1000s (many-shot)** | Only on 200K+ context models; explored by Anthropic and DeepMind, often beats fine-tuning on narrow tasks |

🚨 **Trap:** More shots = more cost = more latency. The marginal benefit drops fast. Always run an eval (Module 6) before locking in N.

---

## 🎯 Example Selection, The Highest-Leverage Decision

The biggest performance gain in few-shot is **not** going from 4 → 8 shots; it's picking the **right** 4 shots. Strategies:

### Strategy 1: Diverse coverage

Pick examples that span the **label space** (one per class) and the **input distribution** (short, long, easy, hard, common phrasings, edge cases). Use this when:

- Labels are imbalanced
- You want predictable behavior across many input types
- You're starting from scratch

### Strategy 2: Similarity-based retrieval (kNN few-shot)

At runtime, embed the new input, retrieve the k most similar training examples from a vector index (FAISS, Pinecone, Weaviate, pgvector), and use those as the shots.

```python
# Pseudo-code
new_input_embedding = embed_model.embed(new_input)
retrieved_examples = vector_index.search(new_input_embedding, top_k=5)
prompt = build_fewshot_prompt(retrieved_examples, new_input)
```

This is what Yuki's bank did in Week 3. Results: a 6+ point lift over static few-shot. Used by GitHub Copilot, Cursor, Replit Ghostwriter, and most production RAG (Retrieval-Augmented Generation)-meets-classification systems.

### Strategy 3: Hardest-example mining

Pick examples that the model **gets wrong** in zero-shot. The model learns the boundary it was missing. Useful for fine-grained or subjective tasks where the easy cases were never the problem.

### Strategy 4: Recency-bias exploitation

Models attend more strongly to **later examples** (the recency effect). If you need to bias the model toward a specific style or class, put the most-representative example **last**.

### Strategy 5: "Anchor and elaborate"

First example sets the high-confidence anchor (typical case). Subsequent examples show the edge cases. This stabilizes the model's frame before testing the boundaries.

| Strategy | Best for | Cost |
|----------|----------|------|
| Diverse coverage | New tasks, balanced classification | Free (static) |
| Similarity retrieval (kNN) | Production systems with large training corpora | Embedding + vector DB |
| Hardest examples | Boundary cases, fine-grained labels | Eval-time discovery |
| Recency bias | Style transfer, "do it more like X" | Free (static) |
| Anchor and elaborate | New task design, prompt scaffolding | Free (static) |

🎯 **Memorize:** *Quality > quantity in few-shot.* Three excellent examples often beat ten mediocre ones.

---

## 📐 Example Ordering, Recency Effect & Other Biases

Lu et al. 2022 (*Fantastically Ordered Prompts and Where to Find Them*) showed that **the order of few-shot examples can swing accuracy by 30+ percentage points** on the same examples. This is one of the most under-discussed findings in prompt engineering.

### Documented effects

| Effect | Impact |
|--------|--------|
| **Recency bias** | The model attends more to later examples. Label distribution near the end skews predictions. |
| **Majority label bias** | If 4 of 5 examples are POSITIVE, the model over-predicts POSITIVE. |
| **Common token bias** | The model favors labels with common tokens (e.g., "yes" over rare terms). |
| **Position-token co-occurrence** | If a class always appears in position 1, model learns spurious position→class shortcut. |

### Defenses

1. **Balance label distribution**, equal counts of each class
2. **Randomize order per request** (or use a fixed shuffled order tested on an eval set)
3. **Use a held-out eval set to pick the best order** (small lift but real)
4. **Avoid clustering similar examples consecutively**, interleave them
5. **For very-large few-shot (16+), order matters less**, the recency effect dilutes

🚨 **Trap:** A reviewer once cut a vendor's pilot prompt to 8 examples to save tokens. The accuracy stayed flat for 2 weeks, then crashed when a new input distribution arrived. Root cause: their original example *order* was unbalanced and they relied on a fragile shortcut. Test ordering when you cut shots.

---

## 🏷️ Anatomy of a Production Few-Shot Prompt

Here's the structure Yuki's team standardized on after the bank pilot:

```
[1. SYSTEM PROMPT]
   Role + task description + output format + non-goals + constraints

[2. EXAMPLES SECTION HEADER]
   "Here are examples of correct classifications:"

[3. EXAMPLES, 5 to 10]
   Input: <ticket text>
   Label: <one of 47 categories>
   Reasoning: <one sentence, optional but stabilizes the model>
   ---

[4. INSTRUCTION TO CONTINUE]
   "Classify the following new ticket using the same format:"

[5. NEW INPUT]
   Input: <new ticket>
   Label:
```

### Why each piece matters

- **System prompt** (Module 1), locks in persona and rules independent of user input
- **Examples header**, gives the model a clear demarcation between "what to learn from" and "what to do"
- **Per-example reasoning line**, even one sentence of explanation per example often improves accuracy by 5–15 points; this is the bridge to chain-of-thought (Module 3)
- **Delimiter (`---`)**, explicit separators reduce examples-bleeding-into-output
- **Instruction to continue**, restates the task right before the new input, exploiting recency

### Common formatting patterns

```python
# XML-style (Anthropic recommends this for Claude)
prompt = """<examples>
<example>
<input>The shipping was slow.</input>
<output>NEGATIVE</output>
</example>
<example>
<input>Works as described.</input>
<output>POSITIVE</output>
</example>
</examples>

<input>{new_input}</input>
<output>"""

# JSON-style
prompt = """Examples:
{"input": "The shipping was slow.", "output": "NEGATIVE"}
{"input": "Works as described.", "output": "POSITIVE"}

Now classify:
{"input": "{new_input}", "output":"""

# Markdown / plain delimiter (works on every model)
prompt = """### Example 1
Input: The shipping was slow.
Output: NEGATIVE

### Example 2
Input: Works as described.
Output: POSITIVE

### Now classify
Input: {new_input}
Output:"""
```

🎯 **Memorize:** *Anthropic models prefer XML tags. OpenAI and Gemini models are agnostic. Llama variants vary, test both.*

---

## 🧪 Many-Shot ICL, The Long-Context Frontier

In 2024, Agarwal et al. (Google DeepMind, *Many-Shot In-Context Learning*) and Anthropic's *Many-shot jailbreaking* paper independently demonstrated that with 100K+ context windows, you can put **hundreds or thousands** of examples in a single prompt and get substantial performance lifts, sometimes matching or exceeding fine-tuning.

### When many-shot works

- 200K+ context model (Claude 4.7, Gemini 2.5)
- Narrow, well-defined task
- Plenty of high-quality labeled examples available
- You don't want the operational burden of fine-tuning
- You want to A/B test many prompt variants quickly

### Cost vs fine-tune trade-off

| Approach | Setup cost | Per-call cost | Operational complexity |
|----------|------------|---------------|------------------------|
| Zero/few-shot | Hours | ~$0.001–0.02 | None |
| Many-shot (100+) | Days | $0.05–0.50 | None |
| RAG few-shot (kNN) | Days | $0.005–0.05 | Vector DB |
| Fine-tune (LoRA) | Weeks | ~baseline | Training infra |
| Full fine-tune | Months | ~baseline | Full ML stack |

**Anthropic's prompt caching** (Module 8) makes many-shot dramatically cheaper, the cached portion costs ~10% of the normal input price.

🚨 **Trap from Anthropic's research:** Many-shot can also be a *jailbreak* vector, hundreds of fake "assistant agreed to bad request" examples in context can erode safety training. Module 7 covers this.

---

## 🔬 Scenario Walkthrough (Yuki's flow, made concrete)

> **Scenario:** Yuki has 18 months of labeled tickets (~22,000 examples). 47 categories. She wants to ship a classifier in 3 weeks. Decide the approach week by week.

**Week 1, Zero-shot baseline:**
```
You classify incoming customer tickets into one of 47 regulatory categories.

Categories (with one-line definitions):
1. GDPR-Data, request related to personal data access/deletion/portability
2. AML-Suspicious, possible money-laundering pattern or red flag
... [47 total]

Classify the ticket using ONLY the category name (no explanation).

Ticket: "{ticket_text}"
Category:
```
- Eval: 600 held-out tickets, exact-match accuracy.
- Result: 61% accuracy. Worst classes: 5 categories at <30%.

**Week 2, Static few-shot:**
- Pick 12 examples: 1 each for the 7 highest-volume categories, 5 hand-picked hard cases.
- Add a one-sentence reasoning line per example.
- Use Anthropic XML tags (model: Claude Haiku 4.5).
- Result: 88% accuracy. Cost per call: $0.0008.

**Week 3, Similarity-retrieval few-shot:**
- Embed all 22K historical tickets with `text-embedding-3-large`.
- At runtime: embed new ticket, retrieve top-5 most-similar examples.
- Build the prompt dynamically with those 5 retrievals.
- Result: **94.2% accuracy.** Cost per call: $0.0011 (embedding+retrieve+inference).

**Decision:** Ship Week 3 approach. Reserve fine-tuning evaluation for a follow-up if accuracy plateaus below 96%.

This is the *playbook*. You'll repeat this flow on every classification or extraction task for the rest of your career.

---

## ⚠️ Exam Traps & Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "More examples always means better accuracy" | Diminishing returns after ~5–10 for most tasks; order matters more than count past that. |
| "The order of examples doesn't matter" | Wrong. Lu et al. 2022 showed swings of 30+ points from reordering. |
| "Zero-shot is always worse than few-shot" | On trivial tasks with modern flagship models, zero-shot often ties or wins (and saves tokens). |
| "Examples must come from the training distribution" | Brown 2020 showed even random labels help, format learning matters. |
| "Few-shot replaces fine-tuning" | For most use cases yes; for narrow, high-volume, latency-sensitive use cases fine-tuning still wins on cost-per-call. |
| "All models prefer the same example format" | Claude prefers XML tags; others are agnostic; always test. |
| "Many-shot is free if you have the context" | You're paying for input tokens; cache aggressively (Module 8). |
| "kNN retrieval works without a good embedding model" | A weak embedding → weak retrievals → weak few-shot. Embeddings are the foundation. |

---

## 🎓 Key Terms To Know (Add to Flashcards!)

| Term | Definition |
|------|------------|
| **In-context learning (ICL)** | The model performs a task from examples in the prompt, with no weight updates |
| **Zero-shot / one-shot / few-shot / many-shot** | 0 / 1 / 2–32 / 100+ examples |
| **Shot** | One input-output example pair |
| **Brown et al. 2020** | The GPT-3 paper, landmark ICL demonstration |
| **Recency bias** | Model attends more to later examples in the prompt |
| **Majority label bias** | Model over-predicts the most-common label in the examples |
| **kNN few-shot** | Retrieve the k most-similar examples per new input |
| **Similarity-based retrieval** | Using embeddings + vector DB to pick examples |
| **Diverse coverage** | Picking examples that span the label/input space |
| **Hardest-example mining** | Picking examples the model currently fails on |
| **Anchor-and-elaborate** | First example = high-confidence anchor; later = edge cases |
| **Lu et al. 2022** | Fantastically Ordered Prompts paper, order matters a lot |
| **Agarwal et al. 2024** | Many-Shot In-Context Learning paper (DeepMind) |
| **Episodic prompt** | A prompt structured around input-output episodes |
| **Anthropic prompt caching** | Caching repeated prompt prefixes for ~10% of normal input cost |
| **Format learning** | The phenomenon where models pick up structure even from random labels |

### Acronyms cheat-row (Module 2)
| Acronym | Meaning |
|---------|---------|
| ICL | In-Context Learning |
| kNN | k-Nearest Neighbors |
| RAG | Retrieval-Augmented Generation |
| BPE | Byte-Pair Encoding |
| LoRA | Low-Rank Adaptation (parameter-efficient fine-tuning) |
| MoE | Mixture of Experts |

---

## 📊 Case Study, The 2020 GPT-3 Paper & The Birth of an Industry

**Situation.** In May 2020, OpenAI published *Language Models are Few-Shot Learners* (Brown et al., NeurIPS 2020). The paper described GPT-3, a 175B-parameter transformer, and more importantly demonstrated that with sufficient scale, models could perform **dozens of tasks** they were never explicitly fine-tuned for, **just from a few examples in the prompt**.

**The result that shocked the field.** Across 42 NLP (Natural Language Processing) benchmarks (translation, question answering, common-sense reasoning, arithmetic, SuperGLUE, LAMBADA, Winograd), GPT-3 with few-shot prompting matched or exceeded fine-tuned BERT-class models on many. On translation, GPT-3 few-shot rivaled supervised SOTA for high-resource languages. On reading comprehension, it set new state-of-the-art on TriviaQA.

**Why it mattered commercially.** Before Brown 2020, deploying NLP meant: collect 10K+ labeled examples → fine-tune BERT → wait days → re-deploy when distribution shifted. After Brown 2020, the recipe became: write a prompt with 5 examples → ship the same day → update the prompt when distribution shifted. The economic gradient was so steep it created an entire industry startups, enterprise teams, vendor APIs in 24 months.

**Caveats from the paper itself (often missed).**
1. ICL works **less well at smaller scale**, most of the magic emerges at 6B+ parameters. Small open models still benefit from fine-tuning more.
2. ICL is **format-sensitive**, small formatting changes (newlines, separators, label tokens) can swing accuracy meaningfully.
3. ICL **plateaus quickly**, going from 0 → 8 shots is huge; 8 → 32 is usually modest.
4. **No weight updates** means no permanent learning, the prompt has to be reconstructed for every new request.

**Lesson for the exam / for practitioners.**
- Whenever someone proposes fine-tuning, ask: have we tried few-shot first?
- Few-shot is the right *first* approach; fine-tuning is the right approach when few-shot has hit a wall AND the per-call cost matters more than iteration speed.
- Reproducibility matters, write your prompts as if you'll need to A/B them next quarter.

**Discussion (Socratic).**
- **Q1:** Brown 2020 used 32-shot prompts. With today's 1M-context models, would you go to 200 shots? Where does the marginal benefit break even with cost?
- **Q2:** A startup CTO (Chief Technology Officer) says "few-shot is just memorization." Argue both sides. What evidence in the GPT-3 paper supports each view?
- **Q3:** Brown 2020 measured English benchmarks. How does the conclusion change for low-resource languages, and what does that imply about the example-selection strategy?

---

## ✅ Module 2 Summary

You now know:

- 📚 What in-context learning is and why it was the unlock for the LLM industry
- 0️⃣ When to use zero-shot vs few-shot, and that zero-shot is often surprisingly strong with modern flagships
- 🎯 The five example-selection strategies, diverse, similarity-retrieval, hardest, recency, anchor-elaborate
- 📐 The recency effect and the other ordering biases, and how to defend against them
- 🏷️ The anatomy of a production few-shot prompt and the per-vendor formatting preferences
- 🧪 Many-shot ICL, when 100+ examples is the right call
- 🔬 Yuki's three-week playbook: zero-shot → static few-shot → similarity-retrieval few-shot

**Next steps:**
1. 🎥 Watch the curated videos: [Videos.md](./Videos.md)
2. ✏️ Take the quiz: [Quiz.md](./Quiz.md), aim for 22/26
3. 📋 Review the [Cheat-Sheet.md](./Cheat-Sheet.md) before bed
4. ➡️ Move on: [Module 3, Chain-of-Thought & Reasoning](../Module-03-Chain-of-Thought-Reasoning/Reading.md)

> **Where this leads.**
> - Inside this course: [Module 3](../Module-03-Chain-of-Thought-Reasoning/Reading.md) layers reasoning examples on top of few-shot. [Module 4](../Module-04-Structured-Outputs-JSON/Reading.md) revisits format learning for JSON. [Module 6](../Module-06-Evaluation-AB-Testing/Reading.md) is how Yuki measured Week 1 vs Week 3.
> - Cross-course: AWS (Amazon Web Services) AI Practitioner (course 07) covers Bedrock's prompt-management tools. Claude Architect (Cert Hub) goes deep on Anthropic's XML-tagged few-shot.
> - Practice: Practice Exam 1 has ~4 questions from this module.

---

## 📚 Further Reading (Optional)

**Primary sources (the originals):**
- 📄 Brown et al. (2020). *Language Models are Few-Shot Learners*, the GPT-3 paper. NeurIPS 2020.
- 📄 Lu et al. (2022). *Fantastically Ordered Prompts and Where to Find Them: Overcoming Few-Shot Prompt Order Sensitivity*. ACL 2022.
- 📄 Liu et al. (2022). *What Makes Good In-Context Examples for GPT-3?*, kNN-retrieval evidence.
- 📄 Min et al. (2022). *Rethinking the Role of Demonstrations: What Makes In-Context Learning Work?*, the "random labels still help" paper.
- 📄 Agarwal et al. (2024). *Many-Shot In-Context Learning*, DeepMind, NeurIPS 2024.

**Vendor docs:**
- 📖 [Anthropic, Use XML tags & multishot prompting](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/use-xml-tags)
- 📖 [OpenAI, Specify the steps required to complete a task](https://platform.openai.com/docs/guides/prompt-engineering/tactic-specify-the-steps-required-to-complete-a-task)
- 📖 [Google, Few-shot prompting strategies](https://ai.google.dev/gemini-api/docs/prompting-strategies#few-shot)

**Practitioner:**
- 📖 [DAIR.AI, Few-Shot Prompting chapter](https://www.promptingguide.ai/techniques/fewshot)
- 📖 [Sebastian Raschka, Practical tips for few-shot prompting](https://magazine.sebastianraschka.com/p/finetuning-llms-with-adapters-and)
- 📖 [Lilian Weng, Prompt Engineering](https://lilianweng.github.io/posts/2023-03-15-prompt-engineering/)
