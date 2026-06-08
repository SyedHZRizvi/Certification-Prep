# ✏️ Module 4 Quiz: Payments, Tax & Fraud

> **Instructions:** Answer all 25 questions. Aim for 21/25 minimum.

---

## Questions

### Q1. The Wayfair (2018) Supreme Court ruling established: *(Remember)*
A. Physical presence is the only sales-tax trigger
B. Economic nexus, states can require remote sellers to collect tax based on $/transaction thresholds
C. No sales tax on internet sales
D. Federal sales tax

---

### Q2. PCI-DSS v4.0 became mandatory: *(Remember)*
A. March 2022
B. March 2025
C. June 2024
D. 2027

---

### Q3. SAQ A applies to: *(Remember)*
A. Merchants self-hosting card-handling
B. Merchants where the platform handles all cardholder data (Shopify, Stripe Checkout)
C. Banks only
D. Tokenization-only

---

### Q4. SCA is required by which regulation? *(Remember)*
A. GDPR
B. PSD2
C. HIPAA
D. CCPA

---

### Q5. 3DS2 supports "frictionless authentication" for: *(Understand)*
A. All transactions
B. Low-risk transactions (issuer makes the call without challenging the consumer)
C. Subscriptions only
D. Crypto only

---

### Q6. EU IOSS applies to: *(Apply)*
A. Goods over €1,000
B. Low-value goods (≤€150) imported into the EU from non-EU sellers
C. Digital services
D. EU-internal trade

---

### Q7. Stripe's standard online transaction fee in the US (2026): *(Remember)*
A. 1.5% + $0.10
B. 2.9% + $0.30
C. 5%
D. Flat $1

---

### Q8. Klarna was brought under UK consumer-credit regulation by which body in 2024? *(Remember)*
A. SEC
B. UK FCA
C. EBA
D. UK CMA

---

### Q9. A Visa Chargeback Monitoring Program (CMP) enrollment is triggered at: *(Remember)*
A. < 0.1% chargeback rate
B. 0.5%
C. 1.0%+ chargeback rate
D. 5%+

---

### Q10. Signifyd's business model is: *(Understand)*
A. Free fraud rules
B. Chargeback guarantee (insurance model) at 0.5-1.5% per transaction
C. Pure software license
D. Payment processing

---

### Q11. The PCI-DSS v4.0 requirement specifically targeting client-side script management (Magecart attacks) is: *(Apply)*
A. Requirement 1.1
B. Requirement 6.4.3 and 11.6.1
C. Requirement 12
D. Requirement 7

---

### Q12. Marketplace Facilitator Laws shift sales-tax obligation from: *(Apply)*
A. State to federal
B. 3P seller to the marketplace operator (Amazon, Walmart, Etsy)
C. Marketplace to seller
D. Consumer to merchant

---

### Q13. EU VAT standard rate in Germany: *(Remember)*
A. 7%
B. 19%
C. 20%
D. 25%

---

### Q14. The €22 low-value VAT exemption was: *(Remember)*
A. Doubled to €44
B. Eliminated in July 2021 (now all imports owe VAT)
C. Increased to €150
D. Still in effect

---

### Q15. BNPL providers typically charge merchants: *(Apply)*
A. 1%
B. 3-6% of transaction (vs 2.9% for cards)
C. 10%+
D. Free

---

### Q16. Strong Customer Authentication (SCA) requires two of three factors: *(Understand)*
A. Knowledge, possession, inherence
B. Email, phone, address
C. Card number, CVV, expiry
D. IP, device, location

---

### Q17. The exemptions from SCA include: *(Apply)*
A. Low-value transactions < €30 and TRA (Transaction Risk Analysis)
B. All US transactions
C. PayPal transactions only
D. Subscription first payment

---

### Q18. Shop Pay's conversion lift vs manual card entry (Baymard 2024): *(Apply)*
A. 1-2%
B. 35-45% (especially on mobile)
C. 100%+
D. Negative

---

### Q19. Klarna's valuation peak (June 2021) and trough (July 2022) approximate: *(Analyze)*
A. $20B → $19B
B. $45.6B → $6.7B (85% drop)
C. $5B → $50B
D. $100B → $80B

---

### Q20. Stripe Tax pricing (2026): *(Remember)*
A. Free
B. 0.5% per transaction (capped)
C. 5% per transaction
D. Flat $5K/month

---

### Q21. The friendly fraud share of all chargebacks per Visa 2024 data: *(Apply)*
A. ~5%
B. ~40%
C. ~75%
D. < 1%

---

### Q22. Adyen's enterprise advantage over Stripe is: *(Understand)*
A. Lower pricing for SMBs
B. Single platform for online + in-store + mobile + marketplace with direct acquiring in many markets
C. Faster API integration
D. Free fraud prevention

---

### Q23. The fraud category with the highest rate (Signifyd 2024) is: *(Apply)*
A. Travel
B. Apparel
C. Electronics
D. Beauty

---

### Q24. A brand selling to EU consumers without IOSS registration faces: *(Apply)*
A. Lower conversion (surprise customs charges at delivery kill cart conversion)
B. Higher conversion
C. No impact
D. Bonus payments

---

### Q25. Currency conversion at checkout typically adds what spread above mid-market FX rate? *(Apply)*
A. 0.1%
B. 1-2%
C. 10%
D. 25%

---

## 🎯 Answers + Explanations

### Q1: **B. Economic nexus, states can require remote sellers to collect tax based on $/transaction thresholds**
South Dakota v. Wayfair (2018) overturned Quill (1992). 45 states adopted economic nexus by 2024.

### Q2: **B. March 2025**
PCI-DSS v4.0 was published March 2022; mandatory compliance became March 2025.

### Q3: **B. Merchants where the platform handles all cardholder data**
SAQ A = lowest burden, applies when card data never touches merchant systems. Shopify, Stripe Checkout merchants qualify.

### Q4: **B. PSD2**
EU Payment Services Directive 2 mandates SCA for most card-not-present transactions. Effective Sept 2019, enforced through 2021.

### Q5: **B. Low-risk transactions (issuer makes the call without challenging the consumer)**
3DS2 enables ~75% of EU transactions to flow frictionlessly even when SCA technically applies, via issuer-side risk scoring.

### Q6: **B. Low-value goods (≤€150) imported into the EU from non-EU sellers**
IOSS (Import One Stop Shop) launched July 1, 2021. Non-EU sellers register once to collect EU VAT at checkout on shipments ≤€150.

### Q7: **B. 2.9% + $0.30**
Standard Stripe US online card transaction fee (2026). International cards add 0.5%; currency conversion adds 1%.

### Q8: **B. UK FCA**
The Financial Conduct Authority brought BNPL providers under UK consumer-credit regulation in 2024, with full effect 2025.

### Q9: **C. 1.0%+ chargeback rate**
Visa's Chargeback Monitoring Program enrolls merchants at 1.0%+. 1.5%+ triggers Excessive Chargeback Program.

### Q10: **B. Chargeback guarantee (insurance model) at 0.5-1.5% per transaction**
Signifyd indemnifies chargebacks, if a covered transaction results in a chargeback, Signifyd reimburses.

### Q11: **B. Requirement 6.4.3 and 11.6.1**
PCI-DSS v4.0's new script-management requirements (mandatory March 2025), inventory and authorization of scripts on payment pages.

### Q12: **B. 3P seller to the marketplace operator**
MFLs shift tax collection to the marketplace. As a 3P seller, you don't owe tax on marketplace sales in MFL states, but DO on DTC sales.

### Q13: **B. 19%**
Germany's standard VAT rate is 19% (reduced rate 7%). One of the lower EU rates.

### Q14: **B. Eliminated in July 2021**
The €22 exemption was abused by AliExpress / Wish. Eliminated alongside the IOSS introduction, now all imports owe VAT.

### Q15: **B. 3-6% of transaction**
BNPL providers take 3-6% in exchange for paying merchants upfront and taking credit risk. Higher than card processing but lift in conversion offsets.

### Q16: **A. Knowledge, possession, inherence**
SCA requires two of three factors: something you know (password), have (phone), are (biometric).

### Q17: **A. Low-value transactions < €30 and TRA (Transaction Risk Analysis)**
PSD2 exemptions include low-value, recurring fixed-amount, merchant-initiated, trusted beneficiary, and TRA.

### Q18: **B. 35-45% (especially on mobile)**
Wallet-driven checkout converts 35-45% higher than manual card entry on mobile (Baymard 2024).

### Q19: **B. $45.6B → $6.7B (85% drop)**
Klarna's SoftBank Series H in June 2021 set $45.6B. The July 2022 down round set $6.7B. The largest fintech valuation crash on record.

### Q20: **B. 0.5% per transaction (capped)**
Stripe Tax adds 0.5% (capped) for automated multi-jurisdiction sales tax handling, US, EU, UK, Australia.

### Q21: **B. ~40%**
Friendly fraud (customer disputes legitimate purchase) is now ~40% of all chargebacks per Visa 2024 data.

### Q22: **B. Single platform for online + in-store + mobile + marketplace with direct acquiring in many markets**
Adyen's omnichannel + direct-acquirer model is the enterprise differentiator. Stripe is API-first; Adyen is platform-unified.

### Q23: **C. Electronics**
Signifyd 2024 fraud-rate data: electronics ~1.5% (highest), apparel mid, travel lowest at ~0.2%.

### Q24: **A. Lower conversion**
Without IOSS, EU customs collects VAT + handling fees at delivery. Customers see unexpected charges; cart conversion craters on delivery surprise.

### Q25: **B. 1-2%**
Standard FX spread at checkout (Stripe/Adyen built-in). Above the mid-market rate. Shows as "FX fees" on P&L.

---

## 📊 Score Yourself

- 24-25/25 → 🏆 Mastered
- 21-23/25 → ✅ Solid
- 17-20/25 → ⚠️ Re-read weak parts
- <17/25 → 🔁 Re-read entire Reading.md

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 5](../Module-05-Fulfillment-Logistics-Returns/Reading.md)
