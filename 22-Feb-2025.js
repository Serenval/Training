/*
* Loops statements
*/

//While statement
let count = 0;
while (count < 10) {
    console.log(count);
    count++;
}

//for statement
for(let i = 0; i < 5; i++){
    console.log(`${i} from for`);
}

// do statement
let d = 0;
do{
    d += 1;
    console.log(`from do - ${d}`);
} while (d < 5);

// for...in statement
// It iterates over the enumerable properties of an object. 
// By default, properties you define on objects are enumerable

let persons = {
    Alice: 30,
    Bob: 34,
    Alex: 54
};
for(let person in persons) {
    console.log(`Property - ${person}, value - ${persons[person]} `);
}

// for...of statement
//designed to iterate over iterable objects. 
// Iterable objects are things that can be iterated over, like:
// Arrays
// Strings
// Maps
// Sets
// NodeLists (from DOM in browsers)
// Generators

let numbers = [1, 2, 3, 4];
for(let number of numbers){
    console.log(number);
}

let msg = "hello";
for(let char of msg){
    console.log(char);
}

//Loop Control Statements: break and continue
// break: Immediately terminates the loop and 
// transfers control to the statement immediately following the loop.

for( let x = 0; x < 10; x++){
    if(x === 3){
        break;
    }
    console.log(x);
}
console.log("Loop terminated");

// continue: Skips the rest of the current iteration 
// and proceeds to the next iteration of the loop.

for(let y = 0; y < 10; y++){
    if(y == 4){
        continue; //skiping printing 4, continue with next iteration
    }
    console.log(y);
}