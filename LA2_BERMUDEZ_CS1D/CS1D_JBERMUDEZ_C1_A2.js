/*1. Develop a program initializing 4 variables [a, b, c, d] and 1 constant [e], store the following values:
a. 25 d. “15”
b. 20 e. 15
c. 12*/
let a = 25;
let b = 20;
let c = 12;
let d = "15";
const e = 15;
/*a. sum of the declared variables [a,b,c,d] and constant [e] combined.*/
sum = a + b + c + d + e;
console.log (sum);
/*b. Compare=ing  values of variable d and constant e  [>, <, =>,
<=, and ===] */
if (d>e) {
    console.log ('d is greater than e');
} else {
    console.log ('e is greater than  d');
}
if (d<e) {
    console.log ('d is less than e');
} else {
    console.log ('e is less than d');
}
if (d=>e) {
    console.log ('d is greater than  e');
} else {
    console.log ('e is greater than  d');
}
if (d<=e) {
    console.log ('d is less than e');
} else {
    console.log ('e is less than d');
}
if (d===e) {
    console.log ('d and e is equal');
} else {
    console.log ('they are not equal');
}
//c.a new variables to store the result
//1. Subtracting all the values of the variables.
let subtraction = a - b - c -d - e;
console.log (subtraction);
//2. Multiplying the values a and c, divided by e.
let multiply = (a * c)/ e;
console.log(multiply)
//3.exponent value of constant e raise to the power of variable c.
let exponent = e ** c;
console.log(exponent);
//4. Reassigning the value of c.3 to constant e*/
let newE = exponent;
console.log(newE);
