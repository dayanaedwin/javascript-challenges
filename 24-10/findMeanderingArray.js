/**
 * Find meandering arry of an unsorted array
 * @param {number[]} array
 * @return {number[]}
 */

const meanderingArray = (array) => {
    array.sort((a, b) => a - b);
    let meandering = [];
    let smallestIndex = 0;
    let largestIndex = array.length - 1;
    while (smallestIndex < largestIndex) {
        meandering.push(array[largestIndex--]);
        meandering.push(array[smallestIndex--]);
    }
    if (i === j) {
        meandering.push(array[i]);
    }
    return meandering;
}

//alterante way
const meanderingArrayWay2 = (array) => {
    array.sort((a, b) => a - b);
    let meandering = [];
    let smallestIndex = 0;
    let largestIndex = array.length - 1;
    while (smallestIndex <= largestIndex) {
        if (j >= i) {
            meandering.push(array[j--]);
            j--;
        }
        if (i <= j) {
            meandering.push(array[i]);
            i++
        }
    }
    return meandering;
}