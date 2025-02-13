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

// Primitive data types: numbers
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

// Primitive data types: strings

