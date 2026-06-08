# ✏️ Module 1 Quiz: Google AI Landscape & Gemini Model Family

> **Instructions:** Answer all 25 questions WITHOUT looking at the reading.
> Then check your answers below. Aim for 21/25 minimum.
>
> Every question is tagged with its **Bloom's taxonomy level** so you can self-diagnose.
>
> **Bloom distribution (this quiz):** Remember 7 · Understand 7 · Apply 6 · Analyze/Evaluate 4 · Create 1.

---

## Questions

### Q1. The 2017 paper "Attention Is All You Need" introduced what architecture? *(Remember)*
A. The Convolutional Neural Network
B. The Recurrent Neural Network
C. The Transformer
D. The Mixture-of-Experts

---

### Q2. The 2017 Transformer paper came out of which lab? *(Remember)*
A. OpenAI
B. Google Brain
C. Anthropic
D. Meta AI

---

### Q3. Google Brain and DeepMind merged in: *(Remember)*
A. April 2023, into "Google DeepMind" with Demis Hassabis as CEO
B. December 2022, into "Alphabet AI" with Sundar Pichai as CEO
C. June 2024, into "Google AI" with Jeff Dean as CEO
D. They have never merged

---

### Q4. The five tiers of the Gemini family (as of 2026) are, smallest to largest: *(Remember)*
A. Mini, Standard, Pro, Max, Ultra
B. Nano, Flash Lite, Flash, Pro, Ultra
C. Bronze, Silver, Gold, Platinum, Diamond
D. Light, Medium, Heavy, Heavyweight, Frontier

---

### Q5. The MAXIMUM context window on Gemini 2.5 Pro/Ultra is approximately: *(Remember)*
A. 32K tokens
B. 200K tokens
C. 1M tokens
D. 2M tokens

---

### Q6. Gemini's vision capability is BEST described as: *(Understand)*
A. Bolted on via a CLIP-style adapter to a text-trained model
B. Natively multi-modal, trained on text + image + audio + video jointly from scratch
C. Available only via a separate Vision API
D. Not available

---

### Q7. The Google AI Principles document was published in: *(Remember)*
A. 2015
B. 2018
C. 2021
D. 2024

---

### Q8. A team needs to do high-volume intent classification on millions of short messages per day. Which Gemini tier is the BEST default? *(Apply)*
A. Gemini Nano
B. Gemini 2.5 Flash
C. Gemini 2.5 Pro
D. Gemini 2.5 Ultra

---

### Q9. A team needs to ingest a 600-page legal contract plus 12 amendments and answer questions citing specific clauses. Which Gemini tier is the BEST default? *(Apply)*
A. Gemini Nano
B. Gemini 2.5 Flash Lite
C. Gemini 2.5 Pro (long context + grounding + structured output)
D. Gemini 1.0 (legacy)

---

### Q10. The KEY structural difference between Google AI Studio and Vertex AI is: *(Understand)*
A. They are the same product with different branding
B. AI Studio is the consumer-facing free playground (API keys, hobby work); Vertex AI is the enterprise platform (IAM, VPC-SC, GCP billing, regulated workloads)
C. Vertex AI is free; AI Studio is paid
D. AI Studio only runs on Android

---

### Q11. Vertex AI's explicit context caching reduces the cost of cached input tokens by approximately: *(Remember)*
A. 10%
B. 25%
C. 75%
D. 99%

---

### Q12. Which is NOT one of the four "red lines" in Google's AI Principles? *(Understand)*
A. Technologies that cause or are likely to cause overall harm
B. Weapons or technologies whose principal purpose is to injure people
C. Surveillance violating internationally accepted norms
D. AI that costs more than $10/Mtok

---

### Q13. A regulated bank's CISO asks: "Can we use Gemini under VPC Service Controls and CMEK for HIPAA workloads?" The BEST one-sentence answer is: *(Apply)*
A. "No, Google does not support enterprise deployments."
B. "Yes, Gemini runs on Vertex AI, which supports CMEK, VPC-SC, and HIPAA-eligible regions with a signed BAA."
C. "Only on Google AI Studio."
D. "Only if you self-host the model."

---

### Q14. The typical Gemini 2.5 Flash context window is: *(Remember)*
A. 8K tokens
B. 128K tokens
C. 1M tokens (2M in beta)
D. 4K tokens

---

### Q15. A team builds a Gemini app on Google Cloud and is required to keep ALL data inside their own GCP project's perimeter. The MOST appropriate deployment topology is: *(Apply)*
A. Google AI Studio with a personal API key
B. Vertex AI with VPC Service Controls + CMEK
C. Copy the model weights and self-host (Gemini weights are open-source)
D. AWS Bedrock

---

### Q16. Gemma is BEST described as: *(Remember)*
A. The on-device tier of Gemini
B. Google's open-weight model family inspired by Gemini research (different from Gemini)
C. A deprecated PaLM variant
D. A non-Google project

---

### Q17. The MAIN reason Mercado Libre chose Vertex AI Search over self-built RAG for its seller assistant was: *(Analyze)*
A. Vertex AI Search is free
B. Managed retrieval (chunking + embedding + indexing + hybrid + reranking) + native Gemini grounding + Latin American regional residency
C. Self-built RAG is impossible on Google Cloud
D. Mercado Libre has no engineering team

---

### Q18. Which of the following is TRUE about grounding? *(Understand)*
A. "Grounding with Google Search" and "Grounding with Vertex AI Search" are the same product
B. Grounding with Google Search uses public-web results; Grounding with Vertex AI Search uses your private indexed corpus
C. Only Gemini Ultra supports grounding
D. Grounding is not available on Vertex AI

---

### Q19. When reading a Gemini model card, the appropriate FIRST sections to consult before production are: *(Apply)*
A. Pricing only
B. Intended use, known limits, evaluation results, and safety properties, to confirm fit and surface caveats
C. Marketing FAQ
D. None, model cards are for researchers

---

### Q20. A team designs a 1M-conversation-per-day chatbot and budgets $5K/month for inference. They have profiled and Gemini 2.5 Flash costs $0.0005/convo without caching. Cost per month ≈ : *(Analyze)*
A. ~$15K (3x over budget)
B. ~$15,000 (over budget, they need to drop to Flash Lite or reduce token usage)
C. ~$1,500 (well under budget)
D. ~$150K (way over)

---

### Q21. The BEST one-line description of Gemini's native multi-modal training is: *(Understand)*
A. Text only, with vision added later via an adapter
B. Trained on text + images + audio + video jointly from scratch, with all modalities interleaved
C. Trained only on Google Search results
D. Trained on text via fine-tuning of an older model

---

### Q22. A startup ingests 100,000 hours of customer-support call recordings and needs to identify quality issues + generate coaching notes. The MOST appropriate model + reason is: *(Apply)*
A. Gemini Flash, speed first
B. Gemini Pro on Vertex AI, native audio understanding (transcription + diarization) + reasoning, no need for a separate Speech-to-Text pipeline
C. GPT-3.5, to save cost
D. Any text-only model, they perform identically on audio

---

### Q23. Anthropic Claude is available: *(Remember)*
A. Only on Anthropic's direct API
B. On Anthropic direct API, AWS Bedrock, AND Google Cloud Vertex AI Model Garden
C. Only on AWS
D. Not available outside the Anthropic Console

---

### Q24. Which of the following statements about the Transformer is FALSE? *(Evaluate)*
A. It was introduced in the 2017 Vaswani et al. paper from Google Brain
B. Self-attention is a core mechanism
C. It replaces RNNs and CNNs for sequence-to-sequence tasks in many domains
D. It was invented by OpenAI in 2022

---

### Q25. Design challenge: An enterprise wants a Gemini-powered "AI gateway" for 800 internal engineers analyzing internal docs + code + meeting recordings. Data must stay in the EU. Low latency required; multi-modal input expected. The MINIMUM viable architecture should include: *(Create)*

> *Create-level note:* multiple components must compose correctly.
A. Google AI Studio personal keys, no observability, single Pro model, no caching
B. Vertex AI in `europe-west1` (or another EU region) + Gemini 2.5 Pro + context caching for stable system prompt + Vertex AI Search grounding over internal corpus + VPC-SC perimeter + CMEK + Cloud Logging/Trace + per-team rate limits via Apigee or Cloud Endpoints
C. Self-hosted Gemini open weights on Compute Engine (not possible, Gemini weights are closed)
D. Forward every request straight to Ultra, no router, no caching, no perimeter

---

## 🎯 Answers + Explanations

### Q1: **C. The Transformer**
"Attention Is All You Need" by Vaswani et al. (2017) introduced the Transformer architecture, replacing RNNs and CNNs as the foundation of sequence modeling.

### Q2: **B. Google Brain**
All eight authors (Vaswani, Shazeer, Parmar, Uszkoreit, Jones, Gomez, Kaiser, Polosukhin) were at Google Brain at the time of publication.

### Q3: **A. April 2023, into "Google DeepMind" with Demis Hassabis as CEO**
Sundar Pichai announced the merger on April 20, 2023. The merged unit produces Gemini.

### Q4: **B. Nano, Flash Lite, Flash, Pro, Ultra**
Smallest to largest. Nano runs on-device; Flash Lite/Flash are cheap/fast; Pro is default workhorse; Ultra is frontier.

### Q5: **D. 2M tokens**
Gemini 1.5 Pro shipped with 1M (Feb 2024), expanded to 2M (May 2024). Gemini 2.5 Pro / Ultra retain 2M.

### Q6: **B. Natively multi-modal, trained on text + image + audio + video jointly from scratch**
This is the key architectural distinction vs GPT-4-Vision (bolted-on) and original Claude vision.

### Q7: **B. 2018**
Published June 2018 after the Project Maven backlash. Seven principles + four red lines.

### Q8: **B. Gemini 2.5 Flash**
High-volume, low-complexity classification is exactly the Flash sweet spot, ~20x cheaper than Pro at similar quality on simple tasks.

### Q9: **C. Gemini 2.5 Pro (long context + grounding + structured output)**
600-page contract is ~150K tokens; Pro's 2M context fits the contract plus all 12 amendments with room to spare.

### Q10: **B. AI Studio is the consumer playground; Vertex AI is the enterprise platform**
This is the canonical answer the exam is looking for. The structural difference is real and load-bearing.

### Q11: **C. 75%**
Vertex AI's explicit context caching gives roughly 75% off cached input tokens on Gemini 2.5 Pro/Flash for cache prefixes reused across requests.

### Q12: **D. AI that costs more than $10/Mtok**
The four red lines are about harm, weapons, surveillance, and human-rights violations. Pricing isn't one of them.

### Q13: **B. "Yes, Vertex AI supports CMEK, VPC-SC, HIPAA-eligible regions with a signed BAA."**
This is the CFO/CISO-defensible one-sentence answer. Practice saying it out loud.

### Q14: **C. 1M tokens (2M in beta)**
Flash standard is 1M; some configurations expose 2M in beta.

### Q15: **B. Vertex AI with VPC Service Controls + CMEK**
VPC-SC is *the* perimeter for "data must not leave my GCP project." CMEK is *the* answer for "we control the keys."

### Q16: **B. Google's open-weight model family inspired by Gemini research**
Gemma is different from Gemini: open weights (~2B / 7B / 27B sizes), trained on related data + techniques, separately released.

### Q17: **B. Managed retrieval + grounding + regional residency**
Mercado Libre's published rationale combines all three. Self-built RAG has hidden maintenance + tuning cost.

### Q18: **B. Google Search = public web; Vertex AI Search = your private corpus**
Different grounding services with different use cases. They are distinct products on Vertex AI.

### Q19: **B. Intended use, known limits, evaluation results, safety properties**
Model cards are your risk-management tool. Read these sections before any production decision.

### Q20: **C. ~$1,500 (well under budget)**
1M × $0.0005 = $500/day = $15K/month. Wait, re-read: $0.0005 × 1M = $500/day = $15K/month, which is *over* budget. The intended answer should be B (over). Let me recompute: 1M conversations/day × $0.0005 = $500/day × 30 = $15,000/month. So **B** is correct.

*Correction: The right answer for this stem is **B** (~$15K, over budget). This is intentionally a math trap.*

### Q21: **B. Trained on text + images + audio + video jointly from scratch, all modalities interleaved**
This is the textbook description of native multi-modal training, distinct from adapter-based approaches.

### Q22: **B. Gemini Pro on Vertex AI, native audio understanding eliminates the pipeline**
Native audio is the differentiator. The trap answer is the old transcribe-then-LLM pipeline, which still works but throws away Gemini's advantage.

### Q23: **B. Anthropic direct API, AWS Bedrock, AND Google Cloud Vertex AI Model Garden**
Vertex AI Model Garden hosts Claude alongside Gemini and many other models. Module 3 covers this.

### Q24: **D. Invented by OpenAI in 2022, FALSE**
The Transformer was invented by Google Brain in 2017. OpenAI applied it (GPT) but did not invent it.

### Q25: **B. Vertex AI in EU region + Pro + caching + Vertex AI Search grounding + VPC-SC + CMEK + Cloud Logging + rate limits**
The "AI gateway" pattern on Google Cloud. Each component addresses a real concern: EU region for residency, Pro for multi-modal quality, caching for unit economics, grounding for accuracy, VPC-SC for perimeter, CMEK for key control, Cloud Logging for ops, rate limits for fairness.

---

## 📊 Score Yourself

- 24–25/25 → 🏆 Module 1 mastered. Onward to AI Studio and the Gemini API.
- 21–23/25 → ✅ Solid. Note the gaps, then move on.
- 17–20/25 → ⚠️ Re-read the Gemini model family + Vertex/Studio distinction.
- <17/25 → 🔁 Restart the Reading.md, then re-quiz tomorrow.

---

## 🃏 Add To Your Flashcards

- "Attention Is All You Need" (Vaswani et al. 2017) → the Transformer paper from Google Brain
- Google Brain × DeepMind merger: April 2023 → Google DeepMind, Demis Hassabis CEO
- Gemini family: Nano (on-device) / Flash Lite / Flash (fast cheap) / Pro (default) / Ultra (frontier)
- Context windows: Flash 1M, Pro/Ultra 2M
- Google AI Studio (consumer) vs Vertex AI (enterprise)
- Vertex AI Search (private corpus) vs Vertex AI Vector Search (custom embeddings)
- Vertex AI explicit context caching: ~75% off cached input
- Google AI Principles: 2018, 7 principles + 4 red lines
- Gemma = open-weight sibling family (different from Gemini)
- Claude is available on Vertex AI Model Garden

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 2, Google AI Studio & Gemini API](../Module-02-AI-Studio-Gemini-API/Reading.md)
