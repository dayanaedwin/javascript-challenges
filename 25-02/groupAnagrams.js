/**
 * Leet Code - 49 - Group Anagrams
 * https://leetcode.com/problems/group-anagrams/
 * 
 * @param {string[]} strs
 * @return {string[][]}
 */

/*  Brute Force Method
    Time Complexity: O(n² log k) (where n is number of words, k is average word length)
    Sorting each word takes O(k log k), and comparing all words takes O(n²)
    Space Complexity: O(nk)
*/

var groupAnagrams = function (strs) {
    const count = {};
    for (let word of strs) {
        const sorted = word.split('').sort().join('');
        if (count[sorted]) {
            count[sorted].push(word);
        } else {
            count[sorted] = [word];
        }
    }
    return Object.values(count);
};

/*
    Optimized Approach (O(nk)) - Using HashMap
     Time Complexity: O(nk) (processing each word once)
    Space Complexity: O(nk) (storing groups in a HashMap)

    Use a frequency count (signature) instead of sorting.
    Each word is converted into a key (a character count array).
    Store all anagrams under the same key.
*/

var groupAnagrams = function (strs) {
    const map = new Map();

    for (let word of strs) {
        const count = new Array(26).fill(0);

        for (let char of word) {
            count[char.charCodeAt(0) - 97]++;
        }

        const key = count.toString();

        if (map.has(key)) {
            map.get(key).push(word)
        } else {
            map.set(key, [word]);
        }
    }
    return Array.from(map.values());
};