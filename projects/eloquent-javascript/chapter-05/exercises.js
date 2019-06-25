// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(array) {
 return array.reduce((a, n) => a.concat(n));
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(value, testF, updateF, bodyF) {
 while(testF(value)) {
   bodyF(value); 
   value = updateF(value);    
  } 
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, test) {
  let passed = [];
  for(let v of array){
    if(test(v)) passed.push(v);
  } return (array.length === passed.length); 
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////


  // find the SCRIPT each character belongs to
  //test every character in string for direction property
  //count how many times a direction property occurs, highest is dominant
function dominantDirection(text) {
  let scripts = [];
  for(let i = 0; i < text.length; i++){ 
  let code = text[i].codePointAt(0);
  scripts.push(characterScript(code))
  } 
  let directions = scripts.filter(s => s !== null);
  let count = countBy(directions, s => s.direction === 'ltr')
  if(count.length < 2) {return "ltr";}
  let ltr = count[0].count;
  let rtl = count[1].count;
  if(ltr > rtl) return 'ltr';
   else return 'rtl';
  
}

function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
      return script;
    }
  }
  return null;
}

function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({name, count: 1});
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
