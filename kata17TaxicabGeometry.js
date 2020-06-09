/*
Create a function named blocksAway that will 
receive an array of directions, and return an object 
that calculates how far north and east 
those directions will take someone.

The taxi driver will always start at the same position,
in the most south west position on the grid. 
This means that the output will only need to 
specify an east and north position, 
since the taxi driver can only end up in these
East and North of the starting point.
*/

/*
STRATEGY: 
- IF cab can turn either left or right at the start then
    what directions is it facing at the beginning???
    --Or do we define the beginning direction in retrospect
      based on it if turns left or right?
      --Or do we not need to know the beginning direction? 
-determine the direction the cab is facing 
    (this will impact what direction R and L move the cab)
-determine how far the cab moves 
    -- this will be related to the numerical value that follows
        the left/right direction 
    -- designate movement in two directions to be negative
      --movement west = -1
      --movement east = +1
      --movement south = -1
      --movement north = +1
-deetermine cood of where you end up after implementing direactions 
-intrepret end coord to tell you how many 
    north and how many east you moved
*/


const blocksAway = function(directions) {
  let eastwardMovement = 0;
  let northwardMovement = 0;
  let cabIsFacing = "";
  let newDirection = "";
  let result = {};
  if (directions[0] === "right") {
    cabIsFacing = "north";
  } else {
    cabIsFacing = "east";
  }

  for ( let i = 0; i < directions.length; i= i + 2) {
    newDirection = determineNewDirection(cabIsFacing, directions[i]);
    eastwardMovement = eastwardMovement + calculateEastMovement(newDirection, directions[i + 1]);
    northwardMovement = northwardMovement + calculateNorthMovement(newDirection, directions[i + 1]);
    cabIsFacing = newDirection;
  }
  result["east"] = eastwardMovement;
  result["north"] = northwardMovement;
  return result; 
} 


//This function takes whatever the value of cabIsFacing is at the start of the loop
//and determines what it will be at the end of that iteration of the loop after
//the instructions have been applied 
function determineNewDirection (cabIsFacing, rightOrLeft) {
  if (cabIsFacing === "north" && rightOrLeft === "right") {
    return "east";
  } else if (cabIsFacing === "north" && rightOrLeft === "left") {
      return "west";
  } else if (cabIsFacing === "east" && rightOrLeft === "right") {
      return "south";
  } else if (cabIsFacing === "east" && rightOrLeft === "left") {
      return "north";
  } else if (cabIsFacing === "south" && rightOrLeft === "right") {
      return "west";
  } else if (cabIsFacing === "south" && rightOrLeft === "left") {
      return "east";
  } else if (cabIsFacing === "west" && rightOrLeft === "right") {
      return "north";
  } else if (cabIsFacing === "west" && rightOrLeft === "left") {
      return "south";
  }
}

//This function updates the count of eastward movement of the cab
//In this function numMoves is equal to directions[i+1]
function calculateEastMovement (newDirection, numMoves) {
  if (newDirection === "east") {
    return numMoves; 
  } else if (newDirection === "west") {
      return numMoves * -1; 
  } else {
    return 0;
  }
}

//This function updates the count of northward movement of the cab
//In this function numMoves is equal to directions[i+1]
function calculateNorthMovement (newDirection, numMoves) {
  if (newDirection === "north") {
    return numMoves; 
  } else if (newDirection === "south") {
      return numMoves * -1; 
  } else {
    return 0;
  }
}



//TESTS:
console.log(determineNewDirection("east", "left"));
console.log(determineNewDirection("west", "left"))
console.log(calculateEastMovement("east", 2));
console.log(calculateNorthMovement("south", 6));
console.log(blocksAway(["right", 2]));
console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));


/* Expected Output: 
north
south
2
-6
{east: 2, north: 0}
{east: 1, north: 3}
{east: 3, north: 3}
{east: 0, north: 0}
*/
