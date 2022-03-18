// You need to find which of the numbers a and b is closer to the number c.

let proximity = solution(91, 81, 71)

function solution(a, b, c) {
    if (Math.abs(c - a) < Math.abs(c - b)) {
        console.log(" a is closer to the number c than b ");
    } else if (Math.abs(c - a) == Math.abs(c - b)) {
        console.log(" a and b are equal to each other, so they are both equidistant from c ")
    } else {
        console.log(" b is closer to the number c than a ")
    }
}

/*
    I used the Math method in the solution function,
    The reason is that when the number c is 
    smaller than the number a or b, the result can be negative.
*/