/*comparison or relational opereator
Create a variable named firstFavNumb and store your favorite number.
2. Create a variable named secondFavNumb and store your second favorite number.
3. Perform the following checks:
▪ Greater than
▪ Less than
▪ Greater than or equal to
▪ Less than or equal to
▪ Strict equality (===)
▪ Loose equality (==)
▪ Strict inequality (!==)
▪ Loose inequality (!=)
4. Log the results of each comparison to the console using the code runner in VSCode.*/
firstFavNumb =34;
secondFavNumb =35;

greaterthan = (firstFavNumb > secondFavNumb); //it will chechk if the firstnum is greater thn the second num
lessthan = (firstFavNumb < secondFavNumb);//same as above but it will chechk if its less than
greaterthan_or_equal_to = (firstFavNumb >= secondFavNumb); //will return true if first num has same value or bigger than second num
lessthan_or_equal_to = (firstFavNumb <= secondFavNumb);// same as above but will reurn true if less than
strict_equality = (firstFavNumb === secondFavNumb);// will only reuturn true if both values are same and their data type.
loose_equality = (firstFavNumb == secondFavNumb);// same as strict equality but this time doesnt have to be tha same data type 
strict_inequality = (firstFavNumb !== secondFavNumb);// in here values should shouuld be greaterthan or lessthan cannot be equal 
loose_ineguality = (firstFavNumb != secondFavNumb);//same but this time it can be equal
console.log(greaterthan);
console.log(lessthan);
console.log(greaterthan_or_equal_to);
console.log(lessthan_or_equal_to);
console.log(strict_equality);
console.log(loose_equality);
console.log(strict_inequality);
console.log(loose_ineguality);
