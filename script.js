// Assignment Code
// var generateBtn = document.querySelector("#generate");

const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numberChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const specialChar = ['!', '#', '$', '%', '&', '*', '?', '@', '^'];
var indexPool = [];
var passwordPool = [];

// STEP ONE//

let passLength = prompt('How many characters does your password need to have?', 'Must be between 8 and 128 characters long');

        //This if else function determines if the length is correct//
        if (passLength > 8 && passLength < 128) {
          lengthValue = true;
        }
        else {
          alert("Password Length Must Be Between 8 And 128 Characters Long!")
        } ;

// STEP TWO //

let passLowerCase = confirm("Do you want to use lower case letters in your password?");

        //If the confirm is true, then lower case letters are added to the indexPool//
        if (passLowerCase = true) {
          var passwordPool = lowerCase.concat(passwordPool);
        }

// STEP THREE //

let passUpperCase = confirm("Do you want to use UPPER CASE in your password?");

        //If the confirm is true, then upper case letters are added to the indexPool//
        if (passUpperCase = true) {
          var passwordPool = upperCase.concat(passwordPool);
        }

// STEP FOUR //

let passNumber = confirm("Do you want to use numbers in your password?");

        //If the confirm is true, then numbers are added to the indexPool//
        if (passNumber = true) {
          var passwordPool = numberChar.concat(passwordPool);
        }

// STEP FIVE //

let passSpecialChar = confirm("Do you want to use special characters in your password?");

        //If the confirm is true, then special characters are added to the indexPool//
        if (passSpecialChar = true) {
          var passwordPool = specialChar.concat(passwordPool);
        }

// STEP SIX //

        //If the lenght is correct, then it invokes the setLength function//
        if (lengthValue === true) {
          setLength();
        }

        //The setLength function generates random numbers equal to that which the user typed into the prompt//
        //These numbers will be used to select random strings from the passwordPool array//
        function setLength() {
          for (let step = 0; step < passLength; step++)
            indexPool.push(Math.floor(Math.random()*120)+8);
            makePassword();
        }

        console.log(indexPool);

        function makePassword() {
          for (let step = 0; step < passLength; step++)
          
          console.log('this is working');
        }

        console.log(passwordPool);


//--------WORKSPACE WORKSPACE WORKSPACE----------------------------------------------------------//


// let isBoss = confirm("Are you the boss?");
// alert(isBoss);

// console.log(lengthPrompt)

// window.prompt("How many characters must be included in the password?", "8 to 128 Characters Allowed");

// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);


// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
