# 📋 Module 4 Cheat Sheet: NLP

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 🗣️ Azure AI Language Feature Map

| Feature | Method (Python) | Use case |
|---|---|---|
| Language detection | `detect_language` | Unknown text → ISO code |
| Sentiment + opinion | `analyze_sentiment(show_opinion_mining=True)` | Reviews |
| Key phrases | `extract_key_phrases` | Quick topic tags |
| NER | `recognize_entities` | People/places/orgs |
| Entity linking | `recognize_linked_entities` | + Wikipedia URLs |
| PII | `recognize_pii_entities` | Redact SSNs, emails |
| Summarization | extractive (sentences) / abstractive (paragraph) | Long docs |
| Health | `begin_analyze_healthcare_entities` | Medical entity + relations |
| Custom Text Classification | Custom (multi-class or multi-label) | Your domain labels |
| Custom NER | Custom | Your entity types |
| **CLU** | Replaces LUIS | Chatbot intents + entities |
| **Question Answering** | Replaces QnA Maker | Knowledge-base Q&A |

🧠 **Renames to memorize:** LUIS → **CLU**, QnA Maker → **Question Answering**.

---

## 🌐 Translator Quick Reference

| Mode | Use |
|---|---|
| **Text Translation** | Translate strings between 100+ languages |
| **Document Translation** | Async batch, source+target Storage containers, preserves format |
| **Custom Translator** | Train on parallel corpora; reference by `category` |
| **Transliteration** | Script conversion only |

🚨 **Region header** required: `Ocp-Apim-Subscription-Region`.

```python
client = TextTranslationClient(credential=AzureKeyCredential(key), region="eastus")
client.translate(content=[InputTextItem(text="Hello")], to_language=["es","fr"])
```

---

## 🎤 Speech Quick Reference

| Capability | Notes |
|---|---|
| Speech-to-Text (STT) | Real-time SDK or **batch transcription** (REST + Storage) |
| Text-to-Speech (TTS) | 400+ neural voices: `en-US-JennyNeural` |
| Speech translation | `TranslationRecognizer` — STT + translate in one call |
| **Custom Speech** | Improve transcription on domain audio (GA) |
| **Custom Neural Voice (CNV)** | Train your brand voice — **Limited Access + voice talent consent** |
| **Speaker Recognition** | Verify/Identify speakers — **Limited Access** |

### SSML essentials

```xml
<speak version="1.0" xml:lang="en-US">
  <voice name="en-US-JennyNeural">
    <prosody rate="-10%" pitch="+2st">Hello</prosody>
    <break time="500ms"/> world.
  </voice>
</speak>
```

Tags: `<voice>`, `<prosody>` (rate/pitch/volume), `<break>`, `<say-as>` (date/time), `<emphasis>`, `<mstts:express-as>` (style/role).

---

## 🔀 Service Selection

| Task | Service |
|---|---|
| Detect language of text | Language → `detect_language` |
| Translate strings | Translator → `translate` |
| Translate PDF preserving format | Document Translation |
| Mask SSNs / emails | Language → PII detection |
| Topic phrases from a review | Language → `extract_key_phrases` |
| Chatbot intent ("BookFlight") | CLU |
| FAQ answer ("How do I reset password?") | Question Answering |
| Combine intents + FAQ | Orchestration workflow |
| Voice-driven app | Speech SDK (STT/TTS) |
| Live multilingual meeting | Speech translation |
| Brand voice | Custom Neural Voice (Limited Access) |
| Domain transcription | Custom Speech |

---

## 🏆 Exam Power Phrases

**Usually right**:

- ✅ "Use Conversational Language Understanding (CLU)"
- ✅ "Use Question Answering, not QnA Maker"
- ✅ "Use Custom Translator with a category ID"
- ✅ "Batch transcription for long audio"
- ✅ "Orchestration workflow combines CLU + QA"

**Usually wrong**:

- ❌ "Use LUIS" / "Use QnA Maker"
- ❌ "Real-time STT for 5-hour audio"
- ❌ "Translator without the region header"
- ❌ "CNV with no Limited Access"

---

## ⚠️ Anti-Patterns

- ❌ Training a model and forgetting to **deploy** it (custom features)
- ❌ Using abstractive summarization when you need verifiable citations
- ❌ Translating documents synchronously (use Document Translation async)
- ❌ Treating PII detection as "names only" — many categories supported
- ❌ Using CNV for any prototype (it's gated)

---

## ✏️ Quick Self-Check

1. New name for LUIS? For QnA Maker? ___
2. Translator header required for global resource? ___
3. Difference between extractive and abstractive summarization? ___
4. CNV gating requirements? ___
5. SSML tag for slower speech rate? ___

If you can answer all 5 in 60 seconds, you own Module 4. ✅

---

## 🎤 STT Mode Comparison

| Mode | Latency | Max input | Cost shape | Best for |
|---|---|---|---|---|
| Real-time SDK | <300ms | ~30 min | Per-second | Live captions, voice commands |
| Batch (REST) | Async (mins-hrs) | Hours | Per-second + storage | Recorded meetings, hours of audio |
| Whisper (Azure OpenAI) | Per-call | 25 MB / file | Per-second | Quick transcribe with LLM downstream |
| Speech translation | Real-time | ~30 min | Per-second | Multilingual meetings |

## 🛡️ Voice + Identity Limited Access

| Feature | Why gated |
|---|---|
| **Custom Neural Voice** | Deepfake / impersonation risk; needs voice-talent consent recording per RAI Standard v2 |
| **Speaker Recognition (Verify/Identify)** | Biometric voice-print; GDPR Article 9 special-category data |
| **Custom Person in Video Indexer** | Same biometric concerns as Face Identification |

## 📐 Case-Study Pattern

| Scenario | Composition |
|---|---|
| Multilingual customer support (Walmart Sparky) | Language + Translator + Speech + Orchestration |
| HIPAA voice intake | Custom Speech (no CNV) + PII Detection + region-pinned Translator |
| Legal-domain DOCX translation | Document Translation + Custom Translator (category) |
| Voice-enabled Teams bot | Bot Service + Direct Line Speech + CLU + QA |
| Long-form meeting summarization | Batch STT → Extractive Summarization → optional Abstractive |

## 📚 Named References

| Concept | Source |
|---|---|
| Transformer | Vaswani et al. (2017), *Attention Is All You Need* |
| BERT (encoder) | Devlin et al. (2018) |
| GPT-3 (decoder) | Brown et al. (2020) |
| Microsoft RAI Standard v2 | Microsoft (June 2022) |
| EU AI Act deepfake disclosure | Reg (EU) 2024/1689 |

---

➡️ [Practice Exam 1](../Practice-Exams/Practice-Exam-1.md) — checkpoint! · then [Module 5](../Module-05-Document-Intelligence-Knowledge-Mining/Reading.md)
