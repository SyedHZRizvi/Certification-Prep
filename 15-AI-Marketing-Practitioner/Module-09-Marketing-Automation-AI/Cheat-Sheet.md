# 📋 Module 9 Cheat Sheet: Marketing Automation + AI Agents

> One page. Print it. Tape it to your monitor.

---

## 🏗️ Universal Automation Model

```
TRIGGER  →  CONDITION  →  ACTION  →  DELAY  →  next step
```

🧠 Memorize this. Every workflow on every platform is this pattern.

---

## 🛠️ Platform Decision

| Use case | Platform |
|----------|----------|
| **DTC (Direct-to-Consumer) ecom (Shopify)** | Klaviyo |
| **B2B (Business-to-Business) SaaS (Software as a Service) / content** | HubSpot |
| **SMB / service biz** | ActiveCampaign or HubSpot Starter |
| **Enterprise (SF CRM (Customer Relationship Management))** | Salesforce Marketing Cloud |
| **Cross-tool glue** | Make.com / n8n / Zapier |

---

## 📧 HubSpot, 4 Core B2B Workflows

```
1. Hot Lead    , high-intent pages or forms
2. MQL (Marketing Qualified Lead)→SQL (Sales Qualified Lead)     , score threshold + rep notify
3. Onboarding  , post-signup education
4. Re-engage   , 60+ days inactive
```

---

## 🛍️ Klaviyo, 7 Ecom Flows (Must-Have)

```
1. Welcome Series       , new subscribers
2. Abandoned Cart       , recovery (6-12% recapture!)
3. Abandoned Browse     , 3+ product views, no ATC
4. Post-Purchase        , review + cross-sell
5. Win-Back             , 90+ days no purchase
6. Birthday/Anniversary , LTV (Lifetime Value) lift
7. Replenishment        , repeat purchase trigger
```

---

## ⏰ Klaviyo Abandoned Cart Timing

```
T+1 hour:    Email 1, reminder
T+24 hours:  Email 2, social proof
T+48 hours:  Email 3, 10% off (expires tonight)
T+96 hours:  EXIT flow
```

---

## 🔗 Make.com vs Zapier vs n8n

| Tool | Cost (10K ops/mo) | Use |
|------|-------------------|-----|
| **n8n self-host** | ~free + VPS | Cheapest at scale |
| Make.com | $9-29/mo | Solo marketers |
| Zapier | $20-$299+ | Easy UI (User Interface), expensive |

---

## 🤖 AI Agents: The Pattern

```
LLM (Large Language Model) + TOOLS + PERMISSIONS + HUMAN-REVIEW
```

Real use case: support email → check Shopify order → draft personalized reply → human approves → send.

| Platform | Notes |
|----------|-------|
| Claude API (Application Programming Interface) tool use | You manage state (more control) |
| OpenAI Assistants v2 | Server-side state (less code) |

---

## 🚀 Speed-to-Lead Reality

```
< 5 minutes contact:  3-10x higher conversion
4 hours later:        baseline
24+ hours:            already gone
```

→ Build automation that contacts hot leads in < 5 min.

---

## 📊 Deliverability (Day-0)

```
☐ SPF set up
☐ DKIM signing
☐ DMARC policy
☐ One-click unsubscribe
☐ Spam complaint < 0.3%
☐ BIMI (logo in Gmail)
```

Gmail/Yahoo 2024 bulk rules: REQUIRED for senders > 5K/day to their users.

---

## 🔌 Webhooks + APIs Basics

| | Definition |
|---|------------|
| **Webhook** | URL that gets POST when event fires |
| **API** | Way for apps to talk (read/write/trigger) |

You don't need to code. But you need to understand triggers/actions.

---

## 🎯 DTC Ecom Stack Architecture

```
Klaviyo (emails + flows + segments)
   +
Make.com (glue: Klaviyo ↔ Meta/Google audiences)
   +
Meta/Google Customer Match (suppress buyers, retarget non-buyers)
   +
GA4 (Google Analytics 4) (measurement)
```

---

## ⚠️ Top Mistakes

- ❌ No exit conditions (customer in 4 flows at once)
- ❌ Building 50 workflows before testing 1
- ❌ Send time = whenever (3am drops opens)
- ❌ Same content for all segments
- ❌ No human handoff path
- ❌ Skipping SPF/DKIM/DMARC
- ❌ No documentation (new hire can't read it)

---

## ✏️ Quick Self-Check

1. Universal automation model?
2. Klaviyo vs HubSpot, when to pick which?
3. The 7 Klaviyo Flows?
4. Speed-to-lead conversion lift?
5. What is LLM "tool use"?

---

➡️ [Practice Exam 2](../Practice-Exams/Practice-Exam-2.md) → [Module 10: Capstone](../Module-10-Capstone-Launch-Real-Campaign/Reading.md)
