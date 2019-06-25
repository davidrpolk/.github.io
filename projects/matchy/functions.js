/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function search(animals, name){
    for(let i = 0; i < animals.length; i++){
        if(animals[i].name.toLowerCase() === name.toLowerCase()){
            return animals[i];
        } 
    } return null;
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(animals, name, replacement) {
   for(let i = 0; i < animals.length; i++){
        if(animals[i].name.toLowerCase() === name.toLowerCase()){
            return animals[i] = replacement;
        } 
    } return null; 
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, name) {
    for(let i = 0; i < animals.length; i++){
        if(animals[i].name.toLowerCase() === name.toLowerCase()){
            return animals.splice(i, 1);
        } 
    } return null; 
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(animals, animal) {
     for(let i = 0; i < animals.length; i++){
        if(animals[i].name.toLowerCase() === animal.name.toLowerCase()){
            return null;
        } 
    } if (animal.name.length > 0 && animal.species.length > 0)  {
        return animals.push(animal);
    } else return null;
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
