/*
* Defining Functions in JavaScript
*/

function functionName(parameter1, parameter2){
    return "value";
}

//  Anonymous function
let funcn = function(parameter1){
    return parameter1;
}

// function hoisting

let result = square(5);
console.log(result);

function square(number){
    return number * number;
};

// Arrow Functions
let funcn2 = (parameter1, parameter2) => {
    return "arrow"
};

let result2 = funcn2(1,2);
console.log(result2);