/**
 * Working with Classes
 */

// Class which tells how old is the object

class howOld {
  constructor(birthYear) {
    this.year = birthYear;
  }
  age() {
    let currentDate = new Date();
    return currentDate.getFullYear() - this.year;
  }

}

let myCar = new howOld(2000);
console.log(`My car is ${myCar.age()}-years-old`);

/**
 * Inheritence
 */

class Car {
  constructor(name) {
    this.brand = name;
  }

  present() {
    return "The car brand is " + this.brand;
  }
}

// The super() method refers to the parent class.

// By calling the super() method in the constructor method, we call the parent's 
// constructor method and gets access to the parent's properties and methods.

class Model extends Car {
  constructor(brand, model) {
    super(brand);
    this.model = model;
  }
  show() {
    return this.present() + ", model: " + this.model;
  }
}

let yourCar = new Model("Ford", "Mustang");
console.log(yourCar.show());

//You can use the underscore character to separate the getter/setter from the actual property

class Flower {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }

  set name(str) {
    this._name = str;
  }
}

const newFlower = new Flower("Pupies");
console.log(newFlower.name);