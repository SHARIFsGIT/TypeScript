// Define two interfaces: Car with properties like make, model, and year, and Driver with properties like name and licenseNumber. Create a function that takes objects of type Car and Driver and returns an object with the combined properties of both types.

interface Car {
    make: string;
    model: string;
    year: number;
}

interface Driver {
    name: string;
    licenseNumber: string;
}

function combineCarAndDriver(car: Car, driver: Driver): {car: Car, driver: Driver} {
    return {
        car: car, 
        driver: driver
    };
}
const myCar: Car = {
    make: 'Ford',
    model: 'Mustang',
    year: 2019
}
const myDriver: Driver = {
    name: 'John',
    licenseNumber: 'A5C89'
}

const combinedData = combineCarAndDriver(myCar, myDriver);
console.log(combinedData);