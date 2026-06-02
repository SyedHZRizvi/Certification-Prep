# 📋 Module 6 Cheat Sheet: Conversational AI

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 🤖 The Stack

```
┌─────────────────────────────────────────┐
│        YOUR BOT CODE (SDK)              │  ← Bot Framework SDK (C#/JS/Py/Java)
└─────────────┬───────────────────────────┘
              │ HTTP endpoint
┌─────────────▼───────────────────────────┐
│         AZURE AI BOT SERVICE            │  ← hosting + channels + auth
└──┬────┬────┬────┬─────┬─────┬──────────┘
   │    │    │    │     │     │
 Teams Web DL Speech Slack Telegram ...   ← Channels
```

---

## 🎯 Brains for the Bot

| Need | Service |
|---|---|
| **Intent + entity** ("Book a flight to Paris") | **CLU** |
| **FAQ from a knowledge base** | **Question Answering** |
| **Route both** at a single entry point | **Orchestration workflow** |
| Custom logic from your code | Dialogs (Waterfall / Component) |

Call shape:
```http
POST /language/:analyze-conversations
{ "kind":"Conversation",
  "analysisInput":{...},
  "parameters":{"projectName":"flightbot","deploymentName":"production"} }
```

---

## 📡 Channels Quick Reference

| Channel | When to use |
|---|---|
| **Web Chat** | Iframe on a website |
| **Teams** | Corporate Teams bot |
| **Direct Line** | Embed in custom mobile/web app |
| **Direct Line Speech** | Voice in/out (with Speech SDK) |
| **Slack / Telegram / FB Messenger** | Public messengers |

---

## 💾 State Storage

| Provider | Use |
|---|---|
| `MemoryStorage` | Dev only |
| `CosmosDbPartitionedStorage` | Production multi-instance |
| `BlobStorage` | Production alternative |

```python
storage = CosmosDbPartitionedStorage(config)
conversation_state = ConversationState(storage)
user_state = UserState(storage)
```

---

## 🐍 Python Bot Skeleton

```python
from botbuilder.core import ActivityHandler, TurnContext

class MyBot(ActivityHandler):
    async def on_message_activity(self, turn_context: TurnContext):
        await turn_context.send_activity(f"Echo: {turn_context.activity.text}")
```

---

## 🃏 Adaptive Cards

Channel-portable JSON UI. Render natively in Teams, Web Chat, and other supporting channels.

---

## 🏆 Exam Power Phrases

**Usually right**:

- ✅ "Orchestration workflow to route between CLU and QA"
- ✅ "Connect a Teams channel" (don't rewrite the bot)
- ✅ "Direct Line Speech for voice"
- ✅ "Use managed identity to call Azure AI Language"
- ✅ "Adaptive Cards for portable rich UI"

**Usually wrong**:

- ❌ "Use LUIS for new bots"
- ❌ "Use QnA Maker"
- ❌ "MemoryStorage in production"
- ❌ "Bot Service IS the bot"
- ❌ "Hardcoded subscription key in bot code"

---

## ⚠️ Anti-Patterns

- ❌ Production state in MemoryStorage
- ❌ Rewriting the bot per channel
- ❌ Bot Framework Composer for greenfield in 2025 (use Copilot Studio / Foundry direction)
- ❌ Skipping the Orchestration project for mixed bots
- ❌ Hardcoded keys for downstream Azure AI calls

---

## ✏️ Quick Self-Check

1. Bot Service hosts; what builds the bot logic? ___
2. CLU replaces what? QnA Maker replaces what? ___
3. Difference between Direct Line and Direct Line Speech? ___
4. Production state: which storage providers? ___
5. Orchestration workflow routes between what? ___

If you can answer all 5 in 60 seconds, you own Module 6. ✅

---

## 🧩 Bot Framework Concept → Foundry Agent Equivalent

| Bot Framework | Foundry Agent Service |
|---|---|
| Bot | Agent / Assistant |
| Channel | UI you build atop the Assistants API |
| TurnContext | Run + Thread + Message |
| Dialog | Tool sequence chosen by the model |
| ConversationState | Persistent Thread |
| CLU (intent + entity) | Model's tool-call decision |
| QA Knowledge Base | File Search tool over uploaded docs |
| Orchestration Workflow | Plugin/Tool routing in the agent |

This isomorphism is why Module 8 builds the *modern* analog of Module 6.

## 🛡️ Auth + Identity Pattern

| Resource | Identity used |
|---|---|
| Bot Service | App Registration (created on provision) |
| Calling AI Language for CLU | **Managed identity** + `Cognitive Services User` role |
| Calling Azure OpenAI for LLM | Managed identity + `Cognitive Services OpenAI User` role |
| Calling Cosmos for state | Managed identity + `Cosmos DB Built-in Data Contributor` |
| OAuth user sign-in | Connection Setting on the Azure Bot resource |

## 📐 Case-Study Pattern

| Scenario | Composition |
|---|---|
| FAQs + commands + voice (Teams + Web Chat) | Bot Service + CLU + QA + Orchestration + Direct Line Speech |
| Modern "agent" replacement (Security Copilot style) | Foundry Agent Service + Plugins + Threads + Adaptive Cards (no Bot Framework needed) |
| Multilingual help desk | Above + Translator (Module 4) upstream |
| HIPAA voice intake | Bot Service + Direct Line Speech + Managed Identity + Private Endpoints |

## 📚 Citations

| Concept | Source |
|---|---|
| Bot Framework SDK | Microsoft Learn (verified 2026-05) |
| Adaptive Cards 1.5 | adaptivecards.io specification |
| Microsoft Security Copilot architecture | Microsoft Security blog (March 2023; GA April 2024) |
| RAI Standard v2 (citation provenance) | Microsoft (June 2022) |

---

➡️ [Module 7: Azure OpenAI](../Module-07-Azure-OpenAI-Service/Reading.md)
