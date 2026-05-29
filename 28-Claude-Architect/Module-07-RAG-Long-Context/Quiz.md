# ✏️ Module 7 Quiz: RAG & Long-Context with Claude

> **Instructions:** Answer all 25 questions WITHOUT looking at the reading.
> Then check your answers below. Aim for 21/25 minimum.
>
> **Bloom distribution (this quiz):** Remember 5 · Understand 7 · Apply 7 · Analyze/Evaluate 5 · Create 1.

---

## Questions

### Q1. Claude Sonnet 4.6's STANDARD context window is approximately: *(Remember)*
A. 8K tokens
B. 32K tokens
C. 200K tokens (1M via beta header)
D. 100K tokens only

---

### Q2. "RAG" stands for: *(Remember)*
A. Random Access Generator
B. Retrieval-Augmented Generation
C. Recursive AI Generation
D. Rerank-And-Generate

---

### Q3. A single 80-page legal contract that fits in 200K tokens, with multiple questions per contract — BEST approach: *(Apply)*
A. RAG with K=3 chunks
B. Stuff the full contract into context (with prompt caching for repeat queries)
C. Stuff into Gemini 2M context only
D. Send each page separately

---

### Q4. Anthropic's Sept-2024 RAG improvement technique is called: *(Remember)*
A. Sparse Retrieval
B. Contextual Retrieval (prefix chunks with model-generated context before embedding)
C. Reverse Embedding
D. Mega Index

---

### Q5. Adding contextual prefixes alone (per Anthropic's published numbers) reduces retrieval failure rate by approximately: *(Remember)*
A. 5%
B. 15%
C. 35%
D. 90%

---

### Q6. The PRIMARY embedding partner Anthropic recommends with Claude is: *(Remember)*
A. OpenAI
B. Voyage AI (Anthropic-partnered)
C. Cohere only
D. Google

---

### Q7. A "reranker" in a RAG pipeline: *(Understand)*
A. Replaces the embedding model
B. Re-orders the top-N retrieval candidates with a cross-encoder for higher precision
C. Compresses the chunks
D. Encrypts the data

---

### Q8. Chunking with ~500-1000 tokens and 10-15% overlap is: *(Apply)*
A. Wrong — always use 50-token chunks
B. A reasonable sweet spot for general-purpose RAG
C. Only for code RAG
D. Only for image RAG

---

### Q9. "Hybrid retrieval" combines: *(Understand)*
A. Two embedding models
B. Semantic (embedding-based) + lexical (BM25) retrieval merged (often via RRF)
C. Two LLM calls
D. Two databases

---

### Q10. A user-facing RAG app with 18M source contracts and live updates — BEST architecture: *(Apply)*
A. Stuff all 18M into 200K context (impossible)
B. Full RAG pipeline: metadata filter → hybrid retrieval (BM25 + Voyage) → reranker → Claude
C. Skip retrieval; answer from training data
D. Switch to Gemini

---

### Q11. To produce machine-readable citations linked to specific spans in a source document, the BEST Claude feature is: *(Apply)*
A. Plain prefill
B. The Citations API (structured `type: "document"` with `citations: {enabled: true}`)
C. Markdown footnotes
D. There is no such feature

---

### Q12. The MOST important reason to put the question AT THE END of a long-context prompt: *(Understand)*
A. Aesthetics
B. Recency bias — LLMs weight later tokens more heavily; the question gets fresher attention
C. Required by the API
D. Reduces token cost

---

### Q13. A team uses RAG with K=3 and accuracy plateaus at 78%. Adding a reranker over K=50 → top-10 raises accuracy to 89%. The 78%→89% gain is consistent with: *(Analyze)*
A. Reranker bug
B. Many of the top-3 results were missing the right context that was in positions 4-50 (recall problem); reranker brings them up
C. Random luck
D. Smaller chunks always win

---

### Q14. A 600-page lease (~150K tokens) with caching costs approximately per query (after first): *(Analyze)*
A. ~$0.001 (cached input ~150K × $0.30/Mtok + small output)
B. ~$10
C. ~$100
D. Negligible — caching is free

---

### Q15. The 1M-token beta context window's PRIMARY trade-off vs RAG is: *(Analyze)*
A. Lower accuracy
B. Higher per-call cost (1M × $3/Mtok = $3/call on Sonnet) but no retrieval pipeline complexity
C. Slower than RAG
D. Worse citations

---

### Q16. Pinecone, Weaviate, Qdrant, and pgvector are all examples of: *(Remember)*
A. Embedding models
B. Vector databases (different trade-offs around hosting, scale, hybrid)
C. Rerankers
D. Frameworks

---

### Q17. A team's RAG retrieval misses exact-match product SKUs even though they exist in the corpus. The likely FIX: *(Apply)*
A. Larger embeddings
B. Add BM25 / keyword search as a parallel retrieval (hybrid); semantic search alone can miss exact-match jargon
C. Switch to Opus
D. Lower K

---

### Q18. "Stuff-then-summarize" hybrid pattern means: *(Understand)*
A. Stuffing a full doc and then summarizing into a stored abstract for later RAG retrieval
B. Compressing JSON
C. RAG-ing twice
D. None of the above

---

### Q19. The PalmettoLegal vs Recursion Holdings case study illustrates: *(Analyze)*
A. RAG is always better
B. Stuffing is always better
C. Same model, two architectures, both correct — choice depends on corpus size and structure
D. One firm was right and the other was wrong

---

### Q20. Contextual Retrieval ingestion costs ~$1.02 per million tokens PRIMARILY because: *(Understand)*
A. Embeddings are expensive
B. Prompt caching of the source document means per-chunk context-generation calls reuse a cached prefix; the marginal cost is the per-chunk output
C. Reranking
D. Vector DB fees

---

### Q21. A team's eval suite shows native Citations API returns more reliable spans than prompt-based citations. The likely reason: *(Analyze)*
A. The API uses character offsets at the model layer instead of relying on the model emitting text identifiers — fewer drift opportunities
B. Random
C. Magic
D. It does not — they are identical

---

### Q22. Adding a reranker to a hybrid RAG pipeline (per Anthropic's Sept-2024 numbers) reduces retrieval failure by approximately: *(Remember)*
A. 5%
B. 35% (contextual alone)
C. 49% (contextual + hybrid)
D. 67% (contextual + hybrid + reranker)

---

### Q23. The MOST appropriate K value for a narrow factual question on a focused KB: *(Apply)*
A. K=1
B. K=3-5
C. K=100
D. K=500

---

### Q24. Which statement is FALSE? *(Evaluate)*
A. The Citations API works with structured document blocks
B. Voyage offers code-specialized embeddings (`voyage-code-3`)
C. The 1M context window is free
D. Hybrid retrieval typically beats pure semantic on exact-match terms

---

### Q25. Design challenge: Architect a Claude-based contract Q&A product that ingests millions of contracts (per customer), supports semantic + exact-match search, returns audit-grade citations, and budgets <$0.05 per query. List the MINIMUM viable components: *(Create)*

> *Create-level note:* compose layers.
A. Single Claude call with all contracts
B. Per-customer namespace in a vector DB (Voyage embeddings) + BM25 parallel + reranker → top-K → Claude with Citations API enabled + cache common system prompts; Sonnet for answer, Haiku for ingestion contextualization
C. Random retrieval
D. Skip retrieval

---

## 🎯 Answers + Explanations

### Q1: **C. 200K tokens (1M via beta header)**
Standard Sonnet 4.6 context. 1M is beta.

### Q2: **B. Retrieval-Augmented Generation**
The canonical expansion.

### Q3: **B. Stuff the contract with caching**
80 pages fits in 200K. Stuff for accuracy; cache for cost.

### Q4: **B. Contextual Retrieval**
Prefix chunks with model-generated context before embedding.

### Q5: **C. 35%**
Anthropic's reported figure for contextual-prefix alone (vector portion).

### Q6: **B. Voyage AI**
Anthropic-partnered. Others work; Voyage is the recommended default.

### Q7: **B. Re-orders top-N candidates with a cross-encoder**
Higher precision than bi-encoder retrieval alone.

### Q8: **B. Reasonable sweet spot**
~500-1000 with 10-15% overlap is the default-good starting point.

### Q9: **B. Semantic + BM25 merged**
Often via Reciprocal Rank Fusion. Captures exact-match terms that semantic alone misses.

### Q10: **B. Full RAG pipeline**
18M contracts is too big to stuff. The classic Anthropic-recommended stack.

### Q11: **B. Citations API**
Structured document blocks with `citations: {enabled: true}` return machine-readable offsets.

### Q12: **B. Recency bias**
Long-context recency bias is well-documented. Place the question last.

### Q13: **B. Recall problem fixed by re-ranking a larger candidate set**
The right answers were there; they just weren't in top-3. Reranker fixes ranking.

### Q14: **A. ~$0.001**
150K × $0.30/Mtok ≈ $0.045 cached input, plus small output. Very cheap per repeat query.

### Q15: **B. Higher per-call cost, no retrieval pipeline**
The classic tradeoff. 1M context replaces engineering with cost.

### Q16: **B. Vector databases**
Different deployment models and feature sets, same conceptual category.

### Q17: **B. Add BM25 / hybrid retrieval**
Semantic search struggles with exact-match identifiers; BM25 nails them.

### Q18: **A. Stuff full doc → summarize → store summary**
Stuffing produces per-doc abstracts that are then RAG-friendly.

### Q19: **C. Same model, two architectures, both correct**
The opening story makes this exact point.

### Q20: **B. Caching of the source document during per-chunk generation**
The doc is cached; per-chunk calls are cheap thanks to cached prefix.

### Q21: **A. Character-offset accuracy at the model layer**
Citations are not just text emissions; the API tracks span positions.

### Q22: **D. 67% (with reranker)**
The full-stack number from Anthropic's published Contextual Retrieval results.

### Q23: **B. K=3-5**
Narrow factual question → small K. Broader research questions → larger K with reranker.

### Q24: **C. The 1M context window is free**
FALSE. It's a beta with regular per-token pricing — at 1M, that's ~$3/call on Sonnet.

### Q25: **B. The composed RAG architecture with Citations**
Vector DB + hybrid + reranker + Citations API + tier mix is the standard answer.

---

## 📊 Score Yourself

- 24–25/25 → 🏆 Module 7 mastered.
- 21–23/25 → ✅ Solid.
- 17–20/25 → ⚠️ Re-read the RAG-vs-stuff decision tree + Contextual Retrieval section.
- <17/25 → 🔁 Restart the Reading.md.

---

## 🃏 Add To Your Flashcards

- Sonnet 4.6: **200K** standard, **1M** beta context
- RAG = Retrieval-Augmented Generation
- Decision: stuff if corpus fits 200K; RAG otherwise
- Contextual Retrieval: prefix chunks with model-generated context (Sept 2024)
- Headline numbers: **35%** (contextual) → **49%** (+ hybrid) → **67%** (+ reranker)
- Embedding partner: **Voyage AI**
- Hybrid retrieval: semantic + BM25 (often RRF)
- Reranker: cross-encoder; precision-boosting last stage
- Chunking sweet spot: **500-1000 tokens, 10-15% overlap**
- Citations API: structured document blocks with `citations: {enabled: true}`
- Recency bias: question goes AT THE END
- 1M context cost: ~$3/call Sonnet

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 8 — Production Patterns & Safety](../Module-08-Production-Patterns-Safety/Reading.md)
