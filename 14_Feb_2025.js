/* 
* Basic Arithmetic Operators 
*/

let sum = 5 + 3;
console.log(sum);

let combinedString = 'Hello' +'' + 'World';
console.log(combinedString);

let difference = 10 - 4;
console.log(difference);

let product = 5 * 3;
console.log(product);

let quotient = 27 / 9;
console.log(quotient);

//Modulus Operator
let remainder = 10 % 4;
console.log(remainder);

let evenOrOdd = 16 % 2;
console.log(evenOrOdd) // Output: 0 (divisible by 2)

let oddNumberCheck = 17 % 2;
console.log(oddNumberCheck); // Output: 1 (not divisible by 2)

// Exponential Operator
let power = 2 ** 3; // 2 to power of 3 (2 * 2 * 2)
console.log(power);

let square = 5 ** 2; // 5 * 5
console.log(square);

// Increment and Decrement Operators
let count = 5;
count++; // Postfix increment operator - increments after returning the current value
console.log(count) // Output: 6

let num = 10;
let prefixIncrement = ++num; // Prefix increment - increments before returning the value
console.log(prefixIncrement); // Output: 11
console.log(num); //Output: 11 Why? ++num creates a new number (11) and reassigns num to store the new value.

//Operator Precedence:

let result1 = 5 + 3 * 2; // Multiplication is done before addition (3 * 2 = 6, then 5 + 6 = 11)
console.log(result1); // Output: 11

let result2 = (5 + 3) * 2; // Parentheses are used to override the precedence of operators
console.log(result2);  // Output: 16

/* 
* Complex Mathematical Operations
*/

// Math.pow(base, exponent): Raises base to the power of exponent. Similar to the ** operator.

let power1 = Math.pow(2, 3); // 2 to the power of 3
console.log(power1) // Output: 8

//Math.sqrt(number): Returns the square root of a number.
let squareRoot = Math.sqrt(25);
console.log(squareRoot); //Output: 5

// Math.cbrt(number): Returns the cube root of a number.

let cubeRoot = Math.cbrt(27); 
console.log(cubeRoot) // Output: 3

//Math.abs(number): Returns the absolute value of a number (always positive).

let abs = Math.abs(-50);
console.log(abs); //Output: 50

// Rounding Functions
let rounded1 = Math.round(5.6); // Rounds up to 6
console.log(rounded1)

let rounded2 = Math.round(4.4) // Rounds down to 4
console.log(rounded2)

// Math.ceil(number): Rounds up to the nearest integer (ceiling).

let ceiling1 = Math.ceil(4.2); // Rounds up to 5
console.log(ceiling1)

let ceiling2 = Math.ceil(4.9); // Rounds up  to 5
console.log(ceiling2)

// Math.floor(number): Rounds down to the nearest integer (floor).

let floor1 = Math.floor(3.8); // Rounds down to 3
console.log(floor1)

let floor2 = Math.floor(2.1); // Rounds down to 2
console.log(floor2);

// math.trunc(number): Returns the integer part of a number (without decimals).

let trunc = Math.trunc(4.5); // Removes decimal part, result is 4
console.log(trunc)

//Math.min(...numbers): Returns the lowest value in an array of numbers.
let minimum  = Math.min(10,20,30,5); //returns 5
console.log(minimum)
//Math.max(...numbers): Returns the highest value in an array of numbers.
let maximum = Math.max(40,60,70,80); // returns 80
console.log(maximum)

//Math.random(): Returns a pseudo-random floating-point number in the range [0, 1) (inclusive of 0, but not 1).

let random = Math.random();
console.log(random); // returns a random number between 0 (inclusive) and 1 (exclusive)

let random1 = Math.floor(Math.random() * 5 + 1); //returns a random number between 1 (inclusive) and 6 (exclusive).
console.log(random1);

/* 
* Dates and Times
*/

let then = new Date('2015-03-25');
let now = new Date();
console.log(then);
console.log(now);

console.log(then.getFullYear());
























