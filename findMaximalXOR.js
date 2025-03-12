/**
 * Find maximal XOR value within the limit
 * @param {number} low
 * @param {number} high
 * @param {number} limit
 * @return {number}
 */

const findMaximalXORWithinLimit = (low, high, limit) => {
    let maxValue = 0;
    for (let i = low; i <= high; i++) {
        for (let j = i + 1; j <= high; j++) {
            let xor = i ^ j;
            if (maxValue < xor && xor <= limit) {
                maxValue = xor;
            }
        }
    }
    return maxValue;
}