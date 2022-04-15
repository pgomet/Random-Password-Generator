// Assignment code here
// Create a function to generate a password
function generatePassword() {
  var numberCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V","W", "X", "Y", "Z"];
  var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v","w", "x", "y", "z"];
  var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?"];

// Enter the character qualities
numberOfCharacters = prompt("Please choose between 8 - 128 characters.");
  if (numberOfCharacters < 8 || numberOfCharacters > 128) {
    return ("Please pick a valid number of characters.");
  } else if (isNaN(numberOfCharacters)) {
    numberOfCharacters = prompt("Please enter a valid number.");
  }
    else {
      alert("Your password will be " + numberOfCharacters + " characters long.");
    }

containsLowercase = confirm("Do you want your password to contain lowercase characters?");
  if (containsLowercase) {
    var addLowercase = alert("Your password will contain lowercase characters.");
  }
    else {
      alert("Your password will NOT contain lowercase characters.");
    }

containsUppercase = confirm("Do you want your password to contain uppercase characters?");
  if (containsUppercase) {
    var addUppercase = alert("Your password will contain uppercase characters.");
  }
    else {
      alert("Your password will NOT contain uppercase characters.");
    }

containsNumbers = confirm("Do you want your password to contain numbers?");
  if (containsNumbers) {
    var addNumbers = alert("Your password will contain numbers.");
  }
    else {
      alert("Your password will NOT contain numbers.");
    }

    

}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
