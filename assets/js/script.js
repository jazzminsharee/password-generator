// Assignment Code 
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialCharacters = "!@#$%^&*()";

var passwordCharSet = ""

var generateBtn = document.querySelector("#generate");
    
var generatePassword = function() {
// 1. Prompt the user for the password criteria.
    //     a. password length between 8 and 128
    //     b. lowercase, uppercase, numbers, special characters 
    
        var promptSelectLength = window.prompt("How many characters would you like your password to contain?")
        if (promptSelectLength < 8) {
            window.alert("Your password must contain at least 8 characters.")
        } else if (promptSelectLength > 128) {
            window.alert("Your password cannot contain more than 128 characters.")
        } else if (promptSelectLength >= 8 && promptSelectLength <= 128) {
            var isLower = window.confirm("Would you like your password to contain lowercase letters?");
            if (isLower) {
                passwordCharSet = passwordCharSet + lowercase
        } 
            var isUpper = window.confirm("Would you like your password to contain uppercase letters?");
            if (isUpper) {
                passwordCharSet = passwordCharSet + uppercase
            }
            var isNumber = window.confirm("Would you like your password to contain numbers?");
            if (isNumber) {
                passwordCharSet = passwordCharSet + numbers
        } 
            var isSpecial = window.confirm("Would you like your password to contain special characters?");
            if (isSpecial) {
                passwordCharSet = passwordCharSet + specialCharacters
            } 
            var result = ""
        for (var i = 0; i < promptSelectLength; i++) {
            result += passwordCharSet.charAt(Math.floor(Math.random() * passwordCharSet.length));

        }
        return result;
    }
        else {
            window.alert("You must enter a number.")
        }
        
        // 2 Validate input 
        // 3 Generate password based on criteria
        // 4 Display generated password to the page
        
}
            
        
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// list out steps in order to define function













    
        
