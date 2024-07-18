/**
 * Pollyfill - filter
 */

Array.prototype.customFilter = function (cb) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        cb(this[i], i, this) && temp.push(this[i]);
    }
    return temp;
}

const nums = [1, 2, 3, 4];

const filteredArray = nums.customFilter((num, i, arr) => num > 2);

console.log(filteredArray);