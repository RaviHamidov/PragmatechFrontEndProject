var n = 8;
var s = "UDDDUDUU";

function countingValleys(n, s) {
    let valleyNum = 0;
    let inValley = false;
    let currentHeight = 0;
    for (let i = 0; i < n; i += 1) {
        let step = s.charAt(i);
        if (step === 'U') {
            currentHeight += 1;
        } else {
            currentHeight -= 1;
        }
        if (currentHeight < 0 && !inValley) {
            inValley = true;
        }
        if (currentHeight >= 0 && inValley) {
            valleyNum += 1;
            inValley = false;
        }
    }
    return valleyNum;
}
console.log(countingValleys(n, s))