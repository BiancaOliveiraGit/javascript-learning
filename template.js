'use strict';
console.log('template literals');

// hacker rank workings
console.log('hacker rank');

function tags(text, ...exp) {
  return 5;
}
let num = 1;
const z = tags`i want how any cakes ${num}.`;
console.log(z);
// !!!! above expample show that no text will be written out because tag overrides it with a number 5

function sides(literals, ...expressions) {
  const A = expressions[0];//140;
  const P = expressions[1];//48;

  const calc = Math.pow(P, 2) - (16*A);
  const s1 = (P + (Math.sqrt(calc))) / 4;
  const s2 = (P - (Math.sqrt(calc))) / 4;

  return ([s2, s1]);
}

let s1 = 140;
let s2 = 48;
[s1, s2] = [s1, s2].sort();

const [x, y] = sides`The area is: ${s1 * s2}.\nThe perimeter is: ${2 * (s1 + s2)}.`;

console.log((s1 === x) ? s1 : -1);
console.log((s2 === y) ? s2 : -1);


console.log('#--------------------------------------------#');
// strip it back to basics
let person = 'Mike';
let age = 28;

function myTag(strings, ...Exp) {
  let str0 = strings[0]; // "That "
  let str1 = strings[1]; // " is a "

  // There is technically a string after
  // the final expression (in our example),
  // but it is empty (""), so disregard.
  // let str2 = strings[2];

  let ageStr;
  if (Exp[1] > 99){
    ageStr = 'centenarian';
  } else {
    ageStr = 'youngster';
  }

  // We can even return a string built using a template literal
  return `Override ${Exp[0]}${str1}${Exp[1]}`;
}

let output = myTag` ${ person } is a  ${ age }`;

console.log(output);
// That Mike is a youngster
console.log('#--------------------------------------------#');

const numbers = [1, 2, 3];
const test = numbers.reduce((tot,next) => tot + next, 0);
console.log(test);

const templateFunc = function(text, ...expressions){
  const sum = expressions.reduce((tot,next) => tot + next, 0);
  //console.log(sum);

  //return `this is the sum ${sum}`;
  return `this is the sum ${expressions.reduce((tot,next) => tot + next, 0)}`;
}
const message = templateFunc `trying to understand literals so sum: ${numbers} .`
console.log(message);

console.log('#--------------------------------------------#');
// Rediscovering JavaScript book
// exercise 1
const greet = function(name, gender) {
  return `Hello, ${gender === Symbol.for('female') ? 'Ms.' : 'Mr.'} ${name}`;
};
  
  console.log(greet('Sara', Symbol.for('female')));
  console.log(greet('Tom', Symbol.for('male')));

// exercise 2
const name = 'Jane';
const stripMargin = function(text, ...expressions){
  const exceptLast = expressions.map(function(expression, index){
    return `${text[index]}${expression.toString().toUpperCase()}`;
  }).join('');
  
  const result = `${exceptLast}${text[text.length - 1]}`;
  
  return result.replace(/[\n][\t\s]+(\w)/g, ' $1').trim();
};
const processed = stripMargin` This is for ${name} and it needs to be 
                            delivered by December24th.`;

console.log(processed);

