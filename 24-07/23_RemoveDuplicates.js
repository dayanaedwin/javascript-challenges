/**
 * Remove duplicates from given unsorted array
 * 
 * @param {number[]} nums
 * @return {number[]}
 */

//Method -1 - using Set
function removeDuplicateFromUnsortedArrays(array) {
    return new Set(array);
}

//Method -2 - using filter method
function removeDuplicateFromUnsortedArrays(array) {
    return array.filter((item, index, self) => self.indexOf(item) === index);
}

//Method - 3 - using objects
function removeDuplicateFromUnsortedArrays(array) {
    const unique = [];
    const obj = [];
    for (let value of array) {
        if (!obj[value]) {
            unique.push(value);
            obj[value] = true
        }
    }
    return unique;
}

//Method - 3 - using forEach
function removeDuplicateFromUnsortedArrays(array) {
    const unique = [];
    array.forEach(item => {
        if(!unique.includes(item)) {
            unique.push(item);
        }
    })
    return unique;
}

//Method - 4 - using reduce method
function removeDuplicateFromUnsortedArrays(array) {
    return array.reduce((acc, item) => {
        if (!acc.includes(item)) {
            acc.push(item);
        }
        return acc;
    }, []);
}