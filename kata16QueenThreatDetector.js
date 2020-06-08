/*
In this exercise we will be writing an algorithm,
 to detect if two queens on a chess board can attack each other.

A game of chess is played on an 8 column by 8 row board.
 In the game of chess, a queen can attack pieces
  which are on the same row, column, or diagonal. 

In JavaScript, we can represent a chessboard using 
an 8 by 8 array (8 arrays within an array). For this exercise, 
our chess board will have 2 queens, and nothing else. 
A 1 in the array represents a queen on the corresponding square,
 and a O in the array represents an unoccupied square.

-Create a function generateBoard which will return 
a nested array representing the board, 
containing the location of two queens.
-Create a function called queenThreat that will 
indicate whether or not the two queens are
 positioned so that they attack each other.
*/

/*
QUEEN THREAT STRATEGY:
-base code off of one queen's position, since they have the same 
  rules, striking distance will be true for them both 
- ** i = y coordinates, j = x coordinates **
-determine if there is anyone in the same vertical space
    -- loop though each nested array and only compare the values
        in the same place as the queen. Determine if there is 
        more than one 1 amongst them 
-determine if there is anyone in the same horizonal space
    -- determine which nested array the queen is in then
        loop though all the values in that nest to see 
        if there is more than one 1
-determine if there is anyone in the diagonal space 
    -- ???
    -- make seperate functions for each of these (then feed
          into the queenThreat function)
    -- base loop stoping condition equal to the y coord of the queen  
    -- or loop for increasing x and increasing y each (right and down)
    -- or loop for decreasing x and increasing y (left and down)
    -- or loop for increasing x and decreasing y (right and up)
    -- or loop for decreasing x and decreasing y (left and up)
        
*/


function generateBoard (whiteQueen, blackQueen) {
  let boardArray = [];
  let nestedArray = [];
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (i === whiteQueen[0] && j === whiteQueen[1]) {
        nestedArray[j] = 1;
      } else if (i === blackQueen[0] && j === blackQueen[1]) {
          nestedArray[j] = 1;
      } else {
          nestedArray[j] = 0;
      }
    }
    boardArray[i] = nestedArray;
    nestedArray = [];
  }
  return boardArray
}

//This function tests to see if there is a queen in 
// The same y coord at the blackQueen, at a different
// x coord (horizontal) 
function horizontalQueenThreat (generatedBoard) {
 return (horizontalRightThreat(generatedBoard) === true ||
         horizontalLeftThreat(generatedBoard) === true);
}

//This function determines if there is another queen present
//at increading x coord and the same y coord as the black queen 
// test with white queen = [0, 7]
          // blackQueen = [0, 2]
function horizontalRightThreat (generatedBoard) {
  let numQueensPresent = 0;
  let yCoord = blackQueen[0];
  let xCoord = blackQueen[1];
  while (xCoord < 7) {
    if (generatedBoard[yCoord][xCoord + 1] === 1) {
      numQueensPresent += 1;
    }
    xCoord += 1;
  }
  if (numQueensPresent === 1) {
    return true;
  } else {
    return false;
  }
}

//This function determines if there is another queen present
//at decreading x coord and the same y coord as the black queen 
// test with white queen = [0, 0]
          // blackQueen = [0, 5]
function horizontalLeftThreat (generatedBoard) {
  let numQueensPresent = 0;
  let yCoord = blackQueen[0];
  let xCoord = blackQueen[1];
  while (xCoord >= 1) {
    if (generatedBoard[yCoord][xCoord - 1] === 1) {
      numQueensPresent += 1;
    }
    xCoord -= 1;
  }
  if (numQueensPresent === 1) {
    return true;
  } else {
    return false;
  }
}


//This function tests to see if there is a queen 
//in the same x coord as the Black queen at a different
// y coord (vertical)
function verticalQueenThreat (generatedBoard) {
  return (verticalAboveThreat(generatedBoard) === true || 
          verticalBelowThreat(generatedBoard) === true);
}

//This function test to see if there is a queen above the 
//black queen in the same x coord but at decreasing y coords 
//test with: whiteQueen = [2, 0]
          // blackQuwwn = [7, 0]
function verticalAboveThreat (generatedBoard) {
  let numQueensPresent = 0;
  let yCoord = blackQueen[0];
  let xCoord = blackQueen[1];
  while (yCoord >= 1) {
    if (generatedBoard[yCoord - 1][xCoord] === 1) {
      numQueensPresent += 1;
    }
    yCoord -= 1;
  }
  if (numQueensPresent === 1) {
    return true;
  } else {
    return false;
  }
}

//This function test to see if there is a queen below the 
//black queen in the same x coord but at increasing y coords 
//test with: whiteQueen = [5, 0]
          // blackQuwwn = [1, 0]
function verticalBelowThreat (generatedBoard) {
  let numQueensPresent = 0;
  let yCoord = blackQueen[0];
  let xCoord = blackQueen[1];
  while (yCoord < 7) {
    if (generatedBoard[yCoord + 1][xCoord] === 1) {
      numQueensPresent += 1;
    }
    yCoord += 1;
  }
  if (numQueensPresent === 1) {
    return true;
  } else {
    return false;
  }
}

// the first num of the queen is the y-coord, the second is the x-coord 
// This function tests to see if there is a queen at a 
// increasing y and increasing x trajectory from the 
// blackQueen (down and right)
// test with : let whiteQueen = [2, 7];
              //let blackQueen = [0, 5];
function rightAndDownThreat (generatedBoard) {
  let numQueensPresent = 0;
  let yCoord = blackQueen[0];
  let xCoord = blackQueen[1];
  while ((yCoord < 7) && (xCoord < 7)) {
    if (generatedBoard[yCoord + 1][xCoord + 1] === 1) {
      numQueensPresent += 1;
    }
    yCoord += 1;
    xCoord += 1;
  }
  if (numQueensPresent === 1) {
    return true;
  } else {
    return false;
  }
}

//This function tests to see if there is a queen at a 
//decreasing y and increasing x (right and up) trajectory 
//from the blackQueen 
//test with let whiteQueen = [0, 5];
          //let blackQueen = [5, 0];
function rightAndUpThreat (generatedBoard) {
  let numQueensPresent = 0;
  let yCoord = blackQueen[0];
  let xCoord = blackQueen[1];
  while ((yCoord >= 1) && (xCoord < 7)) {
    if (generatedBoard[yCoord - 1][xCoord + 1] === 1) {
      numQueensPresent += 1;
    }
    yCoord -= 1;
    xCoord += 1;
  }
  if (numQueensPresent === 1) {
    return true;
  } else {
    return false;
  }
}


//This function tests to see if there is a queen at a 
//decreasing x and decreasing y (left and up) trajectory from 
//the blackQueen 
// test with : let whiteQueen = [0, 1];
              //let blackQueen = [5, 6];
function leftAndUpThreat (generatedBoard) {
  let numQueensPresent = 0;
  let yCoord = blackQueen[0];
  let xCoord = blackQueen[1];
  while (yCoord >= 1 && xCoord >= 1) {
    if (generatedBoard[yCoord - 1][xCoord - 1] === 1) {
      numQueensPresent += 1;
    }
    yCoord -= 1;
    xCoord -= 1;
  }
  if (numQueensPresent === 1) {
    return true;
  } else {
    return false;
  }
}

//This funciton tests to see if there is a queen at a 
//increasing y coord and decreasing x coord (left and down) 
//trajectory from the blackQUeen 
// test with : let whiteQueen = [5, 0];
              //let blackQueen = [0, 5];
function leftAndDownThreat (generatedBoard) {
  let numQueensPresent = 0;
  let yCoord = blackQueen[0];
  let xCoord = blackQueen[1];
  while (yCoord < 7 && xCoord >= 1) {
    if (generatedBoard[yCoord + 1][xCoord - 1] === 1) {
      numQueensPresent += 1;
    }
    yCoord += 1;
    xCoord -= 1;
  }
  if (numQueensPresent === 1) {
    return true;
  } else {
    return false;
  }
}

//This function groups together the four different functions that 
//test for queens along diagonal trajectories
function diagonalQueenThreat (generatedBoard) {
  return (rightAndDownThreat(generatedBoard) || 
      rightAndUpThreat(generatedBoard) || 
      leftAndDownThreat(generatedBoard) ||
      leftAndUpThreat(generatedBoard));
}

//This function tests to see if there is a queen anywhere 
//withing striking distance of the black queen, along 
//vertical, horizonal or diagonal trajectories 
function queenThreat(generatedBoard) {
  return (horizontalQueenThreat(generatedBoard) === true ||
      verticalQueenThreat(generatedBoard) === true ||
      diagonalQueenThreat(generatedBoard) === true);
}

//TESTS:

/*
let whiteQueen = [5, 0];
let blackQueen = [1, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
*/

/*
// tests down and left
let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
*/
/*
OUTPUT:
[
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
]
true
 */


// no matches possible
let whiteQueen = [0, 0];
let blackQueen = [5, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

/*
Expected Output:
[
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
]
false
*/




