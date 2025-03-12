
const findAnagramSubstr = (text, pattern) => {
	if (text.length < pattern.length) return [];
	pattern = [...pattern].sort((a, b) => a.localeCompare(b)).join('');
	let count = [];
	for (let i = 0; i <= (text.length - pattern.length); i++) {
		const substr = [...text.substr(i, pattern.length)].sort((a, b) => a.localeCompare(b)).join('');
		if (pattern === substr) {
			count.push(i);
		}
	}
	return count;
}

console.log(findAnagramSubstr('BACDGABCDA', 'ABCD'));