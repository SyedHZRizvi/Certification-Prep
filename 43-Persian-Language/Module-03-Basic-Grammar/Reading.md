# Module 3 — بنیادی گرامر (Basic Grammar)

<div class="lang-switcher" style="background:linear-gradient(135deg,#1e1b4b,#312e81);border-radius:12px;padding:1.25rem;margin:0 0 2rem;text-align:center;box-shadow:0 4px 16px rgba(99,102,241,0.3);">
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

## Persian Grammar Fundamentals

Persian grammar is genuinely learner-friendly, especially if you already know Urdu. Let's explore why.

---

## 1. Persian is Gender-Neutral

> **This is a major relief compared to Arabic.**

In Arabic, every noun is either masculine or feminine, and adjectives, verbs, and pronouns must agree. Persian has **no grammatical gender whatsoever**.

- کتاب (*kitāb* — book) → no gender
- دختر (*dokhtar* — girl) → the noun refers to a girl, but grammatically it has no gender that changes surrounding words
- او (*u*) = he / she / it — Persian uses ONE pronoun for all three!

**For Arabic speakers:** You can forget gender agreement entirely.  
**For Urdu speakers:** Urdu does have gender — so Persian is actually *easier* in this respect.

---

## 2. Word Order: Subject–Object–Verb (SOV)

Persian follows SOV order — the same as Urdu and Japanese, and different from English (SVO).

| Language | Order | Example |
|---|---|---|
| English | SVO | I (S) eat (V) food (O) |
| Persian | SOV | من (S) غذا (O) می‌خورم (V) |
| Urdu | SOV | میں (S) کھانا (O) کھاتا ہوں (V) |

**Persian:** من غذا می‌خورم (*man ghazā mi-khoram*) — lit. "I food eat"  
**Urdu:** میں کھانا کھاتا ہوں — identical SOV structure!

Urdu speakers: Persian sentence structure will feel completely natural.

---

## 3. The Verb "To Be" (بودن — *budan*)

The present tense copula (linking verb "to be") is essential. Persian has two forms:

### Full forms (بودن):
| Person | Persian | Transliteration | English |
|---|---|---|---|
| I | هستم | *hastam* | I am |
| You (informal) | هستی | *hasti* | You are |
| He / She / It | است | *ast* | He/she/it is |
| We | هستیم | *hastim* | We are |
| You (formal/plural) | هستید | *hastid* | You are |
| They | هستند | *hastand* | They are |

### Short/clitic forms (very common in writing):
| Person | Clitic | Example | Translation |
|---|---|---|---|
| I | ـم (-am) | خوبم | I am good |
| You | ـی (-i) | خوبی | You are good |
| He/She/It | است (ast) | خوب است | He is good |
| We | ـیم (-im) | خوبیم | We are good |
| You (pl.) | ـید (-id) | خوبید | You are good |
| They | ـند (-and) | خوبند | They are good |

> In colloquial speech, است often shortens to **ـه (-e)**: خوبه (*khube*) = "it's good."

---

## 4. Definite Article: None!

Persian has **no definite article** (no "the"). Nouns stand alone.

- کتاب = **a** book OR **the** book (context tells you which)
- خانه = **a** house OR **the** house

**For Urdu speakers:** Exactly like Urdu — context does the work.  
**For English speakers:** Forget articles in Persian.

### Indefinite Article
To say "a/an," add **ـی (-i)** or **یک (*yek* = one)** before the noun:
- کتابی (*ketābi*) = a book
- یک کتاب (*yek ketāb*) = one book / a book

---

## 5. Plurals — Add ها (*-hā*)

To make a noun plural, simply add **ها** after it:

| Singular | Plural | Translation |
|---|---|---|
| کتاب | کتاب‌ها | books |
| دوست | دوست‌ها | friends |
| خانه | خانه‌ها | houses |
| بچه | بچه‌ها | children |
| کتاب‌ها | — | the books |

> The half-space (‌) between the word and ها is standard in written Persian.  
> Formal Persian also uses **ان (-ān)** for animates: دانشجویان (students), مردان (men).

---

## 6. The Ezafe Construction (اضافه — *ezāfe*)

**This is one of the most distinctive features of Persian grammar — and also exists in Urdu!**

The *ezafe* connects:
1. **Noun + Adjective** (the adjective *follows* the noun)
2. **Noun + Possessive** (my book, his car)
3. **Noun + Noun** (compound constructions)

It is written as a short vowel **-e** (ـِ or ِ) after the first word, sometimes shown as ِ or by context.

### Examples:
| Persian | Transliteration | English |
|---|---|---|
| کتابِ من | *ketāb-e man* | my book (lit. "book of me") |
| کتابِ بزرگ | *ketāb-e bozorg* | big book (lit. "book of bigness") |
| خانهٔ زیبا | *khāne-ye zibā* | beautiful house |
| دوستِ خوب | *dust-e khub* | good friend |
| رنگِ آبی | *rang-e ābi* | blue color |
| مادرِ من | *mādar-e man* | my mother |

**Rule:** When the first noun ends in a vowel (like خانه), the ezafe becomes **ـه** → **ٔ** (*-ye*): خانهٔ = *khāne-ye*.

> **Urdu speakers:** You already know this! Urdu uses exactly the same ezafe — کتابِ خدا (*kitāb-e Khudā*), شاہِ ایران (*shāh-e Irān*). It's everywhere in Urdu poetry and formal writing.

---

## 7. Personal Pronouns

| Persian | Transliteration | English |
|---|---|---|
| من | *man* | I / me |
| تو | *to* | you (informal, singular) |
| او | *u* | he / she / it |
| ما | *mā* | we / us |
| شما | *shomā* | you (formal or plural) |
| آن‌ها | *ānhā* | they / them |

> Note: **شما** is used for formal "you" (addressing one person respectfully) OR plural "you." This is like Urdu **آپ** for formal respect.

### Possessive Pronouns (via Ezafe)
| Persian | Transliteration | English |
|---|---|---|
| کتابِ من | *ketāb-e man* | my book |
| کتابِ تو | *ketāb-e to* | your book |
| کتابِ او | *ketāb-e u* | his/her book |
| کتابِ ما | *ketāb-e mā* | our book |
| کتابِ شما | *ketāb-e shomā* | your (formal) book |
| کتابِ آن‌ها | *ketāb-e ānhā* | their book |

---

## 8. Present Tense — The می (*mi-*) Prefix

The present tense in Persian is formed by adding the prefix **می‌ (*mi-*)** before the present stem of the verb.

**Formula:** می + [present stem] + [personal ending]

### Present stem of رفتن (*raftan* — to go) = رو (*row*)
| Persian | Transliteration | English |
|---|---|---|
| می‌روم | *mi-ravam* | I go / I am going |
| می‌روی | *mi-ravi* | You go |
| می‌رود | *mi-ravad* | He/she goes |
| می‌رویم | *mi-ravim* | We go |
| می‌روید | *mi-ravid* | You (pl.) go |
| می‌روند | *mi-ravand* | They go |

### Present stem of خوردن (*khordan* — to eat) = خور (*khor*)
| Persian | Transliteration | English |
|---|---|---|
| می‌خورم | *mi-khoram* | I eat |
| می‌خوری | *mi-khori* | You eat |
| می‌خورد | *mi-khorad* | He/she eats |
| می‌خوریم | *mi-khorim* | We eat |
| می‌خورید | *mi-khorid* | You (pl.) eat |
| می‌خورند | *mi-khorand* | They eat |

### Personal endings for present tense:
| Person | Ending | Example (with رفتن) |
|---|---|---|
| I | ـم (-am) | می‌روم |
| You (sg.) | ـی (-i) | می‌روی |
| He/She/It | ـد (-ad) | می‌رود |
| We | ـیم (-im) | می‌رویم |
| You (pl.) | ـید (-id) | می‌روید |
| They | ـند (-and) | می‌روند |

---

## 9. Negation — نمی (*nemi-*)

To negate a present tense verb, replace می with **نمی‌ (*nemi-*)**:

| Positive | Negative | English |
|---|---|---|
| می‌روم | نمی‌روم | I don't go |
| می‌خورم | نمی‌خورم | I don't eat |
| می‌دانم | نمی‌دانم | I don't know |
| می‌فهمم | نمی‌فهمم | I don't understand |

> Negation is beautifully simple in Persian — just swap می → نمی.

---

## 10. Question Words

| Persian | Transliteration | English | Urdu Equivalent |
|---|---|---|---|
| چه | *che* | what | کیا |
| کی | *ki* | who | کون |
| کجا | *kojā* | where | کہاں |
| کِی | *key* | when | کب |
| چرا | *cherā* | why | کیوں |
| چطور | *chetour* | how | کیسے |
| چقدر | *cheqadr* | how much/many | کتنا |
| کدام | *kodām* | which | کون سا |

### Example questions:
- **کتاب کجاست؟** (*ketāb kojāst?*) — Where is the book?
- **تو کی هستی؟** (*to ki hasti?*) — Who are you?
- **این چیست؟** (*in chist?*) — What is this?
- **چرا نمی‌آیی؟** (*cherā nemi-āyi?*) — Why aren't you coming?
- **قیمت چقدر است؟** (*qeymat cheqadr ast?*) — How much is the price?

---

## Summary: Key Persian Grammar Features

| Feature | Persian | Compare |
|---|---|---|
| Gender | None | Arabic: male/female for every noun |
| Word Order | SOV | Same as Urdu |
| Articles | No "the"; ـی for "a" | Same as Urdu — context-driven |
| Plural | Add ها or ان | Urdu: add ں, وں |
| Ezafe | ـِ connects noun+adj/possessive | Same as literary Urdu |
| Pronoun for he/she | او (*u*) — one word for both | Urdu: وہ for both |
| Present tense | می + stem + ending | Urdu: stem + تا ہوں |
| Negation | نمی + stem | Urdu: نہیں + verb |

</div>

<div class="lang-ur" style="direction:rtl;font-family:Noto Nastaliq Urdu,Georgia,serif;text-align:right;line-height:2.4;font-size:1.05rem;" markdown="1">

## فارسی گرامر کی بنیادیں

اردو بولنے والوں کے لیے خوشخبری: فارسی گرامر کئی لحاظ سے اردو سے بھی آسان ہے!

---

## ۱. فارسی میں مذکر/مؤنث نہیں!

فارسی میں **کوئی صنف (gender) نہیں ہوتی**۔ عربی میں ہر اسم مذکر یا مؤنث ہے، لیکن فارسی میں نہیں۔

- **او** (*اُو*) = وہ (مرد بھی، عورت بھی) — ایک ضمیر دونوں کے لیے!
- کتاب، دوست، خانہ — کوئی صنف نہیں

یہ اردو سے بھی آسان ہے جہاں بڑا/بڑی، گیا/گئی کا فرق ہے۔

---

## ۲. جملے کی ترتیب: فاعل – مفعول – فعل (SOV)

فارسی میں جملے کی ترتیب بالکل اردو جیسی ہے:

| زبان | مثال |
|---|---|
| فارسی | من (فاعل) غذا (مفعول) می‌خورم (فعل) |
| اردو | میں (فاعل) کھانا (مفعول) کھاتا ہوں (فعل) |
| انگریزی | I eat food — فاعل فعل مفعول |

اردو والوں کے لیے فارسی جملے بالکل فطری لگیں گے!

---

## ۳. فعل "ہونا" (بودن)

| فارسی | تلفظ | اردو |
|---|---|---|
| هستم | ہَستَم | میں ہوں |
| هستی | ہَستی | تم ہو |
| است | اَست | وہ ہے |
| هستیم | ہَستیم | ہم ہیں |
| هستید | ہَستید | آپ ہیں |
| هستند | ہَستَند | وہ ہیں |

مختصر شکلیں (جو زیادہ استعمال ہوتی ہیں):
- خوبم (*خوبَم*) = میں ٹھیک ہوں
- خوبی (*خوبی*) = تم ٹھیک ہو
- خوب است (*خوب اَست*) = وہ ٹھیک ہے

---

## ۴. کوئی معرفہ نہیں

فارسی میں "the" نہیں ہوتا — بالکل اردو کی طرح سیاق و سباق بتاتا ہے۔

نکرہ کے لیے: کتابی (*کِتابی*) = ایک کتاب، یا یک کتاب (*یک کِتاب*)

---

## ۵. جمع: ہا (-ها) لگائیں

| واحد | جمع | ترجمہ |
|---|---|---|
| کتاب | کتاب‌ها | کتابیں |
| دوست | دوست‌ها | دوست |
| بچه | بچه‌ها | بچے |

رسمی فارسی میں جاندار چیزوں کے لیے **ان (-ان)** بھی آتا ہے: دانشجویان (طلبہ)

---

## ۶. اضافہ (Ezafe) — فارسی کی خاص خصوصیت

اضافہ ایک چھوٹی سی کسرہ (ِ) ہے جو اسم کے بعد آتی ہے:
- **اسم + صفت:** کتابِ بزرگ = بڑی کتاب
- **اسم + ملکیت:** کتابِ من = میری کتاب

**اردو والوں کے لیے:** آپ یہ پہلے سے جانتے ہیں! اردو شاعری اور رسمی زبان میں یہ عام ہے:
- کتابِ خدا، شاہِ ایران، حسنِ یوسف

---

## ۷. ضمائر

| فارسی | تلفظ | اردو |
|---|---|---|
| من | مَن | میں |
| تو | تو | تم |
| او | اُو | وہ (مرد یا عورت) |
| ما | ما | ہم |
| شما | شُما | آپ |
| آن‌ها | آنہا | وہ (جمع) |

**شما** = آپ (ادب کے ساتھ، بالکل اردو کے "آپ" کی طرح)

---

## ۸. حال زمانہ: می + فعل

حال زمانہ بنانے کا طریقہ: **می‌** + فعل کا حال ساق (present stem) + شخصی علامت

فعل رفتن (جانا) کا حال زمانہ:

| فارسی | تلفظ | اردو |
|---|---|---|
| می‌روم | می‌رَوَم | میں جاتا/جاتی ہوں |
| می‌روی | می‌رَوی | تم جاتے ہو |
| می‌رود | می‌رَوَد | وہ جاتا/جاتی ہے |
| می‌رویم | می‌رَویم | ہم جاتے ہیں |
| می‌روید | می‌رَوید | آپ جاتے ہیں |
| می‌روند | می‌رَوَند | وہ جاتے ہیں |

---

## ۹. نفی: نمی‌ + فعل

نفی بنانا بہت آسان ہے — **می‌** کو **نمی‌** سے بدل دیں:

| مثبت | منفی | ترجمہ |
|---|---|---|
| می‌روم | نمی‌روم | میں نہیں جاتا |
| می‌خورم | نمی‌خورم | میں نہیں کھاتا |
| می‌دانم | نمی‌دانم | مجھے نہیں معلوم |

---

## ۱۰. سوالیہ الفاظ

| فارسی | تلفظ | اردو |
|---|---|---|
| چه | چِہ | کیا |
| کی | کی | کون |
| کجا | کُجا | کہاں |
| کِی | کِی | کب |
| چرا | چِرا | کیوں |
| چطور | چِطور | کیسے |
| چقدر | چِقَدر | کتنا |

مثالیں:
- **کتاب کجاست؟** — کتاب کہاں ہے؟
- **این چیست؟** — یہ کیا ہے؟
- **چرا نمی‌آیی؟** — تم کیوں نہیں آ رہے؟

</div>
