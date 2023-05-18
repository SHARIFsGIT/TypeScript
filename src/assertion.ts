const thinkSomething = 34.45945;
console.log(thinkSomething.toFixed(2));

const thinkSomething2: unknown = 34.45945;
console.log((thinkSomething2 as number).toFixed(2));

const luckyItem = (item: string | number): number | string | undefined => {
    if (typeof item === 'string') {
        return `This is a string ${item}`;
    }
    // else if (typeof item === 'number') {
        return `This is a number ${item}`;
    // }
}
console.log(luckyItem(23));