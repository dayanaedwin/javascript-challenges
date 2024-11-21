/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarraySum = function (nums, k) {
    let prevSum = 0;
    let slideWindow = [];
    for (let i = 0; i < k; i++) {
        if (!slideWindow.includes(nums[i])) {
            prevSum += nums[i];
        } else {
            prevSum = 0;
        }
        slideWindow.push(nums[i]);
    }

    let maxSum = prevSum;

    for (let i = k; i < nums.length; i++) {
        if (!slideWindow.includes(nums[i])) {
            prevSum = prevSum + nums[i] - slideWindow.shift();
            if (prevSum > maxSum) {
                maxSum = prevSum;
            }
        } else {
            slideWindow.shift();
        }
        slideWindow.push(nums[i]);
    }
    return maxSum;
};

console.log(maxSubarraySum([1, 1, 1, 7, 8, 9], 3));