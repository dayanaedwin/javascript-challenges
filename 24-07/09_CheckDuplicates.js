/**
 * Leet Code - 217 - Contains Duplicate
 * https://leetcode.com/problems/contains-duplicate/description/
 * 
 * @param {number[]} nums 
 * @returns {boolean}
 */

function containsDuplicate(nums) {
    const unique = new Set();
    for (let num of nums) {
        if (unique.has(num)) {
            return true;
        } else {
            unique.add(num);
        }
    }
    return false;
}

