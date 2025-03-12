/**
 * LeetCode - 567 - Permutation in string
 * https://leetcode.com/problems/permutation-in-string/
 * 
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

/* 
    Optimised Approach - Sliding window + Frequency count
    Time Complexity - O(n)
*/

var checkInclusion = function (s1, s2) {
    const s1Len = s1.length, s2Len = s2.length;
    const s1Count = new Array(26).fill(0);
    const s2Count = new Array(26).fill(0);

    for (let i = 0; i < s1Len; i++) {
        s1Count[s1.charCodeAt(i) - 97]++;
        s2Count[s2.charCodeAt(i) - 97]++;
    }

    const s1CountString = s1Count.toString();
    if(s1CountString === s2Count.toString()) return true;

    for(let i = s1Len; i<s2Len; i++) {
        s2Count[s2.charCodeAt(i) - 97]++;
        s2Count[s2.charCodeAt(i - s1Len) - 97]--;
        if(s1CountString === s2Count.toString()) return true;
    }

    return false;
};