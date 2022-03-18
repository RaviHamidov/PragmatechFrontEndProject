// Given a fractional number (for example: 4.234) , Write a program that prints the whole part and the fractional part on a separate screen

// First way

let x = 4.234;
x = String(x)
let separator = x.split(".");
console.log("Given number's whole " + separator[0] + " and fractional " + separator[1] + " part")

// Second way

let z = 4.234
separatir(z);

function separatir(z) {
    let whole = Math.trunc(z);
    let fractional = z - whole;
    console.log("Given number's whole " + whole + " and fractional " + fractional + " part");
}