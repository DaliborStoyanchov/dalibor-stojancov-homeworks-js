/*
HOMEWORK PART 1
Change the page with JavaScript

Change the text of all paragraphs and headers with javascript
Note:The html must not be changed
*/

let firstDiv = document.getElementById("first");
let firstH1 = firstDiv.firstElementChild;
let firstParagraph = firstDiv.children[1];
let secondDiv = document.getElementsByClassName("anotherDiv");
let secondParagraph = document.getElementsByClassName("second")[0];
let textSecDiv = document.getElementsByTagName("text")[0];
let lastHeader1 = document.querySelectorAll("h1")[1];
let lastHeader3 = document.querySelectorAll("h3")[0];

firstH1.innerText = "";
firstH1.innerText += "Changed text with innerText on the first h1";

firstParagraph.innerText = "";
firstParagraph.innerText += "Changed text on the first paragraph";

secondParagraph.innerText = "";
secondParagraph.innerText += "Changed text on the second paragraph";

textSecDiv.innerText = "";
textSecDiv.innerText += "Changed text on the text tag";

lastHeader1.innerText = "";
lastHeader1.innerText += "Changed text on the last header1";

lastHeader3.innerText = "";
lastHeader3.innerText += "Changed text on the last header3";
