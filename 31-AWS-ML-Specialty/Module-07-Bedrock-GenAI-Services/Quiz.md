# ✏️ Module 7 Quiz: Bedrock & GenAI

> 24 questions. Aim 20+/24. 35 min.

---

## Questions

### Q1. Which AWS service is BEST described as a "managed gateway for multiple foundation models" with serverless invocation? *(Remember)*
A. SageMaker JumpStart
B. Amazon Bedrock
C. Amazon Comprehend
D. Amazon Forecast

---

### Q2. To ground an LLM's answers in a company's 50,000 internal documents and reduce hallucination, the BEST AWS approach is: *(Apply)*
A. Fine-tune the model on all 50,000 documents
B. Build a Bedrock Knowledge Base over the documents and use `RetrieveAndGenerate`
C. Use Amazon Polly
D. Use Amazon Lex with 50,000 intents

---

### Q3. To build an assistant that can both answer policy questions AND call internal APIs to perform actions, the BEST is: *(Apply)*
A. Amazon Lex with multiple intents
B. Amazon Bedrock Agent with action groups + Knowledge Base
C. Amazon Comprehend
D. SageMaker BlazingText

---

### Q4. The PRIMARY use of Bedrock Guardrails is: *(Understand)*
A. Train models
B. Apply content / topic / PII / grounding filters on inputs and outputs of a Bedrock LLM
C. Encrypt data at rest
D. Manage IAM roles

---

### Q5. To teach an LLM to consistently use your company's writing style with ~5,000 prompt/response examples: *(Apply)*
A. RAG with a Knowledge Base
B. Bedrock fine-tuning (supported on Llama, Titan, Cohere, etc.)
C. Increase model temperature
D. Use Lex

---

### Q6. The DEFAULT vector store for Amazon Bedrock Knowledge Bases is: *(Remember)*
A. Amazon Aurora pgvector
B. Pinecone
C. Amazon OpenSearch Serverless
D. DynamoDB

---

### Q7. To cost-optimise Bedrock for very large offline / batch workloads with no real-time requirement: *(Apply)*
A. On-Demand (per-token)
B. Provisioned Throughput
C. Batch Inference (~50% cheaper than On-Demand)
D. Use Lex instead

---

### Q8. Amazon Q Business is BEST described as: *(Understand)*
A. A custom Anthropic API
B. An enterprise generative-AI assistant with 40+ data-source connectors, ACL-aware, built on Bedrock
C. A SageMaker training tool
D. A vector database

---

### Q9. To deploy Llama-3-70B *inside* your own VPC with full network isolation: *(Apply)*
A. Amazon Bedrock with VPC endpoints OR SageMaker JumpStart Llama-3 endpoint in your VPC
B. Amazon Lex
C. Amazon Comprehend
D. AWS Glue

---

### Q10. The Bedrock guardrail feature that verifies the model only states facts present in retrieved documents is: *(Remember)*
A. Topic filter
B. PII filter
C. Contextual grounding check
D. Word filter

---

### Q11. The PRIMARY reason to use Provisioned Throughput in Bedrock is: *(Understand)*
A. Encrypt model weights
B. Guarantee dedicated capacity (units) for steady traffic at lower per-token cost
C. Train new models
D. Lower memory usage

---

### Q12. To get the LLM to output strictly-formatted JSON every time: *(Apply)*
A. Use higher temperature
B. Use tool use / function calling OR explicit JSON-mode prompting with strict schema
C. Use Lex
D. Use Polly

---

### Q13. RAG is GENERALLY preferred over fine-tuning when: *(Analyze)*
A. You want to teach the model a new persona / writing style
B. The knowledge changes frequently and must be sourced from documents
C. You want faster inference
D. You want fewer compute resources

---

### Q14. To enable an Amazon Bedrock Agent to fetch order data from DynamoDB: *(Apply)*
A. Define an Action Group with a Lambda function that calls DynamoDB
B. Embed DynamoDB into the prompt
C. Use Polly
D. Use Athena

---

### Q15. Amazon Q Developer is BEST for: *(Apply)*
A. Replacing the AWS Console
B. Generating code, transforming code, and scanning code in the IDE (formerly CodeWhisperer)
C. Training new LLMs
D. ETL on Parquet files

---

### Q16. To cut Bedrock cost when many requests share a long common system prompt: *(Apply)*
A. Bedrock prompt caching
B. Switch to Lex
C. Use SageMaker
D. Use S3 versioning

---

### Q17. The PRIMARY reason Bedrock Embeddings (Titan / Cohere) are NOT interchangeable post-indexing is: *(Understand)*
A. They use different IAM
B. Each embedding model produces a different vector space; you cannot mix at query time
C. They are encrypted differently
D. They have different pricing

---

### Q18. To build an internal chat assistant whose responses are limited to a company's HR policies (no medical advice, no profanity): *(Apply)*
A. Bedrock + Knowledge Base over HR docs + Guardrails (topic + word filters)
B. SageMaker Linear Learner
C. Amazon Translate
D. Polly only

---

### Q19. To build a Slack-bot Q&A assistant connected to Confluence and SharePoint, with the LEAST custom code: *(Apply)*
A. Amazon Q Business (turnkey product with connectors)
B. Custom Bedrock + KB build
C. Lex with Lambda
D. SageMaker JumpStart

---

### Q20. When Bedrock Agents need *short-term* memory within a conversation, they use: *(Remember)*
A. ElastiCache
B. The agent's built-in conversation memory
C. SQS
D. DynamoDB always

---

### Q21. The BEST Bedrock model for a cost-sensitive simple summarisation task on short text is likely: *(Analyze)*
A. Claude 3 Opus (largest)
B. Claude 3.5 Haiku or Titan Text Lite (smaller, cheaper)
C. Llama 3.1 405B
D. Mistral Large

---

### Q22. The Bedrock Converse API's main advantage is: *(Understand)*
A. Higher accuracy
B. A unified, messages-style API that works across providers (Claude, Llama, Titan, Mistral, ...)
C. Free tokens
D. Vector search

---

### Q23. To enrich Bedrock responses with citations that point back to source document chunks: *(Apply)*
A. Use `RetrieveAndGenerate` with a Knowledge Base, citations returned per chunk used
B. Add `cite: true` to the prompt
C. Use Polly
D. Use Amazon Forecast

---

### Q24. Continued pre-training in Bedrock (currently Titan only) is BEST for: *(Understand)*
A. Adapt a model to a large unsupervised domain corpus (legal, medical, etc.)
B. Train from scratch
C. Replace RAG
D. Reduce token cost

---

## 🎯 Answers + Explanations

### Q1: **B. Amazon Bedrock**
Managed FM gateway; serverless invocation; multiple providers.

### Q2: **B. Bedrock Knowledge Base + RetrieveAndGenerate**
RAG is the canonical anti-hallucination pattern. Fine-tuning is for style/format.

### Q3: **B. Bedrock Agent with action groups + KB**
Agent orchestrates tools + KB for multi-step tasks. Lex is intent-based, harder to scale to open-ended.

### Q4: **B. Content/topic/PII/grounding filters**
Guardrails are policy layers applied around any Bedrock LLM.

### Q5: **B. Bedrock fine-tuning**
Style/format is exactly what fine-tuning learns from prompt/response pairs.

### Q6: **C. OpenSearch Serverless**
The default KB vector store; auto-scaling, no infra to manage.

### Q7: **C. Batch Inference (~50% cheaper)**
Async batches at half the per-token cost; ideal for offline.

### Q8: **B. Enterprise GenAI with 40+ connectors, ACL-aware, on Bedrock**
The turnkey enterprise product.

### Q9: **A. Bedrock with VPC endpoints OR JumpStart in your VPC**
Both options keep traffic off the public internet. JumpStart gives more deployment control.

### Q10: **C. Contextual grounding check**
Validates that output statements are supported by retrieved source content.

### Q11: **B. Dedicated capacity for steady traffic at lower per-token cost**
Trade flexibility for guaranteed throughput and lower unit cost at high volume.

### Q12: **B. Tool use / function calling OR strict JSON-mode prompting**
Both reliably produce structured output. Higher temperature would do the opposite.

### Q13: **B. Knowledge changes frequently from documents**
RAG retrieves at query time so updates propagate immediately. Fine-tuning is for style/format.

### Q14: **A. Action Group with Lambda calling DynamoDB**
Standard agent pattern, tools as Lambda functions with OpenAPI / function schemas.

### Q15: **B. Generate / transform / scan code in IDE**
Q Developer (replaces CodeWhisperer) is the developer assistant.

### Q16: **A. Bedrock prompt caching**
Caches the system-prompt prefix across calls; cuts per-call cost.

### Q17: **B. Different vector spaces**
Titan-indexed vectors cannot be queried by Cohere embeddings; the spaces are incompatible.

### Q18: **A. Bedrock + KB + Guardrails**
KB grounds in HR docs; Guardrails block medical topics and profanity.

### Q19: **A. Amazon Q Business**
Pre-packaged enterprise assistant with connectors; lowest custom code.

### Q20: **B. Agent's built-in conversation memory**
Bedrock Agents have short-term (in-session) and long-term (across sessions) memory.

### Q21: **B. Claude 3.5 Haiku or Titan Text Lite**
Right-sized for simple tasks; large frontier models are wasteful here.

### Q22: **B. Unified messages-style API across providers**
Converse API normalises the interface so you can swap models with minimal code change.

### Q23: **A. `RetrieveAndGenerate` with KB returns citations**
Each retrieved chunk used to ground the answer is cited.

### Q24: **A. Adapt to a large unsupervised domain corpus**
Continued pre-training is unsupervised; consumes corpus, not prompt/response pairs.

---

## 📊 Score

- 22-24 → 🏆 Mastery
- 19-21 → ✅ Solid
- 15-18 → ⚠️ Re-read Bedrock + KB + Agent sections
- <15 → 🔁 Restart Module 7

---

## 🃏 Add to flashcards

- Bedrock model families (Claude / Llama / Mistral / Titan / Nova / Cohere)
- KB pipeline (data → chunk → embed → vector store → retrieve)
- Agent components (action groups, KB, guardrails, memory)
- RAG vs fine-tune vs continued pre-training
- Bedrock cost modes: On-Demand vs Provisioned Throughput vs Batch
- Guardrail types: content / topic / word / PII / contextual grounding
- Amazon Q variants (Business / Developer / QuickSight / Connect)
- JumpStart vs Bedrock, when each
- Default vector store = OpenSearch Serverless

➡️ [Cheat-Sheet.md](./Cheat-Sheet.md) → [Module 8](../Module-08-Evaluation-Tuning-Bias/Reading.md)
