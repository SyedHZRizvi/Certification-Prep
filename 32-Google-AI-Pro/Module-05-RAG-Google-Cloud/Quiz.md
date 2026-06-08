# ✏️ Module 5 Quiz: RAG on Google Cloud

> Aim for 21/25.

---

## Questions

### Q1. RAG stands for: *(Remember)*
A. Recursive AI Generation
B. Retrieval-Augmented Generation
C. Reasoning Action Graph
D. Reinforcement Adversarial Gradient

---

### Q2. The PRIMARY reason to use RAG instead of fine-tuning is: *(Understand)*
A. Lower compute cost during inference
B. Knowledge updates (refresh data without retraining) + citations + auditability
C. Smaller model size
D. Faster generation

---

### Q3. The MOST appropriate Google Cloud product for "I have 100K PDFs and want managed RAG fast": *(Apply)*
A. Vertex AI Vector Search
B. Vertex AI Search (formerly Discovery Engine)
C. BigQuery ML only
D. Cloud Functions

---

### Q4. The MOST appropriate Google Cloud product for "I have 30M custom CLIP-style image embeddings": *(Apply)*
A. Vertex AI Search
B. Vertex AI Vector Search (formerly Matching Engine)
C. Cloud SQL
D. AlloyDB

---

### Q5. The Vertex AI Vector Search algorithm under the hood is most commonly: *(Remember)*
A. KD-tree
B. ScaNN
C. Linear scan
D. Bloom filter

---

### Q6. The MOST appropriate Google Cloud product for "I want SQL semantic search alongside relational filters on AlloyDB data": *(Apply)*
A. Vertex AI Search
B. AlloyDB AI + pgvector (in-DB embedding + Gemini calls)
C. BigQuery vector
D. Cloud SQL pgvector

---

### Q7. The MOST appropriate Google Cloud product for "Analytics team needs semantic search over product descriptions already in BigQuery joined with sales data": *(Apply)*
A. Vertex AI Search
B. BigQuery vector search + `ML.GENERATE_EMBEDDING`
C. Cloud SQL pgvector
D. Datastore

---

### Q8. Google's MOST MULTILINGUAL embedding model is: *(Remember)*
A. text-embedding-004 (English-focused)
B. multilingual-embedding-002 (100+ languages)
C. Llama embedding
D. OpenAI text-embedding-3

---

### Q9. For matching text queries against product photos (semantic image search), the BEST embedding model: *(Apply)*
A. text-embedding-004
B. multimodalembedding (Google's text + image)
C. multilingual-embedding-002
D. Not possible

---

### Q10. The TWO native grounding modes on Gemini in Vertex AI are: *(Remember)*
A. Public web (Google Search) and private corpus (Vertex AI Search)
B. None, grounding requires external code
C. Same thing
D. SQL only

---

### Q11. Gemini grounded with Google Search returns: *(Understand)*
A. No citations
B. Citations to public URLs from real-time web results
C. Only Wikipedia
D. Only PDFs

---

### Q12. Faithfulness as a RAG evaluation metric measures: *(Understand)*
A. Retrieval recall
B. Whether the answer is supported by retrieved context (no hallucination beyond context)
C. Latency
D. Cost

---

### Q13. Recall@K measures: *(Understand)*
A. Faithfulness
B. Of test questions, what fraction has the correct doc in the top-K retrieval results
C. Speed
D. Cost

---

### Q14. Hybrid retrieval combines: *(Understand)*
A. Two embedding models
B. BM25 (keyword) + dense (semantic) merged (often via RRF)
C. Two databases
D. SQL + NoSQL

---

### Q15. A reranker in a RAG pipeline: *(Understand)*
A. Replaces retrieval
B. Second-pass model that reorders top-K by relevance, after initial retrieval
C. Embeddings layer
D. Tokenizer

---

### Q16. Mercado Libre migrated from open-source RAG to Vertex AI Search PRIMARILY because: *(Analyze)*
A. Cheaper
B. Managed chunking + multilingual embedding + regional latency + hybrid retrieval + reranking, all out-of-the-box; team no longer responsible for re-tuning
C. Required by regulators
D. They needed Pinecone

---

### Q17. Embeddings from text-embedding-004 are NOT interchangeable with embeddings from OpenAI text-embedding-3 because: *(Understand)*
A. Different dimensions only
B. Different model spaces, vectors only make sense when indexed and queried with the same model
C. Same vectors
D. Interchangeable

---

### Q18. A team builds an internal Q&A bot grounded with Vertex AI Search. After 6 months, answer quality drops on questions about recent policy changes. The MOST LIKELY cause: *(Apply)*
A. Gemini regression
B. Vertex AI Search index isn't being refreshed; updated docs aren't indexed
C. CMEK expired
D. Quota exhausted

---

### Q19. A team uses Cloud SQL pgvector at 100K records, low traffic. They want to scale to 50M records. The MOST appropriate next step: *(Apply)*
A. Add more Cloud SQL replicas
B. Migrate to AlloyDB AI (or Vertex AI Vector Search depending on retrieval pattern)
C. Stay; pgvector handles 50M trivially
D. Move to MySQL

---

### Q20. To pass retrieval context to Gemini for grounding, you can: *(Understand)*
A. Only through Vertex AI Search tool
B. Either via the Vertex AI Search grounding tool (managed) or by passing retrieved chunks in the prompt manually (DIY)
C. Only via fine-tuning
D. Only through Conversational Agents

---

### Q21. A chunking strategy that splits text mid-sentence: *(Apply)*
A. Improves retrieval
B. Often degrades retrieval, context is lost; use sentence-aware or recursive splitter with overlap
C. Saves cost
D. Required for Gemini

---

### Q22. The MOST APPROPRIATE Vertex AI Search data source connector for a team's internal documents in Confluence + Drive + GitHub Enterprise: *(Apply)*
A. None exist
B. Vertex AI Search has connectors for all three (Confluence, Drive, GitHub Enterprise) plus Salesforce, ServiceNow, SharePoint
C. Only GitHub
D. Only Drive

---

### Q23. Vertex AI Search pricing is approximately: *(Remember)*
A. Per-document index size only
B. Per-query (~$4/1K standard, ~$10/1K enterprise with reranking) + index storage
C. Free
D. Per-minute compute

---

### Q24. Which is FALSE? *(Evaluate)*
A. RAG reduces but does not eliminate hallucinations
B. Embeddings are model-agnostic, text-embedding-004 vectors work with OpenAI's index
C. AlloyDB AI supports in-DB embedding generation
D. Vertex AI Search supports Confluence connectors

---

### Q25. Design challenge: A 5,000-employee company wants a Gemini-powered RAG assistant over: internal Drive + Confluence + GitHub Enterprise; 30K questions/day; EU residency; weekly content refresh; multilingual (English + German + French). MINIMUM stack: *(Create)*
A. Self-built RAG on Pinecone
B. Vertex AI Search in `europe-west1` with Drive/Confluence/GitHub connectors using `multilingual-embedding-002`, grounded via Gemini 2.5 Flash on Vertex with reranking enabled; CMEK + VPC-SC + audit logs; refresh schedule weekly
C. Google AI Studio
D. BigQuery vector only

---

## 🎯 Answers + Explanations

### Q1: **B. Retrieval-Augmented Generation**

### Q2: **B. Knowledge updates + citations + auditability**
Fine-tune for behavior; RAG for knowledge.

### Q3: **B. Vertex AI Search**
Managed end-to-end; no need to roll-your-own.

### Q4: **B. Vertex AI Vector Search**
Custom embeddings → low-level ANN.

### Q5: **B. ScaNN**
Google's ANN library under the hood.

### Q6: **B. AlloyDB AI + pgvector**
In-DB embedding + Gemini calls; SQL semantic alongside relational.

### Q7: **B. BigQuery vector search + `ML.GENERATE_EMBEDDING`**
Analytics-scale semantic over warehouse data.

### Q8: **B. multilingual-embedding-002**
100+ languages.

### Q9: **B. multimodalembedding**
Google's CLIP-style multi-modal embedder.

### Q10: **A. Public web (Google Search) and private corpus (Vertex AI Search)**
Two distinct native grounding modes.

### Q11: **B. Citations to public URLs from real-time web results**

### Q12: **B. Whether the answer is supported by retrieved context**

### Q13: **B. Right doc in top-K retrieval**

### Q14: **B. BM25 + dense merged**
Often via Reciprocal Rank Fusion.

### Q15: **B. Second-pass model that reorders top-K**

### Q16: **B. Managed chunking + multilingual + regional + hybrid + reranking, OOTB**

### Q17: **B. Different model spaces, must match indexer and querier**

### Q18: **B. Index isn't being refreshed; new docs aren't indexed**
Almost always the answer for "stale RAG."

### Q19: **B. Migrate to AlloyDB AI or Vertex AI Vector Search**

### Q20: **B. Either via grounding tool (managed) or DIY chunks in prompt**

### Q21: **B. Often degrades, use sentence-aware splitter + overlap**

### Q22: **B. Vertex AI Search supports all three (and more)**

### Q23: **B. ~$4/1K standard, ~$10/1K enterprise + storage**

### Q24: **B. Embeddings are model-agnostic, FALSE**
Must match embedding model at index and query.

### Q25: **B. Vertex AI Search EU + multilingual-002 + Flash grounding + reranker + VPC-SC + CMEK + audit + weekly refresh**

---

## 📊 Score Yourself

- 24–25/25 → 🏆 Module 5 mastered.
- 21–23/25 → ✅ Solid.
- <21/25 → Re-read the five-stack decision tree.

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 6, Fine-Tuning on Vertex AI](../Module-06-Fine-Tuning-Vertex-AI/Reading.md)
