// Create a function that takes an array of numbers as input and returns the sum of all the numbers in the array. Make sure to define the types for the input parameter and return value.

function sumOfArray(numbers: number[]): number{
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){ // for (let num of numbers) {
            sum += numbers[i];
        }
        return sum;
}
const numbers: number[] = [1, 2, 3, 4, 5];
const result: number = sumOfArray(numbers);
console.log(result);