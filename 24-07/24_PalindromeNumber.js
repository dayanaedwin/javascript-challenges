/**
 * Leet Code - 9 - Palindrome Number
 * https://leetcode.com/problems/palindrome-number/description/
 * 
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function (x) {
    if (x < 0) return false;

    let rem = x;
    let temp = 0, i = 1;

    while (rem !== 0) {
        temp = (temp * 10) + (rem % 10);
        rem = parseInt(rem / 10);
        i++;
    }
    return temp === x;
};