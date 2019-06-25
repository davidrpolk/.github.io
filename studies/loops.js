/*
* LOOPS:
*
* 0. In order to repeat a certain action in JavaScript, we use Loops. Loops can be useful for
* searching through Arrays or Objects or for repeating an action while a certain condition is true.
* There are 3 different kinds of Loops: for, for in, and while.
*
* 1. FOR LOOPS:
* The For Loop is mostly used for cycling through Arrays and is made up of 3 parts, all enclosed
* in paranthesis. Syntax: (initialization; condition; increment/decrement) { code }; The code will
* run until the condition section is no longer true.
*/
var array = [1,2,3];
for(let i = 0; i < array.length; i++) {
    console.log(array[i]); 
} // the code block {} runs for 3 iterations up to the end of the Array and prints each iteration.

for(let number = 20; number >= 0; number--) {
    console.log(number); 
} // this for loop runs backwards from 20, sending a console.log of 'number' on every iteration
/*
* 2. WHILE LOOPS:
* This type of Loop will run as long as the specified condition is true, and is structured:
* while (condition) { code here };
*/
var n = 2; 
while (n >= 7) {
    console.log (n);
    n--;
}// this loop will never run because the condition starts as false!
var b = 9; 
while (b >= 7) {
    console.log (b);
    b--;
}// this runs for 3 iterations and prints => 9 
//                                           8
//                                           7
/* 3. FOR-IN LOOPS:
* Since the values in Object Literals are not referenced by Number, we need a special Loop
* to cycle through their Properties. For-In Loops are set up this way:
* for (var key in object) { code here };
*/
var cat = {
    name: "fatty",
    color: "white",
    size: "extra-large"
};
for (var key in cat){
    console.log(cat[key]);
} // cycles through each key and prints the value associated with that key
for (var key in cat){
    console.log(key);
}// prints each key name