// Assignment Code

var lowerCaseLi = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseLi = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberCharLi = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharLi = ['!', '#', '$', '%', '&', '*', '?', '@', '^'];

var generateBtn = document.querySelector("#generate");
var passwordArray = [];
let passwordObj = {};
var finalPassword = [];
var draftPassword = [];

var noUpper = [];
var noLower = [];
var noNumber = [];
var noSpecial = [];


function buildPass() {

  passLength = prompt("How many characters would you like in the password?");

   if (passLength < 8 || passLength > 128) {
    alert("Password Length Must Be Between 8 And 128 Characters Long!");
    buildPass();
    }
    else {
      passwordObj.upperCase = confirm("Would you like to use UPPER CASE letters?");
      passwordObj.lowerCase = confirm("Would you like to use lower case letters?");
      passwordObj.numbersChar = confirm("Would you like to use numbers?");
      passwordObj.specialChar = confirm("Would you like to use special characters?");
      console.log(passwordObj);
      buildArray();
      } ;
}

function buildArray() {
  if (passwordObj.upperCase == true) {
    passwordArray = passwordArray.concat(upperCaseLi);
  }
  if (passwordObj.lowerCaseCase == true) {
    passwordArray = passwordArray.concat(lowerCaseLi);
  }
  if (passwordObj.numbersChar == true) {
    passwordArray = passwordArray.concat(numberCharLi);
  }
  if (passwordObj.specialChar == true) {
    passwordArray = passwordArray.concat(specialCharLi);
  }
  console.log(passwordArray);
  chooseChar();
}

function chooseChar() {
  for (let step = 0; step < passLength; step++) {
  draftPassword.push(passwordArray[Math.floor(Math.random() * passwordArray.length)]);
  
  }
  checkErrors();
}


function checkErrors() {
  if (passwordObj.upperCase == true) {
    noUpper = true;
    for (let i = 0; i < upperCaseLi.length; i++) {
    if (draftPassword.includes(upperCaseLi[i])) {
      noUpper = false;
    }
    }
  }
  if (passwordObj.lowerCase == true) {
    noLower = true;
    for (let i = 0; i < lowerCaseLi.length; i++) {
    if (draftPassword.includes(lowerCaseLi[i])) {
      noLower = false;
    }
    }
  }
  if (passwordObj.numbersChar == true) {
    noNumber = true;
    for (let i = 0; i < numberCharLi.length; i++) {
    if (draftPassword.includes(numberCharLi[i])) {
      noNumber = false;
    }
    }
  }
  if (passwordObj.specialChar == true) {
    noSpecial = true;
    for (let i = 0; i < specialCharLi.length; i++) {
    if (draftPassword.includes(specialCharLi[i])) {
      noSpecial = false;
    }
    }
  // }
  // if (noUpper || noLower || noNumber || noSpecial) {
  //   draftPassword = [];
  //   chooseChar();
  // }
  // else {
  renderPassword();
  }
}

function renderPassword() {
  var finalPassword = draftPassword.join("");
  document.getElementById("password").value = finalPassword;
}

generateBtn.addEventListener('click', function buttonPress() {
  buildPass();
})














































// const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
// const numberChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// const specialChar = ['!', '#', '$', '%', '&', '*', '?', '@', '^'];
// var indexPool = [];
// var passwordPool = [];

// STEP ONE//

// let passLength = prompt('How many characters does your password need to have?', 'Must be between 8 and 128 characters long');

//         //This if else function determines if the length is correct//
//         if (passLength > 8 && passLength < 128) {
//           lengthValue = true;
//         }
//         else {
//           alert("Password Length Must Be Between 8 And 128 Characters Long!")
//         } ;

// // STEP TWO //

// let passLowerCase = confirm("Do you want to use lower case letters in your password?");

//         //If the confir m is true, then lower case letters are added to the indexPool//
//         if (passLowerCase = true) {
//           var passwordPool = lowerCase.concat(passwordPool);
//         }

// // STEP THREE //

// let passUpperCase = confirm("Do you want to use UPPER CASE in your password?");

//         //If the confirm is true, then upper case letters are added to the indexPool//
//         if (passUpperCase = true) {
//           var passwordPool = upperCase.concat(passwordPool);
//         }

// // STEP FOUR //

// let passNumber = confirm("Do you want to use numbers in your password?");

//         //If the confirm is true, then numbers are added to the indexPool//
//         if (passNumber = true) {
//           var passwordPool = numberChar.concat(passwordPool);
//         }

// // STEP FIVE //

// let passSpecialChar = confirm("Do you want to use special characters in your password?");

//         //If the confirm is true, then special characters are added to the indexPool//
//         if (passSpecialChar = true) {
//           var passwordPool = specialChar.concat(passwordPool);
//         }

// // STEP SIX //

//         //If the lenght is correct, then it invokes the setLength function//
//         if (lengthValue === true) {
//           setLength();
//         }

//         //The setLength function generates random numbers equal to that which the user typed into the prompt//
//         //These numbers will be used to select random strings from the passwordPool array//
//         function setLength() {
//           for (let step = 0; step < passLength; step++)
//             indexPool.push(Math.floor(Math.random()*120)+8);
//             makePassword();
//         }

//         console.log(indexPool);

//         function makePassword() {
//           for (let step = 0; step < passLength; step++)
          
//           console.log('this is working');
//         }

//         console.log(passwordPool);


// //--------WORKSPACE WORKSPACE WORKSPACE----------------------------------------------------------//

























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
