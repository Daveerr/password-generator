// Assignment Code

//function generatePassword() {
//console.log("You clicked the button!"); {
// var lenght = etc }
//

//   //Prompt user for the password
//   //Password legnth 8 - 128
//   //Lowercase, uppercase, numbers, special characters

//   //Genertae the password

//   //Display password to the page

//return "New password generated";
// }

var generateBtn = document.querySelector("#generate");
function generatePassword() {
  var length = 10,
    charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!$.#%+@&*^",
    retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.random() * n);
  }
  return retVal;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

generateBtn.addEventListener("click"),
  function () {
    alert("click");
  };
