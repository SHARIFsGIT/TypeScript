// Create a function that takes a parameter which can be either a string or an array of strings. If it's a string, return the uppercase version of the string. If it's an array of strings, return an array with each string in uppercase.

function convertToUppercase(input: string | string[]): string | string[] {
    if (typeof input ==='string') {
            return input.toUpperCase();
        } else if (Array.isArray(input)) {
            return input.map(str => str.toUpperCase());
        } else {
            throw new Error('Invalid input type');
        }
    }
const strResult = convertToUppercase('hello');
console.log(strResult);
const arrResult = convertToUppercase(['Sharif', 'Darth Vader', 'Islam', 'Jonathan']);
console.log(arrResult);