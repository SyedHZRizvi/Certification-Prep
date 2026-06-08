# ✏️ Module 2 Quiz: AI Fundamentals for Marketers

> **Instructions:** Answer all 24 questions WITHOUT looking at the reading. Then check answers below. Aim for 20/24 minimum.

---

## Questions

### Q1. Which is the broadest umbrella term? *(Remember)*
A. Generative AI
B. Machine Learning
C. Large Language Model
D. Artificial Intelligence

---

### Q2. Roughly, 1 token is: *(Remember)*
A. 1 character
B. ¾ of a word
C. 1 word
D. 1 paragraph

---

### Q3. The 2017 architecture that powers every modern LLM is the: *(Remember)*
A. Recurrent Neural Network
B. Convolutional Neural Network
C. Transformer
D. Decision Tree

---

### Q4. ChatGPT was publicly launched in: *(Remember)*
A. May 2020
B. November 2022
C. February 2023
D. March 2024

---

### Q5. RAG stands for: *(Remember)*
A. Random Access Generation
B. Retrieval-Augmented Generation
C. Reduced Attention Generator
D. Reasoning-Aware Grounding

---

### Q6. A marketing team wants their AI assistant to answer customer questions using *their own* product documentation. The lowest-cost, fastest-to-deploy approach is: *(Apply)*
A. Fine-tune the model on the docs
B. RAG over a vector database of the docs
C. Train a foundation model from scratch
D. Ask customers to use Google instead

---

### Q7. "Temperature" in LLM settings controls: *(Understand)*
A. The processor temperature
B. How creative / random the output is
C. The number of tokens generated
D. The cost per query

---

### Q8. A "hallucination" in an LLM is: *(Understand)*
A. A user typo
B. A confident-sounding output that is factually wrong
C. A safety refusal
D. A bug in the API

---

### Q9. Which of these is NOT a foundation-model family marketers commonly use in 2026? *(Remember)*
A. GPT (OpenAI)
B. Claude (Anthropic)
C. Gemini (Google)
D. Cortana (Microsoft Research)

---

### Q10. The "context window" of a model determines: *(Understand)*
A. How much it costs per token
B. How many tokens it can consider at one time
C. How accurate its outputs are
D. How long it takes to train

---

### Q11. The famous case of a New York lawyer being sanctioned for citing AI-generated fictional court cases (2023) involved: *(Remember)*
A. Gemini
B. ChatGPT
C. Claude
D. Bing Chat

---

### Q12. An "embedding" is BEST described as: *(Understand)*
A. A piece of HTML markup
B. A numerical vector representation of meaning
C. A type of advertising widget
D. A subscriber tag in an email tool

---

### Q13. Fine-tuning is typically the right approach when: *(Apply)*
A. You need to add up-to-date information weekly
B. You need to permanently shift the model's style or domain language
C. You want the cheapest possible solution
D. You only have one or two custom documents

---

### Q14. Which is TRUE about training vs inference? *(Understand)*
A. Marketers usually run their own training
B. Inference is the expensive, multi-month process
C. Training is the multi-month, expensive process; inference is the cheap, fast query step
D. Both are equally expensive

---

### Q15. A "multimodal" model is one that handles: *(Understand)*
A. Only text in multiple languages
B. Multiple modalities such as text, image, audio, and video
C. Multiple users simultaneously
D. Multiple databases

---

### Q16. Which tool category is BEST for generating short talking-head marketing videos with AI avatars? *(Apply)*
A. Midjourney
B. ElevenLabs
C. Synthesia / HeyGen
D. ChatGPT

---

### Q17. Which prompt structure is widely taught (including by HubSpot) for repeatable results? *(Remember)*
A. Just ask in one sentence
B. ROLE / CONTEXT / TASK / CONSTRAINTS / EXAMPLES / OUTPUT
C. Question / Answer / Question / Answer
D. JSON-only

---

### Q18. A marketing team puts their full brand book + style guide + customer interview transcripts into a single 200K-token prompt. The model has a 1M-token context window. This is: *(Analyze)*
A. Impossible, context windows can't be that large
B. A use case for fine-tuning
C. A reasonable approach for grounding the AI in brand voice
D. A privacy violation by default

---

### Q19. Which is NOT a way to reduce hallucinations? *(Evaluate)*
A. Lower the temperature setting
B. Use RAG so the model is grounded in source documents
C. Always trust the model's first answer
D. Human-verify factual claims before publishing

---

### Q20. The MIT Media Lab's *Gender Shades* study (Buolamwini, 2018) is most associated with: *(Remember)*
A. LLM safety
B. Bias in facial recognition systems
C. Email deliverability
D. Programmatic ad fraud

---

### Q21. Which is TRUE about a generic free LLM tier vs. a paid tier? *(Evaluate)*
A. They are identical in all respects
B. Paid tiers typically offer newer / larger models, higher rate limits, and longer memory
C. Free tiers always preserve more privacy
D. Free tiers are required by law

---

### Q22. Spotify's recommendation engine (originally open-sourced as Aerosolve) is an example of: *(Apply)*
A. Generative AI
B. Machine learning powering a marketing product
C. RAG
D. Fine-tuning

---

### Q23. The 2017 paper "Attention Is All You Need" introduced: *(Remember)*
A. RAG
B. The Transformer architecture
C. Reinforcement Learning from Human Feedback (RLHF)
D. Constitutional AI

---

### Q24. Anthropic's safety approach, which uses a set of written principles to guide model behavior, is called: *(Remember)*
A. Reinforcement Tuning
B. Constitutional AI
C. Rule-Based AI
D. Principled Learning

---

## 🎯 Answers + Explanations

### Q1: **D. Artificial Intelligence**
AI is the umbrella. ML, deep learning, GenAI, and LLMs all sit underneath.

### Q2: **B. ¾ of a word**
Roughly 4 characters of English ≈ 1 token ≈ ¾ of a word. Whitespace counts.

### Q3: **C. Transformer**
Vaswani et al., 2017. The architecture underlying every major LLM today.

### Q4: **B. November 2022**
ChatGPT launched November 30, 2022, fastest-growing consumer app in history (per UBS, 100M users in 2 months).

### Q5: **B. Retrieval-Augmented Generation**
Your docs are embedded, stored in a vector DB, retrieved at query time, and fed into the LLM.

### Q6: **B. RAG**
Cheapest, fastest, and the right tool when the goal is grounding on your own up-to-date documents.

### Q7: **B. How creative / random the output is**
Higher temperature = more variability + more hallucination risk. Lower = more deterministic.

### Q8: **B. A confident-sounding output that is factually wrong**
A hallucination is the model generating plausible-but-false content.

### Q9: **D. Cortana (Microsoft Research)**
Cortana is a Microsoft virtual assistant brand, not a 2026 foundation-model family. The major families: GPT, Claude, Gemini, Llama, Mistral.

### Q10: **B. How many tokens it can consider at one time**
Everything you send + everything the model outputs must fit in the window.

### Q11: **B. ChatGPT**
*Mata v. Avianca* (S.D.N.Y., June 2023). The lawyer relied on ChatGPT-generated citations of cases that didn't exist.

### Q12: **B. A numerical vector representation of meaning**
Embeddings are typically 512–4,096-dimensional vectors. Similar meanings produce similar vectors. They power semantic search.

### Q13: **B. You need to permanently shift the model's style or domain language**
Fine-tuning is heavy. Use it for style + specialized domain language. For "use my docs" RAG is almost always better.

### Q14: **C. Training is multi-month and expensive; inference is cheap and fast**
Foundation-model training is done by labs (OpenAI, Anthropic, etc.). Marketers pay only for inference.

### Q15: **B. Multiple modalities such as text, image, audio, and video**
GPT-4o, Gemini, and Claude 3+ are all multimodal.

### Q16: **C. Synthesia / HeyGen**
Both specialize in AI avatar talking-head video. Midjourney is images; ElevenLabs is voice.

### Q17: **B. ROLE / CONTEXT / TASK / CONSTRAINTS / EXAMPLES / OUTPUT**
HubSpot's 2024 *AI for Marketers* course teaches this exact structure.

### Q18: **C. A reasonable approach for grounding the AI in brand voice**
With a 1M-token context window, large in-context grounding is a valid pattern. (Watch for noise; you may still need RAG for very large corpora.)

### Q19: **C. Always trust the model's first answer**
Hallucination mitigation requires the opposite, verification, grounding, low temperature, retries.

### Q20: **B. Bias in facial recognition systems**
Joy Buolamwini's MIT Media Lab study (2018) showed face-recognition error rates were dramatically higher on darker-skinned female faces, kickstarting modern AI-bias research.

### Q21: **B. Paid tiers typically offer newer / larger models, higher rate limits, and longer memory**
Free vs paid changes constantly; the general pattern is paid = better and more.

### Q22: **B. Machine learning powering a marketing product**
Spotify Wrapped is a marketing campaign built on top of a classical ML recommendation engine, not a GenAI campaign.

### Q23: **B. The Transformer architecture**
Vaswani et al., 2017. The foundational paper for modern LLMs.

### Q24: **B. Constitutional AI**
Anthropic's approach: a written "constitution" of principles is used during training to shape model behavior. The most-cited reference in safety discussions of Claude.

---

## 📊 Score Yourself

- 22–24/24 → 🏆 You can hold your own with engineers. Move to Module 3.
- 18–21/24 → ✅ Solid foundation. Note misses, then move on.
- 14–17/24 → ⚠️ Re-read the LLM-mechanics section. Re-quiz tomorrow.
- <14/24 → 🔁 Re-read all of Module 2 and re-watch the Andrew Ng + 3Blue1Brown videos.

---

## 🃏 Add To Your Flashcards

- AI > ML > Deep Learning > GenAI > LLM taxonomy
- Token, context window, embedding, Transformer definitions
- The 5 foundation-model families
- Prompting vs RAG vs Fine-tuning, with one use case for each
- Hallucination definition + 4 mitigation tactics
- ROLE / CONTEXT / TASK / CONSTRAINTS / EXAMPLES / OUTPUT prompt template
- Transformer paper year (2017), ChatGPT launch (Nov 30, 2022)
- Constitutional AI = Anthropic

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 3](../Module-03-SEO-in-the-AI-Era/Reading.md)
