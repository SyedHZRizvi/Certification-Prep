# Module 3 — بنیادی گرامر (Basic Grammar)

<div class="lang-switcher" markdown="0" style="background:linear-gradient(135deg,#1e1b4b,#312e81);border-radius:12px;padding:1.25rem;margin:0 0 2rem;text-align:center;box-shadow:0 4px 16px rgba(99,102,241,0.3);">
  <p style="color:#e0e7ff;font-size:1rem;font-weight:600;margin:0 0 0.85rem;">🌐 Choose your learning language / اپنی زبان منتخب کریں</p>
  <div style="display:flex;gap:0.75rem;justify-content:center;flex-wrap:wrap;">
    <button id="ls-btn-en" onclick="certHubSetLang('en')" style="padding:0.6rem 1.6rem;border-radius:9px;border:2px solid #818cf8;background:#fff;color:#4338ca;font-weight:700;font-size:0.95rem;cursor:pointer;">🇬🇧 English</button>
    <button id="ls-btn-ur" onclick="certHubSetLang('ur')" style="padding:0.6rem 1.6rem;border-radius:9px;border:2px solid #818cf8;background:#fff;color:#4338ca;font-weight:700;font-size:0.95rem;cursor:pointer;">🇵🇰 اردو (Urdu)</button>
  </div>
</div>
<script>
function certHubSetLang(l){try{localStorage.setItem('cert-hub-lang-pref',l);}catch(e){}document.querySelectorAll('.lang-en,.lang-ur').forEach(function(el){el.style.display='none';});document.querySelectorAll('.lang-'+l).forEach(function(el){el.style.display='block';});var be=document.getElementById('ls-btn-en'),bu=document.getElementById('ls-btn-ur');if(be&&bu){be.style.background=l==='en'?'#4338ca':'#fff';be.style.color=l==='en'?'#fff':'#4338ca';bu.style.background=l==='ur'?'#4338ca':'#fff';bu.style.color=l==='ur'?'#fff':'#4338ca';}}
(function(){var s='';try{s=localStorage.getItem('cert-hub-lang-pref')||'';}catch(e){}certHubSetLang(s||'en');})();
</script>

<div class="lang-en" markdown="1">

## Why Grammar Feels Different in Urdu

Urdu grammar is built on principles that are fundamentally different from English in three key ways: **word order**, **gender agreement**, and **postpositions instead of prepositions**. Once you understand these three foundations, Urdu grammar becomes remarkably systematic — often more logical than English.

This module focuses on present tense grammar. Future and past tenses are covered in Module 5.

---

## 1. SOV Word Order: Subject–Object–Verb

English word order is **SVO**: Subject–Verb–Object.
- English: "I **eat** an apple." → Subject + Verb + Object

Urdu word order is **SOV**: Subject–Object–Verb.
- Urdu: "میں سیب **کھاتا ہوں**" → Subject + Object + Verb
  - Word by word: میں (I) + سیب (apple) + کھاتا ہوں (eat)

The verb **always goes at the end** of the sentence in Urdu. This is the single most important structural rule.

### Comparison Table: English SVO vs Urdu SOV

| English (SVO) | Urdu (SOV) | Word-by-Word Urdu |
|---------------|-----------|-------------------|
| I eat rice | میں چاول کھاتا ہوں | I / rice / eat |
| She drinks water | وہ پانی پیتی ہے | She / water / drinks |
| We read books | ہم کتابیں پڑھتے ہیں | We / books / read |
| He speaks Urdu | وہ اردو بولتا ہے | He / Urdu / speaks |
| They buy mangoes | وہ آم خریدتے ہیں | They / mangoes / buy |

### Why This Matters
Because the verb comes at the end, Urdu speakers often pause and think ahead — they know what object they are talking about before they say what action is performed. In conversation, this also means you should listen for the end of a sentence before concluding meaning.

---

## 2. Gender in Urdu: Every Noun is Masculine or Feminine

This is perhaps the most challenging aspect for English speakers, because English has no grammatical gender for nouns (we say "the chair," not "the male chair"). In Urdu, **every single noun is either masculine or feminine**, and this gender affects the verbs, adjectives, and pronouns that accompany it.

### General Rules for Noun Gender

**Masculine nouns** often (but not always) end in **ا (alif)** in their base form:
- بچہ (bachcha) — boy/child: masculine
- کمرہ (kamra) — room: masculine
- گھوڑا (ghora) — horse: masculine

**Feminine nouns** often end in **ی (ye)** or **ت (te)**:
- بچی (bachchi) — girl: feminine
- لڑکی (larki) — girl: feminine
- عورت (aurat) — woman: feminine
- کتاب (kitaab) — book: feminine (no predictable ending — must be memorized)

> **Important**: Many nouns do not follow these patterns and must simply be memorized. However, the patterns above cover a significant majority of common words.

### Comparison: English Has No Gender vs Urdu Has Gender

| English | Urdu | Gender | Notes |
|---------|------|--------|-------|
| Book | کتاب (kitaab) | Feminine | No visible marker |
| Table | میز (mez) | Feminine | Must memorize |
| Room | کمرہ (kamra) | Masculine | Ends in ا |
| Road | سڑک (sarak) | Feminine | Must memorize |
| Door | دروازہ (darwaaza) | Masculine | Ends in ا |
| Water | پانی (paani) | Masculine | Ends in ی but is masculine — exceptions exist! |
| Eye | آنکھ (aankh) | Feminine | Must memorize |
| Heart | دل (dil) | Masculine | Must memorize |

---

## 3. The Verb "To Be": ہوں، ہے، ہیں

The Urdu verb "to be" is one of the most important words to master. It changes based on the subject's **person** and **number**.

| Subject | Urdu "to be" | Transliteration | Pronunciation |
|---------|-------------|-----------------|---------------|
| میں (I) | ہوں | hun | hoon |
| تم (you — familiar) | ہو | ho | ho |
| آپ (you — formal) | ہیں | hain | hayñ |
| وہ (he/she/it) | ہے | hai | hai |
| ہم (we) | ہیں | hain | hayñ |
| وہ (they) | ہیں | hain | hayñ |

### Examples with "To Be"

| Urdu | Transliteration | English |
|------|-----------------|---------|
| میں ٹھیک ہوں | Main theek hun | I am fine |
| آپ کہاں ہیں؟ | Aap kahaan hain? | Where are you? |
| وہ میرا دوست ہے | Woh mera dost hai | He is my friend |
| ہم پاکستانی ہیں | Hum Pakistani hain | We are Pakistani |
| کتاب میز پر ہے | Kitaab mez par hai | The book is on the table |

---

## 4. Postpositions (Not Prepositions!)

English uses **prepositions** — words that come BEFORE the noun they modify: "in the house," "on the table," "from Lahore."

Urdu uses **postpositions** — words that come AFTER the noun they modify: "گھر میں" (ghar mein — house in = in the house), "میز پر" (mez par — table on = on the table).

### Core Urdu Postpositions

| Urdu | Transliteration | English Equivalent | Example |
|------|-----------------|-------------------|---------|
| میں | mein | In / Inside | لاہور میں (Lahore mein — in Lahore) |
| پر | par | On / At | میز پر (mez par — on the table) |
| کو | ko | To / For (dative) | مجھ کو / مجھے (mujhe — to me) |
| سے | se | From / With / By | لاہور سے (Lahore se — from Lahore) |
| تک | tak | Until / Up to | شام تک (shaam tak — until evening) |
| کے ساتھ | ke saath | With (together) | آپ کے ساتھ (aap ke saath — with you) |
| کے لیے | ke liye | For (purpose) | آپ کے لیے (aap ke liye — for you) |
| کے آگے | ke aage | In front of | گھر کے آگے (ghar ke aage — in front of the house) |
| کے پیچھے | ke peechhe | Behind | گاڑی کے پیچھے (gaari ke peechhe — behind the car) |
| کے اندر | ke andar | Inside | کمرے کے اندر (kamre ke andar — inside the room) |
| کے باہر | ke bahar | Outside | گھر کے باہر (ghar ke bahar — outside the house) |
| کے اوپر | ke upar | Above / On top of | چھت کے اوپر (chhat ke upar — on the roof) |
| کے نیچے | ke neeche | Under / Below | میز کے نیچے (mez ke neeche — under the table) |

### Comparison Table: English Prepositions vs Urdu Postpositions

| English | Urdu | Structure |
|---------|------|-----------|
| in the house | گھر میں | house + in |
| on the table | میز پر | table + on |
| from Karachi | کراچی سے | Karachi + from |
| until morning | صبح تک | morning + until |
| with my friend | میرے دوست کے ساتھ | my friend + with |

---

## 5. Pronouns

| Urdu | Transliteration | English |
|------|-----------------|---------|
| میں | main | I |
| آپ | aap | You (formal) |
| تم | tum | You (familiar) |
| تو | tu | You (intimate) |
| وہ | woh | He / She / It / That person |
| ہم | hum | We |
| وہ | woh | They (same word as he/she/it) |
| یہ | yeh | This / He (near) / She (near) |

> **Note on وہ vs یہ**: Urdu uses وہ (woh — that) and یہ (yeh — this) as third-person pronouns. یہ refers to someone or something near, وہ to someone or something distant. Neither pronoun distinguishes gender — "وہ" means he, she, and it depending on context.

---

## 6. Simple Present Tense (حالِ مطلق)

The present tense in Urdu is formed from the **verb stem** + **gender suffix** + **"to be"** auxiliary.

### The Key Rule: Verbs Agree with Gender AND Number

This is a major difference from English. In English, "I eat, you eat, he eats" — only third person singular changes. In Urdu, the verb changes for **both gender and number**:

| Subject | Masculine Verb | Feminine Verb | English |
|---------|----------------|---------------|---------|
| میں (I, m) | کھاتا ہوں | کھاتی ہوں | I eat |
| تم (you, m) | کھاتے ہو | کھاتی ہو | You eat |
| آپ (you formal) | کھاتے ہیں | کھاتی ہیں | You eat |
| وہ (he) | کھاتا ہے | — | He eats |
| وہ (she) | — | کھاتی ہے | She eats |
| ہم (we, m) | کھاتے ہیں | کھاتی ہیں | We eat |
| وہ (they, m) | کھاتے ہیں | کھاتی ہیں | They eat |

### The Suffixes Pattern

| Suffix | Gender | Number | Use With |
|--------|--------|--------|---------|
| تا | Masculine | Singular | He / I (male) |
| تی | Feminine | Singular | She / I (female) |
| تے | Masculine | Plural | We / They / You (male) |
| تی | Feminine | Plural | We / They / You (female) |

### More Verb Examples in Present Tense

| Verb Stem | Masculine Singular | Feminine Singular | English |
|-----------|-------------------|------------------|---------|
| کھا (eat) | کھاتا ہے | کھاتی ہے | He/she eats |
| پی (drink) | پیتا ہے | پیتی ہے | He/she drinks |
| جا (go) | جاتا ہے | جاتی ہے | He/she goes |
| آ (come) | آتا ہے | آتی ہے | He/she comes |
| پڑھ (read) | پڑھتا ہے | پڑھتی ہے | He/she reads |
| لکھ (write) | لکھتا ہے | لکھتی ہے | He/she writes |
| بول (speak) | بولتا ہے | بولتی ہے | He/she speaks |
| سو (sleep) | سوتا ہے | سوتی ہے | He/she sleeps |

---

## 7. Singular vs Plural with Gender Agreement

Urdu plurals work differently from English. Gender determines the plural suffix:

### Plural Rules for Nouns

| Type | Singular | Plural | Example |
|------|----------|--------|---------|
| Masculine ending in ا | کمرہ (kamra — room) | کمرے (kamre — rooms) | ا → ے |
| Masculine not ending in ا | دوست (dost — friend) | دوست (dost — friends) | Often unchanged |
| Feminine ending in ی | لڑکی (larki — girl) | لڑکیاں (larkiyaan — girls) | ی → یاں |
| Feminine not ending in ی | کتاب (kitaab — book) | کتابیں (kitaabein — books) | Add یں |

### Examples

| Singular | Plural | Gender |
|----------|--------|--------|
| کتاب (kitaab — book) | کتابیں (kitaabein) | Feminine |
| لڑکی (larki — girl) | لڑکیاں (larkiyaan) | Feminine |
| بچہ (bachcha — boy) | بچے (bachche) | Masculine |
| کمرہ (kamra — room) | کمرے (kamre) | Masculine |
| گھر (ghar — house) | گھر (ghar) | Masculine — unchanged |
| آدمی (aadmi — man) | آدمی (aadmi) | Masculine — unchanged |

---

## 8. Possessives: میرا، تمہارا، اس کا — The Gender-Changing Possessives

In English, possessives are simple: my, your, his, her. In Urdu, **possessives change form to agree with the gender of the THING POSSESSED** (not the possessor).

### میرا/میری/میرے (My)

| Form | Used When | Example |
|------|-----------|---------|
| میرا | Possesed thing is masculine singular | میرا نام (mera naam — my name) |
| میری | Possessed thing is feminine singular | میری کتاب (meri kitaab — my book) |
| میرے | Possessed thing is masculine plural | میرے دوست (mere dost — my friends) |

### Complete Possessive Pronoun Table

| Possessor | + Masculine Singular | + Feminine Singular | + Masculine Plural | English |
|-----------|---------------------|---------------------|-------------------|---------|
| میں (I) | میرا | میری | میرے | My |
| تم (you) | تمہارا | تمہاری | تمہارے | Your (familiar) |
| آپ (you formal) | آپ کا | آپ کی | آپ کے | Your (formal) |
| وہ (he) | اس کا | اس کی | اس کے | His |
| وہ (she) | اس کا | اس کی | اس کے | Her |
| ہم (we) | ہمارا | ہماری | ہمارے | Our |
| وہ (they) | ان کا | ان کی | ان کے | Their |

> **Note**: "his" and "her" are identical in Urdu (اس کا/اس کی) — context makes it clear. This is actually simpler than English in one way!

---

## 9. Question Formation

Urdu forms questions in two main ways:

### Yes/No Questions with کیا (Kya)

Place **کیا** at the beginning of a statement to make it a yes/no question. The word order does NOT change:

| Statement | Question | English |
|-----------|----------|---------|
| آپ پاکستانی ہیں | کیا آپ پاکستانی ہیں؟ | Are you Pakistani? |
| وہ آتا ہے | کیا وہ آتا ہے؟ | Is he coming? |
| کتاب میز پر ہے | کیا کتاب میز پر ہے؟ | Is the book on the table? |

### Question Words (سوالیہ الفاظ)

| Urdu | Transliteration | English | Example |
|------|-----------------|---------|---------|
| کیا | kya | What / (yes-no marker) | کیا ہے؟ (Kya hai? — What is it?) |
| کون | kaun | Who | آپ کون ہیں؟ (Aap kaun hain? — Who are you?) |
| کہاں | kahaan | Where | آپ کہاں ہیں؟ (Aap kahaan hain? — Where are you?) |
| کب | kab | When | آپ کب آئیں گے؟ (When will you come?) |
| کیوں | kyun | Why | آپ کیوں آئے؟ (Why did you come?) |
| کیسے | kaise | How | آپ کیسے ہیں؟ (How are you?) |
| کتنا | kitna | How much / How many | کتنا پیسہ؟ (How much money?) |
| کس | kis | Which (modifier) | کس شہر میں؟ (In which city?) |

### Question Word Comparison: English vs Urdu

| English | Urdu | Position in Sentence |
|---------|------|---------------------|
| What is this? | یہ کیا ہے؟ (Yeh kya hai?) | Question word in middle |
| Who is he? | وہ کون ہے؟ (Woh kaun hai?) | Question word in middle |
| Where are you going? | آپ کہاں جا رہے ہیں؟ | Question word in middle |
| Why are you sad? | آپ کیوں اداس ہیں؟ | Question word in middle |
| How much does it cost? | یہ کتنے کا ہے؟ | Question word in middle |

> **Key insight**: Unlike English, Urdu question words typically appear in the **middle** of the sentence, not at the beginning. The sentence retains its normal SOV structure.

---

## 10. Complete Grammar Summary Tables

### Table 1: Present Tense Conjugation — کھانا (to eat)

| Subject | Urdu | Transliteration | English |
|---------|------|-----------------|---------|
| میں (I, male) | میں کھاتا ہوں | Main khaata hun | I eat |
| میں (I, female) | میں کھاتی ہوں | Main khaati hun | I eat |
| تم (you, male) | تم کھاتے ہو | Tum khaate ho | You eat |
| تم (you, female) | تم کھاتی ہو | Tum khaati ho | You eat |
| آپ | آپ کھاتے ہیں | Aap khaate hain | You eat (formal) |
| وہ (he) | وہ کھاتا ہے | Woh khaata hai | He eats |
| وہ (she) | وہ کھاتی ہے | Woh khaati hai | She eats |
| ہم | ہم کھاتے ہیں | Hum khaate hain | We eat |
| وہ (they, male) | وہ کھاتے ہیں | Woh khaate hain | They eat |
| وہ (they, female) | وہ کھاتی ہیں | Woh khaati hain | They eat |

### Table 2: Postpositions Quick Reference

| Postposition | Urdu | English | Position |
|--------------|------|---------|----------|
| مین | mein | in / inside | After noun |
| پر | par | on / at | After noun |
| کو | ko | to / for | After noun |
| سے | se | from / with / by | After noun |
| تک | tak | until / up to | After noun |
| کے ساتھ | ke saath | with | After noun |
| کے لیے | ke liye | for (purpose) | After noun |
| کے بغیر | ke baghair | without | After noun |

### Table 3: Interrogative Words Summary

| Question | Urdu Word | Example Sentence |
|----------|-----------|-----------------|
| Who | کون (kaun) | وہ کون ہے؟ (Who is he/she?) |
| What | کیا (kya) | یہ کیا ہے؟ (What is this?) |
| Where | کہاں (kahaan) | آپ کہاں ہیں؟ (Where are you?) |
| When | کب (kab) | آپ کب آئے؟ (When did you come?) |
| Why | کیوں (kyun) | آپ کیوں رو رہے ہیں؟ (Why are you crying?) |
| How | کیسے (kaise) | آپ کیسے ہیں؟ (How are you?) |
| How much | کتنا (kitna) | کتنے پیسے؟ (How much money?) |
| Which | کون سا (kaun sa) | کون سی کتاب؟ (Which book?) |

</div>

<div class="lang-ur" style="direction:rtl;font-family:Noto Nastaliq Urdu,Georgia,serif;text-align:right;line-height:2.4;font-size:1.1rem;" markdown="1">

## اردو گرامر کیوں مختلف ہے؟

اردو گرامر انگریزی سے تین اہم طریقوں سے مختلف ہے: **فعل آخر میں آتا ہے**، **ہر اسم کی جنس ہوتی ہے**، اور **پوسٹ پوزیشن استعمال ہوتی ہے نہ کہ پری پوزیشن**۔ ایک بار یہ تین اصول سمجھ آ جائیں تو اردو گرامر انتہائی منظم اور منطقی لگتی ہے۔

---

## ۱۔ فعل آخر میں — SOV ترتیب

انگریزی میں: **فاعل + فعل + مفعول** (I eat an apple)
اردو میں: **فاعل + مفعول + فعل** (میں سیب کھاتا ہوں)

فعل **ہمیشہ جملے کے آخر میں** آتا ہے — یہ اردو گرامر کا سب سے اہم اصول ہے۔

| انگریزی | اردو | لفظ بہ لفظ |
|---------|------|-----------|
| I eat rice | میں چاول کھاتا ہوں | میں / چاول / کھاتا ہوں |
| She drinks water | وہ پانی پیتی ہے | وہ / پانی / پیتی ہے |
| We read books | ہم کتابیں پڑھتے ہیں | ہم / کتابیں / پڑھتے ہیں |

---

## ۲۔ اسم کی جنس — مذکر اور مؤنث

اردو میں ہر اسم یا تو **مذکر** ہے یا **مؤنث**۔ یہ جنس فعل، صفت، اور ضمیر سب پر اثر ڈالتی ہے۔

**مذکر اسم** عموماً **ا** پر ختم ہوتے ہیں:
- بچہ، کمرہ، گھوڑا

**مؤنث اسم** عموماً **ی** یا **ت** پر ختم ہوتے ہیں:
- بچی، لڑکی، عورت

لیکن استثنا موجود ہیں — جیسے **پانی** (مذکر ہونے کے باوجود ی پر ختم ہوتا ہے)۔

| اردو | جنس | یادداشت |
|------|-----|--------|
| کتاب | مؤنث | یاد کریں |
| میز | مؤنث | یاد کریں |
| کمرہ | مذکر | ا پر ختم |
| دروازہ | مذکر | ا پر ختم |

---

## ۳۔ "ہونا" فعل (To be)

| فاعل | "ہونا" | تلفظ |
|------|--------|-------|
| میں | ہوں | hun |
| تم | ہو | ho |
| آپ | ہیں | hain |
| وہ (ایک) | ہے | hai |
| ہم | ہیں | hain |
| وہ (جمع) | ہیں | hain |

---

## ۴۔ پوسٹ پوزیشن (بعدی حروفِ جار)

انگریزی میں: **in** the house (حرفِ جار اسم سے پہلے)
اردو میں: گھر **میں** (حرفِ جار اسم کے بعد)

| اردو | تلفظ | انگریزی |
|------|-------|---------|
| میں | mein | میں (in) |
| پر | par | پر (on) |
| کو | ko | کو (to/for) |
| سے | se | سے (from/with) |
| تک | tak | تک (until) |
| کے ساتھ | ke saath | کے ساتھ (with) |
| کے لیے | ke liye | کے لیے (for) |

---

## ۵۔ حالِ مطلق — فعل کا استعمال

اردو میں فعل **جنس اور تعداد** دونوں کے ساتھ بدلتا ہے:

| فاعل | مذکر فعل | مؤنث فعل |
|------|----------|---------|
| میں | کھاتا ہوں | کھاتی ہوں |
| تم | کھاتے ہو | کھاتی ہو |
| آپ | کھاتے ہیں | کھاتی ہیں |
| وہ | کھاتا ہے | کھاتی ہے |
| ہم | کھاتے ہیں | کھاتی ہیں |

---

## ۶۔ اضافت — میرا، میری، میرے

اردو میں ملکیت ظاہر کرنے والے الفاظ **ملکیت میں لی گئی چیز کی جنس** کے مطابق بدلتے ہیں:

| صورت | استعمال | مثال |
|------|---------|------|
| میرا | مذکر واحد | میرا نام |
| میری | مؤنث واحد | میری کتاب |
| میرے | مذکر جمع | میرے دوست |

---

## ۷۔ سوالیہ الفاظ

| اردو | تلفظ | انگریزی | مثال |
|------|-------|---------|------|
| کیا | kya | کیا (What/yes-no) | یہ کیا ہے؟ |
| کون | kaun | کون (Who) | آپ کون ہیں؟ |
| کہاں | kahaan | کہاں (Where) | آپ کہاں ہیں؟ |
| کب | kab | کب (When) | آپ کب آئے؟ |
| کیوں | kyun | کیوں (Why) | آپ کیوں آئے؟ |
| کیسے | kaise | کیسے (How) | آپ کیسے ہیں؟ |
| کتنا | kitna | کتنا (How much) | کتنے پیسے؟ |

**اہم فرق**: اردو میں سوالیہ الفاظ عموماً جملے کے **درمیان میں** آتے ہیں، شروع میں نہیں۔

</div>
