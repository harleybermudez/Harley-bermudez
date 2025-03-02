/*1. Develop a program initializing 4 variables [a, b, c, d] and 1 constant [e], store the following values:
a. 25 d. “15”
b. 20 e. 15
c. 12*/
let a = 25;
let b = 20;
let c = 12;
let d = "15";
const e = 15;
/*2. then, display the following results of the required tasks below:
a. Display the sum of the declared variables [a,b,c,d] and constant [e] combined.*/
sum = a + b + c + d + e;
console.log (sum);
/*b. Compare the values of variable d and constant e using relational operators [>, <, =>,
<=, and ===], then display the results.*/
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
//c. Declare new variables to store the result/s of the following operations, then after, display the results:
//1. Subtract all the values of the declared variables.
let subtraction = a - b - c -d - e;
console.log (subtraction);
//2. Multiply the values of variable a and c, divided by constant e.
let multiply = (a * c)/ e;
console.log(multiply)
//3. Display the exponent value of constant e raise to the power of variable c.
let exponent = e ** c;
console.log(exponent);
//4. Reassign the value of c.3 to constant e, then display the result.*/
let newE = exponent;
console.log(newE);
