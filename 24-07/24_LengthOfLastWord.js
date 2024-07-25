/**
 * Leet Code - 58 - Length of Last Word
 * https://leetcode.com/problems/length-of-last-word/
 * 
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const words = s.trim().split(" ").filter(item =>  item);
    const lastWord = words[words.length - 1].length;
    return lastWord;
};