# Module 7: Amazon Bedrock & GenAI Services 🌟

> **Why this module matters:** Generative AI is now ~25% of the MLS-C01 modelling domain (post 2024 blueprint refresh). Amazon **Bedrock** is AWS's managed foundation-model gateway — Claude, Llama, Mistral, Titan, Cohere — and AWS has built an entire production stack around it: **Knowledge Bases** for RAG, **Agents** for tool use, **Guardrails** for safety, **Bedrock fine-tuning** for customisation, **JumpStart** for SageMaker-hosted foundation models, **Amazon Q** as the application layer. The exam tests when to call Bedrock vs SageMaker, how RAG works, how to ground LLMs in private data, and how to add governance.

> **Prerequisites for this module.** Modules 1–6 of this course. Helpful background:
> - Familiarity with prompt engineering at the level of `system prompt + user prompt`
> - Conceptual understanding of vector embeddings (Module 3 introduced them; Module 4 with Object2Vec deepened it)
> - If you have done **07-AWS-AI-Practitioner Module 04 (AWS GenAI Stack)** or **AI-engineer-track courses 14-18**, you have seen many of these services

---

## 🍕 A Story: A Bank Replaces 3,000 Knowledge Articles With One LLM

Meet Carla. She runs ML at a top-10 US retail bank. The customer-service org has 11,000 reps, 3,000 internal knowledge-base articles, and an average new-rep ramp time of 6 months because of the sheer volume of policy. The training cost: ~$40M/year.

In 2023 the team built a chatbot using **Amazon Lex** to handle policy questions. It went 9 months in development with 1,200 intents and *still* covered only 38% of real-world questions. The bank wrote that off and started over.

In 2024 they rebuilt it using **Amazon Bedrock**:
- **Claude 3.5 Sonnet** as the conversational model
- **Bedrock Knowledge Bases** over the 3,000 articles, using **OpenSearch Serverless** as the vector store
- **Bedrock Agent** to call internal APIs for customer-account lookups
- **Bedrock Guardrails** for PII redaction and topic restriction
- **Amazon Q Business** as the rep-facing UI

The replacement took **3 engineers, 11 weeks**. Coverage of real-world questions hit **92%** on first launch. Rep ramp time fell from 6 months to 6 weeks. The bank now invests the savings in higher-tier human escalation, not in writing knowledge articles.

That is what this module teaches. The 2026 way to build a Q&A system on AWS is **not** Lex + custom intent code. It is **Bedrock + Knowledge Base + Agent + Guardrails**.

---

## 🌟 Amazon Bedrock — The Foundation-Model Gateway

Bedrock is AWS's serverless API for accessing leading foundation models from multiple providers — **without provisioning any compute or training anything**.

### Available model families (as of 2026)

| Provider | Family | Strengths |
|----------|--------|-----------|
| **Anthropic** | Claude 3.5 Sonnet, Claude 3.5 Haiku, Claude 3 Opus | Best general-purpose chat, coding, long context (200K+) |
| **Meta** | Llama 3 / 3.1 / 3.2 (8B, 70B, 405B) | Open-source weights; cost-effective; fine-tune in Bedrock |
| **Mistral** | Mistral Large, Mixtral 8x7B / 8x22B | Strong European LLMs |
| **Amazon Titan** | Titan Text Premier / Express / Lite, Titan Embeddings, Titan Image, Titan Multimodal Embeddings | AWS-native; HIPAA-eligible; cost-effective embeddings |
| **Amazon Nova** | Nova Pro / Lite / Micro / Canvas / Reel | AWS's 2024 in-house foundation-model line |
| **Cohere** | Command R+, Embed v3 | Enterprise text; multilingual embeddings |
| **AI21 Labs** | Jamba | Long-context hybrid SSM-transformer |
| **Stability AI** | SDXL, Stable Image Core | Image generation |

### Invocation modes

| Mode | API |
|------|-----|
| **Synchronous** | `InvokeModel` — single request/response |
| **Streaming** | `InvokeModelWithResponseStream` — token-by-token |
| **Converse API** (since 2024) | Unified messages-style API across models |
| **Batch Inference** | Async, large-volume, cheaper (~50% off) |

### Provisioned vs On-Demand vs Batch

| Mode | When |
|------|------|
| **On-Demand** | Pay-per-token; bursty workloads |
| **Provisioned Throughput** | Dedicated capacity (units); guaranteed throughput; cheaper at high volume |
| **Batch Inference** | Submit a job that runs asynchronously over many prompts; ~50% off On-Demand |

🎯 **Exam pattern.** *"Cost-optimise high-volume Bedrock inference."* → **Provisioned Throughput** (steady traffic) OR **Batch Inference** (offline / async OK).

---

## 📚 Bedrock Knowledge Bases — Managed RAG

**Retrieval-Augmented Generation (RAG)** = retrieve relevant document chunks → stuff into the prompt → LLM answers with that context. Bedrock Knowledge Bases (KBs) automate this.

### Components

```
┌──────────────────────────────────────────────────────────┐
│  1. Data sources                                         │
│     S3, Confluence, Salesforce, SharePoint, web crawler  │
└─────────────────────────┬────────────────────────────────┘
                          ↓
┌──────────────────────────────────────────────────────────┐
│  2. Chunking + embedding                                 │
│     Default: 300-token chunks, Titan Embeddings          │
│     Custom: chunk size, overlap, embedding model         │
└─────────────────────────┬────────────────────────────────┘
                          ↓
┌──────────────────────────────────────────────────────────┐
│  3. Vector store                                         │
│     OpenSearch Serverless (default), Aurora pgvector,    │
│     Pinecone, Redis Enterprise, MongoDB Atlas            │
└─────────────────────────┬────────────────────────────────┘
                          ↓
┌──────────────────────────────────────────────────────────┐
│  4. Retrieve + Generate                                  │
│     RetrieveAndGenerate API: top-k chunks → LLM prompt   │
└──────────────────────────────────────────────────────────┘
```

### Chunking strategies (since 2024)

| Strategy | Detail |
|----------|--------|
| **Default fixed-size** | 300 tokens with overlap |
| **Hierarchical chunking** | Parent + child chunks for better recall |
| **Semantic chunking** | Splits at semantic boundaries via small LLM |
| **No chunking** | Each document is one chunk (small docs only) |
| **Custom transformation** | Lambda-based custom chunker |

### Retrieve vs RetrieveAndGenerate

| API | What it returns |
|-----|-----------------|
| `Retrieve` | Top-k document chunks with scores |
| `RetrieveAndGenerate` | Top-k chunks → LLM call → final answer with citations |

🎯 **Exam pattern.** *"Build an enterprise Q&A bot grounded in 50,000 internal documents."* → **Bedrock KB + Claude or Llama + RetrieveAndGenerate**.

🎯 **Exam pattern.** *"Reduce LLM hallucination."* → **RAG (Knowledge Base)** OR **fine-tuning** (KB more common).

---

## 🛠️ Bedrock Agents — Tool Use & Multi-Step Reasoning

A **Bedrock Agent** orchestrates an LLM to use **tools** (APIs, Lambda functions) and **knowledge bases** to complete multi-step tasks.

### Components

| Concept | Role |
|---------|------|
| **Agent** | The orchestrator — has a base prompt and lists of tools and KBs |
| **Action Group** | A set of API operations the agent can call (via Lambda + OpenAPI / function schema) |
| **Knowledge Base** | Attached KB for retrieval |
| **Guardrail** | Optional safety policy applied to inputs and outputs |
| **Memory** | Short-term within a conversation; long-term across sessions |

### How it works

```
User asks → Agent reasons →
  Need info? Query Knowledge Base
  Need action? Call Action Group (Lambda)
  Need both? Multi-step with self-reflection
→ Compose final answer
```

🎯 **Exam pattern.** *"Build a customer-service AI that can look up an order in DynamoDB, calculate a refund, AND draft an email."* → **Bedrock Agent** with three Action Groups (lookup, refund, email).

🎯 **Exam pattern.** *"Choose between Lex and Bedrock Agent for a complex multi-step assistant."* → **Bedrock Agent** for generative, multi-step, with tools. **Lex** is for predetermined intents.

---

## 🛡️ Bedrock Guardrails — Safety & Governance

Guardrails apply safety policies to LLM inputs and outputs **independently of the model**.

| Guardrail category | What it does |
|--------------------|--------------|
| **Content filters** | Hate, insults, sexual content, violence, prompt injection |
| **Topic filters** | Block discussion of specified topics (e.g. "no medical advice") |
| **Word filters** | Block specific words / profanity / brand-protection terms |
| **PII filters** | Detect + redact PII (or block requests containing PII) |
| **Contextual grounding** | Verify model output is actually supported by source documents (anti-hallucination) |

🎯 **Exam pattern.** *"Block the LLM from giving medical advice while letting it answer billing questions."* → **Bedrock Guardrails with topic filter**.

🎯 **Exam pattern.** *"Ensure the model only states facts present in the retrieved KB."* → **Contextual grounding check** in Guardrails.

---

## 🎯 Bedrock Fine-Tuning & Customisation

For domain-specific adaptation when prompt + RAG isn't enough.

| Approach | When |
|----------|------|
| **Fine-tuning** | Supervised — train on prompt/response pairs (typically 100s-1000s of examples). Available for Llama, Titan, Cohere Command, Claude (limited). |
| **Continued pre-training** | Unsupervised — feed domain corpus (Titan only) |
| **Distillation** | Train a smaller model from a larger teacher's outputs (Bedrock-managed; 2024+) |

🎯 **Exam pattern.** *"Adapt an LLM to your company's writing style with 5,000 example pairs."* → **Fine-tuning** (or RAG if the examples are factual reference).

🚨 **Trap.** Fine-tuning is *not* the right answer for "ground in private documents" — that is **RAG**. Fine-tuning teaches *style and patterns*; RAG provides *facts*.

---

## 🚀 SageMaker JumpStart — Foundation Models On SageMaker

JumpStart hosts **300+ pre-built models** including foundation models you can deploy *to your own SageMaker endpoints*:

| Use | When |
|-----|------|
| Deploy Llama / Mistral / Falcon as SageMaker endpoint | When you need VPC isolation, custom networking, or to fine-tune deeply |
| Deploy task-specific models (DistilBERT, ViT) | Lighter-weight than LLMs |
| Pre-built solutions (e.g. fraud detection, churn) | Templates to start from |

### JumpStart vs Bedrock

| | JumpStart | Bedrock |
|-|-----------|---------|
| **Provisioning** | Your endpoint, your instance type, pay-per-hour | Serverless, pay-per-token (or provisioned units) |
| **Customisation** | Full control; can fine-tune in SageMaker | Limited fine-tuning per model |
| **Models** | Open-source + AWS (Hugging Face catalogue) | Curated frontier from providers (Claude, Llama, Mistral, Titan, ...) |
| **Best for** | Custom deployment, VPC isolation, deep customisation | Quick-start; minimum ops; frontier models |

🎯 **Exam pattern.** *"Run a Llama-3-70B model entirely within your VPC with no traffic to the internet."* → **SageMaker JumpStart Llama-3 endpoint in a VPC** (or Bedrock with VPC endpoints / PrivateLink).

---

## 🤖 Amazon Q — The Application Layer

Amazon Q is AWS's family of generative-AI assistants at the *application* layer (L7 in our Module-1 stack).

| Product | Audience | What it does |
|---------|----------|--------------|
| **Amazon Q Business** | Enterprise knowledge workers | Connects to 40+ sources (SharePoint, Confluence, Salesforce, ServiceNow, S3, etc.), provides RAG-style Q&A, summarisation, document generation; respects ACLs |
| **Amazon Q Developer** | Software engineers | Code generation, code transformation, security scanning; IDE plugin + CLI; replaces CodeWhisperer |
| **Amazon Q in QuickSight** | Business analysts | Natural-language EDA + dashboard generation |
| **Amazon Q in Connect** | Contact-centre agents | Real-time customer-service assistance |
| **Amazon Q in AWS Console** | Cloud engineers | "Why is my Lambda timing out?" type chat |

🎯 **Exam pattern.** *"Build a chat assistant for company employees over their corporate docs."* → **Amazon Q Business** (uses Bedrock + KB under the hood; turnkey product).

🎯 **Exam pattern.** *"Generate Python unit tests from the IDE."* → **Amazon Q Developer**.

🎯 **Exam pattern.** *"Let a sales analyst ask plain-English questions about their sales dashboard."* → **Amazon Q in QuickSight**.

---

## 🎛️ Prompt Engineering For Bedrock (Brief)

| Technique | When |
|-----------|------|
| **Zero-shot** | Quick prototyping; capable models like Claude often succeed |
| **Few-shot (in-context learning)** | Show 2-5 examples to control output format |
| **Chain-of-thought** | "Think step by step" — helps reasoning tasks |
| **Role / system prompt** | Set the assistant's role, tone, constraints |
| **Structured output (JSON mode / tool use)** | Force JSON or function-call format |
| **Self-consistency** | Sample multiple times and pick majority |
| **Prompt caching** | Cache the system prompt portion to cut cost (Bedrock supports this) |

🎯 **Exam pattern.** *"Reduce Bedrock cost for high-volume requests sharing a common system prompt."* → **Bedrock prompt caching** + **Provisioned Throughput**.

🎯 **Exam pattern.** *"Get the model to output structured JSON every time."* → Use **tool use / function calling** OR **JSON-mode prompting** with strict format.

---

## 🗂️ Vector Embedding Choices On AWS

For RAG, you need an **embedding model** and a **vector store**.

### Embedding models

| Model | Provider | Dimensions |
|-------|----------|------------|
| **Titan Embeddings v2** | Amazon | 1024 (configurable to 256, 512) |
| **Titan Multimodal Embeddings** | Amazon | 1024 |
| **Cohere Embed English v3** | Cohere | 1024 |
| **Cohere Embed Multilingual v3** | Cohere | 1024 |

### Vector stores

| Store | Detail |
|-------|--------|
| **Amazon OpenSearch Serverless** | Default KB store; auto-scale, pay-per-OCU |
| **Aurora PostgreSQL + pgvector** | Best if you already use Aurora |
| **Pinecone** | Third-party, hosted |
| **Redis Enterprise Cloud** | Third-party |
| **MongoDB Atlas** | Third-party |
| **DynamoDB with vector search (preview)** | Newest option |

🎯 **Exam pattern.** *"Set up a vector store for Bedrock KB with no infrastructure to manage."* → **OpenSearch Serverless** (KB default).

---

## 📖 Case Study — Stripe's Internal RAG With Bedrock + Claude

**Situation.** Stripe has ~7,000 engineers across 30+ product lines. Internal documentation is split across Notion, GitHub READMEs, Slack channels, and ~12,000 wiki pages. Engineers spend ~30 minutes/day searching for documentation. Total cost: ~$15M/year of senior engineer time.

**Architecture (publicly described in 2024 talks).**
- **Data sources:** Notion, GitHub, Slack archives → S3 normalised form
- **Embedding:** Titan Embeddings v2 (and earlier OpenAI ada-002 for some)
- **Vector store:** Pinecone (predates OpenSearch Serverless adoption)
- **LLM:** Claude 3 Opus initially; Claude 3.5 Sonnet for cost-quality balance
- **RAG pattern:** Custom retrieval pipeline mirroring Bedrock KB design
- **Frontend:** Slack bot + IDE plugin (similar to Amazon Q Developer)
- **Guardrails:** Custom topic and PII filters (similar to Bedrock Guardrails)

**Outcome.** Daily search time fell 40%. Question resolution rate hit 88%. Stripe reports the system saves "several thousand engineer-hours per week" — payback in months.

**Lesson for the exam.** Today, this entire stack can be replaced with: **Bedrock + Knowledge Bases (OpenSearch Serverless) + Guardrails + Amazon Q Developer in IDE**. If you understand the *pattern*, the AWS service equivalents are obvious.

---

## ⚠️ Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "Fine-tuning is always better than RAG" | RAG is usually cheaper, simpler, and easier to update. Fine-tune for style / behaviour; RAG for facts. |
| "Bedrock and SageMaker are interchangeable" | Bedrock = managed serverless foundation models. SageMaker = full ML platform including JumpStart for foundation-model hosting. |
| "Knowledge Bases require a custom vector DB" | OpenSearch Serverless is the default; no infrastructure to set up. |
| "Agents replace Lex" | For multi-step / generative tasks, yes. For tightly bounded intent-based bots, Lex can still be cheaper. |
| "All Bedrock models support fine-tuning" | Only some (Llama, Titan, Cohere Command; Claude is limited). Check current docs. |
| "Guardrails are a Bedrock model" | They are policy filters applied *around* any model. |
| "Prompt caching is automatic" | You must opt in and structure your prompt to use it. |
| "Amazon Q is its own LLM" | Q sits on top of Bedrock models. |
| "Larger model is always better" | Larger = slower + more expensive. Right-size for the task. Claude Haiku may beat Claude Opus on simple tasks at 1/10 the cost. |
| "Embeddings are interchangeable" | Different models produce different vector spaces. Once you've indexed with Titan, you cannot mix-and-match with Cohere at query time. |

---

## 🚨 Top Exam Traps (Module 7 Themes)

1. **"Reduce hallucination"** → **RAG (Bedrock KB)** is usually the answer, not fine-tuning.
2. **"Fine-tune for company writing style"** → **Bedrock fine-tuning** (style/format) — KB won't help.
3. **"Multi-step task with API calls"** → **Bedrock Agent** (action groups).
4. **"Block specific topics from the model"** → **Bedrock Guardrails topic filter**.
5. **"Ensure output is grounded in retrieved docs"** → **Guardrails contextual grounding**.
6. **"Enterprise Q&A bot over 40+ data sources"** → **Amazon Q Business** (or Bedrock KB if you want custom).
7. **"Code assistance for developers"** → **Amazon Q Developer**.
8. **"Run a foundation model in your VPC"** → **SageMaker JumpStart in VPC** OR **Bedrock with PrivateLink**.
9. **"Cost-optimise high-volume Bedrock"** → **Provisioned Throughput** (steady) or **Batch Inference** (async).
10. **"Reduce repeated system-prompt cost"** → **Prompt caching**.
11. **"Default vector store for KB"** → **OpenSearch Serverless**.

---

## 🎓 Key Terms To Know

| Term | Definition |
|------|------------|
| **Foundation model (FM)** | Large pre-trained model adaptable to many tasks |
| **Bedrock** | AWS's managed FM gateway |
| **Knowledge Base (Bedrock)** | Managed RAG pipeline (data → chunks → embeddings → vector store → retrieve) |
| **RAG** | Retrieval-Augmented Generation |
| **Agent (Bedrock)** | LLM orchestrator that uses tools (Lambda) + KBs |
| **Action Group** | Set of API operations an agent can call |
| **Guardrail** | Safety / governance policy applied to inputs/outputs |
| **Contextual grounding** | Output-verification check that model says only what KB supports |
| **Fine-tuning** | Supervised adaptation on prompt/response pairs |
| **Continued pre-training** | Unsupervised adaptation on domain corpus |
| **Distillation** | Smaller "student" model trained from larger teacher |
| **JumpStart** | SageMaker library of pre-trained models incl. foundation models |
| **Amazon Q Business / Developer / QuickSight** | Generative AI applications layered on Bedrock |
| **Titan Embeddings** | AWS embedding model |
| **OpenSearch Serverless** | AWS managed search; default KB vector store |
| **Provisioned Throughput** | Dedicated Bedrock capacity for predictable workloads |
| **Batch Inference** | Async cheap Bedrock |
| **Prompt caching** | Cache the system-prompt prefix to cut cost |

---

## 💬 Discussion — Socratic Prompts

1. **"RAG or fine-tune?"** A bank has 3,000 policy articles and wants an LLM to answer policy questions. RAG handles fact retrieval; fine-tuning teaches style. Argue for the right hybrid.
2. **The cost-quality LLM trade-off.** Claude Opus vs Claude Sonnet vs Haiku — when does the smaller, cheaper model *win* on a real task? Design a benchmark.
3. **The hallucination tax.** A regulator says "the model must NEVER invent a policy that isn't in the source documents." Contextual grounding catches some hallucinations. What other layers do you add?
4. **Bedrock vs JumpStart.** Argue for each in a regulated environment that wants its data to never leave a VPC.
5. **Amazon Q Business positioning.** Q Business is essentially "Bedrock + KB + Guardrails + UI" pre-packaged. When does a custom Bedrock build beat Q Business?

---

## ➡️ Where This Leads

> **Where this leads.**
> - **Inside this course:** Module 08 evaluates LLMs (BLEU, ROUGE, MMLU, HumanEval, RAG-eval); Module 09 deploys + monitors them.
> - **Cross-course:** `07-AWS-AI-Practitioner` Module 04 has a lighter version of this material. AI-engineer-track courses (14-18) go even deeper on prompt engineering.
> - **Practice:** Practice Exam 1 has 4 questions, Practice Exam 2 has 6 questions, Final Mock has 9 questions on this material.
> - **Real world:** In the Bedrock console, run *Chat playground* against Claude 3.5 Sonnet; build a tiny KB over a 10-PDF folder in S3; both free-tier-friendly to try.

---

## ✅ Module 7 Summary

You now know:
- 🌟 **Bedrock** as the managed FM gateway with multiple providers (Claude, Llama, Mistral, Titan, Nova, Cohere)
- 📚 **Knowledge Bases** — managed RAG with default OpenSearch Serverless vector store
- 🛠️ **Agents** — multi-step tool-using assistants with action groups
- 🛡️ **Guardrails** — content / topic / PII / contextual-grounding filters
- 🎯 **Fine-tuning vs RAG vs continued pre-training** — when each
- 🚀 **SageMaker JumpStart** — host foundation models in your own SageMaker endpoints / VPC
- 🤖 **Amazon Q** — Business / Developer / QuickSight / Connect application layer
- 🎛️ **Prompt engineering** — zero/few-shot, CoT, JSON mode, prompt caching
- 🗂️ **Embeddings** (Titan, Cohere) + **vector stores** (OpenSearch Serverless, Aurora pgvector, Pinecone)
- 📖 The **Stripe internal RAG** reference architecture

**Next:**
1. 🎥 [`Videos.md`](./Videos.md)
2. ✏️ [`Quiz.md`](./Quiz.md)
3. 📋 [`Cheat-Sheet.md`](./Cheat-Sheet.md)
4. ➡️ [Module 8: Evaluation, Tuning & Bias](../Module-08-Evaluation-Tuning-Bias/Reading.md)

---

## 📚 Further Sources

**AWS official**
- 📖 **Amazon Bedrock User Guide** — `docs.aws.amazon.com/bedrock/`
- 📖 **Knowledge Bases for Amazon Bedrock** — `docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base.html`
- 📖 **Agents for Amazon Bedrock** — `docs.aws.amazon.com/bedrock/latest/userguide/agents.html`
- 📖 **Amazon Q Business Admin Guide** — `docs.aws.amazon.com/amazonq/latest/qbusiness-ug/`

**Academic foundations**
- 📄 **Lewis et al. (2020).** *Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks.* NeurIPS — the foundational RAG paper
- 📄 **Brown et al. (2020).** *Language Models are Few-Shot Learners.* — GPT-3, the foundation-model paradigm
- 📄 **Wei et al. (2022).** *Chain-of-Thought Prompting Elicits Reasoning in LLMs.* NeurIPS — CoT prompting
- 📄 **Touvron et al. (2023).** *Llama 2: Open Foundation and Fine-Tuned Chat Models.* — Llama 2 paper

**Industry**
- 📰 **Anthropic's Claude documentation** — prompt engineering best practices
- 📰 **Stripe's RAG engineering posts** — production patterns
- 📰 **Latent Space podcast** — applied GenAI engineering
