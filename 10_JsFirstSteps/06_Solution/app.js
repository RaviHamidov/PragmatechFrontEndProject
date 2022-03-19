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
let b_a = Math.trunc(Math.sqrt((b_x - a_x)**2 + (b_y - a_y)**2));
let c_a = Math.trunc(Math.sqrt((c_x - a_x)**2 + (c_y - a_y)**2)); 

// Method
function solution(c_a, b_a) {

    if (c_a < b_a) {
        console.log(" c is closer to the number a than b ");
    } else {
        console.log(" b is closer to the number a than c ");
    }
}

solution(c_a, b_a);