/*
Write a guessing game where the user has to guess a secret number. 
After every guess the program tells the user whether their 
number was too large or too small. 
At the end, the number of tries needed should be printed.

Inputting the same number multiple times should only count as one try. 
If the user provides an answer which isn't a number, 
print an error message and do not count this as a try.
*/

//Need to have at least one guess before you can record the value of the previous guess
//Run through the loop once and record value of previous guess at the end
//Then run though all subsequent guesses with answer===previous guess as a condition in the loop 



let prompt = require("prompt-sync")();

// code below (replace this example)
//let answer = prompt("Guess a number: ");
//console.log("You answered: " + answer);

//set a variable to track number of attempts
let attempts = 0;
//pick a random number between 0 and 99 
let secretNum = Math.floor(Math.random() * 100);

//get user to give the first guess 
let answer = prompt("Guess a number between 0 and 99: ");

//Now loop over these conditions once, if answer is not equal to secretNum then
// SAVE ANSWER INTO PREVIOUS GUESS VARIABLE, then incorporate previous guess variable 
//into the next loop 
for (let i = 0; i < 1; i++) {
  // if the input is higher than the secret number
  if (answer > secretNum) {
    attempts += 1;
    console.log("Too High!");
  }

  //if the input is lower than the secret number
  if (answer < secretNum) {
    attempts += 1;
    console.log("Too Low!");
  }

  //if the input is not a number
  if (Number.isNaN(answer) === false) {
    console.log("ERROR! Please enter a number between 0 and 99");
  }

  //if the input matches the secret number 
  //include the return statement with this condition!! 
  if (answer === secretNum) {
    attempts += 1;
    console.log("You got it! You took " + attempts + " attempts!");
  }
}
//save this rounds answer into the previousGuess variable to compare for the next round 
let previousGuess = answer; 

//START LOOP NOW (consider while loop with iterator variable equal to attempts )
