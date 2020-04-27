'use strict'
console.log('classes');

class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author  = author;
    this.pages = pages;
    this.sold = 0;
  }
  // property getter & setter
  get copiesSold(){
    return this.sold;
  }
  set copiesSold(value){
    if(value < 0){
      throw new Error('Error sold copies cannot be negative value ');
      }
    this.sold = value;
  }
  // static members
  static get rating(){
    return '5 star';
  }
}

const book = new Book('Who Moved My Cheese?', 'SpencerJohnson',96);
console.log(book.title); //who moved my cheese
console.log(book.pages); //96

try{
  book.pages = 96;
}catch(ex){
  console.log(ex.message);
  //Cannotset property pages of#<Book> which has only a getter
}

console.log(book.copiesSold);

book.copiesSold = 1;

try{
  book.copiesSold = -2;
} catch(ex){
  console.log(ex.message);
}

console.log(book.copiesSold);
console.log(Book.rating);

// exercise 3 - computed properties
class Todo{
  constructor() {
  this['learn'] = 'done';
  this['code'] = 'wip';
  }
 get completed() {
   return Object.keys(this)
   .filter(key => this[key] === 'done')
   .length;
 } 
}

const todo = new Todo();
console.log(todo['learn']); //done
console.log(todo['code']); //wip
//console.log(todo['test']); //wip
console.log(todo['completed']); //1

console.log(Object.keys(todo));
console.log(Object.values(todo));

// exercise 4 maps
const createTodo = function(){
  return new Map([['learn', 'done'],['test','wip']]);
}
const doto = createTodo();//returns a map
console.log(doto.get('learn'));

const map2 = new Map([[1,'one'],[2,'two']]);
console.log(map2.get(1));

const create = function(play){
  return new Set(play.map(p => p.toUpperCase()));
};

const sports = create(['tennis', 'ping pong']);

console.log(sports.has('ball'));