// Define an interface called Person that has the following properties: name (string), age (number), and email (string). Create an object based on this interface and print out its properties.

interface IPerson {
    name: string;
    age: number;
    email: string;
}
const person: IPerson = {
    name: "John",
    age: 20,
    email: "ychag@example.com"
};

console.log(person.name);
console.log(person.age);
console.log(person.email);
