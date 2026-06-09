# Module 3 — Basic Grammar (A2): Reading

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

## Parts of Speech Overview

Every word in an English sentence belongs to a **part of speech** — its grammatical function. There are 8 main parts of speech:

| Part of Speech | What It Does | Examples |
|----------------|-------------|---------|
| **Noun** | Names a person, place, thing, or idea | Ahmed, Karachi, car, love |
| **Verb** | Expresses an action or state | run, eat, is, seem |
| **Adjective** | Describes a noun | big, happy, red, old |
| **Adverb** | Describes a verb, adjective, or another adverb | quickly, very, never, here |
| **Pronoun** | Replaces a noun | he, she, it, they, I |
| **Preposition** | Shows relationship between words | in, on, at, under, with |
| **Conjunction** | Connects words or clauses | and, but, or, because, although |
| **Article** | Specifies or introduces a noun | a, an, the |

---

## Articles: A, An, The — The #1 Urdu-Speaker Error

Urdu has **no articles at all**. This is why articles are the most common grammar mistake for Urdu speakers. You MUST learn these rules.

### "A" and "An" — Indefinite Articles

Use **a/an** when:
- You are talking about something for the **first time**
- You mean **one of many** (any member of a group)

| Use "A" before consonant sounds | Use "AN" before vowel sounds |
|--------------------------------|------------------------------|
| a book | an apple |
| a car | an elephant |
| a university (u = /juː/ consonant sound!) | an hour (h is silent — starts with /aʊ/) |
| a dog | an umbrella |

> 🚨 **Common Mistake:** It is the SOUND, not the letter, that determines a/an.
> - "university" starts with the letter U but the sound is /juː/ (like "you") → use **a** university
> - "hour" starts with H but H is silent → the word sounds like /aʊər/ → use **an** hour

### "The" — Definite Article

Use **the** when:
- You are referring to a **specific** thing both speaker and listener know about
- There is **only one** of something
- You have **already mentioned** it

| Correct Use of "The" | Urdu Equivalent Logic |
|----------------------|-----------------------|
| The sun is bright. (only one sun) | سورج روشن ہے۔ |
| I saw a dog. The dog was big. (2nd mention) | میں نے ایک کتا دیکھا۔ کتا بڑا تھا۔ |
| Please close the door. (specific door we can see) | دروازہ بند کریں۔ |
| The President of Pakistan | پاکستان کے صدر (only one) |

**DO NOT use "the" with:**
- General plurals: ~~The~~ Books are useful. → **Books** are useful.
- Names of countries, cities, people: ~~The~~ Pakistan → Pakistan
- Sports, subjects, meals: ~~The~~ football, ~~the~~ breakfast

---

## Nouns: Singular and Plural

### Regular Plurals

| Rule | Singular | Plural |
|------|----------|--------|
| Add **-s** | book, car, dog | books, cars, dogs |
| Add **-es** (after s, sh, ch, x, z) | bus, dish, church | buses, dishes, churches |
| **-y** → **-ies** (consonant before y) | city, baby, lady | cities, babies, ladies |
| **-f/-fe** → **-ves** | leaf, wife, knife | leaves, wives, knives |

### Irregular Plurals (Must Memorize)

| Singular | Plural | Urdu |
|----------|--------|------|
| man | men | آدمی / آدمی |
| woman | women | عورت / عورتیں |
| child | children | بچہ / بچے |
| tooth | teeth | دانت |
| foot | feet | پاؤں |
| mouse | mice | چوہا |
| person | people | شخص / لوگ |
| ox | oxen | بیل |
| sheep | sheep (no change) | بھیڑ |
| fish | fish (no change) | مچھلی |

> 🚨 **Common Mistake:** Urdu speakers often add -s to irregular plurals.
> - ❌ "childrens" → ✅ "children"
> - ❌ "peoples" → ✅ "people"
> - ❌ "mans" → ✅ "men"

---

## Pronouns

### Subject and Object Pronouns

| Subject | Object | Meaning |
|---------|--------|---------|
| I | me | میں / مجھے |
| you | you | آپ / آپ کو |
| he | him | وہ (مرد) / اسے |
| she | her | وہ (عورت) / اسے |
| it | it | یہ (چیز) / اسے |
| we | us | ہم / ہمیں |
| they | them | وہ (جمع) / انہیں |

### Possessive Adjectives and Pronouns

| Possessive Adj. | Meaning | Possessive Pronoun | Meaning |
|-----------------|---------|-------------------|---------|
| my | میرا/میری | mine | میرا |
| your | آپ کا | yours | آپ کا |
| his | اس کا (مرد) | his | اس کا |
| her | اس کی (عورت) | hers | اس کی |
| its | اس کا (چیز) | — | — |
| our | ہمارا | ours | ہمارا |
| their | ان کا | theirs | ان کا |

**Examples:**
- This is **my** book. → This book is **mine**.
- Is this **your** pen? → Is this pen **yours**?

---

## Present Simple Tense

**When to use:** Habits, routines, facts, general truths.
- I eat breakfast every morning.
- The sun rises in the east.
- She works at a hospital.

### Structure

| Form | Structure | Example |
|------|-----------|---------|
| Affirmative | Subject + verb (+ s/es for he/she/it) | She **works** every day. |
| Negative | Subject + do/does + not + verb | She **does not** work on Sundays. |
| Question | Do/Does + subject + verb? | **Does** she work late? |

### He/She/It — Add -s or -es

| Base Verb | He/She/It Form | Rule |
|-----------|---------------|------|
| work | work**s** | add -s |
| go | go**es** | add -es (after -o) |
| watch | watch**es** | add -es (after -ch) |
| study | stud**ies** | y → ies |
| have | ha**s** | irregular |

> 🚨 **Common Mistake:** Forgetting the -s for third person singular.
> - ❌ "She work every day." → ✅ "She work**s** every day."
> - ❌ "He go to school." → ✅ "He go**es** to school."

---

## Present Continuous Tense

**When to use:** Actions happening RIGHT NOW, or temporary situations.
- I am eating lunch. (happening now)
- She is studying for an exam. (temporary)
- They are building a new house. (ongoing)

### Structure

| Form | Structure | Example |
|------|-----------|---------|
| Affirmative | Subject + am/is/are + verb-ing | He **is sleeping**. |
| Negative | Subject + am/is/are + not + verb-ing | He **is not sleeping**. |
| Question | Am/Is/Are + subject + verb-ing? | **Is** he sleeping? |

### Spelling Rules for -ing

| Rule | Base | -ing form |
|------|------|-----------|
| Regular: add -ing | eat, drink, sleep | eating, drinking, sleeping |
| Drop silent -e | make, come, write | making, coming, writing |
| Double consonant (short vowel) | sit, run, swim | sitting, running, swimming |

---

## Present Simple vs Present Continuous

| Present Simple | Present Continuous |
|---------------|-------------------|
| Habits / routines | Right now |
| I **eat** lunch at 1 pm. | I **am eating** lunch now. |
| She **works** at a bank. | She **is working** on a report. |
| He **doesn't smoke**. | He **isn't smoking** right now. |
| **Does** she drive? | **Is** she driving? |
| Signal words: every day, always, usually | Signal words: now, at the moment, currently |

---

## Prepositions of Place

| Preposition | Meaning | Example |
|-------------|---------|---------|
| **in** | inside a container/space | The cat is **in** the box. |
| **on** | on a surface | The book is **on** the table. |
| **at** | at a specific point/place | I am **at** school. |
| **under** | below | The shoes are **under** the bed. |
| **behind** | at the back of | The car is **behind** the house. |
| **in front of** | at the front of | She is standing **in front of** the door. |
| **next to** | beside | The post office is **next to** the bank. |
| **between** | in the middle of two things | The park is **between** the school and the hospital. |
| **above** | higher than | The fan is **above** the table. |
| **below** | lower than | The temperature is **below** zero. |

---

## Question Words

| Word | Urdu | Used for | Example |
|------|------|---------|---------|
| **Who** | کون | Person | **Who** is calling? |
| **What** | کیا | Thing / information | **What** is your name? |
| **Where** | کہاں | Place | **Where** do you live? |
| **When** | کب | Time | **When** is the exam? |
| **Why** | کیوں | Reason | **Why** are you late? |
| **How** | کیسے | Manner / condition | **How** are you? |
| **How many** | کتنے (گنے جا سکیں) | Countable quantity | **How many** students? |
| **How much** | کتنا (نہ گنے جا سکیں) | Uncountable quantity | **How much** water? |
| **Which** | کون سا | Choice between options | **Which** bus do I take? |
| **Whose** | کس کا | Ownership | **Whose** bag is this? |

---

## Sentence Structure: Urdu (SOV) vs English (SVO)

This is one of the most fundamental differences for Urdu speakers.

| Language | Structure | Example |
|----------|-----------|---------|
| **Urdu** | Subject → Object → Verb | میں پانی پیتا ہوں (I water drink) |
| **English** | Subject → Verb → Object | I **drink** water |

| Urdu Sentence | Literal (Wrong) English | Correct English |
|--------------|------------------------|----------------|
| وہ کتاب پڑھتا ہے | He book reads | He **reads** a book |
| میں کھانا کھاتا ہوں | I food eat | I **eat** food |
| انہوں نے گانا گایا | They a song sang | They **sang** a song |
| وہ اسکول جاتی ہے | She school goes to | She **goes** to school |

---

## Common Grammar Errors and Corrections

| Error Type | Wrong | Correct | Explanation |
|------------|-------|---------|-------------|
| Missing article | She is doctor. | She is **a** doctor. | Urdu has no articles |
| Wrong article | I ate the rice. | I ate **some** rice. / I ate rice. | General eating — no article |
| Wrong pronoun | She is my brother. | **He** is my brother. | Urdu وہ = both he and she |
| Missing -s | She work here. | She work**s** here. | He/she/it needs -s |
| Wrong tense | I am eat now. | I **am eating** now. | Use -ing for ongoing action |
| Wrong preposition | He is on the class. | He is **in** the class. | In for rooms/spaces |
| SOV order | I book read. | I read **a** book. | English is SVO |
| Double negative | I don't know nothing. | I don't know **anything**. | One negative at a time |

---

## Summary and Next Steps

In this module you learned:
- The 8 parts of speech
- Articles (a/an/the) — the most critical grammar point for Urdu speakers
- Singular/plural nouns including irregular plurals
- Subject/object pronouns and possessives
- Present Simple (habits) vs Present Continuous (now)
- Prepositions of place
- Question words (who/what/where/when/why/how)
- English SVO vs Urdu SOV sentence structure

**Next:** Module 4 — Everyday Conversations puts your grammar to work in real-life dialogues.

</div>

<div class="lang-ur" style="direction:rtl;font-family:Noto Nastaliq Urdu,Georgia,serif;text-align:right;line-height:2.4;font-size:1.05rem;">

## کلام کے حصے (Parts of Speech)

انگریزی جملے میں ہر لفظ کسی نہ کسی **کلامی حصے** سے تعلق رکھتا ہے۔ 8 اہم حصے یہ ہیں:

| کلامی حصہ | کام | مثالیں |
|-----------|-----|--------|
| **اسم (Noun)** | کسی شخص، جگہ، چیز یا خیال کا نام | Ahmed, Karachi, car |
| **فعل (Verb)** | عمل یا حالت ظاہر کرتا ہے | run, eat, is |
| **صفت (Adjective)** | اسم کو بیان کرتا ہے | big, happy, red |
| **حال (Adverb)** | فعل یا صفت کو بیان کرتا ہے | quickly, very, never |
| **ضمیر (Pronoun)** | اسم کی جگہ لیتا ہے | he, she, I, they |
| **حرف جار (Preposition)** | الفاظ کے درمیان تعلق ظاہر کرتا ہے | in, on, at, under |
| **حرف ربط (Conjunction)** | الفاظ یا جملوں کو جوڑتا ہے | and, but, because |
| **مضمون (Article)** | اسم کو متعارف کراتا ہے | a, an, the |

---

## Articles: A, An, The — اردو بولنے والوں کی سب سے بڑی غلطی

اردو میں **articles بالکل نہیں ہوتے**۔ اسی لیے یہ اردو بولنے والوں کی سب سے عام گرامر غلطی ہے۔ یہ اصول ضرور سیکھیں:

### "A" اور "An" — غیر معروف articles

استعمال کریں جب:
- کسی چیز کے بارے میں **پہلی بار** بات کریں
- کسی گروپ کے **ایک فرد** کو ظاہر کریں

| "A" — حرف صحیح کی آواز سے پہلے | "AN" — حرف علت کی آواز سے پہلے |
|--------------------------------|--------------------------------|
| a book, a car, a dog | an apple, an elephant, an umbrella |
| a university (آواز "یو" سے شروع!) | an hour (h خاموش — آواز "آؤ" سے شروع) |

> 🚨 **عام غلطی:** یہ حرف پر نہیں بلکہ **آواز** پر منحصر ہے!
> - "university" حرف U سے شروع لیکن آواز "یو" → **a** university
> - "hour" حرف H سے شروع لیکن H خاموش ہے → آواز "آؤر" → **an** hour

### "The" — معروف article

استعمال کریں جب:
- کوئی **مخصوص** چیز جو سننے والے کو معلوم ہو
- کوئی ایک **ہی ہو** (صرف ایک)
- پہلے **ذکر ہو چکا ہو**

**"The" استعمال نہ کریں:**
- عام اسموں کے ساتھ: ~~The~~ books are useful → **Books** are useful
- ناموں کے ساتھ: ~~The~~ Pakistan → Pakistan
- کھیلوں، مضامین، کھانوں کے ساتھ: ~~The~~ breakfast → breakfast

---

## اسم: واحد اور جمع

### باقاعدہ جمع

| اصول | واحد | جمع |
|------|------|-----|
| **-s** لگائیں | book, car, dog | books, cars, dogs |
| **-es** (s, sh, ch, x کے بعد) | bus, dish, church | buses, dishes, churches |
| **-y → -ies** | city, baby | cities, babies |

### غیر باقاعدہ جمع (یاد رکھیں)

| واحد | جمع | اردو |
|------|-----|------|
| man | men | آدمی |
| woman | women | عورت |
| child | children | بچہ |
| tooth | teeth | دانت |
| foot | feet | پاؤں |
| person | people | شخص |

> 🚨 **عام غلطی:**
> - ❌ "childrens" → ✅ "children"
> - ❌ "peoples" → ✅ "people"

---

## ضمائر (Pronouns)

| فاعلی | مفعولی | اردو |
|-------|--------|------|
| I | me | میں / مجھے |
| you | you | آپ / آپ کو |
| he | him | وہ (مرد) |
| she | her | وہ (عورت) |
| it | it | یہ (چیز) |
| we | us | ہم / ہمیں |
| they | them | وہ (جمع) |

**اضافی ضمائر:**
my / your / his / her / its / our / their (کسی چیز کا تعلق ظاہر کرنے کے لیے)

---

## حال سادہ (Present Simple)

**کب استعمال کریں:** عادات، روزمرہ کام، حقائق

| صیغہ | ساخت | مثال |
|------|------|------|
| مثبت | Subject + فعل (+s/es) | She **works** every day. |
| منفی | Subject + do/does + not + فعل | She **does not** work Sunday. |
| سوال | Do/Does + Subject + فعل? | **Does** she work? |

> 🚨 **عام غلطی:** وہ/وہ/یہ (he/she/it) کے ساتھ فعل میں -s لگانا ضروری ہے۔
> - ❌ "She work here." → ✅ "She **works** here."

---

## حال جاری (Present Continuous)

**کب استعمال کریں:** ابھی جاری عمل

| صیغہ | ساخت | مثال |
|------|------|------|
| مثبت | Subject + am/is/are + فعل-ing | He **is sleeping**. |
| منفی | Subject + am/is/are + not + فعل-ing | He **is not sleeping**. |
| سوال | Am/Is/Are + Subject + فعل-ing? | **Is** he sleeping? |

| حال سادہ | حال جاری |
|---------|---------|
| عادات / روزمرہ | ابھی ہو رہا ہے |
| I eat lunch at 1. | I am eating lunch now. |

---

## حرف جار (Prepositions of Place)

| انگریزی | اردو | مثال |
|---------|------|------|
| in | میں / اندر | The cat is **in** the box. |
| on | پر | The book is **on** the table. |
| at | پر (جگہ) | I am **at** school. |
| under | نیچے | The shoes are **under** the bed. |
| behind | پیچھے | The car is **behind** the house. |
| next to | کے پاس | Bank is **next to** the post office. |
| between | درمیان | Park is **between** school and hospital. |

---

## سوالیہ الفاظ

| انگریزی | اردو | استعمال |
|---------|------|---------|
| Who | کون | شخص |
| What | کیا | چیز / معلومات |
| Where | کہاں | جگہ |
| When | کب | وقت |
| Why | کیوں | وجہ |
| How | کیسے | طریقہ |
| How many | کتنے | گنی جانے والی چیزیں |
| How much | کتنا | نہ گنی جانے والی چیزیں |

---

## جملے کی ساخت: اردو (SOV) بمقابلہ انگریزی (SVO)

| زبان | ترتیب | مثال |
|------|-------|------|
| **اردو** | فاعل ← مفعول ← فعل | میں پانی **پیتا ہوں** |
| **انگریزی** | فاعل ← فعل ← مفعول | I **drink** water |

| اردو | غلط انگریزی | درست انگریزی |
|------|------------|-------------|
| وہ کتاب پڑھتا ہے | He book reads | He **reads** a book |
| میں کھانا کھاتا ہوں | I food eat | I **eat** food |
| وہ اسکول جاتی ہے | She school goes | She **goes** to school |

---

## عام گرامر غلطیاں اور درستیاں

| غلطی کی قسم | غلط | درست |
|------------|-----|------|
| Article غائب | She is doctor. | She is **a** doctor. |
| غلط ضمیر | She is my brother. | **He** is my brother. |
| -s غائب | She work here. | She work**s** here. |
| غلط ٹینس | I am eat now. | I **am eating** now. |
| غلط preposition | He is on the class. | He is **in** the class. |

---

## خلاصہ

اس ماڈیول میں آپ نے سیکھا:
- کلام کے 8 حصے
- Articles (a/an/the)
- واحد اور جمع اسم
- ضمائر
- حال سادہ بمقابلہ حال جاری
- جگہ کے حروف جار
- سوالیہ الفاظ
- اردو اور انگریزی جملے کی ساخت کا فرق

</div>
