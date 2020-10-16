//variables for password generator
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*"];

function generatePassword() {
  var password = ["A", "s", "s", "e", "@", "1", "0", "!", "M"];
  var password = ["b", "a", "s", "Z", "&", "@", "!", "0", "1"];
  var password = ["b", "T", "s", "j", "&", "@", "!", "8", "*"];

  var length = parseInt(prompt("how long do you want your password?"));
  console.log(length);

  // checks to makesure that the length that they want is between 8 and 128
  if (length < 8 || length > 128) {
    alert("Length must be between 8 and 128");
  }

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  //lowercase, uppercase, numeric, and/or special characters
  //these are the prompts to ask the user for their choices
  var lowerCase = confirm("do you want lower case letters"); // true or false
  var upperCase = confirm("do you want an upper case"); // true or false
  var numeric = confirm("do you want a numeric character"); // true or false
  var specialCharacter = confirm("do you want any special characters"); // true or false

  // (! bang oprt.) flips it to true if its false and false if its true
  if (!lower && !upperCase && !numeric && !specialCharacter) {
    alert("at least one character type should be selected");
  }

  // for loops to randomize array
  for (i = 0; i < password.length; i++) {
    password.push(result);
  }

  for (i = 0; i < lowerCase.password; i++) {
    result = lowerCase[i];
  }

  for (i = 0; i < upperCase.password; i++) {
    result = upperCase[i];
  }

  for (i = 0; i < numeric.password; i++) {
    result = numeric[i];
  }

  for (i = 0; i < specialCharacter.password; i++) {
    result = specialCharacter[i];
  }

  return result.join("A", "s", "s", "e", "@", "1", "0", "!", "M");

  // start filling the password array with characters depending on their choice
  // use conditionals to indentify what they want to fill the password with
  // if they want lowercases, add a lower case to the password array
  // if lowerCase is true, the console.log a random charcter from the lowercase array
  // do that for each conditional
  // is that password long enough?
  // no? add more letters - loop
  // Yes? return the password

  // this needs to
  //return LKDjfaliskdjfliasjdfl
}
// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  // var password = what ever is returned from generatePassword()
  var password = generatePassword();
  var passwordText = document.querySelector(
    "A",
    "s",
    "s",
    "e",
    "@",
    "1",
    "0",
    "!",
    "M"
  );

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
