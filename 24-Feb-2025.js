/*
* Working with objects
*/

// Simple Object with String and Number Properties

let person = {
    name: "Alice",
    age: 30
};

console.log(person);

let book = {
    title: "JavaScript Book",
    author: {
        name: "John",
        surname: "Ali"
    }
};

console.log(book);


//Object with Functions as Properties (Methods):
let calculator = {
    add: function(a, b){
        return a + b;
    },
    subtract: function(a, b){
        return a - b;
    }
}

let sum = calculator.add(10, 2);
console.log(sum);

//Deleting Properties

delete book.author.surname;
console.log(book);

// Adding a Method to an Object

person.printName = function(){
    return this.name.toUpperCase();
};
console.log(person.printName());

//Object Constructor Functions

function Adult(name, age){
    this.name = name;
    this.age = age;
}

let sister = new Adult("Loa", 54);
console.log(sister);

sister.printName = function(){
    return this.name.toUpperCase();
}

console.log(sister.printName());