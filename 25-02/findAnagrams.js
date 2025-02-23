/**
 * LeetCode - 438 - Find all anagrams in a string
 * https://leetcode.com/problems/find-all-anagrams-in-a-string/
 * 
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

/* 
    Brute Force Method
    1. Sorting substrings repeatedly (O(m log m) for each substring of length m) results in an overall complexity of O(n * m log m), which is too slow for large inputs.
    2. Creating new substrings repeatedly increases memory usage.
*/
var findAnagrams = function (s, p) {
    const resArr = [];
    p = p.split('').sort((a, b) => a - b).join('');

    for (let i = 0; i < s.length; i++) {
        let sorted = s.substring(i, p.length + i);
        if (sorted.length === p.length) {
            sorted = sorted.split('').sort().join('');
            if (sorted === p) {
                resArr.push(i);
            }
        }
    }
    return resArr;
};

/* 
    Optimised Approach - Sliding window + Frequency count
    Time Complexity - O(n)
*/

var findAnagrams = function(s, p) {
    const sLen = s.length, pLen = p.length, res = [];
    const pCount = new Array(26).fill(0);
    const sCount = new Array(26).fill(0);
    
    for(let i=0; i<pLen; i++) {
      pCount[p.charCodeAt(i) - 97]++;
      sCount[s.charCodeAt(i) - 97]++;
    }
    if(pCount.toString() === sCount.toString()) res.push(0);
    
    for(let i=pLen; i<sLen; i++) {
      sCount[s.charCodeAt(i) - 97]++;
      sCount[s.charCodeAt(i - pLen) - 97]--;
      if(pCount.toString() === sCount.toString()) res.push(i - pLen + 1);
    }
    
    return res;
  };