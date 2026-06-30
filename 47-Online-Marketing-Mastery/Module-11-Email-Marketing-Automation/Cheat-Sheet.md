# 📋 Module 11 Cheat Sheet: Email Marketing & Automation — GDPR-Compliant Growth

> One page. Print it. Review before every campaign.

---

## Legal Compliance Quick-Reference

| Law | Jurisdiction | Model | Consent Required Before Sending? | Key Penalty |
|-----|-------------|-------|----------------------------------|-------------|
| **GDPR** | EU + UK | **OPT-IN** | Yes — explicit, documented, specific | €20M or 4% global turnover (higher of the two) |
| **CAN-SPAM** | USA | **OPT-OUT** | No — but must honour opt-outs within 10 days | Up to $51,744 per violation |
| **CASL** | Canada | **OPT-IN** (strictest) | Yes — express or implied (2yr purchase / 6mo inquiry) | Up to CAD $10M per violation |

> **Mnemonic:** GDPR = G-I (Go-In = Opt-IN). CAN-SPAM = CAN leave (OPT-OUT). CASL = C-Always-Strict-List (strictest globally).

### GDPR Double Opt-In Checklist

- [ ] Form uses un-ticked consent checkbox with plain-language description
- [ ] Confirmation email sent immediately on form submit
- [ ] Subscriber is NOT added to active list until link is clicked
- [ ] Consent timestamp + source URL logged in your ESP
- [ ] Privacy notice linked on every form
- [ ] One-click unsubscribe in every email
- [ ] Data retention policy defined (re-consent or delete after 12–24 months inactive)

---

## ESP Selection Matrix

| ESP | Best For | EU Data Residency | GDPR Double Opt-in | E-com Flows | Free Plan |
|-----|---------|------------------|-------------------|-------------|-----------|
| **Klaviyo** | E-commerce (Shopify/WooCommerce) | Yes (EU region) | Built-in | Excellent | Yes (500 contacts) |
| **HubSpot** | B2B, CRM-heavy | Yes | Yes | Good | Yes (limited) |
| **Mailchimp** | Beginners, SMBs | AWS EU (optional) | Yes | Basic (paid only) | Yes (500 contacts) |
| **ActiveCampaign** | Mid-market, complex automations | Yes (EU instance) | Yes | Good | No (trial only) |

---

## Key Formulas

```
Open Rate (OR)
= (Unique Opens / Emails Delivered) × 100
  ⚠️ Inflated by Apple MPP since 2021 — use as directional only

Click-Through Rate (CTR)
= (Unique Clicks / Emails Delivered) × 100
  Good benchmark: >2.5%

Click-to-Open Rate (CTOR)  ← PRIMARY metric post-MPP
= (Unique Clicks / Unique Opens) × 100
  Good benchmark: >12%

Revenue Per Email (RPE)  ← PRIMARY revenue metric
= Total Email Revenue / Total Emails Delivered
  Good benchmark: £0.05–£0.15 (campaign send)

List Growth Rate (LGR)
= ((New Subscribers − Unsubscribes) / Total List) × 100
  Healthy: >5% monthly

Bounce Rate
= (Bounced Emails / Emails Sent) × 100
  Must stay below 2%
```

---

## Deliverability: SPF / DKIM / DMARC

| Record | What It Does | Memory Hook |
|--------|-------------|-------------|
| **SPF** | Authorises which mail servers can send for your domain | The "Guest List" — only approved servers allowed |
| **DKIM** | Cryptographic signature proving email wasn't tampered with | The "Wax Seal" on a letter |
| **DMARC** | Policy for what happens on SPF/DKIM failure + reporting | The "Bouncer's Instructions" |

**Setup order:** SPF first → DKIM → DMARC (start with `p=none`, move to `p=quarantine` once clean).

**New domain warm-up:** Start with 200–500 emails/day to most engaged subscribers. Double volume every 3–5 days. Takes 4–8 weeks to build full reputation.

---

## Automation Flow Stack (Priority Order)

| # | Flow | Trigger | Emails | Typical Revenue Lift |
|---|------|---------|--------|---------------------|
| 1 | **Welcome Series** | New subscriber | 5–7 over 14 days | 3–5x vs campaigns |
| 2 | **Cart Abandonment** | Cart created, no purchase (1–4 hrs) | 3 over 48 hrs | Recovers 5–15% of carts |
| 3 | **Post-Purchase** | Order confirmed | 2–4 over 30 days | +10–20% repeat purchase rate |
| 4 | **Browse Abandonment** | Product viewed 2+ times, no add-to-cart | 2 over 24 hrs | +1–3% revenue lift |
| 5 | **Win-Back** | No purchase in 90–180 days | 3–5 over 30 days | Reactivates 5–15% lapsed |
| 6 | **Sunset** | No open in 6–12 months | 1–2 final emails | Protects deliverability |

### Welcome Series Template (7-Email Structure)

```
Email 1 (Day 0):  Lead magnet delivery + warm brand story
Email 2 (Day 2):  Education — "How to choose / use [product]"
Email 3 (Day 4):  Social proof — reviews, press, real customers
Email 4 (Day 7):  First offer — 10% off, 72-hour urgency
Email 5 (Day 9):  Objection handling — FAQ, quality, sustainability
Email 6 (Day 12): Community / values — brand mission
Email 7 (Day 14): Last chance or content upgrade
```

**Rule:** Emails 1–3 = pure value (no discount). Trust before the ask.

### Cart Abandonment 3-Email Playbook

```
Email 1 (1–4 hrs):  Gentle "you left something behind" — NO discount
Email 2 (24 hrs):   Social proof + FAQ — address objections
Email 3 (48 hrs):   Time-limited offer — ONLY if margin allows
```

---

## Segmentation: RFM Model

| Dimension | What It Measures | Action |
|-----------|-----------------|--------|
| **R** Recency | Days since last purchase | High R = active; Low R = at-risk |
| **F** Frequency | Number of purchases | High F = loyal; Low F = one-time buyers |
| **M** Monetary | Total lifetime spend | High M = VIP segment |

**Five Core Segments:**

| Segment | Definition | Strategy |
|---------|-----------|---------|
| VIP | Top 20% by LTV | Early access, exclusivity, loyalty |
| Active Engaged | Opened in last 30 days | Full cadence, new products |
| At-Risk | No open 60–90 days | Reduce frequency, re-engagement |
| Lapsed | No open 90–180 days | Win-back sequence |
| Never Opened | Subscribed, zero opens | Sunset + remove |

---

## A/B Testing Reference

| Element | What to Test | Typical Impact |
|---------|-------------|---------------|
| Subject line | Question vs statement; emoji vs none; length | 5–20% OR difference |
| Sender name | Brand vs personal name | 5–15% OR difference |
| Send time | Tue 10am vs Thu 7pm | 5–10% OR difference |
| CTA copy | "Shop now" vs "Claim your offer" | 10–30% CTR difference |
| Personalisation | First name in subject | 2–6% OR difference |

**Rules:** One variable at a time. Minimum 100 opens per variant. Wait for 95% confidence before declaring a winner.

---

## Email Benchmarks

| Metric | Good | Concerning | Critical |
|--------|------|-----------|---------|
| Open rate | >25% | 15–25% | <15% |
| CTR | >2.5% | 1–2.5% | <1% |
| CTOR | >12% | 8–12% | <8% |
| Bounce rate | <2% | 2–5% | >5% |
| Unsubscribe rate | <0.5% | 0.5–1% | >1% |
| Spam complaints | <0.1% | 0.1–0.3% | >0.3% (blacklist risk) |
| Revenue per email | £0.05–£0.15 | £0.02–£0.05 | <£0.02 |

*(Industry estimates — Omnisend, Klaviyo, Mailchimp benchmarks 2024. Vary significantly by industry and audience.)*

---

## Lead Magnet Conversion Benchmarks

| Type | Typical Opt-in Rate | Best Use Case |
|------|-------------------|---------------|
| Discount code | 4–8% | E-commerce |
| Quiz / assessment | 5–12% | Personalisation, supplements |
| Checklist / template | 3–6% | B2B, SaaS |
| Free trial / sample | 6–10% | Subscription products |
| Ebook / guide | 2–5% | High-ticket, professional services |
| Webinar | 3–7% | Coaching, consulting, software |

---

## ⚠️ Anti-Patterns — What NOT To Do

1. **Never buy email lists.** Spam traps, invalid addresses, zero consent, GDPR violation, ESP suspension risk.
2. **Never use pre-ticked consent boxes.** Invalid under GDPR. Always require an affirmative action.
3. **Never batch-and-blast your full list.** Destroys engagement rates. Segment before every send.
4. **Never ignore mobile.** 60%+ of opens are mobile. Single-column, 16px font, 44px tap targets.
5. **Never send at full volume from a new domain.** Warm up over 4–8 weeks or face spam filtering.
6. **Never declare an A/B test winner too early.** Minimum 100 opens per variant at 95% confidence.
7. **Never ignore the sunset flow.** Non-openers damage sender reputation and inflate list costs.

---

## 🏆 Exam Power Phrases

> "GDPR requires a lawful basis for each processing activity. For marketing email, the most defensible basis is freely given, specific, informed, and unambiguous consent — documented with a timestamp, source URL, and consent mechanism in the ESP."

> "Unlike CAN-SPAM's opt-out model, GDPR and CASL both require opt-in consent before sending commercial email. CASL's implied consent window is two years from the last purchase."

> "Since Apple Mail Privacy Protection (September 2021), open rate is an unreliable metric. Professional email marketers now prioritise CTOR and Revenue Per Email as primary KPIs."

> "A domain warm-up is non-negotiable when switching ESPs or sending from a new subdomain. Jumping to full volume immediately triggers spam filters because ISPs assign low trust scores to domains with no sending history."

> "Double opt-in is not explicitly required by GDPR text, but is universally recommended by data protection authorities (UK ICO, German DPA) as the gold-standard proof of freely given consent."

> "RFM segmentation — Recency, Frequency, Monetary — is the e-commerce standard for identifying VIP customers, at-risk buyers, and lapsed subscribers. Klaviyo and ActiveCampaign both have built-in RFM scoring."

> "A healthy email programme benchmarks above 25% open rate, 2.5% CTR, 12% CTOR, and below 2% bounce rate and 0.1% spam complaint rate. Exceeding 0.3% complaint rate risks domain blacklisting."

---

## ✏️ Quick Self-Check (Recite From Memory)

1. What are the three key differences between GDPR, CAN-SPAM, and CASL regarding opt-in requirements?
2. Name SPF, DKIM, and DMARC in order and give a one-sentence description of each.
3. What is the 7-email welcome series structure? What happens in emails 1–3 vs email 4?
4. Define CTOR and explain why it replaced open rate as the primary engagement metric.
5. What is the minimum sample size and confidence interval before declaring an A/B test winner?
