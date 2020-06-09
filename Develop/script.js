// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// var characterLowerCase = 'abcdefghijklmnopqrstuvwxyz';
// var characterUpperCase = characterLowerCase.toUpperCase();
// console.log(characterUpperCase[2]);


// var characterLowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// var characterUpperCase = [];
// for (i = 0; i < characterLowerCase.length; i++) {
//   characterUpperCase[i] = characterLowerCase[i].toUpperCase();
// };


// userInput = [true, false, true, false]
// var result = ''
// if userInput[0] == true {
//     result += characterLowerCase;
// };
// if userInput[1] == true {
//     result += characterUpperCase;
// };  

// var userSelectionPrompts = function() {
//   var passwordLength = window.prompt("Choose length of password. Must be 8-128 characters long.")
//   if (passwordLength > 8 && passwordLength < 128) {
//     console.log("the user has entered " + passwordLength);
//   } else {
//     alert("You must enter a number between 8-128.");
//     userSelectionPrompts();
//   }

  var selectCharacterLength = function() {
    var passwordLength = window.prompt("Choose length of password. Must be 8-128 characters long.")
    if (passwordLength < 8 || passwordLength > 128) {
      alert("You must enter a number between 8-128.");
      selectCharacterLength();
    }
    return passwordLength;
  }
  
 
  
  
  function selectCharacterTypes() {
    var selectionPool = '';
  var selectLowerCase = window.confirm("Would you like lowercase characters in your password?")
  console.log(selectLowerCase);
  if (selectLowerCase == true) {
    selectionPool += characterLowerCase;
    console.log("lowercase " + selectLowerCase);
  }

  var selectUpperCase = window.confirm("Would you like UPPERCASE characters in your password?")
  console.log(selectUpperCase);
  if (selectUpperCase == true) {
    selectionPool += characterUpperCase;
    console.log("uppercase " + selectUpperCase);
  }

  var selectNumber = window.confirm("Would you like to have numbers in your password?")
  console.log(selectNumber);
  if (selectNumber == true) {
    selectionPool += characterNumber;
    console.log("number " + selectNumber);
  }

  var selectSpecialCharacter = window.confirm("Would you like to have special characters (#@*) in your password?")
  console.log(selectSpecialCharacter);
  if (selectSpecialCharacter == true) {
    selectionPool += characterSpecialCharacter;
    console.log("special characters " + selectSpecialCharacter);
  }

  if (selectionPool === '') {
    alert("You must select at least one or more of the 4 options for character types.")
    selectCharacterTypes();
  }
  return selectionPool;
  }



// var userSelectionPrompts = function() {
//   var passwordLength = window.prompt("Choose length of password. Must be 8-128 characters long.")
//   if (passwordLength > 8 && passwordLength < 128) {
//     passwordLength = false;
//     console.log("the user has entered " + passwordLength);
//     alert("You must enter a number between 8-128.");
//     userSelectionPrompts();
//   } else {
//     // console.log("the user has entered " + passwordLength);
//     return passwordLength;
//   }
// }
  
//   var confirmLowerCase = window.confirm("Would you like your password to include lower case letters?");
//   if (confirmLowerCase) {
  
// }
// }

var characterLowerCase = 'abcdefghijklmnopqrstuvwxyz';
var characterUpperCase = characterLowerCase.toUpperCase();
var characterNumber = '0123456789';
var characterSpecialCharacter = '!"#$%&()\'*+,-./:<>=?@[]\\^_`{}|~';

// var characterTypeChoice = [
//   { 
//     name: "lowercase",
//     list: randomNumber(0, characterLowerCase.length)
//   },
//   {
//     name: "UPPERCASE",
//     list: randomNumber(0,characterUpperCase.length)
//   },
//   {
//     name: "Number",
//     list: randomNumber(0,characterNumber.length)
//   },
//   {
//     name: "Sepcial Characters",
//     list: randomNumber(0, characterSpecialCharacter.length)
//   }
// ];

// for (var i = 0; i < characterTypeChoice.length; i++) {

// }


function generatePassword() {
  var passwordLength = selectCharacterLength();
  var chosenCharacterPool = selectCharacterTypes();
  console.log(passwordLength + " with " + chosenCharacterPool);
  var password = '';
  for (i = 0; i < passwordLength; i++) {
    var index = Math.floor(Math.random() * (chosenCharacterPool.length -1));
    password += chosenCharacterPool[index];
  }
  console.log(password.length);
return password;
}