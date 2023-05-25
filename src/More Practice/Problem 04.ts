// Suppose you have an array of tuples, where each tuple represents a product and contains the product name, price, and quantity. Write a TypeScript function that calculates the total cost of all the products in the array, using a generic type for the tuple and a type alias for the array.

type ProductTuple<T extends [string, number, number]> = T[];

function calculateTotalCost<T extends [string, number, number]>(products: ProductTuple<T>): number {
    let totalCost = 0;

    for (const product of products) {
    const [, price, quantity] = product;
    totalCost += price * quantity;
}
return totalCost;
}
const productsT: ProductTuple<[string, number, number]> = [
    ['Product 1', 10, 2],
    ['Product 2', 20, 3],
    ['Product 3', 5, 1],
];
  
const totalCost: number = calculateTotalCost(productsT);
console.log(totalCost);
  