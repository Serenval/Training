/**
 * Polymorphism basics
 */

// Method overriding (Inheritence)

class Shape {
  area() {
    return "Awaiting for implementation";
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius * 2;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
  area() {
    return this.width * this.height;
  }
}

let Shapes = [new Circle(5), new Rectangle(43, 113)];
Shapes.forEach(shape => console.log(shape.area()));

// Function overloading, default parameters
function greet(name, age) {
  if (age === undefined) {
    return "Hello, " + name;
  } else {
    return "Hello, " + name + "! You are " + age + " old!";
  }
}

console.log(greet("booba"));
console.log(greet("makr", 55));