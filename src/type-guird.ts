// Of-guird
type typeOfData = number | string;
const doSomething = (a: typeOfData): typeOfData => {
    if (typeof a === 'number') {
        return a;
        
    } else {
        return a;
    }
}
console.log(doSomething(23));
console.log(doSomething("hello"));

// In-guird
type A ={
    name: string,
    phone: number,
}
type B ={
    name: string,
    address: string,
    salary: number,
}
const getInfo = (info: A | B) => {
    if ('phone' in info) {
        return `Type A element phone: ${info.phone}`;
    }
    else if ('salary' in info) {
        return `Type B element salary: ${info.salary}`;
    }
}

// Instance of guird
class P {
    position: string;
    salary: number;
    constructor(position: string, salary: number) {
            this.position = position;
            this.salary = salary;
        }

showDetails() {
    console.log(`Position: ${this.position}`);
}
}

class Q extends P {
    constructor(position: string, salary: number) {
            super(position, salary);
    }
    showSalary() {
        console.log(`Salary: ${this.salary}`);
    }
}

class R extends P {
    constructor(position: string, salary: number) {
            super(position, salary);
    }
    showSalaryWithPosition(){
        console.log(`Salary: ${this.salary}, Position: ${this.position}`);
    }
}
const P1 = new Q("Developer", 1500);
const P2 = new R("Engineer", 2000);

function findInstance (person: P){
    if (person instanceof Q) {
        person.showSalary();
    }
    else if (person instanceof R) {
        person.showSalaryWithPosition();
    }
}