'use strict'
console.log('promises');

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
const doCompute = function(promiseFunc) {
  promiseFunc
    .then(result => console.log(result))
    .catch(err => console.log(err));
};

const negVal = compute(-1);
doCompute(negVal);