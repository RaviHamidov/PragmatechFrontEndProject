var n = 10;
var s = "abcac";

function repeatedString(s, n) {
    const sLength = s.length;
    const remainder = n % sLength;
    const times = (n - remainder) / sLength;
    let aCount = 0;
    let theRest = 0;
    for (let i = 0, j = 0; i < sLength; i += 1, j += 1) {
        const char = s.charAt(i);
        if (char === 'a') {
            aCount += 1;
            if (j < remainder) {
                theRest += 1;
            }
        }
    }
    return aCount * times + theRest;
}
console.log(repeatedString(s,n))