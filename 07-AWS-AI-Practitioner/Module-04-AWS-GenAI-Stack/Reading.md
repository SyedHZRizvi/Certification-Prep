# Module 4: The AWS GenAI Stack 🏗️

> **Why this module matters:** This is the most service-dense module of the course and where Domains 2 + 3 collide. The exam constantly says *"a customer wants X — which AWS service?"* Get Bedrock, Amazon Q, JumpStart, and PartyRock cleanly separated in your head and you'll bank easy points.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - [Module 3: Generative AI Fundamentals](../Module-03-Generative-AI-Fundamentals/Reading.md) — foundation model, token, context window, embedding, temperature, hallucination
> - [Module 2: ML Workflow on SageMaker](../Module-02-ML-Workflow-SageMaker/Reading.md) — the SageMaker vocabulary you'll contrast Bedrock against
> - Awareness that "managed service" ≠ "running it yourself" — that distinction is the spine of this module
>
> AWS Cloud Practitioner (CLF-C02) graduates will move fast here. If service-name recall is shaky, keep [`03-AWS-Cloud-Practitioner/Module-05`](../../../03-AWS-Cloud-Practitioner/) open as a glossary while reading.

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
| **Anthropic** | Claude family — current 2026 lineup centers on **Claude 4** (Opus, Sonnet, Haiku tiers) and **Claude Sonnet 4.5** as the everyday workhorse. The earlier `claude-3-7-sonnet-20250219`, `claude-3-5-sonnet`, and `claude-3-opus-20240229` model IDs have been retired or moved to legacy. | Text + vision | Reasoning, long-context (200K+), writing, coding, agentic tool use |
| **Amazon** | **Nova** family — Nova Micro, Lite, Pro, Premier (text); **Nova Canvas** (image); **Nova Reel** (video). Launched at re:Invent 2024. | Text, vision, image-gen, video-gen | Amazon's first-party frontier family; broad capability |
| **Amazon** | **Titan** family — Titan Text (Lite/Express), Titan Text Embeddings (V2), Titan Image Generator | Text, embeddings, image-gen | Cost-efficient, AWS-native; embeddings widely used for RAG |
| **Meta** | **Llama** — Llama 3.x and Llama 4 family at varying parameter counts | Text (some vision) | Open-weights heritage, strong text quality |
| **Mistral AI** | Mistral 7B, Mixtral 8x7B / 8x22B, Mistral Large, Codestral | Text | Strong reasoning at lower cost; good multilingual |
| **Cohere** | Command R, Command R+, Embed v3, Rerank v3 | Text + embeddings | RAG-optimized; embeddings + rerank widely used |
| **Stability AI** | Stable Diffusion 3 / Stable Image | Image generation | Text-to-image |
| **AI21 Labs** | Jamba family | Text | Long-context efficiency |

🔄 **Verified against the AWS Bedrock model catalog 2026-05.** Exact model versions evolve continuously — what matters for the AIF-C01 is the **provider list above** and which kinds of models each ships. The exam will not ask you to recall specific date-suffixed model IDs; if a question references one, the underlying concept is what's tested.

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

## 📊 Case Study — Goldman Sachs' Bedrock Adoption (2023–2024)

**Situation.** Goldman Sachs employs ~46,000 staff and runs ~$30B/year in technology spend. Through 2023, the firm — like most Wall Street banks — had imposed broad restrictions on public ChatGPT use, citing client-data confidentiality, regulatory exposure (SEC, FINRA, MAS, FCA), and the risk of accidental disclosure. But internal demand was overwhelming: per Goldman's CIO Marco Argenti (speaking at AWS re:Invent 2024 and in subsequent interviews), the firm's engineers and bankers were running shadow experiments, and the *real* risk was not "AI" — it was AI used *outside* of the firm's controls.

**Decision.** Goldman Sachs publicly committed to **Amazon Bedrock as its primary enterprise generative-AI platform** at re:Invent 2024 (Andy Jassy keynote + Goldman session). The architecture, per Goldman engineering and the joint AWS case-study materials:

- **Anthropic Claude on Bedrock** as the workhorse model — chosen for reasoning quality on financial-document tasks and for the 200K-token context window
- **VPC Interface Endpoints (PrivateLink)** for Bedrock so all traffic stayed on the AWS backbone, never the public internet
- **Resource-level IAM** restricting which model ARNs each business unit could invoke (investment banking gets different access from consumer banking)
- **Bedrock Knowledge Bases** indexing internal research, policy, and reference data into **Amazon OpenSearch Serverless** as the vector store
- **Bedrock Guardrails** for PII filtering, denied topics (e.g., no investment advice from internal tools), and contextual grounding checks on RAG outputs
- **Bedrock model invocation logging to S3** (KMS-encrypted) for the full prompt + response audit trail demanded by compliance
- A "GS AI Platform" internal abstraction so individual teams build domain apps (research summarization, legal-document QA, code assistance) without re-implementing the security plumbing each time

**Outcome.** Public statements (2024–2025) cite:

- **Goldman has on the order of 10,000+ employees using internal Bedrock-powered tools daily** by late 2024
- A pilot of an "Engineer Assistant" (analogous to Amazon Q Developer) was credited with productivity gains and a meaningful reduction in PR cycle time, with the firm planning broader rollout in 2025
- Time to ship a *new internal AI use case* compressed from "quarters" to "weeks" because the security, IAM, encryption, and logging building blocks already existed
- Regulators were briefed in advance; no enforcement action followed the rollout

**Lesson for the exam / for practitioners.** Three AIF-C01 talking points anchor here:

1. **Bedrock is the on-ramp for "regulated industry + frontier model."** When a scenario describes a bank, insurer, hospital, or government agency wanting to use Claude/Llama/Mistral *with* compliance controls, the answer is almost always **Bedrock + PrivateLink + Guardrails + invocation logging + customer-managed KMS**. Goldman is the canonical reference for "we need Claude inside our security perimeter."
2. **The model is one of many choices — the *platform* is the durable bet.** Goldman explicitly chose Bedrock partly because they expected to swap model providers (Claude today, perhaps Llama or Nova tomorrow) without rewriting their security perimeter. The exam tests this pattern as "switching foundation models requires changing one API parameter" — that's Bedrock's structural advantage over multi-vendor direct API integrations.
3. **IAM resource-level restrictions are how you constrain spending and exposure across business units.** "Investment banking can call Claude Opus; consumer banking can only call Haiku" is a one-line IAM policy on the Bedrock model ARN. The exam loves this pattern — it's Q23 of Module 4 in concept form.

**Discussion (Socratic).**
- Q1: Goldman's choice of Claude on Bedrock was reportedly influenced by Anthropic's Responsible Scaling Policy and the AWS-Anthropic strategic investment (announced Sept 2023, expanded in 2024). Build the strongest argument for *technical* model choice (capability per dollar) versus *strategic* model choice (vendor stability, alignment posture, AWS relationship). When does each rationale dominate?
2. Goldman could have built its own model — they certainly have the engineers and capital. Why didn't they (or any other major bank as of 2026)? Make the strongest possible argument that they *should have*, and then the strongest argument that the build-vs-buy math will *never* favor banks building frontier FMs. (Hint: training cost, talent market, regulatory exposure, opportunity cost.)
3. The Goldman architecture uses one Bedrock model (Claude) for the workhorse but reserves the right to swap. Sketch a 90-day plan for a *model bake-off* between Claude, Llama, and Mistral on a specific Goldman use case (research-paper summarization). What evaluation harness would you build, who's on the human-eval panel, what's the deciding metric, and what's the runtime cost of running the bake-off?

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

> **Where this leads.**
> - Inside this course: Module 5 deepens the Knowledge Bases + Agents that Goldman uses to power its RAG patterns; Module 6 covers fine-tuning Bedrock models; Module 7 covers Guardrails and Responsible AI; Module 8 covers the IAM + PrivateLink + encryption stack you just saw at Goldman.
> - Cross-course: `08-Azure-AI-Engineer` Module 3–4 covers the Azure OpenAI / Azure AI Foundry equivalents; `04-AWS-Solutions-Architect-Associate` Module 5 covers IAM in depth and Module 7 covers PrivateLink in depth.
> - Practice: Practice Exam 1 has 8–10 questions on Bedrock alone; the Final Mock Exam tests cross-service scenarios with Bedrock + Q + JumpStart.

---

## 💬 Discussion — Socratic prompts

1. **Bedrock vs JumpStart vs PartyRock — the deployment triad.** Three engineers walk into your office: (a) an enterprise architect wants production Claude with VPC isolation, (b) a research scientist wants to fine-tune a 70B open-weights Llama with custom code, (c) a marketing manager wants a no-code AI demo by end of week. Assign each the right AWS service and explain *why* the others don't fit, citing concrete trade-offs (cost model, hosting, customization control, governance).
2. **Amazon Q Developer vs Q Business — the same company, both?** A mid-size firm of 800 employees wants to roll out Amazon Q. Their CTO argues for Q Developer for engineers and Q Business for the rest. A skeptic says "one tool is enough — pick one." Make the strongest argument for the dual rollout AND the strongest counter. What's the cost / sprawl / training implication of each?
3. **Provisioned Throughput vs On-Demand on Bedrock.** Sketch the cost crossover. At what monthly token volume does Provisioned Throughput beat On-Demand pricing? How does Batch (50% off, ≤24h SLA) change the calculation for a customer that has ~70% of its workload as offline / batch-friendly?
4. **The "Nova vs Claude" board question.** AWS's first-party Nova family is cheaper and AWS-aligned; Anthropic's Claude has stronger reasoning benchmarks and longer context. A retail CTO needs to choose for a customer-service co-pilot. Build the strongest argument for Nova AND the strongest argument for Claude, citing latency, cost, quality, vendor risk, and strategic alignment. Which would you defend at a board review — and what evaluation experiment would justify the call?
5. **The 3-layer stack and "where does the value accrue?"** The exam expects "Apps → Tools → Infra." But which layer is most defensible *economically* over the next 5 years: the top layer (Q, PartyRock, customer-facing apps), the middle (Bedrock), or the bottom (Trainium/Inferentia/EC2 GPU)? Defend your answer with reference to commodity vs differentiator dynamics — and the implication for your career: which layer is the safest place to build expertise?

---

## 📚 Further Reading (Optional)

- 📖 [Amazon Bedrock — official page](https://aws.amazon.com/bedrock/)
- 📖 [Amazon Bedrock User Guide — Supported foundation models](https://docs.aws.amazon.com/bedrock/latest/userguide/models-supported.html)
- 📖 [Amazon Q — official page](https://aws.amazon.com/q/)
- 📖 [PartyRock](https://partyrock.aws/) — go play; it's free
- 📖 [Amazon Nova](https://aws.amazon.com/ai/generative-ai/nova/) — Amazon's 2024 frontier family
- 📖 [Trainium / Inferentia](https://aws.amazon.com/machine-learning/trainium/)
