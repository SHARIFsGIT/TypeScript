// Normal function in JS
function heroNormalJS(a, b){
    return "This is a normal function";
}
heroNormalJS(2, 3);

// Normal function in TS
function heroNormalTS(c: number, d: number): string {
    const sum = c + d;
    return `The sum of the TS function is ${sum}`;
}
console.log(heroNormalTS(2, 3));

// Arrow function in JS
const heroArrowJS = (e, f) => {
    return e+f;
};

// Arrow function in TS
const heroArrowTS = (g: number, h: number) => {
    const sum = g + h;
    return `The sum of the TS function is ${sum}`;
};
console.log(heroArrowTS(9, 10));