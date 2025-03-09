/**
 * Changing Text Content in DOM
 */

let paragraph = document.getElementById("main-paragraph");
console.log(paragraph.textContent);
paragraph.textContent = "New Text";

// element.innerText: Similar to textContent, but slightly different in how 
// it handles whitespace and rendering. In most common cases, 
// textContent is preferred for its more consistent behavior across browsers.

let heading = document.querySelector("h1");
console.log(heading.innerText);
heading.innerText = "New Chapter";


// Manipulating Attributes

let link = document.querySelector("a");
let hrefValue = link.getAttribute('href');
console.log(hrefValue);

// Setting Atribute
link.setAttribute('href', 'newlink.com');
link.setAttribute('target', '_blank');

// Removing Attributes
link.removeAttribute('target');

// Manipulating Styles

paragraph.style.color = 'blue';
paragraph.style.fontSize = '19px';
paragraph.style.backgroundColor = 'orange';

// element.classList property (CSS Classes): Provides methods to manipulate 
// the CSS classes of an element. This is generally preferred over 
// direct inline styling for applying styles defined in CSS stylesheets.

link.classList.add('highlight', 'important');


// Creating New Elements
let newParagraph = document.createElement('p');
newParagraph.textContent = "This is a new paragraph";
newParagraph.classList.add('highlight');

// add the text node to the newly created paragraph
paragraph.appendChild(newParagraph);

