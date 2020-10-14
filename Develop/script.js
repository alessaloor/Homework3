
var lowerCase = ["a","b",]
var upperCase = ["A",]
var numeric = ["1"]
var specialCharacter = ["!","@","#","$","%","^","&","*",]



function generatePassword() {
  var length = parseInt(prompt("how long do you want your password?"));
  console.log(length)

  if (length < 8 || length > 128) {

    alert("Length must be between 8 and 128");

    writePassword();
  }
 
  //lowercase, uppercase, numeric, and/or special characters
  var lowerCase = confirm("do you want lower case letters");
  var upperCase = confirm("do you want an upper case");
  var numeric = confirm("do you want a numeric character");
  var specialCharacter = confirm("do you want any special characters");
  
  // (! bang oprt.) flips it to true if its false and false if its true 
  if (!lower && !upperCase && !numeric && !specialCharacter){

    alert("at least one character type should be selected");
    
    writePassword();
  
  }
  
  





}





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
