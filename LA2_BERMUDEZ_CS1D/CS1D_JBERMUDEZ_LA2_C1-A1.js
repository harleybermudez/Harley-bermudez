/*1.Develop a program that stores the following information for each of the persona stated below:
Persona: 1. Student’s Information + 2 Classmate’s Student information
a. First Name, Middle Name, Last Name (e.g Juan Gamos Dela Cruz)
b. Birthdate
c. Birthplace (Barangay, City/Town, Country, Zip Code)
d. Address (Barangay, City/Town, Country, Zip Code)
e. Course and Year
f. Dream Job after graduation (aligned to ITCS Field)*/

// i used nested list to store information of persona and its classmates
const persona1 = {
    firstname: "Hanni",
    middlename: "Ngoc",
    lastname: "Pham",
    birthdate: "October 6, 2004",
    birthplace: {
        barangay: "Janlang",
        city:"Hanoi",
        country: "Vietnam",
        zipcode: "160000"
    },
    address: {
        barangay: "Janlang",
        city:"Hanoi",
        country: "Vietnam",
        zipcode: "160000"
    },
    course_year: "BSCS 3rd Year",
    dreamjob: "Cyber Security Software Engineer"
}
const classmate1 = {
    firstname: "Minji",
    middlename: "Ijmin",
    lastname: "Kim",
    birthdate: "May 7, 2004",
    birthplace: {
        barangay: "Janlang Din",
        city:"Chuncheon-Si",
        country: "South Korea",
        zipcode: "12402"
    },
    address: {
        barangay: "Janlang Din",
        city:"Chuncheon-Si",
        country: "South Korea",
        zipcode: "12402"
    },
    course_year: "BSCS 3rd Year",
    dreamjob: "Sofware Developer"
}
const classmate2 = {
    firstname: "Danielle",
    middlename: "June",
    lastname: "Marsh",
    birthdate: "May 7, 2004",
    birthplace: {
        barangay: "Janlang Din",
        city:"New Castle",
        country: "Australia",
        zipcode: "2267"
    },
    address: {
        barangay: "Janlang Din",
        city:"New Castle",
        country: "Australia",
        zipcode: "2267"
    },
    course_year: "BSCS 3rd Year",
    dreamjob: "Data Analysis"
}
//to print out i used + " " + to concatenate strings and use toUpperCase() ON EVERY object that needed to be uppercase.
console.log("PERSONA1: " + persona1.firstname.toUpperCase() + " " + persona1.middlename.toUpperCase() + " " + persona1.lastname.toUpperCase() + " was born on " + persona1.birthdate + " at " + persona1.birthplace.barangay.toUpperCase() + ", " + persona1.birthplace.city.toUpperCase() + ", " + persona1.birthplace.country.toUpperCase() + " " + persona1.birthplace.zipcode + ", and currently living at " + persona1.address.barangay.toUpperCase() + ", " + persona1.address.city.toUpperCase() + ", " + persona1.address.country.toUpperCase() + ", " + persona1.address.zipcode + ". " + persona1.firstname + " is taking up " + persona1.course_year + " and dreams to be a " + persona1.dreamjob + " after graduation.");

console.log("CLASSMATE1: " + classmate1.firstname.toUpperCase() + " " + classmate1.middlename.toUpperCase() + " " + classmate1.lastname.toUpperCase() + " was born on " + classmate1.birthdate + " at " + classmate1.birthplace.barangay.toUpperCase() + ", " + classmate1.birthplace.city.toUpperCase() + ", " + classmate1.birthplace.country.toUpperCase() + " " + classmate1.birthplace.zipcode + ", and currently living at " + classmate1.address.barangay.toUpperCase() + ", " + classmate1.address.city.toUpperCase() + ", " + classmate1.address.country.toUpperCase() + ", " + classmate1.address.zipcode + ". " + classmate1.firstname + " is taking up " + classmate1.course_year + " and dreams to be a " + classmate1.dreamjob + " after graduation.");

console.log("CLASSMATE2: " + classmate2.firstname.toUpperCase() + " " + classmate2.middlename.toUpperCase() + " " + classmate2.lastname.toUpperCase() + " was born on " + classmate2.birthdate + " at " + classmate2.birthplace.barangay.toUpperCase() + ", " + classmate2.birthplace.city.toUpperCase() + ", " + classmate2.birthplace.country.toUpperCase() + " " + classmate2.birthplace.zipcode + ", and currently living at " + classmate2.address.barangay.toUpperCase() + ", " + classmate2.address.city.toUpperCase() + ", " + classmate2.address.country.toUpperCase() + ", " + classmate2.address.zipcode + ". " + classmate2.firstname + " is taking up " + classmate2.course_year + " and dreams to be a " + classmate2.dreamjob + " after graduation.");


    /*[JUAN GAMOSO DELA CRUZ] was born [January 1, 2001] at [UPPER BONIFACIO, BAGUIO
    CITY, BENGUET, PHILIPPINES 2600], and currently living at [SAN NICOLAS, CANDON CITY,
    ILOCOS SUR, PHILIPPINES 2710]. [juan gamoso dela cruz] is taking up [bachelor of science in
    computer science] and dreams to be [Software Engineer] after graduation.*/