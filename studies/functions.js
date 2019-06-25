/*
* FUNCTIONS:
* 
* 0. A Function is a special type of Object whose body contains a block of code that can
* take input values and return new values. A Function can be thought of as a "sub-program" that
* runs inside of the program as a whole. Functions differ from other Objects in that they can 
* be called, running their code at every call. There are 4 parts to a Function Declaration:
* Name, Parameters/Arguments, Body and Return statement.
*
* 1. FUNCTION DECLARATION:
*/ 
function addStuff (argument1, argument2){
    return argument1 + argument2;
}; 
/*
* The first part of declaring a Function is naming it, similar to naming a Variable.
* This is done using the function Keyword: function addStuff

* In the second section the paranthesis contain the Parameters that will be passed into the code 
* of the Function. Parameters can be any type of value, including other Functions! When a Function 
* is called and the Parameters are given a value, they are called Arguments: (argument1, argument2)
* A Function can also run with no Parameters. Arguments can be either simple or complex data-types.
*
* Note: When complex data-types are accessed as variables, or passed into functions as arguments,
* their actual data/value isn't directly stored in memory. Instead, a reference to them is used as a shortcut
* in processing. This is why Functions can access complex data-types outside of their own scope. 
* Conversely, simple data-types are actually copied by their value.
*
* The Body section of a Function contains all of the code that will be executed when the Function 
* is called. This is the section enclosed by curly braces: {
*    return argument1 + argument2;
* };
*
* The final element of a Function is the return statement. The return statement is the value that
* is the result of the code that is contained within the code block. This value is "returned" to
* the scope in which the Function was declared. It's important to understand that a return  
* statement is NOT the same as a console.log(). A console.log() merely prints information to
* the console, while a return statement is a value that can be used by a program. 
*
* 2. CALLING A FUNCTION:
*/
//FUNCTION CALLING//
addStuff(2, 5); // returns => 7 
addStuff(3, 9) // returns => 12
/*
* As you can see, the Function addStuff resolves to a Number value of 7 when the Arguments are (2, 5).
* But, because Functions are dynamic, when we call addStuff the second time with the Arguments (3, 9),
* it resolves to 12. 
*
* 3. FIRST CLASS FUNCTIONS:
* Functions are labelled as First-Class because they can be stored inside of Objects, Arrays, Variables
* and can be returned inside of Functions or passed into Functions as Arguments.
*/
//FUNCTIONS IN FUNCTIONS//
function compareType(base) {

    return function (test){
        return (base === typeof test);
    } 
};
/*
* Using a Function within a Function allows us to keep a Parameter while passing different Arguments
* to the inner Function
*/
var testIfNum = compareType('number');
testIfNum(6); // returns => true
testIfNum('6') // returns => false
/*
* By assigning the variable testIfNum to the Function compareType with 'number' as the Argument, we
* can call testIfNum with an Argument that will be passed to the INNER Function. In this example,
* testIfNum(6) compares the Data-Type of the Argument 6 with the type that was determined when
* testIfNum was Assigned to the comepareType Function with the Argument 'number'. This is useful
* because we can now change the compareType Argument to any Data-Type without having to rewrite code.
*/
//EXAMPLE//
var testIfString = compareType('string');
testIfString("is it?"); // returns => true
testIfString(true); // returns => false
/*
*
* 4. PASSING FUNCTIONS AS ARGUMENTS:
* Arguments can also be Functions! By using Functions this way we can create more dynamic programs.
*/
//FUNCTIONS AS ARGUMENTS//
function toUpper(string){
  return string.toUpperCase();
}; // This Function takes a String and converts its characters to uppercase.

function toLower(string){
    return string.toLowerCase();
} // converts to lowercase... 

const datArray = [1, 3, "r", true, 4, 890, "No wAy!", 837429, 923847239, 8748932, 'yes','wWwNnway', 'KITTENS'];

function stringFromArr (array, func) {
    const output = [];
    for(let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'string'){
           output.push(func(array[i]));
        }
    } return output;

}; 
/*
* The Function stringFromArr has been designed to search through an Array and apply a Function to only 
* the Strings in the Array and then output those Strings to a new Array.
*/
stringFromArr(datArray, toUpper); // returns => ["R", "NO WAY!", "YES", "WWWNNWAY", "KITTENS"]
stringFromArr(datArray, toLower); // returns => ["r", "no way!", "yes", "wwwnnway", "kittens"]