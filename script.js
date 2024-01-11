var charLength = 8;
var multiSelection = '';
var upperCaseArr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerCaseArr = 'abcdefghijklmnopqrstuvwxyz';
var specialCharacterArr = '!@#$%^&*()-+=[]{}|,.<>?/';
var numSensitiveArr = '0123456789';


// Assignment Code
var generateBtn = document.querySelector('#generate');

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// Write password to the #password input
function writePassword() {
	var prompts = getPrompts(); {
	var passwordText = document.querySelector('#password');

		if(prompts) {
	var newPass = generatePassword();
	passwordText.value = newPass;
		} else {
			passwordText.value = "";
		}
	}


// password generate on prompts
function generatePassword() {
	var password = "";
	for(var i =0; i < charLength; i++) {
		var randomIndex = Math.floor(Math.random() * multiSelection.length)
		password = password + multiSelection[randomIndex];
	}
	return password;
}

function getPrompts(){
	multiSelection = '';
	charLength = parseInt(prompt("How many characters do you want your password to be? (8-128"));

if (isNaN(charLength) || charLength < 8 || charLength > 128) {
  	alert("Your desired input does not meet the criteria. Please try again.");
	return false;
}
if (confirm("Would you like uppercase letters in your password?")) {
	multiSelection = multiSelection.concat(upperCaseArr);
}
if (confirm("Would you like lowercase letters in your password?")) {
	multiSelection = multiSelection.concat(lowerCaseArr);
}
if (confirm("Would you like numbers in your password?")) {
	multiSelection = multiSelection.concat(numSensitiveArr);
}
if (confirm("Would you like special characters in your password?")) {
	multiSelection = multiSelection.concat(specialCharacterArr);
}
return true;
  		}
}