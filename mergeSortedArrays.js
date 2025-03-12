function mergeSortedArrays(arr1, arr2) {
    let i = 0, j = 0;
    const temp = [];

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            temp.push(arr1[i]);
            i++;
        }
        if (arr2[j] < arr1[i]) {
            temp.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        temp.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        temp.push(arr2[j]);
        j++;
    }

    return temp;
}

console.log(mergeSortedArrays([1, 3], [2, 3, 4, 6]));