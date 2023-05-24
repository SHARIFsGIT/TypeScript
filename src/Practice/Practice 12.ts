// Create a function that takes an input parameter of type unknown. Inside the function, implement type guards to check if the input is of type string or number and perform different operations based on the type.

function TypeGuird(input: unknown) {
    if (typeof input === "string") {
        console.log(`Input is string: ${input}`);
    } else if (typeof input === "number") {
        console.log(`Input is number: ${input**2}`);
    } else {
        console.log('Unknown input type');
    }
}
TypeGuird('hello');
TypeGuird(5);
TypeGuird(true);