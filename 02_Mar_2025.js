/*
* Continue exploring functions
*/

//Variable length argument list

function argumentCheck(x, y, z){
    if(arguments.length != 3){
        throw new Error("Function called with " + arguments.length +
            "arguments, but it expected 3 arguments");
    }
}

// console.log(argumentCheck(1, 2));

function counter(){
    let n = 0;
    return {
        count: function() { return n++; },
        reset: function() { n = 0; }
    };
};

let c = counter();
console.log(c.count());
c.count();
console.log(c.count());
c.reset();
console.log(c.count());