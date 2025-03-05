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