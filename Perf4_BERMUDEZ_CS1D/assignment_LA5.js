// Assignment: Implement a simple customer queue system using a hash table.
class CustomerQueue {
    constructor() {
        this.table = new Array(30).fill(null); 
        this.count = 0;
    }
    // Hash function to map customer name to a position in the table
    hash(name) {
        let total = 0;
        for (let char of name) {
            total += char.charCodeAt(0);
        }
        return total % 10;
    }
    // Add customer to queue
    addCustomer(name) {
        if (this.count >= 10) {
            alert("Queue is full!");
            return false;
        }
        let position = this.hash(name);
        // Find next empty spot if position is taken
        while (this.table[position] !== null) {
            position = (position + 1) % 10;
        }
        this.table[position] = name;
        this.count++;
        return position + 1;  // Return customer number
    }
    // Service customer by number
    serviceCustomer(number) {
        if (number < 1 || number > 10 || !this.table[number - 1]) {
            return null;
        }
        const customer = this.table[number - 1];
        this.table[number - 1] = null;
        this.count--;
        return customer;
    }
    // Show queue status
    showQueue() {
        console.log("\nCurrent Queue:");
        this.table.forEach((customer, index) => {
            if (customer) {
                console.log(`${index + 1}. ${customer}`);
            }
        });
    }
}
// Main program
function runQueue() {
    const queue = new CustomerQueue();
    
    // Add initial customers
    ['Elaine', 'Althea', 'Angelo', 'Lito', 'Engelbert'].forEach(name => {
        const number = queue.addCustomer(name);
        console.log(`Added ${name} at position ${number}`);
    });
    while (true) {
        queue.showQueue();
        const choice = prompt("1: Add customer\n2: Service customer\n3: Exit");
        if (choice === '3') break;
        if (choice === '1') {
            const name = prompt("Enter customer name:");
            if (name) {
                const number = queue.addCustomer(name);
                if (number) alert(`Customer number: ${number}`);
            }
        }
        if (choice === '2') {
            const number = prompt("Enter number to service:");
            const served = queue.serviceCustomer(Number(number));
            if (served) {
                alert(`Serving: ${served}`);
            } else {
                alert("Invalid number!");
            }
        }
    }
}
runQueue();