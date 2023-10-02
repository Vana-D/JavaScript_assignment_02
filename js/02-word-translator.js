/*
    Project: Assignment 02: The Word Translator
    Date: 09/27/23
    Author: Van Do
*/

/*  Usage: Use simple conditional statements
    Create an application that prompts the user for a language code ("es", "de", "en", and "fr"). If they enter one of the four codes, display the translated version of "Hello World" for the given language within the console window. If the user enters anything but those four language codes, the application should default to English. The result should be (for example):    Hello World translated in French is: Bonjour le monde
*/

// DECLARE THE VARIABLES AND COLLECT THE CHOICE FROM THE USER
let choice = prompt('Choose a language: \n"es" = spanish \n"de" = german \n"en" = english \n"fr" = french');
let language = choice.toLowerCase();


// DISPLAY MESSAGE BASED ON LANGUAGE OF CHOICE
if (language === 'es') {
   // DISPLAY MESSAGE IN SPANISH 
   alert('Hola Mundo')
} else if (language === 'de')  {
    // DISPLAY MESSAGE IN GERMAN 
    alert('Hallo Welt')
} else if (language === 'fr')  {
    // DISPLAY MESSAGE IN FRENCH 
    alert('Bonjour le monde')
} else {
     // DISPLAY MESSAGE IN ENGLISH 
    alert('Hello World')
};


