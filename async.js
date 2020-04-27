'use strict'
console.log('async');

// create prosime function
const compute = function(number){
  if(number < 0){
    return Promise.reject('no negative number allowed');
  }
  
  if(number === 0) {
    return Promise.resolve(0);
  }
  
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve(Math.sqrt(number)), 1000);
  });
};

// create call to promise function
const doCompute = async function(number) {
  try{
    const result = await compute(number);
     console.log(result);
  }catch(err) {
     console.log(err)
  }
};

// don't need to create a variable to hold promise object
doCompute(-1);