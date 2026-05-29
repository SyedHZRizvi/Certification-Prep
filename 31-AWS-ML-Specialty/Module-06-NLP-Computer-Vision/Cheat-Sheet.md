# 📋 Module 6 Cheat Sheet: NLP & CV Managed Services

> Print. Tape. Read.

---

## 🗣️ NLP Services Quick Match

| Need | Service |
|------|---------|
| Sentiment / entities / key phrases | **Comprehend** (pre-trained API) |
| Custom doc classifier | **Comprehend Custom Classifier** |
| Custom NER | **Comprehend Custom Entity** |
| Drugs / conditions (HIPAA) | **Comprehend Medical** |
| Translate text (75+ langs) | **Translate** |
| Keep brand names in translation | **Translate + Custom Terminology** |
| Real-time / batch STT | **Transcribe** |
| Domain-tuned STT | **Transcribe + Custom LM** |
| Acronym pronunciation in STT | **Transcribe + Custom Vocabulary** |
| Text → natural voice | **Polly** (neural / generative) |
| Intent-based chatbot | **Lex** |
| Open-ended conversational AI | **Bedrock Agent** (Module 7) |
| Semantic enterprise search | **Kendra** |
| RAG-LLM Q&A over corpus | **Bedrock Knowledge Base** (Module 7) |

---

## 👁️ CV Services Quick Match

| Need | Service |
|------|---------|
| Generic object/scene labels | **Rekognition `DetectLabels`** |
| Face detection / matching | **Rekognition Faces** |
| Content moderation (NSFW etc.) | **Rekognition Moderation** |
| Custom CV with little data (~10/class) | **Rekognition Custom Labels** |
| PPE compliance | **Rekognition PPE** |
| Video labels / face search | **Rekognition Video APIs** |
| OCR text from image | **Rekognition `DetectText`** (simple) OR **Textract** (structured) |
| Form / table extraction | **Textract `AnalyzeDocument`** |
| Invoice / receipt | **Textract `AnalyzeExpense`** |
| ID document | **Textract `AnalyzeID`** |
| Mortgage / lending doc | **Textract `AnalyzeLending`** |
| Natural-lang question on a doc | **Textract Queries** |

---

## 🎯 Other Managed AI

| Need | Service |
|------|---------|
| Real-time recommendations | **Amazon Personalize** |
| Time-series forecasting AutoML | **Amazon Forecast** |
| Pre-built fraud workflows | **Amazon Fraud Detector** |
| Human review of low-confidence model output | **Amazon A2I** |
| Conversational AI for codebase | **Amazon Q Developer** |
| BI Q&A in plain English | **Amazon Q in QuickSight** |
| Enterprise GenAI chat | **Amazon Q Business** |

---

## 🧭 Managed vs Custom Decision

```
1. Is there a managed L5 service for this task?
   YES → Does it meet accuracy + customisation needs?
      YES → ✅ Use it
      NO  → Custom L5 (Custom Classifier / Custom Labels / Custom LM)
            OR Bedrock fine-tune
            OR SageMaker custom
   NO  → Custom SageMaker or Bedrock
```

**Strongest "managed" signal:** *"minimum operational overhead"*, *"least code"*, *"managed service"*.

---

## 🚨 Module-6 Top Traps

| Phrase | Right answer |
|--------|-------------|
| "Sentiment on customer reviews" | **Comprehend** (managed) |
| "Detect drugs in clinical notes" | **Comprehend Medical** |
| "Translate keeping brand names" | **Translate + Custom Terminology** |
| "Classify support tickets" | **Comprehend Custom Classifier** |
| "Train CV with 10 images/class" | **Rekognition Custom Labels** |
| "Form/table from PDF" | **Textract AnalyzeDocument** |
| "Invoice extraction" | **Textract AnalyzeExpense** |
| "Intent-based chatbot" | **Lex** |
| "Open-ended company-policy Q&A" | **Bedrock Agent + KB** |
| "Semantic search SharePoint+Confluence" | **Kendra** |
| "Forecast 1000 SKUs no ML expertise" | **Forecast** |
| "Recommendation system" | **Personalize** |
| "New-account fraud" | **Fraud Detector** |
| "Human review low-confidence output" | **A2I** |
| "PII redaction from transcription" | **Transcribe PII redaction** OR Comprehend `DetectPiiEntities` |
| "Medical STT accuracy" | **Transcribe Custom LM** |
| "PPE compliance camera" | **Rekognition PPE** |

---

## ✏️ Self-Check (60 s)

1. Custom CV with <100 images → ___
2. Drugs from clinical notes → ___
3. Customer support ticket categorisation → ___
4. Enterprise semantic search → ___
5. Recommendations system → ___
6. Forms + tables from scanned PDFs → ___
7. Human review of model output → ___

➡️ [Module 7: Bedrock & GenAI](../Module-07-Bedrock-GenAI-Services/Reading.md)
