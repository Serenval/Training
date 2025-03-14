/**
 * Practice Higher Ordered Function
 */

// Flatening an array
let arrays = [[1, 2, 3], [4, 5], [6]];
let flatenedArray = arrays.reduce(function(previous, current) {
  return previous.concat(current);
}, []);
console.log(flatenedArray);

// Loop Function with higher ordered functions

function loop(number, rule, step, callback) {
  for( let i = number; rule(i); i = step(i)) {
    callback(i);
  };
};

loop(3, number => number > 0, number => number - 1, console.log);

// Checking entire array for the condition
function every(array, test) {
  conditionArray = array.map(function(number) {
    return test(number);
  });
  if( conditionArray.includes(false)) {
    return false;
  }
  return true;
}

console.log(every([1, 3, 5], n => n < 10));
console.log(every([2, 4, 16], n => n < 10));
console.log(every([], n => n < 10));


function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
      return script;
    }
  }
  return null;
}
