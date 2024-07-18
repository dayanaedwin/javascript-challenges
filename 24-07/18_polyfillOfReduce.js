/**
 * Polyfill of reduce method
 * 
 */

Array.prototype.customReduce = function (cb, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < this.length; i++) {
        accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
    }
    return accumulator;
}

const nums = [1, 2, 3, 4];

const reducedArray = nums.customReduce(((acc, num, i, arr) => {
    return acc + num;
}), 10);
console.log(reducedArray);