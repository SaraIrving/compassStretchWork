/*
Create a function named squareCode that will
 receive a message, and return the secret 
 square code version of the message. 
 */

 /*
 STRATEGY:
 -convert input into a string with no spaces
 -get the length of that string
 -get the root of that string 
 -nested loops? 
    - outer loop to go through the string with no spaces for root amount of times
    -inner loop to add every 8th character to a new string and then add a space at the end 
 */


const squareCode = function(message) {
  let spacesRemovedString = removeSpaces(message);
  let root = getSquareRoot(spacesRemovedString);
  let codedString = "";
  for (let i = 0; i < root; i++) {
    for (let j = 0; j < spacesRemovedString.length; j++) {
      if ((j-i) % root === 0) {
        if (codedString === undefined) {
          codedString = spacesRemovedString[j];
        } else {
          codedString += spacesRemovedString[j];
        }
      } 
    }
    codedString += " ";
  }
  return codedString;
};

//This funciton removes the spaces from a string and returns the new string 
function removeSpaces (input) {
  let noSpaceString = "";
  for (let i = 0; i < input.length; i ++) {
    if (input[i] !== " ") {
      if (noSpaceString === undefined) {
        noSpaceString = input[i];
      } else {
        noSpaceString += input[i];
      }
    }
  }
  return noSpaceString;
}

//This function takes the square root of a function and rounds it up
function getSquareRoot (input) {
  return Math.ceil(Math.sqrt(input.length));
}




console.log("Test removeSpaces: " + removeSpaces("if man was meant to stay on the ground god would have given us roots"));
console.log("Test getSquareRoot: " + getSquareRoot("ifmanwasmeanttostayonthegroundgodwouldhavegivenusroots"));
console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));


/*Expected Output:
clu hlt io  
fto ehg ee dd
hae and via ecy
imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau
*/