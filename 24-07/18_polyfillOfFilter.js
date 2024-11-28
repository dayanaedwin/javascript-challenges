/**
 * Pollyfill - filter
 */

function customFilter(callbackFn, thisArg) {
    // DO NOT REMOVE
    'use strict';

    if (typeof callbackFn !== 'function') {
        throw new TypeError(`${callbackFn} is not a function`);
    }

    const temp = [];
    for (let i = 0; i < this.length; i++) {
        if (callbackFn.call(thisArg, this[i], i, this)) {
            temp.push(this[i]);
        }
    }
    return temp;
}

// DO NOT CHANGE
Array.prototype.customFilter = customFilter;

const nums = [1, 2, 3, 4];

const filteredArray = nums.customFilter((num, i, arr) => num > 2);

console.log(filteredArray);