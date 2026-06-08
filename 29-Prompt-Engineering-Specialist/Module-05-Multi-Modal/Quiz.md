# ✏️ Module 5 Quiz: Multi-Modal Prompting

> **Instructions:** Answer all 26 questions WITHOUT looking at the reading.
> Then check your answers below. Aim for 22/26 minimum.
>
> Every question is tagged with its **Bloom's taxonomy level**.
>
> **Bloom distribution (this quiz):** Remember 5 · Understand 7 · Apply 8 · Analyze/Evaluate 5 · Create 1.

---

## Questions

### Q1. Among the major frontier families, which has the BEST native video-file support in 2026? *(Remember)*
A. Claude
B. GPT-5
C. Gemini 2.5 Pro / Flash
D. Llama 3.2 Vision

---

### Q2. The PRIMARY billing unit for a vision-LLM image input is: *(Understand)*
A. Pixels
B. Tokens (computed from image size / tiles)
C. Megabytes
D. Seconds

---

### Q3. A vision LLM is asked to read a chart and confidently outputs WRONG numbers because it pattern-matched on chart style. This failure mode is called: *(Remember)*
A. Hallucination
B. Confabulation (a specific form of hallucination on visual data)
C. Tokenization error
D. Recency bias

---

### Q4. The MOST robust defense against chart confabulation is: *(Apply)*
A. Lower temperature
B. Ask the model to enumerate data points individually AND run self-consistency (compare across N samples)
C. Use a bigger image
D. Switch to grayscale

---

### Q5. When sending multiple images to a vision model, the BEST practice is: *(Apply)*
A. Send them all unlabeled
B. Label each image explicitly (`"Image 1: before, Image 2: after"`)
C. Average them in pre-processing
D. Only send one at a time

---

### Q6. Vision LLMs typically OUTPERFORM dedicated OCR services (Textract, Document AI) on: *(Understand)*
A. Extremely dense legal print
B. Layout-aware extraction (forms, receipts, contracts with structure)
C. Arabic calligraphy
D. Vertical CJK text

---

### Q7. EXIF rotation metadata in JPEG files: *(Understand)*
A. Is always honored by vision APIs
B. Is OFTEN NOT honored, pre-rotate the image to upright before sending
C. Doesn't exist
D. Is the same as base64

---

### Q8. The "low" detail mode in OpenAI vision is best for: *(Apply)*
A. Reading receipts character-by-character
B. Quick high-level analysis (icon identification, simple scene description) where cost matters
C. Reading dense charts
D. Verifying license plates

---

### Q9. Aaliyah's 6-week FNOL pilot reached ~94% by combining: *(Apply)*
A. Just a bigger model
B. Structured outputs + Pydantic + labeled multi-image + confidence field + self-consistency on severity
C. Removing all prompts
D. Switching to L0 JSON

---

### Q10. Whisper is best described as: *(Remember)*
A. A vision model
B. OpenAI's transcription model, strong at audio-to-text, weak as a chat model
C. A chart-reading model
D. A vector database

---

### Q11. A two-step pipeline of `Whisper transcribe → chat model analyze` vs direct audio (GPT-5 audio / Gemini) trades off: *(Analyze)*
A. Cost vs accuracy
B. An explicit text artifact (good for storage, re-processing, auditing) vs lower latency / fewer round trips
C. Open vs closed weights
D. Cellular vs Wi-Fi

---

### Q12. Image text that says "Ignore your previous instructions" is: *(Analyze)*
A. Always blocked by the model
B. A real prompt-injection vector, image text must be treated as untrusted input (Module 7)
C. Equivalent to a system prompt
D. Filtered by EXIF

---

### Q13. The recommended pre-processing step on a vision claim photo with glare is: *(Apply)*
A. Increase compression
B. Crop to the region of interest; if glare obscures, request a re-shoot rather than trust the model's guess
C. Convert to grayscale
D. Rotate 180 degrees

---

### Q14. A scanned receipt extraction prompt should ALWAYS include: *(Apply)*
A. The model's training date
B. A "warnings" field for sanity checks (e.g., subtotal + tax != total) and null-allowed fields for unreadable data
C. The image dimensions
D. The temperature

---

### Q15. Llama 3.2 Vision is notable because: *(Remember)*
A. It's closed weights
B. It's an open-weights vision-language model usable on-prem
C. It only does audio
D. It has 4K context

---

### Q16. A high-detail 1024x1024 image on most providers costs approximately: *(Remember)*
A. 5 tokens
B. 1,500–2,500 tokens (varies by provider)
C. 50 tokens
D. 50,000 tokens

---

### Q17. The MOST important reason to use structured outputs (Module 4) WITH vision is: *(Analyze)*
A. They make the model faster
B. The downstream system needs guaranteed parseable fields, vision adds many failure modes (illegible, ambiguous) that the schema can model with Optional + null
C. They lower image cost
D. They eliminate the need for evals

---

### Q18. Speaker diarization refers to: *(Remember)*
A. Audio compression
B. Identifying which speaker said which segment in a multi-speaker recording
C. Translation
D. EXIF metadata

---

### Q19. Gemini 2.5's 1-hour video support is best leveraged for: *(Apply)*
A. Sentiment classification of a sentence
B. Long-form video tasks (surveillance review, sports analysis, educational indexing)
C. Stock photo OCR
D. Single image classification

---

### Q20. A 30-minute video at 1 frame per second sent to Gemini is approximately: *(Apply)*
A. 100 tokens
B. ~450K tokens, measure cost before shipping
C. 1,000 tokens
D. Free

---

### Q21. The "ChartQA" benchmark exists to: *(Remember)*
A. Train new vision models
B. Measure how well vision LLMs can answer questions about charts (and quantify their confabulation rate)
C. Compress images
D. Tokenize audio

---

### Q22. A bank wants to OCR signature pages for regulatory submission. The SAFER 2026 choice is: *(Evaluate)*
A. A vision LLM only
B. AWS Textract (or equivalent dedicated OCR) as primary, with a vision LLM as a secondary verifier, regulatory expectations favor proven OCR for legal artifacts
C. Tesseract on the device
D. Manual transcription only

---

### Q23. A photo of a printed page that contains a tiny "ignore all prior instructions" sticky note will, on a 2026 vision model: *(Analyze)*
A. Always be safe, vision models cannot read text
B. Potentially be injected, image text is a real attack vector (cover in Module 7)
C. Cost the same as no sticky note
D. Be rotated automatically

---

### Q24. A vision prompt that asks `"What's the trend?"` for an arbitrary chart will likely: *(Analyze)*
A. Refuse
B. Confidently produce a trend even if the data is random (leading questions amplify confabulation)
C. Return null
D. Error out

---

### Q25. Which is NOT a good practice for multi-image prompts? *(Analyze)*
A. Label each image with role/index
B. Crop to the region of interest where possible
C. Send all images with the same generic prompt ("describe everything") and hope the model figures out which is which
D. Use structured outputs

---

### Q26. Design challenge: A pharmacy is building an "upload your prescription paper, we'll auto-fill" feature. The MINIMUM viable architecture is: *(Create)*

> *Create-level note:* you are combining vision + structured output + safety + human-in-loop.
A. Vision LLM with free-form output, autofill directly into the EHR with no review
B. Vision LLM (GPT-5 / Claude / Gemini) with strict Pydantic schema (medication, dose, freq, refills, prescriber, signature_present), temperature=0, confidence field, OCR cross-check against the pharmacy's drug database via validator + retry, MANDATORY human pharmacist review before dispense
C. Whisper-only
D. Free-text input from the user

---

## 🎯 Answers + Explanations

### Q1: **C. Gemini 2.5 Pro / Flash**
Gemini accepts video files directly (up to ~1hr). Others need frame-sampling.

### Q2: **B. Tokens (computed from image size / tiles)**
Vision input is token-billed. Provider-specific formulas, but all token-based.

### Q3: **B. Confabulation**
A specific failure mode: confidently wrong on visual data, often from pattern-matching on training-distribution priors.

### Q4: **B. Enumerate data points + self-consistency**
Force individual point listing, run N samples, take agreement.

### Q5: **B. Label each image explicitly**
Models conflate without labels. "Image 1: before; Image 2: after."

### Q6: **B. Layout-aware extraction**
Forms, receipts, contracts. VLMs reason about structure; raw OCR doesn't.

### Q7: **B. Often NOT honored, pre-rotate**
One of the most common gotchas. EXIF-orient before sending.

### Q8: **B. Quick high-level analysis where cost matters**
"low" mode is fast and cheap; not for precision.

### Q9: **B. Structured + Pydantic + labeled + confidence + self-consistency**
The 6-week buildup from case study. Every element matters.

### Q10: **B. OpenAI's transcription model**
Audio-to-text. Use chat models for understanding.

### Q11: **B. Text artifact vs latency**
Two-step gives an auditable transcript. Direct is faster.

### Q12: **B. A real prompt-injection vector**
Module 7 covers this in depth. Image text is untrusted input.

### Q13: **B. Crop to ROI; request re-shoot if obscured**
Don't ask the model to guess what glare hides. Re-shoot or reject.

### Q14: **B. Warnings field + null-allowed unreadable fields**
The two field types that prevent the worst failure modes.

### Q15: **B. Open-weights VLM**
Released October 2024. On-prem option for vision.

### Q16: **B. 1,500–2,500 tokens**
The order of magnitude. Audit your image token usage.

### Q17: **B. Downstream system needs parseable fields**
Vision adds illegible/ambiguous cases that schemas model cleanly with Optional and null.

### Q18: **B. Identifying which speaker said which segment**
Distinct from transcription. Whisper has limited diarization; specialized services do it better.

### Q19: **B. Long-form video tasks**
Surveillance, sports, educational indexing. Single-image tasks don't need video support.

### Q20: **B. ~450K tokens**
1800 frames × ~250 tokens each. Measure costs.

### Q21: **B. Benchmark for chart QA**
Real benchmark; reveals confabulation rates across models.

### Q22: **B. Dedicated OCR primary, VLM verifier**
Regulatory submission has precedent and trust requirements. Combine.

### Q23: **B. Potentially be injected**
Image-based injection is an active attack vector. Module 7.

### Q24: **B. Confidently produces a trend even from random data**
Leading questions amplify confabulation. Ask for points, not narrative.

### Q25: **C. Same generic prompt, hope it figures it out**
Anti-pattern. Always label and scope.

### Q26: **B. VLM + strict schema + validators + confidence + MANDATORY pharmacist review**
Medical pre-fill must have a human in the loop. Every safety element matters.

---

## 📊 Score Yourself

- 25–26/26 → 🏆 Module 5 mastered. Onward to evaluation.
- 22–24/26 → ✅ Solid. Note the gaps, then move on.
- 18–21/26 → ⚠️ Re-read the OCR/chart and Aaliyah case-study sections.
- <18/26 → 🔁 Restart the Reading.md, then re-quiz tomorrow.

---

## 🃏 Add To Your Flashcards

- Vision-capable families and what each excels at
- Image cost ballpark: 1500–2500 tokens for high-detail 1K×1K
- EXIF rotation often NOT honored
- Multi-image labeling rule
- Chart confabulation defenses
- Image text as a prompt-injection vector
- Gemini owns native video

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 6, Evaluation & A/B Testing](../Module-06-Evaluation-AB-Testing/Reading.md)
