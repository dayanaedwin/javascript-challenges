/*  
    Find the First Non-Repeating Character
    Given a string, find the first character that does not repeat.
 */

//Using JS String Method
function firstNonRepeatingChar(str) {
    for (let i = 0; i < str.length; i++) {
        if (!str.slice(i + 1).includes(str[i])) {
            return str[i];
        }
    }
    return '';
}
console.log(firstNonRepeatingChar("swiss"));

//Using Map
function firstNonRepeatingChar(str) {
    const map = new Map();
    for (let char of str) {
        if (map.has(char)) {
            map.set(char, map.get(char) + 1);
        } else {
            map.set(char, 1);
        }
    }
    for (const [key, value] of map) {
        if (value === 1) {
            return key;
        }
    }
    return '';
}