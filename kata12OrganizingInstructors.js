/*
Create a function named organizeInstructors 
that will receive an array of instructor objects,
 and will return a new object that has the following format:
  CourseName: [instructors]
*/

/*
Strategy: 
-create an array where the key is the course and
  the value is an array containing all the names 
  that teach that course
-use a for of loop to isolate the objects in the 
  instructors array 
-within each object check to see if your course value 
 exists as a key in your final object
    -if it does not already exist, put it as a key value
      in your final array paired with a value that's equal
      to that objects name value, stored within an array 
    -if it does already exist as a key in your final object, 
    add the isolated objects name value into the array stored
    as the value in your final object. 
*/

/*
Make some helper functions: 
-a function to determine if the key already exists 
*/

const organizeInstructors = function(instructors) {
  let instructorObject = {};
  for (object of instructors) {
    if (instructorObject.hasOwnProperty(object.course) === false) {
      instructorObject[object.course] = [];
      // add the name to the array value in the instructorsObject 
      //(instructorObject[object.course]).push(object.name);

    } 
    (instructorObject[object.course]).push(object.name);
    //else {
      //instructorObject[object.course] = [object.name];

    //}
  }
  return instructorObject;
};

function doesKeyExist (courseName) {
  if (instructorObject.hasOwnProperty(courseName)) {
    return true;
  }
  return false;
} 

//TESTS:
console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));

/*
Expected Output

{
  iOS: ["Samuel"],
  Web: ["Victoria", "Karim", "Donald"]
}
{
  Blockchain: ["Brendan"],
  Web: ["David", "Carlos"],
  iOS: ["Martha"]
}
*/
