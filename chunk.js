/* 
    Implement a function to split an array into groups of a certain length
    Lodash polyfill
*/

function chunk(arr, length = 1) {
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

function chunk (arr, size) {
    let result = [];
    let temp = [];
    for(let i=0; i<arr.length; i++) {
      temp.push(arr[i]);
      if(i === arr.length - 1 || temp.length === size) {
        result.push([...temp]); // creates a shallow copy of temp and push that in the result array.
        temp.length = 0; // empties the array in all references stored in result
        /* 
            For large arrays, arr.length = 0 is faster than arr = [] because:
            It doesn't allocate new memory.
            It directly truncates the existing array in place.
        */
      }
    }
    return result;
  }
  
  console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 2));