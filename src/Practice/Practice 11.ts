// Declare a variable with an initial value of null and type it as string. Use type assertion to assign a string value to this variable and then print its length.

let myVariable: string | null = null;
myVariable = 'Hello, Programmer!' as string;
console.log(myVariable.length);