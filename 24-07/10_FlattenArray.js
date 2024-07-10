/**
 * Leet Code - 2625 - Flatten Deeply Nested Array
 * https://leetcode.com/problems/flatten-deeply-nested-array/description/
 * 
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */

function flat(arr, depth = 1) {
    let result = [];
    arr.forEach(item => {
        if (Array.isArray(item) && depth > 0) {
            result.push(...flat(item, depth - 1));
        } else {
            result.push(item)
        }
    });
    return result;
}