/*
To safely send data in a URL, the data first has to be encoded
 to convert any special characters to URL safe characters. 
 For this assignment we will only focus on 
 the following URL encoding rules:
-%20 represents a space character.
-Key-value pairs are represented using an = character: key=value
-Multiple key-value pairs are separated using a & character: key1=value1&key2=value2
*/

/*
STRATEGY:
-create helper functions for each step of the filtering?
-first, seperate whats on either side of an "&" into arrays within an array
-then for each array, seperate based on either side of the "=" 
-then create object key:value pairs out of the contents of the sub arrays 
-then remove %20 from the values of the pairs 
*/

const urlDecode = function(text) {
  return splitAmpersand (text);
};


//This function is called by the main function
//It creates an array with elements that contain what was on either side of the &
//it returns a call to the Split assignmentOperator function feeding it the array it created 
function splitAmpersand (text) {
  let splitArray = [];
  let arrayIndexCounter = 0;
  for (character of text) {
    if (character !== "&") {
      if (splitArray[arrayIndexCounter] === undefined) {
        splitArray[arrayIndexCounter] = character;
      } else {
          splitArray[arrayIndexCounter] += character;
      }
    } else {
      arrayIndexCounter += 1; 
    }
  }
  return splitAssinmentOperator(splitArray);
}

//This function is called by the splitAmpersand function
//It creates an array where the elements are alternatly what will become a key and what will become a value once it's "%20" are removed 
//It returns a call to the createAnObject array that it feeds the array it created 
function splitAssinmentOperator (input) {
  let splitArray = [];
  let arrayIndexCounter = 0;
  for (element of input) {
    for (i = 0; i < element.length; i++) {
      if (element[i] !== "=") {
        if (splitArray[arrayIndexCounter] === undefined) {
          splitArray[arrayIndexCounter] = element[i];
        } else {
            splitArray[arrayIndexCounter] += element[i];
        }
      } else {
        arrayIndexCounter += 1;
      }
    }
    arrayIndexCounter += 1;
  }
  return filterValues(splitArray)
}

// This function filters out the %20 from the elements that will become the object values 
// It creates an array where the elements are alternatly what will become a key and what will become a value
//It returns a vall to *** and feeds it the array it created 
function filterValues (input) {
  let filteredValueArray = [];
  let tempString = "";
  for (let i = 1; i < input.length; i = i + 2) {
    for (let j = 0; j < input[i].length; j++) {
      if (input[i][j] !== "%" && input[i][j] !== "2" && input[i][j] !== "0") {
        if (tempString === undefined) {
          tempString = input[i][j];
        } else {
          tempString += input[i][j];
        }
      } else if (input[i][j] === "%" && input[i][j + 1] === "2" && input[i][j + 2] === "0") {
          tempString += " ";
      }
    }
    // assign the elements that will be keys to array unchanged
    // assign the tempString which holds an element that will become a value
    // wipe the value out of tempString so it can be filled again in the next iteration 
    filteredValueArray.push(input[i - 1]);
    filteredValueArray[i] = tempString;
    tempString = "";
  }
  console.log(filteredValueArray);
  return buildFilteredObject(filteredValueArray);
}

//This function is called by the filterValues function 
//It creates an object out of the array it is fed 
//0, 2, 4, etc become keys
///1,3,5 etc become values 
//It returns the final value of an object with key value pairs 
function buildFilteredObject (input) {
  let filteredObject = {};
  for (let i = 0; i < input.length; i = i + 2) {
    filteredObject[input[i]] = input[i + 1]; 
  }
  return filteredObject; 
}



console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);


/*
Expected Output:
{duck: "rubber"}
{bootcamp: "Lighthouse Labs"}
{city: "Vancouver", weather: "lots of rain"}
"lots of rain"
*/

