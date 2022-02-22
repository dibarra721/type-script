const carMakers = ['ford', 'toyota', 'chevy'];

const dates= [new Date(), new Date()]

const carsByMake :string [] [] = [

]
// help with inference when extracting values 
const car= carMakers[0];

const myCar= carMakers.pop()

// prevent incompatible values

// carMakers.push(100);


// help with 'map'

carMakers.map((car:string): string => {
    return car.toUpperCase()
})

// flexible types 

const importantDates: (Date | string )[] = [new Date()];
importantDates.push('2020-10-20')
importantDates.push(new Date ())
// importantDates.push(100)- this is neither string or date


// tuple- array-like structure where each element represents some property of a record 
// when you have multiple variables in an object there is a loss of information in typescript; tuple looks like an array, the order of the array is important because then you lost track of what property is attached to the variable