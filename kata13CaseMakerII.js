/*


Create a function named makeCase that will receive 
an input string and one or more casing options.
 Return a new string that is formatted based on casing options:

Precedence of each of the casing styles are as follows,
 values higher in the list should be processed first:

    camel, pascal, snake, kebab, title
    vowel, consonant
    upper, lower

Our function should be able to handle all of these cases. 
*/

/* 
Strategy:
-make functions that do the coversion to each case
-figure out how to deal with when the case parameter
  contains an array???
    -probably create a loop of the array that 
      applies the subsequent functions??
-figure out how to deal with the heirarchy of 
cases to apply???
    -arrange the arrays in order of precedence 
      before applying them 
*/

/*
Limits of the code:
-potentially using string or not-string could result in errors if
  the caseType parameter was fed an argument other than a string 
  or an array 
-Unsure about my strategy for populating the sortedCaseType array.
  Could there be a less clunky method that didn't require so many
  for loops?? I considered a switch statement with no break; lines
  but didn't know how to account for multiple potential cases at 
  each level of the heirarchy 
-The compass code used "case" which I converted to "caseType" as
  "case" was creating errors in the code, possibly because it is 
  a keyword (used in the switch structure)
*/

const makeCase = function(input, caseType) {
  if (typeof(caseType) === "string") {
    return convertString(input, caseType);
  } else {
    return convertArray(input, caseType);
  }
}

//converts input based on caseType if caseType is not a string
function convertArray (input, caseType) {
  const sortedCaseType = [];
  let sortedString = input;
  for (element of caseType) {
    //run whole array, push top tier casetypes to sortedCaseArray
    if (element === "camel" || element === "pascal" || element === "snake" || element === "kebab" || element === "title") {
      sortedCaseType.push(element);
    }
  }
  for (element of caseType) {
    //run whole array, push mid tier casetypes to sortedCaseArray
    if (element === "vowel" || element === "consonant") {
      sortedCaseType.push(element);
    }
  }
  for (element of caseType) {
    //run whole array, push bottom tier castypes to sortedCaseArray
    if (element === "upper" || element === "lower") {
      sortedCaseType.push(element);
    }
  }
  for (element of sortedCaseType) {
    //run sortedCaseType array and execute case functions
      //for each Element. Store results in sortedString
      //variable after each iteration so the next function 
      //is applied to it  
      if (element === "camel") {
        sortedString = convertToCamelCase(sortedString);
      } else if (element === "pascal") {
          sortedString = convertToPascalCase(sortedString);
      } else if (element === "snake") {
          sortedString = convertToSnakeCase(sortedString);
      } else if (element === "kebab") {
          sortedString = convertToKebabCase(sortedString);
      } else if (element === "title") {
          sortedString = convertToTitleCase(sortedString);
      } else if (element === "vowel") {
          sortedString = convertToVowelCase(sortedString);
      } else if (element === "consonant") {
          sortedString = convertToConsonantCase(sortedString);
      } else if (element === "upper") {
          sortedString = convertToUpper(sortedString);
      } else if (element === "lower") {
          sortedString = convertToLower(sortedString);
      }
  }
  return sortedString; 
}

//converts input based on caseType if caseType is a string
function convertString (input, caseType) {
  if (caseType === "camel") {
    return convertToCamelCase(input);
  } else if (caseType === "pascal") {
      return convertToPascalCase(input);
  } else if (caseType === "snake") {
      return convertToSnakeCase(input);
  } else if (caseType === "kebab") {
      return convertToKebabCase(input);
  } else if (caseType === "title") {
      return convertToTitleCase(input);
  } else if (caseType === "vowel") {
      return convertToVowelCase(input);
  } else if (caseType === "consonant") {
      return convertToConsonantCase(input);
  } else if (caseType === "upper") {
      return convertToUpper(input);
  } else if (caseType === "lower") {
      return convertToLower(input);
  }
}

//Converts input to upper case
function convertToUpper (input) {
  let tempArray = [];
  for (let i = 0; i < input.length; i++) {
    tempArray.push((input[i].toUpperCase()));
  }
  let upperCaseString = tempArray.join("");
  return upperCaseString;
}

//Converts input to lower case
function convertToLower (input) {
  let tempArray = [];
  for (let i = 0; i < input.length; i++) {
    tempArray.push((input[i].toLowerCase()));
  }
  let lowerCaseString = tempArray.join("");
  return lowerCaseString;
}

//Converts input to camel case
function convertToCamelCase (input) {
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

//Converts input to pascal case
function convertToPascalCase (input) {
  let tempArray = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== " " && (input[i - 1] === " " || input[i-1] === undefined)) {
      tempArray.push((input[i].toUpperCase()))
    } else if (input[i] !== " " && input[i - 1] !== " ") {
      tempArray.push(input[i]);
    }
  }
  let pascalCaseString = tempArray.join("");
  return pascalCaseString;
}

//Converts input to snake case
function convertToSnakeCase (input) {
  let tempArray = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== " ") {
      tempArray.push(input[i]);
    } else if (input[i] === " ") {
      tempArray.push("_");
    }
  }
  let snakeStringCase = tempArray.join("");
  return snakeStringCase;
}

//Converts input to kebab case
function convertToKebabCase (input) {
  let tempArray = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== " ") {
      tempArray.push(input[i]);
    } else if (input[i] === " ") {
      tempArray.push("-");
    }
  }
  let kebabCaseString = tempArray.join("");
  return kebabCaseString;
}

//Converts input to title case
function convertToTitleCase (input) {
  let tempArray = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== " " && (input[i - 1] === " " || input[i-1] === undefined)) {
      tempArray.push((input[i].toUpperCase()))
    } else {
      tempArray.push(input[i]);
    }
  }
  let titleCaseString = tempArray.join("");
  return titleCaseString;
}

//Converts input to vowel case
function convertToVowelCase (input) {
  let tempArray = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "a" || input[i] === "e" || input[i] === "i" || input[i] === "o" || input[i] === "u") {
      tempArray.push(input[i].toUpperCase());
    } else {
      tempArray.push(input[i]);
    }
  }
  let vowelCaseString = tempArray.join("");
  return vowelCaseString;
}

//Converts input to consonant case
function convertToConsonantCase (input) {
  let tempArray = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "a" || input[i] === "e" || input[i] === "i" || input[i] === "o" || input[i] === "u") {
      tempArray.push(input[i]);
    } else {
      tempArray.push(input[i].toUpperCase());
    }
  }
  let consonantCaseString = tempArray.join("");
  return consonantCaseString;
}

//TESTS:
/*console.log(converttoCamelCase("this is a string"));
console.log(convertToPascalCase("this is a string"));
console.log(convertToSnakeCase("this is a string"));
console.log(convertToKebabCase("this is a string"));
console.log(convertToTitleCase("this is a string"));
console.log(convertToVowelCase("this is a string"));
console.log(convertToConsonantCase("this is a string"));
*/
console.log(makeCase("this is a string", "upper"));
console.log(makeCase("this is a string", "lower"));
console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
console.log(makeCase("tHis IS A stRing", ["lower", "snake"]));
console.log(makeCase("this is a string", ["consonant", "snake"]));
console.log(makeCase("this is a string", ["consonant", "upper", "snake"]));



/* 
Expected Output:
thisIsAString
ThisIsAString
this_is_a_string
this-is-a-string
This Is A String
thIs Is A strIng
THiS iS a STRiNG
THIS_IS_A_STRING
this_is_a_string
THiS_iS_a_STRiNG
THIS_IS_A_STRING
*/