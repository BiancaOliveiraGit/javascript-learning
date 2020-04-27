console.log('functions');

const later = function(){
  console.log('I will fire when called');
}

later();

function after(){
 console.log("another way to fire when called"); 
};
after();

const arrow = ()=> {
  console.log('arrow function');
};

arrow();

(() => {
  console.log('immediate fire');
  console.log('used to encapsulate code')
}
)();

/*
// can also name a IIEF function
(function named() => {
  console.log('nmed IIEF');
}
)();
*/
