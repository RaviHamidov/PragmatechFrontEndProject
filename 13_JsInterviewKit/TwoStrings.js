var s1 = "hello";
var s2 = "world";

function twoStrings(s1, s2) {
    const s1Chars = {};
    for (let i = 0; i < s1.length; i += 1) {
        s1Chars[s1[i]] = true;
    }
    for (let i = 0; i < s2.length; i += 1) {
        if (s1Chars[s2[i]]) {
            return 'YES';
        }
    }
    return 'NO';
};
console.log(twoStrings(s1, s2));