# Module 6: Conversational AI 💬

> **Why this module matters:** AI-102's "decision support" + parts of "NLP" domains cover the chatbot stack: Azure AI Bot Service, Bot Framework, CLU, Question Answering, and how they fit together through orchestration workflows. This module ties Module 4's NLP services into deployable bots.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - Module 1 (auth, identities)
> - Module 4 (CLU + Question Answering at the SDK level)
> - Basic REST + WebSocket mental model
> - Optional: project-management chapters from [`02-PMP`](../../../02-PMP/) for "user journey" framing if you've never designed a chatbot conversation flow
>
> If "intent" and "entity" feel new, return to Module 4's CLU section first.

---

## 🍕 A Story: Maya's Helpful Bot

Maya needs a customer-support bot. Users will ask three kinds of things:

1. **FAQ**, "How do I reset my password?" → answer from a knowledge base
2. **Commands**, "Schedule a meeting for tomorrow at 3pm" → parse intent + entities
3. **Small talk**, "Hello", "Thanks" → polite chitchat

She uses **Question Answering** for #1, **CLU** for #2, and **Question Answering's chitchat add-on** for #3. To choose between #1, #2, #3 at runtime, she uses an **Orchestration workflow**. The bot itself lives in **Azure AI Bot Service** and integrates with Teams, Slack, and the web via channels.

That's the whole module in one paragraph. Now let's go deeper.

---

## 🤖 Azure AI Bot Service, The Hosting Layer

Bot Service is Azure's managed hosting for bots built with the **Bot Framework SDK**. It handles:

- **Compute**, runs your bot on Azure App Service / Functions
- **Identity**, provisions the bot's Azure AD app registration
- **Channels**, Web Chat, Teams, Slack, Telegram, Direct Line, etc.
- **Authentication**, Azure AD, OAuth providers for users
- **State**, turn state, conversation state, user state (in storage of your choice)

You author bots with one of:

- **Bot Framework SDK** (C#, JavaScript/TypeScript, Python, Java), code-first
- **Power Virtual Agents / Copilot Studio**, low-code (less common on AI-102)
- **Bot Framework Composer** visual editor on top of the SDK (deprecated for new work Microsoft now points to Copilot Studio + Foundry)

### Channels, the Bot Service magic

You write a bot ONCE. The bot exposes a single endpoint that speaks the **Bot Framework Activity protocol**. Bot Service then converts incoming/outgoing messages to/from the channel's format.

| Channel | Notes |
|---|---|
| Web Chat | iframe embed for websites |
| Microsoft Teams | Add the bot to Teams; rich card support |
| Direct Line | Custom client integration (mobile apps) |
| Direct Line Speech | Voice in/out via Speech SDK |
| Slack | Slack workspace integration |
| Telegram | Public messenger |
| Facebook Messenger | Public messenger |
| Email / SMS | Lower-rich-interaction channels |

🎯 **Exam pattern:** *"Add a bot to a corporate Teams workspace without rewriting it"* → connect the **Teams channel** to your existing bot.

---

## 🧱 Bot Framework SDK, Core Concepts

A Bot Framework bot is a **REST endpoint** that receives `Activity` messages and replies asynchronously.

### Concepts you must recognize

| Concept | What it is |
|---|---|
| **Turn** | One inbound activity + the bot's response |
| **Activity** | The message envelope (`message`, `typing`, `event`, etc.) |
| **Adapter** | Translates channel-specific messages to/from Bot Framework activities |
| **Turn context** | Per-turn object with sender info, services, state accessors |
| **Dialog** | A unit of multi-turn conversation logic |
| **Waterfall Dialog** | A sequential set of dialog steps |
| **Component Dialog** | A self-contained dialog you can compose into others |
| **State Property Accessor** | Read/write turn / conversation / user state |
| **Middleware** | Cross-cutting concerns (logging, translation) |

### Minimal Python skeleton

```python
from botbuilder.core import ActivityHandler, TurnContext
from botbuilder.schema import ChannelAccount

class EchoBot(ActivityHandler):
    async def on_message_activity(self, turn_context: TurnContext):
        await turn_context.send_activity(f"You said: {turn_context.activity.text}")

    async def on_members_added_activity(self, members_added, turn_context):
        for m in members_added:
            if m.id != turn_context.activity.recipient.id:
                await turn_context.send_activity("Hello! I'm Maya's bot.")
```

This bot is hosted behind an `aiohttp` / `Flask` endpoint that the Bot Service points at.

### Storing state

```python
from botbuilder.core import ConversationState, UserState, MemoryStorage

storage = MemoryStorage()    # in-memory (dev only), use Cosmos / Blob in prod
conversation_state = ConversationState(storage)
user_state = UserState(storage)
```

In production, swap to `CosmosDbPartitionedStorage` or `BlobStorage`.

---

## 🎯 CLU, Conversational Language Understanding

(You met CLU in Module 4, here's the bot-side view.)

CLU returns the top **intent** and any **entities** for an utterance. Your bot uses the intent to choose a dialog, and the entities to fill slots.

```
User: "Book a flight from NYC to Paris next Friday"

CLU output:
  topIntent: BookFlight  (0.94 confidence)
  entities:
    origin: NYC
    destination: Paris
    date: 2024-08-16
```

### Training data essentials

- **Utterances**, example sentences per intent (≥15 per intent is the rule of thumb)
- **Entities**, labeled spans within utterances
- **Entity types**:

  - **Learned**, model figures it out from labels
  - **List**, closed set ("small", "medium", "large")
  - **Prebuilt**, Microsoft entity (datetime, money, percentage, etc.)
  - **Regex**, pattern-based (order IDs, ticket codes)

### Deployment

Train → **Deploy to a named deployment slot** (e.g. `production`). Your bot calls:

```
POST /language/:analyze-conversations?api-version=2023-04-01
{
  "kind": "Conversation",
  "analysisInput": { "conversationItem": {"id":"1","participantId":"u1","text":"Book a flight to Paris"} },
  "parameters": { "projectName":"flightbot", "deploymentName":"production" }
}
```

---

## ❓ Question Answering

(Also from Module 4, here's the deployment view.)

You build a **knowledge base (KB)** from sources:

- URLs (Microsoft will crawl support pages)
- Files (PDF, DOCX, TSV, XLSX)
- Manually authored Q/A pairs
- Chitchat (Microsoft provides "Professional", "Friendly", "Witty" packs)

**Multi-turn prompts** let an answer offer follow-up choices ("Did you mean A or B?").

**Active learning** lets the service suggest new Q variants based on real user queries, you accept/reject them in Language Studio.

### Deployment

KB → train → **Deploy** to a runtime URL. Each query gets back top answers + scores. Set a confidence threshold (e.g. 30) to filter out low-confidence answers.

```python
from azure.ai.language.questionanswering import QuestionAnsweringClient
client = QuestionAnsweringClient(endpoint, AzureKeyCredential(key))
result = client.get_answers(
    question="How do I reset my password?",
    project_name="support-kb",
    deployment_name="production"
)
for a in result.answers:
    print(a.answer, a.confidence)
```

---

## 🔀 Orchestration Workflow

When your bot can handle multiple kinds of input (FAQ + commands + small talk), you need to route each utterance to the right brain. **Orchestration workflow** is a project type in Azure AI Language that picks between:

- One or more **CLU** projects (intent recognition)
- One or more **Question Answering** projects (KB lookup)
- Other orchestration projects (for hierarchical routing)

You train the orchestrator with **intent examples** that map utterances to which child project to call.

```
User utterance → Orchestrator → top child project → that project handles the actual prediction
```

🎯 **Exam pattern:** *"A bot answers FAQs (KB) AND books flights (CLU). What's the recommended single entry point?"* → an **Orchestration workflow** that routes to QA or CLU.

---

## 🎙️ Voice Channel, Direct Line Speech

You can wire your text bot to voice by connecting:

```
User mic → Speech SDK (STT) → Bot (text) → response text → Speech SDK (TTS) → User ear
```

**Direct Line Speech** packages this end-to-end. Configure a Speech resource and add the Direct Line Speech channel in Bot Service. Bonus: you get **keyword activation** ("Hey Maya"), echo cancellation, and barge-in support.

---

## 🚦 Telemetry & Application Insights

Bot Framework has built-in telemetry middleware that sends events to **Application Insights**:

- BotMessageReceived / Sent
- Dialog enter / leave
- LU intent + score
- QA matched question + score
- Custom events you log

Use this to:

- Track top intents and unmatched utterances
- Identify dialogs where users drop off
- Tune confidence thresholds
- Feed active learning suggestions

---

## 🛡️ Bot Authentication & Security

| Concern | How |
|---|---|
| Bot ↔ Bot Service identity | Azure AD app registration created when you provision Bot Service |
| User authentication in conversations | OAuth Connection Settings on the Azure Bot resource (Azure AD, Google, GitHub, etc.) |
| Secret rotation | Bot Service supports certificate-based auth and managed identity (recommended) |
| Channel-specific | Each channel may have its own creds (Teams app id/secret, Slack tokens) |
| State storage | Cosmos / Blob with managed identity |

🚨 **Trap:** A bot calling Azure AI Language for CLU should use **managed identity + the Language API role**, not a hardcoded key.

---

## 📚 Adaptive Cards

For rich responses (buttons, forms, images), use **Adaptive Cards**, JSON-defined UI that channels render in their native style. The same card looks native in Teams, Web Chat, and Slack.

```json
{
  "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
  "type": "AdaptiveCard",
  "version": "1.5",
  "body": [
    {"type": "TextBlock", "text": "Schedule meeting?", "weight": "Bolder"}
  ],
  "actions": [
    {"type": "Action.Submit", "title": "Yes", "data": {"choice": "yes"}},
    {"type": "Action.Submit", "title": "No", "data": {"choice": "no"}}
  ]
}
```

---

## 🆕 Bot + GenAI (Where Things Are Heading)

Microsoft now positions **Azure AI Foundry / Copilot Studio** as the modern path for new chatbots, with first-class support for:

- Calling Azure OpenAI directly inside a bot dialog
- Connecting "Knowledge" sources (Azure AI Search, SharePoint, websites)
- Building **agents** with **Tool calling** + **plugins**
- Custom **prompt flow** orchestrations

For AI-102, you still need to know **Bot Service + Bot Framework + CLU + QA + Orchestration** as the classic stack. Module 8 covers the agent + Foundry side.

---

## ⚠️ Common Misconceptions

| Misconception | Reality |
|---|---|
| "QA Maker still works" | Migrated to Question Answering in Azure AI Language |
| "LUIS still works for new projects" | LUIS authoring is retired, use CLU |
| "Bot Service IS the bot" | Bot Service hosts/connects; the bot logic is the Bot Framework SDK app you deploy |
| "Adaptive Cards only work in Teams" | They work across multiple channels |
| "Orchestration is a Bot Framework concept" | It's an Azure AI Language project type |
| "Bot state must be in Cosmos" | Cosmos and Blob both supported; MemoryStorage is dev-only |

---

## 🚨 Exam Traps

1. **Orchestration ≠ Bot Framework dialog routing.** Orchestration is an Azure AI Language project that picks between CLU and QA child projects.
2. **CLU + QA together** is the canonical pattern for mixed bots, Orchestration in front.
3. **Direct Line Speech** is the channel for voice; **Direct Line** is for custom apps.
4. **Adaptive Cards** are channel-portable; they render natively wherever supported.
5. **Active Learning** is a Question Answering feature, not a CLU feature.
6. **Bot Framework Composer** is on the decline, Copilot Studio + Foundry is the future direction, but Composer can still appear in exam questions for now.

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|---|---|
| **Azure AI Bot Service** | Managed hosting + channels for Bot Framework bots |
| **Bot Framework SDK** | Code-first SDK to build bots (C#, JS, Python, Java) |
| **Channel** | Connector to a messaging platform (Teams, Web Chat, Slack, Direct Line, etc.) |
| **Direct Line** | Custom client channel (for embedding in apps) |
| **Direct Line Speech** | Voice channel using Speech SDK |
| **Activity** | Bot Framework message envelope |
| **Dialog / Waterfall Dialog** | Multi-turn conversation units |
| **Turn / Turn Context** | One in/out exchange + its context |
| **State (Conversation / User / Turn)** | Bot state slots |
| **Storage providers** | MemoryStorage (dev), Cosmos, Blob |
| **CLU** | Intent + entity recognition (replaces LUIS) |
| **Question Answering** | KB-based Q&A (replaces QnA Maker) |
| **Orchestration workflow** | Language project that routes between CLU/QA child projects |
| **Active Learning** | QA feature suggesting question variants from real traffic |
| **Adaptive Card** | Channel-portable rich UI JSON |
| **Bot Framework Composer** | Visual designer (legacy track) |
| **Copilot Studio / Azure AI Foundry** | Modern Microsoft direction for conversational AI |

---

## 📖 Case Study, Microsoft Security Copilot (2023–2024)

**Situation.** Cyber-defenders face an information-asymmetry problem: attackers can move faster than humans can read signals. Microsoft Security Copilot announced March 2023, GA April 2024 combined Azure OpenAI (GPT-4 then GPT-4o) with Microsoft Defender's telemetry, Sentinel's SIEM, Intune, Entra, and Purview data, plus a *conversational* surface targeted at security analysts (Microsoft Security blog, March 28, 2023, and April 1, 2024 GA announcement; verified against Microsoft Mechanics 2024 and the Security Copilot documentation page, 2026-05).

**Decision.** Security Copilot is *not* built on Azure AI Bot Service in the way a classic CLU+QA bot would be, but Microsoft openly described it at Ignite 2023 and 2024 as architected with the same principles this module teaches:

- A **conversational front-end** with multi-turn dialog and structured prompt templates (analogous to a Bot Framework `Activity` + `TurnContext` model).
- **Plugins** that map to specialized data sources (Defender, Sentinel, Entra, threat intelligence), analogous to **Orchestration Workflow** routing across CLU + Question Answering + custom skills, but at much larger scale.
- **Adaptive Cards-style** rich responses (timelines, IOCs, host details) that render natively in the Security Copilot UI.
- **Managed identity** + RBAC for every plugin call, the analyst's identity is what authorizes Defender / Sentinel queries.
- **Persistent threads** (called "investigations") that carry state, analogous to a Bot Framework `ConversationState` stored in Cosmos / Blob, but built atop Azure OpenAI's Assistants/Threads primitives.

Critically, the Responsible AI overlay from Module 2 was non-negotiable: every Security Copilot response carries citation provenance (which Defender alert or Sentinel rule grounded the answer), Prompt Shields are on, Groundedness Detection runs continuously, and analysts can flag-and-redact a turn for incident review.

**Outcome.** By H2 2024, Microsoft published case studies (referenced at Ignite 2024) showing measurable reductions in mean-time-to-respond (MTTR) for security incidents at large Defender customers. Security Copilot is now Microsoft's flagship example of "GenAI + Bot-style conversational layer + retrieval over enterprise data", exactly the pattern Module 8 will deepen.

**Lesson for the exam / for practitioners.** Even when you're not literally using Azure AI Bot Service, the conceptual stack this module teaches turn/activity/dialog, intent + entity, knowledge base, orchestration router, managed identity, channels is what production conversational AI looks like in 2026. The exam tests these primitives because Microsoft *builds* with them.

**Discussion (Socratic).**
- Q1: Security Copilot was built using Azure OpenAI's Assistants/Threads primitives rather than Bot Framework Composer. Argue both sides at a Cornell systems-engineering review: when does a team graduate *out* of Bot Framework and *into* Foundry Agent Service / Assistants API? What's the principled trigger?
- Q2: Security Copilot uses analyst identity to authorize Defender / Sentinel calls (per-call delegation). Build the alternative architecture that uses *one shared service-principal identity* and walk through what you trade for the simpler model. When is each correct?
- Q3: Every Security Copilot response carries citation provenance. From a Microsoft Responsible AI standpoint, what's the trade-off you accept by *not* having that for an ordinary consumer chatbot? Where do you draw the line?

---

## 💬 Discussion, Socratic prompts

1. **Bot Framework Composer's decline.** Composer is being de-emphasized in favor of Copilot Studio + Foundry. Argue both sides of the "should I learn Composer for the exam?" question. What does this teach you about studying for fast-moving certs in general?
2. **CLU + QA + Orchestration vs LLM-with-tools.** A startup PM wants to skip CLU entirely and feed every utterance into GPT-4o with a tool list. Build the strongest argument for that approach (one model, less to maintain), AND for the canonical stack (cheaper per call, deterministic intent routing, observable telemetry). At what conversation volume does each architecture decisively beat the other?
3. **State storage philosophy.** MemoryStorage is dev-only; Cosmos and Blob are production options. Build the case for *neither*, a stateless bot that re-reads context from a search index every turn. When is that the right call?
4. **Adaptive Cards portability.** Adaptive Cards render natively in Teams, Web Chat, Slack, and Outlook. Argue the position that they're under-rated; counter-argue that they're a leaky abstraction that always requires per-channel tweaks. Where does the line fall in practice?
5. **Active Learning in Question Answering.** QA's Active Learning suggests question variants from real traffic. From a Responsible AI standpoint, what governance must surround the human approver who accepts these suggestions? What's the failure mode if no governance is set?

---

## ✅ Module 6 Summary

You now know:

- 🤖 Bot Service vs Bot Framework SDK vs your bot code
- 📡 Channels (Teams, Direct Line, Direct Line Speech, etc.)
- 🎯 CLU for intent + entities; Question Answering for KBs
- 🔀 Orchestration workflow as the entry-point router
- 💾 State storage options (Memory / Cosmos / Blob)
- 🎙️ Voice via Direct Line Speech
- 🛡️ Auth + managed identity recommendation
- 🃏 Adaptive Cards for portable rich UI
- 📖 Microsoft Security Copilot as the modern conversational-AI architectural reference

**Next steps:**
1. 🎥 Watch [Videos.md](./Videos.md)
2. ✏️ Take [Quiz.md](./Quiz.md)
3. 📋 Review [Cheat-Sheet.md](./Cheat-Sheet.md)
4. ➡️ Move to [Module 7: Azure OpenAI](../Module-07-Azure-OpenAI-Service/Reading.md)

---

> **Where this leads.**
> - Inside this course: Module 7 wires the LLM brain into the bot (Azure OpenAI behind a dialog); Module 8 covers Foundry Agent Service which is the modern "bot+tools" surface Security Copilot is conceptually built on.
> - Cross-course: [`09-CompTIA-Security-Plus`](../../../09-CompTIA-Security-Plus/) covers the SIEM/SOAR side relevant to Security Copilot.
> - Practice: Practice Exam 2 has ~5 questions from this module; Final Mock includes voice + Teams channel composition cases.

---

## 📚 Citations & Named References

- **Microsoft Security blog (March 28, 2023).** *"Introducing Microsoft Security Copilot."*
- **Microsoft Security blog (April 1, 2024).** *"Microsoft Security Copilot is now generally available."*
- **Microsoft Mechanics (2024).** *"Security Copilot deep dive: plugins, prompts, and provenance."*
- **Vaswani et al. (2017).** *Attention Is All You Need.*, transformer foundation underlying Security Copilot's GPT layer.
- **Brown et al. (2020).** GPT-3 paper, the few-shot prompting lineage relevant to Copilot's structured prompt templates.
- **Microsoft Responsible AI Standard v2** (June 2022), drove the citation-provenance and Prompt Shields posture.
- **Microsoft Bot Framework SDK** documentation (Microsoft Learn, verified 2026-05), for the Bot Framework primitives.
- **Adaptive Cards 1.5** specification (adaptivecards.io).
- **NIST AI RMF 1.0** (January 2023), the framework Security Copilot's risk posture maps to for federal customers.

---

## 📚 Further Reading (Optional)

- 📖 [Azure AI Bot Service docs](https://learn.microsoft.com/en-us/azure/bot-service/)
- 📖 [Bot Framework SDK for Python](https://learn.microsoft.com/en-us/azure/bot-service/python/bot-builder-python-introduction)
- 📖 [Conversational Language Understanding (CLU)](https://learn.microsoft.com/en-us/azure/ai-services/language-service/conversational-language-understanding/overview)
- 📖 [Question Answering](https://learn.microsoft.com/en-us/azure/ai-services/language-service/question-answering/overview)
- 📖 [Orchestration workflow](https://learn.microsoft.com/en-us/azure/ai-services/language-service/orchestration-workflow/overview)
- 📖 [Adaptive Cards](https://adaptivecards.io/)
