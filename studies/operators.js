/*
* OPERATORS:
*
* 0. Operators are characters(=, +, -, <, >, /, *, etc..) 
* that are used to produce behavior such as assigning variables,
* doing math calculations, making comparisons, controlling logical statements, and in one case,
* altering control-flow. One aspect of Operators is the number of parameters (Operands) that are
* involved in the statement that contains the Operators: 1 Unary, 2 Binary, 3 Tenary.
* 
* 1. UNARY OPERATORS:
* Unary Operators include: ++(increment), --(decrement), !(bang), typeof, -(negative).
*/
//UNARY//
var x = 1;
x++;// increases the variable by 1
x--;// decreases the variable by 1
typeof x; // typeof returns a string of the values data-type, this returns => "number"
x = -1; //negative creates a negative number
// ! will be discussed in logical operators
/*
* 2. ARITHMETIC OPERATORS:
* These are Operators that perform arithmetic operations(+, -, *, /, %)
*/
var y = 1;
var n = 2;
console.log(n + y); // simple addition, prints => 3
console.log(n - y); // simple subtraction, prints => 1
console.log(n * y); // simple multiplication, prints => 2
console.log(n / y); // simplie division, prints => 2
console.log(5 % 3); // gives the remainder of the two operands prints => 2 
/*
* 3. ASSIGNMENT OPERATORS:
* In order to Assign an Variable to a Value we use: =
* It's also possible to perform an Arithmetic Operation AND Assigment at once: +=, -=, *=, /=
* These Operators take the first Operand(Variable) and Assign it to what the Variable would be
* if the Operation were done to itself and the second Operand.
*/
var num = 1;
num += 1; // takes the variable num and Assigns it to (num + 1). Here num = 2
var num2 = 2;
num2 -= 1; // similar but subtracts instead of adds
var num3 = 3;
num3 *= 2; // now num3 is assigned to 6
var num4 = 4;
num4 /= 2; // num4 is assigned to 2
/*
* 4. COMPARISON OPERATORS:
* Comparisons are used for comparing one thing to another and always return a Boolean value.
* They include: ===(strictly equals), ==(loosely equals), !==(not equal), < (less than),
* >(greater than), <=(less than or equal to), >=(greater than or equal to). 
* 
*/
console.log(1 === 1); // resolves to true because 1 is equal to 1 AND is of the same type
console.log(1 === '1'); // resolves to false because 1 and '1' are of different types
console.log(1 == '1'); // resolves to true because 1 and '1' are equal after the data-types are coerced
console.log(1 !== 1); // resovles to false because 1 IS equal to 1
console.log(1 < 2); // resloves to true
console.log(2 < 1); // resovles to false
console.log(2 <= 2); // resolves to true
console.log(2 >= 1); // resovles to true
/*
* 5. LOGICAL OPERATORS:
* Typically used with Booleans values and returns those values. They include: && (both/and),
* || (or), ! (logical NOT)
*
(true && true) // would resolve to true because BOTH sides of the && Operator are true
(false && true) // would resolve to false because BOTH sides are NOT true
(true || true) // resolves to true because at least one side of the || Operator is true
(true || false) // resolves to true because one side is true
(!true) // resolves to false, because NOT true is false
/*
* 6. THE TENARY OPERATOR:
* The Tenary Operator can be used in the place of if/else/else-if statements.
*/
var t = 4;
if(t < 4){
    console.log("less");
} else console.log("more or equal") // prints to the console => "more or equal"

t < 4 ? console.log("less") : console.log("more or equal") // this is the Tenary Operator form
//of the same if/else statement above
