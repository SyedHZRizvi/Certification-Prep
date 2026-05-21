# ✏️ Module 6 Quiz: Conversational AI

> **Instructions:** Answer all 24 questions WITHOUT looking at the reading.
> Then check your answers below. Aim for 20/24 minimum.

---

## Questions

### Q1. Azure AI Bot Service primarily provides:
A. The bot's logic
B. Managed hosting + channel connectivity for Bot Framework bots
C. Speech-to-text capability
D. A vector database

---

### Q2. The Bot Framework SDK is available in:
A. C# only
B. Python only
C. C#, JavaScript/TypeScript, Python, Java
D. JavaScript only

---

### Q3. A bot is built once. To make it work in Microsoft Teams AND Slack, you would:
A. Rewrite the bot for each platform
B. Connect both Teams and Slack channels in Azure Bot Service
C. Build two separate bots
D. Deploy to two regions

---

### Q4. The voice-enabled channel that combines Bot Service + Speech SDK is:
A. Direct Line
B. Direct Line Speech
C. Web Chat
D. Telegram

---

### Q5. CLU is used to:
A. Build a knowledge base of Q&A pairs
B. Identify the user's intent and extract entities from an utterance
C. Synthesize speech
D. Detect PII

---

### Q6. Question Answering is used to:
A. Identify intent + entities
B. Answer user questions from a curated knowledge base
C. Translate text
D. Detect harmful content

---

### Q7. The recommended pattern when a bot must handle FAQs AND structured commands is:
A. Use only Question Answering
B. Use only CLU
C. Use an Orchestration workflow that routes to CLU and Question Answering
D. Use Custom Vision

---

### Q8. Production bot state should typically be stored in:
A. MemoryStorage
B. Cosmos DB or Blob Storage
C. A relational database in the bot's source code
D. The bot's environment variables

---

### Q9. Which Bot Framework concept represents a single in/out exchange?
A. Activity
B. Turn
C. Adapter
D. Dialog

---

### Q10. A Waterfall Dialog is:
A. A messaging channel
B. A sequential set of dialog steps
C. A state storage type
D. A type of card

---

### Q11. Active Learning is a feature of:
A. CLU
B. Question Answering
C. Bot Service
D. Adaptive Cards

---

### Q12. To call your deployed CLU model from a bot, the request includes:
A. `projectName` and `deploymentName`
B. Only the project name
C. Only the model ID
D. The training key

---

### Q13. An Adaptive Card:
A. Is a feature only available in Teams
B. Is a channel-portable JSON format that renders natively across supported channels
C. Replaces Bot Framework SDK
D. Is a database card type

---

### Q14. Direct Line is best for:
A. Adding bot to Teams
B. Embedding a bot into a custom mobile or web application via REST/WebSocket
C. Voice channels
D. Slack integration

---

### Q15. Which Python class is the base for a typical Bot Framework Python bot?
A. `Bot`
B. `ActivityHandler`
C. `Dialog`
D. `BotFrameworkAdapter`

---

### Q16. LUIS authoring is:
A. Active and preferred for new bots
B. Retired — replaced by CLU
C. Available only via REST
D. The same as Question Answering

---

### Q17. To pass an utterance and get a top intent + entities, you would POST to:
A. `/language/:analyze-conversations`
B. `/language/:analyze-text`
C. `/luis/predict/v3.0`
D. `/qa/predict`

---

### Q18. A confidence threshold in Question Answering is used to:
A. Train new models
B. Filter out low-confidence answers from the response
C. Encrypt the KB
D. Choose between channels

---

### Q19. Which is a CLU **entity** type?
A. Confidence
B. List
C. Channel
D. Activity

---

### Q20. To call Azure AI Language from a bot running in Azure App Service, the recommended auth is:
A. Hardcoded subscription key
B. Managed identity + RBAC role
C. Anonymous
D. A shared key in a header

---

### Q21. The orchestrator project type can route to:
A. Only CLU projects
B. Only QA projects
C. CLU AND/OR Question Answering child projects
D. Any Azure service

---

### Q22. Application Insights telemetry from a bot helps you:
A. Train CLU automatically
B. Track top intents, unmatched utterances, dialog drop-offs
C. Replace MemoryStorage
D. Configure channels

---

### Q23. The Bot Framework Composer:
A. Replaces Bot Service
B. Is a visual designer on top of the Bot Framework SDK (legacy direction)
C. Is a speech recognizer
D. Is a CLU model

---

### Q24. Which Python snippet correctly handles a message activity?
A. ```python
async def on_message(self, ctx):
    return ctx.activity.text
```
B. ```python
async def on_message_activity(self, turn_context: TurnContext):
    await turn_context.send_activity(f"You said: {turn_context.activity.text}")
```
C. ```python
def handle(msg):
    print(msg)
```
D. ```python
class Bot:
    def on_message(self, x): pass
```

---

## 🎯 Answers + Explanations

### Q1: **B. Managed hosting + channel connectivity**
Bot Service hosts your bot code and bridges channels. Your code (the bot logic) is built with the Bot Framework SDK.

### Q2: **C. C#, JavaScript/TypeScript, Python, Java**
All four officially supported. C# and JS are most mature.

### Q3: **B. Connect both Teams and Slack channels in Azure Bot Service**
Write once, connect many channels. The channel layer handles format conversion.

### Q4: **B. Direct Line Speech**
Bundles Speech SDK + bot with keyword activation, echo cancellation, barge-in.

### Q5: **B. Identify the user's intent and extract entities**
Replaces LUIS for new projects.

### Q6: **B. Answer user questions from a curated knowledge base**
Replaces QnA Maker.

### Q7: **C. Orchestration workflow routes to CLU + Question Answering**
The Azure AI Language project type designed for this.

### Q8: **B. Cosmos DB or Blob Storage**
MemoryStorage is dev-only. Cosmos and Blob are durable, multi-instance-safe.

### Q9: **B. Turn**
One inbound activity + the bot's response.

### Q10: **B. A sequential set of dialog steps**
Common for multi-step flows like booking forms.

### Q11: **B. Question Answering**
Active learning suggests question variants from real user traffic — accept/reject in Language Studio.

### Q12: **A. `projectName` and `deploymentName`**
You target a specific deployment of a CLU project.

### Q13: **B. Channel-portable JSON**
Same card looks native across Teams, Web Chat, and other supported channels.

### Q14: **B. Embedding a bot into a custom mobile or web application**
Direct Line is for custom clients. For voice, use Direct Line Speech.

### Q15: **B. `ActivityHandler`**
Subclass it and override `on_message_activity`, `on_members_added_activity`, etc.

### Q16: **B. Retired — replaced by CLU**
LUIS authoring is retired; CLU in Azure AI Language is the path forward.

### Q17: **A. `/language/:analyze-conversations`**
The conversation analysis endpoint, with `kind: "Conversation"`.

### Q18: **B. Filter out low-confidence answers**
Set a threshold (e.g. 30) below which the bot won't return an answer.

### Q19: **B. List**
Entity types: Learned, List, Prebuilt, Regex.

### Q20: **B. Managed identity + RBAC role**
No secrets in code; auditable identity.

### Q21: **C. CLU AND/OR Question Answering child projects**
Plus other orchestration projects for hierarchical routing.

### Q22: **B. Track top intents, unmatched utterances, dialog drop-offs**
Bot Framework ships telemetry middleware for Application Insights.

### Q23: **B. Visual designer on top of the Bot Framework SDK (legacy direction)**
Composer still works; Microsoft is steering new work to Copilot Studio + Foundry.

### Q24: **B**
`on_message_activity` is the correct override; `turn_context.send_activity(...)` is the standard reply pattern.

---

## 📊 Score Yourself

- 23–24/24 → 🏆 Move on
- 20–22/24 → ✅ Strong
- 16–19/24 → ⚠️ Re-read CLU + Question Answering + Orchestration sections
- <16/24 → 🔁 Re-read Reading.md; re-quiz tomorrow

---

## 🃏 Add To Your Flashcards

- Bot Service hosts; SDK builds; bot logic is your code
- Channels: Teams, Web Chat, Direct Line, Direct Line Speech, Slack, etc.
- Direct Line (custom client) vs Direct Line Speech (voice)
- CLU intent+entity / QA knowledge base / Orchestration routes both
- State: MemoryStorage (dev) → Cosmos / Blob (prod)
- ActivityHandler.on_message_activity in Python
- Active Learning is QA-only
- Adaptive Cards = portable rich UI
- Managed identity for service calls (no key in code)

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 7: Azure OpenAI](../Module-07-Azure-OpenAI-Service/Reading.md)
