/* 
    Implement a function to split an array into groups of a certain length
    Lodash polyfill
*/

function chunk(arr, length) {
    if (!length) {
        length = 1;
    }
    if (length < 1 || !Array.isArray(arr) || arr.length == 0) {
        return [];
    }
    const temp = [];
    let i = 0;
    while (i < arr.length) {
        temp.push(arr.slice(i, i + length));
        i = i + length;
    }
    return temp;
}