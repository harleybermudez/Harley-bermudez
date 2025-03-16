// Prompt user to input the max limit of loops
let maxLimit = Number(prompt("Enter the Limit of the Double Loop:"));


for (let i = 0; i <= maxLimit; i++) { //outer loop
    for (let j = 0; j <= maxLimit; j++) {//inner loop
        let addedValue = i + j; // Calculate added value by addin i and j
        console.log(`[${i}] [${j}] Added value is ${addedValue}`); 
    }
}
