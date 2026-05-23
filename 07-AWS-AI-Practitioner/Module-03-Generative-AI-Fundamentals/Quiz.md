# ✏️ Module 3 Quiz: Generative AI Fundamentals

> **Instructions:** Answer all 24 questions WITHOUT looking at the reading.
> Then check your answers below. Aim for 20/24 minimum.

---

## Questions

### Q1. A "foundation model" is BEST described as: *(Remember)*
A. A small model trained for one specific task
B. A large pre-trained model adaptable to many downstream tasks
C. An older rule-based AI system
D. A SQL database optimized for ML

---

### Q2. The neural network architecture underlying virtually every modern LLM is the: *(Remember)*
A. Convolutional Neural Network (CNN)
B. Recurrent Neural Network (RNN)
C. Transformer
D. Decision Tree

---

### Q3. In an LLM, a "token" is: *(Remember)*
A. A user authentication credential
B. A small chunk of text (usually 3–4 characters) the model processes
C. A parameter of the neural network
D. An API call

---

### Q4. An "embedding" is: *(Understand)*
A. A multi-dimensional numerical vector that represents the meaning of text/image/audio
B. The same thing as a token
C. The model's loss function
D. A type of GPU

---

### Q5. The "context window" of an LLM refers to: *(Understand)*
A. The screen size of the chat UI
B. The maximum number of tokens (prompt + response) the model can process in a single call
C. The number of training documents
D. The number of users connected concurrently

---

### Q6. You want the same factual answer every time when looking up a customer ID. The BEST inference parameter to lower is: *(Apply)*
A. Max tokens
B. Top-p
C. Temperature
D. Batch size

---

### Q7. Which inference parameter caps the LENGTH of the generated response? *(Remember)*
A. Top-k
B. Temperature
C. Max tokens
D. Top-p

---

### Q8. Which statement about hallucinations is TRUE? *(Understand)*
A. They only happen with very small models
B. They are confidently wrong outputs that sound plausible
C. They are eliminated by setting temperature to 0
D. They cannot be reduced

---

### Q9. The MOST common architectural technique for reducing hallucinations by feeding real source data into the prompt is: *(Apply)*
A. Fine-tuning
B. Retrieval-Augmented Generation (RAG)
C. Lowering top-k
D. Quantization

---

### Q10. Which is a MULTIMODAL capability? *(Understand)*
A. Plain text-to-text chat
B. Accepting an image as input and producing a text description
C. SQL query execution
D. Network packet inspection

---

### Q11. For English text, roughly how many words equals 1,000 tokens? *(Remember)*
A. ~250
B. ~500
C. ~750
D. ~5,000

---

### Q12. The PRIMARY cost driver for most LLM API usage (including Bedrock) is: *(Understand)*
A. The number of GPU instances
B. The number of input + output tokens processed
C. The number of users
D. The size of the model file

---

### Q13. Which task is GENERATIVE AI BEST suited for? *(Apply)*
A. Real-time fraud scoring of millions of transactions
B. Calculating payroll tax withholding
C. Summarizing long customer support transcripts
D. Storing customer data

---

### Q14. Which set of inference parameters would BEST encourage creative, varied output? *(Apply)*
A. Temperature 0.0, top-p 0.1, max tokens 50
B. Temperature 0.8, top-p 0.9, max tokens 500
C. Temperature 0.0, top-k 1, max tokens 50
D. Temperature 0.0, max tokens 1000

---

### Q15. A "Large Language Model" (LLM) is: *(Remember)*
A. A graphics rendering algorithm
B. A foundation model specialized in text
C. A database system
D. A type of CPU

---

### Q16. Which is NOT typically a way to reduce hallucinations? *(Analyze)*
A. Use RAG to ground answers in real data
B. Lower the temperature
C. Add detailed system prompts and few-shot examples
D. Increase the temperature and top-p

---

### Q17. Two documents about the same topic will have embeddings that are: *(Understand)*
A. Identical character strings
B. Numerically close in vector space (small cosine distance)
C. Stored in different databases
D. Always exactly the same vector

---

### Q18. Which AWS service provides text-EMBEDDING foundation models on Amazon Bedrock? *(Remember)*
A. Amazon Titan Text Embeddings
B. Amazon Polly
C. Amazon Personalize
D. AWS Glue

---

### Q19. Pre-training a foundation model from scratch is: *(Evaluate)*
A. Done by most enterprises monthly
B. A free feature of AWS Free Tier
C. Extremely expensive — typically done by model providers, not customers
D. Automatic when you call Bedrock

---

### Q20. A 200K-token context window allows you to fit approximately: *(Apply)*
A. Two pages of text
B. About 500 pages of text
C. One sentence
D. A 5 GB binary file

---

### Q21. Generative AI is the WRONG choice when: *(Evaluate)*
A. Drafting marketing copy
B. Summarizing customer reviews
C. Computing exact financial totals that must reconcile to the cent
D. Translating product descriptions across languages

---

### Q22. Which is TRUE about temperature? *(Analyze)*
A. A higher temperature always increases accuracy
B. A higher temperature increases randomness/creativity but can also increase hallucinations
C. Temperature has no effect on output
D. Temperature controls input token length

---

### Q23. Embeddings are MOST commonly used to power: *(Apply)*
A. Semantic search, recommendations, clustering, and RAG retrieval
B. GPU memory allocation
C. The serverless inference cold-start fix
D. IAM policy evaluation

---

### Q24. Which is the BEST description of multimodal models? *(Understand)*
A. Models that only work in one modality (text)
B. Models that natively handle multiple input/output modalities (e.g., text + image)
C. Models that run on multiple GPUs simultaneously
D. Models trained in multiple data centers

---

## 🎯 Answers + Explanations

### Q1: **B. A large pre-trained model adaptable to many downstream tasks**
The "broad data, general-purpose, adaptable" definition is exam canonical.

### Q2: **C. Transformer**
Published 2017 ("Attention Is All You Need"); backbone of GPT, Claude, Llama, Nova, Titan, Mistral.

### Q3: **B. A small chunk of text**
1 token ≈ 3–4 characters ≈ 0.75 words in English. Tokens are what models actually consume.

### Q4: **A. A vector representing meaning**
Embeddings live in high-dimensional vector space; similar meanings → close vectors.

### Q5: **B. Max tokens of prompt + response in one call**
Critical: it includes BOTH input and output tokens.

### Q6: **C. Temperature**
Lower temperature → more deterministic. Top-p / top-k are secondary knobs.

### Q7: **C. Max tokens**
The hard cap on response length.

### Q8: **B. Confidently wrong outputs that sound plausible**
The danger isn't visible nonsense — it's invented "facts" that look right.

### Q9: **B. Retrieval-Augmented Generation (RAG)**
Inject real source data at runtime → model paraphrases truth instead of inventing.

### Q10: **B. Accept an image, produce text description**
Multimodal = more than one modality natively. Claude vision and Amazon Nova multimodal both do this.

### Q11: **C. ~750**
The rule of thumb for English: 1 token ≈ 0.75 words, so 1,000 tokens ≈ 750 words.

### Q12: **B. Number of input + output tokens**
Bedrock and almost every LLM API price per 1K tokens. Shorter prompts and responses = lower cost.

### Q13: **C. Summarizing long customer support transcripts**
Classic GenAI sweet spot. Payroll math and high-volume fraud scoring are wrong tools.

### Q14: **B. Temperature 0.8, top-p 0.9, max tokens 500**
Higher randomness + wider token pool + room to expand = creative output.

### Q15: **B. A foundation model specialized in text**
"LLM" specifically means *text* foundation model. Other FMs handle images, audio, etc.

### Q16: **D. Increasing temperature and top-p**
This makes the model MORE likely to wander and invent. The other options all *reduce* hallucinations.

### Q17: **B. Numerically close in vector space**
Semantic similarity → small cosine distance. That's the basis of semantic search.

### Q18: **A. Amazon Titan Text Embeddings**
Also: Cohere Embed on Bedrock. Polly = TTS, Personalize = recos.

### Q19: **C. Extremely expensive — done by providers**
Pre-training a frontier model costs tens to hundreds of millions. Customers fine-tune or RAG; they don't pre-train.

### Q20: **B. About 500 pages**
~500 pages or ~150K words — depends on tokenization but that's the right order of magnitude.

### Q21: **C. Exact financial totals**
GenAI is probabilistic. Use deterministic code for math that must reconcile.

### Q22: **B. Higher temperature = more random + more hallucination risk**
Creativity and reliability are a trade-off.

### Q23: **A. Semantic search, recommendations, clustering, RAG retrieval**
Embeddings are the geometry of meaning — they power *all* of these.

### Q24: **B. Models that natively handle multiple modalities**
e.g., Amazon Nova accepts text + image + video; Claude accepts text + image.

---

## 📊 Score Yourself

- 23–24/24 → 🏆 You speak GenAI fluently.
- 20–22/24 → ✅ Solid foundation. Move on.
- 17–19/24 → ⚠️ Re-read the tokens / embeddings / hallucinations sections.
- <17 → 🔁 Re-do the whole module before Bedrock.

---

## 🃏 Add To Your Flashcards

- Foundation model definition
- Transformer / self-attention
- Token, embedding, context window (one-line each)
- 4 inference parameters and what each does
- Hallucination definition + 3 mitigation techniques
- The multimodal modalities and example AWS models

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 4: AWS GenAI Stack](../Module-04-AWS-GenAI-Stack/Reading.md)
