# Module 5 — درمیانی گرامر (Intermediate Grammar)

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

## Intermediate Persian Grammar

At this level you move from describing the present to expressing past events, future plans, continuous actions, conditions, and complex sentences.

---

## 1. Past Simple Tense (گذشته ساده)

The past simple is formed from the **past stem** of the verb. This is the most commonly used past tense.

**Formula: [past stem] + [personal ending]**

### Past Tense Personal Endings
| Person | Ending | Pronunciation |
|---|---|---|
| I | ـم (-am) | -am |
| You (sg.) | ـی (-i) | -i |
| He/She/It | — (zero) | nothing added |
| We | ـیم (-im) | -im |
| You (pl./form.) | ـید (-id) | -id |
| They | ـند (-and) | -and |

### رفتن (to go) — Past Stem: رفت (*raft*)
| Persian | Transliteration | English |
|---|---|---|
| رفتم | *raftam* | I went |
| رفتی | *rafti* | You went |
| رفت | *raft* | He/she went |
| رفتیم | *raftim* | We went |
| رفتید | *raftid* | You went (pl.) |
| رفتند | *raftand* | They went |

### خوردن (to eat) — Past Stem: خورد (*khord*)
| Persian | Transliteration | English |
|---|---|---|
| خوردم | *khordam* | I ate |
| خوردی | *khordi* | You ate |
| خورد | *khord* | He/she ate |
| خوردیم | *khordim* | We ate |
| خوردید | *khordid* | You ate (pl.) |
| خوردند | *khordand* | They ate |

### Negation of Past Tense
Add **نـ (*na-*)** before the past stem:
- رفتم → **نرفتم** (*naraftam*) = I didn't go
- خوردم → **نخوردم** (*nakhordam*) = I didn't eat
- دیدم → **ندیدم** (*nadidam*) = I didn't see

---

## 2. Past Stem vs. Present Stem

Every Persian verb has two stems. You've already been using the present stem (for present tense with می). Now the past stem unlocks all past tenses.

| Infinitive | English | Present Stem | Past Stem |
|---|---|---|---|
| رفتن | to go | رو (*row*) | رفت (*raft*) |
| آمدن | to come | آ (*ā*) | آمد (*āmad*) |
| بودن | to be | باش (*bāsh*) | بود (*bud*) |
| داشتن | to have | دار (*dār*) | داشت (*dāsht*) |
| گفتن | to say | گو (*gu*) | گفت (*goft*) |
| دیدن | to see | بین (*bin*) | دید (*did*) |
| خوردن | to eat | خور (*khor*) | خورد (*khord*) |
| خواندن | to read | خوان (*khān*) | خواند (*khānd*) |
| نوشتن | to write | نویس (*nevis*) | نوشت (*nevesht*) |
| کردن | to do | کن (*kon*) | کرد (*kard*) |
| شدن | to become | شو (*sho*) | شد (*shod*) |
| گرفتن | to take | گیر (*gir*) | گرفت (*gereft*) |
| دادن | to give | ده (*dah*) | داد (*dād*) |
| فهمیدن | to understand | فهم (*fahm*) | فهمید (*fahmid*) |
| خواستن | to want | خواه (*khāh*) | خواست (*khāst*) |

> **Pattern:** Most past stems end in ـد, ـت, or ـید. The past stem IS the third person singular past tense form.

---

## 3. Future Tense (آینده)

### Formal Future (written Persian)
**Formula: خواهـ (*khāh-*) + [past stem] + personal ending**

The auxiliary خواستن (to will/want) contracts to خواه and is followed by the verb in its short (past stem) form.

| Persian | Transliteration | English |
|---|---|---|
| خواهم رفت | *khāham raft* | I will go |
| خواهی رفت | *khāhi raft* | You will go |
| خواهد رفت | *khāhad raft* | He/she will go |
| خواهیم رفت | *khāhim raft* | We will go |
| خواهید رفت | *khāhid raft* | You will go (pl.) |
| خواهند رفت | *khāhand raft* | They will go |

### Colloquial Future (spoken Persian — much more common)
In everyday speech, Iranians use the **present tense** for future actions with a time word:
- **فردا می‌رم** (*fardā miram*) = I'm going tomorrow
- **بعداً زنگ می‌زنم** (*ba'dan zang mizanam*) = I'll call later
- **این هفته می‌بینمت** (*in hafte mibinamet*) = I'll see you this week

---

## 4. Present Continuous (حال استمراری)

**Formula: دارم/*dāram* (I have) + می + [present stem] + ending**

This emphasizes an action happening RIGHT NOW.

| Persian | Transliteration | English |
|---|---|---|
| دارم می‌خورم | *dāram mi-khoram* | I am eating |
| داری می‌خوری | *dāri mi-khori* | You are eating |
| داره می‌خوره | *dāre mi-khore* | He/she is eating (colloquial) |
| داریم می‌خوریم | *dārim mi-khorim* | We are eating |
| دارید می‌خورید | *dārid mi-khorid* | You are eating (pl.) |
| دارن می‌خورن | *dāran mi-khorand* | They are eating |

> **Urdu parallel:** This is like اردو: میں کھا رہا ہوں (*I am eating*) — an ongoing action right now.

---

## 5. Conditional Sentences (جملات شرطی)

### Real Condition (If... then...)
**Formula: اگر (*agar*) + present/past + ...then...**

| Persian | Transliteration | English |
|---|---|---|
| اگر بیایی، خوشحال می‌شم | *agar biāyi, khoshhāl misham* | If you come, I'll be happy |
| اگر پول داشتم، می‌رفتم | *agar pul dāshtam, miraftam* | If I had money, I would go |
| اگر بیاد بگو | *agar biād begu* | If he comes, tell him |

### Colloquial Conditional with بشه
A very common colloquial form:
- **اگه بشه** (*age beshe*) = If it's possible / if it works out
- **اگه بیای** (*age biāyi*) = If you come

---

## 6. Compound Verbs (مرکب فعل)

Persian has hundreds of compound verbs formed from a noun/adjective + a simple verb (usually کردن or زدن or شدن or دادن).

| Compound Verb | Transliteration | English |
|---|---|---|
| تلفن زدن | *telefon zadan* | to make a phone call |
| درس خواندن | *dars khāndan* | to study |
| کمک کردن | *komak kardan* | to help |
| کار کردن | *kār kardan* | to work |
| فکر کردن | *fekr kardan* | to think |
| بازی کردن | *bāzi kardan* | to play |
| سعی کردن | *sa'y kardan* | to try |
| اشتباه کردن | *eshtebāh kardan* | to make a mistake |
| قبول کردن | *qabul kardan* | to accept |
| شروع کردن | *shoru' kardan* | to start |
| تمام کردن | *tamām kardan* | to finish |
| گوش دادن | *gush dādan* | to listen |
| دوست داشتن | *dust dāshtan* | to like / love |
| یاد گرفتن | *yād gereftan* | to learn |
| ناراحت شدن | *nārāhat shodan* | to become upset |
| خوشحال شدن | *khoshhāl shodan* | to become happy |
| حاضر شدن | *hāzer shodan* | to get ready |

---

## 7. Modal Verbs (افعال وجهی)

### باید (*bāyad*) — Must / Should / Have to
باید is invariable (does not change for person) and is followed by the **subjunctive** form of the verb.

| Persian | Transliteration | English |
|---|---|---|
| باید برم | *bāyad beram* | I must go |
| باید بری | *bāyad beri* | You must go |
| باید بره | *bāyad bere* | He/she must go |
| باید بریم | *bāyad berim* | We must go |

**Negative:** نباید (*nabāyad*) = must not / should not

- نباید اینجا پارک کنی = You must not park here
- نباید دیر کرد = One must not be late

### می‌توان / می‌توانم (*mitavān / mitavānam*) — Can / To be able to
| Persian | Transliteration | English |
|---|---|---|
| می‌توانم | *mitavānam* | I can |
| می‌توانی | *mitavāni* | You can |
| می‌توان | *mitavān* | One can (impersonal) |

Colloquial: **می‌تونم** (*mitūnam*) — I can

| Colloquial | Transliteration | English |
|---|---|---|
| می‌تونم بیام؟ | *mitūnam biām?* | Can I come? |
| نمی‌تونم بیام | *nemitūnam biām* | I can't come |

---

## 8. Relative Clauses with که (*ke*)

**که** (*ke*) = that / who / which — used to introduce relative clauses.

| Persian | Transliteration | English |
|---|---|---|
| کتابی که خریدم | *ketābi ke kharidim* | the book that I bought |
| دوستی که می‌شناسم | *dusti ke mishenāsam* | the friend that I know |
| کسی که اینجاست | *kasi ke injāst* | the person who is here |
| خانه‌ای که می‌خواهم | *khāne-yi ke mikhāham* | the house that I want |
| گفت که می‌آید | *goft ke miāyad* | He said that he is coming |

---

## 9. Prepositions and Postpositions

Persian prepositions come **before** nouns (like English) but some functions use **postpositions** or circumpositions.

| Persian | Transliteration | English | Example |
|---|---|---|---|
| در | *dar* | in / at / on | در خانه (at home) |
| با | *bā* | with | با دوست (with a friend) |
| از | *az* | from / of / than | از تهران (from Tehran) |
| به | *be* | to / toward | به مدرسه (to school) |
| برای | *barāy* | for | برای تو (for you) |
| بدون | *bedun* | without | بدون تو (without you) |
| روی | *ruy* | on top of | روی میز (on the table) |
| زیر | *zir* | under | زیر میز (under the table) |
| جلوی | *jeluy* | in front of | جلوی خانه (in front of the house) |
| پشت | *posht* | behind | پشت در (behind the door) |
| کنار | *kenār* | beside / next to | کنار من (beside me) |
| بین | *beyn* | between | بین ما (between us) |

---

## 10. Formal vs. Colloquial Persian

This is crucial for real communication. Written/formal Persian differs significantly from spoken Tehran Persian.

| Formal / Written | Colloquial / Spoken | English |
|---|---|---|
| می‌روم | می‌رم (*miram*) | I go |
| می‌آیم | میام (*miyām*) | I come |
| هستم | ام (*am*) / هستم | I am |
| می‌خواهم | می‌خوام (*mikhām*) | I want |
| می‌دهم | می‌دم (*midam*) | I give |
| نمی‌دانم | نمیدونم (*nemidūnam*) | I don't know |
| این است | اینه (*ine*) | This is |
| چه می‌خواهی؟ | چی می‌خوای؟ (*chi mikhāy?*) | What do you want? |
| کجا می‌روید؟ | کجا می‌رید؟ (*kojā mirid?*) | Where are you going? |
| اگر بیایید | اگه بیاید (*age biāyid*) | If you come |
| آن‌ها | اونا (*unā*) | They |
| چطور است؟ | چطوره؟ (*chetore?*) | How is it? |
| من هستم | منم (*manam*) | It's me |

> **Key rule:** Written Persian (news, books, formal documents) uses the longer, more classical forms. Spoken Tehran Persian (conversations, TV shows, films) uses the shortened colloquial forms. **Learn both** — you need written for reading, spoken for communication.

---

## Summary Table: All Tenses

| Tense | Formula | Example |
|---|---|---|
| **Present** | می + present stem + ending | می‌روم (I go) |
| **Present Continuous** | دارم + می + present stem + ending | دارم می‌روم (I am going) |
| **Past Simple** | past stem + ending | رفتم (I went) |
| **Past Continuous** | داشتم + می + present stem + ending | داشتم می‌رفتم (I was going) |
| **Future (formal)** | خواه + past stem (no ending needed) | خواهم رفت (I will go) |
| **Future (colloquial)** | present tense + time word | فردا می‌رم (I'm going tomorrow) |

</div>

<div class="lang-ur" style="direction:rtl;font-family:Noto Nastaliq Urdu,Georgia,serif;text-align:right;line-height:2.4;font-size:1.05rem;" markdown="1">

## فارسی گرامر — درمیانی سطح

اس ماڈیول میں آپ ماضی، مستقبل، حالت استمراری، شرطی جملے اور باضابطہ بمقابلہ عامیانہ فارسی سیکھیں گے۔

---

## ۱. ماضی مطلق (گذشته ساده)

ماضی مطلق بنانے کا طریقہ: **ماضی ساق (past stem) + شخصی علامت**

فعل رفتن (جانا) — ماضی ساق: رفت (*raft*)

| فارسی | تلفظ | اردو |
|---|---|---|
| رفتم | رَفتَم | میں گیا/گئی |
| رفتی | رَفتی | تم گئے |
| رفت | رَفت | وہ گیا/گئی |
| رفتیم | رَفتیم | ہم گئے |
| رفتید | رَفتید | آپ گئے |
| رفتند | رَفتَند | وہ گئے |

**نفی:** نـ + ماضی ساق: نرفتم = میں نہیں گیا

**اردو مقابلہ:** فارسی رفتم = اردو گیا/گئی — بالکل ایک ہی خیال!

---

## ۲. اہم ماضی ساق

| فعل | انگریزی | حال ساق | ماضی ساق |
|---|---|---|---|
| رفتن | جانا | رو | رفت |
| آمدن | آنا | آ | آمد |
| گفتن | کہنا | گو | گفت |
| دیدن | دیکھنا | بین | دید |
| خوردن | کھانا | خور | خورد |
| کردن | کرنا | کن | کرد |
| شدن | ہونا | شو | شد |
| گرفتن | لینا | گیر | گرفت |

---

## ۳. مستقبل زمانہ

**رسمی مستقبل:** خواه + ماضی ساق  
(خواهم رفت = میں جاؤں گا)

**عامیانہ مستقبل:** حال زمانہ + وقت کا لفظ  
(فردا می‌رم = کل جاتا ہوں)

| فارسی | تلفظ | اردو |
|---|---|---|
| خواهم رفت | خواہَم رَفت | میں جاؤں گا |
| فردا می‌رم | فَردا می‌رَم | کل جاؤں گا |
| بعداً زنگ می‌زنم | بَعداً زَنگ می‌زَنَم | بعد میں فون کروں گا |

---

## ۴. حال جاریہ

**طریقہ:** دارم + می + حال ساق + علامت

| فارسی | تلفظ | اردو |
|---|---|---|
| دارم می‌خورم | دارَم می‌خورَم | میں کھا رہا ہوں |
| داری می‌خوری | داری می‌خوری | تم کھا رہے ہو |
| داره می‌خوره | دارِہ می‌خورِہ | وہ کھا رہا ہے (عامیانہ) |

**اردو مقابلہ:** میں کھا رہا ہوں = دارم می‌خورم — ایک ہی طریقہ!

---

## ۵. شرطی جملے (اگر...تو)

| فارسی | تلفظ | اردو |
|---|---|---|
| اگر بیایی، خوشحال می‌شم | اَگَر بِیایی، خوشحال می‌شَم | اگر تم آؤ تو میں خوش ہوں گا |
| اگر پول داشتم، می‌رفتم | اَگَر پول داشتَم، می‌رَفتَم | اگر پیسے ہوتے تو جاتا |
| اگه بشه | اَگِہ بِشِہ | اگر ممکن ہو (عامیانہ) |

---

## ۶. مرکب افعال

فارسی میں بہت سے افعال مرکب ہیں — اردو کی طرح (کام کرنا، فون کرنا):

| فارسی | تلفظ | اردو |
|---|---|---|
| تلفن زدن | تِلِفَن زَدَن | فون کرنا |
| درس خواندن | دَرس خواندَن | پڑھنا/تعلیم حاصل کرنا |
| کمک کردن | کَمَک کَردَن | مدد کرنا |
| کار کردن | کار کَردَن | کام کرنا |
| شروع کردن | شُروع کَردَن | شروع کرنا |
| تمام کردن | تَمام کَردَن | ختم کرنا |
| قبول کردن | قَبول کَردَن | قبول کرنا |

---

## ۷. باید (چاہیے/ضروری ہے)

باید تمام اشخاص کے لیے یکساں رہتا ہے (صرف آگے کا فعل بدلتا ہے):

| فارسی | تلفظ | اردو |
|---|---|---|
| باید برم | باید بِرَم | مجھے جانا چاہیے |
| باید بری | باید بِری | تمہیں جانا چاہیے |
| باید بره | باید بِرِہ | اسے جانا چاہیے |
| نباید | نَباید | نہیں چاہیے / نہ جانا |

**می‌توانم / می‌تونم** = میں کر سکتا ہوں (formal/colloquial)

---

## ۸. که — نسبتی جملے

**که** (*کِہ*) = جو / کہ / جسے

| فارسی | اردو |
|---|---|
| کتابی که خریدم | کتاب جو میں نے خریدی |
| دوستی که می‌شناسم | دوست جسے میں جانتا ہوں |
| گفت که می‌آید | اس نے کہا کہ آئے گا |

---

## ۹. حروف جار (Prepositions)

| فارسی | تلفظ | اردو |
|---|---|---|
| در | دَر | میں / پر |
| با | با | کے ساتھ |
| از | اَز | سے |
| به | بِہ | کو / کی طرف |
| برای | بَرای | کے لیے |
| روی | روئی | اوپر |
| زیر | زیر | نیچے |
| کنار | کَنار | کے پاس / ساتھ |

---

## ۱۰. رسمی بمقابلہ عامیانہ فارسی

| رسمی (تحریری) | عامیانہ (بولی) | اردو |
|---|---|---|
| می‌روم | می‌رم | میں جاتا ہوں |
| می‌خواهم | می‌خوام | میں چاہتا ہوں |
| نمی‌دانم | نمیدونم | مجھے نہیں معلوم |
| این است | اینه | یہ ہے |
| آن‌ها | اونا | وہ (جمع) |
| چطور است؟ | چطوره؟ | کیسا ہے؟ |

**اہم نکتہ:** کتابوں اور اخبارات میں رسمی فارسی، گفتگو میں عامیانہ — دونوں سیکھیں!

</div>
