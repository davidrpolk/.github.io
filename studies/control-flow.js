/*
* CONTROL FLOW:
*
* 0. Something that is very useful in programming to be able to change the path of processing that
* your program takes based on whether certain conditions are true or not. This is called changing
* Control-Flow, and it is done by using Conditional Statements: if/else/else if and switch statements
* are all examples of Conditional Statements.
*
* 1. IF/ELSE/ELSE IF:
* These are used to test whether conditions within paranthesis are true or false and tell the
* program which path to take based on each condition.
*/
var x = 2;
if(x > 1){
    console.log("it is greater");
} else if (x === 1){
    console.log("is equal to 1");
} else console.log("it is less than 1"); // this chain compares if x is more than 1, if it is 
// , it prints => "it is greater", if it isn't greater than 1 it checks if x is equal to 1, 
// if it is, prints => "is equal to 1", otherwise prints => "it is less than 1"
// !!!It's best to use an if/else chain when you need to set a condition that
// will determine the possibitity of two actions(or a chain of them).!!!
// 
/*
* 2. SWITCH STATEMENTS:
* Another way to make comparisons is by using a Switch Statement. A Switch Statement compares
* an input value to a list of possibilities called Cases.
*/
var s = "big";

switch (s) {
    case "small": console.log("it is small");
    break;
    case "medium": console.log("it is medium");
    break;
    case "big": console.log("its is big");
    break;
    default: console.log("not found");
}
/* Here the input value(the variable s) is compared to each Case. If the input matches
* any case, the code after the colon will be run. If no matches are found, the Default
* statement will run. The Break command ends the Switch Statement Control-Flow.
* !!!It's best to use a Switch Statement when you want to compare a value against a list
* of possibilites!!!
* 
*/
