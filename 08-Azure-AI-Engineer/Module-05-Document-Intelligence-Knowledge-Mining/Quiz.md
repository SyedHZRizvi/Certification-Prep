# ✏️ Module 5 Quiz: Document Intelligence & Knowledge Mining

> **Instructions:** Answer all 30 questions WITHOUT looking at the reading.
> Then check your answers below. Aim for 25/30 minimum.
> Each question is **Bloom's-taxonomy** tagged.

---

## Questions

### Q1. Form Recognizer was renamed to: *(Remember)*
A. Azure AI Forms
B. Document Intelligence
C. Azure AI Reader
D. Smart Parser

---

### Q2. You have 5,000 receipts with consistent layouts from a single vendor. To extract vendor / date / total, the BEST choice is: *(Apply)*
A. Prebuilt-Receipt model
B. Custom Template model
C. Custom Neural model
D. Layout model

---

### Q3. You have invoices from 50 different vendors with widely varying layouts but the same conceptual fields (Invoice #, Date, Total). Best choice: *(Apply)*
A. Prebuilt-Invoice (try it first; covers most layouts)
B. Custom Template model
C. Custom Neural model
D. Read

---

### Q4. To classify incoming documents as "Invoice" / "Receipt" / "Statement" before routing them to different extraction models, use: *(Apply)*
A. Custom Composed model
B. Custom Classifier
C. Layout model
D. Read

---

### Q5. Which Python class is the modern data-plane client for Document Intelligence? *(Remember)*
A. `DocumentAnalysisClient`
B. `DocumentIntelligenceClient`
C. `FormRecognizerClient`
D. `DocIntelClient`

---

### Q6. The five concepts of Azure AI Search are: *(Remember)*
A. Index, Indexer, Skillset, Knowledge Store, Data Source
B. Database, Table, View, Procedure, Trigger
C. Cluster, Node, Shard, Replica, Index
D. Bucket, Object, Lambda, Pipeline, Search

---

### Q7. An indexer in Azure AI Search: *(Understand)*
A. Is pushed to by your app over HTTP
B. Pulls data from a data source on a schedule
C. Is required for every index
D. Is the same as a skillset

---

### Q8. Which is NOT a supported data source for an indexer? *(Remember)*
A. Azure Blob Storage
B. Azure SQL Database
C. Azure Cosmos DB
D. Azure Service Bus

---

### Q9. A skillset that includes the OCR skill + Entity Recognition skill + Embedding skill produces what? *(Understand)*
A. A trained ML model
B. Enriched documents written to the search index (and optionally Knowledge Store)
C. A new database
D. A custom skill API

---

### Q10. To run vector search, your field type must be: *(Remember)*
A. `Edm.String`
B. `Collection(Edm.Single)`
C. `Edm.Double`
D. `Edm.GeographyPoint`

---

### Q11. The default vector search algorithm in Azure AI Search is: *(Remember)*
A. Exact KNN
B. HNSW (Hierarchical Navigable Small World)
C. FAISS-IVF
D. Annoy

---

### Q12. The default distance metric for vector search is: *(Remember)*
A. Cosine
B. Euclidean
C. Manhattan
D. Hamming

---

### Q13. `text-embedding-3-small` outputs vectors of how many dimensions? *(Remember)*
A. 768
B. 1024
C. 1536
D. 3072

---

### Q14. Semantic ranker in Azure AI Search: *(Remember)*
A. Is included in Free tier
B. Requires Standard (S1) or higher
C. Replaces vector search
D. Only works in English

---

### Q15. Hybrid search combines: *(Understand)*
A. SQL queries + vector queries
B. Keyword (BM25) + vector via Reciprocal Rank Fusion (RRF)
C. Multiple indexes
D. Multiple data sources

---

### Q16. The Knowledge Store in Azure AI Search: *(Understand)*
A. Replaces the search index
B. Is an optional projection of enriched data to Azure Storage (tables / objects / files)
C. Is required for semantic ranker
D. Stores vectors only

---

### Q17. To make a field returnable in search results, set: *(Remember)*
A. `searchable: true`
B. `retrievable: true`
C. `facetable: true`
D. `key: true`

---

### Q18. Which Document Intelligence model returns text + tables + structure but NOT named fields? *(Understand)*
A. Read
B. Layout
C. Prebuilt-Invoice
D. Custom Template

---

### Q19. A custom Document Intelligence model is trained from labeled documents stored in: *(Remember)*
A. The Document Intelligence resource itself
B. Azure Blob Storage (referenced via container URL / SAS or managed identity)
C. Azure SQL
D. Cosmos DB

---

### Q20. Which Python snippet correctly calls the prebuilt-invoice model? *(Apply)*
```python
client = DocumentIntelligenceClient(endpoint, AzureKeyCredential(key))
poller = client.begin_analyze_document(
    model_id=______, body={"urlSource": url}
)
```
A. `"invoice"`
B. `"prebuilt-invoice"`
C. `"models/invoice"`
D. `"v1/invoice"`

---

### Q21. Integrated vectorization in Azure AI Search means: *(Understand)*
A. Manually vectorizing docs in your app
B. A built-in Azure OpenAI Embedding skill vectorizes during indexing — no glue code
C. Always-on vector index
D. Single-tier pricing

---

### Q22. A query like `queryType=semantic` returns additional fields including: *(Remember)*
A. `@search.score` only
B. `@search.captions` and `@search.answers`
C. Raw embeddings
D. SQL plan

---

### Q23. Which is the BEST query strategy for a RAG app over 100K PDFs? *(Apply)*
A. Pure simple keyword search
B. Pure vector search
C. Hybrid (keyword + vector) + semantic re-ranking
D. SQL LIKE queries

---

### Q24. A Custom Composed model is used to: *(Understand)*
A. Combine multiple custom models so a single call routes to the right one
B. Combine outputs from two services
C. Train across multiple regions
D. Validate models before deployment

---

### Q25. A skillset's Web API custom skill lets you: *(Understand)*
A. Replace the indexer
B. Call your own HTTP endpoint to enrich docs during indexing
C. Submit search queries
D. Write to Knowledge Store directly

---

### Q26. Why might you choose Document Intelligence's Layout model over the Read API for a PDF? *(Analyze)*
A. Layout returns structure (tables, paragraphs, selection marks); Read returns words/lines only
B. Layout is cheaper
C. Read can't handle PDFs
D. Layout supports more languages

---

### Q27. You want to set `text-embedding-3-large` for your vector field. The field's `dimensions` should be: *(Apply)*
A. 768
B. 1024
C. 1536
D. 3072

---

### Q28. A team wants to monitor freshness — only re-index documents that have changed. The indexer feature to enable is: *(Apply)*
A. Soft delete
B. Change detection policy (high watermark) on the data source
C. Re-index on every schedule run
D. Manual re-create the index

---

### Q29. The NHS Lighthill radiology pilot (2023–2024) used Custom Neural + hybrid+semantic + Private Endpoints + CMK + UK-South region pinning. Evaluate this architecture against an alternative that uses Custom Template + pure vector search + public endpoint. Which option below contains the *strongest* architectural critique of the alternative? *(Evaluate)*
A. Pure vector search is always worse
B. Custom Template breaks under GP-letter layout variation; pure vector loses keyword-precise retrieval (drug names, ICD codes) that BM25 handles natively; public endpoint violates NHS network policy and exposes PHI; the alternative collapses every accuracy + compliance lever the NHS used
C. The alternative is fine if cost matters
D. Custom Neural costs more

---

### Q30. **Design task.** You're designing the retrieval surface for the course Capstone (insurer claims-processing RAG). The corpus has: 200K varying-layout claim forms, 50K policy PDFs (consistent templates), 10K appeals letters (unstructured prose). The chatbot must cite source paragraphs, support Spanish + English, and stay HIPAA-defensible. Which composition below is *strongest*? *(Create)*
A. One Custom Template, no vector field, basic search
B. (1) **Custom Neural** for claim forms (variable layout); (2) **Custom Template** for the 50K policy PDFs; (3) **Read + Layout** for unstructured appeals letters going through a skillset; (4) Azure AI Search hybrid (BM25 + vector via `text-embedding-3-large`) + semantic ranker with multilingual config; (5) chunking ~500 tokens with overlap; (6) Translator for Spanish-side queries upstream; (7) Private Endpoints + CMK + region pinning; (8) integrated vectorization on the indexer so chunks are vectorised once
C. Pure vector with no keyword field
D. Cosmos DB instead of Azure AI Search

---

## 🎯 Answers + Explanations

### Q1: **B. Document Intelligence**
Renamed in 2023.

### Q2: **B. Custom Template model**
Consistent layout = Template. (Or, if Microsoft already had a "Vendor X receipt" template, Prebuilt-Receipt could work, but the question implies extracting from one vendor's specific form.)

### Q3: **C. Custom Neural model**
Varying layout, consistent fields = Neural. (Or Prebuilt-Invoice if it covers your fields — but the question said varying layouts, so Neural is the safer answer for unknown templates.)

### Q4: **B. Custom Classifier**
Categorizes incoming docs before routing.

### Q5: **B. `DocumentIntelligenceClient`**
The modern (post-rename) client. `DocumentAnalysisClient` is the legacy `azure-ai-formrecognizer` client.

### Q6: **A. Index, Indexer, Skillset, Knowledge Store, Data Source**
DISKS — memorize.

### Q7: **B. Pulls data from a data source on a schedule**
Pull-based crawler.

### Q8: **D. Azure Service Bus**
Service Bus is messaging, not indexer-supported. Blob/SQL/Cosmos/Data Lake/Table/SharePoint/OneLake are supported.

### Q9: **B. Enriched documents written to the search index (and optionally Knowledge Store)**
Skillset = enrichment pipeline.

### Q10: **B. `Collection(Edm.Single)`**
Float vector. You also specify `dimensions` and a vector search profile.

### Q11: **B. HNSW**
Fast approximate nearest neighbor. Exact KNN is an option for accuracy at higher cost.

### Q12: **A. Cosine**
Most common for embeddings. Also supports dotProduct, euclidean.

### Q13: **C. 1536**
Both ada-002 and text-embedding-3-small produce 1536 dims. text-embedding-3-large produces 3072.

### Q14: **B. Requires Standard (S1) or higher**
Free/Basic don't support semantic ranker.

### Q15: **B. Keyword (BM25) + vector via RRF**
Reciprocal Rank Fusion combines the two ranked lists.

### Q16: **B. Optional projection of enriched data to Azure Storage**
Tables, objects, files — useful for downstream analytics. Not where the index lives.

### Q17: **B. `retrievable: true`**
Returns the field in search results.

### Q18: **B. Layout**
Layout = structure (tables, selection marks, paragraphs). Prebuilt-Invoice adds named fields. Read = words only.

### Q19: **B. Azure Blob Storage**
BYOS — your container URL or managed identity reference.

### Q20: **B. `"prebuilt-invoice"`**
Prebuilt model IDs are prefixed `prebuilt-`.

### Q21: **B. A built-in Azure OpenAI Embedding skill vectorizes during indexing**
Removes the need to embed in your app.

### Q22: **B. `@search.captions` and `@search.answers`**
Plus `@search.reranker_score`.

### Q23: **C. Hybrid + semantic re-ranking**
Microsoft's documented gold standard for RAG.

### Q24: **A. Combine multiple custom models so a single call routes to the right one**
Composed model includes child models; the API picks the right one per request.

### Q25: **B. Call your own HTTP endpoint to enrich docs during indexing**
Lets you plug in arbitrary logic.

### Q26: **A. Layout returns structure (tables, paragraphs, selection marks); Read returns words/lines only**
Pick Layout when you need tables.

### Q27: **D. 3072**
text-embedding-3-large = 3072 dimensions. The field config must match.

### Q28: **B. Change detection policy (high watermark) on the data source**
Lets the indexer skip unchanged docs.

### Q29: **B. Layout / keyword-precision / network-policy critique**
The NHS architecture handled layout variation (Custom Neural beats Custom Template here), preserved keyword-precise retrieval for ICD/drug codes (hybrid beats pure vector), and stayed inside NHS network policy (Private Endpoints required). The alternative drops all three levers.

### Q30: **B. Layered composition**
Each layer maps to a constraint. The right RAG retrieval surface in a regulated, multilingual, mixed-document estate is a **composition** of Document Intelligence model types + hybrid+semantic search + multilingual config + network/CMK controls. Options A, C, D each collapse one or more dimensions of the design.

---

## 📊 Score Yourself

- 29–30/30 → 🏆 Move on
- 25–28/30 → ✅ Strong
- 19–24/30 → ⚠️ Re-read the AI Search + Document Intelligence sections
- <19/30 → 🔁 Re-read Reading.md; re-quiz tomorrow

### Bloom's distribution check
| Level | Count | % | Target |
|---|---|---|---|
| Remember | 12 | 40% | ≤ 25%¹ |
| Understand | 9 | 30% | ~25% |
| Apply | 7 | 23% | ~25% |
| Analyze | 1 | 3% | ~20% |
| Evaluate | 1 | 3% | (combined) |
| Create | 1 | 3% | ~5% |

¹ Module 5 is the largest in exam surface area; service-name + parameter recall is exam-critical and the higher Remember share reflects that.

---

## 🃏 Add To Your Flashcards

- DISKS (Data source / Indexer / Skillset / Knowledge store / Search index)
- Custom Template vs Custom Neural
- Custom Classifier vs Composed model
- Document Intelligence model types (Read, Layout, Prebuilt, Custom)
- Vector field type + algorithm + distance (Collection(Edm.Single), HNSW, cosine)
- Embedding dimensions (ada-002=1536, 3-small=1536, 3-large=3072)
- Semantic ranker tier requirement (S1+)
- Hybrid search uses RRF
- Indexer is PULL-based

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 6: Conversational AI](../Module-06-Conversational-AI/Reading.md)
