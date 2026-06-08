# ✏️ Module 4 Quiz: AWS GenAI Stack

> **Instructions:** Answer all 24 questions WITHOUT looking at the reading.
> Then check your answers below. Aim for 20/24 minimum.

---

## Questions

### Q1. Amazon Bedrock is BEST described as: *(Remember)*
A. A managed Kubernetes service
B. A fully managed service for accessing multiple foundation models through one API
C. A relational database for ML metadata
D. A no-code app builder

---

### Q2. Which foundation model provider is NOT available natively on Amazon Bedrock? *(Analyze)*
A. Anthropic
B. Meta
C. Mistral AI
D. OpenAI

---

### Q3. A developer wants AI code suggestions inside their VS Code IDE. The right AWS service is: *(Apply)*
A. Amazon Q Business
B. Amazon Q Developer
C. PartyRock
D. Amazon Comprehend

---

### Q4. A non-technical HR analyst wants to ask plain-English questions of internal SharePoint and Salesforce content. The right AWS service is: *(Apply)*
A. Amazon Q Developer
B. Amazon Q Business
C. SageMaker Canvas
D. Amazon Polly

---

### Q5. Which is Amazon's 2024 frontier foundation model family announced at re:Invent? *(Remember)*
A. Amazon Titan G1
B. Amazon Nova (Micro, Lite, Pro, Premier, Canvas, Reel)
C. Amazon SageMaker FM
D. Amazon Athena Models

---

### Q6. The Bedrock pricing mode best suited for offline bulk processing at lower cost is: *(Apply)*
A. On-Demand
B. Batch
C. Provisioned Throughput
D. Free tier

---

### Q7. PartyRock is BEST described as: *(Understand)*
A. A production-grade Bedrock alternative
B. A no-code playground for building generative-AI apps on top of Bedrock
C. A managed Kubernetes cluster
D. A foundation model

---

### Q8. The 3 layers of the AWS GenAI stack are: *(Remember)*
A. Database / Compute / Network
B. Applications / Tools / Infrastructure
C. Frontend / Backend / DB
D. Reasoning / Memory / Tools

---

### Q9. A company wants to self-host an open-weights Llama model on its own SageMaker endpoint inside a VPC. The right service is: *(Apply)*
A. Amazon Bedrock
B. SageMaker JumpStart
C. PartyRock
D. Amazon Q Business

---

### Q10. Which Bedrock model family is optimized for TEXT EMBEDDINGS often used in RAG? *(Remember)*
A. Amazon Titan Text Embeddings (or Cohere Embed)
B. Stable Diffusion
C. Amazon Nova Reel
D. Amazon Polly

---

### Q11. Amazon Q Developer was formerly known as: *(Remember)*
A. AWS DeepRacer
B. Amazon CodeWhisperer
C. Amazon Lex
D. AWS Cloud9

---

### Q12. A team wants steady, predictable throughput on a Bedrock model for a high-traffic production app. The right pricing mode is: *(Apply)*
A. Provisioned Throughput
B. Batch
C. Free tier
D. SageMaker Serverless Inference

---

### Q13. Which AWS chip is purpose-built for ML TRAINING at lower cost than GPUs? *(Remember)*
A. AWS Inferentia
B. AWS Trainium
C. AWS Graviton
D. AWS Nitro

---

### Q14. Which AWS chip is purpose-built for ML INFERENCE at lower cost than GPUs? *(Understand)*
A. AWS Trainium
B. AWS Inferentia
C. AWS Graviton
D. AWS Nitro

---

### Q15. A bank uses Bedrock and is worried about training data leakage. Which is TRUE? *(Evaluate)*
A. AWS automatically trains base models using customer prompts
B. By default, AWS does not use customer Bedrock inputs/outputs to train base models; data stays in the customer's account/Region
C. Customers must publicly share their prompts
D. Bedrock requires data to be uploaded to a public S3 bucket

---

### Q16. Which is a Bedrock-native feature for managed RAG? *(Remember)*
A. SageMaker Pipelines
B. Knowledge Bases for Amazon Bedrock
C. Amazon Personalize
D. AWS Glue

---

### Q17. Stable Diffusion (from Stability AI) on Bedrock generates: *(Remember)*
A. Text translations
B. Images from text prompts
C. Time-series forecasts
D. Speech audio

---

### Q18. Which Bedrock provider offers Command R and Embed models often used for RAG and rerank? *(Understand)*
A. Anthropic
B. Mistral
C. Cohere
D. AI21 Labs

---

### Q19. A marketing manager wants to build a quiz-generator demo with no code in a couple of hours. The BEST tool is: *(Apply)*
A. SageMaker Studio
B. PartyRock
C. AWS Glue
D. Amazon Athena

---

### Q20. Amazon Q in QuickSight provides: *(Understand)*
A. Natural-language generative BI for dashboards
B. Code completion in IDEs
C. Image generation
D. Speech transcription

---

### Q21. Which Bedrock model family is built by Amazon and known for cost-efficient text and embeddings? *(Understand)*
A. Claude
B. Titan
C. Llama
D. Stable Diffusion

---

### Q22. A retail enterprise wants the FASTEST and EASIEST path to invoke Claude in production without managing infrastructure. The right choice is: *(Apply)*
A. SageMaker JumpStart endpoint with manual instance management
B. Amazon Bedrock (Claude model invocation)
C. EC2 with custom Docker
D. PartyRock

---

### Q23. Which is NOT a Bedrock-native capability? *(Analyze)*
A. Knowledge Bases
B. Guardrails
C. Agents
D. Real-time speech transcription

---

### Q24. A team needs to compare 3 foundation models on their own dataset using AWS-native tooling. The right feature is: *(Create)*
A. Bedrock Model Evaluation
B. Amazon Q Developer
C. SageMaker Edge Manager
D. AWS Trusted Advisor

---

## 🎯 Answers + Explanations

### Q1: **B. Fully managed access to multiple FMs via one API**
Bedrock's pitch is "one API, many providers, no infra."

### Q2: **D. OpenAI**
Bedrock providers (2024–2025): Anthropic, Amazon (Titan + Nova), Meta, Mistral, Cohere, Stability, AI21. OpenAI's GPT models and Google's Gemini are NOT on Bedrock.

### Q3: **B. Amazon Q Developer**
Developer = IDE + AWS console coding/ops assistant. Formerly CodeWhisperer.

### Q4: **B. Amazon Q Business**
Business = enterprise RAG chatbot over company SaaS/file connectors.

### Q5: **B. Amazon Nova**
Launched at re:Invent 2024. Includes Micro/Lite/Pro/Premier (text), Canvas (image), Reel (video).

### Q6: **B. Batch**
Bedrock Batch is asynchronous, processed within 24 h, at ~50% lower price. Ideal for offline jobs.

### Q7: **B. No-code playground on top of Bedrock**
Free signup, shareable apps, great for learning and demos, not for production.

### Q8: **B. Applications / Tools / Infrastructure**
AWS's own three-layer stack. Top = Q, PartyRock. Middle = Bedrock. Bottom = SageMaker, Trainium, Inferentia.

### Q9: **B. SageMaker JumpStart**
Open-weights, self-hosted, full control = JumpStart (or SageMaker training/endpoints). Bedrock is serverless API, no model hosting choice.

### Q10: **A. Titan Text Embeddings (or Cohere Embed)**
Both are embedding models on Bedrock used heavily for RAG.

### Q11: **B. Amazon CodeWhisperer**
Rebranded and expanded into Q Developer in 2024.

### Q12: **A. Provisioned Throughput**
Reserve model units (MUs) per hour, predictable, dedicated capacity. Also required for some customized models.

### Q13: **B. AWS Trainium**
Trainium = TRAINing. Inferentia = INFERence. Graviton = ARM CPU. Nitro = hypervisor.

### Q14: **B. AWS Inferentia**
See Q13.

### Q15: **B. By default, AWS does not use Bedrock inputs/outputs to train base models**
Data stays in the customer account/Region, a frequent test point.

### Q16: **B. Knowledge Bases for Amazon Bedrock**
Managed RAG, chunking, embedding, retrieval orchestration. Covered deeply in Module 5.

### Q17: **B. Images from text prompts**
Stable Diffusion is text-to-image. Titan Image Generator and Nova Canvas also do this on Bedrock.

### Q18: **C. Cohere**
Cohere Command (text), Embed (vectors), Rerank (boosting top-K retrieval) all live on Bedrock.

### Q19: **B. PartyRock**
No code, no AWS account needed, free tier, perfect for a demo prototype.

### Q20: **A. Natural-language generative BI for dashboards**
Q embedded in QuickSight = ask questions and get charts in plain English.

### Q21: **B. Titan**
Amazon's first-party FM family, cost-efficient text and embeddings models on Bedrock.

### Q22: **B. Amazon Bedrock (Claude model invocation)**
Bedrock is serverless and pay-per-token, fastest path to production for Claude with zero infra.

### Q23: **D. Real-time speech transcription**
That's Amazon Transcribe, not Bedrock. Bedrock has Knowledge Bases, Guardrails, Agents, Model Evaluation, Studio.

### Q24: **A. Bedrock Model Evaluation**
Built-in framework to compare FMs on your data using automated or human evals.

---

## 📊 Score Yourself

- 23–24/24 → 🏆 Bedrock + Amazon Q + JumpStart on lock.
- 20–22/24 → ✅ Great, go take Practice Exam 1.
- 17–19/24 → ⚠️ Re-read the Bedrock catalog table and Q Developer vs Q Business section.
- <17 → 🔁 Re-do the whole module.

---

## 🃏 Add To Your Flashcards

- Bedrock providers (Anthropic, Amazon Titan/Nova, Meta, Mistral, Cohere, Stability, AI21)
- Q Developer vs Q Business (one sentence each)
- Trainium = training; Inferentia = inference
- 3 layers of the AWS GenAI stack
- Bedrock pricing modes (On-Demand / Batch / Provisioned Throughput)
- Knowledge Bases, Agents, Guardrails, Model Evaluation, Studio

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then **[Practice Exam 1](../Practice-Exams/Practice-Exam-1.md)**, then [Module 5: Prompt Engineering & RAG](../Module-05-Prompt-Engineering-RAG/Reading.md)
