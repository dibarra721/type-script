var apples = 10;
var speed = 'fast';
var hasName = true;
var nothingMuch = null;
var nothing = undefined;
// built in objects
var now = new Date();
// array type 
var colors = ['red', 'green', 'blue'];
var myNumbers = [1, 2, 3];
var truths = [true, false, true];
// classes
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
var car = new Car();
//  object literal 
var point = {
    x: 10,
    y: 20
};
// function
var logNumber = function (i) {
    console.log(i);
};
// type annotations what we developers code inference -typescript guesses 
// if declaration and initialization are on the same line typescript will figure out the type of 'color' for us 
// let apples = 5 (typescript can guess)
// let apples 
// =5 ( typescript cannot guess )
// function that returns 'any
var json = '{ "x": 10, "y" :20 }';
var coordinates = JSON.parse(json);
console.log(coordinates);
