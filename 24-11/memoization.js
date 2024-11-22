let map = new Map();

const add = (a, b) => a + b;

const memoizedAdd = memoizeOne(add);

console.log(memoizedAdd(1, 2));
console.log(memoizedAdd(1, 2));
console.log(memoizedAdd(1, 5));
console.log(memoizedAdd(1, 2));
console.log(memoizedAdd(1, 5));

function memoizeOne(fn) {
    return function (...args) { //wrapper function used to access arguments from parent function that is invoked later
        const key = args.join('_');
        if (map.has(key)) {
            console.log('result from cache');
            return map.get(key);
        }
        const result = fn(...args);
        map.set(key, result);
        return result;
    };
}