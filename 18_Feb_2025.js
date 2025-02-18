/*
 * Object literals
*/

let cars = {sold: {1: "Jeep", 2: "Mazda"}, lend: {1: "Saab"}}; // Nested object inside another
console.log(cars.sold[2]);

//Property names that are not valid identifiers cannot be accessed as a dot (.) property.

const unusualPropertyNames = {
    '': 'An empty string',
    '!': 'Bang!'
  }
// console.log(unusualPropertyNames.'');   // SyntaxError: Unexpected string
// console.log(unusualPropertyNames.!);    // SyntaxError: Unexpected token !

//Instead, they must be accessed with the bracket notation ([]).
console.log(unusualPropertyNames[""]); // An empty string
console.log(unusualPropertyNames["!"]); // Bang!



/*
* Working with Strings building
*/


// Basic literal string creation
`In JavaScript '\n' is a line-feed.`;

// Multiline strings
`In JavaScript, template strings can run
 over multiple lines, but double and single
 quoted strings cannot.`;

// String interpolation
const firstN = 'Lev', time = 'today';
`Hello ${firstN}, how are you ${time}?`
