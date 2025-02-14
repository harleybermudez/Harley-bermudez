1.	//Differentiation of let, const, and var
/*Const is limited to block {} in where it is declared, 
re- assigning after declaration is not allowed and re- declaration in the same scope is not allowed.
Let is like const, they’re block-scoped, you can update it but cannot be re-declared in a same scope,
Var in the other hand can be re-declared and updated but var is still limited 
to to the function that you declared and if it is declared outside a function 
you  can access it anywhere in the program. */



//const cannot be re-assigned after declaration.
const me = 17;
me = 18; // can't do this.

//let cannot be re-declared in the same scope but can be updated.
let mee =17;
mee=18; // you can do this.

/*var when used to declare variable they will only accessible within the function they are declared in.
but  even though variable is declared inside if, it's accessible throughout the function.*/
function meVar() {
    if (true) {
        var meee = 20;
    }
    console.log(meee);
    }
meVar();
2.	// Concept of Falsy Values in JavaScript
/*Falsy values are like the Boolean false but they’re not the same data type.
 Boolean is false because ‘false’is false. Falsy values are values that acts like false.
In conditional statement falsy values are treated false eventhough they are not 
literally false(Boolean false).lastly they are use to control 
the steps of the program for example in IF, ELSE if 
the value is = 0, ‘if’ will be skipped because 0 is falsy.*/

 
// 0 is falsy because it doesn not have any value.
let students = 0;
if (students) {
    console.log('this wont run');
}
//"" is falsy beacause its empty.
let name = "";
if (name) {
    console.log('this also wont run');
}
//NaN is falsy beacause its a valid input.
let your_number = NaN;
if (your_number) {
    console.log('guess what? this wont run');
}