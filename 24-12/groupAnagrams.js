function groupAnagrams(words) {
    const map = new Map();
    for (let word of words) {
        const sorted = word.split('').sort().join();
        if (map.has(sorted)) {
            //map get will return is a shallow copy. 
            //ie, it returns the reference of the array which is the value of a key in the map
            map.get(sorted).push(word);
        } else {
            map.set(sorted, [word]);
        }
    }
    return Array.from(map.values());
}
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));