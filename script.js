// Math.random

// Generate a decimal number between 0 and 0.99
Math.random();

// Save it to a variable:
var decimal = Math.random();

// Log the value of decimal to the console
console.log(decimal);

// Log the value of decimal MULTIPLIED BY !0
console.log(decimal * 10)

console.log("--------------------------------------------------")

// Math ceil()

// Round up any decimal number to the nearest integer
var rounded1 = Math.ceil(0.0001);
console.log(rounded1);
var rounded2 = Math.ceil(0.5);
console.log(rounded2);
var rounded3 = Math.ceil(0.99);
console.log(rounded3);
var rounded4 = Math.ceil(1.01);
console.log(rounded4);
var rounded5 = Math.ceil(1.5);
console.log(rounded5);
var rounded6 = Math.ceil(2.99);
console.log(rounded6);


console.log("---------------------------------------------")

// Random integer

// Get a random decimal number between 0 and 0.99
// multiply it by 10 
// and save it to a variable
var randomDecimal = Math.random() * 10;
console.log(randomDecimal)

// Rounding up the value 
var roundedRandom = Math.ceil(randomDecimal)

// Log the value of the rounded to the decimal
console.log(roundedRandom)