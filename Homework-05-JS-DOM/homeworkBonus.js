/*
BONUS HOMEWORK

Create a recipe page from inputs

    Ask the user for the name of the recipe
    Ask the user how many ingredients do we need for the recipe
    Ask the user for the name of every ingredient
    Print the name of the recipe in the HTML as heading element, ex: h1-h6
    Print all ingredients as an unordered list in the HTML
    Extra: Use a table if you want to be fancy :)
*/


let recepyNameInput = prompt("Enter the name of the recipe:").toUpperCase();
do {
  var numOfIngredientsInput = parseInt(
    window.prompt("Please enter a number from 2 to 10")
  );
} while (
  isNaN(numOfIngredientsInput) ||
  numOfIngredientsInput > 10 ||
  numOfIngredientsInput < 2
);
let ingredientsArray = prompt(`Enter your ${numOfIngredientsInput} ingredients separated by a tilde ~`).split("~");
if (ingredientsArray.length !== numOfIngredientsInput) {
  console.log("ingredientsArray: ", ingredientsArray)
  alert("Wrong number of ingredients. Please enter the correct nubmer of ingredients!");
}

let recepieDiv = document.getElementById("table");
let headerDiv = document.getElementById("header");

headerDiv.innerHTML += `<h1>${recepyNameInput}</h1>`;

function createTable(ingredient, element) {
  
  element.innerHTML += "<table>";
  for (let i = 0; i < ingredient.length; i++) {
    element.children[0].innerHTML += `<tr><td>${ingredient[i]}</td></tr>`;
  }
  element.innerHTML += "</table>";
}

createTable(ingredientsArray, recepieDiv);
