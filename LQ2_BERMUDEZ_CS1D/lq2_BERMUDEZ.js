// GETTING the inputs 
let name = prompt("Enter your Name:");
let address = prompt("Enter your Address:");
let age =prompt("Enter your Age:");
let classRole = prompt("Enter your Class Role (Officer, Student, Teacher):");
let course = prompt("Enter your Course (BSCS, BSM, BAEL):");
if (course === "BSCS" || course === "BSM" || course === "BAEL") {// condition using stirct equality to detect the course and role
    if (classRole === "Officer") {
        alert(`Welcome Officer of ${course}`);
    } else if (classRole === "Student") {
        alert(`Welcome Student of ${course}`);
    } else if (classRole === "Teacher") {
        alert(`Welcome Teacher of ${course}`);
    } else { 
        alert("Class Role not recognized. Loging in as Guest.");
        classRole = "Guest";
    }
    let iteration = (age / 4);// fists it divides the age
    for (let i = 0; i < iteration; i++) {//then iterates it, my age is 17 it will iterate 4 times
        console.log(`Name: ${name}, Iteration: ${i + 1}`);
    }
} else { // the fallback code if any inputs are not recognize 
    alert("Invalid Course.Restart.");
}
