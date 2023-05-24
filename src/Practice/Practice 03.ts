// Write a function called calculateArea that takes the length and width of a rectangle as parameters and returns its area. Define the types for the input parameters and return value.

function calculateArea(len: number, width: number) {
    return len * width;
}
const len: number = 5;
const width: number = 10;
const area: number = calculateArea(len, width);
console.log(area);