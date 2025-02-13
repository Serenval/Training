// Comments
// This is a single line comment

/* This is a different comment */

/* 
 *
 * This is a comment with multiply lines
 * 
 */

/*
 *
 * Variable declaration
 *
 */

/*
 *
 * The 'var' keyword was used in all JavaScript code from 1995 to 2015
 * The 'let' and 'const' keywords were introduced in 2015
 * A note on the 'var' keyword, it should be only used in a code written for older browsers.
 * 
 */

// An Example of Variable Declaration of block-scoped variables
{
    let b = "Hello World";
    console.log(b); // it will print the value
}
// console.log(b); // it will be count as out of block-scope, it won't work

// An Example of Variable Declaration of function-scoped variables
{
    var c = "Hello function-scope";
    console.log(c); // it will print the value
}
console.log(c); /* it will work as 'var' escapes the block and is available even outside. 
                * That's why modern JavaScript prefers let and const-to avoid unexpected behavior
                */


/*
 * JavaScript Data Types
*/

/*
  * Primitive Data Types (Simple Data Types):
*/

// numbers
let age = 30; // Integer
let price = 99.99; // Floating-point
let largeNumber = 123e5; // Exponential notation (12300000)
let infitinity = Infinity; // Special number value representing infinity
let negativeInfinity = -Infinity; // Special number value representing negative infinity
let notANumber = NaN; // Special number value representing Not-A-Number

console.log(typeof age);
console.log(typeof price);
console.log(typeof largeNumber);
console.log(typeof infitinity);
console.log(typeof negativeInfinity);
console.log(typeof notANumber);

// strings
let firstName = "John"; // Double quotes
let lastName = 'Doe'; // Single quotes
let fullName = `John Doe` // Backticks

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof fullName);

// Boolean
let isAdult = true;
let isChild = false;

console.log(typeof isAdult);
console.log(typeof isChild);

// Null - represents intentional absence of any object value

let person = null; // person is absent  

console.log(typeof person); // Output 'object'

// Undefined - represents a variable that has been declared but not assigned a value
// let age;
// console.log(typeof age);


// Symbol (ES6 - ECMAScript 2015)
let uniqueID = Symbol("description"); // Create a symbol with an optional description
let anotherID = Symbol("description");

console.log(uniqueID === anotherID); // Output: false (Symbols are always unique)
console.log(typeof uniqueID);        // Output: "symbol"

// BigInt (ES2020 - ECMAScript 2020): a new primitive data type that can be used to store large integers

let veryLargeInteger = 100000000000008n; // 'n' at the end makes it a BigInt literal
let anotherLargeInt = BigInt(9007199254740992); // Using the BigInt constructor

console.log(typeof veryLargeInteger);  // Output: "bigint"
console.log(veryLargeInteger + 1n);   // You can perform operations with other BigInts
// console.log(veryLargeInteger + 1); // Error: Cannot mix BigInt and other types

/*
* Object Data Type
* 
*/

//Object
let personObject = {
  name: "John",
  age: 30,
  isStudent: false
};
console.log(typeof personObject); // Output: "object"

//arrays
let numberArray = [1, 2, 3];
console.log(typeof numberArray); // Output: "object"
console.log(Array.isArray(numberArray));   // Output: true


//Functions
function sayHello(){
  console.log("Hello");
}
console.log(typeof sayHello); // Output: "function"

/*
 *Dynamic Typing in JavaScript 
 * 
*/

let dynamicNumber = 4;
console.log(typeof dynamicNumber); // Output: "number"
dynamicNumber = "Hello";
console.log(typeof dynamicNumber);   // Output: "string"
dynamicNumber = true;
console.log(typeof dynamicNumber);   // Output: "boolean"







/*
 * Basic operations
 * 
 */

// imutable primitives:
let agePrimitive = 30;
console.log(agePrimitive.toExponential()); // it won't change the primitive
console.log(agePrimitive);  // Output: 30

// to change the primitive, you need to assign a new value to it:
let agePrimitive2 = 25;
agePrimitive2 += 1; // this is an example of a compound assignment operator
console.log(agePrimitive2);   // Output: 26










