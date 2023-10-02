/*
    Project: Assignment 02: Larger or Smaller?
    Date: 09/27/23
    Author: Van Do
*/

/*  Usage: Use simple conditional statements
    Create an application that accepts two integers within two separate prompts. Then, display only the larger of the two within the browser window. Don’t forget to handle the fact that the two could be equal.
*/


// DECLARE THE VARIABLES AND COLLECT THE NUMBERS FROM USER 
let int1 = parseInt(prompt('Choose a integer'));
let int2 = parseInt(prompt('Choose another integer'));

// CHECK THE INTEGER AGAINST ONE ANOTHER
if (int1 > int2) {
   // DISPLAY MESSAGE SAYING INTEGER1 IS GREATER THAN INTEGER2
   alert(`${int1} is the greater integer.`)
} else if (int1 < int2)  {
    // DISPLAY MESSAGE SAYING INTEGER2 IS GREATER THAN INTEGER1
    alert(`${int2} is the greater integer.`)
} else {
     // DISPLAY MESSAGE STATING THE INTEGERS ARE EQUAL.
    alert('The integers are equal!')
};

