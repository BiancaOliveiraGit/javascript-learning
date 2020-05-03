
let somefun = function(){
  console.log('some func called');
  return 5;
};
let otherfun = function(){
  console.log('another func called');
  return 10;
};

var mapfunc = new Map();
mapfunc.set('x', somefun);
mapfunc.set('y', otherfun);

let val = mapfunc.get('x')(); //the extra () will call the function straight away
console.log(val);

let findval = 'y';
let result = mapfunc.get(findval); // with no () then it returns a function
console.log(result());

console.log(5 * mapfunc.get(findval)());