// Program to find longest word in a given sentence

function findLongestWord(text) {
    const wordList = text.trim().replace(/[^\w\s]/g, '').split(' ');
    let length = 0, longestWord = '';
    for (let word of wordList) {
        if (word.length > length) {
            length = word.length;
            longestWord = word;
        }
    }
    return longestWord;
}


//   Using reduce method
function findLongestWordUsingReduce(text) {
    return text
        .trim()
        .replace(/[^\w\s]/g, '')
        .split(' ')
        .reduce(((longest, currentWord) => currentWord.length > longest.length ? currentWord : longest), '');
}