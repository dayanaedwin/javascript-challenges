/**
 * Leet Code - 442 - Find all duplicates in an array
 * https://leetcode.com/problems/find-all-duplicates-in-an-array/
 * 
 * @param {number[]} nums
 * @return {number[]}
 */

//Method 1 - using Set - Time complexity - O(n)
var findDuplicates = function (nums) {
    const seen = new Set();
    const duplicates = new Set();

    for (let item of nums) {
        if (seen.has(item)) {
            duplicates.add(item);
        } else {
            seen.add(item);
        }
    }

    return Array.from(duplicates);
};

//Method 2 - using filter - Time Complexity - O(n^2)
const findDuplicates = (nums) => {
    return nums.filter((item, index, nums) => index !== nums.indexOf(item));
};

//Method 3 - using object - Time Complexity - O(n)
var findDuplicates = function (nums) {
    const unique = {};
    const duplicates = [];
    for (let item of nums) {
        if (unique[item]) {
            duplicates.push(item)
        } else {
            unique[item] = 1;
        }
    }
    return duplicates;
};