# Module 2 — Core Vocabulary (A1/A2): Reading

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

## How Vocabulary Acquisition Works

Learning vocabulary is not about memorizing long lists — it is about building connections. Research shows that you need to encounter a word **7–12 times** in different contexts before it becomes part of your active vocabulary. The two most powerful techniques are:

**1. Spaced Repetition**
Review words at increasing intervals: today → tomorrow → in 3 days → in a week → in 2 weeks. Apps like Anki use this method automatically. This exploits how the brain's memory consolidation works during sleep.

**2. Context Learning**
Always learn words in sentences, not isolation. Compare:
- ❌ "hungry = بھوکا" (list method — forgotten in 2 days)
- ✅ "I am **hungry**. Let's eat." (context method — remembered because it has meaning)

> 🎯 **Tip:** Learn 10 new words per day. That gives you 3,650 words in one year — enough for fluent everyday conversation.

---

## Family Vocabulary (Including Pakistani Family Terms)

| English | Urdu | Pakistani/Extended Family |
|---------|------|--------------------------|
| Mother | ماں / امی | — |
| Father | باپ / ابو | — |
| Parents | والدین | — |
| Son | بیٹا | — |
| Daughter | بیٹی | — |
| Brother | بھائی | — |
| Sister | بہن | — |
| Husband | شوہر | — |
| Wife | بیوی | — |
| Grandfather (paternal) | دادا | Dada |
| Grandmother (paternal) | دادی | Dadi |
| Grandfather (maternal) | نانا | Nana |
| Grandmother (maternal) | نانی | Nani |
| Uncle (father's brother) | چچا | Chacha |
| Uncle (mother's brother) | ماموں | Mamu |
| Aunt (father's sister) | پھوپھی | Phupi |
| Aunt (mother's sister) | خالہ | Khala |
| Cousin | چچازاد / ماموزاد | — |
| Nephew | بھتیجا / بھانجا | — |
| Niece | بھتیجی / بھانجی | — |
| In-laws | سسرالی رشتہ دار | — |
| Father-in-law | سسر | Susur |
| Mother-in-law | ساس | Saas |

> 🎯 **Tip:** In English, "uncle" and "aunt" cover all four Urdu distinctions (chacha/mamu and phupi/khala). Be prepared for this simplification!

---

## Body Parts (50 Words)

| English | Urdu | English | Urdu |
|---------|------|---------|------|
| Head | سر | Neck | گردن |
| Face | چہرہ | Shoulder | کندھا |
| Hair | بال | Arm | بازو |
| Forehead | ماتھا | Elbow | کہنی |
| Eye | آنکھ | Wrist | کلائی |
| Ear | کان | Hand | ہاتھ |
| Nose | ناک | Finger | انگلی |
| Cheek | گال | Thumb | انگوٹھا |
| Mouth | منہ | Nail | ناخن |
| Lip | ہونٹ | Chest | سینہ |
| Tooth | دانت | Back | کمر / پیٹھ |
| Tongue | زبان | Stomach | پیٹ |
| Throat | گلا | Hip | کولہا |
| Chin | ٹھوڑی | Leg | ٹانگ |
| Brain | دماغ | Knee | گھٹنا |
| Heart | دل | Ankle | ٹخنہ |
| Lung | پھیپھڑا | Foot | پاؤں |
| Liver | جگر | Toe | پیر کی انگلی |
| Kidney | گردہ | Heel | ایڑی |
| Bone | ہڈی | Skin | کھال / جلد |
| Blood | خون | Muscle | پٹھا |
| Vein | رگ | Joint | جوڑ |
| Spine | ریڑھ کی ہڈی | Rib | پسلی |
| Palm | ہتھیلی | Sole | تلوا |
| Eyebrow | ابرو | Eyelash | پلک |

---

## Food and Drinks Vocabulary (With Pakistani/South Asian Items)

| English | Urdu | Category |
|---------|------|----------|
| Rice | چاول | Grain |
| Bread | روٹی / ڈبل روٹی | Grain |
| Naan | نان | Pakistani bread |
| Chapati / Roti | چپاتی / روٹی | Pakistani bread |
| Lentils / Dal | دال | Legume |
| Chicken | مرغی | Meat |
| Beef | گائے کا گوشت | Meat |
| Mutton / Lamb | بکری کا گوشت | Meat |
| Fish | مچھلی | Seafood |
| Egg | انڈہ | Protein |
| Milk | دودھ | Dairy |
| Yogurt / Curd | دہی | Dairy |
| Butter | مکھن | Dairy |
| Cheese | پنیر / چیز | Dairy |
| Onion | پیاز | Vegetable |
| Garlic | لہسن | Vegetable |
| Tomato | ٹماٹر | Vegetable |
| Potato | آلو | Vegetable |
| Spinach | پالک | Vegetable |
| Carrot | گاجر | Vegetable |
| Apple | سیب | Fruit |
| Mango | آم | Fruit |
| Banana | کیلہ | Fruit |
| Orange | سنتری | Fruit |
| Water | پانی | Drink |
| Tea / Chai | چائے | Drink |
| Juice | جوس | Drink |
| Salt | نمک | Seasoning |
| Pepper | کالی مرچ | Seasoning |
| Sugar | چینی | Seasoning |
| Oil | تیل | Cooking |
| Biryani | بریانی | Pakistani dish |
| Karahi | کڑاہی | Pakistani dish |
| Halwa Puri | حلوہ پوری | Pakistani breakfast |

> 🎯 **Tip:** When ordering food in English, use: "I would like [food], please." or "Can I have [food]?"

---

## Home / Household Items (100 Common Words)

### Rooms

| English | Urdu |
|---------|------|
| Living room | بیٹھک / ڈرائنگ روم |
| Bedroom | سونے کا کمرہ |
| Kitchen | باورچی خانہ |
| Bathroom | غسل خانہ |
| Dining room | کھانے کا کمرہ |
| Balcony | بالکنی |
| Roof / Rooftop | چھت |
| Garden / Yard | باغ / صحن |

### Furniture and Items

| English | Urdu | English | Urdu |
|---------|------|---------|------|
| Bed | پلنگ / بستر | Sofa | صوفہ |
| Pillow | تکیہ | Chair | کرسی |
| Blanket | کمبل | Table | میز |
| Sheet | چادر | Desk | کام کی میز |
| Wardrobe | الماری | Shelf | شیلف |
| Door | دروازہ | Window | کھڑکی |
| Floor | فرش | Ceiling | چھت |
| Wall | دیوار | Stairs | سیڑھیاں |
| Fridge | فریج | Stove / Oven | چولہا / تندور |
| Microwave | مائیکرو ویو | Fan | پنکھا |
| Air conditioner | ایئر کنڈیشنر | Heater | ہیٹر |
| Washing machine | واشنگ مشین | Iron | استری |
| Kettle | کیتلی | Cup | کپ |
| Plate | پلیٹ | Bowl | پیالہ |
| Spoon | چمچ | Fork | کانٹا |
| Knife | چھری | Glass | گلاس |
| Pot | برتن / دیگ | Pan | کڑاہی / فرائی پین |
| Bucket | بالٹی | Broom | جھاڑو |
| Mop | پوچھا | Tap / Faucet | نل |
| Soap | صابن | Towel | تولیہ |
| Mirror | آئینہ | Comb | کنگھا |
| Toothbrush | دانتوں کا برش | TV | ٹی وی |
| Remote | ریموٹ | Lamp | لیمپ |
| Curtain | پردہ | Lock | تالہ |
| Key | چابی | Bag | تھیلا / بیگ |
| Umbrella | چھتری | Clock | گھڑی |
| Calendar | کیلنڈر | Book | کتاب |
| Pen | قلم | Notebook | کاپی |
| Charger | چارجر | Laptop | لیپ ٹاپ |

---

## Action Verbs (100 Most Common)

| # | Verb | Urdu | # | Verb | Urdu |
|---|------|------|---|------|------|
| 1 | go | جانا | 26 | open | کھولنا |
| 2 | come | آنا | 27 | close | بند کرنا |
| 3 | eat | کھانا | 28 | read | پڑھنا |
| 4 | drink | پینا | 29 | write | لکھنا |
| 5 | sleep | سونا | 30 | learn | سیکھنا |
| 6 | work | کام کرنا | 31 | teach | پڑھانا |
| 7 | play | کھیلنا | 32 | study | پڑھنا |
| 8 | talk | بات کرنا | 33 | understand | سمجھنا |
| 9 | walk | چلنا | 34 | think | سوچنا |
| 10 | run | بھاگنا | 35 | know | جاننا |
| 11 | sit | بیٹھنا | 36 | remember | یاد رکھنا |
| 12 | stand | کھڑا ہونا | 37 | forget | بھولنا |
| 13 | look | دیکھنا | 38 | ask | پوچھنا |
| 14 | listen | سننا | 39 | answer | جواب دینا |
| 15 | speak | بولنا | 40 | help | مدد کرنا |
| 16 | buy | خریدنا | 41 | need | ضرورت ہونا |
| 17 | sell | بیچنا | 42 | want | چاہنا |
| 18 | pay | ادائیگی کرنا | 43 | like | پسند کرنا |
| 19 | cook | پکانا | 44 | love | پیار کرنا |
| 20 | clean | صاف کرنا | 45 | hate | نفرت کرنا |
| 21 | wash | دھونا | 46 | try | کوشش کرنا |
| 22 | drive | گاڑی چلانا | 47 | start | شروع کرنا |
| 23 | travel | سفر کرنا | 48 | stop | رکنا |
| 24 | live | رہنا | 49 | wait | انتظار کرنا |
| 25 | give | دینا | 50 | find | ڈھونڈنا |

| # | Verb | Urdu | # | Verb | Urdu |
|---|------|------|---|------|------|
| 51 | make | بنانا | 76 | send | بھیجنا |
| 52 | put | رکھنا | 77 | receive | وصول کرنا |
| 53 | take | لینا | 78 | call | فون کرنا |
| 54 | bring | لانا | 79 | visit | ملنے جانا |
| 55 | carry | اٹھانا | 80 | stay | ٹھہرنا |
| 56 | cut | کاٹنا | 81 | leave | جانا / چھوڑنا |
| 57 | break | توڑنا | 82 | arrive | پہنچنا |
| 58 | fix / repair | ٹھیک کرنا | 83 | return | واپس آنا |
| 59 | build | بنانا | 84 | show | دکھانا |
| 60 | draw | کھینچنا | 85 | tell | بتانا |
| 61 | paint | رنگنا | 86 | meet | ملنا |
| 62 | sing | گانا | 87 | join | شامل ہونا |
| 63 | dance | ناچنا | 88 | plan | منصوبہ بنانا |
| 64 | laugh | ہنسنا | 89 | change | بدلنا |
| 65 | cry | رونا | 90 | use | استعمال کرنا |
| 66 | smile | مسکرانا | 91 | turn | موڑنا |
| 67 | print | پرنٹ کرنا | 92 | push | دھکہ دینا |
| 68 | type | ٹائپ کرنا | 93 | pull | کھینچنا |
| 69 | save | بچانا / محفوظ کرنا | 94 | lift | اٹھانا |
| 70 | share | حصہ بانٹنا | 95 | drop | گرانا |
| 71 | choose | چننا | 96 | miss | یاد آنا |
| 72 | decide | فیصلہ کرنا | 97 | enjoy | لطف اٹھانا |
| 73 | follow | پیروی کرنا | 98 | feel | محسوس کرنا |
| 74 | check | چیک کرنا | 99 | seem | لگنا |
| 75 | count | گننا | 100 | happen | ہونا |

---

## Adjectives: Opposites (60 Pairs)

| Positive | Urdu | Opposite | Urdu |
|----------|------|----------|------|
| big | بڑا | small | چھوٹا |
| hot | گرم | cold | ٹھنڈا |
| happy | خوش | sad | اداس |
| fast | تیز | slow | آہستہ |
| new | نیا | old | پرانا |
| rich | امیر | poor | غریب |
| strong | مضبوط | weak | کمزور |
| clean | صاف | dirty | گندا |
| full | بھرا | empty | خالی |
| open | کھلا | closed | بند |
| hard | سخت | soft | نرم |
| long | لمبا | short | چھوٹا / چھوٹا قد |
| wide | چوڑا | narrow | تنگ |
| heavy | بھاری | light | ہلکا |
| young | جوان | old | بوڑھا |
| early | جلدی | late | دیر |
| right | صحیح | wrong | غلط |
| easy | آسان | difficult | مشکل |
| safe | محفوظ | dangerous | خطرناک |
| beautiful | خوبصورت | ugly | بدصورت |
| bright | روشن | dark | اندھیرا |
| loud | اونچا (آواز) | quiet | خاموش |
| dry | خشک | wet | گیلا |
| sweet | میٹھا | bitter | کڑوا |
| thick | موٹا | thin | پتلا |
| straight | سیدھا | curved | ٹیڑھا |
| deep | گہرا | shallow | اتھلا |
| sharp | تیز دھار | blunt | کند |
| tight | تنگ | loose | ڈھیلا |
| awake | جاگتا | asleep | سوتا |

---

## Time Expressions

| Expression | Urdu | Example Sentence |
|------------|------|-----------------|
| now | ابھی | I am eating **now**. |
| soon | جلد | I will call you **soon**. |
| today | آج | **Today** is Monday. |
| yesterday | کل (گزرا) | **Yesterday** was Sunday. |
| tomorrow | کل (آنے والا) | **Tomorrow** is Tuesday. |
| this week | اس ہفتے | I have class **this week**. |
| last week | پچھلے ہفتے | I was sick **last week**. |
| next week | اگلے ہفتے | I will travel **next week**. |
| this morning | آج صبح | I had tea **this morning**. |
| tonight | آج رات | I will study **tonight**. |
| always | ہمیشہ | She is **always** on time. |
| usually | عام طور پر | I **usually** wake up at 7. |
| sometimes | کبھی کبھی | I **sometimes** cook. |
| never | کبھی نہیں | I **never** smoke. |
| already | پہلے سے | I have **already** eaten. |
| yet | ابھی تک | I haven't done it **yet**. |
| just | ابھی ابھی | She **just** arrived. |
| early | جلدی | I woke up **early**. |
| late | دیر سے | He arrived **late**. |
| on time | وقت پر | She came **on time**. |

---

## Compound Vocabulary: Prefixes

Understanding prefixes helps you guess the meaning of thousands of new words.

| Prefix | Meaning | Examples |
|--------|---------|---------|
| **re-** | again | **re**do, **re**write, **re**start, **re**play |
| **un-** | not / opposite | **un**happy, **un**lock, **un**fair, **un**done |
| **pre-** | before | **pre**school, **pre**pay, **pre**view |
| **dis-** | not / opposite | **dis**agree, **dis**honest, **dis**appear |
| **over-** | too much | **over**eat, **over**sleep, **over**work |
| **mis-** | wrongly | **mis**understand, **mis**spell, **mis**use |

> 🚨 **Common Mistake:** Urdu speakers sometimes translate "میں نے کھانا کھایا" literally as "I have eaten the food" with "the" — but "I ate food" or "I have eaten food" is correct for general eating.

---

## Vocabulary Learning Strategies

**1. Context Clues:** Guess a word's meaning from surrounding words.
- "The patient was very **anxious** about her surgery." → anxious probably means worried/nervous.

**2. Word Families:** Learn related forms together.
- **happy** (adjective) → **happiness** (noun) → **happily** (adverb) → **unhappy** (opposite)

**3. Thematic Groups:** Learn words in topics (kitchen, body, family) — much faster than random lists.

**4. The 5-Second Rule:** When you learn a new word, immediately use it in your own sentence about your own life.

---

## Summary and Next Steps

You have now expanded your vocabulary to cover:
- Family relationships (including Pakistani/South Asian terms in English)
- 50 body parts
- 35+ food and drink items
- 100+ household items
- 100 action verbs
- 60 adjective pairs
- 20 time expressions
- Key prefixes for word-guessing

**Next:** Module 3 — Basic Grammar will show you how to use all these words correctly in sentences.

</div>

<div class="lang-ur" style="direction:rtl;font-family:Noto Nastaliq Urdu,Georgia,serif;text-align:right;line-height:2.4;font-size:1.05rem;">

## ذخیرہ الفاظ کیسے بڑھتا ہے

الفاظ سیکھنا لمبی لمبی فہرستیں یاد کرنا نہیں ہے — یہ رابطے بنانے کے بارے میں ہے۔ تحقیق سے پتہ چلتا ہے کہ کوئی لفظ آپ کی فعال لغت کا حصہ بننے کے لیے آپ کو اسے **7-12 بار** مختلف سیاق و سباق میں دیکھنا پڑتا ہے۔ دو سب سے طاقتور طریقے یہ ہیں:

**1. وقفاتی مشق (Spaced Repetition)**
الفاظ کو بڑھتے وقفوں پر دہرائیں: آج ← کل ← 3 دن بعد ← ایک ہفتے بعد ← 2 ہفتے بعد۔ Anki جیسی ایپس یہ خودبخود کرتی ہیں۔

**2. سیاق و سباق میں سیکھنا (Context Learning)**
ہمیشہ جملوں میں الفاظ سیکھیں، اکیلے نہیں:
- ❌ "hungry = بھوکا" (فہرستی طریقہ — 2 دن میں بھول جائیں گے)
- ✅ "I am **hungry**. Let's eat." (سیاق و سباق طریقہ — یاد رہتا ہے)

> 🎯 **ٹپ:** روزانہ 10 نئے الفاظ سیکھیں۔ ایک سال میں 3,650 الفاظ — روزمرہ گفتگو کے لیے کافی۔

---

## خاندانی الفاظ (پاکستانی خاندانی اصطلاحات سمیت)

| انگریزی | اردو |
|---------|------|
| Mother | ماں / امی |
| Father | باپ / ابو |
| Parents | والدین |
| Son | بیٹا |
| Daughter | بیٹی |
| Brother | بھائی |
| Sister | بہن |
| Grandfather (paternal) | دادا |
| Grandmother (paternal) | دادی |
| Grandfather (maternal) | نانا |
| Grandmother (maternal) | نانی |
| Uncle (father's brother) | چچا (Chacha) |
| Uncle (mother's brother) | ماموں (Mamu) |
| Aunt (father's sister) | پھوپھی (Phupi) |
| Aunt (mother's sister) | خالہ (Khala) |

> 🎯 **ٹپ:** انگریزی میں "uncle" چچا، ماموں دونوں کے لیے اور "aunt" پھوپھی، خالہ دونوں کے لیے استعمال ہوتا ہے۔ یہ چار اردو رشتے انگریزی میں صرف دو ہیں!

---

## جسم کے اعضاء (50 الفاظ)

| انگریزی | اردو | انگریزی | اردو |
|---------|------|---------|------|
| Head | سر | Neck | گردن |
| Face | چہرہ | Shoulder | کندھا |
| Hair | بال | Arm | بازو |
| Eye | آنکھ | Hand | ہاتھ |
| Ear | کان | Finger | انگلی |
| Nose | ناک | Chest | سینہ |
| Mouth | منہ | Stomach | پیٹ |
| Tooth | دانت | Leg | ٹانگ |
| Tongue | زبان | Knee | گھٹنا |
| Throat | گلا | Foot | پاؤں |
| Heart | دل | Skin | جلد |
| Lung | پھیپھڑا | Blood | خون |
| Brain | دماغ | Bone | ہڈی |

---

## کھانے اور مشروبات کے الفاظ (پاکستانی غذائیں شامل)

| انگریزی | اردو | زمرہ |
|---------|------|------|
| Rice | چاول | اناج |
| Bread / Roti | روٹی | روٹی |
| Naan | نان | پاکستانی روٹی |
| Dal / Lentils | دال | دالیں |
| Chicken | مرغی | گوشت |
| Beef | گائے کا گوشت | گوشت |
| Mutton | بکری کا گوشت | گوشت |
| Milk | دودھ | دودھ |
| Yogurt | دہی | دودھ |
| Tea / Chai | چائے | مشروب |
| Mango | آم | پھل |
| Biryani | بریانی | پاکستانی کھانا |
| Karahi | کڑاہی | پاکستانی کھانا |

---

## فعلی الفاظ (100 عام افعال)

سب سے اہم افعال پہلے یاد کریں: **go, come, eat, drink, sleep, work, play, talk, look, listen, speak, buy, cook, clean, give, take, make, help, want, like**

یاد رکھیں: انگریزی میں فعل جملے کے شروع میں (فاعل کے بعد) آتا ہے:
- ✅ "I **eat** food." (میں کھانا کھاتا ہوں)
- ❌ "I food eat." (اردو ترتیب)

---

## صفات: متضادات (60 جوڑے)

| انگریزی | اردو | الٹ | اردو |
|---------|------|-----|------|
| big | بڑا | small | چھوٹا |
| hot | گرم | cold | ٹھنڈا |
| happy | خوش | sad | اداس |
| fast | تیز | slow | آہستہ |
| new | نیا | old | پرانا |
| rich | امیر | poor | غریب |
| strong | مضبوط | weak | کمزور |
| clean | صاف | dirty | گندا |
| full | بھرا | empty | خالی |
| easy | آسان | difficult | مشکل |

---

## وقت کے اظہار

| انگریزی | اردو | مثال |
|---------|------|------|
| now | ابھی | I am eating now. |
| today | آج | Today is Monday. |
| yesterday | کل (گزرا) | Yesterday was Sunday. |
| tomorrow | کل (آنے والا) | Tomorrow is Tuesday. |
| always | ہمیشہ | She is always on time. |
| sometimes | کبھی کبھی | I sometimes cook. |
| never | کبھی نہیں | I never smoke. |

---

## پیشوندے (Prefixes) — لفظوں کا اندازہ لگائیں

| پیشوندہ | مطلب | مثالیں |
|---------|------|--------|
| **re-** | دوبارہ | redo, rewrite, restart |
| **un-** | نہیں / الٹ | unhappy, unlock, unfair |
| **pre-** | پہلے | preschool, preview |
| **dis-** | نہیں / الٹ | disagree, dishonest |

---

## خلاصہ اور اگلے اقدامات

اس ماڈیول میں آپ نے سیکھا:
- خاندانی رشتے (پاکستانی اصطلاحات سمیت)
- 50 جسمانی اعضاء
- 35+ کھانے پینے کی اشیاء
- 100+ گھریلو اشیاء
- 100 افعال
- 60 متضاد صفات کے جوڑے
- 20 وقت کے اظہار

**اگلا قدم:** ماڈیول 3 — بنیادی گرامر، جہاں آپ یہ تمام الفاظ صحیح جملوں میں استعمال کرنا سیکھیں گے۔

</div>
