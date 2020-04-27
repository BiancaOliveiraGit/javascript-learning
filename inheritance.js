'use strict'
console.log('inheritance');

//exercise 1
// let's create FunctionalSet to provided filter(), map(), reduce() because Set deosn't have these methods
/*class FunctionalSet extends Set{
  filter(predicate){
   return new FunctionalSet([...this].filter(predicate));
  }
  
  map(mapper){
    return new FunctionalSet([...this].map(mapper));
  }
  
  reduce(accumulator, index){
    return [...this].reduce(accumulator, index);
  }
 }
  
const setProp = new FunctionalSet(['jack', 'jill','tom','jerry']).add('bill'); // add() is a method of Set 

const jSet = setProp.filter(name => name.startsWith('j'));
const allCaps = setProp.map(name => name.toUpperCase());

const totalLengthOfWords = 
      setProp.filter(name => name.startsWith('j'))
          .reduce((total, word) => total + word.length, 0);

console.log(jSet);
console.log(allCaps);
console.log(totalLengthOfWords);
*/
// exercise 3
class BoundedSet extends Set{
  constructor(max, intialVal){
    super();
    this.max = max;
    
    //put validation in constructor
    if(intialVal.length <= max){
      intialVal.forEach(val => this.add(val));
    }
  }
  
  add(value){
    if(this.has(value)) return; //check if this value already in collection
    
    if(this.size < this.max){
      super.add(value);
    }else{
      throw new Error('exceeded capacity of 5 elements');
    }
  }
}

const bSet = new BoundedSet(5, ['apple', 'banana', 'grape', 'mangoe']);
bSet.add('orange');
bSet.add('apple');

try{
  bSet.add('peach');
}catch(ex){
  console.log(ex.message); //exceeded capacity of 5 elements
}

bSet.delete('grape');
bSet.add('avocardo');
console.log(bSet.size); //5

// exercise 4
class Base{
  copy() {
    return new Base();
  }
}

class Derived1 extends Base{
  //
}

class Derived2 extends Base{
  copy() {
    return new Derived2();
  }
}

const d1 = new Derived1();
const d2 = new Derived2();

console.log(d1.copy()); // Base
console.log(d2.copy()); //dervived2