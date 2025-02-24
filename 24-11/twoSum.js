/**
 * Leet Code - 1 - Two Sum
 * https://leetcode.com/problems/two-sum/description/
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Brute Force Approach (O(n²))
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const sum = nums[i] + nums[j];
            if (sum === target) {
                return [i, j];
            }
        }
    }
};

// Optimized Approach (Using Map - O(n))
var twoSum = function (nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}