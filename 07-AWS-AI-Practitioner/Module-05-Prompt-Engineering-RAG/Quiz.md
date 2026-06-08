# ✏️ Module 5 Quiz: Prompt Engineering & RAG

> **Instructions:** Answer all 26 questions WITHOUT looking at the reading.
> Then check your answers below. Aim for 22/26 minimum.

---

## Questions

### Q1. Which prompting technique provides several worked examples before the new input? *(Remember)*
A. Zero-shot
B. One-shot
C. Few-shot
D. Chain-of-Thought

---

### Q2. Adding "Let's think step by step" to a math word-problem prompt is an example of: *(Apply)*
A. Few-shot prompting
B. Chain-of-Thought (CoT) prompting
C. RAG
D. ReAct

---

### Q3. RAG primarily addresses which TWO LLM weaknesses? *(Understand)*
A. GPU cost and latency
B. Hallucinations and lack of access to private/fresh data
C. Tokenization and embedding errors
D. IAM and networking

---

### Q4. In a RAG pipeline, the user's question is converted into: *(Understand)*
A. A SQL query
B. A vector (embedding) that is searched against a vector store
C. A regex pattern
D. A REST API call

---

### Q5. Which AWS service provides FULLY MANAGED RAG (chunking, embedding, retrieval) on Bedrock? *(Remember)*
A. Knowledge Bases for Amazon Bedrock
B. SageMaker Pipelines
C. Amazon Personalize
D. Amazon Polly

---

### Q6. Which is NOT a vector store supported by Knowledge Bases for Amazon Bedrock? *(Analyze)*
A. Amazon OpenSearch Serverless
B. Amazon Aurora PostgreSQL (pgvector)
C. Pinecone
D. Amazon Redshift

---

### Q7. The MOST common Bedrock-native default vector store for Knowledge Bases is: *(Remember)*
A. Amazon Aurora pgvector
B. Pinecone
C. Amazon OpenSearch Serverless
D. Amazon DynamoDB

---

### Q8. "Prompt injection" is BEST described as: *(Understand)*
A. Inserting a SQL command into an LLM
B. A malicious user (or content) overriding the system prompt with crafted instructions
C. An IAM permission error
D. A pricing tier of Bedrock

---

### Q9. INDIRECT prompt injection happens when malicious instructions are hidden in: *(Understand)*
A. The system prompt
B. A PDF or web page that the LLM is asked to read
C. A user's email address
D. The Bedrock model registry

---

### Q10. Which Bedrock-native service helps block prompts/responses by topic, PII, or content filter? *(Apply)*
A. Guardrails for Amazon Bedrock
B. AWS Shield
C. Amazon Detective
D. AWS WAF

---

### Q11. A "system prompt" is BEST used to: *(Understand)*
A. Encode user-specific data
B. Set persistent persona, tone, and policy rules invisible to the user
C. Store API keys
D. Run SQL queries

---

### Q12. A Bedrock Agent's "action group" is: *(Remember)*
A. A logging system
B. A set of APIs / Lambda functions the agent can invoke
C. A list of vector stores
D. An IAM role

---

### Q13. Which technique combines vector similarity AND keyword search? *(Remember)*
A. Hybrid search
B. Pure semantic search
C. Lexical search only
D. Fuzzy search

---

### Q14. Reranking (e.g., Cohere Rerank) is typically used to: *(Understand)*
A. Replace the embedding model
B. Re-score the initial top-K retrieved chunks and surface higher-quality top-N
C. Generate text
D. Train a new model

---

### Q15. A "ReAct" prompt pattern alternates: *(Understand)*
A. Read and Act
B. Reason, Act, Observe, repeatedly until a final answer
C. Retrieve and Acknowledge
D. Real-time and Async

---

### Q16. The MAIN reason RAG is preferred over fine-tuning for "use my docs" scenarios is: *(Evaluate)*
A. RAG always gives better accuracy than fine-tuning
B. RAG is cheaper, can be updated instantly, and lets you cite sources without changing model weights
C. RAG eliminates the need for a foundation model
D. RAG only works with Stable Diffusion

---

### Q17. "Prompt chaining" means: *(Understand)*
A. Encrypting prompts in transit
B. Breaking a complex task into a pipeline of smaller LLM calls
C. Concatenating multiple users' prompts
D. Caching prompts in Redis

---

### Q18. Which BEDROCK API returns the retrieved chunks AND the final LLM-generated answer with citations? *(Remember)*
A. Invoke
B. Retrieve
C. RetrieveAndGenerate
D. CreateAgent

---

### Q19. A team wants their LLM to look up a customer in Salesforce and create a Jira ticket as part of one conversation. The BEST AWS pattern is: *(Create)*
A. SageMaker Endpoint with custom code
B. Bedrock Agent with two action groups (Salesforce + Jira)
C. Amazon Lex with manual integrations
D. Amazon Polly + Amazon Translate

---

### Q20. Which chunking strategy indexes small chunks for retrieval but returns larger parent chunks for context? *(Apply)*
A. Fixed-size chunking
B. Sentence chunking
C. Hierarchical (parent-child) chunking
D. Document-level chunking

---

### Q21. The cost / invasiveness ordering of LLM customization (cheapest to most expensive) is generally: *(Evaluate)*
A. Prompting < RAG < Fine-tuning < Continued pre-training
B. Continued pre-training < Fine-tuning < RAG < Prompting
C. RAG < Prompting < Fine-tuning < Continued pre-training
D. Fine-tuning < Prompting < Continued pre-training < RAG

---

### Q22. "Jailbreaking" an LLM means: *(Remember)*
A. Reverse-engineering the model weights
B. Getting the model to bypass its built-in safety guidelines
C. Hosting the model on a jailbroken device
D. Switching from Bedrock to JumpStart

---

### Q23. A defense AGAINST prompt injection is: *(Apply)*
A. Storing the system prompt in plaintext on a public website
B. Using Bedrock Guardrails, input/output filtering, and least-privilege tool access
C. Removing the system prompt entirely
D. Increasing temperature to 1.0

---

### Q24. Which is TRUE about Knowledge Bases for Bedrock? *(Analyze)*
A. They require you to manage your own embedding pipeline
B. They provide managed data ingestion, chunking, embedding, and retrieval
C. They are a SageMaker feature, not Bedrock
D. They only support PDF files

---

### Q25. A vector store with a knowledge graph for multi-hop reasoning supported by Bedrock is: *(Apply)*
A. Amazon DynamoDB
B. Amazon Neptune (Analytics, for GraphRAG)
C. Amazon ElastiCache
D. Amazon Athena

---

### Q26. A user asks "Show me ticket #5678 details." Pure semantic search misses it because of the exact identifier. The BEST fix is: *(Analyze)*
A. Increase temperature
B. Use hybrid search (semantic + keyword)
C. Fine-tune the model
D. Switch to a smaller model

---

## 🎯 Answers + Explanations

### Q1: **C. Few-shot**
Few-shot = several examples. One-shot = one example. Zero-shot = no examples. CoT = step-by-step reasoning.

### Q2: **B. Chain-of-Thought**
The literal trigger phrase "Let's think step by step" is the canonical CoT cue.

### Q3: **B. Hallucinations + private/fresh data**
RAG grounds the model in your real, current data → less hallucination and access to non-public info.

### Q4: **B. A vector (embedding) searched against a vector store**
That's the query phase of RAG.

### Q5: **A. Knowledge Bases for Amazon Bedrock**
Managed RAG, handles chunking, embedding, retrieval, and integrates with Bedrock LLMs.

### Q6: **D. Amazon Redshift**
Bedrock KB vector stores: OpenSearch Serverless, Aurora pgvector, Neptune, DocumentDB, MemoryDB, Pinecone, Redis Enterprise, MongoDB Atlas. Redshift is not on the list.

### Q7: **C. Amazon OpenSearch Serverless**
Default and most-recommended Bedrock-native vector store.

### Q8: **B. Malicious instruction overriding the system prompt**
The "SQL injection of LLMs", OWASP #1 LLM risk.

### Q9: **B. Hidden in content the LLM reads (PDF, webpage)**
Indirect = via ingested data. More dangerous in RAG/agent scenarios than direct user injection.

### Q10: **A. Guardrails for Amazon Bedrock**
PII filtering, denied topics, word filters, content-category filters, contextual grounding checks.

### Q11: **B. Persistent persona, tone, policy**
The system prompt is the most durable place to set behavior and refusal rules.

### Q12: **B. A set of APIs / Lambda functions the agent can invoke**
You describe APIs (Lambda + OpenAPI schema), and the agent decides when to call them.

### Q13: **A. Hybrid search**
Combines dense (vector) + sparse (keyword/BM25) for the best of both worlds.

### Q14: **B. Re-score top-K to surface better top-N**
Rerankers improve precision on the most relevant chunks before the LLM sees them.

### Q15: **B. Reason, Act, Observe, repeated**
ReAct = Reason + Act loop. The architectural pattern behind Bedrock Agents.

### Q16: **B. Cheaper, instantly updatable, citable, no weight changes**
The pragmatic reasons RAG wins for most enterprise use cases.

### Q17: **B. Pipeline of smaller LLM calls**
Each call does one focused thing; outputs feed the next prompt. Great for complex workflows.

### Q18: **C. RetrieveAndGenerate**
KB-specific Bedrock API: retrieves chunks AND generates the final answer in one call, with citations.

### Q19: **B. Bedrock Agent with two action groups**
Multi-step, multi-system orchestration is exactly what Agents are for.

### Q20: **C. Hierarchical (parent-child) chunking**
Small chunks for accurate retrieval; return the parent for richer context to the LLM.

### Q21: **A. Prompting < RAG < Fine-tuning < Continued pre-training**
Memorize this cost-and-invasiveness ladder. Module 6 expands on it.

### Q22: **B. Bypass model safety guidelines**
"DAN" and similar prompts try to get the model to ignore its alignment/safety training.

### Q23: **B. Guardrails + input/output filtering + least-privilege**
A defense-in-depth approach, never rely on a single layer.

### Q24: **B. Managed ingestion, chunking, embedding, retrieval**
You bring data sources; Bedrock handles the rest.

### Q25: **B. Amazon Neptune (Analytics, for GraphRAG)**
Combines vector search with knowledge-graph traversal for multi-hop questions.

### Q26: **B. Hybrid search (semantic + keyword)**
Exact identifiers are the classic semantic-search blind spot. Keyword + vector together fixes it.

---

## 📊 Score Yourself

- 25–26/26 → 🏆 RAG + prompting are reflex.
- 22–24/26 → ✅ Strong. Note your wrong ones and continue.
- 18–21/26 → ⚠️ Re-read the RAG + prompt-injection sections.
- <18 → 🔁 Re-do the whole module, this is the highest-leverage one for the exam.

---

## 🃏 Add To Your Flashcards

- 5 prompting techniques (zero/one/few-shot, CoT, ReAct) with use cases
- 5 parts of a prompt (system / instruction / context / input / output)
- Direct vs Indirect prompt injection + jailbreak + leaking
- RAG 2-phase architecture
- Vector store options on Bedrock KBs
- Bedrock Agents = action groups + KBs + Guardrails + FM
- Cost order: Prompting < RAG < Fine-tuning < Continued pre-training

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 6: Fine-Tuning & Customization](../Module-06-Fine-Tuning-Customization/Reading.md)
