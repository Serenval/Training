/**
 * Classes
 */

// Declaring a class

class NiceClass {
  // Class Body
}

class ClassExploration {
  constructor() {
    // constructor body
  }
  // Instance field
  myField = "Interesting Value";
  // Instance method
  myMethod() {
    // Method body
    console.log("Getting method to work");
  };
  // Static field
  static myStaticField = "Nice Value";
  // Static method
  static myStaticMethod() {
    // Static Method body
  }

  // Static block
  static {
    // static initialization code
  }

}

// Constructing a class

const myInstance = new ClassExploration();
console.log(myInstance.myField);
myInstance.myMethod();

// Construction of constructor
class Color {
  constructor(r, g, b) {
    // Assign the RGB values as a property of this
    this.values = [r, g, b];
  }
}

const red = new Color(255, 0, 0);
console.log(red);

class variadicColor {
  constructor(...values) {
    this.values = values;
  }
}

const redVariadic = new variadicColor(255, 0, 0);
console.log(red);

// Each time you call "new" the new instance is created

const redVariadic2 = new variadicColor(255, 0, 0);
console.log(redVariadic === redVariadic2);

class ColorWithMethods {
  constructor(...values) {
    this.values = values;
  }
  getRed() {
    return this.values[0];
  }
  setRed(value) {
    this.values[0] = value;
  }
}

const specialColorClass = new ColorWithMethods(255, 0, 0);
console.log(specialColorClass.getRed());

specialColorClass.setRed(4);
console.log(specialColorClass.getRed());


// Static Methods: Called directly on the class itself, not on instances. They are often used for utility functions 
// that are related to the class but don't need to operate on a specific instance.

// Static Properties: Properties that belong to the class itself, not to instances.

class MathUtility {
  static PI = 3.14159;

  static square(number) {
    return number * number;
  }

  static cube(number) {
    return number * number * number;
  }
}

console.log(MathUtility.PI);

let squareNumber = MathUtility.square(5);
let cubeNumber = MathUtility.cube(6);

console.log(`Square of 5 is ${squareNumber}`);
console.log(`Cube of 6 is ${cubeNumber}`);

// Class with private properties

class ClassPrivate {
  #privateField;
  #privateFieldWithInitializer = 5;

  #privateMethod() { 
    // private method body
  }

  static #privateStaticField;
  static #privateStaticMethod() {
    // private static method body
  }

}
