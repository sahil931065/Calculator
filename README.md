
A simple, responsive **multi-page calculator web application** built using **HTML, CSS, and JavaScript**.  
This project includes three commonly used calculators and shares a single JavaScript file across multiple pages with safe DOM handling.

---

## ✨ Features

### 🔹 Simple Interest Calculator
**Inputs**
- Principal Amount
- Rate of Interest
- Time (Years)

**Formula**
```
Simple Interest = (P × R × T) / 100
Total Amount = Principal + Interest
```

---

### 🔹 BMI (Body Mass Index) Calculator
**Inputs**
- Body Weight (kg)
- Height (cm)

**Formula**
```
BMI = Weight / (Height in meters)²
```

**BMI Categories**
- ≤ 18.5 → Underweight
- 18.5 – 24.9 → Fit
- 25 – 29.9 → Overweight
- ≥ 30 → Extreme Overweight

---

### 🔹 Daily Calorie Calculator (TDEE)
Uses the **Mifflin–St Jeor Equation**.

**Inputs**
- Age
- Gender (radio buttons)
- Weight (kg)
- Height (cm)
- Activity Level (dropdown)

**BMR Formula**
- **Male**
```
BMR = 10W + 6.25H − 5A + 5
```
- **Female**
```
BMR = 10W + 6.25H − 5A − 161
```

**Daily Calories**
```
Calories = BMR × Activity Multiplier
```

---

## 🧠 Technical Highlights
- One shared `script.js` for all pages
- Defensive DOM checks to avoid null errors
- Clean `querySelector` usage
- Input validation with user feedback
- CSS pulse animation on buttons
- Fully responsive design

---

## 📁 Project Structure

```
project-root/
│
├── main.html
├── SIC.html
├── BMI.html
├── Calorie.html
│
├── style.css
├── resposive.css
├── script.js
│
└── README.md
```

---

## 🚀 How to Run
1. Download or clone the project
2. Open `main.html` in your browser
3. Select a calculator and start using it

No backend. No setup. Pure frontend.

---

## 🛠️ Technologies Used
- HTML5
- CSS3
- JavaScript (Vanilla)

---

## 📌 Notes
- Gender selection uses radio buttons (correct UX)
- Activity level uses a select dropdown
- Shared JavaScript safely handles multiple pages

---

## 👨‍💻 Author
Created as a learning project to practice:
- DOM manipulation
- Form validation
- Shared JS architecture
- Real-world calculation logic
