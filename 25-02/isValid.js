/**
 * LeetCode - 20 - Valid Parentheses
 * https://leetcode.com/problems/valid-parentheses/
 * 
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const map = {')': '(', '}': '{', ']': '['};
    
    for(let el of s) {
      if(el in map) {
        if(stack.length === 0 || stack.pop() !== map[el]) {
          return false;
        }
      } else {
        stack.push(el);
      }
    }
    return stack.length === 0;
};