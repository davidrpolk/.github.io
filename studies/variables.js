/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * To create a variable we use one of 3 keywords, each with its own properties: var, let, const
 *
 *  There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";


/* 1. LET: 
*  The let keyword is very similar to var, with one important exception: its scope! Scope refers
* to the accessibility of a variable. 
*/
var i = "don't change me!";
var array = [1,2,3];
for(var i = 0; i < array.length; i++) {
    console.log(array[i]); 
} // if we run this loop with the var named i, it reassigns the variable i to 0 and then runs the
//Loop. 
console.log(i);// this will print => 3  because it was the value of i that ended the Loop. Since
// i was declared using the var Keyword, the initialization of i to "don't change me!", was 
// written over! The var Keyword is only scoped to an object(not literal) when it is inside
// of a Function's code block. Because of this Variables declared with var are known as 
// Function Scoped. 
var i = "don't change me!";
for(let i = 0; i < array.length; i++) {
    console.log(array[i]); 
}
console.log(i); // this prints => "don't change me!"  because inside the for Loop i was declared
// using the Keyword let, which is only accessible inside the code block in which it was
// created.! let is referred to as Block Scoped.
/*
* 2. CONST:
* The behavior of variables declared with the Keyword const are similar to those declared 
* with let, with one exception: const variables CANNOT be reassigned!
*/
const me = 1;
// const me = 2;  will give the error "identifier 'me has already been declared"

// const is used to avoid unintentionally reassigning variables.
/*
*  3. HOISTING:
*  When Variables(var, let, const) are declared, their declarations are moved to the top of the
*  scope in which they were declared. This is for processing reasons. Functions which are defined
*  later in code can be called before they appear "in order".
*/
run(); //prints => "still runs!" 
//even though the function 'run' is declared AFTER it is called, it still runs because JS
// hoists it to the top of its scope.!

let run = function(){
    console.log("still runs!");
};

a = 12;
console.log(a); //even though 'a' hasnt been declared yet, the assignment to '12' still works because
// its declaration was hoisted to the top of its scope!
let a;