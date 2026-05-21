# Module 4: The AWS GenAI Stack 🏗️

> **Why this module matters:** This is the most service-dense module of the course and where Domains 2 + 3 collide. The exam constantly says *"a customer wants X — which AWS service?"* Get Bedrock, Amazon Q, JumpStart, and PartyRock cleanly separated in your head and you'll bank easy points.

---

## 🍕 A Story: Riya Opens a Bigger Restaurant

Riya's coffee shop did well, so she opens a full restaurant. Now she has *four* kinds of AI work to do:

1. She wants a **customer-facing chatbot** that helps diners find the right menu item, in any language. → She needs **a foundation model behind an API**.
2. Her **back-office staff** wants to ask plain-English questions of all their internal docs ("How many oat-milk cappuccinos did we sell last March?"). → She needs **an enterprise generative-AI assistant**.
3. Her **kitchen developers** want help writing the POS system code. → She needs **an AI coding assistant**.
4. A **food blogger marketing intern** wants to *experiment* with AI without touching code. → She needs **a sandbox**.

Each of these is solved by a different AWS service:

| Riya's need | Service |
|-------------|---------|
| Customer-facing AI app powered by a foundation model | **Amazon Bedrock** |
| Internal AI assistant over company docs | **Amazon Q Business** |
| AI coding assistant in the IDE | **Amazon Q Developer** |
| No-code sandbox to play with prompts | **PartyRock** |

That's the whole layout. Now let's pry each one open.

---

## 🏰 Amazon Bedrock — The Star Of The Show

**Amazon Bedrock** is a **fully managed service** that gives you access to **foundation models from multiple providers** through a **single API**. No GPU provisioning, no model hosting, no infrastructure — you call an API, you get tokens back.

### What you get from Bedrock

- A **catalog of foundation models** (text, image, embedding, multimodal)
- **Serverless inference** — no servers to manage, pay per token
- **Customization** — fine-tune or do continued pre-training on your data (Module 6)
- **Knowledge Bases** for RAG (Module 5)
- **Agents** that plan and call your APIs (Module 5)
- **Guardrails** to block unsafe inputs/outputs (Module 7)
- **Provisioned Throughput** — reserve dedicated capacity for steady high-volume workloads
- **Model Evaluation** — built-in human and automated eval (Module 6)
- **Data stays in your account / Region**; AWS does not use it to train base models

🔥 **Bedrock's superpower:** Switch model providers by changing one API parameter. Same SDK, same auth, same observability.

### The Bedrock Foundation Model Catalog (as of 2024–2025)

> Memorize the *providers* and what *kinds of models* each offers. Exact model versions evolve constantly — what matters is which providers live on Bedrock vs not.

| Provider | Model family | Modality | Best for |
|----------|--------------|----------|----------|
| **Anthropic** | Claude (e.g., Claude 3 / 3.5 family — Haiku, Sonnet, Opus) | Text + vision | Reasoning, long-context tasks, writing, coding |
| **Amazon** | **Nova** family — Nova Micro, Lite, Pro, Premier (text); **Nova Canvas** (image); **Nova Reel** (video) | Text, vision, image-gen, video-gen | Amazon's own 2024 frontier family; broad capability |
| **Amazon** | **Titan** family — Titan Text (G1, Express, Lite), Titan Text Embeddings, Titan Image Generator | Text, embeddings, image-gen | Cost-efficient, AWS-native; embeddings widely used for RAG |
| **Meta** | **Llama** (Llama 3 / 3.1 / 3.2 / 3.3 — varying sizes) | Text (some vision) | Open-weights heritage, strong text quality |
| **Mistral AI** | Mistral 7B, Mixtral 8x7B / 8x22B, Mistral Large, Codestral | Text | Strong reasoning at lower cost; good multilingual |
| **Cohere** | Command R, Command R+, Embed, Rerank | Text + embeddings | RAG-optimized; embeddings + rerank widely used |
| **Stability AI** | Stable Diffusion (SD3, SDXL) | Image generation | Text-to-image |
| **AI21 Labs** | Jamba family | Text | Long-context efficiency |

🎯 **Trap on the exam:** OpenAI's GPT models and Google's Gemini are **NOT** on Bedrock. If you see "GPT-4 on Bedrock" as an answer, it's wrong.

### Bedrock pricing modes

| Mode | What it is | When to use |
|------|------------|-------------|
| **On-Demand** | Pay per 1K input + output tokens | Most cases — variable usage |
| **Batch** | 50% cheaper, processed asynchronously up to ~24 h | Bulk offline jobs (analyze 1M reviews) |
| **Provisioned Throughput** | Reserve dedicated model units (MUs) per hour | Consistent high-volume traffic; predictable cost; required for some customized models |
| **Model customization** | Pay for fine-tuning / continued pre-training compute | When you customize a model |

---

## 🧠 Amazon Q — The Two Cousins You Must Tell Apart

Amazon Q is AWS's family of **purpose-built generative-AI assistants**. Two flagship variants — and **the exam will absolutely test the difference**.

### Amazon Q Developer

Was **Amazon CodeWhisperer**. Rebranded and expanded in 2024.

- **Audience:** Software engineers, ops engineers, AWS practitioners
- **What it does:** AI coding assistant — code completion, code explanation, code transformation (e.g., Java 8 → Java 17), unit-test generation, security scanning, AWS console / CLI help, chat about your AWS account
- **Where it runs:** VS Code, JetBrains, Visual Studio, AWS Console, CLI, GitHub
- **Notable feature:** "Amazon Q Developer Agent" can perform multi-step tasks like "implement this Jira ticket end-to-end"

### Amazon Q Business

- **Audience:** Non-developers — sales, finance, HR, operations
- **What it does:** An enterprise **RAG-powered chatbot** that answers questions, summarizes, and takes actions on **your company's data** — without you writing any code or building a vector DB by hand
- **Connectors (40+):** S3, SharePoint, Confluence, Salesforce, ServiceNow, Slack, Microsoft 365, Google Drive, Jira, Zendesk, etc.
- **Built-in:** Permissions are respected (a user only sees answers from documents they have access to)
- **Q in QuickSight** — generative BI for dashboards and analytics
- **Q in Connect** — generative AI for contact-center agents
- **Q in Chat Apps** — Q answers in Slack, Microsoft Teams

🎯 **Memory trick:**
- "Q **D**eveloper" → for *developers*, in your *IDE*
- "Q **B**usiness" → for *business users*, over *company docs*

### Bedrock vs Amazon Q — when to pick which

| You need | Use |
|----------|-----|
| Build a **custom** AI app or product feature using foundation models | **Bedrock** |
| Give business users a **ready-made** AI assistant over your company data | **Amazon Q Business** |
| Help developers write code faster | **Amazon Q Developer** |
| Generative BI on top of your dashboards | **Amazon Q in QuickSight** |
| Quickly experiment with prompts and small apps, no code | **PartyRock** |

---

## 🎈 PartyRock — Sandbox & Learning Playground

**PartyRock** (built by AWS on top of Bedrock) is a **no-code playground** where anyone can drag-and-drop widgets to build a generative-AI app: a quiz generator, a meal planner, a poem-writer.

- No AWS account needed (free tier with sign-up)
- Backed by Bedrock under the hood
- Shareable URLs
- Great for: learning prompt engineering, demos, hackathons, getting non-technical stakeholders excited

**Not** for: production workloads (use Bedrock directly).

---

## 🚀 SageMaker JumpStart (for Foundation Models)

We met JumpStart in Module 2. For Module 4, the key thing is: **JumpStart hosts a wide library of foundation models too** — including many open-weights models from Hugging Face, Meta, Stability AI, and more — that you can:

- One-click deploy to a SageMaker Endpoint
- Fine-tune with your own data
- Run privately in your VPC

| | Bedrock | SageMaker JumpStart |
|---|---------|---------------------|
| Hosting | Fully managed, serverless API | You provision an endpoint (instance type, count) |
| Pricing | Per token / per MU | Per instance-hour |
| Model catalog | Curated set of provider FMs (Claude, Nova, Titan, Llama, Mistral, Cohere, Stability, AI21) | Bigger open library — Hugging Face, Meta, Stability, etc. — plus pretrained vision/NLP models |
| Customization | Fine-tuning, continued pre-training (provider-supported only) | Full control — fine-tune, modify, BYO code |
| When to use | Build apps fast against frontier FMs without infra | Self-host open-weights models, deep customization, VPC isolation |

🎯 **Trap on the exam:** "Customer wants the easiest, no-infra path to call a foundation model" → **Bedrock**.
"Customer wants to self-host a fine-tuned open Llama model on their own GPUs" → **SageMaker JumpStart** or **SageMaker training + endpoints**.

---

## 🧬 The Other AWS GenAI Pieces You Should Recognize

The AIF-C01 occasionally references these — keep them in your mental map:

| Service / feature | What it is |
|-------------------|-----------|
| **Amazon Bedrock Knowledge Bases** | Managed RAG — bring your documents, Bedrock handles chunking, embedding, retrieval (Module 5) |
| **Amazon Bedrock Agents** | LLM agents that plan and call your APIs / Lambda functions (Module 5) |
| **Amazon Bedrock Guardrails** | Safety layer — filter PII, denied topics, harmful content (Module 7) |
| **Amazon Bedrock Model Evaluation** | Built-in framework to compare FMs on your data (Module 6) |
| **Amazon Bedrock Studio** | Browser-based environment for teams to prototype Bedrock apps |
| **Amazon Q in QuickSight** | Natural-language BI / dashboards |
| **Amazon Q in Connect** | Real-time agent assist in Amazon Connect contact centers |
| **AWS App Studio** | Generative-AI-powered low-code app builder for enterprises |
| **AWS HealthScribe** | GenAI clinical-note generation from doctor-patient conversations |
| **AWS Trainium / Inferentia chips** | Custom AWS silicon for training (Trainium) and inference (Inferentia) at lower cost than GPUs |

---

## 🪜 The AWS GenAI Stack — Three Layers (Memorize)

AWS itself describes its GenAI offerings as a **three-layer stack**. This shows up directly in exam questions.

```
┌──────────────────────────────────────────────────────────┐
│  TOP LAYER — Applications powered by GenAI               │
│  Amazon Q (Developer, Business, QuickSight, Connect),    │
│  PartyRock, App Studio, HealthScribe                     │
├──────────────────────────────────────────────────────────┤
│  MIDDLE LAYER — Tools to build with foundation models    │
│  Amazon Bedrock (FMs, KBs, Agents, Guardrails, Eval)     │
├──────────────────────────────────────────────────────────┤
│  BOTTOM LAYER — Infrastructure for training & inference  │
│  SageMaker, Trainium, Inferentia, GPUs (EC2 P5/G6/etc.)  │
└──────────────────────────────────────────────────────────┘
```

| Layer | Who uses it | Examples |
|-------|-------------|----------|
| **Top — Applications** | End-users / business users | Amazon Q Business, PartyRock |
| **Middle — Tools / Platforms** | App builders / developers | Amazon Bedrock |
| **Bottom — Infrastructure** | ML engineers, model trainers | SageMaker, Trainium/Inferentia, EC2 GPU |

🎯 **Exam pattern:** "Which AWS GenAI layer should a non-technical marketer use to ask questions of company docs?" → Top layer → **Amazon Q Business.**

---

## 🤔 How To Choose A Foundation Model

Even at AIF-C01 depth, the exam expects you to know what factors influence model choice:

| Factor | What to think about |
|--------|---------------------|
| **Modality** | Text, image, embedding, multimodal? |
| **Task fit** | Reasoning vs creative writing vs code vs translation? |
| **Latency** | Smaller models = lower latency (Claude Haiku, Nova Micro, Llama 3 8B) |
| **Cost per 1K tokens** | Smaller models cost a fraction of frontier models |
| **Context window** | Need long docs? Pick a long-context model (Claude, Nova Pro, etc.) |
| **Quality** | Larger / frontier models for hard reasoning |
| **Multilingual** | Mistral, Claude, Nova all strong in non-English |
| **Customization** | Not every Bedrock model supports fine-tuning — check the per-model docs |
| **Licensing** | Bedrock handles it; open-weights via JumpStart may have model-specific licenses (Llama community license, etc.) |

A practical rule the exam hints at: **start small and cheap, escalate to larger models only if quality demands it.** Cost can vary 10–30× between Haiku/Nova Micro and Opus/Nova Premier.

---

## 🚨 Common Exam Misconceptions

| Misconception | Reality |
|---------------|---------|
| "GPT-4 is on Bedrock" | Not natively. Bedrock providers: Anthropic, Amazon, Meta, Mistral, Cohere, Stability, AI21. |
| "Amazon Q is one product" | It's a family — Developer, Business, plus embedded "Q in [service]" flavors. |
| "JumpStart and Bedrock are the same" | Both host FMs but with very different operational models (serverless API vs your-own-endpoint). |
| "PartyRock is for production" | It's a sandbox. Move to Bedrock for real apps. |
| "All Bedrock models can be fine-tuned" | Customization support varies per model — verify before promising it on the exam. |
| "Bedrock trains its base models on my data" | Explicitly NO. Your input and outputs stay in your account/Region. |

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **Amazon Bedrock** | Fully managed service for accessing multiple FMs via one API |
| **Knowledge Bases for Bedrock** | Managed RAG service that handles chunking, embedding, retrieval |
| **Bedrock Agents** | LLM agents that plan and call APIs/Lambda |
| **Bedrock Guardrails** | Safety filters for inputs/outputs |
| **Bedrock Model Evaluation** | Tooling to evaluate / compare FMs on your data |
| **Provisioned Throughput** | Reserved dedicated capacity for Bedrock |
| **Amazon Q Developer** | AI coding assistant (was CodeWhisperer) |
| **Amazon Q Business** | Enterprise RAG chatbot over company data |
| **Amazon Q in QuickSight / Connect** | Embedded Q variants for BI and contact center |
| **PartyRock** | No-code sandbox on top of Bedrock |
| **SageMaker JumpStart** | Catalog of pretrained models incl. FMs to deploy on SageMaker endpoints |
| **Amazon Titan** | AWS's first-party FM family (text, embeddings, image) |
| **Amazon Nova** | AWS's 2024 frontier FM family (text, multimodal, image, video) |
| **AWS Trainium** | Custom AWS chip for *training* |
| **AWS Inferentia** | Custom AWS chip for *inference* |
| **AWS HealthScribe** | GenAI clinical-note generation |
| **AWS App Studio** | GenAI low-code app builder |
| **Three-layer GenAI stack** | Apps (top) → Tools (Bedrock) → Infra (SageMaker, Trainium/Inferentia) |

---

## ✅ Module 4 Summary

You now know:
- 🏰 What Amazon Bedrock is and which providers / model families live on it
- 🧠 The difference between Amazon Q Developer and Amazon Q Business
- 🎈 What PartyRock is for (and what it's *not* for)
- 🚀 Bedrock vs SageMaker JumpStart — managed API vs your-own-endpoint
- 🪜 The AWS three-layer GenAI stack (Apps → Tools → Infra)
- 🧬 The supporting services: Trainium / Inferentia, HealthScribe, App Studio, Q in QuickSight / Connect
- 🤔 How to pick a foundation model by modality, cost, latency, and context

**Next steps:**
1. 🎥 Watch the videos in [`Videos.md`](./Videos.md)
2. ✏️ Take [`Quiz.md`](./Quiz.md) — aim for 20/24
3. 📋 Review [`Cheat-Sheet.md`](./Cheat-Sheet.md)
4. 🧪 Take [**Practice Exam 1**](../Practice-Exams/Practice-Exam-1.md) — you've now covered Domains 1, 2, and most of 3
5. ➡️ Move to [Module 5: Prompt Engineering & RAG](../Module-05-Prompt-Engineering-RAG/Reading.md)

---

## 📚 Further Reading (Optional)

- 📖 [Amazon Bedrock — official page](https://aws.amazon.com/bedrock/)
- 📖 [Amazon Bedrock User Guide — Supported foundation models](https://docs.aws.amazon.com/bedrock/latest/userguide/models-supported.html)
- 📖 [Amazon Q — official page](https://aws.amazon.com/q/)
- 📖 [PartyRock](https://partyrock.aws/) — go play; it's free
- 📖 [Amazon Nova](https://aws.amazon.com/ai/generative-ai/nova/) — Amazon's 2024 frontier family
- 📖 [Trainium / Inferentia](https://aws.amazon.com/machine-learning/trainium/)
