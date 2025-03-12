/**
 * Polyfill of map method
 * 
 */

Array.prototype.customMap = function (cb) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        temp.push(cb(this[i], i, this));
    }
    return temp;
}

const nums = [1, 2, 3, 4];

const doubleArray = nums.customMap((num, i, arr) => num *2);