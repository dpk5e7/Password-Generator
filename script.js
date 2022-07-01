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


// My code goes here.
function generatePassword() {

  let newPassword = "";
  // Prompt for password length and convert the string to an integer.  If it's not an integer, it will return "NaN" (which happens to be of type 'number')
  let passwordLength = parseInt(prompt("How many characters would you like your password to be?\nPlease enter a number at least 8 characters long and no more than 128 characters."));

  // Go on if the user specified a valid password length
  if (passwordLength >= 8 && passwordLength <= 128) {
    // Ask the user if they want to include the different types of characters.  The confirm dialog returns "true" if the user click "OK" and "false" if the user clicks "Cancel".
    let includeLowercase = confirm("Would you like to include lowercase letters?\nPress OK for Yes and Cancel for No.");
    let includeUppercase = confirm("Would you like to include uppercase letters?\nPress OK for Yes and Cancel for No.");
    let includeNumbers = confirm("Would you like to include numbers?\nPress OK for Yes and Cancel for No.");
    let includeSpecial = confirm("Would you like to include special characters?\nPress OK for Yes and Cancel for No.");

    // Go on if the user has picked at least one type of character.  Add the characters to be included to an initially empty string.
    if (includeLowercase || includeUppercase || includeNumbers || includeSpecial) {
      let possibleCharacters = "";
      if (includeLowercase) {
        possibleCharacters += "abcdefghijklmnopqrstuvwxyz";
      }
      if (includeUppercase) {
        possibleCharacters += "abcdefghijklmnopqrstuvwxyz".toUpperCase();
      }
      if (includeNumbers) {
        possibleCharacters += "0123456789";
      }
      if (includeSpecial) {
        possibleCharacters += "!@#$%^&*()";
      }
      
      // Randomly select a character from the possible characters string for passwordLength times to generate a random password.
      for (let i = 0; i <= passwordLength; i++) {
        newPassword += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
      }
    }
    else {
      alert("You have to pick at least one type of character.\nPlease try again.");
    }
  }
  else {
    alert("You did not enter a valid length.\nPlease try again.");
  }

  return newPassword;  // Note: An empty string should be returned if the user didn't provide adequate parameters.
}