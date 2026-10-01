# SpendWise Budget Tracker

## Project Description

SpendWise is a simple budget tracking application designed to help users manage their budget and expenses. The JavaScript foundation allows the application to collect budgeting information, perform calculations, and display the results in the browser console.

## JavaScript Concepts Implemented

This project demonstrates several JavaScript concepts covered this week, including:

* Variables
* Data types
* User input
* Number conversion
* Arithmetic calculations
* Functions
* Function parameters
* Return values
* Console output

## Variables

The application uses variables to store important budgeting information.

For example:

```javascript
let budget = 0;
let expenses = 0;
```

The `budget` variable stores the user's total budget, while the `expenses` variable stores the user's total expenses.

## User Input

The application collects information from the user using JavaScript `prompt()`.

```javascript
budget = Number(prompt("Enter your total budget:"));
expenses = Number(prompt("Enter your total expenses:"));
```

The `Number()` function converts the user's input from text into numbers so that calculations can be performed.

## Budget Calculations

SpendWise calculates the remaining balance by subtracting expenses from the total budget.

```javascript
let remainingBalance = calculateBalance(budget, expenses);
```

The calculation is performed using:

```javascript
return budget - expenses;
```

## Functions

A reusable function called `calculateBalance()` is used to organize the budget calculation.

```javascript
function calculateBalance(budget, expenses) {
    return budget - expenses;
}
```

The function accepts the budget and expenses as parameters and returns the remaining balance.

## Displaying Results

The calculated information is displayed in the browser console using `console.log()`.

The console displays:

* Total Budget
* Total Expenses
* Remaining Balance

## How to Run the Project

1. Open the project folder in VS Code.
2. Open `index.html` in a browser.
3. Enter your budget when prompted.
4. Enter your expenses when prompted.
5. Open the browser Developer Tools.
6. Select the **Console** tab.
7. View the SpendWise budget summary.
