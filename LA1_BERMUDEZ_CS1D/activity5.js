/*strings 
1. Create a variable named favActorFirstName and store your favorite actor's first name.
2. Create a variable named favActorLastName and store their last name.
3. Concatenate the first and last names into a variable named fullName.
4. Create a variable named uppercase and store the capitalized version of your favorite
actor's name.
5. Create a variable named message and store a message like: "My favorite actor is
[FULL_NAME]". The name should be in uppercase.
6. Append the message to include "his best show is Silicon Valley".
7. Log all variables to the console using the code runner in VSCode.*/
favActorfirstName = "Ryan";
favActorlastName = "Reynolds";
fullName = favActorfirstName +" "+ favActorlastName; // i concatenated the first and last name to make a full name  
uppercase = fullName.toUpperCase(); // uppercase method to make letter uppercase
message = "`My favorite Actor Is " + uppercase + " his best movie is Deadpool"; // just added some strings to make a sentence.
console.log(fullName);
console.log(message);
