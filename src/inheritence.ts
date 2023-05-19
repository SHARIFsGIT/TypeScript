class PersonClass {
    name: string
    age: number

    constructor(YourName: string, YourAge: number) {
            this.name = YourName
            this.age = YourAge
    }
// show() {
//     console.log(`Name: ${this.name}, Age: ${this.age}`);
// }
show(YourName: string, YourAge: number): void {
    console.log(`Name: ${YourName}, Age: ${YourAge}`); 
}
}

class PersonClass2 extends PersonClass {
    salary: number
    position: string

    constructor(YourName: string, YourAge: number, YourSalary: number, YourPosition: string) {
            super(YourName, YourAge);
            this.salary = YourSalary
            this.position = YourPosition
    }
    show() {
            console.log(`Name: ${this.name}, Age: ${this.age}, Salary: ${this.salary}, Position: ${this.position}`);
    }
}
const junior = new PersonClass("Junior", 20);
const senior = new PersonClass2("Junior", 25, 2500, "Engineering");
console.log(senior);
console.log(senior.show());