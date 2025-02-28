/* 
    Implement debouncing
*/

//Using arrow function inside the setTimeout to get correct 'this'
function debounce(fn, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    }
}

//using apply in the normal function which is inside the setTimeout to get correct 'this'
function debounce(fn, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(function () {
            fn.apply(this, args);
        }, delay);
    }
}