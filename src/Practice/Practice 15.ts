// Create a generic function called filterArray that takes an array of any type and a predicate function as parameters. The function should return a new array that contains only the elements for which the predicate function returns true. Ensure that the function is flexible enough to work with different types of arrays.

function filterArray<T>(array: T[], predicate: (item: T) => boolean): T[] {
    const filteredArray: T[] = [];
    for (const element of array) {
        if (predicate(element)) {
            filteredArray.push(element);
        }
    }
    return filteredArray;
}
const numbers1 = [1, 2, 3, 4, 5]
const evenNumbers = filterArray(numbers1, n => n % 2 === 0);
console.log(evenNumbers);

const names = ["John", "Paul", "George", "Ringo"]
const longNames = filterArray(names, n => n.length > 5);
console.log(longNames);