/*
* Object and array Initializers
*/

let rectangle = { left: {x: 1, y: 2},
                  right: {x: 2, y:3} };

// Creating an Array

const items = ["item1", "item2", "item3"];

//Adding elements with high indexes can create undefined "holes" in an array:
items[3] = "item4";

console.log(items[3]);

console.log(items.length);
console.log(items[items.length - 1]);

items.push("item5"); // push to the end
console.log(items[items.length - 1]);

items.pop() // removes last element
console.log(items[items.length - 1]);

items.unshift("item0") // inserts an element at the start
console.log(items);

let firstElement = items.shift() // removes first element from array
// and returns the removed value to the identifier 
console.log(items);
console.log(firstElement);

//Changes the original array by removing or replacing existing elements and/or adding new elements in place
console.log(items.splice(2,1));

// Returns index of searched element, if there's no match returns -1
items.push("item2", "item3", "item4");
console.log(items.indexOf("item3"));
console.log(items);

// Transforming Arrays
// map(callbackFunction): Creates a new array by calling the provided callbackFunction on every 
// element in the original array. The callbackFunction should return the transformed value for each element.

let modifiedItems = items.map(item => item.toUpperCase());
console.log(modifiedItems);

// forEach(callbackFunction): Executes a provided callbackFunction once for each array element. 
// Unlike map(), forEach() does not create a new array; it's used for performing actions on 
// each element (like logging, updating external variables, etc.). It returns undefined

items.forEach(function(item, index){
    console.log(`${item} at index: ${index}`);
})