var n = 9;
var ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];

function sockMerchant(n, ar) {
    const sockMap = {};
    let total = 0;
    for (let i = 0; i < n; i += 1) {
        const current = ar[i] + '';
        if (!sockMap[current]) {
            sockMap[current] = true;
        } else {
            total += 1;
            sockMap[current] = null;
        }
    }
    return total;
}
console.log(sockMerchant(n, ar));