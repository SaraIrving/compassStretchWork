/*In this activity, we will be converting date strings
like "2017/12/02", into more English friendly 
date strings like December 2nd, 2017. 


We will be given a date as a string (not a Date object). 
The date will always be formatted as YYYY/MM/DD. 
We will have to parse the given string
and produce a human readable date.


Create a function named talkingCalendar 
that takes in a date string with the format YYYY/MM/DD,
and formattedMonth =s a new human readable date
that looks like December 2nd, 2017.
*/

/*
Strategy:
-Make helper functions that dissect different parts of the string
-Make function to pull out the year and convert it
  -use a loop to pull out the first 4 characters of the date string
  -put them into a new variable
  -formattedMonth = that variable 
-Make function to pull out the month numbers 
  -convert the numbers to month's word (switch statement?)
  -formattedMonth = the word 
-Make function to pull out the day and convert it
  -remember to change the  "th" vs "st" vs "nd" ending 
    depending on the number 
    - 01, 21, 31 = "st"
    - 02, 22 = "nd"
    - 03, 23 = "rd"
    - everything else = "th" 
  -also remember that if the date is 0something, we only want
    formattedMonth = a one digit date, not the two digit date containing
    the 0
-In main function, concatenate the results of the helper function
*/

/* REMEMBER if you are defining functions via function expression you must do so 
above the main function in the code or else they will not be "hoisted"
If you want to define them after the main function the use function declaration not
function expression */

const talkingCalendar = function(date) {
  let readableDate = makeMonthReadable(date) + " " + makeDayReadable(date) + ", " + makeYearReadable(date);
  return readableDate;
}

function makeYearReadable (date) {
  let isolatedYear = "";
  for (let i = 0; i< 4; i++) {
    isolatedYear = isolatedYear + date[i];
  }
  return isolatedYear;
}

function makeMonthReadable (date) {
  let isolatedMonth = "";
  for (let i = 5; i < 7; i++) {
    isolatedMonth = isolatedMonth + date[i];
  }
  let formattedMonth = "";
  switch (isolatedMonth) {
    case "01":
      formattedMonth = "January";
      return formattedMonth;
    case  "02":
      formattedMonth = "February";
      return formattedMonth;
    case "03":
      formattedMonth = "March";
      return formattedMonth;
    case "04":
      formattedMonth = "April";
      return formattedMonth;
    case "05":
      formattedMonth = "May";
      return formattedMonth;
    case "06":
      formattedMonth = "June";
      return formattedMonth;
    case "07":
      formattedMonth = "July";
      return formattedMonth;
    case "08":
      formattedMonth = "August";
      return formattedMonth;
    case "09":
      formattedMonth = "September";
      return formattedMonth;
    case "10":
      formattedMonth = "October";
      return formattedMonth;
    case "11":
      formattedMonth = "November";
      return formattedMonth;
    case "12":
      formattedMonth = "December";
      return formattedMonth;
  }
}

function makeDayReadable (date) {
  let isolatedDate = "";
  for (let i = 8; i < 10; i++) {
    isolatedDate = isolatedDate + date[i];
  }
  let formattedDate = "";
  if (isolatedDate[0] === "0") {
    if (isolatedDate[1] === "1") {
      formattedDate = isolatedDate[1] + "st";
      return formattedDate;
    } else if (isolatedDate[1] === "2") {
      formattedDate = isolatedDate[1] + "nd";
      return formattedDate;
    } else if (isolatedDate[1] === "3") {
      formattedDate = isolatedDate[1] + "rd";
      return formattedDate;
    } else {
      formattedDate = isolatedDate[1] + "th";
      return formattedDate;
    }
  } else if (isolatedDate[1] === "1" && isolatedDate[0] !== "1") {
    formattedDate = isolatedDate + "st";
    return formattedDate;
  } else if (isolatedDate[1] === "2" && isolatedDate[0] !== "1") {
    formattedDate = isolatedDate + "nd";
    return formattedDate;
  } else if (isolatedDate[1] === "3" && isolatedDate[0] !== "1") {
    formattedDate = isolatedDate + 'rd';
    return formattedDate;
  } else {
    formattedDate = isolatedDate + "th";
    return formattedDate;
  }
}

//TESTS: 
console.log(makeDayReadable("2017/09/22"));
console.log(makeMonthReadable("2017/09/12"));
console.log(makeYearReadable("2017/12/02"));
console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));




/* Expected Output:
22nd
September
2017
December 2nd, 2017
November 11th, 2007
August 24th, 1987
*/
