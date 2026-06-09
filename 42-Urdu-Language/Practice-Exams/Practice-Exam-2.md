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
.q-passage{background:#fafafa;border:1px solid #e2e8f0;border-radius:8px;padding:.85rem 1rem;margin-bottom:.85rem;}
.q-passage p{margin:.3rem 0;}
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
.answer-key td{padding:5px 10px;border-bottom:1px solid #e2e8f0;}
.answer-key td:first-child{font-weight:700;color:#64748b;width:40px;}
</style>

<div class="exam-wrap">

<div class="exam-header">
  <h1>Practice Exam 2 — درمیانی سطح</h1>
  <p style="margin:.3rem 0 0;opacity:.9;">Urdu Language Mastery — Level B1/B2</p>
  <div class="exam-meta">
    <span>25 Questions</span>
    <span>Pass: 17/25 (68%)</span>
    <span>Topics: Grammar · Compound Verbs · Reading Comprehension · Conversation</span>
  </div>
</div>

<form id="exam-form">

<!-- SECTION A: GRAMMAR -->
<div style="background:#eef2ff;border-radius:10px;padding:.6rem 1rem;margin-bottom:1rem;font-weight:700;color:#4338ca;">Section A — Grammar (Questions 1–10)</div>

<!-- Q1 -->
<div class="q-block">
  <div class="q-num">Question 1</div>
  <div class="q-text">Which sentence correctly applies ergativity (نے rule)?</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q1" value="A"> وہ کتاب پڑھا</label></li>
    <li><label><input type="radio" name="q1" value="B"> اس نے کتاب پڑھی</label></li>
    <li><label><input type="radio" name="q1" value="C"> اس نے کتاب پڑھا</label></li>
    <li><label><input type="radio" name="q1" value="D"> وہ نے کتاب پڑھی</label></li>
  </ul>
</div>

<!-- Q2 -->
<div class="q-block">
  <div class="q-num">Question 2</div>
  <div class="q-text">The verb in this sentence must agree with which noun?</div>
  <div class="q-urdu">اس نے خط لکھ___</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q2" value="A"> اس (the subject)</label></li>
    <li><label><input type="radio" name="q2" value="B"> خط (the object — masculine)</label></li>
    <li><label><input type="radio" name="q2" value="C"> Neither — verb has no agreement</label></li>
    <li><label><input type="radio" name="q2" value="D"> The postposition نے</label></li>
  </ul>
</div>

<!-- Q3 -->
<div class="q-block">
  <div class="q-num">Question 3</div>
  <div class="q-text">Which sentence is in the present perfect tense?</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q3" value="A"> میں کھانا کھاتا ہوں</label></li>
    <li><label><input type="radio" name="q3" value="B"> میں نے کھانا کھایا تھا</label></li>
    <li><label><input type="radio" name="q3" value="C"> میں نے کھانا کھایا ہے</label></li>
    <li><label><input type="radio" name="q3" value="D"> میں کھانا کھاؤں گا</label></li>
  </ul>
</div>

<!-- Q4 -->
<div class="q-block">
  <div class="q-num">Question 4</div>
  <div class="q-text">Complete the conditional sentence correctly:</div>
  <div class="q-urdu">اگر بارش ہو ___ گھر رہو</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q4" value="A"> کیونکہ</label></li>
    <li><label><input type="radio" name="q4" value="B"> تو</label></li>
    <li><label><input type="radio" name="q4" value="C"> اور</label></li>
    <li><label><input type="radio" name="q4" value="D"> لیکن</label></li>
  </ul>
</div>

<!-- Q5 -->
<div class="q-block">
  <div class="q-num">Question 5</div>
  <div class="q-text">What does the compound verb کھا لینا express?</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q5" value="A"> Eating for another's benefit</label></li>
    <li><label><input type="radio" name="q5" value="B"> Eating for one's own benefit / completion</label></li>
    <li><label><input type="radio" name="q5" value="C"> Irreversible eating</label></li>
    <li><label><input type="radio" name="q5" value="D"> Being caused to eat</label></li>
  </ul>
</div>

<!-- Q6 -->
<div class="q-block">
  <div class="q-num">Question 6</div>
  <div class="q-text">What is the direct causative of پڑھنا (to read/study)?</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q6" value="A"> پڑھتا</label></li>
    <li><label><input type="radio" name="q6" value="B"> پڑھ لینا</label></li>
    <li><label><input type="radio" name="q6" value="C"> پڑھانا</label></li>
    <li><label><input type="radio" name="q6" value="D"> پڑھوانا</label></li>
  </ul>
</div>

<!-- Q7 -->
<div class="q-block">
  <div class="q-num">Question 7</div>
  <div class="q-text">Which sentence uses the absolutive construction (V + کر) correctly?</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q7" value="A"> کھانا کھا کر وہ گیا</label></li>
    <li><label><input type="radio" name="q7" value="B"> کھانا کھا کے رہ گیا</label></li>
    <li><label><input type="radio" name="q7" value="C"> کھانے کر وہ گیا</label></li>
    <li><label><input type="radio" name="q7" value="D"> کھاتے کر وہ گیا</label></li>
  </ul>
</div>

<!-- Q8 -->
<div class="q-block">
  <div class="q-num">Question 8</div>
  <div class="q-text">Which sentence correctly uses مر گیا (compound with جانا)?</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q8" value="A"> It means "he almost died"</label></li>
    <li><label><input type="radio" name="q8" value="B"> It indicates irreversible death (compound completion)</label></li>
    <li><label><input type="radio" name="q8" value="C"> It indicates death for another's benefit</label></li>
    <li><label><input type="radio" name="q8" value="D"> It means "he caused someone to die"</label></li>
  </ul>
</div>

<!-- Q9 -->
<div class="q-block">
  <div class="q-num">Question 9</div>
  <div class="q-text">Complete: اگر میرے پاس پیسے ہوتے تو میں گاڑی ___</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q9" value="A"> خریدوں گا</label></li>
    <li><label><input type="radio" name="q9" value="B"> خریدتا</label></li>
    <li><label><input type="radio" name="q9" value="C"> خریدا ہے</label></li>
    <li><label><input type="radio" name="q9" value="D"> خریدتا ہوں</label></li>
  </ul>
</div>

<!-- Q10 -->
<div class="q-block">
  <div class="q-num">Question 10</div>
  <div class="q-text">The subjunctive of جانا (to go) is:</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q10" value="A"> جاتا</label></li>
    <li><label><input type="radio" name="q10" value="B"> گیا</label></li>
    <li><label><input type="radio" name="q10" value="C"> جائے</label></li>
    <li><label><input type="radio" name="q10" value="D"> جانا</label></li>
  </ul>
</div>

<!-- SECTION B: READING COMPREHENSION -->
<div style="background:#eef2ff;border-radius:10px;padding:.6rem 1rem;margin-bottom:1rem;font-weight:700;color:#4338ca;">Section B — Reading Comprehension (Questions 11–17)</div>

<div class="q-block">
  <div class="q-num">Reading Passage (read carefully, then answer Q11–17)</div>
  <div class="q-urdu">احمد ہر روز صبح سات بجے اٹھتا ہے۔ وہ پہلے ناشتہ کرتا ہے، پھر دفتر جاتا ہے۔ اس کا دفتر گھر سے دور ہے اس لیے وہ بس میں جاتا ہے۔ دفتر میں وہ کمپیوٹر پر کام کرتا ہے اور ساتھیوں سے ملتا ہے۔ شام کو چھ بجے گھر واپس آتا ہے۔ اس کی بیوی کا نام ثمینہ ہے اور ان کے دو بچے ہیں۔</div>
  <div class="q-passage">
    <p><strong>Transliteration:</strong></p>
    <p>Ahmad har roz subah saat baje uthta hai. Woh pehle naashta karta hai, phir daftar jaata hai. Us ka daftar ghar se door hai is liye woh bus mein jaata hai. Daftar mein woh computer par kaam karta hai aur saathiyon se milta hai. Shaam ko chhe baje ghar waapis aata hai. Us ki biwi ka naam Sameena hai aur un ke do bachche hain.</p>
  </div>
</div>

<!-- Q11 -->
<div class="q-block">
  <div class="q-num">Question 11</div>
  <div class="q-text">What time does Ahmad wake up?</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q11" value="A"> 6 am</label></li>
    <li><label><input type="radio" name="q11" value="B"> 7 am</label></li>
    <li><label><input type="radio" name="q11" value="C"> 8 am</label></li>
    <li><label><input type="radio" name="q11" value="D"> 9 am</label></li>
  </ul>
</div>

<!-- Q12 -->
<div class="q-block">
  <div class="q-num">Question 12</div>
  <div class="q-text">How does Ahmad travel to work?</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q12" value="A"> By car</label></li>
    <li><label><input type="radio" name="q12" value="B"> On foot</label></li>
    <li><label><input type="radio" name="q12" value="C"> By bus</label></li>
    <li><label><input type="radio" name="q12" value="D"> By train</label></li>
  </ul>
</div>

<!-- Q13 -->
<div class="q-block">
  <div class="q-num">Question 13</div>
  <div class="q-text">What does Ahmad do first in the morning?</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q13" value="A"> Goes to the office</label></li>
    <li><label><input type="radio" name="q13" value="B"> Has breakfast</label></li>
    <li><label><input type="radio" name="q13" value="C"> Works on the computer</label></li>
    <li><label><input type="radio" name="q13" value="D"> Meets colleagues</label></li>
  </ul>
</div>

<!-- Q14 -->
<div class="q-block">
  <div class="q-num">Question 14</div>
  <div class="q-text">What is Ahmad's wife's name?</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q14" value="A"> Fatima</label></li>
    <li><label><input type="radio" name="q14" value="B"> Ayesha</label></li>
    <li><label><input type="radio" name="q14" value="C"> Sameena</label></li>
    <li><label><input type="radio" name="q14" value="D"> Zainab</label></li>
  </ul>
</div>

<!-- Q15 -->
<div class="q-block">
  <div class="q-num">Question 15</div>
  <div class="q-text">How many children does Ahmad have?</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q15" value="A"> One</label></li>
    <li><label><input type="radio" name="q15" value="B"> Two</label></li>
    <li><label><input type="radio" name="q15" value="C"> Three</label></li>
    <li><label><input type="radio" name="q15" value="D"> Four</label></li>
  </ul>
</div>

<!-- Q16 -->
<div class="q-block">
  <div class="q-num">Question 16</div>
  <div class="q-text">Why does Ahmad take the bus? (Read the passage for the reason)</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q16" value="A"> He doesn't have a car</label></li>
    <li><label><input type="radio" name="q16" value="B"> His office is far from home</label></li>
    <li><label><input type="radio" name="q16" value="C"> Traffic is bad</label></li>
    <li><label><input type="radio" name="q16" value="D"> His wife uses the car</label></li>
  </ul>
</div>

<!-- Q17 -->
<div class="q-block">
  <div class="q-num">Question 17</div>
  <div class="q-text">What time does Ahmad return home?</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q17" value="A"> 5 pm</label></li>
    <li><label><input type="radio" name="q17" value="B"> 6 pm</label></li>
    <li><label><input type="radio" name="q17" value="C"> 7 pm</label></li>
    <li><label><input type="radio" name="q17" value="D"> 8 pm</label></li>
  </ul>
</div>

<!-- SECTION C: CONVERSATION COMPLETION -->
<div style="background:#eef2ff;border-radius:10px;padding:.6rem 1rem;margin-bottom:1rem;font-weight:700;color:#4338ca;">Section C — Conversation Completion (Questions 18–25)</div>

<!-- Q18 -->
<div class="q-block">
  <div class="q-num">Question 18</div>
  <div class="q-text">You receive great news. Which expression is most appropriate?</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q18" value="A"> مجھے بخار ہے</label></li>
    <li><label><input type="radio" name="q18" value="B"> مبارک ہو!</label></li>
    <li><label><input type="radio" name="q18" value="C"> آہستہ بولیں</label></li>
    <li><label><input type="radio" name="q18" value="D"> مجھے سمجھ نہیں آیا</label></li>
  </ul>
</div>

<!-- Q19 -->
<div class="q-block">
  <div class="q-num">Question 19</div>
  <div class="q-text">Someone asks یہ کتنے کا ہے؟ — What are they asking?</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q19" value="A"> What is this?</label></li>
    <li><label><input type="radio" name="q19" value="B"> How much does this cost?</label></li>
    <li><label><input type="radio" name="q19" value="C"> Where is this?</label></li>
    <li><label><input type="radio" name="q19" value="D"> Is this yours?</label></li>
  </ul>
</div>

<!-- Q20 -->
<div class="q-block">
  <div class="q-num">Question 20</div>
  <div class="q-text">In a formal meeting, how do you politely disagree?</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q20" value="A"> یہ بالکل غلط ہے!</label></li>
    <li><label><input type="radio" name="q20" value="B"> معذرت کے ساتھ، میں متفق نہیں</label></li>
    <li><label><input type="radio" name="q20" value="C"> آپ سے سو فیصد اتفاق ہے</label></li>
    <li><label><input type="radio" name="q20" value="D"> بالکل ٹھیک ہے!</label></li>
  </ul>
</div>

<!-- Q21 -->
<div class="q-block">
  <div class="q-num">Question 21</div>
  <div class="q-text">You are at the doctor's. How do you say "I have a headache"?</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q21" value="A"> پیٹ میں درد ہے</label></li>
    <li><label><input type="radio" name="q21" value="B"> مجھے بخار ہے</label></li>
    <li><label><input type="radio" name="q21" value="C"> سر میں درد ہے</label></li>
    <li><label><input type="radio" name="q21" value="D"> کھانسی آ رہی ہے</label></li>
  </ul>
</div>

<!-- Q22 -->
<div class="q-block">
  <div class="q-num">Question 22</div>
  <div class="q-text">You want to say "We need time to think" in a negotiation. Which phrase is correct?</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q22" value="A"> ہماری آخری پیشکش ہے</label></li>
    <li><label><input type="radio" name="q22" value="B"> ہمیں سوچنے کا وقت چاہیے</label></li>
    <li><label><input type="radio" name="q22" value="C"> ہم درمیانی راستہ نکالیں گے</label></li>
    <li><label><input type="radio" name="q22" value="D"> ہمارا خیال ہے</label></li>
  </ul>
</div>

<!-- Q23 -->
<div class="q-block">
  <div class="q-num">Question 23</div>
  <div class="q-text">Which phrase correctly expresses "I firmly believe that..."?</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q23" value="A"> میرے خیال میں شاید…</label></li>
    <li><label><input type="radio" name="q23" value="B"> مجھے نہیں معلوم کہ…</label></li>
    <li><label><input type="radio" name="q23" value="C"> میرا یہ پختہ یقین ہے کہ…</label></li>
    <li><label><input type="radio" name="q23" value="D"> کبھی کبھی لگتا ہے…</label></li>
  </ul>
</div>

<!-- Q24 -->
<div class="q-block">
  <div class="q-num">Question 24</div>
  <div class="q-text">What does اگلی میٹنگ جمعے کو ہوگی mean?</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q24" value="A"> The last meeting was on Friday</label></li>
    <li><label><input type="radio" name="q24" value="B"> The next meeting will be on Friday</label></li>
    <li><label><input type="radio" name="q24" value="C"> Please come to the meeting on Friday</label></li>
    <li><label><input type="radio" name="q24" value="D"> Friday's meeting was cancelled</label></li>
  </ul>
</div>

<!-- Q25 -->
<div class="q-block">
  <div class="q-num">Question 25</div>
  <div class="q-text">Eid is tomorrow. Which greeting is appropriate?</div>
  <ul class="opt-list">
    <li><label><input type="radio" name="q25" value="A"> السلام علیکم</label></li>
    <li><label><input type="radio" name="q25" value="B"> خدا حافظ</label></li>
    <li><label><input type="radio" name="q25" value="C"> عید مبارک!</label></li>
    <li><label><input type="radio" name="q25" value="D"> شکریہ</label></li>
  </ul>
</div>

<button type="button" class="submit-btn" onclick="submitExam2()">Submit Exam</button>

</form>

<div class="result-box" id="result-box">
  <div class="result-score" id="result-score"></div>
  <div class="result-msg" id="result-msg"></div>
  <div class="result-pct" id="result-pct"></div>


<details class="answer-key">
    <summary>View Answer Key</summary>
    <table>
      <tr><td>Q1</td><td>B — اس نے کتاب پڑھی (نے + feminine verb agreement)</td></tr>
      <tr><td>Q2</td><td>B — خط (the object — masculine → لکھا)</td></tr>
      <tr><td>Q3</td><td>C — میں نے کھایا ہے (present perfect with ہے)</td></tr>
      <tr><td>Q4</td><td>B — تو (اگر…تو conditional)</td></tr>
      <tr><td>Q5</td><td>B — Own benefit/completion (لینا vector verb)</td></tr>
      <tr><td>Q6</td><td>C — پڑھانا (direct causative: cause to read = teach)</td></tr>
      <tr><td>Q7</td><td>A — کھانا کھا کر وہ گیا (correct absolutive)</td></tr>
      <tr><td>Q8</td><td>B — Irreversible death (جانا = irrevocable completion)</td></tr>
      <tr><td>Q9</td><td>B — خریدتا (hypothetical conditional → past stem)</td></tr>
      <tr><td>Q10</td><td>C — جائے (subjunctive of جانا)</td></tr>
      <tr><td>Q11</td><td>B — 7 am (سات بجے)</td></tr>
      <tr><td>Q12</td><td>C — By bus (بس میں)</td></tr>
      <tr><td>Q13</td><td>B — Breakfast (ناشتہ پہلے)</td></tr>
      <tr><td>Q14</td><td>C — Sameena (ثمینہ)</td></tr>
      <tr><td>Q15</td><td>B — Two (دو بچے)</td></tr>
      <tr><td>Q16</td><td>B — Office is far from home (دفتر گھر سے دور ہے)</td></tr>
      <tr><td>Q17</td><td>B — 6 pm (شام کو چھ بجے)</td></tr>
      <tr><td>Q18</td><td>B — مبارک ہو! (Congratulations)</td></tr>
      <tr><td>Q19</td><td>B — How much does this cost?</td></tr>
      <tr><td>Q20</td><td>B — معذرت کے ساتھ، میں متفق نہیں (polite disagreement)</td></tr>
      <tr><td>Q21</td><td>C — سر میں درد ہے (headache)</td></tr>
      <tr><td>Q22</td><td>B — ہمیں سوچنے کا وقت چاہیے</td></tr>
      <tr><td>Q23</td><td>C — میرا یہ پختہ یقین ہے کہ…</td></tr>
      <tr><td>Q24</td><td>B — The next meeting will be on Friday</td></tr>
      <tr><td>Q25</td><td>C — عید مبارک!</td></tr>
    </table>
  </details>
</div>

</div>

<script>
const ANSWERS_2={q1:'B',q2:'B',q3:'C',q4:'B',q5:'B',q6:'C',q7:'A',q8:'B',q9:'B',q10:'C',q11:'B',q12:'C',q13:'B',q14:'C',q15:'B',q16:'B',q17:'B',q18:'B',q19:'B',q20:'B',q21:'C',q22:'B',q23:'C',q24:'B',q25:'C'};
function submitExam2(){
  let score=0,total=Object.keys(ANSWERS_2).length;
  document.querySelectorAll('.opt-list li label').forEach(l=>l.classList.remove('correct','wrong'));
  Object.entries(ANSWERS_2).forEach(([qname,correct])=>{
    const selected=document.querySelector('input[name="'+qname+'"]:checked');
    document.querySelectorAll('input[name="'+qname+'"]').forEach(o=>{if(o.value===correct)o.parentElement.classList.add('correct');});
    if(selected){if(selected.value===correct)score++;else selected.parentElement.classList.add('wrong');}
  });
  const pct=Math.round((score/total)*100);
  const passed=score>=17;
  const rb=document.getElementById('result-box');
  rb.style.display='block';rb.style.borderColor=passed?'#16a34a':'#dc2626';
  document.getElementById('result-score').textContent=score+'/'+total;
  document.getElementById('result-score').style.color=passed?'#16a34a':'#dc2626';
  document.getElementById('result-msg').textContent=passed?'Passed! Strong B1/B2 competence demonstrated.':'Not yet — review Modules 5–7 and try again.';
  document.getElementById('result-pct').textContent=pct+'% (Pass: 68%)';
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
