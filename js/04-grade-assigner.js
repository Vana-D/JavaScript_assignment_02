/*
    Project: Assignment 02: The “Grade Assigner” Application
    Date: 10/01/23
    Author: Van Do
*/

/*
    Usage: Use else if or switch statements

    Collect the a number between 1 and 100 from the user.
    Make sure that number is between 1 and 100, if it is not, let the user know that only numbers between 1 and 100 are accepted.
    If the score is between 60 and 69, write out “You received a D” into the console.
    If the score is between 70 and 79, write out “You received a C” into the console.
    If the score is between 80 and 89, write out “You received a B” into the console.
    If the score is between 90 and 100, write out “You received an A” into the console.
    If the score is less than 60, write out “You received an F” into the console.
*/


// ASK USER FOR SCORE BETWEEN 1 AND 100
let score = prompt('Choose a number between 1 and 100');

// DISPLAY GRADE BASED ON USER INPUT
switch (true) {
    case score >= 90 && score <= 100:
        console.log('You received an A');
        break;
    case score >= 80 && score <= 89:
        console.log('You received an B');
        break;
    case score >= 70 && score <= 79:
        console.log('You received an C');
        break;
    case score >= 60 && score <= 69:
        console.log('You received an D');
        break;
    case score < 60 && score >= 1:
        console.log('You received an F');
        break;
    default:
        console.log('Please enter a number between 1 and 100'); 
}