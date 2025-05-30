// Initial queue with 5 given custmer

let customerQueue = ['Elaine', 'Althea', 'Angelo', 'Lito', 'Engelbert'];

// Display queue with numbers
function showQueue() {
    console.log("\nCurrent Queue:");
    customerQueue.forEach((name, index) => {
        console.log(`${index + 1}. ${name}`); // Display each customer with their number
    });
}

//main function 
function startQueueSystem() {
    showQueue(); // Show initial queue 
// the main loop
    while (true) {
        // Get user choice
        let action = prompt(
            "Choose action:\n" +
            "1: Add customer\n" +
            "2: Service customer\n" +
            "3: Exit"
        );

        if (action === '3') {
            alert("System closed.");
            break;
        }

        if (action === '1') {
            // Add new customer
            let name = prompt("Enter customer name:");
            if (name) {
                customerQueue.push(name);
                alert(`${name} added as customer #${customerQueue.length}`);
            }
        }

        if (action === '2') {
            // Service customer
            let number = prompt("Enter number to service (1-" + customerQueue.length + "):");
            number = parseInt(number);
            
            if (number > 0 && number <= customerQueue.length) {
                let served = customerQueue.splice(number - 1, 1);
                alert(`Now serving: ${served}`);
            } else {
                alert("Invalid number!");
            }
        }

        showQueue(); // Show updated queue after all that^^^^
    }
}


startQueueSystem();