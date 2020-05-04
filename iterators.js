console.log('iterators');
'use strict'

console.log('ex1');
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
for(const l of letters){
  console.log(l);
}
//entries
for(const l of letters.entries()){
  console.log(l);
};

console.log('ex2');
const numbers = [1,2,3];
console.log(Object.getOwnPropertyNames(numbers));
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(numbers)))

console.log('ex3');
class Message {
  constructor(text) {
    this.text = text;
  }
  
  [Symbol.replace] (mess, value) {
    console.log('inside replace override method');
    return this.text.replace(mess, value);
  }
};

const message = new Message('There are no stupid questions.');
console.log('stupid'.replace(message, 's****'));

//----
var tasks = [
  {
 
    'name'     : 'Write for Envato Tuts+',
 
    'duration' : 120
 
  },
  {
 
    'name'     : 'Work out',
 
    'duration' : 60
  },
  {
 
    'name'     : 'Procrastinate on Duolingo',
 
    'duration' : 240
 
  }
];
var task_names = [];
 
tasks.forEach(function (task) {
 
    task_names.push(task.name);
     
});