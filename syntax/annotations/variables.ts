let apples: number  = 10;

let speed: string ='fast';


let hasName : boolean = true;

let nothingMuch : null = null
let nothing : undefined = undefined;


// built in objects

let now: Date = new Date();


// array type 
let colors: string[] = [ 'red', 'green', 'blue']
let myNumbers: number[] = [1,2,3]
let truths: boolean[] = [true, false, true]

// classes

class Car{ 

}

let car: Car = new Car();

//  object literal 

let point: {x: number ; y: number} ={ 
    x:10,
    y:20
};

// function

const logNumber : (i : number) => void = ( i: number) => {
    console.log(i)
}

// type annotations what we developers code inference -typescript guesses 
// if declaration and initialization are on the same line typescript will figure out the type of 'color' for us 

// let apples = 5 (typescript can guess)
// let apples 
// =5 ( typescript cannot guess )


// function that returns 'any


const json = '{ "x": 10, "y" :20 }'
const coordinates : {x: number; y:number } = JSON.parse(json)
console.log(coordinates)


//  declare variable on one line and intializate it later 


let words= ['red', 'green', 'blue']
let foundWord: boolean;

for ( let i= 0; i < words.length; i++) {
    if (words [i] === 'green') {
        foundWord = true
    }
}


//  variable whose type cannot be inferred correctly 

let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i =0; i < numbers.length; i++) {
    if (numbers[i] > 0){
    numberAboveZero = numbers[i]
}
}



