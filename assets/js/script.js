var writePassword = function() {
   var promptSelectLength = window.prompt("How many characters would you like your password to contain?")
   if (promptSelectLength < 8) {
       window.alert("Your password must contain at least 8 characters.")
   } else if (promptSelectLength > 128) {
       window.alert("Your password cannot contain more than 128 characters.")
   } else (promptSelectLength != Numeric(num)) ;{
       window.alert("You must enter a number.")
   }
  
}

// Assignment Code end

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// list out steps in order to define function