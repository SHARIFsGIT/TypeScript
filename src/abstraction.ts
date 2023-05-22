// Interface
// interface IVehicle {
//     name: string;
//     model: string;
// } 
// const vehicle: IVehicle = {
//     name: "Ford",
//     model: "Mustang"
// }
interface IVehicle{
    startEngine(): void;
    stopEngine(): void;
    move(): void;
}
class Vehicle implements IVehicle{
    constructor(public name: string, public model: string, public cost: number){

    }
    startEngine(): void{
        console.log("Start engine");
    } 
    stopEngine(): void {
        console.log("Stop engine");
    }
    move(): void {
        console.log("Moving");
    }
    test(){
        console.log("Testing");
    }
}
// const vehicle1 = new Vehicle();
const vehicle2 = new Vehicle("Car", "Tesla", 20000);

// Abstract class
abstract class Bike{
    constructor(public name: string, public brand: string, public model: string){}
    abstract startEngine(): void
    // {
    //     console.log("Starting");
    // }
    abstract stopEngine(): void
    // {
    //     console.log("Stoping");
    // }
    move(): void{
        console.log("Moving");
    }
    // test(){
    //     console.log("Testing");
    // }
}
// const bike1 = new Bike("Bike", "Volvo", '2015')
// bike1.startEngine();
class Bicycle extends Bike{
    startEngine(): void {
        console.log("Starting");
    }
    stopEngine(): void {
        console.log("Stoping");
    }
}