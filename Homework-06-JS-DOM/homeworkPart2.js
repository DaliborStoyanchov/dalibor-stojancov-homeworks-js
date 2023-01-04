/*
HOMEWORK PART 2
Create an array with nubmers. 
Print all nubmers from the array in a list element, in a new HTML page.
Print out the sum of all of the numbers below the list.
BONUS: Try printing the whole mathematical equasion as well (2+4+5=11).
*/

const nubmersArray = [2, 5, 3, 22];
let divNumberList = document.getElementById("number");
let divResult = document.getElementById("result");

function printNubmers(nubmersArr, element) {
  let result = 0;
  divNumberList.innerHTML += "<ul>";
  for (let i = 0; i < nubmersArr.length; i++) {
    element.children[0].innerHTML += `<li>${nubmersArr[i]}</li>`;
    result += nubmersArr[i];
  }
  divNumberList.innerHTML += "</ul>";
  divResult.innerHTML = `<p>The result is: ${nubmersArr[0]}+${nubmersArr[1]}+${nubmersArr[2]}+${nubmersArr[3]}=${result}</p>`;
}

printNubmers(nubmersArray, divNumberList);
