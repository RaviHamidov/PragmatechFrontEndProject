// Write a program that prints the given 4 numbers from large to small on the screen

let chosen = [51, 61, 71, 81, 91];
chosen.sort(function(a, b){return b-a});
console.log(chosen);