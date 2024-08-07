/**
 * Leet Code - 500 - Keyboard Row
 * https://leetcode.com/problems/keyboard-row/
 * 
 * @param {string[]} words
 * @return {string[]}
 */

//Method 1 - using filter and for loop

var findWords = function (words) {
    const rows = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];
    const result = words.filter(word => rows.some(row => {
        for (let i = 0; i < word.length; i++) {
            if (!row.includes(word[i].toLowerCase())) {
                return false;
            }
        }
        return true;
    }));
    return result;
};

//Method 2 - using every method of array and filter
var findWords = function (words) {
    const rows = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];
    const result = words.filter(word => rows.some(row => 
        [...word.toLowerCase()].every(char => row.includes(char))
    ));
    return result;
};