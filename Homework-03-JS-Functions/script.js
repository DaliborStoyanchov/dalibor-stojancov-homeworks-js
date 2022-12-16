// Homework 3 Part 1: Write a JavaScript function which accepts a parameter and returns its type and prints it in the console.
// Try to call the functions 5 times for 5 different types: object; boolean; number; string; undefined;

console.log("Input data types Homework:");

function dataType(dataEntry) {
  const result = typeof dataEntry;
  console.log("The type of the data entry is:", result);
  return result;
}

dataType();
dataType(156);
dataType("Dalibor");
dataType(true);
dataType(null);

console.log("==========================================================");

// Homework 3 Part 2: Write a JavaScript function that will return: Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years;
// Note: Call the function in console to see answer; Bonus: Make the same function work for converting dog to human years as well;

console.log("Dog to human years / Human to dog years Homework:");
function convertDogHumanYears(years, dogOrHuman) {
  if (Number.isNaN(years)) {
    return "Bad Input";
  }
  if (dogOrHuman !== "d2h" && dogOrHuman !== "h2d") {
    return "Bad Input";
  }
  if (dogOrHuman === "d2h") {
    const result = 7 * years;
    return result;
  }
  if (dogOrHuman === "h2d") {
    const result = years / 7;
    return result;
  }
}

const yearsInput = Number(prompt("Please enter a number of years:"));
const dogOrHumanInput = prompt("Please enter 'd2h' or 'h2d'").toLowerCase();

const convertedDogHumanYears = convertDogHumanYears(
  yearsInput,
  dogOrHumanInput
);
console.log("The converted years are:", convertedDogHumanYears);

console.log("==========================================================");

// Homework 3 Part 3: Write a javascript function for an ATM: The ATM should give cash; Should return "Not enough money" if you request more money;
// Should return the amount withdrawn and money left on the account if you have enough; Note: Hardcode your account money in the program;
// Bonus: Make it work with prompt()!

console.log("ATM Homework:");

const amountOfMoney = 763;

function atm(money) {
  if (Number.isNaN(money) || typeof money !== "number") {
    return "Bad Input: Enter a number!";
  }
  if (money > amountOfMoney) {
    return "Not enough money!";
  }
  if (money < 0) {
    return "Error Imput";
  }
  if (money <= amountOfMoney) {
    let withdrownMoney = money;
    console.log("Withdrown Money:", withdrownMoney);
    let restOfMoney = 763 - money;
    console.log("Money left:", restOfMoney);
    return withdrownMoney;
  }
}

const moneyInput = Number(
  prompt("Please enter the amount of money that you want to withdraw:")
);

const transactionResult = atm(moneyInput);
console.log("Transaction:", transactionResult);
