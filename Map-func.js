
let somefun = function(){
  console.log('some func called');
  return 5;
};

var mapfunc = new Map();
mapfunc.set(1, somefun);

let val =mapfunc.get(1)(); //the extra () will call the function straight away

console.log(val);

