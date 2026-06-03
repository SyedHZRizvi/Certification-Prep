# Module 4: Natural Language Processing 🗣️

> **Why this module matters:** NLP is 15–20% of AI-102 and is split across three services — Azure AI Language, Translator, and Speech. The exam tests each by SDK call shape, by feature name, and by service selection. Don't mix them up.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - The Azure AI resource model + auth — [Module 1](../Module-01-AI-Services-Overview/Reading.md)
> - Responsible-AI principles (PII Detection sits here for a reason) — [Module 2](../Module-02-Responsible-AI-Content-Safety/Reading.md)
> - Optional but helpful: the attention/transformer mental model from Vaswani et al. (2017), *"Attention Is All You Need"*, NeurIPS — every modern NLP feature in this module descends from that line of work.
>
> If you've never written a Python function that calls an HTTP API, walk through Module 1's snippets first.

---

## 🍕 A Story: Maya Goes Global

Maya's app is now in 14 countries. Users:

- Write reviews in 30 languages → she wants **sentiment** + **translation** to English
- Submit support tickets with personal info → she needs to **redact PII**
- Talk to her chatbot by voice → she needs **speech-to-text** in any language
- Get a voice response → **text-to-speech** with a localized voice

That's literally the AI-102 NLP triad: **Language** (text understanding), **Translator** (multi-language), **Speech** (voice in + voice out). Let's break each one down.

---

## 🗣️ Azure AI Language — One Service, Many Features

Azure AI Language is what you used to call Text Analytics + LUIS + QnA Maker, all merged. One endpoint, many features, mostly through **`analyze_text`** or **`begin_analyze_actions`**.

### Pretrained features (no training required)

| Feature | What it does | Returns |
|---|---|---|
| **Language Detection** | Identify language of text | ISO code + confidence (e.g. `en`, 0.99) |
| **Sentiment Analysis** | Document + per-sentence sentiment | `positive` / `neutral` / `negative` + scores |
| **Opinion Mining** | Aspect-based sentiment ("the food was great but service was slow") | Targets + assessments |
| **Key Phrase Extraction** | Top phrases | List of strings |
| **Named Entity Recognition (NER)** | Find entities (people, places, orgs, dates) | Entity + type + offset |
| **Entity Linking** | Link entities to Wikipedia | Entity + URL |
| **PII Detection** | Detect + redact PII (names, SSNs, emails, etc.) | Entities + redacted text |
| **Summarization** | Extractive or abstractive summary | Sentences (extractive) or paragraph (abstractive) |
| **Text Analytics for Health** | Medical entities + relations | Entities + UMLS links |
| **Custom Text Classification** | Your own labels (single/multi) | Predicted classes |
| **Custom NER** | Your own entities | Custom entities |
| **CLU (Conversational Language Understanding)** | Intent + entity recognition for chatbots | Top intent + entities |
| **Question Answering** | Knowledge-base Q&A (replaces QnA Maker) | Best answer + confidence |
| **Native Document Support** | Run features on PDF/DOCX/PPTX directly | Same outputs, no preconversion |

### Python (the call you should know cold)

```python
from azure.ai.textanalytics import TextAnalyticsClient
from azure.core.credentials import AzureKeyCredential

client = TextAnalyticsClient(endpoint, AzureKeyCredential(key))

docs = ["I love Azure but the docs are confusing.", "Estoy muy contento con el servicio."]

# Sentiment
for r in client.analyze_sentiment(docs, show_opinion_mining=True):
    print(r.sentiment, r.confidence_scores)

# Language detection
for r in client.detect_language(docs):
    print(r.primary_language.iso6391_name)

# PII redaction
for r in client.recognize_pii_entities(docs):
    print(r.redacted_text)
```

### REST shape

```http
POST /language/:analyze-text?api-version=2023-04-01
Content-Type: application/json
Ocp-Apim-Subscription-Key: <KEY>

{
  "kind": "SentimentAnalysis",
  "analysisInput": {
    "documents": [{ "id": "1", "language": "en", "text": "..." }]
  },
  "parameters": { "opinionMining": true }
}
```

`kind` switches the feature. The pattern is the same for `LanguageDetection`, `KeyPhraseExtraction`, `EntityRecognition`, etc.

### Summarization: extractive vs abstractive

| | Extractive | Abstractive |
|---|---|---|
| What it does | Picks the most important sentences from the source | Generates new sentences that summarize |
| Risk | Sentences feel disjointed | Can hallucinate |
| Cost | Lower | Higher (LLM-backed) |
| Use when | You need traceable highlights | You want a polished paragraph |

🎯 **Exam pattern:** *"Generate a 3-sentence paragraph summary"* → abstractive. *"Highlight the 3 most important sentences"* → extractive.

### Custom features workflow (Custom Text Classification, Custom NER, CLU)

Same pattern as Custom Vision:

1. **Create project** in [Language Studio](https://language.cognitive.azure.com/)
2. **Tag** training data (labels for classification, entity spans for NER, intents+entities for CLU)
3. **Train** a model
4. **Deploy** the model to a named deployment slot
5. **Predict** by calling the prediction endpoint with the deployment name

Training data lives in **Azure Storage** (BYOS) and is referenced from your Language resource.

### CLU vs Question Answering — the chatbot brains

| | CLU | Question Answering |
|---|---|---|
| Replaces | LUIS | QnA Maker |
| Use when | You want **intent + entity** routing ("BookFlight intent + origin=NYC entity") | You have a **knowledge base** of Q/A pairs ("How do I reset my password?") |
| Input | Free-text utterances | Free-text questions |
| Output | Top intent + slot entities | Best answer + confidence |
| Backend data | Labeled utterances | Knowledge base (URLs, FAQs, chitchat) |

You'll combine them via **Orchestration workflow** in Module 6.

---

## 🌐 Azure AI Translator

A standalone service (kind: `TextTranslation`) for multilingual translation.

| Capability | What it does |
|---|---|
| **Text Translation** | Translate strings between 100+ languages |
| **Document Translation** | Translate whole files (PDF, DOCX, PPTX) preserving format — uses Azure Storage |
| **Custom Translator** | Train your own translation model on parallel domain corpora |
| **Transliteration** | Convert script (e.g. Japanese → Latin) without translating meaning |
| **Detection** | Detect input language (similar to Language service) |

### Code

```python
from azure.ai.translation.text import TextTranslationClient
from azure.ai.translation.text.models import InputTextItem
from azure.core.credentials import AzureKeyCredential

client = TextTranslationClient(
    credential=AzureKeyCredential(key),
    region="eastus"   # Translator needs region for global resource
)
result = client.translate(
    content=[InputTextItem(text="Hello, world")],
    to_language=["es", "fr"]
)
print(result[0].translations[0].text)  # "Hola, mundo"
```

🚨 **Trap on the exam:** Translator is a **global** service by default, but the request **must include the region header** (`Ocp-Apim-Subscription-Region`) of your Translator resource. The Python SDK does this for you if you pass `region=`.

### Document Translation

- Async, batch-based
- Source + target containers in Azure Storage
- Uses SAS URLs (or managed identity)
- Preserves DOCX/PPTX formatting

### Custom Translator

For domain-specific translations (legal, medical, gaming, etc.):

1. Collect **parallel data** (source + target sentence pairs, 10K+ recommended)
2. Upload as a **document**, **tuning set**, and **test set**
3. Train a custom model
4. Publish to a category ID
5. Call Translator with the `category` parameter

---

## 🎤 Azure AI Speech

Speech is its own resource (`SpeechServices`). Three main capabilities + customization.

| Capability | What it does | Common scenarios |
|---|---|---|
| **Speech-to-Text (STT)** | Transcribe audio to text | Live captioning, voice commands |
| **Text-to-Speech (TTS)** | Synthesize text into audio | IVR, accessibility, audiobooks |
| **Speech Translation** | Translate spoken language to text in another | Live multilingual meetings |
| **Speaker Recognition** | Verify or identify a speaker (**Limited Access**) | Voice authentication |

### Speech SDK pattern (STT)

```python
import azure.cognitiveservices.speech as speechsdk

cfg = speechsdk.SpeechConfig(subscription=key, region="eastus")
cfg.speech_recognition_language = "en-US"
audio = speechsdk.AudioConfig(filename="meeting.wav")

recognizer = speechsdk.SpeechRecognizer(speech_config=cfg, audio_config=audio)
result = recognizer.recognize_once()
print(result.text)
```

### Speech SDK pattern (TTS)

```python
cfg = speechsdk.SpeechConfig(subscription=key, region="eastus")
cfg.speech_synthesis_voice_name = "en-US-JennyNeural"
synth = speechsdk.SpeechSynthesizer(speech_config=cfg)
synth.speak_text_async("Hello, this is Jenny.").get()
```

### Voices and SSML

Microsoft's **Neural Voices** (e.g. `en-US-JennyNeural`, `es-MX-DaliaNeural`) sound human. **Custom Neural Voice** lets you train a voice from recordings — **Limited Access**.

You can shape voice output with **SSML** (Speech Synthesis Markup Language):

```xml
<speak version="1.0" xml:lang="en-US">
  <voice name="en-US-JennyNeural">
    Hello, <break time="500ms"/>
    <prosody rate="-10%" pitch="+2st">welcome to Azure AI.</prosody>
  </voice>
</speak>
```

SSML controls **rate**, **pitch**, **volume**, **breaks**, **pronunciation**, **emphasis**, even **speaking styles** ("cheerful", "sad") for voices that support them.

### Customization

| Custom thing | What you train |
|---|---|
| **Custom Speech (acoustic + language model)** | Improve transcription on your audio domain (noisy factory, medical jargon) — upload audio + transcripts |
| **Custom Pronunciation** | Phonetic spelling for unusual words |
| **Custom Neural Voice (CNV)** | Train a unique speaker voice — **Limited Access** |
| **Voice Talent attestation** | Required when training CNV — voice talent must consent on recording |

### Real-time vs Batch transcription

- **Real-time** — SDK call, streams audio, low latency, ~30 minutes max
- **Batch transcription (REST)** — upload audio files in Azure Storage, async job, ideal for hours of audio

### Speech translation

One Speech call can transcribe AND translate at once:

```python
cfg = speechsdk.translation.SpeechTranslationConfig(subscription=key, region="eastus")
cfg.speech_recognition_language = "en-US"
cfg.add_target_language("es")
recognizer = speechsdk.translation.TranslationRecognizer(translation_config=cfg)
result = recognizer.recognize_once()
print(result.translations["es"])
```

---

## ⚖️ Service Selection Cheat Sheet

| Task | Service |
|---|---|
| Detect what language a string is in | Azure AI Language → `detect_language` |
| Translate strings | Translator → `translate` |
| Translate a whole PDF preserving format | Translator → Document Translation |
| Train a translator for legal jargon | Custom Translator |
| Transcribe a voice memo | Speech STT (real-time or batch) |
| Speak text in Jenny's voice | Speech TTS with `en-US-JennyNeural` |
| Custom corporate voice | Custom Neural Voice (Limited Access) |
| Live English→Spanish translation of a meeting | Speech translation |
| Mask SSNs in a chat message | Language → PII detection |
| Build a chatbot's intent routing | Language → CLU |
| Knowledge-base Q&A | Language → Question Answering |
| 5-sentence article summary in paragraph form | Language → Abstractive Summarization |
| Top 3 sentences from a long document | Language → Extractive Summarization |

---

## ⚠️ Common Misconceptions

| Misconception | Reality |
|---|---|
| "Translator and Speech translation are the same" | Translator = text in/text out. Speech translation = audio in/text out |
| "PII detection only catches names" | It catches names, addresses, SSNs, credit cards, phone numbers, dates of birth, etc. (configurable categories) |
| "CLU replaces QnA Maker" | No — **CLU replaces LUIS**, **Question Answering replaces QnA Maker** |
| "TTS only has 5 voices" | 400+ neural voices across 140 locales |
| "Custom Speech requires CNV approval" | CNV is Limited Access; Custom Speech (transcription) is not |
| "SSML is optional" | You always send SSML under the hood — the SDK builds it from text+config |
| "Translator doesn't need a region header" | It does — `Ocp-Apim-Subscription-Region` |

---

## 🚨 Exam Traps

1. **CLU vs LUIS naming.** LUIS is retired — pick CLU for new projects.
2. **QnA Maker vs Question Answering.** QnA Maker is retired.
3. **Translator region header** is required for global resources.
4. **Document Translation is async**, returns operation status; not a synchronous call.
5. **Custom Neural Voice** requires both Limited Access approval AND voice talent attestation.
6. **Abstractive summarization** can hallucinate — extractive is safer when traceability matters.
7. **Speech-to-text** has multiple flavors: real-time, batch (REST), Whisper (Azure OpenAI). Know which fits the scenario.

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|---|---|
| **Azure AI Language** | Unified service for sentiment, NER, PII, summarization, CLU, QA |
| **Sentiment Analysis** | Positive/neutral/negative + per-sentence + opinion mining |
| **Opinion Mining** | Aspect-based sentiment (targets + assessments) |
| **PII Detection** | Finds & redacts personally identifiable info |
| **Extractive Summarization** | Picks key sentences from source |
| **Abstractive Summarization** | Generates new summary sentences (LLM-backed) |
| **CLU** | Conversational Language Understanding — intent + entity (replaces LUIS) |
| **Question Answering** | KB-based Q&A in Language service (replaces QnA Maker) |
| **Language Studio** | Portal UI for training custom Language models |
| **Translator** | Standalone service for text/document/custom translation |
| **Document Translation** | Async, batch translation that preserves doc format |
| **Custom Translator** | Train your own translation model from parallel corpora |
| **Speech-to-Text (STT)** | Transcribe audio |
| **Text-to-Speech (TTS)** | Synthesize audio from text |
| **Neural Voice** | High-quality TTS voice (e.g. JennyNeural) |
| **Custom Neural Voice** | Train your own brand voice (Limited Access) |
| **SSML** | Markup for TTS — rate, pitch, breaks, styles |
| **Real-time vs Batch transcription** | SDK streaming vs REST async file job |
| **Speech Translation** | One Speech call that recognizes + translates audio |
| **Speaker Recognition** | Verify or identify a speaker (Limited Access) |

---

## 📖 Case Study — Walmart "Sparky" Shopping Assistant (2024)

**Situation.** Walmart, the world's largest retailer by revenue, faced the post-2023 reality that its 250M+ weekly customers expected conversational, multilingual, multimodal shopping help — including voice. In April 2024, Walmart publicly announced **Sparky**, its generative-AI-powered shopping assistant, with Microsoft and OpenAI as part of the technology stack (Walmart corporate communications, April 2024; corroborated at Microsoft Build 2024 and Walmart's 2024 *Investor Community Meeting*; verified 2026-05).

**Decision.** Sparky composes the entire NLP triad covered in this module:

- **Azure AI Language** for input understanding — Sentiment Analysis on review prompts ("show me a kid-friendly version"), PII Detection so customer-uploaded photos / questions don't carry SSNs into the prompt context, and CLU for command intents ("track my order").
- **Azure AI Translator** for multilingual flows — Walmart serves customers in dozens of languages across its global stores; Translator handles real-time text in/out plus Document Translation for international compliance documents (e.g., supplier contracts).
- **Azure AI Speech** for voice in/out — STT (real-time + batch), TTS using Neural Voices for accessibility, and Speech Translation in pilot markets.
- An **Orchestration Workflow** routes between Sparky's CLU command intents and a Question Answering knowledge base over Walmart's help-center content.

Critically, the team applied **Responsible AI** controls from Module 2: PII Detection upstream of every GPT-4o prompt; gender_neutral_caption equivalents in image-rich flows; Translator's region-header was set correctly so EU customer text stayed in EU Data Zones for GDPR.

**Outcome.** By H2 2024, Sparky had been rolled out broadly across Walmart's online surface area. Walmart's investor-day materials cited a measurable lift in conversion among assistants users vs control. Microsoft used Sparky as a flagship reference at Build 2024 and again at Ignite 2024 for "enterprise GenAI with composed Azure AI services" — exactly the pattern this module teaches.

**Lesson for the exam / for practitioners.** Walmart did not pick one NLP service — they composed all three (Language + Translator + Speech) with Orchestration on top. This is how the exam's case studies are written; this is how the real world looks. The principle: choose services by *task type*, then layer them; don't force an LLM to do work the specialized service does better (cheaper, faster, more compliant).

**Discussion (Socratic).**
- Q1: Walmart could have used Azure OpenAI's GPT-4o for translation and skipped Translator. Build the strongest argument for that choice (one model, fewer services) and against (Translator is purpose-built, cheaper, region-pinned, supports Document Translation for compliance docs, has a Custom Translator for retail-domain jargon). Where do you draw the line?
- Q2: PII Detection sits *before* the prompt. From a Responsible AI standpoint, why is "redact then prompt" almost always better than "prompt then redact"? Defend the inverse for at least one scenario.
- Q3: Walmart's Spanish-language flows used Translator with EU/US data-zone pinning. Argue the equivalent design for a healthcare provider that needs HIPAA + multilingual support — what changes? What stays the same?

---

## 💬 Discussion — Socratic prompts

1. **CLU vs Question Answering vs Orchestration.** A retail chatbot needs both "track my order" (command) and "what's your return policy?" (FAQ). One PM proposes a single GPT-4o prompt with both tools. Another proposes the canonical Azure stack (CLU + QA + Orchestration). Walk through the trade-offs (latency, cost, maintainability, fallback behaviour, observability). At what conversation volume does each architecture decisively beat the other?
2. **Custom Translator's economics.** Training a Custom Translator model for legal terminology takes a parallel corpus of ~10K sentence pairs and engineering time. Argue both sides at a CFO meeting: when does the per-token translation savings + accuracy lift make it a winning investment, and when does the engineering time make it overkill?
3. **Extractive vs Abstractive summarization.** Build the strongest case for extractive (no hallucination risk, citations point to source sentences) AND for abstractive (better reads, paragraph-style summary). For a clinical note-summarization product, which would you ship in 2026, and why?
4. **Custom Neural Voice's ethical edge.** Microsoft's Custom Neural Voice is Limited Access *and* requires recorded voice-talent consent. Walk through why those two layers (Microsoft gate + customer-side consent) exist redundantly. Argue both sides of "redundant controls": efficiency-minded engineers might trim one; an EU AI Act regulator might say neither is enough.
5. **The region-header trap.** Translator's global resource needs `Ocp-Apim-Subscription-Region` in the request. From a Cornell systems-design view, what does that API decision tell you about how Microsoft thought about cross-region routing? What would the better design look like, and why was that design rejected?

---

## ✅ Module 4 Summary

You now know:

- 🗣️ Azure AI Language's full feature set — sentiment, PII, NER, summarization, CLU, QA, custom
- 🌐 Translator's three modes — text, document, custom — and the region-header gotcha
- 🎤 Speech's STT/TTS/Translation + customization (Custom Speech, CNV)
- 🧩 SSML for fine-grained voice control
- 🔀 Service selection across Language vs Translator vs Speech
- 🚨 Renaming gotchas (LUIS → CLU, QnA Maker → Question Answering)
- 📖 Walmart "Sparky" as the composed Language + Translator + Speech case study (2024)

**Next steps:**
1. 🎥 Watch [Videos.md](./Videos.md)
2. ✏️ Take [Quiz.md](./Quiz.md)
3. 📋 Review [Cheat-Sheet.md](./Cheat-Sheet.md)
4. 🧪 Take [**Practice Exam 1**](../Practice-Exams/Practice-Exam-1.md) — you now have the foundation for Modules 1–4
5. ➡️ Move to [Module 5: Document Intelligence + AI Search](../Module-05-Document-Intelligence-Knowledge-Mining/Reading.md)

---

> **Where this leads.**
> - Inside this course: Module 6 wires CLU + Question Answering into Bot Service for production conversational AI; Module 7 covers when Azure OpenAI **replaces** a NLP feature (e.g., GPT-4o for abstractive summarization) and when it complements one.
> - Cross-course: [`07-AWS-AI-Practitioner`](../../../07-AWS-AI-Practitioner/) covers Comprehend / Translate / Polly / Transcribe for cross-cloud comparison.
> - Practice: Practice Exam 1 has ~9 questions from this module (the largest single-module share in PE1); Final Mock revisits with Speech / Translator / Language case studies.

---

## 📚 Citations & Named References

- **Vaswani et al. (2017).** *"Attention Is All You Need."* NeurIPS 2017. The transformer foundation under every modern NLP feature here.
- **Devlin et al. (2018).** *"BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding."* The encoder-only line that powers many of Language service's classification / NER models.
- **Brown et al. (2020).** *"Language Models are Few-Shot Learners."* (GPT-3 paper, NeurIPS 2020) — the lineage that culminates in GPT-4o.
- **Microsoft Responsible AI Standard v2** (June 2022) — drove Custom Neural Voice's Limited Access policy and voice-talent attestation requirements.
- **EU AI Act** (Regulation (EU) 2024/1689, June 2024) — synthetic voice / deepfake disclosure obligations.
- **Walmart corporate communications (April 2024)** — public Sparky announcement; verified at Microsoft Build 2024 and Walmart investor-day materials, 2026-05.
- **Microsoft Mechanics** (2024) — *Azure AI Language deep dive* and *Azure AI Speech: Custom Neural Voice* episodes.

---

## 📚 Further Reading (Optional)

- 📖 [Azure AI Language documentation](https://learn.microsoft.com/en-us/azure/ai-services/language-service/)
- 📖 [Translator documentation](https://learn.microsoft.com/en-us/azure/ai-services/translator/)
- 📖 [Azure AI Speech documentation](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/)
- 📖 [Language Studio](https://language.cognitive.azure.com/)
- 📖 [SSML reference](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/speech-synthesis-markup)
- 📖 [Neural voices gallery](https://speech.microsoft.com/portal/voicegallery)
- 📖 [Custom Neural Voice (Limited Access)](https://aka.ms/customneural)
