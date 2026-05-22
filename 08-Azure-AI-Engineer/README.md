---
permalink: /08-Azure-AI-Engineer/
title: Azure AI Engineer Track (AI-102)
---

# 🤖 Azure AI Engineer Track (AI-102)

> **Goal:** Pass the Microsoft Certified: Azure AI Engineer Associate (AI-102) exam at 700/1000 or higher
> **Duration:** 6 weeks part-time
> **Cost:** $165 USD (renewable annually with a free online assessment)

---

## 🎯 What You'll Learn

By the end of this track, you'll be able to:
- Provision and authenticate against Azure AI services using keys, Entra ID, and managed identity
- Build computer-vision pipelines with Azure AI Vision, Custom Vision, and the Face service
- Wire up NLP solutions with the Azure AI Language service, Translator, and Speech
- Extract structured data from documents with Document Intelligence (formerly Form Recognizer)
- Stand up a RAG (retrieval-augmented generation) app with Azure AI Search + Azure OpenAI
- Deploy and govern generative AI models from Azure AI Foundry (formerly AI Studio)
- Apply Microsoft's Responsible AI principles with Content Safety, prompt shields, and groundedness checks
- Read and write the Python SDK calls the exam loves to test

---

## 📚 The 8 Modules

| # | Module | Time | What You'll Master |
|---|--------|------|--------------------|
| 1 | [AI Services Overview](./Module-01-AI-Services-Overview/Reading.md) | 2 hrs | Resource types, keys/endpoints, SDKs, auth |
| 2 | [Responsible AI & Content Safety](./Module-02-Responsible-AI-Content-Safety/Reading.md) | 2 hrs | RAI principles, Content Safety, prompt shields, groundedness |
| 3 | [Computer Vision](./Module-03-Computer-Vision/Reading.md) | 3 hrs | Image Analysis 4.0, Face, Custom Vision, OCR/Read |
| 4 | [Natural Language Processing](./Module-04-Natural-Language-Processing/Reading.md) | 3 hrs | Language service, Translator, Speech (STT/TTS) |
| 5 | [Document Intelligence & Knowledge Mining](./Module-05-Document-Intelligence-Knowledge-Mining/Reading.md) | 3 hrs | Prebuilt + custom models, AI Search, vectors, semantic ranker |
| 6 | [Conversational AI](./Module-06-Conversational-AI/Reading.md) | 2 hrs | Bot Service, CLU, Question Answering, orchestration |
| 7 | [Azure OpenAI Service](./Module-07-Azure-OpenAI-Service/Reading.md) | 3 hrs | Deployments, prompts, fine-tuning, content filters, On Your Data |
| 8 | [Build Generative AI Apps](./Module-08-Build-GenAI-Apps/Reading.md) | 3 hrs | Azure AI Foundry, prompt flow, eval, RAG, Semantic Kernel, agents |

**Total study time:** ~21 hours of reading + 10 hours of videos + 8 hours of quizzes/labs = **~40 hours**

---

## 🧪 Practice Exams (Located in `Practice-Exams/`)

| Exam | When To Take It | Length | Difficulty |
|------|-----------------|--------|------------|
| [Practice-Exam-1](./Practice-Exams/Practice-Exam-1.md) | After Modules 1–4 | 28 Q / 50 min | ⭐⭐⭐ |
| [Practice-Exam-2](./Practice-Exams/Practice-Exam-2.md) | After Modules 5–8 | 45 Q / 80 min | ⭐⭐⭐⭐ |
| [Final-Mock-Exam](./Practice-Exams/Final-Mock-Exam.md) | One week before the real exam | 55 Q / 100 min | ⭐⭐⭐⭐⭐ |

**Plus:** Microsoft Learn ships a free official practice assessment for AI-102 — burn through it twice. You should be hitting 80%+ before you book.

---

## 📖 The Single Most Important Resource

🔗 **[Official AI-102 Study Guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-102)** — Microsoft updates the skills outline every few months. Print the latest one. If the study guide lists a service, make sure you can:
1. Provision it from the portal AND with the Azure CLI
2. Authenticate against it with both key and Entra ID
3. Call its top endpoint with the Python SDK
4. Recall its main pricing tier difference (free vs standard)

Pair the study guide with the **[Microsoft Learn AI-102 learning path](https://learn.microsoft.com/en-us/training/courses/ai-102t00)** — free, hands-on labs included.

---

## 🎓 What Is The AI-102 Exam?

| Detail | Specification |
|--------|---------------|
| Full name | Microsoft Certified: Azure AI Engineer Associate |
| Exam code | AI-102 |
| Provider | Microsoft / Pearson VUE |
| Cost | $165 USD (varies by country) |
| Time | 100 minutes (plus ~15 min admin) |
| Questions | 40–60 (typically ~50) |
| Pass mark | 700 / 1000 (~70%) |
| Format | Multiple choice, multiple answer, case studies, drag-and-drop, hot area |
| Delivery | Online (proctored) or Pearson VUE test center |
| Validity | 1 year — renew free online via Microsoft Learn |
| Prereqs | None official, but you'll suffer without Azure Fundamentals knowledge |

### Domain Weights (Current as of 2025)

| Domain | Weight |
|--------|--------|
| Plan and manage an Azure AI solution | 15–20% |
| Implement decision support solutions | 10–15% |
| Implement computer vision solutions | 15–20% |
| Implement natural language processing solutions | 15–20% |
| Implement knowledge mining and document intelligence | 15–20% |
| Implement generative AI solutions | 10–15% |

---

## 🚦 Recommended Path (6-Week Plan)

```
Week 1: Module 1 (AI Services) + Module 2 (Responsible AI)
        → Build a multi-service resource, call it from Python
Week 2: Module 3 (Computer Vision)
        → OCR a receipt, train a Custom Vision classifier
Week 3: Module 4 (NLP)
        → Sentiment + translation + speech-to-text demo
        → Take PRACTICE EXAM 1
Week 4: Module 5 (Document Intelligence + AI Search)
        → Index a PDF library, run vector + semantic queries
Week 5: Module 6 (Conversational AI) + Module 7 (Azure OpenAI)
        → Deploy GPT-4o, wire On Your Data to your AI Search index
Week 6: Module 8 (Build GenAI Apps) + REVIEW
        → Build a prompt flow in Foundry, run eval
        → Take PRACTICE EXAM 2, then FINAL MOCK
        → BOOK THE EXAM
```

---

## ⚠️ The 7 Most Common Reasons People Fail AI-102

1. ❌ Studied AWS AI services and assumed Azure works the same way (it does NOT)
2. ❌ Memorized service names but couldn't tell which SDK method to call in a code snippet
3. ❌ Confused Azure AI Search **indexer** with **index** with **skillset** (3 different things)
4. ❌ Didn't practice the difference between **prebuilt** and **custom** Document Intelligence models
5. ❌ Skipped Responsible AI because "it's just policy" — it's 10%+ of the exam
6. ❌ Tried to memorize old terminology — Microsoft renamed half the services (Form Recognizer → Document Intelligence, Cognitive Services → Azure AI services, AI Studio → AI Foundry)
7. ❌ Underestimated case-study questions — they look like 1 question but are actually 4–6 sub-questions

---

## 🧰 What You'll Need

- An **Azure subscription** with $200 free credit (sign up at <https://azure.microsoft.com/free>)
- **Python 3.10+** with `pip install azure-ai-vision-imageanalysis azure-ai-textanalytics azure-ai-formrecognizer azure-search-documents openai azure-identity`
- **Azure CLI** (`az login` working)
- **VS Code** with the Azure and Python extensions
- **Azure AI Foundry** access (request through the portal — usually instant)
- **Azure OpenAI access** — submit the form at <https://aka.ms/oai/access>. Approval takes 1–2 days. **Do this on day 1.**

---

## 🎬 Start Here

👉 [**Module 1: Azure AI Services Overview**](./Module-01-AI-Services-Overview/Reading.md)

Build small. Break things. Ship often. You got this. 💪
