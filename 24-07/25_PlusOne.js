/**
 * Leet Code - 66 - Plus One
 * https://leetcode.com/problems/plus-one/
 * 
 * @param {number[]} digits
 * @return {number[]}
 */

//Method 1 - using for loop
var plusOne = function (digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }
    if (digits[0] === 0) {
        digits.unshift(1);
    }
    return digits;
};

//Method - 2 - using join and slpit method
var plusOne = function (digits) {
    return (BigInt(digits.join('')) + BigInt(1)).toString().split('');
};