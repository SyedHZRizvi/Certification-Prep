# ✏️ Module 1 Quiz: AI/ML Fundamentals

> **Instructions:** Answer all 24 questions WITHOUT looking at the reading.
> Then check your answers below. Aim for 20/24 minimum.

---

## Questions

### Q1. Which statement correctly describes the AI / ML / Deep Learning hierarchy? *(Understand)*
A. ML is a superset of AI
B. AI is a subset of ML
C. Deep Learning is a subset of Machine Learning, which is a subset of AI
D. Generative AI and Deep Learning are unrelated

---

### Q2. A team has 50,000 emails, each already labeled "spam" or "not spam," and wants to build a classifier. Which type of ML applies? *(Apply)*
A. Supervised learning
B. Unsupervised learning
C. Reinforcement learning
D. Generative AI

---

### Q3. A retailer wants to group customers into segments without predefined categories. Which approach fits BEST? *(Apply)*
A. Linear regression
B. Classification
C. Clustering (unsupervised)
D. Reinforcement learning

---

### Q4. AWS DeepRacer trains a 1/18-scale race car by trial, error, and reward signals. Which paradigm is this? *(Understand)*
A. Supervised learning
B. Unsupervised learning
C. Reinforcement learning
D. Self-supervised learning

---

### Q5. A model achieves 98% accuracy on training data but only 62% on the test set. The MOST likely problem is: *(Analyze)*
A. Underfitting
B. Overfitting
C. The test set is too small
D. Wrong loss function

---

### Q6. Which is a HYPERPARAMETER (not a parameter)? *(Remember)*
A. The weights of a neural network
B. The bias values inside a layer
C. The learning rate you set before training
D. The output prediction value

---

### Q7. "Inference" in ML means: *(Remember)*
A. Training the model
B. Using a trained model to make predictions on new data
C. Splitting data into train/validation/test
D. Tuning hyperparameters

---

### Q8. Which problem is BEST solved by regression rather than classification? *(Apply)*
A. Will this email arrive as spam? (yes/no)
B. Which of these 5 product categories does this image belong to?
C. What price will this house sell for next month?
D. Should we flag this transaction as fraud?

---

### Q9. A bank's fraud-detection model is 99.5% accurate. Investigation finds it labels EVERY transaction "not fraud." What metric reveals the problem? *(Analyze)*
A. Accuracy
B. Recall on the positive (fraud) class
C. Mean Squared Error
D. R-squared

---

### Q10. Which is NOT a typical split of a dataset for training? *(Remember)*
A. Training set
B. Validation set
C. Test set
D. Inference set

---

### Q11. One full pass through the entire training dataset is called: *(Remember)*
A. A batch
B. An epoch
C. An iteration
D. A gradient

---

### Q12. Which algorithm is typically the strongest choice on a tabular dataset and is a SageMaker built-in? *(Apply)*
A. K-Means
B. PCA
C. XGBoost
D. Stable Diffusion

---

### Q13. "Generative AI" is BEST described as: *(Understand)*
A. A type of supervised learning that classifies images
B. Any AI system that uses rules
C. A subset of deep learning that creates new content (text, images, audio, code)
D. A separate field from machine learning

---

### Q14. A model performs poorly on BOTH training AND test data. The most likely issue is: *(Analyze)*
A. Overfitting
B. Underfitting
C. Data leakage
D. Too many features

---

### Q15. Which of the following is an UNSUPERVISED learning task? *(Apply)*
A. Predicting house prices from past sales
B. Classifying tumors as malignant or benign from labeled scans
C. Detecting anomalies in network traffic with no labeled examples
D. Predicting which customer will churn next month

---

### Q16. Which technique is a common defense against OVERFITTING? *(Understand)*
A. Increase the model size
B. Train for many more epochs
C. Apply regularization (e.g. L2, dropout)
D. Remove the validation set

---

### Q17. A "label" in supervised learning is: *(Remember)*
A. The name of a column
B. The known correct answer the model is trying to predict
C. The model's prediction
D. The training algorithm

---

### Q18. RLHF (Reinforcement Learning from Human Feedback) is MOST commonly used to: *(Understand)*
A. Train a model on tabular sales data
B. Cluster customers
C. Align a large language model's outputs to human preferences
D. Compress images

---

### Q19. Which is a CORRECT description of bias and variance? *(Understand)*
A. High bias = the model overfits the data
B. High variance = the model underfits the data
C. High bias = the model is too simple (underfits); high variance = the model overfits
D. Bias and variance are unrelated to model performance

---

### Q20. A hospital has 10 years of unlabeled MRI scans and wants to train a system to flag unusual images automatically. The team has no time to label thousands of scans. The BEST initial approach is: *(Apply)*
A. Supervised classification
B. Unsupervised anomaly detection
C. Reinforcement learning
D. Generative AI text summarization

---

### Q21. Which scenario is the WORST fit for a machine learning solution? *(Evaluate)*
A. Recommending movies to users
B. Forecasting next month's electricity demand
C. Calculating an employee's tax withholding from a fixed formula
D. Detecting credit card fraud

---

### Q22. A learning rate that is TOO HIGH typically causes: *(Understand)*
A. Slow but steady convergence
B. The model to oscillate or diverge instead of converging
C. Perfect training every time
D. Lower memory usage

---

### Q23. The stage of an ML lifecycle that uses a trained model to score new live data is called: *(Understand)*
A. Training
B. Inference
C. Validation
D. Backpropagation

---

### Q24. Which statement is TRUE about deep learning vs classical ML? *(Evaluate)*
A. Deep learning is always the better choice
B. Deep learning typically wins on images, audio, and language; classical ML (e.g. XGBoost) often wins on tabular data
C. Deep learning cannot be used for generative AI
D. Classical ML cannot use neural networks at all

---

## 🎯 Answers + Explanations

### Q1: **C. Deep Learning is a subset of Machine Learning, which is a subset of AI**
AI ⊃ ML ⊃ Deep Learning ⊃ Generative AI. This Russian-doll relationship is high-frequency on the exam.

### Q2: **A. Supervised learning**
Labels are present ("spam" / "not spam"), so this is classic supervised classification.

### Q3: **C. Clustering (unsupervised)**
The give-away is "without predefined categories." No labels = unsupervised. Grouping = clustering.

### Q4: **C. Reinforcement learning**
Agent + environment + reward signal = RL. DeepRacer is AWS's flagship RL demo.

### Q5: **B. Overfitting**
The model memorized training data (98%) but doesn't generalize (62%). Classic overfitting symptom.

### Q6: **C. The learning rate you set before training**
*Hyperparameters* are set by humans before training. *Parameters* (weights, biases) are learned during training.

### Q7: **B. Using a trained model to make predictions on new data**
Training builds the model; inference uses it. Also called "prediction" or "scoring."

### Q8: **C. House price**
Price is a continuous number → regression. The others are categorical → classification.

### Q9: **B. Recall on the positive (fraud) class**
On imbalanced data, accuracy is meaningless. Recall = "of all actual fraud, how much did I catch?" Here it would be 0%.

### Q10: **D. Inference set**
There is no "inference set." The three standard splits are training, validation, and test.

### Q11: **B. An epoch**
Epoch = one complete pass through the training data. A *batch* is a slice processed at once.

### Q12: **C. XGBoost**
XGBoost is the gold standard for tabular data and is built into SageMaker. K-Means and PCA are unsupervised; Stable Diffusion is image generation.

### Q13: **C. A subset of deep learning that creates new content**
GenAI uses deep neural networks (often Transformers) to generate text, images, audio, video, or code.

### Q14: **B. Underfitting**
Poor on both sets → the model is too simple or under-trained. Fix: bigger model or more features.

### Q15: **C. Detecting anomalies in network traffic with no labeled examples**
No labels = unsupervised. The other three all have labeled targets.

### Q16: **C. Apply regularization (L2, dropout)**
Regularization penalizes complexity and combats overfitting. Increasing model size or training longer usually makes overfitting *worse*.

### Q17: **B. The known correct answer**
A label is the supervisory signal, the ground truth used to teach the model.

### Q18: **C. Align an LLM's outputs to human preferences**
RLHF is the standard alignment technique for chat LLMs (Claude, GPT, etc.), humans rank responses and the model learns the preference.

### Q19: **C. High bias = too simple (underfits); high variance = overfits**
Bias = oversimplification, variance = oversensitivity to specific training data. You want the sweet spot.

### Q20: **B. Unsupervised anomaly detection**
No labels available → start unsupervised. Anomaly detection flags unusual examples without training labels.

### Q21: **C. Calculating tax withholding from a fixed formula**
That's deterministic math, ML is the wrong tool when the rule is exact and known.

### Q22: **B. The model oscillates or diverges**
A too-high learning rate causes big jumps that overshoot the minimum. Too low = painfully slow.

### Q23: **B. Inference**
Inference is the runtime prediction step using a trained model.

### Q24: **B. Deep learning wins on unstructured (images/audio/text); XGBoost often wins on tabular**
A nuance the exam loves: "always use deep learning" is the trap answer.

---

## 📊 Score Yourself

- 23–24/24 → 🏆 You own Module 1. On to SageMaker.
- 20–22/24 → ✅ Solid. Note your wrong ones and move on.
- 17–19/24 → ⚠️ Re-read the failure-mode and metrics sections, then retake tomorrow.
- <17 → 🔁 Re-read the whole module before continuing.

---

## 🃏 Add To Your Flashcards

- The AI ⊃ ML ⊃ DL ⊃ GenAI hierarchy
- 3 ML paradigms (supervised / unsupervised / reinforcement) with examples
- Overfitting vs underfitting (training-vs-test pattern)
- Parameter vs hyperparameter
- Why accuracy lies on imbalanced data (use recall / F1)
- Training vs inference

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 2: ML Workflow on SageMaker](../Module-02-ML-Workflow-SageMaker/Reading.md)
