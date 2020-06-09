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

// Four character types options writen as strings
var characterLowerCase = 'abcdefghijklmnopqrstuvwxyz';
var characterUpperCase = characterLowerCase.toUpperCase();
var characterNumber = '0123456789';
var characterSpecialCharacter = '!"#$%&()\'*+,-./:<>=?@[]\\^_`{}|~';

// This function retrieves input for user input of password length
var selectCharacterLength = function() {
  var passwordLength = window.prompt("Choose length of password. Must be 8-128 characters long.")
  // If input is outside of 8<x<128 then the user is prompted to re-enter
  if (passwordLength < 8 || passwordLength > 128) {
    alert("You must enter a number between 8-128.");
    selectCharacterLength();
  }
  // Return acceptable input to function
  return passwordLength;
}
 
// This function holds a series of four character type options to be confirmed by the user
function selectCharacterTypes() {
  // This empty string will hold the 1-4 chosen character types
  var selectionPool = '';
  // Option to include lowercase
  var selectLowerCase = window.confirm("Would you like to include lowercase characters in your password?")
  console.log(selectLowerCase);
  if (selectLowerCase == true) {
    // If true, concatenate the string of characterLowerCase to the selectionPool string
    selectionPool += characterLowerCase;
    console.log("lowercase " + selectLowerCase);
  }

  // Option to include uppercase
  var selectUpperCase = window.confirm("Would you like to include UPPERCASE characters in your password?")
  console.log(selectUpperCase);
  if (selectUpperCase == true) {
    // If true, concatenate the string of characterUpperCase to the selectionPool string
    selectionPool += characterUpperCase;
    console.log("uppercase " + selectUpperCase);
  }

  // Option to include integer
  var selectNumber = window.confirm("Would you like to include numbers (123) in your password?")
  console.log(selectNumber);
  if (selectNumber == true) {
    // If true, concatenate the string of characterNumber to the selectionPool string
    selectionPool += characterNumber;
    console.log("number " + selectNumber);
  }

  // Option to include special characters
  var selectSpecialCharacter = window.confirm("Would you like to include special characters (#@*) in your password?")
  console.log(selectSpecialCharacter);
  if (selectSpecialCharacter == true) {
    selectionPool += characterSpecialCharacter;
    // If true, concatenate the string of characterSpecialCharacter to the selectionPool string
    console.log("special characters " + selectSpecialCharacter);
  }

  // In the case where the user did not make a selection, leaving an empty string
  if (selectionPool === '') {
    alert("You must select at least one or more of the four options for password.")
    // use recursive funtion
    selectCharacterTypes();
  }
  // Return the populated string to selectCharacterTypes()
  return selectionPool;
}

// This function is called by the writePassword()
function generatePassword() {
  // Variable that holds length of password
  var passwordLength = selectCharacterLength();
  // Variable that holds selected character types
  var chosenCharacterPool = selectCharacterTypes();
  console.log("The password will have " + passwordLength + " characters randomised from " + chosenCharacterPool);
  // Variable that holds the concatenated string after random selection
  var password = '';
  // Loop with set conditions to select one character, repeating until passwordLength is met
  for (i = 0; i < passwordLength; i++) {
    // Variable that holds a single character randomly picked within the range of chosenCharacterPool
    var index = Math.floor(Math.random() * (chosenCharacterPool.length -1));
    // Password is compiled here
    password += chosenCharacterPool[index];
  }
  console.log(password.length);
  // Return the password to function
  return password;
}

