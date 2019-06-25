/*
* STRING MANIPULATION:
* 
* 0. So you want to change a String? Well, in order to alter the characters that a String  
* contains, you must first recognize a few properties of the String data-type. 
*
* 1. STRING INDEXING:
* String character positions can be referenced by Index (bracket notation), just like Arrays! 
* It is important to remember that just like Arrays, Strings are indexed with the starting 
* postion at 0 NOT 1. 
*
*/
//REFERENCE BY INDEX//

var aString = "Kittens";

/* Here we have a simple String containing 7 characters. If we want to access the first 
* character in the String, all we need is the Variable name and bracket notation containing 
* the first CHARACTER POSITION of the String, which is referenced with 0.
*/

console.log(aString[0]); // prints => K

/* 
* 2. STRINGS ARE IMMUTABLE!:
* Unlike Arrays, Strings cannot be changed simply by accessing their character positions.
*/
//IMMUTABILITY//

aString[0] = "M";

/* At first glance it seems as though this code would change the letter "K" in the aString 
* Variable to "M". However, it doesn't work, because in JavaScript STRINGS ARE IMMUTABLE. 
* You can't change a String in this manner! 
* 
* 3. STRING CONCATENATION:
* ConcateWHATtion? Concatenation is just a fancy way of saying "sticking things together". 
* One thing you CAN do with Strings is combine them together into one String! This is 
* accomplished by using the "+" operator.
*/
//CONCATENATION//
var xString = " aren't smart!";
var butAreCute = aString + xString;
console.log(butAreCute); // prints => "Kittens aren't smart!"

/* Here the String "Kittens aren't smart!" will be printed to the console as a result of 
* CONCATENATING the two Strings "Kittens" and " aren't smart!". It is worth noting that 
* in order for the butAreCute variable to end up as a correctly formatted sentence,  
* the xString variable had to start with a space. Spaces are characters!
* Pay extra attention to this detail.
*
* 4. STRING METHODS:
* Another way to manipulate Strings is by using Methods. Methods are special built-in
* Functions that help us do one thing or another. Methods are called using dot notation. 
* EX: xString.length, butAreCute.toUpperCase(), etc..
*/
//SOME STRING METHODS//
// .length  //
console.log(butAreCute.length); // prints => 21

/* The .length Method gives the number of characters in a String. The returned value will 
* always be a NUMBER. This method also works on Arrays!
*/
// .toUpperCase(), .toLowerCase() //
console.log(butAreCute.toUpperCase()); // prints => "KITTENS AREN'T SMART!"

/* The .toUpperCase() Method will convert all String characters to UPPERCASE. Conversely,
* .toLowerCase() will convert all to LOWERCASE. 
*
* There are many more Methods for manipulating Strings. 
*
* Search the net to learn some and try them out!!
*/