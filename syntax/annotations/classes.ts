
class Vehicle {


    // color:string 
    constructor( public color: string){
        this.color= color
    }
    // public drive(): void {
    //     console.log('chugga chugga');
    // }

protected  honk(): void {
    console.log('beep');
  }
}



class Car  extends Vehicle {

constructor(public wheels:number, color:string){
    super('red')
}


public drive() : void {
    console.log('vroom')
}

startDrivingProcess():void{
    this.drive();
    this.honk()
}
}



const vehicle = new Vehicle('orange')
console.log(vehicle.color)

const car = new Car(4, 'red');
car.startDrivingProcess ()

