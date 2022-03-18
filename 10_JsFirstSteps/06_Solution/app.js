/* 
    The coordinates of 3 points are given. Write a program that finds the point closest to point a according to these given coordinates.
        a_x = 120, a_y = 200
        b_x = 230, b_y = 400
        c_x = 210, c_y = 345
*/ 

// Cordinats
let a_x = 120;
let a_y = 200;

let b_x = 230;
let b_y = 400;

let c_x = 210;
let c_y = 345;

// Hypotenus
let a = Math.sqrt((a_x)**2+(a_y)**2);
let b = Math.sqrt((b_x)**2+(b_y)**2);
let c = Math.sqrt((c_x)**2+(c_y)**2);


// Method
function solution(a, b, c) {
    if (Math.abs(a - c) < Math.abs(a - b)) {
        console.log(" c is closer to the number a than b ");
    } else if (Math.abs(a - c) == Math.abs(a - b)) {
        console.log(" a and b are equal to each other, so they are both equidistant from c ")
    } else {
        console.log(" b is closer to the number a than c ")
    }
}

solution();