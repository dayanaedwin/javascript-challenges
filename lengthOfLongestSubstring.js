/**
 * LeetCode - 3 Longest substring without repeating characters
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 * 
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let substr = "", maxCount = 0;
    for (let str of s) {
        const foundIndex = substr.indexOf(str);
        substr += str;
        if (foundIndex >= 0) {
            substr = substr.substring(foundIndex + 1, substr.length);
        }
        maxCount = Math.max(maxCount, substr.length);
    }
    return maxCount;
};