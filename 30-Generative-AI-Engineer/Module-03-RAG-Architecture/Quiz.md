# ✏️ Module 3 Quiz: RAG Architecture

> 26 questions · Aim 22/26.

---

## Questions

### Q1. The Gao et al. (2024) RAG survey defines the progression as: *(Remember)*
A. Old → New → Best
B. Naive → Advanced → Modular RAG
C. Basic → Pro → Enterprise
D. Embedded → Indexed → Compiled

---

### Q2. HyDE (Hypothetical Document Embeddings) works by: *(Understand)*
A. Embedding only the user's literal query
B. Asking the LLM to write a hypothetical answer first, then embedding that to retrieve
C. Running BM25 only
D. Skipping retrieval

---

### Q3. The Stripe-docs bot story in the reading failed primarily because of: *(Analyze)*
A. The embedding dimension was wrong
B. Compounding: no source-trust filtering, no reranker, no query decomposition, no "I don't know" path
C. The vector DB was slow
D. The model was too small

---

### Q4. The pre-retrieval technique that generates multiple paraphrases of the user query and unions the results: *(Remember)*
A. HyDE
B. Multi-query
C. Step-back
D. Self-RAG

---

### Q5. Step-back prompting generates: *(Understand)*
A. The exact same query
B. A more abstract/higher-level question that the original is an instance of
C. The literal answer
D. A random string

---

### Q6. Why is "no reranker" a common production RAG bug? *(Analyze)*
A. Rerankers don't help
B. Without a reranker, low-quality near-matches (deprecated docs, blog posts) outrank canonical sources
C. Rerankers slow down retrieval
D. Reranking is illegal

---

### Q7. A RAG prompt that produces hallucinated confidence on weak context is missing: *(Apply)*
A. The model name
B. An explicit "if context is insufficient, say I don't know" instruction
C. Temperature
D. The retriever

---

### Q8. Self-Querying retrieval *parses* a natural query into: *(Understand)*
A. A token list
B. A `(text_query, metadata_filters)` pair the retriever can use
C. SQL only
D. JSON Schema

---

### Q9. Contextual retrieval (Anthropic Sep 2024) prepends: *(Remember)*
A. A random embedding
B. A 50–100 token LLM-generated context summary for each chunk before embedding
C. The user's name
D. The current date

---

### Q10. The PRIMARY purpose of source-trust metadata + pre-filter is: *(Analyze)*
A. Storage savings
B. Prevent deprecated/community content from outranking canonical sources
C. Faster embeddings
D. Lower latency

---

### Q11. Lost-in-the-middle (Liu et al. 2023) describes: *(Remember)*
A. Cars in tunnels
B. LLMs attending disproportionately to the start and end of long contexts; relevance buried in the middle is missed
C. Lost vector DBs
D. Token boundaries

---

### Q12. Citation packing in production RAG means: *(Understand)*
A. Putting citations at the bottom
B. Annotating retrieved chunks with unique IDs, instructing the LLM to cite by ID, then resolving IDs to URLs in post-processing
C. Ignoring citations
D. Letting the model invent them

---

### Q13. CRAG (Corrective RAG) introduces: *(Understand)*
A. A relevance classifier and a web-search fallback when retrieved chunks are low quality
B. A new embedding model
C. A query database
D. Multi-modal embeddings

---

### Q14. Adaptive RAG saves cost by: *(Understand)*
A. Always retrieving
B. Routing simple queries to "no retrieval" and complex ones to iterative retrieval via a complexity classifier
C. Caching only
D. Skipping the LLM

---

### Q15. Graph RAG (Microsoft 2024) excels at: *(Apply)*
A. Single-fact lookups
B. Aggregative questions ("summarize all customer complaints about X") via subgraph retrieval over an LLM-built KG
C. Latency-sensitive chat
D. Tokenization

---

### Q16. A team's RAG worsens after they switched from 5 retrieved chunks to 25 stuffed into the prompt. The MOST likely cause: *(Analyze)*
A. The retriever broke
B. Lost-in-the-middle + irrelevant chunks diluting attention
C. The DB ran out of space
D. The user is wrong

---

### Q17. The recommended *first system* to build for a new RAG product: *(Apply)*
A. Modular RAG with a router
B. Naive RAG end-to-end as a baseline, then add layers measured by RAGAS
C. Skip RAG, use long context
D. Multi-agent

---

### Q18. The reason an LLM-as-router is useful in modular RAG: *(Understand)*
A. To translate languages
B. To dynamically choose among retrievers (vector, SQL, web, API) based on the query
C. To do the embedding
D. To replace the user

---

### Q19. Contextual compression in post-retrieval refers to: *(Understand)*
A. Compressing the LLM
B. Extracting only the relevant sentences/spans from each chunk before passing to the LLM
C. Compressing the vector DB
D. Reducing the temperature

---

### Q20. FLARE (Forward-Looking Active Retrieval) is most appropriate for: *(Apply)*
A. Chat
B. Long-form factual writing where mid-generation retrieval can re-ground future sentences
C. Image generation
D. Code completion

---

### Q21. A retrieval team has high recall but the LLM still hallucinates. Likely cause: *(Evaluate)*
A. The reranker is failing to put the most relevant chunk first; the LLM weights position
B. They need more chunks
C. The DB is broken
D. The embedder is wrong

---

### Q22. Klarna's RAG success (2024) was MOST attributable to: *(Analyze)*
A. Switching to GPT-4
B. Years of clean policy/ticket data + multilingual embeddings + strict escalation rules + RAGAS-style evaluation
C. A new vector DB
D. Skipping guardrails

---

### Q23. A user query is "Compare Q3 revenue of Stripe and Adyen and explain the gap." The MOST appropriate pre-retrieval technique: *(Apply)*
A. Single-shot retrieval on the literal query
B. Query decomposition → ["Q3 revenue Stripe", "Q3 revenue Adyen", "Stripe vs Adyen market position"]
C. HyDE only
D. None

---

### Q24. A retrieval system's failure mode is "vague questions get vague answers." The MOST cost-effective fix: *(Apply)*
A. Switch vector DBs
B. Add a pre-retrieval rewriter (multi-query, decomposition, HyDE) plus a clarifying-question fallback when retrieval confidence is low
C. Use a larger LLM
D. Increase temperature

---

### Q25. "I don't know" responses in production RAG are: *(Evaluate)*
A. A bug to eliminate
B. A *feature* — explicit refusal license in the system prompt reduces hallucination on low-context queries
C. A sign of model failure
D. Optional

---

### Q26. Design a confidence-gated escalation for a customer-support RAG (Klarna-style): if the system is below confidence threshold, hand off to a human. Which combination is BEST? *(Create)*
A. Random sampling
B. RAGAS faithfulness score (LLM-as-judge) on the draft, plus the top-1 reranker score, plus the model's logprob; below threshold → escalate to human with the LLM draft as context
C. Token count only
D. User survey only

---

## 🎯 Answers + Explanations

### Q1: **B. Naive → Advanced → Modular**
The Gao 2024 survey taxonomy. Naive = one-shot retrieval + LLM. Advanced = pre/post-retrieval intelligence. Modular = router + multiple retrievers + tools + loops.

### Q2: **B. LLM writes hypothetical answer, embed that, retrieve**
Counterintuitive: answers share more surface with documents than questions do. Wins especially on technical corpora.

### Q3: **B. Compounding failures**
Single fixes don't change much; the production fix combines source-trust filtering, reranker, query decomposition, and a refusal path.

### Q4: **B. Multi-query**
Generate K paraphrased queries, retrieve for each, union. K=3–5 typical.

### Q5: **B. Higher-level abstract question**
"Water boiling point at 5000m" → "How does altitude affect boiling point?" Retrieve both.

### Q6: **B. Deprecated/community content outranks canonical**
Common in dense retrieval: vague semantic match can beat narrowly-correct specificity unless reranked.

### Q7: **B. Explicit refusal license**
LLMs need *explicit* permission to refuse. Without it, they fill the gap with plausible-sounding nonsense.

### Q8: **B. `(text_query, metadata_filters)`**
The LLM parses "Show me transformer papers from 2023" into text="transformer paper", filters={year: 2023}.

### Q9: **B. 50–100 token LLM-generated context summary per chunk**
Anthropic's technique. With prompt caching, cheap. 35% retrieval-failure-rate reduction on their bench.

### Q10: **B. Prevent deprecated content from outranking canonical**
The Stripe story. Source tier + time validity + pre-filter.

### Q11: **B. LLMs attend disproportionately to start and end of long contexts**
Liu et al. (2023) and follow-ups. Middle-positioned facts are missed even when retrieved correctly.

### Q12: **B. Annotate chunks with IDs, instruct cite-by-ID, resolve IDs to URLs**
The Perplexity / claude.ai / ChatGPT-search citation mechanism.

### Q13: **A. Relevance classifier + web fallback**
CRAG (Yan et al. 2024). Detect low-quality retrieval, fall back to web search.

### Q14: **B. Complexity classifier routes among "no retrieval", "single-shot", "iterative"**
Saves money on the easy ~70% of queries.

### Q15: **B. Aggregative questions via LLM-built knowledge graph + subgraph walks**
Microsoft Graph RAG. Pure vector retrieval cannot answer "tell me all our customers' top complaints" — Graph RAG can.

### Q16: **B. Lost-in-the-middle + dilution**
More chunks ≠ better. Past ~10 chunks, you usually hurt yourself.

### Q17: **B. Naive first, instrumented, then add layers**
Without the baseline, you can't measure whether each new layer helps.

### Q18: **B. Dynamically choose among retrievers**
Vector for fuzzy semantic; SQL for structured aggregates; web for current events; API for live data.

### Q19: **B. Sentence-level extraction from each chunk**
Sends only the relevant spans to the LLM. 4-10× token reduction.

### Q20: **B. Long-form factual writing with mid-generation retrieval**
Trigger retrieval when next-sentence confidence drops. Rare in production chat because complexity > benefit.

### Q21: **A. Reranker failure puts the most relevant chunk lower than position-1**
Position matters; LLMs weight earlier content more in many prompt formats.

### Q22: **B. Data + multilingual embeddings + escalation rules + evaluation harness**
The boring infrastructure was the win, not the model swap.

### Q23: **B. Decomposition**
Three sub-questions; retrieve for each; combine. Single-shot retrieval can't simultaneously find Stripe revenue AND Adyen revenue AND market context.

### Q24: **B. Pre-retrieval rewriter + clarifying question fallback**
Cheap, model-agnostic, big quality win. Save the larger LLM for the *generation* step.

### Q25: **B. A feature — explicit refusal license**
Klarna escalates to humans below threshold. "I don't know" is the bug-prevention path.

### Q26: **B. RAGAS faithfulness + reranker score + logprob → threshold → human handoff**
The composite signal is more reliable than any single metric. Module 7 details RAGAS scoring.

---

## 📊 Score Yourself

- 24–26/26 → 🏆 RAG architect.
- 21–23/26 → ✅ Solid; revisit weak topics.
- 17–20/26 → ⚠️ Re-read pre-retrieval + post-retrieval + Graph/CRAG sections.
- <17/26 → 🔁 Re-watch the Lance Martin RAG-from-scratch series before re-quizzing.

---

## 🃏 Add To Your Flashcards

- Naive vs Advanced vs Modular RAG
- HyDE / Multi-query / Decomposition / Step-back
- CRAG / Adaptive RAG / Self-RAG / Graph RAG
- Lost-in-the-middle
- Citation packing mechanism
- Contextual retrieval prefix (Anthropic Sep 2024)
- Source-trust + pre-filter
- RAGAS faithfulness as a confidence gate

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 4 — LangChain & LlamaIndex](../Module-04-LangChain-LlamaIndex/Reading.md)
