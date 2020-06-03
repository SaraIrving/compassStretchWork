/*
We will receive a normal string of words 
separated with spaces as the input. 
Our job is to convert these strings 
into camel cased strings.

Create a function named camelCase that will convert a string 
to camel case, and return the result.
*/

/*
STRATEGY:
-take the characters in the string and loop them into an array
-only loop in characters that are not spaces
-if the character is preceeded by a space, convert it 
  to upper case before adding it to the array
-use .join to make a string out of the array 
*/

const camelCase = function(input) {
  let tempArray = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== " " && input[i-1] !== " "){
      tempArray.push(input[i]);
    } else if (input[i] !== " " && input[i-1] === " ") {
      tempArray.push((input[i].toUpperCase()));
    }
  }
  let camelCaseString = tempArray.join("");
  return camelCaseString;
};


//Tests Cases: 
console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));

/* Expected Output:
thisIsAString
loopyLighthouse
supercalifragalisticexpialidocious
*/
