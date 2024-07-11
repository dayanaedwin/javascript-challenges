/**
 * Leet Code - 4 - Median of Two Sorted Arrays.
 * https://leetcode.com/problems/median-of-two-sorted-arrays/description/
 * 
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let mergedArray = [...nums1, ...nums2];
    mergedArray.sort((a, b) => { return a - b });
    
    let length = mergedArray.length;
    let midLength = parseInt(length / 2);
    if (length % 2) {
        return mergedArray[midLength];
    } else {
        return (mergedArray[midLength] + mergedArray[midLength - 1]) / 2;
    }
};