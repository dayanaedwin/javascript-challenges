//  Find the max count of consecutive 1’s in an array 

function maxConsecutiveOnes(arr) {
    let count = 0, longestCount = 0;
    for (let item of arr) {
        if (item == 1) {
            count++;
            if (longestCount < count) {
                longestCount = count;
            }
        } else {

            count = 0;
        }
    }
    return longestCount;
}

function maxConsecutiveOnesWithReduce(arr) {
    return arr.reduce(([maxCount, count], num) => {
        if (num === 1) {
            count++;
            maxCount = maxCount < count ? count : maxCount;
        } else {
            count = 0;
        }
        return [maxCount, count];
    }, [0, 0])[0];
}

const binaryArray = [1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1];
console.log(maxConsecutiveOnes(binaryArray));