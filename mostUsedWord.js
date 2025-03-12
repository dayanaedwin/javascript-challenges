/* find the most frequent word in a paragraph */

function mostUsedWord(text, bannedWords) {
    if (!text) {
        throw new TypeError('Invalid Input')
    }

    text = text.trim().toLowerCase().replace(/[^\w\s]/g, '').split(' ');
    let map = new Map();

    for (let i = 0; i < text.length; i++) {
        if (!bannedWords || !bannedWords.includes(text[i])) {
            if (map.has(text[i])) {
                let count = map.get(text[i]);
                map.set(text[i], ++count);
            } else {
                map.set(text[i], 1);
            }
        }
    }

    let count = 0, word = '';

    for (const [key, value] of map) {
        if (value > count) {
            word = key;
            count = value;
        }
    };
    return word;
}
const text = 'Bob hit a ball, the hit ball flew far after it was hit.';
const bannedWords = ['hit'];

const answer = mostUsedWord(text, bannedWords);

console.log(answer)