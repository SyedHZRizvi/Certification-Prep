# Module 2: AI Fundamentals for Marketers 🧠

> **Why this module matters:** Every other module of this course assumes you can pronounce "embedding," "context window," and "RAG" without flinching. This module is the foundation. You won't become an ML engineer, you'll become a marketer who can credibly run a meeting where the engineers are talking.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - [Module 1 The 2026 landscape](../Module-01-Digital-Marketing-Landscape-2026/Reading.md) POESM, funnels, walled gardens; you'll need this vocabulary
> - Basic digital fluency: knowing what a "browser," "API," and "database" are at a layperson level
> - Comfort reading a simple table of numbers (token counts, context windows in K/M)
>
> You do *not* need a CS or ML background. No math beyond arithmetic. If you've used ChatGPT or Claude once or twice, you're ready. If you've never used either, open a free tier alongside this reading, you'll get more out of it.

---

## 🎵 A Story: How Spotify Wrapped Became the Best Marketing Campaign of the 2010s

Every December, **Spotify Wrapped** crashes social feeds for one week. Hundreds of millions of users post screenshots of their "top artists" and "top songs." It is, by most measures, the single most effective annual marketing campaign in the streaming era.

Wrapped is *not* a marketing campaign. It's a data product.

Behind the scenes, Wrapped runs on a recommendation engine called **Aerosolve** (open-sourced by Spotify's research team) and a constellation of ML models that have been classifying listener behavior all year. The campaign the colors, the copy, the slick scrollable cards is the *output layer* of an AI system that has been quietly working on every user's data since January 1st.

This is the lesson:

**In 2026, the best marketing isn't AI-themed marketing. It's marketing built on top of AI infrastructure.**

You don't need to build Aerosolve. But you need to understand what kinds of AI exist, what they're good at, what they fail at, and where they connect to your job. That's what this module gives you.

---

## 🧠 What "AI" Actually Means (in marketer English)

The term "AI" has been overloaded for 60 years. For your purposes, here's the cleanest split:

| Term | Plain English | Marketing example |
|---|---|---|
| **Artificial Intelligence (AI)** | Umbrella term for "computers doing things that traditionally required human intelligence" | Auto-tagging photos, voice transcription |
| **Machine Learning (ML)** | A subfield of AI: systems that learn patterns from data instead of being explicitly programmed | Spam filters, recommendation engines, ad bidding |
| **Deep Learning** | A subfield of ML using multi-layer neural networks | Image classification, speech recognition |
| **Generative AI (GenAI)** | Models that *produce* new content (text, image, audio, video) | ChatGPT, Midjourney, Synthesia |
| **Large Language Model (LLM)** | A specific kind of generative AI trained on text | GPT-4 / 5, Claude, Gemini, Llama |
| **Foundation Model** | A large pretrained model that can be adapted to many tasks | GPT-4, Claude 3.5, Gemini 1.5, Llama 3 |

🎯 **MEMORIZE THIS.** A common exam trap is to use "AI" and "GenAI" interchangeably. They are not. AI is the umbrella; GenAI is the part that *creates* content.

---

## 📜 The Short History (so you sound informed)

| Year | Milestone |
|---|---|
| 1956 | Term "Artificial Intelligence" coined at the Dartmouth Workshop |
| 1997 | IBM Deep Blue defeats Garry Kasparov at chess |
| 2012 | AlexNet wins ImageNet, kickstarts the deep-learning era |
| 2017 | Google publishes "Attention Is All You Need", introduces the **Transformer** architecture (the basis of every modern LLM) |
| 2018 | Google BERT, first widely-used Transformer for understanding (search) |
| 2020 | GPT-3 released, first widely-known LLM with general-purpose text generation |
| 2022 | ChatGPT launches November 30, 2022, fastest-growing consumer app in history (100M users in 2 months, per UBS) |
| 2023 | GPT-4, Claude, Bard / Gemini, Midjourney v5, DALL-E 3 |
| 2024 | AI Overviews launch broadly in Google Search; multimodal models become mainstream |
| 2025–2026 | Agentic AI, longer context windows, AI-native search reaches market share |

🎯 **Exam tip:** ChatGPT's launch date (Nov 30, 2022) and the Transformer paper year (2017) appear constantly. Memorize both.

---

## 🔬 How an LLM Actually Works (in 5 minutes)

You don't need the math. You need the mental model.

### Step 1: Tokens
An LLM doesn't read words. It reads **tokens**, small fragments of text. Roughly:

> 1 token ≈ 4 characters of English ≈ ¾ of a word

The word "marketing" is one token. "Marketers" is two ("Marketer" + "s"). Whitespace counts. Apostrophes count.

**Why marketers should care:** Pricing for APIs (OpenAI, Anthropic, Google) is per-token. Context-window limits are per-token. When you write a 2,000-word prompt, you're sending ~2,700 tokens.

### Step 2: The Context Window
An LLM has a **context window**, the maximum number of tokens it can "see" at once. Whatever you put in (your prompt + system instructions + uploaded documents + chat history) plus what it outputs must fit inside the window.

| Model family | Context window (approx, 2026) |
|---|---|
| GPT-4o / GPT-4 Turbo | 128K tokens |
| Claude Opus 4 / 4.5 | 200K tokens (or 1M with extended context) |
| Gemini 1.5 Pro / 2.0 | 1M–2M tokens |
| Llama 3 / 3.1 (open source) | 8K–128K depending on variant |

**Why marketers should care:** A 1M-token context window means you can drop your entire brand book, 50 blog posts, your tone-of-voice guide, and 6 months of customer interviews into one prompt. That changes what "AI-assisted content" can be.

### Step 3: Next-Token Prediction
At its heart, an LLM is doing **one thing repeatedly**: looking at all the tokens so far and predicting the next most likely token.

> Input: "The marketing funnel has three stages: top, middle, and ___"
>
> Model: probability bottom = 0.91, base = 0.02, beginning = 0.01, ...
>
> Output: "bottom"

That's it. Everything else chatting, reasoning, citations, code generation is "predict the next token" repeated thousands of times.

### Step 4: Embeddings
Behind the scenes, every token is converted into a **vector**, a list of numbers, typically 512 to 4,096 dimensions long. Tokens with similar meanings end up with similar vectors.

This is called an **embedding**. "Marketing" and "advertising" have very similar embeddings. "Marketing" and "octopus" do not.

**Why marketers should care:** Embeddings power *semantic search*, searching by meaning, not by keyword. If your customer types "how do I get more visitors?" and your knowledge base only contains an article titled "boost website traffic," classic keyword search misses. Semantic search (via embeddings) connects them.

### Step 5: Training vs Inference
- **Training:** The expensive, multi-month process where the model learns from trillions of tokens. You will never train an LLM. (OpenAI, Anthropic, Google, Meta do.)
- **Inference:** The cheap, fast process where you send a prompt and get a response. This is what you pay for.

🧠 **Memory mnemonic:** "T**T**ECT", **T**okens, **T**ransformer, **E**mbeddings, **C**ontext window, **T**raining/inference.

---

## 🎯 Foundation Models, Compared

The 2026 foundation-model landscape has roughly five families that matter for marketers:

| Family | Maker | Strengths for Marketing | Weaknesses |
|---|---|---|---|
| **GPT-4 / GPT-4o / GPT-5** | OpenAI | Best-in-class reasoning; widest tool ecosystem; integrations with Microsoft 365 | Closed-source; data residency concerns for EU |
| **Claude (Opus / Sonnet / Haiku)** | Anthropic | Excellent long-form writing; large context windows; strong safety record | Slightly more expensive per token at the high end; smaller tool ecosystem |
| **Gemini (1.5 / 2.0)** | Google | Best multimodal (text + image + video); deep Google Workspace integration | Newer; quality has been uneven on creative writing |
| **Llama 3 / 3.1** | Meta | Open-source, you can host it yourself; free | Requires technical setup; smaller variants weaker |
| **Mistral / Mixtral** | Mistral AI | Strong open-source European option (EU-AI-Act friendly) | Smaller ecosystem |

🎯 **MEMORIZE THIS.** When a Google or HubSpot exam asks "which AI tool would you use for X?", the honest answer is usually "any of the major frontier models." But know the families.

> **Pricing note (as of writing):** Frontier model pricing changes constantly. ChatGPT Plus has historically been in the $20/month range; ChatGPT Team and Enterprise tiers higher. Claude Pro and Gemini Advanced are typically in the same ballpark. Always check the provider's current pricing page before quoting numbers in client work.

---

## 🍰 Prompting vs RAG vs Fine-Tuning, The Three Levels

This is the most important conceptual distinction in this module. You will be asked about it on every AI-flavored marketing exam.

### Level 1: Prompting
You write a clear instruction and the model responds.

**Use when:** You need a one-off creative artifact, a brainstorm, a draft, a translation, a summarization. 90% of marketing use cases live here.

### Level 2: RAG (Retrieval-Augmented Generation)
Before answering, the system *retrieves* relevant documents from your own knowledge base, then feeds those documents into the model along with your question.

**Architecture:** Your docs → embedded into vectors → stored in a vector database → user question is also embedded → top-K most-similar docs retrieved → docs + question fed to LLM → LLM answers grounded in your docs.

**Use when:** You need the model to answer using *your* knowledge your brand voice, your product docs, your case studies, your support tickets that wasn't in its training data.

**Real-world example:** A SaaS company's "AI support agent" that answers using their help center is almost always RAG, not fine-tuning.

### Level 3: Fine-Tuning
You take a foundation model and continue training it on your own dataset, permanently shifting its behavior.

**Use when:** You need a specific *style* (your CMO's writing voice across thousands of examples), a specific *domain language* (legal, medical, pharma), or a specific *output format* the base model struggles with.

**Cost vs benefit:** Fine-tuning typically costs $100s–$10,000s and takes hours-to-days. It's overkill for most marketing tasks. **RAG covers 80% of "we want our own AI" use cases.**

### Comparison Table

| Capability | Prompting | RAG | Fine-Tuning |
|---|---|---|---|
| Cost | $ | $$ | $$$ |
| Setup time | Minutes | Days | Weeks |
| Up-to-date data? | No | Yes (recent docs) | No (frozen at training) |
| Style control | Limited | Limited | Strong |
| Domain knowledge | Limited | Strong (any docs you load) | Strong (if data is good) |
| Best marketing use | Drafts, brainstorms, repurposing | Customer-facing AI, knowledge-base chat, brand-voiced content | Specialized voice, regulated industries |

🎯 **Exam tip:** "We want our AI assistant to reference our own product docs" → **RAG**, almost always. "We want our AI to write in our CEO's voice across thousands of past articles" → fine-tuning is reasonable.

---

## 👻 Hallucinations: The #1 Risk

An LLM is a next-token predictor. It does not "know" anything. When it doesn't have the right information, it doesn't say "I don't know", it generates a plausible-sounding answer that may be **completely false**.

This is called a **hallucination**.

Famous examples:

- A New York lawyer was sanctioned in **June 2023** for filing a brief that cited six entirely fictional court cases generated by ChatGPT (*Mata v. Avianca*, S.D.N.Y.).
- Bard's launch demo in February 2023 contained a false claim about the James Webb Space Telescope; Google's market cap dropped roughly $100 billion that day.

**Practical marketing rules:**
1. **Never** publish an AI-generated stat without verifying.
2. **Never** quote a source the AI provided without checking the source exists.
3. **Always** human-review AI-generated copy for factual claims.
4. Use **RAG** when you need the model to be grounded in real, verifiable documents.
5. Use **temperature: 0** (or "low" in tools that hide the slider) for factual tasks; higher temperature = more creative + more hallucination-prone.

Nielsen Norman Group's 2024 research on AI in customer-facing contexts (*"The AI Trust Gap,"* Pernice & Whitenton) found that even a single high-confidence hallucination destroys user trust for the entire session. Plan accordingly.

---

## 🎨 Beyond Text: Multimodal AI

In 2026, "AI" no longer means just text. The marketer toolkit now includes:

| Modality | Top tools (2026) | Marketing use |
|---|---|---|
| **Text generation** | ChatGPT, Claude, Gemini, Jasper, Copy.ai | Blog posts, ad copy, email |
| **Image generation** | Midjourney, DALL-E 3+, Stable Diffusion, Adobe Firefly, Ideogram | Ad creative, social posts, hero images |
| **Video generation** | Runway, Sora (OpenAI), HeyGen, Synthesia, Pika | Short video ads, talking-head explainers |
| **Audio / voice** | ElevenLabs, OpenAI Voice, Descript, Murf | Podcasts, dubs, voiceovers |
| **Translation** | DeepL, Google Translate, ChatGPT, Claude | Multilingual content |
| **Transcription / summarization** | Otter.ai, Fireflies, Whisper (OpenAI), Krisp | Meetings → notes → blog posts |
| **Analytics / sentiment** | MonkeyLearn, Brandwatch, Sprinklr, native platform AIs | Social listening, review mining |

We'll go deeper on each of these in Modules 4 and 5.

---

## 🛠️ Step-by-Step Tutorial: Your First Marketing Prompt Library

Open ChatGPT, Claude, or Gemini and try this exercise, it takes about 20 minutes.

### Tutorial 1: A Repeatable Prompt Template

Most beginners type "write me a blog post about X" and get bland output. Better-than-average marketers use a **structured prompt template**. Here's one that consistently outperforms ad-hoc prompts (this is the structure HubSpot teaches in its 2024 *AI for Marketers* course).

```
ROLE: You are a [specific role with experience].
CONTEXT: [Brand, audience, what they care about, voice.]
TASK: [Exactly what you want produced.]
CONSTRAINTS: [Word count, format, what to avoid, must-include.]
EXAMPLES: [1–3 examples of the kind of output you want.]
OUTPUT FORMAT: [Markdown, bullet, table, etc.]
```

### Tutorial 2: Apply It

Paste this into ChatGPT or Claude and see how it compares to "write me a blog post":

```
ROLE: You are a content strategist with 10 years of experience
       writing B2B SaaS blog posts.

CONTEXT: Our brand is a project management SaaS called "Stride"
       targeting agency owners (5–50 employees). Our voice is
       warm, plainspoken, and avoids buzzwords like "synergy."

TASK: Draft a 700-word blog post titled
       "Why your agency's Monday standup is killing morale
       (and what to replace it with)."

CONSTRAINTS:
- Open with a 2-paragraph story about a fictional agency owner.
- Include a comparison table of "old standup" vs "async update."
- End with a CTA to download a free async-standup template.
- Do not use the words "synergy," "leverage," or "ecosystem."
- Subheadings in title case.

EXAMPLES: [Paste one of your own past blog intros here.]

OUTPUT FORMAT: Markdown with H2 subheadings.
```

You will get a usable draft on the first try. Iterate from there.

### Tutorial 3: Save Your Best Prompts

Create a Notion page (or Google Doc) titled "My Prompt Library." Each entry has:

- Title
- Use case (e.g. "Blog intro hooks")
- The exact prompt
- What model you used
- Notes on what worked

This *is* the prompt-library exercise marketing teams talk about. Start it today; you'll thank yourself in 6 months when you have 50 battle-tested prompts.

We will return to this in Module 10.

---

## ⚖️ A Quick Word on Ethics, Bias, and Copyright

This is a teaser, Module 9 covers it in depth.

- LLMs are trained on the open internet, which is full of biased text. Models can reproduce or amplify race, gender, age, and economic biases. The MIT Media Lab's *Gender Shades* project (Buolamwini, 2018) was the canonical study that surfaced this for facial recognition; for text, more recent work by Anthropic and OpenAI on "constitutional AI" and RLHF attempts to mitigate it.
- LLMs sometimes reproduce copyrighted text verbatim. The *New York Times v. OpenAI* lawsuit (December 2023, ongoing) is the load-bearing test case.
- Generated content disclosure is increasingly regulated. The EU AI Act (passed 2024) requires clear labeling of AI-generated content in certain contexts; US states are following.

For now, the practical marketer rules:

1. Disclose AI-generated content when it's deceptive not to (FTC has enforced this since 2023).
2. Don't input customer PII into a public LLM without consent.
3. Don't use AI to impersonate a real person without permission.
4. Keep your CMO and legal counsel briefed on what you're doing.

---

## 🚨 Common Misconceptions to Unlearn

| Misconception | Reality |
|---|---|
| "AI understands what I mean" | AI predicts next tokens. It doesn't understand. It correlates. |
| "AI is always faster" | For complex tasks, prompt-engineering + verification can take longer than writing yourself. |
| "AI replaces writers / designers" | AI replaces *first drafts*. Editorial judgment, brand voice, fact-checking are still human work. |
| "Bigger model = always better" | Larger models cost more and are slower. For many tasks, Sonnet-tier beats Opus-tier on cost/value. |
| "Free ChatGPT is the same as Plus" | Free tiers throttle, lose memory faster, use older models. For pro work, pay. |
| "Fine-tuning is the answer" | RAG solves 80% of "use my data" problems faster and cheaper. |
| "Prompts are a one-shot art" | Best marketers use repeatable prompt *templates*, version-controlled. |
| "AI is private" | Public models log prompts by default. For confidential data, use enterprise tiers or self-hosted. |

---

## ⚠️ Exam Traps to Watch For

1. **AI vs ML vs GenAI vs LLM.** Know the umbrella relationship.
2. **Token vs word.** 1 token ≈ ¾ of a word. Not the same.
3. **Context window vs training data.** Context = what you give it right now. Training data = what it learned during pretraining (months/years ago).
4. **RAG vs Fine-Tuning.** RAG retrieves docs at query time. Fine-tuning rewrites the model's weights.
5. **Temperature.** Higher = more creative + more hallucination. Lower = more factual + more boring.
6. **Hallucination ≠ bug.** It's a feature of next-token prediction. Mitigate, don't expect to eliminate.

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|---|---|
| **AI** | Computers doing tasks that traditionally required human intelligence |
| **ML** | Subfield of AI: systems learn from data |
| **Deep Learning** | ML using multi-layer neural networks |
| **Generative AI** | Models that produce new content |
| **LLM** | Large Language Model (text-based generative AI) |
| **Foundation Model** | Large pretrained model adaptable to many tasks |
| **Transformer** | The 2017 architecture behind every modern LLM |
| **Token** | A small text fragment (~¾ of a word) |
| **Context Window** | The max tokens a model can "see" at once |
| **Embedding** | A vector representation of meaning |
| **Vector Database** | A database optimized for semantic search over embeddings |
| **Inference** | Running the model on a prompt (the cheap part) |
| **Training** | Building the model from scratch (the expensive part) |
| **Pretraining** | The first big training stage on broad data |
| **Fine-Tuning** | Continued training on your own data |
| **RAG** | Retrieval-Augmented Generation, model + your docs |
| **Hallucination** | Plausible-sounding false output |
| **Temperature** | How "random" the model's output is |
| **Prompt Engineering** | The craft of writing instructions that get good output |
| **Multimodal** | Models that handle text + image + audio + video |
| **Agentic AI** | AI that takes multi-step actions on your behalf |

---

## ✅ Module 2 Summary

You now know:

- 🧠 The taxonomy: AI > ML > Deep Learning > GenAI > LLM > Foundation Model
- 📜 The history milestones (Transformer 2017, ChatGPT Nov 2022)
- 🔬 How an LLM actually works: tokens, context window, next-token prediction, embeddings, training vs inference
- 🎯 The five foundation-model families (OpenAI, Anthropic, Google, Meta, Mistral)
- 🍰 The three levels of "use AI on your data": prompting, RAG, fine-tuning
- 👻 What hallucinations are and how to mitigate them
- 🎨 The multimodal toolkit (text, image, video, audio, translation, transcription)
- 🛠️ How to structure a reusable prompt template (ROLE/CONTEXT/TASK/CONSTRAINTS/EXAMPLES/OUTPUT)

**Next steps:**
1. 🎥 Watch the videos in [Videos.md](./Videos.md)
2. ✏️ Take the [Quiz](./Quiz.md), aim for 20/24
3. 📋 Print the [Cheat Sheet](./Cheat-Sheet.md)
4. ➡️ Move to [Module 3: SEO in the AI Era](../Module-03-SEO-in-the-AI-Era/Reading.md)

---

> **Where this leads.**
> - Inside this course: Module 3 applies LLM mechanics to GEO/AEO (how Overviews extract content); Module 4 turns the prompt template into a content workflow; Module 9 deepens the bias, copyright, and Constitutional AI threads.
> - Cross-course: `15-AI-Marketing-Practitioner` Module 2 covers AI portfolio decisions at the executive level; `16-AI-Marketing-Strategist` Module 3 builds RAG and agentic flows on the foundations from here.
> - Practice: Practice Exam 1 has 5–7 questions on tokens, RAG, hallucinations, and model families. Final Mock Exam adds harder cross-module synthesis (e.g. "RAG vs fine-tune for a regulated industry").

---

## 💼 Case Study, Klarna (2024)

**Situation.** Klarna, the Swedish buy-now-pay-later fintech, ran a global customer-service operation supporting roughly 150 million consumers across 45 markets in 23 languages. By late 2023, the cost of human-staffed support across an outsourced agent network of approximately 700 full-time-equivalents had become a major operating-margin drag, and Klarna's then-IPO trajectory put intense pressure on cost-to-serve. The CEO Sebastian Siemiatkowski had been publicly enthusiastic about generative AI since the launch of ChatGPT, and Klarna had been one of the first major non-tech enterprises to sign an OpenAI enterprise partnership.

**Decision.** In February 2024 Klarna publicly disclosed that, after a one-month live test, it had deployed an **OpenAI-powered customer-service assistant** capable of handling roughly two-thirds of all consumer-service chats end-to-end (without escalation to a human agent). The assistant ran on a fine-tuned + RAG-grounded GPT-4 stack using RAG over Klarna's own help-center articles, refund policies, and consumer dispute records, with a multi-language layer wrapping the model. The system was designed to do "the work of 700 full-time agents" those 700 had been employed via an outsourced contract that Klarna chose not to renew.

**Outcome.** Klarna's own public Q1 2024 release reported: 2.3 million conversations handled by the AI assistant in its first month; customer-satisfaction scores statistically indistinguishable from human-agent baselines; resolution times reduced from an average of 11 minutes (human) to under 2 minutes (AI); estimated annual cost savings of **~$40 million**. The story drove a wave of coverage in *The Wall Street Journal*, *Bloomberg*, and *Fortune*, and became the canonical 2024 reference for "this is what generative AI actually does at enterprise scale." Subsequent reporting in 2025 surfaced a caveat, Klarna later announced it would re-hire some human agents for complex disputes, suggesting the 2/3 ratio was not the ceiling but a steady-state mix.

**Lesson for the exam / for practitioners.** Klarna is the most-cited 2024 reference for the *RAG-plus-LLM enterprise pattern* taught in this module: a foundation model (GPT-4) is the engine, but the deployment-grade system layered RAG over Klarna's own first-party documents (refund policies, help center, dispute history). That's not "fine-tuning" and it's not "prompt engineering alone", it's the middle layer (RAG) doing 80% of the value lift. The case also illustrates the hallucination-mitigation discipline: customer service is a high-trust context, so Klarna grounded the model in verifiable internal documents rather than relying on the model's pretraining. The exam-relevant principle: when a case asks "we want our AI to answer using our knowledge base in our brand voice," the right answer is almost always **RAG + a strong system prompt**, not fine-tuning.

**Discussion (Socratic).**
- Q1: Klarna's reported figure of "700 FTEs replaced" was widely covered, but later reporting suggested it brought some human agents back for complex cases. If you were Klarna's CMO or CTO in early 2024, how would you have framed the 700-agent number publicly without either overstating the win or understating the legitimate productivity gain?
- Q2: The official answer here is RAG over fine-tuning. Why does RAG win for Klarna's customer-service use case specifically, and what kind of use case (give a concrete example) would have made fine-tuning the right call instead?
- Q3: Klarna implicitly accepted the trade-off that ~1/3 of conversations still need human escalation. What's the dimension along which that 1/3 is distributed, and is the "best" remaining human work the *hardest* cases or the *most ambiguous-policy* cases? Defend a routing strategy.

---

## 💬 Discussion, Socratic prompts

1. **RAG vs fine-tuning under a regulatory constraint.** Your company sells a regulated SaaS product (think healthcare or legal-tech). The CMO wants an AI assistant that answers prospect questions in your CEO's voice while citing FDA-approved language verbatim. A consultant insists you must fine-tune. Your engineer counters: "RAG over our documents + a strong system prompt for voice is faster and cheaper." Walk through the trade-offs. Which is the right call, and what's the smallest hybrid that buys you 90% of the benefit?
2. **Token-cost economics of "drop everything in context."** A 1M-token context window enables you to stuff brand books, all past blog posts, and customer interviews into a single prompt. But each call now costs roughly 100× a small prompt. When is this the right call (use the math) and when is it negligent of cost? Pick a sample marketing use case and defend a specific token budget.
3. **The hallucination floor.** An LLM is a next-token predictor. By that definition, hallucination is *inherent*, not a bug. Yet many marketers shipping AI-assisted content assume the next model version will "fix" it. Construct the argument that hallucination cannot be eliminated, only contained, and then construct the strongest counter-argument that retrieval, grounding, and verification *together* effectively reach the user-trust threshold. Where exactly is the line?
4. **Model-family selection for a marketing team.** You're choosing between GPT-5, Claude (Opus 4.5), Gemini 2.0, Llama 3.1 (self-hosted), and Mistral. Set up a decision framework with at least 4 criteria (cost, EU data residency, brand-voice fidelity, ecosystem) and explain which model wins for a small e-commerce brand vs an EU bank's marketing team. Be prepared to defend each criterion's weight.
5. **The "AI replaces marketers" debate, re-examined.** The reading says "AI replaces tasks, not jobs." A senior copywriter argues the opposite: AI's quality has reached a point where the *category* of "junior marketing copywriter" is functionally obsolete and pretending otherwise is dishonest career advice. Steelman both positions. Where do you actually draw the line, and what does that mean for what a 2026 marketing entry-level hire should learn first?

---

## 📚 Further Reading (Optional)

- 📖 *Generative AI for Everyone*, Andrew Ng (DeepLearning.AI, free Coursera audit). The most marketer-friendly intro to LLMs in existence.
- 📖 *"Attention Is All You Need"*, Vaswani et al., 2017. The Transformer paper. You don't need the math; skim the abstract.
- 📰 *Harvard Business Review*, "How Generative AI Is Changing Creative Work" (Brynjolfsson, Li, Raymond, 2023).
- 📰 *MIT Sloan Management Review*, multiple 2024–2025 case studies on enterprise GenAI adoption.
- 📰 *Anthropic Research*, read at least one post; the "Constitutional AI" paper is the most cited safety reference.
- 📰 Nielsen Norman Group, "The AI Trust Gap" (Pernice & Whitenton, 2024). UX research with implications for every AI-facing marketer.
- 📰 McKinsey *State of AI* (annual), usage stats and ROI benchmarks.
