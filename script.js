// Assignment Code
var alphaDefault="abcdefghijklmnopqrstuvwxyz";
var alphaCaps="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specChars="?/.!@#$%^&*<>(){}[]-";
var numbers="1234567890";
var generateBtn = document.querySelector("#generate");

function getRandomChar(myString) {
var randomChar= myString.charAt((Math.floor(Math.random()*myString.length)));
return randomChar;
}
//passing a different string each time//
  console.log (getRandomChar(alphaDefault));
  
  console.log (getRandomChar(alphaCaps));

  console.log (getRandomChar(specChars));

  console.log (getRandomChar(numbers));

  



function generatePassword () {
  var passLength= Number(prompt ("Password Extent: Please enter a number between 8 and 128"));
  while(passLength <=7 || passLength >=129) {
    alert("Password length must be between 8 and 128 characters  in order to continue");
    var  passLength = Number(prompt("Password extent: Enter a number between 8 and 128"))

  }
window.alert("Your password will be " + passLength + " characters long");

  // return "please try again";

  var lowercase= (confirm ("Would you like lowercase characters?")) 
   console.log (lowercase); 
  if (lowercase ==true){
    window.alert("Your password will contain lowercase characters")
  }

  var specChar= (confirm ("Would you like special characters?")) 
   console.log (specChar); 
  if (specChar ==true){
    window.alert("Your password will contain special characters")
  }

  var numb= (confirm ("Would you like numbers?")) 
  console.log (numb); 
 if (numb ==true){
   window.alert("Your password will contain numbers")
 }

 var uppercase= (confirm ("Would you like uppercase characters?")) 
   console.log (uppercase); 
  if (uppercase ==true){
    window.alert("Your password will contain uppercase characters")
  }

  var bigSad = "";
  
  for (var i = 0; i <passLength; i++ ) {
    var randomDigit = Math.floor (Math.random ()*4)
    
 if (randomDigit == 0 && lowercase ==true){
   var randomGen = getRandomChar(alphaDefault);
   bigSad = bigSad.concat(randomGen);
    } else if (randomDigit ==0 && lowercase == false) {
      i--;
    }
    
 if (randomDigit == 1 && uppercase ==true){
      var randomGen = getRandomChar(alphaCaps);
      bigSad = bigSad.concat(randomGen);
       }  else if (randomDigit ==1 && uppercase == false) {
        i--;
      }
       
       
 if (randomDigit == 2 && specChar ==true){
        var randomGen = getRandomChar(specChars);
        bigSad = bigSad.concat(randomGen);
         } else if (randomDigit ==2 && specChar == false) {
          i--;
        }
         
         
if (randomDigit == 3 && numb==true){
          var randomGen = getRandomChar(numbers);
          bigSad = bigSad.concat(randomGen);
           } else if (randomDigit ==3 && numb == false) {
            i--;
          }

  
  
} 
console.log(bigSad.length);
return bigSad;
}

  


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
