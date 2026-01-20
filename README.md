# Loan Calculator Web App

A simple **Loan EMI Calculator** built using **HTML, CSS, and JavaScript**. The app allows users to enter loan details and instantly calculates EMI, total payable amount, and total interest.

---

## 📌 Features

* User-friendly loan calculator UI
* Calculates:

  * Monthly Interest Rate
  * Total Number of Months
  * Monthly EMI
  * Total Amount Payable
  * Total Interest Payable
* Uses standard bank EMI formula
* Responsive layout using Flexbox

---

## 🛠️ Technologies Used

* **HTML** – Structure of the calculator
* **CSS** – Styling and layout
* **JavaScript** – EMI calculation logic and DOM manipulation

---

## 📂 Project Structure

```
project-folder/
│
├── index.html      # Main HTML file
├── styles.css      # Styling file
└── script.js       # JavaScript logic
```

---

## 🧮 EMI Formula Used

### Monthly Interest Rate

[
R = \frac{A}{12 \times 100}
]

### Total Number of Months

[
N = T \times 12
]

### EMI Calculation

[
EMI = \frac{P \times R \times (1+R)^N}{(1+R)^N - 1}
]

Where:

* **P** = Loan Amount
* **A** = Annual Interest Rate
* **T** = Loan Tenure (Years)

---

## ▶️ How to Use

1. Open `index.html` in a browser
2. Enter:

   * Loan Amount
   * Annual Interest Rate
   * Loan Tenure (in years)
3. Click **CALCULATE**
4. View results on the right side

---

## ⚙️ JavaScript Logic Overview

* Fetches user input values using `querySelector`
* Converts interest rate to monthly rate
* Calculates EMI using `Math.pow()`
* Displays results using `.value`
* Handles invalid input using `isNaN()` validation

---

## ✅ Validation

* Alerts user if any input is empty or invalid
* Prevents calculation with incorrect values

---

## 📌 Notes

* Interest rate is assumed to be **annual**
* EMI is calculated using **compound interest (bank standard)**
* Output values are rounded to 2 decimal places

---

## 🚀 Future Improvements

* Add currency symbol (₹)
* EMI breakdown table (month-wise)
* Chart visualization
* Reset button

---

## 👨‍💻 Author

Created for learning and demonstration of **basic front-end development & EMI calculation logic**.
