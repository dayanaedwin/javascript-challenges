/**
 * Leetcode - 53 - Maximum Subarray
 * https://leetcode.com/problems/maximum-subarray/
 * 
 * @param {number[]} nums
 * @return {number}
 */

// Brute Force Method with Time Complexity O(n^2)

var maxSubArray = function (nums) {
    let maxSum = 0, startIndex = 0, endIndex = 0;
    for (let i = 0; i < nums.length; i++) {
        let currentSum = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            currentSum += nums[j];
            if (maxSum < currentSum) {
                maxSum = currentSum;
                startIndex = i;
                endIndex = j;
            }
        }
    }
    console.log('Sub array', nums.slice(startIndex, endIndex + 1));
    return maxSum;
};

// Using Kadane's Algorithm
var maxSubArray = function (nums) {
    let maxSum = nums[0], sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
        if (sum > maxSum) {
            maxSum = sum;
        }
        if (sum < 0) {
            sum = 0;
        }
    }
    return maxSum;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));