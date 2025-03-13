/**
 * Higher Order Functions
 */

// Passing a function as an argument

function greet(name, callback) {
  console.log("Hello, " + name + "!");
  callback();
}

function sayBye() {
  console.log("Bye");
}

greet("Bob", sayBye);

// Returning a function

function multiplier(factor) {
  return function(number) {
    return number * factor;
  }
}

const double = multiplier(2);
console.log(double(5));

const triple = multiplier(3);
console.log(triple(5));

// map() creates a new array by applying a function to each element.
const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(num => num * num);
console.log(squared);

// filter() creates a new array with elements that meet a condition.

const ages = [14, 18, 25, 49];
const adults = ages.filter(age => age >=18);
console.log(adults);

// filtering out tasks

const tasks = [
  { id: 1, task: "Learn something", completed: true},
  { id: 2, task: "Build something", completed: false},
  { id: 3, task: "Practice HIgher order functions", completed: true}
];

// show all tasks
console.log("All tasks");
tasks.forEach(task => console.log(task.task));

// get only pending ones
const pendingTasks = tasks.filter(task => !task.completed);
console.log("Pending tasks");
pendingTasks.forEach(task => console.log(task.task));

// Mark all tasks as complete
const completedTasks = tasks.map(function(task) {
  return {
    id: task.id,
    task: task.task,
    completed: true
  };
});

console.log("Mark all tasks as completed");
completedTasks.forEach(function(task) {
  console.log(task.task + " - Completed: " + task.completed);
});