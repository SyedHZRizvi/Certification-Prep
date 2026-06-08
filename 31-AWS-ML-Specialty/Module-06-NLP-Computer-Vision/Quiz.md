# ✏️ Module 6 Quiz: NLP & CV Managed Services

> 24 questions. Aim 20+/24. 35 min.

---

## Questions

### Q1. To detect sentiment on 50,000 customer reviews with minimum operational overhead: *(Apply)*
A. Train a BlazingText classifier
B. Use Amazon Comprehend `DetectSentiment`
C. Train a SageMaker XGBoost model
D. Use Amazon Polly

---

### Q2. To extract drug names and dosages from clinical notes (HIPAA-eligible): *(Apply)*
A. Amazon Comprehend
B. Amazon Comprehend Medical
C. Amazon Translate
D. Amazon Polly

---

### Q3. To translate product descriptions to 12 languages while keeping brand names intact: *(Apply)*
A. Amazon Translate with Custom Terminology
B. Amazon Polly
C. Amazon Lex
D. Amazon Comprehend

---

### Q4. To identify whether an image contains a specific company-branded product, with only ~50 labelled training images per class: *(Apply)*
A. SageMaker Image Classification from scratch
B. Amazon Rekognition Custom Labels
C. SageMaker Object Detection
D. Amazon Comprehend

---

### Q5. To extract line items + totals from PDF invoices: *(Apply)*
A. Amazon Comprehend
B. Amazon Textract `AnalyzeExpense`
C. Amazon Translate
D. SageMaker NER

---

### Q6. To build a chatbot that handles intents like "BookFlight" with slots (departure, date, destination): *(Apply)*
A. Amazon Polly
B. Amazon Lex (intent + slot model)
C. Amazon Comprehend
D. Amazon Kendra

---

### Q7. To improve real-time medical-call transcription accuracy: *(Apply)*
A. Amazon Polly
B. Amazon Translate
C. Amazon Transcribe with Custom Language Model trained on clinical text
D. Amazon Rekognition

---

### Q8. To build an internal semantic search across SharePoint, Confluence, S3, and ServiceNow: *(Apply)*
A. Amazon Comprehend
B. Amazon Kendra
C. Amazon Athena
D. Amazon Polly

---

### Q9. To recommend products to logged-in users in real time on an e-commerce site, with minimal ML expertise: *(Apply)*
A. Amazon Personalize (User-Personalization recipe)
B. SageMaker Factorization Machines (custom build)
C. Amazon Forecast
D. Amazon Rekognition

---

### Q10. To detect new-account fraud with pre-built workflows: *(Apply)*
A. Amazon Fraud Detector
B. SageMaker XGBoost
C. Amazon Lex
D. AWS Config

---

### Q11. To route low-confidence Textract extractions to human reviewers: *(Apply)*
A. Amazon SES
B. Amazon A2I (Augmented AI)
C. SageMaker Ground Truth
D. Amazon QuickSight

---

### Q12. The PRIMARY difference between Kendra and Bedrock Knowledge Bases is: *(Analyze)*
A. They are identical
B. Kendra returns a ranked list of passages (search); KB synthesises an LLM answer from those passages (RAG)
C. Kendra is for video; KB is for text
D. Kendra requires SageMaker; KB does not

---

### Q13. To extract structured key-value pairs from W-2 tax forms: *(Apply)*
A. Amazon Comprehend
B. Amazon Textract `AnalyzeDocument` with FORMS + TABLES
C. Amazon Polly
D. Amazon Translate

---

### Q14. To convert text articles to natural-sounding audio for accessibility: *(Apply)*
A. Amazon Polly (neural or generative voice)
B. Amazon Transcribe
C. Amazon Lex
D. Amazon Translate

---

### Q15. A bot must answer open-ended company-policy questions in conversational style. The BEST 2026 design is: *(Apply)*
A. Lex with hundreds of intents
B. A Bedrock Agent backed by a Knowledge Base over policy documents
C. Polly only
D. Comprehend only

---

### Q16. To forecast 30-day demand for 1,000 SKUs with no ML expertise: *(Apply)*
A. Amazon Forecast (managed AutoML for time series)
B. Amazon Kendra
C. Amazon Polly
D. Amazon Lex

---

### Q17. The minimum images per class to train a Rekognition Custom Labels classifier is approximately: *(Remember)*
A. 1,000
B. 10
C. 100,000
D. 1

---

### Q18. To find specific people in a 24/7 stream of camera footage (face matching against a known collection): *(Apply)*
A. Rekognition video `StartFaceSearch`
B. Amazon Textract
C. SageMaker DeepAR
D. Amazon Comprehend

---

### Q19. The BEST AWS service to mask SSNs and credit-card numbers in a recorded call's transcript: *(Apply)*
A. Amazon Transcribe with PII redaction
B. Amazon Comprehend `DetectPiiEntities` on the transcript
C. Both A and B are valid; A redacts during transcription, B redacts post-hoc
D. Amazon Polly

---

### Q20. Amazon Comprehend Custom Classifier supports MULTI-class AND multi-label modes: *(Remember)*
A. Only multi-class
B. Only multi-label
C. Both multi-class and multi-label
D. Neither, it is binary only

---

### Q21. The BEST AWS service to detect when factory employees are NOT wearing required helmets: *(Apply)*
A. Rekognition `DetectProtectiveEquipment` OR Custom Labels
B. SageMaker DeepAR
C. Amazon Polly
D. AWS Glue

---

### Q22. To enable an Amazon Lex bot to perform an action (e.g. "create the booking"), what handles the action? *(Understand)*
A. Comprehend
B. AWS Lambda fulfillment function
C. Textract
D. Polly

---

### Q23. A managed alternative to SageMaker DeepAR for time-series forecasting that picks the best algorithm automatically is: *(Remember)*
A. Amazon Translate
B. Amazon Forecast
C. Amazon Lex
D. Amazon Comprehend

---

### Q24. A team uses Comprehend Custom Classifier with 5 training samples per class on a 100-class problem. The MOST likely outcome is: *(Analyze)*
A. Excellent accuracy
B. Poor results, Comprehend Custom Classifier needs much more data per class; consider Bedrock zero/few-shot or larger training set
C. Equivalent to GPT-4
D. Free training

---

## 🎯 Answers + Explanations

### Q1: **B. Comprehend `DetectSentiment`**
Managed API; no training; pay per call. Custom builds are unnecessary.

### Q2: **B. Comprehend Medical**
Medical-vertical Comprehend with RxNorm / ICD-10 awareness and HIPAA eligibility.

### Q3: **A. Translate + Custom Terminology**
Custom Terminology forces specific term translations (or no-translation) for brand names.

### Q4: **B. Rekognition Custom Labels**
Custom Labels trains on as few as ~10 images per class with no SageMaker code.

### Q5: **B. Textract `AnalyzeExpense`**
Purpose-built for invoices/receipts.

### Q6: **B. Lex**
Lex is intent+slot; canonical chatbot platform.

### Q7: **C. Transcribe with Custom Language Model**
Custom LM trained on clinical text raises domain accuracy more than Custom Vocabulary alone.

### Q8: **B. Amazon Kendra**
Multi-source semantic enterprise search.

### Q9: **A. Personalize**
Managed AutoML recommender. Custom Factorization Machines is the SageMaker alternative; harder.

### Q10: **A. Fraud Detector**
Pre-built fraud workflows including new-account.

### Q11: **B. A2I**
Augmented AI provides human-in-the-loop for Textract, Comprehend, Rekognition, and custom outputs.

### Q12: **B. Kendra = search; KB = RAG-LLM answer**
Kendra ranks passages; KB feeds them into an LLM to synthesise an answer.

### Q13: **B. Textract `AnalyzeDocument` with FORMS + TABLES**
Standard structured-document extraction.

### Q14: **A. Polly (neural / generative voice)**
TTS with natural voice options. Generative voices are highest quality.

### Q15: **B. Bedrock Agent + Knowledge Base**
For open-ended Q&A, generative AI with RAG beats intent-based Lex. We cover Bedrock Agents in Module 7.

### Q16: **A. Forecast**
AutoML for time series; tries DeepAR+, ARIMA, ETS, Prophet, NPTS, CNN-QR.

### Q17: **B. ~10**
Custom Labels' headline figure, as few as 10 labelled images per class.

### Q18: **A. Rekognition `StartFaceSearch`** for video
Video pipeline for matching faces against an indexed collection.

### Q19: **C. Both, Transcribe redacts during transcription; Comprehend redacts after**
Both are valid. Transcribe PII redaction is the "during" option; Comprehend PII detection works on existing text.

### Q20: **C. Both multi-class and multi-label**
Comprehend Custom Classifier supports both modes.

### Q21: **A. Rekognition PPE OR Custom Labels**
PPE detection is built-in; Custom Labels works for company-specific helmets.

### Q22: **B. AWS Lambda fulfillment**
Lex resolves intents and slots; Lambda performs the actual action.

### Q23: **B. Amazon Forecast**
Managed AutoML for time-series; tries multiple algorithms.

### Q24: **B. Poor results, needs more data per class**
Comprehend Custom Classifier needs typically ≥10-50 samples per class; 5 is too few for 100 classes. Bedrock zero/few-shot is more sample-efficient.

---

## 📊 Score

- 22-24 → 🏆
- 19-21 → ✅
- 15-18 → ⚠️ Re-read managed-service sections
- <15 → 🔁 Restart Module 6

---

## 🃏 Add to flashcards

- Managed vs custom decision tree
- Comprehend (pre-trained + Custom Classifier + Custom Entity + Medical)
- Translate Custom Terminology + ACT
- Transcribe Custom Vocabulary vs Custom Language Model
- Rekognition (pre-trained APIs + Custom Labels + PPE + video)
- Textract (Detect / Analyze / AnalyzeExpense / AnalyzeID / AnalyzeLending / Queries)
- Lex (intent + utterance + slot + Lambda fulfillment)
- Kendra (semantic search) vs Bedrock KB (RAG)
- Personalize (recipes), Forecast (AutoML TS), Fraud Detector (workflows)
- A2I = human-in-the-loop review

➡️ [Cheat-Sheet.md](./Cheat-Sheet.md) → [Module 7](../Module-07-Bedrock-GenAI-Services/Reading.md)
