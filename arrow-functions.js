'use strict';
console.log('arrow functions');

//hacker rank exercise
const hacks = [1,2,3,4,5];
const result = hacks.map(m => m % 2 === 0 ? m * 2 : m *3)

console.log(result);
console.log('#------------------------------------');

//exercise 1 
// JS uses lexical scoping for variables in anonymous functions

//exercise 2
const success = (value) => ({value}); //need brackets around because an object literal
const blowup = (value) => {throw new Error(`blowing up with value ${value}`); };

console.log(success('yay'));
//console.log(blowup('crap')); //working so correct

//exercise 3
const greet = (message, ...names) => console.log(message + ' ' + names.join(', '));
const helloJackJill = greet.bind(null,'hello', 'jack', 'jill');
helloJackJill();

//exercise 4
const sam = {
  name: 'Sam',
  age: 2,
  play: function(toy)  {
    return 'I am ' + this.name + ', age '+ this.age +' with ' + toy;
  }
};
console.log(sam.play('ball'));

//exercise 5
//functional style
const numbers = [1, 5, 2, 6, 8, 3, 9, 7, 6];
let totalOfDoubleOfEven = 0;

console.log(numbers.filter(e => e%2 === 0)
           .map(e => e*2)
           .reduce((total, e) => total + e));

console.log(numbers.reduce((total, e) => total - e))