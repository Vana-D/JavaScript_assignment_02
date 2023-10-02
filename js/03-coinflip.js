/*
    Project: Assignment 02: The “Coin Flip” Game
    Date: 10/02/23
    Author: Van Do
*/


/*  Usage: Use nested conditional statements
    In this part of the assignment you will explore what you’ve learned so far about variables, prompts, conditionals, operators, math, and more to create a “coin flip game”. To complete the game follow the steps outlined below:

    STEP 1: 
        Begin your application by creating a variable called coinFlip and set it equal to a random number. You will have to use a Math method to get this number: let randomNum = Math.round(Math.random())
    STEP 2: 
        Prompt the user to select “Heads or Tails” and set the result to a new variable called choice.
    STEP 3:
        Use a conditional to check the result of the coin flip. If it’s less than a certain number, it will be heads. If it’s greater than a certain number, it will be tails.
    STEP 4:
        If the result is heads and the user selects heads, display the following message within an alert:
        The flip was heads and you chose heads...you win!
    STEP 5:
        If the result is heads and the user selects tails, display the following message within an alert:
        The flip was heads but you chose tails...you lose!
    STEP 6:
        If the result is tails and the user selects heads, display the following message within an alert:
        The flip was tails but you chose heads...you lose!
    STEP 7:
        If the result is tails and the user selects tails, display the following message within an alert:
        The flip was tails and you chose tails...you win!
*/


// STEP 1 - CREATE VARIABLE CALLED coinFlip AND SET IT EQUAL TO A RANDOM NUMBER
let coinFlip = Math.round(Math.random());

document.write(`<h1>Welcome to the Coin Flip Game! </h1> </br>`);
document.write(`<b>coinFlip:</b> ${coinFlip} </br>`);

// STEP 2 - ASK USER FOR THEIR CUSTOMER CHOICE OF HEADS OR TAILS
let choice = prompt('Welcome to the Coin Flip Game! \nSelect heads or tails.');
document.write(`<b>Your choice:</b> ${choice} </br>`);

// STEP 3 - Use a conditional to check the result of the coin flip. If it’s less than a certain number, it will be heads. If it’s greater than a certain number, it will be tails.
let flip = coinFlip < 1 ? 'heads' : 'tails';
document.write(`<b>Flip Result:</b> ${flip} </br>`);


// STEP 4 - 7 COMPARE THE FLIP TO THE USER'S CHOICE
if (flip == 'heads'){
    // STEP 4
    if (choice == 'heads') {
        alert("The flip was heads and you chose heads...you win!");
        document.write("<i>The flip was heads and you chose heads...you win!</i>");
    // STEP 5
    } else {
        alert("The flip was heads and you chose tails...you lose!");
        document.write("<i>The flip was heads and you chose tails...you lose!</i>");
    }
} else if (flip == 'tails'){
    // STEP 6
    if (choice == 'tails') {
        alert("The flip was tails and you chose tails...you win!");
        document.write("<i>The flip was tails and you chose tails...you win! </i>");
    // STEP 7
    } else {
        alert("The flip was tails and you chose heads...you lose!");
        document.write("<i>The flip was tails and you chose heads...you lose!</i>");
    }
} else {
    alert("There has been an error.");
}

