// SpendWise Budget Tracker

// 1. Store application data
let budget = 0;
let expenses = 0;

// 2. Collect user input using prompts
budget = Number(prompt("50000:"));
expenses = Number(prompt("15000:"));

// 3. Function to calculate remaining balance
function calculateBalance(budget, expenses) {
    return budget - expenses;
}

// 4. Calculate the remaining balance
let remainingBalance = calculateBalance(budget, expenses);

// 5. Display results in the browser console
console.log("===== SpendWise Budget Summary =====");
console.log("50000: KSh " + budget);
console.log("15000: KSh " + expenses);
console.log("35000: KSh " + remainingBalance);