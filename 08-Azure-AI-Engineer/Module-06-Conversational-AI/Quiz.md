# ✏️ Module 6 Quiz: Conversational AI

> **Instructions:** Answer all 26 questions WITHOUT looking at the reading.
> Then check your answers below. Aim for 22/26 minimum.
> Each question is **Bloom's-taxonomy** tagged.

---

## Questions

### Q1. Azure AI Bot Service primarily provides: *(Remember)*
A. The bot's logic
B. Managed hosting + channel connectivity for Bot Framework bots
C. Speech-to-text capability
D. A vector database

---

### Q2. The Bot Framework SDK is available in: *(Remember)*
A. C# only
B. Python only
C. C#, JavaScript/TypeScript, Python, Java
D. JavaScript only

---

### Q3. A bot is built once. To make it work in Microsoft Teams AND Slack, you would: *(Apply)*
A. Rewrite the bot for each platform
B. Connect both Teams and Slack channels in Azure Bot Service
C. Build two separate bots
D. Deploy to two regions

---

### Q4. The voice-enabled channel that combines Bot Service + Speech SDK is: *(Remember)*
A. Direct Line
B. Direct Line Speech
C. Web Chat
D. Telegram

---

### Q5. CLU is used to: *(Remember)*
A. Build a knowledge base of Q&A pairs
B. Identify the user's intent and extract entities from an utterance
C. Synthesize speech
D. Detect PII

---

### Q6. Question Answering is used to: *(Remember)*
A. Identify intent + entities
B. Answer user questions from a curated knowledge base
C. Translate text
D. Detect harmful content

---

### Q7. The recommended pattern when a bot must handle FAQs AND structured commands is: *(Apply)*
A. Use only Question Answering
B. Use only CLU
C. Use an Orchestration workflow that routes to CLU and Question Answering
D. Use Custom Vision

---

### Q8. Production bot state should typically be stored in: *(Apply)*
A. MemoryStorage
B. Cosmos DB or Blob Storage
C. A relational database in the bot's source code
D. The bot's environment variables

---

### Q9. Which Bot Framework concept represents a single in/out exchange? *(Remember)*
A. Activity
B. Turn
C. Adapter
D. Dialog

---

### Q10. A Waterfall Dialog is: *(Understand)*
A. A messaging channel
B. A sequential set of dialog steps
C. A state storage type
D. A type of card

---

### Q11. Active Learning is a feature of: *(Remember)*
A. CLU
B. Question Answering
C. Bot Service
D. Adaptive Cards

---

### Q12. To call your deployed CLU model from a bot, the request includes: *(Apply)*
A. `projectName` and `deploymentName`
B. Only the project name
C. Only the model ID
D. The training key

---

### Q13. An Adaptive Card: *(Understand)*
A. Is a feature only available in Teams
B. Is a channel-portable JSON format that renders natively across supported channels
C. Replaces Bot Framework SDK
D. Is a database card type

---

### Q14. Direct Line is best for: *(Apply)*
A. Adding bot to Teams
B. Embedding a bot into a custom mobile or web application via REST/WebSocket
C. Voice channels
D. Slack integration

---

### Q15. Which Python class is the base for a typical Bot Framework Python bot? *(Remember)*
A. `Bot`
B. `ActivityHandler`
C. `Dialog`
D. `BotFrameworkAdapter`

---

### Q16. LUIS authoring is: *(Remember)*
A. Active and preferred for new bots
B. Retired — replaced by CLU
C. Available only via REST
D. The same as Question Answering

---

### Q17. To pass an utterance and get a top intent + entities, you would POST to: *(Remember)*
A. `/language/:analyze-conversations`
B. `/language/:analyze-text`
C. `/luis/predict/v3.0`
D. `/qa/predict`

---

### Q18. A confidence threshold in Question Answering is used to: *(Understand)*
A. Train new models
B. Filter out low-confidence answers from the response
C. Encrypt the KB
D. Choose between channels

---

### Q19. Which is a CLU **entity** type? *(Remember)*
A. Confidence
B. List
C. Channel
D. Activity

---

### Q20. To call Azure AI Language from a bot running in Azure App Service, the recommended auth is: *(Apply)*
A. Hardcoded subscription key
B. Managed identity + RBAC role
C. Anonymous
D. A shared key in a header

---

### Q21. The orchestrator project type can route to: *(Understand)*
A. Only CLU projects
B. Only QA projects
C. CLU AND/OR Question Answering child projects
D. Any Azure service

---

### Q22. Application Insights telemetry from a bot helps you: *(Apply)*
A. Train CLU automatically
B. Track top intents, unmatched utterances, dialog drop-offs
C. Replace MemoryStorage
D. Configure channels

---

### Q23. The Bot Framework Composer: *(Remember)*
A. Replaces Bot Service
B. Is a visual designer on top of the Bot Framework SDK (legacy direction)
C. Is a speech recognizer
D. Is a CLU model

---

### Q24. Which Python snippet correctly handles a message activity? *(Apply)*
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

### Q25. Microsoft Security Copilot (GA April 2024) uses citation provenance on every response, Prompt Shields, and per-call analyst-identity authorization for downstream Defender / Sentinel queries. Evaluate this architecture vs an alternative that uses one shared service-principal identity, no Prompt Shields, and free-form LLM answers without citations. The strongest critique of the alternative is: *(Evaluate)*
A. "It's slower"
B. "It collapses three Responsible-AI dials (Accountability via per-identity audit, Reliability via Prompt Shields, Transparency via citation provenance) into a single attack surface, making it impossible to defend in an incident review or under the EU AI Act high-risk tier; the Microsoft-published architecture exists *because* security-domain auditability requires all three"
C. "It costs more"
D. "Citations are optional"

---

### Q26. **Design task.** You are designing a conversational AI for a financial-services help desk that must (a) answer policy FAQs with citations, (b) execute structured commands ("freeze my card"), (c) work in Teams + Web Chat + voice, and (d) stay HIPAA + GLBA defensible. Which architecture below best meets all constraints? *(Create)*
A. Pure GPT-4o with no routing, no state, free-form answers
B. (1) Azure AI **Orchestration Workflow** routing between a CLU project (commands) and a Question Answering KB (policy FAQs); (2) Azure AI **Bot Service** hosting + connecting the **Teams**, **Web Chat**, and **Direct Line Speech** channels; (3) State in **CosmosDB** with managed identity; (4) Managed-identity + RBAC for every downstream call (no keys in code); (5) Azure AI Content Safety Prompt Shields + Groundedness Detection on answers; (6) Application Insights telemetry; (7) optional Foundry Agent Service for the LLM-grounded explanation layer on top of QA
C. Direct Line only, no Teams channel
D. Skip telemetry to save cost

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

### Q25: **B. Three RAI dials in one surface**
This is the lesson of Security Copilot's architecture (April 2024 GA). In high-stakes security domains, *all three* of per-identity audit + Prompt Shields + citation provenance are non-negotiable. The alternative collapses each dimension and removes the basis for the incident-review story regulators require.

### Q26: **B. Layered composition**
Each layer maps to a constraint. Pure-LLM (A) drops routing, observability, and Channels; (C) breaks the Teams reach requirement; (D) eliminates the data needed to defend the deployment. The composed stack is exactly the canonical Microsoft pattern.

---

## 📊 Score Yourself

- 25–26/26 → 🏆 Move on
- 22–24/26 → ✅ Strong
- 18–21/26 → ⚠️ Re-read CLU + Question Answering + Orchestration sections
- <18/26 → 🔁 Re-read Reading.md; re-quiz tomorrow

### Bloom's distribution check
| Level | Count | % | Target |
|---|---|---|---|
| Remember | 13 | 50% | ≤ 25%¹ |
| Understand | 5 | 19% | ~25% |
| Apply | 6 | 23% | ~25% |
| Analyze | 0 | 0% | ~20% |
| Evaluate | 1 | 4% | (combined) |
| Create | 1 | 4% | ~5% |

¹ Conversational AI module is heavy on Bot Framework concepts and channel names; recall remains essential. Higher reasoning is concentrated in Q25–Q26 plus the Socratic prompts.

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
