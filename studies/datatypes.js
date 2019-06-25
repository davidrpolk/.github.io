/*
* DATATYPES:
* 
* 0: JavaScript is a language built for managing Data. Data is merely information about
* things. Think of some different types of information you could gather simply
* by looking around the room you are in. If you had to communicate what 
* you were seeing, what object names, amounts, and descriptions of things 
* come to mind? All of this information is DATA. In order to tell JavaScript what
* we are describing and what we want to do with it, we have to "speak" in
* JavaScript language. That means using the TYPES of Data that are programmed
* into the language. 
*
* 1. Here is a list of all of the types of Data we can use in JavaScript:
* 
*    Number
*    String
*    Boolean
*    Null
*    Undefined
*    Object
*    Array
*    Function
*    NaN
*    Infinity
* 
* The types Number, String, Boolean, Null and Undefined are all classified as
* Simple Data-Types. They are "simple" because each instance of these types only
* contains a value of that type. Objects, however, are Complex Data-Types. They 
* are unique because they can contain any number of values of any Data-Type.
*
* 2. NUMBERS:
* Numbers represent just that, a Number. Just like in any math, a Number can represent
* many different things, but they work in JavaScript just as they do in math.
* You can do equations and everything with them! 
*/
//NUMBERS//
var n = 23;
var num = 10000;

/*
* The previous example shows two different Numbers assigned to Variables. 
* Notice that Numbers in JavaScript are written WITHOUT COMMAS.
*/
var sum = n + num;
console.log(sum); // prints => 10023
/*
* We can do math with Numbers just as expected. 
*
* 3. STRINGS:
* A String is a group of characters that is identified by being enclosed in quotation
* marks(single '' or double "", as long as the opening and closing quotes match).
*/
//STRINGS//
var str = "Yep, sure is.";
var str2 = 'I sure like the way 3 = 4-3 924 283904 looks on the screen';
var str3 = "ai;e;je1o&%#%VTG?@!IY";
/*
* The three above Varibles are all assigned to Strings. Any character within quotations 
* is treated the same(there are exceptions for some reserved key combinations
* that act as commands.).
*
* 4. BOOLEANS:
* Boolean values are the result of comparisons and consist of either True or False.
*/
//BOOLEAN//
var one = 1;
var two = 2;
console.log(one < two); // prints => true
console.log(1 > 2); // prints => false
/*
*
* 5. NULL:
* The Null value is used when a placeholder is needed. Null doesn't mean anything 
* other than an "empty" or unknown value.
*/
//NULL//
var empty = null;
var number = 13;
console.log(empty + number); // prints => 13
/*
* Because Null is equal to nothing, (empty + number) resolves to 13. 
*
* 6. UNDEFINED:
* Undefined is used to check if a Variable has been assigned to a value.
*/
//UNDEFINED//
var x;
console.log(x); // print => undefined
/*
* This returns undefined because the Variable x was declared but never
* initialized(assigned a Value).
*
* 7. OBJECTS:
* Objects are a special Data-Type because they can contain values of other
* Data-Types. This makes Objects a Complex Data-Type, and is a key feature
* of JavaScript. Objects are created by assigning a Variable to {}. The values
* that Objects contain are created by adding Key/Value pairs. An Object Key
* is what is used to access the Value. Key/Value pairs are created either at
* Object declaration or by assignment using access notation(see below). In
* an Object, the Key/Value pairs are separated by commas.
* The Values of Objects can be accessed
* using bracket notation. To do this, the Key name is used.
* EX. object['Keyname']
* The other way to access Object Values is by using dot notation.
* EX. object.Keyname
* Another name for Key/Value pair is Property. 
* Arrays are a type of Object that behave in their own way. Arrays are created by
* assigning a Variable to [] and whose values are accessed by bracket notation. 
* However, unlike Objects, Array values are indexed by number, starting with
* the first position being 0. Like Objects, each Value in an Array
* is separated by a comma. 
* A third type of Object is a Function. See "Functions" section for detailed info.
*/
//OBJECT AND ARRAY FORMATTING//

var thisIsAnObject = {
    value1: "letrzzz",
    value2: 43,
    value3: false,
    value4: null
};
// This is the format for creating an Object that contains Properties at its
// Declaration/Initialization.

var anotherObject = {};
anotherObject.value1 = "more ltrz!";
anotherObject['value2'] = 44;
console.log(anotherObject); // prints => {value1: "more ltrz!", value2: 44}

// Here, the Object anotherObject was created with no Properties 
// and then assigned Properties afterwards. 

var thisIsAnArray = ['jrn', 284, true];

// And this is the format for creating an Array.

var anotherArray = [];
anotherArray.push(1);
anotherArray.unshift(null);
console.log(anotherArray); // prints => [null, 1]

// Like Objects, Arrays can be created with no values and have values added later.
// Manipulating Arrays can be done by using Methods, in this example, .push and 
// .unshift. There are many Array Methods! 

/* 8. NaN:
* NaN stands for "Not a Number" and is the result of trying to do an arithmetic operation
* with values that aren't numbers.
*/
//NaN//
var z = "seven";
console.log(2 / z); // prints => NaN
/*
* 9. INFINITY:
* Infinity represents a value that has no limit. Similarly -Infinity represents a limitless NEGATIVE value. 
*/