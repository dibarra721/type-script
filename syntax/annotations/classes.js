var Vehicle = /** @class */ (function () {
    function Vehicle(color) {
        this.color = color;
    }
    // public drive(): void {
    //     console.log('chugga chugga');
    // }
    Vehicle.prototype.honk = function () {
        console.log('beep');
    };
    return Vehicle;
}());
// class Car  extends Vehicle {
// public drive() : void {
//     console.log('vroom')
// }
// startDrivingProcess():void{
//     this.drive()
// }
// }
var vehicle = new Vehicle('orange');
console.log(vehicle.color);
// const car = new Car();
// car.startDrivingProcess ()
// car.honk()
// const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk()
