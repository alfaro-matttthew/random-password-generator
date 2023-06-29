// Assignment Code
var generateBtn = document.querySelector("#generate");

const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numberChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const specialChar = ["!", "#", "$", "%", "&","*", "?", "@", "^"];
var passwordPool = []

let passLength = prompt('How many characters does your password need to have?', 'Must be between 8 and 128 characters long');
let passLowerCase = confirm("Do you want to use lower case letters in your password?");
let passUpperCase = confirm("Do you want to use UPPER CASE in your password?");
let passNumber = confirm("Do you want to use numbers in your password?");
let passSpecialChar = confirm("Do you want to use special characters in your password?");

       function lengthPrompt() {
          if (passLength > 8 && passLength < 128) {
            lengthValue = true;
          }
          else {
            alert("Password Length Must Be Between 8 And 128 Characters Long!")
          }
        }

//--------Lower Case Function--------------------------------------------------------------------//


        function chooseLowerCase() {
          if (passLowerCase === true) {
            passwordPool.push(lowerCase);
            console.log(passwordPool);
          }
          else {
            
          }
        }
        
        chooseLowerCase();

//--------Lower Case Function--------------------------------------------------------------------//

//--------Upper Case Function--------------------------------------------------------------------//


        function chooseUpperCase() {
          if (passUpperCase === true) {
            passwordPool.push(upperCase);
            console.log(passwordPool);
          }
          else {
            
          }
        }
        
        chooseUpperCase();

//--------Upper Case Function--------------------------------------------------------------------//

//--------Number Function------------------------------------------------------------------------//


        function chooseNumber() {
          if (passNumber === true) {
            passwordPool.push(numberChar);
            console.log(passwordPool);
          }
          else {
            
          }
        }

        chooseNumber();

//--------Number Function------------------------------------------------------------------------//

//--------Special Character Function------------------------------------------------------------//


        function chooseSpecial() {
          if (passSpecialChar === true) {
            passwordPool.push(specialChar);
            console.log(passwordPool);
          }
          else {
            
          }
        }

        chooseSpecial();

//--------Special Character Function------------------------------------------------------------//

        function lowerCaseConfirm() {

        }

        function buildPassword() {
          if (lengthValue = true) {
            passwordPool.push()
          }
        }

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
