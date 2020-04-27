'use strict'
console.log('rectangle-class');

class Rectangle {
    constructor(a,b) {
        this.length = a;
        this.width = b; 
        this.perimeter = 2*(a + b);
        this.area = a * b;
    }
}

const a = 4;
const b = 2;

const rec = new Rectangle(a, b);

console.log(rec.length);
console.log(rec.width);
console.log(rec.perimeter);
console.log(rec.area);

console.log('#---------------------------------------------#');
console.log('polygon-class');

class Polygon{
    constructor(sides){
        this.sides = sides;
        //console.log(sides);
    };
    // methods
    perimeter() {
        return this.sides.reduce((a,b) => a+b, 0);
    };
}

const rectangle = new Polygon([10, 20, 10, 20]);
const square = new Polygon([10, 10, 10, 10]);
const pentagon = new Polygon([10, 20, 30, 40, 43]);

console.log(rectangle.perimeter());
console.log(square.perimeter());
console.log(pentagon.perimeter());