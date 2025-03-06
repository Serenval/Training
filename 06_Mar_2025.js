/**
 * Introduction to the DOM
 */

// To manipulate HTML elements with JavaScript, you first need to select them from the DOM tree
let mainParagraph = document.getElementById("main-paragraph");
console.log(mainParagraph);

// Get value of the node
console.log(mainParagraph.innerHTML);

// Select a colection of element that have specific class

let elementsWithClass = document.getElementsByClassName("my-class");
console.log(elementsWithClass); // Prints array with selected classes
console.log(elementsWithClass[0]);

// Selects a collection (HTMLCollection) of elements with the specified HTML tag name

let paragraphElements = document.getElementsByTagName("p");
console.log(paragraphElements);

// Selects the first element that matches a specified CSS selector 
// (like CSS selectors used in stylesheets - e.g., IDs, classes, tag names, combinations). 
// Returns a single element (the first match) or null if no match is found.

let firstParagraph = document.querySelector("#main-paragraph");
let firstLink = document.querySelector('a');
let firstElementWithClass = document.querySelector('.my-class');
let elementInParagraph = document.querySelector('p strong.highlight');

console.log(firstParagraph);
console.log(firstLink);
console.log(firstElementWithClass);
console.log(elementInParagraph);