// JS object
const heroObjectJS = {
    name: 'Khan',
    age: 42,
    profession: 'actor',
    isMarried: true
}

// TS object
const heroObjectTS: {
    name: string,
    age: number,
    readonly profession: string,
    isMarried?: boolean
} = {
    name: 'Khan',
    age: 42,
    profession: 'actor',
    // isMarried: true
}

heroObjectTS.name = "Siam";
console.log(heroObjectTS);