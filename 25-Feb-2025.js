/*
* Continue working with objects
*/

const Person1 = {
    name: "Alice",
    job: "Repair Woman",
};

const Perons2 = {
    name: "Peter",
    job: "Candy Maker",
};

function printName(){
    console.log(`Hello, ${this.name}`);
};

Person1.printName = printName;
Perons2.printName = printName;

Person1.printName();
Perons2.printName();


//Accessors
const Person3 = {
    name: "Bob",
    job: "NA",
    get profession(){
        return this.job;
    },
    set profession(job){
        this.job = job;
    }
}

Person3.profession = "Driver";
console.log(Person3.profession);


// Exploring prototype
function car (model){
    this.model = model;
}
console.log(car.prototype);

car.prototype.price = function(){
    return this.model.length * 2;
}

let honda = new car("Honda");
let cadilac = new car("Cadilac");

console.log(honda.price());
console.log(cadilac.price());

/*
* Serialization in JavaScript
*/

// Serialize honda object into string
let jsonString = JSON.stringify(honda);
console.log(jsonString);

console.log(honda.toString());
/*
* Deserialization in JavaScript
*/

let parsedObject = JSON.parse(jsonString);
console.log(typeof(parsedObject));
