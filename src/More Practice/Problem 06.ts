// Create an interface called Person that includes properties for name (string), age (number), and email (string). Then create an array of Person objects and write a function that takes the array and a string email as parameters, and returns the Person object that matches the email or null if no match is found.

interface IPerson {
    name: string;
    age: number;
    email: string;
  }
  const people: IPerson[] = [
    { name: "John Doe", age: 25, email: "john@example.com" },
    { name: "Jane Smith", age: 30, email: "jane@example.com" },
    { name: "Mike Johnson", age: 35, email: "mike@example.com" },
  ];
  
  function findPersonByEmail(people: IPerson[], email: string): IPerson | null {
    for (const person of people) {
      if (person.email === email) {
        return person;
      }
    }
    return null;
  }
const foundPerson: IPerson | null = findPersonByEmail(people, "jane@example.com");
console.log(foundPerson);
