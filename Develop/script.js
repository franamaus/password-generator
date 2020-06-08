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

// var characterNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// var characterSpecial = ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "\\", "[", "]", "^", "_", "`", "{", "}", "|", "~"];

// userInput = [true, false, true, false]
// var result = ''
// if userInput[0] == true {
//     result += characterLowerCase;
// };
// if userInput[1] == true {
//     result += characterUpperCase;
// };  

var userSelectionPrompts = function() {
  var passwordLength = window.prompt("Choose length of password. Must be 8-128 characters long.")
  if (passwordLength > 8 && passwordLength < 128) {
    console.log("the user has entered " + passwordLength);
    return true;
  } else {
    alert("You must enter a number between 8-128.");
    userSelectionPrompts();
  }
  
}
  
//   var confirmLowerCase = window.confirm("Would you like your password to include lower case letters?");
//   if (confirmLowerCase) {
  
// }
// }


function generatePassword() {
  userSelectionPrompts();
}