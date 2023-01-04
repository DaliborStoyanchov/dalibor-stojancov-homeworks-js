// Homework #1

/*
const stringNMA = [];

stringNMA.push(prompt(String("Enter a name:")));
stringNMA.push(prompt(String("Enter a mood")));
stringNMA.push(prompt(String("Enter an activity")));

function tellStory(arrayNameMoodActivity) {
  return `This is '${arrayNameMoodActivity[0]}'.'${arrayNameMoodActivity[0]}' is a nice person. Today he is '${arrayNameMoodActivity[1]}'.
  He is '${arrayNameMoodActivity[2]}' all day. The end.`;
}

const finalStorry = tellStory(stringNMA);
console.log(finalStorry);
*/

// Homework #2

const numberArray = [1, "dac", 3, -150, 6, 165];

function validateNumber(number) {
  if (typeof number !== "number") {
    return false;
  }
  return true;
}

function sumOfArrayNumbers(arrayNumbers) {
  let sum = 0;
  for (let currentNumber of arrayNumbers) {
    if (!validateNumber(currentNumber)) {
      continue;
    }
    sum += currentNumber;
  }
  return sum;
}

const sumArr = sumOfArrayNumbers(numberArray);
console.log("The sum of the numbers in the array is:", sumArr);

// Homework #3

const arrayOfStrings = ["Hey", "Felicity", "how", "you", "doin", "?", 100];

function oneBigString(arrayStrings) {
  let arrayString = "";
  for (let currentString of arrayStrings) {
    if (currentString !== "string") {
      currentString = String(currentString);
    }
    arrayString = arrayString + " " + currentString;
  }
  return `Story: ${arrayString}`;
}

const storyBigString = oneBigString(arrayOfStrings);
console.log(storyBigString);

// Homework #4

let consLog = "";
for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    consLog += i + "\n";
  }
  if (i % 2 !== 0) {
    consLog += i + " ";
  }
}

console.log(consLog);

// Homework #5

const numbersArray = [1, 2, 3, 10, -150, "Felicity", 4, 155];

function sumOfMinMax(arrayNum) {
  let max = -Infinity;
  let min = +Infinity;

  for (let numb of arrayNum) {
    if (numb >= max) {
      max = numb;
    }
    if (numb <= min) {
      min = numb;
    }
  }
  return (sumOfTwoNumbers = max + min);
}

console.log(sumOfMinMax(numbersArray));

// Homework #6

const firsNames = ["Dragan", "Ana", "Jana", "Boris", "Borjan"];
const lastNames = ["Spasov", "Nikolov", "Jovanov", "Stojanov", "Hadjinikolovski"];

function fullNamesOfStudents(firstArray, secondArray) {
  let i = 0;
  let fullNames = [];
  while (i < firstArray.length) {
    fullNames.push(i + 1 + ". " + firstArray[i] + " " + secondArray[i]);
    i++;
  }
  return fullNames;
}

let fullNamesArray = fullNamesOfStudents(firsNames, lastNames);
console.log(fullNamesArray);
