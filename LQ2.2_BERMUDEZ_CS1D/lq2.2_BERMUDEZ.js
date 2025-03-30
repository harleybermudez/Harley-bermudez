//1.getti
let user_name = prompt("Enter your username:");//getting inputs
let user_password = prompt("Enter your password:");
const my_password = "ble_ble_ble_blu_blu_blu_123"; // sample stored password
if (user_password === stored_password) {//see if entered password matthc 
    alert(`Welcome ${user_name}`);
} else {
    alert("Maybe Username or Password is Invalid or Does not Match");// if not matched
}
//2.
let dog_breed = prompt("Enter a dog breed:");// jay lab quiz attuy sir ahh
let print_count =prompt("How many times should it be printed?");
for (let i = 0; i < print_count; i++) {
    console.log(`Dog Breed: ${dog_breed}`);
}
//3.
console.log("Price list");// showing the price
console.log("A. Pepsi Cola - Php 30.00");
console.log("B. Coca Cola - Php 35.00");
console.log("C. Apple (per kg) - Php 100.00");
console.log("D. Orange (per kg) - Php 120.00");
console.log("E. Hotdogs (per kg) - Php 180.00");
//ask for item and how many
let item_choice = prompt("Enter the letter of your chosen item (A-E):").toUpperCase();
let quantity = prompt("Enter the quantity to be ordered:");
let price;
switch (item_choice) { // will switch until the valid case 
    case "A":
        price = 30.00;// then multiply the price to the quantitty
        alert(`You selected Pepsi Cola. Total Price: Php ${price * quantity}`);
        break;
    case "B":
        price = 35.00;
        alert(`You selected Coca Cola. Total Price: Php ${price * quantity}`);
        break;
    case "C":
        price = 100.00;
        alert(`You selected Apple. Total Price: Php ${price * quantity}`);
        break;
    case "D":
        price = 120.00;
        alert(`You selected Orange. Total Price: Php ${price * quantity}`);
        break;
    case "E":
        price = 180.00;
        alert(`You selected Hotdogs. Total Price: Php ${price * quantity}`);
        break;
    default://the default case if input is not a-e
        alert("Invalid choice! Please enter a valid letter (A-E).");
}
