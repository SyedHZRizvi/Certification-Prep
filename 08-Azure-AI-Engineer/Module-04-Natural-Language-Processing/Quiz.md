# ✏️ Module 4 Quiz: Natural Language Processing

> **Instructions:** Answer all 30 questions WITHOUT looking at the reading.
> Then check your answers below. Aim for 25/30 minimum.
> Each question is **Bloom's-taxonomy** tagged.

---

## Questions

### Q1. Which Azure AI service replaced LUIS? *(Remember)*
A. Azure AI Question Answering
B. Azure AI Conversational Language Understanding (CLU)
C. Azure AI Speech
D. Azure OpenAI

---

### Q2. Which Azure AI service replaced QnA Maker? *(Remember)*
A. Azure AI Conversational Language Understanding (CLU)
B. Azure AI Question Answering
C. Custom Question Answering
D. Bot Framework Composer

---

### Q3. To detect the language of an unknown text string, you'd call: *(Apply)*
A. `analyze_sentiment`
B. `detect_language`
C. `recognize_pii_entities`
D. `extract_summary`

---

### Q4. Aspect-based sentiment ("the food was great but service was slow") in the Language service is called: *(Remember)*
A. Multi-sentiment analysis
B. Opinion Mining
C. Polarity scoring
D. Entity sentiment

---

### Q5. Which line completes this snippet to redact PII from a list of texts? *(Apply)*
```python
from azure.ai.textanalytics import TextAnalyticsClient
client = TextAnalyticsClient(endpoint, AzureKeyCredential(key))
result = client.______(documents=["My SSN is 123-45-6789"])
print(result[0].redacted_text)
```
A. `recognize_entities`
B. `analyze_sentiment`
C. `recognize_pii_entities`
D. `extract_key_phrases`

---

### Q6. Extractive summarization differs from abstractive summarization because: *(Understand)*
A. Extractive translates to another language
B. Extractive picks existing sentences; abstractive generates new ones
C. Extractive is LLM-backed; abstractive is rule-based
D. They are the same

---

### Q7. The Translator request to a global Translator resource MUST include which header in addition to the subscription key? *(Remember)*
A. `Ocp-Apim-Subscription-Region`
B. `X-Translator-Region`
C. `Azure-Region`
D. No region header is needed

---

### Q8. Document Translation: *(Understand)*
A. Is synchronous
B. Is async / batch — uses source and target Azure Storage containers
C. Cannot preserve format
D. Works only for plain text

---

### Q9. Which option correctly describes Custom Translator training data? *(Remember)*
A. A single CSV of source/target words
B. Parallel data — matched sentence pairs in two languages (and optional tuning + test sets)
C. Pre-trained ONNX file
D. SSML examples

---

### Q10. Which is a Microsoft Neural Voice name format? *(Remember)*
A. `Jenny-Neural-US`
B. `en-US-JennyNeural`
C. `voice/jenny@en`
D. `MS-Jenny-001`

---

### Q11. To make a TTS voice pause for 500 milliseconds and then speak slower, you use: *(Apply)*
A. The `pause` parameter
B. SSML with `<break time="500ms"/>` and `<prosody rate="-10%">`
C. The `tempo` setting in SpeechConfig
D. You can't customize voice output

---

### Q12. Custom Neural Voice (CNV) requires: *(Remember)*
A. Standard Speech resource — no other approval
B. Limited Access approval AND voice talent consent recording
C. Custom Vision approval
D. No approval — just upload audio

---

### Q13. To transcribe 20 hours of recorded meetings cost-effectively, use: *(Apply)*
A. Real-time Speech recognition
B. Batch transcription via REST and Azure Storage
C. Whisper in Azure OpenAI (50 MB limit per file)
D. SSML

---

### Q14. Speech translation: *(Understand)*
A. Translates only text
B. Transcribes + translates audio in one Speech call
C. Requires both Speech AND Translator resources
D. Only supports en→es

---

### Q15. The Question Answering service builds a knowledge base from: *(Remember)*
A. PDFs only
B. URLs, FAQs, files (PDF/DOCX/TSV), and chitchat templates
C. A SQL database only
D. JSON only

---

### Q16. Which Python class is the entry point for Language calls? *(Remember)*
A. `LanguageClient`
B. `TextAnalyticsClient`
C. `NLPClient`
D. `LangServiceClient`

---

### Q17. In CLU, an utterance like *"Book a flight from NYC to Paris tomorrow"* should produce: *(Understand)*
A. Intent: `BookFlight`; entities: `origin=NYC`, `destination=Paris`, `date=tomorrow`
B. Sentiment positive
C. Translation to French
D. PII entities only

---

### Q18. Custom Text Classification supports project types: *(Remember)*
A. Multi-class single (one label) and Multi-label (many labels) only
B. Object detection
C. Sentiment-only
D. Embedding only

---

### Q19. The `Ocp-Apim-Subscription-Region` header is required for: *(Remember)*
A. Azure AI Language
B. Azure AI Translator (global resource)
C. Azure AI Vision
D. All Azure AI services

---

### Q20. Which Speech feature requires Limited Access? *(Remember)*
A. Real-time STT in English
B. Custom Neural Voice
C. Standard neural TTS
D. Batch transcription

---

### Q21. To improve Speech-to-Text accuracy on factory-floor audio with motor noise, you should train: *(Apply)*
A. Custom Neural Voice
B. Custom Speech (acoustic + language models)
C. Custom Translator
D. CLU model

---

### Q22. The Language Studio is used to: *(Remember)*
A. Manage your Azure subscription
B. Build/label/train custom Language features (Custom Classification, Custom NER, CLU, QA)
C. Deploy Speech models
D. Configure Azure OpenAI

---

### Q23. Which Language feature returns Wikipedia-linked entities? *(Remember)*
A. Named Entity Recognition (basic)
B. Entity Linking
C. Key Phrase Extraction
D. Language Detection

---

### Q24. Native Document Support in Azure AI Language lets you: *(Understand)*
A. Run Language features directly on PDF/DOCX/PPTX without preconversion
B. Translate documents
C. Synthesize documents from prompts
D. Store documents in your Language resource

---

### Q25. You need to translate a 200-page legal contract while preserving formatting and using your customized legal terminology. Best choice: *(Apply)*
A. Translator text API only
B. Document Translation + Custom Translator (referenced by category)
C. Speech translation
D. Question Answering

---

### Q26. A team wants the chatbot to answer FAQ questions AND handle natural-language commands ("schedule meeting tomorrow"). The recommended pattern: *(Apply)*
A. Use only Question Answering
B. Use only CLU
C. Combine CLU + Question Answering via Orchestration workflow
D. Use Azure OpenAI for both

---

### Q27. Sentiment Analysis confidence scores: *(Understand)*
A. Sum to 1.0 across positive/neutral/negative
B. Sum to 1.0 across positive/negative only
C. Range 0–100
D. Are integer-only

---

### Q28. Which deployment step is REQUIRED before you can call a custom Language model (CLU, Custom NER, Custom Classification)? *(Understand)*
A. Containerize the model
B. Deploy the trained model to a named deployment slot
C. Convert it to ONNX
D. Publish via Azure ML

---

### Q29. Walmart's "Sparky" (2024) composed Language + Translator + Speech rather than asking Azure OpenAI to do all three. Evaluate this design: which is the *strongest* reason to keep specialized services in the stack even when a multimodal LLM could plausibly handle each task? *(Evaluate)*
A. LLMs cost less per token
B. Specialized services offer purpose-built features (Document Translation preserves DOCX/PPTX formatting; Custom Translator + Custom Speech tune for domain; Translator data-zones for GDPR; PII Detection runs upstream of the LLM context window) — composition gives better accuracy, compliance, and cost-control than a single LLM in this domain
C. Azure OpenAI doesn't support English
D. Walmart was contractually forced to use them all

---

### Q30. **Design task.** You're building a multilingual claims-intake flow for a US-based insurer that must accept Spanish + English + Mandarin, redact customer PII before any data leaves the browser session, summarize the claim into a 3-sentence paragraph with explicit traceability to the source utterances, and route urgent claims via voice with a Neural Voice that *cannot* impersonate a real claims agent. Which architecture below best satisfies *all* of those constraints? *(Create)*
A. Azure OpenAI GPT-4o alone for everything
B. (1) Azure AI Language **PII Detection** in-browser (or in a pre-prompt step) — outputs redacted text; (2) **Translator** with the appropriate region header to translate non-English claims to English while keeping data in-region; (3) Azure AI Language **Extractive Summarization** for traceability (sentence-level citations from source), with **Abstractive Summarization** as a downstream polishing step routed only to fluent-English claims where hallucination tolerance is documented; (4) Azure AI **Speech TTS** using a generic Neural Voice (e.g., `en-US-JennyNeural`) — explicitly *not* Custom Neural Voice — to preserve a clear "this is the AI assistant" boundary; (5) Orchestration workflow on top routing urgent intents
C. Outsource to a generic chatbot vendor
D. Skip PII detection and trust the LLM

---

## 🎯 Answers + Explanations

### Q1: **B. Conversational Language Understanding (CLU)**
LUIS retired; CLU is its successor inside Azure AI Language.

### Q2: **B. Azure AI Question Answering**
Built into Azure AI Language. QnA Maker is retired.

### Q3: **B. `detect_language`**
Returns the primary language ISO code and confidence.

### Q4: **B. Opinion Mining**
Aspect-based sentiment — pass `show_opinion_mining=True` to sentiment analysis.

### Q5: **C. `recognize_pii_entities`**
Returns entities + a `.redacted_text` field with PII masked.

### Q6: **B. Extractive picks existing sentences; abstractive generates new ones**
Extractive = traceable highlights. Abstractive = polished paragraph (can hallucinate).

### Q7: **A. `Ocp-Apim-Subscription-Region`**
Translator is a global resource — calls must declare the region of the resource.

### Q8: **B. Async / batch — uses source and target Azure Storage containers**
You give it a SAS URL for input and output containers; the service does the rest.

### Q9: **B. Parallel data — matched sentence pairs (and optional tuning + test sets)**
Parallel corpora are the heart of Custom Translator.

### Q10: **B. `en-US-JennyNeural`**
Locale-LANG-NameNeural pattern.

### Q11: **B. SSML with `<break/>` and `<prosody rate="...">`**
SSML controls timing, prosody, pronunciation, and more.

### Q12: **B. Limited Access + voice talent consent recording**
Both required to prevent voice misuse.

### Q13: **B. Batch transcription via REST**
Async batch jobs handle long audio cost-effectively. Real-time tops out around 30 minutes.

### Q14: **B. Transcribes + translates audio in one Speech call**
`TranslationRecognizer` does both.

### Q15: **B. URLs, FAQs, files (PDF/DOCX/TSV), and chitchat**
A multi-source KB.

### Q16: **B. `TextAnalyticsClient`**
The (slightly legacy-named) Python client for the Language service.

### Q17: **A. Intent BookFlight + entities for origin/destination/date**
That's exactly what CLU is for.

### Q18: **A. Multi-class single (one label) and Multi-label (many labels)**
Two project types for custom classification.

### Q19: **B. Azure AI Translator (global resource)**
Other services use the regional endpoint and don't need this header.

### Q20: **B. Custom Neural Voice**
Standard TTS and STT are GA; CNV is Limited Access.

### Q21: **B. Custom Speech (acoustic + language models)**
Trained with your audio + transcripts to handle domain noise/jargon.

### Q22: **B. Build/label/train custom Language features**
Web portal at language.cognitive.azure.com for CLU, Custom Classification, Custom NER, Question Answering.

### Q23: **B. Entity Linking**
Returns Wikipedia URLs for recognized entities.

### Q24: **A. Run Language features directly on PDF/DOCX/PPTX**
Avoids the OCR-then-analyze dance for office documents.

### Q25: **B. Document Translation + Custom Translator**
Document Translation preserves format; Custom Translator gives you legal-domain accuracy.

### Q26: **C. Combine CLU + Question Answering via Orchestration workflow**
Best of both worlds — route some utterances to QA, others to intent handling.

### Q27: **A. Sum to 1.0 across positive/neutral/negative**
Three confidence scores, sum to 1.

### Q28: **B. Deploy the trained model to a named deployment slot**
Training alone doesn't expose the model; deployment makes it callable.

### Q29: **B. Specialized services beat generalist LLM on accuracy + compliance + cost**
This is the lesson of the Walmart Sparky composition. Document Translation's format preservation, Custom Translator's domain accuracy, Translator's data zones, and PII Detection's *upstream* placement are not replicable by stuffing everything into one GPT-4o call. The Cornell systems-engineering principle: composition of purpose-built services usually beats monolithic generalists at production scale.

### Q30: **B. Layered composition**
Each layer maps to one of the five constraints; choice B is the only option that meets all of them. A drops PII safety and traceability; C externalises risk; D violates Responsible AI Privacy & Security. Note especially that the design *avoids* Custom Neural Voice to preserve the Transparency principle — using a generic Neural Voice is a deliberate safety choice, not a feature gap.

---

## 📊 Score Yourself

- 29–30/30 → 🏆 Take Practice Exam 1
- 25–28/30 → ✅ Strong
- 19–24/30 → ⚠️ Re-read Language section
- <19/30 → 🔁 Re-read Reading.md; re-quiz tomorrow

### Bloom's distribution check
| Level | Count | % | Target |
|---|---|---|---|
| Remember | 14 | 47% | ≤ 25%¹ |
| Understand | 7 | 23% | ~25% |
| Apply | 7 | 23% | ~25% |
| Analyze | 0 | 0% | ~20% |
| Evaluate | 1 | 3% | (combined) |
| Create | 1 | 3% | ~5% |

¹ NLP module is feature/SDK-method heavy; recall remains exam-critical. Apply + Evaluate + Create stretch into the harder ground.

---

## 🃏 Add To Your Flashcards

- LUIS → CLU; QnA Maker → Question Answering
- TextAnalyticsClient methods (analyze_sentiment, detect_language, recognize_pii_entities, extract_summary, recognize_entities, recognize_linked_entities, extract_key_phrases)
- Translator region header
- Document Translation is async + container-based
- Custom Translator needs parallel data
- Speech voice naming: `<locale>-<NameNeural>`
- SSML elements (`<break>`, `<prosody>`, `<voice>`, `<say-as>`, `<emphasis>`)
- CNV = Limited Access + voice talent consent
- Custom Speech = transcription accuracy (no Limited Access)
- Orchestration workflow = CLU + QA together

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [**Practice Exam 1**](../Practice-Exams/Practice-Exam-1.md), then [Module 5](../Module-05-Document-Intelligence-Knowledge-Mining/Reading.md)
