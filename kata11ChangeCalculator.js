/*
We will be given two numbers, the total of a transaction, 
and the amount of cash given to the cashier.
Both of these numbers will be represented as 
whole numbers in cents. Therefore $10 will be represented as 1000.

Our function calculateChange should return an object 
which describes the total amount of change for the 
cashier to give back. Although pennies are not used in circulation, 
we will still calculate the amount of pennies to give back.

Valid denominations are as follows:

    Twenty dollars
    Ten dollars
    Five dollars
    Two dollars
    One dollar
    Quarter (25¢)
    Dime (10¢)
    Nickel (5¢)
    Penny (1¢)

Create a function named calculateChange that takes
in a total amount of a bill and the total cash given to pay that bill. 
Return a new object that describes the total amount 
of change for the cashier to give back. 
Omit any types of change that you shouldn't give back, 
i.e. if you don't give back a twenty dollar bill, 
don't include it in the results.
 */

/*
STRATEGY:
-subtract the total from the transaction to get how much change is needed 
-determine if the change needed is greater than the possible change denomination, 
  if it is do steps below, If is isn't then skip that demonination and move to 
  next largest 
//determine if change is greater than the loops value
    //of value(key:value)
        //if change is bigger, proceed
        //if change is smaller, no nothing and let the loop 
        //bring the next value 
    //determine if change % that value(key:value) is 0
    //if it's zero, then determine how many times you 
      //can divide change by that value 
        //then store that number and the denomination
        //as a key-value pain in changeContains
            //then break out of the loop
    // if it's not zero, determine how many times it
    // is divisible by that value and store that in a
    //key:value pair in change contains 
      //then take the remainder store it into the change
      //variable and continue with the loop 

*/

const calculateChange = function(total, cash) {
  let changePossibilities = [["twentyDollar", 2000], ["tenDollar", 1000], ["fiveDollar", 500], ["twoDollar", 200], ["oneDollar", 100], ["quarter", 25], ["dime", 10], ["nickel", 5], ["penny",1]];
  let change = cash - total;
  let changeContains = {};
  for (denomination of changePossibilities) {
    if (change >= denomination[1]) {
      if (change % denomination[1] === 0) {
        changeContains[denomination[0]] = change / denomination[1];
        break;
      } else {
        changeContains[denomination[0]] = Math.floor(change / denomination[1]);
        change = (change % denomination[1]);
      }
    }
  }
  return changeContains;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));


/*Expected Output:
{ twoDollar: 1, dime: 1, penny: 3 }
{ tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
{ twoDollar: 2, quarter: 3, dime: 2, penny: 4 }
*/
