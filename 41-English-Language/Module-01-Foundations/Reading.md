# Module 1 — Foundations (A1): Reading

<div class="lang-switcher" style="background:linear-gradient(135deg,#1e1b4b,#312e81);border-radius:12px;padding:1.25rem;margin:0 0 2rem;text-align:center;box-shadow:0 4px 16px rgba(99,102,241,0.3);">
  <p style="color:#e0e7ff;font-size:1rem;font-weight:600;margin:0 0 0.85rem;">
    🌐 Choose your learning language / اپنی زبان منتخب کریں
  </p>
  <div style="display:flex;gap:0.75rem;justify-content:center;flex-wrap:wrap;">
    <button id="ls-btn-en" onclick="certHubSetLang('en')" style="padding:0.6rem 1.6rem;border-radius:9px;border:2px solid #818cf8;background:#fff;color:#4338ca;font-weight:700;font-size:0.95rem;cursor:pointer;">
      🇬🇧 English
    </button>
    <button id="ls-btn-ur" onclick="certHubSetLang('ur')" style="padding:0.6rem 1.6rem;border-radius:9px;border:2px solid #818cf8;background:#fff;color:#4338ca;font-weight:700;font-size:0.95rem;cursor:pointer;">
      🇵🇰 اردو (Urdu)
    </button>
  </div>
</div>
<script>
function certHubSetLang(l){
  try{localStorage.setItem('cert-hub-lang-pref',l);}catch(e){}
  document.querySelectorAll('.lang-en,.lang-ur').forEach(function(el){el.style.display='none';});
  document.querySelectorAll('.lang-'+l).forEach(function(el){el.style.display='block';});
  var be=document.getElementById('ls-btn-en'),bu=document.getElementById('ls-btn-ur');
  if(be&&bu){be.style.background=l==='en'?'#4338ca':'#fff';be.style.color=l==='en'?'#fff':'#4338ca';bu.style.background=l==='ur'?'#4338ca':'#fff';bu.style.color=l==='ur'?'#fff':'#4338ca';}
}
(function(){var s='';try{s=localStorage.getItem('cert-hub-lang-pref')||'';}catch(e){}certHubSetLang(s||'en');})();
</script>

---

<div class="lang-en">

## Why English? The Language That Opens Doors

English is spoken by over **1.5 billion people** worldwide — as a first, second, or foreign language. It is the official language of international business, aviation, science, technology, and diplomacy. In Pakistan, English proficiency dramatically increases career opportunities, university admission chances, and the ability to connect with the global community.

**Key reasons to master English:**
- Official language of the internet — over 60% of all web content is in English
- Required for most professional certifications (IT, medical, engineering, finance)
- Enables travel and communication in 100+ countries
- Gateway to English-language universities worldwide
- Higher salary potential in Pakistani job market

> 🎯 **Tip:** You already know more English than you think! Words like "mobile," "internet," "office," "doctor," and "station" are used daily in Pakistani conversations.

---

## The 26-Letter Alphabet

English has **26 letters** — 5 vowels (A, E, I, O, U) and 21 consonants. The table below shows each letter with its name, a common pronunciation guide designed for Urdu speakers, and an example word.

| Letter | Name | IPA Sound | Example Word | Urdu Speaker Note |
|--------|------|-----------|--------------|-------------------|
| A a | ay | /eɪ/ | **A**pple | Like "اے" in اے دوست |
| B b | bee | /b/ | **B**all | Like "ب" in بال |
| C c | see | /k/ or /s/ | **C**at / **C**ity | Two sounds! Before e/i = /s/ |
| D d | dee | /d/ | **D**og | Like "د" in دروازہ |
| E e | ee | /iː/ or /ɛ/ | **E**gg | Short sound, like "اے" but shorter |
| F f | ef | /f/ | **F**ish | Like "ف" in فون |
| G g | jee | /g/ or /dʒ/ | **G**oat / **G**em | Two sounds! Before e/i = /dʒ/ |
| H h | aitch | /h/ | **H**ouse | Like "ہ" in ہوا |
| I i | eye | /aɪ/ or /ɪ/ | **I**ce / **I**t | Long "آئی" or short "اِ" |
| J j | jay | /dʒ/ | **J**uice | Like "ج" but with "d" before it |
| K k | kay | /k/ | **K**ite | Like "ک" in کام |
| L l | el | /l/ | **L**ion | Like "ل" in لال |
| M m | em | /m/ | **M**oon | Like "م" in ماں |
| N n | en | /n/ | **N**ose | Like "ن" in ناک |
| O o | oh | /oʊ/ or /ɒ/ | **O**pen / **O**n | Long "او" or short "آ" |
| P p | pee | /p/ | **P**en | Like "پ" in پاکستان |
| Q q | cue | /kw/ | **Q**ueen | Always followed by "u" |
| R r | ar | /r/ | **R**ain | Softer than Urdu "ر" |
| S s | ess | /s/ or /z/ | **S**un / **S**ay | Can sound like "ز" at end |
| T t | tee | /t/ | **T**ree | Like "ت" in تالہ |
| U u | you | /juː/ or /ʌ/ | **U**se / **U**p | Long "یو" or short "اَ" |
| V v | vee | /v/ | **V**an | **No Urdu equivalent!** |
| W w | double-u | /w/ | **W**ater | Like "و" in واپس |
| X x | ex | /ks/ or /gz/ | Bo**x** | Usually /ks/ sound |
| Y y | why | /j/ or /aɪ/ | **Y**ellow / m**y** | Like "ی" at start of word |
| Z z | zed | /z/ | **Z**ero | Like "ز" in زبان |

> 🚨 **Common Mistake:** Urdu speakers often say "W" like "double-V" and "V" like "W/B". Practice: **V**an (not "Ban"), **W**ater (not "Vater").

---

## Vowels vs Consonants — Short vs Long Vowels

### The 5 Vowels: A, E, I, O, U

Every English word needs at least one vowel. Vowels are the "open" sounds — your mouth stays open when you say them.

| Vowel | Short Sound | Example | Long Sound | Example |
|-------|-------------|---------|------------|---------|
| A | /æ/ | c**a**t, h**a**t | /eɪ/ | c**a**ke, d**a**y |
| E | /ɛ/ | b**e**d, r**e**d | /iː/ | h**e**re, **ea**t |
| I | /ɪ/ | s**i**t, b**i**g | /aɪ/ | k**i**te, t**i**me |
| O | /ɒ/ | d**o**g, h**o**t | /oʊ/ | h**o**me, g**o** |
| U | /ʌ/ | c**u**p, r**u**n | /juː/ | c**u**te, **u**se |

> 🎯 **Tip:** A silent "e" at the end of a word makes the vowel before it long: **kit** → **kite**, **hop** → **hope**, **cut** → **cute**.

---

## Numbers 1–100

### 1–20

| Number | English | Urdu |
|--------|---------|------|
| 1 | one | ایک |
| 2 | two | دو |
| 3 | three | تین |
| 4 | four | چار |
| 5 | five | پانچ |
| 6 | six | چھ |
| 7 | seven | سات |
| 8 | eight | آٹھ |
| 9 | nine | نو |
| 10 | ten | دس |
| 11 | eleven | گیارہ |
| 12 | twelve | بارہ |
| 13 | thirteen | تیرہ |
| 14 | fourteen | چودہ |
| 15 | fifteen | پندرہ |
| 16 | sixteen | سولہ |
| 17 | seventeen | سترہ |
| 18 | eighteen | اٹھارہ |
| 19 | nineteen | اُنیس |
| 20 | twenty | بیس |

### Tens: 20–100

| Number | English | Pattern |
|--------|---------|---------|
| 20 | twenty | — |
| 30 | thirty | — |
| 40 | forty | — |
| 50 | fifty | — |
| 60 | sixty | — |
| 70 | seventy | — |
| 80 | eighty | — |
| 90 | ninety | — |
| 100 | one hundred | — |

**In-between numbers:** twenty-**one** (21), thirty-**five** (35), forty-**seven** (47)

---

## Basic Greetings

| English | Urdu | When to Use |
|---------|------|-------------|
| Hello | ہیلو / سلام | Any time — universal |
| Hi | ہائے | Casual / friends |
| Good morning | صبح بخیر | Until ~noon |
| Good afternoon | دوپہر بخیر | Noon–5 pm |
| Good evening | شام بخیر | After 5 pm |
| Good night | شب بخیر | Leaving at night / bedtime |
| How are you? | آپ کیسے ہیں؟ | Asking about wellbeing |
| I'm fine, thank you | میں ٹھیک ہوں، شکریہ | Standard reply |
| Nice to meet you | آپ سے مل کر خوشی ہوئی | First meeting |
| Goodbye / Bye | خدا حافظ / الوداع | Leaving |
| See you later | پھر ملیں گے | Casual farewell |
| Please | براہ کرم | Making a request |
| Thank you | شکریہ | Expressing thanks |
| You're welcome | کوئی بات نہیں | Responding to thanks |
| Sorry / Excuse me | معاف کیجیے | Apologizing / getting attention |

---

## Days of the Week and Months

| Day | Urdu |
|-----|------|
| Monday | پیر |
| Tuesday | منگل |
| Wednesday | بدھ |
| Thursday | جمعرات |
| Friday | جمعہ |
| Saturday | ہفتہ |
| Sunday | اتوار |

| Month | Urdu |
|-------|------|
| January | جنوری |
| February | فروری |
| March | مارچ |
| April | اپریل |
| May | مئی |
| June | جون |
| July | جولائی |
| August | اگست |
| September | ستمبر |
| October | اکتوبر |
| November | نومبر |
| December | دسمبر |

---

## Colors and Basic Adjectives

| English | Urdu | English | Urdu |
|---------|------|---------|------|
| Red | سرخ / لال | Big | بڑا |
| Blue | نیلا | Small | چھوٹا |
| Green | سبز | Hot | گرم |
| Yellow | پیلا | Cold | ٹھنڈا |
| Black | کالا | Good | اچھا |
| White | سفید | Bad | برا |
| Orange | نارنجی | New | نیا |
| Purple | بنفشی / جامنی | Old | پرانا |
| Pink | گلابی | Fast | تیز |
| Brown | بھورا | Slow | آہستہ |

---

## The Verb "To Be": Am / Is / Are

This is the most important verb in English. Learn it perfectly.

| Pronoun | To Be | Example Sentence | Urdu |
|---------|-------|-----------------|------|
| I | **am** | I **am** happy. | میں خوش ہوں |
| You | **are** | You **are** a student. | آپ ایک طالب علم ہیں |
| He | **is** | He **is** my brother. | وہ میرا بھائی ہے |
| She | **is** | She **is** a doctor. | وہ ڈاکٹر ہے |
| It | **is** | It **is** hot today. | آج گرم ہے |
| We | **are** | We **are** from Lahore. | ہم لاہور سے ہیں |
| They | **are** | They **are** my friends. | وہ میرے دوست ہیں |

**Negative:** Add **not** after am/is/are.
- I am **not** tired. | You are **not** late. | She is **not** here.

**Question:** Move am/is/are to the **beginning**.
- **Are** you ready? | **Is** he a teacher? | **Am** I right?

---

## Common Mistakes Urdu Speakers Make

> 🚨 **Common Mistake 1 — Articles "a" and "the":**
> Urdu has no articles, so Urdu speakers often forget them.
> - ❌ "I am student." → ✅ "I am **a** student."
> - ❌ "Can I use phone?" → ✅ "Can I use **the** phone?"

> 🚨 **Common Mistake 2 — Verb order:**
> Urdu is Subject-Object-Verb (SOV): "میں کھانا کھاتا ہوں" (I food eat).
> English is Subject-Verb-Object (SVO): "I **eat** food." — the verb comes **before** the object.
> - ❌ "I food eat." → ✅ "I eat food."

> 🚨 **Common Mistake 3 — "He" vs "She":**
> Urdu uses "وہ" for both he and she, so speakers often confuse them.
> - ❌ "She is my brother." → ✅ "**He** is my brother."

> 🎯 **Tip:** When speaking, slow down and think: Who (subject) → Does what (verb) → To what/whom (object). This is the English formula.

---

## Vocabulary Table: 50 Essential First Words

| # | English | IPA | Urdu Meaning |
|---|---------|-----|--------------|
| 1 | water | /ˈwɔːtər/ | پانی |
| 2 | food | /fuːd/ | کھانا |
| 3 | house | /haʊs/ | گھر |
| 4 | family | /ˈfæmɪli/ | خاندان |
| 5 | mother | /ˈmʌðər/ | ماں |
| 6 | father | /ˈfɑːðər/ | باپ |
| 7 | child | /tʃaɪld/ | بچہ |
| 8 | friend | /frɛnd/ | دوست |
| 9 | school | /skuːl/ | اسکول |
| 10 | work | /wɜːrk/ | کام |
| 11 | time | /taɪm/ | وقت |
| 12 | day | /deɪ/ | دن |
| 13 | name | /neɪm/ | نام |
| 14 | money | /ˈmʌni/ | پیسہ |
| 15 | city | /ˈsɪti/ | شہر |
| 16 | country | /ˈkʌntri/ | ملک |
| 17 | man | /mæn/ | آدمی |
| 18 | woman | /ˈwʊmən/ | عورت |
| 19 | book | /bʊk/ | کتاب |
| 20 | door | /dɔːr/ | دروازہ |
| 21 | road | /roʊd/ | سڑک |
| 22 | car | /kɑːr/ | گاڑی |
| 23 | phone | /foʊn/ | فون |
| 24 | hand | /hænd/ | ہاتھ |
| 25 | eye | /aɪ/ | آنکھ |
| 26 | heart | /hɑːrt/ | دل |
| 27 | head | /hɛd/ | سر |
| 28 | eat | /iːt/ | کھانا |
| 29 | drink | /drɪŋk/ | پینا |
| 30 | go | /goʊ/ | جانا |
| 31 | come | /kʌm/ | آنا |
| 32 | see | /siː/ | دیکھنا |
| 33 | know | /noʊ/ | جاننا |
| 34 | want | /wɒnt/ | چاہنا |
| 35 | give | /gɪv/ | دینا |
| 36 | get | /gɛt/ | حاصل کرنا |
| 37 | think | /θɪŋk/ | سوچنا |
| 38 | say | /seɪ/ | کہنا |
| 39 | love | /lʌv/ | پیار |
| 40 | help | /hɛlp/ | مدد |
| 41 | good | /gʊd/ | اچھا |
| 42 | new | /njuː/ | نیا |
| 43 | big | /bɪg/ | بڑا |
| 44 | first | /fɜːrst/ | پہلا |
| 45 | last | /læst/ | آخری |
| 46 | long | /lɒŋ/ | لمبا |
| 47 | small | /smɔːl/ | چھوٹا |
| 48 | yes | /jɛs/ | ہاں |
| 49 | no | /noʊ/ | نہیں |
| 50 | please | /pliːz/ | براہ کرم |

---

## Practice Dialogue: Meeting Someone for the First Time

> 🎯 **Tip:** Read the dialogue out loud. Repeat the English line, then try to say it without looking.

**Ahmed meets Sarah at an English class:**

**Ahmed:** Hello! My name is Ahmed. What is your name?
**Sarah:** Hi! My name is Sarah. Nice to meet you, Ahmed.
**Ahmed:** Nice to meet you too, Sarah. Where are you from?
**Sarah:** I am from Karachi. And you?
**Ahmed:** I am from Lahore. Is this your first English class?
**Sarah:** Yes, it is. I am nervous but excited!
**Ahmed:** Don't worry. The teacher is very good. See you in class!
**Sarah:** Yes! Goodbye, Ahmed!

---

## Summary and Next Steps

In this module you learned:
- The 26-letter alphabet with sounds for Urdu speakers
- Short and long vowels
- Numbers 1–100
- Essential greetings and farewells
- Days of the week and months
- Colors and basic adjectives
- The verb "to be" (am/is/are)
- 50 core vocabulary words
- The three most common Urdu-speaker errors

**Next:** Module 2 — Core Vocabulary will expand your word bank to 500+ words organized by topic.

</div>

<div class="lang-ur" style="direction:rtl;font-family:Noto Nastaliq Urdu,Georgia,serif;text-align:right;line-height:2.4;font-size:1.05rem;">

## انگریزی کیوں؟ وہ زبان جو دروازے کھولتی ہے

انگریزی دنیا بھر میں **ڈیڑھ ارب سے زیادہ لوگ** بولتے ہیں — پہلی، دوسری، یا غیر ملکی زبان کے طور پر۔ یہ بین الاقوامی تجارت، ہوابازی، سائنس، ٹیکنالوجی اور سفارت کاری کی سرکاری زبان ہے۔ پاکستان میں انگریزی پر عبور آپ کے کیریئر کے مواقع، یونیورسٹی داخلے کے امکانات اور عالمی برادری سے جڑنے کی صلاحیت کو نمایاں طور پر بڑھاتا ہے۔

**انگریزی سیکھنے کی اہم وجوہات:**
- انٹرنیٹ کی سرکاری زبان — 60 فیصد سے زیادہ ویب مواد انگریزی میں ہے
- زیادہ تر پیشہ ورانہ سرٹیفیکیشنز کے لیے ضروری (آئی ٹی، طبی، انجینئرنگ، فنانس)
- 100 سے زیادہ ممالک میں سفر اور رابطے کے لیے
- دنیا بھر کی انگریزی یونیورسٹیوں کا دروازہ
- پاکستانی جاب مارکیٹ میں زیادہ تنخواہ کا امکان

> 🎯 **ٹپ:** آپ اپنے خیال سے زیادہ انگریزی جانتے ہیں! "موبائل"، "انٹرنیٹ"، "آفس"، "ڈاکٹر" اور "اسٹیشن" جیسے الفاظ روزانہ پاکستانی گفتگو میں استعمال ہوتے ہیں۔

---

## 26 حروف تہجی

انگریزی میں **26 حروف** ہیں — 5 حروف علت (A, E, I, O, U) اور 21 حروف صحیح۔ نیچے دی گئی جدول میں ہر حرف اس کے نام، تلفظ اور مثال کے ساتھ دیا گیا ہے۔

اردو بولنے والوں کے لیے خاص نوٹس:
- **V** کی آواز اردو میں نہیں ہے۔ یہ "ب" یا "و" سے مختلف ہے۔ ہونٹ اوپر والے دانتوں کے قریب لائیں۔
- **W** کی آواز "و" کے قریب ہے — "van" کو "ban" نہ کہیں۔
- **C** کی دو آوازیں ہیں: "cat" میں "ک" اور "city" میں "س"
- **G** کی دو آوازیں ہیں: "goat" میں "گ" اور "gem" میں "ج"

> 🚨 **عام غلطی:** اردو بولنے والے اکثر "W" کو "V" کی طرح اور "V" کو "W" یا "B" کی طرح بولتے ہیں۔ مشق کریں: **Van** (نہ کہ "Ban")، **Water** (نہ کہ "Vater")۔

---

## حروف علت اور حروف صحیح — چھوٹی اور لمبی آوازیں

### 5 حروف علت: A, E, I, O, U

ہر انگریزی لفظ میں کم از کم ایک حرف علت ہوتا ہے۔ حروف علت "کھلی" آوازیں ہیں۔

| حرف علت | چھوٹی آواز | مثال | لمبی آواز | مثال |
|---------|------------|------|-----------|------|
| A | /æ/ جیسے "اَ" | cat, hat | /eɪ/ جیسے "اے" | cake, day |
| E | /ɛ/ جیسے "اے" | bed, red | /iː/ جیسے "ای" | here, eat |
| I | /ɪ/ جیسے "اِ" | sit, big | /aɪ/ جیسے "آئی" | kite, time |
| O | /ɒ/ جیسے "آ" | dog, hot | /oʊ/ جیسے "او" | home, go |
| U | /ʌ/ جیسے "اَ" | cup, run | /juː/ جیسے "یو" | cute, use |

> 🎯 **ٹپ:** لفظ کے آخر میں خاموش "e" آنے سے پہلے والی حرف علت لمبی ہو جاتی ہے: **kit** → **kite**، **hop** → **hope**۔

---

## گنتی ۱ سے ۱۰۰ تک

### ۱ سے ۲۰

| نمبر | انگریزی | اردو |
|------|---------|------|
| ۱ | one | ایک |
| ۲ | two | دو |
| ۳ | three | تین |
| ۴ | four | چار |
| ۵ | five | پانچ |
| ۶ | six | چھ |
| ۷ | seven | سات |
| ۸ | eight | آٹھ |
| ۹ | nine | نو |
| ۱۰ | ten | دس |
| ۱۱ | eleven | گیارہ |
| ۱۲ | twelve | بارہ |
| ۱۳ | thirteen | تیرہ |
| ۱۴ | fourteen | چودہ |
| ۱۵ | fifteen | پندرہ |
| ۱۶ | sixteen | سولہ |
| ۱۷ | seventeen | سترہ |
| ۱۸ | eighteen | اٹھارہ |
| ۱۹ | nineteen | اُنیس |
| ۲۰ | twenty | بیس |

### دہائیاں: ۳۰ سے ۱۰۰

| نمبر | انگریزی |
|------|---------|
| ۳۰ | thirty |
| ۴۰ | forty |
| ۵۰ | fifty |
| ۶۰ | sixty |
| ۷۰ | seventy |
| ۸۰ | eighty |
| ۹۰ | ninety |
| ۱۰۰ | one hundred |

**درمیانی نمبر:** twenty-**one** (21)، thirty-**five** (35)

---

## بنیادی سلام دعا

| انگریزی | اردو | کب استعمال کریں |
|---------|------|----------------|
| Hello | سلام / ہیلو | کسی بھی وقت |
| Hi | ہائے | دوستوں کے ساتھ |
| Good morning | صبح بخیر | دوپہر تک |
| Good afternoon | دوپہر بخیر | دوپہر سے شام 5 بجے تک |
| Good evening | شام بخیر | شام 5 بجے کے بعد |
| Good night | شب بخیر | رات کو جاتے وقت |
| How are you? | آپ کیسے ہیں؟ | حال احوال پوچھنے کے لیے |
| I'm fine, thank you | میں ٹھیک ہوں، شکریہ | معیاری جواب |
| Nice to meet you | آپ سے مل کر خوشی ہوئی | پہلی ملاقات میں |
| Goodbye / Bye | خدا حافظ | جاتے وقت |
| Please | براہ کرم | درخواست کرتے وقت |
| Thank you | شکریہ | شکرگزاری ظاہر کرنے کے لیے |
| You're welcome | کوئی بات نہیں | شکریہ کے جواب میں |
| Sorry / Excuse me | معاف کیجیے | معافی مانگنے / توجہ دلانے کے لیے |

---

## ہفتے کے دن اور مہینے

| دن | اردو |
|----|------|
| Monday | پیر |
| Tuesday | منگل |
| Wednesday | بدھ |
| Thursday | جمعرات |
| Friday | جمعہ |
| Saturday | ہفتہ |
| Sunday | اتوار |

---

## فعل "ہونا": Am / Is / Are

یہ انگریزی کا سب سے اہم فعل ہے۔ اسے مکمل طور پر یاد کریں۔

| ضمیر | To Be | مثال جملہ | اردو |
|------|-------|-----------|------|
| I (میں) | **am** | I **am** happy. | میں خوش ہوں |
| You (آپ/تم) | **are** | You **are** a student. | آپ طالب علم ہیں |
| He (وہ - مرد) | **is** | He **is** my brother. | وہ میرا بھائی ہے |
| She (وہ - عورت) | **is** | She **is** a doctor. | وہ ڈاکٹر ہے |
| It (یہ - چیز) | **is** | It **is** hot today. | آج گرم ہے |
| We (ہم) | **are** | We **are** from Lahore. | ہم لاہور سے ہیں |
| They (وہ - جمع) | **are** | They **are** my friends. | وہ میرے دوست ہیں |

**نفی (منفی جملہ):** am/is/are کے بعد **not** لگائیں۔
- I am **not** tired. | She is **not** here.

**سوال:** am/is/are کو **شروع** میں لائیں۔
- **Are** you ready? | **Is** he a teacher?

---

## اردو بولنے والوں کی عام غلطیاں

> 🚨 **عام غلطی 1 — Articles "a" اور "the":**
> اردو میں articles نہیں ہوتے، اس لیے اردو بولنے والے انہیں بھول جاتے ہیں۔
> - ❌ "I am student." → ✅ "I am **a** student."
> - ❌ "Can I use phone?" → ✅ "Can I use **the** phone?"

> 🚨 **عام غلطی 2 — فعل کی ترتیب:**
> اردو میں ترتیب: فاعل-مفعول-فعل (میں کھانا کھاتا ہوں)
> انگریزی میں ترتیب: فاعل-فعل-مفعول (I **eat** food)
> - ❌ "I food eat." → ✅ "I eat food."

> 🚨 **عام غلطی 3 — "He" اور "She":**
> اردو میں مرد اور عورت دونوں کے لیے "وہ" استعمال ہوتا ہے۔
> - ❌ "She is my brother." → ✅ "**He** is my brother."

---

## مشق گفتگو: پہلی بار کسی سے ملنا

**احمد کلاس میں سارہ سے ملتا ہے:**

**Ahmed:** Hello! My name is Ahmed. What is your name?
*سلام! میرا نام احمد ہے۔ آپ کا نام کیا ہے؟*

**Sarah:** Hi! My name is Sarah. Nice to meet you, Ahmed.
*ہائے! میرا نام سارہ ہے۔ آپ سے مل کر خوشی ہوئی، احمد۔*

**Ahmed:** Nice to meet you too. Where are you from?
*مجھے بھی خوشی ہوئی۔ آپ کہاں سے ہیں؟*

**Sarah:** I am from Karachi. And you?
*میں کراچی سے ہوں۔ اور آپ؟*

**Ahmed:** I am from Lahore. Is this your first English class?
*میں لاہور سے ہوں۔ کیا یہ آپ کی پہلی انگریزی کلاس ہے؟*

**Sarah:** Yes, it is. I am nervous but excited!
*جی ہاں۔ میں گھبرائی ہوئی ہوں لیکن پرجوش بھی ہوں!*

**Ahmed:** Don't worry. See you in class!
*فکر نہ کریں۔ کلاس میں ملتے ہیں!*

---

## خلاصہ اور اگلے اقدامات

اس ماڈیول میں آپ نے سیکھا:
- 26 حروف تہجی اور ان کی آوازیں
- چھوٹی اور لمبی حروف علت
- گنتی ۱ سے ۱۰۰ تک
- بنیادی سلام دعا
- ہفتے کے دن اور مہینے
- رنگ اور بنیادی صفات
- فعل "ہونا" (am/is/are)
- 50 بنیادی الفاظ
- اردو بولنے والوں کی تین عام غلطیاں

**اگلا قدم:** ماڈیول 2 — بنیادی ذخیرہ الفاظ، جہاں آپ 500 سے زیادہ الفاظ سیکھیں گے۔

</div>
