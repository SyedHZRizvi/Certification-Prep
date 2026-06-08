# ✏️ Module 4 Quiz: Multi-Modal AI with Gemini

> Aim for 21/25.

---

## Questions

### Q1. Gemini's multi-modal architecture is BEST described as: *(Remember)*
A. Text-only with vision via CLIP adapter
B. Natively multi-modal, trained on text + image + audio + video jointly from scratch
C. Vision-only
D. Three separate models bundled

---

### Q2. Approximately how many tokens does a single image consume on Gemini? *(Remember)*
A. ~1 token
B. ~258 tokens (more if high-res with tiling)
C. ~10,000 tokens
D. Free

---

### Q3. Approximately how many tokens per second does Gemini bill for audio input? *(Remember)*
A. 1
B. ~32 per second
C. 1,000 per second
D. Audio is free

---

### Q4. By default, Gemini samples video at: *(Remember)*
A. 30 fps
B. 24 fps
C. **1 fps** + audio track
D. 0 fps (no video support)

---

### Q5. The MAXIMUM PDF page count Gemini accepts in one prompt is approximately: *(Remember)*
A. 10
B. 100
C. 1,000
D. 100,000

---

### Q6. For a file larger than 20MB used across multiple Gemini calls, the BEST pattern is: *(Apply)*
A. Inline base64 in every prompt
B. Files API, upload once, reference URI on subsequent calls
C. Don't use multi-modal
D. Email the file to Google

---

### Q7. Object-detection bounding boxes returned by Gemini are in: *(Remember)*
A. Pixel coordinates
B. Percent of image (0-100)
C. Normalized to 0-1000 (x_min, y_min, x_max, y_max)
D. Random units

---

### Q8. Wendy's FreshAI uses Gemini's native audio capability to: *(Apply)*
A. Replace human staff entirely
B. Eliminate the transcribe-then-LLM pipeline by handling speech-to-intent in one call (with Conversational Agents managing the order flow)
C. Generate marketing copy
D. None of the above

---

### Q9. Which Gemini tier does NOT support multi-modal input? *(Understand)*
A. Gemini 2.5 Flash
B. Gemini 2.5 Pro
C. Gemini Nano (on-device, text-mostly)
D. Gemini 2.5 Ultra

---

### Q10. A team needs to process 50K hours of training video nightly to index for search. Cheapest approach: *(Apply)*
A. Gemini Pro real-time at default fps
B. Gemini Flash (or Flash Lite) + lowered fps (e.g. 0.5) + Batch API
C. Gemini Ultra on every video
D. Don't use Gemini

---

### Q11. Diarization in audio means: *(Remember)*
A. Translating speech to another language
B. Identifying and labeling speakers in a multi-speaker recording
C. Removing background noise
D. Generating new speech

---

### Q12. To process a 600-page legal contract with per-page citations: *(Apply)*
A. Convert each page to image and submit separately
B. Submit PDF to Gemini Pro and prompt for page citations in structured output
C. Use only text extraction
D. Not possible

---

### Q13. Gemini 2.0+ can output: *(Understand)*
A. Text only
B. Text + image + audio (natively)
C. Only audio
D. Only image

---

### Q14. The Vertex AI class for wrapping a non-text modality input is: *(Remember)*
A. `Content`
B. `Part`
C. `Modal`
D. `Asset`

---

### Q15. The MAIN reason Google Photos migrated to Gemini for search: *(Analyze)*
A. Cheaper hosting
B. One model (Gemini) replaces five separate pipelines (face/object/scene/OCR/timestamp) and supports free-form semantic queries
C. Required by privacy law
D. To deprecate Android

---

### Q16. For high-volume real-time multi-modal at scale, the MOST appropriate tier is: *(Apply)*
A. Gemini Nano (on-device only)
B. Gemini 2.5 Flash (or Flash Lite if even more cost-sensitive)
C. Always Ultra
D. Always Pro

---

### Q17. The mime_type for a PDF on Vertex AI's `Part.from_uri()` is: *(Remember)*
A. `application/pdf`
B. `text/pdf`
C. `binary/pdf`
D. `pdf/document`

---

### Q18. A US hospital needs to deploy Med-PaLM 2 for radiology triage. Required architecture includes: *(Apply)*
A. Google AI Studio with API keys
B. Vertex AI + signed BAA + HIPAA-eligible region + CMEK + VPC-SC + audit logs + clinician-in-the-loop
C. Self-hosted on consumer GPUs
D. Consumer Gemini app

---

### Q19. A 5-minute video at default 1 fps with audio ≈ how many tokens? *(Analyze)*
A. ~500
B. ~5,000
C. ~87,000 (~258 × 300 frames + ~32 × 300s of audio)
D. ~10M

---

### Q20. When loading a 4MB JPEG, the BEST approach is: *(Apply)*
A. Always use Files API
B. Inline (image fits under 7MB recommendation); Files API for >20MB
C. Convert to PDF
D. Send as text

---

### Q21. Chart-reading by Gemini means: *(Understand)*
A. Generating a new chart
B. Reading axis labels and extracting data points from an image of a bar/line chart
C. Translating chart labels
D. Not supported

---

### Q22. Multi-modal output (Gemini emitting image + audio) is most usefully paired with: *(Apply)*
A. Pure text classification
B. Creative content generation, voice assistants (with Chirp TTS), educational tutorials
C. Pure SQL queries
D. None of the above

---

### Q23. Imagen 3/4 vs Gemini relationship: *(Understand)*
A. Same model
B. Imagen is Google's dedicated text-to-image family; complements Gemini in Vertex AI Model Garden
C. Imagen is deprecated
D. Imagen is third-party

---

### Q24. Which is FALSE? *(Evaluate)*
A. Image input bills approximately 258 tokens per image
B. Audio bills ~32 tokens per second
C. Multi-modal input tokens are free
D. Video samples at 1 fps by default

---

### Q25. Design challenge: A consumer-support company wants customers to upload (photo of broken product) + (voice description) + (purchase receipt PDF) and receive troubleshooting steps. 30K users/day. EU residency. The MINIMUM architecture: *(Create)*
A. Three separate model pipelines
B. Vertex AI in `europe-west1` + Gemini 2.5 Pro (multi-modal native: image + audio + PDF in one call) + structured output schema for troubleshooting steps + context caching for stable system prompt + VPC-SC + CMEK + audit logs
C. Google AI Studio with personal keys
D. Self-host Gemini (impossible, closed weights)

---

## 🎯 Answers + Explanations

### Q1: **B. Natively multi-modal**
Joint training across modalities from scratch is the architectural distinction.

### Q2: **B. ~258 tokens per image**
Larger images tile and accumulate ~258 tokens per tile.

### Q3: **B. ~32 per second**
Audio tokenization is ~32 tokens/second.

### Q4: **C. 1 fps + audio track**
Default. Tunable via VideoMetadata.

### Q5: **C. 1,000 pages**
Per-prompt PDF limit.

### Q6: **B. Files API, upload once, reference many**
Persists 48h (Gemini API) or longer in GCS (Vertex).

### Q7: **C. Normalized 0-1000**
Standard schema.

### Q8: **B. Eliminate the transcribe-then-LLM pipeline**
Native audio handles speech-to-intent in one call; Conversational Agents owns the order flow.

### Q9: **C. Gemini Nano (text-mostly on-device)**
Nano is text-oriented for on-device privacy use cases.

### Q10: **B. Flash + lowered fps + Batch API**
Stacks three cost savings.

### Q11: **B. Identifying and labeling speakers**
Speaker labeling in audio.

### Q12: **B. PDF + Gemini Pro + structured output with page citations**
The exam-favored approach.

### Q13: **B. Text + image + audio (natively in 2.0+)**
Gemini 2.0 added native multi-modal output.

### Q14: **B. `Part`**
The Vertex AI SDK class wrapping a modality.

### Q15: **B. One model replaces five pipelines**
The Google Photos rationale.

### Q16: **B. Gemini 2.5 Flash (or Flash Lite)**
High-volume real-time = Flash tier.

### Q17: **A. `application/pdf`**
Standard MIME type.

### Q18: **B. Vertex AI + BAA + region + CMEK + VPC-SC + audit + human-in-loop**
HIPAA-grade healthcare deployment requires all of these plus clinician oversight.

### Q19: **C. ~87,000 tokens**
5 × 60 × 258 + 5 × 60 × 32 = ~87,000.

### Q20: **B. Inline (under 7MB recommendation); Files API for >20MB**
Use the appropriate transport for the size.

### Q21: **B. Reading axis labels and data points from chart images**
Vision-based chart understanding.

### Q22: **B. Creative content, voice assistants, educational tutorials**
The natural pairing.

### Q23: **B. Imagen is Google's dedicated text-to-image family, complementary**
Both are in Vertex AI Model Garden.

### Q24: **C. Multi-modal input tokens are FREE, FALSE**
You pay for image/audio/video tokens.

### Q25: **B. Vertex AI EU + Gemini Pro + multi-modal in one call + caching + VPC-SC + CMEK + audit**
The canonical architecture.

---

## 📊 Score Yourself

- 24–25/25 → 🏆 Module 4 mastered.
- 21–23/25 → ✅ Solid.
- <21/25 → Re-read the tokenization + modality sections.

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 5, RAG on Google Cloud](../Module-05-RAG-Google-Cloud/Reading.md)
