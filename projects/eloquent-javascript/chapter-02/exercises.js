
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(inputNum) {
  let n = '';
  for(let i = 1; i <= inputNum; i++){
    n += '#'
    console.log(n)
  }
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz(num1, num2) {
       
    while (num1 <= num2){
        
        if ( num1 % 3 === 0 && num1 % 5 === 0 ) {
            console.log('fizzbuzz');
        } else if (num1 % 3 === 0){
            console.log('fizz');
        } else if (num1 % 5 === 0){
            console.log("buzz");
        }  else {console.log(num1);}
        num1++;
    } 

}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

var board = ' # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n';
console.log(board);
var size = 3;
function drawChessboard(size){
var board = "";
for(let i = 1; i <= size; i++) {
  for (let j = 1; j <= size; j++){
    if ((i + j) % 2 === 0) {
      board += " ";
      } else board += "#";
    } board += "\n";
  } console.log(board);
} 

/* function drawChessboard(size) {
var board = '';
for(let i = 1; i <= size; i++) {
    if(i % 2 === 0){
    for(let k = 1; k <= size; k++){
      if(k % 2 === 0){
        board += " ";
      } else board += "#"
    } board += "\n"; 
    } else {
     for(let h = 1; h <= size; h++){
      if(h % 2 === 0){
        board += "#";
        } else board += " "
      } board += "\n" 
    }
  }  console.log(board);
}
also works^^^

function drawChessboard2(height, width){
var board = "";
for(let i = 1; i <= height; i++) {
  for (let j = 1; j <= width; j++){
    if ((i + j) % 2 === 0) {
      board += " ";
      } else board += "#";
    } board += "\n";
  } console.log(board);
} 

version 2 of drawChessboard. This version of the function allows for any
width number value, with any height number value!
*/
////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
