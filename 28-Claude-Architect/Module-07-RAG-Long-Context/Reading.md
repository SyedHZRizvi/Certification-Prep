# Module 7: RAG & Long-Context with Claude 📚

> **Why this module matters:** Most production Claude apps need to ground the model in *your* data, your docs, your tickets, your code, your contracts. There are two main paths: stuff the data into the 200K-token context window, or retrieve the relevant subset via RAG. Both have a place. This module makes you fluent in choosing, plus implementing the Claude-flavored version of each.

> **Prerequisites for this module.** You should be comfortable with:
> - Modules 1–4 (model, prompting, API, tool use)
> - General "embeddings" intuition (vectors representing text similarity)
> - A vector database concept (Pinecone, Weaviate, Qdrant, pgvector, pick your fighter)
> - Basic chunking concepts

---

## 📖 A Story: The Law Firm That Stopped Doing RAG (And the One That Doubled Down On It)

Two stories. Same model (Claude 4 Sonnet). Two opposite architectural conclusions.

**Story 1: PalmettoLegal.** A 200-attorney mid-market law firm in Charleston. Their AI workflow ingested 800-page commercial leases and answered questions: "What's the escalation clause? Cap on rent?" Initially they built a chunked RAG pipeline, chunks → embeddings → vector search → top-K → Claude. Accuracy hovered around 78%. Half the misses were "the answer is in a different chunk than the one we retrieved." In March 2025, the team rebuilt the pipeline to **stuff the entire 200-page lease into a single Claude call** (Sonnet 4.5 with prompt caching on the lease text). Accuracy jumped to 96%. They retired the vector store.

**Story 2: Recursion Holdings.** A 4,000-attorney firm with offices in 16 cities. Their AI workflow searches across **18 million** historical contracts to answer "Find me every NDA in our archive with a non-compete > 12 months and a jurisdiction in Texas." Stuffing the entire archive into context is not possible, it's terabytes. The team built a sophisticated multi-stage RAG: metadata filter → semantic search via Voyage AI embeddings → BM25 keyword overlay → Claude reranker → Claude answer composer with citations. Accuracy: 91%. The vector store is the whole product.

The same model. Two architectures. Both right.

The lesson: **RAG vs long-context is a tool choice, not a religion.** This module teaches you how to make the choice correctly, then how to execute on whichever path fits.

---

## 🧭 RAG vs Long-Context: The Decision Tree

```
How big is the relevant corpus per query?
├── Fits in 200K tokens (≈150K words, ≈400 pages)?
│   ├── YES → STUFF IT. Single Claude call.
│   │   Pros: simplest; highest accuracy; cite-able
│   │   Cons: latency, cost (mitigated by caching), recency bias risk
│   └── NO → RAG required.
│       Retrieve relevant subset, then Claude.
│
And how often does the corpus change?
├── Static (e.g., a single contract) → Stuff (cache it)
├── Slowly changing (org wiki) → Either; RAG if large
└── Rapidly changing (live web, ticket feed) → RAG with frequent re-indexing

And how strict are citation requirements?
├── Loose ("just answer") → Stuff or RAG, your choice
├── Strict ("cite source page") → Stuff is easier; RAG with anchor tracking works too
└── Audit-grade ("regulator must verify") → RAG with traceable retrieval pipeline
```

🎯 **Exam pattern:** *"A 600-page lease, single document, structured Q&A with page citations RAG or stuff?"* → **Stuff** (fits in context; simpler; better citations). *"18M contracts, semantic search across the archive RAG or stuff?"* → **RAG required.**

---

## 🧊 Stuffing the Context, The "Long-Context" Pattern

When the relevant data fits in Claude's 200K-token window, often the right answer is *put it all in*. Anthropic explicitly designs the long-context behavior to make this practical.

### Anatomy of a stuffed-context prompt

```text
SYSTEM:
You are a contract analysis assistant. Answer questions about the lease in <lease>.
Cite the exact section number for every claim. If the answer is not in the lease, say
"Not found in this lease."

USER:
<lease>
[ENTIRE 80,000 TOKEN LEASE TEXT HERE]
</lease>

QUESTION: What is the base rent and what is the annual escalation?

ASSISTANT (prefill):
<answer>
```

### Why this works on Claude specifically

- **200K token window** comfortably handles a 400-page document
- **Strong long-context attention**, Anthropic publishes "needle in haystack" benchmark results
- **Citation discipline**, when prompted to cite, Claude is reliable about anchoring to specific sections
- **Prompt caching**, that 80K-token lease can be cached, dropping repeat-query cost by 90%

### Pitfalls

- **Recency bias**, put the question at the END (after the documents)
- **Token cost**, without caching, 80K tokens × $3/Mtok = $0.24 per query (Sonnet)
- **Latency**, TTFT grows with input length; streaming mitigates the perception
- **Catastrophic over-stuffing**, at 180K+ tokens, the model can miss things; below 100K is the "sweet spot"

### When stuffing is the right call

- Single document or small set (a contract, a research paper, a codebase < 200K tokens, a meeting transcript)
- Static or slowly-changing data
- High accuracy bar; you can afford the tokens
- You want simple architecture (no vector DB to operate)

---

## 🔍 RAG (Retrieval-Augmented Generation), The Workhorse

When the corpus is too big to stuff, RAG retrieves the relevant subset for each query and gives that subset to Claude.

### Classic RAG architecture

```
1. INGEST (offline)
   Documents → Chunker → Embeddings → Vector DB

2. QUERY (online)
   User query → Embedding → Vector DB top-K → Claude with retrieved chunks → Answer
```

### Each piece

**Chunking.** Split long documents into ~500-1000 token chunks with ~10-15% overlap. Strategy matters:

- Naive: split every N tokens
- Recursive: split on `\n\n`, then `\n`, then `.`, then N tokens
- Semantic: use embeddings to find topic boundaries
- Document-structure-aware: respect headings, tables, sections

**Embeddings.** Map text → fixed-size vector (typically 384–3072 dims). For Claude, **Voyage AI** is the recommended partner, Anthropic explicitly invested in / partnered with Voyage:

- `voyage-3-large` / `voyage-3.5`, top general-purpose
- `voyage-code-3`, code-specialized
- `voyage-finance-2` / `voyage-law-2`, domain-tuned
- (OpenAI's `text-embedding-3-small` / `-large` work fine; Cohere `embed-v3` works fine; the *choice* matters less than the *evals*)

**Vector DB.** Stores embeddings + metadata; queries by cosine similarity / dot product. Popular options:

- **Pinecone**, managed, simple
- **Weaviate**, open-source, hybrid search built-in
- **Qdrant**, open-source, fast, Rust core
- **pgvector**, Postgres extension; "good enough" for <10M vectors
- **Chroma**, Python-first, ergonomic for dev
- **Vespa**, Yahoo's; ultra-scale
- **LanceDB**, Rust-based; great DX
- **Turbopuffer**, newer; cost-optimized
- **Elasticsearch / OpenSearch**, with dense vector support

**Retrieval.** Embed the query, find top-K (typically K=5-20) most similar chunks, often combined with a sparse keyword search (BM25) for "hybrid" retrieval.

**Generation.** Pass retrieved chunks to Claude with the user query.

### Example Claude prompt for a RAG flow

```text
SYSTEM:
You are a customer-support assistant. Answer the user's question using ONLY the
information in <retrieved_chunks>. If the answer is not in the chunks, say
"I don't have information about that."

For every factual claim, cite the chunk by its `id`.

<retrieved_chunks>
  <chunk id="c1" source="kb/refund-policy.md">
    Customers may request a refund within 30 days of purchase. Digital products
    are non-refundable after the user has downloaded them more than once.
  </chunk>
  <chunk id="c2" source="kb/shipping.md">
    Standard shipping is 5-7 business days. Express is 1-2.
  </chunk>
  <chunk id="c3" source="kb/contact.md">
    For escalations, contact help@example.com or call 1-800-555-0142.
  </chunk>
</retrieved_chunks>

USER QUESTION:
Can I get a refund 60 days after purchase?
```

Claude answers: "Per our refund policy [c1], refunds are only available within 30 days of purchase, so a refund 60 days after purchase would not be available under the standard policy. You may want to contact support to escalate: help@example.com or 1-800-555-0142 [c3]."

---

## 🧠 Contextual Retrieval, The September 2024 Anthropic Technique

In September 2024, Anthropic published a blog post titled **"Introducing Contextual Retrieval"** describing a technique that dramatically improves RAG accuracy. The headline numbers:

- **~49% reduction** in retrieval failure rate by adding contextual prefixes
- Adding a reranker on top: **~67% reduction** in retrieval failure rate

### The problem

Standard chunking strips context. A chunk like:
```
"The company's revenue grew 3% over the previous quarter."
```
has no anchor to *which company* or *which quarter* unless those facts were in the same chunk.

### The technique

Before embedding each chunk, *prefix it* with 50–100 tokens of model-generated context that situates the chunk within the document.

```
Original chunk:
"The company's revenue grew 3% over the previous quarter."

Contextual chunk (after prefixing):
"[Context: This chunk is from ACME Corp's Q2 2024 earnings filing,
 in the section describing year-over-year financial performance.
 The 'previous quarter' refers to Q1 2024.]
 The company's revenue grew 3% over the previous quarter."
```

The context is generated by a Claude (Haiku-tier is fine for this) call that takes the full document + the chunk and produces a short situating description. Then both the prefixed chunk is embedded, and the chunk + context is stored.

### Why it works

The prefixed chunk's embedding now better captures "what this chunk is about," not just "the literal words in this chunk." Queries that reference contextual facts ("ACME Q2 revenue") match the embedded chunk much better.

### Implementation cost

You pay extra Claude calls during ingestion (one per chunk). Prompt caching helps massively: the document content is constant across all its chunks, so cache it. Anthropic reports **~$1.02 per million tokens** of original documents using this technique with caching, a small fraction of the total RAG pipeline cost.

### Add a reranker

For the extra accuracy boost, Anthropic recommends a **reranker** (Voyage rerank-2 or Cohere Rerank 3) as a final stage:

1. Hybrid retrieval (BM25 + vector) → top-150 chunks
2. Rerank → top-20
3. Pass top-20 to Claude

🎯 **Exam pattern:** *"What is Anthropic's Sept-2024 RAG improvement technique?"* → **Contextual Retrieval, prefix each chunk with model-generated context before embedding.**

---

## 📑 Citations and Grounding

A Claude RAG (or stuffed-context) flow without citations is a Claude flow that hallucinates. Two patterns:

### Inline citations

Tell Claude in the system prompt: *"For every factual claim, cite the source chunk by `[id]`."* This works reliably with structured chunk inputs.

### Native Citations (the Anthropic feature)

In early 2025, Anthropic shipped a **Citations API** feature. When you pass documents in a structured format, Claude can return responses with **machine-readable citation metadata** pointing to specific spans in your source documents.

```python
response = client.messages.create(
    model="claude-sonnet-4-6",
    max_tokens=1024,
    messages=[{
        "role": "user",
        "content": [
            {
                "type": "document",
                "source": {
                    "type": "text",
                    "media_type": "text/plain",
                    "data": "[FULL DOCUMENT TEXT]"
                },
                "citations": {"enabled": True}
            },
            {"type": "text", "text": "What is the refund policy?"}
        ]
    }]
)

# response.content includes both text blocks and citation blocks
# citations point to character offsets in the original document
```

Native citations are the cleanest pattern when you have well-defined source documents and want auditable grounding.

🎯 **Exam pattern:** *"What is the best way to produce machine-readable citations in a Claude response over a known document?"* → **Use the Citations API with structured document blocks.**

---

## 🧊 RAG + Long-Context Hybrids

The honest answer to "RAG vs long-context" is often "both." Hybrid patterns:

### Pattern 1: RAG-then-stuff

1. RAG retrieves the TOP-5 most relevant documents (each could be 30K tokens)
2. Stuff all 5 (~150K tokens) into Claude for the answer

Use when: corpus is too big to stuff entirely, but per-query you want broader context than top-3-chunks-of-500-tokens.

### Pattern 2: Stuff-then-summarize

1. Stuff a full document (80K tokens) into Claude
2. Claude produces a concise structured summary (1K tokens)
3. Summary is stored for later RAG retrieval

Use when: you want fast retrieval over many docs but with structured per-doc abstracts.

### Pattern 3: Two-tier (cheap RAG + expensive stuffing)

1. RAG with a fast cheap pipeline (Haiku) returns top-5 candidates
2. Stuff all 5 into Sonnet for the final answer

Use when: cost optimization at scale.

### Pattern 4: Agentic RAG

A Claude agent decides *which retrievals to do*, possibly iterating: search → read top-K → if not enough, search differently → eventually answer.

Use when: open-ended research-style questions where one-shot retrieval misses.

---

## 🔧 Practical RAG Engineering Decisions

### Chunk size

- **Too small (<200 tokens)**, chunks lose context, retrieval becomes noisy
- **Too large (>2000 tokens)**, fewer chunks per query, less precise retrieval
- **Sweet spot: 500–1000 tokens** with 10–15% overlap

### K (number of retrieved chunks)

- **K=3–5** for narrow questions
- **K=10–20** for broad questions
- **K=50+ → reranker → top-N** for high-precision needs

### Hybrid retrieval

Pure semantic search misses exact-match terms (product SKUs, jargon, names). Add **BM25 / keyword overlay** as a parallel retrieval; merge with **Reciprocal Rank Fusion** or weighted scoring.

### Metadata filters

Before semantic search, filter by metadata (date ranges, document type, customer ID, language). Drastically reduces the candidate set.

### Re-indexing strategy

- **Real-time**, every doc change triggers re-embedding (most expensive, freshest)
- **Batch nightly**, much cheaper, slightly stale
- **Hybrid**, high-priority docs real-time, the rest nightly

### Embedding model choice

Run an **eval** on your domain. Voyage's `voyage-3.5` is often the best general-purpose for Claude integrations. Domain-specific models (`voyage-code`, `voyage-finance`, `voyage-law`) usually beat general models on their domains.

---

## 🪟 Long-Context Beta and 1M Tokens

Anthropic has shipped (and may have GA'd by the time you read this) a **1M-token context window** for Sonnet/Opus, gated behind a beta header. It enables:

- An entire mid-sized codebase in one prompt
- A 1000-page legal case file
- Many hours of meeting transcripts

The cost is real: 1M tokens × $3/Mtok = $3 per call (Sonnet). Caching helps for repeated queries on the same corpus. At 1M tokens, recency bias is significant, placement of the question matters more.

```python
response = client.messages.create(
    model="claude-sonnet-4-6",
    max_tokens=4096,
    messages=[{"role":"user", "content": MEGA_PROMPT_AT_900K_TOKENS}],
    extra_headers={"anthropic-beta": "long-context-1M-2025-01-01"}  # header name varies; check current docs
)
```

🎯 **Exam pattern:** *"When does the 1M-token beta context window justify its cost?"* → **When a single coherent task requires data that does not fit in 200K, AND the alternative is a complex multi-call RAG pipeline whose engineering+ops cost would exceed the per-call premium.**

---

## 🆚 Stuffed Context vs RAG, Side-by-Side

| Dimension | Stuffed context | RAG |
|-----------|-----------------|-----|
| Best for | Single doc / small set / static | Large corpus / dynamic |
| Architecture complexity | Trivial | Moderate to high |
| Retrieval accuracy | ~100% (model sees everything) | Bounded by retrieval recall |
| Cost per query | $0.05–0.50 (model-input heavy; caching helps) | $0.001–0.01 retrieval + $0.01–0.05 generation |
| Latency | High (200K-token input is slow even with streaming) | Low (small retrieved subset) |
| Citation precision | Easy (just instruct + native Citations API) | Easy if chunks have IDs |
| Operations burden | Minimal | Vector DB ops, ingestion pipeline, re-indexing |
| Freshness | Latest doc on every call | Re-index needed |

A common decision rule:

- **<300K total tokens in corpus** → stuff (with caching)
- **300K – 5M tokens, slowly changing** → RAG with simple pipeline
- **>5M tokens or rapidly changing** → full RAG with re-indexing + reranking

---

## 🔬 Scenario Walkthrough

> **Scenario:** A legal-tech startup ingests 10K real-estate commercial leases (each 80–200 pages). Customers ask questions about a specific lease ("base rent? escalation? exclusive use?"). Per-query budget: $0.10. Median response time: <5s.

**Walkthrough:**
1. **Per-lease scope:** Each query is about ONE lease. The corpus per query is one document (80–200 pages = ~50K–120K tokens).
2. **Stuff vs RAG:** Comfortably fits in 200K. Stuff the lease. RAG would actually be *worse*, the answer often spans multiple sections.
3. **Caching:** Each lease may be queried multiple times. Cache the lease text. First query: $0.30; subsequent: ~$0.03.
4. **Citations:** Use the Citations API for machine-readable section pointers.
5. **Model tier:** Sonnet 4.6, accuracy matters; Haiku risks missing edge cases.
6. **Latency:** Streaming for TTFT < 1s; total response in 4-7s.
7. **Eval:** A 100-lease holdout set with annotated expected answers. LLM-as-judge for the answer body; deterministic checks on cited sections.

This is exactly the PalmettoLegal architecture from the opening story.

---

## ⚠️ Exam Traps & Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "RAG is always better than long-context." | Often the opposite for small, focused corpora. |
| "Bigger context = always better." | Recency bias kicks in; stuffing 180K may hurt vs stuffing 60K of the most relevant content. |
| "Cosine similarity ≈ semantic understanding." | It's a *proxy*. Hybrid (semantic + BM25) + reranker beats pure semantic. |
| "Voyage is required for Claude RAG." | No, OpenAI / Cohere / open-source embeddings all work. Voyage is a recommended partner. |
| "K=top-3 is always enough." | Depends on question scope. K too small misses; K too big floods context. |
| "Contextual retrieval is a tool you install." | It's a *technique*, generate context per chunk during ingestion. |
| "Native Citations replace RAG." | They are an output-format feature, not a retrieval system. They compose with RAG OR with stuffing. |
| "1M context obsoletes RAG." | At 1M-token cost (~$3 per call), it does not, RAG is still cheaper per query at scale. |

---

## 🎓 Key Terms To Know (Add to Flashcards!)

| Term | Definition |
|------|------------|
| **RAG** | Retrieval-Augmented Generation, retrieve relevant chunks, then have LLM answer |
| **Long-context / stuffed context** | Putting the full corpus into the LLM call |
| **Chunking** | Splitting documents into smaller pieces for retrieval |
| **Embedding** | Vector representation of text for similarity comparison |
| **Vector DB** | Database optimized for nearest-neighbor vector queries |
| **BM25** | Classic sparse keyword search algorithm |
| **Hybrid retrieval** | Combining semantic (embedding) + lexical (BM25) search |
| **Reranker** | Second-stage model that re-orders top-N candidates |
| **Contextual Retrieval** | Anthropic Sept-2024 technique: prefix chunks with model-generated context before embedding |
| **Citations API** | Anthropic feature for machine-readable citation metadata |
| **Voyage AI** | Anthropic-partnered embeddings provider |
| **Recency bias** | LLMs weight later tokens more; affects long-context placement |
| **Reciprocal Rank Fusion (RRF)** | Algorithm to merge multiple retrieval result lists |
| **K** | Number of chunks retrieved per query |
| **TTFT** | Time To First Token, longer for stuffed prompts |

---

## 📊 Case Study, Anthropic's Own Contextual Retrieval Numbers

**Situation.** In September 2024 Anthropic published a blog post + cookbook recipe on "Contextual Retrieval." It included quantified benchmark results across a few document collections.

**Headline numbers (from the published blog).**
- **35% reduction in retrieval failure rate** with contextual prefixes alone (vector search portion)
- **49% reduction** when combined with BM25 hybrid retrieval
- **67% reduction** when adding a reranker on top of contextual + hybrid

**Implementation cost (per Anthropic's analysis).**
- Per-chunk context generation: Claude Haiku call with the full document cached
- Cost: ~$1.02 per million tokens of original documents (one-time ingestion cost, given caching)

**Recommended stack from the post.**
- Embed prefixed chunks (Voyage AI or alternative)
- Store both BM25 index AND vector index
- At query time: hybrid retrieve top-150 → rerank → top-20 → Claude

**Lesson for the architect.**
- **Small techniques compound.** Contextual prefixes + BM25 + reranker each contributes; the stack matters more than the single best component.
- **Cost amortization matters.** Ingestion cost is one-time per document; query cost is amortized over the doc's lifetime. Spend on ingestion.
- **Caching during ingestion is its own optimization.** The full doc is cached; per-chunk calls reuse the cached prefix.

**Discussion (Socratic).**
- **Q1:** Your corpus is 10M documents. Re-running contextual ingestion costs $X. What's the trade-off between re-running periodically (to catch corpus drift) vs once-and-done?
- **Q2:** Reranker is the biggest single accuracy win. What's the latency tradeoff at query time and how do you mitigate it for user-facing apps?
- **Q3:** Contextual Retrieval is described in an Anthropic post. Is there a reason to use it *only* with Claude? Or is the technique vendor-agnostic?

---

## ✅ Module 7 Summary

You now know:

- 🧭 **RAG vs long-context**, when each is right, the decision tree
- 🧊 **Stuffed context**, how to do it well with Claude, citations, caching
- 🔍 **Classic RAG**, chunking, embeddings, vector DBs, retrieval, generation
- 🧠 **Contextual Retrieval**, Anthropic's Sept-2024 technique (49% failure reduction)
- 📑 **Citations**, inline patterns and the native Citations API
- 🧊 **Hybrid patterns**, RAG-then-stuff, stuff-then-summarize, agentic RAG
- 🔧 **Engineering decisions**, chunk size, K, hybrid retrieval, embedding choice
- 🪟 **1M-token beta context**, when it's worth the price
- 📊 **PalmettoLegal vs Recursion Holdings**, two opposite right answers
- 📊 **Anthropic's published Contextual Retrieval numbers**

**Next steps:**
1. 🎥 Watch the curated videos: [Videos.md](./Videos.md)
2. ✏️ Take the quiz: [Quiz.md](./Quiz.md), aim for 21/25
3. 📋 Review the [Cheat-Sheet.md](./Cheat-Sheet.md)
4. 🛠️ **Hands-on:** Build a tiny RAG pipeline: chunk a 30-page PDF, embed with Voyage (or OpenAI), store in pgvector or Chroma, query with Claude. Then add contextual prefixes and measure the difference.
5. ➡️ Move on: [Module 8, Production Patterns & Safety](../Module-08-Production-Patterns-Safety/Reading.md)

> **Where this leads.**
> - Inside this course: [Module 8](../Module-08-Production-Patterns-Safety/Reading.md) covers production observability, including RAG-specific concerns (retrieval recall metrics).
> - Cross-course: Generative AI Engineer (course 30) covers RAG in framework-specific depth (LlamaIndex, LangChain RAG).
> - Practice: Practice Exam 2 has ~5 questions from this module.

---

## 📚 Further Reading (Optional)

**Primary sources:**
- 📄 Anthropic (Sept 2024). [*Introducing Contextual Retrieval*](https://www.anthropic.com/news/contextual-retrieval). Required reading.
- 📄 Anthropic. [*Citations API documentation*](https://docs.anthropic.com/claude/docs/citations). The native citation pattern.
- 📄 Anthropic Cookbook, [contextual-retrieval recipe](https://github.com/anthropics/anthropic-cookbook/tree/main/skills/contextual-embeddings).
- 📄 [Voyage AI documentation](https://docs.voyageai.com/), the partnered embeddings provider.
- 📄 Lewis et al. (2020). [*Retrieval-Augmented Generation for Knowledge-Intensive NLP*](https://arxiv.org/abs/2005.11401). The original RAG paper.

**Practitioner:**
- 📖 [LlamaIndex documentation](https://docs.llamaindex.ai/), RAG-first framework with many concrete patterns
- 📖 [LangChain RAG documentation](https://python.langchain.com/docs/use_cases/question_answering/)
- 📖 Pinecone learning center, practical chunking and retrieval guides
- 📖 [Voyage AI blog](https://blog.voyageai.com/), embedding model deep dives
- 📺 AI Engineer Conf, many "we shipped RAG" talks; pattern-rich
