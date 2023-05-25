// Suppose you have an array of numbers in TypeScript, and you want to find the sum of all the even numbers in the array. How would you approach this problem and write code to solve it?

function sumEvenNumbers(numbers: number[]): number {
    return numbers.reduce((sum, num) => {
      if (num % 2 === 0) {
        return sum + num;
      } else {
        return sum;
      }
    }, 0);
  }
  const numbersT: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sumOfEvenNumbers: number = sumEvenNumbers(numbersT);
  console.log(sumOfEvenNumbers);
  