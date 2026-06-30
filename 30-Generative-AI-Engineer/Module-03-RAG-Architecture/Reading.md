# Module 3: RAG Architecture 🔍

> **Why this module matters:** RAG is the dominant pattern of applied GenAI in 2026. The chatbot on every company's website, the "talk to your codebase" feature in every IDE, the AI-search bar in every documentation site, they are all RAG. This module is where the embeddings, vector DBs, and chunking from Module 2 are assembled into a *system* with a closed feedback loop. By the end, you can sketch the architecture of any production RAG system on a napkin and tell the team why their current one is failing.

> **Prerequisites for this module.** You should be comfortable with:
> - Module 1 (tokens, attention, context windows)
> - Module 2 (embeddings, vector DBs, chunking, hybrid retrieval, reranking)
> - HTTP services / async Python (or willingness to learn FastAPI as you go)

---

## 🎬 A Story: The Stripe Docs Bot That Refunded $0

October 2024. A mid-sized SaaS team launched a "docs chatbot" on top of Anthropic's API with naive RAG, embed the Stripe-style docs, store in Pinecone, retrieve top-5, stuff into the prompt, generate. It worked impressively well on their own internal tests.

Production-day-two, a real customer asked: "How do I refund a partial amount of a subscription charge billed in EUR last quarter, where the customer changed plans mid-cycle?"

The chatbot replied confidently, articulately with a code snippet that referenced a *deprecated* `PartialRefund` API that hadn't existed since 2022. The customer copy-pasted the snippet. It threw a 404. They tweeted. Twitter laughed. The CEO sent an email at 11pm.

Postmortem found four compounding failures:

1. **The retriever returned a 2021 blog post** about partial refunds at the top because the user's literal phrase ("partial amount") matched the blog's title more strongly than the (correctly-updated) 2024 API reference page.
2. **No reranker** was sorting the deprecated content beneath the canonical one.
3. **No query transformation** broke "subscription charge billed in EUR last quarter" into the multiple sub-queries needed to retrieve both the refund-API docs *and* the currency-handling docs.
4. **No "I don't know" path**, when context is weak, the LLM still tried.

The fix took two sprints. Add Cohere Rerank 3. Add query decomposition. Add a confidence-thresholded "I'm not sure, here are some related docs" fallback. Tag all docs with `valid_from` / `valid_until` metadata and pre-filter retrieval to current docs. Add RAGAS evaluation in CI to catch regressions.

This is the difference between **naive RAG** (works in demos, fails in production) and **advanced RAG** (the actual job). This module is that difference.

---

## 🗺️ The RAG Evolution: Naive → Advanced → Modular

The Gao et al. (2024) survey "*Retrieval-Augmented Generation for Large Language Models: A Survey*" defines the three eras:

### Naive RAG

```
[ User Query ] → [ Retriever ] → top-K chunks → [ Stuff into prompt ] → [ LLM ] → [ Answer ]
```

What it is: one-shot retrieval, one-shot generation. What every "I built a chatbot in a weekend" tutorial teaches. Three components: chunked corpus, embedding index, generator.

Why it fails: 
- Single-shot retrieval can't recover from a bad query
- No filtering or reranking of low-quality matches
- No way to handle multi-hop ("X relates to Y which relates to Z") questions
- No "I don't know" path; the LLM confabulates

### Advanced RAG

```
[ Query ] → [ Pre-retrieval: query rewriting / expansion / decomposition ]
         → [ Retrieval: hybrid (dense + BM25) + metadata filters ]
         → [ Post-retrieval: reranking / compression / dedup ]
         → [ Generation with structured prompt + citations + confidence ]
         → [ Answer ]
```

What changed: every "edge" of the diagram got a layer of intelligence. Pre-retrieval transforms the query. Post-retrieval sorts and trims the candidates. The generator's prompt template asks for citations, structures the output, and includes "if you don't know, say so."

This is the production baseline of 2026.

### Modular RAG

```
                ┌─→ Search engine ───┐
                ├─→ Vector retriever ─┤
[ Query Router ]─┼─→ SQL agent ───────┼─→ [ Fusion / Reranker ] → [ Generator with tools ]
                ├─→ Wiki API ────────┤        ↑                                ↓
                └─→ Code grep ───────┘        └────── feedback / refinement ───┘
```

What changed: retrieval is not one component; it's a *family* of components, dynamically chosen by a router. The generator can call tools, request additional retrieval, refine over multiple hops, and loop. This is what frontier systems (Perplexity, Glean, Notion AI's 2025 rewrite, Anthropic's claude.ai web search) actually do.

🎯 **Where you should start:** Build naive RAG first. Make sure each layer works. Then add advanced features one at a time, measuring with RAGAS (Module 7) at every step. Skip naive RAG and you'll build modular RAG without knowing whether the modules even work.

---

## 🧱 The Naive RAG Reference Implementation

A complete naive RAG in ~40 lines of Python (LangChain dropped for clarity):

```python
import os
from openai import OpenAI
import pinecone

client = OpenAI()
pc = pinecone.Pinecone(api_key=os.getenv("PINECONE_API_KEY"))
idx = pc.Index("docs")

def embed(text: str) -> list[float]:
    return client.embeddings.create(
        model="text-embedding-3-small",
        input=text
    ).data[0].embedding

def retrieve(query: str, k: int = 5) -> list[str]:
    res = idx.query(vector=embed(query), top_k=k, include_metadata=True)
    return [match.metadata["text"] for match in res.matches]

def generate(query: str, context: list[str]) -> str:
    prompt = (
        "Answer the question using ONLY the context below. "
        "If the context is insufficient, say 'I don't know.'\n\n"
        f"Context:\n{chr(10).join(context)}\n\n"
        f"Question: {query}\nAnswer:"
    )
    return client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": prompt}],
        temperature=0
    ).choices[0].message.content

def rag(query: str) -> str:
    return generate(query, retrieve(query))
```

This works. It also fails spectacularly on the Stripe story above. Let's fix it, layer by layer.

---

## 🪄 Pre-Retrieval: Query Transformation

Users don't write queries that retrieve well. They write *natural questions*, vague, multi-clause, presupposed. Pre-retrieval rewrites are the cheapest, highest-leverage upgrade you can make.

### Query expansion

Append synonyms / domain terms. "How do I refund?" → "How do I refund? (also: chargeback, reverse payment, undo charge)". Trivially mechanical; useful for sparse retrievers; less critical with strong embedders.

### Multi-query (MQ)

Generate K paraphrased variants of the query with an LLM, retrieve for each, union the results. Each paraphrase covers a different surface form. Common values: K=3–5.

```python
def multi_query(query, k=5):
    paraphrases = llm("Generate 5 different ways to ask: " + query)
    all_chunks = set()
    for p in paraphrases:
        all_chunks.update(retrieve(p, k=10))
    return list(all_chunks)
```

### HyDE (Hypothetical Document Embeddings)

Ask the LLM to *write the answer first*, then embed and retrieve based on the hypothetical answer. Counterintuitive but powerful, answers and documents share more lexical/semantic surface than questions and documents.

```python
def hyde(query):
    hypothetical = llm(f"Write a hypothetical paragraph that would answer: {query}")
    return retrieve(hypothetical, k=10)
```

Originally proposed by Gao et al. (2022). Works especially well on technical / scientific corpora where the answer's vocabulary is far from the question's.

### Decomposition

Break complex multi-hop queries into sub-queries, retrieve for each, combine. "Compare Q3 revenue of Stripe and Adyen and explain the gap" → ["Q3 revenue Stripe", "Q3 revenue Adyen", "Stripe vs Adyen market position"].

### Step-back prompting (Zheng et al. 2024)

Generate a more abstract, higher-level question that the original is an instance of. Retrieve for both. Helps the model anchor in foundational context.

> *"What is the boiling point of water at 5000m altitude?"* → step-back: *"What general principle relates altitude to boiling point?"* → retrieve both.

### Routing

When you have multiple retrievers (vector + SQL + web search), an LLM-as-router chooses which to call. We will see this in Module 4 (agents) and Module 6 (multi-agent) in depth.

---

## 🎯 Retrieval: The Hybrid + Filter Stack

You did this in Module 2. The retrieval layer in production RAG:

```python
def production_retrieve(query, filters, k=50):
    dense = vector_db.query(embed(query), top_k=k, filter=filters)
    sparse = bm25_index.query(query, top_k=k, filter=filters)
    fused = reciprocal_rank_fusion([dense, sparse], k=60)
    return fused[:k]
```

Key filter dimensions to support:

- **Tenant / user / workspace**, for multi-tenant data
- **Time**, most docs go stale; `valid_from` and `valid_until`
- **Type**, distinguish API docs from blog posts from KB articles
- **Confidence / source**, official > community
- **Language**

🚨 **Source-trust filtering** is a common failure mode. The Stripe story above: a deprecated blog post outranked the canonical API page. Solution: weight or filter by source tier.

---

## 🪛 Post-Retrieval: Rerank, Compress, Dedup

### Reranking

(Covered in Module 2.) Cohere Rerank 3, Voyage rerank-2, bge-reranker-v2-m3, ColBERT v2 / PLAID. Run on the top-K=50 retriever output; trim to top-N=5–10 for the LLM.

### Contextual compression

Use a small cheap model to summarize or extract the relevant *sentence-level* spans from each chunk before stuffing into the LLM prompt. Reduces token consumption 4-10× with minimal quality loss.

LangChain has `ContextualCompressionRetriever`; LlamaIndex has `SentenceWindowNodeParser` + post-processors.

### Dedup

If your corpus has near-duplicates (multiple FAQ versions, copy-pasted snippets), retrieval will return the same content with slight variations. Use a min-hash / Jaccard dedup pass or a small reranker with diversity reward.

### Citation packing

Annotate every chunk you pass to the LLM with a unique identifier (e.g., `[chunk_3]`). Instruct the LLM in the system prompt: "Cite sources by their bracketed identifier." Then post-process to resolve to URLs. This is the citation mechanism behind Perplexity, claude.ai, and ChatGPT-search.

---

## 🤖 Generation: The Prompt Structure That Works

Production RAG prompts have converged on roughly this structure:

```
[System]
You are a helpful assistant. Answer using only the provided context.
- Cite each claim by including the bracketed source ID.
- If the context is insufficient, say "I don't know based on the provided sources."
- Do not invent facts not in the context.
- Today's date is 2026-05-29.

[User]
Context:
[1] (source: docs.example.com/refunds, valid 2024-2026)
The Refunds API supports partial refunds via POST /v1/refunds with `amount`...

[2] (source: docs.example.com/subscriptions/proration, valid 2023-2026)
When a subscription plan changes mid-cycle, proration is calculated as...

Question: How do I refund a partial amount of a subscription charge billed in EUR
last quarter, where the customer changed plans mid-cycle?
```

The instruction-tuning patterns that matter:

- **Anchoring** the model in the context ("only the provided")
- **Citation requirement** (forces grounded reasoning)
- **Refusal license** ("say I don't know", the model needs *explicit permission*)
- **Temporal grounding** ("today's date is X", most LLMs drift without this)
- **Negative instructions** ("do not invent"), small but real effect

---

## 🏗️ Modular RAG Patterns You'll See in Production

### Self-Querying Retrieval

The LLM *parses* the user query into a structured `(natural_text, metadata_filters)` pair. "Show me transformer papers from 2023" becomes `text="transformer paper", filters={year: 2023}`. The retriever uses both.

### FLARE (Forward-Looking Active Retrieval) (Jiang et al. 2023)

Generate one sentence at a time. When the model's next-sentence confidence is low (token probabilities are flat), trigger a retrieval *for that sentence's claim* and re-generate. Excellent at long-form factual writing; rarely seen in production because complexity > benefit for chat workloads.

### Self-RAG (Asai et al. 2023)

Train the model to emit explicit "retrieve" tokens when it needs to look something up. The model decides *when* to retrieve. Powerful in research, less common in production because it requires custom training.

### Corrective RAG / CRAG (Yan et al. 2024)

After retrieval, evaluate each chunk's relevance with a small classifier. If all chunks are low-quality, *fall back to web search*. If they're mixed, *correct* (rewrite) the marginal ones.

### Adaptive RAG (Jeong et al. 2024)

A classifier decides between three paths: (1) skip retrieval entirely for simple queries, (2) single-shot retrieval for medium, (3) iterative retrieval for complex. Saves cost on the easy 70% of queries.

### Graph RAG (Microsoft Research, 2024)

Build a knowledge graph from your corpus by LLM-extracting entities and relations. At query time, retrieve a *subgraph* relevant to the query and walk it. Especially powerful for *aggregative* questions ("summarize all our customers' top complaints") that pure vector retrieval can't answer.

### Long-context augmentation (the "no RAG" position)

Some teams skip retrieval and stuff the entire knowledge base into the model's context (Claude 200K, Gemini 2M). It works for small corpora (< 100K tokens) and high-stakes single queries. Doesn't scale to 10M-document corporate knowledge bases, and "lost in the middle" still hurts. Long context complements RAG; it doesn't replace it.

---

## 📐 Anatomy of a Production RAG System (the diagram)

```
                                ┌────────────────────────────────────────────┐
   User Query                   │                INGEST PIPELINE               │
       │                        │ raw docs → chunker → contextualizer →        │
       ▼                        │ embedder → upsert(vector DB)               │
┌───────────────┐               │ ↑ schedule: daily / on doc-change          │
│ Pre-process   │               └────────────────────────────────────────────┘
│ - sanitize    │
│ - guardrails  │
└───────────────┘
       │
       ▼
┌────────────────────────┐    ┌────────────────────┐
│ Query Transformer      │    │ Cache check        │
│ (multi-query / HyDE /  │ ──▶│ semantic cache hit?│ ── yes ──┐
│  decomposition)        │    └────────────────────┘          ▼
└────────────────────────┘                                   return cached
       │
       ▼
┌─────────────────────────────────────────┐
│ Retrieval                                │
│  - Dense + BM25 hybrid                   │
│  - Metadata pre-filter                   │
│  - top_k = 30–50                         │
└─────────────────────────────────────────┘
       │
       ▼
┌─────────────────────────────────────────┐
│ Post-retrieval                          │
│  - Reranker (Cohere / Voyage / BGE)     │
│  - Compression (sentence extract)       │
│  - Dedup                                │
│  - top_n = 5–10                         │
└─────────────────────────────────────────┘
       │
       ▼
┌─────────────────────────────────────────┐
│ Generation                              │
│  - LLM with structured prompt           │
│  - Tool calling allowed                 │
│  - Citation requirement                 │
└─────────────────────────────────────────┘
       │
       ▼
┌─────────────────────────────────────────┐
│ Post-generation                         │
│  - Guardrails (PII, toxic, off-topic)   │
│  - Citation resolution                  │
│  - Output schema validation             │
└─────────────────────────────────────────┘
       │
       ▼
┌─────────────────────────────────────────┐
│ Observability                           │
│  - Traces (Langfuse / LangSmith)        │
│  - RAGAS metrics on a sample            │
│  - Latency, cost, retrieval recall      │
└─────────────────────────────────────────┘
```

You'll build this incrementally over the next 4 modules.

---

## 🚨 Anti-patterns

| Anti-pattern | What goes wrong |
|--------------|------------------|
| Skip pre-retrieval rewriting | "Vague query → vague results", easily 40% of failures |
| `top_k=3` straight from the retriever | Reranker can't help; no diversity |
| No source-trust metadata | Deprecated content outranks canonical (Stripe story) |
| No "I don't know" instruction | Hallucinated confidence in low-context cases |
| No CI evaluation | Regressions go un-noticed for months |
| Stuffing all retrieved chunks into the LLM | Token cost + lost-in-the-middle |
| Mixing retrievers without RRF/normalization | Bad fusion, worse than either alone |
| Building modular RAG before naive RAG works | Can't isolate which module is broken |

---

## 🏗️ Lab: Build Naive → Advanced → Modular RAG

Goal: take the BEIR `fiqa` (financial Q&A) dataset and build three RAG systems on it:

1. **Naive**, fixed chunking, single-shot retrieval, single LLM call. Measure baseline RAGAS.
2. **Advanced**, header-aware chunking + contextual retrieval + hybrid (BM25 + dense) + Cohere Rerank + citation-enforced prompt. Re-measure RAGAS.
3. **Modular**, add a query router (LLM decides "simple" vs "complex"), multi-query expansion for complex, web-search fallback when retrieval is weak.

Report:

- RAGAS faithfulness, answer relevancy, context precision/recall at each step
- p50/p95/p99 latency
- $ per query at each step

You'll see the quality climb from ~60% to ~85%+ on faithfulness, and you'll see latency and cost climb too. The graph of "quality vs cost" is the deliverable.

---

## 📊 Case Study, Klarna's Customer-Support RAG Rollout (Feb–Aug 2024)

**Situation.** Klarna, the Swedish "buy-now-pay-later" company, deployed an OpenAI-powered chatbot for customer support in February 2024. In their Q2 2024 earnings, they reported the system was handling the equivalent of **700 full-time customer-support agents'** workload, with average handle time down from 11 minutes to 2 minutes, and customer satisfaction *matching* human-only support.

**The architecture (as disclosed in their tech-blog post and follow-up interviews).** A RAG system over Klarna's internal policy documents, FAQ, and historical-ticket-resolution corpus. Specifics:

- ~95 languages supported (Cohere multilingual embeddings as the primary embedder)
- Multi-query expansion at the pre-retrieval step for ambiguous customer messages
- Strict guardrails: regulated topics (lending laws, dispute escalation) route to humans
- Tool calling for: refund issuance, payment-plan modification, dispute creation
- A "confidence threshold" gate, if RAGAS-style faithfulness on a generated draft is below 0.7, escalate to human

**The numbers.** Klarna projected the system would contribute $40M USD in operating profit improvements in 2024, primarily from the ~70% reduction in customer-support headcount. Critics pointed out the cost-saving framing under-reported the cost in *trust* of edge cases (a botched dispute or a wrong refund hurts brand more than payroll savings).

**What this means for you, the engineer.** Klarna's success was not "we plugged in GPT-4." It was years of customer-support data, a clean policy corpus, multilingual retrieval, and *strict escalation rules*. They invested in **evaluation harnesses and observability** (Module 7 and Module 9) before the public launch. Most companies replicate the demo and skip the harness; they then ship the bug.

**Discussion (Socratic).**
- **Q1:** Klarna's "confidence threshold" gate escalates to humans below 0.7 faithfulness. How would you build that gate? (Hint: think Module 7 RAGAS LLM-as-judge.)
- **Q2:** A customer messages "I bought a TV with Klarna two weeks ago and the screen is broken, what do I do?" Walk through the modular-RAG flow: which retrievers, which tools, which escalation rules?
- **Q3:** If Klarna's success story made your CFO eager to fire 70% of support, what *engineering* arguments would you make for keeping a higher-than-modeled human-escalation rate in the first 6 months?

---

## ✅ Module 3 Summary

You now know:

- 🗺️ The naive → advanced → modular RAG progression
- 🪄 Pre-retrieval: multi-query, HyDE, decomposition, step-back, query routing
- 🎯 Retrieval: hybrid + metadata filter + source trust
- 🪛 Post-retrieval: reranking + compression + dedup + citation packing
- 🤖 Generation prompt structure (citations, refusal license, temporal grounding)
- 🧩 Modular patterns: self-querying, FLARE, Self-RAG, CRAG, Adaptive RAG, Graph RAG
- 📐 The full production RAG anatomy diagram
- 🚨 The anti-patterns that crash production RAGs

**Next steps:**
1. 🎥 Watch [Videos.md](./Videos.md)
2. ✏️ Take the [Quiz.md](./Quiz.md)
3. 📋 Review [Cheat-Sheet.md](./Cheat-Sheet.md)
4. ➡️ Move on: [Module 4, LangChain & LlamaIndex](../Module-04-LangChain-LlamaIndex/Reading.md)

> **Where this leads.**
> - **Inside this course:** Module 4 implements the same diagram in LangChain *and* LlamaIndex. Module 7 evaluates it with RAGAS. Module 9 wraps it in observability + cost monitoring + semantic cache.
> - **Cross-course:** Course 07 (AWS AI Practitioner) covers Bedrock Knowledge Bases (managed RAG). Course 08 (Azure AI Engineer) covers Azure AI Search + RAG.

---

## 📚 Further Reading (Optional)

**Foundational papers:**
- 📄 Lewis et al. (2020). *Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks.* The original RAG paper.
- 📄 Gao et al. (2024). *Retrieval-Augmented Generation for Large Language Models: A Survey.* The reference taxonomy.
- 📄 Gao, Ma, et al. (2022). *Precise Zero-Shot Dense Retrieval without Relevance Labels (HyDE).*
- 📄 Asai et al. (2023). *Self-RAG.*
- 📄 Yan et al. (2024). *Corrective RAG (CRAG).*
- 📄 Edge et al. (2024). *From Local to Global: A Graph RAG Approach.* Microsoft Research.
- 📄 Liu et al. (2023). *Lost in the Middle: How Language Models Use Long Contexts.*

**Practitioner resources:**
- 📖 LangChain RAG cookbook (`langchain-ai/rag-from-scratch`)
- 📖 LlamaIndex "Advanced RAG" guides
- 📖 Pinecone "RAG patterns" series
- 📖 Anthropic's Contextual Retrieval recipe (GitHub)
