# ✏️ Module 8 Quiz: Build GenAI Apps

> **Instructions:** Answer all 26 questions WITHOUT looking at the reading.
> Then check your answers below. Aim for 22/26 minimum.

---

## Questions

### Q1. Azure AI Studio has been renamed to:
A. Azure AI Workshop
B. Azure AI Foundry
C. Azure AI Hub
D. Azure GenAI Studio

---

### Q2. In Foundry, the resource hierarchy is:
A. Project → Hub → Subscription
B. Hub → Project → Connections / Deployments / Flows / Evals
C. Subscription → Workspace → Project
D. Account → Region → Project

---

### Q3. A Foundry Connection represents:
A. A user account
B. A reusable, RBAC-secured handle to an external service (AOAI, AI Search, Storage)
C. A network connection between regions
D. A VNet peering

---

### Q4. Models-as-a-Service (MaaS) deployments in the Model catalog:
A. Run on compute you manage
B. Are serverless, pay-per-token
C. Are only Azure OpenAI models
D. Require GPU quota in your subscription

---

### Q5. Models-as-a-Platform (MaaP):
A. Are serverless
B. Run on managed compute you scale
C. Are deprecated
D. Are only for embeddings

---

### Q6. Prompt Flow is:
A. A code-only LLM SDK
B. A visual DAG orchestrator for LLM apps in Foundry
C. The same as Semantic Kernel
D. An indexer for AI Search

---

### Q7. A prompt variant in Prompt Flow lets you:
A. Train a new model
B. Run multiple prompt versions in parallel for A/B comparison
C. Configure content filters
D. Translate flows

---

### Q8. Built-in evaluation metrics in Foundry include all EXCEPT:
A. Groundedness
B. Relevance
C. Coherence
D. Loss

---

### Q9. Which evaluation metric scores whether a response sticks to the source documents?
A. Coherence
B. Fluency
C. Groundedness
D. Similarity

---

### Q10. Foundry's Agent Service provides built-in tools including:
A. File Search, Code Interpreter, Function Calling
B. Speech-to-text only
C. Custom Vision training
D. Cosmos DB queries

---

### Q11. Agent Service threads:
A. Are stateless single-turn calls
B. Are stateful conversations across multiple runs and messages
C. Replace Bot Service
D. Are deprecated

---

### Q12. Which line completes this Python snippet to start an Agent Service run?
```python
from azure.ai.projects import AIProjectClient
project = AIProjectClient.from_connection_string(cs, credential=DefaultAzureCredential())
thread = project.agents.create_thread()
project.agents.create_message(thread.id, role="user", content="...")
______
```
A. `project.agents.create_and_process_run(thread.id, agent.id)`
B. `project.openai.chat.create(...)`
C. `project.send_message(thread)`
D. `project.run(thread.id)`

---

### Q13. Semantic Kernel is:
A. A visual designer
B. An open-source orchestration SDK (C#/Python/Java) for LLM + plugins
C. A vector database
D. The new name for Bot Framework

---

### Q14. A Semantic Kernel plugin can be:
A. Only a Python function
B. Only a prompt template
C. A native function OR a prompt-based function
D. A SQL query

---

### Q15. The RAG retrieval pattern Microsoft recommends as "gold standard" in Azure AI Search is:
A. Pure keyword search
B. Pure vector search
C. Hybrid (keyword + vector) + semantic re-ranking
D. SQL fulltext

---

### Q16. To force a chat to refuse answering outside retrieved sources in Azure OpenAI On Your Data, set:
A. `temperature` to 0
B. `in_scope: true`
C. `mode: strict`
D. `restricted: yes`

---

### Q17. When evaluating prompt variants, the recommended approach is:
A. Eyeball outputs informally
B. Run them through Foundry Evaluation with the same dataset and compare metric scores
C. Pick the longest output
D. Run them against random user traffic

---

### Q18. To compare Llama 3 with GPT-4o on your benchmark dataset, the BEST Foundry feature is:
A. Prompt Flow
B. Model catalog benchmark/compare
C. Semantic Kernel
D. Application Insights

---

### Q19. Which best describes a chunk size + overlap design choice for RAG?
A. Smaller chunks improve retrieval precision; overlap reduces info splits at boundaries
B. Larger chunks always work better
C. Chunk size is irrelevant
D. Overlap should be 0 for cost reasons

---

### Q20. To monitor a deployed Foundry app's drift, you:
A. Subscribe to Azure Updates
B. Use Foundry monitoring with eval dataset as baseline; route telemetry to App Insights
C. Re-train daily
D. Restart the deployment weekly

---

### Q21. ReAct, Plan-and-Execute, and Reflection are:
A. SDK names
B. Agent reasoning patterns
C. Pricing tiers
D. Content filter modes

---

### Q22. **Case study (2 parts).** Maya wants to ship a help bot that answers from her PDF library, escalates to a human when confidence is low, and supports both web and Teams.

Part A — For retrieval over PDFs with citations and grounded answers, she should use:
A. Custom Vision + Bot Service
B. Azure AI Search (hybrid + semantic) + Azure OpenAI On Your Data
C. Azure ML + Cosmos DB
D. Translator + Question Answering

Part B — To deploy the same logic to web and Teams without rewriting:
A. Build two separate bots
B. Build one Bot Framework bot, connect both Web Chat and Teams channels via Azure AI Bot Service
C. Use Direct Line only
D. Skip Bot Service

---

### Q23. A "tool" in Agent Service or chat completions is invoked when:
A. The model returns a function call (name + JSON arguments) which your code executes
B. The user manually triggers it
C. The Bot Framework adapter runs it
D. The Speech SDK calls it

---

### Q24. The Foundry Model catalog will list:
A. Only Microsoft models
B. Azure OpenAI + Llama, Mistral, Cohere, NVIDIA, Hugging Face, and others
C. Only proprietary models
D. Only OSS models

---

### Q25. Which is TRUE about Prompt Flow vs Semantic Kernel?
A. They are the same thing
B. Prompt Flow is a visual/declarative DAG inside Foundry; SK is a code-first SDK you embed in your app
C. SK only works on Azure
D. Prompt Flow is deprecated

---

### Q26. Best practice for production GenAI auth from code running in Azure:
A. Hardcoded subscription key
B. Managed identity + RBAC role assignments on Azure OpenAI / AI Search
C. Anonymous
D. Shared key in repo

---

## 🎯 Answers + Explanations

### Q1: **B. Azure AI Foundry**
Rebranded in 2024.

### Q2: **B. Hub → Project → Connections / Deployments / Flows / Evals**
Hub holds shared infra; Project holds the app workspace.

### Q3: **B. Reusable, RBAC-secured handle**
Avoid hardcoding endpoints + keys.

### Q4: **B. Serverless, pay-per-token**
No infra to manage. Distinct from MaaP (managed compute).

### Q5: **B. Run on managed compute you scale**
You choose VM SKU + scale; pay per compute-hour.

### Q6: **B. Visual DAG orchestrator inside Foundry**
Nodes, connections, variants, deployments.

### Q7: **B. A/B comparison of prompt versions**
Run them in parallel during evaluation.

### Q8: **D. Loss**
Built-in: Groundedness, Relevance, Coherence, Fluency, Similarity, Safety, plus custom. "Loss" is a training metric, not eval.

### Q9: **C. Groundedness**
Does the answer stick to the source?

### Q10: **A. File Search, Code Interpreter, Function Calling**
Plus Browser (preview).

### Q11: **B. Stateful conversations across runs and messages**
Threads accumulate history.

### Q12: **A. `project.agents.create_and_process_run(thread.id, agent.id)`**
Standard Agent Service Python pattern.

### Q13: **B. Open-source orchestration SDK**
C#/Python/Java; portable across providers.

### Q14: **C. Native or prompt-based**
SK plugins/functions can be both.

### Q15: **C. Hybrid + semantic re-ranking**
Microsoft's documented gold standard for RAG.

### Q16: **B. `in_scope: true`**
Forces grounded-only answers in On Your Data.

### Q17: **B. Foundry Evaluation with the same dataset and compare metric scores**
Repeatable, defensible.

### Q18: **B. Model catalog benchmark/compare**
The catalog has comparison UI.

### Q19: **A. Smaller chunks improve precision; overlap avoids boundary cuts**
Standard chunking wisdom.

### Q20: **B. Foundry monitoring + eval baseline → App Insights**
Built-in for deployed flows + agents.

### Q21: **B. Agent reasoning patterns**
ReAct = reason+act loop. Plan-and-Execute = plan then execute. Reflection = self-critique.

### Q22A: **B. Azure AI Search (hybrid + semantic) + Azure OpenAI On Your Data**
The canonical RAG stack with citations.

### Q22B: **B. One Bot Framework bot + Web Chat AND Teams channels in Azure AI Bot Service**
Write once; channels handle conversion.

### Q23: **A. Model returns a function call (name + JSON args), your code executes**
Function calling foundation.

### Q24: **B. Azure OpenAI + partner (Llama, Mistral, Cohere, NVIDIA, Hugging Face, etc.)**
Catalog is multi-provider.

### Q25: **B. Prompt Flow visual / SK code-first**
Both orchestrate LLMs but at different layers.

### Q26: **B. Managed identity + RBAC**
No secrets in code; auditable identity.

---

## 📊 Score Yourself

- 25–26/26 → 🏆 Ready for Practice Exam 2 + Final Mock
- 22–24/26 → ✅ Strong
- 18–21/26 → ⚠️ Re-read Agent Service + Prompt Flow sections
- <18/26 → 🔁 Re-read Reading.md; re-quiz tomorrow

---

## 🃏 Add To Your Flashcards

- AI Studio → Foundry rename
- Hub vs Project structure
- MaaS vs MaaP
- Prompt Flow vs Semantic Kernel
- Agent Service tools (file_search, code_interpreter, function calling)
- Threads / Runs / Messages
- RAG quality knobs (chunking, overlap, top-k, hybrid+semantic)
- Evaluation metrics list
- In_scope + citations
- Bot Service one bot many channels

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Practice Exam 2](../Practice-Exams/Practice-Exam-2.md), then [Final Mock](../Practice-Exams/Final-Mock-Exam.md)
