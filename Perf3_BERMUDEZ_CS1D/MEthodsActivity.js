
let arr1 = ["Cecile", "Lone"];
let arr2 = ["Emil", "Tobias", "Linus"];
let combinedArray = arr1.concat(arr2);
console.log("Combined Array:", combinedArray); // ["Cecile", "Lone", "Emil", "Tobias", "Linus"]

let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log("After push():", fruits); // ["Banana", "Orange", "Apple", "Mango", "Kiwi"]

let array1 = [1, 2, 3];
array1.unshift(4, 5);
console.log("After unshift():", array1); // [4, 5, 1, 2, 3]

fruits.pop();
console.log("After pop():", fruits); // ["Banana", "Orange", "Apple", "Mango"]

let array2 = [1, 2, 3];
array2.shift();
console.log("After shift():", array2); // [2, 3]

fruits.sort();
console.log("After sort():", fruits); // ["Apple", "Banana", "Mango", "Orange"]

let slicedFruits = fruits.slice(1, 3);
console.log("After slice():", slicedFruits); // ["Banana", "Mango"]

let months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb"); // Insert Feb at index 1
months.splice(4, 1, "May"); // Replace June with May
console.log("After splice():", months); // ["Jan", "Feb", "March", "April", "May"]
