# Module 5 — Intermediate Grammar (B1): Reading

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

## Past Simple Tense

**When to use:** Completed actions in the past at a specific time.
- I **visited** Lahore last year. (completed, specific time)
- She **graduated** in 2022. (completed event)
- They **didn't come** to the party. (negative past)

### Regular Verbs — Add -ed

| Base | Past Simple | Rule |
|------|------------|------|
| work | work**ed** | add -ed |
| play | play**ed** | add -ed |
| live | liv**ed** | drop e, add -ed |
| stop | stop**p**ed | double consonant (short vowel), add -ed |
| study | stud**ied** | y → ied |
| travel | travel**led** | UK spelling doubles l |

### Top 50 Irregular Verbs (Must Memorize)

| Base | Past Simple | Urdu |
|------|------------|------|
| be | was / were | تھا / تھے |
| go | went | گیا |
| come | came | آیا |
| eat | ate | کھایا |
| drink | drank | پیا |
| sleep | slept | سویا |
| see | saw | دیکھا |
| say | said | کہا |
| give | gave | دیا |
| get | got | ملا |
| make | made | بنایا |
| take | took | لیا |
| know | knew | جانتا تھا |
| think | thought | سوچا |
| find | found | ملا / ڈھونڈا |
| tell | told | بتایا |
| buy | bought | خریدا |
| bring | brought | لایا |
| write | wrote | لکھا |
| read | read (/rɛd/) | پڑھا |
| drive | drove | گاڑی چلائی |
| run | ran | بھاگا |
| fall | fell | گرا |
| sit | sat | بیٹھا |
| stand | stood | کھڑا رہا |
| speak | spoke | بولا |
| teach | taught | پڑھایا |
| meet | met | ملا |
| leave | left | گیا / چھوڑا |
| lose | lost | کھویا |
| win | won | جیتا |
| break | broke | توڑا |
| choose | chose | چنا |
| begin | began | شروع کیا |
| feel | felt | محسوس کیا |
| hear | heard | سنا |
| hold | held | پکڑا |
| keep | kept | رکھا |
| let | let | دینے دیا |
| mean | meant | مطلب تھا |
| pay | paid | ادائیگی کی |
| put | put | رکھا |
| sell | sold | بیچا |
| send | sent | بھیجا |
| show | showed | دکھایا |
| spend | spent | خرچ کیا |
| swim | swam | تیرا |
| throw | threw | پھینکا |
| understand | understood | سمجھا |
| wear | wore | پہنا |

### Past Simple Structure

| Form | Structure | Example |
|------|-----------|---------|
| Affirmative | Subject + past verb | She **went** to work. |
| Negative | Subject + did not + base verb | She **did not go** to work. |
| Question | Did + subject + base verb? | **Did** she go to work? |

> 🚨 **Common Mistake:** After "did", the verb must return to base form.
> - ❌ "Did she went?" → ✅ "Did she **go**?"
> - ❌ "She didn't worked." → ✅ "She didn't **work**."

---

## Past Continuous Tense

**When to use:** An action that was in progress at a specific time in the past, or an interrupted action.

| Use Case | Example |
|----------|---------|
| In progress at a specific past time | At 8 pm, I **was watching** TV. |
| Interrupted by another action | I **was sleeping** when you called. |
| Parallel past actions | She **was cooking** while he **was reading**. |

### Structure

| Form | Structure | Example |
|------|-----------|---------|
| Affirmative | Subject + was/were + verb-ing | He **was working** late. |
| Negative | Subject + was/were + not + verb-ing | He **was not working** late. |
| Question | Was/Were + subject + verb-ing? | **Was** he working late? |

**Past Simple + Past Continuous together:**
- I **was walking** home when it **started** to rain.
- (Past Continuous = longer background action; Past Simple = shorter interrupting action)

---

## Future Forms: Will vs Going To vs Present Continuous

English has THREE common ways to talk about the future. Choosing the right one is important.

| Form | When to Use | Example |
|------|-------------|---------|
| **will** | Decisions made NOW, predictions, promises, offers | "I **will help** you." / "It **will** rain tomorrow." |
| **going to** | Plans already decided, things you can see will happen | "I **am going to** study tonight." / "Look at those clouds — it **is going to** rain!" |
| **Present Continuous** | Fixed arrangements, appointments in near future | "I **am meeting** him tomorrow at 3." |

### Comparison Table

| | will | going to | Present Continuous |
|--|------|----------|--------------------|
| **Decision made?** | Just now | Already | Already (with time/place) |
| **Example** | I'll have the soup. | I'm going to visit my parents. | She's flying to Dubai on Friday. |
| **Urdu** | کروں گا (فیصلہ ابھی) | کرنے والا ہوں (پہلے سے) | مل رہا ہوں (وقت طے ہے) |

> 🚨 **Common Mistake:** Urdu speakers often use "will" for everything. But for plans, use "going to." For appointments, use Present Continuous.
> - ❌ "I will meet my friend tomorrow at 5." (appointment already arranged)
> - ✅ "I **am meeting** my friend tomorrow at 5."

---

## Modal Verbs

Modals express ability, obligation, possibility, permission, and advice.

| Modal | Meaning | Example |
|-------|---------|---------|
| **can** | Ability (present) | I **can** speak Urdu. |
| **could** | Ability (past) / Polite request | I **could** swim at 10. / **Could** you help me? |
| **should** | Advice / recommendation | You **should** study more. |
| **must** | Strong obligation / certainty | You **must** wear a seatbelt. / She **must** be tired. |
| **have to** | External obligation (rule/law) | I **have to** be at work by 9. |
| **might** | Possibility (50% or less) | It **might** rain later. |
| **may** | Possibility (more formal) / Permission | You **may** leave now. |

### Must vs Have to vs Should

| | Must | Have to | Should |
|--|------|---------|--------|
| **Strength** | Very strong (speaker's rule) | Strong (external rule) | Advice/recommendation |
| **Example** | You must stop smoking. | I have to pay taxes. | You should exercise. |
| **Negative** | must not (forbidden) | don't have to (not necessary) | shouldn't (bad idea) |

> 🎯 **Tip:** "Must not" = forbidden. "Don't have to" = not necessary (but you can if you want).
> - You **must not** park here. (It is forbidden.)
> - You **don't have to** wear a tie. (It's optional — not required.)

---

## Comparative and Superlative Adjectives

### Comparative (-er / more)

Use comparatives to compare **two** things.

| Rule | Adjective | Comparative | Superlative |
|------|-----------|-------------|-------------|
| 1 syllable: add -er/-est | tall, fast, old | tall**er**, fast**er**, old**er** | tall**est**, fast**est**, old**est** |
| 1 syllable ending CVC: double + -er | big, hot, thin | bigg**er**, hott**er**, thinn**er** | bigg**est**, hott**est**, thinn**est** |
| 2 syllables ending -y: change to -ier | happy, easy | happ**ier**, eas**ier** | happ**iest**, eas**iest** |
| 2+ syllables: use more/most | beautiful, expensive | **more** beautiful | **most** beautiful |
| Irregular | good, bad, far | better, worse, farther | best, worst, farthest |

**Sentences:**
- Ahmed is **taller than** Sara.
- This phone is **more expensive than** that one.
- She is **the best** student in the class.
- Today is **the hottest** day of the year.

---

## Countable vs Uncountable Nouns + Some/Any/Much/Many

### Countable Nouns

Can be counted: one apple, two apples, three cars.

### Uncountable Nouns

Cannot be counted: water, rice, advice, information, money, time, furniture.

| Countable | Uncountable |
|-----------|-------------|
| a book / books | — / water |
| an apple / apples | — / rice |
| a suggestion / suggestions | — / advice |

### Some / Any / Much / Many / A lot of

| Word | Use With | Positive or Negative? |
|------|---------|----------------------|
| **some** | both countable (pl) and uncountable | positive sentences, offers |
| **any** | both | negative and questions |
| **many** | countable (plural) | questions and negatives |
| **much** | uncountable | questions and negatives |
| **a lot of** | both | positive sentences |

**Examples:**
- I have **some** milk. (positive, uncountable)
- I don't have **any** milk. (negative)
- Do you have **any** eggs? (question, countable)
- She doesn't drink **much** water. (negative, uncountable)
- How **many** students are here? (question, countable)
- There are **a lot of** people outside. (positive, both)

---

## Adverbs of Frequency

These adverbs show HOW OFTEN something happens. They typically go **before the main verb** but **after "to be."**

| Adverb | Frequency | Example |
|--------|-----------|---------|
| **always** | 100% | She **always** wakes up early. |
| **usually** | 80-90% | He **usually** eats at home. |
| **often** | 60-70% | They **often** go for walks. |
| **sometimes** | 30-50% | I **sometimes** watch movies. |
| **rarely** | 10-20% | She **rarely** eats fast food. |
| **never** | 0% | He **never** drinks alcohol. |

**Position rules:**
- Before main verb: I **always** drink tea. / She **never** smokes.
- After "to be": He **is** always **late**. / She **is** never angry.

> 🚨 **Common Mistake:** Urdu speakers put adverbs at the end.
> - ❌ "I eat breakfast always." → ✅ "I **always** eat breakfast."

---

## Linking Words

Linking words connect ideas and make your English sound more fluent.

| Linking Word | Use | Example |
|-------------|-----|---------|
| **and** | Adding information | I eat rice **and** dal. |
| **but** | Contrasting | I like tea, **but** I don't drink coffee. |
| **however** | Contrasting (formal) | I was tired. **However**, I kept working. |
| **although** | Contrasting (same sentence) | **Although** it was raining, I went out. |
| **because** | Giving reason | I was late **because** the bus was delayed. |
| **so** | Showing result | I was hungry, **so** I ate. |
| **therefore** | Showing result (formal) | It rained; **therefore**, the match was cancelled. |
| **moreover** | Adding emphasis | She is smart. **Moreover**, she works very hard. |
| **for example** | Giving example | Some fruits are rich in vitamins, **for example**, oranges. |
| **in addition** | Adding information | In addition to English, she also speaks French. |

---

## Passive Voice (Introduction)

In active sentences, the subject performs the action.
In passive sentences, the subject receives the action.

| Active | Passive |
|--------|---------|
| Ahmed **wrote** the letter. | The letter **was written** by Ahmed. |
| She **is cooking** dinner. | Dinner **is being cooked** by her. |
| They **build** houses. | Houses **are built** by them. |

**Why use passive?**
- When the doer is unknown: "My car **was stolen**." (We don't know who stole it.)
- When the doer is obvious: "The president **was elected**." (People voted — obvious.)
- To emphasize the result: "The report **was submitted** on time."

**Structure:** Subject + was/were + past participle

---

## Question Tags

Question tags are short questions added to the end of a statement. They are used to confirm information or seek agreement.

**Rule:** If the statement is positive → the tag is negative. If the statement is negative → the tag is positive.

| Statement | Tag | Full Sentence |
|-----------|-----|--------------|
| You're coming... | aren't you? | You're coming, **aren't you?** |
| It's hot... | isn't it? | It's hot, **isn't it?** |
| She likes coffee... | doesn't she? | She likes coffee, **doesn't she?** |
| They went home... | didn't they? | They went home, **didn't they?** |
| He can swim... | can't he? | He can swim, **can't he?** |
| You haven't eaten... | have you? | You haven't eaten, **have you?** |
| It won't rain... | will it? | It won't rain, **will it?** |

> 🎯 **Tip:** In conversation, a rising intonation (↑) on the tag means you are genuinely asking. A falling intonation (↓) means you are just seeking confirmation.

---

## Summary and Next Steps

In this module you learned:
- Past Simple (regular and 50 irregular verbs)
- Past Continuous (was/were + -ing) and how it combines with Past Simple
- Three future forms: will / going to / Present Continuous
- Modal verbs (can/could/should/must/have to/might/may)
- Comparatives and superlatives
- Countable vs uncountable nouns + some/any/much/many
- Adverbs of frequency and their position
- Linking words
- Introduction to passive voice
- Question tags

**Well done!** You have completed Modules 1–5. You are now at B1 level and ready for real-world English use. Continue with Module 6 onwards for communication, writing, and advanced fluency.

</div>

<div class="lang-ur" style="direction:rtl;font-family:Noto Nastaliq Urdu,Georgia,serif;text-align:right;line-height:2.4;font-size:1.05rem;">

## ماضی مطلق (Past Simple)

**کب استعمال کریں:** ماضی میں مکمل ہونے والے کام

### باقاعدہ فعل — آخر میں -ed لگائیں

| اصل فعل | ماضی |
|---------|------|
| work | worked |
| play | played |
| study | studied |
| stop | stopped |

### 50 غیر باقاعدہ افعال (یاد رکھیں)

| اصل فعل | ماضی | اردو |
|---------|------|------|
| go | went | گیا |
| come | came | آیا |
| eat | ate | کھایا |
| drink | drank | پیا |
| see | saw | دیکھا |
| say | said | کہا |
| give | gave | دیا |
| take | took | لیا |
| make | made | بنایا |
| know | knew | جانتا تھا |
| buy | bought | خریدا |
| write | wrote | لکھا |
| read | read | پڑھا |
| speak | spoke | بولا |
| meet | met | ملا |
| leave | left | گیا |
| win | won | جیتا |
| feel | felt | محسوس کیا |
| pay | paid | ادائیگی کی |
| understand | understood | سمجھا |

### ماضی مطلق کی ساخت

| صیغہ | ساخت | مثال |
|------|------|------|
| مثبت | Subject + ماضی فعل | She **went** to work. |
| منفی | Subject + did not + اصل فعل | She **did not go**. |
| سوال | Did + Subject + اصل فعل? | **Did** she go? |

> 🚨 **عام غلطی:** "did" کے بعد فعل اصل شکل میں آتا ہے۔
> - ❌ "Did she went?" → ✅ "Did she **go**?"

---

## ماضی جاری (Past Continuous)

**کب استعمال کریں:** ماضی میں جاری عمل، یا جب کوئی دوسرا عمل اسے منقطع کرے

| صیغہ | ساخت | مثال |
|------|------|------|
| مثبت | Subject + was/were + فعل-ing | He **was working**. |
| منفی | Subject + was/were + not + فعل-ing | He **was not working**. |
| سوال | Was/Were + Subject + فعل-ing? | **Was** he working? |

**ایک ساتھ استعمال:**
- I **was sleeping** when you **called**. (جاری عمل + منقطع کرنے والا عمل)

---

## مستقبل کی تین شکلیں

| شکل | کب استعمال کریں | مثال |
|-----|----------------|------|
| **will** | ابھی لیا گیا فیصلہ / پیشین گوئی | I **will help** you. |
| **going to** | پہلے سے طے شدہ منصوبہ | I **am going to** study. |
| **Present Continuous** | طے شدہ ملاقات/وقت | I **am meeting** him tomorrow. |

> 🚨 **عام غلطی:** اردو بولنے والے سب کے لیے "will" استعمال کرتے ہیں، لیکن منصوبوں کے لیے "going to" اور طے شدہ ملاقاتوں کے لیے Present Continuous درست ہے۔

---

## فعل معاون (Modal Verbs)

| Modal | مطلب | مثال |
|-------|------|------|
| **can** | صلاحیت | I **can** swim. |
| **could** | ماضی صلاحیت / شائستہ درخواست | **Could** you help me? |
| **should** | مشورہ | You **should** rest. |
| **must** | مضبوط لازمیت | You **must** wear a seatbelt. |
| **have to** | بیرونی لازمیت | I **have to** go to work. |
| **might** | امکان (50% یا کم) | It **might** rain. |
| **may** | امکان (رسمی) | You **may** go now. |

**must not** = منع | **don't have to** = ضروری نہیں

> 🎯 **ٹپ:**
> - "You **must not** park here." = پارکنگ ممنوع ہے
> - "You **don't have to** wear a tie." = ٹائی ضروری نہیں (اختیاری ہے)

---

## تقابلی اور افضلی صفات

| اصول | صفت | تقابلی | افضلی |
|------|-----|-------|-------|
| +er/est (1 syllable) | tall, fast | taller, faster | tallest, fastest |
| double consonant | big, hot | bigger, hotter | biggest, hottest |
| y → ier/iest | happy, easy | happier, easier | happiest, easiest |
| more/most (2+ syllables) | beautiful | more beautiful | most beautiful |
| بے قاعدہ | good, bad | better, worse | best, worst |

**مثالیں:**
- Ahmed is **taller than** Sara.
- This phone is **more expensive than** that one.
- She is **the best** student.

---

## قابل گنتی اور ناقابل گنتی اسم

**قابل گنتی:** apple/apples, book/books, car/cars
**ناقابل گنتی:** water, rice, advice, information, money

| لفظ | استعمال | صیغہ |
|-----|---------|------|
| **some** | مثبت جملے | I have **some** milk. |
| **any** | سوال / منفی | Do you have **any** milk? |
| **many** | قابل گنتی | How **many** books? |
| **much** | ناقابل گنتی | How **much** water? |
| **a lot of** | دونوں | There are **a lot of** people. |

---

## تکراری حالات کے ظروف

| ظرف | تعدد | مثال |
|-----|------|------|
| always | 100% | She **always** wakes up early. |
| usually | 80-90% | He **usually** eats at home. |
| often | 60-70% | They **often** go walking. |
| sometimes | 30-50% | I **sometimes** watch films. |
| rarely | 10-20% | She **rarely** eats fast food. |
| never | 0% | He **never** smokes. |

**جگہ کا اصول:** فعل سے پہلے، "to be" کے بعد
> 🚨 **عام غلطی:**
> - ❌ "I eat breakfast always." → ✅ "I **always** eat breakfast."

---

## ربط کے الفاظ

| لفظ | استعمال | مثال |
|-----|---------|------|
| and | اضافہ | I eat rice **and** dal. |
| but | تضاد | I like tea, **but** not coffee. |
| however | تضاد (رسمی) | I was tired. **However**, I worked. |
| because | وجہ | I was late **because** of traffic. |
| so | نتیجہ | I was hungry, **so** I ate. |
| although | تضاد (ایک جملے میں) | **Although** it rained, I went out. |

---

## مجہول (Passive Voice) — تعارف

| فاعل (Active) | مجہول (Passive) |
|--------------|----------------|
| Ahmed **wrote** the letter. | The letter **was written** by Ahmed. |
| They **build** houses. | Houses **are built**. |

**مجہول کیوں؟**
- جب کرنے والا معلوم نہ ہو: "My car **was stolen**."
- نتیجے پر زور دینا

---

## سوالیہ دم (Question Tags)

مثبت جملہ → منفی دم | منفی جملہ → مثبت دم

| جملہ | دم |
|------|-----|
| You're coming... | aren't you? |
| It's hot... | isn't it? |
| She likes coffee... | doesn't she? |
| He can swim... | can't he? |

---

## خلاصہ

اس ماڈیول میں آپ نے سیکھا:
- ماضی مطلق (50 غیر باقاعدہ افعال سمیت)
- ماضی جاری
- مستقبل کی تین شکلیں
- فعل معاون
- تقابلی اور افضلی صفات
- قابل/ناقابل گنتی اسم
- تکراری حالات کے ظروف
- ربط کے الفاظ
- مجہول کا تعارف
- سوالیہ دم

**مبارک ہو!** آپ نے ماڈیول 1-5 مکمل کر لیے ہیں۔ آپ اب B1 سطح پر ہیں!

</div>
