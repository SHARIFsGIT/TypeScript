// Return true for all data types except null and undefined.
const inputSomething : unknown = "hello";
const checkInput = inputSomething ?? "no input";
console.log(checkInput);

const inputSomething1 : unknown = null;
const checkInput1 = inputSomething1 ?? "no input";
console.log(checkInput1);