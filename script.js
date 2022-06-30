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
  let passwordLength = parseInt(prompt("How many characters would you like your password to be?\nPlease enter a number at least 8 characters long and no more than 128 characters."));

  if (passwordLength >= 8 && passwordLength <= 128) {
    let includeLowercase = confirm("Would you like to include lowercase letters?\nPress OK for Yes and Cancel for No.");
    let includeUppercase = confirm("Would you like to include uppercase letters?\nPress OK for Yes and Cancel for No.");
    let includeNumbers = confirm("Would you like to include numbers?\nPress OK for Yes and Cancel for No.");
    let includeSpecial = confirm("Would you like to include special characters?\nPress OK for Yes and Cancel for No.");

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

  return newPassword;
}