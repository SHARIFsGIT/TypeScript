const myBoolean: boolean [] = [true, false];
const myStrings: Array<string> = ["one", "two", "three", "four", "five"];

type myArray = Array<number>;
const myNumbers: myArray = [1, 2, 3, 4, 5];

type myArr<T> = Array<T>;
const myStrings2: myArr<string> = ["one", "two", "three", "four", "five"];

// Array of object
const ourInfo: myArr<object> = [
    {name: "John", age: 25},
    {name: "Jane", age: 30},
    {name: "Jill", age: 25},
    {name: "Jane", age: 30} // no error if age is missing
]

const ourInfoGen: myArr<{name: string, age: number}> = [
    {name: "John", age: 25},
    {name: "Jane", age: 30},
    {name: "Jill", age: 25},
    {name: "Jane", age: 30}
]

type ourInfoGenType = {name: string, age: number}
const ourInfoGenWithType: myArr<ourInfoGenType> = [
    {name: "John", age: 25},
    {name: "Jane", age: 30},
    {name: "Jill", age: 25},
    {name: "Jane", age: 30}
]

// Tuple in generic
type myGenType = [number, string];
const tupGen: myGenType = [25, 'Sharif'];
type myGenTypeDynamic<X,Y> = [X, Y];
const tupGenDynamic: myGenTypeDynamic<boolean, string> = [true, 'Sharif'];

// Generic function
const printInfo = <P, Q>(param1: P, param2: Q) => {
    console.log(`param1: ${param1}, param2: ${param2}`);
}
printInfo<boolean, number>(true, 5);
printInfo<string, boolean>('Sharif', true);

const printInfoWithReturn = <P, Q>(param1: P, param2: Q):P => {
    console.log(`param1: ${param1}, param2: ${param2}`);
    return param1;
}
console.log(printInfoWithReturn<string, number>("Sharif", 30));

// Generic interface
interface IInfo {
    name: string;
    age: number;
    marks: number
}

interface IInfoDynamic<T> {
    name: string;
    age: T;
    marks: number
}
const me: IInfoDynamic<number> = {
    name: "John",
    age: 25,
    marks: 10
}

// keyof
type MovieType = {
    name: string;
    year: number;
    director: string;
}
const data: MovieType = {
    name: "The Shawshank Redemption",
    year: 1994,
    director: "J.R.R. Tolkien"
}

type myMovieType = keyof MovieType;
const myText1: myMovieType = 'name';

console.log(data[myText1]);