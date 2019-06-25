 // #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-davidrpolk');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 */

var maleCount = function(array) {
 return _.filter(array, function(v){
     return (v.gender === 'male')}).length;
  
};

var femaleCount = function(array){
  return _.reduce(array, function (seed, v, i){
      if(v.gender === 'female') seed.push(v.gender);
      return seed;
  }, []).length;
};

var oldestCustomer = function(array){
  let oldestName = '';
  _.map(array, function(v){
       if(v.age === Math.max(..._.pluck(array, 'age'))) {
           return oldestName = v.name;
       }
   }); return oldestName;
};

var youngestCustomer = function(array){
      let youngestName = '';
  _.map(array, function(v){
       if(v.age === Math.min(..._.pluck(array, 'age'))) {
           return youngestName = v.name;
       }
   }); return youngestName;
};

var averageBalance = function(array){
  let balanceArr = _.pluck(array, 'balance');
  let total = 0;
    for(let v of balanceArr){
        total += stringNumToNum(v);
        
    } return (total / balanceArr.length);
};


var firstLetterCount = function(array, letter){
    let names = _.pluck(array, 'name');
    let matches = [];
    for(let v of names){
        if(v[0].toLowerCase() === letter.toLowerCase()){
            matches.push(v[0]);
        }
    } return matches.length;
};

var friendFirstLetterCount = function(array, customer, letter){
  let count = 0;
  for (let i = 0; i < array.length; i++){
    if(array[i].name.toLowerCase() == customer.toLowerCase()){
        let friendNamesArr = _.pluck(array[i].friends, 'name');
        for (let value of friendNamesArr){
          if(value[0].toLowerCase() == letter.toLowerCase())  count++;
      }
    }
  } return count;
};
var friendsCount = function(array, name){
    let friends = [];
    for(let i = 0; i < array.length; i++){
        if(_.pluck(array[i].friends, 'name').includes(name)) {
            friends.push(array[i].name);
        }
    } return friends;
};

var topThreeTags = function(array){
   let tagsArr = _.pluck(array, 'tags');
   let agg = [];
   let results = [];
   for (let value of tagsArr) agg = agg.concat(value);
   _.each(agg, function(v, i, c){
       let count = 0;
       for(let value of c)  {
           if(value === v) {
              count++;
           } 
       } results.push([v, count]);
   }); 
   let numOfOcc = [];
   for(let value of results) numOfOcc.push(value[1]);
   let maxTagRep = Math.max(...numOfOcc);
   let mostUsed = [];
   for(let value of results) {
     if(value[1] === maxTagRep) mostUsed.push(value[0]);
   } 
   return _.first(mostUsed, 3);
};

var genderCount = function(array){
  let mCount = [];
  let fCount = [];
  let tCount = [];
  let allCount = _.pluck(array, 'gender');
  for(let v of allCount){
    if(v === 'male') mCount.push(1);
    if(v === 'female') fCount.push(1);
    if(v === 'transgender') tCount.push(1);
  }
  let obj = {};
  obj.male = _.reduce(mCount, (p, v) => p + v);
  obj.female = _.reduce(fCount, (p, v) => p + v);
  obj.transgender = _.reduce(tCount, (p, v) => p + v);
  return obj;
};

/////////////////////////

function stringNumToNum(string){
  let justNums = '';
  for(let v of string){
    if(/\d/.test(v) || /\./.test(v)){
      justNums += v;
    }
  } return parseFloat(justNums);
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
