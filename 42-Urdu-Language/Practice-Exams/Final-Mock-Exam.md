<style>
.exam-wrap{font-family:system-ui,sans-serif;max-width:720px;margin:0 auto;}
.exam-header{background:linear-gradient(135deg,#1e1b4b,#4338ca);color:#fff;border-radius:14px;padding:1.5rem 2rem;margin-bottom:2rem;}
.exam-header h1{margin:0 0 .4rem;font-size:1.5rem;}
.exam-meta{display:flex;gap:1rem;flex-wrap:wrap;font-size:.875rem;opacity:.85;margin-top:.6rem;}
.exam-meta span{background:rgba(255,255,255,.15);padding:3px 10px;border-radius:6px;}
.q-block{background:#fff;border:1px solid #e2e8f0;border-radius:12px;padding:1.25rem 1.5rem;margin-bottom:1rem;}
.q-num{font-size:.75rem;font-weight:700;color:#6366f1;text-transform:uppercase;letter-spacing:.06em;margin-bottom:.4rem;}
.q-text{font-weight:600;font-size:1rem;margin-bottom:.85rem;color:#0f172a;}
.q-urdu{font-family:'Noto Nastaliq Urdu',Georgia,serif;font-size:1.2rem;direction:rtl;text-align:right;line-height:2.2;color:#1e1b4b;background:#f5f3ff;padding:.6rem 1rem;border-radius:8px;margin-bottom:.85rem;}
.opt-list{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px;}
.opt-list li label{display:flex;align-items:center;gap:10px;padding:.55rem .85rem;border-radius:8px;border:2px solid #e2e8f0;cursor:pointer;font-size:.95rem;transition:border-color .15s,background .15s;}
.opt-list li label:hover{border-color:#818cf8;background:#f5f3ff;}
.opt-list li input{accent-color:#4338ca;}
.opt-list li label.selected{border-color:#4338ca;background:#eef2ff;}
.opt-list li label.correct{border-color:#16a34a!important;background:#f0fdf4!important;}
.opt-list li label.wrong{border-color:#dc2626!important;background:#fef2f2!important;}
.submit-btn{background:#4338ca;color:#fff;border:none;border-radius:10px;padding:.75rem 2.5rem;font-size:1rem;font-weight:700;cursor:pointer;margin:1.5rem 0;}
.result-box{display:none;background:#fff;border:2px solid #4338ca;border-radius:14px;padding:1.5rem 2rem;margin-top:1rem;text-align:center;}
.result-score{font-size:2.5rem;font-weight:900;color:#4338ca;}
.result-msg{font-size:1.1rem;color:#334155;margin:.5rem 0;}
.result-pct{font-size:1rem;color:#64748b;}
.answer-key{margin-top:1.5rem;background:#f8fafc;border-radius:10px;padding:1rem 1.25rem;text-align:left;font-size:.9rem;}
.answer-key summary{font-weight:700;cursor:pointer;color:#4338ca;}
.answer-key table{width:100%;border-collapse:collapse;margin-top:.75rem;}
.answer-key td{padding:5px 10px;border-bottom:1px solid #e2e8f0;font-size:.85rem;}
.answer-key td:first-child{font-weight:700;color:#64748b;width:40px;}
.sec-header{background:#eef2ff;border-radius:10px;padding:.6rem 1rem;margin-bottom:1rem;font-weight:700;color:#4338ca;}
.note-box{background:#fefce8;border:1px solid #fde68a;border-radius:8px;padding:.75rem 1rem;margin-bottom:1.5rem;font-size:.9rem;color:#78350f;}
</style>

<div class="exam-wrap">

<div class="exam-header">
  <h1>Final Mock Exam — اردو مہارت کا امتحان</h1>
  <p style="margin:.3rem 0 0;opacity:.9;">Urdu Language Mastery — Level C1/C2 Proficiency Assessment</p>
  <div class="exam-meta">
    <span>40 Questions</span>
    <span>Pass: 30/40 (75%)</span>
    <span>No transliteration assistance provided</span>
  </div>
</div>

<div class="note-box">
  <strong>Important:</strong> This exam assesses C1/C2 Urdu proficiency. Questions are entirely in Nastaliq Urdu script — no transliteration is provided. You should be able to read all script directly. Good luck!
</div>

<form id="exam-form">

<!-- SECTION A: SCRIPT READING -->
<div class="sec-header">Section A — Script Reading — نستعلیق خواندگی (Questions 1–8)</div>

<!-- Q1 -->
<div class="q-block">
  <div class="q-num">Question 1</div>
  <div class="q-text">What does this word mean?</div>
  <div class="q-urdu">محبت</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q1" value="A"> Friendship</label></li>
    <li><label><input type="radio" name="q1" value="B"> Love</label></li>
    <li><label><input type="radio" name="q1" value="C"> Respect</label></li>
    <li><label><input type="radio" name="q1" value="D"> Peace</label></li>
  </ul>
</div>

<!-- Q2 -->
<div class="q-block">
  <div class="q-num">Question 2</div>
  <div class="q-text">Identify the meaning of this phrase:</div>
  <div class="q-urdu">ضرب الامثال</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q2" value="A"> Poetry collection</label></li>
    <li><label><input type="radio" name="q2" value="B"> Proverbs and sayings</label></li>
    <li><label><input type="radio" name="q2" value="C"> Grammar rules</label></li>
    <li><label><input type="radio" name="q2" value="D"> Business vocabulary</label></li>
  </ul>
</div>

<!-- Q3 -->
<div class="q-block">
  <div class="q-num">Question 3</div>
  <div class="q-text">What does this formal letter phrase mean?</div>
  <div class="q-urdu">عرض ہے کہ</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q3" value="A"> I demand that</label></li>
    <li><label><input type="radio" name="q3" value="B"> It is humbly stated that</label></li>
    <li><label><input type="radio" name="q3" value="C"> I hereby confirm</label></li>
    <li><label><input type="radio" name="q3" value="D"> With regards to</label></li>
  </ul>
</div>

<!-- Q4 -->
<div class="q-block">
  <div class="q-num">Question 4</div>
  <div class="q-text">Read this proverb and choose its English equivalent:</div>
  <div class="q-urdu">جہاں چاہ وہاں راہ</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q4" value="A"> All roads lead to Rome</label></li>
    <li><label><input type="radio" name="q4" value="B"> Where there's a will, there's a way</label></li>
    <li><label><input type="radio" name="q4" value="C"> The path of the righteous is long</label></li>
    <li><label><input type="radio" name="q4" value="D"> He who travels fastest travels alone</label></li>
  </ul>
</div>

<!-- Q5 -->
<div class="q-block">
  <div class="q-num">Question 5</div>
  <div class="q-text">What is the meaning of this term?</div>
  <div class="q-urdu">مشاعرہ</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q5" value="A"> A government ministry</label></li>
    <li><label><input type="radio" name="q5" value="B"> A formal poetry recitation gathering</label></li>
    <li><label><input type="radio" name="q5" value="C"> A religious ceremony</label></li>
    <li><label><input type="radio" name="q5" value="D"> A business meeting</label></li>
  </ul>
</div>

<!-- Q6 -->
<div class="q-block">
  <div class="q-num">Question 6</div>
  <div class="q-text">What does this newspaper headline say?</div>
  <div class="q-urdu">قومی معیشت میں بہتری کے آثار</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q6" value="A"> National assembly approves budget</label></li>
    <li><label><input type="radio" name="q6" value="B"> Signs of improvement in the national economy</label></li>
    <li><label><input type="radio" name="q6" value="C"> National economy faces crisis</label></li>
    <li><label><input type="radio" name="q6" value="D"> Government announces new economic plan</label></li>
  </ul>
</div>

<!-- Q7 -->
<div class="q-block">
  <div class="q-num">Question 7</div>
  <div class="q-text">Identify the meaning of this idiom:</div>
  <div class="q-urdu">آگ بگولہ ہونا</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q7" value="A"> To become very happy</label></li>
    <li><label><input type="radio" name="q7" value="B"> To set something on fire</label></li>
    <li><label><input type="radio" name="q7" value="C"> To become furious</label></li>
    <li><label><input type="radio" name="q7" value="D"> To disappear suddenly</label></li>
  </ul>
</div>

<!-- Q8 -->
<div class="q-block">
  <div class="q-num">Question 8</div>
  <div class="q-text">What does this legal term mean?</div>
  <div class="q-urdu">حلف نامہ</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q8" value="A"> Court verdict</label></li>
    <li><label><input type="radio" name="q8" value="B"> Affidavit (sworn statement)</label></li>
    <li><label><input type="radio" name="q8" value="C"> Government directive</label></li>
    <li><label><input type="radio" name="q8" value="D"> Business letter</label></li>
  </ul>
</div>

<!-- SECTION B: ADVANCED GRAMMAR -->
<div class="sec-header">Section B — Advanced Grammar — اعلیٰ گرامر (Questions 9–18)</div>

<!-- Q9 -->
<div class="q-block">
  <div class="q-num">Question 9</div>
  <div class="q-text">Which of these sentences correctly applies the ergative نے rule?</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q9" value="A"> وہ گھر آئی — She came home (intransitive)</label></li>
    <li><label><input type="radio" name="q9" value="B"> اس نے گانا گایا — She sang the song (transitive, verb agrees with گانا = masc.)</label></li>
    <li><label><input type="radio" name="q9" value="C"> Both A and B are correct</label></li>
    <li><label><input type="radio" name="q9" value="D"> Neither is correct</label></li>
  </ul>
</div>

<!-- Q10 -->
<div class="q-block">
  <div class="q-num">Question 10</div>
  <div class="q-text">What is the indirect causative of کھانا (to eat)?</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q10" value="A"> کھانا</label></li>
    <li><label><input type="radio" name="q10" value="B"> کھلانا</label></li>
    <li><label><input type="radio" name="q10" value="C"> کھلوانا</label></li>
    <li><label><input type="radio" name="q10" value="D"> کھا لینا</label></li>
  </ul>
</div>

<!-- Q11 -->
<div class="q-block">
  <div class="q-num">Question 11</div>
  <div class="q-text">Select the correct translation: "I wish she had come."</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q11" value="A"> وہ آئے گی</label></li>
    <li><label><input type="radio" name="q11" value="B"> کاش وہ آتی</label></li>
    <li><label><input type="radio" name="q11" value="C"> وہ آئی ہے</label></li>
    <li><label><input type="radio" name="q11" value="D"> اگر وہ آئے تو</label></li>
  </ul>
</div>

<!-- Q12 -->
<div class="q-block">
  <div class="q-num">Question 12</div>
  <div class="q-text">Which sentence uses a compound verb to show the speaker did something for someone else's benefit?</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q12" value="A"> میں نے کھانا کھا لیا</label></li>
    <li><label><input type="radio" name="q12" value="B"> مجھے بتا دو</label></li>
    <li><label><input type="radio" name="q12" value="C"> وہ مر گیا</label></li>
    <li><label><input type="radio" name="q12" value="D"> وہ آ گئی</label></li>
  </ul>
</div>

<!-- Q13 -->
<div class="q-block">
  <div class="q-num">Question 13</div>
  <div class="q-text">Identify the participial construction meaning "while walking":</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q13" value="A"> چلتے چلتے</label></li>
    <li><label><input type="radio" name="q13" value="B"> چل کر</label></li>
    <li><label><input type="radio" name="q13" value="C"> چلا گیا</label></li>
    <li><label><input type="radio" name="q13" value="D"> چلتا ہے</label></li>
  </ul>
</div>

<!-- Q14 -->
<div class="q-block">
  <div class="q-num">Question 14</div>
  <div class="q-text">Which relative pronoun is used for a plural oblique (e.g., "the people who...")?</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q14" value="A"> جو</label></li>
    <li><label><input type="radio" name="q14" value="B"> جس</label></li>
    <li><label><input type="radio" name="q14" value="C"> جن</label></li>
    <li><label><input type="radio" name="q14" value="D"> جہاں</label></li>
  </ul>
</div>

<!-- Q15 -->
<div class="q-block">
  <div class="q-num">Question 15</div>
  <div class="q-text">Translate: "Having eaten, he left." (Absolutive construction)</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q15" value="A"> وہ کھانا کھا رہا تھا</label></li>
    <li><label><input type="radio" name="q15" value="B"> کھانا کھا کر وہ چلا گیا</label></li>
    <li><label><input type="radio" name="q15" value="C"> اس نے کھانا کھایا ہے</label></li>
    <li><label><input type="radio" name="q15" value="D"> کھانا کھاتے کھاتے وہ گیا</label></li>
  </ul>
</div>

<!-- Q16 -->
<div class="q-block">
  <div class="q-num">Question 16</div>
  <div class="q-text">In the past perfect, what auxiliary verb is used?</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q16" value="A"> ہے / ہیں</label></li>
    <li><label><input type="radio" name="q16" value="B"> گا / گے</label></li>
    <li><label><input type="radio" name="q16" value="C"> تھا / تھی / تھے</label></li>
    <li><label><input type="radio" name="q16" value="D"> ہو / ہوں</label></li>
  </ul>
</div>

<!-- Q17 -->
<div class="q-block">
  <div class="q-num">Question 17</div>
  <div class="q-text">The teacher had the children write essays. Which causative form is correct?</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q17" value="A"> استاد نے بچوں کو لکھایا</label></li>
    <li><label><input type="radio" name="q17" value="B"> استاد نے بچوں سے مضمون لکھوایا</label></li>
    <li><label><input type="radio" name="q17" value="C"> استاد بچوں کو لکھا رہا تھا</label></li>
    <li><label><input type="radio" name="q17" value="D"> استاد نے مضمون لکھا</label></li>
  </ul>
</div>

<!-- Q18 -->
<div class="q-block">
  <div class="q-num">Question 18</div>
  <div class="q-text">Which sentence correctly illustrates an unreal conditional?</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q18" value="A"> اگر تم آؤ گے تو مجھے خوشی ہوگی</label></li>
    <li><label><input type="radio" name="q18" value="B"> اگر میرے پاس وقت ہوتا تو میں آتا</label></li>
    <li><label><input type="radio" name="q18" value="C"> اگر بارش ہو تو چھتری لو</label></li>
    <li><label><input type="radio" name="q18" value="D"> جب وہ آئے گی تب بتاؤ</label></li>
  </ul>
</div>

<!-- SECTION C: POETRY COMPREHENSION -->
<div class="sec-header">Section C — Poetry Comprehension — شاعری کا فہم (Questions 19–24)</div>

<!-- Q19 -->
<div class="q-block">
  <div class="q-num">Question 19</div>
  <div class="q-text">Who wrote this famous couplet?</div>
  <div class="q-urdu">ہزاروں خواہشیں ایسی کہ ہر خواہش پہ دم نکلے</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q19" value="A"> فیض احمد فیض</label></li>
    <li><label><input type="radio" name="q19" value="B"> مرزا غالب</label></li>
    <li><label><input type="radio" name="q19" value="C"> اقبال</label></li>
    <li><label><input type="radio" name="q19" value="D"> فہمیدہ ریاض</label></li>
  </ul>
</div>

<!-- Q20 -->
<div class="q-block">
  <div class="q-num">Question 20</div>
  <div class="q-text">What theme does this Ghalib couplet express?</div>
  <div class="q-urdu">عشق پر زور نہیں ہے یہ وہ آتش غالب
کہ لگائے نہ لگے اور بجھائے نہ بجھے</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q20" value="A"> Love can be controlled with willpower</label></li>
    <li><label><input type="radio" name="q20" value="B"> Love is a fire beyond human control</label></li>
    <li><label><input type="radio" name="q20" value="C"> Physical fire is more dangerous than love</label></li>
    <li><label><input type="radio" name="q20" value="D"> Ghalib rejected love</label></li>
  </ul>
</div>

<!-- Q21 -->
<div class="q-block">
  <div class="q-num">Question 21</div>
  <div class="q-text">What is the term for the opening couplet of a ghazal where both lines share the full rhyme?</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q21" value="A"> مقطع</label></li>
    <li><label><input type="radio" name="q21" value="B"> مطلع</label></li>
    <li><label><input type="radio" name="q21" value="C"> ردیف</label></li>
    <li><label><input type="radio" name="q21" value="D"> تخلص</label></li>
  </ul>
</div>

<!-- Q22 -->
<div class="q-block">
  <div class="q-num">Question 22</div>
  <div class="q-text">Which Faiz poem contains the line "مجھ سے پہلی سی محبت مری محبوب نہ مانگ"?</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q22" value="A"> A love poem addressed only to a romantic partner</label></li>
    <li><label><input type="radio" name="q22" value="B"> A political poem saying love cannot be the only priority when the world suffers</label></li>
    <li><label><input type="radio" name="q22" value="C"> A farewell poem at the end of a relationship</label></li>
    <li><label><input type="radio" name="q22" value="D"> A poem about childhood memories</label></li>
  </ul>
</div>

<!-- Q23 -->
<div class="q-block">
  <div class="q-num">Question 23</div>
  <div class="q-text">At a mushaira, the audience shouts واہ واہ. What does this indicate?</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q23" value="A"> Disapproval of the poem</label></li>
    <li><label><input type="radio" name="q23" value="B"> Admiration and appreciation of the couplet</label></li>
    <li><label><input type="radio" name="q23" value="C"> A request for the poet to stop</label></li>
    <li><label><input type="radio" name="q23" value="D"> Signal that the event is ending</label></li>
  </ul>
</div>

<!-- Q24 -->
<div class="q-block">
  <div class="q-num">Question 24</div>
  <div class="q-text">What does this proverb mean?</div>
  <div class="q-urdu">دودھ کا جلا چھاچھ بھی پھونک پھونک کر پیتا ہے</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q24" value="A"> Milk is more dangerous than buttermilk</label></li>
    <li><label><input type="radio" name="q24" value="B"> Once burnt, twice shy</label></li>
    <li><label><input type="radio" name="q24" value="C"> Always blow on hot food before eating</label></li>
    <li><label><input type="radio" name="q24" value="D"> Patience in drinking leads to health</label></li>
  </ul>
</div>

<!-- SECTION D: BUSINESS URDU -->
<div class="sec-header">Section D — Business Urdu — کاروباری اردو (Questions 25–32)</div>

<!-- Q25 -->
<div class="q-block">
  <div class="q-num">Question 25</div>
  <div class="q-text">What does محترمہ indicate in a formal letter salutation?</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q25" value="A"> Respected Sir (male)</label></li>
    <li><label><input type="radio" name="q25" value="B"> Respected Madam (female)</label></li>
    <li><label><input type="radio" name="q25" value="C"> To Whom It May Concern</label></li>
    <li><label><input type="radio" name="q25" value="D"> Your Excellency</label></li>
  </ul>
</div>

<!-- Q26 -->
<div class="q-block">
  <div class="q-num">Question 26</div>
  <div class="q-text">What section of a formal Urdu report contains the recommendations?</div>
  <div class="q-urdu">سفارشات</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q26" value="A"> Summary section</label></li>
    <li><label><input type="radio" name="q26" value="B"> Background section</label></li>
    <li><label><input type="radio" name="q26" value="C"> Recommendations section</label></li>
    <li><label><input type="radio" name="q26" value="D"> Findings section</label></li>
  </ul>
</div>

<!-- Q27 -->
<div class="q-block">
  <div class="q-num">Question 27</div>
  <div class="q-text">In a Pakistani business meeting, someone says اتفاقِ رائے ہو گیا. What happened?</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q27" value="A"> A vote was taken</label></li>
    <li><label><input type="radio" name="q27" value="B"> Consensus was reached</label></li>
    <li><label><input type="radio" name="q27" value="C"> A proposal was rejected</label></li>
    <li><label><input type="radio" name="q27" value="D"> The meeting was adjourned</label></li>
  </ul>
</div>

<!-- Q28 -->
<div class="q-block">
  <div class="q-num">Question 28</div>
  <div class="q-text">What does باخبر ذرائع refer to in a news article?</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q28" value="A"> Official press release</label></li>
    <li><label><input type="radio" name="q28" value="B"> Informed sources</label></li>
    <li><label><input type="radio" name="q28" value="C"> Government spokesperson</label></li>
    <li><label><input type="radio" name="q28" value="D"> Intelligence report</label></li>
  </ul>
</div>

<!-- Q29 -->
<div class="q-block">
  <div class="q-num">Question 29</div>
  <div class="q-text">How do you formally address a female doctor in Urdu?</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q29" value="A"> ڈاکٹر صاحب</label></li>
    <li><label><input type="radio" name="q29" value="B"> ڈاکٹر صاحبہ</label></li>
    <li><label><input type="radio" name="q29" value="C"> محترم ڈاکٹر</label></li>
    <li><label><input type="radio" name="q29" value="D"> جناب ڈاکٹر</label></li>
  </ul>
</div>

<!-- Q30 -->
<div class="q-block">
  <div class="q-num">Question 30</div>
  <div class="q-text">What does وزیرِ اعظم mean?</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q30" value="A"> President</label></li>
    <li><label><input type="radio" name="q30" value="B"> Prime Minister</label></li>
    <li><label><input type="radio" name="q30" value="C"> Chief Justice</label></li>
    <li><label><input type="radio" name="q30" value="D"> Army Chief</label></li>
  </ul>
</div>

<!-- Q31 -->
<div class="q-block">
  <div class="q-num">Question 31</div>
  <div class="q-text">Which closing phrase is used in a formal Urdu business letter?</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q31" value="A"> مبارک ہو</label></li>
    <li><label><input type="radio" name="q31" value="B"> آپ کا مخلص</label></li>
    <li><label><input type="radio" name="q31" value="C"> السلام علیکم</label></li>
    <li><label><input type="radio" name="q31" value="D"> واہ واہ</label></li>
  </ul>
</div>

<!-- Q32 -->
<div class="q-block">
  <div class="q-num">Question 32</div>
  <div class="q-text">What is the Urdu term for the plaintiff in a court case?</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q32" value="A"> ملزم</label></li>
    <li><label><input type="radio" name="q32" value="B"> وکیل</label></li>
    <li><label><input type="radio" name="q32" value="C"> مدعی</label></li>
    <li><label><input type="radio" name="q32" value="D"> گواہ</label></li>
  </ul>
</div>

<!-- SECTION E: TRANSLATION -->
<div class="sec-header">Section E — Translation Passages (Questions 33–40)</div>

<!-- Q33 -->
<div class="q-block">
  <div class="q-num">Question 33</div>
  <div class="q-text">Translate this sentence:</div>
  <div class="q-urdu">صبر کا پھل میٹھا ہوتا ہے</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q33" value="A"> Patience is bitter but its reward is sweet</label></li>
    <li><label><input type="radio" name="q33" value="B"> The fruit of patience is sweet</label></li>
    <li><label><input type="radio" name="q33" value="C"> Sweet fruits grow with patience</label></li>
    <li><label><input type="radio" name="q33" value="D"> Patience grows like a fruit tree</label></li>
  </ul>
</div>

<!-- Q34 -->
<div class="q-block">
  <div class="q-num">Question 34</div>
  <div class="q-text">What does this sentence mean?</div>
  <div class="q-urdu">میرا یہ پختہ یقین ہے کہ تعلیم ترقی کی بنیاد ہے</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q34" value="A"> I sometimes think that education might lead to progress</label></li>
    <li><label><input type="radio" name="q34" value="B"> I am firmly convinced that education is the foundation of progress</label></li>
    <li><label><input type="radio" name="q34" value="C"> It is uncertain whether education leads to progress</label></li>
    <li><label><input type="radio" name="q34" value="D"> Progress builds the foundation of education</label></li>
  </ul>
</div>

<!-- Q35 -->
<div class="q-block">
  <div class="q-num">Question 35</div>
  <div class="q-text">Translate into natural English:</div>
  <div class="q-urdu">ہم درمیانی راستہ نکال سکتے ہیں</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q35" value="A"> We can find the road in the middle</label></li>
    <li><label><input type="radio" name="q35" value="B"> We can find a middle ground / compromise</label></li>
    <li><label><input type="radio" name="q35" value="C"> We are taking the middle road</label></li>
    <li><label><input type="radio" name="q35" value="D"> We can reach the middle destination</label></li>
  </ul>
</div>

<!-- Q36 -->
<div class="q-block">
  <div class="q-num">Question 36</div>
  <div class="q-text">What does this formal presentation phrase mean?</div>
  <div class="q-urdu">توجہ فرمانے کا شکریہ</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q36" value="A"> Please pay attention</label></li>
    <li><label><input type="radio" name="q36" value="B"> Thank you for your attention</label></li>
    <li><label><input type="radio" name="q36" value="C"> Your attention is requested</label></li>
    <li><label><input type="radio" name="q36" value="D"> Thank you for coming</label></li>
  </ul>
</div>

<!-- Q37 -->
<div class="q-block">
  <div class="q-num">Question 37</div>
  <div class="q-text">Translate this idiom into English:</div>
  <div class="q-urdu">نو دو گیارہ ہونا</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q37" value="A"> To do mathematics</label></li>
    <li><label><input type="radio" name="q37" value="B"> To run away / flee</label></li>
    <li><label><input type="radio" name="q37" value="C"> To be confused</label></li>
    <li><label><input type="radio" name="q37" value="D"> To work together (9 + 2 = 11)</label></li>
  </ul>
</div>

<!-- Q38 -->
<div class="q-block">
  <div class="q-num">Question 38</div>
  <div class="q-text">Translate this sentence into English:</div>
  <div class="q-urdu">اردو صرف ایک زبان نہیں — یہ ایک پوری دنیا ہے</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q38" value="A"> Urdu is just a language, not a world</label></li>
    <li><label><input type="radio" name="q38" value="B"> Urdu is not just a language — it is an entire world</label></li>
    <li><label><input type="radio" name="q38" value="C"> The entire world speaks Urdu</label></li>
    <li><label><input type="radio" name="q38" value="D"> Urdu language spreads across the world</label></li>
  </ul>
</div>

<!-- Q39 -->
<div class="q-block">
  <div class="q-num">Question 39</div>
  <div class="q-text">What is the best English translation of this debate phrase?</div>
  <div class="q-urdu">یہ دلیل کمزور ہے کیونکہ اعداد و شمار اس کی تائید نہیں کرتے</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q39" value="A"> This argument is strong because the statistics support it</label></li>
    <li><label><input type="radio" name="q39" value="B"> This argument is weak because the statistics do not support it</label></li>
    <li><label><input type="radio" name="q39" value="C"> Statistics are weak arguments in a debate</label></li>
    <li><label><input type="radio" name="q39" value="D"> The argument uses statistics weakly</label></li>
  </ul>
</div>

<!-- Q40 -->
<div class="q-block">
  <div class="q-num">Question 40</div>
  <div class="q-text">Translate this complete sentence into natural English:</div>
  <div class="q-urdu">کھانا کھا کر وہ دفتر چلی گئی اور شام تک واپس نہ آئی</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q40" value="A"> She went to the office to eat food and came back in the evening</label></li>
    <li><label><input type="radio" name="q40" value="B"> Having eaten, she went to the office and did not return until evening</label></li>
    <li><label><input type="radio" name="q40" value="C"> She was eating food at the office all evening</label></li>
    <li><label><input type="radio" name="q40" value="D"> She ate at the office and left before evening</label></li>
  </ul>
</div>

<button type="button" class="submit-btn" onclick="submitFinalExam()">Submit Final Exam</button>

</form>

<div class="result-box" id="result-box">
  <div class="result-score" id="result-score"></div>
  <div class="result-msg" id="result-msg"></div>
  <div class="result-pct" id="result-pct"></div>


<details class="answer-key">
    <summary>View Answer Key</summary>
    <table>
      <tr><td>Q1</td><td>B — Love (محبت)</td></tr>
      <tr><td>Q2</td><td>B — Proverbs and sayings</td></tr>
      <tr><td>Q3</td><td>B — It is humbly stated that</td></tr>
      <tr><td>Q4</td><td>B — Where there's a will, there's a way</td></tr>
      <tr><td>Q5</td><td>B — Formal poetry recitation gathering</td></tr>
      <tr><td>Q6</td><td>B — Signs of improvement in national economy</td></tr>
      <tr><td>Q7</td><td>C — To become furious</td></tr>
      <tr><td>Q8</td><td>B — Affidavit (sworn statement)</td></tr>
      <tr><td>Q9</td><td>C — Both A and B are correct</td></tr>
      <tr><td>Q10</td><td>C — کھلوانا (indirect causative)</td></tr>
      <tr><td>Q11</td><td>B — کاش وہ آتی</td></tr>
      <tr><td>Q12</td><td>B — مجھے بتا دو (دینا = for another)</td></tr>
      <tr><td>Q13</td><td>A — چلتے چلتے (simultaneous action)</td></tr>
      <tr><td>Q14</td><td>C — جن (plural oblique)</td></tr>
      <tr><td>Q15</td><td>B — کھانا کھا کر وہ چلا گیا</td></tr>
      <tr><td>Q16</td><td>C — تھا / تھی / تھے (past perfect auxiliary)</td></tr>
      <tr><td>Q17</td><td>B — استاد نے بچوں سے مضمون لکھوایا</td></tr>
      <tr><td>Q18</td><td>B — اگر…ہوتا…آتا (hypothetical conditional)</td></tr>
      <tr><td>Q19</td><td>B — مرزا غالب</td></tr>
      <tr><td>Q20</td><td>B — Love is a fire beyond human control</td></tr>
      <tr><td>Q21</td><td>B — مطلع (opening couplet)</td></tr>
      <tr><td>Q22</td><td>B — Political: love not the only priority when world suffers</td></tr>
      <tr><td>Q23</td><td>B — Admiration and appreciation</td></tr>
      <tr><td>Q24</td><td>B — Once burnt, twice shy</td></tr>
      <tr><td>Q25</td><td>B — Respected Madam (female)</td></tr>
      <tr><td>Q26</td><td>C — Recommendations section</td></tr>
      <tr><td>Q27</td><td>B — Consensus was reached</td></tr>
      <tr><td>Q28</td><td>B — Informed sources</td></tr>
      <tr><td>Q29</td><td>B — ڈاکٹر صاحبہ</td></tr>
      <tr><td>Q30</td><td>B — Prime Minister</td></tr>
      <tr><td>Q31</td><td>B — آپ کا مخلص (Sincerely yours)</td></tr>
      <tr><td>Q32</td><td>C — مدعی (plaintiff)</td></tr>
      <tr><td>Q33</td><td>B — The fruit of patience is sweet</td></tr>
      <tr><td>Q34</td><td>B — I am firmly convinced that education is the foundation of progress</td></tr>
      <tr><td>Q35</td><td>B — We can find a middle ground / compromise</td></tr>
      <tr><td>Q36</td><td>B — Thank you for your attention</td></tr>
      <tr><td>Q37</td><td>B — To run away / flee</td></tr>
      <tr><td>Q38</td><td>B — Urdu is not just a language — it is an entire world</td></tr>
      <tr><td>Q39</td><td>B — This argument is weak because statistics do not support it</td></tr>
      <tr><td>Q40</td><td>B — Having eaten, she went to the office and did not return until evening</td></tr>
    </table>
  </details>
</div>

</div>

<script>
const ANSWERS_F={q1:'B',q2:'B',q3:'B',q4:'B',q5:'B',q6:'B',q7:'C',q8:'B',q9:'C',q10:'C',q11:'B',q12:'B',q13:'A',q14:'C',q15:'B',q16:'C',q17:'B',q18:'B',q19:'B',q20:'B',q21:'B',q22:'B',q23:'B',q24:'B',q25:'B',q26:'C',q27:'B',q28:'B',q29:'B',q30:'B',q31:'B',q32:'C',q33:'B',q34:'B',q35:'B',q36:'B',q37:'B',q38:'B',q39:'B',q40:'B'};
function submitFinalExam(){
  let score=0,total=Object.keys(ANSWERS_F).length;
  document.querySelectorAll('.opt-list li label').forEach(l=>l.classList.remove('correct','wrong'));
  Object.entries(ANSWERS_F).forEach(([qname,correct])=>{
    const selected=document.querySelector('input[name="'+qname+'"]:checked');
    document.querySelectorAll('input[name="'+qname+'"]').forEach(o=>{if(o.value===correct)o.parentElement.classList.add('correct');});
    if(selected){if(selected.value===correct)score++;else selected.parentElement.classList.add('wrong');}
  });
  const pct=Math.round((score/total)*100);
  const passed=score>=30;
  const rb=document.getElementById('result-box');
  rb.style.display='block';rb.style.borderColor=passed?'#16a34a':'#dc2626';
  document.getElementById('result-score').textContent=score+'/'+total;
  document.getElementById('result-score').style.color=passed?'#16a34a':'#dc2626';
  let msg='';
  if(score===40)msg='Perfect score! You have achieved true C2 mastery. مبارک ہو!';
  else if(score>=35)msg='Outstanding! C2 proficiency confirmed. مبارک ہو!';
  else if(passed)msg='Passed! C1/C2 level demonstrated. مبارک ہو!';
  else if(score>=25)msg='Nearly there — review Modules 7–10 and retake.';
  else msg='Keep studying — revisit Modules 6–10 and try again.';
  document.getElementById('result-msg').textContent=msg;
  document.getElementById('result-pct').textContent=pct+'% (Pass: 75% — 30/40)';
  rb.scrollIntoView({behavior:'smooth'});
}
document.querySelectorAll('.opt-list li label').forEach(l=>{
  l.addEventListener('click',()=>{
    const name=l.querySelector('input').name;
    document.querySelectorAll('input[name="'+name+'"]').forEach(i=>i.parentElement.classList.remove('selected'));
    l.classList.add('selected');
  });
});
</script>


## Answer Key

See interactive answer key above — click "View Answer Key" inside the result box.
