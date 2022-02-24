import { Sorter } from "./Sorter"
import { NumbersCollection } from "./NumbersCollection"
import { CharactersCollection } from "./CharctersCollection"


const numbersCollection = new NumbersCollection([50,3,-5,0])
numbersCollection.sort();
console.log(numbersCollection.data)


const charactersCollection = new CharactersCollection('Xaayb')
charactersCollection.sort()
console.log(charactersCollection.data)


/*class Sorter {
   
    //  the union operator looks at the properties between the two and only allows you the use
    //  the ones that apply to both the common properties with array we can target an index
    // however you cannot do that with a string 
        constructor ( public collection: number[] | string ) {}
    
    
    sort(): void {
    const {length }= this.collection
    
    
    
    for ( let i= 0; i < length; i++) {
        for ( let j= 0; j < length -i -1; j ++) {
            
            // the logic below only works if collection is number []
            // if collection is an array of numbers 
            // the line below is a Type Guard 
            if (this.collection instanceof Array)
            // collection === number[]
            if ( this.collection[j] > this.collection [j+ 1]) {
                const leftHand = this.collection[j];
                this.collection[j]= this.collection[j+1];
                this.collection[j +1] = leftHand
            }
    // if collection is string use this logic below
    // type guard below works for primitive values not array 
    if( typeof this.collection === 'string'){
        
    }
    
    
        }
    
    
    }
    }
    }
*/
