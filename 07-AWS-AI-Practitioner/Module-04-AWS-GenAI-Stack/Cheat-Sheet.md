# 📋 Module 4 Cheat Sheet: AWS GenAI Stack

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 🪜 The 3-Layer GenAI Stack

| Layer | Examples |
|-------|----------|
| **Apps** | Amazon Q (Dev, Business, QuickSight, Connect), PartyRock, App Studio, HealthScribe |
| **Tools** | Amazon Bedrock (FMs + KBs + Agents + Guardrails + Eval) |
| **Infra** | SageMaker, Trainium (training), Inferentia (inference), EC2 GPU |

---

## 🏰 Bedrock — Model Catalog (providers + use)

| Provider | Family | Modality | Use case |
|----------|--------|----------|----------|
| Anthropic | Claude (Haiku/Sonnet/Opus) | Text + vision | Reasoning, long context, writing, code |
| Amazon | **Nova** (Micro/Lite/Pro/Premier, Canvas, Reel) | Text, multimodal, image, video | AWS frontier family (2024) |
| Amazon | **Titan** (Text, Embeddings, Image Gen) | Text, embed, image | AWS-native, cost-efficient |
| Meta | Llama 3 / 3.x | Text (some vision) | Open-weights heritage |
| Mistral | Mistral, Mixtral, Codestral | Text | Cost-effective reasoning, multilingual |
| Cohere | Command R/R+, Embed, Rerank | Text + embed + rerank | RAG-optimized |
| Stability | Stable Diffusion (SDXL, SD3) | Image gen | Text → image |
| AI21 | Jamba | Text | Long-context efficiency |

🎯 **NOT on Bedrock:** OpenAI GPT, Google Gemini.

---

## 💰 Bedrock Pricing Modes

| Mode | When |
|------|------|
| **On-Demand** | Default; variable usage; per 1K tokens |
| **Batch** | ~50% cheaper, async ≤24h; bulk offline |
| **Provisioned Throughput** | Reserved MUs/hour; steady high traffic; required for some customized models |

---

## 🧠 Amazon Q — Tell the Cousins Apart

| Variant | Audience | What it does |
|---------|----------|--------------|
| **Q Developer** | Engineers | IDE / console code + ops assistant (was CodeWhisperer) |
| **Q Business** | Business users | Enterprise RAG chatbot over company SaaS + files |
| **Q in QuickSight** | Analysts | Natural-language generative BI |
| **Q in Connect** | Contact-center agents | Real-time response suggestions |
| **Q in Chat Apps** | Slack / Teams users | Bring Q answers into chat |

---

## 🆚 Bedrock vs JumpStart vs PartyRock

| | Bedrock | JumpStart | PartyRock |
|---|---------|-----------|-----------|
| Hosting | Serverless API | Your SageMaker endpoint | Hosted by AWS |
| Pricing | Per token / MU | Per instance-hour | Free tier sandbox |
| Model catalog | Curated provider FMs | Broad open-weights library | Bedrock-backed |
| Best for | Build prod apps fast | Self-host / VPC / fine-tune freely | Demos, no-code |

---

## ⚙️ Bedrock-Native Capabilities

| Feature | Purpose | Module |
|---------|---------|--------|
| Knowledge Bases | Managed RAG | 5 |
| Agents | LLM plans + calls APIs | 5 |
| Guardrails | Safety filters | 7 |
| Model Evaluation | Compare FMs on your data | 6 |
| Bedrock Studio | Team prototyping environment | 4 |

---

## 🏆 Exam Power Phrases

Usually right:

- ✅ "Bedrock + Knowledge Bases" for managed RAG
- ✅ "Amazon Q Business" for enterprise chatbot over docs
- ✅ "Amazon Q Developer" for coding assistant
- ✅ "Provisioned Throughput" for steady high-volume Bedrock traffic
- ✅ "Trainium for training, Inferentia for inference"
- ✅ "Data stays in customer's account/Region; Bedrock does not train base models on it"

Usually wrong:

- ❌ "GPT-4 on Bedrock"
- ❌ "PartyRock for production"
- ❌ "Bedrock requires you to provision GPU instances"
- ❌ "Q Developer for HR users"
- ❌ "JumpStart is serverless like Bedrock"

---

## ⚠️ Anti-Patterns

- ❌ Spinning up EC2 GPUs to call an LLM when Bedrock would serve it serverless
- ❌ Putting confidential prompts through PartyRock (it's a sandbox)
- ❌ Picking the biggest/most-expensive FM when a smaller one (Haiku, Nova Micro) would do
- ❌ Assuming every Bedrock model supports fine-tuning (varies by model)

---

## 📚 Reference case (high-signal recall)

| Case | What it proves |
|------|----------------|
| **Goldman Sachs Bedrock adoption (re:Invent 2024)** | Regulated industry's GenAI on-ramp = Bedrock + Claude + PrivateLink + IAM resource-level + KMS + invocation logging; 10,000+ engineers using internal tools daily |

---

## ✏️ Quick Self-Check

1. Name 6 Bedrock providers. ___
2. Q Developer vs Q Business in one sentence each. ___
3. Trainium vs Inferentia. ___
4. When to choose JumpStart over Bedrock? ___
5. The 3 layers of the AWS GenAI stack? ___

---

➡️ **[Take Practice Exam 1](../Practice-Exams/Practice-Exam-1.md)** (Modules 1–4 covered)
➡️ Then [Module 5: Prompt Engineering & RAG](../Module-05-Prompt-Engineering-RAG/Reading.md)
