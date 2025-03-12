/*
    Create a function compose that takes multiple functions and returns 
    a new function that applies them in sequence.
*/

function add5(x) { return x + 5; }
function double(x) { return x * 2; }
function square(x) { return x * x; }

const composed = compose(add5, double, square);
console.log(composed(2)); // (2 + 5) * 2 ^ 2 = 196

function compose(...args1) {
    return function(args2) {
        console.log(args1, args2)
    }
}