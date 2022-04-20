var c = [1, 2, 2, 1, 1, 3, 5, 1, 2];

function jumpingOnClouds(c) {
    let jumps = 0;
    let index = 0;
    while (index < c.length - 1) {
        if (index + 2 < c.length && c[index + 2] !== 1) {
            jumps += 1;
            index += 2;
        } else {
            jumps += 1;
            index += 1;
        }
    }
    return jumps;
}
console.log(jumpingOnClouds(c));