/*
    Create a function called sum that takes a number as an argument and returns another function that also takes a number. This second function should return another function that, when called, returns the sum of all the numbers passed in so far.
    The function should support an arbitrary number of calls and should work as follows:
    sum(10)(10)() should return 20.
    sum(5)(10)(15)() should return 30.
    sum(1)(2)(3)(4)(5)() should return 15.
*/

function sum(a) {
    return function inner(b) {
        return (b ? sum(a + b) : a);
    }
} 