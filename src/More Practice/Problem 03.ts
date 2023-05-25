// You have an interface for Product, containing the product's id, name, price, and category. You want to filter an array of Products based on a specific criterion and value.

// Write a TypeScript generic function that takes this array, a criterion , and returns a new array containing only the products that match the given criterion and value. Use a generic type parameter in the function signature to ensure type safety.

interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
}
  
function filterProducts<T>(products: T[], criterion: keyof T, value: T[keyof T]): T[] {
    return products.filter((product) => product[criterion] === value);
}
  
const products: Product[] = [
    { id: 1, name: 'Product 1', price: 10, category: 'Category 1' },
    { id: 2, name: 'Product 2', price: 20, category: 'Category 2' },
    { id: 3, name: 'Product 3', price: 30, category: 'Category 1' },
    { id: 4, name: 'Product 4', price: 40, category: 'Category 2' },
];
  
const filteredProducts: Product[] = filterProducts(products, 'category', 'Category 2');
console.log(filteredProducts);