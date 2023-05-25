// Create a TypeScript program that declares an array of numbers. Use the spread  operator to pass the elements of the array as arguments to a function that finds the minimum and maximum values of the array. Use destructuring to assign the minimum and maximum values to separate variables, and log them to the console.

function findMinMaxValues(...numbers: number[]): [number, number] {
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    return [min, max];
  }
  
  const numbersTS: number[] = [10, 5, 8, 3, 2, 6];
  
  const [minValue, maxValue] = findMinMaxValues(...numbersTS);
  
  console.log("Minimum value:", minValue);
  console.log("Maximum value:", maxValue);
  