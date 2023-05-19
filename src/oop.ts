class Person {
    public name: string;
    public age: number;
    constructor(yourName: string, yourAge: number) {
        this.name = yourName;
        this.age = yourAge;
    }
    personInfo(){
    console.log(`Client: ${this.name}, ${this.age}`);
}
}
const personNormal = new Person("Sharif", 27);
personNormal.personInfo();

// Parameter properties
class PersonWithPP {
    constructor(
        public yourName: string, 
        public yourAge: number) {}
        public personInfo(){
            console.log(`Client: ${this.yourName}, ${this.yourAge}`);
        }
        }
        const personWithPP = new Person("Mizan", 30);
        personWithPP.personInfo();