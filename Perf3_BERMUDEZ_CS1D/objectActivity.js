let car = {
    type: "Sedan",
    model: "Corolla",
    color: "Red"
};
console.log("Type of 'car' object:", typeof car); // logs sedan
//updating the property 
car.type = "Toyota";
console.log("Updated 'car' object:", car); // logs the object with the updated property
//mew property
car.wheels = 4;
console.log("Updated 'car' object with wheels:", car); // logs all the properties includinng the new one

