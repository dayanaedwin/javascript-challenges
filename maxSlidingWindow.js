/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    let slideWindow = [];
    let sumArray = [];
    for (let i = 0; i < k; i++) {
        slideWindow.push(nums[i]);
    }
    sumArray.push(Math.max(...slideWindow));

    for (let i = k; i < nums.length; i++) {
        slideWindow.push(nums[i]);
        slideWindow.shift();
        if (slideWindow.length === k) {
            sumArray.push(Math.max(...slideWindow));
        }
    }

    return sumArray;
};

console.log(maxSlidingWindow([8, 5, 10, 7, 9, 4, 15, 12, 90, 13], 4));