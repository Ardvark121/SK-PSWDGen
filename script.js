// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  prompt;

  passwordText.value = password;
}

function generatePassword() {
  var Characters =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercase = prompt("do you want to add lowercase", "yes or no");
  if (lowercase == "no") {
    Characters = Characters.replace("abcdefghijklmnopqrstuvwxyz", "");
  }
  var uppercase = prompt("do you want to add uppercase", "yes or no");
  if (uppercase == "no") {
    Characters = Characters.replace("ABCDEFGHIJKLMNOPQRSTUVWXYZ", "");
  }
  var numbers = prompt("do you want to add numbers", "yes or no");
  if (numbers == "no") {
    Characters = Characters.replace("123456789", "");
  }
  var special = prompt("do you want to add special", "yes or no");
  if (special == "no") {
    Characters = Characters.replace("!@#$%^&*()", "");
  }
  var passwordgen = "";
  var passwordLength = prompt("choose a number 8-128", "#");
  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * Characters.length);
    passwordgen += Characters.substring(randomNumber, randomNumber + 1);
  }
  return passwordgen;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
