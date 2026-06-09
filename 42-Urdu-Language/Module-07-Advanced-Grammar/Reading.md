<div class="lang-switcher" style="background:linear-gradient(135deg,#1e1b4b,#312e81);border-radius:12px;padding:1.25rem;margin:0 0 2rem;text-align:center;box-shadow:0 4px 16px rgba(99,102,241,0.3);">
  <p style="color:#e0e7ff;font-size:1rem;font-weight:600;margin:0 0 0.85rem;">🌐 Choose your learning language / اپنی زبان منتخب کریں</p>
  <div style="display:flex;gap:0.75rem;justify-content:center;flex-wrap:wrap;">
    <button id="ls-btn-en" onclick="certHubSetLang('en')" style="padding:0.6rem 1.6rem;border-radius:9px;border:2px solid #818cf8;background:#fff;color:#4338ca;font-weight:700;font-size:0.95rem;cursor:pointer;">🇬🇧 English</button>
    <button id="ls-btn-ur" onclick="certHubSetLang('ur')" style="padding:0.6rem 1.6rem;border-radius:9px;border:2px solid #818cf8;background:#fff;color:#4338ca;font-weight:700;font-size:0.95rem;cursor:pointer;">🇵🇰 اردو (Urdu)</button>
  </div>
</div>
<script>function certHubSetLang(l){try{localStorage.setItem('cert-hub-lang-pref',l);}catch(e){}document.querySelectorAll('.lang-en,.lang-ur').forEach(function(el){el.style.display='none';});document.querySelectorAll('.lang-'+l).forEach(function(el){el.style.display='block';});var be=document.getElementById('ls-btn-en'),bu=document.getElementById('ls-btn-ur');if(be&&bu){be.style.background=l==='en'?'#4338ca':'#fff';be.style.color=l==='en'?'#fff':'#4338ca';bu.style.background=l==='ur'?'#4338ca':'#fff';bu.style.color=l==='ur'?'#fff':'#4338ca';}}(function(){var s='';try{s=localStorage.getItem('cert-hub-lang-pref')||'';}catch(e){}certHubSetLang(s||'en');})();</script>

<div class="lang-en">

# Module 7 — اعلیٰ گرامر (Advanced Grammar) · B2

This is the grammar engine room of the course. Master these structures and you will be able to express nuanced, complex ideas in authentic Urdu. We cover perfect tenses, conditionals, causatives, compound verbs, and the famous (and famously tricky) ergative construction.

---

## 1. Perfect Tenses — کامل زمانے

### Present Perfect — حالِ مکمل

**Structure:** Subject + Object + نے (ne) + Verb stem + ا/ی/ے + ہے/ہیں

The present perfect indicates an action that has been completed but has relevance to the present.

| Sentence | Transliteration | English |
|----------|-----------------|---------|
| میں نے کھانا کھایا ہے ۔ | Main ne khaana khaaya hai. | I have eaten food. |
| اس نے خط لکھا ہے ۔ | Us ne khat likha hai. | He/She has written a letter. |
| ہم نے فلم دیکھی ہے ۔ | Hum ne film dekhi hai. | We have watched the film. |
| انہوں نے کام کیا ہے ۔ | Unhon ne kaam kiya hai. | They have done the work. |

> **Key rule:** In present perfect with transitive verbs, the subject takes **نے (ne)** and the verb agrees with the **object**, not the subject.

**Gender agreement of the verb:**
- Object masculine singular → ا *(khaaya, likha)*
- Object feminine singular → ی *(likhi, dekhi)*
- Object plural → ے *(khaaye, likhe)*

### Past Perfect — ماضی بعید

**Structure:** Subject + نے + Object + Verb + تھا/تھی/تھے

Indicates an action completed before another past action.

| Sentence | Transliteration | English |
|----------|-----------------|---------|
| میں نے کھانا کھایا تھا ۔ | Main ne khaana khaaya tha. | I had eaten food. |
| وہ جا چکا تھا ۔ | Woh ja chuka tha. | He had already left. |
| انہوں نے رپورٹ لکھی تھی ۔ | Unhon ne riport likhi thi. | They had written the report. |

---

## 2. Ergativity — فاعل پر نے کا استعمال

**This is the hardest concept in Urdu grammar for English speakers.**

In English, the subject always controls verb agreement. In Urdu, this only holds for **intransitive** verbs. For **transitive verbs in the simple past**, the subject takes **نے** (the ergative marker) and the verb agrees with the **object**.

### The Golden Rule of Ergativity:

> **Transitive verb + simple past = Subject takes نے, verb agrees with object**

**Compare:**

| Type | Sentence | Analysis |
|------|----------|---------|
| Intransitive | وہ آیا ۔ *(Woh aaya.)* He came. | Subject وہ controls agreement |
| Transitive | اس نے کتاب پڑھی ۔ *(Us ne kitaab parhi.)* He read the book. | Subject اس takes نے; verb پڑھی agrees with object کتاب (feminine) |

### When does نے NOT appear?
1. Intransitive verbs in any tense: جانا، آنا، سونا، بیٹھنا
2. Transitive verbs in present/future tense
3. Certain perception verbs: سمجھنا، جاننا (sometimes)

### Examples with different objects:

| Sentence | Object gender | Verb form |
|----------|---------------|-----------|
| اس نے **کتاب** پڑھی ۔ | کتاب = feminine | پڑھی |
| اس نے **خط** لکھا ۔ | خط = masculine | لکھا |
| اس نے **خطوط** لکھے ۔ | خطوط = masculine plural | لکھے |

---

## 3. Conditional Sentences — شرطیہ جملے

### Real Conditionals (Possible)
**Structure:** اگر + present/future + تو + present/future

| Urdu | Transliteration | English |
|------|-----------------|---------|
| اگر تم آؤ گے تو میں خوش ہوں گا ۔ | Agar tum aaoge to main khush honga. | If you come, I will be happy. |
| اگر بارش ہو تو گھر رہو ۔ | Agar baarish ho to ghar raho. | If it rains, stay home. |

### Unreal/Hypothetical Conditionals
**Structure:** اگر + past subjunctive + تو + would/could

| Urdu | Transliteration | English |
|------|-----------------|---------|
| اگر میرے پاس پیسے ہوتے تو میں گاڑی خریدتا ۔ | Agar mere paas paise hote to main gaari kharidata. | If I had money, I would buy a car. |
| کاش وہ آتی ۔ | Kaash woh aati. | I wish she would come. |

> **کاش (kaash)** — "I wish / if only" — introduces irrealis (wishful/contrary-to-fact) statements and takes subjunctive.

---

## 4. Subjunctive — شرطی مزاج

The Urdu subjunctive (التزامی) expresses wishes, possibilities, and hypotheticals.

**Formation:** Drop the final ا from the past tense verb (for most verbs).

| Infinitive | Past | Subjunctive |
|------------|------|-------------|
| جانا (go) | گیا | جائے |
| کھانا (eat) | کھایا | کھائے |
| لکھنا (write) | لکھا | لکھے |
| دیکھنا (see) | دیکھا | دیکھے |

**Uses of subjunctive:**
1. After تاکہ (so that): وہ جلدی آئے تاکہ وقت پر پہنچ سکے ۔
2. After کاش (I wish): کاش وہ آئے ۔
3. With چاہیے (should): آپ کو یہ کرنا چاہیے ۔
4. Requests: کیا آپ یہ کر سکتے ہیں؟

---

## 5. Participial Constructions — اسمِ فاعل کے استعمالات

### Simultaneous Action — کھاتے کھاتے

**Structure:** Verb stem + تے/تی/تے + Verb stem + تے/تی/تے

Indicates doing two things simultaneously.

| Urdu | Transliteration | English |
|------|-----------------|---------|
| وہ چلتے چلتے گا رہا تھا ۔ | Woh chalte chalte gaa raha tha. | He was singing while walking. |
| کھاتے کھاتے باتیں کرنا | Khaate khaate baatein karna | Talking while eating |
| پڑھتے پڑھتے سو گیا ۔ | Parhte parhte so gaya. | He fell asleep while reading. |

### Verbal Participle — جاتے ہوئے

**Structure:** Verb stem + تے/تی/تے + ہوئے/ہوئی

Indicates action in progress as a modifier.

| Urdu | Transliteration | English |
|------|-----------------|---------|
| جاتے ہوئے دیکھا ۔ | Jaate hue dekha. | (He/she) was seen while going. |
| چلتے ہوئے گپھ آئی ۔ | Chalte hue guftugu hui. | The conversation happened while walking. |

---

## 6. Causative Verbs — متعدی/سببی افعال

This is a unique and beautiful feature of Urdu (shared with Hindi). A basic verb can be made causative (meaning "to cause someone to do X") in two systematic steps.

### The Causative System

| Type | Suffix | Example | Meaning |
|------|--------|---------|---------|
| Simple | — | پڑھنا | to read / to study |
| Direct Causative | ـانا | پڑھانا | to teach (cause to read) |
| Indirect Causative | ـوانا | پڑھوانا | to have (someone else) teach |

### More examples:

| Simple | Direct Causative | Indirect Causative |
|--------|------------------|--------------------|
| کھانا (eat) | کھلانا (to feed) | کھلوانا (to have someone feed) |
| پینا (drink) | پلانا (to give drink) | پلوانا (to have someone give drink) |
| لکھنا (write) | لکھانا (to dictate/cause to write) | لکھوانا (to have s.o. else cause to write) |
| بنانا (make) | بنوانا (to have made) | — |
| کرنا (do) | کرانا (to cause to do) | کروانا (to have caused to do) |

**Sentences:**
- ماں بچے کو کھلا رہی ہے ۔ *(Maan bache ko khilaa rahi hai.)* — Mother is feeding the child.
- استاد نے بچے سے مضمون لکھوایا ۔ *(Ustad ne bache se mazmoon likhwaaya.)* — The teacher had the child write an essay.
- میں نے گھر بنوایا ۔ *(Main ne ghar banwaaya.)* — I had a house built.

---

## 7. Compound Verbs — مرکب افعال

Urdu has a rich system of compound verbs where a main verb is followed by a "vector verb" that adds nuance of completion, direction, or benefit.

### The Main Vector Verbs

| Vector Verb | Core Meaning | Nuance added |
|-------------|--------------|--------------|
| جانا (jaana) | to go | completion / irreversibility |
| آنا (aana) | to come | completion / return to state |
| لینا (lena) | to take | action for one's own benefit |
| دینا (dena) | to give | action for another's benefit |
| دیکھنا (dekhna) | to see | trying out |
| ڈالنا (daalna) | to pour/put | sudden or reckless completion |
| بیٹھنا (baithna) | to sit | unexpected / sudden action |
| اٹھنا (uthna) | to rise | sudden/involuntary beginning |

### Compound Verb Examples

**+ جانا (completion / irreversibility):**
| Urdu | Transliteration | English |
|------|-----------------|---------|
| وہ مر گیا ۔ | Woh mar gaya. | He died (lit. he went and died — irrevocable) |
| پانی پی گیا ۔ | Paani pi gaya. | He drank up all the water. |
| دل ٹوٹ گیا ۔ | Dil toot gaya. | The heart broke (irreversibly). |

**+ لینا (for one's own benefit):**
| Urdu | Transliteration | English |
|------|-----------------|---------|
| میں نے کھانا کھا لیا ۔ | Main ne khaana kha liya. | I ate (for myself, done for me). |
| اس نے کتاب پڑھ لی ۔ | Us ne kitaab parh li. | She read the book (benefiting herself). |

**+ دینا (for another's benefit):**
| Urdu | Transliteration | English |
|------|-----------------|---------|
| مجھے بتا دو ۔ | Mujhe bata do. | Tell me (as a favor). |
| اس نے کام کر دیا ۔ | Us ne kaam kar diya. | He did the work (for others). |

**+ دیکھنا (trying out):**
| Urdu | Transliteration | English |
|------|-----------------|---------|
| ایک بار آزما دیکھو ۔ | Ek baar aazma dekho. | Try it once (and see). |

---

## 8. Absolutive Construction — فعلِ حالیہ مطلق

A verb form used to indicate an action completed **before** the main action.

**Structure:** Verb stem + کر (kar)

| Urdu | Transliteration | English |
|------|-----------------|---------|
| کھانا کھا کر وہ چلا گیا ۔ | Khaana kha kar woh chala gaya. | Having eaten, he left. |
| نہا کر آ جاؤ ۔ | Naha kar aa jao. | Come after bathing. |
| پڑھ کر سو گئی ۔ | Parh kar so gayi. | She fell asleep after reading. |

---

## 9. Complex Relative Clauses — پیچیدہ موصولی جملے

**Structure:** جو/جس/جن + clause + وہ + main clause

| Urdu | Transliteration | English |
|------|-----------------|---------|
| جو آدمی آیا تھا وہ میرا بھائی ہے ۔ | Jo aadmi aaya tha woh mera bhai hai. | The man who had come is my brother. |
| جس کتاب کو میں نے پڑھا وہ بہت اچھی تھی ۔ | Jis kitaab ko main ne parha woh bahut achi thi. | The book that I read was very good. |
| جن لوگوں نے آواز دی وہ باہر کھڑے ہیں ۔ | Jin logon ne awaaz di woh baahr khare hain. | The people who called out are standing outside. |

**Relative pronouns:**
- جو *(jo)* — who/which (subject, general)
- جس *(jis)* — who/which (oblique, singular)
- جن *(jin)* — who/which (oblique, plural)

---

## Grammar Summary Table

| Concept | Key Marker | Example |
|---------|-----------|---------|
| Present Perfect | نے + ہے/ہیں | میں نے کھایا ہے |
| Past Perfect | نے + تھا/تھی | میں نے کھایا تھا |
| Ergativity | نے on transitive subject | اس نے کتاب پڑھی |
| Real Conditional | اگر…تو | اگر آؤ گے تو |
| Hypothetical | اگر…ہوتا تو | اگر ہوتا تو |
| Simultaneous | Vتے Vتے | چلتے چلتے |
| Absolutive | V + کر | کھا کر گیا |
| Causative | ـانا / ـوانا | پڑھانا، پڑھوانا |
| Compound + completion | V + گیا | مر گیا |
| Compound + self-benefit | V + لیا | کھا لیا |
| Compound + other-benefit | V + دیا | بتا دیا |

</div>

<div class="lang-ur" style="direction:rtl;font-family:Noto Nastaliq Urdu,Georgia,serif;text-align:right;line-height:2.4;font-size:1.1rem;">

# ماڈیول ۷ — اعلیٰ گرامر · B2

اس ماڈیول میں اردو کے پیچیدہ اور اہم گرامر کے قواعد سیکھیں گے۔

---

## ۱۔ کامل زمانے

**حالِ مکمل:** نے + فعل + ہے/ہیں
- میں نے کھانا کھایا ہے۔ (میں نے کھایا ہے)
- وہ نے خط لکھا ہے۔

**ماضی بعید:** نے + فعل + تھا/تھی
- میں نے کھانا کھایا تھا۔
- وہ جا چکا تھا۔

> اہم قاعدہ: متعدی فعل کے ماضی میں فاعل پر "نے" آتا ہے اور فعل مفعول کے ساتھ مطابقت کرتا ہے۔

---

## ۲۔ فاعلی پر "نے" کا استعمال (Ergativity)

یہ انگریزی بولنے والوں کے لیے سب سے مشکل قاعدہ ہے:

**متعدی فعل + ماضی = فاعل پر نے، فعل مفعول کے مطابق**

- اس نے **کتاب** پڑھی۔ (کتاب مؤنث → پڑھی)
- اس نے **خط** لکھا۔ (خط مذکر → لکھا)

---

## ۳۔ شرطیہ جملے

**حقیقی شرط:** اگر + مضارع + تو + مضارع
- اگر تم آؤ گے تو میں خوش ہوں گا۔

**فرضی شرط:** اگر + ہوتا + تو + ہوتا
- اگر میرے پاس پیسے ہوتے تو میں گاڑی خریدتا۔
- کاش وہ آتی۔

---

## ۴۔ سببی افعال (Causative Verbs)

| سادہ | براہِ راست سببی | بلاواسطہ سببی |
|------|----------------|----------------|
| پڑھنا | پڑھانا | پڑھوانا |
| کھانا | کھلانا | کھلوانا |
| لکھنا | لکھانا | لکھوانا |

---

## ۵۔ مرکب افعال

| وکٹر فعل | مطلب |
|-----------|------|
| + گیا | مکمل/ناقابلِ واپسی |
| + لیا | اپنے فائدے کے لیے |
| + دیا | دوسرے کے فائدے کے لیے |

مثالیں:
- وہ مر گیا۔
- میں نے کھانا کھا لیا۔
- مجھے بتا دو۔

---

## ۶۔ فعلِ حالیہ مطلق

فعل + کر → پہلا کام مکمل کر کے دوسرا کام

- کھانا کھا کر وہ چلا گیا۔
- نہا کر آ جاؤ۔

---

## ۷۔ موصولی جملے

- جو آدمی آیا تھا وہ میرا بھائی ہے۔
- جس کتاب کو میں نے پڑھا وہ اچھی تھی۔

</div>
