let userInput = prompt("Enter the year of birth:");
let userInputNumbered = parseInt(userInput);

if (
  Number.isNaN(userInputNumbered) ||
  userInputNumbered < 1900 ||
  userInputNumbered > 2022
) {
  console.log("Bad input!");
} else if ((userInputNumbered - 4) % 12 === 0) {
  console.log("Your year of birth is:", userInputNumbered);
  console.log("Your Chinese zodiac sign is: Rat");
} else if ((userInputNumbered - 4) % 12 === 1) {
  console.log("Your year of birth is:", userInputNumbered);
  console.log("Your Chinese zodiac sign is: Ox");
} else if ((userInputNumbered - 4) % 12 === 2) {
  console.log("Your year of birth is:", userInputNumbered);
  console.log("Your Chinese zodiac sign is: Tiger");
} else if ((userInputNumbered - 4) % 12 === 3) {
  console.log("Your year of birth is:", userInputNumbered);
  console.log("Your Chinese zodiac sign is: Rabbit");
} else if ((userInputNumbered - 4) % 12 === 4) {
  console.log("Your year of birth is:", userInputNumbered);
  console.log("Your Chinese zodiac sign is: Dragon");
} else if ((userInputNumbered - 4) % 12 === 5) {
  console.log("Your year of birth is:", userInputNumbered);
  console.log("Your Chinese zodiac sign is: Snake");
} else if ((userInputNumbered - 4) % 12 === 6) {
  console.log("Your year of birth is:", userInputNumbered);
  console.log("Your Chinese zodiac sign is: Horse");
} else if ((userInputNumbered - 4) % 12 === 7) {
  console.log("Your year of birth is:", userInputNumbered);
  console.log("Your Chinese zodiac sign is: Goat");
} else if ((userInputNumbered - 4) % 12 === 8) {
  console.log("Your year of birth is:", userInputNumbered);
  console.log("Your Chinese zodiac sign is: Monkey");
} else if ((userInputNumbered - 4) % 12 === 9) {
  console.log("Your year of birth is:", userInputNumbered);
  console.log("Your Chinese zodiac sign is: Rooster");
} else if ((userInputNumbered - 4) % 12 === 10) {
  console.log("Your year of birth is:", userInputNumbered);
  console.log("Your Chinese zodiac sign is: Dog");
} else if ((userInputNumbered - 4) % 12 === 11) {
  console.log("Your year of birth is:", userInputNumbered);
  console.log("Your Chinese zodiac sign is: Pig");
}
